const renderCartItems = ( product, variantId, quantity ) => {
    const productVariant = product.variants.find( product => product.id === variantId );
    const productImageUrl = productVariant?.images[ 0 ];
    const productVariantColor = productVariant?.colors[ 0 ];
    return `
        <div class="d-flex gap-4 p-4 border rounded-24">
            <div class="img-container d-flex align-items-center justify-content-center bg-light rounded-16">
                <a href="./product.html?id=${ product.id }&amp;variantId=${ variantId }">
                    <img src="${ productImageUrl }" alt="${ product.name }" class="img-fluid" />
                </a>
            </div>
            <div class="flex-fill">
                <h5 class="fs-md mb-1"><a href="./product.html?id=${ product.id }&amp;variantId=${ variantId }">${ product.name }</a></h5>
                <p class="d-flex align-items-center gap-2 fs-sm mb-3">
                    <span class="d-block text-gray-600 fw-medium">Color: </span>
                    <span class="variant d-block rounded-circle" style="background-color: ${ productVariantColor };"></span>
                </p>
                <h5 class="text-primary mb-0">₹ ${ product.price.current.toFixed( 2 ) }</h5>
            </div>
            <div class="d-flex flex-column gap-3 justify-content-between align-items-end">
                <button class="delete-cart-item btn btn-danger p-2 border-0 rounded-4 shadow-none" data-product-id="${ product.id }" data-variant-id="${ variantId }">
                    <svg width="20" height="20" class="d-block delete-product">
                        <use href="./src/assets/images/sprite.svg#delete"></use>
                    </svg>
                </button>
                <div class="quantity-input position-relative">
                    <button class="remove-quantity bg-transparent p-0 border-0 shadow-none text-primary position-absolute top-50 start-0 translate-middle-y ms-3" data-product-id="${ product.id }" data-variant-id="${ variantId }">
                        <svg width="24" height="24" class="d-block">
                            <use href="./src/assets/images/sprite.svg#minus"></use>
                        </svg>
                    </button>
                    <input type="number" id="${ product.id }_${ variantId }" value="${ quantity }" class="quantity-input form-control px-5 fs-sm text-center shadow-none" />
                    <button class="add-quantity bg-transparent p-0 border-0 shadow-none text-primary position-absolute top-50 end-0 translate-middle-y me-3" data-product-id="${ product.id }" data-variant-id="${ variantId }">
                        <svg width="24" height="24" class="d-block">
                            <use href="./src/assets/images/sprite.svg#plus"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}
export default renderCartItems;