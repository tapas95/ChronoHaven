const variants = product => {
    const varientsEl = document.createElement( 'ul' );
    varientsEl.classList.add( 'varients', 'list-inline', 'd-flex', 'align-items-center', 'gap-3', 'mt-0' );
    product.variants?.forEach( variant => {
        const variantButton = `
            <li class="mb-0">
                <button class="varient-button d-block rounded-circle transition-3" style="--variant-base-color: ${variant.colors[ 0 ]};background-image: linear-gradient( -135deg, ${
                    variant.colors?.map( color => variant.colors.length > 1 ? `${ color } ${ 100 / variant.colors.length }%` : `${ color }` ).join( ', ' )
                } );box-shadow: 0 0 0 0.125rem ${ variant.colors[ 0 ] };" data-varient-id="${ variant.id }"></button>
            </li>
        `;
        varientsEl.insertAdjacentHTML( 'beforeend', variantButton );
    } );
    return varientsEl;
}
export default variants;