import{c as h,d as p,g as v,a as g,b as m,e as f,m as b}from"./alert-DMWuZ5g4.js";import{g as y,u as w}from"./header-_iNkTwr9.js";import"./sidebar-DJcGTkuu.js";import{a as $}from"./addToCart-DqmwY0nF.js";const x=(a,o)=>{if(!(typeof a=="string"?document.querySelector(a):a))return;const d=()=>`
        <tr>
            <td colspan="4" class="p-0">
                <span class="placeholder d-block w-100 rounded-8" style="height: 6.625rem;"></span>
            </td>
        </tr>
    `;for(let r=0;r<o;r++)a.insertAdjacentHTML("beforeend",d())},c=document.getElementById("favoriteProducts"),k=async()=>{x(c,10);const a=await y();if(a)try{const o=h(p,"users",a.uid,"favorites"),u=await v(o);if(u.empty)c&&(c.innerHTML=`
                    <tr>
                        <td colspan="6" class="p-0 border-0">
                            ${g("You haven’t added any favorites yet.")}
                        </td>
                    </tr>
                `);else{c.innerHTML="";for(const d of u.docs){const{productId:r,variantId:t}=d.data(),n=m(p,"collections","products","items",r),i=await f(n);if(i.exists()){const s=i.data(),e=s.variants.find(l=>l.id===t);c.insertAdjacentHTML("beforeend",`
                            <tr>
                                <td class="px-3 py-2 bg-light fw-medium border-bottom-0">
                                    <div class="d-flex align-items-center gap-3">
                                        <a href="./product.html?id=${s.id}&variantId=${e.id}" class="img-container d-block flex-shrink-0 bg-white p-3 border rounded-12 oveflow-hidden">
                                            <img src="${e.images[0]}" alt="${s.name}" class="img-fluid d-block mx-auto" />
                                        </a>
                                        <div class="product-indo">
                                            <p class="fs-md fw-semibold mb-1">
                                                <a href="./product.html?id=${s.id}&variantId=${e.id}">${s.name}</a>
                                            </p>
                                            <p class="lh-1 text-gray-600">${s.shortDescription}</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-3 py-2 bg-light border-bottom-0">
                                    <span class="variant d-block rounded-circle" style="background-image: linear-gradient( -45deg, ${e.colors.map(l=>e.colors.length>1?`${l} ${100/e.colors.length}%`:`${l}`).join(", ")} );"></span>
                                </td>
                                <td class="px-3 py-2 bg-light border-bottom-0">
                                    <p class="fs-md fw-bold text-primary text-nowrap">₹ ${s.price.current}</p>
                                </td>
                                <td class="px-3 py-2 bg-light border-bottom-0">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="./product.html?id=${s.id}&variantId=${e.id}" class="btn btn-sm btn-info text-white p-2 rounded-4">
                                            <svg width="18" height="18" class="d-block">
                                                <use href="./src/assets/images/sprite.svg#eye"></use>
                                            </svg>
                                        </a>
                                        <button class="addToCart btn btn-sm btn-primary p-2 rounded-4" data-product-id="${s.id}" data-variant-id="${e.id}">
                                            <svg width="18" height="18" class="d-block">
                                                <use href="./src/assets/images/sprite.svg#cart"></use>
                                            </svg>
                                        </button>
                                        <button class="removeFav btn btn-sm btn-danger text-white p-2 rounded-4" data-product-id="${s.id}" data-variant-id="${e.id}">
                                            <svg width="18" height="18" class="d-block">
                                                <use href="./src/assets/images/sprite.svg#delete"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        `)}}requestAnimationFrame(()=>{const d=document.querySelectorAll(".removeFav"),r=document.querySelectorAll(".addToCart");d&&d.forEach(t=>{t.addEventListener("click",async n=>{n.preventDefault();const i=t.getAttribute("data-product-id"),s=t.getAttribute("data-variant-id");t.disabled=!0,t.innerHTML='<div class="d-block spinner-border spinner-border-sm text-light" role="status" style="width: 1.125rem;height: 1.125rem;"><span class="visually-hidden">Loading...</span></div>';try{const e=m(p,"users",a.uid,"favorites",`${i}_${s}`);await b(e),t.closest("tr").remove()}catch(e){console.log(e)}})}),r&&r.forEach(t=>{t.addEventListener("click",async n=>{n.preventDefault();const i=t.getAttribute("data-product-id"),s=t.getAttribute("data-variant-id");t.disabled=!0,t.innerHTML='<div class="d-block spinner-border spinner-border-sm text-light" role="status" style="width: 1.125rem;height: 1.125rem;"><span class="visually-hidden">Loading...</span></div>';try{const e=await $(i,s,1);e==="ADDED"?(w(),t.closest(".wishlist-table").insertAdjacentHTML("beforebegin",g("Product Added To Cart","success"))):e==="EXISTS"&&t.closest(".wishlist-table").insertAdjacentHTML("beforebegin",g("Product Already Exist"))}catch(e){console.log(e)}finally{t.disabled=!1,t.innerHTML=`
                                        <svg width="18" height="18" class="d-block">
                                            <use href="./src/assets/images/sprite.svg#cart"></use>
                                        </svg>
                                    `}})})})}}catch(o){console.log(o)}};k();
