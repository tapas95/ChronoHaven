import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export const getCurrentUser = () => {
    return new Promise( resolve => {
        onAuthStateChanged( auth, async user => {
            resolve( user );
        } );
    } );
};