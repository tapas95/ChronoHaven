import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import displayAlerts from '../ui/alert/alert';
import filterByCategory from './filterByCategories';

const renderAllCategories = async target => {
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
        requestAnimationFrame( () => {
            const categoryBtns = target.querySelectorAll( 'input[type="checkbox"]' );
            categoryBtns.forEach( catBtn => {
                catBtn.addEventListener( 'change', e => {
                    e.preventDefault();
                    const catName = catBtn.getAttribute( 'data-category' );
                    const selectedCategories = Array.from( categoryBtns ).filter( cb => cb.checked ).map( cb => cb.getAttribute( 'data-category' ) );
                    console.log(selectedCategories);
                    if( catBtn.checked ){
                        catBtn.parentElement.classList.add( 'bg-primary', 'text-white' );
                    } else{
                        catBtn.parentElement.classList.remove( 'bg-primary', 'text-white' );
                    }
                    if ( selectedCategories.length === 0 ){
                        filterByCategory( null );
                    } else{
                        filterByCategory( selectedCategories );
                    }
                } );
            } )
        } );
    } catch( err ){
        console.log(err);
    }
}
export default renderAllCategories;