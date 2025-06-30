const renderProductCardSkeleton = ( target, count ) => {
    const container = typeof target === 'string' ? document.querySelector( target ) : target;
    if( !container ) return;
    const productCardSkeleton = () => `
        <div class="col-lg-4">
            <span class="placeholder d-block w-100 rounded-16 mb-3" style="height: 28.438rem;"></span>
            <span class="placeholder d-block w-50 pb-4 mb-3"></span>
            <div class="d-flex flex-column gap-2 mb-3">
                <span class="placeholder d-block w-100" style="height: 0.75rem;"></span>
                <span class="placeholder d-block w-50" style="height: 0.75rem;"></span>
            </div>
            <span class="placeholder d-block w-25 pb-4 mb-3 mb-4"></span>
            <div class="d-flex gap-3">
                <span class="placeholder d-block rounded-circle" style="width: 2.875rem;height: 2.875rem;"></span>
                <span class="placeholder d-block btn flex-fill" style="height: 2.875rem;"></span>
            </div>
        </div>
    `;
    const wrapper = document.createElement('div');
    wrapper.className = 'row d-flex row-gap-4 px-0 mx-0';
    wrapper.id = 'productCardSkeleton';
    for( let i = 0; i < count; i++ ){
        wrapper.insertAdjacentHTML( 'beforeend', productCardSkeleton() );
    }
    container.appendChild( wrapper );
}
export default renderProductCardSkeleton;