import '@splidejs/splide/css';
import './shop.css';
import Splide from "@splidejs/splide";
import { db } from '../../../firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import renderProductCard from '../../layout/products-card/productCard';
import renderProductCardSkeleton from '../../layout/skeleton/productCardSkeleton';
import displayAlerts from '../../ui/alert/alert';
import renderAllCategories from '../../utils/renderAllCategories';
import addToCart from '../../utils/addToCart';
import updateCartCount from '../../utils/updateCartCount';
import checkIsFavorite from '../../utils/checkIsFavorite';
import addToFavorites from '../../utils/addToFavorites';

const productsContainer = document.getElementById( 'productsContainer' );
const categoriesContainer = document.getElementById( 'categoriesContainer' );

const renderProducts = async ( category = null, priceRange = null ) => {
    productsContainer.innerHTML = '';
    renderProductCardSkeleton( productsContainer, 9 );
    try{
        let productsRef = collection( db, 'collections', 'products', 'items' );
        if( category && category.length > 0 ) productsRef = query( productsRef, where( 'category', 'in', category ) );
        if( priceRange ){
            const [min, max] = priceRange;
            productsRef = query( productsRef, where( 'price', '>=', min ), where( 'price', '<=', max ) );
        }
        const productsSnap = await getDocs( productsRef );
        if( productsSnap.empty ){
            productsContainer.insertAdjacentHTML( 'beforeend', displayAlerts( 'No Products Found.' ) );
            return;
        }
        productsSnap.forEach( doc => {
            const product = doc.data();
            productsContainer.insertAdjacentHTML( 'beforeend', renderProductCard( product ) );
        } );
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
                                    btn.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Product Added To Cart', 'success', 'fs-xs' ) );
                                    updateCartCount();
                                } else if( status === 'EXISTS' ){
                                    btn.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Product Already Exist', 'danger', 'fs-xs' ) );
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
                    const product = productsSnap.docs[ i ]?.data();
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
                        } );
                    } );
                } );
            } )();
        } );
    } catch( err ){
        console.log( err );
        productsContainer.insertAdjacentHTML( 'beforeend', displayAlerts( 'Error Loading Products.' ) );
    } finally{
        const productCardSkeleton = document.getElementById('productCardSkeleton');
        if( productCardSkeleton ) productCardSkeleton.remove();
    }
}
renderProducts();

if( categoriesContainer ){
    renderAllCategories( categoriesContainer ).then( () => {
        const categoryBtns = categoriesContainer.querySelectorAll( 'input.category-checkbox' );
        categoryBtns.forEach( catBtn => {
            catBtn.addEventListener( 'change', e => {
                e.preventDefault();
                const catName = catBtn.getAttribute( 'data-category' );
                const selectedCategories = Array.from( categoryBtns ).filter( cb => cb.checked ).map( cb => cb.getAttribute( 'data-category' ) );
                catBtn.checked ? catBtn.parentElement.classList.add( 'bg-primary', 'text-white' ) : catBtn.parentElement.classList.remove( 'bg-primary', 'text-white' );
                selectedCategories.length === 0 ? renderProducts( null ) : renderProducts( selectedCategories );
            } );
        } );
    } )
};

// if( pricesFilters ){
//     pricesFilters.forEach( priceFilter => {
//         priceFilter.addEventListener( 'change', e => {
//             e.preventDefault();
//             const priceRange = priceFilter.getAttribute( 'data-price' ).split( '-' );
//             if( priceFilter.checked ){

//             }
//             console.log(priceRange);
//         } );
//     } );
    
// }