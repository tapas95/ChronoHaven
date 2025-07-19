import './orders.css';
import { db } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import handleLogout from "../../utils/handleLogout";
import { getCurrentUser } from "../../authentication/auth";
import displayAlerts from "../../ui/alert/alert";
import renderOrderListSkeleton from '../../layout/skeleton/orderListSkeleton';

const logOutBtn = document.getElementById( 'logOutBtn' );
const orderedProductsEl = document.getElementById( 'orderedProducts' );

const renderOrders = async () => {
    renderOrderListSkeleton( orderedProductsEl, 10 );
    const user = await getCurrentUser();
    if( user ){
        try{
            const orderedProductsRef = collection( db, 'orders' );
            const orderedProductsQuery = query( orderedProductsRef, where( 'userId', '==', user.uid ) );
            const orderedProductsSnap = await getDocs( orderedProductsQuery );
            if( orderedProductsSnap.empty ){
                if( orderedProductsEl ) orderedProductsEl.innerHTML = `
                    <tr>
                        <td colspan="6" class="p-0 border-0">
                            ${ displayAlerts( 'You haven’t placed any orders yet. Start shopping and treat yourself!' ) }
                        </td>
                    </tr>
                `;
            } else{
                orderedProductsEl.innerHTML = '';
                orderedProductsSnap.forEach( orderedProducts => {
                    const orderedProduct = orderedProducts.data();
                    const orderId = orderedProducts.id;
                    const orderDate = orderedProduct.createdAt.toDate();
                    const formattedDate = orderDate?orderDate.toLocaleDateString( "en-IN", { year: "numeric", month: "short", day: "numeric" }) : "N/A";
                    if( orderedProductsEl ){
                        orderedProductsEl.insertAdjacentHTML( 'beforeend', `
                            <tr>
                                <td class="px-3 py-2 bg-light fw-medium text-primary border-bottom-0">
                                    <a href="order-details.html?orderId=${ orderId }">#${ orderId }</a>
                                </td>
                                <td class="px-3 py-2 bg-light border-bottom-0">${ formattedDate }</td>
                                <td class="px-3 py-2 bg-light border-bottom-0">${ orderedProduct.shipping.address }</td>
                                <td class="px-3 py-2 bg-light fw-semibold text-primary border-bottom-0">${ orderedProduct.total }</td>
                                <td class="px-3 py-2 bg-light border-bottom-0">${ orderedProduct.paymentMethod }</td>
                                <td class="px-3 py-2 bg-light border-bottom-0">
                                    <button class="view-order btn btn-sm btn-primary p-2 rounded-4" data-order-id="${ orderId }">
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#eye"></use>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ` );
                    }
                } );
                requestAnimationFrame( () => {
                    const viewOrderBtn = document.querySelectorAll( '.view-order' );
                    viewOrderBtn.forEach( btn => {
                        const productId = btn.getAttribute( 'data-order-id' );
                        btn.addEventListener( 'click', e => {
                            e.preventDefault();
                            window.location.href = `./order-details.html?orderId=${ productId }`
                        } );
                    } );
                } );
            }
        } catch( err ){
            console.log( err );
        }
    }
}
renderOrders();

if( logOutBtn ){
    logOutBtn.addEventListener( 'click', e => {
        e.preventDefault();
        handleLogout();
    } );
}