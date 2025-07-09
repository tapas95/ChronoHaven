(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Xo={exports:{}};/*!
  * Bootstrap v5.3.6 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var r_=Xo.exports,eh;function i_(){return eh||(eh=1,function(n,e){(function(t,r){n.exports=r()})(r_,function(){const t=new Map,r={set(m,a,h){t.has(m)||t.set(m,new Map);const g=t.get(m);g.has(a)||g.size===0?g.set(a,h):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(g.keys())[0]}.`)},get:(m,a)=>t.has(m)&&t.get(m).get(a)||null,remove(m,a){if(!t.has(m))return;const h=t.get(m);h.delete(a),h.size===0&&t.delete(m)}},i="transitionend",s=m=>(m&&window.CSS&&window.CSS.escape&&(m=m.replace(/#([^\s"#']+)/g,(a,h)=>`#${CSS.escape(h)}`)),m),c=m=>{m.dispatchEvent(new Event(i))},l=m=>!(!m||typeof m!="object")&&(m.jquery!==void 0&&(m=m[0]),m.nodeType!==void 0),d=m=>l(m)?m.jquery?m[0]:m:typeof m=="string"&&m.length>0?document.querySelector(s(m)):null,p=m=>{if(!l(m)||m.getClientRects().length===0)return!1;const a=getComputedStyle(m).getPropertyValue("visibility")==="visible",h=m.closest("details:not([open])");if(!h)return a;if(h!==m){const g=m.closest("summary");if(g&&g.parentNode!==h||g===null)return!1}return a},y=m=>!m||m.nodeType!==Node.ELEMENT_NODE||!!m.classList.contains("disabled")||(m.disabled!==void 0?m.disabled:m.hasAttribute("disabled")&&m.getAttribute("disabled")!=="false"),T=m=>{if(!document.documentElement.attachShadow)return null;if(typeof m.getRootNode=="function"){const a=m.getRootNode();return a instanceof ShadowRoot?a:null}return m instanceof ShadowRoot?m:m.parentNode?T(m.parentNode):null},I=()=>{},N=m=>{m.offsetHeight},U=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,H=[],F=()=>document.documentElement.dir==="rtl",ee=m=>{var a;a=()=>{const h=U();if(h){const g=m.NAME,A=h.fn[g];h.fn[g]=m.jQueryInterface,h.fn[g].Constructor=m,h.fn[g].noConflict=()=>(h.fn[g]=A,m.jQueryInterface)}},document.readyState==="loading"?(H.length||document.addEventListener("DOMContentLoaded",()=>{for(const h of H)h()}),H.push(a)):a()},G=(m,a=[],h=m)=>typeof m=="function"?m.call(...a):h,ce=(m,a,h=!0)=>{if(!h)return void G(m);const g=(O=>{if(!O)return 0;let{transitionDuration:x,transitionDelay:B}=window.getComputedStyle(O);const z=Number.parseFloat(x),K=Number.parseFloat(B);return z||K?(x=x.split(",")[0],B=B.split(",")[0],1e3*(Number.parseFloat(x)+Number.parseFloat(B))):0})(a)+5;let A=!1;const C=({target:O})=>{O===a&&(A=!0,a.removeEventListener(i,C),G(m))};a.addEventListener(i,C),setTimeout(()=>{A||c(a)},g)},be=(m,a,h,g)=>{const A=m.length;let C=m.indexOf(a);return C===-1?!h&&g?m[A-1]:m[0]:(C+=h?1:-1,g&&(C=(C+A)%A),m[Math.max(0,Math.min(C,A-1))])},gt=/[^.]*(?=\..*)\.|.*/,Pe=/\..*/,R=/::\d+$/,v={};let w=1;const b={mouseenter:"mouseover",mouseleave:"mouseout"},S=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function k(m,a){return a&&`${a}::${w++}`||m.uidEvent||w++}function E(m){const a=k(m);return m.uidEvent=a,v[a]=v[a]||{},v[a]}function kt(m,a,h=null){return Object.values(m).find(g=>g.callable===a&&g.delegationSelector===h)}function Bn(m,a,h){const g=typeof a=="string",A=g?h:a||h;let C=si(m);return S.has(C)||(C=m),[g,A,C]}function ho(m,a,h,g,A){if(typeof a!="string"||!m)return;let[C,O,x]=Bn(a,h,g);a in b&&(O=(re=>function(te){if(!te.relatedTarget||te.relatedTarget!==te.delegateTarget&&!te.delegateTarget.contains(te.relatedTarget))return re.call(this,te)})(O));const B=E(m),z=B[x]||(B[x]={}),K=kt(z,O,C?h:null);if(K)return void(K.oneOff=K.oneOff&&A);const j=k(O,a.replace(gt,"")),oe=C?function(X,re,te){return function ie(Te){const Re=X.querySelectorAll(re);for(let{target:ue}=Te;ue&&ue!==this;ue=ue.parentNode)for(const _e of Re)if(_e===ue)return es(Te,{delegateTarget:ue}),ie.oneOff&&M.off(X,Te.type,re,te),te.apply(ue,[Te])}}(m,h,O):function(X,re){return function te(ie){return es(ie,{delegateTarget:X}),te.oneOff&&M.off(X,ie.type,re),re.apply(X,[ie])}}(m,O);oe.delegationSelector=C?h:null,oe.callable=O,oe.oneOff=A,oe.uidEvent=j,z[j]=oe,m.addEventListener(x,oe,C)}function yn(m,a,h,g,A){const C=kt(a[h],g,A);C&&(m.removeEventListener(h,C,!!A),delete a[h][C.uidEvent])}function br(m,a,h,g){const A=a[h]||{};for(const[C,O]of Object.entries(A))C.includes(g)&&yn(m,a,h,O.callable,O.delegationSelector)}function si(m){return m=m.replace(Pe,""),b[m]||m}const M={on(m,a,h,g){ho(m,a,h,g,!1)},one(m,a,h,g){ho(m,a,h,g,!0)},off(m,a,h,g){if(typeof a!="string"||!m)return;const[A,C,O]=Bn(a,h,g),x=O!==a,B=E(m),z=B[O]||{},K=a.startsWith(".");if(C===void 0){if(K)for(const j of Object.keys(B))br(m,B,j,a.slice(1));for(const[j,oe]of Object.entries(z)){const X=j.replace(R,"");x&&!a.includes(X)||yn(m,B,O,oe.callable,oe.delegationSelector)}}else{if(!Object.keys(z).length)return;yn(m,B,O,C,A?h:null)}},trigger(m,a,h){if(typeof a!="string"||!m)return null;const g=U();let A=null,C=!0,O=!0,x=!1;a!==si(a)&&g&&(A=g.Event(a,h),g(m).trigger(A),C=!A.isPropagationStopped(),O=!A.isImmediatePropagationStopped(),x=A.isDefaultPrevented());const B=es(new Event(a,{bubbles:C,cancelable:!0}),h);return x&&B.preventDefault(),O&&m.dispatchEvent(B),B.defaultPrevented&&A&&A.preventDefault(),B}};function es(m,a={}){for(const[h,g]of Object.entries(a))try{m[h]=g}catch{Object.defineProperty(m,h,{configurable:!0,get:()=>g})}return m}function $t(m){if(m==="true")return!0;if(m==="false")return!1;if(m===Number(m).toString())return Number(m);if(m===""||m==="null")return null;if(typeof m!="string")return m;try{return JSON.parse(decodeURIComponent(m))}catch{return m}}function Me(m){return m.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}const Bt={setDataAttribute(m,a,h){m.setAttribute(`data-bs-${Me(a)}`,h)},removeDataAttribute(m,a){m.removeAttribute(`data-bs-${Me(a)}`)},getDataAttributes(m){if(!m)return{};const a={},h=Object.keys(m.dataset).filter(g=>g.startsWith("bs")&&!g.startsWith("bsConfig"));for(const g of h){let A=g.replace(/^bs/,"");A=A.charAt(0).toLowerCase()+A.slice(1),a[A]=$t(m.dataset[g])}return a},getDataAttribute:(m,a)=>$t(m.getAttribute(`data-bs-${Me(a)}`))};class jt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(a){return a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a}_mergeConfigObj(a,h){const g=l(h)?Bt.getDataAttribute(h,"config"):{};return{...this.constructor.Default,...typeof g=="object"?g:{},...l(h)?Bt.getDataAttributes(h):{},...typeof a=="object"?a:{}}}_typeCheckConfig(a,h=this.constructor.DefaultType){for(const[A,C]of Object.entries(h)){const O=a[A],x=l(O)?"element":(g=O)==null?`${g}`:Object.prototype.toString.call(g).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(C).test(x))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${A}" provided type "${x}" but expected type "${C}".`)}var g}}class Tt extends jt{constructor(a,h){super(),(a=d(a))&&(this._element=a,this._config=this._getConfig(h),r.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.remove(this._element,this.constructor.DATA_KEY),M.off(this._element,this.constructor.EVENT_KEY);for(const a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,h,g=!0){ce(a,h,g)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return r.get(d(a),this.DATA_KEY)}static getOrCreateInstance(a,h={}){return this.getInstance(a)||new this(a,typeof h=="object"?h:null)}static get VERSION(){return"5.3.6"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}const jn=m=>{let a=m.getAttribute("data-bs-target");if(!a||a==="#"){let h=m.getAttribute("href");if(!h||!h.includes("#")&&!h.startsWith("."))return null;h.includes("#")&&!h.startsWith("#")&&(h=`#${h.split("#")[1]}`),a=h&&h!=="#"?h.trim():null}return a?a.split(",").map(h=>s(h)).join(","):null},Q={find:(m,a=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(a,m)),findOne:(m,a=document.documentElement)=>Element.prototype.querySelector.call(a,m),children:(m,a)=>[].concat(...m.children).filter(h=>h.matches(a)),parents(m,a){const h=[];let g=m.parentNode.closest(a);for(;g;)h.push(g),g=g.parentNode.closest(a);return h},prev(m,a){let h=m.previousElementSibling;for(;h;){if(h.matches(a))return[h];h=h.previousElementSibling}return[]},next(m,a){let h=m.nextElementSibling;for(;h;){if(h.matches(a))return[h];h=h.nextElementSibling}return[]},focusableChildren(m){const a=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(h=>`${h}:not([tabindex^="-"])`).join(",");return this.find(a,m).filter(h=>!y(h)&&p(h))},getSelectorFromElement(m){const a=jn(m);return a&&Q.findOne(a)?a:null},getElementFromSelector(m){const a=jn(m);return a?Q.findOne(a):null},getMultipleElementsFromSelector(m){const a=jn(m);return a?Q.find(a):[]}},oi=(m,a="hide")=>{const h=`click.dismiss${m.EVENT_KEY}`,g=m.NAME;M.on(document,h,`[data-bs-dismiss="${g}"]`,function(A){if(["A","AREA"].includes(this.tagName)&&A.preventDefault(),y(this))return;const C=Q.getElementFromSelector(this)||this.closest(`.${g}`);m.getOrCreateInstance(C)[a]()})},Ar=".bs.alert",ai=`close${Ar}`,ts=`closed${Ar}`;class vn extends Tt{static get NAME(){return"alert"}close(){if(M.trigger(this._element,ai).defaultPrevented)return;this._element.classList.remove("show");const a=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,a)}_destroyElement(){this._element.remove(),M.trigger(this._element,ts),this.dispose()}static jQueryInterface(a){return this.each(function(){const h=vn.getOrCreateInstance(this);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a](this)}})}}oi(vn,"close"),ee(vn);const ci='[data-bs-toggle="button"]';class En extends Tt{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(a){return this.each(function(){const h=En.getOrCreateInstance(this);a==="toggle"&&h[a]()})}}M.on(document,"click.bs.button.data-api",ci,m=>{m.preventDefault();const a=m.target.closest(ci);En.getOrCreateInstance(a).toggle()}),ee(En);const wn=".bs.swipe",ec=`touchstart${wn}`,tc=`touchmove${wn}`,fo=`touchend${wn}`,ns=`pointerdown${wn}`,po=`pointerup${wn}`,nc={endCallback:null,leftCallback:null,rightCallback:null},rs={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class qn extends jt{constructor(a,h){super(),this._element=a,a&&qn.isSupported()&&(this._config=this._getConfig(h),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return nc}static get DefaultType(){return rs}static get NAME(){return"swipe"}dispose(){M.off(this._element,wn)}_start(a){this._supportPointerEvents?this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX):this._deltaX=a.touches[0].clientX}_end(a){this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX-this._deltaX),this._handleSwipe(),G(this._config.endCallback)}_move(a){this._deltaX=a.touches&&a.touches.length>1?0:a.touches[0].clientX-this._deltaX}_handleSwipe(){const a=Math.abs(this._deltaX);if(a<=40)return;const h=a/this._deltaX;this._deltaX=0,h&&G(h>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(M.on(this._element,ns,a=>this._start(a)),M.on(this._element,po,a=>this._end(a)),this._element.classList.add("pointer-event")):(M.on(this._element,ec,a=>this._start(a)),M.on(this._element,tc,a=>this._move(a)),M.on(this._element,fo,a=>this._end(a)))}_eventIsPointerPenTouch(a){return this._supportPointerEvents&&(a.pointerType==="pen"||a.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const qt=".bs.carousel",$e=".data-api",Xe="ArrowLeft",li="ArrowRight",Hn="next",Tn="prev",zn="left",en="right",mo=`slide${qt}`,ui=`slid${qt}`,is=`keydown${qt}`,rc=`mouseenter${qt}`,ic=`mouseleave${qt}`,ss=`dragstart${qt}`,go=`load${qt}${$e}`,_o=`click${qt}${$e}`,Wn="carousel",Kn="active",hi=".active",tn=".carousel-item",yo=hi+tn,di={[Xe]:en,[li]:zn},vo={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Cr={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class In extends Tt{constructor(a,h){super(a,h),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Wn&&this.cycle()}static get Default(){return vo}static get DefaultType(){return Cr}static get NAME(){return"carousel"}next(){this._slide(Hn)}nextWhenVisible(){!document.hidden&&p(this._element)&&this.next()}prev(){this._slide(Tn)}pause(){this._isSliding&&c(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?M.one(this._element,ui,()=>this.cycle()):this.cycle())}to(a){const h=this._getItems();if(a>h.length-1||a<0)return;if(this._isSliding)return void M.one(this._element,ui,()=>this.to(a));const g=this._getItemIndex(this._getActive());if(g===a)return;const A=a>g?Hn:Tn;this._slide(A,h[a])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(a){return a.defaultInterval=a.interval,a}_addEventListeners(){this._config.keyboard&&M.on(this._element,is,a=>this._keydown(a)),this._config.pause==="hover"&&(M.on(this._element,rc,()=>this.pause()),M.on(this._element,ic,()=>this._maybeEnableCycle())),this._config.touch&&qn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const h of Q.find(".carousel-item img",this._element))M.on(h,ss,g=>g.preventDefault());const a={leftCallback:()=>this._slide(this._directionToOrder(zn)),rightCallback:()=>this._slide(this._directionToOrder(en)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new qn(this._element,a)}_keydown(a){if(/input|textarea/i.test(a.target.tagName))return;const h=di[a.key];h&&(a.preventDefault(),this._slide(this._directionToOrder(h)))}_getItemIndex(a){return this._getItems().indexOf(a)}_setActiveIndicatorElement(a){if(!this._indicatorsElement)return;const h=Q.findOne(hi,this._indicatorsElement);h.classList.remove(Kn),h.removeAttribute("aria-current");const g=Q.findOne(`[data-bs-slide-to="${a}"]`,this._indicatorsElement);g&&(g.classList.add(Kn),g.setAttribute("aria-current","true"))}_updateInterval(){const a=this._activeElement||this._getActive();if(!a)return;const h=Number.parseInt(a.getAttribute("data-bs-interval"),10);this._config.interval=h||this._config.defaultInterval}_slide(a,h=null){if(this._isSliding)return;const g=this._getActive(),A=a===Hn,C=h||be(this._getItems(),g,A,this._config.wrap);if(C===g)return;const O=this._getItemIndex(C),x=j=>M.trigger(this._element,j,{relatedTarget:C,direction:this._orderToDirection(a),from:this._getItemIndex(g),to:O});if(x(mo).defaultPrevented||!g||!C)return;const B=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(O),this._activeElement=C;const z=A?"carousel-item-start":"carousel-item-end",K=A?"carousel-item-next":"carousel-item-prev";C.classList.add(K),N(C),g.classList.add(z),C.classList.add(z),this._queueCallback(()=>{C.classList.remove(z,K),C.classList.add(Kn),g.classList.remove(Kn,K,z),this._isSliding=!1,x(ui)},g,this._isAnimated()),B&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return Q.findOne(yo,this._element)}_getItems(){return Q.find(tn,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(a){return F()?a===zn?Tn:Hn:a===zn?Hn:Tn}_orderToDirection(a){return F()?a===Tn?zn:en:a===Tn?en:zn}static jQueryInterface(a){return this.each(function(){const h=In.getOrCreateInstance(this,a);if(typeof a!="number"){if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a]()}}else h.to(a)})}}M.on(document,_o,"[data-bs-slide], [data-bs-slide-to]",function(m){const a=Q.getElementFromSelector(this);if(!a||!a.classList.contains(Wn))return;m.preventDefault();const h=In.getOrCreateInstance(a),g=this.getAttribute("data-bs-slide-to");return g?(h.to(g),void h._maybeEnableCycle()):Bt.getDataAttribute(this,"slide")==="next"?(h.next(),void h._maybeEnableCycle()):(h.prev(),void h._maybeEnableCycle())}),M.on(window,go,()=>{const m=Q.find('[data-bs-ride="carousel"]');for(const a of m)In.getOrCreateInstance(a)}),ee(In);const Ne=".bs.collapse",Eo=`show${Ne}`,Rr=`shown${Ne}`,Sr=`hide${Ne}`,sc=`hidden${Ne}`,oc=`click${Ne}.data-api`,nn="show",Gn="collapse",fi="collapsing",pi=`:scope .${Gn} .${Gn}`,mi='[data-bs-toggle="collapse"]',os={parent:null,toggle:!0},gi={parent:"(null|element)",toggle:"boolean"};class ct extends Tt{constructor(a,h){super(a,h),this._isTransitioning=!1,this._triggerArray=[];const g=Q.find(mi);for(const A of g){const C=Q.getSelectorFromElement(A),O=Q.find(C).filter(x=>x===this._element);C!==null&&O.length&&this._triggerArray.push(A)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return os}static get DefaultType(){return gi}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(A=>A!==this._element).map(A=>ct.getOrCreateInstance(A,{toggle:!1}))),a.length&&a[0]._isTransitioning||M.trigger(this._element,Eo).defaultPrevented)return;for(const A of a)A.hide();const h=this._getDimension();this._element.classList.remove(Gn),this._element.classList.add(fi),this._element.style[h]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const g=`scroll${h[0].toUpperCase()+h.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(fi),this._element.classList.add(Gn,nn),this._element.style[h]="",M.trigger(this._element,Rr)},this._element,!0),this._element.style[h]=`${this._element[g]}px`}hide(){if(this._isTransitioning||!this._isShown()||M.trigger(this._element,Sr).defaultPrevented)return;const a=this._getDimension();this._element.style[a]=`${this._element.getBoundingClientRect()[a]}px`,N(this._element),this._element.classList.add(fi),this._element.classList.remove(Gn,nn);for(const h of this._triggerArray){const g=Q.getElementFromSelector(h);g&&!this._isShown(g)&&this._addAriaAndCollapsedClass([h],!1)}this._isTransitioning=!0,this._element.style[a]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(fi),this._element.classList.add(Gn),M.trigger(this._element,sc)},this._element,!0)}_isShown(a=this._element){return a.classList.contains(nn)}_configAfterMerge(a){return a.toggle=!!a.toggle,a.parent=d(a.parent),a}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const a=this._getFirstLevelChildren(mi);for(const h of a){const g=Q.getElementFromSelector(h);g&&this._addAriaAndCollapsedClass([h],this._isShown(g))}}_getFirstLevelChildren(a){const h=Q.find(pi,this._config.parent);return Q.find(a,this._config.parent).filter(g=>!h.includes(g))}_addAriaAndCollapsedClass(a,h){if(a.length)for(const g of a)g.classList.toggle("collapsed",!h),g.setAttribute("aria-expanded",h)}static jQueryInterface(a){const h={};return typeof a=="string"&&/show|hide/.test(a)&&(h.toggle=!1),this.each(function(){const g=ct.getOrCreateInstance(this,h);if(typeof a=="string"){if(g[a]===void 0)throw new TypeError(`No method named "${a}"`);g[a]()}})}}M.on(document,oc,mi,function(m){(m.target.tagName==="A"||m.delegateTarget&&m.delegateTarget.tagName==="A")&&m.preventDefault();for(const a of Q.getMultipleElementsFromSelector(this))ct.getOrCreateInstance(a,{toggle:!1}).toggle()}),ee(ct);var ze="top",nt="bottom",Je="right",Be="left",Pr="auto",bn=[ze,nt,Je,Be],An="start",Ht="end",as="clippingParents",kr="viewport",Dt="popper",rn="reference",Dr=bn.reduce(function(m,a){return m.concat([a+"-"+An,a+"-"+Ht])},[]),cs=[].concat(bn,[Pr]).reduce(function(m,a){return m.concat([a,a+"-"+An,a+"-"+Ht])},[]),ls="beforeRead",us="read",hs="afterRead",_i="beforeMain",yi="main",ds="afterMain",fs="beforeWrite",wo="write",To="afterWrite",ps=[ls,us,hs,_i,yi,ds,fs,wo,To];function It(m){return m?(m.nodeName||"").toLowerCase():null}function lt(m){if(m==null)return window;if(m.toString()!=="[object Window]"){var a=m.ownerDocument;return a&&a.defaultView||window}return m}function ut(m){return m instanceof lt(m).Element||m instanceof Element}function De(m){return m instanceof lt(m).HTMLElement||m instanceof HTMLElement}function Qn(m){return typeof ShadowRoot<"u"&&(m instanceof lt(m).ShadowRoot||m instanceof ShadowRoot)}const Yn={name:"applyStyles",enabled:!0,phase:"write",fn:function(m){var a=m.state;Object.keys(a.elements).forEach(function(h){var g=a.styles[h]||{},A=a.attributes[h]||{},C=a.elements[h];De(C)&&It(C)&&(Object.assign(C.style,g),Object.keys(A).forEach(function(O){var x=A[O];x===!1?C.removeAttribute(O):C.setAttribute(O,x===!0?"":x)}))})},effect:function(m){var a=m.state,h={popper:{position:a.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(a.elements.popper.style,h.popper),a.styles=h,a.elements.arrow&&Object.assign(a.elements.arrow.style,h.arrow),function(){Object.keys(a.elements).forEach(function(g){var A=a.elements[g],C=a.attributes[g]||{},O=Object.keys(a.styles.hasOwnProperty(g)?a.styles[g]:h[g]).reduce(function(x,B){return x[B]="",x},{});De(A)&&It(A)&&(Object.assign(A.style,O),Object.keys(C).forEach(function(x){A.removeAttribute(x)}))})}},requires:["computeStyles"]};function bt(m){return m.split("-")[0]}var ge=Math.max,Cn=Math.min,Ot=Math.round;function Rn(){var m=navigator.userAgentData;return m!=null&&m.brands&&Array.isArray(m.brands)?m.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function Io(){return!/^((?!chrome|android).)*safari/i.test(Rn())}function Sn(m,a,h){a===void 0&&(a=!1),h===void 0&&(h=!1);var g=m.getBoundingClientRect(),A=1,C=1;a&&De(m)&&(A=m.offsetWidth>0&&Ot(g.width)/m.offsetWidth||1,C=m.offsetHeight>0&&Ot(g.height)/m.offsetHeight||1);var O=(ut(m)?lt(m):window).visualViewport,x=!Io()&&h,B=(g.left+(x&&O?O.offsetLeft:0))/A,z=(g.top+(x&&O?O.offsetTop:0))/C,K=g.width/A,j=g.height/C;return{width:K,height:j,top:z,right:B+K,bottom:z+j,left:B,x:B,y:z}}function ms(m){var a=Sn(m),h=m.offsetWidth,g=m.offsetHeight;return Math.abs(a.width-h)<=1&&(h=a.width),Math.abs(a.height-g)<=1&&(g=a.height),{x:m.offsetLeft,y:m.offsetTop,width:h,height:g}}function bo(m,a){var h=a.getRootNode&&a.getRootNode();if(m.contains(a))return!0;if(h&&Qn(h)){var g=a;do{if(g&&m.isSameNode(g))return!0;g=g.parentNode||g.host}while(g)}return!1}function zt(m){return lt(m).getComputedStyle(m)}function ac(m){return["table","td","th"].indexOf(It(m))>=0}function _t(m){return((ut(m)?m.ownerDocument:m.document)||window.document).documentElement}function At(m){return It(m)==="html"?m:m.assignedSlot||m.parentNode||(Qn(m)?m.host:null)||_t(m)}function gs(m){return De(m)&&zt(m).position!=="fixed"?m.offsetParent:null}function Xn(m){for(var a=lt(m),h=gs(m);h&&ac(h)&&zt(h).position==="static";)h=gs(h);return h&&(It(h)==="html"||It(h)==="body"&&zt(h).position==="static")?a:h||function(g){var A=/firefox/i.test(Rn());if(/Trident/i.test(Rn())&&De(g)&&zt(g).position==="fixed")return null;var C=At(g);for(Qn(C)&&(C=C.host);De(C)&&["html","body"].indexOf(It(C))<0;){var O=zt(C);if(O.transform!=="none"||O.perspective!=="none"||O.contain==="paint"||["transform","perspective"].indexOf(O.willChange)!==-1||A&&O.willChange==="filter"||A&&O.filter&&O.filter!=="none")return C;C=C.parentNode}return null}(m)||a}function vi(m){return["top","bottom"].indexOf(m)>=0?"x":"y"}function Nt(m,a,h){return ge(m,Cn(a,h))}function Ao(m){return Object.assign({},{top:0,right:0,bottom:0,left:0},m)}function Co(m,a){return a.reduce(function(h,g){return h[g]=m,h},{})}const Ro={name:"arrow",enabled:!0,phase:"main",fn:function(m){var a,h=m.state,g=m.name,A=m.options,C=h.elements.arrow,O=h.modifiersData.popperOffsets,x=bt(h.placement),B=vi(x),z=[Be,Je].indexOf(x)>=0?"height":"width";if(C&&O){var K=function(Ie,we){return Ao(typeof(Ie=typeof Ie=="function"?Ie(Object.assign({},we.rects,{placement:we.placement})):Ie)!="number"?Ie:Co(Ie,bn))}(A.padding,h),j=ms(C),oe=B==="y"?ze:Be,X=B==="y"?nt:Je,re=h.rects.reference[z]+h.rects.reference[B]-O[B]-h.rects.popper[z],te=O[B]-h.rects.reference[B],ie=Xn(C),Te=ie?B==="y"?ie.clientHeight||0:ie.clientWidth||0:0,Re=re/2-te/2,ue=K[oe],_e=Te-j[z]-K[X],ae=Te/2-j[z]/2+Re,fe=Nt(ue,ae,_e),Ee=B;h.modifiersData[g]=((a={})[Ee]=fe,a.centerOffset=fe-ae,a)}},effect:function(m){var a=m.state,h=m.options.element,g=h===void 0?"[data-popper-arrow]":h;g!=null&&(typeof g!="string"||(g=a.elements.popper.querySelector(g)))&&bo(a.elements.popper,g)&&(a.elements.arrow=g)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ht(m){return m.split("-")[1]}var cc={top:"auto",right:"auto",bottom:"auto",left:"auto"};function So(m){var a,h=m.popper,g=m.popperRect,A=m.placement,C=m.variation,O=m.offsets,x=m.position,B=m.gpuAcceleration,z=m.adaptive,K=m.roundOffsets,j=m.isFixed,oe=O.x,X=oe===void 0?0:oe,re=O.y,te=re===void 0?0:re,ie=typeof K=="function"?K({x:X,y:te}):{x:X,y:te};X=ie.x,te=ie.y;var Te=O.hasOwnProperty("x"),Re=O.hasOwnProperty("y"),ue=Be,_e=ze,ae=window;if(z){var fe=Xn(h),Ee="clientHeight",Ie="clientWidth";fe===lt(h)&&zt(fe=_t(h)).position!=="static"&&x==="absolute"&&(Ee="scrollHeight",Ie="scrollWidth"),(A===ze||(A===Be||A===Je)&&C===Ht)&&(_e=nt,te-=(j&&fe===ae&&ae.visualViewport?ae.visualViewport.height:fe[Ee])-g.height,te*=B?1:-1),A!==Be&&(A!==ze&&A!==nt||C!==Ht)||(ue=Je,X-=(j&&fe===ae&&ae.visualViewport?ae.visualViewport.width:fe[Ie])-g.width,X*=B?1:-1)}var we,Ve=Object.assign({position:x},z&&cc),Ct=K===!0?function(Kt,ft){var Lt=Kt.x,xt=Kt.y,Oe=ft.devicePixelRatio||1;return{x:Ot(Lt*Oe)/Oe||0,y:Ot(xt*Oe)/Oe||0}}({x:X,y:te},lt(h)):{x:X,y:te};return X=Ct.x,te=Ct.y,B?Object.assign({},Ve,((we={})[_e]=Re?"0":"",we[ue]=Te?"0":"",we.transform=(ae.devicePixelRatio||1)<=1?"translate("+X+"px, "+te+"px)":"translate3d("+X+"px, "+te+"px, 0)",we)):Object.assign({},Ve,((a={})[_e]=Re?te+"px":"",a[ue]=Te?X+"px":"",a.transform="",a))}const Jn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(m){var a=m.state,h=m.options,g=h.gpuAcceleration,A=g===void 0||g,C=h.adaptive,O=C===void 0||C,x=h.roundOffsets,B=x===void 0||x,z={placement:bt(a.placement),variation:ht(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:A,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,So(Object.assign({},z,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:O,roundOffsets:B})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,So(Object.assign({},z,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:B})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})},data:{}};var Pn={passive:!0};const Ei={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(m){var a=m.state,h=m.instance,g=m.options,A=g.scroll,C=A===void 0||A,O=g.resize,x=O===void 0||O,B=lt(a.elements.popper),z=[].concat(a.scrollParents.reference,a.scrollParents.popper);return C&&z.forEach(function(K){K.addEventListener("scroll",h.update,Pn)}),x&&B.addEventListener("resize",h.update,Pn),function(){C&&z.forEach(function(K){K.removeEventListener("scroll",h.update,Pn)}),x&&B.removeEventListener("resize",h.update,Pn)}},data:{}};var Or={left:"right",right:"left",bottom:"top",top:"bottom"};function sn(m){return m.replace(/left|right|bottom|top/g,function(a){return Or[a]})}var Po={start:"end",end:"start"};function wi(m){return m.replace(/start|end/g,function(a){return Po[a]})}function Ce(m){var a=lt(m);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function _s(m){return Sn(_t(m)).left+Ce(m).scrollLeft}function ys(m){var a=zt(m),h=a.overflow,g=a.overflowX,A=a.overflowY;return/auto|scroll|overlay|hidden/.test(h+A+g)}function vs(m){return["html","body","#document"].indexOf(It(m))>=0?m.ownerDocument.body:De(m)&&ys(m)?m:vs(At(m))}function Zn(m,a){var h;a===void 0&&(a=[]);var g=vs(m),A=g===((h=m.ownerDocument)==null?void 0:h.body),C=lt(g),O=A?[C].concat(C.visualViewport||[],ys(g)?g:[]):g,x=a.concat(O);return A?x:x.concat(Zn(At(O)))}function Ti(m){return Object.assign({},m,{left:m.x,top:m.y,right:m.x+m.width,bottom:m.y+m.height})}function Nr(m,a,h){return a===kr?Ti(function(g,A){var C=lt(g),O=_t(g),x=C.visualViewport,B=O.clientWidth,z=O.clientHeight,K=0,j=0;if(x){B=x.width,z=x.height;var oe=Io();(oe||!oe&&A==="fixed")&&(K=x.offsetLeft,j=x.offsetTop)}return{width:B,height:z,x:K+_s(g),y:j}}(m,h)):ut(a)?function(g,A){var C=Sn(g,!1,A==="fixed");return C.top=C.top+g.clientTop,C.left=C.left+g.clientLeft,C.bottom=C.top+g.clientHeight,C.right=C.left+g.clientWidth,C.width=g.clientWidth,C.height=g.clientHeight,C.x=C.left,C.y=C.top,C}(a,h):Ti(function(g){var A,C=_t(g),O=Ce(g),x=(A=g.ownerDocument)==null?void 0:A.body,B=ge(C.scrollWidth,C.clientWidth,x?x.scrollWidth:0,x?x.clientWidth:0),z=ge(C.scrollHeight,C.clientHeight,x?x.scrollHeight:0,x?x.clientHeight:0),K=-O.scrollLeft+_s(g),j=-O.scrollTop;return zt(x||C).direction==="rtl"&&(K+=ge(C.clientWidth,x?x.clientWidth:0)-B),{width:B,height:z,x:K,y:j}}(_t(m)))}function Es(m){var a,h=m.reference,g=m.element,A=m.placement,C=A?bt(A):null,O=A?ht(A):null,x=h.x+h.width/2-g.width/2,B=h.y+h.height/2-g.height/2;switch(C){case ze:a={x,y:h.y-g.height};break;case nt:a={x,y:h.y+h.height};break;case Je:a={x:h.x+h.width,y:B};break;case Be:a={x:h.x-g.width,y:B};break;default:a={x:h.x,y:h.y}}var z=C?vi(C):null;if(z!=null){var K=z==="y"?"height":"width";switch(O){case An:a[z]=a[z]-(h[K]/2-g[K]/2);break;case Ht:a[z]=a[z]+(h[K]/2-g[K]/2)}}return a}function rt(m,a){a===void 0&&(a={});var h=a,g=h.placement,A=g===void 0?m.placement:g,C=h.strategy,O=C===void 0?m.strategy:C,x=h.boundary,B=x===void 0?as:x,z=h.rootBoundary,K=z===void 0?kr:z,j=h.elementContext,oe=j===void 0?Dt:j,X=h.altBoundary,re=X!==void 0&&X,te=h.padding,ie=te===void 0?0:te,Te=Ao(typeof ie!="number"?ie:Co(ie,bn)),Re=oe===Dt?rn:Dt,ue=m.rects.popper,_e=m.elements[re?Re:oe],ae=function(ft,Lt,xt,Oe){var an=Lt==="clippingParents"?function(Ae){var pt=Zn(At(Ae)),Mt=["absolute","fixed"].indexOf(zt(Ae).position)>=0&&De(Ae)?Xn(Ae):Ae;return ut(Mt)?pt.filter(function(ir){return ut(ir)&&bo(ir,Mt)&&It(ir)!=="body"}):[]}(ft):[].concat(Lt),cn=[].concat(an,[xt]),Pi=cn[0],Qe=cn.reduce(function(Ae,pt){var Mt=Nr(ft,pt,Oe);return Ae.top=ge(Mt.top,Ae.top),Ae.right=Cn(Mt.right,Ae.right),Ae.bottom=Cn(Mt.bottom,Ae.bottom),Ae.left=ge(Mt.left,Ae.left),Ae},Nr(ft,Pi,Oe));return Qe.width=Qe.right-Qe.left,Qe.height=Qe.bottom-Qe.top,Qe.x=Qe.left,Qe.y=Qe.top,Qe}(ut(_e)?_e:_e.contextElement||_t(m.elements.popper),B,K,O),fe=Sn(m.elements.reference),Ee=Es({reference:fe,element:ue,placement:A}),Ie=Ti(Object.assign({},ue,Ee)),we=oe===Dt?Ie:fe,Ve={top:ae.top-we.top+Te.top,bottom:we.bottom-ae.bottom+Te.bottom,left:ae.left-we.left+Te.left,right:we.right-ae.right+Te.right},Ct=m.modifiersData.offset;if(oe===Dt&&Ct){var Kt=Ct[A];Object.keys(Ve).forEach(function(ft){var Lt=[Je,nt].indexOf(ft)>=0?1:-1,xt=[ze,nt].indexOf(ft)>=0?"y":"x";Ve[ft]+=Kt[xt]*Lt})}return Ve}function ko(m,a){a===void 0&&(a={});var h=a,g=h.placement,A=h.boundary,C=h.rootBoundary,O=h.padding,x=h.flipVariations,B=h.allowedAutoPlacements,z=B===void 0?cs:B,K=ht(g),j=K?x?Dr:Dr.filter(function(re){return ht(re)===K}):bn,oe=j.filter(function(re){return z.indexOf(re)>=0});oe.length===0&&(oe=j);var X=oe.reduce(function(re,te){return re[te]=rt(m,{placement:te,boundary:A,rootBoundary:C,padding:O})[bt(te)],re},{});return Object.keys(X).sort(function(re,te){return X[re]-X[te]})}const Do={name:"flip",enabled:!0,phase:"main",fn:function(m){var a=m.state,h=m.options,g=m.name;if(!a.modifiersData[g]._skip){for(var A=h.mainAxis,C=A===void 0||A,O=h.altAxis,x=O===void 0||O,B=h.fallbackPlacements,z=h.padding,K=h.boundary,j=h.rootBoundary,oe=h.altBoundary,X=h.flipVariations,re=X===void 0||X,te=h.allowedAutoPlacements,ie=a.options.placement,Te=bt(ie),Re=B||(Te!==ie&&re?function(Ae){if(bt(Ae)===Pr)return[];var pt=sn(Ae);return[wi(Ae),pt,wi(pt)]}(ie):[sn(ie)]),ue=[ie].concat(Re).reduce(function(Ae,pt){return Ae.concat(bt(pt)===Pr?ko(a,{placement:pt,boundary:K,rootBoundary:j,padding:z,flipVariations:re,allowedAutoPlacements:te}):pt)},[]),_e=a.rects.reference,ae=a.rects.popper,fe=new Map,Ee=!0,Ie=ue[0],we=0;we<ue.length;we++){var Ve=ue[we],Ct=bt(Ve),Kt=ht(Ve)===An,ft=[ze,nt].indexOf(Ct)>=0,Lt=ft?"width":"height",xt=rt(a,{placement:Ve,boundary:K,rootBoundary:j,altBoundary:oe,padding:z}),Oe=ft?Kt?Je:Be:Kt?nt:ze;_e[Lt]>ae[Lt]&&(Oe=sn(Oe));var an=sn(Oe),cn=[];if(C&&cn.push(xt[Ct]<=0),x&&cn.push(xt[Oe]<=0,xt[an]<=0),cn.every(function(Ae){return Ae})){Ie=Ve,Ee=!1;break}fe.set(Ve,cn)}if(Ee)for(var Pi=function(Ae){var pt=ue.find(function(Mt){var ir=fe.get(Mt);if(ir)return ir.slice(0,Ae).every(function(jo){return jo})});if(pt)return Ie=pt,"break"},Qe=re?3:1;Qe>0&&Pi(Qe)!=="break";Qe--);a.placement!==Ie&&(a.modifiersData[g]._skip=!0,a.placement=Ie,a.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function er(m,a,h){return h===void 0&&(h={x:0,y:0}),{top:m.top-a.height-h.y,right:m.right-a.width+h.x,bottom:m.bottom-a.height+h.y,left:m.left-a.width-h.x}}function ws(m){return[ze,Je,nt,Be].some(function(a){return m[a]>=0})}const Ii={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(m){var a=m.state,h=m.name,g=a.rects.reference,A=a.rects.popper,C=a.modifiersData.preventOverflow,O=rt(a,{elementContext:"reference"}),x=rt(a,{altBoundary:!0}),B=er(O,g),z=er(x,A,C),K=ws(B),j=ws(z);a.modifiersData[h]={referenceClippingOffsets:B,popperEscapeOffsets:z,isReferenceHidden:K,hasPopperEscaped:j},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":K,"data-popper-escaped":j})}},Vr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(m){var a=m.state,h=m.options,g=m.name,A=h.offset,C=A===void 0?[0,0]:A,O=cs.reduce(function(K,j){return K[j]=function(oe,X,re){var te=bt(oe),ie=[Be,ze].indexOf(te)>=0?-1:1,Te=typeof re=="function"?re(Object.assign({},X,{placement:oe})):re,Re=Te[0],ue=Te[1];return Re=Re||0,ue=(ue||0)*ie,[Be,Je].indexOf(te)>=0?{x:ue,y:Re}:{x:Re,y:ue}}(j,a.rects,C),K},{}),x=O[a.placement],B=x.x,z=x.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=B,a.modifiersData.popperOffsets.y+=z),a.modifiersData[g]=O}},bi={name:"popperOffsets",enabled:!0,phase:"read",fn:function(m){var a=m.state,h=m.name;a.modifiersData[h]=Es({reference:a.rects.reference,element:a.rects.popper,placement:a.placement})},data:{}},Lr={name:"preventOverflow",enabled:!0,phase:"main",fn:function(m){var a=m.state,h=m.options,g=m.name,A=h.mainAxis,C=A===void 0||A,O=h.altAxis,x=O!==void 0&&O,B=h.boundary,z=h.rootBoundary,K=h.altBoundary,j=h.padding,oe=h.tether,X=oe===void 0||oe,re=h.tetherOffset,te=re===void 0?0:re,ie=rt(a,{boundary:B,rootBoundary:z,padding:j,altBoundary:K}),Te=bt(a.placement),Re=ht(a.placement),ue=!Re,_e=vi(Te),ae=_e==="x"?"y":"x",fe=a.modifiersData.popperOffsets,Ee=a.rects.reference,Ie=a.rects.popper,we=typeof te=="function"?te(Object.assign({},a.rects,{placement:a.placement})):te,Ve=typeof we=="number"?{mainAxis:we,altAxis:we}:Object.assign({mainAxis:0,altAxis:0},we),Ct=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,Kt={x:0,y:0};if(fe){if(C){var ft,Lt=_e==="y"?ze:Be,xt=_e==="y"?nt:Je,Oe=_e==="y"?"height":"width",an=fe[_e],cn=an+ie[Lt],Pi=an-ie[xt],Qe=X?-Ie[Oe]/2:0,Ae=Re===An?Ee[Oe]:Ie[Oe],pt=Re===An?-Ie[Oe]:-Ee[Oe],Mt=a.elements.arrow,ir=X&&Mt?ms(Mt):{width:0,height:0},jo=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ju=jo[Lt],qu=jo[xt],qo=Nt(0,Ee[Oe],ir[Oe]),Qg=ue?Ee[Oe]/2-Qe-qo-ju-Ve.mainAxis:Ae-qo-ju-Ve.mainAxis,Yg=ue?-Ee[Oe]/2+Qe+qo+qu+Ve.mainAxis:pt+qo+qu+Ve.mainAxis,Ec=a.elements.arrow&&Xn(a.elements.arrow),Xg=Ec?_e==="y"?Ec.clientTop||0:Ec.clientLeft||0:0,Hu=(ft=Ct==null?void 0:Ct[_e])!=null?ft:0,Jg=an+Yg-Hu,zu=Nt(X?Cn(cn,an+Qg-Hu-Xg):cn,an,X?ge(Pi,Jg):Pi);fe[_e]=zu,Kt[_e]=zu-an}if(x){var Wu,Zg=_e==="x"?ze:Be,e_=_e==="x"?nt:Je,Hr=fe[ae],Ho=ae==="y"?"height":"width",Ku=Hr+ie[Zg],Gu=Hr-ie[e_],wc=[ze,Be].indexOf(Te)!==-1,Qu=(Wu=Ct==null?void 0:Ct[ae])!=null?Wu:0,Yu=wc?Ku:Hr-Ee[Ho]-Ie[Ho]-Qu+Ve.altAxis,Xu=wc?Hr+Ee[Ho]+Ie[Ho]-Qu-Ve.altAxis:Gu,Ju=X&&wc?function(t_,n_,Tc){var Zu=Nt(t_,n_,Tc);return Zu>Tc?Tc:Zu}(Yu,Hr,Xu):Nt(X?Yu:Ku,Hr,X?Xu:Gu);fe[ae]=Ju,Kt[ae]=Ju-Hr}a.modifiersData[g]=Kt}},requiresIfExists:["offset"]};function lc(m,a,h){h===void 0&&(h=!1);var g,A,C=De(a),O=De(a)&&function(j){var oe=j.getBoundingClientRect(),X=Ot(oe.width)/j.offsetWidth||1,re=Ot(oe.height)/j.offsetHeight||1;return X!==1||re!==1}(a),x=_t(a),B=Sn(m,O,h),z={scrollLeft:0,scrollTop:0},K={x:0,y:0};return(C||!C&&!h)&&((It(a)!=="body"||ys(x))&&(z=(g=a)!==lt(g)&&De(g)?{scrollLeft:(A=g).scrollLeft,scrollTop:A.scrollTop}:Ce(g)),De(a)?((K=Sn(a,!0)).x+=a.clientLeft,K.y+=a.clientTop):x&&(K.x=_s(x))),{x:B.left+z.scrollLeft-K.x,y:B.top+z.scrollTop-K.y,width:B.width,height:B.height}}function Oo(m){var a=new Map,h=new Set,g=[];function A(C){h.add(C.name),[].concat(C.requires||[],C.requiresIfExists||[]).forEach(function(O){if(!h.has(O)){var x=a.get(O);x&&A(x)}}),g.push(C)}return m.forEach(function(C){a.set(C.name,C)}),m.forEach(function(C){h.has(C.name)||A(C)}),g}var tr={placement:"bottom",modifiers:[],strategy:"absolute"};function Ts(){for(var m=arguments.length,a=new Array(m),h=0;h<m;h++)a[h]=arguments[h];return!a.some(function(g){return!(g&&typeof g.getBoundingClientRect=="function")})}function xr(m){m===void 0&&(m={});var a=m,h=a.defaultModifiers,g=h===void 0?[]:h,A=a.defaultOptions,C=A===void 0?tr:A;return function(O,x,B){B===void 0&&(B=C);var z,K,j={placement:"bottom",orderedModifiers:[],options:Object.assign({},tr,C),modifiersData:{},elements:{reference:O,popper:x},attributes:{},styles:{}},oe=[],X=!1,re={state:j,setOptions:function(ie){var Te=typeof ie=="function"?ie(j.options):ie;te(),j.options=Object.assign({},C,j.options,Te),j.scrollParents={reference:ut(O)?Zn(O):O.contextElement?Zn(O.contextElement):[],popper:Zn(x)};var Re,ue,_e=function(ae){var fe=Oo(ae);return ps.reduce(function(Ee,Ie){return Ee.concat(fe.filter(function(we){return we.phase===Ie}))},[])}((Re=[].concat(g,j.options.modifiers),ue=Re.reduce(function(ae,fe){var Ee=ae[fe.name];return ae[fe.name]=Ee?Object.assign({},Ee,fe,{options:Object.assign({},Ee.options,fe.options),data:Object.assign({},Ee.data,fe.data)}):fe,ae},{}),Object.keys(ue).map(function(ae){return ue[ae]})));return j.orderedModifiers=_e.filter(function(ae){return ae.enabled}),j.orderedModifiers.forEach(function(ae){var fe=ae.name,Ee=ae.options,Ie=Ee===void 0?{}:Ee,we=ae.effect;if(typeof we=="function"){var Ve=we({state:j,name:fe,instance:re,options:Ie});oe.push(Ve||function(){})}}),re.update()},forceUpdate:function(){if(!X){var ie=j.elements,Te=ie.reference,Re=ie.popper;if(Ts(Te,Re)){j.rects={reference:lc(Te,Xn(Re),j.options.strategy==="fixed"),popper:ms(Re)},j.reset=!1,j.placement=j.options.placement,j.orderedModifiers.forEach(function(we){return j.modifiersData[we.name]=Object.assign({},we.data)});for(var ue=0;ue<j.orderedModifiers.length;ue++)if(j.reset!==!0){var _e=j.orderedModifiers[ue],ae=_e.fn,fe=_e.options,Ee=fe===void 0?{}:fe,Ie=_e.name;typeof ae=="function"&&(j=ae({state:j,options:Ee,name:Ie,instance:re})||j)}else j.reset=!1,ue=-1}}},update:(z=function(){return new Promise(function(ie){re.forceUpdate(),ie(j)})},function(){return K||(K=new Promise(function(ie){Promise.resolve().then(function(){K=void 0,ie(z())})})),K}),destroy:function(){te(),X=!0}};if(!Ts(O,x))return re;function te(){oe.forEach(function(ie){return ie()}),oe=[]}return re.setOptions(B).then(function(ie){!X&&B.onFirstUpdate&&B.onFirstUpdate(ie)}),re}}var Is=xr(),bs=xr({defaultModifiers:[Ei,bi,Jn,Yn]}),Ai=xr({defaultModifiers:[Ei,bi,Jn,Yn,Vr,Do,Lr,Ro,Ii]});const Mr=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ds,afterRead:hs,afterWrite:To,applyStyles:Yn,arrow:Ro,auto:Pr,basePlacements:bn,beforeMain:_i,beforeRead:ls,beforeWrite:fs,bottom:nt,clippingParents:as,computeStyles:Jn,createPopper:Ai,createPopperBase:Is,createPopperLite:bs,detectOverflow:rt,end:Ht,eventListeners:Ei,flip:Do,hide:Ii,left:Be,main:yi,modifierPhases:ps,offset:Vr,placements:cs,popper:Dt,popperGenerator:xr,popperOffsets:bi,preventOverflow:Lr,read:us,reference:rn,right:Je,start:An,top:ze,variationPlacements:Dr,viewport:kr,write:wo},Symbol.toStringTag,{value:"Module"})),As="dropdown",on=".bs.dropdown",Wt=".data-api",No="ArrowUp",Cs="ArrowDown",Vo=`hide${on}`,Lo=`hidden${on}`,Ci=`show${on}`,dt=`shown${on}`,Rs=`click${on}${Wt}`,Ss=`keydown${on}${Wt}`,nr=`keyup${on}${Wt}`,o="show",u='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',f=`${u}.${o}`,_=".dropdown-menu",P=F()?"top-end":"top-start",D=F()?"top-start":"top-end",$=F()?"bottom-end":"bottom-start",ve=F()?"bottom-start":"bottom-end",je=F()?"left-start":"right-start",pe=F()?"right-start":"left-start",We={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ke={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ge extends Tt{constructor(a,h){super(a,h),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.next(this._element,_)[0]||Q.prev(this._element,_)[0]||Q.findOne(_,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return We}static get DefaultType(){return Ke}static get NAME(){return As}toggle(){return this._isShown()?this.hide():this.show()}show(){if(y(this._element)||this._isShown())return;const a={relatedTarget:this._element};if(!M.trigger(this._element,Ci,a).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const h of[].concat(...document.body.children))M.on(h,"mouseover",I);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(o),this._element.classList.add(o),M.trigger(this._element,dt,a)}}hide(){if(y(this._element)||!this._isShown())return;const a={relatedTarget:this._element};this._completeHide(a)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(a){if(!M.trigger(this._element,Vo,a).defaultPrevented){if("ontouchstart"in document.documentElement)for(const h of[].concat(...document.body.children))M.off(h,"mouseover",I);this._popper&&this._popper.destroy(),this._menu.classList.remove(o),this._element.classList.remove(o),this._element.setAttribute("aria-expanded","false"),Bt.removeDataAttribute(this._menu,"popper"),M.trigger(this._element,Lo,a),this._element.focus()}}_getConfig(a){if(typeof(a=super._getConfig(a)).reference=="object"&&!l(a.reference)&&typeof a.reference.getBoundingClientRect!="function")throw new TypeError(`${As.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return a}_createPopper(){if(Mr===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let a=this._element;this._config.reference==="parent"?a=this._parent:l(this._config.reference)?a=d(this._config.reference):typeof this._config.reference=="object"&&(a=this._config.reference);const h=this._getPopperConfig();this._popper=Ai(a,this._menu,h)}_isShown(){return this._menu.classList.contains(o)}_getPlacement(){const a=this._parent;if(a.classList.contains("dropend"))return je;if(a.classList.contains("dropstart"))return pe;if(a.classList.contains("dropup-center"))return"top";if(a.classList.contains("dropdown-center"))return"bottom";const h=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return a.classList.contains("dropup")?h?D:P:h?ve:$}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(h=>Number.parseInt(h,10)):typeof a=="function"?h=>a(h,this._element):a}_getPopperConfig(){const a={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Bt.setDataAttribute(this._menu,"popper","static"),a.modifiers=[{name:"applyStyles",enabled:!1}]),{...a,...G(this._config.popperConfig,[void 0,a])}}_selectMenuItem({key:a,target:h}){const g=Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(A=>p(A));g.length&&be(g,h,a===Cs,!g.includes(h)).focus()}static jQueryInterface(a){return this.each(function(){const h=Ge.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a]()}})}static clearMenus(a){if(a.button===2||a.type==="keyup"&&a.key!=="Tab")return;const h=Q.find(f);for(const g of h){const A=Ge.getInstance(g);if(!A||A._config.autoClose===!1)continue;const C=a.composedPath(),O=C.includes(A._menu);if(C.includes(A._element)||A._config.autoClose==="inside"&&!O||A._config.autoClose==="outside"&&O||A._menu.contains(a.target)&&(a.type==="keyup"&&a.key==="Tab"||/input|select|option|textarea|form/i.test(a.target.tagName)))continue;const x={relatedTarget:A._element};a.type==="click"&&(x.clickEvent=a),A._completeHide(x)}}static dataApiKeydownHandler(a){const h=/input|textarea/i.test(a.target.tagName),g=a.key==="Escape",A=[No,Cs].includes(a.key);if(!A&&!g||h&&!g)return;a.preventDefault();const C=this.matches(u)?this:Q.prev(this,u)[0]||Q.next(this,u)[0]||Q.findOne(u,a.delegateTarget.parentNode),O=Ge.getOrCreateInstance(C);if(A)return a.stopPropagation(),O.show(),void O._selectMenuItem(a);O._isShown()&&(a.stopPropagation(),O.hide(),C.focus())}}M.on(document,Ss,u,Ge.dataApiKeydownHandler),M.on(document,Ss,_,Ge.dataApiKeydownHandler),M.on(document,Rs,Ge.clearMenus),M.on(document,nr,Ge.clearMenus),M.on(document,Rs,u,function(m){m.preventDefault(),Ge.getOrCreateInstance(this).toggle()}),ee(Ge);const yt="backdrop",Fr="show",Ri=`mousedown.bs.${yt}`,Mm={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Fm={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class fu extends jt{constructor(a){super(),this._config=this._getConfig(a),this._isAppended=!1,this._element=null}static get Default(){return Mm}static get DefaultType(){return Fm}static get NAME(){return yt}show(a){if(!this._config.isVisible)return void G(a);this._append();const h=this._getElement();this._config.isAnimated&&N(h),h.classList.add(Fr),this._emulateAnimation(()=>{G(a)})}hide(a){this._config.isVisible?(this._getElement().classList.remove(Fr),this._emulateAnimation(()=>{this.dispose(),G(a)})):G(a)}dispose(){this._isAppended&&(M.off(this._element,Ri),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const a=document.createElement("div");a.className=this._config.className,this._config.isAnimated&&a.classList.add("fade"),this._element=a}return this._element}_configAfterMerge(a){return a.rootElement=d(a.rootElement),a}_append(){if(this._isAppended)return;const a=this._getElement();this._config.rootElement.append(a),M.on(a,Ri,()=>{G(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(a){ce(a,this._getElement(),this._config.isAnimated)}}const xo=".bs.focustrap",Um=`focusin${xo}`,$m=`keydown.tab${xo}`,pu="backward",Bm={autofocus:!0,trapElement:null},jm={autofocus:"boolean",trapElement:"element"};class mu extends jt{constructor(a){super(),this._config=this._getConfig(a),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Bm}static get DefaultType(){return jm}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),M.off(document,xo),M.on(document,Um,a=>this._handleFocusin(a)),M.on(document,$m,a=>this._handleKeydown(a)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,M.off(document,xo))}_handleFocusin(a){const{trapElement:h}=this._config;if(a.target===document||a.target===h||h.contains(a.target))return;const g=Q.focusableChildren(h);g.length===0?h.focus():this._lastTabNavDirection===pu?g[g.length-1].focus():g[0].focus()}_handleKeydown(a){a.key==="Tab"&&(this._lastTabNavDirection=a.shiftKey?pu:"forward")}}const gu=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_u=".sticky-top",Mo="padding-right",yu="margin-right";class uc{constructor(){this._element=document.body}getWidth(){const a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}hide(){const a=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Mo,h=>h+a),this._setElementAttributes(gu,Mo,h=>h+a),this._setElementAttributes(_u,yu,h=>h-a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Mo),this._resetElementAttributes(gu,Mo),this._resetElementAttributes(_u,yu)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(a,h,g){const A=this.getWidth();this._applyManipulationCallback(a,C=>{if(C!==this._element&&window.innerWidth>C.clientWidth+A)return;this._saveInitialAttribute(C,h);const O=window.getComputedStyle(C).getPropertyValue(h);C.style.setProperty(h,`${g(Number.parseFloat(O))}px`)})}_saveInitialAttribute(a,h){const g=a.style.getPropertyValue(h);g&&Bt.setDataAttribute(a,h,g)}_resetElementAttributes(a,h){this._applyManipulationCallback(a,g=>{const A=Bt.getDataAttribute(g,h);A!==null?(Bt.removeDataAttribute(g,h),g.style.setProperty(h,A)):g.style.removeProperty(h)})}_applyManipulationCallback(a,h){if(l(a))h(a);else for(const g of Q.find(a,this._element))h(g)}}const Vt=".bs.modal",qm=`hide${Vt}`,Hm=`hidePrevented${Vt}`,vu=`hidden${Vt}`,Eu=`show${Vt}`,zm=`shown${Vt}`,Wm=`resize${Vt}`,Km=`click.dismiss${Vt}`,Gm=`mousedown.dismiss${Vt}`,Qm=`keydown.dismiss${Vt}`,Ym=`click${Vt}.data-api`,wu="modal-open",Tu="show",hc="modal-static",Xm={backdrop:!0,focus:!0,keyboard:!0},Jm={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ur extends Tt{constructor(a,h){super(a,h),this._dialog=Q.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new uc,this._addEventListeners()}static get Default(){return Xm}static get DefaultType(){return Jm}static get NAME(){return"modal"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||this._isTransitioning||M.trigger(this._element,Eu,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(wu),this._adjustDialog(),this._backdrop.show(()=>this._showElement(a)))}hide(){this._isShown&&!this._isTransitioning&&(M.trigger(this._element,qm).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Tu),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){M.off(window,Vt),M.off(this._dialog,Vt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new fu({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new mu({trapElement:this._element})}_showElement(a){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const h=Q.findOne(".modal-body",this._dialog);h&&(h.scrollTop=0),N(this._element),this._element.classList.add(Tu),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,M.trigger(this._element,zm,{relatedTarget:a})},this._dialog,this._isAnimated())}_addEventListeners(){M.on(this._element,Qm,a=>{a.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),M.on(window,Wm,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),M.on(this._element,Gm,a=>{M.one(this._element,Km,h=>{this._element===a.target&&this._element===h.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(wu),this._resetAdjustments(),this._scrollBar.reset(),M.trigger(this._element,vu)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(M.trigger(this._element,Hm).defaultPrevented)return;const a=this._element.scrollHeight>document.documentElement.clientHeight,h=this._element.style.overflowY;h==="hidden"||this._element.classList.contains(hc)||(a||(this._element.style.overflowY="hidden"),this._element.classList.add(hc),this._queueCallback(()=>{this._element.classList.remove(hc),this._queueCallback(()=>{this._element.style.overflowY=h},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const a=this._element.scrollHeight>document.documentElement.clientHeight,h=this._scrollBar.getWidth(),g=h>0;if(g&&!a){const A=F()?"paddingLeft":"paddingRight";this._element.style[A]=`${h}px`}if(!g&&a){const A=F()?"paddingRight":"paddingLeft";this._element.style[A]=`${h}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(a,h){return this.each(function(){const g=Ur.getOrCreateInstance(this,a);if(typeof a=="string"){if(g[a]===void 0)throw new TypeError(`No method named "${a}"`);g[a](h)}})}}M.on(document,Ym,'[data-bs-toggle="modal"]',function(m){const a=Q.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&m.preventDefault(),M.one(a,Eu,g=>{g.defaultPrevented||M.one(a,vu,()=>{p(this)&&this.focus()})});const h=Q.findOne(".modal.show");h&&Ur.getInstance(h).hide(),Ur.getOrCreateInstance(a).toggle(this)}),oi(Ur),ee(Ur);const kn=".bs.offcanvas",Iu=".data-api",Zm=`load${kn}${Iu}`,bu="show",Au="showing",Cu="hiding",Ru=".offcanvas.show",eg=`show${kn}`,tg=`shown${kn}`,ng=`hide${kn}`,Su=`hidePrevented${kn}`,Pu=`hidden${kn}`,rg=`resize${kn}`,ig=`click${kn}${Iu}`,sg=`keydown.dismiss${kn}`,og={backdrop:!0,keyboard:!0,scroll:!1},ag={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Dn extends Tt{constructor(a,h){super(a,h),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return og}static get DefaultType(){return ag}static get NAME(){return"offcanvas"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||M.trigger(this._element,eg,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new uc().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Au),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(bu),this._element.classList.remove(Au),M.trigger(this._element,tg,{relatedTarget:a})},this._element,!0))}hide(){this._isShown&&(M.trigger(this._element,ng).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Cu),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(bu,Cu),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new uc().reset(),M.trigger(this._element,Pu)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const a=!!this._config.backdrop;return new fu({className:"offcanvas-backdrop",isVisible:a,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:a?()=>{this._config.backdrop!=="static"?this.hide():M.trigger(this._element,Su)}:null})}_initializeFocusTrap(){return new mu({trapElement:this._element})}_addEventListeners(){M.on(this._element,sg,a=>{a.key==="Escape"&&(this._config.keyboard?this.hide():M.trigger(this._element,Su))})}static jQueryInterface(a){return this.each(function(){const h=Dn.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a](this)}})}}M.on(document,ig,'[data-bs-toggle="offcanvas"]',function(m){const a=Q.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&m.preventDefault(),y(this))return;M.one(a,Pu,()=>{p(this)&&this.focus()});const h=Q.findOne(Ru);h&&h!==a&&Dn.getInstance(h).hide(),Dn.getOrCreateInstance(a).toggle(this)}),M.on(window,Zm,()=>{for(const m of Q.find(Ru))Dn.getOrCreateInstance(m).show()}),M.on(window,rg,()=>{for(const m of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(m).position!=="fixed"&&Dn.getOrCreateInstance(m).hide()}),oi(Dn),ee(Dn);const ku={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},cg=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),lg=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,ug=(m,a)=>{const h=m.nodeName.toLowerCase();return a.includes(h)?!cg.has(h)||!!lg.test(m.nodeValue):a.filter(g=>g instanceof RegExp).some(g=>g.test(h))},hg={allowList:ku,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},dg={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},fg={entry:"(string|element|function|null)",selector:"(string|element)"};class pg extends jt{constructor(a){super(),this._config=this._getConfig(a)}static get Default(){return hg}static get DefaultType(){return dg}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(a=>this._resolvePossibleFunction(a)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(a){return this._checkContent(a),this._config.content={...this._config.content,...a},this}toHtml(){const a=document.createElement("div");a.innerHTML=this._maybeSanitize(this._config.template);for(const[A,C]of Object.entries(this._config.content))this._setContent(a,C,A);const h=a.children[0],g=this._resolvePossibleFunction(this._config.extraClass);return g&&h.classList.add(...g.split(" ")),h}_typeCheckConfig(a){super._typeCheckConfig(a),this._checkContent(a.content)}_checkContent(a){for(const[h,g]of Object.entries(a))super._typeCheckConfig({selector:h,entry:g},fg)}_setContent(a,h,g){const A=Q.findOne(g,a);A&&((h=this._resolvePossibleFunction(h))?l(h)?this._putElementInTemplate(d(h),A):this._config.html?A.innerHTML=this._maybeSanitize(h):A.textContent=h:A.remove())}_maybeSanitize(a){return this._config.sanitize?function(h,g,A){if(!h.length)return h;if(A&&typeof A=="function")return A(h);const C=new window.DOMParser().parseFromString(h,"text/html"),O=[].concat(...C.body.querySelectorAll("*"));for(const x of O){const B=x.nodeName.toLowerCase();if(!Object.keys(g).includes(B)){x.remove();continue}const z=[].concat(...x.attributes),K=[].concat(g["*"]||[],g[B]||[]);for(const j of z)ug(j,K)||x.removeAttribute(j.nodeName)}return C.body.innerHTML}(a,this._config.allowList,this._config.sanitizeFn):a}_resolvePossibleFunction(a){return G(a,[void 0,this])}_putElementInTemplate(a,h){if(this._config.html)return h.innerHTML="",void h.append(a);h.textContent=a.textContent}}const mg=new Set(["sanitize","allowList","sanitizeFn"]),dc="fade",Fo="show",gg=".tooltip-inner",Du=".modal",Ou="hide.bs.modal",Ps="hover",fc="focus",_g={AUTO:"auto",TOP:"top",RIGHT:F()?"left":"right",BOTTOM:"bottom",LEFT:F()?"right":"left"},yg={allowList:ku,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},vg={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class $r extends Tt{constructor(a,h){if(Mr===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(a,h),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return yg}static get DefaultType(){return vg}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),M.off(this._element.closest(Du),Ou,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const a=M.trigger(this._element,this.constructor.eventName("show")),h=(T(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(a.defaultPrevented||!h)return;this._disposePopper();const g=this._getTipElement();this._element.setAttribute("aria-describedby",g.getAttribute("id"));const{container:A}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(A.append(g),M.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(g),g.classList.add(Fo),"ontouchstart"in document.documentElement)for(const C of[].concat(...document.body.children))M.on(C,"mouseover",I);this._queueCallback(()=>{M.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!M.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Fo),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))M.off(a,"mouseover",I);this._activeTrigger.click=!1,this._activeTrigger[fc]=!1,this._activeTrigger[Ps]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),M.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(a){const h=this._getTemplateFactory(a).toHtml();if(!h)return null;h.classList.remove(dc,Fo),h.classList.add(`bs-${this.constructor.NAME}-auto`);const g=(A=>{do A+=Math.floor(1e6*Math.random());while(document.getElementById(A));return A})(this.constructor.NAME).toString();return h.setAttribute("id",g),this._isAnimated()&&h.classList.add(dc),h}setContent(a){this._newContent=a,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(a){return this._templateFactory?this._templateFactory.changeContent(a):this._templateFactory=new pg({...this._config,content:a,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[gg]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(a){return this.constructor.getOrCreateInstance(a.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(dc)}_isShown(){return this.tip&&this.tip.classList.contains(Fo)}_createPopper(a){const h=G(this._config.placement,[this,a,this._element]),g=_g[h.toUpperCase()];return Ai(this._element,a,this._getPopperConfig(g))}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(h=>Number.parseInt(h,10)):typeof a=="function"?h=>a(h,this._element):a}_resolvePossibleFunction(a){return G(a,[this._element,this._element])}_getPopperConfig(a){const h={placement:a,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:g=>{this._getTipElement().setAttribute("data-popper-placement",g.state.placement)}}]};return{...h,...G(this._config.popperConfig,[void 0,h])}}_setListeners(){const a=this._config.trigger.split(" ");for(const h of a)if(h==="click")M.on(this._element,this.constructor.eventName("click"),this._config.selector,g=>{this._initializeOnDelegatedTarget(g).toggle()});else if(h!=="manual"){const g=h===Ps?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),A=h===Ps?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");M.on(this._element,g,this._config.selector,C=>{const O=this._initializeOnDelegatedTarget(C);O._activeTrigger[C.type==="focusin"?fc:Ps]=!0,O._enter()}),M.on(this._element,A,this._config.selector,C=>{const O=this._initializeOnDelegatedTarget(C);O._activeTrigger[C.type==="focusout"?fc:Ps]=O._element.contains(C.relatedTarget),O._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},M.on(this._element.closest(Du),Ou,this._hideModalHandler)}_fixTitle(){const a=this._element.getAttribute("title");a&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",a),this._element.setAttribute("data-bs-original-title",a),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(a,h){clearTimeout(this._timeout),this._timeout=setTimeout(a,h)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(a){const h=Bt.getDataAttributes(this._element);for(const g of Object.keys(h))mg.has(g)&&delete h[g];return a={...h,...typeof a=="object"&&a?a:{}},a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a.container=a.container===!1?document.body:d(a.container),typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),typeof a.title=="number"&&(a.title=a.title.toString()),typeof a.content=="number"&&(a.content=a.content.toString()),a}_getDelegateConfig(){const a={};for(const[h,g]of Object.entries(this._config))this.constructor.Default[h]!==g&&(a[h]=g);return a.selector=!1,a.trigger="manual",a}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(a){return this.each(function(){const h=$r.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a]()}})}}ee($r);const Eg=".popover-header",wg=".popover-body",Tg={...$r.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ig={...$r.DefaultType,content:"(null|string|element|function)"};class Uo extends $r{static get Default(){return Tg}static get DefaultType(){return Ig}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Eg]:this._getTitle(),[wg]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(a){return this.each(function(){const h=Uo.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a]()}})}}ee(Uo);const pc=".bs.scrollspy",bg=`activate${pc}`,Nu=`click${pc}`,Ag=`load${pc}.data-api`,Si="active",mc="[href]",Vu=".nav-link",Cg=`${Vu}, .nav-item > ${Vu}, .list-group-item`,Rg={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Sg={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ks extends Tt{constructor(a,h){super(a,h),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Rg}static get DefaultType(){return Sg}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const a of this._observableSections.values())this._observer.observe(a)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(a){return a.target=d(a.target)||document.body,a.rootMargin=a.offset?`${a.offset}px 0px -30%`:a.rootMargin,typeof a.threshold=="string"&&(a.threshold=a.threshold.split(",").map(h=>Number.parseFloat(h))),a}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(M.off(this._config.target,Nu),M.on(this._config.target,Nu,mc,a=>{const h=this._observableSections.get(a.target.hash);if(h){a.preventDefault();const g=this._rootElement||window,A=h.offsetTop-this._element.offsetTop;if(g.scrollTo)return void g.scrollTo({top:A,behavior:"smooth"});g.scrollTop=A}}))}_getNewObserver(){const a={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(h=>this._observerCallback(h),a)}_observerCallback(a){const h=O=>this._targetLinks.get(`#${O.target.id}`),g=O=>{this._previousScrollData.visibleEntryTop=O.target.offsetTop,this._process(h(O))},A=(this._rootElement||document.documentElement).scrollTop,C=A>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=A;for(const O of a){if(!O.isIntersecting){this._activeTarget=null,this._clearActiveClass(h(O));continue}const x=O.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(C&&x){if(g(O),!A)return}else C||x||g(O)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const a=Q.find(mc,this._config.target);for(const h of a){if(!h.hash||y(h))continue;const g=Q.findOne(decodeURI(h.hash),this._element);p(g)&&(this._targetLinks.set(decodeURI(h.hash),h),this._observableSections.set(h.hash,g))}}_process(a){this._activeTarget!==a&&(this._clearActiveClass(this._config.target),this._activeTarget=a,a.classList.add(Si),this._activateParents(a),M.trigger(this._element,bg,{relatedTarget:a}))}_activateParents(a){if(a.classList.contains("dropdown-item"))Q.findOne(".dropdown-toggle",a.closest(".dropdown")).classList.add(Si);else for(const h of Q.parents(a,".nav, .list-group"))for(const g of Q.prev(h,Cg))g.classList.add(Si)}_clearActiveClass(a){a.classList.remove(Si);const h=Q.find(`${mc}.${Si}`,a);for(const g of h)g.classList.remove(Si)}static jQueryInterface(a){return this.each(function(){const h=ks.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a]()}})}}M.on(window,Ag,()=>{for(const m of Q.find('[data-bs-spy="scroll"]'))ks.getOrCreateInstance(m)}),ee(ks);const Br=".bs.tab",Pg=`hide${Br}`,kg=`hidden${Br}`,Dg=`show${Br}`,Og=`shown${Br}`,Ng=`click${Br}`,Vg=`keydown${Br}`,Lg=`load${Br}`,xg="ArrowLeft",Lu="ArrowRight",Mg="ArrowUp",xu="ArrowDown",gc="Home",Mu="End",jr="active",Fu="fade",_c="show",Uu=".dropdown-toggle",yc=`:not(${Uu})`,$u='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',vc=`.nav-link${yc}, .list-group-item${yc}, [role="tab"]${yc}, ${$u}`,Fg=`.${jr}[data-bs-toggle="tab"], .${jr}[data-bs-toggle="pill"], .${jr}[data-bs-toggle="list"]`;class qr extends Tt{constructor(a){super(a),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),M.on(this._element,Vg,h=>this._keydown(h)))}static get NAME(){return"tab"}show(){const a=this._element;if(this._elemIsActive(a))return;const h=this._getActiveElem(),g=h?M.trigger(h,Pg,{relatedTarget:a}):null;M.trigger(a,Dg,{relatedTarget:h}).defaultPrevented||g&&g.defaultPrevented||(this._deactivate(h,a),this._activate(a,h))}_activate(a,h){a&&(a.classList.add(jr),this._activate(Q.getElementFromSelector(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.removeAttribute("tabindex"),a.setAttribute("aria-selected",!0),this._toggleDropDown(a,!0),M.trigger(a,Og,{relatedTarget:h})):a.classList.add(_c)},a,a.classList.contains(Fu)))}_deactivate(a,h){a&&(a.classList.remove(jr),a.blur(),this._deactivate(Q.getElementFromSelector(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.setAttribute("aria-selected",!1),a.setAttribute("tabindex","-1"),this._toggleDropDown(a,!1),M.trigger(a,kg,{relatedTarget:h})):a.classList.remove(_c)},a,a.classList.contains(Fu)))}_keydown(a){if(![xg,Lu,Mg,xu,gc,Mu].includes(a.key))return;a.stopPropagation(),a.preventDefault();const h=this._getChildren().filter(A=>!y(A));let g;if([gc,Mu].includes(a.key))g=h[a.key===gc?0:h.length-1];else{const A=[Lu,xu].includes(a.key);g=be(h,a.target,A,!0)}g&&(g.focus({preventScroll:!0}),qr.getOrCreateInstance(g).show())}_getChildren(){return Q.find(vc,this._parent)}_getActiveElem(){return this._getChildren().find(a=>this._elemIsActive(a))||null}_setInitialAttributes(a,h){this._setAttributeIfNotExists(a,"role","tablist");for(const g of h)this._setInitialAttributesOnChild(g)}_setInitialAttributesOnChild(a){a=this._getInnerElement(a);const h=this._elemIsActive(a),g=this._getOuterElement(a);a.setAttribute("aria-selected",h),g!==a&&this._setAttributeIfNotExists(g,"role","presentation"),h||a.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(a,"role","tab"),this._setInitialAttributesOnTargetPanel(a)}_setInitialAttributesOnTargetPanel(a){const h=Q.getElementFromSelector(a);h&&(this._setAttributeIfNotExists(h,"role","tabpanel"),a.id&&this._setAttributeIfNotExists(h,"aria-labelledby",`${a.id}`))}_toggleDropDown(a,h){const g=this._getOuterElement(a);if(!g.classList.contains("dropdown"))return;const A=(C,O)=>{const x=Q.findOne(C,g);x&&x.classList.toggle(O,h)};A(Uu,jr),A(".dropdown-menu",_c),g.setAttribute("aria-expanded",h)}_setAttributeIfNotExists(a,h,g){a.hasAttribute(h)||a.setAttribute(h,g)}_elemIsActive(a){return a.classList.contains(jr)}_getInnerElement(a){return a.matches(vc)?a:Q.findOne(vc,a)}_getOuterElement(a){return a.closest(".nav-item, .list-group-item")||a}static jQueryInterface(a){return this.each(function(){const h=qr.getOrCreateInstance(this);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a]()}})}}M.on(document,Ng,$u,function(m){["A","AREA"].includes(this.tagName)&&m.preventDefault(),y(this)||qr.getOrCreateInstance(this).show()}),M.on(window,Lg,()=>{for(const m of Q.find(Fg))qr.getOrCreateInstance(m)}),ee(qr);const rr=".bs.toast",Ug=`mouseover${rr}`,$g=`mouseout${rr}`,Bg=`focusin${rr}`,jg=`focusout${rr}`,qg=`hide${rr}`,Hg=`hidden${rr}`,zg=`show${rr}`,Wg=`shown${rr}`,Bu="hide",$o="show",Bo="showing",Kg={animation:"boolean",autohide:"boolean",delay:"number"},Gg={animation:!0,autohide:!0,delay:5e3};class Ds extends Tt{constructor(a,h){super(a,h),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Gg}static get DefaultType(){return Kg}static get NAME(){return"toast"}show(){M.trigger(this._element,zg).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Bu),N(this._element),this._element.classList.add($o,Bo),this._queueCallback(()=>{this._element.classList.remove(Bo),M.trigger(this._element,Wg),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(M.trigger(this._element,qg).defaultPrevented||(this._element.classList.add(Bo),this._queueCallback(()=>{this._element.classList.add(Bu),this._element.classList.remove(Bo,$o),M.trigger(this._element,Hg)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove($o),super.dispose()}isShown(){return this._element.classList.contains($o)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(a,h){switch(a.type){case"mouseover":case"mouseout":this._hasMouseInteraction=h;break;case"focusin":case"focusout":this._hasKeyboardInteraction=h}if(h)return void this._clearTimeout();const g=a.relatedTarget;this._element===g||this._element.contains(g)||this._maybeScheduleHide()}_setListeners(){M.on(this._element,Ug,a=>this._onInteraction(a,!0)),M.on(this._element,$g,a=>this._onInteraction(a,!1)),M.on(this._element,Bg,a=>this._onInteraction(a,!0)),M.on(this._element,jg,a=>this._onInteraction(a,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(a){return this.each(function(){const h=Ds.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a](this)}})}}return oi(Ds),ee(Ds),{Alert:vn,Button:En,Carousel:In,Collapse:ct,Dropdown:Ge,Modal:Ur,Offcanvas:Dn,Popover:Uo,ScrollSpy:ks,Tab:qr,Toast:Ds,Tooltip:$r}})}(Xo)),Xo.exports}i_();const s_=()=>{};var th={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},o_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],c=n[t++],l=n[t++],d=((i&7)<<18|(s&63)<<12|(c&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const s=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|c&63)}}return e.join("")},Bd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],c=i+1<n.length,l=c?n[i+1]:0,d=i+2<n.length,p=d?n[i+2]:0,y=s>>2,T=(s&3)<<4|l>>4;let I=(l&15)<<2|p>>6,N=p&63;d||(N=64,c||(I=64)),r.push(t[y],t[T],t[I],t[N])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($d(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):o_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const p=i<n.length?t[n.charAt(i)]:64;++i;const T=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||p==null||T==null)throw new a_;const I=s<<2|l>>4;if(r.push(I),p!==64){const N=l<<4&240|p>>2;if(r.push(N),T!==64){const U=p<<6&192|T;r.push(U)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class a_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c_=function(n){const e=$d(n);return Bd.encodeByteArray(e,!0)},ca=function(n){return c_(n).replace(/\./g,"")},jd=function(n){try{return Bd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=()=>l_().__FIREBASE_DEFAULTS__,h_=()=>{if(typeof process>"u"||typeof th>"u")return;const n=th.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},d_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jd(n[1]);return e&&JSON.parse(e)},Da=()=>{try{return s_()||u_()||h_()||d_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qd=n=>{var e,t;return(t=(e=Da())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},f_=n=>{const e=qd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Hd=()=>{var n;return(n=Da())===null||n===void 0?void 0:n.config},zd=n=>{var e;return(e=Da())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n){return n.endsWith(".cloudworkstations.dev")}async function Wd(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ca(JSON.stringify(t)),ca(JSON.stringify(c)),""].join(".")}const Fs={};function g_(){const n={prod:[],emulator:[]};for(const e of Object.keys(Fs))Fs[e]?n.emulator.push(e):n.prod.push(e);return n}function __(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let nh=!1;function Kd(n,e){if(typeof window>"u"||typeof document>"u"||!zi(window.location.host)||Fs[n]===e||Fs[n]||nh)return;Fs[n]=e;function t(I){return`__firebase__banner__${I}`}const r="__firebase__banner",s=g_().prod.length>0;function c(){const I=document.getElementById(r);I&&I.remove()}function l(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function d(I,N){I.setAttribute("width","24"),I.setAttribute("id",N),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function p(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{nh=!0,c()},I}function y(I,N){I.setAttribute("id",N),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=__(r),N=t("text"),U=document.getElementById(N)||document.createElement("span"),H=t("learnmore"),F=document.getElementById(H)||document.createElement("a"),ee=t("preprendIcon"),G=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ce=I.element;l(ce),y(F,H);const be=p();d(G,ee),ce.append(G,U,F,be),document.body.appendChild(ce)}s?(U.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function y_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function v_(){var n;const e=(n=Da())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function E_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function w_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function T_(){const n=at();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function I_(){return!v_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qd(){try{return typeof indexedDB=="object"}catch{return!1}}function Yd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function b_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="FirebaseError";class Zt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=A_,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],c=s?C_(s,r):"Error",l=`${this.serviceName}: ${c} (${i}).`;return new Zt(i,l,r)}}function C_(n,e){return n.replace(R_,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const R_=/\{\$([^}]+)}/g;function S_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function mr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],c=e[i];if(rh(s)&&rh(c)){if(!mr(s,c))return!1}else if(s!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function rh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Os(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ns(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function P_(n,e){const t=new k_(n,e);return t.subscribe.bind(t)}class k_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");D_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ic),i.error===void 0&&(i.error=Ic),i.complete===void 0&&(i.complete=Ic);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ic(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=1e3,N_=2,V_=4*60*60*1e3,L_=.5;function ih(n,e=O_,t=N_){const r=e*Math.pow(t,n),i=Math.round(L_*r*(Math.random()-.5)*2);return Math.min(V_,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(n){return n&&n._delegate?n._delegate:n}class Xt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new p_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(F_(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&c.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const c=this.instances.get(i);return c&&e(c,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:M_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function M_(n){return n===zr?void 0:n}function F_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new x_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const $_={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},B_=he.INFO,j_={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},q_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=j_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oa{constructor(e){this.name=e,this._logLevel=B_,this._logHandler=q_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const H_=(n,e)=>e.some(t=>n instanceof t);let sh,oh;function z_(){return sh||(sh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W_(){return oh||(oh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xd=new WeakMap,Mc=new WeakMap,Jd=new WeakMap,bc=new WeakMap,ul=new WeakMap;function K_(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",c)},s=()=>{t(hr(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Xd.set(t,n)}).catch(()=>{}),ul.set(e,n),e}function G_(n){if(Mc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",c),n.removeEventListener("abort",c)},s=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",c),n.addEventListener("abort",c)});Mc.set(n,e)}let Fc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Mc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Jd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return hr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Q_(n){Fc=n(Fc)}function Y_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ac(this),e,...t);return Jd.set(r,e.sort?e.sort():[e]),hr(r)}:W_().includes(n)?function(...e){return n.apply(Ac(this),e),hr(Xd.get(this))}:function(...e){return hr(n.apply(Ac(this),e))}}function X_(n){return typeof n=="function"?Y_(n):(n instanceof IDBTransaction&&G_(n),H_(n,z_())?new Proxy(n,Fc):n)}function hr(n){if(n instanceof IDBRequest)return K_(n);if(bc.has(n))return bc.get(n);const e=X_(n);return e!==n&&(bc.set(n,e),ul.set(e,n)),e}const Ac=n=>ul.get(n);function Zd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const c=indexedDB.open(n,e),l=hr(c);return r&&c.addEventListener("upgradeneeded",d=>{r(hr(c.result),d.oldVersion,d.newVersion,hr(c.transaction),d)}),t&&c.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),l.then(d=>{s&&d.addEventListener("close",()=>s()),i&&d.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),l}const J_=["get","getKey","getAll","getAllKeys","count"],Z_=["put","add","delete","clear"],Cc=new Map;function ah(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Cc.get(e))return Cc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Z_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||J_.includes(t)))return;const s=async function(c,...l){const d=this.transaction(c,i?"readwrite":"readonly");let p=d.store;return r&&(p=p.index(l.shift())),(await Promise.all([p[t](...l),i&&d.done]))[0]};return Cc.set(e,s),s}Q_(n=>({...n,get:(e,t,r)=>ah(e,t)||n.get(e,t,r),has:(e,t)=>!!ah(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ty(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ty(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uc="@firebase/app",ch="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Oa("@firebase/app"),ny="@firebase/app-compat",ry="@firebase/analytics-compat",iy="@firebase/analytics",sy="@firebase/app-check-compat",oy="@firebase/app-check",ay="@firebase/auth",cy="@firebase/auth-compat",ly="@firebase/database",uy="@firebase/data-connect",hy="@firebase/database-compat",dy="@firebase/functions",fy="@firebase/functions-compat",py="@firebase/installations",my="@firebase/installations-compat",gy="@firebase/messaging",_y="@firebase/messaging-compat",yy="@firebase/performance",vy="@firebase/performance-compat",Ey="@firebase/remote-config",wy="@firebase/remote-config-compat",Ty="@firebase/storage",Iy="@firebase/storage-compat",by="@firebase/firestore",Ay="@firebase/ai",Cy="@firebase/firestore-compat",Ry="firebase",Sy="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="[DEFAULT]",Py={[Uc]:"fire-core",[ny]:"fire-core-compat",[iy]:"fire-analytics",[ry]:"fire-analytics-compat",[oy]:"fire-app-check",[sy]:"fire-app-check-compat",[ay]:"fire-auth",[cy]:"fire-auth-compat",[ly]:"fire-rtdb",[uy]:"fire-data-connect",[hy]:"fire-rtdb-compat",[dy]:"fire-fn",[fy]:"fire-fn-compat",[py]:"fire-iid",[my]:"fire-iid-compat",[gy]:"fire-fcm",[_y]:"fire-fcm-compat",[yy]:"fire-perf",[vy]:"fire-perf-compat",[Ey]:"fire-rc",[wy]:"fire-rc-compat",[Ty]:"fire-gcs",[Iy]:"fire-gcs-compat",[by]:"fire-fst",[Cy]:"fire-fst-compat",[Ay]:"fire-vertex","fire-js":"fire-js",[Ry]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Map,ky=new Map,Bc=new Map;function lh(n,e){try{n.container.addComponent(e)}catch(t){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function fn(n){const e=n.name;if(Bc.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;Bc.set(e,n);for(const t of la.values())lh(t,n);for(const t of ky.values())lh(t,n);return!0}function ni(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Rt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new ti("app","Firebase",Dy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=Sy;function ef(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$c,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(t||(t=Hd()),!t)throw dr.create("no-options");const s=la.get(i);if(s){if(mr(t,s.options)&&mr(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const c=new U_(i);for(const d of Bc.values())c.addComponent(d);const l=new Oy(t,r,c);return la.set(i,l),l}function hl(n=$c){const e=la.get(n);if(!e&&n===$c&&Hd())return ef();if(!e)throw dr.create("no-app",{appName:n});return e}function Ft(n,e,t){var r;let i=(r=Py[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),c=e.match(/\s|\//);if(s||c){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(l.join(" "));return}fn(new Xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="firebase-heartbeat-database",Vy=1,zs="firebase-heartbeat-store";let Rc=null;function tf(){return Rc||(Rc=Zd(Ny,Vy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zs)}catch(t){console.warn(t)}}}}).catch(n=>{throw dr.create("idb-open",{originalErrorMessage:n.message})})),Rc}async function Ly(n){try{const t=(await tf()).transaction(zs),r=await t.objectStore(zs).get(nf(n));return await t.done,r}catch(e){if(e instanceof Zt)xn.warn(e.message);else{const t=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(t.message)}}}async function uh(n,e){try{const r=(await tf()).transaction(zs,"readwrite");await r.objectStore(zs).put(e,nf(n)),await r.done}catch(t){if(t instanceof Zt)xn.warn(t.message);else{const r=dr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xn.warn(r.message)}}}function nf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=1024,My=30;class Fy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $y(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(c=>c.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>My){const c=By(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hh(),{heartbeatsToSend:r,unsentEntries:i}=Uy(this._heartbeatsCache.heartbeats),s=ca(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return xn.warn(t),""}}}function hh(){return new Date().toISOString().substring(0,10)}function Uy(n,e=xy){const t=[];let r=n.slice();for(const i of n){const s=t.find(c=>c.agent===i.agent);if(s){if(s.dates.push(i.date),dh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),dh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class $y{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qd()?Yd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ly(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dh(n){return ca(JSON.stringify({version:2,heartbeats:n})).length}function By(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(n){fn(new Xt("platform-logger",e=>new ey(e),"PRIVATE")),fn(new Xt("heartbeat",e=>new Fy(e),"PRIVATE")),Ft(Uc,ch,n),Ft(Uc,ch,"esm2017"),Ft("fire-js","")}jy("");var qy="firebase",Hy="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(qy,Hy,"app");function dl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function rf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zy=rf,sf=new ti("auth","Firebase",rf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new Oa("@firebase/auth");function Wy(n,...e){ua.logLevel<=he.WARN&&ua.warn(`Auth (${Wi}): ${n}`,...e)}function Jo(n,...e){ua.logLevel<=he.ERROR&&ua.error(`Auth (${Wi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,...e){throw pl(n,...e)}function Qt(n,...e){return pl(n,...e)}function fl(n,e,t){const r=Object.assign(Object.assign({},zy()),{[e]:t});return new ti("auth","Firebase",r).create(e,{appName:n.name})}function Vn(n){return fl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ky(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ut(n,"argument-error"),fl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return sf.create(n,...e)}function J(n,e,...t){if(!n)throw pl(e,...t)}function On(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Jo(e),new Error(e)}function Mn(n,e){n||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Gy(){return fh()==="http:"||fh()==="https:"}function fh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gy()||Gd()||"connection"in navigator)?navigator.onLine:!0}function Yy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mn(t>e,"Short delay should be less than long delay!"),this.isMobile=y_()||w_()}get(){return Qy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(n,e){Mn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Zy=new to(3e4,6e4);function gn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function _n(n,e,t,r,i={}){return af(n,i,async()=>{let s={},c={};r&&(e==="GET"?c=r:s={body:JSON.stringify(r)});const l=eo(Object.assign({key:n.config.apiKey},c)).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:d},s);return E_()||(p.referrerPolicy="no-referrer"),n.emulatorConfig&&zi(n.emulatorConfig.host)&&(p.credentials="include"),of.fetch()(await cf(n,n.config.apiHost,t,l),p)})}async function af(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xy),e);try{const i=new tv(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await s.json();if("needConfirmation"in c)throw zo(n,"account-exists-with-different-credential",c);if(s.ok&&!("errorMessage"in c))return c;{const l=s.ok?c.errorMessage:c.error.message,[d,p]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw zo(n,"credential-already-in-use",c);if(d==="EMAIL_EXISTS")throw zo(n,"email-already-in-use",c);if(d==="USER_DISABLED")throw zo(n,"user-disabled",c);const y=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw fl(n,y,p);Ut(n,y)}}catch(i){if(i instanceof Zt)throw i;Ut(n,"network-request-failed",{message:String(i)})}}async function no(n,e,t,r,i={}){const s=await _n(n,e,t,r,i);return"mfaPendingCredential"in s&&Ut(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function cf(n,e,t,r){const i=`${e}${t}?${r}`,s=n,c=s.config.emulator?ml(n.config,i):`${n.config.apiScheme}://${i}`;return Jy.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(c).toString():c}function ev(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),Zy.get())})}}function zo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Qt(n,e,r);return i.customData._tokenResponse=t,i}function ph(n){return n!==void 0&&n.enterprise!==void 0}class nv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ev(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rv(n,e){return _n(n,"GET","/v2/recaptchaConfig",gn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iv(n,e){return _n(n,"POST","/v1/accounts:delete",e)}async function ha(n,e){return _n(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sv(n,e=!1){const t=xe(n),r=await t.getIdToken(e),i=gl(r);J(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,c=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Us(Sc(i.auth_time)),issuedAtTime:Us(Sc(i.iat)),expirationTime:Us(Sc(i.exp)),signInProvider:c||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sc(n){return Number(n)*1e3}function gl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Jo("JWT malformed, contained fewer than 3 sections"),null;try{const i=jd(t);return i?JSON.parse(i):(Jo("Failed to decode base64 JWT payload"),null)}catch(i){return Jo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mh(n){const e=gl(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Zt&&ov(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ov({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Ws(n,ha(t,{idToken:r}));J(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const c=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lf(s.providerUserInfo):[],l=lv(n.providerData,c),d=n.isAnonymous,p=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),y=d?p:!1,T={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new qc(s.createdAt,s.lastLoginAt),isAnonymous:y};Object.assign(n,T)}async function cv(n){const e=xe(n);await da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lf(n){return n.map(e=>{var{providerId:t}=e,r=dl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(n,e){const t=await af(n,{},async()=>{const r=eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,c=await cf(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:l,body:r};return n.emulatorConfig&&zi(n.emulatorConfig.host)&&(d.credentials="include"),of.fetch()(c,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hv(n,e){return _n(n,"POST","/v2/accounts:revokeToken",gn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=mh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await uv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,c=new Vi;return r&&(J(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),c.expirationTime=s),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=dl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new av(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ws(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sv(this,e)}reload(){return cv(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await da(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await Ws(this,iv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,c,l,d,p,y;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(i=t.email)!==null&&i!==void 0?i:void 0,N=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,U=(c=t.photoURL)!==null&&c!==void 0?c:void 0,H=(l=t.tenantId)!==null&&l!==void 0?l:void 0,F=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,ee=(p=t.createdAt)!==null&&p!==void 0?p:void 0,G=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ce,emailVerified:be,isAnonymous:gt,providerData:Pe,stsTokenManager:R}=t;J(ce&&R,e,"internal-error");const v=Vi.fromJSON(this.name,R);J(typeof ce=="string",e,"internal-error"),sr(T,e.name),sr(I,e.name),J(typeof be=="boolean",e,"internal-error"),J(typeof gt=="boolean",e,"internal-error"),sr(N,e.name),sr(U,e.name),sr(H,e.name),sr(F,e.name),sr(ee,e.name),sr(G,e.name);const w=new Gt({uid:ce,auth:e,email:I,emailVerified:be,displayName:T,isAnonymous:gt,photoURL:U,phoneNumber:N,tenantId:H,stsTokenManager:v,createdAt:ee,lastLoginAt:G});return Pe&&Array.isArray(Pe)&&(w.providerData=Pe.map(b=>Object.assign({},b))),F&&(w._redirectEventId=F),w}static async _fromIdTokenResponse(e,t,r=!1){const i=new Vi;i.updateFromServerResponse(t);const s=new Gt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await da(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?lf(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Vi;l.updateFromIdToken(r);const d=new Gt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:c}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new qc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(d,p),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new Map;function Nn(n){Mn(n instanceof Function,"Expected a class definition");let e=gh.get(n);return e?(Mn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}uf.type="NONE";const _h=uf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n,e,t){return`firebase:${n}:${e}:${t}`}class Li{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zo("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ha(this.auth,{idToken:e}).catch(()=>{});return t?Gt._fromGetAccountInfoResponse(this.auth,t,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Li(Nn(_h),e,r);const i=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let s=i[0]||Nn(_h);const c=Zo(r,e.config.apiKey,e.name);let l=null;for(const p of t)try{const y=await p._get(c);if(y){let T;if(typeof y=="string"){const I=await ha(e,{idToken:y}).catch(()=>{});if(!I)break;T=await Gt._fromGetAccountInfoResponse(e,I,y)}else T=Gt._fromJSON(e,y);p!==s&&(l=T),s=p;break}}catch{}const d=i.filter(p=>p._shouldAllowMigration);return!s._shouldAllowMigration||!d.length?new Li(s,e,r):(s=d[0],l&&await s._set(c,l.toJSON()),await Promise.all(t.map(async p=>{if(p!==s)try{await p._remove(c)}catch{}})),new Li(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gf(e))return"Blackberry";if(_f(e))return"Webos";if(df(e))return"Safari";if((e.includes("chrome/")||ff(e))&&!e.includes("edge/"))return"Chrome";if(mf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hf(n=at()){return/firefox\//i.test(n)}function df(n=at()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ff(n=at()){return/crios\//i.test(n)}function pf(n=at()){return/iemobile/i.test(n)}function mf(n=at()){return/android/i.test(n)}function gf(n=at()){return/blackberry/i.test(n)}function _f(n=at()){return/webos/i.test(n)}function _l(n=at()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dv(n=at()){var e;return _l(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fv(){return T_()&&document.documentMode===10}function yf(n=at()){return _l(n)||mf(n)||_f(n)||gf(n)||/windows phone/i.test(n)||pf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(n,e=[]){let t;switch(n){case"Browser":t=yh(at());break;case"Worker":t=`${yh(at())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((c,l)=>{try{const d=e(s);c(d)}catch(d){l(d)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(n,e={}){return _n(n,"GET","/v2/passwordPolicy",gn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=6;class _v{constructor(e){var t,r,i,s;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:gv,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,c,l;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(t=d.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(s=d.containsUppercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(c=d.containsNumericCharacter)!==null&&c!==void 0?c:!0),d.isValid&&(d.isValid=(l=d.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),d}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vh(this),this.idTokenSubscription=new vh(this),this.beforeStateQueue=new pv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nn(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ha(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Rt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(e);(!c||c===l)&&(d!=null&&d.user)&&(i=d.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await da(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(Vn(this));const t=e?xe(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mv(this),t=new _v(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await hv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Nn(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[Nn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let c=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{c||s(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,r,i);return()=>{c=!0,d()}}else{const d=e.addObserver(t);return()=>{c=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Wy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $n(n){return xe(n)}class vh{constructor(e){this.auth=e,this.observer=null,this.addObserver=P_(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vv(n){Na=n}function Ef(n){return Na.loadJS(n)}function Ev(){return Na.recaptchaEnterpriseScript}function wv(){return Na.gapiScript}function Tv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Iv{constructor(){this.enterprise=new bv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class bv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Av="recaptcha-enterprise",wf="NO_RECAPTCHA";class Cv{constructor(e){this.type=Av,this.auth=$n(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(c,l)=>{rv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const p=new nv(d);return s.tenantId==null?s._agentRecaptchaConfig=p:s._tenantRecaptchaConfigs[s.tenantId]=p,c(p.siteKey)}}).catch(d=>{l(d)})})}function i(s,c,l){const d=window.grecaptcha;ph(d)?d.enterprise.ready(()=>{d.enterprise.execute(s,{action:e}).then(p=>{c(p)}).catch(()=>{c(wf)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Iv().execute("siteKey",{action:"verify"}):new Promise((s,c)=>{r(this.auth).then(l=>{if(!t&&ph(window.grecaptcha))i(l,s,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let d=Ev();d.length!==0&&(d+=l),Ef(d).then(()=>{i(l,s,c)}).catch(p=>{c(p)})}}).catch(l=>{c(l)})})}}async function Eh(n,e,t,r=!1,i=!1){const s=new Cv(n);let c;if(i)c=wf;else try{c=await s.verify(t)}catch{c=await s.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,p=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:c}):Object.assign(l,{captchaResponse:c}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function fa(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Eh(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Eh(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(n,e){const t=ni(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(mr(s,e??{}))return i;Ut(i,"already-initialized")}return t.initialize({options:e})}function Sv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Nn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Pv(n,e,t){const r=$n(n);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Tf(e),{host:c,port:l}=kv(e),d=l===null?"":`:${l}`,p={url:`${s}//${c}${d}/`},y=Object.freeze({host:c,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(mr(p,r.config.emulator)&&mr(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=p,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,zi(c)?(Wd(`${s}//${c}${d}`),Kd("Auth",!0)):Dv()}function Tf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function kv(n){const e=Tf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:wh(r.substr(s.length+1))}}else{const[s,c]=r.split(":");return{host:s,port:wh(c)}}}function wh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Dv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,t){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov(n,e){return _n(n,"POST","/v1/accounts:resetPassword",gn(n,e))}async function Nv(n,e){return _n(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(n,e){return no(n,"POST","/v1/accounts:signInWithPassword",gn(n,e))}async function Lv(n,e){return _n(n,"POST","/v1/accounts:sendOobCode",gn(n,e))}async function xv(n,e){return Lv(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mv(n,e){return no(n,"POST","/v1/accounts:signInWithEmailLink",gn(n,e))}async function Fv(n,e){return no(n,"POST","/v1/accounts:signInWithEmailLink",gn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends yl{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ks(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ks(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fa(e,t,"signInWithPassword",Vv);case"emailLink":return Mv(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fa(e,r,"signUpPassword",Nv);case"emailLink":return Fv(e,{idToken:t,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(n,e){return no(n,"POST","/v1/accounts:signInWithIdp",gn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="http://localhost";class Qr extends yl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ut("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=dl(t,["providerId","signInMethod"]);if(!r||!i)return null;const c=new Qr(r,i);return c.idToken=s.idToken||void 0,c.accessToken=s.accessToken||void 0,c.secret=s.secret,c.nonce=s.nonce,c.pendingToken=s.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return xi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,xi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xi(e,t)}buildRequest(){const e={requestUri:Uv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=eo(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bv(n){const e=Os(Ns(n)).link,t=e?Os(Ns(e)).deep_link_id:null,r=Os(Ns(n)).deep_link_id;return(r?Os(Ns(r)).link:null)||r||t||e||n}class vl{constructor(e){var t,r,i,s,c,l;const d=Os(Ns(e)),p=(t=d.apiKey)!==null&&t!==void 0?t:null,y=(r=d.oobCode)!==null&&r!==void 0?r:null,T=$v((i=d.mode)!==null&&i!==void 0?i:null);J(p&&y&&T,"argument-error"),this.apiKey=p,this.operation=T,this.code=y,this.continueUrl=(s=d.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(c=d.lang)!==null&&c!==void 0?c:null,this.tenantId=(l=d.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Bv(e);try{return new vl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.providerId=Ki.PROVIDER_ID}static credential(e,t){return Ks._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=vl.parseLink(t);return J(r,"argument-error"),Ks._fromEmailAndCode(e,r.code,r.tenantId)}}Ki.PROVIDER_ID="password";Ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends El{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends ro{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ar.credential(t,r)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends ro{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends ro{constructor(){super("twitter.com")}static credential(e,t){return Qr._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return lr.credential(t,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(n,e){return no(n,"POST","/v1/accounts:signUp",gn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Gt._fromIdTokenResponse(e,r,i),c=Th(r);return new Yr({user:s,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Th(r);return new Yr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Th(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends Zt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new pa(e,t,r,i)}}function If(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pa._fromErrorAndOperation(n,s,e,r):s})}async function qv(n,e,t=!1){const r=await Ws(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(n,e,t=!1){const{auth:r}=n;if(Rt(r.app))return Promise.reject(Vn(r));const i="reauthenticate";try{const s=await Ws(n,If(r,i,e,n),t);J(s.idToken,r,"internal-error");const c=gl(s.idToken);J(c,r,"internal-error");const{sub:l}=c;return J(n.uid===l,r,"user-mismatch"),Yr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ut(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bf(n,e,t=!1){if(Rt(n.app))return Promise.reject(Vn(n));const r="signIn",i=await If(n,r,e),s=await Yr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function zv(n,e){return bf($n(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(n){const e=$n(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function MA(n,e,t){const r=$n(n);await fa(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",xv)}async function FA(n,e,t){await Ov(xe(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wl(n),r})}async function UA(n,e,t){if(Rt(n.app))return Promise.reject(Vn(n));const r=$n(n),c=await fa(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jv).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&wl(n),d}),l=await Yr._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(l.user),l}function $A(n,e,t){return Rt(n.app)?Promise.reject(Vn(n)):zv(xe(n),Ki.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wl(n),r})}function Wv(n,e,t,r){return xe(n).onIdTokenChanged(e,t,r)}function Kv(n,e,t){return xe(n).beforeAuthStateChanged(e,t)}function BA(n,e,t,r){return xe(n).onAuthStateChanged(e,t,r)}function jA(n){return xe(n).signOut()}const ma="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ma,"1"),this.storage.removeItem(ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=1e3,Qv=10;class Cf extends Af{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,l,d)=>{this.notifyListeners(c,d)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},s=this.storage.getItem(r);fv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Qv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Gv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cf.type="LOCAL";const Yv=Cf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends Af{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rf.type="SESSION";const Sf=Rf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,c=this.handlersMap[i];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(c).map(async p=>p(t.origin,s)),d=await Xv(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,c;return new Promise((l,d)=>{const p=Tl("",20);i.port1.start();const y=setTimeout(()=>{d(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(T){const I=T;if(I.data.eventId===p)switch(I.data.status){case"ack":clearTimeout(y),s=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(I.data.response);break;default:clearTimeout(y),clearTimeout(s),d(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function Zv(n){un().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function eE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function nE(){return Pf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="firebaseLocalStorageDb",rE=1,ga="firebaseLocalStorage",Df="fbase_key";class io{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function La(n,e){return n.transaction([ga],e?"readwrite":"readonly").objectStore(ga)}function iE(){const n=indexedDB.deleteDatabase(kf);return new io(n).toPromise()}function Hc(){const n=indexedDB.open(kf,rE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ga,{keyPath:Df})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ga)?e(r):(r.close(),await iE(),e(await Hc()))})})}async function Ih(n,e,t){const r=La(n,!0).put({[Df]:e,value:t});return new io(r).toPromise()}async function sE(n,e){const t=La(n,!1).get(e),r=await new io(t).toPromise();return r===void 0?null:r.value}function bh(n,e){const t=La(n,!0).delete(e);return new io(t).toPromise()}const oE=800,aE=3;class Of{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>aE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Va._getInstance(nE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await eE(),!this.activeServiceWorker)return;this.sender=new Jv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hc();return await Ih(e,ma,"1"),await bh(e,ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ih(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>sE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=La(i,!1).getAll();return new io(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Of.type="LOCAL";const cE=Of;new to(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n,e){return e?Nn(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends yl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lE(n){return bf(n.auth,new Il(n),n.bypassAuthState)}function uE(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),Hv(t,new Il(n),n.bypassAuthState)}async function hE(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),qv(t,new Il(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:c,type:l}=e;if(c){this.reject(c);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lE;case"linkViaPopup":case"linkViaRedirect":return hE;case"reauthViaPopup":case"reauthViaRedirect":return uE;default:Ut(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new to(2e3,1e4);async function qA(n,e,t){if(Rt(n.app))return Promise.reject(Qt(n,"operation-not-supported-in-this-environment"));const r=$n(n);Ky(n,e,El);const i=Nf(r,t);return new Wr(r,"signInViaPopup",e,i).executeNotNull()}class Wr extends Vf{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wr.currentPopupAction&&Wr.currentPopupAction.cancel(),Wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=Tl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dE.get())};e()}}Wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="pendingRedirect",ea=new Map;class pE extends Vf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ea.get(this.auth._key());if(!e){try{const r=await mE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ea.set(this.auth._key(),e)}return this.bypassAuthState||ea.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mE(n,e){const t=yE(e),r=_E(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function gE(n,e){ea.set(n._key(),e)}function _E(n){return Nn(n._redirectPersistence)}function yE(n){return Zo(fE,n.config.apiKey,n.name)}async function vE(n,e,t=!1){if(Rt(n.app))return Promise.reject(Vn(n));const r=$n(n),i=Nf(r,e),c=await new pE(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=10*60*1e3;class wE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Lf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ah(e))}saveEventToCache(e){this.cachedEventUids.add(Ah(e)),this.lastProcessedEventTime=Date.now()}}function Ah(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Lf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(n,e={}){return _n(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AE=/^https?/;async function CE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await IE(n);for(const t of e)try{if(RE(t))return}catch{}Ut(n,"unauthorized-domain")}function RE(n){const e=jc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!AE.test(t))return!1;if(bE.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=new to(3e4,6e4);function Ch(){const n=un().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function PE(n){return new Promise((e,t)=>{var r,i,s;function c(){Ch(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ch(),t(Qt(n,"network-request-failed"))},timeout:SE.get()})}if(!((i=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=un().gapi)===null||s===void 0)&&s.load)c();else{const l=Tv("iframefcb");return un()[l]=()=>{gapi.load?c():t(Qt(n,"network-request-failed"))},Ef(`${wv()}?onload=${l}`).catch(d=>t(d))}}).catch(e=>{throw ta=null,e})}let ta=null;function kE(n){return ta=ta||PE(n),ta}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=new to(5e3,15e3),OE="__/auth/iframe",NE="emulator/auth/iframe",VE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xE(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ml(e,NE):`https://${n.config.authDomain}/${OE}`,r={apiKey:e.apiKey,appName:n.name,v:Wi},i=LE.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${eo(r).slice(1)}`}async function ME(n){const e=await kE(n),t=un().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:xE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const c=Qt(n,"network-request-failed"),l=un().setTimeout(()=>{s(c)},DE.get());function d(){un().clearTimeout(l),i(r)}r.ping(d).then(d,()=>{s(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UE=500,$E=600,BE="_blank",jE="http://localhost";class Rh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qE(n,e,t,r=UE,i=$E){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const d=Object.assign(Object.assign({},FE),{width:r.toString(),height:i.toString(),top:s,left:c}),p=at().toLowerCase();t&&(l=ff(p)?BE:t),hf(p)&&(e=e||jE,d.scrollbars="yes");const y=Object.entries(d).reduce((I,[N,U])=>`${I}${N}=${U},`,"");if(dv(p)&&l!=="_self")return HE(e||"",l),new Rh(null);const T=window.open(e||"",l,y);J(T,n,"popup-blocked");try{T.focus()}catch{}return new Rh(T)}function HE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="__/auth/handler",WE="emulator/auth/handler",KE=encodeURIComponent("fac");async function Sh(n,e,t,r,i,s){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Wi,eventId:i};if(e instanceof El){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",S_(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof ro){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const l=c;for(const y of Object.keys(l))l[y]===void 0&&delete l[y];const d=await n._getAppCheckToken(),p=d?`#${KE}=${encodeURIComponent(d)}`:"";return`${GE(n)}?${eo(l).slice(1)}${p}`}function GE({config:n}){return n.emulator?ml(n,WE):`https://${n.authDomain}/${zE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="webStorageSupport";class QE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sf,this._completeRedirectFn=vE,this._overrideRedirectResult=gE}async _openPopup(e,t,r,i){var s;Mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const c=await Sh(e,t,r,jc(),i);return qE(e,c,Tl())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Sh(e,t,r,jc(),i);return Zv(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ME(e),r=new wE(e);return t.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pc,{type:Pc},i=>{var s;const c=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pc];c!==void 0&&t(!!c),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=CE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yf()||df()||_l()}}const YE=QE;var Ph="@firebase/auth",kh="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZE(n){fn(new Xt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:c,authDomain:l}=r.options;J(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:c,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vf(n)},p=new yv(r,i,s,d);return Sv(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),fn(new Xt("auth-internal",e=>{const t=$n(e.getProvider("auth").getImmediate());return(r=>new XE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Ph,kh,JE(n)),Ft(Ph,kh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=5*60,tw=zd("authIdTokenMaxAge")||ew;let Dh=null;const nw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>tw)return;const i=t==null?void 0:t.token;Dh!==i&&(Dh=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rw(n=hl()){const e=ni(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Rv(n,{popupRedirectResolver:YE,persistence:[cE,Yv,Sf]}),r=zd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const c=nw(s.toString());Kv(t,c,()=>c(t.currentUser)),Wv(t,l=>c(l))}}const i=qd("auth");return i&&Pv(t,`http://${i}`),t}function iw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}vv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",iw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZE("Browser");var Oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fr,xf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function w(){}w.prototype=v.prototype,R.D=v.prototype,R.prototype=new w,R.prototype.constructor=R,R.C=function(b,S,k){for(var E=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)E[kt-2]=arguments[kt];return v.prototype[S].apply(b,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(R,v,w){w||(w=0);var b=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)b[S]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(S=0;16>S;++S)b[S]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=R.g[0],w=R.g[1],S=R.g[2];var k=R.g[3],E=v+(k^w&(S^k))+b[0]+3614090360&4294967295;v=w+(E<<7&4294967295|E>>>25),E=k+(S^v&(w^S))+b[1]+3905402710&4294967295,k=v+(E<<12&4294967295|E>>>20),E=S+(w^k&(v^w))+b[2]+606105819&4294967295,S=k+(E<<17&4294967295|E>>>15),E=w+(v^S&(k^v))+b[3]+3250441966&4294967295,w=S+(E<<22&4294967295|E>>>10),E=v+(k^w&(S^k))+b[4]+4118548399&4294967295,v=w+(E<<7&4294967295|E>>>25),E=k+(S^v&(w^S))+b[5]+1200080426&4294967295,k=v+(E<<12&4294967295|E>>>20),E=S+(w^k&(v^w))+b[6]+2821735955&4294967295,S=k+(E<<17&4294967295|E>>>15),E=w+(v^S&(k^v))+b[7]+4249261313&4294967295,w=S+(E<<22&4294967295|E>>>10),E=v+(k^w&(S^k))+b[8]+1770035416&4294967295,v=w+(E<<7&4294967295|E>>>25),E=k+(S^v&(w^S))+b[9]+2336552879&4294967295,k=v+(E<<12&4294967295|E>>>20),E=S+(w^k&(v^w))+b[10]+4294925233&4294967295,S=k+(E<<17&4294967295|E>>>15),E=w+(v^S&(k^v))+b[11]+2304563134&4294967295,w=S+(E<<22&4294967295|E>>>10),E=v+(k^w&(S^k))+b[12]+1804603682&4294967295,v=w+(E<<7&4294967295|E>>>25),E=k+(S^v&(w^S))+b[13]+4254626195&4294967295,k=v+(E<<12&4294967295|E>>>20),E=S+(w^k&(v^w))+b[14]+2792965006&4294967295,S=k+(E<<17&4294967295|E>>>15),E=w+(v^S&(k^v))+b[15]+1236535329&4294967295,w=S+(E<<22&4294967295|E>>>10),E=v+(S^k&(w^S))+b[1]+4129170786&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^S&(v^w))+b[6]+3225465664&4294967295,k=v+(E<<9&4294967295|E>>>23),E=S+(v^w&(k^v))+b[11]+643717713&4294967295,S=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(S^k))+b[0]+3921069994&4294967295,w=S+(E<<20&4294967295|E>>>12),E=v+(S^k&(w^S))+b[5]+3593408605&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^S&(v^w))+b[10]+38016083&4294967295,k=v+(E<<9&4294967295|E>>>23),E=S+(v^w&(k^v))+b[15]+3634488961&4294967295,S=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(S^k))+b[4]+3889429448&4294967295,w=S+(E<<20&4294967295|E>>>12),E=v+(S^k&(w^S))+b[9]+568446438&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^S&(v^w))+b[14]+3275163606&4294967295,k=v+(E<<9&4294967295|E>>>23),E=S+(v^w&(k^v))+b[3]+4107603335&4294967295,S=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(S^k))+b[8]+1163531501&4294967295,w=S+(E<<20&4294967295|E>>>12),E=v+(S^k&(w^S))+b[13]+2850285829&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^S&(v^w))+b[2]+4243563512&4294967295,k=v+(E<<9&4294967295|E>>>23),E=S+(v^w&(k^v))+b[7]+1735328473&4294967295,S=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(S^k))+b[12]+2368359562&4294967295,w=S+(E<<20&4294967295|E>>>12),E=v+(w^S^k)+b[5]+4294588738&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^S)+b[8]+2272392833&4294967295,k=v+(E<<11&4294967295|E>>>21),E=S+(k^v^w)+b[11]+1839030562&4294967295,S=k+(E<<16&4294967295|E>>>16),E=w+(S^k^v)+b[14]+4259657740&4294967295,w=S+(E<<23&4294967295|E>>>9),E=v+(w^S^k)+b[1]+2763975236&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^S)+b[4]+1272893353&4294967295,k=v+(E<<11&4294967295|E>>>21),E=S+(k^v^w)+b[7]+4139469664&4294967295,S=k+(E<<16&4294967295|E>>>16),E=w+(S^k^v)+b[10]+3200236656&4294967295,w=S+(E<<23&4294967295|E>>>9),E=v+(w^S^k)+b[13]+681279174&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^S)+b[0]+3936430074&4294967295,k=v+(E<<11&4294967295|E>>>21),E=S+(k^v^w)+b[3]+3572445317&4294967295,S=k+(E<<16&4294967295|E>>>16),E=w+(S^k^v)+b[6]+76029189&4294967295,w=S+(E<<23&4294967295|E>>>9),E=v+(w^S^k)+b[9]+3654602809&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^S)+b[12]+3873151461&4294967295,k=v+(E<<11&4294967295|E>>>21),E=S+(k^v^w)+b[15]+530742520&4294967295,S=k+(E<<16&4294967295|E>>>16),E=w+(S^k^v)+b[2]+3299628645&4294967295,w=S+(E<<23&4294967295|E>>>9),E=v+(S^(w|~k))+b[0]+4096336452&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~S))+b[7]+1126891415&4294967295,k=v+(E<<10&4294967295|E>>>22),E=S+(v^(k|~w))+b[14]+2878612391&4294967295,S=k+(E<<15&4294967295|E>>>17),E=w+(k^(S|~v))+b[5]+4237533241&4294967295,w=S+(E<<21&4294967295|E>>>11),E=v+(S^(w|~k))+b[12]+1700485571&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~S))+b[3]+2399980690&4294967295,k=v+(E<<10&4294967295|E>>>22),E=S+(v^(k|~w))+b[10]+4293915773&4294967295,S=k+(E<<15&4294967295|E>>>17),E=w+(k^(S|~v))+b[1]+2240044497&4294967295,w=S+(E<<21&4294967295|E>>>11),E=v+(S^(w|~k))+b[8]+1873313359&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~S))+b[15]+4264355552&4294967295,k=v+(E<<10&4294967295|E>>>22),E=S+(v^(k|~w))+b[6]+2734768916&4294967295,S=k+(E<<15&4294967295|E>>>17),E=w+(k^(S|~v))+b[13]+1309151649&4294967295,w=S+(E<<21&4294967295|E>>>11),E=v+(S^(w|~k))+b[4]+4149444226&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~S))+b[11]+3174756917&4294967295,k=v+(E<<10&4294967295|E>>>22),E=S+(v^(k|~w))+b[2]+718787259&4294967295,S=k+(E<<15&4294967295|E>>>17),E=w+(k^(S|~v))+b[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+S&4294967295,R.g[3]=R.g[3]+k&4294967295}r.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var w=v-this.blockSize,b=this.B,S=this.h,k=0;k<v;){if(S==0)for(;k<=w;)i(this,R,k),k+=this.blockSize;if(typeof R=="string"){for(;k<v;)if(b[S++]=R.charCodeAt(k++),S==this.blockSize){i(this,b),S=0;break}}else for(;k<v;)if(b[S++]=R[k++],S==this.blockSize){i(this,b),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var w=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=w&255,w/=256;for(this.u(R),R=Array(16),v=w=0;4>v;++v)for(var b=0;32>b;b+=8)R[w++]=this.g[v]>>>b&255;return R};function s(R,v){var w=l;return Object.prototype.hasOwnProperty.call(w,R)?w[R]:w[R]=v(R)}function c(R,v){this.h=v;for(var w=[],b=!0,S=R.length-1;0<=S;S--){var k=R[S]|0;b&&k==v||(w[S]=k,b=!1)}this.g=w}var l={};function d(R){return-128<=R&&128>R?s(R,function(v){return new c([v|0],0>v?-1:0)}):new c([R|0],0>R?-1:0)}function p(R){if(isNaN(R)||!isFinite(R))return T;if(0>R)return F(p(-R));for(var v=[],w=1,b=0;R>=w;b++)v[b]=R/w|0,w*=4294967296;return new c(v,0)}function y(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return F(y(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=p(Math.pow(v,8)),b=T,S=0;S<R.length;S+=8){var k=Math.min(8,R.length-S),E=parseInt(R.substring(S,S+k),v);8>k?(k=p(Math.pow(v,k)),b=b.j(k).add(p(E))):(b=b.j(w),b=b.add(p(E)))}return b}var T=d(0),I=d(1),N=d(16777216);n=c.prototype,n.m=function(){if(H(this))return-F(this).m();for(var R=0,v=1,w=0;w<this.g.length;w++){var b=this.i(w);R+=(0<=b?b:4294967296+b)*v,v*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(U(this))return"0";if(H(this))return"-"+F(this).toString(R);for(var v=p(Math.pow(R,6)),w=this,b="";;){var S=be(w,v).g;w=ee(w,S.j(v));var k=((0<w.g.length?w.g[0]:w.h)>>>0).toString(R);if(w=S,U(w))return k+b;for(;6>k.length;)k="0"+k;b=k+b}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function U(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function H(R){return R.h==-1}n.l=function(R){return R=ee(this,R),H(R)?-1:U(R)?0:1};function F(R){for(var v=R.g.length,w=[],b=0;b<v;b++)w[b]=~R.g[b];return new c(w,~R.h).add(I)}n.abs=function(){return H(this)?F(this):this},n.add=function(R){for(var v=Math.max(this.g.length,R.g.length),w=[],b=0,S=0;S<=v;S++){var k=b+(this.i(S)&65535)+(R.i(S)&65535),E=(k>>>16)+(this.i(S)>>>16)+(R.i(S)>>>16);b=E>>>16,k&=65535,E&=65535,w[S]=E<<16|k}return new c(w,w[w.length-1]&-2147483648?-1:0)};function ee(R,v){return R.add(F(v))}n.j=function(R){if(U(this)||U(R))return T;if(H(this))return H(R)?F(this).j(F(R)):F(F(this).j(R));if(H(R))return F(this.j(F(R)));if(0>this.l(N)&&0>R.l(N))return p(this.m()*R.m());for(var v=this.g.length+R.g.length,w=[],b=0;b<2*v;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(var S=0;S<R.g.length;S++){var k=this.i(b)>>>16,E=this.i(b)&65535,kt=R.i(S)>>>16,Bn=R.i(S)&65535;w[2*b+2*S]+=E*Bn,G(w,2*b+2*S),w[2*b+2*S+1]+=k*Bn,G(w,2*b+2*S+1),w[2*b+2*S+1]+=E*kt,G(w,2*b+2*S+1),w[2*b+2*S+2]+=k*kt,G(w,2*b+2*S+2)}for(b=0;b<v;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=v;b<2*v;b++)w[b]=0;return new c(w,0)};function G(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function ce(R,v){this.g=R,this.h=v}function be(R,v){if(U(v))throw Error("division by zero");if(U(R))return new ce(T,T);if(H(R))return v=be(F(R),v),new ce(F(v.g),F(v.h));if(H(v))return v=be(R,F(v)),new ce(F(v.g),v.h);if(30<R.g.length){if(H(R)||H(v))throw Error("slowDivide_ only works with positive integers.");for(var w=I,b=v;0>=b.l(R);)w=gt(w),b=gt(b);var S=Pe(w,1),k=Pe(b,1);for(b=Pe(b,2),w=Pe(w,2);!U(b);){var E=k.add(b);0>=E.l(R)&&(S=S.add(w),k=E),b=Pe(b,1),w=Pe(w,1)}return v=ee(R,S.j(v)),new ce(S,v)}for(S=T;0<=R.l(v);){for(w=Math.max(1,Math.floor(R.m()/v.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),k=p(w),E=k.j(v);H(E)||0<E.l(R);)w-=b,k=p(w),E=k.j(v);U(k)&&(k=I),S=S.add(k),R=ee(R,E)}return new ce(S,R)}n.A=function(R){return be(this,R).h},n.and=function(R){for(var v=Math.max(this.g.length,R.g.length),w=[],b=0;b<v;b++)w[b]=this.i(b)&R.i(b);return new c(w,this.h&R.h)},n.or=function(R){for(var v=Math.max(this.g.length,R.g.length),w=[],b=0;b<v;b++)w[b]=this.i(b)|R.i(b);return new c(w,this.h|R.h)},n.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),w=[],b=0;b<v;b++)w[b]=this.i(b)^R.i(b);return new c(w,this.h^R.h)};function gt(R){for(var v=R.g.length+1,w=[],b=0;b<v;b++)w[b]=R.i(b)<<1|R.i(b-1)>>>31;return new c(w,R.h)}function Pe(R,v){var w=v>>5;v%=32;for(var b=R.g.length-w,S=[],k=0;k<b;k++)S[k]=0<v?R.i(k+w)>>>v|R.i(k+w+1)<<32-v:R.i(k+w);return new c(S,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xf=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=p,c.fromString=y,fr=c}).apply(typeof Oh<"u"?Oh:typeof self<"u"?self:typeof window<"u"?window:{});var Wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mf,Vs,Ff,na,zc,Uf,$f,Bf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wo=="object"&&Wo];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var f=r;o=o.split(".");for(var _=0;_<o.length-1;_++){var P=o[_];if(!(P in f))break e;f=f[P]}o=o[o.length-1],_=f[o],u=u(_),u!=_&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var f=0,_=!1,P={next:function(){if(!_&&f<o.length){var D=f++;return{value:u(D,o[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function d(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function p(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function y(o,u,f){return o.call.apply(o.bind,arguments)}function T(o,u,f){if(!o)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,_),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function I(o,u,f){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,I.apply(null,arguments)}function N(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),o.apply(this,_)}}function U(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(_,P,D){for(var $=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)$[ve-2]=arguments[ve];return u.prototype[P].apply(_,$)}}function H(o){const u=o.length;if(0<u){const f=Array(u);for(let _=0;_<u;_++)f[_]=o[_];return f}return[]}function F(o,u){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(d(_)){const P=o.length||0,D=_.length||0;o.length=P+D;for(let $=0;$<D;$++)o[P+$]=_[$]}else o.push(_)}}class ee{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function G(o){return/^[\s\xa0]*$/.test(o)}function ce(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function be(o){return be[" "](o),o}be[" "]=function(){};var gt=ce().indexOf("Gecko")!=-1&&!(ce().toLowerCase().indexOf("webkit")!=-1&&ce().indexOf("Edge")==-1)&&!(ce().indexOf("Trident")!=-1||ce().indexOf("MSIE")!=-1)&&ce().indexOf("Edge")==-1;function Pe(o,u,f){for(const _ in o)u.call(f,o[_],_,o)}function R(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function v(o){const u={};for(const f in o)u[f]=o[f];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,u){let f,_;for(let P=1;P<arguments.length;P++){_=arguments[P];for(f in _)o[f]=_[f];for(let D=0;D<w.length;D++)f=w[D],Object.prototype.hasOwnProperty.call(_,f)&&(o[f]=_[f])}}function S(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function k(o){l.setTimeout(()=>{throw o},0)}function E(){var o=si;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class kt{constructor(){this.h=this.g=null}add(u,f){const _=Bn.get();_.set(u,f),this.h?this.h.next=_:this.g=_,this.h=_}}var Bn=new ee(()=>new ho,o=>o.reset());class ho{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let yn,br=!1,si=new kt,M=()=>{const o=l.Promise.resolve(void 0);yn=()=>{o.then(es)}};var es=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){k(f)}var u=Bn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}br=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Bt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function jt(o,u){if(Me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,_=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(gt){e:{try{be(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Tt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&jt.aa.h.call(this)}}U(jt,Me);var Tt={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var jn="closure_listenable_"+(1e6*Math.random()|0),Q=0;function oi(o,u,f,_,P){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!_,this.ha=P,this.key=++Q,this.da=this.fa=!1}function Ar(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ai(o){this.src=o,this.g={},this.h=0}ai.prototype.add=function(o,u,f,_,P){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var $=vn(o,u,_,P);return-1<$?(u=o[$],f||(u.fa=!1)):(u=new oi(u,this.src,D,!!_,P),u.fa=f,o.push(u)),u};function ts(o,u){var f=u.type;if(f in o.g){var _=o.g[f],P=Array.prototype.indexOf.call(_,u,void 0),D;(D=0<=P)&&Array.prototype.splice.call(_,P,1),D&&(Ar(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function vn(o,u,f,_){for(var P=0;P<o.length;++P){var D=o[P];if(!D.da&&D.listener==u&&D.capture==!!f&&D.ha==_)return P}return-1}var ci="closure_lm_"+(1e6*Math.random()|0),En={};function wn(o,u,f,_,P){if(Array.isArray(u)){for(var D=0;D<u.length;D++)wn(o,u[D],f,_,P);return null}return f=qt(f),o&&o[jn]?o.K(u,f,p(_)?!!_.capture:!1,P):ec(o,u,f,!1,_,P)}function ec(o,u,f,_,P,D){if(!u)throw Error("Invalid event type");var $=p(P)?!!P.capture:!!P,ve=rs(o);if(ve||(o[ci]=ve=new ai(o)),f=ve.add(u,f,_,$,D),f.proxy)return f;if(_=tc(),f.proxy=_,_.src=o,_.listener=f,o.addEventListener)Bt||(P=$),P===void 0&&(P=!1),o.addEventListener(u.toString(),_,P);else if(o.attachEvent)o.attachEvent(po(u.toString()),_);else if(o.addListener&&o.removeListener)o.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function tc(){function o(f){return u.call(o.src,o.listener,f)}const u=nc;return o}function fo(o,u,f,_,P){if(Array.isArray(u))for(var D=0;D<u.length;D++)fo(o,u[D],f,_,P);else _=p(_)?!!_.capture:!!_,f=qt(f),o&&o[jn]?(o=o.i,u=String(u).toString(),u in o.g&&(D=o.g[u],f=vn(D,f,_,P),-1<f&&(Ar(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete o.g[u],o.h--)))):o&&(o=rs(o))&&(u=o.g[u.toString()],o=-1,u&&(o=vn(u,f,_,P)),(f=-1<o?u[o]:null)&&ns(f))}function ns(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[jn])ts(u.i,o);else{var f=o.type,_=o.proxy;u.removeEventListener?u.removeEventListener(f,_,o.capture):u.detachEvent?u.detachEvent(po(f),_):u.addListener&&u.removeListener&&u.removeListener(_),(f=rs(u))?(ts(f,o),f.h==0&&(f.src=null,u[ci]=null)):Ar(o)}}}function po(o){return o in En?En[o]:En[o]="on"+o}function nc(o,u){if(o.da)o=!0;else{u=new jt(u,this);var f=o.listener,_=o.ha||o.src;o.fa&&ns(o),o=f.call(_,u)}return o}function rs(o){return o=o[ci],o instanceof ai?o:null}var qn="__closure_events_fn_"+(1e9*Math.random()>>>0);function qt(o){return typeof o=="function"?o:(o[qn]||(o[qn]=function(u){return o.handleEvent(u)}),o[qn])}function $e(){$t.call(this),this.i=new ai(this),this.M=this,this.F=null}U($e,$t),$e.prototype[jn]=!0,$e.prototype.removeEventListener=function(o,u,f,_){fo(this,o,u,f,_)};function Xe(o,u){var f,_=o.F;if(_)for(f=[];_;_=_.F)f.push(_);if(o=o.M,_=u.type||u,typeof u=="string")u=new Me(u,o);else if(u instanceof Me)u.target=u.target||o;else{var P=u;u=new Me(_,o),b(u,P)}if(P=!0,f)for(var D=f.length-1;0<=D;D--){var $=u.g=f[D];P=li($,_,!0,u)&&P}if($=u.g=o,P=li($,_,!0,u)&&P,P=li($,_,!1,u)&&P,f)for(D=0;D<f.length;D++)$=u.g=f[D],P=li($,_,!1,u)&&P}$e.prototype.N=function(){if($e.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],_=0;_<f.length;_++)Ar(f[_]);delete o.g[u],o.h--}}this.F=null},$e.prototype.K=function(o,u,f,_){return this.i.add(String(o),u,!1,f,_)},$e.prototype.L=function(o,u,f,_){return this.i.add(String(o),u,!0,f,_)};function li(o,u,f,_){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,D=0;D<u.length;++D){var $=u[D];if($&&!$.da&&$.capture==f){var ve=$.listener,je=$.ha||$.src;$.fa&&ts(o.i,$),P=ve.call(je,_)!==!1&&P}}return P&&!_.defaultPrevented}function Hn(o,u,f){if(typeof o=="function")f&&(o=I(o,f));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Tn(o){o.g=Hn(()=>{o.g=null,o.i&&(o.i=!1,Tn(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class zn extends $t{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Tn(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function en(o){$t.call(this),this.h=o,this.g={}}U(en,$t);var mo=[];function ui(o){Pe(o.g,function(u,f){this.g.hasOwnProperty(f)&&ns(u)},o),o.g={}}en.prototype.N=function(){en.aa.N.call(this),ui(this)},en.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var is=l.JSON.stringify,rc=l.JSON.parse,ic=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ss(){}ss.prototype.h=null;function go(o){return o.h||(o.h=o.i())}function _o(){}var Wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){Me.call(this,"d")}U(Kn,Me);function hi(){Me.call(this,"c")}U(hi,Me);var tn={},yo=null;function di(){return yo=yo||new $e}tn.La="serverreachability";function vo(o){Me.call(this,tn.La,o)}U(vo,Me);function Cr(o){const u=di();Xe(u,new vo(u))}tn.STAT_EVENT="statevent";function In(o,u){Me.call(this,tn.STAT_EVENT,o),this.stat=u}U(In,Me);function Ne(o){const u=di();Xe(u,new In(u,o))}tn.Ma="timingevent";function Eo(o,u){Me.call(this,tn.Ma,o),this.size=u}U(Eo,Me);function Rr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Sr(){this.g=!0}Sr.prototype.xa=function(){this.g=!1};function sc(o,u,f,_,P,D){o.info(function(){if(o.g)if(D)for(var $="",ve=D.split("&"),je=0;je<ve.length;je++){var pe=ve[je].split("=");if(1<pe.length){var We=pe[0];pe=pe[1];var Ke=We.split("_");$=2<=Ke.length&&Ke[1]=="type"?$+(We+"="+pe+"&"):$+(We+"=redacted&")}}else $=null;else $=D;return"XMLHTTP REQ ("+_+") [attempt "+P+"]: "+u+`
`+f+`
`+$})}function oc(o,u,f,_,P,D,$){o.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+P+"]: "+u+`
`+f+`
`+D+" "+$})}function nn(o,u,f,_){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+fi(o,f)+(_?" "+_:"")})}function Gn(o,u){o.info(function(){return"TIMEOUT: "+u})}Sr.prototype.info=function(){};function fi(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var _=f[o];if(!(2>_.length)){var P=_[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var $=1;$<P.length;$++)P[$]=""}}}}return is(f)}catch{return u}}var pi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},os;function gi(){}U(gi,ss),gi.prototype.g=function(){return new XMLHttpRequest},gi.prototype.i=function(){return{}},os=new gi;function ct(o,u,f,_){this.j=o,this.i=u,this.l=f,this.R=_||1,this.U=new en(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ze}function ze(){this.i=null,this.g="",this.h=!1}var nt={},Je={};function Be(o,u,f){o.L=1,o.v=Cn(De(u)),o.m=f,o.P=!0,Pr(o,null)}function Pr(o,u){o.F=Date.now(),Ht(o),o.A=De(o.v);var f=o.A,_=o.R;Array.isArray(_)||(_=[String(_)]),vi(f.i,"t",_),o.C=0,f=o.j.J,o.h=new ze,o.g=Vo(o.j,f?u:null,!o.m),0<o.O&&(o.M=new zn(I(o.Y,o,o.g),o.O)),u=o.U,f=o.g,_=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(mo[0]=P.toString()),P=mo);for(var D=0;D<P.length;D++){var $=wn(f,P[D],_||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Cr(),sc(o.i,o.u,o.A,o.l,o.R,o.m)}ct.prototype.ca=function(o){o=o.target;const u=this.M;u&&rt(o)==3?u.j():this.Y(o)},ct.prototype.Y=function(o){try{if(o==this.g)e:{const Ke=rt(this.g);var u=this.g.Ba();const Ge=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||ko(this.g)))){this.J||Ke!=4||u==7||(u==8||0>=Ge?Cr(3):Cr(2)),kr(this);var f=this.g.Z();this.X=f;t:if(bn(this)){var _=ko(this.g);o="";var P=_.length,D=rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rn(this),Dt(this);var $="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(_[u],{stream:!(D&&u==P-1)});_.length=0,this.h.g+=o,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,oc(this.i,this.u,this.A,this.l,this.R,Ke,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,je=this.g;if((ve=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(ve)){var pe=ve;break t}}pe=null}if(f=pe)nn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dr(this,f);else{this.o=!1,this.s=3,Ne(12),rn(this),Dt(this);break e}}if(this.P){f=!0;let yt;for(;!this.J&&this.C<$.length;)if(yt=An(this,$),yt==Je){Ke==4&&(this.s=4,Ne(14),f=!1),nn(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==nt){this.s=4,Ne(15),nn(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else nn(this.i,this.l,yt,null),Dr(this,yt);if(bn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||$.length!=0||this.h.h||(this.s=1,Ne(16),f=!1),this.o=this.o&&f,!f)nn(this.i,this.l,$,"[Invalid Chunked Response]"),rn(this),Dt(this);else if(0<$.length&&!this.W){this.W=!0;var We=this.j;We.g==this&&We.ba&&!We.M&&(We.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),bs(We),We.M=!0,Ne(11))}}else nn(this.i,this.l,$,null),Dr(this,$);Ke==4&&rn(this),this.o&&!this.J&&(Ke==4?As(this.j,this):(this.o=!1,Ht(this)))}else Do(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),rn(this),Dt(this)}}}catch{}finally{}};function bn(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function An(o,u){var f=o.C,_=u.indexOf(`
`,f);return _==-1?Je:(f=Number(u.substring(f,_)),isNaN(f)?nt:(_+=1,_+f>u.length?Je:(u=u.slice(_,_+f),o.C=_+f,u)))}ct.prototype.cancel=function(){this.J=!0,rn(this)};function Ht(o){o.S=Date.now()+o.I,as(o,o.I)}function as(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Rr(I(o.ba,o),u)}function kr(o){o.B&&(l.clearTimeout(o.B),o.B=null)}ct.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Gn(this.i,this.A),this.L!=2&&(Cr(),Ne(17)),rn(this),this.s=2,Dt(this)):as(this,this.S-o)};function Dt(o){o.j.G==0||o.J||As(o.j,o)}function rn(o){kr(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ui(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Dr(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||_i(f.h,o))){if(!o.K&&_i(f.h,o)&&f.G==3){try{var _=f.Da.g.parse(u)}catch{_=null}if(Array.isArray(_)&&_.length==3){var P=_;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Mr(f),Vr(f);else break e;Is(f),Ne(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Rr(I(f.Za,f),6e3));if(1>=hs(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Wt(f,11)}else if((o.K||f.g==o)&&Mr(f),!G(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let pe=P[u];if(f.T=pe[0],pe=pe[1],f.G==2)if(pe[0]=="c"){f.K=pe[1],f.ia=pe[2];const We=pe[3];We!=null&&(f.la=We,f.j.info("VER="+f.la));const Ke=pe[4];Ke!=null&&(f.Aa=Ke,f.j.info("SVER="+f.Aa));const Ge=pe[5];Ge!=null&&typeof Ge=="number"&&0<Ge&&(_=1.5*Ge,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const yt=o.g;if(yt){const Fr=yt.g?yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fr){var D=_.h;D.g||Fr.indexOf("spdy")==-1&&Fr.indexOf("quic")==-1&&Fr.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(yi(D,D.h),D.h=null))}if(_.D){const Ri=yt.g?yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ri&&(_.ya=Ri,ge(_.I,_.D,Ri))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var $=o;if(_.qa=Cs(_,_.J?_.ia:null,_.W),$.K){ds(_.h,$);var ve=$,je=_.L;je&&(ve.I=je),ve.B&&(kr(ve),Ht(ve)),_.g=$}else xr(_);0<f.i.length&&Lr(f)}else pe[0]!="stop"&&pe[0]!="close"||Wt(f,7);else f.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Wt(f,7):Ii(f):pe[0]!="noop"&&f.l&&f.l.ta(pe),f.v=0)}}Cr(4)}catch{}}var cs=class{constructor(o,u){this.g=o,this.map=u}};function ls(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function us(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function hs(o){return o.h?1:o.g?o.g.size:0}function _i(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function yi(o,u){o.g?o.g.add(u):o.h=u}function ds(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ls.prototype.cancel=function(){if(this.i=fs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function fs(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return H(o.i)}function wo(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(d(o)){for(var u=[],f=o.length,_=0;_<f;_++)u.push(o[_]);return u}u=[],f=0;for(_ in o)u[f++]=o[_];return u}function To(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(d(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const _ in o)u[f++]=_;return u}}}function ps(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(d(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=To(o),_=wo(o),P=_.length,D=0;D<P;D++)u.call(void 0,_[D],f&&f[D],o)}var It=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lt(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var _=o[f].indexOf("="),P=null;if(0<=_){var D=o[f].substring(0,_);P=o[f].substring(_+1)}else D=o[f];u(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function ut(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ut){this.h=o.h,Qn(this,o.j),this.o=o.o,this.g=o.g,Yn(this,o.s),this.l=o.l;var u=o.i,f=new _t;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),bt(this,f),this.m=o.m}else o&&(u=String(o).match(It))?(this.h=!1,Qn(this,u[1]||"",!0),this.o=Ot(u[2]||""),this.g=Ot(u[3]||"",!0),Yn(this,u[4]),this.l=Ot(u[5]||"",!0),bt(this,u[6]||"",!0),this.m=Ot(u[7]||"")):(this.h=!1,this.i=new _t(null,this.h))}ut.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Rn(u,Sn,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Rn(u,Sn,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Rn(f,f.charAt(0)=="/"?bo:ms,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Rn(f,ac)),o.join("")};function De(o){return new ut(o)}function Qn(o,u,f){o.j=f?Ot(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Yn(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function bt(o,u,f){u instanceof _t?(o.i=u,Ao(o.i,o.h)):(f||(u=Rn(u,zt)),o.i=new _t(u,o.h))}function ge(o,u,f){o.i.set(u,f)}function Cn(o){return ge(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ot(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Rn(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Io),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Io(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Sn=/[#\/\?@]/g,ms=/[#\?:]/g,bo=/[#\?]/g,zt=/[#\?@]/g,ac=/#/g;function _t(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function At(o){o.g||(o.g=new Map,o.h=0,o.i&&lt(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=_t.prototype,n.add=function(o,u){At(this),this.i=null,o=Nt(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function gs(o,u){At(o),u=Nt(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Xn(o,u){return At(o),u=Nt(o,u),o.g.has(u)}n.forEach=function(o,u){At(this),this.g.forEach(function(f,_){f.forEach(function(P){o.call(u,P,_,this)},this)},this)},n.na=function(){At(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let _=0;_<u.length;_++){const P=o[_];for(let D=0;D<P.length;D++)f.push(u[_])}return f},n.V=function(o){At(this);let u=[];if(typeof o=="string")Xn(this,o)&&(u=u.concat(this.g.get(Nt(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return At(this),this.i=null,o=Nt(this,o),Xn(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function vi(o,u,f){gs(o,u),0<f.length&&(o.i=null,o.g.set(Nt(o,u),H(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var _=u[f];const D=encodeURIComponent(String(_)),$=this.V(_);for(_=0;_<$.length;_++){var P=D;$[_]!==""&&(P+="="+encodeURIComponent(String($[_]))),o.push(P)}}return this.i=o.join("&")};function Nt(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Ao(o,u){u&&!o.j&&(At(o),o.i=null,o.g.forEach(function(f,_){var P=_.toLowerCase();_!=P&&(gs(this,_),vi(this,P,f))},o)),o.j=u}function Co(o,u){const f=new Sr;if(l.Image){const _=new Image;_.onload=N(ht,f,"TestLoadImage: loaded",!0,u,_),_.onerror=N(ht,f,"TestLoadImage: error",!1,u,_),_.onabort=N(ht,f,"TestLoadImage: abort",!1,u,_),_.ontimeout=N(ht,f,"TestLoadImage: timeout",!1,u,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=o}else u(!1)}function Ro(o,u){const f=new Sr,_=new AbortController,P=setTimeout(()=>{_.abort(),ht(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:_.signal}).then(D=>{clearTimeout(P),D.ok?ht(f,"TestPingServer: ok",!0,u):ht(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),ht(f,"TestPingServer: error",!1,u)})}function ht(o,u,f,_,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),_(f)}catch{}}function cc(){this.g=new ic}function So(o,u,f){const _=f||"";try{ps(o,function(P,D){let $=P;p(P)&&($=is(P)),u.push(_+D+"="+encodeURIComponent($))})}catch(P){throw u.push(_+"type="+encodeURIComponent("_badmap")),P}}function Jn(o){this.l=o.Ub||null,this.j=o.eb||!1}U(Jn,ss),Jn.prototype.g=function(){return new Pn(this.l,this.j)},Jn.prototype.i=function(o){return function(){return o}}({});function Pn(o,u){$e.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(Pn,$e),n=Pn.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,sn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Or(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,sn(this)),this.g&&(this.readyState=3,sn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ei(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ei(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Or(this):sn(this),this.readyState==3&&Ei(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Or(this))},n.Qa=function(o){this.g&&(this.response=o,Or(this))},n.ga=function(){this.g&&Or(this)};function Or(o){o.readyState=4,o.l=null,o.j=null,o.v=null,sn(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function sn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Po(o){let u="";return Pe(o,function(f,_){u+=_,u+=":",u+=f,u+=`\r
`}),u}function wi(o,u,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=Po(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):ge(o,u,f))}function Ce(o){$e.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Ce,$e);var _s=/^https?$/i,ys=["POST","PUT"];n=Ce.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():os.g(),this.v=this.o?go(this.o):go(os),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(D){vs(this,D);return}if(o=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var P in _)f.set(P,_[P]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())f.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ys,u,void 0))||_||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of f)this.g.setRequestHeader(D,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Es(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){vs(this,D)}};function vs(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Zn(o),Nr(o)}function Zn(o){o.A||(o.A=!0,Xe(o,"complete"),Xe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Xe(this,"complete"),Xe(this,"abort"),Nr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nr(this,!0)),Ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ti(this):this.bb())},n.bb=function(){Ti(this)};function Ti(o){if(o.h&&typeof c<"u"&&(!o.v[1]||rt(o)!=4||o.Z()!=2)){if(o.u&&rt(o)==4)Hn(o.Ea,0,o);else if(Xe(o,"readystatechange"),rt(o)==4){o.h=!1;try{const $=o.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var _;if(_=$===0){var P=String(o.D).match(It)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),_=!_s.test(P?P.toLowerCase():"")}f=_}if(f)Xe(o,"complete"),Xe(o,"success");else{o.m=6;try{var D=2<rt(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",Zn(o)}}finally{Nr(o)}}}}function Nr(o,u){if(o.g){Es(o);const f=o.g,_=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Xe(o,"ready");try{f.onreadystatechange=_}catch{}}}function Es(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function rt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<rt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),rc(u)}};function ko(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Do(o){const u={};o=(o.g&&2<=rt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<o.length;_++){if(G(o[_]))continue;var f=S(o[_]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=u[P]||[];u[P]=D,D.push(f)}R(u,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function er(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function ws(o){this.Aa=0,this.i=[],this.j=new Sr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=er("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=er("baseRetryDelayMs",5e3,o),this.cb=er("retryDelaySeedMs",1e4,o),this.Wa=er("forwardChannelMaxRetries",2,o),this.wa=er("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ls(o&&o.concurrentRequestLimit),this.Da=new cc,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ws.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,_){Ne(0),this.W=o,this.H=u||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=Cs(this,null,this.W),Lr(this)};function Ii(o){if(bi(o),o.G==3){var u=o.U++,f=De(o.I);if(ge(f,"SID",o.K),ge(f,"RID",u),ge(f,"TYPE","terminate"),tr(o,f),u=new ct(o,o.j,u),u.L=2,u.v=Cn(De(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Vo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ht(u)}No(o)}function Vr(o){o.g&&(bs(o),o.g.cancel(),o.g=null)}function bi(o){Vr(o),o.u&&(l.clearTimeout(o.u),o.u=null),Mr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Lr(o){if(!us(o.h)&&!o.s){o.s=!0;var u=o.Ga;yn||M(),br||(yn(),br=!0),si.add(u,o),o.B=0}}function lc(o,u){return hs(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Rr(I(o.Ga,o,u),on(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new ct(this,this.j,o);let D=this.o;if(this.S&&(D?(D=v(D),b(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(u+=_,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Ts(this,P,u),f=De(this.I),ge(f,"RID",o),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),tr(this,f),D&&(this.O?u="headers="+encodeURIComponent(String(Po(D)))+"&"+u:this.m&&wi(f,this.m,D)),yi(this.h,P),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",u),ge(f,"SID","null"),P.T=!0,Be(P,f,null)):Be(P,f,u),this.G=2}}else this.G==3&&(o?Oo(this,o):this.i.length==0||us(this.h)||Oo(this))};function Oo(o,u){var f;u?f=u.l:f=o.U++;const _=De(o.I);ge(_,"SID",o.K),ge(_,"RID",f),ge(_,"AID",o.T),tr(o,_),o.m&&o.o&&wi(_,o.m,o.o),f=new ct(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Ts(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),yi(o.h,f),Be(f,_,u)}function tr(o,u){o.H&&Pe(o.H,function(f,_){ge(u,_,f)}),o.l&&ps({},function(f,_){ge(u,_,f)})}function Ts(o,u,f){f=Math.min(o.i.length,f);var _=o.l?I(o.l.Na,o.l,o):null;e:{var P=o.i;let D=-1;for(;;){const $=["count="+f];D==-1?0<f?(D=P[0].g,$.push("ofs="+D)):D=0:$.push("ofs="+D);let ve=!0;for(let je=0;je<f;je++){let pe=P[je].g;const We=P[je].map;if(pe-=D,0>pe)D=Math.max(0,P[je].g-100),ve=!1;else try{So(We,$,"req"+pe+"_")}catch{_&&_(We)}}if(ve){_=$.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,_}function xr(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;yn||M(),br||(yn(),br=!0),si.add(u,o),o.v=0}}function Is(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Rr(I(o.Fa,o),on(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ai(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Rr(I(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),Vr(this),Ai(this))};function bs(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ai(o){o.g=new ct(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=De(o.qa);ge(u,"RID","rpc"),ge(u,"SID",o.K),ge(u,"AID",o.T),ge(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ge(u,"TO",o.ja),ge(u,"TYPE","xmlhttp"),tr(o,u),o.m&&o.o&&wi(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Cn(De(u)),f.m=null,f.P=!0,Pr(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Vr(this),Is(this),Ne(19))};function Mr(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function As(o,u){var f=null;if(o.g==u){Mr(o),bs(o),o.g=null;var _=2}else if(_i(o.h,u))f=u.D,ds(o.h,u),_=1;else return;if(o.G!=0){if(u.o)if(_==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;_=di(),Xe(_,new Eo(_,f)),Lr(o)}else xr(o);else if(P=u.s,P==3||P==0&&0<u.X||!(_==1&&lc(o,u)||_==2&&Is(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),P){case 1:Wt(o,5);break;case 4:Wt(o,10);break;case 3:Wt(o,6);break;default:Wt(o,2)}}}function on(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Wt(o,u){if(o.j.info("Error code "+u),u==2){var f=I(o.fb,o),_=o.Xa;const P=!_;_=new ut(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Qn(_,"https"),Cn(_),P?Co(_.toString(),f):Ro(_.toString(),f)}else Ne(2);o.G=0,o.l&&o.l.sa(u),No(o),bi(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function No(o){if(o.G=0,o.ka=[],o.l){const u=fs(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,H(o.i),o.i.length=0),o.l.ra()}}function Cs(o,u,f){var _=f instanceof ut?De(f):new ut(f);if(_.g!="")u&&(_.g=u+"."+_.g),Yn(_,_.s);else{var P=l.location;_=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var D=new ut(null);_&&Qn(D,_),u&&(D.g=u),P&&Yn(D,P),f&&(D.l=f),_=D}return f=o.D,u=o.ya,f&&u&&ge(_,f,u),ge(_,"VER",o.la),tr(o,_),_}function Vo(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ce(new Jn({eb:f})):new Ce(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lo(){}n=Lo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ci(){}Ci.prototype.g=function(o,u){return new dt(o,u)};function dt(o,u){$e.call(this),this.g=new ws(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!G(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!G(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new nr(this)}U(dt,$e),dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){Ii(this.g)},dt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=is(o),o=f);u.i.push(new cs(u.Ya++,o)),u.G==3&&Lr(u)},dt.prototype.N=function(){this.g.l=null,delete this.j,Ii(this.g),delete this.g,dt.aa.N.call(this)};function Rs(o){Kn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}U(Rs,Kn);function Ss(){hi.call(this),this.status=1}U(Ss,hi);function nr(o){this.g=o}U(nr,Lo),nr.prototype.ua=function(){Xe(this.g,"a")},nr.prototype.ta=function(o){Xe(this.g,new Rs(o))},nr.prototype.sa=function(o){Xe(this.g,new Ss)},nr.prototype.ra=function(){Xe(this.g,"b")},Ci.prototype.createWebChannel=Ci.prototype.g,dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,Bf=function(){return new Ci},$f=function(){return di()},Uf=tn,zc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pi.NO_ERROR=0,pi.TIMEOUT=8,pi.HTTP_ERROR=6,na=pi,mi.COMPLETE="complete",Ff=mi,_o.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",$e.prototype.listen=$e.prototype.K,Vs=_o,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,Mf=Ce}).apply(typeof Wo<"u"?Wo:typeof self<"u"?self:typeof window<"u"?window:{});const Nh="@firebase/firestore",Vh="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Oa("@firebase/firestore");function ki(){return Xr.logLevel}function q(n,...e){if(Xr.logLevel<=he.DEBUG){const t=e.map(bl);Xr.debug(`Firestore (${Gi}): ${n}`,...t)}}function Fn(n,...e){if(Xr.logLevel<=he.ERROR){const t=e.map(bl);Xr.error(`Firestore (${Gi}): ${n}`,...t)}}function Fi(n,...e){if(Xr.logLevel<=he.WARN){const t=e.map(bl);Xr.warn(`Firestore (${Gi}): ${n}`,...t)}}function bl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,jf(n,r,t)}function jf(n,e,t){let r=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Fn(r),new Error(r)}function ye(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||jf(e,i,r)}function se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Zt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(st.UNAUTHENTICATED))}shutdown(){}}class ow{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class aw{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,t(d)):Promise.resolve();let s=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ln,e.enqueueRetryable(()=>i(this.currentUser))};const c=()=>{const d=s;e.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},l=d=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ln)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string",31837,{l:r}),new qf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class cw{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lw{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new cw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const c=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Lh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Lh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=hw(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function le(n,e){return n<e?-1:n>e?1:0}function Wc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return le(r,i);{const s=Hf(),c=dw(s.encode(xh(n,t)),s.encode(xh(e,t)));return c!==0?c:le(r,i)}}t+=r>65535?2:1}return le(n.length,e.length)}function xh(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function dw(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return le(n[t],e[t]);return le(n.length,e.length)}function Ui(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=-62135596800,Fh=1e6;class qe{static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Fh);return new qe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Mh)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fh}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Mh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new qe(0,0))}static max(){return new ne(new qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="__name__";class ln{constructor(e,t,r){t===void 0?t=0:t>e.length&&Z(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Z(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=ln.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return le(e.length,t.length)}static compareSegments(e,t){const r=ln.isNumericId(e),i=ln.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?ln.extractNumericId(e).compare(ln.extractNumericId(t)):Wc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fr.fromString(e.substring(4,e.length-2))}}class Se extends ln{construct(e,t,r){return new Se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Se(t)}static emptyPath(){return new Se([])}}const fw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends ln{construct(e,t,r){return new et(e,t,r)}static isValidIdentifier(e){return fw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Uh}static keyField(){return new et([Uh])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,i+=2}else l==="`"?(c=!c,i++):l!=="."||c?(r+=l,i++):(s(),i++)}if(s(),c)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(t)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Se.fromString(e))}static fromName(e){return new Y(Se.fromString(e).popFirst(5))}static empty(){return new Y(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Se(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=-1;function pw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new qe(t+1,0):new qe(t,r));return new gr(i,Y.empty(),e)}function mw(n){return new gr(n.readTime,n.key,Gs)}class gr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new gr(ne.min(),Y.empty(),Gs)}static max(){return new gr(ne.max(),Y.empty(),Gs)}}function gw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==_w)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let i=0,s=0,c=!1;e.forEach(l=>{++i,l.next(()=>{++s,c&&s===i&&t()},d=>r(d))}),c=!0,s===i&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(i=>i?V.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new V((r,i)=>{const s=e.length,c=new Array(s);let l=0;for(let d=0;d<s;d++){const p=d;t(e[p]).next(y=>{c[p]=y,++l,l===s&&r(c)},y=>i(y))}})}static doWhile(e,t){return new V((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function vw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}xa.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=-1;function Ma(n){return n==null}function _a(n){return n===0&&1/n==-1/0}function Ew(n){return typeof n=="number"&&Number.isInteger(n)&&!_a(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="";function ww(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=$h(e)),e=Tw(n.get(t),e);return $h(e)}function Tw(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Wf:t+="";break;default:t+=s}}return t}function $h(n){return n+Wf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Tr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Kf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new ke(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ko(this.root,e,this.comparator,!0)}}class Ko{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ze.RED,this.left=i??Ze.EMPTY,this.right=s??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ze(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jh(this.data.getIterator())}getIteratorFrom(e){return new jh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new He(this.comparator);return t.data=e,t}}class jh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new St([])}unionWith(e){let t=new He(et.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new St(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ui(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Gf("Invalid base64 string: "+s):s}}(e);return new tt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let c=0;c<i.length;++c)s+=String.fromCharCode(i[c]);return s}(e);return new tt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const Iw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(n){if(ye(!!n,39018),typeof n=="string"){let e=0;const t=Iw.exec(n);if(ye(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yr(n){return typeof n=="string"?tt.fromBase64String(n):tt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="server_timestamp",Yf="__type__",Xf="__previous_value__",Jf="__local_write_time__";function Cl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Yf])===null||t===void 0?void 0:t.stringValue)===Qf}function Fa(n){const e=n.mapValue.fields[Xf];return Cl(e)?Fa(e):e}function Qs(n){const e=_r(n.mapValue.fields[Jf].timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t,r,i,s,c,l,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=p,this.isUsingEmulator=y}}const ya="(default)";class Ys{constructor(e,t){this.projectId=e,this.database=t||ya}static empty(){return new Ys("","")}get isDefaultDatabase(){return this.database===ya}isEqual(e){return e instanceof Ys&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="__type__",Aw="__max__",Go={mapValue:{}},ep="__vector__",va="value";function vr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Cl(n)?4:Rw(n)?9007199254740991:Cw(n)?10:11:Z(28295,{value:n})}function pn(n,e){if(n===e)return!0;const t=vr(n);if(t!==vr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Qs(n).isEqual(Qs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const c=_r(i.timestampValue),l=_r(s.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return yr(i.bytesValue).isEqual(yr(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const c=Le(i.doubleValue),l=Le(s.doubleValue);return c===l?_a(c)===_a(l):isNaN(c)&&isNaN(l)}return!1}(n,e);case 9:return Ui(n.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(i,s){const c=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Bh(c)!==Bh(l))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(l[d]===void 0||!pn(c[d],l[d])))return!1;return!0}(n,e);default:return Z(52216,{left:n})}}function Xs(n,e){return(n.values||[]).find(t=>pn(t,e))!==void 0}function $i(n,e){if(n===e)return 0;const t=vr(n),r=vr(e);if(t!==r)return le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(s,c){const l=Le(s.integerValue||s.doubleValue),d=Le(c.integerValue||c.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(n,e);case 3:return qh(n.timestampValue,e.timestampValue);case 4:return qh(Qs(n),Qs(e));case 5:return Wc(n.stringValue,e.stringValue);case 6:return function(s,c){const l=yr(s),d=yr(c);return l.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(s,c){const l=s.split("/"),d=c.split("/");for(let p=0;p<l.length&&p<d.length;p++){const y=le(l[p],d[p]);if(y!==0)return y}return le(l.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,c){const l=le(Le(s.latitude),Le(c.latitude));return l!==0?l:le(Le(s.longitude),Le(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Hh(n.arrayValue,e.arrayValue);case 10:return function(s,c){var l,d,p,y;const T=s.fields||{},I=c.fields||{},N=(l=T[va])===null||l===void 0?void 0:l.arrayValue,U=(d=I[va])===null||d===void 0?void 0:d.arrayValue,H=le(((p=N==null?void 0:N.values)===null||p===void 0?void 0:p.length)||0,((y=U==null?void 0:U.values)===null||y===void 0?void 0:y.length)||0);return H!==0?H:Hh(N,U)}(n.mapValue,e.mapValue);case 11:return function(s,c){if(s===Go.mapValue&&c===Go.mapValue)return 0;if(s===Go.mapValue)return 1;if(c===Go.mapValue)return-1;const l=s.fields||{},d=Object.keys(l),p=c.fields||{},y=Object.keys(p);d.sort(),y.sort();for(let T=0;T<d.length&&T<y.length;++T){const I=Wc(d[T],y[T]);if(I!==0)return I;const N=$i(l[d[T]],p[y[T]]);if(N!==0)return N}return le(d.length,y.length)}(n.mapValue,e.mapValue);default:throw Z(23264,{Pe:t})}}function qh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=_r(n),r=_r(e),i=le(t.seconds,r.seconds);return i!==0?i:le(t.nanos,r.nanos)}function Hh(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=$i(t[i],r[i]);if(s)return s}return le(t.length,r.length)}function Bi(n){return Kc(n)}function Kc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=_r(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return yr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Kc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const c of r)s?s=!1:i+=",",i+=`${c}:${Kc(t.fields[c])}`;return i+"}"}(n.mapValue):Z(61005,{value:n})}function ra(n){switch(vr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fa(n);return e?16+ra(e):16;case 5:return 2*n.stringValue.length;case 6:return yr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ra(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Tr(r.fields,(s,c)=>{i+=s.length+ra(c)}),i}(n.mapValue);default:throw Z(13486,{value:n})}}function zh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Gc(n){return!!n&&"integerValue"in n}function Rl(n){return!!n&&"arrayValue"in n}function Wh(n){return!!n&&"nullValue"in n}function Kh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ia(n){return!!n&&"mapValue"in n}function Cw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Zf])===null||t===void 0?void 0:t.stringValue)===ep}function $s(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Tr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=$s(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$s(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Rw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Aw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ia(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(t)}setAll(e){let t=et.emptyPath(),r={},i=[];e.forEach((c,l)=>{if(!t.isImmediateParentOf(l)){const d=this.getFieldsMap(t);this.applyChanges(d,r,i),r={},i=[],t=l.popLast()}c?r[l.lastSegment()]=$s(c):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ia(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ia(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Tr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Et($s(this.value))}}function tp(n){const e=[];return Tr(n.fields,(t,r)=>{const i=new et([t]);if(ia(r)){const s=tp(r.mapValue).fields;if(s.length===0)e.push(i);else for(const c of s)e.push(i.child(c))}else e.push(i)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,r,i,s,c,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=c,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,ne.min(),ne.min(),ne.min(),Et.empty(),0)}static newFoundDocument(e,t,r,i){return new ot(e,1,t,ne.min(),r,i,0)}static newNoDocument(e,t){return new ot(e,2,t,ne.min(),ne.min(),Et.empty(),0)}static newUnknownDocument(e,t){return new ot(e,3,t,ne.min(),ne.min(),Et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.position=e,this.inclusive=t}}function Gh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],c=n.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(c.referenceValue),t.key):r=$i(c,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t="asc"){this.field=e,this.dir=t}}function Sw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{}class Ue extends np{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new kw(e,t,r):t==="array-contains"?new Nw(e,r):t==="in"?new Vw(e,r):t==="not-in"?new Lw(e,r):t==="array-contains-any"?new xw(e,r):new Ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Dw(e,r):new Ow(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison($i(t,this.value)):t!==null&&vr(this.value)===vr(t)&&this.matchesComparison($i(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends np{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Jt(e,t)}matches(e){return rp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function rp(n){return n.op==="and"}function ip(n){return Pw(n)&&rp(n)}function Pw(n){for(const e of n.filters)if(e instanceof Jt)return!1;return!0}function Qc(n){if(n instanceof Ue)return n.field.canonicalString()+n.op.toString()+Bi(n.value);if(ip(n))return n.filters.map(e=>Qc(e)).join(",");{const e=n.filters.map(t=>Qc(t)).join(",");return`${n.op}(${e})`}}function sp(n,e){return n instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&pn(r.value,i.value)}(n,e):n instanceof Jt?function(r,i){return i instanceof Jt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,c,l)=>s&&sp(c,i.filters[l]),!0):!1}(n,e):void Z(19439)}function op(n){return n instanceof Ue?function(t){return`${t.field.canonicalString()} ${t.op} ${Bi(t.value)}`}(n):n instanceof Jt?function(t){return t.op.toString()+" {"+t.getFilters().map(op).join(" ,")+"}"}(n):"Filter"}class kw extends Ue{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class Dw extends Ue{constructor(e,t){super(e,"in",t),this.keys=ap("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ow extends Ue{constructor(e,t){super(e,"not-in",t),this.keys=ap("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ap(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Y.fromName(r.referenceValue))}class Nw extends Ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Rl(t)&&Xs(t.arrayValue,this.value)}}class Vw extends Ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xs(this.value.arrayValue,t)}}class Lw extends Ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Xs(this.value.arrayValue,t)}}class xw extends Ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Rl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Xs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t=null,r=[],i=[],s=null,c=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=c,this.endAt=l,this.Ie=null}}function Yh(n,e=null,t=[],r=[],i=null,s=null,c=null){return new Mw(n,e,t,r,i,s,c)}function Sl(n){const e=se(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Qc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ma(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Bi(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Bi(r)).join(",")),e.Ie=t}return e.Ie}function Pl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Sw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!sp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Qh(n.startAt,e.startAt)&&Qh(n.endAt,e.endAt)}function Yc(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t=null,r=[],i=[],s=null,c="F",l=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=c,this.startAt=l,this.endAt=d,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Fw(n,e,t,r,i,s,c,l){return new so(n,e,t,r,i,s,c,l)}function kl(n){return new so(n)}function Xh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function cp(n){return n.collectionGroup!==null}function Bs(n){const e=se(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let l=new He(et.comparator);return c.filters.forEach(d=>{d.getFlattenedFilters().forEach(p=>{p.isInequality()&&(l=l.add(p.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new wa(s,r))}),t.has(et.keyField().canonicalString())||e.Ee.push(new wa(et.keyField(),r))}return e.Ee}function hn(n){const e=se(n);return e.de||(e.de=Uw(e,Bs(n))),e.de}function Uw(n,e){if(n.limitType==="F")return Yh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wa(i.field,s)});const t=n.endAt?new Ea(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ea(n.startAt.position,n.startAt.inclusive):null;return Yh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Xc(n,e){const t=n.filters.concat([e]);return new so(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Jc(n,e,t){return new so(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ua(n,e){return Pl(hn(n),hn(e))&&n.limitType===e.limitType}function lp(n){return`${Sl(hn(n))}|lt:${n.limitType}`}function Di(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>op(i)).join(", ")}]`),Ma(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Bi(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Bi(i)).join(",")),`Target(${r})`}(hn(n))}; limitType=${n.limitType})`}function $a(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Bs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(c,l,d){const p=Gh(c,l,d);return c.inclusive?p<=0:p<0}(r.startAt,Bs(r),i)||r.endAt&&!function(c,l,d){const p=Gh(c,l,d);return c.inclusive?p>=0:p>0}(r.endAt,Bs(r),i))}(n,e)}function $w(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function up(n){return(e,t)=>{let r=!1;for(const i of Bs(n)){const s=Bw(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Bw(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):function(s,c,l){const d=c.data.field(s),p=l.data.field(s);return d!==null&&p!==null?$i(d,p):Z(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Tr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Kf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=new ke(Y.comparator);function Un(){return jw}const hp=new ke(Y.comparator);function Ls(...n){let e=hp;for(const t of n)e=e.insert(t.key,t);return e}function dp(n){let e=hp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Kr(){return js()}function fp(){return js()}function js(){return new ri(n=>n.toString(),(n,e)=>n.isEqual(e))}const qw=new ke(Y.comparator),Hw=new He(Y.comparator);function de(...n){let e=Hw;for(const t of n)e=e.add(t);return e}const zw=new He(le);function Ww(){return zw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_a(e)?"-0":e}}function pp(n){return{integerValue:""+n}}function Kw(n,e){return Ew(e)?pp(e):Dl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this._=void 0}}function Gw(n,e,t){return n instanceof Ta?function(i,s){const c={fields:{[Yf]:{stringValue:Qf},[Jf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Cl(s)&&(s=Fa(s)),s&&(c.fields[Xf]=s),{mapValue:c}}(t,e):n instanceof Js?gp(n,e):n instanceof Zs?_p(n,e):function(i,s){const c=mp(i,s),l=Jh(c)+Jh(i.Re);return Gc(c)&&Gc(i.Re)?pp(l):Dl(i.serializer,l)}(n,e)}function Qw(n,e,t){return n instanceof Js?gp(n,e):n instanceof Zs?_p(n,e):t}function mp(n,e){return n instanceof Ia?function(r){return Gc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ta extends Ba{}class Js extends Ba{constructor(e){super(),this.elements=e}}function gp(n,e){const t=yp(e);for(const r of n.elements)t.some(i=>pn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Zs extends Ba{constructor(e){super(),this.elements=e}}function _p(n,e){let t=yp(e);for(const r of n.elements)t=t.filter(i=>!pn(i,r));return{arrayValue:{values:t}}}class Ia extends Ba{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Jh(n){return Le(n.integerValue||n.doubleValue)}function yp(n){return Rl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Yw(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Js&&i instanceof Js||r instanceof Zs&&i instanceof Zs?Ui(r.elements,i.elements,pn):r instanceof Ia&&i instanceof Ia?pn(r.Re,i.Re):r instanceof Ta&&i instanceof Ta}(n.transform,e.transform)}class Xw{constructor(e,t){this.version=e,this.transformResults=t}}class Yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sa(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ja{}function vp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ol(n.key,Yt.none()):new oo(n.key,n.data,Yt.none());{const t=n.data,r=Et.empty();let i=new He(et.comparator);for(let s of e.fields)if(!i.has(s)){let c=t.field(s);c===null&&s.length>1&&(s=s.popLast(),c=t.field(s)),c===null?r.delete(s):r.set(s,c),i=i.add(s)}return new Ir(n.key,r,new St(i.toArray()),Yt.none())}}function Jw(n,e,t){n instanceof oo?function(i,s,c){const l=i.value.clone(),d=ed(i.fieldTransforms,s,c.transformResults);l.setAll(d),s.convertToFoundDocument(c.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ir?function(i,s,c){if(!sa(i.precondition,s))return void s.convertToUnknownDocument(c.version);const l=ed(i.fieldTransforms,s,c.transformResults),d=s.data;d.setAll(Ep(i)),d.setAll(l),s.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):function(i,s,c){s.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function qs(n,e,t,r){return n instanceof oo?function(s,c,l,d){if(!sa(s.precondition,c))return l;const p=s.value.clone(),y=td(s.fieldTransforms,d,c);return p.setAll(y),c.convertToFoundDocument(c.version,p).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ir?function(s,c,l,d){if(!sa(s.precondition,c))return l;const p=td(s.fieldTransforms,d,c),y=c.data;return y.setAll(Ep(s)),y.setAll(p),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(s,c,l){return sa(s.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):l}(n,e,t)}function Zw(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=mp(r.transform,i||null);s!=null&&(t===null&&(t=Et.empty()),t.set(r.field,s))}return t||null}function Zh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ui(r,i,(s,c)=>Yw(s,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class oo extends ja{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ir extends ja{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ep(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ed(n,e,t){const r=new Map;ye(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const s=n[i],c=s.transform,l=e.data.field(s.field);r.set(s.field,Qw(c,l,t[i]))}return r}function td(n,e,t){const r=new Map;for(const i of n){const s=i.transform,c=t.data.field(i.field);r.set(i.field,Gw(s,c,e))}return r}class Ol extends ja{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eT extends ja{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Jw(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=qs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=qs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=fp();return this.mutations.forEach(i=>{const s=e.get(i.key),c=s.overlayedDocument;let l=this.applyToLocalView(c,s.mutatedFields);l=t.has(i.key)?null:l;const d=vp(c,l);d!==null&&r.set(i.key,d),c.isValidDocument()||c.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),de())}isEqual(e){return this.batchId===e.batchId&&Ui(this.mutations,e.mutations,(t,r)=>Zh(t,r))&&Ui(this.baseMutations,e.baseMutations,(t,r)=>Zh(t,r))}}class Nl{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ye(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return qw}();const s=e.mutations;for(let c=0;c<s.length;c++)i=i.insert(s[c].key,r[c].version);return new Nl(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,me;function iT(n){switch(n){case L.OK:return Z(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Z(15467,{code:n})}}function wp(n){if(n===void 0)return Fn("GRPC error has no .code"),L.UNKNOWN;switch(n){case Fe.OK:return L.OK;case Fe.CANCELLED:return L.CANCELLED;case Fe.UNKNOWN:return L.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return L.INTERNAL;case Fe.UNAVAILABLE:return L.UNAVAILABLE;case Fe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Fe.NOT_FOUND:return L.NOT_FOUND;case Fe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Fe.ABORTED:return L.ABORTED;case Fe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Fe.DATA_LOSS:return L.DATA_LOSS;default:return Z(39323,{code:n})}}(me=Fe||(Fe={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=new fr([4294967295,4294967295],0);function nd(n){const e=Hf().encode(n),t=new xf;return t.update(e),new Uint8Array(t.digest())}function rd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fr([t,r],0),new fr([i,s],0)]}class Vl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new xs(`Invalid padding: ${t}`);if(r<0)throw new xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new xs(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=fr.fromNumber(this.pe)}we(e,t,r){let i=e.add(t.multiply(fr.fromNumber(r)));return i.compare(sT)===1&&(i=new fr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=nd(e),[r,i]=rd(t);for(let s=0;s<this.hashCount;s++){const c=this.we(r,i,s);if(!this.be(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),c=new Vl(s,i,t);return r.forEach(l=>c.insert(l)),c}insert(e){if(this.pe===0)return;const t=nd(e),[r,i]=rd(t);for(let s=0;s<this.hashCount;s++){const c=this.we(r,i,s);this.Se(c)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ao.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new qa(ne.min(),i,new ke(le),Un(),de())}}class ao{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ao(r,t,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,r,i){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=i}}class Tp{constructor(e,t){this.targetId=e,this.Ce=t}}class Ip{constructor(e,t,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class id{constructor(){this.Fe=0,this.Me=sd(),this.xe=tt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=de(),t=de(),r=de();return this.Me.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Z(38017,{changeType:s})}}),new ao(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=sd()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ye(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class oT{constructor(e){this.ze=e,this.je=new Map,this.He=Un(),this.Je=Qo(),this.Ye=Qo(),this.Ze=new ke(le)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}ot(e){const t=e.targetId,r=e.Ce.count,i=this._t(t);if(i){const s=i.target;if(Yc(s))if(r===0){const c=new Y(s.path);this.tt(t,c,ot.newNoDocument(c,ne.min()))}else ye(r===1,20013,{expectedCount:r});else{const c=this.ut(t);if(c!==r){const l=this.ct(e),d=l?this.lt(l,e,c):1;if(d!==0){this.st(t);const p=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,p)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let c,l;try{c=yr(r).toUint8Array()}catch(d){if(d instanceof Gf)return Fi("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new Vl(c,i,s)}catch(d){return Fi(d instanceof xs?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.pe===0?null:l}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const c=this.ze.Pt(),l=`projects/${c.projectId}/databases/${c.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.tt(t,s,null),i++)}),i}It(e){const t=new Map;this.je.forEach((s,c)=>{const l=this._t(c);if(l){if(s.current&&Yc(l.target)){const d=new Y(l.target.path);this.Et(d).has(c)||this.dt(c,d)||this.tt(c,d,ot.newNoDocument(d,e))}s.Le&&(t.set(c,s.qe()),s.Qe())}});let r=de();this.Ye.forEach((s,c)=>{let l=!0;c.forEachWhile(d=>{const p=this._t(d);return!p||p.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.He.forEach((s,c)=>c.setReadTime(e));const i=new qa(e,t,this.Ze,this.He,r);return this.He=Un(),this.Je=Qo(),this.Ye=Qo(),this.Ze=new ke(le),i}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,t)?i.$e(t,1):i.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new id,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new He(le),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new He(le),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new id),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Qo(){return new ke(Y.comparator)}function sd(){return new ke(Y.comparator)}const aT={asc:"ASCENDING",desc:"DESCENDING"},cT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lT={and:"AND",or:"OR"};class uT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zc(n,e){return n.useProto3Json||Ma(e)?e:{value:e}}function ba(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function hT(n,e){return ba(n,e.toTimestamp())}function dn(n){return ye(!!n,49232),ne.fromTimestamp(function(t){const r=_r(t);return new qe(r.seconds,r.nanos)}(n))}function Ll(n,e){return el(n,e).canonicalString()}function el(n,e){const t=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ap(n){const e=Se.fromString(n);return ye(kp(e),10190,{key:e.toString()}),e}function tl(n,e){return Ll(n.databaseId,e.path)}function kc(n,e){const t=Ap(e);if(t.get(1)!==n.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(Rp(t))}function Cp(n,e){return Ll(n.databaseId,e)}function dT(n){const e=Ap(n);return e.length===4?Se.emptyPath():Rp(e)}function nl(n){return new Se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Rp(n){return ye(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function od(n,e,t){return{name:tl(n,e),fields:t.value.mapValue.fields}}function fT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Z(39313,{state:p})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(p,y){return p.useProto3Json?(ye(y===void 0||typeof y=="string",58123),tt.fromBase64String(y||"")):(ye(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),tt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,l=c&&function(p){const y=p.code===void 0?L.UNKNOWN:wp(p.code);return new W(y,p.message||"")}(c);t=new Ip(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kc(n,r.document.name),s=dn(r.document.updateTime),c=r.document.createTime?dn(r.document.createTime):ne.min(),l=new Et({mapValue:{fields:r.document.fields}}),d=ot.newFoundDocument(i,s,c,l),p=r.targetIds||[],y=r.removedTargetIds||[];t=new oa(p,y,d.key,d)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kc(n,r.document),s=r.readTime?dn(r.readTime):ne.min(),c=ot.newNoDocument(i,s),l=r.removedTargetIds||[];t=new oa([],l,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kc(n,r.document),s=r.removedTargetIds||[];t=new oa([],s,i,null)}else{if(!("filter"in e))return Z(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,c=new rT(i,s),l=r.targetId;t=new Tp(l,c)}}return t}function pT(n,e){let t;if(e instanceof oo)t={update:od(n,e.key,e.value)};else if(e instanceof Ol)t={delete:tl(n,e.key)};else if(e instanceof Ir)t={update:od(n,e.key,e.data),updateMask:IT(e.fieldMask)};else{if(!(e instanceof eT))return Z(16599,{ft:e.type});t={verify:tl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,c){const l=c.transform;if(l instanceof Ta)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Js)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zs)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ia)return{fieldPath:c.field.canonicalString(),increment:l.Re};throw Z(20930,{transform:c.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:hT(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z(27497)}(n,e.precondition)),t}function mT(n,e){return n&&n.length>0?(ye(e!==void 0,14353),n.map(t=>function(i,s){let c=i.updateTime?dn(i.updateTime):dn(s);return c.isEqual(ne.min())&&(c=dn(s)),new Xw(c,i.transformResults||[])}(t,e))):[]}function gT(n,e){return{documents:[Cp(n,e.path)]}}function _T(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Cp(n,i);const s=function(p){if(p.length!==0)return Pp(Jt.create(p,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const c=function(p){if(p.length!==0)return p.map(y=>function(I){return{field:Oi(I.field),direction:ET(I.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const l=Zc(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{gt:t,parent:i}}function yT(n){let e=dT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ye(r===1,65062);const y=t.from[0];y.allDescendants?i=y.collectionId:e=e.child(y.collectionId)}let s=[];t.where&&(s=function(T){const I=Sp(T);return I instanceof Jt&&ip(I)?I.getFilters():[I]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(I=>function(U){return new wa(Ni(U.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(I))}(t.orderBy));let l=null;t.limit&&(l=function(T){let I;return I=typeof T=="object"?T.value:T,Ma(I)?null:I}(t.limit));let d=null;t.startAt&&(d=function(T){const I=!!T.before,N=T.values||[];return new Ea(N,I)}(t.startAt));let p=null;return t.endAt&&(p=function(T){const I=!T.before,N=T.values||[];return new Ea(N,I)}(t.endAt)),Fw(e,i,c,s,l,"F",d,p)}function vT(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ni(t.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ni(t.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ni(t.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Ni(t.unaryFilter.field);return Ue.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ue.create(Ni(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Jt.create(t.compositeFilter.filters.map(r=>Sp(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(t.compositeFilter.op))}(n):Z(30097,{filter:n})}function ET(n){return aT[n]}function wT(n){return cT[n]}function TT(n){return lT[n]}function Oi(n){return{fieldPath:n.canonicalString()}}function Ni(n){return et.fromServerFormat(n.fieldPath)}function Pp(n){return n instanceof Ue?function(t){if(t.op==="=="){if(Kh(t.value))return{unaryFilter:{field:Oi(t.field),op:"IS_NAN"}};if(Wh(t.value))return{unaryFilter:{field:Oi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Kh(t.value))return{unaryFilter:{field:Oi(t.field),op:"IS_NOT_NAN"}};if(Wh(t.value))return{unaryFilter:{field:Oi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oi(t.field),op:wT(t.op),value:t.value}}}(n):n instanceof Jt?function(t){const r=t.getFilters().map(i=>Pp(i));return r.length===1?r[0]:{compositeFilter:{op:TT(t.op),filters:r}}}(n):Z(54877,{filter:n})}function IT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t,r,i,s=ne.min(),c=ne.min(),l=tt.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.wt=e}}function AT(n){const e=yT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.Cn=new RT}addToCollectionParentIndex(e,t){return this.Cn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(gr.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class RT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new He(Se.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Dp=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Dp,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ji(0)}static lr(){return new ji(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="LruGarbageCollector",ST=1048576;function ld([n,e],[t,r]){const i=le(n,t);return i===0?le(e,r):i}class PT{constructor(e){this.Er=e,this.buffer=new He(ld),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ld(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class kT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){q(cd,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yi(t)?q(cd,"Ignoring IndexedDB error during garbage collection: ",t):await Qi(t)}await this.mr(3e5)})}}class DT{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(xa.le);const r=new PT(t);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(ad)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ad):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,i,s,c,l,d,p;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,c=Date.now(),this.nthSequenceNumber(e,i))).next(T=>(r=T,l=Date.now(),this.removeTargets(e,r,t))).next(T=>(s=T,d=Date.now(),this.removeOrphanedDocuments(e,r))).next(T=>(p=Date.now(),ki()<=he.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${i} in `+(l-c)+`ms
	Removed ${s} targets in `+(d-l)+`ms
	Removed ${T} documents in `+(p-d)+`ms
Total Duration: ${p-y}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:T})))}}function OT(n,e){return new DT(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.changes=new ri(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&qs(r.mutation,i,St.empty(),qe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,t,r=de()){const i=Kr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let c=Ls();return s.forEach((l,d)=>{c=c.insert(l,d.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const r=Kr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,de()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((c,l)=>{t.set(c,l)})})}computeViews(e,t,r,i){let s=Un();const c=js(),l=function(){return js()}();return t.forEach((d,p)=>{const y=r.get(p.key);i.has(p.key)&&(y===void 0||y.mutation instanceof Ir)?s=s.insert(p.key,p):y!==void 0?(c.set(p.key,y.mutation.getFieldMask()),qs(y.mutation,p,y.mutation.getFieldMask(),qe.now())):c.set(p.key,St.empty())}),this.recalculateAndSaveOverlays(e,s).next(d=>(d.forEach((p,y)=>c.set(p,y)),t.forEach((p,y)=>{var T;return l.set(p,new VT(y,(T=c.get(p))!==null&&T!==void 0?T:null))}),l))}recalculateAndSaveOverlays(e,t){const r=js();let i=new ke((c,l)=>c-l),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const l of c)l.keys().forEach(d=>{const p=t.get(d);if(p===null)return;let y=r.get(d)||St.empty();y=l.applyToLocalView(p,y),r.set(d,y);const T=(i.get(l.batchId)||de()).add(d);i=i.insert(l.batchId,T)})}).next(()=>{const c=[],l=i.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),p=d.key,y=d.value,T=fp();y.forEach(I=>{if(!s.has(I)){const N=vp(t.get(I),r.get(I));N!==null&&T.set(I,N),s=s.add(I)}}),c.push(this.documentOverlayCache.saveOverlays(e,p,T))}return V.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(c){return Y.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const c=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):V.resolve(Kr());let l=Gs,d=s;return c.next(p=>V.forEach(p,(y,T)=>(l<T.largestBatchId&&(l=T.largestBatchId),s.get(y)?V.resolve():this.remoteDocumentCache.getEntry(e,y).next(I=>{d=d.insert(y,I)}))).next(()=>this.populateOverlays(e,p,s)).next(()=>this.computeViews(e,d,p,de())).next(y=>({batchId:l,changes:dp(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(r=>{let i=Ls();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let c=Ls();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,d=>{const p=function(T,I){return new so(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,d.child(s));return this.getDocumentsMatchingCollectionQuery(e,p,r,i).next(y=>{y.forEach((T,I)=>{c=c.insert(T,I)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(c=>(s=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(c=>{s.forEach((d,p)=>{const y=p.getKey();c.get(y)===null&&(c=c.insert(y,ot.newInvalidDocument(y)))});let l=Ls();return c.forEach((d,p)=>{const y=s.get(d);y!==void 0&&qs(y.mutation,p,St.empty(),qe.now()),$a(t,p)&&(l=l.insert(d,p))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return V.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:dn(i.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(i){return{name:i.name,query:AT(i.bundledQuery),readTime:dn(i.readTime)}}(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(){this.overlays=new ke(Y.comparator),this.Qr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Kr();return V.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.St(e,t,s)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Qr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const i=Kr(),s=t.length+1,c=new Y(t.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){const d=l.getNext().value,p=d.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===s&&d.largestBatchId>r&&i.set(d.getKey(),d)}return V.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ke((p,y)=>p-y);const c=this.overlays.getIterator();for(;c.hasNext();){const p=c.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>r){let y=s.get(p.largestBatchId);y===null&&(y=Kr(),s=s.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const l=Kr(),d=s.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((p,y)=>l.set(p,y)),!(l.size()>=i)););return V.resolve(l)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new nT(t,r));let s=this.Qr.get(t);s===void 0&&(s=de(),this.Qr.set(t,s)),this.Qr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.$r=new He(Ye.Ur),this.Kr=new He(Ye.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new Ye(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new Ye(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new Y(new Se([])),r=new Ye(t,e),i=new Ye(t,e+1),s=[];return this.Kr.forEachInRange([r,i],c=>{this.zr(c),s.push(c.key)}),s}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Y(new Se([])),r=new Ye(t,e),i=new Ye(t,e+1);let s=de();return this.Kr.forEachInRange([r,i],c=>{s=s.add(c.key)}),s}containsKey(e){const t=new Ye(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Y.comparator(e.key,t.key)||le(e.Zr,t.Zr)}static Wr(e,t){return le(e.Zr,t.Zr)||Y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new He(Ye.Ur)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new tT(s,t,r,i);this.mutationQueue.push(c);for(const l of i)this.Xr=this.Xr.add(new Ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(c)}lookupMutationBatch(e,t){return V.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ti(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Al:this.nr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ye(t,0),i=new Ye(t,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([r,i],c=>{const l=this.ei(c.Zr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new He(le);return t.forEach(i=>{const s=new Ye(i,0),c=new Ye(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([s,c],l=>{r=r.add(l.Zr)})}),V.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const c=new Ye(new Y(s),0);let l=new He(le);return this.Xr.forEachWhile(d=>{const p=d.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(l=l.add(d.Zr)),!0)},c),V.resolve(this.ni(l))}ni(e){const t=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ye(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return V.forEach(t.mutations,i=>{const s=new Ye(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new Ye(t,0),i=this.Xr.firstAfterOrEqual(r);return V.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.ii=e,this.docs=function(){return new ke(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,c=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(t))}getEntries(e,t){let r=Un();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Un();const c=t.path,l=new Y(c.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:p,value:{document:y}}=d.getNext();if(!c.isPrefixOf(p.path))break;p.path.length>c.length+1||gw(mw(y),r)<=0||(i.has(y.key)||$a(t,y))&&(s=s.insert(y.key,y.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Z(9500)}si(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new BT(this)}getSize(e){return V.resolve(this.size)}}class BT extends NT{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.persistence=e,this.oi=new ri(t=>Sl(t),Pl),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this._i=0,this.ai=new xl,this.targetCount=0,this.ui=ji.cr()}forEachTarget(e,t){return this.oi.forEach((r,i)=>t(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),V.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ji(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Tr(t),V.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.oi.forEach((c,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.oi.delete(c),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(c=>{s.push(i.markPotentiallyOrphaned(e,c))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t){this.ci={},this.overlays={},this.li=new xa(0),this.hi=!1,this.hi=!0,this.Pi=new FT,this.referenceDelegate=e(this),this.Ti=new jT(this),this.indexManager=new CT,this.remoteDocumentCache=function(i){return new $T(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new bT(t),this.Ei=new xT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new MT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new UT(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const i=new qT(this.li.next());return this.referenceDelegate.di(),r(i).next(s=>this.referenceDelegate.Ai(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ri(e,t){return V.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class qT extends yw{constructor(e){super(),this.currentSequenceNumber=e}}class Ml{constructor(e){this.persistence=e,this.Vi=new xl,this.mi=null}static fi(e){return new Ml(e)}get gi(){if(this.mi)return this.mi;throw Z(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.gi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.gi,r=>{const i=Y.fromPath(r);return this.pi(e,i).next(s=>{s||t.removeEntry(i,ne.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return V.or([()=>V.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Aa{constructor(e,t){this.persistence=e,this.yi=new ri(r=>ww(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=OT(this,t)}static fi(e,t){return new Aa(e,t)}di(){}Ai(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}br(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return V.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(s=>s?V.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.si(e,c=>this.Dr(e,c,t).next(l=>{l||(r++,s.removeEntry(c,ne.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),V.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ra(e.data.value)),t}Dr(e,t,r){return V.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.yi.get(t);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ds=r,this.As=i}static Rs(e,t){let r=de(),i=de();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Fl(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return I_()?8:vw(at())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ws(e,t).next(c=>{s.result=c}).next(()=>{if(!s.result)return this.bs(e,t,i,r).next(c=>{s.result=c})}).next(()=>{if(s.result)return;const c=new HT;return this.Ss(e,t,c).next(l=>{if(s.result=l,this.fs)return this.Ds(e,t,c,l.size)})}).next(()=>s.result)}Ds(e,t,r,i){return r.documentReadCount<this.gs?(ki()<=he.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Di(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),V.resolve()):(ki()<=he.DEBUG&&q("QueryEngine","Query:",Di(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(ki()<=he.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Di(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(t))):V.resolve())}ws(e,t){if(Xh(t))return V.resolve(null);let r=hn(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Jc(t,null,"F"),r=hn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const c=de(...s);return this.ys.getDocuments(e,c).next(l=>this.indexManager.getMinOffset(e,r).next(d=>{const p=this.vs(t,l);return this.Cs(t,p,c,d.readTime)?this.ws(e,Jc(t,null,"F")):this.Fs(e,p,t,d)}))})))}bs(e,t,r,i){return Xh(t)||i.isEqual(ne.min())?V.resolve(null):this.ys.getDocuments(e,r).next(s=>{const c=this.vs(t,s);return this.Cs(t,c,r,i)?V.resolve(null):(ki()<=he.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Di(t)),this.Fs(e,c,t,pw(i,Gs)).next(l=>l))})}vs(e,t){let r=new He(up(e));return t.forEach((i,s)=>{$a(e,s)&&(r=r.add(s))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,t,r){return ki()<=he.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Di(t)),this.ys.getDocumentsMatchingQuery(e,t,gr.min(),r)}Fs(e,t,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(c=>{s=s.insert(c.key,c)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="LocalStore",WT=3e8;class KT{constructor(e,t,r,i){this.persistence=e,this.Ms=t,this.serializer=i,this.xs=new ke(le),this.Os=new ri(s=>Sl(s),Pl),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LT(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function GT(n,e,t,r){return new KT(n,e,t,r)}async function Np(n,e){const t=se(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const c=[],l=[];let d=de();for(const p of i){c.push(p.batchId);for(const y of p.mutations)d=d.add(y.key)}for(const p of s){l.push(p.batchId);for(const y of p.mutations)d=d.add(y.key)}return t.localDocuments.getDocuments(r,d).next(p=>({ks:p,removedBatchIds:c,addedBatchIds:l}))})})}function QT(n,e){const t=se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Bs.newChangeBuffer({trackRemovals:!0});return function(l,d,p,y){const T=p.batch,I=T.keys();let N=V.resolve();return I.forEach(U=>{N=N.next(()=>y.getEntry(d,U)).next(H=>{const F=p.docVersions.get(U);ye(F!==null,48541),H.version.compareTo(F)<0&&(T.applyToRemoteDocument(H,p),H.isValidDocument()&&(H.setReadTime(p.commitVersion),y.addEntry(H)))})}),N.next(()=>l.mutationQueue.removeMutationBatch(d,T))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let d=de();for(let p=0;p<l.mutationResults.length;++p)l.mutationResults[p].transformResults.length>0&&(d=d.add(l.batch.mutations[p].key));return d}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Vp(n){const e=se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function YT(n,e){const t=se(n),r=e.snapshotVersion;let i=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});i=t.xs;const l=[];e.targetChanges.forEach((y,T)=>{const I=i.get(T);if(!I)return;l.push(t.Ti.removeMatchingKeys(s,y.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(s,y.addedDocuments,T)));let N=I.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(tt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):y.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(y.resumeToken,r)),i=i.insert(T,N),function(H,F,ee){return H.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=WT?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(I,N,y)&&l.push(t.Ti.updateTargetData(s,N))});let d=Un(),p=de();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,y))}),l.push(XT(s,c,e.documentUpdates).next(y=>{d=y.qs,p=y.Qs})),!r.isEqual(ne.min())){const y=t.Ti.getLastRemoteSnapshotVersion(s).next(T=>t.Ti.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(y)}return V.waitFor(l).next(()=>c.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,d,p)).next(()=>d)}).then(s=>(t.xs=i,s))}function XT(n,e,t){let r=de(),i=de();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let c=Un();return t.forEach((l,d)=>{const p=s.get(l);d.isFoundDocument()!==p.isFoundDocument()&&(i=i.add(l)),d.isNoDocument()&&d.version.isEqual(ne.min())?(e.removeEntry(l,d.readTime),c=c.insert(l,d)):!p.isValidDocument()||d.version.compareTo(p.version)>0||d.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(d),c=c.insert(l,d)):q(Ul,"Ignoring outdated watch update for ",l,". Current version:",p.version," Watch version:",d.version)}),{qs:c,Qs:i}})}function JT(n,e){const t=se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Al),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZT(n,e){const t=se(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ti.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):t.Ti.allocateTargetId(r).next(c=>(i=new ur(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function rl(n,e,t){const r=se(n),i=r.xs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,c=>r.persistence.referenceDelegate.removeTarget(c,i))}catch(c){if(!Yi(c))throw c;q(Ul,`Failed to update sequence numbers for target ${e}: ${c}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function ud(n,e,t){const r=se(n);let i=ne.min(),s=de();return r.persistence.runTransaction("Execute query","readwrite",c=>function(d,p,y){const T=se(d),I=T.Os.get(y);return I!==void 0?V.resolve(T.xs.get(I)):T.Ti.getTargetData(p,y)}(r,c,hn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(c,l.targetId).next(d=>{s=d})}).next(()=>r.Ms.getDocumentsMatchingQuery(c,e,t?i:ne.min(),t?s:de())).next(l=>(eI(r,$w(e),l),{documents:l,$s:s})))}function eI(n,e,t){let r=n.Ns.get(e)||ne.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ns.set(e,r)}class hd{constructor(){this.activeTargetIds=Ww()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tI{constructor(){this.xo=new hd,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new hd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="ConnectivityMonitor";class fd{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){q(dd,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){q(dd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo=null;function il(){return Yo===null?Yo=function(){return 268435456+Math.round(2147483648*Math.random())}():Yo++,"0x"+Yo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="RestConnection",rI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iI{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===ya?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,t,r,i,s){const c=il(),l=this.jo(e,t.toUriEncodedString());q(Dc,`Sending RPC '${e}' ${c}:`,l,r);const d={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(d,i,s);const{host:p}=new URL(l),y=zi(p);return this.Jo(e,l,d,r,y).then(T=>(q(Dc,`Received RPC '${e}' ${c}: `,T),T),T=>{throw Fi(Dc,`RPC '${e}' ${c} failed with error: `,T,"url: ",l,"request:",r),T})}Yo(e,t,r,i,s,c){return this.zo(e,t,r,i,s)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}jo(e,t){const r=rI[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class oI extends iI{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,s){const c=il();return new Promise((l,d)=>{const p=new Mf;p.setWithCredentials(!0),p.listenOnce(Ff.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case na.NO_ERROR:const T=p.getResponseJson();q(it,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),l(T);break;case na.TIMEOUT:q(it,`RPC '${e}' ${c} timed out`),d(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case na.HTTP_ERROR:const I=p.getStatus();if(q(it,`RPC '${e}' ${c} failed with status:`,I,"response text:",p.getResponseText()),I>0){let N=p.getResponseJson();Array.isArray(N)&&(N=N[0]);const U=N==null?void 0:N.error;if(U&&U.status&&U.message){const H=function(ee){const G=ee.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(G)>=0?G:L.UNKNOWN}(U.status);d(new W(H,U.message))}else d(new W(L.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new W(L.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{h_:e,streamId:c,P_:p.getLastErrorCode(),T_:p.getLastError()})}}finally{q(it,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(i);q(it,`RPC '${e}' ${c} sending request:`,i),p.send(t,"POST",y,r,15)})}I_(e,t,r){const i=il(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Bf(),l=$f(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(d.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Ho(d.initMessageHeaders,t,r),d.encodeInitMessageHeaders=!0;const y=s.join("");q(it,`Creating RPC '${e}' stream ${i}: ${y}`,d);const T=c.createWebChannel(y,d);this.E_(T);let I=!1,N=!1;const U=new sI({Zo:F=>{N?q(it,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(I||(q(it,`Opening RPC '${e}' stream ${i} transport.`),T.open(),I=!0),q(it,`RPC '${e}' stream ${i} sending:`,F),T.send(F))},Xo:()=>T.close()}),H=(F,ee,G)=>{F.listen(ee,ce=>{try{G(ce)}catch(be){setTimeout(()=>{throw be},0)}})};return H(T,Vs.EventType.OPEN,()=>{N||(q(it,`RPC '${e}' stream ${i} transport opened.`),U.__())}),H(T,Vs.EventType.CLOSE,()=>{N||(N=!0,q(it,`RPC '${e}' stream ${i} transport closed`),U.u_(),this.d_(T))}),H(T,Vs.EventType.ERROR,F=>{N||(N=!0,Fi(it,`RPC '${e}' stream ${i} transport errored. Name:`,F.name,"Message:",F.message),U.u_(new W(L.UNAVAILABLE,"The operation could not be completed")))}),H(T,Vs.EventType.MESSAGE,F=>{var ee;if(!N){const G=F.data[0];ye(!!G,16349);const ce=G,be=(ce==null?void 0:ce.error)||((ee=ce[0])===null||ee===void 0?void 0:ee.error);if(be){q(it,`RPC '${e}' stream ${i} received error:`,be);const gt=be.status;let Pe=function(w){const b=Fe[w];if(b!==void 0)return wp(b)}(gt),R=be.message;Pe===void 0&&(Pe=L.INTERNAL,R="Unknown error status: "+gt+" with message "+be.message),N=!0,U.u_(new W(Pe,R)),T.close()}else q(it,`RPC '${e}' stream ${i} received:`,G),U.c_(G)}}),H(l,Uf.STAT_EVENT,F=>{F.stat===zc.PROXY?q(it,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===zc.NOPROXY&&q(it,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{U.a_()},0),U}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function Oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n){return new uT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,t,r=1e3,i=1.5,s=6e4){this.xi=e,this.timerId=t,this.A_=r,this.R_=i,this.V_=s,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),i=Math.max(0,t-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="PersistentStream";class xp{constructor(e,t,r,i,s,c,l,d){this.xi=e,this.S_=r,this.D_=i,this.connection=s,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Lp(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(Fn(t.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.v_===t&&this.z_(r,i)},r=>{e(()=>{const i=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(i)})})}z_(e,t){const r=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.j_(i))}),this.stream.onMessage(i=>{r(()=>++this.M_==1?this.J_(i):this.onNext(i))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return q(pd,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(q(pd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aI extends xp{constructor(e,t,r,i,s,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=s}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=fT(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();const c=s.targetChange;return c.targetIds&&c.targetIds.length?ne.min():c.readTime?dn(c.readTime):ne.min()}(e);return this.listener.Y_(t,r)}Z_(e){const t={};t.database=nl(this.serializer),t.addTarget=function(s,c){let l;const d=c.target;if(l=Yc(d)?{documents:gT(s,d)}:{query:_T(s,d).gt},l.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){l.resumeToken=bp(s,c.resumeToken);const p=Zc(s,c.expectedCount);p!==null&&(l.expectedCount=p)}else if(c.snapshotVersion.compareTo(ne.min())>0){l.readTime=ba(s,c.snapshotVersion.toTimestamp());const p=Zc(s,c.expectedCount);p!==null&&(l.expectedCount=p)}return l}(this.serializer,e);const r=vT(this.serializer,e);r&&(t.labels=r),this.Q_(t)}X_(e){const t={};t.database=nl(this.serializer),t.removeTarget=e,this.Q_(t)}}class cI extends xp{constructor(e,t,r,i,s,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=s}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=mT(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.ra(r,t)}ia(){const e={};e.database=nl(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>pT(this.serializer,r))};this.Q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{}class uI extends lI{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,c])=>this.connection.zo(e,el(t,r),i,s,c)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(L.UNKNOWN,s.toString())})}Yo(e,t,r,i,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,l])=>this.connection.Yo(e,el(t,r),i,c,l,s)).catch(c=>{throw c.name==="FirebaseError"?(c.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new W(L.UNKNOWN,c.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class hI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Fn(t),this.ua=!1):q("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="RemoteStore";class dI{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=s,this.Ra.No(c=>{r.enqueueAndForget(async()=>{ii(this)&&(q(Jr,"Restarting streams for network reachability change."),await async function(d){const p=se(d);p.da.add(4),await co(p),p.Va.set("Unknown"),p.da.delete(4),await za(p)}(this))})}),this.Va=new hI(r,i)}}async function za(n){if(ii(n))for(const e of n.Aa)await e(!0)}async function co(n){for(const e of n.Aa)await e(!1)}function Mp(n,e){const t=se(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),ql(t)?jl(t):Xi(t).N_()&&Bl(t,e))}function $l(n,e){const t=se(n),r=Xi(t);t.Ea.delete(e),r.N_()&&Fp(t,e),t.Ea.size===0&&(r.N_()?r.k_():ii(t)&&t.Va.set("Unknown"))}function Bl(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xi(n).Z_(e)}function Fp(n,e){n.ma.Ke(e),Xi(n).X_(e)}function jl(n){n.ma=new oT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Xi(n).start(),n.Va.ca()}function ql(n){return ii(n)&&!Xi(n).O_()&&n.Ea.size>0}function ii(n){return se(n).da.size===0}function Up(n){n.ma=void 0}async function fI(n){n.Va.set("Online")}async function pI(n){n.Ea.forEach((e,t)=>{Bl(n,e)})}async function mI(n,e){Up(n),ql(n)?(n.Va.Pa(e),jl(n)):n.Va.set("Unknown")}async function gI(n,e,t){if(n.Va.set("Online"),e instanceof Ip&&e.state===2&&e.cause)try{await async function(i,s){const c=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,c),i.Ea.delete(l),i.ma.removeTarget(l))}(n,e)}catch(r){q(Jr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ca(n,r)}else if(e instanceof oa?n.ma.Xe(e):e instanceof Tp?n.ma.ot(e):n.ma.nt(e),!t.isEqual(ne.min()))try{const r=await Vp(n.localStore);t.compareTo(r)>=0&&await function(s,c){const l=s.ma.It(c);return l.targetChanges.forEach((d,p)=>{if(d.resumeToken.approximateByteSize()>0){const y=s.Ea.get(p);y&&s.Ea.set(p,y.withResumeToken(d.resumeToken,c))}}),l.targetMismatches.forEach((d,p)=>{const y=s.Ea.get(d);if(!y)return;s.Ea.set(d,y.withResumeToken(tt.EMPTY_BYTE_STRING,y.snapshotVersion)),Fp(s,d);const T=new ur(y.target,d,p,y.sequenceNumber);Bl(s,T)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){q(Jr,"Failed to raise snapshot:",r),await Ca(n,r)}}async function Ca(n,e,t){if(!Yi(e))throw e;n.da.add(1),await co(n),n.Va.set("Offline"),t||(t=()=>Vp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(Jr,"Retrying IndexedDB access"),await t(),n.da.delete(1),await za(n)})}function $p(n,e){return e().catch(t=>Ca(n,t,e))}async function Wa(n){const e=se(n),t=Er(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Al;for(;_I(e);)try{const i=await JT(e.localStore,r);if(i===null){e.Ia.length===0&&t.k_();break}r=i.batchId,yI(e,i)}catch(i){await Ca(e,i)}Bp(e)&&jp(e)}function _I(n){return ii(n)&&n.Ia.length<10}function yI(n,e){n.Ia.push(e);const t=Er(n);t.N_()&&t.ea&&t.ta(e.mutations)}function Bp(n){return ii(n)&&!Er(n).O_()&&n.Ia.length>0}function jp(n){Er(n).start()}async function vI(n){Er(n).ia()}async function EI(n){const e=Er(n);for(const t of n.Ia)e.ta(t.mutations)}async function wI(n,e,t){const r=n.Ia.shift(),i=Nl.from(r,e,t);await $p(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Wa(n)}async function TI(n,e){e&&Er(n).ea&&await async function(r,i){if(function(c){return iT(c)&&c!==L.ABORTED}(i.code)){const s=r.Ia.shift();Er(r).L_(),await $p(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Wa(r)}}(n,e),Bp(n)&&jp(n)}async function md(n,e){const t=se(n);t.asyncQueue.verifyOperationInProgress(),q(Jr,"RemoteStore received new credentials");const r=ii(t);t.da.add(3),await co(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await za(t)}async function II(n,e){const t=se(n);e?(t.da.delete(2),await za(t)):e||(t.da.add(2),await co(t),t.Va.set("Unknown"))}function Xi(n){return n.fa||(n.fa=function(t,r,i){const s=se(t);return s.oa(),new aI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{e_:fI.bind(null,n),n_:pI.bind(null,n),i_:mI.bind(null,n),Y_:gI.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),ql(n)?jl(n):n.Va.set("Unknown")):(await n.fa.stop(),Up(n))})),n.fa}function Er(n){return n.ga||(n.ga=function(t,r,i){const s=se(t);return s.oa(),new cI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:vI.bind(null,n),i_:TI.bind(null,n),na:EI.bind(null,n),ra:wI.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await Wa(n)):(await n.ga.stop(),n.Ia.length>0&&(q(Jr,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const c=Date.now()+r,l=new Hl(e,t,c,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zl(n,e){if(Fn("AsyncQueue",`${e}: ${n}`),Yi(n))return new W(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{static emptySet(e){return new Mi(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=Ls(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Mi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.pa=new ke(Y.comparator)}track(e){const t=e.doc.key,r=this.pa.get(t);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(t,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(t):e.type===1&&r.type===2?this.pa=this.pa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):Z(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,r)=>{e.push(r)}),e}}class qi{constructor(e,t,r,i,s,c,l,d,p){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=c,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=p}static fromInitialDocuments(e,t,r,i,s){const c=[];return t.forEach(l=>{c.push({type:0,doc:l})}),new qi(e,t,Mi.emptySet(t),c,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class AI{constructor(){this.queries=_d(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=se(t),s=i.queries;i.queries=_d(),s.forEach((c,l)=>{for(const d of l.Sa)d.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function _d(){return new ri(n=>lp(n),Ua)}async function qp(n,e){const t=se(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Da()&&e.va()&&(r=2):(s=new bI,r=e.va()?0:1);try{switch(r){case 0:s.ba=await t.onListen(i,!0);break;case 1:s.ba=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const l=zl(c,`Initialization of query '${Di(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.Sa.push(e),e.Fa(t.onlineState),s.ba&&e.Ma(s.ba)&&Wl(t)}async function Hp(n,e){const t=se(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const c=s.Sa.indexOf(e);c>=0&&(s.Sa.splice(c,1),s.Sa.length===0?i=e.va()?0:1:!s.Da()&&e.va()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function CI(n,e){const t=se(n);let r=!1;for(const i of e){const s=i.query,c=t.queries.get(s);if(c){for(const l of c.Sa)l.Ma(i)&&(r=!0);c.ba=i}}r&&Wl(t)}function RI(n,e,t){const r=se(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function Wl(n){n.Ca.forEach(e=>{e.next()})}var sl,yd;(yd=sl||(sl={})).xa="default",yd.Cache="cache";class zp{constructor(e,t,r){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const r=t!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==sl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.key=e}}class Kp{constructor(e){this.key=e}}class SI{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=de(),this.mutatedKeys=de(),this.Za=up(e),this.Xa=new Mi(this.Za)}get eu(){return this.Ha}tu(e,t){const r=t?t.nu:new gd,i=t?t.Xa:this.Xa;let s=t?t.mutatedKeys:this.mutatedKeys,c=i,l=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,p=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((y,T)=>{const I=i.get(y),N=$a(this.query,T)?T:null,U=!!I&&this.mutatedKeys.has(I.key),H=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let F=!1;I&&N?I.data.isEqual(N.data)?U!==H&&(r.track({type:3,doc:N}),F=!0):this.ru(I,N)||(r.track({type:2,doc:N}),F=!0,(d&&this.Za(N,d)>0||p&&this.Za(N,p)<0)&&(l=!0)):!I&&N?(r.track({type:0,doc:N}),F=!0):I&&!N&&(r.track({type:1,doc:I}),F=!0,(d||p)&&(l=!0)),F&&(N?(c=c.add(N),s=H?s.add(y):s.delete(y)):(c=c.delete(y),s=s.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),s=s.delete(y.key),r.track({type:1,doc:y})}return{Xa:c,nu:r,Cs:l,mutatedKeys:s}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const c=e.nu.wa();c.sort((y,T)=>function(N,U){const H=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Vt:F})}};return H(N)-H(U)}(y.type,T.type)||this.Za(y.doc,T.doc)),this.iu(r),i=i!=null&&i;const l=t&&!i?this.su():[],d=this.Ya.size===0&&this.current&&!i?1:0,p=d!==this.Ja;return this.Ja=d,c.length!==0||p?{snapshot:new qi(this.query,e.Xa,s,c,e.mutatedKeys,d===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new gd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=de(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Kp(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Wp(r))}),t}au(e){this.Ha=e.$s,this.Ya=de();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return qi.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Kl="SyncEngine";class PI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class kI{constructor(e){this.key=e,this.cu=!1}}class DI{constructor(e,t,r,i,s,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=c,this.lu={},this.hu=new ri(l=>lp(l),Ua),this.Pu=new Map,this.Tu=new Set,this.Iu=new ke(Y.comparator),this.Eu=new Map,this.du=new xl,this.Au={},this.Ru=new Map,this.Vu=ji.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function OI(n,e,t=!0){const r=Zp(n);let i;const s=r.hu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.uu()):i=await Gp(r,e,t,!0),i}async function NI(n,e){const t=Zp(n);await Gp(t,e,!0,!1)}async function Gp(n,e,t,r){const i=await ZT(n.localStore,hn(e)),s=i.targetId,c=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await VI(n,e,s,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&Mp(n.remoteStore,i),l}async function VI(n,e,t,r,i){n.fu=(T,I,N)=>async function(H,F,ee,G){let ce=F.view.tu(ee);ce.Cs&&(ce=await ud(H.localStore,F.query,!1).then(({documents:R})=>F.view.tu(R,ce)));const be=G&&G.targetChanges.get(F.targetId),gt=G&&G.targetMismatches.get(F.targetId)!=null,Pe=F.view.applyChanges(ce,H.isPrimaryClient,be,gt);return Ed(H,F.targetId,Pe.ou),Pe.snapshot}(n,T,I,N);const s=await ud(n.localStore,e,!0),c=new SI(e,s.$s),l=c.tu(s.documents),d=ao.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),p=c.applyChanges(l,n.isPrimaryClient,d);Ed(n,t,p.ou);const y=new PI(e,t,c);return n.hu.set(e,y),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),p.snapshot}async function LI(n,e,t){const r=se(n),i=r.hu.get(e),s=r.Pu.get(i.targetId);if(s.length>1)return r.Pu.set(i.targetId,s.filter(c=>!Ua(c,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rl(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&$l(r.remoteStore,i.targetId),ol(r,i.targetId)}).catch(Qi)):(ol(r,i.targetId),await rl(r.localStore,i.targetId,!0))}async function xI(n,e){const t=se(n),r=t.hu.get(e),i=t.Pu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),$l(t.remoteStore,r.targetId))}async function MI(n,e,t){const r=HI(n);try{const i=await function(c,l){const d=se(c),p=qe.now(),y=l.reduce((N,U)=>N.add(U.key),de());let T,I;return d.persistence.runTransaction("Locally write mutations","readwrite",N=>{let U=Un(),H=de();return d.Bs.getEntries(N,y).next(F=>{U=F,U.forEach((ee,G)=>{G.isValidDocument()||(H=H.add(ee))})}).next(()=>d.localDocuments.getOverlayedDocuments(N,U)).next(F=>{T=F;const ee=[];for(const G of l){const ce=Zw(G,T.get(G.key).overlayedDocument);ce!=null&&ee.push(new Ir(G.key,ce,tp(ce.value.mapValue),Yt.exists(!0)))}return d.mutationQueue.addMutationBatch(N,p,ee,l)}).next(F=>{I=F;const ee=F.applyToLocalDocumentSet(T,H);return d.documentOverlayCache.saveOverlays(N,F.batchId,ee)})}).then(()=>({batchId:I.batchId,changes:dp(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(c,l,d){let p=c.Au[c.currentUser.toKey()];p||(p=new ke(le)),p=p.insert(l,d),c.Au[c.currentUser.toKey()]=p}(r,i.batchId,t),await lo(r,i.changes),await Wa(r.remoteStore)}catch(i){const s=zl(i,"Failed to persist write");t.reject(s)}}async function Qp(n,e){const t=se(n);try{const r=await YT(t.localStore,e);e.targetChanges.forEach((i,s)=>{const c=t.Eu.get(s);c&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?c.cu=!0:i.modifiedDocuments.size>0?ye(c.cu,14607):i.removedDocuments.size>0&&(ye(c.cu,42227),c.cu=!1))}),await lo(t,r,e)}catch(r){await Qi(r)}}function vd(n,e,t){const r=se(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.hu.forEach((s,c)=>{const l=c.view.Fa(e);l.snapshot&&i.push(l.snapshot)}),function(c,l){const d=se(c);d.onlineState=l;let p=!1;d.queries.forEach((y,T)=>{for(const I of T.Sa)I.Fa(l)&&(p=!0)}),p&&Wl(d)}(r.eventManager,e),i.length&&r.lu.Y_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FI(n,e,t){const r=se(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let c=new ke(Y.comparator);c=c.insert(s,ot.newNoDocument(s,ne.min()));const l=de().add(s),d=new qa(ne.min(),new Map,new ke(le),c,l);await Qp(r,d),r.Iu=r.Iu.remove(s),r.Eu.delete(e),Gl(r)}else await rl(r.localStore,e,!1).then(()=>ol(r,e,t)).catch(Qi)}async function UI(n,e){const t=se(n),r=e.batch.batchId;try{const i=await QT(t.localStore,e);Xp(t,r,null),Yp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await lo(t,i)}catch(i){await Qi(i)}}async function $I(n,e,t){const r=se(n);try{const i=await function(c,l){const d=se(c);return d.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return d.mutationQueue.lookupMutationBatch(p,l).next(T=>(ye(T!==null,37113),y=T.keys(),d.mutationQueue.removeMutationBatch(p,T))).next(()=>d.mutationQueue.performConsistencyCheck(p)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(p,y,l)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>d.localDocuments.getDocuments(p,y))})}(r.localStore,e);Xp(r,e,t),Yp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await lo(r,i)}catch(i){await Qi(i)}}function Yp(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function Xp(n,e,t){const r=se(n);let i=r.Au[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Au[r.currentUser.toKey()]=i}}function ol(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pu.get(e))n.hu.delete(r),t&&n.lu.gu(r,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(r=>{n.du.containsKey(r)||Jp(n,r)})}function Jp(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&($l(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),Gl(n))}function Ed(n,e,t){for(const r of t)r instanceof Wp?(n.du.addReference(r.key,e),BI(n,r)):r instanceof Kp?(q(Kl,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,e),n.du.containsKey(r.key)||Jp(n,r.key)):Z(19791,{pu:r})}function BI(n,e){const t=e.key,r=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(r)||(q(Kl,"New document in limbo: "+t),n.Tu.add(r),Gl(n))}function Gl(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new Y(Se.fromString(e)),r=n.Vu.next();n.Eu.set(r,new kI(t)),n.Iu=n.Iu.insert(t,r),Mp(n.remoteStore,new ur(hn(kl(t.path)),r,"TargetPurposeLimboResolution",xa.le))}}async function lo(n,e,t){const r=se(n),i=[],s=[],c=[];r.hu.isEmpty()||(r.hu.forEach((l,d)=>{c.push(r.fu(d,e,t).then(p=>{var y;if((p||t)&&r.isPrimaryClient){const T=p?!p.fromCache:(y=t==null?void 0:t.targetChanges.get(d.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(d.targetId,T?"current":"not-current")}if(p){i.push(p);const T=Fl.Rs(d.targetId,p);s.push(T)}}))}),await Promise.all(c),r.lu.Y_(i),await async function(d,p){const y=se(d);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>V.forEach(p,I=>V.forEach(I.ds,N=>y.persistence.referenceDelegate.addReference(T,I.targetId,N)).next(()=>V.forEach(I.As,N=>y.persistence.referenceDelegate.removeReference(T,I.targetId,N)))))}catch(T){if(!Yi(T))throw T;q(Ul,"Failed to update sequence numbers: "+T)}for(const T of p){const I=T.targetId;if(!T.fromCache){const N=y.xs.get(I),U=N.snapshotVersion,H=N.withLastLimboFreeSnapshotVersion(U);y.xs=y.xs.insert(I,H)}}}(r.localStore,s))}async function jI(n,e){const t=se(n);if(!t.currentUser.isEqual(e)){q(Kl,"User change. New user:",e.toKey());const r=await Np(t.localStore,e);t.currentUser=e,function(s,c){s.Ru.forEach(l=>{l.forEach(d=>{d.reject(new W(L.CANCELLED,c))})}),s.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lo(t,r.ks)}}function qI(n,e){const t=se(n),r=t.Eu.get(e);if(r&&r.cu)return de().add(r.key);{let i=de();const s=t.Pu.get(e);if(!s)return i;for(const c of s){const l=t.hu.get(c);i=i.unionWith(l.view.eu)}return i}}function Zp(n){const e=se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FI.bind(null,e),e.lu.Y_=CI.bind(null,e.eventManager),e.lu.gu=RI.bind(null,e.eventManager),e}function HI(n){const e=se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$I.bind(null,e),e}class Ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ha(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return GT(this.persistence,new zT,e.initialUser,this.serializer)}Su(e){return new Op(Ml.fi,this.serializer)}bu(e){return new tI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ra.provider={build:()=>new Ra};class zI extends Ra{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){ye(this.persistence.referenceDelegate instanceof Aa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new kT(r,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Op(r=>Aa.fi(r,t),this.serializer)}}class al{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jI.bind(null,this.syncEngine),await II(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new AI}()}createDatastore(e){const t=Ha(e.databaseInfo.databaseId),r=function(s){return new oI(s)}(e.databaseInfo);return function(s,c,l,d){return new uI(s,c,l,d)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,c,l){return new dI(r,i,s,c,l)}(this.localStore,this.datastore,e.asyncQueue,t=>vd(this.syncEngine,t,0),function(){return fd.C()?new fd:new nI}())}createSyncEngine(e,t){return function(i,s,c,l,d,p,y){const T=new DI(i,s,c,l,d,p);return y&&(T.mu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=se(i);q(Jr,"RemoteStore shutting down."),s.da.add(5),await co(s),s.Ra.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}al.provider={build:()=>new al};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="FirestoreClient";class WI{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=zf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async c=>{q(wr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(q(wr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=zl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nc(n,e){n.asyncQueue.verifyOperationInProgress(),q(wr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Np(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function wd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await KI(n);q(wr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>md(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>md(e.remoteStore,i)),n._onlineComponents=e}async function KI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(wr,"Using user provided OfflineComponentProvider");try{await Nc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Fi("Error using user provided cache. Falling back to memory cache: "+t),await Nc(n,new Ra)}}else q(wr,"Using default OfflineComponentProvider"),await Nc(n,new zI(void 0));return n._offlineComponents}async function tm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(wr,"Using user provided OnlineComponentProvider"),await wd(n,n._uninitializedComponentsProvider._online)):(q(wr,"Using default OnlineComponentProvider"),await wd(n,new al))),n._onlineComponents}function GI(n){return tm(n).then(e=>e.syncEngine)}async function nm(n){const e=await tm(n),t=e.eventManager;return t.onListen=OI.bind(null,e.syncEngine),t.onUnlisten=LI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=NI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xI.bind(null,e.syncEngine),t}function QI(n,e,t={}){const r=new Ln;return n.asyncQueue.enqueueAndForget(async()=>function(s,c,l,d,p){const y=new em({next:I=>{y.xu(),c.enqueueAndForget(()=>Hp(s,T));const N=I.docs.has(l);!N&&I.fromCache?p.reject(new W(L.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&I.fromCache&&d&&d.source==="server"?p.reject(new W(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(I)},error:I=>p.reject(I)}),T=new zp(kl(l.path),y,{includeMetadataChanges:!0,Qa:!0});return qp(s,T)}(await nm(n),n.asyncQueue,e,t,r)),r.promise}function YI(n,e,t={}){const r=new Ln;return n.asyncQueue.enqueueAndForget(async()=>function(s,c,l,d,p){const y=new em({next:I=>{y.xu(),c.enqueueAndForget(()=>Hp(s,T)),I.fromCache&&d.source==="server"?p.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(I)},error:I=>p.reject(I)}),T=new zp(l,y,{includeMetadataChanges:!0,Qa:!0});return qp(s,T)}(await nm(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(n,e,t){if(!t)throw new W(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function XI(n,e,t,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Id(n){if(!Y.isDocumentKey(n))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bd(n){if(Y.isDocumentKey(n))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ka(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Z(12329,{type:typeof n})}function mn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ka(n);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="firestore.googleapis.com",Ad=!0;class Cd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sm,this.ssl=Ad}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ad;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Dp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ST)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ga{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sw;switch(r.type){case"firstParty":return new lw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Td.get(t);r&&(q("ComponentProvider","Removing Datastore"),Td.delete(t),r.terminate())}(this),Promise.resolve()}}function JI(n,e,t,r={}){var i;n=mn(n,Ga);const s=zi(e),c=n._getSettings(),l=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;s&&(Wd(`https://${d}`),Kd("Firestore",!0)),c.host!==sm&&c.host!==d&&Fi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},c),{host:d,ssl:s,emulatorOptions:r});if(!mr(p,l)&&(n._setSettings(p),r.mockUserToken)){let y,T;if(typeof r.mockUserToken=="string")y=r.mockUserToken,T=st.MOCK_USER;else{y=m_(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new st(I)}n._authCredentials=new ow(new qf(y,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ji(this.firestore,e,this._query)}}class mt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}}class pr extends Ji{constructor(e,t,r){super(e,t,kl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new Y(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function zA(n,e,...t){if(n=xe(n),im("collection","path",e),n instanceof Ga){const r=Se.fromString(e,...t);return bd(r),new pr(n,null,r)}{if(!(n instanceof mt||n instanceof pr))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return bd(r),new pr(n.firestore,null,r)}}function WA(n,e,...t){if(n=xe(n),arguments.length===1&&(e=zf.newId()),im("doc","path",e),n instanceof Ga){const r=Se.fromString(e,...t);return Id(r),new mt(n,null,new Y(r))}{if(!(n instanceof mt||n instanceof pr))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return Id(r),new mt(n.firestore,n instanceof pr?n.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="AsyncQueue";class Sd{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Lp(this,"async_queue_retry"),this.rc=()=>{const r=Oc();r&&q(Rd,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const t=Oc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Oc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new Ln;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Yi(e))throw e;q(Rd,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,Fn("INTERNAL UNHANDLED ERROR: ",Pd(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=t,t}enqueueAfterDelay(e,t,r){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const i=Hl.createAndSchedule(this,e,t,r,s=>this.uc(s));return this.Zu.push(i),i}oc(){this.Xu&&Z(47125,{cc:Pd(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Pd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Zi extends Ga{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Sd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sd(e),this._firestoreClient=void 0,await e}}}function ZI(n,e){const t=typeof n=="object"?n:hl(),r=typeof n=="string"?n:ya,i=ni(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=f_("firestore");s&&JI(i,...s)}return i}function Ql(n){if(n._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||eb(n),n._firestoreClient}function eb(n){var e,t,r;const i=n._freezeSettings(),s=function(l,d,p,y){return new bw(l,d,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,rm(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new WI(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(tt.fromBase64String(e))}catch(t){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Hi(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=/^__.*__$/;class nb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,t,this.fieldTransforms):new oo(e,this.data,t,this.fieldTransforms)}}class om{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ir(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function am(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{Ic:n})}}class Zl{constructor(e,t,r,i,s,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ec(),this.fieldTransforms=s||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Zl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:r,Rc:!1});return i.Vc(e),i}mc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:r,Rc:!1});return i.Ec(),i}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Sa(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(am(this.Ic)&&tb.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class rb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ha(e)}bc(e,t,r,i=!1){return new Zl({Ic:e,methodName:t,wc:r,path:et.emptyPath(),Rc:!1,yc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eu(n){const e=n._freezeSettings(),t=Ha(n._databaseId);return new rb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ib(n,e,t,r,i,s={}){const c=n.bc(s.merge||s.mergeFields?2:0,e,t,i);tu("Data must be an object, but it was:",c,r);const l=cm(r,c);let d,p;if(s.merge)d=new St(c.fieldMask),p=c.fieldTransforms;else if(s.mergeFields){const y=[];for(const T of s.mergeFields){const I=cl(e,T,t);if(!c.contains(I))throw new W(L.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);um(y,I)||y.push(I)}d=new St(y),p=c.fieldTransforms.filter(T=>d.covers(T.field))}else d=null,p=c.fieldTransforms;return new nb(new Et(l),d,p)}class Ya extends Yl{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ya}}function sb(n,e,t,r){const i=n.bc(1,e,t);tu("Data must be an object, but it was:",i,r);const s=[],c=Et.empty();Tr(r,(d,p)=>{const y=nu(e,d,t);p=xe(p);const T=i.mc(y);if(p instanceof Ya)s.push(y);else{const I=uo(p,T);I!=null&&(s.push(y),c.set(y,I))}});const l=new St(s);return new om(c,l,i.fieldTransforms)}function ob(n,e,t,r,i,s){const c=n.bc(1,e,t),l=[cl(e,r,t)],d=[i];if(s.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<s.length;I+=2)l.push(cl(e,s[I])),d.push(s[I+1]);const p=[],y=Et.empty();for(let I=l.length-1;I>=0;--I)if(!um(p,l[I])){const N=l[I];let U=d[I];U=xe(U);const H=c.mc(N);if(U instanceof Ya)p.push(N);else{const F=uo(U,H);F!=null&&(p.push(N),y.set(N,F))}}const T=new St(p);return new om(y,T,c.fieldTransforms)}function ab(n,e,t,r=!1){return uo(t,n.bc(r?4:3,e))}function uo(n,e){if(lm(n=xe(n)))return tu("Unsupported field value:",e,n),cm(n,e);if(n instanceof Yl)return function(r,i){if(!am(i.Ic))throw i.gc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,i){const s=[];let c=0;for(const l of r){let d=uo(l,i.fc(c));d==null&&(d={nullValue:"NULL_VALUE"}),s.push(d),c++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:ba(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ba(i.serializer,s)}}if(r instanceof Xl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hi)return{bytesValue:bp(i.serializer,r._byteString)};if(r instanceof mt){const s=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(s))throw i.gc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ll(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Jl)return function(c,l){return{mapValue:{fields:{[Zf]:{stringValue:ep},[va]:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw l.gc("VectorValues must only contain numeric values.");return Dl(l.serializer,p)})}}}}}}(r,i);throw i.gc(`Unsupported field value: ${Ka(r)}`)}(n,e)}function cm(n,e){const t={};return Kf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tr(n,(r,i)=>{const s=uo(i,e.Ac(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function lm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof qe||n instanceof Xl||n instanceof Hi||n instanceof mt||n instanceof Yl||n instanceof Jl)}function tu(n,e,t){if(!lm(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ka(t);throw r==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+r)}}function cl(n,e,t){if((e=xe(e))instanceof Qa)return e._internalPath;if(typeof e=="string")return nu(n,e);throw Sa("Field path arguments must be of type string or ",n,!1,void 0,t)}const cb=new RegExp("[~\\*/\\[\\]]");function nu(n,e,t){if(e.search(cb)>=0)throw Sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qa(...e.split("."))._internalPath}catch{throw Sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Sa(n,e,t,r,i){const s=r&&!r.isEmpty(),c=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(s||c)&&(d+=" (found",s&&(d+=` in field ${r}`),c&&(d+=` in document ${i}`),d+=")"),new W(L.INVALID_ARGUMENT,l+n+d)}function um(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ru("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class lb extends hm{data(){return super.data()}}function ru(n,e){return typeof e=="string"?nu(n,e):e instanceof Qa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iu{}class hb extends iu{}function KA(n,e,...t){let r=[];e instanceof iu&&r.push(e),r=r.concat(t),function(s){const c=s.filter(d=>d instanceof su).length,l=s.filter(d=>d instanceof Xa).length;if(c>1||c>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Xa extends hb{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Xa(e,t,r)}_apply(e){const t=this._parse(e);return dm(e._query,t),new Ji(e.firestore,e.converter,Xc(e._query,t))}_parse(e){const t=eu(e.firestore);return function(s,c,l,d,p,y,T){let I;if(p.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Dd(T,y);const U=[];for(const H of T)U.push(kd(d,s,H));I={arrayValue:{values:U}}}else I=kd(d,s,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Dd(T,y),I=ab(l,c,T,y==="in"||y==="not-in");return Ue.create(p,y,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function GA(n,e,t){const r=e,i=ru("where",n);return Xa._create(i,r,t)}class su extends iu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new su(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Jt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let c=i;const l=s.getFlattenedFilters();for(const d of l)dm(c,d),c=Xc(c,d)}(e._query,t),new Ji(e.firestore,e.converter,Xc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function kd(n,e,t){if(typeof(t=xe(t))=="string"){if(t==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cp(e)&&t.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Se.fromString(t));if(!Y.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zh(n,new Y(r))}if(t instanceof mt)return zh(n,t._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ka(t)}.`)}function Dd(n,e){if(!Array.isArray(n)||n.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dm(n,e){const t=function(i,s){for(const c of i)for(const l of c.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class db{convertValue(e,t="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Tr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[va].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(c=>Le(c.doubleValue));return new Jl(s)}convertGeoPoint(e){return new Xl(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Qs(e));default:return null}}convertTimestamp(e){const t=_r(e);return new qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Se.fromString(e);ye(kp(r),9688,{name:e});const i=new Ys(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(t)||Fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fm extends hm{constructor(e,t,r,i,s,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ru("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class aa extends fm{data(e={}){return super.data(e)}}class pb{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ms(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new aa(this._firestore,this._userDataWriter,r.key,r,new Ms(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map(l=>{const d=new aa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ms(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}})}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const d=new aa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ms(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let p=-1,y=-1;return l.type!==0&&(p=c.indexOf(l.doc.key),c=c.delete(l.doc.key)),l.type!==1&&(c=c.add(l.doc),y=c.indexOf(l.doc.key)),{type:mb(l.type),doc:d,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function mb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(n){n=mn(n,mt);const e=mn(n.firestore,Zi);return QI(Ql(e),n._key).then(t=>gb(e,n,t))}class pm extends db{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,t)}}function YA(n){n=mn(n,Ji);const e=mn(n.firestore,Zi),t=Ql(e),r=new pm(e);return ub(n._query),YI(t,n._query).then(i=>new pb(e,r,n,i))}function XA(n,e,t){n=mn(n,mt);const r=mn(n.firestore,Zi),i=fb(n.converter,e);return ou(r,[ib(eu(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Yt.none())])}function JA(n,e,t,...r){n=mn(n,mt);const i=mn(n.firestore,Zi),s=eu(i);let c;return c=typeof(e=xe(e))=="string"||e instanceof Qa?ob(s,"updateDoc",n._key,e,t,r):sb(s,"updateDoc",n._key,e),ou(i,[c.toMutation(n._key,Yt.exists(!0))])}function ZA(n){return ou(mn(n.firestore,Zi),[new Ol(n._key,Yt.none())])}function ou(n,e){return function(r,i){const s=new Ln;return r.asyncQueue.enqueueAndForget(async()=>MI(await GI(r),i,s)),s.promise}(Ql(n),e)}function gb(n,e,t){const r=t.docs.get(e._key),i=new pm(n);return new fm(n,i,e._key,r,new Ms(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Gi=i})(Wi),fn(new Xt("firestore",(r,{instanceIdentifier:i,options:s})=>{const c=r.getProvider("app").getImmediate(),l=new Zi(new aw(r.getProvider("auth-internal")),new uw(c,r.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ys(p.options.projectId,y)}(c,i),c);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ft(Nh,Vh,e),Ft(Nh,Vh,"esm2017")})();const mm="@firebase/installations",au="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=1e4,_m=`w:${au}`,ym="FIS_v2",_b="https://firebaseinstallations.googleapis.com/v1",yb=60*60*1e3,vb="installations",Eb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zr=new ti(vb,Eb,wb);function vm(n){return n instanceof Zt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em({projectId:n}){return`${_b}/projects/${n}/installations`}function wm(n){return{token:n.token,requestStatus:2,expiresIn:Ib(n.expiresIn),creationTime:Date.now()}}async function Tm(n,e){const r=(await e.json()).error;return Zr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Im({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Tb(n,{refreshToken:e}){const t=Im(n);return t.append("Authorization",bb(e)),t}async function bm(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Ib(n){return Number(n.replace("s","000"))}function bb(n){return`${ym} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Em(n),i=Im(n),s=e.getImmediate({optional:!0});if(s){const p=await s.getHeartbeatsHeader();p&&i.append("x-firebase-client",p)}const c={fid:t,authVersion:ym,appId:n.appId,sdkVersion:_m},l={method:"POST",headers:i,body:JSON.stringify(c)},d=await bm(()=>fetch(r,l));if(d.ok){const p=await d.json();return{fid:p.fid||t,registrationStatus:2,refreshToken:p.refreshToken,authToken:wm(p.authToken)}}else throw await Tm("Create Installation",d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=/^[cdef][\w-]{21}$/,ll="";function Sb(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Pb(n);return Rb.test(t)?t:ll}catch{return ll}}function Pb(n){return Cb(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=new Map;function Rm(n,e){const t=Ja(n);Sm(t,e),kb(t,e)}function Sm(n,e){const t=Cm.get(n);if(t)for(const r of t)r(e)}function kb(n,e){const t=Db();t&&t.postMessage({key:n,fid:e}),Ob()}let Gr=null;function Db(){return!Gr&&"BroadcastChannel"in self&&(Gr=new BroadcastChannel("[Firebase] FID Change"),Gr.onmessage=n=>{Sm(n.data.key,n.data.fid)}),Gr}function Ob(){Cm.size===0&&Gr&&(Gr.close(),Gr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb="firebase-installations-database",Vb=1,ei="firebase-installations-store";let Vc=null;function cu(){return Vc||(Vc=Zd(Nb,Vb,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ei)}}})),Vc}async function Pa(n,e){const t=Ja(n),i=(await cu()).transaction(ei,"readwrite"),s=i.objectStore(ei),c=await s.get(t);return await s.put(e,t),await i.done,(!c||c.fid!==e.fid)&&Rm(n,e.fid),e}async function Pm(n){const e=Ja(n),r=(await cu()).transaction(ei,"readwrite");await r.objectStore(ei).delete(e),await r.done}async function Za(n,e){const t=Ja(n),i=(await cu()).transaction(ei,"readwrite"),s=i.objectStore(ei),c=await s.get(t),l=e(c);return l===void 0?await s.delete(t):await s.put(l,t),await i.done,l&&(!c||c.fid!==l.fid)&&Rm(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(n){let e;const t=await Za(n.appConfig,r=>{const i=Lb(r),s=xb(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===ll?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Lb(n){const e=n||{fid:Sb(),registrationStatus:0};return km(e)}function xb(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Zr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Mb(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Fb(n)}:{installationEntry:e}}async function Mb(n,e){try{const t=await Ab(n,e);return Pa(n.appConfig,t)}catch(t){throw vm(t)&&t.customData.serverCode===409?await Pm(n.appConfig):await Pa(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Fb(n){let e=await Od(n.appConfig);for(;e.registrationStatus===1;)await Am(100),e=await Od(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await lu(n);return r||t}return e}function Od(n){return Za(n,e=>{if(!e)throw Zr.create("installation-not-found");return km(e)})}function km(n){return Ub(n)?{fid:n.fid,registrationStatus:0}:n}function Ub(n){return n.registrationStatus===1&&n.registrationTime+gm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b({appConfig:n,heartbeatServiceProvider:e},t){const r=Bb(n,t),i=Tb(n,t),s=e.getImmediate({optional:!0});if(s){const p=await s.getHeartbeatsHeader();p&&i.append("x-firebase-client",p)}const c={installation:{sdkVersion:_m,appId:n.appId}},l={method:"POST",headers:i,body:JSON.stringify(c)},d=await bm(()=>fetch(r,l));if(d.ok){const p=await d.json();return wm(p)}else throw await Tm("Generate Auth Token",d)}function Bb(n,{fid:e}){return`${Em(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(n,e=!1){let t;const r=await Za(n.appConfig,s=>{if(!Dm(s))throw Zr.create("not-registered");const c=s.authToken;if(!e&&Hb(c))return s;if(c.requestStatus===1)return t=jb(n,e),s;{if(!navigator.onLine)throw Zr.create("app-offline");const l=Wb(s);return t=qb(n,l),l}});return t?await t:r.authToken}async function jb(n,e){let t=await Nd(n.appConfig);for(;t.authToken.requestStatus===1;)await Am(100),t=await Nd(n.appConfig);const r=t.authToken;return r.requestStatus===0?uu(n,e):r}function Nd(n){return Za(n,e=>{if(!Dm(e))throw Zr.create("not-registered");const t=e.authToken;return Kb(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qb(n,e){try{const t=await $b(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Pa(n.appConfig,r),t}catch(t){if(vm(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Pm(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Pa(n.appConfig,r)}throw t}}function Dm(n){return n!==void 0&&n.registrationStatus===2}function Hb(n){return n.requestStatus===2&&!zb(n)}function zb(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+yb}function Wb(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Kb(n){return n.requestStatus===1&&n.requestTime+gm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(n){const e=n,{installationEntry:t,registrationPromise:r}=await lu(e);return r?r.catch(console.error):uu(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(n,e=!1){const t=n;return await Yb(t),(await uu(t,e)).token}async function Yb(n){const{registrationPromise:e}=await lu(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(n){if(!n||!n.options)throw Lc("App Configuration");if(!n.name)throw Lc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Lc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Lc(n){return Zr.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="installations",Jb="installations-internal",Zb=n=>{const e=n.getProvider("app").getImmediate(),t=Xb(e),r=ni(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},eA=n=>{const e=n.getProvider("app").getImmediate(),t=ni(e,Om).getImmediate();return{getId:()=>Gb(t),getToken:i=>Qb(t,i)}};function tA(){fn(new Xt(Om,Zb,"PUBLIC")),fn(new Xt(Jb,eA,"PRIVATE"))}tA();Ft(mm,au);Ft(mm,au,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="analytics",nA="firebase_id",rA="origin",iA=60*1e3,sA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new Oa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Pt=new ti("analytics","Analytics",oA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(n){if(!n.startsWith(hu)){const e=Pt.create("invalid-gtag-resource",{gtagURL:n});return wt.warn(e.message),""}return n}function Nm(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function cA(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function lA(n,e){const t=cA("firebase-js-sdk-policy",{createScriptURL:aA}),r=document.createElement("script"),i=`${hu}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function uA(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function hA(n,e,t,r,i,s){const c=r[i];try{if(c)await e[c];else{const d=(await Nm(t)).find(p=>p.measurementId===i);d&&await e[d.appId]}}catch(l){wt.error(l)}n("config",i,s)}async function dA(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let c=i.send_to;Array.isArray(c)||(c=[c]);const l=await Nm(t);for(const d of c){const p=l.find(T=>T.measurementId===d),y=p&&e[p.appId];if(y)s.push(y);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){wt.error(s)}}function fA(n,e,t,r){async function i(s,...c){try{if(s==="event"){const[l,d]=c;await dA(n,e,t,l,d)}else if(s==="config"){const[l,d]=c;await hA(n,e,t,r,l,d)}else if(s==="consent"){const[l,d]=c;n("consent",l,d)}else if(s==="get"){const[l,d,p]=c;n("get",l,d,p)}else if(s==="set"){const[l]=c;n("set",l)}else n(s,...c)}catch(l){wt.error(l)}}return i}function pA(n,e,t,r,i){let s=function(...c){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=fA(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function mA(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(hu)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=30,_A=1e3;class yA{constructor(e={},t=_A){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Vm=new yA;function vA(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function EA(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:vA(r)},s=sA.replace("{app-id}",t),c=await fetch(s,i);if(c.status!==200&&c.status!==304){let l="";try{const d=await c.json();!((e=d.error)===null||e===void 0)&&e.message&&(l=d.error.message)}catch{}throw Pt.create("config-fetch-failed",{httpStatus:c.status,responseMessage:l})}return c.json()}async function wA(n,e=Vm,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw Pt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Pt.create("no-api-key")}const c=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new bA;return setTimeout(async()=>{l.abort()},iA),Lm({appId:r,apiKey:i,measurementId:s},c,l,e)}async function Lm(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Vm){var s;const{appId:c,measurementId:l}=n;try{await TA(r,e)}catch(d){if(l)return wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:c,measurementId:l};throw d}try{const d=await EA(n);return i.deleteThrottleMetadata(c),d}catch(d){const p=d;if(!IA(p)){if(i.deleteThrottleMetadata(c),l)return wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:l};throw d}const y=Number((s=p==null?void 0:p.customData)===null||s===void 0?void 0:s.httpStatus)===503?ih(t,i.intervalMillis,gA):ih(t,i.intervalMillis),T={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return i.setThrottleMetadata(c,T),wt.debug(`Calling attemptFetch again in ${y} millis`),Lm(n,T,r,i)}}function TA(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(Pt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function IA(n){if(!(n instanceof Zt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class bA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function AA(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,c=Object.assign(Object.assign({},r),{send_to:s});n("event",t,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(){if(Qd())try{await Yd()}catch(n){return wt.warn(Pt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return wt.warn(Pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function RA(n,e,t,r,i,s,c){var l;const d=wA(n);d.then(N=>{t[N.measurementId]=N.appId,n.options.measurementId&&N.measurementId!==n.options.measurementId&&wt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>wt.error(N)),e.push(d);const p=CA().then(N=>{if(N)return r.getId()}),[y,T]=await Promise.all([d,p]);mA(s)||lA(s,y.measurementId),i("js",new Date);const I=(l=c==null?void 0:c.config)!==null&&l!==void 0?l:{};return I[rA]="firebase",I.update=!0,T!=null&&(I[nA]=T),i("config",y.measurementId,I),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.app=e}_delete(){return delete Hs[this.app.options.appId],Promise.resolve()}}let Hs={},Vd=[];const Ld={};let xc="dataLayer",PA="gtag",xd,xm,Md=!1;function kA(){const n=[];if(Gd()&&n.push("This is a browser extension environment."),b_()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Pt.create("invalid-analytics-context",{errorInfo:e});wt.warn(t.message)}}function DA(n,e,t){kA();const r=n.options.appId;if(!r)throw Pt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Pt.create("no-api-key");if(Hs[r]!=null)throw Pt.create("already-exists",{id:r});if(!Md){uA(xc);const{wrappedGtag:s,gtagCore:c}=pA(Hs,Vd,Ld,xc,PA);xm=s,xd=c,Md=!0}return Hs[r]=RA(n,Vd,Ld,e,xd,xc,t),new SA(n)}function OA(n=hl()){n=xe(n);const e=ni(n,ka);return e.isInitialized()?e.getImmediate():NA(n)}function NA(n,e={}){const t=ni(n,ka);if(t.isInitialized()){const i=t.getImmediate();if(mr(e,t.getOptions()))return i;throw Pt.create("already-initialized")}return t.initialize({options:e})}function VA(n,e,t,r){n=xe(n),AA(xm,Hs[n.app.options.appId],e,t,r).catch(i=>wt.error(i))}const Fd="@firebase/analytics",Ud="0.10.16";function LA(){fn(new Xt(ka,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return DA(r,i,t)},"PUBLIC")),fn(new Xt("analytics-internal",n,"PRIVATE")),Ft(Fd,Ud),Ft(Fd,Ud,"esm2017");function n(e){try{const t=e.getProvider(ka).getImmediate();return{logEvent:(r,i,s)=>VA(t,r,i,s)}}catch(t){throw Pt.create("interop-component-reg-failed",{reason:t})}}}LA();const xA={apiKey:"AIzaSyBkzv8uY4HBrF19P6CUvHrSnj6xOBXACnc",authDomain:"chronohaven.firebaseapp.com",projectId:"chronohaven",storageBucket:"chronohaven.firebasestorage.app",messagingSenderId:"598935116715",appId:"1:598935116715:web:3f7801faf73ec3e72450ee",measurementId:"G-KC1GKPTGVF"},du=ef(xA),e0=rw(du),t0=ZI(du);OA(du);function n0(n,e="danger",t){return`
        <div class="alert fs-sm lh-1 d-flex align-items-center gap-2 fw-medium mt-2 ${(c=>{switch(c){case"danger":return"bg-danger-subtle text-danger";case"warning":return"bg-warning-subtle text-warning";case"success":return"bg-success-subtle text-success";default:return""}})(e)} ${t||""}">
            ${e==="danger"?`
        <svg width="16" height="16" class="d-block flex-shrink-0">
            <use href="./src/assets/images/sprite.svg#exclamationDiamond"></use>
        </svg>
    `:e==="success"?`
        <svg width="16" height="16" class="d-block flex-shrink-0">
            <use href="./src/assets/images/sprite.svg#checkCircle"></use>
        </svg>
    `:""}
            <span class="d-block">${n}</span>
        </div>
    `}export{ar as G,n0 as a,e0 as b,zA as c,t0 as d,qA as e,WA as f,YA as g,QA as h,XA as i,UA as j,MA as k,FA as l,ZA as m,jA as n,BA as o,KA as q,$A as s,JA as u,GA as w};
