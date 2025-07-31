import{c as I,d as H,g as M,a as u,q,w as D}from"./alert-BfWc_co2.js";import{u as B}from"./header-DJ3fnkyg.js";import{r as _,a as V,c as C,b as R,S as N}from"./checkIsFavorite-C333rjYG.js";import{a as U}from"./addToCart-DZrD-kkr.js";const X=e=>{var t;return`
        <div id="${e.id}" class="col-lg-12">
            <div class="product-content d-flex align-items-center gap-5">
                <div class="img-container col-lg-4 bg-light p-4 rounded-16 overflow-hidden">
                    <div class="variant-images splide">
                        <div class="splide__track">
                            <div class="splide__list">
                                ${(t=e.variants)==null?void 0:t.map(r=>{var i;return(i=r.images)!=null&&i[0]?`
                                        <div class="splide__slide mb-0">
                                            <a href="./product.html?id=${e.id}&amp;variantId=${r.id}" class="d-block">
                                                <img src="${r.images[0]}" class="d-block img-fluid mx-auto" />
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
    `},z=(e,t)=>{const r=typeof e=="string"?document.querySelector(e):e;if(!r)return;const i=()=>`
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
    `,a=document.createElement("div");a.className="row d-flex row-gap-4 px-0 mx-0",a.id="productListSkeleton";for(let d=0;d<t;d++)a.insertAdjacentHTML("beforeend",i());r.appendChild(a)},G=(e,t)=>{const r=typeof e=="string"?document.querySelector(e):e;if(!r)return;const i=()=>`
        <span class="placeholder col-5 d-block rounded-32" style="height: 2.5rem;"></span>
    `,a=document.createElement("li");a.className="w-100 d-flex gap-2 flex-wrap mb-0",a.id="categorySkeletonContainer";for(let d=0;d<t;d++)a.insertAdjacentHTML("beforeend",i());r.appendChild(a)},J=async e=>{G(e,5);try{const t=I(H,"collections","categories","items"),r=await M(t);if(r.empty){e.insertAdjacentHTML("beforeend",u("No Categories Found.","danger"));return}r.forEach(i=>{const a=i.data();e.insertAdjacentHTML("beforeend",`
                <li class="mb-0">
                    <label for="${a.id}" class="px-3 py-2 border rounded-32 transition-3 cursor-pointer">
                        <input type="checkbox" id="${a.id}" name="${a.id}" data-category="${a.id}" class="category-checkbox d-none" />
                        <span class="d-block">${a.name}</span>
                    </label>
                </li>
            `)})}catch(t){console.log(t)}finally{const t=document.getElementById("categorySkeletonContainer");t&&t.remove()}},y=[];let x=!0;const l=document.getElementById("productsContainer"),T=document.getElementById("categoriesContainer"),m=document.getElementById("gridView"),h=document.getElementById("listView"),K=new URLSearchParams(window.location.search),b=K.get("category");b&&y.push(b);const L=async()=>{l.innerHTML="",x?_(l,9):z(l,9);try{let e=I(H,"collections","products","items");y.length>0&&(e=q(e,D("category","in",y)));const t=await M(e);if(t.empty){l.insertAdjacentHTML("beforeend",u("No Products Found."));return}t.forEach(r=>{const i=r.data();x?(l.setAttribute("data-layout","grid"),l.insertAdjacentHTML("beforeend",V(i))):(l.setAttribute("data-layout","list"),l.insertAdjacentHTML("beforeend",X(i)))}),requestAnimationFrame(()=>{(async()=>{const r=document.querySelectorAll(".variant-images"),i=document.querySelectorAll(".product-title"),a=document.querySelectorAll(".add-to-cart"),d=document.querySelectorAll(".add-to-favorite");if(a.forEach(s=>{s.addEventListener("click",g=>{g.preventDefault(),document.querySelectorAll(".alert").forEach(o=>o.remove()),s.disabled=!0,s.insertAdjacentHTML("beforeend",'<div class="spinner-border spinner-border-sm text-light" role="status"><span class="visually-hidden">Loading...</span></div>');const v=s.getAttribute("data-product-id"),c=s.getAttribute("data-variant-id");v&&c?U(v,c,1).then(o=>{o==="ADDED"?(s.parentElement.insertAdjacentHTML("afterend",u("Product Added To Cart","success","fs-xs")),B()):o==="EXISTS"&&s.parentElement.insertAdjacentHTML("afterend",u("Product Already Exist","danger","fs-xs"))}).catch(o=>{console.log("Failed to add to cart",o)}).finally(()=>{s.disabled=!1;const o=s.querySelector(".spinner-border");o&&o.remove()}):console.warn("Product or Variant ID missing")})}),d)for(const s of d){const g=s.getAttribute("data-product-id"),v=s.getAttribute("data-variant-id");try{await C(g,v)&&(s.classList.add("bg-primary","text-white"),s.innerHTML=`
                                    <svg width="18" height="18" class="d-block flex-shrink-0">
                                        <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                    </svg>
                                `)}catch(c){console.log(c)}s.addEventListener("click",async c=>{c.preventDefault(),document.querySelectorAll(".alert").forEach(n=>n.remove()),s.disabled=!0,s.innerHTML='<div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';const w=s.getAttribute("data-product-id"),o=s.getAttribute("data-variant-id");try{const n=await R({productId:w,variantId:o});n==="ADDED"?(s.parentElement.insertAdjacentHTML("afterend",u("Product Added To Favorites","success")),s.classList.add("bg-primary","text-white"),s.innerHTML=`
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                        </svg>
                                    `):n==="EXISTS"&&(s.parentElement.insertAdjacentHTML("afterend",u("Product Already Added To Favorites","danger")),s.innerHTML=`
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                        </svg>
                                    `)}catch(n){console.log(n)}finally{s.disabled=!1}})}r.forEach((s,g)=>{var o;new N(s,{perPage:1,arrows:!1,pagination:!0,drag:!1}).mount();const c=(o=t.docs[g])==null?void 0:o.data();if(!c||!c.variants)return;const w=s.querySelectorAll(".splide__pagination__page");c.variants.forEach((n,P)=>{const k=w[P];if(!k||!n.colors)return;const j=n.colors.map(p=>n.colors.length>1?`${p} ${100/n.colors.length}%`:p).join(", ");k.style.cssText=`
                            --variant-base-color: ${n.colors[0]};
                            background-image: linear-gradient( -45deg, ${j} );
                            box-shadow: 0 0 0 0.125rem ${n.colors[0]};
                        `,k.setAttribute("data-variant-id",`${n.id}`),k.addEventListener("click",()=>{const p=n.id,A=i[g],$=a[g],f=d[g];if(!A||!$)return;const S=new URL(A.href,window.location.origin);S.searchParams.delete("variantId"),S.searchParams.append("variantId",p),A.href=S.toString(),$.setAttribute("data-variant-id",`${p}`),f.setAttribute("data-variant-id",`${p}`);const F=f.getAttribute("data-product-id");C(F,p).then(E=>{E?(f.classList.add("bg-primary","text-white"),f.innerHTML=`
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                        </svg>
                                    `):(f.classList.remove("bg-primary","text-white"),f.innerHTML=`
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heart"></use>
                                        </svg>
                                    `)}).catch(E=>{console.log(E)})})})})})()})}catch(e){console.log(e),l.insertAdjacentHTML("beforeend",u("Error Loading Products."))}finally{const e=document.getElementById("productCardSkeleton"),t=document.getElementById("productListSkeleton");e&&e.remove(),t&&t.remove()}};L();T&&J(T).then(()=>{const e=T.querySelectorAll("input.category-checkbox");e.forEach(t=>{t.id===b&&(t.checked=!0,t.parentElement.classList.add("bg-primary","text-white")),t.addEventListener("change",r=>{r.preventDefault();const i=Array.from(e).filter(d=>d.checked).map(d=>d.getAttribute("data-category"));t.checked?t.parentElement.classList.add("bg-primary","text-white"):t.parentElement.classList.remove("bg-primary","text-white"),y.length=0,i.length>0&&y.push(...i);const a=new URL(window.location);b&&!i.includes(b)&&a.searchParams.delete("category"),window.history.replaceState({},"",a),L()})})});m&&m.addEventListener("click",e=>{e.preventDefault(),x=!0,L(),m.classList.remove("bg-light"),m.classList.add("bg-primary","text-white"),h&&(h.classList.remove("bg-primary","text-white"),h.classList.add("bg-light"))});h&&h.addEventListener("click",e=>{e.preventDefault(),x=!1,L(),h.classList.remove("bg-light"),h.classList.add("bg-primary","text-white"),m&&(m.classList.remove("bg-primary","text-white"),m.classList.add("bg-light"))});
