const renderProductList = product => {
    return `
        <div id="${ product.id }" class="col-lg-12">
            <div class="product-content d-flex align-items-center gap-5">
                <div class="img-container col-lg-4 bg-light p-4 rounded-16 overflow-hidden">
                    <div class="variant-images splide">
                        <div class="splide__track">
                            <div class="splide__list">
                                ${ product.variants?.map( variant => {
                                    return variant.images?.[ 0 ] ? `
                                        <div class="splide__slide mb-0">
                                            <a href="./product.html?id=${ product.id }&amp;variantId=${ variant.id }" class="d-block">
                                                <img src="${ variant.images[ 0 ] }" class="d-block img-fluid mx-auto" />
                                            </a>
                                        </div>
                                    ` : '';
                                    } ).join( '' )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info flex-fill">
                    <h6 class="mb-2">
                        <a href="./product.html?id=${ product.id }&amp;variantId=${ product.variants[ 0 ].id }" class="product-title">${ product.name }</a>
                    </h6>
                    <p class="fs-sm fw-semibold text-primary mb-3">${ product.category }</p>
                    <p class="fs-sm mb-2">${ product.shortDescription }</p>
                    <p class="fs-sm fw-medium text-gray-600 d-flex align-items-center gap-2 mb-2">
                        <svg width="16" height="16" class="d-block text-warning">
                            <use href="./src/assets/images/sprite.svg#starHalf"></use>
                        </svg>
                        <span>${ product.rating } Rating</span>
                    </p>
                    <p class="price d-flex gap-1 fw-semibold">
                        <span class="d-block">₹</span>
                        <span class="d-block text-gray-600 text-decoration-line-through">${ product.price.previous }.00</span>
                        <span class="d-block fw-bold text-primary">${ product.price.current }.00</span>
                    </p>
                    <div class="action d-flex gap-3 mt-4">
                        <button class="add-to-favorite btn btn-sm text-primary p-2 d-flex align-items-center justify-content-center flex-shrink-0 border-primary rounded-circle" data-product-id="${ product.id }" data-variant-id="${ product.variants[ 0 ].id }">
                            <svg width="18" height="18" class="d-block flex-shrink-0">
                                <use href="./src/assets/images/sprite.svg#heart" />
                            </svg>
                        </button>
                        <button class="add-to-cart btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center gap-2" data-product-id="${ product.id }" data-variant-id="${ product.variants[ 0 ].id }">
                            <svg width="18" height="18" class="d-block flex-shrink-0">
                                <use href="./src/assets/images/sprite.svg#cart" />
                            </svg>
                            <span class="d-block">Add To Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
export default renderProductList;