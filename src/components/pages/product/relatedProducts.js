import '@splidejs/splide/css';
import { db } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Splide from "@splidejs/splide";
import displayAlerts from "../../ui/alert/alert";
import renderProductCard from '../../layout/products-card/productCard';
import renderProductCardSkeleton from "../../layout/skeleton/productCardSkeleton";

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