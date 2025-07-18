function togglePasswordVisibility( toggleBtnId, passwordFieldId ){
    const toggleBtn = document.getElementById( toggleBtnId );
    const passwordField = document.getElementById( passwordFieldId );
    const toggleicon = toggleBtn.querySelector( 'svg use' );
    let passwordVisibility = false;
    if ( !toggleBtnId || !passwordFieldId ) return;
    toggleBtn.addEventListener( 'click', e => {
        e.preventDefault();
        passwordVisibility = !passwordVisibility;
        passwordField.type = passwordVisibility ? 'text' : 'password';
        passwordVisibility ? toggleicon.setAttribute( 'href', './src/assets/images/sprite.svg#eyeSlash' ) : toggleicon.setAttribute( 'href', './src/assets/images/sprite.svg#eye' );
    } );
}
export default togglePasswordVisibility;