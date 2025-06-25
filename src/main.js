
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import './components/pages/home/home.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { getDocs, collection } from 'firebase/firestore';
import { db } from "./firebase-config";
import displayFeaturedProducts from './components/pages/home/featuredProducts';
import displayAlerts from './components/ui/alert/alert';

//Fetch Category Data
const categoryDiv = document.getElementById('categories');
const categoryPlaceholder = document.getElementById( 'categoryPlaceholder' );
const renderCategories = async () => {
  try{
    const categoriesRef = collection( db, 'collections', 'categories', 'items' );
    const categoriesSnapshot = await getDocs( categoriesRef );
    if( categoriesSnapshot.empty ) categoryDiv.insertAdjacentHTML( 'beforeend', displayAlerts( 'No categories found.', 'danger' ) );
    categoriesSnapshot.forEach( doc => {
      const category = doc.data();
      const categoryData = `
        <div class="col" id="${ category.id }">
          <div class="category-content">
            <a href="javascript: void(0);" class="category-icon d-block bg-light px-4 py-5 mb-3 transition-3">
                <img src="${ category.icon }" alt="${ category.name }" class="img-fluid" />
            </a>
            <p class="fs-md fw-semibold"><a href="javascript: void(0);">${ category.name }</a></p>
          </div>
        </div>
      `;
      categoryDiv.insertAdjacentHTML( 'beforeend', categoryData );
    } ); 
  } catch( err ){
    console.log( 'Error fetching categories:', err.code || err.message );
    categoryDiv.insertAdjacentHTML( 'beforeend', displayAlerts( 'Error loading categories.', 'danger' ) );
  } finally{
    if( categoryPlaceholder ) categoryPlaceholder.remove();
  }
}
renderCategories();
//Fetch Category Data

displayFeaturedProducts();