(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var Do={exports:{}};/*!
  * Bootstrap v5.3.6 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Xg=Do.exports,hu;function Yg(){return hu||(hu=1,function(n,e){(function(t,i){n.exports=i()})(Xg,function(){const t=new Map,i={set(p,a,u){t.has(p)||t.set(p,new Map);const m=t.get(p);m.has(a)||m.size===0?m.set(a,u):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(m.keys())[0]}.`)},get:(p,a)=>t.has(p)&&t.get(p).get(a)||null,remove(p,a){if(!t.has(p))return;const u=t.get(p);u.delete(a),u.size===0&&t.delete(p)}},r="transitionend",o=p=>(p&&window.CSS&&window.CSS.escape&&(p=p.replace(/#([^\s"#']+)/g,(a,u)=>`#${CSS.escape(u)}`)),p),c=p=>{p.dispatchEvent(new Event(r))},h=p=>!(!p||typeof p!="object")&&(p.jquery!==void 0&&(p=p[0]),p.nodeType!==void 0),f=p=>h(p)?p.jquery?p[0]:p:typeof p=="string"&&p.length>0?document.querySelector(o(p)):null,g=p=>{if(!h(p)||p.getClientRects().length===0)return!1;const a=getComputedStyle(p).getPropertyValue("visibility")==="visible",u=p.closest("details:not([open])");if(!u)return a;if(u!==p){const m=p.closest("summary");if(m&&m.parentNode!==u||m===null)return!1}return a},y=p=>!p||p.nodeType!==Node.ELEMENT_NODE||!!p.classList.contains("disabled")||(p.disabled!==void 0?p.disabled:p.hasAttribute("disabled")&&p.getAttribute("disabled")!=="false"),A=p=>{if(!document.documentElement.attachShadow)return null;if(typeof p.getRootNode=="function"){const a=p.getRootNode();return a instanceof ShadowRoot?a:null}return p instanceof ShadowRoot?p:p.parentNode?A(p.parentNode):null},R=()=>{},V=p=>{p.offsetHeight},j=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,G=[],$=()=>document.documentElement.dir==="rtl",oe=p=>{var a;a=()=>{const u=j();if(u){const m=p.NAME,I=u.fn[m];u.fn[m]=p.jQueryInterface,u.fn[m].Constructor=p,u.fn[m].noConflict=()=>(u.fn[m]=I,p.jQueryInterface)}},document.readyState==="loading"?(G.length||document.addEventListener("DOMContentLoaded",()=>{for(const u of G)u()}),G.push(a)):a()},X=(p,a=[],u=p)=>typeof p=="function"?p.call(...a):u,ue=(p,a,u=!0)=>{if(!u)return void X(p);const m=(D=>{if(!D)return 0;let{transitionDuration:L,transitionDelay:F}=window.getComputedStyle(D);const H=Number.parseFloat(L),z=Number.parseFloat(F);return H||z?(L=L.split(",")[0],F=F.split(",")[0],1e3*(Number.parseFloat(L)+Number.parseFloat(F))):0})(a)+5;let I=!1;const b=({target:D})=>{D===a&&(I=!0,a.removeEventListener(r,b),X(p))};a.addEventListener(r,b),setTimeout(()=>{I||c(a)},m)},Ie=(p,a,u,m)=>{const I=p.length;let b=p.indexOf(a);return b===-1?!u&&m?p[I-1]:p[0]:(b+=u?1:-1,m&&(b=(b+I)%I),p[Math.max(0,Math.min(b,I-1))])},ft=/[^.]*(?=\..*)\.|.*/,Re=/\..*/,C=/::\d+$/,v={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},S=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function k(p,a){return a&&`${a}::${E++}`||p.uidEvent||E++}function w(p){const a=k(p);return p.uidEvent=a,v[a]=v[a]||{},v[a]}function At(p,a,u=null){return Object.values(p).find(m=>m.callable===a&&m.delegationSelector===u)}function On(p,a,u){const m=typeof a=="string",I=m?u:a||u;let b=Ki(p);return S.has(b)||(b=p),[m,I,b]}function Ws(p,a,u,m,I){if(typeof a!="string"||!p)return;let[b,D,L]=On(a,u,m);a in T&&(D=(ee=>function(Z){if(!Z.relatedTarget||Z.relatedTarget!==Z.delegateTarget&&!Z.delegateTarget.contains(Z.relatedTarget))return ee.call(this,Z)})(D));const F=w(p),H=F[L]||(F[L]={}),z=At(H,D,b?u:null);if(z)return void(z.oneOff=z.oneOff&&I);const B=k(D,a.replace(ft,"")),re=b?function(Y,ee,Z){return function te(Ee){const Ce=Y.querySelectorAll(ee);for(let{target:ae}=Ee;ae&&ae!==this;ae=ae.parentNode)for(const _e of Ce)if(_e===ae)return jr(Ee,{delegateTarget:ae}),te.oneOff&&x.off(Y,Ee.type,ee,Z),Z.apply(ae,[Ee])}}(p,u,D):function(Y,ee){return function Z(te){return jr(te,{delegateTarget:Y}),Z.oneOff&&x.off(Y,te.type,ee),ee.apply(Y,[te])}}(p,D);re.delegationSelector=b?u:null,re.callable=D,re.oneOff=I,re.uidEvent=B,H[B]=re,p.addEventListener(L,re,b)}function hn(p,a,u,m,I){const b=At(a[u],m,I);b&&(p.removeEventListener(u,b,!!I),delete a[u][b.uidEvent])}function pi(p,a,u,m){const I=a[u]||{};for(const[b,D]of Object.entries(I))b.includes(m)&&hn(p,a,u,D.callable,D.delegationSelector)}function Ki(p){return p=p.replace(Re,""),T[p]||p}const x={on(p,a,u,m){Ws(p,a,u,m,!1)},one(p,a,u,m){Ws(p,a,u,m,!0)},off(p,a,u,m){if(typeof a!="string"||!p)return;const[I,b,D]=On(a,u,m),L=D!==a,F=w(p),H=F[D]||{},z=a.startsWith(".");if(b===void 0){if(z)for(const B of Object.keys(F))pi(p,F,B,a.slice(1));for(const[B,re]of Object.entries(H)){const Y=B.replace(C,"");L&&!a.includes(Y)||hn(p,F,D,re.callable,re.delegationSelector)}}else{if(!Object.keys(H).length)return;hn(p,F,D,b,I?u:null)}},trigger(p,a,u){if(typeof a!="string"||!p)return null;const m=j();let I=null,b=!0,D=!0,L=!1;a!==Ki(a)&&m&&(I=m.Event(a,u),m(p).trigger(I),b=!I.isPropagationStopped(),D=!I.isImmediatePropagationStopped(),L=I.isDefaultPrevented());const F=jr(new Event(a,{bubbles:b,cancelable:!0}),u);return L&&F.preventDefault(),D&&p.dispatchEvent(F),F.defaultPrevented&&I&&I.preventDefault(),F}};function jr(p,a={}){for(const[u,m]of Object.entries(a))try{p[u]=m}catch{Object.defineProperty(p,u,{configurable:!0,get:()=>m})}return p}function Lt(p){if(p==="true")return!0;if(p==="false")return!1;if(p===Number(p).toString())return Number(p);if(p===""||p==="null")return null;if(typeof p!="string")return p;try{return JSON.parse(decodeURIComponent(p))}catch{return p}}function xe(p){return p.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}const xt={setDataAttribute(p,a,u){p.setAttribute(`data-bs-${xe(a)}`,u)},removeDataAttribute(p,a){p.removeAttribute(`data-bs-${xe(a)}`)},getDataAttributes(p){if(!p)return{};const a={},u=Object.keys(p.dataset).filter(m=>m.startsWith("bs")&&!m.startsWith("bsConfig"));for(const m of u){let I=m.replace(/^bs/,"");I=I.charAt(0).toLowerCase()+I.slice(1),a[I]=Lt(p.dataset[m])}return a},getDataAttribute:(p,a)=>Lt(p.getAttribute(`data-bs-${xe(a)}`))};class Mt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(a){return a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a}_mergeConfigObj(a,u){const m=h(u)?xt.getDataAttribute(u,"config"):{};return{...this.constructor.Default,...typeof m=="object"?m:{},...h(u)?xt.getDataAttributes(u):{},...typeof a=="object"?a:{}}}_typeCheckConfig(a,u=this.constructor.DefaultType){for(const[I,b]of Object.entries(u)){const D=a[I],L=h(D)?"element":(m=D)==null?`${m}`:Object.prototype.toString.call(m).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(b).test(L))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${I}" provided type "${L}" but expected type "${b}".`)}var m}}class vt extends Mt{constructor(a,u){super(),(a=f(a))&&(this._element=a,this._config=this._getConfig(u),i.set(this._element,this.constructor.DATA_KEY,this))}dispose(){i.remove(this._element,this.constructor.DATA_KEY),x.off(this._element,this.constructor.EVENT_KEY);for(const a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,u,m=!0){ue(a,u,m)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return i.get(f(a),this.DATA_KEY)}static getOrCreateInstance(a,u={}){return this.getInstance(a)||new this(a,typeof u=="object"?u:null)}static get VERSION(){return"5.3.6"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}const Dn=p=>{let a=p.getAttribute("data-bs-target");if(!a||a==="#"){let u=p.getAttribute("href");if(!u||!u.includes("#")&&!u.startsWith("."))return null;u.includes("#")&&!u.startsWith("#")&&(u=`#${u.split("#")[1]}`),a=u&&u!=="#"?u.trim():null}return a?a.split(",").map(u=>o(u)).join(","):null},W={find:(p,a=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(a,p)),findOne:(p,a=document.documentElement)=>Element.prototype.querySelector.call(a,p),children:(p,a)=>[].concat(...p.children).filter(u=>u.matches(a)),parents(p,a){const u=[];let m=p.parentNode.closest(a);for(;m;)u.push(m),m=m.parentNode.closest(a);return u},prev(p,a){let u=p.previousElementSibling;for(;u;){if(u.matches(a))return[u];u=u.previousElementSibling}return[]},next(p,a){let u=p.nextElementSibling;for(;u;){if(u.matches(a))return[u];u=u.nextElementSibling}return[]},focusableChildren(p){const a=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(u=>`${u}:not([tabindex^="-"])`).join(",");return this.find(a,p).filter(u=>!y(u)&&g(u))},getSelectorFromElement(p){const a=Dn(p);return a&&W.findOne(a)?a:null},getElementFromSelector(p){const a=Dn(p);return a?W.findOne(a):null},getMultipleElementsFromSelector(p){const a=Dn(p);return a?W.find(a):[]}},Gi=(p,a="hide")=>{const u=`click.dismiss${p.EVENT_KEY}`,m=p.NAME;x.on(document,u,`[data-bs-dismiss="${m}"]`,function(I){if(["A","AREA"].includes(this.tagName)&&I.preventDefault(),y(this))return;const b=W.getElementFromSelector(this)||this.closest(`.${m}`);p.getOrCreateInstance(b)[a]()})},gi=".bs.alert",Qi=`close${gi}`,qr=`closed${gi}`;class dn extends vt{static get NAME(){return"alert"}close(){if(x.trigger(this._element,Qi).defaultPrevented)return;this._element.classList.remove("show");const a=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,a)}_destroyElement(){this._element.remove(),x.trigger(this._element,qr),this.dispose()}static jQueryInterface(a){return this.each(function(){const u=dn.getOrCreateInstance(this);if(typeof a=="string"){if(u[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);u[a](this)}})}}Gi(dn,"close"),oe(dn);const Xi='[data-bs-toggle="button"]';class fn extends vt{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(a){return this.each(function(){const u=fn.getOrCreateInstance(this);a==="toggle"&&u[a]()})}}x.on(document,"click.bs.button.data-api",Xi,p=>{p.preventDefault();const a=p.target.closest(Xi);fn.getOrCreateInstance(a).toggle()}),oe(fn);const pn=".bs.swipe",Sa=`touchstart${pn}`,Ra=`touchmove${pn}`,Ks=`touchend${pn}`,Hr=`pointerdown${pn}`,Gs=`pointerup${pn}`,Pa={endCallback:null,leftCallback:null,rightCallback:null},zr={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Nn extends Mt{constructor(a,u){super(),this._element=a,a&&Nn.isSupported()&&(this._config=this._getConfig(u),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Pa}static get DefaultType(){return zr}static get NAME(){return"swipe"}dispose(){x.off(this._element,pn)}_start(a){this._supportPointerEvents?this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX):this._deltaX=a.touches[0].clientX}_end(a){this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX-this._deltaX),this._handleSwipe(),X(this._config.endCallback)}_move(a){this._deltaX=a.touches&&a.touches.length>1?0:a.touches[0].clientX-this._deltaX}_handleSwipe(){const a=Math.abs(this._deltaX);if(a<=40)return;const u=a/this._deltaX;this._deltaX=0,u&&X(u>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(x.on(this._element,Hr,a=>this._start(a)),x.on(this._element,Gs,a=>this._end(a)),this._element.classList.add("pointer-event")):(x.on(this._element,Sa,a=>this._start(a)),x.on(this._element,Ra,a=>this._move(a)),x.on(this._element,Ks,a=>this._end(a)))}_eventIsPointerPenTouch(a){return this._supportPointerEvents&&(a.pointerType==="pen"||a.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Ft=".bs.carousel",Fe=".data-api",Qe="ArrowLeft",Yi="ArrowRight",Vn="next",gn="prev",Ln="left",Wt="right",Qs=`slide${Ft}`,Ji=`slid${Ft}`,Wr=`keydown${Ft}`,ka=`mouseenter${Ft}`,Oa=`mouseleave${Ft}`,Kr=`dragstart${Ft}`,Xs=`load${Ft}${Fe}`,Ys=`click${Ft}${Fe}`,xn="carousel",Mn="active",Zi=".active",Kt=".carousel-item",Js=Zi+Kt,er={[Qe]:Wt,[Yi]:Ln},Zs={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},mi={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class mn extends vt{constructor(a,u){super(a,u),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=W.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===xn&&this.cycle()}static get Default(){return Zs}static get DefaultType(){return mi}static get NAME(){return"carousel"}next(){this._slide(Vn)}nextWhenVisible(){!document.hidden&&g(this._element)&&this.next()}prev(){this._slide(gn)}pause(){this._isSliding&&c(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?x.one(this._element,Ji,()=>this.cycle()):this.cycle())}to(a){const u=this._getItems();if(a>u.length-1||a<0)return;if(this._isSliding)return void x.one(this._element,Ji,()=>this.to(a));const m=this._getItemIndex(this._getActive());if(m===a)return;const I=a>m?Vn:gn;this._slide(I,u[a])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(a){return a.defaultInterval=a.interval,a}_addEventListeners(){this._config.keyboard&&x.on(this._element,Wr,a=>this._keydown(a)),this._config.pause==="hover"&&(x.on(this._element,ka,()=>this.pause()),x.on(this._element,Oa,()=>this._maybeEnableCycle())),this._config.touch&&Nn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const u of W.find(".carousel-item img",this._element))x.on(u,Kr,m=>m.preventDefault());const a={leftCallback:()=>this._slide(this._directionToOrder(Ln)),rightCallback:()=>this._slide(this._directionToOrder(Wt)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new Nn(this._element,a)}_keydown(a){if(/input|textarea/i.test(a.target.tagName))return;const u=er[a.key];u&&(a.preventDefault(),this._slide(this._directionToOrder(u)))}_getItemIndex(a){return this._getItems().indexOf(a)}_setActiveIndicatorElement(a){if(!this._indicatorsElement)return;const u=W.findOne(Zi,this._indicatorsElement);u.classList.remove(Mn),u.removeAttribute("aria-current");const m=W.findOne(`[data-bs-slide-to="${a}"]`,this._indicatorsElement);m&&(m.classList.add(Mn),m.setAttribute("aria-current","true"))}_updateInterval(){const a=this._activeElement||this._getActive();if(!a)return;const u=Number.parseInt(a.getAttribute("data-bs-interval"),10);this._config.interval=u||this._config.defaultInterval}_slide(a,u=null){if(this._isSliding)return;const m=this._getActive(),I=a===Vn,b=u||Ie(this._getItems(),m,I,this._config.wrap);if(b===m)return;const D=this._getItemIndex(b),L=B=>x.trigger(this._element,B,{relatedTarget:b,direction:this._orderToDirection(a),from:this._getItemIndex(m),to:D});if(L(Qs).defaultPrevented||!m||!b)return;const F=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(D),this._activeElement=b;const H=I?"carousel-item-start":"carousel-item-end",z=I?"carousel-item-next":"carousel-item-prev";b.classList.add(z),V(b),m.classList.add(H),b.classList.add(H),this._queueCallback(()=>{b.classList.remove(H,z),b.classList.add(Mn),m.classList.remove(Mn,z,H),this._isSliding=!1,L(Ji)},m,this._isAnimated()),F&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return W.findOne(Js,this._element)}_getItems(){return W.find(Kt,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(a){return $()?a===Ln?gn:Vn:a===Ln?Vn:gn}_orderToDirection(a){return $()?a===gn?Ln:Wt:a===gn?Wt:Ln}static jQueryInterface(a){return this.each(function(){const u=mn.getOrCreateInstance(this,a);if(typeof a!="number"){if(typeof a=="string"){if(u[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);u[a]()}}else u.to(a)})}}x.on(document,Ys,"[data-bs-slide], [data-bs-slide-to]",function(p){const a=W.getElementFromSelector(this);if(!a||!a.classList.contains(xn))return;p.preventDefault();const u=mn.getOrCreateInstance(a),m=this.getAttribute("data-bs-slide-to");return m?(u.to(m),void u._maybeEnableCycle()):xt.getDataAttribute(this,"slide")==="next"?(u.next(),void u._maybeEnableCycle()):(u.prev(),void u._maybeEnableCycle())}),x.on(window,Xs,()=>{const p=W.find('[data-bs-ride="carousel"]');for(const a of p)mn.getOrCreateInstance(a)}),oe(mn);const De=".bs.collapse",eo=`show${De}`,_i=`shown${De}`,yi=`hide${De}`,Da=`hidden${De}`,Na=`click${De}.data-api`,Gt="show",Fn="collapse",tr="collapsing",nr=`:scope .${Fn} .${Fn}`,ir='[data-bs-toggle="collapse"]',Gr={parent:null,toggle:!0},rr={parent:"(null|element)",toggle:"boolean"};class st extends vt{constructor(a,u){super(a,u),this._isTransitioning=!1,this._triggerArray=[];const m=W.find(ir);for(const I of m){const b=W.getSelectorFromElement(I),D=W.find(b).filter(L=>L===this._element);b!==null&&D.length&&this._triggerArray.push(I)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Gr}static get DefaultType(){return rr}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(I=>I!==this._element).map(I=>st.getOrCreateInstance(I,{toggle:!1}))),a.length&&a[0]._isTransitioning||x.trigger(this._element,eo).defaultPrevented)return;for(const I of a)I.hide();const u=this._getDimension();this._element.classList.remove(Fn),this._element.classList.add(tr),this._element.style[u]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const m=`scroll${u[0].toUpperCase()+u.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(tr),this._element.classList.add(Fn,Gt),this._element.style[u]="",x.trigger(this._element,_i)},this._element,!0),this._element.style[u]=`${this._element[m]}px`}hide(){if(this._isTransitioning||!this._isShown()||x.trigger(this._element,yi).defaultPrevented)return;const a=this._getDimension();this._element.style[a]=`${this._element.getBoundingClientRect()[a]}px`,V(this._element),this._element.classList.add(tr),this._element.classList.remove(Fn,Gt);for(const u of this._triggerArray){const m=W.getElementFromSelector(u);m&&!this._isShown(m)&&this._addAriaAndCollapsedClass([u],!1)}this._isTransitioning=!0,this._element.style[a]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(tr),this._element.classList.add(Fn),x.trigger(this._element,Da)},this._element,!0)}_isShown(a=this._element){return a.classList.contains(Gt)}_configAfterMerge(a){return a.toggle=!!a.toggle,a.parent=f(a.parent),a}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const a=this._getFirstLevelChildren(ir);for(const u of a){const m=W.getElementFromSelector(u);m&&this._addAriaAndCollapsedClass([u],this._isShown(m))}}_getFirstLevelChildren(a){const u=W.find(nr,this._config.parent);return W.find(a,this._config.parent).filter(m=>!u.includes(m))}_addAriaAndCollapsedClass(a,u){if(a.length)for(const m of a)m.classList.toggle("collapsed",!u),m.setAttribute("aria-expanded",u)}static jQueryInterface(a){const u={};return typeof a=="string"&&/show|hide/.test(a)&&(u.toggle=!1),this.each(function(){const m=st.getOrCreateInstance(this,u);if(typeof a=="string"){if(m[a]===void 0)throw new TypeError(`No method named "${a}"`);m[a]()}})}}x.on(document,Na,ir,function(p){(p.target.tagName==="A"||p.delegateTarget&&p.delegateTarget.tagName==="A")&&p.preventDefault();for(const a of W.getMultipleElementsFromSelector(this))st.getOrCreateInstance(a,{toggle:!1}).toggle()}),oe(st);var qe="top",Ze="bottom",Xe="right",Ue="left",vi="auto",_n=[qe,Ze,Xe,Ue],yn="start",Ut="end",Qr="clippingParents",wi="viewport",Ct="popper",Qt="reference",Ei=_n.reduce(function(p,a){return p.concat([a+"-"+yn,a+"-"+Ut])},[]),Xr=[].concat(_n,[vi]).reduce(function(p,a){return p.concat([a,a+"-"+yn,a+"-"+Ut])},[]),Yr="beforeRead",Jr="read",Zr="afterRead",sr="beforeMain",or="main",es="afterMain",ts="beforeWrite",to="write",no="afterWrite",ns=[Yr,Jr,Zr,sr,or,es,ts,to,no];function wt(p){return p?(p.nodeName||"").toLowerCase():null}function ot(p){if(p==null)return window;if(p.toString()!=="[object Window]"){var a=p.ownerDocument;return a&&a.defaultView||window}return p}function at(p){return p instanceof ot(p).Element||p instanceof Element}function ke(p){return p instanceof ot(p).HTMLElement||p instanceof HTMLElement}function Un(p){return typeof ShadowRoot<"u"&&(p instanceof ot(p).ShadowRoot||p instanceof ShadowRoot)}const $n={name:"applyStyles",enabled:!0,phase:"write",fn:function(p){var a=p.state;Object.keys(a.elements).forEach(function(u){var m=a.styles[u]||{},I=a.attributes[u]||{},b=a.elements[u];ke(b)&&wt(b)&&(Object.assign(b.style,m),Object.keys(I).forEach(function(D){var L=I[D];L===!1?b.removeAttribute(D):b.setAttribute(D,L===!0?"":L)}))})},effect:function(p){var a=p.state,u={popper:{position:a.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(a.elements.popper.style,u.popper),a.styles=u,a.elements.arrow&&Object.assign(a.elements.arrow.style,u.arrow),function(){Object.keys(a.elements).forEach(function(m){var I=a.elements[m],b=a.attributes[m]||{},D=Object.keys(a.styles.hasOwnProperty(m)?a.styles[m]:u[m]).reduce(function(L,F){return L[F]="",L},{});ke(I)&&wt(I)&&(Object.assign(I.style,D),Object.keys(b).forEach(function(L){I.removeAttribute(L)}))})}},requires:["computeStyles"]};function Et(p){return p.split("-")[0]}var ge=Math.max,vn=Math.min,St=Math.round;function wn(){var p=navigator.userAgentData;return p!=null&&p.brands&&Array.isArray(p.brands)?p.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function io(){return!/^((?!chrome|android).)*safari/i.test(wn())}function En(p,a,u){a===void 0&&(a=!1),u===void 0&&(u=!1);var m=p.getBoundingClientRect(),I=1,b=1;a&&ke(p)&&(I=p.offsetWidth>0&&St(m.width)/p.offsetWidth||1,b=p.offsetHeight>0&&St(m.height)/p.offsetHeight||1);var D=(at(p)?ot(p):window).visualViewport,L=!io()&&u,F=(m.left+(L&&D?D.offsetLeft:0))/I,H=(m.top+(L&&D?D.offsetTop:0))/b,z=m.width/I,B=m.height/b;return{width:z,height:B,top:H,right:F+z,bottom:H+B,left:F,x:F,y:H}}function is(p){var a=En(p),u=p.offsetWidth,m=p.offsetHeight;return Math.abs(a.width-u)<=1&&(u=a.width),Math.abs(a.height-m)<=1&&(m=a.height),{x:p.offsetLeft,y:p.offsetTop,width:u,height:m}}function ro(p,a){var u=a.getRootNode&&a.getRootNode();if(p.contains(a))return!0;if(u&&Un(u)){var m=a;do{if(m&&p.isSameNode(m))return!0;m=m.parentNode||m.host}while(m)}return!1}function $t(p){return ot(p).getComputedStyle(p)}function Va(p){return["table","td","th"].indexOf(wt(p))>=0}function pt(p){return((at(p)?p.ownerDocument:p.document)||window.document).documentElement}function Tt(p){return wt(p)==="html"?p:p.assignedSlot||p.parentNode||(Un(p)?p.host:null)||pt(p)}function rs(p){return ke(p)&&$t(p).position!=="fixed"?p.offsetParent:null}function Bn(p){for(var a=ot(p),u=rs(p);u&&Va(u)&&$t(u).position==="static";)u=rs(u);return u&&(wt(u)==="html"||wt(u)==="body"&&$t(u).position==="static")?a:u||function(m){var I=/firefox/i.test(wn());if(/Trident/i.test(wn())&&ke(m)&&$t(m).position==="fixed")return null;var b=Tt(m);for(Un(b)&&(b=b.host);ke(b)&&["html","body"].indexOf(wt(b))<0;){var D=$t(b);if(D.transform!=="none"||D.perspective!=="none"||D.contain==="paint"||["transform","perspective"].indexOf(D.willChange)!==-1||I&&D.willChange==="filter"||I&&D.filter&&D.filter!=="none")return b;b=b.parentNode}return null}(p)||a}function ar(p){return["top","bottom"].indexOf(p)>=0?"x":"y"}function Rt(p,a,u){return ge(p,vn(a,u))}function so(p){return Object.assign({},{top:0,right:0,bottom:0,left:0},p)}function oo(p,a){return a.reduce(function(u,m){return u[m]=p,u},{})}const ao={name:"arrow",enabled:!0,phase:"main",fn:function(p){var a,u=p.state,m=p.name,I=p.options,b=u.elements.arrow,D=u.modifiersData.popperOffsets,L=Et(u.placement),F=ar(L),H=[Ue,Xe].indexOf(L)>=0?"height":"width";if(b&&D){var z=function(Te,we){return so(typeof(Te=typeof Te=="function"?Te(Object.assign({},we.rects,{placement:we.placement})):Te)!="number"?Te:oo(Te,_n))}(I.padding,u),B=is(b),re=F==="y"?qe:Ue,Y=F==="y"?Ze:Xe,ee=u.rects.reference[H]+u.rects.reference[F]-D[F]-u.rects.popper[H],Z=D[F]-u.rects.reference[F],te=Bn(b),Ee=te?F==="y"?te.clientHeight||0:te.clientWidth||0:0,Ce=ee/2-Z/2,ae=z[re],_e=Ee-B[H]-z[Y],se=Ee/2-B[H]/2+Ce,he=Rt(ae,se,_e),ve=F;u.modifiersData[m]=((a={})[ve]=he,a.centerOffset=he-se,a)}},effect:function(p){var a=p.state,u=p.options.element,m=u===void 0?"[data-popper-arrow]":u;m!=null&&(typeof m!="string"||(m=a.elements.popper.querySelector(m)))&&ro(a.elements.popper,m)&&(a.elements.arrow=m)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ct(p){return p.split("-")[1]}var La={top:"auto",right:"auto",bottom:"auto",left:"auto"};function co(p){var a,u=p.popper,m=p.popperRect,I=p.placement,b=p.variation,D=p.offsets,L=p.position,F=p.gpuAcceleration,H=p.adaptive,z=p.roundOffsets,B=p.isFixed,re=D.x,Y=re===void 0?0:re,ee=D.y,Z=ee===void 0?0:ee,te=typeof z=="function"?z({x:Y,y:Z}):{x:Y,y:Z};Y=te.x,Z=te.y;var Ee=D.hasOwnProperty("x"),Ce=D.hasOwnProperty("y"),ae=Ue,_e=qe,se=window;if(H){var he=Bn(u),ve="clientHeight",Te="clientWidth";he===ot(u)&&$t(he=pt(u)).position!=="static"&&L==="absolute"&&(ve="scrollHeight",Te="scrollWidth"),(I===qe||(I===Ue||I===Xe)&&b===Ut)&&(_e=Ze,Z-=(B&&he===se&&se.visualViewport?se.visualViewport.height:he[ve])-m.height,Z*=F?1:-1),I!==Ue&&(I!==qe&&I!==Ze||b!==Ut)||(ae=Xe,Y-=(B&&he===se&&se.visualViewport?se.visualViewport.width:he[Te])-m.width,Y*=F?1:-1)}var we,Ne=Object.assign({position:L},H&&La),It=z===!0?function(jt,ut){var kt=jt.x,Ot=jt.y,Oe=ut.devicePixelRatio||1;return{x:St(kt*Oe)/Oe||0,y:St(Ot*Oe)/Oe||0}}({x:Y,y:Z},ot(u)):{x:Y,y:Z};return Y=It.x,Z=It.y,F?Object.assign({},Ne,((we={})[_e]=Ce?"0":"",we[ae]=Ee?"0":"",we.transform=(se.devicePixelRatio||1)<=1?"translate("+Y+"px, "+Z+"px)":"translate3d("+Y+"px, "+Z+"px, 0)",we)):Object.assign({},Ne,((a={})[_e]=Ce?Z+"px":"",a[ae]=Ee?Y+"px":"",a.transform="",a))}const jn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(p){var a=p.state,u=p.options,m=u.gpuAcceleration,I=m===void 0||m,b=u.adaptive,D=b===void 0||b,L=u.roundOffsets,F=L===void 0||L,H={placement:Et(a.placement),variation:ct(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:I,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,co(Object.assign({},H,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:D,roundOffsets:F})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,co(Object.assign({},H,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:F})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})},data:{}};var Tn={passive:!0};const cr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(p){var a=p.state,u=p.instance,m=p.options,I=m.scroll,b=I===void 0||I,D=m.resize,L=D===void 0||D,F=ot(a.elements.popper),H=[].concat(a.scrollParents.reference,a.scrollParents.popper);return b&&H.forEach(function(z){z.addEventListener("scroll",u.update,Tn)}),L&&F.addEventListener("resize",u.update,Tn),function(){b&&H.forEach(function(z){z.removeEventListener("scroll",u.update,Tn)}),L&&F.removeEventListener("resize",u.update,Tn)}},data:{}};var Ti={left:"right",right:"left",bottom:"top",top:"bottom"};function Xt(p){return p.replace(/left|right|bottom|top/g,function(a){return Ti[a]})}var lo={start:"end",end:"start"};function lr(p){return p.replace(/start|end/g,function(a){return lo[a]})}function Ae(p){var a=ot(p);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function ss(p){return En(pt(p)).left+Ae(p).scrollLeft}function os(p){var a=$t(p),u=a.overflow,m=a.overflowX,I=a.overflowY;return/auto|scroll|overlay|hidden/.test(u+I+m)}function as(p){return["html","body","#document"].indexOf(wt(p))>=0?p.ownerDocument.body:ke(p)&&os(p)?p:as(Tt(p))}function qn(p,a){var u;a===void 0&&(a=[]);var m=as(p),I=m===((u=p.ownerDocument)==null?void 0:u.body),b=ot(m),D=I?[b].concat(b.visualViewport||[],os(m)?m:[]):m,L=a.concat(D);return I?L:L.concat(qn(Tt(D)))}function ur(p){return Object.assign({},p,{left:p.x,top:p.y,right:p.x+p.width,bottom:p.y+p.height})}function Ii(p,a,u){return a===wi?ur(function(m,I){var b=ot(m),D=pt(m),L=b.visualViewport,F=D.clientWidth,H=D.clientHeight,z=0,B=0;if(L){F=L.width,H=L.height;var re=io();(re||!re&&I==="fixed")&&(z=L.offsetLeft,B=L.offsetTop)}return{width:F,height:H,x:z+ss(m),y:B}}(p,u)):at(a)?function(m,I){var b=En(m,!1,I==="fixed");return b.top=b.top+m.clientTop,b.left=b.left+m.clientLeft,b.bottom=b.top+m.clientHeight,b.right=b.left+m.clientWidth,b.width=m.clientWidth,b.height=m.clientHeight,b.x=b.left,b.y=b.top,b}(a,u):ur(function(m){var I,b=pt(m),D=Ae(m),L=(I=m.ownerDocument)==null?void 0:I.body,F=ge(b.scrollWidth,b.clientWidth,L?L.scrollWidth:0,L?L.clientWidth:0),H=ge(b.scrollHeight,b.clientHeight,L?L.scrollHeight:0,L?L.clientHeight:0),z=-D.scrollLeft+ss(m),B=-D.scrollTop;return $t(L||b).direction==="rtl"&&(z+=ge(b.clientWidth,L?L.clientWidth:0)-F),{width:F,height:H,x:z,y:B}}(pt(p)))}function cs(p){var a,u=p.reference,m=p.element,I=p.placement,b=I?Et(I):null,D=I?ct(I):null,L=u.x+u.width/2-m.width/2,F=u.y+u.height/2-m.height/2;switch(b){case qe:a={x:L,y:u.y-m.height};break;case Ze:a={x:L,y:u.y+u.height};break;case Xe:a={x:u.x+u.width,y:F};break;case Ue:a={x:u.x-m.width,y:F};break;default:a={x:u.x,y:u.y}}var H=b?ar(b):null;if(H!=null){var z=H==="y"?"height":"width";switch(D){case yn:a[H]=a[H]-(u[z]/2-m[z]/2);break;case Ut:a[H]=a[H]+(u[z]/2-m[z]/2)}}return a}function et(p,a){a===void 0&&(a={});var u=a,m=u.placement,I=m===void 0?p.placement:m,b=u.strategy,D=b===void 0?p.strategy:b,L=u.boundary,F=L===void 0?Qr:L,H=u.rootBoundary,z=H===void 0?wi:H,B=u.elementContext,re=B===void 0?Ct:B,Y=u.altBoundary,ee=Y!==void 0&&Y,Z=u.padding,te=Z===void 0?0:Z,Ee=so(typeof te!="number"?te:oo(te,_n)),Ce=re===Ct?Qt:Ct,ae=p.rects.popper,_e=p.elements[ee?Ce:re],se=function(ut,kt,Ot,Oe){var Jt=kt==="clippingParents"?function(be){var ht=qn(Tt(be)),Dt=["absolute","fixed"].indexOf($t(be).position)>=0&&ke(be)?Bn(be):be;return at(Dt)?ht.filter(function(Gn){return at(Gn)&&ro(Gn,Dt)&&wt(Gn)!=="body"}):[]}(ut):[].concat(kt),Zt=[].concat(Jt,[Ot]),_r=Zt[0],Ke=Zt.reduce(function(be,ht){var Dt=Ii(ut,ht,Oe);return be.top=ge(Dt.top,be.top),be.right=vn(Dt.right,be.right),be.bottom=vn(Dt.bottom,be.bottom),be.left=ge(Dt.left,be.left),be},Ii(ut,_r,Oe));return Ke.width=Ke.right-Ke.left,Ke.height=Ke.bottom-Ke.top,Ke.x=Ke.left,Ke.y=Ke.top,Ke}(at(_e)?_e:_e.contextElement||pt(p.elements.popper),F,z,D),he=En(p.elements.reference),ve=cs({reference:he,element:ae,placement:I}),Te=ur(Object.assign({},ae,ve)),we=re===Ct?Te:he,Ne={top:se.top-we.top+Ee.top,bottom:we.bottom-se.bottom+Ee.bottom,left:se.left-we.left+Ee.left,right:we.right-se.right+Ee.right},It=p.modifiersData.offset;if(re===Ct&&It){var jt=It[I];Object.keys(Ne).forEach(function(ut){var kt=[Xe,Ze].indexOf(ut)>=0?1:-1,Ot=[qe,Ze].indexOf(ut)>=0?"y":"x";Ne[ut]+=jt[Ot]*kt})}return Ne}function uo(p,a){a===void 0&&(a={});var u=a,m=u.placement,I=u.boundary,b=u.rootBoundary,D=u.padding,L=u.flipVariations,F=u.allowedAutoPlacements,H=F===void 0?Xr:F,z=ct(m),B=z?L?Ei:Ei.filter(function(ee){return ct(ee)===z}):_n,re=B.filter(function(ee){return H.indexOf(ee)>=0});re.length===0&&(re=B);var Y=re.reduce(function(ee,Z){return ee[Z]=et(p,{placement:Z,boundary:I,rootBoundary:b,padding:D})[Et(Z)],ee},{});return Object.keys(Y).sort(function(ee,Z){return Y[ee]-Y[Z]})}const ho={name:"flip",enabled:!0,phase:"main",fn:function(p){var a=p.state,u=p.options,m=p.name;if(!a.modifiersData[m]._skip){for(var I=u.mainAxis,b=I===void 0||I,D=u.altAxis,L=D===void 0||D,F=u.fallbackPlacements,H=u.padding,z=u.boundary,B=u.rootBoundary,re=u.altBoundary,Y=u.flipVariations,ee=Y===void 0||Y,Z=u.allowedAutoPlacements,te=a.options.placement,Ee=Et(te),Ce=F||(Ee!==te&&ee?function(be){if(Et(be)===vi)return[];var ht=Xt(be);return[lr(be),ht,lr(ht)]}(te):[Xt(te)]),ae=[te].concat(Ce).reduce(function(be,ht){return be.concat(Et(ht)===vi?uo(a,{placement:ht,boundary:z,rootBoundary:B,padding:H,flipVariations:ee,allowedAutoPlacements:Z}):ht)},[]),_e=a.rects.reference,se=a.rects.popper,he=new Map,ve=!0,Te=ae[0],we=0;we<ae.length;we++){var Ne=ae[we],It=Et(Ne),jt=ct(Ne)===yn,ut=[qe,Ze].indexOf(It)>=0,kt=ut?"width":"height",Ot=et(a,{placement:Ne,boundary:z,rootBoundary:B,altBoundary:re,padding:H}),Oe=ut?jt?Xe:Ue:jt?Ze:qe;_e[kt]>se[kt]&&(Oe=Xt(Oe));var Jt=Xt(Oe),Zt=[];if(b&&Zt.push(Ot[It]<=0),L&&Zt.push(Ot[Oe]<=0,Ot[Jt]<=0),Zt.every(function(be){return be})){Te=Ne,ve=!1;break}he.set(Ne,Zt)}if(ve)for(var _r=function(be){var ht=ae.find(function(Dt){var Gn=he.get(Dt);if(Gn)return Gn.slice(0,be).every(function(Io){return Io})});if(ht)return Te=ht,"break"},Ke=ee?3:1;Ke>0&&_r(Ke)!=="break";Ke--);a.placement!==Te&&(a.modifiersData[m]._skip=!0,a.placement=Te,a.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Hn(p,a,u){return u===void 0&&(u={x:0,y:0}),{top:p.top-a.height-u.y,right:p.right-a.width+u.x,bottom:p.bottom-a.height+u.y,left:p.left-a.width-u.x}}function ls(p){return[qe,Xe,Ze,Ue].some(function(a){return p[a]>=0})}const hr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(p){var a=p.state,u=p.name,m=a.rects.reference,I=a.rects.popper,b=a.modifiersData.preventOverflow,D=et(a,{elementContext:"reference"}),L=et(a,{altBoundary:!0}),F=Hn(D,m),H=Hn(L,I,b),z=ls(F),B=ls(H);a.modifiersData[u]={referenceClippingOffsets:F,popperEscapeOffsets:H,isReferenceHidden:z,hasPopperEscaped:B},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":z,"data-popper-escaped":B})}},bi={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(p){var a=p.state,u=p.options,m=p.name,I=u.offset,b=I===void 0?[0,0]:I,D=Xr.reduce(function(z,B){return z[B]=function(re,Y,ee){var Z=Et(re),te=[Ue,qe].indexOf(Z)>=0?-1:1,Ee=typeof ee=="function"?ee(Object.assign({},Y,{placement:re})):ee,Ce=Ee[0],ae=Ee[1];return Ce=Ce||0,ae=(ae||0)*te,[Ue,Xe].indexOf(Z)>=0?{x:ae,y:Ce}:{x:Ce,y:ae}}(B,a.rects,b),z},{}),L=D[a.placement],F=L.x,H=L.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=F,a.modifiersData.popperOffsets.y+=H),a.modifiersData[m]=D}},dr={name:"popperOffsets",enabled:!0,phase:"read",fn:function(p){var a=p.state,u=p.name;a.modifiersData[u]=cs({reference:a.rects.reference,element:a.rects.popper,placement:a.placement})},data:{}},Ai={name:"preventOverflow",enabled:!0,phase:"main",fn:function(p){var a=p.state,u=p.options,m=p.name,I=u.mainAxis,b=I===void 0||I,D=u.altAxis,L=D!==void 0&&D,F=u.boundary,H=u.rootBoundary,z=u.altBoundary,B=u.padding,re=u.tether,Y=re===void 0||re,ee=u.tetherOffset,Z=ee===void 0?0:ee,te=et(a,{boundary:F,rootBoundary:H,padding:B,altBoundary:z}),Ee=Et(a.placement),Ce=ct(a.placement),ae=!Ce,_e=ar(Ee),se=_e==="x"?"y":"x",he=a.modifiersData.popperOffsets,ve=a.rects.reference,Te=a.rects.popper,we=typeof Z=="function"?Z(Object.assign({},a.rects,{placement:a.placement})):Z,Ne=typeof we=="number"?{mainAxis:we,altAxis:we}:Object.assign({mainAxis:0,altAxis:0},we),It=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,jt={x:0,y:0};if(he){if(b){var ut,kt=_e==="y"?qe:Ue,Ot=_e==="y"?Ze:Xe,Oe=_e==="y"?"height":"width",Jt=he[_e],Zt=Jt+te[kt],_r=Jt-te[Ot],Ke=Y?-Te[Oe]/2:0,be=Ce===yn?ve[Oe]:Te[Oe],ht=Ce===yn?-Te[Oe]:-ve[Oe],Dt=a.elements.arrow,Gn=Y&&Dt?is(Dt):{width:0,height:0},Io=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Zl=Io[kt],eu=Io[Ot],bo=Rt(0,ve[Oe],Gn[Oe]),jg=ae?ve[Oe]/2-Ke-bo-Zl-Ne.mainAxis:be-bo-Zl-Ne.mainAxis,qg=ae?-ve[Oe]/2+Ke+bo+eu+Ne.mainAxis:ht+bo+eu+Ne.mainAxis,Ka=a.elements.arrow&&Bn(a.elements.arrow),Hg=Ka?_e==="y"?Ka.clientTop||0:Ka.clientLeft||0:0,tu=(ut=It==null?void 0:It[_e])!=null?ut:0,zg=Jt+qg-tu,nu=Rt(Y?vn(Zt,Jt+jg-tu-Hg):Zt,Jt,Y?ge(_r,zg):_r);he[_e]=nu,jt[_e]=nu-Jt}if(L){var iu,Wg=_e==="x"?qe:Ue,Kg=_e==="x"?Ze:Xe,Vi=he[se],Ao=se==="y"?"height":"width",ru=Vi+te[Wg],su=Vi-te[Kg],Ga=[qe,Ue].indexOf(Ee)!==-1,ou=(iu=It==null?void 0:It[se])!=null?iu:0,au=Ga?ru:Vi-ve[Ao]-Te[Ao]-ou+Ne.altAxis,cu=Ga?Vi+ve[Ao]+Te[Ao]-ou-Ne.altAxis:su,lu=Y&&Ga?function(Gg,Qg,Qa){var uu=Rt(Gg,Qg,Qa);return uu>Qa?Qa:uu}(au,Vi,cu):Rt(Y?au:ru,Vi,Y?cu:su);he[se]=lu,jt[se]=lu-Vi}a.modifiersData[m]=jt}},requiresIfExists:["offset"]};function xa(p,a,u){u===void 0&&(u=!1);var m,I,b=ke(a),D=ke(a)&&function(B){var re=B.getBoundingClientRect(),Y=St(re.width)/B.offsetWidth||1,ee=St(re.height)/B.offsetHeight||1;return Y!==1||ee!==1}(a),L=pt(a),F=En(p,D,u),H={scrollLeft:0,scrollTop:0},z={x:0,y:0};return(b||!b&&!u)&&((wt(a)!=="body"||os(L))&&(H=(m=a)!==ot(m)&&ke(m)?{scrollLeft:(I=m).scrollLeft,scrollTop:I.scrollTop}:Ae(m)),ke(a)?((z=En(a,!0)).x+=a.clientLeft,z.y+=a.clientTop):L&&(z.x=ss(L))),{x:F.left+H.scrollLeft-z.x,y:F.top+H.scrollTop-z.y,width:F.width,height:F.height}}function fo(p){var a=new Map,u=new Set,m=[];function I(b){u.add(b.name),[].concat(b.requires||[],b.requiresIfExists||[]).forEach(function(D){if(!u.has(D)){var L=a.get(D);L&&I(L)}}),m.push(b)}return p.forEach(function(b){a.set(b.name,b)}),p.forEach(function(b){u.has(b.name)||I(b)}),m}var zn={placement:"bottom",modifiers:[],strategy:"absolute"};function us(){for(var p=arguments.length,a=new Array(p),u=0;u<p;u++)a[u]=arguments[u];return!a.some(function(m){return!(m&&typeof m.getBoundingClientRect=="function")})}function Ci(p){p===void 0&&(p={});var a=p,u=a.defaultModifiers,m=u===void 0?[]:u,I=a.defaultOptions,b=I===void 0?zn:I;return function(D,L,F){F===void 0&&(F=b);var H,z,B={placement:"bottom",orderedModifiers:[],options:Object.assign({},zn,b),modifiersData:{},elements:{reference:D,popper:L},attributes:{},styles:{}},re=[],Y=!1,ee={state:B,setOptions:function(te){var Ee=typeof te=="function"?te(B.options):te;Z(),B.options=Object.assign({},b,B.options,Ee),B.scrollParents={reference:at(D)?qn(D):D.contextElement?qn(D.contextElement):[],popper:qn(L)};var Ce,ae,_e=function(se){var he=fo(se);return ns.reduce(function(ve,Te){return ve.concat(he.filter(function(we){return we.phase===Te}))},[])}((Ce=[].concat(m,B.options.modifiers),ae=Ce.reduce(function(se,he){var ve=se[he.name];return se[he.name]=ve?Object.assign({},ve,he,{options:Object.assign({},ve.options,he.options),data:Object.assign({},ve.data,he.data)}):he,se},{}),Object.keys(ae).map(function(se){return ae[se]})));return B.orderedModifiers=_e.filter(function(se){return se.enabled}),B.orderedModifiers.forEach(function(se){var he=se.name,ve=se.options,Te=ve===void 0?{}:ve,we=se.effect;if(typeof we=="function"){var Ne=we({state:B,name:he,instance:ee,options:Te});re.push(Ne||function(){})}}),ee.update()},forceUpdate:function(){if(!Y){var te=B.elements,Ee=te.reference,Ce=te.popper;if(us(Ee,Ce)){B.rects={reference:xa(Ee,Bn(Ce),B.options.strategy==="fixed"),popper:is(Ce)},B.reset=!1,B.placement=B.options.placement,B.orderedModifiers.forEach(function(we){return B.modifiersData[we.name]=Object.assign({},we.data)});for(var ae=0;ae<B.orderedModifiers.length;ae++)if(B.reset!==!0){var _e=B.orderedModifiers[ae],se=_e.fn,he=_e.options,ve=he===void 0?{}:he,Te=_e.name;typeof se=="function"&&(B=se({state:B,options:ve,name:Te,instance:ee})||B)}else B.reset=!1,ae=-1}}},update:(H=function(){return new Promise(function(te){ee.forceUpdate(),te(B)})},function(){return z||(z=new Promise(function(te){Promise.resolve().then(function(){z=void 0,te(H())})})),z}),destroy:function(){Z(),Y=!0}};if(!us(D,L))return ee;function Z(){re.forEach(function(te){return te()}),re=[]}return ee.setOptions(F).then(function(te){!Y&&F.onFirstUpdate&&F.onFirstUpdate(te)}),ee}}var hs=Ci(),ds=Ci({defaultModifiers:[cr,dr,jn,$n]}),fr=Ci({defaultModifiers:[cr,dr,jn,$n,bi,ho,Ai,ao,hr]});const Si=Object.freeze(Object.defineProperty({__proto__:null,afterMain:es,afterRead:Zr,afterWrite:no,applyStyles:$n,arrow:ao,auto:vi,basePlacements:_n,beforeMain:sr,beforeRead:Yr,beforeWrite:ts,bottom:Ze,clippingParents:Qr,computeStyles:jn,createPopper:fr,createPopperBase:hs,createPopperLite:ds,detectOverflow:et,end:Ut,eventListeners:cr,flip:ho,hide:hr,left:Ue,main:or,modifierPhases:ns,offset:bi,placements:Xr,popper:Ct,popperGenerator:Ci,popperOffsets:dr,preventOverflow:Ai,read:Jr,reference:Qt,right:Xe,start:yn,top:qe,variationPlacements:Ei,viewport:wi,write:to},Symbol.toStringTag,{value:"Module"})),fs="dropdown",Yt=".bs.dropdown",Bt=".data-api",po="ArrowUp",ps="ArrowDown",go=`hide${Yt}`,mo=`hidden${Yt}`,pr=`show${Yt}`,lt=`shown${Yt}`,gs=`click${Yt}${Bt}`,ms=`keydown${Yt}${Bt}`,Wn=`keyup${Yt}${Bt}`,s="show",l='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',d=`${l}.${s}`,_=".dropdown-menu",P=$()?"top-end":"top-start",O=$()?"top-start":"top-end",M=$()?"bottom-end":"bottom-start",ye=$()?"bottom-start":"bottom-end",$e=$()?"left-start":"right-start",de=$()?"right-start":"left-start",He={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ze={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class We extends vt{constructor(a,u){super(a,u),this._popper=null,this._parent=this._element.parentNode,this._menu=W.next(this._element,_)[0]||W.prev(this._element,_)[0]||W.findOne(_,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return He}static get DefaultType(){return ze}static get NAME(){return fs}toggle(){return this._isShown()?this.hide():this.show()}show(){if(y(this._element)||this._isShown())return;const a={relatedTarget:this._element};if(!x.trigger(this._element,pr,a).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const u of[].concat(...document.body.children))x.on(u,"mouseover",R);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(s),this._element.classList.add(s),x.trigger(this._element,lt,a)}}hide(){if(y(this._element)||!this._isShown())return;const a={relatedTarget:this._element};this._completeHide(a)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(a){if(!x.trigger(this._element,go,a).defaultPrevented){if("ontouchstart"in document.documentElement)for(const u of[].concat(...document.body.children))x.off(u,"mouseover",R);this._popper&&this._popper.destroy(),this._menu.classList.remove(s),this._element.classList.remove(s),this._element.setAttribute("aria-expanded","false"),xt.removeDataAttribute(this._menu,"popper"),x.trigger(this._element,mo,a),this._element.focus()}}_getConfig(a){if(typeof(a=super._getConfig(a)).reference=="object"&&!h(a.reference)&&typeof a.reference.getBoundingClientRect!="function")throw new TypeError(`${fs.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return a}_createPopper(){if(Si===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let a=this._element;this._config.reference==="parent"?a=this._parent:h(this._config.reference)?a=f(this._config.reference):typeof this._config.reference=="object"&&(a=this._config.reference);const u=this._getPopperConfig();this._popper=fr(a,this._menu,u)}_isShown(){return this._menu.classList.contains(s)}_getPlacement(){const a=this._parent;if(a.classList.contains("dropend"))return $e;if(a.classList.contains("dropstart"))return de;if(a.classList.contains("dropup-center"))return"top";if(a.classList.contains("dropdown-center"))return"bottom";const u=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return a.classList.contains("dropup")?u?O:P:u?ye:M}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(u=>Number.parseInt(u,10)):typeof a=="function"?u=>a(u,this._element):a}_getPopperConfig(){const a={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(xt.setDataAttribute(this._menu,"popper","static"),a.modifiers=[{name:"applyStyles",enabled:!1}]),{...a,...X(this._config.popperConfig,[void 0,a])}}_selectMenuItem({key:a,target:u}){const m=W.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(I=>g(I));m.length&&Ie(m,u,a===ps,!m.includes(u)).focus()}static jQueryInterface(a){return this.each(function(){const u=We.getOrCreateInstance(this,a);if(typeof a=="string"){if(u[a]===void 0)throw new TypeError(`No method named "${a}"`);u[a]()}})}static clearMenus(a){if(a.button===2||a.type==="keyup"&&a.key!=="Tab")return;const u=W.find(d);for(const m of u){const I=We.getInstance(m);if(!I||I._config.autoClose===!1)continue;const b=a.composedPath(),D=b.includes(I._menu);if(b.includes(I._element)||I._config.autoClose==="inside"&&!D||I._config.autoClose==="outside"&&D||I._menu.contains(a.target)&&(a.type==="keyup"&&a.key==="Tab"||/input|select|option|textarea|form/i.test(a.target.tagName)))continue;const L={relatedTarget:I._element};a.type==="click"&&(L.clickEvent=a),I._completeHide(L)}}static dataApiKeydownHandler(a){const u=/input|textarea/i.test(a.target.tagName),m=a.key==="Escape",I=[po,ps].includes(a.key);if(!I&&!m||u&&!m)return;a.preventDefault();const b=this.matches(l)?this:W.prev(this,l)[0]||W.next(this,l)[0]||W.findOne(l,a.delegateTarget.parentNode),D=We.getOrCreateInstance(b);if(I)return a.stopPropagation(),D.show(),void D._selectMenuItem(a);D._isShown()&&(a.stopPropagation(),D.hide(),b.focus())}}x.on(document,ms,l,We.dataApiKeydownHandler),x.on(document,ms,_,We.dataApiKeydownHandler),x.on(document,gs,We.clearMenus),x.on(document,Wn,We.clearMenus),x.on(document,gs,l,function(p){p.preventDefault(),We.getOrCreateInstance(this).toggle()}),oe(We);const gt="backdrop",Ri="show",gr=`mousedown.bs.${gt}`,kp={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Op={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class bl extends Mt{constructor(a){super(),this._config=this._getConfig(a),this._isAppended=!1,this._element=null}static get Default(){return kp}static get DefaultType(){return Op}static get NAME(){return gt}show(a){if(!this._config.isVisible)return void X(a);this._append();const u=this._getElement();this._config.isAnimated&&V(u),u.classList.add(Ri),this._emulateAnimation(()=>{X(a)})}hide(a){this._config.isVisible?(this._getElement().classList.remove(Ri),this._emulateAnimation(()=>{this.dispose(),X(a)})):X(a)}dispose(){this._isAppended&&(x.off(this._element,gr),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const a=document.createElement("div");a.className=this._config.className,this._config.isAnimated&&a.classList.add("fade"),this._element=a}return this._element}_configAfterMerge(a){return a.rootElement=f(a.rootElement),a}_append(){if(this._isAppended)return;const a=this._getElement();this._config.rootElement.append(a),x.on(a,gr,()=>{X(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(a){ue(a,this._getElement(),this._config.isAnimated)}}const _o=".bs.focustrap",Dp=`focusin${_o}`,Np=`keydown.tab${_o}`,Al="backward",Vp={autofocus:!0,trapElement:null},Lp={autofocus:"boolean",trapElement:"element"};class Cl extends Mt{constructor(a){super(),this._config=this._getConfig(a),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Vp}static get DefaultType(){return Lp}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),x.off(document,_o),x.on(document,Dp,a=>this._handleFocusin(a)),x.on(document,Np,a=>this._handleKeydown(a)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,x.off(document,_o))}_handleFocusin(a){const{trapElement:u}=this._config;if(a.target===document||a.target===u||u.contains(a.target))return;const m=W.focusableChildren(u);m.length===0?u.focus():this._lastTabNavDirection===Al?m[m.length-1].focus():m[0].focus()}_handleKeydown(a){a.key==="Tab"&&(this._lastTabNavDirection=a.shiftKey?Al:"forward")}}const Sl=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Rl=".sticky-top",yo="padding-right",Pl="margin-right";class Ma{constructor(){this._element=document.body}getWidth(){const a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}hide(){const a=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,yo,u=>u+a),this._setElementAttributes(Sl,yo,u=>u+a),this._setElementAttributes(Rl,Pl,u=>u-a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,yo),this._resetElementAttributes(Sl,yo),this._resetElementAttributes(Rl,Pl)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(a,u,m){const I=this.getWidth();this._applyManipulationCallback(a,b=>{if(b!==this._element&&window.innerWidth>b.clientWidth+I)return;this._saveInitialAttribute(b,u);const D=window.getComputedStyle(b).getPropertyValue(u);b.style.setProperty(u,`${m(Number.parseFloat(D))}px`)})}_saveInitialAttribute(a,u){const m=a.style.getPropertyValue(u);m&&xt.setDataAttribute(a,u,m)}_resetElementAttributes(a,u){this._applyManipulationCallback(a,m=>{const I=xt.getDataAttribute(m,u);I!==null?(xt.removeDataAttribute(m,u),m.style.setProperty(u,I)):m.style.removeProperty(u)})}_applyManipulationCallback(a,u){if(h(a))u(a);else for(const m of W.find(a,this._element))u(m)}}const Pt=".bs.modal",xp=`hide${Pt}`,Mp=`hidePrevented${Pt}`,kl=`hidden${Pt}`,Ol=`show${Pt}`,Fp=`shown${Pt}`,Up=`resize${Pt}`,$p=`click.dismiss${Pt}`,Bp=`mousedown.dismiss${Pt}`,jp=`keydown.dismiss${Pt}`,qp=`click${Pt}.data-api`,Dl="modal-open",Nl="show",Fa="modal-static",Hp={backdrop:!0,focus:!0,keyboard:!0},zp={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Pi extends vt{constructor(a,u){super(a,u),this._dialog=W.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ma,this._addEventListeners()}static get Default(){return Hp}static get DefaultType(){return zp}static get NAME(){return"modal"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||this._isTransitioning||x.trigger(this._element,Ol,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Dl),this._adjustDialog(),this._backdrop.show(()=>this._showElement(a)))}hide(){this._isShown&&!this._isTransitioning&&(x.trigger(this._element,xp).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Nl),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){x.off(window,Pt),x.off(this._dialog,Pt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new bl({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Cl({trapElement:this._element})}_showElement(a){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const u=W.findOne(".modal-body",this._dialog);u&&(u.scrollTop=0),V(this._element),this._element.classList.add(Nl),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,x.trigger(this._element,Fp,{relatedTarget:a})},this._dialog,this._isAnimated())}_addEventListeners(){x.on(this._element,jp,a=>{a.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),x.on(window,Up,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),x.on(this._element,Bp,a=>{x.one(this._element,$p,u=>{this._element===a.target&&this._element===u.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Dl),this._resetAdjustments(),this._scrollBar.reset(),x.trigger(this._element,kl)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(x.trigger(this._element,Mp).defaultPrevented)return;const a=this._element.scrollHeight>document.documentElement.clientHeight,u=this._element.style.overflowY;u==="hidden"||this._element.classList.contains(Fa)||(a||(this._element.style.overflowY="hidden"),this._element.classList.add(Fa),this._queueCallback(()=>{this._element.classList.remove(Fa),this._queueCallback(()=>{this._element.style.overflowY=u},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const a=this._element.scrollHeight>document.documentElement.clientHeight,u=this._scrollBar.getWidth(),m=u>0;if(m&&!a){const I=$()?"paddingLeft":"paddingRight";this._element.style[I]=`${u}px`}if(!m&&a){const I=$()?"paddingRight":"paddingLeft";this._element.style[I]=`${u}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(a,u){return this.each(function(){const m=Pi.getOrCreateInstance(this,a);if(typeof a=="string"){if(m[a]===void 0)throw new TypeError(`No method named "${a}"`);m[a](u)}})}}x.on(document,qp,'[data-bs-toggle="modal"]',function(p){const a=W.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&p.preventDefault(),x.one(a,Ol,m=>{m.defaultPrevented||x.one(a,kl,()=>{g(this)&&this.focus()})});const u=W.findOne(".modal.show");u&&Pi.getInstance(u).hide(),Pi.getOrCreateInstance(a).toggle(this)}),Gi(Pi),oe(Pi);const In=".bs.offcanvas",Vl=".data-api",Wp=`load${In}${Vl}`,Ll="show",xl="showing",Ml="hiding",Fl=".offcanvas.show",Kp=`show${In}`,Gp=`shown${In}`,Qp=`hide${In}`,Ul=`hidePrevented${In}`,$l=`hidden${In}`,Xp=`resize${In}`,Yp=`click${In}${Vl}`,Jp=`keydown.dismiss${In}`,Zp={backdrop:!0,keyboard:!0,scroll:!1},eg={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class bn extends vt{constructor(a,u){super(a,u),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Zp}static get DefaultType(){return eg}static get NAME(){return"offcanvas"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||x.trigger(this._element,Kp,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ma().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(xl),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ll),this._element.classList.remove(xl),x.trigger(this._element,Gp,{relatedTarget:a})},this._element,!0))}hide(){this._isShown&&(x.trigger(this._element,Qp).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ml),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Ll,Ml),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ma().reset(),x.trigger(this._element,$l)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const a=!!this._config.backdrop;return new bl({className:"offcanvas-backdrop",isVisible:a,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:a?()=>{this._config.backdrop!=="static"?this.hide():x.trigger(this._element,Ul)}:null})}_initializeFocusTrap(){return new Cl({trapElement:this._element})}_addEventListeners(){x.on(this._element,Jp,a=>{a.key==="Escape"&&(this._config.keyboard?this.hide():x.trigger(this._element,Ul))})}static jQueryInterface(a){return this.each(function(){const u=bn.getOrCreateInstance(this,a);if(typeof a=="string"){if(u[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);u[a](this)}})}}x.on(document,Yp,'[data-bs-toggle="offcanvas"]',function(p){const a=W.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&p.preventDefault(),y(this))return;x.one(a,$l,()=>{g(this)&&this.focus()});const u=W.findOne(Fl);u&&u!==a&&bn.getInstance(u).hide(),bn.getOrCreateInstance(a).toggle(this)}),x.on(window,Wp,()=>{for(const p of W.find(Fl))bn.getOrCreateInstance(p).show()}),x.on(window,Xp,()=>{for(const p of W.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(p).position!=="fixed"&&bn.getOrCreateInstance(p).hide()}),Gi(bn),oe(bn);const Bl={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},tg=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),ng=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,ig=(p,a)=>{const u=p.nodeName.toLowerCase();return a.includes(u)?!tg.has(u)||!!ng.test(p.nodeValue):a.filter(m=>m instanceof RegExp).some(m=>m.test(u))},rg={allowList:Bl,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},sg={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},og={entry:"(string|element|function|null)",selector:"(string|element)"};class ag extends Mt{constructor(a){super(),this._config=this._getConfig(a)}static get Default(){return rg}static get DefaultType(){return sg}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(a=>this._resolvePossibleFunction(a)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(a){return this._checkContent(a),this._config.content={...this._config.content,...a},this}toHtml(){const a=document.createElement("div");a.innerHTML=this._maybeSanitize(this._config.template);for(const[I,b]of Object.entries(this._config.content))this._setContent(a,b,I);const u=a.children[0],m=this._resolvePossibleFunction(this._config.extraClass);return m&&u.classList.add(...m.split(" ")),u}_typeCheckConfig(a){super._typeCheckConfig(a),this._checkContent(a.content)}_checkContent(a){for(const[u,m]of Object.entries(a))super._typeCheckConfig({selector:u,entry:m},og)}_setContent(a,u,m){const I=W.findOne(m,a);I&&((u=this._resolvePossibleFunction(u))?h(u)?this._putElementInTemplate(f(u),I):this._config.html?I.innerHTML=this._maybeSanitize(u):I.textContent=u:I.remove())}_maybeSanitize(a){return this._config.sanitize?function(u,m,I){if(!u.length)return u;if(I&&typeof I=="function")return I(u);const b=new window.DOMParser().parseFromString(u,"text/html"),D=[].concat(...b.body.querySelectorAll("*"));for(const L of D){const F=L.nodeName.toLowerCase();if(!Object.keys(m).includes(F)){L.remove();continue}const H=[].concat(...L.attributes),z=[].concat(m["*"]||[],m[F]||[]);for(const B of H)ig(B,z)||L.removeAttribute(B.nodeName)}return b.body.innerHTML}(a,this._config.allowList,this._config.sanitizeFn):a}_resolvePossibleFunction(a){return X(a,[void 0,this])}_putElementInTemplate(a,u){if(this._config.html)return u.innerHTML="",void u.append(a);u.textContent=a.textContent}}const cg=new Set(["sanitize","allowList","sanitizeFn"]),Ua="fade",vo="show",lg=".tooltip-inner",jl=".modal",ql="hide.bs.modal",_s="hover",$a="focus",ug={AUTO:"auto",TOP:"top",RIGHT:$()?"left":"right",BOTTOM:"bottom",LEFT:$()?"right":"left"},hg={allowList:Bl,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},dg={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ki extends vt{constructor(a,u){if(Si===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(a,u),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return hg}static get DefaultType(){return dg}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),x.off(this._element.closest(jl),ql,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const a=x.trigger(this._element,this.constructor.eventName("show")),u=(A(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(a.defaultPrevented||!u)return;this._disposePopper();const m=this._getTipElement();this._element.setAttribute("aria-describedby",m.getAttribute("id"));const{container:I}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(I.append(m),x.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(m),m.classList.add(vo),"ontouchstart"in document.documentElement)for(const b of[].concat(...document.body.children))x.on(b,"mouseover",R);this._queueCallback(()=>{x.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!x.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(vo),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))x.off(a,"mouseover",R);this._activeTrigger.click=!1,this._activeTrigger[$a]=!1,this._activeTrigger[_s]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),x.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(a){const u=this._getTemplateFactory(a).toHtml();if(!u)return null;u.classList.remove(Ua,vo),u.classList.add(`bs-${this.constructor.NAME}-auto`);const m=(I=>{do I+=Math.floor(1e6*Math.random());while(document.getElementById(I));return I})(this.constructor.NAME).toString();return u.setAttribute("id",m),this._isAnimated()&&u.classList.add(Ua),u}setContent(a){this._newContent=a,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(a){return this._templateFactory?this._templateFactory.changeContent(a):this._templateFactory=new ag({...this._config,content:a,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[lg]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(a){return this.constructor.getOrCreateInstance(a.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ua)}_isShown(){return this.tip&&this.tip.classList.contains(vo)}_createPopper(a){const u=X(this._config.placement,[this,a,this._element]),m=ug[u.toUpperCase()];return fr(this._element,a,this._getPopperConfig(m))}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(u=>Number.parseInt(u,10)):typeof a=="function"?u=>a(u,this._element):a}_resolvePossibleFunction(a){return X(a,[this._element,this._element])}_getPopperConfig(a){const u={placement:a,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:m=>{this._getTipElement().setAttribute("data-popper-placement",m.state.placement)}}]};return{...u,...X(this._config.popperConfig,[void 0,u])}}_setListeners(){const a=this._config.trigger.split(" ");for(const u of a)if(u==="click")x.on(this._element,this.constructor.eventName("click"),this._config.selector,m=>{this._initializeOnDelegatedTarget(m).toggle()});else if(u!=="manual"){const m=u===_s?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),I=u===_s?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");x.on(this._element,m,this._config.selector,b=>{const D=this._initializeOnDelegatedTarget(b);D._activeTrigger[b.type==="focusin"?$a:_s]=!0,D._enter()}),x.on(this._element,I,this._config.selector,b=>{const D=this._initializeOnDelegatedTarget(b);D._activeTrigger[b.type==="focusout"?$a:_s]=D._element.contains(b.relatedTarget),D._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},x.on(this._element.closest(jl),ql,this._hideModalHandler)}_fixTitle(){const a=this._element.getAttribute("title");a&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",a),this._element.setAttribute("data-bs-original-title",a),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(a,u){clearTimeout(this._timeout),this._timeout=setTimeout(a,u)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(a){const u=xt.getDataAttributes(this._element);for(const m of Object.keys(u))cg.has(m)&&delete u[m];return a={...u,...typeof a=="object"&&a?a:{}},a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a.container=a.container===!1?document.body:f(a.container),typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),typeof a.title=="number"&&(a.title=a.title.toString()),typeof a.content=="number"&&(a.content=a.content.toString()),a}_getDelegateConfig(){const a={};for(const[u,m]of Object.entries(this._config))this.constructor.Default[u]!==m&&(a[u]=m);return a.selector=!1,a.trigger="manual",a}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(a){return this.each(function(){const u=ki.getOrCreateInstance(this,a);if(typeof a=="string"){if(u[a]===void 0)throw new TypeError(`No method named "${a}"`);u[a]()}})}}oe(ki);const fg=".popover-header",pg=".popover-body",gg={...ki.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},mg={...ki.DefaultType,content:"(null|string|element|function)"};class wo extends ki{static get Default(){return gg}static get DefaultType(){return mg}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[fg]:this._getTitle(),[pg]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(a){return this.each(function(){const u=wo.getOrCreateInstance(this,a);if(typeof a=="string"){if(u[a]===void 0)throw new TypeError(`No method named "${a}"`);u[a]()}})}}oe(wo);const Ba=".bs.scrollspy",_g=`activate${Ba}`,Hl=`click${Ba}`,yg=`load${Ba}.data-api`,mr="active",ja="[href]",zl=".nav-link",vg=`${zl}, .nav-item > ${zl}, .list-group-item`,wg={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Eg={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ys extends vt{constructor(a,u){super(a,u),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return wg}static get DefaultType(){return Eg}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const a of this._observableSections.values())this._observer.observe(a)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(a){return a.target=f(a.target)||document.body,a.rootMargin=a.offset?`${a.offset}px 0px -30%`:a.rootMargin,typeof a.threshold=="string"&&(a.threshold=a.threshold.split(",").map(u=>Number.parseFloat(u))),a}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(x.off(this._config.target,Hl),x.on(this._config.target,Hl,ja,a=>{const u=this._observableSections.get(a.target.hash);if(u){a.preventDefault();const m=this._rootElement||window,I=u.offsetTop-this._element.offsetTop;if(m.scrollTo)return void m.scrollTo({top:I,behavior:"smooth"});m.scrollTop=I}}))}_getNewObserver(){const a={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(u=>this._observerCallback(u),a)}_observerCallback(a){const u=D=>this._targetLinks.get(`#${D.target.id}`),m=D=>{this._previousScrollData.visibleEntryTop=D.target.offsetTop,this._process(u(D))},I=(this._rootElement||document.documentElement).scrollTop,b=I>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=I;for(const D of a){if(!D.isIntersecting){this._activeTarget=null,this._clearActiveClass(u(D));continue}const L=D.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(b&&L){if(m(D),!I)return}else b||L||m(D)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const a=W.find(ja,this._config.target);for(const u of a){if(!u.hash||y(u))continue;const m=W.findOne(decodeURI(u.hash),this._element);g(m)&&(this._targetLinks.set(decodeURI(u.hash),u),this._observableSections.set(u.hash,m))}}_process(a){this._activeTarget!==a&&(this._clearActiveClass(this._config.target),this._activeTarget=a,a.classList.add(mr),this._activateParents(a),x.trigger(this._element,_g,{relatedTarget:a}))}_activateParents(a){if(a.classList.contains("dropdown-item"))W.findOne(".dropdown-toggle",a.closest(".dropdown")).classList.add(mr);else for(const u of W.parents(a,".nav, .list-group"))for(const m of W.prev(u,vg))m.classList.add(mr)}_clearActiveClass(a){a.classList.remove(mr);const u=W.find(`${ja}.${mr}`,a);for(const m of u)m.classList.remove(mr)}static jQueryInterface(a){return this.each(function(){const u=ys.getOrCreateInstance(this,a);if(typeof a=="string"){if(u[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);u[a]()}})}}x.on(window,yg,()=>{for(const p of W.find('[data-bs-spy="scroll"]'))ys.getOrCreateInstance(p)}),oe(ys);const Oi=".bs.tab",Tg=`hide${Oi}`,Ig=`hidden${Oi}`,bg=`show${Oi}`,Ag=`shown${Oi}`,Cg=`click${Oi}`,Sg=`keydown${Oi}`,Rg=`load${Oi}`,Pg="ArrowLeft",Wl="ArrowRight",kg="ArrowUp",Kl="ArrowDown",qa="Home",Gl="End",Di="active",Ql="fade",Ha="show",Xl=".dropdown-toggle",za=`:not(${Xl})`,Yl='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Wa=`.nav-link${za}, .list-group-item${za}, [role="tab"]${za}, ${Yl}`,Og=`.${Di}[data-bs-toggle="tab"], .${Di}[data-bs-toggle="pill"], .${Di}[data-bs-toggle="list"]`;class Ni extends vt{constructor(a){super(a),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),x.on(this._element,Sg,u=>this._keydown(u)))}static get NAME(){return"tab"}show(){const a=this._element;if(this._elemIsActive(a))return;const u=this._getActiveElem(),m=u?x.trigger(u,Tg,{relatedTarget:a}):null;x.trigger(a,bg,{relatedTarget:u}).defaultPrevented||m&&m.defaultPrevented||(this._deactivate(u,a),this._activate(a,u))}_activate(a,u){a&&(a.classList.add(Di),this._activate(W.getElementFromSelector(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.removeAttribute("tabindex"),a.setAttribute("aria-selected",!0),this._toggleDropDown(a,!0),x.trigger(a,Ag,{relatedTarget:u})):a.classList.add(Ha)},a,a.classList.contains(Ql)))}_deactivate(a,u){a&&(a.classList.remove(Di),a.blur(),this._deactivate(W.getElementFromSelector(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.setAttribute("aria-selected",!1),a.setAttribute("tabindex","-1"),this._toggleDropDown(a,!1),x.trigger(a,Ig,{relatedTarget:u})):a.classList.remove(Ha)},a,a.classList.contains(Ql)))}_keydown(a){if(![Pg,Wl,kg,Kl,qa,Gl].includes(a.key))return;a.stopPropagation(),a.preventDefault();const u=this._getChildren().filter(I=>!y(I));let m;if([qa,Gl].includes(a.key))m=u[a.key===qa?0:u.length-1];else{const I=[Wl,Kl].includes(a.key);m=Ie(u,a.target,I,!0)}m&&(m.focus({preventScroll:!0}),Ni.getOrCreateInstance(m).show())}_getChildren(){return W.find(Wa,this._parent)}_getActiveElem(){return this._getChildren().find(a=>this._elemIsActive(a))||null}_setInitialAttributes(a,u){this._setAttributeIfNotExists(a,"role","tablist");for(const m of u)this._setInitialAttributesOnChild(m)}_setInitialAttributesOnChild(a){a=this._getInnerElement(a);const u=this._elemIsActive(a),m=this._getOuterElement(a);a.setAttribute("aria-selected",u),m!==a&&this._setAttributeIfNotExists(m,"role","presentation"),u||a.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(a,"role","tab"),this._setInitialAttributesOnTargetPanel(a)}_setInitialAttributesOnTargetPanel(a){const u=W.getElementFromSelector(a);u&&(this._setAttributeIfNotExists(u,"role","tabpanel"),a.id&&this._setAttributeIfNotExists(u,"aria-labelledby",`${a.id}`))}_toggleDropDown(a,u){const m=this._getOuterElement(a);if(!m.classList.contains("dropdown"))return;const I=(b,D)=>{const L=W.findOne(b,m);L&&L.classList.toggle(D,u)};I(Xl,Di),I(".dropdown-menu",Ha),m.setAttribute("aria-expanded",u)}_setAttributeIfNotExists(a,u,m){a.hasAttribute(u)||a.setAttribute(u,m)}_elemIsActive(a){return a.classList.contains(Di)}_getInnerElement(a){return a.matches(Wa)?a:W.findOne(Wa,a)}_getOuterElement(a){return a.closest(".nav-item, .list-group-item")||a}static jQueryInterface(a){return this.each(function(){const u=Ni.getOrCreateInstance(this);if(typeof a=="string"){if(u[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);u[a]()}})}}x.on(document,Cg,Yl,function(p){["A","AREA"].includes(this.tagName)&&p.preventDefault(),y(this)||Ni.getOrCreateInstance(this).show()}),x.on(window,Rg,()=>{for(const p of W.find(Og))Ni.getOrCreateInstance(p)}),oe(Ni);const Kn=".bs.toast",Dg=`mouseover${Kn}`,Ng=`mouseout${Kn}`,Vg=`focusin${Kn}`,Lg=`focusout${Kn}`,xg=`hide${Kn}`,Mg=`hidden${Kn}`,Fg=`show${Kn}`,Ug=`shown${Kn}`,Jl="hide",Eo="show",To="showing",$g={animation:"boolean",autohide:"boolean",delay:"number"},Bg={animation:!0,autohide:!0,delay:5e3};class vs extends vt{constructor(a,u){super(a,u),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Bg}static get DefaultType(){return $g}static get NAME(){return"toast"}show(){x.trigger(this._element,Fg).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Jl),V(this._element),this._element.classList.add(Eo,To),this._queueCallback(()=>{this._element.classList.remove(To),x.trigger(this._element,Ug),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(x.trigger(this._element,xg).defaultPrevented||(this._element.classList.add(To),this._queueCallback(()=>{this._element.classList.add(Jl),this._element.classList.remove(To,Eo),x.trigger(this._element,Mg)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Eo),super.dispose()}isShown(){return this._element.classList.contains(Eo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(a,u){switch(a.type){case"mouseover":case"mouseout":this._hasMouseInteraction=u;break;case"focusin":case"focusout":this._hasKeyboardInteraction=u}if(u)return void this._clearTimeout();const m=a.relatedTarget;this._element===m||this._element.contains(m)||this._maybeScheduleHide()}_setListeners(){x.on(this._element,Dg,a=>this._onInteraction(a,!0)),x.on(this._element,Ng,a=>this._onInteraction(a,!1)),x.on(this._element,Vg,a=>this._onInteraction(a,!0)),x.on(this._element,Lg,a=>this._onInteraction(a,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(a){return this.each(function(){const u=vs.getOrCreateInstance(this,a);if(typeof a=="string"){if(u[a]===void 0)throw new TypeError(`No method named "${a}"`);u[a](this)}})}}return Gi(vs),oe(vs),{Alert:dn,Button:fn,Carousel:mn,Collapse:st,Dropdown:We,Modal:Pi,Offcanvas:bn,Popover:wo,ScrollSpy:ys,Tab:Ni,Toast:vs,Tooltip:ki}})}(Do)),Do.exports}Yg();const Jg=()=>{};var du={};/**
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
 */const Gh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Zg=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],c=n[t++],h=n[t++],f=((r&7)<<18|(o&63)<<12|(c&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(f>>10)),e[i++]=String.fromCharCode(56320+(f&1023))}else{const o=n[t++],c=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|c&63)}}return e.join("")},Qh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const o=n[r],c=r+1<n.length,h=c?n[r+1]:0,f=r+2<n.length,g=f?n[r+2]:0,y=o>>2,A=(o&3)<<4|h>>4;let R=(h&15)<<2|g>>6,V=g&63;f||(V=64,c||(R=64)),i.push(t[y],t[A],t[R],t[V])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],h=r<n.length?t[n.charAt(r)]:0;++r;const g=r<n.length?t[n.charAt(r)]:64;++r;const A=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||h==null||g==null||A==null)throw new em;const R=o<<2|h>>4;if(i.push(R),g!==64){const V=h<<4&240|g>>2;if(i.push(V),A!==64){const j=g<<6&192|A;i.push(j)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class em extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tm=function(n){const e=Gh(n);return Qh.encodeByteArray(e,!0)},Ho=function(n){return tm(n).replace(/\./g,"")},Xh=function(n){try{return Qh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const im=()=>nm().__FIREBASE_DEFAULTS__,rm=()=>{if(typeof process>"u"||typeof du>"u")return;const n=du.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xh(n[1]);return e&&JSON.parse(e)},ca=()=>{try{return Jg()||im()||rm()||sm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yh=n=>{var e,t;return(t=(e=ca())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},om=n=>{const e=Yh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Jh=()=>{var n;return(n=ca())===null||n===void 0?void 0:n.config},Zh=n=>{var e;return(e=ca())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class am{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function xr(n){return n.endsWith(".cloudworkstations.dev")}async function ed(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function cm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ho(JSON.stringify(t)),Ho(JSON.stringify(c)),""].join(".")}const bs={};function lm(){const n={prod:[],emulator:[]};for(const e of Object.keys(bs))bs[e]?n.emulator.push(e):n.prod.push(e);return n}function um(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let fu=!1;function td(n,e){if(typeof window>"u"||typeof document>"u"||!xr(window.location.host)||bs[n]===e||bs[n]||fu)return;bs[n]=e;function t(R){return`__firebase__banner__${R}`}const i="__firebase__banner",o=lm().prod.length>0;function c(){const R=document.getElementById(i);R&&R.remove()}function h(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function f(R,V){R.setAttribute("width","24"),R.setAttribute("id",V),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function g(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{fu=!0,c()},R}function y(R,V){R.setAttribute("id",V),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function A(){const R=um(i),V=t("text"),j=document.getElementById(V)||document.createElement("span"),G=t("learnmore"),$=document.getElementById(G)||document.createElement("a"),oe=t("preprendIcon"),X=document.getElementById(oe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const ue=R.element;h(ue),y($,G);const Ie=g();f(X,oe),ue.append(X,j,$,Ie),document.body.appendChild(ue)}o?(j.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(X.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,j.innerText="Preview backend running in this workspace."),j.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function dm(){var n;const e=(n=ca())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gm(){const n=rt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function mm(){return!dm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function id(){try{return typeof indexedDB=="object"}catch{return!1}}function rd(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}function _m(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ym="FirebaseError";class zt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=ym,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],c=o?vm(o,i):"Error",h=`${this.serviceName}: ${c} (${r}).`;return new zt(r,h,i)}}function vm(n,e){return n.replace(wm,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const wm=/\{\$([^}]+)}/g;function Em(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ai(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const o=n[r],c=e[r];if(pu(o)&&pu(c)){if(!ai(o,c))return!1}else if(o!==c)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function pu(n){return n!==null&&typeof n=="object"}/**
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
 */function Fs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Tm(n,e){const t=new Im(n,e);return t.subscribe.bind(t)}class Im{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");bm(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Xa),r.error===void 0&&(r.error=Xa),r.complete===void 0&&(r.complete=Xa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xa(){}/**
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
 */const Am=1e3,Cm=2,Sm=4*60*60*1e3,Rm=.5;function gu(n,e=Am,t=Cm){const i=e*Math.pow(t,n),r=Math.round(Rm*i*(Math.random()-.5)*2);return Math.min(Sm,i+r)}/**
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
 */function Vt(n){return n&&n._delegate?n._delegate:n}class Ht{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Li="[DEFAULT]";/**
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
 */class Pm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new am;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Om(e))try{this.getOrInitializeService({instanceIdentifier:Li})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=Li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Li){return this.instances.has(e)}getOptions(e=Li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);i===h&&c.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const c=this.instances.get(r);return c&&e(c,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:km(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Li){return this.component?this.component.multipleInstances?e:Li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function km(n){return n===Li?void 0:n}function Om(n){return n.instantiationMode==="EAGER"}/**
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
 */class Dm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(le||(le={}));const Nm={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Vm=le.INFO,Lm={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},xm=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=Lm[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class la{constructor(e){this.name=e,this._logLevel=Vm,this._logHandler=xm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Mm=(n,e)=>e.some(t=>n instanceof t);let mu,_u;function Fm(){return mu||(mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Um(){return _u||(_u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sd=new WeakMap,hc=new WeakMap,od=new WeakMap,Ya=new WeakMap,Fc=new WeakMap;function $m(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{t(ni(n.result)),r()},c=()=>{i(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&sd.set(t,n)}).catch(()=>{}),Fc.set(e,n),e}function Bm(n){if(hc.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{t(),r()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});hc.set(n,e)}let dc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||od.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ni(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function jm(n){dc=n(dc)}function qm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ja(this),e,...t);return od.set(i,e.sort?e.sort():[e]),ni(i)}:Um().includes(n)?function(...e){return n.apply(Ja(this),e),ni(sd.get(this))}:function(...e){return ni(n.apply(Ja(this),e))}}function Hm(n){return typeof n=="function"?qm(n):(n instanceof IDBTransaction&&Bm(n),Mm(n,Fm())?new Proxy(n,dc):n)}function ni(n){if(n instanceof IDBRequest)return $m(n);if(Ya.has(n))return Ya.get(n);const e=Hm(n);return e!==n&&(Ya.set(n,e),Fc.set(e,n)),e}const Ja=n=>Fc.get(n);function ad(n,e,{blocked:t,upgrade:i,blocking:r,terminated:o}={}){const c=indexedDB.open(n,e),h=ni(c);return i&&c.addEventListener("upgradeneeded",f=>{i(ni(c.result),f.oldVersion,f.newVersion,ni(c.transaction),f)}),t&&c.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),r&&f.addEventListener("versionchange",g=>r(g.oldVersion,g.newVersion,g))}).catch(()=>{}),h}const zm=["get","getKey","getAll","getAllKeys","count"],Wm=["put","add","delete","clear"],Za=new Map;function yu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Za.get(e))return Za.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=Wm.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||zm.includes(t)))return;const o=async function(c,...h){const f=this.transaction(c,r?"readwrite":"readonly");let g=f.store;return i&&(g=g.index(h.shift())),(await Promise.all([g[t](...h),r&&f.done]))[0]};return Za.set(e,o),o}jm(n=>({...n,get:(e,t,i)=>yu(e,t)||n.get(e,t,i),has:(e,t)=>!!yu(e,t)||n.has(e,t)}));/**
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
 */class Km{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gm(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Gm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fc="@firebase/app",vu="0.13.1";/**
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
 */const Sn=new la("@firebase/app"),Qm="@firebase/app-compat",Xm="@firebase/analytics-compat",Ym="@firebase/analytics",Jm="@firebase/app-check-compat",Zm="@firebase/app-check",e_="@firebase/auth",t_="@firebase/auth-compat",n_="@firebase/database",i_="@firebase/data-connect",r_="@firebase/database-compat",s_="@firebase/functions",o_="@firebase/functions-compat",a_="@firebase/installations",c_="@firebase/installations-compat",l_="@firebase/messaging",u_="@firebase/messaging-compat",h_="@firebase/performance",d_="@firebase/performance-compat",f_="@firebase/remote-config",p_="@firebase/remote-config-compat",g_="@firebase/storage",m_="@firebase/storage-compat",__="@firebase/firestore",y_="@firebase/ai",v_="@firebase/firestore-compat",w_="firebase",E_="11.9.0";/**
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
 */const pc="[DEFAULT]",T_={[fc]:"fire-core",[Qm]:"fire-core-compat",[Ym]:"fire-analytics",[Xm]:"fire-analytics-compat",[Zm]:"fire-app-check",[Jm]:"fire-app-check-compat",[e_]:"fire-auth",[t_]:"fire-auth-compat",[n_]:"fire-rtdb",[i_]:"fire-data-connect",[r_]:"fire-rtdb-compat",[s_]:"fire-fn",[o_]:"fire-fn-compat",[a_]:"fire-iid",[c_]:"fire-iid-compat",[l_]:"fire-fcm",[u_]:"fire-fcm-compat",[h_]:"fire-perf",[d_]:"fire-perf-compat",[f_]:"fire-rc",[p_]:"fire-rc-compat",[g_]:"fire-gcs",[m_]:"fire-gcs-compat",[__]:"fire-fst",[v_]:"fire-fst-compat",[y_]:"fire-vertex","fire-js":"fire-js",[w_]:"fire-js-all"};/**
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
 */const zo=new Map,I_=new Map,gc=new Map;function wu(n,e){try{n.container.addComponent(e)}catch(t){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function cn(n){const e=n.name;if(gc.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;gc.set(e,n);for(const t of zo.values())wu(t,n);for(const t of I_.values())wu(t,n);return!0}function zi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const b_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ii=new Hi("app","Firebase",b_);/**
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
 */class A_{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ii.create("app-deleted",{appName:this._name})}}/**
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
 */const Mr=E_;function cd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:pc,automaticDataCollectionEnabled:!0},e),r=i.name;if(typeof r!="string"||!r)throw ii.create("bad-app-name",{appName:String(r)});if(t||(t=Jh()),!t)throw ii.create("no-options");const o=zo.get(r);if(o){if(ai(t,o.options)&&ai(i,o.config))return o;throw ii.create("duplicate-app",{appName:r})}const c=new Dm(r);for(const f of gc.values())c.addComponent(f);const h=new A_(t,i,c);return zo.set(r,h),h}function Uc(n=pc){const e=zo.get(n);if(!e&&n===pc&&Jh())return cd();if(!e)throw ii.create("no-app",{appName:n});return e}function Nt(n,e,t){var i;let r=(i=T_[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const o=r.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const h=[`Unable to register library "${r}" with version "${e}":`];o&&h.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(h.join(" "));return}cn(new Ht(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const C_="firebase-heartbeat-database",S_=1,Os="firebase-heartbeat-store";let ec=null;function ld(){return ec||(ec=ad(C_,S_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Os)}catch(t){console.warn(t)}}}}).catch(n=>{throw ii.create("idb-open",{originalErrorMessage:n.message})})),ec}async function R_(n){try{const t=(await ld()).transaction(Os),i=await t.objectStore(Os).get(ud(n));return await t.done,i}catch(e){if(e instanceof zt)Sn.warn(e.message);else{const t=ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(t.message)}}}async function Eu(n,e){try{const i=(await ld()).transaction(Os,"readwrite");await i.objectStore(Os).put(e,ud(n)),await i.done}catch(t){if(t instanceof zt)Sn.warn(t.message);else{const i=ii.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Sn.warn(i.message)}}}function ud(n){return`${n.name}!${n.options.appId}`}/**
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
 */const P_=1024,k_=30;class O_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new N_(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Tu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>k_){const c=V_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Sn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tu(),{heartbeatsToSend:i,unsentEntries:r}=D_(this._heartbeatsCache.heartbeats),o=Ho(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Sn.warn(t),""}}}function Tu(){return new Date().toISOString().substring(0,10)}function D_(n,e=P_){const t=[];let i=n.slice();for(const r of n){const o=t.find(c=>c.agent===r.agent);if(o){if(o.dates.push(r.date),Iu(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Iu(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class N_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return id()?rd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await R_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Eu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Eu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Iu(n){return Ho(JSON.stringify({version:2,heartbeats:n})).length}function V_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function L_(n){cn(new Ht("platform-logger",e=>new Km(e),"PRIVATE")),cn(new Ht("heartbeat",e=>new O_(e),"PRIVATE")),Nt(fc,vu,n),Nt(fc,vu,"esm2017"),Nt("fire-js","")}L_("");var x_="firebase",M_="11.9.1";/**
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
 */Nt(x_,M_,"app");function $c(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function hd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F_=hd,dd=new Hi("auth","Firebase",hd());/**
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
 */const Wo=new la("@firebase/auth");function U_(n,...e){Wo.logLevel<=le.WARN&&Wo.warn(`Auth (${Mr}): ${n}`,...e)}function No(n,...e){Wo.logLevel<=le.ERROR&&Wo.error(`Auth (${Mr}): ${n}`,...e)}/**
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
 */function Rn(n,...e){throw Bc(n,...e)}function rn(n,...e){return Bc(n,...e)}function fd(n,e,t){const i=Object.assign(Object.assign({},F_()),{[e]:t});return new Hi("auth","Firebase",i).create(e,{appName:n.name})}function Fi(n){return fd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return dd.create(n,...e)}function J(n,e,...t){if(!n)throw Bc(e,...t)}function An(n){const e="INTERNAL ASSERTION FAILED: "+n;throw No(e),new Error(e)}function Pn(n,e){n||An(e)}/**
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
 */function mc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function $_(){return bu()==="http:"||bu()==="https:"}function bu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function B_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($_()||nd()||"connection"in navigator)?navigator.onLine:!0}function j_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Us{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pn(t>e,"Short delay should be less than long delay!"),this.isMobile=hm()||pm()}get(){return B_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jc(n,e){Pn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class pd{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const q_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const H_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],z_=new Us(3e4,6e4);function qc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Fr(n,e,t,i,r={}){return gd(n,r,async()=>{let o={},c={};i&&(e==="GET"?c=i:o={body:JSON.stringify(i)});const h=Fs(Object.assign({key:n.config.apiKey},c)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:f},o);return fm()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&xr(n.emulatorConfig.host)&&(g.credentials="include"),pd.fetch()(await md(n,n.config.apiHost,t,h),g)})}async function gd(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},q_),e);try{const r=new K_(n),o=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const c=await o.json();if("needConfirmation"in c)throw Co(n,"account-exists-with-different-credential",c);if(o.ok&&!("errorMessage"in c))return c;{const h=o.ok?c.errorMessage:c.error.message,[f,g]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Co(n,"credential-already-in-use",c);if(f==="EMAIL_EXISTS")throw Co(n,"email-already-in-use",c);if(f==="USER_DISABLED")throw Co(n,"user-disabled",c);const y=i[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw fd(n,y,g);Rn(n,y)}}catch(r){if(r instanceof zt)throw r;Rn(n,"network-request-failed",{message:String(r)})}}async function W_(n,e,t,i,r={}){const o=await Fr(n,e,t,i,r);return"mfaPendingCredential"in o&&Rn(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function md(n,e,t,i){const r=`${e}${t}?${i}`,o=n,c=o.config.emulator?jc(n.config,r):`${n.config.apiScheme}://${r}`;return H_.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(c).toString():c}class K_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(rn(this.auth,"network-request-failed")),z_.get())})}}function Co(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=rn(n,e,i);return r.customData._tokenResponse=t,r}/**
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
 */async function G_(n,e){return Fr(n,"POST","/v1/accounts:delete",e)}async function Ko(n,e){return Fr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function As(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Q_(n,e=!1){const t=Vt(n),i=await t.getIdToken(e),r=Hc(i);J(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,c=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:As(tc(r.auth_time)),issuedAtTime:As(tc(r.iat)),expirationTime:As(tc(r.exp)),signInProvider:c||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function tc(n){return Number(n)*1e3}function Hc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return No("JWT malformed, contained fewer than 3 sections"),null;try{const r=Xh(t);return r?JSON.parse(r):(No("Failed to decode base64 JWT payload"),null)}catch(r){return No("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Au(n){const e=Hc(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ds(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof zt&&X_(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function X_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Y_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _c{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Go(n){var e;const t=n.auth,i=await n.getIdToken(),r=await Ds(n,Ko(t,{idToken:i}));J(r==null?void 0:r.users.length,t,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const c=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?_d(o.providerUserInfo):[],h=Z_(n.providerData,c),f=n.isAnonymous,g=!(n.email&&o.passwordHash)&&!(h!=null&&h.length),y=f?g:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new _c(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,A)}async function J_(n){const e=Vt(n);await Go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Z_(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function _d(n){return n.map(e=>{var{providerId:t}=e,i=$c(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function ey(n,e){const t=await gd(n,{},async()=>{const i=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=n.config,c=await md(n,r,"/v1/token",`key=${o}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:h,body:i};return n.emulatorConfig&&xr(n.emulatorConfig.host)&&(f.credentials="include"),pd.fetch()(c,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ty(n,e){return Fr(n,"POST","/v2/accounts:revokeToken",qc(n,e))}/**
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
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Au(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=Au(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:o}=await ey(e,t);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:o}=t,c=new Ir;return i&&(J(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),r&&(J(typeof r=="string","internal-error",{appName:e}),c.accessToken=r),o&&(J(typeof o=="number","internal-error",{appName:e}),c.expirationTime=o),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function Qn(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,o=$c(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new _c(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ds(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Q_(this,e)}reload(){return J_(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Go(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(Fi(this.auth));const e=await this.getIdToken();return await Ds(this,G_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,o,c,h,f,g,y;const A=(i=t.displayName)!==null&&i!==void 0?i:void 0,R=(r=t.email)!==null&&r!==void 0?r:void 0,V=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,j=(c=t.photoURL)!==null&&c!==void 0?c:void 0,G=(h=t.tenantId)!==null&&h!==void 0?h:void 0,$=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,oe=(g=t.createdAt)!==null&&g!==void 0?g:void 0,X=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ue,emailVerified:Ie,isAnonymous:ft,providerData:Re,stsTokenManager:C}=t;J(ue&&C,e,"internal-error");const v=Ir.fromJSON(this.name,C);J(typeof ue=="string",e,"internal-error"),Qn(A,e.name),Qn(R,e.name),J(typeof Ie=="boolean",e,"internal-error"),J(typeof ft=="boolean",e,"internal-error"),Qn(V,e.name),Qn(j,e.name),Qn(G,e.name),Qn($,e.name),Qn(oe,e.name),Qn(X,e.name);const E=new qt({uid:ue,auth:e,email:R,emailVerified:Ie,displayName:A,isAnonymous:ft,photoURL:j,phoneNumber:V,tenantId:G,stsTokenManager:v,createdAt:oe,lastLoginAt:X});return Re&&Array.isArray(Re)&&(E.providerData=Re.map(T=>Object.assign({},T))),$&&(E._redirectEventId=$),E}static async _fromIdTokenResponse(e,t,i=!1){const r=new Ir;r.updateFromServerResponse(t);const o=new qt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Go(o),o}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];J(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?_d(r.providerUserInfo):[],c=!(r.email&&r.passwordHash)&&!(o!=null&&o.length),h=new Ir;h.updateFromIdToken(i);const f=new qt({uid:r.localId,auth:e,stsTokenManager:h,isAnonymous:c}),g={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new _c(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(o!=null&&o.length)};return Object.assign(f,g),f}}/**
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
 */const Cu=new Map;function Cn(n){Pn(n instanceof Function,"Expected a class definition");let e=Cu.get(n);return e?(Pn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Cu.set(n,e),e)}/**
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
 */class yd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yd.type="NONE";const Su=yd;/**
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
 */function Vo(n,e,t){return`firebase:${n}:${e}:${t}`}class br{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=Vo(this.userKey,r.apiKey,o),this.fullPersistenceKey=Vo("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ko(this.auth,{idToken:e}).catch(()=>{});return t?qt._fromGetAccountInfoResponse(this.auth,t,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new br(Cn(Su),e,i);const r=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let o=r[0]||Cn(Su);const c=Vo(i,e.config.apiKey,e.name);let h=null;for(const g of t)try{const y=await g._get(c);if(y){let A;if(typeof y=="string"){const R=await Ko(e,{idToken:y}).catch(()=>{});if(!R)break;A=await qt._fromGetAccountInfoResponse(e,R,y)}else A=qt._fromJSON(e,y);g!==o&&(h=A),o=g;break}}catch{}const f=r.filter(g=>g._shouldAllowMigration);return!o._shouldAllowMigration||!f.length?new br(o,e,i):(o=f[0],h&&await o._set(c,h.toJSON()),await Promise.all(t.map(async g=>{if(g!==o)try{await g._remove(c)}catch{}})),new br(o,e,i))}}/**
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
 */function Ru(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Td(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bd(e))return"Blackberry";if(Ad(e))return"Webos";if(wd(e))return"Safari";if((e.includes("chrome/")||Ed(e))&&!e.includes("edge/"))return"Chrome";if(Id(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function vd(n=rt()){return/firefox\//i.test(n)}function wd(n=rt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ed(n=rt()){return/crios\//i.test(n)}function Td(n=rt()){return/iemobile/i.test(n)}function Id(n=rt()){return/android/i.test(n)}function bd(n=rt()){return/blackberry/i.test(n)}function Ad(n=rt()){return/webos/i.test(n)}function zc(n=rt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ny(n=rt()){var e;return zc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iy(){return gm()&&document.documentMode===10}function Cd(n=rt()){return zc(n)||Id(n)||Ad(n)||bd(n)||/windows phone/i.test(n)||Td(n)}/**
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
 */function Sd(n,e=[]){let t;switch(n){case"Browser":t=Ru(rt());break;case"Worker":t=`${Ru(rt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mr}/${i}`}/**
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
 */class ry{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((c,h)=>{try{const f=e(o);c(f)}catch(f){h(f)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function sy(n,e={}){return Fr(n,"GET","/v2/passwordPolicy",qc(n,e))}/**
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
 */const oy=6;class ay{constructor(e){var t,i,r,o;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:oy,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,o,c,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(i=f.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(r=f.containsLowercaseLetter)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(o=f.containsUppercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(c=f.containsNumericCharacter)!==null&&c!==void 0?c:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class cy{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pu(this),this.idTokenSubscription=new Pu(this),this.beforeStateQueue=new ry(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cn(t)),this._initializationPromise=this.queue(async()=>{var i,r,o;if(!this._deleted&&(this.persistenceManager=await br.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ko(this,{idToken:e}),i=await qt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(tn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=r==null?void 0:r._redirectEventId,f=await this.tryRedirectSignIn(e);(!c||c===h)&&(f!=null&&f.user)&&(r=f.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(c){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Go(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=j_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(Fi(this));const t=e?Vt(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(Fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(Fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sy(this),t=new ay(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await ty(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cn(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[Cn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(h,this,"internal-error"),h.then(()=>{c||o(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,i,r);return()=>{c=!0,f()}}else{const f=e.addObserver(t);return()=>{c=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&U_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Wc(n){return Vt(n)}class Pu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tm(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ly(n){Kc=n}function uy(n){return Kc.loadJS(n)}function hy(){return Kc.gapiScript}function dy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function fy(n,e){const t=zi(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),o=t.getOptions();if(ai(o,e??{}))return r;Rn(r,"already-initialized")}return t.initialize({options:e})}function py(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Cn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function gy(n,e,t){const i=Wc(n);J(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,o=Rd(e),{host:c,port:h}=my(e),f=h===null?"":`:${h}`,g={url:`${o}//${c}${f}/`},y=Object.freeze({host:c,port:h,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){J(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),J(ai(g,i.config.emulator)&&ai(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,xr(c)?(ed(`${o}//${c}${f}`),td("Auth",!0)):_y()}function Rd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function my(n){const e=Rd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const o=r[1];return{host:o,port:ku(i.substr(o.length+1))}}else{const[o,c]=i.split(":");return{host:o,port:ku(c)}}}function ku(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _y(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Pd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,t){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
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
 */async function Ar(n,e){return W_(n,"POST","/v1/accounts:signInWithIdp",qc(n,e))}/**
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
 */const yy="http://localhost";class $i extends Pd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,o=$c(t,["providerId","signInMethod"]);if(!i||!r)return null;const c=new $i(i,r);return c.idToken=o.idToken||void 0,c.accessToken=o.accessToken||void 0,c.secret=o.secret,c.nonce=o.nonce,c.pendingToken=o.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Ar(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ar(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ar(e,t)}buildRequest(){const e={requestUri:yy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fs(t)}return e}}/**
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
 */class kd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $s extends kd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xn extends $s{constructor(){super("facebook.com")}static credential(e){return $i._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
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
 */class Yn extends $s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $i._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Yn.credential(t,i)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
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
 */class Jn extends $s{constructor(){super("github.com")}static credential(e){return $i._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Zn extends $s{constructor(){super("twitter.com")}static credential(e,t){return $i._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Zn.credential(t,i)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */class Rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const o=await qt._fromIdTokenResponse(e,i,r),c=Ou(i);return new Rr({user:o,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Ou(i);return new Rr({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Ou(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Qo extends zt{constructor(e,t,i,r){var o;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Qo(e,t,i,r)}}function Od(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(n,o,e,i):o})}async function vy(n,e,t=!1){const i=await Ds(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rr._forOperation(n,"link",i)}/**
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
 */async function wy(n,e,t=!1){const{auth:i}=n;if(tn(i.app))return Promise.reject(Fi(i));const r="reauthenticate";try{const o=await Ds(n,Od(i,r,e,n),t);J(o.idToken,i,"internal-error");const c=Hc(o.idToken);J(c,i,"internal-error");const{sub:h}=c;return J(n.uid===h,i,"user-mismatch"),Rr._forOperation(n,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Rn(i,"user-mismatch"),o}}/**
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
 */async function Ey(n,e,t=!1){if(tn(n.app))return Promise.reject(Fi(n));const i="signIn",r=await Od(n,i,e),o=await Rr._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(o.user),o}function Ty(n,e,t,i){return Vt(n).onIdTokenChanged(e,t,i)}function Iy(n,e,t){return Vt(n).beforeAuthStateChanged(e,t)}function by(n,e,t,i){return Vt(n).onAuthStateChanged(e,t,i)}function Ay(n){return Vt(n).signOut()}const Xo="__sak";/**
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
 */class Dd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Cy=1e3,Sy=10;class Nd extends Dd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,f)=>{this.notifyListeners(c,f)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},o=this.storage.getItem(i);iy()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Sy):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Cy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nd.type="LOCAL";const Ry=Nd;/**
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
 */class Vd extends Dd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vd.type="SESSION";const Ld=Vd;/**
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
 */function Py(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new ua(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:o}=t.data,c=this.handlersMap[r];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const h=Array.from(c).map(async g=>g(t.origin,o)),f=await Py(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
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
 */function Gc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ky{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,c;return new Promise((h,f)=>{const g=Gc("",20);r.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},i);c={messageChannel:r,onMessage(A){const R=A;if(R.data.eventId===g)switch(R.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),h(R.data.response);break;default:clearTimeout(y),clearTimeout(o),f(new Error("invalid_response"));break}}},this.handlers.add(c),r.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[r.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function sn(){return window}function Oy(n){sn().location.href=n}/**
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
 */function xd(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function Dy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ny(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Vy(){return xd()?self:null}/**
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
 */const Md="firebaseLocalStorageDb",Ly=1,Yo="firebaseLocalStorage",Fd="fbase_key";class Bs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ha(n,e){return n.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function xy(){const n=indexedDB.deleteDatabase(Md);return new Bs(n).toPromise()}function yc(){const n=indexedDB.open(Md,Ly);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Yo,{keyPath:Fd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Yo)?e(i):(i.close(),await xy(),e(await yc()))})})}async function Du(n,e,t){const i=ha(n,!0).put({[Fd]:e,value:t});return new Bs(i).toPromise()}async function My(n,e){const t=ha(n,!1).get(e),i=await new Bs(t).toPromise();return i===void 0?null:i.value}function Nu(n,e){const t=ha(n,!0).delete(e);return new Bs(t).toPromise()}const Fy=800,Uy=3;class Ud{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Uy)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(Vy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Dy(),!this.activeServiceWorker)return;this.sender=new ky(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ny()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yc();return await Du(e,Xo,"1"),await Nu(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Du(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>My(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Nu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=ha(r,!1).getAll();return new Bs(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ud.type="LOCAL";const $y=Ud;new Us(3e4,6e4);/**
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
 */function By(n,e){return e?Cn(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Qc extends Pd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ar(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ar(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jy(n){return Ey(n.auth,new Qc(n),n.bypassAuthState)}function qy(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),wy(t,new Qc(n),n.bypassAuthState)}async function Hy(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),vy(t,new Qc(n),n.bypassAuthState)}/**
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
 */class $d{constructor(e,t,i,r,o=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:o,error:c,type:h}=e;if(c){this.reject(c);return}const f={auth:this.auth,requestUri:t,sessionId:i,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jy;case"linkViaPopup":case"linkViaRedirect":return Hy;case"reauthViaPopup":case"reauthViaRedirect":return qy;default:Rn(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zy=new Us(2e3,1e4);class Tr extends $d{constructor(e,t,i,r,o){super(e,t,r,o),this.provider=i,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=Gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zy.get())};e()}}Tr.currentPopupAction=null;/**
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
 */const Wy="pendingRedirect",Lo=new Map;class Ky extends $d{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Lo.get(this.auth._key());if(!e){try{const i=await Gy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Lo.set(this.auth._key(),e)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gy(n,e){const t=Yy(e),i=Xy(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function Qy(n,e){Lo.set(n._key(),e)}function Xy(n){return Cn(n._redirectPersistence)}function Yy(n){return Vo(Wy,n.config.apiKey,n.name)}async function Jy(n,e,t=!1){if(tn(n.app))return Promise.reject(Fi(n));const i=Wc(n),r=By(i,e),c=await new Ky(i,r,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const Zy=10*60*1e3;class ev{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Bd(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(rn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vu(e))}saveEventToCache(e){this.cachedEventUids.add(Vu(e)),this.lastProcessedEventTime=Date.now()}}function Vu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bd(n);default:return!1}}/**
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
 */async function nv(n,e={}){return Fr(n,"GET","/v1/projects",e)}/**
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
 */const iv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rv=/^https?/;async function sv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await nv(n);for(const t of e)try{if(ov(t))return}catch{}Rn(n,"unauthorized-domain")}function ov(n){const e=mc(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!rv.test(t))return!1;if(iv.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const av=new Us(3e4,6e4);function Lu(){const n=sn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function cv(n){return new Promise((e,t)=>{var i,r,o;function c(){Lu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lu(),t(rn(n,"network-request-failed"))},timeout:av.get()})}if(!((r=(i=sn().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=sn().gapi)===null||o===void 0)&&o.load)c();else{const h=dy("iframefcb");return sn()[h]=()=>{gapi.load?c():t(rn(n,"network-request-failed"))},uy(`${hy()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw xo=null,e})}let xo=null;function lv(n){return xo=xo||cv(n),xo}/**
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
 */const uv=new Us(5e3,15e3),hv="__/auth/iframe",dv="emulator/auth/iframe",fv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gv(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?jc(e,dv):`https://${n.config.authDomain}/${hv}`,i={apiKey:e.apiKey,appName:n.name,v:Mr},r=pv.get(n.config.apiHost);r&&(i.eid=r);const o=n._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${Fs(i).slice(1)}`}async function mv(n){const e=await lv(n),t=sn().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:gv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fv,dontclear:!0},i=>new Promise(async(r,o)=>{await i.restyle({setHideOnLeave:!1});const c=rn(n,"network-request-failed"),h=sn().setTimeout(()=>{o(c)},uv.get());function f(){sn().clearTimeout(h),r(i)}i.ping(f).then(f,()=>{o(c)})}))}/**
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
 */const _v={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yv=500,vv=600,wv="_blank",Ev="http://localhost";class xu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tv(n,e,t,i=yv,r=vv){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const f=Object.assign(Object.assign({},_v),{width:i.toString(),height:r.toString(),top:o,left:c}),g=rt().toLowerCase();t&&(h=Ed(g)?wv:t),vd(g)&&(e=e||Ev,f.scrollbars="yes");const y=Object.entries(f).reduce((R,[V,j])=>`${R}${V}=${j},`,"");if(ny(g)&&h!=="_self")return Iv(e||"",h),new xu(null);const A=window.open(e||"",h,y);J(A,n,"popup-blocked");try{A.focus()}catch{}return new xu(A)}function Iv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const bv="__/auth/handler",Av="emulator/auth/handler",Cv=encodeURIComponent("fac");async function Mu(n,e,t,i,r,o){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Mr,eventId:r};if(e instanceof kd){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Em(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,A]of Object.entries({}))c[y]=A}if(e instanceof $s){const y=e.getScopes().filter(A=>A!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const h=c;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await n._getAppCheckToken(),g=f?`#${Cv}=${encodeURIComponent(f)}`:"";return`${Sv(n)}?${Fs(h).slice(1)}${g}`}function Sv({config:n}){return n.emulator?jc(n,Av):`https://${n.authDomain}/${bv}`}/**
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
 */const nc="webStorageSupport";class Rv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ld,this._completeRedirectFn=Jy,this._overrideRedirectResult=Qy}async _openPopup(e,t,i,r){var o;Pn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const c=await Mu(e,t,i,mc(),r);return Tv(e,c,Gc())}async _openRedirect(e,t,i,r){await this._originValidation(e);const o=await Mu(e,t,i,mc(),r);return Oy(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:o}=this.eventManagers[t];return r?Promise.resolve(r):(Pn(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await mv(e),i=new ev(e);return t.register("authEvent",r=>(J(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nc,{type:nc},r=>{var o;const c=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[nc];c!==void 0&&t(!!c),Rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cd()||wd()||zc()}}const Pv=Rv;var Fu="@firebase/auth",Uu="1.10.7";/**
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
 */class kv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ov(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dv(n){cn(new Ht("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=i.options;J(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const f={apiKey:c,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sd(n)},g=new cy(i,r,o,f);return py(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),cn(new Ht("auth-internal",e=>{const t=Wc(e.getProvider("auth").getImmediate());return(i=>new kv(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(Fu,Uu,Ov(n)),Nt(Fu,Uu,"esm2017")}/**
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
 */const Nv=5*60,Vv=Zh("authIdTokenMaxAge")||Nv;let $u=null;const Lv=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Vv)return;const r=t==null?void 0:t.token;$u!==r&&($u=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function xv(n=Uc()){const e=zi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=fy(n,{popupRedirectResolver:Pv,persistence:[$y,Ry,Ld]}),i=Zh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const c=Lv(o.toString());Iy(t,c,()=>c(t.currentUser)),Ty(t,h=>c(h))}}const r=Yh("auth");return r&&gy(t,`http://${r}`),t}function Mv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ly({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const o=rn("internal-error");o.customData=r,t(o)},i.type="text/javascript",i.charset="UTF-8",Mv().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dv("Browser");var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ri,jd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,v){function E(){}E.prototype=v.prototype,C.D=v.prototype,C.prototype=new E,C.prototype.constructor=C,C.C=function(T,S,k){for(var w=Array(arguments.length-2),At=2;At<arguments.length;At++)w[At-2]=arguments[At];return v.prototype[S].apply(T,w)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(C,v,E){E||(E=0);var T=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)T[S]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(S=0;16>S;++S)T[S]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=C.g[0],E=C.g[1],S=C.g[2];var k=C.g[3],w=v+(k^E&(S^k))+T[0]+3614090360&4294967295;v=E+(w<<7&4294967295|w>>>25),w=k+(S^v&(E^S))+T[1]+3905402710&4294967295,k=v+(w<<12&4294967295|w>>>20),w=S+(E^k&(v^E))+T[2]+606105819&4294967295,S=k+(w<<17&4294967295|w>>>15),w=E+(v^S&(k^v))+T[3]+3250441966&4294967295,E=S+(w<<22&4294967295|w>>>10),w=v+(k^E&(S^k))+T[4]+4118548399&4294967295,v=E+(w<<7&4294967295|w>>>25),w=k+(S^v&(E^S))+T[5]+1200080426&4294967295,k=v+(w<<12&4294967295|w>>>20),w=S+(E^k&(v^E))+T[6]+2821735955&4294967295,S=k+(w<<17&4294967295|w>>>15),w=E+(v^S&(k^v))+T[7]+4249261313&4294967295,E=S+(w<<22&4294967295|w>>>10),w=v+(k^E&(S^k))+T[8]+1770035416&4294967295,v=E+(w<<7&4294967295|w>>>25),w=k+(S^v&(E^S))+T[9]+2336552879&4294967295,k=v+(w<<12&4294967295|w>>>20),w=S+(E^k&(v^E))+T[10]+4294925233&4294967295,S=k+(w<<17&4294967295|w>>>15),w=E+(v^S&(k^v))+T[11]+2304563134&4294967295,E=S+(w<<22&4294967295|w>>>10),w=v+(k^E&(S^k))+T[12]+1804603682&4294967295,v=E+(w<<7&4294967295|w>>>25),w=k+(S^v&(E^S))+T[13]+4254626195&4294967295,k=v+(w<<12&4294967295|w>>>20),w=S+(E^k&(v^E))+T[14]+2792965006&4294967295,S=k+(w<<17&4294967295|w>>>15),w=E+(v^S&(k^v))+T[15]+1236535329&4294967295,E=S+(w<<22&4294967295|w>>>10),w=v+(S^k&(E^S))+T[1]+4129170786&4294967295,v=E+(w<<5&4294967295|w>>>27),w=k+(E^S&(v^E))+T[6]+3225465664&4294967295,k=v+(w<<9&4294967295|w>>>23),w=S+(v^E&(k^v))+T[11]+643717713&4294967295,S=k+(w<<14&4294967295|w>>>18),w=E+(k^v&(S^k))+T[0]+3921069994&4294967295,E=S+(w<<20&4294967295|w>>>12),w=v+(S^k&(E^S))+T[5]+3593408605&4294967295,v=E+(w<<5&4294967295|w>>>27),w=k+(E^S&(v^E))+T[10]+38016083&4294967295,k=v+(w<<9&4294967295|w>>>23),w=S+(v^E&(k^v))+T[15]+3634488961&4294967295,S=k+(w<<14&4294967295|w>>>18),w=E+(k^v&(S^k))+T[4]+3889429448&4294967295,E=S+(w<<20&4294967295|w>>>12),w=v+(S^k&(E^S))+T[9]+568446438&4294967295,v=E+(w<<5&4294967295|w>>>27),w=k+(E^S&(v^E))+T[14]+3275163606&4294967295,k=v+(w<<9&4294967295|w>>>23),w=S+(v^E&(k^v))+T[3]+4107603335&4294967295,S=k+(w<<14&4294967295|w>>>18),w=E+(k^v&(S^k))+T[8]+1163531501&4294967295,E=S+(w<<20&4294967295|w>>>12),w=v+(S^k&(E^S))+T[13]+2850285829&4294967295,v=E+(w<<5&4294967295|w>>>27),w=k+(E^S&(v^E))+T[2]+4243563512&4294967295,k=v+(w<<9&4294967295|w>>>23),w=S+(v^E&(k^v))+T[7]+1735328473&4294967295,S=k+(w<<14&4294967295|w>>>18),w=E+(k^v&(S^k))+T[12]+2368359562&4294967295,E=S+(w<<20&4294967295|w>>>12),w=v+(E^S^k)+T[5]+4294588738&4294967295,v=E+(w<<4&4294967295|w>>>28),w=k+(v^E^S)+T[8]+2272392833&4294967295,k=v+(w<<11&4294967295|w>>>21),w=S+(k^v^E)+T[11]+1839030562&4294967295,S=k+(w<<16&4294967295|w>>>16),w=E+(S^k^v)+T[14]+4259657740&4294967295,E=S+(w<<23&4294967295|w>>>9),w=v+(E^S^k)+T[1]+2763975236&4294967295,v=E+(w<<4&4294967295|w>>>28),w=k+(v^E^S)+T[4]+1272893353&4294967295,k=v+(w<<11&4294967295|w>>>21),w=S+(k^v^E)+T[7]+4139469664&4294967295,S=k+(w<<16&4294967295|w>>>16),w=E+(S^k^v)+T[10]+3200236656&4294967295,E=S+(w<<23&4294967295|w>>>9),w=v+(E^S^k)+T[13]+681279174&4294967295,v=E+(w<<4&4294967295|w>>>28),w=k+(v^E^S)+T[0]+3936430074&4294967295,k=v+(w<<11&4294967295|w>>>21),w=S+(k^v^E)+T[3]+3572445317&4294967295,S=k+(w<<16&4294967295|w>>>16),w=E+(S^k^v)+T[6]+76029189&4294967295,E=S+(w<<23&4294967295|w>>>9),w=v+(E^S^k)+T[9]+3654602809&4294967295,v=E+(w<<4&4294967295|w>>>28),w=k+(v^E^S)+T[12]+3873151461&4294967295,k=v+(w<<11&4294967295|w>>>21),w=S+(k^v^E)+T[15]+530742520&4294967295,S=k+(w<<16&4294967295|w>>>16),w=E+(S^k^v)+T[2]+3299628645&4294967295,E=S+(w<<23&4294967295|w>>>9),w=v+(S^(E|~k))+T[0]+4096336452&4294967295,v=E+(w<<6&4294967295|w>>>26),w=k+(E^(v|~S))+T[7]+1126891415&4294967295,k=v+(w<<10&4294967295|w>>>22),w=S+(v^(k|~E))+T[14]+2878612391&4294967295,S=k+(w<<15&4294967295|w>>>17),w=E+(k^(S|~v))+T[5]+4237533241&4294967295,E=S+(w<<21&4294967295|w>>>11),w=v+(S^(E|~k))+T[12]+1700485571&4294967295,v=E+(w<<6&4294967295|w>>>26),w=k+(E^(v|~S))+T[3]+2399980690&4294967295,k=v+(w<<10&4294967295|w>>>22),w=S+(v^(k|~E))+T[10]+4293915773&4294967295,S=k+(w<<15&4294967295|w>>>17),w=E+(k^(S|~v))+T[1]+2240044497&4294967295,E=S+(w<<21&4294967295|w>>>11),w=v+(S^(E|~k))+T[8]+1873313359&4294967295,v=E+(w<<6&4294967295|w>>>26),w=k+(E^(v|~S))+T[15]+4264355552&4294967295,k=v+(w<<10&4294967295|w>>>22),w=S+(v^(k|~E))+T[6]+2734768916&4294967295,S=k+(w<<15&4294967295|w>>>17),w=E+(k^(S|~v))+T[13]+1309151649&4294967295,E=S+(w<<21&4294967295|w>>>11),w=v+(S^(E|~k))+T[4]+4149444226&4294967295,v=E+(w<<6&4294967295|w>>>26),w=k+(E^(v|~S))+T[11]+3174756917&4294967295,k=v+(w<<10&4294967295|w>>>22),w=S+(v^(k|~E))+T[2]+718787259&4294967295,S=k+(w<<15&4294967295|w>>>17),w=E+(k^(S|~v))+T[9]+3951481745&4294967295,C.g[0]=C.g[0]+v&4294967295,C.g[1]=C.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,C.g[2]=C.g[2]+S&4294967295,C.g[3]=C.g[3]+k&4294967295}i.prototype.u=function(C,v){v===void 0&&(v=C.length);for(var E=v-this.blockSize,T=this.B,S=this.h,k=0;k<v;){if(S==0)for(;k<=E;)r(this,C,k),k+=this.blockSize;if(typeof C=="string"){for(;k<v;)if(T[S++]=C.charCodeAt(k++),S==this.blockSize){r(this,T),S=0;break}}else for(;k<v;)if(T[S++]=C[k++],S==this.blockSize){r(this,T),S=0;break}}this.h=S,this.o+=v},i.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var v=1;v<C.length-8;++v)C[v]=0;var E=8*this.o;for(v=C.length-8;v<C.length;++v)C[v]=E&255,E/=256;for(this.u(C),C=Array(16),v=E=0;4>v;++v)for(var T=0;32>T;T+=8)C[E++]=this.g[v]>>>T&255;return C};function o(C,v){var E=h;return Object.prototype.hasOwnProperty.call(E,C)?E[C]:E[C]=v(C)}function c(C,v){this.h=v;for(var E=[],T=!0,S=C.length-1;0<=S;S--){var k=C[S]|0;T&&k==v||(E[S]=k,T=!1)}this.g=E}var h={};function f(C){return-128<=C&&128>C?o(C,function(v){return new c([v|0],0>v?-1:0)}):new c([C|0],0>C?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return A;if(0>C)return $(g(-C));for(var v=[],E=1,T=0;C>=E;T++)v[T]=C/E|0,E*=4294967296;return new c(v,0)}function y(C,v){if(C.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C.charAt(0)=="-")return $(y(C.substring(1),v));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=g(Math.pow(v,8)),T=A,S=0;S<C.length;S+=8){var k=Math.min(8,C.length-S),w=parseInt(C.substring(S,S+k),v);8>k?(k=g(Math.pow(v,k)),T=T.j(k).add(g(w))):(T=T.j(E),T=T.add(g(w)))}return T}var A=f(0),R=f(1),V=f(16777216);n=c.prototype,n.m=function(){if(G(this))return-$(this).m();for(var C=0,v=1,E=0;E<this.g.length;E++){var T=this.i(E);C+=(0<=T?T:4294967296+T)*v,v*=4294967296}return C},n.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(j(this))return"0";if(G(this))return"-"+$(this).toString(C);for(var v=g(Math.pow(C,6)),E=this,T="";;){var S=Ie(E,v).g;E=oe(E,S.j(v));var k=((0<E.g.length?E.g[0]:E.h)>>>0).toString(C);if(E=S,j(E))return k+T;for(;6>k.length;)k="0"+k;T=k+T}},n.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function j(C){if(C.h!=0)return!1;for(var v=0;v<C.g.length;v++)if(C.g[v]!=0)return!1;return!0}function G(C){return C.h==-1}n.l=function(C){return C=oe(this,C),G(C)?-1:j(C)?0:1};function $(C){for(var v=C.g.length,E=[],T=0;T<v;T++)E[T]=~C.g[T];return new c(E,~C.h).add(R)}n.abs=function(){return G(this)?$(this):this},n.add=function(C){for(var v=Math.max(this.g.length,C.g.length),E=[],T=0,S=0;S<=v;S++){var k=T+(this.i(S)&65535)+(C.i(S)&65535),w=(k>>>16)+(this.i(S)>>>16)+(C.i(S)>>>16);T=w>>>16,k&=65535,w&=65535,E[S]=w<<16|k}return new c(E,E[E.length-1]&-2147483648?-1:0)};function oe(C,v){return C.add($(v))}n.j=function(C){if(j(this)||j(C))return A;if(G(this))return G(C)?$(this).j($(C)):$($(this).j(C));if(G(C))return $(this.j($(C)));if(0>this.l(V)&&0>C.l(V))return g(this.m()*C.m());for(var v=this.g.length+C.g.length,E=[],T=0;T<2*v;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var S=0;S<C.g.length;S++){var k=this.i(T)>>>16,w=this.i(T)&65535,At=C.i(S)>>>16,On=C.i(S)&65535;E[2*T+2*S]+=w*On,X(E,2*T+2*S),E[2*T+2*S+1]+=k*On,X(E,2*T+2*S+1),E[2*T+2*S+1]+=w*At,X(E,2*T+2*S+1),E[2*T+2*S+2]+=k*At,X(E,2*T+2*S+2)}for(T=0;T<v;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=v;T<2*v;T++)E[T]=0;return new c(E,0)};function X(C,v){for(;(C[v]&65535)!=C[v];)C[v+1]+=C[v]>>>16,C[v]&=65535,v++}function ue(C,v){this.g=C,this.h=v}function Ie(C,v){if(j(v))throw Error("division by zero");if(j(C))return new ue(A,A);if(G(C))return v=Ie($(C),v),new ue($(v.g),$(v.h));if(G(v))return v=Ie(C,$(v)),new ue($(v.g),v.h);if(30<C.g.length){if(G(C)||G(v))throw Error("slowDivide_ only works with positive integers.");for(var E=R,T=v;0>=T.l(C);)E=ft(E),T=ft(T);var S=Re(E,1),k=Re(T,1);for(T=Re(T,2),E=Re(E,2);!j(T);){var w=k.add(T);0>=w.l(C)&&(S=S.add(E),k=w),T=Re(T,1),E=Re(E,1)}return v=oe(C,S.j(v)),new ue(S,v)}for(S=A;0<=C.l(v);){for(E=Math.max(1,Math.floor(C.m()/v.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),k=g(E),w=k.j(v);G(w)||0<w.l(C);)E-=T,k=g(E),w=k.j(v);j(k)&&(k=R),S=S.add(k),C=oe(C,w)}return new ue(S,C)}n.A=function(C){return Ie(this,C).h},n.and=function(C){for(var v=Math.max(this.g.length,C.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)&C.i(T);return new c(E,this.h&C.h)},n.or=function(C){for(var v=Math.max(this.g.length,C.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)|C.i(T);return new c(E,this.h|C.h)},n.xor=function(C){for(var v=Math.max(this.g.length,C.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)^C.i(T);return new c(E,this.h^C.h)};function ft(C){for(var v=C.g.length+1,E=[],T=0;T<v;T++)E[T]=C.i(T)<<1|C.i(T-1)>>>31;return new c(E,C.h)}function Re(C,v){var E=v>>5;v%=32;for(var T=C.g.length-E,S=[],k=0;k<T;k++)S[k]=0<v?C.i(k+E)>>>v|C.i(k+E+1)<<32-v:C.i(k+E);return new c(S,C.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,jd=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,ri=c}).apply(typeof Bu<"u"?Bu:typeof self<"u"?self:typeof window<"u"?window:{});var So=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qd,ws,Hd,Mo,vc,zd,Wd,Kd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,d){return s==Array.prototype||s==Object.prototype||(s[l]=d.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof So=="object"&&So];for(var l=0;l<s.length;++l){var d=s[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=t(this);function r(s,l){if(l)e:{var d=i;s=s.split(".");for(var _=0;_<s.length-1;_++){var P=s[_];if(!(P in d))break e;d=d[P]}s=s[s.length-1],_=d[s],l=l(_),l!=_&&l!=null&&e(d,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var d=0,_=!1,P={next:function(){if(!_&&d<s.length){var O=d++;return{value:l(O,s[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}r("Array.prototype.values",function(s){return s||function(){return o(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function f(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function g(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function y(s,l,d){return s.call.apply(s.bind,arguments)}function A(s,l,d){if(!s)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,_),s.apply(l,P)}}return function(){return s.apply(l,arguments)}}function R(s,l,d){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:A,R.apply(null,arguments)}function V(s,l){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),s.apply(this,_)}}function j(s,l){function d(){}d.prototype=l.prototype,s.aa=l.prototype,s.prototype=new d,s.prototype.constructor=s,s.Qb=function(_,P,O){for(var M=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)M[ye-2]=arguments[ye];return l.prototype[P].apply(_,M)}}function G(s){const l=s.length;if(0<l){const d=Array(l);for(let _=0;_<l;_++)d[_]=s[_];return d}return[]}function $(s,l){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(f(_)){const P=s.length||0,O=_.length||0;s.length=P+O;for(let M=0;M<O;M++)s[P+M]=_[M]}else s.push(_)}}class oe{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function X(s){return/^[\s\xa0]*$/.test(s)}function ue(){var s=h.navigator;return s&&(s=s.userAgent)?s:""}function Ie(s){return Ie[" "](s),s}Ie[" "]=function(){};var ft=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function Re(s,l,d){for(const _ in s)l.call(d,s[_],_,s)}function C(s,l){for(const d in s)l.call(void 0,s[d],d,s)}function v(s){const l={};for(const d in s)l[d]=s[d];return l}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(s,l){let d,_;for(let P=1;P<arguments.length;P++){_=arguments[P];for(d in _)s[d]=_[d];for(let O=0;O<E.length;O++)d=E[O],Object.prototype.hasOwnProperty.call(_,d)&&(s[d]=_[d])}}function S(s){var l=1;s=s.split(":");const d=[];for(;0<l&&s.length;)d.push(s.shift()),l--;return s.length&&d.push(s.join(":")),d}function k(s){h.setTimeout(()=>{throw s},0)}function w(){var s=Ki;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class At{constructor(){this.h=this.g=null}add(l,d){const _=On.get();_.set(l,d),this.h?this.h.next=_:this.g=_,this.h=_}}var On=new oe(()=>new Ws,s=>s.reset());class Ws{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let hn,pi=!1,Ki=new At,x=()=>{const s=h.Promise.resolve(void 0);hn=()=>{s.then(jr)}};var jr=()=>{for(var s;s=w();){try{s.h.call(s.g)}catch(d){k(d)}var l=On;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}pi=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var xt=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const d=()=>{};h.addEventListener("test",d,l),h.removeEventListener("test",d,l)}catch{}return s}();function Mt(s,l){if(xe.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var d=this.type=s.type,_=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(ft){e:{try{Ie(l.nodeName);var P=!0;break e}catch{}P=!1}P||(l=null)}}else d=="mouseover"?l=s.fromElement:d=="mouseout"&&(l=s.toElement);this.relatedTarget=l,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:vt[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Mt.aa.h.call(this)}}j(Mt,xe);var vt={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Dn="closure_listenable_"+(1e6*Math.random()|0),W=0;function Gi(s,l,d,_,P){this.listener=s,this.proxy=null,this.src=l,this.type=d,this.capture=!!_,this.ha=P,this.key=++W,this.da=this.fa=!1}function gi(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Qi(s){this.src=s,this.g={},this.h=0}Qi.prototype.add=function(s,l,d,_,P){var O=s.toString();s=this.g[O],s||(s=this.g[O]=[],this.h++);var M=dn(s,l,_,P);return-1<M?(l=s[M],d||(l.fa=!1)):(l=new Gi(l,this.src,O,!!_,P),l.fa=d,s.push(l)),l};function qr(s,l){var d=l.type;if(d in s.g){var _=s.g[d],P=Array.prototype.indexOf.call(_,l,void 0),O;(O=0<=P)&&Array.prototype.splice.call(_,P,1),O&&(gi(l),s.g[d].length==0&&(delete s.g[d],s.h--))}}function dn(s,l,d,_){for(var P=0;P<s.length;++P){var O=s[P];if(!O.da&&O.listener==l&&O.capture==!!d&&O.ha==_)return P}return-1}var Xi="closure_lm_"+(1e6*Math.random()|0),fn={};function pn(s,l,d,_,P){if(Array.isArray(l)){for(var O=0;O<l.length;O++)pn(s,l[O],d,_,P);return null}return d=Ft(d),s&&s[Dn]?s.K(l,d,g(_)?!!_.capture:!1,P):Sa(s,l,d,!1,_,P)}function Sa(s,l,d,_,P,O){if(!l)throw Error("Invalid event type");var M=g(P)?!!P.capture:!!P,ye=zr(s);if(ye||(s[Xi]=ye=new Qi(s)),d=ye.add(l,d,_,M,O),d.proxy)return d;if(_=Ra(),d.proxy=_,_.src=s,_.listener=d,s.addEventListener)xt||(P=M),P===void 0&&(P=!1),s.addEventListener(l.toString(),_,P);else if(s.attachEvent)s.attachEvent(Gs(l.toString()),_);else if(s.addListener&&s.removeListener)s.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ra(){function s(d){return l.call(s.src,s.listener,d)}const l=Pa;return s}function Ks(s,l,d,_,P){if(Array.isArray(l))for(var O=0;O<l.length;O++)Ks(s,l[O],d,_,P);else _=g(_)?!!_.capture:!!_,d=Ft(d),s&&s[Dn]?(s=s.i,l=String(l).toString(),l in s.g&&(O=s.g[l],d=dn(O,d,_,P),-1<d&&(gi(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete s.g[l],s.h--)))):s&&(s=zr(s))&&(l=s.g[l.toString()],s=-1,l&&(s=dn(l,d,_,P)),(d=-1<s?l[s]:null)&&Hr(d))}function Hr(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[Dn])qr(l.i,s);else{var d=s.type,_=s.proxy;l.removeEventListener?l.removeEventListener(d,_,s.capture):l.detachEvent?l.detachEvent(Gs(d),_):l.addListener&&l.removeListener&&l.removeListener(_),(d=zr(l))?(qr(d,s),d.h==0&&(d.src=null,l[Xi]=null)):gi(s)}}}function Gs(s){return s in fn?fn[s]:fn[s]="on"+s}function Pa(s,l){if(s.da)s=!0;else{l=new Mt(l,this);var d=s.listener,_=s.ha||s.src;s.fa&&Hr(s),s=d.call(_,l)}return s}function zr(s){return s=s[Xi],s instanceof Qi?s:null}var Nn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ft(s){return typeof s=="function"?s:(s[Nn]||(s[Nn]=function(l){return s.handleEvent(l)}),s[Nn])}function Fe(){Lt.call(this),this.i=new Qi(this),this.M=this,this.F=null}j(Fe,Lt),Fe.prototype[Dn]=!0,Fe.prototype.removeEventListener=function(s,l,d,_){Ks(this,s,l,d,_)};function Qe(s,l){var d,_=s.F;if(_)for(d=[];_;_=_.F)d.push(_);if(s=s.M,_=l.type||l,typeof l=="string")l=new xe(l,s);else if(l instanceof xe)l.target=l.target||s;else{var P=l;l=new xe(_,s),T(l,P)}if(P=!0,d)for(var O=d.length-1;0<=O;O--){var M=l.g=d[O];P=Yi(M,_,!0,l)&&P}if(M=l.g=s,P=Yi(M,_,!0,l)&&P,P=Yi(M,_,!1,l)&&P,d)for(O=0;O<d.length;O++)M=l.g=d[O],P=Yi(M,_,!1,l)&&P}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var d=s.g[l],_=0;_<d.length;_++)gi(d[_]);delete s.g[l],s.h--}}this.F=null},Fe.prototype.K=function(s,l,d,_){return this.i.add(String(s),l,!1,d,_)},Fe.prototype.L=function(s,l,d,_){return this.i.add(String(s),l,!0,d,_)};function Yi(s,l,d,_){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var P=!0,O=0;O<l.length;++O){var M=l[O];if(M&&!M.da&&M.capture==d){var ye=M.listener,$e=M.ha||M.src;M.fa&&qr(s.i,M),P=ye.call($e,_)!==!1&&P}}return P&&!_.defaultPrevented}function Vn(s,l,d){if(typeof s=="function")d&&(s=R(s,d));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:h.setTimeout(s,l||0)}function gn(s){s.g=Vn(()=>{s.g=null,s.i&&(s.i=!1,gn(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class Ln extends Lt{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:gn(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wt(s){Lt.call(this),this.h=s,this.g={}}j(Wt,Lt);var Qs=[];function Ji(s){Re(s.g,function(l,d){this.g.hasOwnProperty(d)&&Hr(l)},s),s.g={}}Wt.prototype.N=function(){Wt.aa.N.call(this),Ji(this)},Wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wr=h.JSON.stringify,ka=h.JSON.parse,Oa=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function Kr(){}Kr.prototype.h=null;function Xs(s){return s.h||(s.h=s.i())}function Ys(){}var xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mn(){xe.call(this,"d")}j(Mn,xe);function Zi(){xe.call(this,"c")}j(Zi,xe);var Kt={},Js=null;function er(){return Js=Js||new Fe}Kt.La="serverreachability";function Zs(s){xe.call(this,Kt.La,s)}j(Zs,xe);function mi(s){const l=er();Qe(l,new Zs(l))}Kt.STAT_EVENT="statevent";function mn(s,l){xe.call(this,Kt.STAT_EVENT,s),this.stat=l}j(mn,xe);function De(s){const l=er();Qe(l,new mn(l,s))}Kt.Ma="timingevent";function eo(s,l){xe.call(this,Kt.Ma,s),this.size=l}j(eo,xe);function _i(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},l)}function yi(){this.g=!0}yi.prototype.xa=function(){this.g=!1};function Da(s,l,d,_,P,O){s.info(function(){if(s.g)if(O)for(var M="",ye=O.split("&"),$e=0;$e<ye.length;$e++){var de=ye[$e].split("=");if(1<de.length){var He=de[0];de=de[1];var ze=He.split("_");M=2<=ze.length&&ze[1]=="type"?M+(He+"="+de+"&"):M+(He+"=redacted&")}}else M=null;else M=O;return"XMLHTTP REQ ("+_+") [attempt "+P+"]: "+l+`
`+d+`
`+M})}function Na(s,l,d,_,P,O,M){s.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+P+"]: "+l+`
`+d+`
`+O+" "+M})}function Gt(s,l,d,_){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+tr(s,d)+(_?" "+_:"")})}function Fn(s,l){s.info(function(){return"TIMEOUT: "+l})}yi.prototype.info=function(){};function tr(s,l){if(!s.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(s=0;s<d.length;s++)if(Array.isArray(d[s])){var _=d[s];if(!(2>_.length)){var P=_[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var M=1;M<P.length;M++)P[M]=""}}}}return Wr(d)}catch{return l}}var nr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ir={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gr;function rr(){}j(rr,Kr),rr.prototype.g=function(){return new XMLHttpRequest},rr.prototype.i=function(){return{}},Gr=new rr;function st(s,l,d,_){this.j=s,this.i=l,this.l=d,this.R=_||1,this.U=new Wt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qe}function qe(){this.i=null,this.g="",this.h=!1}var Ze={},Xe={};function Ue(s,l,d){s.L=1,s.v=vn(ke(l)),s.m=d,s.P=!0,vi(s,null)}function vi(s,l){s.F=Date.now(),Ut(s),s.A=ke(s.v);var d=s.A,_=s.R;Array.isArray(_)||(_=[String(_)]),ar(d.i,"t",_),s.C=0,d=s.j.J,s.h=new qe,s.g=go(s.j,d?l:null,!s.m),0<s.O&&(s.M=new Ln(R(s.Y,s,s.g),s.O)),l=s.U,d=s.g,_=s.ca;var P="readystatechange";Array.isArray(P)||(P&&(Qs[0]=P.toString()),P=Qs);for(var O=0;O<P.length;O++){var M=pn(d,P[O],_||l.handleEvent,!1,l.h||l);if(!M)break;l.g[M.key]=M}l=s.H?v(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),mi(),Da(s.i,s.u,s.A,s.l,s.R,s.m)}st.prototype.ca=function(s){s=s.target;const l=this.M;l&&et(s)==3?l.j():this.Y(s)},st.prototype.Y=function(s){try{if(s==this.g)e:{const ze=et(this.g);var l=this.g.Ba();const We=this.g.Z();if(!(3>ze)&&(ze!=3||this.g&&(this.h.h||this.g.oa()||uo(this.g)))){this.J||ze!=4||l==7||(l==8||0>=We?mi(3):mi(2)),wi(this);var d=this.g.Z();this.X=d;t:if(_n(this)){var _=uo(this.g);s="";var P=_.length,O=et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),Ct(this);var M="";break t}this.h.i=new h.TextDecoder}for(l=0;l<P;l++)this.h.h=!0,s+=this.h.i.decode(_[l],{stream:!(O&&l==P-1)});_.length=0,this.h.g+=s,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=d==200,Na(this.i,this.u,this.A,this.l,this.R,ze,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,$e=this.g;if((ye=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(ye)){var de=ye;break t}}de=null}if(d=de)Gt(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ei(this,d);else{this.o=!1,this.s=3,De(12),Qt(this),Ct(this);break e}}if(this.P){d=!0;let gt;for(;!this.J&&this.C<M.length;)if(gt=yn(this,M),gt==Xe){ze==4&&(this.s=4,De(14),d=!1),Gt(this.i,this.l,null,"[Incomplete Response]");break}else if(gt==Ze){this.s=4,De(15),Gt(this.i,this.l,M,"[Invalid Chunk]"),d=!1;break}else Gt(this.i,this.l,gt,null),Ei(this,gt);if(_n(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ze!=4||M.length!=0||this.h.h||(this.s=1,De(16),d=!1),this.o=this.o&&d,!d)Gt(this.i,this.l,M,"[Invalid Chunked Response]"),Qt(this),Ct(this);else if(0<M.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),ds(He),He.M=!0,De(11))}}else Gt(this.i,this.l,M,null),Ei(this,M);ze==4&&Qt(this),this.o&&!this.J&&(ze==4?fs(this.j,this):(this.o=!1,Ut(this)))}else ho(this.g),d==400&&0<M.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Qt(this),Ct(this)}}}catch{}finally{}};function _n(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function yn(s,l){var d=s.C,_=l.indexOf(`
`,d);return _==-1?Xe:(d=Number(l.substring(d,_)),isNaN(d)?Ze:(_+=1,_+d>l.length?Xe:(l=l.slice(_,_+d),s.C=_+d,l)))}st.prototype.cancel=function(){this.J=!0,Qt(this)};function Ut(s){s.S=Date.now()+s.I,Qr(s,s.I)}function Qr(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=_i(R(s.ba,s),l)}function wi(s){s.B&&(h.clearTimeout(s.B),s.B=null)}st.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Fn(this.i,this.A),this.L!=2&&(mi(),De(17)),Qt(this),this.s=2,Ct(this)):Qr(this,this.S-s)};function Ct(s){s.j.G==0||s.J||fs(s.j,s)}function Qt(s){wi(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,Ji(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function Ei(s,l){try{var d=s.j;if(d.G!=0&&(d.g==s||sr(d.h,s))){if(!s.K&&sr(d.h,s)&&d.G==3){try{var _=d.Da.g.parse(l)}catch{_=null}if(Array.isArray(_)&&_.length==3){var P=_;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<s.F)Si(d),bi(d);else break e;hs(d),De(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=_i(R(d.Za,d),6e3));if(1>=Zr(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Bt(d,11)}else if((s.K||d.g==s)&&Si(d),!X(l))for(P=d.Da.g.parse(l),l=0;l<P.length;l++){let de=P[l];if(d.T=de[0],de=de[1],d.G==2)if(de[0]=="c"){d.K=de[1],d.ia=de[2];const He=de[3];He!=null&&(d.la=He,d.j.info("VER="+d.la));const ze=de[4];ze!=null&&(d.Aa=ze,d.j.info("SVER="+d.Aa));const We=de[5];We!=null&&typeof We=="number"&&0<We&&(_=1.5*We,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const gt=s.g;if(gt){const Ri=gt.g?gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var O=_.h;O.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(or(O,O.h),O.h=null))}if(_.D){const gr=gt.g?gt.g.getResponseHeader("X-HTTP-Session-Id"):null;gr&&(_.ya=gr,ge(_.I,_.D,gr))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-s.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var M=s;if(_.qa=ps(_,_.J?_.ia:null,_.W),M.K){es(_.h,M);var ye=M,$e=_.L;$e&&(ye.I=$e),ye.B&&(wi(ye),Ut(ye)),_.g=M}else Ci(_);0<d.i.length&&Ai(d)}else de[0]!="stop"&&de[0]!="close"||Bt(d,7);else d.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Bt(d,7):hr(d):de[0]!="noop"&&d.l&&d.l.ta(de),d.v=0)}}mi(4)}catch{}}var Xr=class{constructor(s,l){this.g=s,this.map=l}};function Yr(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jr(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Zr(s){return s.h?1:s.g?s.g.size:0}function sr(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function or(s,l){s.g?s.g.add(l):s.h=l}function es(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}Yr.prototype.cancel=function(){if(this.i=ts(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ts(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const d of s.g.values())l=l.concat(d.D);return l}return G(s.i)}function to(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(f(s)){for(var l=[],d=s.length,_=0;_<d;_++)l.push(s[_]);return l}l=[],d=0;for(_ in s)l[d++]=s[_];return l}function no(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(f(s)||typeof s=="string"){var l=[];s=s.length;for(var d=0;d<s;d++)l.push(d);return l}l=[],d=0;for(const _ in s)l[d++]=_;return l}}}function ns(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(f(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var d=no(s),_=to(s),P=_.length,O=0;O<P;O++)l.call(void 0,_[O],d&&d[O],s)}var wt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ot(s,l){if(s){s=s.split("&");for(var d=0;d<s.length;d++){var _=s[d].indexOf("="),P=null;if(0<=_){var O=s[d].substring(0,_);P=s[d].substring(_+1)}else O=s[d];l(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function at(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof at){this.h=s.h,Un(this,s.j),this.o=s.o,this.g=s.g,$n(this,s.s),this.l=s.l;var l=s.i,d=new pt;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Et(this,d),this.m=s.m}else s&&(l=String(s).match(wt))?(this.h=!1,Un(this,l[1]||"",!0),this.o=St(l[2]||""),this.g=St(l[3]||"",!0),$n(this,l[4]),this.l=St(l[5]||"",!0),Et(this,l[6]||"",!0),this.m=St(l[7]||"")):(this.h=!1,this.i=new pt(null,this.h))}at.prototype.toString=function(){var s=[],l=this.j;l&&s.push(wn(l,En,!0),":");var d=this.g;return(d||l=="file")&&(s.push("//"),(l=this.o)&&s.push(wn(l,En,!0),"@"),s.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&s.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&s.push("/"),s.push(wn(d,d.charAt(0)=="/"?ro:is,!0))),(d=this.i.toString())&&s.push("?",d),(d=this.m)&&s.push("#",wn(d,Va)),s.join("")};function ke(s){return new at(s)}function Un(s,l,d){s.j=d?St(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function $n(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function Et(s,l,d){l instanceof pt?(s.i=l,so(s.i,s.h)):(d||(l=wn(l,$t)),s.i=new pt(l,s.h))}function ge(s,l,d){s.i.set(l,d)}function vn(s){return ge(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function St(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function wn(s,l,d){return typeof s=="string"?(s=encodeURI(s).replace(l,io),d&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function io(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var En=/[#\/\?@]/g,is=/[#\?:]/g,ro=/[#\?]/g,$t=/[#\?@]/g,Va=/#/g;function pt(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function Tt(s){s.g||(s.g=new Map,s.h=0,s.i&&ot(s.i,function(l,d){s.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=pt.prototype,n.add=function(s,l){Tt(this),this.i=null,s=Rt(this,s);var d=this.g.get(s);return d||this.g.set(s,d=[]),d.push(l),this.h+=1,this};function rs(s,l){Tt(s),l=Rt(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Bn(s,l){return Tt(s),l=Rt(s,l),s.g.has(l)}n.forEach=function(s,l){Tt(this),this.g.forEach(function(d,_){d.forEach(function(P){s.call(l,P,_,this)},this)},this)},n.na=function(){Tt(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let _=0;_<l.length;_++){const P=s[_];for(let O=0;O<P.length;O++)d.push(l[_])}return d},n.V=function(s){Tt(this);let l=[];if(typeof s=="string")Bn(this,s)&&(l=l.concat(this.g.get(Rt(this,s))));else{s=Array.from(this.g.values());for(let d=0;d<s.length;d++)l=l.concat(s[d])}return l},n.set=function(s,l){return Tt(this),this.i=null,s=Rt(this,s),Bn(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function ar(s,l,d){rs(s,l),0<d.length&&(s.i=null,s.g.set(Rt(s,l),G(d)),s.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var _=l[d];const O=encodeURIComponent(String(_)),M=this.V(_);for(_=0;_<M.length;_++){var P=O;M[_]!==""&&(P+="="+encodeURIComponent(String(M[_]))),s.push(P)}}return this.i=s.join("&")};function Rt(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function so(s,l){l&&!s.j&&(Tt(s),s.i=null,s.g.forEach(function(d,_){var P=_.toLowerCase();_!=P&&(rs(this,_),ar(this,P,d))},s)),s.j=l}function oo(s,l){const d=new yi;if(h.Image){const _=new Image;_.onload=V(ct,d,"TestLoadImage: loaded",!0,l,_),_.onerror=V(ct,d,"TestLoadImage: error",!1,l,_),_.onabort=V(ct,d,"TestLoadImage: abort",!1,l,_),_.ontimeout=V(ct,d,"TestLoadImage: timeout",!1,l,_),h.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=s}else l(!1)}function ao(s,l){const d=new yi,_=new AbortController,P=setTimeout(()=>{_.abort(),ct(d,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:_.signal}).then(O=>{clearTimeout(P),O.ok?ct(d,"TestPingServer: ok",!0,l):ct(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(P),ct(d,"TestPingServer: error",!1,l)})}function ct(s,l,d,_,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),_(d)}catch{}}function La(){this.g=new Oa}function co(s,l,d){const _=d||"";try{ns(s,function(P,O){let M=P;g(P)&&(M=Wr(P)),l.push(_+O+"="+encodeURIComponent(M))})}catch(P){throw l.push(_+"type="+encodeURIComponent("_badmap")),P}}function jn(s){this.l=s.Ub||null,this.j=s.eb||!1}j(jn,Kr),jn.prototype.g=function(){return new Tn(this.l,this.j)},jn.prototype.i=function(s){return function(){return s}}({});function Tn(s,l){Fe.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(Tn,Fe),n=Tn.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,Xt(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||h).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ti(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Xt(this)),this.g&&(this.readyState=3,Xt(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cr(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function cr(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?Ti(this):Xt(this),this.readyState==3&&cr(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Ti(this))},n.Qa=function(s){this.g&&(this.response=s,Ti(this))},n.ga=function(){this.g&&Ti(this)};function Ti(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Xt(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,s.push(d[0]+": "+d[1]),d=l.next();return s.join(`\r
`)};function Xt(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function lo(s){let l="";return Re(s,function(d,_){l+=_,l+=":",l+=d,l+=`\r
`}),l}function lr(s,l,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=lo(d),typeof s=="string"?d!=null&&encodeURIComponent(String(d)):ge(s,l,d))}function Ae(s){Fe.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(Ae,Fe);var ss=/^https?$/i,os=["POST","PUT"];n=Ae.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gr.g(),this.v=this.o?Xs(this.o):Xs(Gr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(O){as(this,O);return}if(s=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var P in _)d.set(P,_[P]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())d.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),P=h.FormData&&s instanceof h.FormData,!(0<=Array.prototype.indexOf.call(os,l,void 0))||_||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,M]of d)this.g.setRequestHeader(O,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cs(this),this.u=!0,this.g.send(s),this.u=!1}catch(O){as(this,O)}};function as(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,qn(s),Ii(s)}function qn(s){s.A||(s.A=!0,Qe(s,"complete"),Qe(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Qe(this,"complete"),Qe(this,"abort"),Ii(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ii(this,!0)),Ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ur(this):this.bb())},n.bb=function(){ur(this)};function ur(s){if(s.h&&typeof c<"u"&&(!s.v[1]||et(s)!=4||s.Z()!=2)){if(s.u&&et(s)==4)Vn(s.Ea,0,s);else if(Qe(s,"readystatechange"),et(s)==4){s.h=!1;try{const M=s.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var _;if(_=M===0){var P=String(s.D).match(wt)[1]||null;!P&&h.self&&h.self.location&&(P=h.self.location.protocol.slice(0,-1)),_=!ss.test(P?P.toLowerCase():"")}d=_}if(d)Qe(s,"complete"),Qe(s,"success");else{s.m=6;try{var O=2<et(s)?s.g.statusText:""}catch{O=""}s.l=O+" ["+s.Z()+"]",qn(s)}}finally{Ii(s)}}}}function Ii(s,l){if(s.g){cs(s);const d=s.g,_=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||Qe(s,"ready");try{d.onreadystatechange=_}catch{}}}function cs(s){s.I&&(h.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function et(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<et(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),ka(l)}};function uo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function ho(s){const l={};s=(s.g&&2<=et(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<s.length;_++){if(X(s[_]))continue;var d=S(s[_]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=l[P]||[];l[P]=O,O.push(d)}C(l,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hn(s,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[s]||l}function ls(s){this.Aa=0,this.i=[],this.j=new yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hn("baseRetryDelayMs",5e3,s),this.cb=Hn("retryDelaySeedMs",1e4,s),this.Wa=Hn("forwardChannelMaxRetries",2,s),this.wa=Hn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Yr(s&&s.concurrentRequestLimit),this.Da=new La,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ls.prototype,n.la=8,n.G=1,n.connect=function(s,l,d,_){De(0),this.W=s,this.H=l||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=ps(this,null,this.W),Ai(this)};function hr(s){if(dr(s),s.G==3){var l=s.U++,d=ke(s.I);if(ge(d,"SID",s.K),ge(d,"RID",l),ge(d,"TYPE","terminate"),zn(s,d),l=new st(s,s.j,l),l.L=2,l.v=vn(ke(d)),d=!1,h.navigator&&h.navigator.sendBeacon)try{d=h.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&h.Image&&(new Image().src=l.v,d=!0),d||(l.g=go(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Ut(l)}po(s)}function bi(s){s.g&&(ds(s),s.g.cancel(),s.g=null)}function dr(s){bi(s),s.u&&(h.clearTimeout(s.u),s.u=null),Si(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&h.clearTimeout(s.s),s.s=null)}function Ai(s){if(!Jr(s.h)&&!s.s){s.s=!0;var l=s.Ga;hn||x(),pi||(hn(),pi=!0),Ki.add(l,s),s.B=0}}function xa(s,l){return Zr(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=_i(R(s.Ga,s,l),Yt(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const P=new st(this,this.j,s);let O=this.o;if(this.S&&(O?(O=v(O),T(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(l+=_,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=us(this,P,l),d=ke(this.I),ge(d,"RID",s),ge(d,"CVER",22),this.D&&ge(d,"X-HTTP-Session-Id",this.D),zn(this,d),O&&(this.O?l="headers="+encodeURIComponent(String(lo(O)))+"&"+l:this.m&&lr(d,this.m,O)),or(this.h,P),this.Ua&&ge(d,"TYPE","init"),this.P?(ge(d,"$req",l),ge(d,"SID","null"),P.T=!0,Ue(P,d,null)):Ue(P,d,l),this.G=2}}else this.G==3&&(s?fo(this,s):this.i.length==0||Jr(this.h)||fo(this))};function fo(s,l){var d;l?d=l.l:d=s.U++;const _=ke(s.I);ge(_,"SID",s.K),ge(_,"RID",d),ge(_,"AID",s.T),zn(s,_),s.m&&s.o&&lr(_,s.m,s.o),d=new st(s,s.j,d,s.B+1),s.m===null&&(d.H=s.o),l&&(s.i=l.D.concat(s.i)),l=us(s,d,1e3),d.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),or(s.h,d),Ue(d,_,l)}function zn(s,l){s.H&&Re(s.H,function(d,_){ge(l,_,d)}),s.l&&ns({},function(d,_){ge(l,_,d)})}function us(s,l,d){d=Math.min(s.i.length,d);var _=s.l?R(s.l.Na,s.l,s):null;e:{var P=s.i;let O=-1;for(;;){const M=["count="+d];O==-1?0<d?(O=P[0].g,M.push("ofs="+O)):O=0:M.push("ofs="+O);let ye=!0;for(let $e=0;$e<d;$e++){let de=P[$e].g;const He=P[$e].map;if(de-=O,0>de)O=Math.max(0,P[$e].g-100),ye=!1;else try{co(He,M,"req"+de+"_")}catch{_&&_(He)}}if(ye){_=M.join("&");break e}}}return s=s.i.splice(0,d),l.D=s,_}function Ci(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;hn||x(),pi||(hn(),pi=!0),Ki.add(l,s),s.v=0}}function hs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=_i(R(s.Fa,s),Yt(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,fr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=_i(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),bi(this),fr(this))};function ds(s){s.A!=null&&(h.clearTimeout(s.A),s.A=null)}function fr(s){s.g=new st(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=ke(s.qa);ge(l,"RID","rpc"),ge(l,"SID",s.K),ge(l,"AID",s.T),ge(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&ge(l,"TO",s.ja),ge(l,"TYPE","xmlhttp"),zn(s,l),s.m&&s.o&&lr(l,s.m,s.o),s.L&&(s.g.I=s.L);var d=s.g;s=s.ia,d.L=1,d.v=vn(ke(l)),d.m=null,d.P=!0,vi(d,s)}n.Za=function(){this.C!=null&&(this.C=null,bi(this),hs(this),De(19))};function Si(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function fs(s,l){var d=null;if(s.g==l){Si(s),ds(s),s.g=null;var _=2}else if(sr(s.h,l))d=l.D,es(s.h,l),_=1;else return;if(s.G!=0){if(l.o)if(_==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var P=s.B;_=er(),Qe(_,new eo(_,d)),Ai(s)}else Ci(s);else if(P=l.s,P==3||P==0&&0<l.X||!(_==1&&xa(s,l)||_==2&&hs(s)))switch(d&&0<d.length&&(l=s.h,l.i=l.i.concat(d)),P){case 1:Bt(s,5);break;case 4:Bt(s,10);break;case 3:Bt(s,6);break;default:Bt(s,2)}}}function Yt(s,l){let d=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(d*=2),d*l}function Bt(s,l){if(s.j.info("Error code "+l),l==2){var d=R(s.fb,s),_=s.Xa;const P=!_;_=new at(_||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Un(_,"https"),vn(_),P?oo(_.toString(),d):ao(_.toString(),d)}else De(2);s.G=0,s.l&&s.l.sa(l),po(s),dr(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function po(s){if(s.G=0,s.ka=[],s.l){const l=ts(s.h);(l.length!=0||s.i.length!=0)&&($(s.ka,l),$(s.ka,s.i),s.h.i.length=0,G(s.i),s.i.length=0),s.l.ra()}}function ps(s,l,d){var _=d instanceof at?ke(d):new at(d);if(_.g!="")l&&(_.g=l+"."+_.g),$n(_,_.s);else{var P=h.location;_=P.protocol,l=l?l+"."+P.hostname:P.hostname,P=+P.port;var O=new at(null);_&&Un(O,_),l&&(O.g=l),P&&$n(O,P),d&&(O.l=d),_=O}return d=s.D,l=s.ya,d&&l&&ge(_,d,l),ge(_,"VER",s.la),zn(s,_),_}function go(s,l,d){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new Ae(new jn({eb:d})):new Ae(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function mo(){}n=mo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function pr(){}pr.prototype.g=function(s,l){return new lt(s,l)};function lt(s,l){Fe.call(this),this.g=new ls(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!X(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!X(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new Wn(this)}j(lt,Fe),lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},lt.prototype.close=function(){hr(this.g)},lt.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var d={};d.__data__=s,s=d}else this.u&&(d={},d.__data__=Wr(s),s=d);l.i.push(new Xr(l.Ya++,s)),l.G==3&&Ai(l)},lt.prototype.N=function(){this.g.l=null,delete this.j,hr(this.g),delete this.g,lt.aa.N.call(this)};function gs(s){Mn.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const d in l){s=d;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}j(gs,Mn);function ms(){Zi.call(this),this.status=1}j(ms,Zi);function Wn(s){this.g=s}j(Wn,mo),Wn.prototype.ua=function(){Qe(this.g,"a")},Wn.prototype.ta=function(s){Qe(this.g,new gs(s))},Wn.prototype.sa=function(s){Qe(this.g,new ms)},Wn.prototype.ra=function(){Qe(this.g,"b")},pr.prototype.createWebChannel=pr.prototype.g,lt.prototype.send=lt.prototype.o,lt.prototype.open=lt.prototype.m,lt.prototype.close=lt.prototype.close,Kd=function(){return new pr},Wd=function(){return er()},zd=Kt,vc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},nr.NO_ERROR=0,nr.TIMEOUT=8,nr.HTTP_ERROR=6,Mo=nr,ir.COMPLETE="complete",Hd=ir,Ys.EventType=xn,xn.OPEN="a",xn.CLOSE="b",xn.ERROR="c",xn.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,ws=Ys,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,qd=Ae}).apply(typeof So<"u"?So:typeof self<"u"?self:typeof window<"u"?window:{});const ju="@firebase/firestore",qu="4.7.17";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let Ur="11.9.0";/**
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
 */const Bi=new la("@firebase/firestore");function yr(){return Bi.logLevel}function q(n,...e){if(Bi.logLevel<=le.DEBUG){const t=e.map(Xc);Bi.debug(`Firestore (${Ur}): ${n}`,...t)}}function kn(n,...e){if(Bi.logLevel<=le.ERROR){const t=e.map(Xc);Bi.error(`Firestore (${Ur}): ${n}`,...t)}}function Pr(n,...e){if(Bi.logLevel<=le.WARN){const t=e.map(Xc);Bi.warn(`Firestore (${Ur}): ${n}`,...t)}}function Xc(n){if(typeof n=="string")return n;try{/**
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
 */function ie(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Gd(n,i,t)}function Gd(n,e,t){let i=`FIRESTORE (${Ur}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw kn(i),new Error(i)}function Pe(n,e,t,i){let r="Unexpected state";typeof t=="string"?r=t:i=t,n||Gd(e,r,i)}function pe(n,e){return n}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends zt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class si{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Qd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nt.UNAUTHENTICATED))}shutdown(){}}class Uv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class $v{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Pe(this.o===void 0,42304);let i=this.i;const r=f=>this.i!==i?(i=this.i,t(f)):Promise.resolve();let o=new si;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new si,e.enqueueRetryable(()=>r(this.currentUser))};const c=()=>{const f=o;e.enqueueRetryable(async()=>{await f.promise,await r(this.currentUser)})},h=f=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new si)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Pe(typeof i.accessToken=="string",31837,{l:i}),new Qd(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new nt(e)}}class Bv{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class jv{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new Bv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Pe(this.o===void 0,3512);const i=o=>{o.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.m;return this.m=o.token,q("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const r=o=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Hu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Pe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Hu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Hv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function Xd(){return new TextEncoder}/**
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
 */class Yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const r=Hv(40);for(let o=0;o<r.length;++o)i.length<20&&r[o]<t&&(i+=e.charAt(r[o]%62))}return i}}function ce(n,e){return n<e?-1:n>e?1:0}function wc(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),r=e.codePointAt(t);if(i!==r){if(i<128&&r<128)return ce(i,r);{const o=Xd(),c=zv(o.encode(zu(n,t)),o.encode(zu(e,t)));return c!==0?c:ce(i,r)}}t+=i>65535?2:1}return ce(n.length,e.length)}function zu(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function zv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ce(n[t],e[t]);return ce(n.length,e.length)}function kr(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}/**
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
 */const Wu=-62135596800,Ku=1e6;class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Ku);return new _t(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Wu)throw new K(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ku}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Wu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new _t(0,0))}static max(){return new ne(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Gu="__name__";class en{constructor(e,t,i){t===void 0?t=0:t>e.length&&ie(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ie(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return en.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof en?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const o=en.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return ce(e.length,t.length)}static compareSegments(e,t){const i=en.isNumericId(e),r=en.isNumericId(t);return i&&!r?-1:!i&&r?1:i&&r?en.extractNumericId(e).compare(en.extractNumericId(t)):wc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ri.fromString(e.substring(4,e.length-2))}}class Se extends en{construct(e,t,i){return new Se(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new K(U.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new Se(t)}static emptyPath(){return new Se([])}}const Wv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends en{construct(e,t,i){return new dt(e,t,i)}static isValidIdentifier(e){return Wv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gu}static keyField(){return new dt([Gu])}static fromServerFormat(e){const t=[];let i="",r=0;const o=()=>{if(i.length===0)throw new K(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;r<e.length;){const h=e[r];if(h==="\\"){if(r+1===e.length)throw new K(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[r+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new K(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=f,r+=2}else h==="`"?(c=!c,r++):h!=="."||c?(i+=h,r++):(o(),r++)}if(o(),c)throw new K(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(t)}static emptyPath(){return new dt([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Se.fromString(e))}static fromName(e){return new Q(Se.fromString(e).popFirst(5))}static empty(){return new Q(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Se(e.slice()))}}/**
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
 */const Ns=-1;function Kv(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=ne.fromTimestamp(i===1e9?new _t(t+1,0):new _t(t,i));return new ci(r,Q.empty(),e)}function Gv(n){return new ci(n.readTime,n.key,Ns)}class ci{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ci(ne.min(),Q.empty(),Ns)}static max(){return new ci(ne.max(),Q.empty(),Ns)}}function Qv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
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
 */const Xv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function da(n){if(n.code!==U.FAILED_PRECONDITION||n.message!==Xv)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((i,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(i,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,i)=>{t(e)})}static reject(e){return new N((t,i)=>{i(e)})}static waitFor(e){return new N((t,i)=>{let r=0,o=0,c=!1;e.forEach(h=>{++r,h.next(()=>{++o,c&&o===r&&t()},f=>i(f))}),c=!0,o===r&&t()})}static or(e){let t=N.resolve(!1);for(const i of e)t=t.next(r=>r?N.resolve(r):i());return t}static forEach(e,t){const i=[];return e.forEach((r,o)=>{i.push(t.call(this,r,o))}),this.waitFor(i)}static mapArray(e,t){return new N((i,r)=>{const o=e.length,c=new Array(o);let h=0;for(let f=0;f<o;f++){const g=f;t(e[g]).next(y=>{c[g]=y,++h,h===o&&i(c)},y=>r(y))}})}static doWhile(e,t){return new N((i,r)=>{const o=()=>{e()===!0?t().next(()=>{o()},r):i()};o()})}}function Jv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function $r(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>t.writeSequenceNumber(i))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}fa.le=-1;/**
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
 */const Zv=-1;function pa(n){return n==null}function Ec(n){return n===0&&1/n==-1/0}/**
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
 */const Jd="";function ew(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Qu(e)),e=tw(n.get(t),e);return Qu(e)}function tw(n,e){let t=e;const i=n.length;for(let r=0;r<i;r++){const o=n.charAt(r);switch(o){case"\0":t+="";break;case Jd:t+="";break;default:t+=o}}return t}function Qu(n){return n+Jd+""}/**
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
 */function Xu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function js(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function nw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Le{constructor(e,t){this.comparator=e,this.root=t||Ye.EMPTY}insert(e,t){return new Le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ro(this.root,e,this.comparator,!0)}}class Ro{constructor(e,t,i,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?i(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,t,i,r,o){this.key=e,this.value=t,this.color=i??Ye.RED,this.left=r??Ye.EMPTY,this.right=o??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,r,o){return new Ye(e??this.key,t??this.value,i??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const o=i(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,i),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Ye.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,t,i,r,o){return this}insert(e,t,i){return new Ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yu(this.data.getIterator())}getIteratorFrom(e){return new Yu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=i.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new je(this.comparator);return t.data=e,t}}class Yu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ei{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new ei([])}unionWith(e){let t=new je(dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new ei(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kr(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class Zd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Zd("Invalid base64 string: "+o):o}}(e);return new Je(t)}static fromUint8Array(e){const t=function(r){let o="";for(let c=0;c<r.length;++c)o+=String.fromCharCode(r[c]);return o}(e);return new Je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const iw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function li(n){if(Pe(!!n,39018),typeof n=="string"){let e=0;const t=iw.exec(n);if(Pe(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ve(n.seconds),nanos:Ve(n.nanos)}}function Ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ui(n){return typeof n=="string"?Je.fromBase64String(n):Je.fromUint8Array(n)}/**
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
 */const ef="server_timestamp",tf="__type__",nf="__previous_value__",rf="__local_write_time__";function Yc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[tf])===null||t===void 0?void 0:t.stringValue)===ef}function ga(n){const e=n.mapValue.fields[nf];return Yc(e)?ga(e):e}function Vs(n){const e=li(n.mapValue.fields[rf].timestampValue);return new _t(e.seconds,e.nanos)}/**
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
 */class rw{constructor(e,t,i,r,o,c,h,f,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=g,this.isUsingEmulator=y}}const Jo="(default)";class Ls{constructor(e,t){this.projectId=e,this.database=t||Jo}static empty(){return new Ls("","")}get isDefaultDatabase(){return this.database===Jo}isEqual(e){return e instanceof Ls&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const sw="__type__",ow="__max__",Po={mapValue:{}},aw="__vector__",Tc="value";function hi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yc(n)?4:lw(n)?9007199254740991:cw(n)?10:11:ie(28295,{value:n})}function ln(n,e){if(n===e)return!0;const t=hi(n);if(t!==hi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vs(n).isEqual(Vs(e));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const c=li(r.timestampValue),h=li(o.timestampValue);return c.seconds===h.seconds&&c.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,o){return ui(r.bytesValue).isEqual(ui(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,o){return Ve(r.geoPointValue.latitude)===Ve(o.geoPointValue.latitude)&&Ve(r.geoPointValue.longitude)===Ve(o.geoPointValue.longitude)}(n,e);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return Ve(r.integerValue)===Ve(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const c=Ve(r.doubleValue),h=Ve(o.doubleValue);return c===h?Ec(c)===Ec(h):isNaN(c)&&isNaN(h)}return!1}(n,e);case 9:return kr(n.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:case 11:return function(r,o){const c=r.mapValue.fields||{},h=o.mapValue.fields||{};if(Xu(c)!==Xu(h))return!1;for(const f in c)if(c.hasOwnProperty(f)&&(h[f]===void 0||!ln(c[f],h[f])))return!1;return!0}(n,e);default:return ie(52216,{left:n})}}function xs(n,e){return(n.values||[]).find(t=>ln(t,e))!==void 0}function Or(n,e){if(n===e)return 0;const t=hi(n),i=hi(e);if(t!==i)return ce(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(o,c){const h=Ve(o.integerValue||o.doubleValue),f=Ve(c.integerValue||c.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,e);case 3:return Ju(n.timestampValue,e.timestampValue);case 4:return Ju(Vs(n),Vs(e));case 5:return wc(n.stringValue,e.stringValue);case 6:return function(o,c){const h=ui(o),f=ui(c);return h.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(o,c){const h=o.split("/"),f=c.split("/");for(let g=0;g<h.length&&g<f.length;g++){const y=ce(h[g],f[g]);if(y!==0)return y}return ce(h.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,c){const h=ce(Ve(o.latitude),Ve(c.latitude));return h!==0?h:ce(Ve(o.longitude),Ve(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Zu(n.arrayValue,e.arrayValue);case 10:return function(o,c){var h,f,g,y;const A=o.fields||{},R=c.fields||{},V=(h=A[Tc])===null||h===void 0?void 0:h.arrayValue,j=(f=R[Tc])===null||f===void 0?void 0:f.arrayValue,G=ce(((g=V==null?void 0:V.values)===null||g===void 0?void 0:g.length)||0,((y=j==null?void 0:j.values)===null||y===void 0?void 0:y.length)||0);return G!==0?G:Zu(V,j)}(n.mapValue,e.mapValue);case 11:return function(o,c){if(o===Po.mapValue&&c===Po.mapValue)return 0;if(o===Po.mapValue)return 1;if(c===Po.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),g=c.fields||{},y=Object.keys(g);f.sort(),y.sort();for(let A=0;A<f.length&&A<y.length;++A){const R=wc(f[A],y[A]);if(R!==0)return R;const V=Or(h[f[A]],g[y[A]]);if(V!==0)return V}return ce(f.length,y.length)}(n.mapValue,e.mapValue);default:throw ie(23264,{Pe:t})}}function Ju(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=li(n),i=li(e),r=ce(t.seconds,i.seconds);return r!==0?r:ce(t.nanos,i.nanos)}function Zu(n,e){const t=n.values||[],i=e.values||[];for(let r=0;r<t.length&&r<i.length;++r){const o=Or(t[r],i[r]);if(o)return o}return ce(t.length,i.length)}function Dr(n){return Ic(n)}function Ic(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=li(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ui(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",r=!0;for(const o of t.values||[])r?r=!1:i+=",",i+=Ic(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let r="{",o=!0;for(const c of i)o?o=!1:r+=",",r+=`${c}:${Ic(t.fields[c])}`;return r+"}"}(n.mapValue):ie(61005,{value:n})}function Fo(n){switch(hi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ga(n);return e?16+Fo(e):16;case 5:return 2*n.stringValue.length;case 6:return ui(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((r,o)=>r+Fo(o),0)}(n.arrayValue);case 10:case 11:return function(i){let r=0;return js(i.fields,(o,c)=>{r+=o.length+Fo(c)}),r}(n.mapValue);default:throw ie(13486,{value:n})}}function bc(n){return!!n&&"integerValue"in n}function Jc(n){return!!n&&"arrayValue"in n}function eh(n){return!!n&&"nullValue"in n}function th(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ic(n){return!!n&&"mapValue"in n}function cw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[sw])===null||t===void 0?void 0:t.stringValue)===aw}function Cs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return js(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Cs(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Cs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function lw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ow}/**
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
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ic(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cs(t)}setAll(e){let t=dt.emptyPath(),i={},r=[];e.forEach((c,h)=>{if(!t.isImmediateParentOf(h)){const f=this.getFieldsMap(t);this.applyChanges(f,i,r),i={},r=[],t=h.popLast()}c?i[h.lastSegment()]=Cs(c):r.push(h.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,i,r)}delete(e){const t=this.field(e.popLast());ic(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];ic(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){js(t,(r,o)=>e[r]=o);for(const r of i)delete e[r]}clone(){return new nn(Cs(this.value))}}/**
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
 */class it{constructor(e,t,i,r,o,c,h){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=o,this.data=c,this.documentState=h}static newInvalidDocument(e){return new it(e,0,ne.min(),ne.min(),ne.min(),nn.empty(),0)}static newFoundDocument(e,t,i,r){return new it(e,1,t,ne.min(),i,r,0)}static newNoDocument(e,t){return new it(e,2,t,ne.min(),ne.min(),nn.empty(),0)}static newUnknownDocument(e,t){return new it(e,3,t,ne.min(),ne.min(),nn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zo{constructor(e,t){this.position=e,this.inclusive=t}}function nh(n,e,t){let i=0;for(let r=0;r<n.position.length;r++){const o=e[r],c=n.position[r];if(o.field.isKeyField()?i=Q.comparator(Q.fromName(c.referenceValue),t.key):i=Or(c,t.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function ih(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ln(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ea{constructor(e,t="asc"){this.field=e,this.dir=t}}function uw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class sf{}class Be extends sf{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new dw(e,t,i):t==="array-contains"?new gw(e,i):t==="in"?new mw(e,i):t==="not-in"?new _w(e,i):t==="array-contains-any"?new yw(e,i):new Be(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new fw(e,i):new pw(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Or(t,this.value)):t!==null&&hi(this.value)===hi(t)&&this.matchesComparison(Or(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends sf{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new un(e,t)}matches(e){return of(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function of(n){return n.op==="and"}function af(n){return hw(n)&&of(n)}function hw(n){for(const e of n.filters)if(e instanceof un)return!1;return!0}function Ac(n){if(n instanceof Be)return n.field.canonicalString()+n.op.toString()+Dr(n.value);if(af(n))return n.filters.map(e=>Ac(e)).join(",");{const e=n.filters.map(t=>Ac(t)).join(",");return`${n.op}(${e})`}}function cf(n,e){return n instanceof Be?function(i,r){return r instanceof Be&&i.op===r.op&&i.field.isEqual(r.field)&&ln(i.value,r.value)}(n,e):n instanceof un?function(i,r){return r instanceof un&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((o,c,h)=>o&&cf(c,r.filters[h]),!0):!1}(n,e):void ie(19439)}function lf(n){return n instanceof Be?function(t){return`${t.field.canonicalString()} ${t.op} ${Dr(t.value)}`}(n):n instanceof un?function(t){return t.op.toString()+" {"+t.getFilters().map(lf).join(" ,")+"}"}(n):"Filter"}class dw extends Be{constructor(e,t,i){super(e,t,i),this.key=Q.fromName(i.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class fw extends Be{constructor(e,t){super(e,"in",t),this.keys=uf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class pw extends Be{constructor(e,t){super(e,"not-in",t),this.keys=uf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function uf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Q.fromName(i.referenceValue))}class gw extends Be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jc(t)&&xs(t.arrayValue,this.value)}}class mw extends Be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xs(this.value.arrayValue,t)}}class _w extends Be{constructor(e,t){super(e,"not-in",t)}matches(e){if(xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!xs(this.value.arrayValue,t)}}class yw extends Be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>xs(this.value.arrayValue,i))}}/**
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
 */class vw{constructor(e,t=null,i=[],r=[],o=null,c=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=o,this.startAt=c,this.endAt=h,this.Ie=null}}function rh(n,e=null,t=[],i=[],r=null,o=null,c=null){return new vw(n,e,t,i,r,o,c)}function Zc(n){const e=pe(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Ac(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),pa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Dr(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Dr(i)).join(",")),e.Ie=t}return e.Ie}function el(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!uw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!cf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ih(n.startAt,e.startAt)&&ih(n.endAt,e.endAt)}function Cc(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ma{constructor(e,t=null,i=[],r=[],o=null,c="F",h=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=o,this.limitType=c,this.startAt=h,this.endAt=f,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function ww(n,e,t,i,r,o,c,h){return new ma(n,e,t,i,r,o,c,h)}function tl(n){return new ma(n)}function sh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ew(n){return n.collectionGroup!==null}function Ss(n){const e=pe(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let h=new je(dt.comparator);return c.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(h=h.add(g.field))})}),h})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new ea(o,i))}),t.has(dt.keyField().canonicalString())||e.Ee.push(new ea(dt.keyField(),i))}return e.Ee}function on(n){const e=pe(n);return e.de||(e.de=Tw(e,Ss(n))),e.de}function Tw(n,e){if(n.limitType==="F")return rh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const o=r.dir==="desc"?"asc":"desc";return new ea(r.field,o)});const t=n.endAt?new Zo(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Zo(n.startAt.position,n.startAt.inclusive):null;return rh(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Sc(n,e,t){return new ma(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _a(n,e){return el(on(n),on(e))&&n.limitType===e.limitType}function hf(n){return`${Zc(on(n))}|lt:${n.limitType}`}function vr(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(r=>lf(r)).join(", ")}]`),pa(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(r=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(r)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(r=>Dr(r)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(r=>Dr(r)).join(",")),`Target(${i})`}(on(n))}; limitType=${n.limitType})`}function ya(n,e){return e.isFoundDocument()&&function(i,r){const o=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):Q.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,e)&&function(i,r){for(const o of Ss(i))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0}(n,e)&&function(i,r){for(const o of i.filters)if(!o.matches(r))return!1;return!0}(n,e)&&function(i,r){return!(i.startAt&&!function(c,h,f){const g=nh(c,h,f);return c.inclusive?g<=0:g<0}(i.startAt,Ss(i),r)||i.endAt&&!function(c,h,f){const g=nh(c,h,f);return c.inclusive?g>=0:g>0}(i.endAt,Ss(i),r))}(n,e)}function Iw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function df(n){return(e,t)=>{let i=!1;for(const r of Ss(n)){const o=bw(r,e,t);if(o!==0)return o;i=i||r.field.isKeyField()}return 0}}function bw(n,e,t){const i=n.field.isKeyField()?Q.comparator(e.key,t.key):function(o,c,h){const f=c.data.field(o),g=h.data.field(o);return f!==null&&g!==null?Or(f,g):ie(42886)}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ie(19790,{direction:n.dir})}}/**
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
 */class Wi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[r,o]of i)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[t]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){js(this.inner,(t,i)=>{for(const[r,o]of i)e(r,o)})}isEmpty(){return nw(this.inner)}size(){return this.innerSize}}/**
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
 */const Aw=new Le(Q.comparator);function di(){return Aw}const ff=new Le(Q.comparator);function Es(...n){let e=ff;for(const t of n)e=e.insert(t.key,t);return e}function Cw(n){let e=ff;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function xi(){return Rs()}function pf(){return Rs()}function Rs(){return new Wi(n=>n.toString(),(n,e)=>n.isEqual(e))}const Sw=new je(Q.comparator);function me(...n){let e=Sw;for(const t of n)e=e.add(t);return e}const Rw=new je(ce);function Pw(){return Rw}/**
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
 */function kw(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ec(e)?"-0":e}}function Ow(n){return{integerValue:""+n}}/**
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
 */class va{constructor(){this._=void 0}}function Dw(n,e,t){return n instanceof Rc?function(r,o){const c={fields:{[tf]:{stringValue:ef},[rf]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&Yc(o)&&(o=ga(o)),o&&(c.fields[nf]=o),{mapValue:c}}(t,e):n instanceof ta?gf(n,e):n instanceof na?mf(n,e):function(r,o){const c=Vw(r,o),h=oh(c)+oh(r.Re);return bc(c)&&bc(r.Re)?Ow(h):kw(r.serializer,h)}(n,e)}function Nw(n,e,t){return n instanceof ta?gf(n,e):n instanceof na?mf(n,e):t}function Vw(n,e){return n instanceof Pc?function(i){return bc(i)||function(o){return!!o&&"doubleValue"in o}(i)}(e)?e:{integerValue:0}:null}class Rc extends va{}class ta extends va{constructor(e){super(),this.elements=e}}function gf(n,e){const t=_f(e);for(const i of n.elements)t.some(r=>ln(r,i))||t.push(i);return{arrayValue:{values:t}}}class na extends va{constructor(e){super(),this.elements=e}}function mf(n,e){let t=_f(e);for(const i of n.elements)t=t.filter(r=>!ln(r,i));return{arrayValue:{values:t}}}class Pc extends va{constructor(e,t){super(),this.serializer=e,this.Re=t}}function oh(n){return Ve(n.integerValue||n.doubleValue)}function _f(n){return Jc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Lw(n,e){return n.field.isEqual(e.field)&&function(i,r){return i instanceof ta&&r instanceof ta||i instanceof na&&r instanceof na?kr(i.elements,r.elements,ln):i instanceof Pc&&r instanceof Pc?ln(i.Re,r.Re):i instanceof Rc&&r instanceof Rc}(n.transform,e.transform)}class Ui{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ui}static exists(e){return new Ui(void 0,e)}static updateTime(e){return new Ui(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class nl{}function yf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mw(n.key,Ui.none()):new il(n.key,n.data,Ui.none());{const t=n.data,i=nn.empty();let r=new je(dt.comparator);for(let o of e.fields)if(!r.has(o)){let c=t.field(o);c===null&&o.length>1&&(o=o.popLast(),c=t.field(o)),c===null?i.delete(o):i.set(o,c),r=r.add(o)}return new wa(n.key,i,new ei(r.toArray()),Ui.none())}}function xw(n,e,t){n instanceof il?function(r,o,c){const h=r.value.clone(),f=ch(r.fieldTransforms,o,c.transformResults);h.setAll(f),o.convertToFoundDocument(c.version,h).setHasCommittedMutations()}(n,e,t):n instanceof wa?function(r,o,c){if(!Uo(r.precondition,o))return void o.convertToUnknownDocument(c.version);const h=ch(r.fieldTransforms,o,c.transformResults),f=o.data;f.setAll(vf(r)),f.setAll(h),o.convertToFoundDocument(c.version,f).setHasCommittedMutations()}(n,e,t):function(r,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Ps(n,e,t,i){return n instanceof il?function(o,c,h,f){if(!Uo(o.precondition,c))return h;const g=o.value.clone(),y=lh(o.fieldTransforms,f,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,i):n instanceof wa?function(o,c,h,f){if(!Uo(o.precondition,c))return h;const g=lh(o.fieldTransforms,f,c),y=c.data;return y.setAll(vf(o)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,e,t,i):function(o,c,h){return Uo(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):h}(n,e,t)}function ah(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&kr(i,r,(o,c)=>Lw(o,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class il extends nl{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class wa extends nl{constructor(e,t,i,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function vf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function ch(n,e,t){const i=new Map;Pe(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let r=0;r<t.length;r++){const o=n[r],c=o.transform,h=e.data.field(o.field);i.set(o.field,Nw(c,h,t[r]))}return i}function lh(n,e,t){const i=new Map;for(const r of n){const o=r.transform,c=t.data.field(r.field);i.set(r.field,Dw(o,c,e))}return i}class Mw extends nl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Fw{constructor(e,t,i,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&xw(o,e,i[r])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ps(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ps(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=pf();return this.mutations.forEach(r=>{const o=e.get(r.key),c=o.overlayedDocument;let h=this.applyToLocalView(c,o.mutatedFields);h=t.has(r.key)?null:h;const f=yf(c,h);f!==null&&i.set(r.key,f),c.isValidDocument()||c.convertToNoDocument(ne.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),me())}isEqual(e){return this.batchId===e.batchId&&kr(this.mutations,e.mutations,(t,i)=>ah(t,i))&&kr(this.baseMutations,e.baseMutations,(t,i)=>ah(t,i))}}/**
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
 */class Uw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $w{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Me,fe;function wf(n){if(n===void 0)return kn("GRPC error has no .code"),U.UNKNOWN;switch(n){case Me.OK:return U.OK;case Me.CANCELLED:return U.CANCELLED;case Me.UNKNOWN:return U.UNKNOWN;case Me.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Me.INTERNAL:return U.INTERNAL;case Me.UNAVAILABLE:return U.UNAVAILABLE;case Me.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Me.NOT_FOUND:return U.NOT_FOUND;case Me.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Me.ABORTED:return U.ABORTED;case Me.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Me.DATA_LOSS:return U.DATA_LOSS;default:return ie(39323,{code:n})}}(fe=Me||(Me={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Bw=new ri([4294967295,4294967295],0);function uh(n){const e=Xd().encode(n),t=new jd;return t.update(e),new Uint8Array(t.digest())}function hh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ri([t,i],0),new ri([r,o],0)]}class rl{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ts(`Invalid padding: ${t}`);if(i<0)throw new Ts(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=ri.fromNumber(this.pe)}we(e,t,i){let r=e.add(t.multiply(ri.fromNumber(i)));return r.compare(Bw)===1&&(r=new ri([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=uh(e),[i,r]=hh(t);for(let o=0;o<this.hashCount;o++){const c=this.we(i,r,o);if(!this.be(c))return!1}return!0}static create(e,t,i){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),c=new rl(o,r,t);return i.forEach(h=>c.insert(h)),c}insert(e){if(this.pe===0)return;const t=uh(e),[i,r]=hh(t);for(let o=0;o<this.hashCount;o++){const c=this.we(i,r,o);this.Se(c)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ea{constructor(e,t,i,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const r=new Map;return r.set(e,qs.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Ea(ne.min(),r,new Le(ce),di(),me())}}class qs{constructor(e,t,i,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new qs(i,t,me(),me(),me())}}/**
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
 */class $o{constructor(e,t,i,r){this.De=e,this.removedTargetIds=t,this.key=i,this.ve=r}}class Ef{constructor(e,t){this.targetId=e,this.Ce=t}}class Tf{constructor(e,t,i=Je.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=r}}class dh{constructor(){this.Fe=0,this.Me=fh(),this.xe=Je.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=me(),t=me(),i=me();return this.Me.forEach((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:i=i.add(r);break;default:ie(38017,{changeType:o})}}),new qs(this.xe,this.Oe,e,t,i)}Qe(){this.Ne=!1,this.Me=fh()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Pe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class jw{constructor(e){this.ze=e,this.je=new Map,this.He=di(),this.Je=ko(),this.Ye=ko(),this.Ze=new Le(ce)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const i=this.rt(t);switch(e.state){case 0:this.it(t)&&i.ke(e.resumeToken);break;case 1:i.We(),i.Be||i.Qe(),i.ke(e.resumeToken);break;case 2:i.We(),i.Be||this.removeTarget(t);break;case 3:this.it(t)&&(i.Ge(),i.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),i.ke(e.resumeToken));break;default:ie(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((i,r)=>{this.it(r)&&t(r)})}ot(e){const t=e.targetId,i=e.Ce.count,r=this._t(t);if(r){const o=r.target;if(Cc(o))if(i===0){const c=new Q(o.path);this.tt(t,c,it.newNoDocument(c,ne.min()))}else Pe(i===1,20013,{expectedCount:i});else{const c=this.ut(t);if(c!==i){const h=this.ct(e),f=h?this.lt(h,e,c):1;if(f!==0){this.st(t);const g=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:o=0}=t;let c,h;try{c=ui(i).toUint8Array()}catch(f){if(f instanceof Zd)return Pr("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new rl(c,r,o)}catch(f){return Pr(f instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.pe===0?null:h}lt(e,t,i){return t.Ce.count===i-this.Tt(e,t.targetId)?0:2}Tt(e,t){const i=this.ze.getRemoteKeysForTarget(t);let r=0;return i.forEach(o=>{const c=this.ze.Pt(),h=`projects/${c.projectId}/databases/${c.database}/documents/${o.path.canonicalString()}`;e.mightContain(h)||(this.tt(t,o,null),r++)}),r}It(e){const t=new Map;this.je.forEach((o,c)=>{const h=this._t(c);if(h){if(o.current&&Cc(h.target)){const f=new Q(h.target.path);this.Et(f).has(c)||this.dt(c,f)||this.tt(c,f,it.newNoDocument(f,e))}o.Le&&(t.set(c,o.qe()),o.Qe())}});let i=me();this.Ye.forEach((o,c)=>{let h=!0;c.forEachWhile(f=>{const g=this._t(f);return!g||g.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(i=i.add(o))}),this.He.forEach((o,c)=>c.setReadTime(e));const r=new Ea(e,t,this.Ze,this.He,i);return this.He=di(),this.Je=ko(),this.Ye=ko(),this.Ze=new Le(ce),r}et(e,t){if(!this.it(e))return;const i=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,i),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,i){if(!this.it(e))return;const r=this.rt(e);this.dt(e,t)?r.$e(t,1):r.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),i&&(this.He=this.He.insert(t,i))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new dh,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new je(ce),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new je(ce),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new dh),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ko(){return new Le(Q.comparator)}function fh(){return new Le(Q.comparator)}const qw={asc:"ASCENDING",desc:"DESCENDING"},Hw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zw={and:"AND",or:"OR"};class Ww{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function kc(n,e){return n.useProto3Json||pa(e)?e:{value:e}}function Kw(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Cr(n){return Pe(!!n,49232),ne.fromTimestamp(function(t){const i=li(t);return new _t(i.seconds,i.nanos)}(n))}function Qw(n,e){return Oc(n,e).canonicalString()}function Oc(n,e){const t=function(r){return new Se(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function If(n){const e=Se.fromString(n);return Pe(Rf(e),10190,{key:e.toString()}),e}function rc(n,e){const t=If(e);if(t.get(1)!==n.databaseId.projectId)throw new K(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(Af(t))}function bf(n,e){return Qw(n.databaseId,e)}function Xw(n){const e=If(n);return e.length===4?Se.emptyPath():Af(e)}function ph(n){return new Se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Af(n){return Pe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Yw(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:ie(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=function(g,y){return g.useProto3Json?(Pe(y===void 0||typeof y=="string",58123),Je.fromBase64String(y||"")):(Pe(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),Je.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,h=c&&function(g){const y=g.code===void 0?U.UNKNOWN:wf(g.code);return new K(y,g.message||"")}(c);t=new Tf(i,r,o,h||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=rc(n,i.document.name),o=Cr(i.document.updateTime),c=i.document.createTime?Cr(i.document.createTime):ne.min(),h=new nn({mapValue:{fields:i.document.fields}}),f=it.newFoundDocument(r,o,c,h),g=i.targetIds||[],y=i.removedTargetIds||[];t=new $o(g,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=rc(n,i.document),o=i.readTime?Cr(i.readTime):ne.min(),c=it.newNoDocument(r,o),h=i.removedTargetIds||[];t=new $o([],h,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=rc(n,i.document),o=i.removedTargetIds||[];t=new $o([],o,r,null)}else{if(!("filter"in e))return ie(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:o}=i,c=new $w(r,o),h=i.targetId;t=new Ef(h,c)}}return t}function Jw(n,e){return{documents:[bf(n,e.path)]}}function Zw(n,e){const t={structuredQuery:{}},i=e.path;let r;e.collectionGroup!==null?(r=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=bf(n,r);const o=function(g){if(g.length!==0)return Sf(un.create(g,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const c=function(g){if(g.length!==0)return g.map(y=>function(R){return{field:wr(R.field),direction:nE(R.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const h=kc(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:r}}function eE(n){let e=Xw(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let r=null;if(i>0){Pe(i===1,65062);const y=t.from[0];y.allDescendants?r=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(A){const R=Cf(A);return R instanceof un&&af(R)?R.getFilters():[R]}(t.where));let c=[];t.orderBy&&(c=function(A){return A.map(R=>function(j){return new ea(Er(j.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(j.direction))}(R))}(t.orderBy));let h=null;t.limit&&(h=function(A){let R;return R=typeof A=="object"?A.value:A,pa(R)?null:R}(t.limit));let f=null;t.startAt&&(f=function(A){const R=!!A.before,V=A.values||[];return new Zo(V,R)}(t.startAt));let g=null;return t.endAt&&(g=function(A){const R=!A.before,V=A.values||[];return new Zo(V,R)}(t.endAt)),ww(e,r,c,o,h,"F",f,g)}function tE(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Cf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Er(t.unaryFilter.field);return Be.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=Er(t.unaryFilter.field);return Be.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Er(t.unaryFilter.field);return Be.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Er(t.unaryFilter.field);return Be.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}}(n):n.fieldFilter!==void 0?function(t){return Be.create(Er(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return un.create(t.compositeFilter.filters.map(i=>Cf(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ie(1026)}}(t.compositeFilter.op))}(n):ie(30097,{filter:n})}function nE(n){return qw[n]}function iE(n){return Hw[n]}function rE(n){return zw[n]}function wr(n){return{fieldPath:n.canonicalString()}}function Er(n){return dt.fromServerFormat(n.fieldPath)}function Sf(n){return n instanceof Be?function(t){if(t.op==="=="){if(th(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NAN"}};if(eh(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(th(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NAN"}};if(eh(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(t.field),op:iE(t.op),value:t.value}}}(n):n instanceof un?function(t){const i=t.getFilters().map(r=>Sf(r));return i.length===1?i[0]:{compositeFilter:{op:rE(t.op),filters:i}}}(n):ie(54877,{filter:n})}function Rf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ti{constructor(e,t,i,r,o=ne.min(),c=ne.min(),h=Je.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(e){return new ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class sE{constructor(e){this.wt=e}}function oE(n){const e=eE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Sc(e,e.limit,"L"):e}/**
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
 */class aE{constructor(){this.Cn=new cE}addToCollectionParentIndex(e,t){return this.Cn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(ci.min())}updateCollectionGroup(e,t,i){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class cE{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t]||new je(Se.comparator),o=!r.has(i);return this.index[t]=r.add(i),o}has(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t];return r&&r.has(i)}getEntries(e){return(this.index[e]||new je(Se.comparator)).toArray()}}/**
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
 */const gh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Pf=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(Pf,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
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
 */class Nr{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Nr(0)}static lr(){return new Nr(-1)}}/**
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
 */const mh="LruGarbageCollector",lE=1048576;function _h([n,e],[t,i]){const r=ce(n,t);return r===0?ce(e,i):r}class uE{constructor(e){this.Er=e,this.buffer=new je(_h),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();_h(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hE{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){q(mh,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$r(t)?q(mh,"Ignoring IndexedDB error during garbage collection: ",t):await da(t)}await this.mr(3e5)})}}class dE{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return N.resolve(fa.le);const i=new uE(t);return this.gr.forEachTarget(e,r=>i.Rr(r.sequenceNumber)).next(()=>this.gr.yr(e,r=>i.Rr(r))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.gr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(gh)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gh):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let i,r,o,c,h,f,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),r=this.params.maximumSequenceNumbersToCollect):r=A,c=Date.now(),this.nthSequenceNumber(e,r))).next(A=>(i=A,h=Date.now(),this.removeTargets(e,i,t))).next(A=>(o=A,f=Date.now(),this.removeOrphanedDocuments(e,i))).next(A=>(g=Date.now(),yr()<=le.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${r} in `+(h-c)+`ms
	Removed ${o} targets in `+(f-h)+`ms
	Removed ${A} documents in `+(g-f)+`ms
Total Duration: ${g-y}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:A})))}}function fE(n,e){return new dE(n,e)}/**
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
 */class pE{constructor(){this.changes=new Wi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?N.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class mE{constructor(e,t,i,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(i!==null&&Ps(i.mutation,r,ei.empty(),_t.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,me()).next(()=>i))}getLocalViewOfDocuments(e,t,i=me()){const r=xi();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,i).next(o=>{let c=Es();return o.forEach((h,f)=>{c=c.insert(h,f.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=xi();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,me()))}populateOverlays(e,t,i){const r=[];return i.forEach(o=>{t.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(e,r).next(o=>{o.forEach((c,h)=>{t.set(c,h)})})}computeViews(e,t,i,r){let o=di();const c=Rs(),h=function(){return Rs()}();return t.forEach((f,g)=>{const y=i.get(g.key);r.has(g.key)&&(y===void 0||y.mutation instanceof wa)?o=o.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),Ps(y.mutation,g,y.mutation.getFieldMask(),_t.now())):c.set(g.key,ei.empty())}),this.recalculateAndSaveOverlays(e,o).next(f=>(f.forEach((g,y)=>c.set(g,y)),t.forEach((g,y)=>{var A;return h.set(g,new gE(y,(A=c.get(g))!==null&&A!==void 0?A:null))}),h))}recalculateAndSaveOverlays(e,t){const i=Rs();let r=new Le((c,h)=>c-h),o=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const h of c)h.keys().forEach(f=>{const g=t.get(f);if(g===null)return;let y=i.get(f)||ei.empty();y=h.applyToLocalView(g,y),i.set(f,y);const A=(r.get(h.batchId)||me()).add(f);r=r.insert(h.batchId,A)})}).next(()=>{const c=[],h=r.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),g=f.key,y=f.value,A=pf();y.forEach(R=>{if(!o.has(R)){const V=yf(t.get(R),i.get(R));V!==null&&A.set(R,V),o=o.add(R)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,A))}return N.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,r){return function(c){return Q.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ew(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,r):this.getDocumentsMatchingCollectionQuery(e,t,i,r)}getNextDocuments(e,t,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,r).next(o=>{const c=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,r-o.size):N.resolve(xi());let h=Ns,f=o;return c.next(g=>N.forEach(g,(y,A)=>(h<A.largestBatchId&&(h=A.largestBatchId),o.get(y)?N.resolve():this.remoteDocumentCache.getEntry(e,y).next(R=>{f=f.insert(y,R)}))).next(()=>this.populateOverlays(e,g,o)).next(()=>this.computeViews(e,f,g,me())).next(y=>({batchId:h,changes:Cw(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(i=>{let r=Es();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,i,r){const o=t.collectionGroup;let c=Es();return this.indexManager.getCollectionParents(e,o).next(h=>N.forEach(h,f=>{const g=function(A,R){return new ma(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,f.child(o));return this.getDocumentsMatchingCollectionQuery(e,g,i,r).next(y=>{y.forEach((A,R)=>{c=c.insert(A,R)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,o,r))).next(c=>{o.forEach((f,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,it.newInvalidDocument(y)))});let h=Es();return c.forEach((f,g)=>{const y=o.get(f);y!==void 0&&Ps(y.mutation,g,ei.empty(),_t.now()),ya(t,g)&&(h=h.insert(f,g))}),h})}}/**
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
 */class _E{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return N.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Cr(r.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(r){return{name:r.name,query:oE(r.bundledQuery),readTime:Cr(r.readTime)}}(t)),N.resolve()}}/**
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
 */class yE{constructor(){this.overlays=new Le(Q.comparator),this.Qr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const i=xi();return N.forEach(t,r=>this.getOverlay(e,r).next(o=>{o!==null&&i.set(r,o)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((r,o)=>{this.St(e,t,o)}),N.resolve()}removeOverlaysForBatchId(e,t,i){const r=this.Qr.get(i);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(i)),N.resolve()}getOverlaysForCollection(e,t,i){const r=xi(),o=t.length+1,c=new Q(t.child("")),h=this.overlays.getIteratorFrom(c);for(;h.hasNext();){const f=h.getNext().value,g=f.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===o&&f.largestBatchId>i&&r.set(f.getKey(),f)}return N.resolve(r)}getOverlaysForCollectionGroup(e,t,i,r){let o=new Le((g,y)=>g-y);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>i){let y=o.get(g.largestBatchId);y===null&&(y=xi(),o=o.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const h=xi(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,y)=>h.set(g,y)),!(h.size()>=r)););return N.resolve(h)}St(e,t,i){const r=this.overlays.get(i.key);if(r!==null){const c=this.Qr.get(r.largestBatchId).delete(i.key);this.Qr.set(r.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new Uw(t,i));let o=this.Qr.get(t);o===void 0&&(o=me(),this.Qr.set(t,o)),this.Qr.set(t,o.add(i.key))}}/**
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
 */class vE{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class sl{constructor(){this.$r=new je(Ge.Ur),this.Kr=new je(Ge.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const i=new Ge(e,t);this.$r=this.$r.add(i),this.Kr=this.Kr.add(i)}Gr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.zr(new Ge(e,t))}jr(e,t){e.forEach(i=>this.removeReference(i,t))}Hr(e){const t=new Q(new Se([])),i=new Ge(t,e),r=new Ge(t,e+1),o=[];return this.Kr.forEachInRange([i,r],c=>{this.zr(c),o.push(c.key)}),o}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Q(new Se([])),i=new Ge(t,e),r=new Ge(t,e+1);let o=me();return this.Kr.forEachInRange([i,r],c=>{o=o.add(c.key)}),o}containsKey(e){const t=new Ge(e,0),i=this.$r.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ge{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Q.comparator(e.key,t.key)||ce(e.Zr,t.Zr)}static Wr(e,t){return ce(e.Zr,t.Zr)||Q.comparator(e.key,t.key)}}/**
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
 */class wE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new je(Ge.Ur)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,r){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Fw(o,t,i,r);this.mutationQueue.push(c);for(const h of r)this.Xr=this.Xr.add(new Ge(h.key,o)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return N.resolve(c)}lookupMutationBatch(e,t){return N.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,r=this.ti(i),o=r<0?0:r;return N.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Zv:this.nr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ge(t,0),r=new Ge(t,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([i,r],c=>{const h=this.ei(c.Zr);o.push(h)}),N.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new je(ce);return t.forEach(r=>{const o=new Ge(r,0),c=new Ge(r,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,c],h=>{i=i.add(h.Zr)})}),N.resolve(this.ni(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,r=i.length+1;let o=i;Q.isDocumentKey(o)||(o=o.child(""));const c=new Ge(new Q(o),0);let h=new je(ce);return this.Xr.forEachWhile(f=>{const g=f.key.path;return!!i.isPrefixOf(g)&&(g.length===r&&(h=h.add(f.Zr)),!0)},c),N.resolve(this.ni(h))}ni(e){const t=[];return e.forEach(i=>{const r=this.ei(i);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){Pe(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Xr;return N.forEach(t.mutations,r=>{const o=new Ge(r.key,t.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Xr=i})}sr(e){}containsKey(e,t){const i=new Ge(t,0),r=this.Xr.firstAfterOrEqual(i);return N.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class EE{constructor(e){this.ii=e,this.docs=function(){return new Le(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,r=this.docs.get(i),o=r?r.size:0,c=this.ii(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return N.resolve(i?i.document.mutableCopy():it.newInvalidDocument(t))}getEntries(e,t){let i=di();return t.forEach(r=>{const o=this.docs.get(r);i=i.insert(r,o?o.document.mutableCopy():it.newInvalidDocument(r))}),N.resolve(i)}getDocumentsMatchingQuery(e,t,i,r){let o=di();const c=t.path,h=new Q(c.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:g,value:{document:y}}=f.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||Qv(Gv(y),i)<=0||(r.has(y.key)||ya(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return N.resolve(o)}getAllFromCollectionGroup(e,t,i,r){ie(9500)}si(e,t){return N.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new TE(this)}getSize(e){return N.resolve(this.size)}}class TE extends pE{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?t.push(this.Br.addEntry(e,r)):this.Br.removeEntry(i)}),N.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class IE{constructor(e){this.persistence=e,this.oi=new Wi(t=>Zc(t),el),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this._i=0,this.ai=new sl,this.targetCount=0,this.ui=Nr.cr()}forEachTarget(e,t){return this.oi.forEach((i,r)=>t(r)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this._i&&(this._i=t),N.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Nr(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Tr(t),N.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,i){let r=0;const o=[];return this.oi.forEach((c,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.oi.delete(c),o.push(this.removeMatchingKeysForTargetId(e,h.targetId)),r++)}),N.waitFor(o).next(()=>r)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const i=this.oi.get(t)||null;return N.resolve(i)}addMatchingKeys(e,t,i){return this.ai.Gr(t,i),N.resolve()}removeMatchingKeys(e,t,i){this.ai.jr(t,i);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach(c=>{o.push(r.markPotentiallyOrphaned(e,c))}),N.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const i=this.ai.Yr(t);return N.resolve(i)}containsKey(e,t){return N.resolve(this.ai.containsKey(t))}}/**
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
 */class kf{constructor(e,t){this.ci={},this.overlays={},this.li=new fa(0),this.hi=!1,this.hi=!0,this.Pi=new vE,this.referenceDelegate=e(this),this.Ti=new IE(this),this.indexManager=new aE,this.remoteDocumentCache=function(r){return new EE(r)}(i=>this.referenceDelegate.Ii(i)),this.serializer=new sE(t),this.Ei=new _E(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new yE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ci[e.toKey()];return i||(i=new wE(t,this.referenceDelegate),this.ci[e.toKey()]=i),i}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,i){q("MemoryPersistence","Starting transaction:",e);const r=new bE(this.li.next());return this.referenceDelegate.di(),i(r).next(o=>this.referenceDelegate.Ai(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Ri(e,t){return N.or(Object.values(this.ci).map(i=>()=>i.containsKey(e,t)))}}class bE extends Yv{constructor(e){super(),this.currentSequenceNumber=e}}class ol{constructor(e){this.persistence=e,this.Vi=new sl,this.mi=null}static fi(e){return new ol(e)}get gi(){if(this.mi)return this.mi;throw ie(60996)}addReference(e,t,i){return this.Vi.addReference(i,t),this.gi.delete(i.toString()),N.resolve()}removeReference(e,t,i){return this.Vi.removeReference(i,t),this.gi.add(i.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(r=>this.gi.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(o=>this.gi.add(o.toString()))}).next(()=>i.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.gi,i=>{const r=Q.fromPath(i);return this.pi(e,r).next(o=>{o||t.removeEntry(r,ne.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(i=>{i?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return N.or([()=>N.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class ia{constructor(e,t){this.persistence=e,this.yi=new Wi(i=>ew(i.path),(i,r)=>i.isEqual(r)),this.garbageCollector=fE(this,t)}static fi(e,t){return new ia(e,t)}di(){}Ai(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(r=>i+r))}br(e){let t=0;return this.yr(e,i=>{t++}).next(()=>t)}yr(e,t){return N.forEach(this.yi,(i,r)=>this.Dr(e,i,r).next(o=>o?N.resolve():t(r)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.si(e,c=>this.Dr(e,c,t).next(h=>{h||(i++,o.removeEntry(c,ne.min()))})).next(()=>o.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.yi.set(i,e.currentSequenceNumber),N.resolve()}removeReference(e,t,i){return this.yi.set(i,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),N.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fo(e.data.value)),t}Dr(e,t,i){return N.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.yi.get(t);return N.resolve(r!==void 0&&r>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class al{constructor(e,t,i,r){this.targetId=e,this.fromCache=t,this.ds=i,this.As=r}static Rs(e,t){let i=me(),r=me();for(const o of t.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new al(e,t.fromCache,i,r)}}/**
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
 */class AE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class CE{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return mm()?8:Jv(rt())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,i,r){const o={result:null};return this.ws(e,t).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.bs(e,t,r,i).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new AE;return this.Ss(e,t,c).next(h=>{if(o.result=h,this.fs)return this.Ds(e,t,c,h.size)})}).next(()=>o.result)}Ds(e,t,i,r){return i.documentReadCount<this.gs?(yr()<=le.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",vr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),N.resolve()):(yr()<=le.DEBUG&&q("QueryEngine","Query:",vr(t),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.ps*r?(yr()<=le.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",vr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(t))):N.resolve())}ws(e,t){if(sh(t))return N.resolve(null);let i=on(t);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Sc(t,null,"F"),i=on(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(o=>{const c=me(...o);return this.ys.getDocuments(e,c).next(h=>this.indexManager.getMinOffset(e,i).next(f=>{const g=this.vs(t,h);return this.Cs(t,g,c,f.readTime)?this.ws(e,Sc(t,null,"F")):this.Fs(e,g,t,f)}))})))}bs(e,t,i,r){return sh(t)||r.isEqual(ne.min())?N.resolve(null):this.ys.getDocuments(e,i).next(o=>{const c=this.vs(t,o);return this.Cs(t,c,i,r)?N.resolve(null):(yr()<=le.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vr(t)),this.Fs(e,c,t,Kv(r,Ns)).next(h=>h))})}vs(e,t){let i=new je(df(e));return t.forEach((r,o)=>{ya(e,o)&&(i=i.add(o))}),i}Cs(e,t,i,r){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Ss(e,t,i){return yr()<=le.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",vr(t)),this.ys.getDocumentsMatchingQuery(e,t,ci.min(),i)}Fs(e,t,i,r){return this.ys.getDocumentsMatchingQuery(e,i,r).next(o=>(t.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
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
 */const cl="LocalStore",SE=3e8;class RE{constructor(e,t,i,r){this.persistence=e,this.Ms=t,this.serializer=r,this.xs=new Le(ce),this.Os=new Wi(o=>Zc(o),el),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(i)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mE(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function PE(n,e,t,i){return new RE(n,e,t,i)}async function Of(n,e){const t=pe(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let r;return t.mutationQueue.getAllMutationBatches(i).next(o=>(r=o,t.Ls(e),t.mutationQueue.getAllMutationBatches(i))).next(o=>{const c=[],h=[];let f=me();for(const g of r){c.push(g.batchId);for(const y of g.mutations)f=f.add(y.key)}for(const g of o){h.push(g.batchId);for(const y of g.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(i,f).next(g=>({ks:g,removedBatchIds:c,addedBatchIds:h}))})})}function Df(n){const e=pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function kE(n,e){const t=pe(n),i=e.snapshotVersion;let r=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});r=t.xs;const h=[];e.targetChanges.forEach((y,A)=>{const R=r.get(A);if(!R)return;h.push(t.Ti.removeMatchingKeys(o,y.removedDocuments,A).next(()=>t.Ti.addMatchingKeys(o,y.addedDocuments,A)));let V=R.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(A)!==null?V=V.withResumeToken(Je.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):y.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(y.resumeToken,i)),r=r.insert(A,V),function(G,$,oe){return G.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=SE?!0:oe.addedDocuments.size+oe.modifiedDocuments.size+oe.removedDocuments.size>0}(R,V,y)&&h.push(t.Ti.updateTargetData(o,V))});let f=di(),g=me();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),h.push(OE(o,c,e.documentUpdates).next(y=>{f=y.qs,g=y.Qs})),!i.isEqual(ne.min())){const y=t.Ti.getLastRemoteSnapshotVersion(o).next(A=>t.Ti.setTargetsMetadata(o,o.currentSequenceNumber,i));h.push(y)}return N.waitFor(h).next(()=>c.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,f,g)).next(()=>f)}).then(o=>(t.xs=r,o))}function OE(n,e,t){let i=me(),r=me();return t.forEach(o=>i=i.add(o)),e.getEntries(n,i).next(o=>{let c=di();return t.forEach((h,f)=>{const g=o.get(h);f.isFoundDocument()!==g.isFoundDocument()&&(r=r.add(h)),f.isNoDocument()&&f.version.isEqual(ne.min())?(e.removeEntry(h,f.readTime),c=c.insert(h,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||f.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(f),c=c.insert(h,f)):q(cl,"Ignoring outdated watch update for ",h,". Current version:",g.version," Watch version:",f.version)}),{qs:c,Qs:r}})}function DE(n,e){const t=pe(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return t.Ti.getTargetData(i,e).next(o=>o?(r=o,N.resolve(r)):t.Ti.allocateTargetId(i).next(c=>(r=new ti(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Ti.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=t.xs.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.xs=t.xs.insert(i.targetId,i),t.Os.set(e,i.targetId)),i})}async function Dc(n,e,t){const i=pe(n),r=i.xs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",o,c=>i.persistence.referenceDelegate.removeTarget(c,r))}catch(c){if(!$r(c))throw c;q(cl,`Failed to update sequence numbers for target ${e}: ${c}`)}i.xs=i.xs.remove(e),i.Os.delete(r.target)}function yh(n,e,t){const i=pe(n);let r=ne.min(),o=me();return i.persistence.runTransaction("Execute query","readwrite",c=>function(f,g,y){const A=pe(f),R=A.Os.get(y);return R!==void 0?N.resolve(A.xs.get(R)):A.Ti.getTargetData(g,y)}(i,c,on(e)).next(h=>{if(h)return r=h.lastLimboFreeSnapshotVersion,i.Ti.getMatchingKeysForTargetId(c,h.targetId).next(f=>{o=f})}).next(()=>i.Ms.getDocumentsMatchingQuery(c,e,t?r:ne.min(),t?o:me())).next(h=>(NE(i,Iw(e),h),{documents:h,$s:o})))}function NE(n,e,t){let i=n.Ns.get(e)||ne.min();t.forEach((r,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)}),n.Ns.set(e,i)}class vh{constructor(){this.activeTargetIds=Pw()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VE{constructor(){this.xo=new vh,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,i){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new vh,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class LE{No(e){}shutdown(){}}/**
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
 */const wh="ConnectivityMonitor";class Eh{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){q(wh,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){q(wh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oo=null;function Nc(){return Oo===null?Oo=function(){return 268435456+Math.round(2147483648*Math.random())}():Oo++,"0x"+Oo.toString(16)}/**
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
 */const sc="RestConnection",xE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ME{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${i}/databases/${r}`,this.Go=this.databaseId.database===Jo?`project_id=${i}`:`project_id=${i}&database_id=${r}`}zo(e,t,i,r,o){const c=Nc(),h=this.jo(e,t.toUriEncodedString());q(sc,`Sending RPC '${e}' ${c}:`,h,i);const f={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(f,r,o);const{host:g}=new URL(h),y=xr(g);return this.Jo(e,h,f,i,y).then(A=>(q(sc,`Received RPC '${e}' ${c}: `,A),A),A=>{throw Pr(sc,`RPC '${e}' ${c} failed with error: `,A,"url: ",h,"request:",i),A})}Yo(e,t,i,r,o,c){return this.zo(e,t,i,r,o)}Ho(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ur}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,o)=>e[o]=r),i&&i.headers.forEach((r,o)=>e[o]=r)}jo(e,t){const i=xE[e];return`${this.Ko}/v1/${t}:${i}`}terminate(){}}/**
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
 */class FE{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const tt="WebChannelConnection";class UE extends ME{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,r,o){const c=Nc();return new Promise((h,f)=>{const g=new qd;g.setWithCredentials(!0),g.listenOnce(Hd.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Mo.NO_ERROR:const A=g.getResponseJson();q(tt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(A)),h(A);break;case Mo.TIMEOUT:q(tt,`RPC '${e}' ${c} timed out`),f(new K(U.DEADLINE_EXCEEDED,"Request time out"));break;case Mo.HTTP_ERROR:const R=g.getStatus();if(q(tt,`RPC '${e}' ${c} failed with status:`,R,"response text:",g.getResponseText()),R>0){let V=g.getResponseJson();Array.isArray(V)&&(V=V[0]);const j=V==null?void 0:V.error;if(j&&j.status&&j.message){const G=function(oe){const X=oe.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(X)>=0?X:U.UNKNOWN}(j.status);f(new K(G,j.message))}else f(new K(U.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new K(U.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{h_:e,streamId:c,P_:g.getLastErrorCode(),T_:g.getLastError()})}}finally{q(tt,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(r);q(tt,`RPC '${e}' ${c} sending request:`,r),g.send(t,"POST",y,i,15)})}I_(e,t,i){const r=Nc(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Kd(),h=Wd(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Ho(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const y=o.join("");q(tt,`Creating RPC '${e}' stream ${r}: ${y}`,f);const A=c.createWebChannel(y,f);this.E_(A);let R=!1,V=!1;const j=new FE({Zo:$=>{V?q(tt,`Not sending because RPC '${e}' stream ${r} is closed:`,$):(R||(q(tt,`Opening RPC '${e}' stream ${r} transport.`),A.open(),R=!0),q(tt,`RPC '${e}' stream ${r} sending:`,$),A.send($))},Xo:()=>A.close()}),G=($,oe,X)=>{$.listen(oe,ue=>{try{X(ue)}catch(Ie){setTimeout(()=>{throw Ie},0)}})};return G(A,ws.EventType.OPEN,()=>{V||(q(tt,`RPC '${e}' stream ${r} transport opened.`),j.__())}),G(A,ws.EventType.CLOSE,()=>{V||(V=!0,q(tt,`RPC '${e}' stream ${r} transport closed`),j.u_(),this.d_(A))}),G(A,ws.EventType.ERROR,$=>{V||(V=!0,Pr(tt,`RPC '${e}' stream ${r} transport errored. Name:`,$.name,"Message:",$.message),j.u_(new K(U.UNAVAILABLE,"The operation could not be completed")))}),G(A,ws.EventType.MESSAGE,$=>{var oe;if(!V){const X=$.data[0];Pe(!!X,16349);const ue=X,Ie=(ue==null?void 0:ue.error)||((oe=ue[0])===null||oe===void 0?void 0:oe.error);if(Ie){q(tt,`RPC '${e}' stream ${r} received error:`,Ie);const ft=Ie.status;let Re=function(E){const T=Me[E];if(T!==void 0)return wf(T)}(ft),C=Ie.message;Re===void 0&&(Re=U.INTERNAL,C="Unknown error status: "+ft+" with message "+Ie.message),V=!0,j.u_(new K(Re,C)),A.close()}else q(tt,`RPC '${e}' stream ${r} received:`,X),j.c_(X)}}),G(h,zd.STAT_EVENT,$=>{$.stat===vc.PROXY?q(tt,`RPC '${e}' stream ${r} detected buffering proxy`):$.stat===vc.NOPROXY&&q(tt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{j.a_()},0),j}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function oc(){return typeof document<"u"?document:null}/**
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
 */function Nf(n){return new Ww(n,!0)}/**
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
 */class Vf{constructor(e,t,i=1e3,r=1.5,o=6e4){this.xi=e,this.timerId=t,this.A_=i,this.R_=r,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),i=Math.max(0,Date.now()-this.g_),r=Math.max(0,t-i);r>0&&q("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,r,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Th="PersistentStream";class $E{constructor(e,t,i,r,o,c,h,f){this.xi=e,this.S_=i,this.D_=r,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Vf(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===U.RESOURCE_EXHAUSTED?(kn(t.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.v_===t&&this.z_(i,r)},i=>{e(()=>{const r=new K(U.UNKNOWN,"Fetching auth token failed: "+i.message);return this.j_(r)})})}z_(e,t){const i=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{i(()=>this.listener.e_())}),this.stream.n_(()=>{i(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(r=>{i(()=>this.j_(r))}),this.stream.onMessage(r=>{i(()=>++this.M_==1?this.J_(r):this.onNext(r))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return q(Th,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(q(Th,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BE extends $E{constructor(e,t,i,r,o,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r,c),this.serializer=o}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=Yw(this.serializer,e),i=function(o){if(!("targetChange"in o))return ne.min();const c=o.targetChange;return c.targetIds&&c.targetIds.length?ne.min():c.readTime?Cr(c.readTime):ne.min()}(e);return this.listener.Y_(t,i)}Z_(e){const t={};t.database=ph(this.serializer),t.addTarget=function(o,c){let h;const f=c.target;if(h=Cc(f)?{documents:Jw(o,f)}:{query:Zw(o,f).gt},h.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){h.resumeToken=Gw(o,c.resumeToken);const g=kc(o,c.expectedCount);g!==null&&(h.expectedCount=g)}else if(c.snapshotVersion.compareTo(ne.min())>0){h.readTime=Kw(o,c.snapshotVersion.toTimestamp());const g=kc(o,c.expectedCount);g!==null&&(h.expectedCount=g)}return h}(this.serializer,e);const i=tE(this.serializer,e);i&&(t.labels=i),this.Q_(t)}X_(e){const t={};t.database=ph(this.serializer),t.removeTarget=e,this.Q_(t)}}/**
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
 */class jE{}class qE extends jE{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.sa=!1}oa(){if(this.sa)throw new K(U.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,i,r){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.zo(e,Oc(t,i),r,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(U.UNKNOWN,o.toString())})}Yo(e,t,i,r,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,h])=>this.connection.Yo(e,Oc(t,i),r,c,h,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new K(U.UNKNOWN,c.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class HE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(kn(t),this.ua=!1):q("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Vr="RemoteStore";class zE{constructor(e,t,i,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(c=>{i.enqueueAndForget(async()=>{zs(this)&&(q(Vr,"Restarting streams for network reachability change."),await async function(f){const g=pe(f);g.da.add(4),await Hs(g),g.Va.set("Unknown"),g.da.delete(4),await Ta(g)}(this))})}),this.Va=new HE(i,r)}}async function Ta(n){if(zs(n))for(const e of n.Aa)await e(!0)}async function Hs(n){for(const e of n.Aa)await e(!1)}function Lf(n,e){const t=pe(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),dl(t)?hl(t):Br(t).N_()&&ul(t,e))}function ll(n,e){const t=pe(n),i=Br(t);t.Ea.delete(e),i.N_()&&xf(t,e),t.Ea.size===0&&(i.N_()?i.k_():zs(t)&&t.Va.set("Unknown"))}function ul(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Br(n).Z_(e)}function xf(n,e){n.ma.Ke(e),Br(n).X_(e)}function hl(n){n.ma=new jw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Br(n).start(),n.Va.ca()}function dl(n){return zs(n)&&!Br(n).O_()&&n.Ea.size>0}function zs(n){return pe(n).da.size===0}function Mf(n){n.ma=void 0}async function WE(n){n.Va.set("Online")}async function KE(n){n.Ea.forEach((e,t)=>{ul(n,e)})}async function GE(n,e){Mf(n),dl(n)?(n.Va.Pa(e),hl(n)):n.Va.set("Unknown")}async function QE(n,e,t){if(n.Va.set("Online"),e instanceof Tf&&e.state===2&&e.cause)try{await async function(r,o){const c=o.cause;for(const h of o.targetIds)r.Ea.has(h)&&(await r.remoteSyncer.rejectListen(h,c),r.Ea.delete(h),r.ma.removeTarget(h))}(n,e)}catch(i){q(Vr,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ih(n,i)}else if(e instanceof $o?n.ma.Xe(e):e instanceof Ef?n.ma.ot(e):n.ma.nt(e),!t.isEqual(ne.min()))try{const i=await Df(n.localStore);t.compareTo(i)>=0&&await function(o,c){const h=o.ma.It(c);return h.targetChanges.forEach((f,g)=>{if(f.resumeToken.approximateByteSize()>0){const y=o.Ea.get(g);y&&o.Ea.set(g,y.withResumeToken(f.resumeToken,c))}}),h.targetMismatches.forEach((f,g)=>{const y=o.Ea.get(f);if(!y)return;o.Ea.set(f,y.withResumeToken(Je.EMPTY_BYTE_STRING,y.snapshotVersion)),xf(o,f);const A=new ti(y.target,f,g,y.sequenceNumber);ul(o,A)}),o.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(i){q(Vr,"Failed to raise snapshot:",i),await Ih(n,i)}}async function Ih(n,e,t){if(!$r(e))throw e;n.da.add(1),await Hs(n),n.Va.set("Offline"),t||(t=()=>Df(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(Vr,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Ta(n)})}async function bh(n,e){const t=pe(n);t.asyncQueue.verifyOperationInProgress(),q(Vr,"RemoteStore received new credentials");const i=zs(t);t.da.add(3),await Hs(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Ta(t)}async function XE(n,e){const t=pe(n);e?(t.da.delete(2),await Ta(t)):e||(t.da.add(2),await Hs(t),t.Va.set("Unknown"))}function Br(n){return n.fa||(n.fa=function(t,i,r){const o=pe(t);return o.oa(),new BE(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{e_:WE.bind(null,n),n_:KE.bind(null,n),i_:GE.bind(null,n),Y_:QE.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),dl(n)?hl(n):n.Va.set("Unknown")):(await n.fa.stop(),Mf(n))})),n.fa}/**
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
 */class fl{constructor(e,t,i,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new si,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,r,o){const c=Date.now()+i,h=new fl(e,t,c,r,o);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ff(n,e){if(kn("AsyncQueue",`${e}: ${n}`),$r(n))return new K(U.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Sr{static emptySet(e){return new Sr(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Q.comparator(t.key,i.key):(t,i)=>Q.comparator(t.key,i.key),this.keyedMap=Es(),this.sortedSet=new Le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=i.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Sr;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Ah{constructor(){this.pa=new Le(Q.comparator)}track(e){const t=e.doc.key,i=this.pa.get(t);i?e.type!==0&&i.type===3?this.pa=this.pa.insert(t,e):e.type===3&&i.type!==1?this.pa=this.pa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.pa=this.pa.remove(t):e.type===1&&i.type===2?this.pa=this.pa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):ie(63341,{Vt:e,ya:i}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,i)=>{e.push(i)}),e}}class Lr{constructor(e,t,i,r,o,c,h,f,g){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=o,this.fromCache=c,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=g}static fromInitialDocuments(e,t,i,r,o){const c=[];return t.forEach(h=>{c.push({type:0,doc:h})}),new Lr(e,t,Sr.emptySet(t),c,i,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==i[r].type||!t[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class YE{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class JE{constructor(){this.queries=Ch(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const r=pe(t),o=r.queries;r.queries=Ch(),o.forEach((c,h)=>{for(const f of h.Sa)f.onError(i)})})(this,new K(U.ABORTED,"Firestore shutting down"))}}function Ch(){return new Wi(n=>hf(n),_a)}async function Uf(n,e){const t=pe(n);let i=3;const r=e.query;let o=t.queries.get(r);o?!o.Da()&&e.va()&&(i=2):(o=new YE,i=e.va()?0:1);try{switch(i){case 0:o.ba=await t.onListen(r,!0);break;case 1:o.ba=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(c){const h=Ff(c,`Initialization of query '${vr(e.query)}' failed`);return void e.onError(h)}t.queries.set(r,o),o.Sa.push(e),e.Fa(t.onlineState),o.ba&&e.Ma(o.ba)&&pl(t)}async function $f(n,e){const t=pe(n),i=e.query;let r=3;const o=t.queries.get(i);if(o){const c=o.Sa.indexOf(e);c>=0&&(o.Sa.splice(c,1),o.Sa.length===0?r=e.va()?0:1:!o.Da()&&e.va()&&(r=2))}switch(r){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function ZE(n,e){const t=pe(n);let i=!1;for(const r of e){const o=r.query,c=t.queries.get(o);if(c){for(const h of c.Sa)h.Ma(r)&&(i=!0);c.ba=r}}i&&pl(t)}function eT(n,e,t){const i=pe(n),r=i.queries.get(e);if(r)for(const o of r.Sa)o.onError(t);i.queries.delete(e)}function pl(n){n.Ca.forEach(e=>{e.next()})}var Vc,Sh;(Sh=Vc||(Vc={})).xa="default",Sh.Cache="cache";class Bf{constructor(e,t,i){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=i||{}}Ma(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Lr(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const i=t!=="Offline";return(!this.options.Qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=Lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Vc.Cache}}/**
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
 */class jf{constructor(e){this.key=e}}class qf{constructor(e){this.key=e}}class tT{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=me(),this.mutatedKeys=me(),this.Za=df(e),this.Xa=new Sr(this.Za)}get eu(){return this.Ha}tu(e,t){const i=t?t.nu:new Ah,r=t?t.Xa:this.Xa;let o=t?t.mutatedKeys:this.mutatedKeys,c=r,h=!1;const f=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,g=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((y,A)=>{const R=r.get(y),V=ya(this.query,A)?A:null,j=!!R&&this.mutatedKeys.has(R.key),G=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let $=!1;R&&V?R.data.isEqual(V.data)?j!==G&&(i.track({type:3,doc:V}),$=!0):this.ru(R,V)||(i.track({type:2,doc:V}),$=!0,(f&&this.Za(V,f)>0||g&&this.Za(V,g)<0)&&(h=!0)):!R&&V?(i.track({type:0,doc:V}),$=!0):R&&!V&&(i.track({type:1,doc:R}),$=!0,(f||g)&&(h=!0)),$&&(V?(c=c.add(V),o=G?o.add(y):o.delete(y)):(c=c.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),o=o.delete(y.key),i.track({type:1,doc:y})}return{Xa:c,nu:i,Cs:h,mutatedKeys:o}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,r){const o=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const c=e.nu.wa();c.sort((y,A)=>function(V,j){const G=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Vt:$})}};return G(V)-G(j)}(y.type,A.type)||this.Za(y.doc,A.doc)),this.iu(i),r=r!=null&&r;const h=t&&!r?this.su():[],f=this.Ya.size===0&&this.current&&!r?1:0,g=f!==this.Ja;return this.Ja=f,c.length!==0||g?{snapshot:new Lr(this.query,e.Xa,o,c,e.mutatedKeys,f===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),ou:h}:{ou:h}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Ah,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=me(),this.Xa.forEach(i=>{this._u(i.key)&&(this.Ya=this.Ya.add(i.key))});const t=[];return e.forEach(i=>{this.Ya.has(i)||t.push(new qf(i))}),this.Ya.forEach(i=>{e.has(i)||t.push(new jf(i))}),t}au(e){this.Ha=e.$s,this.Ya=me();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return Lr.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const gl="SyncEngine";class nT{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class iT{constructor(e){this.key=e,this.cu=!1}}class rT{constructor(e,t,i,r,o,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.lu={},this.hu=new Wi(h=>hf(h),_a),this.Pu=new Map,this.Tu=new Set,this.Iu=new Le(Q.comparator),this.Eu=new Map,this.du=new sl,this.Au={},this.Ru=new Map,this.Vu=Nr.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function sT(n,e,t=!0){const i=Gf(n);let r;const o=i.hu.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.uu()):r=await Hf(i,e,t,!0),r}async function oT(n,e){const t=Gf(n);await Hf(t,e,!0,!1)}async function Hf(n,e,t,i){const r=await DE(n.localStore,on(e)),o=r.targetId,c=n.sharedClientState.addLocalQueryTarget(o,t);let h;return i&&(h=await aT(n,e,o,c==="current",r.resumeToken)),n.isPrimaryClient&&t&&Lf(n.remoteStore,r),h}async function aT(n,e,t,i,r){n.fu=(A,R,V)=>async function(G,$,oe,X){let ue=$.view.tu(oe);ue.Cs&&(ue=await yh(G.localStore,$.query,!1).then(({documents:C})=>$.view.tu(C,ue)));const Ie=X&&X.targetChanges.get($.targetId),ft=X&&X.targetMismatches.get($.targetId)!=null,Re=$.view.applyChanges(ue,G.isPrimaryClient,Ie,ft);return Ph(G,$.targetId,Re.ou),Re.snapshot}(n,A,R,V);const o=await yh(n.localStore,e,!0),c=new tT(e,o.$s),h=c.tu(o.documents),f=qs.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",r),g=c.applyChanges(h,n.isPrimaryClient,f);Ph(n,t,g.ou);const y=new nT(e,t,c);return n.hu.set(e,y),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),g.snapshot}async function cT(n,e,t){const i=pe(n),r=i.hu.get(e),o=i.Pu.get(r.targetId);if(o.length>1)return i.Pu.set(r.targetId,o.filter(c=>!_a(c,e))),void i.hu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Dc(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),t&&ll(i.remoteStore,r.targetId),Lc(i,r.targetId)}).catch(da)):(Lc(i,r.targetId),await Dc(i.localStore,r.targetId,!0))}async function lT(n,e){const t=pe(n),i=t.hu.get(e),r=t.Pu.get(i.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),ll(t.remoteStore,i.targetId))}async function zf(n,e){const t=pe(n);try{const i=await kE(t.localStore,e);e.targetChanges.forEach((r,o)=>{const c=t.Eu.get(o);c&&(Pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?c.cu=!0:r.modifiedDocuments.size>0?Pe(c.cu,14607):r.removedDocuments.size>0&&(Pe(c.cu,42227),c.cu=!1))}),await Kf(t,i,e)}catch(i){await da(i)}}function Rh(n,e,t){const i=pe(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const r=[];i.hu.forEach((o,c)=>{const h=c.view.Fa(e);h.snapshot&&r.push(h.snapshot)}),function(c,h){const f=pe(c);f.onlineState=h;let g=!1;f.queries.forEach((y,A)=>{for(const R of A.Sa)R.Fa(h)&&(g=!0)}),g&&pl(f)}(i.eventManager,e),r.length&&i.lu.Y_(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function uT(n,e,t){const i=pe(n);i.sharedClientState.updateQueryState(e,"rejected",t);const r=i.Eu.get(e),o=r&&r.key;if(o){let c=new Le(Q.comparator);c=c.insert(o,it.newNoDocument(o,ne.min()));const h=me().add(o),f=new Ea(ne.min(),new Map,new Le(ce),c,h);await zf(i,f),i.Iu=i.Iu.remove(o),i.Eu.delete(e),ml(i)}else await Dc(i.localStore,e,!1).then(()=>Lc(i,e,t)).catch(da)}function Lc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Pu.get(e))n.hu.delete(i),t&&n.lu.gu(i,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(i=>{n.du.containsKey(i)||Wf(n,i)})}function Wf(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(ll(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),ml(n))}function Ph(n,e,t){for(const i of t)i instanceof jf?(n.du.addReference(i.key,e),hT(n,i)):i instanceof qf?(q(gl,"Document no longer in limbo: "+i.key),n.du.removeReference(i.key,e),n.du.containsKey(i.key)||Wf(n,i.key)):ie(19791,{pu:i})}function hT(n,e){const t=e.key,i=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(i)||(q(gl,"New document in limbo: "+t),n.Tu.add(i),ml(n))}function ml(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new Q(Se.fromString(e)),i=n.Vu.next();n.Eu.set(i,new iT(t)),n.Iu=n.Iu.insert(t,i),Lf(n.remoteStore,new ti(on(tl(t.path)),i,"TargetPurposeLimboResolution",fa.le))}}async function Kf(n,e,t){const i=pe(n),r=[],o=[],c=[];i.hu.isEmpty()||(i.hu.forEach((h,f)=>{c.push(i.fu(f,e,t).then(g=>{var y;if((g||t)&&i.isPrimaryClient){const A=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;i.sharedClientState.updateQueryState(f.targetId,A?"current":"not-current")}if(g){r.push(g);const A=al.Rs(f.targetId,g);o.push(A)}}))}),await Promise.all(c),i.lu.Y_(r),await async function(f,g){const y=pe(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>N.forEach(g,R=>N.forEach(R.ds,V=>y.persistence.referenceDelegate.addReference(A,R.targetId,V)).next(()=>N.forEach(R.As,V=>y.persistence.referenceDelegate.removeReference(A,R.targetId,V)))))}catch(A){if(!$r(A))throw A;q(cl,"Failed to update sequence numbers: "+A)}for(const A of g){const R=A.targetId;if(!A.fromCache){const V=y.xs.get(R),j=V.snapshotVersion,G=V.withLastLimboFreeSnapshotVersion(j);y.xs=y.xs.insert(R,G)}}}(i.localStore,o))}async function dT(n,e){const t=pe(n);if(!t.currentUser.isEqual(e)){q(gl,"User change. New user:",e.toKey());const i=await Of(t.localStore,e);t.currentUser=e,function(o,c){o.Ru.forEach(h=>{h.forEach(f=>{f.reject(new K(U.CANCELLED,c))})}),o.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Kf(t,i.ks)}}function fT(n,e){const t=pe(n),i=t.Eu.get(e);if(i&&i.cu)return me().add(i.key);{let r=me();const o=t.Pu.get(e);if(!o)return r;for(const c of o){const h=t.hu.get(c);r=r.unionWith(h.view.eu)}return r}}function Gf(n){const e=pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uT.bind(null,e),e.lu.Y_=ZE.bind(null,e.eventManager),e.lu.gu=eT.bind(null,e.eventManager),e}class ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nf(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return PE(this.persistence,new CE,e.initialUser,this.serializer)}Su(e){return new kf(ol.fi,this.serializer)}bu(e){return new VE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ra.provider={build:()=>new ra};class pT extends ra{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){Pe(this.persistence.referenceDelegate instanceof ia,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new hE(i,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new kf(i=>ia.fi(i,t),this.serializer)}}class xc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Rh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=dT.bind(null,this.syncEngine),await XE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JE}()}createDatastore(e){const t=Nf(e.databaseInfo.databaseId),i=function(o){return new UE(o)}(e.databaseInfo);return function(o,c,h,f){return new qE(o,c,h,f)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,r,o,c,h){return new zE(i,r,o,c,h)}(this.localStore,this.datastore,e.asyncQueue,t=>Rh(this.syncEngine,t,0),function(){return Eh.C()?new Eh:new LE}())}createSyncEngine(e,t){return function(r,o,c,h,f,g,y){const A=new rT(r,o,c,h,f,g);return y&&(A.mu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const o=pe(r);q(Vr,"RemoteStore shutting down."),o.da.add(5),await Hs(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}xc.provider={build:()=>new xc};/**
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
 */class Qf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const fi="FirestoreClient";class gT{constructor(e,t,i,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=r,this.user=nt.UNAUTHENTICATED,this.clientId=Yd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async c=>{q(fi,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(q(fi,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new si;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Ff(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function ac(n,e){n.asyncQueue.verifyOperationInProgress(),q(fi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await Of(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await mT(n);q(fi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>bh(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>bh(e.remoteStore,r)),n._onlineComponents=e}async function mT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(fi,"Using user provided OfflineComponentProvider");try{await ac(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===U.FAILED_PRECONDITION||r.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Pr("Error using user provided cache. Falling back to memory cache: "+t),await ac(n,new ra)}}else q(fi,"Using default OfflineComponentProvider"),await ac(n,new pT(void 0));return n._offlineComponents}async function _T(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(fi,"Using user provided OnlineComponentProvider"),await kh(n,n._uninitializedComponentsProvider._online)):(q(fi,"Using default OnlineComponentProvider"),await kh(n,new xc))),n._onlineComponents}async function Xf(n){const e=await _T(n),t=e.eventManager;return t.onListen=sT.bind(null,e.syncEngine),t.onUnlisten=cT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=oT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lT.bind(null,e.syncEngine),t}function yT(n,e,t={}){const i=new si;return n.asyncQueue.enqueueAndForget(async()=>function(o,c,h,f,g){const y=new Qf({next:R=>{y.xu(),c.enqueueAndForget(()=>$f(o,A));const V=R.docs.has(h);!V&&R.fromCache?g.reject(new K(U.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&R.fromCache&&f&&f.source==="server"?g.reject(new K(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(R)},error:R=>g.reject(R)}),A=new Bf(tl(h.path),y,{includeMetadataChanges:!0,Qa:!0});return Uf(o,A)}(await Xf(n),n.asyncQueue,e,t,i)),i.promise}function vT(n,e,t={}){const i=new si;return n.asyncQueue.enqueueAndForget(async()=>function(o,c,h,f,g){const y=new Qf({next:R=>{y.xu(),c.enqueueAndForget(()=>$f(o,A)),R.fromCache&&f.source==="server"?g.reject(new K(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(R)},error:R=>g.reject(R)}),A=new Bf(h,y,{includeMetadataChanges:!0,Qa:!0});return Uf(o,A)}(await Xf(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function Yf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Oh=new Map;/**
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
 */function Jf(n,e,t){if(!t)throw new K(U.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wT(n,e,t,i){if(e===!0&&i===!0)throw new K(U.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Dh(n){if(!Q.isDocumentKey(n))throw new K(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Nh(n){if(Q.isDocumentKey(n))throw new K(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ET(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ie(12329,{type:typeof n})}function Ms(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ET(n);throw new K(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Zf="firestore.googleapis.com",Vh=!0;class Lh{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new K(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zf,this.ssl=Vh}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Vh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Pf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lE)throw new K(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yf((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ia{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Fv;switch(i.type){case"firstParty":return new jv(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new K(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Oh.get(t);i&&(q("ComponentProvider","Removing Datastore"),Oh.delete(t),i.terminate())}(this),Promise.resolve()}}function TT(n,e,t,i={}){var r;n=Ms(n,Ia);const o=xr(e),c=n._getSettings(),h=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;o&&(ed(`https://${f}`),td("Firestore",!0)),c.host!==Zf&&c.host!==f&&Pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:f,ssl:o,emulatorOptions:i});if(!ai(g,h)&&(n._setSettings(g),i.mockUserToken)){let y,A;if(typeof i.mockUserToken=="string")y=i.mockUserToken,A=nt.MOCK_USER;else{y=cm(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const R=i.mockUserToken.sub||i.mockUserToken.user_id;if(!R)throw new K(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new nt(R)}n._authCredentials=new Uv(new Qd(y,A))}}/**
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
 */class ba{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ba(this.firestore,e,this._query)}}class an{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class oi extends ba{constructor(e,t,i){super(e,t,tl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new Q(e))}withConverter(e){return new oi(this.firestore,e,this._path)}}function IT(n,e,...t){if(n=Vt(n),Jf("collection","path",e),n instanceof Ia){const i=Se.fromString(e,...t);return Nh(i),new oi(n,null,i)}{if(!(n instanceof an||n instanceof oi))throw new K(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Se.fromString(e,...t));return Nh(i),new oi(n.firestore,null,i)}}function bT(n,e,...t){if(n=Vt(n),arguments.length===1&&(e=Yd.newId()),Jf("doc","path",e),n instanceof Ia){const i=Se.fromString(e,...t);return Dh(i),new an(n,null,new Q(i))}{if(!(n instanceof an||n instanceof oi))throw new K(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Se.fromString(e,...t));return Dh(i),new an(n.firestore,n instanceof oi?n.converter:null,new Q(i))}}/**
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
 */const xh="AsyncQueue";class Mh{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Vf(this,"async_queue_retry"),this.rc=()=>{const i=oc();i&&q(xh,"Visibility state changed to "+i.visibilityState),this.x_.b_()},this.sc=e;const t=oc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=oc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new si;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!$r(e))throw e;q(xh,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(i=>{throw this.Xu=i,this.ec=!1,kn("INTERNAL UNHANDLED ERROR: ",Fh(i)),i}).then(i=>(this.ec=!1,i))));return this.sc=t,t}enqueueAfterDelay(e,t,i){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const r=fl.createAndSchedule(this,e,t,i,o=>this.uc(o));return this.Zu.push(r),r}oc(){this.Xu&&ie(47125,{cc:Fh(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Fh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class _l extends Ia{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new Mh,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mh(e),this._firestoreClient=void 0,await e}}}function AT(n,e){const t=typeof n=="object"?n:Uc(),i=typeof n=="string"?n:Jo,r=zi(t,"firestore").getImmediate({identifier:i});if(!r._initialized){const o=om("firestore");o&&TT(r,...o)}return r}function ep(n){if(n._terminated)throw new K(U.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||CT(n),n._firestoreClient}function CT(n){var e,t,i;const r=n._freezeSettings(),o=function(h,f,g,y){return new rw(h,f,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,Yf(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new gT(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class sa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sa(Je.fromBase64String(e))}catch(t){throw new K(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new sa(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class tp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ST{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class RT{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,r){if(i.length!==r.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==r[o])return!1;return!0}(this._values,e._values)}}const PT=new RegExp("[~\\*/\\[\\]]");function kT(n,e,t){if(e.search(PT)>=0)throw Uh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new tp(...e.split("."))._internalPath}catch{throw Uh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Uh(n,e,t,i,r){let o=`Function ${e}() called with invalid data`;o+=". ";let c="";return new K(U.INVALID_ARGUMENT,o+n+c)}/**
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
 */class np{constructor(e,t,i,r,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ip("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class OT extends np{data(){return super.data()}}function ip(n,e){return typeof e=="string"?kT(n,e):e instanceof tp?e._internalPath:e._delegate._internalPath}/**
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
 */function DT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class NT{convertValue(e,t="none"){switch(hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return js(e,(r,o)=>{i[r]=this.convertValue(o,t)}),i}convertVectorValue(e){var t,i,r;const o=(r=(i=(t=e.fields)===null||t===void 0?void 0:t[Tc].arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(c=>Ve(c.doubleValue));return new RT(o)}convertGeoPoint(e){return new ST(Ve(e.latitude),Ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=ga(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Vs(e));default:return null}}convertTimestamp(e){const t=li(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Se.fromString(e);Pe(Rf(i),9688,{name:e});const r=new Ls(i.get(1),i.get(3)),o=new Q(i.popFirst(5));return r.isEqual(t)||kn(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */class Is{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rp extends np{constructor(e,t,i,r,o,c){super(e,t,i,r,c),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(ip("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Bo extends rp{data(e={}){return super.data(e)}}class VT{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Is(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Bo(this._firestore,this._userDataWriter,i.key,i,new Is(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,o){if(r._snapshot.oldDocs.isEmpty()){let c=0;return r._snapshot.docChanges.map(h=>{const f=new Bo(r._firestore,r._userDataWriter,h.doc.key,h.doc,new Is(r._snapshot.mutatedKeys.has(h.doc.key),r._snapshot.fromCache),r.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:c++}})}{let c=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const f=new Bo(r._firestore,r._userDataWriter,h.doc.key,h.doc,new Is(r._snapshot.mutatedKeys.has(h.doc.key),r._snapshot.fromCache),r.query.converter);let g=-1,y=-1;return h.type!==0&&(g=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),y=c.indexOf(h.doc.key)),{type:LT(h.type),doc:f,oldIndex:g,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function LT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:n})}}/**
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
 */function xT(n){n=Ms(n,an);const e=Ms(n.firestore,_l);return yT(ep(e),n._key).then(t=>FT(e,n,t))}class sp extends NT{constructor(e){super(),this.firestore=e}convertBytes(e){return new sa(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,t)}}function MT(n){n=Ms(n,ba);const e=Ms(n.firestore,_l),t=ep(e),i=new sp(e);return DT(n._query),vT(t,n._query).then(r=>new VT(e,i,n,r))}function FT(n,e,t){const i=t.docs.get(e._key),r=new sp(n);return new rp(n,r,e._key,i,new Is(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){Ur=r})(Mr),cn(new Ht("firestore",(i,{instanceIdentifier:r,options:o})=>{const c=i.getProvider("app").getImmediate(),h=new _l(new $v(i.getProvider("auth-internal")),new qv(c,i.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new K(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ls(g.options.projectId,y)}(c,r),c);return o=Object.assign({useFetchStreams:t},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Nt(ju,qu,e),Nt(ju,qu,"esm2017")})();const op="@firebase/installations",yl="0.6.17";/**
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
 */const ap=1e4,cp=`w:${yl}`,lp="FIS_v2",UT="https://firebaseinstallations.googleapis.com/v1",$T=60*60*1e3,BT="installations",jT="Installations";/**
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
 */const qT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ji=new Hi(BT,jT,qT);function up(n){return n instanceof zt&&n.code.includes("request-failed")}/**
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
 */function hp({projectId:n}){return`${UT}/projects/${n}/installations`}function dp(n){return{token:n.token,requestStatus:2,expiresIn:zT(n.expiresIn),creationTime:Date.now()}}async function fp(n,e){const i=(await e.json()).error;return ji.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function pp({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function HT(n,{refreshToken:e}){const t=pp(n);return t.append("Authorization",WT(e)),t}async function gp(n){const e=await n();return e.status>=500&&e.status<600?n():e}function zT(n){return Number(n.replace("s","000"))}function WT(n){return`${lp} ${n}`}/**
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
 */async function KT({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=hp(n),r=pp(n),o=e.getImmediate({optional:!0});if(o){const g=await o.getHeartbeatsHeader();g&&r.append("x-firebase-client",g)}const c={fid:t,authVersion:lp,appId:n.appId,sdkVersion:cp},h={method:"POST",headers:r,body:JSON.stringify(c)},f=await gp(()=>fetch(i,h));if(f.ok){const g=await f.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:dp(g.authToken)}}else throw await fp("Create Installation",f)}/**
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
 */function mp(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function GT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const QT=/^[cdef][\w-]{21}$/,Mc="";function XT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=YT(n);return QT.test(t)?t:Mc}catch{return Mc}}function YT(n){return GT(n).substr(0,22)}/**
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
 */function Aa(n){return`${n.appName}!${n.appId}`}/**
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
 */const _p=new Map;function yp(n,e){const t=Aa(n);vp(t,e),JT(t,e)}function vp(n,e){const t=_p.get(n);if(t)for(const i of t)i(e)}function JT(n,e){const t=ZT();t&&t.postMessage({key:n,fid:e}),eI()}let Mi=null;function ZT(){return!Mi&&"BroadcastChannel"in self&&(Mi=new BroadcastChannel("[Firebase] FID Change"),Mi.onmessage=n=>{vp(n.data.key,n.data.fid)}),Mi}function eI(){_p.size===0&&Mi&&(Mi.close(),Mi=null)}/**
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
 */const tI="firebase-installations-database",nI=1,qi="firebase-installations-store";let cc=null;function vl(){return cc||(cc=ad(tI,nI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(qi)}}})),cc}async function oa(n,e){const t=Aa(n),r=(await vl()).transaction(qi,"readwrite"),o=r.objectStore(qi),c=await o.get(t);return await o.put(e,t),await r.done,(!c||c.fid!==e.fid)&&yp(n,e.fid),e}async function wp(n){const e=Aa(n),i=(await vl()).transaction(qi,"readwrite");await i.objectStore(qi).delete(e),await i.done}async function Ca(n,e){const t=Aa(n),r=(await vl()).transaction(qi,"readwrite"),o=r.objectStore(qi),c=await o.get(t),h=e(c);return h===void 0?await o.delete(t):await o.put(h,t),await r.done,h&&(!c||c.fid!==h.fid)&&yp(n,h.fid),h}/**
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
 */async function wl(n){let e;const t=await Ca(n.appConfig,i=>{const r=iI(i),o=rI(n,r);return e=o.registrationPromise,o.installationEntry});return t.fid===Mc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function iI(n){const e=n||{fid:XT(),registrationStatus:0};return Ep(e)}function rI(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(ji.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=sI(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:oI(n)}:{installationEntry:e}}async function sI(n,e){try{const t=await KT(n,e);return oa(n.appConfig,t)}catch(t){throw up(t)&&t.customData.serverCode===409?await wp(n.appConfig):await oa(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function oI(n){let e=await $h(n.appConfig);for(;e.registrationStatus===1;)await mp(100),e=await $h(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await wl(n);return i||t}return e}function $h(n){return Ca(n,e=>{if(!e)throw ji.create("installation-not-found");return Ep(e)})}function Ep(n){return aI(n)?{fid:n.fid,registrationStatus:0}:n}function aI(n){return n.registrationStatus===1&&n.registrationTime+ap<Date.now()}/**
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
 */async function cI({appConfig:n,heartbeatServiceProvider:e},t){const i=lI(n,t),r=HT(n,t),o=e.getImmediate({optional:!0});if(o){const g=await o.getHeartbeatsHeader();g&&r.append("x-firebase-client",g)}const c={installation:{sdkVersion:cp,appId:n.appId}},h={method:"POST",headers:r,body:JSON.stringify(c)},f=await gp(()=>fetch(i,h));if(f.ok){const g=await f.json();return dp(g)}else throw await fp("Generate Auth Token",f)}function lI(n,{fid:e}){return`${hp(n)}/${e}/authTokens:generate`}/**
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
 */async function El(n,e=!1){let t;const i=await Ca(n.appConfig,o=>{if(!Tp(o))throw ji.create("not-registered");const c=o.authToken;if(!e&&dI(c))return o;if(c.requestStatus===1)return t=uI(n,e),o;{if(!navigator.onLine)throw ji.create("app-offline");const h=pI(o);return t=hI(n,h),h}});return t?await t:i.authToken}async function uI(n,e){let t=await Bh(n.appConfig);for(;t.authToken.requestStatus===1;)await mp(100),t=await Bh(n.appConfig);const i=t.authToken;return i.requestStatus===0?El(n,e):i}function Bh(n){return Ca(n,e=>{if(!Tp(e))throw ji.create("not-registered");const t=e.authToken;return gI(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function hI(n,e){try{const t=await cI(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await oa(n.appConfig,i),t}catch(t){if(up(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await wp(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await oa(n.appConfig,i)}throw t}}function Tp(n){return n!==void 0&&n.registrationStatus===2}function dI(n){return n.requestStatus===2&&!fI(n)}function fI(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+$T}function pI(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function gI(n){return n.requestStatus===1&&n.requestTime+ap<Date.now()}/**
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
 */async function mI(n){const e=n,{installationEntry:t,registrationPromise:i}=await wl(e);return i?i.catch(console.error):El(e).catch(console.error),t.fid}/**
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
 */async function _I(n,e=!1){const t=n;return await yI(t),(await El(t,e)).token}async function yI(n){const{registrationPromise:e}=await wl(n);e&&await e}/**
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
 */function vI(n){if(!n||!n.options)throw lc("App Configuration");if(!n.name)throw lc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw lc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function lc(n){return ji.create("missing-app-config-values",{valueName:n})}/**
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
 */const Ip="installations",wI="installations-internal",EI=n=>{const e=n.getProvider("app").getImmediate(),t=vI(e),i=zi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},TI=n=>{const e=n.getProvider("app").getImmediate(),t=zi(e,Ip).getImmediate();return{getId:()=>mI(t),getToken:r=>_I(t,r)}};function II(){cn(new Ht(Ip,EI,"PUBLIC")),cn(new Ht(wI,TI,"PRIVATE"))}II();Nt(op,yl);Nt(op,yl,"esm2017");/**
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
 */const aa="analytics",bI="firebase_id",AI="origin",CI=60*1e3,SI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Tl="https://www.googletagmanager.com/gtag/js";/**
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
 */const yt=new la("@firebase/analytics");/**
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
 */const RI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bt=new Hi("analytics","Analytics",RI);/**
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
 */function PI(n){if(!n.startsWith(Tl)){const e=bt.create("invalid-gtag-resource",{gtagURL:n});return yt.warn(e.message),""}return n}function bp(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function kI(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function OI(n,e){const t=kI("firebase-js-sdk-policy",{createScriptURL:PI}),i=document.createElement("script"),r=`${Tl}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function DI(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function NI(n,e,t,i,r,o){const c=i[r];try{if(c)await e[c];else{const f=(await bp(t)).find(g=>g.measurementId===r);f&&await e[f.appId]}}catch(h){yt.error(h)}n("config",r,o)}async function VI(n,e,t,i,r){try{let o=[];if(r&&r.send_to){let c=r.send_to;Array.isArray(c)||(c=[c]);const h=await bp(t);for(const f of c){const g=h.find(A=>A.measurementId===f),y=g&&e[g.appId];if(y)o.push(y);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",i,r||{})}catch(o){yt.error(o)}}function LI(n,e,t,i){async function r(o,...c){try{if(o==="event"){const[h,f]=c;await VI(n,e,t,h,f)}else if(o==="config"){const[h,f]=c;await NI(n,e,t,i,h,f)}else if(o==="consent"){const[h,f]=c;n("consent",h,f)}else if(o==="get"){const[h,f,g]=c;n("get",h,f,g)}else if(o==="set"){const[h]=c;n("set",h)}else n(o,...c)}catch(h){yt.error(h)}}return r}function xI(n,e,t,i,r){let o=function(...c){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(o=window[r]),window[r]=LI(o,n,e,t),{gtagCore:o,wrappedGtag:window[r]}}function MI(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Tl)&&t.src.includes(n))return t;return null}/**
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
 */const FI=30,UI=1e3;class $I{constructor(e={},t=UI){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ap=new $I;function BI(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function jI(n){var e;const{appId:t,apiKey:i}=n,r={method:"GET",headers:BI(i)},o=SI.replace("{app-id}",t),c=await fetch(o,r);if(c.status!==200&&c.status!==304){let h="";try{const f=await c.json();!((e=f.error)===null||e===void 0)&&e.message&&(h=f.error.message)}catch{}throw bt.create("config-fetch-failed",{httpStatus:c.status,responseMessage:h})}return c.json()}async function qI(n,e=Ap,t){const{appId:i,apiKey:r,measurementId:o}=n.options;if(!i)throw bt.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:i};throw bt.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new WI;return setTimeout(async()=>{h.abort()},CI),Cp({appId:i,apiKey:r,measurementId:o},c,h,e)}async function Cp(n,{throttleEndTimeMillis:e,backoffCount:t},i,r=Ap){var o;const{appId:c,measurementId:h}=n;try{await HI(i,e)}catch(f){if(h)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:c,measurementId:h};throw f}try{const f=await jI(n);return r.deleteThrottleMetadata(c),f}catch(f){const g=f;if(!zI(g)){if(r.deleteThrottleMetadata(c),h)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:c,measurementId:h};throw f}const y=Number((o=g==null?void 0:g.customData)===null||o===void 0?void 0:o.httpStatus)===503?gu(t,r.intervalMillis,FI):gu(t,r.intervalMillis),A={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return r.setThrottleMetadata(c,A),yt.debug(`Calling attemptFetch again in ${y} millis`),Cp(n,A,i,r)}}function HI(n,e){return new Promise((t,i)=>{const r=Math.max(e-Date.now(),0),o=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(o),i(bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zI(n){if(!(n instanceof zt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class WI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function KI(n,e,t,i,r){if(r&&r.global){n("event",t,i);return}else{const o=await e,c=Object.assign(Object.assign({},i),{send_to:o});n("event",t,c)}}/**
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
 */async function GI(){if(id())try{await rd()}catch(n){return yt.warn(bt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return yt.warn(bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function QI(n,e,t,i,r,o,c){var h;const f=qI(n);f.then(V=>{t[V.measurementId]=V.appId,n.options.measurementId&&V.measurementId!==n.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${V.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(V=>yt.error(V)),e.push(f);const g=GI().then(V=>{if(V)return i.getId()}),[y,A]=await Promise.all([f,g]);MI(o)||OI(o,y.measurementId),r("js",new Date);const R=(h=c==null?void 0:c.config)!==null&&h!==void 0?h:{};return R[AI]="firebase",R.update=!0,A!=null&&(R[bI]=A),r("config",y.measurementId,R),y.measurementId}/**
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
 */class XI{constructor(e){this.app=e}_delete(){return delete ks[this.app.options.appId],Promise.resolve()}}let ks={},jh=[];const qh={};let uc="dataLayer",YI="gtag",Hh,Sp,zh=!1;function JI(){const n=[];if(nd()&&n.push("This is a browser extension environment."),_m()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,r)=>`(${r+1}) ${i}`).join(" "),t=bt.create("invalid-analytics-context",{errorInfo:e});yt.warn(t.message)}}function ZI(n,e,t){JI();const i=n.options.appId;if(!i)throw bt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bt.create("no-api-key");if(ks[i]!=null)throw bt.create("already-exists",{id:i});if(!zh){DI(uc);const{wrappedGtag:o,gtagCore:c}=xI(ks,jh,qh,uc,YI);Sp=o,Hh=c,zh=!0}return ks[i]=QI(n,jh,qh,e,Hh,uc,t),new XI(n)}function eb(n=Uc()){n=Vt(n);const e=zi(n,aa);return e.isInitialized()?e.getImmediate():tb(n)}function tb(n,e={}){const t=zi(n,aa);if(t.isInitialized()){const r=t.getImmediate();if(ai(e,t.getOptions()))return r;throw bt.create("already-initialized")}return t.initialize({options:e})}function nb(n,e,t,i){n=Vt(n),KI(Sp,ks[n.app.options.appId],e,t,i).catch(r=>yt.error(r))}const Wh="@firebase/analytics",Kh="0.10.16";function ib(){cn(new Ht(aa,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return ZI(i,r,t)},"PUBLIC")),cn(new Ht("analytics-internal",n,"PRIVATE")),Nt(Wh,Kh),Nt(Wh,Kh,"esm2017");function n(e){try{const t=e.getProvider(aa).getImmediate();return{logEvent:(i,r,o)=>nb(t,i,r,o)}}catch(t){throw bt.create("interop-component-reg-failed",{reason:t})}}}ib();const rb={apiKey:"AIzaSyBkzv8uY4HBrF19P6CUvHrSnj6xOBXACnc",authDomain:"chronohaven.firebaseapp.com",projectId:"chronohaven",storageBucket:"chronohaven.firebasestorage.app",messagingSenderId:"598935116715",appId:"1:598935116715:web:3f7801faf73ec3e72450ee",measurementId:"G-KC1GKPTGVF"},Il=cd(rb),Rp=xv(Il),Pp=AT(Il);eb(Il);function jo(n,e,t){document.getElementById("app").insertAdjacentHTML("afterbegin",`
        <header id="mainHeader">
            <div class="container">
                <nav class="navbar navbar-expand-lg py-4 gap-5">
                    <a class="navbar-brand p-0" href="/">
                        <img src="src/assets/images/chronoHaven.svg" class="img-fluid d-block" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav text-uppercase gap-4 ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a href="#" class="nav-link p-0 active" aria-current="page">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link p-0">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link p-0">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link p-0">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <ul class="list-inline d-flex gap-4 align-items-center mb-0">
                        <li class="nav-item">
                            <a href="#" class="nav-link fs-lg lh-1">
                                <i class="bi bi-search d-block"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link fs-lg lh-1">
                                <i class="bi bi-cart3 d-block"></i>
                            </a>
                        </li>
                        ${n?`<li class="nav-item dropdown">
                                <a href="javascript: void(0);" class="nav-link fs-lg lh-1 dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-person-circle"></i>
                                    <span class="d-block">Hi, ${e}</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">My Profile</a></li>
                                    <li><a class="dropdown-item" id="logOut" href="#">Log Out</a></li>
                                </ul>
                            </li> `:`<li class="nav-item">
                                <a href="login.html" class="nav-link">Login</a>
                            </li>`}
                    </ul>
                </nav>
            </div>
        </header>
    `);const r=document.getElementById("logOut");r&&typeof t=="function"&&r.addEventListener("click",o=>{o.preventDefault(),t()})}const sb=async()=>{document.getElementById("app");try{const n=IT(Pp,"collections","products","items"),t=(await MT(n)).docs.map(i=>i.data());t.length!==0&&t.forEach(i=>{})}catch(n){console.log(n)}},qo=async()=>{try{await Ay(Rp),jo(!1,null,qo),window.location.href="login.html"}catch(n){console.log(n)}};by(Rp,async n=>{if(n)try{const e=bT(Pp,"users",n.uid),t=await xT(e);if(t.exists()){const i=t.data();jo(!0,i.firstName,qo)}else console.log("No such document!")}catch(e){console.log(e),jo(!1,null,qo)}else jo(!1,null,qo)});sb();
