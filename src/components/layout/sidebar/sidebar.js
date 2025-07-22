import './sidebar.css';
import { db } from "../../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { getCurrentUser } from "../../authentication/auth";
import handleLogout from "../../utils/handleLogout";

const avatarEl = document.getElementById( 'avatar' );
const logOutBtn = document.getElementById( 'logOutBtn' );

const renderSidebar = async () => {
    const user = await getCurrentUser();
    if( user ){
        try{
            const userRef = doc( db, 'users', user.uid );
            const userSnap = await getDoc( userRef );
            if( userSnap.exists() ){
                const userData = userSnap.data();
                if( avatarEl ){
                    avatarEl.innerHTML = `<img src="${ userData.avatar }" alt="${ userData.firstName } ${ userData.lastName }" class="w-100 h-100 object-fit-cover object-position-center" />`;
                    avatarEl.insertAdjacentHTML( 'afterend', `<h4 class="text-center mt-3 mb-4">${ userData.firstName + ' ' + userData.lastName }</h4>` );
                }
            }
        } catch( err ){
            console.log( err );
        }
    }
}
renderSidebar();

if( logOutBtn ){
    logOutBtn.addEventListener( 'click', e => {
        e.preventDefault();
        handleLogout();
    } );
}