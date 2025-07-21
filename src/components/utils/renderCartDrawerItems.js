const renderCartDrawerItems = ( product, variantId, quantity ) => {
    const productVariant = product.variants.find( variant => variant.id === variantId );
    const productImageUrl = productVariant?.images[ 0 ];
    return `
        <div class="cart-item d-flex align-items-start gap-3">
            <a href="./product.html?id=${ product.id }&variantId=${ variantId }" class="img-container d-block flex-shrink-0 bg-light p-3 rounded-12 oveflow-hidden">
                <img src="${ productImageUrl }" alt="${ product.name }" class="d-block img-fluid mx-auto" />
            </a>
            <div class="d-flex flex-column gap-1 flex-fill">
                <p class="fs-sm lh-1 fw-semibold mb-0">
                    <a href="./product.html?id=${ product.id }&variantId=${ variantId }">${ product.name }</a>
                </p>
                <p class="fs-sm text-gray-600 mb-0">Quantity: <strong class="d-inline-block text-black">${ quantity }</strong></p>
                <p class="fw-semibold text-primary">₹ ${ product.price.current.toFixed( 2 ) }</p>
            </div>
            <button class="delete-cart-item btn btn-danger p-2 border-0 rounded-4 shadow-none" data-product-id="${ product.id }" data-variant-id="${ variantId }">
                <svg width="20" height="20" class="d-block delete-product">
                    <use href="./src/assets/images/sprite.svg#delete"></use>
                </svg>
            </button>
        </div>
    `;
}
export default renderCartDrawerItems;