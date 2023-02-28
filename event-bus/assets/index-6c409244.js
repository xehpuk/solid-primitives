(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();const x={};function ue(e){x.context=e}const ce=(e,t)=>e===t,fe=Symbol("solid-track"),U={equals:ce};let ee=le;const A=1,F=2,te={owned:null,cleanups:null,context:null,owner:null};var h=null;let C=null,a=null,p=null,S=null,X=0;function V(e,t){const n=a,s=h,l=e.length===0,i=l?te:{owned:null,cleanups:null,context:null,owner:t||s},o=l?e:()=>e(()=>B(()=>G(i)));h=i,a=null;try{return j(o,!0)}finally{a=n,h=s}}function L(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=l=>(typeof l=="function"&&(l=l(n.value)),se(n,l));return[ne.bind(n),s]}function O(e,t,n){const s=J(e,t,!1,A);I(s)}function ae(e,t,n){ee=ye;const s=J(e,t,!1,A);s.user=!0,S?S.push(s):I(s)}function de(e,t,n){n=n?Object.assign({},U,n):U;const s=J(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,I(s),ne.bind(s)}function B(e){const t=a;a=null;try{return e()}finally{a=t}}function he(e){ae(()=>B(e))}function Q(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function pe(){return h}function ne(){const e=C;if(this.sources&&(this.state||e))if(this.state===A||e)I(this);else{const t=p;p=null,j(()=>W(this),!1),p=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function se(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&j(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],o=C&&C.running;o&&C.disposed.has(i),(o&&!i.tState||!o&&!i.state)&&(i.pure?p.push(i):S.push(i),i.observers&&ie(i)),o||(i.state=A)}if(p.length>1e6)throw p=[],new Error},!1)),t}function I(e){if(!e.fn)return;G(e);const t=h,n=a,s=X;a=h=e,ge(e,e.value,s),a=n,h=t}function ge(e,t,n){let s;try{s=e.fn(t)}catch(l){e.pure&&(e.state=A,e.owned&&e.owned.forEach(G),e.owned=null),re(l)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?se(e,s):e.value=s,e.updatedAt=n)}function J(e,t,n,s=A,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==te&&(h.owned?h.owned.push(i):h.owned=[i]),i}function H(e){const t=C;if(e.state===0||t)return;if(e.state===F||t)return W(e);if(e.suspense&&B(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<X);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===A||t)I(e);else if(e.state===F||t){const l=p;p=null,j(()=>W(e,n[0]),!1),p=l}}function j(e,t){if(p)return e();let n=!1;t||(p=[]),S?n=!0:S=[],X++;try{const s=e();return be(n),s}catch(s){p||(S=null),re(s)}}function be(e){if(p&&(le(p),p=null),e)return;const t=S;S=null,t.length&&j(()=>ee(t),!1)}function le(e){for(let t=0;t<e.length;t++)H(e[t])}function ye(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:H(s)}for(x.context&&ue(),t=0;t<n;t++)H(e[t])}function W(e,t){const n=C;e.state=0;for(let s=0;s<e.sources.length;s+=1){const l=e.sources[s];l.sources&&(l.state===A||n?l!==t&&H(l):(l.state===F||n)&&W(l,t))}}function ie(e){const t=C;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=F,s.pure?p.push(s):S.push(s),s.observers&&ie(s))}}function G(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const i=l.pop(),o=n.observerSlots.pop();s<l.length&&(i.sourceSlots[o]=s,l[s]=i,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)G(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function me(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function re(e){throw e=me(e),e}const we=Symbol("fallback");function Y(e){for(let t=0;t<e.length;t++)e[t]()}function ve(e,t,n={}){let s=[],l=[],i=[],o=0,r=t.length>1?[]:null;return Q(()=>Y(i)),()=>{let c=e()||[],f,u;return c[fe],B(()=>{let d=c.length,m,_,k,D,M,w,v,$,T;if(d===0)o!==0&&(Y(i),i=[],s=[],l=[],o=0,r&&(r=[])),n.fallback&&(s=[we],l[0]=V(oe=>(i[0]=oe,n.fallback())),o=1);else if(o===0){for(l=new Array(d),u=0;u<d;u++)s[u]=c[u],l[u]=V(g);o=d}else{for(k=new Array(d),D=new Array(d),r&&(M=new Array(d)),w=0,v=Math.min(o,d);w<v&&s[w]===c[w];w++);for(v=o-1,$=d-1;v>=w&&$>=w&&s[v]===c[$];v--,$--)k[$]=l[v],D[$]=i[v],r&&(M[$]=r[v]);for(m=new Map,_=new Array($+1),u=$;u>=w;u--)T=c[u],f=m.get(T),_[u]=f===void 0?-1:f,m.set(T,u);for(f=w;f<=v;f++)T=s[f],u=m.get(T),u!==void 0&&u!==-1?(k[u]=l[f],D[u]=i[f],r&&(M[u]=r[f]),u=_[u],m.set(T,u)):i[f]();for(u=w;u<d;u++)u in k?(l[u]=k[u],i[u]=D[u],r&&(r[u]=M[u],r[u](u))):l[u]=V(g);l=l.slice(0,o=d),s=c.slice(0)}return l});function g(d){if(i[u]=d,r){const[m,_]=L(u);return r[u]=_,t(c[u],m)}return t(c[u])}}}function y(e,t){return B(()=>e(t||{}))}function xe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return de(ve(()=>e.each,e.children,t||void 0))}function $e(e,t,n){let s=n.length,l=t.length,i=s,o=0,r=0,c=t[l-1].nextSibling,f=null;for(;o<l||r<i;){if(t[o]===n[r]){o++,r++;continue}for(;t[l-1]===n[i-1];)l--,i--;if(l===o){const u=i<s?r?n[r-1].nextSibling:n[i-r]:c;for(;r<i;)e.insertBefore(n[r++],u)}else if(i===r)for(;o<l;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[r]===t[l-1]){const u=t[--l].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--i],u),t[l]=n[i]}else{if(!f){f=new Map;let g=r;for(;g<i;)f.set(n[g],g++)}const u=f.get(t[o]);if(u!=null)if(r<u&&u<i){let g=o,d=1,m;for(;++g<l&&g<i&&!((m=f.get(t[g]))==null||m!==u+d);)d++;if(d>u-r){const _=t[o];for(;r<u;)e.insertBefore(n[r++],_)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const Z="_$DX_DELEGATE";function Se(e,t,n,s={}){let l;return V(i=>{l=i,t===document?e():b(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{l(),t.textContent=""}}function E(e,t,n){const s=document.createElement("template");s.innerHTML=e;let l=s.content.firstChild;return n&&(l=l.firstChild),l}function Ee(e,t=window.document){const n=t[Z]||(t[Z]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,_e))}}function Ae(e,t,n){return B(()=>e(t,n))}function b(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return R(e,t,s,n);O(l=>R(e,t(),l,n),s)}function _e(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),x.registry&&!x.done&&(x.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let l=s.nextSibling;s.remove(),s=l}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const l=n[`${t}Data`];if(l!==void 0?s.call(n,l,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function R(e,t,n,s,l){for(x.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(x.context)return n;if(i==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=N(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(x.context)return n;n=N(e,n,s)}else{if(i==="function")return O(()=>{let r=t();for(;typeof r=="function";)r=r();n=R(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],c=n&&Array.isArray(n);if(q(r,t,n,l))return O(()=>n=R(e,r,n,s,!0)),()=>n;if(x.context){if(!r.length)return n;for(let f=0;f<r.length;f++)if(r[f].parentNode)return n=r}if(r.length===0){if(n=N(e,n,s),o)return n}else c?n.length===0?z(e,r,s):$e(e,n,r):(n&&N(e),z(e,r));n=r}else if(t instanceof Node){if(x.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=N(e,n,s,t);N(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function q(e,t,n,s){let l=!1;for(let i=0,o=t.length;i<o;i++){let r=t[i],c=n&&n[i];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))l=q(e,r,c)||l;else if(typeof r=="function")if(s){for(;typeof r=="function";)r=r();l=q(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||l}else e.push(r),l=!0;else{const f=String(r);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return l}function z(e,t,n=null){for(let s=0,l=t.length;s<l;s++)e.insertBefore(t[s],n)}function N(e,t,n,s){if(n===void 0)return e.textContent="";const l=s||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(l!==r){const c=r.parentNode===e;!i&&!o?c?e.replaceChild(l,r):e.insertBefore(l,n):c&&r.remove()}else i=!0}}else e.insertBefore(l,n);return[l]}var Ce=e=>pe()?Q(e):e;class Te extends Set{emit(t){for(const n of this)n(t)}}function P(){const e=new Te;return{listen(t){return e.add(t),Ce(e.delete.bind(e,t))},emit:e.emit.bind(e),clear:Q(e.clear.bind(e))}}function Ne(e){const t=P(),n=typeof e=="function"?e(P):e,s={};return Object.entries(n).forEach(([l,i])=>{i.value&&Object.defineProperty(s,l,{get:i.value,enumerable:!0}),i.listen(o=>t.emit({name:l,details:o}))}),{...n,value:s,on:(l,i)=>n[l].listen(i),emit:(l,i)=>n[l].emit(i),listen:t.listen}}var Le=e=>e.slice(),Oe=(e,t)=>{const n=Le(e);return t(n),n},Be=(e,...t)=>Oe(e,n=>n.push(...t)),ke=(e,t=1)=>e.slice(t),Pe=(e,t)=>Ie(e,n=>n!==t);function Ie(e,t){const n=e.filter(t);return n.removed=e.length-n.length,n}function je(e={}){const{toValue:t=c=>c,length:n=0}=e,[s,l]=L([]),i=P(),o=P();i.listen(c=>{const f=t(c,s());l(u=>{const g=Be(u,f);return n&&g.length>n?ke(g):g}),o.emit({event:f,stack:s(),remove:()=>r(f)})});const r=c=>!!l(f=>Pe(f,c)).removed;return{clear:o.clear,listen:o.listen,emit:i.emit,value:s,setValue:l,remove:r}}const De=E('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-12 bg-gray-800 text-white"></div>'),Me=E('<button class="w-12 h-8 bg-white border-none rounded font-semibold"></button>'),Ve=E('<div class="w-18 h-18 bg-gray-500 rounded-full"></div>'),Ue=E('<div class="wrapper-h"></div>'),Fe=E('<div class="wrapper-v"><div class="flex space-x-4"><button class="btn">SPIN!</button><button class="btn">WIGGLE!</button></div><div class="flex justify-center flex-wrap gap-8 !mt-12"></div></div>'),He=E('<div><div class="w-32 h-24 center-child bg-orange-700 bg-opacity-80 rounded-lg transition-transform duration-300">Child</div></div>'),We=E('<div class="wrapper-h"><form class="flex space-x-2"><input type="text"><button class="btn">SEND</button><button class="btn" type="button">CLEAR</button></form></div>'),Re=E('<div class="fixed top-4 right-4 flex flex-col items-end space-y-4"></div>'),Ge=E('<div class="p-2 px-3 bg-gray-600 animate-fade-in-down animate-count-1 animate-duration-150"><span class="mr-2"></span><button>X</button></div>'),Ke=()=>(()=>{const e=De.cloneNode(!0);return b(e,y(qe,{}),null),b(e,y(Xe,{}),null),b(e,y(Qe,{}),null),e})(),qe=()=>{const e=s=>{const[l,i]=L(!0),o=()=>i(r=>(s.emit(!r),!r));return(()=>{const r=Me.cloneNode(!0);return r.$$click=o,b(r,()=>l()?"ON":"OFF"),r})()},t=s=>{const[l,i]=L(!0);return s.subscribe(i),(()=>{const o=Ve.cloneNode(!0);return O(r=>{const c=!!l(),f=l()?"0 0 24px rgb(254, 239, 179)":"";return c!==r._v$&&o.classList.toggle("bg-yellow-200",r._v$=c),f!==r._v$2&&o.style.setProperty("box-shadow",r._v$2=f),r},{_v$:void 0,_v$2:void 0}),o})()},n=P();return(()=>{const s=Ue.cloneNode(!0);return b(s,y(e,{get emit(){return n.emit}}),null),b(s,y(t,{get subscribe(){return n.listen}}),null),s})()},Xe=()=>{const{emit:e,spin:t,wiggle:n}=Ne(s=>({spin:s(),wiggle:s()}));return(()=>{const s=Fe.cloneNode(!0),l=s.firstChild,i=l.firstChild,o=i.nextSibling,r=l.nextSibling;return i.$$click=()=>e("spin",Math.random()*360-180),o.$$click=()=>e("wiggle"),b(r,y(K,{get listenToSpin(){return t.listen},get listenToWiggle(){return n.listen}}),null),b(r,y(K,{get listenToSpin(){return t.listen},get listenToWiggle(){return n.listen}}),null),b(r,y(K,{get listenToSpin(){return t.listen},get listenToWiggle(){return n.listen}}),null),s})()},K=e=>{const[t,n]=L(0);e.listenToSpin(i=>n(o=>o+i));let s,l;return he(()=>{const i=new KeyframeEffect(s,{transform:["translate3d(-1px, 0, 0)","translate3d(2px, 0, 0)","translate3d(-4px, 0, 0)","translate3d(4px, 0, 0)","translate3d(-4px, 0, 0)","translate3d(4px, 0, 0)","translate3d(-4px, 0, 0)","translate3d(2px, 0, 0)","translate3d(-1px, 0, 0)"]},{duration:500});l=new Animation(i)}),e.listenToWiggle(()=>{l.currentTime=0,l.play()}),(()=>{const i=He.cloneNode(!0),o=i.firstChild,r=s;return typeof r=="function"?Ae(r,i):s=i,O(()=>o.style.setProperty("transform",`rotate(${t()}deg)`)),i})()},Qe=()=>{const[e,t]=L("my message!");let n;return(()=>{const s=We.cloneNode(!0),l=s.firstChild,i=l.firstChild,o=i.nextSibling,r=o.nextSibling;return l.addEventListener("submit",c=>{c.preventDefault(),n.emit(e()),t("")}),i.$$input=c=>t(c.currentTarget.value),r.$$click=()=>n.setValue([]),b(s,y(Je,{useEventBus:c=>n=c}),null),O(()=>i.value=e()),s})()},Je=e=>{const t=je({toValue(n){return{text:n.length>50?n.substring(0,50)+"...":n}},length:10});return e.useEventBus(t),(()=>{const n=Re.cloneNode(!0);return b(n,y(xe,{get each(){return t.value()},children:s=>(()=>{const l=Ge.cloneNode(!0),i=l.firstChild,o=i.nextSibling;return b(i,()=>s.text),o.$$click=()=>t.setValue(r=>r.filter(c=>c!==s)),l})()})),n})()};Se(()=>y(Ke,{}),document.getElementById("root"));Ee(["click","input"]);