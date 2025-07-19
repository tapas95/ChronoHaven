const renderwishlistItemsSkeleton = ( target, count ) => {
    const container = typeof target === 'string' ? document.querySelector( target ) : target;
    if( !container ) return;
    const wishlistItemsSkeleton = () => `
        <tr>
            <td colspan="4" class="p-0">
                <span class="placeholder d-block w-100 rounded-8" style="height: 6.625rem;"></span>
            </td>
        </tr>
    `;
    for( let i = 0; i < count; i++ ) target.insertAdjacentHTML( 'beforeend', wishlistItemsSkeleton() );
}
export default renderwishlistItemsSkeleton;