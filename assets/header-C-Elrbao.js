import{o as c,a as r,h as d,d as g,k as p,l as h}from"./firebase-config-t6koYE1i.js";const m=()=>new Promise(s=>{c(r,async e=>{s(e)})}),n=document.getElementById("app"),o=document.getElementById("currentUser"),i=document.getElementById("mainHeader"),f=i.clientHeight;n&&(n.style.paddingTop=`${f}px`);i&&i.classList.add("position-fixed","top-0","end-0","start-0","z-3");const u=async()=>{const s=await m();if(s)try{const e=d(g,"users",s.uid),t=await p(e);if(t.exists()){const l=t.data();o.innerHTML=`
                    <a href="javascript: void(0);" id="myAccount" class="nav-link dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg width="24" height="24" class="d-block flex-shrink-0">
                            <use href="./src/assets/images/sprite.svg#user" />
                        </svg>
                        <span class="d-block">Hi, ${l.firstName}</span>
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
                `,v()}else console.log("User Document Not Found!"),a()}catch(e){console.log(e),a()}else a()},a=()=>{o.innerHTML=`
        <a href="./login.html" id="myAccount" class="nav-link d-flex align-items-center gap-2">
            <svg width="24" height="24" class="d-block flex-shrink-0">
                <use href="./src/assets/images/sprite.svg#login" />
            </svg>
            <span class="d-block">Login</span>
        </a>
    `},v=()=>{const s=document.getElementById("logOut");s&&s.addEventListener("click",async e=>{e.preventDefault();try{await h(r),window.location.href="./login.html"}catch(t){console.log(t)}})};u();
