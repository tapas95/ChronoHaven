
import logo from '../../assets/images/chronoHaven.svg';
function renderHeader( islogedIn, userName, handleLogOut ){
    const app = document.getElementById( 'app' );
    app.insertAdjacentHTML( 'afterbegin', `
        <header id="mainHeader">
            <div class="container">
                <nav class="navbar navbar-expand-lg py-4 gap-5">
                    <a class="navbar-brand p-0" href="./">
                        <img src="${ logo }" class="img-fluid d-block" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav text-uppercase gap-4 ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a href="#" class="nav-link p-0 active" aria-current="page">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript: void(0);" class="nav-link p-0">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a href="./shop.html" class="nav-link p-0">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript: void(0);" class="nav-link p-0">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <ul class="list-inline d-flex gap-4 align-items-center mb-0">
                        <li class="nav-item">
                            <a href="javascript: void(0);" class="nav-link fs-lg lh-1">
                                <i class="bi bi-search d-block"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript: void(0);" class="nav-link fs-lg lh-1">
                                <i class="bi bi-cart3 d-block"></i>
                            </a>
                        </li>
                        ${ islogedIn ?
                            `<li class="nav-item dropdown">
                                <a href="javascript: void(0);" class="nav-link fs-lg lh-1 dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-person-circle"></i>
                                    <span class="d-block">Hi, ${ userName }</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript: void(0);">My Profile</a></li>
                                    <li><a class="dropdown-item" id="logOut" href="javascript: void(0);">Log Out</a></li>
                                </ul>
                            </li> `:
                            `<li class="nav-item">
                                <a href="./login.html" class="nav-link">Login</a>
                            </li>`
                            }
                    </ul>
                </nav>
            </div>
        </header>
    ` );
    const logOutBtn = document.getElementById( 'logOut' );
    if( logOutBtn && typeof handleLogOut === 'function' ){
        logOutBtn.addEventListener( 'click', e => {
            e.preventDefault();
            handleLogOut();
        } )
    }
}
export default renderHeader;