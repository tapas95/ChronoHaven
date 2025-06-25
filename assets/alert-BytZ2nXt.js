(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Ko={exports:{}};/*!
  * Bootstrap v5.3.6 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var jg=Ko.exports,$u;function qg(){return $u||($u=1,function(n,e){(function(t,r){n.exports=r()})(jg,function(){const t=new Map,r={set(p,a,h){t.has(p)||t.set(p,new Map);const g=t.get(p);g.has(a)||g.size===0?g.set(a,h):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(g.keys())[0]}.`)},get:(p,a)=>t.has(p)&&t.get(p).get(a)||null,remove(p,a){if(!t.has(p))return;const h=t.get(p);h.delete(a),h.size===0&&t.delete(p)}},i="transitionend",o=p=>(p&&window.CSS&&window.CSS.escape&&(p=p.replace(/#([^\s"#']+)/g,(a,h)=>`#${CSS.escape(h)}`)),p),c=p=>{p.dispatchEvent(new Event(i))},u=p=>!(!p||typeof p!="object")&&(p.jquery!==void 0&&(p=p[0]),p.nodeType!==void 0),d=p=>u(p)?p.jquery?p[0]:p:typeof p=="string"&&p.length>0?document.querySelector(o(p)):null,m=p=>{if(!u(p)||p.getClientRects().length===0)return!1;const a=getComputedStyle(p).getPropertyValue("visibility")==="visible",h=p.closest("details:not([open])");if(!h)return a;if(h!==p){const g=p.closest("summary");if(g&&g.parentNode!==h||g===null)return!1}return a},y=p=>!p||p.nodeType!==Node.ELEMENT_NODE||!!p.classList.contains("disabled")||(p.disabled!==void 0?p.disabled:p.hasAttribute("disabled")&&p.getAttribute("disabled")!=="false"),T=p=>{if(!document.documentElement.attachShadow)return null;if(typeof p.getRootNode=="function"){const a=p.getRootNode();return a instanceof ShadowRoot?a:null}return p instanceof ShadowRoot?p:p.parentNode?T(p.parentNode):null},A=()=>{},N=p=>{p.offsetHeight},B=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,W=[],F=()=>document.documentElement.dir==="rtl",ee=p=>{var a;a=()=>{const h=B();if(h){const g=p.NAME,b=h.fn[g];h.fn[g]=p.jQueryInterface,h.fn[g].Constructor=p,h.fn[g].noConflict=()=>(h.fn[g]=b,p.jQueryInterface)}},document.readyState==="loading"?(W.length||document.addEventListener("DOMContentLoaded",()=>{for(const h of W)h()}),W.push(a)):a()},G=(p,a=[],h=p)=>typeof p=="function"?p.call(...a):h,ce=(p,a,h=!0)=>{if(!h)return void G(p);const g=(D=>{if(!D)return 0;let{transitionDuration:L,transitionDelay:$}=window.getComputedStyle(D);const H=Number.parseFloat(L),z=Number.parseFloat($);return H||z?(L=L.split(",")[0],$=$.split(",")[0],1e3*(Number.parseFloat(L)+Number.parseFloat($))):0})(a)+5;let b=!1;const C=({target:D})=>{D===a&&(b=!0,a.removeEventListener(i,C),G(p))};a.addEventListener(i,C),setTimeout(()=>{b||c(a)},g)},be=(p,a,h,g)=>{const b=p.length;let C=p.indexOf(a);return C===-1?!h&&g?p[b-1]:p[0]:(C+=h?1:-1,g&&(C=(C+b)%b),p[Math.max(0,Math.min(C,b-1))])},mt=/[^.]*(?=\..*)\.|.*/,Pe=/\..*/,S=/::\d+$/,v={};let w=1;const I={mouseenter:"mouseover",mouseleave:"mouseout"},R=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function k(p,a){return a&&`${a}::${w++}`||p.uidEvent||w++}function E(p){const a=k(p);return p.uidEvent=a,v[a]=v[a]||{},v[a]}function Rt(p,a,h=null){return Object.values(p).find(g=>g.callable===a&&g.delegationSelector===h)}function $n(p,a,h){const g=typeof a=="string",b=g?h:a||h;let C=si(p);return R.has(C)||(C=p),[g,b,C]}function ao(p,a,h,g,b){if(typeof a!="string"||!p)return;let[C,D,L]=$n(a,h,g);a in I&&(D=(re=>function(te){if(!te.relatedTarget||te.relatedTarget!==te.delegateTarget&&!te.delegateTarget.contains(te.relatedTarget))return re.call(this,te)})(D));const $=E(p),H=$[L]||($[L]={}),z=Rt(H,D,C?h:null);if(z)return void(z.oneOff=z.oneOff&&b);const j=k(D,a.replace(mt,"")),oe=C?function(X,re,te){return function ie(Te){const Se=X.querySelectorAll(re);for(let{target:ue}=Te;ue&&ue!==this;ue=ue.parentNode)for(const _e of Se)if(_e===ue)return Ji(Te,{delegateTarget:ue}),ie.oneOff&&x.off(X,Te.type,re,te),te.apply(ue,[Te])}}(p,h,D):function(X,re){return function te(ie){return Ji(ie,{delegateTarget:X}),te.oneOff&&x.off(X,ie.type,re),re.apply(X,[ie])}}(p,D);oe.delegationSelector=C?h:null,oe.callable=D,oe.oneOff=b,oe.uidEvent=j,H[j]=oe,p.addEventListener(L,oe,C)}function gn(p,a,h,g,b){const C=Rt(a[h],g,b);C&&(p.removeEventListener(h,C,!!b),delete a[h][C.uidEvent])}function wr(p,a,h,g){const b=a[h]||{};for(const[C,D]of Object.entries(b))C.includes(g)&&gn(p,a,h,D.callable,D.delegationSelector)}function si(p){return p=p.replace(Pe,""),I[p]||p}const x={on(p,a,h,g){ao(p,a,h,g,!1)},one(p,a,h,g){ao(p,a,h,g,!0)},off(p,a,h,g){if(typeof a!="string"||!p)return;const[b,C,D]=$n(a,h,g),L=D!==a,$=E(p),H=$[D]||{},z=a.startsWith(".");if(C===void 0){if(z)for(const j of Object.keys($))wr(p,$,j,a.slice(1));for(const[j,oe]of Object.entries(H)){const X=j.replace(S,"");L&&!a.includes(X)||gn(p,$,D,oe.callable,oe.delegationSelector)}}else{if(!Object.keys(H).length)return;gn(p,$,D,C,b?h:null)}},trigger(p,a,h){if(typeof a!="string"||!p)return null;const g=B();let b=null,C=!0,D=!0,L=!1;a!==si(a)&&g&&(b=g.Event(a,h),g(p).trigger(b),C=!b.isPropagationStopped(),D=!b.isImmediatePropagationStopped(),L=b.isDefaultPrevented());const $=Ji(new Event(a,{bubbles:C,cancelable:!0}),h);return L&&$.preventDefault(),D&&p.dispatchEvent($),$.defaultPrevented&&b&&b.preventDefault(),$}};function Ji(p,a={}){for(const[h,g]of Object.entries(a))try{p[h]=g}catch{Object.defineProperty(p,h,{configurable:!0,get:()=>g})}return p}function Ut(p){if(p==="true")return!0;if(p==="false")return!1;if(p===Number(p).toString())return Number(p);if(p===""||p==="null")return null;if(typeof p!="string")return p;try{return JSON.parse(decodeURIComponent(p))}catch{return p}}function xe(p){return p.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}const $t={setDataAttribute(p,a,h){p.setAttribute(`data-bs-${xe(a)}`,h)},removeDataAttribute(p,a){p.removeAttribute(`data-bs-${xe(a)}`)},getDataAttributes(p){if(!p)return{};const a={},h=Object.keys(p.dataset).filter(g=>g.startsWith("bs")&&!g.startsWith("bsConfig"));for(const g of h){let b=g.replace(/^bs/,"");b=b.charAt(0).toLowerCase()+b.slice(1),a[b]=Ut(p.dataset[g])}return a},getDataAttribute:(p,a)=>Ut(p.getAttribute(`data-bs-${xe(a)}`))};class Bt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(a){return a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a}_mergeConfigObj(a,h){const g=u(h)?$t.getDataAttribute(h,"config"):{};return{...this.constructor.Default,...typeof g=="object"?g:{},...u(h)?$t.getDataAttributes(h):{},...typeof a=="object"?a:{}}}_typeCheckConfig(a,h=this.constructor.DefaultType){for(const[b,C]of Object.entries(h)){const D=a[b],L=u(D)?"element":(g=D)==null?`${g}`:Object.prototype.toString.call(g).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(C).test(L))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${b}" provided type "${L}" but expected type "${C}".`)}var g}}class Et extends Bt{constructor(a,h){super(),(a=d(a))&&(this._element=a,this._config=this._getConfig(h),r.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.remove(this._element,this.constructor.DATA_KEY),x.off(this._element,this.constructor.EVENT_KEY);for(const a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,h,g=!0){ce(a,h,g)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return r.get(d(a),this.DATA_KEY)}static getOrCreateInstance(a,h={}){return this.getInstance(a)||new this(a,typeof h=="object"?h:null)}static get VERSION(){return"5.3.6"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}const Bn=p=>{let a=p.getAttribute("data-bs-target");if(!a||a==="#"){let h=p.getAttribute("href");if(!h||!h.includes("#")&&!h.startsWith("."))return null;h.includes("#")&&!h.startsWith("#")&&(h=`#${h.split("#")[1]}`),a=h&&h!=="#"?h.trim():null}return a?a.split(",").map(h=>o(h)).join(","):null},Q={find:(p,a=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(a,p)),findOne:(p,a=document.documentElement)=>Element.prototype.querySelector.call(a,p),children:(p,a)=>[].concat(...p.children).filter(h=>h.matches(a)),parents(p,a){const h=[];let g=p.parentNode.closest(a);for(;g;)h.push(g),g=g.parentNode.closest(a);return h},prev(p,a){let h=p.previousElementSibling;for(;h;){if(h.matches(a))return[h];h=h.previousElementSibling}return[]},next(p,a){let h=p.nextElementSibling;for(;h;){if(h.matches(a))return[h];h=h.nextElementSibling}return[]},focusableChildren(p){const a=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(h=>`${h}:not([tabindex^="-"])`).join(",");return this.find(a,p).filter(h=>!y(h)&&m(h))},getSelectorFromElement(p){const a=Bn(p);return a&&Q.findOne(a)?a:null},getElementFromSelector(p){const a=Bn(p);return a?Q.findOne(a):null},getMultipleElementsFromSelector(p){const a=Bn(p);return a?Q.find(a):[]}},oi=(p,a="hide")=>{const h=`click.dismiss${p.EVENT_KEY}`,g=p.NAME;x.on(document,h,`[data-bs-dismiss="${g}"]`,function(b){if(["A","AREA"].includes(this.tagName)&&b.preventDefault(),y(this))return;const C=Q.getElementFromSelector(this)||this.closest(`.${g}`);p.getOrCreateInstance(C)[a]()})},Tr=".bs.alert",ai=`close${Tr}`,Zi=`closed${Tr}`;class _n extends Et{static get NAME(){return"alert"}close(){if(x.trigger(this._element,ai).defaultPrevented)return;this._element.classList.remove("show");const a=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,a)}_destroyElement(){this._element.remove(),x.trigger(this._element,Zi),this.dispose()}static jQueryInterface(a){return this.each(function(){const h=_n.getOrCreateInstance(this);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a](this)}})}}oi(_n,"close"),ee(_n);const ci='[data-bs-toggle="button"]';class yn extends Et{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(a){return this.each(function(){const h=yn.getOrCreateInstance(this);a==="toggle"&&h[a]()})}}x.on(document,"click.bs.button.data-api",ci,p=>{p.preventDefault();const a=p.target.closest(ci);yn.getOrCreateInstance(a).toggle()}),ee(yn);const vn=".bs.swipe",Qa=`touchstart${vn}`,Ya=`touchmove${vn}`,co=`touchend${vn}`,es=`pointerdown${vn}`,lo=`pointerup${vn}`,Xa={endCallback:null,leftCallback:null,rightCallback:null},ts={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class jn extends Bt{constructor(a,h){super(),this._element=a,a&&jn.isSupported()&&(this._config=this._getConfig(h),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Xa}static get DefaultType(){return ts}static get NAME(){return"swipe"}dispose(){x.off(this._element,vn)}_start(a){this._supportPointerEvents?this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX):this._deltaX=a.touches[0].clientX}_end(a){this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX-this._deltaX),this._handleSwipe(),G(this._config.endCallback)}_move(a){this._deltaX=a.touches&&a.touches.length>1?0:a.touches[0].clientX-this._deltaX}_handleSwipe(){const a=Math.abs(this._deltaX);if(a<=40)return;const h=a/this._deltaX;this._deltaX=0,h&&G(h>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(x.on(this._element,es,a=>this._start(a)),x.on(this._element,lo,a=>this._end(a)),this._element.classList.add("pointer-event")):(x.on(this._element,Qa,a=>this._start(a)),x.on(this._element,Ya,a=>this._move(a)),x.on(this._element,co,a=>this._end(a)))}_eventIsPointerPenTouch(a){return this._supportPointerEvents&&(a.pointerType==="pen"||a.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const jt=".bs.carousel",Fe=".data-api",Ye="ArrowLeft",li="ArrowRight",qn="next",En="prev",Hn="left",Jt="right",uo=`slide${jt}`,ui=`slid${jt}`,ns=`keydown${jt}`,Ja=`mouseenter${jt}`,Za=`mouseleave${jt}`,rs=`dragstart${jt}`,ho=`load${jt}${Fe}`,fo=`click${jt}${Fe}`,zn="carousel",Wn="active",hi=".active",Zt=".carousel-item",po=hi+Zt,di={[Ye]:Jt,[li]:Hn},mo={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ir={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class wn extends Et{constructor(a,h){super(a,h),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===zn&&this.cycle()}static get Default(){return mo}static get DefaultType(){return Ir}static get NAME(){return"carousel"}next(){this._slide(qn)}nextWhenVisible(){!document.hidden&&m(this._element)&&this.next()}prev(){this._slide(En)}pause(){this._isSliding&&c(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?x.one(this._element,ui,()=>this.cycle()):this.cycle())}to(a){const h=this._getItems();if(a>h.length-1||a<0)return;if(this._isSliding)return void x.one(this._element,ui,()=>this.to(a));const g=this._getItemIndex(this._getActive());if(g===a)return;const b=a>g?qn:En;this._slide(b,h[a])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(a){return a.defaultInterval=a.interval,a}_addEventListeners(){this._config.keyboard&&x.on(this._element,ns,a=>this._keydown(a)),this._config.pause==="hover"&&(x.on(this._element,Ja,()=>this.pause()),x.on(this._element,Za,()=>this._maybeEnableCycle())),this._config.touch&&jn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const h of Q.find(".carousel-item img",this._element))x.on(h,rs,g=>g.preventDefault());const a={leftCallback:()=>this._slide(this._directionToOrder(Hn)),rightCallback:()=>this._slide(this._directionToOrder(Jt)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new jn(this._element,a)}_keydown(a){if(/input|textarea/i.test(a.target.tagName))return;const h=di[a.key];h&&(a.preventDefault(),this._slide(this._directionToOrder(h)))}_getItemIndex(a){return this._getItems().indexOf(a)}_setActiveIndicatorElement(a){if(!this._indicatorsElement)return;const h=Q.findOne(hi,this._indicatorsElement);h.classList.remove(Wn),h.removeAttribute("aria-current");const g=Q.findOne(`[data-bs-slide-to="${a}"]`,this._indicatorsElement);g&&(g.classList.add(Wn),g.setAttribute("aria-current","true"))}_updateInterval(){const a=this._activeElement||this._getActive();if(!a)return;const h=Number.parseInt(a.getAttribute("data-bs-interval"),10);this._config.interval=h||this._config.defaultInterval}_slide(a,h=null){if(this._isSliding)return;const g=this._getActive(),b=a===qn,C=h||be(this._getItems(),g,b,this._config.wrap);if(C===g)return;const D=this._getItemIndex(C),L=j=>x.trigger(this._element,j,{relatedTarget:C,direction:this._orderToDirection(a),from:this._getItemIndex(g),to:D});if(L(uo).defaultPrevented||!g||!C)return;const $=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(D),this._activeElement=C;const H=b?"carousel-item-start":"carousel-item-end",z=b?"carousel-item-next":"carousel-item-prev";C.classList.add(z),N(C),g.classList.add(H),C.classList.add(H),this._queueCallback(()=>{C.classList.remove(H,z),C.classList.add(Wn),g.classList.remove(Wn,z,H),this._isSliding=!1,L(ui)},g,this._isAnimated()),$&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return Q.findOne(po,this._element)}_getItems(){return Q.find(Zt,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(a){return F()?a===Hn?En:qn:a===Hn?qn:En}_orderToDirection(a){return F()?a===En?Hn:Jt:a===En?Jt:Hn}static jQueryInterface(a){return this.each(function(){const h=wn.getOrCreateInstance(this,a);if(typeof a!="number"){if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a]()}}else h.to(a)})}}x.on(document,fo,"[data-bs-slide], [data-bs-slide-to]",function(p){const a=Q.getElementFromSelector(this);if(!a||!a.classList.contains(zn))return;p.preventDefault();const h=wn.getOrCreateInstance(a),g=this.getAttribute("data-bs-slide-to");return g?(h.to(g),void h._maybeEnableCycle()):$t.getDataAttribute(this,"slide")==="next"?(h.next(),void h._maybeEnableCycle()):(h.prev(),void h._maybeEnableCycle())}),x.on(window,ho,()=>{const p=Q.find('[data-bs-ride="carousel"]');for(const a of p)wn.getOrCreateInstance(a)}),ee(wn);const Ne=".bs.collapse",go=`show${Ne}`,br=`shown${Ne}`,Ar=`hide${Ne}`,ec=`hidden${Ne}`,tc=`click${Ne}.data-api`,en="show",Kn="collapse",fi="collapsing",pi=`:scope .${Kn} .${Kn}`,mi='[data-bs-toggle="collapse"]',is={parent:null,toggle:!0},gi={parent:"(null|element)",toggle:"boolean"};class ct extends Et{constructor(a,h){super(a,h),this._isTransitioning=!1,this._triggerArray=[];const g=Q.find(mi);for(const b of g){const C=Q.getSelectorFromElement(b),D=Q.find(C).filter(L=>L===this._element);C!==null&&D.length&&this._triggerArray.push(b)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return is}static get DefaultType(){return gi}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(b=>b!==this._element).map(b=>ct.getOrCreateInstance(b,{toggle:!1}))),a.length&&a[0]._isTransitioning||x.trigger(this._element,go).defaultPrevented)return;for(const b of a)b.hide();const h=this._getDimension();this._element.classList.remove(Kn),this._element.classList.add(fi),this._element.style[h]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const g=`scroll${h[0].toUpperCase()+h.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(fi),this._element.classList.add(Kn,en),this._element.style[h]="",x.trigger(this._element,br)},this._element,!0),this._element.style[h]=`${this._element[g]}px`}hide(){if(this._isTransitioning||!this._isShown()||x.trigger(this._element,Ar).defaultPrevented)return;const a=this._getDimension();this._element.style[a]=`${this._element.getBoundingClientRect()[a]}px`,N(this._element),this._element.classList.add(fi),this._element.classList.remove(Kn,en);for(const h of this._triggerArray){const g=Q.getElementFromSelector(h);g&&!this._isShown(g)&&this._addAriaAndCollapsedClass([h],!1)}this._isTransitioning=!0,this._element.style[a]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(fi),this._element.classList.add(Kn),x.trigger(this._element,ec)},this._element,!0)}_isShown(a=this._element){return a.classList.contains(en)}_configAfterMerge(a){return a.toggle=!!a.toggle,a.parent=d(a.parent),a}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const a=this._getFirstLevelChildren(mi);for(const h of a){const g=Q.getElementFromSelector(h);g&&this._addAriaAndCollapsedClass([h],this._isShown(g))}}_getFirstLevelChildren(a){const h=Q.find(pi,this._config.parent);return Q.find(a,this._config.parent).filter(g=>!h.includes(g))}_addAriaAndCollapsedClass(a,h){if(a.length)for(const g of a)g.classList.toggle("collapsed",!h),g.setAttribute("aria-expanded",h)}static jQueryInterface(a){const h={};return typeof a=="string"&&/show|hide/.test(a)&&(h.toggle=!1),this.each(function(){const g=ct.getOrCreateInstance(this,h);if(typeof a=="string"){if(g[a]===void 0)throw new TypeError(`No method named "${a}"`);g[a]()}})}}x.on(document,tc,mi,function(p){(p.target.tagName==="A"||p.delegateTarget&&p.delegateTarget.tagName==="A")&&p.preventDefault();for(const a of Q.getMultipleElementsFromSelector(this))ct.getOrCreateInstance(a,{toggle:!1}).toggle()}),ee(ct);var He="top",nt="bottom",Xe="right",Ue="left",Cr="auto",Tn=[He,nt,Xe,Ue],In="start",qt="end",ss="clippingParents",Sr="viewport",Pt="popper",tn="reference",Rr=Tn.reduce(function(p,a){return p.concat([a+"-"+In,a+"-"+qt])},[]),os=[].concat(Tn,[Cr]).reduce(function(p,a){return p.concat([a,a+"-"+In,a+"-"+qt])},[]),as="beforeRead",cs="read",ls="afterRead",_i="beforeMain",yi="main",us="afterMain",hs="beforeWrite",_o="write",yo="afterWrite",ds=[as,cs,ls,_i,yi,us,hs,_o,yo];function wt(p){return p?(p.nodeName||"").toLowerCase():null}function lt(p){if(p==null)return window;if(p.toString()!=="[object Window]"){var a=p.ownerDocument;return a&&a.defaultView||window}return p}function ut(p){return p instanceof lt(p).Element||p instanceof Element}function Oe(p){return p instanceof lt(p).HTMLElement||p instanceof HTMLElement}function Gn(p){return typeof ShadowRoot<"u"&&(p instanceof lt(p).ShadowRoot||p instanceof ShadowRoot)}const Qn={name:"applyStyles",enabled:!0,phase:"write",fn:function(p){var a=p.state;Object.keys(a.elements).forEach(function(h){var g=a.styles[h]||{},b=a.attributes[h]||{},C=a.elements[h];Oe(C)&&wt(C)&&(Object.assign(C.style,g),Object.keys(b).forEach(function(D){var L=b[D];L===!1?C.removeAttribute(D):C.setAttribute(D,L===!0?"":L)}))})},effect:function(p){var a=p.state,h={popper:{position:a.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(a.elements.popper.style,h.popper),a.styles=h,a.elements.arrow&&Object.assign(a.elements.arrow.style,h.arrow),function(){Object.keys(a.elements).forEach(function(g){var b=a.elements[g],C=a.attributes[g]||{},D=Object.keys(a.styles.hasOwnProperty(g)?a.styles[g]:h[g]).reduce(function(L,$){return L[$]="",L},{});Oe(b)&&wt(b)&&(Object.assign(b.style,D),Object.keys(C).forEach(function(L){b.removeAttribute(L)}))})}},requires:["computeStyles"]};function Tt(p){return p.split("-")[0]}var ge=Math.max,bn=Math.min,kt=Math.round;function An(){var p=navigator.userAgentData;return p!=null&&p.brands&&Array.isArray(p.brands)?p.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function vo(){return!/^((?!chrome|android).)*safari/i.test(An())}function Cn(p,a,h){a===void 0&&(a=!1),h===void 0&&(h=!1);var g=p.getBoundingClientRect(),b=1,C=1;a&&Oe(p)&&(b=p.offsetWidth>0&&kt(g.width)/p.offsetWidth||1,C=p.offsetHeight>0&&kt(g.height)/p.offsetHeight||1);var D=(ut(p)?lt(p):window).visualViewport,L=!vo()&&h,$=(g.left+(L&&D?D.offsetLeft:0))/b,H=(g.top+(L&&D?D.offsetTop:0))/C,z=g.width/b,j=g.height/C;return{width:z,height:j,top:H,right:$+z,bottom:H+j,left:$,x:$,y:H}}function fs(p){var a=Cn(p),h=p.offsetWidth,g=p.offsetHeight;return Math.abs(a.width-h)<=1&&(h=a.width),Math.abs(a.height-g)<=1&&(g=a.height),{x:p.offsetLeft,y:p.offsetTop,width:h,height:g}}function Eo(p,a){var h=a.getRootNode&&a.getRootNode();if(p.contains(a))return!0;if(h&&Gn(h)){var g=a;do{if(g&&p.isSameNode(g))return!0;g=g.parentNode||g.host}while(g)}return!1}function Ht(p){return lt(p).getComputedStyle(p)}function nc(p){return["table","td","th"].indexOf(wt(p))>=0}function gt(p){return((ut(p)?p.ownerDocument:p.document)||window.document).documentElement}function It(p){return wt(p)==="html"?p:p.assignedSlot||p.parentNode||(Gn(p)?p.host:null)||gt(p)}function ps(p){return Oe(p)&&Ht(p).position!=="fixed"?p.offsetParent:null}function Yn(p){for(var a=lt(p),h=ps(p);h&&nc(h)&&Ht(h).position==="static";)h=ps(h);return h&&(wt(h)==="html"||wt(h)==="body"&&Ht(h).position==="static")?a:h||function(g){var b=/firefox/i.test(An());if(/Trident/i.test(An())&&Oe(g)&&Ht(g).position==="fixed")return null;var C=It(g);for(Gn(C)&&(C=C.host);Oe(C)&&["html","body"].indexOf(wt(C))<0;){var D=Ht(C);if(D.transform!=="none"||D.perspective!=="none"||D.contain==="paint"||["transform","perspective"].indexOf(D.willChange)!==-1||b&&D.willChange==="filter"||b&&D.filter&&D.filter!=="none")return C;C=C.parentNode}return null}(p)||a}function vi(p){return["top","bottom"].indexOf(p)>=0?"x":"y"}function Ot(p,a,h){return ge(p,bn(a,h))}function wo(p){return Object.assign({},{top:0,right:0,bottom:0,left:0},p)}function To(p,a){return a.reduce(function(h,g){return h[g]=p,h},{})}const Io={name:"arrow",enabled:!0,phase:"main",fn:function(p){var a,h=p.state,g=p.name,b=p.options,C=h.elements.arrow,D=h.modifiersData.popperOffsets,L=Tt(h.placement),$=vi(L),H=[Ue,Xe].indexOf(L)>=0?"height":"width";if(C&&D){var z=function(Ie,we){return wo(typeof(Ie=typeof Ie=="function"?Ie(Object.assign({},we.rects,{placement:we.placement})):Ie)!="number"?Ie:To(Ie,Tn))}(b.padding,h),j=fs(C),oe=$==="y"?He:Ue,X=$==="y"?nt:Xe,re=h.rects.reference[H]+h.rects.reference[$]-D[$]-h.rects.popper[H],te=D[$]-h.rects.reference[$],ie=Yn(C),Te=ie?$==="y"?ie.clientHeight||0:ie.clientWidth||0:0,Se=re/2-te/2,ue=z[oe],_e=Te-j[H]-z[X],ae=Te/2-j[H]/2+Se,fe=Ot(ue,ae,_e),Ee=$;h.modifiersData[g]=((a={})[Ee]=fe,a.centerOffset=fe-ae,a)}},effect:function(p){var a=p.state,h=p.options.element,g=h===void 0?"[data-popper-arrow]":h;g!=null&&(typeof g!="string"||(g=a.elements.popper.querySelector(g)))&&Eo(a.elements.popper,g)&&(a.elements.arrow=g)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ht(p){return p.split("-")[1]}var rc={top:"auto",right:"auto",bottom:"auto",left:"auto"};function bo(p){var a,h=p.popper,g=p.popperRect,b=p.placement,C=p.variation,D=p.offsets,L=p.position,$=p.gpuAcceleration,H=p.adaptive,z=p.roundOffsets,j=p.isFixed,oe=D.x,X=oe===void 0?0:oe,re=D.y,te=re===void 0?0:re,ie=typeof z=="function"?z({x:X,y:te}):{x:X,y:te};X=ie.x,te=ie.y;var Te=D.hasOwnProperty("x"),Se=D.hasOwnProperty("y"),ue=Ue,_e=He,ae=window;if(H){var fe=Yn(h),Ee="clientHeight",Ie="clientWidth";fe===lt(h)&&Ht(fe=gt(h)).position!=="static"&&L==="absolute"&&(Ee="scrollHeight",Ie="scrollWidth"),(b===He||(b===Ue||b===Xe)&&C===qt)&&(_e=nt,te-=(j&&fe===ae&&ae.visualViewport?ae.visualViewport.height:fe[Ee])-g.height,te*=$?1:-1),b!==Ue&&(b!==He&&b!==nt||C!==qt)||(ue=Xe,X-=(j&&fe===ae&&ae.visualViewport?ae.visualViewport.width:fe[Ie])-g.width,X*=$?1:-1)}var we,Ve=Object.assign({position:L},H&&rc),bt=z===!0?function(Wt,ft){var Nt=Wt.x,Vt=Wt.y,De=ft.devicePixelRatio||1;return{x:kt(Nt*De)/De||0,y:kt(Vt*De)/De||0}}({x:X,y:te},lt(h)):{x:X,y:te};return X=bt.x,te=bt.y,$?Object.assign({},Ve,((we={})[_e]=Se?"0":"",we[ue]=Te?"0":"",we.transform=(ae.devicePixelRatio||1)<=1?"translate("+X+"px, "+te+"px)":"translate3d("+X+"px, "+te+"px, 0)",we)):Object.assign({},Ve,((a={})[_e]=Se?te+"px":"",a[ue]=Te?X+"px":"",a.transform="",a))}const Xn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(p){var a=p.state,h=p.options,g=h.gpuAcceleration,b=g===void 0||g,C=h.adaptive,D=C===void 0||C,L=h.roundOffsets,$=L===void 0||L,H={placement:Tt(a.placement),variation:ht(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:b,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,bo(Object.assign({},H,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:D,roundOffsets:$})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,bo(Object.assign({},H,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:$})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})},data:{}};var Sn={passive:!0};const Ei={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(p){var a=p.state,h=p.instance,g=p.options,b=g.scroll,C=b===void 0||b,D=g.resize,L=D===void 0||D,$=lt(a.elements.popper),H=[].concat(a.scrollParents.reference,a.scrollParents.popper);return C&&H.forEach(function(z){z.addEventListener("scroll",h.update,Sn)}),L&&$.addEventListener("resize",h.update,Sn),function(){C&&H.forEach(function(z){z.removeEventListener("scroll",h.update,Sn)}),L&&$.removeEventListener("resize",h.update,Sn)}},data:{}};var Pr={left:"right",right:"left",bottom:"top",top:"bottom"};function nn(p){return p.replace(/left|right|bottom|top/g,function(a){return Pr[a]})}var Ao={start:"end",end:"start"};function wi(p){return p.replace(/start|end/g,function(a){return Ao[a]})}function Ce(p){var a=lt(p);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function ms(p){return Cn(gt(p)).left+Ce(p).scrollLeft}function gs(p){var a=Ht(p),h=a.overflow,g=a.overflowX,b=a.overflowY;return/auto|scroll|overlay|hidden/.test(h+b+g)}function _s(p){return["html","body","#document"].indexOf(wt(p))>=0?p.ownerDocument.body:Oe(p)&&gs(p)?p:_s(It(p))}function Jn(p,a){var h;a===void 0&&(a=[]);var g=_s(p),b=g===((h=p.ownerDocument)==null?void 0:h.body),C=lt(g),D=b?[C].concat(C.visualViewport||[],gs(g)?g:[]):g,L=a.concat(D);return b?L:L.concat(Jn(It(D)))}function Ti(p){return Object.assign({},p,{left:p.x,top:p.y,right:p.x+p.width,bottom:p.y+p.height})}function kr(p,a,h){return a===Sr?Ti(function(g,b){var C=lt(g),D=gt(g),L=C.visualViewport,$=D.clientWidth,H=D.clientHeight,z=0,j=0;if(L){$=L.width,H=L.height;var oe=vo();(oe||!oe&&b==="fixed")&&(z=L.offsetLeft,j=L.offsetTop)}return{width:$,height:H,x:z+ms(g),y:j}}(p,h)):ut(a)?function(g,b){var C=Cn(g,!1,b==="fixed");return C.top=C.top+g.clientTop,C.left=C.left+g.clientLeft,C.bottom=C.top+g.clientHeight,C.right=C.left+g.clientWidth,C.width=g.clientWidth,C.height=g.clientHeight,C.x=C.left,C.y=C.top,C}(a,h):Ti(function(g){var b,C=gt(g),D=Ce(g),L=(b=g.ownerDocument)==null?void 0:b.body,$=ge(C.scrollWidth,C.clientWidth,L?L.scrollWidth:0,L?L.clientWidth:0),H=ge(C.scrollHeight,C.clientHeight,L?L.scrollHeight:0,L?L.clientHeight:0),z=-D.scrollLeft+ms(g),j=-D.scrollTop;return Ht(L||C).direction==="rtl"&&(z+=ge(C.clientWidth,L?L.clientWidth:0)-$),{width:$,height:H,x:z,y:j}}(gt(p)))}function ys(p){var a,h=p.reference,g=p.element,b=p.placement,C=b?Tt(b):null,D=b?ht(b):null,L=h.x+h.width/2-g.width/2,$=h.y+h.height/2-g.height/2;switch(C){case He:a={x:L,y:h.y-g.height};break;case nt:a={x:L,y:h.y+h.height};break;case Xe:a={x:h.x+h.width,y:$};break;case Ue:a={x:h.x-g.width,y:$};break;default:a={x:h.x,y:h.y}}var H=C?vi(C):null;if(H!=null){var z=H==="y"?"height":"width";switch(D){case In:a[H]=a[H]-(h[z]/2-g[z]/2);break;case qt:a[H]=a[H]+(h[z]/2-g[z]/2)}}return a}function rt(p,a){a===void 0&&(a={});var h=a,g=h.placement,b=g===void 0?p.placement:g,C=h.strategy,D=C===void 0?p.strategy:C,L=h.boundary,$=L===void 0?ss:L,H=h.rootBoundary,z=H===void 0?Sr:H,j=h.elementContext,oe=j===void 0?Pt:j,X=h.altBoundary,re=X!==void 0&&X,te=h.padding,ie=te===void 0?0:te,Te=wo(typeof ie!="number"?ie:To(ie,Tn)),Se=oe===Pt?tn:Pt,ue=p.rects.popper,_e=p.elements[re?Se:oe],ae=function(ft,Nt,Vt,De){var sn=Nt==="clippingParents"?function(Ae){var pt=Jn(It(Ae)),Lt=["absolute","fixed"].indexOf(Ht(Ae).position)>=0&&Oe(Ae)?Yn(Ae):Ae;return ut(Lt)?pt.filter(function(rr){return ut(rr)&&Eo(rr,Lt)&&wt(rr)!=="body"}):[]}(ft):[].concat(Nt),on=[].concat(sn,[Vt]),Pi=on[0],Ge=on.reduce(function(Ae,pt){var Lt=kr(ft,pt,De);return Ae.top=ge(Lt.top,Ae.top),Ae.right=bn(Lt.right,Ae.right),Ae.bottom=bn(Lt.bottom,Ae.bottom),Ae.left=ge(Lt.left,Ae.left),Ae},kr(ft,Pi,De));return Ge.width=Ge.right-Ge.left,Ge.height=Ge.bottom-Ge.top,Ge.x=Ge.left,Ge.y=Ge.top,Ge}(ut(_e)?_e:_e.contextElement||gt(p.elements.popper),$,z,D),fe=Cn(p.elements.reference),Ee=ys({reference:fe,element:ue,placement:b}),Ie=Ti(Object.assign({},ue,Ee)),we=oe===Pt?Ie:fe,Ve={top:ae.top-we.top+Te.top,bottom:we.bottom-ae.bottom+Te.bottom,left:ae.left-we.left+Te.left,right:we.right-ae.right+Te.right},bt=p.modifiersData.offset;if(oe===Pt&&bt){var Wt=bt[b];Object.keys(Ve).forEach(function(ft){var Nt=[Xe,nt].indexOf(ft)>=0?1:-1,Vt=[He,nt].indexOf(ft)>=0?"y":"x";Ve[ft]+=Wt[Vt]*Nt})}return Ve}function Co(p,a){a===void 0&&(a={});var h=a,g=h.placement,b=h.boundary,C=h.rootBoundary,D=h.padding,L=h.flipVariations,$=h.allowedAutoPlacements,H=$===void 0?os:$,z=ht(g),j=z?L?Rr:Rr.filter(function(re){return ht(re)===z}):Tn,oe=j.filter(function(re){return H.indexOf(re)>=0});oe.length===0&&(oe=j);var X=oe.reduce(function(re,te){return re[te]=rt(p,{placement:te,boundary:b,rootBoundary:C,padding:D})[Tt(te)],re},{});return Object.keys(X).sort(function(re,te){return X[re]-X[te]})}const So={name:"flip",enabled:!0,phase:"main",fn:function(p){var a=p.state,h=p.options,g=p.name;if(!a.modifiersData[g]._skip){for(var b=h.mainAxis,C=b===void 0||b,D=h.altAxis,L=D===void 0||D,$=h.fallbackPlacements,H=h.padding,z=h.boundary,j=h.rootBoundary,oe=h.altBoundary,X=h.flipVariations,re=X===void 0||X,te=h.allowedAutoPlacements,ie=a.options.placement,Te=Tt(ie),Se=$||(Te!==ie&&re?function(Ae){if(Tt(Ae)===Cr)return[];var pt=nn(Ae);return[wi(Ae),pt,wi(pt)]}(ie):[nn(ie)]),ue=[ie].concat(Se).reduce(function(Ae,pt){return Ae.concat(Tt(pt)===Cr?Co(a,{placement:pt,boundary:z,rootBoundary:j,padding:H,flipVariations:re,allowedAutoPlacements:te}):pt)},[]),_e=a.rects.reference,ae=a.rects.popper,fe=new Map,Ee=!0,Ie=ue[0],we=0;we<ue.length;we++){var Ve=ue[we],bt=Tt(Ve),Wt=ht(Ve)===In,ft=[He,nt].indexOf(bt)>=0,Nt=ft?"width":"height",Vt=rt(a,{placement:Ve,boundary:z,rootBoundary:j,altBoundary:oe,padding:H}),De=ft?Wt?Xe:Ue:Wt?nt:He;_e[Nt]>ae[Nt]&&(De=nn(De));var sn=nn(De),on=[];if(C&&on.push(Vt[bt]<=0),L&&on.push(Vt[De]<=0,Vt[sn]<=0),on.every(function(Ae){return Ae})){Ie=Ve,Ee=!1;break}fe.set(Ve,on)}if(Ee)for(var Pi=function(Ae){var pt=ue.find(function(Lt){var rr=fe.get(Lt);if(rr)return rr.slice(0,Ae).every(function(Fo){return Fo})});if(pt)return Ie=pt,"break"},Ge=re?3:1;Ge>0&&Pi(Ge)!=="break";Ge--);a.placement!==Ie&&(a.modifiersData[g]._skip=!0,a.placement=Ie,a.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Zn(p,a,h){return h===void 0&&(h={x:0,y:0}),{top:p.top-a.height-h.y,right:p.right-a.width+h.x,bottom:p.bottom-a.height+h.y,left:p.left-a.width-h.x}}function vs(p){return[He,Xe,nt,Ue].some(function(a){return p[a]>=0})}const Ii={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(p){var a=p.state,h=p.name,g=a.rects.reference,b=a.rects.popper,C=a.modifiersData.preventOverflow,D=rt(a,{elementContext:"reference"}),L=rt(a,{altBoundary:!0}),$=Zn(D,g),H=Zn(L,b,C),z=vs($),j=vs(H);a.modifiersData[h]={referenceClippingOffsets:$,popperEscapeOffsets:H,isReferenceHidden:z,hasPopperEscaped:j},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":z,"data-popper-escaped":j})}},Or={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(p){var a=p.state,h=p.options,g=p.name,b=h.offset,C=b===void 0?[0,0]:b,D=os.reduce(function(z,j){return z[j]=function(oe,X,re){var te=Tt(oe),ie=[Ue,He].indexOf(te)>=0?-1:1,Te=typeof re=="function"?re(Object.assign({},X,{placement:oe})):re,Se=Te[0],ue=Te[1];return Se=Se||0,ue=(ue||0)*ie,[Ue,Xe].indexOf(te)>=0?{x:ue,y:Se}:{x:Se,y:ue}}(j,a.rects,C),z},{}),L=D[a.placement],$=L.x,H=L.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=$,a.modifiersData.popperOffsets.y+=H),a.modifiersData[g]=D}},bi={name:"popperOffsets",enabled:!0,phase:"read",fn:function(p){var a=p.state,h=p.name;a.modifiersData[h]=ys({reference:a.rects.reference,element:a.rects.popper,placement:a.placement})},data:{}},Dr={name:"preventOverflow",enabled:!0,phase:"main",fn:function(p){var a=p.state,h=p.options,g=p.name,b=h.mainAxis,C=b===void 0||b,D=h.altAxis,L=D!==void 0&&D,$=h.boundary,H=h.rootBoundary,z=h.altBoundary,j=h.padding,oe=h.tether,X=oe===void 0||oe,re=h.tetherOffset,te=re===void 0?0:re,ie=rt(a,{boundary:$,rootBoundary:H,padding:j,altBoundary:z}),Te=Tt(a.placement),Se=ht(a.placement),ue=!Se,_e=vi(Te),ae=_e==="x"?"y":"x",fe=a.modifiersData.popperOffsets,Ee=a.rects.reference,Ie=a.rects.popper,we=typeof te=="function"?te(Object.assign({},a.rects,{placement:a.placement})):te,Ve=typeof we=="number"?{mainAxis:we,altAxis:we}:Object.assign({mainAxis:0,altAxis:0},we),bt=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,Wt={x:0,y:0};if(fe){if(C){var ft,Nt=_e==="y"?He:Ue,Vt=_e==="y"?nt:Xe,De=_e==="y"?"height":"width",sn=fe[_e],on=sn+ie[Nt],Pi=sn-ie[Vt],Ge=X?-Ie[De]/2:0,Ae=Se===In?Ee[De]:Ie[De],pt=Se===In?-Ie[De]:-Ee[De],Lt=a.elements.arrow,rr=X&&Lt?fs(Lt):{width:0,height:0},Fo=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Ru=Fo[Nt],Pu=Fo[Vt],Uo=Ot(0,Ee[De],rr[De]),Vg=ue?Ee[De]/2-Ge-Uo-Ru-Ve.mainAxis:Ae-Uo-Ru-Ve.mainAxis,Lg=ue?-Ee[De]/2+Ge+Uo+Pu+Ve.mainAxis:pt+Uo+Pu+Ve.mainAxis,mc=a.elements.arrow&&Yn(a.elements.arrow),xg=mc?_e==="y"?mc.clientTop||0:mc.clientLeft||0:0,ku=(ft=bt==null?void 0:bt[_e])!=null?ft:0,Mg=sn+Lg-ku,Ou=Ot(X?bn(on,sn+Vg-ku-xg):on,sn,X?ge(Pi,Mg):Pi);fe[_e]=Ou,Wt[_e]=Ou-sn}if(L){var Du,Fg=_e==="x"?He:Ue,Ug=_e==="x"?nt:Xe,Br=fe[ae],$o=ae==="y"?"height":"width",Nu=Br+ie[Fg],Vu=Br-ie[Ug],gc=[He,Ue].indexOf(Te)!==-1,Lu=(Du=bt==null?void 0:bt[ae])!=null?Du:0,xu=gc?Nu:Br-Ee[$o]-Ie[$o]-Lu+Ve.altAxis,Mu=gc?Br+Ee[$o]+Ie[$o]-Lu-Ve.altAxis:Vu,Fu=X&&gc?function($g,Bg,_c){var Uu=Ot($g,Bg,_c);return Uu>_c?_c:Uu}(xu,Br,Mu):Ot(X?xu:Nu,Br,X?Mu:Vu);fe[ae]=Fu,Wt[ae]=Fu-Br}a.modifiersData[g]=Wt}},requiresIfExists:["offset"]};function ic(p,a,h){h===void 0&&(h=!1);var g,b,C=Oe(a),D=Oe(a)&&function(j){var oe=j.getBoundingClientRect(),X=kt(oe.width)/j.offsetWidth||1,re=kt(oe.height)/j.offsetHeight||1;return X!==1||re!==1}(a),L=gt(a),$=Cn(p,D,h),H={scrollLeft:0,scrollTop:0},z={x:0,y:0};return(C||!C&&!h)&&((wt(a)!=="body"||gs(L))&&(H=(g=a)!==lt(g)&&Oe(g)?{scrollLeft:(b=g).scrollLeft,scrollTop:b.scrollTop}:Ce(g)),Oe(a)?((z=Cn(a,!0)).x+=a.clientLeft,z.y+=a.clientTop):L&&(z.x=ms(L))),{x:$.left+H.scrollLeft-z.x,y:$.top+H.scrollTop-z.y,width:$.width,height:$.height}}function Ro(p){var a=new Map,h=new Set,g=[];function b(C){h.add(C.name),[].concat(C.requires||[],C.requiresIfExists||[]).forEach(function(D){if(!h.has(D)){var L=a.get(D);L&&b(L)}}),g.push(C)}return p.forEach(function(C){a.set(C.name,C)}),p.forEach(function(C){h.has(C.name)||b(C)}),g}var er={placement:"bottom",modifiers:[],strategy:"absolute"};function Es(){for(var p=arguments.length,a=new Array(p),h=0;h<p;h++)a[h]=arguments[h];return!a.some(function(g){return!(g&&typeof g.getBoundingClientRect=="function")})}function Nr(p){p===void 0&&(p={});var a=p,h=a.defaultModifiers,g=h===void 0?[]:h,b=a.defaultOptions,C=b===void 0?er:b;return function(D,L,$){$===void 0&&($=C);var H,z,j={placement:"bottom",orderedModifiers:[],options:Object.assign({},er,C),modifiersData:{},elements:{reference:D,popper:L},attributes:{},styles:{}},oe=[],X=!1,re={state:j,setOptions:function(ie){var Te=typeof ie=="function"?ie(j.options):ie;te(),j.options=Object.assign({},C,j.options,Te),j.scrollParents={reference:ut(D)?Jn(D):D.contextElement?Jn(D.contextElement):[],popper:Jn(L)};var Se,ue,_e=function(ae){var fe=Ro(ae);return ds.reduce(function(Ee,Ie){return Ee.concat(fe.filter(function(we){return we.phase===Ie}))},[])}((Se=[].concat(g,j.options.modifiers),ue=Se.reduce(function(ae,fe){var Ee=ae[fe.name];return ae[fe.name]=Ee?Object.assign({},Ee,fe,{options:Object.assign({},Ee.options,fe.options),data:Object.assign({},Ee.data,fe.data)}):fe,ae},{}),Object.keys(ue).map(function(ae){return ue[ae]})));return j.orderedModifiers=_e.filter(function(ae){return ae.enabled}),j.orderedModifiers.forEach(function(ae){var fe=ae.name,Ee=ae.options,Ie=Ee===void 0?{}:Ee,we=ae.effect;if(typeof we=="function"){var Ve=we({state:j,name:fe,instance:re,options:Ie});oe.push(Ve||function(){})}}),re.update()},forceUpdate:function(){if(!X){var ie=j.elements,Te=ie.reference,Se=ie.popper;if(Es(Te,Se)){j.rects={reference:ic(Te,Yn(Se),j.options.strategy==="fixed"),popper:fs(Se)},j.reset=!1,j.placement=j.options.placement,j.orderedModifiers.forEach(function(we){return j.modifiersData[we.name]=Object.assign({},we.data)});for(var ue=0;ue<j.orderedModifiers.length;ue++)if(j.reset!==!0){var _e=j.orderedModifiers[ue],ae=_e.fn,fe=_e.options,Ee=fe===void 0?{}:fe,Ie=_e.name;typeof ae=="function"&&(j=ae({state:j,options:Ee,name:Ie,instance:re})||j)}else j.reset=!1,ue=-1}}},update:(H=function(){return new Promise(function(ie){re.forceUpdate(),ie(j)})},function(){return z||(z=new Promise(function(ie){Promise.resolve().then(function(){z=void 0,ie(H())})})),z}),destroy:function(){te(),X=!0}};if(!Es(D,L))return re;function te(){oe.forEach(function(ie){return ie()}),oe=[]}return re.setOptions($).then(function(ie){!X&&$.onFirstUpdate&&$.onFirstUpdate(ie)}),re}}var ws=Nr(),Ts=Nr({defaultModifiers:[Ei,bi,Xn,Qn]}),Ai=Nr({defaultModifiers:[Ei,bi,Xn,Qn,Or,So,Dr,Io,Ii]});const Vr=Object.freeze(Object.defineProperty({__proto__:null,afterMain:us,afterRead:ls,afterWrite:yo,applyStyles:Qn,arrow:Io,auto:Cr,basePlacements:Tn,beforeMain:_i,beforeRead:as,beforeWrite:hs,bottom:nt,clippingParents:ss,computeStyles:Xn,createPopper:Ai,createPopperBase:ws,createPopperLite:Ts,detectOverflow:rt,end:qt,eventListeners:Ei,flip:So,hide:Ii,left:Ue,main:yi,modifierPhases:ds,offset:Or,placements:os,popper:Pt,popperGenerator:Nr,popperOffsets:bi,preventOverflow:Dr,read:cs,reference:tn,right:Xe,start:In,top:He,variationPlacements:Rr,viewport:Sr,write:_o},Symbol.toStringTag,{value:"Module"})),Is="dropdown",rn=".bs.dropdown",zt=".data-api",Po="ArrowUp",bs="ArrowDown",ko=`hide${rn}`,Oo=`hidden${rn}`,Ci=`show${rn}`,dt=`shown${rn}`,As=`click${rn}${zt}`,Cs=`keydown${rn}${zt}`,tr=`keyup${rn}${zt}`,s="show",l='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',f=`${l}.${s}`,_=".dropdown-menu",P=F()?"top-end":"top-start",O=F()?"top-start":"top-end",U=F()?"bottom-end":"bottom-start",ve=F()?"bottom-start":"bottom-end",$e=F()?"left-start":"right-start",pe=F()?"right-start":"left-start",ze={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},We={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ke extends Et{constructor(a,h){super(a,h),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.next(this._element,_)[0]||Q.prev(this._element,_)[0]||Q.findOne(_,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ze}static get DefaultType(){return We}static get NAME(){return Is}toggle(){return this._isShown()?this.hide():this.show()}show(){if(y(this._element)||this._isShown())return;const a={relatedTarget:this._element};if(!x.trigger(this._element,Ci,a).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const h of[].concat(...document.body.children))x.on(h,"mouseover",A);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(s),this._element.classList.add(s),x.trigger(this._element,dt,a)}}hide(){if(y(this._element)||!this._isShown())return;const a={relatedTarget:this._element};this._completeHide(a)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(a){if(!x.trigger(this._element,ko,a).defaultPrevented){if("ontouchstart"in document.documentElement)for(const h of[].concat(...document.body.children))x.off(h,"mouseover",A);this._popper&&this._popper.destroy(),this._menu.classList.remove(s),this._element.classList.remove(s),this._element.setAttribute("aria-expanded","false"),$t.removeDataAttribute(this._menu,"popper"),x.trigger(this._element,Oo,a),this._element.focus()}}_getConfig(a){if(typeof(a=super._getConfig(a)).reference=="object"&&!u(a.reference)&&typeof a.reference.getBoundingClientRect!="function")throw new TypeError(`${Is.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return a}_createPopper(){if(Vr===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let a=this._element;this._config.reference==="parent"?a=this._parent:u(this._config.reference)?a=d(this._config.reference):typeof this._config.reference=="object"&&(a=this._config.reference);const h=this._getPopperConfig();this._popper=Ai(a,this._menu,h)}_isShown(){return this._menu.classList.contains(s)}_getPlacement(){const a=this._parent;if(a.classList.contains("dropend"))return $e;if(a.classList.contains("dropstart"))return pe;if(a.classList.contains("dropup-center"))return"top";if(a.classList.contains("dropdown-center"))return"bottom";const h=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return a.classList.contains("dropup")?h?O:P:h?ve:U}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(h=>Number.parseInt(h,10)):typeof a=="function"?h=>a(h,this._element):a}_getPopperConfig(){const a={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&($t.setDataAttribute(this._menu,"popper","static"),a.modifiers=[{name:"applyStyles",enabled:!1}]),{...a,...G(this._config.popperConfig,[void 0,a])}}_selectMenuItem({key:a,target:h}){const g=Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(b=>m(b));g.length&&be(g,h,a===bs,!g.includes(h)).focus()}static jQueryInterface(a){return this.each(function(){const h=Ke.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a]()}})}static clearMenus(a){if(a.button===2||a.type==="keyup"&&a.key!=="Tab")return;const h=Q.find(f);for(const g of h){const b=Ke.getInstance(g);if(!b||b._config.autoClose===!1)continue;const C=a.composedPath(),D=C.includes(b._menu);if(C.includes(b._element)||b._config.autoClose==="inside"&&!D||b._config.autoClose==="outside"&&D||b._menu.contains(a.target)&&(a.type==="keyup"&&a.key==="Tab"||/input|select|option|textarea|form/i.test(a.target.tagName)))continue;const L={relatedTarget:b._element};a.type==="click"&&(L.clickEvent=a),b._completeHide(L)}}static dataApiKeydownHandler(a){const h=/input|textarea/i.test(a.target.tagName),g=a.key==="Escape",b=[Po,bs].includes(a.key);if(!b&&!g||h&&!g)return;a.preventDefault();const C=this.matches(l)?this:Q.prev(this,l)[0]||Q.next(this,l)[0]||Q.findOne(l,a.delegateTarget.parentNode),D=Ke.getOrCreateInstance(C);if(b)return a.stopPropagation(),D.show(),void D._selectMenuItem(a);D._isShown()&&(a.stopPropagation(),D.hide(),C.focus())}}x.on(document,Cs,l,Ke.dataApiKeydownHandler),x.on(document,Cs,_,Ke.dataApiKeydownHandler),x.on(document,As,Ke.clearMenus),x.on(document,tr,Ke.clearMenus),x.on(document,As,l,function(p){p.preventDefault(),Ke.getOrCreateInstance(this).toggle()}),ee(Ke);const _t="backdrop",Lr="show",Si=`mousedown.bs.${_t}`,Tm={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Im={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Zl extends Bt{constructor(a){super(),this._config=this._getConfig(a),this._isAppended=!1,this._element=null}static get Default(){return Tm}static get DefaultType(){return Im}static get NAME(){return _t}show(a){if(!this._config.isVisible)return void G(a);this._append();const h=this._getElement();this._config.isAnimated&&N(h),h.classList.add(Lr),this._emulateAnimation(()=>{G(a)})}hide(a){this._config.isVisible?(this._getElement().classList.remove(Lr),this._emulateAnimation(()=>{this.dispose(),G(a)})):G(a)}dispose(){this._isAppended&&(x.off(this._element,Si),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const a=document.createElement("div");a.className=this._config.className,this._config.isAnimated&&a.classList.add("fade"),this._element=a}return this._element}_configAfterMerge(a){return a.rootElement=d(a.rootElement),a}_append(){if(this._isAppended)return;const a=this._getElement();this._config.rootElement.append(a),x.on(a,Si,()=>{G(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(a){ce(a,this._getElement(),this._config.isAnimated)}}const Do=".bs.focustrap",bm=`focusin${Do}`,Am=`keydown.tab${Do}`,eu="backward",Cm={autofocus:!0,trapElement:null},Sm={autofocus:"boolean",trapElement:"element"};class tu extends Bt{constructor(a){super(),this._config=this._getConfig(a),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Cm}static get DefaultType(){return Sm}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),x.off(document,Do),x.on(document,bm,a=>this._handleFocusin(a)),x.on(document,Am,a=>this._handleKeydown(a)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,x.off(document,Do))}_handleFocusin(a){const{trapElement:h}=this._config;if(a.target===document||a.target===h||h.contains(a.target))return;const g=Q.focusableChildren(h);g.length===0?h.focus():this._lastTabNavDirection===eu?g[g.length-1].focus():g[0].focus()}_handleKeydown(a){a.key==="Tab"&&(this._lastTabNavDirection=a.shiftKey?eu:"forward")}}const nu=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ru=".sticky-top",No="padding-right",iu="margin-right";class sc{constructor(){this._element=document.body}getWidth(){const a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}hide(){const a=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,No,h=>h+a),this._setElementAttributes(nu,No,h=>h+a),this._setElementAttributes(ru,iu,h=>h-a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,No),this._resetElementAttributes(nu,No),this._resetElementAttributes(ru,iu)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(a,h,g){const b=this.getWidth();this._applyManipulationCallback(a,C=>{if(C!==this._element&&window.innerWidth>C.clientWidth+b)return;this._saveInitialAttribute(C,h);const D=window.getComputedStyle(C).getPropertyValue(h);C.style.setProperty(h,`${g(Number.parseFloat(D))}px`)})}_saveInitialAttribute(a,h){const g=a.style.getPropertyValue(h);g&&$t.setDataAttribute(a,h,g)}_resetElementAttributes(a,h){this._applyManipulationCallback(a,g=>{const b=$t.getDataAttribute(g,h);b!==null?($t.removeDataAttribute(g,h),g.style.setProperty(h,b)):g.style.removeProperty(h)})}_applyManipulationCallback(a,h){if(u(a))h(a);else for(const g of Q.find(a,this._element))h(g)}}const Dt=".bs.modal",Rm=`hide${Dt}`,Pm=`hidePrevented${Dt}`,su=`hidden${Dt}`,ou=`show${Dt}`,km=`shown${Dt}`,Om=`resize${Dt}`,Dm=`click.dismiss${Dt}`,Nm=`mousedown.dismiss${Dt}`,Vm=`keydown.dismiss${Dt}`,Lm=`click${Dt}.data-api`,au="modal-open",cu="show",oc="modal-static",xm={backdrop:!0,focus:!0,keyboard:!0},Mm={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class xr extends Et{constructor(a,h){super(a,h),this._dialog=Q.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new sc,this._addEventListeners()}static get Default(){return xm}static get DefaultType(){return Mm}static get NAME(){return"modal"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||this._isTransitioning||x.trigger(this._element,ou,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(au),this._adjustDialog(),this._backdrop.show(()=>this._showElement(a)))}hide(){this._isShown&&!this._isTransitioning&&(x.trigger(this._element,Rm).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(cu),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){x.off(window,Dt),x.off(this._dialog,Dt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Zl({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new tu({trapElement:this._element})}_showElement(a){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const h=Q.findOne(".modal-body",this._dialog);h&&(h.scrollTop=0),N(this._element),this._element.classList.add(cu),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,x.trigger(this._element,km,{relatedTarget:a})},this._dialog,this._isAnimated())}_addEventListeners(){x.on(this._element,Vm,a=>{a.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),x.on(window,Om,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),x.on(this._element,Nm,a=>{x.one(this._element,Dm,h=>{this._element===a.target&&this._element===h.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(au),this._resetAdjustments(),this._scrollBar.reset(),x.trigger(this._element,su)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(x.trigger(this._element,Pm).defaultPrevented)return;const a=this._element.scrollHeight>document.documentElement.clientHeight,h=this._element.style.overflowY;h==="hidden"||this._element.classList.contains(oc)||(a||(this._element.style.overflowY="hidden"),this._element.classList.add(oc),this._queueCallback(()=>{this._element.classList.remove(oc),this._queueCallback(()=>{this._element.style.overflowY=h},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const a=this._element.scrollHeight>document.documentElement.clientHeight,h=this._scrollBar.getWidth(),g=h>0;if(g&&!a){const b=F()?"paddingLeft":"paddingRight";this._element.style[b]=`${h}px`}if(!g&&a){const b=F()?"paddingRight":"paddingLeft";this._element.style[b]=`${h}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(a,h){return this.each(function(){const g=xr.getOrCreateInstance(this,a);if(typeof a=="string"){if(g[a]===void 0)throw new TypeError(`No method named "${a}"`);g[a](h)}})}}x.on(document,Lm,'[data-bs-toggle="modal"]',function(p){const a=Q.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&p.preventDefault(),x.one(a,ou,g=>{g.defaultPrevented||x.one(a,su,()=>{m(this)&&this.focus()})});const h=Q.findOne(".modal.show");h&&xr.getInstance(h).hide(),xr.getOrCreateInstance(a).toggle(this)}),oi(xr),ee(xr);const Rn=".bs.offcanvas",lu=".data-api",Fm=`load${Rn}${lu}`,uu="show",hu="showing",du="hiding",fu=".offcanvas.show",Um=`show${Rn}`,$m=`shown${Rn}`,Bm=`hide${Rn}`,pu=`hidePrevented${Rn}`,mu=`hidden${Rn}`,jm=`resize${Rn}`,qm=`click${Rn}${lu}`,Hm=`keydown.dismiss${Rn}`,zm={backdrop:!0,keyboard:!0,scroll:!1},Wm={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Pn extends Et{constructor(a,h){super(a,h),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return zm}static get DefaultType(){return Wm}static get NAME(){return"offcanvas"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||x.trigger(this._element,Um,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new sc().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(hu),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(uu),this._element.classList.remove(hu),x.trigger(this._element,$m,{relatedTarget:a})},this._element,!0))}hide(){this._isShown&&(x.trigger(this._element,Bm).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(du),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(uu,du),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new sc().reset(),x.trigger(this._element,mu)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const a=!!this._config.backdrop;return new Zl({className:"offcanvas-backdrop",isVisible:a,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:a?()=>{this._config.backdrop!=="static"?this.hide():x.trigger(this._element,pu)}:null})}_initializeFocusTrap(){return new tu({trapElement:this._element})}_addEventListeners(){x.on(this._element,Hm,a=>{a.key==="Escape"&&(this._config.keyboard?this.hide():x.trigger(this._element,pu))})}static jQueryInterface(a){return this.each(function(){const h=Pn.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a](this)}})}}x.on(document,qm,'[data-bs-toggle="offcanvas"]',function(p){const a=Q.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&p.preventDefault(),y(this))return;x.one(a,mu,()=>{m(this)&&this.focus()});const h=Q.findOne(fu);h&&h!==a&&Pn.getInstance(h).hide(),Pn.getOrCreateInstance(a).toggle(this)}),x.on(window,Fm,()=>{for(const p of Q.find(fu))Pn.getOrCreateInstance(p).show()}),x.on(window,jm,()=>{for(const p of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(p).position!=="fixed"&&Pn.getOrCreateInstance(p).hide()}),oi(Pn),ee(Pn);const gu={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Km=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Gm=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Qm=(p,a)=>{const h=p.nodeName.toLowerCase();return a.includes(h)?!Km.has(h)||!!Gm.test(p.nodeValue):a.filter(g=>g instanceof RegExp).some(g=>g.test(h))},Ym={allowList:gu,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Xm={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Jm={entry:"(string|element|function|null)",selector:"(string|element)"};class Zm extends Bt{constructor(a){super(),this._config=this._getConfig(a)}static get Default(){return Ym}static get DefaultType(){return Xm}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(a=>this._resolvePossibleFunction(a)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(a){return this._checkContent(a),this._config.content={...this._config.content,...a},this}toHtml(){const a=document.createElement("div");a.innerHTML=this._maybeSanitize(this._config.template);for(const[b,C]of Object.entries(this._config.content))this._setContent(a,C,b);const h=a.children[0],g=this._resolvePossibleFunction(this._config.extraClass);return g&&h.classList.add(...g.split(" ")),h}_typeCheckConfig(a){super._typeCheckConfig(a),this._checkContent(a.content)}_checkContent(a){for(const[h,g]of Object.entries(a))super._typeCheckConfig({selector:h,entry:g},Jm)}_setContent(a,h,g){const b=Q.findOne(g,a);b&&((h=this._resolvePossibleFunction(h))?u(h)?this._putElementInTemplate(d(h),b):this._config.html?b.innerHTML=this._maybeSanitize(h):b.textContent=h:b.remove())}_maybeSanitize(a){return this._config.sanitize?function(h,g,b){if(!h.length)return h;if(b&&typeof b=="function")return b(h);const C=new window.DOMParser().parseFromString(h,"text/html"),D=[].concat(...C.body.querySelectorAll("*"));for(const L of D){const $=L.nodeName.toLowerCase();if(!Object.keys(g).includes($)){L.remove();continue}const H=[].concat(...L.attributes),z=[].concat(g["*"]||[],g[$]||[]);for(const j of H)Qm(j,z)||L.removeAttribute(j.nodeName)}return C.body.innerHTML}(a,this._config.allowList,this._config.sanitizeFn):a}_resolvePossibleFunction(a){return G(a,[void 0,this])}_putElementInTemplate(a,h){if(this._config.html)return h.innerHTML="",void h.append(a);h.textContent=a.textContent}}const eg=new Set(["sanitize","allowList","sanitizeFn"]),ac="fade",Vo="show",tg=".tooltip-inner",_u=".modal",yu="hide.bs.modal",Ss="hover",cc="focus",ng={AUTO:"auto",TOP:"top",RIGHT:F()?"left":"right",BOTTOM:"bottom",LEFT:F()?"right":"left"},rg={allowList:gu,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ig={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Mr extends Et{constructor(a,h){if(Vr===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(a,h),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return rg}static get DefaultType(){return ig}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),x.off(this._element.closest(_u),yu,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const a=x.trigger(this._element,this.constructor.eventName("show")),h=(T(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(a.defaultPrevented||!h)return;this._disposePopper();const g=this._getTipElement();this._element.setAttribute("aria-describedby",g.getAttribute("id"));const{container:b}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(b.append(g),x.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(g),g.classList.add(Vo),"ontouchstart"in document.documentElement)for(const C of[].concat(...document.body.children))x.on(C,"mouseover",A);this._queueCallback(()=>{x.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!x.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Vo),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))x.off(a,"mouseover",A);this._activeTrigger.click=!1,this._activeTrigger[cc]=!1,this._activeTrigger[Ss]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),x.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(a){const h=this._getTemplateFactory(a).toHtml();if(!h)return null;h.classList.remove(ac,Vo),h.classList.add(`bs-${this.constructor.NAME}-auto`);const g=(b=>{do b+=Math.floor(1e6*Math.random());while(document.getElementById(b));return b})(this.constructor.NAME).toString();return h.setAttribute("id",g),this._isAnimated()&&h.classList.add(ac),h}setContent(a){this._newContent=a,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(a){return this._templateFactory?this._templateFactory.changeContent(a):this._templateFactory=new Zm({...this._config,content:a,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[tg]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(a){return this.constructor.getOrCreateInstance(a.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ac)}_isShown(){return this.tip&&this.tip.classList.contains(Vo)}_createPopper(a){const h=G(this._config.placement,[this,a,this._element]),g=ng[h.toUpperCase()];return Ai(this._element,a,this._getPopperConfig(g))}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(h=>Number.parseInt(h,10)):typeof a=="function"?h=>a(h,this._element):a}_resolvePossibleFunction(a){return G(a,[this._element,this._element])}_getPopperConfig(a){const h={placement:a,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:g=>{this._getTipElement().setAttribute("data-popper-placement",g.state.placement)}}]};return{...h,...G(this._config.popperConfig,[void 0,h])}}_setListeners(){const a=this._config.trigger.split(" ");for(const h of a)if(h==="click")x.on(this._element,this.constructor.eventName("click"),this._config.selector,g=>{this._initializeOnDelegatedTarget(g).toggle()});else if(h!=="manual"){const g=h===Ss?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),b=h===Ss?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");x.on(this._element,g,this._config.selector,C=>{const D=this._initializeOnDelegatedTarget(C);D._activeTrigger[C.type==="focusin"?cc:Ss]=!0,D._enter()}),x.on(this._element,b,this._config.selector,C=>{const D=this._initializeOnDelegatedTarget(C);D._activeTrigger[C.type==="focusout"?cc:Ss]=D._element.contains(C.relatedTarget),D._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},x.on(this._element.closest(_u),yu,this._hideModalHandler)}_fixTitle(){const a=this._element.getAttribute("title");a&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",a),this._element.setAttribute("data-bs-original-title",a),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(a,h){clearTimeout(this._timeout),this._timeout=setTimeout(a,h)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(a){const h=$t.getDataAttributes(this._element);for(const g of Object.keys(h))eg.has(g)&&delete h[g];return a={...h,...typeof a=="object"&&a?a:{}},a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a.container=a.container===!1?document.body:d(a.container),typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),typeof a.title=="number"&&(a.title=a.title.toString()),typeof a.content=="number"&&(a.content=a.content.toString()),a}_getDelegateConfig(){const a={};for(const[h,g]of Object.entries(this._config))this.constructor.Default[h]!==g&&(a[h]=g);return a.selector=!1,a.trigger="manual",a}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(a){return this.each(function(){const h=Mr.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a]()}})}}ee(Mr);const sg=".popover-header",og=".popover-body",ag={...Mr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},cg={...Mr.DefaultType,content:"(null|string|element|function)"};class Lo extends Mr{static get Default(){return ag}static get DefaultType(){return cg}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[sg]:this._getTitle(),[og]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(a){return this.each(function(){const h=Lo.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a]()}})}}ee(Lo);const lc=".bs.scrollspy",lg=`activate${lc}`,vu=`click${lc}`,ug=`load${lc}.data-api`,Ri="active",uc="[href]",Eu=".nav-link",hg=`${Eu}, .nav-item > ${Eu}, .list-group-item`,dg={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},fg={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Rs extends Et{constructor(a,h){super(a,h),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return dg}static get DefaultType(){return fg}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const a of this._observableSections.values())this._observer.observe(a)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(a){return a.target=d(a.target)||document.body,a.rootMargin=a.offset?`${a.offset}px 0px -30%`:a.rootMargin,typeof a.threshold=="string"&&(a.threshold=a.threshold.split(",").map(h=>Number.parseFloat(h))),a}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(x.off(this._config.target,vu),x.on(this._config.target,vu,uc,a=>{const h=this._observableSections.get(a.target.hash);if(h){a.preventDefault();const g=this._rootElement||window,b=h.offsetTop-this._element.offsetTop;if(g.scrollTo)return void g.scrollTo({top:b,behavior:"smooth"});g.scrollTop=b}}))}_getNewObserver(){const a={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(h=>this._observerCallback(h),a)}_observerCallback(a){const h=D=>this._targetLinks.get(`#${D.target.id}`),g=D=>{this._previousScrollData.visibleEntryTop=D.target.offsetTop,this._process(h(D))},b=(this._rootElement||document.documentElement).scrollTop,C=b>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=b;for(const D of a){if(!D.isIntersecting){this._activeTarget=null,this._clearActiveClass(h(D));continue}const L=D.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(C&&L){if(g(D),!b)return}else C||L||g(D)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const a=Q.find(uc,this._config.target);for(const h of a){if(!h.hash||y(h))continue;const g=Q.findOne(decodeURI(h.hash),this._element);m(g)&&(this._targetLinks.set(decodeURI(h.hash),h),this._observableSections.set(h.hash,g))}}_process(a){this._activeTarget!==a&&(this._clearActiveClass(this._config.target),this._activeTarget=a,a.classList.add(Ri),this._activateParents(a),x.trigger(this._element,lg,{relatedTarget:a}))}_activateParents(a){if(a.classList.contains("dropdown-item"))Q.findOne(".dropdown-toggle",a.closest(".dropdown")).classList.add(Ri);else for(const h of Q.parents(a,".nav, .list-group"))for(const g of Q.prev(h,hg))g.classList.add(Ri)}_clearActiveClass(a){a.classList.remove(Ri);const h=Q.find(`${uc}.${Ri}`,a);for(const g of h)g.classList.remove(Ri)}static jQueryInterface(a){return this.each(function(){const h=Rs.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a]()}})}}x.on(window,ug,()=>{for(const p of Q.find('[data-bs-spy="scroll"]'))Rs.getOrCreateInstance(p)}),ee(Rs);const Fr=".bs.tab",pg=`hide${Fr}`,mg=`hidden${Fr}`,gg=`show${Fr}`,_g=`shown${Fr}`,yg=`click${Fr}`,vg=`keydown${Fr}`,Eg=`load${Fr}`,wg="ArrowLeft",wu="ArrowRight",Tg="ArrowUp",Tu="ArrowDown",hc="Home",Iu="End",Ur="active",bu="fade",dc="show",Au=".dropdown-toggle",fc=`:not(${Au})`,Cu='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',pc=`.nav-link${fc}, .list-group-item${fc}, [role="tab"]${fc}, ${Cu}`,Ig=`.${Ur}[data-bs-toggle="tab"], .${Ur}[data-bs-toggle="pill"], .${Ur}[data-bs-toggle="list"]`;class $r extends Et{constructor(a){super(a),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),x.on(this._element,vg,h=>this._keydown(h)))}static get NAME(){return"tab"}show(){const a=this._element;if(this._elemIsActive(a))return;const h=this._getActiveElem(),g=h?x.trigger(h,pg,{relatedTarget:a}):null;x.trigger(a,gg,{relatedTarget:h}).defaultPrevented||g&&g.defaultPrevented||(this._deactivate(h,a),this._activate(a,h))}_activate(a,h){a&&(a.classList.add(Ur),this._activate(Q.getElementFromSelector(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.removeAttribute("tabindex"),a.setAttribute("aria-selected",!0),this._toggleDropDown(a,!0),x.trigger(a,_g,{relatedTarget:h})):a.classList.add(dc)},a,a.classList.contains(bu)))}_deactivate(a,h){a&&(a.classList.remove(Ur),a.blur(),this._deactivate(Q.getElementFromSelector(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.setAttribute("aria-selected",!1),a.setAttribute("tabindex","-1"),this._toggleDropDown(a,!1),x.trigger(a,mg,{relatedTarget:h})):a.classList.remove(dc)},a,a.classList.contains(bu)))}_keydown(a){if(![wg,wu,Tg,Tu,hc,Iu].includes(a.key))return;a.stopPropagation(),a.preventDefault();const h=this._getChildren().filter(b=>!y(b));let g;if([hc,Iu].includes(a.key))g=h[a.key===hc?0:h.length-1];else{const b=[wu,Tu].includes(a.key);g=be(h,a.target,b,!0)}g&&(g.focus({preventScroll:!0}),$r.getOrCreateInstance(g).show())}_getChildren(){return Q.find(pc,this._parent)}_getActiveElem(){return this._getChildren().find(a=>this._elemIsActive(a))||null}_setInitialAttributes(a,h){this._setAttributeIfNotExists(a,"role","tablist");for(const g of h)this._setInitialAttributesOnChild(g)}_setInitialAttributesOnChild(a){a=this._getInnerElement(a);const h=this._elemIsActive(a),g=this._getOuterElement(a);a.setAttribute("aria-selected",h),g!==a&&this._setAttributeIfNotExists(g,"role","presentation"),h||a.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(a,"role","tab"),this._setInitialAttributesOnTargetPanel(a)}_setInitialAttributesOnTargetPanel(a){const h=Q.getElementFromSelector(a);h&&(this._setAttributeIfNotExists(h,"role","tabpanel"),a.id&&this._setAttributeIfNotExists(h,"aria-labelledby",`${a.id}`))}_toggleDropDown(a,h){const g=this._getOuterElement(a);if(!g.classList.contains("dropdown"))return;const b=(C,D)=>{const L=Q.findOne(C,g);L&&L.classList.toggle(D,h)};b(Au,Ur),b(".dropdown-menu",dc),g.setAttribute("aria-expanded",h)}_setAttributeIfNotExists(a,h,g){a.hasAttribute(h)||a.setAttribute(h,g)}_elemIsActive(a){return a.classList.contains(Ur)}_getInnerElement(a){return a.matches(pc)?a:Q.findOne(pc,a)}_getOuterElement(a){return a.closest(".nav-item, .list-group-item")||a}static jQueryInterface(a){return this.each(function(){const h=$r.getOrCreateInstance(this);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a]()}})}}x.on(document,yg,Cu,function(p){["A","AREA"].includes(this.tagName)&&p.preventDefault(),y(this)||$r.getOrCreateInstance(this).show()}),x.on(window,Eg,()=>{for(const p of Q.find(Ig))$r.getOrCreateInstance(p)}),ee($r);const nr=".bs.toast",bg=`mouseover${nr}`,Ag=`mouseout${nr}`,Cg=`focusin${nr}`,Sg=`focusout${nr}`,Rg=`hide${nr}`,Pg=`hidden${nr}`,kg=`show${nr}`,Og=`shown${nr}`,Su="hide",xo="show",Mo="showing",Dg={animation:"boolean",autohide:"boolean",delay:"number"},Ng={animation:!0,autohide:!0,delay:5e3};class Ps extends Et{constructor(a,h){super(a,h),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Ng}static get DefaultType(){return Dg}static get NAME(){return"toast"}show(){x.trigger(this._element,kg).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Su),N(this._element),this._element.classList.add(xo,Mo),this._queueCallback(()=>{this._element.classList.remove(Mo),x.trigger(this._element,Og),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(x.trigger(this._element,Rg).defaultPrevented||(this._element.classList.add(Mo),this._queueCallback(()=>{this._element.classList.add(Su),this._element.classList.remove(Mo,xo),x.trigger(this._element,Pg)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(xo),super.dispose()}isShown(){return this._element.classList.contains(xo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(a,h){switch(a.type){case"mouseover":case"mouseout":this._hasMouseInteraction=h;break;case"focusin":case"focusout":this._hasKeyboardInteraction=h}if(h)return void this._clearTimeout();const g=a.relatedTarget;this._element===g||this._element.contains(g)||this._maybeScheduleHide()}_setListeners(){x.on(this._element,bg,a=>this._onInteraction(a,!0)),x.on(this._element,Ag,a=>this._onInteraction(a,!1)),x.on(this._element,Cg,a=>this._onInteraction(a,!0)),x.on(this._element,Sg,a=>this._onInteraction(a,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(a){return this.each(function(){const h=Ps.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a](this)}})}}return oi(Ps),ee(Ps),{Alert:_n,Button:yn,Carousel:wn,Collapse:ct,Dropdown:Ke,Modal:xr,Offcanvas:Pn,Popover:Lo,ScrollSpy:Rs,Tab:$r,Toast:Ps,Tooltip:Mr}})}(Ko)),Ko.exports}qg();const Hg=()=>{};var Bu={};/**
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
 */const Id=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},zg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],c=n[t++],u=n[t++],d=((i&7)<<18|(o&63)<<12|(c&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|c&63)}}return e.join("")},bd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],c=i+1<n.length,u=c?n[i+1]:0,d=i+2<n.length,m=d?n[i+2]:0,y=o>>2,T=(o&3)<<4|u>>4;let A=(u&15)<<2|m>>6,N=m&63;d||(N=64,c||(A=64)),r.push(t[y],t[T],t[A],t[N])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Id(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const m=i<n.length?t[n.charAt(i)]:64;++i;const T=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||m==null||T==null)throw new Wg;const A=o<<2|u>>4;if(r.push(A),m!==64){const N=u<<4&240|m>>2;if(r.push(N),T!==64){const B=m<<6&192|T;r.push(B)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Wg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kg=function(n){const e=Id(n);return bd.encodeByteArray(e,!0)},ia=function(n){return Kg(n).replace(/\./g,"")},Ad=function(n){try{return bd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qg=()=>Gg().__FIREBASE_DEFAULTS__,Yg=()=>{if(typeof process>"u"||typeof Bu>"u")return;const n=Bu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ad(n[1]);return e&&JSON.parse(e)},Sa=()=>{try{return Hg()||Qg()||Yg()||Xg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cd=n=>{var e,t;return(t=(e=Sa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Jg=n=>{const e=Cd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Sd=()=>{var n;return(n=Sa())===null||n===void 0?void 0:n.config},Rd=n=>{var e;return(e=Sa())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Zg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function zi(n){return n.endsWith(".cloudworkstations.dev")}async function Pd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function e_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ia(JSON.stringify(t)),ia(JSON.stringify(c)),""].join(".")}const xs={};function t_(){const n={prod:[],emulator:[]};for(const e of Object.keys(xs))xs[e]?n.emulator.push(e):n.prod.push(e);return n}function n_(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ju=!1;function kd(n,e){if(typeof window>"u"||typeof document>"u"||!zi(window.location.host)||xs[n]===e||xs[n]||ju)return;xs[n]=e;function t(A){return`__firebase__banner__${A}`}const r="__firebase__banner",o=t_().prod.length>0;function c(){const A=document.getElementById(r);A&&A.remove()}function u(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function d(A,N){A.setAttribute("width","24"),A.setAttribute("id",N),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function m(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{ju=!0,c()},A}function y(A,N){A.setAttribute("id",N),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function T(){const A=n_(r),N=t("text"),B=document.getElementById(N)||document.createElement("span"),W=t("learnmore"),F=document.getElementById(W)||document.createElement("a"),ee=t("preprendIcon"),G=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const ce=A.element;u(ce),y(F,W);const be=m();d(G,ee),ce.append(G,B,F,be),document.body.appendChild(ce)}o?(B.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function r_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function i_(){var n;const e=(n=Sa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function s_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Od(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function o_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function a_(){const n=at();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function c_(){return!i_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dd(){try{return typeof indexedDB=="object"}catch{return!1}}function Nd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}function l_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const u_="FirebaseError";class Xt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=u_,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],c=o?h_(o,r):"Error",u=`${this.serviceName}: ${c} (${i}).`;return new Xt(i,u,r)}}function h_(n,e){return n.replace(d_,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const d_=/\{\$([^}]+)}/g;function f_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function pr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],c=e[i];if(qu(o)&&qu(c)){if(!pr(o,c))return!1}else if(o!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function qu(n){return n!==null&&typeof n=="object"}/**
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
 */function Js(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ks(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Os(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function p_(n,e){const t=new m_(n,e);return t.subscribe.bind(t)}class m_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");g_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=yc),i.error===void 0&&(i.error=yc),i.complete===void 0&&(i.complete=yc);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function g_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yc(){}/**
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
 */const __=1e3,y_=2,v_=4*60*60*1e3,E_=.5;function Hu(n,e=__,t=y_){const r=e*Math.pow(t,n),i=Math.round(E_*r*(Math.random()-.5)*2);return Math.min(v_,r+i)}/**
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
 */function et(n){return n&&n._delegate?n._delegate:n}class Yt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jr="[DEFAULT]";/**
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
 */class w_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Zg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(I_(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&c.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const c=this.instances.get(i);return c&&e(c,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:T_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T_(n){return n===jr?void 0:n}function I_(n){return n.instantiationMode==="EAGER"}/**
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
 */class b_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new w_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const A_={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},C_=he.INFO,S_={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},R_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=S_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ra{constructor(e){this.name=e,this._logLevel=C_,this._logHandler=R_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?A_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const P_=(n,e)=>e.some(t=>n instanceof t);let zu,Wu;function k_(){return zu||(zu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O_(){return Wu||(Wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vd=new WeakMap,Dc=new WeakMap,Ld=new WeakMap,vc=new WeakMap,rl=new WeakMap;function D_(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{t(ur(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Vd.set(t,n)}).catch(()=>{}),rl.set(e,n),e}function N_(n){if(Dc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});Dc.set(n,e)}let Nc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Dc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ld.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ur(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function V_(n){Nc=n(Nc)}function L_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ec(this),e,...t);return Ld.set(r,e.sort?e.sort():[e]),ur(r)}:O_().includes(n)?function(...e){return n.apply(Ec(this),e),ur(Vd.get(this))}:function(...e){return ur(n.apply(Ec(this),e))}}function x_(n){return typeof n=="function"?L_(n):(n instanceof IDBTransaction&&N_(n),P_(n,k_())?new Proxy(n,Nc):n)}function ur(n){if(n instanceof IDBRequest)return D_(n);if(vc.has(n))return vc.get(n);const e=x_(n);return e!==n&&(vc.set(n,e),rl.set(e,n)),e}const Ec=n=>rl.get(n);function xd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const c=indexedDB.open(n,e),u=ur(c);return r&&c.addEventListener("upgradeneeded",d=>{r(ur(c.result),d.oldVersion,d.newVersion,ur(c.transaction),d)}),t&&c.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),u.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",m=>i(m.oldVersion,m.newVersion,m))}).catch(()=>{}),u}const M_=["get","getKey","getAll","getAllKeys","count"],F_=["put","add","delete","clear"],wc=new Map;function Ku(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wc.get(e))return wc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=F_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||M_.includes(t)))return;const o=async function(c,...u){const d=this.transaction(c,i?"readwrite":"readonly");let m=d.store;return r&&(m=m.index(u.shift())),(await Promise.all([m[t](...u),i&&d.done]))[0]};return wc.set(e,o),o}V_(n=>({...n,get:(e,t,r)=>Ku(e,t)||n.get(e,t,r),has:(e,t)=>!!Ku(e,t)||n.has(e,t)}));/**
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
 */class U_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function $_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vc="@firebase/app",Gu="0.13.1";/**
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
 */const Ln=new Ra("@firebase/app"),B_="@firebase/app-compat",j_="@firebase/analytics-compat",q_="@firebase/analytics",H_="@firebase/app-check-compat",z_="@firebase/app-check",W_="@firebase/auth",K_="@firebase/auth-compat",G_="@firebase/database",Q_="@firebase/data-connect",Y_="@firebase/database-compat",X_="@firebase/functions",J_="@firebase/functions-compat",Z_="@firebase/installations",ey="@firebase/installations-compat",ty="@firebase/messaging",ny="@firebase/messaging-compat",ry="@firebase/performance",iy="@firebase/performance-compat",sy="@firebase/remote-config",oy="@firebase/remote-config-compat",ay="@firebase/storage",cy="@firebase/storage-compat",ly="@firebase/firestore",uy="@firebase/ai",hy="@firebase/firestore-compat",dy="firebase",fy="11.9.0";/**
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
 */const Lc="[DEFAULT]",py={[Vc]:"fire-core",[B_]:"fire-core-compat",[q_]:"fire-analytics",[j_]:"fire-analytics-compat",[z_]:"fire-app-check",[H_]:"fire-app-check-compat",[W_]:"fire-auth",[K_]:"fire-auth-compat",[G_]:"fire-rtdb",[Q_]:"fire-data-connect",[Y_]:"fire-rtdb-compat",[X_]:"fire-fn",[J_]:"fire-fn-compat",[Z_]:"fire-iid",[ey]:"fire-iid-compat",[ty]:"fire-fcm",[ny]:"fire-fcm-compat",[ry]:"fire-perf",[iy]:"fire-perf-compat",[sy]:"fire-rc",[oy]:"fire-rc-compat",[ay]:"fire-gcs",[cy]:"fire-gcs-compat",[ly]:"fire-fst",[hy]:"fire-fst-compat",[uy]:"fire-vertex","fire-js":"fire-js",[dy]:"fire-js-all"};/**
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
 */const sa=new Map,my=new Map,xc=new Map;function Qu(n,e){try{n.container.addComponent(e)}catch(t){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hn(n){const e=n.name;if(xc.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;xc.set(e,n);for(const t of sa.values())Qu(t,n);for(const t of my.values())Qu(t,n);return!0}function ei(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function At(n){return n==null?!1:n.settings!==void 0}/**
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
 */const gy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new Zr("app","Firebase",gy);/**
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
 */class _y{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Wi=fy;function Md(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lc,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(t||(t=Sd()),!t)throw hr.create("no-options");const o=sa.get(i);if(o){if(pr(t,o.options)&&pr(r,o.config))return o;throw hr.create("duplicate-app",{appName:i})}const c=new b_(i);for(const d of xc.values())c.addComponent(d);const u=new _y(t,r,c);return sa.set(i,u),u}function il(n=Lc){const e=sa.get(n);if(!e&&n===Lc&&Sd())return Md();if(!e)throw hr.create("no-app",{appName:n});return e}function Mt(n,e,t){var r;let i=(r=py[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&c&&u.push("and"),c&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(u.join(" "));return}hn(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const yy="firebase-heartbeat-database",vy=1,qs="firebase-heartbeat-store";let Tc=null;function Fd(){return Tc||(Tc=xd(yy,vy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(qs)}catch(t){console.warn(t)}}}}).catch(n=>{throw hr.create("idb-open",{originalErrorMessage:n.message})})),Tc}async function Ey(n){try{const t=(await Fd()).transaction(qs),r=await t.objectStore(qs).get(Ud(n));return await t.done,r}catch(e){if(e instanceof Xt)Ln.warn(e.message);else{const t=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(t.message)}}}async function Yu(n,e){try{const r=(await Fd()).transaction(qs,"readwrite");await r.objectStore(qs).put(e,Ud(n)),await r.done}catch(t){if(t instanceof Xt)Ln.warn(t.message);else{const r=hr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ln.warn(r.message)}}}function Ud(n){return`${n.name}!${n.options.appId}`}/**
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
 */const wy=1024,Ty=30;class Iy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ay(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Xu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Ty){const c=Cy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xu(),{heartbeatsToSend:r,unsentEntries:i}=by(this._heartbeatsCache.heartbeats),o=ia(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ln.warn(t),""}}}function Xu(){return new Date().toISOString().substring(0,10)}function by(n,e=wy){const t=[];let r=n.slice();for(const i of n){const o=t.find(c=>c.agent===i.agent);if(o){if(o.dates.push(i.date),Ju(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ju(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ay{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dd()?Nd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ey(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ju(n){return ia(JSON.stringify({version:2,heartbeats:n})).length}function Cy(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Sy(n){hn(new Yt("platform-logger",e=>new U_(e),"PRIVATE")),hn(new Yt("heartbeat",e=>new Iy(e),"PRIVATE")),Mt(Vc,Gu,n),Mt(Vc,Gu,"esm2017"),Mt("fire-js","")}Sy("");var Zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,$d;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function w(){}w.prototype=v.prototype,S.D=v.prototype,S.prototype=new w,S.prototype.constructor=S,S.C=function(I,R,k){for(var E=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)E[Rt-2]=arguments[Rt];return v.prototype[R].apply(I,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,v,w){w||(w=0);var I=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)I[R]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(R=0;16>R;++R)I[R]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=S.g[0],w=S.g[1],R=S.g[2];var k=S.g[3],E=v+(k^w&(R^k))+I[0]+3614090360&4294967295;v=w+(E<<7&4294967295|E>>>25),E=k+(R^v&(w^R))+I[1]+3905402710&4294967295,k=v+(E<<12&4294967295|E>>>20),E=R+(w^k&(v^w))+I[2]+606105819&4294967295,R=k+(E<<17&4294967295|E>>>15),E=w+(v^R&(k^v))+I[3]+3250441966&4294967295,w=R+(E<<22&4294967295|E>>>10),E=v+(k^w&(R^k))+I[4]+4118548399&4294967295,v=w+(E<<7&4294967295|E>>>25),E=k+(R^v&(w^R))+I[5]+1200080426&4294967295,k=v+(E<<12&4294967295|E>>>20),E=R+(w^k&(v^w))+I[6]+2821735955&4294967295,R=k+(E<<17&4294967295|E>>>15),E=w+(v^R&(k^v))+I[7]+4249261313&4294967295,w=R+(E<<22&4294967295|E>>>10),E=v+(k^w&(R^k))+I[8]+1770035416&4294967295,v=w+(E<<7&4294967295|E>>>25),E=k+(R^v&(w^R))+I[9]+2336552879&4294967295,k=v+(E<<12&4294967295|E>>>20),E=R+(w^k&(v^w))+I[10]+4294925233&4294967295,R=k+(E<<17&4294967295|E>>>15),E=w+(v^R&(k^v))+I[11]+2304563134&4294967295,w=R+(E<<22&4294967295|E>>>10),E=v+(k^w&(R^k))+I[12]+1804603682&4294967295,v=w+(E<<7&4294967295|E>>>25),E=k+(R^v&(w^R))+I[13]+4254626195&4294967295,k=v+(E<<12&4294967295|E>>>20),E=R+(w^k&(v^w))+I[14]+2792965006&4294967295,R=k+(E<<17&4294967295|E>>>15),E=w+(v^R&(k^v))+I[15]+1236535329&4294967295,w=R+(E<<22&4294967295|E>>>10),E=v+(R^k&(w^R))+I[1]+4129170786&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^R&(v^w))+I[6]+3225465664&4294967295,k=v+(E<<9&4294967295|E>>>23),E=R+(v^w&(k^v))+I[11]+643717713&4294967295,R=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(R^k))+I[0]+3921069994&4294967295,w=R+(E<<20&4294967295|E>>>12),E=v+(R^k&(w^R))+I[5]+3593408605&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^R&(v^w))+I[10]+38016083&4294967295,k=v+(E<<9&4294967295|E>>>23),E=R+(v^w&(k^v))+I[15]+3634488961&4294967295,R=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(R^k))+I[4]+3889429448&4294967295,w=R+(E<<20&4294967295|E>>>12),E=v+(R^k&(w^R))+I[9]+568446438&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^R&(v^w))+I[14]+3275163606&4294967295,k=v+(E<<9&4294967295|E>>>23),E=R+(v^w&(k^v))+I[3]+4107603335&4294967295,R=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(R^k))+I[8]+1163531501&4294967295,w=R+(E<<20&4294967295|E>>>12),E=v+(R^k&(w^R))+I[13]+2850285829&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^R&(v^w))+I[2]+4243563512&4294967295,k=v+(E<<9&4294967295|E>>>23),E=R+(v^w&(k^v))+I[7]+1735328473&4294967295,R=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(R^k))+I[12]+2368359562&4294967295,w=R+(E<<20&4294967295|E>>>12),E=v+(w^R^k)+I[5]+4294588738&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^R)+I[8]+2272392833&4294967295,k=v+(E<<11&4294967295|E>>>21),E=R+(k^v^w)+I[11]+1839030562&4294967295,R=k+(E<<16&4294967295|E>>>16),E=w+(R^k^v)+I[14]+4259657740&4294967295,w=R+(E<<23&4294967295|E>>>9),E=v+(w^R^k)+I[1]+2763975236&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^R)+I[4]+1272893353&4294967295,k=v+(E<<11&4294967295|E>>>21),E=R+(k^v^w)+I[7]+4139469664&4294967295,R=k+(E<<16&4294967295|E>>>16),E=w+(R^k^v)+I[10]+3200236656&4294967295,w=R+(E<<23&4294967295|E>>>9),E=v+(w^R^k)+I[13]+681279174&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^R)+I[0]+3936430074&4294967295,k=v+(E<<11&4294967295|E>>>21),E=R+(k^v^w)+I[3]+3572445317&4294967295,R=k+(E<<16&4294967295|E>>>16),E=w+(R^k^v)+I[6]+76029189&4294967295,w=R+(E<<23&4294967295|E>>>9),E=v+(w^R^k)+I[9]+3654602809&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^R)+I[12]+3873151461&4294967295,k=v+(E<<11&4294967295|E>>>21),E=R+(k^v^w)+I[15]+530742520&4294967295,R=k+(E<<16&4294967295|E>>>16),E=w+(R^k^v)+I[2]+3299628645&4294967295,w=R+(E<<23&4294967295|E>>>9),E=v+(R^(w|~k))+I[0]+4096336452&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~R))+I[7]+1126891415&4294967295,k=v+(E<<10&4294967295|E>>>22),E=R+(v^(k|~w))+I[14]+2878612391&4294967295,R=k+(E<<15&4294967295|E>>>17),E=w+(k^(R|~v))+I[5]+4237533241&4294967295,w=R+(E<<21&4294967295|E>>>11),E=v+(R^(w|~k))+I[12]+1700485571&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~R))+I[3]+2399980690&4294967295,k=v+(E<<10&4294967295|E>>>22),E=R+(v^(k|~w))+I[10]+4293915773&4294967295,R=k+(E<<15&4294967295|E>>>17),E=w+(k^(R|~v))+I[1]+2240044497&4294967295,w=R+(E<<21&4294967295|E>>>11),E=v+(R^(w|~k))+I[8]+1873313359&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~R))+I[15]+4264355552&4294967295,k=v+(E<<10&4294967295|E>>>22),E=R+(v^(k|~w))+I[6]+2734768916&4294967295,R=k+(E<<15&4294967295|E>>>17),E=w+(k^(R|~v))+I[13]+1309151649&4294967295,w=R+(E<<21&4294967295|E>>>11),E=v+(R^(w|~k))+I[4]+4149444226&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~R))+I[11]+3174756917&4294967295,k=v+(E<<10&4294967295|E>>>22),E=R+(v^(k|~w))+I[2]+718787259&4294967295,R=k+(E<<15&4294967295|E>>>17),E=w+(k^(R|~v))+I[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,S.g[2]=S.g[2]+R&4294967295,S.g[3]=S.g[3]+k&4294967295}r.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var w=v-this.blockSize,I=this.B,R=this.h,k=0;k<v;){if(R==0)for(;k<=w;)i(this,S,k),k+=this.blockSize;if(typeof S=="string"){for(;k<v;)if(I[R++]=S.charCodeAt(k++),R==this.blockSize){i(this,I),R=0;break}}else for(;k<v;)if(I[R++]=S[k++],R==this.blockSize){i(this,I),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var w=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=w&255,w/=256;for(this.u(S),S=Array(16),v=w=0;4>v;++v)for(var I=0;32>I;I+=8)S[w++]=this.g[v]>>>I&255;return S};function o(S,v){var w=u;return Object.prototype.hasOwnProperty.call(w,S)?w[S]:w[S]=v(S)}function c(S,v){this.h=v;for(var w=[],I=!0,R=S.length-1;0<=R;R--){var k=S[R]|0;I&&k==v||(w[R]=k,I=!1)}this.g=w}var u={};function d(S){return-128<=S&&128>S?o(S,function(v){return new c([v|0],0>v?-1:0)}):new c([S|0],0>S?-1:0)}function m(S){if(isNaN(S)||!isFinite(S))return T;if(0>S)return F(m(-S));for(var v=[],w=1,I=0;S>=w;I++)v[I]=S/w|0,w*=4294967296;return new c(v,0)}function y(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return F(y(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=m(Math.pow(v,8)),I=T,R=0;R<S.length;R+=8){var k=Math.min(8,S.length-R),E=parseInt(S.substring(R,R+k),v);8>k?(k=m(Math.pow(v,k)),I=I.j(k).add(m(E))):(I=I.j(w),I=I.add(m(E)))}return I}var T=d(0),A=d(1),N=d(16777216);n=c.prototype,n.m=function(){if(W(this))return-F(this).m();for(var S=0,v=1,w=0;w<this.g.length;w++){var I=this.i(w);S+=(0<=I?I:4294967296+I)*v,v*=4294967296}return S},n.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(B(this))return"0";if(W(this))return"-"+F(this).toString(S);for(var v=m(Math.pow(S,6)),w=this,I="";;){var R=be(w,v).g;w=ee(w,R.j(v));var k=((0<w.g.length?w.g[0]:w.h)>>>0).toString(S);if(w=R,B(w))return k+I;for(;6>k.length;)k="0"+k;I=k+I}},n.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function B(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function W(S){return S.h==-1}n.l=function(S){return S=ee(this,S),W(S)?-1:B(S)?0:1};function F(S){for(var v=S.g.length,w=[],I=0;I<v;I++)w[I]=~S.g[I];return new c(w,~S.h).add(A)}n.abs=function(){return W(this)?F(this):this},n.add=function(S){for(var v=Math.max(this.g.length,S.g.length),w=[],I=0,R=0;R<=v;R++){var k=I+(this.i(R)&65535)+(S.i(R)&65535),E=(k>>>16)+(this.i(R)>>>16)+(S.i(R)>>>16);I=E>>>16,k&=65535,E&=65535,w[R]=E<<16|k}return new c(w,w[w.length-1]&-2147483648?-1:0)};function ee(S,v){return S.add(F(v))}n.j=function(S){if(B(this)||B(S))return T;if(W(this))return W(S)?F(this).j(F(S)):F(F(this).j(S));if(W(S))return F(this.j(F(S)));if(0>this.l(N)&&0>S.l(N))return m(this.m()*S.m());for(var v=this.g.length+S.g.length,w=[],I=0;I<2*v;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<S.g.length;R++){var k=this.i(I)>>>16,E=this.i(I)&65535,Rt=S.i(R)>>>16,$n=S.i(R)&65535;w[2*I+2*R]+=E*$n,G(w,2*I+2*R),w[2*I+2*R+1]+=k*$n,G(w,2*I+2*R+1),w[2*I+2*R+1]+=E*Rt,G(w,2*I+2*R+1),w[2*I+2*R+2]+=k*Rt,G(w,2*I+2*R+2)}for(I=0;I<v;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=v;I<2*v;I++)w[I]=0;return new c(w,0)};function G(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function ce(S,v){this.g=S,this.h=v}function be(S,v){if(B(v))throw Error("division by zero");if(B(S))return new ce(T,T);if(W(S))return v=be(F(S),v),new ce(F(v.g),F(v.h));if(W(v))return v=be(S,F(v)),new ce(F(v.g),v.h);if(30<S.g.length){if(W(S)||W(v))throw Error("slowDivide_ only works with positive integers.");for(var w=A,I=v;0>=I.l(S);)w=mt(w),I=mt(I);var R=Pe(w,1),k=Pe(I,1);for(I=Pe(I,2),w=Pe(w,2);!B(I);){var E=k.add(I);0>=E.l(S)&&(R=R.add(w),k=E),I=Pe(I,1),w=Pe(w,1)}return v=ee(S,R.j(v)),new ce(R,v)}for(R=T;0<=S.l(v);){for(w=Math.max(1,Math.floor(S.m()/v.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),k=m(w),E=k.j(v);W(E)||0<E.l(S);)w-=I,k=m(w),E=k.j(v);B(k)&&(k=A),R=R.add(k),S=ee(S,E)}return new ce(R,S)}n.A=function(S){return be(this,S).h},n.and=function(S){for(var v=Math.max(this.g.length,S.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)&S.i(I);return new c(w,this.h&S.h)},n.or=function(S){for(var v=Math.max(this.g.length,S.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)|S.i(I);return new c(w,this.h|S.h)},n.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)^S.i(I);return new c(w,this.h^S.h)};function mt(S){for(var v=S.g.length+1,w=[],I=0;I<v;I++)w[I]=S.i(I)<<1|S.i(I-1)>>>31;return new c(w,S.h)}function Pe(S,v){var w=v>>5;v%=32;for(var I=S.g.length-w,R=[],k=0;k<I;k++)R[k]=0<v?S.i(k+w)>>>v|S.i(k+w+1)<<32-v:S.i(k+w);return new c(R,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$d=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=y,dr=c}).apply(typeof Zu<"u"?Zu:typeof self<"u"?self:typeof window<"u"?window:{});var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bd,Ds,jd,Go,Mc,qd,Hd,zd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,f){return s==Array.prototype||s==Object.prototype||(s[l]=f.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bo=="object"&&Bo];for(var l=0;l<s.length;++l){var f=s[l];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(s,l){if(l)e:{var f=r;s=s.split(".");for(var _=0;_<s.length-1;_++){var P=s[_];if(!(P in f))break e;f=f[P]}s=s[s.length-1],_=f[s],l=l(_),l!=_&&l!=null&&e(f,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var f=0,_=!1,P={next:function(){if(!_&&f<s.length){var O=f++;return{value:l(O,s[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},u=this||self;function d(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function m(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function y(s,l,f){return s.call.apply(s.bind,arguments)}function T(s,l,f){if(!s)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,_),s.apply(l,P)}}return function(){return s.apply(l,arguments)}}function A(s,l,f){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,A.apply(null,arguments)}function N(s,l){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),s.apply(this,_)}}function B(s,l){function f(){}f.prototype=l.prototype,s.aa=l.prototype,s.prototype=new f,s.prototype.constructor=s,s.Qb=function(_,P,O){for(var U=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)U[ve-2]=arguments[ve];return l.prototype[P].apply(_,U)}}function W(s){const l=s.length;if(0<l){const f=Array(l);for(let _=0;_<l;_++)f[_]=s[_];return f}return[]}function F(s,l){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(d(_)){const P=s.length||0,O=_.length||0;s.length=P+O;for(let U=0;U<O;U++)s[P+U]=_[U]}else s.push(_)}}class ee{constructor(l,f){this.i=l,this.j=f,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function G(s){return/^[\s\xa0]*$/.test(s)}function ce(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function be(s){return be[" "](s),s}be[" "]=function(){};var mt=ce().indexOf("Gecko")!=-1&&!(ce().toLowerCase().indexOf("webkit")!=-1&&ce().indexOf("Edge")==-1)&&!(ce().indexOf("Trident")!=-1||ce().indexOf("MSIE")!=-1)&&ce().indexOf("Edge")==-1;function Pe(s,l,f){for(const _ in s)l.call(f,s[_],_,s)}function S(s,l){for(const f in s)l.call(void 0,s[f],f,s)}function v(s){const l={};for(const f in s)l[f]=s[f];return l}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(s,l){let f,_;for(let P=1;P<arguments.length;P++){_=arguments[P];for(f in _)s[f]=_[f];for(let O=0;O<w.length;O++)f=w[O],Object.prototype.hasOwnProperty.call(_,f)&&(s[f]=_[f])}}function R(s){var l=1;s=s.split(":");const f=[];for(;0<l&&s.length;)f.push(s.shift()),l--;return s.length&&f.push(s.join(":")),f}function k(s){u.setTimeout(()=>{throw s},0)}function E(){var s=si;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class Rt{constructor(){this.h=this.g=null}add(l,f){const _=$n.get();_.set(l,f),this.h?this.h.next=_:this.g=_,this.h=_}}var $n=new ee(()=>new ao,s=>s.reset());class ao{constructor(){this.next=this.g=this.h=null}set(l,f){this.h=l,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let gn,wr=!1,si=new Rt,x=()=>{const s=u.Promise.resolve(void 0);gn=()=>{s.then(Ji)}};var Ji=()=>{for(var s;s=E();){try{s.h.call(s.g)}catch(f){k(f)}var l=$n;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}wr=!1};function Ut(){this.s=this.s,this.C=this.C}Ut.prototype.s=!1,Ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var $t=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const f=()=>{};u.addEventListener("test",f,l),u.removeEventListener("test",f,l)}catch{}return s}();function Bt(s,l){if(xe.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var f=this.type=s.type,_=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(mt){e:{try{be(l.nodeName);var P=!0;break e}catch{}P=!1}P||(l=null)}}else f=="mouseover"?l=s.fromElement:f=="mouseout"&&(l=s.toElement);this.relatedTarget=l,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Et[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Bt.aa.h.call(this)}}B(Bt,xe);var Et={2:"touch",3:"pen",4:"mouse"};Bt.prototype.h=function(){Bt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Bn="closure_listenable_"+(1e6*Math.random()|0),Q=0;function oi(s,l,f,_,P){this.listener=s,this.proxy=null,this.src=l,this.type=f,this.capture=!!_,this.ha=P,this.key=++Q,this.da=this.fa=!1}function Tr(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ai(s){this.src=s,this.g={},this.h=0}ai.prototype.add=function(s,l,f,_,P){var O=s.toString();s=this.g[O],s||(s=this.g[O]=[],this.h++);var U=_n(s,l,_,P);return-1<U?(l=s[U],f||(l.fa=!1)):(l=new oi(l,this.src,O,!!_,P),l.fa=f,s.push(l)),l};function Zi(s,l){var f=l.type;if(f in s.g){var _=s.g[f],P=Array.prototype.indexOf.call(_,l,void 0),O;(O=0<=P)&&Array.prototype.splice.call(_,P,1),O&&(Tr(l),s.g[f].length==0&&(delete s.g[f],s.h--))}}function _n(s,l,f,_){for(var P=0;P<s.length;++P){var O=s[P];if(!O.da&&O.listener==l&&O.capture==!!f&&O.ha==_)return P}return-1}var ci="closure_lm_"+(1e6*Math.random()|0),yn={};function vn(s,l,f,_,P){if(Array.isArray(l)){for(var O=0;O<l.length;O++)vn(s,l[O],f,_,P);return null}return f=jt(f),s&&s[Bn]?s.K(l,f,m(_)?!!_.capture:!1,P):Qa(s,l,f,!1,_,P)}function Qa(s,l,f,_,P,O){if(!l)throw Error("Invalid event type");var U=m(P)?!!P.capture:!!P,ve=ts(s);if(ve||(s[ci]=ve=new ai(s)),f=ve.add(l,f,_,U,O),f.proxy)return f;if(_=Ya(),f.proxy=_,_.src=s,_.listener=f,s.addEventListener)$t||(P=U),P===void 0&&(P=!1),s.addEventListener(l.toString(),_,P);else if(s.attachEvent)s.attachEvent(lo(l.toString()),_);else if(s.addListener&&s.removeListener)s.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ya(){function s(f){return l.call(s.src,s.listener,f)}const l=Xa;return s}function co(s,l,f,_,P){if(Array.isArray(l))for(var O=0;O<l.length;O++)co(s,l[O],f,_,P);else _=m(_)?!!_.capture:!!_,f=jt(f),s&&s[Bn]?(s=s.i,l=String(l).toString(),l in s.g&&(O=s.g[l],f=_n(O,f,_,P),-1<f&&(Tr(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete s.g[l],s.h--)))):s&&(s=ts(s))&&(l=s.g[l.toString()],s=-1,l&&(s=_n(l,f,_,P)),(f=-1<s?l[s]:null)&&es(f))}function es(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[Bn])Zi(l.i,s);else{var f=s.type,_=s.proxy;l.removeEventListener?l.removeEventListener(f,_,s.capture):l.detachEvent?l.detachEvent(lo(f),_):l.addListener&&l.removeListener&&l.removeListener(_),(f=ts(l))?(Zi(f,s),f.h==0&&(f.src=null,l[ci]=null)):Tr(s)}}}function lo(s){return s in yn?yn[s]:yn[s]="on"+s}function Xa(s,l){if(s.da)s=!0;else{l=new Bt(l,this);var f=s.listener,_=s.ha||s.src;s.fa&&es(s),s=f.call(_,l)}return s}function ts(s){return s=s[ci],s instanceof ai?s:null}var jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function jt(s){return typeof s=="function"?s:(s[jn]||(s[jn]=function(l){return s.handleEvent(l)}),s[jn])}function Fe(){Ut.call(this),this.i=new ai(this),this.M=this,this.F=null}B(Fe,Ut),Fe.prototype[Bn]=!0,Fe.prototype.removeEventListener=function(s,l,f,_){co(this,s,l,f,_)};function Ye(s,l){var f,_=s.F;if(_)for(f=[];_;_=_.F)f.push(_);if(s=s.M,_=l.type||l,typeof l=="string")l=new xe(l,s);else if(l instanceof xe)l.target=l.target||s;else{var P=l;l=new xe(_,s),I(l,P)}if(P=!0,f)for(var O=f.length-1;0<=O;O--){var U=l.g=f[O];P=li(U,_,!0,l)&&P}if(U=l.g=s,P=li(U,_,!0,l)&&P,P=li(U,_,!1,l)&&P,f)for(O=0;O<f.length;O++)U=l.g=f[O],P=li(U,_,!1,l)&&P}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var f=s.g[l],_=0;_<f.length;_++)Tr(f[_]);delete s.g[l],s.h--}}this.F=null},Fe.prototype.K=function(s,l,f,_){return this.i.add(String(s),l,!1,f,_)},Fe.prototype.L=function(s,l,f,_){return this.i.add(String(s),l,!0,f,_)};function li(s,l,f,_){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var P=!0,O=0;O<l.length;++O){var U=l[O];if(U&&!U.da&&U.capture==f){var ve=U.listener,$e=U.ha||U.src;U.fa&&Zi(s.i,U),P=ve.call($e,_)!==!1&&P}}return P&&!_.defaultPrevented}function qn(s,l,f){if(typeof s=="function")f&&(s=A(s,f));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(s,l||0)}function En(s){s.g=qn(()=>{s.g=null,s.i&&(s.i=!1,En(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class Hn extends Ut{constructor(l,f){super(),this.m=l,this.l=f,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:En(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jt(s){Ut.call(this),this.h=s,this.g={}}B(Jt,Ut);var uo=[];function ui(s){Pe(s.g,function(l,f){this.g.hasOwnProperty(f)&&es(l)},s),s.g={}}Jt.prototype.N=function(){Jt.aa.N.call(this),ui(this)},Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ns=u.JSON.stringify,Ja=u.JSON.parse,Za=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function rs(){}rs.prototype.h=null;function ho(s){return s.h||(s.h=s.i())}function fo(){}var zn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wn(){xe.call(this,"d")}B(Wn,xe);function hi(){xe.call(this,"c")}B(hi,xe);var Zt={},po=null;function di(){return po=po||new Fe}Zt.La="serverreachability";function mo(s){xe.call(this,Zt.La,s)}B(mo,xe);function Ir(s){const l=di();Ye(l,new mo(l))}Zt.STAT_EVENT="statevent";function wn(s,l){xe.call(this,Zt.STAT_EVENT,s),this.stat=l}B(wn,xe);function Ne(s){const l=di();Ye(l,new wn(l,s))}Zt.Ma="timingevent";function go(s,l){xe.call(this,Zt.Ma,s),this.size=l}B(go,xe);function br(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},l)}function Ar(){this.g=!0}Ar.prototype.xa=function(){this.g=!1};function ec(s,l,f,_,P,O){s.info(function(){if(s.g)if(O)for(var U="",ve=O.split("&"),$e=0;$e<ve.length;$e++){var pe=ve[$e].split("=");if(1<pe.length){var ze=pe[0];pe=pe[1];var We=ze.split("_");U=2<=We.length&&We[1]=="type"?U+(ze+"="+pe+"&"):U+(ze+"=redacted&")}}else U=null;else U=O;return"XMLHTTP REQ ("+_+") [attempt "+P+"]: "+l+`
`+f+`
`+U})}function tc(s,l,f,_,P,O,U){s.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+P+"]: "+l+`
`+f+`
`+O+" "+U})}function en(s,l,f,_){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+fi(s,f)+(_?" "+_:"")})}function Kn(s,l){s.info(function(){return"TIMEOUT: "+l})}Ar.prototype.info=function(){};function fi(s,l){if(!s.g)return l;if(!l)return null;try{var f=JSON.parse(l);if(f){for(s=0;s<f.length;s++)if(Array.isArray(f[s])){var _=f[s];if(!(2>_.length)){var P=_[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return ns(f)}catch{return l}}var pi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},is;function gi(){}B(gi,rs),gi.prototype.g=function(){return new XMLHttpRequest},gi.prototype.i=function(){return{}},is=new gi;function ct(s,l,f,_){this.j=s,this.i=l,this.l=f,this.R=_||1,this.U=new Jt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new He}function He(){this.i=null,this.g="",this.h=!1}var nt={},Xe={};function Ue(s,l,f){s.L=1,s.v=bn(Oe(l)),s.m=f,s.P=!0,Cr(s,null)}function Cr(s,l){s.F=Date.now(),qt(s),s.A=Oe(s.v);var f=s.A,_=s.R;Array.isArray(_)||(_=[String(_)]),vi(f.i,"t",_),s.C=0,f=s.j.J,s.h=new He,s.g=ko(s.j,f?l:null,!s.m),0<s.O&&(s.M=new Hn(A(s.Y,s,s.g),s.O)),l=s.U,f=s.g,_=s.ca;var P="readystatechange";Array.isArray(P)||(P&&(uo[0]=P.toString()),P=uo);for(var O=0;O<P.length;O++){var U=vn(f,P[O],_||l.handleEvent,!1,l.h||l);if(!U)break;l.g[U.key]=U}l=s.H?v(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),Ir(),ec(s.i,s.u,s.A,s.l,s.R,s.m)}ct.prototype.ca=function(s){s=s.target;const l=this.M;l&&rt(s)==3?l.j():this.Y(s)},ct.prototype.Y=function(s){try{if(s==this.g)e:{const We=rt(this.g);var l=this.g.Ba();const Ke=this.g.Z();if(!(3>We)&&(We!=3||this.g&&(this.h.h||this.g.oa()||Co(this.g)))){this.J||We!=4||l==7||(l==8||0>=Ke?Ir(3):Ir(2)),Sr(this);var f=this.g.Z();this.X=f;t:if(Tn(this)){var _=Co(this.g);s="";var P=_.length,O=rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tn(this),Pt(this);var U="";break t}this.h.i=new u.TextDecoder}for(l=0;l<P;l++)this.h.h=!0,s+=this.h.i.decode(_[l],{stream:!(O&&l==P-1)});_.length=0,this.h.g+=s,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,tc(this.i,this.u,this.A,this.l,this.R,We,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,$e=this.g;if((ve=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(ve)){var pe=ve;break t}}pe=null}if(f=pe)en(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rr(this,f);else{this.o=!1,this.s=3,Ne(12),tn(this),Pt(this);break e}}if(this.P){f=!0;let _t;for(;!this.J&&this.C<U.length;)if(_t=In(this,U),_t==Xe){We==4&&(this.s=4,Ne(14),f=!1),en(this.i,this.l,null,"[Incomplete Response]");break}else if(_t==nt){this.s=4,Ne(15),en(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else en(this.i,this.l,_t,null),Rr(this,_t);if(Tn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),We!=4||U.length!=0||this.h.h||(this.s=1,Ne(16),f=!1),this.o=this.o&&f,!f)en(this.i,this.l,U,"[Invalid Chunked Response]"),tn(this),Pt(this);else if(0<U.length&&!this.W){this.W=!0;var ze=this.j;ze.g==this&&ze.ba&&!ze.M&&(ze.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Ts(ze),ze.M=!0,Ne(11))}}else en(this.i,this.l,U,null),Rr(this,U);We==4&&tn(this),this.o&&!this.J&&(We==4?Is(this.j,this):(this.o=!1,qt(this)))}else So(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),tn(this),Pt(this)}}}catch{}finally{}};function Tn(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function In(s,l){var f=s.C,_=l.indexOf(`
`,f);return _==-1?Xe:(f=Number(l.substring(f,_)),isNaN(f)?nt:(_+=1,_+f>l.length?Xe:(l=l.slice(_,_+f),s.C=_+f,l)))}ct.prototype.cancel=function(){this.J=!0,tn(this)};function qt(s){s.S=Date.now()+s.I,ss(s,s.I)}function ss(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=br(A(s.ba,s),l)}function Sr(s){s.B&&(u.clearTimeout(s.B),s.B=null)}ct.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Kn(this.i,this.A),this.L!=2&&(Ir(),Ne(17)),tn(this),this.s=2,Pt(this)):ss(this,this.S-s)};function Pt(s){s.j.G==0||s.J||Is(s.j,s)}function tn(s){Sr(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,ui(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function Rr(s,l){try{var f=s.j;if(f.G!=0&&(f.g==s||_i(f.h,s))){if(!s.K&&_i(f.h,s)&&f.G==3){try{var _=f.Da.g.parse(l)}catch{_=null}if(Array.isArray(_)&&_.length==3){var P=_;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<s.F)Vr(f),Or(f);else break e;ws(f),Ne(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=br(A(f.Za,f),6e3));if(1>=ls(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else zt(f,11)}else if((s.K||f.g==s)&&Vr(f),!G(l))for(P=f.Da.g.parse(l),l=0;l<P.length;l++){let pe=P[l];if(f.T=pe[0],pe=pe[1],f.G==2)if(pe[0]=="c"){f.K=pe[1],f.ia=pe[2];const ze=pe[3];ze!=null&&(f.la=ze,f.j.info("VER="+f.la));const We=pe[4];We!=null&&(f.Aa=We,f.j.info("SVER="+f.Aa));const Ke=pe[5];Ke!=null&&typeof Ke=="number"&&0<Ke&&(_=1.5*Ke,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const _t=s.g;if(_t){const Lr=_t.g?_t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Lr){var O=_.h;O.g||Lr.indexOf("spdy")==-1&&Lr.indexOf("quic")==-1&&Lr.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(yi(O,O.h),O.h=null))}if(_.D){const Si=_t.g?_t.g.getResponseHeader("X-HTTP-Session-Id"):null;Si&&(_.ya=Si,ge(_.I,_.D,Si))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-s.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var U=s;if(_.qa=bs(_,_.J?_.ia:null,_.W),U.K){us(_.h,U);var ve=U,$e=_.L;$e&&(ve.I=$e),ve.B&&(Sr(ve),qt(ve)),_.g=U}else Nr(_);0<f.i.length&&Dr(f)}else pe[0]!="stop"&&pe[0]!="close"||zt(f,7);else f.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?zt(f,7):Ii(f):pe[0]!="noop"&&f.l&&f.l.ta(pe),f.v=0)}}Ir(4)}catch{}}var os=class{constructor(s,l){this.g=s,this.map=l}};function as(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cs(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ls(s){return s.h?1:s.g?s.g.size:0}function _i(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function yi(s,l){s.g?s.g.add(l):s.h=l}function us(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}as.prototype.cancel=function(){if(this.i=hs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function hs(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const f of s.g.values())l=l.concat(f.D);return l}return W(s.i)}function _o(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var l=[],f=s.length,_=0;_<f;_++)l.push(s[_]);return l}l=[],f=0;for(_ in s)l[f++]=s[_];return l}function yo(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var l=[];s=s.length;for(var f=0;f<s;f++)l.push(f);return l}l=[],f=0;for(const _ in s)l[f++]=_;return l}}}function ds(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var f=yo(s),_=_o(s),P=_.length,O=0;O<P;O++)l.call(void 0,_[O],f&&f[O],s)}var wt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lt(s,l){if(s){s=s.split("&");for(var f=0;f<s.length;f++){var _=s[f].indexOf("="),P=null;if(0<=_){var O=s[f].substring(0,_);P=s[f].substring(_+1)}else O=s[f];l(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function ut(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ut){this.h=s.h,Gn(this,s.j),this.o=s.o,this.g=s.g,Qn(this,s.s),this.l=s.l;var l=s.i,f=new gt;f.i=l.i,l.g&&(f.g=new Map(l.g),f.h=l.h),Tt(this,f),this.m=s.m}else s&&(l=String(s).match(wt))?(this.h=!1,Gn(this,l[1]||"",!0),this.o=kt(l[2]||""),this.g=kt(l[3]||"",!0),Qn(this,l[4]),this.l=kt(l[5]||"",!0),Tt(this,l[6]||"",!0),this.m=kt(l[7]||"")):(this.h=!1,this.i=new gt(null,this.h))}ut.prototype.toString=function(){var s=[],l=this.j;l&&s.push(An(l,Cn,!0),":");var f=this.g;return(f||l=="file")&&(s.push("//"),(l=this.o)&&s.push(An(l,Cn,!0),"@"),s.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&s.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&s.push("/"),s.push(An(f,f.charAt(0)=="/"?Eo:fs,!0))),(f=this.i.toString())&&s.push("?",f),(f=this.m)&&s.push("#",An(f,nc)),s.join("")};function Oe(s){return new ut(s)}function Gn(s,l,f){s.j=f?kt(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function Qn(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function Tt(s,l,f){l instanceof gt?(s.i=l,wo(s.i,s.h)):(f||(l=An(l,Ht)),s.i=new gt(l,s.h))}function ge(s,l,f){s.i.set(l,f)}function bn(s){return ge(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function kt(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function An(s,l,f){return typeof s=="string"?(s=encodeURI(s).replace(l,vo),f&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function vo(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Cn=/[#\/\?@]/g,fs=/[#\?:]/g,Eo=/[#\?]/g,Ht=/[#\?@]/g,nc=/#/g;function gt(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function It(s){s.g||(s.g=new Map,s.h=0,s.i&&lt(s.i,function(l,f){s.add(decodeURIComponent(l.replace(/\+/g," ")),f)}))}n=gt.prototype,n.add=function(s,l){It(this),this.i=null,s=Ot(this,s);var f=this.g.get(s);return f||this.g.set(s,f=[]),f.push(l),this.h+=1,this};function ps(s,l){It(s),l=Ot(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Yn(s,l){return It(s),l=Ot(s,l),s.g.has(l)}n.forEach=function(s,l){It(this),this.g.forEach(function(f,_){f.forEach(function(P){s.call(l,P,_,this)},this)},this)},n.na=function(){It(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),f=[];for(let _=0;_<l.length;_++){const P=s[_];for(let O=0;O<P.length;O++)f.push(l[_])}return f},n.V=function(s){It(this);let l=[];if(typeof s=="string")Yn(this,s)&&(l=l.concat(this.g.get(Ot(this,s))));else{s=Array.from(this.g.values());for(let f=0;f<s.length;f++)l=l.concat(s[f])}return l},n.set=function(s,l){return It(this),this.i=null,s=Ot(this,s),Yn(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function vi(s,l,f){ps(s,l),0<f.length&&(s.i=null,s.g.set(Ot(s,l),W(f)),s.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var f=0;f<l.length;f++){var _=l[f];const O=encodeURIComponent(String(_)),U=this.V(_);for(_=0;_<U.length;_++){var P=O;U[_]!==""&&(P+="="+encodeURIComponent(String(U[_]))),s.push(P)}}return this.i=s.join("&")};function Ot(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function wo(s,l){l&&!s.j&&(It(s),s.i=null,s.g.forEach(function(f,_){var P=_.toLowerCase();_!=P&&(ps(this,_),vi(this,P,f))},s)),s.j=l}function To(s,l){const f=new Ar;if(u.Image){const _=new Image;_.onload=N(ht,f,"TestLoadImage: loaded",!0,l,_),_.onerror=N(ht,f,"TestLoadImage: error",!1,l,_),_.onabort=N(ht,f,"TestLoadImage: abort",!1,l,_),_.ontimeout=N(ht,f,"TestLoadImage: timeout",!1,l,_),u.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=s}else l(!1)}function Io(s,l){const f=new Ar,_=new AbortController,P=setTimeout(()=>{_.abort(),ht(f,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:_.signal}).then(O=>{clearTimeout(P),O.ok?ht(f,"TestPingServer: ok",!0,l):ht(f,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(P),ht(f,"TestPingServer: error",!1,l)})}function ht(s,l,f,_,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),_(f)}catch{}}function rc(){this.g=new Za}function bo(s,l,f){const _=f||"";try{ds(s,function(P,O){let U=P;m(P)&&(U=ns(P)),l.push(_+O+"="+encodeURIComponent(U))})}catch(P){throw l.push(_+"type="+encodeURIComponent("_badmap")),P}}function Xn(s){this.l=s.Ub||null,this.j=s.eb||!1}B(Xn,rs),Xn.prototype.g=function(){return new Sn(this.l,this.j)},Xn.prototype.i=function(s){return function(){return s}}({});function Sn(s,l){Fe.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(Sn,Fe),n=Sn.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,nn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,nn(this)),this.g&&(this.readyState=3,nn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ei(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ei(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?Pr(this):nn(this),this.readyState==3&&Ei(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Pr(this))},n.Qa=function(s){this.g&&(this.response=s,Pr(this))},n.ga=function(){this.g&&Pr(this)};function Pr(s){s.readyState=4,s.l=null,s.j=null,s.v=null,nn(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var f=l.next();!f.done;)f=f.value,s.push(f[0]+": "+f[1]),f=l.next();return s.join(`\r
`)};function nn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ao(s){let l="";return Pe(s,function(f,_){l+=_,l+=":",l+=f,l+=`\r
`}),l}function wi(s,l,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=Ao(f),typeof s=="string"?f!=null&&encodeURIComponent(String(f)):ge(s,l,f))}function Ce(s){Fe.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Ce,Fe);var ms=/^https?$/i,gs=["POST","PUT"];n=Ce.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():is.g(),this.v=this.o?ho(this.o):ho(is),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(O){_s(this,O);return}if(s=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var P in _)f.set(P,_[P]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())f.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),P=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(gs,l,void 0))||_||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,U]of f)this.g.setRequestHeader(O,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ys(this),this.u=!0,this.g.send(s),this.u=!1}catch(O){_s(this,O)}};function _s(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Jn(s),kr(s)}function Jn(s){s.A||(s.A=!0,Ye(s,"complete"),Ye(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ye(this,"complete"),Ye(this,"abort"),kr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kr(this,!0)),Ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ti(this):this.bb())},n.bb=function(){Ti(this)};function Ti(s){if(s.h&&typeof c<"u"&&(!s.v[1]||rt(s)!=4||s.Z()!=2)){if(s.u&&rt(s)==4)qn(s.Ea,0,s);else if(Ye(s,"readystatechange"),rt(s)==4){s.h=!1;try{const U=s.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var f;if(!(f=l)){var _;if(_=U===0){var P=String(s.D).match(wt)[1]||null;!P&&u.self&&u.self.location&&(P=u.self.location.protocol.slice(0,-1)),_=!ms.test(P?P.toLowerCase():"")}f=_}if(f)Ye(s,"complete"),Ye(s,"success");else{s.m=6;try{var O=2<rt(s)?s.g.statusText:""}catch{O=""}s.l=O+" ["+s.Z()+"]",Jn(s)}}finally{kr(s)}}}}function kr(s,l){if(s.g){ys(s);const f=s.g,_=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||Ye(s,"ready");try{f.onreadystatechange=_}catch{}}}function ys(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function rt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<rt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),Ja(l)}};function Co(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function So(s){const l={};s=(s.g&&2<=rt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<s.length;_++){if(G(s[_]))continue;var f=R(s[_]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=l[P]||[];l[P]=O,O.push(f)}S(l,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(s,l,f){return f&&f.internalChannelParams&&f.internalChannelParams[s]||l}function vs(s){this.Aa=0,this.i=[],this.j=new Ar,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,s),this.cb=Zn("retryDelaySeedMs",1e4,s),this.Wa=Zn("forwardChannelMaxRetries",2,s),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new as(s&&s.concurrentRequestLimit),this.Da=new rc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=vs.prototype,n.la=8,n.G=1,n.connect=function(s,l,f,_){Ne(0),this.W=s,this.H=l||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=bs(this,null,this.W),Dr(this)};function Ii(s){if(bi(s),s.G==3){var l=s.U++,f=Oe(s.I);if(ge(f,"SID",s.K),ge(f,"RID",l),ge(f,"TYPE","terminate"),er(s,f),l=new ct(s,s.j,l),l.L=2,l.v=bn(Oe(f)),f=!1,u.navigator&&u.navigator.sendBeacon)try{f=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!f&&u.Image&&(new Image().src=l.v,f=!0),f||(l.g=ko(l.j,null),l.g.ea(l.v)),l.F=Date.now(),qt(l)}Po(s)}function Or(s){s.g&&(Ts(s),s.g.cancel(),s.g=null)}function bi(s){Or(s),s.u&&(u.clearTimeout(s.u),s.u=null),Vr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function Dr(s){if(!cs(s.h)&&!s.s){s.s=!0;var l=s.Ga;gn||x(),wr||(gn(),wr=!0),si.add(l,s),s.B=0}}function ic(s,l){return ls(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=br(A(s.Ga,s,l),rn(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const P=new ct(this,this.j,s);let O=this.o;if(this.S&&(O?(O=v(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var l=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(l+=_,4096<l){l=f;break e}if(l===4096||f===this.i.length-1){l=f+1;break e}}l=1e3}else l=1e3;l=Es(this,P,l),f=Oe(this.I),ge(f,"RID",s),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),er(this,f),O&&(this.O?l="headers="+encodeURIComponent(String(Ao(O)))+"&"+l:this.m&&wi(f,this.m,O)),yi(this.h,P),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",l),ge(f,"SID","null"),P.T=!0,Ue(P,f,null)):Ue(P,f,l),this.G=2}}else this.G==3&&(s?Ro(this,s):this.i.length==0||cs(this.h)||Ro(this))};function Ro(s,l){var f;l?f=l.l:f=s.U++;const _=Oe(s.I);ge(_,"SID",s.K),ge(_,"RID",f),ge(_,"AID",s.T),er(s,_),s.m&&s.o&&wi(_,s.m,s.o),f=new ct(s,s.j,f,s.B+1),s.m===null&&(f.H=s.o),l&&(s.i=l.D.concat(s.i)),l=Es(s,f,1e3),f.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),yi(s.h,f),Ue(f,_,l)}function er(s,l){s.H&&Pe(s.H,function(f,_){ge(l,_,f)}),s.l&&ds({},function(f,_){ge(l,_,f)})}function Es(s,l,f){f=Math.min(s.i.length,f);var _=s.l?A(s.l.Na,s.l,s):null;e:{var P=s.i;let O=-1;for(;;){const U=["count="+f];O==-1?0<f?(O=P[0].g,U.push("ofs="+O)):O=0:U.push("ofs="+O);let ve=!0;for(let $e=0;$e<f;$e++){let pe=P[$e].g;const ze=P[$e].map;if(pe-=O,0>pe)O=Math.max(0,P[$e].g-100),ve=!1;else try{bo(ze,U,"req"+pe+"_")}catch{_&&_(ze)}}if(ve){_=U.join("&");break e}}}return s=s.i.splice(0,f),l.D=s,_}function Nr(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;gn||x(),wr||(gn(),wr=!0),si.add(l,s),s.v=0}}function ws(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=br(A(s.Fa,s),rn(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Ai(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=br(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),Or(this),Ai(this))};function Ts(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Ai(s){s.g=new ct(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=Oe(s.qa);ge(l,"RID","rpc"),ge(l,"SID",s.K),ge(l,"AID",s.T),ge(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&ge(l,"TO",s.ja),ge(l,"TYPE","xmlhttp"),er(s,l),s.m&&s.o&&wi(l,s.m,s.o),s.L&&(s.g.I=s.L);var f=s.g;s=s.ia,f.L=1,f.v=bn(Oe(l)),f.m=null,f.P=!0,Cr(f,s)}n.Za=function(){this.C!=null&&(this.C=null,Or(this),ws(this),Ne(19))};function Vr(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Is(s,l){var f=null;if(s.g==l){Vr(s),Ts(s),s.g=null;var _=2}else if(_i(s.h,l))f=l.D,us(s.h,l),_=1;else return;if(s.G!=0){if(l.o)if(_==1){f=l.m?l.m.length:0,l=Date.now()-l.F;var P=s.B;_=di(),Ye(_,new go(_,f)),Dr(s)}else Nr(s);else if(P=l.s,P==3||P==0&&0<l.X||!(_==1&&ic(s,l)||_==2&&ws(s)))switch(f&&0<f.length&&(l=s.h,l.i=l.i.concat(f)),P){case 1:zt(s,5);break;case 4:zt(s,10);break;case 3:zt(s,6);break;default:zt(s,2)}}}function rn(s,l){let f=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(f*=2),f*l}function zt(s,l){if(s.j.info("Error code "+l),l==2){var f=A(s.fb,s),_=s.Xa;const P=!_;_=new ut(_||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Gn(_,"https"),bn(_),P?To(_.toString(),f):Io(_.toString(),f)}else Ne(2);s.G=0,s.l&&s.l.sa(l),Po(s),bi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function Po(s){if(s.G=0,s.ka=[],s.l){const l=hs(s.h);(l.length!=0||s.i.length!=0)&&(F(s.ka,l),F(s.ka,s.i),s.h.i.length=0,W(s.i),s.i.length=0),s.l.ra()}}function bs(s,l,f){var _=f instanceof ut?Oe(f):new ut(f);if(_.g!="")l&&(_.g=l+"."+_.g),Qn(_,_.s);else{var P=u.location;_=P.protocol,l=l?l+"."+P.hostname:P.hostname,P=+P.port;var O=new ut(null);_&&Gn(O,_),l&&(O.g=l),P&&Qn(O,P),f&&(O.l=f),_=O}return f=s.D,l=s.ya,f&&l&&ge(_,f,l),ge(_,"VER",s.la),er(s,_),_}function ko(s,l,f){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new Ce(new Xn({eb:f})):new Ce(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oo(){}n=Oo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ci(){}Ci.prototype.g=function(s,l){return new dt(s,l)};function dt(s,l){Fe.call(this),this.g=new vs(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!G(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!G(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new tr(this)}B(dt,Fe),dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){Ii(this.g)},dt.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var f={};f.__data__=s,s=f}else this.u&&(f={},f.__data__=ns(s),s=f);l.i.push(new os(l.Ya++,s)),l.G==3&&Dr(l)},dt.prototype.N=function(){this.g.l=null,delete this.j,Ii(this.g),delete this.g,dt.aa.N.call(this)};function As(s){Wn.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const f in l){s=f;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}B(As,Wn);function Cs(){hi.call(this),this.status=1}B(Cs,hi);function tr(s){this.g=s}B(tr,Oo),tr.prototype.ua=function(){Ye(this.g,"a")},tr.prototype.ta=function(s){Ye(this.g,new As(s))},tr.prototype.sa=function(s){Ye(this.g,new Cs)},tr.prototype.ra=function(){Ye(this.g,"b")},Ci.prototype.createWebChannel=Ci.prototype.g,dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,zd=function(){return new Ci},Hd=function(){return di()},qd=Zt,Mc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pi.NO_ERROR=0,pi.TIMEOUT=8,pi.HTTP_ERROR=6,Go=pi,mi.COMPLETE="complete",jd=mi,fo.EventType=zn,zn.OPEN="a",zn.CLOSE="b",zn.ERROR="c",zn.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,Ds=fo,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,Bd=Ce}).apply(typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{});const eh="@firebase/firestore",th="4.7.17";/**
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
 */let Ki="11.9.0";/**
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
 */const Wr=new Ra("@firebase/firestore");function ki(){return Wr.logLevel}function q(n,...e){if(Wr.logLevel<=he.DEBUG){const t=e.map(sl);Wr.debug(`Firestore (${Ki}): ${n}`,...t)}}function xn(n,...e){if(Wr.logLevel<=he.ERROR){const t=e.map(sl);Wr.error(`Firestore (${Ki}): ${n}`,...t)}}function Fi(n,...e){if(Wr.logLevel<=he.WARN){const t=e.map(sl);Wr.warn(`Firestore (${Ki}): ${n}`,...t)}}function sl(n){if(typeof n=="string")return n;try{/**
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
 */function Z(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Wd(n,r,t)}function Wd(n,e,t){let r=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw xn(r),new Error(r)}function ye(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Wd(e,i,r)}function se(n,e){return n}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Xt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Kd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ry{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(st.UNAUTHENTICATED))}shutdown(){}}class Py{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ky{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,t(d)):Promise.resolve();let o=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Dn,e.enqueueRetryable(()=>i(this.currentUser))};const c=()=>{const d=o;e.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},u=d=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(d=>u(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?u(d):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Dn)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string",31837,{l:r}),new Kd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class Oy{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Dy{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Oy(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ny{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,At(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0,3512);const r=o=>{o.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.m;return this.m=o.token,q("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new nh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new nh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Vy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Gd(){return new TextEncoder}/**
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
 */class Qd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Vy(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function le(n,e){return n<e?-1:n>e?1:0}function Fc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return le(r,i);{const o=Gd(),c=Ly(o.encode(rh(n,t)),o.encode(rh(e,t)));return c!==0?c:le(r,i)}}t+=r>65535?2:1}return le(n.length,e.length)}function rh(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Ly(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return le(n[t],e[t]);return le(n.length,e.length)}function Ui(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const ih=-62135596800,sh=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*sh);return new je(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ih)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sh}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ih;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const oh="__name__";class an{constructor(e,t,r){t===void 0?t=0:t>e.length&&Z(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Z(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=an.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return le(e.length,t.length)}static compareSegments(e,t){const r=an.isNumericId(e),i=an.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?an.extractNumericId(e).compare(an.extractNumericId(t)):Fc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Re extends an{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Re(t)}static emptyPath(){return new Re([])}}const xy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends an{construct(e,t,r){return new Ze(e,t,r)}static isValidIdentifier(e){return xy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===oh}static keyField(){return new Ze([oh])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new K(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new K(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new K(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,i+=2}else u==="`"?(c=!c,i++):u!=="."||c?(r+=u,i++):(o(),i++)}if(o(),c)throw new K(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(t)}static emptyPath(){return new Ze([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Re.fromString(e))}static fromName(e){return new Y(Re.fromString(e).popFirst(5))}static empty(){return new Y(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Re(e.slice()))}}/**
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
 */const Hs=-1;function My(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new je(t+1,0):new je(t,r));return new mr(i,Y.empty(),e)}function Fy(n){return new mr(n.readTime,n.key,Hs)}class mr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new mr(ne.min(),Y.empty(),Hs)}static max(){return new mr(ne.max(),Y.empty(),Hs)}}function Uy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
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
 */const $y="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class By{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Gi(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==$y)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let i=0,o=0,c=!1;e.forEach(u=>{++i,u.next(()=>{++o,c&&o===i&&t()},d=>r(d))}),c=!0,o===i&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(i=>i?V.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new V((r,i)=>{const o=e.length,c=new Array(o);let u=0;for(let d=0;d<o;d++){const m=d;t(e[m]).next(y=>{c[m]=y,++u,u===o&&r(c)},y=>i(y))}})}static doWhile(e,t){return new V((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function jy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Pa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Pa.le=-1;/**
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
 */const ol=-1;function ka(n){return n==null}function oa(n){return n===0&&1/n==-1/0}function qy(n){return typeof n=="number"&&Number.isInteger(n)&&!oa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Yd="";function Hy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ah(e)),e=zy(n.get(t),e);return ah(e)}function zy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case Yd:t+="";break;default:t+=o}}return t}function ah(n){return n+Yd+""}/**
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
 */function ch(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ti(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Xd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ke{constructor(e,t){this.comparator=e,this.root=t||Je.EMPTY}insert(e,t){return new ke(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jo(this.root,e,this.comparator,!0)}}class jo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=o??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new Je(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new Je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lh(this.data.getIterator())}getIteratorFrom(e){return new lh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new qe(this.comparator);return t.data=e,t}}class lh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Kt([])}unionWith(e){let t=new qe(Ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Kt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ui(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Jd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Jd("Invalid base64 string: "+o):o}}(e);return new tt(t)}static fromUint8Array(e){const t=function(i){let o="";for(let c=0;c<i.length;++c)o+=String.fromCharCode(i[c]);return o}(e);return new tt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const Wy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(n){if(ye(!!n,39018),typeof n=="string"){let e=0;const t=Wy.exec(n);if(ye(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _r(n){return typeof n=="string"?tt.fromBase64String(n):tt.fromUint8Array(n)}/**
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
 */const Zd="server_timestamp",ef="__type__",tf="__previous_value__",nf="__local_write_time__";function al(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ef])===null||t===void 0?void 0:t.stringValue)===Zd}function Oa(n){const e=n.mapValue.fields[tf];return al(e)?Oa(e):e}function zs(n){const e=gr(n.mapValue.fields[nf].timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class Ky{constructor(e,t,r,i,o,c,u,d,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=u,this.longPollingOptions=d,this.useFetchStreams=m,this.isUsingEmulator=y}}const aa="(default)";class Ws{constructor(e,t){this.projectId=e,this.database=t||aa}static empty(){return new Ws("","")}get isDefaultDatabase(){return this.database===aa}isEqual(e){return e instanceof Ws&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const rf="__type__",Gy="__max__",qo={mapValue:{}},sf="__vector__",ca="value";function yr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?al(n)?4:Yy(n)?9007199254740991:Qy(n)?10:11:Z(28295,{value:n})}function dn(n,e){if(n===e)return!0;const t=yr(n);if(t!==yr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zs(n).isEqual(zs(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const c=gr(i.timestampValue),u=gr(o.timestampValue);return c.seconds===u.seconds&&c.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return _r(i.bytesValue).isEqual(_r(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return Le(i.geoPointValue.latitude)===Le(o.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Le(i.integerValue)===Le(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const c=Le(i.doubleValue),u=Le(o.doubleValue);return c===u?oa(c)===oa(u):isNaN(c)&&isNaN(u)}return!1}(n,e);case 9:return Ui(n.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(i,o){const c=i.mapValue.fields||{},u=o.mapValue.fields||{};if(ch(c)!==ch(u))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(u[d]===void 0||!dn(c[d],u[d])))return!1;return!0}(n,e);default:return Z(52216,{left:n})}}function Ks(n,e){return(n.values||[]).find(t=>dn(t,e))!==void 0}function $i(n,e){if(n===e)return 0;const t=yr(n),r=yr(e);if(t!==r)return le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(o,c){const u=Le(o.integerValue||o.doubleValue),d=Le(c.integerValue||c.doubleValue);return u<d?-1:u>d?1:u===d?0:isNaN(u)?isNaN(d)?0:-1:1}(n,e);case 3:return uh(n.timestampValue,e.timestampValue);case 4:return uh(zs(n),zs(e));case 5:return Fc(n.stringValue,e.stringValue);case 6:return function(o,c){const u=_r(o),d=_r(c);return u.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(o,c){const u=o.split("/"),d=c.split("/");for(let m=0;m<u.length&&m<d.length;m++){const y=le(u[m],d[m]);if(y!==0)return y}return le(u.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,c){const u=le(Le(o.latitude),Le(c.latitude));return u!==0?u:le(Le(o.longitude),Le(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return hh(n.arrayValue,e.arrayValue);case 10:return function(o,c){var u,d,m,y;const T=o.fields||{},A=c.fields||{},N=(u=T[ca])===null||u===void 0?void 0:u.arrayValue,B=(d=A[ca])===null||d===void 0?void 0:d.arrayValue,W=le(((m=N==null?void 0:N.values)===null||m===void 0?void 0:m.length)||0,((y=B==null?void 0:B.values)===null||y===void 0?void 0:y.length)||0);return W!==0?W:hh(N,B)}(n.mapValue,e.mapValue);case 11:return function(o,c){if(o===qo.mapValue&&c===qo.mapValue)return 0;if(o===qo.mapValue)return 1;if(c===qo.mapValue)return-1;const u=o.fields||{},d=Object.keys(u),m=c.fields||{},y=Object.keys(m);d.sort(),y.sort();for(let T=0;T<d.length&&T<y.length;++T){const A=Fc(d[T],y[T]);if(A!==0)return A;const N=$i(u[d[T]],m[y[T]]);if(N!==0)return N}return le(d.length,y.length)}(n.mapValue,e.mapValue);default:throw Z(23264,{Pe:t})}}function uh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=gr(n),r=gr(e),i=le(t.seconds,r.seconds);return i!==0?i:le(t.nanos,r.nanos)}function hh(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=$i(t[i],r[i]);if(o)return o}return le(t.length,r.length)}function Bi(n){return Uc(n)}function Uc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=gr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return _r(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Uc(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const c of r)o?o=!1:i+=",",i+=`${c}:${Uc(t.fields[c])}`;return i+"}"}(n.mapValue):Z(61005,{value:n})}function Qo(n){switch(yr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oa(n);return e?16+Qo(e):16;case 5:return 2*n.stringValue.length;case 6:return _r(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Qo(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return ti(r.fields,(o,c)=>{i+=o.length+Qo(c)}),i}(n.mapValue);default:throw Z(13486,{value:n})}}function $c(n){return!!n&&"integerValue"in n}function cl(n){return!!n&&"arrayValue"in n}function dh(n){return!!n&&"nullValue"in n}function fh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yo(n){return!!n&&"mapValue"in n}function Qy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[rf])===null||t===void 0?void 0:t.stringValue)===sf}function Ms(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ti(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ms(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ms(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Yy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Gy}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Yo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ms(t)}setAll(e){let t=Ze.emptyPath(),r={},i=[];e.forEach((c,u)=>{if(!t.isImmediateParentOf(u)){const d=this.getFieldsMap(t);this.applyChanges(d,r,i),r={},i=[],t=u.popLast()}c?r[u.lastSegment()]=Ms(c):i.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Yo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Yo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ti(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new xt(Ms(this.value))}}function of(n){const e=[];return ti(n.fields,(t,r)=>{const i=new Ze([t]);if(Yo(r)){const o=of(r.mapValue).fields;if(o.length===0)e.push(i);else for(const c of o)e.push(i.child(c))}else e.push(i)}),new Kt(e)}/**
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
 */class ot{constructor(e,t,r,i,o,c,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=c,this.documentState=u}static newInvalidDocument(e){return new ot(e,0,ne.min(),ne.min(),ne.min(),xt.empty(),0)}static newFoundDocument(e,t,r,i){return new ot(e,1,t,ne.min(),r,i,0)}static newNoDocument(e,t){return new ot(e,2,t,ne.min(),ne.min(),xt.empty(),0)}static newUnknownDocument(e,t){return new ot(e,3,t,ne.min(),ne.min(),xt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class la{constructor(e,t){this.position=e,this.inclusive=t}}function ph(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],c=n.position[i];if(o.field.isKeyField()?r=Y.comparator(Y.fromName(c.referenceValue),t.key):r=$i(c,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function mh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ua{constructor(e,t="asc"){this.field=e,this.dir=t}}function Xy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class af{}class Be extends af{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Zy(e,t,r):t==="array-contains"?new nv(e,r):t==="in"?new rv(e,r):t==="not-in"?new iv(e,r):t==="array-contains-any"?new sv(e,r):new Be(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ev(e,r):new tv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison($i(t,this.value)):t!==null&&yr(this.value)===yr(t)&&this.matchesComparison($i(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends af{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new fn(e,t)}matches(e){return cf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function cf(n){return n.op==="and"}function lf(n){return Jy(n)&&cf(n)}function Jy(n){for(const e of n.filters)if(e instanceof fn)return!1;return!0}function Bc(n){if(n instanceof Be)return n.field.canonicalString()+n.op.toString()+Bi(n.value);if(lf(n))return n.filters.map(e=>Bc(e)).join(",");{const e=n.filters.map(t=>Bc(t)).join(",");return`${n.op}(${e})`}}function uf(n,e){return n instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&dn(r.value,i.value)}(n,e):n instanceof fn?function(r,i){return i instanceof fn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,c,u)=>o&&uf(c,i.filters[u]),!0):!1}(n,e):void Z(19439)}function hf(n){return n instanceof Be?function(t){return`${t.field.canonicalString()} ${t.op} ${Bi(t.value)}`}(n):n instanceof fn?function(t){return t.op.toString()+" {"+t.getFilters().map(hf).join(" ,")+"}"}(n):"Filter"}class Zy extends Be{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class ev extends Be{constructor(e,t){super(e,"in",t),this.keys=df("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tv extends Be{constructor(e,t){super(e,"not-in",t),this.keys=df("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function df(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Y.fromName(r.referenceValue))}class nv extends Be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cl(t)&&Ks(t.arrayValue,this.value)}}class rv extends Be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ks(this.value.arrayValue,t)}}class iv extends Be{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ks(this.value.arrayValue,t)}}class sv extends Be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ks(this.value.arrayValue,r))}}/**
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
 */class ov{constructor(e,t=null,r=[],i=[],o=null,c=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=c,this.endAt=u,this.Ie=null}}function gh(n,e=null,t=[],r=[],i=null,o=null,c=null){return new ov(n,e,t,r,i,o,c)}function ll(n){const e=se(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Bc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ka(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Bi(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Bi(r)).join(",")),e.Ie=t}return e.Ie}function ul(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Xy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!uf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!mh(n.startAt,e.startAt)&&mh(n.endAt,e.endAt)}function jc(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Da{constructor(e,t=null,r=[],i=[],o=null,c="F",u=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=c,this.startAt=u,this.endAt=d,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function av(n,e,t,r,i,o,c,u){return new Da(n,e,t,r,i,o,c,u)}function hl(n){return new Da(n)}function _h(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function cv(n){return n.collectionGroup!==null}function Fs(n){const e=se(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let u=new qe(Ze.comparator);return c.filters.forEach(d=>{d.getFlattenedFilters().forEach(m=>{m.isInequality()&&(u=u.add(m.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new ua(o,r))}),t.has(Ze.keyField().canonicalString())||e.Ee.push(new ua(Ze.keyField(),r))}return e.Ee}function cn(n){const e=se(n);return e.de||(e.de=lv(e,Fs(n))),e.de}function lv(n,e){if(n.limitType==="F")return gh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ua(i.field,o)});const t=n.endAt?new la(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new la(n.startAt.position,n.startAt.inclusive):null;return gh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function qc(n,e,t){return new Da(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Na(n,e){return ul(cn(n),cn(e))&&n.limitType===e.limitType}function ff(n){return`${ll(cn(n))}|lt:${n.limitType}`}function Oi(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>hf(i)).join(", ")}]`),ka(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Bi(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Bi(i)).join(",")),`Target(${r})`}(cn(n))}; limitType=${n.limitType})`}function Va(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):Y.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Fs(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(c,u,d){const m=ph(c,u,d);return c.inclusive?m<=0:m<0}(r.startAt,Fs(r),i)||r.endAt&&!function(c,u,d){const m=ph(c,u,d);return c.inclusive?m>=0:m>0}(r.endAt,Fs(r),i))}(n,e)}function uv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pf(n){return(e,t)=>{let r=!1;for(const i of Fs(n)){const o=hv(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function hv(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):function(o,c,u){const d=c.data.field(o),m=u.data.field(o);return d!==null&&m!==null?$i(d,m):Z(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:n.dir})}}/**
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
 */class ni{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ti(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Xd(this.inner)}size(){return this.innerSize}}/**
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
 */const dv=new ke(Y.comparator);function Mn(){return dv}const mf=new ke(Y.comparator);function Ns(...n){let e=mf;for(const t of n)e=e.insert(t.key,t);return e}function gf(n){let e=mf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function qr(){return Us()}function _f(){return Us()}function Us(){return new ni(n=>n.toString(),(n,e)=>n.isEqual(e))}const fv=new ke(Y.comparator),pv=new qe(Y.comparator);function de(...n){let e=pv;for(const t of n)e=e.add(t);return e}const mv=new qe(le);function gv(){return mv}/**
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
 */function dl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oa(e)?"-0":e}}function yf(n){return{integerValue:""+n}}function _v(n,e){return qy(e)?yf(e):dl(n,e)}/**
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
 */class La{constructor(){this._=void 0}}function yv(n,e,t){return n instanceof ha?function(i,o){const c={fields:{[ef]:{stringValue:Zd},[nf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&al(o)&&(o=Oa(o)),o&&(c.fields[tf]=o),{mapValue:c}}(t,e):n instanceof Gs?Ef(n,e):n instanceof Qs?wf(n,e):function(i,o){const c=vf(i,o),u=yh(c)+yh(i.Re);return $c(c)&&$c(i.Re)?yf(u):dl(i.serializer,u)}(n,e)}function vv(n,e,t){return n instanceof Gs?Ef(n,e):n instanceof Qs?wf(n,e):t}function vf(n,e){return n instanceof da?function(r){return $c(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ha extends La{}class Gs extends La{constructor(e){super(),this.elements=e}}function Ef(n,e){const t=Tf(e);for(const r of n.elements)t.some(i=>dn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Qs extends La{constructor(e){super(),this.elements=e}}function wf(n,e){let t=Tf(e);for(const r of n.elements)t=t.filter(i=>!dn(i,r));return{arrayValue:{values:t}}}class da extends La{constructor(e,t){super(),this.serializer=e,this.Re=t}}function yh(n){return Le(n.integerValue||n.doubleValue)}function Tf(n){return cl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ev(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Gs&&i instanceof Gs||r instanceof Qs&&i instanceof Qs?Ui(r.elements,i.elements,dn):r instanceof da&&i instanceof da?dn(r.Re,i.Re):r instanceof ha&&i instanceof ha}(n.transform,e.transform)}class wv{constructor(e,t){this.version=e,this.transformResults=t}}class Nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class xa{}function If(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Af(n.key,Nn.none()):new Zs(n.key,n.data,Nn.none());{const t=n.data,r=xt.empty();let i=new qe(Ze.comparator);for(let o of e.fields)if(!i.has(o)){let c=t.field(o);c===null&&o.length>1&&(o=o.popLast(),c=t.field(o)),c===null?r.delete(o):r.set(o,c),i=i.add(o)}return new ri(n.key,r,new Kt(i.toArray()),Nn.none())}}function Tv(n,e,t){n instanceof Zs?function(i,o,c){const u=i.value.clone(),d=Eh(i.fieldTransforms,o,c.transformResults);u.setAll(d),o.convertToFoundDocument(c.version,u).setHasCommittedMutations()}(n,e,t):n instanceof ri?function(i,o,c){if(!Xo(i.precondition,o))return void o.convertToUnknownDocument(c.version);const u=Eh(i.fieldTransforms,o,c.transformResults),d=o.data;d.setAll(bf(i)),d.setAll(u),o.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):function(i,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function $s(n,e,t,r){return n instanceof Zs?function(o,c,u,d){if(!Xo(o.precondition,c))return u;const m=o.value.clone(),y=wh(o.fieldTransforms,d,c);return m.setAll(y),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof ri?function(o,c,u,d){if(!Xo(o.precondition,c))return u;const m=wh(o.fieldTransforms,d,c),y=c.data;return y.setAll(bf(o)),y.setAll(m),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(o,c,u){return Xo(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):u}(n,e,t)}function Iv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=vf(r.transform,i||null);o!=null&&(t===null&&(t=xt.empty()),t.set(r.field,o))}return t||null}function vh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ui(r,i,(o,c)=>Ev(o,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Zs extends xa{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ri extends xa{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function bf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Eh(n,e,t){const r=new Map;ye(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const o=n[i],c=o.transform,u=e.data.field(o.field);r.set(o.field,vv(c,u,t[i]))}return r}function wh(n,e,t){const r=new Map;for(const i of n){const o=i.transform,c=t.data.field(i.field);r.set(i.field,yv(o,c,e))}return r}class Af extends xa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bv extends xa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Av{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Tv(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=$s(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=$s(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=_f();return this.mutations.forEach(i=>{const o=e.get(i.key),c=o.overlayedDocument;let u=this.applyToLocalView(c,o.mutatedFields);u=t.has(i.key)?null:u;const d=If(c,u);d!==null&&r.set(i.key,d),c.isValidDocument()||c.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),de())}isEqual(e){return this.batchId===e.batchId&&Ui(this.mutations,e.mutations,(t,r)=>vh(t,r))&&Ui(this.baseMutations,e.baseMutations,(t,r)=>vh(t,r))}}class fl{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ye(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return fv}();const o=e.mutations;for(let c=0;c<o.length;c++)i=i.insert(o[c].key,r[c].version);return new fl(e,t,r,i)}}/**
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
 */class Cv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Sv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Me,me;function Rv(n){switch(n){case M.OK:return Z(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Z(15467,{code:n})}}function Cf(n){if(n===void 0)return xn("GRPC error has no .code"),M.UNKNOWN;switch(n){case Me.OK:return M.OK;case Me.CANCELLED:return M.CANCELLED;case Me.UNKNOWN:return M.UNKNOWN;case Me.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Me.INTERNAL:return M.INTERNAL;case Me.UNAVAILABLE:return M.UNAVAILABLE;case Me.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Me.NOT_FOUND:return M.NOT_FOUND;case Me.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Me.ABORTED:return M.ABORTED;case Me.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Me.DATA_LOSS:return M.DATA_LOSS;default:return Z(39323,{code:n})}}(me=Me||(Me={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Pv=new dr([4294967295,4294967295],0);function Th(n){const e=Gd().encode(n),t=new $d;return t.update(e),new Uint8Array(t.digest())}function Ih(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new dr([t,r],0),new dr([i,o],0)]}class pl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Vs(`Invalid padding: ${t}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=dr.fromNumber(this.pe)}we(e,t,r){let i=e.add(t.multiply(dr.fromNumber(r)));return i.compare(Pv)===1&&(i=new dr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Th(e),[r,i]=Ih(t);for(let o=0;o<this.hashCount;o++){const c=this.we(r,i,o);if(!this.be(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),c=new pl(o,i,t);return r.forEach(u=>c.insert(u)),c}insert(e){if(this.pe===0)return;const t=Th(e),[r,i]=Ih(t);for(let o=0;o<this.hashCount;o++){const c=this.we(r,i,o);this.Se(c)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ma{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,eo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ma(ne.min(),i,new ke(le),Mn(),de())}}class eo{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new eo(r,t,de(),de(),de())}}/**
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
 */class Jo{constructor(e,t,r,i){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=i}}class Sf{constructor(e,t){this.targetId=e,this.Ce=t}}class Rf{constructor(e,t,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class bh{constructor(){this.Fe=0,this.Me=Ah(),this.xe=tt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=de(),t=de(),r=de();return this.Me.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Z(38017,{changeType:o})}}),new eo(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Ah()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ye(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class kv{constructor(e){this.ze=e,this.je=new Map,this.He=Mn(),this.Je=Ho(),this.Ye=Ho(),this.Ze=new ke(le)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}ot(e){const t=e.targetId,r=e.Ce.count,i=this._t(t);if(i){const o=i.target;if(jc(o))if(r===0){const c=new Y(o.path);this.tt(t,c,ot.newNoDocument(c,ne.min()))}else ye(r===1,20013,{expectedCount:r});else{const c=this.ut(t);if(c!==r){const u=this.ct(e),d=u?this.lt(u,e,c):1;if(d!==0){this.st(t);const m=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,m)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let c,u;try{c=_r(r).toUint8Array()}catch(d){if(d instanceof Jd)return Fi("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{u=new pl(c,i,o)}catch(d){return Fi(d instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return u.pe===0?null:u}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const c=this.ze.Pt(),u=`projects/${c.projectId}/databases/${c.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.tt(t,o,null),i++)}),i}It(e){const t=new Map;this.je.forEach((o,c)=>{const u=this._t(c);if(u){if(o.current&&jc(u.target)){const d=new Y(u.target.path);this.Et(d).has(c)||this.dt(c,d)||this.tt(c,d,ot.newNoDocument(d,e))}o.Le&&(t.set(c,o.qe()),o.Qe())}});let r=de();this.Ye.forEach((o,c)=>{let u=!0;c.forEachWhile(d=>{const m=this._t(d);return!m||m.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.He.forEach((o,c)=>c.setReadTime(e));const i=new Ma(e,t,this.Ze,this.He,r);return this.He=Mn(),this.Je=Ho(),this.Ye=Ho(),this.Ze=new ke(le),i}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,t)?i.$e(t,1):i.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new bh,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new qe(le),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new qe(le),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new bh),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Ho(){return new ke(Y.comparator)}function Ah(){return new ke(Y.comparator)}const Ov={asc:"ASCENDING",desc:"DESCENDING"},Dv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nv={and:"AND",or:"OR"};class Vv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hc(n,e){return n.useProto3Json||ka(e)?e:{value:e}}function fa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Lv(n,e){return fa(n,e.toTimestamp())}function ln(n){return ye(!!n,49232),ne.fromTimestamp(function(t){const r=gr(t);return new je(r.seconds,r.nanos)}(n))}function ml(n,e){return zc(n,e).canonicalString()}function zc(n,e){const t=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function kf(n){const e=Re.fromString(n);return ye(Lf(e),10190,{key:e.toString()}),e}function Wc(n,e){return ml(n.databaseId,e.path)}function Ic(n,e){const t=kf(e);if(t.get(1)!==n.databaseId.projectId)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(Df(t))}function Of(n,e){return ml(n.databaseId,e)}function xv(n){const e=kf(n);return e.length===4?Re.emptyPath():Df(e)}function Kc(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Df(n){return ye(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ch(n,e,t){return{name:Wc(n,e),fields:t.value.mapValue.fields}}function Mv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Z(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(m,y){return m.useProto3Json?(ye(y===void 0||typeof y=="string",58123),tt.fromBase64String(y||"")):(ye(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),tt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,u=c&&function(m){const y=m.code===void 0?M.UNKNOWN:Cf(m.code);return new K(y,m.message||"")}(c);t=new Rf(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ic(n,r.document.name),o=ln(r.document.updateTime),c=r.document.createTime?ln(r.document.createTime):ne.min(),u=new xt({mapValue:{fields:r.document.fields}}),d=ot.newFoundDocument(i,o,c,u),m=r.targetIds||[],y=r.removedTargetIds||[];t=new Jo(m,y,d.key,d)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ic(n,r.document),o=r.readTime?ln(r.readTime):ne.min(),c=ot.newNoDocument(i,o),u=r.removedTargetIds||[];t=new Jo([],u,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ic(n,r.document),o=r.removedTargetIds||[];t=new Jo([],o,i,null)}else{if(!("filter"in e))return Z(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,c=new Sv(i,o),u=r.targetId;t=new Sf(u,c)}}return t}function Fv(n,e){let t;if(e instanceof Zs)t={update:Ch(n,e.key,e.value)};else if(e instanceof Af)t={delete:Wc(n,e.key)};else if(e instanceof ri)t={update:Ch(n,e.key,e.data),updateMask:Kv(e.fieldMask)};else{if(!(e instanceof bv))return Z(16599,{ft:e.type});t={verify:Wc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,c){const u=c.transform;if(u instanceof ha)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Gs)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Qs)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof da)return{fieldPath:c.field.canonicalString(),increment:u.Re};throw Z(20930,{transform:c.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Lv(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Z(27497)}(n,e.precondition)),t}function Uv(n,e){return n&&n.length>0?(ye(e!==void 0,14353),n.map(t=>function(i,o){let c=i.updateTime?ln(i.updateTime):ln(o);return c.isEqual(ne.min())&&(c=ln(o)),new wv(c,i.transformResults||[])}(t,e))):[]}function $v(n,e){return{documents:[Of(n,e.path)]}}function Bv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Of(n,i);const o=function(m){if(m.length!==0)return Vf(fn.create(m,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const c=function(m){if(m.length!==0)return m.map(y=>function(A){return{field:Di(A.field),direction:Hv(A.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const u=Hc(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{gt:t,parent:i}}function jv(n){let e=xv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ye(r===1,65062);const y=t.from[0];y.allDescendants?i=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(T){const A=Nf(T);return A instanceof fn&&lf(A)?A.getFilters():[A]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(A=>function(B){return new ua(Ni(B.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(B.direction))}(A))}(t.orderBy));let u=null;t.limit&&(u=function(T){let A;return A=typeof T=="object"?T.value:T,ka(A)?null:A}(t.limit));let d=null;t.startAt&&(d=function(T){const A=!!T.before,N=T.values||[];return new la(N,A)}(t.startAt));let m=null;return t.endAt&&(m=function(T){const A=!T.before,N=T.values||[];return new la(N,A)}(t.endAt)),av(e,i,c,o,u,"F",d,m)}function qv(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ni(t.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ni(t.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ni(t.unaryFilter.field);return Be.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Ni(t.unaryFilter.field);return Be.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(n):n.fieldFilter!==void 0?function(t){return Be.create(Ni(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return fn.create(t.compositeFilter.filters.map(r=>Nf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(t.compositeFilter.op))}(n):Z(30097,{filter:n})}function Hv(n){return Ov[n]}function zv(n){return Dv[n]}function Wv(n){return Nv[n]}function Di(n){return{fieldPath:n.canonicalString()}}function Ni(n){return Ze.fromServerFormat(n.fieldPath)}function Vf(n){return n instanceof Be?function(t){if(t.op==="=="){if(fh(t.value))return{unaryFilter:{field:Di(t.field),op:"IS_NAN"}};if(dh(t.value))return{unaryFilter:{field:Di(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fh(t.value))return{unaryFilter:{field:Di(t.field),op:"IS_NOT_NAN"}};if(dh(t.value))return{unaryFilter:{field:Di(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Di(t.field),op:zv(t.op),value:t.value}}}(n):n instanceof fn?function(t){const r=t.getFilters().map(i=>Vf(i));return r.length===1?r[0]:{compositeFilter:{op:Wv(t.op),filters:r}}}(n):Z(54877,{filter:n})}function Kv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Lf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class lr{constructor(e,t,r,i,o=ne.min(),c=ne.min(),u=tt.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=u,this.expectedCount=d}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Gv{constructor(e){this.wt=e}}function Qv(n){const e=jv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qc(e,e.limit,"L"):e}/**
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
 */class Yv{constructor(){this.Cn=new Xv}addToCollectionParentIndex(e,t){return this.Cn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(mr.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Xv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new qe(Re.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(Re.comparator)).toArray()}}/**
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
 */const Sh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xf=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(xf,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
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
 */const Rh="LruGarbageCollector",Jv=1048576;function Ph([n,e],[t,r]){const i=le(n,t);return i===0?le(e,r):i}class Zv{constructor(e){this.Er=e,this.buffer=new qe(Ph),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ph(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class eE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){q(Rh,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qi(t)?q(Rh,"Ignoring IndexedDB error during garbage collection: ",t):await Gi(t)}await this.mr(3e5)})}}class tE{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Pa.le);const r=new Zv(t);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Sh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sh):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,i,o,c,u,d,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,c=Date.now(),this.nthSequenceNumber(e,i))).next(T=>(r=T,u=Date.now(),this.removeTargets(e,r,t))).next(T=>(o=T,d=Date.now(),this.removeOrphanedDocuments(e,r))).next(T=>(m=Date.now(),ki()<=he.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${i} in `+(u-c)+`ms
	Removed ${o} targets in `+(d-u)+`ms
	Removed ${T} documents in `+(m-d)+`ms
Total Duration: ${m-y}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T})))}}function nE(n,e){return new tE(n,e)}/**
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
 */class rE{constructor(){this.changes=new ni(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class sE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&$s(r.mutation,i,Kt.empty(),je.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,t,r=de()){const i=qr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let c=Ns();return o.forEach((u,d)=>{c=c.insert(u,d.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const r=qr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,de()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((c,u)=>{t.set(c,u)})})}computeViews(e,t,r,i){let o=Mn();const c=Us(),u=function(){return Us()}();return t.forEach((d,m)=>{const y=r.get(m.key);i.has(m.key)&&(y===void 0||y.mutation instanceof ri)?o=o.insert(m.key,m):y!==void 0?(c.set(m.key,y.mutation.getFieldMask()),$s(y.mutation,m,y.mutation.getFieldMask(),je.now())):c.set(m.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,o).next(d=>(d.forEach((m,y)=>c.set(m,y)),t.forEach((m,y)=>{var T;return u.set(m,new iE(y,(T=c.get(m))!==null&&T!==void 0?T:null))}),u))}recalculateAndSaveOverlays(e,t){const r=Us();let i=new ke((c,u)=>c-u),o=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const u of c)u.keys().forEach(d=>{const m=t.get(d);if(m===null)return;let y=r.get(d)||Kt.empty();y=u.applyToLocalView(m,y),r.set(d,y);const T=(i.get(u.batchId)||de()).add(d);i=i.insert(u.batchId,T)})}).next(()=>{const c=[],u=i.getReverseIterator();for(;u.hasNext();){const d=u.getNext(),m=d.key,y=d.value,T=_f();y.forEach(A=>{if(!o.has(A)){const N=If(t.get(A),r.get(A));N!==null&&T.set(A,N),o=o.add(A)}}),c.push(this.documentOverlayCache.saveOverlays(e,m,T))}return V.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(c){return Y.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const c=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):V.resolve(qr());let u=Hs,d=o;return c.next(m=>V.forEach(m,(y,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(y)?V.resolve():this.remoteDocumentCache.getEntry(e,y).next(A=>{d=d.insert(y,A)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,d,m,de())).next(y=>({batchId:u,changes:gf(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(r=>{let i=Ns();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let c=Ns();return this.indexManager.getCollectionParents(e,o).next(u=>V.forEach(u,d=>{const m=function(T,A){return new Da(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,d.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,r,i).next(y=>{y.forEach((T,A)=>{c=c.insert(T,A)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(c=>{o.forEach((d,m)=>{const y=m.getKey();c.get(y)===null&&(c=c.insert(y,ot.newInvalidDocument(y)))});let u=Ns();return c.forEach((d,m)=>{const y=o.get(d);y!==void 0&&$s(y.mutation,m,Kt.empty(),je.now()),Va(t,m)&&(u=u.insert(d,m))}),u})}}/**
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
 */class oE{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return V.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ln(i.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(i){return{name:i.name,query:Qv(i.bundledQuery),readTime:ln(i.readTime)}}(t)),V.resolve()}}/**
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
 */class aE{constructor(){this.overlays=new ke(Y.comparator),this.Qr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=qr();return V.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.St(e,t,o)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const i=qr(),o=t.length+1,c=new Y(t.child("")),u=this.overlays.getIteratorFrom(c);for(;u.hasNext();){const d=u.getNext().value,m=d.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return V.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new ke((m,y)=>m-y);const c=this.overlays.getIterator();for(;c.hasNext();){const m=c.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=o.get(m.largestBatchId);y===null&&(y=qr(),o=o.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const u=qr(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((m,y)=>u.set(m,y)),!(u.size()>=i)););return V.resolve(u)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new Cv(t,r));let o=this.Qr.get(t);o===void 0&&(o=de(),this.Qr.set(t,o)),this.Qr.set(t,o.add(r.key))}}/**
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
 */class cE{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class gl{constructor(){this.$r=new qe(Qe.Ur),this.Kr=new qe(Qe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new Qe(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new Qe(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new Y(new Re([])),r=new Qe(t,e),i=new Qe(t,e+1),o=[];return this.Kr.forEachInRange([r,i],c=>{this.zr(c),o.push(c.key)}),o}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Y(new Re([])),r=new Qe(t,e),i=new Qe(t,e+1);let o=de();return this.Kr.forEachInRange([r,i],c=>{o=o.add(c.key)}),o}containsKey(e){const t=new Qe(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Y.comparator(e.key,t.key)||le(e.Zr,t.Zr)}static Wr(e,t){return le(e.Zr,t.Zr)||Y.comparator(e.key,t.key)}}/**
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
 */class lE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new qe(Qe.Ur)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Av(o,t,r,i);this.mutationQueue.push(c);for(const u of i)this.Xr=this.Xr.add(new Qe(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return V.resolve(c)}lookupMutationBatch(e,t){return V.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ti(r),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?ol:this.nr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Qe(t,0),i=new Qe(t,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,i],c=>{const u=this.ei(c.Zr);o.push(u)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new qe(le);return t.forEach(i=>{const o=new Qe(i,0),c=new Qe(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,c],u=>{r=r.add(u.Zr)})}),V.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;Y.isDocumentKey(o)||(o=o.child(""));const c=new Qe(new Y(o),0);let u=new qe(le);return this.Xr.forEachWhile(d=>{const m=d.key.path;return!!r.isPrefixOf(m)&&(m.length===i&&(u=u.add(d.Zr)),!0)},c),V.resolve(this.ni(u))}ni(e){const t=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ye(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return V.forEach(t.mutations,i=>{const o=new Qe(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new Qe(t,0),i=this.Xr.firstAfterOrEqual(r);return V.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class uE{constructor(e){this.ii=e,this.docs=function(){return new ke(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,c=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(t))}getEntries(e,t){let r=Mn();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():ot.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=Mn();const c=t.path,u=new Y(c.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(u);for(;d.hasNext();){const{key:m,value:{document:y}}=d.getNext();if(!c.isPrefixOf(m.path))break;m.path.length>c.length+1||Uy(Fy(y),r)<=0||(i.has(y.key)||Va(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(e,t,r,i){Z(9500)}si(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new hE(this)}getSize(e){return V.resolve(this.size)}}class hE extends rE{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class dE{constructor(e){this.persistence=e,this.oi=new ni(t=>ll(t),ul),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this._i=0,this.ai=new gl,this.targetCount=0,this.ui=ji.cr()}forEachTarget(e,t){return this.oi.forEach((r,i)=>t(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),V.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ji(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Tr(t),V.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.oi.forEach((c,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.oi.delete(c),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(c=>{o.push(i.markPotentiallyOrphaned(e,c))}),V.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.ai.containsKey(t))}}/**
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
 */class Mf{constructor(e,t){this.ci={},this.overlays={},this.li=new Pa(0),this.hi=!1,this.hi=!0,this.Pi=new cE,this.referenceDelegate=e(this),this.Ti=new dE(this),this.indexManager=new Yv,this.remoteDocumentCache=function(i){return new uE(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Gv(t),this.Ei=new oE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new lE(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const i=new fE(this.li.next());return this.referenceDelegate.di(),r(i).next(o=>this.referenceDelegate.Ai(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ri(e,t){return V.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class fE extends By{constructor(e){super(),this.currentSequenceNumber=e}}class _l{constructor(e){this.persistence=e,this.Vi=new gl,this.mi=null}static fi(e){return new _l(e)}get gi(){if(this.mi)return this.mi;throw Z(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.gi,r=>{const i=Y.fromPath(r);return this.pi(e,i).next(o=>{o||t.removeEntry(i,ne.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return V.or([()=>V.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class pa{constructor(e,t){this.persistence=e,this.yi=new ni(r=>Hy(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=nE(this,t)}static fi(e,t){return new pa(e,t)}di(){}Ai(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}br(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return V.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(o=>o?V.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.si(e,c=>this.Dr(e,c,t).next(u=>{u||(r++,o.removeEntry(c,ne.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),V.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qo(e.data.value)),t}Dr(e,t,r){return V.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.yi.get(t);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class yl{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ds=r,this.As=i}static Rs(e,t){let r=de(),i=de();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new yl(e,t.fromCache,r,i)}}/**
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
 */class pE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mE{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return c_()?8:jy(at())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.ws(e,t).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.bs(e,t,i,r).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new pE;return this.Ss(e,t,c).next(u=>{if(o.result=u,this.fs)return this.Ds(e,t,c,u.size)})}).next(()=>o.result)}Ds(e,t,r,i){return r.documentReadCount<this.gs?(ki()<=he.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Oi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),V.resolve()):(ki()<=he.DEBUG&&q("QueryEngine","Query:",Oi(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(ki()<=he.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Oi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(t))):V.resolve())}ws(e,t){if(_h(t))return V.resolve(null);let r=cn(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=qc(t,null,"F"),r=cn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const c=de(...o);return this.ys.getDocuments(e,c).next(u=>this.indexManager.getMinOffset(e,r).next(d=>{const m=this.vs(t,u);return this.Cs(t,m,c,d.readTime)?this.ws(e,qc(t,null,"F")):this.Fs(e,m,t,d)}))})))}bs(e,t,r,i){return _h(t)||i.isEqual(ne.min())?V.resolve(null):this.ys.getDocuments(e,r).next(o=>{const c=this.vs(t,o);return this.Cs(t,c,r,i)?V.resolve(null):(ki()<=he.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Oi(t)),this.Fs(e,c,t,My(i,Hs)).next(u=>u))})}vs(e,t){let r=new qe(pf(e));return t.forEach((i,o)=>{Va(e,o)&&(r=r.add(o))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(e,t,r){return ki()<=he.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Oi(t)),this.ys.getDocumentsMatchingQuery(e,t,mr.min(),r)}Fs(e,t,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
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
 */const vl="LocalStore",gE=3e8;class _E{constructor(e,t,r,i){this.persistence=e,this.Ms=t,this.serializer=i,this.xs=new ke(le),this.Os=new ni(o=>ll(o),ul),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sE(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function yE(n,e,t,r){return new _E(n,e,t,r)}async function Ff(n,e){const t=se(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const c=[],u=[];let d=de();for(const m of i){c.push(m.batchId);for(const y of m.mutations)d=d.add(y.key)}for(const m of o){u.push(m.batchId);for(const y of m.mutations)d=d.add(y.key)}return t.localDocuments.getDocuments(r,d).next(m=>({ks:m,removedBatchIds:c,addedBatchIds:u}))})})}function vE(n,e){const t=se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.Bs.newChangeBuffer({trackRemovals:!0});return function(u,d,m,y){const T=m.batch,A=T.keys();let N=V.resolve();return A.forEach(B=>{N=N.next(()=>y.getEntry(d,B)).next(W=>{const F=m.docVersions.get(B);ye(F!==null,48541),W.version.compareTo(F)<0&&(T.applyToRemoteDocument(W,m),W.isValidDocument()&&(W.setReadTime(m.commitVersion),y.addEntry(W)))})}),N.next(()=>u.mutationQueue.removeMutationBatch(d,T))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let d=de();for(let m=0;m<u.mutationResults.length;++m)u.mutationResults[m].transformResults.length>0&&(d=d.add(u.batch.mutations[m].key));return d}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Uf(n){const e=se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function EE(n,e){const t=se(n),r=e.snapshotVersion;let i=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});i=t.xs;const u=[];e.targetChanges.forEach((y,T)=>{const A=i.get(T);if(!A)return;u.push(t.Ti.removeMatchingKeys(o,y.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(o,y.addedDocuments,T)));let N=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(tt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):y.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(y.resumeToken,r)),i=i.insert(T,N),function(W,F,ee){return W.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=gE?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(A,N,y)&&u.push(t.Ti.updateTargetData(o,N))});let d=Mn(),m=de();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),u.push(wE(o,c,e.documentUpdates).next(y=>{d=y.qs,m=y.Qs})),!r.isEqual(ne.min())){const y=t.Ti.getLastRemoteSnapshotVersion(o).next(T=>t.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(y)}return V.waitFor(u).next(()=>c.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,d,m)).next(()=>d)}).then(o=>(t.xs=i,o))}function wE(n,e,t){let r=de(),i=de();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let c=Mn();return t.forEach((u,d)=>{const m=o.get(u);d.isFoundDocument()!==m.isFoundDocument()&&(i=i.add(u)),d.isNoDocument()&&d.version.isEqual(ne.min())?(e.removeEntry(u,d.readTime),c=c.insert(u,d)):!m.isValidDocument()||d.version.compareTo(m.version)>0||d.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(d),c=c.insert(u,d)):q(vl,"Ignoring outdated watch update for ",u,". Current version:",m.version," Watch version:",d.version)}),{qs:c,Qs:i}})}function TE(n,e){const t=se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ol),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function IE(n,e){const t=se(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ti.getTargetData(r,e).next(o=>o?(i=o,V.resolve(i)):t.Ti.allocateTargetId(r).next(c=>(i=new lr(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function Gc(n,e,t){const r=se(n),i=r.xs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,c=>r.persistence.referenceDelegate.removeTarget(c,i))}catch(c){if(!Qi(c))throw c;q(vl,`Failed to update sequence numbers for target ${e}: ${c}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function kh(n,e,t){const r=se(n);let i=ne.min(),o=de();return r.persistence.runTransaction("Execute query","readwrite",c=>function(d,m,y){const T=se(d),A=T.Os.get(y);return A!==void 0?V.resolve(T.xs.get(A)):T.Ti.getTargetData(m,y)}(r,c,cn(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(c,u.targetId).next(d=>{o=d})}).next(()=>r.Ms.getDocumentsMatchingQuery(c,e,t?i:ne.min(),t?o:de())).next(u=>(bE(r,uv(e),u),{documents:u,$s:o})))}function bE(n,e,t){let r=n.Ns.get(e)||ne.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(e,r)}class Oh{constructor(){this.activeTargetIds=gv()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AE{constructor(){this.xo=new Oh,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Oh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CE{No(e){}shutdown(){}}/**
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
 */const Dh="ConnectivityMonitor";class Nh{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){q(Dh,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){q(Dh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zo=null;function Qc(){return zo===null?zo=function(){return 268435456+Math.round(2147483648*Math.random())}():zo++,"0x"+zo.toString(16)}/**
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
 */const bc="RestConnection",SE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class RE{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===aa?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,t,r,i,o){const c=Qc(),u=this.jo(e,t.toUriEncodedString());q(bc,`Sending RPC '${e}' ${c}:`,u,r);const d={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(d,i,o);const{host:m}=new URL(u),y=zi(m);return this.Jo(e,u,d,r,y).then(T=>(q(bc,`Received RPC '${e}' ${c}: `,T),T),T=>{throw Fi(bc,`RPC '${e}' ${c} failed with error: `,T,"url: ",u,"request:",r),T})}Yo(e,t,r,i,o,c){return this.zo(e,t,r,i,o)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ki}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}jo(e,t){const r=SE[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class PE{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const it="WebChannelConnection";class kE extends RE{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,o){const c=Qc();return new Promise((u,d)=>{const m=new Bd;m.setWithCredentials(!0),m.listenOnce(jd.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Go.NO_ERROR:const T=m.getResponseJson();q(it,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),u(T);break;case Go.TIMEOUT:q(it,`RPC '${e}' ${c} timed out`),d(new K(M.DEADLINE_EXCEEDED,"Request time out"));break;case Go.HTTP_ERROR:const A=m.getStatus();if(q(it,`RPC '${e}' ${c} failed with status:`,A,"response text:",m.getResponseText()),A>0){let N=m.getResponseJson();Array.isArray(N)&&(N=N[0]);const B=N==null?void 0:N.error;if(B&&B.status&&B.message){const W=function(ee){const G=ee.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(G)>=0?G:M.UNKNOWN}(B.status);d(new K(W,B.message))}else d(new K(M.UNKNOWN,"Server responded with status "+m.getStatus()))}else d(new K(M.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{h_:e,streamId:c,P_:m.getLastErrorCode(),T_:m.getLastError()})}}finally{q(it,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(i);q(it,`RPC '${e}' ${c} sending request:`,i),m.send(t,"POST",y,r,15)})}I_(e,t,r){const i=Qc(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=zd(),u=Hd(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(d.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Ho(d.initMessageHeaders,t,r),d.encodeInitMessageHeaders=!0;const y=o.join("");q(it,`Creating RPC '${e}' stream ${i}: ${y}`,d);const T=c.createWebChannel(y,d);this.E_(T);let A=!1,N=!1;const B=new PE({Zo:F=>{N?q(it,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(A||(q(it,`Opening RPC '${e}' stream ${i} transport.`),T.open(),A=!0),q(it,`RPC '${e}' stream ${i} sending:`,F),T.send(F))},Xo:()=>T.close()}),W=(F,ee,G)=>{F.listen(ee,ce=>{try{G(ce)}catch(be){setTimeout(()=>{throw be},0)}})};return W(T,Ds.EventType.OPEN,()=>{N||(q(it,`RPC '${e}' stream ${i} transport opened.`),B.__())}),W(T,Ds.EventType.CLOSE,()=>{N||(N=!0,q(it,`RPC '${e}' stream ${i} transport closed`),B.u_(),this.d_(T))}),W(T,Ds.EventType.ERROR,F=>{N||(N=!0,Fi(it,`RPC '${e}' stream ${i} transport errored. Name:`,F.name,"Message:",F.message),B.u_(new K(M.UNAVAILABLE,"The operation could not be completed")))}),W(T,Ds.EventType.MESSAGE,F=>{var ee;if(!N){const G=F.data[0];ye(!!G,16349);const ce=G,be=(ce==null?void 0:ce.error)||((ee=ce[0])===null||ee===void 0?void 0:ee.error);if(be){q(it,`RPC '${e}' stream ${i} received error:`,be);const mt=be.status;let Pe=function(w){const I=Me[w];if(I!==void 0)return Cf(I)}(mt),S=be.message;Pe===void 0&&(Pe=M.INTERNAL,S="Unknown error status: "+mt+" with message "+be.message),N=!0,B.u_(new K(Pe,S)),T.close()}else q(it,`RPC '${e}' stream ${i} received:`,G),B.c_(G)}}),W(u,qd.STAT_EVENT,F=>{F.stat===Mc.PROXY?q(it,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===Mc.NOPROXY&&q(it,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{B.a_()},0),B}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function Ac(){return typeof document<"u"?document:null}/**
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
 */function Fa(n){return new Vv(n,!0)}/**
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
 */class $f{constructor(e,t,r=1e3,i=1.5,o=6e4){this.xi=e,this.timerId=t,this.A_=r,this.R_=i,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),i=Math.max(0,t-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Vh="PersistentStream";class Bf{constructor(e,t,r,i,o,c,u,d){this.xi=e,this.S_=r,this.D_=i,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=u,this.listener=d,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new $f(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(xn(t.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.v_===t&&this.z_(r,i)},r=>{e(()=>{const i=new K(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(i)})})}z_(e,t){const r=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.j_(i))}),this.stream.onMessage(i=>{r(()=>++this.M_==1?this.J_(i):this.onNext(i))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return q(Vh,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(q(Vh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OE extends Bf{constructor(e,t,r,i,o,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=o}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=Mv(this.serializer,e),r=function(o){if(!("targetChange"in o))return ne.min();const c=o.targetChange;return c.targetIds&&c.targetIds.length?ne.min():c.readTime?ln(c.readTime):ne.min()}(e);return this.listener.Y_(t,r)}Z_(e){const t={};t.database=Kc(this.serializer),t.addTarget=function(o,c){let u;const d=c.target;if(u=jc(d)?{documents:$v(o,d)}:{query:Bv(o,d).gt},u.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){u.resumeToken=Pf(o,c.resumeToken);const m=Hc(o,c.expectedCount);m!==null&&(u.expectedCount=m)}else if(c.snapshotVersion.compareTo(ne.min())>0){u.readTime=fa(o,c.snapshotVersion.toTimestamp());const m=Hc(o,c.expectedCount);m!==null&&(u.expectedCount=m)}return u}(this.serializer,e);const r=qv(this.serializer,e);r&&(t.labels=r),this.Q_(t)}X_(e){const t={};t.database=Kc(this.serializer),t.removeTarget=e,this.Q_(t)}}class DE extends Bf{constructor(e,t,r,i,o,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=o}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=Uv(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.ra(r,t)}ia(){const e={};e.database=Kc(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Fv(this.serializer,r))};this.Q_(t)}}/**
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
 */class NE{}class VE extends NE{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.zo(e,zc(t,r),i,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(M.UNKNOWN,o.toString())})}Yo(e,t,r,i,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,u])=>this.connection.Yo(e,zc(t,r),i,c,u,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new K(M.UNKNOWN,c.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class LE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(xn(t),this.ua=!1):q("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Kr="RemoteStore";class xE{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(c=>{r.enqueueAndForget(async()=>{ii(this)&&(q(Kr,"Restarting streams for network reachability change."),await async function(d){const m=se(d);m.da.add(4),await to(m),m.Va.set("Unknown"),m.da.delete(4),await Ua(m)}(this))})}),this.Va=new LE(r,i)}}async function Ua(n){if(ii(n))for(const e of n.Aa)await e(!0)}async function to(n){for(const e of n.Aa)await e(!1)}function jf(n,e){const t=se(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Il(t)?Tl(t):Yi(t).N_()&&wl(t,e))}function El(n,e){const t=se(n),r=Yi(t);t.Ea.delete(e),r.N_()&&qf(t,e),t.Ea.size===0&&(r.N_()?r.k_():ii(t)&&t.Va.set("Unknown"))}function wl(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yi(n).Z_(e)}function qf(n,e){n.ma.Ke(e),Yi(n).X_(e)}function Tl(n){n.ma=new kv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Yi(n).start(),n.Va.ca()}function Il(n){return ii(n)&&!Yi(n).O_()&&n.Ea.size>0}function ii(n){return se(n).da.size===0}function Hf(n){n.ma=void 0}async function ME(n){n.Va.set("Online")}async function FE(n){n.Ea.forEach((e,t)=>{wl(n,e)})}async function UE(n,e){Hf(n),Il(n)?(n.Va.Pa(e),Tl(n)):n.Va.set("Unknown")}async function $E(n,e,t){if(n.Va.set("Online"),e instanceof Rf&&e.state===2&&e.cause)try{await async function(i,o){const c=o.cause;for(const u of o.targetIds)i.Ea.has(u)&&(await i.remoteSyncer.rejectListen(u,c),i.Ea.delete(u),i.ma.removeTarget(u))}(n,e)}catch(r){q(Kr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ma(n,r)}else if(e instanceof Jo?n.ma.Xe(e):e instanceof Sf?n.ma.ot(e):n.ma.nt(e),!t.isEqual(ne.min()))try{const r=await Uf(n.localStore);t.compareTo(r)>=0&&await function(o,c){const u=o.ma.It(c);return u.targetChanges.forEach((d,m)=>{if(d.resumeToken.approximateByteSize()>0){const y=o.Ea.get(m);y&&o.Ea.set(m,y.withResumeToken(d.resumeToken,c))}}),u.targetMismatches.forEach((d,m)=>{const y=o.Ea.get(d);if(!y)return;o.Ea.set(d,y.withResumeToken(tt.EMPTY_BYTE_STRING,y.snapshotVersion)),qf(o,d);const T=new lr(y.target,d,m,y.sequenceNumber);wl(o,T)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){q(Kr,"Failed to raise snapshot:",r),await ma(n,r)}}async function ma(n,e,t){if(!Qi(e))throw e;n.da.add(1),await to(n),n.Va.set("Offline"),t||(t=()=>Uf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(Kr,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Ua(n)})}function zf(n,e){return e().catch(t=>ma(n,t,e))}async function $a(n){const e=se(n),t=vr(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:ol;for(;BE(e);)try{const i=await TE(e.localStore,r);if(i===null){e.Ia.length===0&&t.k_();break}r=i.batchId,jE(e,i)}catch(i){await ma(e,i)}Wf(e)&&Kf(e)}function BE(n){return ii(n)&&n.Ia.length<10}function jE(n,e){n.Ia.push(e);const t=vr(n);t.N_()&&t.ea&&t.ta(e.mutations)}function Wf(n){return ii(n)&&!vr(n).O_()&&n.Ia.length>0}function Kf(n){vr(n).start()}async function qE(n){vr(n).ia()}async function HE(n){const e=vr(n);for(const t of n.Ia)e.ta(t.mutations)}async function zE(n,e,t){const r=n.Ia.shift(),i=fl.from(r,e,t);await zf(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await $a(n)}async function WE(n,e){e&&vr(n).ea&&await async function(r,i){if(function(c){return Rv(c)&&c!==M.ABORTED}(i.code)){const o=r.Ia.shift();vr(r).L_(),await zf(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await $a(r)}}(n,e),Wf(n)&&Kf(n)}async function Lh(n,e){const t=se(n);t.asyncQueue.verifyOperationInProgress(),q(Kr,"RemoteStore received new credentials");const r=ii(t);t.da.add(3),await to(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Ua(t)}async function KE(n,e){const t=se(n);e?(t.da.delete(2),await Ua(t)):e||(t.da.add(2),await to(t),t.Va.set("Unknown"))}function Yi(n){return n.fa||(n.fa=function(t,r,i){const o=se(t);return o.oa(),new OE(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:ME.bind(null,n),n_:FE.bind(null,n),i_:UE.bind(null,n),Y_:$E.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),Il(n)?Tl(n):n.Va.set("Unknown")):(await n.fa.stop(),Hf(n))})),n.fa}function vr(n){return n.ga||(n.ga=function(t,r,i){const o=se(t);return o.oa(),new DE(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:qE.bind(null,n),i_:WE.bind(null,n),na:HE.bind(null,n),ra:zE.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await $a(n)):(await n.ga.stop(),n.Ia.length>0&&(q(Kr,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
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
 */class bl{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const c=Date.now()+r,u=new bl(e,t,c,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Al(n,e){if(xn("AsyncQueue",`${e}: ${n}`),Qi(n))return new K(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Vi{static emptySet(e){return new Vi(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=Ns(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class xh{constructor(){this.pa=new ke(Y.comparator)}track(e){const t=e.doc.key,r=this.pa.get(t);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(t,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(t):e.type===1&&r.type===2?this.pa=this.pa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):Z(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,r)=>{e.push(r)}),e}}class qi{constructor(e,t,r,i,o,c,u,d,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=c,this.syncStateChanged=u,this.excludesMetadataChanges=d,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,i,o){const c=[];return t.forEach(u=>{c.push({type:0,doc:u})}),new qi(e,t,Vi.emptySet(t),c,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class GE{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class QE{constructor(){this.queries=Mh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=se(t),o=i.queries;i.queries=Mh(),o.forEach((c,u)=>{for(const d of u.Sa)d.onError(r)})})(this,new K(M.ABORTED,"Firestore shutting down"))}}function Mh(){return new ni(n=>ff(n),Na)}async function Gf(n,e){const t=se(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.Da()&&e.va()&&(r=2):(o=new GE,r=e.va()?0:1);try{switch(r){case 0:o.ba=await t.onListen(i,!0);break;case 1:o.ba=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const u=Al(c,`Initialization of query '${Oi(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.Sa.push(e),e.Fa(t.onlineState),o.ba&&e.Ma(o.ba)&&Cl(t)}async function Qf(n,e){const t=se(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const c=o.Sa.indexOf(e);c>=0&&(o.Sa.splice(c,1),o.Sa.length===0?i=e.va()?0:1:!o.Da()&&e.va()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function YE(n,e){const t=se(n);let r=!1;for(const i of e){const o=i.query,c=t.queries.get(o);if(c){for(const u of c.Sa)u.Ma(i)&&(r=!0);c.ba=i}}r&&Cl(t)}function XE(n,e,t){const r=se(n),i=r.queries.get(e);if(i)for(const o of i.Sa)o.onError(t);r.queries.delete(e)}function Cl(n){n.Ca.forEach(e=>{e.next()})}var Yc,Fh;(Fh=Yc||(Yc={})).xa="default",Fh.Cache="cache";class Yf{constructor(e,t,r){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const r=t!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Yc.Cache}}/**
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
 */class Xf{constructor(e){this.key=e}}class Jf{constructor(e){this.key=e}}class JE{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=de(),this.mutatedKeys=de(),this.Za=pf(e),this.Xa=new Vi(this.Za)}get eu(){return this.Ha}tu(e,t){const r=t?t.nu:new xh,i=t?t.Xa:this.Xa;let o=t?t.mutatedKeys:this.mutatedKeys,c=i,u=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,m=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((y,T)=>{const A=i.get(y),N=Va(this.query,T)?T:null,B=!!A&&this.mutatedKeys.has(A.key),W=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let F=!1;A&&N?A.data.isEqual(N.data)?B!==W&&(r.track({type:3,doc:N}),F=!0):this.ru(A,N)||(r.track({type:2,doc:N}),F=!0,(d&&this.Za(N,d)>0||m&&this.Za(N,m)<0)&&(u=!0)):!A&&N?(r.track({type:0,doc:N}),F=!0):A&&!N&&(r.track({type:1,doc:A}),F=!0,(d||m)&&(u=!0)),F&&(N?(c=c.add(N),o=W?o.add(y):o.delete(y)):(c=c.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),o=o.delete(y.key),r.track({type:1,doc:y})}return{Xa:c,nu:r,Cs:u,mutatedKeys:o}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const c=e.nu.wa();c.sort((y,T)=>function(N,B){const W=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Vt:F})}};return W(N)-W(B)}(y.type,T.type)||this.Za(y.doc,T.doc)),this.iu(r),i=i!=null&&i;const u=t&&!i?this.su():[],d=this.Ya.size===0&&this.current&&!i?1:0,m=d!==this.Ja;return this.Ja=d,c.length!==0||m?{snapshot:new qi(this.query,e.Xa,o,c,e.mutatedKeys,d===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:u}:{ou:u}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new xh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=de(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Jf(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Xf(r))}),t}au(e){this.Ha=e.$s,this.Ya=de();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return qi.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Sl="SyncEngine";class ZE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ew{constructor(e){this.key=e,this.cu=!1}}class tw{constructor(e,t,r,i,o,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.lu={},this.hu=new ni(u=>ff(u),Na),this.Pu=new Map,this.Tu=new Set,this.Iu=new ke(Y.comparator),this.Eu=new Map,this.du=new gl,this.Au={},this.Ru=new Map,this.Vu=ji.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function nw(n,e,t=!0){const r=ip(n);let i;const o=r.hu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.uu()):i=await Zf(r,e,t,!0),i}async function rw(n,e){const t=ip(n);await Zf(t,e,!0,!1)}async function Zf(n,e,t,r){const i=await IE(n.localStore,cn(e)),o=i.targetId,c=n.sharedClientState.addLocalQueryTarget(o,t);let u;return r&&(u=await iw(n,e,o,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&jf(n.remoteStore,i),u}async function iw(n,e,t,r,i){n.fu=(T,A,N)=>async function(W,F,ee,G){let ce=F.view.tu(ee);ce.Cs&&(ce=await kh(W.localStore,F.query,!1).then(({documents:S})=>F.view.tu(S,ce)));const be=G&&G.targetChanges.get(F.targetId),mt=G&&G.targetMismatches.get(F.targetId)!=null,Pe=F.view.applyChanges(ce,W.isPrimaryClient,be,mt);return $h(W,F.targetId,Pe.ou),Pe.snapshot}(n,T,A,N);const o=await kh(n.localStore,e,!0),c=new JE(e,o.$s),u=c.tu(o.documents),d=eo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),m=c.applyChanges(u,n.isPrimaryClient,d);$h(n,t,m.ou);const y=new ZE(e,t,c);return n.hu.set(e,y),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),m.snapshot}async function sw(n,e,t){const r=se(n),i=r.hu.get(e),o=r.Pu.get(i.targetId);if(o.length>1)return r.Pu.set(i.targetId,o.filter(c=>!Na(c,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Gc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&El(r.remoteStore,i.targetId),Xc(r,i.targetId)}).catch(Gi)):(Xc(r,i.targetId),await Gc(r.localStore,i.targetId,!0))}async function ow(n,e){const t=se(n),r=t.hu.get(e),i=t.Pu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),El(t.remoteStore,r.targetId))}async function aw(n,e,t){const r=pw(n);try{const i=await function(c,u){const d=se(c),m=je.now(),y=u.reduce((N,B)=>N.add(B.key),de());let T,A;return d.persistence.runTransaction("Locally write mutations","readwrite",N=>{let B=Mn(),W=de();return d.Bs.getEntries(N,y).next(F=>{B=F,B.forEach((ee,G)=>{G.isValidDocument()||(W=W.add(ee))})}).next(()=>d.localDocuments.getOverlayedDocuments(N,B)).next(F=>{T=F;const ee=[];for(const G of u){const ce=Iv(G,T.get(G.key).overlayedDocument);ce!=null&&ee.push(new ri(G.key,ce,of(ce.value.mapValue),Nn.exists(!0)))}return d.mutationQueue.addMutationBatch(N,m,ee,u)}).next(F=>{A=F;const ee=F.applyToLocalDocumentSet(T,W);return d.documentOverlayCache.saveOverlays(N,F.batchId,ee)})}).then(()=>({batchId:A.batchId,changes:gf(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(c,u,d){let m=c.Au[c.currentUser.toKey()];m||(m=new ke(le)),m=m.insert(u,d),c.Au[c.currentUser.toKey()]=m}(r,i.batchId,t),await no(r,i.changes),await $a(r.remoteStore)}catch(i){const o=Al(i,"Failed to persist write");t.reject(o)}}async function ep(n,e){const t=se(n);try{const r=await EE(t.localStore,e);e.targetChanges.forEach((i,o)=>{const c=t.Eu.get(o);c&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?c.cu=!0:i.modifiedDocuments.size>0?ye(c.cu,14607):i.removedDocuments.size>0&&(ye(c.cu,42227),c.cu=!1))}),await no(t,r,e)}catch(r){await Gi(r)}}function Uh(n,e,t){const r=se(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.hu.forEach((o,c)=>{const u=c.view.Fa(e);u.snapshot&&i.push(u.snapshot)}),function(c,u){const d=se(c);d.onlineState=u;let m=!1;d.queries.forEach((y,T)=>{for(const A of T.Sa)A.Fa(u)&&(m=!0)}),m&&Cl(d)}(r.eventManager,e),i.length&&r.lu.Y_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cw(n,e,t){const r=se(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),o=i&&i.key;if(o){let c=new ke(Y.comparator);c=c.insert(o,ot.newNoDocument(o,ne.min()));const u=de().add(o),d=new Ma(ne.min(),new Map,new ke(le),c,u);await ep(r,d),r.Iu=r.Iu.remove(o),r.Eu.delete(e),Rl(r)}else await Gc(r.localStore,e,!1).then(()=>Xc(r,e,t)).catch(Gi)}async function lw(n,e){const t=se(n),r=e.batch.batchId;try{const i=await vE(t.localStore,e);np(t,r,null),tp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await no(t,i)}catch(i){await Gi(i)}}async function uw(n,e,t){const r=se(n);try{const i=await function(c,u){const d=se(c);return d.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let y;return d.mutationQueue.lookupMutationBatch(m,u).next(T=>(ye(T!==null,37113),y=T.keys(),d.mutationQueue.removeMutationBatch(m,T))).next(()=>d.mutationQueue.performConsistencyCheck(m)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(m,y,u)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y)).next(()=>d.localDocuments.getDocuments(m,y))})}(r.localStore,e);np(r,e,t),tp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await no(r,i)}catch(i){await Gi(i)}}function tp(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function np(n,e,t){const r=se(n);let i=r.Au[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Au[r.currentUser.toKey()]=i}}function Xc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pu.get(e))n.hu.delete(r),t&&n.lu.gu(r,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(r=>{n.du.containsKey(r)||rp(n,r)})}function rp(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(El(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),Rl(n))}function $h(n,e,t){for(const r of t)r instanceof Xf?(n.du.addReference(r.key,e),hw(n,r)):r instanceof Jf?(q(Sl,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,e),n.du.containsKey(r.key)||rp(n,r.key)):Z(19791,{pu:r})}function hw(n,e){const t=e.key,r=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(r)||(q(Sl,"New document in limbo: "+t),n.Tu.add(r),Rl(n))}function Rl(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new Y(Re.fromString(e)),r=n.Vu.next();n.Eu.set(r,new ew(t)),n.Iu=n.Iu.insert(t,r),jf(n.remoteStore,new lr(cn(hl(t.path)),r,"TargetPurposeLimboResolution",Pa.le))}}async function no(n,e,t){const r=se(n),i=[],o=[],c=[];r.hu.isEmpty()||(r.hu.forEach((u,d)=>{c.push(r.fu(d,e,t).then(m=>{var y;if((m||t)&&r.isPrimaryClient){const T=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(d.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(d.targetId,T?"current":"not-current")}if(m){i.push(m);const T=yl.Rs(d.targetId,m);o.push(T)}}))}),await Promise.all(c),r.lu.Y_(i),await async function(d,m){const y=se(d);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>V.forEach(m,A=>V.forEach(A.ds,N=>y.persistence.referenceDelegate.addReference(T,A.targetId,N)).next(()=>V.forEach(A.As,N=>y.persistence.referenceDelegate.removeReference(T,A.targetId,N)))))}catch(T){if(!Qi(T))throw T;q(vl,"Failed to update sequence numbers: "+T)}for(const T of m){const A=T.targetId;if(!T.fromCache){const N=y.xs.get(A),B=N.snapshotVersion,W=N.withLastLimboFreeSnapshotVersion(B);y.xs=y.xs.insert(A,W)}}}(r.localStore,o))}async function dw(n,e){const t=se(n);if(!t.currentUser.isEqual(e)){q(Sl,"User change. New user:",e.toKey());const r=await Ff(t.localStore,e);t.currentUser=e,function(o,c){o.Ru.forEach(u=>{u.forEach(d=>{d.reject(new K(M.CANCELLED,c))})}),o.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await no(t,r.ks)}}function fw(n,e){const t=se(n),r=t.Eu.get(e);if(r&&r.cu)return de().add(r.key);{let i=de();const o=t.Pu.get(e);if(!o)return i;for(const c of o){const u=t.hu.get(c);i=i.unionWith(u.view.eu)}return i}}function ip(n){const e=se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ep.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cw.bind(null,e),e.lu.Y_=YE.bind(null,e.eventManager),e.lu.gu=XE.bind(null,e.eventManager),e}function pw(n){const e=se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uw.bind(null,e),e}class ga{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return yE(this.persistence,new mE,e.initialUser,this.serializer)}Su(e){return new Mf(_l.fi,this.serializer)}bu(e){return new AE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ga.provider={build:()=>new ga};class mw extends ga{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){ye(this.persistence.referenceDelegate instanceof pa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new eE(r,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new Mf(r=>pa.fi(r,t),this.serializer)}}class Jc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dw.bind(null,this.syncEngine),await KE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QE}()}createDatastore(e){const t=Fa(e.databaseInfo.databaseId),r=function(o){return new kE(o)}(e.databaseInfo);return function(o,c,u,d){return new VE(o,c,u,d)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,c,u){return new xE(r,i,o,c,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Uh(this.syncEngine,t,0),function(){return Nh.C()?new Nh:new CE}())}createSyncEngine(e,t){return function(i,o,c,u,d,m,y){const T=new tw(i,o,c,u,d,m);return y&&(T.mu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=se(i);q(Kr,"RemoteStore shutting down."),o.da.add(5),await to(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Jc.provider={build:()=>new Jc};/**
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
 */class sp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Er="FirestoreClient";class gw{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=Qd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async c=>{q(Er,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(q(Er,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Al(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cc(n,e){n.asyncQueue.verifyOperationInProgress(),q(Er,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ff(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Bh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _w(n);q(Er,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Lh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Lh(e.remoteStore,i)),n._onlineComponents=e}async function _w(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(Er,"Using user provided OfflineComponentProvider");try{await Cc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Fi("Error using user provided cache. Falling back to memory cache: "+t),await Cc(n,new ga)}}else q(Er,"Using default OfflineComponentProvider"),await Cc(n,new mw(void 0));return n._offlineComponents}async function op(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(Er,"Using user provided OnlineComponentProvider"),await Bh(n,n._uninitializedComponentsProvider._online)):(q(Er,"Using default OnlineComponentProvider"),await Bh(n,new Jc))),n._onlineComponents}function yw(n){return op(n).then(e=>e.syncEngine)}async function ap(n){const e=await op(n),t=e.eventManager;return t.onListen=nw.bind(null,e.syncEngine),t.onUnlisten=sw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ow.bind(null,e.syncEngine),t}function vw(n,e,t={}){const r=new Dn;return n.asyncQueue.enqueueAndForget(async()=>function(o,c,u,d,m){const y=new sp({next:A=>{y.xu(),c.enqueueAndForget(()=>Qf(o,T));const N=A.docs.has(u);!N&&A.fromCache?m.reject(new K(M.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&A.fromCache&&d&&d.source==="server"?m.reject(new K(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(A)},error:A=>m.reject(A)}),T=new Yf(hl(u.path),y,{includeMetadataChanges:!0,Qa:!0});return Gf(o,T)}(await ap(n),n.asyncQueue,e,t,r)),r.promise}function Ew(n,e,t={}){const r=new Dn;return n.asyncQueue.enqueueAndForget(async()=>function(o,c,u,d,m){const y=new sp({next:A=>{y.xu(),c.enqueueAndForget(()=>Qf(o,T)),A.fromCache&&d.source==="server"?m.reject(new K(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(A)},error:A=>m.reject(A)}),T=new Yf(u,y,{includeMetadataChanges:!0,Qa:!0});return Gf(o,T)}(await ap(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function cp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const jh=new Map;/**
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
 */function lp(n,e,t){if(!t)throw new K(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ww(n,e,t,r){if(e===!0&&r===!0)throw new K(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function qh(n){if(!Y.isDocumentKey(n))throw new K(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Hh(n){if(Y.isDocumentKey(n))throw new K(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Z(12329,{type:typeof n})}function Gr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Pl(n);throw new K(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const up="firestore.googleapis.com",zh=!0;class Wh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=up,this.ssl=zh}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:zh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Jv)throw new K(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ww("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ba{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ry;switch(r.type){case"firstParty":return new Dy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=jh.get(t);r&&(q("ComponentProvider","Removing Datastore"),jh.delete(t),r.terminate())}(this),Promise.resolve()}}function Tw(n,e,t,r={}){var i;n=Gr(n,Ba);const o=zi(e),c=n._getSettings(),u=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;o&&(Pd(`https://${d}`),kd("Firestore",!0)),c.host!==up&&c.host!==d&&Fi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},c),{host:d,ssl:o,emulatorOptions:r});if(!pr(m,u)&&(n._setSettings(m),r.mockUserToken)){let y,T;if(typeof r.mockUserToken=="string")y=r.mockUserToken,T=st.MOCK_USER;else{y=e_(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new K(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new st(A)}n._authCredentials=new Py(new Kd(y,T))}}/**
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
 */class ja{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ja(this.firestore,e,this._query)}}class Ct{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class fr extends ja{constructor(e,t,r){super(e,t,hl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new Y(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function bA(n,e,...t){if(n=et(n),lp("collection","path",e),n instanceof Ba){const r=Re.fromString(e,...t);return Hh(r),new fr(n,null,r)}{if(!(n instanceof Ct||n instanceof fr))throw new K(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Hh(r),new fr(n.firestore,null,r)}}function AA(n,e,...t){if(n=et(n),arguments.length===1&&(e=Qd.newId()),lp("doc","path",e),n instanceof Ba){const r=Re.fromString(e,...t);return qh(r),new Ct(n,null,new Y(r))}{if(!(n instanceof Ct||n instanceof fr))throw new K(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return qh(r),new Ct(n.firestore,n instanceof fr?n.converter:null,new Y(r))}}/**
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
 */const Kh="AsyncQueue";class Gh{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new $f(this,"async_queue_retry"),this.rc=()=>{const r=Ac();r&&q(Kh,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const t=Ac();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Ac();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new Dn;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Qi(e))throw e;q(Kh,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,xn("INTERNAL UNHANDLED ERROR: ",Qh(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=t,t}enqueueAfterDelay(e,t,r){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const i=bl.createAndSchedule(this,e,t,r,o=>this.uc(o));return this.Zu.push(i),i}oc(){this.Xu&&Z(47125,{cc:Qh(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Qh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class qa extends Ba{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Gh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gh(e),this._firestoreClient=void 0,await e}}}function Iw(n,e){const t=typeof n=="object"?n:il(),r=typeof n=="string"?n:aa,i=ei(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Jg("firestore");o&&Tw(i,...o)}return i}function kl(n){if(n._terminated)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bw(n),n._firestoreClient}function bw(n){var e,t,r;const i=n._freezeSettings(),o=function(u,d,m,y){return new Ky(u,d,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,cp(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new gw(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(tt.fromBase64String(e))}catch(t){throw new K(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Hi(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ol{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hp{constructor(e){this._methodName=e}}/**
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
 */class Dl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */class Nl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const Aw=/^__.*__$/;class Cw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ri(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zs(e,this.data,t,this.fieldTransforms)}}function dp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{Ic:n})}}class Vl{constructor(e,t,r,i,o,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ec(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Vl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:r,Rc:!1});return i.Vc(e),i}mc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:r,Rc:!1});return i.Ec(),i}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return _a(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(dp(this.Ic)&&Aw.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class Sw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Fa(e)}bc(e,t,r,i=!1){return new Vl({Ic:e,methodName:t,wc:r,path:Ze.emptyPath(),Rc:!1,yc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rw(n){const e=n._freezeSettings(),t=Fa(n._databaseId);return new Sw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Pw(n,e,t,r,i,o={}){const c=n.bc(o.merge||o.mergeFields?2:0,e,t,i);gp("Data must be an object, but it was:",c,r);const u=pp(r,c);let d,m;if(o.merge)d=new Kt(c.fieldMask),m=c.fieldTransforms;else if(o.mergeFields){const y=[];for(const T of o.mergeFields){const A=kw(e,T,t);if(!c.contains(A))throw new K(M.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Dw(y,A)||y.push(A)}d=new Kt(y),m=c.fieldTransforms.filter(T=>d.covers(T.field))}else d=null,m=c.fieldTransforms;return new Cw(new xt(u),d,m)}function fp(n,e){if(mp(n=et(n)))return gp("Unsupported field value:",e,n),pp(n,e);if(n instanceof hp)return function(r,i){if(!dp(i.Ic))throw i.gc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,i){const o=[];let c=0;for(const u of r){let d=fp(u,i.fc(c));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),c++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _v(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=je.fromDate(r);return{timestampValue:fa(i.serializer,o)}}if(r instanceof je){const o=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fa(i.serializer,o)}}if(r instanceof Dl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hi)return{bytesValue:Pf(i.serializer,r._byteString)};if(r instanceof Ct){const o=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(o))throw i.gc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ml(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Nl)return function(c,u){return{mapValue:{fields:{[rf]:{stringValue:sf},[ca]:{arrayValue:{values:c.toArray().map(m=>{if(typeof m!="number")throw u.gc("VectorValues must only contain numeric values.");return dl(u.serializer,m)})}}}}}}(r,i);throw i.gc(`Unsupported field value: ${Pl(r)}`)}(n,e)}function pp(n,e){const t={};return Xd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ti(n,(r,i)=>{const o=fp(i,e.Ac(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function mp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof je||n instanceof Dl||n instanceof Hi||n instanceof Ct||n instanceof hp||n instanceof Nl)}function gp(n,e,t){if(!mp(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Pl(t);throw r==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+r)}}function kw(n,e,t){if((e=et(e))instanceof Ol)return e._internalPath;if(typeof e=="string")return _p(n,e);throw _a("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ow=new RegExp("[~\\*/\\[\\]]");function _p(n,e,t){if(e.search(Ow)>=0)throw _a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ol(...e.split("."))._internalPath}catch{throw _a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function _a(n,e,t,r,i){const o=r&&!r.isEmpty(),c=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let d="";return(o||c)&&(d+=" (found",o&&(d+=` in field ${r}`),c&&(d+=` in document ${i}`),d+=")"),new K(M.INVALID_ARGUMENT,u+n+d)}function Dw(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class yp{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Nw extends yp{data(){return super.data()}}function vp(n,e){return typeof e=="string"?_p(n,e):e instanceof Ol?e._internalPath:e._delegate._internalPath}/**
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
 */function Vw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lw{convertValue(e,t="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ti(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[ca].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(c=>Le(c.doubleValue));return new Nl(o)}convertGeoPoint(e){return new Dl(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Oa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const t=gr(e);return new je(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);ye(Lf(r),9688,{name:e});const i=new Ws(r.get(1),r.get(3)),o=new Y(r.popFirst(5));return i.isEqual(t)||xn(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function xw(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Ls{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ep extends yp{constructor(e,t,r,i,o,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(vp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Zo extends Ep{data(e={}){return super.data(e)}}class Mw{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ls(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Zo(this._firestore,this._userDataWriter,r.key,r,new Ls(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map(u=>{const d=new Zo(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Ls(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}})}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const d=new Zo(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Ls(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let m=-1,y=-1;return u.type!==0&&(m=c.indexOf(u.doc.key),c=c.delete(u.doc.key)),u.type!==1&&(c=c.add(u.doc),y=c.indexOf(u.doc.key)),{type:Fw(u.type),doc:d,oldIndex:m,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Fw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:n})}}/**
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
 */function CA(n){n=Gr(n,Ct);const e=Gr(n.firestore,qa);return vw(kl(e),n._key).then(t=>$w(e,n,t))}class wp extends Lw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,t)}}function SA(n){n=Gr(n,ja);const e=Gr(n.firestore,qa),t=kl(e),r=new wp(e);return Vw(n._query),Ew(t,n._query).then(i=>new Mw(e,r,n,i))}function RA(n,e,t){n=Gr(n,Ct);const r=Gr(n.firestore,qa),i=xw(n.converter,e);return Uw(r,[Pw(Rw(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Nn.none())])}function Uw(n,e){return function(r,i){const o=new Dn;return r.asyncQueue.enqueueAndForget(async()=>aw(await yw(r),i,o)),o.promise}(kl(n),e)}function $w(n,e,t){const r=t.docs.get(e._key),i=new wp(n);return new Ep(n,i,e._key,r,new Ls(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Ki=i})(Wi),hn(new Yt("firestore",(r,{instanceIdentifier:i,options:o})=>{const c=r.getProvider("app").getImmediate(),u=new qa(new ky(r.getProvider("auth-internal")),new Ny(c,r.getProvider("app-check-internal")),function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new K(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ws(m.options.projectId,y)}(c,i),c);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Mt(eh,th,e),Mt(eh,th,"esm2017")})();var Bw="firebase",jw="11.9.1";/**
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
 */Mt(Bw,jw,"app");function Ll(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Tp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qw=Tp,Ip=new Zr("auth","Firebase",Tp());/**
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
 */const ya=new Ra("@firebase/auth");function Hw(n,...e){ya.logLevel<=he.WARN&&ya.warn(`Auth (${Wi}): ${n}`,...e)}function ea(n,...e){ya.logLevel<=he.ERROR&&ya.error(`Auth (${Wi}): ${n}`,...e)}/**
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
 */function Ft(n,...e){throw Ml(n,...e)}function Qt(n,...e){return Ml(n,...e)}function xl(n,e,t){const r=Object.assign(Object.assign({},qw()),{[e]:t});return new Zr("auth","Firebase",r).create(e,{appName:n.name})}function Vn(n){return xl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zw(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ft(n,"argument-error"),xl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ml(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ip.create(n,...e)}function J(n,e,...t){if(!n)throw Ml(e,...t)}function kn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ea(e),new Error(e)}function Fn(n,e){n||kn(e)}/**
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
 */function Zc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ww(){return Yh()==="http:"||Yh()==="https:"}function Yh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Kw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ww()||Od()||"connection"in navigator)?navigator.onLine:!0}function Gw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ro{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fn(t>e,"Short delay should be less than long delay!"),this.isMobile=r_()||o_()}get(){return Kw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fl(n,e){Fn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class bp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Qw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Yw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Xw=new ro(3e4,6e4);function pn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function mn(n,e,t,r,i={}){return Ap(n,i,async()=>{let o={},c={};r&&(e==="GET"?c=r:o={body:JSON.stringify(r)});const u=Js(Object.assign({key:n.config.apiKey},c)).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:d},o);return s_()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&zi(n.emulatorConfig.host)&&(m.credentials="include"),bp.fetch()(await Cp(n,n.config.apiHost,t,u),m)})}async function Ap(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qw),e);try{const i=new Zw(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await o.json();if("needConfirmation"in c)throw Wo(n,"account-exists-with-different-credential",c);if(o.ok&&!("errorMessage"in c))return c;{const u=o.ok?c.errorMessage:c.error.message,[d,m]=u.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wo(n,"credential-already-in-use",c);if(d==="EMAIL_EXISTS")throw Wo(n,"email-already-in-use",c);if(d==="USER_DISABLED")throw Wo(n,"user-disabled",c);const y=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw xl(n,y,m);Ft(n,y)}}catch(i){if(i instanceof Xt)throw i;Ft(n,"network-request-failed",{message:String(i)})}}async function io(n,e,t,r,i={}){const o=await mn(n,e,t,r,i);return"mfaPendingCredential"in o&&Ft(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Cp(n,e,t,r){const i=`${e}${t}?${r}`,o=n,c=o.config.emulator?Fl(n.config,i):`${n.config.apiScheme}://${i}`;return Yw.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(c).toString():c}function Jw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),Xw.get())})}}function Wo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Qt(n,e,r);return i.customData._tokenResponse=t,i}function Xh(n){return n!==void 0&&n.enterprise!==void 0}class eT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Jw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tT(n,e){return mn(n,"GET","/v2/recaptchaConfig",pn(n,e))}/**
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
 */async function nT(n,e){return mn(n,"POST","/v1/accounts:delete",e)}async function va(n,e){return mn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rT(n,e=!1){const t=et(n),r=await t.getIdToken(e),i=Ul(r);J(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,c=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Bs(Sc(i.auth_time)),issuedAtTime:Bs(Sc(i.iat)),expirationTime:Bs(Sc(i.exp)),signInProvider:c||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Sc(n){return Number(n)*1e3}function Ul(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ad(t);return i?JSON.parse(i):(ea("Failed to decode base64 JWT payload"),null)}catch(i){return ea("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jh(n){const e=Ul(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ys(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Xt&&iT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function iT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class sT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class el{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bs(this.lastLoginAt),this.creationTime=Bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ea(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Ys(n,va(t,{idToken:r}));J(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const c=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Sp(o.providerUserInfo):[],u=aT(n.providerData,c),d=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),y=d?m:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new el(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,T)}async function oT(n){const e=et(n);await Ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aT(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Sp(n){return n.map(e=>{var{providerId:t}=e,r=Ll(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cT(n,e){const t=await Ap(n,{},async()=>{const r=Js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,c=await Cp(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:u,body:r};return n.emulatorConfig&&zi(n.emulatorConfig.host)&&(d.credentials="include"),bp.fetch()(c,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lT(n,e){return mn(n,"POST","/v2/accounts:revokeToken",pn(n,e))}/**
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
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=Jh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await cT(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,c=new Li;return r&&(J(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),o&&(J(typeof o=="number","internal-error",{appName:e}),c.expirationTime=o),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
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
 */function ir(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Ll(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new el(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rT(this,e)}reload(){return oT(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await Ys(this,nT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,c,u,d,m,y;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(i=t.email)!==null&&i!==void 0?i:void 0,N=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,B=(c=t.photoURL)!==null&&c!==void 0?c:void 0,W=(u=t.tenantId)!==null&&u!==void 0?u:void 0,F=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,ee=(m=t.createdAt)!==null&&m!==void 0?m:void 0,G=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ce,emailVerified:be,isAnonymous:mt,providerData:Pe,stsTokenManager:S}=t;J(ce&&S,e,"internal-error");const v=Li.fromJSON(this.name,S);J(typeof ce=="string",e,"internal-error"),ir(T,e.name),ir(A,e.name),J(typeof be=="boolean",e,"internal-error"),J(typeof mt=="boolean",e,"internal-error"),ir(N,e.name),ir(B,e.name),ir(W,e.name),ir(F,e.name),ir(ee,e.name),ir(G,e.name);const w=new Gt({uid:ce,auth:e,email:A,emailVerified:be,displayName:T,isAnonymous:mt,photoURL:B,phoneNumber:N,tenantId:W,stsTokenManager:v,createdAt:ee,lastLoginAt:G});return Pe&&Array.isArray(Pe)&&(w.providerData=Pe.map(I=>Object.assign({},I))),F&&(w._redirectEventId=F),w}static async _fromIdTokenResponse(e,t,r=!1){const i=new Li;i.updateFromServerResponse(t);const o=new Gt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ea(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];J(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Sp(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new Li;u.updateFromIdToken(r);const d=new Gt({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:c}),m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new el(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(d,m),d}}/**
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
 */const Zh=new Map;function On(n){Fn(n instanceof Function,"Expected a class definition");let e=Zh.get(n);return e?(Fn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Zh.set(n,e),e)}/**
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
 */class Rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rp.type="NONE";const ed=Rp;/**
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
 */function ta(n,e,t){return`firebase:${n}:${e}:${t}`}class xi{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=ta(this.userKey,i.apiKey,o),this.fullPersistenceKey=ta("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await va(this.auth,{idToken:e}).catch(()=>{});return t?Gt._fromGetAccountInfoResponse(this.auth,t,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new xi(On(ed),e,r);const i=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let o=i[0]||On(ed);const c=ta(r,e.config.apiKey,e.name);let u=null;for(const m of t)try{const y=await m._get(c);if(y){let T;if(typeof y=="string"){const A=await va(e,{idToken:y}).catch(()=>{});if(!A)break;T=await Gt._fromGetAccountInfoResponse(e,A,y)}else T=Gt._fromJSON(e,y);m!==o&&(u=T),o=m;break}}catch{}const d=i.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new xi(o,e,r):(o=d[0],u&&await o._set(c,u.toJSON()),await Promise.all(t.map(async m=>{if(m!==o)try{await m._remove(c)}catch{}})),new xi(o,e,r))}}/**
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
 */function td(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vp(e))return"Blackberry";if(Lp(e))return"Webos";if(kp(e))return"Safari";if((e.includes("chrome/")||Op(e))&&!e.includes("edge/"))return"Chrome";if(Np(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pp(n=at()){return/firefox\//i.test(n)}function kp(n=at()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Op(n=at()){return/crios\//i.test(n)}function Dp(n=at()){return/iemobile/i.test(n)}function Np(n=at()){return/android/i.test(n)}function Vp(n=at()){return/blackberry/i.test(n)}function Lp(n=at()){return/webos/i.test(n)}function $l(n=at()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function uT(n=at()){var e;return $l(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hT(){return a_()&&document.documentMode===10}function xp(n=at()){return $l(n)||Np(n)||Lp(n)||Vp(n)||/windows phone/i.test(n)||Dp(n)}/**
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
 */function Mp(n,e=[]){let t;switch(n){case"Browser":t=td(at());break;case"Worker":t=`${td(at())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wi}/${r}`}/**
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
 */class dT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((c,u)=>{try{const d=e(o);c(d)}catch(d){u(d)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function fT(n,e={}){return mn(n,"GET","/v2/passwordPolicy",pn(n,e))}/**
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
 */const pT=6;class mT{constructor(e){var t,r,i,o;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:pT,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,c,u;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(t=d.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(o=d.containsUppercaseLetter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(c=d.containsNumericCharacter)!==null&&c!==void 0?c:!0),d.isValid&&(d.isValid=(u=d.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),d}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class gT{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nd(this),this.idTokenSubscription=new nd(this),this.beforeStateQueue=new dT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ip,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=On(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await xi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await va(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(At(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(e);(!c||c===u)&&(d!=null&&d.user)&&(i=d.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ea(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(Vn(this));const t=e?et(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fT(this),t=new mT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await lT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&On(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await xi.create(this,[On(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let c=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(u,this,"internal-error"),u.then(()=>{c||o(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,r,i);return()=>{c=!0,d()}}else{const d=e.addObserver(t);return()=>{c=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Hw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Un(n){return et(n)}class nd{constructor(e){this.auth=e,this.observer=null,this.addObserver=p_(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ha={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _T(n){Ha=n}function Fp(n){return Ha.loadJS(n)}function yT(){return Ha.recaptchaEnterpriseScript}function vT(){return Ha.gapiScript}function ET(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class wT{constructor(){this.enterprise=new TT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class TT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const IT="recaptcha-enterprise",Up="NO_RECAPTCHA";class bT{constructor(e){this.type=IT,this.auth=Un(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(c,u)=>{tT(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const m=new eT(d);return o.tenantId==null?o._agentRecaptchaConfig=m:o._tenantRecaptchaConfigs[o.tenantId]=m,c(m.siteKey)}}).catch(d=>{u(d)})})}function i(o,c,u){const d=window.grecaptcha;Xh(d)?d.enterprise.ready(()=>{d.enterprise.execute(o,{action:e}).then(m=>{c(m)}).catch(()=>{c(Up)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wT().execute("siteKey",{action:"verify"}):new Promise((o,c)=>{r(this.auth).then(u=>{if(!t&&Xh(window.grecaptcha))i(u,o,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let d=yT();d.length!==0&&(d+=u),Fp(d).then(()=>{i(u,o,c)}).catch(m=>{c(m)})}}).catch(u=>{c(u)})})}}async function rd(n,e,t,r=!1,i=!1){const o=new bT(n);let c;if(i)c=Up;else try{c=await o.verify(t)}catch{c=await o.verify(t,!0)}const u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const d=u.phoneEnrollmentInfo.phoneNumber,m=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const d=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:c}):Object.assign(u,{captchaResponse:c}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function wa(n,e,t,r,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await rd(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await rd(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(c)})}/**
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
 */function AT(n,e){const t=ei(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(pr(o,e??{}))return i;Ft(i,"already-initialized")}return t.initialize({options:e})}function CT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(On);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ST(n,e,t){const r=Un(n);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=$p(e),{host:c,port:u}=RT(e),d=u===null?"":`:${u}`,m={url:`${o}//${c}${d}/`},y=Object.freeze({host:c,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(pr(m,r.config.emulator)&&pr(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,zi(c)?(Pd(`${o}//${c}${d}`),kd("Auth",!0)):PT()}function $p(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function RT(n){const e=$p(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:id(r.substr(o.length+1))}}else{const[o,c]=r.split(":");return{host:o,port:id(c)}}}function id(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function PT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Bl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,t){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
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
 */async function kT(n,e){return mn(n,"POST","/v1/accounts:resetPassword",pn(n,e))}async function OT(n,e){return mn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function DT(n,e){return io(n,"POST","/v1/accounts:signInWithPassword",pn(n,e))}async function NT(n,e){return mn(n,"POST","/v1/accounts:sendOobCode",pn(n,e))}async function VT(n,e){return NT(n,e)}/**
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
 */async function LT(n,e){return io(n,"POST","/v1/accounts:signInWithEmailLink",pn(n,e))}async function xT(n,e){return io(n,"POST","/v1/accounts:signInWithEmailLink",pn(n,e))}/**
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
 */class Xs extends Bl{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Xs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Xs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wa(e,t,"signInWithPassword",DT);case"emailLink":return LT(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wa(e,r,"signUpPassword",OT);case"emailLink":return xT(e,{idToken:t,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Mi(n,e){return io(n,"POST","/v1/accounts:signInWithIdp",pn(n,e))}/**
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
 */const MT="http://localhost";class Qr extends Bl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ft("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Ll(t,["providerId","signInMethod"]);if(!r||!i)return null;const c=new Qr(r,i);return c.idToken=o.idToken||void 0,c.accessToken=o.accessToken||void 0,c.secret=o.secret,c.nonce=o.nonce,c.pendingToken=o.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Mi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Mi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mi(e,t)}buildRequest(){const e={requestUri:MT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Js(t)}return e}}/**
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
 */function FT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UT(n){const e=ks(Os(n)).link,t=e?ks(Os(e)).deep_link_id:null,r=ks(Os(n)).deep_link_id;return(r?ks(Os(r)).link:null)||r||t||e||n}class jl{constructor(e){var t,r,i,o,c,u;const d=ks(Os(e)),m=(t=d.apiKey)!==null&&t!==void 0?t:null,y=(r=d.oobCode)!==null&&r!==void 0?r:null,T=FT((i=d.mode)!==null&&i!==void 0?i:null);J(m&&y&&T,"argument-error"),this.apiKey=m,this.operation=T,this.code=y,this.continueUrl=(o=d.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(c=d.lang)!==null&&c!==void 0?c:null,this.tenantId=(u=d.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=UT(e);try{return new jl(t)}catch{return null}}}/**
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
 */class Xi{constructor(){this.providerId=Xi.PROVIDER_ID}static credential(e,t){return Xs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=jl.parseLink(t);return J(r,"argument-error"),Xs._fromEmailAndCode(e,r.code,r.tenantId)}}Xi.PROVIDER_ID="password";Xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ql{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class so extends ql{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends so{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class or extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return or.credential(t,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
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
 */class ar extends so{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */class cr extends so{constructor(){super("twitter.com")}static credential(e,t){return Qr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return cr.credential(t,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
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
 */async function $T(n,e){return io(n,"POST","/v1/accounts:signUp",pn(n,e))}/**
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
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Gt._fromIdTokenResponse(e,r,i),c=sd(r);return new Yr({user:o,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=sd(r);return new Yr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function sd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ta extends Xt{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ta.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ta(e,t,r,i)}}function Bp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ta._fromErrorAndOperation(n,o,e,r):o})}async function BT(n,e,t=!1){const r=await Ys(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yr._forOperation(n,"link",r)}/**
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
 */async function jT(n,e,t=!1){const{auth:r}=n;if(At(r.app))return Promise.reject(Vn(r));const i="reauthenticate";try{const o=await Ys(n,Bp(r,i,e,n),t);J(o.idToken,r,"internal-error");const c=Ul(o.idToken);J(c,r,"internal-error");const{sub:u}=c;return J(n.uid===u,r,"user-mismatch"),Yr._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),o}}/**
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
 */async function jp(n,e,t=!1){if(At(n.app))return Promise.reject(Vn(n));const r="signIn",i=await Bp(n,r,e),o=await Yr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function qT(n,e){return jp(Un(n),e)}/**
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
 */async function Hl(n){const e=Un(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PA(n,e,t){const r=Un(n);await wa(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",VT)}async function kA(n,e,t){await kT(et(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hl(n),r})}async function OA(n,e,t){if(At(n.app))return Promise.reject(Vn(n));const r=Un(n),c=await wa(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$T).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Hl(n),d}),u=await Yr._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(u.user),u}function DA(n,e,t){return At(n.app)?Promise.reject(Vn(n)):qT(et(n),Xi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hl(n),r})}function HT(n,e,t,r){return et(n).onIdTokenChanged(e,t,r)}function zT(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function NA(n,e,t,r){return et(n).onAuthStateChanged(e,t,r)}function VA(n){return et(n).signOut()}const Ia="__sak";/**
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
 */class qp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ia,"1"),this.storage.removeItem(Ia),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const WT=1e3,KT=10;class Hp extends qp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,u,d)=>{this.notifyListeners(c,d)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},o=this.storage.getItem(r);hT()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KT):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},WT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hp.type="LOCAL";const GT=Hp;/**
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
 */class zp extends qp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zp.type="SESSION";const Wp=zp;/**
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
 */function QT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class za{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new za(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,c=this.handlersMap[i];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(c).map(async m=>m(t.origin,o)),d=await QT(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}za.receivers=[];/**
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
 */function zl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class YT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,c;return new Promise((u,d)=>{const m=zl("",20);i.port1.start();const y=setTimeout(()=>{d(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(T){const A=T;if(A.data.eventId===m)switch(A.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(A.data.response);break;default:clearTimeout(y),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function un(){return window}function XT(n){un().location.href=n}/**
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
 */function Kp(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function JT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function eI(){return Kp()?self:null}/**
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
 */const Gp="firebaseLocalStorageDb",tI=1,ba="firebaseLocalStorage",Qp="fbase_key";class oo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wa(n,e){return n.transaction([ba],e?"readwrite":"readonly").objectStore(ba)}function nI(){const n=indexedDB.deleteDatabase(Gp);return new oo(n).toPromise()}function tl(){const n=indexedDB.open(Gp,tI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ba,{keyPath:Qp})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ba)?e(r):(r.close(),await nI(),e(await tl()))})})}async function od(n,e,t){const r=Wa(n,!0).put({[Qp]:e,value:t});return new oo(r).toPromise()}async function rI(n,e){const t=Wa(n,!1).get(e),r=await new oo(t).toPromise();return r===void 0?null:r.value}function ad(n,e){const t=Wa(n,!0).delete(e);return new oo(t).toPromise()}const iI=800,sI=3;class Yp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>sI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=za._getInstance(eI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await JT(),!this.activeServiceWorker)return;this.sender=new YT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tl();return await od(e,Ia,"1"),await ad(e,Ia),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>od(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>rI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ad(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Wa(i,!1).getAll();return new oo(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yp.type="LOCAL";const oI=Yp;new ro(3e4,6e4);/**
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
 */function Xp(n,e){return e?On(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Wl extends Bl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function aI(n){return jp(n.auth,new Wl(n),n.bypassAuthState)}function cI(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),jT(t,new Wl(n),n.bypassAuthState)}async function lI(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),BT(t,new Wl(n),n.bypassAuthState)}/**
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
 */class Jp{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:c,type:u}=e;if(c){this.reject(c);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(d))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aI;case"linkViaPopup":case"linkViaRedirect":return lI;case"reauthViaPopup":case"reauthViaRedirect":return cI;default:Ft(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uI=new ro(2e3,1e4);async function LA(n,e,t){if(At(n.app))return Promise.reject(Qt(n,"operation-not-supported-in-this-environment"));const r=Un(n);zw(n,e,ql);const i=Xp(r,t);return new Hr(r,"signInViaPopup",e,i).executeNotNull()}class Hr extends Jp{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=zl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uI.get())};e()}}Hr.currentPopupAction=null;/**
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
 */const hI="pendingRedirect",na=new Map;class dI extends Jp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const r=await fI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fI(n,e){const t=gI(e),r=mI(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function pI(n,e){na.set(n._key(),e)}function mI(n){return On(n._redirectPersistence)}function gI(n){return ta(hI,n.config.apiKey,n.name)}async function _I(n,e,t=!1){if(At(n.app))return Promise.reject(Vn(n));const r=Un(n),i=Xp(r,e),c=await new dI(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
 */const yI=10*60*1e3;class vI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Zp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yI&&this.cachedEventUids.clear(),this.cachedEventUids.has(cd(e))}saveEventToCache(e){this.cachedEventUids.add(cd(e)),this.lastProcessedEventTime=Date.now()}}function cd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Zp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zp(n);default:return!1}}/**
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
 */async function wI(n,e={}){return mn(n,"GET","/v1/projects",e)}/**
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
 */const TI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,II=/^https?/;async function bI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wI(n);for(const t of e)try{if(AI(t))return}catch{}Ft(n,"unauthorized-domain")}function AI(n){const e=Zc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!II.test(t))return!1;if(TI.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const CI=new ro(3e4,6e4);function ld(){const n=un().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function SI(n){return new Promise((e,t)=>{var r,i,o;function c(){ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ld(),t(Qt(n,"network-request-failed"))},timeout:CI.get()})}if(!((i=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=un().gapi)===null||o===void 0)&&o.load)c();else{const u=ET("iframefcb");return un()[u]=()=>{gapi.load?c():t(Qt(n,"network-request-failed"))},Fp(`${vT()}?onload=${u}`).catch(d=>t(d))}}).catch(e=>{throw ra=null,e})}let ra=null;function RI(n){return ra=ra||SI(n),ra}/**
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
 */const PI=new ro(5e3,15e3),kI="__/auth/iframe",OI="emulator/auth/iframe",DI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VI(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Fl(e,OI):`https://${n.config.authDomain}/${kI}`,r={apiKey:e.apiKey,appName:n.name,v:Wi},i=NI.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Js(r).slice(1)}`}async function LI(n){const e=await RI(n),t=un().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:VI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DI,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const c=Qt(n,"network-request-failed"),u=un().setTimeout(()=>{o(c)},PI.get());function d(){un().clearTimeout(u),i(r)}r.ping(d).then(d,()=>{o(c)})}))}/**
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
 */const xI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MI=500,FI=600,UI="_blank",$I="http://localhost";class ud{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BI(n,e,t,r=MI,i=FI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const d=Object.assign(Object.assign({},xI),{width:r.toString(),height:i.toString(),top:o,left:c}),m=at().toLowerCase();t&&(u=Op(m)?UI:t),Pp(m)&&(e=e||$I,d.scrollbars="yes");const y=Object.entries(d).reduce((A,[N,B])=>`${A}${N}=${B},`,"");if(uT(m)&&u!=="_self")return jI(e||"",u),new ud(null);const T=window.open(e||"",u,y);J(T,n,"popup-blocked");try{T.focus()}catch{}return new ud(T)}function jI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const qI="__/auth/handler",HI="emulator/auth/handler",zI=encodeURIComponent("fac");async function hd(n,e,t,r,i,o){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Wi,eventId:i};if(e instanceof ql){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",f_(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof so){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const u=c;for(const y of Object.keys(u))u[y]===void 0&&delete u[y];const d=await n._getAppCheckToken(),m=d?`#${zI}=${encodeURIComponent(d)}`:"";return`${WI(n)}?${Js(u).slice(1)}${m}`}function WI({config:n}){return n.emulator?Fl(n,HI):`https://${n.authDomain}/${qI}`}/**
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
 */const Rc="webStorageSupport";class KI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wp,this._completeRedirectFn=_I,this._overrideRedirectResult=pI}async _openPopup(e,t,r,i){var o;Fn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const c=await hd(e,t,r,Zc(),i);return BI(e,c,zl())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await hd(e,t,r,Zc(),i);return XT(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Fn(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await LI(e),r=new vI(e);return t.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Rc,{type:Rc},i=>{var o;const c=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Rc];c!==void 0&&t(!!c),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xp()||kp()||$l()}}const GI=KI;var dd="@firebase/auth",fd="1.10.7";/**
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
 */class QI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XI(n){hn(new Yt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:c,authDomain:u}=r.options;J(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:c,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mp(n)},m=new gT(r,i,o,d);return CT(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),hn(new Yt("auth-internal",e=>{const t=Un(e.getProvider("auth").getImmediate());return(r=>new QI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(dd,fd,YI(n)),Mt(dd,fd,"esm2017")}/**
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
 */const JI=5*60,ZI=Rd("authIdTokenMaxAge")||JI;let pd=null;const eb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ZI)return;const i=t==null?void 0:t.token;pd!==i&&(pd=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tb(n=il()){const e=ei(n,"auth");if(e.isInitialized())return e.getImmediate();const t=AT(n,{popupRedirectResolver:GI,persistence:[oI,GT,Wp]}),r=Rd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const c=eb(o.toString());zT(t,c,()=>c(t.currentUser)),HT(t,u=>c(u))}}const i=Cd("auth");return i&&ST(t,`http://${i}`),t}function nb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}_T({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Qt("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",nb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XI("Browser");const em="@firebase/installations",Kl="0.6.17";/**
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
 */const tm=1e4,nm=`w:${Kl}`,rm="FIS_v2",rb="https://firebaseinstallations.googleapis.com/v1",ib=60*60*1e3,sb="installations",ob="Installations";/**
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
 */const ab={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xr=new Zr(sb,ob,ab);function im(n){return n instanceof Xt&&n.code.includes("request-failed")}/**
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
 */function sm({projectId:n}){return`${rb}/projects/${n}/installations`}function om(n){return{token:n.token,requestStatus:2,expiresIn:lb(n.expiresIn),creationTime:Date.now()}}async function am(n,e){const r=(await e.json()).error;return Xr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function cm({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function cb(n,{refreshToken:e}){const t=cm(n);return t.append("Authorization",ub(e)),t}async function lm(n){const e=await n();return e.status>=500&&e.status<600?n():e}function lb(n){return Number(n.replace("s","000"))}function ub(n){return`${rm} ${n}`}/**
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
 */async function hb({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=sm(n),i=cm(n),o=e.getImmediate({optional:!0});if(o){const m=await o.getHeartbeatsHeader();m&&i.append("x-firebase-client",m)}const c={fid:t,authVersion:rm,appId:n.appId,sdkVersion:nm},u={method:"POST",headers:i,body:JSON.stringify(c)},d=await lm(()=>fetch(r,u));if(d.ok){const m=await d.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:om(m.authToken)}}else throw await am("Create Installation",d)}/**
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
 */function um(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function db(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fb=/^[cdef][\w-]{21}$/,nl="";function pb(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=mb(n);return fb.test(t)?t:nl}catch{return nl}}function mb(n){return db(n).substr(0,22)}/**
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
 */function Ka(n){return`${n.appName}!${n.appId}`}/**
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
 */const hm=new Map;function dm(n,e){const t=Ka(n);fm(t,e),gb(t,e)}function fm(n,e){const t=hm.get(n);if(t)for(const r of t)r(e)}function gb(n,e){const t=_b();t&&t.postMessage({key:n,fid:e}),yb()}let zr=null;function _b(){return!zr&&"BroadcastChannel"in self&&(zr=new BroadcastChannel("[Firebase] FID Change"),zr.onmessage=n=>{fm(n.data.key,n.data.fid)}),zr}function yb(){hm.size===0&&zr&&(zr.close(),zr=null)}/**
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
 */const vb="firebase-installations-database",Eb=1,Jr="firebase-installations-store";let Pc=null;function Gl(){return Pc||(Pc=xd(vb,Eb,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Jr)}}})),Pc}async function Aa(n,e){const t=Ka(n),i=(await Gl()).transaction(Jr,"readwrite"),o=i.objectStore(Jr),c=await o.get(t);return await o.put(e,t),await i.done,(!c||c.fid!==e.fid)&&dm(n,e.fid),e}async function pm(n){const e=Ka(n),r=(await Gl()).transaction(Jr,"readwrite");await r.objectStore(Jr).delete(e),await r.done}async function Ga(n,e){const t=Ka(n),i=(await Gl()).transaction(Jr,"readwrite"),o=i.objectStore(Jr),c=await o.get(t),u=e(c);return u===void 0?await o.delete(t):await o.put(u,t),await i.done,u&&(!c||c.fid!==u.fid)&&dm(n,u.fid),u}/**
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
 */async function Ql(n){let e;const t=await Ga(n.appConfig,r=>{const i=wb(r),o=Tb(n,i);return e=o.registrationPromise,o.installationEntry});return t.fid===nl?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function wb(n){const e=n||{fid:pb(),registrationStatus:0};return mm(e)}function Tb(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Xr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Ib(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bb(n)}:{installationEntry:e}}async function Ib(n,e){try{const t=await hb(n,e);return Aa(n.appConfig,t)}catch(t){throw im(t)&&t.customData.serverCode===409?await pm(n.appConfig):await Aa(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function bb(n){let e=await md(n.appConfig);for(;e.registrationStatus===1;)await um(100),e=await md(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Ql(n);return r||t}return e}function md(n){return Ga(n,e=>{if(!e)throw Xr.create("installation-not-found");return mm(e)})}function mm(n){return Ab(n)?{fid:n.fid,registrationStatus:0}:n}function Ab(n){return n.registrationStatus===1&&n.registrationTime+tm<Date.now()}/**
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
 */async function Cb({appConfig:n,heartbeatServiceProvider:e},t){const r=Sb(n,t),i=cb(n,t),o=e.getImmediate({optional:!0});if(o){const m=await o.getHeartbeatsHeader();m&&i.append("x-firebase-client",m)}const c={installation:{sdkVersion:nm,appId:n.appId}},u={method:"POST",headers:i,body:JSON.stringify(c)},d=await lm(()=>fetch(r,u));if(d.ok){const m=await d.json();return om(m)}else throw await am("Generate Auth Token",d)}function Sb(n,{fid:e}){return`${sm(n)}/${e}/authTokens:generate`}/**
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
 */async function Yl(n,e=!1){let t;const r=await Ga(n.appConfig,o=>{if(!gm(o))throw Xr.create("not-registered");const c=o.authToken;if(!e&&kb(c))return o;if(c.requestStatus===1)return t=Rb(n,e),o;{if(!navigator.onLine)throw Xr.create("app-offline");const u=Db(o);return t=Pb(n,u),u}});return t?await t:r.authToken}async function Rb(n,e){let t=await gd(n.appConfig);for(;t.authToken.requestStatus===1;)await um(100),t=await gd(n.appConfig);const r=t.authToken;return r.requestStatus===0?Yl(n,e):r}function gd(n){return Ga(n,e=>{if(!gm(e))throw Xr.create("not-registered");const t=e.authToken;return Nb(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Pb(n,e){try{const t=await Cb(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Aa(n.appConfig,r),t}catch(t){if(im(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await pm(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Aa(n.appConfig,r)}throw t}}function gm(n){return n!==void 0&&n.registrationStatus===2}function kb(n){return n.requestStatus===2&&!Ob(n)}function Ob(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+ib}function Db(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Nb(n){return n.requestStatus===1&&n.requestTime+tm<Date.now()}/**
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
 */async function Vb(n){const e=n,{installationEntry:t,registrationPromise:r}=await Ql(e);return r?r.catch(console.error):Yl(e).catch(console.error),t.fid}/**
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
 */async function Lb(n,e=!1){const t=n;return await xb(t),(await Yl(t,e)).token}async function xb(n){const{registrationPromise:e}=await Ql(n);e&&await e}/**
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
 */function Mb(n){if(!n||!n.options)throw kc("App Configuration");if(!n.name)throw kc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw kc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function kc(n){return Xr.create("missing-app-config-values",{valueName:n})}/**
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
 */const _m="installations",Fb="installations-internal",Ub=n=>{const e=n.getProvider("app").getImmediate(),t=Mb(e),r=ei(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$b=n=>{const e=n.getProvider("app").getImmediate(),t=ei(e,_m).getImmediate();return{getId:()=>Vb(t),getToken:i=>Lb(t,i)}};function Bb(){hn(new Yt(_m,Ub,"PUBLIC")),hn(new Yt(Fb,$b,"PRIVATE"))}Bb();Mt(em,Kl);Mt(em,Kl,"esm2017");/**
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
 */const Ca="analytics",jb="firebase_id",qb="origin",Hb=60*1e3,zb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xl="https://www.googletagmanager.com/gtag/js";/**
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
 */const vt=new Ra("@firebase/analytics");/**
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
 */const Wb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},St=new Zr("analytics","Analytics",Wb);/**
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
 */function Kb(n){if(!n.startsWith(Xl)){const e=St.create("invalid-gtag-resource",{gtagURL:n});return vt.warn(e.message),""}return n}function ym(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Gb(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Qb(n,e){const t=Gb("firebase-js-sdk-policy",{createScriptURL:Kb}),r=document.createElement("script"),i=`${Xl}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Yb(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Xb(n,e,t,r,i,o){const c=r[i];try{if(c)await e[c];else{const d=(await ym(t)).find(m=>m.measurementId===i);d&&await e[d.appId]}}catch(u){vt.error(u)}n("config",i,o)}async function Jb(n,e,t,r,i){try{let o=[];if(i&&i.send_to){let c=i.send_to;Array.isArray(c)||(c=[c]);const u=await ym(t);for(const d of c){const m=u.find(T=>T.measurementId===d),y=m&&e[m.appId];if(y)o.push(y);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",r,i||{})}catch(o){vt.error(o)}}function Zb(n,e,t,r){async function i(o,...c){try{if(o==="event"){const[u,d]=c;await Jb(n,e,t,u,d)}else if(o==="config"){const[u,d]=c;await Xb(n,e,t,r,u,d)}else if(o==="consent"){const[u,d]=c;n("consent",u,d)}else if(o==="get"){const[u,d,m]=c;n("get",u,d,m)}else if(o==="set"){const[u]=c;n("set",u)}else n(o,...c)}catch(u){vt.error(u)}}return i}function eA(n,e,t,r,i){let o=function(...c){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Zb(o,n,e,t),{gtagCore:o,wrappedGtag:window[i]}}function tA(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Xl)&&t.src.includes(n))return t;return null}/**
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
 */const nA=30,rA=1e3;class iA{constructor(e={},t=rA){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vm=new iA;function sA(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function oA(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:sA(r)},o=zb.replace("{app-id}",t),c=await fetch(o,i);if(c.status!==200&&c.status!==304){let u="";try{const d=await c.json();!((e=d.error)===null||e===void 0)&&e.message&&(u=d.error.message)}catch{}throw St.create("config-fetch-failed",{httpStatus:c.status,responseMessage:u})}return c.json()}async function aA(n,e=vm,t){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw St.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw St.create("no-api-key")}const c=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new uA;return setTimeout(async()=>{u.abort()},Hb),Em({appId:r,apiKey:i,measurementId:o},c,u,e)}async function Em(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=vm){var o;const{appId:c,measurementId:u}=n;try{await cA(r,e)}catch(d){if(u)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:c,measurementId:u};throw d}try{const d=await oA(n);return i.deleteThrottleMetadata(c),d}catch(d){const m=d;if(!lA(m)){if(i.deleteThrottleMetadata(c),u)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:c,measurementId:u};throw d}const y=Number((o=m==null?void 0:m.customData)===null||o===void 0?void 0:o.httpStatus)===503?Hu(t,i.intervalMillis,nA):Hu(t,i.intervalMillis),T={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return i.setThrottleMetadata(c,T),vt.debug(`Calling attemptFetch again in ${y} millis`),Em(n,T,r,i)}}function cA(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(o),r(St.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function lA(n){if(!(n instanceof Xt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class uA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function hA(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const o=await e,c=Object.assign(Object.assign({},r),{send_to:o});n("event",t,c)}}/**
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
 */async function dA(){if(Dd())try{await Nd()}catch(n){return vt.warn(St.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return vt.warn(St.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fA(n,e,t,r,i,o,c){var u;const d=aA(n);d.then(N=>{t[N.measurementId]=N.appId,n.options.measurementId&&N.measurementId!==n.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>vt.error(N)),e.push(d);const m=dA().then(N=>{if(N)return r.getId()}),[y,T]=await Promise.all([d,m]);tA(o)||Qb(o,y.measurementId),i("js",new Date);const A=(u=c==null?void 0:c.config)!==null&&u!==void 0?u:{};return A[qb]="firebase",A.update=!0,T!=null&&(A[jb]=T),i("config",y.measurementId,A),y.measurementId}/**
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
 */class pA{constructor(e){this.app=e}_delete(){return delete js[this.app.options.appId],Promise.resolve()}}let js={},_d=[];const yd={};let Oc="dataLayer",mA="gtag",vd,wm,Ed=!1;function gA(){const n=[];if(Od()&&n.push("This is a browser extension environment."),l_()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=St.create("invalid-analytics-context",{errorInfo:e});vt.warn(t.message)}}function _A(n,e,t){gA();const r=n.options.appId;if(!r)throw St.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw St.create("no-api-key");if(js[r]!=null)throw St.create("already-exists",{id:r});if(!Ed){Yb(Oc);const{wrappedGtag:o,gtagCore:c}=eA(js,_d,yd,Oc,mA);wm=o,vd=c,Ed=!0}return js[r]=fA(n,_d,yd,e,vd,Oc,t),new pA(n)}function yA(n=il()){n=et(n);const e=ei(n,Ca);return e.isInitialized()?e.getImmediate():vA(n)}function vA(n,e={}){const t=ei(n,Ca);if(t.isInitialized()){const i=t.getImmediate();if(pr(e,t.getOptions()))return i;throw St.create("already-initialized")}return t.initialize({options:e})}function EA(n,e,t,r){n=et(n),hA(wm,js[n.app.options.appId],e,t,r).catch(i=>vt.error(i))}const wd="@firebase/analytics",Td="0.10.16";function wA(){hn(new Yt(Ca,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return _A(r,i,t)},"PUBLIC")),hn(new Yt("analytics-internal",n,"PRIVATE")),Mt(wd,Td),Mt(wd,Td,"esm2017");function n(e){try{const t=e.getProvider(Ca).getImmediate();return{logEvent:(r,i,o)=>EA(t,r,i,o)}}catch(t){throw St.create("interop-component-reg-failed",{reason:t})}}}wA();const TA={apiKey:"AIzaSyBkzv8uY4HBrF19P6CUvHrSnj6xOBXACnc",authDomain:"chronohaven.firebaseapp.com",projectId:"chronohaven",storageBucket:"chronohaven.firebasestorage.app",messagingSenderId:"598935116715",appId:"1:598935116715:web:3f7801faf73ec3e72450ee",measurementId:"G-KC1GKPTGVF"},Jl=Md(TA),xA=tb(Jl),MA=Iw(Jl);yA(Jl);function FA(n,e="danger",t,r){return`
        <div class="alert fs-sm lh-1 d-flex align-items-center gap-2 fw-medium mt-2 ${(o=>{switch(o){case"danger":return"bg-danger-subtle text-danger";case"warning":return"bg-warning-subtle text-warning";case"success":return"bg-success-subtle text-success";default:return""}})(e)} ${r||""}">
            <i class="bi ${t}"></i>
            <span class="d-block">${n}</span>
        </div>
    `}export{or as G,FA as a,AA as b,bA as c,MA as d,CA as e,xA as f,SA as g,DA as h,LA as i,OA as j,RA as k,PA as l,kA as m,NA as o,VA as s};
