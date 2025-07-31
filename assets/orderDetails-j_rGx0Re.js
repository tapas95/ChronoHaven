import{d as j,a as q,g as z}from"./alert-CSPBdpzb.js";import"./header-BX1Lkcnd.js";const b=document.getElementById("orderId"),h=document.getElementById("orderDate"),x=document.getElementById("productsContainer"),C=document.getElementById("subTotal"),I=document.getElementById("total"),E=document.getElementById("name"),n=document.getElementById("email"),i=document.getElementById("phone"),B=document.getElementById("shippingAddress"),$=document.getElementById("shippingCountry"),v=document.getElementById("shippingState"),k=document.getElementById("shippingCity"),w=document.getElementById("shippingZip"),S=document.querySelector(".billing-address-container"),A=document.getElementById("billingAddress"),D=document.getElementById("billingCountry"),T=document.getElementById("billingState"),Z=document.getElementById("billingCity"),L=document.getElementById("billingZip"),N=async()=>{var o,a,d,c,r,m,g,p,f,u;const s=new URLSearchParams(window.location.search).get("orderId");document.title=`Order | ${s}`,b&&(b.textContent=s);const U=j(q,"orders",s),l=await z(U);if(l.exists()){const t=l.data();h&&(h.textContent=t.createdAt.toDate().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})),t.products.map(e=>{x&&x.insertAdjacentHTML("beforeend",`
                    <div id="${e.id}" class="product d-flex gap-3">
                        <div class="img-container flex-shrink-0 bg-white p-3 border rounded-12 oveflow-hidden">
                            <img src="${e.productImage}" alt="${e.name}" class="img-fluid d-block mx-auto" />
                        </div>
                        <div class="flex-fill">
                            <h5 class="mb-2">${e.name}</h5>
                            <div class="d-flex align-items-center gap-3 mb-2">
                                <p class="d-flex align-items-center gap-2 fs-sm lh-1 fw-medium mb-0">
                                    <span class="d-block text-gray-600">Quantity: </span>
                                    <span id="sku" class="d-block">${e.quantity}</span>
                                </p>
                                <p class="d-flex align-items-center gap-2 fs-sm lh-1 fw-medium">
                                    <span class="d-block text-gray-600">Variant: </span>
                                    <span class="variant d-block rounded-circle" style="background-image: linear-gradient( -45deg, ${e.variant.map(y=>e.variant.length>1?`${y} ${100/e.variant.length}`:`${y}`).join(", ")} )"></span>
                                </p>
                            </div>
                            <p class="d-flex align-items-center gap-2 fs-sm lh-1 fw-medium">
                                <span class="d-block text-gray-600">SKU: </span>
                                <span id="sku" class="d-block">${e.sku}</span>
                            </p>
                        </div>
                        <p class="fs-md fw-semibold text-primary">₹ ${e.price.toFixed(2)}</p>
                    </div>
                `)}),C&&(C.textContent=t.subTotal),I&&(I.textContent=t.total),E&&(E.textContent=`${t.firstName} ${t.lastName}`),n&&(n.textContent=t.email),n&&n.setAttribute("href",`mailto:${t.email}`),i&&(i.textContent=t.phone),i&&i.setAttribute("href",`tel:${t.phone}`),B&&(B.textContent=(o=t.shipping)==null?void 0:o.address),$&&($.textContent=(a=t.shipping)==null?void 0:a.country),v&&(v.textContent=(d=t.shipping)==null?void 0:d.state),k&&(k.textContent=(c=t.shipping)==null?void 0:c.city),w&&(w.textContent=(r=t.shipping)==null?void 0:r.zip),t.billing!==null&&t.billing!==void 0?(A&&(A.textContent=(m=t.billing)==null?void 0:m.address),D&&(D.textContent=(g=t.billing)==null?void 0:g.country),T&&(T.textContent=(p=t.billing)==null?void 0:p.state),Z&&(Z.textContent=(f=t.billing)==null?void 0:f.city),L&&(L.textContent=(u=t.billing)==null?void 0:u.zip)):S&&S.remove(),console.log(t)}};N();
