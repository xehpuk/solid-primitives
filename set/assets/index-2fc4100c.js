(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=s(i);fetch(i.href,l)}})();const C={};function he(e){C.context=e}const de=(e,t)=>e===t,pe=Symbol("solid-track"),$={equals:de};let J=ne;const A=1,U=2,X={owned:null,cleanups:null,context:null,owner:null};var d=null;let E=null,a=null,p=null,S=null,H=0;function B(e,t){const s=a,n=d,i=e.length===0,l=i?X:{owned:null,cleanups:null,context:null,owner:t||n},o=i?e:()=>e(()=>F(()=>K(l)));d=l,a=null;try{return _(o,!0)}finally{a=s,d=n}}function Z(e,t){t=t?Object.assign({},$,t):$;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=i=>(typeof i=="function"&&(i=i(s.value)),se(s,i));return[te.bind(s),n]}function q(e,t,s){const n=z(e,t,!1,A);O(n)}function ge(e,t,s){J=Se;const n=z(e,t,!1,A);n.user=!0,S?S.push(n):O(n)}function ye(e,t,s){s=s?Object.assign({},$,s):$;const n=z(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=s.equals||void 0,O(n),te.bind(n)}function F(e){const t=a;a=null;try{return e()}finally{a=t}}function we(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function ee(){return a}function te(){const e=E;if(this.sources&&(this.state||e))if(this.state===A||e)O(this);else{const t=p;p=null,_(()=>R(this),!1),p=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function se(e,t,s){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&_(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],o=E&&E.running;o&&E.disposed.has(l),(o&&!l.tState||!o&&!l.state)&&(l.pure?p.push(l):S.push(l),l.observers&&ie(l)),o||(l.state=A)}if(p.length>1e6)throw p=[],new Error},!1)),t}function O(e){if(!e.fn)return;K(e);const t=d,s=a,n=H;a=d=e,be(e,e.value,n),a=s,d=t}function be(e,t,s){let n;try{n=e.fn(t)}catch(i){e.pure&&(e.state=A,e.owned&&e.owned.forEach(K),e.owned=null),re(i)}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?se(e,n):e.value=n,e.updatedAt=s)}function z(e,t,s,n=A,i){const l={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:s};return d===null||d!==X&&(d.owned?d.owned.push(l):d.owned=[l]),l}function P(e){const t=E;if(e.state===0||t)return;if(e.state===U||t)return R(e);if(e.suspense&&F(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<H);)(e.state||t)&&s.push(e);for(let n=s.length-1;n>=0;n--)if(e=s[n],e.state===A||t)O(e);else if(e.state===U||t){const i=p;p=null,_(()=>R(e,s[0]),!1),p=i}}function _(e,t){if(p)return e();let s=!1;t||(p=[]),S?s=!0:S=[],H++;try{const n=e();return me(s),n}catch(n){p||(S=null),re(n)}}function me(e){if(p&&(ne(p),p=null),e)return;const t=S;S=null,t.length&&_(()=>J(t),!1)}function ne(e){for(let t=0;t<e.length;t++)P(e[t])}function Se(e){let t,s=0;for(t=0;t<e.length;t++){const n=e[t];n.user?e[s++]=n:P(n)}for(C.context&&he(),t=0;t<s;t++)P(e[t])}function R(e,t){const s=E;e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];i.sources&&(i.state===A||s?i!==t&&P(i):(i.state===U||s)&&R(i,t))}}function ie(e){const t=E;for(let s=0;s<e.observers.length;s+=1){const n=e.observers[s];(!n.state||t)&&(n.state=U,n.pure?p.push(n):S.push(n),n.observers&&ie(n))}}function K(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),n=e.sourceSlots.pop(),i=s.observers;if(i&&i.length){const l=i.pop(),o=s.observerSlots.pop();n<i.length&&(l.sourceSlots[o]=n,i[n]=l,s.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)K(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ae(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function re(e){throw e=Ae(e),e}const xe=Symbol("fallback");function V(e){for(let t=0;t<e.length;t++)e[t]()}function Ce(e,t,s={}){let n=[],i=[],l=[],o=0,r=t.length>1?[]:null;return we(()=>V(l)),()=>{let u=e()||[],f,c;return u[pe],F(()=>{let h=u.length,y,x,L,j,M,w,b,m,T;if(h===0)o!==0&&(V(l),l=[],n=[],i=[],o=0,r&&(r=[])),s.fallback&&(n=[xe],i[0]=B(ae=>(l[0]=ae,s.fallback())),o=1);else if(o===0){for(i=new Array(h),c=0;c<h;c++)n[c]=u[c],i[c]=B(g);o=h}else{for(L=new Array(h),j=new Array(h),r&&(M=new Array(h)),w=0,b=Math.min(o,h);w<b&&n[w]===u[w];w++);for(b=o-1,m=h-1;b>=w&&m>=w&&n[b]===u[m];b--,m--)L[m]=i[b],j[m]=l[b],r&&(M[m]=r[b]);for(y=new Map,x=new Array(m+1),c=m;c>=w;c--)T=u[c],f=y.get(T),x[c]=f===void 0?-1:f,y.set(T,c);for(f=w;f<=b;f++)T=n[f],c=y.get(T),c!==void 0&&c!==-1?(L[c]=i[f],j[c]=l[f],r&&(M[c]=r[f]),c=x[c],y.set(T,c)):l[f]();for(c=w;c<h;c++)c in L?(i[c]=L[c],l[c]=j[c],r&&(r[c]=M[c],r[c](c))):i[c]=B(g);i=i.slice(0,o=h),n=u.slice(0)}return i});function g(h){if(l[c]=h,r){const[y,x]=Z(c);return r[c]=x,t(u[c],y)}return t(u[c])}}}function le(e,t){return F(()=>e(t||{}))}function Ee(e){const t="fallback"in e&&{fallback:()=>e.fallback};return ye(Ce(()=>e.each,e.children,t||void 0))}function Te(e,t,s){let n=s.length,i=t.length,l=n,o=0,r=0,u=t[i-1].nextSibling,f=null;for(;o<i||r<l;){if(t[o]===s[r]){o++,r++;continue}for(;t[i-1]===s[l-1];)i--,l--;if(i===o){const c=l<n?r?s[r-1].nextSibling:s[l-r]:u;for(;r<l;)e.insertBefore(s[r++],c)}else if(l===r)for(;o<i;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===s[l-1]&&s[r]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(s[r++],t[o++].nextSibling),e.insertBefore(s[--l],c),t[i]=s[l]}else{if(!f){f=new Map;let g=r;for(;g<l;)f.set(s[g],g++)}const c=f.get(t[o]);if(c!=null)if(r<c&&c<l){let g=o,h=1,y;for(;++g<i&&g<l&&!((y=f.get(t[g]))==null||y!==c+h);)h++;if(h>c-r){const x=t[o];for(;r<c;)e.insertBefore(s[r++],x)}else e.replaceChild(s[r++],t[o++])}else o++;else t[o++].remove()}}}function ve(e,t,s,n={}){let i;return B(l=>{i=l,t===document?e():I(t,e(),t.firstChild?null:void 0,s)},n.owner),()=>{i(),t.textContent=""}}function oe(e,t,s){const n=document.createElement("template");n.innerHTML=e;let i=n.content.firstChild;return s&&(i=i.firstChild),i}function I(e,t,s,n){if(s!==void 0&&!n&&(n=[]),typeof t!="function")return W(e,t,n,s);q(i=>W(e,t(),i,s),n)}function W(e,t,s,n,i){for(C.context&&!s&&(s=[...e.childNodes]);typeof s=="function";)s=s();if(t===s)return s;const l=typeof t,o=n!==void 0;if(e=o&&s[0]&&s[0].parentNode||e,l==="string"||l==="number"){if(C.context)return s;if(l==="number"&&(t=t.toString()),o){let r=s[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),s=v(e,s,n,r)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t}else if(t==null||l==="boolean"){if(C.context)return s;s=v(e,s,n)}else{if(l==="function")return q(()=>{let r=t();for(;typeof r=="function";)r=r();s=W(e,r,s,n)}),()=>s;if(Array.isArray(t)){const r=[],u=s&&Array.isArray(s);if(D(r,t,s,i))return q(()=>s=W(e,r,s,n,!0)),()=>s;if(C.context){if(!r.length)return s;for(let f=0;f<r.length;f++)if(r[f].parentNode)return s=r}if(r.length===0){if(s=v(e,s,n),o)return s}else u?s.length===0?Y(e,r,n):Te(e,s,r):(s&&v(e),Y(e,r));s=r}else if(t instanceof Node){if(C.context&&t.parentNode)return s=o?[t]:t;if(Array.isArray(s)){if(o)return s=v(e,s,n,t);v(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function D(e,t,s,n){let i=!1;for(let l=0,o=t.length;l<o;l++){let r=t[l],u=s&&s[l];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))i=D(e,r,u)||i;else if(typeof r=="function")if(n){for(;typeof r=="function";)r=r();i=D(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||i}else e.push(r),i=!0;else{const f=String(r);u&&u.nodeType===3&&u.data===f?e.push(u):e.push(document.createTextNode(f))}}return i}function Y(e,t,s=null){for(let n=0,i=t.length;n<i;n++)e.insertBefore(t[n],s)}function v(e,t,s,n){if(s===void 0)return e.textContent="";const i=n||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(i!==r){const u=r.parentNode===e;!l&&!o?u?e.replaceChild(i,r):e.insertBefore(i,s):u&&r.remove()}else l=!0}}else e.insertBefore(i,s);return[i]}var ke=Object.defineProperty,N=(e,t)=>ke(e,"name",{value:t,configurable:!0}),ce=class{obj={};set(e,t){this.obj[e]=t}get(e){return this.obj[e]}};N(ce,"_Object");function fe(){return Z(void 0,{equals:!1})}N(fe,"createTrigger");function G(e){const t=this.get(e);t&&t[1]()}N(G,"dirtyTriggerCache");function Q(e){let t=this.get(e);return t||(t=fe(),this.set(e,t)),t[0](),t}N(Q,"trackTriggerCache");function ue(){const e=new ce,t=new WeakMap,s=new Set;return{dirty(n){G.call(n instanceof Object?t:e,n)},dirtyAll:s.forEach.bind(s,n=>n()),track(n){if(!ee())return;const i=Q.call(n instanceof Object?t:e,n);s.add(i[1])}}}N(ue,"createTriggerCache");function Ne(){const e=new WeakMap;return{dirty:G.bind(e),track(t){ee()&&Q.call(e,t)}}}N(Ne,"createWeakTriggerCache");const k=Symbol("track-keys");class Le extends Set{cache=ue();constructor(t){if(super(),t)for(const s of t)super.add(s)}has(t){return this.cache.track(t),super.has(t)}add(t){return super.has(t)?this:(super.add(t),this.cache.dirty(t),this.cache.dirty(k),this)}delete(t){const s=super.delete(t);return s&&(this.cache.dirty(t),this.cache.dirty(k)),s}clear(){super.size&&(super.clear(),this.cache.dirtyAll())}set(t){super.clear(),t.forEach(s=>super.add(s)),this.cache.dirtyAll()}forEach(t){this.cache.track(k),super.forEach((s,n)=>t(s,n,this))}values(){return this.cache.track(k),super.values()}keys(){return this.values()}entries(){return this.cache.track(k),super.entries()}get size(){return this.cache.track(k),super.size}[Symbol.iterator](){return this.values()}get[Symbol.toStringTag](){return super[Symbol.toStringTag]}}const Oe=oe('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="wrapper-h"></div><p>size: </p></div>'),_e=oe('<div class="node"></div>'),je=()=>{const e=new Le([1,2,3]);setInterval(()=>{const t=Math.round(Math.random()*10);e.add(t)||e.delete(t)},1e3);for(let t=0;t<=10;t++)ge(()=>console.log(`HAS ${t}: ${e.has(t)}`));return(()=>{const t=Oe.cloneNode(!0),s=t.firstChild,n=s.nextSibling;return n.firstChild,I(s,le(Ee,{get each(){return[...e]},children:i=>(()=>{const l=_e.cloneNode(!0);return I(l,i),l})()})),I(n,()=>e.size,null),t})()};ve(()=>le(je,{}),document.getElementById("root"));