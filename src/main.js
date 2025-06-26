import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@splidejs/splide/css';
import './style.css';
import './components/pages/home/home.css';
import './components/layout/products-card/product-card.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Splide from '@splidejs/splide';
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


//Fetch Featured Products
const featuredProductsContainer = document.getElementById('featuredProducts');
const ProductsCardPlaceholder = document.getElementById('productCardPlaceholder');
const renderFeaturedProducts = async () => {
  try{
    const featuredProductsRef = collection( db, 'collections', 'products', 'items' );
    const featuredProductsSnapshot = await getDocs( featuredProductsRef );
    if( featuredProductsSnapshot.empty ) featuredProductsContainer.insertAdjacentHTML( 'beforeend', displayAlerts( 'No Products Found.', 'danger' ) );
    featuredProductsSnapshot.forEach( products => {
      const product = products.data();
      const varientImages = `
        <div class="variant-images splide mb-3">
          <div class="splide__track">
            <div class="splide__list">
              ${ product.variants?.map( variant => {
                return `
                  <div class="splide__slide mb-0">
                    ${ variant.images?.map( image => {
                      return `
                        <img src="${ image }" class="d-block img-fluid mx-auto" />
                      `;
                    } ) }
                  </div>
                `;
              } ).join('') }
            </div>
          </div>
        </div>
      `;
      const productData = `
        <div id="${ product.id }" class="col-lg-4">
          <div class="product-content h-100 position-relative">
            <div class="img-container bg-light p-4 rounded-16 overflow-hidden mb-3">
                ${ varientImages }
            </div>
            <div class="info mb-3">
              <h6 class="mb-2"><a href="./product.html">${ product.name }</a></h6>
              <p class="fs-sm mb-2">${ product.shortDescription }</p>
              <p class="price d-flex gap-1 fw-semibold"><span class="d-block">₹</span><span class="d-block text-gray-600 text-decoration-line-through">${ product.price.previous }.00</span><span class="d-block fw-bold text-primary">${ product.price.current }.00</span></p>
            </div>
            <div class="action d-flex gap-3 position-absolute end-0 bottom-0 start-0">
              <a href="javascript: void(0);" class="add-to-favorite btn btn-outline-primary btn-sm p-2 d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle">
                <svg width="18" height="18" class="d-block flex-shrink-0">
                    <use href="./src/assets/images/sprite.svg#heart" />
                </svg>
              </a>
              <a href="javascript: void(0);" class="btn btn-outline-primary btn-sm d-flex flex-fill align-items-center justify-content-center gap-2">
                <svg width="18" height="18" class="d-block flex-shrink-0">
                    <use href="./src/assets/images/sprite.svg#cart" />
                </svg>
                <span class="d-block">Add To Cart</span>
              </a>
            </div>
          </div>
        </div>
      `;
      featuredProductsContainer.insertAdjacentHTML( 'beforeend', productData );
    });
     requestAnimationFrame( () => {
      const varientSliders = document.querySelectorAll('.variant-images');
      varientSliders.forEach( ( slider, i ) => {
        const imageSlider = new Splide( slider, {
          perPage: 1,
          arrows: false,
          pagination: true,
          drag: false
        } );
        imageSlider.mount();
        const product = featuredProductsSnapshot.docs[ i ]?.data();
        if( !product || !product.variants ) return;
        // console.log(product);
        const paginationButtons = slider.querySelectorAll('.splide__pagination__page');
        product.variants.forEach( ( variant, variantInder ) => {
          const paginationButton = paginationButtons[ variantInder ];
          if( !paginationButton || !variant.colors ) return;
          const varientColor = variant.colors.map( color => variant.colors.length > 1 ? `${ color } ${ 100 / variant.colors.length }%` : color ).join(', ');
          paginationButton.style.cssText = `
            --variant-base-color: ${ variant.colors[ 0 ] };
            background-image: linear-gradient( -45deg, ${ varientColor } );
            box-shadow: 0 0 0 0.125rem ${ variant.colors[ 0 ] };
          `;
        } );
      } );
    });
  } catch( err ){
    console.log( err );
    featuredProductsContainer.insertAdjacentHTML( 'beforeend', displayAlerts( 'Error Loading Products.', 'danger' ) );
  } finally{
    ProductsCardPlaceholder.remove();
  }
}
renderFeaturedProducts();
//Fetch Featured Products