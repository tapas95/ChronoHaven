import './thank-you.css';

const orderIdEl = document.getElementById( 'orderId' );

const params = new URLSearchParams( window.location.search );
const orderId = params.get( 'orderId' );

if( orderIdEl ) orderIdEl.textContent = orderId;

