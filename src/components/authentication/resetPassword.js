import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../style.css';
import './authentication.css';
import displayAlerts from '../ui/alert/alert';
import togglePasswordVisibility from '../utils/togglePasswordVisibility';
import { auth } from "../../firebase-config.js";
import { confirmPasswordReset } from 'firebase/auth';

const resetPasswordForm = document.getElementById('resetPasswordForm');
const newPasswordField = document.getElementById('newPassword');
const confirmPasswordField = document.getElementById('confirmPassword');
const submitResetPassword = document.getElementById('submitResetPassword');
const urlParams = new URLSearchParams(window.location.search);
const oobCode = urlParams.get('oobCode');

togglePasswordVisibility( 'newPasswordVisibility', 'newPassword' );
togglePasswordVisibility( 'confirmPasswordVisibility', 'confirmPassword' );

resetPasswordForm.addEventListener( 'submit', async e => {
    e.preventDefault();
    document.querySelectorAll('.alert').forEach((el) => el.remove());
    const newPassword = newPasswordField.value.trim();
    const confirmPassword = confirmPasswordField.value.trim();
    if( !newPassword ) return newPasswordField.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Please Enter New Password' ) );
    if( !confirmPassword ) return confirmPasswordField.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Please Re-enter the Password' ) );
    if(newPassword === confirmPassword){
        try{
            submitResetPassword.disabled = true;
            await confirmPasswordReset( auth, oobCode, confirmPassword );
            resetPasswordForm.innerHTML = displayAlerts( 'Password reset successful. You can now log in with your new password.', 'success' );
            setTimeout( () => {
                window.location.href = '/login.html';
            }, 2000 );
        } catch( err ){
            console.log(err);
            switch( err.code ){
                case 'auth/expired-action-code':
                    resetPasswordForm.insertAdjacentHTML( 'afterbegin', displayAlerts( 'Invalid or expired reset link. Please try again.', 'danger', 'mb-3' ) );
                break;
                case 'auth/invalid-action-code':
                    resetPasswordForm.insertAdjacentHTML( 'afterbegin', displayAlerts( 'This password reset link is invalid or has already been used. Please request a new one.', 'danger', 'mb-3' ) );
                break;
                case 'auth/weak-password':
                    resetPasswordForm.insertAdjacentHTML( 'afterbegin', displayAlerts( 'Password should be at least 6 characters.', 'danger', 'mb-3' ) );
                break;
                case 'auth/network-request-failed':
                    resetPasswordForm.insertAdjacentHTML( 'afterbegin', displayAlerts( 'Network error: Please check your internet connection and try again.', 'danger', 'mb-3') );
                break;
                default:
                    resetPasswordForm.insertAdjacentHTML( 'afterbegin', displayAlerts('Something went wrong. Please try again later.', 'danger', 'mb-3') );
                break;
            }
        } finally{
            if( submitResetPassword ) submitResetPassword.disabled = false;
        }
    } else{
        resetPasswordForm.insertAdjacentHTML( 'afterbegin', displayAlerts( 'New Password and Confirm Password must be same.', 'danger', 'mb-3' ) );
    }
} );