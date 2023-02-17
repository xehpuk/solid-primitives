(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const b={};function be(e){b.context=e}const we=(e,t)=>e===t,ve=Symbol("solid-proxy"),Se=Symbol("solid-track"),Y={equals:we};let re=ce;const x=1,N=2,oe={owned:null,cleanups:null,context:null,owner:null};var h=null;let $=null,a=null,d=null,v=null,I=0;function xe(e,t){const n=a,i=h,s=e.length===0,o=s?oe:{owned:null,cleanups:null,context:null,owner:t||i},l=s?e:()=>e(()=>m(()=>B(o)));h=o,a=null;try{return L(l,!0)}finally{a=n,h=i}}function T(e,t){t=t?Object.assign({},Y,t):Y;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=s=>(typeof s=="function"&&(s=s(n.value)),le(n,s));return[_e.bind(n),i]}function _(e,t,n){const i=fe(e,t,!1,x);j(i)}function U(e,t,n){re=Oe;const i=fe(e,t,!1,x);i.user=!0,v?v.push(i):j(i)}function me(e){return L(e,!1)}function m(e){const t=a;a=null;try{return e()}finally{a=t}}function Ee(e,t,n){const i=Array.isArray(e);let s,o=n&&n.defer;return l=>{let r;if(i){r=Array(e.length);for(let f=0;f<e.length;f++)r[f]=e[f]()}else r=e();if(o){o=!1;return}const c=m(()=>t(r,s,l));return s=r,c}}function Ae(e){U(()=>m(e))}function H(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function $e(){return h}function _e(){const e=$;if(this.sources&&(this.state||e))if(this.state===x||e)j(this);else{const t=d;d=null,L(()=>P(this),!1),d=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function le(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&L(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=$&&$.running;l&&$.disposed.has(o),(l&&!o.tState||!l&&!o.state)&&(o.pure?d.push(o):v.push(o),o.observers&&ue(o)),l||(o.state=x)}if(d.length>1e6)throw d=[],new Error},!1)),t}function j(e){if(!e.fn)return;B(e);const t=h,n=a,i=I;a=h=e,Ce(e,e.value,i),a=n,h=t}function Ce(e,t,n){let i;try{i=e.fn(t)}catch(s){e.pure&&(e.state=x,e.owned&&e.owned.forEach(B),e.owned=null),ae(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?le(e,i):e.value=i,e.updatedAt=n)}function fe(e,t,n,i=x,s){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==oe&&(h.owned?h.owned.push(o):h.owned=[o]),o}function M(e){const t=$;if(e.state===0||t)return;if(e.state===N||t)return P(e);if(e.suspense&&m(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<I);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===x||t)j(e);else if(e.state===N||t){const s=d;d=null,L(()=>P(e,n[0]),!1),d=s}}function L(e,t){if(d)return e();let n=!1;t||(d=[]),v?n=!0:v=[],I++;try{const i=e();return Le(n),i}catch(i){d||(v=null),ae(i)}}function Le(e){if(d&&(ce(d),d=null),e)return;const t=v;v=null,t.length&&L(()=>re(t),!1)}function ce(e){for(let t=0;t<e.length;t++)M(e[t])}function Oe(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:M(i)}for(b.context&&be(),t=0;t<n;t++)M(e[t])}function P(e,t){const n=$;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===x||n?s!==t&&M(s):(s.state===N||n)&&P(s,t))}}function ue(e){const t=$;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=N,i.pure?d.push(i):v.push(i),i.observers&&ue(i))}}function B(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();i<s.length&&(o.sourceSlots[l]=i,s[i]=o,n.observerSlots[i]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)B(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ne(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ae(e){throw e=Ne(e),e}function D(e,t){return m(()=>e(t||{}))}function Te(e,t,n){let i=n.length,s=t.length,o=i,l=0,r=0,c=t[s-1].nextSibling,f=null;for(;l<s||r<o;){if(t[l]===n[r]){l++,r++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const u=o<i?r?n[r-1].nextSibling:n[o-r]:c;for(;r<o;)e.insertBefore(n[r++],u)}else if(o===r)for(;l<s;)(!f||!f.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[r]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[r++],t[l++].nextSibling),e.insertBefore(n[--o],u),t[s]=n[o]}else{if(!f){f=new Map;let p=r;for(;p<o;)f.set(n[p],p++)}const u=f.get(t[l]);if(u!=null)if(r<u&&u<o){let p=l,y=1,w;for(;++p<s&&p<o&&!((w=f.get(t[p]))==null||w!==u+y);)y++;if(y>u-r){const E=t[l];for(;r<u;)e.insertBefore(n[r++],E)}else e.replaceChild(n[r++],t[l++])}else l++;else t[l++].remove()}}}const J="_$DX_DELEGATE";function Me(e,t,n,i={}){let s;return xe(o=>{s=o,t===document?e():S(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{s(),t.textContent=""}}function he(e,t,n){const i=document.createElement("template");i.innerHTML=e;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function Pe(e,t=window.document){const n=t[J]||(t[J]=new Set);for(let i=0,s=e.length;i<s;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,ze))}}function Z(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ke(e,t,n){return m(()=>e(t,n))}function S(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return k(e,t,i,n);_(s=>k(e,t(),s,n),i)}function ze(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),b.registry&&!b.done&&(b.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>{for(;i&&i.nodeType!==8&&i.nodeValue!=="pl-"+e;){let s=i.nextSibling;i.remove(),i=s}i&&i.remove()}));n;){const i=n[t];if(i&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?i.call(n,s,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function k(e,t,n,i,s){for(b.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(b.context)return n;if(o==="number"&&(t=t.toString()),l){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=C(e,n,i,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(b.context)return n;n=C(e,n,i)}else{if(o==="function")return _(()=>{let r=t();for(;typeof r=="function";)r=r();n=k(e,r,n,i)}),()=>n;if(Array.isArray(t)){const r=[],c=n&&Array.isArray(n);if(R(r,t,n,s))return _(()=>n=k(e,r,n,i,!0)),()=>n;if(b.context){if(!r.length)return n;for(let f=0;f<r.length;f++)if(r[f].parentNode)return n=r}if(r.length===0){if(n=C(e,n,i),l)return n}else c?n.length===0?ee(e,r,i):Te(e,n,r):(n&&C(e),ee(e,r));n=r}else if(t instanceof Node){if(b.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=C(e,n,i,t);C(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function R(e,t,n,i){let s=!1;for(let o=0,l=t.length;o<l;o++){let r=t[o],c=n&&n[o];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))s=R(e,r,c)||s;else if(typeof r=="function")if(i){for(;typeof r=="function";)r=r();s=R(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||s}else e.push(r),s=!0;else{const f=String(r);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return s}function ee(e,t,n=null){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function C(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(s!==r){const c=r.parentNode===e;!o&&!l?c?e.replaceChild(s,r):e.insertBefore(s,n):c&&r.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}var je=Object.defineProperty,g=(e,t)=>je(e,"name",{value:t,configurable:!0});function de(e){return e!==null&&(typeof e=="object"||typeof e=="function")}g(de,"isObject");function Be(e){return(...t)=>{for(const n of e)typeof n=="function"&&n(...t)}}g(Be,"chain");var te=g(e=>typeof e=="function"&&!e.length?e():e,"access"),z=g(e=>Array.isArray(e)?e:[e],"asArray");function W(e,...t){return typeof e=="function"?e(...t):e}g(W,"accessWith");function Ve(e,t,n){const i=Array.isArray(e);let s,o=!0;return l=>{let r;if(i){r=Array(e.length);for(let f=0;f<e.length;f++)r[f]=e[f]()}else r=e();if(o)return o=!1,s=r,n;const c=m(()=>t(r,s,l));return s=r,c}}g(Ve,"defer");var ge=Object.entries,De=Object.keys,Re=g(e=>$e()?H(e):e,"tryOnCleanup"),We=g(()=>{let e=[];const t=g(()=>e=[],"clear");return{push:(...n)=>e.push(...n),execute(n,i,s,o){e.forEach(l=>l(n,i,s,o)),t()},clear:t}},"createCallbackStack");function Ie(e){let t=0,n;return(...i)=>{n=i,t++,queueMicrotask(()=>--t===0&&e(...n))}}g(Ie,"createMicrotask");function q(e){const t={...e},n={},i=new Map,s=g(r=>{const c=i.get(r);if(c)return c[0]();const f=T(t[r],{name:typeof r=="string"?r:void 0});return i.set(r,f),delete t[r],f[0]()},"getValue"),o=g((r,c)=>{const f=i.get(r);if(f)return f[1](c);r in t&&(t[r]=W(c,[t[r]]))},"setValue");for(const r of De(e))n[r]=void 0,Object.defineProperty(n,r,{get:s.bind(void 0,r)});return[n,g((r,c)=>(de(r)?m(()=>{me(()=>{for(const[f,u]of ge(W(r,n)))o(f,()=>u)})}):o(r,c),n),"setter")]}g(q,"createStaticStore");function pe(e,t,n,i){const s=e.length,o=t.length;let l=0;if(!o){for(;l<s;l++)n(e[l]);return}if(!s){for(;l<o;l++)i(t[l]);return}for(;l<o&&t[l]===e[l];l++);let r,c;t=t.slice(l),e=e.slice(l);for(r of t)e.includes(r)||i(r);for(c of e)t.includes(c)||n(c)}g(pe,"handleDiffArray");var Ue=Object.defineProperty,O=(e,t)=>Ue(e,"name",{value:t,configurable:!0});function V(e,t,n,i){return e.addEventListener(t,n,i),Re(e.removeEventListener.bind(e,t,n,i))}O(V,"makeEventListener");function F(e,t,n,i){const s=O(()=>{z(te(e)).forEach(o=>{o&&z(te(t)).forEach(l=>V(o,l,n,i))})},"attachListeners");typeof e=="function"?U(s):_(s)}O(F,"createEventListener");function He(e,t,n){const[i,s]=T();return F(e,t,s,n),i}O(He,"createEventSignal");function qe(e,t,n){for(const[i,s]of ge(t))s&&F(e,i,s,n)}O(qe,"createEventListenerMap");function Fe(e,t){const{push:n,execute:i}=We();return[(s,o,l)=>{const r=V(e,s,o,l??t);return n(r),r},H(i)]}O(Fe,"makeEventListenerStack");function Ge(e,t){const n=new ResizeObserver(e);return H(n.disconnect.bind(n)),{observe:i=>n.observe(i,t),unobserve:n.unobserve.bind(n)}}function Ke(e,t,n){const i=new WeakMap,{observe:s,unobserve:o}=Ge(l,n);function l(c){for(const f of c){const{contentRect:u,target:p}=f,y=Math.round(u.width),w=Math.round(u.height),E=i.get(p);(!E||E.width!==y||E.height!==w)&&(t(u,f.target,f),i.set(p,{width:y,height:w}))}}let r;if(typeof e=="function")r=()=>z(e()).slice();else if(Array.isArray(e)&&ve in e)r=()=>(e[Se],e.slice());else{z(e).forEach(s);return}U(Ee(r,(c,f=[])=>pe(c,f,s,o)))}function ne(){return{width:window.innerWidth,height:window.innerHeight}}function Xe(){const[e,t]=q(ne());return V(window,"resize",()=>t(ne())),e}function ie(e){if(!e)return{width:null,height:null};const{width:t,height:n}=e.getBoundingClientRect();return{width:t,height:n}}function Qe(e){const[t,n]=q(typeof e!="function"?ie(e):(()=>(Ae(()=>n(ie(e()))),{width:null,height:null}))());return Ke(typeof e=="function"?()=>e()||[]:e,s=>n({width:s.width,height:s.height})),t}const Ye=he('<div class="flex flex-col"><label class="mb-1">:</label><input type="range" min="10" max="400" step="10"></div>'),Je=he('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="center-child min-h-82"><div class="w-24 h-24 bg-orange-500 rounded-md shadow-bg-gray-900 shadow-lg center-child">px x <!>px</div></div><div class="wrapper-h"></div><div class="fixed bottom-4 right-4">window: <!>px x <!>px</div></div>'),se=e=>(()=>{const t=Ye.cloneNode(!0),n=t.firstChild,i=n.firstChild,s=n.nextSibling;return S(n,()=>e.name,i),s.$$input=o=>e.setValue(+o.currentTarget.value),_(o=>{const l=e.name,r=e.name;return l!==o._v$&&Z(n,"for",o._v$=l),r!==o._v$2&&Z(s,"name",o._v$2=r),o},{_v$:void 0,_v$2:void 0}),_(()=>s.value=e.value),t})(),Ze=()=>{const[e,t]=T(200),[n,i]=T(200);let s;const o=Xe(),l=Qe(()=>s);return(()=>{const r=Je.cloneNode(!0),c=r.firstChild,f=c.firstChild,u=f.firstChild,p=u.nextSibling;p.nextSibling;const y=c.nextSibling,w=y.nextSibling,E=w.firstChild,G=E.nextSibling,ye=G.nextSibling,K=ye.nextSibling;return K.nextSibling,ke(A=>s=A,f),S(f,()=>Math.round(l.width??0),u),S(f,()=>Math.round(l.height??0),p),S(y,D(se,{name:"width",get value(){return e()},setValue:t}),null),S(y,D(se,{name:"height",get value(){return n()},setValue:i}),null),S(w,()=>Math.round(o.width),G),S(w,()=>Math.round(o.height),K),_(A=>{const X=`${e()}px`,Q=`${n()}px`;return X!==A._v$3&&f.style.setProperty("width",A._v$3=X),Q!==A._v$4&&f.style.setProperty("height",A._v$4=Q),A},{_v$3:void 0,_v$4:void 0}),r})()};Me(()=>D(Ze,{}),document.getElementById("root"));Pe(["input"]);