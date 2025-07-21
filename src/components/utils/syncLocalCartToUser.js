import { db } from "../../firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";

const syncLocalCartToUser = async userId => {
    try{
        const guestCartItems = JSON.parse(localStorage.getItem( 'guestCart' )) || [];
        if( !guestCartItems.length ) return;
        for( const item of guestCartItems ){
            const { productId, variantId, quantity } = item;
            const docId = `${ productId }_${ variantId }`;
            const cartItemRef = doc( db, 'users', userId, 'cart', docId );
            const existingDoc = await getDoc( cartItemRef );
            if( existingDoc.exists() ){
                const existingQuantity = existingDoc.data().quantity || 0;
                const newQuantity = existingQuantity + quantity;
                await setDoc( cartItemRef, { ...existingDoc.data(), quantity: newQuantity } );
            } else{
                await setDoc( cartItemRef, { productId, variantId, quantity } );
            }
        }
        localStorage.removeItem( 'guestCart' );
    }catch( err ){
        console.error('Failed to sync guest cart to user:', err);
    }
}
export default syncLocalCartToUser;