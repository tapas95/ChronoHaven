import { db } from "../../firebase-config";
import { collection, doc, setDoc, getDocs, updateDoc, increment } from "firebase/firestore";

const syncLocalCartToUser = async userId => {
    try{
        const guestCart = JSON.parse(localStorage.getItem( 'guestCart' )) || [];
        if( !guestCart.length ) return;
        const userCartRef = collection( db, 'users', userId, 'cart' );
        const existingCartSnap = await getDocs(userCartRef);
        const existingItems = [];
        existingCartSnap.forEach( docSnap => {
            const data = docSnap.data();
            existingItems.push( { id: docSnap.id, ...data } );
        } );
        for( const item of guestCart ){
            const existing = existingItems.find( i =>
                i.productId === item.productId &&
                ( i.variantId || null ) === ( item.variantId || null )
            );
            if ( existing ) {
                const existingRef = doc( userCartRef, existing.id );
                await updateDoc( existingRef, {
                    quantity: increment( item.quantity )
                });
            } else {
                const newCartRef = doc( userCartRef );
                await setDoc( newCartRef, {
                    productId: item.productId,
                    quantity: item.quantity,
                    variantId: item.variantId || null
                } );
            }
        }
        localStorage.removeItem( 'guestCart' );
    }catch( err ){
        console.error('Failed to sync guest cart to user:', err);
    }
}
export default syncLocalCartToUser;