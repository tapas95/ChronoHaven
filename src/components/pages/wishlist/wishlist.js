import './wishlist.css';
import { db } from "../../../firebase-config";
import { collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { getCurrentUser } from "../../authentication/auth";
import renderwishlistItemsSkeleton from '../../layout/skeleton/wishlistItemsSkeleton';
import addToCart from '../../utils/addToCart';
import updateCartCount from '../../utils/updateCartCount';
import displayAlerts from '../../ui/alert/alert';

const favoriteProductsEl = document.getElementById( 'favoriteProducts' );

const renderWishlist = async () => {
    renderwishlistItemsSkeleton( favoriteProductsEl, 10 );
    const user = await getCurrentUser();
    if( user ){
        try{
            const userFavoriteRef = collection( db, 'users', user.uid, 'favorites' );
            const userFavoriteSnap = await getDocs( userFavoriteRef );
            if( userFavoriteSnap.empty ){
                if( favoriteProductsEl ) favoriteProductsEl.innerHTML = `
                    <tr>
                        <td colspan="6" class="p-0 border-0">
                            ${ displayAlerts( 'You haven’t added any favorites yet.' ) }
                        </td>
                    </tr>
                `;
            } else{
                favoriteProductsEl.innerHTML = '';
                for( const favoriteData of userFavoriteSnap.docs ){
                    const { productId, variantId } = favoriteData.data();
                    const productRef = doc( db, 'collections', 'products', 'items', productId );
                    const productSnap = await getDoc( productRef );
                    if( productSnap.exists() ){
                        const product = productSnap.data();
                        const variant = product.variants.find( variant => variant.id === variantId );
                        favoriteProductsEl.insertAdjacentHTML( 'beforeend', `
                            <tr>
                                <td class="px-3 py-2 bg-light fw-medium border-bottom-0">
                                    <div class="d-flex align-items-center gap-3">
                                        <a href="./product.html?id=${ product.id }&variantId=${ variant.id }" class="img-container d-block flex-shrink-0 bg-white p-3 border rounded-12 oveflow-hidden">
                                            <img src="${ variant.images[ 0 ] }" alt="${ product.name }" class="img-fluid d-block mx-auto" />
                                        </a>
                                        <div class="product-indo">
                                            <p class="fs-md fw-semibold mb-1">
                                                <a href="./product.html?id=${ product.id }&variantId=${ variant.id }">${ product.name }</a>
                                            </p>
                                            <p class="lh-1 text-gray-600">${ product.shortDescription }</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-3 py-2 bg-light border-bottom-0">
                                    <span class="variant d-block rounded-circle" style="background-image: linear-gradient( -45deg, ${ variant.colors.map( color => variant.colors.length > 1 ? `${ color } ${ 100 / variant.colors.length }%` : `${ color }`  ).join( ', ' ) } );"></span>
                                </td>
                                <td class="px-3 py-2 bg-light border-bottom-0">
                                    <p class="fs-md fw-bold text-primary text-nowrap">₹ ${ product.price.current }</p>
                                </td>
                                <td class="px-3 py-2 bg-light border-bottom-0">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="./product.html?id=${ product.id }&variantId=${ variant.id }" class="btn btn-sm btn-info text-white p-2 rounded-4">
                                            <svg width="18" height="18" class="d-block">
                                                <use href="./src/assets/images/sprite.svg#eye"></use>
                                            </svg>
                                        </a>
                                        <button class="addToCart btn btn-sm btn-primary p-2 rounded-4" data-product-id="${ product.id }" data-variant-id="${ variant.id }">
                                            <svg width="18" height="18" class="d-block">
                                                <use href="./src/assets/images/sprite.svg#cart"></use>
                                            </svg>
                                        </button>
                                        <button class="removeFav btn btn-sm btn-danger text-white p-2 rounded-4" data-product-id="${ product.id }" data-variant-id="${ variant.id }">
                                            <svg width="18" height="18" class="d-block">
                                                <use href="./src/assets/images/sprite.svg#delete"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ` );
                    }
                };
                requestAnimationFrame( () => {
                    const removeFavBtns = document.querySelectorAll( '.removeFav' );
                    const addToCartBtns = document.querySelectorAll( '.addToCart' );
                    if( removeFavBtns ){
                        removeFavBtns.forEach( btn => {
                            btn.addEventListener( 'click', async e => {
                                e.preventDefault();
                                const productId = btn.getAttribute( 'data-product-id' );
                                const variantId = btn.getAttribute( 'data-variant-id' );
                                btn.disabled = true;
                                btn.innerHTML = `<div class="d-block spinner-border spinner-border-sm text-light" role="status" style="width: 1.125rem;height: 1.125rem;"><span class="visually-hidden">Loading...</span></div>`;
                                try{
                                    const favProductSnap = doc( db, 'users', user.uid, 'favorites', `${ productId }_${ variantId }` ) ;
                                    await deleteDoc( favProductSnap );
                                    btn.closest( 'tr' ).remove();
                                } catch( err ){
                                    console.log( err );
                                }
                            } );
                        } );
                    }
                    if( addToCartBtns ){
                        addToCartBtns.forEach( btn => {
                            btn.addEventListener( 'click', async e => {
                                e.preventDefault();
                                const productId = btn.getAttribute( 'data-product-id' );
                                const variantId = btn.getAttribute( 'data-variant-id' );
                                btn.disabled = true;
                                btn.innerHTML = `<div class="d-block spinner-border spinner-border-sm text-light" role="status" style="width: 1.125rem;height: 1.125rem;"><span class="visually-hidden">Loading...</span></div>`;
                                try{
                                    const status = await addToCart( productId, variantId, 1 );
                                    if( status === 'ADDED' ){
                                        updateCartCount();
                                        btn.closest( '.wishlist-table' ).insertAdjacentHTML( 'beforebegin', displayAlerts( 'Product Added To Cart', 'success' ) );
                                    } else if( status === 'EXISTS' ){
                                        btn.closest( '.wishlist-table' ).insertAdjacentHTML( 'beforebegin', displayAlerts( 'Product Already Exist' ) );
                                    }
                                } catch( err ){
                                    console.log( err );
                                } finally{
                                    btn.disabled = false;
                                    btn.innerHTML = `
                                        <svg width="18" height="18" class="d-block">
                                            <use href="./src/assets/images/sprite.svg#cart"></use>
                                        </svg>
                                    `;
                                }
                            } );
                        } );
                    }
                } );
            }
        } catch( err ){
            console.log( err );
        }
    }
}
renderWishlist();