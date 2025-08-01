import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../style.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../firebase-config.js";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import syncLocalCartToUser from '../utils/syncLocalCartToUser.js';
import syncLocalWishlistToUser from '../utils/syncLocalWishlistToUser.js';

const loginWithGoogle = document.getElementById('loginWithGoogle');
const urlParams = new URLSearchParams( window.location.search );
const redirectPath = urlParams.get( 'redirect' );
const provider = new GoogleAuthProvider();

if( loginWithGoogle ){
    loginWithGoogle.addEventListener( 'click', async () => {
        try{
            const result = await signInWithPopup( auth, provider );
            const user = result.user;
            const userRef = doc( db, "users", user.uid );
            const userSnap = await getDoc( userRef );
            if ( !userSnap.exists() ) {
                const fullName = user.displayName || 'Guest';
                const nameParts = fullName.split(' ');
                await setDoc( userRef, {
                    firstName: nameParts[ 0 ],
                    lastName: nameParts[ 1 ],
                    email: user.email,
                    phone: user.phoneNumber || null,
                    avatar: user.photoURL,
                    gender: "Other",
                } );
            }
            await syncLocalCartToUser( user.uid );
            await syncLocalWishlistToUser( user.uid );
            redirectPath ? window.location.href = `./${ redirectPath }.html?buyNow=true` : window.location.href = './';
        }
        catch (error) {
            console.error("❌ Google login failed:", error.code, error.message);
            alert("Google login failed: " + error.message);
        }
    } );
}