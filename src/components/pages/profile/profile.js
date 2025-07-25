import './profile.css';
import { db, auth } from '../../../firebase-config';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword} from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getCurrentUser } from "../../authentication/auth";
import handleLogout from '../../utils/handleLogout';
import togglePasswordVisibility from '../../utils/togglePasswordVisibility';
import displayAlerts from '../../ui/alert/alert';

const firstNameEl = document.getElementById( 'firstName' );
const lastNameEl = document.getElementById( 'lastName' );
const emailEl = document.getElementById( 'email' );
const phoneEl = document.getElementById( 'phone' );
const genderEls = document.querySelectorAll( 'input[name="gender"]' );
const dobEl = document.getElementById( 'dob' );
const saveProfileBtn = document.getElementById( 'saveProfile' );
const updatePasswordForm = document.getElementById( 'updatePasswordForm' );
const oldPasswordEl = document.getElementById( 'oldPassword' );
const newPasswordEl = document.getElementById( 'newPassword' );
const confirmNewPasswordEl = document.getElementById( 'confirmNewPassword' );
const updatePasswordBtn = document.getElementById( 'updatePasswordBtn' );

togglePasswordVisibility( 'oldPasswordVisibility', 'oldPassword' );
togglePasswordVisibility( 'newPasswordVisibility', 'newPassword' );
togglePasswordVisibility( 'confirmNewPasswordVisibility', 'confirmNewPassword' );

function validateProfileData(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const selectedGender = [ ...genderEls ].find( genderEl => genderEl.checked );
    document.querySelectorAll( '.alert' ).forEach( el => el.remove() );
    if( firstNameEl && !firstNameEl.value.trim() ) return firstNameEl.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your First Name' ) );
    if( lastNameEl && !lastNameEl.value.trim() ) return lastNameEl.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your Last Name' ) );
    if( emailEl && !emailEl.value.trim() ) return emailEl.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your Email' ) );
    if( emailEl && !emailRegex.test( emailEl.value.trim() ) ) return emailEl.insertAdjacentHTML( 'afterend', displayAlerts( 'Invalid Email Address' ) );
    if( phoneEl && !phoneEl.value.trim() ) return phoneEl.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your Mobile Number' ) );
    if( phoneEl && !phoneRegex.test( phoneEl.value.trim() ) ) return phoneEl.insertAdjacentHTML( 'afterend', displayAlerts( 'Phone number must be 10 digits' ) );
    if( !selectedGender ){
        return genderEls[ 0 ].closest( '.gender-group' ).insertAdjacentHTML( 'beforeend', displayAlerts( 'Please Select Your Gender' ) );
    }
    if( dobEl && !dobEl.value.trim() ) return dobEl.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your Date of Birth' ) );
    return {
        firstName: firstNameEl.value.trim(),
        lastName: lastNameEl.value.trim(),
        email: emailEl.value.trim(),
        phone: phoneEl.value.trim(),
        gender: selectedGender.value.trim(),
        dob: dobEl.value.trim()
    };
}

function validateChangePasswordFields(){
    document.querySelectorAll( '.alert' ).forEach( el => el.remove() );
    if( oldPasswordEl && !oldPasswordEl.value.trim() ) return oldPasswordEl.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Please Enter Your Old Password' ) );
    if( newPasswordEl && !newPasswordEl.value.trim() ) return newPasswordEl.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Please Enter New Password' ) );
    if( oldPasswordEl.value.trim() === newPasswordEl.value.trim() ) return newPasswordEl.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Old Password and New Password Should Not be Same' ) );
    if( confirmNewPasswordEl && !confirmNewPasswordEl.value.trim() ) return confirmNewPasswordEl.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Please Enter Your New Password Again' ) );
    if( newPasswordEl.value.trim() !== confirmNewPasswordEl.value.trim() ) return confirmNewPasswordEl.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Your New PassWord and Confirm Password Should be Same' ) );
    return {
        oldPassword: oldPasswordEl.value.trim(),
        newPassword: newPasswordEl.value.trim(),
        confirmNewPassword: confirmNewPasswordEl.value.trim()
    }
}

const renderProfile = async () => {
    const user = await getCurrentUser();
    if( user ){
        if( user.providerData.some( data => data.providerId === 'google.com' ) ){
            document.getElementById( 'change-password-tab' ).remove();
            document.getElementById( 'change-password-tab-pane' ).remove();
        }
        try{
            const userRef = doc( db, 'users', user.uid );
            const userSnap = await getDoc( userRef );
            if( userSnap.exists() ){
                const userData = userSnap.data();
                const matchedgenderEl = [ ...genderEls ].find( genderEl => genderEl.value === userData.gender );
                if( firstNameEl ) firstNameEl.value = userData.firstName || '';
                if( lastNameEl ) lastNameEl.value = userData.lastName || '';
                if( emailEl ) emailEl.value = userData.email || '';
                if( phoneEl ) phoneEl.value = userData.phone || '';
                if( matchedgenderEl ) matchedgenderEl.checked = true;
                if( dobEl ) dobEl.value = userData.dob || '';
                if( saveProfileBtn ){
                    saveProfileBtn.addEventListener( 'click', async e => {
                        e.preventDefault();
                        const profileData = validateProfileData();
                        saveProfileBtn.disabled = true;
                        if (!profileData || typeof profileData !== 'object') return;
                        try{
                            await updateDoc( userRef, {
                                ...profileData
                            } );
                            saveProfileBtn.insertAdjacentHTML( 'beforebegin', displayAlerts( 'Profile information updated successfully!', 'success' ) );
                        } catch( err ){
                            console.log( err );
                        } finally{
                            saveProfileBtn.disabled = false;
                        }
                    } );
                }
                if( updatePasswordForm ){
                    updatePasswordForm.addEventListener( 'submit', async e => {
                        e.preventDefault();
                        const passwordData = validateChangePasswordFields();
                        if( passwordData ){
                            const credential = EmailAuthProvider.credential( user.email, passwordData.oldPassword );
                            try{
                                if( updatePasswordBtn ) updatePasswordBtn.disabled = true;
                                await reauthenticateWithCredential( user, credential );
                                await updatePassword( user, passwordData.newPassword );
                                updatePasswordForm.insertAdjacentHTML( 'beforebegin', displayAlerts( 'Password updated successfully!', 'success', 'mb-4' ) );
                                await handleLogout();
                            } catch( err ){
                                console.log( err );
                                if ( err.code === "auth/weak-password" ){
                                    updatePasswordForm.insertAdjacentHTML( 'beforebegin', displayAlerts( 'Password should be at least 6 characters.', 'danger', 'mb-4' ) );
                                } else if( err.code === "auth/invalid-credential" ){
                                    updatePasswordForm.insertAdjacentHTML( 'beforebegin', displayAlerts( 'Old password is incorrect.', 'danger', 'mb-4' ) );
                                } else{
                                    updatePasswordForm.insertAdjacentHTML( 'beforebegin', displayAlerts( `Something went wrong: ${ err.message }`, 'danger', 'mb-4' ) );
                                }
                            } finally{
                                if( updatePasswordBtn ) updatePasswordBtn.disabled = false;
                                updatePasswordForm.reset();
                            }
                        }
                    } );
                }
            }
        } catch( err ){
            console.log( err );
        }
    }
}
renderProfile();