import { db } from "../../firebase-config";
import { collection, getDoc, doc, setDoc } from "firebase/firestore";

const syncLocalWishlistToUser = async userId => {
    const guestWishlist = JSON.parse( localStorage.getItem( 'guestFavorites' ) ) || [];
    if( !userId || !guestWishlist.length ) return;
    try{
        const userWishlistRef = collection( db, 'users', userId, 'favorites' );
        for( const item of guestWishlist ){
            const itemId = `${ item.productId }_${ item.variantId }`;
            const favItemRef = doc( userWishlistRef, itemId );
            const favItemSnap = await getDoc( favItemRef );
            if( !favItemSnap.exists() ){
                await setDoc( favItemRef, {
                    productId: item.productId,
                    variantId: item.variantId,
                } );
            }
        }
        localStorage.removeItem( 'guestFavorites' );
    } catch( err ){
        console.log( err );
    }
}
export default syncLocalWishlistToUser;