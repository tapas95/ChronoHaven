import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../style.css';
import './authentication.css';
import togglePasswordVisibility from '../utils/togglePasswordVisibility';
import displayAlerts from '../ui/alert/alert';
import { auth, db } from "../../firebase-config.js";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const registerForm = document.getElementById('registerForm');
const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const maleField = document.getElementById('male');
const femaleField = document.getElementById('female');
const otherField = document.getElementById('other');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const agreeCheckField = document.getElementById('agreeCheck');
const submitRegister = document.getElementById('submitRegister');
const allFields = [ firstNameField, lastNameField, emailField, phoneField, maleField, femaleField, otherField, passwordField, confirmPasswordField, agreeCheckField ];
const loginBtn = document.getElementById( 'loginBtn' );
const urlParams = new URLSearchParams( window.location.search );
const redirectPath = urlParams.get( 'redirect' );
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;

if( loginBtn ){
    const loginLink = loginBtn.getAttribute( 'href' );
    redirectPath ? loginBtn.setAttribute( 'href', `${ loginLink }?redirect=${ redirectPath }` ) : loginBtn.setAttribute( 'href', `${ loginLink }` );
}

emailField.addEventListener( 'input', () => emailField.value = emailField.value.toLowerCase() );
phoneField.addEventListener( 'input', () => phoneField.value = phoneField.value.replace( /\D/g, '' ) );
togglePasswordVisibility( 'passwordVisibility', 'password' );
togglePasswordVisibility( 'confirmPasswordVisibility', 'confirmPassword' );
allFields.forEach( ( field ) => {
    field.addEventListener( 'input', () => {
        const alert = field.closest( ':is( .form-group, .form-check )' ).querySelector('.alert');
        if ( alert ) alert.remove();
    } );
} );

registerForm.addEventListener( 'submit', async e => {
    e.preventDefault();
    const firstName = firstNameField.value.trim();
    const lastName = lastNameField.value.trim();
    const email = emailField.value.trim().toLowerCase();
    const phone = phoneField.value.trim();
    const male = maleField.checked;
    const female = femaleField.checked;
    const other = otherField.checked;
    const password = passwordField.value.trim();
    const confirmPassword = confirmPasswordField.value.trim();
    const agreeCheck = agreeCheckField.checked;

    //client side validation
    document.querySelectorAll('.alert').forEach(el => el.remove());
    if( !firstName ) return firstNameField.insertAdjacentHTML( 'afterend', displayAlerts( 'Please Enter Your First Name' ) );
    if( !lastName ) return lastNameField.insertAdjacentHTML( 'afterend', displayAlerts( 'Please Enter Your Last Name' ) );
    if( !email ) return emailField.insertAdjacentHTML( 'afterend', displayAlerts( 'Please Enter Your Email' ) );
    if ( !emailRegex.test( email ) ) return emailField.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your email in the correct format (e.g., name@example.com).' ));
    if( !phone ) return phoneField.insertAdjacentHTML( 'afterend', displayAlerts( 'Please Enter Your Phone Number' ) );
    if ( !phoneRegex.test( phone ) ) return phoneField.insertAdjacentHTML( 'afterend', displayAlerts( 'Phone number must be 10 digits' ));
    if ( !male && !female && !other ) return maleField.parentElement.parentElement.parentElement.parentElement.insertAdjacentHTML( 'beforeend', displayAlerts( 'Please Select Your Gender' ) );
    if( !password ) return passwordField.parentElement.parentElement.insertAdjacentHTML( 'beforeend', displayAlerts( 'Please Enter a Password' ) );
    if ( password.length < 6 ) return passwordField.parentElement.parentElement.parentElement.parentElement.insertAdjacentHTML( 'beforeend', displayAlerts( 'Password must be at least 6 characters long' ));
    if( !confirmPassword ) return confirmPasswordField.parentElement.parentElement.insertAdjacentHTML( 'beforeend', displayAlerts( 'Please Confirm Your Password' ) );
    if ( password !== confirmPassword ) return confirmPasswordField.parentElement.parentElement.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Password and Confirm Password must be same.' ) );
    if( !agreeCheck ) return agreeCheckField.parentElement.parentElement.insertAdjacentHTML( 'beforeend', displayAlerts( 'You must agree to the Terms and Privacy Policy' ) );
    try{
        submitRegister.disabled = true;
        submitRegister.insertAdjacentHTML( 'beforeend', '<div class="spinner-border spinner-border-sm text-light" role="status"><span class="visually-hidden">Loading...</span></div>' );
        const createUser = await createUserWithEmailAndPassword( auth, email, password );
        await setDoc( doc( db, 'users', createUser.user.uid  ), {
            firstName,
            lastName,
            email,
            phone,
            gender: male ? 'Male' : female ? 'Female' : 'Other'
        } );
        registerForm.innerHTML = displayAlerts( 'Your account has been created successfully! You can now log in using your email and password.', 'success' );
        setTimeout( () => {
            redirectPath ? window.location.href = `./login.html?redirect=${ redirectPath }` : window.location.href = './login.html';
        }, 1000 );
    } catch( err ){
        switch( err.code ){
            case 'auth/email-already-in-use':
                emailField.insertAdjacentHTML( 'afterend', displayAlerts( 'This email is already registered. Please use a different email or try logging in instead.' ) );
            break;
            case 'auth/network-request-failed':
                registerForm.insertAdjacentHTML( 'beforeend', displayAlerts( 'Network error: Please check your internet connection and try again.', 'danger', 'mt-4') );
            break;
            default:
                registerForm.insertAdjacentHTML( 'beforeend', displayAlerts('Something went wrong. Please try again later.', 'danger', 'mt-4') );
            break;
        }
    } finally{
        submitRegister.disabled = false;
        const spinner = submitRegister.querySelector('.spinner-border');
        if( spinner ) spinner.remove();
    }
} );