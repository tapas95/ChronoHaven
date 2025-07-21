import{m as S,b as y,d as p,u as k,c as q,g as A,a as I,e as $}from"./alert-DinGA58b.js";import{g as h,u as C}from"./main-De21zyoe.js";import"./header-Cxy6NX9S.js";const w=(e,t,s)=>{const a=e.variants.find(r=>r.id===t),n=a==null?void 0:a.images[0],i=a==null?void 0:a.colors[0];return`
        <div class="d-flex gap-4 p-4 border rounded-24">
            <div class="img-container d-flex align-items-center justify-content-center bg-light rounded-16">
                <a href="./product.html?id=${e.id}&amp;variantId=${t}">
                    <img src="${n}" alt="${e.name}" class="img-fluid" />
                </a>
            </div>
            <div class="flex-fill">
                <h5 class="fs-md mb-1"><a href="./product.html?id=${e.id}&amp;variantId=${t}">${e.name}</a></h5>
                <p class="d-flex align-items-center gap-2 fs-sm mb-3">
                    <span class="d-block text-gray-600 fw-medium">Color: </span>
                    <span class="variant d-block rounded-circle" style="background-color: ${i};"></span>
                </p>
                <h5 class="text-primary mb-0">₹ ${e.price.current.toFixed(2)}</h5>
            </div>
            <div class="d-flex flex-column gap-3 justify-content-between align-items-end">
                <button class="delete-cart-item btn btn-danger p-2 border-0 rounded-4 shadow-none" data-product-id="${e.id}" data-variant-id="${t}">
                    <svg width="20" height="20" class="d-block delete-product">
                        <use href="./src/assets/images/sprite.svg#delete"></use>
                    </svg>
                </button>
                <div class="quantity-input position-relative">
                    <button class="remove-quantity bg-transparent p-0 border-0 shadow-none text-primary position-absolute top-50 start-0 translate-middle-y ms-3" data-product-id="${e.id}" data-variant-id="${t}">
                        <svg width="24" height="24" class="d-block">
                            <use href="./src/assets/images/sprite.svg#minus"></use>
                        </svg>
                    </button>
                    <input type="number" id="${e.id}_${t}" value="${s}" class="quantity-input form-control px-5 fs-sm text-center shadow-none" />
                    <button class="add-quantity bg-transparent p-0 border-0 shadow-none text-primary position-absolute top-50 end-0 translate-middle-y me-3" data-product-id="${e.id}" data-variant-id="${t}">
                        <svg width="24" height="24" class="d-block">
                            <use href="./src/assets/images/sprite.svg#plus"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `},E=(e,t)=>{const s=typeof e=="string"?document.querySelector(e):e;if(!s)return;s.innerHTML="";const a=()=>`
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
    `,n=document.createElement("div");n.className="row d-flex row-gap-4 px-0 mx-0",n.id="cartItemsSkeleton";for(let i=0;i<t;i++)n.insertAdjacentHTML("beforeend",a());s.appendChild(n)},o=document.getElementById("cartItems"),g=document.getElementById("subTotal"),f=document.getElementById("total");function b(){const e=document.getElementById("cartItemsSkeleton");e&&e.remove()}const v=async()=>{E(o,3);const e=await h();let t=0;if(e){const s=q(p,"users",e.uid,"cart"),a=await A(s);if(a.empty)o&&o.insertAdjacentHTML("beforeend",I("Your Cart is Empty","danger","bi-exclamation-diamond-fill")),b();else for(const n of a.docs){const i=n.data(),{productId:r,variantId:c,quantity:l}=i;try{const d=y(p,"collections","products","items",r),u=await $(d);if(u.exists()){const m=u.data();t+=m.price.current*l,o&&o.insertAdjacentHTML("beforeend",w(m,c,l))}}catch(d){console.log(d)}finally{b()}}requestAnimationFrame(()=>{g&&(g.textContent=`₹ ${t.toFixed(2)}`),f&&(f.textContent=`₹ ${t.toFixed(2)}`)})}else{const s=JSON.parse(localStorage.getItem("guestCart"));if(s.length===0)o&&o.insertAdjacentHTML("beforeend",I("Your Cart is Empty","danger","bi-exclamation-diamond-fill")),b();else for(const a of s){const{productId:n,variantId:i,quantity:r}=a;try{const c=y(p,"collections","products","items",n),l=await $(c);if(l.exists()){const d=l.data();t+=d.price.current*r,o&&o.insertAdjacentHTML("beforeend",w(d,i,r))}}catch(c){console.log(c)}finally{b()}}requestAnimationFrame(()=>{g&&(g.textContent=`₹ ${t.toFixed(2)}`),f&&(f.textContent=`₹ ${t.toFixed(2)}`)})}};v();o&&o.addEventListener("click",async e=>{const t=e.target.closest(".delete-cart-item");if(!t)return;const s=t.getAttribute("data-product-id"),a=t.getAttribute("data-variant-id"),n=await h();if(n)t.disabled=!0,await S(y(p,"users",n.uid,"cart",`${s}_${a}`)),v(),C();else{t.disabled=!0;let i=JSON.parse(localStorage.getItem("guestCart"))||[];i=i.filter(r=>!(r.productId===s&&r.variantId===a)),localStorage.setItem("guestCart",JSON.stringify(i)),v(),C()}});o&&o.addEventListener("click",async e=>{var l,d;const t=e.target.closest(".add-quantity"),s=e.target.closest(".remove-quantity"),a=(l=t||s)==null?void 0:l.getAttribute("data-product-id"),n=(d=t||s)==null?void 0:d.getAttribute("data-variant-id");if(!a||!n)return;const i=document.getElementById(`${a}_${n}`);if(!i)return;let r=parseInt(i.value)||1;t&&(t.disabled=!0),s&&(s.disabled=!0),t&&r<10&&r++,s&&r>1&&r--,i.value=r;const c=await h();if(c)await k(y(p,"users",c.uid,"cart",`${a}_${n}`),{quantity:r});else{let u=JSON.parse(localStorage.getItem("guestCart"))||[];const m=u.findIndex(x=>x.productId===a&&x.variantId===n);m!==-1&&(u[m].quantity=r,localStorage.setItem("guestCart",JSON.stringify(u))),console.log(m)}v()});
