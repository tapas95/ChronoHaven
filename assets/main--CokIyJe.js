import{c as f,d as p,q as C,w as E,g as y}from"./firebase-config-t6koYE1i.js";import"./header-C-Elrbao.js";import{d}from"./alert-CO0lNkg5.js";import{r as k,a as A,S as P}from"./productCardSkeleton-C22IvLv4.js";const j=(e,o)=>{const n=typeof e=="string"?document.querySelector(e):e;if(!n)return;const t=()=>`
        <div class="col">
            <div class="category-content">
                <span class="placeholder category-icon d-block mb-3" style="height: 12.25rem;"></span>
                <span class="placeholder col-7" style="height: 1.125rem;"></span>
            </div>
        </div>
    `,r=document.createElement("div");r.className="row d-flex px-0 mx-0",r.id="categoryCardSkeleton";for(let a=0;a<o;a++)r.insertAdjacentHTML("beforeend",t());n.appendChild(r)},w=async e=>{k(e,3);try{const o=f(p,"collections","products","items"),n=C(o,E("isFeatured","==",!0)),t=await y(n);if(t.empty){e.insertAdjacentHTML("beforeend",d("No Products Found.","danger"));return}t.forEach(r=>{const a=r.data();e.insertAdjacentHTML("beforeend",A(a))}),requestAnimationFrame(()=>{document.querySelectorAll(".variant-images").forEach((a,h)=>{var l;new P(a,{perPage:1,arrows:!1,pagination:!0,drag:!1}).mount();const i=(l=t.docs[h])==null?void 0:l.data();if(!i||!i.variants)return;const S=a.querySelectorAll(".splide__pagination__page");i.variants.forEach((c,v)=>{const g=S[v];if(!g||!c.colors)return;const b=c.colors.map(u=>c.colors.length>1?`${u} ${100/c.colors.length}%`:u).join(", ");g.style.cssText=`
                        --variant-base-color: ${c.colors[0]};
                        background-image: linear-gradient( -45deg, ${b} );
                        box-shadow: 0 0 0 0.125rem ${c.colors[0]};
                    `})})})}catch(o){console.log(o),e.insertAdjacentHTML("beforeend",d("Error Loading Products.","danger"))}finally{const o=document.getElementById("productCardSkeleton");o&&o.remove()}},s=document.getElementById("categories"),$=async()=>{j(s,5);try{const e=f(p,"collections","categories","items"),o=await y(e);o.empty&&s.insertAdjacentHTML("beforeend",d("No categories found.","danger")),o.forEach(n=>{const t=n.data(),r=`
                <div class="col" id="${t.id}">
                    <div class="category-content">
                        <a href="javascript: void(0);" class="category-icon d-block bg-light px-4 py-5 mb-3 transition-3">
                            <img src="${t.icon}" alt="${t.name}" class="img-fluid" />
                        </a>
                        <p class="fs-md fw-semibold"><a href="javascript: void(0);">${t.name}</a></p>
                    </div>
                </div>
            `;s&&s.insertAdjacentHTML("beforeend",r)})}catch(e){console.log("Error fetching categories:",e.code||e.message),s.insertAdjacentHTML("beforeend",d("Error loading categories.","danger"))}finally{const e=document.getElementById("categoryCardSkeleton");e&&e.remove()}};$();const m=document.getElementById("featuredProducts");m&&w(m);
