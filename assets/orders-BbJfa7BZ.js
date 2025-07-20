import{c as p,d as m,q as u,w as b,g}from"./firebase-config-z-tLKvAO.js";import{h,g as y}from"./header-WUg31Ys-.js";import{d as f}from"./alert-DsZaPul3.js";const w=(t,d)=>{if(!(typeof t=="string"?document.querySelector(t):t))return;const n=()=>`
        <tr>
            <td colspan="6" class="p-0">
                <span class="placeholder d-block w-100 rounded-8" style="height: 3.25rem;"></span>
            </td>
        </tr>
    `;for(let r=0;r<d;r++)t.insertAdjacentHTML("beforeend",n())},i=document.getElementById("logOutBtn"),o=document.getElementById("orderedProducts"),v=async()=>{w(o,10);const t=await y();if(t)try{const d=p(m,"orders"),c=u(d,b("userId","==",t.uid)),n=await g(c);n.empty?o&&(o.innerHTML=`
                    <tr>
                        <td colspan="6" class="p-0 border-0">
                            ${f("You haven’t placed any orders yet. Start shopping and treat yourself!")}
                        </td>
                    </tr>
                `):(o.innerHTML="",n.forEach(r=>{const e=r.data(),s=r.id,a=e.createdAt.toDate(),l=a?a.toLocaleDateString("en-IN",{year:"numeric",month:"short",day:"numeric"}):"N/A";o&&o.insertAdjacentHTML("beforeend",`
                            <tr>
                                <td class="px-3 py-2 bg-light fw-medium text-primary border-bottom-0">
                                    <a href="order-details.html?orderId=${s}">#${s}</a>
                                </td>
                                <td class="px-3 py-2 bg-light border-bottom-0">${l}</td>
                                <td class="px-3 py-2 bg-light border-bottom-0">${e.shipping.address}</td>
                                <td class="px-3 py-2 bg-light fw-semibold text-primary border-bottom-0">${e.total}</td>
                                <td class="px-3 py-2 bg-light border-bottom-0">${e.paymentMethod}</td>
                                <td class="px-3 py-2 bg-light border-bottom-0">
                                    <button class="view-order btn btn-sm btn-primary p-2 rounded-4" data-order-id="${s}">
                                        <svg width="18" height="18" class="d-block flex-shrink-0">
                                            <use href="./src/assets/images/sprite.svg#eye"></use>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        `)}),requestAnimationFrame(()=>{document.querySelectorAll(".view-order").forEach(e=>{const s=e.getAttribute("data-order-id");e.addEventListener("click",a=>{a.preventDefault(),window.location.href=`./order-details.html?orderId=${s}`})})}))}catch(d){console.log(d)}};v();i&&i.addEventListener("click",t=>{t.preventDefault(),h()});
