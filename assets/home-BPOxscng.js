import{c as w,a as x,q as F,w as I,l as C,b as c}from"./alert-CSPBdpzb.js";import{r as q,a as $,c as E,b as j,S as D}from"./checkIsFavorite-CE4AtKA-.js";import{a as B}from"./addToCart-BAXA2hrS.js";import{u as _}from"./header-BX1Lkcnd.js";const N=(t,o)=>{const u=typeof t=="string"?document.querySelector(t):t;if(!u)return;const s=()=>`
        <div class="col">
            <div class="category-content">
                <span class="placeholder category-icon d-block mb-3" style="height: 12.25rem;"></span>
                <span class="placeholder col-7" style="height: 1.125rem;"></span>
            </div>
        </div>
    `,d=document.createElement("div");d.className="row d-flex px-0 mx-0",d.id="categoryCardSkeleton";for(let g=0;g<o;g++)d.insertAdjacentHTML("beforeend",s());u.appendChild(d)},R=async t=>{q(t,3);try{const o=w(x,"collections","products","items"),u=F(o,I("isFeatured","==",!0)),s=await C(u);if(s.empty){t.insertAdjacentHTML("beforeend",c("No Products Found.","danger"));return}s.forEach(d=>{const g=d.data();t.insertAdjacentHTML("beforeend",$(g))}),requestAnimationFrame(()=>{(async()=>{const d=document.querySelectorAll(".variant-images"),g=document.querySelectorAll(".product-title"),L=document.querySelectorAll(".add-to-cart"),y=document.querySelectorAll(".add-to-favorite");if(L.forEach(e=>{e.addEventListener("click",i=>{i.preventDefault(),document.querySelectorAll(".alert").forEach(a=>a.remove()),e.disabled=!0,e.insertAdjacentHTML("beforeend",'<div class="spinner-border spinner-border-sm text-light" role="status"><span class="visually-hidden">Loading...</span></div>');const p=e.getAttribute("data-product-id"),n=e.getAttribute("data-variant-id");p&&n?B(p,n,1).then(a=>{a==="ADDED"?(e.parentElement.insertAdjacentHTML("afterend",c("Product Added To Cart","success","bi-check-circle-fill","fs-xs")),_()):a==="EXISTS"&&e.parentElement.insertAdjacentHTML("afterend",c("Product Already Exist","danger","bi-exclamation-diamond-fill","fs-xs"))}).catch(a=>{console.log("Failed to add to cart",a)}).finally(()=>{e.disabled=!1;const a=e.querySelector(".spinner-border");a&&a.remove()}):console.warn("Product or Variant ID missing")})}),y)for(const e of y){const i=e.getAttribute("data-product-id"),p=e.getAttribute("data-variant-id");try{await E(i,p)&&(e.classList.add("bg-primary","text-white"),e.innerHTML=`
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                        </svg>
                                    `)}catch(n){console.log(n)}e.addEventListener("click",async n=>{n.preventDefault(),document.querySelectorAll(".alert").forEach(r=>r.remove()),e.disabled=!0,e.innerHTML='<div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';const h=e.getAttribute("data-product-id"),a=e.getAttribute("data-variant-id");try{const r=await j({productId:h,variantId:a});r==="ADDED"?(e.parentElement.insertAdjacentHTML("afterend",c("Product Added To Favorites","success")),e.classList.add("bg-primary","text-white"),e.innerHTML=`
                                            <svg width="18" height="18" class="d-block flex-shrink-0">
                                                <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                            </svg>
                                        `):r==="EXISTS"&&(e.parentElement.insertAdjacentHTML("afterend",c("Product Already Added To Favorites","danger")),e.innerHTML=`
                                            <svg width="18" height="18" class="d-block flex-shrink-0">
                                                <use href="./src/assets/images/sprite.svg#heartFill"></use>
                                            </svg>
                                        `)}catch(r){console.log(r)}finally{e.disabled=!1}})}d.forEach((e,i)=>{var a;new D(e,{perPage:1,arrows:!1,pagination:!0,drag:!1}).mount();const n=(a=s.docs[i])==null?void 0:a.data();if(!n||!n.variants)return;const h=e.querySelectorAll(".splide__pagination__page");n.variants.forEach((r,H)=>{const v=h[H];if(!v||!r.colors)return;const M=r.colors.map(l=>r.colors.length>1?`${l} ${100/r.colors.length}%`:l).join(", ");v.style.cssText=`
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
                                    `)}).catch(T=>{console.log(T)})})})})})()})}catch(o){console.log(o),t.insertAdjacentHTML("beforeend",c("Error Loading Products.","danger"))}finally{const o=document.getElementById("productCardSkeleton");o&&o.remove()}},m=document.getElementById("categories"),V=async()=>{N(m,5);try{const t=w(x,"collections","categories","items"),o=await C(t);o.empty&&m.insertAdjacentHTML("beforeend",c("No categories found.","danger")),o.forEach(u=>{const s=u.data(),d=`
                <div class="col" id="${s.id}">
                    <div class="category-content">
                        <a href="./shop.html?category=${s.id}" class="category-icon d-block bg-light px-4 py-5 mb-3 transition-3">
                            <img src="${s.icon}" alt="${s.name}" class="img-fluid" />
                        </a>
                        <p class="fs-md fw-semibold"><a href="./shop.html?category=${s.id}">${s.name}</a></p>
                    </div>
                </div>
            `;m&&m.insertAdjacentHTML("beforeend",d)})}catch(t){console.log("Error fetching categories:",t.code||t.message),m.insertAdjacentHTML("beforeend",c("Error loading categories.","danger"))}finally{const t=document.getElementById("categoryCardSkeleton");t&&t.remove()}};V();const k=document.getElementById("featuredProducts");k&&R(k);
