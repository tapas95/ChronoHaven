import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { getCurrentUser } from "../authentication/auth";

const getCartCount = async () => {
    try{
        const user = await getCurrentUser();
        if( user ){
            const cartRef = collection( db, 'users', user.uid, 'cart' );
            const cartSnap = await getDocs( cartRef );
            return cartSnap.size;
        } else{
            const localCart = JSON.parse( localStorage.getItem( 'guestCart' ) ) || [];
            console.log( localCart );
            return localCart.length;
        }
    } catch( err ){
        console.log( err );
    }
}
export default getCartCount;