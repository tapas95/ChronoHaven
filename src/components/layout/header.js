import { auth, db } from "../../firebase-config";
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from "firebase/auth";

const app = document.getElementById('app');
const currentUser = document.getElementById('currentUser');
const header = document.getElementById('mainHeader');
const headerHeight = header.clientHeight;

if( app ) app.style.paddingTop = `${ headerHeight }px`;
if( header ) header.classList.add( 'position-fixed', 'top-0', 'end-0', 'start-0', 'z-3' );

onAuthStateChanged( auth, async user => {
    if( user ){
        try{
            const userInfoRef = doc( db, 'users', user.uid );
            const userInfoSnap = await getDoc( userInfoRef );
            if( userInfoSnap.exists() ) {
                const userInfo = userInfoSnap.data();
                currentUser.innerHTML = `
                    <a href="javascript: void(0);" id="myAccount" class="nav-link dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg width="24" height="24" class="d-block flex-shrink-0">
                            <use href="./src/assets/images/sprite.svg#user" />
                        </svg>
                        <span class="d-block">Hi, ${ userInfo.firstName }</span>
                        <svg width="14" height="14" class="d-block flex-shrink-0">
                            <use href="./src/assets/images/sprite.svg#chevronDown" />
                        </svg>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end fs-sm border-4 border-top border-end-0 border-bottom-0 border-start-0 border-primary m-0">
                        <li class="m-0">
                            <a href="javascript: void(0);" class="dropdown-item px-3 py-2 d-flex align-items-center gap-2">
                                <svg width="20" height="20" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#user" />
                                </svg>
                                <span class="d-block">My Profile</span>
                            </a>
                        </li>
                        <li class="m-0">
                            <a href="javascript: void(0);" class="dropdown-item px-3 py-2 d-flex align-items-center gap-2">
                                <svg width="20" height="20" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#wishlist" />
                                </svg>
                                <span class="d-block">My Wishlist</span>
                            </a>
                        </li>
                        <li class="m-0">
                            <a href="javascript: void(0);" class="dropdown-item px-3 py-2 d-flex align-items-center gap-2">
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
                console.log("No such document!");
            };
        } catch( err ){
            console.log( err );
            currentUser.innerHTML = `
                <a href="./login.html" id="myAccount" class="nav-link d-flex align-items-center gap-2">
                    <svg width="24" height="24" class="d-block flex-shrink-0">
                        <use href="./src/assets/images/sprite.svg#login" />
                    </svg>
                    <span class="d-block">Login</span>
                </a>
            `;
        }
    } else{
        currentUser.innerHTML = `
            <a href="./login.html" id="myAccount" class="nav-link d-flex align-items-center gap-2">
                <svg width="24" height="24" class="d-block flex-shrink-0">
                    <use href="./src/assets/images/sprite.svg#login" />
                </svg>
                <span class="d-block">Login</span>
            </a>
        `;
    }
} );

const logOut = async () => {
  try{
    await signOut( auth );
    window.location.href = './login.html';
  } catch( err ){
    console.log( err );
  }
}

const logoutHandler = () => {
    const logOutBtn = document.getElementById( 'logOut' );
    logOutBtn.addEventListener( 'click', e => {
        e.preventDefault();
        logOut();
    } );
}