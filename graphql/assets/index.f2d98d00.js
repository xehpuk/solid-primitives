(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();const w={},we=(e,n)=>e===n,_e=Symbol("solid-track"),X={equals:we};let Ce=Ie;const V=1,Q=2,Ee={owned:null,cleanups:null,context:null,owner:null},te={};var I=null;let L=null,T=null,b=null,k=null,le=0;function Y(e,n){const t=T,i=I,s=e.length===0,l=s?Ee:{owned:null,cleanups:null,context:null,owner:n||i},r=s?e:()=>e(()=>j(()=>re(l)));I=l,T=null;try{return P(r,!0)}finally{T=t,I=i}}function B(e,n){n=n?Object.assign({},X,n):X;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},i=s=>(typeof s=="function"&&(s=s(t.value)),Ne(t,s));return[Te.bind(t),i]}function ue(e,n,t){const i=oe(e,n,!0,V);q(i)}function H(e,n,t){const i=oe(e,n,!1,V);q(i)}function W(e,n,t){t=t?Object.assign({},X,t):X;const i=oe(e,n,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=t.equals||void 0,q(i),Te.bind(i)}function Ve(e,n,t){let i,s,l;arguments.length===2&&typeof n=="object"||arguments.length===1?(i=!0,s=e,l=n||{}):(i=e,s=n,l=t||{});let r=null,o=te,f=null,u=!1,c="initialValue"in l,h=typeof i=="function"&&W(i);const p=new Set,[m,A]=(l.storage||B)(l.initialValue),[x,C]=B(void 0),[N,S]=B(void 0,{equals:!1}),[y,E]=B(c?"ready":"unresolved");if(w.context){f=`${w.context.id}${w.context.count++}`;let g;l.ssrLoadFrom==="initial"?o=l.initialValue:w.load&&(g=w.load(f))&&(o=g[0])}function D(g,O,v,M){return r===g&&(r=null,c=!0,(g===o||O===o)&&l.onHydrated&&queueMicrotask(()=>l.onHydrated(M,{value:O})),o=te,$(O,v)),O}function $(g,O){P(()=>{O||A(()=>g),E(O?"errored":"ready"),C(O);for(const v of p.keys())v.decrement();p.clear()},!1)}function R(){const g=Le,O=m(),v=x();if(v&&!r)throw v;return T&&!T.user&&g&&ue(()=>{N(),r&&(g.resolved||p.has(g)||(g.increment(),p.add(g)))}),O}function ne(g=!0){if(g!==!1&&u)return;u=!1;const O=h?h():i;if(O==null||O===!1){D(r,j(m));return}const v=o!==te?o:j(()=>s(O,{value:m(),refetching:g}));return typeof v!="object"||!(v&&"then"in v)?(D(r,v),v):(r=v,u=!0,queueMicrotask(()=>u=!1),P(()=>{E(c?"refreshing":"pending"),S()},!1),v.then(M=>D(v,M,void 0,O),M=>D(v,void 0,Se(M))))}return Object.defineProperties(R,{state:{get:()=>y()},error:{get:()=>x()},loading:{get(){const g=y();return g==="pending"||g==="refreshing"}},latest:{get(){if(!c)return R();const g=x();if(g&&!r)throw g;return m()}}}),h?ue(()=>ne(!1)):ne(!1),[R,{refetch:ne,mutate:A}]}function j(e){let n,t=T;return T=null,n=e(),T=t,n}function Fe(e){return I===null||(I.cleanups===null?I.cleanups=[e]:I.cleanups.push(e)),e}let Le;function Te(){const e=L;if(this.sources&&(this.state||e))if(this.state===V||e)q(this);else{const n=b;b=null,P(()=>Z(this),!1),b=n}if(T){const n=this.observers?this.observers.length:0;T.sources?(T.sources.push(this),T.sourceSlots.push(n)):(T.sources=[this],T.sourceSlots=[n]),this.observers?(this.observers.push(T),this.observerSlots.push(T.sources.length-1)):(this.observers=[T],this.observerSlots=[T.sources.length-1])}return this.value}function Ne(e,n,t){let i=e.value;return(!e.comparator||!e.comparator(i,n))&&(e.value=n,e.observers&&e.observers.length&&P(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s],r=L&&L.running;r&&L.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?b.push(l):k.push(l),l.observers&&be(l)),r||(l.state=V)}if(b.length>1e6)throw b=[],new Error},!1)),n}function q(e){if(!e.fn)return;re(e);const n=I,t=T,i=le;T=I=e,ke(e,e.value,i),T=t,I=n}function ke(e,n,t){let i;try{i=e.fn(n)}catch(s){e.pure&&(e.state=V),De(s)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Ne(e,i):e.value=i,e.updatedAt=t)}function oe(e,n,t,i=V,s){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:I,context:null,pure:t};return I===null||I!==Ee&&(I.owned?I.owned.push(l):I.owned=[l]),l}function ve(e){const n=L;if(e.state===0||n)return;if(e.state===Q||n)return Z(e);if(e.suspense&&j(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<le);)(e.state||n)&&t.push(e);for(let i=t.length-1;i>=0;i--)if(e=t[i],e.state===V||n)q(e);else if(e.state===Q||n){const s=b;b=null,P(()=>Z(e,t[0]),!1),b=s}}function P(e,n){if(b)return e();let t=!1;n||(b=[]),k?t=!0:k=[],le++;try{const i=e();return je(t),i}catch(i){b||(k=null),De(i)}}function je(e){if(b&&(Ie(b),b=null),e)return;const n=k;k=null,n.length&&P(()=>Ce(n),!1)}function Ie(e){for(let n=0;n<e.length;n++)ve(e[n])}function Z(e,n){const t=L;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===V||t?s!==n&&ve(s):(s.state===Q||t)&&Z(s,n))}}function be(e){const n=L;for(let t=0;t<e.observers.length;t+=1){const i=e.observers[t];(!i.state||n)&&(i.state=Q,i.pure?b.push(i):k.push(i),i.observers&&be(i))}}function re(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),s=t.observers;if(s&&s.length){const l=s.pop(),r=t.observerSlots.pop();i<s.length&&(l.sourceSlots[r]=i,s[i]=l,t.observerSlots[i]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)re(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function Se(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function De(e){throw e=Se(e),e}const Pe=Symbol("fallback");function ce(e){for(let n=0;n<e.length;n++)e[n]()}function $e(e,n,t={}){let i=[],s=[],l=[],r=0,o=n.length>1?[]:null;return Fe(()=>ce(l)),()=>{let f=e()||[],u,c;return f[_e],j(()=>{let p=f.length,m,A,x,C,N,S,y,E,D;if(p===0)r!==0&&(ce(l),l=[],i=[],s=[],r=0,o&&(o=[])),t.fallback&&(i=[Pe],s[0]=Y($=>(l[0]=$,t.fallback())),r=1);else if(r===0){for(s=new Array(p),c=0;c<p;c++)i[c]=f[c],s[c]=Y(h);r=p}else{for(x=new Array(p),C=new Array(p),o&&(N=new Array(p)),S=0,y=Math.min(r,p);S<y&&i[S]===f[S];S++);for(y=r-1,E=p-1;y>=S&&E>=S&&i[y]===f[E];y--,E--)x[E]=s[y],C[E]=l[y],o&&(N[E]=o[y]);for(m=new Map,A=new Array(E+1),c=E;c>=S;c--)D=f[c],u=m.get(D),A[c]=u===void 0?-1:u,m.set(D,c);for(u=S;u<=y;u++)D=i[u],c=m.get(D),c!==void 0&&c!==-1?(x[c]=s[u],C[c]=l[u],o&&(N[c]=o[u]),c=A[c],m.set(D,c)):l[u]();for(c=S;c<p;c++)c in x?(s[c]=x[c],l[c]=C[c],o&&(o[c]=N[c],o[c](c))):s[c]=Y(h);s=s.slice(0,r=p),i=f.slice(0)}return s});function h(p){if(l[c]=p,o){const[m,A]=B(c);return o[c]=A,n(f[c],m)}return n(f[c])}}}function G(e,n){return j(()=>e(n||{}))}function Re(e){const n="fallback"in e&&{fallback:()=>e.fallback};return W($e(()=>e.each,e.children,n||void 0))}function ae(e){let n=!1;const t=e.keyed,i=W(()=>e.when,void 0,{equals:(s,l)=>n?s===l:!s==!l});return W(()=>{const s=i();if(s){const l=e.children,r=typeof l=="function"&&l.length>0;return n=t||r,r?j(()=>l(s)):l}return e.fallback})}function Ue(e,n,t){let i=t.length,s=n.length,l=i,r=0,o=0,f=n[s-1].nextSibling,u=null;for(;r<s||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[s-1]===t[l-1];)s--,l--;if(s===r){const c=l<i?o?t[o-1].nextSibling:t[l-o]:f;for(;o<l;)e.insertBefore(t[o++],c)}else if(l===o)for(;r<s;)(!u||!u.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[s-1]){const c=n[--s].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],c),n[s]=t[l]}else{if(!u){u=new Map;let h=o;for(;h<l;)u.set(t[h],h++)}const c=u.get(n[r]);if(c!=null)if(o<c&&c<l){let h=r,p=1,m;for(;++h<s&&h<l&&!((m=u.get(n[h]))==null||m!==c+p);)p++;if(p>c-o){const A=n[r];for(;o<c;)e.insertBefore(t[o++],A)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const fe="_$DX_DELEGATE";function Be(e,n,t,i={}){let s;return Y(l=>{s=l,n===document?e():F(n,e(),n.firstChild?null:void 0,t)},i.owner),()=>{s(),n.textContent=""}}function K(e,n,t){const i=document.createElement("template");i.innerHTML=e;let s=i.content.firstChild;return t&&(s=s.firstChild),s}function Me(e,n=window.document){const t=n[fe]||(n[fe]=new Set);for(let i=0,s=e.length;i<s;i++){const l=e[i];t.has(l)||(t.add(l),n.addEventListener(l,qe))}}function F(e,n,t,i){if(t!==void 0&&!i&&(i=[]),typeof n!="function")return z(e,n,i,t);H(s=>z(e,n(),s,t),i)}function qe(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),w.registry&&!w.done&&(w.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));t!==null;){const i=t[n];if(i&&!t.disabled){const s=t[`${n}Data`];if(s!==void 0?i.call(t,s,e):i.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function z(e,n,t,i,s){for(w.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=i!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(w.context)return t;if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=U(e,t,i,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(w.context)return t;t=U(e,t,i)}else{if(l==="function")return H(()=>{let o=n();for(;typeof o=="function";)o=o();t=z(e,o,t,i)}),()=>t;if(Array.isArray(n)){const o=[],f=t&&Array.isArray(t);if(ie(o,n,t,s))return H(()=>t=z(e,o,t,i,!0)),()=>t;if(w.context){if(!o.length)return t;for(let u=0;u<o.length;u++)if(o[u].parentNode)return t=o}if(o.length===0){if(t=U(e,t,i),r)return t}else f?t.length===0?de(e,o,i):Ue(e,t,o):(t&&U(e),de(e,o));t=o}else if(n instanceof Node){if(w.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=U(e,t,i,n);U(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function ie(e,n,t,i){let s=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],f=t&&t[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=ie(e,o,f)||s;else if(typeof o=="function")if(i){for(;typeof o=="function";)o=o();s=ie(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||s}else e.push(o),s=!0;else{const u=String(o);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return s}function de(e,n,t=null){for(let i=0,s=n.length;i<s;i++)e.insertBefore(n[i],t)}function U(e,n,t,i){if(t===void 0)return e.textContent="";const s=i||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(s!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(s,o):e.insertBefore(s,t):f&&o.remove()}else l=!0}}else e.insertBefore(s,t);return[s]}function Ye(e,n){if(!Boolean(e))throw new Error(n)}const Oe={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},Ge=new Set(Object.keys(Oe));function pe(e){const n=e?.kind;return typeof n=="string"&&Ge.has(n)}var he;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(he||(he={}));var se;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(se||(se={}));function me(e){return e===9||e===32}function Je(e,n){const t=e.replace(/"""/g,'\\"""'),i=t.split(/\r\n|[\n\r]/g),s=i.length===1,l=i.length>1&&i.slice(1).every(m=>m.length===0||me(m.charCodeAt(0))),r=t.endsWith('\\"""'),o=e.endsWith('"')&&!r,f=e.endsWith("\\"),u=o||f,c=!(n!=null&&n.minimize)&&(!s||e.length>70||u||l||r);let h="";const p=s&&me(e.charCodeAt(0));return(c&&!p||l)&&(h+=`
`),h+=t,(c||u)&&(h+=`
`),'"""'+h+'"""'}const Xe=10,Ae=2;function Qe(e){return ee(e,[])}function ee(e,n){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return He(e,n);default:return String(e)}}function He(e,n){if(e===null)return"null";if(n.includes(e))return"[Circular]";const t=[...n,e];if(We(e)){const i=e.toJSON();if(i!==e)return typeof i=="string"?i:ee(i,t)}else if(Array.isArray(e))return ze(e,t);return Ze(e,t)}function We(e){return typeof e.toJSON=="function"}function Ze(e,n){const t=Object.entries(e);return t.length===0?"{}":n.length>Ae?"["+Ke(e)+"]":"{ "+t.map(([s,l])=>s+": "+ee(l,n)).join(", ")+" }"}function ze(e,n){if(e.length===0)return"[]";if(n.length>Ae)return"[Array]";const t=Math.min(Xe,e.length),i=e.length-t,s=[];for(let l=0;l<t;++l)s.push(ee(e[l],n));return i===1?s.push("... 1 more item"):i>1&&s.push(`... ${i} more items`),"["+s.join(", ")+"]"}function Ke(e){const n=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof e.constructor=="function"){const t=e.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}function en(e){return`"${e.replace(nn,tn)}"`}const nn=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function tn(e){return sn[e.charCodeAt(0)]}const sn=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],ln=Object.freeze({});function on(e,n,t=Oe){const i=new Map;for(const N of Object.values(se))i.set(N,rn(n,N));let s,l=Array.isArray(e),r=[e],o=-1,f=[],u=e,c,h;const p=[],m=[];do{o++;const N=o===r.length,S=N&&f.length!==0;if(N){if(c=m.length===0?void 0:p[p.length-1],u=h,h=m.pop(),S)if(l){u=u.slice();let E=0;for(const[D,$]of f){const R=D-E;$===null?(u.splice(R,1),E++):u[R]=$}}else{u=Object.defineProperties({},Object.getOwnPropertyDescriptors(u));for(const[E,D]of f)u[E]=D}o=s.index,r=s.keys,f=s.edits,l=s.inArray,s=s.prev}else if(h){if(c=l?o:r[o],u=h[c],u==null)continue;p.push(c)}let y;if(!Array.isArray(u)){var A,x;pe(u)||Ye(!1,`Invalid AST Node: ${Qe(u)}.`);const E=N?(A=i.get(u.kind))===null||A===void 0?void 0:A.leave:(x=i.get(u.kind))===null||x===void 0?void 0:x.enter;if(y=E?.call(n,u,c,h,p,m),y===ln)break;if(y===!1){if(!N){p.pop();continue}}else if(y!==void 0&&(f.push([c,y]),!N))if(pe(y))u=y;else{p.pop();continue}}if(y===void 0&&S&&f.push([c,u]),N)p.pop();else{var C;s={inArray:l,index:o,keys:r,edits:f,prev:s},l=Array.isArray(u),r=l?u:(C=t[u.kind])!==null&&C!==void 0?C:[],o=-1,f=[],h&&m.push(h),h=u}}while(s!==void 0);return f.length!==0?f[f.length-1][1]:e}function rn(e,n){const t=e[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:e.enter,leave:e.leave}}function un(e){return on(e,an)}const cn=80,an={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>a(e.definitions,`

`)},OperationDefinition:{leave(e){const n=d("(",a(e.variableDefinitions,", "),")"),t=a([e.operation,a([e.name,n]),a(e.directives," ")]," ");return(t==="query"?"":t+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:n,defaultValue:t,directives:i})=>e+": "+n+d(" = ",t)+d(" ",a(i," "))},SelectionSet:{leave:({selections:e})=>_(e)},Field:{leave({alias:e,name:n,arguments:t,directives:i,selectionSet:s}){const l=d("",e,": ")+n;let r=l+d("(",a(t,", "),")");return r.length>cn&&(r=l+d(`(
`,J(a(t,`
`)),`
)`)),a([r,a(i," "),s]," ")}},Argument:{leave:({name:e,value:n})=>e+": "+n},FragmentSpread:{leave:({name:e,directives:n})=>"..."+e+d(" ",a(n," "))},InlineFragment:{leave:({typeCondition:e,directives:n,selectionSet:t})=>a(["...",d("on ",e),a(n," "),t]," ")},FragmentDefinition:{leave:({name:e,typeCondition:n,variableDefinitions:t,directives:i,selectionSet:s})=>`fragment ${e}${d("(",a(t,", "),")")} on ${n} ${d("",a(i," ")," ")}`+s},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:n})=>n?Je(e):en(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+a(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+a(e,", ")+"}"},ObjectField:{leave:({name:e,value:n})=>e+": "+n},Directive:{leave:({name:e,arguments:n})=>"@"+e+d("(",a(n,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:n,operationTypes:t})=>d("",e,`
`)+a(["schema",a(n," "),_(t)]," ")},OperationTypeDefinition:{leave:({operation:e,type:n})=>e+": "+n},ScalarTypeDefinition:{leave:({description:e,name:n,directives:t})=>d("",e,`
`)+a(["scalar",n,a(t," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:n,interfaces:t,directives:i,fields:s})=>d("",e,`
`)+a(["type",n,d("implements ",a(t," & ")),a(i," "),_(s)]," ")},FieldDefinition:{leave:({description:e,name:n,arguments:t,type:i,directives:s})=>d("",e,`
`)+n+(ye(t)?d(`(
`,J(a(t,`
`)),`
)`):d("(",a(t,", "),")"))+": "+i+d(" ",a(s," "))},InputValueDefinition:{leave:({description:e,name:n,type:t,defaultValue:i,directives:s})=>d("",e,`
`)+a([n+": "+t,d("= ",i),a(s," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:n,interfaces:t,directives:i,fields:s})=>d("",e,`
`)+a(["interface",n,d("implements ",a(t," & ")),a(i," "),_(s)]," ")},UnionTypeDefinition:{leave:({description:e,name:n,directives:t,types:i})=>d("",e,`
`)+a(["union",n,a(t," "),d("= ",a(i," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:n,directives:t,values:i})=>d("",e,`
`)+a(["enum",n,a(t," "),_(i)]," ")},EnumValueDefinition:{leave:({description:e,name:n,directives:t})=>d("",e,`
`)+a([n,a(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:n,directives:t,fields:i})=>d("",e,`
`)+a(["input",n,a(t," "),_(i)]," ")},DirectiveDefinition:{leave:({description:e,name:n,arguments:t,repeatable:i,locations:s})=>d("",e,`
`)+"directive @"+n+(ye(t)?d(`(
`,J(a(t,`
`)),`
)`):d("(",a(t,", "),")"))+(i?" repeatable":"")+" on "+a(s," | ")},SchemaExtension:{leave:({directives:e,operationTypes:n})=>a(["extend schema",a(e," "),_(n)]," ")},ScalarTypeExtension:{leave:({name:e,directives:n})=>a(["extend scalar",e,a(n," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:n,directives:t,fields:i})=>a(["extend type",e,d("implements ",a(n," & ")),a(t," "),_(i)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:n,directives:t,fields:i})=>a(["extend interface",e,d("implements ",a(n," & ")),a(t," "),_(i)]," ")},UnionTypeExtension:{leave:({name:e,directives:n,types:t})=>a(["extend union",e,a(n," "),d("= ",a(t," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:n,values:t})=>a(["extend enum",e,a(n," "),_(t)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:n,fields:t})=>a(["extend input",e,a(n," "),_(t)]," ")}};function a(e,n=""){var t;return(t=e?.filter(i=>i).join(n))!==null&&t!==void 0?t:""}function _(e){return d(`{
`,J(a(e,`
`)),`
}`)}function d(e,n,t=""){return n!=null&&n!==""?e+n+t:""}function J(e){return d("  ",e.replace(/\n/g,`
  `))}function ye(e){var n;return(n=e?.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}var ge=e=>typeof e=="function"&&!e.length?e():e;const fn=(e,n)=>(t,i={},s)=>Ve(()=>ge(i),l=>{const r=typeof l=="boolean"?{}:l;return dn(ge(e),t,{...n,variables:r})},{initialValue:s});async function dn(e,n,t={}){const{fetcher:i=fetch,variables:s={},headers:l={},method:r="POST"}=t,o=typeof n=="string"?n:un(n);return i(e,{...t,method:r,body:JSON.stringify({query:o,variables:s}),headers:{"content-type":"application/json",...l}}).then(f=>f.json()).then(({data:f,errors:u})=>{if(u)throw u;return f})}const xe=e=>e.join(" ").replace(/#.+\r?\n|\r/g,"").replace(/\r?\n|\r/g,"").replace(/\s{2,}/g," ").trim(),pn={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CountryQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"code"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"country"},arguments:[{kind:"Argument",name:{kind:"Name",value:"code"},value:{kind:"Variable",name:{kind:"Name",value:"code"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]};const hn=K("<p></p>"),mn=K("<ul></ul>"),yn=K('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><h3>Get country by code</h3><input><h4></h4><h3>Countries:</h3></div>'),gn=K("<li> - </li>");xe`
  query CountryQuery($code: ID!) {
    country(code: $code) {
      name
    }
  }
`;const En=()=>{const[e,n]=B("BR"),t=fn("https://countries.trevorblades.com/",{credentials:"same-origin"}),[i]=t(xe`
      query CountriesQuery {
        countries {
          name
          code
        }
      }
    `),[s]=t(pn,()=>({code:e()}),{country:{name:"loading..."}});return(()=>{const l=yn.cloneNode(!0),r=l.firstChild,o=r.nextSibling,f=o.nextSibling;return f.nextSibling,o.$$input=u=>n(u.currentTarget.value.toUpperCase()),F(f,G(ae,{get when(){return s()?.country?.name},fallback:"not found",get children(){const u=hn.cloneNode(!0);return F(u,()=>s().country.name),u}})),F(l,G(ae,{get when(){return i()},get children(){const u=mn.cloneNode(!0);return F(u,G(Re,{get each(){return i().countries},children:c=>(()=>{const h=gn.cloneNode(!0),p=h.firstChild;return F(h,()=>c.code,p),F(h,()=>c.name,null),h})()})),u}}),null),H(()=>o.value=e()),l})()};Be(()=>G(En,{}),document.getElementById("root"));Me(["input"]);