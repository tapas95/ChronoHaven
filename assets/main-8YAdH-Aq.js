import{c as g,d as c,g as p,o as u,a as r,b as m,e as h,f as v,s as b}from"./alert-DD8ChQue.js";const y="/ChronoHaven/assets/chronoHaven-BAlQTs5Z.svg";function o(a,t,e){document.getElementById("app").insertAdjacentHTML("afterbegin",`
        <header id="mainHeader">
            <div class="container">
                <nav class="navbar navbar-expand-lg py-4 gap-5">
                    <a class="navbar-brand p-0" href="./">
                        <img src="${y}" class="img-fluid d-block" />
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
                                    <span class="d-block">Hi, ${t}</span>
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
    `);const n=document.getElementById("logOut");n&&typeof e=="function"&&n.addEventListener("click",f=>{f.preventDefault(),e()})}const j=async()=>{document.getElementById("app");try{const a=g(c,"collections","products","items"),e=(await p(a)).docs.map(s=>s.data());e.length!==0&&e.forEach(s=>{})}catch(a){console.log(a)}},l=async()=>{try{await b(v),o(!1,null,l),window.location.href="login.html"}catch(a){console.log(a)}};u(v,async a=>{if(a)try{const t=m(c,"users",a.uid),e=await h(t);if(e.exists()){const s=e.data();o(!0,s.firstName,l)}else console.log("No such document!")}catch(t){console.log(t),o(!1,null,l)}else o(!1,null,l)});j();const i=document.getElementById("categories"),d=document.getElementById("categoryPlaceholder"),k=async()=>{try{const a=g(c,"collections","categories","items"),t=await p(a);t.empty&&i.insertAdjacentHTML("beforeend",r("No categories found.","danger")),t.forEach(e=>{const s=e.data(),n=`
        <div class="col" id="${s.id}">
          <div class="category-content">
            <div class="category-icon bg-light px-4 py-5 mb-3 transition-3">
              <a href="javascript: void(0);">
                <img src="${s.icon}" alt="${s.name}" class="img-fluid" />
              </a>
            </div>
            <p class="fw-semibold"><a href="javascript: void(0);" class="text-decoration-none">${s.name}</a></p>
          </div>
        </div>
      `;i.insertAdjacentHTML("beforeend",n)})}catch(a){console.log("Error fetching categories:",a.code||a.message),i.insertAdjacentHTML("beforeend",r("Error loading categories.","danger"))}finally{d&&d.remove()}};k();
