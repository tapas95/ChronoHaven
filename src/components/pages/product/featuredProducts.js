import '@splidejs/splide/css';
import { db } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Splide from "@splidejs/splide";
import renderProductCard from '../../layout/products-card/productCard';
import renderProductCardSkeleton from "../../layout/skeleton/productCardSkeleton";
import addToCart from '../../utils/addToCart';
import addToFavorites from '../../utils/addToFavorites';
import checkIsFavorite from '../../utils/checkIsFavorite';
import updateCartCount from '../../utils/updateCartCount';
import displayAlerts from "../../ui/alert/alert";

const renderFeaturedProducts = async ( target ) => {
    renderProductCardSkeleton( target, 3 );
    try{
        const featuredProductsRef = collection( db, 'collections', 'products', 'items' );
        const featuredProductQuery = query( featuredProductsRef, where( 'isFeatured', '==', true ) );
        const featuredProductsSnapshot = await getDocs( featuredProductQuery );
        if( featuredProductsSnapshot.empty ){
            target.insertAdjacentHTML( 'beforeend', displayAlerts( 'No Products Found.', 'danger' ) );
            return;
        }
        featuredProductsSnapshot.forEach( products => {
            const product = products.data();
            target.insertAdjacentHTML( 'beforeend', renderProductCard( product ) );
        });
        requestAnimationFrame( () => {
            ( async () => {
                const varientSliders = document.querySelectorAll('.variant-images');
                const productTitles = document.querySelectorAll( '.product-title' );
                const addToCartButtons = document.querySelectorAll( '.add-to-cart' );
                const addToFavoriteBtns = document.querySelectorAll( '.add-to-favorite' );
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
                if( addToFavoriteBtns ){
                        for( const favBtn of addToFavoriteBtns ){
                            const productId = favBtn.getAttribute( 'data-product-id' );
                            const variantId = favBtn.getAttribute( 'data-variant-id' );
                            try{
                                const isFavorite = await checkIsFavorite( productId, variantId );
                                if( isFavorite ){
                                    favBtn.classList.add( 'bg-primary', 'text-white' );
                                    favBtn.innerHTML = `
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                        </svg>
                                    `;
                                }
                            } catch( err ){
                                console.log( err );
                            }
                            favBtn.addEventListener( 'click', async e => {
                                e.preventDefault();
                                document.querySelectorAll( '.alert' ).forEach( el => el.remove() );
                                favBtn.disabled = true;
                                favBtn.innerHTML = '<div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';
                                const productId = favBtn.getAttribute( 'data-product-id' );
                                const variantId = favBtn.getAttribute( 'data-variant-id' );
                                try{
                                    const status = await addToFavorites( { productId, variantId } );
                                    if( status === 'ADDED' ){
                                        favBtn.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Product Added To Favorites', 'success' ) );
                                        favBtn.classList.add( 'bg-primary', 'text-white' );
                                        favBtn.innerHTML = `
                                            <svg width="18" height="18" class="d-block flex-shrink-0">
                                                <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                            </svg>
                                        `;
                                    } else if( status === 'EXISTS' ){
                                        favBtn.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Product Already Added To Favorites', 'danger' ) );
                                        favBtn.innerHTML = `
                                            <svg width="18" height="18" class="d-block flex-shrink-0">
                                                <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                            </svg>
                                        `;
                                    }
                                } catch( err ){
                                    console.log( err );
                                } finally{
                                    favBtn.disabled = false;
                                }
                            } );
                        };
                    }
                varientSliders.forEach( ( slider, i ) => {
                    const imageSlider = new Splide( slider, {
                        perPage: 1,
                        arrows: false,
                        pagination: true,
                        drag: false
                    } );
                    imageSlider.mount();
                    const product = featuredProductsSnapshot.docs[ i ]?.data();
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
                            const addToFavoriteBtn = addToFavoriteBtns[ i ];
                            if ( !productTitle ) return;
                            if( !addToCartButton ) return;
                            const url = new URL( productTitle.href, window.location.origin );
                            url.searchParams.delete( 'variantId' );
                            url.searchParams.append( 'variantId', currentVariant );
                            productTitle.href = url.toString();
                            addToCartButton.setAttribute( 'data-variant-id', `${ currentVariant }` );
                            addToFavoriteBtn.setAttribute( 'data-variant-id', `${ currentVariant }` );
                            const productId = addToFavoriteBtn.getAttribute( 'data-product-id' );
                            checkIsFavorite( productId, currentVariant ).then( isFavorite => {
                                if( isFavorite ){
                                    addToFavoriteBtn.classList.add( 'bg-primary', 'text-white' );
                                    addToFavoriteBtn.innerHTML = `
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                        </svg>
                                    `;
                                } else{
                                    addToFavoriteBtn.classList.remove( 'bg-primary', 'text-white' );
                                    addToFavoriteBtn.innerHTML = `
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heart"></use>
                                        </svg>
                                    `;
                                }
                            } ).catch( err => {
                                console.log( err );
                            } );
                        } );
                    } );
                } );
            } )();
        });
    } catch( err ){
        console.log( err );
        target.insertAdjacentHTML( 'beforeend', displayAlerts( 'Error Loading Products.', 'danger' ) );
    } finally{
        const productCardSkeleton = document.getElementById('productCardSkeleton');
        if( productCardSkeleton ) productCardSkeleton.remove();
    }
}
export default renderFeaturedProducts;