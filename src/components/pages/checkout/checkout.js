import './checkout.css';
import { db } from "../../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { getCurrentUser } from "../../authentication/auth";
import displayAlerts from '../../ui/alert/alert';

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
const addDifferentAddress = document.getElementById( 'addDifferentAddress' );
const subTotal = document.getElementById( 'subTotal' );
const total = document.getElementById( 'total' );
const placeOrder = document.getElementById( 'placeOrder' );

if( billingInfo ) billingInfo.style.display = 'none';
if( addDifferentAddress ){
    addDifferentAddress.addEventListener( 'click', e => {
        e.preventDefault();
        addDifferentAddress.classList.add( 'd-none' );
        if( billingInfo ) billingInfo.style.display = 'block';
    } );
}
function validateCheckoutForm() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const isBillingInfoVisible = billingInfo && billingInfo.style.display !== 'none';
    const isAskForLoginVisible = askForLogin && askForLogin.style.display !== 'none';
    console.log(isAskForLoginVisible);
    document.querySelectorAll( '.alert' ).forEach( el => el.remove() );
    if( firstName && !firstName.value.trim() ) return firstName.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your First Name' ) );
    if( lastName && !lastName.value.trim() ) return lastName.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your Last Name' ) );
    if( email && !email.value.trim() ) return email.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your Email' ) );
    if( email && !emailRegex.test( email.value.trim() ) ) return email.insertAdjacentHTML( 'afterend', displayAlerts( 'Invalid Email Address' ) );
    if( phone && !phone.value.trim() ) return phone.insertAdjacentHTML( 'afterend', displayAlerts( 'Please enter your Mobile Number' ) );
    if( phone && !phoneRegex.test( phone.value.trim() ) ) return phone.insertAdjacentHTML( 'afterend', displayAlerts( 'Phone number must be 10 digits' ) );
    if( shippingAddress && !shippingAddress.value.trim() ) return shippingAddress.insertAdjacentHTML( 'afterend', displayAlerts( 'Shipping Address is required' ) );
    if( shippingState && !shippingState.value.trim() ) return shippingState.insertAdjacentHTML( 'afterend', displayAlerts( 'State is required' ) );
    if( shippingCity && !shippingCity.value.trim() ) return shippingCity.insertAdjacentHTML( 'afterend', displayAlerts( 'City is required' ) );
    if( shippingCountry && !shippingCountry.value.trim() ) return shippingCountry.insertAdjacentHTML( 'afterend', displayAlerts( 'Country is required' ) );
    if( shippingZip && !shippingZip.value.trim() ) return shippingZip.insertAdjacentHTML( 'afterend', displayAlerts( 'ZIP Code is required' ) );
    if( isBillingInfoVisible ){
        if( billingAddress && !billingAddress.value.trim() ) return billingAddress.insertAdjacentHTML( 'afterend', displayAlerts( 'Billing Address is required' ) );
        if( billingState && !billingState.value.trim() ) return billingState.insertAdjacentHTML( 'afterend', displayAlerts( 'State is required' ) );
        if( billingCity && !billingCity.value.trim() ) return billingCity.insertAdjacentHTML( 'afterend', displayAlerts( 'City is required' ) );
        if( billingCountry && !billingCountry.value.trim() ) return billingCountry.insertAdjacentHTML( 'afterend', displayAlerts( 'Country is required' ) );
        if( billingZip && !billingZip.value.trim() ) return billingZip.insertAdjacentHTML( 'afterend', displayAlerts( 'ZIP Code is required' ) );
    }
    if( askForLogin ){
        askForLogin.insertAdjacentHTML( 'afterend', displayAlerts( 'Please login to Place Order.', 'danger', 'mb-3' ) );
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
    } else{
        
    }
    const buyNow = new URLSearchParams( window.location.search ).get( 'buyNow' ) === 'true';
    if( buyNow ){
        const buyNowitem = JSON.parse( sessionStorage.getItem( 'buyNowItem' ) );
        if( !buyNowitem ) return;
        try{
            const productRef = doc( db, 'collections', 'products', 'items', buyNowitem.productId );
            const productSnap = await getDoc( productRef );
            if( productSnap.exists() ){
                const product = productSnap.data();
                if( subTotal ) subTotal.textContent = `₹ ${ ( product.price.current * buyNowitem.productQuantity ).toFixed( 2 ) }`;
                if( total ) total.textContent = `₹ ${ ( product.price.current * buyNowitem.productQuantity ).toFixed( 2 ) }`;
            }
        } catch( err ){
            console.log( err );
        }
        if( placeOrder ){
            placeOrder.addEventListener( 'click', e => {
                e.preventDefault();
                if( !validateCheckoutForm() ) return;
            } );
        }
    }
}
renderCheckout();
