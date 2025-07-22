const renderProductListSkeleton = ( target, count ) => {
    const container = typeof target === 'string' ? document.querySelector( target ) : target;
    if( !container ) return;
    const productListSkeleton = () => `
        <div class="col-lg-12">
            <div class="d-flex align-items-center gap-5">
                <span class="placeholder col-lg-4 d-block p-4 rounded-16" style="height: 18.313rem;"></span>
                <div class="flex-fill">
                    <span class="placeholder d-block w-50 pb-4 mb-2"></span>
                    <span class="placeholder d-block col-2 mb-3" style="height: 0.75rem;"></span>
                    <div class="d-flex flex-column gap-2 mb-3">
                        <span class="placeholder d-block w-100" style="height: 0.75rem;"></span>
                        <span class="placeholder d-block w-25" style="height: 0.75rem;"></span>
                    </div>
                    <span class="placeholder d-block w-25 pb-4 mb-3 mb-4"></span>
                    <div class="d-flex gap-3">
                        <span class="placeholder d-block rounded-circle" style="width: 2.875rem;height: 2.875rem;"></span>
                        <span class="placeholder d-block btn" style="width: 10.625rem;height: 2.875rem;"></span>
                    </div>
                </div>
            </div>
        </div>
    `;
    const wrapper = document.createElement('div');
    wrapper.className = 'row d-flex row-gap-4 px-0 mx-0';
    wrapper.id = 'productListSkeleton';
    for( let i = 0; i < count; i++ ){
        wrapper.insertAdjacentHTML( 'beforeend', productListSkeleton() );
    }
    container.appendChild( wrapper );
}
export default renderProductListSkeleton;