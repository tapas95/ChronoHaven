function togglePasswordVisibility( toggleBtnId, passwordFieldId ){
    const toggleBtn = document.getElementById( toggleBtnId );
    const passwordField = document.getElementById( passwordFieldId );
    const toggleicon = toggleBtn.querySelector( 'i' );
    let passwordVisibility = false;
    if ( !toggleBtnId || !passwordFieldId ) return;
    toggleBtn.addEventListener( 'click', e => {
        e.preventDefault();
        passwordVisibility = !passwordVisibility;
        passwordField.type = passwordVisibility ? 'text' : 'password';
        // toggleBtn.innerHTML = passwordVisibility ? <i class="bi bi-eye-slash-fill"></i> : <i class="bi bi-eye-fill"></i>
        toggleicon.className = passwordVisibility ? 'bi bi-eye-fill' : 'bi bi-eye-slash-fill';
    } );
}
export default togglePasswordVisibility;