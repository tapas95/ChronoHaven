const quantity = ( input, plus, minus, maxStock = 10 ) => {
    const MIN = maxStock === 0 ? 0 : 1;
    const sanitize = () => {
        let qty = parseInt( input.value ) || 1;
        if( isNaN( qty ) || qty < MIN ) qty = MIN;
        if( qty > maxStock ) qty = maxStock;
        input.value = qty;
        updateButtonStates( qty );
    }
    const updateButtonStates = (qty) => {
        plus.disabled = qty >= maxStock;
        minus.disabled = qty <= MIN;
    };
    input.addEventListener( 'input', () => input.value = input.value.replace( /[^0-9]/g, '' ) );
    input.addEventListener( 'blur', sanitize);
    input.addEventListener( 'change', () => {
        let qty = parseInt( input.value ) || MIN;
        updateButtonStates( qty );
    } );
    plus.addEventListener( 'click', e => {
        e.preventDefault();
        let currentQty = parseInt(input.value) || MIN;
        if ( currentQty < maxStock ) currentQty++;
        input.value = currentQty;
        updateButtonStates( currentQty );
    } );
    minus.addEventListener( 'click', e => {
        e.preventDefault();
        let currentQty = parseInt( input.value ) || MIN;
        if ( currentQty > MIN ) currentQty--;
        input.value = currentQty;
        updateButtonStates( currentQty );
    } );
    sanitize();
}
export default quantity;