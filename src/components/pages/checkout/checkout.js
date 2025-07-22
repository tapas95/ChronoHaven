import './checkout.css';
import { db } from "../../../firebase-config";
import { collection, deleteDoc, doc, getDoc, getDocs, increment, updateDoc } from "firebase/firestore";
import { Country, State, City } from 'country-state-city';
import { getCurrentUser } from "../../authentication/auth";
import displayAlerts from '../../ui/alert/alert';
import placeOrder from '../../utils/placeOrder';

const personalInfo = document.getElementById( 'personalInfo' );
const askForLogin = document.getElementById( 'askForLogin' );
const firstName = document.getElementById( 'firstName' );
const lastName = document.getElementById( 'lastName' );
const email = document.getElementById( 'email' );
const phone = document.getElementById( 'phone' );
const shippingAddress = document.getElementById( 'shippingAddress' );
const shippingState = document.getElementById( 'shippingState' );
const shippingCity = document.getElementById( 'shippingCity' );
const shippingCountry = document.getElementById( 'shippingCountry' );
const shippingZip = document.getElementById( 'shippingZip' );
const shippingDescription = document.getElementById( 'shippingDescription' );
const billingInfo = document.getElementById( 'billingInfo' );
const billingAddress = document.getElementById( 'billingAddress' );
const billingState = document.getElementById( 'billingState' );
const billingCity = document.getElementById( 'billingCity' );
const billingCountry = document.getElementById( 'billingCountry' );
const billingZip = document.getElementById( 'billingZip' );
const billingDescription = document.getElementById( 'billingDescription' );
const addDifferentAddress = document.getElementById( 'addDifferentAddress' );
const subTotal = document.getElementById( 'subTotal' );
const total = document.getElementById( 'total' );
const placeOrderBtn = document.getElementById( 'placeOrder' );

const india = Country.getCountryByCode( 'IN' );
let isBillingInfoVisible = false;
let selectedShippingCountry = '';
let selectedShippingState = '';
let selectedBillingCountry = '';
let selectedBillingState = '';
if( shippingState ) shippingState.disabled = true;
if( shippingCity ) shippingCity.disabled = true;
if( billingState ) billingState.disabled = true;
if( billingCity ) billingCity.disabled = true;
if( shippingCountry ){
    shippingCountry.insertAdjacentHTML( 'beforeend', `<option value="${ india.isoCode }">${ india.name }</option>` );
    shippingCountry.addEventListener( 'change', e => {
        selectedShippingCountry = e.target.value;
        const states = State.getStatesOfCountry( e.target.value );
        states.forEach( state => {
            if( shippingState ){
                shippingState.insertAdjacentHTML( 'beforeend', `<option value="${ state.isoCode }">${ state.name }</option>` );
                shippingState.disabled = false;
            }
        } );
    } );
}
if( shippingState ){
    shippingState.addEventListener( 'change', e => {
        selectedShippingState = e.target.value;
        const cities = City.getCitiesOfState( selectedShippingCountry, selectedShippingState );
        if( shippingCity ) shippingCity.innerHTML = '<option value="" selected disabled>Select City</option>';
        cities.forEach( city => {
            if( shippingCity ){
                shippingCity.insertAdjacentHTML( 'beforeend', `<option value="${ city.name }">${ city.name }</option>` );
                shippingCity.disabled = false;
            }
        } );
    } );
}
if( billingCountry ){
    billingCountry.insertAdjacentHTML( 'beforeend', `<option value="${ india.isoCode }">${ india.name }</option>` );
    billingCountry.addEventListener( 'change', e => {
        selectedBillingCountry = e.target.value;
        const states = State.getStatesOfCountry( e.target.value );
        states.forEach( state => {
            if( billingState ){
                billingState.insertAdjacentHTML( 'beforeend', `<option value="${ state.isoCode }">${ state.name }</option>` );
                billingState.disabled = false;
            }
        } );
    } );
}
if( billingState ){
    billingState.addEventListener( 'change', e => {
        selectedBillingState = e.target.value;
        const cities = City.getCitiesOfState( selectedBillingCountry, selectedBillingState );
        if( billingCity ) billingCity.innerHTML = '<option value="" selected disabled>Select City</option>';
        cities.forEach( city => {
            if( billingCity ){
                billingCity.insertAdjacentHTML( 'beforeend', `<option value="${ city.name }">${ city.name }</option>` );
                billingCity.disabled = false;
            }
        } );
    } );
}
if( billingInfo ) billingInfo.style.display = 'none';
if( addDifferentAddress ){
    addDifferentAddress.addEventListener( 'click', e => {
        e.preventDefault();
        addDifferentAddress.classList.add( 'd-none' );
        isBillingInfoVisible = true;
        if( billingInfo ) billingInfo.style.display = 'block';
    } );
}
function validateCheckoutForm() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    // const isBillingInfoVisible = billingInfo && getComputedStyle( billingInfo ).display !== 'none';
    document.querySelectorAll( '.alert' ).forEach( el => el.remove() );
    if( firstName && !firstName.value.trim() ) return firstName.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your First Name' ) );
    if( lastName && !lastName.value.trim() ) return lastName.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your Last Name' ) );
    if( email && !email.value.trim() ) return email.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your Email' ) );
    if( email && !emailRegex.test( email.value.trim() ) ) return email.insertAdjacentHTML( 'afterend', displayAlerts( 'Invalid Email Address' ) );
    if( phone && !phone.value.trim() ) return phone.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your Mobile Number' ) );
    if( phone && !phoneRegex.test( phone.value.trim() ) ) return phone.insertAdjacentHTML( 'afterend', displayAlerts( 'Phone number must be 10 digits' ) );
    if( shippingAddress && !shippingAddress.value.trim() ) return shippingAddress.insertAdjacentHTML( 'afterend', displayAlerts( 'Shipping Address is required' ) );
    if( shippingCountry && !shippingCountry.value.trim() ) return shippingCountry.insertAdjacentHTML( 'afterend', displayAlerts( 'Country is required' ) );
    if( shippingState && !shippingState.value.trim() ) return shippingState.insertAdjacentHTML( 'afterend', displayAlerts( 'State is required' ) );
    if( shippingCity && !shippingCity.value.trim() ) return shippingCity.insertAdjacentHTML( 'afterend', displayAlerts( 'City is required' ) );
    if( shippingZip && !shippingZip.value.trim() ) return shippingZip.insertAdjacentHTML( 'afterend', displayAlerts( 'ZIP Code is required' ) );
    if( isBillingInfoVisible ){
        if( billingAddress && !billingAddress.value.trim() ) return billingAddress.insertAdjacentHTML( 'afterend', displayAlerts( 'Billing Address is required' ) );
        if( billingCountry && !billingCountry.value.trim() ) return billingCountry.insertAdjacentHTML( 'afterend', displayAlerts( 'Country is required' ) );
        if( billingState && !billingState.value.trim() ) return billingState.insertAdjacentHTML( 'afterend', displayAlerts( 'State is required' ) );
        if( billingCity && !billingCity.value.trim() ) return billingCity.insertAdjacentHTML( 'afterend', displayAlerts( 'City is required' ) );
        if( billingZip && !billingZip.value.trim() ) return billingZip.insertAdjacentHTML( 'afterend', displayAlerts( 'ZIP Code is required' ) );
    }
    return true;
}

const renderCheckout = async () => {
    const user = await getCurrentUser();
    if( user ){
        if( askForLogin ) askForLogin.remove();
        try{
            const userRef = doc( db, 'users', user.uid );
            const userSnap = await getDoc( userRef );
            if( userSnap.exists() ){
                const userInfo = userSnap.data();
                if( firstName ) firstName.value = userInfo.firstName;
                if( lastName ) lastName.value = userInfo.lastName;
                if( email ) email.value = userInfo.email;
            }
        } catch( err ){
            console.log( err );
        }
        const buyNow = new URLSearchParams( window.location.search ).get( 'buyNow' ) === 'true';
        if( buyNow ){
            const buyNowitem = JSON.parse( sessionStorage.getItem( 'buyNowItem' ) );
            if( !buyNowitem ) return;
            try{
                const productRef = doc( db, 'collections', 'products', 'items', buyNowitem.id );
                const productSnap = await getDoc( productRef );
                if( productSnap.exists() ){
                    const product = productSnap.data();
                    if( subTotal ) subTotal.textContent = `₹ ${ ( product.price.current * buyNowitem.quantity ).toFixed( 2 ) }`;
                    if( total ) total.textContent = `₹ ${ ( product.price.current * buyNowitem.quantity ).toFixed( 2 ) }`;
                    if( placeOrderBtn ){
                        placeOrderBtn.addEventListener( 'click', async e => {
                            e.preventDefault();
                            if( !validateCheckoutForm() ) return;
                            const orderDetails = {
                                firstName: firstName.value.trim(),
                                lastName: lastName.value.trim(),
                                email: email.value.trim(),
                                phone: phone.value.trim(),
                                shipping: {
                                    address: shippingAddress.value.trim(),
                                    country: shippingCountry.value.trim(),
                                    state: shippingState.value.trim(),
                                    city: shippingCity.value.trim(),
                                    zip: shippingZip.value.trim(),
                                    description: shippingDescription.value.trim()
                                },
                                billing: isBillingInfoVisible ? {
                                    address: billingAddress.value.trim(),
                                    country: billingCountry.value.trim(),
                                    state: billingState.value.trim(),
                                    city: billingCity.value.trim(),
                                    zip: billingZip.value.trim(),
                                    description: billingDescription.value.trim()
                                } : null,
                                subTotal: subTotal.textContent,
                                total: total.textContent,
                                products: [
                                    {
                                        id: buyNowitem.id,
                                        variantId: buyNowitem.variantId,
                                        name: product.name,
                                        productImage: product.variants?.find( variant => variant.id === buyNowitem.variantId ).images[ 0 ],
                                        quantity: buyNowitem.quantity,
                                        sku: product.sku,
                                        variant: product.variants?.find( variant => variant.id === buyNowitem.variantId ).colors,
                                        price: product.price.current
                                    }
                                ],
                                paymentMethod: 'COD',
                                orderStatus: 'pending'
                            };
                            placeOrderBtn.disabled = true;
                            placeOrderBtn.insertAdjacentHTML( 'afterbegin', '<div class="spinner-border spinner-border-sm text-light" role="status"><span class="visually-hidden">Loading...</span></div>' );
                            const orderId = await placeOrder( user.uid, orderDetails );
                            await updateDoc( productRef, {
                                inStock: increment( -buyNowitem.quantity )
                            } );
                            sessionStorage.removeItem( 'buyNowItem' );
                            placeOrderBtn.insertAdjacentHTML( 'afterend', displayAlerts( 'Order Placed', 'success' ) );
                            setTimeout( () => {
                                window.location.href = `./thank-you.html?orderId=${ orderId }`;
                            }, 1000 );
                        } );
                    }
                }
            } catch( err ){
                console.log( err );
            }
        } else{
            try{
                let cartProducts = [];
                let subTotalAmount = 0;
                let totalAmount = 0;
                const userCartRef = collection( db, 'users', user.uid, 'cart' );
                const userCartSnap = await getDocs( userCartRef );
                if( userCartSnap.empty ){
                    if( personalInfo ) personalInfo.insertAdjacentHTML( 'beforebegin', displayAlerts( 'No Item Found in Your Cart', 'danger', 'mt-0 mb-3' ) );
                    if( placeOrderBtn ) placeOrderBtn.disabled = true;
                    document.querySelectorAll( 'input, select, textarea' ).forEach( field => field.disabled = true );
                } else{
                    for( const docSnap of userCartSnap.docs ){
                        const cartItems = docSnap.data();
                        const productRef = doc( db, 'collections', 'products', 'items', cartItems.productId );
                        const productSnap = await getDoc( productRef );
                        if( productSnap.exists() ){
                            const product = productSnap.data();
                            subTotalAmount += product.price.current * cartItems.quantity;
                            totalAmount += product.price.current * cartItems.quantity;
                            cartProducts.push( {
                                id: cartItems.productId,
                                variantId: cartItems.variantId || null,
                                name: product.name,
                                productImage: product.variants?.find( variant => variant.id === cartItems.variantId ).images[ 0 ],
                                quantity: cartItems.quantity,
                                sku: product.sku,
                                variant: product.variants?.find( variant => variant.id === cartItems.variantId ).colors,
                                price: product.price.current
                            } );
                        }
                    };
                    if( subTotal ) subTotal.textContent = `₹ ${ subTotalAmount.toFixed( 2 ) }`;
                    if( total ) total.textContent = `₹ ${ subTotalAmount.toFixed( 2 ) }`;
                    if( placeOrderBtn ){
                        placeOrderBtn.addEventListener( 'click', async e => {
                            e.preventDefault();
                            if( !validateCheckoutForm() ) return;
                            const orderDetails = {
                                firstName: firstName.value.trim(),
                                lastName: lastName.value.trim(),
                                email: email.value.trim(),
                                phone: phone.value.trim(),
                                shipping: {
                                    address: shippingAddress.value.trim(),
                                    country: shippingCountry.value.trim(),
                                    state: shippingState.value.trim(),
                                    city: shippingCity.value.trim(),
                                    zip: shippingZip.value.trim(),
                                    description: shippingDescription.value.trim()
                                },
                                billing: isBillingInfoVisible ? {
                                    address: billingAddress.value.trim(),
                                    country: billingCountry.value.trim(),
                                    state: billingState.value.trim(),
                                    city: billingCity.value.trim(),
                                    zip: billingZip.value.trim(),
                                    description: billingDescription.value.trim()
                                } : null,
                                subTotal: subTotal.textContent,
                                total: total.textContent,
                                products: cartProducts,
                                paymentMethod: 'COD',
                                orderStatus: 'pending'
                            };
                            placeOrderBtn.disabled = true;
                            placeOrderBtn.insertAdjacentHTML( 'afterbegin', '<div class="spinner-border spinner-border-sm text-light" role="status"><span class="visually-hidden">Loading...</span></div>' );
                            const orderId = await placeOrder( user.uid, orderDetails );
                            for ( const item of cartProducts ){
                                await updateDoc( doc( db, 'collections', 'products', 'items', item.id ), {
                                    inStock: increment( -item.quantity )
                                } );
                            }
                            for( const docSnap of userCartSnap.docs ){
                                await deleteDoc( docSnap.ref );
                            }
                            placeOrderBtn.insertAdjacentHTML( 'afterend', displayAlerts( 'Order Placed', 'success' ) );
                            setTimeout( () => {
                                window.location.href = `./thank-you.html?orderId=${ orderId }`;
                            }, 1000 );
                        } );
                    }
                }
            } catch( err ){
                console.log( err );
            }
            
        }
    } else{
        if( askForLogin && document.body.contains( askForLogin ) ) askForLogin.insertAdjacentHTML( 'afterend', displayAlerts( 'Please login to Place Order.', 'danger', 'mb-3' ) );
        if( placeOrderBtn ) placeOrderBtn.disabled = true;
        document.querySelectorAll( 'input, select, textarea' ).forEach( field => field.disabled = true );
    }
}
renderCheckout();
