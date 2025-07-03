import{o as p,a as c,c as h,d as i,g as u,h as m,k as f,l as v}from"./firebase-config-t6koYE1i.js";const l=()=>new Promise(s=>{p(c,async e=>{s(e)})}),w=async()=>{try{const s=await l();if(s){const e=h(i,"users",s.uid,"cart");return(await u(e)).size}else return(JSON.parse(localStorage.getItem("guestCart"))||[]).length}catch(s){console.log(s)}},n=document.querySelector("#mainHeader .navbar-nav #cart .cart-badge"),b=async()=>{try{const s=await w();n&&(n.textContent=s)}catch(s){console.err(s)}},o=document.getElementById("app"),d=document.getElementById("currentUser"),r=document.getElementById("mainHeader"),k=r.clientHeight;o&&(o.style.paddingTop=`${k}px`);r&&r.classList.add("position-fixed","top-0","end-0","start-0","z-3");const y=async()=>{const s=await l();if(s)try{const e=m(i,"users",s.uid),t=await f(e);if(t.exists()){const g=t.data();d.innerHTML=`
                    <a href="javascript: void(0);" id="myAccount" class="nav-link dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg width="24" height="24" class="d-block flex-shrink-0">
                            <use href="./src/assets/images/sprite.svg#user" />
                        </svg>
                        <span class="d-block">Hi, ${g.firstName}</span>
                        <svg width="14" height="14" class="d-block flex-shrink-0">
                            <use href="./src/assets/images/sprite.svg#chevronDown" />
                        </svg>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end fs-sm border-4 border-top border-end-0 border-bottom-0 border-start-0 border-primary m-0">
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
                            <a href="javascript: void(0);" class="dropdown-item px-3 py-2 d-flex align-items-center gap-2">
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
                `,x()}else console.log("User Document Not Found!"),a()}catch(e){console.log(e),a()}else a()},a=()=>{d.innerHTML=`
        <a href="./login.html" id="myAccount" class="nav-link d-flex align-items-center gap-2">
            <svg width="24" height="24" class="d-block flex-shrink-0">
                <use href="./src/assets/images/sprite.svg#login" />
            </svg>
            <span class="d-block">Login</span>
        </a>
    `},x=()=>{const s=document.getElementById("logOut");s&&s.addEventListener("click",async e=>{e.preventDefault();try{await v(c),window.location.href="./login.html"}catch(t){console.log(t)}})};y().then(b);export{l as g,b as u};
