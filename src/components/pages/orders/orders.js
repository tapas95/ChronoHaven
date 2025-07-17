import handleLogout from "../../utils/handleLogout";

const logOutBtn = document.getElementById( 'logOutBtn' );

if( logOutBtn ){
    logOutBtn.addEventListener( 'click', e => {
        e.preventDefault();
        handleLogout();
    } );
}