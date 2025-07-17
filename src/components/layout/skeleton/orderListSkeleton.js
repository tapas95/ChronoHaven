const renderOrderListSkeleton = ( target, count ) => {
    const container = typeof target === 'string' ? document.querySelector( target ) : target;
    if( !container ) return;
    const orderListSkeleton = () => `
        <tr>
            <td colspan="6" class="p-0">
                <span class="placeholder d-block w-100 rounded-8" style="height: 3.25rem;"></span>
            </td>
        </tr>
    `;
    for( let i = 0; i < count; i++ ) target.insertAdjacentHTML( 'beforeend', orderListSkeleton() );
}
export default renderOrderListSkeleton;