import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import displayAlerts from '../ui/alert/alert';
import categoryFilterSkeleton from '../layout/skeleton/categoryFilterSkeleton';

const renderAllCategories = async target => {
    categoryFilterSkeleton( target, 5 );
    try{
        const categoriesRef = collection( db, 'collections', 'categories', 'items' );
        const categoriesSnap = await getDocs( categoriesRef );
        if( categoriesSnap.empty ){
            target.insertAdjacentHTML( 'beforeend', displayAlerts( 'No Categories Found.', 'danger' ) );
            return;
        }
        categoriesSnap.forEach( doc => {
            const category = doc.data();
            target.insertAdjacentHTML( 'beforeend', `
                <li class="mb-0">
                    <label for="${ category.id }" class="px-3 py-2 border rounded-32 transition-3 cursor-pointer">
                        <input type="checkbox" id="${ category.id }" name="${ category.id }" data-category="${ category.name }" class="category-checkbox d-none" />
                        <span class="d-block">${ category.name }</span>
                    </label>
                </li>
            ` );
        } );
    } catch( err ){
        console.log(err);
    } finally{
        const skeletonContainer = document.getElementById( 'categorySkeletonContainer' );
        if( skeletonContainer ) skeletonContainer.remove();
    }
}
export default renderAllCategories;