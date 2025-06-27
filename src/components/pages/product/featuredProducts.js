import '@splidejs/splide/css';
import { db } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Splide from "@splidejs/splide";
import displayAlerts from "../../ui/alert/alert";
import renderProductCard from '../../layout/products-card/productCard';
import renderProductCardSkeleton from "../../layout/skeleton/productCardSkeleton";

const renderFeaturedProducts = async ( target ) => {
    renderProductCardSkeleton( target, 3 );
    try{
        const featuredProductsRef = collection( db, 'collections', 'products', 'items' );
        const featuredProductsSnapshot = await getDocs( featuredProductsRef );
        if( featuredProductsSnapshot.empty ){
            target.insertAdjacentHTML( 'beforeend', displayAlerts( 'No Products Found.', 'danger' ) );
            return;
        }
        featuredProductsSnapshot.forEach( products => {
            const product = products.data();
            target.insertAdjacentHTML( 'beforeend', renderProductCard( product ) );
        });
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
export default renderFeaturedProducts;