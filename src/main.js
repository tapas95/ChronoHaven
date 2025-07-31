import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { db } from './firebase-config';
import { getCurrentUser } from './components/authentication/auth';
import { collection, getDocs, doc, getDoc, deleteDoc } from 'firebase/firestore';
import updateCartCount from './components/utils/updateCartCount';
import renderCartDrawerItems from './components/utils/renderCartDrawerItems';
import renderCartDrawerSkeleton from './components/layout/skeleton/cartDrawerSkeleton';
import displayAlerts from './components/ui/alert/alert';

const cartBtn = document.getElementById( 'cart' );
const cartProductsEl = document.getElementById( 'cartProducts' );
const protectedPaths = [ '/my-profile.html', '/add-address.html', '/wishlist.html', '/orders.html' ];
const currentPath = window.location.pathname.replace( /^\/ChronoHaven/, '' );

( async () => {
    if( protectedPaths.includes( currentPath ) ){
        const user = await getCurrentUser();
        if( user ) return;
        window.location.href = './login.html';
    }
} )();

function removeCartDrawerSkeleton(){
    const cartDrawerSkeleton = document.getElementById( 'cartDrawerSkeleton' );
    if( cartDrawerSkeleton ) cartDrawerSkeleton.remove();
}

const renderCartDrawer = async () => {
    renderCartDrawerSkeleton( cartProductsEl, 5 );
    const user = await getCurrentUser();
    if( user ){
        const cartRef = collection( db, 'users', user.uid, 'cart' );
        const cartSnap = await getDocs( cartRef );
        if( cartSnap.empty ){
            if( cartProductsEl ) cartProductsEl.insertAdjacentHTML( 'beforeend', displayAlerts( 'Your Cart is Empty' ) );
            removeCartDrawerSkeleton();
        } else{
            for( const cartDoc of cartSnap.docs ){
                const cartItem = cartDoc.data();
                const { productId, variantId, quantity } = cartItem;
                try{
                    const cartproductsRef = doc( db, 'collections', 'products', 'items', productId );
                    const cartproductsSnap = await getDoc( cartproductsRef );
                    if( cartproductsSnap.exists() ){
                        const product = cartproductsSnap.data();
                        if( cartProductsEl ) cartProductsEl.insertAdjacentHTML( 'afterbegin', renderCartDrawerItems( product, variantId, quantity ) );
                    }
                } catch( err ){
                    console.log( err );
                } finally{
                    removeCartDrawerSkeleton();
                }
            }
        }
    } else{
        const guestCartItems = JSON.parse( localStorage.getItem( 'guestCart' ) ) || [];
        if( guestCartItems.length === 0 ){
            if( cartProductsEl ) cartProductsEl.insertAdjacentHTML( 'beforeend', displayAlerts( 'Your Cart is Empty' ) );
            removeCartDrawerSkeleton();
        } else{
            for( const cartitem of guestCartItems ){
                const { productId, variantId, quantity } = cartitem;
                try{
                    const cartproductsRef = doc( db, 'collections', 'products', 'items', productId );
                    const cartproductsSnap = await getDoc( cartproductsRef );
                    if( cartproductsSnap.exists() ){
                        const product = cartproductsSnap.data();
                        if( cartProductsEl ) cartProductsEl.insertAdjacentHTML( 'beforeend', renderCartDrawerItems( product, variantId, quantity ) );
                    }
                } catch( err ){
                    console.log( err );
                } finally{
                    removeCartDrawerSkeleton();
                }
            }
        }
    }
    requestAnimationFrame( () => {
        const deleteCartItem = document.querySelectorAll( '.delete-cart-item' );
        deleteCartItem.forEach( btn => {
            btn.addEventListener( 'click', async e => {
                e.preventDefault();
                const productId = btn.getAttribute( 'data-product-id' );
                const variantId = btn.getAttribute( 'data-variant-id' );
                btn.disabled = true;
                const user = await getCurrentUser();
                if( user ){
                    await deleteDoc( doc( db, 'users', user.uid, 'cart', `${ productId }_${ variantId }`  ) );
                    updateCartCount();
                    btn.closest( '.cart-item' )?.remove();
                } else{
                    let guestCart = JSON.parse( localStorage.getItem( 'guestCart' ) ) || [];
                    guestCart = guestCart.filter( product => !( product.productId === productId && product.variantId === variantId ) );
                    localStorage.setItem( 'guestCart', JSON.stringify( guestCart ) );
                    updateCartCount();
                    btn.closest( '.cart-item' )?.remove();
                }
            } );
        } );
    } );
}

if( cartBtn ){
    cartBtn.addEventListener( 'click', e => {
        e.preventDefault();
        renderCartDrawer();
    } );
}