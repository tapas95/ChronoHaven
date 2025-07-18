import addToFavorites from "./addToFavorites";
import displayAlerts from "../ui/alert/alert";

const favoriteBtn = `
    <button id="addToFavorite" class="btn bg-primary text-white btn-sm d-flex align-items-center gap-2">
        <svg width="18" height="18" class="d-block">
            <use href="./src/assets/images/sprite.svg#heartFill"></use>
        </svg>
        <span class="d-block">Favorites</span>
    </button>
`;

const handleAddToFavorite = ( btn, btnContainer, productId, variantId ) => {
    btn.addEventListener( 'click', e => {
        e.preventDefault();
        document.querySelectorAll( '.alert' ).forEach( el => el.remove() );
        btn.disabled = true;
        btn.insertAdjacentHTML( 'beforeend', '<div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">Loading...</span></div>' );
        addToFavorites( {
            productId,
            variantId
        } ).then( status => {
            if( status === 'ADDED' ){
                btnContainer.innerHTML = favoriteBtn;
                const newBtn = document.getElementById('addToFavorite');
                if (newBtn) handleAddToFavorite( newBtn, btnContainer, productId, variantId );
                btnContainer.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Product Added To Favorites', 'success', 'd-inline-flex' ) );
            } else if( status === 'EXISTS' ){
                btnContainer.parentElement.insertAdjacentHTML( 'afterend', displayAlerts( 'Product Already Added To Favorites', 'danger', 'd-inline-flex' ) );
            }
        } ).catch( err => {
            console.log( err );
        } ).finally( () => {
            btn.disabled = false;
            const spinner = btn.querySelector( '.spinner-border' );
            if( spinner ) spinner.remove();
        } );
    } );
}
export default handleAddToFavorite;