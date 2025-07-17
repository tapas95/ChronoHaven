import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

const handleLogout = async () => {
    try{
        await signOut( auth );
        window.location.replace( './login.html' );
    } catch( err ){
        console.log( err );
    }
}
export default handleLogout;