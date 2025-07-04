const cartItemsSkeleton = ( target, count ) => {
    const container = typeof target === 'string' ? document.querySelector( target ) : target;
    if( !container ) return;
    container.innerHTML = '';
    const cartItemSkeleton = () => `
        <div class="d-flex gap-4 p-4 border rounded-24">
            <div class="img-container rounded-16 placeholder">
            </div>
            <div class="flex-fill">
                <span class="d-block col-6 placeholder mb-2" style="height: 1rem;"></span>
                <span class="d-block col-2 placeholder mb-3" style="height: 0.75rem;"></span>
                <span class="d-block col-3 placeholder" style="height: 1.5rem;"></span>
            </div>
            <div class="d-flex flex-column gap-3 justify-content-between align-items-end">
                <span class="d-block placeholder rounded-4" style="width: 2.25rem;height: 2.25rem;"></span>
                <span class="d-block placeholder rounded-32" style="width: 10.625rem;height: 3.125rem;"></span>
            </div>
        </div>
    `;
    const wrapper = document.createElement('div');
    wrapper.className = 'row d-flex row-gap-4 px-0 mx-0';
    wrapper.id = 'cartItemsSkeleton';
    for( let i = 0; i < count; i++ ) wrapper.insertAdjacentHTML( 'beforeend', cartItemSkeleton() );
    container.appendChild( wrapper );
}
export default cartItemsSkeleton;