
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { auth, db } from "./firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';
import renderHeader from './components/layout/header';
import displayFeaturedProducts from './components/pages/home/featuredProducts';

const handleLogOut = async () => {
  try{
    await signOut( auth );
    renderHeader( false, null, handleLogOut );
    window.location.href = 'login.html';
  } catch( err ){
    console.log( err );
  }
}

onAuthStateChanged( auth, async user => {
    if( user ){
      try{
        const userInfoRef = doc( db, 'users', user.uid );
        const userInfoSnap = await getDoc( userInfoRef );
        if( userInfoSnap.exists() ) {
          const userInfo = userInfoSnap.data();
          renderHeader( true, userInfo.firstName, handleLogOut );
        } else{
          console.log("No such document!");
        };
      } catch( err ){
        console.log( err );
        renderHeader( false, null, handleLogOut );
      }
    } else{
      renderHeader( false, null, handleLogOut );
    }
} );

displayFeaturedProducts();