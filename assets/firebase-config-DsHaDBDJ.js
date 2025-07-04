(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Yo={exports:{}};/*!
  * Bootstrap v5.3.6 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Zg=Yo.exports,Ku;function e_(){return Ku||(Ku=1,function(n,e){(function(t,r){n.exports=r()})(Zg,function(){const t=new Map,r={set(p,a,h){t.has(p)||t.set(p,new Map);const g=t.get(p);g.has(a)||g.size===0?g.set(a,h):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(g.keys())[0]}.`)},get:(p,a)=>t.has(p)&&t.get(p).get(a)||null,remove(p,a){if(!t.has(p))return;const h=t.get(p);h.delete(a),h.size===0&&t.delete(p)}},i="transitionend",s=p=>(p&&window.CSS&&window.CSS.escape&&(p=p.replace(/#([^\s"#']+)/g,(a,h)=>`#${CSS.escape(h)}`)),p),c=p=>{p.dispatchEvent(new Event(i))},u=p=>!(!p||typeof p!="object")&&(p.jquery!==void 0&&(p=p[0]),p.nodeType!==void 0),d=p=>u(p)?p.jquery?p[0]:p:typeof p=="string"&&p.length>0?document.querySelector(s(p)):null,m=p=>{if(!u(p)||p.getClientRects().length===0)return!1;const a=getComputedStyle(p).getPropertyValue("visibility")==="visible",h=p.closest("details:not([open])");if(!h)return a;if(h!==p){const g=p.closest("summary");if(g&&g.parentNode!==h||g===null)return!1}return a},y=p=>!p||p.nodeType!==Node.ELEMENT_NODE||!!p.classList.contains("disabled")||(p.disabled!==void 0?p.disabled:p.hasAttribute("disabled")&&p.getAttribute("disabled")!=="false"),T=p=>{if(!document.documentElement.attachShadow)return null;if(typeof p.getRootNode=="function"){const a=p.getRootNode();return a instanceof ShadowRoot?a:null}return p instanceof ShadowRoot?p:p.parentNode?T(p.parentNode):null},b=()=>{},N=p=>{p.offsetHeight},$=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,z=[],F=()=>document.documentElement.dir==="rtl",ee=p=>{var a;a=()=>{const h=$();if(h){const g=p.NAME,A=h.fn[g];h.fn[g]=p.jQueryInterface,h.fn[g].Constructor=p,h.fn[g].noConflict=()=>(h.fn[g]=A,p.jQueryInterface)}},document.readyState==="loading"?(z.length||document.addEventListener("DOMContentLoaded",()=>{for(const h of z)h()}),z.push(a)):a()},G=(p,a=[],h=p)=>typeof p=="function"?p.call(...a):h,ce=(p,a,h=!0)=>{if(!h)return void G(p);const g=(O=>{if(!O)return 0;let{transitionDuration:x,transitionDelay:B}=window.getComputedStyle(O);const H=Number.parseFloat(x),W=Number.parseFloat(B);return H||W?(x=x.split(",")[0],B=B.split(",")[0],1e3*(Number.parseFloat(x)+Number.parseFloat(B))):0})(a)+5;let A=!1;const C=({target:O})=>{O===a&&(A=!0,a.removeEventListener(i,C),G(p))};a.addEventListener(i,C),setTimeout(()=>{A||c(a)},g)},Ae=(p,a,h,g)=>{const A=p.length;let C=p.indexOf(a);return C===-1?!h&&g?p[A-1]:p[0]:(C+=h?1:-1,g&&(C=(C+A)%A),p[Math.max(0,Math.min(C,A-1))])},mt=/[^.]*(?=\..*)\.|.*/,Pe=/\..*/,R=/::\d+$/,v={};let w=1;const I={mouseenter:"mouseover",mouseleave:"mouseout"},S=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function k(p,a){return a&&`${a}::${w++}`||p.uidEvent||w++}function E(p){const a=k(p);return p.uidEvent=a,v[a]=v[a]||{},v[a]}function St(p,a,h=null){return Object.values(p).find(g=>g.callable===a&&g.delegationSelector===h)}function $n(p,a,h){const g=typeof a=="string",A=g?h:a||h;let C=si(p);return S.has(C)||(C=p),[g,A,C]}function uo(p,a,h,g,A){if(typeof a!="string"||!p)return;let[C,O,x]=$n(a,h,g);a in I&&(O=(re=>function(te){if(!te.relatedTarget||te.relatedTarget!==te.delegateTarget&&!te.delegateTarget.contains(te.relatedTarget))return re.call(this,te)})(O));const B=E(p),H=B[x]||(B[x]={}),W=St(H,O,C?h:null);if(W)return void(W.oneOff=W.oneOff&&A);const j=k(O,a.replace(mt,"")),oe=C?function(X,re,te){return function ie(Te){const Re=X.querySelectorAll(re);for(let{target:ue}=Te;ue&&ue!==this;ue=ue.parentNode)for(const _e of Re)if(_e===ue)return Zi(Te,{delegateTarget:ue}),ie.oneOff&&M.off(X,Te.type,re,te),te.apply(ue,[Te])}}(p,h,O):function(X,re){return function te(ie){return Zi(ie,{delegateTarget:X}),te.oneOff&&M.off(X,ie.type,re),re.apply(X,[ie])}}(p,O);oe.delegationSelector=C?h:null,oe.callable=O,oe.oneOff=A,oe.uidEvent=j,H[j]=oe,p.addEventListener(x,oe,C)}function _n(p,a,h,g,A){const C=St(a[h],g,A);C&&(p.removeEventListener(h,C,!!A),delete a[h][C.uidEvent])}function Tr(p,a,h,g){const A=a[h]||{};for(const[C,O]of Object.entries(A))C.includes(g)&&_n(p,a,h,O.callable,O.delegationSelector)}function si(p){return p=p.replace(Pe,""),I[p]||p}const M={on(p,a,h,g){uo(p,a,h,g,!1)},one(p,a,h,g){uo(p,a,h,g,!0)},off(p,a,h,g){if(typeof a!="string"||!p)return;const[A,C,O]=$n(a,h,g),x=O!==a,B=E(p),H=B[O]||{},W=a.startsWith(".");if(C===void 0){if(W)for(const j of Object.keys(B))Tr(p,B,j,a.slice(1));for(const[j,oe]of Object.entries(H)){const X=j.replace(R,"");x&&!a.includes(X)||_n(p,B,O,oe.callable,oe.delegationSelector)}}else{if(!Object.keys(H).length)return;_n(p,B,O,C,A?h:null)}},trigger(p,a,h){if(typeof a!="string"||!p)return null;const g=$();let A=null,C=!0,O=!0,x=!1;a!==si(a)&&g&&(A=g.Event(a,h),g(p).trigger(A),C=!A.isPropagationStopped(),O=!A.isImmediatePropagationStopped(),x=A.isDefaultPrevented());const B=Zi(new Event(a,{bubbles:C,cancelable:!0}),h);return x&&B.preventDefault(),O&&p.dispatchEvent(B),B.defaultPrevented&&A&&A.preventDefault(),B}};function Zi(p,a={}){for(const[h,g]of Object.entries(a))try{p[h]=g}catch{Object.defineProperty(p,h,{configurable:!0,get:()=>g})}return p}function Ut(p){if(p==="true")return!0;if(p==="false")return!1;if(p===Number(p).toString())return Number(p);if(p===""||p==="null")return null;if(typeof p!="string")return p;try{return JSON.parse(decodeURIComponent(p))}catch{return p}}function xe(p){return p.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}const $t={setDataAttribute(p,a,h){p.setAttribute(`data-bs-${xe(a)}`,h)},removeDataAttribute(p,a){p.removeAttribute(`data-bs-${xe(a)}`)},getDataAttributes(p){if(!p)return{};const a={},h=Object.keys(p.dataset).filter(g=>g.startsWith("bs")&&!g.startsWith("bsConfig"));for(const g of h){let A=g.replace(/^bs/,"");A=A.charAt(0).toLowerCase()+A.slice(1),a[A]=Ut(p.dataset[g])}return a},getDataAttribute:(p,a)=>Ut(p.getAttribute(`data-bs-${xe(a)}`))};class Bt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(a){return a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a}_mergeConfigObj(a,h){const g=u(h)?$t.getDataAttribute(h,"config"):{};return{...this.constructor.Default,...typeof g=="object"?g:{},...u(h)?$t.getDataAttributes(h):{},...typeof a=="object"?a:{}}}_typeCheckConfig(a,h=this.constructor.DefaultType){for(const[A,C]of Object.entries(h)){const O=a[A],x=u(O)?"element":(g=O)==null?`${g}`:Object.prototype.toString.call(g).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(C).test(x))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${A}" provided type "${x}" but expected type "${C}".`)}var g}}class wt extends Bt{constructor(a,h){super(),(a=d(a))&&(this._element=a,this._config=this._getConfig(h),r.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.remove(this._element,this.constructor.DATA_KEY),M.off(this._element,this.constructor.EVENT_KEY);for(const a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,h,g=!0){ce(a,h,g)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return r.get(d(a),this.DATA_KEY)}static getOrCreateInstance(a,h={}){return this.getInstance(a)||new this(a,typeof h=="object"?h:null)}static get VERSION(){return"5.3.6"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}const Bn=p=>{let a=p.getAttribute("data-bs-target");if(!a||a==="#"){let h=p.getAttribute("href");if(!h||!h.includes("#")&&!h.startsWith("."))return null;h.includes("#")&&!h.startsWith("#")&&(h=`#${h.split("#")[1]}`),a=h&&h!=="#"?h.trim():null}return a?a.split(",").map(h=>s(h)).join(","):null},Q={find:(p,a=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(a,p)),findOne:(p,a=document.documentElement)=>Element.prototype.querySelector.call(a,p),children:(p,a)=>[].concat(...p.children).filter(h=>h.matches(a)),parents(p,a){const h=[];let g=p.parentNode.closest(a);for(;g;)h.push(g),g=g.parentNode.closest(a);return h},prev(p,a){let h=p.previousElementSibling;for(;h;){if(h.matches(a))return[h];h=h.previousElementSibling}return[]},next(p,a){let h=p.nextElementSibling;for(;h;){if(h.matches(a))return[h];h=h.nextElementSibling}return[]},focusableChildren(p){const a=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(h=>`${h}:not([tabindex^="-"])`).join(",");return this.find(a,p).filter(h=>!y(h)&&m(h))},getSelectorFromElement(p){const a=Bn(p);return a&&Q.findOne(a)?a:null},getElementFromSelector(p){const a=Bn(p);return a?Q.findOne(a):null},getMultipleElementsFromSelector(p){const a=Bn(p);return a?Q.find(a):[]}},oi=(p,a="hide")=>{const h=`click.dismiss${p.EVENT_KEY}`,g=p.NAME;M.on(document,h,`[data-bs-dismiss="${g}"]`,function(A){if(["A","AREA"].includes(this.tagName)&&A.preventDefault(),y(this))return;const C=Q.getElementFromSelector(this)||this.closest(`.${g}`);p.getOrCreateInstance(C)[a]()})},Ir=".bs.alert",ai=`close${Ir}`,es=`closed${Ir}`;class yn extends wt{static get NAME(){return"alert"}close(){if(M.trigger(this._element,ai).defaultPrevented)return;this._element.classList.remove("show");const a=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,a)}_destroyElement(){this._element.remove(),M.trigger(this._element,es),this.dispose()}static jQueryInterface(a){return this.each(function(){const h=yn.getOrCreateInstance(this);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a](this)}})}}oi(yn,"close"),ee(yn);const ci='[data-bs-toggle="button"]';class vn extends wt{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(a){return this.each(function(){const h=vn.getOrCreateInstance(this);a==="toggle"&&h[a]()})}}M.on(document,"click.bs.button.data-api",ci,p=>{p.preventDefault();const a=p.target.closest(ci);vn.getOrCreateInstance(a).toggle()}),ee(vn);const En=".bs.swipe",Xa=`touchstart${En}`,Ja=`touchmove${En}`,ho=`touchend${En}`,ts=`pointerdown${En}`,fo=`pointerup${En}`,Za={endCallback:null,leftCallback:null,rightCallback:null},ns={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class jn extends Bt{constructor(a,h){super(),this._element=a,a&&jn.isSupported()&&(this._config=this._getConfig(h),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Za}static get DefaultType(){return ns}static get NAME(){return"swipe"}dispose(){M.off(this._element,En)}_start(a){this._supportPointerEvents?this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX):this._deltaX=a.touches[0].clientX}_end(a){this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX-this._deltaX),this._handleSwipe(),G(this._config.endCallback)}_move(a){this._deltaX=a.touches&&a.touches.length>1?0:a.touches[0].clientX-this._deltaX}_handleSwipe(){const a=Math.abs(this._deltaX);if(a<=40)return;const h=a/this._deltaX;this._deltaX=0,h&&G(h>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(M.on(this._element,ts,a=>this._start(a)),M.on(this._element,fo,a=>this._end(a)),this._element.classList.add("pointer-event")):(M.on(this._element,Xa,a=>this._start(a)),M.on(this._element,Ja,a=>this._move(a)),M.on(this._element,ho,a=>this._end(a)))}_eventIsPointerPenTouch(a){return this._supportPointerEvents&&(a.pointerType==="pen"||a.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const jt=".bs.carousel",Ue=".data-api",Xe="ArrowLeft",li="ArrowRight",qn="next",wn="prev",Hn="left",Zt="right",po=`slide${jt}`,ui=`slid${jt}`,rs=`keydown${jt}`,ec=`mouseenter${jt}`,tc=`mouseleave${jt}`,is=`dragstart${jt}`,mo=`load${jt}${Ue}`,go=`click${jt}${Ue}`,zn="carousel",Wn="active",hi=".active",en=".carousel-item",_o=hi+en,di={[Xe]:Zt,[li]:Hn},yo={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ar={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Tn extends wt{constructor(a,h){super(a,h),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===zn&&this.cycle()}static get Default(){return yo}static get DefaultType(){return Ar}static get NAME(){return"carousel"}next(){this._slide(qn)}nextWhenVisible(){!document.hidden&&m(this._element)&&this.next()}prev(){this._slide(wn)}pause(){this._isSliding&&c(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?M.one(this._element,ui,()=>this.cycle()):this.cycle())}to(a){const h=this._getItems();if(a>h.length-1||a<0)return;if(this._isSliding)return void M.one(this._element,ui,()=>this.to(a));const g=this._getItemIndex(this._getActive());if(g===a)return;const A=a>g?qn:wn;this._slide(A,h[a])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(a){return a.defaultInterval=a.interval,a}_addEventListeners(){this._config.keyboard&&M.on(this._element,rs,a=>this._keydown(a)),this._config.pause==="hover"&&(M.on(this._element,ec,()=>this.pause()),M.on(this._element,tc,()=>this._maybeEnableCycle())),this._config.touch&&jn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const h of Q.find(".carousel-item img",this._element))M.on(h,is,g=>g.preventDefault());const a={leftCallback:()=>this._slide(this._directionToOrder(Hn)),rightCallback:()=>this._slide(this._directionToOrder(Zt)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new jn(this._element,a)}_keydown(a){if(/input|textarea/i.test(a.target.tagName))return;const h=di[a.key];h&&(a.preventDefault(),this._slide(this._directionToOrder(h)))}_getItemIndex(a){return this._getItems().indexOf(a)}_setActiveIndicatorElement(a){if(!this._indicatorsElement)return;const h=Q.findOne(hi,this._indicatorsElement);h.classList.remove(Wn),h.removeAttribute("aria-current");const g=Q.findOne(`[data-bs-slide-to="${a}"]`,this._indicatorsElement);g&&(g.classList.add(Wn),g.setAttribute("aria-current","true"))}_updateInterval(){const a=this._activeElement||this._getActive();if(!a)return;const h=Number.parseInt(a.getAttribute("data-bs-interval"),10);this._config.interval=h||this._config.defaultInterval}_slide(a,h=null){if(this._isSliding)return;const g=this._getActive(),A=a===qn,C=h||Ae(this._getItems(),g,A,this._config.wrap);if(C===g)return;const O=this._getItemIndex(C),x=j=>M.trigger(this._element,j,{relatedTarget:C,direction:this._orderToDirection(a),from:this._getItemIndex(g),to:O});if(x(po).defaultPrevented||!g||!C)return;const B=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(O),this._activeElement=C;const H=A?"carousel-item-start":"carousel-item-end",W=A?"carousel-item-next":"carousel-item-prev";C.classList.add(W),N(C),g.classList.add(H),C.classList.add(H),this._queueCallback(()=>{C.classList.remove(H,W),C.classList.add(Wn),g.classList.remove(Wn,W,H),this._isSliding=!1,x(ui)},g,this._isAnimated()),B&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return Q.findOne(_o,this._element)}_getItems(){return Q.find(en,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(a){return F()?a===Hn?wn:qn:a===Hn?qn:wn}_orderToDirection(a){return F()?a===wn?Hn:Zt:a===wn?Zt:Hn}static jQueryInterface(a){return this.each(function(){const h=Tn.getOrCreateInstance(this,a);if(typeof a!="number"){if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a]()}}else h.to(a)})}}M.on(document,go,"[data-bs-slide], [data-bs-slide-to]",function(p){const a=Q.getElementFromSelector(this);if(!a||!a.classList.contains(zn))return;p.preventDefault();const h=Tn.getOrCreateInstance(a),g=this.getAttribute("data-bs-slide-to");return g?(h.to(g),void h._maybeEnableCycle()):$t.getDataAttribute(this,"slide")==="next"?(h.next(),void h._maybeEnableCycle()):(h.prev(),void h._maybeEnableCycle())}),M.on(window,mo,()=>{const p=Q.find('[data-bs-ride="carousel"]');for(const a of p)Tn.getOrCreateInstance(a)}),ee(Tn);const Ne=".bs.collapse",vo=`show${Ne}`,br=`shown${Ne}`,Cr=`hide${Ne}`,nc=`hidden${Ne}`,rc=`click${Ne}.data-api`,tn="show",Kn="collapse",fi="collapsing",pi=`:scope .${Kn} .${Kn}`,mi='[data-bs-toggle="collapse"]',ss={parent:null,toggle:!0},gi={parent:"(null|element)",toggle:"boolean"};class ct extends wt{constructor(a,h){super(a,h),this._isTransitioning=!1,this._triggerArray=[];const g=Q.find(mi);for(const A of g){const C=Q.getSelectorFromElement(A),O=Q.find(C).filter(x=>x===this._element);C!==null&&O.length&&this._triggerArray.push(A)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ss}static get DefaultType(){return gi}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(A=>A!==this._element).map(A=>ct.getOrCreateInstance(A,{toggle:!1}))),a.length&&a[0]._isTransitioning||M.trigger(this._element,vo).defaultPrevented)return;for(const A of a)A.hide();const h=this._getDimension();this._element.classList.remove(Kn),this._element.classList.add(fi),this._element.style[h]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const g=`scroll${h[0].toUpperCase()+h.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(fi),this._element.classList.add(Kn,tn),this._element.style[h]="",M.trigger(this._element,br)},this._element,!0),this._element.style[h]=`${this._element[g]}px`}hide(){if(this._isTransitioning||!this._isShown()||M.trigger(this._element,Cr).defaultPrevented)return;const a=this._getDimension();this._element.style[a]=`${this._element.getBoundingClientRect()[a]}px`,N(this._element),this._element.classList.add(fi),this._element.classList.remove(Kn,tn);for(const h of this._triggerArray){const g=Q.getElementFromSelector(h);g&&!this._isShown(g)&&this._addAriaAndCollapsedClass([h],!1)}this._isTransitioning=!0,this._element.style[a]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(fi),this._element.classList.add(Kn),M.trigger(this._element,nc)},this._element,!0)}_isShown(a=this._element){return a.classList.contains(tn)}_configAfterMerge(a){return a.toggle=!!a.toggle,a.parent=d(a.parent),a}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const a=this._getFirstLevelChildren(mi);for(const h of a){const g=Q.getElementFromSelector(h);g&&this._addAriaAndCollapsedClass([h],this._isShown(g))}}_getFirstLevelChildren(a){const h=Q.find(pi,this._config.parent);return Q.find(a,this._config.parent).filter(g=>!h.includes(g))}_addAriaAndCollapsedClass(a,h){if(a.length)for(const g of a)g.classList.toggle("collapsed",!h),g.setAttribute("aria-expanded",h)}static jQueryInterface(a){const h={};return typeof a=="string"&&/show|hide/.test(a)&&(h.toggle=!1),this.each(function(){const g=ct.getOrCreateInstance(this,h);if(typeof a=="string"){if(g[a]===void 0)throw new TypeError(`No method named "${a}"`);g[a]()}})}}M.on(document,rc,mi,function(p){(p.target.tagName==="A"||p.delegateTarget&&p.delegateTarget.tagName==="A")&&p.preventDefault();for(const a of Q.getMultipleElementsFromSelector(this))ct.getOrCreateInstance(a,{toggle:!1}).toggle()}),ee(ct);var He="top",nt="bottom",Je="right",$e="left",Rr="auto",In=[He,nt,Je,$e],An="start",qt="end",os="clippingParents",Sr="viewport",Pt="popper",nn="reference",Pr=In.reduce(function(p,a){return p.concat([a+"-"+An,a+"-"+qt])},[]),as=[].concat(In,[Rr]).reduce(function(p,a){return p.concat([a,a+"-"+An,a+"-"+qt])},[]),cs="beforeRead",ls="read",us="afterRead",_i="beforeMain",yi="main",hs="afterMain",ds="beforeWrite",Eo="write",wo="afterWrite",fs=[cs,ls,us,_i,yi,hs,ds,Eo,wo];function Tt(p){return p?(p.nodeName||"").toLowerCase():null}function lt(p){if(p==null)return window;if(p.toString()!=="[object Window]"){var a=p.ownerDocument;return a&&a.defaultView||window}return p}function ut(p){return p instanceof lt(p).Element||p instanceof Element}function De(p){return p instanceof lt(p).HTMLElement||p instanceof HTMLElement}function Gn(p){return typeof ShadowRoot<"u"&&(p instanceof lt(p).ShadowRoot||p instanceof ShadowRoot)}const Qn={name:"applyStyles",enabled:!0,phase:"write",fn:function(p){var a=p.state;Object.keys(a.elements).forEach(function(h){var g=a.styles[h]||{},A=a.attributes[h]||{},C=a.elements[h];De(C)&&Tt(C)&&(Object.assign(C.style,g),Object.keys(A).forEach(function(O){var x=A[O];x===!1?C.removeAttribute(O):C.setAttribute(O,x===!0?"":x)}))})},effect:function(p){var a=p.state,h={popper:{position:a.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(a.elements.popper.style,h.popper),a.styles=h,a.elements.arrow&&Object.assign(a.elements.arrow.style,h.arrow),function(){Object.keys(a.elements).forEach(function(g){var A=a.elements[g],C=a.attributes[g]||{},O=Object.keys(a.styles.hasOwnProperty(g)?a.styles[g]:h[g]).reduce(function(x,B){return x[B]="",x},{});De(A)&&Tt(A)&&(Object.assign(A.style,O),Object.keys(C).forEach(function(x){A.removeAttribute(x)}))})}},requires:["computeStyles"]};function It(p){return p.split("-")[0]}var ge=Math.max,bn=Math.min,kt=Math.round;function Cn(){var p=navigator.userAgentData;return p!=null&&p.brands&&Array.isArray(p.brands)?p.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function To(){return!/^((?!chrome|android).)*safari/i.test(Cn())}function Rn(p,a,h){a===void 0&&(a=!1),h===void 0&&(h=!1);var g=p.getBoundingClientRect(),A=1,C=1;a&&De(p)&&(A=p.offsetWidth>0&&kt(g.width)/p.offsetWidth||1,C=p.offsetHeight>0&&kt(g.height)/p.offsetHeight||1);var O=(ut(p)?lt(p):window).visualViewport,x=!To()&&h,B=(g.left+(x&&O?O.offsetLeft:0))/A,H=(g.top+(x&&O?O.offsetTop:0))/C,W=g.width/A,j=g.height/C;return{width:W,height:j,top:H,right:B+W,bottom:H+j,left:B,x:B,y:H}}function ps(p){var a=Rn(p),h=p.offsetWidth,g=p.offsetHeight;return Math.abs(a.width-h)<=1&&(h=a.width),Math.abs(a.height-g)<=1&&(g=a.height),{x:p.offsetLeft,y:p.offsetTop,width:h,height:g}}function Io(p,a){var h=a.getRootNode&&a.getRootNode();if(p.contains(a))return!0;if(h&&Gn(h)){var g=a;do{if(g&&p.isSameNode(g))return!0;g=g.parentNode||g.host}while(g)}return!1}function Ht(p){return lt(p).getComputedStyle(p)}function ic(p){return["table","td","th"].indexOf(Tt(p))>=0}function gt(p){return((ut(p)?p.ownerDocument:p.document)||window.document).documentElement}function At(p){return Tt(p)==="html"?p:p.assignedSlot||p.parentNode||(Gn(p)?p.host:null)||gt(p)}function ms(p){return De(p)&&Ht(p).position!=="fixed"?p.offsetParent:null}function Yn(p){for(var a=lt(p),h=ms(p);h&&ic(h)&&Ht(h).position==="static";)h=ms(h);return h&&(Tt(h)==="html"||Tt(h)==="body"&&Ht(h).position==="static")?a:h||function(g){var A=/firefox/i.test(Cn());if(/Trident/i.test(Cn())&&De(g)&&Ht(g).position==="fixed")return null;var C=At(g);for(Gn(C)&&(C=C.host);De(C)&&["html","body"].indexOf(Tt(C))<0;){var O=Ht(C);if(O.transform!=="none"||O.perspective!=="none"||O.contain==="paint"||["transform","perspective"].indexOf(O.willChange)!==-1||A&&O.willChange==="filter"||A&&O.filter&&O.filter!=="none")return C;C=C.parentNode}return null}(p)||a}function vi(p){return["top","bottom"].indexOf(p)>=0?"x":"y"}function Dt(p,a,h){return ge(p,bn(a,h))}function Ao(p){return Object.assign({},{top:0,right:0,bottom:0,left:0},p)}function bo(p,a){return a.reduce(function(h,g){return h[g]=p,h},{})}const Co={name:"arrow",enabled:!0,phase:"main",fn:function(p){var a,h=p.state,g=p.name,A=p.options,C=h.elements.arrow,O=h.modifiersData.popperOffsets,x=It(h.placement),B=vi(x),H=[$e,Je].indexOf(x)>=0?"height":"width";if(C&&O){var W=function(Ie,we){return Ao(typeof(Ie=typeof Ie=="function"?Ie(Object.assign({},we.rects,{placement:we.placement})):Ie)!="number"?Ie:bo(Ie,In))}(A.padding,h),j=ps(C),oe=B==="y"?He:$e,X=B==="y"?nt:Je,re=h.rects.reference[H]+h.rects.reference[B]-O[B]-h.rects.popper[H],te=O[B]-h.rects.reference[B],ie=Yn(C),Te=ie?B==="y"?ie.clientHeight||0:ie.clientWidth||0:0,Re=re/2-te/2,ue=W[oe],_e=Te-j[H]-W[X],ae=Te/2-j[H]/2+Re,fe=Dt(ue,ae,_e),Ee=B;h.modifiersData[g]=((a={})[Ee]=fe,a.centerOffset=fe-ae,a)}},effect:function(p){var a=p.state,h=p.options.element,g=h===void 0?"[data-popper-arrow]":h;g!=null&&(typeof g!="string"||(g=a.elements.popper.querySelector(g)))&&Io(a.elements.popper,g)&&(a.elements.arrow=g)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ht(p){return p.split("-")[1]}var sc={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ro(p){var a,h=p.popper,g=p.popperRect,A=p.placement,C=p.variation,O=p.offsets,x=p.position,B=p.gpuAcceleration,H=p.adaptive,W=p.roundOffsets,j=p.isFixed,oe=O.x,X=oe===void 0?0:oe,re=O.y,te=re===void 0?0:re,ie=typeof W=="function"?W({x:X,y:te}):{x:X,y:te};X=ie.x,te=ie.y;var Te=O.hasOwnProperty("x"),Re=O.hasOwnProperty("y"),ue=$e,_e=He,ae=window;if(H){var fe=Yn(h),Ee="clientHeight",Ie="clientWidth";fe===lt(h)&&Ht(fe=gt(h)).position!=="static"&&x==="absolute"&&(Ee="scrollHeight",Ie="scrollWidth"),(A===He||(A===$e||A===Je)&&C===qt)&&(_e=nt,te-=(j&&fe===ae&&ae.visualViewport?ae.visualViewport.height:fe[Ee])-g.height,te*=B?1:-1),A!==$e&&(A!==He&&A!==nt||C!==qt)||(ue=Je,X-=(j&&fe===ae&&ae.visualViewport?ae.visualViewport.width:fe[Ie])-g.width,X*=B?1:-1)}var we,Ve=Object.assign({position:x},H&&sc),bt=W===!0?function(Wt,ft){var Nt=Wt.x,Vt=Wt.y,Oe=ft.devicePixelRatio||1;return{x:kt(Nt*Oe)/Oe||0,y:kt(Vt*Oe)/Oe||0}}({x:X,y:te},lt(h)):{x:X,y:te};return X=bt.x,te=bt.y,B?Object.assign({},Ve,((we={})[_e]=Re?"0":"",we[ue]=Te?"0":"",we.transform=(ae.devicePixelRatio||1)<=1?"translate("+X+"px, "+te+"px)":"translate3d("+X+"px, "+te+"px, 0)",we)):Object.assign({},Ve,((a={})[_e]=Re?te+"px":"",a[ue]=Te?X+"px":"",a.transform="",a))}const Xn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(p){var a=p.state,h=p.options,g=h.gpuAcceleration,A=g===void 0||g,C=h.adaptive,O=C===void 0||C,x=h.roundOffsets,B=x===void 0||x,H={placement:It(a.placement),variation:ht(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:A,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,Ro(Object.assign({},H,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:O,roundOffsets:B})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,Ro(Object.assign({},H,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:B})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})},data:{}};var Sn={passive:!0};const Ei={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(p){var a=p.state,h=p.instance,g=p.options,A=g.scroll,C=A===void 0||A,O=g.resize,x=O===void 0||O,B=lt(a.elements.popper),H=[].concat(a.scrollParents.reference,a.scrollParents.popper);return C&&H.forEach(function(W){W.addEventListener("scroll",h.update,Sn)}),x&&B.addEventListener("resize",h.update,Sn),function(){C&&H.forEach(function(W){W.removeEventListener("scroll",h.update,Sn)}),x&&B.removeEventListener("resize",h.update,Sn)}},data:{}};var kr={left:"right",right:"left",bottom:"top",top:"bottom"};function rn(p){return p.replace(/left|right|bottom|top/g,function(a){return kr[a]})}var So={start:"end",end:"start"};function wi(p){return p.replace(/start|end/g,function(a){return So[a]})}function Ce(p){var a=lt(p);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function gs(p){return Rn(gt(p)).left+Ce(p).scrollLeft}function _s(p){var a=Ht(p),h=a.overflow,g=a.overflowX,A=a.overflowY;return/auto|scroll|overlay|hidden/.test(h+A+g)}function ys(p){return["html","body","#document"].indexOf(Tt(p))>=0?p.ownerDocument.body:De(p)&&_s(p)?p:ys(At(p))}function Jn(p,a){var h;a===void 0&&(a=[]);var g=ys(p),A=g===((h=p.ownerDocument)==null?void 0:h.body),C=lt(g),O=A?[C].concat(C.visualViewport||[],_s(g)?g:[]):g,x=a.concat(O);return A?x:x.concat(Jn(At(O)))}function Ti(p){return Object.assign({},p,{left:p.x,top:p.y,right:p.x+p.width,bottom:p.y+p.height})}function Dr(p,a,h){return a===Sr?Ti(function(g,A){var C=lt(g),O=gt(g),x=C.visualViewport,B=O.clientWidth,H=O.clientHeight,W=0,j=0;if(x){B=x.width,H=x.height;var oe=To();(oe||!oe&&A==="fixed")&&(W=x.offsetLeft,j=x.offsetTop)}return{width:B,height:H,x:W+gs(g),y:j}}(p,h)):ut(a)?function(g,A){var C=Rn(g,!1,A==="fixed");return C.top=C.top+g.clientTop,C.left=C.left+g.clientLeft,C.bottom=C.top+g.clientHeight,C.right=C.left+g.clientWidth,C.width=g.clientWidth,C.height=g.clientHeight,C.x=C.left,C.y=C.top,C}(a,h):Ti(function(g){var A,C=gt(g),O=Ce(g),x=(A=g.ownerDocument)==null?void 0:A.body,B=ge(C.scrollWidth,C.clientWidth,x?x.scrollWidth:0,x?x.clientWidth:0),H=ge(C.scrollHeight,C.clientHeight,x?x.scrollHeight:0,x?x.clientHeight:0),W=-O.scrollLeft+gs(g),j=-O.scrollTop;return Ht(x||C).direction==="rtl"&&(W+=ge(C.clientWidth,x?x.clientWidth:0)-B),{width:B,height:H,x:W,y:j}}(gt(p)))}function vs(p){var a,h=p.reference,g=p.element,A=p.placement,C=A?It(A):null,O=A?ht(A):null,x=h.x+h.width/2-g.width/2,B=h.y+h.height/2-g.height/2;switch(C){case He:a={x,y:h.y-g.height};break;case nt:a={x,y:h.y+h.height};break;case Je:a={x:h.x+h.width,y:B};break;case $e:a={x:h.x-g.width,y:B};break;default:a={x:h.x,y:h.y}}var H=C?vi(C):null;if(H!=null){var W=H==="y"?"height":"width";switch(O){case An:a[H]=a[H]-(h[W]/2-g[W]/2);break;case qt:a[H]=a[H]+(h[W]/2-g[W]/2)}}return a}function rt(p,a){a===void 0&&(a={});var h=a,g=h.placement,A=g===void 0?p.placement:g,C=h.strategy,O=C===void 0?p.strategy:C,x=h.boundary,B=x===void 0?os:x,H=h.rootBoundary,W=H===void 0?Sr:H,j=h.elementContext,oe=j===void 0?Pt:j,X=h.altBoundary,re=X!==void 0&&X,te=h.padding,ie=te===void 0?0:te,Te=Ao(typeof ie!="number"?ie:bo(ie,In)),Re=oe===Pt?nn:Pt,ue=p.rects.popper,_e=p.elements[re?Re:oe],ae=function(ft,Nt,Vt,Oe){var on=Nt==="clippingParents"?function(be){var pt=Jn(At(be)),Lt=["absolute","fixed"].indexOf(Ht(be).position)>=0&&De(be)?Yn(be):be;return ut(Lt)?pt.filter(function(rr){return ut(rr)&&Io(rr,Lt)&&Tt(rr)!=="body"}):[]}(ft):[].concat(Nt),an=[].concat(on,[Vt]),Pi=an[0],Ge=an.reduce(function(be,pt){var Lt=Dr(ft,pt,Oe);return be.top=ge(Lt.top,be.top),be.right=bn(Lt.right,be.right),be.bottom=bn(Lt.bottom,be.bottom),be.left=ge(Lt.left,be.left),be},Dr(ft,Pi,Oe));return Ge.width=Ge.right-Ge.left,Ge.height=Ge.bottom-Ge.top,Ge.x=Ge.left,Ge.y=Ge.top,Ge}(ut(_e)?_e:_e.contextElement||gt(p.elements.popper),B,W,O),fe=Rn(p.elements.reference),Ee=vs({reference:fe,element:ue,placement:A}),Ie=Ti(Object.assign({},ue,Ee)),we=oe===Pt?Ie:fe,Ve={top:ae.top-we.top+Te.top,bottom:we.bottom-ae.bottom+Te.bottom,left:ae.left-we.left+Te.left,right:we.right-ae.right+Te.right},bt=p.modifiersData.offset;if(oe===Pt&&bt){var Wt=bt[A];Object.keys(Ve).forEach(function(ft){var Nt=[Je,nt].indexOf(ft)>=0?1:-1,Vt=[He,nt].indexOf(ft)>=0?"y":"x";Ve[ft]+=Wt[Vt]*Nt})}return Ve}function Po(p,a){a===void 0&&(a={});var h=a,g=h.placement,A=h.boundary,C=h.rootBoundary,O=h.padding,x=h.flipVariations,B=h.allowedAutoPlacements,H=B===void 0?as:B,W=ht(g),j=W?x?Pr:Pr.filter(function(re){return ht(re)===W}):In,oe=j.filter(function(re){return H.indexOf(re)>=0});oe.length===0&&(oe=j);var X=oe.reduce(function(re,te){return re[te]=rt(p,{placement:te,boundary:A,rootBoundary:C,padding:O})[It(te)],re},{});return Object.keys(X).sort(function(re,te){return X[re]-X[te]})}const ko={name:"flip",enabled:!0,phase:"main",fn:function(p){var a=p.state,h=p.options,g=p.name;if(!a.modifiersData[g]._skip){for(var A=h.mainAxis,C=A===void 0||A,O=h.altAxis,x=O===void 0||O,B=h.fallbackPlacements,H=h.padding,W=h.boundary,j=h.rootBoundary,oe=h.altBoundary,X=h.flipVariations,re=X===void 0||X,te=h.allowedAutoPlacements,ie=a.options.placement,Te=It(ie),Re=B||(Te!==ie&&re?function(be){if(It(be)===Rr)return[];var pt=rn(be);return[wi(be),pt,wi(pt)]}(ie):[rn(ie)]),ue=[ie].concat(Re).reduce(function(be,pt){return be.concat(It(pt)===Rr?Po(a,{placement:pt,boundary:W,rootBoundary:j,padding:H,flipVariations:re,allowedAutoPlacements:te}):pt)},[]),_e=a.rects.reference,ae=a.rects.popper,fe=new Map,Ee=!0,Ie=ue[0],we=0;we<ue.length;we++){var Ve=ue[we],bt=It(Ve),Wt=ht(Ve)===An,ft=[He,nt].indexOf(bt)>=0,Nt=ft?"width":"height",Vt=rt(a,{placement:Ve,boundary:W,rootBoundary:j,altBoundary:oe,padding:H}),Oe=ft?Wt?Je:$e:Wt?nt:He;_e[Nt]>ae[Nt]&&(Oe=rn(Oe));var on=rn(Oe),an=[];if(C&&an.push(Vt[bt]<=0),x&&an.push(Vt[Oe]<=0,Vt[on]<=0),an.every(function(be){return be})){Ie=Ve,Ee=!1;break}fe.set(Ve,an)}if(Ee)for(var Pi=function(be){var pt=ue.find(function(Lt){var rr=fe.get(Lt);if(rr)return rr.slice(0,be).every(function(Bo){return Bo})});if(pt)return Ie=pt,"break"},Ge=re?3:1;Ge>0&&Pi(Ge)!=="break";Ge--);a.placement!==Ie&&(a.modifiersData[g]._skip=!0,a.placement=Ie,a.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Zn(p,a,h){return h===void 0&&(h={x:0,y:0}),{top:p.top-a.height-h.y,right:p.right-a.width+h.x,bottom:p.bottom-a.height+h.y,left:p.left-a.width-h.x}}function Es(p){return[He,Je,nt,$e].some(function(a){return p[a]>=0})}const Ii={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(p){var a=p.state,h=p.name,g=a.rects.reference,A=a.rects.popper,C=a.modifiersData.preventOverflow,O=rt(a,{elementContext:"reference"}),x=rt(a,{altBoundary:!0}),B=Zn(O,g),H=Zn(x,A,C),W=Es(B),j=Es(H);a.modifiersData[h]={referenceClippingOffsets:B,popperEscapeOffsets:H,isReferenceHidden:W,hasPopperEscaped:j},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":W,"data-popper-escaped":j})}},Or={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(p){var a=p.state,h=p.options,g=p.name,A=h.offset,C=A===void 0?[0,0]:A,O=as.reduce(function(W,j){return W[j]=function(oe,X,re){var te=It(oe),ie=[$e,He].indexOf(te)>=0?-1:1,Te=typeof re=="function"?re(Object.assign({},X,{placement:oe})):re,Re=Te[0],ue=Te[1];return Re=Re||0,ue=(ue||0)*ie,[$e,Je].indexOf(te)>=0?{x:ue,y:Re}:{x:Re,y:ue}}(j,a.rects,C),W},{}),x=O[a.placement],B=x.x,H=x.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=B,a.modifiersData.popperOffsets.y+=H),a.modifiersData[g]=O}},Ai={name:"popperOffsets",enabled:!0,phase:"read",fn:function(p){var a=p.state,h=p.name;a.modifiersData[h]=vs({reference:a.rects.reference,element:a.rects.popper,placement:a.placement})},data:{}},Nr={name:"preventOverflow",enabled:!0,phase:"main",fn:function(p){var a=p.state,h=p.options,g=p.name,A=h.mainAxis,C=A===void 0||A,O=h.altAxis,x=O!==void 0&&O,B=h.boundary,H=h.rootBoundary,W=h.altBoundary,j=h.padding,oe=h.tether,X=oe===void 0||oe,re=h.tetherOffset,te=re===void 0?0:re,ie=rt(a,{boundary:B,rootBoundary:H,padding:j,altBoundary:W}),Te=It(a.placement),Re=ht(a.placement),ue=!Re,_e=vi(Te),ae=_e==="x"?"y":"x",fe=a.modifiersData.popperOffsets,Ee=a.rects.reference,Ie=a.rects.popper,we=typeof te=="function"?te(Object.assign({},a.rects,{placement:a.placement})):te,Ve=typeof we=="number"?{mainAxis:we,altAxis:we}:Object.assign({mainAxis:0,altAxis:0},we),bt=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,Wt={x:0,y:0};if(fe){if(C){var ft,Nt=_e==="y"?He:$e,Vt=_e==="y"?nt:Je,Oe=_e==="y"?"height":"width",on=fe[_e],an=on+ie[Nt],Pi=on-ie[Vt],Ge=X?-Ie[Oe]/2:0,be=Re===An?Ee[Oe]:Ie[Oe],pt=Re===An?-Ie[Oe]:-Ee[Oe],Lt=a.elements.arrow,rr=X&&Lt?ps(Lt):{width:0,height:0},Bo=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Lu=Bo[Nt],xu=Bo[Vt],jo=Dt(0,Ee[Oe],rr[Oe]),zg=ue?Ee[Oe]/2-Ge-jo-Lu-Ve.mainAxis:be-jo-Lu-Ve.mainAxis,Wg=ue?-Ee[Oe]/2+Ge+jo+xu+Ve.mainAxis:pt+jo+xu+Ve.mainAxis,_c=a.elements.arrow&&Yn(a.elements.arrow),Kg=_c?_e==="y"?_c.clientTop||0:_c.clientLeft||0:0,Mu=(ft=bt==null?void 0:bt[_e])!=null?ft:0,Gg=on+Wg-Mu,Fu=Dt(X?bn(an,on+zg-Mu-Kg):an,on,X?ge(Pi,Gg):Pi);fe[_e]=Fu,Wt[_e]=Fu-on}if(x){var Uu,Qg=_e==="x"?He:$e,Yg=_e==="x"?nt:Je,jr=fe[ae],qo=ae==="y"?"height":"width",$u=jr+ie[Qg],Bu=jr-ie[Yg],yc=[He,$e].indexOf(Te)!==-1,ju=(Uu=bt==null?void 0:bt[ae])!=null?Uu:0,qu=yc?$u:jr-Ee[qo]-Ie[qo]-ju+Ve.altAxis,Hu=yc?jr+Ee[qo]+Ie[qo]-ju-Ve.altAxis:Bu,zu=X&&yc?function(Xg,Jg,vc){var Wu=Dt(Xg,Jg,vc);return Wu>vc?vc:Wu}(qu,jr,Hu):Dt(X?qu:$u,jr,X?Hu:Bu);fe[ae]=zu,Wt[ae]=zu-jr}a.modifiersData[g]=Wt}},requiresIfExists:["offset"]};function oc(p,a,h){h===void 0&&(h=!1);var g,A,C=De(a),O=De(a)&&function(j){var oe=j.getBoundingClientRect(),X=kt(oe.width)/j.offsetWidth||1,re=kt(oe.height)/j.offsetHeight||1;return X!==1||re!==1}(a),x=gt(a),B=Rn(p,O,h),H={scrollLeft:0,scrollTop:0},W={x:0,y:0};return(C||!C&&!h)&&((Tt(a)!=="body"||_s(x))&&(H=(g=a)!==lt(g)&&De(g)?{scrollLeft:(A=g).scrollLeft,scrollTop:A.scrollTop}:Ce(g)),De(a)?((W=Rn(a,!0)).x+=a.clientLeft,W.y+=a.clientTop):x&&(W.x=gs(x))),{x:B.left+H.scrollLeft-W.x,y:B.top+H.scrollTop-W.y,width:B.width,height:B.height}}function Do(p){var a=new Map,h=new Set,g=[];function A(C){h.add(C.name),[].concat(C.requires||[],C.requiresIfExists||[]).forEach(function(O){if(!h.has(O)){var x=a.get(O);x&&A(x)}}),g.push(C)}return p.forEach(function(C){a.set(C.name,C)}),p.forEach(function(C){h.has(C.name)||A(C)}),g}var er={placement:"bottom",modifiers:[],strategy:"absolute"};function ws(){for(var p=arguments.length,a=new Array(p),h=0;h<p;h++)a[h]=arguments[h];return!a.some(function(g){return!(g&&typeof g.getBoundingClientRect=="function")})}function Vr(p){p===void 0&&(p={});var a=p,h=a.defaultModifiers,g=h===void 0?[]:h,A=a.defaultOptions,C=A===void 0?er:A;return function(O,x,B){B===void 0&&(B=C);var H,W,j={placement:"bottom",orderedModifiers:[],options:Object.assign({},er,C),modifiersData:{},elements:{reference:O,popper:x},attributes:{},styles:{}},oe=[],X=!1,re={state:j,setOptions:function(ie){var Te=typeof ie=="function"?ie(j.options):ie;te(),j.options=Object.assign({},C,j.options,Te),j.scrollParents={reference:ut(O)?Jn(O):O.contextElement?Jn(O.contextElement):[],popper:Jn(x)};var Re,ue,_e=function(ae){var fe=Do(ae);return fs.reduce(function(Ee,Ie){return Ee.concat(fe.filter(function(we){return we.phase===Ie}))},[])}((Re=[].concat(g,j.options.modifiers),ue=Re.reduce(function(ae,fe){var Ee=ae[fe.name];return ae[fe.name]=Ee?Object.assign({},Ee,fe,{options:Object.assign({},Ee.options,fe.options),data:Object.assign({},Ee.data,fe.data)}):fe,ae},{}),Object.keys(ue).map(function(ae){return ue[ae]})));return j.orderedModifiers=_e.filter(function(ae){return ae.enabled}),j.orderedModifiers.forEach(function(ae){var fe=ae.name,Ee=ae.options,Ie=Ee===void 0?{}:Ee,we=ae.effect;if(typeof we=="function"){var Ve=we({state:j,name:fe,instance:re,options:Ie});oe.push(Ve||function(){})}}),re.update()},forceUpdate:function(){if(!X){var ie=j.elements,Te=ie.reference,Re=ie.popper;if(ws(Te,Re)){j.rects={reference:oc(Te,Yn(Re),j.options.strategy==="fixed"),popper:ps(Re)},j.reset=!1,j.placement=j.options.placement,j.orderedModifiers.forEach(function(we){return j.modifiersData[we.name]=Object.assign({},we.data)});for(var ue=0;ue<j.orderedModifiers.length;ue++)if(j.reset!==!0){var _e=j.orderedModifiers[ue],ae=_e.fn,fe=_e.options,Ee=fe===void 0?{}:fe,Ie=_e.name;typeof ae=="function"&&(j=ae({state:j,options:Ee,name:Ie,instance:re})||j)}else j.reset=!1,ue=-1}}},update:(H=function(){return new Promise(function(ie){re.forceUpdate(),ie(j)})},function(){return W||(W=new Promise(function(ie){Promise.resolve().then(function(){W=void 0,ie(H())})})),W}),destroy:function(){te(),X=!0}};if(!ws(O,x))return re;function te(){oe.forEach(function(ie){return ie()}),oe=[]}return re.setOptions(B).then(function(ie){!X&&B.onFirstUpdate&&B.onFirstUpdate(ie)}),re}}var Ts=Vr(),Is=Vr({defaultModifiers:[Ei,Ai,Xn,Qn]}),bi=Vr({defaultModifiers:[Ei,Ai,Xn,Qn,Or,ko,Nr,Co,Ii]});const Lr=Object.freeze(Object.defineProperty({__proto__:null,afterMain:hs,afterRead:us,afterWrite:wo,applyStyles:Qn,arrow:Co,auto:Rr,basePlacements:In,beforeMain:_i,beforeRead:cs,beforeWrite:ds,bottom:nt,clippingParents:os,computeStyles:Xn,createPopper:bi,createPopperBase:Ts,createPopperLite:Is,detectOverflow:rt,end:qt,eventListeners:Ei,flip:ko,hide:Ii,left:$e,main:yi,modifierPhases:fs,offset:Or,placements:as,popper:Pt,popperGenerator:Vr,popperOffsets:Ai,preventOverflow:Nr,read:ls,reference:nn,right:Je,start:An,top:He,variationPlacements:Pr,viewport:Sr,write:Eo},Symbol.toStringTag,{value:"Module"})),As="dropdown",sn=".bs.dropdown",zt=".data-api",Oo="ArrowUp",bs="ArrowDown",No=`hide${sn}`,Vo=`hidden${sn}`,Ci=`show${sn}`,dt=`shown${sn}`,Cs=`click${sn}${zt}`,Rs=`keydown${sn}${zt}`,tr=`keyup${sn}${zt}`,o="show",l='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',f=`${l}.${o}`,_=".dropdown-menu",P=F()?"top-end":"top-start",D=F()?"top-start":"top-end",U=F()?"bottom-end":"bottom-start",ve=F()?"bottom-start":"bottom-end",Be=F()?"left-start":"right-start",pe=F()?"right-start":"left-start",ze={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},We={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ke extends wt{constructor(a,h){super(a,h),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.next(this._element,_)[0]||Q.prev(this._element,_)[0]||Q.findOne(_,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ze}static get DefaultType(){return We}static get NAME(){return As}toggle(){return this._isShown()?this.hide():this.show()}show(){if(y(this._element)||this._isShown())return;const a={relatedTarget:this._element};if(!M.trigger(this._element,Ci,a).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const h of[].concat(...document.body.children))M.on(h,"mouseover",b);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(o),this._element.classList.add(o),M.trigger(this._element,dt,a)}}hide(){if(y(this._element)||!this._isShown())return;const a={relatedTarget:this._element};this._completeHide(a)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(a){if(!M.trigger(this._element,No,a).defaultPrevented){if("ontouchstart"in document.documentElement)for(const h of[].concat(...document.body.children))M.off(h,"mouseover",b);this._popper&&this._popper.destroy(),this._menu.classList.remove(o),this._element.classList.remove(o),this._element.setAttribute("aria-expanded","false"),$t.removeDataAttribute(this._menu,"popper"),M.trigger(this._element,Vo,a),this._element.focus()}}_getConfig(a){if(typeof(a=super._getConfig(a)).reference=="object"&&!u(a.reference)&&typeof a.reference.getBoundingClientRect!="function")throw new TypeError(`${As.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return a}_createPopper(){if(Lr===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let a=this._element;this._config.reference==="parent"?a=this._parent:u(this._config.reference)?a=d(this._config.reference):typeof this._config.reference=="object"&&(a=this._config.reference);const h=this._getPopperConfig();this._popper=bi(a,this._menu,h)}_isShown(){return this._menu.classList.contains(o)}_getPlacement(){const a=this._parent;if(a.classList.contains("dropend"))return Be;if(a.classList.contains("dropstart"))return pe;if(a.classList.contains("dropup-center"))return"top";if(a.classList.contains("dropdown-center"))return"bottom";const h=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return a.classList.contains("dropup")?h?D:P:h?ve:U}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(h=>Number.parseInt(h,10)):typeof a=="function"?h=>a(h,this._element):a}_getPopperConfig(){const a={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&($t.setDataAttribute(this._menu,"popper","static"),a.modifiers=[{name:"applyStyles",enabled:!1}]),{...a,...G(this._config.popperConfig,[void 0,a])}}_selectMenuItem({key:a,target:h}){const g=Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(A=>m(A));g.length&&Ae(g,h,a===bs,!g.includes(h)).focus()}static jQueryInterface(a){return this.each(function(){const h=Ke.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a]()}})}static clearMenus(a){if(a.button===2||a.type==="keyup"&&a.key!=="Tab")return;const h=Q.find(f);for(const g of h){const A=Ke.getInstance(g);if(!A||A._config.autoClose===!1)continue;const C=a.composedPath(),O=C.includes(A._menu);if(C.includes(A._element)||A._config.autoClose==="inside"&&!O||A._config.autoClose==="outside"&&O||A._menu.contains(a.target)&&(a.type==="keyup"&&a.key==="Tab"||/input|select|option|textarea|form/i.test(a.target.tagName)))continue;const x={relatedTarget:A._element};a.type==="click"&&(x.clickEvent=a),A._completeHide(x)}}static dataApiKeydownHandler(a){const h=/input|textarea/i.test(a.target.tagName),g=a.key==="Escape",A=[Oo,bs].includes(a.key);if(!A&&!g||h&&!g)return;a.preventDefault();const C=this.matches(l)?this:Q.prev(this,l)[0]||Q.next(this,l)[0]||Q.findOne(l,a.delegateTarget.parentNode),O=Ke.getOrCreateInstance(C);if(A)return a.stopPropagation(),O.show(),void O._selectMenuItem(a);O._isShown()&&(a.stopPropagation(),O.hide(),C.focus())}}M.on(document,Rs,l,Ke.dataApiKeydownHandler),M.on(document,Rs,_,Ke.dataApiKeydownHandler),M.on(document,Cs,Ke.clearMenus),M.on(document,tr,Ke.clearMenus),M.on(document,Cs,l,function(p){p.preventDefault(),Ke.getOrCreateInstance(this).toggle()}),ee(Ke);const _t="backdrop",xr="show",Ri=`mousedown.bs.${_t}`,Nm={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Vm={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class ou extends Bt{constructor(a){super(),this._config=this._getConfig(a),this._isAppended=!1,this._element=null}static get Default(){return Nm}static get DefaultType(){return Vm}static get NAME(){return _t}show(a){if(!this._config.isVisible)return void G(a);this._append();const h=this._getElement();this._config.isAnimated&&N(h),h.classList.add(xr),this._emulateAnimation(()=>{G(a)})}hide(a){this._config.isVisible?(this._getElement().classList.remove(xr),this._emulateAnimation(()=>{this.dispose(),G(a)})):G(a)}dispose(){this._isAppended&&(M.off(this._element,Ri),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const a=document.createElement("div");a.className=this._config.className,this._config.isAnimated&&a.classList.add("fade"),this._element=a}return this._element}_configAfterMerge(a){return a.rootElement=d(a.rootElement),a}_append(){if(this._isAppended)return;const a=this._getElement();this._config.rootElement.append(a),M.on(a,Ri,()=>{G(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(a){ce(a,this._getElement(),this._config.isAnimated)}}const Lo=".bs.focustrap",Lm=`focusin${Lo}`,xm=`keydown.tab${Lo}`,au="backward",Mm={autofocus:!0,trapElement:null},Fm={autofocus:"boolean",trapElement:"element"};class cu extends Bt{constructor(a){super(),this._config=this._getConfig(a),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Mm}static get DefaultType(){return Fm}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),M.off(document,Lo),M.on(document,Lm,a=>this._handleFocusin(a)),M.on(document,xm,a=>this._handleKeydown(a)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,M.off(document,Lo))}_handleFocusin(a){const{trapElement:h}=this._config;if(a.target===document||a.target===h||h.contains(a.target))return;const g=Q.focusableChildren(h);g.length===0?h.focus():this._lastTabNavDirection===au?g[g.length-1].focus():g[0].focus()}_handleKeydown(a){a.key==="Tab"&&(this._lastTabNavDirection=a.shiftKey?au:"forward")}}const lu=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",uu=".sticky-top",xo="padding-right",hu="margin-right";class ac{constructor(){this._element=document.body}getWidth(){const a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}hide(){const a=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,xo,h=>h+a),this._setElementAttributes(lu,xo,h=>h+a),this._setElementAttributes(uu,hu,h=>h-a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,xo),this._resetElementAttributes(lu,xo),this._resetElementAttributes(uu,hu)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(a,h,g){const A=this.getWidth();this._applyManipulationCallback(a,C=>{if(C!==this._element&&window.innerWidth>C.clientWidth+A)return;this._saveInitialAttribute(C,h);const O=window.getComputedStyle(C).getPropertyValue(h);C.style.setProperty(h,`${g(Number.parseFloat(O))}px`)})}_saveInitialAttribute(a,h){const g=a.style.getPropertyValue(h);g&&$t.setDataAttribute(a,h,g)}_resetElementAttributes(a,h){this._applyManipulationCallback(a,g=>{const A=$t.getDataAttribute(g,h);A!==null?($t.removeDataAttribute(g,h),g.style.setProperty(h,A)):g.style.removeProperty(h)})}_applyManipulationCallback(a,h){if(u(a))h(a);else for(const g of Q.find(a,this._element))h(g)}}const Ot=".bs.modal",Um=`hide${Ot}`,$m=`hidePrevented${Ot}`,du=`hidden${Ot}`,fu=`show${Ot}`,Bm=`shown${Ot}`,jm=`resize${Ot}`,qm=`click.dismiss${Ot}`,Hm=`mousedown.dismiss${Ot}`,zm=`keydown.dismiss${Ot}`,Wm=`click${Ot}.data-api`,pu="modal-open",mu="show",cc="modal-static",Km={backdrop:!0,focus:!0,keyboard:!0},Gm={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Mr extends wt{constructor(a,h){super(a,h),this._dialog=Q.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ac,this._addEventListeners()}static get Default(){return Km}static get DefaultType(){return Gm}static get NAME(){return"modal"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||this._isTransitioning||M.trigger(this._element,fu,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(pu),this._adjustDialog(),this._backdrop.show(()=>this._showElement(a)))}hide(){this._isShown&&!this._isTransitioning&&(M.trigger(this._element,Um).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(mu),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){M.off(window,Ot),M.off(this._dialog,Ot),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ou({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new cu({trapElement:this._element})}_showElement(a){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const h=Q.findOne(".modal-body",this._dialog);h&&(h.scrollTop=0),N(this._element),this._element.classList.add(mu),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,M.trigger(this._element,Bm,{relatedTarget:a})},this._dialog,this._isAnimated())}_addEventListeners(){M.on(this._element,zm,a=>{a.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),M.on(window,jm,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),M.on(this._element,Hm,a=>{M.one(this._element,qm,h=>{this._element===a.target&&this._element===h.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(pu),this._resetAdjustments(),this._scrollBar.reset(),M.trigger(this._element,du)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(M.trigger(this._element,$m).defaultPrevented)return;const a=this._element.scrollHeight>document.documentElement.clientHeight,h=this._element.style.overflowY;h==="hidden"||this._element.classList.contains(cc)||(a||(this._element.style.overflowY="hidden"),this._element.classList.add(cc),this._queueCallback(()=>{this._element.classList.remove(cc),this._queueCallback(()=>{this._element.style.overflowY=h},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const a=this._element.scrollHeight>document.documentElement.clientHeight,h=this._scrollBar.getWidth(),g=h>0;if(g&&!a){const A=F()?"paddingLeft":"paddingRight";this._element.style[A]=`${h}px`}if(!g&&a){const A=F()?"paddingRight":"paddingLeft";this._element.style[A]=`${h}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(a,h){return this.each(function(){const g=Mr.getOrCreateInstance(this,a);if(typeof a=="string"){if(g[a]===void 0)throw new TypeError(`No method named "${a}"`);g[a](h)}})}}M.on(document,Wm,'[data-bs-toggle="modal"]',function(p){const a=Q.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&p.preventDefault(),M.one(a,fu,g=>{g.defaultPrevented||M.one(a,du,()=>{m(this)&&this.focus()})});const h=Q.findOne(".modal.show");h&&Mr.getInstance(h).hide(),Mr.getOrCreateInstance(a).toggle(this)}),oi(Mr),ee(Mr);const Pn=".bs.offcanvas",gu=".data-api",Qm=`load${Pn}${gu}`,_u="show",yu="showing",vu="hiding",Eu=".offcanvas.show",Ym=`show${Pn}`,Xm=`shown${Pn}`,Jm=`hide${Pn}`,wu=`hidePrevented${Pn}`,Tu=`hidden${Pn}`,Zm=`resize${Pn}`,eg=`click${Pn}${gu}`,tg=`keydown.dismiss${Pn}`,ng={backdrop:!0,keyboard:!0,scroll:!1},rg={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class kn extends wt{constructor(a,h){super(a,h),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return ng}static get DefaultType(){return rg}static get NAME(){return"offcanvas"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||M.trigger(this._element,Ym,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new ac().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(yu),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(_u),this._element.classList.remove(yu),M.trigger(this._element,Xm,{relatedTarget:a})},this._element,!0))}hide(){this._isShown&&(M.trigger(this._element,Jm).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(vu),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(_u,vu),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ac().reset(),M.trigger(this._element,Tu)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const a=!!this._config.backdrop;return new ou({className:"offcanvas-backdrop",isVisible:a,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:a?()=>{this._config.backdrop!=="static"?this.hide():M.trigger(this._element,wu)}:null})}_initializeFocusTrap(){return new cu({trapElement:this._element})}_addEventListeners(){M.on(this._element,tg,a=>{a.key==="Escape"&&(this._config.keyboard?this.hide():M.trigger(this._element,wu))})}static jQueryInterface(a){return this.each(function(){const h=kn.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a](this)}})}}M.on(document,eg,'[data-bs-toggle="offcanvas"]',function(p){const a=Q.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&p.preventDefault(),y(this))return;M.one(a,Tu,()=>{m(this)&&this.focus()});const h=Q.findOne(Eu);h&&h!==a&&kn.getInstance(h).hide(),kn.getOrCreateInstance(a).toggle(this)}),M.on(window,Qm,()=>{for(const p of Q.find(Eu))kn.getOrCreateInstance(p).show()}),M.on(window,Zm,()=>{for(const p of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(p).position!=="fixed"&&kn.getOrCreateInstance(p).hide()}),oi(kn),ee(kn);const Iu={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},ig=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),sg=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,og=(p,a)=>{const h=p.nodeName.toLowerCase();return a.includes(h)?!ig.has(h)||!!sg.test(p.nodeValue):a.filter(g=>g instanceof RegExp).some(g=>g.test(h))},ag={allowList:Iu,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},cg={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},lg={entry:"(string|element|function|null)",selector:"(string|element)"};class ug extends Bt{constructor(a){super(),this._config=this._getConfig(a)}static get Default(){return ag}static get DefaultType(){return cg}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(a=>this._resolvePossibleFunction(a)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(a){return this._checkContent(a),this._config.content={...this._config.content,...a},this}toHtml(){const a=document.createElement("div");a.innerHTML=this._maybeSanitize(this._config.template);for(const[A,C]of Object.entries(this._config.content))this._setContent(a,C,A);const h=a.children[0],g=this._resolvePossibleFunction(this._config.extraClass);return g&&h.classList.add(...g.split(" ")),h}_typeCheckConfig(a){super._typeCheckConfig(a),this._checkContent(a.content)}_checkContent(a){for(const[h,g]of Object.entries(a))super._typeCheckConfig({selector:h,entry:g},lg)}_setContent(a,h,g){const A=Q.findOne(g,a);A&&((h=this._resolvePossibleFunction(h))?u(h)?this._putElementInTemplate(d(h),A):this._config.html?A.innerHTML=this._maybeSanitize(h):A.textContent=h:A.remove())}_maybeSanitize(a){return this._config.sanitize?function(h,g,A){if(!h.length)return h;if(A&&typeof A=="function")return A(h);const C=new window.DOMParser().parseFromString(h,"text/html"),O=[].concat(...C.body.querySelectorAll("*"));for(const x of O){const B=x.nodeName.toLowerCase();if(!Object.keys(g).includes(B)){x.remove();continue}const H=[].concat(...x.attributes),W=[].concat(g["*"]||[],g[B]||[]);for(const j of H)og(j,W)||x.removeAttribute(j.nodeName)}return C.body.innerHTML}(a,this._config.allowList,this._config.sanitizeFn):a}_resolvePossibleFunction(a){return G(a,[void 0,this])}_putElementInTemplate(a,h){if(this._config.html)return h.innerHTML="",void h.append(a);h.textContent=a.textContent}}const hg=new Set(["sanitize","allowList","sanitizeFn"]),lc="fade",Mo="show",dg=".tooltip-inner",Au=".modal",bu="hide.bs.modal",Ss="hover",uc="focus",fg={AUTO:"auto",TOP:"top",RIGHT:F()?"left":"right",BOTTOM:"bottom",LEFT:F()?"right":"left"},pg={allowList:Iu,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},mg={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Fr extends wt{constructor(a,h){if(Lr===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(a,h),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return pg}static get DefaultType(){return mg}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),M.off(this._element.closest(Au),bu,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const a=M.trigger(this._element,this.constructor.eventName("show")),h=(T(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(a.defaultPrevented||!h)return;this._disposePopper();const g=this._getTipElement();this._element.setAttribute("aria-describedby",g.getAttribute("id"));const{container:A}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(A.append(g),M.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(g),g.classList.add(Mo),"ontouchstart"in document.documentElement)for(const C of[].concat(...document.body.children))M.on(C,"mouseover",b);this._queueCallback(()=>{M.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!M.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Mo),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))M.off(a,"mouseover",b);this._activeTrigger.click=!1,this._activeTrigger[uc]=!1,this._activeTrigger[Ss]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),M.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(a){const h=this._getTemplateFactory(a).toHtml();if(!h)return null;h.classList.remove(lc,Mo),h.classList.add(`bs-${this.constructor.NAME}-auto`);const g=(A=>{do A+=Math.floor(1e6*Math.random());while(document.getElementById(A));return A})(this.constructor.NAME).toString();return h.setAttribute("id",g),this._isAnimated()&&h.classList.add(lc),h}setContent(a){this._newContent=a,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(a){return this._templateFactory?this._templateFactory.changeContent(a):this._templateFactory=new ug({...this._config,content:a,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[dg]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(a){return this.constructor.getOrCreateInstance(a.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(lc)}_isShown(){return this.tip&&this.tip.classList.contains(Mo)}_createPopper(a){const h=G(this._config.placement,[this,a,this._element]),g=fg[h.toUpperCase()];return bi(this._element,a,this._getPopperConfig(g))}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(h=>Number.parseInt(h,10)):typeof a=="function"?h=>a(h,this._element):a}_resolvePossibleFunction(a){return G(a,[this._element,this._element])}_getPopperConfig(a){const h={placement:a,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:g=>{this._getTipElement().setAttribute("data-popper-placement",g.state.placement)}}]};return{...h,...G(this._config.popperConfig,[void 0,h])}}_setListeners(){const a=this._config.trigger.split(" ");for(const h of a)if(h==="click")M.on(this._element,this.constructor.eventName("click"),this._config.selector,g=>{this._initializeOnDelegatedTarget(g).toggle()});else if(h!=="manual"){const g=h===Ss?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),A=h===Ss?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");M.on(this._element,g,this._config.selector,C=>{const O=this._initializeOnDelegatedTarget(C);O._activeTrigger[C.type==="focusin"?uc:Ss]=!0,O._enter()}),M.on(this._element,A,this._config.selector,C=>{const O=this._initializeOnDelegatedTarget(C);O._activeTrigger[C.type==="focusout"?uc:Ss]=O._element.contains(C.relatedTarget),O._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},M.on(this._element.closest(Au),bu,this._hideModalHandler)}_fixTitle(){const a=this._element.getAttribute("title");a&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",a),this._element.setAttribute("data-bs-original-title",a),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(a,h){clearTimeout(this._timeout),this._timeout=setTimeout(a,h)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(a){const h=$t.getDataAttributes(this._element);for(const g of Object.keys(h))hg.has(g)&&delete h[g];return a={...h,...typeof a=="object"&&a?a:{}},a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a.container=a.container===!1?document.body:d(a.container),typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),typeof a.title=="number"&&(a.title=a.title.toString()),typeof a.content=="number"&&(a.content=a.content.toString()),a}_getDelegateConfig(){const a={};for(const[h,g]of Object.entries(this._config))this.constructor.Default[h]!==g&&(a[h]=g);return a.selector=!1,a.trigger="manual",a}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(a){return this.each(function(){const h=Fr.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a]()}})}}ee(Fr);const gg=".popover-header",_g=".popover-body",yg={...Fr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},vg={...Fr.DefaultType,content:"(null|string|element|function)"};class Fo extends Fr{static get Default(){return yg}static get DefaultType(){return vg}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[gg]:this._getTitle(),[_g]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(a){return this.each(function(){const h=Fo.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a]()}})}}ee(Fo);const hc=".bs.scrollspy",Eg=`activate${hc}`,Cu=`click${hc}`,wg=`load${hc}.data-api`,Si="active",dc="[href]",Ru=".nav-link",Tg=`${Ru}, .nav-item > ${Ru}, .list-group-item`,Ig={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ag={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ps extends wt{constructor(a,h){super(a,h),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Ig}static get DefaultType(){return Ag}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const a of this._observableSections.values())this._observer.observe(a)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(a){return a.target=d(a.target)||document.body,a.rootMargin=a.offset?`${a.offset}px 0px -30%`:a.rootMargin,typeof a.threshold=="string"&&(a.threshold=a.threshold.split(",").map(h=>Number.parseFloat(h))),a}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(M.off(this._config.target,Cu),M.on(this._config.target,Cu,dc,a=>{const h=this._observableSections.get(a.target.hash);if(h){a.preventDefault();const g=this._rootElement||window,A=h.offsetTop-this._element.offsetTop;if(g.scrollTo)return void g.scrollTo({top:A,behavior:"smooth"});g.scrollTop=A}}))}_getNewObserver(){const a={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(h=>this._observerCallback(h),a)}_observerCallback(a){const h=O=>this._targetLinks.get(`#${O.target.id}`),g=O=>{this._previousScrollData.visibleEntryTop=O.target.offsetTop,this._process(h(O))},A=(this._rootElement||document.documentElement).scrollTop,C=A>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=A;for(const O of a){if(!O.isIntersecting){this._activeTarget=null,this._clearActiveClass(h(O));continue}const x=O.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(C&&x){if(g(O),!A)return}else C||x||g(O)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const a=Q.find(dc,this._config.target);for(const h of a){if(!h.hash||y(h))continue;const g=Q.findOne(decodeURI(h.hash),this._element);m(g)&&(this._targetLinks.set(decodeURI(h.hash),h),this._observableSections.set(h.hash,g))}}_process(a){this._activeTarget!==a&&(this._clearActiveClass(this._config.target),this._activeTarget=a,a.classList.add(Si),this._activateParents(a),M.trigger(this._element,Eg,{relatedTarget:a}))}_activateParents(a){if(a.classList.contains("dropdown-item"))Q.findOne(".dropdown-toggle",a.closest(".dropdown")).classList.add(Si);else for(const h of Q.parents(a,".nav, .list-group"))for(const g of Q.prev(h,Tg))g.classList.add(Si)}_clearActiveClass(a){a.classList.remove(Si);const h=Q.find(`${dc}.${Si}`,a);for(const g of h)g.classList.remove(Si)}static jQueryInterface(a){return this.each(function(){const h=Ps.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a]()}})}}M.on(window,wg,()=>{for(const p of Q.find('[data-bs-spy="scroll"]'))Ps.getOrCreateInstance(p)}),ee(Ps);const Ur=".bs.tab",bg=`hide${Ur}`,Cg=`hidden${Ur}`,Rg=`show${Ur}`,Sg=`shown${Ur}`,Pg=`click${Ur}`,kg=`keydown${Ur}`,Dg=`load${Ur}`,Og="ArrowLeft",Su="ArrowRight",Ng="ArrowUp",Pu="ArrowDown",fc="Home",ku="End",$r="active",Du="fade",pc="show",Ou=".dropdown-toggle",mc=`:not(${Ou})`,Nu='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',gc=`.nav-link${mc}, .list-group-item${mc}, [role="tab"]${mc}, ${Nu}`,Vg=`.${$r}[data-bs-toggle="tab"], .${$r}[data-bs-toggle="pill"], .${$r}[data-bs-toggle="list"]`;class Br extends wt{constructor(a){super(a),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),M.on(this._element,kg,h=>this._keydown(h)))}static get NAME(){return"tab"}show(){const a=this._element;if(this._elemIsActive(a))return;const h=this._getActiveElem(),g=h?M.trigger(h,bg,{relatedTarget:a}):null;M.trigger(a,Rg,{relatedTarget:h}).defaultPrevented||g&&g.defaultPrevented||(this._deactivate(h,a),this._activate(a,h))}_activate(a,h){a&&(a.classList.add($r),this._activate(Q.getElementFromSelector(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.removeAttribute("tabindex"),a.setAttribute("aria-selected",!0),this._toggleDropDown(a,!0),M.trigger(a,Sg,{relatedTarget:h})):a.classList.add(pc)},a,a.classList.contains(Du)))}_deactivate(a,h){a&&(a.classList.remove($r),a.blur(),this._deactivate(Q.getElementFromSelector(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.setAttribute("aria-selected",!1),a.setAttribute("tabindex","-1"),this._toggleDropDown(a,!1),M.trigger(a,Cg,{relatedTarget:h})):a.classList.remove(pc)},a,a.classList.contains(Du)))}_keydown(a){if(![Og,Su,Ng,Pu,fc,ku].includes(a.key))return;a.stopPropagation(),a.preventDefault();const h=this._getChildren().filter(A=>!y(A));let g;if([fc,ku].includes(a.key))g=h[a.key===fc?0:h.length-1];else{const A=[Su,Pu].includes(a.key);g=Ae(h,a.target,A,!0)}g&&(g.focus({preventScroll:!0}),Br.getOrCreateInstance(g).show())}_getChildren(){return Q.find(gc,this._parent)}_getActiveElem(){return this._getChildren().find(a=>this._elemIsActive(a))||null}_setInitialAttributes(a,h){this._setAttributeIfNotExists(a,"role","tablist");for(const g of h)this._setInitialAttributesOnChild(g)}_setInitialAttributesOnChild(a){a=this._getInnerElement(a);const h=this._elemIsActive(a),g=this._getOuterElement(a);a.setAttribute("aria-selected",h),g!==a&&this._setAttributeIfNotExists(g,"role","presentation"),h||a.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(a,"role","tab"),this._setInitialAttributesOnTargetPanel(a)}_setInitialAttributesOnTargetPanel(a){const h=Q.getElementFromSelector(a);h&&(this._setAttributeIfNotExists(h,"role","tabpanel"),a.id&&this._setAttributeIfNotExists(h,"aria-labelledby",`${a.id}`))}_toggleDropDown(a,h){const g=this._getOuterElement(a);if(!g.classList.contains("dropdown"))return;const A=(C,O)=>{const x=Q.findOne(C,g);x&&x.classList.toggle(O,h)};A(Ou,$r),A(".dropdown-menu",pc),g.setAttribute("aria-expanded",h)}_setAttributeIfNotExists(a,h,g){a.hasAttribute(h)||a.setAttribute(h,g)}_elemIsActive(a){return a.classList.contains($r)}_getInnerElement(a){return a.matches(gc)?a:Q.findOne(gc,a)}_getOuterElement(a){return a.closest(".nav-item, .list-group-item")||a}static jQueryInterface(a){return this.each(function(){const h=Br.getOrCreateInstance(this);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a]()}})}}M.on(document,Pg,Nu,function(p){["A","AREA"].includes(this.tagName)&&p.preventDefault(),y(this)||Br.getOrCreateInstance(this).show()}),M.on(window,Dg,()=>{for(const p of Q.find(Vg))Br.getOrCreateInstance(p)}),ee(Br);const nr=".bs.toast",Lg=`mouseover${nr}`,xg=`mouseout${nr}`,Mg=`focusin${nr}`,Fg=`focusout${nr}`,Ug=`hide${nr}`,$g=`hidden${nr}`,Bg=`show${nr}`,jg=`shown${nr}`,Vu="hide",Uo="show",$o="showing",qg={animation:"boolean",autohide:"boolean",delay:"number"},Hg={animation:!0,autohide:!0,delay:5e3};class ks extends wt{constructor(a,h){super(a,h),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Hg}static get DefaultType(){return qg}static get NAME(){return"toast"}show(){M.trigger(this._element,Bg).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Vu),N(this._element),this._element.classList.add(Uo,$o),this._queueCallback(()=>{this._element.classList.remove($o),M.trigger(this._element,jg),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(M.trigger(this._element,Ug).defaultPrevented||(this._element.classList.add($o),this._queueCallback(()=>{this._element.classList.add(Vu),this._element.classList.remove($o,Uo),M.trigger(this._element,$g)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Uo),super.dispose()}isShown(){return this._element.classList.contains(Uo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(a,h){switch(a.type){case"mouseover":case"mouseout":this._hasMouseInteraction=h;break;case"focusin":case"focusout":this._hasKeyboardInteraction=h}if(h)return void this._clearTimeout();const g=a.relatedTarget;this._element===g||this._element.contains(g)||this._maybeScheduleHide()}_setListeners(){M.on(this._element,Lg,a=>this._onInteraction(a,!0)),M.on(this._element,xg,a=>this._onInteraction(a,!1)),M.on(this._element,Mg,a=>this._onInteraction(a,!0)),M.on(this._element,Fg,a=>this._onInteraction(a,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(a){return this.each(function(){const h=ks.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a](this)}})}}return oi(ks),ee(ks),{Alert:yn,Button:vn,Carousel:Tn,Collapse:ct,Dropdown:Ke,Modal:Mr,Offcanvas:kn,Popover:Fo,ScrollSpy:Ps,Tab:Br,Toast:ks,Tooltip:Fr}})}(Yo)),Yo.exports}e_();const t_=()=>{};var Gu={};/**
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
 */const Nd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},n_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],c=n[t++],u=n[t++],d=((i&7)<<18|(s&63)<<12|(c&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const s=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|c&63)}}return e.join("")},Vd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],c=i+1<n.length,u=c?n[i+1]:0,d=i+2<n.length,m=d?n[i+2]:0,y=s>>2,T=(s&3)<<4|u>>4;let b=(u&15)<<2|m>>6,N=m&63;d||(N=64,c||(b=64)),r.push(t[y],t[T],t[b],t[N])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Nd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):n_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const m=i<n.length?t[n.charAt(i)]:64;++i;const T=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||m==null||T==null)throw new r_;const b=s<<2|u>>4;if(r.push(b),m!==64){const N=u<<4&240|m>>2;if(r.push(N),T!==64){const $=m<<6&192|T;r.push($)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class r_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i_=function(n){const e=Nd(n);return Vd.encodeByteArray(e,!0)},aa=function(n){return i_(n).replace(/\./g,"")},Ld=function(n){try{return Vd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function s_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const o_=()=>s_().__FIREBASE_DEFAULTS__,a_=()=>{if(typeof process>"u"||typeof Gu>"u")return;const n=Gu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},c_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ld(n[1]);return e&&JSON.parse(e)},ka=()=>{try{return t_()||o_()||a_()||c_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xd=n=>{var e,t;return(t=(e=ka())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},l_=n=>{const e=xd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Md=()=>{var n;return(n=ka())===null||n===void 0?void 0:n.config},Fd=n=>{var e;return(e=ka())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class u_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function zi(n){return n.endsWith(".cloudworkstations.dev")}async function Ud(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function h_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[aa(JSON.stringify(t)),aa(JSON.stringify(c)),""].join(".")}const Ms={};function d_(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ms))Ms[e]?n.emulator.push(e):n.prod.push(e);return n}function f_(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Qu=!1;function $d(n,e){if(typeof window>"u"||typeof document>"u"||!zi(window.location.host)||Ms[n]===e||Ms[n]||Qu)return;Ms[n]=e;function t(b){return`__firebase__banner__${b}`}const r="__firebase__banner",s=d_().prod.length>0;function c(){const b=document.getElementById(r);b&&b.remove()}function u(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function d(b,N){b.setAttribute("width","24"),b.setAttribute("id",N),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function m(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{Qu=!0,c()},b}function y(b,N){b.setAttribute("id",N),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function T(){const b=f_(r),N=t("text"),$=document.getElementById(N)||document.createElement("span"),z=t("learnmore"),F=document.getElementById(z)||document.createElement("a"),ee=t("preprendIcon"),G=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const ce=b.element;u(ce),y(F,z);const Ae=m();d(G,ee),ce.append(G,$,F,Ae),document.body.appendChild(ce)}s?($.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function p_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function m_(){var n;const e=(n=ka())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function g_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function __(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function y_(){const n=at();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function v_(){return!m_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jd(){try{return typeof indexedDB=="object"}catch{return!1}}function qd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function E_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const w_="FirebaseError";class Jt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=w_,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],c=s?T_(s,r):"Error",u=`${this.serviceName}: ${c} (${i}).`;return new Jt(i,u,r)}}function T_(n,e){return n.replace(I_,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const I_=/\{\$([^}]+)}/g;function A_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function pr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],c=e[i];if(Yu(s)&&Yu(c)){if(!pr(s,c))return!1}else if(s!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Yu(n){return n!==null&&typeof n=="object"}/**
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
 */function Zs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ds(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Os(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function b_(n,e){const t=new C_(n,e);return t.subscribe.bind(t)}class C_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");R_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ec),i.error===void 0&&(i.error=Ec),i.complete===void 0&&(i.complete=Ec);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function R_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ec(){}/**
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
 */const S_=1e3,P_=2,k_=4*60*60*1e3,D_=.5;function Xu(n,e=S_,t=P_){const r=e*Math.pow(t,n),i=Math.round(D_*r*(Math.random()-.5)*2);return Math.min(k_,r+i)}/**
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
 */function Ye(n){return n&&n._delegate?n._delegate:n}class Yt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qr="[DEFAULT]";/**
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
 */class O_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new u_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(V_(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&c.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const c=this.instances.get(i);return c&&e(c,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:N_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function N_(n){return n===qr?void 0:n}function V_(n){return n.instantiationMode==="EAGER"}/**
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
 */class L_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new O_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const x_={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},M_=he.INFO,F_={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},U_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=F_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Da{constructor(e){this.name=e,this._logLevel=M_,this._logHandler=U_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?x_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const $_=(n,e)=>e.some(t=>n instanceof t);let Ju,Zu;function B_(){return Ju||(Ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function j_(){return Zu||(Zu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hd=new WeakMap,Vc=new WeakMap,zd=new WeakMap,wc=new WeakMap,ol=new WeakMap;function q_(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",c)},s=()=>{t(ur(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Hd.set(t,n)}).catch(()=>{}),ol.set(e,n),e}function H_(n){if(Vc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",c),n.removeEventListener("abort",c)},s=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",c),n.addEventListener("abort",c)});Vc.set(n,e)}let Lc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ur(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function z_(n){Lc=n(Lc)}function W_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Tc(this),e,...t);return zd.set(r,e.sort?e.sort():[e]),ur(r)}:j_().includes(n)?function(...e){return n.apply(Tc(this),e),ur(Hd.get(this))}:function(...e){return ur(n.apply(Tc(this),e))}}function K_(n){return typeof n=="function"?W_(n):(n instanceof IDBTransaction&&H_(n),$_(n,B_())?new Proxy(n,Lc):n)}function ur(n){if(n instanceof IDBRequest)return q_(n);if(wc.has(n))return wc.get(n);const e=K_(n);return e!==n&&(wc.set(n,e),ol.set(e,n)),e}const Tc=n=>ol.get(n);function Wd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const c=indexedDB.open(n,e),u=ur(c);return r&&c.addEventListener("upgradeneeded",d=>{r(ur(c.result),d.oldVersion,d.newVersion,ur(c.transaction),d)}),t&&c.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),u.then(d=>{s&&d.addEventListener("close",()=>s()),i&&d.addEventListener("versionchange",m=>i(m.oldVersion,m.newVersion,m))}).catch(()=>{}),u}const G_=["get","getKey","getAll","getAllKeys","count"],Q_=["put","add","delete","clear"],Ic=new Map;function eh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ic.get(e))return Ic.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Q_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||G_.includes(t)))return;const s=async function(c,...u){const d=this.transaction(c,i?"readwrite":"readonly");let m=d.store;return r&&(m=m.index(u.shift())),(await Promise.all([m[t](...u),i&&d.done]))[0]};return Ic.set(e,s),s}z_(n=>({...n,get:(e,t,r)=>eh(e,t)||n.get(e,t,r),has:(e,t)=>!!eh(e,t)||n.has(e,t)}));/**
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
 */class Y_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(X_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function X_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xc="@firebase/app",th="0.13.1";/**
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
 */const Ln=new Da("@firebase/app"),J_="@firebase/app-compat",Z_="@firebase/analytics-compat",ey="@firebase/analytics",ty="@firebase/app-check-compat",ny="@firebase/app-check",ry="@firebase/auth",iy="@firebase/auth-compat",sy="@firebase/database",oy="@firebase/data-connect",ay="@firebase/database-compat",cy="@firebase/functions",ly="@firebase/functions-compat",uy="@firebase/installations",hy="@firebase/installations-compat",dy="@firebase/messaging",fy="@firebase/messaging-compat",py="@firebase/performance",my="@firebase/performance-compat",gy="@firebase/remote-config",_y="@firebase/remote-config-compat",yy="@firebase/storage",vy="@firebase/storage-compat",Ey="@firebase/firestore",wy="@firebase/ai",Ty="@firebase/firestore-compat",Iy="firebase",Ay="11.9.0";/**
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
 */const Mc="[DEFAULT]",by={[xc]:"fire-core",[J_]:"fire-core-compat",[ey]:"fire-analytics",[Z_]:"fire-analytics-compat",[ny]:"fire-app-check",[ty]:"fire-app-check-compat",[ry]:"fire-auth",[iy]:"fire-auth-compat",[sy]:"fire-rtdb",[oy]:"fire-data-connect",[ay]:"fire-rtdb-compat",[cy]:"fire-fn",[ly]:"fire-fn-compat",[uy]:"fire-iid",[hy]:"fire-iid-compat",[dy]:"fire-fcm",[fy]:"fire-fcm-compat",[py]:"fire-perf",[my]:"fire-perf-compat",[gy]:"fire-rc",[_y]:"fire-rc-compat",[yy]:"fire-gcs",[vy]:"fire-gcs-compat",[Ey]:"fire-fst",[Ty]:"fire-fst-compat",[wy]:"fire-vertex","fire-js":"fire-js",[Iy]:"fire-js-all"};/**
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
 */const ca=new Map,Cy=new Map,Fc=new Map;function nh(n,e){try{n.container.addComponent(e)}catch(t){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function fn(n){const e=n.name;if(Fc.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Fc.set(e,n);for(const t of ca.values())nh(t,n);for(const t of Cy.values())nh(t,n);return!0}function ei(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ct(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ry={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new Zr("app","Firebase",Ry);/**
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
 */class Sy{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Wi=Ay;function Kd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mc,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(t||(t=Md()),!t)throw hr.create("no-options");const s=ca.get(i);if(s){if(pr(t,s.options)&&pr(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const c=new L_(i);for(const d of Fc.values())c.addComponent(d);const u=new Sy(t,r,c);return ca.set(i,u),u}function al(n=Mc){const e=ca.get(n);if(!e&&n===Mc&&Md())return Kd();if(!e)throw hr.create("no-app",{appName:n});return e}function Mt(n,e,t){var r;let i=(r=by[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),c=e.match(/\s|\//);if(s||c){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&c&&u.push("and"),c&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(u.join(" "));return}fn(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Py="firebase-heartbeat-database",ky=1,Hs="firebase-heartbeat-store";let Ac=null;function Gd(){return Ac||(Ac=Wd(Py,ky,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Hs)}catch(t){console.warn(t)}}}}).catch(n=>{throw hr.create("idb-open",{originalErrorMessage:n.message})})),Ac}async function Dy(n){try{const t=(await Gd()).transaction(Hs),r=await t.objectStore(Hs).get(Qd(n));return await t.done,r}catch(e){if(e instanceof Jt)Ln.warn(e.message);else{const t=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(t.message)}}}async function rh(n,e){try{const r=(await Gd()).transaction(Hs,"readwrite");await r.objectStore(Hs).put(e,Qd(n)),await r.done}catch(t){if(t instanceof Jt)Ln.warn(t.message);else{const r=hr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ln.warn(r.message)}}}function Qd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Oy=1024,Ny=30;class Vy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ih();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(c=>c.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Ny){const c=My(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ih(),{heartbeatsToSend:r,unsentEntries:i}=Ly(this._heartbeatsCache.heartbeats),s=aa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ln.warn(t),""}}}function ih(){return new Date().toISOString().substring(0,10)}function Ly(n,e=Oy){const t=[];let r=n.slice();for(const i of n){const s=t.find(c=>c.agent===i.agent);if(s){if(s.dates.push(i.date),sh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),sh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class xy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jd()?qd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Dy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return rh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return rh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sh(n){return aa(JSON.stringify({version:2,heartbeats:n})).length}function My(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Fy(n){fn(new Yt("platform-logger",e=>new Y_(e),"PRIVATE")),fn(new Yt("heartbeat",e=>new Vy(e),"PRIVATE")),Mt(xc,th,n),Mt(xc,th,"esm2017"),Mt("fire-js","")}Fy("");var Uy="firebase",$y="11.9.1";/**
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
 */Mt(Uy,$y,"app");function cl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Yd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const By=Yd,Xd=new Zr("auth","Firebase",Yd());/**
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
 */const la=new Da("@firebase/auth");function jy(n,...e){la.logLevel<=he.WARN&&la.warn(`Auth (${Wi}): ${n}`,...e)}function Xo(n,...e){la.logLevel<=he.ERROR&&la.error(`Auth (${Wi}): ${n}`,...e)}/**
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
 */function Ft(n,...e){throw ul(n,...e)}function Qt(n,...e){return ul(n,...e)}function ll(n,e,t){const r=Object.assign(Object.assign({},By()),{[e]:t});return new Zr("auth","Firebase",r).create(e,{appName:n.name})}function Nn(n){return ll(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qy(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ft(n,"argument-error"),ll(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ul(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Xd.create(n,...e)}function J(n,e,...t){if(!n)throw ul(e,...t)}function Dn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xo(e),new Error(e)}function xn(n,e){n||Dn(e)}/**
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
 */function Uc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Hy(){return oh()==="http:"||oh()==="https:"}function oh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function zy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hy()||Bd()||"connection"in navigator)?navigator.onLine:!0}function Wy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class eo{constructor(e,t){this.shortDelay=e,this.longDelay=t,xn(t>e,"Short delay should be less than long delay!"),this.isMobile=p_()||__()}get(){return zy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hl(n,e){xn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Jd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ky={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Gy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Qy=new eo(3e4,6e4);function mn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function gn(n,e,t,r,i={}){return Zd(n,i,async()=>{let s={},c={};r&&(e==="GET"?c=r:s={body:JSON.stringify(r)});const u=Zs(Object.assign({key:n.config.apiKey},c)).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:d},s);return g_()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&zi(n.emulatorConfig.host)&&(m.credentials="include"),Jd.fetch()(await ef(n,n.config.apiHost,t,u),m)})}async function Zd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ky),e);try{const i=new Xy(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await s.json();if("needConfirmation"in c)throw Ho(n,"account-exists-with-different-credential",c);if(s.ok&&!("errorMessage"in c))return c;{const u=s.ok?c.errorMessage:c.error.message,[d,m]=u.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(n,"credential-already-in-use",c);if(d==="EMAIL_EXISTS")throw Ho(n,"email-already-in-use",c);if(d==="USER_DISABLED")throw Ho(n,"user-disabled",c);const y=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw ll(n,y,m);Ft(n,y)}}catch(i){if(i instanceof Jt)throw i;Ft(n,"network-request-failed",{message:String(i)})}}async function to(n,e,t,r,i={}){const s=await gn(n,e,t,r,i);return"mfaPendingCredential"in s&&Ft(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function ef(n,e,t,r){const i=`${e}${t}?${r}`,s=n,c=s.config.emulator?hl(n.config,i):`${n.config.apiScheme}://${i}`;return Gy.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(c).toString():c}function Yy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),Qy.get())})}}function Ho(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Qt(n,e,r);return i.customData._tokenResponse=t,i}function ah(n){return n!==void 0&&n.enterprise!==void 0}class Jy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Yy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Zy(n,e){return gn(n,"GET","/v2/recaptchaConfig",mn(n,e))}/**
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
 */async function ev(n,e){return gn(n,"POST","/v1/accounts:delete",e)}async function ua(n,e){return gn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tv(n,e=!1){const t=Ye(n),r=await t.getIdToken(e),i=dl(r);J(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,c=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fs(bc(i.auth_time)),issuedAtTime:Fs(bc(i.iat)),expirationTime:Fs(bc(i.exp)),signInProvider:c||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bc(n){return Number(n)*1e3}function dl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Xo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ld(t);return i?JSON.parse(i):(Xo("Failed to decode base64 JWT payload"),null)}catch(i){return Xo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ch(n){const e=dl(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Jt&&nv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function nv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class rv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $c{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ha(n){var e;const t=n.auth,r=await n.getIdToken(),i=await zs(n,ua(t,{idToken:r}));J(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const c=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tf(s.providerUserInfo):[],u=sv(n.providerData,c),d=n.isAnonymous,m=!(n.email&&s.passwordHash)&&!(u!=null&&u.length),y=d?m:!1,T={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new $c(s.createdAt,s.lastLoginAt),isAnonymous:y};Object.assign(n,T)}async function iv(n){const e=Ye(n);await ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tf(n){return n.map(e=>{var{providerId:t}=e,r=cl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ov(n,e){const t=await Zd(n,{},async()=>{const r=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,c=await ef(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:u,body:r};return n.emulatorConfig&&zi(n.emulatorConfig.host)&&(d.credentials="include"),Jd.fetch()(c,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function av(n,e){return gn(n,"POST","/v2/accounts:revokeToken",mn(n,e))}/**
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
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ch(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=ch(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await ov(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,c=new Vi;return r&&(J(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),c.expirationTime=s),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function ir(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=cl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $c(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await zs(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tv(this,e)}reload(){return iv(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ha(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await zs(this,ev(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,c,u,d,m,y;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,b=(i=t.email)!==null&&i!==void 0?i:void 0,N=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,$=(c=t.photoURL)!==null&&c!==void 0?c:void 0,z=(u=t.tenantId)!==null&&u!==void 0?u:void 0,F=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,ee=(m=t.createdAt)!==null&&m!==void 0?m:void 0,G=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ce,emailVerified:Ae,isAnonymous:mt,providerData:Pe,stsTokenManager:R}=t;J(ce&&R,e,"internal-error");const v=Vi.fromJSON(this.name,R);J(typeof ce=="string",e,"internal-error"),ir(T,e.name),ir(b,e.name),J(typeof Ae=="boolean",e,"internal-error"),J(typeof mt=="boolean",e,"internal-error"),ir(N,e.name),ir($,e.name),ir(z,e.name),ir(F,e.name),ir(ee,e.name),ir(G,e.name);const w=new Kt({uid:ce,auth:e,email:b,emailVerified:Ae,displayName:T,isAnonymous:mt,photoURL:$,phoneNumber:N,tenantId:z,stsTokenManager:v,createdAt:ee,lastLoginAt:G});return Pe&&Array.isArray(Pe)&&(w.providerData=Pe.map(I=>Object.assign({},I))),F&&(w._redirectEventId=F),w}static async _fromIdTokenResponse(e,t,r=!1){const i=new Vi;i.updateFromServerResponse(t);const s=new Kt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ha(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?tf(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new Vi;u.updateFromIdToken(r);const d=new Kt({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:c}),m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $c(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(d,m),d}}/**
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
 */const lh=new Map;function On(n){xn(n instanceof Function,"Expected a class definition");let e=lh.get(n);return e?(xn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,lh.set(n,e),e)}/**
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
 */class nf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nf.type="NONE";const uh=nf;/**
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
 */function Jo(n,e,t){return`firebase:${n}:${e}:${t}`}class Li{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Jo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Jo("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ua(this.auth,{idToken:e}).catch(()=>{});return t?Kt._fromGetAccountInfoResponse(this.auth,t,e):null}return Kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Li(On(uh),e,r);const i=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let s=i[0]||On(uh);const c=Jo(r,e.config.apiKey,e.name);let u=null;for(const m of t)try{const y=await m._get(c);if(y){let T;if(typeof y=="string"){const b=await ua(e,{idToken:y}).catch(()=>{});if(!b)break;T=await Kt._fromGetAccountInfoResponse(e,b,y)}else T=Kt._fromJSON(e,y);m!==s&&(u=T),s=m;break}}catch{}const d=i.filter(m=>m._shouldAllowMigration);return!s._shouldAllowMigration||!d.length?new Li(s,e,r):(s=d[0],u&&await s._set(c,u.toJSON()),await Promise.all(t.map(async m=>{if(m!==s)try{await m._remove(c)}catch{}})),new Li(s,e,r))}}/**
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
 */function hh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(af(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lf(e))return"Blackberry";if(uf(e))return"Webos";if(sf(e))return"Safari";if((e.includes("chrome/")||of(e))&&!e.includes("edge/"))return"Chrome";if(cf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rf(n=at()){return/firefox\//i.test(n)}function sf(n=at()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function of(n=at()){return/crios\//i.test(n)}function af(n=at()){return/iemobile/i.test(n)}function cf(n=at()){return/android/i.test(n)}function lf(n=at()){return/blackberry/i.test(n)}function uf(n=at()){return/webos/i.test(n)}function fl(n=at()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function cv(n=at()){var e;return fl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lv(){return y_()&&document.documentMode===10}function hf(n=at()){return fl(n)||cf(n)||uf(n)||lf(n)||/windows phone/i.test(n)||af(n)}/**
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
 */function df(n,e=[]){let t;switch(n){case"Browser":t=hh(at());break;case"Worker":t=`${hh(at())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wi}/${r}`}/**
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
 */class uv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((c,u)=>{try{const d=e(s);c(d)}catch(d){u(d)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hv(n,e={}){return gn(n,"GET","/v2/passwordPolicy",mn(n,e))}/**
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
 */const dv=6;class fv{constructor(e){var t,r,i,s;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:dv,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,c,u;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(t=d.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(s=d.containsUppercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(c=d.containsNumericCharacter)!==null&&c!==void 0?c:!0),d.isValid&&(d.isValid=(u=d.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),d}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class pv{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dh(this),this.idTokenSubscription=new dh(this),this.beforeStateQueue=new uv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=On(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ua(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ct(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(e);(!c||c===u)&&(d!=null&&d.user)&&(i=d.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ha(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(Nn(this));const t=e?Ye(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hv(this),t=new fv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await av(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&On(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[On(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let c=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(u,this,"internal-error"),u.then(()=>{c||s(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,r,i);return()=>{c=!0,d()}}else{const d=e.addObserver(t);return()=>{c=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=df(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&jy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Un(n){return Ye(n)}class dh{constructor(e){this.auth=e,this.observer=null,this.addObserver=b_(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mv(n){Oa=n}function ff(n){return Oa.loadJS(n)}function gv(){return Oa.recaptchaEnterpriseScript}function _v(){return Oa.gapiScript}function yv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class vv{constructor(){this.enterprise=new Ev}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ev{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const wv="recaptcha-enterprise",pf="NO_RECAPTCHA";class Tv{constructor(e){this.type=wv,this.auth=Un(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(c,u)=>{Zy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const m=new Jy(d);return s.tenantId==null?s._agentRecaptchaConfig=m:s._tenantRecaptchaConfigs[s.tenantId]=m,c(m.siteKey)}}).catch(d=>{u(d)})})}function i(s,c,u){const d=window.grecaptcha;ah(d)?d.enterprise.ready(()=>{d.enterprise.execute(s,{action:e}).then(m=>{c(m)}).catch(()=>{c(pf)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vv().execute("siteKey",{action:"verify"}):new Promise((s,c)=>{r(this.auth).then(u=>{if(!t&&ah(window.grecaptcha))i(u,s,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let d=gv();d.length!==0&&(d+=u),ff(d).then(()=>{i(u,s,c)}).catch(m=>{c(m)})}}).catch(u=>{c(u)})})}}async function fh(n,e,t,r=!1,i=!1){const s=new Tv(n);let c;if(i)c=pf;else try{c=await s.verify(t)}catch{c=await s.verify(t,!0)}const u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const d=u.phoneEnrollmentInfo.phoneNumber,m=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const d=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:c}):Object.assign(u,{captchaResponse:c}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function da(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await fh(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await fh(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(c)})}/**
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
 */function Iv(n,e){const t=ei(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(pr(s,e??{}))return i;Ft(i,"already-initialized")}return t.initialize({options:e})}function Av(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(On);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bv(n,e,t){const r=Un(n);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=mf(e),{host:c,port:u}=Cv(e),d=u===null?"":`:${u}`,m={url:`${s}//${c}${d}/`},y=Object.freeze({host:c,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(pr(m,r.config.emulator)&&pr(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,zi(c)?(Ud(`${s}//${c}${d}`),$d("Auth",!0)):Rv()}function mf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Cv(n){const e=mf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ph(r.substr(s.length+1))}}else{const[s,c]=r.split(":");return{host:s,port:ph(c)}}}function ph(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Rv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class pl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,t){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
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
 */async function Sv(n,e){return gn(n,"POST","/v1/accounts:resetPassword",mn(n,e))}async function Pv(n,e){return gn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function kv(n,e){return to(n,"POST","/v1/accounts:signInWithPassword",mn(n,e))}async function Dv(n,e){return gn(n,"POST","/v1/accounts:sendOobCode",mn(n,e))}async function Ov(n,e){return Dv(n,e)}/**
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
 */async function Nv(n,e){return to(n,"POST","/v1/accounts:signInWithEmailLink",mn(n,e))}async function Vv(n,e){return to(n,"POST","/v1/accounts:signInWithEmailLink",mn(n,e))}/**
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
 */class Ws extends pl{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ws(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ws(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return da(e,t,"signInWithPassword",kv);case"emailLink":return Nv(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return da(e,r,"signUpPassword",Pv);case"emailLink":return Vv(e,{idToken:t,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xi(n,e){return to(n,"POST","/v1/accounts:signInWithIdp",mn(n,e))}/**
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
 */const Lv="http://localhost";class Kr extends pl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ft("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=cl(t,["providerId","signInMethod"]);if(!r||!i)return null;const c=new Kr(r,i);return c.idToken=s.idToken||void 0,c.accessToken=s.accessToken||void 0,c.secret=s.secret,c.nonce=s.nonce,c.pendingToken=s.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return xi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,xi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xi(e,t)}buildRequest(){const e={requestUri:Lv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zs(t)}return e}}/**
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
 */function xv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Mv(n){const e=Ds(Os(n)).link,t=e?Ds(Os(e)).deep_link_id:null,r=Ds(Os(n)).deep_link_id;return(r?Ds(Os(r)).link:null)||r||t||e||n}class ml{constructor(e){var t,r,i,s,c,u;const d=Ds(Os(e)),m=(t=d.apiKey)!==null&&t!==void 0?t:null,y=(r=d.oobCode)!==null&&r!==void 0?r:null,T=xv((i=d.mode)!==null&&i!==void 0?i:null);J(m&&y&&T,"argument-error"),this.apiKey=m,this.operation=T,this.code=y,this.continueUrl=(s=d.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(c=d.lang)!==null&&c!==void 0?c:null,this.tenantId=(u=d.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=Mv(e);try{return new ml(t)}catch{return null}}}/**
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
 */class Ki{constructor(){this.providerId=Ki.PROVIDER_ID}static credential(e,t){return Ws._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ml.parseLink(t);return J(r,"argument-error"),Ws._fromEmailAndCode(e,r.code,r.tenantId)}}Ki.PROVIDER_ID="password";Ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class no extends gl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends no{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class or extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Kr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return or.credential(t,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
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
 */class ar extends no{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */class cr extends no{constructor(){super("twitter.com")}static credential(e,t){return Kr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return cr.credential(t,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
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
 */async function Fv(n,e){return to(n,"POST","/v1/accounts:signUp",mn(n,e))}/**
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
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Kt._fromIdTokenResponse(e,r,i),c=mh(r);return new Gr({user:s,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=mh(r);return new Gr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function mh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class fa extends Jt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new fa(e,t,r,i)}}function gf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fa._fromErrorAndOperation(n,s,e,r):s})}async function Uv(n,e,t=!1){const r=await zs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Gr._forOperation(n,"link",r)}/**
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
 */async function $v(n,e,t=!1){const{auth:r}=n;if(Ct(r.app))return Promise.reject(Nn(r));const i="reauthenticate";try{const s=await zs(n,gf(r,i,e,n),t);J(s.idToken,r,"internal-error");const c=dl(s.idToken);J(c,r,"internal-error");const{sub:u}=c;return J(n.uid===u,r,"user-mismatch"),Gr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),s}}/**
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
 */async function _f(n,e,t=!1){if(Ct(n.app))return Promise.reject(Nn(n));const r="signIn",i=await gf(n,r,e),s=await Gr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Bv(n,e){return _f(Un(n),e)}/**
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
 */async function _l(n){const e=Un(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Nb(n,e,t){const r=Un(n);await da(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Ov)}async function Vb(n,e,t){await Sv(Ye(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_l(n),r})}async function Lb(n,e,t){if(Ct(n.app))return Promise.reject(Nn(n));const r=Un(n),c=await da(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fv).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&_l(n),d}),u=await Gr._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(u.user),u}function xb(n,e,t){return Ct(n.app)?Promise.reject(Nn(n)):Bv(Ye(n),Ki.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_l(n),r})}function jv(n,e,t,r){return Ye(n).onIdTokenChanged(e,t,r)}function qv(n,e,t){return Ye(n).beforeAuthStateChanged(e,t)}function Mb(n,e,t,r){return Ye(n).onAuthStateChanged(e,t,r)}function Fb(n){return Ye(n).signOut()}const pa="__sak";/**
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
 */class yf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pa,"1"),this.storage.removeItem(pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Hv=1e3,zv=10;class vf extends yf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,u,d)=>{this.notifyListeners(c,d)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},s=this.storage.getItem(r);lv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Hv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vf.type="LOCAL";const Wv=vf;/**
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
 */class Ef extends yf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ef.type="SESSION";const wf=Ef;/**
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
 */function Kv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,c=this.handlersMap[i];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(c).map(async m=>m(t.origin,s)),d=await Kv(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
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
 */function yl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Gv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,c;return new Promise((u,d)=>{const m=yl("",20);i.port1.start();const y=setTimeout(()=>{d(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(T){const b=T;if(b.data.eventId===m)switch(b.data.status){case"ack":clearTimeout(y),s=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(b.data.response);break;default:clearTimeout(y),clearTimeout(s),d(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function ln(){return window}function Qv(n){ln().location.href=n}/**
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
 */function Tf(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function Yv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Jv(){return Tf()?self:null}/**
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
 */const If="firebaseLocalStorageDb",Zv=1,ma="firebaseLocalStorage",Af="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Va(n,e){return n.transaction([ma],e?"readwrite":"readonly").objectStore(ma)}function eE(){const n=indexedDB.deleteDatabase(If);return new ro(n).toPromise()}function Bc(){const n=indexedDB.open(If,Zv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ma,{keyPath:Af})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ma)?e(r):(r.close(),await eE(),e(await Bc()))})})}async function gh(n,e,t){const r=Va(n,!0).put({[Af]:e,value:t});return new ro(r).toPromise()}async function tE(n,e){const t=Va(n,!1).get(e),r=await new ro(t).toPromise();return r===void 0?null:r.value}function _h(n,e){const t=Va(n,!0).delete(e);return new ro(t).toPromise()}const nE=800,rE=3;class bf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>rE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(Jv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Yv(),!this.activeServiceWorker)return;this.sender=new Gv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bc();return await gh(e,pa,"1"),await _h(e,pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>tE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_h(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Va(i,!1).getAll();return new ro(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bf.type="LOCAL";const iE=bf;new eo(3e4,6e4);/**
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
 */function Cf(n,e){return e?On(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class vl extends pl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function sE(n){return _f(n.auth,new vl(n),n.bypassAuthState)}function oE(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),$v(t,new vl(n),n.bypassAuthState)}async function aE(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),Uv(t,new vl(n),n.bypassAuthState)}/**
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
 */class Rf{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:c,type:u}=e;if(c){this.reject(c);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(d))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sE;case"linkViaPopup":case"linkViaRedirect":return aE;case"reauthViaPopup":case"reauthViaRedirect":return oE;default:Ft(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cE=new eo(2e3,1e4);async function Ub(n,e,t){if(Ct(n.app))return Promise.reject(Qt(n,"operation-not-supported-in-this-environment"));const r=Un(n);qy(n,e,gl);const i=Cf(r,t);return new Hr(r,"signInViaPopup",e,i).executeNotNull()}class Hr extends Rf{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=yl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cE.get())};e()}}Hr.currentPopupAction=null;/**
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
 */const lE="pendingRedirect",Zo=new Map;class uE extends Rf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Zo.get(this.auth._key());if(!e){try{const r=await hE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Zo.set(this.auth._key(),e)}return this.bypassAuthState||Zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hE(n,e){const t=pE(e),r=fE(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function dE(n,e){Zo.set(n._key(),e)}function fE(n){return On(n._redirectPersistence)}function pE(n){return Jo(lE,n.config.apiKey,n.name)}async function mE(n,e,t=!1){if(Ct(n.app))return Promise.reject(Nn(n));const r=Un(n),i=Cf(r,e),c=await new uE(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
 */const gE=10*60*1e3;class _E{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Sf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gE&&this.cachedEventUids.clear(),this.cachedEventUids.has(yh(e))}saveEventToCache(e){this.cachedEventUids.add(yh(e)),this.lastProcessedEventTime=Date.now()}}function yh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Sf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sf(n);default:return!1}}/**
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
 */async function vE(n,e={}){return gn(n,"GET","/v1/projects",e)}/**
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
 */const EE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wE=/^https?/;async function TE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vE(n);for(const t of e)try{if(IE(t))return}catch{}Ft(n,"unauthorized-domain")}function IE(n){const e=Uc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!wE.test(t))return!1;if(EE.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const AE=new eo(3e4,6e4);function vh(){const n=ln().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function bE(n){return new Promise((e,t)=>{var r,i,s;function c(){vh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vh(),t(Qt(n,"network-request-failed"))},timeout:AE.get()})}if(!((i=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ln().gapi)===null||s===void 0)&&s.load)c();else{const u=yv("iframefcb");return ln()[u]=()=>{gapi.load?c():t(Qt(n,"network-request-failed"))},ff(`${_v()}?onload=${u}`).catch(d=>t(d))}}).catch(e=>{throw ea=null,e})}let ea=null;function CE(n){return ea=ea||bE(n),ea}/**
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
 */const RE=new eo(5e3,15e3),SE="__/auth/iframe",PE="emulator/auth/iframe",kE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OE(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?hl(e,PE):`https://${n.config.authDomain}/${SE}`,r={apiKey:e.apiKey,appName:n.name,v:Wi},i=DE.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Zs(r).slice(1)}`}async function NE(n){const e=await CE(n),t=ln().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:OE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const c=Qt(n,"network-request-failed"),u=ln().setTimeout(()=>{s(c)},RE.get());function d(){ln().clearTimeout(u),i(r)}r.ping(d).then(d,()=>{s(c)})}))}/**
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
 */const VE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LE=500,xE=600,ME="_blank",FE="http://localhost";class Eh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UE(n,e,t,r=LE,i=xE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const d=Object.assign(Object.assign({},VE),{width:r.toString(),height:i.toString(),top:s,left:c}),m=at().toLowerCase();t&&(u=of(m)?ME:t),rf(m)&&(e=e||FE,d.scrollbars="yes");const y=Object.entries(d).reduce((b,[N,$])=>`${b}${N}=${$},`,"");if(cv(m)&&u!=="_self")return $E(e||"",u),new Eh(null);const T=window.open(e||"",u,y);J(T,n,"popup-blocked");try{T.focus()}catch{}return new Eh(T)}function $E(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const BE="__/auth/handler",jE="emulator/auth/handler",qE=encodeURIComponent("fac");async function wh(n,e,t,r,i,s){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Wi,eventId:i};if(e instanceof gl){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",A_(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof no){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const u=c;for(const y of Object.keys(u))u[y]===void 0&&delete u[y];const d=await n._getAppCheckToken(),m=d?`#${qE}=${encodeURIComponent(d)}`:"";return`${HE(n)}?${Zs(u).slice(1)}${m}`}function HE({config:n}){return n.emulator?hl(n,jE):`https://${n.authDomain}/${BE}`}/**
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
 */const Cc="webStorageSupport";class zE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wf,this._completeRedirectFn=mE,this._overrideRedirectResult=dE}async _openPopup(e,t,r,i){var s;xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const c=await wh(e,t,r,Uc(),i);return UE(e,c,yl())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await wh(e,t,r,Uc(),i);return Qv(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await NE(e),r=new _E(e);return t.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cc,{type:Cc},i=>{var s;const c=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cc];c!==void 0&&t(!!c),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=TE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hf()||sf()||fl()}}const WE=zE;var Th="@firebase/auth",Ih="1.10.7";/**
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
 */class KE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function GE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QE(n){fn(new Yt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:c,authDomain:u}=r.options;J(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:c,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:df(n)},m=new pv(r,i,s,d);return Av(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),fn(new Yt("auth-internal",e=>{const t=Un(e.getProvider("auth").getImmediate());return(r=>new KE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(Th,Ih,GE(n)),Mt(Th,Ih,"esm2017")}/**
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
 */const YE=5*60,XE=Fd("authIdTokenMaxAge")||YE;let Ah=null;const JE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>XE)return;const i=t==null?void 0:t.token;Ah!==i&&(Ah=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ZE(n=al()){const e=ei(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Iv(n,{popupRedirectResolver:WE,persistence:[iE,Wv,wf]}),r=Fd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const c=JE(s.toString());qv(t,c,()=>c(t.currentUser)),jv(t,u=>c(u))}}const i=xd("auth");return i&&bv(t,`http://${i}`),t}function ew(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}mv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",ew().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QE("Browser");var bh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,Pf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function w(){}w.prototype=v.prototype,R.D=v.prototype,R.prototype=new w,R.prototype.constructor=R,R.C=function(I,S,k){for(var E=Array(arguments.length-2),St=2;St<arguments.length;St++)E[St-2]=arguments[St];return v.prototype[S].apply(I,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(R,v,w){w||(w=0);var I=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)I[S]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(S=0;16>S;++S)I[S]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=R.g[0],w=R.g[1],S=R.g[2];var k=R.g[3],E=v+(k^w&(S^k))+I[0]+3614090360&4294967295;v=w+(E<<7&4294967295|E>>>25),E=k+(S^v&(w^S))+I[1]+3905402710&4294967295,k=v+(E<<12&4294967295|E>>>20),E=S+(w^k&(v^w))+I[2]+606105819&4294967295,S=k+(E<<17&4294967295|E>>>15),E=w+(v^S&(k^v))+I[3]+3250441966&4294967295,w=S+(E<<22&4294967295|E>>>10),E=v+(k^w&(S^k))+I[4]+4118548399&4294967295,v=w+(E<<7&4294967295|E>>>25),E=k+(S^v&(w^S))+I[5]+1200080426&4294967295,k=v+(E<<12&4294967295|E>>>20),E=S+(w^k&(v^w))+I[6]+2821735955&4294967295,S=k+(E<<17&4294967295|E>>>15),E=w+(v^S&(k^v))+I[7]+4249261313&4294967295,w=S+(E<<22&4294967295|E>>>10),E=v+(k^w&(S^k))+I[8]+1770035416&4294967295,v=w+(E<<7&4294967295|E>>>25),E=k+(S^v&(w^S))+I[9]+2336552879&4294967295,k=v+(E<<12&4294967295|E>>>20),E=S+(w^k&(v^w))+I[10]+4294925233&4294967295,S=k+(E<<17&4294967295|E>>>15),E=w+(v^S&(k^v))+I[11]+2304563134&4294967295,w=S+(E<<22&4294967295|E>>>10),E=v+(k^w&(S^k))+I[12]+1804603682&4294967295,v=w+(E<<7&4294967295|E>>>25),E=k+(S^v&(w^S))+I[13]+4254626195&4294967295,k=v+(E<<12&4294967295|E>>>20),E=S+(w^k&(v^w))+I[14]+2792965006&4294967295,S=k+(E<<17&4294967295|E>>>15),E=w+(v^S&(k^v))+I[15]+1236535329&4294967295,w=S+(E<<22&4294967295|E>>>10),E=v+(S^k&(w^S))+I[1]+4129170786&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^S&(v^w))+I[6]+3225465664&4294967295,k=v+(E<<9&4294967295|E>>>23),E=S+(v^w&(k^v))+I[11]+643717713&4294967295,S=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(S^k))+I[0]+3921069994&4294967295,w=S+(E<<20&4294967295|E>>>12),E=v+(S^k&(w^S))+I[5]+3593408605&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^S&(v^w))+I[10]+38016083&4294967295,k=v+(E<<9&4294967295|E>>>23),E=S+(v^w&(k^v))+I[15]+3634488961&4294967295,S=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(S^k))+I[4]+3889429448&4294967295,w=S+(E<<20&4294967295|E>>>12),E=v+(S^k&(w^S))+I[9]+568446438&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^S&(v^w))+I[14]+3275163606&4294967295,k=v+(E<<9&4294967295|E>>>23),E=S+(v^w&(k^v))+I[3]+4107603335&4294967295,S=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(S^k))+I[8]+1163531501&4294967295,w=S+(E<<20&4294967295|E>>>12),E=v+(S^k&(w^S))+I[13]+2850285829&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^S&(v^w))+I[2]+4243563512&4294967295,k=v+(E<<9&4294967295|E>>>23),E=S+(v^w&(k^v))+I[7]+1735328473&4294967295,S=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(S^k))+I[12]+2368359562&4294967295,w=S+(E<<20&4294967295|E>>>12),E=v+(w^S^k)+I[5]+4294588738&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^S)+I[8]+2272392833&4294967295,k=v+(E<<11&4294967295|E>>>21),E=S+(k^v^w)+I[11]+1839030562&4294967295,S=k+(E<<16&4294967295|E>>>16),E=w+(S^k^v)+I[14]+4259657740&4294967295,w=S+(E<<23&4294967295|E>>>9),E=v+(w^S^k)+I[1]+2763975236&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^S)+I[4]+1272893353&4294967295,k=v+(E<<11&4294967295|E>>>21),E=S+(k^v^w)+I[7]+4139469664&4294967295,S=k+(E<<16&4294967295|E>>>16),E=w+(S^k^v)+I[10]+3200236656&4294967295,w=S+(E<<23&4294967295|E>>>9),E=v+(w^S^k)+I[13]+681279174&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^S)+I[0]+3936430074&4294967295,k=v+(E<<11&4294967295|E>>>21),E=S+(k^v^w)+I[3]+3572445317&4294967295,S=k+(E<<16&4294967295|E>>>16),E=w+(S^k^v)+I[6]+76029189&4294967295,w=S+(E<<23&4294967295|E>>>9),E=v+(w^S^k)+I[9]+3654602809&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^S)+I[12]+3873151461&4294967295,k=v+(E<<11&4294967295|E>>>21),E=S+(k^v^w)+I[15]+530742520&4294967295,S=k+(E<<16&4294967295|E>>>16),E=w+(S^k^v)+I[2]+3299628645&4294967295,w=S+(E<<23&4294967295|E>>>9),E=v+(S^(w|~k))+I[0]+4096336452&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~S))+I[7]+1126891415&4294967295,k=v+(E<<10&4294967295|E>>>22),E=S+(v^(k|~w))+I[14]+2878612391&4294967295,S=k+(E<<15&4294967295|E>>>17),E=w+(k^(S|~v))+I[5]+4237533241&4294967295,w=S+(E<<21&4294967295|E>>>11),E=v+(S^(w|~k))+I[12]+1700485571&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~S))+I[3]+2399980690&4294967295,k=v+(E<<10&4294967295|E>>>22),E=S+(v^(k|~w))+I[10]+4293915773&4294967295,S=k+(E<<15&4294967295|E>>>17),E=w+(k^(S|~v))+I[1]+2240044497&4294967295,w=S+(E<<21&4294967295|E>>>11),E=v+(S^(w|~k))+I[8]+1873313359&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~S))+I[15]+4264355552&4294967295,k=v+(E<<10&4294967295|E>>>22),E=S+(v^(k|~w))+I[6]+2734768916&4294967295,S=k+(E<<15&4294967295|E>>>17),E=w+(k^(S|~v))+I[13]+1309151649&4294967295,w=S+(E<<21&4294967295|E>>>11),E=v+(S^(w|~k))+I[4]+4149444226&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~S))+I[11]+3174756917&4294967295,k=v+(E<<10&4294967295|E>>>22),E=S+(v^(k|~w))+I[2]+718787259&4294967295,S=k+(E<<15&4294967295|E>>>17),E=w+(k^(S|~v))+I[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+S&4294967295,R.g[3]=R.g[3]+k&4294967295}r.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var w=v-this.blockSize,I=this.B,S=this.h,k=0;k<v;){if(S==0)for(;k<=w;)i(this,R,k),k+=this.blockSize;if(typeof R=="string"){for(;k<v;)if(I[S++]=R.charCodeAt(k++),S==this.blockSize){i(this,I),S=0;break}}else for(;k<v;)if(I[S++]=R[k++],S==this.blockSize){i(this,I),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var w=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=w&255,w/=256;for(this.u(R),R=Array(16),v=w=0;4>v;++v)for(var I=0;32>I;I+=8)R[w++]=this.g[v]>>>I&255;return R};function s(R,v){var w=u;return Object.prototype.hasOwnProperty.call(w,R)?w[R]:w[R]=v(R)}function c(R,v){this.h=v;for(var w=[],I=!0,S=R.length-1;0<=S;S--){var k=R[S]|0;I&&k==v||(w[S]=k,I=!1)}this.g=w}var u={};function d(R){return-128<=R&&128>R?s(R,function(v){return new c([v|0],0>v?-1:0)}):new c([R|0],0>R?-1:0)}function m(R){if(isNaN(R)||!isFinite(R))return T;if(0>R)return F(m(-R));for(var v=[],w=1,I=0;R>=w;I++)v[I]=R/w|0,w*=4294967296;return new c(v,0)}function y(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return F(y(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=m(Math.pow(v,8)),I=T,S=0;S<R.length;S+=8){var k=Math.min(8,R.length-S),E=parseInt(R.substring(S,S+k),v);8>k?(k=m(Math.pow(v,k)),I=I.j(k).add(m(E))):(I=I.j(w),I=I.add(m(E)))}return I}var T=d(0),b=d(1),N=d(16777216);n=c.prototype,n.m=function(){if(z(this))return-F(this).m();for(var R=0,v=1,w=0;w<this.g.length;w++){var I=this.i(w);R+=(0<=I?I:4294967296+I)*v,v*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if($(this))return"0";if(z(this))return"-"+F(this).toString(R);for(var v=m(Math.pow(R,6)),w=this,I="";;){var S=Ae(w,v).g;w=ee(w,S.j(v));var k=((0<w.g.length?w.g[0]:w.h)>>>0).toString(R);if(w=S,$(w))return k+I;for(;6>k.length;)k="0"+k;I=k+I}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function $(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function z(R){return R.h==-1}n.l=function(R){return R=ee(this,R),z(R)?-1:$(R)?0:1};function F(R){for(var v=R.g.length,w=[],I=0;I<v;I++)w[I]=~R.g[I];return new c(w,~R.h).add(b)}n.abs=function(){return z(this)?F(this):this},n.add=function(R){for(var v=Math.max(this.g.length,R.g.length),w=[],I=0,S=0;S<=v;S++){var k=I+(this.i(S)&65535)+(R.i(S)&65535),E=(k>>>16)+(this.i(S)>>>16)+(R.i(S)>>>16);I=E>>>16,k&=65535,E&=65535,w[S]=E<<16|k}return new c(w,w[w.length-1]&-2147483648?-1:0)};function ee(R,v){return R.add(F(v))}n.j=function(R){if($(this)||$(R))return T;if(z(this))return z(R)?F(this).j(F(R)):F(F(this).j(R));if(z(R))return F(this.j(F(R)));if(0>this.l(N)&&0>R.l(N))return m(this.m()*R.m());for(var v=this.g.length+R.g.length,w=[],I=0;I<2*v;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<R.g.length;S++){var k=this.i(I)>>>16,E=this.i(I)&65535,St=R.i(S)>>>16,$n=R.i(S)&65535;w[2*I+2*S]+=E*$n,G(w,2*I+2*S),w[2*I+2*S+1]+=k*$n,G(w,2*I+2*S+1),w[2*I+2*S+1]+=E*St,G(w,2*I+2*S+1),w[2*I+2*S+2]+=k*St,G(w,2*I+2*S+2)}for(I=0;I<v;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=v;I<2*v;I++)w[I]=0;return new c(w,0)};function G(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function ce(R,v){this.g=R,this.h=v}function Ae(R,v){if($(v))throw Error("division by zero");if($(R))return new ce(T,T);if(z(R))return v=Ae(F(R),v),new ce(F(v.g),F(v.h));if(z(v))return v=Ae(R,F(v)),new ce(F(v.g),v.h);if(30<R.g.length){if(z(R)||z(v))throw Error("slowDivide_ only works with positive integers.");for(var w=b,I=v;0>=I.l(R);)w=mt(w),I=mt(I);var S=Pe(w,1),k=Pe(I,1);for(I=Pe(I,2),w=Pe(w,2);!$(I);){var E=k.add(I);0>=E.l(R)&&(S=S.add(w),k=E),I=Pe(I,1),w=Pe(w,1)}return v=ee(R,S.j(v)),new ce(S,v)}for(S=T;0<=R.l(v);){for(w=Math.max(1,Math.floor(R.m()/v.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),k=m(w),E=k.j(v);z(E)||0<E.l(R);)w-=I,k=m(w),E=k.j(v);$(k)&&(k=b),S=S.add(k),R=ee(R,E)}return new ce(S,R)}n.A=function(R){return Ae(this,R).h},n.and=function(R){for(var v=Math.max(this.g.length,R.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)&R.i(I);return new c(w,this.h&R.h)},n.or=function(R){for(var v=Math.max(this.g.length,R.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)|R.i(I);return new c(w,this.h|R.h)},n.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)^R.i(I);return new c(w,this.h^R.h)};function mt(R){for(var v=R.g.length+1,w=[],I=0;I<v;I++)w[I]=R.i(I)<<1|R.i(I-1)>>>31;return new c(w,R.h)}function Pe(R,v){var w=v>>5;v%=32;for(var I=R.g.length-w,S=[],k=0;k<I;k++)S[k]=0<v?R.i(k+w)>>>v|R.i(k+w+1)<<32-v:R.i(k+w);return new c(S,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Pf=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=y,dr=c}).apply(typeof bh<"u"?bh:typeof self<"u"?self:typeof window<"u"?window:{});var zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kf,Ns,Df,ta,jc,Of,Nf,Vf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,f){return o==Array.prototype||o==Object.prototype||(o[l]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof zo=="object"&&zo];for(var l=0;l<o.length;++l){var f=o[l];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(o,l){if(l)e:{var f=r;o=o.split(".");for(var _=0;_<o.length-1;_++){var P=o[_];if(!(P in f))break e;f=f[P]}o=o[o.length-1],_=f[o],l=l(_),l!=_&&l!=null&&e(f,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var f=0,_=!1,P={next:function(){if(!_&&f<o.length){var D=f++;return{value:l(D,o[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},u=this||self;function d(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function m(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function y(o,l,f){return o.call.apply(o.bind,arguments)}function T(o,l,f){if(!o)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,_),o.apply(l,P)}}return function(){return o.apply(l,arguments)}}function b(o,l,f){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,b.apply(null,arguments)}function N(o,l){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),o.apply(this,_)}}function $(o,l){function f(){}f.prototype=l.prototype,o.aa=l.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(_,P,D){for(var U=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)U[ve-2]=arguments[ve];return l.prototype[P].apply(_,U)}}function z(o){const l=o.length;if(0<l){const f=Array(l);for(let _=0;_<l;_++)f[_]=o[_];return f}return[]}function F(o,l){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(d(_)){const P=o.length||0,D=_.length||0;o.length=P+D;for(let U=0;U<D;U++)o[P+U]=_[U]}else o.push(_)}}class ee{constructor(l,f){this.i=l,this.j=f,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function G(o){return/^[\s\xa0]*$/.test(o)}function ce(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function Ae(o){return Ae[" "](o),o}Ae[" "]=function(){};var mt=ce().indexOf("Gecko")!=-1&&!(ce().toLowerCase().indexOf("webkit")!=-1&&ce().indexOf("Edge")==-1)&&!(ce().indexOf("Trident")!=-1||ce().indexOf("MSIE")!=-1)&&ce().indexOf("Edge")==-1;function Pe(o,l,f){for(const _ in o)l.call(f,o[_],_,o)}function R(o,l){for(const f in o)l.call(void 0,o[f],f,o)}function v(o){const l={};for(const f in o)l[f]=o[f];return l}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,l){let f,_;for(let P=1;P<arguments.length;P++){_=arguments[P];for(f in _)o[f]=_[f];for(let D=0;D<w.length;D++)f=w[D],Object.prototype.hasOwnProperty.call(_,f)&&(o[f]=_[f])}}function S(o){var l=1;o=o.split(":");const f=[];for(;0<l&&o.length;)f.push(o.shift()),l--;return o.length&&f.push(o.join(":")),f}function k(o){u.setTimeout(()=>{throw o},0)}function E(){var o=si;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class St{constructor(){this.h=this.g=null}add(l,f){const _=$n.get();_.set(l,f),this.h?this.h.next=_:this.g=_,this.h=_}}var $n=new ee(()=>new uo,o=>o.reset());class uo{constructor(){this.next=this.g=this.h=null}set(l,f){this.h=l,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let _n,Tr=!1,si=new St,M=()=>{const o=u.Promise.resolve(void 0);_n=()=>{o.then(Zi)}};var Zi=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){k(f)}var l=$n;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Tr=!1};function Ut(){this.s=this.s,this.C=this.C}Ut.prototype.s=!1,Ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var $t=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};u.addEventListener("test",f,l),u.removeEventListener("test",f,l)}catch{}return o}();function Bt(o,l){if(xe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,_=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(mt){e:{try{Ae(l.nodeName);var P=!0;break e}catch{}P=!1}P||(l=null)}}else f=="mouseover"?l=o.fromElement:f=="mouseout"&&(l=o.toElement);this.relatedTarget=l,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:wt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Bt.aa.h.call(this)}}$(Bt,xe);var wt={2:"touch",3:"pen",4:"mouse"};Bt.prototype.h=function(){Bt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Bn="closure_listenable_"+(1e6*Math.random()|0),Q=0;function oi(o,l,f,_,P){this.listener=o,this.proxy=null,this.src=l,this.type=f,this.capture=!!_,this.ha=P,this.key=++Q,this.da=this.fa=!1}function Ir(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ai(o){this.src=o,this.g={},this.h=0}ai.prototype.add=function(o,l,f,_,P){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var U=yn(o,l,_,P);return-1<U?(l=o[U],f||(l.fa=!1)):(l=new oi(l,this.src,D,!!_,P),l.fa=f,o.push(l)),l};function es(o,l){var f=l.type;if(f in o.g){var _=o.g[f],P=Array.prototype.indexOf.call(_,l,void 0),D;(D=0<=P)&&Array.prototype.splice.call(_,P,1),D&&(Ir(l),o.g[f].length==0&&(delete o.g[f],o.h--))}}function yn(o,l,f,_){for(var P=0;P<o.length;++P){var D=o[P];if(!D.da&&D.listener==l&&D.capture==!!f&&D.ha==_)return P}return-1}var ci="closure_lm_"+(1e6*Math.random()|0),vn={};function En(o,l,f,_,P){if(Array.isArray(l)){for(var D=0;D<l.length;D++)En(o,l[D],f,_,P);return null}return f=jt(f),o&&o[Bn]?o.K(l,f,m(_)?!!_.capture:!1,P):Xa(o,l,f,!1,_,P)}function Xa(o,l,f,_,P,D){if(!l)throw Error("Invalid event type");var U=m(P)?!!P.capture:!!P,ve=ns(o);if(ve||(o[ci]=ve=new ai(o)),f=ve.add(l,f,_,U,D),f.proxy)return f;if(_=Ja(),f.proxy=_,_.src=o,_.listener=f,o.addEventListener)$t||(P=U),P===void 0&&(P=!1),o.addEventListener(l.toString(),_,P);else if(o.attachEvent)o.attachEvent(fo(l.toString()),_);else if(o.addListener&&o.removeListener)o.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ja(){function o(f){return l.call(o.src,o.listener,f)}const l=Za;return o}function ho(o,l,f,_,P){if(Array.isArray(l))for(var D=0;D<l.length;D++)ho(o,l[D],f,_,P);else _=m(_)?!!_.capture:!!_,f=jt(f),o&&o[Bn]?(o=o.i,l=String(l).toString(),l in o.g&&(D=o.g[l],f=yn(D,f,_,P),-1<f&&(Ir(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete o.g[l],o.h--)))):o&&(o=ns(o))&&(l=o.g[l.toString()],o=-1,l&&(o=yn(l,f,_,P)),(f=-1<o?l[o]:null)&&ts(f))}function ts(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Bn])es(l.i,o);else{var f=o.type,_=o.proxy;l.removeEventListener?l.removeEventListener(f,_,o.capture):l.detachEvent?l.detachEvent(fo(f),_):l.addListener&&l.removeListener&&l.removeListener(_),(f=ns(l))?(es(f,o),f.h==0&&(f.src=null,l[ci]=null)):Ir(o)}}}function fo(o){return o in vn?vn[o]:vn[o]="on"+o}function Za(o,l){if(o.da)o=!0;else{l=new Bt(l,this);var f=o.listener,_=o.ha||o.src;o.fa&&ts(o),o=f.call(_,l)}return o}function ns(o){return o=o[ci],o instanceof ai?o:null}var jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function jt(o){return typeof o=="function"?o:(o[jn]||(o[jn]=function(l){return o.handleEvent(l)}),o[jn])}function Ue(){Ut.call(this),this.i=new ai(this),this.M=this,this.F=null}$(Ue,Ut),Ue.prototype[Bn]=!0,Ue.prototype.removeEventListener=function(o,l,f,_){ho(this,o,l,f,_)};function Xe(o,l){var f,_=o.F;if(_)for(f=[];_;_=_.F)f.push(_);if(o=o.M,_=l.type||l,typeof l=="string")l=new xe(l,o);else if(l instanceof xe)l.target=l.target||o;else{var P=l;l=new xe(_,o),I(l,P)}if(P=!0,f)for(var D=f.length-1;0<=D;D--){var U=l.g=f[D];P=li(U,_,!0,l)&&P}if(U=l.g=o,P=li(U,_,!0,l)&&P,P=li(U,_,!1,l)&&P,f)for(D=0;D<f.length;D++)U=l.g=f[D],P=li(U,_,!1,l)&&P}Ue.prototype.N=function(){if(Ue.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var f=o.g[l],_=0;_<f.length;_++)Ir(f[_]);delete o.g[l],o.h--}}this.F=null},Ue.prototype.K=function(o,l,f,_){return this.i.add(String(o),l,!1,f,_)},Ue.prototype.L=function(o,l,f,_){return this.i.add(String(o),l,!0,f,_)};function li(o,l,f,_){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var P=!0,D=0;D<l.length;++D){var U=l[D];if(U&&!U.da&&U.capture==f){var ve=U.listener,Be=U.ha||U.src;U.fa&&es(o.i,U),P=ve.call(Be,_)!==!1&&P}}return P&&!_.defaultPrevented}function qn(o,l,f){if(typeof o=="function")f&&(o=b(o,f));else if(o&&typeof o.handleEvent=="function")o=b(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function wn(o){o.g=qn(()=>{o.g=null,o.i&&(o.i=!1,wn(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Hn extends Ut{constructor(l,f){super(),this.m=l,this.l=f,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:wn(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zt(o){Ut.call(this),this.h=o,this.g={}}$(Zt,Ut);var po=[];function ui(o){Pe(o.g,function(l,f){this.g.hasOwnProperty(f)&&ts(l)},o),o.g={}}Zt.prototype.N=function(){Zt.aa.N.call(this),ui(this)},Zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rs=u.JSON.stringify,ec=u.JSON.parse,tc=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function is(){}is.prototype.h=null;function mo(o){return o.h||(o.h=o.i())}function go(){}var zn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wn(){xe.call(this,"d")}$(Wn,xe);function hi(){xe.call(this,"c")}$(hi,xe);var en={},_o=null;function di(){return _o=_o||new Ue}en.La="serverreachability";function yo(o){xe.call(this,en.La,o)}$(yo,xe);function Ar(o){const l=di();Xe(l,new yo(l))}en.STAT_EVENT="statevent";function Tn(o,l){xe.call(this,en.STAT_EVENT,o),this.stat=l}$(Tn,xe);function Ne(o){const l=di();Xe(l,new Tn(l,o))}en.Ma="timingevent";function vo(o,l){xe.call(this,en.Ma,o),this.size=l}$(vo,xe);function br(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function Cr(){this.g=!0}Cr.prototype.xa=function(){this.g=!1};function nc(o,l,f,_,P,D){o.info(function(){if(o.g)if(D)for(var U="",ve=D.split("&"),Be=0;Be<ve.length;Be++){var pe=ve[Be].split("=");if(1<pe.length){var ze=pe[0];pe=pe[1];var We=ze.split("_");U=2<=We.length&&We[1]=="type"?U+(ze+"="+pe+"&"):U+(ze+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+_+") [attempt "+P+"]: "+l+`
`+f+`
`+U})}function rc(o,l,f,_,P,D,U){o.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+P+"]: "+l+`
`+f+`
`+D+" "+U})}function tn(o,l,f,_){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+fi(o,f)+(_?" "+_:"")})}function Kn(o,l){o.info(function(){return"TIMEOUT: "+l})}Cr.prototype.info=function(){};function fi(o,l){if(!o.g)return l;if(!l)return null;try{var f=JSON.parse(l);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var _=f[o];if(!(2>_.length)){var P=_[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return rs(f)}catch{return l}}var pi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ss;function gi(){}$(gi,is),gi.prototype.g=function(){return new XMLHttpRequest},gi.prototype.i=function(){return{}},ss=new gi;function ct(o,l,f,_){this.j=o,this.i=l,this.l=f,this.R=_||1,this.U=new Zt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new He}function He(){this.i=null,this.g="",this.h=!1}var nt={},Je={};function $e(o,l,f){o.L=1,o.v=bn(De(l)),o.m=f,o.P=!0,Rr(o,null)}function Rr(o,l){o.F=Date.now(),qt(o),o.A=De(o.v);var f=o.A,_=o.R;Array.isArray(_)||(_=[String(_)]),vi(f.i,"t",_),o.C=0,f=o.j.J,o.h=new He,o.g=No(o.j,f?l:null,!o.m),0<o.O&&(o.M=new Hn(b(o.Y,o,o.g),o.O)),l=o.U,f=o.g,_=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(po[0]=P.toString()),P=po);for(var D=0;D<P.length;D++){var U=En(f,P[D],_||l.handleEvent,!1,l.h||l);if(!U)break;l.g[U.key]=U}l=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Ar(),nc(o.i,o.u,o.A,o.l,o.R,o.m)}ct.prototype.ca=function(o){o=o.target;const l=this.M;l&&rt(o)==3?l.j():this.Y(o)},ct.prototype.Y=function(o){try{if(o==this.g)e:{const We=rt(this.g);var l=this.g.Ba();const Ke=this.g.Z();if(!(3>We)&&(We!=3||this.g&&(this.h.h||this.g.oa()||Po(this.g)))){this.J||We!=4||l==7||(l==8||0>=Ke?Ar(3):Ar(2)),Sr(this);var f=this.g.Z();this.X=f;t:if(In(this)){var _=Po(this.g);o="";var P=_.length,D=rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),Pt(this);var U="";break t}this.h.i=new u.TextDecoder}for(l=0;l<P;l++)this.h.h=!0,o+=this.h.i.decode(_[l],{stream:!(D&&l==P-1)});_.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,rc(this.i,this.u,this.A,this.l,this.R,We,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Be=this.g;if((ve=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(ve)){var pe=ve;break t}}pe=null}if(f=pe)tn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pr(this,f);else{this.o=!1,this.s=3,Ne(12),nn(this),Pt(this);break e}}if(this.P){f=!0;let _t;for(;!this.J&&this.C<U.length;)if(_t=An(this,U),_t==Je){We==4&&(this.s=4,Ne(14),f=!1),tn(this.i,this.l,null,"[Incomplete Response]");break}else if(_t==nt){this.s=4,Ne(15),tn(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else tn(this.i,this.l,_t,null),Pr(this,_t);if(In(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),We!=4||U.length!=0||this.h.h||(this.s=1,Ne(16),f=!1),this.o=this.o&&f,!f)tn(this.i,this.l,U,"[Invalid Chunked Response]"),nn(this),Pt(this);else if(0<U.length&&!this.W){this.W=!0;var ze=this.j;ze.g==this&&ze.ba&&!ze.M&&(ze.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Is(ze),ze.M=!0,Ne(11))}}else tn(this.i,this.l,U,null),Pr(this,U);We==4&&nn(this),this.o&&!this.J&&(We==4?As(this.j,this):(this.o=!1,qt(this)))}else ko(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),nn(this),Pt(this)}}}catch{}finally{}};function In(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function An(o,l){var f=o.C,_=l.indexOf(`
`,f);return _==-1?Je:(f=Number(l.substring(f,_)),isNaN(f)?nt:(_+=1,_+f>l.length?Je:(l=l.slice(_,_+f),o.C=_+f,l)))}ct.prototype.cancel=function(){this.J=!0,nn(this)};function qt(o){o.S=Date.now()+o.I,os(o,o.I)}function os(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=br(b(o.ba,o),l)}function Sr(o){o.B&&(u.clearTimeout(o.B),o.B=null)}ct.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Kn(this.i,this.A),this.L!=2&&(Ar(),Ne(17)),nn(this),this.s=2,Pt(this)):os(this,this.S-o)};function Pt(o){o.j.G==0||o.J||As(o.j,o)}function nn(o){Sr(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,ui(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Pr(o,l){try{var f=o.j;if(f.G!=0&&(f.g==o||_i(f.h,o))){if(!o.K&&_i(f.h,o)&&f.G==3){try{var _=f.Da.g.parse(l)}catch{_=null}if(Array.isArray(_)&&_.length==3){var P=_;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Lr(f),Or(f);else break e;Ts(f),Ne(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=br(b(f.Za,f),6e3));if(1>=us(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else zt(f,11)}else if((o.K||f.g==o)&&Lr(f),!G(l))for(P=f.Da.g.parse(l),l=0;l<P.length;l++){let pe=P[l];if(f.T=pe[0],pe=pe[1],f.G==2)if(pe[0]=="c"){f.K=pe[1],f.ia=pe[2];const ze=pe[3];ze!=null&&(f.la=ze,f.j.info("VER="+f.la));const We=pe[4];We!=null&&(f.Aa=We,f.j.info("SVER="+f.Aa));const Ke=pe[5];Ke!=null&&typeof Ke=="number"&&0<Ke&&(_=1.5*Ke,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const _t=o.g;if(_t){const xr=_t.g?_t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xr){var D=_.h;D.g||xr.indexOf("spdy")==-1&&xr.indexOf("quic")==-1&&xr.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(yi(D,D.h),D.h=null))}if(_.D){const Ri=_t.g?_t.g.getResponseHeader("X-HTTP-Session-Id"):null;Ri&&(_.ya=Ri,ge(_.I,_.D,Ri))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var U=o;if(_.qa=bs(_,_.J?_.ia:null,_.W),U.K){hs(_.h,U);var ve=U,Be=_.L;Be&&(ve.I=Be),ve.B&&(Sr(ve),qt(ve)),_.g=U}else Vr(_);0<f.i.length&&Nr(f)}else pe[0]!="stop"&&pe[0]!="close"||zt(f,7);else f.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?zt(f,7):Ii(f):pe[0]!="noop"&&f.l&&f.l.ta(pe),f.v=0)}}Ar(4)}catch{}}var as=class{constructor(o,l){this.g=o,this.map=l}};function cs(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ls(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function us(o){return o.h?1:o.g?o.g.size:0}function _i(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function yi(o,l){o.g?o.g.add(l):o.h=l}function hs(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}cs.prototype.cancel=function(){if(this.i=ds(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ds(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const f of o.g.values())l=l.concat(f.D);return l}return z(o.i)}function Eo(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(d(o)){for(var l=[],f=o.length,_=0;_<f;_++)l.push(o[_]);return l}l=[],f=0;for(_ in o)l[f++]=o[_];return l}function wo(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(d(o)||typeof o=="string"){var l=[];o=o.length;for(var f=0;f<o;f++)l.push(f);return l}l=[],f=0;for(const _ in o)l[f++]=_;return l}}}function fs(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(d(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var f=wo(o),_=Eo(o),P=_.length,D=0;D<P;D++)l.call(void 0,_[D],f&&f[D],o)}var Tt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lt(o,l){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var _=o[f].indexOf("="),P=null;if(0<=_){var D=o[f].substring(0,_);P=o[f].substring(_+1)}else D=o[f];l(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function ut(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ut){this.h=o.h,Gn(this,o.j),this.o=o.o,this.g=o.g,Qn(this,o.s),this.l=o.l;var l=o.i,f=new gt;f.i=l.i,l.g&&(f.g=new Map(l.g),f.h=l.h),It(this,f),this.m=o.m}else o&&(l=String(o).match(Tt))?(this.h=!1,Gn(this,l[1]||"",!0),this.o=kt(l[2]||""),this.g=kt(l[3]||"",!0),Qn(this,l[4]),this.l=kt(l[5]||"",!0),It(this,l[6]||"",!0),this.m=kt(l[7]||"")):(this.h=!1,this.i=new gt(null,this.h))}ut.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Cn(l,Rn,!0),":");var f=this.g;return(f||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Cn(l,Rn,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Cn(f,f.charAt(0)=="/"?Io:ps,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Cn(f,ic)),o.join("")};function De(o){return new ut(o)}function Gn(o,l,f){o.j=f?kt(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Qn(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function It(o,l,f){l instanceof gt?(o.i=l,Ao(o.i,o.h)):(f||(l=Cn(l,Ht)),o.i=new gt(l,o.h))}function ge(o,l,f){o.i.set(l,f)}function bn(o){return ge(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function kt(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Cn(o,l,f){return typeof o=="string"?(o=encodeURI(o).replace(l,To),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function To(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Rn=/[#\/\?@]/g,ps=/[#\?:]/g,Io=/[#\?]/g,Ht=/[#\?@]/g,ic=/#/g;function gt(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function At(o){o.g||(o.g=new Map,o.h=0,o.i&&lt(o.i,function(l,f){o.add(decodeURIComponent(l.replace(/\+/g," ")),f)}))}n=gt.prototype,n.add=function(o,l){At(this),this.i=null,o=Dt(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(l),this.h+=1,this};function ms(o,l){At(o),l=Dt(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Yn(o,l){return At(o),l=Dt(o,l),o.g.has(l)}n.forEach=function(o,l){At(this),this.g.forEach(function(f,_){f.forEach(function(P){o.call(l,P,_,this)},this)},this)},n.na=function(){At(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),f=[];for(let _=0;_<l.length;_++){const P=o[_];for(let D=0;D<P.length;D++)f.push(l[_])}return f},n.V=function(o){At(this);let l=[];if(typeof o=="string")Yn(this,o)&&(l=l.concat(this.g.get(Dt(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)l=l.concat(o[f])}return l},n.set=function(o,l){return At(this),this.i=null,o=Dt(this,o),Yn(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function vi(o,l,f){ms(o,l),0<f.length&&(o.i=null,o.g.set(Dt(o,l),z(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var f=0;f<l.length;f++){var _=l[f];const D=encodeURIComponent(String(_)),U=this.V(_);for(_=0;_<U.length;_++){var P=D;U[_]!==""&&(P+="="+encodeURIComponent(String(U[_]))),o.push(P)}}return this.i=o.join("&")};function Dt(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Ao(o,l){l&&!o.j&&(At(o),o.i=null,o.g.forEach(function(f,_){var P=_.toLowerCase();_!=P&&(ms(this,_),vi(this,P,f))},o)),o.j=l}function bo(o,l){const f=new Cr;if(u.Image){const _=new Image;_.onload=N(ht,f,"TestLoadImage: loaded",!0,l,_),_.onerror=N(ht,f,"TestLoadImage: error",!1,l,_),_.onabort=N(ht,f,"TestLoadImage: abort",!1,l,_),_.ontimeout=N(ht,f,"TestLoadImage: timeout",!1,l,_),u.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=o}else l(!1)}function Co(o,l){const f=new Cr,_=new AbortController,P=setTimeout(()=>{_.abort(),ht(f,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:_.signal}).then(D=>{clearTimeout(P),D.ok?ht(f,"TestPingServer: ok",!0,l):ht(f,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(P),ht(f,"TestPingServer: error",!1,l)})}function ht(o,l,f,_,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),_(f)}catch{}}function sc(){this.g=new tc}function Ro(o,l,f){const _=f||"";try{fs(o,function(P,D){let U=P;m(P)&&(U=rs(P)),l.push(_+D+"="+encodeURIComponent(U))})}catch(P){throw l.push(_+"type="+encodeURIComponent("_badmap")),P}}function Xn(o){this.l=o.Ub||null,this.j=o.eb||!1}$(Xn,is),Xn.prototype.g=function(){return new Sn(this.l,this.j)},Xn.prototype.i=function(o){return function(){return o}}({});function Sn(o,l){Ue.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Sn,Ue),n=Sn.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,rn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ei(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ei(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?kr(this):rn(this),this.readyState==3&&Ei(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,kr(this))},n.Qa=function(o){this.g&&(this.response=o,kr(this))},n.ga=function(){this.g&&kr(this)};function kr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,rn(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var f=l.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=l.next();return o.join(`\r
`)};function rn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function So(o){let l="";return Pe(o,function(f,_){l+=_,l+=":",l+=f,l+=`\r
`}),l}function wi(o,l,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=So(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):ge(o,l,f))}function Ce(o){Ue.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Ce,Ue);var gs=/^https?$/i,_s=["POST","PUT"];n=Ce.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ss.g(),this.v=this.o?mo(this.o):mo(ss),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(D){ys(this,D);return}if(o=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var P in _)f.set(P,_[P]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())f.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),P=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(_s,l,void 0))||_||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of f)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vs(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){ys(this,D)}};function ys(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Jn(o),Dr(o)}function Jn(o){o.A||(o.A=!0,Xe(o,"complete"),Xe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Xe(this,"complete"),Xe(this,"abort"),Dr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Dr(this,!0)),Ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ti(this):this.bb())},n.bb=function(){Ti(this)};function Ti(o){if(o.h&&typeof c<"u"&&(!o.v[1]||rt(o)!=4||o.Z()!=2)){if(o.u&&rt(o)==4)qn(o.Ea,0,o);else if(Xe(o,"readystatechange"),rt(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var f;if(!(f=l)){var _;if(_=U===0){var P=String(o.D).match(Tt)[1]||null;!P&&u.self&&u.self.location&&(P=u.self.location.protocol.slice(0,-1)),_=!gs.test(P?P.toLowerCase():"")}f=_}if(f)Xe(o,"complete"),Xe(o,"success");else{o.m=6;try{var D=2<rt(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",Jn(o)}}finally{Dr(o)}}}}function Dr(o,l){if(o.g){vs(o);const f=o.g,_=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Xe(o,"ready");try{f.onreadystatechange=_}catch{}}}function vs(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function rt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<rt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),ec(l)}};function Po(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ko(o){const l={};o=(o.g&&2<=rt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<o.length;_++){if(G(o[_]))continue;var f=S(o[_]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=l[P]||[];l[P]=D,D.push(f)}R(l,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(o,l,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||l}function Es(o){this.Aa=0,this.i=[],this.j=new Cr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,o),this.cb=Zn("retryDelaySeedMs",1e4,o),this.Wa=Zn("forwardChannelMaxRetries",2,o),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new cs(o&&o.concurrentRequestLimit),this.Da=new sc,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Es.prototype,n.la=8,n.G=1,n.connect=function(o,l,f,_){Ne(0),this.W=o,this.H=l||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=bs(this,null,this.W),Nr(this)};function Ii(o){if(Ai(o),o.G==3){var l=o.U++,f=De(o.I);if(ge(f,"SID",o.K),ge(f,"RID",l),ge(f,"TYPE","terminate"),er(o,f),l=new ct(o,o.j,l),l.L=2,l.v=bn(De(f)),f=!1,u.navigator&&u.navigator.sendBeacon)try{f=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!f&&u.Image&&(new Image().src=l.v,f=!0),f||(l.g=No(l.j,null),l.g.ea(l.v)),l.F=Date.now(),qt(l)}Oo(o)}function Or(o){o.g&&(Is(o),o.g.cancel(),o.g=null)}function Ai(o){Or(o),o.u&&(u.clearTimeout(o.u),o.u=null),Lr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Nr(o){if(!ls(o.h)&&!o.s){o.s=!0;var l=o.Ga;_n||M(),Tr||(_n(),Tr=!0),si.add(l,o),o.B=0}}function oc(o,l){return us(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=br(b(o.Ga,o,l),sn(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new ct(this,this.j,o);let D=this.o;if(this.S&&(D?(D=v(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var l=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(l+=_,4096<l){l=f;break e}if(l===4096||f===this.i.length-1){l=f+1;break e}}l=1e3}else l=1e3;l=ws(this,P,l),f=De(this.I),ge(f,"RID",o),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),er(this,f),D&&(this.O?l="headers="+encodeURIComponent(String(So(D)))+"&"+l:this.m&&wi(f,this.m,D)),yi(this.h,P),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",l),ge(f,"SID","null"),P.T=!0,$e(P,f,null)):$e(P,f,l),this.G=2}}else this.G==3&&(o?Do(this,o):this.i.length==0||ls(this.h)||Do(this))};function Do(o,l){var f;l?f=l.l:f=o.U++;const _=De(o.I);ge(_,"SID",o.K),ge(_,"RID",f),ge(_,"AID",o.T),er(o,_),o.m&&o.o&&wi(_,o.m,o.o),f=new ct(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),l&&(o.i=l.D.concat(o.i)),l=ws(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),yi(o.h,f),$e(f,_,l)}function er(o,l){o.H&&Pe(o.H,function(f,_){ge(l,_,f)}),o.l&&fs({},function(f,_){ge(l,_,f)})}function ws(o,l,f){f=Math.min(o.i.length,f);var _=o.l?b(o.l.Na,o.l,o):null;e:{var P=o.i;let D=-1;for(;;){const U=["count="+f];D==-1?0<f?(D=P[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let ve=!0;for(let Be=0;Be<f;Be++){let pe=P[Be].g;const ze=P[Be].map;if(pe-=D,0>pe)D=Math.max(0,P[Be].g-100),ve=!1;else try{Ro(ze,U,"req"+pe+"_")}catch{_&&_(ze)}}if(ve){_=U.join("&");break e}}}return o=o.i.splice(0,f),l.D=o,_}function Vr(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;_n||M(),Tr||(_n(),Tr=!0),si.add(l,o),o.v=0}}function Ts(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=br(b(o.Fa,o),sn(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,bi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=br(b(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),Or(this),bi(this))};function Is(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function bi(o){o.g=new ct(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=De(o.qa);ge(l,"RID","rpc"),ge(l,"SID",o.K),ge(l,"AID",o.T),ge(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ge(l,"TO",o.ja),ge(l,"TYPE","xmlhttp"),er(o,l),o.m&&o.o&&wi(l,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=bn(De(l)),f.m=null,f.P=!0,Rr(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Or(this),Ts(this),Ne(19))};function Lr(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function As(o,l){var f=null;if(o.g==l){Lr(o),Is(o),o.g=null;var _=2}else if(_i(o.h,l))f=l.D,hs(o.h,l),_=1;else return;if(o.G!=0){if(l.o)if(_==1){f=l.m?l.m.length:0,l=Date.now()-l.F;var P=o.B;_=di(),Xe(_,new vo(_,f)),Nr(o)}else Vr(o);else if(P=l.s,P==3||P==0&&0<l.X||!(_==1&&oc(o,l)||_==2&&Ts(o)))switch(f&&0<f.length&&(l=o.h,l.i=l.i.concat(f)),P){case 1:zt(o,5);break;case 4:zt(o,10);break;case 3:zt(o,6);break;default:zt(o,2)}}}function sn(o,l){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*l}function zt(o,l){if(o.j.info("Error code "+l),l==2){var f=b(o.fb,o),_=o.Xa;const P=!_;_=new ut(_||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Gn(_,"https"),bn(_),P?bo(_.toString(),f):Co(_.toString(),f)}else Ne(2);o.G=0,o.l&&o.l.sa(l),Oo(o),Ai(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function Oo(o){if(o.G=0,o.ka=[],o.l){const l=ds(o.h);(l.length!=0||o.i.length!=0)&&(F(o.ka,l),F(o.ka,o.i),o.h.i.length=0,z(o.i),o.i.length=0),o.l.ra()}}function bs(o,l,f){var _=f instanceof ut?De(f):new ut(f);if(_.g!="")l&&(_.g=l+"."+_.g),Qn(_,_.s);else{var P=u.location;_=P.protocol,l=l?l+"."+P.hostname:P.hostname,P=+P.port;var D=new ut(null);_&&Gn(D,_),l&&(D.g=l),P&&Qn(D,P),f&&(D.l=f),_=D}return f=o.D,l=o.ya,f&&l&&ge(_,f,l),ge(_,"VER",o.la),er(o,_),_}function No(o,l,f){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new Ce(new Xn({eb:f})):new Ce(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vo(){}n=Vo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ci(){}Ci.prototype.g=function(o,l){return new dt(o,l)};function dt(o,l){Ue.call(this),this.g=new Es(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!G(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!G(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new tr(this)}$(dt,Ue),dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){Ii(this.g)},dt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=rs(o),o=f);l.i.push(new as(l.Ya++,o)),l.G==3&&Nr(l)},dt.prototype.N=function(){this.g.l=null,delete this.j,Ii(this.g),delete this.g,dt.aa.N.call(this)};function Cs(o){Wn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const f in l){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}$(Cs,Wn);function Rs(){hi.call(this),this.status=1}$(Rs,hi);function tr(o){this.g=o}$(tr,Vo),tr.prototype.ua=function(){Xe(this.g,"a")},tr.prototype.ta=function(o){Xe(this.g,new Cs(o))},tr.prototype.sa=function(o){Xe(this.g,new Rs)},tr.prototype.ra=function(){Xe(this.g,"b")},Ci.prototype.createWebChannel=Ci.prototype.g,dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,Vf=function(){return new Ci},Nf=function(){return di()},Of=en,jc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pi.NO_ERROR=0,pi.TIMEOUT=8,pi.HTTP_ERROR=6,ta=pi,mi.COMPLETE="complete",Df=mi,go.EventType=zn,zn.OPEN="a",zn.CLOSE="b",zn.ERROR="c",zn.MESSAGE="d",Ue.prototype.listen=Ue.prototype.K,Ns=go,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,kf=Ce}).apply(typeof zo<"u"?zo:typeof self<"u"?self:typeof window<"u"?window:{});const Ch="@firebase/firestore",Rh="4.7.17";/**
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
 */const Qr=new Da("@firebase/firestore");function ki(){return Qr.logLevel}function q(n,...e){if(Qr.logLevel<=he.DEBUG){const t=e.map(El);Qr.debug(`Firestore (${Gi}): ${n}`,...t)}}function Mn(n,...e){if(Qr.logLevel<=he.ERROR){const t=e.map(El);Qr.error(`Firestore (${Gi}): ${n}`,...t)}}function Fi(n,...e){if(Qr.logLevel<=he.WARN){const t=e.map(El);Qr.warn(`Firestore (${Gi}): ${n}`,...t)}}function El(n){if(typeof n=="string")return n;try{/**
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
 */function Z(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Lf(n,r,t)}function Lf(n,e,t){let r=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Mn(r),new Error(r)}function ye(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Lf(e,i,r)}function se(n,e){return n}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Jt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class xf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(st.UNAUTHENTICATED))}shutdown(){}}class nw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rw{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,t(d)):Promise.resolve();let s=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vn,e.enqueueRetryable(()=>i(this.currentUser))};const c=()=>{const d=s;e.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},u=d=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(d=>u(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?u(d):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vn)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string",31837,{l:r}),new xf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class iw{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class sw{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new iw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ow{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ct(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const c=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Sh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Sh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function aw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Mf(){return new TextEncoder}/**
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
 */class Ff{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=aw(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function le(n,e){return n<e?-1:n>e?1:0}function qc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return le(r,i);{const s=Mf(),c=cw(s.encode(Ph(n,t)),s.encode(Ph(e,t)));return c!==0?c:le(r,i)}}t+=r>65535?2:1}return le(n.length,e.length)}function Ph(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function cw(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return le(n[t],e[t]);return le(n.length,e.length)}function Ui(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const kh=-62135596800,Dh=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Dh);return new je(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<kh)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dh}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-kh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new je(0,0))}static max(){return new ne(new je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Oh="__name__";class cn{constructor(e,t,r){t===void 0?t=0:t>e.length&&Z(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Z(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=cn.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return le(e.length,t.length)}static compareSegments(e,t){const r=cn.isNumericId(e),i=cn.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?cn.extractNumericId(e).compare(cn.extractNumericId(t)):qc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Se extends cn{construct(e,t,r){return new Se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Se(t)}static emptyPath(){return new Se([])}}const lw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends cn{construct(e,t,r){return new et(e,t,r)}static isValidIdentifier(e){return lw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Oh}static keyField(){return new et([Oh])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new K(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new K(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,i+=2}else u==="`"?(c=!c,i++):u!=="."||c?(r+=u,i++):(s(),i++)}if(s(),c)throw new K(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(t)}static emptyPath(){return new et([])}}/**
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
 */const Ks=-1;function uw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new je(t+1,0):new je(t,r));return new mr(i,Y.empty(),e)}function hw(n){return new mr(n.readTime,n.key,Ks)}class mr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new mr(ne.min(),Y.empty(),Ks)}static max(){return new mr(ne.max(),Y.empty(),Ks)}}function dw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
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
 */const fw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qi(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==fw)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let i=0,s=0,c=!1;e.forEach(u=>{++i,u.next(()=>{++s,c&&s===i&&t()},d=>r(d))}),c=!0,s===i&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(i=>i?V.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new V((r,i)=>{const s=e.length,c=new Array(s);let u=0;for(let d=0;d<s;d++){const m=d;t(e[m]).next(y=>{c[m]=y,++u,u===s&&r(c)},y=>i(y))}})}static doWhile(e,t){return new V((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function mw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class La{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}La.le=-1;/**
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
 */const wl=-1;function xa(n){return n==null}function ga(n){return n===0&&1/n==-1/0}function gw(n){return typeof n=="number"&&Number.isInteger(n)&&!ga(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Uf="";function _w(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Nh(e)),e=yw(n.get(t),e);return Nh(e)}function yw(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Uf:t+="";break;default:t+=s}}return t}function Nh(n){return n+Uf+""}/**
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
 */function Vh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ti(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $f(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ke{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new ke(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wo(this.root,e,this.comparator,!0)}}class Wo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ze.RED,this.left=i??Ze.EMPTY,this.right=s??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ze(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lh(this.data.getIterator())}getIteratorFrom(e){return new Lh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new qe(this.comparator);return t.data=e,t}}class Lh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Gt([])}unionWith(e){let t=new qe(et.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Gt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ui(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Bf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Bf("Invalid base64 string: "+s):s}}(e);return new tt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let c=0;c<i.length;++c)s+=String.fromCharCode(i[c]);return s}(e);return new tt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const vw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(n){if(ye(!!n,39018),typeof n=="string"){let e=0;const t=vw.exec(n);if(ye(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _r(n){return typeof n=="string"?tt.fromBase64String(n):tt.fromUint8Array(n)}/**
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
 */const jf="server_timestamp",qf="__type__",Hf="__previous_value__",zf="__local_write_time__";function Tl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[qf])===null||t===void 0?void 0:t.stringValue)===jf}function Ma(n){const e=n.mapValue.fields[Hf];return Tl(e)?Ma(e):e}function Gs(n){const e=gr(n.mapValue.fields[zf].timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class Ew{constructor(e,t,r,i,s,c,u,d,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=c,this.autoDetectLongPolling=u,this.longPollingOptions=d,this.useFetchStreams=m,this.isUsingEmulator=y}}const _a="(default)";class Qs{constructor(e,t){this.projectId=e,this.database=t||_a}static empty(){return new Qs("","")}get isDefaultDatabase(){return this.database===_a}isEqual(e){return e instanceof Qs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Wf="__type__",ww="__max__",Ko={mapValue:{}},Kf="__vector__",ya="value";function yr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Tl(n)?4:Iw(n)?9007199254740991:Tw(n)?10:11:Z(28295,{value:n})}function pn(n,e){if(n===e)return!0;const t=yr(n);if(t!==yr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Gs(n).isEqual(Gs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const c=gr(i.timestampValue),u=gr(s.timestampValue);return c.seconds===u.seconds&&c.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return _r(i.bytesValue).isEqual(_r(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const c=Le(i.doubleValue),u=Le(s.doubleValue);return c===u?ga(c)===ga(u):isNaN(c)&&isNaN(u)}return!1}(n,e);case 9:return Ui(n.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(i,s){const c=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Vh(c)!==Vh(u))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(u[d]===void 0||!pn(c[d],u[d])))return!1;return!0}(n,e);default:return Z(52216,{left:n})}}function Ys(n,e){return(n.values||[]).find(t=>pn(t,e))!==void 0}function $i(n,e){if(n===e)return 0;const t=yr(n),r=yr(e);if(t!==r)return le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(s,c){const u=Le(s.integerValue||s.doubleValue),d=Le(c.integerValue||c.doubleValue);return u<d?-1:u>d?1:u===d?0:isNaN(u)?isNaN(d)?0:-1:1}(n,e);case 3:return xh(n.timestampValue,e.timestampValue);case 4:return xh(Gs(n),Gs(e));case 5:return qc(n.stringValue,e.stringValue);case 6:return function(s,c){const u=_r(s),d=_r(c);return u.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(s,c){const u=s.split("/"),d=c.split("/");for(let m=0;m<u.length&&m<d.length;m++){const y=le(u[m],d[m]);if(y!==0)return y}return le(u.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,c){const u=le(Le(s.latitude),Le(c.latitude));return u!==0?u:le(Le(s.longitude),Le(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Mh(n.arrayValue,e.arrayValue);case 10:return function(s,c){var u,d,m,y;const T=s.fields||{},b=c.fields||{},N=(u=T[ya])===null||u===void 0?void 0:u.arrayValue,$=(d=b[ya])===null||d===void 0?void 0:d.arrayValue,z=le(((m=N==null?void 0:N.values)===null||m===void 0?void 0:m.length)||0,((y=$==null?void 0:$.values)===null||y===void 0?void 0:y.length)||0);return z!==0?z:Mh(N,$)}(n.mapValue,e.mapValue);case 11:return function(s,c){if(s===Ko.mapValue&&c===Ko.mapValue)return 0;if(s===Ko.mapValue)return 1;if(c===Ko.mapValue)return-1;const u=s.fields||{},d=Object.keys(u),m=c.fields||{},y=Object.keys(m);d.sort(),y.sort();for(let T=0;T<d.length&&T<y.length;++T){const b=qc(d[T],y[T]);if(b!==0)return b;const N=$i(u[d[T]],m[y[T]]);if(N!==0)return N}return le(d.length,y.length)}(n.mapValue,e.mapValue);default:throw Z(23264,{Pe:t})}}function xh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=gr(n),r=gr(e),i=le(t.seconds,r.seconds);return i!==0?i:le(t.nanos,r.nanos)}function Mh(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=$i(t[i],r[i]);if(s)return s}return le(t.length,r.length)}function Bi(n){return Hc(n)}function Hc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=gr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return _r(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Hc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const c of r)s?s=!1:i+=",",i+=`${c}:${Hc(t.fields[c])}`;return i+"}"}(n.mapValue):Z(61005,{value:n})}function na(n){switch(yr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ma(n);return e?16+na(e):16;case 5:return 2*n.stringValue.length;case 6:return _r(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+na(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return ti(r.fields,(s,c)=>{i+=s.length+na(c)}),i}(n.mapValue);default:throw Z(13486,{value:n})}}function Fh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function zc(n){return!!n&&"integerValue"in n}function Il(n){return!!n&&"arrayValue"in n}function Uh(n){return!!n&&"nullValue"in n}function $h(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ra(n){return!!n&&"mapValue"in n}function Tw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Wf])===null||t===void 0?void 0:t.stringValue)===Kf}function Us(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ti(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Us(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Us(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Iw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ww}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ra(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(t)}setAll(e){let t=et.emptyPath(),r={},i=[];e.forEach((c,u)=>{if(!t.isImmediateParentOf(u)){const d=this.getFieldsMap(t);this.applyChanges(d,r,i),r={},i=[],t=u.popLast()}c?r[u.lastSegment()]=Us(c):i.push(u.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ra(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ra(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ti(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xt(Us(this.value))}}function Gf(n){const e=[];return ti(n.fields,(t,r)=>{const i=new et([t]);if(ra(r)){const s=Gf(r.mapValue).fields;if(s.length===0)e.push(i);else for(const c of s)e.push(i.child(c))}else e.push(i)}),new Gt(e)}/**
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
 */class ot{constructor(e,t,r,i,s,c,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=c,this.documentState=u}static newInvalidDocument(e){return new ot(e,0,ne.min(),ne.min(),ne.min(),xt.empty(),0)}static newFoundDocument(e,t,r,i){return new ot(e,1,t,ne.min(),r,i,0)}static newNoDocument(e,t){return new ot(e,2,t,ne.min(),ne.min(),xt.empty(),0)}static newUnknownDocument(e,t){return new ot(e,3,t,ne.min(),ne.min(),xt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class va{constructor(e,t){this.position=e,this.inclusive=t}}function Bh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],c=n.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(c.referenceValue),t.key):r=$i(c,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function jh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ea{constructor(e,t="asc"){this.field=e,this.dir=t}}function Aw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Qf{}class Fe extends Qf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Cw(e,t,r):t==="array-contains"?new Pw(e,r):t==="in"?new kw(e,r):t==="not-in"?new Dw(e,r):t==="array-contains-any"?new Ow(e,r):new Fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Rw(e,r):new Sw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison($i(t,this.value)):t!==null&&yr(this.value)===yr(t)&&this.matchesComparison($i(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends Qf{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Xt(e,t)}matches(e){return Yf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Yf(n){return n.op==="and"}function Xf(n){return bw(n)&&Yf(n)}function bw(n){for(const e of n.filters)if(e instanceof Xt)return!1;return!0}function Wc(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+Bi(n.value);if(Xf(n))return n.filters.map(e=>Wc(e)).join(",");{const e=n.filters.map(t=>Wc(t)).join(",");return`${n.op}(${e})`}}function Jf(n,e){return n instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.field.isEqual(i.field)&&pn(r.value,i.value)}(n,e):n instanceof Xt?function(r,i){return i instanceof Xt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,c,u)=>s&&Jf(c,i.filters[u]),!0):!1}(n,e):void Z(19439)}function Zf(n){return n instanceof Fe?function(t){return`${t.field.canonicalString()} ${t.op} ${Bi(t.value)}`}(n):n instanceof Xt?function(t){return t.op.toString()+" {"+t.getFilters().map(Zf).join(" ,")+"}"}(n):"Filter"}class Cw extends Fe{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class Rw extends Fe{constructor(e,t){super(e,"in",t),this.keys=ep("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Sw extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=ep("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ep(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Y.fromName(r.referenceValue))}class Pw extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Il(t)&&Ys(t.arrayValue,this.value)}}class kw extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ys(this.value.arrayValue,t)}}class Dw extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ys(this.value.arrayValue,t)}}class Ow extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Il(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ys(this.value.arrayValue,r))}}/**
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
 */class Nw{constructor(e,t=null,r=[],i=[],s=null,c=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=c,this.endAt=u,this.Ie=null}}function qh(n,e=null,t=[],r=[],i=null,s=null,c=null){return new Nw(n,e,t,r,i,s,c)}function Al(n){const e=se(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Wc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Bi(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Bi(r)).join(",")),e.Ie=t}return e.Ie}function bl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Aw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Jf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!jh(n.startAt,e.startAt)&&jh(n.endAt,e.endAt)}function Kc(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class io{constructor(e,t=null,r=[],i=[],s=null,c="F",u=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=c,this.startAt=u,this.endAt=d,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Vw(n,e,t,r,i,s,c,u){return new io(n,e,t,r,i,s,c,u)}function Cl(n){return new io(n)}function Hh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function tp(n){return n.collectionGroup!==null}function $s(n){const e=se(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let u=new qe(et.comparator);return c.filters.forEach(d=>{d.getFlattenedFilters().forEach(m=>{m.isInequality()&&(u=u.add(m.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new Ea(s,r))}),t.has(et.keyField().canonicalString())||e.Ee.push(new Ea(et.keyField(),r))}return e.Ee}function un(n){const e=se(n);return e.de||(e.de=Lw(e,$s(n))),e.de}function Lw(n,e){if(n.limitType==="F")return qh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ea(i.field,s)});const t=n.endAt?new va(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new va(n.startAt.position,n.startAt.inclusive):null;return qh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Gc(n,e){const t=n.filters.concat([e]);return new io(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Qc(n,e,t){return new io(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fa(n,e){return bl(un(n),un(e))&&n.limitType===e.limitType}function np(n){return`${Al(un(n))}|lt:${n.limitType}`}function Di(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Zf(i)).join(", ")}]`),xa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Bi(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Bi(i)).join(",")),`Target(${r})`}(un(n))}; limitType=${n.limitType})`}function Ua(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of $s(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(c,u,d){const m=Bh(c,u,d);return c.inclusive?m<=0:m<0}(r.startAt,$s(r),i)||r.endAt&&!function(c,u,d){const m=Bh(c,u,d);return c.inclusive?m>=0:m>0}(r.endAt,$s(r),i))}(n,e)}function xw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rp(n){return(e,t)=>{let r=!1;for(const i of $s(n)){const s=Mw(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Mw(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):function(s,c,u){const d=c.data.field(s),m=u.data.field(s);return d!==null&&m!==null?$i(d,m):Z(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:n.dir})}}/**
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
 */class ni{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ti(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return $f(this.inner)}size(){return this.innerSize}}/**
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
 */const Fw=new ke(Y.comparator);function Fn(){return Fw}const ip=new ke(Y.comparator);function Vs(...n){let e=ip;for(const t of n)e=e.insert(t.key,t);return e}function sp(n){let e=ip;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function zr(){return Bs()}function op(){return Bs()}function Bs(){return new ni(n=>n.toString(),(n,e)=>n.isEqual(e))}const Uw=new ke(Y.comparator),$w=new qe(Y.comparator);function de(...n){let e=$w;for(const t of n)e=e.add(t);return e}const Bw=new qe(le);function jw(){return Bw}/**
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
 */function Rl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ga(e)?"-0":e}}function ap(n){return{integerValue:""+n}}function qw(n,e){return gw(e)?ap(e):Rl(n,e)}/**
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
 */class $a{constructor(){this._=void 0}}function Hw(n,e,t){return n instanceof wa?function(i,s){const c={fields:{[qf]:{stringValue:jf},[zf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Tl(s)&&(s=Ma(s)),s&&(c.fields[Hf]=s),{mapValue:c}}(t,e):n instanceof Xs?lp(n,e):n instanceof Js?up(n,e):function(i,s){const c=cp(i,s),u=zh(c)+zh(i.Re);return zc(c)&&zc(i.Re)?ap(u):Rl(i.serializer,u)}(n,e)}function zw(n,e,t){return n instanceof Xs?lp(n,e):n instanceof Js?up(n,e):t}function cp(n,e){return n instanceof Ta?function(r){return zc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class wa extends $a{}class Xs extends $a{constructor(e){super(),this.elements=e}}function lp(n,e){const t=hp(e);for(const r of n.elements)t.some(i=>pn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Js extends $a{constructor(e){super(),this.elements=e}}function up(n,e){let t=hp(e);for(const r of n.elements)t=t.filter(i=>!pn(i,r));return{arrayValue:{values:t}}}class Ta extends $a{constructor(e,t){super(),this.serializer=e,this.Re=t}}function zh(n){return Le(n.integerValue||n.doubleValue)}function hp(n){return Il(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ww(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Xs&&i instanceof Xs||r instanceof Js&&i instanceof Js?Ui(r.elements,i.elements,pn):r instanceof Ta&&i instanceof Ta?pn(r.Re,i.Re):r instanceof wa&&i instanceof wa}(n.transform,e.transform)}class Kw{constructor(e,t){this.version=e,this.transformResults=t}}class hn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ia(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ba{}function dp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Sl(n.key,hn.none()):new so(n.key,n.data,hn.none());{const t=n.data,r=xt.empty();let i=new qe(et.comparator);for(let s of e.fields)if(!i.has(s)){let c=t.field(s);c===null&&s.length>1&&(s=s.popLast(),c=t.field(s)),c===null?r.delete(s):r.set(s,c),i=i.add(s)}return new ri(n.key,r,new Gt(i.toArray()),hn.none())}}function Gw(n,e,t){n instanceof so?function(i,s,c){const u=i.value.clone(),d=Kh(i.fieldTransforms,s,c.transformResults);u.setAll(d),s.convertToFoundDocument(c.version,u).setHasCommittedMutations()}(n,e,t):n instanceof ri?function(i,s,c){if(!ia(i.precondition,s))return void s.convertToUnknownDocument(c.version);const u=Kh(i.fieldTransforms,s,c.transformResults),d=s.data;d.setAll(fp(i)),d.setAll(u),s.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):function(i,s,c){s.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function js(n,e,t,r){return n instanceof so?function(s,c,u,d){if(!ia(s.precondition,c))return u;const m=s.value.clone(),y=Gh(s.fieldTransforms,d,c);return m.setAll(y),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof ri?function(s,c,u,d){if(!ia(s.precondition,c))return u;const m=Gh(s.fieldTransforms,d,c),y=c.data;return y.setAll(fp(s)),y.setAll(m),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(s,c,u){return ia(s.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):u}(n,e,t)}function Qw(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=cp(r.transform,i||null);s!=null&&(t===null&&(t=xt.empty()),t.set(r.field,s))}return t||null}function Wh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ui(r,i,(s,c)=>Ww(s,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class so extends Ba{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ri extends Ba{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function fp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Kh(n,e,t){const r=new Map;ye(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const s=n[i],c=s.transform,u=e.data.field(s.field);r.set(s.field,zw(c,u,t[i]))}return r}function Gh(n,e,t){const r=new Map;for(const i of n){const s=i.transform,c=t.data.field(i.field);r.set(i.field,Hw(s,c,e))}return r}class Sl extends Ba{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yw extends Ba{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Xw{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Gw(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=js(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=js(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=op();return this.mutations.forEach(i=>{const s=e.get(i.key),c=s.overlayedDocument;let u=this.applyToLocalView(c,s.mutatedFields);u=t.has(i.key)?null:u;const d=dp(c,u);d!==null&&r.set(i.key,d),c.isValidDocument()||c.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),de())}isEqual(e){return this.batchId===e.batchId&&Ui(this.mutations,e.mutations,(t,r)=>Wh(t,r))&&Ui(this.baseMutations,e.baseMutations,(t,r)=>Wh(t,r))}}class Pl{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ye(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return Uw}();const s=e.mutations;for(let c=0;c<s.length;c++)i=i.insert(s[c].key,r[c].version);return new Pl(e,t,r,i)}}/**
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
 */class Jw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Zw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Me,me;function eT(n){switch(n){case L.OK:return Z(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Z(15467,{code:n})}}function pp(n){if(n===void 0)return Mn("GRPC error has no .code"),L.UNKNOWN;switch(n){case Me.OK:return L.OK;case Me.CANCELLED:return L.CANCELLED;case Me.UNKNOWN:return L.UNKNOWN;case Me.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Me.INTERNAL:return L.INTERNAL;case Me.UNAVAILABLE:return L.UNAVAILABLE;case Me.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Me.NOT_FOUND:return L.NOT_FOUND;case Me.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Me.ABORTED:return L.ABORTED;case Me.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Me.DATA_LOSS:return L.DATA_LOSS;default:return Z(39323,{code:n})}}(me=Me||(Me={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const tT=new dr([4294967295,4294967295],0);function Qh(n){const e=Mf().encode(n),t=new Pf;return t.update(e),new Uint8Array(t.digest())}function Yh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new dr([t,r],0),new dr([i,s],0)]}class kl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ls(`Invalid padding: ${t}`);if(r<0)throw new Ls(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ls(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ls(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=dr.fromNumber(this.pe)}we(e,t,r){let i=e.add(t.multiply(dr.fromNumber(r)));return i.compare(tT)===1&&(i=new dr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Qh(e),[r,i]=Yh(t);for(let s=0;s<this.hashCount;s++){const c=this.we(r,i,s);if(!this.be(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),c=new kl(s,i,t);return r.forEach(u=>c.insert(u)),c}insert(e){if(this.pe===0)return;const t=Qh(e),[r,i]=Yh(t);for(let s=0;s<this.hashCount;s++){const c=this.we(r,i,s);this.Se(c)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ja{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,oo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ja(ne.min(),i,new ke(le),Fn(),de())}}class oo{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new oo(r,t,de(),de(),de())}}/**
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
 */class sa{constructor(e,t,r,i){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=i}}class mp{constructor(e,t){this.targetId=e,this.Ce=t}}class gp{constructor(e,t,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Xh{constructor(){this.Fe=0,this.Me=Jh(),this.xe=tt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=de(),t=de(),r=de();return this.Me.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Z(38017,{changeType:s})}}),new oo(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Jh()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ye(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class nT{constructor(e){this.ze=e,this.je=new Map,this.He=Fn(),this.Je=Go(),this.Ye=Go(),this.Ze=new ke(le)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}ot(e){const t=e.targetId,r=e.Ce.count,i=this._t(t);if(i){const s=i.target;if(Kc(s))if(r===0){const c=new Y(s.path);this.tt(t,c,ot.newNoDocument(c,ne.min()))}else ye(r===1,20013,{expectedCount:r});else{const c=this.ut(t);if(c!==r){const u=this.ct(e),d=u?this.lt(u,e,c):1;if(d!==0){this.st(t);const m=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,m)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let c,u;try{c=_r(r).toUint8Array()}catch(d){if(d instanceof Bf)return Fi("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{u=new kl(c,i,s)}catch(d){return Fi(d instanceof Ls?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return u.pe===0?null:u}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const c=this.ze.Pt(),u=`projects/${c.projectId}/databases/${c.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.tt(t,s,null),i++)}),i}It(e){const t=new Map;this.je.forEach((s,c)=>{const u=this._t(c);if(u){if(s.current&&Kc(u.target)){const d=new Y(u.target.path);this.Et(d).has(c)||this.dt(c,d)||this.tt(c,d,ot.newNoDocument(d,e))}s.Le&&(t.set(c,s.qe()),s.Qe())}});let r=de();this.Ye.forEach((s,c)=>{let u=!0;c.forEachWhile(d=>{const m=this._t(d);return!m||m.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.He.forEach((s,c)=>c.setReadTime(e));const i=new ja(e,t,this.Ze,this.He,r);return this.He=Fn(),this.Je=Go(),this.Ye=Go(),this.Ze=new ke(le),i}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,t)?i.$e(t,1):i.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Xh,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new qe(le),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new qe(le),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Xh),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Go(){return new ke(Y.comparator)}function Jh(){return new ke(Y.comparator)}const rT={asc:"ASCENDING",desc:"DESCENDING"},iT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sT={and:"AND",or:"OR"};class oT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yc(n,e){return n.useProto3Json||xa(e)?e:{value:e}}function Ia(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _p(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function aT(n,e){return Ia(n,e.toTimestamp())}function dn(n){return ye(!!n,49232),ne.fromTimestamp(function(t){const r=gr(t);return new je(r.seconds,r.nanos)}(n))}function Dl(n,e){return Xc(n,e).canonicalString()}function Xc(n,e){const t=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function yp(n){const e=Se.fromString(n);return ye(Ip(e),10190,{key:e.toString()}),e}function Jc(n,e){return Dl(n.databaseId,e.path)}function Rc(n,e){const t=yp(e);if(t.get(1)!==n.databaseId.projectId)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(Ep(t))}function vp(n,e){return Dl(n.databaseId,e)}function cT(n){const e=yp(n);return e.length===4?Se.emptyPath():Ep(e)}function Zc(n){return new Se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ep(n){return ye(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Zh(n,e,t){return{name:Jc(n,e),fields:t.value.mapValue.fields}}function lT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Z(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(m,y){return m.useProto3Json?(ye(y===void 0||typeof y=="string",58123),tt.fromBase64String(y||"")):(ye(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),tt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,u=c&&function(m){const y=m.code===void 0?L.UNKNOWN:pp(m.code);return new K(y,m.message||"")}(c);t=new gp(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rc(n,r.document.name),s=dn(r.document.updateTime),c=r.document.createTime?dn(r.document.createTime):ne.min(),u=new xt({mapValue:{fields:r.document.fields}}),d=ot.newFoundDocument(i,s,c,u),m=r.targetIds||[],y=r.removedTargetIds||[];t=new sa(m,y,d.key,d)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rc(n,r.document),s=r.readTime?dn(r.readTime):ne.min(),c=ot.newNoDocument(i,s),u=r.removedTargetIds||[];t=new sa([],u,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rc(n,r.document),s=r.removedTargetIds||[];t=new sa([],s,i,null)}else{if(!("filter"in e))return Z(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,c=new Zw(i,s),u=r.targetId;t=new mp(u,c)}}return t}function uT(n,e){let t;if(e instanceof so)t={update:Zh(n,e.key,e.value)};else if(e instanceof Sl)t={delete:Jc(n,e.key)};else if(e instanceof ri)t={update:Zh(n,e.key,e.data),updateMask:vT(e.fieldMask)};else{if(!(e instanceof Yw))return Z(16599,{ft:e.type});t={verify:Jc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,c){const u=c.transform;if(u instanceof wa)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Xs)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Js)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ta)return{fieldPath:c.field.canonicalString(),increment:u.Re};throw Z(20930,{transform:c.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:aT(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z(27497)}(n,e.precondition)),t}function hT(n,e){return n&&n.length>0?(ye(e!==void 0,14353),n.map(t=>function(i,s){let c=i.updateTime?dn(i.updateTime):dn(s);return c.isEqual(ne.min())&&(c=dn(s)),new Kw(c,i.transformResults||[])}(t,e))):[]}function dT(n,e){return{documents:[vp(n,e.path)]}}function fT(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vp(n,i);const s=function(m){if(m.length!==0)return Tp(Xt.create(m,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const c=function(m){if(m.length!==0)return m.map(y=>function(b){return{field:Oi(b.field),direction:gT(b.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const u=Yc(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{gt:t,parent:i}}function pT(n){let e=cT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ye(r===1,65062);const y=t.from[0];y.allDescendants?i=y.collectionId:e=e.child(y.collectionId)}let s=[];t.where&&(s=function(T){const b=wp(T);return b instanceof Xt&&Xf(b)?b.getFilters():[b]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(b=>function($){return new Ea(Ni($.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(b))}(t.orderBy));let u=null;t.limit&&(u=function(T){let b;return b=typeof T=="object"?T.value:T,xa(b)?null:b}(t.limit));let d=null;t.startAt&&(d=function(T){const b=!!T.before,N=T.values||[];return new va(N,b)}(t.startAt));let m=null;return t.endAt&&(m=function(T){const b=!T.before,N=T.values||[];return new va(N,b)}(t.endAt)),Vw(e,i,c,s,u,"F",d,m)}function mT(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ni(t.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ni(t.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ni(t.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Ni(t.unaryFilter.field);return Fe.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(n):n.fieldFilter!==void 0?function(t){return Fe.create(Ni(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Xt.create(t.compositeFilter.filters.map(r=>wp(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(t.compositeFilter.op))}(n):Z(30097,{filter:n})}function gT(n){return rT[n]}function _T(n){return iT[n]}function yT(n){return sT[n]}function Oi(n){return{fieldPath:n.canonicalString()}}function Ni(n){return et.fromServerFormat(n.fieldPath)}function Tp(n){return n instanceof Fe?function(t){if(t.op==="=="){if($h(t.value))return{unaryFilter:{field:Oi(t.field),op:"IS_NAN"}};if(Uh(t.value))return{unaryFilter:{field:Oi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($h(t.value))return{unaryFilter:{field:Oi(t.field),op:"IS_NOT_NAN"}};if(Uh(t.value))return{unaryFilter:{field:Oi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oi(t.field),op:_T(t.op),value:t.value}}}(n):n instanceof Xt?function(t){const r=t.getFilters().map(i=>Tp(i));return r.length===1?r[0]:{compositeFilter:{op:yT(t.op),filters:r}}}(n):Z(54877,{filter:n})}function vT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ip(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class lr{constructor(e,t,r,i,s=ne.min(),c=ne.min(),u=tt.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=u,this.expectedCount=d}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ET{constructor(e){this.wt=e}}function wT(n){const e=pT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qc(e,e.limit,"L"):e}/**
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
 */class TT{constructor(){this.Cn=new IT}addToCollectionParentIndex(e,t){return this.Cn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(mr.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class IT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new qe(Se.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(Se.comparator)).toArray()}}/**
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
 */const ed={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ap=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(Ap,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
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
 */const td="LruGarbageCollector",AT=1048576;function nd([n,e],[t,r]){const i=le(n,t);return i===0?le(e,r):i}class bT{constructor(e){this.Er=e,this.buffer=new qe(nd),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();nd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class CT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){q(td,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yi(t)?q(td,"Ignoring IndexedDB error during garbage collection: ",t):await Qi(t)}await this.mr(3e5)})}}class RT{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(La.le);const r=new bT(t);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(ed)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ed):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,i,s,c,u,d,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,c=Date.now(),this.nthSequenceNumber(e,i))).next(T=>(r=T,u=Date.now(),this.removeTargets(e,r,t))).next(T=>(s=T,d=Date.now(),this.removeOrphanedDocuments(e,r))).next(T=>(m=Date.now(),ki()<=he.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${i} in `+(u-c)+`ms
	Removed ${s} targets in `+(d-u)+`ms
	Removed ${T} documents in `+(m-d)+`ms
Total Duration: ${m-y}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:T})))}}function ST(n,e){return new RT(n,e)}/**
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
 */class PT{constructor(){this.changes=new ni(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class kT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class DT{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&js(r.mutation,i,Gt.empty(),je.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,t,r=de()){const i=zr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let c=Vs();return s.forEach((u,d)=>{c=c.insert(u,d.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const r=zr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,de()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((c,u)=>{t.set(c,u)})})}computeViews(e,t,r,i){let s=Fn();const c=Bs(),u=function(){return Bs()}();return t.forEach((d,m)=>{const y=r.get(m.key);i.has(m.key)&&(y===void 0||y.mutation instanceof ri)?s=s.insert(m.key,m):y!==void 0?(c.set(m.key,y.mutation.getFieldMask()),js(y.mutation,m,y.mutation.getFieldMask(),je.now())):c.set(m.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(d=>(d.forEach((m,y)=>c.set(m,y)),t.forEach((m,y)=>{var T;return u.set(m,new kT(y,(T=c.get(m))!==null&&T!==void 0?T:null))}),u))}recalculateAndSaveOverlays(e,t){const r=Bs();let i=new ke((c,u)=>c-u),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const u of c)u.keys().forEach(d=>{const m=t.get(d);if(m===null)return;let y=r.get(d)||Gt.empty();y=u.applyToLocalView(m,y),r.set(d,y);const T=(i.get(u.batchId)||de()).add(d);i=i.insert(u.batchId,T)})}).next(()=>{const c=[],u=i.getReverseIterator();for(;u.hasNext();){const d=u.getNext(),m=d.key,y=d.value,T=op();y.forEach(b=>{if(!s.has(b)){const N=dp(t.get(b),r.get(b));N!==null&&T.set(b,N),s=s.add(b)}}),c.push(this.documentOverlayCache.saveOverlays(e,m,T))}return V.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(c){return Y.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const c=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):V.resolve(zr());let u=Ks,d=s;return c.next(m=>V.forEach(m,(y,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),s.get(y)?V.resolve():this.remoteDocumentCache.getEntry(e,y).next(b=>{d=d.insert(y,b)}))).next(()=>this.populateOverlays(e,m,s)).next(()=>this.computeViews(e,d,m,de())).next(y=>({batchId:u,changes:sp(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(r=>{let i=Vs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let c=Vs();return this.indexManager.getCollectionParents(e,s).next(u=>V.forEach(u,d=>{const m=function(T,b){return new io(b,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,d.child(s));return this.getDocumentsMatchingCollectionQuery(e,m,r,i).next(y=>{y.forEach((T,b)=>{c=c.insert(T,b)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(c=>(s=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(c=>{s.forEach((d,m)=>{const y=m.getKey();c.get(y)===null&&(c=c.insert(y,ot.newInvalidDocument(y)))});let u=Vs();return c.forEach((d,m)=>{const y=s.get(d);y!==void 0&&js(y.mutation,m,Gt.empty(),je.now()),Ua(t,m)&&(u=u.insert(d,m))}),u})}}/**
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
 */class OT{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return V.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:dn(i.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(i){return{name:i.name,query:wT(i.bundledQuery),readTime:dn(i.readTime)}}(t)),V.resolve()}}/**
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
 */class NT{constructor(){this.overlays=new ke(Y.comparator),this.Qr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=zr();return V.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.St(e,t,s)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Qr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const i=zr(),s=t.length+1,c=new Y(t.child("")),u=this.overlays.getIteratorFrom(c);for(;u.hasNext();){const d=u.getNext().value,m=d.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===s&&d.largestBatchId>r&&i.set(d.getKey(),d)}return V.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ke((m,y)=>m-y);const c=this.overlays.getIterator();for(;c.hasNext();){const m=c.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=s.get(m.largestBatchId);y===null&&(y=zr(),s=s.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const u=zr(),d=s.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((m,y)=>u.set(m,y)),!(u.size()>=i)););return V.resolve(u)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new Jw(t,r));let s=this.Qr.get(t);s===void 0&&(s=de(),this.Qr.set(t,s)),this.Qr.set(t,s.add(r.key))}}/**
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
 */class VT{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class Ol{constructor(){this.$r=new qe(Qe.Ur),this.Kr=new qe(Qe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new Qe(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new Qe(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new Y(new Se([])),r=new Qe(t,e),i=new Qe(t,e+1),s=[];return this.Kr.forEachInRange([r,i],c=>{this.zr(c),s.push(c.key)}),s}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Y(new Se([])),r=new Qe(t,e),i=new Qe(t,e+1);let s=de();return this.Kr.forEachInRange([r,i],c=>{s=s.add(c.key)}),s}containsKey(e){const t=new Qe(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Y.comparator(e.key,t.key)||le(e.Zr,t.Zr)}static Wr(e,t){return le(e.Zr,t.Zr)||Y.comparator(e.key,t.key)}}/**
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
 */class LT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new qe(Qe.Ur)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Xw(s,t,r,i);this.mutationQueue.push(c);for(const u of i)this.Xr=this.Xr.add(new Qe(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return V.resolve(c)}lookupMutationBatch(e,t){return V.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ti(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?wl:this.nr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Qe(t,0),i=new Qe(t,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([r,i],c=>{const u=this.ei(c.Zr);s.push(u)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new qe(le);return t.forEach(i=>{const s=new Qe(i,0),c=new Qe(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([s,c],u=>{r=r.add(u.Zr)})}),V.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const c=new Qe(new Y(s),0);let u=new qe(le);return this.Xr.forEachWhile(d=>{const m=d.key.path;return!!r.isPrefixOf(m)&&(m.length===i&&(u=u.add(d.Zr)),!0)},c),V.resolve(this.ni(u))}ni(e){const t=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ye(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return V.forEach(t.mutations,i=>{const s=new Qe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new Qe(t,0),i=this.Xr.firstAfterOrEqual(r);return V.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class xT{constructor(e){this.ii=e,this.docs=function(){return new ke(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,c=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(t))}getEntries(e,t){let r=Fn();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Fn();const c=t.path,u=new Y(c.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(u);for(;d.hasNext();){const{key:m,value:{document:y}}=d.getNext();if(!c.isPrefixOf(m.path))break;m.path.length>c.length+1||dw(hw(y),r)<=0||(i.has(y.key)||Ua(t,y))&&(s=s.insert(y.key,y.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Z(9500)}si(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new MT(this)}getSize(e){return V.resolve(this.size)}}class MT extends PT{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class FT{constructor(e){this.persistence=e,this.oi=new ni(t=>Al(t),bl),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this._i=0,this.ai=new Ol,this.targetCount=0,this.ui=ji.cr()}forEachTarget(e,t){return this.oi.forEach((r,i)=>t(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),V.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ji(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Tr(t),V.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.oi.forEach((c,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.oi.delete(c),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(c=>{s.push(i.markPotentiallyOrphaned(e,c))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.ai.containsKey(t))}}/**
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
 */class bp{constructor(e,t){this.ci={},this.overlays={},this.li=new La(0),this.hi=!1,this.hi=!0,this.Pi=new VT,this.referenceDelegate=e(this),this.Ti=new FT(this),this.indexManager=new TT,this.remoteDocumentCache=function(i){return new xT(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new ET(t),this.Ei=new OT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new NT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new LT(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const i=new UT(this.li.next());return this.referenceDelegate.di(),r(i).next(s=>this.referenceDelegate.Ai(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ri(e,t){return V.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class UT extends pw{constructor(e){super(),this.currentSequenceNumber=e}}class Nl{constructor(e){this.persistence=e,this.Vi=new Ol,this.mi=null}static fi(e){return new Nl(e)}get gi(){if(this.mi)return this.mi;throw Z(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.gi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.gi,r=>{const i=Y.fromPath(r);return this.pi(e,i).next(s=>{s||t.removeEntry(i,ne.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return V.or([()=>V.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Aa{constructor(e,t){this.persistence=e,this.yi=new ni(r=>_w(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=ST(this,t)}static fi(e,t){return new Aa(e,t)}di(){}Ai(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}br(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return V.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(s=>s?V.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.si(e,c=>this.Dr(e,c,t).next(u=>{u||(r++,s.removeEntry(c,ne.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),V.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=na(e.data.value)),t}Dr(e,t,r){return V.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.yi.get(t);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Vl{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ds=r,this.As=i}static Rs(e,t){let r=de(),i=de();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vl(e,t.fromCache,r,i)}}/**
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
 */class $T{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BT{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return v_()?8:mw(at())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ws(e,t).next(c=>{s.result=c}).next(()=>{if(!s.result)return this.bs(e,t,i,r).next(c=>{s.result=c})}).next(()=>{if(s.result)return;const c=new $T;return this.Ss(e,t,c).next(u=>{if(s.result=u,this.fs)return this.Ds(e,t,c,u.size)})}).next(()=>s.result)}Ds(e,t,r,i){return r.documentReadCount<this.gs?(ki()<=he.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Di(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),V.resolve()):(ki()<=he.DEBUG&&q("QueryEngine","Query:",Di(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(ki()<=he.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Di(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(t))):V.resolve())}ws(e,t){if(Hh(t))return V.resolve(null);let r=un(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Qc(t,null,"F"),r=un(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const c=de(...s);return this.ys.getDocuments(e,c).next(u=>this.indexManager.getMinOffset(e,r).next(d=>{const m=this.vs(t,u);return this.Cs(t,m,c,d.readTime)?this.ws(e,Qc(t,null,"F")):this.Fs(e,m,t,d)}))})))}bs(e,t,r,i){return Hh(t)||i.isEqual(ne.min())?V.resolve(null):this.ys.getDocuments(e,r).next(s=>{const c=this.vs(t,s);return this.Cs(t,c,r,i)?V.resolve(null):(ki()<=he.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Di(t)),this.Fs(e,c,t,uw(i,Ks)).next(u=>u))})}vs(e,t){let r=new qe(rp(e));return t.forEach((i,s)=>{Ua(e,s)&&(r=r.add(s))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,t,r){return ki()<=he.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Di(t)),this.ys.getDocumentsMatchingQuery(e,t,mr.min(),r)}Fs(e,t,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(c=>{s=s.insert(c.key,c)}),s))}}/**
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
 */const Ll="LocalStore",jT=3e8;class qT{constructor(e,t,r,i){this.persistence=e,this.Ms=t,this.serializer=i,this.xs=new ke(le),this.Os=new ni(s=>Al(s),bl),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DT(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function HT(n,e,t,r){return new qT(n,e,t,r)}async function Cp(n,e){const t=se(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const c=[],u=[];let d=de();for(const m of i){c.push(m.batchId);for(const y of m.mutations)d=d.add(y.key)}for(const m of s){u.push(m.batchId);for(const y of m.mutations)d=d.add(y.key)}return t.localDocuments.getDocuments(r,d).next(m=>({ks:m,removedBatchIds:c,addedBatchIds:u}))})})}function zT(n,e){const t=se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Bs.newChangeBuffer({trackRemovals:!0});return function(u,d,m,y){const T=m.batch,b=T.keys();let N=V.resolve();return b.forEach($=>{N=N.next(()=>y.getEntry(d,$)).next(z=>{const F=m.docVersions.get($);ye(F!==null,48541),z.version.compareTo(F)<0&&(T.applyToRemoteDocument(z,m),z.isValidDocument()&&(z.setReadTime(m.commitVersion),y.addEntry(z)))})}),N.next(()=>u.mutationQueue.removeMutationBatch(d,T))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let d=de();for(let m=0;m<u.mutationResults.length;++m)u.mutationResults[m].transformResults.length>0&&(d=d.add(u.batch.mutations[m].key));return d}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Rp(n){const e=se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function WT(n,e){const t=se(n),r=e.snapshotVersion;let i=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});i=t.xs;const u=[];e.targetChanges.forEach((y,T)=>{const b=i.get(T);if(!b)return;u.push(t.Ti.removeMatchingKeys(s,y.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(s,y.addedDocuments,T)));let N=b.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(tt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):y.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(y.resumeToken,r)),i=i.insert(T,N),function(z,F,ee){return z.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=jT?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(b,N,y)&&u.push(t.Ti.updateTargetData(s,N))});let d=Fn(),m=de();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,y))}),u.push(KT(s,c,e.documentUpdates).next(y=>{d=y.qs,m=y.Qs})),!r.isEqual(ne.min())){const y=t.Ti.getLastRemoteSnapshotVersion(s).next(T=>t.Ti.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(y)}return V.waitFor(u).next(()=>c.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,d,m)).next(()=>d)}).then(s=>(t.xs=i,s))}function KT(n,e,t){let r=de(),i=de();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let c=Fn();return t.forEach((u,d)=>{const m=s.get(u);d.isFoundDocument()!==m.isFoundDocument()&&(i=i.add(u)),d.isNoDocument()&&d.version.isEqual(ne.min())?(e.removeEntry(u,d.readTime),c=c.insert(u,d)):!m.isValidDocument()||d.version.compareTo(m.version)>0||d.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(d),c=c.insert(u,d)):q(Ll,"Ignoring outdated watch update for ",u,". Current version:",m.version," Watch version:",d.version)}),{qs:c,Qs:i}})}function GT(n,e){const t=se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=wl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QT(n,e){const t=se(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ti.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):t.Ti.allocateTargetId(r).next(c=>(i=new lr(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function el(n,e,t){const r=se(n),i=r.xs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,c=>r.persistence.referenceDelegate.removeTarget(c,i))}catch(c){if(!Yi(c))throw c;q(Ll,`Failed to update sequence numbers for target ${e}: ${c}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function rd(n,e,t){const r=se(n);let i=ne.min(),s=de();return r.persistence.runTransaction("Execute query","readwrite",c=>function(d,m,y){const T=se(d),b=T.Os.get(y);return b!==void 0?V.resolve(T.xs.get(b)):T.Ti.getTargetData(m,y)}(r,c,un(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(c,u.targetId).next(d=>{s=d})}).next(()=>r.Ms.getDocumentsMatchingQuery(c,e,t?i:ne.min(),t?s:de())).next(u=>(YT(r,xw(e),u),{documents:u,$s:s})))}function YT(n,e,t){let r=n.Ns.get(e)||ne.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ns.set(e,r)}class id{constructor(){this.activeTargetIds=jw()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XT{constructor(){this.xo=new id,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new id,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class JT{No(e){}shutdown(){}}/**
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
 */const sd="ConnectivityMonitor";class od{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){q(sd,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){q(sd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qo=null;function tl(){return Qo===null?Qo=function(){return 268435456+Math.round(2147483648*Math.random())}():Qo++,"0x"+Qo.toString(16)}/**
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
 */const Sc="RestConnection",ZT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eI{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===_a?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,t,r,i,s){const c=tl(),u=this.jo(e,t.toUriEncodedString());q(Sc,`Sending RPC '${e}' ${c}:`,u,r);const d={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(d,i,s);const{host:m}=new URL(u),y=zi(m);return this.Jo(e,u,d,r,y).then(T=>(q(Sc,`Received RPC '${e}' ${c}: `,T),T),T=>{throw Fi(Sc,`RPC '${e}' ${c} failed with error: `,T,"url: ",u,"request:",r),T})}Yo(e,t,r,i,s,c){return this.zo(e,t,r,i,s)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}jo(e,t){const r=ZT[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class tI{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const it="WebChannelConnection";class nI extends eI{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,s){const c=tl();return new Promise((u,d)=>{const m=new kf;m.setWithCredentials(!0),m.listenOnce(Df.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case ta.NO_ERROR:const T=m.getResponseJson();q(it,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),u(T);break;case ta.TIMEOUT:q(it,`RPC '${e}' ${c} timed out`),d(new K(L.DEADLINE_EXCEEDED,"Request time out"));break;case ta.HTTP_ERROR:const b=m.getStatus();if(q(it,`RPC '${e}' ${c} failed with status:`,b,"response text:",m.getResponseText()),b>0){let N=m.getResponseJson();Array.isArray(N)&&(N=N[0]);const $=N==null?void 0:N.error;if($&&$.status&&$.message){const z=function(ee){const G=ee.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(G)>=0?G:L.UNKNOWN}($.status);d(new K(z,$.message))}else d(new K(L.UNKNOWN,"Server responded with status "+m.getStatus()))}else d(new K(L.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{h_:e,streamId:c,P_:m.getLastErrorCode(),T_:m.getLastError()})}}finally{q(it,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(i);q(it,`RPC '${e}' ${c} sending request:`,i),m.send(t,"POST",y,r,15)})}I_(e,t,r){const i=tl(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Vf(),u=Nf(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(d.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Ho(d.initMessageHeaders,t,r),d.encodeInitMessageHeaders=!0;const y=s.join("");q(it,`Creating RPC '${e}' stream ${i}: ${y}`,d);const T=c.createWebChannel(y,d);this.E_(T);let b=!1,N=!1;const $=new tI({Zo:F=>{N?q(it,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(b||(q(it,`Opening RPC '${e}' stream ${i} transport.`),T.open(),b=!0),q(it,`RPC '${e}' stream ${i} sending:`,F),T.send(F))},Xo:()=>T.close()}),z=(F,ee,G)=>{F.listen(ee,ce=>{try{G(ce)}catch(Ae){setTimeout(()=>{throw Ae},0)}})};return z(T,Ns.EventType.OPEN,()=>{N||(q(it,`RPC '${e}' stream ${i} transport opened.`),$.__())}),z(T,Ns.EventType.CLOSE,()=>{N||(N=!0,q(it,`RPC '${e}' stream ${i} transport closed`),$.u_(),this.d_(T))}),z(T,Ns.EventType.ERROR,F=>{N||(N=!0,Fi(it,`RPC '${e}' stream ${i} transport errored. Name:`,F.name,"Message:",F.message),$.u_(new K(L.UNAVAILABLE,"The operation could not be completed")))}),z(T,Ns.EventType.MESSAGE,F=>{var ee;if(!N){const G=F.data[0];ye(!!G,16349);const ce=G,Ae=(ce==null?void 0:ce.error)||((ee=ce[0])===null||ee===void 0?void 0:ee.error);if(Ae){q(it,`RPC '${e}' stream ${i} received error:`,Ae);const mt=Ae.status;let Pe=function(w){const I=Me[w];if(I!==void 0)return pp(I)}(mt),R=Ae.message;Pe===void 0&&(Pe=L.INTERNAL,R="Unknown error status: "+mt+" with message "+Ae.message),N=!0,$.u_(new K(Pe,R)),T.close()}else q(it,`RPC '${e}' stream ${i} received:`,G),$.c_(G)}}),z(u,Of.STAT_EVENT,F=>{F.stat===jc.PROXY?q(it,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===jc.NOPROXY&&q(it,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{$.a_()},0),$}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function Pc(){return typeof document<"u"?document:null}/**
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
 */function qa(n){return new oT(n,!0)}/**
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
 */class Sp{constructor(e,t,r=1e3,i=1.5,s=6e4){this.xi=e,this.timerId=t,this.A_=r,this.R_=i,this.V_=s,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),i=Math.max(0,t-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const ad="PersistentStream";class Pp{constructor(e,t,r,i,s,c,u,d){this.xi=e,this.S_=r,this.D_=i,this.connection=s,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=u,this.listener=d,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Sp(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(Mn(t.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.v_===t&&this.z_(r,i)},r=>{e(()=>{const i=new K(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(i)})})}z_(e,t){const r=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.j_(i))}),this.stream.onMessage(i=>{r(()=>++this.M_==1?this.J_(i):this.onNext(i))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return q(ad,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(q(ad,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rI extends Pp{constructor(e,t,r,i,s,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=s}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=lT(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();const c=s.targetChange;return c.targetIds&&c.targetIds.length?ne.min():c.readTime?dn(c.readTime):ne.min()}(e);return this.listener.Y_(t,r)}Z_(e){const t={};t.database=Zc(this.serializer),t.addTarget=function(s,c){let u;const d=c.target;if(u=Kc(d)?{documents:dT(s,d)}:{query:fT(s,d).gt},u.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){u.resumeToken=_p(s,c.resumeToken);const m=Yc(s,c.expectedCount);m!==null&&(u.expectedCount=m)}else if(c.snapshotVersion.compareTo(ne.min())>0){u.readTime=Ia(s,c.snapshotVersion.toTimestamp());const m=Yc(s,c.expectedCount);m!==null&&(u.expectedCount=m)}return u}(this.serializer,e);const r=mT(this.serializer,e);r&&(t.labels=r),this.Q_(t)}X_(e){const t={};t.database=Zc(this.serializer),t.removeTarget=e,this.Q_(t)}}class iI extends Pp{constructor(e,t,r,i,s,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=s}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=hT(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.ra(r,t)}ia(){const e={};e.database=Zc(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>uT(this.serializer,r))};this.Q_(t)}}/**
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
 */class sI{}class oI extends sI{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,c])=>this.connection.zo(e,Xc(t,r),i,s,c)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(L.UNKNOWN,s.toString())})}Yo(e,t,r,i,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,u])=>this.connection.Yo(e,Xc(t,r),i,c,u,s)).catch(c=>{throw c.name==="FirebaseError"?(c.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new K(L.UNKNOWN,c.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class aI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Mn(t),this.ua=!1):q("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Yr="RemoteStore";class cI{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=s,this.Ra.No(c=>{r.enqueueAndForget(async()=>{ii(this)&&(q(Yr,"Restarting streams for network reachability change."),await async function(d){const m=se(d);m.da.add(4),await ao(m),m.Va.set("Unknown"),m.da.delete(4),await Ha(m)}(this))})}),this.Va=new aI(r,i)}}async function Ha(n){if(ii(n))for(const e of n.Aa)await e(!0)}async function ao(n){for(const e of n.Aa)await e(!1)}function kp(n,e){const t=se(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Ul(t)?Fl(t):Xi(t).N_()&&Ml(t,e))}function xl(n,e){const t=se(n),r=Xi(t);t.Ea.delete(e),r.N_()&&Dp(t,e),t.Ea.size===0&&(r.N_()?r.k_():ii(t)&&t.Va.set("Unknown"))}function Ml(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xi(n).Z_(e)}function Dp(n,e){n.ma.Ke(e),Xi(n).X_(e)}function Fl(n){n.ma=new nT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Xi(n).start(),n.Va.ca()}function Ul(n){return ii(n)&&!Xi(n).O_()&&n.Ea.size>0}function ii(n){return se(n).da.size===0}function Op(n){n.ma=void 0}async function lI(n){n.Va.set("Online")}async function uI(n){n.Ea.forEach((e,t)=>{Ml(n,e)})}async function hI(n,e){Op(n),Ul(n)?(n.Va.Pa(e),Fl(n)):n.Va.set("Unknown")}async function dI(n,e,t){if(n.Va.set("Online"),e instanceof gp&&e.state===2&&e.cause)try{await async function(i,s){const c=s.cause;for(const u of s.targetIds)i.Ea.has(u)&&(await i.remoteSyncer.rejectListen(u,c),i.Ea.delete(u),i.ma.removeTarget(u))}(n,e)}catch(r){q(Yr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ba(n,r)}else if(e instanceof sa?n.ma.Xe(e):e instanceof mp?n.ma.ot(e):n.ma.nt(e),!t.isEqual(ne.min()))try{const r=await Rp(n.localStore);t.compareTo(r)>=0&&await function(s,c){const u=s.ma.It(c);return u.targetChanges.forEach((d,m)=>{if(d.resumeToken.approximateByteSize()>0){const y=s.Ea.get(m);y&&s.Ea.set(m,y.withResumeToken(d.resumeToken,c))}}),u.targetMismatches.forEach((d,m)=>{const y=s.Ea.get(d);if(!y)return;s.Ea.set(d,y.withResumeToken(tt.EMPTY_BYTE_STRING,y.snapshotVersion)),Dp(s,d);const T=new lr(y.target,d,m,y.sequenceNumber);Ml(s,T)}),s.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){q(Yr,"Failed to raise snapshot:",r),await ba(n,r)}}async function ba(n,e,t){if(!Yi(e))throw e;n.da.add(1),await ao(n),n.Va.set("Offline"),t||(t=()=>Rp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(Yr,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Ha(n)})}function Np(n,e){return e().catch(t=>ba(n,t,e))}async function za(n){const e=se(n),t=vr(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:wl;for(;fI(e);)try{const i=await GT(e.localStore,r);if(i===null){e.Ia.length===0&&t.k_();break}r=i.batchId,pI(e,i)}catch(i){await ba(e,i)}Vp(e)&&Lp(e)}function fI(n){return ii(n)&&n.Ia.length<10}function pI(n,e){n.Ia.push(e);const t=vr(n);t.N_()&&t.ea&&t.ta(e.mutations)}function Vp(n){return ii(n)&&!vr(n).O_()&&n.Ia.length>0}function Lp(n){vr(n).start()}async function mI(n){vr(n).ia()}async function gI(n){const e=vr(n);for(const t of n.Ia)e.ta(t.mutations)}async function _I(n,e,t){const r=n.Ia.shift(),i=Pl.from(r,e,t);await Np(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await za(n)}async function yI(n,e){e&&vr(n).ea&&await async function(r,i){if(function(c){return eT(c)&&c!==L.ABORTED}(i.code)){const s=r.Ia.shift();vr(r).L_(),await Np(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await za(r)}}(n,e),Vp(n)&&Lp(n)}async function cd(n,e){const t=se(n);t.asyncQueue.verifyOperationInProgress(),q(Yr,"RemoteStore received new credentials");const r=ii(t);t.da.add(3),await ao(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Ha(t)}async function vI(n,e){const t=se(n);e?(t.da.delete(2),await Ha(t)):e||(t.da.add(2),await ao(t),t.Va.set("Unknown"))}function Xi(n){return n.fa||(n.fa=function(t,r,i){const s=se(t);return s.oa(),new rI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{e_:lI.bind(null,n),n_:uI.bind(null,n),i_:hI.bind(null,n),Y_:dI.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),Ul(n)?Fl(n):n.Va.set("Unknown")):(await n.fa.stop(),Op(n))})),n.fa}function vr(n){return n.ga||(n.ga=function(t,r,i){const s=se(t);return s.oa(),new iI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:mI.bind(null,n),i_:yI.bind(null,n),na:gI.bind(null,n),ra:_I.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await za(n)):(await n.ga.stop(),n.Ia.length>0&&(q(Yr,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
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
 */class $l{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const c=Date.now()+r,u=new $l(e,t,c,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bl(n,e){if(Mn("AsyncQueue",`${e}: ${n}`),Yi(n))return new K(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Mi{static emptySet(e){return new Mi(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=Vs(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class ld{constructor(){this.pa=new ke(Y.comparator)}track(e){const t=e.doc.key,r=this.pa.get(t);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(t,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(t):e.type===1&&r.type===2?this.pa=this.pa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):Z(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,r)=>{e.push(r)}),e}}class qi{constructor(e,t,r,i,s,c,u,d,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=c,this.syncStateChanged=u,this.excludesMetadataChanges=d,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,i,s){const c=[];return t.forEach(u=>{c.push({type:0,doc:u})}),new qi(e,t,Mi.emptySet(t),c,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class EI{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class wI{constructor(){this.queries=ud(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=se(t),s=i.queries;i.queries=ud(),s.forEach((c,u)=>{for(const d of u.Sa)d.onError(r)})})(this,new K(L.ABORTED,"Firestore shutting down"))}}function ud(){return new ni(n=>np(n),Fa)}async function xp(n,e){const t=se(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Da()&&e.va()&&(r=2):(s=new EI,r=e.va()?0:1);try{switch(r){case 0:s.ba=await t.onListen(i,!0);break;case 1:s.ba=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const u=Bl(c,`Initialization of query '${Di(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.Sa.push(e),e.Fa(t.onlineState),s.ba&&e.Ma(s.ba)&&jl(t)}async function Mp(n,e){const t=se(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const c=s.Sa.indexOf(e);c>=0&&(s.Sa.splice(c,1),s.Sa.length===0?i=e.va()?0:1:!s.Da()&&e.va()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function TI(n,e){const t=se(n);let r=!1;for(const i of e){const s=i.query,c=t.queries.get(s);if(c){for(const u of c.Sa)u.Ma(i)&&(r=!0);c.ba=i}}r&&jl(t)}function II(n,e,t){const r=se(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function jl(n){n.Ca.forEach(e=>{e.next()})}var nl,hd;(hd=nl||(nl={})).xa="default",hd.Cache="cache";class Fp{constructor(e,t,r){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const r=t!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==nl.Cache}}/**
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
 */class Up{constructor(e){this.key=e}}class $p{constructor(e){this.key=e}}class AI{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=de(),this.mutatedKeys=de(),this.Za=rp(e),this.Xa=new Mi(this.Za)}get eu(){return this.Ha}tu(e,t){const r=t?t.nu:new ld,i=t?t.Xa:this.Xa;let s=t?t.mutatedKeys:this.mutatedKeys,c=i,u=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,m=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((y,T)=>{const b=i.get(y),N=Ua(this.query,T)?T:null,$=!!b&&this.mutatedKeys.has(b.key),z=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let F=!1;b&&N?b.data.isEqual(N.data)?$!==z&&(r.track({type:3,doc:N}),F=!0):this.ru(b,N)||(r.track({type:2,doc:N}),F=!0,(d&&this.Za(N,d)>0||m&&this.Za(N,m)<0)&&(u=!0)):!b&&N?(r.track({type:0,doc:N}),F=!0):b&&!N&&(r.track({type:1,doc:b}),F=!0,(d||m)&&(u=!0)),F&&(N?(c=c.add(N),s=z?s.add(y):s.delete(y)):(c=c.delete(y),s=s.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),s=s.delete(y.key),r.track({type:1,doc:y})}return{Xa:c,nu:r,Cs:u,mutatedKeys:s}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const c=e.nu.wa();c.sort((y,T)=>function(N,$){const z=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Vt:F})}};return z(N)-z($)}(y.type,T.type)||this.Za(y.doc,T.doc)),this.iu(r),i=i!=null&&i;const u=t&&!i?this.su():[],d=this.Ya.size===0&&this.current&&!i?1:0,m=d!==this.Ja;return this.Ja=d,c.length!==0||m?{snapshot:new qi(this.query,e.Xa,s,c,e.mutatedKeys,d===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:u}:{ou:u}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new ld,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=de(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new $p(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Up(r))}),t}au(e){this.Ha=e.$s,this.Ya=de();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return qi.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const ql="SyncEngine";class bI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class CI{constructor(e){this.key=e,this.cu=!1}}class RI{constructor(e,t,r,i,s,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=c,this.lu={},this.hu=new ni(u=>np(u),Fa),this.Pu=new Map,this.Tu=new Set,this.Iu=new ke(Y.comparator),this.Eu=new Map,this.du=new Ol,this.Au={},this.Ru=new Map,this.Vu=ji.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function SI(n,e,t=!0){const r=Wp(n);let i;const s=r.hu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.uu()):i=await Bp(r,e,t,!0),i}async function PI(n,e){const t=Wp(n);await Bp(t,e,!0,!1)}async function Bp(n,e,t,r){const i=await QT(n.localStore,un(e)),s=i.targetId,c=n.sharedClientState.addLocalQueryTarget(s,t);let u;return r&&(u=await kI(n,e,s,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&kp(n.remoteStore,i),u}async function kI(n,e,t,r,i){n.fu=(T,b,N)=>async function(z,F,ee,G){let ce=F.view.tu(ee);ce.Cs&&(ce=await rd(z.localStore,F.query,!1).then(({documents:R})=>F.view.tu(R,ce)));const Ae=G&&G.targetChanges.get(F.targetId),mt=G&&G.targetMismatches.get(F.targetId)!=null,Pe=F.view.applyChanges(ce,z.isPrimaryClient,Ae,mt);return fd(z,F.targetId,Pe.ou),Pe.snapshot}(n,T,b,N);const s=await rd(n.localStore,e,!0),c=new AI(e,s.$s),u=c.tu(s.documents),d=oo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),m=c.applyChanges(u,n.isPrimaryClient,d);fd(n,t,m.ou);const y=new bI(e,t,c);return n.hu.set(e,y),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),m.snapshot}async function DI(n,e,t){const r=se(n),i=r.hu.get(e),s=r.Pu.get(i.targetId);if(s.length>1)return r.Pu.set(i.targetId,s.filter(c=>!Fa(c,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await el(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&xl(r.remoteStore,i.targetId),rl(r,i.targetId)}).catch(Qi)):(rl(r,i.targetId),await el(r.localStore,i.targetId,!0))}async function OI(n,e){const t=se(n),r=t.hu.get(e),i=t.Pu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xl(t.remoteStore,r.targetId))}async function NI(n,e,t){const r=$I(n);try{const i=await function(c,u){const d=se(c),m=je.now(),y=u.reduce((N,$)=>N.add($.key),de());let T,b;return d.persistence.runTransaction("Locally write mutations","readwrite",N=>{let $=Fn(),z=de();return d.Bs.getEntries(N,y).next(F=>{$=F,$.forEach((ee,G)=>{G.isValidDocument()||(z=z.add(ee))})}).next(()=>d.localDocuments.getOverlayedDocuments(N,$)).next(F=>{T=F;const ee=[];for(const G of u){const ce=Qw(G,T.get(G.key).overlayedDocument);ce!=null&&ee.push(new ri(G.key,ce,Gf(ce.value.mapValue),hn.exists(!0)))}return d.mutationQueue.addMutationBatch(N,m,ee,u)}).next(F=>{b=F;const ee=F.applyToLocalDocumentSet(T,z);return d.documentOverlayCache.saveOverlays(N,F.batchId,ee)})}).then(()=>({batchId:b.batchId,changes:sp(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(c,u,d){let m=c.Au[c.currentUser.toKey()];m||(m=new ke(le)),m=m.insert(u,d),c.Au[c.currentUser.toKey()]=m}(r,i.batchId,t),await co(r,i.changes),await za(r.remoteStore)}catch(i){const s=Bl(i,"Failed to persist write");t.reject(s)}}async function jp(n,e){const t=se(n);try{const r=await WT(t.localStore,e);e.targetChanges.forEach((i,s)=>{const c=t.Eu.get(s);c&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?c.cu=!0:i.modifiedDocuments.size>0?ye(c.cu,14607):i.removedDocuments.size>0&&(ye(c.cu,42227),c.cu=!1))}),await co(t,r,e)}catch(r){await Qi(r)}}function dd(n,e,t){const r=se(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.hu.forEach((s,c)=>{const u=c.view.Fa(e);u.snapshot&&i.push(u.snapshot)}),function(c,u){const d=se(c);d.onlineState=u;let m=!1;d.queries.forEach((y,T)=>{for(const b of T.Sa)b.Fa(u)&&(m=!0)}),m&&jl(d)}(r.eventManager,e),i.length&&r.lu.Y_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VI(n,e,t){const r=se(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let c=new ke(Y.comparator);c=c.insert(s,ot.newNoDocument(s,ne.min()));const u=de().add(s),d=new ja(ne.min(),new Map,new ke(le),c,u);await jp(r,d),r.Iu=r.Iu.remove(s),r.Eu.delete(e),Hl(r)}else await el(r.localStore,e,!1).then(()=>rl(r,e,t)).catch(Qi)}async function LI(n,e){const t=se(n),r=e.batch.batchId;try{const i=await zT(t.localStore,e);Hp(t,r,null),qp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await co(t,i)}catch(i){await Qi(i)}}async function xI(n,e,t){const r=se(n);try{const i=await function(c,u){const d=se(c);return d.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let y;return d.mutationQueue.lookupMutationBatch(m,u).next(T=>(ye(T!==null,37113),y=T.keys(),d.mutationQueue.removeMutationBatch(m,T))).next(()=>d.mutationQueue.performConsistencyCheck(m)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(m,y,u)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y)).next(()=>d.localDocuments.getDocuments(m,y))})}(r.localStore,e);Hp(r,e,t),qp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await co(r,i)}catch(i){await Qi(i)}}function qp(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function Hp(n,e,t){const r=se(n);let i=r.Au[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Au[r.currentUser.toKey()]=i}}function rl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pu.get(e))n.hu.delete(r),t&&n.lu.gu(r,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(r=>{n.du.containsKey(r)||zp(n,r)})}function zp(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(xl(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),Hl(n))}function fd(n,e,t){for(const r of t)r instanceof Up?(n.du.addReference(r.key,e),MI(n,r)):r instanceof $p?(q(ql,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,e),n.du.containsKey(r.key)||zp(n,r.key)):Z(19791,{pu:r})}function MI(n,e){const t=e.key,r=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(r)||(q(ql,"New document in limbo: "+t),n.Tu.add(r),Hl(n))}function Hl(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new Y(Se.fromString(e)),r=n.Vu.next();n.Eu.set(r,new CI(t)),n.Iu=n.Iu.insert(t,r),kp(n.remoteStore,new lr(un(Cl(t.path)),r,"TargetPurposeLimboResolution",La.le))}}async function co(n,e,t){const r=se(n),i=[],s=[],c=[];r.hu.isEmpty()||(r.hu.forEach((u,d)=>{c.push(r.fu(d,e,t).then(m=>{var y;if((m||t)&&r.isPrimaryClient){const T=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(d.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(d.targetId,T?"current":"not-current")}if(m){i.push(m);const T=Vl.Rs(d.targetId,m);s.push(T)}}))}),await Promise.all(c),r.lu.Y_(i),await async function(d,m){const y=se(d);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>V.forEach(m,b=>V.forEach(b.ds,N=>y.persistence.referenceDelegate.addReference(T,b.targetId,N)).next(()=>V.forEach(b.As,N=>y.persistence.referenceDelegate.removeReference(T,b.targetId,N)))))}catch(T){if(!Yi(T))throw T;q(Ll,"Failed to update sequence numbers: "+T)}for(const T of m){const b=T.targetId;if(!T.fromCache){const N=y.xs.get(b),$=N.snapshotVersion,z=N.withLastLimboFreeSnapshotVersion($);y.xs=y.xs.insert(b,z)}}}(r.localStore,s))}async function FI(n,e){const t=se(n);if(!t.currentUser.isEqual(e)){q(ql,"User change. New user:",e.toKey());const r=await Cp(t.localStore,e);t.currentUser=e,function(s,c){s.Ru.forEach(u=>{u.forEach(d=>{d.reject(new K(L.CANCELLED,c))})}),s.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await co(t,r.ks)}}function UI(n,e){const t=se(n),r=t.Eu.get(e);if(r&&r.cu)return de().add(r.key);{let i=de();const s=t.Pu.get(e);if(!s)return i;for(const c of s){const u=t.hu.get(c);i=i.unionWith(u.view.eu)}return i}}function Wp(n){const e=se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VI.bind(null,e),e.lu.Y_=TI.bind(null,e.eventManager),e.lu.gu=II.bind(null,e.eventManager),e}function $I(n){const e=se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xI.bind(null,e),e}class Ca{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return HT(this.persistence,new BT,e.initialUser,this.serializer)}Su(e){return new bp(Nl.fi,this.serializer)}bu(e){return new XT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ca.provider={build:()=>new Ca};class BI extends Ca{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){ye(this.persistence.referenceDelegate instanceof Aa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new CT(r,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new bp(r=>Aa.fi(r,t),this.serializer)}}class il{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FI.bind(null,this.syncEngine),await vI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wI}()}createDatastore(e){const t=qa(e.databaseInfo.databaseId),r=function(s){return new nI(s)}(e.databaseInfo);return function(s,c,u,d){return new oI(s,c,u,d)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,c,u){return new cI(r,i,s,c,u)}(this.localStore,this.datastore,e.asyncQueue,t=>dd(this.syncEngine,t,0),function(){return od.C()?new od:new JT}())}createSyncEngine(e,t){return function(i,s,c,u,d,m,y){const T=new RI(i,s,c,u,d,m);return y&&(T.mu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=se(i);q(Yr,"RemoteStore shutting down."),s.da.add(5),await ao(s),s.Ra.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}il.provider={build:()=>new il};/**
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
 */class Kp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Er="FirestoreClient";class jI{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=Ff.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async c=>{q(Er,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(q(Er,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Bl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kc(n,e){n.asyncQueue.verifyOperationInProgress(),q(Er,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Cp(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function pd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await qI(n);q(Er,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>cd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>cd(e.remoteStore,i)),n._onlineComponents=e}async function qI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(Er,"Using user provided OfflineComponentProvider");try{await kc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Fi("Error using user provided cache. Falling back to memory cache: "+t),await kc(n,new Ca)}}else q(Er,"Using default OfflineComponentProvider"),await kc(n,new BI(void 0));return n._offlineComponents}async function Gp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(Er,"Using user provided OnlineComponentProvider"),await pd(n,n._uninitializedComponentsProvider._online)):(q(Er,"Using default OnlineComponentProvider"),await pd(n,new il))),n._onlineComponents}function HI(n){return Gp(n).then(e=>e.syncEngine)}async function Qp(n){const e=await Gp(n),t=e.eventManager;return t.onListen=SI.bind(null,e.syncEngine),t.onUnlisten=DI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=PI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OI.bind(null,e.syncEngine),t}function zI(n,e,t={}){const r=new Vn;return n.asyncQueue.enqueueAndForget(async()=>function(s,c,u,d,m){const y=new Kp({next:b=>{y.xu(),c.enqueueAndForget(()=>Mp(s,T));const N=b.docs.has(u);!N&&b.fromCache?m.reject(new K(L.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&b.fromCache&&d&&d.source==="server"?m.reject(new K(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(b)},error:b=>m.reject(b)}),T=new Fp(Cl(u.path),y,{includeMetadataChanges:!0,Qa:!0});return xp(s,T)}(await Qp(n),n.asyncQueue,e,t,r)),r.promise}function WI(n,e,t={}){const r=new Vn;return n.asyncQueue.enqueueAndForget(async()=>function(s,c,u,d,m){const y=new Kp({next:b=>{y.xu(),c.enqueueAndForget(()=>Mp(s,T)),b.fromCache&&d.source==="server"?m.reject(new K(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(b)},error:b=>m.reject(b)}),T=new Fp(u,y,{includeMetadataChanges:!0,Qa:!0});return xp(s,T)}(await Qp(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Yp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const md=new Map;/**
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
 */function Xp(n,e,t){if(!t)throw new K(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function KI(n,e,t,r){if(e===!0&&r===!0)throw new K(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gd(n){if(!Y.isDocumentKey(n))throw new K(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _d(n){if(Y.isDocumentKey(n))throw new K(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Wa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Z(12329,{type:typeof n})}function wr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wa(n);throw new K(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Jp="firestore.googleapis.com",yd=!0;class vd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Jp,this.ssl=yd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:yd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ap;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<AT)throw new K(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ka{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tw;switch(r.type){case"firstParty":return new sw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=md.get(t);r&&(q("ComponentProvider","Removing Datastore"),md.delete(t),r.terminate())}(this),Promise.resolve()}}function GI(n,e,t,r={}){var i;n=wr(n,Ka);const s=zi(e),c=n._getSettings(),u=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;s&&(Ud(`https://${d}`),$d("Firestore",!0)),c.host!==Jp&&c.host!==d&&Fi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},c),{host:d,ssl:s,emulatorOptions:r});if(!pr(m,u)&&(n._setSettings(m),r.mockUserToken)){let y,T;if(typeof r.mockUserToken=="string")y=r.mockUserToken,T=st.MOCK_USER;else{y=h_(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const b=r.mockUserToken.sub||r.mockUserToken.user_id;if(!b)throw new K(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new st(b)}n._authCredentials=new nw(new xf(y,T))}}/**
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
 */class Ji{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ji(this.firestore,e,this._query)}}class vt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class fr extends Ji{constructor(e,t,r){super(e,t,Cl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new Y(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function Bb(n,e,...t){if(n=Ye(n),Xp("collection","path",e),n instanceof Ka){const r=Se.fromString(e,...t);return _d(r),new fr(n,null,r)}{if(!(n instanceof vt||n instanceof fr))throw new K(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return _d(r),new fr(n.firestore,null,r)}}function jb(n,e,...t){if(n=Ye(n),arguments.length===1&&(e=Ff.newId()),Xp("doc","path",e),n instanceof Ka){const r=Se.fromString(e,...t);return gd(r),new vt(n,null,new Y(r))}{if(!(n instanceof vt||n instanceof fr))throw new K(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return gd(r),new vt(n.firestore,n instanceof fr?n.converter:null,new Y(r))}}/**
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
 */const Ed="AsyncQueue";class wd{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Sp(this,"async_queue_retry"),this.rc=()=>{const r=Pc();r&&q(Ed,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const t=Pc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Pc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new Vn;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Yi(e))throw e;q(Ed,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,Mn("INTERNAL UNHANDLED ERROR: ",Td(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=t,t}enqueueAfterDelay(e,t,r){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const i=$l.createAndSchedule(this,e,t,r,s=>this.uc(s));return this.Zu.push(i),i}oc(){this.Xu&&Z(47125,{cc:Td(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Td(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class lo extends Ka{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new wd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wd(e),this._firestoreClient=void 0,await e}}}function QI(n,e){const t=typeof n=="object"?n:al(),r=typeof n=="string"?n:_a,i=ei(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=l_("firestore");s&&GI(i,...s)}return i}function zl(n){if(n._terminated)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||YI(n),n._firestoreClient}function YI(n){var e,t,r;const i=n._freezeSettings(),s=function(u,d,m,y){return new Ew(u,d,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,Yp(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new jI(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(tt.fromBase64String(e))}catch(t){throw new K(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Hi(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Wl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zp{constructor(e){this._methodName=e}}/**
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
 */class Kl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */class Gl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const XI=/^__.*__$/;class JI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ri(e,this.data,this.fieldMask,t,this.fieldTransforms):new so(e,this.data,t,this.fieldTransforms)}}function em(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{Ic:n})}}class Ql{constructor(e,t,r,i,s,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ec(),this.fieldTransforms=s||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Ql(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:r,Rc:!1});return i.Vc(e),i}mc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:r,Rc:!1});return i.Ec(),i}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Ra(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(em(this.Ic)&&XI.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class ZI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||qa(e)}bc(e,t,r,i=!1){return new Ql({Ic:e,methodName:t,wc:r,path:et.emptyPath(),Rc:!1,yc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tm(n){const e=n._freezeSettings(),t=qa(n._databaseId);return new ZI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function eA(n,e,t,r,i,s={}){const c=n.bc(s.merge||s.mergeFields?2:0,e,t,i);im("Data must be an object, but it was:",c,r);const u=nm(r,c);let d,m;if(s.merge)d=new Gt(c.fieldMask),m=c.fieldTransforms;else if(s.mergeFields){const y=[];for(const T of s.mergeFields){const b=nA(e,T,t);if(!c.contains(b))throw new K(L.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);iA(y,b)||y.push(b)}d=new Gt(y),m=c.fieldTransforms.filter(T=>d.covers(T.field))}else d=null,m=c.fieldTransforms;return new JI(new xt(u),d,m)}function tA(n,e,t,r=!1){return Yl(t,n.bc(r?4:3,e))}function Yl(n,e){if(rm(n=Ye(n)))return im("Unsupported field value:",e,n),nm(n,e);if(n instanceof Zp)return function(r,i){if(!em(i.Ic))throw i.gc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,i){const s=[];let c=0;for(const u of r){let d=Yl(u,i.fc(c));d==null&&(d={nullValue:"NULL_VALUE"}),s.push(d),c++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=je.fromDate(r);return{timestampValue:Ia(i.serializer,s)}}if(r instanceof je){const s=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ia(i.serializer,s)}}if(r instanceof Kl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hi)return{bytesValue:_p(i.serializer,r._byteString)};if(r instanceof vt){const s=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(s))throw i.gc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Dl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Gl)return function(c,u){return{mapValue:{fields:{[Wf]:{stringValue:Kf},[ya]:{arrayValue:{values:c.toArray().map(m=>{if(typeof m!="number")throw u.gc("VectorValues must only contain numeric values.");return Rl(u.serializer,m)})}}}}}}(r,i);throw i.gc(`Unsupported field value: ${Wa(r)}`)}(n,e)}function nm(n,e){const t={};return $f(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ti(n,(r,i)=>{const s=Yl(i,e.Ac(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function rm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof je||n instanceof Kl||n instanceof Hi||n instanceof vt||n instanceof Zp||n instanceof Gl)}function im(n,e,t){if(!rm(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Wa(t);throw r==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+r)}}function nA(n,e,t){if((e=Ye(e))instanceof Wl)return e._internalPath;if(typeof e=="string")return sm(n,e);throw Ra("Field path arguments must be of type string or ",n,!1,void 0,t)}const rA=new RegExp("[~\\*/\\[\\]]");function sm(n,e,t){if(e.search(rA)>=0)throw Ra(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wl(...e.split("."))._internalPath}catch{throw Ra(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ra(n,e,t,r,i){const s=r&&!r.isEmpty(),c=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let d="";return(s||c)&&(d+=" (found",s&&(d+=` in field ${r}`),c&&(d+=` in document ${i}`),d+=")"),new K(L.INVALID_ARGUMENT,u+n+d)}function iA(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class om{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sA extends om{data(){return super.data()}}function Xl(n,e){return typeof e=="string"?sm(n,e):e instanceof Wl?e._internalPath:e._delegate._internalPath}/**
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
 */function oA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jl{}class aA extends Jl{}function qb(n,e,...t){let r=[];e instanceof Jl&&r.push(e),r=r.concat(t),function(s){const c=s.filter(d=>d instanceof Zl).length,u=s.filter(d=>d instanceof Ga).length;if(c>1||c>0&&u>0)throw new K(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ga extends aA{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ga(e,t,r)}_apply(e){const t=this._parse(e);return am(e._query,t),new Ji(e.firestore,e.converter,Gc(e._query,t))}_parse(e){const t=tm(e.firestore);return function(s,c,u,d,m,y,T){let b;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new K(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Ad(T,y);const $=[];for(const z of T)$.push(Id(d,s,z));b={arrayValue:{values:$}}}else b=Id(d,s,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Ad(T,y),b=tA(u,c,T,y==="in"||y==="not-in");return Fe.create(m,y,b)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Hb(n,e,t){const r=e,i=Xl("where",n);return Ga._create(i,r,t)}class Zl extends Jl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Zl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Xt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let c=i;const u=s.getFlattenedFilters();for(const d of u)am(c,d),c=Gc(c,d)}(e._query,t),new Ji(e.firestore,e.converter,Gc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Id(n,e,t){if(typeof(t=Ye(t))=="string"){if(t==="")throw new K(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tp(e)&&t.indexOf("/")!==-1)throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Se.fromString(t));if(!Y.isDocumentKey(r))throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fh(n,new Y(r))}if(t instanceof vt)return Fh(n,t._key);throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wa(t)}.`)}function Ad(n,e){if(!Array.isArray(n)||n.length===0)throw new K(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function am(n,e){const t=function(i,s){for(const c of i)for(const u of c.getFlattenedFilters())if(s.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new K(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class cA{convertValue(e,t="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ti(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[ya].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(c=>Le(c.doubleValue));return new Gl(s)}convertGeoPoint(e){return new Kl(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ma(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Gs(e));default:return null}}convertTimestamp(e){const t=gr(e);return new je(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Se.fromString(e);ye(Ip(r),9688,{name:e});const i=new Qs(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(t)||Mn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function lA(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class xs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cm extends om{constructor(e,t,r,i,s,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Xl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class oa extends cm{data(e={}){return super.data(e)}}class uA{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new xs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new oa(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map(u=>{const d=new oa(i._firestore,i._userDataWriter,u.doc.key,u.doc,new xs(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}})}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const d=new oa(i._firestore,i._userDataWriter,u.doc.key,u.doc,new xs(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let m=-1,y=-1;return u.type!==0&&(m=c.indexOf(u.doc.key),c=c.delete(u.doc.key)),u.type!==1&&(c=c.add(u.doc),y=c.indexOf(u.doc.key)),{type:hA(u.type),doc:d,oldIndex:m,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function hA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:n})}}/**
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
 */function zb(n){n=wr(n,vt);const e=wr(n.firestore,lo);return zI(zl(e),n._key).then(t=>dA(e,n,t))}class lm extends cA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}function Wb(n){n=wr(n,Ji);const e=wr(n.firestore,lo),t=zl(e),r=new lm(e);return oA(n._query),WI(t,n._query).then(i=>new uA(e,r,n,i))}function Kb(n,e,t){n=wr(n,vt);const r=wr(n.firestore,lo),i=lA(n.converter,e);return um(r,[eA(tm(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,hn.none())])}function Gb(n){return um(wr(n.firestore,lo),[new Sl(n._key,hn.none())])}function um(n,e){return function(r,i){const s=new Vn;return r.asyncQueue.enqueueAndForget(async()=>NI(await HI(r),i,s)),s.promise}(zl(n),e)}function dA(n,e,t){const r=t.docs.get(e._key),i=new lm(n);return new cm(n,i,e._key,r,new xs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Gi=i})(Wi),fn(new Yt("firestore",(r,{instanceIdentifier:i,options:s})=>{const c=r.getProvider("app").getImmediate(),u=new lo(new rw(r.getProvider("auth-internal")),new ow(c,r.getProvider("app-check-internal")),function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new K(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qs(m.options.projectId,y)}(c,i),c);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Mt(Ch,Rh,e),Mt(Ch,Rh,"esm2017")})();const hm="@firebase/installations",eu="0.6.17";/**
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
 */const dm=1e4,fm=`w:${eu}`,pm="FIS_v2",fA="https://firebaseinstallations.googleapis.com/v1",pA=60*60*1e3,mA="installations",gA="Installations";/**
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
 */const _A={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xr=new Zr(mA,gA,_A);function mm(n){return n instanceof Jt&&n.code.includes("request-failed")}/**
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
 */function gm({projectId:n}){return`${fA}/projects/${n}/installations`}function _m(n){return{token:n.token,requestStatus:2,expiresIn:vA(n.expiresIn),creationTime:Date.now()}}async function ym(n,e){const r=(await e.json()).error;return Xr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function vm({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function yA(n,{refreshToken:e}){const t=vm(n);return t.append("Authorization",EA(e)),t}async function Em(n){const e=await n();return e.status>=500&&e.status<600?n():e}function vA(n){return Number(n.replace("s","000"))}function EA(n){return`${pm} ${n}`}/**
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
 */async function wA({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=gm(n),i=vm(n),s=e.getImmediate({optional:!0});if(s){const m=await s.getHeartbeatsHeader();m&&i.append("x-firebase-client",m)}const c={fid:t,authVersion:pm,appId:n.appId,sdkVersion:fm},u={method:"POST",headers:i,body:JSON.stringify(c)},d=await Em(()=>fetch(r,u));if(d.ok){const m=await d.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:_m(m.authToken)}}else throw await ym("Create Installation",d)}/**
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
 */function wm(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function TA(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const IA=/^[cdef][\w-]{21}$/,sl="";function AA(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=bA(n);return IA.test(t)?t:sl}catch{return sl}}function bA(n){return TA(n).substr(0,22)}/**
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
 */function Qa(n){return`${n.appName}!${n.appId}`}/**
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
 */const Tm=new Map;function Im(n,e){const t=Qa(n);Am(t,e),CA(t,e)}function Am(n,e){const t=Tm.get(n);if(t)for(const r of t)r(e)}function CA(n,e){const t=RA();t&&t.postMessage({key:n,fid:e}),SA()}let Wr=null;function RA(){return!Wr&&"BroadcastChannel"in self&&(Wr=new BroadcastChannel("[Firebase] FID Change"),Wr.onmessage=n=>{Am(n.data.key,n.data.fid)}),Wr}function SA(){Tm.size===0&&Wr&&(Wr.close(),Wr=null)}/**
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
 */const PA="firebase-installations-database",kA=1,Jr="firebase-installations-store";let Dc=null;function tu(){return Dc||(Dc=Wd(PA,kA,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Jr)}}})),Dc}async function Sa(n,e){const t=Qa(n),i=(await tu()).transaction(Jr,"readwrite"),s=i.objectStore(Jr),c=await s.get(t);return await s.put(e,t),await i.done,(!c||c.fid!==e.fid)&&Im(n,e.fid),e}async function bm(n){const e=Qa(n),r=(await tu()).transaction(Jr,"readwrite");await r.objectStore(Jr).delete(e),await r.done}async function Ya(n,e){const t=Qa(n),i=(await tu()).transaction(Jr,"readwrite"),s=i.objectStore(Jr),c=await s.get(t),u=e(c);return u===void 0?await s.delete(t):await s.put(u,t),await i.done,u&&(!c||c.fid!==u.fid)&&Im(n,u.fid),u}/**
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
 */async function nu(n){let e;const t=await Ya(n.appConfig,r=>{const i=DA(r),s=OA(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===sl?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function DA(n){const e=n||{fid:AA(),registrationStatus:0};return Cm(e)}function OA(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Xr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=NA(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:VA(n)}:{installationEntry:e}}async function NA(n,e){try{const t=await wA(n,e);return Sa(n.appConfig,t)}catch(t){throw mm(t)&&t.customData.serverCode===409?await bm(n.appConfig):await Sa(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function VA(n){let e=await bd(n.appConfig);for(;e.registrationStatus===1;)await wm(100),e=await bd(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await nu(n);return r||t}return e}function bd(n){return Ya(n,e=>{if(!e)throw Xr.create("installation-not-found");return Cm(e)})}function Cm(n){return LA(n)?{fid:n.fid,registrationStatus:0}:n}function LA(n){return n.registrationStatus===1&&n.registrationTime+dm<Date.now()}/**
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
 */async function xA({appConfig:n,heartbeatServiceProvider:e},t){const r=MA(n,t),i=yA(n,t),s=e.getImmediate({optional:!0});if(s){const m=await s.getHeartbeatsHeader();m&&i.append("x-firebase-client",m)}const c={installation:{sdkVersion:fm,appId:n.appId}},u={method:"POST",headers:i,body:JSON.stringify(c)},d=await Em(()=>fetch(r,u));if(d.ok){const m=await d.json();return _m(m)}else throw await ym("Generate Auth Token",d)}function MA(n,{fid:e}){return`${gm(n)}/${e}/authTokens:generate`}/**
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
 */async function ru(n,e=!1){let t;const r=await Ya(n.appConfig,s=>{if(!Rm(s))throw Xr.create("not-registered");const c=s.authToken;if(!e&&$A(c))return s;if(c.requestStatus===1)return t=FA(n,e),s;{if(!navigator.onLine)throw Xr.create("app-offline");const u=jA(s);return t=UA(n,u),u}});return t?await t:r.authToken}async function FA(n,e){let t=await Cd(n.appConfig);for(;t.authToken.requestStatus===1;)await wm(100),t=await Cd(n.appConfig);const r=t.authToken;return r.requestStatus===0?ru(n,e):r}function Cd(n){return Ya(n,e=>{if(!Rm(e))throw Xr.create("not-registered");const t=e.authToken;return qA(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function UA(n,e){try{const t=await xA(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Sa(n.appConfig,r),t}catch(t){if(mm(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await bm(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Sa(n.appConfig,r)}throw t}}function Rm(n){return n!==void 0&&n.registrationStatus===2}function $A(n){return n.requestStatus===2&&!BA(n)}function BA(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+pA}function jA(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function qA(n){return n.requestStatus===1&&n.requestTime+dm<Date.now()}/**
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
 */async function HA(n){const e=n,{installationEntry:t,registrationPromise:r}=await nu(e);return r?r.catch(console.error):ru(e).catch(console.error),t.fid}/**
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
 */async function zA(n,e=!1){const t=n;return await WA(t),(await ru(t,e)).token}async function WA(n){const{registrationPromise:e}=await nu(n);e&&await e}/**
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
 */function KA(n){if(!n||!n.options)throw Oc("App Configuration");if(!n.name)throw Oc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Oc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Oc(n){return Xr.create("missing-app-config-values",{valueName:n})}/**
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
 */const Sm="installations",GA="installations-internal",QA=n=>{const e=n.getProvider("app").getImmediate(),t=KA(e),r=ei(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YA=n=>{const e=n.getProvider("app").getImmediate(),t=ei(e,Sm).getImmediate();return{getId:()=>HA(t),getToken:i=>zA(t,i)}};function XA(){fn(new Yt(Sm,QA,"PUBLIC")),fn(new Yt(GA,YA,"PRIVATE"))}XA();Mt(hm,eu);Mt(hm,eu,"esm2017");/**
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
 */const Pa="analytics",JA="firebase_id",ZA="origin",eb=60*1e3,tb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",iu="https://www.googletagmanager.com/gtag/js";/**
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
 */const Et=new Da("@firebase/analytics");/**
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
 */const nb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new Zr("analytics","Analytics",nb);/**
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
 */function rb(n){if(!n.startsWith(iu)){const e=Rt.create("invalid-gtag-resource",{gtagURL:n});return Et.warn(e.message),""}return n}function Pm(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function ib(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function sb(n,e){const t=ib("firebase-js-sdk-policy",{createScriptURL:rb}),r=document.createElement("script"),i=`${iu}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ob(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function ab(n,e,t,r,i,s){const c=r[i];try{if(c)await e[c];else{const d=(await Pm(t)).find(m=>m.measurementId===i);d&&await e[d.appId]}}catch(u){Et.error(u)}n("config",i,s)}async function cb(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let c=i.send_to;Array.isArray(c)||(c=[c]);const u=await Pm(t);for(const d of c){const m=u.find(T=>T.measurementId===d),y=m&&e[m.appId];if(y)s.push(y);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){Et.error(s)}}function lb(n,e,t,r){async function i(s,...c){try{if(s==="event"){const[u,d]=c;await cb(n,e,t,u,d)}else if(s==="config"){const[u,d]=c;await ab(n,e,t,r,u,d)}else if(s==="consent"){const[u,d]=c;n("consent",u,d)}else if(s==="get"){const[u,d,m]=c;n("get",u,d,m)}else if(s==="set"){const[u]=c;n("set",u)}else n(s,...c)}catch(u){Et.error(u)}}return i}function ub(n,e,t,r,i){let s=function(...c){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=lb(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function hb(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(iu)&&t.src.includes(n))return t;return null}/**
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
 */const db=30,fb=1e3;class pb{constructor(e={},t=fb){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const km=new pb;function mb(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function gb(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:mb(r)},s=tb.replace("{app-id}",t),c=await fetch(s,i);if(c.status!==200&&c.status!==304){let u="";try{const d=await c.json();!((e=d.error)===null||e===void 0)&&e.message&&(u=d.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:c.status,responseMessage:u})}return c.json()}async function _b(n,e=km,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw Rt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Rt.create("no-api-key")}const c=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Eb;return setTimeout(async()=>{u.abort()},eb),Dm({appId:r,apiKey:i,measurementId:s},c,u,e)}async function Dm(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=km){var s;const{appId:c,measurementId:u}=n;try{await yb(r,e)}catch(d){if(u)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:c,measurementId:u};throw d}try{const d=await gb(n);return i.deleteThrottleMetadata(c),d}catch(d){const m=d;if(!vb(m)){if(i.deleteThrottleMetadata(c),u)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:c,measurementId:u};throw d}const y=Number((s=m==null?void 0:m.customData)===null||s===void 0?void 0:s.httpStatus)===503?Xu(t,i.intervalMillis,db):Xu(t,i.intervalMillis),T={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return i.setThrottleMetadata(c,T),Et.debug(`Calling attemptFetch again in ${y} millis`),Dm(n,T,r,i)}}function yb(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function vb(n){if(!(n instanceof Jt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Eb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function wb(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,c=Object.assign(Object.assign({},r),{send_to:s});n("event",t,c)}}/**
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
 */async function Tb(){if(jd())try{await qd()}catch(n){return Et.warn(Rt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Et.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ib(n,e,t,r,i,s,c){var u;const d=_b(n);d.then(N=>{t[N.measurementId]=N.appId,n.options.measurementId&&N.measurementId!==n.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>Et.error(N)),e.push(d);const m=Tb().then(N=>{if(N)return r.getId()}),[y,T]=await Promise.all([d,m]);hb(s)||sb(s,y.measurementId),i("js",new Date);const b=(u=c==null?void 0:c.config)!==null&&u!==void 0?u:{};return b[ZA]="firebase",b.update=!0,T!=null&&(b[JA]=T),i("config",y.measurementId,b),y.measurementId}/**
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
 */class Ab{constructor(e){this.app=e}_delete(){return delete qs[this.app.options.appId],Promise.resolve()}}let qs={},Rd=[];const Sd={};let Nc="dataLayer",bb="gtag",Pd,Om,kd=!1;function Cb(){const n=[];if(Bd()&&n.push("This is a browser extension environment."),E_()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Rt.create("invalid-analytics-context",{errorInfo:e});Et.warn(t.message)}}function Rb(n,e,t){Cb();const r=n.options.appId;if(!r)throw Rt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(qs[r]!=null)throw Rt.create("already-exists",{id:r});if(!kd){ob(Nc);const{wrappedGtag:s,gtagCore:c}=ub(qs,Rd,Sd,Nc,bb);Om=s,Pd=c,kd=!0}return qs[r]=Ib(n,Rd,Sd,e,Pd,Nc,t),new Ab(n)}function Sb(n=al()){n=Ye(n);const e=ei(n,Pa);return e.isInitialized()?e.getImmediate():Pb(n)}function Pb(n,e={}){const t=ei(n,Pa);if(t.isInitialized()){const i=t.getImmediate();if(pr(e,t.getOptions()))return i;throw Rt.create("already-initialized")}return t.initialize({options:e})}function kb(n,e,t,r){n=Ye(n),wb(Om,qs[n.app.options.appId],e,t,r).catch(i=>Et.error(i))}const Dd="@firebase/analytics",Od="0.10.16";function Db(){fn(new Yt(Pa,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Rb(r,i,t)},"PUBLIC")),fn(new Yt("analytics-internal",n,"PRIVATE")),Mt(Dd,Od),Mt(Dd,Od,"esm2017");function n(e){try{const t=e.getProvider(Pa).getImmediate();return{logEvent:(r,i,s)=>kb(t,r,i,s)}}catch(t){throw Rt.create("interop-component-reg-failed",{reason:t})}}}Db();const Ob={apiKey:"AIzaSyBkzv8uY4HBrF19P6CUvHrSnj6xOBXACnc",authDomain:"chronohaven.firebaseapp.com",projectId:"chronohaven",storageBucket:"chronohaven.firebasestorage.app",messagingSenderId:"598935116715",appId:"1:598935116715:web:3f7801faf73ec3e72450ee",measurementId:"G-KC1GKPTGVF"},su=Kd(Ob),Qb=ZE(su),Yb=QI(su);Sb(su);export{or as G,Qb as a,Ub as b,Bb as c,Yb as d,Lb as e,Kb as f,Wb as g,jb as h,Nb as i,Vb as j,zb as k,Gb as l,Fb as m,Mb as o,qb as q,xb as s,Hb as w};
