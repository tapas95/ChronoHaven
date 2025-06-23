import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../../style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { db } from "../../../firebase-config";
import { collection, getDocs } from 'firebase/firestore';

const displayFeaturedProducts = async () => {
    let app = document.getElementById('app');
    try{
        const productsRef = collection( db, 'collections', 'products', 'items' );
        const productsSnap = await getDocs( productsRef );
        const products = productsSnap.docs.map( doc => doc.data() );
        if( products.length !== 0 ){
            products.forEach( product => {
                // app.insertAdjacentHTML( 'beforeend', `
                //     <div>
                //         <p>${ product.title}</p>
                //         <p>${ product.description}</p>
                //         <p>${ product.price}</p>
                //     </div>
                // ` );
            } );
        }
    } catch( err ){
        console.log(err);
    }
}
export default displayFeaturedProducts;