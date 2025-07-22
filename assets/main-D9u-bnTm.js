import{c as w,d as x,q as F,w as I,g as C,a as c}from"./alert-DWjb4CXO.js";import{u as j}from"./header-C8m5pGcf.js";import{r as q,a as D,c as E,b as $,S as B}from"./checkIsFavorite-B8pEgNP4.js";import{a as _}from"./addToCart-BiXPYAeh.js";const N=(t,s)=>{const u=typeof t=="string"?document.querySelector(t):t;if(!u)return;const n=()=>`
        <div class="col">
            <div class="category-content">
                <span class="placeholder category-icon d-block mb-3" style="height: 12.25rem;"></span>
                <span class="placeholder col-7" style="height: 1.125rem;"></span>
            </div>
        </div>
    `,d=document.createElement("div");d.className="row d-flex px-0 mx-0",d.id="categoryCardSkeleton";for(let g=0;g<s;g++)d.insertAdjacentHTML("beforeend",n());u.appendChild(d)},R=async t=>{q(t,3);try{const s=w(x,"collections","products","items"),u=F(s,I("isFeatured","==",!0)),n=await C(u);if(n.empty){t.insertAdjacentHTML("beforeend",c("No Products Found.","danger"));return}n.forEach(d=>{const g=d.data();t.insertAdjacentHTML("beforeend",D(g))}),requestAnimationFrame(()=>{(async()=>{const d=document.querySelectorAll(".variant-images"),g=document.querySelectorAll(".product-title"),L=document.querySelectorAll(".add-to-cart"),y=document.querySelectorAll(".add-to-favorite");if(L.forEach(e=>{e.addEventListener("click",i=>{i.preventDefault(),document.querySelectorAll(".alert").forEach(a=>a.remove()),e.disabled=!0,e.insertAdjacentHTML("beforeend",'<div class="spinner-border spinner-border-sm text-light" role="status"><span class="visually-hidden">Loading...</span></div>');const p=e.getAttribute("data-product-id"),o=e.getAttribute("data-variant-id");p&&o?_(p,o,1).then(a=>{a==="ADDED"?(e.parentElement.insertAdjacentHTML("afterend",c("Product Added To Cart","success","bi-check-circle-fill","fs-xs")),j()):a==="EXISTS"&&e.parentElement.insertAdjacentHTML("afterend",c("Product Already Exist","danger","bi-exclamation-diamond-fill","fs-xs"))}).catch(a=>{console.log("Failed to add to cart",a)}).finally(()=>{e.disabled=!1;const a=e.querySelector(".spinner-border");a&&a.remove()}):console.warn("Product or Variant ID missing")})}),y)for(const e of y){const i=e.getAttribute("data-product-id"),p=e.getAttribute("data-variant-id");try{await E(i,p)&&(e.classList.add("bg-primary","text-white"),e.innerHTML=`
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                        </svg>
                                    `)}catch(o){console.log(o)}e.addEventListener("click",async o=>{o.preventDefault(),document.querySelectorAll(".alert").forEach(r=>r.remove()),e.disabled=!0,e.innerHTML='<div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';const h=e.getAttribute("data-product-id"),a=e.getAttribute("data-variant-id");try{const r=await $({productId:h,variantId:a});r==="ADDED"?(e.parentElement.insertAdjacentHTML("afterend",c("Product Added To Favorites","success")),e.classList.add("bg-primary","text-white"),e.innerHTML=`
                                            <svg width="18" height="18" class="d-block flex-shrink-0">
                                                <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                            </svg>
                                        `):r==="EXISTS"&&(e.parentElement.insertAdjacentHTML("afterend",c("Product Already Added To Favorites","danger")),e.innerHTML=`
                                            <svg width="18" height="18" class="d-block flex-shrink-0">
                                                <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                            </svg>
                                        `)}catch(r){console.log(r)}finally{e.disabled=!1}})}d.forEach((e,i)=>{var a;new B(e,{perPage:1,arrows:!1,pagination:!0,drag:!1}).mount();const o=(a=n.docs[i])==null?void 0:a.data();if(!o||!o.variants)return;const h=e.querySelectorAll(".splide__pagination__page");o.variants.forEach((r,H)=>{const v=h[H];if(!v||!r.colors)return;const M=r.colors.map(l=>r.colors.length>1?`${l} ${100/r.colors.length}%`:l).join(", ");v.style.cssText=`
                            --variant-base-color: ${r.colors[0]};
                            background-image: linear-gradient( -45deg, ${M} );
                            box-shadow: 0 0 0 0.125rem ${r.colors[0]};
                        `,v.setAttribute("data-variant-id",`${r.id}`),v.addEventListener("click",()=>{const l=r.id,b=g[i],S=L[i],f=y[i];if(!b||!S)return;const A=new URL(b.href,window.location.origin);A.searchParams.delete("variantId"),A.searchParams.append("variantId",l),b.href=A.toString(),S.setAttribute("data-variant-id",`${l}`),f.setAttribute("data-variant-id",`${l}`);const P=f.getAttribute("data-product-id");E(P,l).then(T=>{T?(f.classList.add("bg-primary","text-white"),f.innerHTML=`
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                        </svg>
                                    `):(f.classList.remove("bg-primary","text-white"),f.innerHTML=`
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heart"></use>
                                        </svg>
                                    `)}).catch(T=>{console.log(T)})})})})})()})}catch(s){console.log(s),t.insertAdjacentHTML("beforeend",c("Error Loading Products.","danger"))}finally{const s=document.getElementById("productCardSkeleton");s&&s.remove()}},m=document.getElementById("categories"),V=async()=>{N(m,5);try{const t=w(x,"collections","categories","items"),s=await C(t);s.empty&&m.insertAdjacentHTML("beforeend",c("No categories found.","danger")),s.forEach(u=>{const n=u.data(),d=`
                <div class="col" id="${n.id}">
                    <div class="category-content">
                        <a href="javascript: void(0);" class="category-icon d-block bg-light px-4 py-5 mb-3 transition-3">
                            <img src="${n.icon}" alt="${n.name}" class="img-fluid" />
                        </a>
                        <p class="fs-md fw-semibold"><a href="javascript: void(0);">${n.name}</a></p>
                    </div>
                </div>
            `;m&&m.insertAdjacentHTML("beforeend",d)})}catch(t){console.log("Error fetching categories:",t.code||t.message),m.insertAdjacentHTML("beforeend",c("Error loading categories.","danger"))}finally{const t=document.getElementById("categoryCardSkeleton");t&&t.remove()}};V();const k=document.getElementById("featuredProducts");k&&R(k);
