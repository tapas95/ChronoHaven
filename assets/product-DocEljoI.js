import{c as D,d as E,q as x,w as I,g as k,a as m,i as A,l as j}from"./alert-CnmhpMoD.js";import{r as R,a as L,S as q}from"./productCardSkeleton-BUBmJzn7.js";const T=async(d,s,o)=>{R(o,3);try{const e=D(E,"collections","products","items"),t=x(e,I("category","==",s)),c=await k(t);if(c.empty){o.insertAdjacentHTML("beforeend",m("No Products Found.","danger"));return}const i=[];c.forEach(l=>{const n=l.data();n.id!==d&&(i.push(n),o.insertAdjacentHTML("beforeend",L(n)))}),requestAnimationFrame(()=>{document.querySelectorAll(".variant-images").forEach((n,b)=>{new q(n,{perPage:1,arrows:!1,pagination:!0,drag:!1}).mount();const a=i[b];if(!a||!a.variants)return;const $=n.querySelectorAll(".splide__pagination__page");a.variants.forEach((r,w)=>{const u=$[w];if(!u||!r.colors)return;const B=r.colors.map(p=>r.colors.length>1?`${p} ${100/r.colors.length}%`:p).join(", ");u.style.cssText=`
                        --variant-base-color: ${r.colors[0]};
                        background-image: linear-gradient( -45deg, ${B} );
                        box-shadow: 0 0 0 0.125rem ${r.colors[0]};
                    `})})})}catch(e){console.log(e),o.insertAdjacentHTML("beforeend",m("Error Loading Products.","danger"))}finally{const e=document.getElementById("productCardSkeleton");e&&e.remove()}},g=document.getElementById("productCategory"),f=document.getElementById("productName"),y=document.getElementById("productShortDescription"),h=document.getElementById("productRating"),P=document.getElementById("productDetailedDescription"),S=document.getElementById("stock"),C=document.getElementById("totalPrice"),H=document.getElementById("relatedProducts"),M=async()=>{const s=new URLSearchParams(window.location.search).get("id");try{const o=A(E,"collections","products","items",s),e=await j(o);if(e.exists()){const t=e.data();document.title=`Product | ${t.name}`,g&&(g.textContent=t.category),f&&(f.textContent=t.name),y&&(y.textContent=t.shortDescription),h&&(h.textContent=`${t.rating} Ratings`),P&&P.insertAdjacentHTML("beforeend",`
                <p>${t.detailedDescription}</p>
                <ul class="list-inline">
                    ${Object.keys(t.specifications).map(c=>`
                            <li class="d-flex align-items-center gap-2">
                                <span class="d-block">${c}: </span>
                                <span class="d-block fw-semibold">${t.specifications[c]}</span>
                            </li>`).join("")}
                </ul>
            `),S&&(S.textContent=t.inStock),C&&(C.textContent=`₹ ${t.price.current}.00`),T(t.id,t.category,H)}else console.log("No such Product Found!")}catch(o){console.log(o)}};M();
