import './profile.css';
import { getCurrentUser } from "../../authentication/auth";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase-config';

const firstName = document.getElementById( 'firstName' );
const lastName = document.getElementById( 'lastName' );
const email = document.getElementById( 'email' );
const phone = document.getElementById( 'phone' );

const renderProfile = async () => {
    const user = await getCurrentUser();
    if( user ){
        try{
            const userRef = doc( db, 'users', user.uid );
            const userSnap = await getDoc( userRef );
            if( userSnap.exists() ){
                const userData = userSnap.data();
                console.log(userData);
                if( firstName ) firstName.value = userData.firstName;
                if( lastName ) lastName.value = userData.lastName;
                if( email ) email.value = userData.email;
            }
        } catch( err ){
            console.log( err );
        }
    }
}
renderProfile();