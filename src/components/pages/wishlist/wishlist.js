import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { getCurrentUser } from "../../authentication/auth";

const favoriteProductsEl = document.getElementById( 'favoriteProducts' );

const renderWishlist = async () => {
    const user = await getCurrentUser();
    if( user ){
        try{
            const userFavoriteRef = collection( db, 'users', user.uid, 'favorites' );
            const userFavoriteSnap = await getDocs( userFavoriteRef );
            if( userFavoriteSnap.empty ){
                
            } else{
                userFavoriteSnap.forEach( favoritedata => {
                    const favoriteItem = favoritedata.data();
                    console.log(favoriteItem);
                } );
            }
        } catch( err ){
            console.log( err );
        }
    } else{

    }
}
renderWishlist();