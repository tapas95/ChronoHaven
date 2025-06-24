import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../style.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase-config.js";

const loginWithGoogle = document.getElementById('loginWithGoogle');
const provider = new GoogleAuthProvider();

loginWithGoogle.addEventListener( 'click', async () => {
    try{
        const result = await signInWithPopup( auth, provider );
        const user = result.user;
        console.log("✅ Logged in with Google:", user.email);
        window.location.href = './';
    }
    catch (error) {
        console.error("❌ Google login failed:", error.code, error.message);
        alert("Google login failed: " + error.message);
    }
} );