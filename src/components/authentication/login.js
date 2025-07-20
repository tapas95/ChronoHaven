import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../style.css';
import './authentication.css';
import displayAlerts from '../ui/alert/alert.js';
import togglePasswordVisibility from '../utils/togglePasswordVisibility.js';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config.js";
import syncLocalCartToUser from '../utils/syncLocalCartToUser.js';
import syncLocalWishlistToUser from '../utils/syncLocalWishlistToUser.js';

const loginForm = document.getElementById('loginForm');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginSubmit = document.getElementById('submitLogin');

togglePasswordVisibility( 'passwordVisibility', 'password' );

loginForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelectorAll('.alert').forEach((el) => el.remove());
    const email = emailField.value.trim();
    const password = passwordField.value.trim();
    if( !email ) return emailField.insertAdjacentHTML( 'afterend', displayAlerts( 'Please Enter Email Address' ) );
    if( !password ) return passwordField.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Please Enter Password' ) );
    loginSubmit.disabled = true;
    try {
        const userCred = await signInWithEmailAndPassword( auth, email, password );
        loginForm.innerHTML = displayAlerts( 'Signed in successfully. Redirecting now.', 'success' );
        await syncLocalCartToUser( userCred.user.uid );
        await syncLocalWishlistToUser( userCred.user.uid );
        setTimeout( () => {
            window.location.href = './';
        }, 1000 );
    } catch ( err ) {
        switch( err.code ){
            case 'auth/invalid-credential':
                loginForm.insertAdjacentHTML( 'afterbegin', displayAlerts( 'Invalid Email or Password', 'danger', 'mb-3') );
            break;
            case 'auth/network-request-failed':
                loginForm.insertAdjacentHTML( 'afterbegin', displayAlerts( 'Network error: Please check your internet connection and try again.', 'danger', 'mb-3') );
            break;
        }
    } finally{
        loginSubmit.disabled = false;
    }
});