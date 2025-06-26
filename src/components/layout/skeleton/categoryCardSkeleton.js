const renderCategoryCardSkeleton = ( target, count ) => {
    const container = typeof target === 'string' ? document.querySelector( target ) : target;
    if( !container ) return;
    const categoryCardSkeleton = () => `
        <div class="col">
            <div class="category-content">
                <span class="placeholder category-icon d-block mb-3" style="height: 12.25rem;"></span>
                <span class="placeholder col-7" style="height: 1.125rem;"></span>
            </div>
        </div>
    `;
    const wrapper = document.createElement('div');
    wrapper.className = 'row d-flex px-0 mx-0';
    wrapper.id = 'categoryCardSkeleton';
    for( let i = 0; i < count; i++ ){
        wrapper.insertAdjacentHTML( 'beforeend', categoryCardSkeleton() );
    }
    container.appendChild( wrapper );
}
export default renderCategoryCardSkeleton;