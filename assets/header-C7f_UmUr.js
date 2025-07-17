import{p,e as i,c as h,d as l,g as u,r as m,a as f,h as v}from"./firebase-config-BeTxBtPS.js";const d=()=>new Promise(s=>{p(i,async e=>{s(e)})}),w=async()=>{try{const s=await d();if(s){const e=h(l,"users",s.uid,"cart");return(await u(e)).size}else return(JSON.parse(localStorage.getItem("guestCart"))||[]).length}catch(s){console.log(s)}},o=document.querySelector("#mainHeader .navbar-nav #cart .cart-badge"),b=async()=>{try{const s=await w();o&&(o.textContent=s)}catch(s){console.err(s)}},k=async()=>{try{await m(i),window.location.replace("./login.html")}catch(s){console.log(s)}},c=document.getElementById("app"),g=document.getElementById("currentUser"),n=document.getElementById("mainHeader"),y=n.clientHeight;c&&(c.style.paddingTop=`${y}px`);n&&n.classList.add("position-fixed","top-0","end-0","start-0","z-3");const x=async()=>{const s=await d();if(s)try{const e=f(l,"users",s.uid),a=await v(e);if(a.exists()){const t=a.data();g.innerHTML=`
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
                            <a href="javascript: void(0);" class="dropdown-item px-3 py-2 d-flex align-items-center gap-2">
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
                `,C()}else console.log("User Document Not Found!"),r()}catch(e){console.log(e),r()}else r()},r=()=>{g.innerHTML=`
        <a href="./login.html" id="myAccount" class="nav-link d-flex align-items-center gap-2">
            <svg width="24" height="24" class="d-block flex-shrink-0">
                <use href="./src/assets/images/sprite.svg#login" />
            </svg>
            <span class="d-block">Login</span>
        </a>
    `},C=()=>{const s=document.getElementById("logOut");s&&s.addEventListener("click",e=>{e.preventDefault(),k()})};x().then(b);export{d as g,k as h,b as u};
