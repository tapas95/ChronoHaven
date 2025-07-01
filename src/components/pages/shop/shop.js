import '@splidejs/splide/css';
import './shop.css';
import Splide from "@splidejs/splide";
import { db } from '../../../firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import renderProductCard from '../../layout/products-card/productCard';
import renderProductCardSkeleton from '../../layout/skeleton/productCardSkeleton';
import displayAlerts from '../../ui/alert/alert';
import renderAllCategories from '../../utils/renderAllCategories';

const productsContainer = document.getElementById( 'productsContainer' );
const categoriesContainer = document.getElementById( 'categoriesContainer' );
const pricesFilters = document.querySelectorAll('#pricesFilterContainer .price-checkbox');

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
            productsContainer.insertAdjacentHTML( 'beforeend', displayAlerts( 'No Products Found.', 'danger' ) );
            return;
        }
        productsSnap.forEach( doc => {
            const product = doc.data();
            productsContainer.insertAdjacentHTML( 'beforeend', renderProductCard( product ) );
            // console.log(product.variants[0].id);
        } );
        requestAnimationFrame( () => {
            const varientSliders = document.querySelectorAll('.variant-images');
            const productTitles = document.querySelectorAll( '.product-title' );
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
                        if ( !productTitle ) return;
                        const url = new URL( productTitle.href, window.location.origin );
                        url.searchParams.delete( 'variantId' );
                        url.searchParams.append( 'variantId', currentVariant );
                        productTitle.href = url.toString();
                    } );
                } );
            } );
        } );
    } catch( err ){
        console.log( err );
        productsContainer.insertAdjacentHTML( 'beforeend', displayAlerts( 'Error Loading Products.', 'danger' ) );
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

if( pricesFilters ){
    pricesFilters.forEach( priceFilter => {
        priceFilter.addEventListener( 'change', e => {
            e.preventDefault();
            const priceRange = priceFilter.getAttribute( 'data-price' ).split( '-' );
            if( priceFilter.checked ){

            }
            console.log(priceRange);
        } );
    } );
    
}