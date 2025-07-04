import{l as $,h as g,d as f,c as k,g as S,k as y}from"./firebase-config-DsHaDBDJ.js";import{g as C,u as x}from"./header-08NMZvF1.js";import{d as I}from"./alert-CO0lNkg5.js";const w=(t,e,a)=>{const s=t.variants.find(i=>i.id===e),n=s==null?void 0:s.images[0],r=s==null?void 0:s.colors[0];return`
        <div id="${t.id}" class="d-flex gap-4 p-4 border rounded-24">
            <div class="img-container d-flex align-items-center justify-content-center bg-light rounded-16">
                <a href="./product.html?id=${t.id}&amp;variantId=${e}">
                    <img src="${n}" alt="${t.name}" class="img-fluid" />
                </a>
            </div>
            <div class="flex-fill">
                <h5 class="fs-md mb-1"><a href="./product.html?id=${t.id}&amp;variantId=${e}">${t.name}</a></h5>
                <p class="d-flex align-items-center gap-2 fs-sm mb-3">
                    <span class="d-block text-gray-600 fw-medium">Color: </span>
                    <span class="variant d-block rounded-circle" style="background-color: ${r};"></span>
                </p>
                <h5 class="text-primary mb-0">₹ ${t.price.current.toFixed(2)}</h5>
            </div>
            <div class="d-flex flex-column gap-3 justify-content-between align-items-end">
                <button class="delete-cart-item btn btn-danger p-2 border-0 rounded-4 shadow-none" data-product-id="${t.id}" data-variant-id="${e}">
                    <svg width="20" height="20" class="d-block delete-product">
                        <use href="./src/assets/images/sprite.svg#delete"></use>
                    </svg>
                </button>
                <div class="quantity-input position-relative">
                    <button class="bg-transparent p-0 border-0 shadow-none text-primary position-absolute top-50 start-0 translate-middle-y ms-3">
                        <svg width="24" height="24" class="d-block">
                            <use href="./src/assets/images/sprite.svg#minus"></use>
                        </svg>
                    </button>
                    <input type="number" id="${t.id}" value="${a}" class="form-control px-5 fs-sm text-center shadow-none" />
                    <button class="bg-transparent p-0 border-0 shadow-none text-primary position-absolute top-50 end-0 translate-middle-y me-3">
                        <svg width="24" height="24" class="d-block">
                            <use href="./src/assets/images/sprite.svg#plus"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `},A=(t,e)=>{const a=typeof t=="string"?document.querySelector(t):t;if(!a)return;a.innerHTML="";const s=()=>`
        <div class="d-flex gap-4 p-4 border rounded-24">
            <div class="img-container rounded-16 placeholder">
            </div>
            <div class="flex-fill">
                <span class="d-block col-6 placeholder mb-2" style="height: 1rem;"></span>
                <span class="d-block col-2 placeholder mb-3" style="height: 0.75rem;"></span>
                <span class="d-block col-3 placeholder" style="height: 1.5rem;"></span>
            </div>
            <div class="d-flex flex-column gap-3 justify-content-between align-items-end">
                <span class="d-block placeholder rounded-4" style="width: 2.25rem;height: 2.25rem;"></span>
                <span class="d-block placeholder rounded-32" style="width: 10.625rem;height: 3.125rem;"></span>
            </div>
        </div>
    `,n=document.createElement("div");n.className="row d-flex row-gap-4 px-0 mx-0",n.id="cartItemsSkeleton";for(let r=0;r<e;r++)n.insertAdjacentHTML("beforeend",s());a.appendChild(n)},o=document.getElementById("cartItems"),m=document.getElementById("subTotal"),u=document.getElementById("total");function p(){const t=document.getElementById("cartItemsSkeleton");t&&t.remove()}const b=async()=>{A(o,3);const t=await C();let e=0;if(t){const a=k(f,"users",t.uid,"cart"),s=await S(a);if(s.empty)o&&o.insertAdjacentHTML("beforeend",I("Your Cart is Empty","danger","bi-exclamation-diamond-fill","mt-0")),p();else for(const n of s.docs){const r=n.data(),{productId:i,variantId:d,quantity:l}=r;try{const c=g(f,"collections","products","items",i),h=await y(c);if(h.exists()){const v=h.data();e+=v.price.current*l,o&&o.insertAdjacentHTML("beforeend",w(v,d,l))}}catch(c){console.log(c)}finally{p()}}requestAnimationFrame(()=>{m&&(m.textContent=`₹ ${e.toFixed(2)}`),u&&(u.textContent=`₹ ${e.toFixed(2)}`)})}else{const a=JSON.parse(localStorage.getItem("guestCart"));if(a.length===0)o&&o.insertAdjacentHTML("beforeend",I("Your Cart is Empty","danger","bi-exclamation-diamond-fill","mt-0")),p();else for(const s of a){const{productId:n,variantId:r,quantity:i}=s;try{const d=g(f,"collections","products","items",n),l=await y(d);if(l.exists()){const c=l.data();e+=c.price.current*i,o&&o.insertAdjacentHTML("beforeend",w(c,r,i))}}catch(d){console.log(d)}finally{p()}}requestAnimationFrame(()=>{m&&(m.textContent=`₹ ${e.toFixed(2)}`),u&&(u.textContent=`₹ ${e.toFixed(2)}`)})}};b();o&&o.addEventListener("click",async t=>{const e=t.target.closest(".delete-cart-item");if(!e)return;const a=e.getAttribute("data-product-id"),s=e.getAttribute("data-variant-id"),n=await C();if(n)e.disabled=!0,await $(g(f,"users",n.uid,"cart",`${a}_${s}`)),b(),x();else{e.disabled=!0;let r=JSON.parse(localStorage.getItem("guestCart"))||[];r=r.filter(i=>!(i.productId===a&&i.variantId===s)),localStorage.setItem("guestCart",JSON.stringify(r)),b(),x()}});
