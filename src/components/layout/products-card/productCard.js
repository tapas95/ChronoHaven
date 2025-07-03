import './product-card.css';

const renderProductCard = ( product ) => {
    return `
        <div id="${ product.id }" class="col-lg-4">
            <div class="product-content h-100 position-relative">
                <div class="img-container bg-light p-4 rounded-16 overflow-hidden mb-3">
                    <div class="variant-images splide">
                        <div class="splide__track">
                            <div class="splide__list">
                                ${ product.variants?.map( variant => {
                                    return variant.images?.[0] ? `
                                        <div class="splide__slide mb-0">
                                            <a href="./product.html?id=${product.id}&amp;variantId=${ variant.id }" class="d-block">
                                                <img src="${variant.images[0]}" class="d-block img-fluid mx-auto" />
                                            </a>
                                        </div>
                                    ` : '';
                                    } ).join( '' )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <h6 class="mb-2">
                        <a href="./product.html?id=${ product.id }&amp;variantId=${ product.variants[0].id }" class="product-title">${ product.name }</a>
                    </h6>
                    <p class="fs-sm mb-2">${ product.shortDescription }</p>
                    <p class="price d-flex gap-1 fw-semibold">
                        <span class="d-block">₹</span>
                        <span class="d-block text-gray-600 text-decoration-line-through">${ product.price.previous }.00</span>
                        <span class="d-block fw-bold text-primary">${ product.price.current }.00</span>
                    </p>
                    <div class="action d-flex gap-3 position-absolute end-0 bottom-0 start-0">
                        <a href="javascript: void(0);" class="add-to-favorite btn btn-outline-primary btn-sm p-2 d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle">
                            <svg width="18" height="18" class="d-block flex-shrink-0">
                                <use href="./src/assets/images/sprite.svg#heart" />
                            </svg>
                        </a>
                        <button class="add-to-cart btn btn-outline-primary btn-sm d-flex flex-fill align-items-center justify-content-center gap-2" data-product-id="${ product.id }" data-variant-id="${ product.variants[ 0 ].id }">
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
export default renderProductCard;