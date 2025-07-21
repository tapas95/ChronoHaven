const renderCartDrawerSkeleton = ( target, count ) => {
    const container = typeof target === 'string' ? document.querySelector( target ) : target;
    if( !container ) return;
    container.innerHTML = '';
    const cartDrawerSkeleton = () => `
        <div class="cart-item d-flex align-items-start gap-3">
            <div class="img-container rounded-16 placeholder">
            </div>
            <div class="d-flex flex-column gap-3 flex-fill align-self-center">
                <span class="d-block col-10 placeholder" style="height: 0.75rem;"></span>
                <span class="d-block col-4 placeholder" style="height: 0.75rem;"></span>
                <span class="d-block col-4 placeholder" style="height: 0.75rem;"></span>
            </div>
            <span class="d-block placeholder rounded-4" style="width: 2.25rem;height: 2.25rem;"></span>
    `;
    const wrapper = document.createElement('div');
    wrapper.id = 'cartDrawerSkeleton';
    for( let i = 0; i < count; i++ ) wrapper.insertAdjacentHTML( 'beforeend', cartDrawerSkeleton() );
    container.appendChild( wrapper );
}
export default renderCartDrawerSkeleton;