import{j as C,g as w,q as D,w as E,k as B,d as h,f as I,l as _}from"./alert-C9LKtI1g.js";import{r as A,S as R}from"./header-CvAn_Pwl.js";const L=async(p,i,c)=>{A(c,3);try{const s=C(w,"collections","products","items"),t=D(s,E("category","==",i)),r=await B(t);if(r.empty){c.insertAdjacentHTML("beforeend",h("No Products Found.","danger"));return}const d=[];r.forEach(u=>{var n;const e=u.data();if(e.id===p)return;d.push(e);const l=`
                <div class="variant-images splide">
                    <div class="splide__track">
                        <div class="splide__list">
                        ${(n=e.variants)==null?void 0:n.map(a=>{var o;return(o=a.images)!=null&&o[0]?`
                            <div class="splide__slide mb-0">
                                <a href="./product.html?id=${e.id}" class="d-block">
                                <img src="${a.images[0]}" class="d-block img-fluid mx-auto" />
                                </a>
                            </div>`:""}).join("")}
                        </div>
                    </div>
                </div>
            `,m=`
                <div id="${e.id}" class="col-lg-4">
                    <div class="product-content h-100 position-relative">
                        <div class="img-container bg-light p-4 rounded-16 overflow-hidden mb-3">
                            ${l}
                        </div>
                        <div class="info mb-3">
                            <h6 class="mb-2">
                                <a href="./product.html?id=${e.id}">${e.name}</a>
                            </h6>
                            <p class="fs-sm mb-2">${e.shortDescription}</p>
                            <p class="price d-flex gap-1 fw-semibold">
                                <span class="d-block">₹</span>
                                <span class="d-block text-gray-600 text-decoration-line-through">${e.price.previous}.00</span>
                                <span class="d-block fw-bold text-primary">${e.price.current}.00</span>
                            </p>
                        </div>
                        <div class="action d-flex gap-3 position-absolute end-0 bottom-0 start-0">
                            <a href="javascript: void(0);" class="add-to-favorite btn btn-outline-primary btn-sm p-2 d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle">
                                <svg width="18" height="18" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#heart" />
                                </svg>
                            </a>
                            <a href="javascript: void(0);" class="btn btn-outline-primary btn-sm d-flex flex-fill align-items-center justify-content-center gap-2">
                                <svg width="18" height="18" class="d-block flex-shrink-0">
                                    <use href="./src/assets/images/sprite.svg#cart" />
                                </svg>
                                <span class="d-block">Add To Cart</span>
                            </a>
                        </div>
                    </div>
                </div>
            `;c.insertAdjacentHTML("beforeend",m)}),console.log(d),requestAnimationFrame(()=>{document.querySelectorAll(".variant-images").forEach((e,l)=>{new R(e,{perPage:1,arrows:!1,pagination:!0,drag:!1}).mount();const n=d[l];if(!n||!n.variants)return;const a=e.querySelectorAll(".splide__pagination__page");n.variants.forEach((o,P)=>{const g=a[P];if(!g||!o.colors)return;const j=o.colors.map(f=>o.colors.length>1?`${f} ${100/o.colors.length}%`:f).join(", ");g.style.cssText=`
                    --variant-base-color: ${o.colors[0]};
                    background-image: linear-gradient( -45deg, ${j} );
                    box-shadow: 0 0 0 0.125rem ${o.colors[0]};
                `})})})}catch(s){console.log(s),c.insertAdjacentHTML("beforeend",h("Error Loading Products.","danger"))}finally{const s=document.getElementById("productCardSkeleton");s&&s.remove()}},v=document.getElementById("productCategory"),b=document.getElementById("productName"),y=document.getElementById("productShortDescription"),k=document.getElementById("productRating"),x=document.getElementById("productDetailedDescription"),$=document.getElementById("stock"),S=document.getElementById("totalPrice"),T=document.getElementById("relatedProducts"),q=async()=>{const i=new URLSearchParams(window.location.search).get("id");try{const c=I(w,"collections","products","items",i),s=await _(c);if(s.exists()){const t=s.data();document.title=`Product | ${t.name}`,v&&(v.textContent=t.category),b&&(b.textContent=t.name),y&&(y.textContent=t.shortDescription),k&&(k.textContent=`${t.rating} Ratings`),x&&x.insertAdjacentHTML("beforeend",`
                <p>${t.detailedDescription}</p>
                <ul class="list-inline">
                    ${Object.keys(t.specifications).map(r=>`
                            <li class="d-flex align-items-center gap-2">
                                <span class="d-block">${r}: </span>
                                <span class="d-block fw-semibold">${t.specifications[r]}</span>
                            </li>`).join("")}
                </ul>
            `),$&&($.textContent=t.inStock),S&&(S.textContent=`₹ ${t.price.current}.00`),L(t.id,t.category,T)}else console.log("No such Product Found!")}catch(c){console.log(c)}};q();
