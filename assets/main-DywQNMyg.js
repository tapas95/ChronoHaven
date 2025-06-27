import{c as u,d as p,g as y,a as d}from"./alert-CnmhpMoD.js";import{r as b,a as C,S as E}from"./productCardSkeleton-BUBmJzn7.js";const k=(e,o)=>{const a=typeof e=="string"?document.querySelector(e):e;if(!a)return;const r=()=>`
        <div class="col">
            <div class="category-content">
                <span class="placeholder category-icon d-block mb-3" style="height: 12.25rem;"></span>
                <span class="placeholder col-7" style="height: 1.125rem;"></span>
            </div>
        </div>
    `,t=document.createElement("div");t.className="row d-flex px-0 mx-0",t.id="categoryCardSkeleton";for(let s=0;s<o;s++)t.insertAdjacentHTML("beforeend",r());a.appendChild(t)},A=async e=>{b(e,3);try{const o=u(p,"collections","products","items"),a=await y(o);if(a.empty){e.insertAdjacentHTML("beforeend",d("No Products Found.","danger"));return}a.forEach(r=>{const t=r.data();e.insertAdjacentHTML("beforeend",C(t))}),requestAnimationFrame(()=>{document.querySelectorAll(".variant-images").forEach((t,s)=>{var l;new E(t,{perPage:1,arrows:!1,pagination:!0,drag:!1}).mount();const i=(l=a.docs[s])==null?void 0:l.data();if(!i||!i.variants)return;const h=t.querySelectorAll(".splide__pagination__page");i.variants.forEach((n,S)=>{const g=h[S];if(!g||!n.colors)return;const v=n.colors.map(m=>n.colors.length>1?`${m} ${100/n.colors.length}%`:m).join(", ");g.style.cssText=`
                        --variant-base-color: ${n.colors[0]};
                        background-image: linear-gradient( -45deg, ${v} );
                        box-shadow: 0 0 0 0.125rem ${n.colors[0]};
                    `})})})}catch(o){console.log(o),e.insertAdjacentHTML("beforeend",d("Error Loading Products.","danger"))}finally{const o=document.getElementById("productCardSkeleton");o&&o.remove()}},c=document.getElementById("categories"),j=async()=>{k(c,5);try{const e=u(p,"collections","categories","items"),o=await y(e);o.empty&&c.insertAdjacentHTML("beforeend",d("No categories found.","danger")),o.forEach(a=>{const r=a.data(),t=`
                <div class="col" id="${r.id}">
                    <div class="category-content">
                        <a href="javascript: void(0);" class="category-icon d-block bg-light px-4 py-5 mb-3 transition-3">
                            <img src="${r.icon}" alt="${r.name}" class="img-fluid" />
                        </a>
                        <p class="fs-md fw-semibold"><a href="javascript: void(0);">${r.name}</a></p>
                    </div>
                </div>
            `;c&&c.insertAdjacentHTML("beforeend",t)})}catch(e){console.log("Error fetching categories:",e.code||e.message),c.insertAdjacentHTML("beforeend",d("Error loading categories.","danger"))}finally{const e=document.getElementById("categoryCardSkeleton");e&&e.remove()}};j();const f=document.getElementById("featuredProducts");f&&A(f);
