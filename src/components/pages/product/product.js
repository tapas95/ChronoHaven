import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

const productCategory = document.getElementById( 'productCategory' );
const productName = document.getElementById( 'productName' );
const productShortDescription = document.getElementById( 'productShortDescription' );
const productRating = document.getElementById( 'productRating' );
const productDetailedDescription = document.getElementById( 'productDetailedDescription' );

const fetchProductData = async () => {
    const urlParams = new URLSearchParams( window.location.search );
    const productId = urlParams.get( 'id' );
    try{
        const productRef = doc( db, "collections", "products", 'items', productId );
        const productSnap = await getDoc( productRef );
        if( productSnap.exists() ){
            const product = productSnap.data();
            document.title = `Product | ${ product.name }`;
            if( productCategory ) productCategory.textContent = product.category;
            if( productName ) productName.textContent = product.name;
            if( productShortDescription ) productShortDescription.textContent = product.shortDescription;
            if( productRating ) productRating.textContent = `${ product.rating } Ratings`;
            if( productDetailedDescription ) productDetailedDescription.insertAdjacentHTML( 'beforeend', `
                <p>${ product.detailedDescription }</p>
                <ul class="list-inline">
                    ${ Object.keys( product.specifications ).map( key => {
                        return `<li class="d-flex align-items-center gap-2"><span class="d-block">${ key }: </span><span class="d-block fw-semibold">${ product.specifications[ key ] }</span></li>`
                    } ).join('') }
                </ul>
            ` );
        } else{
            console.log('No such Product Found!');
        }
    } catch( err ){
        console.log( err );
    }
}
fetchProductData();