import { db } from "../../firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getCurrentUser } from "../authentication/auth";

const addToFavorites = async product => {
    const user = await getCurrentUser();
    const favoriteItemId = `${ product.productId }_${ product.variantId }`;
    if( user ){
        const favoriteItemRef = doc( db, 'users', user.uid, 'favorites', favoriteItemId );
        const favoriteItemSnap = await getDoc( favoriteItemRef );
        if( favoriteItemSnap.exists() ){
            return 'EXISTS';
        } else{
            await setDoc( favoriteItemRef, product );
            return 'ADDED';
        }
    } else{
        const storedFavorites = JSON.parse( localStorage.getItem( 'guestFavorites' ) ) || [];
        const alreadyExists = storedFavorites.find( item => item.productId === product.productId && item.variantId === product.variantId );
        if( !alreadyExists ){
            storedFavorites.push( product );
            localStorage.setItem( 'guestFavorites', JSON.stringify( storedFavorites ) );
            return 'ADDED';
        } else{
            return 'EXISTS';
        }
    }
}
export default addToFavorites;