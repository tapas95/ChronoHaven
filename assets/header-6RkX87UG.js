import{o as r,h as c,d,k as g,a as l,l as h}from"./firebase-config-t6koYE1i.js";const n=document.getElementById("app"),a=document.getElementById("currentUser"),t=document.getElementById("mainHeader"),p=t.clientHeight;n&&(n.style.paddingTop=`${p}px`);t&&t.classList.add("position-fixed","top-0","end-0","start-0","z-3");r(l,async s=>{if(s)try{const e=c(d,"users",s.uid),i=await g(e);if(i.exists()){const o=i.data();a.innerHTML=`
                    <a href="javascript: void(0);" id="myAccount" class="nav-link dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg width="24" height="24" class="d-block flex-shrink-0">
                            <use href="./src/assets/images/sprite.svg#user" />
                        </svg>
                        <span class="d-block">Hi, ${o.firstName}</span>
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
                `,f()}else console.log("No such document!")}catch(e){console.log(e),a.innerHTML=`
                <a href="./login.html" id="myAccount" class="nav-link d-flex align-items-center gap-2">
                    <svg width="24" height="24" class="d-block flex-shrink-0">
                        <use href="./src/assets/images/sprite.svg#login" />
                    </svg>
                    <span class="d-block">Login</span>
                </a>
            `}else a.innerHTML=`
            <a href="./login.html" id="myAccount" class="nav-link d-flex align-items-center gap-2">
                <svg width="24" height="24" class="d-block flex-shrink-0">
                    <use href="./src/assets/images/sprite.svg#login" />
                </svg>
                <span class="d-block">Login</span>
            </a>
        `});const m=async()=>{try{await h(l),window.location.href="./login.html"}catch(s){console.log(s)}},f=()=>{document.getElementById("logOut").addEventListener("click",e=>{e.preventDefault(),m()})};
