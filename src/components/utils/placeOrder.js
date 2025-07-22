import { db } from "../../firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const placeOrder = async ( userId, orderDetails ) => {
    try{
        const orderRef = await addDoc( collection( db, 'orders' ), {
            userId,
            ...orderDetails,
            // orderStatus: 'placed',
            createdAt: serverTimestamp()
        } );
        return orderRef.id;
    } catch( err ){
        console.error("Error placing order: ", err);
        throw err;
    }
}
export default placeOrder;