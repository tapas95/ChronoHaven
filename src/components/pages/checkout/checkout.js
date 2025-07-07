import { getCurrentUser } from "../../authentication/auth";

const askForLogin = document.getElementById( 'askForLogin' );

const renderCheckout = async () => {
    const user = await getCurrentUser();
    if( user ){
        if( askForLogin ) askForLogin.remove();
    } else{

    }
}
renderCheckout();
