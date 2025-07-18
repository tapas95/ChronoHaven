import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { getCurrentUser } from "../authentication/auth";

const checkIsFavorite = async ( productId, variantId ) => {
    const user = await getCurrentUser();
    const favoriteId = `${ productId }_${ variantId }`;
    if( user ){
        const favoriteItemRef = doc( db, 'users', user.uid, 'favorites', favoriteId );
        const favoriteItemSnap = await getDoc( favoriteItemRef );
        return favoriteItemSnap.exists();
    } else{
        const storedFavorites = JSON.parse( localStorage.getItem( 'guestFavorites' ) ) || [];
        return storedFavorites.some( item => item.productId === productId && item.variantId === variantId );
    }
}
export default checkIsFavorite;