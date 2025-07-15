import './product.css';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import renderRelatedProducts from './relatedProducts';
import initializeProductSlider from '../../utils/initializeProductSlider';
import variants from '../../utils/variants';

const productCategory = document.getElementById( 'productCategory' );
const productImageWrapper = document.querySelector( '#productImageWrapper .splide__list' );
const productVariantSlider = document.querySelector('.product-variant-slider');
const productVariantThumbnailSlider = document.querySelector('.product-variant-thumbnail-slider');
const productVariantThumbnailContainer = document.querySelector('.product-variant-thumbnail-slider .splide__list');
const productName = document.getElementById( 'productName' );
const productShortDescription = document.getElementById( 'productShortDescription' );
const productRating = document.getElementById( 'productRating' );
const variantsContainer = document.getElementById( 'variantsContainer' );
const productDetailedDescription = document.getElementById( 'productDetailedDescription' );
const selectedProductName = document.getElementById( 'selectedProductName' );
const selectedProductImg = document.getElementById( 'selectedProductImg' );
const selectedProductColor = document.getElementById( 'selectedProductColor' );
const selectedProductQuantity = document.getElementById( 'selectedProductQuantity' );
const qtyInput = document.querySelector('#quantity #quantityInput');
const qtyPlus = document.querySelector('#quantity #plus');
const qtyMinus = document.querySelector('#quantity #minus');
const stock = document.getElementById( 'stock' );
const totalPrice = document.getElementById( 'totalPrice' );
const buyNow = document.getElementById( 'buyNow' );
const relatedProducts = document.getElementById( 'relatedProducts' );
import quantity from '../../utils/quantity';

const fetchProductData = async () => {
    const urlParams = new URLSearchParams( window.location.search );
    const productId = urlParams.get( 'id' );
    const variantId = urlParams.get( 'variantId' );
    let qty = parseInt( qtyInput.value ) || 1;
    try{
        const productRef = doc( db, "collections", "products", 'items', productId );
        const productSnap = await getDoc( productRef );
        if( productSnap.exists() ){
            const product = productSnap.data();
            let currentVariant = variantId;
            document.title = `Product | ${ product.name }`;
            if( productCategory ) productCategory.textContent = product.category;
            if( productName ) productName.textContent = product.name;
            if( productShortDescription ) productShortDescription.textContent = product.shortDescription;
            if( productRating ) productRating.textContent = `${ product.rating } Ratings`;
            if( variantsContainer ) variantsContainer.append( variants( product, currentVariant ) );
            const variantButtons = document.querySelectorAll( '.varient-button' );
            const selectedVariant = product.variants.find( variant => variant.id === currentVariant );
            if( product.variants.length > 0 && selectedVariant.images.length > 0 ) {
                const variantImages =  selectedVariant.images?.map( image => `
                    <li class="splide__slide mb-0">
                        <img src="${ image }" alt="${ product.name }" class="d-block img-fluid mx-auto" />
                    </li>
                ` ).join( '' );
                productImageWrapper.innerHTML = variantImages;
                productVariantThumbnailContainer.innerHTML = variantImages;
            }
            requestAnimationFrame( () => initializeProductSlider( productVariantSlider, productVariantThumbnailSlider ) );
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
                                return `<li class="splide__slide mb-0"><img src="${ image }" alt="${ product.name }" class="d-block img-fluid mx-auto" /></li>`;
                            }).join('');
                            productImageWrapper.innerHTML = varientImages;
                            productVariantThumbnailContainer.innerHTML = varientImages;
                            requestAnimationFrame( () => initializeProductSlider( productVariantSlider, productVariantThumbnailSlider ));
                            if( selectedProductImg ) selectedProductImg.innerHTML = `<img src="${ variant.images[ 0 ] }" alt="${ product.name }" class="d-block img-fluid mx-auto" /> `;
                            if( selectedProductColor ) selectedProductColor.innerHTML = `<span class="current-variant-color d-block rounded-circle" style="background-color: ${ variant.colors[ 0 ] };"></span>`;
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
            product.variants.forEach( variant => {
                if( variant.id === currentVariant ){
                    if( selectedProductImg ) selectedProductImg.innerHTML = `<img src="${ variant.images[ 0 ] }" alt="${ product.name }" class="d-block img-fluid mx-auto" /> `;
                    if( selectedProductColor ) selectedProductColor.innerHTML = `<span class="current-variant-color d-block rounded-circle" style="background-color: ${ variant.colors[ 0 ] };"></span>`;
                }
            } );
            if( selectedProductName ) selectedProductName.textContent = product.name;
            if( selectedProductQuantity ) selectedProductQuantity.textContent = qty;
            quantity( qtyInput, qtyPlus, qtyMinus, product.inStock );
            if (product.inStock === 0) {
                qtyInput.value = 0;
                qtyInput.disabled = true;
                qtyPlus.disabled = true;
                qtyMinus.disabled = true;
                if ( stock ) stock.textContent = 'Out of Stock';
            }
            const updateTotalPrice = () => {
                qty = parseInt( qtyInput.value ) || 0;
                if (qty > product.inStock) {
                    qty = product.inStock;
                    qtyInput.value = qty;
                }
                if ( product.inStock === 0 ) {
                    if ( totalPrice ) totalPrice.textContent = `₹ 0.00`;
                    if ( stock ) stock.textContent = 'Out of Stock';
                    return;
                }
                if( totalPrice ) totalPrice.textContent = `₹ ${ parseInt( product.price.current ) * qty }.00`;
                if( stock ) stock.textContent = product.inStock - qty;
                if( selectedProductQuantity ) selectedProductQuantity.textContent = qty;
            };
            updateTotalPrice();
            qtyInput.addEventListener('input', updateTotalPrice);
            qtyInput.addEventListener('blur', updateTotalPrice);
            qtyInput.addEventListener('change', updateTotalPrice);
            qtyPlus.addEventListener('click', updateTotalPrice);
            qtyMinus.addEventListener('click', updateTotalPrice);
            if ( buyNow ) {
                buyNow.addEventListener( 'click', () => {
                    sessionStorage.setItem( 'buyNowItem', JSON.stringify({
                        productId: productId,
                        productVariant: currentVariant,
                        productQuantity: qty
                    }) );
                    window.location.href = './checkout.html?buyNow=true';
                } );
            }
            renderRelatedProducts( product.id, product.category, relatedProducts );
        } else{
            console.log('No such Product Found!');
        }
    } catch( err ){
        console.log( err );
    }
}
fetchProductData();