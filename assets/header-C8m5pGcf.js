import{r as E,h as S,c as $,d as g,g as D,a as b,b as u,e as v,m as H,t as A}from"./alert-DWjb4CXO.js";const f=()=>new Promise(e=>{E(S,async t=>{e(t)})}),M=async()=>{try{const e=await f();if(e){const t=$(g,"users",e.uid,"cart");return(await D(t)).size}else return(JSON.parse(localStorage.getItem("guestCart"))||[]).length}catch(e){console.log(e)}},k=document.querySelector("#mainHeader .navbar-nav #cart .cart-badge"),w=async()=>{try{const e=await M();k&&(k.textContent=e)}catch(e){console.err(e)}},x=(e,t,s)=>{const a=e.variants.find(c=>c.id===t),r=a==null?void 0:a.images[0];return`
        <div class="cart-item d-flex align-items-start gap-3">
            <a href="./product.html?id=${e.id}&variantId=${t}" class="img-container d-block flex-shrink-0 bg-light p-3 rounded-12 oveflow-hidden">
                <img src="${r}" alt="${e.name}" class="d-block img-fluid mx-auto" />
            </a>
            <div class="d-flex flex-column gap-1 flex-fill">
                <p class="fs-sm lh-1 fw-semibold mb-0">
                    <a href="./product.html?id=${e.id}&variantId=${t}">${e.name}</a>
                </p>
                <p class="fs-sm text-gray-600 mb-0">Quantity: <strong class="d-inline-block text-black">${s}</strong></p>
                <p class="fw-semibold text-primary">₹ ${e.price.current.toFixed(2)}</p>
            </div>
            <button class="delete-cart-item btn btn-danger p-2 border-0 rounded-4 shadow-none" data-product-id="${e.id}" data-variant-id="${t}">
                <svg width="20" height="20" class="d-block delete-product">
                    <use href="./src/assets/images/sprite.svg#delete"></use>
                </svg>
            </button>
        </div>
    `},O=(e,t)=>{const s=typeof e=="string"?document.querySelector(e):e;if(!s)return;s.innerHTML="";const a=()=>`
        <div class="cart-item d-flex align-items-start gap-3">
            <div class="img-container rounded-16 placeholder">
            </div>
            <div class="d-flex flex-column gap-3 flex-fill align-self-center">
                <span class="d-block col-10 placeholder" style="height: 0.75rem;"></span>
                <span class="d-block col-4 placeholder" style="height: 0.75rem;"></span>
                <span class="d-block col-4 placeholder" style="height: 0.75rem;"></span>
            </div>
            <span class="d-block placeholder rounded-4" style="width: 2.25rem;height: 2.25rem;"></span>
    `,r=document.createElement("div");r.id="cartDrawerSkeleton";for(let c=0;c<t;c++)r.insertAdjacentHTML("beforeend",a());s.appendChild(r)},I=document.getElementById("cart"),n=document.getElementById("cartProducts");function m(){const e=document.getElementById("cartDrawerSkeleton");e&&e.remove()}const j=async()=>{O(n,5);const e=await f();if(e){const t=$(g,"users",e.uid,"cart"),s=await D(t);if(s.empty)n&&n.insertAdjacentHTML("beforeend",b("Your Cart is Empty")),m();else for(const a of s.docs){const r=a.data(),{productId:c,variantId:o,quantity:l}=r;try{const i=u(g,"collections","products","items",c),d=await v(i);if(d.exists()){const p=d.data();n&&n.insertAdjacentHTML("afterbegin",x(p,o,l))}}catch(i){console.log(i)}finally{m()}}}else{const t=JSON.parse(localStorage.getItem("guestCart"))||[];if(t.length===0)n&&n.insertAdjacentHTML("beforeend",b("Your Cart is Empty")),m();else for(const s of t){const{productId:a,variantId:r,quantity:c}=s;try{const o=u(g,"collections","products","items",a),l=await v(o);if(l.exists()){const i=l.data();n&&n.insertAdjacentHTML("beforeend",x(i,r,c))}}catch(o){console.log(o)}finally{m()}}}requestAnimationFrame(()=>{document.querySelectorAll(".delete-cart-item").forEach(s=>{s.addEventListener("click",async a=>{var l,i;a.preventDefault();const r=s.getAttribute("data-product-id"),c=s.getAttribute("data-variant-id");s.disabled=!0;const o=await f();if(o)await H(u(g,"users",o.uid,"cart",`${r}_${c}`)),w(),(l=s.closest(".cart-item"))==null||l.remove();else{let d=JSON.parse(localStorage.getItem("guestCart"))||[];d=d.filter(p=>!(p.productId===r&&p.variantId===c)),localStorage.setItem("guestCart",JSON.stringify(d)),w(),(i=s.closest(".cart-item"))==null||i.remove()}})})})};I&&I.addEventListener("click",e=>{e.preventDefault(),j()});const B=async()=>{try{await A(S),window.location.replace("./login.html")}catch(e){console.log(e)}},C=document.getElementById("app"),L=document.getElementById("currentUser"),y=document.getElementById("mainHeader"),T=y.clientHeight;C&&(C.style.paddingTop=`${T}px`);y&&y.classList.add("position-fixed","top-0","end-0","start-0","z-3");const N=async()=>{const e=await f();if(e)try{const t=u(g,"users",e.uid),s=await v(t);if(s.exists()){const a=s.data();L.innerHTML=`
                    <a href="javascript: void(0);" id="myAccount" class="nav-link p-0 dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ${a.avatar?`<div class="avatar flex-shrink-0 rounded-circle overflow-hidden"><img src="${a.avatar}" alt="${a.firstName} ${a.lastName}" class="w-100 h-100 object-fit-cover object-position-center" /></div>`:'<svg width="24" height="24" class="d-block flex-shrink-0"><use href="./src/assets/images/sprite.svg#user" /></svg>'}
                        <span class="d-block">Hi, ${a.firstName}</span>
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
                `,q()}else console.log("User Document Not Found!"),h()}catch(t){console.log(t),h()}else h()},h=()=>{L.innerHTML=`
        <a href="./login.html" id="myAccount" class="nav-link d-flex align-items-center gap-2">
            <svg width="24" height="24" class="d-block flex-shrink-0">
                <use href="./src/assets/images/sprite.svg#login" />
            </svg>
            <span class="d-block">Login</span>
        </a>
    `},q=()=>{const e=document.getElementById("logOut");e&&e.addEventListener("click",t=>{t.preventDefault(),B()})};N().then(w);export{f as g,B as h,w as u};
