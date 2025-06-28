import '@splidejs/splide/css';
import './product.css';
import Splide from "@splidejs/splide";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import renderRelatedProducts from './relatedProducts';
import variants from '../../utils/variants';

const productCategory = document.getElementById( 'productCategory' );
const productImageWrapper = document.querySelector( '#productImageWrapper .splide__track' );
const productVariantSlider = document.querySelector('.product-variant-slider');
const productName = document.getElementById( 'productName' );
const productShortDescription = document.getElementById( 'productShortDescription' );
const productRating = document.getElementById( 'productRating' );
const variantsContainer = document.getElementById( 'variantsContainer' );
const productDetailedDescription = document.getElementById( 'productDetailedDescription' );
const stock = document.getElementById( 'stock' );
const totalPrice = document.getElementById( 'totalPrice' );
const relatedProducts = document.getElementById( 'relatedProducts' );

const fetchProductData = async () => {
    const urlParams = new URLSearchParams( window.location.search );
    const productId = urlParams.get( 'id' );
    try{
        const productRef = doc( db, "collections", "products", 'items', productId );
        const productSnap = await getDoc( productRef );
        if( productSnap.exists() ){
            const product = productSnap.data();
            let currentVariant = product.variants[ 0 ].id;
            document.title = `Product | ${ product.name }`;
            if( productCategory ) productCategory.textContent = product.category;
            if( productName ) productName.textContent = product.name;
            if( productShortDescription ) productShortDescription.textContent = product.shortDescription;
            if( productRating ) productRating.textContent = `${ product.rating } Ratings`;
            if( variantsContainer ) variantsContainer.append( variants( product ) );
            const variantButtons = document.querySelectorAll( '.varient-button' );
            if( product.variants.length > 0 && product.variants[ 0 ].images.length > 0 ) productImageWrapper.innerHTML = product.variants[ 0 ].images?.map( image => `
                <div class="splide__list">
                    <img src="${ image }" alt="${ product.name }" class="d-block img-fluid mx-auto" />
                </div>
            ` ).join('');
            new Splide( productVariantSlider, {
                    fixedWidth: 100,
                    gap       : 10,
                    rewind    : true,
                    pagination: true,
            } ).mount();
            
            if (variantButtons.length > 0) variantButtons[ 0 ].classList.add( 'active' );
            variantButtons?.forEach( variantButton => {
                variantButton.addEventListener( 'click', () => {
                    variantButtons.forEach( btn => btn.classList.remove( 'active' ) );
                    variantButton.classList.add( 'active' );
                    const variantId = variantButton.getAttribute( 'data-varient-id' );
                    if ( currentVariant === variantId ) return;
                    currentVariant = variantId;
                    product.variants?.forEach( variant => {
                        if( variant.id === variantId ){
                            const varientImages = variant.images?.map( image => {
                                return `<div class="splide__list"><img src="${ image }" alt="${ product.name }" class="d-block img-fluid mx-auto" /></div>`;
                            }).join('');
                            productImageWrapper.innerHTML = varientImages;
                        };
                    } );
                } );
            }  );
            if( productDetailedDescription ) productDetailedDescription.insertAdjacentHTML( 'beforeend', `
                <p>${ product.detailedDescription }</p>
                <ul class="list-inline">
                    ${ Object.keys( product.specifications ).map( key => {
                        return `
                            <li class="d-flex align-items-center gap-2">
                                <span class="d-block">${ key }: </span>
                                <span class="d-block fw-semibold">${ product.specifications[ key ] }</span>
                            </li>
                        `;
                    } ).join('') }
                </ul>
            ` );
            if( stock ) stock.textContent = product.inStock;
            if( totalPrice ) totalPrice.textContent = `₹ ${product.price.current}.00`;
            renderRelatedProducts( product.id, product.category, relatedProducts );
        } else{
            console.log('No such Product Found!');
        }
    } catch( err ){
        console.log( err );
    }
}
fetchProductData();