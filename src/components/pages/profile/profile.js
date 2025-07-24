import './profile.css';
import { getCurrentUser } from "../../authentication/auth";
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import displayAlerts from '../../ui/alert/alert';

const firstNameEl = document.getElementById( 'firstName' );
const lastNameEl = document.getElementById( 'lastName' );
const emailEl = document.getElementById( 'email' );
const phoneEl = document.getElementById( 'phone' );
const genderEls = document.querySelectorAll( 'input[name="gender"]' );
const dobEl = document.getElementById( 'dob' );
const saveProfileBtn = document.getElementById( 'saveProfile' );

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

const renderProfile = async () => {
    const user = await getCurrentUser();
    if( user ){
        try{
            const userRef = doc( db, 'users', user.uid );
            const userSnap = await getDoc( userRef );
            if( userSnap.exists() ){
                const userData = userSnap.data();
                console.log(userData);
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
                        if (!profileData || typeof profileData !== 'object') return;
                        try{
                            await updateDoc( userRef, {
                                ...profileData
                            } );
                        } catch( err ){
                            console.log( err );
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