import{c as j,d as I,q as A,w as D,g as B,a as f,i as _,l as T}from"./alert-CnmhpMoD.js";import{r as q,a as H,S as L}from"./productCardSkeleton-BUBmJzn7.js";const M=async(u,i,n)=>{q(n,3);try{const e=j(I,"collections","products","items"),d=A(e,D("category","==",i)),t=await B(d);if(t.empty){n.insertAdjacentHTML("beforeend",f("No Products Found.","danger"));return}const r=[];t.forEach(c=>{const o=c.data();o.id!==u&&(r.push(o),n.insertAdjacentHTML("beforeend",H(o)))}),r.length===0&&n.insertAdjacentHTML("beforeend",f("No related products found.","danger","bi-exclamation-diamond-fill","mx-2")),requestAnimationFrame(()=>{document.querySelectorAll(".variant-images").forEach((o,l)=>{new L(o,{perPage:1,arrows:!1,pagination:!0,drag:!1}).mount();const a=r[l];if(!a||!a.variants)return;const m=o.querySelectorAll(".splide__pagination__page");a.variants.forEach((s,g)=>{const y=m[g];if(!y||!s.colors)return;const w=s.colors.map(h=>s.colors.length>1?`${h} ${100/s.colors.length}%`:h).join(", ");y.style.cssText=`
                        --variant-base-color: ${s.colors[0]};
                        background-image: linear-gradient( -45deg, ${w} );
                        box-shadow: 0 0 0 0.125rem ${s.colors[0]};
                    `})})})}catch(e){console.log(e),n.insertAdjacentHTML("beforeend",f("Error Loading Products.","danger"))}finally{const e=document.getElementById("productCardSkeleton");e&&e.remove()}},R=u=>{var n;const i=document.createElement("ul");return i.classList.add("varients","list-inline","d-flex","align-items-center","gap-3","mt-0"),(n=u.variants)==null||n.forEach(e=>{var t;const d=`
            <li class="mb-0">
                <button class="varient-button d-block rounded-circle transition-3" style="--variant-base-color: ${e.colors[0]};background-image: linear-gradient( -135deg, ${(t=e.colors)==null?void 0:t.map(r=>e.colors.length>1?`${r} ${100/e.colors.length}%`:`${r}`).join(", ")} );box-shadow: 0 0 0 0.125rem ${e.colors[0]};" data-varient-id="${e.id}"></button>
            </li>
        `;i.insertAdjacentHTML("beforeend",d)}),i},b=document.getElementById("productCategory"),v=document.querySelector("#productImageWrapper .splide__track"),N=document.querySelector(".product-variant-slider"),$=document.getElementById("productName"),E=document.getElementById("productShortDescription"),S=document.getElementById("productRating"),x=document.getElementById("variantsContainer"),P=document.getElementById("productDetailedDescription"),k=document.getElementById("stock"),C=document.getElementById("totalPrice"),F=document.getElementById("relatedProducts"),W=async()=>{var n;const i=new URLSearchParams(window.location.search).get("id");try{const e=_(I,"collections","products","items",i),d=await T(e);if(d.exists()){const t=d.data();let r=t.variants[0].id;document.title=`Product | ${t.name}`,b&&(b.textContent=t.category),$&&($.textContent=t.name),E&&(E.textContent=t.shortDescription),S&&(S.textContent=`${t.rating} Ratings`),x&&x.append(R(t));const c=document.querySelectorAll(".varient-button");t.variants.length>0&&t.variants[0].images.length>0&&(v.innerHTML=(n=t.variants[0].images)==null?void 0:n.map(o=>`
                <div class="splide__list">
                    <img src="${o}" alt="${t.name}" class="d-block img-fluid mx-auto" />
                </div>
            `).join("")),new L(N,{fixedWidth:100,gap:10,rewind:!0,pagination:!0}).mount(),c.length>0&&c[0].classList.add("active"),c==null||c.forEach(o=>{o.addEventListener("click",()=>{var p;c.forEach(a=>a.classList.remove("active")),o.classList.add("active");const l=o.getAttribute("data-varient-id");r!==l&&(r=l,(p=t.variants)==null||p.forEach(a=>{var m;if(a.id===l){const s=(m=a.images)==null?void 0:m.map(g=>`<div class="splide__list"><img src="${g}" alt="${t.name}" class="d-block img-fluid mx-auto" /></div>`).join("");v.innerHTML=s}}))})}),P&&P.insertAdjacentHTML("beforeend",`
                <p>${t.detailedDescription}</p>
                <ul class="list-inline">
                    ${Object.keys(t.specifications).map(o=>`
                            <li class="d-flex align-items-center gap-2">
                                <span class="d-block">${o}: </span>
                                <span class="d-block fw-semibold">${t.specifications[o]}</span>
                            </li>
                        `).join("")}
                </ul>
            `),k&&(k.textContent=t.inStock),C&&(C.textContent=`₹ ${t.price.current}.00`),M(t.id,t.category,F)}else console.log("No such Product Found!")}catch(e){console.log(e)}};W();
