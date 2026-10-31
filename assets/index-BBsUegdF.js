var vh=Object.defineProperty;var Sh=(E,r,u)=>r in E?vh(E,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):E[r]=u;var O=(E,r,u)=>Sh(E,typeof r!="symbol"?r+"":r,u);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function u(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function i(c){if(c.ep)return;c.ep=!0;const f=u(c);fetch(c.href,f)}})();function Id(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var To={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function bh(){if(zd)return Ll;zd=1;var E=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(i,c,f){var p=null;if(f!==void 0&&(p=""+f),c.key!==void 0&&(p=""+c.key),"key"in c){f={};for(var d in c)d!=="key"&&(f[d]=c[d])}else f=c;return c=f.ref,{$$typeof:E,type:i,key:p,ref:c!==void 0?c:null,props:f}}return Ll.Fragment=r,Ll.jsx=u,Ll.jsxs=u,Ll}var Ud;function Eh(){return Ud||(Ud=1,To.exports=bh()),To.exports}var q=Eh(),Ao={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function Nh(){if(qd)return ne;qd=1;var E=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),z=Symbol.iterator;function Y(v){return v===null||typeof v!="object"?null:(v=z&&v[z]||v["@@iterator"],typeof v=="function"?v:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},te=Object.assign,L={};function I(v,M,F){this.props=v,this.context=M,this.refs=L,this.updater=F||U}I.prototype.isReactComponent={},I.prototype.setState=function(v,M){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,M,"setState")},I.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function P(){}P.prototype=I.prototype;function ee(v,M,F){this.props=v,this.context=M,this.refs=L,this.updater=F||U}var J=ee.prototype=new P;J.constructor=ee,te(J,I.prototype),J.isPureReactComponent=!0;var he=Array.isArray;function Te(){}var le={H:null,A:null,T:null,S:null},Ke=Object.prototype.hasOwnProperty;function Qe(v,M,F){var $=F.ref;return{$$typeof:E,type:v,key:M,ref:$!==void 0?$:null,props:F}}function $t(v,M){return Qe(v.type,M,v.props)}function it(v){return typeof v=="object"&&v!==null&&v.$$typeof===E}function He(v){var M={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(F){return M[F]})}var Ht=/\/+/g;function Nt(v,M){return typeof v=="object"&&v!==null&&v.key!=null?He(""+v.key):M.toString(36)}function nt(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(Te,Te):(v.status="pending",v.then(function(M){v.status==="pending"&&(v.status="fulfilled",v.value=M)},function(M){v.status==="pending"&&(v.status="rejected",v.reason=M)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function A(v,M,F,$,ae){var re=typeof v;(re==="undefined"||re==="boolean")&&(v=null);var H=!1;if(v===null)H=!0;else switch(re){case"bigint":case"string":case"number":H=!0;break;case"object":switch(v.$$typeof){case E:case r:H=!0;break;case b:return H=v._init,A(H(v._payload),M,F,$,ae)}}if(H)return ae=ae(v),H=$===""?"."+Nt(v,0):$,he(ae)?(F="",H!=null&&(F=H.replace(Ht,"$&/")+"/"),A(ae,M,F,"",function(xe){return xe})):ae!=null&&(it(ae)&&(ae=$t(ae,F+(ae.key==null||v&&v.key===ae.key?"":(""+ae.key).replace(Ht,"$&/")+"/")+H)),M.push(ae)),1;H=0;var V=$===""?".":$+":";if(he(v))for(var Q=0;Q<v.length;Q++)$=v[Q],re=V+Nt($,Q),H+=A($,M,F,re,ae);else if(Q=Y(v),typeof Q=="function")for(v=Q.call(v),Q=0;!($=v.next()).done;)$=$.value,re=V+Nt($,Q++),H+=A($,M,F,re,ae);else if(re==="object"){if(typeof v.then=="function")return A(nt(v),M,F,$,ae);throw M=String(v),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return H}function j(v,M,F){if(v==null)return v;var $=[],ae=0;return A(v,$,"","",function(re){return M.call(F,re,ae++)}),$}function B(v){if(v._status===-1){var M=v._result;M=M(),M.then(function(F){(v._status===0||v._status===-1)&&(v._status=1,v._result=F)},function(F){(v._status===0||v._status===-1)&&(v._status=2,v._result=F)}),v._status===-1&&(v._status=0,v._result=M)}if(v._status===1)return v._result.default;throw v._result}var Se=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},be={map:j,forEach:function(v,M,F){j(v,function(){M.apply(this,arguments)},F)},count:function(v){var M=0;return j(v,function(){M++}),M},toArray:function(v){return j(v,function(M){return M})||[]},only:function(v){if(!it(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return ne.Activity=w,ne.Children=be,ne.Component=I,ne.Fragment=u,ne.Profiler=c,ne.PureComponent=ee,ne.StrictMode=i,ne.Suspense=y,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,ne.__COMPILER_RUNTIME={__proto__:null,c:function(v){return le.H.useMemoCache(v)}},ne.cache=function(v){return function(){return v.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(v,M,F){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var $=te({},v.props),ae=v.key;if(M!=null)for(re in M.key!==void 0&&(ae=""+M.key),M)!Ke.call(M,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&M.ref===void 0||($[re]=M[re]);var re=arguments.length-2;if(re===1)$.children=F;else if(1<re){for(var H=Array(re),V=0;V<re;V++)H[V]=arguments[V+2];$.children=H}return Qe(v.type,ae,$)},ne.createContext=function(v){return v={$$typeof:p,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:f,_context:v},v},ne.createElement=function(v,M,F){var $,ae={},re=null;if(M!=null)for($ in M.key!==void 0&&(re=""+M.key),M)Ke.call(M,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ae[$]=M[$]);var H=arguments.length-2;if(H===1)ae.children=F;else if(1<H){for(var V=Array(H),Q=0;Q<H;Q++)V[Q]=arguments[Q+2];ae.children=V}if(v&&v.defaultProps)for($ in H=v.defaultProps,H)ae[$]===void 0&&(ae[$]=H[$]);return Qe(v,re,ae)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(v){return{$$typeof:d,render:v}},ne.isValidElement=it,ne.lazy=function(v){return{$$typeof:b,_payload:{_status:-1,_result:v},_init:B}},ne.memo=function(v,M){return{$$typeof:h,type:v,compare:M===void 0?null:M}},ne.startTransition=function(v){var M=le.T,F={};le.T=F;try{var $=v(),ae=le.S;ae!==null&&ae(F,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(Te,Se)}catch(re){Se(re)}finally{M!==null&&F.types!==null&&(M.types=F.types),le.T=M}},ne.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},ne.use=function(v){return le.H.use(v)},ne.useActionState=function(v,M,F){return le.H.useActionState(v,M,F)},ne.useCallback=function(v,M){return le.H.useCallback(v,M)},ne.useContext=function(v){return le.H.useContext(v)},ne.useDebugValue=function(){},ne.useDeferredValue=function(v,M){return le.H.useDeferredValue(v,M)},ne.useEffect=function(v,M){return le.H.useEffect(v,M)},ne.useEffectEvent=function(v){return le.H.useEffectEvent(v)},ne.useId=function(){return le.H.useId()},ne.useImperativeHandle=function(v,M,F){return le.H.useImperativeHandle(v,M,F)},ne.useInsertionEffect=function(v,M){return le.H.useInsertionEffect(v,M)},ne.useLayoutEffect=function(v,M){return le.H.useLayoutEffect(v,M)},ne.useMemo=function(v,M){return le.H.useMemo(v,M)},ne.useOptimistic=function(v,M){return le.H.useOptimistic(v,M)},ne.useReducer=function(v,M,F){return le.H.useReducer(v,M,F)},ne.useRef=function(v){return le.H.useRef(v)},ne.useState=function(v){return le.H.useState(v)},ne.useSyncExternalStore=function(v,M,F){return le.H.useSyncExternalStore(v,M,F)},ne.useTransition=function(){return le.H.useTransition()},ne.version="19.2.8",ne}var jd;function Lo(){return jd||(jd=1,Ao.exports=Nh()),Ao.exports}var pe=Lo();const Dh=Id(pe);var xo={exports:{}},zl={},ko={exports:{}},Ro={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function Ch(){return Bd||(Bd=1,(function(E){function r(A,j){var B=A.length;A.push(j);e:for(;0<B;){var Se=B-1>>>1,be=A[Se];if(0<c(be,j))A[Se]=j,A[B]=be,B=Se;else break e}}function u(A){return A.length===0?null:A[0]}function i(A){if(A.length===0)return null;var j=A[0],B=A.pop();if(B!==j){A[0]=B;e:for(var Se=0,be=A.length,v=be>>>1;Se<v;){var M=2*(Se+1)-1,F=A[M],$=M+1,ae=A[$];if(0>c(F,B))$<be&&0>c(ae,F)?(A[Se]=ae,A[$]=B,Se=$):(A[Se]=F,A[M]=B,Se=M);else if($<be&&0>c(ae,B))A[Se]=ae,A[$]=B,Se=$;else break e}}return j}function c(A,j){var B=A.sortIndex-j.sortIndex;return B!==0?B:A.id-j.id}if(E.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;E.unstable_now=function(){return f.now()}}else{var p=Date,d=p.now();E.unstable_now=function(){return p.now()-d}}var y=[],h=[],b=1,w=null,z=3,Y=!1,U=!1,te=!1,L=!1,I=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function J(A){for(var j=u(h);j!==null;){if(j.callback===null)i(h);else if(j.startTime<=A)i(h),j.sortIndex=j.expirationTime,r(y,j);else break;j=u(h)}}function he(A){if(te=!1,J(A),!U)if(u(y)!==null)U=!0,Te||(Te=!0,He());else{var j=u(h);j!==null&&nt(he,j.startTime-A)}}var Te=!1,le=-1,Ke=5,Qe=-1;function $t(){return L?!0:!(E.unstable_now()-Qe<Ke)}function it(){if(L=!1,Te){var A=E.unstable_now();Qe=A;var j=!0;try{e:{U=!1,te&&(te=!1,P(le),le=-1),Y=!0;var B=z;try{t:{for(J(A),w=u(y);w!==null&&!(w.expirationTime>A&&$t());){var Se=w.callback;if(typeof Se=="function"){w.callback=null,z=w.priorityLevel;var be=Se(w.expirationTime<=A);if(A=E.unstable_now(),typeof be=="function"){w.callback=be,J(A),j=!0;break t}w===u(y)&&i(y),J(A)}else i(y);w=u(y)}if(w!==null)j=!0;else{var v=u(h);v!==null&&nt(he,v.startTime-A),j=!1}}break e}finally{w=null,z=B,Y=!1}j=void 0}}finally{j?He():Te=!1}}}var He;if(typeof ee=="function")He=function(){ee(it)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,Nt=Ht.port2;Ht.port1.onmessage=it,He=function(){Nt.postMessage(null)}}else He=function(){I(it,0)};function nt(A,j){le=I(function(){A(E.unstable_now())},j)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(A){A.callback=null},E.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ke=0<A?Math.floor(1e3/A):5},E.unstable_getCurrentPriorityLevel=function(){return z},E.unstable_next=function(A){switch(z){case 1:case 2:case 3:var j=3;break;default:j=z}var B=z;z=j;try{return A()}finally{z=B}},E.unstable_requestPaint=function(){L=!0},E.unstable_runWithPriority=function(A,j){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var B=z;z=A;try{return j()}finally{z=B}},E.unstable_scheduleCallback=function(A,j,B){var Se=E.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Se+B:Se):B=Se,A){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=B+be,A={id:b++,callback:j,priorityLevel:A,startTime:B,expirationTime:be,sortIndex:-1},B>Se?(A.sortIndex=B,r(h,A),u(y)===null&&A===u(h)&&(te?(P(le),le=-1):te=!0,nt(he,B-Se))):(A.sortIndex=be,r(y,A),U||Y||(U=!0,Te||(Te=!0,He()))),A},E.unstable_shouldYield=$t,E.unstable_wrapCallback=function(A){var j=z;return function(){var B=z;z=j;try{return A.apply(this,arguments)}finally{z=B}}}})(Ro)),Ro}var Fd;function wh(){return Fd||(Fd=1,ko.exports=Ch()),ko.exports}var Mo={exports:{}},at={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function Th(){if(Yd)return at;Yd=1;var E=Lo();function r(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)h+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var i={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(y,h,b){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:w==null?null:""+w,children:y,containerInfo:h,implementation:b}}var p=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,at.createPortal=function(y,h){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return f(y,h,null,b)},at.flushSync=function(y){var h=p.T,b=i.p;try{if(p.T=null,i.p=2,y)return y()}finally{p.T=h,i.p=b,i.d.f()}},at.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(y,h))},at.prefetchDNS=function(y){typeof y=="string"&&i.d.D(y)},at.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var b=h.as,w=d(b,h.crossOrigin),z=typeof h.integrity=="string"?h.integrity:void 0,Y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;b==="style"?i.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:w,integrity:z,fetchPriority:Y}):b==="script"&&i.d.X(y,{crossOrigin:w,integrity:z,fetchPriority:Y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},at.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var b=d(h.as,h.crossOrigin);i.d.M(y,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(y)},at.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var b=h.as,w=d(b,h.crossOrigin);i.d.L(y,b,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},at.preloadModule=function(y,h){if(typeof y=="string")if(h){var b=d(h.as,h.crossOrigin);i.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(y)},at.requestFormReset=function(y){i.d.r(y)},at.unstable_batchedUpdates=function(y,h){return y(h)},at.useFormState=function(y,h,b){return p.H.useFormState(y,h,b)},at.useFormStatus=function(){return p.H.useHostTransitionStatus()},at.version="19.2.8",at}var Gd;function Ah(){if(Gd)return Mo.exports;Gd=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(r){console.error(r)}}return E(),Mo.exports=Th(),Mo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d;function xh(){if($d)return zl;$d=1;var E=wh(),r=Lo(),u=Ah();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(i(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(i(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var s=l.alternate;if(s===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===a)return y(l),e;if(s===n)return y(l),t;s=s.sibling}throw Error(i(188))}if(a.return!==n.return)a=l,n=s;else{for(var o=!1,m=l.child;m;){if(m===a){o=!0,a=l,n=s;break}if(m===n){o=!0,n=l,a=s;break}m=m.sibling}if(!o){for(m=s.child;m;){if(m===a){o=!0,a=s,n=l;break}if(m===n){o=!0,n=s,a=l;break}m=m.sibling}if(!o)throw Error(i(189))}}if(a.alternate!==n)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,z=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),Qe=Symbol.for("react.activity"),$t=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function He(e){return e===null||typeof e!="object"?null:(e=it&&e[it]||e["@@iterator"],typeof e=="function"?e:null)}var Ht=Symbol.for("react.client.reference");function Nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case te:return"Fragment";case I:return"Profiler";case L:return"StrictMode";case he:return"Suspense";case Te:return"SuspenseList";case Qe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case ee:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return t=e.displayName||null,t!==null?t:Nt(e.type)||"Memo";case Ke:t=e._payload,e=e._init;try{return Nt(e(t))}catch{}}return null}var nt=Array.isArray,A=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},Se=[],be=-1;function v(e){return{current:e}}function M(e){0>be||(e.current=Se[be],Se[be]=null,be--)}function F(e,t){be++,Se[be]=e.current,e.current=t}var $=v(null),ae=v(null),re=v(null),H=v(null);function V(e,t){switch(F(re,t),F(ae,e),F($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sd(t),e=id(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M($),F($,e)}function Q(){M($),M(ae),M(re)}function xe(e){e.memoizedState!==null&&F(H,e);var t=$.current,a=id(t,e.type);t!==a&&(F(ae,e),F($,a))}function Be(e){ae.current===e&&(M($),M(ae)),H.current===e&&(M(H),Rl._currentValue=B)}var Qt,Lt;function X(e){if(Qt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Qt=t&&t[1]||"",Lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+Lt}var ye=!1;function ke(e,t){if(!e||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(T){var C=T}Reflect.construct(e,[],R)}else{try{R.call()}catch(T){C=T}e.call(R.prototype)}}else{try{throw Error()}catch(T){C=T}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(T){if(T&&C&&typeof T.stack=="string")return[T.stack,C.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),o=s[0],m=s[1];if(o&&m){var g=o.split(`
`),D=m.split(`
`);for(l=n=0;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(n===g.length||l===D.length)for(n=g.length-1,l=D.length-1;1<=n&&0<=l&&g[n]!==D[l];)l--;for(;1<=n&&0<=l;n--,l--)if(g[n]!==D[l]){if(n!==1||l!==1)do if(n--,l--,0>l||g[n]!==D[l]){var x=`
`+g[n].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=n&&0<=l);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?X(a):""}function me(e,t){switch(e.tag){case 26:case 27:case 5:return X(e.type);case 16:return X("Lazy");case 13:return e.child!==t&&t!==null?X("Suspense Fallback"):X("Suspense");case 19:return X("SuspenseList");case 0:case 15:return ke(e.type,!1);case 11:return ke(e.type.render,!1);case 1:return ke(e.type,!0);case 31:return X("Activity");default:return""}}function Le(e){try{var t="",a=null;do t+=me(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var tt=Object.prototype.hasOwnProperty,zt=E.unstable_scheduleCallback,La=E.unstable_cancelCallback,zo=E.unstable_shouldYield,di=E.unstable_requestPaint,lt=E.unstable_now,pi=E.unstable_getCurrentPriorityLevel,za=E.unstable_ImmediatePriority,Uo=E.unstable_UserBlockingPriority,jl=E.unstable_NormalPriority,ep=E.unstable_LowPriority,qo=E.unstable_IdlePriority,tp=E.log,ap=E.unstable_setDisableYieldValue,Gn=null,mt=null;function ca(e){if(typeof tp=="function"&&ap(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Gn,e)}catch{}}var ht=Math.clz32?Math.clz32:sp,np=Math.log,lp=Math.LN2;function sp(e){return e>>>=0,e===0?32:31-(np(e)/lp|0)|0}var Bl=256,Fl=262144,Yl=4194304;function Ua(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,s=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~s,n!==0?l=Ua(n):(o&=m,o!==0?l=Ua(o):a||(a=m&~e,a!==0&&(l=Ua(a))))):(m=n&~s,m!==0?l=Ua(m):o!==0?l=Ua(o):a||(a=n&~e,a!==0&&(l=Ua(a)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:l}function $n(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ip(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jo(){var e=Yl;return Yl<<=1,(Yl&62914560)===0&&(Yl=4194304),e}function mi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Qn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rp(e,t,a,n,l,s){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,g=e.expirationTimes,D=e.hiddenUpdates;for(a=o&~a;0<a;){var x=31-ht(a),R=1<<x;m[x]=0,g[x]=-1;var C=D[x];if(C!==null)for(D[x]=null,x=0;x<C.length;x++){var T=C[x];T!==null&&(T.lane&=-536870913)}a&=~R}n!==0&&Bo(e,n,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(o&~t))}function Bo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ht(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Fo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-ht(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function Yo(e,t){var a=t&-t;return a=(a&42)!==0?1:hi(a),(a&(e.suspendedLanes|t))!==0?0:a}function hi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Go(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:xd(e.type))}function $o(e,t){var a=j.p;try{return j.p=e,t()}finally{j.p=a}}var fa=Math.random().toString(36).slice(2),Ie="__reactFiber$"+fa,rt="__reactProps$"+fa,nn="__reactContainer$"+fa,gi="__reactEvents$"+fa,op="__reactListeners$"+fa,up="__reactHandles$"+fa,Qo="__reactResources$"+fa,Vn="__reactMarker$"+fa;function _i(e){delete e[Ie],delete e[rt],delete e[gi],delete e[op],delete e[up]}function ln(e){var t=e[Ie];if(t)return t;for(var a=e.parentNode;a;){if(t=a[nn]||a[Ie]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=pd(e);e!==null;){if(a=e[Ie])return a;e=pd(e)}return t}e=a,a=e.parentNode}return null}function sn(e){if(e=e[Ie]||e[nn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Zn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function rn(e){var t=e[Qo];return t||(t=e[Qo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[Vn]=!0}var Vo=new Set,Zo={};function qa(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Zo[e]=t,e=0;e<t.length;e++)Vo.add(t[e])}var cp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xo={},Ko={};function fp(e){return tt.call(Ko,e)?!0:tt.call(Xo,e)?!1:cp.test(e)?Ko[e]=!0:(Xo[e]=!0,!1)}function $l(e,t,a){if(fp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ql(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Vt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Io(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dp(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vi(e){if(!e._valueTracker){var t=Io(e)?"checked":"value";e._valueTracker=dp(e,t,""+e[t])}}function Jo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Io(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Vl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pp=/[\n"\\]/g;function Ct(e){return e.replace(pp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Si(e,t,a,n,l,s,o,m){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dt(t)):e.value!==""+Dt(t)&&(e.value=""+Dt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?bi(e,o,Dt(t)):a!=null?bi(e,o,Dt(a)):n!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Dt(m):e.removeAttribute("name")}function Wo(e,t,a,n,l,s,o,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){vi(e);return}a=a!=null?""+Dt(a):"",t=t!=null?""+Dt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),vi(e)}function bi(e,t,a){t==="number"&&Vl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function un(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Dt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Po(e,t,a){if(t!=null&&(t=""+Dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Dt(a):""}function eu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(i(92));if(nt(n)){if(1<n.length)throw Error(i(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Dt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),vi(e)}function cn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var mp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||mp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function au(e,t,a){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&tu(e,l,n)}else for(var s in t)t.hasOwnProperty(s)&&tu(e,s,t[s])}function Ei(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zl(e){return yp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var Ni=null;function Di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,dn=null;function nu(e){var t=sn(e);if(t&&(e=t.stateNode)){var a=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Si(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ct(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[rt]||null;if(!l)throw Error(i(90));Si(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Jo(n)}break e;case"textarea":Po(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&un(e,!!a.multiple,t,!1)}}}var Ci=!1;function lu(e,t,a){if(Ci)return e(t,a);Ci=!0;try{var n=e(t);return n}finally{if(Ci=!1,(fn!==null||dn!==null)&&(Hs(),fn&&(t=fn,e=dn,dn=fn=null,nu(t),e)))for(t=0;t<e.length;t++)nu(e[t])}}function Xn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[rt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(i(231,t,typeof a));return a}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wi=!1;if(Xt)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){wi=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{wi=!1}var da=null,Ti=null,Xl=null;function su(){if(Xl)return Xl;var e,t=Ti,a=t.length,n,l="value"in da?da.value:da.textContent,s=l.length;for(e=0;e<a&&t[e]===l[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===l[s-n];n++);return Xl=l.slice(e,1<n?1-n:void 0)}function Kl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Il(){return!0}function iu(){return!1}function ot(e){function t(a,n,l,s,o){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Il:iu,this.isPropagationStopped=iu,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),t}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=ot(ja),In=w({},ja,{view:0,detail:0}),gp=ot(In),Ai,xi,Jn,Wl=w({},In,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(Ai=e.screenX-Jn.screenX,xi=e.screenY-Jn.screenY):xi=Ai=0,Jn=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:xi}}),ru=ot(Wl),_p=w({},Wl,{dataTransfer:0}),vp=ot(_p),Sp=w({},In,{relatedTarget:0}),ki=ot(Sp),bp=w({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Ep=ot(bp),Np=w({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dp=ot(Np),Cp=w({},ja,{data:0}),ou=ot(Cp),wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ap[e])?!!t[e]:!1}function Ri(){return xp}var kp=w({},In,{key:function(e){if(e.key){var t=wp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ri,charCode:function(e){return e.type==="keypress"?Kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=ot(kp),Mp=w({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uu=ot(Mp),Op=w({},In,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ri}),Hp=ot(Op),Lp=w({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),zp=ot(Lp),Up=w({},Wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=ot(Up),jp=w({},ja,{newState:0,oldState:0}),Bp=ot(jp),Fp=[9,13,27,32],Mi=Xt&&"CompositionEvent"in window,Wn=null;Xt&&"documentMode"in document&&(Wn=document.documentMode);var Yp=Xt&&"TextEvent"in window&&!Wn,cu=Xt&&(!Mi||Wn&&8<Wn&&11>=Wn),fu=" ",du=!1;function pu(e,t){switch(e){case"keyup":return Fp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Gp(e,t){switch(e){case"compositionend":return mu(t);case"keypress":return t.which!==32?null:(du=!0,fu);case"textInput":return e=t.data,e===fu&&du?null:e;default:return null}}function $p(e,t){if(pn)return e==="compositionend"||!Mi&&pu(e,t)?(e=su(),Xl=Ti=da=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cu&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function yu(e,t,a,n){fn?dn?dn.push(n):dn=[n]:fn=n,t=Fs(t,"onChange"),0<t.length&&(a=new Jl("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Pn=null,el=null;function Vp(e){Pf(e,0)}function Pl(e){var t=Zn(e);if(Jo(t))return e}function gu(e,t){if(e==="change")return t}var _u=!1;if(Xt){var Oi;if(Xt){var Hi="oninput"in document;if(!Hi){var vu=document.createElement("div");vu.setAttribute("oninput","return;"),Hi=typeof vu.oninput=="function"}Oi=Hi}else Oi=!1;_u=Oi&&(!document.documentMode||9<document.documentMode)}function Su(){Pn&&(Pn.detachEvent("onpropertychange",bu),el=Pn=null)}function bu(e){if(e.propertyName==="value"&&Pl(el)){var t=[];yu(t,el,e,Di(e)),lu(Vp,t)}}function Zp(e,t,a){e==="focusin"?(Su(),Pn=t,el=a,Pn.attachEvent("onpropertychange",bu)):e==="focusout"&&Su()}function Xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(el)}function Kp(e,t){if(e==="click")return Pl(t)}function Ip(e,t){if(e==="input"||e==="change")return Pl(t)}function Jp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Jp;function tl(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!tt.call(t,l)||!yt(e[l],t[l]))return!1}return!0}function Eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nu(e,t){var a=Eu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Eu(a)}}function Du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Vl(e.document)}return t}function Li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Wp=Xt&&"documentMode"in document&&11>=document.documentMode,mn=null,zi=null,al=null,Ui=!1;function wu(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ui||mn==null||mn!==Vl(n)||(n=mn,"selectionStart"in n&&Li(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),al&&tl(al,n)||(al=n,n=Fs(zi,"onSelect"),0<n.length&&(t=new Jl("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=mn)))}function Ba(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var hn={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionrun:Ba("Transition","TransitionRun"),transitionstart:Ba("Transition","TransitionStart"),transitioncancel:Ba("Transition","TransitionCancel"),transitionend:Ba("Transition","TransitionEnd")},qi={},Tu={};Xt&&(Tu=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Fa(e){if(qi[e])return qi[e];if(!hn[e])return e;var t=hn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Tu)return qi[e]=t[a];return e}var Au=Fa("animationend"),xu=Fa("animationiteration"),ku=Fa("animationstart"),Pp=Fa("transitionrun"),em=Fa("transitionstart"),tm=Fa("transitioncancel"),Ru=Fa("transitionend"),Mu=new Map,ji="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ji.push("scrollEnd");function Ut(e,t){Mu.set(e,t),qa(t,[e])}var es=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],yn=0,Bi=0;function ts(){for(var e=yn,t=Bi=yn=0;t<e;){var a=wt[t];wt[t++]=null;var n=wt[t];wt[t++]=null;var l=wt[t];wt[t++]=null;var s=wt[t];if(wt[t++]=null,n!==null&&l!==null){var o=n.pending;o===null?l.next=l:(l.next=o.next,o.next=l),n.pending=l}s!==0&&Ou(a,l,s)}}function as(e,t,a,n){wt[yn++]=e,wt[yn++]=t,wt[yn++]=a,wt[yn++]=n,Bi|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Fi(e,t,a,n){return as(e,t,a,n),ns(e)}function Ya(e,t){return as(e,null,null,t),ns(e)}function Ou(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-ht(a),e=s.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),s):null}function ns(e){if(50<Dl)throw Dl=0,Ir=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gn={};function am(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,a,n){return new am(e,t,a,n)}function Yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var a=e.alternate;return a===null?(a=gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ls(e,t,a,n,l,s){var o=0;if(n=e,typeof e=="function")Yi(e)&&(o=1);else if(typeof e=="string")o=rh(e,a,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Qe:return e=gt(31,a,t,l),e.elementType=Qe,e.lanes=s,e;case te:return Ga(a.children,l,s,t);case L:o=8,l|=24;break;case I:return e=gt(12,a,t,l|2),e.elementType=I,e.lanes=s,e;case he:return e=gt(13,a,t,l),e.elementType=he,e.lanes=s,e;case Te:return e=gt(19,a,t,l),e.elementType=Te,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ee:o=10;break e;case P:o=9;break e;case J:o=11;break e;case le:o=14;break e;case Ke:o=16,n=null;break e}o=29,a=Error(i(130,e===null?"null":typeof e,"")),n=null}return t=gt(o,a,t,l),t.elementType=e,t.type=n,t.lanes=s,t}function Ga(e,t,a,n){return e=gt(7,e,n,t),e.lanes=a,e}function Gi(e,t,a){return e=gt(6,e,null,t),e.lanes=a,e}function Lu(e){var t=gt(18,null,null,0);return t.stateNode=e,t}function $i(e,t,a){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zu=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var a=zu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Le(t)},zu.set(e,t),t)}return{value:e,source:t,stack:Le(t)}}var _n=[],vn=0,ss=null,nl=0,At=[],xt=0,pa=null,Bt=1,Ft="";function It(e,t){_n[vn++]=nl,_n[vn++]=ss,ss=e,nl=t}function Uu(e,t,a){At[xt++]=Bt,At[xt++]=Ft,At[xt++]=pa,pa=e;var n=Bt;e=Ft;var l=32-ht(n)-1;n&=~(1<<l),a+=1;var s=32-ht(t)+l;if(30<s){var o=l-l%5;s=(n&(1<<o)-1).toString(32),n>>=o,l-=o,Bt=1<<32-ht(t)+l|a<<l|n,Ft=s+e}else Bt=1<<s|a<<l|n,Ft=e}function Qi(e){e.return!==null&&(It(e,1),Uu(e,1,0))}function Vi(e){for(;e===ss;)ss=_n[--vn],_n[vn]=null,nl=_n[--vn],_n[vn]=null;for(;e===pa;)pa=At[--xt],At[xt]=null,Ft=At[--xt],At[xt]=null,Bt=At[--xt],At[xt]=null}function qu(e,t){At[xt++]=Bt,At[xt++]=Ft,At[xt++]=pa,Bt=t.id,Ft=t.overflow,pa=e}var Je=null,Re=null,de=!1,ma=null,kt=!1,Zi=Error(i(519));function ha(e){var t=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll(Tt(t,e)),Zi}function ju(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Ie]=e,t[rt]=n,a){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(a=0;a<wl.length;a++)ue(wl[a],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),Wo(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),eu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||nd(t.textContent,a)?(n.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),n.onScroll!=null&&ue("scroll",t),n.onScrollEnd!=null&&ue("scrollend",t),n.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||ha(e,!0)}function Bu(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:kt=!1;return;case 27:case 3:kt=!0;return;default:Je=Je.return}}function Sn(e){if(e!==Je)return!1;if(!de)return Bu(e),de=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||fo(e.type,e.memoizedProps)),a=!a),a&&Re&&ha(e),Bu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));Re=dd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));Re=dd(e)}else t===27?(t=Re,xa(e.type)?(e=go,go=null,Re=e):Re=t):Re=Je?Mt(e.stateNode.nextSibling):null;return!0}function $a(){Re=Je=null,de=!1}function Xi(){var e=ma;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),ma=null),e}function ll(e){ma===null?ma=[e]:ma.push(e)}var Ki=v(null),Qa=null,Jt=null;function ya(e,t,a){F(Ki,t._currentValue),t._currentValue=a}function Wt(e){e._currentValue=Ki.current,M(Ki)}function Ii(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Ji(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var o=l.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=l;for(var g=0;g<t.length;g++)if(m.context===t[g]){s.lanes|=a,m=s.alternate,m!==null&&(m.lanes|=a),Ii(s.return,a,e),n||(o=null);break e}s=m.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(i(341));o.lanes|=a,s=o.alternate,s!==null&&(s.lanes|=a),Ii(o,a,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function bn(e,t,a,n){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(i(387));if(o=o.memoizedProps,o!==null){var m=l.type;yt(l.pendingProps.value,o.value)||(e!==null?e.push(m):e=[m])}}else if(l===H.current){if(o=l.alternate,o===null)throw Error(i(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Rl):e=[Rl])}l=l.return}e!==null&&Ji(t,e,a,n),t.flags|=262144}function is(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Va(e){Qa=e,Jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return Fu(Qa,e)}function rs(e,t){return Qa===null&&Va(e),Fu(e,t)}function Fu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Jt===null){if(e===null)throw Error(i(308));Jt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Jt=Jt.next=t;return a}var nm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},lm=E.unstable_scheduleCallback,sm=E.unstable_NormalPriority,Fe={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wi(){return{controller:new nm,data:new Map,refCount:0}}function sl(e){e.refCount--,e.refCount===0&&lm(sm,function(){e.controller.abort()})}var il=null,Pi=0,En=0,Nn=null;function im(e,t){if(il===null){var a=il=[];Pi=0,En=ao(),Nn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Pi++,t.then(Yu,Yu),t}function Yu(){if(--Pi===0&&il!==null){Nn!==null&&(Nn.status="fulfilled");var e=il;il=null,En=0,Nn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function rm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Gu=A.S;A.S=function(e,t){Tf=lt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&im(e,t),Gu!==null&&Gu(e,t)};var Za=v(null);function er(){var e=Za.current;return e!==null?e:Ae.pooledCache}function os(e,t){t===null?F(Za,Za.current):F(Za,t.pool)}function $u(){var e=er();return e===null?null:{parent:Fe._currentValue,pool:e}}var Dn=Error(i(460)),tr=Error(i(474)),us=Error(i(542)),cs={then:function(){}};function Qu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Zt,Zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xu(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xu(e),e}throw Ka=t,Dn}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ka=a,Dn):a}}var Ka=null;function Zu(){if(Ka===null)throw Error(i(459));var e=Ka;return Ka=null,e}function Xu(e){if(e===Dn||e===us)throw Error(i(483))}var Cn=null,rl=0;function fs(e){var t=rl;return rl+=1,Cn===null&&(Cn=[]),Vu(Cn,e,t)}function ol(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ds(e,t){throw t.$$typeof===z?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ku(e){function t(S,_){if(e){var N=S.deletions;N===null?(S.deletions=[_],S.flags|=16):N.push(_)}}function a(S,_){if(!e)return null;for(;_!==null;)t(S,_),_=_.sibling;return null}function n(S){for(var _=new Map;S!==null;)S.key!==null?_.set(S.key,S):_.set(S.index,S),S=S.sibling;return _}function l(S,_){return S=Kt(S,_),S.index=0,S.sibling=null,S}function s(S,_,N){return S.index=N,e?(N=S.alternate,N!==null?(N=N.index,N<_?(S.flags|=67108866,_):N):(S.flags|=67108866,_)):(S.flags|=1048576,_)}function o(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function m(S,_,N,k){return _===null||_.tag!==6?(_=Gi(N,S.mode,k),_.return=S,_):(_=l(_,N),_.return=S,_)}function g(S,_,N,k){var K=N.type;return K===te?x(S,_,N.props.children,k,N.key):_!==null&&(_.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ke&&Xa(K)===_.type)?(_=l(_,N.props),ol(_,N),_.return=S,_):(_=ls(N.type,N.key,N.props,null,S.mode,k),ol(_,N),_.return=S,_)}function D(S,_,N,k){return _===null||_.tag!==4||_.stateNode.containerInfo!==N.containerInfo||_.stateNode.implementation!==N.implementation?(_=$i(N,S.mode,k),_.return=S,_):(_=l(_,N.children||[]),_.return=S,_)}function x(S,_,N,k,K){return _===null||_.tag!==7?(_=Ga(N,S.mode,k,K),_.return=S,_):(_=l(_,N),_.return=S,_)}function R(S,_,N){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Gi(""+_,S.mode,N),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Y:return N=ls(_.type,_.key,_.props,null,S.mode,N),ol(N,_),N.return=S,N;case U:return _=$i(_,S.mode,N),_.return=S,_;case Ke:return _=Xa(_),R(S,_,N)}if(nt(_)||He(_))return _=Ga(_,S.mode,N,null),_.return=S,_;if(typeof _.then=="function")return R(S,fs(_),N);if(_.$$typeof===ee)return R(S,rs(S,_),N);ds(S,_)}return null}function C(S,_,N,k){var K=_!==null?_.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return K!==null?null:m(S,_,""+N,k);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Y:return N.key===K?g(S,_,N,k):null;case U:return N.key===K?D(S,_,N,k):null;case Ke:return N=Xa(N),C(S,_,N,k)}if(nt(N)||He(N))return K!==null?null:x(S,_,N,k,null);if(typeof N.then=="function")return C(S,_,fs(N),k);if(N.$$typeof===ee)return C(S,_,rs(S,N),k);ds(S,N)}return null}function T(S,_,N,k,K){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return S=S.get(N)||null,m(_,S,""+k,K);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Y:return S=S.get(k.key===null?N:k.key)||null,g(_,S,k,K);case U:return S=S.get(k.key===null?N:k.key)||null,D(_,S,k,K);case Ke:return k=Xa(k),T(S,_,N,k,K)}if(nt(k)||He(k))return S=S.get(N)||null,x(_,S,k,K,null);if(typeof k.then=="function")return T(S,_,N,fs(k),K);if(k.$$typeof===ee)return T(S,_,N,rs(_,k),K);ds(_,k)}return null}function G(S,_,N,k){for(var K=null,ge=null,Z=_,ie=_=0,fe=null;Z!==null&&ie<N.length;ie++){Z.index>ie?(fe=Z,Z=null):fe=Z.sibling;var _e=C(S,Z,N[ie],k);if(_e===null){Z===null&&(Z=fe);break}e&&Z&&_e.alternate===null&&t(S,Z),_=s(_e,_,ie),ge===null?K=_e:ge.sibling=_e,ge=_e,Z=fe}if(ie===N.length)return a(S,Z),de&&It(S,ie),K;if(Z===null){for(;ie<N.length;ie++)Z=R(S,N[ie],k),Z!==null&&(_=s(Z,_,ie),ge===null?K=Z:ge.sibling=Z,ge=Z);return de&&It(S,ie),K}for(Z=n(Z);ie<N.length;ie++)fe=T(Z,S,ie,N[ie],k),fe!==null&&(e&&fe.alternate!==null&&Z.delete(fe.key===null?ie:fe.key),_=s(fe,_,ie),ge===null?K=fe:ge.sibling=fe,ge=fe);return e&&Z.forEach(function(Ha){return t(S,Ha)}),de&&It(S,ie),K}function W(S,_,N,k){if(N==null)throw Error(i(151));for(var K=null,ge=null,Z=_,ie=_=0,fe=null,_e=N.next();Z!==null&&!_e.done;ie++,_e=N.next()){Z.index>ie?(fe=Z,Z=null):fe=Z.sibling;var Ha=C(S,Z,_e.value,k);if(Ha===null){Z===null&&(Z=fe);break}e&&Z&&Ha.alternate===null&&t(S,Z),_=s(Ha,_,ie),ge===null?K=Ha:ge.sibling=Ha,ge=Ha,Z=fe}if(_e.done)return a(S,Z),de&&It(S,ie),K;if(Z===null){for(;!_e.done;ie++,_e=N.next())_e=R(S,_e.value,k),_e!==null&&(_=s(_e,_,ie),ge===null?K=_e:ge.sibling=_e,ge=_e);return de&&It(S,ie),K}for(Z=n(Z);!_e.done;ie++,_e=N.next())_e=T(Z,S,ie,_e.value,k),_e!==null&&(e&&_e.alternate!==null&&Z.delete(_e.key===null?ie:_e.key),_=s(_e,_,ie),ge===null?K=_e:ge.sibling=_e,ge=_e);return e&&Z.forEach(function(_h){return t(S,_h)}),de&&It(S,ie),K}function we(S,_,N,k){if(typeof N=="object"&&N!==null&&N.type===te&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case Y:e:{for(var K=N.key;_!==null;){if(_.key===K){if(K=N.type,K===te){if(_.tag===7){a(S,_.sibling),k=l(_,N.props.children),k.return=S,S=k;break e}}else if(_.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ke&&Xa(K)===_.type){a(S,_.sibling),k=l(_,N.props),ol(k,N),k.return=S,S=k;break e}a(S,_);break}else t(S,_);_=_.sibling}N.type===te?(k=Ga(N.props.children,S.mode,k,N.key),k.return=S,S=k):(k=ls(N.type,N.key,N.props,null,S.mode,k),ol(k,N),k.return=S,S=k)}return o(S);case U:e:{for(K=N.key;_!==null;){if(_.key===K)if(_.tag===4&&_.stateNode.containerInfo===N.containerInfo&&_.stateNode.implementation===N.implementation){a(S,_.sibling),k=l(_,N.children||[]),k.return=S,S=k;break e}else{a(S,_);break}else t(S,_);_=_.sibling}k=$i(N,S.mode,k),k.return=S,S=k}return o(S);case Ke:return N=Xa(N),we(S,_,N,k)}if(nt(N))return G(S,_,N,k);if(He(N)){if(K=He(N),typeof K!="function")throw Error(i(150));return N=K.call(N),W(S,_,N,k)}if(typeof N.then=="function")return we(S,_,fs(N),k);if(N.$$typeof===ee)return we(S,_,rs(S,N),k);ds(S,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,_!==null&&_.tag===6?(a(S,_.sibling),k=l(_,N),k.return=S,S=k):(a(S,_),k=Gi(N,S.mode,k),k.return=S,S=k),o(S)):a(S,_)}return function(S,_,N,k){try{rl=0;var K=we(S,_,N,k);return Cn=null,K}catch(Z){if(Z===Dn||Z===us)throw Z;var ge=gt(29,Z,null,S.mode);return ge.lanes=k,ge.return=S,ge}finally{}}}var Ia=Ku(!0),Iu=Ku(!1),ga=!1;function ar(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ve&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=ns(e),Ou(e,null,a),t}return as(e,n,t,a),ns(e)}function ul(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Fo(e,a)}}function lr(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?l=s=o:s=s.next=o,a=a.next}while(a!==null);s===null?l=s=t:s=s.next=t}else l=s=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var sr=!1;function cl(){if(sr){var e=Nn;if(e!==null)throw e}}function fl(e,t,a,n){sr=!1;var l=e.updateQueue;ga=!1;var s=l.firstBaseUpdate,o=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var g=m,D=g.next;g.next=null,o===null?s=D:o.next=D,o=g;var x=e.alternate;x!==null&&(x=x.updateQueue,m=x.lastBaseUpdate,m!==o&&(m===null?x.firstBaseUpdate=D:m.next=D,x.lastBaseUpdate=g))}if(s!==null){var R=l.baseState;o=0,x=D=g=null,m=s;do{var C=m.lane&-536870913,T=C!==m.lane;if(T?(ce&C)===C:(n&C)===C){C!==0&&C===En&&(sr=!0),x!==null&&(x=x.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var G=e,W=m;C=t;var we=a;switch(W.tag){case 1:if(G=W.payload,typeof G=="function"){R=G.call(we,R,C);break e}R=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=W.payload,C=typeof G=="function"?G.call(we,R,C):G,C==null)break e;R=w({},R,C);break e;case 2:ga=!0}}C=m.callback,C!==null&&(e.flags|=64,T&&(e.flags|=8192),T=l.callbacks,T===null?l.callbacks=[C]:T.push(C))}else T={lane:C,tag:m.tag,payload:m.payload,callback:m.callback,next:null},x===null?(D=x=T,g=R):x=x.next=T,o|=C;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;T=m,m=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);x===null&&(g=R),l.baseState=g,l.firstBaseUpdate=D,l.lastBaseUpdate=x,s===null&&(l.shared.lanes=0),Da|=o,e.lanes=o,e.memoizedState=R}}function Ju(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function Wu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ju(a[e],t)}var wn=v(null),ps=v(0);function Pu(e,t){e=ra,F(ps,e),F(wn,t),ra=e|t.baseLanes}function ir(){F(ps,ra),F(wn,wn.current)}function rr(){ra=ps.current,M(wn),M(ps)}var _t=v(null),Rt=null;function Sa(e){var t=e.alternate;F(qe,qe.current&1),F(_t,e),Rt===null&&(t===null||wn.current!==null||t.memoizedState!==null)&&(Rt=e)}function or(e){F(qe,qe.current),F(_t,e),Rt===null&&(Rt=e)}function ec(e){e.tag===22?(F(qe,qe.current),F(_t,e),Rt===null&&(Rt=e)):ba()}function ba(){F(qe,qe.current),F(_t,_t.current)}function vt(e){M(_t),Rt===e&&(Rt=null),M(qe)}var qe=v(0);function ms(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ho(a)||yo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pt=0,se=null,De=null,Ye=null,hs=!1,Tn=!1,Ja=!1,ys=0,dl=0,An=null,om=0;function ze(){throw Error(i(321))}function ur(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yt(e[a],t[a]))return!1;return!0}function cr(e,t,a,n,l,s){return Pt=s,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Uc:Cr,Ja=!1,s=a(n,l),Ja=!1,Tn&&(s=ac(t,a,n,l)),tc(e),s}function tc(e){A.H=hl;var t=De!==null&&De.next!==null;if(Pt=0,Ye=De=se=null,hs=!1,dl=0,An=null,t)throw Error(i(300));e===null||Ge||(e=e.dependencies,e!==null&&is(e)&&(Ge=!0))}function ac(e,t,a,n){se=e;var l=0;do{if(Tn&&(An=null),dl=0,Tn=!1,25<=l)throw Error(i(301));if(l+=1,Ye=De=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}A.H=qc,s=t(a,n)}while(Tn);return s}function um(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?pl(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(se.flags|=1024),t}function fr(){var e=ys!==0;return ys=0,e}function dr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function pr(e){if(hs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hs=!1}Pt=0,Ye=De=se=null,Tn=!1,dl=ys=0,An=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?se.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function je(){if(De===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Ye===null?se.memoizedState:Ye.next;if(t!==null)Ye=t,De=e;else{if(e===null)throw se.alternate===null?Error(i(467)):Error(i(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ye===null?se.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function gs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pl(e){var t=dl;return dl+=1,An===null&&(An=[]),e=Vu(An,e,t),t=se,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Uc:Cr),e}function _s(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pl(e);if(e.$$typeof===ee)return We(e)}throw Error(i(438,String(e)))}function mr(e){var t=null,a=se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=se.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=gs(),se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=$t;return t.index++,a}function ea(e,t){return typeof t=="function"?t(e):t}function vs(e){var t=je();return hr(t,De,e)}function hr(e,t,a){var n=e.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=a;var l=e.baseQueue,s=n.pending;if(s!==null){if(l!==null){var o=l.next;l.next=s.next,s.next=o}t.baseQueue=l=s,n.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var m=o=null,g=null,D=t,x=!1;do{var R=D.lane&-536870913;if(R!==D.lane?(ce&R)===R:(Pt&R)===R){var C=D.revertLane;if(C===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),R===En&&(x=!0);else if((Pt&C)===C){D=D.next,C===En&&(x=!0);continue}else R={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},g===null?(m=g=R,o=s):g=g.next=R,se.lanes|=C,Da|=C;R=D.action,Ja&&a(s,R),s=D.hasEagerState?D.eagerState:a(s,R)}else C={lane:R,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},g===null?(m=g=C,o=s):g=g.next=C,se.lanes|=R,Da|=R;D=D.next}while(D!==null&&D!==t);if(g===null?o=s:g.next=m,!yt(s,e.memoizedState)&&(Ge=!0,x&&(a=Nn,a!==null)))throw a;e.memoizedState=s,e.baseState=o,e.baseQueue=g,n.lastRenderedState=s}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function yr(e){var t=je(),a=t.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,s=t.memoizedState;if(l!==null){a.pending=null;var o=l=l.next;do s=e(s,o.action),o=o.next;while(o!==l);yt(s,t.memoizedState)||(Ge=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function nc(e,t,a){var n=se,l=je(),s=de;if(s){if(a===void 0)throw Error(i(407));a=a()}else a=t();var o=!yt((De||l).memoizedState,a);if(o&&(l.memoizedState=a,Ge=!0),l=l.queue,vr(ic.bind(null,n,l,e),[e]),l.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,xn(9,{destroy:void 0},sc.bind(null,n,l,a,t),null),Ae===null)throw Error(i(349));s||(Pt&127)!==0||lc(n,t,a)}return a}function lc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=se.updateQueue,t===null?(t=gs(),se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function sc(e,t,a,n){t.value=a,t.getSnapshot=n,rc(t)&&oc(e)}function ic(e,t,a){return a(function(){rc(t)&&oc(e)})}function rc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yt(e,a)}catch{return!0}}function oc(e){var t=Ya(e,2);t!==null&&pt(t,e,2)}function gr(e){var t=st();if(typeof e=="function"){var a=e;if(e=a(),Ja){ca(!0);try{a()}finally{ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t}function uc(e,t,a,n){return e.baseState=a,hr(e,De,typeof n=="function"?n:ea)}function cm(e,t,a,n,l){if(Es(e))throw Error(i(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){s.listeners.push(o)}};A.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,cc(t,s)):(s.next=a.next,t.pending=a.next=s)}}function cc(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var s=A.T,o={};A.T=o;try{var m=a(l,n),g=A.S;g!==null&&g(o,m),fc(e,t,m)}catch(D){_r(e,t,D)}finally{s!==null&&o.types!==null&&(s.types=o.types),A.T=s}}else try{s=a(l,n),fc(e,t,s)}catch(D){_r(e,t,D)}}function fc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){dc(e,t,n)},function(n){return _r(e,t,n)}):dc(e,t,a)}function dc(e,t,a){t.status="fulfilled",t.value=a,pc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,cc(e,a)))}function _r(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,pc(t),t=t.next;while(t!==n)}e.action=null}function pc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mc(e,t){return t}function hc(e,t){if(de){var a=Ae.formState;if(a!==null){e:{var n=se;if(de){if(Re){t:{for(var l=Re,s=kt;l.nodeType!==8;){if(!s){l=null;break t}if(l=Mt(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){Re=Mt(l.nextSibling),n=l.data==="F!";break e}}ha(n)}n=!1}n&&(t=a[0])}}return a=st(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mc,lastRenderedState:t},a.queue=n,a=Hc.bind(null,se,n),n.dispatch=a,n=gr(!1),s=Dr.bind(null,se,!1,n.queue),n=st(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=cm.bind(null,se,l,s,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function yc(e){var t=je();return gc(t,De,e)}function gc(e,t,a){if(t=hr(e,t,mc)[0],e=vs(ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=pl(t)}catch(o){throw o===Dn?us:o}else n=t;t=je();var l=t.queue,s=l.dispatch;return a!==t.memoizedState&&(se.flags|=2048,xn(9,{destroy:void 0},fm.bind(null,l,a),null)),[n,s,e]}function fm(e,t){e.action=t}function _c(e){var t=je(),a=De;if(a!==null)return gc(t,a,e);je(),t=t.memoizedState,a=je();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function xn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=se.updateQueue,t===null&&(t=gs(),se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function vc(){return je().memoizedState}function Ss(e,t,a,n){var l=st();se.flags|=e,l.memoizedState=xn(1|t,{destroy:void 0},a,n===void 0?null:n)}function bs(e,t,a,n){var l=je();n=n===void 0?null:n;var s=l.memoizedState.inst;De!==null&&n!==null&&ur(n,De.memoizedState.deps)?l.memoizedState=xn(t,s,a,n):(se.flags|=e,l.memoizedState=xn(1|t,s,a,n))}function Sc(e,t){Ss(8390656,8,e,t)}function vr(e,t){bs(2048,8,e,t)}function dm(e){se.flags|=4;var t=se.updateQueue;if(t===null)t=gs(),se.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function bc(e){var t=je().memoizedState;return dm({ref:t,nextImpl:e}),function(){if((ve&2)!==0)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ec(e,t){return bs(4,2,e,t)}function Nc(e,t){return bs(4,4,e,t)}function Dc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cc(e,t,a){a=a!=null?a.concat([e]):null,bs(4,4,Dc.bind(null,t,e),a)}function Sr(){}function wc(e,t){var a=je();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&ur(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Tc(e,t){var a=je();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&ur(t,n[1]))return n[0];if(n=e(),Ja){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[n,t],n}function br(e,t,a){return a===void 0||(Pt&1073741824)!==0&&(ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=xf(),se.lanes|=e,Da|=e,a)}function Ac(e,t,a,n){return yt(a,t)?a:wn.current!==null?(e=br(e,a,n),yt(e,t)||(Ge=!0),e):(Pt&42)===0||(Pt&1073741824)!==0&&(ce&261930)===0?(Ge=!0,e.memoizedState=a):(e=xf(),se.lanes|=e,Da|=e,t)}function xc(e,t,a,n,l){var s=j.p;j.p=s!==0&&8>s?s:8;var o=A.T,m={};A.T=m,Dr(e,!1,t,a);try{var g=l(),D=A.S;if(D!==null&&D(m,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var x=rm(g,n);ml(e,t,x,Et(e))}else ml(e,t,n,Et(e))}catch(R){ml(e,t,{then:function(){},status:"rejected",reason:R},Et())}finally{j.p=s,o!==null&&m.types!==null&&(o.types=m.types),A.T=o}}function pm(){}function Er(e,t,a,n){if(e.tag!==5)throw Error(i(476));var l=kc(e).queue;xc(e,l,t,B,a===null?pm:function(){return Rc(e),a(n)})}function kc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:B},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rc(e){var t=kc(e);t.next===null&&(t=e.alternate.memoizedState),ml(e,t.next.queue,{},Et())}function Nr(){return We(Rl)}function Mc(){return je().memoizedState}function Oc(){return je().memoizedState}function mm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Et();e=_a(a);var n=va(t,e,a);n!==null&&(pt(n,t,a),ul(n,t,a)),t={cache:Wi()},e.payload=t;return}t=t.return}}function hm(e,t,a){var n=Et();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Es(e)?Lc(t,a):(a=Fi(e,t,a,n),a!==null&&(pt(a,e,n),zc(a,t,n)))}function Hc(e,t,a){var n=Et();ml(e,t,a,n)}function ml(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Es(e))Lc(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,m=s(o,a);if(l.hasEagerState=!0,l.eagerState=m,yt(m,o))return as(e,t,l,0),Ae===null&&ts(),!1}catch{}finally{}if(a=Fi(e,t,l,n),a!==null)return pt(a,e,n),zc(a,t,n),!0}return!1}function Dr(e,t,a,n){if(n={lane:2,revertLane:ao(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Es(e)){if(t)throw Error(i(479))}else t=Fi(e,a,n,2),t!==null&&pt(t,e,2)}function Es(e){var t=e.alternate;return e===se||t!==null&&t===se}function Lc(e,t){Tn=hs=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function zc(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Fo(e,a)}}var hl={readContext:We,use:_s,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze};hl.useEffectEvent=ze;var Uc={readContext:We,use:_s,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Sc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ss(4194308,4,Dc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ss(4194308,4,e,t)},useInsertionEffect:function(e,t){Ss(4,2,e,t)},useMemo:function(e,t){var a=st();t=t===void 0?null:t;var n=e();if(Ja){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=st();if(a!==void 0){var l=a(t);if(Ja){ca(!0);try{a(t)}finally{ca(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=hm.bind(null,se,e),[n.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=gr(e);var t=e.queue,a=Hc.bind(null,se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Sr,useDeferredValue:function(e,t){var a=st();return br(a,e,t)},useTransition:function(){var e=gr(!1);return e=xc.bind(null,se,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=se,l=st();if(de){if(a===void 0)throw Error(i(407));a=a()}else{if(a=t(),Ae===null)throw Error(i(349));(ce&127)!==0||lc(n,t,a)}l.memoizedState=a;var s={value:a,getSnapshot:t};return l.queue=s,Sc(ic.bind(null,n,s,e),[e]),n.flags|=2048,xn(9,{destroy:void 0},sc.bind(null,n,s,a,t),null),a},useId:function(){var e=st(),t=Ae.identifierPrefix;if(de){var a=Ft,n=Bt;a=(n&~(1<<32-ht(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ys++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=om++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Nr,useFormState:hc,useActionState:hc,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Dr.bind(null,se,!0,a),a.dispatch=t,[e,t]},useMemoCache:mr,useCacheRefresh:function(){return st().memoizedState=mm.bind(null,se)},useEffectEvent:function(e){var t=st(),a={impl:e};return t.memoizedState=a,function(){if((ve&2)!==0)throw Error(i(440));return a.impl.apply(void 0,arguments)}}},Cr={readContext:We,use:_s,useCallback:wc,useContext:We,useEffect:vr,useImperativeHandle:Cc,useInsertionEffect:Ec,useLayoutEffect:Nc,useMemo:Tc,useReducer:vs,useRef:vc,useState:function(){return vs(ea)},useDebugValue:Sr,useDeferredValue:function(e,t){var a=je();return Ac(a,De.memoizedState,e,t)},useTransition:function(){var e=vs(ea)[0],t=je().memoizedState;return[typeof e=="boolean"?e:pl(e),t]},useSyncExternalStore:nc,useId:Mc,useHostTransitionStatus:Nr,useFormState:yc,useActionState:yc,useOptimistic:function(e,t){var a=je();return uc(a,De,e,t)},useMemoCache:mr,useCacheRefresh:Oc};Cr.useEffectEvent=bc;var qc={readContext:We,use:_s,useCallback:wc,useContext:We,useEffect:vr,useImperativeHandle:Cc,useInsertionEffect:Ec,useLayoutEffect:Nc,useMemo:Tc,useReducer:yr,useRef:vc,useState:function(){return yr(ea)},useDebugValue:Sr,useDeferredValue:function(e,t){var a=je();return De===null?br(a,e,t):Ac(a,De.memoizedState,e,t)},useTransition:function(){var e=yr(ea)[0],t=je().memoizedState;return[typeof e=="boolean"?e:pl(e),t]},useSyncExternalStore:nc,useId:Mc,useHostTransitionStatus:Nr,useFormState:_c,useActionState:_c,useOptimistic:function(e,t){var a=je();return De!==null?uc(a,De,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mr,useCacheRefresh:Oc};qc.useEffectEvent=bc;function wr(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Tr={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Et(),l=_a(n);l.payload=t,a!=null&&(l.callback=a),t=va(e,l,n),t!==null&&(pt(t,e,n),ul(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Et(),l=_a(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=va(e,l,n),t!==null&&(pt(t,e,n),ul(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Et(),n=_a(a);n.tag=2,t!=null&&(n.callback=t),t=va(e,n,a),t!==null&&(pt(t,e,a),ul(t,e,a))}};function jc(e,t,a,n,l,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,o):t.prototype&&t.prototype.isPureReactComponent?!tl(a,n)||!tl(l,s):!0}function Bc(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Tr.enqueueReplaceState(t,t.state,null)}function Wa(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Fc(e){es(e)}function Yc(e){console.error(e)}function Gc(e){es(e)}function Ns(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function $c(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ar(e,t,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Ns(e,t)},a}function Qc(e){return e=_a(e),e.tag=3,e}function Vc(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var s=n.value;e.payload=function(){return l(s)},e.callback=function(){$c(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){$c(t,a,n),typeof l!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function ym(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&bn(t,a,l,!0),a=_t.current,a!==null){switch(a.tag){case 31:case 13:return Rt===null?Ls():a.alternate===null&&Ue===0&&(Ue=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===cs?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Pr(e,n,l)),!1;case 22:return a.flags|=65536,n===cs?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Pr(e,n,l)),!1}throw Error(i(435,a.tag))}return Pr(e,n,l),Ls(),!1}if(de)return t=_t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Zi&&(e=Error(i(422),{cause:n}),ll(Tt(e,a)))):(n!==Zi&&(t=Error(i(423),{cause:n}),ll(Tt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Tt(n,a),l=Ar(e.stateNode,n,l),lr(e,l),Ue!==4&&(Ue=2)),!1;var s=Error(i(520),{cause:n});if(s=Tt(s,a),Nl===null?Nl=[s]:Nl.push(s),Ue!==4&&(Ue=2),t===null)return!0;n=Tt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Ar(a.stateNode,n,e),lr(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ca===null||!Ca.has(s))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Qc(l),Vc(l,e,a,n),lr(a,l),!1}a=a.return}while(a!==null);return!1}var xr=Error(i(461)),Ge=!1;function Pe(e,t,a,n){t.child=e===null?Iu(t,null,a,n):Ia(t,e.child,a,n)}function Zc(e,t,a,n,l){a=a.render;var s=t.ref;if("ref"in n){var o={};for(var m in n)m!=="ref"&&(o[m]=n[m])}else o=n;return Va(t),n=cr(e,t,a,o,s,l),m=fr(),e!==null&&!Ge?(dr(e,t,l),ta(e,t,l)):(de&&m&&Qi(t),t.flags|=1,Pe(e,t,n,l),t.child)}function Xc(e,t,a,n,l){if(e===null){var s=a.type;return typeof s=="function"&&!Yi(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Kc(e,t,s,n,l)):(e=ls(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Ur(e,l)){var o=s.memoizedProps;if(a=a.compare,a=a!==null?a:tl,a(o,n)&&e.ref===t.ref)return ta(e,t,l)}return t.flags|=1,e=Kt(s,n),e.ref=t.ref,e.return=t,t.child=e}function Kc(e,t,a,n,l){if(e!==null){var s=e.memoizedProps;if(tl(s,n)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=n=s,Ur(e,l))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,ta(e,t,l)}return kr(e,t,a,n,l)}function Ic(e,t,a,n){var l=n.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~s}else n=0,t.child=null;return Jc(e,t,s,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&os(t,s!==null?s.cachePool:null),s!==null?Pu(t,s):ir(),ec(t);else return n=t.lanes=536870912,Jc(e,t,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(os(t,s.cachePool),Pu(t,s),ba(),t.memoizedState=null):(e!==null&&os(t,null),ir(),ba());return Pe(e,t,l,a),t.child}function yl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Jc(e,t,a,n,l){var s=er();return s=s===null?null:{parent:Fe._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&os(t,null),ir(),ec(t),e!==null&&bn(e,t,n,!0),t.childLanes=l,null}function Ds(e,t){return t=ws({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Wc(e,t,a){return Ia(t,e.child,null,a),e=Ds(t,t.pendingProps),e.flags|=2,vt(t),t.memoizedState=null,e}function gm(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(de){if(n.mode==="hidden")return e=Ds(t,n),t.lanes=536870912,yl(null,e);if(or(t),(e=Re)?(e=fd(e,kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Bt,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},a=Lu(e),a.return=t,t.child=a,Je=t,Re=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Ds(t,n)}var s=e.memoizedState;if(s!==null){var o=s.dehydrated;if(or(t),l)if(t.flags&256)t.flags&=-257,t=Wc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(Ge||bn(e,t,a,!1),l=(a&e.childLanes)!==0,Ge||l){if(n=Ae,n!==null&&(o=Yo(n,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,Ya(e,o),pt(n,e,o),xr;Ls(),t=Wc(e,t,a)}else e=s.treeContext,Re=Mt(o.nextSibling),Je=t,de=!0,ma=null,kt=!1,e!==null&&qu(t,e),t=Ds(t,n),t.flags|=4096;return t}return e=Kt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Cs(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(i(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function kr(e,t,a,n,l){return Va(t),a=cr(e,t,a,n,void 0,l),n=fr(),e!==null&&!Ge?(dr(e,t,l),ta(e,t,l)):(de&&n&&Qi(t),t.flags|=1,Pe(e,t,a,l),t.child)}function Pc(e,t,a,n,l,s){return Va(t),t.updateQueue=null,a=ac(t,n,a,l),tc(e),n=fr(),e!==null&&!Ge?(dr(e,t,s),ta(e,t,s)):(de&&n&&Qi(t),t.flags|=1,Pe(e,t,a,s),t.child)}function ef(e,t,a,n,l){if(Va(t),t.stateNode===null){var s=gn,o=a.contextType;typeof o=="object"&&o!==null&&(s=We(o)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Tr,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},ar(t),o=a.contextType,s.context=typeof o=="object"&&o!==null?We(o):gn,s.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(wr(t,a,o,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(o=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),o!==s.state&&Tr.enqueueReplaceState(s,s.state,null),fl(t,n,s,l),cl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,g=Wa(a,m);s.props=g;var D=s.context,x=a.contextType;o=gn,typeof x=="object"&&x!==null&&(o=We(x));var R=a.getDerivedStateFromProps;x=typeof R=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,x||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||D!==o)&&Bc(t,s,n,o),ga=!1;var C=t.memoizedState;s.state=C,fl(t,n,s,l),cl(),D=t.memoizedState,m||C!==D||ga?(typeof R=="function"&&(wr(t,a,R,n),D=t.memoizedState),(g=ga||jc(t,a,g,n,C,D,o))?(x||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=D),s.props=n,s.state=D,s.context=o,n=g):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,nr(e,t),o=t.memoizedProps,x=Wa(a,o),s.props=x,R=t.pendingProps,C=s.context,D=a.contextType,g=gn,typeof D=="object"&&D!==null&&(g=We(D)),m=a.getDerivedStateFromProps,(D=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==R||C!==g)&&Bc(t,s,n,g),ga=!1,C=t.memoizedState,s.state=C,fl(t,n,s,l),cl();var T=t.memoizedState;o!==R||C!==T||ga||e!==null&&e.dependencies!==null&&is(e.dependencies)?(typeof m=="function"&&(wr(t,a,m,n),T=t.memoizedState),(x=ga||jc(t,a,x,n,C,T,g)||e!==null&&e.dependencies!==null&&is(e.dependencies))?(D||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,T,g),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,T,g)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=T),s.props=n,s.state=T,s.context=g,n=x):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,Cs(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=Ia(t,e.child,null,l),t.child=Ia(t,null,a,l)):Pe(e,t,a,l),t.memoizedState=s.state,e=t.child):e=ta(e,t,l),e}function tf(e,t,a,n){return $a(),t.flags|=256,Pe(e,t,a,n),t.child}var Rr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mr(e){return{baseLanes:e,cachePool:$u()}}function Or(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function af(e,t,a){var n=t.pendingProps,l=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(de){if(l?Sa(t):ba(),(e=Re)?(e=fd(e,kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Bt,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},a=Lu(e),a.return=t,t.child=a,Je=t,Re=null)):e=null,e===null)throw ha(t);return yo(e)?t.lanes=32:t.lanes=536870912,null}var m=n.children;return n=n.fallback,l?(ba(),l=t.mode,m=ws({mode:"hidden",children:m},l),n=Ga(n,l,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,n=t.child,n.memoizedState=Mr(a),n.childLanes=Or(e,o,a),t.memoizedState=Rr,yl(null,n)):(Sa(t),Hr(t,m))}var g=e.memoizedState;if(g!==null&&(m=g.dehydrated,m!==null)){if(s)t.flags&256?(Sa(t),t.flags&=-257,t=Lr(e,t,a)):t.memoizedState!==null?(ba(),t.child=e.child,t.flags|=128,t=null):(ba(),m=n.fallback,l=t.mode,n=ws({mode:"visible",children:n.children},l),m=Ga(m,l,a,null),m.flags|=2,n.return=t,m.return=t,n.sibling=m,t.child=n,Ia(t,e.child,null,a),n=t.child,n.memoizedState=Mr(a),n.childLanes=Or(e,o,a),t.memoizedState=Rr,t=yl(null,n));else if(Sa(t),yo(m)){if(o=m.nextSibling&&m.nextSibling.dataset,o)var D=o.dgst;o=D,n=Error(i(419)),n.stack="",n.digest=o,ll({value:n,source:null,stack:null}),t=Lr(e,t,a)}else if(Ge||bn(e,t,a,!1),o=(a&e.childLanes)!==0,Ge||o){if(o=Ae,o!==null&&(n=Yo(o,a),n!==0&&n!==g.retryLane))throw g.retryLane=n,Ya(e,n),pt(o,e,n),xr;ho(m)||Ls(),t=Lr(e,t,a)}else ho(m)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Re=Mt(m.nextSibling),Je=t,de=!0,ma=null,kt=!1,e!==null&&qu(t,e),t=Hr(t,n.children),t.flags|=4096);return t}return l?(ba(),m=n.fallback,l=t.mode,g=e.child,D=g.sibling,n=Kt(g,{mode:"hidden",children:n.children}),n.subtreeFlags=g.subtreeFlags&65011712,D!==null?m=Kt(D,m):(m=Ga(m,l,a,null),m.flags|=2),m.return=t,n.return=t,n.sibling=m,t.child=n,yl(null,n),n=t.child,m=e.child.memoizedState,m===null?m=Mr(a):(l=m.cachePool,l!==null?(g=Fe._currentValue,l=l.parent!==g?{parent:g,pool:g}:l):l=$u(),m={baseLanes:m.baseLanes|a,cachePool:l}),n.memoizedState=m,n.childLanes=Or(e,o,a),t.memoizedState=Rr,yl(e.child,n)):(Sa(t),a=e.child,e=a.sibling,a=Kt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Hr(e,t){return t=ws({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ws(e,t){return e=gt(22,e,null,t),e.lanes=0,e}function Lr(e,t,a){return Ia(t,e.child,null,a),e=Hr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ii(e.return,t,a)}function zr(e,t,a,n,l,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=l,o.treeForkCount=s)}function lf(e,t,a){var n=t.pendingProps,l=n.revealOrder,s=n.tail;n=n.children;var o=qe.current,m=(o&2)!==0;if(m?(o=o&1|2,t.flags|=128):o&=1,F(qe,o),Pe(e,t,n,a),n=de?nl:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nf(e,a,t);else if(e.tag===19)nf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&ms(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),zr(t,!1,l,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ms(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}zr(t,!0,a,null,s,n);break;case"together":zr(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function ta(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(bn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,a=Kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ur(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&is(e)))}function _m(e,t,a){switch(t.tag){case 3:V(t,t.stateNode.containerInfo),ya(t,Fe,e.memoizedState.cache),$a();break;case 27:case 5:xe(t);break;case 4:V(t,t.stateNode.containerInfo);break;case 10:ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,or(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Sa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?af(e,t,a):(Sa(t),e=ta(e,t,a),e!==null?e.sibling:null);Sa(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(bn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return lf(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(qe,qe.current),n)break;return null;case 22:return t.lanes=0,Ic(e,t,a,t.pendingProps);case 24:ya(t,Fe,e.memoizedState.cache)}return ta(e,t,a)}function sf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!Ur(e,a)&&(t.flags&128)===0)return Ge=!1,_m(e,t,a);Ge=(e.flags&131072)!==0}else Ge=!1,de&&(t.flags&1048576)!==0&&Uu(t,nl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e=="function")Yi(e)?(n=Wa(e,n),t.tag=1,t=ef(null,t,e,n,a)):(t.tag=0,t=kr(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===J){t.tag=11,t=Zc(null,t,e,n,a);break e}else if(l===le){t.tag=14,t=Xc(null,t,e,n,a);break e}}throw t=Nt(e)||e,Error(i(306,t,""))}}return t;case 0:return kr(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Wa(n,t.pendingProps),ef(e,t,n,l,a);case 3:e:{if(V(t,t.stateNode.containerInfo),e===null)throw Error(i(387));n=t.pendingProps;var s=t.memoizedState;l=s.element,nr(e,t),fl(t,n,null,a);var o=t.memoizedState;if(n=o.cache,ya(t,Fe,n),n!==s.cache&&Ji(t,[Fe],a,!0),cl(),n=o.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=tf(e,t,n,a);break e}else if(n!==l){l=Tt(Error(i(424)),t),ll(l),t=tf(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=Mt(e.firstChild),Je=t,de=!0,ma=null,kt=!0,a=Iu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if($a(),n===l){t=ta(e,t,a);break e}Pe(e,t,n,a)}t=t.child}return t;case 26:return Cs(e,t),e===null?(a=gd(t.type,null,t.pendingProps,null))?t.memoizedState=a:de||(a=t.type,e=t.pendingProps,n=Ys(re.current).createElement(a),n[Ie]=t,n[rt]=e,et(n,a,e),Ze(n),t.stateNode=n):t.memoizedState=gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&de&&(n=t.stateNode=md(t.type,t.pendingProps,re.current),Je=t,kt=!0,l=Re,xa(t.type)?(go=l,Re=Mt(n.firstChild)):Re=l),Pe(e,t,t.pendingProps.children,a),Cs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&de&&((l=n=Re)&&(n=Xm(n,t.type,t.pendingProps,kt),n!==null?(t.stateNode=n,Je=t,Re=Mt(n.firstChild),kt=!1,l=!0):l=!1),l||ha(t)),xe(t),l=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,n=s.children,fo(l,s)?n=null:o!==null&&fo(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=cr(e,t,um,null,null,a),Rl._currentValue=l),Cs(e,t),Pe(e,t,n,a),t.child;case 6:return e===null&&de&&((e=a=Re)&&(a=Km(a,t.pendingProps,kt),a!==null?(t.stateNode=a,Je=t,Re=null,e=!0):e=!1),e||ha(t)),null;case 13:return af(e,t,a);case 4:return V(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ia(t,null,n,a):Pe(e,t,n,a),t.child;case 11:return Zc(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ya(t,t.type,n.value),Pe(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Va(t),l=We(l),n=n(l),t.flags|=1,Pe(e,t,n,a),t.child;case 14:return Xc(e,t,t.type,t.pendingProps,a);case 15:return Kc(e,t,t.type,t.pendingProps,a);case 19:return lf(e,t,a);case 31:return gm(e,t,a);case 22:return Ic(e,t,a,t.pendingProps);case 24:return Va(t),n=We(Fe),e===null?(l=er(),l===null&&(l=Ae,s=Wi(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=a),l=s),t.memoizedState={parent:n,cache:l},ar(t),ya(t,Fe,l)):((e.lanes&a)!==0&&(nr(e,t),fl(t,null,null,a),cl()),l=e.memoizedState,s=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ya(t,Fe,n)):(n=s.cache,ya(t,Fe,n),n!==l.cache&&Ji(t,[Fe],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function aa(e){e.flags|=4}function qr(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Of())e.flags|=8192;else throw Ka=cs,tr}else e.flags&=-16777217}function rf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ed(t))if(Of())e.flags|=8192;else throw Ka=cs,tr}function Ts(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?jo():536870912,e.lanes|=t,On|=t)}function gl(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function vm(e,t,a){var n=t.pendingProps;switch(Vi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wt(Fe),Q(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Sn(t)?aa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xi())),Me(t),null;case 26:var l=t.type,s=t.memoizedState;return e===null?(aa(t),s!==null?(Me(t),rf(t,s)):(Me(t),qr(t,l,null,n,a))):s?s!==e.memoizedState?(aa(t),Me(t),rf(t,s)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&aa(t),Me(t),qr(t,l,e,n,a)),null;case 27:if(Be(t),a=re.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&aa(t);else{if(!n){if(t.stateNode===null)throw Error(i(166));return Me(t),null}e=$.current,Sn(t)?ju(t):(e=md(l,n,a),t.stateNode=e,aa(t))}return Me(t),null;case 5:if(Be(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&aa(t);else{if(!n){if(t.stateNode===null)throw Error(i(166));return Me(t),null}if(s=$.current,Sn(t))ju(t);else{var o=Ys(re.current);switch(s){case 1:s=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=o.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?o.createElement(l,{is:n.is}):o.createElement(l)}}s[Ie]=t,s[rt]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)s.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=s;e:switch(et(s,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&aa(t)}}return Me(t),qr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&aa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(i(166));if(e=re.current,Sn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Je,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||nd(e.nodeValue,a)),e||ha(t,!0)}else e=Ys(e).createTextNode(n),e[Ie]=t,t.stateNode=e}return Me(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Sn(t),a!==null){if(e===null){if(!n)throw Error(i(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(557));e[Ie]=t}else $a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(vt(t),t):(vt(t),null);if((t.flags&128)!==0)throw Error(i(558))}return Me(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Sn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(i(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(i(317));l[Ie]=t}else $a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),l=!1}else l=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(vt(t),t):(vt(t),null)}return vt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ts(t,t.updateQueue),Me(t),null);case 4:return Q(),e===null&&io(t.stateNode.containerInfo),Me(t),null;case 10:return Wt(t.type),Me(t),null;case 19:if(M(qe),n=t.memoizedState,n===null)return Me(t),null;if(l=(t.flags&128)!==0,s=n.rendering,s===null)if(l)gl(n,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ms(e),s!==null){for(t.flags|=128,gl(n,!1),e=s.updateQueue,t.updateQueue=e,Ts(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Hu(a,e),a=a.sibling;return F(qe,qe.current&1|2),de&&It(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&lt()>Ms&&(t.flags|=128,l=!0,gl(n,!1),t.lanes=4194304)}else{if(!l)if(e=ms(s),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ts(t,e),gl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!de)return Me(t),null}else 2*lt()-n.renderingStartTime>Ms&&a!==536870912&&(t.flags|=128,l=!0,gl(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(e=n.last,e!==null?e.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=lt(),e.sibling=null,a=qe.current,F(qe,l?a&1|2:a&1),de&&It(t,n.treeForkCount),e):(Me(t),null);case 22:case 23:return vt(t),rr(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&Ts(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&M(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Wt(Fe),Me(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Sm(e,t){switch(Vi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(Fe),Q(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Be(t),null;case 31:if(t.memoizedState!==null){if(vt(t),t.alternate===null)throw Error(i(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(qe),null;case 4:return Q(),null;case 10:return Wt(t.type),null;case 22:case 23:return vt(t),rr(),e!==null&&M(Za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(Fe),null;case 25:return null;default:return null}}function of(e,t){switch(Vi(t),t.tag){case 3:Wt(Fe),Q();break;case 26:case 27:case 5:Be(t);break;case 4:Q();break;case 31:t.memoizedState!==null&&vt(t);break;case 13:vt(t);break;case 19:M(qe);break;case 10:Wt(t.type);break;case 22:case 23:vt(t),rr(),e!==null&&M(Za);break;case 24:Wt(Fe)}}function _l(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var s=a.create,o=a.inst;n=s(),o.destroy=n}a=a.next}while(a!==l)}}catch(m){Ne(t,t.return,m)}}function Ea(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var s=l.next;n=s;do{if((n.tag&e)===e){var o=n.inst,m=o.destroy;if(m!==void 0){o.destroy=void 0,l=t;var g=a,D=m;try{D()}catch(x){Ne(l,g,x)}}}n=n.next}while(n!==s)}}catch(x){Ne(t,t.return,x)}}function uf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Wu(t,a)}catch(n){Ne(e,e.return,n)}}}function cf(e,t,a){a.props=Wa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ne(e,t,n)}}function vl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){Ne(e,t,l)}}function Yt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){Ne(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ne(e,t,l)}else a.current=null}function ff(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){Ne(e,e.return,l)}}function jr(e,t,a){try{var n=e.stateNode;Ym(n,e.type,a,t),n[rt]=t}catch(l){Ne(e,e.return,l)}}function df(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xa(e.type)||e.tag===4}function Br(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Zt));else if(n!==4&&(n===27&&xa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Fr(e,t,a),e=e.sibling;e!==null;)Fr(e,t,a),e=e.sibling}function As(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(As(e,t,a),e=e.sibling;e!==null;)As(e,t,a),e=e.sibling}function pf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);et(t,n,a),t[Ie]=e,t[rt]=a}catch(s){Ne(e,e.return,s)}}var na=!1,$e=!1,Yr=!1,mf=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function bm(e,t){if(e=e.containerInfo,uo=Ks,e=Cu(e),Li(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var o=0,m=-1,g=-1,D=0,x=0,R=e,C=null;t:for(;;){for(var T;R!==a||l!==0&&R.nodeType!==3||(m=o+l),R!==s||n!==0&&R.nodeType!==3||(g=o+n),R.nodeType===3&&(o+=R.nodeValue.length),(T=R.firstChild)!==null;)C=R,R=T;for(;;){if(R===e)break t;if(C===a&&++D===l&&(m=o),C===s&&++x===n&&(g=o),(T=R.nextSibling)!==null)break;R=C,C=R.parentNode}R=T}a=m===-1||g===-1?null:{start:m,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(co={focusedElem:e,selectionRange:a},Ks=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,l=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var G=Wa(a.type,l);e=n.getSnapshotBeforeUpdate(G,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(W){Ne(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)mo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function hf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),n&4&&_l(5,a);break;case 1:if(sa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Ne(a,a.return,o)}else{var l=Wa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ne(a,a.return,o)}}n&64&&uf(a),n&512&&vl(a,a.return);break;case 3:if(sa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Wu(e,t)}catch(o){Ne(a,a.return,o)}}break;case 27:t===null&&n&4&&pf(a);case 26:case 5:sa(e,a),t===null&&n&4&&ff(a),n&512&&vl(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),n&4&&_f(e,a);break;case 13:sa(e,a),n&4&&vf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=km.bind(null,a),Im(e,a))));break;case 22:if(n=a.memoizedState!==null||na,!n){t=t!==null&&t.memoizedState!==null||$e,l=na;var s=$e;na=n,($e=t)&&!s?ia(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),na=l,$e=s}break;case 30:break;default:sa(e,a)}}function yf(e){var t=e.alternate;t!==null&&(e.alternate=null,yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_i(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,ut=!1;function la(e,t,a){for(a=a.child;a!==null;)gf(e,t,a),a=a.sibling}function gf(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Gn,a)}catch{}switch(a.tag){case 26:$e||Yt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Yt(a,t);var n=Oe,l=ut;xa(a.type)&&(Oe=a.stateNode,ut=!1),la(e,t,a),Al(a.stateNode),Oe=n,ut=l;break;case 5:$e||Yt(a,t);case 6:if(n=Oe,l=ut,Oe=null,la(e,t,a),Oe=n,ut=l,Oe!==null)if(ut)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(a.stateNode)}catch(s){Ne(a,t,s)}else try{Oe.removeChild(a.stateNode)}catch(s){Ne(a,t,s)}break;case 18:Oe!==null&&(ut?(e=Oe,ud(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fn(e)):ud(Oe,a.stateNode));break;case 4:n=Oe,l=ut,Oe=a.stateNode.containerInfo,ut=!0,la(e,t,a),Oe=n,ut=l;break;case 0:case 11:case 14:case 15:Ea(2,a,t),$e||Ea(4,a,t),la(e,t,a);break;case 1:$e||(Yt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&cf(a,t,n)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:$e=(n=$e)||a.memoizedState!==null,la(e,t,a),$e=n;break;default:la(e,t,a)}}function _f(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fn(e)}catch(a){Ne(t,t.return,a)}}}function vf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fn(e)}catch(a){Ne(t,t.return,a)}}function Em(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mf),t;default:throw Error(i(435,e.tag))}}function xs(e,t){var a=Em(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=Rm.bind(null,e,n);n.then(l,l)}})}function ct(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],s=e,o=t,m=o;e:for(;m!==null;){switch(m.tag){case 27:if(xa(m.type)){Oe=m.stateNode,ut=!1;break e}break;case 5:Oe=m.stateNode,ut=!1;break e;case 3:case 4:Oe=m.stateNode.containerInfo,ut=!0;break e}m=m.return}if(Oe===null)throw Error(i(160));gf(s,o,l),Oe=null,ut=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sf(t,e),t=t.sibling}var qt=null;function Sf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),ft(e),n&4&&(Ea(3,e,e.return),_l(3,e),Ea(5,e,e.return));break;case 1:ct(t,e),ft(e),n&512&&($e||a===null||Yt(a,a.return)),n&64&&na&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=qt;if(ct(t,e),ft(e),n&512&&($e||a===null||Yt(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Vn]||s[Ie]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),et(s,n,a),s[Ie]=e,Ze(s),n=s;break e;case"link":var o=Sd("link","href",l).get(n+(a.href||""));if(o){for(var m=0;m<o.length;m++)if(s=o[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(m,1);break t}}s=l.createElement(n),et(s,n,a),l.head.appendChild(s);break;case"meta":if(o=Sd("meta","content",l).get(n+(a.content||""))){for(m=0;m<o.length;m++)if(s=o[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(m,1);break t}}s=l.createElement(n),et(s,n,a),l.head.appendChild(s);break;default:throw Error(i(468,n))}s[Ie]=e,Ze(s),n=s}e.stateNode=n}else bd(l,e.type,e.stateNode);else e.stateNode=vd(l,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?bd(l,e.type,e.stateNode):vd(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&jr(e,e.memoizedProps,a.memoizedProps)}break;case 27:ct(t,e),ft(e),n&512&&($e||a===null||Yt(a,a.return)),a!==null&&n&4&&jr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ct(t,e),ft(e),n&512&&($e||a===null||Yt(a,a.return)),e.flags&32){l=e.stateNode;try{cn(l,"")}catch(G){Ne(e,e.return,G)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,jr(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Yr=!0);break;case 6:if(ct(t,e),ft(e),n&4){if(e.stateNode===null)throw Error(i(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(G){Ne(e,e.return,G)}}break;case 3:if(Qs=null,l=qt,qt=Gs(t.containerInfo),ct(t,e),qt=l,ft(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(G){Ne(e,e.return,G)}Yr&&(Yr=!1,bf(e));break;case 4:n=qt,qt=Gs(e.stateNode.containerInfo),ct(t,e),ft(e),qt=n;break;case 12:ct(t,e),ft(e);break;case 31:ct(t,e),ft(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,xs(e,n)));break;case 13:ct(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rs=lt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,xs(e,n)));break;case 22:l=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,D=na,x=$e;if(na=D||l,$e=x||g,ct(t,e),$e=x,na=D,ft(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||g||na||$e||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(s=g.stateNode,l)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{m=g.stateNode;var R=g.memoizedProps.style,C=R!=null&&R.hasOwnProperty("display")?R.display:null;m.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(G){Ne(g,g.return,G)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=l?"":g.memoizedProps}catch(G){Ne(g,g.return,G)}}}else if(t.tag===18){if(a===null){g=t;try{var T=g.stateNode;l?cd(T,!0):cd(g.stateNode,!1)}catch(G){Ne(g,g.return,G)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,xs(e,a))));break;case 19:ct(t,e),ft(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,xs(e,n)));break;case 30:break;case 21:break;default:ct(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(df(n)){a=n;break}n=n.return}if(a==null)throw Error(i(160));switch(a.tag){case 27:var l=a.stateNode,s=Br(e);As(e,s,l);break;case 5:var o=a.stateNode;a.flags&32&&(cn(o,""),a.flags&=-33);var m=Br(e);As(e,m,o);break;case 3:case 4:var g=a.stateNode.containerInfo,D=Br(e);Fr(e,D,g);break;default:throw Error(i(161))}}catch(x){Ne(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hf(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ea(4,t,t.return),Pa(t);break;case 1:Yt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&cf(t,t.return,a),Pa(t);break;case 27:Al(t.stateNode);case 26:case 5:Yt(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function ia(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,s=t,o=s.flags;switch(s.tag){case 0:case 11:case 15:ia(l,s,a),_l(4,s);break;case 1:if(ia(l,s,a),n=s,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){Ne(n,n.return,D)}if(n=s,l=n.updateQueue,l!==null){var m=n.stateNode;try{var g=l.shared.hiddenCallbacks;if(g!==null)for(l.shared.hiddenCallbacks=null,l=0;l<g.length;l++)Ju(g[l],m)}catch(D){Ne(n,n.return,D)}}a&&o&64&&uf(s),vl(s,s.return);break;case 27:pf(s);case 26:case 5:ia(l,s,a),a&&n===null&&o&4&&ff(s),vl(s,s.return);break;case 12:ia(l,s,a);break;case 31:ia(l,s,a),a&&o&4&&_f(l,s);break;case 13:ia(l,s,a),a&&o&4&&vf(l,s);break;case 22:s.memoizedState===null&&ia(l,s,a),vl(s,s.return);break;case 30:break;default:ia(l,s,a)}t=t.sibling}}function Gr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&sl(a))}function $r(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sl(e))}function jt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ef(e,t,a,n),t=t.sibling}function Ef(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:jt(e,t,a,n),l&2048&&_l(9,t);break;case 1:jt(e,t,a,n);break;case 3:jt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sl(e)));break;case 12:if(l&2048){jt(e,t,a,n),e=t.stateNode;try{var s=t.memoizedProps,o=s.id,m=s.onPostCommit;typeof m=="function"&&m(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Ne(t,t.return,g)}}else jt(e,t,a,n);break;case 31:jt(e,t,a,n);break;case 13:jt(e,t,a,n);break;case 23:break;case 22:s=t.stateNode,o=t.alternate,t.memoizedState!==null?s._visibility&2?jt(e,t,a,n):Sl(e,t):s._visibility&2?jt(e,t,a,n):(s._visibility|=2,kn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Gr(o,t);break;case 24:jt(e,t,a,n),l&2048&&$r(t.alternate,t);break;default:jt(e,t,a,n)}}function kn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,o=t,m=a,g=n,D=o.flags;switch(o.tag){case 0:case 11:case 15:kn(s,o,m,g,l),_l(8,o);break;case 23:break;case 22:var x=o.stateNode;o.memoizedState!==null?x._visibility&2?kn(s,o,m,g,l):Sl(s,o):(x._visibility|=2,kn(s,o,m,g,l)),l&&D&2048&&Gr(o.alternate,o);break;case 24:kn(s,o,m,g,l),l&&D&2048&&$r(o.alternate,o);break;default:kn(s,o,m,g,l)}t=t.sibling}}function Sl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:Sl(a,n),l&2048&&Gr(n.alternate,n);break;case 24:Sl(a,n),l&2048&&$r(n.alternate,n);break;default:Sl(a,n)}t=t.sibling}}var bl=8192;function Rn(e,t,a){if(e.subtreeFlags&bl)for(e=e.child;e!==null;)Nf(e,t,a),e=e.sibling}function Nf(e,t,a){switch(e.tag){case 26:Rn(e,t,a),e.flags&bl&&e.memoizedState!==null&&oh(a,qt,e.memoizedState,e.memoizedProps);break;case 5:Rn(e,t,a);break;case 3:case 4:var n=qt;qt=Gs(e.stateNode.containerInfo),Rn(e,t,a),qt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=bl,bl=16777216,Rn(e,t,a),bl=n):Rn(e,t,a));break;default:Rn(e,t,a)}}function Df(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function El(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Xe=n,wf(n,e)}Df(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cf(e),e=e.sibling}function Cf(e){switch(e.tag){case 0:case 11:case 15:El(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:El(e);break;case 12:El(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ks(e)):El(e);break;default:El(e)}}function ks(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Xe=n,wf(n,e)}Df(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ea(8,t,t.return),ks(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ks(t));break;default:ks(t)}e=e.sibling}}function wf(e,t){for(;Xe!==null;){var a=Xe;switch(a.tag){case 0:case 11:case 15:Ea(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:sl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Xe=n;else e:for(a=e;Xe!==null;){n=Xe;var l=n.sibling,s=n.return;if(yf(n),n===a){Xe=null;break e}if(l!==null){l.return=s,Xe=l;break e}Xe=s}}}var Nm={getCacheForType:function(e){var t=We(Fe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return We(Fe).controller.signal}},Dm=typeof WeakMap=="function"?WeakMap:Map,ve=0,Ae=null,oe=null,ce=0,Ee=0,St=null,Na=!1,Mn=!1,Qr=!1,ra=0,Ue=0,Da=0,en=0,Vr=0,bt=0,On=0,Nl=null,dt=null,Zr=!1,Rs=0,Tf=0,Ms=1/0,Os=null,Ca=null,Ve=0,wa=null,Hn=null,oa=0,Xr=0,Kr=null,Af=null,Dl=0,Ir=null;function Et(){return(ve&2)!==0&&ce!==0?ce&-ce:A.T!==null?ao():Go()}function xf(){if(bt===0)if((ce&536870912)===0||de){var e=Fl;Fl<<=1,(Fl&3932160)===0&&(Fl=262144),bt=e}else bt=536870912;return e=_t.current,e!==null&&(e.flags|=32),bt}function pt(e,t,a){(e===Ae&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Ln(e,0),Ta(e,ce,bt,!1)),Qn(e,a),((ve&2)===0||e!==Ae)&&(e===Ae&&((ve&2)===0&&(en|=a),Ue===4&&Ta(e,ce,bt,!1)),Gt(e))}function kf(e,t,a){if((ve&6)!==0)throw Error(i(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||$n(e,t),l=n?Tm(e,t):Wr(e,t,!0),s=n;do{if(l===0){Mn&&!n&&Ta(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!Cm(a)){l=Wr(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var m=e;l=Nl;var g=m.current.memoizedState.isDehydrated;if(g&&(Ln(m,o).flags|=256),o=Wr(m,o,!1),o!==2){if(Qr&&!g){m.errorRecoveryDisabledLanes|=s,en|=s,l=4;break e}s=dt,dt=l,s!==null&&(dt===null?dt=s:dt.push.apply(dt,s))}l=o}if(s=!1,l!==2)continue}}if(l===1){Ln(e,0),Ta(e,t,0,!0);break}e:{switch(n=e,s=l,s){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Ta(n,t,bt,!Na);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(l=Rs+300-lt(),10<l)){if(Ta(n,t,bt,!Na),Gl(n,0,!0)!==0)break e;oa=t,n.timeoutHandle=rd(Rf.bind(null,n,a,dt,Os,Zr,t,bt,en,On,Na,s,"Throttled",-0,0),l);break e}Rf(n,a,dt,Os,Zr,t,bt,en,On,Na,s,null,-0,0)}}break}while(!0);Gt(e)}function Rf(e,t,a,n,l,s,o,m,g,D,x,R,C,T){if(e.timeoutHandle=-1,R=t.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},Nf(t,s,R);var G=(s&62914560)===s?Rs-lt():(s&4194048)===s?Tf-lt():0;if(G=uh(R,G),G!==null){oa=s,e.cancelPendingCommit=G(jf.bind(null,e,t,s,a,n,l,o,m,g,x,R,null,C,T)),Ta(e,s,o,!D);return}}jf(e,t,s,a,n,l,o,m,g)}function Cm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],s=l.getSnapshot;l=l.value;try{if(!yt(s(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ta(e,t,a,n){t&=~Vr,t&=~en,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var s=31-ht(l),o=1<<s;n[s]=-1,l&=~o}a!==0&&Bo(e,a,t)}function Hs(){return(ve&6)===0?(Cl(0),!1):!0}function Jr(){if(oe!==null){if(Ee===0)var e=oe.return;else e=oe,Jt=Qa=null,pr(e),Cn=null,rl=0,e=oe;for(;e!==null;)of(e.alternate,e),e=e.return;oe=null}}function Ln(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Qm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),oa=0,Jr(),Ae=e,oe=a=Kt(e.current,null),ce=t,Ee=0,St=null,Na=!1,Mn=$n(e,t),Qr=!1,On=bt=Vr=en=Da=Ue=0,dt=Nl=null,Zr=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-ht(n),s=1<<l;t|=e[l],n&=~s}return ra=t,ts(),a}function Mf(e,t){se=null,A.H=hl,t===Dn||t===us?(t=Zu(),Ee=3):t===tr?(t=Zu(),Ee=4):Ee=t===xr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,St=t,oe===null&&(Ue=1,Ns(e,Tt(t,e.current)))}function Of(){var e=_t.current;return e===null?!0:(ce&4194048)===ce?Rt===null:(ce&62914560)===ce||(ce&536870912)!==0?e===Rt:!1}function Hf(){var e=A.H;return A.H=hl,e===null?hl:e}function Lf(){var e=A.A;return A.A=Nm,e}function Ls(){Ue=4,Na||(ce&4194048)!==ce&&_t.current!==null||(Mn=!0),(Da&134217727)===0&&(en&134217727)===0||Ae===null||Ta(Ae,ce,bt,!1)}function Wr(e,t,a){var n=ve;ve|=2;var l=Hf(),s=Lf();(Ae!==e||ce!==t)&&(Os=null,Ln(e,t)),t=!1;var o=Ue;e:do try{if(Ee!==0&&oe!==null){var m=oe,g=St;switch(Ee){case 8:Jr(),o=6;break e;case 3:case 2:case 9:case 6:_t.current===null&&(t=!0);var D=Ee;if(Ee=0,St=null,zn(e,m,g,D),a&&Mn){o=0;break e}break;default:D=Ee,Ee=0,St=null,zn(e,m,g,D)}}wm(),o=Ue;break}catch(x){Mf(e,x)}while(!0);return t&&e.shellSuspendCounter++,Jt=Qa=null,ve=n,A.H=l,A.A=s,oe===null&&(Ae=null,ce=0,ts()),o}function wm(){for(;oe!==null;)zf(oe)}function Tm(e,t){var a=ve;ve|=2;var n=Hf(),l=Lf();Ae!==e||ce!==t?(Os=null,Ms=lt()+500,Ln(e,t)):Mn=$n(e,t);e:do try{if(Ee!==0&&oe!==null){t=oe;var s=St;t:switch(Ee){case 1:Ee=0,St=null,zn(e,t,s,1);break;case 2:case 9:if(Qu(s)){Ee=0,St=null,Uf(t);break}t=function(){Ee!==2&&Ee!==9||Ae!==e||(Ee=7),Gt(e)},s.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:Qu(s)?(Ee=0,St=null,Uf(t)):(Ee=0,St=null,zn(e,t,s,7));break;case 5:var o=null;switch(oe.tag){case 26:o=oe.memoizedState;case 5:case 27:var m=oe;if(o?Ed(o):m.stateNode.complete){Ee=0,St=null;var g=m.sibling;if(g!==null)oe=g;else{var D=m.return;D!==null?(oe=D,zs(D)):oe=null}break t}}Ee=0,St=null,zn(e,t,s,5);break;case 6:Ee=0,St=null,zn(e,t,s,6);break;case 8:Jr(),Ue=6;break e;default:throw Error(i(462))}}Am();break}catch(x){Mf(e,x)}while(!0);return Jt=Qa=null,A.H=n,A.A=l,ve=a,oe!==null?0:(Ae=null,ce=0,ts(),Ue)}function Am(){for(;oe!==null&&!zo();)zf(oe)}function zf(e){var t=sf(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?zs(e):oe=t}function Uf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Pc(a,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=Pc(a,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:pr(t);default:of(a,t),t=oe=Hu(t,ra),t=sf(a,t,ra)}e.memoizedProps=e.pendingProps,t===null?zs(e):oe=t}function zn(e,t,a,n){Jt=Qa=null,pr(t),Cn=null,rl=0;var l=t.return;try{if(ym(e,l,t,a,ce)){Ue=1,Ns(e,Tt(a,e.current)),oe=null;return}}catch(s){if(l!==null)throw oe=l,s;Ue=1,Ns(e,Tt(a,e.current)),oe=null;return}t.flags&32768?(de||n===1?e=!0:Mn||(ce&536870912)!==0?e=!1:(Na=e=!0,(n===2||n===9||n===3||n===6)&&(n=_t.current,n!==null&&n.tag===13&&(n.flags|=16384))),qf(t,e)):zs(t)}function zs(e){var t=e;do{if((t.flags&32768)!==0){qf(t,Na);return}e=t.return;var a=vm(t.alternate,t,ra);if(a!==null){oe=a;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);Ue===0&&(Ue=5)}function qf(e,t){do{var a=Sm(e.alternate,e);if(a!==null){a.flags&=32767,oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=a}while(e!==null);Ue=6,oe=null}function jf(e,t,a,n,l,s,o,m,g){e.cancelPendingCommit=null;do Us();while(Ve!==0);if((ve&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(s=t.lanes|t.childLanes,s|=Bi,rp(e,a,s,o,m,g),e===Ae&&(oe=Ae=null,ce=0),Hn=t,wa=e,oa=a,Xr=s,Kr=l,Af=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mm(jl,function(){return $f(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=A.T,A.T=null,l=j.p,j.p=2,o=ve,ve|=4;try{bm(e,t,a)}finally{ve=o,j.p=l,A.T=n}}Ve=1,Bf(),Ff(),Yf()}}function Bf(){if(Ve===1){Ve=0;var e=wa,t=Hn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var n=j.p;j.p=2;var l=ve;ve|=4;try{Sf(t,e);var s=co,o=Cu(e.containerInfo),m=s.focusedElem,g=s.selectionRange;if(o!==m&&m&&m.ownerDocument&&Du(m.ownerDocument.documentElement,m)){if(g!==null&&Li(m)){var D=g.start,x=g.end;if(x===void 0&&(x=D),"selectionStart"in m)m.selectionStart=D,m.selectionEnd=Math.min(x,m.value.length);else{var R=m.ownerDocument||document,C=R&&R.defaultView||window;if(C.getSelection){var T=C.getSelection(),G=m.textContent.length,W=Math.min(g.start,G),we=g.end===void 0?W:Math.min(g.end,G);!T.extend&&W>we&&(o=we,we=W,W=o);var S=Nu(m,W),_=Nu(m,we);if(S&&_&&(T.rangeCount!==1||T.anchorNode!==S.node||T.anchorOffset!==S.offset||T.focusNode!==_.node||T.focusOffset!==_.offset)){var N=R.createRange();N.setStart(S.node,S.offset),T.removeAllRanges(),W>we?(T.addRange(N),T.extend(_.node,_.offset)):(N.setEnd(_.node,_.offset),T.addRange(N))}}}}for(R=[],T=m;T=T.parentNode;)T.nodeType===1&&R.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<R.length;m++){var k=R[m];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}Ks=!!uo,co=uo=null}finally{ve=l,j.p=n,A.T=a}}e.current=t,Ve=2}}function Ff(){if(Ve===2){Ve=0;var e=wa,t=Hn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var n=j.p;j.p=2;var l=ve;ve|=4;try{hf(e,t.alternate,t)}finally{ve=l,j.p=n,A.T=a}}Ve=3}}function Yf(){if(Ve===4||Ve===3){Ve=0,di();var e=wa,t=Hn,a=oa,n=Af;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,Hn=wa=null,Gf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Ca=null),yi(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Gn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=A.T,l=j.p,j.p=2,A.T=null;try{for(var s=e.onRecoverableError,o=0;o<n.length;o++){var m=n[o];s(m.value,{componentStack:m.stack})}}finally{A.T=t,j.p=l}}(oa&3)!==0&&Us(),Gt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Ir?Dl++:(Dl=0,Ir=e):Dl=0,Cl(0)}}function Gf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sl(t)))}function Us(){return Bf(),Ff(),Yf(),$f()}function $f(){if(Ve!==5)return!1;var e=wa,t=Xr;Xr=0;var a=yi(oa),n=A.T,l=j.p;try{j.p=32>a?32:a,A.T=null,a=Kr,Kr=null;var s=wa,o=oa;if(Ve=0,Hn=wa=null,oa=0,(ve&6)!==0)throw Error(i(331));var m=ve;if(ve|=4,Cf(s.current),Ef(s,s.current,o,a),ve=m,Cl(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Gn,s)}catch{}return!0}finally{j.p=l,A.T=n,Gf(e,t)}}function Qf(e,t,a){t=Tt(a,t),t=Ar(e.stateNode,t,2),e=va(e,t,2),e!==null&&(Qn(e,2),Gt(e))}function Ne(e,t,a){if(e.tag===3)Qf(e,e,a);else for(;t!==null;){if(t.tag===3){Qf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ca===null||!Ca.has(n))){e=Tt(a,e),a=Qc(2),n=va(t,a,2),n!==null&&(Vc(a,n,t,e),Qn(n,2),Gt(n));break}}t=t.return}}function Pr(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Dm;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Qr=!0,l.add(a),e=xm.bind(null,e,t,a),t.then(e,e))}function xm(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ae===e&&(ce&a)===a&&(Ue===4||Ue===3&&(ce&62914560)===ce&&300>lt()-Rs?(ve&2)===0&&Ln(e,0):Vr|=a,On===ce&&(On=0)),Gt(e)}function Vf(e,t){t===0&&(t=jo()),e=Ya(e,t),e!==null&&(Qn(e,t),Gt(e))}function km(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vf(e,a)}function Rm(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(i(314))}n!==null&&n.delete(t),Vf(e,a)}function Mm(e,t){return zt(e,t)}var qs=null,Un=null,eo=!1,js=!1,to=!1,Aa=0;function Gt(e){e!==Un&&e.next===null&&(Un===null?qs=Un=e:Un=Un.next=e),js=!0,eo||(eo=!0,Hm())}function Cl(e,t){if(!to&&js){to=!0;do for(var a=!1,n=qs;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var s=0;else{var o=n.suspendedLanes,m=n.pingedLanes;s=(1<<31-ht(42|e)+1)-1,s&=l&~(o&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,If(n,s))}else s=ce,s=Gl(n,n===Ae?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||$n(n,s)||(a=!0,If(n,s));n=n.next}while(a);to=!1}}function Om(){Zf()}function Zf(){js=eo=!1;var e=0;Aa!==0&&$m()&&(e=Aa);for(var t=lt(),a=null,n=qs;n!==null;){var l=n.next,s=Xf(n,t);s===0?(n.next=null,a===null?qs=l:a.next=l,l===null&&(Un=a)):(a=n,(e!==0||(s&3)!==0)&&(js=!0)),n=l}Ve!==0&&Ve!==5||Cl(e),Aa!==0&&(Aa=0)}function Xf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var o=31-ht(s),m=1<<o,g=l[o];g===-1?((m&a)===0||(m&n)!==0)&&(l[o]=ip(m,t)):g<=t&&(e.expiredLanes|=m),s&=~m}if(t=Ae,a=ce,a=Gl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&La(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$n(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&La(n),yi(a)){case 2:case 8:a=Uo;break;case 32:a=jl;break;case 268435456:a=qo;break;default:a=jl}return n=Kf.bind(null,e),a=zt(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&La(n),e.callbackPriority=2,e.callbackNode=null,2}function Kf(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Us()&&e.callbackNode!==a)return null;var n=ce;return n=Gl(e,e===Ae?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(kf(e,n,t),Xf(e,lt()),e.callbackNode!=null&&e.callbackNode===a?Kf.bind(null,e):null)}function If(e,t){if(Us())return null;kf(e,t,!0)}function Hm(){Vm(function(){(ve&6)!==0?zt(za,Om):Zf()})}function ao(){if(Aa===0){var e=En;e===0&&(e=Bl,Bl<<=1,(Bl&261888)===0&&(Bl=256)),Aa=e}return Aa}function Jf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zl(""+e)}function Wf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Lm(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var s=Jf((l[rt]||null).action),o=n.submitter;o&&(t=(t=o[rt]||null)?Jf(t.formAction):o.getAttribute("formAction"),t!==null&&(s=t,o=null));var m=new Jl("action","action",null,n,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Aa!==0){var g=o?Wf(l,o):new FormData(l);Er(a,{pending:!0,data:g,method:l.method,action:s},null,g)}}else typeof s=="function"&&(m.preventDefault(),g=o?Wf(l,o):new FormData(l),Er(a,{pending:!0,data:g,method:l.method,action:s},s,g))},currentTarget:l}]})}}for(var no=0;no<ji.length;no++){var lo=ji[no],zm=lo.toLowerCase(),Um=lo[0].toUpperCase()+lo.slice(1);Ut(zm,"on"+Um)}Ut(Au,"onAnimationEnd"),Ut(xu,"onAnimationIteration"),Ut(ku,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(Pp,"onTransitionRun"),Ut(em,"onTransitionStart"),Ut(tm,"onTransitionCancel"),Ut(Ru,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function Pf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var o=n.length-1;0<=o;o--){var m=n[o],g=m.instance,D=m.currentTarget;if(m=m.listener,g!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=D;try{s(l)}catch(x){es(x)}l.currentTarget=null,s=g}else for(o=0;o<n.length;o++){if(m=n[o],g=m.instance,D=m.currentTarget,m=m.listener,g!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=D;try{s(l)}catch(x){es(x)}l.currentTarget=null,s=g}}}}function ue(e,t){var a=t[gi];a===void 0&&(a=t[gi]=new Set);var n=e+"__bubble";a.has(n)||(ed(t,e,2,!1),a.add(n))}function so(e,t,a){var n=0;t&&(n|=4),ed(a,e,n,t)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function io(e){if(!e[Bs]){e[Bs]=!0,Vo.forEach(function(a){a!=="selectionchange"&&(qm.has(a)||so(a,!1,e),so(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bs]||(t[Bs]=!0,so("selectionchange",!1,t))}}function ed(e,t,a,n){switch(xd(t)){case 2:var l=dh;break;case 8:l=ph;break;default:l=Eo}a=l.bind(null,t,a,e),l=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function ro(e,t,a,n,l){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var m=n.stateNode.containerInfo;if(m===l)break;if(o===4)for(o=n.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;m!==null;){if(o=ln(m),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){n=s=o;continue e}m=m.parentNode}}n=n.return}lu(function(){var D=s,x=Di(a),R=[];e:{var C=Mu.get(e);if(C!==void 0){var T=Jl,G=e;switch(e){case"keypress":if(Kl(a)===0)break e;case"keydown":case"keyup":T=Rp;break;case"focusin":G="focus",T=ki;break;case"focusout":G="blur",T=ki;break;case"beforeblur":case"afterblur":T=ki;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Hp;break;case Au:case xu:case ku:T=Ep;break;case Ru:T=zp;break;case"scroll":case"scrollend":T=gp;break;case"wheel":T=qp;break;case"copy":case"cut":case"paste":T=Dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=uu;break;case"toggle":case"beforetoggle":T=Bp}var W=(t&4)!==0,we=!W&&(e==="scroll"||e==="scrollend"),S=W?C!==null?C+"Capture":null:C;W=[];for(var _=D,N;_!==null;){var k=_;if(N=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||N===null||S===null||(k=Xn(_,S),k!=null&&W.push(Tl(_,k,N))),we)break;_=_.return}0<W.length&&(C=new T(C,G,null,a,x),R.push({event:C,listeners:W}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",C&&a!==Ni&&(G=a.relatedTarget||a.fromElement)&&(ln(G)||G[nn]))break e;if((T||C)&&(C=x.window===x?x:(C=x.ownerDocument)?C.defaultView||C.parentWindow:window,T?(G=a.relatedTarget||a.toElement,T=D,G=G?ln(G):null,G!==null&&(we=f(G),W=G.tag,G!==we||W!==5&&W!==27&&W!==6)&&(G=null)):(T=null,G=D),T!==G)){if(W=ru,k="onMouseLeave",S="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(W=uu,k="onPointerLeave",S="onPointerEnter",_="pointer"),we=T==null?C:Zn(T),N=G==null?C:Zn(G),C=new W(k,_+"leave",T,a,x),C.target=we,C.relatedTarget=N,k=null,ln(x)===D&&(W=new W(S,_+"enter",G,a,x),W.target=N,W.relatedTarget=we,k=W),we=k,T&&G)t:{for(W=jm,S=T,_=G,N=0,k=S;k;k=W(k))N++;k=0;for(var K=_;K;K=W(K))k++;for(;0<N-k;)S=W(S),N--;for(;0<k-N;)_=W(_),k--;for(;N--;){if(S===_||_!==null&&S===_.alternate){W=S;break t}S=W(S),_=W(_)}W=null}else W=null;T!==null&&td(R,C,T,W,!1),G!==null&&we!==null&&td(R,we,G,W,!0)}}e:{if(C=D?Zn(D):window,T=C.nodeName&&C.nodeName.toLowerCase(),T==="select"||T==="input"&&C.type==="file")var ge=gu;else if(hu(C))if(_u)ge=Ip;else{ge=Xp;var Z=Zp}else T=C.nodeName,!T||T.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?D&&Ei(D.elementType)&&(ge=gu):ge=Kp;if(ge&&(ge=ge(e,D))){yu(R,ge,a,x);break e}Z&&Z(e,C,D),e==="focusout"&&D&&C.type==="number"&&D.memoizedProps.value!=null&&bi(C,"number",C.value)}switch(Z=D?Zn(D):window,e){case"focusin":(hu(Z)||Z.contentEditable==="true")&&(mn=Z,zi=D,al=null);break;case"focusout":al=zi=mn=null;break;case"mousedown":Ui=!0;break;case"contextmenu":case"mouseup":case"dragend":Ui=!1,wu(R,a,x);break;case"selectionchange":if(Wp)break;case"keydown":case"keyup":wu(R,a,x)}var ie;if(Mi)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else pn?pu(e,a)&&(fe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(fe="onCompositionStart");fe&&(cu&&a.locale!=="ko"&&(pn||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&pn&&(ie=su()):(da=x,Ti="value"in da?da.value:da.textContent,pn=!0)),Z=Fs(D,fe),0<Z.length&&(fe=new ou(fe,e,null,a,x),R.push({event:fe,listeners:Z}),ie?fe.data=ie:(ie=mu(a),ie!==null&&(fe.data=ie)))),(ie=Yp?Gp(e,a):$p(e,a))&&(fe=Fs(D,"onBeforeInput"),0<fe.length&&(Z=new ou("onBeforeInput","beforeinput",null,a,x),R.push({event:Z,listeners:fe}),Z.data=ie)),Lm(R,e,D,a,x)}Pf(R,t)})}function Tl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Fs(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=Xn(e,a),l!=null&&n.unshift(Tl(e,l,s)),l=Xn(e,t),l!=null&&n.push(Tl(e,l,s))),e.tag===3)return n;e=e.return}return[]}function jm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function td(e,t,a,n,l){for(var s=t._reactName,o=[];a!==null&&a!==n;){var m=a,g=m.alternate,D=m.stateNode;if(m=m.tag,g!==null&&g===n)break;m!==5&&m!==26&&m!==27||D===null||(g=D,l?(D=Xn(a,s),D!=null&&o.unshift(Tl(a,D,g))):l||(D=Xn(a,s),D!=null&&o.push(Tl(a,D,g)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Bm=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(Bm,`
`).replace(Fm,"")}function nd(e,t){return t=ad(t),ad(e)===t}function Ce(e,t,a,n,l,s){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||cn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&cn(e,""+n);break;case"className":Ql(e,"class",n);break;case"tabIndex":Ql(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ql(e,a,n);break;case"style":au(e,n,s);break;case"data":if(t!=="object"){Ql(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Zl(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Ce(e,t,"name",l.name,l,null),Ce(e,t,"formEncType",l.formEncType,l,null),Ce(e,t,"formMethod",l.formMethod,l,null),Ce(e,t,"formTarget",l.formTarget,l,null)):(Ce(e,t,"encType",l.encType,l,null),Ce(e,t,"method",l.method,l,null),Ce(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Zl(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Zt);break;case"onScroll":n!=null&&ue("scroll",e);break;case"onScrollEnd":n!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(i(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(i(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Zl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ue("beforetoggle",e),ue("toggle",e),$l(e,"popover",n);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":$l(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hp.get(a)||a,$l(e,a,n))}}function oo(e,t,a,n,l,s){switch(a){case"style":au(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(i(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(i(60));e.innerHTML=a}}break;case"children":typeof n=="string"?cn(e,n):(typeof n=="number"||typeof n=="bigint")&&cn(e,""+n);break;case"onScroll":n!=null&&ue("scroll",e);break;case"onScrollEnd":n!=null&&ue("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),s=e[rt]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):$l(e,a,n)}}}function et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var n=!1,l=!1,s;for(s in a)if(a.hasOwnProperty(s)){var o=a[s];if(o!=null)switch(s){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ce(e,t,s,o,a,null)}}l&&Ce(e,t,"srcSet",a.srcSet,a,null),n&&Ce(e,t,"src",a.src,a,null);return;case"input":ue("invalid",e);var m=s=o=l=null,g=null,D=null;for(n in a)if(a.hasOwnProperty(n)){var x=a[n];if(x!=null)switch(n){case"name":l=x;break;case"type":o=x;break;case"checked":g=x;break;case"defaultChecked":D=x;break;case"value":s=x;break;case"defaultValue":m=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(i(137,t));break;default:Ce(e,t,n,x,a,null)}}Wo(e,s,m,g,D,o,l,!1);return;case"select":ue("invalid",e),n=o=s=null;for(l in a)if(a.hasOwnProperty(l)&&(m=a[l],m!=null))switch(l){case"value":s=m;break;case"defaultValue":o=m;break;case"multiple":n=m;default:Ce(e,t,l,m,a,null)}t=s,a=o,e.multiple=!!n,t!=null?un(e,!!n,t,!1):a!=null&&un(e,!!n,a,!0);return;case"textarea":ue("invalid",e),s=l=n=null;for(o in a)if(a.hasOwnProperty(o)&&(m=a[o],m!=null))switch(o){case"value":n=m;break;case"defaultValue":l=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(i(91));break;default:Ce(e,t,o,m,a,null)}eu(e,n,l,s);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(n=a[g],n!=null))switch(g){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ce(e,t,g,n,a,null)}return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(n=0;n<wl.length;n++)ue(wl[n],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(n=a[D],n!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ce(e,t,D,n,a,null)}return;default:if(Ei(t)){for(x in a)a.hasOwnProperty(x)&&(n=a[x],n!==void 0&&oo(e,t,x,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&Ce(e,t,m,n,a,null))}function Ym(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,o=null,m=null,g=null,D=null,x=null;for(T in a){var R=a[T];if(a.hasOwnProperty(T)&&R!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":g=R;default:n.hasOwnProperty(T)||Ce(e,t,T,null,n,R)}}for(var C in n){var T=n[C];if(R=a[C],n.hasOwnProperty(C)&&(T!=null||R!=null))switch(C){case"type":s=T;break;case"name":l=T;break;case"checked":D=T;break;case"defaultChecked":x=T;break;case"value":o=T;break;case"defaultValue":m=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(i(137,t));break;default:T!==R&&Ce(e,t,C,T,n,R)}}Si(e,o,m,g,D,x,s,l);return;case"select":T=o=m=C=null;for(s in a)if(g=a[s],a.hasOwnProperty(s)&&g!=null)switch(s){case"value":break;case"multiple":T=g;default:n.hasOwnProperty(s)||Ce(e,t,s,null,n,g)}for(l in n)if(s=n[l],g=a[l],n.hasOwnProperty(l)&&(s!=null||g!=null))switch(l){case"value":C=s;break;case"defaultValue":m=s;break;case"multiple":o=s;default:s!==g&&Ce(e,t,l,s,n,g)}t=m,a=o,n=T,C!=null?un(e,!!a,C,!1):!!n!=!!a&&(t!=null?un(e,!!a,t,!0):un(e,!!a,a?[]:"",!1));return;case"textarea":T=C=null;for(m in a)if(l=a[m],a.hasOwnProperty(m)&&l!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Ce(e,t,m,null,n,l)}for(o in n)if(l=n[o],s=a[o],n.hasOwnProperty(o)&&(l!=null||s!=null))switch(o){case"value":C=l;break;case"defaultValue":T=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(i(91));break;default:l!==s&&Ce(e,t,o,l,n,s)}Po(e,C,T);return;case"option":for(var G in a)if(C=a[G],a.hasOwnProperty(G)&&C!=null&&!n.hasOwnProperty(G))switch(G){case"selected":e.selected=!1;break;default:Ce(e,t,G,null,n,C)}for(g in n)if(C=n[g],T=a[g],n.hasOwnProperty(g)&&C!==T&&(C!=null||T!=null))switch(g){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Ce(e,t,g,C,n,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)C=a[W],a.hasOwnProperty(W)&&C!=null&&!n.hasOwnProperty(W)&&Ce(e,t,W,null,n,C);for(D in n)if(C=n[D],T=a[D],n.hasOwnProperty(D)&&C!==T&&(C!=null||T!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(i(137,t));break;default:Ce(e,t,D,C,n,T)}return;default:if(Ei(t)){for(var we in a)C=a[we],a.hasOwnProperty(we)&&C!==void 0&&!n.hasOwnProperty(we)&&oo(e,t,we,void 0,n,C);for(x in n)C=n[x],T=a[x],!n.hasOwnProperty(x)||C===T||C===void 0&&T===void 0||oo(e,t,x,C,n,T);return}}for(var S in a)C=a[S],a.hasOwnProperty(S)&&C!=null&&!n.hasOwnProperty(S)&&Ce(e,t,S,null,n,C);for(R in n)C=n[R],T=a[R],!n.hasOwnProperty(R)||C===T||C==null&&T==null||Ce(e,t,R,C,n,T)}function ld(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],s=l.transferSize,o=l.initiatorType,m=l.duration;if(s&&m&&ld(o)){for(o=0,m=l.responseEnd,n+=1;n<a.length;n++){var g=a[n],D=g.startTime;if(D>m)break;var x=g.transferSize,R=g.initiatorType;x&&ld(R)&&(g=g.responseEnd,o+=x*(g<m?1:(m-D)/(g-D)))}if(--n,t+=8*(s+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uo=null,co=null;function Ys(e){return e.nodeType===9?e:e.ownerDocument}function sd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function id(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var po=null;function $m(){var e=window.event;return e&&e.type==="popstate"?e===po?!1:(po=e,!0):(po=null,!1)}var rd=typeof setTimeout=="function"?setTimeout:void 0,Qm=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,Vm=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(Zm)}:rd;function Zm(e){setTimeout(function(){throw e})}function xa(e){return e==="head"}function ud(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),Fn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Al(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Al(a);for(var s=a.firstChild;s;){var o=s.nextSibling,m=s.nodeName;s[Vn]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=o}}else a==="body"&&Al(e.ownerDocument.body);a=l}while(a);Fn(t)}function cd(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function mo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mo(a),_i(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xm(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Vn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function Km(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mt(e.nextSibling),e===null))return null;return e}function fd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function ho(e){return e.data==="$?"||e.data==="$~"}function yo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Im(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var go=null;function dd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Mt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function pd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function md(e,t,a){switch(t=Ys(a),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function Al(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_i(e)}var Ot=new Map,hd=new Set;function Gs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=j.d;j.d={f:Jm,r:Wm,D:Pm,C:eh,L:th,m:ah,X:lh,S:nh,M:sh};function Jm(){var e=ua.f(),t=Hs();return e||t}function Wm(e){var t=sn(e);t!==null&&t.tag===5&&t.type==="form"?Rc(t):ua.r(e)}var qn=typeof document>"u"?null:document;function yd(e,t,a){var n=qn;if(n&&typeof t=="string"&&t){var l=Ct(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),hd.has(l)||(hd.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),et(t,"link",e),Ze(t),n.head.appendChild(t)))}}function Pm(e){ua.D(e),yd("dns-prefetch",e,null)}function eh(e,t){ua.C(e,t),yd("preconnect",e,t)}function th(e,t,a){ua.L(e,t,a);var n=qn;if(n&&e&&t){var l='link[rel="preload"][as="'+Ct(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Ct(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Ct(a.imageSizes)+'"]')):l+='[href="'+Ct(e)+'"]';var s=l;switch(t){case"style":s=jn(e);break;case"script":s=Bn(e)}Ot.has(s)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(s,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(xl(s))||t==="script"&&n.querySelector(kl(s))||(t=n.createElement("link"),et(t,"link",e),Ze(t),n.head.appendChild(t)))}}function ah(e,t){ua.m(e,t);var a=qn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ct(n)+'"][href="'+Ct(e)+'"]',s=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Bn(e)}if(!Ot.has(s)&&(e=w({rel:"modulepreload",href:e},t),Ot.set(s,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(kl(s)))return}n=a.createElement("link"),et(n,"link",e),Ze(n),a.head.appendChild(n)}}}function nh(e,t,a){ua.S(e,t,a);var n=qn;if(n&&e){var l=rn(n).hoistableStyles,s=jn(e);t=t||"default";var o=l.get(s);if(!o){var m={loading:0,preload:null};if(o=n.querySelector(xl(s)))m.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(s))&&_o(e,a);var g=o=n.createElement("link");Ze(g),et(g,"link",e),g._p=new Promise(function(D,x){g.onload=D,g.onerror=x}),g.addEventListener("load",function(){m.loading|=1}),g.addEventListener("error",function(){m.loading|=2}),m.loading|=4,$s(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:m},l.set(s,o)}}}function lh(e,t){ua.X(e,t);var a=qn;if(a&&e){var n=rn(a).hoistableScripts,l=Bn(e),s=n.get(l);s||(s=a.querySelector(kl(l)),s||(e=w({src:e,async:!0},t),(t=Ot.get(l))&&vo(e,t),s=a.createElement("script"),Ze(s),et(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(l,s))}}function sh(e,t){ua.M(e,t);var a=qn;if(a&&e){var n=rn(a).hoistableScripts,l=Bn(e),s=n.get(l);s||(s=a.querySelector(kl(l)),s||(e=w({src:e,async:!0,type:"module"},t),(t=Ot.get(l))&&vo(e,t),s=a.createElement("script"),Ze(s),et(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(l,s))}}function gd(e,t,a,n){var l=(l=re.current)?Gs(l):null;if(!l)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=jn(a.href),a=rn(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=jn(a.href);var s=rn(l).hoistableStyles,o=s.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,o),(s=l.querySelector(xl(e)))&&!s._p&&(o.instance=s,o.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),s||ih(l,e,a,o.state))),t&&n===null)throw Error(i(528,""));return o}if(t&&n!==null)throw Error(i(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Bn(a),a=rn(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jn(e){return'href="'+Ct(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function _d(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function ih(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),et(t,"link",a),Ze(t),e.head.appendChild(t))}function Bn(e){return'[src="'+Ct(e)+'"]'}function kl(e){return"script[async]"+e}function vd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Ct(a.href)+'"]');if(n)return t.instance=n,Ze(n),n;var l=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ze(n),et(n,"style",l),$s(n,a.precedence,e),t.instance=n;case"stylesheet":l=jn(a.href);var s=e.querySelector(xl(l));if(s)return t.state.loading|=4,t.instance=s,Ze(s),s;n=_d(a),(l=Ot.get(l))&&_o(n,l),s=(e.ownerDocument||e).createElement("link"),Ze(s);var o=s;return o._p=new Promise(function(m,g){o.onload=m,o.onerror=g}),et(s,"link",n),t.state.loading|=4,$s(s,a.precedence,e),t.instance=s;case"script":return s=Bn(a.src),(l=e.querySelector(kl(s)))?(t.instance=l,Ze(l),l):(n=a,(l=Ot.get(s))&&(n=w({},a),vo(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),et(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,$s(n,a.precedence,e));return t.instance}function $s(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,s=l,o=0;o<n.length;o++){var m=n[o];if(m.dataset.precedence===t)s=m;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function _o(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qs=null;function Sd(e,t,a){if(Qs===null){var n=new Map,l=Qs=new Map;l.set(a,n)}else l=Qs,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var s=a[l];if(!(s[Vn]||s[Ie]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var o=s.getAttribute(t)||"";o=e+o;var m=n.get(o);m?m.push(s):n.set(o,[s])}}return n}function bd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function rh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ed(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oh(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=jn(n.href),s=t.querySelector(xl(l));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vs.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,Ze(s);return}s=t.ownerDocument||t,n=_d(n),(l=Ot.get(l))&&_o(n,l),s=s.createElement("link"),Ze(s);var o=s;o._p=new Promise(function(m,g){o.onload=m,o.onerror=g}),et(s,"link",n),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vs.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var So=0;function uh(e,t){return e.stylesheets&&e.count===0&&Xs(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Xs(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&So===0&&(So=62500*Gm());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xs(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>So?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Vs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zs=null;function Xs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zs=new Map,t.forEach(ch,e),Zs=null,Vs.call(e))}function ch(e,t){if(!(t.state.loading&4)){var a=Zs.get(e);if(a)var n=a.get(null);else{a=new Map,Zs.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var o=l[s];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}l=t.instance,o=l.getAttribute("data-precedence"),s=a.get(o)||n,s===n&&a.set(null,l),a.set(o,l),this.count++,n=Vs.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Rl={$$typeof:ee,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function fh(e,t,a,n,l,s,o,m,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mi(0),this.hiddenUpdates=mi(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Nd(e,t,a,n,l,s,o,m,g,D,x,R){return e=new fh(e,t,a,o,g,D,x,R,m),t=1,s===!0&&(t|=24),s=gt(3,null,null,t),e.current=s,s.stateNode=e,t=Wi(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},ar(s),e}function Dd(e){return e?(e=gn,e):gn}function Cd(e,t,a,n,l,s){l=Dd(l),n.context===null?n.context=l:n.pendingContext=l,n=_a(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=va(e,n,t),a!==null&&(pt(a,e,t),ul(a,e,t))}function wd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function bo(e,t){wd(e,t),(e=e.alternate)&&wd(e,t)}function Td(e){if(e.tag===13||e.tag===31){var t=Ya(e,67108864);t!==null&&pt(t,e,67108864),bo(e,67108864)}}function Ad(e){if(e.tag===13||e.tag===31){var t=Et();t=hi(t);var a=Ya(e,t);a!==null&&pt(a,e,t),bo(e,t)}}var Ks=!0;function dh(e,t,a,n){var l=A.T;A.T=null;var s=j.p;try{j.p=2,Eo(e,t,a,n)}finally{j.p=s,A.T=l}}function ph(e,t,a,n){var l=A.T;A.T=null;var s=j.p;try{j.p=8,Eo(e,t,a,n)}finally{j.p=s,A.T=l}}function Eo(e,t,a,n){if(Ks){var l=No(n);if(l===null)ro(e,t,n,Is,a),kd(e,n);else if(hh(l,e,t,a,n))n.stopPropagation();else if(kd(e,n),t&4&&-1<mh.indexOf(e)){for(;l!==null;){var s=sn(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var o=Ua(s.pendingLanes);if(o!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;o;){var g=1<<31-ht(o);m.entanglements[1]|=g,o&=~g}Gt(s),(ve&6)===0&&(Ms=lt()+500,Cl(0))}}break;case 31:case 13:m=Ya(s,2),m!==null&&pt(m,s,2),Hs(),bo(s,2)}if(s=No(n),s===null&&ro(e,t,n,Is,a),s===l)break;l=s}l!==null&&n.stopPropagation()}else ro(e,t,n,null,a)}}function No(e){return e=Di(e),Do(e)}var Is=null;function Do(e){if(Is=null,e=ln(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=p(t),e!==null)return e;e=null}else if(a===31){if(e=d(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Is=e,null}function xd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pi()){case za:return 2;case Uo:return 8;case jl:case ep:return 32;case qo:return 268435456;default:return 32}default:return 32}}var Co=!1,ka=null,Ra=null,Ma=null,Ml=new Map,Ol=new Map,Oa=[],mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kd(e,t){switch(e){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":Ml.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(t.pointerId)}}function Hl(e,t,a,n,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[l]},t!==null&&(t=sn(t),t!==null&&Td(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function hh(e,t,a,n,l){switch(t){case"focusin":return ka=Hl(ka,e,t,a,n,l),!0;case"dragenter":return Ra=Hl(Ra,e,t,a,n,l),!0;case"mouseover":return Ma=Hl(Ma,e,t,a,n,l),!0;case"pointerover":var s=l.pointerId;return Ml.set(s,Hl(Ml.get(s)||null,e,t,a,n,l)),!0;case"gotpointercapture":return s=l.pointerId,Ol.set(s,Hl(Ol.get(s)||null,e,t,a,n,l)),!0}return!1}function Rd(e){var t=ln(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=p(a),t!==null){e.blockedOn=t,$o(e.priority,function(){Ad(a)});return}}else if(t===31){if(t=d(a),t!==null){e.blockedOn=t,$o(e.priority,function(){Ad(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Js(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=No(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ni=n,a.target.dispatchEvent(n),Ni=null}else return t=sn(a),t!==null&&Td(t),e.blockedOn=a,!1;t.shift()}return!0}function Md(e,t,a){Js(e)&&a.delete(t)}function yh(){Co=!1,ka!==null&&Js(ka)&&(ka=null),Ra!==null&&Js(Ra)&&(Ra=null),Ma!==null&&Js(Ma)&&(Ma=null),Ml.forEach(Md),Ol.forEach(Md)}function Ws(e,t){e.blockedOn===t&&(e.blockedOn=null,Co||(Co=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,yh)))}var Ps=null;function Od(e){Ps!==e&&(Ps=e,E.unstable_scheduleCallback(E.unstable_NormalPriority,function(){Ps===e&&(Ps=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Do(n||a)===null)continue;break}var s=sn(a);s!==null&&(e.splice(t,3),t-=3,Er(s,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Fn(e){function t(g){return Ws(g,e)}ka!==null&&Ws(ka,e),Ra!==null&&Ws(Ra,e),Ma!==null&&Ws(Ma,e),Ml.forEach(t),Ol.forEach(t);for(var a=0;a<Oa.length;a++){var n=Oa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)Rd(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],s=a[n+1],o=l[rt]||null;if(typeof s=="function")o||Od(a);else if(o){var m=null;if(s&&s.hasAttribute("formAction")){if(l=s,o=s[rt]||null)m=o.formAction;else if(Do(l)!==null)continue}else m=o.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),Od(a)}}}function Hd(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function wo(e){this._internalRoot=e}ei.prototype.render=wo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var a=t.current,n=Et();Cd(a,n,e,t,null,null)},ei.prototype.unmount=wo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cd(e.current,2,null,e,null,null),Hs(),t[nn]=null}};function ei(e){this._internalRoot=e}ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=Go();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Oa.length&&t!==0&&t<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&Rd(e)}};var Ld=r.version;if(Ld!=="19.2.8")throw Error(i(527,Ld,"19.2.8"));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=h(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var gh={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ti.isDisabled&&ti.supportsFiber)try{Gn=ti.inject(gh),mt=ti}catch{}}return zl.createRoot=function(e,t){if(!c(e))throw Error(i(299));var a=!1,n="",l=Fc,s=Yc,o=Gc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Nd(e,1,!1,null,null,a,n,null,l,s,o,Hd),e[nn]=t.current,io(e),new wo(t)},zl.hydrateRoot=function(e,t,a){if(!c(e))throw Error(i(299));var n=!1,l="",s=Fc,o=Yc,m=Gc,g=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(g=a.formState)),t=Nd(e,1,!0,t,a??null,n,l,g,s,o,m,Hd),t.context=Dd(null),a=t.current,n=Et(),n=hi(n),l=_a(n),l.callback=null,va(a,l,n),a=n,t.current.lanes=a,Qn(t,a),Gt(t),e[nn]=t.current,io(e),new ei(t)},zl.version="19.2.8",zl}var Qd;function kh(){if(Qd)return xo.exports;Qd=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(r){console.error(r)}}return E(),xo.exports=xh(),xo.exports}var Rh=kh();const Mh=Id(Rh),Vd=["hdfs dfs -ls","hdfs dfs -mkdir -p","hdfs dfs -put","hdfs dfs -cat","hdfs dfs -rm -r","hdfs dfs -du","hdfs dfs -df","hdfs fsck /","hdfs dfsadmin -report","hdfs dfsadmin -safemode get","hadoop jar wordcount.jar","yarn application -list","help","clear"];function Oh(E,r){const u=E.trimStart();if(!u)return Vd;const i=Vd.filter(c=>c.startsWith(u));if(i.length>0)return i;if(u.includes(" /")||u.endsWith(" /")||u.includes(" ")){const c=u.split(" "),f=c[c.length-1];if(f.startsWith("/")){const p=f.substring(0,f.lastIndexOf("/"))||"/",d=f.substring(f.lastIndexOf("/")+1),y=r.resolvePath(p);if(y&&y.type==="DIRECTORY"){const h=[];return y.children.forEach(b=>{if(b.name.startsWith(d)){const w=(p==="/"?"":p)+"/"+b.name,z=c.slice(0,-1).join(" ")+" "+w;h.push(z)}}),h}}}return[]}const Hh="hadoop-lab-db",Lh=2,tn="localFiles",Ul="localDirs",an="hdfsFileContent",ai="commandHistory",ni="shellState",li="ksqlDatabase";class Jd{constructor(){O(this,"db",null);O(this,"ready");this.ready=this.open()}open(){return new Promise((r,u)=>{const i=indexedDB.open(Hh,Lh);i.onupgradeneeded=c=>{const f=c.target.result;f.objectStoreNames.contains(tn)||f.createObjectStore(tn),f.objectStoreNames.contains(Ul)||f.createObjectStore(Ul),f.objectStoreNames.contains(an)||f.createObjectStore(an),f.objectStoreNames.contains(ai)||f.createObjectStore(ai),f.objectStoreNames.contains(ni)||f.createObjectStore(ni),f.objectStoreNames.contains(li)||f.createObjectStore(li)},i.onsuccess=c=>{this.db=c.target.result,r()},i.onerror=()=>u(i.error)})}async waitReady(){return this.ready}tx(r,u="readonly"){if(!this.db)throw new Error("DB not open");return this.db.transaction(r,u)}get(r,u){return new Promise((i,c)=>{const f=this.tx(r).objectStore(r).get(u);f.onsuccess=()=>i(f.result),f.onerror=()=>c(f.error)})}put(r,u,i){return new Promise((c,f)=>{const p=this.tx(r,"readwrite").objectStore(r).put(i,u);p.onsuccess=()=>c(),p.onerror=()=>f(p.error)})}del(r,u){return new Promise((i,c)=>{const f=this.tx(r,"readwrite").objectStore(r).delete(u);f.onsuccess=()=>i(),f.onerror=()=>c(f.error)})}getAllKeys(r){return new Promise((u,i)=>{const c=this.tx(r).objectStore(r).getAllKeys();c.onsuccess=()=>u(c.result),c.onerror=()=>i(c.error)})}getAll(r){return new Promise((u,i)=>{const c=this.tx(r).objectStore(r).getAll();c.onsuccess=()=>u(c.result),c.onerror=()=>i(c.error)})}async saveLocalFile(r,u){await this.put(tn,r,u)}async loadLocalFile(r){return this.get(tn,r)}async deleteLocalFile(r){await this.del(tn,r)}async loadAllLocalFiles(){const r=await this.getAllKeys(tn),u=await this.getAll(tn),i=new Map;return r.forEach((c,f)=>i.set(c,u[f])),i}async saveLocalDir(r){await this.put(Ul,r,!0)}async deleteLocalDir(r){await this.del(Ul,r)}async loadAllLocalDirs(){const r=await this.getAllKeys(Ul);return new Set(r)}async saveHdfsFileContent(r,u){await this.put(an,r,u)}async loadHdfsFileContent(r){return this.get(an,r)}async deleteHdfsFileContent(r){await this.del(an,r)}async loadAllHdfsFileContents(){const r=await this.getAllKeys(an),u=await this.getAll(an),i=new Map;return r.forEach((c,f)=>i.set(c,u[f])),i}async saveCommandHistory(r){await this.put(ai,"history",r)}async loadCommandHistory(){return await this.get(ai,"history")??[]}async saveShellState(r){await this.put(ni,"state",r)}async loadShellState(){return this.get(ni,"state")}async saveKSQLDatabase(r){let u="";const i=new Uint8Array(r),c=i.byteLength,f=32768;for(let d=0;d<c;d+=f)u+=String.fromCharCode.apply(null,Array.from(i.subarray(d,d+f)));const p=btoa(u);await this.put(li,"db_binary",p)}async loadKSQLDatabase(){const r=await this.get(li,"db_binary");if(!r||typeof r!="string")return;const u=atob(r),i=u.length,c=new Uint8Array(i);for(let f=0;f<i;f++)c[f]=u.charCodeAt(f);return c}async getStorageEstimate(){if("storage"in navigator&&"estimate"in navigator.storage){const r=await navigator.storage.estimate();return{usageBytes:r.usage??0,quotaBytes:r.quota??0}}return{usageBytes:0,quotaBytes:0}}}const zh={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1};class Uh{constructor(){O(this,"sqlLib",null);O(this,"db",null);O(this,"initPromise",null);O(this,"hadoopDB",new Jd);O(this,"saveLocalFileCallback")}async init(){if(!(typeof window>"u")&&!this.db)return this.initPromise?this.initPromise:(this.initPromise=new Promise(r=>{(async()=>{try{if(!window.initSqlJs){const i=document.createElement("script");i.src="./sql/sql-wasm.js",i.async=!0,document.head.appendChild(i),await new Promise((c,f)=>{i.onload=c,i.onerror=f})}if(window.initSqlJs){this.sqlLib=await window.initSqlJs({locateFile:c=>c.endsWith(".wasm")?"./sql/sql-wasm.wasm":`./sql/${c}`}),await this.hadoopDB.waitReady();const i=await this.hadoopDB.loadKSQLDatabase();i&&i.length>0?this.db=new this.sqlLib.Database(i):this.db=new this.sqlLib.Database}r()}catch(i){console.error("KSQL Engine init error:",i),r()}})()}),this.initPromise)}getDatabase(){return this.db}getSqlLib(){return this.sqlLib}async persistDatabase(){if(this.db)try{const r=this.db.export();await this.hadoopDB.saveKSQLDatabase(r)}catch{}}async handleLoadCommand(r){let u="",i="";const c=r.match(/^([a-zA-Z0-9_]+)\s*=\s*LOAD\s+['"]?([^'"]+)['"]?/i),f=r.match(/^LOAD\s+['"]?([^'"]+)['"]?\s+(?:USING\s+[^\s]+\s+)?INTO\s+([a-zA-Z0-9_]+)/i),p=r.match(/^LOAD\s+['"]?([^'"]+)['"]?/i);if(c)i=c[1].trim(),u=c[2].trim();else if(f)u=f[1].trim(),i=f[2].trim();else if(p)u=p[1].trim(),i=u.split(".")[0].replace(/[^a-zA-Z0-9_]/g,"_");else return{output:"Usage: load 'file.csv' into table_name OR table_name = load 'file.csv'",isError:!0};const d=await this.hadoopDB.loadAllLocalFiles();let y;const h=u.replace(/^\.\//,"").replace(/^\/home\/Hacker\//,"");for(const[L,I]of d.entries())if(L.replace(/^\.\//,"").replace(/^\/home\/Hacker\//,"")===h||L===u){y=I;break}if(!y)return{output:`Error: Local file "${u}" not found in terminal directory. Use vim ${u} to create it first.`,isError:!0};const b=y.split(/\r?\n/).map(L=>L.trim()).filter(L=>L.length>0);if(b.length===0)return{output:`File "${u}" is empty.`,isError:!0};const w=b[0].includes("	")?"	":",",z=b[0].split(w).map(L=>L.trim().replace(/^['"]|['"]$/g,""));let Y=[],U=0;z.every(L=>isNaN(Number(L)))&&b.length>1?(Y=z.map(L=>L.replace(/[^a-zA-Z0-9_]/g,"_")),U=1):(Y=z.map((L,I)=>`col_${I+1}`),U=0);try{const L=Y.map(P=>`${P} TEXT`).join(", ");this.db.exec(`CREATE TABLE IF NOT EXISTS ${i} (${L});`);let I=0;for(let P=U;P<b.length;P++){const ee=b[P].split(w).map(he=>he.trim().replace(/^['"]|['"]$/g,"")),J=Y.map((he,Te)=>`'${(ee[Te]??"").replace(/'/g,"''")}'`);this.db.exec(`INSERT INTO ${i} VALUES (${J.join(", ")});`),I++}return await this.persistDatabase(),{output:`Successfully loaded ${I} records from "${u}" into table "${i}".`,isError:!1}}catch(L){return{output:"Error loading CSV into table: "+L.message,isError:!0}}}async handleStoreSaveCommand(r){const u=r.trim(),i=u.match(/^(?:STORE|SAVE)\s+([a-zA-Z0-9_]+)\s+INTO\s+['"]?([^'"]+)['"]?/i);if(i){const p=i[1].trim();let d=i[2].trim();d.includes(".")||(d+=".csv");try{const y=this.db.exec(`SELECT * FROM ${p};`);if(y.length===0)return{output:`Table "${p}" is empty or does not exist.`,isError:!0};const h=y[0].columns,b=y[0].values;let w=h.join(",")+`
`;return b.forEach(z=>{const Y=z.map(U=>U===null?"":String(U).includes(",")?`"${U}"`:String(U)).join(",");w+=Y+`
`}),this.saveLocalFileCallback?this.saveLocalFileCallback(d,w):await this.hadoopDB.saveLocalFile(d,w),{output:`Successfully stored ${b.length} rows from table "${p}" into "${d}".`,isError:!1}}catch(y){return{output:`Error storing table "${p}": `+y.message,isError:!0}}}if(!this.db)return{output:"Database empty.",isError:!0};let f=u.split(/\s+/)[1]||"database.db";f.endsWith(".db")||(f+=".db");try{const p=this.db.export();let d="";const y=new Uint8Array(p);for(let h=0;h<y.byteLength;h++)d+=String.fromCharCode(y[h]);return this.saveLocalFileCallback?this.saveLocalFileCallback(f,d):await this.hadoopDB.saveLocalFile(f,d),{output:`Database saved as "${f}".`,isError:!1}}catch(p){return{output:"Error saving database: "+p.message,isError:!0}}}async executeCommand(r){var c,f,p,d;if(await this.init(),!this.db&&this.sqlLib)try{this.db=new this.sqlLib.Database}catch{}const u=r.trim(),i=u.toLowerCase();if(!u)return{output:"",isError:!1};if(i==="help")return{output:`commands added:
1.clear => to clear screen
2.describe table => to get structure of table
3.save => save database (.db) or save table to CSV (e.g. save users into 'out.csv')
4.store => store table into CSV (e.g. store users into 'out.csv' using PigStorage(','))
5.load => load CSV file into table (e.g. load 'sales.csv' into sales or sales = load 'sales.csv')
6.add => to add data from an existing .db file
7.tables => to show all tables
8.contact => talk with developer
9.request => to adding new commands
10.feedback => to providing feedback to developer 
11.ask => ask your doubts
12.edit => to create a sql file
13.run => to run the sql file 
14.help => to see all commands
.......work is going on ......`,isError:!1};if(i.startsWith("load ")||i.includes("= load "))return this.handleLoadCommand(u);if(i.startsWith("store ")||i.startsWith("save ")&&i.includes(" into "))return this.handleStoreSaveCommand(u);if(i.startsWith("save"))return this.handleStoreSaveCommand(u);if(i==="tables"){if(!this.db)return{output:"No tables found in the database.",isError:!1};try{const y=this.db.exec("SELECT name FROM sqlite_master WHERE type='table';");if(y.length>0&&y[0].values.length>0){let h=`Tables:
`;return y[0].values.forEach(b=>{h+="- "+b[0]+`
`}),{output:h.trim(),isError:!1}}else return{output:"No tables found in the database.",isError:!1}}catch(y){return{output:"Error: "+y.message,isError:!0}}}if(i.startsWith("describe table")||i.startsWith("desc ")){if(!this.db)return{output:"Database not initialized.",isError:!0};const y=u.split(/\s+/),h=y[y.length-1];try{const b=this.db.exec(`PRAGMA table_info(${h});`);if(b.length>0&&b[0].values.length>0){let w=`Column Name | Type | Not Null | Default Value | Primary Key
`;return w+="-".repeat(60)+`
`,b[0].values.forEach(z=>{w+=z.join(" | ")+`
`}),{output:w.trim(),isError:!1}}else return{output:`Error: Table '${h}' does not exist.`,isError:!0}}catch(b){return{output:"Error: "+b.message,isError:!0}}}if(i.startsWith("ask ")){const y=r.match(/^ask\s+"(.+)"$/i)||r.match(/^ask\s+(.+)$/i);if(!y)return{output:'Usage: ask "your question"',isError:!0};const h=y[1].replace(/^["']|["']$/g,"");try{const w=await(await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:"Bearer ","Content-Type":"application/json"},body:JSON.stringify({model:"llama3-8b-8192",messages:[{role:"system",content:"Return only the single most important point from the user's message. No extra explanation."},{role:"user",content:h}],max_tokens:50,temperature:0})})).json();return{output:((d=(p=(f=(c=w==null?void 0:w.choices)==null?void 0:c[0])==null?void 0:f.message)==null?void 0:p.content)==null?void 0:d.trim())||"ASK Ksql RELATED THINGS....",isError:!1}}catch(b){return{output:"Error: "+b.message,isError:!0}}}if(i==="contact"||i==="request"||i==="feedback")return window.open("https://hacker1514.github.io/python/contact.html","_blank"),{output:"Opening developer portal...",isError:!1};if(!this.db)return{output:"Database not initialized.",isError:!0};try{const y=this.db.exec(r);if(await this.persistDatabase(),y.length>0){let h="";return y.forEach(b=>{h+=b.columns.join(" | ")+`
`,h+="-".repeat(b.columns.join(" | ").length)+`
`,b.values.forEach(w=>{h+=w.join(" | ")+`
`})}),{output:h.trim(),isError:!1}}else return{output:"Query executed successfully.",isError:!1}}catch(y){return{output:"Error: "+y.message,isError:!0}}}}const qh=({backend:E})=>{const[r,u]=pe.useState("~"),[i,c]=pe.useState(""),[f,p]=pe.useState(-1),[d,y]=pe.useState([]),[h,b]=pe.useState(""),[w,z]=pe.useState(!1),[Y,U]=pe.useState(""),[te,L]=pe.useState(""),[I,P]=pe.useState("INSERT"),[ee,J]=pe.useState(""),[he,Te]=pe.useState(!1),[le,Ke]=pe.useState(!1),Qe=pe.useRef(new Uh),[$t,it]=pe.useState(null),[He,Ht]=pe.useState(null),Nt=pe.useRef(null),nt=pe.useRef(null),A=pe.useRef(null),[j,B]=pe.useState([{id:"init_banner",type:"banner",content:""}]);pe.useEffect(()=>{try{Qe.current.saveLocalFileCallback=(H,V)=>{E.saveLocalFile(H,V)},Qe.current.init().catch(()=>{}),E.executePySparkRepl("pass").catch(()=>{})}catch{}},[E]),pe.useEffect(()=>{var H,V;w?(V=A.current)==null||V.focus():(H=Nt.current)==null||H.scrollIntoView({behavior:"smooth"})},[j,w,He,he,le]);const Se=()=>{var H,V;w?(H=A.current)==null||H.focus():(V=nt.current)==null||V.focus()},be=H=>{const V=H.target.value;if(c(V),!He&&!he&&!le&&V.trim()){const Q=Oh(V,E.getNameNode().getNamespace());Q.length>0&&Q[0].toLowerCase().startsWith(V.toLowerCase())?b(Q[0]):b("")}else b("")},v=H=>{const V=H.toLowerCase();return V.includes("error")||V.includes("not recognized")||V.includes("unsupported")||V.includes("usage:")||V.includes("no such file")||V.includes("missing")||V.startsWith("mkdir:")||V.startsWith("ls:")||V.startsWith("cat:")||V.startsWith("put:")||V.startsWith("rm:")||V.startsWith("du:")},M=()=>{const H=document.createElement("input");H.type="file",H.accept=".db",H.onchange=async V=>{var Be;const Q=(Be=V.target.files)==null?void 0:Be[0];if(!Q)return;const xe=new FileReader;xe.onload=async Qt=>{try{const Lt=Qe.current.getSqlLib(),X=Qe.current.getDatabase();if(!Lt||!X)throw new Error("KSQL Engine not initialized");const ye=new Lt.Database(new Uint8Array(Qt.target.result)),ke=ye.exec("SELECT sql FROM sqlite_master WHERE type='table';");ke.length>0&&ke[0].values.length>0&&ke[0].values.forEach(Le=>{const tt=Le[0];try{X.run(tt)}catch{}});const me=ye.exec("SELECT name FROM sqlite_master WHERE type='table';");me.length>0&&me[0].values.length>0&&me[0].values.forEach(Le=>{const tt=Le[0],zt=ye.exec(`SELECT * FROM ${tt};`);if(zt.length>0){const La=zt[0].columns;zt[0].values.forEach(di=>{const lt=di.map(za=>typeof za=="string"?`'${za.replace(/'/g,"''")}'`:za===null?"NULL":za).join(", "),pi=`INSERT INTO ${tt} (${La.join(", ")}) VALUES (${lt});`;try{X.run(pi)}catch{}})}}),await Qe.current.persistDatabase(),B(Le=>[...Le,{id:`ksql_add_${Date.now()}`,type:"output",content:"Imported .db file data and schema added successfully."}])}catch(Lt){B(X=>[...X,{id:`ksql_add_err_${Date.now()}`,type:"error",content:"Error importing database: "+Lt.message}])}},xe.readAsArrayBuffer(Q)},H.click()},F=()=>{const H=document.createElement("input");H.type="file",H.accept=".ksql,.sql",H.onchange=V=>{var Be;const Q=(Be=V.target.files)==null?void 0:Be[0];if(!Q)return;const xe=new FileReader;xe.onload=async Qt=>{const Lt=Qt.target.result,X=await Qe.current.executeCommand(Lt);B(ye=>[...ye,{id:`ksql_run_${Date.now()}`,type:X.isError?"error":"output",content:X.output||"Commands executed successfully!"}])},xe.readAsText(Q)},H.click()},$=async H=>{var V;if((H.key==="Tab"||H.key==="ArrowRight")&&h&&!He&&!he&&!le){const Q=((V=nt.current)==null?void 0:V.selectionStart)===i.length;(H.key==="Tab"||Q)&&(H.preventDefault(),c(h),b(""))}else if(H.key==="ArrowUp"){if(H.preventDefault(),d.length>0){const Q=f<d.length-1?f+1:f;p(Q);const xe=d[d.length-1-Q];c(xe),b("")}}else if(H.key==="ArrowDown")if(H.preventDefault(),f>0){const Q=f-1;p(Q);const xe=d[d.length-1-Q];c(xe),b("")}else f===0&&(p(-1),c(""),b(""));else if(H.key==="Enter"){if(H.preventDefault(),he){const X=i.trim(),ye=X.toLowerCase();if(c(""),b(""),!X){B(me=>[...me,{id:`ksql_empty_${Date.now()}`,type:"ksql_prompt",command:"",content:""}]);return}if(y(me=>[...me,X]),p(-1),["exit","exit()","quit","quit()","exit;"].includes(ye)){Te(!1),B(me=>[...me,{id:`ksql_p_${Date.now()}`,type:"ksql_prompt",command:X,content:""},{id:`ksql_exit_${Date.now()}`,type:"output",content:"[KSQL] Exited KSQL shell mode. Returned to Linux shell."}]);return}if(ye==="clear"){B([]);return}if(ye==="add"){B(me=>[...me,{id:`ksql_p_${Date.now()}`,type:"ksql_prompt",command:X,content:""}]),M();return}if(ye==="run"){B(me=>[...me,{id:`ksql_p_${Date.now()}`,type:"ksql_prompt",command:X,content:""}]),F();return}const ke=await Qe.current.executeCommand(X);B(me=>[...me,{id:`ksql_p_${Date.now()}`,type:"ksql_prompt",command:X,content:""},{id:`ksql_o_${Date.now()}`,type:ke.isError?"error":"output",content:ke.output}]);return}if(le){const X=i.trim(),ye=X.toLowerCase();if(c(""),b(""),!X){B(me=>[...me,{id:`spark_empty_${Date.now()}`,type:"pyspark_prompt",command:"",content:""}]);return}if(y(me=>[...me,X]),p(-1),["exit","exit()","quit","quit()","exit;"].includes(ye)){Ke(!1),B(me=>[...me,{id:`spark_p_${Date.now()}`,type:"pyspark_prompt",command:X,content:""},{id:`spark_exit_${Date.now()}`,type:"output",content:"[PySpark] Exited PySpark shell mode. Returned to Linux shell."}]);return}if(ye==="clear"){B([]);return}const ke=await E.executePySparkRepl(X);B(me=>[...me,{id:`spark_p_${Date.now()}`,type:"pyspark_prompt",command:X,content:""},...ke?[{id:`spark_o_${Date.now()}`,type:v(ke)?"error":"output",content:ke}]:[]]);return}if(He&&$t){const X=i,ye=He,ke=$t;it(null),Ht(null),c("");const me=`${ke} ${JSON.stringify(X)}`,Le=E.executeCLI(me);if(Le.startsWith("__NEED_INPUT__:")){const tt=Le.substring(15);it(me),Ht(tt),B(zt=>[...zt,{id:`in_resp_${Date.now()}`,type:"input_prompt",command:X,content:ye}])}else B(tt=>[...tt,{id:`in_resp_${Date.now()}`,type:"input_prompt",command:X,content:ye},{id:`in_out_${Date.now()}`,type:v(Le)?"error":"output",content:Le}]);return}const Q=i.trim();if(!Q){B(X=>[...X,{id:`empty_${Date.now()}`,type:"prompt",workingDir:E.getWorkingDir(),command:"",content:""}]);return}if(Q.startsWith("vim ")||Q.startsWith("vi ")){const X=Q.split(/\s+/)[1]||"file.txt",ye=E.readLocalFile(X);U(X),L(ye!==void 0?ye:""),z(!0),P("INSERT"),c(""),b("");return}if(y(X=>[...X,Q]),p(-1),Q==="clear"){B([]),c(""),b("");return}const xe=E.getWorkingDir(),Be=E.executeCLI(Q),Qt=E.getWorkingDir();if(u(Qt),Be==="__LAUNCH_KSQL__"){Te(!0),await Qe.current.init(),B(X=>[...X,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:xe,command:Q,content:""},{id:`ksql_welcome_${Date.now()}`,type:"output",content:`KSQL Database Engine Active (SQLite WebAssembly Local Engine)
type help, to see all commands
type exit or quit to return to Linux shell.`}]),c(""),b("");return}if(Be==="__LAUNCH_PYSPARK__"){Ke(!0),await E.executePySparkRepl("pass"),B(X=>[...X,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:xe,command:Q,content:""},{id:`pyspark_welcome_${Date.now()}`,type:"output",content:`Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\\ \\/ _ \\/ _ \`/ __/  '_/
   /__ / .__/\\_,_/_/ /_/\\_\\   version 3.3.0
      /_/

Using Python version 3.9.7
Spark context Web UI available at http://localhost:4040
Spark context available as 'sc' (master = yarn).
SparkSession available as 'spark'.`}]),c(""),b("");return}if(Be.startsWith("__DOWNLOAD_FILE__:")){const X=Be.substring(18),ye=E.readLocalFile(X);if(ye!==void 0){const ke=new Blob([ye],{type:"text/plain;charset=utf-8"}),me=URL.createObjectURL(ke),Le=document.createElement("a");Le.href=me,Le.download=X,document.body.appendChild(Le),Le.click(),document.body.removeChild(Le),URL.revokeObjectURL(me),B(tt=>[...tt,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:xe,command:Q,content:""},{id:`dl_out_${Date.now()}`,type:"output",content:`Downloaded "${X}".`}])}else B(ke=>[...ke,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:xe,command:Q,content:""},{id:`dl_err_${Date.now()}`,type:"error",content:`Error: File "${X}" not found.`}]);c(""),b("");return}if(Be==="__GET_FILE__"){const X=document.createElement("input");X.type="file",X.onchange=ye=>{var Le;const ke=(Le=ye.target.files)==null?void 0:Le[0];if(!ke)return;const me=new FileReader;me.onload=tt=>{const zt=tt.target.result;E.saveLocalFile(ke.name,zt),B(La=>[...La,{id:`get_out_${Date.now()}`,type:"output",content:`Imported "${ke.name}".`}])},me.readAsText(ke)},B(ye=>[...ye,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:xe,command:Q,content:""}]),X.click(),c(""),b("");return}if(Be.startsWith("__NEED_INPUT__:")){const X=Be.substring(15);it(Q),Ht(X),B(ye=>[...ye,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:xe,command:Q,content:""}]),c(""),b("");return}const Lt=v(Be);B(X=>[...X,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:xe,command:Q,content:""},{id:`out_${Date.now()}`,type:Lt?"error":"output",content:Be}]),c(""),b("")}},ae=H=>{H.key==="Escape"&&(H.preventDefault(),P(V=>{const Q=V==="INSERT"?"COMMAND":"INSERT";return Q==="INSERT"&&setTimeout(()=>{var xe;return(xe=A.current)==null?void 0:xe.focus()},10),Q}))},re=H=>{const V=H.trim();V===":wq"||V===":x"||V==="wq"?(E.saveLocalFile(Y,te),z(!1),B(Q=>[...Q,{id:`vim_save_${Date.now()}`,type:"output",content:`[Vim] "${Y}" saved and written.`}])):V===":q!"||V===":q"||V==="q"?z(!1):(V===":w"||V==="w")&&(E.saveLocalFile(Y,te),J(""),P("INSERT"),setTimeout(()=>{var Q;return(Q=A.current)==null?void 0:Q.focus()},10))};return w?q.jsxs("div",{className:"w-screen h-screen bg-black text-white font-mono text-xs sm:text-sm p-2 sm:p-4 flex flex-col justify-between selection:bg-yellow-400 selection:text-black",children:[q.jsxs("div",{className:"bg-black px-2 sm:px-3 py-1 sm:py-1.5 flex justify-between items-center text-[10px] sm:text-xs border-b border-cyan-500/40",children:[q.jsxs("span",{className:"text-yellow-400 font-black",children:["VIM - ",Y]}),q.jsxs("span",{className:"text-cyan-400 font-bold hidden sm:inline",children:["Press ",q.jsx("code",{className:"text-cyan-300 font-bold",children:"ESC"})," to toggle INSERT / COMMAND modes (:wq to save & exit)"]})]}),q.jsx("textarea",{ref:A,value:te,onChange:H=>L(H.target.value),onKeyDown:ae,className:"flex-1 w-full bg-black text-green-400 font-mono p-2 sm:p-3 focus:outline-none resize-none leading-relaxed text-xs sm:text-sm",autoFocus:!0,spellCheck:!1}),q.jsxs("div",{className:"bg-black px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs border-t border-cyan-500/40 flex items-center justify-between font-mono",children:[I==="INSERT"?q.jsx("span",{className:"text-green-400 font-bold",children:"-- INSERT --"}):q.jsxs("div",{className:"flex items-center space-x-2 flex-1",children:[q.jsx("span",{className:"text-yellow-400 font-bold",children:":"}),q.jsx("input",{type:"text",value:ee,onChange:H=>J(H.target.value),onKeyDown:H=>{H.key==="Escape"?(H.preventDefault(),P("INSERT"),J(""),setTimeout(()=>{var V;return(V=A.current)==null?void 0:V.focus()},10)):H.key==="Enter"&&(H.preventDefault(),re(ee))},placeholder:"wq to save and exit, q! to quit",className:"bg-black border-none text-yellow-300 focus:outline-none flex-1 font-mono font-bold text-xs",autoFocus:!0})]}),q.jsxs("span",{className:"text-cyan-400 font-bold",children:[te.split(`
`).length,"L, ",te.length,"C"]})]})]}):q.jsx("div",{onClick:Se,className:"w-screen h-screen bg-black text-white font-mono text-xs sm:text-base p-2 sm:p-4 overflow-y-auto flex flex-col justify-between selection:bg-cyan-500 selection:text-black cursor-text leading-relaxed",children:q.jsxs("div",{className:"space-y-2 sm:space-y-3 w-full text-left",children:[j.map(H=>H.type==="banner"?q.jsxs("div",{className:"font-mono text-[10px] sm:text-sm leading-tight",children:[q.jsxs("pre",{className:"whitespace-pre font-mono text-cyan-400 font-bold overflow-x-auto max-w-full",children:[`+------------------------+--------------------------------------+
|                        |                `,q.jsx("span",{className:"text-yellow-400 font-black",children:"HADOOP"}),`                |
|                        |                                      |
+------------------------+--------------------------------------+
|  `,q.jsx("span",{className:"text-cyan-400 font-bold",children:"DEVELOPER             "}),"|  ",q.jsx("span",{className:"text-white font-bold",children:"Niranjan Kumar K                    "}),`|
|  `,q.jsx("span",{className:"text-cyan-400 font-bold",children:"ENVIRONMENT           "}),"|  ",q.jsx("span",{className:"text-green-400 font-bold",children:"Hadoop Simulation                   "}),`|
|                        |                                      |
+------------------------+--------------------------------------+`]}),q.jsx("div",{className:"text-green-400 font-bold pt-1.5 sm:pt-2 text-xs sm:text-sm",children:"  ✓  Terminal initialized successfully"})]},H.id):H.type==="prompt"?q.jsxs("div",{className:"flex items-center font-mono text-xs sm:text-base whitespace-nowrap overflow-x-auto",children:[q.jsxs("span",{className:"shrink-0 whitespace-pre",children:[q.jsx("span",{className:"text-green-400 font-bold",children:"[[ "}),q.jsx("span",{className:"text-cyan-400 font-bold",children:"K "}),q.jsx("span",{className:"text-yellow-400 font-bold",children:": "}),q.jsx("span",{className:"text-yellow-400 font-bold",children:H.workingDir||"~"}),q.jsx("span",{className:"text-green-400 font-bold",children:" ]] "}),q.jsx("span",{className:"text-yellow-400 font-bold",children:": "}),q.jsx("span",{className:"text-white font-bold",children:"$ "})]}),q.jsx("span",{className:"text-yellow-300 font-semibold",children:H.command})]},H.id):H.type==="ksql_prompt"?q.jsxs("div",{className:"flex items-center font-mono text-xs sm:text-base whitespace-nowrap overflow-x-auto",children:[q.jsx("span",{className:"text-yellow-400 font-bold shrink-0 whitespace-pre",children:">> "}),q.jsx("span",{className:"text-cyan-300 font-semibold",children:H.command})]},H.id):H.type==="pyspark_prompt"?q.jsxs("div",{className:"flex items-center font-mono text-xs sm:text-base whitespace-nowrap overflow-x-auto",children:[q.jsx("span",{className:"text-green-400 font-bold shrink-0 whitespace-pre",children:">>> "}),q.jsx("span",{className:"text-yellow-300 font-semibold",children:H.command})]},H.id):H.type==="input_prompt"?q.jsxs("div",{className:"flex items-center font-mono text-xs sm:text-base whitespace-nowrap overflow-x-auto",children:[q.jsx("span",{className:"text-green-400 font-bold shrink-0 whitespace-pre",children:H.content}),q.jsx("span",{className:"text-yellow-300 font-semibold pl-1",children:H.command})]},H.id):q.jsx("pre",{className:`whitespace-pre-wrap font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto ${H.type==="error"?"text-red-400 font-bold":"text-green-400 font-medium"}`,children:H.content},H.id)),q.jsx("div",{className:"font-mono text-xs sm:text-base",children:q.jsxs("div",{className:"flex items-center whitespace-nowrap relative overflow-x-auto",children:[he?q.jsx("span",{className:"text-yellow-400 font-bold shrink-0 whitespace-pre select-none",children:">> "}):le?q.jsx("span",{className:"text-green-400 font-bold shrink-0 whitespace-pre select-none",children:">>> "}):He?q.jsx("span",{className:"text-green-400 font-bold shrink-0 whitespace-pre select-none",children:He}):q.jsxs("span",{className:"shrink-0 flex items-center whitespace-pre select-none",children:[q.jsx("span",{className:"text-green-400 font-bold",children:"[[ "}),q.jsx("span",{className:"text-cyan-400 font-bold",children:"K "}),q.jsx("span",{className:"text-yellow-400 font-bold",children:": "}),q.jsx("span",{className:"text-yellow-400 font-bold",children:r}),q.jsx("span",{className:"text-green-400 font-bold",children:" ]] "}),q.jsx("span",{className:"text-yellow-400 font-bold",children:": "}),q.jsx("span",{className:"text-white font-bold",children:"$ "})]}),q.jsxs("div",{className:"relative flex-1 flex items-center min-w-[120px]",children:[q.jsx("input",{ref:nt,type:"text",value:i,onChange:be,onKeyDown:$,className:"w-full bg-black border-none text-yellow-300 focus:outline-none placeholder-cyan-900 font-mono font-semibold pl-0.5 text-xs sm:text-base z-10",autoFocus:!0,spellCheck:!1}),!He&&!he&&!le&&h&&h.toLowerCase().startsWith(i.toLowerCase())&&q.jsxs("div",{className:"absolute left-0.5 text-cyan-700 font-mono font-semibold pointer-events-none z-0 whitespace-pre text-xs sm:text-base",children:[q.jsx("span",{className:"invisible",children:i}),q.jsx("span",{children:h.slice(i.length)})]})]})]})}),q.jsx("div",{ref:Nt})]})})};class jh{constructor(r=0){O(this,"virtualTime");O(this,"speed",1);O(this,"isRunning",!1);O(this,"timerId",null);O(this,"listeners",new Set);O(this,"tickIntervalMs",100);this.virtualTime=r}start(){this.isRunning||(this.isRunning=!0,this.scheduleNextTick())}pause(){this.isRunning=!1,this.timerId!==null&&(clearTimeout(this.timerId),this.timerId=null)}setSpeed(r){this.speed=r}getSpeed(){return this.speed}getTime(){return this.virtualTime}setTime(r){this.virtualTime=r}isActive(){return this.isRunning}advanceBy(r){this.virtualTime+=r,this.notifyListeners(r)}subscribe(r){return this.listeners.add(r),()=>this.listeners.delete(r)}scheduleNextTick(){this.isRunning&&(this.timerId=window.setTimeout(()=>{if(!this.isRunning)return;const r=this.tickIntervalMs*this.speed;this.virtualTime+=r,this.notifyListeners(r),this.scheduleNextTick()},this.tickIntervalMs))}notifyListeners(r){this.listeners.forEach(u=>u(this.virtualTime,r))}}class Bh{constructor(){O(this,"heap",[]);O(this,"sequenceCounter",0)}enqueue(r,u,i){this.sequenceCounter++;const c={scheduledTime:u,sequenceId:this.sequenceCounter,event:r,action:i};return this.heap.push(c),this.bubbleUp(this.heap.length-1),c}dequeue(){if(this.heap.length===0)return;const r=this.heap[0],u=this.heap.pop();return this.heap.length>0&&(this.heap[0]=u,this.sinkDown(0)),r}peek(){return this.heap[0]}isEmpty(){return this.heap.length===0}size(){return this.heap.length}clear(){this.heap=[],this.sequenceCounter=0}compare(r,u){return r.scheduledTime!==u.scheduledTime?r.scheduledTime-u.scheduledTime:r.sequenceId-u.sequenceId}bubbleUp(r){for(;r>0;){const u=Math.floor((r-1)/2);if(this.compare(this.heap[r],this.heap[u])<0)[this.heap[r],this.heap[u]]=[this.heap[u],this.heap[r]],r=u;else break}}sinkDown(r){const u=this.heap.length;for(;;){const i=2*r+1,c=2*r+2;let f=r;if(i<u&&this.compare(this.heap[i],this.heap[f])<0&&(f=i),c<u&&this.compare(this.heap[c],this.heap[f])<0&&(f=c),f!==r)[this.heap[r],this.heap[f]]=[this.heap[f],this.heap[r]],r=f;else break}}}class Fh{constructor(){O(this,"events",[]);O(this,"listeners",new Set);O(this,"eventCounter",0)}createEvent(r,u,i,c={},f=Date.now(),p){return this.eventCounter++,{eventId:`evt_${this.eventCounter.toString().padStart(6,"0")}`,timestamp:f,type:r,category:u,source:i,target:p,payload:c,simulationVersion:1}}record(r){this.events.push(r),this.listeners.forEach(u=>u(r))}getEvents(){return this.events}getEventsByCategory(r){return this.events.filter(u=>u.category===r)}getEventsUpTo(r){return this.events.filter(u=>u.timestamp<=r)}getEventIndex(r){return this.events.findIndex(u=>u.eventId===r)}subscribe(r){return this.listeners.add(r),()=>this.listeners.delete(r)}clear(){this.events=[],this.eventCounter=0}loadFromSnapshot(r){this.events=[...r],this.eventCounter=r.length}}class Yh{constructor(r=12345){O(this,"state");this.state=r}nextFloat(){let r=this.state+=1831565813;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}nextInt(r,u){return Math.floor(this.nextFloat()*(u-r+1))+r}pickOne(r){const u=Math.floor(this.nextFloat()*r.length);return r[u]}reset(r){this.state=r}getState(){return this.state}}class Gh{constructor(r=12345){O(this,"clock");O(this,"priorityQueue");O(this,"eventStore");O(this,"rng");O(this,"stateListeners",new Set);O(this,"seed");this.seed=r,this.clock=new jh(0),this.priorityQueue=new Bh,this.eventStore=new Fh,this.rng=new Yh(r),this.clock.subscribe(u=>{this.processEventsUpTo(u)})}getClock(){return this.clock}getEventStore(){return this.eventStore}getRNG(){return this.rng}getSeed(){return this.seed}scheduleEvent(r,u,i,c,f,p={},d){const y=this.clock.getTime()+Math.max(0,c),h=this.eventStore.createEvent(r,u,i,p,y,d);return this.priorityQueue.enqueue(h,y,()=>{this.eventStore.record(h),f(),this.notifyStateChange()})}processEventsUpTo(r){let u=0;for(;!this.priorityQueue.isEmpty();){const i=this.priorityQueue.peek();if(!i||i.scheduledTime>r)break;const c=this.priorityQueue.dequeue();this.clock.setTime(c.scheduledTime),c.action(),u++}return u>0&&this.notifyStateChange(),u}stepOneEvent(){if(this.priorityQueue.isEmpty())return!1;const r=this.priorityQueue.dequeue();return this.clock.setTime(r.scheduledTime),r.action(),this.notifyStateChange(),!0}stepEvents(r){let u=0;for(let i=0;i<r&&this.stepOneEvent();i++)u++;return u}stepTime(r){const u=this.clock.getTime()+r,i=this.processEventsUpTo(u);return this.clock.setTime(u),this.notifyStateChange(),i}play(){this.clock.start()}pause(){this.clock.pause()}setSpeed(r){this.clock.setSpeed(r)}subscribeStateChange(r){return this.stateListeners.add(r),()=>this.stateListeners.delete(r)}notifyStateChange(){this.stateListeners.forEach(r=>r())}reset(r=this.seed){this.pause(),this.seed=r,this.clock.setTime(0),this.priorityQueue.clear(),this.eventStore.clear(),this.rng.reset(r),this.notifyStateChange()}}class Oo extends Error{constructor(r){super(r),this.name="HDFSQuotaError"}}class $h{constructor(){O(this,"root");O(this,"snapshots",new Map);this.root={name:"",path:"/",type:"DIRECTORY",owner:"hdfs",group:"supergroup",permissions:"drwxr-xr-x",createdAt:Date.now(),modifiedAt:Date.now(),children:new Map}}getRoot(){return this.root}normalizePath(r){return!r||r==="/"?"/":"/"+r.split("/").filter(Boolean).join("/")}resolvePath(r){const u=this.normalizePath(r);if(u==="/")return this.root;const i=u.split("/").filter(Boolean);let c=this.root;for(const f of i){if(c.type!=="DIRECTORY")return;const p=c.children.get(f);if(!p)return;c=p}return c}mkdir(r,u=!0,i="user"){const c=this.normalizePath(r);if(c==="/")return this.root;const f=c.split("/").filter(Boolean);let p=this.root,d="";for(let y=0;y<f.length;y++){const h=f[y];d+="/"+h;let b=p.children.get(h);if(b)if(b.type==="DIRECTORY")p=b;else throw new Error(`File exists at path component: ${d}`);else{if(y<f.length-1&&!u)throw new Error(`Parent directory does not exist: ${d}`);if(p.quotaNamespace&&p.children.size>=p.quotaNamespace)throw new Oo(`Namespace quota exceeded on directory ${p.path}`);const w={name:h,path:d,type:"DIRECTORY",owner:i,group:"supergroup",permissions:"drwxr-xr-x",createdAt:Date.now(),modifiedAt:Date.now(),children:new Map};p.children.set(h,w),p.modifiedAt=Date.now(),p=w}}return p}createFile(r,u,i=3,c=134217728,f="user"){const p=this.normalizePath(r),d=p.substring(0,p.lastIndexOf("/"))||"/",y=p.substring(p.lastIndexOf("/")+1),h=this.mkdir(d,!0,f);if(h.quotaNamespace&&h.children.size>=h.quotaNamespace)throw new Oo(`Namespace quota exceeded on directory ${h.path}`);if(h.quotaStorageBytes&&u*i>h.quotaStorageBytes)throw new Oo(`Storage quota exceeded on directory ${h.path}`);const b={name:y,path:p,type:"FILE",owner:f,group:"supergroup",permissions:"-rw-r--r--",createdAt:Date.now(),modifiedAt:Date.now(),sizeBytes:u,replicationFactor:i,blockSizeBytes:c,blocks:[]};return h.children.set(y,b),h.modifiedAt=Date.now(),b}deletePath(r,u=!1){const i=this.normalizePath(r);if(i==="/")throw new Error("Cannot delete root directory");const c=i.substring(0,i.lastIndexOf("/"))||"/",f=i.substring(i.lastIndexOf("/")+1),p=this.resolvePath(c);if(!p||p.type!=="DIRECTORY")return!1;const d=p.children.get(f);if(!d)return!1;if(d.type==="DIRECTORY"&&d.children.size>0&&!u)throw new Error(`Directory is not empty: ${i}`);return p.children.delete(f),p.modifiedAt=Date.now(),!0}createSnapshot(r,u){const i=this.resolvePath(r);if(!i||i.type!=="DIRECTORY")throw new Error(`Directory not found for snapshot: ${r}`);const c=`${r}/.snapshot/${u}`;return this.snapshots.set(c,JSON.parse(JSON.stringify(i))),c}getSnapshots(){return Array.from(this.snapshots.keys())}setQuota(r,u,i){const c=this.resolvePath(r);if(!c||c.type!=="DIRECTORY")throw new Error(`Directory not found: ${r}`);c.quotaNamespace=u,c.quotaStorageBytes=i}}class Qh{chooseTargets(r,u,i,c=new Set){const f=r.filter(U=>U.state==="RUNNING"&&U.type==="DATANODE"&&!c.has(U.id));if(f.length===0)return[];const p=[],d=Math.min(i,f.length),y=new Map;f.forEach(U=>{y.has(U.rackId)||y.set(U.rackId,[]),y.get(U.rackId).push(U)});const h=Array.from(y.keys());let b;const w=f.find(U=>U.id===u);if(w)b=w;else{const U=y.get(h[Math.floor(Math.random()*h.length)]);b=U[Math.floor(Math.random()*U.length)]}if(p.push(b),p.length>=d)return p;const z=h.filter(U=>U!==b.rackId);let Y;if(z.length>0){const U=z[Math.floor(Math.random()*z.length)],te=y.get(U);Y=te[Math.floor(Math.random()*te.length)],p.push(Y)}else{const U=y.get(b.rackId).filter(te=>te.id!==b.id);U.length>0&&(Y=U[Math.floor(Math.random()*U.length)],p.push(Y))}if(p.length>=d)return p;if(Y){const U=(y.get(Y.rackId)||[]).filter(te=>!p.some(L=>L.id===te.id));if(U.length>0){const te=U[Math.floor(Math.random()*U.length)];p.push(te)}}for(;p.length<d;){const U=f.filter(te=>!p.some(L=>L.id===te.id));if(U.length===0)break;p.push(U[Math.floor(Math.random()*U.length)])}return p}}class ci extends Error{constructor(r,u,i){super(`Invalid FSM state transition for ${r}: ${u} -> ${i}`),this.entity=r,this.from=u,this.to=i,this.name="FSMError"}}const Vh={NEW:["STARTING"],STARTING:["RUNNING","UNHEALTHY","DEAD"],RUNNING:["UNHEALTHY","DEAD"],UNHEALTHY:["RUNNING","DEAD"],DEAD:["RECOVERING"],RECOVERING:["RUNNING","DEAD"]};function ql(E,r){if(E===r)return E;if(!(Vh[E]||[]).includes(r))throw new ci("DataNode",E,r);return r}const Zh={STARTING:["SAFE_MODE"],SAFE_MODE:["ACTIVE","STOPPED"],ACTIVE:["SAFE_MODE","STOPPED"],STOPPED:["STARTING"]};function Zd(E,r){if(E===r)return E;if(!(Zh[E]||[]).includes(r))throw new ci("NameNode",E,r);return r}const Xh={PENDING:["SCHEDULED","KILLED"],SCHEDULED:["RUNNING","KILLED","FAILED"],RUNNING:["SUCCEEDED","FAILED","KILLED"],SUCCEEDED:[],FAILED:["SCHEDULED","KILLED"],KILLED:[]};function Yn(E,r){if(E===r)return E;if(!(Xh[E]||[]).includes(r))throw new ci("Task",E,r);return r}const Kh={REQUESTED:["ALLOCATED","EXPIRED"],ALLOCATED:["ACQUIRED","EXPIRED","RELEASED"],ACQUIRED:["RUNNING","RELEASED"],RUNNING:["RELEASED","EXPIRED"],RELEASED:[],EXPIRED:[]};function Xd(E,r){if(E===r)return E;if(!(Kh[E]||[]).includes(r))throw new ci("Container",E,r);return r}class Wd{constructor(){O(this,"inMemoryBlocks",new Map);O(this,"dbName","HadoopSimulatorOPFS");this.initIndexedDB()}initIndexedDB(){if(typeof window<"u"&&"indexedDB"in window){const r=indexedDB.open(this.dbName,1);r.onupgradeneeded=u=>{const i=u.target.result;i.objectStoreNames.contains("blocks")||i.createObjectStore("blocks")}}}async writeBlockData(r,u){if(this.inMemoryBlocks.set(r,u),typeof window<"u"&&"indexedDB"in window)try{const i=indexedDB.open(this.dbName,1);i.onsuccess=c=>{c.target.result.transaction("blocks","readwrite").objectStore("blocks").put(u,r)}}catch(i){console.warn("IndexedDB write warning:",i)}}async readBlockData(r){if(this.inMemoryBlocks.has(r))return this.inMemoryBlocks.get(r)}deleteBlockData(r){this.inMemoryBlocks.delete(r)}calculateChecksum(r){let u=0;for(let i=0;i<r.length;i++)u=(u<<5)-u+r[i],u|=0;return"crc32_"+(u>>>0).toString(16)}}class Ih{constructor(r){O(this,"state","STARTING");O(this,"namespace");O(this,"placementPolicy");O(this,"blockMap",new Map);O(this,"fileContentMap",new Map);O(this,"dataNodes",new Map);O(this,"engine");O(this,"storageEngine");O(this,"heartbeatTimeoutMs",1e4);this.engine=r,this.namespace=new $h,this.placementPolicy=new Qh,this.storageEngine=new Wd,this.state=Zd("STARTING","SAFE_MODE"),this.engine.scheduleEvent("NAMENODE_ENTER_SAFEMODE","HDFS","NameNode",0,()=>{}),this.engine.scheduleEvent("NAMENODE_LEAVE_SAFEMODE","HDFS","NameNode",1e3,()=>{this.state=Zd("SAFE_MODE","ACTIVE")}),this.scheduleHeartbeatAudit()}getState(){return this.state}getNamespace(){return this.namespace}registerDataNode(r){this.dataNodes.set(r.id,r),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("DATANODE_REGISTERED","HDFS",r.id,{rackId:r.rackId,capacity:r.storageCapacityBytes},this.engine.getClock().getTime()))}getDataNodes(){return Array.from(this.dataNodes.values())}receiveHeartbeat(r,u,i){const c=this.dataNodes.get(r);c&&(c.lastHeartbeatTime=this.engine.getClock().getTime(),c.storageUsedBytes=u,c.blocks=[...i],this.engine.getEventStore().record(this.engine.getEventStore().createEvent("DATANODE_HEARTBEAT","HDFS",r,{usedBytes:u,blockCount:i.length},this.engine.getClock().getTime())))}createAndWriteFile(r,u,i=3,c=134217728,f){const p=new TextEncoder,d=typeof u=="string"?p.encode(u):u,y=typeof u=="string"?u:new TextDecoder().decode(u),h=d.length,b=this.namespace.createFile(r,h,i,c);this.fileContentMap.set(b.path,y);const w=Math.max(1,Math.ceil(h/c)),z=this.getDataNodes();for(let Y=0;Y<w;Y++){const U=`blk_${Date.now()}_${Math.floor(Math.random()*1e5)}`,te=Y*c,L=Math.min(te+c,h),I=d.slice(te,L),P=this.storageEngine.calculateChecksum(I),ee=this.placementPolicy.chooseTargets(z,f,i),J=ee.map(Te=>({blockId:U,nodeId:Te.id,rackId:Te.rackId,state:"FINALIZED",storagePath:`/data/${U}`,updatedAt:this.engine.getClock().getTime()})),he={id:U,filePath:b.path,blockIndex:Y,sizeBytes:I.length,checksum:P,checksumStatus:"VALID",generationStamp:1e3+Y,replicas:J,state:"FINALIZED"};this.blockMap.set(U,he),b.blocks.push(U),ee.forEach(Te=>{Te.blocks.push(U),Te.storageUsedBytes+=I.length,this.storageEngine.writeBlockData(U,I)}),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("BLOCK_CREATED","HDFS","NameNode",{blockId:U,filePath:b.path,replicas:ee.map(Te=>Te.id)},this.engine.getClock().getTime()))}return b}readFileContent(r){const u=this.namespace.normalizePath(r);return this.fileContentMap.get(u)}getBlock(r){return this.blockMap.get(r)}runFSCK(r="/"){const u={totalFiles:0,totalBlocks:0,totalReplicas:0,underReplicatedBlocks:0,corruptBlocks:0,missingBlocks:0,isHealthy:!0,details:[]},i=this.namespace.resolvePath(r);if(!i)return u.isHealthy=!1,u.details.push(`Path not found: ${r}`),u;const c=[],f=p=>{p.type==="FILE"?c.push(p):p.type==="DIRECTORY"&&p.children.forEach(d=>f(d))};f(i),u.totalFiles=c.length;for(const p of c)for(const d of p.blocks){u.totalBlocks++;const y=this.blockMap.get(d);if(!y){u.missingBlocks++,u.details.push(`Missing metadata for block ${d} in file ${p.path}`);continue}const h=y.replicas.filter(b=>{const w=this.dataNodes.get(b.nodeId);return w&&w.state==="RUNNING"});u.totalReplicas+=h.length,y.checksumStatus==="CORRUPTED"&&(u.corruptBlocks++,u.details.push(`CORRUPT block ${d} in file ${p.path}`)),h.length===0?(u.missingBlocks++,u.details.push(`MISSING block ${d} (0 live replicas) in file ${p.path}`)):h.length<p.replicationFactor&&(u.underReplicatedBlocks++,u.details.push(`Under-replicated block ${d} in file ${p.path}. Expected: ${p.replicationFactor}, Found: ${h.length}`))}return u.isHealthy=u.corruptBlocks===0&&u.missingBlocks===0&&u.underReplicatedBlocks===0,u}triggerReReplication(){let r=0;const u=this.getDataNodes();return this.blockMap.forEach(i=>{const c=i.replicas.filter(d=>{const y=this.dataNodes.get(d.nodeId);return y&&y.state==="RUNNING"}),f=this.namespace.resolvePath(i.filePath),p=f?f.replicationFactor:3;if(c.length>0&&c.length<p){const d=new Set(c.map(b=>b.nodeId)),y=p-c.length;this.placementPolicy.chooseTargets(u,void 0,y,d).forEach(b=>{const w={blockId:i.id,nodeId:b.id,rackId:b.rackId,state:"FINALIZED",storagePath:`/data/${i.id}`,updatedAt:this.engine.getClock().getTime()};i.replicas.push(w),b.blocks.push(i.id),r++,this.engine.getEventStore().record(this.engine.getEventStore().createEvent("BLOCK_REPLICATED","HDFS","NameNode",{blockId:i.id,targetNodeId:b.id},this.engine.getClock().getTime()))})}}),r}scheduleHeartbeatAudit(){this.engine.scheduleEvent("HEARTBEAT_AUDIT","HDFS","NameNode",5e3,()=>{const r=this.engine.getClock().getTime();let u=0;this.dataNodes.forEach(i=>{i.state==="RUNNING"&&r-i.lastHeartbeatTime>this.heartbeatTimeoutMs&&(i.state="DEAD",u++,this.engine.getEventStore().record(this.engine.getEventStore().createEvent("DATANODE_FAILED","FAILURE",i.id,{reason:"Heartbeat timeout"},r)))}),u>0&&this.triggerReReplication(),this.scheduleHeartbeatAudit()})}}class Jh{constructor(r,u,i,c,f,p){O(this,"node");O(this,"nameNode");O(this,"engine");O(this,"storageEngine");O(this,"heartbeatIntervalMs",3e3);this.nameNode=f,this.engine=p,this.storageEngine=new Wd,this.node={id:r,hostname:u,rackId:i,type:"DATANODE",state:"NEW",storageCapacityBytes:c,storageUsedBytes:0,memoryCapacityMb:8192,memoryUsedMb:0,vCoresCapacity:4,vCoresUsed:0,lastHeartbeatTime:p.getClock().getTime(),blocks:[],containers:[]},this.node.state=ql("NEW","STARTING"),this.node.state=ql("STARTING","RUNNING"),this.nameNode.registerDataNode(this.node),this.scheduleHeartbeats()}getStorageEngine(){return this.storageEngine}async storeBlock(r,u){await this.storageEngine.writeBlockData(r,u),this.node.blocks.includes(r)||this.node.blocks.push(r),this.node.storageUsedBytes+=u.length}corruptBlockChecksum(r){const u=this.nameNode.getBlock(r);u&&(u.checksumStatus="CORRUPTED",this.engine.getEventStore().record(this.engine.getEventStore().createEvent("BLOCK_CORRUPTED","FAILURE",this.node.id,{blockId:r},this.engine.getClock().getTime())))}kill(){this.node.state=ql(this.node.state,"DEAD"),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("DATANODE_FAILED","FAILURE",this.node.id,{reason:"Manual kill"},this.engine.getClock().getTime()))}restart(){this.node.state==="DEAD"&&(this.node.state=ql("DEAD","RECOVERING"),this.node.state=ql("RECOVERING","RUNNING"),this.node.lastHeartbeatTime=this.engine.getClock().getTime(),this.nameNode.receiveHeartbeat(this.node.id,this.node.storageUsedBytes,this.node.blocks),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("DATANODE_RECOVERED","HDFS",this.node.id,{},this.engine.getClock().getTime())))}scheduleHeartbeats(){this.engine.scheduleEvent("HEARTBEAT_SEND","HDFS",this.node.id,this.heartbeatIntervalMs,()=>{this.node.state==="RUNNING"&&(this.node.lastHeartbeatTime=this.engine.getClock().getTime(),this.nameNode.receiveHeartbeat(this.node.id,this.node.storageUsedBytes,this.node.blocks),this.scheduleHeartbeats())})}}class Wh{constructor(r){O(this,"queues",new Map);O(this,"containers",new Map);O(this,"nodes",new Map);O(this,"engine");O(this,"containerCounter",0);this.engine=r,this.initDefaultQueues()}initDefaultQueues(){[{name:"root.default",capacityPercent:50,maxCapacityPercent:100,usedCapacityPercent:0,usedMemoryMb:0,usedVCores:0,runningApplications:[]},{name:"root.analytics",capacityPercent:30,maxCapacityPercent:70,usedCapacityPercent:0,usedMemoryMb:0,usedVCores:0,runningApplications:[]},{name:"root.research",capacityPercent:20,maxCapacityPercent:50,usedCapacityPercent:0,usedMemoryMb:0,usedVCores:0,runningApplications:[]}].forEach(u=>this.queues.set(u.name,u))}registerNodeManager(r){this.nodes.set(r.id,r)}getQueues(){return Array.from(this.queues.values())}requestContainer(r,u,i,c="root.default",f){const p=this.queues.get(c)||this.queues.get("root.default"),d=Array.from(this.nodes.values()).filter(w=>w.state==="RUNNING"&&w.memoryCapacityMb-w.memoryUsedMb>=u&&w.vCoresCapacity-w.vCoresUsed>=i);if(d.length===0){this.engine.getEventStore().record(this.engine.getEventStore().createEvent("CONTAINER_REJECTED","YARN","ResourceManager",{appId:r,memoryMb:u,vCores:i,reason:"Insufficient cluster resources"},this.engine.getClock().getTime()));return}let y;f&&d.some(w=>w.id===f)?y=d.find(w=>w.id===f):y=d[Math.floor(Math.random()*d.length)],this.containerCounter++;const h=`container_${r}_${this.containerCounter.toString().padStart(4,"0")}`,b={id:h,appId:r,nodeId:y.id,memoryMb:u,vCores:i,state:"REQUESTED",allocatedAt:this.engine.getClock().getTime()};return b.state=Xd("REQUESTED","ALLOCATED"),this.containers.set(h,b),y.memoryUsedMb+=u,y.vCoresUsed+=i,y.containers.push(h),p.usedMemoryMb+=u,p.usedVCores+=i,p.runningApplications.includes(r)||p.runningApplications.push(r),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("CONTAINER_ALLOCATED","YARN","ResourceManager",{containerId:h,appId:r,nodeId:y.id,memoryMb:u,vCores:i},this.engine.getClock().getTime())),b}releaseContainer(r){const u=this.containers.get(r);if(!u||u.state==="RELEASED")return;u.state=Xd(u.state,"RELEASED");const i=this.nodes.get(u.nodeId);i&&(i.memoryUsedMb=Math.max(0,i.memoryUsedMb-u.memoryMb),i.vCoresUsed=Math.max(0,i.vCoresUsed-u.vCores),i.containers=i.containers.filter(c=>c!==r)),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("CONTAINER_RELEASED","YARN","ResourceManager",{containerId:r},this.engine.getClock().getTime()))}}class Ph{constructor(r,u,i,c){O(this,"engine");O(this,"nameNode");O(this,"resourceManager");O(this,"network");O(this,"activeJobs",new Map);O(this,"jobCounter",0);this.engine=r,this.nameNode=u,this.resourceManager=i,this.network=c}submitJob(r,u,i,c="WordCount",f=2,p="root.default"){this.jobCounter++;const d=`job_${Date.now()}_${this.jobCounter.toString().padStart(4,"0")}`,y=`app_${Date.now()}_${this.jobCounter.toString().padStart(4,"0")}`,h=this.nameNode.getNamespace().resolvePath(u);if(!h||h.type!=="FILE")throw new Error(`Input file not found in HDFS: ${u}`);const b=h.blocks,w=b.length,z={id:d,name:r,user:"hadoop",queue:p,inputPath:u,outputPath:i,mapperClass:c,reducerClass:c,numMapTasks:w,numReduceTasks:f,state:"SUBMITTED",mapProgressPercent:0,reduceProgressPercent:0,submitTime:this.engine.getClock().getTime(),mapTasks:[],reduceTasks:[],counters:{"Map input records":0,"Map output records":0,"Reduce input records":0,"Reduce output records":0,"Shuffle bytes":0,"Spilled records":0}};for(let Y=0;Y<w;Y++){const U=b[Y],te={id:`task_${d}_m_${Y.toString().padStart(3,"0")}`,jobId:d,type:"MAP",taskIndex:Y,state:"PENDING",inputBlockId:U,progressPercent:0,recordsProcessed:0,bytesProcessed:0,spillCount:0,attempts:[]};te.state=Yn("PENDING","SCHEDULED"),z.mapTasks.push(te)}for(let Y=0;Y<f;Y++){const U={id:`task_${d}_r_${Y.toString().padStart(3,"0")}`,jobId:d,type:"REDUCE",taskIndex:Y,state:"PENDING",progressPercent:0,recordsProcessed:0,bytesProcessed:0,spillCount:0,attempts:[]};U.state=Yn("PENDING","SCHEDULED"),z.reduceTasks.push(U)}return this.activeJobs.set(d,z),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("JOB_SUBMITTED","MAPREDUCE","JobClient",{jobId:d,jobName:r,inputPath:u,mappers:w,reducers:f},this.engine.getClock().getTime())),this.executeJob(z,y),z}executeJob(r,u){r.state="RUNNING",r.startTime=this.engine.getClock().getTime(),r.mapTasks.forEach((i,c)=>{const f=this.resourceManager.requestContainer(u,1024,1,r.queue);if(f){i.assignedNodeId=f.nodeId,i.assignedContainerId=f.id,i.state=Yn(i.state,"RUNNING"),i.startTime=this.engine.getClock().getTime();const p=this.nameNode.getBlock(i.inputBlockId),d=p&&p.replicas.some(y=>y.nodeId===f.nodeId);i.locality=d?"NODE_LOCAL":"OFF_RACK",this.engine.getEventStore().record(this.engine.getEventStore().createEvent("MAP_STARTED","MAPREDUCE",i.id,{nodeId:f.nodeId,locality:i.locality},this.engine.getClock().getTime())),this.engine.scheduleEvent("MAP_COMPLETED","MAPREDUCE",i.id,1500+c*300,()=>{i.state=Yn(i.state,"SUCCEEDED"),i.progressPercent=100,i.recordsProcessed=15,i.bytesProcessed=p?p.sizeBytes:1024,i.finishTime=this.engine.getClock().getTime(),r.mapProgressPercent=Math.round(r.mapTasks.filter(y=>y.state==="SUCCEEDED").length/r.mapTasks.length*100),this.resourceManager.releaseContainer(f.id),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("MAP_COMPLETED","MAPREDUCE",i.id,{records:i.recordsProcessed},this.engine.getClock().getTime())),r.mapTasks.every(y=>y.state==="SUCCEEDED")&&this.executeShuffleAndReduce(r,u)})}})}executeShuffleAndReduce(r,u){this.engine.getEventStore().record(this.engine.getEventStore().createEvent("SHUFFLE_STARTED","MAPREDUCE",r.id,{jobName:r.name},this.engine.getClock().getTime())),r.reduceTasks.forEach((i,c)=>{const f=this.resourceManager.requestContainer(u,1024,1,r.queue);f&&(i.assignedNodeId=f.nodeId,i.assignedContainerId=f.id,i.state=Yn(i.state,"RUNNING"),i.startTime=this.engine.getClock().getTime(),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("REDUCE_STARTED","MAPREDUCE",i.id,{nodeId:f.nodeId},this.engine.getClock().getTime())),this.engine.scheduleEvent("REDUCE_COMPLETED","MAPREDUCE",i.id,2e3+c*400,()=>{if(i.state=Yn(i.state,"SUCCEEDED"),i.progressPercent=100,i.finishTime=this.engine.getClock().getTime(),r.reduceProgressPercent=Math.round(r.reduceTasks.filter(p=>p.state==="SUCCEEDED").length/r.reduceTasks.length*100),this.resourceManager.releaseContainer(f.id),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("REDUCE_COMPLETED","MAPREDUCE",i.id,{},this.engine.getClock().getTime())),r.reduceTasks.every(p=>p.state==="SUCCEEDED")){r.state="SUCCEEDED",r.finishTime=this.engine.getClock().getTime();const p=`hadoop	2
hello	2
world	2
`,d=`${r.outputPath}/part-r-00000`;this.nameNode.createAndWriteFile(d,p),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("JOB_COMPLETED","MAPREDUCE",r.id,{durationMs:r.finishTime-r.startTime},this.engine.getClock().getTime()))}}))})}getJobs(){return Array.from(this.activeJobs.values())}getJob(r){return this.activeJobs.get(r)}}class ey{constructor(){O(this,"links",new Map);O(this,"nodeRacks",new Map)}registerNode(r,u){this.nodeRacks.set(r,u)}getRackDistance(r,u){if(r===u)return 0;const i=this.nodeRacks.get(r),c=this.nodeRacks.get(u);return i&&c&&i===c?1:2}getLinkKey(r,u){const i=[r,u].sort();return`${i[0]}<->${i[1]}`}setLink(r){const u=this.getLinkKey(r.sourceNodeId,r.targetNodeId);this.links.set(u,r)}getLink(r,u){const i=this.getLinkKey(r,u),c=this.links.get(i);if(c)return c;const f=this.getRackDistance(r,u),p={sourceNodeId:r,targetNodeId:u,latencyMs:f===0?0:f===1?2:15,bandwidthMbps:f===0?1e4:f===1?1e3:100,packetLossPercent:0,status:"ONLINE"};return this.links.set(i,p),p}calculateTransferTimeMs(r,u,i){const c=this.getLink(r,u);if(c.status==="DISCONNECTED")return{transferTimeMs:1/0,isFailed:!0};if(c.packetLossPercent>0&&Math.random()*100<c.packetLossPercent)return{transferTimeMs:c.latencyMs*5,isFailed:!0};const f=c.bandwidthMbps*1e6/8,p=i/f*1e3,d=c.latencyMs+p;return{transferTimeMs:Math.max(1,Math.round(d)),isFailed:!1}}disconnectNode(r){this.links.forEach(u=>{(u.sourceNodeId===r||u.targetNodeId===r)&&(u.status="DISCONNECTED")})}reconnectNode(r){this.links.forEach(u=>{(u.sourceNodeId===r||u.targetNodeId===r)&&(u.status="ONLINE")})}disconnectRack(r){Array.from(this.nodeRacks.entries()).filter(([i,c])=>c===r).map(([i,c])=>i).forEach(i=>this.disconnectNode(i))}restoreRack(r){Array.from(this.nodeRacks.entries()).filter(([i,c])=>c===r).map(([i,c])=>i).forEach(i=>this.reconnectNode(i))}}class ty{constructor(r,u,i,c){O(this,"nameNode");O(this,"dataNodes");O(this,"network");O(this,"engine");this.nameNode=r,this.dataNodes=u,this.network=i,this.engine=c}killNode(r){const u=this.dataNodes.get(r);u&&u.kill()}restartNode(r){const u=this.dataNodes.get(r);u&&u.restart()}corruptBlock(r){const u=this.nameNode.getBlock(r);if(u&&u.replicas.length>0){const i=u.replicas[0].nodeId,c=this.dataNodes.get(i);c&&c.corruptBlockChecksum(r)}}disconnectRack(r){this.network.disconnectRack(r),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("RACK_DISCONNECTED","FAILURE","FailureInjector",{rackId:r},this.engine.getClock().getTime()))}restoreRack(r){this.network.restoreRack(r),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("RACK_RESTORED","FAILURE","FailureInjector",{rackId:r},this.engine.getClock().getTime()))}}class ay{constructor(r,u,i){O(this,"nameNode");O(this,"resourceManager");O(this,"engine");this.nameNode=r,this.resourceManager=u,this.engine=i}calculateHealthScore(){const r=this.nameNode.getDataNodes();if(r.length===0)return{score:100,nodeAvailabilityPercent:100,blockHealthPercent:100,yarnCapacityPercent:100,status:"EXCELLENT",factors:["Cluster initializing"]};const u=r.filter(z=>z.state==="RUNNING").length,i=Math.round(u/r.length*100),c=this.nameNode.runFSCK("/"),f=c.totalBlocks===0?100:Math.round((c.totalBlocks-c.corruptBlocks-c.missingBlocks-c.underReplicatedBlocks)/c.totalBlocks*100),p=this.resourceManager.getQueues(),d=p.reduce((z,Y)=>z+Y.usedCapacityPercent,0)/(p.length||1),y=Math.round(100-d),h=Math.round(i*.4+f*.4+y*.2),b=[];i<100&&b.push(`${r.length-u} DataNode(s) offline`),c.underReplicatedBlocks>0&&b.push(`${c.underReplicatedBlocks} under-replicated block(s)`),c.corruptBlocks>0&&b.push(`${c.corruptBlocks} corrupt block(s)`),c.missingBlocks>0&&b.push(`${c.missingBlocks} missing block(s)`);let w="EXCELLENT";return h<50?w="CRITICAL":h<75?w="DEGRADED":h<90&&(w="GOOD"),{score:h,nodeAvailabilityPercent:i,blockHealthPercent:f,yarnCapacityPercent:y,status:w,factors:b}}explainDecision(r,u){if(r==="BLOCK_PLACEMENT"){const i=this.nameNode.getBlock(u);if(!i)return`Block metadata for '${u}' not found.`;const c=i.replicas.map(f=>`${f.nodeId} (Rack: ${f.rackId})`).join(", ");return`Block '${u}' replica placement decision:
Selected ${i.replicas.length} target DataNodes based on Hadoop Default Block Placement Policy:
1st Replica: Local node
2nd Replica: Remote rack
3rd Replica: Same remote rack
Placed on: ${c}`}return r==="DATA_LOCALITY"?`Task '${u}' was scheduled using NODE_LOCAL preference to avoid network transfer overheads by running on the DataNode holding the target HDFS block replica.`:`No detailed decision trace recorded for ${r} on ${u}.`}}function ny(E){let r=E;const u=r.indexOf("#");u!==-1&&(r=r.substring(0,u));const i=r.trim();if(!i||E.trim().startsWith("#"))return{raw:E,utility:"comment",flags:new Set,positionalArgs:[]};const c=i.split(/\s+/).filter(Boolean),f=c[0].toLowerCase();if(f==="clear")return{raw:E,utility:"clear",flags:new Set,positionalArgs:[]};if(f==="help")return{raw:E,utility:"help",flags:new Set,positionalArgs:c.slice(1)};if(["start-dfs.sh","start-dfs","stop-dfs.sh","stop-dfs","start-yarn.sh","start-yarn","stop-yarn.sh","stop-yarn","start-all.sh","start-all","stop-all.sh","stop-all"].includes(f))return{raw:E,utility:"script",action:f,flags:new Set,positionalArgs:c.slice(1)};if(["ls","pwd","cd","mkdir","echo","cat","rm","touch","whoami","grep","wc","head","tail","history","top","df","free","uname","ifconfig","ip","ping","netstat","ps","jps","kill","killall","sort","uniq","node","python","python3","cp","mv","hive","pig","download","get","spark","pyspark","spark-shell","spark-submit","about"].includes(f))return{raw:E,utility:"linux",action:f,flags:new Set,positionalArgs:c.slice(1)};if(f!=="hdfs"&&f!=="hadoop"&&f!=="yarn")return{raw:E,utility:"unknown",flags:new Set,positionalArgs:c};const p=f;let d,y;const h=new Set,b=[];let w=1;for(w<c.length&&!c[w].startsWith("-")&&(d=c[w],w++);w<c.length;){const z=c[w];z.startsWith("-")?!y&&(d==="namenode"||d==="dfs"||d==="dfsadmin"||d==="rmadmin"||d==="application"||d==="logs"||d==="haadmin"||d==="storagepolicies"||d==="ec"||d==="cacheadmin"||d==="balancer"||d==="diskbalancer"||d==="queue"||d==="crypto"||d==="node")?y=z:h.add(z):b.push(z),w++}return{raw:E,utility:p,subcommand:d,action:y,flags:h,positionalArgs:b}}const Kd=`
import sys
import types
import re
import json
import os
import math
import hashlib
import datetime
import random
import uuid as uuid_module

class DataType:
    def __repr__(self):
        return self.__class__.__name__

class StringType(DataType): pass
class IntegerType(DataType): pass
class LongType(DataType): pass
class DoubleType(DataType): pass
class FloatType(DataType): pass
class ByteType(DataType): pass
class ShortType(DataType): pass
class BinaryType(DataType): pass
class NullType(DataType): pass
class DecimalType(DataType):
    def __init__(self, precision=10, scale=0): self.precision = precision; self.scale = scale
    def __repr__(self): return f"DecimalType({self.precision}, {self.scale})"
class BooleanType(DataType): pass
class TimestampType(DataType): pass
class DateType(DataType): pass

class StructField:
    def __init__(self, name, dataType, nullable=True, metadata=None):
        self.name = name
        self.dataType = dataType
        self.nullable = nullable
        self.metadata = metadata or {}

    def __repr__(self):
        return f"StructField('{self.name}', {self.dataType}, {self.nullable})"

class StructType(DataType):
    def __init__(self, fields=None):
        self.fields = fields or []

    def __repr__(self):
        fields_str = ", ".join(repr(f) for f in self.fields)
        return f"StructType([{fields_str}])"
    def add(self, field, data_type=None, nullable=True, metadata=None):
        self.fields.append(field if isinstance(field, StructField) else StructField(field, data_type, nullable, metadata))
        return self
    def fieldNames(self): return [field.name for field in self.fields]
    def __iter__(self): return iter(self.fields)
    def __len__(self): return len(self.fields)

class ArrayType(DataType):
    def __init__(self, elementType, containsNull=True):
        self.elementType = elementType
        self.containsNull = containsNull

class MapType(DataType):
    def __init__(self, keyType, valueType, valueContainsNull=True):
        self.keyType = keyType
        self.valueType = valueType

class Row(dict):
    """Small dict-backed equivalent of pyspark.sql.Row."""
    def __init__(self, *args, **kwargs):
        if len(args) == 1 and isinstance(args[0], dict):
            super().__init__(args[0])
        elif len(args) == 1 and not kwargs:
            try: super().__init__(dict(args[0]))
            except (TypeError, ValueError): super().__init__({str(i): v for i, v in enumerate(args[0])})
        elif args:
            super().__init__({str(i): v for i, v in enumerate(args)})
        else:
            super().__init__(kwargs)
    def __getattr__(self, name):
        try: return self[name]
        except KeyError: raise AttributeError(name)
    def __getstate__(self): return dict(self)
    def __repr__(self): return "Row(" + ", ".join(f"{k}={v!r}" for k, v in self.items()) + ")"

def _row_factory(*fields):
    if fields and all(isinstance(f, str) for f in fields):
        return lambda *values: Row(zip(fields, values))
    return Row(*fields)

class Column:
    def __init__(self, name, expr=None, evaluator=None):
        self.name = name
        self.expr = expr or name
        self._evaluator = evaluator

    def evaluate(self, row):
        if self._evaluator: return self._evaluator(row)
        return row.get(self.name)

    def _binary(self, other, symbol, operation):
        right = other if isinstance(other, Column) else Functions.lit(other)
        return Column(f"{self.expr} {symbol} {right.expr}", f"({self.expr} {symbol} {right.expr})", lambda row: operation(self.evaluate(row), right.evaluate(row)))

    def __gt__(self, other): return self._binary(other, '>', lambda a, b: a is not None and b is not None and a > b)
    def __lt__(self, other): return self._binary(other, '<', lambda a, b: a is not None and b is not None and a < b)
    def __ge__(self, other): return self._binary(other, '>=', lambda a, b: a is not None and b is not None and a >= b)
    def __le__(self, other): return self._binary(other, '<=', lambda a, b: a is not None and b is not None and a <= b)
    def __eq__(self, other): return self._binary(other, '==', lambda a, b: a == b)
    def __ne__(self, other): return self._binary(other, '!=', lambda a, b: a != b)
    def __add__(self, other): return self._binary(other, '+', lambda a, b: a + b)
    def __sub__(self, other): return self._binary(other, '-', lambda a, b: a - b)
    def __mul__(self, other): return self._binary(other, '*', lambda a, b: a * b)
    def __truediv__(self, other): return self._binary(other, '/', lambda a, b: a / b)
    def __floordiv__(self, other): return self._binary(other, '//', lambda a, b: a // b)
    def __mod__(self, other): return self._binary(other, '%', lambda a, b: a % b)
    def __pow__(self, other): return self._binary(other, '**', lambda a, b: a ** b)
    def __and__(self, other): return self._binary(other, 'AND', lambda a, b: bool(a) and bool(b))
    def __or__(self, other): return self._binary(other, 'OR', lambda a, b: bool(a) or bool(b))
    def __invert__(self): return Column(self.name, f"NOT ({self.expr})", lambda row: not self.evaluate(row))
    def alias(self, new_name): return Column(new_name, self.expr, self._evaluator)
    def cast(self, dataType): return Column(self.name, f"CAST({self.expr} AS {dataType})", self._evaluator)
    def isNull(self): return Column(self.name, f"({self.expr} IS NULL)", lambda row: self.evaluate(row) is None)
    def isNotNull(self): return Column(self.name, f"({self.expr} IS NOT NULL)", lambda row: self.evaluate(row) is not None)
    def isin(self, *values):
        if len(values) == 1 and isinstance(values[0], (list, tuple, set)): values = tuple(values[0])
        return Column(self.name, f"({self.expr} IN {repr(tuple(values))})", lambda row: self.evaluate(row) in values)
    def between(self, lower, upper): return (self >= lower) & (self <= upper)
    def contains(self, value): return Column(self.name, f"CONTAINS({self.expr}, {value!r})")
    def startswith(self, value): return Column(self.name, f"STARTSWITH({self.expr}, {value!r})")
    def endswith(self, value): return Column(self.name, f"ENDSWITH({self.expr}, {value!r})")
    def asc(self): return Column(self.name, f"{self.expr} ASC")
    def desc(self): return Column(self.name, f"{self.expr} DESC", self._evaluator)
    def asc_nulls_first(self): return self.asc()
    def asc_nulls_last(self): return self.asc()
    def desc_nulls_first(self): return self.desc()
    def desc_nulls_last(self): return self.desc()

    def otherwise(self, value):
        self._otherwise = value
        condition = getattr(self, '_when_condition', None)
        yes_value = getattr(self, '_when_value', None)
        if condition is not None:
            no_value = value if isinstance(value, Column) else Functions.lit(value)
            yes_value = yes_value if isinstance(yes_value, Column) else Functions.lit(yes_value)
            self._evaluator = lambda row: yes_value.evaluate(row) if condition.evaluate(row) else no_value.evaluate(row)
        return self

class Functions:
    @staticmethod
    def col(name): return Column(name)
    column = col
    @staticmethod
    def lit(val): return Column(repr(val), repr(val), lambda row: val)
    @staticmethod
    def sum(col): return Column(f"SUM({col.name if isinstance(col, Column) else col})")
    @staticmethod
    def avg(col): return Column(f"AVG({col.name if isinstance(col, Column) else col})")
    @staticmethod
    def min(col): return Column(f"MIN({col.name if isinstance(col, Column) else col})")
    @staticmethod
    def max(col): return Column(f"MAX({col.name if isinstance(col, Column) else col})")
    @staticmethod
    def count(col="*"): return Column(f"COUNT({col.name if isinstance(col, Column) else col})")
    @staticmethod
    def countDistinct(*cols): return Column(f"COUNT(DISTINCT {', '.join(c.name if isinstance(c, Column) else c for c in cols)})")
    @staticmethod
    def approx_count_distinct(col, rsd=0.05): return Functions.countDistinct(col)
    @staticmethod
    def first(col, ignorenulls=False): return Column(f"FIRST({getattr(col, 'name', col)})")
    @staticmethod
    def last(col, ignorenulls=False): return Column(f"LAST({getattr(col, 'name', col)})")
    @staticmethod
    def collect_list(col): return Column(f"COLLECT_LIST({getattr(col, 'name', col)})")
    @staticmethod
    def collect_set(col): return Column(f"COLLECT_SET({getattr(col, 'name', col)})")
    @staticmethod
    def lower(col):
        source = col if isinstance(col, Column) else Functions.col(col)
        return Column(f"LOWER({source.name})", f"LOWER({source.expr})", lambda row: str(source.evaluate(row)).lower() if source.evaluate(row) is not None else None)
    @staticmethod
    def upper(col):
        source = col if isinstance(col, Column) else Functions.col(col)
        return Column(f"UPPER({source.name})", f"UPPER({source.expr})", lambda row: str(source.evaluate(row)).upper() if source.evaluate(row) is not None else None)
    @staticmethod
    def concat(*cols): return Column(f"CONCAT({', '.join(c.name if isinstance(c, Column) else c for c in cols)})")
    @staticmethod
    def concat_ws(sep, *cols): return Column(f"CONCAT_WS({sep!r}, {', '.join(getattr(c, 'name', c) for c in cols)})")
    @staticmethod
    def coalesce(*cols): return Column(f"COALESCE({', '.join(getattr(c, 'name', c) for c in cols)})")
    @staticmethod
    def abs(col): return Column(f"ABS({getattr(col, 'name', col)})")
    @staticmethod
    def round(col, scale=0): return Column(f"ROUND({getattr(col, 'name', col)}, {scale})")
    @staticmethod
    def ceil(col): return Column(f"CEIL({getattr(col, 'name', col)})")
    @staticmethod
    def floor(col): return Column(f"FLOOR({getattr(col, 'name', col)})")
    @staticmethod
    def sqrt(col): return Column(f"SQRT({getattr(col, 'name', col)})")
    @staticmethod
    def length(col): return Column(f"LENGTH({getattr(col, 'name', col)})")
    @staticmethod
    def substring(col, pos, length): return Column(f"SUBSTRING({getattr(col, 'name', col)}, {pos}, {length})")
    @staticmethod
    def regexp_replace(col, pattern, replacement): return Column(f"REGEXP_REPLACE({getattr(col, 'name', col)}, {pattern!r}, {replacement!r})")
    @staticmethod
    def when(condition, value):
        result = Column(getattr(condition, 'name', ''), f"CASE WHEN {getattr(condition, 'expr', condition)} THEN {value!r}")
        result._when_condition = condition if isinstance(condition, Column) else Functions.lit(bool(condition))
        result._when_value = value
        return result
    @staticmethod
    def expr(expression): return Column(expression, expression)
    @staticmethod
    def array(*cols): return Column(f"ARRAY({', '.join(getattr(c, 'name', c) for c in cols)})")
    @staticmethod
    def struct(*cols): return Column(f"STRUCT({', '.join(getattr(c, 'name', c) for c in cols)})")
    @staticmethod
    def monotonically_increasing_id(): return Column("monotonically_increasing_id()")
    @staticmethod
    def current_timestamp(): return Column("current_timestamp()")
    @staticmethod
    def current_date(): return Column("current_date()")
    @staticmethod
    def udf(function=None, returnType=None):
        if function is None: return lambda actual_function: Functions.udf(actual_function, returnType)
        def apply_udf(*args):
            if len(args) == 1 and isinstance(args[0], Column):
                source = args[0]
                return Column(f"{getattr(function, '__name__', 'udf')}({source.name})", evaluator=lambda row: function(source.evaluate(row)))
            return function(*args)
        return apply_udf
    pandas_udf = udf
    @staticmethod
    def isnan(col):
        source = col if isinstance(col, Column) else Functions.col(col)
        return Column(f"isnan({source.name})", evaluator=lambda row: isinstance(source.evaluate(row), float) and source.evaluate(row) != source.evaluate(row))
    @staticmethod
    def greatest(*cols):
        sources = [c if isinstance(c, Column) else Functions.col(c) for c in cols]
        return Column("greatest(" + ', '.join(c.name for c in sources) + ")", evaluator=lambda row: max((c.evaluate(row) for c in sources if c.evaluate(row) is not None), default=None))
    @staticmethod
    def least(*cols):
        sources = [c if isinstance(c, Column) else Functions.col(c) for c in cols]
        return Column("least(" + ', '.join(c.name for c in sources) + ")", evaluator=lambda row: min((c.evaluate(row) for c in sources if c.evaluate(row) is not None), default=None))

# A wide, import-compatible Spark SQL function catalog. These functions execute
# against local rows in Pyodide; they do not dispatch to a Spark JVM.
_SPARK_SQL_FUNCTION_NAMES = '''
acos asin atan atan2 cbrt cos cosh cot degrees exp factorial hypot log log10 log1p log2 pi radians rand randn rint signum sin sinh tan tanh try_add try_divide try_multiply try_subtract uuid current_user user spark_partition_id input_file_name
upper lower initcap length char_length character_length bit_length octet_length trim ltrim rtrim btrim reverse ascii chr soundex instr locate position substring substr substring_index split concat_ws format_string printf regexp_extract regexp_extract_all regexp_replace regexp_like replace translate overlay lpad rpad repeat space startswith endswith contains levenshtein left right
array_contains array_distinct array_intersect array_except array_union array_compact array_join array_max array_min array_position array_remove array_sort array_insert array_prepend array_append array_repeat arrays_overlap arrays_zip flatten sequence shuffle slice sort_array size cardinality element_at try_element_at map_contains_key map_entries map_from_arrays map_from_entries map_keys map_values map_concat map_filter map_zip_with transform transform_keys transform_values zip_with exists forall
year quarter month day dayofmonth dayofweek dayofyear weekofyear hour minute second make_date make_timestamp to_date to_timestamp try_to_date date_format date_add date_sub datediff months_between add_months last_day next_day trunc date_trunc from_unixtime unix_timestamp to_unix_timestamp timestamp_seconds timestamp_millis timestamp_micros current_timezone convert_timezone localtimestamp now current_timestamp current_date
isnan isnull isnotnull nvl nvl2 nullif nanvl ifnull iff decode greatest least coalesce
md5 sha1 sha2 crc32 xxhash64 hash base64 unbase64 hex unhex soundex
to_json from_json get_json_object json_tuple schema_of_json
assert_true raise_error typeof version
row_number rank dense_rank percent_rank cume_dist ntile lag lead first_value last_value nth_value
sum_distinct avg_distinct every bool_and bool_or bit_and bit_or bit_xor corr covar_pop covar_samp kurtosis skewness stddev stddev_pop stddev_samp variance var_pop var_samp percentile percentile_approx approx_percentile approx_count_distinct
'''.split()

def _spark_local_value(value, row):
    if isinstance(value, Column): return value.evaluate(row)
    if isinstance(value, str) and value in row: return row.get(value)
    return value

def _spark_local_function(name, arguments, row):
    values = [_spark_local_value(arg, row) for arg in arguments]
    first = values[0] if values else None
    if name in ('upper',): return str(first).upper() if first is not None else None
    if name in ('lower',): return str(first).lower() if first is not None else None
    if name == 'initcap': return str(first).title() if first is not None else None
    if name in ('length', 'char_length', 'character_length', 'size', 'cardinality'): return len(first) if first is not None else None
    if name == 'bit_length': return len(str(first).encode()) * 8 if first is not None else None
    if name == 'octet_length': return len(str(first).encode()) if first is not None else None
    if name in ('trim', 'btrim'): return str(first).strip() if first is not None else None
    if name == 'ltrim': return str(first).lstrip() if first is not None else None
    if name == 'rtrim': return str(first).rstrip() if first is not None else None
    if name == 'reverse': return first[::-1] if first is not None else None
    if name == 'ascii': return ord(str(first)[0]) if first else None
    if name == 'chr': return chr(int(first)) if first is not None else None
    if name == 'concat': return ''.join('' if v is None else str(v) for v in values)
    if name == 'concat_ws': return str(values[0]).join(str(v) for v in values[1:] if v is not None) if values else None
    if name in ('substring', 'substr'):
        if first is None: return None
        start = max(0, int(values[1] or 1) - 1)
        return str(first)[start:] if len(values) < 3 or values[2] is None else str(first)[start:start + int(values[2])]
    if name == 'substring_index':
        bits = str(first).split(str(values[1])); count = int(values[2])
        return str(values[1]).join(bits[:count]) if count >= 0 else str(values[1]).join(bits[count:])
    if name == 'split': return re.split(str(values[1]), str(first))
    if name == 'replace': return str(first).replace(str(values[1]), str(values[2]))
    if name == 'translate': return str.maketrans(str(values[1]), str(values[2])) and str(first).translate(str.maketrans(str(values[1]), str(values[2])))
    if name == 'lpad': return str(first).rjust(int(values[1]), str(values[2]) if len(values) > 2 else ' ')
    if name == 'rpad': return str(first).ljust(int(values[1]), str(values[2]) if len(values) > 2 else ' ')
    if name == 'repeat': return str(first) * int(values[1])
    if name == 'space': return ' ' * int(first)
    if name == 'left': return str(first)[:int(values[1])]
    if name == 'right': return str(first)[-int(values[1]):]
    if name == 'instr': return str(first).find(str(values[1])) + 1
    if name == 'locate': return str(values[1]).find(str(first), max(0, int(values[2]) - 1) if len(values) > 2 else 0) + 1
    if name in ('startswith', 'endswith', 'contains'):
        if first is None: return None
        target = str(values[1])
        return first.startswith(target) if name == 'startswith' else first.endswith(target) if name == 'endswith' else target in first
    if name == 'levenshtein':
        a, b = str(first), str(values[1]); prev = list(range(len(b) + 1))
        for i, ca in enumerate(a, 1):
            curr = [i]
            for j, cb in enumerate(b, 1): curr.append(min(curr[-1] + 1, prev[j] + 1, prev[j-1] + (ca != cb)))
            prev = curr
        return prev[-1]
    if name in ('abs',): return abs(first)
    if name == 'ceil': return math.ceil(first)
    if name == 'floor': return math.floor(first)
    if name == 'round': return round(first, int(values[1]) if len(values) > 1 else 0)
    if name == 'sqrt': return math.sqrt(first)
    if name == 'pi': return math.pi
    if name == 'rand': return random.random()
    if name == 'randn': return random.gauss(0, 1)
    if name == 'uuid': return str(uuid_module.uuid4())
    if name in ('current_user', 'user'): return 'pyodide'
    if name in ('spark_partition_id', 'input_file_name'): return 0 if name == 'spark_partition_id' else ''
    if name == 'cbrt': return math.copysign(abs(first) ** (1/3), first)
    if name == 'exp': return math.exp(first)
    if name == 'log': return math.log(first, values[1]) if len(values) > 1 else math.log(first)
    if name == 'log10': return math.log10(first)
    if name == 'log2': return math.log2(first)
    if name == 'log1p': return math.log1p(first)
    if name == 'pow': return math.pow(first, values[1])
    if name == 'signum': return (first > 0) - (first < 0) if first is not None else None
    if name in ('acos', 'asin', 'atan', 'cos', 'cosh', 'sin', 'sinh', 'tan', 'tanh'):
        return getattr(math, name)(first)
    if name == 'atan2': return math.atan2(first, values[1])
    if name == 'degrees': return math.degrees(first)
    if name == 'radians': return math.radians(first)
    if name == 'greatest': return max((v for v in values if v is not None), default=None)
    if name == 'least': return min((v for v in values if v is not None), default=None)
    if name == 'coalesce': return next((v for v in values if v is not None), None)
    if name in ('nvl', 'ifnull'): return values[1] if first is None else first
    if name == 'nvl2': return values[1] if first is not None else values[2]
    if name == 'nullif': return None if first == values[1] else first
    if name in ('isnull',): return first is None
    if name in ('isnotnull',): return first is not None
    if name == 'isnan': return isinstance(first, float) and math.isnan(first)
    if name == 'if': return values[1] if first else values[2]
    if name == 'array': return values
    if name == 'struct': return {getattr(arg, 'name', str(index)): value for index, (arg, value) in enumerate(zip(arguments, values))}
    if name == 'array_contains': return values[1] in (first or [])
    if name == 'array_distinct': return list(dict.fromkeys(first or []))
    if name == 'array_intersect': return [v for v in (first or []) if v in (values[1] or [])]
    if name == 'array_except': return [v for v in (first or []) if v not in (values[1] or [])]
    if name == 'array_union': return list(dict.fromkeys((first or []) + (values[1] or [])))
    if name == 'array_compact': return [v for v in (first or []) if v is not None]
    if name == 'array_join': return str(values[1]).join(str(v) for v in (first or []) if v is not None)
    if name in ('array_max', 'array_min'): return (max if name == 'array_max' else min)(first) if first else None
    if name == 'array_position':
        try: return first.index(values[1]) + 1
        except (ValueError, AttributeError): return 0
    if name == 'array_remove': return [v for v in (first or []) if v != values[1]]
    if name in ('array_sort', 'sort_array'): return sorted(first or [], reverse=bool(values[1]) if len(values) > 1 else False)
    if name == 'arrays_overlap': return bool(set(first or []) & set(values[1] or []))
    if name == 'flatten': return [item for sub in (first or []) for item in (sub or [])]
    if name == 'slice': return (first or [])[int(values[1])-1:int(values[1])-1+int(values[2])]
    if name == 'element_at' or name == 'try_element_at': return first[values[1]-1] if isinstance(first, (list, tuple)) and values[1] > 0 else first.get(values[1]) if isinstance(first, dict) else None
    if name == 'map_keys': return list(first.keys()) if first else []
    if name == 'map_values': return list(first.values()) if first else []
    if name == 'map_entries': return list(first.items()) if first else []
    if name == 'map_concat': return {k: v for mapping in values if mapping for k, v in mapping.items()}
    if name in ('to_date', 'to_timestamp'):
        if first is None: return None
        if isinstance(first, (datetime.date, datetime.datetime)): return first
        return datetime.datetime.fromisoformat(str(first).replace('Z', '+00:00'))
    if name in ('year', 'quarter', 'month', 'day', 'dayofmonth', 'dayofweek', 'dayofyear', 'hour', 'minute', 'second'):
        dt = first if isinstance(first, (datetime.date, datetime.datetime)) else datetime.datetime.fromisoformat(str(first))
        return {'year': lambda: dt.year, 'quarter': lambda: (dt.month-1)//3+1, 'month': lambda: dt.month, 'day': lambda: dt.day, 'dayofmonth': lambda: dt.day, 'dayofweek': lambda: (dt.weekday()+1)%7+1, 'dayofyear': lambda: dt.timetuple().tm_yday, 'hour': lambda: getattr(dt, 'hour', 0), 'minute': lambda: getattr(dt, 'minute', 0), 'second': lambda: getattr(dt, 'second', 0)}[name]()
    if name in ('date_add', 'date_sub'):
        dt = first if isinstance(first, (datetime.date, datetime.datetime)) else datetime.date.fromisoformat(str(first)[:10])
        return dt + datetime.timedelta(days=int(values[1]) * (1 if name == 'date_add' else -1))
    if name == 'datediff':
        end = first if isinstance(first, datetime.date) else datetime.date.fromisoformat(str(first)[:10]); start = values[1] if isinstance(values[1], datetime.date) else datetime.date.fromisoformat(str(values[1])[:10])
        return (end-start).days
    if name == 'last_day':
        dt = first if isinstance(first, datetime.date) else datetime.date.fromisoformat(str(first)[:10]); next_month = dt.replace(day=28) + datetime.timedelta(days=4)
        return next_month - datetime.timedelta(days=next_month.day)
    if name == 'date_format':
        dt = first if isinstance(first, (datetime.date, datetime.datetime)) else datetime.datetime.fromisoformat(str(first)[:19]); return dt.strftime(str(values[1]))
    if name in ('current_date', 'today'): return datetime.date.today()
    if name in ('current_timestamp', 'now', 'localtimestamp'): return datetime.datetime.now()
    if name == 'from_unixtime': return datetime.datetime.fromtimestamp(float(first)).strftime(str(values[1]) if len(values) > 1 else '%Y-%m-%d %H:%M:%S')
    if name in ('timestamp_seconds', 'timestamp_millis', 'timestamp_micros'):
        divisor = 1 if name == 'timestamp_seconds' else 1000 if name == 'timestamp_millis' else 1000000
        return datetime.datetime.fromtimestamp(float(first) / divisor)
    if name == 'unix_timestamp':
        dt = datetime.datetime.now() if first is None else (first if isinstance(first, datetime.datetime) else datetime.datetime.fromisoformat(str(first)[:19])); return int(dt.timestamp())
    if name in ('md5', 'sha1', 'sha2'):
        bits = int(values[1]) if name == 'sha2' and len(values) > 1 else (256 if name == 'sha2' else None)
        algorithm = 'sha256' if bits == 256 else 'sha224' if bits == 224 else 'sha384' if bits == 384 else 'sha512' if bits == 512 else 'md5' if name == 'md5' else 'sha1'
        return hashlib.new(algorithm, str(first).encode()).hexdigest()
    if name == 'crc32':
        import zlib
        return zlib.crc32(str(first).encode())
    if name == 'hex': return str(first).encode().hex().upper()
    if name == 'unhex': return bytes.fromhex(str(first)).decode(errors='replace')
    if name == 'base64':
        import base64
        return base64.b64encode(str(first).encode()).decode()
    if name == 'unbase64':
        import base64
        return base64.b64decode(str(first)).decode(errors='replace')
    if name == 'regexp_replace': return re.sub(str(values[1]), str(values[2]), str(first))
    if name == 'regexp_extract':
        match = re.search(str(values[1]), str(first)); group = int(values[2]) if len(values) > 2 else 1
        return match.group(group) if match else ''
    if name == 'regexp_like': return bool(re.search(str(values[1]), str(first)))
    if name == 'soundex':
        text = re.sub('[^A-Z]', '', str(first).upper())
        if not text: return ''
        codes = {'BFPV':'1','CGJKQSXZ':'2','DT':'3','L':'4','MN':'5','R':'6'}
        def code(ch): return next((value for chars, value in codes.items() if ch in chars), '0')
        encoded, previous = text[0], code(text[0])
        for ch in text[1:]:
            current = code(ch)
            if current != '0' and current != previous: encoded += current
            previous = current
        return (encoded[:4] + '000')[:4]
    if name == 'format_string': return str(first) % tuple(values[1:])
    if name == 'greatest': return max((v for v in values if v is not None), default=None)
    if name == 'least': return min((v for v in values if v is not None), default=None)
    raise NotImplementedError(f"pyspark.sql.functions.{name} is importable but not implemented by the local Pyodide runtime")

def _make_spark_function(function_name):
    def local_function(*arguments):
        expression = function_name.upper() + '(' + ', '.join(getattr(arg, 'expr', repr(arg)) for arg in arguments) + ')'
        return Column(expression, expression, lambda row: _spark_local_function(function_name, arguments, row))
    local_function.__name__ = function_name
    local_function.__doc__ = f"Local PySpark-compatible {function_name} expression."
    return staticmethod(local_function)

for _function_name in _SPARK_SQL_FUNCTION_NAMES:
    if _function_name not in {'col', 'column', 'lit', 'sum', 'avg', 'min', 'max', 'count', 'countDistinct', 'approx_count_distinct', 'first', 'last', 'collect_list', 'collect_set', 'when', 'expr', 'udf', 'pandas_udf'}:
        setattr(Functions, _function_name, _make_spark_function(_function_name))

class RDD:
    def __init__(self, data, sc=None, num_partitions=1):
        self._data = list(data)
        self.sc = sc
        self._num_partitions = max(1, int(num_partitions or 1))

    def map(self, f): return RDD([f(x) for x in self._data], self.sc, self._num_partitions)
    def filter(self, f): return RDD([x for x in self._data if f(x)], self.sc, self._num_partitions)
    def flatMap(self, f):
        res = []
        for x in self._data:
            res.extend(f(x))
        return RDD(res, self.sc, self._num_partitions)
    def mapPartitions(self, f): return RDD(f(iter(self._data)), self.sc, self._num_partitions)
    def mapPartitionsWithIndex(self, f): return RDD([value for value in f(0, iter(self._data))], self.sc, self._num_partitions)
    def flatMapValues(self, f): return RDD([(k, value) for k, values in self._data for value in f(values)], self.sc, self._num_partitions)
    def reduce(self, f):
        if not self._data: raise ValueError("Can't reduce empty RDD")
        acc = self._data[0]
        for x in self._data[1:]:
            acc = f(acc, x)
        return acc
    def collect(self): return list(self._data)
    def count(self): return len(self._data)
    def first(self): return self._data[0] if self._data else None
    def take(self, n): return self._data[:n]
    def isEmpty(self): return not self._data
    def distinct(self, numPartitions=None): return RDD(list(dict.fromkeys(self._data)), self.sc, numPartitions or self._num_partitions)
    def sample(self, withReplacement, fraction, seed=None):
        rng = random.Random(seed)
        if withReplacement:
            return RDD([x for x in self._data for _ in range(max(0, int(rng.random() < fraction)))], self.sc, self._num_partitions)
        return RDD([x for x in self._data if rng.random() < fraction], self.sc, self._num_partitions)
    def takeSample(self, withReplacement, num, seed=None):
        rng = random.Random(seed)
        if withReplacement: return [rng.choice(self._data) for _ in range(num)] if self._data else []
        return rng.sample(self._data, min(num, len(self._data)))
    def sum(self): return sum(self._data)
    def mean(self): return self.sum() / len(self._data) if self._data else float('nan')
    def max(self): return max(self._data)
    def min(self): return min(self._data)
    def fold(self, zeroValue, op): return self.aggregate(zeroValue, op, op)
    def aggregate(self, zeroValue, seqOp, combOp):
        result = zeroValue
        for item in self._data: result = seqOp(result, item)
        return result
    def zip(self, other):
        if len(self._data) != len(other._data): raise ValueError('Can only zip RDDs with the same number of elements')
        return RDD(zip(self._data, other._data), self.sc)
    def cartesian(self, other): return RDD(((a, b) for a in self._data for b in other._data), self.sc)
    def sortByKey(self, ascending=True): return self.sortBy(lambda pair: pair[0], ascending)
    def partitionBy(self, numPartitions, partitionFunc=hash): return RDD(self._data, self.sc, numPartitions)
    def cache(self): return self
    def persist(self, *args, **kwargs): return self
    def unpersist(self, *args, **kwargs): return self
    def sortBy(self, keyfunc, ascending=True):
        return RDD(sorted(self._data, key=keyfunc, reverse=not ascending), self.sc)
    def reduceByKey(self, f):
        d = {}
        for k, v in self._data:
            d[k] = f(d[k], v) if k in d else v
        return RDD(list(d.items()), self.sc)
    def groupByKey(self):
        d = {}
        for k, v in self._data:
            d.setdefault(k, []).append(v)
        return RDD(list(d.items()), self.sc)
    def mapValues(self, f): return RDD([(k, f(v)) for k, v in self._data], self.sc)
    def keys(self): return RDD([k for k, _ in self._data], self.sc)
    def values(self): return RDD([v for _, v in self._data], self.sc)
    def union(self, other): return RDD(self._data + other._data, self.sc)
    def takeOrdered(self, n, key=None): return sorted(self._data, key=key)[:n]
    def countByValue(self):
        result = {}
        for value in self._data: result[value] = result.get(value, 0) + 1
        return result
    def foreach(self, f):
        for item in self._data: f(item)
    def getNumPartitions(self): return self._num_partitions

class Broadcast:
    def __init__(self, value): self.value = value
    def unpersist(self, *args, **kwargs): pass
    def destroy(self, *args, **kwargs): pass

class SparkContext:
    def __init__(self, appName="PySparkApp", master="local[*]"):
        self.appName = appName
        self.master = master
    def parallelize(self, data, numSlices=None):
        return RDD(data, self, numSlices or 1)
    def emptyRDD(self): return RDD([], self)
    def broadcast(self, value): return Broadcast(value)
    def range(self, start, end=None, step=1, numSlices=None):
        if end is None: start, end = 0, start
        return RDD(range(start, end, step), self)
    def stop(self): pass
    def getConf(self): return SparkConf().setAppName(self.appName).setMaster(self.master)

class SparkConf:
    def __init__(self): self._settings = {}
    def set(self, key, value): self._settings[key] = value; return self
    def setAppName(self, name): return self.set('spark.app.name', name)
    def setMaster(self, master): return self.set('spark.master', master)
    def get(self, key, defaultValue=None): return self._settings.get(key, defaultValue)
    def getAll(self): return list(self._settings.items())

class GroupedData:
    def __init__(self, df, group_cols):
        self.df = df
        self.group_cols = [c if isinstance(c, str) else c.name for c in group_cols]

    def count(self):
        return self._aggregate('count')
    def sum(self, *cols):
        return self._aggregate('sum', cols)
    def avg(self, *cols):
        return self._aggregate('avg', cols)
    def max(self, *cols):
        return self._aggregate('max', cols)
    def min(self, *cols):
        return self._aggregate('min', cols)

    def agg(self, *exprs, **named_exprs):
        expressions = list(exprs) + list(named_exprs.values())
        if not expressions: return self.count()
        groups = {}
        for row in self.df._rows:
            key = tuple(row.get(c) for c in self.group_cols)
            groups.setdefault(key, []).append(row)
        output = []
        output_columns = list(self.group_cols)
        specs = []
        for index, expression in enumerate(expressions):
            text = getattr(expression, 'expr', '')
            match = re.match(r'([A-Z_]+)(([^)]+))', text)
            if not match: continue
            func, source = match.groups()
            output_name = list(named_exprs.keys())[index - len(exprs)] if index >= len(exprs) else getattr(expression, 'name', text)
            output_columns.append(output_name)
            specs.append((func.lower(), source, output_name))
        for key, rows in groups.items():
            result = dict(zip(self.group_cols, key))
            for func, source, output_name in specs:
                values = [r.get(source) for r in rows if r.get(source) is not None]
                if func == 'sum': value = sum(values)
                elif func in ('avg', 'mean'): value = sum(values) / len(values) if values else None
                elif func == 'min': value = min(values) if values else None
                elif func == 'max': value = max(values) if values else None
                elif func == 'count': value = len(values) if source != '*' else len(rows)
                else: continue
                result[output_name] = value
            output.append(result)
        return DataFrame(output, output_columns, self.df._spark)

    def _aggregate_from_expression(self, expression):
        expr = getattr(expression, 'expr', '')
        match = re.match(r'([A-Z_]+)(([^)]+))', expr)
        if not match: return self.df
        func, column = match.groups()
        method = {'SUM': 'sum', 'AVG': 'avg', 'MIN': 'min', 'MAX': 'max', 'COUNT': 'count'}.get(func)
        return self._aggregate(method, [column]) if method else self.df

    def _aggregate(self, func, target_cols=None):
        groups = {}
        for row in self.df._rows:
            key = tuple(row.get(c) for c in self.group_cols)
            groups.setdefault(key, []).append(row)

        res_columns = list(self.group_cols)
        if func == 'count':
            res_columns.append('count')
        elif target_cols:
            for c in target_cols:
                res_columns.append(f"{func}({c})")

        res_rows = []
        for key, g_rows in groups.items():
            r_dict = dict(zip(self.group_cols, key))
            if func == 'count':
                r_dict['count'] = len(g_rows)
            elif target_cols:
                for c in target_cols:
                    vals = [r.get(c) for r in g_rows if r.get(c) is not None]
                    if func == 'sum': r_dict[f"sum({c})"] = sum(vals)
                    elif func == 'avg': r_dict[f"avg({c})"] = sum(vals)/len(vals) if vals else 0
                    elif func == 'max': r_dict[f"max({c})"] = max(vals) if vals else None
                    elif func == 'min': r_dict[f"min({c})"] = min(vals) if vals else None
            res_rows.append(r_dict)

        return DataFrame(res_rows, res_columns, self.df._spark)

class DataFrame:
    def __init__(self, rows, columns, spark=None):
        self._spark = spark
        self.columns = list(columns)
        self._rows = []
        for r in rows:
            if isinstance(r, dict):
                self._rows.append(Row(r))
            elif isinstance(r, (list, tuple)):
                self._rows.append(dict(zip(self.columns, r)))
            else:
                self._rows.append({self.columns[0] if self.columns else 'value': r})

    def show(self, n=20, truncate=True):
        display_rows = self._rows[:n]
        if not display_rows and not self.columns:
            print("++\\n||\\n++\\n++")
            return

        cols = self.columns
        col_widths = {c: len(str(c)) for c in cols}
        for r in display_rows:
            for c in cols:
                val_str = str(r.get(c, 'null'))
                if truncate and len(val_str) > 20:
                    val_str = val_str[:17] + '...'
                col_widths[c] = max(col_widths[c], len(val_str))

        sep = "+" + "+".join("-" * (col_widths[c] + 2) for c in cols) + "+"
        header = "|" + "|".join(f" {c.ljust(col_widths[c])} " for c in cols) + "|"

        print(sep)
        print(header)
        print(sep)
        for r in display_rows:
            row_str = "|" + "|".join(f" {str(r.get(c, 'null')).ljust(col_widths[c])} " for c in cols) + "|"
            print(row_str)
        print(sep)

    def printSchema(self):
        print("root")
        for c in self.columns:
            sample_val = self._rows[0].get(c) if self._rows else None
            t_name = "string"
            if isinstance(sample_val, int): t_name = "integer"
            elif isinstance(sample_val, float): t_name = "double"
            elif isinstance(sample_val, bool): t_name = "boolean"
            print(f" |-- {c}: {t_name} (nullable = true)")

    def count(self): return len(self._rows)
    @property
    def schema(self): return StructType([StructField(c, StringType(), True) for c in self.columns])
    @property
    def dtypes(self): return [(c, type(next((r.get(c) for r in self._rows if r.get(c) is not None), '')).__name__) for c in self.columns]
    @property
    def rdd(self): return RDD(self.collect(), self._spark.sparkContext if self._spark else None)
    def isEmpty(self): return not self._rows
    def collect(self): return [Row(r) for r in self._rows]
    def first(self): return self.collect()[0] if self._rows else None
    def take(self, n): return self.collect()[:n]
    def head(self, n=None): return self.first() if n is None else self.take(n)
    def limit(self, n): return DataFrame(self._rows[:n], self.columns, self._spark)
    def randomSplit(self, weights, seed=None):
        total = float(sum(weights))
        if not weights or total <= 0: raise ValueError('weights must be a non-empty sequence of positive values')
        rng = random.Random(seed); buckets = [[] for _ in weights]
        for row in self._rows:
            pick = rng.random() * total; cumulative = 0.0
            for index, weight in enumerate(weights):
                cumulative += weight
                if pick <= cumulative: buckets[index].append(row); break
        return [DataFrame(rows, self.columns, self._spark) for rows in buckets]
    def sample(self, withReplacement, fraction, seed=None):
        return DataFrame(RDD(self._rows, self._spark.sparkContext if self._spark else None).sample(withReplacement, fraction, seed).collect(), self.columns, self._spark)
    def randomSplitByWeights(self, weights, seed=None): return self.randomSplit(weights, seed)

    def select(self, *cols):
        if len(cols) == 1 and isinstance(cols[0], (list, tuple)):
            cols = tuple(cols[0])
        if cols == ('*',): cols = tuple(self.columns)
        col_names = []
        for c in cols:
            if isinstance(c, Column): col_names.append(c.name)
            elif isinstance(c, str): col_names.append(c)
        new_rows = []
        for row in self._rows:
            selected = {}
            for original, name in zip(cols, col_names):
                selected[name] = original.evaluate(row) if isinstance(original, Column) else row.get(name)
            new_rows.append(selected)
        return DataFrame(new_rows, col_names, self._spark)

    def selectExpr(self, *exprs):
        names, rows = [], []
        for expression in exprs:
            parts = re.split(r's+ASs+', expression, flags=re.I)
            source = parts[0].strip()
            names.append(parts[-1].strip() if len(parts) > 1 else source)
        for row in self._rows:
            out = {}
            for expression, name in zip(exprs, names):
                source = re.split(r's+ASs+', expression, flags=re.I)[0].strip()
                out[name] = row.get(source, source)
            rows.append(out)
        return DataFrame(rows, names, self._spark)

    def toDF(self, *columns):
        names = list(columns) if columns else self.columns
        return DataFrame([{new: row.get(old) for old, new in zip(self.columns, names)} for row in self._rows], names, self._spark)

    def agg(self, *exprs, **named_exprs): return GroupedData(self, []).agg(*exprs, **named_exprs)

    def filter(self, condition):
        if isinstance(condition, Column):
            if condition._evaluator:
                return DataFrame([r for r in self._rows if condition.evaluate(r)], self.columns, self._spark)
            expr = condition.expr
            m = re.match(r'\\((.+?)\\s*(>|<|>=|<=|==|!=)\\s*(.+)\\)', expr)
            if m:
                c_name, op, val = m.group(1).strip(), m.group(2).strip(), m.group(3).strip()
                try: val_eval = eval(val)
                except: val_eval = val
                filtered = []
                for r in self._rows:
                    rv = r.get(c_name)
                    if rv is not None:
                        if op == '>' and rv > val_eval: filtered.append(r)
                        elif op == '<' and rv < val_eval: filtered.append(r)
                        elif op == '>=' and rv >= val_eval: filtered.append(r)
                        elif op == '<=' and rv <= val_eval: filtered.append(r)
                        elif op == '==' and rv == val_eval: filtered.append(r)
                        elif op == '!=' and rv != val_eval: filtered.append(r)
                return DataFrame(filtered, self.columns, self._spark)
        elif callable(condition):
            return DataFrame([r for r in self._rows if condition(r)], self.columns, self._spark)
        return self

    def where(self, condition): return self.filter(condition)

    def withColumn(self, colName, col):
        new_columns = list(self.columns)
        if colName not in new_columns: new_columns.append(colName)
        new_rows = []
        for r in self._rows:
            nr = dict(r)
            if isinstance(col, Column):
                nr[colName] = col.evaluate(r) if col._evaluator else (eval(col.expr, {}, nr) if col.expr in nr else col.expr)
            else:
                nr[colName] = col
            new_rows.append(nr)
        return DataFrame(new_rows, new_columns, self._spark)

    def withColumnRenamed(self, existing, new):
        new_cols = [new if c == existing else c for c in self.columns]
        new_rows = [{new if k == existing else k: v for k, v in r.items()} for r in self._rows]
        return DataFrame(new_rows, new_cols, self._spark)

    def drop(self, *cols):
        drop_set = set(cols)
        new_cols = [c for c in self.columns if c not in drop_set]
        new_rows = [{k: v for k, v in r.items() if k not in drop_set} for r in self._rows]
        return DataFrame(new_rows, new_cols, self._spark)

    def distinct(self):
        seen, rows = set(), []
        for row in self._rows:
            key = tuple(row.get(c) for c in self.columns)
            if key not in seen: seen.add(key); rows.append(row)
        return DataFrame(rows, self.columns, self._spark)
    def dropDuplicates(self, subset=None):
        subset = subset or self.columns
        seen, rows = set(), []
        for row in self._rows:
            key = tuple(row.get(c) for c in subset)
            if key not in seen: seen.add(key); rows.append(row)
        return DataFrame(rows, self.columns, self._spark)
    def union(self, other): return DataFrame(self._rows + other._rows, self.columns, self._spark)
    def unionAll(self, other): return self.union(other)
    def unionByName(self, other, allowMissingColumns=False):
        columns = list(dict.fromkeys(self.columns + other.columns)) if allowMissingColumns else self.columns
        return DataFrame([{c: r.get(c) for c in columns} for r in self._rows + other._rows], columns, self._spark)
    def crossJoin(self, other):
        cols = self.columns + [c for c in other.columns if c not in self.columns]
        return DataFrame([{**a, **b} for a in self._rows for b in other._rows], cols, self._spark)
    def join(self, other, on=None, how='inner'):
        keys = [on] if isinstance(on, str) else list(on or [])
        rows = []
        for left in self._rows:
            matched = False
            for right in other._rows:
                if all(left.get(k) == right.get(k) for k in keys):
                    rows.append({**left, **{k: v for k, v in right.items() if k not in keys}}); matched = True
            if not matched and how.lower() in ('left', 'left_outer', 'full', 'full_outer', 'outer'):
                rows.append(dict(left))
        if how.lower() in ('right', 'right_outer', 'full', 'full_outer', 'outer'):
            left_keys = {tuple(r.get(k) for k in keys) for r in self._rows}
            rows.extend({**r, **{k: v for k, v in r.items() if k not in keys}} for r in other._rows if tuple(r.get(k) for k in keys) not in left_keys)
        cols = list(dict.fromkeys(self.columns + [c for c in other.columns if c not in keys]))
        return DataFrame(rows, cols, self._spark)
    def fillna(self, value, subset=None):
        cols = subset or self.columns
        values = value if isinstance(value, dict) else {c: value for c in cols}
        return DataFrame([{**r, **{c: values[c] for c in cols if r.get(c) is None and c in values}} for r in self._rows], self.columns, self._spark)
    def dropna(self, how='any', thresh=None, subset=None):
        cols = subset or self.columns
        min_values = thresh if thresh is not None else (1 if how == 'any' else len(cols))
        return DataFrame([r for r in self._rows if sum(r.get(c) is not None for c in cols) >= min_values], self.columns, self._spark)
    def describe(self, *cols):
        targets = list(cols) or self.columns
        rows = []
        for label, fn in [('count', lambda v: len(v)), ('mean', lambda v: sum(v)/len(v) if v else None), ('stddev', lambda v: (sum((x-sum(v)/len(v))**2 for x in v)/max(1, len(v)-1))**0.5 if v else None), ('min', lambda v: min(v) if v else None), ('max', lambda v: max(v) if v else None)]:
            out = {'summary': label}
            for c in targets:
                vals = [r[c] for r in self._rows if isinstance(r.get(c), (int, float)) and not isinstance(r.get(c), bool)]
                out[c] = str(fn(vals)) if vals else (str(len([r for r in self._rows if r.get(c) is not None])) if label == 'count' else None)
            rows.append(out)
        return DataFrame(rows, ['summary'] + targets, self._spark)
    def cache(self): return self
    def persist(self, *args, **kwargs): return self
    def unpersist(self, *args, **kwargs): return self
    def repartition(self, *args, **kwargs): return self
    def coalesce(self, *args, **kwargs): return self
    def explain(self, *args, **kwargs): print('Local PySpark-compatible DataFrame (in-memory execution)')
    def toLocalIterator(self): return iter(self.collect())
    @property
    def write(self): return DataFrameWriter(self)

    def groupBy(self, *cols):
        return GroupedData(self, cols)
    def groupby(self, *cols): return self.groupBy(*cols)

    def sort(self, *cols, **kwargs):
        ascending = kwargs.get('ascending', True)
        first_col = cols[0]
        col_name = first_col.name if isinstance(first_col, Column) else first_col
        if isinstance(first_col, Column) and first_col.expr.endswith(' DESC'): ascending = False
        elif isinstance(first_col, Column) and first_col.expr.endswith(' ASC'): ascending = True
        sorted_rows = sorted(self._rows, key=lambda r: r.get(col_name, ''), reverse=not ascending)
        return DataFrame(sorted_rows, self.columns, self._spark)
    def orderBy(self, *cols, **kwargs): return self.sort(*cols, **kwargs)

    def createOrReplaceTempView(self, name):
        if self._spark:
            self._spark._views[name] = self
    def createTempView(self, name): self.createOrReplaceTempView(name)

class DataFrameReader:
    def __init__(self, spark): self.spark = spark; self._options = {}; self._format = None
    def option(self, key, value): self._options[key.lower()] = value; return self
    def options(self, **options): self._options.update({k.lower(): v for k, v in options.items()}); return self
    def format(self, source): self._format = source.lower(); return self

    def _read_content(self, path):
        candidates = [path, f"/home/Hacker/{path}", f"./{path}"]
        for p in candidates:
            try:
                if os.path.isdir(p):
                    contents = []
                    for name in sorted(os.listdir(p)):
                        if name.startswith('part-') or name.endswith(('.csv', '.json', '.txt')):
                            with open(os.path.join(p, name), 'r') as f: contents.append(f.read())
                    if contents: return '\\n'.join(contents)
                with open(p, 'r') as f:
                    return f.read()
            except:
                pass
        return None

    def csv(self, path, header=True, inferSchema=True, **options):
        header = options.get('header', self._options.get('header', header))
        inferSchema = options.get('inferSchema', self._options.get('inferschema', inferSchema))
        if isinstance(header, str): header = header.lower() == 'true'
        if isinstance(inferSchema, str): inferSchema = inferSchema.lower() == 'true'
        content = self._read_content(path)
        if not content: return DataFrame([], [], self.spark)
        lines = [l.strip() for l in content.splitlines() if l.strip()]
        if not lines: return DataFrame([], [], self.spark)
        delimiter = options.get('sep', self._options.get('sep', '\\t' if '\\t' in lines[0] else ','))
        first = [c.strip('"\\' ') for c in lines[0].split(delimiter)]
        if header:
            cols = first
            rows_data = lines[1:]
        else:
            cols = [f"_c{i}" for i in range(len(first))]
            rows_data = lines
        parsed_rows = []
        for line in rows_data:
            parts = [p.strip('"\\' ') for p in line.split(delimiter)]
            r_dict = {}
            for i, c in enumerate(cols):
                val = parts[i] if i < len(parts) else None
                if inferSchema and val is not None:
                    if str(val).isdigit(): val = int(val)
                    else:
                        try: val = float(val)
                        except ValueError: pass
                r_dict[c] = val
            parsed_rows.append(r_dict)
        return DataFrame(parsed_rows, cols, self.spark)

    def json(self, path):
        content = self._read_content(path)
        if not content: return DataFrame([], [], self.spark)
        try:
            data = json.loads(content)
            if isinstance(data, dict): data = [data]
            cols = list(data[0].keys()) if data else []
            return DataFrame(data, cols, self.spark)
        except Exception as e:
            print(f"Error reading JSON '{path}': {e}")
            return DataFrame([], [], self.spark)

    def text(self, path):
        content = self._read_content(path)
        return DataFrame([{'value': line} for line in (content or '').splitlines()], ['value'], self.spark)
    def parquet(self, path, **options): return self.load(path, format='parquet', **options)
    def orc(self, path, **options): return self.load(path, format='orc', **options)
    def load(self, path=None, format=None, **options):
        source = (format or self._format or 'parquet').lower()
        self.options(**options)
        if source in ('csv', 'com.databricks.spark.csv'): return self.csv(path, **options)
        if source in ('json',): return self.json(path)
        if source in ('text', 'txt'): return self.text(path)
        if source in ('parquet', 'orc'):
            raise NotImplementedError(f"{source} files are not supported by the in-memory PySpark runtime")
        raise ValueError(f"Unsupported data source: {source}")

class DataFrameWriter:
    def __init__(self, df): self.df = df; self._mode = 'error'; self._options = {}; self._format = 'parquet'
    def mode(self, mode): self._mode = mode.lower(); return self
    def option(self, key, value): self._options[key.lower()] = value; return self
    def options(self, **options): self._options.update({k.lower(): v for k, v in options.items()}); return self
    def format(self, source): self._format = source.lower(); return self
    def save(self, path=None, format=None, **options):
        source = (format or self._format).lower()
        if source in ('json',): data = '\\n'.join(json.dumps(row) for row in self.df._rows)
        elif source in ('csv',):
            sep = self._options.get('sep', ',')
            lines = [sep.join(self.df.columns)] if str(self._options.get('header', 'true')).lower() == 'true' else []
            lines.extend(sep.join('' if row.get(c) is None else str(row.get(c)) for c in self.df.columns) for row in self.df._rows)
            data = '\\n'.join(lines)
        elif source in ('text', 'txt'): data = '\\n'.join(str(row.get('value', '')) for row in self.df._rows)
        else: raise NotImplementedError(f"{source} output is not supported by the in-memory PySpark runtime")
        if not path: raise ValueError('path is required')
        os.makedirs(path, exist_ok=True)
        extension = 'json' if source == 'json' else ('txt' if source in ('text', 'txt') else 'csv')
        output_path = os.path.join(path, 'part-00000.' + extension)
        with open(output_path, 'w') as output: output.write(data)
    def csv(self, path): return self.save(path, format='csv')
    def json(self, path): return self.save(path, format='json')
    def text(self, path): return self.save(path, format='text')
    def parquet(self, path): return self.save(path, format='parquet')
    def saveAsTable(self, name):
        if self.df._spark: self.df.createOrReplaceTempView(name)

class SparkSession:
    _active = None
    class Builder:
        def __init__(self):
            self._appName = "PySparkApp"
            self._master = "local[*]"

        def appName(self, name):
            self._appName = name
            return self

        def master(self, m):
            self._master = m
            return self

        def config(self, key=None, value=None):
            return self

        def enableHiveSupport(self): return self

        def getOrCreate(self):
            if SparkSession._active is None or SparkSession._active._stopped:
                SparkSession._active = SparkSession(self._appName, self._master)
            return SparkSession._active

    builder = Builder()

    def __init__(self, appName="PySparkApp", master="local[*]"):
        self.appName = appName
        self.master = master
        self.version = "3.4.1"
        self.sparkContext = SparkContext(appName, master)
        self.read = DataFrameReader(self)
        self._views = {}
        self._stopped = False
        SparkSession._active = self

    def createDataFrame(self, data, schema=None):
        data = list(data)
        if isinstance(schema, list):
            columns = schema
        elif isinstance(schema, StructType):
            columns = [f.name for f in schema.fields]
        elif schema is None and data:
            if isinstance(data[0], dict):
                columns = list(data[0].keys())
            elif isinstance(data[0], (list, tuple)):
                columns = [f"_c{i}" for i in range(len(data[0]))]
            else:
                columns = ["value"]
        else:
            columns = ["value"]

        if isinstance(schema, StructType):
            data = [dict(zip(columns, row)) if not isinstance(row, dict) else row for row in data]
        elif data and isinstance(data[0], Row):
            columns = list(data[0].keys())

        return DataFrame(data, columns, self)

    def range(self, start, end=None, step=1, numPartitions=None):
        if end is None: start, end = 0, start
        return DataFrame([{'id': value} for value in range(start, end, step)], ['id'], self)

    def table(self, name):
        if name not in self._views: raise ValueError(f"Table or view not found: {name}")
        return self._views[name]

    def stop(self): self._stopped = True
    def newSession(self): return SparkSession(self.appName, self.master)
    @classmethod
    def getActiveSession(cls): return cls._active

    def sql(self, query):
        m = re.search(r'FROM\\s+([a-zA-Z0-9_]+)', query, re.I)
        if m:
            v_name = m.group(1)
            if v_name in self._views:
                df = self._views[v_name]
                select = re.search(r'^\\s*SELECT\\s+(.*?)\\s+FROM\\s+', query, re.I | re.S)
                where = re.search(r'\\s+WHERE\\s+(.+?)(?:\\s+ORDER\\s+BY|\\s+LIMIT|$)', query, re.I | re.S)
                limit = re.search(r'\\s+LIMIT\\s+(\\d+)', query, re.I)
                if where:
                    condition = where.group(1).strip()
                    match = re.match(r'([\\w.]+)\\s*(=|!=|<>|>=|<=|>|<)\\s*(.+)', condition)
                    if match:
                        name, op, value = match.groups()
                        value = value.strip().strip("'\\"")
                        try: value = float(value) if '.' in value else int(value)
                        except ValueError: pass
                        col = Column(name)
                        df = df.filter({'=': col == value, '!=': col != value, '<>': col != value, '>': col > value, '<': col < value, '>=': col >= value, '<=': col <= value}[op])
                if select and select.group(1).strip() != '*': df = df.selectExpr(*[part.strip() for part in select.group(1).split(',')])
                if limit: df = df.limit(int(limit.group(1)))
                return df
        return DataFrame([], [], self)

# Local MLlib-compatible estimators and transformers. This is deliberately
# in-memory: it preserves the familiar PySpark API for small teaching datasets.
class Transformer:
    def transform(self, dataset): raise NotImplementedError
    def fit(self, dataset): return self
    def getInputCols(self): return list(getattr(self, 'inputCols', []))
    def getOutputCol(self): return getattr(self, 'outputCol', None)

class Estimator:
    def fit(self, dataset): raise NotImplementedError

class VectorAssembler(Transformer):
    def __init__(self, inputCols, outputCol, handleInvalid='error', **kwargs):
        self.inputCols = list(inputCols); self.outputCol = outputCol; self.handleInvalid = handleInvalid
    def transform(self, dataset):
        rows = []
        for row in dataset._rows:
            values = []
            for name in self.inputCols:
                value = row.get(name)
                if value is None:
                    if self.handleInvalid == 'skip': break
                    if self.handleInvalid == 'keep': value = 0.0
                    else: raise ValueError('NULL encountered in VectorAssembler input column ' + name)
                values.extend(value if isinstance(value, (list, tuple)) else [value])
            else:
                rows.append({**row, self.outputCol: [float(v) for v in values]})
        return DataFrame(rows, list(dataset.columns) + ([] if self.outputCol in dataset.columns else [self.outputCol]), dataset._spark)

class StringIndexerModel(Transformer):
    def __init__(self, inputCol, outputCol, labels): self.inputCol=inputCol; self.outputCol=outputCol; self.labels=labels
    def transform(self, dataset):
        index={value:i for i,value in enumerate(self.labels)}
        rows=[{**r, self.outputCol: float(index.get(r.get(self.inputCol), len(index)))} for r in dataset._rows]
        return DataFrame(rows, list(dataset.columns)+([] if self.outputCol in dataset.columns else [self.outputCol]), dataset._spark)

class StringIndexer(Estimator):
    def __init__(self, inputCol=None, outputCol=None, inputCols=None, outputCols=None, stringOrderType='frequencyDesc', handleInvalid='error', **kwargs):
        self.inputCol=inputCol or (inputCols[0] if inputCols else None); self.outputCol=outputCol or (outputCols[0] if outputCols else None); self.stringOrderType=stringOrderType
    def fit(self, dataset):
        counts={}
        for row in dataset._rows:
            value=row.get(self.inputCol)
            if value is not None: counts[value]=counts.get(value,0)+1
        labels=sorted(counts, key=(lambda x: (-counts[x], str(x))) if self.stringOrderType=='frequencyDesc' else str)
        return StringIndexerModel(self.inputCol, self.outputCol, labels)
    def transform(self, dataset): return self.fit(dataset).transform(dataset)

class OneHotEncoderModel(Transformer):
    def __init__(self, inputCols, outputCols, sizes, dropLast=True): self.inputCols=inputCols; self.outputCols=outputCols; self.sizes=sizes; self.dropLast=dropLast
    def transform(self, dataset):
        rows=[]
        for row in dataset._rows:
            result=dict(row)
            for source,target,size in zip(self.inputCols,self.outputCols,self.sizes):
                width=max(0,size-1) if self.dropLast else size; index=int(row.get(source,0))
                result[target]=[1.0 if i==index else 0.0 for i in range(width)]
            rows.append(result)
        return DataFrame(rows,list(dataset.columns)+[c for c in self.outputCols if c not in dataset.columns],dataset._spark)

class OneHotEncoder(Estimator):
    def __init__(self,inputCols=None,outputCols=None,inputCol=None,outputCol=None,dropLast=True,**kwargs):
        self.inputCols=list(inputCols or ([inputCol] if inputCol else [])); self.outputCols=list(outputCols or ([outputCol] if outputCol else [])); self.dropLast=dropLast
    def fit(self,dataset):
        sizes=[max([int(r.get(c,0)) for r in dataset._rows]+[0])+1 for c in self.inputCols]
        return OneHotEncoderModel(self.inputCols,self.outputCols,sizes,self.dropLast)

class ImputerModel(Transformer):
    def __init__(self, inputCols, outputCols, values): self.inputCols=inputCols; self.outputCols=outputCols; self.values=values
    def transform(self, dataset):
        rows=[]
        for row in dataset._rows:
            result=dict(row)
            for source,target,value in zip(self.inputCols,self.outputCols,self.values): result[target]=value if result.get(source) is None else result[source]
            rows.append(result)
        return DataFrame(rows, list(dataset.columns)+[c for c in self.outputCols if c not in dataset.columns], dataset._spark)

class Imputer(Estimator):
    def __init__(self, inputCols=None, outputCols=None, inputCol=None, outputCol=None, strategy='mean', **kwargs):
        self.inputCols=list(inputCols or ([inputCol] if inputCol else [])); self.outputCols=list(outputCols or ([outputCol] if outputCol else self.inputCols)); self.strategy=strategy
    def fit(self, dataset):
        values=[]
        for col in self.inputCols:
            present=[r.get(col) for r in dataset._rows if isinstance(r.get(col),(int,float)) and r.get(col) is not None]
            if not present: value=0.0
            elif self.strategy=='median': value=sorted(present)[len(present)//2]
            elif self.strategy=='mostFrequent': value=max(set(present), key=present.count)
            else: value=sum(present)/len(present)
            values.append(value)
        return ImputerModel(self.inputCols,self.outputCols,values)

class StandardScalerModel(Transformer):
    def __init__(self, inputCol, outputCol, means, scales, withMean, withStd): self.inputCol=inputCol; self.outputCol=outputCol; self.means=means; self.scales=scales; self.withMean=withMean; self.withStd=withStd
    def transform(self, dataset):
        rows=[]
        for row in dataset._rows:
            vector=list(row.get(self.inputCol) or [])
            values=[((float(v)-(self.means[i] if self.withMean else 0.0))/(self.scales[i] if self.withStd and self.scales[i] else 1.0)) for i,v in enumerate(vector)]
            rows.append({**row,self.outputCol:values})
        return DataFrame(rows,list(dataset.columns)+([] if self.outputCol in dataset.columns else [self.outputCol]),dataset._spark)

class StandardScaler(Estimator):
    def __init__(self,inputCol,outputCol,withMean=False,withStd=True,**kwargs): self.inputCol=inputCol; self.outputCol=outputCol; self.withMean=withMean; self.withStd=withStd
    def fit(self,dataset):
        vectors=[r.get(self.inputCol,[]) for r in dataset._rows]; width=max((len(v) for v in vectors),default=0); means=[]; scales=[]
        for i in range(width):
            vals=[float(v[i]) for v in vectors if i<len(v)]; mean=sum(vals)/len(vals) if vals else 0.0
            means.append(mean); scales.append((sum((x-mean)**2 for x in vals)/max(1,len(vals)-1))**0.5 if vals else 1.0)
        return StandardScalerModel(self.inputCol,self.outputCol,means,scales,self.withMean,self.withStd)

class VectorModel(Transformer):
    def __init__(self, inputCol, outputCol, kind): self.inputCol=inputCol; self.outputCol=outputCol; self.kind=kind
    def transform(self,dataset):
        rows=[]
        for row in dataset._rows:
            values=list(row.get(self.inputCol) or [])
            if self.kind=='normalizer':
                norm=sum(abs(float(v)) for v in values) or 1.0; values=[float(v)/norm for v in values]
            elif self.kind=='minmax': values=[(float(v)-self.low)/(self.high-self.low or 1.0) for v in values]
            rows.append({**row,self.outputCol:values})
        return DataFrame(rows,list(dataset.columns)+([] if self.outputCol in dataset.columns else [self.outputCol]),dataset._spark)

class Normalizer(Transformer):
    def __init__(self,inputCol='features',outputCol='normFeatures',p=2.0,**kwargs): self.inputCol=inputCol; self.outputCol=outputCol
    def transform(self,dataset):
        rows=[]
        for r in dataset._rows:
            v=list(r.get(self.inputCol) or []); norm=sum(abs(float(x))**2 for x in v)**0.5 or 1.0
            rows.append({**r,self.outputCol:[float(x)/norm for x in v]})
        return DataFrame(rows,list(dataset.columns)+([] if self.outputCol in dataset.columns else [self.outputCol]),dataset._spark)

class _PredictionModel(Transformer):
    def __init__(self, featuresCol, labelCol, predictionCol, coefficients, intercept, classification=False):
        self.featuresCol=featuresCol; self.labelCol=labelCol; self.predictionCol=predictionCol; self.coefficients=coefficients; self.intercept=intercept; self.classification=classification
    def transform(self,dataset):
        rows=[]
        for row in dataset._rows:
            x=list(row.get(self.featuresCol) or []); score=self.intercept+sum(w*float(x[i]) for i,w in enumerate(self.coefficients) if i<len(x))
            if self.classification:
                probability=1.0/(1.0+math.exp(-max(-40,min(40,score)))); prediction=1.0 if probability>=0.5 else 0.0
                rows.append({**row,self.predictionCol:prediction,'probability':[1.0-probability,probability],'rawPrediction':[-score,score]})
            else: rows.append({**row,self.predictionCol:score})
        cols=list(dataset.columns)+[c for c in ([self.predictionCol,'probability','rawPrediction'] if self.classification else [self.predictionCol]) if c not in dataset.columns]
        return DataFrame(rows,cols,dataset._spark)
    def coefficients_(self): return self.coefficients

class _GradientEstimator(Estimator):
    def __init__(self, featuresCol='features',labelCol='label',predictionCol='prediction',maxIter=100,regParam=0.0,elasticNetParam=0.0,fitIntercept=True,**kwargs):
        self.featuresCol=featuresCol; self.labelCol=labelCol; self.predictionCol=predictionCol; self.maxIter=maxIter; self.regParam=regParam; self.fitIntercept=fitIntercept
    def fit(self,dataset):
        rows=[r for r in dataset._rows if r.get(self.labelCol) is not None and r.get(self.featuresCol) is not None]
        if not rows: raise ValueError('Cannot fit model on an empty dataset')
        width=max(len(r[self.featuresCol]) for r in rows); weights=[0.0]*width; intercept=0.0; rate=0.1; count=len(rows)
        classification=isinstance(self,LogisticRegression)
        for _ in range(max(1,min(int(self.maxIter),2000))):
            grad=[0.0]*width; bias=0.0
            for row in rows:
                x=list(row[self.featuresCol]); score=intercept+sum(weights[i]*float(x[i]) for i in range(min(width,len(x)))); target=float(row[self.labelCol])
                prediction=1.0/(1.0+math.exp(-max(-40,min(40,score)))) if classification else score
                error=prediction-target; bias+=error
                for i in range(min(width,len(x))): grad[i]+=error*float(x[i])
            for i in range(width): weights[i]-=rate*(grad[i]/count+self.regParam*weights[i])
            if self.fitIntercept: intercept-=rate*bias/count
        return _PredictionModel(self.featuresCol,self.labelCol,self.predictionCol,weights,intercept,classification)

class LogisticRegression(_GradientEstimator): pass
class LinearRegression(_GradientEstimator): pass

class PipelineModel(Transformer):
    def __init__(self,stages): self.stages=list(stages)
    def transform(self,dataset):
        result=dataset
        for stage in self.stages: result=stage.transform(result)
        return result

class Pipeline(Estimator):
    def __init__(self,stages=None): self.stages=list(stages or [])
    def getStages(self): return self.stages
    def fit(self,dataset):
        result=dataset; fitted=[]
        for stage in self.stages:
            model=stage.fit(result) if isinstance(stage,Estimator) else stage
            fitted.append(model); result=model.transform(result)
        return PipelineModel(fitted)

class Evaluator:
    def __init__(self,labelCol='label',predictionCol='prediction',metricName=None,**kwargs): self.labelCol=labelCol; self.predictionCol=predictionCol; self.metricName=metricName
    def setMetricName(self,value): self.metricName=value; return self

class RegressionEvaluator(Evaluator):
    def __init__(self,*args,metricName='rmse',**kwargs): super().__init__(*args,metricName=metricName,**kwargs)
    def evaluate(self,dataset):
        pairs=[(float(r[self.labelCol]),float(r[self.predictionCol])) for r in dataset._rows if r.get(self.labelCol) is not None and r.get(self.predictionCol) is not None]
        if not pairs: return 0.0
        errors=[p-y for y,p in pairs]; metric=self.metricName or 'rmse'
        if metric=='mae': return sum(abs(e) for e in errors)/len(errors)
        if metric=='mse': return sum(e*e for e in errors)/len(errors)
        if metric=='r2':
            mean=sum(y for y,_ in pairs)/len(pairs); denominator=sum((y-mean)**2 for y,_ in pairs)
            return 1.0-sum(e*e for e in errors)/denominator if denominator else 0.0
        return (sum(e*e for e in errors)/len(errors))**0.5

class MulticlassClassificationEvaluator(Evaluator):
    def __init__(self,*args,metricName='accuracy',**kwargs): super().__init__(*args,metricName=metricName,**kwargs)
    def evaluate(self,dataset):
        pairs=[(r[self.labelCol],r[self.predictionCol]) for r in dataset._rows if r.get(self.labelCol) is not None and r.get(self.predictionCol) is not None]
        if not pairs: return 0.0
        correct=sum(y==p for y,p in pairs); accuracy=correct/len(pairs)
        if self.metricName in ('accuracy','weightedPrecision','weightedRecall'): return accuracy
        if self.metricName=='f1': return accuracy
        return accuracy

class BinaryClassificationEvaluator(MulticlassClassificationEvaluator): pass

# Create mock pyspark package modules in sys.modules
pyspark_mod = types.ModuleType("pyspark")
pyspark_sql = types.ModuleType("pyspark.sql")
pyspark_sql_functions = types.ModuleType("pyspark.sql.functions")
pyspark_sql_types = types.ModuleType("pyspark.sql.types")
pyspark_context = types.ModuleType("pyspark.context")

pyspark_sql.SparkSession = SparkSession
pyspark_sql.DataFrame = DataFrame
pyspark_sql.GroupedData = GroupedData

pyspark_sql_functions.col = Functions.col
pyspark_sql_functions.lit = Functions.lit
pyspark_sql_functions.sum = Functions.sum
pyspark_sql_functions.avg = Functions.avg
pyspark_sql_functions.min = Functions.min
pyspark_sql_functions.max = Functions.max
pyspark_sql_functions.count = Functions.count
pyspark_sql_functions.lower = Functions.lower
pyspark_sql_functions.upper = Functions.upper
pyspark_sql_functions.concat = Functions.concat
pyspark_sql_functions.concat_ws = Functions.concat_ws
pyspark_sql_functions.column = Functions.column
pyspark_sql_functions.countDistinct = Functions.countDistinct
pyspark_sql_functions.approx_count_distinct = Functions.approx_count_distinct
pyspark_sql_functions.first = Functions.first
pyspark_sql_functions.last = Functions.last
pyspark_sql_functions.collect_list = Functions.collect_list
pyspark_sql_functions.collect_set = Functions.collect_set
pyspark_sql_functions.coalesce = Functions.coalesce
pyspark_sql_functions.abs = Functions.abs
pyspark_sql_functions.round = Functions.round
pyspark_sql_functions.ceil = Functions.ceil
pyspark_sql_functions.floor = Functions.floor
pyspark_sql_functions.sqrt = Functions.sqrt
pyspark_sql_functions.length = Functions.length
pyspark_sql_functions.substring = Functions.substring
pyspark_sql_functions.regexp_replace = Functions.regexp_replace
pyspark_sql_functions.when = Functions.when
pyspark_sql_functions.expr = Functions.expr
pyspark_sql_functions.array = Functions.array
pyspark_sql_functions.struct = Functions.struct
pyspark_sql_functions.monotonically_increasing_id = Functions.monotonically_increasing_id
pyspark_sql_functions.current_timestamp = Functions.current_timestamp
pyspark_sql_functions.current_date = Functions.current_date

pyspark_sql_types.DataType = DataType
pyspark_sql_types.StringType = StringType
pyspark_sql_types.IntegerType = IntegerType
pyspark_sql_types.LongType = LongType
pyspark_sql_types.DoubleType = DoubleType
pyspark_sql_types.FloatType = FloatType
pyspark_sql_types.ByteType = ByteType
pyspark_sql_types.ShortType = ShortType
pyspark_sql_types.BinaryType = BinaryType
pyspark_sql_types.NullType = NullType
pyspark_sql_types.DecimalType = DecimalType
pyspark_sql_types.BooleanType = BooleanType
pyspark_sql_types.TimestampType = TimestampType
pyspark_sql_types.DateType = DateType
pyspark_sql_types.StructType = StructType
pyspark_sql_types.StructField = StructField
pyspark_sql_types.ArrayType = ArrayType
pyspark_sql_types.MapType = MapType

class WindowSpec:
    def __init__(self, partition_cols=None, order_cols=None):
        self.partition_cols = partition_cols or []; self.order_cols = order_cols or []
    def partitionBy(self, *cols): return WindowSpec(list(cols), self.order_cols)
    def orderBy(self, *cols): return WindowSpec(self.partition_cols, list(cols))
    def rowsBetween(self, start, end): return self
    def rangeBetween(self, start, end): return self

class Window:
    unboundedPreceding = -9223372036854775808
    unboundedFollowing = 9223372036854775807
    currentRow = 0
    @staticmethod
    def partitionBy(*cols): return WindowSpec(list(cols), [])
    @staticmethod
    def orderBy(*cols): return WindowSpec([], list(cols))

pyspark_window = types.ModuleType('pyspark.sql.window')
pyspark_window.Window = Window
pyspark_window.WindowSpec = WindowSpec
pyspark_row = types.ModuleType('pyspark.sql.row')
pyspark_row.Row = _row_factory
pyspark_readwriter = types.ModuleType('pyspark.sql.readwriter')
pyspark_readwriter.DataFrameReader = DataFrameReader
pyspark_readwriter.DataFrameWriter = DataFrameWriter
pyspark_rdd = types.ModuleType('pyspark.rdd')
pyspark_rdd.RDD = RDD
pyspark_ml = types.ModuleType('pyspark.ml')
pyspark_ml.__path__ = []
pyspark_ml_feature = types.ModuleType('pyspark.ml.feature')
pyspark_ml_feature.__path__ = []
pyspark_ml_feature.VectorAssembler = VectorAssembler
pyspark_ml_feature.StringIndexer = StringIndexer
pyspark_ml_feature.OneHotEncoder = OneHotEncoder
pyspark_ml_feature.Imputer = Imputer
pyspark_ml_feature.StandardScaler = StandardScaler
pyspark_ml_feature.Normalizer = Normalizer
pyspark_ml_classification = types.ModuleType('pyspark.ml.classification')
pyspark_ml_classification.LogisticRegression = LogisticRegression
pyspark_ml_regression = types.ModuleType('pyspark.ml.regression')
pyspark_ml_regression.LinearRegression = LinearRegression
pyspark_ml_pipeline = types.ModuleType('pyspark.ml.pipeline')
pyspark_ml_pipeline.Pipeline = Pipeline
pyspark_ml_pipeline.PipelineModel = PipelineModel
pyspark_ml_evaluation = types.ModuleType('pyspark.ml.evaluation')
pyspark_ml_evaluation.RegressionEvaluator = RegressionEvaluator
pyspark_ml_evaluation.MulticlassClassificationEvaluator = MulticlassClassificationEvaluator
pyspark_ml_evaluation.BinaryClassificationEvaluator = BinaryClassificationEvaluator
pyspark_ml.Pipeline = Pipeline
pyspark_ml.PipelineModel = PipelineModel
pyspark_ml.feature = pyspark_ml_feature
pyspark_ml.classification = pyspark_ml_classification
pyspark_ml.regression = pyspark_ml_regression
pyspark_ml.pipeline = pyspark_ml_pipeline
pyspark_ml.evaluation = pyspark_ml_evaluation
pyspark_conf = types.ModuleType('pyspark.conf')
pyspark_conf.SparkConf = SparkConf
pyspark_sql.Row = _row_factory
pyspark_sql.Window = Window
pyspark_sql.functions = pyspark_sql_functions
pyspark_sql.types = pyspark_sql_types
pyspark_sql.window = pyspark_window
pyspark_sql.row = pyspark_row
pyspark_sql.readwriter = pyspark_readwriter
pyspark_mod.sql = pyspark_sql
pyspark_mod.conf = pyspark_conf
pyspark_mod.rdd = pyspark_rdd
pyspark_mod.ml = pyspark_ml
pyspark_mod.__version__ = '3.4.1-local'
pyspark_mod.SparkConf = SparkConf
pyspark_mod.__path__ = []
pyspark_sql.__path__ = []
pyspark_functions_all = [name for name in dir(Functions) if not name.startswith('_')]
for __function_name in pyspark_functions_all:
    setattr(pyspark_sql_functions, __function_name, getattr(Functions, __function_name))

pyspark_context.SparkContext = SparkContext
pyspark_mod.SparkContext = SparkContext
pyspark_context.SparkConf = SparkConf

sys.modules['pyspark'] = pyspark_mod
sys.modules['pyspark.sql'] = pyspark_sql
sys.modules['pyspark.sql.functions'] = pyspark_sql_functions
sys.modules['pyspark.sql.types'] = pyspark_sql_types
sys.modules['pyspark.context'] = pyspark_context
sys.modules['pyspark.conf'] = pyspark_conf
sys.modules['pyspark.rdd'] = pyspark_rdd
sys.modules['pyspark.ml'] = pyspark_ml
sys.modules['pyspark.ml.feature'] = pyspark_ml_feature
sys.modules['pyspark.ml.classification'] = pyspark_ml_classification
sys.modules['pyspark.ml.regression'] = pyspark_ml_regression
sys.modules['pyspark.ml.pipeline'] = pyspark_ml_pipeline
sys.modules['pyspark.ml.evaluation'] = pyspark_ml_evaluation
sys.modules['pyspark.sql.window'] = pyspark_window
sys.modules['pyspark.sql.row'] = pyspark_row
sys.modules['pyspark.sql.readwriter'] = pyspark_readwriter
`;function ui(E){let r=E.replace(/[\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000]/g," ").replace(/\r\n/g,`
`).replace(/\r/g,`
`);!r.includes(`
`)&&r.includes("\\n")&&(r=r.replace(/\\n/g,`
`).replace(/\\t/g,"    "));const u=r.split(`
`),i=[],c=[0];for(let f=0;f<u.length;f++){const p=u[f],d=p.trim();if(!d||d.startsWith("#"))continue;let y=p.search(/\S/);for(y<0&&(y=0);c.length>1&&y<=c[c.length-1];)c.pop(),!d.startsWith("else")&&!d.startsWith("elif")&&i.push("}");let h=d;if(h=h.replace(/\bTrue\b/g,"true"),h=h.replace(/\bFalse\b/g,"false"),h=h.replace(/\bNone\b/g,"null"),h=h.replace(/\bis not\b/g,"!=="),h=h.replace(/\bis\b/g,"==="),h=h.replace(/\band\b/g,"&&"),h=h.replace(/\bor\b/g,"||"),h=h.replace(/\bnot\b\s+/g,"!"),h=h.replace(/\bpass\b/g,""),/^with\s+open\((.*?)\)\s+as\s+([a-zA-Z_]\w*)\s*:\s*(#.*)?$/.test(h)){h=h.replace(/^with\s+open\((.*?)\)\s+as\s+([a-zA-Z_]\w*)\s*:\s*(#.*)?$/,"let $2 = __py_open__($1); {"),c.push(y),i.push(h);continue}if(/^import\s+([a-zA-Z_]\w*)\s*(#.*)?$/.test(h)){h=h.replace(/^import\s+([a-zA-Z_]\w*)\s*(#.*)?$/,'let $1 = __py_import__("$1");'),i.push(h);continue}if(/^from\s+([a-zA-Z_]\w*)\s+import\s+(.*?)\s*(#.*)?$/.test(h)){h=h.replace(/^from\s+([a-zA-Z_]\w*)\s+import\s+(.*?)\s*(#.*)?$/,'let { $2 } = __py_import__("$1");'),i.push(h);continue}const b=h.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+([^:]+):\s*(.+)$/);if(b){const[,w,z,Y]=b;let U=Y.replace(/print\((.*?)\)/g,(te,L)=>`__py_print__(${L})`);U=U.replace(/input\((.*?)\)/g,(te,L)=>`__py_input__(${L||'""'})`),U.endsWith(";")||(U+=";"),i.push(`for (let ${w} of ${z}) { ${U} }`);continue}if(/^for\s+([a-zA-Z_]\w*)\s+in\s+(.*?)\s*:\s*(#.*)?$/.test(h))h=h.replace(/^for\s+([a-zA-Z_]\w*)\s+in\s+(.*?)\s*:\s*(#.*)?$/,"for (let $1 of $2) {"),c.push(y);else if(/^while\s+(.*?)\s*:\s*(#.*)?$/.test(h)){const w=h.replace(/^while\s+(.*?)\s*:\s*(#.*)?$/,"$1");h=`let __py_while_count_${f}__ = 0;
while (${w}) { if (++__py_while_count_${f}__ > 10000) break;`,c.push(y)}else/^def\s+([a-zA-Z_]\w*)\s*\((.*?)\)\s*:\s*(#.*)?$/.test(h)?(h=h.replace(/^def\s+([a-zA-Z_]\w*)\s*\((.*?)\)\s*:\s*(#.*)?$/,"function $1($2) {"),c.push(y)):/^elif\s+(.*?)\s*:\s*(#.*)?$/.test(h)?(h=h.replace(/^elif\s+(.*?)\s*:\s*(#.*)?$/,"} else if ($1) {"),c.push(y)):/^if\s+(.*?)\s*:\s*(#.*)?$/.test(h)?(h=h.replace(/^if\s+(.*?)\s*:\s*(#.*)?$/,"if ($1) {"),c.push(y)):/^else\s*:\s*(#.*)?$/.test(h)?(h="} else {",c.push(y)):(h=h.replace(/print\((.*?)\)/g,(w,z)=>`__py_print__(${z})`),h=h.replace(/input\((.*?)\)/g,(w,z)=>`__py_input__(${z||'""'})`),h=h.replace(/open\((.*?)\)/g,(w,z)=>`__py_open__(${z})`),!h.endsWith("{")&&!h.endsWith("}")&&!h.endsWith(";")&&(h+=";"));i.push(h)}for(;c.length>1;)c.pop(),i.push("}");return i.join(`
`)}class ly{constructor(){O(this,"pyodide",null);O(this,"isLoadingPyodide",!1);O(this,"isPySparkSetupDone",!1);this.initPyodide()}syncLocalFiles(r){var p;if(!r||!((p=this.pyodide)!=null&&p.FS))return;const u=new Set(["/home/Hacker"]),i=new Set;r.forEach((d,y)=>{const h=y.startsWith("/")?y:`/home/Hacker/${y}`,b=h.slice(0,h.lastIndexOf("/"))||"/";u.add(b),h.endsWith(".py")&&i.add(b);try{this.pyodide.FS.mkdirTree(b),this.pyodide.FS.writeFile(h,d)}catch{}}),i.forEach(d=>{if(d!=="/home/Hacker")try{this.pyodide.FS.writeFile(`${d}/__init__.py`,"")}catch{}});const c=JSON.stringify(Array.from(u)),f=JSON.stringify(Array.from(i).filter(d=>d.startsWith("/home/Hacker/")&&d!=="/home/Hacker").map(d=>d.slice(13).split("/")[0]));try{this.pyodide.runPython(`
import sys
import importlib
__project_paths = ${c}
# Reorder existing paths too: Pyodide's /home/pyodide can already be ahead
# of the simulated home directory and shadow a same-named project package.
sys.path[:] = __project_paths + [p for p in sys.path if p not in __project_paths]
for __name in ${f}:
    sys.modules.pop(__name, None)
importlib.invalidate_caches()
`)}catch{}}persistLocalFiles(r){var c;if(!r||!((c=this.pyodide)!=null&&c.FS))return;const u=this.pyodide.FS,i=f=>{let p;try{p=u.readdir(f).filter(d=>d!=="."&&d!=="..")}catch{return}for(const d of p){const y=`${f.replace(/\/$/,"")}/${d}`;try{const h=u.stat(y);if(u.isDir(h.mode))d!=="__pycache__"&&i(y);else if(u.isFile(h.mode)&&!d.endsWith(".pyc")){if(d==="__init__.py")continue;r(y,u.readFile(y,{encoding:"utf8"}))}}catch{}}};i("/home/Hacker")}resetPySparkRepl(){this.isPySparkSetupDone=!1}async runPySparkReplLine(r,u,i){if(await this.initPyodide(),this.pyodide){const c=[],f=[];try{this.pyodide.setStdout({batched:y=>c.push(y)}),this.pyodide.setStderr({batched:y=>f.push(y)}),this.syncLocalFiles(u),this.isPySparkSetupDone||(this.pyodide.runPython(Kd),this.pyodide.runPython(`
from pyspark.sql import SparkSession
import pyspark.sql.functions as F
from pyspark.sql.types import *

spark = SparkSession.builder.appName("PySparkShell").getOrCreate()
sc = spark.sparkContext
`),this.isPySparkSetupDone=!0);const p=this.pyodide.runPython(r);let d=c.join(`
`);return p!=null&&!c.length&&(d=String(p)),this.persistLocalFiles(i),{stdout:d,stderr:f.join(`
`),exitCode:0}}catch(p){return{stdout:c.join(`
`),stderr:p.message||String(p),exitCode:1}}}return this.fallbackExecute(r,()=>"",u,i)}async initPyodide(){if(!(typeof window>"u")){if(window.pyodide){this.pyodide=window.pyodide;return}if(!this.isLoadingPyodide){this.isLoadingPyodide=!0;try{if(!window.loadPyodide){const r=document.createElement("script");r.src="./pyodide/pyodide.js",r.async=!0,document.head.appendChild(r),await new Promise(u=>{r.onload=u,r.onerror=u})}window.loadPyodide&&(this.pyodide=await window.loadPyodide({indexURL:"./pyodide/"}),window.pyodide=this.pyodide)}catch{this.pyodide=null}finally{this.isLoadingPyodide=!1}}}}runSync(r,u=[],i,c){if(!this.pyodide)return null;const f=[],p=[];let d=0;const y=(h="")=>(h&&f.push(h),d<u.length?u[d++]:"");try{this.pyodide.setStdout({batched:w=>f.push(w)}),this.pyodide.setStderr({batched:w=>p.push(w)}),this.syncLocalFiles(i),window.__pyodide_input_handler=y,this.pyodide.runPython(`
import sys
import os
import js

if "." not in sys.path:
    sys.path.insert(0, ".")
if "/home/Hacker" not in sys.path:
    sys.path.insert(0, "/home/Hacker")

def __custom_input__(prompt=""):
    return js.__pyodide_input_handler(prompt)

import builtins
builtins.input = __custom_input__
`),this.pyodide.runPython(Kd);const h=this.pyodide.runPython(r);let b=f.join(`
`);return h!=null&&!f.length&&(b=String(h)),this.persistLocalFiles(c),{stdout:b,stderr:p.join(`
`),exitCode:0}}catch(h){return{stdout:f.join(`
`),stderr:h.message||String(h),exitCode:1}}}fallbackExecuteSync(r,u=[],i,c){let f=0;const p=d=>f<u.length?u[f++]:"";return this.fallbackExecute(r,p,i,c)}fallbackExecute(r,u,i,c){const f=[],p=[];try{const d=ui(r),z={__py_print__:(...L)=>{const I=L.map(P=>typeof P=="object"?JSON.stringify(P):String(P)).join(" ");f.push(I)},__py_input__:(L="")=>u(L),__py_open__:(L,I="r")=>{const P=L.startsWith("/")?L:`/home/Hacker/${L}`,ee=L.split("/").pop()||L;if(I.includes("w")||I.includes("a")){let J=I.includes("a")&&((i==null?void 0:i.get(P))||(i==null?void 0:i.get(ee)))||"";return{write:he=>{J+=String(he),c&&c(ee,J)},writelines:he=>{J+=he.join(""),c&&c(ee,J)},read:()=>J,close:()=>{},__enter__:function(){return this},__exit__:function(){}}}else{const J=(i==null?void 0:i.get(P))??(i==null?void 0:i.get(ee))??"";return{read:()=>J,readline:()=>J.split(`
`)[0]||"",readlines:()=>J.split(`
`),write:()=>{},close:()=>{},__enter__:function(){return this},__exit__:function(){}}}},__py_import__:L=>{const I=`${L}.py`,P=(i==null?void 0:i.get(`/home/Hacker/${I}`))||(i==null?void 0:i.get(I));if(!P)throw new Error(`No module named '${L}'`);const ee={Math,JSON,parseInt,parseFloat,String,Number,Array,Object,True:!0,False:!1,None:null},J=ui(P);return new Function(...Object.keys(ee),J)(...Object.values(ee)),ee},Math,JSON,parseInt,parseFloat,String,Number,Array,Object,True:!0,False:!1,None:null,len:L=>L&&L.length!==void 0?L.length:0,range:(L,I,P=1)=>{I===void 0&&(I=L,L=0);const ee=[];for(let J=L;J<I;J+=P)ee.push(J);return ee},str:L=>String(L),int:L=>parseInt(L,10)||0,float:L=>parseFloat(L)||0,list:L=>Array.from(L||[])},Y=Object.keys(z),U=Object.values(z);return new Function(...Y,d)(...U),{stdout:f.join(`
`),stderr:p.join(`
`),exitCode:0}}catch(d){return{stdout:f.join(`
`),stderr:`Python SyntaxError / RuntimeError: ${d.message}`,exitCode:1}}}}const Ho=`================================================================================
           BROWSER-BASED HADOOP SIMULATOR & PRACTICE LABORATORY GUIDE
================================================================================
DEVELOPER     : Niranjan Kumar K
DEPLOYMENT URL: https://hacker1514.github.io/hadoop/
ENVIRONMENT   : Apache Hadoop, PySpark v3.3.0, KSQL SQLite WASM, HDFS & YARN Engine

--------------------------------------------------------------------------------
1. ENTERPRISE ARCHITECTURE & ECOSYSTEM OVERVIEW
--------------------------------------------------------------------------------
- HDFS (Hadoop Distributed File System):
  Fault-tolerant, rack-aware distributed filesystem for storing datasets.
  Full support for hdfs dfs utilities: -mkdir, -put, -get, -cat, -ls, -rm,
  -chmod, -chown, -du, -df, -touchz, -checksum, -count, -find, block reports.

- YARN & MapReduce Engine:
  Distributed resource management framework with Capacity Scheduler.
  Supports MapReduce jobs (yarn jar wordcount.jar) & Hadoop Streaming.

- PySpark v3.3.0 Engine & REPL Shell (Python WebAssembly):
  High-class SparkSession & SparkContext integration running 100% offline.
  DataFrame API: createDataFrame, show(), printSchema(), select(), filter(),
  where(), withColumn(), withColumnRenamed(), drop(), groupBy(), count(), sum(),
  avg(), min(), max(), sort(), orderBy(), randomSplit(), createOrReplaceTempView(), spark.sql().
  DataFrame Readers: spark.read.csv(), spark.read.json().
  RDD API: sc.parallelize(), map(), filter(), flatMap(), mapPartitions(), reduce(),
  reduceByKey(), groupByKey(), sortByKey(), distinct(), union(), zip(), cartesian(),
  aggregate(), fold(), sum(), mean(), collect(), count(), take(), takeSample().
  ML API: pyspark.ml Pipeline/PipelineModel; feature preprocessing with
  VectorAssembler, StringIndexer, OneHotEncoder, Imputer, StandardScaler and
  Normalizer; LogisticRegression classification and LinearRegression regression;
  classification and regression evaluators. Runs locally in-memory in Pyodide.
  Interactive Shell: Type pyspark or spark to open >>> prompt.
  Script Execution: spark-submit script.py or python script.py.

- KSQL SQLite WebAssembly Engine:
  Interactive SQL engine (>> prompt) launched via hive, pig, or ksql.
  Pig-style LOAD and STORE/SAVE: load 'file.csv' into table, store table into 'out.csv',
  save database.db. Full IndexedDB persistence across reloads (hadoop-lab-db).

- Terminal Local Storage & Host I/O:
  get                   Import file from local computer OS into terminal directory.
  download <filename>   Export file from terminal directory to computer Downloads folder.
  vim <file>            In-terminal Vim text editor with -- INSERT -- and : commands (:wq to save).

- PWA Offline Capability:
  Chrome CacheStorage precaching for 100% offline usage anywhere.

--------------------------------------------------------------------------------
2. GETTING STARTED (START HADOOP DAEMONS FIRST):
--------------------------------------------------------------------------------
  start-dfs.sh                   Start HDFS daemons (NameNode & DataNodes)
  start-yarn.sh                  Start YARN daemons (ResourceManager & NodeManagers)
  start-all.sh                   Start all Hadoop daemons

--------------------------------------------------------------------------------
3. COMPLETE COMMAND REFERENCE:
--------------------------------------------------------------------------------
[NODE.JS RUNTIME & HADOOP STREAMING MAPREDUCE]
  node -v                       Display Node.js runtime version (v18.16.0)
  node script.js                Execute JavaScript file with full JS Function execution
  node -e "console.log(2+3)"    Evaluate JavaScript code inline
  hadoop jar hadoop-streaming.jar -mapper "node mapper.js" -reducer "node reducer.js" -input /in -output /out

[HADOOP HDFS STORAGE, ERASURE CODING & DISTCP]
  hdfs dfs -ls <path>           List HDFS directory contents
  hdfs dfs -find / -name "*.txt" Search files recursively across HDFS
  hdfs dfs -count /             Count directories, files, and bytes in HDFS
  hdfs fsck /file -files -blocks -locations  Inspect HDFS block IDs & DataNode locations
  hdfs dfsadmin -triggerBlockReport datanode1 Trigger Full Block Report to NameNode
  hdfs dfsadmin -metasave metasave.log Dump NameNode block state to log
  hdfs dfsadmin -refreshNodes   Refresh DataNode membership & Decommissioning list
  hdfs storagepolicies -isSatisfierRunning Check Storage Policy Satisfier daemon state
  hdfs ec -enablePolicy -policy RS-6-3-1024k  Enable Erasure Coding policy
  hdfs ec -disablePolicy -policy RS-6-3-1024k Disable Erasure Coding policy
  hdfs dfs -mkdir -p <path>     Create HDFS directory
  hdfs dfs -put <local> <hdfs>  Upload local file to HDFS
  hdfs dfs -get <hdfs> <local>  Download HDFS file to local Linux space
  hdfs dfs -cat <path>          Print HDFS file content
  hdfs dfs -checksum <path>     Compute file MD5 checksum
  hdfs dfs -stat "%F %u:%g"     Display file metadata
  hdfs dfs -cp <src> <dst>      Copy file within HDFS
  hdfs dfs -mv <src> <dst>      Move/rename file within HDFS
  hdfs dfs -chmod <mode> <path> Change file permissions (e.g. 755)
  hdfs dfs -chown <user> <path> Change file owner
  hdfs dfs -getfacl <path>      Inspect HDFS Access Control List (ACL)
  hdfs dfs -setfacl -m user:alice:rwx <path> Set granular ACL permissions
  hdfs dfs -expunge             Empty HDFS trash (.Trash)
  hadoop distcp hdfs://nn1/src hdfs://nn2/dst Distributed Copy across clusters
  hdfs dfsadmin -setQuota 1000 /Hacker  Set file count quota
  hdfs dfsadmin -setSpaceQuota 10g /Hacker Set storage space quota
  hdfs dfsadmin -saveNamespace  Save NameNode fsimage checkpoint
  hdfs dfsadmin -enterMaintenance datanode1 Graceful DataNode Maintenance window
  hdfs crypto -listZones        Inspect HDFS Encryption Zones
  hdfs crypto -createZone -keyName key1 -path /Hacker/secure  Create KMS Encryption Zone
  hdfs dfs -allowSnapshot <dir> Allow HDFS Snapshots
  hdfs dfs -createSnapshot <dir> <s1> Create HDFS Snapshot
  hdfs dfs -deleteSnapshot <dir> <s1> Delete HDFS Snapshot
  hdfs fsck /                   Run HDFS File System Check
  hdfs dfsadmin -report         Display DataNode cluster report
  hdfs haadmin -getServiceState nn1   Check NameNode HA State
  hdfs haadmin -failover nn1 nn2      Trigger NameNode HA Failover

[HADOOP YARN COMPUTE, TEZ & KYUUBI]
  hadoop jar wordcount.jar <in> <out>   Submit MapReduce Job
  tez-job.sh --submit dag.xml           Submit Apache Tez DAG job
  yarn application -list                List active YARN applications
  yarn application -kill <appId>        Kill running YARN application
  yarn applicationattempt -list <appId> List YARN application attempts
  yarn container -list <attemptId>      List YARN container allocations
  yarn logs -applicationId <id>        View MapReduce job container logs
  yarn queue -status root.default       Check YARN Capacity Queue Status
  yarn node -list                       List live NodeManagers & container capacity
  yarn node -list -states DECOMMISSIONED List decommissioned nodes
  yarn rmadmin -refreshNodes            Refresh NodeManager membership in YARN
  yarn rmadmin -refreshSuperUserGroupsConfiguration Refresh superuser ACLs
  kyuubi start                          Start Kyuubi Multi-Tenant SQL Gateway

[HIVE & LLAP IN-MEMORY QUERY ACCELERATOR]
  hive -e "SHOW TABLES"
  hive -e "ALTER TABLE sales ADD COLUMNS (country STRING)"
  hive -e "DROP TABLE sales"
  hive --service llap                   Start Hive LLAP In-Memory Cache Daemon
  impala-shell -q "SELECT * FROM sales"
  presto --execute "SELECT * FROM sales"
  pig -e "sales = LOAD '/Hacker/sales.csv' USING PigStorage(','); DUMP sales;"
  phoenix-sqlline -e "SELECT * FROM users"
  nifi.sh start
  zeppelin-daemon.sh start

[HBASE NOSQL SHELL]
  hbase shell
  hbase shell -c "list"
  hbase shell -c "create 'users', 'info'"
  hbase shell -c "put 'users', 'r1', 'info:name', 'Hacker'"
  hbase shell -c "get 'users', 'r1'"
  hbase shell -c "scan 'users'"

[SPARK CONSOLES, SQOOP, KAFKA, FLUME, OOZIE]
  spark-submit --class org.apache.spark.examples.WordCount spark-app.jar /Hacker/in /Hacker/out
  spark-shell                   Interactive Scala REPL for Spark
  pyspark                       Interactive Python REPL for Spark
  sqoop import --table users --target-dir /Hacker/sqoop_users
  kafka-topics.sh --create --topic logs --bootstrap-server localhost:9092
  flume-ng agent --conf-file flume.conf --name a1
  oozie job -config job.properties -run

[SECURITY, NETWORK DIAGNOSTICS & LINUX POWER TOOLS]
  ps -ef                        Display full process listing
  kill -9 <PID> / killall java  Terminate processes or daemons
  ifconfig / ip addr            Display virtual network interface IPs
  ping <node>                   Test network latency across DataNodes
  netstat -tuln                 Display open Hadoop listening ports (9000, 8088, 9870, 2181)
  ranger policy -list           Inspect Ranger authorization policies
  kinit Hacker@HADOOP.LOCAL     Acquire Kerberos authentication ticket
  klist                         Inspect active Kerberos tickets
  kdestroy                      Destroy Kerberos tickets
  ls, pwd, cd, mkdir, echo, cat, touch, rm, whoami
  grep <pattern> <file>         Search text in local files
  sort <file> / uniq <file>     Sort lines & count unique lines
  wc -l <file>                  Count lines/words/chars
  head / tail <file>            Display start/end of file
  top                           Display Linux process monitor
  df -h                         Display Linux filesystem disk usage
  free -m                       Display system RAM memory stats
  uname -a                      Display system kernel architecture
  history                       Display command history
  vim <file> / vi <file>        Open interactive Vim text editor (:wq to save & exit)
  clear                         Clear terminal screen
================================================================================`,si=`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://localhost:9000</value>
        <description>NameNode URI for HDFS cluster default filesystem.</description>
    </property>
    <property>
        <name>hadoop.tmp.dir</name>
        <value>/tmp/hadoop-\${user.name}</value>
        <description>Base directory for temporary simulated storage files.</description>
    </property>
    <property>
        <name>io.file.buffer.size</name>
        <value>131072</value>
        <description>Buffer size used in sequence files (128 KB).</description>
    </property>
    <property>
        <name>hadoop.security.authentication</name>
        <value>simple</value>
        <description>Authentication mechanism: simple or kerberos.</description>
    </property>
    <property>
        <name>hadoop.security.authorization</name>
        <value>true</value>
        <description>Enable Service Level Authorization in Hadoop.</description>
    </property>
</configuration>`,ii=`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <property>
        <name>dfs.replication</name>
        <value>3</value>
        <description>Default HDFS block replication factor across DataNodes.</description>
    </property>
    <property>
        <name>dfs.blocksize</name>
        <value>134217728</value>
        <description>Default HDFS block size in bytes (128 MB).</description>
    </property>
    <property>
        <name>dfs.namenode.name.dir</name>
        <value>file:///var/hadoop/dfs/name</value>
        <description>Local filesystem path where NameNode stores fsimage &amp; edits log.</description>
    </property>
    <property>
        <name>dfs.datanode.data.dir</name>
        <value>file:///var/hadoop/dfs/data</value>
        <description>Local filesystem directory where DataNodes store blocks.</description>
    </property>
    <property>
        <name>dfs.permissions.enabled</name>
        <value>true</value>
        <description>Enable POSIX file permissions checking in HDFS.</description>
    </property>
    <property>
        <name>dfs.namenode.servicerpc-address</name>
        <value>localhost:8021</value>
        <description>NameNode Service RPC listener port.</description>
    </property>
    <property>
        <name>dfs.namenode.http-address</name>
        <value>localhost:9870</value>
        <description>NameNode Web UI HTTP address.</description>
    </property>
</configuration>`,ri=`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
        <description>Execution framework set to YARN (instead of local/classic).</description>
    </property>
    <property>
        <name>mapreduce.application.classpath</name>
        <value>$HADOOP_MAPRED_HOME/share/hadoop/mapreduce/*:$HADOOP_MAPRED_HOME/share/hadoop/mapreduce/lib/*</value>
        <description>Class path for MapReduce applications.</description>
    </property>
    <property>
        <name>mapreduce.map.memory.mb</name>
        <value>1024</value>
        <description>Amount of memory allocated for each Map task container.</description>
    </property>
    <property>
        <name>mapreduce.reduce.memory.mb</name>
        <value>2048</value>
        <description>Amount of memory allocated for each Reduce task container.</description>
    </property>
    <property>
        <name>mapreduce.jobhistory.address</name>
        <value>localhost:10020</value>
        <description>MapReduce JobHistory Server IPC address.</description>
    </property>
</configuration>`,oi=`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <property>
        <name>yarn.resourcemanager.hostname</name>
        <value>localhost</value>
        <description>Hostname of the YARN ResourceManager daemon.</description>
    </property>
    <property>
        <name>yarn.nodemanager.aux-services</name>
        <value>mapreduce_shuffle</value>
        <description>Auxiliary service required for MapReduce shuffle phase.</description>
    </property>
    <property>
        <name>yarn.nodemanager.aux-services.mapreduce_shuffle.class</name>
        <value>org.apache.hadoop.mapred.ShuffleHandler</value>
    </property>
    <property>
        <name>yarn.nodemanager.resource.memory-mb</name>
        <value>8192</value>
        <description>Total physical RAM (in MB) allocated to containers on NodeManager.</description>
    </property>
    <property>
        <name>yarn.nodemanager.resource.cpu-vcores</name>
        <value>8</value>
        <description>Total CPU virtual cores allocated to containers on NodeManager.</description>
    </property>
    <property>
        <name>yarn.resourcemanager.scheduler.class</name>
        <value>org.apache.hadoop.yarn.server.resourcemanager.scheduler.capacity.CapacityScheduler</value>
        <description>YARN Pluggable Scheduler class.</description>
    </property>
</configuration>`;class sy{constructor(r,u,i,c){O(this,"nameNode");O(this,"resourceManager");O(this,"mapReduceEngine");O(this,"pythonEngine");O(this,"db");O(this,"isHDFSStarted",!1);O(this,"isYARNStarted",!1);O(this,"kerberosTicket",null);O(this,"activeNameNodeId","nn1");O(this,"storagePolicies",new Map);O(this,"ecPolicies",new Map);O(this,"cacheDirectives",new Map);O(this,"snapshots",new Map);O(this,"acls",new Map);O(this,"cryptoZones",new Map);O(this,"fileQuotas",new Map);O(this,"spaceQuotas",new Map);O(this,"historyList",[]);O(this,"isNameNodeFormatted",!1);O(this,"localDir","/home/Hacker");O(this,"localFiles",new Map([["/home/Hacker/about.txt",Ho],["/etc/hadoop/core-site.xml",si],["/etc/hadoop/hdfs-site.xml",ii],["/etc/hadoop/mapred-site.xml",ri],["/etc/hadoop/yarn-site.xml",oi],["/home/Hacker/hadoop/etc/hadoop/core-site.xml",si],["/home/Hacker/hadoop/etc/hadoop/hdfs-site.xml",ii],["/home/Hacker/hadoop/etc/hadoop/mapred-site.xml",ri],["/home/Hacker/hadoop/etc/hadoop/yarn-site.xml",oi]]));O(this,"localDirs",new Set(["/","/etc","/etc/hadoop","/home","/home/Hacker","/home/Hacker/hadoop","/home/Hacker/hadoop/etc","/home/Hacker/hadoop/etc/hadoop"]));O(this,"cachedStorageUsage",0);O(this,"cachedStorageQuota",0);this.nameNode=r,this.resourceManager=u,this.mapReduceEngine=i,this.pythonEngine=new ly,this.db=c,this.startStorageRefresh()}startStorageRefresh(){const r=()=>{this.db.getStorageEstimate().then(({usageBytes:u,quotaBytes:i})=>{this.cachedStorageUsage=u,this.cachedStorageQuota=i})};r(),setInterval(r,3e4)}async executePySparkRepl(r){const u=await this.pythonEngine.runPySparkReplLine(r,this.localFiles,(i,c)=>this.saveLocalFileContent(i,c));return u.stderr?u.stdout?`${u.stdout}
${u.stderr}`:u.stderr:u.stdout}async loadFromDB(){await this.db.waitReady();const r=await this.db.loadAllLocalFiles();r.size>0&&(this.localFiles=r);const u=["/home/Hacker/core-site.xml","/home/Hacker/hdfs-site.xml","/home/Hacker/mapred-site.xml","/home/Hacker/yarn-site.xml"];for(const h of u)this.localFiles.has(h)&&(this.localFiles.delete(h),await this.db.deleteLocalFile(h));const i=[["/home/Hacker/about.txt",Ho],["/etc/hadoop/core-site.xml",si],["/etc/hadoop/hdfs-site.xml",ii],["/etc/hadoop/mapred-site.xml",ri],["/etc/hadoop/yarn-site.xml",oi],["/home/Hacker/hadoop/etc/hadoop/core-site.xml",si],["/home/Hacker/hadoop/etc/hadoop/hdfs-site.xml",ii],["/home/Hacker/hadoop/etc/hadoop/mapred-site.xml",ri],["/home/Hacker/hadoop/etc/hadoop/yarn-site.xml",oi]];for(const[h,b]of i)this.localFiles.has(h)||this.localFiles.set(h,b);const c=await this.db.loadAllLocalDirs();c.size>0&&(this.localDirs=c);const f=["/","/etc","/etc/hadoop","/home","/home/Hacker","/home/Hacker/hadoop","/home/Hacker/hadoop/etc","/home/Hacker/hadoop/etc/hadoop"];for(const h of f)this.localDirs.add(h);const p=await this.db.loadCommandHistory();p.length>0&&(this.historyList=p);const d=await this.db.loadShellState();d&&(this.isHDFSStarted=d.isHDFSStarted,this.isYARNStarted=d.isYARNStarted,this.isNameNodeFormatted=d.isNameNodeFormatted??!1,this.localDir=d.localDir,this.kerberosTicket=d.kerberosTicket,this.activeNameNodeId=d.activeNameNodeId);const y=await this.db.loadAllHdfsFileContents();y.size>0&&y.forEach((h,b)=>{try{h==="__HADOOP_DIR__"?this.nameNode.getNamespace().mkdir(b,!0):this.nameNode.createAndWriteFile(b,h)}catch{}})}persistShellState(){const r={isHDFSStarted:this.isHDFSStarted,isYARNStarted:this.isYARNStarted,isNameNodeFormatted:this.isNameNodeFormatted,localDir:this.localDir,kerberosTicket:this.kerberosTicket,activeNameNodeId:this.activeNameNodeId};this.db.saveShellState(r)}getWorkingDirDisplay(){return this.localDir==="/home/Hacker"?"~":this.localDir.startsWith("/home/Hacker/")?"~/"+this.localDir.substring(13):this.localDir}getLocalFileContent(r){const u=this.resolveLocalPath(r);return this.localFiles.get(u)}saveLocalFileContent(r,u){const i=this.resolveLocalPath(r);this.localFiles.set(i,u),this.db.saveLocalFile(i,u)}execute(r){const u=r.trim();if(u.startsWith("#"))return"";u&&(this.historyList.push(u),this.db.saveCommandHistory(this.historyList));const i=ny(r);if(i.utility==="comment")return"";if(u.startsWith("hive --service llap"))return`[Hive LLAP Engine] Initializing Long-Lived Process Daemons...
[LLAP Daemon] Allocated 16GB off-heap memory cache across NodeManagers.
✓ Hive LLAP Service Active (Low-latency in-memory SQL execution ready).`;if(u.startsWith("spark-shell"))return this.isYARNStarted?`Spark context Web UI available at http://localhost:4040
Spark context available as 'sc' (master = yarn, app id = app_${Date.now()}_0010).
SparkSession available as 'spark'.
Using Scala version 2.12.15 (Java HotSpot(TM) 64-Bit Server VM, Java 1.8.0_311)
scala> val textFile = spark.read.text("/Hacker/about.txt")
textFile: org.apache.spark.sql.DataFrame = [value: string]
scala> textFile.count()
res0: Long = 125`:"Spark Error: YARN ResourceManager is STOPPED. Run 'start-yarn.sh'.";if(u.startsWith("pyspark"))return this.isYARNStarted?`Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\\ \\/ _ \\/ _ \`/ __/  '_/
   /__ / .__/\\_,_/_/ /_/\\_\\   version 3.3.0
      /_/

Using Python version 3.9.7
Spark context Web UI available at http://localhost:4040
Spark context available as 'sc' (master = yarn).
SparkSession available as 'spark'.
>>> df = spark.read.json("/Hacker/data.json")
>>> df.show()
+----+--------+
| id |   name |
+----+--------+
|  1 | Hacker |
+----+--------+`:"Spark Error: YARN ResourceManager is STOPPED. Run 'start-yarn.sh'.";if(u.startsWith("kyuubi"))return`[Apache Kyuubi SQL Gateway] Server starting on thrift server port 10009...
✓ Kyuubi Server active (Engine: Spark SQL, Multi-tenant Session Isolation Enabled).`;if(u.startsWith("impala-shell"))return`[Impala Shell v3.4.0] Connected to impalad at localhost:21000
Query: SELECT * FROM sales
+----+--------+---------+--------+
| id | region | product | amount |
+----+--------+---------+--------+
| 1  | North  | Laptop  | 1200.0 |
| 2  | South  | Phone   | 800.0  |
+----+--------+---------+--------+
Fetched 2 row(s) in 0.015s`;if(u.startsWith("nifi.sh"))return`[Apache NiFi Flow Engine] Starting Flow Controller...
✓ NiFi Web UI initialized on https://localhost:8443/nifi (Active Flow Processors: 12).`;if(u.startsWith("zeppelin-daemon.sh"))return`[Zeppelin Notebook Server] Starting Web UI server on http://localhost:8080...
✓ Zeppelin Daemon started successfully (Interpreters: Spark, Hive, Shell, Presto active).`;if(u.startsWith("tez-job.sh")||u.startsWith("tez"))return this.isYARNStarted?`[Apache Tez Engine] Compiling DAG (Vertices: 3, Edges: 2)...
[Tez DAG Client] Submitting ApplicationToYARN (AppID: application_${Date.now()}_0009)
[Tez Task Scheduler] Memory-pipelined data transfers active between vertices.
✓ Tez DAG Execution Succeeded. Bypassed intermediate HDFS disk writes.`:"Tez Error: YARN ResourceManager is STOPPED. Run 'start-yarn.sh'.";if(u.startsWith("phoenix-sqlline"))return`Building JDBC Connection to HBase Zookeeper [localhost:2181]...
Connected to: Phoenix (version 5.1)
1/1          SELECT * FROM users;
+-------+-------+
| NAME  | ROLE  |
+-------+-------+
| Hacker| Admin |
+-------+-------+
1 row selected (0.042 seconds)`;if(u.startsWith("presto")||u.startsWith("trino"))return`Presto/Trino Distributed Engine:
id   region   product   amount
------------------------------
1    North    Laptop    1200.0
2    South    Phone     800.0
Query 20260825_0001, FINISHED, 4 nodes`;if(u.startsWith("ranger policy"))return`Apache Ranger Security Policies:
  ID   Resource               Service   Permission   Users
  1    /Hacker/*              HDFS      rwx          Hacker, alice
  2    default.sales          Hive      select       Hacker, analytics_team
  3    users                  HBase     read, write  Hacker`;if(u.startsWith("kafka-topics.sh"))return"Created topic logs on Kafka cluster [localhost:9092] (Partitions: 3, ReplicationFactor: 2)";if(u.startsWith("flume-ng"))return this.isHDFSStarted?`[Flume Agent a1] Ingesting event stream -> HDFS sink (/Hacker/flume_stream)
✓ Stream Event Sink active (Ingested 500 events/sec into HDFS).`:"Flume Error: Cannot ingest stream. HDFS NameNode is STOPPED. Run 'start-dfs.sh'.";if(u.startsWith("oozie job"))return this.isYARNStarted?`Job ID: 0000001-${Date.now()}-oozie-oozi-W
[Oozie DAG Engine] Workflow started: Fork Node -> MapReduce -> Hive Action -> Join Node
✓ Workflow status: SUCCEEDED`:"Oozie Error: YARN ResourceManager is STOPPED. Run 'start-yarn.sh'.";if(u.startsWith("kinit")){const c=u.split(/\s+/)[1]||"Hacker@HADOOP.LOCAL";return this.kerberosTicket=c,`Password for ${c}: ********
✓ Ticket grant received for principal ${c} (Valid for 24h).`}if(u==="klist")return this.kerberosTicket?`Ticket cache: FILE:/tmp/krb5cc_1000
Default principal: ${this.kerberosTicket}

Valid starting       Expires              Service principal
${new Date().toISOString()}  ${new Date(Date.now()+864e5).toISOString()}  krbtgt/HADOOP.LOCAL@HADOOP.LOCAL`:"klist: No credentials cache found";if(u==="kdestroy")return this.kerberosTicket=null,"✓ Kerberos ticket cache destroyed.";if(u.startsWith("spark-submit"))return this.isYARNStarted?`[SparkSubmit] Submitting application to YARN cluster...
[YARN Client] Application ID: application_${Date.now()}_0002
[Spark Engine] Initialized SparkContext on YARN cluster (vCores: 4, Executing RDD Transformations)
✓ Spark Job Executed Successfully. Output written to HDFS.`:"Spark Error: YARN ResourceManager is STOPPED. Run 'start-yarn.sh' to start YARN.";if(u.startsWith("sqoop import"))return this.isHDFSStarted?`[Sqoop Importer] Connecting to Relational Database (RDBMS)...
[Sqoop Importer] Extracting database schema...
[MapReduce Engine] Map-only job started to import records into HDFS
✓ Sqoop Import Complete. Imported 1,000 records into HDFS target directory.`:"Sqoop Error: HDFS NameNode is STOPPED. Run 'start-dfs.sh' to start HDFS.";if(i.utility==="clear")return"__CLEAR__";if(i.utility==="unknown")return`Command not recognized: '${r}'. Type help for available commands.`;if(i.utility==="help")return this.getGeneralHelpText();if(i.utility==="script")return this.executeScriptCommand(i);if(i.utility==="linux")return this.executeLinuxCommand(i);if(i.utility==="hdfs"){const c=i.subcommand==="namenode"||i.flags.has("-format")||i.action==="-format"||i.positionalArgs.includes("-format");return!this.isHDFSStarted&&!c?`ls: Cannot connect to NameNode at localhost:9000. Connection refused.
Hadoop HDFS services are currently STOPPED.
Run 'start-dfs.sh' or 'start-all.sh' to start NameNode & DataNodes.`:this.executeHDFSCommand(i)}return i.utility==="hadoop"?this.isYARNStarted?this.executeHadoopCommand(i):`Unable to connect to ResourceManager at localhost:8088. Connection refused.
Hadoop YARN services are currently STOPPED.
Run 'start-yarn.sh' or 'start-all.sh' to start YARN services.`:i.utility==="yarn"?this.isYARNStarted?this.executeYARNCommand(i):`Unable to connect to ResourceManager at localhost:8088. Connection refused.
Hadoop YARN services are currently STOPPED.
Run 'start-yarn.sh' or 'start-all.sh' to start YARN services.`:`Unsupported command: ${r}`}executeScriptCommand(r){const u=r.action||"";return u.startsWith("start-dfs")?this.isNameNodeFormatted?(this.isHDFSStarted=!0,this.persistShellState(),`Starting namenodes on [localhost]
Starting datanodes on [datanode1.hadoop.local, datanode2.hadoop.local, datanode3.hadoop.local]
Starting secondary namenodes [localhost]
✓ HDFS daemons initialized successfully (NameNode: ACTIVE, DataNodes: 3/3 LIVE).`):"Error: NameNode is not formatted! Please run 'hdfs namenode -format' first.":u.startsWith("stop-dfs")?(this.isHDFSStarted=!1,this.persistShellState(),`Stopping datanodes on [datanode1.hadoop.local, datanode2.hadoop.local, datanode3.hadoop.local]
Stopping namenodes on [localhost]
Stopping secondary namenodes [localhost]
✓ HDFS daemons stopped cleanly.`):u.startsWith("start-yarn")?(this.isYARNStarted=!0,this.persistShellState(),`Starting resourcemanager on [localhost]
Starting nodemanagers on [datanode1.hadoop.local, datanode2.hadoop.local, datanode3.hadoop.local]
✓ YARN Capacity Scheduler daemons initialized successfully.`):u.startsWith("stop-yarn")?(this.isYARNStarted=!1,this.persistShellState(),`Stopping nodemanagers on [datanode1.hadoop.local, datanode2.hadoop.local, datanode3.hadoop.local]
Stopping resourcemanager on [localhost]
✓ YARN daemons stopped cleanly.`):u.startsWith("start-all")?this.isNameNodeFormatted?(this.isHDFSStarted=!0,this.isYARNStarted=!0,this.persistShellState(),`Starting HDFS & YARN services...
Starting namenodes on [localhost]
Starting datanodes on [datanode1.hadoop.local, datanode2.hadoop.local, datanode3.hadoop.local]
Starting resourcemanager on [localhost]
Starting nodemanagers on [datanode1.hadoop.local, datanode2.hadoop.local, datanode3.hadoop.local]
✓ All Hadoop cluster daemons started successfully.`):"Error: NameNode is not formatted! Please run 'hdfs namenode -format' first.":u.startsWith("stop-all")?(this.isHDFSStarted=!1,this.isYARNStarted=!1,this.persistShellState(),`Stopping all Hadoop cluster daemons...
Stopping nodemanagers & resourcemanager...
Stopping datanodes & namenode...
✓ All Hadoop cluster daemons stopped.`):`Script execution complete: ${u}`}executeLinuxCommand(r){const u=r.action||"",i=r.positionalArgs;if(u==="node"){if(i.length===0)return`Welcome to Node.js v18.16.0.
Type ".help" for more information.
> console.log("Hadoop Polyglot Node.js Engine Active");
Hadoop Polyglot Node.js Engine Active
undefined
> `;if(i[0]==="-v"||i[0]==="--version")return"v18.16.0";let c="";if(i[0]==="-e"||i[0]==="--eval")c=i.slice(1).join(" ").replace(/^["']|["']$/g,"");else{const d=i[0],y=this.resolveLocalPath(d),h=this.getLocalFileContent(y);if(h!==void 0)c=h;else return`node: internal/modules/cjs/loader:1080 throw err; Cannot find module '${d}'`}const f=[],p={log:(...d)=>f.push(d.map(y=>typeof y=="object"?JSON.stringify(y):String(y)).join(" ")),error:(...d)=>f.push(d.map(y=>typeof y=="object"?JSON.stringify(y):String(y)).join(" ")),warn:(...d)=>f.push(d.map(y=>typeof y=="object"?JSON.stringify(y):String(y)).join(" "))};try{return new Function("console",c)(p),f.length>0?f.join(`
`):""}catch(d){return`Uncaught ${d.name||"Error"}: ${d.message}`}}if(u==="hive"||u==="pig")return"__LAUNCH_KSQL__";if(u==="download")return i.length===0?"Usage: download <filename.ext>":`__DOWNLOAD_FILE__:${i[0]}`;if(u==="about")return Ho;if(u==="get")return"__GET_FILE__";if(u==="jps"){const c=[];return this.isHDFSStarted&&(c.push("18291 NameNode"),c.push("18420 DataNode"),c.push("18590 SecondaryNameNode")),this.isYARNStarted&&(c.push("19842 ResourceManager"),c.push("20115 NodeManager")),c.push("21045 Jps"),c.join(`
`)}if(u==="pyspark"||u==="spark"||u==="spark-shell")return i.length>0?this.executeLinuxCommand({raw:`python ${i.join(" ")}`,utility:"linux",action:"python",flags:new Set,positionalArgs:i}):"__LAUNCH_PYSPARK__";if(u==="spark-submit"){if(i.length===0)return"Usage: spark-submit [options] <app.py> [app arguments]";const c=i.find(p=>p.endsWith(".py"))||i[i.length-1];return`[Spark DAG Scheduler] Submitting PySpark Job to Cluster...
[Spark DAG Scheduler] Stage 0: MapReduce Pipeline Completed.
[Spark DAG Scheduler] Job 0 finished in 0.42s

${this.executeLinuxCommand({raw:`python ${c}`,utility:"linux",action:"python",flags:new Set,positionalArgs:[c]})}`}if(u==="python"||u==="python3"){if(this.pythonEngine.initPyodide(),i.length===0)return"python: missing file operand. Usage: python <script.py> [args...]";if(i[0]==="-v"||i[0]==="--version"||i[0]==="-V")return"Python 3.11.3 (Pyodide WebAssembly Engine)";let c="";const f=[];if(i[0]==="-c")c=i.slice(1).join(" ").replace(/^["']|["']$/g,"");else{const p=i[0],d=this.resolveLocalPath(p),y=this.getLocalFileContent(d);if(y!==void 0)c=y,i.length>1&&f.push(...i.slice(1));else{if(p.endsWith(".py"))return`python: can't open file '${p}': [Errno 2] No such file or directory`;c=i.join(" ").replace(/^["']|["']$/g,"")}}return this.executePython(c,f)}if(u==="ps")return`UID        PID  PPID  C STIME TTY          TIME CMD
Hacker    1042     1  1 13:00 ?        00:14:22 java -Dproc_namenode org.apache.hadoop.hdfs.server.namenode.NameNode
Hacker    1150     1  0 13:00 ?        00:09:45 java -Dproc_resourcemanager org.apache.hadoop.yarn.server.resourcemanager.ResourceManager
Hacker    1280     1  0 13:00 ?        00:05:12 java -Dproc_datanode org.apache.hadoop.hdfs.server.datanode.DataNode
Hacker    1310     1  0 13:00 ?        00:02:10 java org.apache.hive.service.server.HiveServer2`;if(u==="kill")return`✓ Process ${i[i.length-1]||"1042"} terminated.`;if(u==="killall")return`✓ All ${i[0]||"java"} processes terminated.`;if(u==="ifconfig"||u==="ip")return`eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::a00:27ff:fe4e:66a1  prefixlen 64  scopeid 0x20<link>
        ether 08:00:27:4e:66:a1  txqueuelen 1000  (Ethernet)

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0`;if(u==="ping"){const c=i[0]||"datanode1.hadoop.local";return`PING ${c} (192.168.1.101) 56(84) bytes of data.
64 bytes from ${c}: icmp_seq=1 ttl=64 time=0.142 ms
64 bytes from ${c}: icmp_seq=2 ttl=64 time=0.118 ms
--- ${c} ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 0.118/0.130/0.142/0.012 ms`}if(u==="netstat")return`Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 0.0.0.0:9000            0.0.0.0:*               LISTEN      1042/java (NameNode)
tcp        0      0 0.0.0.0:8088            0.0.0.0:*               LISTEN      1150/java (ResourceManager)
tcp        0      0 0.0.0.0:9870            0.0.0.0:*               LISTEN      1042/java (NameNode Web UI)
tcp        0      0 0.0.0.0:2181            0.0.0.0:*               LISTEN      990/java (ZooKeeper)
tcp        0      0 0.0.0.0:10000           0.0.0.0:*               LISTEN      1310/java (Hive Server2)`;if(u==="top")return`top - 13:16:00 up 42 days,  3:14,  1 user,  load average: 0.12, 0.08, 0.05
Tasks: 180 total,   1 running, 179 sleeping,   0 stopped,   0 zombie
%Cpu(s):  2.4 us,  1.2 sy,  0.0 ni, 96.1 id,  0.3 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :  16384.0 total,   4096.0 free,   8192.0 used,   4096.0 buff/cache
MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.   7168.0 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 1042 Hacker    20   0 4892100 812400 120400 S   1.8   5.0  14:22.10 java (NameNode)
 1150 Hacker    20   0 3120400 512000  98000 S   1.2   3.1   9:45.30 java (ResourceManager)
 1280 Hacker    20   0 2400100 412000  85000 S   0.8   2.5   5:12.10 java (DataNode)`;if(u==="df"){const c=(this.cachedStorageUsage/1048576).toFixed(1),f=(this.cachedStorageQuota/(1024*1024)).toFixed(1),p=((this.cachedStorageQuota-this.cachedStorageUsage)/(1024*1024)).toFixed(1),d=this.cachedStorageQuota>0?(this.cachedStorageUsage/this.cachedStorageQuota*100).toFixed(0):"0";return`Filesystem               Size      Used     Avail    Use%  Mounted on
hadoop-lab (IndexedDB)   ${f}M    ${c}M    ${p}M   ${d}%   /
SW Cache                 ${(this.cachedStorageUsage*.3/(1024*1024)).toFixed(1)}M    ${(this.cachedStorageUsage*.3/(1024*1024)).toFixed(1)}M    0.0M  100%   /sw-cache`}if(u==="free")return`               total        used        free      shared  buff/cache   available
Mem:           16384        8192        4096         256        4096        7168
Swap:           2048           0        2048`;if(u==="uname")return"Linux hadoop.local 5.15.0-88-generic #98-Ubuntu SMP Mon Oct 2 15:18:56 UTC 2026 x86_64 x86_64 x86_64 GNU/Linux";if(u==="pwd")return this.localDir;if(u==="whoami")return"Hacker";if(u==="history")return this.historyList.map((c,f)=>` ${(f+1).toString().padStart(4)}  ${c}`).join(`
`);if(u==="cd"){const c=i[0]||"/home/Hacker",f=this.resolveLocalPath(c);return this.localDirs.has(f)?(this.localDir=f,this.persistShellState(),""):`cd: no such file or directory: ${c}`}if(u==="mkdir"){if(i.length===0)return"mkdir: missing operand";const c=this.resolveLocalPath(i[0]);return this.localDirs.add(c),this.db.saveLocalDir(c),`✓ Created local directory: ${c}`}if(u==="touch"){if(i.length===0)return"touch: missing file operand";const c=this.resolveLocalPath(i[0]);return this.localFiles.has(c)||(this.localFiles.set(c,""),this.db.saveLocalFile(c,"")),""}if(u==="echo"){const c=r.raw.substring(r.raw.indexOf("echo")+4).trim();if(c.includes(">")){const f=c.split(">"),p=f[0].replace(/^["']|["']$/g,"").replace(/\\n/g,`
`).replace(/\\t/g,"    ").trim(),d=this.resolveLocalPath(f[1].trim());return this.saveLocalFileContent(d,p+`
`),`✓ Written to local file: ${f[1].trim()}`}return c.replace(/^["']|["']$/g,"").replace(/\\n/g,`
`).replace(/\\t/g,"    ")}if(u==="cat"){if(i.length===0)return"cat: missing file operand";const c=this.resolveLocalPath(i[0]),f=this.getLocalFileContent(c);return f!==void 0?f:`cat: ${i[0]}: No such file or directory`}if(u==="grep"){if(i.length<2)return"grep: Usage: grep <pattern> <file>";const c=i[0],f=this.resolveLocalPath(i[1]),p=this.getLocalFileContent(f);if(p===void 0)return`grep: ${i[1]}: No such file or directory`;const d=p.split(`
`).filter(y=>y.toLowerCase().includes(c.toLowerCase()));return d.length>0?d.join(`
`):""}if(u==="wc"){if(i.length===0)return"wc: missing file operand";const c=this.resolveLocalPath(i[i.length-1]),f=this.getLocalFileContent(c);if(f===void 0)return`wc: ${i[i.length-1]}: No such file or directory`;const p=f.split(`
`).length-(f.endsWith(`
`)?1:0),d=f.trim().split(/\s+/).filter(Boolean).length,y=f.length;return`${p.toString().padStart(6)} ${d.toString().padStart(6)} ${y.toString().padStart(6)} ${i[i.length-1]}`}if(u==="head"){if(i.length===0)return"head: missing file operand";const c=this.resolveLocalPath(i[i.length-1]),f=this.getLocalFileContent(c);return f===void 0?`head: ${i[i.length-1]}: No such file or directory`:f.split(`
`).slice(0,10).join(`
`)}if(u==="tail"){if(i.length===0)return"tail: missing file operand";const c=this.resolveLocalPath(i[i.length-1]),f=this.getLocalFileContent(c);return f===void 0?`tail: ${i[i.length-1]}: No such file or directory`:f.split(`
`).slice(-10).join(`
`)}if(u==="ls"){const c=i[0]?this.resolveLocalPath(i[0]):this.localDir,f=[],p=c.endsWith("/")?c:c+"/";return this.localDirs.forEach(d=>{if(d!==c&&d.startsWith(p)){const y=d.substring(p.length);y.includes("/")||f.push(`drwxr-xr-x  ${y}/`)}}),this.localFiles.forEach((d,y)=>{if(y.startsWith(p)){const h=y.substring(p.length);h.includes("/")||f.push(`-rw-r--r--  ${h}`)}}),f.length>0?f.join(`
`):"."}if(u==="rm"){if(i.length===0)return"rm: missing operand";const c=this.resolveLocalPath(i[0]);let f=!1;return this.localFiles.has(c)&&(this.localFiles.delete(c),this.db.deleteLocalFile(c),f=!0),this.localDirs.has(c)&&(this.localDirs.delete(c),this.db.deleteLocalDir(c),f=!0),f?`✓ Removed local path: ${i[0]}`:`rm: cannot remove '${i[0]}': No such file or directory`}if(u==="cp"){if(i.length<2)return"cp: missing file operand. Usage: cp <src> <dst>";const c=i.includes("-r")||i.includes("-R"),f=i.filter(h=>h!=="-r"&&h!=="-R");if(f.length<2)return"cp: missing destination file operand after "+f[0];const p=this.resolveLocalPath(f[0]);let d=this.resolveLocalPath(f[1]);if(this.localDirs.has(d)){const h=p.split("/").pop()||"file";d=d.endsWith("/")?d+h:d+"/"+h}const y=this.getLocalFileContent(p);if(y!==void 0)return this.saveLocalFileContent(d,y),`✓ Copied local file: ${f[0]} -> ${f[1]}`;if(c&&this.localDirs.has(p)){let h=0;const b=p.endsWith("/")?p:p+"/",w=d.endsWith("/")?d:d+"/";return this.localDirs.add(d),this.db.saveLocalDir(d),this.localDirs.forEach(z=>{if(z.startsWith(b)){const Y=z.substring(b.length),U=w+Y;this.localDirs.add(U),this.db.saveLocalDir(U)}}),this.localFiles.forEach((z,Y)=>{if(Y.startsWith(b)){const U=Y.substring(b.length),te=w+U;this.saveLocalFileContent(te,z),h++}}),`✓ Copied local directory '${f[0]}' -> '${f[1]}' (${h} files)`}return`cp: cannot stat '${f[0]}': No such file or directory`}if(u==="mv"){if(i.length<2)return"mv: missing file operand. Usage: mv <src> <dst>";const c=this.resolveLocalPath(i[0]);let f=this.resolveLocalPath(i[1]);if(this.localDirs.has(f)){const d=c.split("/").pop()||"file";f=f.endsWith("/")?f+d:f+"/"+d}const p=this.getLocalFileContent(c);if(p!==void 0)return this.saveLocalFileContent(f,p),this.localFiles.delete(c),this.db.deleteLocalFile(c),`✓ Moved local file: ${i[0]} -> ${i[1]}`;if(this.localDirs.has(c)){const d=c.endsWith("/")?c:c+"/",y=f.endsWith("/")?f:f+"/";return this.localDirs.add(f),this.db.saveLocalDir(f),this.localFiles.forEach((h,b)=>{if(b.startsWith(d)){const w=b.substring(d.length),z=y+w;this.saveLocalFileContent(z,h),this.localFiles.delete(b),this.db.deleteLocalFile(b)}}),this.localDirs.delete(c),this.db.deleteLocalDir(c),`✓ Renamed/moved directory '${i[0]}' -> '${i[1]}'`}return`mv: cannot stat '${i[0]}': No such file or directory`}return`Linux command executed: ${u}`}executeHDFSCommand(r){const{subcommand:u,action:i,flags:c,positionalArgs:f}=r;if(u==="crypto"){if(i==="-listZones"){const p=["/Hacker/secure   key1","------------------------+"];return this.cryptoZones.forEach((d,y)=>{p.push(`${y.padEnd(16)} ${d}`)}),p.join(`
`)}if(i==="-createZone"){const p=f[1]||"key1",d=f[3]||"/Hacker/secure";return this.cryptoZones.set(d,p),`Added encryption zone ${d} with key ${p}`}}if(u==="balancer")return`[HDFS Balancer] Rebalancing block allocation across 3 DataNodes (Threshold: 10.0%)
[HDFS Balancer] Moved 1,024 MB across DataNode disks.
✓ Cluster HDFS storage is now balanced.`;if(u==="diskbalancer")return`[DiskBalancer] Generating data volume balancing plan for datanode1.hadoop.local
✓ DiskBalancer Plan generated and executed. Volume skew reduced to 0.01.`;if(u==="storagepolicies"){if(i==="-isSatisfierRunning")return"Storage Policy Satisfier (SPS) daemon is RUNNING on Active NameNode nn1.";if(i==="-listPolicies")return`Block Storage Policies:
  1. HOT (Disk: 3) [Default]
  2. WARM (Disk: 1, Archive: 2)
  3. COLD (Archive: 3)
  4. LAZY_PERSIST (RAM_Disk: 1, Disk: 2)`;if(i==="-setStoragePolicy"){const p=f[1]||"/",d=f[3]||"COLD";return this.storagePolicies.set(p,d),`Set storage policy ${d} on ${p}`}if(i==="-satisfyStoragePolicy")return`Scheduled storage policy satisfaction for ${f[1]||"/"}`}if(u==="ec"){if(i==="-enablePolicy")return`Erasure Coding policy ${f[1]||"RS-6-3-1024k"} enabled successfully`;if(i==="-disablePolicy")return`Erasure Coding policy ${f[1]||"RS-6-3-1024k"} disabled successfully`;if(i==="-listPolicies")return`Erasure Coding Policies:
  - RS-6-3-1024k (Reed-Solomon 6 data, 3 parity) [Enabled]
  - RS-3-2-1024k (Reed-Solomon 3 data, 2 parity)
  - XOR-2-1-1024k (XOR 2 data, 1 parity)`;if(i==="-setPolicy"){const p=f[1]||"/",d=f[3]||"RS-6-3-1024k";return this.ecPolicies.set(p,d),`Set Erasure Coding policy ${d} on ${p}`}}if(u==="cacheadmin"){if(i==="-addDirective"){const p=f[1]||"/",d=f[3]||"pool1";return this.cacheDirectives.set(p,d),`Added cache directive 1 for path ${p} in pool ${d}`}if(i==="-listDirectives"){const p=["ID   POOL    REPL  PATH","-------------------------------+"];let d=1;return this.cacheDirectives.forEach((y,h)=>{p.push(`${d.toString().padEnd(4)} ${y.padEnd(7)} 1     ${h}`),d++}),p.join(`
`)}}if(u==="namenode"||c.has("-format")||i==="-format"||f.includes("-format"))return this.isNameNodeFormatted=!0,this.persistShellState(),`26/09/02 15:00:00 INFO namenode.NameNode: STARTUP_MSG:
/************************************************************
STARTUP_MSG: Starting NameNode
STARTUP_MSG:   host = localhost/127.0.0.1
STARTUP_MSG:   version = 3.3.6
************************************************************/
26/09/02 15:00:01 INFO namenode.FSNamesystem: Formatting NameNode in /home/Hacker/hadoop/data/dfs/name
26/09/02 15:00:01 INFO namenode.FSImage: Storage directory /home/Hacker/hadoop/data/dfs/name has been successfully formatted.
26/09/02 15:00:01 INFO namenode.FSImage: Creating initial FSImage checkpoint with Cluster ID: CID-8f92a10b-4e12-4c22-901a
26/09/02 15:00:01 INFO namenode.NameNode: SHUTDOWN_MSG:
/************************************************************
SHUTDOWN_MSG: Shutting down NameNode at localhost/127.0.0.1
************************************************************/
✓ NameNode formatted successfully. Ready for 'start-dfs.sh'.`;if(u==="haadmin"){if(i==="-getServiceState")return(f[0]||"nn1")===this.activeNameNodeId?"active":"standby";if(i==="-failover"){const p=f[0]||"nn1",d=f[1]||"nn2";return this.activeNameNodeId=d,`Failover from ${p} to ${d} successful
✓ ${p} is now STANDBY
✓ ${d} is now ACTIVE`}}if(u==="dfs")switch(i){case"-find":{const p=f[0]||"/",d=f[2]||"*";return`${p}
${p}/about.txt (${d})
${p}/data.csv`}case"-count":return`   DIR_COUNT   FILE_COUNT       CONTENT_SIZE PATHNAME
           4            2               4096 ${f[0]||"/"}`;case"-checksum":{const p=f[0]||"/",d=this.nameNode.getNamespace().resolvePath(p);return!d||d.type!=="FILE"?`checksum: \`${p}\`: No such file`:`${p}	MD5-of-073741824000000000000000	a9b8c7d6e5f43210876543210abcdef1`}case"-stat":{const p=f[1]||f[0]||"/",d=this.nameNode.getNamespace().resolvePath(p);if(!d)return`stat: \`${p}\`: No such file or directory`;const y=d.type==="DIRECTORY"?"directory":"regular file",h=d.type==="FILE"?d.sizeBytes:4096;return`${y} ${d.owner}:${d.group} ${h} ${new Date(d.createdAt).toISOString().slice(0,16).replace("T"," ")}`}case"-getfacl":{const p=f[0]||"/",d=this.acls.get(p)||["user::rwx","group::r-x","other::r-x"];return`# file: ${p}
# owner: Hacker
# group: supergroup
${d.join(`
`)}`}case"-setfacl":{const p=f[1]||"/",d=f[0]||"user:alice:rwx";let y=this.acls.get(p)||["user::rwx","group::r-x","other::r-x"];return y.push(d),this.acls.set(p,y),`✓ Updated ACL for ${p}`}case"-expunge":return"✓ Emptied Trash (/user/Hacker/.Trash). Storage reclaimed.";case"-allowSnapshot":{const p=f[0]||"/";let d=this.snapshots.get(p);return d||(d=new Set,this.snapshots.set(p,d)),`Allowing snapshot on ${p} succeeded`}case"-createSnapshot":{const p=f[0]||"/",d=f[1]||`s_${Date.now()}`;let y=this.snapshots.get(p);return y||(y=new Set,this.snapshots.set(p,y)),y.add(d),`Created snapshot ${p}/.snapshot/${d}`}case"-deleteSnapshot":{const p=f[0]||"/",d=f[1]||"",y=this.snapshots.get(p);return y&&y.has(d)?(y.delete(d),`✓ Deleted snapshot ${d} from ${p}`):`deleteSnapshot: Snapshot \`${d}\` does not exist for \`${p}\``}case"-ls":{const p=f[0]||"/",d=this.nameNode.getNamespace().resolvePath(p);if(!d)return`ls: \`${p}\`: No such file or directory`;if(d.type==="FILE")return`${d.permissions}   ${d.replicationFactor} ${d.owner} ${d.group}  ${d.sizeBytes.toString().padStart(8)} ${new Date(d.createdAt).toISOString().slice(0,16).replace("T"," ")} ${d.name}`;{if(d.children.size===0)return"Found 0 items";const y=[`Found ${d.children.size} items`];return d.children.forEach(h=>{const b=h.type==="FILE"?h.replicationFactor:"-",w=h.type==="FILE"?h.sizeBytes:0;y.push(`${h.permissions}   ${b} ${h.owner} ${h.group}  ${w.toString().padStart(8)} ${new Date(h.createdAt).toISOString().slice(0,16).replace("T"," ")} ${h.name}`)}),y.join(`
`)}}case"-mkdir":{if(f.length===0)return"mkdir: Missing directory argument";const p=f[0],d=c.has("-p");try{return this.nameNode.getNamespace().mkdir(p,d),this.db.saveHdfsFileContent(p,"__HADOOP_DIR__"),`✓ Created HDFS directory: ${p}`}catch(y){return`mkdir: ${y.message}`}}case"-touchz":{if(f.length===0)return"touchz: Missing file path argument";const p=f[0];try{return this.nameNode.createAndWriteFile(p,""),this.db.saveHdfsFileContent(p,""),`✓ Created empty 0-byte HDFS file: ${p}`}catch(d){return`touchz: ${d.message}`}}case"-cp":{if(f.length<2)return"cp: Usage: hdfs dfs -cp <src> <dst>";const p=f[0],d=f[1],y=this.nameNode.readFileContent(p);if(y===void 0)return`cp: \`${p}\`: No such file or directory`;try{return this.nameNode.createAndWriteFile(d,y),this.db.saveHdfsFileContent(d,y),`✓ Copied in HDFS: [${p}] -> [${d}]`}catch(h){return`cp: ${h.message}`}}case"-mv":{if(f.length<2)return"mv: Usage: hdfs dfs -mv <src> <dst>";const p=f[0],d=f[1],y=this.nameNode.readFileContent(p);if(y===void 0)return`mv: \`${p}\`: No such file or directory`;try{return this.nameNode.createAndWriteFile(d,y),this.nameNode.getNamespace().deletePath(p,!0),this.db.saveHdfsFileContent(d,y),this.db.deleteHdfsFileContent(p),`✓ Moved in HDFS: [${p}] -> [${d}]`}catch(h){return`mv: ${h.message}`}}case"-setrep":{if(f.length<2)return"setrep: Usage: hdfs dfs -setrep [-w] <replication> <path>";const p=parseInt(f[0])||3,d=f[1],y=this.nameNode.getNamespace().resolvePath(d);return!y||y.type!=="FILE"?`setrep: \`${d}\`: No such file`:(y.replicationFactor=p,`Replication ${p} set for ${d}`)}case"-chmod":{if(f.length<2)return"chmod: Usage: hdfs dfs -chmod <mode> <path>";const p=f[0],d=f[1],y=this.nameNode.getNamespace().resolvePath(d);return y?(y.permissions=p.startsWith("-")||p.startsWith("d")?p:`-${p}`,`Changed permissions of ${d} to ${y.permissions}`):`chmod: \`${d}\`: No such file or directory`}case"-chown":{if(f.length<2)return"chown: Usage: hdfs dfs -chown <owner[:group]> <path>";const p=f[0],d=f[1],y=this.nameNode.getNamespace().resolvePath(d);if(!y)return`chown: \`${d}\`: No such file or directory`;if(p.includes(":")){const[h,b]=p.split(":");y.owner=h,y.group=b}else y.owner=p;return`Changed owner of ${d} to ${y.owner}:${y.group}`}case"-put":case"-copyFromLocal":{if(f.length<2)return"put: Usage: hdfs dfs -put <localfile> <hdfspath>";const p=f[0],d=f[1];let y=p;const h=this.getLocalFileContent(p);h!==void 0&&(y=h);try{return this.nameNode.createAndWriteFile(d,y),this.db.saveHdfsFileContent(d,y),`✓ Copied from Local [${p}] -> HDFS [${d}] (3 replicas allocated across DataNodes)`}catch(b){return`put: ${b.message}`}}case"-get":case"-copyToLocal":{if(f.length<2)return"get: Usage: hdfs dfs -get <hdfspath> <localfile>";const p=f[0],d=f[1],y=this.nameNode.readFileContent(p);return y===void 0?`get: \`${p}\`: No such file or directory in HDFS`:(this.saveLocalFileContent(d,y),`✓ Copied from HDFS [${p}] -> Local [${d}] successfully.`)}case"-cat":{if(f.length===0)return"cat: Missing file path argument";const p=f[0],d=this.nameNode.getNamespace().resolvePath(p);if(!d||d.type!=="FILE")return`cat: \`${p}\`: No such file`;const y=this.nameNode.readFileContent(p);return y!==void 0?y:`hello hadoop
hello world
hadoop world
`}case"-tail":{if(f.length===0)return"tail: Missing file path argument";const p=f[0],d=this.nameNode.readFileContent(p);return d===void 0?`tail: \`${p}\`: No such file`:d.split(`
`).slice(-10).join(`
`)}case"-head":{if(f.length===0)return"head: Missing file path argument";const p=f[0],d=this.nameNode.readFileContent(p);return d===void 0?`head: \`${p}\`: No such file`:d.split(`
`).slice(0,10).join(`
`)}case"-rm":case"-rmdir":{if(f.length===0)return"rm: Missing file path argument";const p=f[0],d=c.has("-r")||i==="-rm";try{const y=this.nameNode.getNamespace().deletePath(p,d);return y&&this.db.deleteHdfsFileContent(p),y?`✓ Deleted ${p}`:`rm: \`${p}\`: No such file or directory`}catch(y){return`rm: ${y.message}`}}case"-du":{const p=f[0]||"/",d=this.nameNode.getNamespace().resolvePath(p);if(!d)return`du: \`${p}\`: No such file or directory`;const y=d.type==="FILE"?d.sizeBytes:1024;return`${y}  ${y*3}  ${p}`}case"-df":{const p=this.nameNode.getDataNodes(),d=p.reduce((b,w)=>b+w.storageCapacityBytes,0),y=p.reduce((b,w)=>b+w.storageUsedBytes,0),h=d-y;return`Filesystem           Size       Used      Available  Use%
file:///         ${(d/(1024*1024)).toFixed(1)}MB    ${(y/(1024*1024)).toFixed(1)}MB    ${(h/(1024*1024)).toFixed(1)}MB     ${(y/d*100).toFixed(1)}%`}case"-help":default:return`HDFS Shell Commands:
  hdfs dfs -ls [-r] <path>             List HDFS directory contents
  hdfs dfs -find <path> -name <p>      Search files recursively in HDFS
  hdfs dfs -count <path>               Count dirs, files, and bytes in HDFS
  hdfs dfs -mkdir [-p] <path>         Create HDFS directory
  hdfs dfs -put <local> <hdfs>         Copy file from Local Linux FS -> HDFS
  hdfs dfs -get <hdfs> <local>         Copy file from HDFS -> Local Linux FS
  hdfs dfs -cp <src> <dst>             Copy file/directory within HDFS
  hdfs dfs -mv <src> <dst>             Move/rename file/directory within HDFS
  hdfs dfs -chmod <mode> <path>        Change HDFS file permissions (e.g. 755)
  hdfs dfs -chown <owner[:grp]> <path> Change HDFS file owner/group
  hdfs dfs -getfacl <path>             Inspect Granular ACL permissions
  hdfs dfs -setfacl -m user:alice:rwx  Set Granular ACL permissions
  hdfs dfs -checksum <path>            Compute file MD5 checksum
  hdfs dfs -expunge                    Empty HDFS trash (.Trash)
  hdfs dfs -allowSnapshot <dir>        Allow HDFS Snapshots
  hdfs dfs -createSnapshot <dir> <s1>  Create HDFS Snapshot
  hdfs dfs -deleteSnapshot <dir> <s1>  Delete HDFS Snapshot
  hdfs dfs -touchz <path>              Create empty 0-byte file in HDFS
  hdfs dfs -cat <path>                Display file contents
  hdfs dfs -tail / -head <path>        Display tail/head of file
  hdfs dfs -rm [-r] <path>            Remove file or directory
  hdfs dfs -du <path>                 Display disk usage
  hdfs dfs -df                        Display filesystem storage capacity`}if(u==="fsck"){const p=f[0]||"/";if(c.has("-files")||c.has("-blocks")||c.has("-locations"))return`Connecting to NameNode at localhost:9000...
FSCK started by Hacker for path ${p} at ${new Date().toISOString()}
. Status: HEALTHY
/file.txt 1024 bytes, 1 block(s):  OK
0. BP-10023412-127.0.0.1-1700000000:blk_1073741825_1001 len=1024 repl=3 [datanode1.hadoop.local:9866, datanode2.hadoop.local:9866, datanode3.hadoop.local:9866]

The filesystem under path '${p}' is HEALTHY`;const d=this.nameNode.runFSCK(p),y=["+-------------------------------------------------------------+","|                    HDFS FILE SYSTEM CHECK                   |","+-------------------------------------------------------------+",` Status:                       ${d.isHealthy?"HEALTHY ✓":"UNHEALTHY ✗"}`,` Total size:                    ${d.totalFiles*1024} B`,` Total files:                   ${d.totalFiles}`,` Total blocks:                  ${d.totalBlocks}`,` Minimally replicated blocks:   ${d.totalBlocks}`," Over-replicated blocks:        0",` Under-replicated blocks:       ${d.underReplicatedBlocks}`," Mis-replicated blocks:         0"," Default replication factor:    3",` Average block replication:     ${d.totalBlocks>0?(d.totalReplicas/d.totalBlocks).toFixed(2):0}`,` Corrupt blocks:                ${d.corruptBlocks}`,` Missing replicas:              ${d.missingBlocks}`,"+-------------------------------------------------------------+"];return d.details.length>0&&y.push(`
Details:
`+d.details.join(`
`)),y.join(`
`)}if(u==="dfsadmin"){if(i==="-refreshNodes")return`[HDFS Admin] Re-reading dfs.hosts and dfs.hosts.exclude...
✓ DataNode membership & decommissioning list refreshed successfully.`;if(i==="-metasave"){const p=f[0]||"metasave.log";return this.saveLocalFileContent(p,`NameNode Metasave Report at ${new Date().toISOString()}
Live DataNodes: 3
Under-replicated blocks: 0
Corrupt blocks: 0
Replication Queues: Empty`),`Created metasave report in local file ${p}`}if(i==="-triggerBlockReport")return`Triggering full block report on ${f[0]||"datanode1.hadoop.local"}...
✓ Full block report sent to Active NameNode nn1.`;if(i==="-enterMaintenance"){const p=f[0]||"datanode1.hadoop.local";return`[HDFS Admin] ${p} entering maintenance mode...
✓ DataNode ${p} placed in Maintenance Window. Re-replication suppressed.`}if(i==="-exitMaintenance")return`✓ DataNode ${f[0]||"datanode1.hadoop.local"} exited maintenance mode.`;if(i==="-saveNamespace")return`[SecondaryNameNode] Merging edits log into fsimage...
✓ Saved namespace image (fsimage_0000000000000000124) successfully.`;if(i==="-setQuota"){const p=parseInt(f[0])||1e3,d=f[1]||"/";return this.fileQuotas.set(d,p),`Set file count quota ${p} on ${d}`}if(i==="-setSpaceQuota"){const p=f[0]||"10g",d=f[1]||"/";return this.spaceQuotas.set(d,p),`Set space quota ${p} on ${d}`}if(i==="-clrSpaceQuota"){const p=f[0]||"/";return this.spaceQuotas.delete(p),`Cleared space quota on ${p}`}if(i==="-report"){const p=this.nameNode.getDataNodes(),d=[`Configured Capacity: ${p.length*10} GB`,`Present Capacity: ${p.length*10} GB`,`DFS Remaining: ${p.length*10-.1} GB`,"DFS Used: 0.1 GB","DFS Used%: 1.0%","Under replicated blocks: 0","Blocks with corrupt replicas: 0","Missing blocks: 0","-------------------------------------------------",`Live datanodes (${p.length}):
`];return p.forEach(y=>{d.push(`Name: ${y.hostname} (${y.id})
Hostname: ${y.hostname}
Rack: ${y.rackId}
State: ${y.state}
Used: ${y.storageUsedBytes} B
Blocks: ${y.blocks.length}
Last Heartbeat: OK
`)}),d.join(`
`)}if(i==="-safemode")return`Safe mode is ${this.nameNode.getState()==="SAFE_MODE"?"ON":"OFF"}`}return`Unsupported hdfs subcommand: ${u}`}executeHadoopCommand(r){if(r.subcommand==="distcp"){const u=r.positionalArgs[0]||"hdfs://nn1/src",i=r.positionalArgs[1]||"hdfs://nn2/dst";return`[DistCp Engine] Submitting MapReduce DistCp job across virtual network links...
[MapReduce DistCp] 4 Map tasks copying data chunks from [${u}] to [${i}]
✓ Inter-cluster dataset replication completed successfully.`}if(r.subcommand==="jar"){if(r.positionalArgs.length<3)return"Usage: hadoop jar <jarfile> [mainclass] <input> <output>";if(r.positionalArgs[0].includes("streaming"))return`[Hadoop Streaming Engine] Executing Polyglot MapReduce Pipeline...
[Map Phase] Executing Node.js / Polyglot mapper script...
[Shuffle & Sort] Partitioning intermediate key-value pairs...
[Reduce Phase] Executing Node.js / Polyglot reducer script...
✓ Hadoop Streaming Job Completed Successfully. Output written to HDFS.`;const i=r.positionalArgs[1],c=r.positionalArgs[2];try{const f=this.mapReduceEngine.submitJob(`WordCount_${Date.now()}`,i,c);return`Submitted MapReduce Job ${f.id} (${f.name}) to YARN queue '${f.queue}'
✓ Container allocated
✓ Mappers running
✓ Shuffle & Sort active
✓ Reducers processing
✓ Output written to HDFS: ${c}/part-r-00000`}catch(f){return`Hadoop Jar Error: ${f.message}`}}return`Hadoop CLI commands:
  hadoop jar <jarfile> <input> <output>
  hadoop distcp <src> <dst>`}executeYARNCommand(r){if(r.subcommand==="scm")return`[YARN Shared Cache Manager] Cleaning expired dependency artifacts from shared cache...
✓ Reclaimed 512 MB from YARN shared cache.`;if(r.subcommand==="rmadmin"){if(r.action==="-refreshSuperUserGroupsConfiguration")return`[YARN RMAdmin] Re-reading core-site.xml superuser and proxyuser group permissions...
✓ Superuser proxy group ACL configuration refreshed.`;if(r.action==="-refreshNodes")return`[YARN RMAdmin] Re-reading include/exclude host files...
✓ NodeManager membership refreshed successfully.`}if(r.subcommand==="container")return`Total Containers for ${r.positionalArgs[0]||"appattempt_1700000000_0001_000001"} : 2
Container-Id                            Node-Id                     Node-Http-Address    LOG-PATH
container_e01_1700000000_0001_01_000001  datanode1.hadoop.local:8041 datanode1:8042       /tmp/logs/container_01
container_e01_1700000000_0001_01_000002  datanode2.hadoop.local:8041 datanode2:8042       /tmp/logs/container_02`;if(r.subcommand==="applicationattempt")return`Total Application Attempts for ${r.positionalArgs[0]||"application_1700000000_0001"} : 1
ApplicationAttempt-Id               State      AM-Container-Id                            Node-Id
appattempt_1700000000_0001_000001  FINISHED   container_e01_1700000000_0001_01_000001   datanode1.hadoop.local:8041`;if(r.subcommand==="application"){if(r.action==="-kill"){const u=r.positionalArgs[0]||"application_1700000000_0001";return`Killing application ${u}...
✓ Application ${u} killed by user Hacker.`}if(r.action==="-list"){const u=this.mapReduceEngine.getJobs(),i=[`Total Applications: ${u.length}`,"ID                       Name            Type       User     Queue      State","----------------------------------------------------------------------------------"];return u.forEach(c=>{i.push(`${c.id.padEnd(24)} ${c.name.padEnd(15)} MAPREDUCE  ${c.user.padEnd(8)} ${c.queue.padEnd(10)} ${c.state}`)}),i.join(`
`)}}if(r.subcommand==="node"){if(r.action==="-list")return r.raw.includes("DECOMMISSIONED")?"Total Decommissioned Nodes: 0":`Total Nodes: 3
Node-Id                        Node-State Node-Http-Address     Number-of-Running-Containers
datanode1.hadoop.local:8041   RUNNING    datanode1:8042        2
datanode2.hadoop.local:8041   RUNNING    datanode2:8042        1
datanode3.hadoop.local:8041   RUNNING    datanode3:8042        1`;if(r.action==="-status")return`Node Report:
Node-Id : ${r.positionalArgs[0]||"datanode1.hadoop.local"}:8041
Rack : /rack-01
Node-State : RUNNING
Memory-Used : 2048MB
Memory-Capacity : 8192MB
vCores-Used : 2
vCores-Capacity : 8`}return r.subcommand==="queue"?`Queue Name: ${r.positionalArgs[1]||"root.default"}
State: RUNNING
Capacity: 50.0%
Absolute Capacity: 50.0%
Current Capacity: 0.0%
Maximum Capacity: 100.0%
Num Applications: 0`:r.subcommand==="logs"?`================================================================================
YARN CONTAINER LOG ENGINE - APP ID: ${r.positionalArgs[0]||"application_1700000000_0001"}
================================================================================
Container: container_e01_1700000000_0001_01_000001 on datanode1.hadoop.local
================================================================================
LogType: stdout
Log Upload Time: ${new Date().toISOString()}
Log Length: 512 B

[Mapper Task 0] Read InputSplit (file /Hacker/about.txt) -> Output: 342 key-value pairs
[Mapper Task 1] Read InputSplit (file /Hacker/about.txt) -> Output: 289 key-value pairs
[Shuffle] Transferred 631 map output records across VirtualNetwork links (Rack distance: 1)
[Reducer Task 0] Sort & Merge complete. Reducing keys...
[Reducer Task 0] Successfully written output to HDFS /output/part-r-00000
================================================================================
LogType: stderr
[INFO] Job completed successfully with exit code 0.`:`YARN CLI commands:
  yarn application -list
  yarn application -kill <id>
  yarn applicationattempt -list <id>
  yarn container -list <attemptId>
  yarn logs -applicationId <id>
  yarn queue -status <queue>
  yarn node -list
  yarn scm -run
  yarn rmadmin -refreshNodes`}resolveLocalPath(r){if(!r||r==="~")return"/home/Hacker";const i=(r.startsWith("/")?r:`${this.localDir}/${r}`).split("/").filter(Boolean),c=[];for(const f of i)f!=="."&&(f===".."?c.length>0&&c.pop():c.push(f));return"/"+c.join("/")}executePython(r,u){const i=(c,f)=>{this.saveLocalFileContent(c,f)};if(this.pythonEngine){const c=this.pythonEngine.runSync(r,u,this.localFiles,i);if(c)return c.stderr?`${c.stdout}
${c.stderr}`.trim():c.stdout;const f=this.pythonEngine.fallbackExecuteSync(r,u,this.localFiles,i);if(f)return f.stderr?`${f.stdout}
${f.stderr}`.trim():f.stdout}return this.executePythonSync(r,u)}executePythonSync(r,u){const i=[];let c=0,f=null;const p=(d="")=>{if(c<u.length){const y=u[c++];return d&&i.push(`${d}${y}`),y}throw f=d||"Enter input: ",new Error("__NEED_INPUT__")};try{const d=ui(r),z={__py_print__:(...L)=>{const I=L.map(P=>typeof P=="object"?JSON.stringify(P):String(P)).join(" ");i.push(I)},__py_input__:(L="")=>p(L),__py_open__:(L,I="r")=>{const P=this.resolveLocalPath(L),ee=L.split("/").pop()||L;if(I.includes("w")||I.includes("a")){let J=I.includes("a")&&this.getLocalFileContent(P)||"";return{write:he=>{J+=String(he),this.saveLocalFileContent(P,J)},writelines:he=>{J+=he.join(""),this.saveLocalFileContent(P,J)},read:()=>J,close:()=>{},__enter__:function(){return this},__exit__:function(){}}}else{const J=this.getLocalFileContent(P)??this.getLocalFileContent(ee)??"";return{read:()=>J,readline:()=>J.split(`
`)[0]||"",readlines:()=>J.split(`
`),write:()=>{},close:()=>{},__enter__:function(){return this},__exit__:function(){}}}},__py_import__:L=>{const I=`${L}.py`,P=this.getLocalFileContent(I)||this.getLocalFileContent(`/home/Hacker/${I}`);if(P===void 0)throw new Error(`No module named '${L}'`);const ee={Math,JSON,parseInt,parseFloat,String,Number,Array,Object,True:!0,False:!1,None:null},J=ui(P);return new Function(...Object.keys(ee),J)(...Object.values(ee)),ee},Math,JSON,parseInt,parseFloat,String,Number,Array,Object,True:!0,False:!1,None:null,len:L=>L&&L.length!==void 0?L.length:0,range:(L,I,P=1)=>{I===void 0&&(I=L,L=0);const ee=[];for(let J=L;J<I;J+=P)ee.push(J);return ee},str:L=>String(L),int:L=>parseInt(L,10)||0,float:L=>parseFloat(L)||0,list:L=>Array.from(L||[])},Y=Object.keys(z),U=Object.values(z);return new Function(...Y,d)(...U),i.length>0?i.join(`
`):""}catch(d){return d&&d.message==="__NEED_INPUT__"?`__NEED_INPUT__:${f||"Enter input: "}`:i.length>0?`${i.join(`
`)}
Python SyntaxError / RuntimeError: ${d.message}`:`Python SyntaxError / RuntimeError: ${d.message}`}}getGeneralHelpText(){return`Hadoop Practice Laboratory Terminal Help:
Hadoop Daemon Controls:
  start-dfs.sh / start-all.sh   Start HDFS & YARN cluster daemons
  stop-dfs.sh / stop-all.sh     Stop cluster daemons

Linux Commands & Text Editor:
  ls, pwd, cd, mkdir, echo, cat, touch, rm, whoami
  grep <pattern> <file>         Search text in local files
  wc -l <file>                  Count lines/words/chars
  head / tail <file>            Display start/end of file
  ps -ef                        Display process listing
  kill -9 <PID> / killall java  Terminate processes or daemons
  ifconfig, ping, netstat -tuln Network Diagnostics & Listening Ports
  top, df -h, free -m, uname -a Linux System Monitoring Tools
  history                       Display command history
  vim <file> / vi <file>        Open interactive Vim text editor (:wq to save & exit)

Node.js & Python Engines & Polyglot Hadoop Streaming:
  python script.py / python3    Execute Python file (Pyodide Wasm Engine + input() support)
  python -c "print('hello')"    Evaluate Python code inline
  python -v                     Display Python runtime version
  node -v                       Display Node.js runtime version
  node script.js                Execute JavaScript file
  node -e "console.log('test')" Evaluate JavaScript code inline
  hadoop jar streaming.jar -mapper "python mapper.py" -reducer "python reducer.py"

HDFS Operations (Local <-> HDFS & Inter-HDFS):
  hdfs dfs -put <local> <hdfs>         Copy file from Local Linux FS -> HDFS
  hdfs dfs -get <hdfs> <local>         Copy file from HDFS -> Local Linux FS
  hdfs dfs -cp <src> <dst>             Copy file/directory within HDFS
  hdfs dfs -mv <src> <dst>             Move/rename file/directory within HDFS
  hdfs dfs -chmod <mode> <path>        Change HDFS file permissions (e.g. 755)
  hdfs dfs -chown <owner[:grp]> <path> Change HDFS file owner/group
  hdfs dfs -find <path> -name <p>      Search files recursively in HDFS
  hdfs dfs -count <path>               Count dirs, files, and bytes in HDFS
  hdfs dfs -checksum <path>            Compute file MD5 checksum
  hdfs fsck /file -files -blocks -locations Inspect HDFS Block IDs & DataNodes
  hdfs dfsadmin -triggerBlockReport dn Force Full Block Report to NameNode
  hdfs dfsadmin -metasave metasave.log Dump NameNode Memory State
  hdfs dfsadmin -refreshNodes          Refresh DataNode membership
  hdfs storagepolicies -isSatisfierRunning Check Storage Policy Satisfier Daemon State
  hdfs ec -enablePolicy / -disablePolicy Enable/disable Erasure Coding policies
  hdfs dfs -getfacl / -setfacl         Inspect & set Granular ACL permissions
  hdfs dfs -expunge                    Empty HDFS trash (.Trash)
  hadoop distcp <src> <dst>            Distributed Copy across clusters
  hdfs dfsadmin -setQuota 1000 /dir    Set file count quota
  hdfs dfsadmin -setSpaceQuota 10g     Set space quota
  hdfs dfsadmin -saveNamespace         Save NameNode fsimage checkpoint
  hdfs dfsadmin -enterMaintenance dn   DataNode Maintenance Window
  hdfs crypto -listZones               Inspect KMS Encryption Zones
  hdfs crypto -createZone              Create KMS Encryption Zone
  hdfs dfs -allowSnapshot <dir>        Allow HDFS Snapshots
  hdfs dfs -createSnapshot <dir> <s1>  Create HDFS Snapshot
  hdfs dfs -deleteSnapshot <dir> <s1>  Delete HDFS Snapshot
  hdfs dfs -touchz <path>              Create empty 0-byte file in HDFS
  hdfs dfs -ls <path>                  List HDFS directory contents
  hdfs dfs -cat <path>                 Display HDFS file content
  hdfs dfs -tail / -head <path>        Display tail/head of file
  hdfs fsck /                          Run HDFS File System Check
  hdfs dfsadmin -report                Display DataNode cluster report
  hdfs haadmin -failover nn1 nn2       NameNode HA Failover
  hdfs storagepolicies -listPolicies   Storage Policies (HOT/WARM/COLD)
  hdfs storagepolicies -satisfyStoragePolicy Satisfy storage policy
  hdfs ec -listPolicies               Erasure Coding Policies
  hdfs cacheadmin -addDirective ...   Centralized Cache Directives
  hdfs balancer -threshold 10         HDFS Cluster Balancer
  hdfs diskbalancer -plan datanode1   DataNode Disk Balancer

MapReduce, Tez, YARN & Kyuubi:
  hadoop jar wordcount.jar <in> <out>  Submit MapReduce Job
  tez-job.sh --submit dag.xml          Submit Apache Tez DAG job
  yarn application -list               List YARN applications
  yarn application -kill <appId>       Kill YARN application
  yarn applicationattempt -list <id>   List YARN application attempts
  yarn container -list <attemptId>     List YARN container allocations
  yarn logs -applicationId <id>        View MapReduce job container logs
  yarn queue -status root.default      Check YARN Queue Status
  yarn node -list                      List live YARN NodeManagers
  yarn node -list -states DECOMMISSIONED List decommissioned nodes
  yarn scm -run                        Run YARN Shared Cache Manager
  yarn rmadmin -refreshNodes           Refresh NodeManagers in YARN
  yarn rmadmin -refreshSuperUserGroupsConfiguration Refresh Superuser ACLs
  kyuubi start                         Start Apache Kyuubi Gateway

Hadoop Ecosystem Commands:
  hive -e "SELECT ... FROM ..."        Execute Hive SQL queries over HDFS data
  hive -e "ALTER TABLE sales ADD COLUMNS (...)" Alter Hive Metastore Schema
  hive -e "DROP TABLE sales"          Drop Hive Metastore Table
  hive --service llap                  Start Hive LLAP In-Memory Query Accelerator
  impala-shell -q "SELECT ..."         Execute Impala MPP SQL query
  presto --execute "SELECT ..."        Execute Presto/Trino SQL query
  pig -e "LOAD ... DUMP ..."           Execute Apache Pig Latin script
  phoenix-sqlline -e "SELECT ..."      Execute Apache Phoenix SQL over HBase
  nifi.sh start                        Start Apache NiFi Flow Engine
  zeppelin-daemon.sh start             Start Apache Zeppelin notebook server
  hbase shell                          Open interactive HBase NoSQL shell
  hbase shell -c "list"                Run HBase shell command directly
  pyspark / spark / spark-shell        Interactive PySpark REPL shell (>>> prompt)
  hive / pig / ksql                    Interactive KSQL WASM Database shell (>> prompt)
  spark-submit app.py                  Submit PySpark job execution
  get                                  Import local file from host OS into terminal storage
  download <file>                      Export terminal file to host OS Downloads folder
  about / cat about.txt                Display developer, architecture, and system details
  sqoop import --table tbl --target-dir hdfs_dir  Import database tables into HDFS
  kafka-topics.sh --create --topic logs Create Kafka topic
  flume-ng agent --conf-file flume.conf  Run Flume stream ingestion to HDFS
  oozie job -config job.properties -run Run Oozie DAG Workflow
  ranger policy -list                  Inspect Ranger Security Policies
  kinit Hacker@HADOOP.LOCAL            Authenticate with Kerberos
  klist / kdestroy                     Inspect or clear Kerberos tickets
  clear                                Clear terminal screen`}}class iy{constructor(r=3,u=2,i=12345){O(this,"engine");O(this,"nameNode");O(this,"dataNodes",new Map);O(this,"resourceManager");O(this,"network");O(this,"mapReduceEngine");O(this,"failureInjector");O(this,"observability");O(this,"shellExecutor");O(this,"db");this.engine=new Gh(i),this.network=new ey,this.nameNode=new Ih(this.engine),this.resourceManager=new Wh(this.engine),this.db=new Jd;for(let c=1;c<=r;c++){const f=`dn-${c.toString().padStart(2,"0")}`,d=`/rack-0${(c-1)%u+1}`,y=`datanode${c}.hadoop.local`;this.network.registerNode(f,d);const h=new Jh(f,y,d,10*1024*1024*1024,this.nameNode,this.engine);this.dataNodes.set(f,h),this.resourceManager.registerNodeManager(h.node)}this.mapReduceEngine=new Ph(this.engine,this.nameNode,this.resourceManager,this.network),this.failureInjector=new ty(this.nameNode,this.dataNodes,this.network,this.engine),this.observability=new ay(this.nameNode,this.resourceManager,this.engine),this.shellExecutor=new sy(this.nameNode,this.resourceManager,this.mapReduceEngine,this.db)}async initFromDB(){await this.shellExecutor.loadFromDB()}getBackendType(){return"SIMULATOR"}getEngine(){return this.engine}getNameNode(){return this.nameNode}getResourceManager(){return this.resourceManager}getMapReduceEngine(){return this.mapReduceEngine}getNetwork(){return this.network}getFailureInjector(){return this.failureInjector}getObservability(){return this.observability}executeCLI(r){return this.shellExecutor.execute(r)}executePySparkRepl(r){return this.shellExecutor.executePySparkRepl(r)}saveLocalFile(r,u){this.shellExecutor.saveLocalFileContent(r,u)}readLocalFile(r){return this.shellExecutor.getLocalFileContent(r)}getWorkingDir(){return this.shellExecutor.getWorkingDirDisplay()}}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=E=>E.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pd=(...E)=>E.filter((r,u,i)=>!!r&&r.trim()!==""&&i.indexOf(r)===u).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=pe.forwardRef(({color:E="currentColor",size:r=24,strokeWidth:u=2,absoluteStrokeWidth:i,className:c="",children:f,iconNode:p,...d},y)=>pe.createElement("svg",{ref:y,...oy,width:r,height:r,stroke:E,strokeWidth:i?Number(u)*24/Number(r):u,className:Pd("lucide",c),...d},[...p.map(([h,b])=>pe.createElement(h,b)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=(E,r)=>{const u=pe.forwardRef(({className:i,...c},f)=>pe.createElement(uy,{ref:f,iconNode:r,className:Pd(`lucide-${ry(E)}`,i),...c}));return u.displayName=`${E}`,u};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],fy=fi("CircleCheck",cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],py=fi("Download",dy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],hy=fi("Terminal",my);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gy=fi("X",yy),_y=()=>{const[E,r]=pe.useState(window.deferredPWAInstallPrompt||null),[u,i]=pe.useState(!1),[c,f]=pe.useState("idle"),[p,d]=pe.useState(!1);pe.useEffect(()=>{if(window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0){i(!1);return}window.deferredPWAInstallPrompt&&(r(window.deferredPWAInstallPrompt),i(!0));const w=U=>{U.preventDefault(),window.deferredPWAInstallPrompt=U,r(U),i(!0)},z=()=>{window.deferredPWAInstallPrompt&&(r(window.deferredPWAInstallPrompt),i(!0))},Y=()=>{f("done"),i(!1),window.deferredPWAInstallPrompt=null};return window.addEventListener("beforeinstallprompt",w),window.addEventListener("pwa-prompt-available",z),window.addEventListener("appinstalled",Y),()=>{window.removeEventListener("beforeinstallprompt",w),window.removeEventListener("pwa-prompt-available",z),window.removeEventListener("appinstalled",Y)}},[]);const y=async b=>{b&&(b.preventDefault(),b.stopPropagation());const w=E||window.deferredPWAInstallPrompt;if(w){f("installing");try{await w.prompt();const z=await w.userChoice.catch(()=>null);z&&z.outcome==="accepted"?(f("done"),window.deferredPWAInstallPrompt=null,setTimeout(()=>{i(!1)},1e3)):f("idle")}catch{f("idle")}}},h=b=>{b&&(b.preventDefault(),b.stopPropagation()),i(!1)};return!u||!E?null:q.jsxs("div",{className:"fixed bottom-3 left-3 right-3 sm:right-auto sm:bottom-4 sm:left-4 z-50 flex items-center justify-between gap-3 bg-black border border-cyan-500 text-white px-3.5 py-2.5 rounded-xl shadow-2xl shadow-cyan-500/20 w-auto sm:max-w-xs animate-slide-up select-none",style:{animation:"slideUp 0.3s ease-out"},children:[q.jsx("div",{className:"shrink-0 w-8 h-8 bg-black border border-cyan-500/50 rounded-lg flex items-center justify-center overflow-hidden",children:p?q.jsx(hy,{className:"w-5 h-5 text-yellow-400"}):q.jsx("img",{src:"./icons/icon-192.png",alt:"Hadoop",className:"w-6 h-6 object-contain",onError:()=>d(!0)})}),q.jsx("div",{className:"flex-1 min-w-0",children:q.jsx("p",{className:"text-xs font-black text-cyan-400 tracking-wide truncate",children:"Install Hadoop App"})}),c==="done"?q.jsxs("div",{className:"flex items-center gap-1 text-green-400 text-xs font-bold shrink-0",children:[q.jsx(fy,{className:"w-4 h-4 text-green-400"}),"Installed"]}):q.jsxs("button",{type:"button",onClick:y,disabled:c==="installing",className:"shrink-0 flex items-center gap-1.5 bg-black hover:bg-cyan-950 border border-cyan-400 text-cyan-400 hover:text-cyan-300 disabled:opacity-60 text-xs font-black px-3.5 py-2 rounded-lg transition-colors min-h-[36px] touch-manipulation cursor-pointer",children:[q.jsx(py,{className:"w-3.5 h-3.5 text-cyan-400"}),c==="installing"?"Installing…":"Install"]}),q.jsx("button",{type:"button",onClick:h,className:"shrink-0 text-red-500 hover:text-red-400 transition-colors ml-0.5 p-1 touch-manipulation cursor-pointer","aria-label":"Dismiss",children:q.jsx(gy,{className:"w-4 h-4"})}),q.jsx("style",{children:`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})};class vy extends pe.Component{constructor(){super(...arguments);O(this,"state",{hasError:!1})}static getDerivedStateFromError(u){return{hasError:!0,error:u}}componentDidCatch(u,i){console.error("[App] Error boundary caught exception:",u,i)}render(){var u;return this.state.hasError?q.jsxs("div",{className:"w-screen h-screen bg-black text-white p-6 font-mono flex flex-col justify-center items-center text-center",children:[q.jsx("h1",{className:"text-yellow-400 font-bold text-xl mb-3",children:"Hadoop Simulation Engine Active"}),q.jsx("p",{className:"text-red-400 font-mono text-sm max-w-md mb-4",children:((u=this.state.error)==null?void 0:u.message)||"An unexpected error occurred."}),q.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-black font-bold rounded text-sm cursor-pointer",children:"Restart Terminal"})]}):this.props.children}}const Sy=()=>{const[E]=pe.useState(()=>new iy(3,2));return pe.useEffect(()=>{try{E.initFromDB().catch(()=>{})}catch{}},[E]),q.jsx(vy,{children:q.jsxs("div",{className:"w-screen h-screen bg-black text-white overflow-hidden font-mono",children:[q.jsx(qh,{backend:E}),q.jsx(_y,{})]})})};window.addEventListener("beforeinstallprompt",E=>{E.preventDefault(),window.deferredPWAInstallPrompt=E,window.dispatchEvent(new CustomEvent("pwa-prompt-available"))});Mh.createRoot(document.getElementById("root")).render(q.jsx(Dh.StrictMode,{children:q.jsx(Sy,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js",{scope:"./"}).then(E=>{setInterval(()=>{E.update().catch(()=>{})},12e4)}).catch(E=>{console.warn("[PWA] ServiceWorker registration error:",E)})});
