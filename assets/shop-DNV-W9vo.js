import{c as M,d as j,g as F,a as u,q as I,w as E}from"./alert-DWjb4CXO.js";import{u as B}from"./header-C8m5pGcf.js";import{r as _,a as V,c as H,b as N,S as R}from"./checkIsFavorite-C5LnJyNJ.js";import{a as X}from"./addToCart-BiXPYAeh.js";const U=e=>{var r;return`
        <div id="${e.id}" class="col-lg-12">
            <div class="product-content d-flex align-items-center gap-5">
                <div class="img-container col-lg-4 bg-light p-4 rounded-16 overflow-hidden">
                    <div class="variant-images splide">
                        <div class="splide__track">
                            <div class="splide__list">
                                ${(r=e.variants)==null?void 0:r.map(s=>{var i;return(i=s.images)!=null&&i[0]?`
                                        <div class="splide__slide mb-0">
                                            <a href="./product.html?id=${e.id}&amp;variantId=${s.id}" class="d-block">
                                                <img src="${s.images[0]}" class="d-block img-fluid mx-auto" />
                                            </a>
                                        </div>
                                    `:""}).join("")}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info flex-fill">
                    <h6 class="mb-2">
                        <a href="./product.html?id=${e.id}&amp;variantId=${e.variants[0].id}" class="product-title">${e.name}</a>
                    </h6>
                    <p class="fs-sm fw-semibold text-primary mb-3">${e.category}</p>
                    <p class="fs-sm mb-2">${e.shortDescription}</p>
                    <p class="fs-sm fw-medium text-gray-600 d-flex align-items-center gap-2 mb-2">
                        <svg width="16" height="16" class="d-block text-warning">
                            <use href="./src/assets/images/sprite.svg#starHalf"></use>
                        </svg>
                        <span>${e.rating} Rating</span>
                    </p>
                    <p class="price d-flex gap-1 fw-semibold">
                        <span class="d-block">₹</span>
                        <span class="d-block text-gray-600 text-decoration-line-through">${e.price.previous}.00</span>
                        <span class="d-block fw-bold text-primary">${e.price.current}.00</span>
                    </p>
                    <div class="action d-flex gap-3 mt-4">
                        <button class="add-to-favorite btn btn-sm text-primary p-2 d-flex align-items-center justify-content-center flex-shrink-0 border-primary rounded-circle" data-product-id="${e.id}" data-variant-id="${e.variants[0].id}">
                            <svg width="18" height="18" class="d-block flex-shrink-0">
                                <use href="./src/assets/images/sprite.svg#heart" />
                            </svg>
                        </button>
                        <button class="add-to-cart btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center gap-2" data-product-id="${e.id}" data-variant-id="${e.variants[0].id}">
                            <svg width="18" height="18" class="d-block flex-shrink-0">
                                <use href="./src/assets/images/sprite.svg#cart" />
                            </svg>
                            <span class="d-block">Add To Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `},z=(e,r)=>{const s=typeof e=="string"?document.querySelector(e):e;if(!s)return;const i=()=>`
        <div class="col-lg-12">
            <div class="d-flex align-items-center gap-5">
                <span class="placeholder col-lg-4 d-block p-4 rounded-16" style="height: 18.313rem;"></span>
                <div class="flex-fill">
                    <span class="placeholder d-block w-50 pb-4 mb-2"></span>
                    <span class="placeholder d-block col-2 mb-3" style="height: 0.75rem;"></span>
                    <div class="d-flex flex-column gap-2 mb-3">
                        <span class="placeholder d-block w-100" style="height: 0.75rem;"></span>
                        <span class="placeholder d-block w-25" style="height: 0.75rem;"></span>
                    </div>
                    <span class="placeholder d-block w-25 pb-4 mb-3 mb-4"></span>
                    <div class="d-flex gap-3">
                        <span class="placeholder d-block rounded-circle" style="width: 2.875rem;height: 2.875rem;"></span>
                        <span class="placeholder d-block btn" style="width: 10.625rem;height: 2.875rem;"></span>
                    </div>
                </div>
            </div>
        </div>
    `,a=document.createElement("div");a.className="row d-flex row-gap-4 px-0 mx-0",a.id="productListSkeleton";for(let o=0;o<r;o++)a.insertAdjacentHTML("beforeend",i());s.appendChild(a)},G=(e,r)=>{const s=typeof e=="string"?document.querySelector(e):e;if(!s)return;const i=()=>`
        <span class="placeholder col-5 d-block rounded-32" style="height: 2.5rem;"></span>
    `,a=document.createElement("li");a.className="w-100 d-flex gap-2 flex-wrap mb-0",a.id="categorySkeletonContainer";for(let o=0;o<r;o++)a.insertAdjacentHTML("beforeend",i());s.appendChild(a)},J=async e=>{G(e,5);try{const r=M(j,"collections","categories","items"),s=await F(r);if(s.empty){e.insertAdjacentHTML("beforeend",u("No Categories Found.","danger"));return}s.forEach(i=>{const a=i.data();e.insertAdjacentHTML("beforeend",`
                <li class="mb-0">
                    <label for="${a.id}" class="px-3 py-2 border rounded-32 transition-3 cursor-pointer">
                        <input type="checkbox" id="${a.id}" name="${a.id}" data-category="${a.name}" class="category-checkbox d-none" />
                        <span class="d-block">${a.name}</span>
                    </label>
                </li>
            `)})}catch(r){console.log(r)}finally{const r=document.getElementById("categorySkeletonContainer");r&&r.remove()}};let x=!0;const l=document.getElementById("productsContainer"),T=document.getElementById("categoriesContainer"),m=document.getElementById("gridView"),h=document.getElementById("listView"),b=async(e=null,r=null)=>{l.innerHTML="",x?_(l,9):z(l,9);try{let s=M(j,"collections","products","items");if(e&&e.length>0&&(s=I(s,E("category","in",e))),r){const[a,o]=r;s=I(s,E("price",">=",a),E("price","<=",o))}const i=await F(s);if(i.empty){l.insertAdjacentHTML("beforeend",u("No Products Found."));return}i.forEach(a=>{const o=a.data();x?(l.setAttribute("data-layout","grid"),l.insertAdjacentHTML("beforeend",V(o))):(l.setAttribute("data-layout","list"),l.insertAdjacentHTML("beforeend",U(o)))}),requestAnimationFrame(()=>{(async()=>{const a=document.querySelectorAll(".variant-images"),o=document.querySelectorAll(".product-title"),$=document.querySelectorAll(".add-to-cart"),w=document.querySelectorAll(".add-to-favorite");if($.forEach(t=>{t.addEventListener("click",p=>{p.preventDefault(),document.querySelectorAll(".alert").forEach(d=>d.remove()),t.disabled=!0,t.insertAdjacentHTML("beforeend",'<div class="spinner-border spinner-border-sm text-light" role="status"><span class="visually-hidden">Loading...</span></div>');const v=t.getAttribute("data-product-id"),c=t.getAttribute("data-variant-id");v&&c?X(v,c,1).then(d=>{d==="ADDED"?(t.parentElement.insertAdjacentHTML("afterend",u("Product Added To Cart","success","fs-xs")),B()):d==="EXISTS"&&t.parentElement.insertAdjacentHTML("afterend",u("Product Already Exist","danger","fs-xs"))}).catch(d=>{console.log("Failed to add to cart",d)}).finally(()=>{t.disabled=!1;const d=t.querySelector(".spinner-border");d&&d.remove()}):console.warn("Product or Variant ID missing")})}),w)for(const t of w){const p=t.getAttribute("data-product-id"),v=t.getAttribute("data-variant-id");try{await H(p,v)&&(t.classList.add("bg-primary","text-white"),t.innerHTML=`
                                    <svg width="18" height="18" class="d-block flex-shrink-0">
                                        <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                    </svg>
                                `)}catch(c){console.log(c)}t.addEventListener("click",async c=>{c.preventDefault(),document.querySelectorAll(".alert").forEach(n=>n.remove()),t.disabled=!0,t.innerHTML='<div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';const y=t.getAttribute("data-product-id"),d=t.getAttribute("data-variant-id");try{const n=await N({productId:y,variantId:d});n==="ADDED"?(t.parentElement.insertAdjacentHTML("afterend",u("Product Added To Favorites","success")),t.classList.add("bg-primary","text-white"),t.innerHTML=`
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                        </svg>
                                    `):n==="EXISTS"&&(t.parentElement.insertAdjacentHTML("afterend",u("Product Already Added To Favorites","danger")),t.innerHTML=`
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                        </svg>
                                    `)}catch(n){console.log(n)}finally{t.disabled=!1}})}a.forEach((t,p)=>{var d;new R(t,{perPage:1,arrows:!1,pagination:!0,drag:!1}).mount();const c=(d=i.docs[p])==null?void 0:d.data();if(!c||!c.variants)return;const y=t.querySelectorAll(".splide__pagination__page");c.variants.forEach((n,q)=>{const k=y[q];if(!k||!n.colors)return;const P=n.colors.map(g=>n.colors.length>1?`${g} ${100/n.colors.length}%`:g).join(", ");k.style.cssText=`
                            --variant-base-color: ${n.colors[0]};
                            background-image: linear-gradient( -45deg, ${P} );
                            box-shadow: 0 0 0 0.125rem ${n.colors[0]};
                        `,k.setAttribute("data-variant-id",`${n.id}`),k.addEventListener("click",()=>{const g=n.id,L=o[p],C=$[p],f=w[p];if(!L||!C)return;const A=new URL(L.href,window.location.origin);A.searchParams.delete("variantId"),A.searchParams.append("variantId",g),L.href=A.toString(),C.setAttribute("data-variant-id",`${g}`),f.setAttribute("data-variant-id",`${g}`);const D=f.getAttribute("data-product-id");H(D,g).then(S=>{S?(f.classList.add("bg-primary","text-white"),f.innerHTML=`
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                        </svg>
                                    `):(f.classList.remove("bg-primary","text-white"),f.innerHTML=`
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heart"></use>
                                        </svg>
                                    `)}).catch(S=>{console.log(S)})})})})})()})}catch(s){console.log(s),l.insertAdjacentHTML("beforeend",u("Error Loading Products."))}finally{const s=document.getElementById("productCardSkeleton"),i=document.getElementById("productListSkeleton");s&&s.remove(),i&&i.remove()}};b();T&&J(T).then(()=>{const e=T.querySelectorAll("input.category-checkbox");e.forEach(r=>{r.addEventListener("change",s=>{s.preventDefault(),r.getAttribute("data-category");const i=Array.from(e).filter(a=>a.checked).map(a=>a.getAttribute("data-category"));r.checked?r.parentElement.classList.add("bg-primary","text-white"):r.parentElement.classList.remove("bg-primary","text-white"),i.length===0?b(null):b(i)})})});m&&m.addEventListener("click",e=>{e.preventDefault(),x=!0,b(),m.classList.remove("bg-light"),m.classList.add("bg-primary","text-white"),h&&(h.classList.remove("bg-primary","text-white"),h.classList.add("bg-light"))});h&&h.addEventListener("click",e=>{e.preventDefault(),x=!1,b(),h.classList.remove("bg-light"),h.classList.add("bg-primary","text-white"),m&&(m.classList.remove("bg-primary","text-white"),m.classList.add("bg-light"))});
