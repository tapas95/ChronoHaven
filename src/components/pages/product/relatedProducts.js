import '@splidejs/splide/css';
import { db } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Splide from "@splidejs/splide";
import renderProductCard from '../../layout/products-card/productCard';
import addToCart from '../../utils/addToCart';
import updateCartCount from '../../utils/updateCartCount';
import renderProductCardSkeleton from "../../layout/skeleton/productCardSkeleton";
import displayAlerts from "../../ui/alert/alert";

const renderRelatedProducts = async ( productId, category, target ) => {
    renderProductCardSkeleton( target, 3 );
    try{
        const productsRef = collection( db, 'collections', 'products', 'items' );
        const productQuery = query( productsRef, where( 'category', '==', category ) );
        const productsSnap = await getDocs( productQuery );
        if( productsSnap.empty ) {
            target.insertAdjacentHTML( 'beforeend', displayAlerts( 'No Products Found.', 'danger' ) );
            return;
        }
        const renderedProducts = [];
        productsSnap.forEach( products => {
            const product = products.data();
            if( product.id === productId ) return;
            renderedProducts.push( product );
            target.insertAdjacentHTML( 'beforeend', renderProductCard( product ) );
        } );
        if( renderedProducts.length === 0 ) target.insertAdjacentHTML( 'beforeend', displayAlerts( 'No related products found.', 'danger', 'bi-exclamation-diamond-fill', 'mx-2' ) );
        requestAnimationFrame( () => {
            const varientSliders = document.querySelectorAll('.variant-images');
            const productTitles = document.querySelectorAll( '.product-title' );
            const addToCartButtons = document.querySelectorAll( '.add-to-cart' );
            addToCartButtons.forEach( btn => {
                btn.addEventListener( 'click', e => {
                    e.preventDefault();
                    document.querySelectorAll('.alert').forEach( el => el.remove() );
                    btn.disabled = true;
                    btn.insertAdjacentHTML( 'beforeend', '<div class="spinner-border spinner-border-sm text-light" role="status"><span class="visually-hidden">Loading...</span></div>' );
                    const productId = btn.getAttribute( 'data-product-id' );
                    const variantId = btn.getAttribute( 'data-variant-id' );
                    const quantity = 1;
                    if( productId && variantId ){
                        addToCart( productId, variantId, quantity ).then( status => {
                            if( status === 'ADDED' ){
                                btn.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Product Added To Cart', 'success', 'bi-check-circle-fill', 'fs-xs' ) );
                                updateCartCount();
                            } else if( status === 'EXISTS' ){
                                btn.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Product Already Exist', 'danger', 'bi-exclamation-diamond-fill', 'fs-xs' ) );
                            }
                        } ).catch( err => {
                            console.log( 'Failed to add to cart', err );
                        } ).finally( () => {
                            btn.disabled = false;
                            const spinner = btn.querySelector('.spinner-border');
                            if( spinner ) spinner.remove();
                        } );
                    } else{
                        console.warn( 'Product or Variant ID missing' );
                    }
                } );
            } );
            varientSliders.forEach( ( slider, i ) => {
                const imageSlider = new Splide( slider, {
                    perPage: 1,
                    arrows: false,
                    pagination: true,
                    drag: false
                } );
                imageSlider.mount();
                const product = renderedProducts[ i ];
                if( !product || !product.variants ) return;
                const paginationButtons = slider.querySelectorAll('.splide__pagination__page');
                product.variants.forEach( ( variant, variantIndex ) => {
                    const paginationButton = paginationButtons[ variantIndex ];
                    if( !paginationButton || !variant.colors ) return;
                    const varientColor = variant.colors.map( color => variant.colors.length > 1 ? `${ color } ${ 100 / variant.colors.length }%` : color ).join(', ');
                    paginationButton.style.cssText = `
                        --variant-base-color: ${ variant.colors[ 0 ] };
                        background-image: linear-gradient( -45deg, ${ varientColor } );
                        box-shadow: 0 0 0 0.125rem ${ variant.colors[ 0 ] };
                    `;
                    paginationButton.setAttribute( 'data-variant-id', `${ variant.id }` );
                    paginationButton.addEventListener( 'click', () => {
                        const currentVariant = variant.id;
                        const productTitle = productTitles[i];
                        const addToCartButton = addToCartButtons[ i ];
                        if ( !productTitle ) return;
                        if( !addToCartButton ) return;
                        const url = new URL( productTitle.href, window.location.origin );
                        url.searchParams.delete( 'variantId' );
                        url.searchParams.append( 'variantId', currentVariant );
                        productTitle.href = url.toString();
                        addToCartButton.setAttribute( 'data-variant-id', `${ currentVariant }` );
                    } );
                } );
            } );
        });
    } catch( err ){
        console.log( err );
        target.insertAdjacentHTML( 'beforeend', displayAlerts( 'Error Loading Products.', 'danger' ) );
    } finally{
        const productCardSkeleton = document.getElementById('productCardSkeleton');
        if( productCardSkeleton ) productCardSkeleton.remove();
    }
}
export default renderRelatedProducts;