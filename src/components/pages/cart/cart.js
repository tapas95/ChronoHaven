import './cart.css';
import { db } from '../../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { getCurrentUser } from '../../authentication/auth';

const cartItemsContainer = document.getElementById( 'cartItems' );
console.log(cartItemsContainer);

const renderCart = async () => {
    const user = await getCurrentUser();
    if( user ){
        const cartRef = collection( db, 'users', user.uid, 'cart' );
        const cartSnap = await getDocs( cartRef );
        if( cartSnap.empty ){
            console.log( 'Your cart is empty.' );
        } else{
            cartSnap.forEach( doc => {
                const cartItem = doc.data();
                const productId = cartItem.productId;
                const productVariant = cartItem.variantId;
                const productQuantity = cartItem.quantity;
                console.log( productId, productVariant, productQuantity );
            } );
        }
    } else{
        const cartitems = JSON.parse( localStorage.getItem( 'guestCart' ) );
        console.log(cartitems);
    }
}
renderCart();