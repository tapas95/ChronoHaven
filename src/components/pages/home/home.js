import './home.css';
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import renderCategoryCardSkeleton from "../../layout/skeleton/categoryCardSkeleton";
import displayAlerts from "../../ui/alert/alert";
import renderFeaturedProducts from '../product/featuredProducts';

//Fetch Category Data
const categoryDiv = document.getElementById('categories');
const renderCategories = async () => {
    renderCategoryCardSkeleton( categoryDiv, 5 );
    try{
        const categoriesRef = collection( db, 'collections', 'categories', 'items' );
        const categoriesSnapshot = await getDocs( categoriesRef );
        if( categoriesSnapshot.empty ) categoryDiv.insertAdjacentHTML( 'beforeend', displayAlerts( 'No categories found.', 'danger' ) );
        categoriesSnapshot.forEach( doc => {
            const category = doc.data();
            const categoryData = `
                <div class="col" id="${ category.id }">
                    <div class="category-content">
                        <a href="./shop.html?category=${ category.id }" class="category-icon d-block bg-light px-4 py-5 mb-3 transition-3">
                            <img src="${ category.icon }" alt="${ category.name }" class="img-fluid" />
                        </a>
                        <p class="fs-md fw-semibold"><a href="./shop.html?category=${ category.id }">${ category.name }</a></p>
                    </div>
                </div>
            `;
            if( categoryDiv ) categoryDiv.insertAdjacentHTML( 'beforeend', categoryData );
        } );
    } catch( err ){
        console.log( 'Error fetching categories:', err.code || err.message );
        categoryDiv.insertAdjacentHTML( 'beforeend', displayAlerts( 'Error loading categories.', 'danger' ) );
    } finally{
        const categoryCardSkeleton = document.getElementById( 'categoryCardSkeleton' );
        if( categoryCardSkeleton ) categoryCardSkeleton.remove();
    }
}
renderCategories();
//Fetch Category Data

//
const featuredProductsContainer = document.getElementById('featuredProducts');
if( featuredProductsContainer ) renderFeaturedProducts( featuredProductsContainer );