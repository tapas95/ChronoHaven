import '@splidejs/splide/css';
import './shop.css';
import Splide from "@splidejs/splide";
import { db } from '../../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import renderProductCard from '../../layout/products-card/productCard';
import renderProductCardSkeleton from '../../layout/skeleton/productCardSkeleton';
import displayAlerts from '../../ui/alert/alert';

const productsContainer = document.getElementById( 'productsContainer' );

const renderProducts = async () => {
    renderProductCardSkeleton( productsContainer, 9 );
    try{
        const productsRef = collection( db, 'collections', 'products', 'items' );
        const productsSnap = await getDocs( productsRef );
        if( productsSnap.empty ){
            productsContainer.insertAdjacentHTML( 'beforeend', displayAlerts( 'No Products Found.', 'danger' ) );
            return;
        }
        productsSnap.forEach( products => {
            const product = products.data();
            productsContainer.insertAdjacentHTML( 'beforeend', renderProductCard( product ) );
        } );
        requestAnimationFrame( () => {
            const varientSliders = document.querySelectorAll('.variant-images');
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
                } );
            } );
        });
    } catch( err ){
        console.log( err );
        productsContainer.insertAdjacentHTML( 'beforeend', displayAlerts( 'Error Loading Products.', 'danger' ) );
    } finally{
        const productCardSkeleton = document.getElementById('productCardSkeleton');
        if( productCardSkeleton ) productCardSkeleton.remove();
    }
}
renderProducts();
