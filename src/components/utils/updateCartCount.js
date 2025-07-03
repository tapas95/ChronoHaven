import getCartCount from "./getCartCount";

const cartBadge = document.querySelector( '#mainHeader .navbar-nav #cart .cart-badge' );

const updateCartCount = async () => {
    try{
        const cartCount = await getCartCount();
        if( cartBadge ){
            cartBadge.textContent = cartCount;
        }
    } catch( err ){
        console.err( err );
    }
    
}
export default updateCartCount;