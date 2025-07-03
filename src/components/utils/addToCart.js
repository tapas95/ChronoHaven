import { db } from "../../firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getCurrentUser } from "../authentication/auth";

const addToCart = async ( productId, variantId, quantity ) => {
    try{
        const user = await getCurrentUser();
        if( user ){
            const cartItemId = `${ productId }_${ variantId }`;
            const userCartRef = doc( db, 'users', user.uid, 'cart', cartItemId );
            const userCartSnap = await getDoc( userCartRef );
            if( userCartSnap.exists() ) {
                return 'EXISTS';
            } else{
                await setDoc( userCartRef, { productId, variantId, quantity } );
                return 'ADDED';
            }
        } else{
            let localCart = JSON.parse( localStorage.getItem( 'guestCart' ) ) || [];
            const alreadyExists = localCart.some( item => item.productId === productId && item.variantId === variantId );
            if( !alreadyExists ){
                localCart.push( { productId, variantId, quantity } );
                localStorage.setItem( 'guestCart', JSON.stringify( localCart ) );
                return 'ADDED';
            } else{
                return 'EXISTS';
            }
        }
    } catch( err ){
        console.log(err);
        throw err;
    }
}
export default addToCart;