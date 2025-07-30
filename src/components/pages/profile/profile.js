import './profile.css';
import { db } from '../../../firebase-config';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword} from 'firebase/auth';
import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { Country, State } from 'country-state-city';
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
const addressList = document.getElementById( 'addressList' );
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
                if( addressList ){
                    try{
                        const addressRef = collection( db, 'users', user.uid, 'addresses' );
                        const addressSnap = await getDocs( addressRef );
                        if( !addressSnap.empty ){
                            addressSnap.forEach( addressData => {
                                const address = addressData.data();
                                addressList.insertAdjacentHTML( 'afterbegin', `
                                    <div class="col-lg-4">
                                        <div class="h-100 px-3 py-4 border rounded-8 position-relative">
                                            ${ 
                                                address.default ?
                                                address.default === 'Shipping' ? `<span class="fs-xs lh-1 fw-medium px-2 py-1 text-success bg-success-subtle rounded-16 position-absolute top-0 start-0 translate-middle-y ms-3">Default Shipping</span>` : 
                                                address.default === 'Billing' ? `<span class="fs-xs lh-1 fw-medium px-2 py-1 bg-warning-subtle rounded-16 position-absolute top-0 start-0 translate-middle-y ms-3">Default Billing</span>` : '' :
                                                ''
                                            }
                                            <div class="d-flex align-items-center gap-2 fw-semibold mb-1">
                                                <span class="d-block flex-fill">${ address.address }</span>
                                                <div class="dropdown flex-shrink-0">
                                                    <a href="javascript: void(0);" class="dropdown-toggle d-block" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="18" height="18" class="d-block">
                                                            <use href="./src/assets/images/sprite.svg#threeDotsVertical"></use>
                                                        </svg>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end fs-sm">
                                                        <li class="mb-0">
                                                            <a href="./add-address.html?addressId=${ addressData.id }" class="edit-address dropdown-item d-flex align-items-center gap-1">
                                                                <svg width="16" height="16" class="d-block">
                                                                    <use href="./src/assets/images/sprite.svg#pencilSquare"></use>
                                                                </svg>
                                                                <span class="d-block">Edit</span>
                                                            </a>
                                                        </li>
                                                        <li class="mb-0">
                                                            <a href="javascript: void(0);" class="delete-address dropdown-item d-flex align-items-center gap-1" data-id="${ addressData.id }">
                                                                <svg width="16" height="16" class="d-block">
                                                                    <use href="./src/assets/images/sprite.svg#delete"></use>
                                                                </svg>
                                                                <span class="d-block">Delete</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p class="fs-sm mb-0"><span class="d-inline-block text-gray-600">Country:</span> ${ Country.getCountryByCode( address.country ).name }</p>
                                            <p class="fs-sm mb-0"><span class="d-inline-block text-gray-600">State:</span> ${ State.getStateByCodeAndCountry( address.state, address.country ).name }</p>
                                            <p class="fs-sm mb-0"><span class="d-inline-block text-gray-600">City:</span> ${ address.city }</p>
                                            <p class="fs-sm mb-0"><span class="d-inline-block text-gray-600">ZIP:</span> ${ address.zip }</p>
                                        </div>
                                    </div>
                                ` );
                            } );
                        } else{
                            if( addressList ) addressList.insertAdjacentHTML( 'afterbegin', displayAlerts( 'You Have no Address' ) );
                        }
                    } catch( err ){
                        console.log( err );
                    }
                    requestAnimationFrame( () => {
                        const editAddress = document.querySelectorAll( '.edit-address' );
                        const deleteAddress = document.querySelectorAll( '.delete-address' );
                        if( editAddress ){
                            editAddress.forEach( editBtn => {
                                // console.log(editBtn);
                            } );
                        }
                        if( deleteAddress ){
                            deleteAddress.forEach( deleteBtn => {
                                deleteBtn.addEventListener( 'click', async e => {
                                    e.preventDefault();
                                    const addressId = deleteBtn.getAttribute( 'data-id' );
                                    try{
                                        await deleteDoc( doc( db, 'users', user.uid, 'addresses', addressId ) );
                                        deleteBtn.closest( '.col-lg-4' ).remove();
                                    } catch( err ){
                                        console.log( err );
                                    }
                                } );
                            } );
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