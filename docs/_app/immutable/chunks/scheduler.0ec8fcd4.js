function N(){}const $=t=>t;function q(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function tt(){return Object.create(null)}function M(t){t.forEach(L)}function T(t){return typeof t=="function"}function et(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function nt(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function rt(t){return Object.keys(t).length===0}function A(t,...e){if(t==null){for(const r of e)r(void 0);return N}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function it(t){let e;return A(t,n=>e=n)(),e}function ct(t,e,n){t.$$.on_destroy.push(A(e,n))}function st(t,e,n,r){if(t){const i=C(t,e,n,r);return t[0](i)}}function C(t,e,n,r){return t[1]&&r?q(n.ctx.slice(),t[1](r(e))):n.ctx}function lt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],c=Math.max(e.dirty.length,i.length);for(let l=0;l<c;l+=1)o[l]=e.dirty[l]|i[l];return o}return e.dirty|i}return e.dirty}function ot(t,e,n,r,i,o){if(i){const c=C(e,n,r,o);t.p(c,i)}}function ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function at(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ft(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function _t(t){const e={};for(const n in t)e[n]=!0;return e}function dt(t){return t&&T(t.destroy)?t.destroy:N}function ht(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let y=!1;function mt(){y=!0}function pt(){y=!1}function B(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function F(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(i>0&&e[n[i]].claim_order<=u?i+1:B(1,i,P=>e[n[P]].claim_order,u))-1;r[s]=n[a]+1;const w=a+1;n[w]=s,i=Math.max(w,i)}const o=[],c=[];let l=e.length-1;for(let s=n[i]+1;s!=0;s=r[s-1]){for(o.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);o.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<o.length&&c[s].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[s],a)}}function H(t,e){t.appendChild(e)}function R(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=j("style");return e.textContent="/* empty */",z(R(t),e),e.sheet}function z(t,e){return H(t.head||t,e),e.sheet}function I(t,e){if(y){for(F(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function bt(t,e,n){y&&!n?I(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function gt(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function j(t){return document.createElement(t)}function W(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function vt(){return v(" ")}function wt(){return v("")}function kt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function G(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const J=["width","height"];function Et(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&J.indexOf(r)===-1?t[r]=e[r]:G(t,r,e[r])}function Nt(t){return t.dataset.svelteH}function At(t){return Array.from(t.childNodes)}function K(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,e,n,r,i=!1){K(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,i||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,i?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function O(t,e,n,r){return S(t,i=>i.nodeName===e,i=>{const o=[];for(let c=0;c<i.attributes.length;c++){const l=i.attributes[c];n[l.name]||o.push(l.name)}o.forEach(c=>i.removeAttribute(c))},()=>r(e))}function Ct(t,e,n){return O(t,e,n,j)}function jt(t,e,n){return O(t,e,n,W)}function Q(t,e){return S(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>v(e),!0)}function St(t){return Q(t," ")}function Ot(t,e){e=""+e,t.data!==e&&(t.data=e)}function Dt(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Pt(t,e,n){t.classList.toggle(e,!!n)}function U(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function qt(t,e){return new t(e)}let p;function b(t){p=t}function h(){if(!p)throw new Error("Function called outside component initialization");return p}function Lt(t){h().$$.on_mount.push(t)}function Mt(t){h().$$.after_update.push(t)}function Tt(){const t=h();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const o=U(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Bt(t,e){return h().$$.context.set(t,e),e}function Ft(t){return h().$$.context.get(t)}function Ht(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const d=[],k=[];let _=[];const E=[],D=Promise.resolve();let x=!1;function V(){x||(x=!0,D.then(Y))}function Rt(){return V(),D}function X(t){_.push(t)}const g=new Set;let f=0;function Y(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const e=d[f];f++,b(e),Z(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;k.length;)k.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(d.length);for(;E.length;)E.pop()();x=!1,g.clear(),b(t)}function Z(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function zt(t){const e=[],n=[];_.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),_=e}export{Y as $,I as A,ot as B,ut as C,lt as D,_t as E,q as F,at as G,kt as H,Ht as I,ct as J,Tt as K,dt as L,X as M,M as N,xt as O,Pt as P,it as Q,ft as R,W as S,jt as T,Et as U,nt as V,T as W,R as X,yt as Y,U as Z,tt as _,vt as a,rt as a0,zt as a1,p as a2,b as a3,L as a4,d as a5,V as a6,mt as a7,pt as a8,Mt as b,St as c,gt as d,wt as e,j as f,Ct as g,At as h,bt as i,G as j,Dt as k,v as l,Q as m,Ot as n,Lt as o,k as p,qt as q,Nt as r,et as s,Rt as t,N as u,Ft as v,Bt as w,$ as x,ht as y,st as z};
