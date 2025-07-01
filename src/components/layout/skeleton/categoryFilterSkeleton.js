const categoryFilterSkeleton = ( target, count ) => {
    const container = typeof target === 'string' ? document.querySelector( target ) : target;
    if( !container ) return;
    const categorySkeleton = () => `
        <span class="placeholder col-5 d-block rounded-32" style="height: 2.5rem;"></span>
    `;
    const categorySkeletonContainer = document.createElement( 'li' );
    categorySkeletonContainer.className = 'w-100 d-flex gap-2 flex-wrap mb-0';
    categorySkeletonContainer.id = 'categorySkeletonContainer';
    for( let i = 0; i < count; i++ ){
        categorySkeletonContainer.insertAdjacentHTML( 'beforeend', categorySkeleton() );
    }
    container.appendChild( categorySkeletonContainer );
}
export default categoryFilterSkeleton;