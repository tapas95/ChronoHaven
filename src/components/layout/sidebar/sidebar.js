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
                console.log(userData);
                if( avatarEl ){
                    if( userData.avatar ){
                        avatarEl.innerHTML = `<img src="${ userData.avatar }" alt="${ userData.firstName } ${ userData.lastName }" class="w-100 h-100 object-fit-cover object-position-center" />`;
                    } else{
                        avatarEl.innerHTML = `
                            <svg width="100" height="100" class="d-block flex-shrink-0"><use href="./src/assets/images/sprite.svg#user"></use></svg>
                        `;
                    }
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