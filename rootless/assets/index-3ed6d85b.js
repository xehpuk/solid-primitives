(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const me=(e,t)=>e===t,v=Symbol("solid-proxy"),Y=Symbol("solid-track"),B={equals:me};let Oe=de;const E=1,q=2,oe={owned:null,cleanups:null,context:null,owner:null};var g=null;let V=null,h=null,y=null,O=null,W=0;function j(e,t){const n=h,s=g,i=e.length===0,l=i?oe:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},f=i?e:()=>e(()=>_(()=>H(l)));g=l,h=null;try{return x(f,!0)}finally{h=n,g=s}}function L(e,t){t=t?Object.assign({},B,t):B;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),ue(n,i));return[fe.bind(n),s]}function C(e,t,n){const s=ce(e,t,!1,E);G(s)}function ve(e,t,n){n=n?Object.assign({},B,n):B;const s=ce(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,G(s),fe.bind(s)}function ee(e){return x(e,!1)}function _(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function I(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function re(){return h}function $e(){return g}function fe(){if(this.sources&&this.state)if(this.state===E)G(this);else{const e=y;y=null,x(()=>M(this),!1),y=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function ue(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&x(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],f=V&&V.running;f&&V.disposed.has(l),(f?!l.tState:!l.state)&&(l.pure?y.push(l):O.push(l),l.observers&&he(l)),f||(l.state=E)}if(y.length>1e6)throw y=[],new Error},!1)),t}function G(e){if(!e.fn)return;H(e);const t=g,n=h,s=W;h=g=e,Ee(e,e.value,s),h=n,g=t}function Ee(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=E,e.owned&&e.owned.forEach(H),e.owned=null),e.updatedAt=n+1,pe(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ue(e,s):e.value=s,e.updatedAt=n)}function ce(e,t,n,s=E,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==oe&&(g.owned?g.owned.push(l):g.owned=[l]),l}function ae(e){if(e.state===0)return;if(e.state===q)return M(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<W);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===E)G(e);else if(e.state===q){const s=y;y=null,x(()=>M(e,t[0]),!1),y=s}}function x(e,t){if(y)return e();let n=!1;t||(y=[]),O?n=!0:O=[],W++;try{const s=e();return Pe(n),s}catch(s){n||(O=null),y=null,pe(s)}}function Pe(e){if(y&&(de(y),y=null),e)return;const t=O;O=null,t.length&&x(()=>Oe(t),!1)}function de(e){for(let t=0;t<e.length;t++)ae(e[t])}function M(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===E?s!==t&&(!s.updatedAt||s.updatedAt<W)&&ae(s):i===q&&M(s,t)}}}function he(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=q,n.pure?y.push(n):O.push(n),n.observers&&he(n))}}function H(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),f=n.observerSlots.pop();s<i.length&&(l.sourceSlots[f]=s,i[s]=l,n.observerSlots[s]=f)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)H(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function pe(e){throw e}const Te=Symbol("fallback");function se(e){for(let t=0;t<e.length;t++)e[t]()}function Ce(e,t,n={}){let s=[],i=[],l=[],f=0,o=t.length>1?[]:null;return I(()=>se(l)),()=>{let u=e()||[],c,r;return u[Y],_(()=>{let d=u.length,p,A,m,k,R,w,b,S,P;if(d===0)f!==0&&(se(l),l=[],s=[],i=[],f=0,o&&(o=[])),n.fallback&&(s=[Te],i[0]=j(Se=>(l[0]=Se,n.fallback())),f=1);else if(f===0){for(i=new Array(d),r=0;r<d;r++)s[r]=u[r],i[r]=j(a);f=d}else{for(m=new Array(d),k=new Array(d),o&&(R=new Array(d)),w=0,b=Math.min(f,d);w<b&&s[w]===u[w];w++);for(b=f-1,S=d-1;b>=w&&S>=w&&s[b]===u[S];b--,S--)m[S]=i[b],k[S]=l[b],o&&(R[S]=o[b]);for(p=new Map,A=new Array(S+1),r=S;r>=w;r--)P=u[r],c=p.get(P),A[r]=c===void 0?-1:c,p.set(P,r);for(c=w;c<=b;c++)P=s[c],r=p.get(P),r!==void 0&&r!==-1?(m[r]=i[c],k[r]=l[c],o&&(R[r]=o[c]),r=A[r],p.set(P,r)):l[c]();for(r=w;r<d;r++)r in m?(i[r]=m[r],l[r]=k[r],o&&(o[r]=R[r],o[r](r))):i[r]=j(a);i=i.slice(0,f=d),s=u.slice(0)}return i});function a(d){if(l[r]=d,o){const[p,A]=L(r);return o[r]=A,t(u[r],p)}return t(u[r])}}}function ge(e,t){return _(()=>e(t||{}))}function _e(e){const t="fallback"in e&&{fallback:()=>e.fallback};return ve(Ce(()=>e.each,e.children,t||void 0))}function xe(e,t,n){let s=n.length,i=t.length,l=s,f=0,o=0,u=t[i-1].nextSibling,c=null;for(;f<i||o<l;){if(t[f]===n[o]){f++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===f){const r=l<s?o?n[o-1].nextSibling:n[l-o]:u;for(;o<l;)e.insertBefore(n[o++],r)}else if(l===o)for(;f<i;)(!c||!c.has(t[f]))&&t[f].remove(),f++;else if(t[f]===n[l-1]&&n[o]===t[i-1]){const r=t[--i].nextSibling;e.insertBefore(n[o++],t[f++].nextSibling),e.insertBefore(n[--l],r),t[i]=n[l]}else{if(!c){c=new Map;let a=o;for(;a<l;)c.set(n[a],a++)}const r=c.get(t[f]);if(r!=null)if(o<r&&r<l){let a=f,d=1,p;for(;++a<i&&a<l&&!((p=c.get(t[a]))==null||p!==r+d);)d++;if(d>r-o){const A=t[f];for(;o<r;)e.insertBefore(n[o++],A)}else e.replaceChild(n[o++],t[f++])}else f++;else t[f++].remove()}}}const ie="_$DX_DELEGATE";function Ne(e,t,n,s={}){let i;return j(l=>{i=l,t===document?e():De(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function te(e,t,n){let s;const i=()=>{const f=document.createElement("template");return f.innerHTML=e,n?f.content.firstChild.firstChild:f.content.firstChild},l=t?()=>(s||(s=i())).cloneNode(!0):()=>_(()=>document.importNode(s||(s=i()),!0));return l.cloneNode=l,l}function je(e,t=window.document){const n=t[ie]||(t[ie]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,ke))}}function Le(e,t,n){return _(()=>e(t,n))}function De(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return F(e,t,s,n);C(i=>F(e,t(),i,n),s)}function ke(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function F(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,f=s!==void 0;if(e=f&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),f){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=T(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=T(e,n,s);else{if(l==="function")return C(()=>{let o=t();for(;typeof o=="function";)o=o();n=F(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(J(o,t,n,i))return C(()=>n=F(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=T(e,n,s),f)return n}else u?n.length===0?le(e,o,s):xe(e,n,o):(n&&T(e),le(e,o));n=o}else if(t instanceof Node){if(Array.isArray(n)){if(f)return n=T(e,n,s,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function J(e,t,n,s){let i=!1;for(let l=0,f=t.length;l<f;l++){let o=t[l],u=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=J(e,o,u)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=J(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||i}else e.push(o),i=!0;else{const c=String(o);u&&u.nodeType===3?(u.data=c,e.push(u)):e.push(document.createTextNode(c))}}return i}function le(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function T(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let f=t.length-1;f>=0;f--){const o=t[f];if(i!==o){const u=o.parentNode===e;!l&&!f?u?e.replaceChild(i,o):e.insertBefore(i,n):u&&o.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}const Z=Symbol("store-raw"),D=Symbol("store-node");function ye(e){let t=e[v];if(!t&&(Object.defineProperty(e,v,{value:t=new Proxy(e,qe)}),!Array.isArray(e))){const n=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let i=0,l=n.length;i<l;i++){const f=n[i];s[f].get&&Object.defineProperty(e,f,{enumerable:s[f].enumerable,get:s[f].get.bind(t)})}}return t}function K(e){let t;return e!=null&&typeof e=="object"&&(e[v]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function $(e,t=new Set){let n,s,i,l;if(n=e!=null&&e[Z])return n;if(!K(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let f=0,o=e.length;f<o;f++)i=e[f],(s=$(i,t))!==i&&(e[f]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const f=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let u=0,c=f.length;u<c;u++)l=f[u],!o[l].get&&(i=e[l],(s=$(i,t))!==i&&(e[l]=s))}return e}function ne(e){let t=e[D];return t||Object.defineProperty(e,D,{value:t=Object.create(null)}),t}function z(e,t,n){return e[t]||(e[t]=be(n))}function Re(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===v||t===D||(delete n.value,delete n.writable,n.get=()=>e[v][t]),n}function we(e){if(re()){const t=ne(e);(t._||(t._=be()))()}}function Be(e){return we(e),Reflect.ownKeys(e)}function be(e){const[t,n]=L(e,{equals:!1,internal:!0});return t.$=n,t}const qe={get(e,t,n){if(t===Z)return e;if(t===v)return n;if(t===Y)return we(e),n;const s=ne(e),i=s[t];let l=i?i():e[t];if(t===D||t==="__proto__")return l;if(!i){const f=Object.getOwnPropertyDescriptor(e,t);re()&&(typeof l!="function"||e.hasOwnProperty(t))&&!(f&&f.get)&&(l=z(s,t,l)())}return K(l)?ye(l):l},has(e,t){return t===Z||t===v||t===Y||t===D||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Be,getOwnPropertyDescriptor:Re};function U(e,t,n,s=!1){if(!s&&e[t]===n)return;const i=e[t],l=e.length;n===void 0?delete e[t]:e[t]=n;let f=ne(e),o;(o=z(f,t,i))&&o.$(()=>n),Array.isArray(e)&&e.length!==l&&(o=z(f,"length",l))&&o.$(e.length),(o=f._)&&o.$()}function Ae(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const i=n[s];U(e,i,t[i])}}function Ie(e,t){if(typeof t=="function"&&(t=t(e)),t=$(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const i=t[n];e[n]!==i&&U(e,n,i)}U(e,"length",s)}else Ae(e,t)}function N(e,t,n=[]){let s,i=e;if(t.length>1){s=t.shift();const f=typeof s,o=Array.isArray(e);if(Array.isArray(s)){for(let u=0;u<s.length;u++)N(e,[s[u]].concat(t),n);return}else if(o&&f==="function"){for(let u=0;u<e.length;u++)s(e[u],u)&&N(e,[u].concat(t),n);return}else if(o&&f==="object"){const{from:u=0,to:c=e.length-1,by:r=1}=s;for(let a=u;a<=c;a+=r)N(e,[a].concat(t),n);return}else if(t.length>1){N(e[s],t,[s].concat(n));return}i=e[s],n=[s].concat(n)}let l=t[0];typeof l=="function"&&(l=l(i,n),l===i)||s===void 0&&l==null||(l=$(l),s===void 0||K(i)&&K(l)&&!Array.isArray(l)?Ae(i,l):U(e,s,l))}function Me(...[e,t]){const n=$(e||{}),s=Array.isArray(n),i=ye(n);function l(...f){ee(()=>{s&&f.length===1?Ie(n,f[0]):N(n,f)})}return[i,l]}var X=()=>{},Q=()=>!0;function Fe(e){let t=0,n;return I(()=>t=0),(...s)=>{n=s,t++,queueMicrotask(()=>--t===0&&e(...n))}}function Ke(e,t={}){let n=0;const{limit:s=100}=t,i=new Array(s),l=$e(),f=e.length>1?(r,[a,d])=>{const[p,A]=L(!0),m={dispose:r,set:d,setA:A,active:p,v:e(a,p,()=>c(m))};return m}:(r,[a,d])=>({dispose:r,set:d,setA:Q,active:Q,v:e(a,Q,X)}),o=Fe(()=>{if(n>s){for(let r=s;r<n;r++)i[r].dispose(),i[r]=void 0;n=s}}),u=r=>{r.dispose!==X&&(i[n++]=r,r.setA(!1),o())},c=r=>{r.dispose(),r.dispose=X,r.active()?r.setA(!1):(i[i.indexOf(r)]=i[--n],i[n]=void 0)};return I(()=>{for(let r=0;r<n;r++)i[r].dispose();n=0}),r=>{let a;return n?(a=i[--n],i[n]=void 0,ee(()=>{a.set(()=>r),a.setA(!0)})):a=j(d=>f(d,L(r)),l),I(()=>u(a)),a.v}}const Ue=te('<div><input type="checkbox"><input type="text"><button>x'),We=te("<h3>Simple Todos Example"),Ge=te('<form><input placeholder="enter todo and click +" required><button>+'),He=()=>{const[e,t]=L(""),[n,s]=Me([]),i=u=>{u.preventDefault(),ee(()=>{s(n.length,{title:e(),done:!1}),t("")})};function l(u){u=$(u),s(c=>c.filter(r=>r!==u))}function f(u,c){u=$(u),s(r=>r===u,c)}const o=Ke(u=>(()=>{const c=Ue(),r=c.firstChild,a=r.nextSibling,d=a.nextSibling;return Le(p=>console.log("todo el created",p),c),r.addEventListener("change",p=>f(u(),{done:p.currentTarget.checked})),a.addEventListener("change",p=>f(u(),{title:p.currentTarget.value})),d.$$click=()=>l(u()),C(()=>r.checked=u().done),C(()=>a.value=u().title),c})());return[We(),(()=>{const u=Ge(),c=u.firstChild;return u.addEventListener("submit",i),c.$$input=r=>t(r.currentTarget.value),C(()=>c.value=e()),u})(),ge(_e,{each:n,children:u=>o(u)})]};Ne(()=>ge(He,{}),document.getElementById("root"));je(["click","input"]);
