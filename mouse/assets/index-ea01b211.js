(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const _={};function Ge(e){_.context=e}const He=(e,t)=>e===t,Ke=Symbol("solid-track"),K={equals:He};let _e=Pe;const P=1,Q=2,Ce={owned:null,cleanups:null,context:null,owner:null};var g=null;let N=null,p=null,b=null,T=null,ae=0;function H(e,t){const n=p,s=g,r=e.length===0,i=r?Ce:{owned:null,cleanups:null,context:null,owner:t||s},l=r?e:()=>e(()=>k(()=>re(i)));g=i,p=null;try{return V(l,!0)}finally{p=n,g=s}}function I(e,t){t=t?Object.assign({},K,t):K;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),Te(n,r));return[Le.bind(n),s]}function Qe(e,t,n){const s=se(e,t,!0,P);B(s)}function U(e,t,n){const s=se(e,t,!1,P);B(s)}function he(e,t,n){_e=nt;const s=se(e,t,!1,P);s.user=!0,T?T.push(s):B(s)}function F(e,t,n){n=n?Object.assign({},K,n):K;const s=se(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,B(s),Le.bind(s)}function Je(e){return V(e,!1)}function k(e){const t=p;p=null;try{return e()}finally{p=t}}function Ze(e){he(()=>k(e))}function ne(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function ze(){return g}function Le(){const e=N;if(this.sources&&(this.state||e))if(this.state===P||e)B(this);else{const t=b;b=null,V(()=>Z(this),!1),b=t}if(p){const t=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(t)):(p.sources=[this],p.sourceSlots=[t]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function Te(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&V(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=N&&N.running;l&&N.disposed.has(i),(l&&!i.tState||!l&&!i.state)&&(i.pure?b.push(i):T.push(i),i.observers&&ke(i)),l||(i.state=P)}if(b.length>1e6)throw b=[],new Error},!1)),t}function B(e){if(!e.fn)return;re(e);const t=g,n=p,s=ae;p=g=e,et(e,e.value,s),p=n,g=t}function et(e,t,n){let s;try{s=e.fn(t)}catch(r){e.pure&&(e.state=P,e.owned&&e.owned.forEach(re),e.owned=null),Oe(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Te(e,s):e.value=s,e.updatedAt=n)}function se(e,t,n,s=P,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==Ce&&(g.owned?g.owned.push(i):g.owned=[i]),i}function J(e){const t=N;if(e.state===0||t)return;if(e.state===Q||t)return Z(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ae);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===P||t)B(e);else if(e.state===Q||t){const r=b;b=null,V(()=>Z(e,n[0]),!1),b=r}}function V(e,t){if(b)return e();let n=!1;t||(b=[]),T?n=!0:T=[],ae++;try{const s=e();return tt(n),s}catch(s){b||(T=null),Oe(s)}}function tt(e){if(b&&(Pe(b),b=null),e)return;const t=T;T=null,t.length&&V(()=>_e(t),!1)}function Pe(e){for(let t=0;t<e.length;t++)J(e[t])}function nt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:J(s)}for(_.context&&Ge(),t=0;t<n;t++)J(e[t])}function Z(e,t){const n=N;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===P||n?r!==t&&J(r):(r.state===Q||n)&&Z(r,t))}}function ke(e){const t=N;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=Q,s.pure?b.push(s):T.push(s),s.observers&&ke(s))}}function re(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)re(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function st(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Oe(e){throw e=st(e),e}const rt=Symbol("fallback");function xe(e){for(let t=0;t<e.length;t++)e[t]()}function it(e,t,n={}){let s=[],r=[],i=[],l=0,o=t.length>1?[]:null;return ne(()=>xe(i)),()=>{let c=e()||[],f,u;return c[Ke],k(()=>{let a=c.length,y,A,O,h,C,m,x,S,L;if(a===0)l!==0&&(xe(i),i=[],s=[],r=[],l=0,o&&(o=[])),n.fallback&&(s=[rt],r[0]=H(We=>(i[0]=We,n.fallback())),l=1);else if(l===0){for(r=new Array(a),u=0;u<a;u++)s[u]=c[u],r[u]=H(d);l=a}else{for(O=new Array(a),h=new Array(a),o&&(C=new Array(a)),m=0,x=Math.min(l,a);m<x&&s[m]===c[m];m++);for(x=l-1,S=a-1;x>=m&&S>=m&&s[x]===c[S];x--,S--)O[S]=r[x],h[S]=i[x],o&&(C[S]=o[x]);for(y=new Map,A=new Array(S+1),u=S;u>=m;u--)L=c[u],f=y.get(L),A[u]=f===void 0?-1:f,y.set(L,u);for(f=m;f<=x;f++)L=s[f],u=y.get(L),u!==void 0&&u!==-1?(O[u]=r[f],h[u]=i[f],o&&(C[u]=o[f]),u=A[u],y.set(L,u)):i[f]();for(u=m;u<a;u++)u in O?(r[u]=O[u],i[u]=h[u],o&&(o[u]=C[u],o[u](u))):r[u]=H(d);r=r.slice(0,l=a),s=c.slice(0)}return r});function d(a){if(i[u]=a,o){const[y,A]=I(u);return o[u]=A,t(c[u],y)}return t(c[u])}}}function X(e,t){return k(()=>e(t||{}))}function ot(e){const t="fallback"in e&&{fallback:()=>e.fallback};return F(it(()=>e.each,e.children,t||void 0))}function lt(e){let t=!1;const n=e.keyed,s=F(()=>e.when,void 0,{equals:(r,i)=>t?r===i:!r==!i});return F(()=>{const r=s();if(r){const i=e.children,l=typeof i=="function"&&i.length>0;return t=n||l,l?k(()=>i(r)):i}return e.fallback},void 0,void 0)}function ct(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,c=t[r-1].nextSibling,f=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const u=i<s?o?n[o-1].nextSibling:n[i-o]:c;for(;o<i;)e.insertBefore(n[o++],u)}else if(i===o)for(;l<r;)(!f||!f.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const u=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],u),t[r]=n[i]}else{if(!f){f=new Map;let d=o;for(;d<i;)f.set(n[d],d++)}const u=f.get(t[l]);if(u!=null)if(o<u&&u<i){let d=l,a=1,y;for(;++d<r&&d<i&&!((y=f.get(t[d]))==null||y!==u+a);)a++;if(a>u-o){const A=t[l];for(;o<u;)e.insertBefore(n[o++],A)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Ee="_$DX_DELEGATE";function ut(e,t,n,s={}){let r;return H(i=>{r=i,t===document?e():R(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function de(e,t,n){const s=document.createElement("template");s.innerHTML=e;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function ft(e,t=window.document){const n=t[Ee]||(t[Ee]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,ht))}}function at(e,t,n){return k(()=>e(t,n))}function R(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return z(e,t,s,n);U(r=>z(e,t(),r,n),s)}function ht(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),_.registry&&!_.done&&(_.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let r=s.nextSibling;s.remove(),s=r}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function z(e,t,n,s,r){for(_.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(_.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=D(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(_.context)return n;n=D(e,n,s)}else{if(i==="function")return U(()=>{let o=t();for(;typeof o=="function";)o=o();n=z(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(le(o,t,n,r))return U(()=>n=z(e,o,n,s,!0)),()=>n;if(_.context){if(!o.length)return n;for(let f=0;f<o.length;f++)if(o[f].parentNode)return n=o}if(o.length===0){if(n=D(e,n,s),l)return n}else c?n.length===0?$e(e,o,s):ct(e,n,o):(n&&D(e),$e(e,o));n=o}else if(t instanceof Node){if(_.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=D(e,n,s,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function le(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],c=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))r=le(e,o,c)||r;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();r=le(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||r}else e.push(o),r=!0;else{const f=String(o);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return r}function $e(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function D(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const c=o.parentNode===e;!i&&!l?c?e.replaceChild(r,o):e.insertBefore(r,n):c&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}var dt=Object.defineProperty,v=(e,t)=>dt(e,"name",{value:t,configurable:!0});function Ne(e){return e!==null&&(typeof e=="object"||typeof e=="function")}v(Ne,"isObject");function pt(e){return(...t)=>{for(const n of e)typeof n=="function"&&n(...t)}}v(pt,"chain");var Se=v((e,t,n)=>Math.min(Math.max(e,t),n),"clamp"),ee=v(e=>typeof e=="function"&&!e.length?e():e,"access"),ce=v(e=>Array.isArray(e)?e:[e],"asArray");function ue(e,...t){return typeof e=="function"?e(...t):e}v(ue,"accessWith");function gt(e,t,n){const s=Array.isArray(e);let r,i=!0;return l=>{let o;if(s){o=Array(e.length);for(let f=0;f<e.length;f++)o[f]=e[f]()}else o=e();if(i)return i=!1,r=o,n;const c=k(()=>t(o,r,l));return r=o,c}}v(gt,"defer");var Ie=Object.entries,yt=Object.keys,bt=v(e=>ze()?ne(e):e,"tryOnCleanup"),vt=v(()=>{let e=[];const t=v(()=>e=[],"clear");return{push:(...n)=>e.push(...n),execute(n,s,r,i){e.forEach(l=>l(n,s,r,i)),t()},clear:t}},"createCallbackStack");function wt(e){let t=0,n;return(...s)=>{n=s,t++,queueMicrotask(()=>--t===0&&e(...n))}}v(wt,"createMicrotask");function pe(e){const t={...e},n={},s=new Map,r=v(o=>{const c=s.get(o);if(c)return c[0]();const f=I(t[o],{name:typeof o=="string"?o:void 0});return s.set(o,f),delete t[o],f[0]()},"getValue"),i=v((o,c)=>{const f=s.get(o);if(f)return f[1](c);o in t&&(t[o]=ue(c,[t[o]]))},"setValue");for(const o of yt(e))n[o]=void 0,Object.defineProperty(n,o,{get:r.bind(void 0,o)});return[n,v((o,c)=>(Ne(o)?k(()=>{Je(()=>{for(const[f,u]of Ie(ue(o,n)))i(f,()=>u)})}):i(o,c),n),"setter")]}v(pe,"createStaticStore");function mt(e,t,n,s){const r=e.length,i=t.length;let l=0;if(!i){for(;l<r;l++)n(e[l]);return}if(!r){for(;l<i;l++)s(t[l]);return}for(;l<i&&t[l]===e[l];l++);let o,c;t=t.slice(l),e=e.slice(l);for(o of t)e.includes(o)||s(o);for(c of e)t.includes(c)||n(c)}v(mt,"handleDiffArray");var xt=Object.defineProperty,q=(e,t)=>xt(e,"name",{value:t,configurable:!0});function ge(e,t,n,s){return e.addEventListener(t,n,s),bt(e.removeEventListener.bind(e,t,n,s))}q(ge,"makeEventListener");function ye(e,t,n,s){const r=q(()=>{ce(ee(e)).forEach(i=>{i&&ce(ee(t)).forEach(l=>ge(i,l,n,s))})},"attachListeners");typeof e=="function"?he(r):U(r)}q(ye,"createEventListener");function Et(e,t,n){const[s,r]=I();return ye(e,t,r,n),s}q(Et,"createEventSignal");function $t(e,t,n){for(const[s,r]of Ie(t))r&&ye(e,s,r,n)}q($t,"createEventListenerMap");function be(e,t){const{push:n,execute:s}=vt();return[(r,i,l)=>{const o=ge(e,r,i,l??t);return n(o),o},ne(s)]}q(be,"makeEventListenerStack");const Me={passive:!0},St={x:0,y:0,isInside:!1,sourceType:null},At={x:0,y:0,top:0,left:0,width:0,height:0,isInside:!1};function _t(e=window,t,n={}){const{touch:s=!0,followTouch:r=!0}=n,[i,l]=be(e,Me),o=c=>t({x:c.pageX,y:c.pageY,sourceType:"mouse"});if(i("mousemove",o),i("dragover",o),s){const c=f=>{f.touches.length&&t({x:f.touches[0].clientX,y:f.touches[0].clientY,sourceType:"touch"})};i("touchstart",c),r&&i("touchmove",c)}return l}function Ct(e=window,t,n={}){const{touch:s=!0}=n,[r,i]=be(e,Me);let l=!1,o=!s;function c(f){this==="mouse"?l=f:o=f,t(l||o)}return r("mouseover",c.bind("mouse",!0)),r("mouseout",c.bind("mouse",!1)),r("mousemove",c.bind("mouse",!0),{passive:!0,once:!0}),s&&(r("touchstart",c.bind("touch",!0)),r("touchend",c.bind("touch",!1))),i}const Lt=(e,t,n)=>{const s=n.getBoundingClientRect(),r=s.top+window.scrollY,i=s.left+window.scrollX,l=e-i,o=t-r,{width:c,height:f}=s;return{x:l,y:o,top:r,left:i,width:c,height:f,isInside:l>=0&&o>=0&&l<=c&&o<=f}};let Tt=Be;const ie=1,te=2,Pt={owned:null,cleanups:null,context:null,owner:null};var w=null;let j=null,E=null,$=null,M=null,ve=0;function De(e,t){const n=E,s=w,r=e.length===0,i=r?Pt:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},l=r?e:()=>e(()=>Re(()=>oe(i)));w=i,E=null;try{return W(l,!0)}finally{E=n,w=s}}function Re(e){if(E===null)return e();const t=E;E=null;try{return e()}finally{E=t}}function je(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function Ue(){return w}function kt(e,t){const n=w,s=E;w=e,E=null;try{return W(t,!0)}catch(r){we(r)}finally{w=n,E=s}}function Ot(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&W(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=j&&j.running;l&&j.disposed.has(i),(l&&!i.tState||!l&&!i.state)&&(i.pure?$.push(i):M.push(i),i.observers&&Ve(i)),l||(i.state=ie)}if($.length>1e6)throw $=[],new Error},!1)),t}function Nt(e){if(!e.fn)return;oe(e);const t=w,n=E,s=ve;E=w=e,It(e,e.value,s),E=n,w=t}function It(e,t,n){let s;try{s=e.fn(t)}catch(r){e.pure&&(e.state=ie,e.owned&&e.owned.forEach(oe),e.owned=null),we(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ot(e,s):e.value=s,e.updatedAt=n)}function Fe(e){const t=j;if(e.state===0||t)return;if(e.state===te||t)return fe(e);if(e.suspense&&Re(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ve);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===ie||t)Nt(e);else if(e.state===te||t){const r=$;$=null,W(()=>fe(e,n[0]),!1),$=r}}function W(e,t){if($)return e();let n=!1;t||($=[]),M?n=!0:M=[],ve++;try{const s=e();return Mt(n),s}catch(s){n||(M=null),$=null,we(s)}}function Mt(e){if($&&(Be($),$=null),e)return;const t=M;M=null,t.length&&W(()=>Tt(t),!1)}function Be(e){for(let t=0;t<e.length;t++)Fe(e[t])}function fe(e,t){const n=j;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===ie||n?r!==t&&Fe(r):(r.state===te||n)&&fe(r,t))}}function Ve(e){const t=j;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=te,s.pure?$.push(s):M.push(s),s.observers&&Ve(s))}}function oe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)oe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Dt(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function we(e){throw e=Dt(e),e}var Rt=Object.defineProperty,me=(e,t)=>Rt(e,"name",{value:t,configurable:!0});function qe(e,...t){return t.length===0&&(t=[Ue()]),De(n=>(ce(ee(t)).forEach(s=>s&&kt(s,je.bind(void 0,n))),e(n)),t[0])}me(qe,"createSubRoot");function jt(e,...t){return qe(n=>(e(n),n),...t)}me(jt,"createDisposable");function Xe(e){let t=0,n,s;return()=>(s||De(r=>{n=e(r),s=r}),t++,Ue()&&je(()=>{t--,queueMicrotask(()=>{t||!s||(s(),s=void 0,n=void 0)})}),n)}me(Xe,"createSharedRoot");function Ut(e,t={}){const[n,s]=pe({...St,...t.initialValue}),r=i=>{_t(i,s,t),Ct(i,s.bind(void 0,"isInside"),t)};return typeof e!="function"?r(e):he(()=>r(e())),n}const Ft=Xe(Ut.bind(void 0,void 0,void 0));function Bt(e,t,n={}){const s={...At,...n.initialValue},r=c=>{const{x:f,y:u}=t();return Lt(f,u,c)},i=typeof e=="function"?()=>{const c=e();return c?r(c):s}:r.bind(void 0,e),[l,o]=pe(s);return Qe(()=>o(i())),typeof e=="function"&&Ze(()=>o(i())),l}var Vt=Object.defineProperty,Y=(e,t)=>Vt(e,"name",{value:t,configurable:!0});function Ye(e){const[t,n]=I(!1);let s=0;const r=Y(o=>{s=requestAnimationFrame(r),e(o)},"loop"),i=Y(()=>{t()||(n(!0),s=requestAnimationFrame(r))},"start"),l=Y(()=>{n(!1),cancelAnimationFrame(s)},"stop");return ne(l),[t,i,l]}Y(Ye,"createRAF");function qt(e,t){const n=typeof t=="function"?F(()=>Math.floor(1e3/t())):(()=>{const l=Math.floor(1e3/t);return()=>l})();let s=0,r=0,i=0;return l=>{s=l-r,Math.ceil(s+i)>=n()&&(r=l,i=Math.max(s-n(),0),e(l))}}Y(qt,"targetFPS");const G=(e,t,n)=>(1-n)*e+n*t;const Xt=de("<p>: </p>"),Ae=e=>X(ot,{get each(){return Object.keys(e.record)},children:t=>(()=>{const n=Xt.cloneNode(!0),s=n.firstChild;return R(n,t,s),R(n,()=>{const r=ee(e.record[t]);return typeof r=="number"?parseInt(r):String(r)},null),n})()}),Yt=de('<div class="fixed z-10 top-25vh left-25vw w-50vw h-50vh bg-gray-300 bg-opacity-15 backdrop-filter backdrop-blur border-1 border-gray-400 border-opacity-40 rounded-3xl overflow-hidden"><div class="w-24 h-24 rounded-full bg-amber-500 bg-opacity-80 pointer-events-none"></div></div>'),Wt=de('<div class="box-border w-full h-screen overflow-hidden bg-indigo-800 text-white"><div class="w-36 h-36 bg-violet-700 rounded-full filter pointer-events-none"></div><div class="fixed z-20 top-25vh left-25vw p-6 py-4 rounded-2xl rounded-lt bg-white bg-opacity-10 border-1 border-white border-opacity-20 pointer-events-none text-opacity-50 text-white transition-opacity"></div><div class="fixed top-6 left-6 caption text-opacity-60 select-none text-white"></div><button class="fixed top-6 right-6 bg-gray-300 bg-opacity-25 rounded-lg text-gray-300 font-medium p-2 border-none opacity-80 hover:opacity-100 cursor-pointer">Toggle Container</button></div>'),Gt=()=>{const[e,t]=I(!0),[n,s]=I(),r=Ft(),i=Bt(n,()=>r),l=F(()=>Se(i.x,0,i.width)),o=F(()=>Se(i.y,0,i.height)),[c,f]=I({x:0,y:0,elX:0,elY:0}),[,u]=Ye(()=>{f(d=>({x:G(d.x,r.x,.1),y:G(d.y,r.y,.1),elX:G(d.elX,i.x,.2),elY:G(d.elY,i.y,.2)}))});return u(),(()=>{const d=Wt.cloneNode(!0),a=d.firstChild,y=a.nextSibling,A=y.nextSibling,O=A.nextSibling;return a.style.setProperty("transition","opacity 500ms, filter 300ms"),R(d,X(lt,{get when(){return e()},get children(){const h=Yt.cloneNode(!0),C=h.firstChild;return at(s,h),U(()=>C.style.setProperty("transform",`translate(${c().elX-54}px, ${c().elY-54}px)`)),h}}),y),R(y,X(Ae,{get record(){return{x:l(),y:o()}}})),R(A,X(Ae,{record:r})),O.$$click=()=>t(h=>!h),U(h=>{const C=!r.isInside,m=!r.isInside,x=`translate(${c().x-81}px, ${c().y-81}px)`,S=`translate(${l()}px, ${o()}px)`,L=i.isInside?1:0;return C!==h._v$&&a.classList.toggle("opacity-0",h._v$=C),m!==h._v$2&&a.classList.toggle("blur-xl",h._v$2=m),x!==h._v$3&&a.style.setProperty("transform",h._v$3=x),S!==h._v$4&&y.style.setProperty("transform",h._v$4=S),L!==h._v$5&&y.style.setProperty("opacity",h._v$5=L),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),d})()};ut(()=>X(Gt,{}),document.getElementById("root"));ft(["click"]);