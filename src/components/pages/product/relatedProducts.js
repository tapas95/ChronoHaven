import '@splidejs/splide/css';
import '../../layout/products-card/product-card.css';
import { db } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Splide from "@splidejs/splide";
import displayAlerts from "../../ui/alert/alert";
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
            const varientImages = `
                <div class="variant-images splide mb-3">
                    <div class="splide__track">
                        <div class="splide__list">
                        ${ product.variants?.map( variant => {
                            return variant.images?.[ 0 ] ? `
                            <div class="splide__slide mb-0">
                                <a href="./product.html?id=${ product.id }" class="d-block">
                                <img src="${ variant.images[ 0 ] }" class="d-block img-fluid mx-auto" />
                                </a>
                            </div>`
                            : '';
                        } ).join('') }
                        </div>
                    </div>
                </div>
            `;
            const productData = `
                <div id="${ product.id }" class="col-lg-4">
                    <div class="product-content h-100 position-relative">
                        <div class="img-container bg-light p-4 rounded-16 overflow-hidden mb-3">
                            ${ varientImages }
                        </div>
                        <div class="info mb-3">
                            <h6 class="mb-2">
                                <a href="./product.html?id=${ product.id }">${ product.name }</a>
                            </h6>
                            <p class="fs-sm mb-2">${ product.shortDescription }</p>
                            <p class="price d-flex gap-1 fw-semibold">
                                <span class="d-block">₹</span>
                                <span class="d-block text-gray-600 text-decoration-line-through">${ product.price.previous }.00</span>
                                <span class="d-block fw-bold text-primary">${ product.price.current }.00</span>
                            </p>
                        </div>
                        <div class="action d-flex gap-3 position-absolute end-0 bottom-0 start-0">
                            <a href="javascript: void(0);" class="add-to-favorite btn btn-outline-primary btn-sm p-2 d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle">
                                <svg width="18" height="18" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#heart" />
                                </svg>
                            </a>
                            <a href="javascript: void(0);" class="btn btn-outline-primary btn-sm d-flex flex-fill align-items-center justify-content-center gap-2">
                                <svg width="18" height="18" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#cart" />
                                </svg>
                                <span class="d-block">Add To Cart</span>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            target.insertAdjacentHTML( 'beforeend', productData );
        } );
        console.log(renderedProducts);
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