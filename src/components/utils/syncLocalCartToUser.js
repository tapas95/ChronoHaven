import { db } from "../../firebase-config";
import { collection, doc, setDoc } from "firebase/firestore";

const syncLocalCartToUser = async userId => {
    try{
        const guestCart = JSON.parse(localStorage.getItem( 'guestCart' )) || [];
        if( !guestCart.length ) return;
        const userCartRef = collection( db, 'users', userId, 'cart' );
        for( const item of guestCart ){
            const cartItemRef = doc( userCartRef );
            await setDoc(cartItemRef, {
                productId: item.productId,
                quantity: item.quantity,
                variantId: item.variantId || null
            });
        }
        localStorage.removeItem( 'guestCart' );
    }catch( err ){
        console.error('Failed to sync guest cart to user:', err);
    }
}
export default syncLocalCartToUser;