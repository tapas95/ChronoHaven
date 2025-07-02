import './cart.css';
import { getCurrentUser } from '../../authentication/auth';

getCurrentUser().then( user => {
    if( user ){
        console.log( user );
    } else{
        console.log('No User');
    }
} )