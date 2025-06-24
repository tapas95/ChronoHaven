import{c as d,d as i,g as p,o as v,a as g,b as u,e as c,s as f}from"./firebase-config-Bi0d6Smg.js";const b="/ChronoHaven/assets/chronoHaven-BAlQTs5Z.svg";function n(a,l,s){document.getElementById("app").insertAdjacentHTML("afterbegin",`
        <header id="mainHeader">
            <div class="container">
                <nav class="navbar navbar-expand-lg py-4 gap-5">
                    <a class="navbar-brand p-0" href="./">
                        <img src="${b}" class="img-fluid d-block" />
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
                        ${a?`<li class="nav-item dropdown">
                                <a href="javascript: void(0);" class="nav-link fs-lg lh-1 dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-person-circle"></i>
                                    <span class="d-block">Hi, ${l}</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript: void(0);">My Profile</a></li>
                                    <li><a class="dropdown-item" id="logOut" href="javascript: void(0);">Log Out</a></li>
                                </ul>
                            </li> `:`<li class="nav-item">
                                <a href="./login.html" class="nav-link">Login</a>
                            </li>`}
                    </ul>
                </nav>
            </div>
        </header>
    `);const o=document.getElementById("logOut");o&&typeof s=="function"&&o.addEventListener("click",r=>{r.preventDefault(),s()})}const m=async()=>{document.getElementById("app");try{const a=d(i,"collections","products","items"),s=(await p(a)).docs.map(e=>e.data());s.length!==0&&s.forEach(e=>{})}catch(a){console.log(a)}},t=async()=>{try{await f(c),n(!1,null,t),window.location.href="login.html"}catch(a){console.log(a)}};v(c,async a=>{if(a)try{const l=g(i,"users",a.uid),s=await u(l);if(s.exists()){const e=s.data();n(!0,e.firstName,t)}else console.log("No such document!")}catch(l){console.log(l),n(!1,null,t)}else n(!1,null,t)});m();
