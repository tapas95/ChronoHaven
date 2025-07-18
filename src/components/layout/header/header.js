import { db } from "../../../firebase-config";
import { doc, getDoc } from 'firebase/firestore';
import { getCurrentUser } from "../../authentication/auth";
import updateCartCount from "../../utils/updateCartCount";
import handleLogout from "../../utils/handleLogout";

const app = document.getElementById('app');
const currentUser = document.getElementById('currentUser');
const header = document.getElementById('mainHeader');
const headerHeight = header.clientHeight;

if( app ) app.style.paddingTop = `${ headerHeight }px`;
if( header ) header.classList.add( 'position-fixed', 'top-0', 'end-0', 'start-0', 'z-3' );

const setupHeader = async () => {
    const user = await getCurrentUser();
    if( user ){
        // console.log(user);
        try{
            const userInfoRef = doc( db, 'users', user.uid );
            const userInfoSnap = await getDoc( userInfoRef );
            if( userInfoSnap.exists() ) {
                const userInfo = userInfoSnap.data();
                currentUser.innerHTML = `
                    <a href="javascript: void(0);" id="myAccount" class="nav-link p-0 dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ${ userInfo.avatar ? `<div class="avatar flex-shrink-0 rounded-circle overflow-hidden"><img src="${ userInfo.avatar }" alt="${ userInfo.firstName } ${ userInfo.lastName }" class="w-100 h-100 object-fit-cover object-position-center" /></div>` : `<svg width="24" height="24" class="d-block flex-shrink-0"><use href="./src/assets/images/sprite.svg#user" /></svg>` }
                        <span class="d-block">Hi, ${ userInfo.firstName }</span>
                        <svg width="14" height="14" class="d-block flex-shrink-0">
                            <use href="./src/assets/images/sprite.svg#chevronDown" />
                        </svg>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end fs-sm border-4 border-top border-end-0 border-bottom-0 border-start-0 border-primary">
                        <li class="m-0">
                            <a href="javascript: void(0);" class="dropdown-item px-3 py-2 d-flex align-items-center gap-2">
                                <svg width="20" height="20" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#user" />
                                </svg>
                                <span class="d-block">My Profile</span>
                            </a>
                        </li>
                        <li class="m-0">
                            <a href="./wishlist.html" class="dropdown-item px-3 py-2 d-flex align-items-center gap-2">
                                <svg width="20" height="20" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#wishlist" />
                                </svg>
                                <span class="d-block">My Wishlist</span>
                            </a>
                        </li>
                        <li class="m-0">
                            <a href="./orders.html" class="dropdown-item px-3 py-2 d-flex align-items-center gap-2">
                                <svg width="20" height="20" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#orders" />
                                </svg>
                                <span class="d-block">My Orders</span>
                            </a>
                        </li>
                        <li class="m-0">
                            <a href="javascript: void(0);" id="logOut" class="dropdown-item px-3 py-2 d-flex align-items-center gap-2">
                                <svg width="20" height="20" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#logOut" />
                                </svg>
                                <span class="d-block">Log Out</span>
                            </a>
                        </li>
                    </ul>
                `;
                logoutHandler();
            } else{
                console.log( 'User Document Not Found!' );
                showLoginLink();
            }
        } catch( err ){
            console.log( err );
            showLoginLink();
        }
    } else{
        showLoginLink();
    }
}

const showLoginLink = () => {
    currentUser.innerHTML = `
        <a href="./login.html" id="myAccount" class="nav-link d-flex align-items-center gap-2">
            <svg width="24" height="24" class="d-block flex-shrink-0">
                <use href="./src/assets/images/sprite.svg#login" />
            </svg>
            <span class="d-block">Login</span>
        </a>
    `;
};

const logoutHandler = () => {
    const logOutBtn = document.getElementById( 'logOut' );
    if( logOutBtn ){
        logOutBtn.addEventListener( 'click', e => {
            e.preventDefault();
            handleLogout();
        } );
    }
}

setupHeader().then( updateCartCount );