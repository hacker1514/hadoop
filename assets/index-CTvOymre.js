var vh=Object.defineProperty;var Sh=(E,r,u)=>r in E?vh(E,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):E[r]=u;var O=(E,r,u)=>Sh(E,typeof r!="symbol"?r+"":r,u);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function u(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function i(c){if(c.ep)return;c.ep=!0;const f=u(c);fetch(c.href,f)}})();function Id(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var xo={exports:{}},Ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function bh(){if(zd)return Ul;zd=1;var E=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(i,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var p in c)p!=="key"&&(f[p]=c[p])}else f=c;return c=f.ref,{$$typeof:E,type:i,key:d,ref:c!==void 0?c:null,props:f}}return Ul.Fragment=r,Ul.jsx=u,Ul.jsxs=u,Ul}var Ud;function Eh(){return Ud||(Ud=1,xo.exports=bh()),xo.exports}var q=Eh(),ko={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function Nh(){if(qd)return se;qd=1;var E=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),z=Symbol.iterator;function Y(v){return v===null||typeof v!="object"?null:(v=z&&v[z]||v["@@iterator"],typeof v=="function"?v:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ae=Object.assign,H={};function X(v,M,j){this.props=v,this.context=M,this.refs=H,this.updater=j||U}X.prototype.isReactComponent={},X.prototype.setState=function(v,M){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,M,"setState")},X.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function W(){}W.prototype=X.prototype;function te(v,M,j){this.props=v,this.context=M,this.refs=H,this.updater=j||U}var I=te.prototype=new W;I.constructor=te,ae(I,X.prototype),I.isPureReactComponent=!0;var ge=Array.isArray;function xe(){}var ie={H:null,A:null,T:null,S:null},Ie=Object.prototype.hasOwnProperty;function Je(v,M,j){var G=j.ref;return{$$typeof:E,type:v,key:M,ref:G!==void 0?G:null,props:j}}function Vt(v,M){return Je(v.type,M,v.props)}function Ge(v){return typeof v=="object"&&v!==null&&v.$$typeof===E}function Pe(v){var M={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(j){return M[j]})}var qt=/\/+/g;function Ze(v,M){return typeof v=="object"&&v!==null&&v.key!=null?Pe(""+v.key):M.toString(36)}function rt(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(xe,xe):(v.status="pending",v.then(function(M){v.status==="pending"&&(v.status="fulfilled",v.value=M)},function(M){v.status==="pending"&&(v.status="rejected",v.reason=M)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function x(v,M,j,G,ne){var ue=typeof v;(ue==="undefined"||ue==="boolean")&&(v=null);var _e=!1;if(v===null)_e=!0;else switch(ue){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(v.$$typeof){case E:case r:_e=!0;break;case b:return _e=v._init,x(_e(v._payload),M,j,G,ne)}}if(_e)return ne=ne(v),_e=G===""?"."+Ze(v,0):G,ge(ne)?(j="",_e!=null&&(j=_e.replace(qt,"$&/")+"/"),x(ne,M,j,"",function(J){return J})):ne!=null&&(Ge(ne)&&(ne=Vt(ne,j+(ne.key==null||v&&v.key===ne.key?"":(""+ne.key).replace(qt,"$&/")+"/")+_e)),M.push(ne)),1;_e=0;var We=G===""?".":G+":";if(ge(v))for(var L=0;L<v.length;L++)G=v[L],ue=We+Ze(G,L),_e+=x(G,M,j,ue,ne);else if(L=Y(v),typeof L=="function")for(v=L.call(v),L=0;!(G=v.next()).done;)G=G.value,ue=We+Ze(G,L++),_e+=x(G,M,j,ue,ne);else if(ue==="object"){if(typeof v.then=="function")return x(rt(v),M,j,G,ne);throw M=String(v),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return _e}function B(v,M,j){if(v==null)return v;var G=[],ne=0;return x(v,G,"","",function(ue){return M.call(j,ue,ne++)}),G}function Z(v){if(v._status===-1){var M=v._result;M=M(),M.then(function(j){(v._status===0||v._status===-1)&&(v._status=1,v._result=j)},function(j){(v._status===0||v._status===-1)&&(v._status=2,v._result=j)}),v._status===-1&&(v._status=0,v._result=M)}if(v._status===1)return v._result.default;throw v._result}var be=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},V={map:B,forEach:function(v,M,j){B(v,function(){M.apply(this,arguments)},j)},count:function(v){var M=0;return B(v,function(){M++}),M},toArray:function(v){return B(v,function(M){return M})||[]},only:function(v){if(!Ge(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return se.Activity=w,se.Children=V,se.Component=X,se.Fragment=u,se.Profiler=c,se.PureComponent=te,se.StrictMode=i,se.Suspense=y,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,se.__COMPILER_RUNTIME={__proto__:null,c:function(v){return ie.H.useMemoCache(v)}},se.cache=function(v){return function(){return v.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(v,M,j){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var G=ae({},v.props),ne=v.key;if(M!=null)for(ue in M.key!==void 0&&(ne=""+M.key),M)!Ie.call(M,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&M.ref===void 0||(G[ue]=M[ue]);var ue=arguments.length-2;if(ue===1)G.children=j;else if(1<ue){for(var _e=Array(ue),We=0;We<ue;We++)_e[We]=arguments[We+2];G.children=_e}return Je(v.type,ne,G)},se.createContext=function(v){return v={$$typeof:d,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:f,_context:v},v},se.createElement=function(v,M,j){var G,ne={},ue=null;if(M!=null)for(G in M.key!==void 0&&(ue=""+M.key),M)Ie.call(M,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(ne[G]=M[G]);var _e=arguments.length-2;if(_e===1)ne.children=j;else if(1<_e){for(var We=Array(_e),L=0;L<_e;L++)We[L]=arguments[L+2];ne.children=We}if(v&&v.defaultProps)for(G in _e=v.defaultProps,_e)ne[G]===void 0&&(ne[G]=_e[G]);return Je(v,ue,ne)},se.createRef=function(){return{current:null}},se.forwardRef=function(v){return{$$typeof:p,render:v}},se.isValidElement=Ge,se.lazy=function(v){return{$$typeof:b,_payload:{_status:-1,_result:v},_init:Z}},se.memo=function(v,M){return{$$typeof:h,type:v,compare:M===void 0?null:M}},se.startTransition=function(v){var M=ie.T,j={};ie.T=j;try{var G=v(),ne=ie.S;ne!==null&&ne(j,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(xe,be)}catch(ue){be(ue)}finally{M!==null&&j.types!==null&&(M.types=j.types),ie.T=M}},se.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},se.use=function(v){return ie.H.use(v)},se.useActionState=function(v,M,j){return ie.H.useActionState(v,M,j)},se.useCallback=function(v,M){return ie.H.useCallback(v,M)},se.useContext=function(v){return ie.H.useContext(v)},se.useDebugValue=function(){},se.useDeferredValue=function(v,M){return ie.H.useDeferredValue(v,M)},se.useEffect=function(v,M){return ie.H.useEffect(v,M)},se.useEffectEvent=function(v){return ie.H.useEffectEvent(v)},se.useId=function(){return ie.H.useId()},se.useImperativeHandle=function(v,M,j){return ie.H.useImperativeHandle(v,M,j)},se.useInsertionEffect=function(v,M){return ie.H.useInsertionEffect(v,M)},se.useLayoutEffect=function(v,M){return ie.H.useLayoutEffect(v,M)},se.useMemo=function(v,M){return ie.H.useMemo(v,M)},se.useOptimistic=function(v,M){return ie.H.useOptimistic(v,M)},se.useReducer=function(v,M,j){return ie.H.useReducer(v,M,j)},se.useRef=function(v){return ie.H.useRef(v)},se.useState=function(v){return ie.H.useState(v)},se.useSyncExternalStore=function(v,M,j){return ie.H.useSyncExternalStore(v,M,j)},se.useTransition=function(){return ie.H.useTransition()},se.version="19.2.8",se}var jd;function Uo(){return jd||(jd=1,ko.exports=Nh()),ko.exports}var he=Uo();const Dh=Id(he);var Ro={exports:{}},ql={},Mo={exports:{}},Oo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function Ch(){return Bd||(Bd=1,(function(E){function r(x,B){var Z=x.length;x.push(B);e:for(;0<Z;){var be=Z-1>>>1,V=x[be];if(0<c(V,B))x[be]=B,x[Z]=V,Z=be;else break e}}function u(x){return x.length===0?null:x[0]}function i(x){if(x.length===0)return null;var B=x[0],Z=x.pop();if(Z!==B){x[0]=Z;e:for(var be=0,V=x.length,v=V>>>1;be<v;){var M=2*(be+1)-1,j=x[M],G=M+1,ne=x[G];if(0>c(j,Z))G<V&&0>c(ne,j)?(x[be]=ne,x[G]=Z,be=G):(x[be]=j,x[M]=Z,be=M);else if(G<V&&0>c(ne,Z))x[be]=ne,x[G]=Z,be=G;else break e}}return B}function c(x,B){var Z=x.sortIndex-B.sortIndex;return Z!==0?Z:x.id-B.id}if(E.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;E.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();E.unstable_now=function(){return d.now()-p}}var y=[],h=[],b=1,w=null,z=3,Y=!1,U=!1,ae=!1,H=!1,X=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function I(x){for(var B=u(h);B!==null;){if(B.callback===null)i(h);else if(B.startTime<=x)i(h),B.sortIndex=B.expirationTime,r(y,B);else break;B=u(h)}}function ge(x){if(ae=!1,I(x),!U)if(u(y)!==null)U=!0,xe||(xe=!0,Pe());else{var B=u(h);B!==null&&rt(ge,B.startTime-x)}}var xe=!1,ie=-1,Ie=5,Je=-1;function Vt(){return H?!0:!(E.unstable_now()-Je<Ie)}function Ge(){if(H=!1,xe){var x=E.unstable_now();Je=x;var B=!0;try{e:{U=!1,ae&&(ae=!1,W(ie),ie=-1),Y=!0;var Z=z;try{t:{for(I(x),w=u(y);w!==null&&!(w.expirationTime>x&&Vt());){var be=w.callback;if(typeof be=="function"){w.callback=null,z=w.priorityLevel;var V=be(w.expirationTime<=x);if(x=E.unstable_now(),typeof V=="function"){w.callback=V,I(x),B=!0;break t}w===u(y)&&i(y),I(x)}else i(y);w=u(y)}if(w!==null)B=!0;else{var v=u(h);v!==null&&rt(ge,v.startTime-x),B=!1}}break e}finally{w=null,z=Z,Y=!1}B=void 0}}finally{B?Pe():xe=!1}}}var Pe;if(typeof te=="function")Pe=function(){te(Ge)};else if(typeof MessageChannel<"u"){var qt=new MessageChannel,Ze=qt.port2;qt.port1.onmessage=Ge,Pe=function(){Ze.postMessage(null)}}else Pe=function(){X(Ge,0)};function rt(x,B){ie=X(function(){x(E.unstable_now())},B)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(x){x.callback=null},E.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ie=0<x?Math.floor(1e3/x):5},E.unstable_getCurrentPriorityLevel=function(){return z},E.unstable_next=function(x){switch(z){case 1:case 2:case 3:var B=3;break;default:B=z}var Z=z;z=B;try{return x()}finally{z=Z}},E.unstable_requestPaint=function(){H=!0},E.unstable_runWithPriority=function(x,B){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var Z=z;z=x;try{return B()}finally{z=Z}},E.unstable_scheduleCallback=function(x,B,Z){var be=E.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?be+Z:be):Z=be,x){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=Z+V,x={id:b++,callback:B,priorityLevel:x,startTime:Z,expirationTime:V,sortIndex:-1},Z>be?(x.sortIndex=Z,r(h,x),u(y)===null&&x===u(h)&&(ae?(W(ie),ie=-1):ae=!0,rt(ge,Z-be))):(x.sortIndex=V,r(y,x),U||Y||(U=!0,xe||(xe=!0,Pe()))),x},E.unstable_shouldYield=Vt,E.unstable_wrapCallback=function(x){var B=z;return function(){var Z=z;z=B;try{return x.apply(this,arguments)}finally{z=Z}}}})(Oo)),Oo}var Fd;function wh(){return Fd||(Fd=1,Mo.exports=Ch()),Mo.exports}var Ho={exports:{}},it={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function Th(){if(Yd)return it;Yd=1;var E=Uo();function r(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)h+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var i={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(y,h,b){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:w==null?null:""+w,children:y,containerInfo:h,implementation:b}}var d=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,it.createPortal=function(y,h){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return f(y,h,null,b)},it.flushSync=function(y){var h=d.T,b=i.p;try{if(d.T=null,i.p=2,y)return y()}finally{d.T=h,i.p=b,i.d.f()}},it.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(y,h))},it.prefetchDNS=function(y){typeof y=="string"&&i.d.D(y)},it.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var b=h.as,w=p(b,h.crossOrigin),z=typeof h.integrity=="string"?h.integrity:void 0,Y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;b==="style"?i.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:w,integrity:z,fetchPriority:Y}):b==="script"&&i.d.X(y,{crossOrigin:w,integrity:z,fetchPriority:Y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},it.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var b=p(h.as,h.crossOrigin);i.d.M(y,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(y)},it.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var b=h.as,w=p(b,h.crossOrigin);i.d.L(y,b,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},it.preloadModule=function(y,h){if(typeof y=="string")if(h){var b=p(h.as,h.crossOrigin);i.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(y)},it.requestFormReset=function(y){i.d.r(y)},it.unstable_batchedUpdates=function(y,h){return y(h)},it.useFormState=function(y,h,b){return d.H.useFormState(y,h,b)},it.useFormStatus=function(){return d.H.useHostTransitionStatus()},it.version="19.2.8",it}var $d;function Ah(){if($d)return Ho.exports;$d=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(r){console.error(r)}}return E(),Ho.exports=Th(),Ho.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function xh(){if(Gd)return ql;Gd=1;var E=wh(),r=Uo(),u=Ah();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(i(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(i(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var s=l.alternate;if(s===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===a)return y(l),e;if(s===n)return y(l),t;s=s.sibling}throw Error(i(188))}if(a.return!==n.return)a=l,n=s;else{for(var o=!1,m=l.child;m;){if(m===a){o=!0,a=l,n=s;break}if(m===n){o=!0,n=l,a=s;break}m=m.sibling}if(!o){for(m=s.child;m;){if(m===a){o=!0,a=s,n=l;break}if(m===n){o=!0,n=s,a=l;break}m=m.sibling}if(!o)throw Error(i(189))}}if(a.alternate!==n)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,z=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),te=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),Je=Symbol.for("react.activity"),Vt=Symbol.for("react.memo_cache_sentinel"),Ge=Symbol.iterator;function Pe(e){return e===null||typeof e!="object"?null:(e=Ge&&e[Ge]||e["@@iterator"],typeof e=="function"?e:null)}var qt=Symbol.for("react.client.reference");function Ze(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ae:return"Fragment";case X:return"Profiler";case H:return"StrictMode";case ge:return"Suspense";case xe:return"SuspenseList";case Je:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case te:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ie:return t=e.displayName||null,t!==null?t:Ze(e.type)||"Memo";case Ie:t=e._payload,e=e._init;try{return Ze(e(t))}catch{}}return null}var rt=Array.isArray,x=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},be=[],V=-1;function v(e){return{current:e}}function M(e){0>V||(e.current=be[V],be[V]=null,V--)}function j(e,t){V++,be[V]=e.current,e.current=t}var G=v(null),ne=v(null),ue=v(null),_e=v(null);function We(e,t){switch(j(ue,t),j(ne,e),j(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sd(t),e=id(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(G),j(G,e)}function L(){M(G),M(ne),M(ue)}function J(e){e.memoizedState!==null&&j(_e,e);var t=G.current,a=id(t,e.type);t!==a&&(j(ne,e),j(G,a))}function ee(e){ne.current===e&&(M(G),M(ne)),_e.current===e&&(M(_e),Ol._currentValue=Z)}var Re,Qe;function gt(e){if(Re===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Re=t&&t[1]||"",Qe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Re+e+Qe}var Tt=!1;function F(e,t){if(!e||Tt)return"";Tt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(T){var C=T}Reflect.construct(e,[],R)}else{try{R.call()}catch(T){C=T}e.call(R.prototype)}}else{try{throw Error()}catch(T){C=T}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(T){if(T&&C&&typeof T.stack=="string")return[T.stack,C.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),o=s[0],m=s[1];if(o&&m){var g=o.split(`
`),D=m.split(`
`);for(l=n=0;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(n===g.length||l===D.length)for(n=g.length-1,l=D.length-1;1<=n&&0<=l&&g[n]!==D[l];)l--;for(;1<=n&&0<=l;n--,l--)if(g[n]!==D[l]){if(n!==1||l!==1)do if(n--,l--,0>l||g[n]!==D[l]){var A=`
`+g[n].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=n&&0<=l);break}}}finally{Tt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?gt(a):""}function ce(e,t){switch(e.tag){case 26:case 27:case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return e.child!==t&&t!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return F(e.type,!1);case 11:return F(e.type.render,!1);case 1:return F(e.type,!0);case 31:return gt("Activity");default:return""}}function Ce(e){try{var t="",a=null;do t+=ce(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var le=Object.prototype.hasOwnProperty,Le=E.unstable_scheduleCallback,st=E.unstable_cancelCallback,Zt=E.unstable_shouldYield,Gn=E.unstable_requestPaint,ut=E.unstable_now,hi=E.unstable_getCurrentPriorityLevel,Fl=E.unstable_ImmediatePriority,Yl=E.unstable_UserBlockingPriority,Kt=E.unstable_NormalPriority,ep=E.unstable_LowPriority,qo=E.unstable_IdlePriority,tp=E.log,ap=E.unstable_setDisableYieldValue,Qn=null,_t=null;function pa(e){if(typeof tp=="function"&&ap(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(Qn,e)}catch{}}var vt=Math.clz32?Math.clz32:sp,np=Math.log,lp=Math.LN2;function sp(e){return e>>>=0,e===0?32:31-(np(e)/lp|0)|0}var $l=256,Gl=262144,Ql=4194304;function qa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,s=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~s,n!==0?l=qa(n):(o&=m,o!==0?l=qa(o):a||(a=m&~e,a!==0&&(l=qa(a))))):(m=n&~s,m!==0?l=qa(m):o!==0?l=qa(o):a||(a=n&~e,a!==0&&(l=qa(a)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:l}function Vn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ip(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jo(){var e=Ql;return Ql<<=1,(Ql&62914560)===0&&(Ql=4194304),e}function yi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Zn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rp(e,t,a,n,l,s){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,g=e.expirationTimes,D=e.hiddenUpdates;for(a=o&~a;0<a;){var A=31-vt(a),R=1<<A;m[A]=0,g[A]=-1;var C=D[A];if(C!==null)for(D[A]=null,A=0;A<C.length;A++){var T=C[A];T!==null&&(T.lane&=-536870913)}a&=~R}n!==0&&Bo(e,n,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(o&~t))}function Bo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-vt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Fo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-vt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function Yo(e,t){var a=t&-t;return a=(a&42)!==0?1:gi(a),(a&(e.suspendedLanes|t))!==0?0:a}function gi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _i(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $o(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:xd(e.type))}function Go(e,t){var a=B.p;try{return B.p=e,t()}finally{B.p=a}}var ma=Math.random().toString(36).slice(2),et="__reactFiber$"+ma,ct="__reactProps$"+ma,ln="__reactContainer$"+ma,vi="__reactEvents$"+ma,op="__reactListeners$"+ma,up="__reactHandles$"+ma,Qo="__reactResources$"+ma,Kn="__reactMarker$"+ma;function Si(e){delete e[et],delete e[ct],delete e[vi],delete e[op],delete e[up]}function sn(e){var t=e[et];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ln]||a[et]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=pd(e);e!==null;){if(a=e[et])return a;e=pd(e)}return t}e=a,a=e.parentNode}return null}function rn(e){if(e=e[et]||e[ln]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function on(e){var t=e[Qo];return t||(t=e[Qo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[Kn]=!0}var Vo=new Set,Zo={};function ja(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Zo[e]=t,e=0;e<t.length;e++)Vo.add(t[e])}var cp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ko={},Xo={};function fp(e){return le.call(Xo,e)?!0:le.call(Ko,e)?!1:cp.test(e)?Xo[e]=!0:(Ko[e]=!0,!1)}function Zl(e,t,a){if(fp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Kl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Xt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function At(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Io(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dp(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bi(e){if(!e._valueTracker){var t=Io(e)?"checked":"value";e._valueTracker=dp(e,t,""+e[t])}}function Jo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Io(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pp=/[\n"\\]/g;function xt(e){return e.replace(pp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ei(e,t,a,n,l,s,o,m){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+At(t)):e.value!==""+At(t)&&(e.value=""+At(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Ni(e,o,At(t)):a!=null?Ni(e,o,At(a)):n!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+At(m):e.removeAttribute("name")}function Po(e,t,a,n,l,s,o,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){bi(e);return}a=a!=null?""+At(a):"",t=t!=null?""+At(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),bi(e)}function Ni(e,t,a){t==="number"&&Xl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cn(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+At(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Wo(e,t,a){if(t!=null&&(t=""+At(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+At(a):""}function eu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(i(92));if(rt(n)){if(1<n.length)throw Error(i(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=At(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),bi(e)}function fn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var mp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||mp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function au(e,t,a){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&tu(e,l,n)}else for(var s in t)t.hasOwnProperty(s)&&tu(e,s,t[s])}function Di(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(e){return yp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function It(){}var Ci=null;function wi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,pn=null;function nu(e){var t=rn(e);if(t&&(e=t.stateNode)){var a=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ei(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[ct]||null;if(!l)throw Error(i(90));Ei(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Jo(n)}break e;case"textarea":Wo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&cn(e,!!a.multiple,t,!1)}}}var Ti=!1;function lu(e,t,a){if(Ti)return e(t,a);Ti=!0;try{var n=e(t);return n}finally{if(Ti=!1,(dn!==null||pn!==null)&&(Us(),dn&&(t=dn,e=pn,pn=dn=null,nu(t),e)))for(t=0;t<e.length;t++)nu(e[t])}}function In(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ct]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(i(231,t,typeof a));return a}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ai=!1;if(Jt)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Ai=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Ai=!1}var ha=null,xi=null,Jl=null;function su(){if(Jl)return Jl;var e,t=xi,a=t.length,n,l="value"in ha?ha.value:ha.textContent,s=l.length;for(e=0;e<a&&t[e]===l[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===l[s-n];n++);return Jl=l.slice(e,1<n?1-n:void 0)}function Pl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wl(){return!0}function iu(){return!1}function ft(e){function t(a,n,l,s,o){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wl:iu,this.isPropagationStopped=iu,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},es=ft(Ba),Pn=w({},Ba,{view:0,detail:0}),gp=ft(Pn),ki,Ri,Wn,ts=w({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(ki=e.screenX-Wn.screenX,Ri=e.screenY-Wn.screenY):Ri=ki=0,Wn=e),ki)},movementY:function(e){return"movementY"in e?e.movementY:Ri}}),ru=ft(ts),_p=w({},ts,{dataTransfer:0}),vp=ft(_p),Sp=w({},Pn,{relatedTarget:0}),Mi=ft(Sp),bp=w({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Ep=ft(bp),Np=w({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dp=ft(Np),Cp=w({},Ba,{data:0}),ou=ft(Cp),wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ap[e])?!!t[e]:!1}function Oi(){return xp}var kp=w({},Pn,{key:function(e){if(e.key){var t=wp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oi,charCode:function(e){return e.type==="keypress"?Pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=ft(kp),Mp=w({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uu=ft(Mp),Op=w({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oi}),Hp=ft(Op),Lp=w({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),zp=ft(Lp),Up=w({},ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=ft(Up),jp=w({},Ba,{newState:0,oldState:0}),Bp=ft(jp),Fp=[9,13,27,32],Hi=Jt&&"CompositionEvent"in window,el=null;Jt&&"documentMode"in document&&(el=document.documentMode);var Yp=Jt&&"TextEvent"in window&&!el,cu=Jt&&(!Hi||el&&8<el&&11>=el),fu=" ",du=!1;function pu(e,t){switch(e){case"keyup":return Fp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function $p(e,t){switch(e){case"compositionend":return mu(t);case"keypress":return t.which!==32?null:(du=!0,fu);case"textInput":return e=t.data,e===fu&&du?null:e;default:return null}}function Gp(e,t){if(mn)return e==="compositionend"||!Hi&&pu(e,t)?(e=su(),Jl=xi=ha=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cu&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function yu(e,t,a,n){dn?pn?pn.push(n):pn=[n]:dn=n,t=Gs(t,"onChange"),0<t.length&&(a=new es("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var tl=null,al=null;function Vp(e){Wf(e,0)}function as(e){var t=Xn(e);if(Jo(t))return e}function gu(e,t){if(e==="change")return t}var _u=!1;if(Jt){var Li;if(Jt){var zi="oninput"in document;if(!zi){var vu=document.createElement("div");vu.setAttribute("oninput","return;"),zi=typeof vu.oninput=="function"}Li=zi}else Li=!1;_u=Li&&(!document.documentMode||9<document.documentMode)}function Su(){tl&&(tl.detachEvent("onpropertychange",bu),al=tl=null)}function bu(e){if(e.propertyName==="value"&&as(al)){var t=[];yu(t,al,e,wi(e)),lu(Vp,t)}}function Zp(e,t,a){e==="focusin"?(Su(),tl=t,al=a,tl.attachEvent("onpropertychange",bu)):e==="focusout"&&Su()}function Kp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return as(al)}function Xp(e,t){if(e==="click")return as(t)}function Ip(e,t){if(e==="input"||e==="change")return as(t)}function Jp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Jp;function nl(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!le.call(t,l)||!St(e[l],t[l]))return!1}return!0}function Eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nu(e,t){var a=Eu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Eu(a)}}function Du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Xl(e.document)}return t}function Ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Pp=Jt&&"documentMode"in document&&11>=document.documentMode,hn=null,qi=null,ll=null,ji=!1;function wu(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ji||hn==null||hn!==Xl(n)||(n=hn,"selectionStart"in n&&Ui(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ll&&nl(ll,n)||(ll=n,n=Gs(qi,"onSelect"),0<n.length&&(t=new es("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=hn)))}function Fa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var yn={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionrun:Fa("Transition","TransitionRun"),transitionstart:Fa("Transition","TransitionStart"),transitioncancel:Fa("Transition","TransitionCancel"),transitionend:Fa("Transition","TransitionEnd")},Bi={},Tu={};Jt&&(Tu=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function Ya(e){if(Bi[e])return Bi[e];if(!yn[e])return e;var t=yn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Tu)return Bi[e]=t[a];return e}var Au=Ya("animationend"),xu=Ya("animationiteration"),ku=Ya("animationstart"),Wp=Ya("transitionrun"),em=Ya("transitionstart"),tm=Ya("transitioncancel"),Ru=Ya("transitionend"),Mu=new Map,Fi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fi.push("scrollEnd");function jt(e,t){Mu.set(e,t),ja(t,[e])}var ns=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kt=[],gn=0,Yi=0;function ls(){for(var e=gn,t=Yi=gn=0;t<e;){var a=kt[t];kt[t++]=null;var n=kt[t];kt[t++]=null;var l=kt[t];kt[t++]=null;var s=kt[t];if(kt[t++]=null,n!==null&&l!==null){var o=n.pending;o===null?l.next=l:(l.next=o.next,o.next=l),n.pending=l}s!==0&&Ou(a,l,s)}}function ss(e,t,a,n){kt[gn++]=e,kt[gn++]=t,kt[gn++]=a,kt[gn++]=n,Yi|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function $i(e,t,a,n){return ss(e,t,a,n),is(e)}function $a(e,t){return ss(e,null,null,t),is(e)}function Ou(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-vt(a),e=s.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),s):null}function is(e){if(50<wl)throw wl=0,Pr=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _n={};function am(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,a,n){return new am(e,t,a,n)}function Gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pt(e,t){var a=e.alternate;return a===null?(a=bt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rs(e,t,a,n,l,s){var o=0;if(n=e,typeof e=="function")Gi(e)&&(o=1);else if(typeof e=="string")o=rh(e,a,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Je:return e=bt(31,a,t,l),e.elementType=Je,e.lanes=s,e;case ae:return Ga(a.children,l,s,t);case H:o=8,l|=24;break;case X:return e=bt(12,a,t,l|2),e.elementType=X,e.lanes=s,e;case ge:return e=bt(13,a,t,l),e.elementType=ge,e.lanes=s,e;case xe:return e=bt(19,a,t,l),e.elementType=xe,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case te:o=10;break e;case W:o=9;break e;case I:o=11;break e;case ie:o=14;break e;case Ie:o=16,n=null;break e}o=29,a=Error(i(130,e===null?"null":typeof e,"")),n=null}return t=bt(o,a,t,l),t.elementType=e,t.type=n,t.lanes=s,t}function Ga(e,t,a,n){return e=bt(7,e,n,t),e.lanes=a,e}function Qi(e,t,a){return e=bt(6,e,null,t),e.lanes=a,e}function Lu(e){var t=bt(18,null,null,0);return t.stateNode=e,t}function Vi(e,t,a){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zu=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var a=zu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ce(t)},zu.set(e,t),t)}return{value:e,source:t,stack:Ce(t)}}var vn=[],Sn=0,os=null,sl=0,Mt=[],Ot=0,ya=null,Yt=1,$t="";function Wt(e,t){vn[Sn++]=sl,vn[Sn++]=os,os=e,sl=t}function Uu(e,t,a){Mt[Ot++]=Yt,Mt[Ot++]=$t,Mt[Ot++]=ya,ya=e;var n=Yt;e=$t;var l=32-vt(n)-1;n&=~(1<<l),a+=1;var s=32-vt(t)+l;if(30<s){var o=l-l%5;s=(n&(1<<o)-1).toString(32),n>>=o,l-=o,Yt=1<<32-vt(t)+l|a<<l|n,$t=s+e}else Yt=1<<s|a<<l|n,$t=e}function Zi(e){e.return!==null&&(Wt(e,1),Uu(e,1,0))}function Ki(e){for(;e===os;)os=vn[--Sn],vn[Sn]=null,sl=vn[--Sn],vn[Sn]=null;for(;e===ya;)ya=Mt[--Ot],Mt[Ot]=null,$t=Mt[--Ot],Mt[Ot]=null,Yt=Mt[--Ot],Mt[Ot]=null}function qu(e,t){Mt[Ot++]=Yt,Mt[Ot++]=$t,Mt[Ot++]=ya,Yt=t.id,$t=t.overflow,ya=e}var tt=null,Me=null,ye=!1,ga=null,Ht=!1,Xi=Error(i(519));function _a(e){var t=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw il(Rt(t,e)),Xi}function ju(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[et]=e,t[ct]=n,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<Al.length;a++)de(Al[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Po(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),eu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||nd(t.textContent,a)?(n.popover!=null&&(de("beforetoggle",t),de("toggle",t)),n.onScroll!=null&&de("scroll",t),n.onScrollEnd!=null&&de("scrollend",t),n.onClick!=null&&(t.onclick=It),t=!0):t=!1,t||_a(e,!0)}function Bu(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:tt=tt.return}}function bn(e){if(e!==tt)return!1;if(!ye)return Bu(e),ye=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||mo(e.type,e.memoizedProps)),a=!a),a&&Me&&_a(e),Bu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));Me=dd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));Me=dd(e)}else t===27?(t=Me,Ma(e.type)?(e=vo,vo=null,Me=e):Me=t):Me=tt?zt(e.stateNode.nextSibling):null;return!0}function Qa(){Me=tt=null,ye=!1}function Ii(){var e=ga;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),ga=null),e}function il(e){ga===null?ga=[e]:ga.push(e)}var Ji=v(null),Va=null,ea=null;function va(e,t,a){j(Ji,t._currentValue),t._currentValue=a}function ta(e){e._currentValue=Ji.current,M(Ji)}function Pi(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Wi(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var o=l.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=l;for(var g=0;g<t.length;g++)if(m.context===t[g]){s.lanes|=a,m=s.alternate,m!==null&&(m.lanes|=a),Pi(s.return,a,e),n||(o=null);break e}s=m.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(i(341));o.lanes|=a,s=o.alternate,s!==null&&(s.lanes|=a),Pi(o,a,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function En(e,t,a,n){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(i(387));if(o=o.memoizedProps,o!==null){var m=l.type;St(l.pendingProps.value,o.value)||(e!==null?e.push(m):e=[m])}}else if(l===_e.current){if(o=l.alternate,o===null)throw Error(i(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ol):e=[Ol])}l=l.return}e!==null&&Wi(t,e,a,n),t.flags|=262144}function us(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){Va=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return Fu(Va,e)}function cs(e,t){return Va===null&&Za(e),Fu(e,t)}function Fu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return a}var nm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},lm=E.unstable_scheduleCallback,sm=E.unstable_NormalPriority,Be={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function er(){return{controller:new nm,data:new Map,refCount:0}}function rl(e){e.refCount--,e.refCount===0&&lm(sm,function(){e.controller.abort()})}var ol=null,tr=0,Nn=0,Dn=null;function im(e,t){if(ol===null){var a=ol=[];tr=0,Nn=lo(),Dn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return tr++,t.then(Yu,Yu),t}function Yu(){if(--tr===0&&ol!==null){Dn!==null&&(Dn.status="fulfilled");var e=ol;ol=null,Nn=0,Dn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function rm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var $u=x.S;x.S=function(e,t){Tf=ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&im(e,t),$u!==null&&$u(e,t)};var Ka=v(null);function ar(){var e=Ka.current;return e!==null?e:ke.pooledCache}function fs(e,t){t===null?j(Ka,Ka.current):j(Ka,t.pool)}function Gu(){var e=ar();return e===null?null:{parent:Be._currentValue,pool:e}}var Cn=Error(i(460)),nr=Error(i(474)),ds=Error(i(542)),ps={then:function(){}};function Qu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(It,It),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ku(e),e;default:if(typeof t.status=="string")t.then(It,It);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ku(e),e}throw Ia=t,Cn}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ia=a,Cn):a}}var Ia=null;function Zu(){if(Ia===null)throw Error(i(459));var e=Ia;return Ia=null,e}function Ku(e){if(e===Cn||e===ds)throw Error(i(483))}var wn=null,ul=0;function ms(e){var t=ul;return ul+=1,wn===null&&(wn=[]),Vu(wn,e,t)}function cl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function hs(e,t){throw t.$$typeof===z?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Xu(e){function t(S,_){if(e){var N=S.deletions;N===null?(S.deletions=[_],S.flags|=16):N.push(_)}}function a(S,_){if(!e)return null;for(;_!==null;)t(S,_),_=_.sibling;return null}function n(S){for(var _=new Map;S!==null;)S.key!==null?_.set(S.key,S):_.set(S.index,S),S=S.sibling;return _}function l(S,_){return S=Pt(S,_),S.index=0,S.sibling=null,S}function s(S,_,N){return S.index=N,e?(N=S.alternate,N!==null?(N=N.index,N<_?(S.flags|=67108866,_):N):(S.flags|=67108866,_)):(S.flags|=1048576,_)}function o(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function m(S,_,N,k){return _===null||_.tag!==6?(_=Qi(N,S.mode,k),_.return=S,_):(_=l(_,N),_.return=S,_)}function g(S,_,N,k){var K=N.type;return K===ae?A(S,_,N.props.children,k,N.key):_!==null&&(_.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ie&&Xa(K)===_.type)?(_=l(_,N.props),cl(_,N),_.return=S,_):(_=rs(N.type,N.key,N.props,null,S.mode,k),cl(_,N),_.return=S,_)}function D(S,_,N,k){return _===null||_.tag!==4||_.stateNode.containerInfo!==N.containerInfo||_.stateNode.implementation!==N.implementation?(_=Vi(N,S.mode,k),_.return=S,_):(_=l(_,N.children||[]),_.return=S,_)}function A(S,_,N,k,K){return _===null||_.tag!==7?(_=Ga(N,S.mode,k,K),_.return=S,_):(_=l(_,N),_.return=S,_)}function R(S,_,N){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Qi(""+_,S.mode,N),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Y:return N=rs(_.type,_.key,_.props,null,S.mode,N),cl(N,_),N.return=S,N;case U:return _=Vi(_,S.mode,N),_.return=S,_;case Ie:return _=Xa(_),R(S,_,N)}if(rt(_)||Pe(_))return _=Ga(_,S.mode,N,null),_.return=S,_;if(typeof _.then=="function")return R(S,ms(_),N);if(_.$$typeof===te)return R(S,cs(S,_),N);hs(S,_)}return null}function C(S,_,N,k){var K=_!==null?_.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return K!==null?null:m(S,_,""+N,k);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Y:return N.key===K?g(S,_,N,k):null;case U:return N.key===K?D(S,_,N,k):null;case Ie:return N=Xa(N),C(S,_,N,k)}if(rt(N)||Pe(N))return K!==null?null:A(S,_,N,k,null);if(typeof N.then=="function")return C(S,_,ms(N),k);if(N.$$typeof===te)return C(S,_,cs(S,N),k);hs(S,N)}return null}function T(S,_,N,k,K){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return S=S.get(N)||null,m(_,S,""+k,K);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Y:return S=S.get(k.key===null?N:k.key)||null,g(_,S,k,K);case U:return S=S.get(k.key===null?N:k.key)||null,D(_,S,k,K);case Ie:return k=Xa(k),T(S,_,N,k,K)}if(rt(k)||Pe(k))return S=S.get(N)||null,A(_,S,k,K,null);if(typeof k.then=="function")return T(S,_,N,ms(k),K);if(k.$$typeof===te)return T(S,_,N,cs(_,k),K);hs(_,k)}return null}function $(S,_,N,k){for(var K=null,ve=null,Q=_,oe=_=0,me=null;Q!==null&&oe<N.length;oe++){Q.index>oe?(me=Q,Q=null):me=Q.sibling;var Se=C(S,Q,N[oe],k);if(Se===null){Q===null&&(Q=me);break}e&&Q&&Se.alternate===null&&t(S,Q),_=s(Se,_,oe),ve===null?K=Se:ve.sibling=Se,ve=Se,Q=me}if(oe===N.length)return a(S,Q),ye&&Wt(S,oe),K;if(Q===null){for(;oe<N.length;oe++)Q=R(S,N[oe],k),Q!==null&&(_=s(Q,_,oe),ve===null?K=Q:ve.sibling=Q,ve=Q);return ye&&Wt(S,oe),K}for(Q=n(Q);oe<N.length;oe++)me=T(Q,S,oe,N[oe],k),me!==null&&(e&&me.alternate!==null&&Q.delete(me.key===null?oe:me.key),_=s(me,_,oe),ve===null?K=me:ve.sibling=me,ve=me);return e&&Q.forEach(function(Ua){return t(S,Ua)}),ye&&Wt(S,oe),K}function P(S,_,N,k){if(N==null)throw Error(i(151));for(var K=null,ve=null,Q=_,oe=_=0,me=null,Se=N.next();Q!==null&&!Se.done;oe++,Se=N.next()){Q.index>oe?(me=Q,Q=null):me=Q.sibling;var Ua=C(S,Q,Se.value,k);if(Ua===null){Q===null&&(Q=me);break}e&&Q&&Ua.alternate===null&&t(S,Q),_=s(Ua,_,oe),ve===null?K=Ua:ve.sibling=Ua,ve=Ua,Q=me}if(Se.done)return a(S,Q),ye&&Wt(S,oe),K;if(Q===null){for(;!Se.done;oe++,Se=N.next())Se=R(S,Se.value,k),Se!==null&&(_=s(Se,_,oe),ve===null?K=Se:ve.sibling=Se,ve=Se);return ye&&Wt(S,oe),K}for(Q=n(Q);!Se.done;oe++,Se=N.next())Se=T(Q,S,oe,Se.value,k),Se!==null&&(e&&Se.alternate!==null&&Q.delete(Se.key===null?oe:Se.key),_=s(Se,_,oe),ve===null?K=Se:ve.sibling=Se,ve=Se);return e&&Q.forEach(function(_h){return t(S,_h)}),ye&&Wt(S,oe),K}function Ae(S,_,N,k){if(typeof N=="object"&&N!==null&&N.type===ae&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case Y:e:{for(var K=N.key;_!==null;){if(_.key===K){if(K=N.type,K===ae){if(_.tag===7){a(S,_.sibling),k=l(_,N.props.children),k.return=S,S=k;break e}}else if(_.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ie&&Xa(K)===_.type){a(S,_.sibling),k=l(_,N.props),cl(k,N),k.return=S,S=k;break e}a(S,_);break}else t(S,_);_=_.sibling}N.type===ae?(k=Ga(N.props.children,S.mode,k,N.key),k.return=S,S=k):(k=rs(N.type,N.key,N.props,null,S.mode,k),cl(k,N),k.return=S,S=k)}return o(S);case U:e:{for(K=N.key;_!==null;){if(_.key===K)if(_.tag===4&&_.stateNode.containerInfo===N.containerInfo&&_.stateNode.implementation===N.implementation){a(S,_.sibling),k=l(_,N.children||[]),k.return=S,S=k;break e}else{a(S,_);break}else t(S,_);_=_.sibling}k=Vi(N,S.mode,k),k.return=S,S=k}return o(S);case Ie:return N=Xa(N),Ae(S,_,N,k)}if(rt(N))return $(S,_,N,k);if(Pe(N)){if(K=Pe(N),typeof K!="function")throw Error(i(150));return N=K.call(N),P(S,_,N,k)}if(typeof N.then=="function")return Ae(S,_,ms(N),k);if(N.$$typeof===te)return Ae(S,_,cs(S,N),k);hs(S,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,_!==null&&_.tag===6?(a(S,_.sibling),k=l(_,N),k.return=S,S=k):(a(S,_),k=Qi(N,S.mode,k),k.return=S,S=k),o(S)):a(S,_)}return function(S,_,N,k){try{ul=0;var K=Ae(S,_,N,k);return wn=null,K}catch(Q){if(Q===Cn||Q===ds)throw Q;var ve=bt(29,Q,null,S.mode);return ve.lanes=k,ve.return=S,ve}finally{}}}var Ja=Xu(!0),Iu=Xu(!1),Sa=!1;function lr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ee&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=is(e),Ou(e,null,a),t}return ss(e,n,t,a),is(e)}function fl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Fo(e,a)}}function ir(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?l=s=o:s=s.next=o,a=a.next}while(a!==null);s===null?l=s=t:s=s.next=t}else l=s=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var rr=!1;function dl(){if(rr){var e=Dn;if(e!==null)throw e}}function pl(e,t,a,n){rr=!1;var l=e.updateQueue;Sa=!1;var s=l.firstBaseUpdate,o=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var g=m,D=g.next;g.next=null,o===null?s=D:o.next=D,o=g;var A=e.alternate;A!==null&&(A=A.updateQueue,m=A.lastBaseUpdate,m!==o&&(m===null?A.firstBaseUpdate=D:m.next=D,A.lastBaseUpdate=g))}if(s!==null){var R=l.baseState;o=0,A=D=g=null,m=s;do{var C=m.lane&-536870913,T=C!==m.lane;if(T?(pe&C)===C:(n&C)===C){C!==0&&C===Nn&&(rr=!0),A!==null&&(A=A.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var $=e,P=m;C=t;var Ae=a;switch(P.tag){case 1:if($=P.payload,typeof $=="function"){R=$.call(Ae,R,C);break e}R=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=P.payload,C=typeof $=="function"?$.call(Ae,R,C):$,C==null)break e;R=w({},R,C);break e;case 2:Sa=!0}}C=m.callback,C!==null&&(e.flags|=64,T&&(e.flags|=8192),T=l.callbacks,T===null?l.callbacks=[C]:T.push(C))}else T={lane:C,tag:m.tag,payload:m.payload,callback:m.callback,next:null},A===null?(D=A=T,g=R):A=A.next=T,o|=C;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;T=m,m=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);A===null&&(g=R),l.baseState=g,l.firstBaseUpdate=D,l.lastBaseUpdate=A,s===null&&(l.shared.lanes=0),Ta|=o,e.lanes=o,e.memoizedState=R}}function Ju(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function Pu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ju(a[e],t)}var Tn=v(null),ys=v(0);function Wu(e,t){e=ca,j(ys,e),j(Tn,t),ca=e|t.baseLanes}function or(){j(ys,ca),j(Tn,Tn.current)}function ur(){ca=ys.current,M(Tn),M(ys)}var Et=v(null),Lt=null;function Na(e){var t=e.alternate;j(qe,qe.current&1),j(Et,e),Lt===null&&(t===null||Tn.current!==null||t.memoizedState!==null)&&(Lt=e)}function cr(e){j(qe,qe.current),j(Et,e),Lt===null&&(Lt=e)}function ec(e){e.tag===22?(j(qe,qe.current),j(Et,e),Lt===null&&(Lt=e)):Da()}function Da(){j(qe,qe.current),j(Et,Et.current)}function Nt(e){M(Et),Lt===e&&(Lt=null),M(qe)}var qe=v(0);function gs(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||go(a)||_o(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var aa=0,re=null,we=null,Fe=null,_s=!1,An=!1,Pa=!1,vs=0,ml=0,xn=null,om=0;function ze(){throw Error(i(321))}function fr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!St(e[a],t[a]))return!1;return!0}function dr(e,t,a,n,l,s){return aa=s,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,x.H=e===null||e.memoizedState===null?Uc:Tr,Pa=!1,s=a(n,l),Pa=!1,An&&(s=ac(t,a,n,l)),tc(e),s}function tc(e){x.H=gl;var t=we!==null&&we.next!==null;if(aa=0,Fe=we=re=null,_s=!1,ml=0,xn=null,t)throw Error(i(300));e===null||Ye||(e=e.dependencies,e!==null&&us(e)&&(Ye=!0))}function ac(e,t,a,n){re=e;var l=0;do{if(An&&(xn=null),ml=0,An=!1,25<=l)throw Error(i(301));if(l+=1,Fe=we=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}x.H=qc,s=t(a,n)}while(An);return s}function um(){var e=x.H,t=e.useState()[0];return t=typeof t.then=="function"?hl(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(re.flags|=1024),t}function pr(){var e=vs!==0;return vs=0,e}function mr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function hr(e){if(_s){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_s=!1}aa=0,Fe=we=re=null,An=!1,ml=vs=0,xn=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?re.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function je(){if(we===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Fe===null?re.memoizedState:Fe.next;if(t!==null)Fe=t,we=e;else{if(e===null)throw re.alternate===null?Error(i(467)):Error(i(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Fe===null?re.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(e){var t=ml;return ml+=1,xn===null&&(xn=[]),e=Vu(xn,e,t),t=re,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,x.H=t===null||t.memoizedState===null?Uc:Tr),e}function bs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hl(e);if(e.$$typeof===te)return at(e)}throw Error(i(438,String(e)))}function yr(e){var t=null,a=re.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=re.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ss(),re.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Vt;return t.index++,a}function na(e,t){return typeof t=="function"?t(e):t}function Es(e){var t=je();return gr(t,we,e)}function gr(e,t,a){var n=e.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=a;var l=e.baseQueue,s=n.pending;if(s!==null){if(l!==null){var o=l.next;l.next=s.next,s.next=o}t.baseQueue=l=s,n.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var m=o=null,g=null,D=t,A=!1;do{var R=D.lane&-536870913;if(R!==D.lane?(pe&R)===R:(aa&R)===R){var C=D.revertLane;if(C===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),R===Nn&&(A=!0);else if((aa&C)===C){D=D.next,C===Nn&&(A=!0);continue}else R={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},g===null?(m=g=R,o=s):g=g.next=R,re.lanes|=C,Ta|=C;R=D.action,Pa&&a(s,R),s=D.hasEagerState?D.eagerState:a(s,R)}else C={lane:R,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},g===null?(m=g=C,o=s):g=g.next=C,re.lanes|=R,Ta|=R;D=D.next}while(D!==null&&D!==t);if(g===null?o=s:g.next=m,!St(s,e.memoizedState)&&(Ye=!0,A&&(a=Dn,a!==null)))throw a;e.memoizedState=s,e.baseState=o,e.baseQueue=g,n.lastRenderedState=s}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function _r(e){var t=je(),a=t.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,s=t.memoizedState;if(l!==null){a.pending=null;var o=l=l.next;do s=e(s,o.action),o=o.next;while(o!==l);St(s,t.memoizedState)||(Ye=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function nc(e,t,a){var n=re,l=je(),s=ye;if(s){if(a===void 0)throw Error(i(407));a=a()}else a=t();var o=!St((we||l).memoizedState,a);if(o&&(l.memoizedState=a,Ye=!0),l=l.queue,br(ic.bind(null,n,l,e),[e]),l.getSnapshot!==t||o||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,kn(9,{destroy:void 0},sc.bind(null,n,l,a,t),null),ke===null)throw Error(i(349));s||(aa&127)!==0||lc(n,t,a)}return a}function lc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=re.updateQueue,t===null?(t=Ss(),re.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function sc(e,t,a,n){t.value=a,t.getSnapshot=n,rc(t)&&oc(e)}function ic(e,t,a){return a(function(){rc(t)&&oc(e)})}function rc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!St(e,a)}catch{return!0}}function oc(e){var t=$a(e,2);t!==null&&yt(t,e,2)}function vr(e){var t=ot();if(typeof e=="function"){var a=e;if(e=a(),Pa){pa(!0);try{a()}finally{pa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t}function uc(e,t,a,n){return e.baseState=a,gr(e,we,typeof n=="function"?n:na)}function cm(e,t,a,n,l){if(Cs(e))throw Error(i(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){s.listeners.push(o)}};x.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,cc(t,s)):(s.next=a.next,t.pending=a.next=s)}}function cc(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var s=x.T,o={};x.T=o;try{var m=a(l,n),g=x.S;g!==null&&g(o,m),fc(e,t,m)}catch(D){Sr(e,t,D)}finally{s!==null&&o.types!==null&&(s.types=o.types),x.T=s}}else try{s=a(l,n),fc(e,t,s)}catch(D){Sr(e,t,D)}}function fc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){dc(e,t,n)},function(n){return Sr(e,t,n)}):dc(e,t,a)}function dc(e,t,a){t.status="fulfilled",t.value=a,pc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,cc(e,a)))}function Sr(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,pc(t),t=t.next;while(t!==n)}e.action=null}function pc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mc(e,t){return t}function hc(e,t){if(ye){var a=ke.formState;if(a!==null){e:{var n=re;if(ye){if(Me){t:{for(var l=Me,s=Ht;l.nodeType!==8;){if(!s){l=null;break t}if(l=zt(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){Me=zt(l.nextSibling),n=l.data==="F!";break e}}_a(n)}n=!1}n&&(t=a[0])}}return a=ot(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mc,lastRenderedState:t},a.queue=n,a=Hc.bind(null,re,n),n.dispatch=a,n=vr(!1),s=wr.bind(null,re,!1,n.queue),n=ot(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=cm.bind(null,re,l,s,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function yc(e){var t=je();return gc(t,we,e)}function gc(e,t,a){if(t=gr(e,t,mc)[0],e=Es(na)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=hl(t)}catch(o){throw o===Cn?ds:o}else n=t;t=je();var l=t.queue,s=l.dispatch;return a!==t.memoizedState&&(re.flags|=2048,kn(9,{destroy:void 0},fm.bind(null,l,a),null)),[n,s,e]}function fm(e,t){e.action=t}function _c(e){var t=je(),a=we;if(a!==null)return gc(t,a,e);je(),t=t.memoizedState,a=je();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function kn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=re.updateQueue,t===null&&(t=Ss(),re.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function vc(){return je().memoizedState}function Ns(e,t,a,n){var l=ot();re.flags|=e,l.memoizedState=kn(1|t,{destroy:void 0},a,n===void 0?null:n)}function Ds(e,t,a,n){var l=je();n=n===void 0?null:n;var s=l.memoizedState.inst;we!==null&&n!==null&&fr(n,we.memoizedState.deps)?l.memoizedState=kn(t,s,a,n):(re.flags|=e,l.memoizedState=kn(1|t,s,a,n))}function Sc(e,t){Ns(8390656,8,e,t)}function br(e,t){Ds(2048,8,e,t)}function dm(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=Ss(),re.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function bc(e){var t=je().memoizedState;return dm({ref:t,nextImpl:e}),function(){if((Ee&2)!==0)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ec(e,t){return Ds(4,2,e,t)}function Nc(e,t){return Ds(4,4,e,t)}function Dc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cc(e,t,a){a=a!=null?a.concat([e]):null,Ds(4,4,Dc.bind(null,t,e),a)}function Er(){}function wc(e,t){var a=je();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&fr(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Tc(e,t){var a=je();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&fr(t,n[1]))return n[0];if(n=e(),Pa){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[n,t],n}function Nr(e,t,a){return a===void 0||(aa&1073741824)!==0&&(pe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=xf(),re.lanes|=e,Ta|=e,a)}function Ac(e,t,a,n){return St(a,t)?a:Tn.current!==null?(e=Nr(e,a,n),St(e,t)||(Ye=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(pe&261930)===0?(Ye=!0,e.memoizedState=a):(e=xf(),re.lanes|=e,Ta|=e,t)}function xc(e,t,a,n,l){var s=B.p;B.p=s!==0&&8>s?s:8;var o=x.T,m={};x.T=m,wr(e,!1,t,a);try{var g=l(),D=x.S;if(D!==null&&D(m,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var A=rm(g,n);yl(e,t,A,wt(e))}else yl(e,t,n,wt(e))}catch(R){yl(e,t,{then:function(){},status:"rejected",reason:R},wt())}finally{B.p=s,o!==null&&m.types!==null&&(o.types=m.types),x.T=o}}function pm(){}function Dr(e,t,a,n){if(e.tag!==5)throw Error(i(476));var l=kc(e).queue;xc(e,l,t,Z,a===null?pm:function(){return Rc(e),a(n)})}function kc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:Z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rc(e){var t=kc(e);t.next===null&&(t=e.alternate.memoizedState),yl(e,t.next.queue,{},wt())}function Cr(){return at(Ol)}function Mc(){return je().memoizedState}function Oc(){return je().memoizedState}function mm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=wt();e=ba(a);var n=Ea(t,e,a);n!==null&&(yt(n,t,a),fl(n,t,a)),t={cache:er()},e.payload=t;return}t=t.return}}function hm(e,t,a){var n=wt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cs(e)?Lc(t,a):(a=$i(e,t,a,n),a!==null&&(yt(a,e,n),zc(a,t,n)))}function Hc(e,t,a){var n=wt();yl(e,t,a,n)}function yl(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cs(e))Lc(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,m=s(o,a);if(l.hasEagerState=!0,l.eagerState=m,St(m,o))return ss(e,t,l,0),ke===null&&ls(),!1}catch{}finally{}if(a=$i(e,t,l,n),a!==null)return yt(a,e,n),zc(a,t,n),!0}return!1}function wr(e,t,a,n){if(n={lane:2,revertLane:lo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Cs(e)){if(t)throw Error(i(479))}else t=$i(e,a,n,2),t!==null&&yt(t,e,2)}function Cs(e){var t=e.alternate;return e===re||t!==null&&t===re}function Lc(e,t){An=_s=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function zc(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Fo(e,a)}}var gl={readContext:at,use:bs,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze};gl.useEffectEvent=ze;var Uc={readContext:at,use:bs,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Sc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ns(4194308,4,Dc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ns(4194308,4,e,t)},useInsertionEffect:function(e,t){Ns(4,2,e,t)},useMemo:function(e,t){var a=ot();t=t===void 0?null:t;var n=e();if(Pa){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ot();if(a!==void 0){var l=a(t);if(Pa){pa(!0);try{a(t)}finally{pa(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=hm.bind(null,re,e),[n.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=vr(e);var t=e.queue,a=Hc.bind(null,re,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Er,useDeferredValue:function(e,t){var a=ot();return Nr(a,e,t)},useTransition:function(){var e=vr(!1);return e=xc.bind(null,re,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=re,l=ot();if(ye){if(a===void 0)throw Error(i(407));a=a()}else{if(a=t(),ke===null)throw Error(i(349));(pe&127)!==0||lc(n,t,a)}l.memoizedState=a;var s={value:a,getSnapshot:t};return l.queue=s,Sc(ic.bind(null,n,s,e),[e]),n.flags|=2048,kn(9,{destroy:void 0},sc.bind(null,n,s,a,t),null),a},useId:function(){var e=ot(),t=ke.identifierPrefix;if(ye){var a=$t,n=Yt;a=(n&~(1<<32-vt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=vs++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=om++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Cr,useFormState:hc,useActionState:hc,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=wr.bind(null,re,!0,a),a.dispatch=t,[e,t]},useMemoCache:yr,useCacheRefresh:function(){return ot().memoizedState=mm.bind(null,re)},useEffectEvent:function(e){var t=ot(),a={impl:e};return t.memoizedState=a,function(){if((Ee&2)!==0)throw Error(i(440));return a.impl.apply(void 0,arguments)}}},Tr={readContext:at,use:bs,useCallback:wc,useContext:at,useEffect:br,useImperativeHandle:Cc,useInsertionEffect:Ec,useLayoutEffect:Nc,useMemo:Tc,useReducer:Es,useRef:vc,useState:function(){return Es(na)},useDebugValue:Er,useDeferredValue:function(e,t){var a=je();return Ac(a,we.memoizedState,e,t)},useTransition:function(){var e=Es(na)[0],t=je().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:nc,useId:Mc,useHostTransitionStatus:Cr,useFormState:yc,useActionState:yc,useOptimistic:function(e,t){var a=je();return uc(a,we,e,t)},useMemoCache:yr,useCacheRefresh:Oc};Tr.useEffectEvent=bc;var qc={readContext:at,use:bs,useCallback:wc,useContext:at,useEffect:br,useImperativeHandle:Cc,useInsertionEffect:Ec,useLayoutEffect:Nc,useMemo:Tc,useReducer:_r,useRef:vc,useState:function(){return _r(na)},useDebugValue:Er,useDeferredValue:function(e,t){var a=je();return we===null?Nr(a,e,t):Ac(a,we.memoizedState,e,t)},useTransition:function(){var e=_r(na)[0],t=je().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:nc,useId:Mc,useHostTransitionStatus:Cr,useFormState:_c,useActionState:_c,useOptimistic:function(e,t){var a=je();return we!==null?uc(a,we,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:yr,useCacheRefresh:Oc};qc.useEffectEvent=bc;function Ar(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xr={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=wt(),l=ba(n);l.payload=t,a!=null&&(l.callback=a),t=Ea(e,l,n),t!==null&&(yt(t,e,n),fl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=wt(),l=ba(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ea(e,l,n),t!==null&&(yt(t,e,n),fl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=wt(),n=ba(a);n.tag=2,t!=null&&(n.callback=t),t=Ea(e,n,a),t!==null&&(yt(t,e,a),fl(t,e,a))}};function jc(e,t,a,n,l,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,o):t.prototype&&t.prototype.isPureReactComponent?!nl(a,n)||!nl(l,s):!0}function Bc(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&xr.enqueueReplaceState(t,t.state,null)}function Wa(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Fc(e){ns(e)}function Yc(e){console.error(e)}function $c(e){ns(e)}function ws(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Gc(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function kr(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){ws(e,t)},a}function Qc(e){return e=ba(e),e.tag=3,e}function Vc(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var s=n.value;e.payload=function(){return l(s)},e.callback=function(){Gc(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Gc(t,a,n),typeof l!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function ym(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&En(t,a,l,!0),a=Et.current,a!==null){switch(a.tag){case 31:case 13:return Lt===null?qs():a.alternate===null&&Ue===0&&(Ue=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===ps?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),to(e,n,l)),!1;case 22:return a.flags|=65536,n===ps?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),to(e,n,l)),!1}throw Error(i(435,a.tag))}return to(e,n,l),qs(),!1}if(ye)return t=Et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Xi&&(e=Error(i(422),{cause:n}),il(Rt(e,a)))):(n!==Xi&&(t=Error(i(423),{cause:n}),il(Rt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Rt(n,a),l=kr(e.stateNode,n,l),ir(e,l),Ue!==4&&(Ue=2)),!1;var s=Error(i(520),{cause:n});if(s=Rt(s,a),Cl===null?Cl=[s]:Cl.push(s),Ue!==4&&(Ue=2),t===null)return!0;n=Rt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=kr(a.stateNode,n,e),ir(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Aa===null||!Aa.has(s))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Qc(l),Vc(l,e,a,n),ir(a,l),!1}a=a.return}while(a!==null);return!1}var Rr=Error(i(461)),Ye=!1;function nt(e,t,a,n){t.child=e===null?Iu(t,null,a,n):Ja(t,e.child,a,n)}function Zc(e,t,a,n,l){a=a.render;var s=t.ref;if("ref"in n){var o={};for(var m in n)m!=="ref"&&(o[m]=n[m])}else o=n;return Za(t),n=dr(e,t,a,o,s,l),m=pr(),e!==null&&!Ye?(mr(e,t,l),la(e,t,l)):(ye&&m&&Zi(t),t.flags|=1,nt(e,t,n,l),t.child)}function Kc(e,t,a,n,l){if(e===null){var s=a.type;return typeof s=="function"&&!Gi(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Xc(e,t,s,n,l)):(e=rs(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!jr(e,l)){var o=s.memoizedProps;if(a=a.compare,a=a!==null?a:nl,a(o,n)&&e.ref===t.ref)return la(e,t,l)}return t.flags|=1,e=Pt(s,n),e.ref=t.ref,e.return=t,t.child=e}function Xc(e,t,a,n,l){if(e!==null){var s=e.memoizedProps;if(nl(s,n)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=n=s,jr(e,l))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,la(e,t,l)}return Mr(e,t,a,n,l)}function Ic(e,t,a,n){var l=n.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~s}else n=0,t.child=null;return Jc(e,t,s,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fs(t,s!==null?s.cachePool:null),s!==null?Wu(t,s):or(),ec(t);else return n=t.lanes=536870912,Jc(e,t,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(fs(t,s.cachePool),Wu(t,s),Da(),t.memoizedState=null):(e!==null&&fs(t,null),or(),Da());return nt(e,t,l,a),t.child}function _l(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Jc(e,t,a,n,l){var s=ar();return s=s===null?null:{parent:Be._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&fs(t,null),or(),ec(t),e!==null&&En(e,t,n,!0),t.childLanes=l,null}function Ts(e,t){return t=xs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Pc(e,t,a){return Ja(t,e.child,null,a),e=Ts(t,t.pendingProps),e.flags|=2,Nt(t),t.memoizedState=null,e}function gm(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ye){if(n.mode==="hidden")return e=Ts(t,n),t.lanes=536870912,_l(null,e);if(cr(t),(e=Me)?(e=fd(e,Ht),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Yt,overflow:$t}:null,retryLane:536870912,hydrationErrors:null},a=Lu(e),a.return=t,t.child=a,tt=t,Me=null)):e=null,e===null)throw _a(t);return t.lanes=536870912,null}return Ts(t,n)}var s=e.memoizedState;if(s!==null){var o=s.dehydrated;if(cr(t),l)if(t.flags&256)t.flags&=-257,t=Pc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(Ye||En(e,t,a,!1),l=(a&e.childLanes)!==0,Ye||l){if(n=ke,n!==null&&(o=Yo(n,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,$a(e,o),yt(n,e,o),Rr;qs(),t=Pc(e,t,a)}else e=s.treeContext,Me=zt(o.nextSibling),tt=t,ye=!0,ga=null,Ht=!1,e!==null&&qu(t,e),t=Ts(t,n),t.flags|=4096;return t}return e=Pt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function As(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(i(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Mr(e,t,a,n,l){return Za(t),a=dr(e,t,a,n,void 0,l),n=pr(),e!==null&&!Ye?(mr(e,t,l),la(e,t,l)):(ye&&n&&Zi(t),t.flags|=1,nt(e,t,a,l),t.child)}function Wc(e,t,a,n,l,s){return Za(t),t.updateQueue=null,a=ac(t,n,a,l),tc(e),n=pr(),e!==null&&!Ye?(mr(e,t,s),la(e,t,s)):(ye&&n&&Zi(t),t.flags|=1,nt(e,t,a,s),t.child)}function ef(e,t,a,n,l){if(Za(t),t.stateNode===null){var s=_n,o=a.contextType;typeof o=="object"&&o!==null&&(s=at(o)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=xr,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},lr(t),o=a.contextType,s.context=typeof o=="object"&&o!==null?at(o):_n,s.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Ar(t,a,o,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(o=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),o!==s.state&&xr.enqueueReplaceState(s,s.state,null),pl(t,n,s,l),dl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,g=Wa(a,m);s.props=g;var D=s.context,A=a.contextType;o=_n,typeof A=="object"&&A!==null&&(o=at(A));var R=a.getDerivedStateFromProps;A=typeof R=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,A||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||D!==o)&&Bc(t,s,n,o),Sa=!1;var C=t.memoizedState;s.state=C,pl(t,n,s,l),dl(),D=t.memoizedState,m||C!==D||Sa?(typeof R=="function"&&(Ar(t,a,R,n),D=t.memoizedState),(g=Sa||jc(t,a,g,n,C,D,o))?(A||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=D),s.props=n,s.state=D,s.context=o,n=g):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,sr(e,t),o=t.memoizedProps,A=Wa(a,o),s.props=A,R=t.pendingProps,C=s.context,D=a.contextType,g=_n,typeof D=="object"&&D!==null&&(g=at(D)),m=a.getDerivedStateFromProps,(D=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==R||C!==g)&&Bc(t,s,n,g),Sa=!1,C=t.memoizedState,s.state=C,pl(t,n,s,l),dl();var T=t.memoizedState;o!==R||C!==T||Sa||e!==null&&e.dependencies!==null&&us(e.dependencies)?(typeof m=="function"&&(Ar(t,a,m,n),T=t.memoizedState),(A=Sa||jc(t,a,A,n,C,T,g)||e!==null&&e.dependencies!==null&&us(e.dependencies))?(D||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,T,g),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,T,g)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=T),s.props=n,s.state=T,s.context=g,n=A):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,As(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=Ja(t,e.child,null,l),t.child=Ja(t,null,a,l)):nt(e,t,a,l),t.memoizedState=s.state,e=t.child):e=la(e,t,l),e}function tf(e,t,a,n){return Qa(),t.flags|=256,nt(e,t,a,n),t.child}var Or={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hr(e){return{baseLanes:e,cachePool:Gu()}}function Lr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ct),e}function af(e,t,a){var n=t.pendingProps,l=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(l?Na(t):Da(),(e=Me)?(e=fd(e,Ht),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Yt,overflow:$t}:null,retryLane:536870912,hydrationErrors:null},a=Lu(e),a.return=t,t.child=a,tt=t,Me=null)):e=null,e===null)throw _a(t);return _o(e)?t.lanes=32:t.lanes=536870912,null}var m=n.children;return n=n.fallback,l?(Da(),l=t.mode,m=xs({mode:"hidden",children:m},l),n=Ga(n,l,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,n=t.child,n.memoizedState=Hr(a),n.childLanes=Lr(e,o,a),t.memoizedState=Or,_l(null,n)):(Na(t),zr(t,m))}var g=e.memoizedState;if(g!==null&&(m=g.dehydrated,m!==null)){if(s)t.flags&256?(Na(t),t.flags&=-257,t=Ur(e,t,a)):t.memoizedState!==null?(Da(),t.child=e.child,t.flags|=128,t=null):(Da(),m=n.fallback,l=t.mode,n=xs({mode:"visible",children:n.children},l),m=Ga(m,l,a,null),m.flags|=2,n.return=t,m.return=t,n.sibling=m,t.child=n,Ja(t,e.child,null,a),n=t.child,n.memoizedState=Hr(a),n.childLanes=Lr(e,o,a),t.memoizedState=Or,t=_l(null,n));else if(Na(t),_o(m)){if(o=m.nextSibling&&m.nextSibling.dataset,o)var D=o.dgst;o=D,n=Error(i(419)),n.stack="",n.digest=o,il({value:n,source:null,stack:null}),t=Ur(e,t,a)}else if(Ye||En(e,t,a,!1),o=(a&e.childLanes)!==0,Ye||o){if(o=ke,o!==null&&(n=Yo(o,a),n!==0&&n!==g.retryLane))throw g.retryLane=n,$a(e,n),yt(o,e,n),Rr;go(m)||qs(),t=Ur(e,t,a)}else go(m)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Me=zt(m.nextSibling),tt=t,ye=!0,ga=null,Ht=!1,e!==null&&qu(t,e),t=zr(t,n.children),t.flags|=4096);return t}return l?(Da(),m=n.fallback,l=t.mode,g=e.child,D=g.sibling,n=Pt(g,{mode:"hidden",children:n.children}),n.subtreeFlags=g.subtreeFlags&65011712,D!==null?m=Pt(D,m):(m=Ga(m,l,a,null),m.flags|=2),m.return=t,n.return=t,n.sibling=m,t.child=n,_l(null,n),n=t.child,m=e.child.memoizedState,m===null?m=Hr(a):(l=m.cachePool,l!==null?(g=Be._currentValue,l=l.parent!==g?{parent:g,pool:g}:l):l=Gu(),m={baseLanes:m.baseLanes|a,cachePool:l}),n.memoizedState=m,n.childLanes=Lr(e,o,a),t.memoizedState=Or,_l(e.child,n)):(Na(t),a=e.child,e=a.sibling,a=Pt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function zr(e,t){return t=xs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function xs(e,t){return e=bt(22,e,null,t),e.lanes=0,e}function Ur(e,t,a){return Ja(t,e.child,null,a),e=zr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Pi(e.return,t,a)}function qr(e,t,a,n,l,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=l,o.treeForkCount=s)}function lf(e,t,a){var n=t.pendingProps,l=n.revealOrder,s=n.tail;n=n.children;var o=qe.current,m=(o&2)!==0;if(m?(o=o&1|2,t.flags|=128):o&=1,j(qe,o),nt(e,t,n,a),n=ye?sl:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nf(e,a,t);else if(e.tag===19)nf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&gs(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),qr(t,!1,l,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&gs(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}qr(t,!0,a,null,s,n);break;case"together":qr(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function la(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ta|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(En(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,a=Pt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Pt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function jr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&us(e)))}function _m(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),va(t,Be,e.memoizedState.cache),Qa();break;case 27:case 5:J(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cr(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Na(t),t.flags|=128,null):(a&t.child.childLanes)!==0?af(e,t,a):(Na(t),e=la(e,t,a),e!==null?e.sibling:null);Na(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(En(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return lf(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),j(qe,qe.current),n)break;return null;case 22:return t.lanes=0,Ic(e,t,a,t.pendingProps);case 24:va(t,Be,e.memoizedState.cache)}return la(e,t,a)}function sf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!jr(e,a)&&(t.flags&128)===0)return Ye=!1,_m(e,t,a);Ye=(e.flags&131072)!==0}else Ye=!1,ye&&(t.flags&1048576)!==0&&Uu(t,sl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e=="function")Gi(e)?(n=Wa(e,n),t.tag=1,t=ef(null,t,e,n,a)):(t.tag=0,t=Mr(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===I){t.tag=11,t=Zc(null,t,e,n,a);break e}else if(l===ie){t.tag=14,t=Kc(null,t,e,n,a);break e}}throw t=Ze(e)||e,Error(i(306,t,""))}}return t;case 0:return Mr(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Wa(n,t.pendingProps),ef(e,t,n,l,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(i(387));n=t.pendingProps;var s=t.memoizedState;l=s.element,sr(e,t),pl(t,n,null,a);var o=t.memoizedState;if(n=o.cache,va(t,Be,n),n!==s.cache&&Wi(t,[Be],a,!0),dl(),n=o.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=tf(e,t,n,a);break e}else if(n!==l){l=Rt(Error(i(424)),t),il(l),t=tf(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=zt(e.firstChild),tt=t,ye=!0,ga=null,Ht=!0,a=Iu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qa(),n===l){t=la(e,t,a);break e}nt(e,t,n,a)}t=t.child}return t;case 26:return As(e,t),e===null?(a=gd(t.type,null,t.pendingProps,null))?t.memoizedState=a:ye||(a=t.type,e=t.pendingProps,n=Qs(ue.current).createElement(a),n[et]=t,n[ct]=e,lt(n,a,e),Ke(n),t.stateNode=n):t.memoizedState=gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return J(t),e===null&&ye&&(n=t.stateNode=md(t.type,t.pendingProps,ue.current),tt=t,Ht=!0,l=Me,Ma(t.type)?(vo=l,Me=zt(n.firstChild)):Me=l),nt(e,t,t.pendingProps.children,a),As(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((l=n=Me)&&(n=Km(n,t.type,t.pendingProps,Ht),n!==null?(t.stateNode=n,tt=t,Me=zt(n.firstChild),Ht=!1,l=!0):l=!1),l||_a(t)),J(t),l=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,n=s.children,mo(l,s)?n=null:o!==null&&mo(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=dr(e,t,um,null,null,a),Ol._currentValue=l),As(e,t),nt(e,t,n,a),t.child;case 6:return e===null&&ye&&((e=a=Me)&&(a=Xm(a,t.pendingProps,Ht),a!==null?(t.stateNode=a,tt=t,Me=null,e=!0):e=!1),e||_a(t)),null;case 13:return af(e,t,a);case 4:return We(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ja(t,null,n,a):nt(e,t,n,a),t.child;case 11:return Zc(e,t,t.type,t.pendingProps,a);case 7:return nt(e,t,t.pendingProps,a),t.child;case 8:return nt(e,t,t.pendingProps.children,a),t.child;case 12:return nt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,va(t,t.type,n.value),nt(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Za(t),l=at(l),n=n(l),t.flags|=1,nt(e,t,n,a),t.child;case 14:return Kc(e,t,t.type,t.pendingProps,a);case 15:return Xc(e,t,t.type,t.pendingProps,a);case 19:return lf(e,t,a);case 31:return gm(e,t,a);case 22:return Ic(e,t,a,t.pendingProps);case 24:return Za(t),n=at(Be),e===null?(l=ar(),l===null&&(l=ke,s=er(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=a),l=s),t.memoizedState={parent:n,cache:l},lr(t),va(t,Be,l)):((e.lanes&a)!==0&&(sr(e,t),pl(t,null,null,a),dl()),l=e.memoizedState,s=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),va(t,Be,n)):(n=s.cache,va(t,Be,n),n!==l.cache&&Wi(t,[Be],a,!0))),nt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function sa(e){e.flags|=4}function Br(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Of())e.flags|=8192;else throw Ia=ps,nr}else e.flags&=-16777217}function rf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ed(t))if(Of())e.flags|=8192;else throw Ia=ps,nr}function ks(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?jo():536870912,e.lanes|=t,Hn|=t)}function vl(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function vm(e,t,a){var n=t.pendingProps;switch(Ki(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(Be),L(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(bn(t)?sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ii())),Oe(t),null;case 26:var l=t.type,s=t.memoizedState;return e===null?(sa(t),s!==null?(Oe(t),rf(t,s)):(Oe(t),Br(t,l,null,n,a))):s?s!==e.memoizedState?(sa(t),Oe(t),rf(t,s)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&sa(t),Oe(t),Br(t,l,e,n,a)),null;case 27:if(ee(t),a=ue.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&sa(t);else{if(!n){if(t.stateNode===null)throw Error(i(166));return Oe(t),null}e=G.current,bn(t)?ju(t):(e=md(l,n,a),t.stateNode=e,sa(t))}return Oe(t),null;case 5:if(ee(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&sa(t);else{if(!n){if(t.stateNode===null)throw Error(i(166));return Oe(t),null}if(s=G.current,bn(t))ju(t);else{var o=Qs(ue.current);switch(s){case 1:s=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=o.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?o.createElement(l,{is:n.is}):o.createElement(l)}}s[et]=t,s[ct]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)s.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=s;e:switch(lt(s,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&sa(t)}}return Oe(t),Br(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&sa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(i(166));if(e=ue.current,bn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=tt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[et]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||nd(e.nodeValue,a)),e||_a(t,!0)}else e=Qs(e).createTextNode(n),e[et]=t,t.stateNode=e}return Oe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=bn(t),a!==null){if(e===null){if(!n)throw Error(i(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(557));e[et]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else a=Ii(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Nt(t),t):(Nt(t),null);if((t.flags&128)!==0)throw Error(i(558))}return Oe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=bn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(i(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(i(317));l[et]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),l=!1}else l=Ii(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Nt(t),t):(Nt(t),null)}return Nt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ks(t,t.updateQueue),Oe(t),null);case 4:return L(),e===null&&oo(t.stateNode.containerInfo),Oe(t),null;case 10:return ta(t.type),Oe(t),null;case 19:if(M(qe),n=t.memoizedState,n===null)return Oe(t),null;if(l=(t.flags&128)!==0,s=n.rendering,s===null)if(l)vl(n,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=gs(e),s!==null){for(t.flags|=128,vl(n,!1),e=s.updateQueue,t.updateQueue=e,ks(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Hu(a,e),a=a.sibling;return j(qe,qe.current&1|2),ye&&Wt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&ut()>Ls&&(t.flags|=128,l=!0,vl(n,!1),t.lanes=4194304)}else{if(!l)if(e=gs(s),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,ks(t,e),vl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!ye)return Oe(t),null}else 2*ut()-n.renderingStartTime>Ls&&a!==536870912&&(t.flags|=128,l=!0,vl(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(e=n.last,e!==null?e.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ut(),e.sibling=null,a=qe.current,j(qe,l?a&1|2:a&1),ye&&Wt(t,n.treeForkCount),e):(Oe(t),null);case 22:case 23:return Nt(t),ur(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),a=t.updateQueue,a!==null&&ks(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&M(Ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ta(Be),Oe(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Sm(e,t){switch(Ki(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(Be),L(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ee(t),null;case 31:if(t.memoizedState!==null){if(Nt(t),t.alternate===null)throw Error(i(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(qe),null;case 4:return L(),null;case 10:return ta(t.type),null;case 22:case 23:return Nt(t),ur(),e!==null&&M(Ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(Be),null;case 25:return null;default:return null}}function of(e,t){switch(Ki(t),t.tag){case 3:ta(Be),L();break;case 26:case 27:case 5:ee(t);break;case 4:L();break;case 31:t.memoizedState!==null&&Nt(t);break;case 13:Nt(t);break;case 19:M(qe);break;case 10:ta(t.type);break;case 22:case 23:Nt(t),ur(),e!==null&&M(Ka);break;case 24:ta(Be)}}function Sl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var s=a.create,o=a.inst;n=s(),o.destroy=n}a=a.next}while(a!==l)}}catch(m){De(t,t.return,m)}}function Ca(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var s=l.next;n=s;do{if((n.tag&e)===e){var o=n.inst,m=o.destroy;if(m!==void 0){o.destroy=void 0,l=t;var g=a,D=m;try{D()}catch(A){De(l,g,A)}}}n=n.next}while(n!==s)}}catch(A){De(t,t.return,A)}}function uf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Pu(t,a)}catch(n){De(e,e.return,n)}}}function cf(e,t,a){a.props=Wa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){De(e,t,n)}}function bl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){De(e,t,l)}}function Gt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){De(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){De(e,t,l)}else a.current=null}function ff(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){De(e,e.return,l)}}function Fr(e,t,a){try{var n=e.stateNode;Ym(n,e.type,a,t),n[ct]=t}catch(l){De(e,e.return,l)}}function df(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ma(e.type)||e.tag===4}function Yr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $r(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=It));else if(n!==4&&(n===27&&Ma(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for($r(e,t,a),e=e.sibling;e!==null;)$r(e,t,a),e=e.sibling}function Rs(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Rs(e,t,a),e=e.sibling;e!==null;)Rs(e,t,a),e=e.sibling}function pf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);lt(t,n,a),t[et]=e,t[ct]=a}catch(s){De(e,e.return,s)}}var ia=!1,$e=!1,Gr=!1,mf=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function bm(e,t){if(e=e.containerInfo,fo=Ps,e=Cu(e),Ui(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var o=0,m=-1,g=-1,D=0,A=0,R=e,C=null;t:for(;;){for(var T;R!==a||l!==0&&R.nodeType!==3||(m=o+l),R!==s||n!==0&&R.nodeType!==3||(g=o+n),R.nodeType===3&&(o+=R.nodeValue.length),(T=R.firstChild)!==null;)C=R,R=T;for(;;){if(R===e)break t;if(C===a&&++D===l&&(m=o),C===s&&++A===n&&(g=o),(T=R.nextSibling)!==null)break;R=C,C=R.parentNode}R=T}a=m===-1||g===-1?null:{start:m,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(po={focusedElem:e,selectionRange:a},Ps=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,l=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var $=Wa(a.type,l);e=n.getSnapshotBeforeUpdate($,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(P){De(a,a.return,P)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)yo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function hf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),n&4&&Sl(5,a);break;case 1:if(oa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){De(a,a.return,o)}else{var l=Wa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){De(a,a.return,o)}}n&64&&uf(a),n&512&&bl(a,a.return);break;case 3:if(oa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Pu(e,t)}catch(o){De(a,a.return,o)}}break;case 27:t===null&&n&4&&pf(a);case 26:case 5:oa(e,a),t===null&&n&4&&ff(a),n&512&&bl(a,a.return);break;case 12:oa(e,a);break;case 31:oa(e,a),n&4&&_f(e,a);break;case 13:oa(e,a),n&4&&vf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=km.bind(null,a),Im(e,a))));break;case 22:if(n=a.memoizedState!==null||ia,!n){t=t!==null&&t.memoizedState!==null||$e,l=ia;var s=$e;ia=n,($e=t)&&!s?ua(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),ia=l,$e=s}break;case 30:break;default:oa(e,a)}}function yf(e){var t=e.alternate;t!==null&&(e.alternate=null,yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Si(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,dt=!1;function ra(e,t,a){for(a=a.child;a!==null;)gf(e,t,a),a=a.sibling}function gf(e,t,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Qn,a)}catch{}switch(a.tag){case 26:$e||Gt(a,t),ra(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Gt(a,t);var n=He,l=dt;Ma(a.type)&&(He=a.stateNode,dt=!1),ra(e,t,a),kl(a.stateNode),He=n,dt=l;break;case 5:$e||Gt(a,t);case 6:if(n=He,l=dt,He=null,ra(e,t,a),He=n,dt=l,He!==null)if(dt)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(a.stateNode)}catch(s){De(a,t,s)}else try{He.removeChild(a.stateNode)}catch(s){De(a,t,s)}break;case 18:He!==null&&(dt?(e=He,ud(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yn(e)):ud(He,a.stateNode));break;case 4:n=He,l=dt,He=a.stateNode.containerInfo,dt=!0,ra(e,t,a),He=n,dt=l;break;case 0:case 11:case 14:case 15:Ca(2,a,t),$e||Ca(4,a,t),ra(e,t,a);break;case 1:$e||(Gt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&cf(a,t,n)),ra(e,t,a);break;case 21:ra(e,t,a);break;case 22:$e=(n=$e)||a.memoizedState!==null,ra(e,t,a),$e=n;break;default:ra(e,t,a)}}function _f(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yn(e)}catch(a){De(t,t.return,a)}}}function vf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yn(e)}catch(a){De(t,t.return,a)}}function Em(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mf),t;default:throw Error(i(435,e.tag))}}function Ms(e,t){var a=Em(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=Rm.bind(null,e,n);n.then(l,l)}})}function pt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],s=e,o=t,m=o;e:for(;m!==null;){switch(m.tag){case 27:if(Ma(m.type)){He=m.stateNode,dt=!1;break e}break;case 5:He=m.stateNode,dt=!1;break e;case 3:case 4:He=m.stateNode.containerInfo,dt=!0;break e}m=m.return}if(He===null)throw Error(i(160));gf(s,o,l),He=null,dt=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sf(t,e),t=t.sibling}var Bt=null;function Sf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),mt(e),n&4&&(Ca(3,e,e.return),Sl(3,e),Ca(5,e,e.return));break;case 1:pt(t,e),mt(e),n&512&&($e||a===null||Gt(a,a.return)),n&64&&ia&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Bt;if(pt(t,e),mt(e),n&512&&($e||a===null||Gt(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Kn]||s[et]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),lt(s,n,a),s[et]=e,Ke(s),n=s;break e;case"link":var o=Sd("link","href",l).get(n+(a.href||""));if(o){for(var m=0;m<o.length;m++)if(s=o[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(m,1);break t}}s=l.createElement(n),lt(s,n,a),l.head.appendChild(s);break;case"meta":if(o=Sd("meta","content",l).get(n+(a.content||""))){for(m=0;m<o.length;m++)if(s=o[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(m,1);break t}}s=l.createElement(n),lt(s,n,a),l.head.appendChild(s);break;default:throw Error(i(468,n))}s[et]=e,Ke(s),n=s}e.stateNode=n}else bd(l,e.type,e.stateNode);else e.stateNode=vd(l,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?bd(l,e.type,e.stateNode):vd(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Fr(e,e.memoizedProps,a.memoizedProps)}break;case 27:pt(t,e),mt(e),n&512&&($e||a===null||Gt(a,a.return)),a!==null&&n&4&&Fr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(pt(t,e),mt(e),n&512&&($e||a===null||Gt(a,a.return)),e.flags&32){l=e.stateNode;try{fn(l,"")}catch($){De(e,e.return,$)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Fr(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Gr=!0);break;case 6:if(pt(t,e),mt(e),n&4){if(e.stateNode===null)throw Error(i(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch($){De(e,e.return,$)}}break;case 3:if(Ks=null,l=Bt,Bt=Vs(t.containerInfo),pt(t,e),Bt=l,mt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch($){De(e,e.return,$)}Gr&&(Gr=!1,bf(e));break;case 4:n=Bt,Bt=Vs(e.stateNode.containerInfo),pt(t,e),mt(e),Bt=n;break;case 12:pt(t,e),mt(e);break;case 31:pt(t,e),mt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ms(e,n)));break;case 13:pt(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hs=ut()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ms(e,n)));break;case 22:l=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,D=ia,A=$e;if(ia=D||l,$e=A||g,pt(t,e),$e=A,ia=D,mt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||g||ia||$e||en(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(s=g.stateNode,l)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{m=g.stateNode;var R=g.memoizedProps.style,C=R!=null&&R.hasOwnProperty("display")?R.display:null;m.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch($){De(g,g.return,$)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=l?"":g.memoizedProps}catch($){De(g,g.return,$)}}}else if(t.tag===18){if(a===null){g=t;try{var T=g.stateNode;l?cd(T,!0):cd(g.stateNode,!1)}catch($){De(g,g.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ms(e,a))));break;case 19:pt(t,e),mt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ms(e,n)));break;case 30:break;case 21:break;default:pt(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(df(n)){a=n;break}n=n.return}if(a==null)throw Error(i(160));switch(a.tag){case 27:var l=a.stateNode,s=Yr(e);Rs(e,s,l);break;case 5:var o=a.stateNode;a.flags&32&&(fn(o,""),a.flags&=-33);var m=Yr(e);Rs(e,m,o);break;case 3:case 4:var g=a.stateNode.containerInfo,D=Yr(e);$r(e,D,g);break;default:throw Error(i(161))}}catch(A){De(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function oa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hf(e,t.alternate,t),t=t.sibling}function en(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ca(4,t,t.return),en(t);break;case 1:Gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&cf(t,t.return,a),en(t);break;case 27:kl(t.stateNode);case 26:case 5:Gt(t,t.return),en(t);break;case 22:t.memoizedState===null&&en(t);break;case 30:en(t);break;default:en(t)}e=e.sibling}}function ua(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,s=t,o=s.flags;switch(s.tag){case 0:case 11:case 15:ua(l,s,a),Sl(4,s);break;case 1:if(ua(l,s,a),n=s,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){De(n,n.return,D)}if(n=s,l=n.updateQueue,l!==null){var m=n.stateNode;try{var g=l.shared.hiddenCallbacks;if(g!==null)for(l.shared.hiddenCallbacks=null,l=0;l<g.length;l++)Ju(g[l],m)}catch(D){De(n,n.return,D)}}a&&o&64&&uf(s),bl(s,s.return);break;case 27:pf(s);case 26:case 5:ua(l,s,a),a&&n===null&&o&4&&ff(s),bl(s,s.return);break;case 12:ua(l,s,a);break;case 31:ua(l,s,a),a&&o&4&&_f(l,s);break;case 13:ua(l,s,a),a&&o&4&&vf(l,s);break;case 22:s.memoizedState===null&&ua(l,s,a),bl(s,s.return);break;case 30:break;default:ua(l,s,a)}t=t.sibling}}function Qr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&rl(a))}function Vr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e))}function Ft(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ef(e,t,a,n),t=t.sibling}function Ef(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ft(e,t,a,n),l&2048&&Sl(9,t);break;case 1:Ft(e,t,a,n);break;case 3:Ft(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e)));break;case 12:if(l&2048){Ft(e,t,a,n),e=t.stateNode;try{var s=t.memoizedProps,o=s.id,m=s.onPostCommit;typeof m=="function"&&m(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){De(t,t.return,g)}}else Ft(e,t,a,n);break;case 31:Ft(e,t,a,n);break;case 13:Ft(e,t,a,n);break;case 23:break;case 22:s=t.stateNode,o=t.alternate,t.memoizedState!==null?s._visibility&2?Ft(e,t,a,n):El(e,t):s._visibility&2?Ft(e,t,a,n):(s._visibility|=2,Rn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Qr(o,t);break;case 24:Ft(e,t,a,n),l&2048&&Vr(t.alternate,t);break;default:Ft(e,t,a,n)}}function Rn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,o=t,m=a,g=n,D=o.flags;switch(o.tag){case 0:case 11:case 15:Rn(s,o,m,g,l),Sl(8,o);break;case 23:break;case 22:var A=o.stateNode;o.memoizedState!==null?A._visibility&2?Rn(s,o,m,g,l):El(s,o):(A._visibility|=2,Rn(s,o,m,g,l)),l&&D&2048&&Qr(o.alternate,o);break;case 24:Rn(s,o,m,g,l),l&&D&2048&&Vr(o.alternate,o);break;default:Rn(s,o,m,g,l)}t=t.sibling}}function El(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:El(a,n),l&2048&&Qr(n.alternate,n);break;case 24:El(a,n),l&2048&&Vr(n.alternate,n);break;default:El(a,n)}t=t.sibling}}var Nl=8192;function Mn(e,t,a){if(e.subtreeFlags&Nl)for(e=e.child;e!==null;)Nf(e,t,a),e=e.sibling}function Nf(e,t,a){switch(e.tag){case 26:Mn(e,t,a),e.flags&Nl&&e.memoizedState!==null&&oh(a,Bt,e.memoizedState,e.memoizedProps);break;case 5:Mn(e,t,a);break;case 3:case 4:var n=Bt;Bt=Vs(e.stateNode.containerInfo),Mn(e,t,a),Bt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Nl,Nl=16777216,Mn(e,t,a),Nl=n):Mn(e,t,a));break;default:Mn(e,t,a)}}function Df(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Xe=n,wf(n,e)}Df(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cf(e),e=e.sibling}function Cf(e){switch(e.tag){case 0:case 11:case 15:Dl(e),e.flags&2048&&Ca(9,e,e.return);break;case 3:Dl(e);break;case 12:Dl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Os(e)):Dl(e);break;default:Dl(e)}}function Os(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Xe=n,wf(n,e)}Df(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ca(8,t,t.return),Os(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Os(t));break;default:Os(t)}e=e.sibling}}function wf(e,t){for(;Xe!==null;){var a=Xe;switch(a.tag){case 0:case 11:case 15:Ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:rl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Xe=n;else e:for(a=e;Xe!==null;){n=Xe;var l=n.sibling,s=n.return;if(yf(n),n===a){Xe=null;break e}if(l!==null){l.return=s,Xe=l;break e}Xe=s}}}var Nm={getCacheForType:function(e){var t=at(Be),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return at(Be).controller.signal}},Dm=typeof WeakMap=="function"?WeakMap:Map,Ee=0,ke=null,fe=null,pe=0,Ne=0,Dt=null,wa=!1,On=!1,Zr=!1,ca=0,Ue=0,Ta=0,tn=0,Kr=0,Ct=0,Hn=0,Cl=null,ht=null,Xr=!1,Hs=0,Tf=0,Ls=1/0,zs=null,Aa=null,Ve=0,xa=null,Ln=null,fa=0,Ir=0,Jr=null,Af=null,wl=0,Pr=null;function wt(){return(Ee&2)!==0&&pe!==0?pe&-pe:x.T!==null?lo():$o()}function xf(){if(Ct===0)if((pe&536870912)===0||ye){var e=Gl;Gl<<=1,(Gl&3932160)===0&&(Gl=262144),Ct=e}else Ct=536870912;return e=Et.current,e!==null&&(e.flags|=32),Ct}function yt(e,t,a){(e===ke&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(zn(e,0),ka(e,pe,Ct,!1)),Zn(e,a),((Ee&2)===0||e!==ke)&&(e===ke&&((Ee&2)===0&&(tn|=a),Ue===4&&ka(e,pe,Ct,!1)),Qt(e))}function kf(e,t,a){if((Ee&6)!==0)throw Error(i(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Vn(e,t),l=n?Tm(e,t):eo(e,t,!0),s=n;do{if(l===0){On&&!n&&ka(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!Cm(a)){l=eo(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var m=e;l=Cl;var g=m.current.memoizedState.isDehydrated;if(g&&(zn(m,o).flags|=256),o=eo(m,o,!1),o!==2){if(Zr&&!g){m.errorRecoveryDisabledLanes|=s,tn|=s,l=4;break e}s=ht,ht=l,s!==null&&(ht===null?ht=s:ht.push.apply(ht,s))}l=o}if(s=!1,l!==2)continue}}if(l===1){zn(e,0),ka(e,t,0,!0);break}e:{switch(n=e,s=l,s){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:ka(n,t,Ct,!wa);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(l=Hs+300-ut(),10<l)){if(ka(n,t,Ct,!wa),Vl(n,0,!0)!==0)break e;fa=t,n.timeoutHandle=rd(Rf.bind(null,n,a,ht,zs,Xr,t,Ct,tn,Hn,wa,s,"Throttled",-0,0),l);break e}Rf(n,a,ht,zs,Xr,t,Ct,tn,Hn,wa,s,null,-0,0)}}break}while(!0);Qt(e)}function Rf(e,t,a,n,l,s,o,m,g,D,A,R,C,T){if(e.timeoutHandle=-1,R=t.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:It},Nf(t,s,R);var $=(s&62914560)===s?Hs-ut():(s&4194048)===s?Tf-ut():0;if($=uh(R,$),$!==null){fa=s,e.cancelPendingCommit=$(jf.bind(null,e,t,s,a,n,l,o,m,g,A,R,null,C,T)),ka(e,s,o,!D);return}}jf(e,t,s,a,n,l,o,m,g)}function Cm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],s=l.getSnapshot;l=l.value;try{if(!St(s(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ka(e,t,a,n){t&=~Kr,t&=~tn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var s=31-vt(l),o=1<<s;n[s]=-1,l&=~o}a!==0&&Bo(e,a,t)}function Us(){return(Ee&6)===0?(Tl(0),!1):!0}function Wr(){if(fe!==null){if(Ne===0)var e=fe.return;else e=fe,ea=Va=null,hr(e),wn=null,ul=0,e=fe;for(;e!==null;)of(e.alternate,e),e=e.return;fe=null}}function zn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Qm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,Wr(),ke=e,fe=a=Pt(e.current,null),pe=t,Ne=0,Dt=null,wa=!1,On=Vn(e,t),Zr=!1,Hn=Ct=Kr=tn=Ta=Ue=0,ht=Cl=null,Xr=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-vt(n),s=1<<l;t|=e[l],n&=~s}return ca=t,ls(),a}function Mf(e,t){re=null,x.H=gl,t===Cn||t===ds?(t=Zu(),Ne=3):t===nr?(t=Zu(),Ne=4):Ne=t===Rr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,fe===null&&(Ue=1,ws(e,Rt(t,e.current)))}function Of(){var e=Et.current;return e===null?!0:(pe&4194048)===pe?Lt===null:(pe&62914560)===pe||(pe&536870912)!==0?e===Lt:!1}function Hf(){var e=x.H;return x.H=gl,e===null?gl:e}function Lf(){var e=x.A;return x.A=Nm,e}function qs(){Ue=4,wa||(pe&4194048)!==pe&&Et.current!==null||(On=!0),(Ta&134217727)===0&&(tn&134217727)===0||ke===null||ka(ke,pe,Ct,!1)}function eo(e,t,a){var n=Ee;Ee|=2;var l=Hf(),s=Lf();(ke!==e||pe!==t)&&(zs=null,zn(e,t)),t=!1;var o=Ue;e:do try{if(Ne!==0&&fe!==null){var m=fe,g=Dt;switch(Ne){case 8:Wr(),o=6;break e;case 3:case 2:case 9:case 6:Et.current===null&&(t=!0);var D=Ne;if(Ne=0,Dt=null,Un(e,m,g,D),a&&On){o=0;break e}break;default:D=Ne,Ne=0,Dt=null,Un(e,m,g,D)}}wm(),o=Ue;break}catch(A){Mf(e,A)}while(!0);return t&&e.shellSuspendCounter++,ea=Va=null,Ee=n,x.H=l,x.A=s,fe===null&&(ke=null,pe=0,ls()),o}function wm(){for(;fe!==null;)zf(fe)}function Tm(e,t){var a=Ee;Ee|=2;var n=Hf(),l=Lf();ke!==e||pe!==t?(zs=null,Ls=ut()+500,zn(e,t)):On=Vn(e,t);e:do try{if(Ne!==0&&fe!==null){t=fe;var s=Dt;t:switch(Ne){case 1:Ne=0,Dt=null,Un(e,t,s,1);break;case 2:case 9:if(Qu(s)){Ne=0,Dt=null,Uf(t);break}t=function(){Ne!==2&&Ne!==9||ke!==e||(Ne=7),Qt(e)},s.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:Qu(s)?(Ne=0,Dt=null,Uf(t)):(Ne=0,Dt=null,Un(e,t,s,7));break;case 5:var o=null;switch(fe.tag){case 26:o=fe.memoizedState;case 5:case 27:var m=fe;if(o?Ed(o):m.stateNode.complete){Ne=0,Dt=null;var g=m.sibling;if(g!==null)fe=g;else{var D=m.return;D!==null?(fe=D,js(D)):fe=null}break t}}Ne=0,Dt=null,Un(e,t,s,5);break;case 6:Ne=0,Dt=null,Un(e,t,s,6);break;case 8:Wr(),Ue=6;break e;default:throw Error(i(462))}}Am();break}catch(A){Mf(e,A)}while(!0);return ea=Va=null,x.H=n,x.A=l,Ee=a,fe!==null?0:(ke=null,pe=0,ls(),Ue)}function Am(){for(;fe!==null&&!Zt();)zf(fe)}function zf(e){var t=sf(e.alternate,e,ca);e.memoizedProps=e.pendingProps,t===null?js(e):fe=t}function Uf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Wc(a,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=Wc(a,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:hr(t);default:of(a,t),t=fe=Hu(t,ca),t=sf(a,t,ca)}e.memoizedProps=e.pendingProps,t===null?js(e):fe=t}function Un(e,t,a,n){ea=Va=null,hr(t),wn=null,ul=0;var l=t.return;try{if(ym(e,l,t,a,pe)){Ue=1,ws(e,Rt(a,e.current)),fe=null;return}}catch(s){if(l!==null)throw fe=l,s;Ue=1,ws(e,Rt(a,e.current)),fe=null;return}t.flags&32768?(ye||n===1?e=!0:On||(pe&536870912)!==0?e=!1:(wa=e=!0,(n===2||n===9||n===3||n===6)&&(n=Et.current,n!==null&&n.tag===13&&(n.flags|=16384))),qf(t,e)):js(t)}function js(e){var t=e;do{if((t.flags&32768)!==0){qf(t,wa);return}e=t.return;var a=vm(t.alternate,t,ca);if(a!==null){fe=a;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ue===0&&(Ue=5)}function qf(e,t){do{var a=Sm(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);Ue=6,fe=null}function jf(e,t,a,n,l,s,o,m,g){e.cancelPendingCommit=null;do Bs();while(Ve!==0);if((Ee&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(s=t.lanes|t.childLanes,s|=Yi,rp(e,a,s,o,m,g),e===ke&&(fe=ke=null,pe=0),Ln=t,xa=e,fa=a,Ir=s,Jr=l,Af=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mm(Kt,function(){return Gf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=x.T,x.T=null,l=B.p,B.p=2,o=Ee,Ee|=4;try{bm(e,t,a)}finally{Ee=o,B.p=l,x.T=n}}Ve=1,Bf(),Ff(),Yf()}}function Bf(){if(Ve===1){Ve=0;var e=xa,t=Ln,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=x.T,x.T=null;var n=B.p;B.p=2;var l=Ee;Ee|=4;try{Sf(t,e);var s=po,o=Cu(e.containerInfo),m=s.focusedElem,g=s.selectionRange;if(o!==m&&m&&m.ownerDocument&&Du(m.ownerDocument.documentElement,m)){if(g!==null&&Ui(m)){var D=g.start,A=g.end;if(A===void 0&&(A=D),"selectionStart"in m)m.selectionStart=D,m.selectionEnd=Math.min(A,m.value.length);else{var R=m.ownerDocument||document,C=R&&R.defaultView||window;if(C.getSelection){var T=C.getSelection(),$=m.textContent.length,P=Math.min(g.start,$),Ae=g.end===void 0?P:Math.min(g.end,$);!T.extend&&P>Ae&&(o=Ae,Ae=P,P=o);var S=Nu(m,P),_=Nu(m,Ae);if(S&&_&&(T.rangeCount!==1||T.anchorNode!==S.node||T.anchorOffset!==S.offset||T.focusNode!==_.node||T.focusOffset!==_.offset)){var N=R.createRange();N.setStart(S.node,S.offset),T.removeAllRanges(),P>Ae?(T.addRange(N),T.extend(_.node,_.offset)):(N.setEnd(_.node,_.offset),T.addRange(N))}}}}for(R=[],T=m;T=T.parentNode;)T.nodeType===1&&R.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<R.length;m++){var k=R[m];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}Ps=!!fo,po=fo=null}finally{Ee=l,B.p=n,x.T=a}}e.current=t,Ve=2}}function Ff(){if(Ve===2){Ve=0;var e=xa,t=Ln,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=x.T,x.T=null;var n=B.p;B.p=2;var l=Ee;Ee|=4;try{hf(e,t.alternate,t)}finally{Ee=l,B.p=n,x.T=a}}Ve=3}}function Yf(){if(Ve===4||Ve===3){Ve=0,Gn();var e=xa,t=Ln,a=fa,n=Af;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,Ln=xa=null,$f(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Aa=null),_i(a),t=t.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Qn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=x.T,l=B.p,B.p=2,x.T=null;try{for(var s=e.onRecoverableError,o=0;o<n.length;o++){var m=n[o];s(m.value,{componentStack:m.stack})}}finally{x.T=t,B.p=l}}(fa&3)!==0&&Bs(),Qt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Pr?wl++:(wl=0,Pr=e):wl=0,Tl(0)}}function $f(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,rl(t)))}function Bs(){return Bf(),Ff(),Yf(),Gf()}function Gf(){if(Ve!==5)return!1;var e=xa,t=Ir;Ir=0;var a=_i(fa),n=x.T,l=B.p;try{B.p=32>a?32:a,x.T=null,a=Jr,Jr=null;var s=xa,o=fa;if(Ve=0,Ln=xa=null,fa=0,(Ee&6)!==0)throw Error(i(331));var m=Ee;if(Ee|=4,Cf(s.current),Ef(s,s.current,o,a),Ee=m,Tl(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Qn,s)}catch{}return!0}finally{B.p=l,x.T=n,$f(e,t)}}function Qf(e,t,a){t=Rt(a,t),t=kr(e.stateNode,t,2),e=Ea(e,t,2),e!==null&&(Zn(e,2),Qt(e))}function De(e,t,a){if(e.tag===3)Qf(e,e,a);else for(;t!==null;){if(t.tag===3){Qf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Aa===null||!Aa.has(n))){e=Rt(a,e),a=Qc(2),n=Ea(t,a,2),n!==null&&(Vc(a,n,t,e),Zn(n,2),Qt(n));break}}t=t.return}}function to(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Dm;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Zr=!0,l.add(a),e=xm.bind(null,e,t,a),t.then(e,e))}function xm(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(pe&a)===a&&(Ue===4||Ue===3&&(pe&62914560)===pe&&300>ut()-Hs?(Ee&2)===0&&zn(e,0):Kr|=a,Hn===pe&&(Hn=0)),Qt(e)}function Vf(e,t){t===0&&(t=jo()),e=$a(e,t),e!==null&&(Zn(e,t),Qt(e))}function km(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vf(e,a)}function Rm(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(i(314))}n!==null&&n.delete(t),Vf(e,a)}function Mm(e,t){return Le(e,t)}var Fs=null,qn=null,ao=!1,Ys=!1,no=!1,Ra=0;function Qt(e){e!==qn&&e.next===null&&(qn===null?Fs=qn=e:qn=qn.next=e),Ys=!0,ao||(ao=!0,Hm())}function Tl(e,t){if(!no&&Ys){no=!0;do for(var a=!1,n=Fs;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var s=0;else{var o=n.suspendedLanes,m=n.pingedLanes;s=(1<<31-vt(42|e)+1)-1,s&=l&~(o&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,If(n,s))}else s=pe,s=Vl(n,n===ke?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Vn(n,s)||(a=!0,If(n,s));n=n.next}while(a);no=!1}}function Om(){Zf()}function Zf(){Ys=ao=!1;var e=0;Ra!==0&&Gm()&&(e=Ra);for(var t=ut(),a=null,n=Fs;n!==null;){var l=n.next,s=Kf(n,t);s===0?(n.next=null,a===null?Fs=l:a.next=l,l===null&&(qn=a)):(a=n,(e!==0||(s&3)!==0)&&(Ys=!0)),n=l}Ve!==0&&Ve!==5||Tl(e),Ra!==0&&(Ra=0)}function Kf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var o=31-vt(s),m=1<<o,g=l[o];g===-1?((m&a)===0||(m&n)!==0)&&(l[o]=ip(m,t)):g<=t&&(e.expiredLanes|=m),s&=~m}if(t=ke,a=pe,a=Vl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&st(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Vn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&st(n),_i(a)){case 2:case 8:a=Yl;break;case 32:a=Kt;break;case 268435456:a=qo;break;default:a=Kt}return n=Xf.bind(null,e),a=Le(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&st(n),e.callbackPriority=2,e.callbackNode=null,2}function Xf(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bs()&&e.callbackNode!==a)return null;var n=pe;return n=Vl(e,e===ke?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(kf(e,n,t),Kf(e,ut()),e.callbackNode!=null&&e.callbackNode===a?Xf.bind(null,e):null)}function If(e,t){if(Bs())return null;kf(e,t,!0)}function Hm(){Vm(function(){(Ee&6)!==0?Le(Fl,Om):Zf()})}function lo(){if(Ra===0){var e=Nn;e===0&&(e=$l,$l<<=1,($l&261888)===0&&($l=256)),Ra=e}return Ra}function Jf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Il(""+e)}function Pf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Lm(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var s=Jf((l[ct]||null).action),o=n.submitter;o&&(t=(t=o[ct]||null)?Jf(t.formAction):o.getAttribute("formAction"),t!==null&&(s=t,o=null));var m=new es("action","action",null,n,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ra!==0){var g=o?Pf(l,o):new FormData(l);Dr(a,{pending:!0,data:g,method:l.method,action:s},null,g)}}else typeof s=="function"&&(m.preventDefault(),g=o?Pf(l,o):new FormData(l),Dr(a,{pending:!0,data:g,method:l.method,action:s},s,g))},currentTarget:l}]})}}for(var so=0;so<Fi.length;so++){var io=Fi[so],zm=io.toLowerCase(),Um=io[0].toUpperCase()+io.slice(1);jt(zm,"on"+Um)}jt(Au,"onAnimationEnd"),jt(xu,"onAnimationIteration"),jt(ku,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(Wp,"onTransitionRun"),jt(em,"onTransitionStart"),jt(tm,"onTransitionCancel"),jt(Ru,"onTransitionEnd"),un("onMouseEnter",["mouseout","mouseover"]),un("onMouseLeave",["mouseout","mouseover"]),un("onPointerEnter",["pointerout","pointerover"]),un("onPointerLeave",["pointerout","pointerover"]),ja("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ja("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ja("onBeforeInput",["compositionend","keypress","textInput","paste"]),ja("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ja("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ja("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function Wf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var o=n.length-1;0<=o;o--){var m=n[o],g=m.instance,D=m.currentTarget;if(m=m.listener,g!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=D;try{s(l)}catch(A){ns(A)}l.currentTarget=null,s=g}else for(o=0;o<n.length;o++){if(m=n[o],g=m.instance,D=m.currentTarget,m=m.listener,g!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=D;try{s(l)}catch(A){ns(A)}l.currentTarget=null,s=g}}}}function de(e,t){var a=t[vi];a===void 0&&(a=t[vi]=new Set);var n=e+"__bubble";a.has(n)||(ed(t,e,2,!1),a.add(n))}function ro(e,t,a){var n=0;t&&(n|=4),ed(a,e,n,t)}var $s="_reactListening"+Math.random().toString(36).slice(2);function oo(e){if(!e[$s]){e[$s]=!0,Vo.forEach(function(a){a!=="selectionchange"&&(qm.has(a)||ro(a,!1,e),ro(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$s]||(t[$s]=!0,ro("selectionchange",!1,t))}}function ed(e,t,a,n){switch(xd(t)){case 2:var l=dh;break;case 8:l=ph;break;default:l=Do}a=l.bind(null,t,a,e),l=void 0,!Ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function uo(e,t,a,n,l){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var m=n.stateNode.containerInfo;if(m===l)break;if(o===4)for(o=n.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;m!==null;){if(o=sn(m),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){n=s=o;continue e}m=m.parentNode}}n=n.return}lu(function(){var D=s,A=wi(a),R=[];e:{var C=Mu.get(e);if(C!==void 0){var T=es,$=e;switch(e){case"keypress":if(Pl(a)===0)break e;case"keydown":case"keyup":T=Rp;break;case"focusin":$="focus",T=Mi;break;case"focusout":$="blur",T=Mi;break;case"beforeblur":case"afterblur":T=Mi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Hp;break;case Au:case xu:case ku:T=Ep;break;case Ru:T=zp;break;case"scroll":case"scrollend":T=gp;break;case"wheel":T=qp;break;case"copy":case"cut":case"paste":T=Dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=uu;break;case"toggle":case"beforetoggle":T=Bp}var P=(t&4)!==0,Ae=!P&&(e==="scroll"||e==="scrollend"),S=P?C!==null?C+"Capture":null:C;P=[];for(var _=D,N;_!==null;){var k=_;if(N=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||N===null||S===null||(k=In(_,S),k!=null&&P.push(xl(_,k,N))),Ae)break;_=_.return}0<P.length&&(C=new T(C,$,null,a,A),R.push({event:C,listeners:P}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",C&&a!==Ci&&($=a.relatedTarget||a.fromElement)&&(sn($)||$[ln]))break e;if((T||C)&&(C=A.window===A?A:(C=A.ownerDocument)?C.defaultView||C.parentWindow:window,T?($=a.relatedTarget||a.toElement,T=D,$=$?sn($):null,$!==null&&(Ae=f($),P=$.tag,$!==Ae||P!==5&&P!==27&&P!==6)&&($=null)):(T=null,$=D),T!==$)){if(P=ru,k="onMouseLeave",S="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(P=uu,k="onPointerLeave",S="onPointerEnter",_="pointer"),Ae=T==null?C:Xn(T),N=$==null?C:Xn($),C=new P(k,_+"leave",T,a,A),C.target=Ae,C.relatedTarget=N,k=null,sn(A)===D&&(P=new P(S,_+"enter",$,a,A),P.target=N,P.relatedTarget=Ae,k=P),Ae=k,T&&$)t:{for(P=jm,S=T,_=$,N=0,k=S;k;k=P(k))N++;k=0;for(var K=_;K;K=P(K))k++;for(;0<N-k;)S=P(S),N--;for(;0<k-N;)_=P(_),k--;for(;N--;){if(S===_||_!==null&&S===_.alternate){P=S;break t}S=P(S),_=P(_)}P=null}else P=null;T!==null&&td(R,C,T,P,!1),$!==null&&Ae!==null&&td(R,Ae,$,P,!0)}}e:{if(C=D?Xn(D):window,T=C.nodeName&&C.nodeName.toLowerCase(),T==="select"||T==="input"&&C.type==="file")var ve=gu;else if(hu(C))if(_u)ve=Ip;else{ve=Kp;var Q=Zp}else T=C.nodeName,!T||T.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?D&&Di(D.elementType)&&(ve=gu):ve=Xp;if(ve&&(ve=ve(e,D))){yu(R,ve,a,A);break e}Q&&Q(e,C,D),e==="focusout"&&D&&C.type==="number"&&D.memoizedProps.value!=null&&Ni(C,"number",C.value)}switch(Q=D?Xn(D):window,e){case"focusin":(hu(Q)||Q.contentEditable==="true")&&(hn=Q,qi=D,ll=null);break;case"focusout":ll=qi=hn=null;break;case"mousedown":ji=!0;break;case"contextmenu":case"mouseup":case"dragend":ji=!1,wu(R,a,A);break;case"selectionchange":if(Pp)break;case"keydown":case"keyup":wu(R,a,A)}var oe;if(Hi)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else mn?pu(e,a)&&(me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(cu&&a.locale!=="ko"&&(mn||me!=="onCompositionStart"?me==="onCompositionEnd"&&mn&&(oe=su()):(ha=A,xi="value"in ha?ha.value:ha.textContent,mn=!0)),Q=Gs(D,me),0<Q.length&&(me=new ou(me,e,null,a,A),R.push({event:me,listeners:Q}),oe?me.data=oe:(oe=mu(a),oe!==null&&(me.data=oe)))),(oe=Yp?$p(e,a):Gp(e,a))&&(me=Gs(D,"onBeforeInput"),0<me.length&&(Q=new ou("onBeforeInput","beforeinput",null,a,A),R.push({event:Q,listeners:me}),Q.data=oe)),Lm(R,e,D,a,A)}Wf(R,t)})}function xl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Gs(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=In(e,a),l!=null&&n.unshift(xl(e,l,s)),l=In(e,t),l!=null&&n.push(xl(e,l,s))),e.tag===3)return n;e=e.return}return[]}function jm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function td(e,t,a,n,l){for(var s=t._reactName,o=[];a!==null&&a!==n;){var m=a,g=m.alternate,D=m.stateNode;if(m=m.tag,g!==null&&g===n)break;m!==5&&m!==26&&m!==27||D===null||(g=D,l?(D=In(a,s),D!=null&&o.unshift(xl(a,D,g))):l||(D=In(a,s),D!=null&&o.push(xl(a,D,g)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Bm=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(Bm,`
`).replace(Fm,"")}function nd(e,t){return t=ad(t),ad(e)===t}function Te(e,t,a,n,l,s){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||fn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&fn(e,""+n);break;case"className":Kl(e,"class",n);break;case"tabIndex":Kl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Kl(e,a,n);break;case"style":au(e,n,s);break;case"data":if(t!=="object"){Kl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Il(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Te(e,t,"name",l.name,l,null),Te(e,t,"formEncType",l.formEncType,l,null),Te(e,t,"formMethod",l.formMethod,l,null),Te(e,t,"formTarget",l.formTarget,l,null)):(Te(e,t,"encType",l.encType,l,null),Te(e,t,"method",l.method,l,null),Te(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Il(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=It);break;case"onScroll":n!=null&&de("scroll",e);break;case"onScrollEnd":n!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(i(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(i(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Il(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":de("beforetoggle",e),de("toggle",e),Zl(e,"popover",n);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Zl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hp.get(a)||a,Zl(e,a,n))}}function co(e,t,a,n,l,s){switch(a){case"style":au(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(i(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(i(60));e.innerHTML=a}}break;case"children":typeof n=="string"?fn(e,n):(typeof n=="number"||typeof n=="bigint")&&fn(e,""+n);break;case"onScroll":n!=null&&de("scroll",e);break;case"onScrollEnd":n!=null&&de("scrollend",e);break;case"onClick":n!=null&&(e.onclick=It);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),s=e[ct]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Zl(e,a,n)}}}function lt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var n=!1,l=!1,s;for(s in a)if(a.hasOwnProperty(s)){var o=a[s];if(o!=null)switch(s){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Te(e,t,s,o,a,null)}}l&&Te(e,t,"srcSet",a.srcSet,a,null),n&&Te(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var m=s=o=l=null,g=null,D=null;for(n in a)if(a.hasOwnProperty(n)){var A=a[n];if(A!=null)switch(n){case"name":l=A;break;case"type":o=A;break;case"checked":g=A;break;case"defaultChecked":D=A;break;case"value":s=A;break;case"defaultValue":m=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(i(137,t));break;default:Te(e,t,n,A,a,null)}}Po(e,s,m,g,D,o,l,!1);return;case"select":de("invalid",e),n=o=s=null;for(l in a)if(a.hasOwnProperty(l)&&(m=a[l],m!=null))switch(l){case"value":s=m;break;case"defaultValue":o=m;break;case"multiple":n=m;default:Te(e,t,l,m,a,null)}t=s,a=o,e.multiple=!!n,t!=null?cn(e,!!n,t,!1):a!=null&&cn(e,!!n,a,!0);return;case"textarea":de("invalid",e),s=l=n=null;for(o in a)if(a.hasOwnProperty(o)&&(m=a[o],m!=null))switch(o){case"value":n=m;break;case"defaultValue":l=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(i(91));break;default:Te(e,t,o,m,a,null)}eu(e,n,l,s);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(n=a[g],n!=null))switch(g){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Te(e,t,g,n,a,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(n=0;n<Al.length;n++)de(Al[n],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(n=a[D],n!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Te(e,t,D,n,a,null)}return;default:if(Di(t)){for(A in a)a.hasOwnProperty(A)&&(n=a[A],n!==void 0&&co(e,t,A,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&Te(e,t,m,n,a,null))}function Ym(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,o=null,m=null,g=null,D=null,A=null;for(T in a){var R=a[T];if(a.hasOwnProperty(T)&&R!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":g=R;default:n.hasOwnProperty(T)||Te(e,t,T,null,n,R)}}for(var C in n){var T=n[C];if(R=a[C],n.hasOwnProperty(C)&&(T!=null||R!=null))switch(C){case"type":s=T;break;case"name":l=T;break;case"checked":D=T;break;case"defaultChecked":A=T;break;case"value":o=T;break;case"defaultValue":m=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(i(137,t));break;default:T!==R&&Te(e,t,C,T,n,R)}}Ei(e,o,m,g,D,A,s,l);return;case"select":T=o=m=C=null;for(s in a)if(g=a[s],a.hasOwnProperty(s)&&g!=null)switch(s){case"value":break;case"multiple":T=g;default:n.hasOwnProperty(s)||Te(e,t,s,null,n,g)}for(l in n)if(s=n[l],g=a[l],n.hasOwnProperty(l)&&(s!=null||g!=null))switch(l){case"value":C=s;break;case"defaultValue":m=s;break;case"multiple":o=s;default:s!==g&&Te(e,t,l,s,n,g)}t=m,a=o,n=T,C!=null?cn(e,!!a,C,!1):!!n!=!!a&&(t!=null?cn(e,!!a,t,!0):cn(e,!!a,a?[]:"",!1));return;case"textarea":T=C=null;for(m in a)if(l=a[m],a.hasOwnProperty(m)&&l!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Te(e,t,m,null,n,l)}for(o in n)if(l=n[o],s=a[o],n.hasOwnProperty(o)&&(l!=null||s!=null))switch(o){case"value":C=l;break;case"defaultValue":T=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(i(91));break;default:l!==s&&Te(e,t,o,l,n,s)}Wo(e,C,T);return;case"option":for(var $ in a)if(C=a[$],a.hasOwnProperty($)&&C!=null&&!n.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:Te(e,t,$,null,n,C)}for(g in n)if(C=n[g],T=a[g],n.hasOwnProperty(g)&&C!==T&&(C!=null||T!=null))switch(g){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Te(e,t,g,C,n,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in a)C=a[P],a.hasOwnProperty(P)&&C!=null&&!n.hasOwnProperty(P)&&Te(e,t,P,null,n,C);for(D in n)if(C=n[D],T=a[D],n.hasOwnProperty(D)&&C!==T&&(C!=null||T!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(i(137,t));break;default:Te(e,t,D,C,n,T)}return;default:if(Di(t)){for(var Ae in a)C=a[Ae],a.hasOwnProperty(Ae)&&C!==void 0&&!n.hasOwnProperty(Ae)&&co(e,t,Ae,void 0,n,C);for(A in n)C=n[A],T=a[A],!n.hasOwnProperty(A)||C===T||C===void 0&&T===void 0||co(e,t,A,C,n,T);return}}for(var S in a)C=a[S],a.hasOwnProperty(S)&&C!=null&&!n.hasOwnProperty(S)&&Te(e,t,S,null,n,C);for(R in n)C=n[R],T=a[R],!n.hasOwnProperty(R)||C===T||C==null&&T==null||Te(e,t,R,C,n,T)}function ld(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $m(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],s=l.transferSize,o=l.initiatorType,m=l.duration;if(s&&m&&ld(o)){for(o=0,m=l.responseEnd,n+=1;n<a.length;n++){var g=a[n],D=g.startTime;if(D>m)break;var A=g.transferSize,R=g.initiatorType;A&&ld(R)&&(g=g.responseEnd,o+=A*(g<m?1:(m-D)/(g-D)))}if(--n,t+=8*(s+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fo=null,po=null;function Qs(e){return e.nodeType===9?e:e.ownerDocument}function sd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function id(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function mo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ho=null;function Gm(){var e=window.event;return e&&e.type==="popstate"?e===ho?!1:(ho=e,!0):(ho=null,!1)}var rd=typeof setTimeout=="function"?setTimeout:void 0,Qm=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,Vm=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(Zm)}:rd;function Zm(e){setTimeout(function(){throw e})}function Ma(e){return e==="head"}function ud(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),Yn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")kl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,kl(a);for(var s=a.firstChild;s;){var o=s.nextSibling,m=s.nodeName;s[Kn]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=o}}else a==="body"&&kl(e.ownerDocument.body);a=l}while(a);Yn(t)}function cd(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function yo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yo(a),Si(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Km(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Kn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function Xm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function fd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function go(e){return e.data==="$?"||e.data==="$~"}function _o(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Im(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vo=null;function dd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function pd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function md(e,t,a){switch(t=Qs(a),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function kl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Si(e)}var Ut=new Map,hd=new Set;function Vs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=B.d;B.d={f:Jm,r:Pm,D:Wm,C:eh,L:th,m:ah,X:lh,S:nh,M:sh};function Jm(){var e=da.f(),t=Us();return e||t}function Pm(e){var t=rn(e);t!==null&&t.tag===5&&t.type==="form"?Rc(t):da.r(e)}var jn=typeof document>"u"?null:document;function yd(e,t,a){var n=jn;if(n&&typeof t=="string"&&t){var l=xt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),hd.has(l)||(hd.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),lt(t,"link",e),Ke(t),n.head.appendChild(t)))}}function Wm(e){da.D(e),yd("dns-prefetch",e,null)}function eh(e,t){da.C(e,t),yd("preconnect",e,t)}function th(e,t,a){da.L(e,t,a);var n=jn;if(n&&e&&t){var l='link[rel="preload"][as="'+xt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+xt(a.imageSizes)+'"]')):l+='[href="'+xt(e)+'"]';var s=l;switch(t){case"style":s=Bn(e);break;case"script":s=Fn(e)}Ut.has(s)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ut.set(s,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(Rl(s))||t==="script"&&n.querySelector(Ml(s))||(t=n.createElement("link"),lt(t,"link",e),Ke(t),n.head.appendChild(t)))}}function ah(e,t){da.m(e,t);var a=jn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+xt(n)+'"][href="'+xt(e)+'"]',s=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Fn(e)}if(!Ut.has(s)&&(e=w({rel:"modulepreload",href:e},t),Ut.set(s,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ml(s)))return}n=a.createElement("link"),lt(n,"link",e),Ke(n),a.head.appendChild(n)}}}function nh(e,t,a){da.S(e,t,a);var n=jn;if(n&&e){var l=on(n).hoistableStyles,s=Bn(e);t=t||"default";var o=l.get(s);if(!o){var m={loading:0,preload:null};if(o=n.querySelector(Rl(s)))m.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ut.get(s))&&So(e,a);var g=o=n.createElement("link");Ke(g),lt(g,"link",e),g._p=new Promise(function(D,A){g.onload=D,g.onerror=A}),g.addEventListener("load",function(){m.loading|=1}),g.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Zs(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:m},l.set(s,o)}}}function lh(e,t){da.X(e,t);var a=jn;if(a&&e){var n=on(a).hoistableScripts,l=Fn(e),s=n.get(l);s||(s=a.querySelector(Ml(l)),s||(e=w({src:e,async:!0},t),(t=Ut.get(l))&&bo(e,t),s=a.createElement("script"),Ke(s),lt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(l,s))}}function sh(e,t){da.M(e,t);var a=jn;if(a&&e){var n=on(a).hoistableScripts,l=Fn(e),s=n.get(l);s||(s=a.querySelector(Ml(l)),s||(e=w({src:e,async:!0,type:"module"},t),(t=Ut.get(l))&&bo(e,t),s=a.createElement("script"),Ke(s),lt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(l,s))}}function gd(e,t,a,n){var l=(l=ue.current)?Vs(l):null;if(!l)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Bn(a.href),a=on(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Bn(a.href);var s=on(l).hoistableStyles,o=s.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,o),(s=l.querySelector(Rl(e)))&&!s._p&&(o.instance=s,o.state.loading=5),Ut.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ut.set(e,a),s||ih(l,e,a,o.state))),t&&n===null)throw Error(i(528,""));return o}if(t&&n!==null)throw Error(i(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Fn(a),a=on(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Bn(e){return'href="'+xt(e)+'"'}function Rl(e){return'link[rel="stylesheet"]['+e+"]"}function _d(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function ih(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),lt(t,"link",a),Ke(t),e.head.appendChild(t))}function Fn(e){return'[src="'+xt(e)+'"]'}function Ml(e){return"script[async]"+e}function vd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+xt(a.href)+'"]');if(n)return t.instance=n,Ke(n),n;var l=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ke(n),lt(n,"style",l),Zs(n,a.precedence,e),t.instance=n;case"stylesheet":l=Bn(a.href);var s=e.querySelector(Rl(l));if(s)return t.state.loading|=4,t.instance=s,Ke(s),s;n=_d(a),(l=Ut.get(l))&&So(n,l),s=(e.ownerDocument||e).createElement("link"),Ke(s);var o=s;return o._p=new Promise(function(m,g){o.onload=m,o.onerror=g}),lt(s,"link",n),t.state.loading|=4,Zs(s,a.precedence,e),t.instance=s;case"script":return s=Fn(a.src),(l=e.querySelector(Ml(s)))?(t.instance=l,Ke(l),l):(n=a,(l=Ut.get(s))&&(n=w({},a),bo(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ke(l),lt(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Zs(n,a.precedence,e));return t.instance}function Zs(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,s=l,o=0;o<n.length;o++){var m=n[o];if(m.dataset.precedence===t)s=m;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function So(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ks=null;function Sd(e,t,a){if(Ks===null){var n=new Map,l=Ks=new Map;l.set(a,n)}else l=Ks,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var s=a[l];if(!(s[Kn]||s[et]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var o=s.getAttribute(t)||"";o=e+o;var m=n.get(o);m?m.push(s):n.set(o,[s])}}return n}function bd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function rh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ed(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oh(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Bn(n.href),s=t.querySelector(Rl(l));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Xs.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,Ke(s);return}s=t.ownerDocument||t,n=_d(n),(l=Ut.get(l))&&So(n,l),s=s.createElement("link"),Ke(s);var o=s;o._p=new Promise(function(m,g){o.onload=m,o.onerror=g}),lt(s,"link",n),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Xs.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Eo=0;function uh(e,t){return e.stylesheets&&e.count===0&&Js(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Js(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Eo===0&&(Eo=62500*$m());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Js(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Eo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Xs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Js(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Is=null;function Js(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Is=new Map,t.forEach(ch,e),Is=null,Xs.call(e))}function ch(e,t){if(!(t.state.loading&4)){var a=Is.get(e);if(a)var n=a.get(null);else{a=new Map,Is.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var o=l[s];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}l=t.instance,o=l.getAttribute("data-precedence"),s=a.get(o)||n,s===n&&a.set(null,l),a.set(o,l),this.count++,n=Xs.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Ol={$$typeof:te,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function fh(e,t,a,n,l,s,o,m,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.hiddenUpdates=yi(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Nd(e,t,a,n,l,s,o,m,g,D,A,R){return e=new fh(e,t,a,o,g,D,A,R,m),t=1,s===!0&&(t|=24),s=bt(3,null,null,t),e.current=s,s.stateNode=e,t=er(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},lr(s),e}function Dd(e){return e?(e=_n,e):_n}function Cd(e,t,a,n,l,s){l=Dd(l),n.context===null?n.context=l:n.pendingContext=l,n=ba(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=Ea(e,n,t),a!==null&&(yt(a,e,t),fl(a,e,t))}function wd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function No(e,t){wd(e,t),(e=e.alternate)&&wd(e,t)}function Td(e){if(e.tag===13||e.tag===31){var t=$a(e,67108864);t!==null&&yt(t,e,67108864),No(e,67108864)}}function Ad(e){if(e.tag===13||e.tag===31){var t=wt();t=gi(t);var a=$a(e,t);a!==null&&yt(a,e,t),No(e,t)}}var Ps=!0;function dh(e,t,a,n){var l=x.T;x.T=null;var s=B.p;try{B.p=2,Do(e,t,a,n)}finally{B.p=s,x.T=l}}function ph(e,t,a,n){var l=x.T;x.T=null;var s=B.p;try{B.p=8,Do(e,t,a,n)}finally{B.p=s,x.T=l}}function Do(e,t,a,n){if(Ps){var l=Co(n);if(l===null)uo(e,t,n,Ws,a),kd(e,n);else if(hh(l,e,t,a,n))n.stopPropagation();else if(kd(e,n),t&4&&-1<mh.indexOf(e)){for(;l!==null;){var s=rn(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var o=qa(s.pendingLanes);if(o!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;o;){var g=1<<31-vt(o);m.entanglements[1]|=g,o&=~g}Qt(s),(Ee&6)===0&&(Ls=ut()+500,Tl(0))}}break;case 31:case 13:m=$a(s,2),m!==null&&yt(m,s,2),Us(),No(s,2)}if(s=Co(n),s===null&&uo(e,t,n,Ws,a),s===l)break;l=s}l!==null&&n.stopPropagation()}else uo(e,t,n,null,a)}}function Co(e){return e=wi(e),wo(e)}var Ws=null;function wo(e){if(Ws=null,e=sn(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=p(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ws=e,null}function xd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hi()){case Fl:return 2;case Yl:return 8;case Kt:case ep:return 32;case qo:return 268435456;default:return 32}default:return 32}}var To=!1,Oa=null,Ha=null,La=null,Hl=new Map,Ll=new Map,za=[],mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kd(e,t){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Hl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ll.delete(t.pointerId)}}function zl(e,t,a,n,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[l]},t!==null&&(t=rn(t),t!==null&&Td(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function hh(e,t,a,n,l){switch(t){case"focusin":return Oa=zl(Oa,e,t,a,n,l),!0;case"dragenter":return Ha=zl(Ha,e,t,a,n,l),!0;case"mouseover":return La=zl(La,e,t,a,n,l),!0;case"pointerover":var s=l.pointerId;return Hl.set(s,zl(Hl.get(s)||null,e,t,a,n,l)),!0;case"gotpointercapture":return s=l.pointerId,Ll.set(s,zl(Ll.get(s)||null,e,t,a,n,l)),!0}return!1}function Rd(e){var t=sn(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,Go(e.priority,function(){Ad(a)});return}}else if(t===31){if(t=p(a),t!==null){e.blockedOn=t,Go(e.priority,function(){Ad(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Co(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ci=n,a.target.dispatchEvent(n),Ci=null}else return t=rn(a),t!==null&&Td(t),e.blockedOn=a,!1;t.shift()}return!0}function Md(e,t,a){ei(e)&&a.delete(t)}function yh(){To=!1,Oa!==null&&ei(Oa)&&(Oa=null),Ha!==null&&ei(Ha)&&(Ha=null),La!==null&&ei(La)&&(La=null),Hl.forEach(Md),Ll.forEach(Md)}function ti(e,t){e.blockedOn===t&&(e.blockedOn=null,To||(To=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,yh)))}var ai=null;function Od(e){ai!==e&&(ai=e,E.unstable_scheduleCallback(E.unstable_NormalPriority,function(){ai===e&&(ai=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(wo(n||a)===null)continue;break}var s=rn(a);s!==null&&(e.splice(t,3),t-=3,Dr(s,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Yn(e){function t(g){return ti(g,e)}Oa!==null&&ti(Oa,e),Ha!==null&&ti(Ha,e),La!==null&&ti(La,e),Hl.forEach(t),Ll.forEach(t);for(var a=0;a<za.length;a++){var n=za[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)Rd(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],s=a[n+1],o=l[ct]||null;if(typeof s=="function")o||Od(a);else if(o){var m=null;if(s&&s.hasAttribute("formAction")){if(l=s,o=s[ct]||null)m=o.formAction;else if(wo(l)!==null)continue}else m=o.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),Od(a)}}}function Hd(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ao(e){this._internalRoot=e}ni.prototype.render=Ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var a=t.current,n=wt();Cd(a,n,e,t,null,null)},ni.prototype.unmount=Ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cd(e.current,2,null,e,null,null),Us(),t[ln]=null}};function ni(e){this._internalRoot=e}ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=$o();e={blockedOn:null,target:e,priority:t};for(var a=0;a<za.length&&t!==0&&t<za[a].priority;a++);za.splice(a,0,e),a===0&&Rd(e)}};var Ld=r.version;if(Ld!=="19.2.8")throw Error(i(527,Ld,"19.2.8"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=h(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var gh={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{Qn=li.inject(gh),_t=li}catch{}}return ql.createRoot=function(e,t){if(!c(e))throw Error(i(299));var a=!1,n="",l=Fc,s=Yc,o=$c;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Nd(e,1,!1,null,null,a,n,null,l,s,o,Hd),e[ln]=t.current,oo(e),new Ao(t)},ql.hydrateRoot=function(e,t,a){if(!c(e))throw Error(i(299));var n=!1,l="",s=Fc,o=Yc,m=$c,g=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(g=a.formState)),t=Nd(e,1,!0,t,a??null,n,l,g,s,o,m,Hd),t.context=Dd(null),a=t.current,n=wt(),n=gi(n),l=ba(n),l.callback=null,Ea(a,l,n),a=n,t.current.lanes=a,Zn(t,a),Qt(t),e[ln]=t.current,oo(e),new ni(t)},ql.version="19.2.8",ql}var Qd;function kh(){if(Qd)return Ro.exports;Qd=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(r){console.error(r)}}return E(),Ro.exports=xh(),Ro.exports}var Rh=kh();const Mh=Id(Rh),Vd=["hdfs dfs -ls","hdfs dfs -mkdir -p","rmdir","hdfs dfs -put","hdfs dfs -cat","hdfs dfs -rm -r","python","pyspark","hdfs dfs -du","hdfs dfs -df","hdfs fsck /","hdfs dfsadmin -report","hdfs dfsadmin -safemode get","hadoop jar wordcount.jar","yarn application -list","help","clear"];function Oh(E,r){const u=E.trimStart();if(!u)return Vd;const i=Vd.filter(c=>c.startsWith(u));if(i.length>0)return i;if(u.includes(" /")||u.endsWith(" /")||u.includes(" ")){const c=u.split(" "),f=c[c.length-1];if(f.startsWith("/")){const d=f.substring(0,f.lastIndexOf("/"))||"/",p=f.substring(f.lastIndexOf("/")+1),y=r.resolvePath(d);if(y&&y.type==="DIRECTORY"){const h=[];return y.children.forEach(b=>{if(b.name.startsWith(p)){const w=(d==="/"?"":d)+"/"+b.name,z=c.slice(0,-1).join(" ")+" "+w;h.push(z)}}),h}}}return[]}const Hh="hadoop-lab-db",Lh=2,an="localFiles",jl="localDirs",nn="hdfsFileContent",si="commandHistory",ii="shellState",ri="ksqlDatabase";class Jd{constructor(){O(this,"db",null);O(this,"ready");this.ready=this.open()}open(){return new Promise((r,u)=>{const i=indexedDB.open(Hh,Lh);i.onupgradeneeded=c=>{const f=c.target.result;f.objectStoreNames.contains(an)||f.createObjectStore(an),f.objectStoreNames.contains(jl)||f.createObjectStore(jl),f.objectStoreNames.contains(nn)||f.createObjectStore(nn),f.objectStoreNames.contains(si)||f.createObjectStore(si),f.objectStoreNames.contains(ii)||f.createObjectStore(ii),f.objectStoreNames.contains(ri)||f.createObjectStore(ri)},i.onsuccess=c=>{this.db=c.target.result,r()},i.onerror=()=>u(i.error)})}async waitReady(){return this.ready}tx(r,u="readonly"){if(!this.db)throw new Error("DB not open");return this.db.transaction(r,u)}get(r,u){return new Promise((i,c)=>{const f=this.tx(r).objectStore(r).get(u);f.onsuccess=()=>i(f.result),f.onerror=()=>c(f.error)})}put(r,u,i){return new Promise((c,f)=>{const d=this.tx(r,"readwrite").objectStore(r).put(i,u);d.onsuccess=()=>c(),d.onerror=()=>f(d.error)})}del(r,u){return new Promise((i,c)=>{const f=this.tx(r,"readwrite").objectStore(r).delete(u);f.onsuccess=()=>i(),f.onerror=()=>c(f.error)})}getAllKeys(r){return new Promise((u,i)=>{const c=this.tx(r).objectStore(r).getAllKeys();c.onsuccess=()=>u(c.result),c.onerror=()=>i(c.error)})}getAll(r){return new Promise((u,i)=>{const c=this.tx(r).objectStore(r).getAll();c.onsuccess=()=>u(c.result),c.onerror=()=>i(c.error)})}async saveLocalFile(r,u){await this.put(an,r,u)}async loadLocalFile(r){return this.get(an,r)}async deleteLocalFile(r){await this.del(an,r)}async loadAllLocalFiles(){const r=await this.getAllKeys(an),u=await this.getAll(an),i=new Map;return r.forEach((c,f)=>i.set(c,u[f])),i}async saveLocalDir(r){await this.put(jl,r,!0)}async deleteLocalDir(r){await this.del(jl,r)}async loadAllLocalDirs(){const r=await this.getAllKeys(jl);return new Set(r)}async saveHdfsFileContent(r,u){await this.put(nn,r,u)}async loadHdfsFileContent(r){return this.get(nn,r)}async deleteHdfsFileContent(r){await this.del(nn,r)}async loadAllHdfsFileContents(){const r=await this.getAllKeys(nn),u=await this.getAll(nn),i=new Map;return r.forEach((c,f)=>i.set(c,u[f])),i}async saveCommandHistory(r){await this.put(si,"history",r)}async loadCommandHistory(){return await this.get(si,"history")??[]}async saveShellState(r){await this.put(ii,"state",r)}async loadShellState(){return this.get(ii,"state")}async saveKSQLDatabase(r){let u="";const i=new Uint8Array(r),c=i.byteLength,f=32768;for(let p=0;p<c;p+=f)u+=String.fromCharCode.apply(null,Array.from(i.subarray(p,p+f)));const d=btoa(u);await this.put(ri,"db_binary",d)}async loadKSQLDatabase(){const r=await this.get(ri,"db_binary");if(!r||typeof r!="string")return;const u=atob(r),i=u.length,c=new Uint8Array(i);for(let f=0;f<i;f++)c[f]=u.charCodeAt(f);return c}async getStorageEstimate(){if("storage"in navigator&&"estimate"in navigator.storage){const r=await navigator.storage.estimate();return{usageBytes:r.usage??0,quotaBytes:r.quota??0}}return{usageBytes:0,quotaBytes:0}}}const zh={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1};class Uh{constructor(){O(this,"sqlLib",null);O(this,"db",null);O(this,"initPromise",null);O(this,"hadoopDB",new Jd);O(this,"saveLocalFileCallback")}async init(){if(!(typeof window>"u")&&!this.db)return this.initPromise?this.initPromise:(this.initPromise=new Promise(r=>{(async()=>{try{if(!window.initSqlJs){const i=document.createElement("script");i.src="./sql/sql-wasm.js",i.async=!0,document.head.appendChild(i),await new Promise((c,f)=>{i.onload=c,i.onerror=f})}if(window.initSqlJs){this.sqlLib=await window.initSqlJs({locateFile:c=>c.endsWith(".wasm")?"./sql/sql-wasm.wasm":`./sql/${c}`}),await this.hadoopDB.waitReady();const i=await this.hadoopDB.loadKSQLDatabase();i&&i.length>0?this.db=new this.sqlLib.Database(i):this.db=new this.sqlLib.Database}r()}catch(i){console.error("KSQL Engine init error:",i),r()}})()}),this.initPromise)}getDatabase(){return this.db}getSqlLib(){return this.sqlLib}async persistDatabase(){if(this.db)try{const r=this.db.export();await this.hadoopDB.saveKSQLDatabase(r)}catch{}}async handleLoadCommand(r){let u="",i="";const c=r.match(/^([a-zA-Z0-9_]+)\s*=\s*LOAD\s+['"]?([^'"]+)['"]?/i),f=r.match(/^LOAD\s+['"]?([^'"]+)['"]?\s+(?:USING\s+[^\s]+\s+)?INTO\s+([a-zA-Z0-9_]+)/i),d=r.match(/^LOAD\s+['"]?([^'"]+)['"]?/i);if(c)i=c[1].trim(),u=c[2].trim();else if(f)u=f[1].trim(),i=f[2].trim();else if(d)u=d[1].trim(),i=u.split(".")[0].replace(/[^a-zA-Z0-9_]/g,"_");else return{output:"Usage: load 'file.csv' into table_name OR table_name = load 'file.csv'",isError:!0};const p=await this.hadoopDB.loadAllLocalFiles();let y;const h=u.replace(/^\.\//,"").replace(/^\/home\/Hacker\//,"");for(const[H,X]of p.entries())if(H.replace(/^\.\//,"").replace(/^\/home\/Hacker\//,"")===h||H===u){y=X;break}if(!y)return{output:`Error: Local file "${u}" not found in terminal directory. Use vim ${u} to create it first.`,isError:!0};const b=y.split(/\r?\n/).map(H=>H.trim()).filter(H=>H.length>0);if(b.length===0)return{output:`File "${u}" is empty.`,isError:!0};const w=b[0].includes("	")?"	":",",z=b[0].split(w).map(H=>H.trim().replace(/^['"]|['"]$/g,""));let Y=[],U=0;z.every(H=>isNaN(Number(H)))&&b.length>1?(Y=z.map(H=>H.replace(/[^a-zA-Z0-9_]/g,"_")),U=1):(Y=z.map((H,X)=>`col_${X+1}`),U=0);try{const H=Y.map(W=>`${W} TEXT`).join(", ");this.db.exec(`CREATE TABLE IF NOT EXISTS ${i} (${H});`);let X=0;for(let W=U;W<b.length;W++){const te=b[W].split(w).map(ge=>ge.trim().replace(/^['"]|['"]$/g,"")),I=Y.map((ge,xe)=>`'${(te[xe]??"").replace(/'/g,"''")}'`);this.db.exec(`INSERT INTO ${i} VALUES (${I.join(", ")});`),X++}return await this.persistDatabase(),{output:`Successfully loaded ${X} records from "${u}" into table "${i}".`,isError:!1}}catch(H){return{output:"Error loading CSV into table: "+H.message,isError:!0}}}async handleStoreSaveCommand(r){const u=r.trim(),i=u.match(/^(?:STORE|SAVE)\s+([a-zA-Z0-9_]+)\s+INTO\s+['"]?([^'"]+)['"]?/i);if(i){const d=i[1].trim();let p=i[2].trim();p.includes(".")||(p+=".csv");try{const y=this.db.exec(`SELECT * FROM ${d};`);if(y.length===0)return{output:`Table "${d}" is empty or does not exist.`,isError:!0};const h=y[0].columns,b=y[0].values;let w=h.join(",")+`
`;return b.forEach(z=>{const Y=z.map(U=>U===null?"":String(U).includes(",")?`"${U}"`:String(U)).join(",");w+=Y+`
`}),this.saveLocalFileCallback?this.saveLocalFileCallback(p,w):await this.hadoopDB.saveLocalFile(p,w),{output:`Successfully stored ${b.length} rows from table "${d}" into "${p}".`,isError:!1}}catch(y){return{output:`Error storing table "${d}": `+y.message,isError:!0}}}if(!this.db)return{output:"Database empty.",isError:!0};let f=u.split(/\s+/)[1]||"database.db";f.endsWith(".db")||(f+=".db");try{const d=this.db.export();let p="";const y=new Uint8Array(d);for(let h=0;h<y.byteLength;h++)p+=String.fromCharCode(y[h]);return this.saveLocalFileCallback?this.saveLocalFileCallback(f,p):await this.hadoopDB.saveLocalFile(f,p),{output:`Database saved as "${f}".`,isError:!1}}catch(d){return{output:"Error saving database: "+d.message,isError:!0}}}async executeCommand(r){var c,f,d,p;if(await this.init(),!this.db&&this.sqlLib)try{this.db=new this.sqlLib.Database}catch{}const u=r.trim(),i=u.toLowerCase();if(!u)return{output:"",isError:!1};if(i==="help")return{output:`commands added:
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
`}),{output:w.trim(),isError:!1}}else return{output:`Error: Table '${h}' does not exist.`,isError:!0}}catch(b){return{output:"Error: "+b.message,isError:!0}}}if(i.startsWith("ask ")){const y=r.match(/^ask\s+"(.+)"$/i)||r.match(/^ask\s+(.+)$/i);if(!y)return{output:'Usage: ask "your question"',isError:!0};const h=y[1].replace(/^["']|["']$/g,"");try{const w=await(await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:"Bearer ","Content-Type":"application/json"},body:JSON.stringify({model:"llama3-8b-8192",messages:[{role:"system",content:"Return only the single most important point from the user's message. No extra explanation."},{role:"user",content:h}],max_tokens:50,temperature:0})})).json();return{output:((p=(d=(f=(c=w==null?void 0:w.choices)==null?void 0:c[0])==null?void 0:f.message)==null?void 0:d.content)==null?void 0:p.trim())||"ASK Ksql RELATED THINGS....",isError:!1}}catch(b){return{output:"Error: "+b.message,isError:!0}}}if(i==="contact"||i==="request"||i==="feedback")return window.open("https://hacker1514.github.io/python/contact.html","_blank"),{output:"Opening developer portal...",isError:!1};if(!this.db)return{output:"Database not initialized.",isError:!0};try{const y=this.db.exec(r);if(await this.persistDatabase(),y.length>0){let h="";return y.forEach(b=>{h+=b.columns.join(" | ")+`
`,h+="-".repeat(b.columns.join(" | ").length)+`
`,b.values.forEach(w=>{h+=w.join(" | ")+`
`})}),{output:h.trim(),isError:!1}}else return{output:"Query executed successfully.",isError:!1}}catch(y){return{output:"Error: "+y.message,isError:!0}}}}const qh=({backend:E})=>{const[r,u]=he.useState("~"),[i,c]=he.useState(""),[f,d]=he.useState(-1),[p,y]=he.useState([]),[h,b]=he.useState(""),[w,z]=he.useState(!1),[Y,U]=he.useState(""),[ae,H]=he.useState(""),[X,W]=he.useState("INSERT"),[te,I]=he.useState(""),[ge,xe]=he.useState(!1),[ie,Ie]=he.useState(!1),[Je,Vt]=he.useState(!1),Ge=he.useRef(new Uh),[Pe,qt]=he.useState(null),[Ze,rt]=he.useState(null),x=he.useRef(null),B=he.useRef(null),Z=he.useRef(null),[be,V]=he.useState([{id:"init_banner",type:"banner",content:""}]);he.useEffect(()=>{try{Ge.current.saveLocalFileCallback=(L,J)=>{E.saveLocalFile(L,J)},Ge.current.init().catch(()=>{})}catch{}},[E]),he.useEffect(()=>{var L,J;w?(J=Z.current)==null||J.focus():(L=x.current)==null||L.scrollIntoView({behavior:"smooth"})},[be,w,Ze,ge,ie,Je]);const v=()=>{var L,J;w?(L=Z.current)==null||L.focus():(J=B.current)==null||J.focus()},M=L=>{const J=L.target.value;if(c(J),!Ze&&!ge&&!ie&&!Je&&J.trim()){const ee=Oh(J,E.getNameNode().getNamespace());ee.length>0&&ee[0].toLowerCase().startsWith(J.toLowerCase())?b(ee[0]):b("")}else b("")},j=L=>{const J=L.toLowerCase();return J.includes("error")||J.includes("not recognized")||J.includes("unsupported")||J.includes("usage:")||J.includes("no such file")||J.includes("missing")||J.startsWith("mkdir:")||J.startsWith("ls:")||J.startsWith("cat:")||J.startsWith("put:")||J.startsWith("rm:")||J.startsWith("du:")},G=()=>{const L=document.createElement("input");L.type="file",L.accept=".db",L.onchange=async J=>{var Qe;const ee=(Qe=J.target.files)==null?void 0:Qe[0];if(!ee)return;const Re=new FileReader;Re.onload=async gt=>{try{const Tt=Ge.current.getSqlLib(),F=Ge.current.getDatabase();if(!Tt||!F)throw new Error("KSQL Engine not initialized");const ce=new Tt.Database(new Uint8Array(gt.target.result)),Ce=ce.exec("SELECT sql FROM sqlite_master WHERE type='table';");Ce.length>0&&Ce[0].values.length>0&&Ce[0].values.forEach(Le=>{const st=Le[0];try{F.run(st)}catch{}});const le=ce.exec("SELECT name FROM sqlite_master WHERE type='table';");le.length>0&&le[0].values.length>0&&le[0].values.forEach(Le=>{const st=Le[0],Zt=ce.exec(`SELECT * FROM ${st};`);if(Zt.length>0){const Gn=Zt[0].columns;Zt[0].values.forEach(hi=>{const Fl=hi.map(Kt=>typeof Kt=="string"?`'${Kt.replace(/'/g,"''")}'`:Kt===null?"NULL":Kt).join(", "),Yl=`INSERT INTO ${st} (${Gn.join(", ")}) VALUES (${Fl});`;try{F.run(Yl)}catch{}})}}),await Ge.current.persistDatabase(),V(Le=>[...Le,{id:`ksql_add_${Date.now()}`,type:"output",content:"Imported .db file data and schema added successfully."}])}catch(Tt){V(F=>[...F,{id:`ksql_add_err_${Date.now()}`,type:"error",content:"Error importing database: "+Tt.message}])}},Re.readAsArrayBuffer(ee)},L.click()},ne=()=>{const L=document.createElement("input");L.type="file",L.accept=".ksql,.sql",L.onchange=J=>{var Qe;const ee=(Qe=J.target.files)==null?void 0:Qe[0];if(!ee)return;const Re=new FileReader;Re.onload=async gt=>{const Tt=gt.target.result,F=await Ge.current.executeCommand(Tt);V(ce=>[...ce,{id:`ksql_run_${Date.now()}`,type:F.isError?"error":"output",content:F.output||"Commands executed successfully!"}])},Re.readAsText(ee)},L.click()},ue=async L=>{var J;if((L.key==="Tab"||L.key==="ArrowRight")&&h&&!Ze&&!ge&&!ie&&!Je){const ee=((J=B.current)==null?void 0:J.selectionStart)===i.length;(L.key==="Tab"||ee)&&(L.preventDefault(),c(h),b(""))}else if(L.key==="ArrowUp"){if(L.preventDefault(),p.length>0){const ee=f<p.length-1?f+1:f;d(ee);const Re=p[p.length-1-ee];c(Re),b("")}}else if(L.key==="ArrowDown")if(L.preventDefault(),f>0){const ee=f-1;d(ee);const Re=p[p.length-1-ee];c(Re),b("")}else f===0&&(d(-1),c(""),b(""));else if(L.key==="Enter"){if(L.preventDefault(),ge){const F=i.trim(),ce=F.toLowerCase();if(c(""),b(""),!F){V(le=>[...le,{id:`ksql_empty_${Date.now()}`,type:"ksql_prompt",command:"",content:""}]);return}if(y(le=>[...le,F]),d(-1),["exit","exit()","quit","quit()","exit;"].includes(ce)){xe(!1),V(le=>[...le,{id:`ksql_p_${Date.now()}`,type:"ksql_prompt",command:F,content:""},{id:`ksql_exit_${Date.now()}`,type:"output",content:"[KSQL] Exited KSQL shell mode. Returned to Linux shell."}]);return}if(ce==="clear"){V([]);return}if(ce==="add"){V(le=>[...le,{id:`ksql_p_${Date.now()}`,type:"ksql_prompt",command:F,content:""}]),G();return}if(ce==="run"){V(le=>[...le,{id:`ksql_p_${Date.now()}`,type:"ksql_prompt",command:F,content:""}]),ne();return}const Ce=await Ge.current.executeCommand(F);V(le=>[...le,{id:`ksql_p_${Date.now()}`,type:"ksql_prompt",command:F,content:""},{id:`ksql_o_${Date.now()}`,type:Ce.isError?"error":"output",content:Ce.output}]);return}if(ie){const F=i.trim(),ce=F.toLowerCase();if(c(""),b(""),!F){V(le=>[...le,{id:`python_empty_${Date.now()}`,type:"python_prompt",command:"",content:""}]);return}if(y(le=>[...le,F]),d(-1),["exit","exit()","quit","quit()"].includes(ce)){Ie(!1),V(le=>[...le,{id:`python_p_${Date.now()}`,type:"python_prompt",command:F,content:""},{id:`python_exit_${Date.now()}`,type:"output",content:"[Python] Exited Python shell mode. Returned to the terminal."}]);return}if(ce==="clear"){V([]);return}const Ce=await E.executePythonRepl(F);V(le=>[...le,{id:`python_p_${Date.now()}`,type:"python_prompt",command:F,content:""},...Ce?[{id:`python_o_${Date.now()}`,type:j(Ce)?"error":"output",content:Ce}]:[]]);return}if(Je){const F=i.trim(),ce=F.toLowerCase();if(c(""),b(""),!F){V(le=>[...le,{id:`spark_empty_${Date.now()}`,type:"pyspark_prompt",command:"",content:""}]);return}if(y(le=>[...le,F]),d(-1),["exit","exit()","quit","quit()","exit;"].includes(ce)){Vt(!1),V(le=>[...le,{id:`spark_p_${Date.now()}`,type:"pyspark_prompt",command:F,content:""},{id:`spark_exit_${Date.now()}`,type:"output",content:"[PySpark] Exited PySpark shell mode. Returned to Linux shell."}]);return}if(ce==="clear"){V([]);return}const Ce=await E.executePySparkRepl(F);V(le=>[...le,{id:`spark_p_${Date.now()}`,type:"pyspark_prompt",command:F,content:""},...Ce?[{id:`spark_o_${Date.now()}`,type:j(Ce)?"error":"output",content:Ce}]:[]]);return}if(Ze&&Pe){const F=i,ce=Ze,Ce=Pe;qt(null),rt(null),c("");const le=`${Ce} ${JSON.stringify(F)}`,Le=E.executeCLI(le);if(Le.startsWith("__NEED_INPUT__:")){const st=Le.substring(15);qt(le),rt(st),V(Zt=>[...Zt,{id:`in_resp_${Date.now()}`,type:"input_prompt",command:F,content:ce}])}else V(st=>[...st,{id:`in_resp_${Date.now()}`,type:"input_prompt",command:F,content:ce},{id:`in_out_${Date.now()}`,type:j(Le)?"error":"output",content:Le}]);return}const ee=i.trim();if(!ee){V(F=>[...F,{id:`empty_${Date.now()}`,type:"prompt",workingDir:E.getWorkingDir(),command:"",content:""}]);return}if(ee.startsWith("vim ")||ee.startsWith("vi ")){const F=ee.split(/\s+/)[1]||"file.txt",ce=E.readLocalFile(F);U(F),H(ce!==void 0?ce:""),z(!0),W("INSERT"),c(""),b("");return}if(y(F=>[...F,ee]),d(-1),ee==="clear"){V([]),c(""),b("");return}const Re=E.getWorkingDir(),Qe=E.executeCLI(ee),gt=E.getWorkingDir();if(u(gt),Qe==="__LAUNCH_KSQL__"){xe(!0),await Ge.current.init(),V(F=>[...F,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:Re,command:ee,content:""},{id:`ksql_welcome_${Date.now()}`,type:"output",content:`KSQL Database Engine Active (SQLite WebAssembly Local Engine)
type help, to see all commands
type exit or quit to return to Linux shell.`}]),c(""),b("");return}if(Qe==="__LAUNCH_PYTHON__"){Ie(!0);const F=await E.executePythonRepl("pass");V(ce=>[...ce,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:Re,command:ee,content:""},{id:`python_welcome_${Date.now()}`,type:j(F)?"error":"output",content:`Python WebAssembly interactive shell. Variables persist between commands.
Type exit or quit to return to the terminal.${F?`
${F}`:""}`}]),c(""),b("");return}if(Qe==="__LAUNCH_PYSPARK__"){Vt(!0);const F=await E.executePySparkRepl("pass");V(ce=>[...ce,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:Re,command:ee,content:""},{id:`pyspark_welcome_${Date.now()}`,type:"output",content:`Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\\ \\/ _ \\/ _ \`/ __/  '_/
   /__ / .__/\\_,_/_/ /_/\\_\\   local PySpark-compatible shell
      /_/

Local Pyodide Python REPL with PySpark-compatible APIs.
SparkSession is available as 'spark'; SparkContext as 'sc'.
Type exit or quit to return to the terminal.${F?`
${F}`:""}`}]),c(""),b("");return}if(Qe.startsWith("__DOWNLOAD_FILE__:")){const F=Qe.substring(18),ce=E.readLocalFile(F);if(ce!==void 0){const Ce=new Blob([ce],{type:"text/plain;charset=utf-8"}),le=URL.createObjectURL(Ce),Le=document.createElement("a");Le.href=le,Le.download=F,document.body.appendChild(Le),Le.click(),document.body.removeChild(Le),URL.revokeObjectURL(le),V(st=>[...st,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:Re,command:ee,content:""},{id:`dl_out_${Date.now()}`,type:"output",content:`Downloaded "${F}".`}])}else V(Ce=>[...Ce,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:Re,command:ee,content:""},{id:`dl_err_${Date.now()}`,type:"error",content:`Error: File "${F}" not found.`}]);c(""),b("");return}if(Qe==="__GET_FILE__"){const F=document.createElement("input");F.type="file",F.onchange=ce=>{var Le;const Ce=(Le=ce.target.files)==null?void 0:Le[0];if(!Ce)return;const le=new FileReader;le.onload=st=>{const Zt=st.target.result;E.saveLocalFile(Ce.name,Zt),V(Gn=>[...Gn,{id:`get_out_${Date.now()}`,type:"output",content:`Imported "${Ce.name}".`}])},le.readAsText(Ce)},V(ce=>[...ce,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:Re,command:ee,content:""}]),F.click(),c(""),b("");return}if(Qe.startsWith("__NEED_INPUT__:")){const F=Qe.substring(15);qt(ee),rt(F),V(ce=>[...ce,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:Re,command:ee,content:""}]),c(""),b("");return}const Tt=j(Qe);V(F=>[...F,{id:`cmd_${Date.now()}`,type:"prompt",workingDir:Re,command:ee,content:""},{id:`out_${Date.now()}`,type:Tt?"error":"output",content:Qe}]),c(""),b("")}},_e=L=>{L.key==="Escape"&&(L.preventDefault(),W(J=>{const ee=J==="INSERT"?"COMMAND":"INSERT";return ee==="INSERT"&&setTimeout(()=>{var Re;return(Re=Z.current)==null?void 0:Re.focus()},10),ee}))},We=L=>{const J=L.trim();J===":wq"||J===":x"||J==="wq"?(E.saveLocalFile(Y,ae),z(!1),V(ee=>[...ee,{id:`vim_save_${Date.now()}`,type:"output",content:`[Vim] "${Y}" saved and written.`}])):J===":q!"||J===":q"||J==="q"?z(!1):(J===":w"||J==="w")&&(E.saveLocalFile(Y,ae),I(""),W("INSERT"),setTimeout(()=>{var ee;return(ee=Z.current)==null?void 0:ee.focus()},10))};return w?q.jsxs("div",{className:"w-screen h-screen bg-black text-white font-mono text-xs sm:text-sm p-2 sm:p-4 flex flex-col justify-between selection:bg-yellow-400 selection:text-black",children:[q.jsxs("div",{className:"bg-black px-2 sm:px-3 py-1 sm:py-1.5 flex justify-between items-center text-[10px] sm:text-xs border-b border-cyan-500/40",children:[q.jsxs("span",{className:"text-yellow-400 font-black",children:["VIM - ",Y]}),q.jsxs("span",{className:"text-cyan-400 font-bold hidden sm:inline",children:["Press ",q.jsx("code",{className:"text-cyan-300 font-bold",children:"ESC"})," to toggle INSERT / COMMAND modes (:wq to save & exit)"]})]}),q.jsx("textarea",{ref:Z,value:ae,onChange:L=>H(L.target.value),onKeyDown:_e,className:"flex-1 w-full bg-black text-green-400 font-mono p-2 sm:p-3 focus:outline-none resize-none leading-relaxed text-xs sm:text-sm",autoFocus:!0,spellCheck:!1}),q.jsxs("div",{className:"bg-black px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs border-t border-cyan-500/40 flex items-center justify-between font-mono",children:[X==="INSERT"?q.jsx("span",{className:"text-green-400 font-bold",children:"-- INSERT --"}):q.jsxs("div",{className:"flex items-center space-x-2 flex-1",children:[q.jsx("span",{className:"text-yellow-400 font-bold",children:":"}),q.jsx("input",{type:"text",value:te,onChange:L=>I(L.target.value),onKeyDown:L=>{L.key==="Escape"?(L.preventDefault(),W("INSERT"),I(""),setTimeout(()=>{var J;return(J=Z.current)==null?void 0:J.focus()},10)):L.key==="Enter"&&(L.preventDefault(),We(te))},placeholder:"wq to save and exit, q! to quit",className:"bg-black border-none text-yellow-300 focus:outline-none flex-1 font-mono font-bold text-xs",autoFocus:!0})]}),q.jsxs("span",{className:"text-cyan-400 font-bold",children:[ae.split(`
`).length,"L, ",ae.length,"C"]})]})]}):q.jsx("div",{onClick:v,className:"w-screen h-screen bg-black text-white font-mono text-xs sm:text-base p-2 sm:p-4 overflow-y-auto flex flex-col justify-between selection:bg-cyan-500 selection:text-black cursor-text leading-relaxed",children:q.jsxs("div",{className:"space-y-2 sm:space-y-3 w-full text-left",children:[be.map(L=>L.type==="banner"?q.jsxs("div",{className:"font-mono text-[10px] sm:text-sm leading-tight",children:[q.jsxs("pre",{className:"whitespace-pre font-mono text-cyan-400 font-bold overflow-x-auto max-w-full",children:[`+------------------------+--------------------------------------+
|                        |                `,q.jsx("span",{className:"text-yellow-400 font-black",children:"HADOOP"}),`                |
|                        |                                      |
+------------------------+--------------------------------------+
|  `,q.jsx("span",{className:"text-cyan-400 font-bold",children:"DEVELOPER             "}),"|  ",q.jsx("span",{className:"text-white font-bold",children:"Niranjan Kumar K                    "}),`|
|  `,q.jsx("span",{className:"text-cyan-400 font-bold",children:"ENVIRONMENT           "}),"|  ",q.jsx("span",{className:"text-green-400 font-bold",children:"Hadoop Simulation                   "}),`|
|                        |                                      |
+------------------------+--------------------------------------+`]}),q.jsx("div",{className:"text-green-400 font-bold pt-1.5 sm:pt-2 text-xs sm:text-sm",children:"  ✓  Terminal initialized successfully"})]},L.id):L.type==="prompt"?q.jsxs("div",{className:"flex items-center font-mono text-xs sm:text-base whitespace-nowrap overflow-x-auto",children:[q.jsxs("span",{className:"shrink-0 whitespace-pre",children:[q.jsx("span",{className:"text-green-400 font-bold",children:"[[ "}),q.jsx("span",{className:"text-cyan-400 font-bold",children:"K "}),q.jsx("span",{className:"text-yellow-400 font-bold",children:": "}),q.jsx("span",{className:"text-yellow-400 font-bold",children:L.workingDir||"~"}),q.jsx("span",{className:"text-green-400 font-bold",children:" ]] "}),q.jsx("span",{className:"text-yellow-400 font-bold",children:": "}),q.jsx("span",{className:"text-white font-bold",children:"$ "})]}),q.jsx("span",{className:"text-yellow-300 font-semibold",children:L.command})]},L.id):L.type==="ksql_prompt"?q.jsxs("div",{className:"flex items-center font-mono text-xs sm:text-base whitespace-nowrap overflow-x-auto",children:[q.jsx("span",{className:"text-yellow-400 font-bold shrink-0 whitespace-pre",children:">> "}),q.jsx("span",{className:"text-cyan-300 font-semibold",children:L.command})]},L.id):L.type==="python_prompt"?q.jsxs("div",{className:"flex items-center font-mono text-xs sm:text-base whitespace-nowrap overflow-x-auto",children:[q.jsx("span",{className:"text-green-400 font-bold shrink-0 whitespace-pre",children:">>> "}),q.jsx("span",{className:"text-yellow-300 font-semibold",children:L.command})]},L.id):L.type==="pyspark_prompt"?q.jsxs("div",{className:"flex items-center font-mono text-xs sm:text-base whitespace-nowrap overflow-x-auto",children:[q.jsx("span",{className:"text-green-400 font-bold shrink-0 whitespace-pre",children:">>> "}),q.jsx("span",{className:"text-yellow-300 font-semibold",children:L.command})]},L.id):L.type==="input_prompt"?q.jsxs("div",{className:"flex items-center font-mono text-xs sm:text-base whitespace-nowrap overflow-x-auto",children:[q.jsx("span",{className:"text-green-400 font-bold shrink-0 whitespace-pre",children:L.content}),q.jsx("span",{className:"text-yellow-300 font-semibold pl-1",children:L.command})]},L.id):q.jsx("pre",{className:`whitespace-pre-wrap font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto ${L.type==="error"?"text-red-400 font-bold":"text-green-400 font-medium"}`,children:L.content},L.id)),q.jsx("div",{className:"font-mono text-xs sm:text-base",children:q.jsxs("div",{className:"flex items-center whitespace-nowrap relative overflow-x-auto",children:[ge?q.jsx("span",{className:"text-yellow-400 font-bold shrink-0 whitespace-pre select-none",children:">> "}):ie||Je?q.jsx("span",{className:"text-green-400 font-bold shrink-0 whitespace-pre select-none",children:">>> "}):Ze?q.jsx("span",{className:"text-green-400 font-bold shrink-0 whitespace-pre select-none",children:Ze}):q.jsxs("span",{className:"shrink-0 flex items-center whitespace-pre select-none",children:[q.jsx("span",{className:"text-green-400 font-bold",children:"[[ "}),q.jsx("span",{className:"text-cyan-400 font-bold",children:"K "}),q.jsx("span",{className:"text-yellow-400 font-bold",children:": "}),q.jsx("span",{className:"text-yellow-400 font-bold",children:r}),q.jsx("span",{className:"text-green-400 font-bold",children:" ]] "}),q.jsx("span",{className:"text-yellow-400 font-bold",children:": "}),q.jsx("span",{className:"text-white font-bold",children:"$ "})]}),q.jsxs("div",{className:"relative flex-1 flex items-center min-w-[120px]",children:[q.jsx("input",{ref:B,type:"text",value:i,onChange:M,onKeyDown:ue,className:"w-full bg-black border-none text-yellow-300 focus:outline-none placeholder-cyan-900 font-mono font-semibold pl-0.5 text-xs sm:text-base z-10",autoFocus:!0,spellCheck:!1}),!Ze&&!ge&&!ie&&!Je&&h&&h.toLowerCase().startsWith(i.toLowerCase())&&q.jsxs("div",{className:"absolute left-0.5 text-cyan-700 font-mono font-semibold pointer-events-none z-0 whitespace-pre text-xs sm:text-base",children:[q.jsx("span",{className:"invisible",children:i}),q.jsx("span",{children:h.slice(i.length)})]})]})]})}),q.jsx("div",{ref:x})]})})};class jh{constructor(r=0){O(this,"virtualTime");O(this,"speed",1);O(this,"isRunning",!1);O(this,"timerId",null);O(this,"listeners",new Set);O(this,"tickIntervalMs",100);this.virtualTime=r}start(){this.isRunning||(this.isRunning=!0,this.scheduleNextTick())}pause(){this.isRunning=!1,this.timerId!==null&&(clearTimeout(this.timerId),this.timerId=null)}setSpeed(r){this.speed=r}getSpeed(){return this.speed}getTime(){return this.virtualTime}setTime(r){this.virtualTime=r}isActive(){return this.isRunning}advanceBy(r){this.virtualTime+=r,this.notifyListeners(r)}subscribe(r){return this.listeners.add(r),()=>this.listeners.delete(r)}scheduleNextTick(){this.isRunning&&(this.timerId=window.setTimeout(()=>{if(!this.isRunning)return;const r=this.tickIntervalMs*this.speed;this.virtualTime+=r,this.notifyListeners(r),this.scheduleNextTick()},this.tickIntervalMs))}notifyListeners(r){this.listeners.forEach(u=>u(this.virtualTime,r))}}class Bh{constructor(){O(this,"heap",[]);O(this,"sequenceCounter",0)}enqueue(r,u,i){this.sequenceCounter++;const c={scheduledTime:u,sequenceId:this.sequenceCounter,event:r,action:i};return this.heap.push(c),this.bubbleUp(this.heap.length-1),c}dequeue(){if(this.heap.length===0)return;const r=this.heap[0],u=this.heap.pop();return this.heap.length>0&&(this.heap[0]=u,this.sinkDown(0)),r}peek(){return this.heap[0]}isEmpty(){return this.heap.length===0}size(){return this.heap.length}clear(){this.heap=[],this.sequenceCounter=0}compare(r,u){return r.scheduledTime!==u.scheduledTime?r.scheduledTime-u.scheduledTime:r.sequenceId-u.sequenceId}bubbleUp(r){for(;r>0;){const u=Math.floor((r-1)/2);if(this.compare(this.heap[r],this.heap[u])<0)[this.heap[r],this.heap[u]]=[this.heap[u],this.heap[r]],r=u;else break}}sinkDown(r){const u=this.heap.length;for(;;){const i=2*r+1,c=2*r+2;let f=r;if(i<u&&this.compare(this.heap[i],this.heap[f])<0&&(f=i),c<u&&this.compare(this.heap[c],this.heap[f])<0&&(f=c),f!==r)[this.heap[r],this.heap[f]]=[this.heap[f],this.heap[r]],r=f;else break}}}class Fh{constructor(){O(this,"events",[]);O(this,"listeners",new Set);O(this,"eventCounter",0)}createEvent(r,u,i,c={},f=Date.now(),d){return this.eventCounter++,{eventId:`evt_${this.eventCounter.toString().padStart(6,"0")}`,timestamp:f,type:r,category:u,source:i,target:d,payload:c,simulationVersion:1}}record(r){this.events.push(r),this.listeners.forEach(u=>u(r))}getEvents(){return this.events}getEventsByCategory(r){return this.events.filter(u=>u.category===r)}getEventsUpTo(r){return this.events.filter(u=>u.timestamp<=r)}getEventIndex(r){return this.events.findIndex(u=>u.eventId===r)}subscribe(r){return this.listeners.add(r),()=>this.listeners.delete(r)}clear(){this.events=[],this.eventCounter=0}loadFromSnapshot(r){this.events=[...r],this.eventCounter=r.length}}class Yh{constructor(r=12345){O(this,"state");this.state=r}nextFloat(){let r=this.state+=1831565813;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}nextInt(r,u){return Math.floor(this.nextFloat()*(u-r+1))+r}pickOne(r){const u=Math.floor(this.nextFloat()*r.length);return r[u]}reset(r){this.state=r}getState(){return this.state}}class $h{constructor(r=12345){O(this,"clock");O(this,"priorityQueue");O(this,"eventStore");O(this,"rng");O(this,"stateListeners",new Set);O(this,"seed");this.seed=r,this.clock=new jh(0),this.priorityQueue=new Bh,this.eventStore=new Fh,this.rng=new Yh(r),this.clock.subscribe(u=>{this.processEventsUpTo(u)})}getClock(){return this.clock}getEventStore(){return this.eventStore}getRNG(){return this.rng}getSeed(){return this.seed}scheduleEvent(r,u,i,c,f,d={},p){const y=this.clock.getTime()+Math.max(0,c),h=this.eventStore.createEvent(r,u,i,d,y,p);return this.priorityQueue.enqueue(h,y,()=>{this.eventStore.record(h),f(),this.notifyStateChange()})}processEventsUpTo(r){let u=0;for(;!this.priorityQueue.isEmpty();){const i=this.priorityQueue.peek();if(!i||i.scheduledTime>r)break;const c=this.priorityQueue.dequeue();this.clock.setTime(c.scheduledTime),c.action(),u++}return u>0&&this.notifyStateChange(),u}stepOneEvent(){if(this.priorityQueue.isEmpty())return!1;const r=this.priorityQueue.dequeue();return this.clock.setTime(r.scheduledTime),r.action(),this.notifyStateChange(),!0}stepEvents(r){let u=0;for(let i=0;i<r&&this.stepOneEvent();i++)u++;return u}stepTime(r){const u=this.clock.getTime()+r,i=this.processEventsUpTo(u);return this.clock.setTime(u),this.notifyStateChange(),i}play(){this.clock.start()}pause(){this.clock.pause()}setSpeed(r){this.clock.setSpeed(r)}subscribeStateChange(r){return this.stateListeners.add(r),()=>this.stateListeners.delete(r)}notifyStateChange(){this.stateListeners.forEach(r=>r())}reset(r=this.seed){this.pause(),this.seed=r,this.clock.setTime(0),this.priorityQueue.clear(),this.eventStore.clear(),this.rng.reset(r),this.notifyStateChange()}}class Lo extends Error{constructor(r){super(r),this.name="HDFSQuotaError"}}class Gh{constructor(){O(this,"root");O(this,"snapshots",new Map);this.root={name:"",path:"/",type:"DIRECTORY",owner:"hdfs",group:"supergroup",permissions:"drwxr-xr-x",createdAt:Date.now(),modifiedAt:Date.now(),children:new Map}}getRoot(){return this.root}normalizePath(r){return!r||r==="/"?"/":"/"+r.split("/").filter(Boolean).join("/")}resolvePath(r){const u=this.normalizePath(r);if(u==="/")return this.root;const i=u.split("/").filter(Boolean);let c=this.root;for(const f of i){if(c.type!=="DIRECTORY")return;const d=c.children.get(f);if(!d)return;c=d}return c}mkdir(r,u=!0,i="user"){const c=this.normalizePath(r);if(c==="/")return this.root;const f=c.split("/").filter(Boolean);let d=this.root,p="";for(let y=0;y<f.length;y++){const h=f[y];p+="/"+h;let b=d.children.get(h);if(b)if(b.type==="DIRECTORY")d=b;else throw new Error(`File exists at path component: ${p}`);else{if(y<f.length-1&&!u)throw new Error(`Parent directory does not exist: ${p}`);if(d.quotaNamespace&&d.children.size>=d.quotaNamespace)throw new Lo(`Namespace quota exceeded on directory ${d.path}`);const w={name:h,path:p,type:"DIRECTORY",owner:i,group:"supergroup",permissions:"drwxr-xr-x",createdAt:Date.now(),modifiedAt:Date.now(),children:new Map};d.children.set(h,w),d.modifiedAt=Date.now(),d=w}}return d}createFile(r,u,i=3,c=134217728,f="user"){const d=this.normalizePath(r),p=d.substring(0,d.lastIndexOf("/"))||"/",y=d.substring(d.lastIndexOf("/")+1),h=this.mkdir(p,!0,f);if(h.quotaNamespace&&h.children.size>=h.quotaNamespace)throw new Lo(`Namespace quota exceeded on directory ${h.path}`);if(h.quotaStorageBytes&&u*i>h.quotaStorageBytes)throw new Lo(`Storage quota exceeded on directory ${h.path}`);const b={name:y,path:d,type:"FILE",owner:f,group:"supergroup",permissions:"-rw-r--r--",createdAt:Date.now(),modifiedAt:Date.now(),sizeBytes:u,replicationFactor:i,blockSizeBytes:c,blocks:[]};return h.children.set(y,b),h.modifiedAt=Date.now(),b}deletePath(r,u=!1){const i=this.normalizePath(r);if(i==="/")throw new Error("Cannot delete root directory");const c=i.substring(0,i.lastIndexOf("/"))||"/",f=i.substring(i.lastIndexOf("/")+1),d=this.resolvePath(c);if(!d||d.type!=="DIRECTORY")return!1;const p=d.children.get(f);if(!p)return!1;if(p.type==="DIRECTORY"&&p.children.size>0&&!u)throw new Error(`Directory is not empty: ${i}`);return d.children.delete(f),d.modifiedAt=Date.now(),!0}createSnapshot(r,u){const i=this.resolvePath(r);if(!i||i.type!=="DIRECTORY")throw new Error(`Directory not found for snapshot: ${r}`);const c=`${r}/.snapshot/${u}`;return this.snapshots.set(c,JSON.parse(JSON.stringify(i))),c}getSnapshots(){return Array.from(this.snapshots.keys())}setQuota(r,u,i){const c=this.resolvePath(r);if(!c||c.type!=="DIRECTORY")throw new Error(`Directory not found: ${r}`);c.quotaNamespace=u,c.quotaStorageBytes=i}}class Qh{chooseTargets(r,u,i,c=new Set){const f=r.filter(U=>U.state==="RUNNING"&&U.type==="DATANODE"&&!c.has(U.id));if(f.length===0)return[];const d=[],p=Math.min(i,f.length),y=new Map;f.forEach(U=>{y.has(U.rackId)||y.set(U.rackId,[]),y.get(U.rackId).push(U)});const h=Array.from(y.keys());let b;const w=f.find(U=>U.id===u);if(w)b=w;else{const U=y.get(h[Math.floor(Math.random()*h.length)]);b=U[Math.floor(Math.random()*U.length)]}if(d.push(b),d.length>=p)return d;const z=h.filter(U=>U!==b.rackId);let Y;if(z.length>0){const U=z[Math.floor(Math.random()*z.length)],ae=y.get(U);Y=ae[Math.floor(Math.random()*ae.length)],d.push(Y)}else{const U=y.get(b.rackId).filter(ae=>ae.id!==b.id);U.length>0&&(Y=U[Math.floor(Math.random()*U.length)],d.push(Y))}if(d.length>=p)return d;if(Y){const U=(y.get(Y.rackId)||[]).filter(ae=>!d.some(H=>H.id===ae.id));if(U.length>0){const ae=U[Math.floor(Math.random()*U.length)];d.push(ae)}}for(;d.length<p;){const U=f.filter(ae=>!d.some(H=>H.id===ae.id));if(U.length===0)break;d.push(U[Math.floor(Math.random()*U.length)])}return d}}class pi extends Error{constructor(r,u,i){super(`Invalid FSM state transition for ${r}: ${u} -> ${i}`),this.entity=r,this.from=u,this.to=i,this.name="FSMError"}}const Vh={NEW:["STARTING"],STARTING:["RUNNING","UNHEALTHY","DEAD"],RUNNING:["UNHEALTHY","DEAD"],UNHEALTHY:["RUNNING","DEAD"],DEAD:["RECOVERING"],RECOVERING:["RUNNING","DEAD"]};function Bl(E,r){if(E===r)return E;if(!(Vh[E]||[]).includes(r))throw new pi("DataNode",E,r);return r}const Zh={STARTING:["SAFE_MODE"],SAFE_MODE:["ACTIVE","STOPPED"],ACTIVE:["SAFE_MODE","STOPPED"],STOPPED:["STARTING"]};function Zd(E,r){if(E===r)return E;if(!(Zh[E]||[]).includes(r))throw new pi("NameNode",E,r);return r}const Kh={PENDING:["SCHEDULED","KILLED"],SCHEDULED:["RUNNING","KILLED","FAILED"],RUNNING:["SUCCEEDED","FAILED","KILLED"],SUCCEEDED:[],FAILED:["SCHEDULED","KILLED"],KILLED:[]};function $n(E,r){if(E===r)return E;if(!(Kh[E]||[]).includes(r))throw new pi("Task",E,r);return r}const Xh={REQUESTED:["ALLOCATED","EXPIRED"],ALLOCATED:["ACQUIRED","EXPIRED","RELEASED"],ACQUIRED:["RUNNING","RELEASED"],RUNNING:["RELEASED","EXPIRED"],RELEASED:[],EXPIRED:[]};function Kd(E,r){if(E===r)return E;if(!(Xh[E]||[]).includes(r))throw new pi("Container",E,r);return r}class Pd{constructor(){O(this,"inMemoryBlocks",new Map);O(this,"dbName","HadoopSimulatorOPFS");this.initIndexedDB()}initIndexedDB(){if(typeof window<"u"&&"indexedDB"in window){const r=indexedDB.open(this.dbName,1);r.onupgradeneeded=u=>{const i=u.target.result;i.objectStoreNames.contains("blocks")||i.createObjectStore("blocks")}}}async writeBlockData(r,u){if(this.inMemoryBlocks.set(r,u),typeof window<"u"&&"indexedDB"in window)try{const i=indexedDB.open(this.dbName,1);i.onsuccess=c=>{c.target.result.transaction("blocks","readwrite").objectStore("blocks").put(u,r)}}catch(i){console.warn("IndexedDB write warning:",i)}}async readBlockData(r){if(this.inMemoryBlocks.has(r))return this.inMemoryBlocks.get(r)}deleteBlockData(r){this.inMemoryBlocks.delete(r)}calculateChecksum(r){let u=0;for(let i=0;i<r.length;i++)u=(u<<5)-u+r[i],u|=0;return"crc32_"+(u>>>0).toString(16)}}class Ih{constructor(r){O(this,"state","STARTING");O(this,"namespace");O(this,"placementPolicy");O(this,"blockMap",new Map);O(this,"fileContentMap",new Map);O(this,"dataNodes",new Map);O(this,"engine");O(this,"storageEngine");O(this,"heartbeatTimeoutMs",1e4);this.engine=r,this.namespace=new Gh,this.placementPolicy=new Qh,this.storageEngine=new Pd,this.state=Zd("STARTING","SAFE_MODE"),this.engine.scheduleEvent("NAMENODE_ENTER_SAFEMODE","HDFS","NameNode",0,()=>{}),this.engine.scheduleEvent("NAMENODE_LEAVE_SAFEMODE","HDFS","NameNode",1e3,()=>{this.state=Zd("SAFE_MODE","ACTIVE")}),this.scheduleHeartbeatAudit()}getState(){return this.state}getNamespace(){return this.namespace}registerDataNode(r){this.dataNodes.set(r.id,r),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("DATANODE_REGISTERED","HDFS",r.id,{rackId:r.rackId,capacity:r.storageCapacityBytes},this.engine.getClock().getTime()))}getDataNodes(){return Array.from(this.dataNodes.values())}receiveHeartbeat(r,u,i){const c=this.dataNodes.get(r);c&&(c.lastHeartbeatTime=this.engine.getClock().getTime(),c.storageUsedBytes=u,c.blocks=[...i],this.engine.getEventStore().record(this.engine.getEventStore().createEvent("DATANODE_HEARTBEAT","HDFS",r,{usedBytes:u,blockCount:i.length},this.engine.getClock().getTime())))}createAndWriteFile(r,u,i=3,c=134217728,f){const d=new TextEncoder,p=typeof u=="string"?d.encode(u):u,y=typeof u=="string"?u:new TextDecoder().decode(u),h=p.length,b=this.namespace.createFile(r,h,i,c);this.fileContentMap.set(b.path,y);const w=Math.max(1,Math.ceil(h/c)),z=this.getDataNodes();for(let Y=0;Y<w;Y++){const U=`blk_${Date.now()}_${Math.floor(Math.random()*1e5)}`,ae=Y*c,H=Math.min(ae+c,h),X=p.slice(ae,H),W=this.storageEngine.calculateChecksum(X),te=this.placementPolicy.chooseTargets(z,f,i),I=te.map(xe=>({blockId:U,nodeId:xe.id,rackId:xe.rackId,state:"FINALIZED",storagePath:`/data/${U}`,updatedAt:this.engine.getClock().getTime()})),ge={id:U,filePath:b.path,blockIndex:Y,sizeBytes:X.length,checksum:W,checksumStatus:"VALID",generationStamp:1e3+Y,replicas:I,state:"FINALIZED"};this.blockMap.set(U,ge),b.blocks.push(U),te.forEach(xe=>{xe.blocks.push(U),xe.storageUsedBytes+=X.length,this.storageEngine.writeBlockData(U,X)}),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("BLOCK_CREATED","HDFS","NameNode",{blockId:U,filePath:b.path,replicas:te.map(xe=>xe.id)},this.engine.getClock().getTime()))}return b}readFileContent(r){const u=this.namespace.normalizePath(r);return this.fileContentMap.get(u)}getBlock(r){return this.blockMap.get(r)}runFSCK(r="/"){const u={totalFiles:0,totalBlocks:0,totalReplicas:0,underReplicatedBlocks:0,corruptBlocks:0,missingBlocks:0,isHealthy:!0,details:[]},i=this.namespace.resolvePath(r);if(!i)return u.isHealthy=!1,u.details.push(`Path not found: ${r}`),u;const c=[],f=d=>{d.type==="FILE"?c.push(d):d.type==="DIRECTORY"&&d.children.forEach(p=>f(p))};f(i),u.totalFiles=c.length;for(const d of c)for(const p of d.blocks){u.totalBlocks++;const y=this.blockMap.get(p);if(!y){u.missingBlocks++,u.details.push(`Missing metadata for block ${p} in file ${d.path}`);continue}const h=y.replicas.filter(b=>{const w=this.dataNodes.get(b.nodeId);return w&&w.state==="RUNNING"});u.totalReplicas+=h.length,y.checksumStatus==="CORRUPTED"&&(u.corruptBlocks++,u.details.push(`CORRUPT block ${p} in file ${d.path}`)),h.length===0?(u.missingBlocks++,u.details.push(`MISSING block ${p} (0 live replicas) in file ${d.path}`)):h.length<d.replicationFactor&&(u.underReplicatedBlocks++,u.details.push(`Under-replicated block ${p} in file ${d.path}. Expected: ${d.replicationFactor}, Found: ${h.length}`))}return u.isHealthy=u.corruptBlocks===0&&u.missingBlocks===0&&u.underReplicatedBlocks===0,u}triggerReReplication(){let r=0;const u=this.getDataNodes();return this.blockMap.forEach(i=>{const c=i.replicas.filter(p=>{const y=this.dataNodes.get(p.nodeId);return y&&y.state==="RUNNING"}),f=this.namespace.resolvePath(i.filePath),d=f?f.replicationFactor:3;if(c.length>0&&c.length<d){const p=new Set(c.map(b=>b.nodeId)),y=d-c.length;this.placementPolicy.chooseTargets(u,void 0,y,p).forEach(b=>{const w={blockId:i.id,nodeId:b.id,rackId:b.rackId,state:"FINALIZED",storagePath:`/data/${i.id}`,updatedAt:this.engine.getClock().getTime()};i.replicas.push(w),b.blocks.push(i.id),r++,this.engine.getEventStore().record(this.engine.getEventStore().createEvent("BLOCK_REPLICATED","HDFS","NameNode",{blockId:i.id,targetNodeId:b.id},this.engine.getClock().getTime()))})}}),r}scheduleHeartbeatAudit(){this.engine.scheduleEvent("HEARTBEAT_AUDIT","HDFS","NameNode",5e3,()=>{const r=this.engine.getClock().getTime();let u=0;this.dataNodes.forEach(i=>{i.state==="RUNNING"&&r-i.lastHeartbeatTime>this.heartbeatTimeoutMs&&(i.state="DEAD",u++,this.engine.getEventStore().record(this.engine.getEventStore().createEvent("DATANODE_FAILED","FAILURE",i.id,{reason:"Heartbeat timeout"},r)))}),u>0&&this.triggerReReplication(),this.scheduleHeartbeatAudit()})}}class Jh{constructor(r,u,i,c,f,d){O(this,"node");O(this,"nameNode");O(this,"engine");O(this,"storageEngine");O(this,"heartbeatIntervalMs",3e3);this.nameNode=f,this.engine=d,this.storageEngine=new Pd,this.node={id:r,hostname:u,rackId:i,type:"DATANODE",state:"NEW",storageCapacityBytes:c,storageUsedBytes:0,memoryCapacityMb:8192,memoryUsedMb:0,vCoresCapacity:4,vCoresUsed:0,lastHeartbeatTime:d.getClock().getTime(),blocks:[],containers:[]},this.node.state=Bl("NEW","STARTING"),this.node.state=Bl("STARTING","RUNNING"),this.nameNode.registerDataNode(this.node),this.scheduleHeartbeats()}getStorageEngine(){return this.storageEngine}async storeBlock(r,u){await this.storageEngine.writeBlockData(r,u),this.node.blocks.includes(r)||this.node.blocks.push(r),this.node.storageUsedBytes+=u.length}corruptBlockChecksum(r){const u=this.nameNode.getBlock(r);u&&(u.checksumStatus="CORRUPTED",this.engine.getEventStore().record(this.engine.getEventStore().createEvent("BLOCK_CORRUPTED","FAILURE",this.node.id,{blockId:r},this.engine.getClock().getTime())))}kill(){this.node.state=Bl(this.node.state,"DEAD"),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("DATANODE_FAILED","FAILURE",this.node.id,{reason:"Manual kill"},this.engine.getClock().getTime()))}restart(){this.node.state==="DEAD"&&(this.node.state=Bl("DEAD","RECOVERING"),this.node.state=Bl("RECOVERING","RUNNING"),this.node.lastHeartbeatTime=this.engine.getClock().getTime(),this.nameNode.receiveHeartbeat(this.node.id,this.node.storageUsedBytes,this.node.blocks),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("DATANODE_RECOVERED","HDFS",this.node.id,{},this.engine.getClock().getTime())))}scheduleHeartbeats(){this.engine.scheduleEvent("HEARTBEAT_SEND","HDFS",this.node.id,this.heartbeatIntervalMs,()=>{this.node.state==="RUNNING"&&(this.node.lastHeartbeatTime=this.engine.getClock().getTime(),this.nameNode.receiveHeartbeat(this.node.id,this.node.storageUsedBytes,this.node.blocks),this.scheduleHeartbeats())})}}class Ph{constructor(r){O(this,"queues",new Map);O(this,"containers",new Map);O(this,"nodes",new Map);O(this,"engine");O(this,"containerCounter",0);this.engine=r,this.initDefaultQueues()}initDefaultQueues(){[{name:"root.default",capacityPercent:50,maxCapacityPercent:100,usedCapacityPercent:0,usedMemoryMb:0,usedVCores:0,runningApplications:[]},{name:"root.analytics",capacityPercent:30,maxCapacityPercent:70,usedCapacityPercent:0,usedMemoryMb:0,usedVCores:0,runningApplications:[]},{name:"root.research",capacityPercent:20,maxCapacityPercent:50,usedCapacityPercent:0,usedMemoryMb:0,usedVCores:0,runningApplications:[]}].forEach(u=>this.queues.set(u.name,u))}registerNodeManager(r){this.nodes.set(r.id,r)}getQueues(){return Array.from(this.queues.values())}requestContainer(r,u,i,c="root.default",f){const d=this.queues.get(c)||this.queues.get("root.default"),p=Array.from(this.nodes.values()).filter(w=>w.state==="RUNNING"&&w.memoryCapacityMb-w.memoryUsedMb>=u&&w.vCoresCapacity-w.vCoresUsed>=i);if(p.length===0){this.engine.getEventStore().record(this.engine.getEventStore().createEvent("CONTAINER_REJECTED","YARN","ResourceManager",{appId:r,memoryMb:u,vCores:i,reason:"Insufficient cluster resources"},this.engine.getClock().getTime()));return}let y;f&&p.some(w=>w.id===f)?y=p.find(w=>w.id===f):y=p[Math.floor(Math.random()*p.length)],this.containerCounter++;const h=`container_${r}_${this.containerCounter.toString().padStart(4,"0")}`,b={id:h,appId:r,nodeId:y.id,memoryMb:u,vCores:i,state:"REQUESTED",allocatedAt:this.engine.getClock().getTime()};return b.state=Kd("REQUESTED","ALLOCATED"),this.containers.set(h,b),y.memoryUsedMb+=u,y.vCoresUsed+=i,y.containers.push(h),d.usedMemoryMb+=u,d.usedVCores+=i,d.runningApplications.includes(r)||d.runningApplications.push(r),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("CONTAINER_ALLOCATED","YARN","ResourceManager",{containerId:h,appId:r,nodeId:y.id,memoryMb:u,vCores:i},this.engine.getClock().getTime())),b}releaseContainer(r){const u=this.containers.get(r);if(!u||u.state==="RELEASED")return;u.state=Kd(u.state,"RELEASED");const i=this.nodes.get(u.nodeId);i&&(i.memoryUsedMb=Math.max(0,i.memoryUsedMb-u.memoryMb),i.vCoresUsed=Math.max(0,i.vCoresUsed-u.vCores),i.containers=i.containers.filter(c=>c!==r)),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("CONTAINER_RELEASED","YARN","ResourceManager",{containerId:r},this.engine.getClock().getTime()))}}class Wh{constructor(r,u,i,c){O(this,"engine");O(this,"nameNode");O(this,"resourceManager");O(this,"network");O(this,"activeJobs",new Map);O(this,"jobCounter",0);this.engine=r,this.nameNode=u,this.resourceManager=i,this.network=c}submitJob(r,u,i,c="WordCount",f=2,d="root.default"){this.jobCounter++;const p=`job_${Date.now()}_${this.jobCounter.toString().padStart(4,"0")}`,y=`app_${Date.now()}_${this.jobCounter.toString().padStart(4,"0")}`,h=this.nameNode.getNamespace().resolvePath(u);if(!h||h.type!=="FILE")throw new Error(`Input file not found in HDFS: ${u}`);const b=h.blocks,w=b.length,z={id:p,name:r,user:"hadoop",queue:d,inputPath:u,outputPath:i,mapperClass:c,reducerClass:c,numMapTasks:w,numReduceTasks:f,state:"SUBMITTED",mapProgressPercent:0,reduceProgressPercent:0,submitTime:this.engine.getClock().getTime(),mapTasks:[],reduceTasks:[],counters:{"Map input records":0,"Map output records":0,"Reduce input records":0,"Reduce output records":0,"Shuffle bytes":0,"Spilled records":0}};for(let Y=0;Y<w;Y++){const U=b[Y],ae={id:`task_${p}_m_${Y.toString().padStart(3,"0")}`,jobId:p,type:"MAP",taskIndex:Y,state:"PENDING",inputBlockId:U,progressPercent:0,recordsProcessed:0,bytesProcessed:0,spillCount:0,attempts:[]};ae.state=$n("PENDING","SCHEDULED"),z.mapTasks.push(ae)}for(let Y=0;Y<f;Y++){const U={id:`task_${p}_r_${Y.toString().padStart(3,"0")}`,jobId:p,type:"REDUCE",taskIndex:Y,state:"PENDING",progressPercent:0,recordsProcessed:0,bytesProcessed:0,spillCount:0,attempts:[]};U.state=$n("PENDING","SCHEDULED"),z.reduceTasks.push(U)}return this.activeJobs.set(p,z),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("JOB_SUBMITTED","MAPREDUCE","JobClient",{jobId:p,jobName:r,inputPath:u,mappers:w,reducers:f},this.engine.getClock().getTime())),this.executeJob(z,y),z}executeJob(r,u){r.state="RUNNING",r.startTime=this.engine.getClock().getTime(),r.mapTasks.forEach((i,c)=>{const f=this.resourceManager.requestContainer(u,1024,1,r.queue);if(f){i.assignedNodeId=f.nodeId,i.assignedContainerId=f.id,i.state=$n(i.state,"RUNNING"),i.startTime=this.engine.getClock().getTime();const d=this.nameNode.getBlock(i.inputBlockId),p=d&&d.replicas.some(y=>y.nodeId===f.nodeId);i.locality=p?"NODE_LOCAL":"OFF_RACK",this.engine.getEventStore().record(this.engine.getEventStore().createEvent("MAP_STARTED","MAPREDUCE",i.id,{nodeId:f.nodeId,locality:i.locality},this.engine.getClock().getTime())),this.engine.scheduleEvent("MAP_COMPLETED","MAPREDUCE",i.id,1500+c*300,()=>{i.state=$n(i.state,"SUCCEEDED"),i.progressPercent=100,i.recordsProcessed=15,i.bytesProcessed=d?d.sizeBytes:1024,i.finishTime=this.engine.getClock().getTime(),r.mapProgressPercent=Math.round(r.mapTasks.filter(y=>y.state==="SUCCEEDED").length/r.mapTasks.length*100),this.resourceManager.releaseContainer(f.id),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("MAP_COMPLETED","MAPREDUCE",i.id,{records:i.recordsProcessed},this.engine.getClock().getTime())),r.mapTasks.every(y=>y.state==="SUCCEEDED")&&this.executeShuffleAndReduce(r,u)})}})}executeShuffleAndReduce(r,u){this.engine.getEventStore().record(this.engine.getEventStore().createEvent("SHUFFLE_STARTED","MAPREDUCE",r.id,{jobName:r.name},this.engine.getClock().getTime())),r.reduceTasks.forEach((i,c)=>{const f=this.resourceManager.requestContainer(u,1024,1,r.queue);f&&(i.assignedNodeId=f.nodeId,i.assignedContainerId=f.id,i.state=$n(i.state,"RUNNING"),i.startTime=this.engine.getClock().getTime(),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("REDUCE_STARTED","MAPREDUCE",i.id,{nodeId:f.nodeId},this.engine.getClock().getTime())),this.engine.scheduleEvent("REDUCE_COMPLETED","MAPREDUCE",i.id,2e3+c*400,()=>{if(i.state=$n(i.state,"SUCCEEDED"),i.progressPercent=100,i.finishTime=this.engine.getClock().getTime(),r.reduceProgressPercent=Math.round(r.reduceTasks.filter(d=>d.state==="SUCCEEDED").length/r.reduceTasks.length*100),this.resourceManager.releaseContainer(f.id),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("REDUCE_COMPLETED","MAPREDUCE",i.id,{},this.engine.getClock().getTime())),r.reduceTasks.every(d=>d.state==="SUCCEEDED")){r.state="SUCCEEDED",r.finishTime=this.engine.getClock().getTime();const d=`hadoop	2
hello	2
world	2
`,p=`${r.outputPath}/part-r-00000`;this.nameNode.createAndWriteFile(p,d),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("JOB_COMPLETED","MAPREDUCE",r.id,{durationMs:r.finishTime-r.startTime},this.engine.getClock().getTime()))}}))})}getJobs(){return Array.from(this.activeJobs.values())}getJob(r){return this.activeJobs.get(r)}}class ey{constructor(){O(this,"links",new Map);O(this,"nodeRacks",new Map)}registerNode(r,u){this.nodeRacks.set(r,u)}getRackDistance(r,u){if(r===u)return 0;const i=this.nodeRacks.get(r),c=this.nodeRacks.get(u);return i&&c&&i===c?1:2}getLinkKey(r,u){const i=[r,u].sort();return`${i[0]}<->${i[1]}`}setLink(r){const u=this.getLinkKey(r.sourceNodeId,r.targetNodeId);this.links.set(u,r)}getLink(r,u){const i=this.getLinkKey(r,u),c=this.links.get(i);if(c)return c;const f=this.getRackDistance(r,u),d={sourceNodeId:r,targetNodeId:u,latencyMs:f===0?0:f===1?2:15,bandwidthMbps:f===0?1e4:f===1?1e3:100,packetLossPercent:0,status:"ONLINE"};return this.links.set(i,d),d}calculateTransferTimeMs(r,u,i){const c=this.getLink(r,u);if(c.status==="DISCONNECTED")return{transferTimeMs:1/0,isFailed:!0};if(c.packetLossPercent>0&&Math.random()*100<c.packetLossPercent)return{transferTimeMs:c.latencyMs*5,isFailed:!0};const f=c.bandwidthMbps*1e6/8,d=i/f*1e3,p=c.latencyMs+d;return{transferTimeMs:Math.max(1,Math.round(p)),isFailed:!1}}disconnectNode(r){this.links.forEach(u=>{(u.sourceNodeId===r||u.targetNodeId===r)&&(u.status="DISCONNECTED")})}reconnectNode(r){this.links.forEach(u=>{(u.sourceNodeId===r||u.targetNodeId===r)&&(u.status="ONLINE")})}disconnectRack(r){Array.from(this.nodeRacks.entries()).filter(([i,c])=>c===r).map(([i,c])=>i).forEach(i=>this.disconnectNode(i))}restoreRack(r){Array.from(this.nodeRacks.entries()).filter(([i,c])=>c===r).map(([i,c])=>i).forEach(i=>this.reconnectNode(i))}}class ty{constructor(r,u,i,c){O(this,"nameNode");O(this,"dataNodes");O(this,"network");O(this,"engine");this.nameNode=r,this.dataNodes=u,this.network=i,this.engine=c}killNode(r){const u=this.dataNodes.get(r);u&&u.kill()}restartNode(r){const u=this.dataNodes.get(r);u&&u.restart()}corruptBlock(r){const u=this.nameNode.getBlock(r);if(u&&u.replicas.length>0){const i=u.replicas[0].nodeId,c=this.dataNodes.get(i);c&&c.corruptBlockChecksum(r)}}disconnectRack(r){this.network.disconnectRack(r),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("RACK_DISCONNECTED","FAILURE","FailureInjector",{rackId:r},this.engine.getClock().getTime()))}restoreRack(r){this.network.restoreRack(r),this.engine.getEventStore().record(this.engine.getEventStore().createEvent("RACK_RESTORED","FAILURE","FailureInjector",{rackId:r},this.engine.getClock().getTime()))}}class ay{constructor(r,u,i){O(this,"nameNode");O(this,"resourceManager");O(this,"engine");this.nameNode=r,this.resourceManager=u,this.engine=i}calculateHealthScore(){const r=this.nameNode.getDataNodes();if(r.length===0)return{score:100,nodeAvailabilityPercent:100,blockHealthPercent:100,yarnCapacityPercent:100,status:"EXCELLENT",factors:["Cluster initializing"]};const u=r.filter(z=>z.state==="RUNNING").length,i=Math.round(u/r.length*100),c=this.nameNode.runFSCK("/"),f=c.totalBlocks===0?100:Math.round((c.totalBlocks-c.corruptBlocks-c.missingBlocks-c.underReplicatedBlocks)/c.totalBlocks*100),d=this.resourceManager.getQueues(),p=d.reduce((z,Y)=>z+Y.usedCapacityPercent,0)/(d.length||1),y=Math.round(100-p),h=Math.round(i*.4+f*.4+y*.2),b=[];i<100&&b.push(`${r.length-u} DataNode(s) offline`),c.underReplicatedBlocks>0&&b.push(`${c.underReplicatedBlocks} under-replicated block(s)`),c.corruptBlocks>0&&b.push(`${c.corruptBlocks} corrupt block(s)`),c.missingBlocks>0&&b.push(`${c.missingBlocks} missing block(s)`);let w="EXCELLENT";return h<50?w="CRITICAL":h<75?w="DEGRADED":h<90&&(w="GOOD"),{score:h,nodeAvailabilityPercent:i,blockHealthPercent:f,yarnCapacityPercent:y,status:w,factors:b}}explainDecision(r,u){if(r==="BLOCK_PLACEMENT"){const i=this.nameNode.getBlock(u);if(!i)return`Block metadata for '${u}' not found.`;const c=i.replicas.map(f=>`${f.nodeId} (Rack: ${f.rackId})`).join(", ");return`Block '${u}' replica placement decision:
Selected ${i.replicas.length} target DataNodes based on Hadoop Default Block Placement Policy:
1st Replica: Local node
2nd Replica: Remote rack
3rd Replica: Same remote rack
Placed on: ${c}`}return r==="DATA_LOCALITY"?`Task '${u}' was scheduled using NODE_LOCAL preference to avoid network transfer overheads by running on the DataNode holding the target HDFS block replica.`:`No detailed decision trace recorded for ${r} on ${u}.`}}function ny(E){let r=E;const u=r.indexOf("#");u!==-1&&(r=r.substring(0,u));const i=r.trim();if(!i||E.trim().startsWith("#"))return{raw:E,utility:"comment",flags:new Set,positionalArgs:[]};const c=i.split(/\s+/).filter(Boolean),f=c[0].toLowerCase();if(f==="clear")return{raw:E,utility:"clear",flags:new Set,positionalArgs:[]};if(f==="help")return{raw:E,utility:"help",flags:new Set,positionalArgs:c.slice(1)};if(["start-dfs.sh","start-dfs","stop-dfs.sh","stop-dfs","start-yarn.sh","start-yarn","stop-yarn.sh","stop-yarn","start-all.sh","start-all","stop-all.sh","stop-all"].includes(f))return{raw:E,utility:"script",action:f,flags:new Set,positionalArgs:c.slice(1)};if(["ls","pwd","cd","mkdir","rmdir","echo","cat","rm","touch","whoami","grep","wc","head","tail","history","top","df","free","uname","ifconfig","ip","ping","netstat","ps","jps","kill","killall","sort","uniq","node","python","python3","cp","mv","hive","pig","download","get","spark","pyspark","spark-shell","spark-submit","about"].includes(f))return{raw:E,utility:"linux",action:f,flags:new Set,positionalArgs:c.slice(1)};if(f!=="hdfs"&&f!=="hadoop"&&f!=="yarn")return{raw:E,utility:"unknown",flags:new Set,positionalArgs:c};const d=f;let p,y;const h=new Set,b=[];let w=1;for(w<c.length&&!c[w].startsWith("-")&&(p=c[w],w++);w<c.length;){const z=c[w];z.startsWith("-")?!y&&(p==="namenode"||p==="dfs"||p==="dfsadmin"||p==="rmadmin"||p==="application"||p==="logs"||p==="haadmin"||p==="storagepolicies"||p==="ec"||p==="cacheadmin"||p==="balancer"||p==="diskbalancer"||p==="queue"||p==="crypto"||p==="node")?y=z:h.add(z):b.push(z),w++}return{raw:E,utility:d,subcommand:p,action:y,flags:h,positionalArgs:b}}const Xd=`
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

    def __getattr__(self, name):
        # PySpark supports df.columnName as shorthand for col("columnName").
        columns = self.__dict__.get('columns', ())
        if name in columns:
            return Functions.col(name)
        raise AttributeError(f"'DataFrame' object has no attribute '{name}'")

    def __getitem__(self, item):
        if isinstance(item, str): return Functions.col(item)
        if isinstance(item, Column): return item
        raise TypeError('DataFrame column access expects a column name or Column')

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
`;function di(E){let r=E.replace(/[\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000]/g," ").replace(/\r\n/g,`
`).replace(/\r/g,`
`);!r.includes(`
`)&&r.includes("\\n")&&(r=r.replace(/\\n/g,`
`).replace(/\\t/g,"    "));const u=r.split(`
`),i=[],c=[0];for(let f=0;f<u.length;f++){const d=u[f],p=d.trim();if(!p||p.startsWith("#"))continue;let y=d.search(/\S/);for(y<0&&(y=0);c.length>1&&y<=c[c.length-1];)c.pop(),!p.startsWith("else")&&!p.startsWith("elif")&&i.push("}");let h=p;if(h=h.replace(/\bTrue\b/g,"true"),h=h.replace(/\bFalse\b/g,"false"),h=h.replace(/\bNone\b/g,"null"),h=h.replace(/\bis not\b/g,"!=="),h=h.replace(/\bis\b/g,"==="),h=h.replace(/\band\b/g,"&&"),h=h.replace(/\bor\b/g,"||"),h=h.replace(/\bnot\b\s+/g,"!"),h=h.replace(/\bpass\b/g,""),/^with\s+open\((.*?)\)\s+as\s+([a-zA-Z_]\w*)\s*:\s*(#.*)?$/.test(h)){h=h.replace(/^with\s+open\((.*?)\)\s+as\s+([a-zA-Z_]\w*)\s*:\s*(#.*)?$/,"let $2 = __py_open__($1); {"),c.push(y),i.push(h);continue}if(/^import\s+([a-zA-Z_]\w*)\s*(#.*)?$/.test(h)){h=h.replace(/^import\s+([a-zA-Z_]\w*)\s*(#.*)?$/,'let $1 = __py_import__("$1");'),i.push(h);continue}if(/^from\s+([a-zA-Z_]\w*)\s+import\s+(.*?)\s*(#.*)?$/.test(h)){h=h.replace(/^from\s+([a-zA-Z_]\w*)\s+import\s+(.*?)\s*(#.*)?$/,'let { $2 } = __py_import__("$1");'),i.push(h);continue}const b=h.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+([^:]+):\s*(.+)$/);if(b){const[,w,z,Y]=b;let U=Y.replace(/print\((.*?)\)/g,(ae,H)=>`__py_print__(${H})`);U=U.replace(/input\((.*?)\)/g,(ae,H)=>`__py_input__(${H||'""'})`),U.endsWith(";")||(U+=";"),i.push(`for (let ${w} of ${z}) { ${U} }`);continue}if(/^for\s+([a-zA-Z_]\w*)\s+in\s+(.*?)\s*:\s*(#.*)?$/.test(h))h=h.replace(/^for\s+([a-zA-Z_]\w*)\s+in\s+(.*?)\s*:\s*(#.*)?$/,"for (let $1 of $2) {"),c.push(y);else if(/^while\s+(.*?)\s*:\s*(#.*)?$/.test(h)){const w=h.replace(/^while\s+(.*?)\s*:\s*(#.*)?$/,"$1");h=`let __py_while_count_${f}__ = 0;
while (${w}) { if (++__py_while_count_${f}__ > 10000) break;`,c.push(y)}else/^def\s+([a-zA-Z_]\w*)\s*\((.*?)\)\s*:\s*(#.*)?$/.test(h)?(h=h.replace(/^def\s+([a-zA-Z_]\w*)\s*\((.*?)\)\s*:\s*(#.*)?$/,"function $1($2) {"),c.push(y)):/^elif\s+(.*?)\s*:\s*(#.*)?$/.test(h)?(h=h.replace(/^elif\s+(.*?)\s*:\s*(#.*)?$/,"} else if ($1) {"),c.push(y)):/^if\s+(.*?)\s*:\s*(#.*)?$/.test(h)?(h=h.replace(/^if\s+(.*?)\s*:\s*(#.*)?$/,"if ($1) {"),c.push(y)):/^else\s*:\s*(#.*)?$/.test(h)?(h="} else {",c.push(y)):(h=h.replace(/print\((.*?)\)/g,(w,z)=>`__py_print__(${z})`),h=h.replace(/input\((.*?)\)/g,(w,z)=>`__py_input__(${z||'""'})`),h=h.replace(/open\((.*?)\)/g,(w,z)=>`__py_open__(${z})`),!h.endsWith("{")&&!h.endsWith("}")&&!h.endsWith(";")&&(h+=";"));i.push(h)}for(;c.length>1;)c.pop(),i.push("}");return i.join(`
`)}class ly{constructor(){O(this,"pyodide",null);O(this,"pyodideInitPromise",null);O(this,"isPySparkSetupDone",!1);this.initPyodide()}syncLocalFiles(r){var d;if(!r||!((d=this.pyodide)!=null&&d.FS))return;const u=new Set(["/home/Hacker"]),i=new Set;r.forEach((p,y)=>{const h=y.startsWith("/")?y:`/home/Hacker/${y}`,b=h.slice(0,h.lastIndexOf("/"))||"/";u.add(b),h.endsWith(".py")&&i.add(b);try{this.pyodide.FS.mkdirTree(b),this.pyodide.FS.writeFile(h,p)}catch{}}),i.forEach(p=>{if(p!=="/home/Hacker")try{this.pyodide.FS.writeFile(`${p}/__init__.py`,"")}catch{}});const c=JSON.stringify(Array.from(u)),f=JSON.stringify(Array.from(i).filter(p=>p.startsWith("/home/Hacker/")&&p!=="/home/Hacker").map(p=>p.slice(13).split("/")[0]));try{this.pyodide.runPython(`
import sys
import importlib
__project_paths = ${c}
# Reorder existing paths too: Pyodide's /home/pyodide can already be ahead
# of the simulated home directory and shadow a same-named project package.
sys.path[:] = __project_paths + [p for p in sys.path if p not in __project_paths]
for __name in ${f}:
    sys.modules.pop(__name, None)
importlib.invalidate_caches()
`)}catch{}}persistLocalFiles(r){var c;if(!r||!((c=this.pyodide)!=null&&c.FS))return;const u=this.pyodide.FS,i=f=>{let d;try{d=u.readdir(f).filter(p=>p!=="."&&p!=="..")}catch{return}for(const p of d){const y=`${f.replace(/\/$/,"")}/${p}`;try{const h=u.stat(y);if(u.isDir(h.mode))p!=="__pycache__"&&i(y);else if(u.isFile(h.mode)&&!p.endsWith(".pyc")){if(p==="__init__.py")continue;r(y,u.readFile(y,{encoding:"utf8"}))}}catch{}}};i("/home/Hacker")}resetPySparkRepl(){this.isPySparkSetupDone=!1}async runPythonReplLine(r,u,i){if(await this.initPyodide(),!this.pyodide)return{stdout:"",stderr:"Python REPL could not start because the Pyodide runtime is unavailable.",exitCode:1};const c=[],f=[];try{this.pyodide.setStdout({batched:y=>c.push(y)}),this.pyodide.setStderr({batched:y=>f.push(y)}),this.syncLocalFiles(u);const d=this.pyodide.runPython(r),p=c.join(`
`)||(d==null?"":String(d));return this.persistLocalFiles(i),{stdout:p,stderr:f.join(`
`),exitCode:0}}catch(d){return{stdout:c.join(`
`),stderr:d.message||String(d),exitCode:1}}}async runPySparkReplLine(r,u,i){if(await this.initPyodide(),this.pyodide){const c=[],f=[];try{this.pyodide.setStdout({batched:y=>c.push(y)}),this.pyodide.setStderr({batched:y=>f.push(y)}),this.syncLocalFiles(u),this.isPySparkSetupDone||(this.pyodide.runPython(Xd),this.pyodide.runPython(`
from pyspark.sql import SparkSession
import pyspark.sql.functions as F
from pyspark.sql.types import *

spark = SparkSession.builder.appName("PySparkShell").getOrCreate()
sc = spark.sparkContext
`),this.isPySparkSetupDone=!0);const d=this.pyodide.runPython(r);let p=c.join(`
`);return d!=null&&!c.length&&(p=String(d)),this.persistLocalFiles(i),{stdout:p,stderr:f.join(`
`),exitCode:0}}catch(d){return{stdout:c.join(`
`),stderr:d.message||String(d),exitCode:1}}}return{stdout:"",stderr:"PySpark REPL could not start because the Pyodide Python runtime is unavailable.",exitCode:1}}async initPyodide(){if(!(typeof window>"u")){if(window.pyodide){this.pyodide=window.pyodide;return}if(this.pyodideInitPromise){await this.pyodideInitPromise;return}this.pyodideInitPromise=(async()=>{try{if(!window.loadPyodide){const r=document.createElement("script");r.src="./pyodide/pyodide.js",r.async=!0,document.head.appendChild(r),await new Promise(u=>{r.onload=u,r.onerror=u})}window.loadPyodide&&(this.pyodide=await window.loadPyodide({indexURL:"./pyodide/"}),window.pyodide=this.pyodide)}catch{this.pyodide=null}})(),await this.pyodideInitPromise,this.pyodideInitPromise=null}}runSync(r,u=[],i,c){if(!this.pyodide)return null;const f=[],d=[];let p=0;const y=(h="")=>(h&&f.push(h),p<u.length?u[p++]:"");try{this.pyodide.setStdout({batched:w=>f.push(w)}),this.pyodide.setStderr({batched:w=>d.push(w)}),this.syncLocalFiles(i),window.__pyodide_input_handler=y,this.pyodide.runPython(`
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
`),this.pyodide.runPython(Xd);const h=this.pyodide.runPython(r);let b=f.join(`
`);return h!=null&&!f.length&&(b=String(h)),this.persistLocalFiles(c),{stdout:b,stderr:d.join(`
`),exitCode:0}}catch(h){return{stdout:f.join(`
`),stderr:h.message||String(h),exitCode:1}}}fallbackExecuteSync(r,u=[],i,c){let f=0;const d=p=>f<u.length?u[f++]:"";return this.fallbackExecute(r,d,i,c)}fallbackExecute(r,u,i,c){const f=[],d=[];try{const p=di(r),z={__py_print__:(...H)=>{const X=H.map(W=>typeof W=="object"?JSON.stringify(W):String(W)).join(" ");f.push(X)},__py_input__:(H="")=>u(H),__py_open__:(H,X="r")=>{const W=H.startsWith("/")?H:`/home/Hacker/${H}`,te=H.split("/").pop()||H;if(X.includes("w")||X.includes("a")){let I=X.includes("a")&&((i==null?void 0:i.get(W))||(i==null?void 0:i.get(te)))||"";return{write:ge=>{I+=String(ge),c&&c(te,I)},writelines:ge=>{I+=ge.join(""),c&&c(te,I)},read:()=>I,close:()=>{},__enter__:function(){return this},__exit__:function(){}}}else{const I=(i==null?void 0:i.get(W))??(i==null?void 0:i.get(te))??"";return{read:()=>I,readline:()=>I.split(`
`)[0]||"",readlines:()=>I.split(`
`),write:()=>{},close:()=>{},__enter__:function(){return this},__exit__:function(){}}}},__py_import__:H=>{const X=`${H}.py`,W=(i==null?void 0:i.get(`/home/Hacker/${X}`))||(i==null?void 0:i.get(X));if(!W)throw new Error(`No module named '${H}'`);const te={Math,JSON,parseInt,parseFloat,String,Number,Array,Object,True:!0,False:!1,None:null},I=di(W);return new Function(...Object.keys(te),I)(...Object.values(te)),te},Math,JSON,parseInt,parseFloat,String,Number,Array,Object,True:!0,False:!1,None:null,len:H=>H&&H.length!==void 0?H.length:0,range:(H,X,W=1)=>{X===void 0&&(X=H,H=0);const te=[];for(let I=H;I<X;I+=W)te.push(I);return te},str:H=>String(H),int:H=>parseInt(H,10)||0,float:H=>parseFloat(H)||0,list:H=>Array.from(H||[])},Y=Object.keys(z),U=Object.values(z);return new Function(...Y,p)(...U),{stdout:f.join(`
`),stderr:d.join(`
`),exitCode:0}}catch(p){return{stdout:f.join(`
`),stderr:`Python SyntaxError / RuntimeError: ${p.message}`,exitCode:1}}}}const zo=`================================================================================
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
  Python REPL: Type python or python3 for a persistent >>> prompt; exit or quit returns.
  Script Execution: spark-submit script.py, python script.py, or python -c "...".

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
  ls, pwd, cd, mkdir, rmdir, echo, cat, touch, rm, whoami
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
================================================================================`,oi=`<?xml version="1.0" encoding="UTF-8"?>
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
</configuration>`,ui=`<?xml version="1.0" encoding="UTF-8"?>
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
</configuration>`,ci=`<?xml version="1.0" encoding="UTF-8"?>
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
</configuration>`,fi=`<?xml version="1.0" encoding="UTF-8"?>
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
</configuration>`;class sy{constructor(r,u,i,c){O(this,"nameNode");O(this,"resourceManager");O(this,"mapReduceEngine");O(this,"pythonEngine");O(this,"db");O(this,"isHDFSStarted",!1);O(this,"isYARNStarted",!1);O(this,"kerberosTicket",null);O(this,"activeNameNodeId","nn1");O(this,"storagePolicies",new Map);O(this,"ecPolicies",new Map);O(this,"cacheDirectives",new Map);O(this,"snapshots",new Map);O(this,"acls",new Map);O(this,"cryptoZones",new Map);O(this,"fileQuotas",new Map);O(this,"spaceQuotas",new Map);O(this,"historyList",[]);O(this,"isNameNodeFormatted",!1);O(this,"localDir","/home/Hacker");O(this,"localFiles",new Map([["/home/Hacker/about.txt",zo],["/etc/hadoop/core-site.xml",oi],["/etc/hadoop/hdfs-site.xml",ui],["/etc/hadoop/mapred-site.xml",ci],["/etc/hadoop/yarn-site.xml",fi],["/home/Hacker/hadoop/etc/hadoop/core-site.xml",oi],["/home/Hacker/hadoop/etc/hadoop/hdfs-site.xml",ui],["/home/Hacker/hadoop/etc/hadoop/mapred-site.xml",ci],["/home/Hacker/hadoop/etc/hadoop/yarn-site.xml",fi]]));O(this,"localDirs",new Set(["/","/etc","/etc/hadoop","/home","/home/Hacker","/home/Hacker/hadoop","/home/Hacker/hadoop/etc","/home/Hacker/hadoop/etc/hadoop"]));O(this,"cachedStorageUsage",0);O(this,"cachedStorageQuota",0);this.nameNode=r,this.resourceManager=u,this.mapReduceEngine=i,this.pythonEngine=new ly,this.db=c,this.startStorageRefresh()}startStorageRefresh(){const r=()=>{this.db.getStorageEstimate().then(({usageBytes:u,quotaBytes:i})=>{this.cachedStorageUsage=u,this.cachedStorageQuota=i})};r(),setInterval(r,3e4)}async executePySparkRepl(r){const u=await this.pythonEngine.runPySparkReplLine(r,this.localFiles,(i,c)=>this.saveLocalFileContent(i,c));return u.stderr?u.stdout?`${u.stdout}
${u.stderr}`:u.stderr:u.stdout}async executePythonRepl(r){const u=await this.pythonEngine.runPythonReplLine(r,this.localFiles,(i,c)=>this.saveLocalFileContent(i,c));return u.stderr?u.stdout?`${u.stdout}
${u.stderr}`:u.stderr:u.stdout}async loadFromDB(){await this.db.waitReady();const r=await this.db.loadAllLocalFiles();r.size>0&&(this.localFiles=r);const u=["/home/Hacker/core-site.xml","/home/Hacker/hdfs-site.xml","/home/Hacker/mapred-site.xml","/home/Hacker/yarn-site.xml"];for(const h of u)this.localFiles.has(h)&&(this.localFiles.delete(h),await this.db.deleteLocalFile(h));const i=[["/home/Hacker/about.txt",zo],["/etc/hadoop/core-site.xml",oi],["/etc/hadoop/hdfs-site.xml",ui],["/etc/hadoop/mapred-site.xml",ci],["/etc/hadoop/yarn-site.xml",fi],["/home/Hacker/hadoop/etc/hadoop/core-site.xml",oi],["/home/Hacker/hadoop/etc/hadoop/hdfs-site.xml",ui],["/home/Hacker/hadoop/etc/hadoop/mapred-site.xml",ci],["/home/Hacker/hadoop/etc/hadoop/yarn-site.xml",fi]];for(const[h,b]of i)this.localFiles.has(h)||this.localFiles.set(h,b);const c=await this.db.loadAllLocalDirs();c.size>0&&(this.localDirs=c);const f=["/","/etc","/etc/hadoop","/home","/home/Hacker","/home/Hacker/hadoop","/home/Hacker/hadoop/etc","/home/Hacker/hadoop/etc/hadoop"];for(const h of f)this.localDirs.add(h);const d=await this.db.loadCommandHistory();d.length>0&&(this.historyList=d);const p=await this.db.loadShellState();p&&(this.isHDFSStarted=p.isHDFSStarted,this.isYARNStarted=p.isYARNStarted,this.isNameNodeFormatted=p.isNameNodeFormatted??!1,this.localDir=p.localDir,this.kerberosTicket=p.kerberosTicket,this.activeNameNodeId=p.activeNameNodeId);const y=await this.db.loadAllHdfsFileContents();y.size>0&&y.forEach((h,b)=>{try{h==="__HADOOP_DIR__"?this.nameNode.getNamespace().mkdir(b,!0):this.nameNode.createAndWriteFile(b,h)}catch{}})}persistShellState(){const r={isHDFSStarted:this.isHDFSStarted,isYARNStarted:this.isYARNStarted,isNameNodeFormatted:this.isNameNodeFormatted,localDir:this.localDir,kerberosTicket:this.kerberosTicket,activeNameNodeId:this.activeNameNodeId};this.db.saveShellState(r)}getWorkingDirDisplay(){return this.localDir==="/home/Hacker"?"~":this.localDir.startsWith("/home/Hacker/")?"~/"+this.localDir.substring(13):this.localDir}getLocalFileContent(r){const u=this.resolveLocalPath(r);return this.localFiles.get(u)}saveLocalFileContent(r,u){const i=this.resolveLocalPath(r);this.localFiles.set(i,u),this.db.saveLocalFile(i,u)}execute(r){const u=r.trim();if(u.startsWith("#"))return"";u&&(this.historyList.push(u),this.db.saveCommandHistory(this.historyList));const i=ny(r);if(i.utility==="comment")return"";if(u.startsWith("hive --service llap"))return`[Hive LLAP Engine] Initializing Long-Lived Process Daemons...
[LLAP Daemon] Allocated 16GB off-heap memory cache across NodeManagers.
✓ Hive LLAP Service Active (Low-latency in-memory SQL execution ready).`;if(u.startsWith("spark-shell"))return this.isYARNStarted?`Spark context Web UI available at http://localhost:4040
Spark context available as 'sc' (master = yarn, app id = app_${Date.now()}_0010).
SparkSession available as 'spark'.
Using Scala version 2.12.15 (Java HotSpot(TM) 64-Bit Server VM, Java 1.8.0_311)
scala> val textFile = spark.read.text("/Hacker/about.txt")
textFile: org.apache.spark.sql.DataFrame = [value: string]
scala> textFile.count()
res0: Long = 125`:"Spark Error: YARN ResourceManager is STOPPED. Run 'start-yarn.sh'.";if(u.startsWith("pyspark"))return"__LAUNCH_PYSPARK__";if(u.startsWith("kyuubi"))return`[Apache Kyuubi SQL Gateway] Server starting on thrift server port 10009...
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
> `;if(i[0]==="-v"||i[0]==="--version")return"v18.16.0";let c="";if(i[0]==="-e"||i[0]==="--eval")c=i.slice(1).join(" ").replace(/^["']|["']$/g,"");else{const p=i[0],y=this.resolveLocalPath(p),h=this.getLocalFileContent(y);if(h!==void 0)c=h;else return`node: internal/modules/cjs/loader:1080 throw err; Cannot find module '${p}'`}const f=[],d={log:(...p)=>f.push(p.map(y=>typeof y=="object"?JSON.stringify(y):String(y)).join(" ")),error:(...p)=>f.push(p.map(y=>typeof y=="object"?JSON.stringify(y):String(y)).join(" ")),warn:(...p)=>f.push(p.map(y=>typeof y=="object"?JSON.stringify(y):String(y)).join(" "))};try{return new Function("console",c)(d),f.length>0?f.join(`
`):""}catch(p){return`Uncaught ${p.name||"Error"}: ${p.message}`}}if(u==="hive"||u==="pig")return"__LAUNCH_KSQL__";if(u==="download")return i.length===0?"Usage: download <filename.ext>":`__DOWNLOAD_FILE__:${i[0]}`;if(u==="about")return zo;if(u==="get")return"__GET_FILE__";if(u==="jps"){const c=[];return this.isHDFSStarted&&(c.push("18291 NameNode"),c.push("18420 DataNode"),c.push("18590 SecondaryNameNode")),this.isYARNStarted&&(c.push("19842 ResourceManager"),c.push("20115 NodeManager")),c.push("21045 Jps"),c.join(`
`)}if(u==="pyspark"||u==="spark"||u==="spark-shell")return i.length>0?this.executeLinuxCommand({raw:`python ${i.join(" ")}`,utility:"linux",action:"python",flags:new Set,positionalArgs:i}):"__LAUNCH_PYSPARK__";if(u==="spark-submit"){if(i.length===0)return"Usage: spark-submit [options] <app.py> [app arguments]";const c=i.find(d=>d.endsWith(".py"))||i[i.length-1];return`[Spark DAG Scheduler] Submitting PySpark Job to Cluster...
[Spark DAG Scheduler] Stage 0: MapReduce Pipeline Completed.
[Spark DAG Scheduler] Job 0 finished in 0.42s

${this.executeLinuxCommand({raw:`python ${c}`,utility:"linux",action:"python",flags:new Set,positionalArgs:[c]})}`}if(u==="python"||u==="python3"){if(i.length===0)return"__LAUNCH_PYTHON__";if(this.pythonEngine.initPyodide(),i[0]==="-v"||i[0]==="--version"||i[0]==="-V")return"Python 3.11.3 (Pyodide WebAssembly Engine)";let c="";const f=[];if(i[0]==="-c")c=i.slice(1).join(" ").replace(/^["']|["']$/g,"");else{const d=i[0],p=this.resolveLocalPath(d),y=this.getLocalFileContent(p);if(y!==void 0)c=y,i.length>1&&f.push(...i.slice(1));else{if(d.endsWith(".py"))return`python: can't open file '${d}': [Errno 2] No such file or directory`;c=i.join(" ").replace(/^["']|["']$/g,"")}}return this.executePython(c,f)}if(u==="ps")return`UID        PID  PPID  C STIME TTY          TIME CMD
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
 1280 Hacker    20   0 2400100 412000  85000 S   0.8   2.5   5:12.10 java (DataNode)`;if(u==="df"){const c=(this.cachedStorageUsage/1048576).toFixed(1),f=(this.cachedStorageQuota/(1024*1024)).toFixed(1),d=((this.cachedStorageQuota-this.cachedStorageUsage)/(1024*1024)).toFixed(1),p=this.cachedStorageQuota>0?(this.cachedStorageUsage/this.cachedStorageQuota*100).toFixed(0):"0";return`Filesystem               Size      Used     Avail    Use%  Mounted on
hadoop-lab (IndexedDB)   ${f}M    ${c}M    ${d}M   ${p}%   /
SW Cache                 ${(this.cachedStorageUsage*.3/(1024*1024)).toFixed(1)}M    ${(this.cachedStorageUsage*.3/(1024*1024)).toFixed(1)}M    0.0M  100%   /sw-cache`}if(u==="free")return`               total        used        free      shared  buff/cache   available
Mem:           16384        8192        4096         256        4096        7168
Swap:           2048           0        2048`;if(u==="uname")return"Linux hadoop.local 5.15.0-88-generic #98-Ubuntu SMP Mon Oct 2 15:18:56 UTC 2026 x86_64 x86_64 x86_64 GNU/Linux";if(u==="pwd")return this.localDir;if(u==="whoami")return"Hacker";if(u==="history")return this.historyList.map((c,f)=>` ${(f+1).toString().padStart(4)}  ${c}`).join(`
`);if(u==="cd"){const c=i[0]||"/home/Hacker",f=this.resolveLocalPath(c);return this.localDirs.has(f)?(this.localDir=f,this.persistShellState(),""):`cd: no such file or directory: ${c}`}if(u==="mkdir"){if(i.length===0)return"mkdir: missing operand";const c=this.resolveLocalPath(i[0]);return this.localDirs.add(c),this.db.saveLocalDir(c),`✓ Created local directory: ${c}`}if(u==="rmdir"){if(i.length===0)return"rmdir: missing operand";if(i.length>1)return"rmdir: too many arguments";const c=this.resolveLocalPath(i[0]);if(!this.localDirs.has(c))return this.localFiles.has(c)?`rmdir: failed to remove '${i[0]}': Not a directory`:`rmdir: failed to remove '${i[0]}': No such file or directory`;if(c==="/"||c==="/home"||c==="/home/Hacker")return`rmdir: failed to remove '${i[0]}': Permission denied`;const f=c.endsWith("/")?c:c+"/",d=[...this.localDirs].some(y=>y!==c&&y.startsWith(f)),p=[...this.localFiles.keys()].some(y=>y.startsWith(f));return d||p?`rmdir: failed to remove '${i[0]}': Directory not empty`:this.localDir===c||this.localDir.startsWith(f)?`rmdir: failed to remove '${i[0]}': Directory is in use`:(this.localDirs.delete(c),this.db.deleteLocalDir(c),`✓ Removed local directory: ${c}`)}if(u==="touch"){if(i.length===0)return"touch: missing file operand";const c=this.resolveLocalPath(i[0]);return this.localFiles.has(c)||(this.localFiles.set(c,""),this.db.saveLocalFile(c,"")),""}if(u==="echo"){const c=r.raw.substring(r.raw.indexOf("echo")+4).trim();if(c.includes(">")){const f=c.split(">"),d=f[0].replace(/^["']|["']$/g,"").replace(/\\n/g,`
`).replace(/\\t/g,"    ").trim(),p=this.resolveLocalPath(f[1].trim());return this.saveLocalFileContent(p,d+`
`),`✓ Written to local file: ${f[1].trim()}`}return c.replace(/^["']|["']$/g,"").replace(/\\n/g,`
`).replace(/\\t/g,"    ")}if(u==="cat"){if(i.length===0)return"cat: missing file operand";const c=this.resolveLocalPath(i[0]),f=this.getLocalFileContent(c);return f!==void 0?f:`cat: ${i[0]}: No such file or directory`}if(u==="grep"){if(i.length<2)return"grep: Usage: grep <pattern> <file>";const c=i[0],f=this.resolveLocalPath(i[1]),d=this.getLocalFileContent(f);if(d===void 0)return`grep: ${i[1]}: No such file or directory`;const p=d.split(`
`).filter(y=>y.toLowerCase().includes(c.toLowerCase()));return p.length>0?p.join(`
`):""}if(u==="wc"){if(i.length===0)return"wc: missing file operand";const c=this.resolveLocalPath(i[i.length-1]),f=this.getLocalFileContent(c);if(f===void 0)return`wc: ${i[i.length-1]}: No such file or directory`;const d=f.split(`
`).length-(f.endsWith(`
`)?1:0),p=f.trim().split(/\s+/).filter(Boolean).length,y=f.length;return`${d.toString().padStart(6)} ${p.toString().padStart(6)} ${y.toString().padStart(6)} ${i[i.length-1]}`}if(u==="head"){if(i.length===0)return"head: missing file operand";const c=this.resolveLocalPath(i[i.length-1]),f=this.getLocalFileContent(c);return f===void 0?`head: ${i[i.length-1]}: No such file or directory`:f.split(`
`).slice(0,10).join(`
`)}if(u==="tail"){if(i.length===0)return"tail: missing file operand";const c=this.resolveLocalPath(i[i.length-1]),f=this.getLocalFileContent(c);return f===void 0?`tail: ${i[i.length-1]}: No such file or directory`:f.split(`
`).slice(-10).join(`
`)}if(u==="ls"){const c=i[0]?this.resolveLocalPath(i[0]):this.localDir,f=[],d=c.endsWith("/")?c:c+"/";return this.localDirs.forEach(p=>{if(p!==c&&p.startsWith(d)){const y=p.substring(d.length);y.includes("/")||f.push(`drwxr-xr-x  ${y}/`)}}),this.localFiles.forEach((p,y)=>{if(y.startsWith(d)){const h=y.substring(d.length);h.includes("/")||f.push(`-rw-r--r--  ${h}`)}}),f.length>0?f.join(`
`):"."}if(u==="rm"){if(i.length===0)return"rm: missing operand";const c=this.resolveLocalPath(i[0]);let f=!1;return this.localFiles.has(c)&&(this.localFiles.delete(c),this.db.deleteLocalFile(c),f=!0),this.localDirs.has(c)&&(this.localDirs.delete(c),this.db.deleteLocalDir(c),f=!0),f?`✓ Removed local path: ${i[0]}`:`rm: cannot remove '${i[0]}': No such file or directory`}if(u==="cp"){if(i.length<2)return"cp: missing file operand. Usage: cp <src> <dst>";const c=i.includes("-r")||i.includes("-R"),f=i.filter(h=>h!=="-r"&&h!=="-R");if(f.length<2)return"cp: missing destination file operand after "+f[0];const d=this.resolveLocalPath(f[0]);let p=this.resolveLocalPath(f[1]);if(this.localDirs.has(p)){const h=d.split("/").pop()||"file";p=p.endsWith("/")?p+h:p+"/"+h}const y=this.getLocalFileContent(d);if(y!==void 0)return this.saveLocalFileContent(p,y),`✓ Copied local file: ${f[0]} -> ${f[1]}`;if(c&&this.localDirs.has(d)){let h=0;const b=d.endsWith("/")?d:d+"/",w=p.endsWith("/")?p:p+"/";return this.localDirs.add(p),this.db.saveLocalDir(p),this.localDirs.forEach(z=>{if(z.startsWith(b)){const Y=z.substring(b.length),U=w+Y;this.localDirs.add(U),this.db.saveLocalDir(U)}}),this.localFiles.forEach((z,Y)=>{if(Y.startsWith(b)){const U=Y.substring(b.length),ae=w+U;this.saveLocalFileContent(ae,z),h++}}),`✓ Copied local directory '${f[0]}' -> '${f[1]}' (${h} files)`}return`cp: cannot stat '${f[0]}': No such file or directory`}if(u==="mv"){if(i.length<2)return"mv: missing file operand. Usage: mv <src> <dst>";const c=this.resolveLocalPath(i[0]);let f=this.resolveLocalPath(i[1]);if(this.localDirs.has(f)){const p=c.split("/").pop()||"file";f=f.endsWith("/")?f+p:f+"/"+p}const d=this.getLocalFileContent(c);if(d!==void 0)return this.saveLocalFileContent(f,d),this.localFiles.delete(c),this.db.deleteLocalFile(c),`✓ Moved local file: ${i[0]} -> ${i[1]}`;if(this.localDirs.has(c)){const p=c.endsWith("/")?c:c+"/",y=f.endsWith("/")?f:f+"/";return this.localDirs.add(f),this.db.saveLocalDir(f),this.localFiles.forEach((h,b)=>{if(b.startsWith(p)){const w=b.substring(p.length),z=y+w;this.saveLocalFileContent(z,h),this.localFiles.delete(b),this.db.deleteLocalFile(b)}}),this.localDirs.delete(c),this.db.deleteLocalDir(c),`✓ Renamed/moved directory '${i[0]}' -> '${i[1]}'`}return`mv: cannot stat '${i[0]}': No such file or directory`}return`Linux command executed: ${u}`}executeHDFSCommand(r){const{subcommand:u,action:i,flags:c,positionalArgs:f}=r;if(u==="crypto"){if(i==="-listZones"){const d=["/Hacker/secure   key1","------------------------+"];return this.cryptoZones.forEach((p,y)=>{d.push(`${y.padEnd(16)} ${p}`)}),d.join(`
`)}if(i==="-createZone"){const d=f[1]||"key1",p=f[3]||"/Hacker/secure";return this.cryptoZones.set(p,d),`Added encryption zone ${p} with key ${d}`}}if(u==="balancer")return`[HDFS Balancer] Rebalancing block allocation across 3 DataNodes (Threshold: 10.0%)
[HDFS Balancer] Moved 1,024 MB across DataNode disks.
✓ Cluster HDFS storage is now balanced.`;if(u==="diskbalancer")return`[DiskBalancer] Generating data volume balancing plan for datanode1.hadoop.local
✓ DiskBalancer Plan generated and executed. Volume skew reduced to 0.01.`;if(u==="storagepolicies"){if(i==="-isSatisfierRunning")return"Storage Policy Satisfier (SPS) daemon is RUNNING on Active NameNode nn1.";if(i==="-listPolicies")return`Block Storage Policies:
  1. HOT (Disk: 3) [Default]
  2. WARM (Disk: 1, Archive: 2)
  3. COLD (Archive: 3)
  4. LAZY_PERSIST (RAM_Disk: 1, Disk: 2)`;if(i==="-setStoragePolicy"){const d=f[1]||"/",p=f[3]||"COLD";return this.storagePolicies.set(d,p),`Set storage policy ${p} on ${d}`}if(i==="-satisfyStoragePolicy")return`Scheduled storage policy satisfaction for ${f[1]||"/"}`}if(u==="ec"){if(i==="-enablePolicy")return`Erasure Coding policy ${f[1]||"RS-6-3-1024k"} enabled successfully`;if(i==="-disablePolicy")return`Erasure Coding policy ${f[1]||"RS-6-3-1024k"} disabled successfully`;if(i==="-listPolicies")return`Erasure Coding Policies:
  - RS-6-3-1024k (Reed-Solomon 6 data, 3 parity) [Enabled]
  - RS-3-2-1024k (Reed-Solomon 3 data, 2 parity)
  - XOR-2-1-1024k (XOR 2 data, 1 parity)`;if(i==="-setPolicy"){const d=f[1]||"/",p=f[3]||"RS-6-3-1024k";return this.ecPolicies.set(d,p),`Set Erasure Coding policy ${p} on ${d}`}}if(u==="cacheadmin"){if(i==="-addDirective"){const d=f[1]||"/",p=f[3]||"pool1";return this.cacheDirectives.set(d,p),`Added cache directive 1 for path ${d} in pool ${p}`}if(i==="-listDirectives"){const d=["ID   POOL    REPL  PATH","-------------------------------+"];let p=1;return this.cacheDirectives.forEach((y,h)=>{d.push(`${p.toString().padEnd(4)} ${y.padEnd(7)} 1     ${h}`),p++}),d.join(`
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
✓ NameNode formatted successfully. Ready for 'start-dfs.sh'.`;if(u==="haadmin"){if(i==="-getServiceState")return(f[0]||"nn1")===this.activeNameNodeId?"active":"standby";if(i==="-failover"){const d=f[0]||"nn1",p=f[1]||"nn2";return this.activeNameNodeId=p,`Failover from ${d} to ${p} successful
✓ ${d} is now STANDBY
✓ ${p} is now ACTIVE`}}if(u==="dfs")switch(i){case"-find":{const d=f[0]||"/",p=f[2]||"*";return`${d}
${d}/about.txt (${p})
${d}/data.csv`}case"-count":return`   DIR_COUNT   FILE_COUNT       CONTENT_SIZE PATHNAME
           4            2               4096 ${f[0]||"/"}`;case"-checksum":{const d=f[0]||"/",p=this.nameNode.getNamespace().resolvePath(d);return!p||p.type!=="FILE"?`checksum: \`${d}\`: No such file`:`${d}	MD5-of-073741824000000000000000	a9b8c7d6e5f43210876543210abcdef1`}case"-stat":{const d=f[1]||f[0]||"/",p=this.nameNode.getNamespace().resolvePath(d);if(!p)return`stat: \`${d}\`: No such file or directory`;const y=p.type==="DIRECTORY"?"directory":"regular file",h=p.type==="FILE"?p.sizeBytes:4096;return`${y} ${p.owner}:${p.group} ${h} ${new Date(p.createdAt).toISOString().slice(0,16).replace("T"," ")}`}case"-getfacl":{const d=f[0]||"/",p=this.acls.get(d)||["user::rwx","group::r-x","other::r-x"];return`# file: ${d}
# owner: Hacker
# group: supergroup
${p.join(`
`)}`}case"-setfacl":{const d=f[1]||"/",p=f[0]||"user:alice:rwx";let y=this.acls.get(d)||["user::rwx","group::r-x","other::r-x"];return y.push(p),this.acls.set(d,y),`✓ Updated ACL for ${d}`}case"-expunge":return"✓ Emptied Trash (/user/Hacker/.Trash). Storage reclaimed.";case"-allowSnapshot":{const d=f[0]||"/";let p=this.snapshots.get(d);return p||(p=new Set,this.snapshots.set(d,p)),`Allowing snapshot on ${d} succeeded`}case"-createSnapshot":{const d=f[0]||"/",p=f[1]||`s_${Date.now()}`;let y=this.snapshots.get(d);return y||(y=new Set,this.snapshots.set(d,y)),y.add(p),`Created snapshot ${d}/.snapshot/${p}`}case"-deleteSnapshot":{const d=f[0]||"/",p=f[1]||"",y=this.snapshots.get(d);return y&&y.has(p)?(y.delete(p),`✓ Deleted snapshot ${p} from ${d}`):`deleteSnapshot: Snapshot \`${p}\` does not exist for \`${d}\``}case"-ls":{const d=f[0]||"/",p=this.nameNode.getNamespace().resolvePath(d);if(!p)return`ls: \`${d}\`: No such file or directory`;if(p.type==="FILE")return`${p.permissions}   ${p.replicationFactor} ${p.owner} ${p.group}  ${p.sizeBytes.toString().padStart(8)} ${new Date(p.createdAt).toISOString().slice(0,16).replace("T"," ")} ${p.name}`;{if(p.children.size===0)return"Found 0 items";const y=[`Found ${p.children.size} items`];return p.children.forEach(h=>{const b=h.type==="FILE"?h.replicationFactor:"-",w=h.type==="FILE"?h.sizeBytes:0;y.push(`${h.permissions}   ${b} ${h.owner} ${h.group}  ${w.toString().padStart(8)} ${new Date(h.createdAt).toISOString().slice(0,16).replace("T"," ")} ${h.name}`)}),y.join(`
`)}}case"-mkdir":{if(f.length===0)return"mkdir: Missing directory argument";const d=f[0],p=c.has("-p");try{return this.nameNode.getNamespace().mkdir(d,p),this.db.saveHdfsFileContent(d,"__HADOOP_DIR__"),`✓ Created HDFS directory: ${d}`}catch(y){return`mkdir: ${y.message}`}}case"-touchz":{if(f.length===0)return"touchz: Missing file path argument";const d=f[0];try{return this.nameNode.createAndWriteFile(d,""),this.db.saveHdfsFileContent(d,""),`✓ Created empty 0-byte HDFS file: ${d}`}catch(p){return`touchz: ${p.message}`}}case"-cp":{if(f.length<2)return"cp: Usage: hdfs dfs -cp <src> <dst>";const d=f[0],p=f[1],y=this.nameNode.readFileContent(d);if(y===void 0)return`cp: \`${d}\`: No such file or directory`;try{return this.nameNode.createAndWriteFile(p,y),this.db.saveHdfsFileContent(p,y),`✓ Copied in HDFS: [${d}] -> [${p}]`}catch(h){return`cp: ${h.message}`}}case"-mv":{if(f.length<2)return"mv: Usage: hdfs dfs -mv <src> <dst>";const d=f[0],p=f[1],y=this.nameNode.readFileContent(d);if(y===void 0)return`mv: \`${d}\`: No such file or directory`;try{return this.nameNode.createAndWriteFile(p,y),this.nameNode.getNamespace().deletePath(d,!0),this.db.saveHdfsFileContent(p,y),this.db.deleteHdfsFileContent(d),`✓ Moved in HDFS: [${d}] -> [${p}]`}catch(h){return`mv: ${h.message}`}}case"-setrep":{if(f.length<2)return"setrep: Usage: hdfs dfs -setrep [-w] <replication> <path>";const d=parseInt(f[0])||3,p=f[1],y=this.nameNode.getNamespace().resolvePath(p);return!y||y.type!=="FILE"?`setrep: \`${p}\`: No such file`:(y.replicationFactor=d,`Replication ${d} set for ${p}`)}case"-chmod":{if(f.length<2)return"chmod: Usage: hdfs dfs -chmod <mode> <path>";const d=f[0],p=f[1],y=this.nameNode.getNamespace().resolvePath(p);return y?(y.permissions=d.startsWith("-")||d.startsWith("d")?d:`-${d}`,`Changed permissions of ${p} to ${y.permissions}`):`chmod: \`${p}\`: No such file or directory`}case"-chown":{if(f.length<2)return"chown: Usage: hdfs dfs -chown <owner[:group]> <path>";const d=f[0],p=f[1],y=this.nameNode.getNamespace().resolvePath(p);if(!y)return`chown: \`${p}\`: No such file or directory`;if(d.includes(":")){const[h,b]=d.split(":");y.owner=h,y.group=b}else y.owner=d;return`Changed owner of ${p} to ${y.owner}:${y.group}`}case"-put":case"-copyFromLocal":{if(f.length<2)return"put: Usage: hdfs dfs -put <localfile> <hdfspath>";const d=f[0],p=f[1];let y=d;const h=this.getLocalFileContent(d);h!==void 0&&(y=h);try{return this.nameNode.createAndWriteFile(p,y),this.db.saveHdfsFileContent(p,y),`✓ Copied from Local [${d}] -> HDFS [${p}] (3 replicas allocated across DataNodes)`}catch(b){return`put: ${b.message}`}}case"-get":case"-copyToLocal":{if(f.length<2)return"get: Usage: hdfs dfs -get <hdfspath> <localfile>";const d=f[0],p=f[1],y=this.nameNode.readFileContent(d);return y===void 0?`get: \`${d}\`: No such file or directory in HDFS`:(this.saveLocalFileContent(p,y),`✓ Copied from HDFS [${d}] -> Local [${p}] successfully.`)}case"-cat":{if(f.length===0)return"cat: Missing file path argument";const d=f[0],p=this.nameNode.getNamespace().resolvePath(d);if(!p||p.type!=="FILE")return`cat: \`${d}\`: No such file`;const y=this.nameNode.readFileContent(d);return y!==void 0?y:`hello hadoop
hello world
hadoop world
`}case"-tail":{if(f.length===0)return"tail: Missing file path argument";const d=f[0],p=this.nameNode.readFileContent(d);return p===void 0?`tail: \`${d}\`: No such file`:p.split(`
`).slice(-10).join(`
`)}case"-head":{if(f.length===0)return"head: Missing file path argument";const d=f[0],p=this.nameNode.readFileContent(d);return p===void 0?`head: \`${d}\`: No such file`:p.split(`
`).slice(0,10).join(`
`)}case"-rm":case"-rmdir":{if(f.length===0)return"rm: Missing file path argument";const d=f[0],p=c.has("-r")||i==="-rm";try{const y=this.nameNode.getNamespace().deletePath(d,p);return y&&this.db.deleteHdfsFileContent(d),y?`✓ Deleted ${d}`:`rm: \`${d}\`: No such file or directory`}catch(y){return`rm: ${y.message}`}}case"-du":{const d=f[0]||"/",p=this.nameNode.getNamespace().resolvePath(d);if(!p)return`du: \`${d}\`: No such file or directory`;const y=p.type==="FILE"?p.sizeBytes:1024;return`${y}  ${y*3}  ${d}`}case"-df":{const d=this.nameNode.getDataNodes(),p=d.reduce((b,w)=>b+w.storageCapacityBytes,0),y=d.reduce((b,w)=>b+w.storageUsedBytes,0),h=p-y;return`Filesystem           Size       Used      Available  Use%
file:///         ${(p/(1024*1024)).toFixed(1)}MB    ${(y/(1024*1024)).toFixed(1)}MB    ${(h/(1024*1024)).toFixed(1)}MB     ${(y/p*100).toFixed(1)}%`}case"-help":default:return`HDFS Shell Commands:
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
  hdfs dfs -df                        Display filesystem storage capacity`}if(u==="fsck"){const d=f[0]||"/";if(c.has("-files")||c.has("-blocks")||c.has("-locations"))return`Connecting to NameNode at localhost:9000...
FSCK started by Hacker for path ${d} at ${new Date().toISOString()}
. Status: HEALTHY
/file.txt 1024 bytes, 1 block(s):  OK
0. BP-10023412-127.0.0.1-1700000000:blk_1073741825_1001 len=1024 repl=3 [datanode1.hadoop.local:9866, datanode2.hadoop.local:9866, datanode3.hadoop.local:9866]

The filesystem under path '${d}' is HEALTHY`;const p=this.nameNode.runFSCK(d),y=["+-------------------------------------------------------------+","|                    HDFS FILE SYSTEM CHECK                   |","+-------------------------------------------------------------+",` Status:                       ${p.isHealthy?"HEALTHY ✓":"UNHEALTHY ✗"}`,` Total size:                    ${p.totalFiles*1024} B`,` Total files:                   ${p.totalFiles}`,` Total blocks:                  ${p.totalBlocks}`,` Minimally replicated blocks:   ${p.totalBlocks}`," Over-replicated blocks:        0",` Under-replicated blocks:       ${p.underReplicatedBlocks}`," Mis-replicated blocks:         0"," Default replication factor:    3",` Average block replication:     ${p.totalBlocks>0?(p.totalReplicas/p.totalBlocks).toFixed(2):0}`,` Corrupt blocks:                ${p.corruptBlocks}`,` Missing replicas:              ${p.missingBlocks}`,"+-------------------------------------------------------------+"];return p.details.length>0&&y.push(`
Details:
`+p.details.join(`
`)),y.join(`
`)}if(u==="dfsadmin"){if(i==="-refreshNodes")return`[HDFS Admin] Re-reading dfs.hosts and dfs.hosts.exclude...
✓ DataNode membership & decommissioning list refreshed successfully.`;if(i==="-metasave"){const d=f[0]||"metasave.log";return this.saveLocalFileContent(d,`NameNode Metasave Report at ${new Date().toISOString()}
Live DataNodes: 3
Under-replicated blocks: 0
Corrupt blocks: 0
Replication Queues: Empty`),`Created metasave report in local file ${d}`}if(i==="-triggerBlockReport")return`Triggering full block report on ${f[0]||"datanode1.hadoop.local"}...
✓ Full block report sent to Active NameNode nn1.`;if(i==="-enterMaintenance"){const d=f[0]||"datanode1.hadoop.local";return`[HDFS Admin] ${d} entering maintenance mode...
✓ DataNode ${d} placed in Maintenance Window. Re-replication suppressed.`}if(i==="-exitMaintenance")return`✓ DataNode ${f[0]||"datanode1.hadoop.local"} exited maintenance mode.`;if(i==="-saveNamespace")return`[SecondaryNameNode] Merging edits log into fsimage...
✓ Saved namespace image (fsimage_0000000000000000124) successfully.`;if(i==="-setQuota"){const d=parseInt(f[0])||1e3,p=f[1]||"/";return this.fileQuotas.set(p,d),`Set file count quota ${d} on ${p}`}if(i==="-setSpaceQuota"){const d=f[0]||"10g",p=f[1]||"/";return this.spaceQuotas.set(p,d),`Set space quota ${d} on ${p}`}if(i==="-clrSpaceQuota"){const d=f[0]||"/";return this.spaceQuotas.delete(d),`Cleared space quota on ${d}`}if(i==="-report"){const d=this.nameNode.getDataNodes(),p=[`Configured Capacity: ${d.length*10} GB`,`Present Capacity: ${d.length*10} GB`,`DFS Remaining: ${d.length*10-.1} GB`,"DFS Used: 0.1 GB","DFS Used%: 1.0%","Under replicated blocks: 0","Blocks with corrupt replicas: 0","Missing blocks: 0","-------------------------------------------------",`Live datanodes (${d.length}):
`];return d.forEach(y=>{p.push(`Name: ${y.hostname} (${y.id})
Hostname: ${y.hostname}
Rack: ${y.rackId}
State: ${y.state}
Used: ${y.storageUsedBytes} B
Blocks: ${y.blocks.length}
Last Heartbeat: OK
`)}),p.join(`
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
${f.stderr}`.trim():f.stdout}return this.executePythonSync(r,u)}executePythonSync(r,u){const i=[];let c=0,f=null;const d=(p="")=>{if(c<u.length){const y=u[c++];return p&&i.push(`${p}${y}`),y}throw f=p||"Enter input: ",new Error("__NEED_INPUT__")};try{const p=di(r),z={__py_print__:(...H)=>{const X=H.map(W=>typeof W=="object"?JSON.stringify(W):String(W)).join(" ");i.push(X)},__py_input__:(H="")=>d(H),__py_open__:(H,X="r")=>{const W=this.resolveLocalPath(H),te=H.split("/").pop()||H;if(X.includes("w")||X.includes("a")){let I=X.includes("a")&&this.getLocalFileContent(W)||"";return{write:ge=>{I+=String(ge),this.saveLocalFileContent(W,I)},writelines:ge=>{I+=ge.join(""),this.saveLocalFileContent(W,I)},read:()=>I,close:()=>{},__enter__:function(){return this},__exit__:function(){}}}else{const I=this.getLocalFileContent(W)??this.getLocalFileContent(te)??"";return{read:()=>I,readline:()=>I.split(`
`)[0]||"",readlines:()=>I.split(`
`),write:()=>{},close:()=>{},__enter__:function(){return this},__exit__:function(){}}}},__py_import__:H=>{const X=`${H}.py`,W=this.getLocalFileContent(X)||this.getLocalFileContent(`/home/Hacker/${X}`);if(W===void 0)throw new Error(`No module named '${H}'`);const te={Math,JSON,parseInt,parseFloat,String,Number,Array,Object,True:!0,False:!1,None:null},I=di(W);return new Function(...Object.keys(te),I)(...Object.values(te)),te},Math,JSON,parseInt,parseFloat,String,Number,Array,Object,True:!0,False:!1,None:null,len:H=>H&&H.length!==void 0?H.length:0,range:(H,X,W=1)=>{X===void 0&&(X=H,H=0);const te=[];for(let I=H;I<X;I+=W)te.push(I);return te},str:H=>String(H),int:H=>parseInt(H,10)||0,float:H=>parseFloat(H)||0,list:H=>Array.from(H||[])},Y=Object.keys(z),U=Object.values(z);return new Function(...Y,p)(...U),i.length>0?i.join(`
`):""}catch(p){return p&&p.message==="__NEED_INPUT__"?`__NEED_INPUT__:${f||"Enter input: "}`:i.length>0?`${i.join(`
`)}
Python SyntaxError / RuntimeError: ${p.message}`:`Python SyntaxError / RuntimeError: ${p.message}`}}getGeneralHelpText(){return`Hadoop Practice Laboratory Terminal Help:
Hadoop Daemon Controls:
  start-dfs.sh / start-all.sh   Start HDFS & YARN cluster daemons
  stop-dfs.sh / stop-all.sh     Stop cluster daemons

Linux Commands & Text Editor:
  ls, pwd, cd, mkdir, rmdir, echo, cat, touch, rm, whoami
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
  python / python3               Open interactive Python REPL (>>> prompt)
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
  clear                                Clear terminal screen`}}class iy{constructor(r=3,u=2,i=12345){O(this,"engine");O(this,"nameNode");O(this,"dataNodes",new Map);O(this,"resourceManager");O(this,"network");O(this,"mapReduceEngine");O(this,"failureInjector");O(this,"observability");O(this,"shellExecutor");O(this,"db");this.engine=new $h(i),this.network=new ey,this.nameNode=new Ih(this.engine),this.resourceManager=new Ph(this.engine),this.db=new Jd;for(let c=1;c<=r;c++){const f=`dn-${c.toString().padStart(2,"0")}`,p=`/rack-0${(c-1)%u+1}`,y=`datanode${c}.hadoop.local`;this.network.registerNode(f,p);const h=new Jh(f,y,p,10*1024*1024*1024,this.nameNode,this.engine);this.dataNodes.set(f,h),this.resourceManager.registerNodeManager(h.node)}this.mapReduceEngine=new Wh(this.engine,this.nameNode,this.resourceManager,this.network),this.failureInjector=new ty(this.nameNode,this.dataNodes,this.network,this.engine),this.observability=new ay(this.nameNode,this.resourceManager,this.engine),this.shellExecutor=new sy(this.nameNode,this.resourceManager,this.mapReduceEngine,this.db)}async initFromDB(){await this.shellExecutor.loadFromDB()}getBackendType(){return"SIMULATOR"}getEngine(){return this.engine}getNameNode(){return this.nameNode}getResourceManager(){return this.resourceManager}getMapReduceEngine(){return this.mapReduceEngine}getNetwork(){return this.network}getFailureInjector(){return this.failureInjector}getObservability(){return this.observability}executeCLI(r){return this.shellExecutor.execute(r)}executePySparkRepl(r){return this.shellExecutor.executePySparkRepl(r)}executePythonRepl(r){return this.shellExecutor.executePythonRepl(r)}saveLocalFile(r,u){this.shellExecutor.saveLocalFileContent(r,u)}readLocalFile(r){return this.shellExecutor.getLocalFileContent(r)}getWorkingDir(){return this.shellExecutor.getWorkingDirDisplay()}}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=E=>E.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wd=(...E)=>E.filter((r,u,i)=>!!r&&r.trim()!==""&&i.indexOf(r)===u).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=he.forwardRef(({color:E="currentColor",size:r=24,strokeWidth:u=2,absoluteStrokeWidth:i,className:c="",children:f,iconNode:d,...p},y)=>he.createElement("svg",{ref:y,...oy,width:r,height:r,stroke:E,strokeWidth:i?Number(u)*24/Number(r):u,className:Wd("lucide",c),...p},[...d.map(([h,b])=>he.createElement(h,b)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=(E,r)=>{const u=he.forwardRef(({className:i,...c},f)=>he.createElement(uy,{ref:f,iconNode:r,className:Wd(`lucide-${ry(E)}`,i),...c}));return u.displayName=`${E}`,u};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],fy=mi("CircleCheck",cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],py=mi("Download",dy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],hy=mi("Terminal",my);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gy=mi("X",yy),_y=()=>{const[E,r]=he.useState(window.deferredPWAInstallPrompt||null),[u,i]=he.useState(!1),[c,f]=he.useState("idle"),[d,p]=he.useState(!1);he.useEffect(()=>{if(window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0){i(!1);return}window.deferredPWAInstallPrompt&&(r(window.deferredPWAInstallPrompt),i(!0));const w=U=>{U.preventDefault(),window.deferredPWAInstallPrompt=U,r(U),i(!0)},z=()=>{window.deferredPWAInstallPrompt&&(r(window.deferredPWAInstallPrompt),i(!0))},Y=()=>{f("done"),i(!1),window.deferredPWAInstallPrompt=null};return window.addEventListener("beforeinstallprompt",w),window.addEventListener("pwa-prompt-available",z),window.addEventListener("appinstalled",Y),()=>{window.removeEventListener("beforeinstallprompt",w),window.removeEventListener("pwa-prompt-available",z),window.removeEventListener("appinstalled",Y)}},[]);const y=async b=>{b&&(b.preventDefault(),b.stopPropagation());const w=E||window.deferredPWAInstallPrompt;if(w){f("installing");try{await w.prompt();const z=await w.userChoice.catch(()=>null);z&&z.outcome==="accepted"?(f("done"),window.deferredPWAInstallPrompt=null,setTimeout(()=>{i(!1)},1e3)):f("idle")}catch{f("idle")}}},h=b=>{b&&(b.preventDefault(),b.stopPropagation()),i(!1)};return!u||!E?null:q.jsxs("div",{className:"fixed bottom-3 left-3 right-3 sm:right-auto sm:bottom-4 sm:left-4 z-50 flex items-center justify-between gap-3 bg-black border border-cyan-500 text-white px-3.5 py-2.5 rounded-xl shadow-2xl shadow-cyan-500/20 w-auto sm:max-w-xs animate-slide-up select-none",style:{animation:"slideUp 0.3s ease-out"},children:[q.jsx("div",{className:"shrink-0 w-8 h-8 bg-black border border-cyan-500/50 rounded-lg flex items-center justify-center overflow-hidden",children:d?q.jsx(hy,{className:"w-5 h-5 text-yellow-400"}):q.jsx("img",{src:"./icons/icon-192.png",alt:"Hadoop",className:"w-6 h-6 object-contain",onError:()=>p(!0)})}),q.jsx("div",{className:"flex-1 min-w-0",children:q.jsx("p",{className:"text-xs font-black text-cyan-400 tracking-wide truncate",children:"Install Hadoop App"})}),c==="done"?q.jsxs("div",{className:"flex items-center gap-1 text-green-400 text-xs font-bold shrink-0",children:[q.jsx(fy,{className:"w-4 h-4 text-green-400"}),"Installed"]}):q.jsxs("button",{type:"button",onClick:y,disabled:c==="installing",className:"shrink-0 flex items-center gap-1.5 bg-black hover:bg-cyan-950 border border-cyan-400 text-cyan-400 hover:text-cyan-300 disabled:opacity-60 text-xs font-black px-3.5 py-2 rounded-lg transition-colors min-h-[36px] touch-manipulation cursor-pointer",children:[q.jsx(py,{className:"w-3.5 h-3.5 text-cyan-400"}),c==="installing"?"Installing…":"Install"]}),q.jsx("button",{type:"button",onClick:h,className:"shrink-0 text-red-500 hover:text-red-400 transition-colors ml-0.5 p-1 touch-manipulation cursor-pointer","aria-label":"Dismiss",children:q.jsx(gy,{className:"w-4 h-4"})}),q.jsx("style",{children:`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})};class vy extends he.Component{constructor(){super(...arguments);O(this,"state",{hasError:!1})}static getDerivedStateFromError(u){return{hasError:!0,error:u}}componentDidCatch(u,i){console.error("[App] Error boundary caught exception:",u,i)}render(){var u;return this.state.hasError?q.jsxs("div",{className:"w-screen h-screen bg-black text-white p-6 font-mono flex flex-col justify-center items-center text-center",children:[q.jsx("h1",{className:"text-yellow-400 font-bold text-xl mb-3",children:"Hadoop Simulation Engine Active"}),q.jsx("p",{className:"text-red-400 font-mono text-sm max-w-md mb-4",children:((u=this.state.error)==null?void 0:u.message)||"An unexpected error occurred."}),q.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-black font-bold rounded text-sm cursor-pointer",children:"Restart Terminal"})]}):this.props.children}}const Sy=()=>{const[E]=he.useState(()=>new iy(3,2));return he.useEffect(()=>{try{E.initFromDB().catch(()=>{})}catch{}},[E]),q.jsx(vy,{children:q.jsxs("div",{className:"w-screen h-screen bg-black text-white overflow-hidden font-mono",children:[q.jsx(qh,{backend:E}),q.jsx(_y,{})]})})};window.addEventListener("beforeinstallprompt",E=>{E.preventDefault(),window.deferredPWAInstallPrompt=E,window.dispatchEvent(new CustomEvent("pwa-prompt-available"))});Mh.createRoot(document.getElementById("root")).render(q.jsx(Dh.StrictMode,{children:q.jsx(Sy,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js",{scope:"./"}).then(E=>{setInterval(()=>{E.update().catch(()=>{})},12e4)}).catch(E=>{console.warn("[PWA] ServiceWorker registration error:",E)})});
