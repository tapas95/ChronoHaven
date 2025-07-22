import './order-details.css';
import { db } from "../../../firebase-config";
import { doc, getDoc } from "firebase/firestore";

const orderIdEl = document.getElementById( 'orderId' );
const orderDate = document.getElementById( 'orderDate' );
const productsContainer = document.getElementById( 'productsContainer' );
const subTotalEl = document.getElementById( 'subTotal' );
const totalEl = document.getElementById( 'total' );
const name = document.getElementById( 'name' );
const email = document.getElementById( 'email' );
const phone = document.getElementById( 'phone' );
const shippingAddress = document.getElementById( 'shippingAddress' );
const shippingCountry = document.getElementById( 'shippingCountry' );
const shippingState = document.getElementById( 'shippingState' );
const shippingCity = document.getElementById( 'shippingCity' );
const shippingZip = document.getElementById( 'shippingZip' );
const billingAddressContainer = document.querySelector( '.billing-address-container' );
const billingAddress = document.getElementById( 'billingAddress' );
const billingCountry = document.getElementById( 'billingCountry' );
const billingState = document.getElementById( 'billingState' );
const billingCity = document.getElementById( 'billingCity' );
const billingZip = document.getElementById( 'billingZip' );

const renderOrderdetails = async () => {
    const orderId = new URLSearchParams( window.location.search ).get( 'orderId' );
    document.title = `Order | ${ orderId }`;
    if( orderIdEl ) orderIdEl.textContent = orderId;
    const orderRef = doc( db, 'orders', orderId  );
    const orderSnap = await getDoc( orderRef );
    if( orderSnap.exists() ){
        const orderData = orderSnap.data();
        if( orderDate ) orderDate.textContent = orderData.createdAt.toDate().toLocaleDateString( 'en-US', { year: 'numeric', month: 'long', day: 'numeric', } );
        orderData.products.map( product => {
            if( productsContainer ){
                productsContainer.insertAdjacentHTML( 'beforeend', `
                    <div id="${ product.id }" class="product d-flex gap-3">
                        <div class="img-container flex-shrink-0 bg-white p-3 border rounded-12 oveflow-hidden">
                            <img src="${ product.productImage }" alt="${ product.name }" class="img-fluid d-block mx-auto" />
                        </div>
                        <div class="flex-fill">
                            <h5 class="mb-2">${ product.name }</h5>
                            <div class="d-flex align-items-center gap-3 mb-2">
                                <p class="d-flex align-items-center gap-2 fs-sm lh-1 fw-medium mb-0">
                                    <span class="d-block text-gray-600">Quantity: </span>
                                    <span id="sku" class="d-block">${ product.quantity }</span>
                                </p>
                                <p class="d-flex align-items-center gap-2 fs-sm lh-1 fw-medium">
                                    <span class="d-block text-gray-600">Variant: </span>
                                    <span class="variant d-block rounded-circle" style="background-image: linear-gradient( -45deg, ${ product.variant.map( color => product.variant.length > 1 ? `${ color } ${ 100 / product.variant.length }` : `${ color }` ).join( ', ' ) } )"></span>
                                </p>
                            </div>
                            <p class="d-flex align-items-center gap-2 fs-sm lh-1 fw-medium">
                                <span class="d-block text-gray-600">SKU: </span>
                                <span id="sku" class="d-block">${ product.sku }</span>
                            </p>
                        </div>
                        <p class="fs-md fw-semibold text-primary">₹ ${ product.price.toFixed( 2 ) }</p>
                    </div>
                ` );
            }
        });
        if( subTotalEl ) subTotalEl.textContent = orderData.subTotal;
        if( totalEl ) totalEl.textContent = orderData.total;
        if( name ) name.textContent = `${ orderData.firstName } ${ orderData.lastName }`;
        if( email ) email.textContent = orderData.email;
        if( email ) email.setAttribute( 'href', `mailto:${ orderData.email }` );
        if( phone ) phone.textContent = orderData.phone;
        if( phone ) phone.setAttribute( 'href', `tel:${ orderData.phone }` );
        if( shippingAddress ) shippingAddress.textContent = orderData.shipping?.address;
        if( shippingCountry ) shippingCountry.textContent = orderData.shipping?.country;
        if( shippingState ) shippingState.textContent = orderData.shipping?.state;
        if( shippingCity ) shippingCity.textContent = orderData.shipping?.city;
        if( shippingZip ) shippingZip.textContent = orderData.shipping?.zip;
        if( orderData.billing !== null && orderData.billing !== undefined ){
            if( billingAddress ) billingAddress.textContent = orderData.billing?.address;
            if( billingCountry ) billingCountry.textContent = orderData.billing?.country;
            if( billingState ) billingState.textContent = orderData.billing?.state;
            if( billingCity ) billingCity.textContent = orderData.billing?.city;
            if( billingZip ) billingZip.textContent = orderData.billing?.zip;
        } else{
            if( billingAddressContainer ) billingAddressContainer.remove();
        }
        console.log(orderData);
    }
}
renderOrderdetails();