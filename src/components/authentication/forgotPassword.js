import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../style.css';
import './authentication.css';
import displayAlerts from '../ui/alert/alert.js';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../../firebase-config.js";

const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const emailField = document.getElementById('email');

forgotPasswordForm.addEventListener( 'submit', async e => {
    e.preventDefault();
    const email = emailField.value.trim();
    document.querySelectorAll('.alert').forEach( el => el.remove() );
    if( !email ) return emailField.insertAdjacentHTML( 'afterend', displayAlerts('Please Enter Email Address' ) );
    try{
        await sendPasswordResetEmail(auth, email);
        forgotPasswordForm.innerHTML = displayAlerts( 'If an account with this email exists, a password reset link has been sent! Please check your inbox.', 'success', 'd-inline-flex' );
    }catch( err ){
        if( err.code === 'auth/network-request-failed' ) forgotPasswordForm.insertAdjacentHTML( 'afterbegin', displayAlerts( 'Network error: Please check your internet connection and try again.', 'danger', 'mb-3') );
    }
});