import{r as l,h as c,b as d,d as g,e as p}from"./alert-DinGA58b.js";import{u as h,g as m}from"./main-De21zyoe.js";const f=async()=>{try{await l(c),window.location.replace("./login.html")}catch(s){console.log(s)}},o=document.getElementById("app"),n=document.getElementById("currentUser"),r=document.getElementById("mainHeader"),u=r.clientHeight;o&&(o.style.paddingTop=`${u}px`);r&&r.classList.add("position-fixed","top-0","end-0","start-0","z-3");const v=async()=>{const s=await m();if(s)try{const e=d(g,"users",s.uid),i=await p(e);if(i.exists()){const t=i.data();n.innerHTML=`
                    <a href="javascript: void(0);" id="myAccount" class="nav-link p-0 dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ${t.avatar?`<div class="avatar flex-shrink-0 rounded-circle overflow-hidden"><img src="${t.avatar}" alt="${t.firstName} ${t.lastName}" class="w-100 h-100 object-fit-cover object-position-center" /></div>`:'<svg width="24" height="24" class="d-block flex-shrink-0"><use href="./src/assets/images/sprite.svg#user" /></svg>'}
                        <span class="d-block">Hi, ${t.firstName}</span>
                        <svg width="14" height="14" class="d-block flex-shrink-0">
                            <use href="./src/assets/images/sprite.svg#chevronDown" />
                        </svg>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end fs-sm border-4 border-top border-end-0 border-bottom-0 border-start-0 border-primary">
                        <li class="m-0">
                            <a href="javascript: void(0);" class="dropdown-item px-3 py-2 d-flex align-items-center gap-2">
                                <svg width="20" height="20" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#user" />
                                </svg>
                                <span class="d-block">My Profile</span>
                            </a>
                        </li>
                        <li class="m-0">
                            <a href="./wishlist.html" class="dropdown-item px-3 py-2 d-flex align-items-center gap-2">
                                <svg width="20" height="20" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#wishlist" />
                                </svg>
                                <span class="d-block">My Wishlist</span>
                            </a>
                        </li>
                        <li class="m-0">
                            <a href="./orders.html" class="dropdown-item px-3 py-2 d-flex align-items-center gap-2">
                                <svg width="20" height="20" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#orders" />
                                </svg>
                                <span class="d-block">My Orders</span>
                            </a>
                        </li>
                        <li class="m-0">
                            <a href="javascript: void(0);" id="logOut" class="dropdown-item px-3 py-2 d-flex align-items-center gap-2">
                                <svg width="20" height="20" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#logOut" />
                                </svg>
                                <span class="d-block">Log Out</span>
                            </a>
                        </li>
                    </ul>
                `,b()}else console.log("User Document Not Found!"),a()}catch(e){console.log(e),a()}else a()},a=()=>{n.innerHTML=`
        <a href="./login.html" id="myAccount" class="nav-link d-flex align-items-center gap-2">
            <svg width="24" height="24" class="d-block flex-shrink-0">
                <use href="./src/assets/images/sprite.svg#login" />
            </svg>
            <span class="d-block">Login</span>
        </a>
    `},b=()=>{const s=document.getElementById("logOut");s&&s.addEventListener("click",e=>{e.preventDefault(),f()})};v().then(h);export{f as h};
