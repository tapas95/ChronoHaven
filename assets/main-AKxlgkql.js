import{c as g,d as n,g as h,a as l,o as m,b as u,e as v,f as p,s as y}from"./alert-ChYDPNDZ.js";const k=async()=>{document.getElementById("app");try{const s=g(n,"collections","products","items"),a=(await h(s)).docs.map(t=>t.data());a.length!==0&&a.forEach(t=>{})}catch(s){console.log(s)}},o=document.getElementById("categories"),r=document.getElementById("categoryPlaceholder"),b=async()=>{try{const s=g(n,"collections","categories","items"),e=await h(s);e.empty&&o.insertAdjacentHTML("beforeend",l("No categories found.","danger")),e.forEach(a=>{const t=a.data(),f=`
        <div class="col" id="${t.id}">
          <div class="category-content">
            <a href="javascript: void(0);" class="category-icon d-block bg-light px-4 py-5 mb-3 transition-3">
                <img src="${t.icon}" alt="${t.name}" class="img-fluid" />
            </a>
            <p class="fs-md fw-semibold"><a href="javascript: void(0);">${t.name}</a></p>
          </div>
        </div>
      `;o.insertAdjacentHTML("beforeend",f)})}catch(s){console.log("Error fetching categories:",s.code||s.message),o.insertAdjacentHTML("beforeend",l("Error loading categories.","danger"))}finally{r&&r.remove()}};b();k();const d=document.getElementById("app"),c=document.getElementById("currentUser"),i=document.getElementById("mainHeader"),w=i.clientHeight;d&&(d.style.paddingTop=`${w}px`);i&&i.classList.add("position-fixed","top-0","end-0","start-0","z-4");m(p,async s=>{if(s)try{const e=u(n,"users",s.uid),a=await v(e);if(a.exists()){const t=a.data();c.innerHTML=`
                    <a href="javascript: void(0);" id="myAccount" class="nav-link fs-lg lh-1 dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg width="24" height="24" class="d-block flex-shrink-0">
                            <use href="./src/assets/images/sprite.svg#user" />
                        </svg>
                        <span class="d-block">Hi, ${t.firstName}</span>
                        <svg width="14" height="14" class="d-block flex-shrink-0">
                            <use href="./src/assets/images/sprite.svg#chevronDown" />
                        </svg>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="javascript: void(0);" class="dropdown-item d-flex align-items-center gap-2">
                                    <svg width="20" height="20" class="d-block flex-shrink-0">
                                        <use href="./src/assets/images/sprite.svg#user" />
                                    </svg>
                                    <span class="d-block">My Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript: void(0);" class="dropdown-item d-flex align-items-center gap-2">
                                    <svg width="20" height="20" class="d-block flex-shrink-0">
                                        <use href="./src/assets/images/sprite.svg#wishlist" />
                                    </svg>
                                    <span class="d-block">My Wishlist</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript: void(0);" class="dropdown-item d-flex align-items-center gap-2">
                                    <svg width="20" height="20" class="d-block flex-shrink-0">
                                        <use href="./src/assets/images/sprite.svg#orders" />
                                    </svg>
                                    <span class="d-block">My Orders</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript: void(0);" id="logOut" class="dropdown-item d-flex align-items-center gap-2">
                                    <svg width="20" height="20" class="d-block flex-shrink-0">
                                        <use href="./src/assets/images/sprite.svg#logOut" />
                                    </svg>
                                    <span class="d-block">Log Out</span>
                                </a>
                            </li>
                        </ul>
                    </a>
                `,E()}else console.log("No such document!")}catch(e){console.log(e),c.innerHTML=`
                <a href="./login.html" id="myAccount" class="nav-link fs-lg lh-1 d-flex align-items-center gap-2">
                    <svg width="24" height="24" class="d-block flex-shrink-0">
                        <use href="./src/assets/images/sprite.svg#login" />
                    </svg>
                    <span class="d-block">Login</span>
                </a>
            `}else c.innerHTML=`
            <a href="./login.html" id="myAccount" class="nav-link fs-lg lh-1 d-flex align-items-center gap-2">
                <svg width="24" height="24" class="d-block flex-shrink-0">
                    <use href="./src/assets/images/sprite.svg#login" />
                </svg>
                <span class="d-block">Login</span>
            </a>
        `});const x=async()=>{try{await y(p),window.location.href="./login.html"}catch(s){console.log(s)}},E=()=>{document.getElementById("logOut").addEventListener("click",e=>{e.preventDefault(),x()})};
