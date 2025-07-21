import{t as k,h as x,c as S,d as u,g as I,a as h,b as g,e as y,m as D}from"./alert-DinGA58b.js";const p=()=>new Promise(t=>{k(x,async a=>{t(a)})}),$=async()=>{try{const t=await p();if(t){const a=S(u,"users",t.uid,"cart");return(await I(a)).size}else return(JSON.parse(localStorage.getItem("guestCart"))||[]).length}catch(t){console.log(t)}},v=document.querySelector("#mainHeader .navbar-nav #cart .cart-badge"),b=async()=>{try{const t=await $();v&&(v.textContent=t)}catch(t){console.err(t)}},w=(t,a,e)=>{const s=t.variants.find(c=>c.id===a),r=s==null?void 0:s.images[0];return`
        <div class="cart-item d-flex align-items-start gap-3">
            <a href="./product.html?id=${t.id}&variantId=${a}" class="img-container d-block flex-shrink-0 bg-light p-3 rounded-12 oveflow-hidden">
                <img src="${r}" alt="${t.name}" class="d-block img-fluid mx-auto" />
            </a>
            <div class="d-flex flex-column gap-1 flex-fill">
                <p class="fs-sm lh-1 fw-semibold mb-0">
                    <a href="./product.html?id=${t.id}&variantId=${a}">${t.name}</a>
                </p>
                <p class="fs-sm text-gray-600 mb-0">Quantity: <strong class="d-inline-block text-black">${e}</strong></p>
                <p class="fw-semibold text-primary">₹ ${t.price.current.toFixed(2)}</p>
            </div>
            <button class="delete-cart-item btn btn-danger p-2 border-0 rounded-4 shadow-none" data-product-id="${t.id}" data-variant-id="${a}">
                <svg width="20" height="20" class="d-block delete-product">
                    <use href="./src/assets/images/sprite.svg#delete"></use>
                </svg>
            </button>
        </div>
    `},A=(t,a)=>{const e=typeof t=="string"?document.querySelector(t):t;if(!e)return;e.innerHTML="";const s=()=>`
        <div class="cart-item d-flex align-items-start gap-3">
            <div class="img-container rounded-16 placeholder">
            </div>
            <div class="d-flex flex-column gap-3 flex-fill align-self-center">
                <span class="d-block col-10 placeholder" style="height: 0.75rem;"></span>
                <span class="d-block col-4 placeholder" style="height: 0.75rem;"></span>
                <span class="d-block col-4 placeholder" style="height: 0.75rem;"></span>
            </div>
            <span class="d-block placeholder rounded-4" style="width: 2.25rem;height: 2.25rem;"></span>
    `,r=document.createElement("div");r.id="cartDrawerSkeleton";for(let c=0;c<a;c++)r.insertAdjacentHTML("beforeend",s());e.appendChild(r)},C=document.getElementById("cart"),n=document.getElementById("cartProducts");function f(){const t=document.getElementById("cartDrawerSkeleton");t&&t.remove()}const E=async()=>{A(n,5);const t=await p();if(t){const a=S(u,"users",t.uid,"cart"),e=await I(a);if(e.empty)n&&n.insertAdjacentHTML("beforeend",h("Your Cart is Empty")),f();else for(const s of e.docs){const r=s.data(),{productId:c,variantId:o,quantity:i}=r;try{const l=g(u,"collections","products","items",c),d=await y(l);if(d.exists()){const m=d.data();n&&n.insertAdjacentHTML("afterbegin",w(m,o,i))}}catch(l){console.log(l)}finally{f()}}}else{const a=JSON.parse(localStorage.getItem("guestCart"))||[];if(a.length===0)n&&n.insertAdjacentHTML("beforeend",h("Your Cart is Empty")),f();else for(const e of a){const{productId:s,variantId:r,quantity:c}=e;try{const o=g(u,"collections","products","items",s),i=await y(o);if(i.exists()){const l=i.data();n&&n.insertAdjacentHTML("beforeend",w(l,r,c))}}catch(o){console.log(o)}finally{f()}}}requestAnimationFrame(()=>{document.querySelectorAll(".delete-cart-item").forEach(e=>{e.addEventListener("click",async s=>{var i,l;s.preventDefault();const r=e.getAttribute("data-product-id"),c=e.getAttribute("data-variant-id");e.disabled=!0;const o=await p();if(o)await D(g(u,"users",o.uid,"cart",`${r}_${c}`)),b(),(i=e.closest(".cart-item"))==null||i.remove();else{let d=JSON.parse(localStorage.getItem("guestCart"))||[];d=d.filter(m=>!(m.productId===r&&m.variantId===c)),localStorage.setItem("guestCart",JSON.stringify(d)),b(),(l=e.closest(".cart-item"))==null||l.remove()}})})})};C&&C.addEventListener("click",t=>{t.preventDefault(),E()});export{p as g,b as u};
