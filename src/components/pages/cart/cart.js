import './cart.css';
import { db } from '../../../firebase-config';
import { getCurrentUser } from '../../authentication/auth';
import { doc, getDoc, getDocs, collection, deleteDoc, updateDoc } from 'firebase/firestore';
import renderCartItems from '../../utils/renderCartItems';
import updateCartCount from '../../utils/updateCartCount';
import displayAlerts from '../../ui/alert/alert';
import cartItemsSkeleton from '../../layout/skeleton/cartItemSkeleton';

const cartItemsContainer = document.getElementById( 'cartItems' );
const subTotal = document.getElementById( 'subTotal' );
const total = document.getElementById( 'total' );

function removeCartItemsSkeleton(){
    const cartItemsSkeleton = document.getElementById( 'cartItemsSkeleton' );
    if( cartItemsSkeleton ) cartItemsSkeleton.remove();
}

const renderCart = async () => {
    cartItemsSkeleton( cartItemsContainer, 3 );
    const user = await getCurrentUser();
    let totalAmount = 0;
    if( user ){
        const cartRef = collection( db, 'users', user.uid, 'cart' );
        const cartSnap = await getDocs( cartRef );
        if( cartSnap.empty ){
            if( cartItemsContainer ) cartItemsContainer.insertAdjacentHTML( 'beforeend', displayAlerts( 'Your Cart is Empty', 'danger', 'bi-exclamation-diamond-fill', 'mt-0' ) );
            removeCartItemsSkeleton();
        } else{
            for( const cartDoc of cartSnap.docs ){
                const cartItem = cartDoc.data();
                const { productId, variantId, quantity } = cartItem;
                try{
                    const cartproductsRef = doc( db, 'collections', 'products', 'items', productId );
                    const cartproductsSnap = await getDoc( cartproductsRef );
                    if( cartproductsSnap.exists() ){
                        const product = cartproductsSnap.data();
                        totalAmount += product.price.current * quantity;
                        if( cartItemsContainer ) cartItemsContainer.insertAdjacentHTML( 'beforeend', renderCartItems( product, variantId, quantity ) );
                    }
                } catch( err ){
                    console.log( err );
                } finally{
                    removeCartItemsSkeleton();
                }
            }
        }
        requestAnimationFrame( () => {
            if( subTotal ) subTotal.textContent = `₹ ${ totalAmount.toFixed( 2 ) }`;
            if( total ) total.textContent = `₹ ${ totalAmount.toFixed( 2 ) }`;
        } );
    } else{
        const guestCartItems = JSON.parse( localStorage.getItem( 'guestCart' ) );
        if( guestCartItems.length === 0 ){
            if( cartItemsContainer ) cartItemsContainer.insertAdjacentHTML( 'beforeend', displayAlerts( 'Your Cart is Empty', 'danger', 'bi-exclamation-diamond-fill', 'mt-0' ) );
            removeCartItemsSkeleton();
        } else{
            for( const cartitem of guestCartItems ){
                const { productId, variantId, quantity } = cartitem;
                try{
                    const cartproductsRef = doc( db, 'collections', 'products', 'items', productId );
                    const cartproductsSnap = await getDoc( cartproductsRef );
                    if( cartproductsSnap.exists() ){
                        const product = cartproductsSnap.data();
                        totalAmount += product.price.current * quantity;
                        if( cartItemsContainer ) cartItemsContainer.insertAdjacentHTML( 'beforeend', renderCartItems( product, variantId, quantity ) );
                    }
                } catch( err ){
                    console.log( err );
                } finally{
                    removeCartItemsSkeleton();
                }
            }
        }
        requestAnimationFrame( () => {
            if( subTotal ) subTotal.textContent = `₹ ${ totalAmount.toFixed( 2 ) }`;
            if( total ) total.textContent = `₹ ${ totalAmount.toFixed( 2 ) }`;
        } );
    }
}
renderCart();

if( cartItemsContainer ){
    cartItemsContainer.addEventListener( 'click', async e => {
        const deleteBtn = e.target.closest( '.delete-cart-item' );
        if( !deleteBtn ) return;
        const productId = deleteBtn.getAttribute( 'data-product-id' );
        const variantId = deleteBtn.getAttribute( 'data-variant-id' );
        const user = await getCurrentUser();
        if( user ){
            deleteBtn.disabled = true;
            await deleteDoc( doc( db, 'users', user.uid, 'cart', `${ productId }_${ variantId }`  ) );
            renderCart();
            updateCartCount();
        } else{
            deleteBtn.disabled = true;
            let guestCart = JSON.parse(localStorage.getItem('guestCart')) || [];
            guestCart = guestCart.filter( product => !(product.productId === productId && product.variantId === variantId) );
            localStorage.setItem( 'guestCart', JSON.stringify( guestCart ) );
            renderCart();
            updateCartCount();
        }
    } );
}

if( cartItemsContainer ){
    cartItemsContainer.addEventListener( 'click', async e => {
        const addQuantity = e.target.closest( '.add-quantity' );
        const removeQuantity = e.target.closest( '.remove-quantity' );
        const productId = ( addQuantity || removeQuantity )?.getAttribute( 'data-product-id' );
        const variantId = ( addQuantity || removeQuantity )?.getAttribute( 'data-variant-id' );
        if( !productId || !variantId ) return;
        const quantityInput = document.getElementById( `${ productId }_${ variantId }` );
        if ( !quantityInput ) return;
        let currentQuantity = parseInt( quantityInput.value ) || 1;
        if( addQuantity ) addQuantity.disabled = true;
        if( removeQuantity ) removeQuantity.disabled = true;
        if( addQuantity && currentQuantity < 10 ) currentQuantity ++;
        if( removeQuantity && currentQuantity > 1 ) currentQuantity --;
        quantityInput.value = currentQuantity;
        const user = await getCurrentUser();
        if( user ){
            await updateDoc( doc( db, 'users', user.uid, 'cart', `${ productId }_${ variantId }` ), { quantity: currentQuantity } );
        } else{
            let guestCart = JSON.parse( localStorage.getItem( 'guestCart' ) ) || [];
            const itemIndex = guestCart.findIndex( item => item.productId === productId && item.variantId === variantId );
            if( itemIndex !== -1 ){
                guestCart[ itemIndex ].quantity = currentQuantity;
                localStorage.setItem( 'guestCart', JSON.stringify( guestCart ) );
            }
            console.log(itemIndex);
        }
        renderCart();
    } );
}