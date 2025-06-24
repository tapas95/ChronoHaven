import{c as g,d as i,g as p,o as u,a as r,b as m,e as b,f as v,s as h}from"./alert-CfYElWL8.js";const y="/ChronoHaven/assets/chronoHaven-BAlQTs5Z.svg";function n(a,e,s){document.getElementById("app").insertAdjacentHTML("afterbegin",`
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
                                    <span class="d-block">Hi, ${e}</span>
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
    `);const o=document.getElementById("logOut");o&&typeof s=="function"&&o.addEventListener("click",f=>{f.preventDefault(),s()})}const k=async()=>{document.getElementById("app");try{const a=g(i,"collections","products","items"),s=(await p(a)).docs.map(t=>t.data());s.length!==0&&s.forEach(t=>{})}catch(a){console.log(a)}},l=async()=>{try{await h(v),n(!1,null,l),window.location.href="login.html"}catch(a){console.log(a)}};u(v,async a=>{if(a)try{const e=m(i,"users",a.uid),s=await b(e);if(s.exists()){const t=s.data();n(!0,t.firstName,l)}else console.log("No such document!")}catch(e){console.log(e),n(!1,null,l)}else n(!1,null,l)});k();const c=document.getElementById("categories"),d=document.getElementById("categoryPlaceholder"),j=async()=>{try{const a=g(i,"collections","categories","items"),e=await p(a);console.log(e),e.empty&&c.insertAdjacentHTML("beforeend",r("No categories found.","danger")),e.forEach(s=>{const t=s.data(),o=`
        <div class="col" id="${t.id}">
          <div class="category-content">
            <a href="javascript: void(0);" class="category-icon d-block bg-light px-4 py-5 mb-3 transition-3">
                <img src="${t.icon}" alt="${t.name}" class="img-fluid" />
            </a>
            <p class="fw-semibold"><a href="javascript: void(0);">${t.name}</a></p>
          </div>
        </div>
      `;c.insertAdjacentHTML("beforeend",o)})}catch(a){console.log("Error fetching categories:",a.code||a.message),c.insertAdjacentHTML("beforeend",r("Error loading categories.","danger"))}finally{d&&d.remove()}};j();
