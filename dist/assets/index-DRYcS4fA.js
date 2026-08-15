var tb=Object.defineProperty;var nb=(r,e,i)=>e in r?tb(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var pd=(r,e,i)=>nb(r,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function dv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var md={exports:{}},jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function ib(){if(jg)return jo;jg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return jo.Fragment=e,jo.jsx=i,jo.jsxs=i,jo}var Wg;function ab(){return Wg||(Wg=1,md.exports=ib()),md.exports}var x=ab(),gd={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function sb(){if(qg)return rt;qg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function E(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,M={};function b(D,K,Se){this.props=D,this.context=K,this.refs=M,this.updater=Se||w}b.prototype.isReactComponent={},b.prototype.setState=function(D,K){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,K,"setState")},b.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function z(){}z.prototype=b.prototype;function B(D,K,Se){this.props=D,this.context=K,this.refs=M,this.updater=Se||w}var A=B.prototype=new z;A.constructor=B,U(A,b.prototype),A.isPureReactComponent=!0;var F=Array.isArray;function O(){}var P={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(D,K,Se){var we=Se.ref;return{$$typeof:r,type:D,key:K,ref:we!==void 0?we:null,props:Se}}function X(D,K){return L(D.type,K,D.props)}function V(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function q(D){var K={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Se){return K[Se]})}var ce=/\/+/g;function fe(D,K){return typeof D=="object"&&D!==null&&D.key!=null?q(""+D.key):K.toString(36)}function J(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(O,O):(D.status="pending",D.then(function(K){D.status==="pending"&&(D.status="fulfilled",D.value=K)},function(K){D.status==="pending"&&(D.status="rejected",D.reason=K)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function I(D,K,Se,we,De){var te=typeof D;(te==="undefined"||te==="boolean")&&(D=null);var be=!1;if(D===null)be=!0;else switch(te){case"bigint":case"string":case"number":be=!0;break;case"object":switch(D.$$typeof){case r:case e:be=!0;break;case y:return be=D._init,I(be(D._payload),K,Se,we,De)}}if(be)return De=De(D),be=we===""?"."+fe(D,0):we,F(De)?(Se="",be!=null&&(Se=be.replace(ce,"$&/")+"/"),I(De,K,Se,"",function(nt){return nt})):De!=null&&(V(De)&&(De=X(De,Se+(De.key==null||D&&D.key===De.key?"":(""+De.key).replace(ce,"$&/")+"/")+be)),K.push(De)),1;be=0;var Me=we===""?".":we+":";if(F(D))for(var Be=0;Be<D.length;Be++)we=D[Be],te=Me+fe(we,Be),be+=I(we,K,Se,te,De);else if(Be=E(D),typeof Be=="function")for(D=Be.call(D),Be=0;!(we=D.next()).done;)we=we.value,te=Me+fe(we,Be++),be+=I(we,K,Se,te,De);else if(te==="object"){if(typeof D.then=="function")return I(J(D),K,Se,we,De);throw K=String(D),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return be}function G(D,K,Se){if(D==null)return D;var we=[],De=0;return I(D,we,"","",function(te){return K.call(Se,te,De++)}),we}function ee(D){if(D._status===-1){var K=D._result;K=K(),K.then(function(Se){(D._status===0||D._status===-1)&&(D._status=1,D._result=Se)},function(Se){(D._status===0||D._status===-1)&&(D._status=2,D._result=Se)}),D._status===-1&&(D._status=0,D._result=K)}if(D._status===1)return D._result.default;throw D._result}var ge=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},de={map:G,forEach:function(D,K,Se){G(D,function(){K.apply(this,arguments)},Se)},count:function(D){var K=0;return G(D,function(){K++}),K},toArray:function(D){return G(D,function(K){return K})||[]},only:function(D){if(!V(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return rt.Activity=_,rt.Children=de,rt.Component=b,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=B,rt.StrictMode=s,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,rt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return P.H.useMemoCache(D)}},rt.cache=function(D){return function(){return D.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(D,K,Se){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var we=U({},D.props),De=D.key;if(K!=null)for(te in K.key!==void 0&&(De=""+K.key),K)!T.call(K,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&K.ref===void 0||(we[te]=K[te]);var te=arguments.length-2;if(te===1)we.children=Se;else if(1<te){for(var be=Array(te),Me=0;Me<te;Me++)be[Me]=arguments[Me+2];we.children=be}return L(D.type,De,we)},rt.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},rt.createElement=function(D,K,Se){var we,De={},te=null;if(K!=null)for(we in K.key!==void 0&&(te=""+K.key),K)T.call(K,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(De[we]=K[we]);var be=arguments.length-2;if(be===1)De.children=Se;else if(1<be){for(var Me=Array(be),Be=0;Be<be;Be++)Me[Be]=arguments[Be+2];De.children=Me}if(D&&D.defaultProps)for(we in be=D.defaultProps,be)De[we]===void 0&&(De[we]=be[we]);return L(D,te,De)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(D){return{$$typeof:p,render:D}},rt.isValidElement=V,rt.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:ee}},rt.memo=function(D,K){return{$$typeof:h,type:D,compare:K===void 0?null:K}},rt.startTransition=function(D){var K=P.T,Se={};P.T=Se;try{var we=D(),De=P.S;De!==null&&De(Se,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(O,ge)}catch(te){ge(te)}finally{K!==null&&Se.types!==null&&(K.types=Se.types),P.T=K}},rt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},rt.use=function(D){return P.H.use(D)},rt.useActionState=function(D,K,Se){return P.H.useActionState(D,K,Se)},rt.useCallback=function(D,K){return P.H.useCallback(D,K)},rt.useContext=function(D){return P.H.useContext(D)},rt.useDebugValue=function(){},rt.useDeferredValue=function(D,K){return P.H.useDeferredValue(D,K)},rt.useEffect=function(D,K){return P.H.useEffect(D,K)},rt.useEffectEvent=function(D){return P.H.useEffectEvent(D)},rt.useId=function(){return P.H.useId()},rt.useImperativeHandle=function(D,K,Se){return P.H.useImperativeHandle(D,K,Se)},rt.useInsertionEffect=function(D,K){return P.H.useInsertionEffect(D,K)},rt.useLayoutEffect=function(D,K){return P.H.useLayoutEffect(D,K)},rt.useMemo=function(D,K){return P.H.useMemo(D,K)},rt.useOptimistic=function(D,K){return P.H.useOptimistic(D,K)},rt.useReducer=function(D,K,Se){return P.H.useReducer(D,K,Se)},rt.useRef=function(D){return P.H.useRef(D)},rt.useState=function(D){return P.H.useState(D)},rt.useSyncExternalStore=function(D,K,Se){return P.H.useSyncExternalStore(D,K,Se)},rt.useTransition=function(){return P.H.useTransition()},rt.version="19.2.8",rt}var Yg;function jh(){return Yg||(Yg=1,gd.exports=sb()),gd.exports}var He=jh();const rb=dv(He);var xd={exports:{}},Wo={},vd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function ob(){return Zg||(Zg=1,(function(r){function e(I,G){var ee=I.length;I.push(G);e:for(;0<ee;){var ge=ee-1>>>1,de=I[ge];if(0<l(de,G))I[ge]=G,I[ee]=de,ee=ge;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var G=I[0],ee=I.pop();if(ee!==G){I[0]=ee;e:for(var ge=0,de=I.length,D=de>>>1;ge<D;){var K=2*(ge+1)-1,Se=I[K],we=K+1,De=I[we];if(0>l(Se,ee))we<de&&0>l(De,Se)?(I[ge]=De,I[we]=ee,ge=we):(I[ge]=Se,I[K]=ee,ge=K);else if(we<de&&0>l(De,ee))I[ge]=De,I[we]=ee,ge=we;else break e}}return G}function l(I,G){var ee=I.sortIndex-G.sortIndex;return ee!==0?ee:I.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],y=1,_=null,g=3,E=!1,w=!1,U=!1,M=!1,b=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function A(I){for(var G=i(h);G!==null;){if(G.callback===null)s(h);else if(G.startTime<=I)s(h),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(h)}}function F(I){if(U=!1,A(I),!w)if(i(m)!==null)w=!0,O||(O=!0,q());else{var G=i(h);G!==null&&J(F,G.startTime-I)}}var O=!1,P=-1,T=5,L=-1;function X(){return M?!0:!(r.unstable_now()-L<T)}function V(){if(M=!1,O){var I=r.unstable_now();L=I;var G=!0;try{e:{w=!1,U&&(U=!1,z(P),P=-1),E=!0;var ee=g;try{t:{for(A(I),_=i(m);_!==null&&!(_.expirationTime>I&&X());){var ge=_.callback;if(typeof ge=="function"){_.callback=null,g=_.priorityLevel;var de=ge(_.expirationTime<=I);if(I=r.unstable_now(),typeof de=="function"){_.callback=de,A(I),G=!0;break t}_===i(m)&&s(m),A(I)}else s(m);_=i(m)}if(_!==null)G=!0;else{var D=i(h);D!==null&&J(F,D.startTime-I),G=!1}}break e}finally{_=null,g=ee,E=!1}G=void 0}}finally{G?q():O=!1}}}var q;if(typeof B=="function")q=function(){B(V)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,fe=ce.port2;ce.port1.onmessage=V,q=function(){fe.postMessage(null)}}else q=function(){b(V,0)};function J(I,G){P=b(function(){I(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(I){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var ee=g;g=G;try{return I()}finally{g=ee}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ee=g;g=I;try{return G()}finally{g=ee}},r.unstable_scheduleCallback=function(I,G,ee){var ge=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ge+ee:ge):ee=ge,I){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ee+de,I={id:y++,callback:G,priorityLevel:I,startTime:ee,expirationTime:de,sortIndex:-1},ee>ge?(I.sortIndex=ee,e(h,I),i(m)===null&&I===i(h)&&(U?(z(P),P=-1):U=!0,J(F,ee-ge))):(I.sortIndex=de,e(m,I),w||E||(w=!0,O||(O=!0,q()))),I},r.unstable_shouldYield=X,r.unstable_wrapCallback=function(I){var G=g;return function(){var ee=g;g=G;try{return I.apply(this,arguments)}finally{g=ee}}}})(_d)),_d}var Kg;function lb(){return Kg||(Kg=1,vd.exports=ob()),vd.exports}var yd={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function cb(){if(Qg)return In;Qg=1;var r=jh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,y){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:y}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.createPortal=function(m,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,y)},In.flushSync=function(m){var h=d.T,y=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=y,s.d.f()}},In.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},In.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},In.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var y=h.as,_=p(y,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:E}):y==="script"&&s.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},In.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},In.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,_=p(y,h.crossOrigin);s.d.L(m,y,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},In.preloadModule=function(m,h){if(typeof m=="string")if(h){var y=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},In.requestFormReset=function(m){s.d.r(m)},In.unstable_batchedUpdates=function(m,h){return m(h)},In.useFormState=function(m,h,y){return d.H.useFormState(m,h,y)},In.useFormStatus=function(){return d.H.useHostTransitionStatus()},In.version="19.2.8",In}var Jg;function ub(){if(Jg)return yd.exports;Jg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),yd.exports=cb(),yd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function fb(){if($g)return Wo;$g=1;var r=lb(),e=jh(),i=ub();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,C=u.child;C;){if(C===a){v=!0,a=u,o=f;break}if(C===o){v=!0,o=u,a=f;break}C=C.sibling}if(!v){for(C=f.child;C;){if(C===a){v=!0,a=f,o=u;break}if(C===o){v=!0,o=f,a=u;break}C=C.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),B=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case b:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case O:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case B:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case A:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var J=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ge=[],de=-1;function D(t){return{current:t}}function K(t){0>de||(t.current=ge[de],ge[de]=null,de--)}function Se(t,n){de++,ge[de]=t.current,t.current=n}var we=D(null),De=D(null),te=D(null),be=D(null);function Me(t,n){switch(Se(te,n),Se(De,t),Se(we,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?pg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=pg(n),t=mg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(we),Se(we,t)}function Be(){K(we),K(De),K(te)}function nt(t){t.memoizedState!==null&&Se(be,t);var n=we.current,a=mg(n,t.type);n!==a&&(Se(De,t),Se(we,a))}function Ke(t){De.current===t&&(K(we),K(De)),be.current===t&&(K(be),Ho._currentValue=ee)}var Ct,ft;function gt(t){if(Ct===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ct=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ct+t+ft}var pt=!1;function dt(t,n){if(!t||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ue){var le=ue}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(ue){le=ue}t.call(ye.prototype)}}else{try{throw Error()}catch(ue){le=ue}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ue){if(ue&&le&&typeof ue.stack=="string")return[ue.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],C=f[1];if(v&&C){var H=v.split(`
`),ie=C.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ie.length)for(o=H.length-1,u=ie.length-1;1<=o&&0<=u&&H[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ie[u]){var xe=`
`+H[o].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=o&&0<=u);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?gt(a):""}function Yt(t,n){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return gt("Activity");default:return""}}function Kt(t){try{var n="",a=null;do n+=Yt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Qt=Object.prototype.hasOwnProperty,tn=r.unstable_scheduleCallback,Pt=r.unstable_cancelCallback,Jt=r.unstable_shouldYield,Y=r.unstable_requestPaint,st=r.unstable_now,At=r.unstable_getCurrentPriorityLevel,N=r.unstable_ImmediatePriority,S=r.unstable_UserBlockingPriority,W=r.unstable_NormalPriority,$=r.unstable_LowPriority,he=r.unstable_IdlePriority,Ae=r.log,Te=r.unstable_setDisableYieldValue,pe=null,me=null;function Ce(t){if(typeof Ae=="function"&&Te(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(pe,t)}catch{}}var ze=Math.clz32?Math.clz32:Qe,Oe=Math.log,Ue=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Oe(t)/Ue|0)|0}var Je=256,at=262144,j=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=Re(o):(v&=C,v!==0?u=Re(v):a||(a=C&~t,a!==0&&(u=Re(a))))):(C=o&~f,C!==0?u=Re(C):v!==0?u=Re(v):a||(a=o&~t,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ne(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Fe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=j;return j<<=1,(j&62914560)===0&&(j=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ke(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nn(t,n,a,o,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,H=t.expirationTimes,ie=t.hiddenUpdates;for(a=v&~a;0<a;){var xe=31-ze(a),ye=1<<xe;C[xe]=0,H[xe]=-1;var le=ie[xe];if(le!==null)for(ie[xe]=null,xe=0;xe<le.length;xe++){var ue=le[xe];ue!==null&&(ue.lane&=-536870913)}a&=~ye}o!==0&&It(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function It(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ze(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function $n(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ze(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ei(t,n){var a=n&-n;return a=(a&42)!==0?1:eo(a),(a&(t.suspendedLanes|n))!==0?0:a}function eo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function to(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function no(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Fg(t.type))}function Ys(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var Ii=Math.random().toString(36).slice(2),hn="__reactFiber$"+Ii,wn="__reactProps$"+Ii,jn="__reactContainer$"+Ii,ms="__reactEvents$"+Ii,dl="__reactListeners$"+Ii,hl="__reactHandles$"+Ii,gs="__reactResources$"+Ii,Da="__reactMarker$"+Ii;function Ua(t){delete t[hn],delete t[wn],delete t[ms],delete t[dl],delete t[hl]}function ea(t){var n=t[hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[jn]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Sg(t);t!==null;){if(a=t[hn])return a;t=Sg(t)}return n}t=a,a=t.parentNode}return null}function ta(t){if(t=t[hn]||t[jn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function xs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function La(t){var n=t[gs];return n||(n=t[gs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function pn(t){t[Da]=!0}var pl=new Set,R={};function Z(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(R[t]=n,t=0;t<n.length;t++)pl.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},Pe={};function Ve(t){return Qt.call(Pe,t)?!0:Qt.call(se,t)?!1:ae.test(t)?Pe[t]=!0:(se[t]=!0,!1)}function Le(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function je(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Nt(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function an(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=lt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Wt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bt=/[\n"\\]/g;function Ft(t){return t.replace(Bt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,a,o,u,f,v,C){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?xt(t,v,$e(n)):a!=null?xt(t,v,$e(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+$e(C):t.removeAttribute("name")}function Pn(t,n,a,o,u,f,v,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Nt(t);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Nt(t)}function xt(t,n,a){n==="number"&&Wt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function yn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ti(t,n,a){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$e(a):""}function Ai(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$e(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Nt(t)}function ni(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||zt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function wi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&sn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&sn(t,f,n[f])}function Ot(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vs(t){return Oa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function na(){}var uu=null;function fu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zs=null,Ks=null;function hp(t){var n=ta(t);if(n&&(t=n.stateNode)){var a=t[wn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ft(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[wn]||null;if(!u)throw Error(s(90));Ge(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&an(o)}break e;case"textarea":ti(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&yn(t,!!a.multiple,n,!1)}}}var du=!1;function pp(t,n,a){if(du)return t(n,a);du=!0;try{var o=t(n);return o}finally{if(du=!1,(Zs!==null||Ks!==null)&&(tc(),Zs&&(n=Zs,t=Ks,Ks=Zs=null,hp(n),t)))for(n=0;n<t.length;n++)hp(t[n])}}function io(t,n){var a=t.stateNode;if(a===null)return null;var o=a[wn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(ia)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){hu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{hu=!1}var Pa=null,pu=null,ml=null;function mp(){if(ml)return ml;var t,n=pu,a=n.length,o,u="value"in Pa?Pa.value:Pa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return ml=u.slice(t,1<o?1-o:void 0)}function gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function gp(){return!1}function Wn(t){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?xl:gp,this.isPropagationStopped=gp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),n}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Wn(_s),so=_({},_s,{view:0,detail:0}),$v=Wn(so),mu,gu,ro,_l=_({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(mu=t.screenX-ro.screenX,gu=t.screenY-ro.screenY):gu=mu=0,ro=t),mu)},movementY:function(t){return"movementY"in t?t.movementY:gu}}),xp=Wn(_l),e_=_({},_l,{dataTransfer:0}),t_=Wn(e_),n_=_({},so,{relatedTarget:0}),xu=Wn(n_),i_=_({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),a_=Wn(i_),s_=_({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),r_=Wn(s_),o_=_({},_s,{data:0}),vp=Wn(o_),l_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=u_[t])?!!n[t]:!1}function vu(){return f_}var d_=_({},so,{key:function(t){if(t.key){var n=l_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),h_=Wn(d_),p_=_({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Wn(p_),m_=_({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),g_=Wn(m_),x_=_({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),v_=Wn(x_),__=_({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y_=Wn(__),b_=_({},_s,{newState:0,oldState:0}),S_=Wn(b_),M_=[9,13,27,32],_u=ia&&"CompositionEvent"in window,oo=null;ia&&"documentMode"in document&&(oo=document.documentMode);var E_=ia&&"TextEvent"in window&&!oo,yp=ia&&(!_u||oo&&8<oo&&11>=oo),bp=" ",Sp=!1;function Mp(t,n){switch(t){case"keyup":return M_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function T_(t,n){switch(t){case"compositionend":return Ep(n);case"keypress":return n.which!==32?null:(Sp=!0,bp);case"textInput":return t=n.data,t===bp&&Sp?null:t;default:return null}}function A_(t,n){if(Qs)return t==="compositionend"||!_u&&Mp(t,n)?(t=mp(),ml=pu=Pa=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yp&&n.locale!=="ko"?null:n.data;default:return null}}var w_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!w_[t.type]:n==="textarea"}function Ap(t,n,a,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,n=lc(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var lo=null,co=null;function R_(t){lg(t,0)}function yl(t){var n=xs(t);if(an(n))return t}function wp(t,n){if(t==="change")return n}var Rp=!1;if(ia){var yu;if(ia){var bu="oninput"in document;if(!bu){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),bu=typeof Cp.oninput=="function"}yu=bu}else yu=!1;Rp=yu&&(!document.documentMode||9<document.documentMode)}function Np(){lo&&(lo.detachEvent("onpropertychange",Dp),co=lo=null)}function Dp(t){if(t.propertyName==="value"&&yl(co)){var n=[];Ap(n,co,t,fu(t)),pp(R_,n)}}function C_(t,n,a){t==="focusin"?(Np(),lo=n,co=a,lo.attachEvent("onpropertychange",Dp)):t==="focusout"&&Np()}function N_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(co)}function D_(t,n){if(t==="click")return yl(n)}function U_(t,n){if(t==="input"||t==="change")return yl(n)}function L_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:L_;function uo(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Qt.call(n,u)||!ii(t[u],n[u]))return!1}return!0}function Up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lp(t,n){var a=Up(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Up(a)}}function Op(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Op(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Pp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Wt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Wt(t.document)}return n}function Su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var O_=ia&&"documentMode"in document&&11>=document.documentMode,Js=null,Mu=null,fo=null,Eu=!1;function Ip(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||Js==null||Js!==Wt(o)||(o=Js,"selectionStart"in o&&Su(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&uo(fo,o)||(fo=o,o=lc(Mu,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Js)))}function ys(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var $s={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},Tu={},Bp={};ia&&(Bp=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function bs(t){if(Tu[t])return Tu[t];if(!$s[t])return t;var n=$s[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Bp)return Tu[t]=n[a];return t}var Fp=bs("animationend"),zp=bs("animationiteration"),Gp=bs("animationstart"),P_=bs("transitionrun"),I_=bs("transitionstart"),B_=bs("transitioncancel"),Hp=bs("transitionend"),Vp=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function Ri(t,n){Vp.set(t,n),Z(n,[t])}var bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],er=0,wu=0;function Sl(){for(var t=er,n=wu=er=0;n<t;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&kp(a,u,f)}}function Ml(t,n,a,o){hi[er++]=t,hi[er++]=n,hi[er++]=a,hi[er++]=o,wu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ru(t,n,a,o){return Ml(t,n,a,o),El(t)}function Ss(t,n){return Ml(t,null,null,n),El(t)}function kp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-ze(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function El(t){if(50<Oo)throw Oo=0,Ff=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var tr={};function F_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,n,a,o){return new F_(t,n,a,o)}function Cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aa(t,n){var a=t.alternate;return a===null?(a=ai(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Xp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Tl(t,n,a,o,u,f){var v=0;if(o=t,typeof t=="function")Cu(t)&&(v=1);else if(typeof t=="string")v=ky(t,a,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ai(31,a,n,u),t.elementType=L,t.lanes=f,t;case U:return Ms(a.children,u,f,n);case M:v=8,u|=24;break;case b:return t=ai(12,a,n,u|2),t.elementType=b,t.lanes=f,t;case F:return t=ai(13,a,n,u),t.elementType=F,t.lanes=f,t;case O:return t=ai(19,a,n,u),t.elementType=O,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:v=10;break e;case z:v=9;break e;case A:v=11;break e;case P:v=14;break e;case T:v=16,o=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ai(v,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Ms(t,n,a,o){return t=ai(7,t,o,n),t.lanes=a,t}function Nu(t,n,a){return t=ai(6,t,null,n),t.lanes=a,t}function jp(t){var n=ai(18,null,null,0);return n.stateNode=t,n}function Du(t,n,a){return n=ai(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Wp=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=Wp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Kt(n)},Wp.set(t,n),n)}return{value:t,source:n,stack:Kt(n)}}var nr=[],ir=0,Al=null,ho=0,mi=[],gi=0,Ia=null,Fi=1,zi="";function sa(t,n){nr[ir++]=ho,nr[ir++]=Al,Al=t,ho=n}function qp(t,n,a){mi[gi++]=Fi,mi[gi++]=zi,mi[gi++]=Ia,Ia=t;var o=Fi;t=zi;var u=32-ze(o)-1;o&=~(1<<u),a+=1;var f=32-ze(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Fi=1<<32-ze(n)+u|a<<u|o,zi=f+t}else Fi=1<<f|a<<u|o,zi=t}function Uu(t){t.return!==null&&(sa(t,1),qp(t,1,0))}function Lu(t){for(;t===Al;)Al=nr[--ir],nr[ir]=null,ho=nr[--ir],nr[ir]=null;for(;t===Ia;)Ia=mi[--gi],mi[gi]=null,zi=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null}function Yp(t,n){mi[gi++]=Fi,mi[gi++]=zi,mi[gi++]=Ia,Fi=n.id,zi=n.overflow,Ia=t}var Rn=null,$t=null,Mt=!1,Ba=null,xi=!1,Ou=Error(s(519));function Fa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(pi(n,t)),Ou}function Zp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[hn]=t,n[wn]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)_t(Io[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Ai(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||dg(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=na),n=!0):n=!1,n||Fa(t,!0)}function Kp(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Rn=Rn.return}}function ar(t){if(t!==Rn)return!1;if(!Mt)return Kp(t),Mt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||$f(t.type,t.memoizedProps)),a=!a),a&&$t&&Fa(t),Kp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=bg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=bg(t)}else n===27?(n=$t,Ja(t.type)?(t=ad,ad=null,$t=t):$t=n):$t=Rn?_i(t.stateNode.nextSibling):null;return!0}function Es(){$t=Rn=null,Mt=!1}function Pu(){var t=Ba;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Ba=null),t}function po(t){Ba===null?Ba=[t]:Ba.push(t)}var Iu=D(null),Ts=null,ra=null;function za(t,n,a){Se(Iu,n._currentValue),n._currentValue=a}function oa(t){t._currentValue=Iu.current,K(Iu)}function Bu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Fu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var H=0;H<n.length;H++)if(C.context===n[H]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Bu(f.return,a,t),o||(v=null);break e}f=C.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Bu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function sr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var C=u.type;ii(u.pendingProps.value,v.value)||(t!==null?t.push(C):t=[C])}}else if(u===be.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ho):t=[Ho])}u=u.return}t!==null&&Fu(n,t,a,o),n.flags|=262144}function wl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function As(t){Ts=t,ra=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Qp(Ts,t)}function Rl(t,n){return Ts===null&&As(t),Qp(t,n)}function Qp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ra===null){if(t===null)throw Error(s(308));ra=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ra=ra.next=n;return a}var z_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},G_=r.unstable_scheduleCallback,H_=r.unstable_NormalPriority,mn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new z_,data:new Map,refCount:0}}function mo(t){t.refCount--,t.refCount===0&&G_(H_,function(){t.controller.abort()})}var go=null,Gu=0,rr=0,or=null;function V_(t,n){if(go===null){var a=go=[];Gu=0,rr=Xf(),or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gu++,n.then(Jp,Jp),n}function Jp(){if(--Gu===0&&go!==null){or!==null&&(or.status="fulfilled");var t=go;go=null,rr=0,or=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function k_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var $p=I.S;I.S=function(t,n){I0=st(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&V_(t,n),$p!==null&&$p(t,n)};var ws=D(null);function Hu(){var t=ws.current;return t!==null?t:qt.pooledCache}function Cl(t,n){n===null?Se(ws,ws.current):Se(ws,n.pool)}function em(){var t=Hu();return t===null?null:{parent:mn._currentValue,pool:t}}var lr=Error(s(460)),Vu=Error(s(474)),Nl=Error(s(542)),Dl={then:function(){}};function tm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function nm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(na,na),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,am(t),t;default:if(typeof n.status=="string")n.then(na,na);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,am(t),t}throw Cs=n,lr}}function Rs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,lr):a}}var Cs=null;function im(){if(Cs===null)throw Error(s(459));var t=Cs;return Cs=null,t}function am(t){if(t===lr||t===Nl)throw Error(s(483))}var cr=null,xo=0;function Ul(t){var n=xo;return xo+=1,cr===null&&(cr=[]),nm(cr,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function sm(t){function n(Q,k){if(t){var ne=Q.deletions;ne===null?(Q.deletions=[k],Q.flags|=16):ne.push(k)}}function a(Q,k){if(!t)return null;for(;k!==null;)n(Q,k),k=k.sibling;return null}function o(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function u(Q,k){return Q=aa(Q,k),Q.index=0,Q.sibling=null,Q}function f(Q,k,ne){return Q.index=ne,t?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<k?(Q.flags|=67108866,k):ne):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function v(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function C(Q,k,ne,_e){return k===null||k.tag!==6?(k=Nu(ne,Q.mode,_e),k.return=Q,k):(k=u(k,ne),k.return=Q,k)}function H(Q,k,ne,_e){var et=ne.type;return et===U?xe(Q,k,ne.props.children,_e,ne.key):k!==null&&(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Rs(et)===k.type)?(k=u(k,ne.props),vo(k,ne),k.return=Q,k):(k=Tl(ne.type,ne.key,ne.props,null,Q.mode,_e),vo(k,ne),k.return=Q,k)}function ie(Q,k,ne,_e){return k===null||k.tag!==4||k.stateNode.containerInfo!==ne.containerInfo||k.stateNode.implementation!==ne.implementation?(k=Du(ne,Q.mode,_e),k.return=Q,k):(k=u(k,ne.children||[]),k.return=Q,k)}function xe(Q,k,ne,_e,et){return k===null||k.tag!==7?(k=Ms(ne,Q.mode,_e,et),k.return=Q,k):(k=u(k,ne),k.return=Q,k)}function ye(Q,k,ne){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Nu(""+k,Q.mode,ne),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return ne=Tl(k.type,k.key,k.props,null,Q.mode,ne),vo(ne,k),ne.return=Q,ne;case w:return k=Du(k,Q.mode,ne),k.return=Q,k;case T:return k=Rs(k),ye(Q,k,ne)}if(J(k)||q(k))return k=Ms(k,Q.mode,ne,null),k.return=Q,k;if(typeof k.then=="function")return ye(Q,Ul(k),ne);if(k.$$typeof===B)return ye(Q,Rl(Q,k),ne);Ll(Q,k)}return null}function le(Q,k,ne,_e){var et=k!==null?k.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return et!==null?null:C(Q,k,""+ne,_e);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case E:return ne.key===et?H(Q,k,ne,_e):null;case w:return ne.key===et?ie(Q,k,ne,_e):null;case T:return ne=Rs(ne),le(Q,k,ne,_e)}if(J(ne)||q(ne))return et!==null?null:xe(Q,k,ne,_e,null);if(typeof ne.then=="function")return le(Q,k,Ul(ne),_e);if(ne.$$typeof===B)return le(Q,k,Rl(Q,ne),_e);Ll(Q,ne)}return null}function ue(Q,k,ne,_e,et){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Q=Q.get(ne)||null,C(k,Q,""+_e,et);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case E:return Q=Q.get(_e.key===null?ne:_e.key)||null,H(k,Q,_e,et);case w:return Q=Q.get(_e.key===null?ne:_e.key)||null,ie(k,Q,_e,et);case T:return _e=Rs(_e),ue(Q,k,ne,_e,et)}if(J(_e)||q(_e))return Q=Q.get(ne)||null,xe(k,Q,_e,et,null);if(typeof _e.then=="function")return ue(Q,k,ne,Ul(_e),et);if(_e.$$typeof===B)return ue(Q,k,ne,Rl(k,_e),et);Ll(k,_e)}return null}function We(Q,k,ne,_e){for(var et=null,Dt=null,Ye=k,ht=k=0,bt=null;Ye!==null&&ht<ne.length;ht++){Ye.index>ht?(bt=Ye,Ye=null):bt=Ye.sibling;var Ut=le(Q,Ye,ne[ht],_e);if(Ut===null){Ye===null&&(Ye=bt);break}t&&Ye&&Ut.alternate===null&&n(Q,Ye),k=f(Ut,k,ht),Dt===null?et=Ut:Dt.sibling=Ut,Dt=Ut,Ye=bt}if(ht===ne.length)return a(Q,Ye),Mt&&sa(Q,ht),et;if(Ye===null){for(;ht<ne.length;ht++)Ye=ye(Q,ne[ht],_e),Ye!==null&&(k=f(Ye,k,ht),Dt===null?et=Ye:Dt.sibling=Ye,Dt=Ye);return Mt&&sa(Q,ht),et}for(Ye=o(Ye);ht<ne.length;ht++)bt=ue(Ye,Q,ht,ne[ht],_e),bt!==null&&(t&&bt.alternate!==null&&Ye.delete(bt.key===null?ht:bt.key),k=f(bt,k,ht),Dt===null?et=bt:Dt.sibling=bt,Dt=bt);return t&&Ye.forEach(function(is){return n(Q,is)}),Mt&&sa(Q,ht),et}function tt(Q,k,ne,_e){if(ne==null)throw Error(s(151));for(var et=null,Dt=null,Ye=k,ht=k=0,bt=null,Ut=ne.next();Ye!==null&&!Ut.done;ht++,Ut=ne.next()){Ye.index>ht?(bt=Ye,Ye=null):bt=Ye.sibling;var is=le(Q,Ye,Ut.value,_e);if(is===null){Ye===null&&(Ye=bt);break}t&&Ye&&is.alternate===null&&n(Q,Ye),k=f(is,k,ht),Dt===null?et=is:Dt.sibling=is,Dt=is,Ye=bt}if(Ut.done)return a(Q,Ye),Mt&&sa(Q,ht),et;if(Ye===null){for(;!Ut.done;ht++,Ut=ne.next())Ut=ye(Q,Ut.value,_e),Ut!==null&&(k=f(Ut,k,ht),Dt===null?et=Ut:Dt.sibling=Ut,Dt=Ut);return Mt&&sa(Q,ht),et}for(Ye=o(Ye);!Ut.done;ht++,Ut=ne.next())Ut=ue(Ye,Q,ht,Ut.value,_e),Ut!==null&&(t&&Ut.alternate!==null&&Ye.delete(Ut.key===null?ht:Ut.key),k=f(Ut,k,ht),Dt===null?et=Ut:Dt.sibling=Ut,Dt=Ut);return t&&Ye.forEach(function(eb){return n(Q,eb)}),Mt&&sa(Q,ht),et}function jt(Q,k,ne,_e){if(typeof ne=="object"&&ne!==null&&ne.type===U&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case E:e:{for(var et=ne.key;k!==null;){if(k.key===et){if(et=ne.type,et===U){if(k.tag===7){a(Q,k.sibling),_e=u(k,ne.props.children),_e.return=Q,Q=_e;break e}}else if(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Rs(et)===k.type){a(Q,k.sibling),_e=u(k,ne.props),vo(_e,ne),_e.return=Q,Q=_e;break e}a(Q,k);break}else n(Q,k);k=k.sibling}ne.type===U?(_e=Ms(ne.props.children,Q.mode,_e,ne.key),_e.return=Q,Q=_e):(_e=Tl(ne.type,ne.key,ne.props,null,Q.mode,_e),vo(_e,ne),_e.return=Q,Q=_e)}return v(Q);case w:e:{for(et=ne.key;k!==null;){if(k.key===et)if(k.tag===4&&k.stateNode.containerInfo===ne.containerInfo&&k.stateNode.implementation===ne.implementation){a(Q,k.sibling),_e=u(k,ne.children||[]),_e.return=Q,Q=_e;break e}else{a(Q,k);break}else n(Q,k);k=k.sibling}_e=Du(ne,Q.mode,_e),_e.return=Q,Q=_e}return v(Q);case T:return ne=Rs(ne),jt(Q,k,ne,_e)}if(J(ne))return We(Q,k,ne,_e);if(q(ne)){if(et=q(ne),typeof et!="function")throw Error(s(150));return ne=et.call(ne),tt(Q,k,ne,_e)}if(typeof ne.then=="function")return jt(Q,k,Ul(ne),_e);if(ne.$$typeof===B)return jt(Q,k,Rl(Q,ne),_e);Ll(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,k!==null&&k.tag===6?(a(Q,k.sibling),_e=u(k,ne),_e.return=Q,Q=_e):(a(Q,k),_e=Nu(ne,Q.mode,_e),_e.return=Q,Q=_e),v(Q)):a(Q,k)}return function(Q,k,ne,_e){try{xo=0;var et=jt(Q,k,ne,_e);return cr=null,et}catch(Ye){if(Ye===lr||Ye===Nl)throw Ye;var Dt=ai(29,Ye,null,Q.mode);return Dt.lanes=_e,Dt.return=Q,Dt}finally{}}}var Ns=sm(!0),rm=sm(!1),Ga=!1;function ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Va(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(t),kp(t,null,a),n}return Ml(t,o,n,a),El(t)}function _o(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,$n(t,a)}}function ju(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Wu=!1;function yo(){if(Wu){var t=or;if(t!==null)throw t}}function bo(t,n,a,o){Wu=!1;var u=t.updateQueue;Ga=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var H=C,ie=H.next;H.next=null,v===null?f=ie:v.next=ie,v=H;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,C=xe.lastBaseUpdate,C!==v&&(C===null?xe.firstBaseUpdate=ie:C.next=ie,xe.lastBaseUpdate=H))}if(f!==null){var ye=u.baseState;v=0,xe=ie=H=null,C=f;do{var le=C.lane&-536870913,ue=le!==C.lane;if(ue?(yt&le)===le:(o&le)===le){le!==0&&le===rr&&(Wu=!0),xe!==null&&(xe=xe.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var We=t,tt=C;le=n;var jt=a;switch(tt.tag){case 1:if(We=tt.payload,typeof We=="function"){ye=We.call(jt,ye,le);break e}ye=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=tt.payload,le=typeof We=="function"?We.call(jt,ye,le):We,le==null)break e;ye=_({},ye,le);break e;case 2:Ga=!0}}le=C.callback,le!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[le]:ue.push(le))}else ue={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},xe===null?(ie=xe=ue,H=ye):xe=xe.next=ue,v|=le;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ue=C,C=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);xe===null&&(H=ye),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=xe,f===null&&(u.shared.lanes=0),qa|=v,t.lanes=v,t.memoizedState=ye}}function om(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function lm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)om(a[t],n)}var ur=D(null),Ol=D(0);function cm(t,n){t=ga,Se(Ol,t),Se(ur,n),ga=t|n.baseLanes}function qu(){Se(Ol,ga),Se(ur,ur.current)}function Yu(){ga=Ol.current,K(ur),K(Ol)}var si=D(null),vi=null;function ka(t){var n=t.alternate;Se(fn,fn.current&1),Se(si,t),vi===null&&(n===null||ur.current!==null||n.memoizedState!==null)&&(vi=t)}function Zu(t){Se(fn,fn.current),Se(si,t),vi===null&&(vi=t)}function um(t){t.tag===22?(Se(fn,fn.current),Se(si,t),vi===null&&(vi=t)):Xa()}function Xa(){Se(fn,fn.current),Se(si,si.current)}function ri(t){K(si),vi===t&&(vi=null),K(fn)}var fn=D(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||nd(a)||id(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var la=0,ct=null,kt=null,gn=null,Il=!1,fr=!1,Ds=!1,Bl=0,So=0,dr=null,X_=0;function ln(){throw Error(s(321))}function Ku(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function Qu(t,n,a,o,u,f){return la=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?qm:hf,Ds=!1,f=a(o,u),Ds=!1,fr&&(f=dm(n,a,o,u)),fm(t),f}function fm(t){I.H=To;var n=kt!==null&&kt.next!==null;if(la=0,gn=kt=ct=null,Il=!1,So=0,dr=null,n)throw Error(s(300));t===null||xn||(t=t.dependencies,t!==null&&wl(t)&&(xn=!0))}function dm(t,n,a,o){ct=t;var u=0;do{if(fr&&(dr=null),So=0,fr=!1,25<=u)throw Error(s(301));if(u+=1,gn=kt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Ym,f=n(a,o)}while(fr);return f}function j_(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?Mo(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ct.flags|=1024),n}function Ju(){var t=Bl!==0;return Bl=0,t}function $u(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ef(t){if(Il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Il=!1}la=0,gn=kt=ct=null,fr=!1,So=Bl=0,dr=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?ct.memoizedState=gn=t:gn=gn.next=t,gn}function dn(){if(kt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=gn===null?ct.memoizedState:gn.next;if(n!==null)gn=n,kt=t;else{if(t===null)throw ct.alternate===null?Error(s(467)):Error(s(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},gn===null?ct.memoizedState=gn=t:gn=gn.next=t}return gn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(t){var n=So;return So+=1,dr===null&&(dr=[]),t=nm(dr,t,n),n=ct,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?qm:hf),t}function zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Mo(t);if(t.$$typeof===B)return Cn(t)}throw Error(s(438,String(t)))}function tf(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=X;return n.index++,a}function ca(t,n){return typeof n=="function"?n(t):n}function Gl(t){var n=dn();return nf(n,kt,t)}function nf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var C=v=null,H=null,ie=n,xe=!1;do{var ye=ie.lane&-536870913;if(ye!==ie.lane?(yt&ye)===ye:(la&ye)===ye){var le=ie.revertLane;if(le===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),ye===rr&&(xe=!0);else if((la&le)===le){ie=ie.next,le===rr&&(xe=!0);continue}else ye={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(C=H=ye,v=f):H=H.next=ye,ct.lanes|=le,qa|=le;ye=ie.action,Ds&&a(f,ye),f=ie.hasEagerState?ie.eagerState:a(f,ye)}else le={lane:ye,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(C=H=le,v=f):H=H.next=le,ct.lanes|=ye,qa|=ye;ie=ie.next}while(ie!==null&&ie!==n);if(H===null?v=f:H.next=C,!ii(f,t.memoizedState)&&(xn=!0,xe&&(a=or,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function af(t){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);ii(f,n.memoizedState)||(xn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function hm(t,n,a){var o=ct,u=dn(),f=Mt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!ii((kt||u).memoizedState,a);if(v&&(u.memoizedState=a,xn=!0),u=u.queue,of(gm.bind(null,o,u,t),[t]),u.getSnapshot!==n||v||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},mm.bind(null,o,u,a,n),null),qt===null)throw Error(s(349));f||(la&127)!==0||pm(o,n,a)}return a}function pm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Fl(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function mm(t,n,a,o){n.value=a,n.getSnapshot=o,xm(n)&&vm(t)}function gm(t,n,a){return a(function(){xm(n)&&vm(t)})}function xm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function vm(t){var n=Ss(t,2);n!==null&&Qn(n,t,2)}function sf(t){var n=Vn();if(typeof t=="function"){var a=t;if(t=a(),Ds){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},n}function _m(t,n,a,o){return t.baseState=a,nf(t,kt,typeof o=="function"?o:ca)}function W_(t,n,a,o,u){if(kl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,ym(n,f)):(f.next=a.next,n.pending=a.next=f)}}function ym(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=I.T,v={};I.T=v;try{var C=a(u,o),H=I.S;H!==null&&H(v,C),bm(t,n,C)}catch(ie){rf(t,n,ie)}finally{f!==null&&v.types!==null&&(f.types=v.types),I.T=f}}else try{f=a(u,o),bm(t,n,f)}catch(ie){rf(t,n,ie)}}function bm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Sm(t,n,o)},function(o){return rf(t,n,o)}):Sm(t,n,a)}function Sm(t,n,a){n.status="fulfilled",n.value=a,Mm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,ym(t,a)))}function rf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Mm(n),n=n.next;while(n!==o)}t.action=null}function Mm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Em(t,n){return n}function Tm(t,n){if(Mt){var a=qt.formState;if(a!==null){e:{var o=ct;if(Mt){if($t){t:{for(var u=$t,f=xi;u.nodeType!==8;){if(!f){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$t=_i(u.nextSibling),o=u.data==="F!";break e}}Fa(o)}o=!1}o&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Em,lastRenderedState:n},a.queue=o,a=Xm.bind(null,ct,o),o.dispatch=a,o=sf(!1),f=df.bind(null,ct,!1,o.queue),o=Vn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=W_.bind(null,ct,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Am(t){var n=dn();return wm(n,kt,t)}function wm(t,n,a){if(n=nf(t,n,Em)[0],t=Gl(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(v){throw v===lr?Nl:v}else o=n;n=dn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,hr(9,{destroy:void 0},q_.bind(null,u,a),null)),[o,f,t]}function q_(t,n){t.action=n}function Rm(t){var n=dn(),a=kt;if(a!==null)return wm(n,a,t);dn(),n=n.memoizedState,a=dn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function hr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Fl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Cm(){return dn().memoizedState}function Hl(t,n,a,o){var u=Vn();ct.flags|=t,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(t,n,a,o){var u=dn();o=o===void 0?null:o;var f=u.memoizedState.inst;kt!==null&&o!==null&&Ku(o,kt.memoizedState.deps)?u.memoizedState=hr(n,f,a,o):(ct.flags|=t,u.memoizedState=hr(1|n,f,a,o))}function Nm(t,n){Hl(8390656,8,t,n)}function of(t,n){Vl(2048,8,t,n)}function Y_(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Fl(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Dm(t){var n=dn().memoizedState;return Y_({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Um(t,n){return Vl(4,2,t,n)}function Lm(t,n){return Vl(4,4,t,n)}function Om(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Pm(t,n,a){a=a!=null?a.concat([t]):null,Vl(4,4,Om.bind(null,n,t),a)}function lf(){}function Im(t,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ku(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Bm(t,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ku(n,o[1]))return o[0];if(o=t(),Ds){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function cf(t,n,a){return a===void 0||(la&1073741824)!==0&&(yt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=F0(),ct.lanes|=t,qa|=t,a)}function Fm(t,n,a,o){return ii(a,n)?a:ur.current!==null?(t=cf(t,a,o),ii(t,n)||(xn=!0),t):(la&42)===0||(la&1073741824)!==0&&(yt&261930)===0?(xn=!0,t.memoizedState=a):(t=F0(),ct.lanes|=t,qa|=t,n)}function zm(t,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var v=I.T,C={};I.T=C,df(t,!1,n,a);try{var H=u(),ie=I.S;if(ie!==null&&ie(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var xe=k_(H,o);Eo(t,n,xe,ci(t))}else Eo(t,n,o,ci(t))}catch(ye){Eo(t,n,{then:function(){},status:"rejected",reason:ye},ci())}finally{G.p=f,v!==null&&C.types!==null&&(v.types=C.types),I.T=v}}function Z_(){}function uf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Gm(t).queue;zm(t,u,n,ee,a===null?Z_:function(){return Hm(t),a(o)})}function Gm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Hm(t){var n=Gm(t);n.next===null&&(n=t.alternate.memoizedState),Eo(t,n.next.queue,{},ci())}function ff(){return Cn(Ho)}function Vm(){return dn().memoizedState}function km(){return dn().memoizedState}function K_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();t=Ha(a);var o=Va(n,t,a);o!==null&&(Qn(o,n,a),_o(o,n,a)),n={cache:zu()},t.payload=n;return}n=n.return}}function Q_(t,n,a){var o=ci();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(t)?jm(n,a):(a=Ru(t,n,a,o),a!==null&&(Qn(a,t,o),Wm(a,n,o)))}function Xm(t,n,a){var o=ci();Eo(t,n,a,o)}function Eo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(t))jm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,C=f(v,a);if(u.hasEagerState=!0,u.eagerState=C,ii(C,v))return Ml(t,n,u,0),qt===null&&Sl(),!1}catch{}finally{}if(a=Ru(t,n,u,o),a!==null)return Qn(a,t,o),Wm(a,n,o),!0}return!1}function df(t,n,a,o){if(o={lane:2,revertLane:Xf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(n)throw Error(s(479))}else n=Ru(t,a,o,2),n!==null&&Qn(n,t,2)}function kl(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function jm(t,n){fr=Il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Wm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,$n(t,a)}}var To={readContext:Cn,use:zl,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};To.useEffectEvent=ln;var qm={readContext:Cn,use:zl,useCallback:function(t,n){return Vn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:Nm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,Om.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=Vn();n=n===void 0?null:n;var o=t();if(Ds){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Vn();if(a!==void 0){var u=a(n);if(Ds){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Q_.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=Vn();return t={current:t},n.memoizedState=t},useState:function(t){t=sf(t);var n=t.queue,a=Xm.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:lf,useDeferredValue:function(t,n){var a=Vn();return cf(a,t,n)},useTransition:function(){var t=sf(!1);return t=zm.bind(null,ct,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=Vn();if(Mt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qt===null)throw Error(s(349));(yt&127)!==0||pm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Nm(gm.bind(null,o,f,t),[t]),o.flags|=2048,hr(9,{destroy:void 0},mm.bind(null,o,f,a,n),null),a},useId:function(){var t=Vn(),n=qt.identifierPrefix;if(Mt){var a=zi,o=Fi;a=(o&~(1<<32-ze(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=X_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ff,useFormState:Tm,useActionState:Tm,useOptimistic:function(t){var n=Vn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=df.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:tf,useCacheRefresh:function(){return Vn().memoizedState=K_.bind(null,ct)},useEffectEvent:function(t){var n=Vn(),a={impl:t};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},hf={readContext:Cn,use:zl,useCallback:Im,useContext:Cn,useEffect:of,useImperativeHandle:Pm,useInsertionEffect:Um,useLayoutEffect:Lm,useMemo:Bm,useReducer:Gl,useRef:Cm,useState:function(){return Gl(ca)},useDebugValue:lf,useDeferredValue:function(t,n){var a=dn();return Fm(a,kt.memoizedState,t,n)},useTransition:function(){var t=Gl(ca)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:hm,useId:Vm,useHostTransitionStatus:ff,useFormState:Am,useActionState:Am,useOptimistic:function(t,n){var a=dn();return _m(a,kt,t,n)},useMemoCache:tf,useCacheRefresh:km};hf.useEffectEvent=Dm;var Ym={readContext:Cn,use:zl,useCallback:Im,useContext:Cn,useEffect:of,useImperativeHandle:Pm,useInsertionEffect:Um,useLayoutEffect:Lm,useMemo:Bm,useReducer:af,useRef:Cm,useState:function(){return af(ca)},useDebugValue:lf,useDeferredValue:function(t,n){var a=dn();return kt===null?cf(a,t,n):Fm(a,kt.memoizedState,t,n)},useTransition:function(){var t=af(ca)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:hm,useId:Vm,useHostTransitionStatus:ff,useFormState:Rm,useActionState:Rm,useOptimistic:function(t,n){var a=dn();return kt!==null?_m(a,kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:tf,useCacheRefresh:km};Ym.useEffectEvent=Dm;function pf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var mf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ci(),u=Ha(o);u.payload=n,a!=null&&(u.callback=a),n=Va(t,u,o),n!==null&&(Qn(n,t,o),_o(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ci(),u=Ha(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Va(t,u,o),n!==null&&(Qn(n,t,o),_o(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ci(),o=Ha(a);o.tag=2,n!=null&&(o.callback=n),n=Va(t,o,a),n!==null&&(Qn(n,t,a),_o(n,t,a))}};function Zm(t,n,a,o,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!uo(a,o)||!uo(u,f):!0}function Km(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&mf.enqueueReplaceState(n,n.state,null)}function Us(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Qm(t){bl(t)}function Jm(t){console.error(t)}function $m(t){bl(t)}function Xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function e0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function gf(t,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(t,n)},a}function t0(t){return t=Ha(t),t.tag=3,t}function n0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){e0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){e0(n,a,o),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function J_(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&sr(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?nc():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Hf(t,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Hf(t,o,u)),!1}throw Error(s(435,a.tag))}return Hf(t,o,u),nc(),!1}if(Mt)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ou&&(t=Error(s(422),{cause:o}),po(pi(t,a)))):(o!==Ou&&(n=Error(s(423),{cause:o}),po(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=pi(o,a),u=gf(t.stateNode,o,u),ju(t,u),cn!==4&&(cn=2)),!1;var f=Error(s(520),{cause:o});if(f=pi(f,a),Lo===null?Lo=[f]:Lo.push(f),cn!==4&&(cn=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=gf(a.stateNode,o,t),ju(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ya===null||!Ya.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=t0(u),n0(u,t,a,o),ju(a,u),!1}a=a.return}while(a!==null);return!1}var xf=Error(s(461)),xn=!1;function Nn(t,n,a,o){n.child=t===null?rm(n,null,a,o):Ns(n,t.child,a,o)}function i0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var C in o)C!=="ref"&&(v[C]=o[C])}else v=o;return As(n),o=Qu(t,n,a,v,f,u),C=Ju(),t!==null&&!xn?($u(t,n,u),ua(t,n,u)):(Mt&&C&&Uu(n),n.flags|=1,Nn(t,n,o,u),n.child)}function a0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,s0(t,n,f,o,u)):(t=Tl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Tf(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(v,o)&&t.ref===n.ref)return ua(t,n,u)}return n.flags|=1,t=aa(f,o),t.ref=n.ref,t.return=n,n.child=t}function s0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(uo(f,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=f,Tf(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,ua(t,n,u)}return vf(t,n,a,o,u)}function r0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return o0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(n,f!==null?f.cachePool:null),f!==null?cm(n,f):qu(),um(n);else return o=n.lanes=536870912,o0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Cl(n,f.cachePool),cm(n,f),Xa(),n.memoizedState=null):(t!==null&&Cl(n,null),qu(),Xa());return Nn(t,n,u,a),n.child}function Ao(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function o0(t,n,a,o,u){var f=Hu();return f=f===null?null:{parent:mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Cl(n,null),qu(),um(n),t!==null&&sr(t,n,o,!0),n.childLanes=u,null}function jl(t,n){return n=ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function l0(t,n,a){return Ns(n,t.child,null,a),t=jl(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function $_(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Mt){if(o.mode==="hidden")return t=jl(n,o),n.lanes=536870912,Ao(null,t);if(Zu(n),(t=$t)?(t=yg(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Fi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=jp(t),a.return=n,n.child=a,Rn=n,$t=null)):t=null,t===null)throw Fa(n);return n.lanes=536870912,null}return jl(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Zu(n),u)if(n.flags&256)n.flags&=-257,n=l0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(xn||sr(t,n,a,!1),u=(a&t.childLanes)!==0,xn||u){if(o=qt,o!==null&&(v=ei(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Ss(t,v),Qn(o,t,v),xf;nc(),n=l0(t,n,a)}else t=f.treeContext,$t=_i(v.nextSibling),Rn=n,Mt=!0,Ba=null,xi=!1,t!==null&&Yp(n,t),n=jl(n,o),n.flags|=4096;return n}return t=aa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function vf(t,n,a,o,u){return As(n),a=Qu(t,n,a,o,void 0,u),o=Ju(),t!==null&&!xn?($u(t,n,u),ua(t,n,u)):(Mt&&o&&Uu(n),n.flags|=1,Nn(t,n,a,u),n.child)}function c0(t,n,a,o,u,f){return As(n),n.updateQueue=null,a=dm(n,o,a,u),fm(t),o=Ju(),t!==null&&!xn?($u(t,n,f),ua(t,n,f)):(Mt&&o&&Uu(n),n.flags|=1,Nn(t,n,a,f),n.child)}function u0(t,n,a,o,u){if(As(n),n.stateNode===null){var f=tr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Cn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=mf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},ku(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Cn(v):tr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(pf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&mf.enqueueReplaceState(f,f.state,null),bo(n,o,f,u),yo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var C=n.memoizedProps,H=Us(a,C);f.props=H;var ie=f.context,xe=a.contextType;v=tr,typeof xe=="object"&&xe!==null&&(v=Cn(xe));var ye=a.getDerivedStateFromProps;xe=typeof ye=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,xe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ie!==v)&&Km(n,f,o,v),Ga=!1;var le=n.memoizedState;f.state=le,bo(n,o,f,u),yo(),ie=n.memoizedState,C||le!==ie||Ga?(typeof ye=="function"&&(pf(n,a,ye,o),ie=n.memoizedState),(H=Ga||Zm(n,a,H,o,le,ie,v))?(xe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=v,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Xu(t,n),v=n.memoizedProps,xe=Us(a,v),f.props=xe,ye=n.pendingProps,le=f.context,ie=a.contextType,H=tr,typeof ie=="object"&&ie!==null&&(H=Cn(ie)),C=a.getDerivedStateFromProps,(ie=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==ye||le!==H)&&Km(n,f,o,H),Ga=!1,le=n.memoizedState,f.state=le,bo(n,o,f,u),yo();var ue=n.memoizedState;v!==ye||le!==ue||Ga||t!==null&&t.dependencies!==null&&wl(t.dependencies)?(typeof C=="function"&&(pf(n,a,C,o),ue=n.memoizedState),(xe=Ga||Zm(n,a,xe,o,le,ue,H)||t!==null&&t.dependencies!==null&&wl(t.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ue,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ue,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),f.props=o,f.state=ue,f.context=H,o=xe):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Wl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ns(n,t.child,null,u),n.child=Ns(n,null,a,u)):Nn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ua(t,n,u),t}function f0(t,n,a,o){return Es(),n.flags|=256,Nn(t,n,a,o),n.child}var _f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yf(t){return{baseLanes:t,cachePool:em()}}function bf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function d0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(fn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Mt){if(u?ka(n):Xa(),(t=$t)?(t=yg(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Fi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=jp(t),a.return=n,n.child=a,Rn=n,$t=null)):t=null,t===null)throw Fa(n);return id(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Xa(),u=n.mode,C=ql({mode:"hidden",children:C},u),o=Ms(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=yf(a),o.childLanes=bf(t,v,a),n.memoizedState=_f,Ao(null,o)):(ka(n),Sf(n,C))}var H=t.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(f)n.flags&256?(ka(n),n.flags&=-257,n=Mf(t,n,a)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,n=null):(Xa(),C=o.fallback,u=n.mode,o=ql({mode:"visible",children:o.children},u),C=Ms(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Ns(n,t.child,null,a),o=n.child,o.memoizedState=yf(a),o.childLanes=bf(t,v,a),n.memoizedState=_f,n=Ao(null,o));else if(ka(n),id(C)){if(v=C.nextSibling&&C.nextSibling.dataset,v)var ie=v.dgst;v=ie,o=Error(s(419)),o.stack="",o.digest=v,po({value:o,source:null,stack:null}),n=Mf(t,n,a)}else if(xn||sr(t,n,a,!1),v=(a&t.childLanes)!==0,xn||v){if(v=qt,v!==null&&(o=ei(v,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Ss(t,o),Qn(v,t,o),xf;nd(C)||nc(),n=Mf(t,n,a)}else nd(C)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,$t=_i(C.nextSibling),Rn=n,Mt=!0,Ba=null,xi=!1,t!==null&&Yp(n,t),n=Sf(n,o.children),n.flags|=4096);return n}return u?(Xa(),C=o.fallback,u=n.mode,H=t.child,ie=H.sibling,o=aa(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ie!==null?C=aa(ie,C):(C=Ms(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Ao(null,o),o=n.child,C=t.child.memoizedState,C===null?C=yf(a):(u=C.cachePool,u!==null?(H=mn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=em(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=bf(t,v,a),n.memoizedState=_f,Ao(t.child,o)):(ka(n),a=t.child,t=a.sibling,a=aa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Sf(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=ai(22,t,null,n),t.lanes=0,t}function Mf(t,n,a){return Ns(n,t.child,null,a),t=Sf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function h0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Bu(t.return,n,a)}function Ef(t,n,a,o,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function p0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=fn.current,C=(v&2)!==0;if(C?(v=v&1|2,n.flags|=128):v&=1,Se(fn,v),Nn(t,n,o,a),o=Mt?ho:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&h0(t,a,n);else if(t.tag===19)h0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ef(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Pl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ef(n,!0,a,null,f,o);break;case"together":Ef(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ua(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(sr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=aa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=aa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Tf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&wl(t)))}function ey(t,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),za(n,mn,t.memoizedState.cache),Es();break;case 27:case 5:nt(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Zu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?d0(t,n,a):(ka(n),t=ua(t,n,a),t!==null?t.sibling:null);ka(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(sr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return p0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(fn,fn.current),o)break;return null;case 22:return n.lanes=0,r0(t,n,a,n.pendingProps);case 24:za(n,mn,t.memoizedState.cache)}return ua(t,n,a)}function m0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!Tf(t,a)&&(n.flags&128)===0)return xn=!1,ey(t,n,a);xn=(t.flags&131072)!==0}else xn=!1,Mt&&(n.flags&1048576)!==0&&qp(n,ho,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Rs(n.elementType),n.type=t,typeof t=="function")Cu(t)?(o=Us(t,o),n.tag=1,n=u0(null,n,t,o,a)):(n.tag=0,n=vf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===A){n.tag=11,n=i0(null,n,t,o,a);break e}else if(u===P){n.tag=14,n=a0(null,n,t,o,a);break e}}throw n=fe(t)||t,Error(s(306,n,""))}}return n;case 0:return vf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Us(o,n.pendingProps),u0(t,n,o,u,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Xu(t,n),bo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,za(n,mn,o),o!==f.cache&&Fu(n,[mn],a,!0),yo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=f0(t,n,o,a);break e}else if(o!==u){u=pi(Error(s(424)),n),po(u),n=f0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=_i(t.firstChild),Rn=n,Mt=!0,Ba=null,xi=!0,a=rm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Es(),o===u){n=ua(t,n,a);break e}Nn(t,n,o,a)}n=n.child}return n;case 26:return Wl(t,n),t===null?(a=Ag(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,t=n.pendingProps,o=cc(te.current).createElement(a),o[hn]=n,o[wn]=t,Dn(o,a,t),pn(o),n.stateNode=o):n.memoizedState=Ag(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&Mt&&(o=n.stateNode=Mg(n.type,n.pendingProps,te.current),Rn=n,xi=!0,u=$t,Ja(n.type)?(ad=u,$t=_i(o.firstChild)):$t=u),Nn(t,n,n.pendingProps.children,a),Wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Mt&&((u=o=$t)&&(o=Ny(o,n.type,n.pendingProps,xi),o!==null?(n.stateNode=o,Rn=n,$t=_i(o.firstChild),xi=!1,u=!0):u=!1),u||Fa(n)),nt(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,$f(u,f)?o=null:v!==null&&$f(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Qu(t,n,j_,null,null,a),Ho._currentValue=u),Wl(t,n),Nn(t,n,o,a),n.child;case 6:return t===null&&Mt&&((t=a=$t)&&(a=Dy(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Rn=n,$t=null,t=!0):t=!1),t||Fa(n)),null;case 13:return d0(t,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ns(n,null,o,a):Nn(t,n,o,a),n.child;case 11:return i0(t,n,n.type,n.pendingProps,a);case 7:return Nn(t,n,n.pendingProps,a),n.child;case 8:return Nn(t,n,n.pendingProps.children,a),n.child;case 12:return Nn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,za(n,n.type,o.value),Nn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,As(n),u=Cn(u),o=o(u),n.flags|=1,Nn(t,n,o,a),n.child;case 14:return a0(t,n,n.type,n.pendingProps,a);case 15:return s0(t,n,n.type,n.pendingProps,a);case 19:return p0(t,n,a);case 31:return $_(t,n,a);case 22:return r0(t,n,a,n.pendingProps);case 24:return As(n),o=Cn(mn),t===null?(u=Hu(),u===null&&(u=qt,f=zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},ku(n),za(n,mn,u)):((t.lanes&a)!==0&&(Xu(t,n),bo(n,null,null,a),yo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),za(n,mn,o)):(o=f.cache,za(n,mn,o),o!==u.cache&&Fu(n,[mn],a,!0))),Nn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function fa(t){t.flags|=4}function Af(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(V0())t.flags|=8192;else throw Cs=Dl,Vu}else t.flags&=-16777217}function g0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Dg(n))if(V0())t.flags|=8192;else throw Cs=Dl,Vu}function Yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,xr|=n)}function wo(t,n){if(!Mt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function ty(t,n,a){var o=n.pendingProps;switch(Lu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),oa(mn),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ar(n)?fa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pu())),en(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(fa(n),f!==null?(en(n),g0(n,f)):(en(n),Af(n,u,null,o,a))):f?f!==t.memoizedState?(fa(n),en(n),g0(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&fa(n),en(n),Af(n,u,t,o,a)),null;case 27:if(Ke(n),a=te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}t=we.current,ar(n)?Zp(n):(t=Mg(u,o,a),n.stateNode=t,fa(n))}return en(n),null;case 5:if(Ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(f=we.current,ar(n))Zp(n);else{var v=cc(te.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[hn]=n,f[wn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&fa(n)}}return en(n),Af(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&fa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=te.current,ar(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[hn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||dg(t.nodeValue,a)),t||Fa(n,!0)}else t=cc(t).createTextNode(o),t[hn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ar(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[hn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ar(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[hn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),en(n),null);case 4:return Be(),t===null&&Yf(n.stateNode.containerInfo),en(n),null;case 10:return oa(n.type),en(n),null;case 19:if(K(fn),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)wo(o,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Pl(t),f!==null){for(n.flags|=128,wo(o,!1),t=f.updateQueue,n.updateQueue=t,Yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Xp(a,t),a=a.sibling;return Se(fn,fn.current&1|2),Mt&&sa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&st()>$l&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Pl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Yl(n,t),wo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Mt)return en(n),null}else 2*st()-o.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=st(),t.sibling=null,a=fn.current,Se(fn,u?a&1|2:a&1),Mt&&sa(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return ri(n),Yu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&K(ws),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),oa(mn),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ny(t,n){switch(Lu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return oa(mn),Be(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(s(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(fn),null;case 4:return Be(),null;case 10:return oa(n.type),null;case 22:case 23:return ri(n),Yu(),t!==null&&K(ws),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return oa(mn),null;case 25:return null;default:return null}}function x0(t,n){switch(Lu(n),n.tag){case 3:oa(mn),Be();break;case 26:case 27:case 5:Ke(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:K(fn);break;case 10:oa(n.type);break;case 22:case 23:ri(n),Yu(),t!==null&&K(ws);break;case 24:oa(mn)}}function Ro(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(C){Ht(n,n.return,C)}}function ja(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var v=o.inst,C=v.destroy;if(C!==void 0){v.destroy=void 0,u=n;var H=a,ie=C;try{ie()}catch(xe){Ht(u,H,xe)}}}o=o.next}while(o!==f)}}catch(xe){Ht(n,n.return,xe)}}function v0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{lm(n,a)}catch(o){Ht(t,t.return,o)}}}function _0(t,n,a){a.props=Us(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,n,o)}}function Co(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ht(t,n,u)}}function Gi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function y0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function wf(t,n,a){try{var o=t.stateNode;Ey(o,t.type,a,n),o[wn]=n}catch(u){Ht(t,t.return,u)}}function b0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ja(t.type)||t.tag===4}function Rf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=na));else if(o!==4&&(o===27&&Ja(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Cf(t,n,a),t=t.sibling;t!==null;)Cf(t,n,a),t=t.sibling}function Zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ja(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Zl(t,n,a),t=t.sibling;t!==null;)Zl(t,n,a),t=t.sibling}function S0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[hn]=t,n[wn]=a}catch(f){Ht(t,t.return,f)}}var da=!1,vn=!1,Nf=!1,M0=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function iy(t,n){if(t=t.containerInfo,Qf=gc,t=Pp(t),Su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,C=-1,H=-1,ie=0,xe=0,ye=t,le=null;t:for(;;){for(var ue;ye!==a||u!==0&&ye.nodeType!==3||(C=v+u),ye!==f||o!==0&&ye.nodeType!==3||(H=v+o),ye.nodeType===3&&(v+=ye.nodeValue.length),(ue=ye.firstChild)!==null;)le=ye,ye=ue;for(;;){if(ye===t)break t;if(le===a&&++ie===u&&(C=v),le===f&&++xe===o&&(H=v),(ue=ye.nextSibling)!==null)break;ye=le,le=ye.parentNode}ye=ue}a=C===-1||H===-1?null:{start:C,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jf={focusedElem:t,selectionRange:a},gc=!1,Tn=n;Tn!==null;)if(n=Tn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Tn=t;else for(;Tn!==null;){switch(n=Tn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=Us(a.type,u);t=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ht(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)td(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":td(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Tn=t;break}Tn=n.return}}function E0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:pa(t,a),o&4&&Ro(5,a);break;case 1:if(pa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Ht(a,a.return,v)}else{var u=Us(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Ht(a,a.return,v)}}o&64&&v0(a),o&512&&Co(a,a.return);break;case 3:if(pa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{lm(t,n)}catch(v){Ht(a,a.return,v)}}break;case 27:n===null&&o&4&&S0(a);case 26:case 5:pa(t,a),n===null&&o&4&&y0(a),o&512&&Co(a,a.return);break;case 12:pa(t,a);break;case 31:pa(t,a),o&4&&w0(t,a);break;case 13:pa(t,a),o&4&&R0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=dy.bind(null,a),Uy(t,a))));break;case 22:if(o=a.memoizedState!==null||da,!o){n=n!==null&&n.memoizedState!==null||vn,u=da;var f=vn;da=o,(vn=n)&&!f?ma(t,a,(a.subtreeFlags&8772)!==0):pa(t,a),da=u,vn=f}break;case 30:break;default:pa(t,a)}}function T0(t){var n=t.alternate;n!==null&&(t.alternate=null,T0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ua(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,qn=!1;function ha(t,n,a){for(a=a.child;a!==null;)A0(t,n,a),a=a.sibling}function A0(t,n,a){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(pe,a)}catch{}switch(a.tag){case 26:vn||Gi(a,n),ha(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||Gi(a,n);var o=rn,u=qn;Ja(a.type)&&(rn=a.stateNode,qn=!1),ha(t,n,a),Fo(a.stateNode),rn=o,qn=u;break;case 5:vn||Gi(a,n);case 6:if(o=rn,u=qn,rn=null,ha(t,n,a),rn=o,qn=u,rn!==null)if(qn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(f){Ht(a,n,f)}else try{rn.removeChild(a.stateNode)}catch(f){Ht(a,n,f)}break;case 18:rn!==null&&(qn?(t=rn,vg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Tr(t)):vg(rn,a.stateNode));break;case 4:o=rn,u=qn,rn=a.stateNode.containerInfo,qn=!0,ha(t,n,a),rn=o,qn=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),vn||ja(4,a,n),ha(t,n,a);break;case 1:vn||(Gi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&_0(a,n,o)),ha(t,n,a);break;case 21:ha(t,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,ha(t,n,a),vn=o;break;default:ha(t,n,a)}}function w0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Tr(t)}catch(a){Ht(n,n.return,a)}}}function R0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tr(t)}catch(a){Ht(n,n.return,a)}}function ay(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new M0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new M0),n;default:throw Error(s(435,t.tag))}}function Kl(t,n){var a=ay(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=hy.bind(null,t,o);o.then(u,u)}})}function Yn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,v=n,C=v;e:for(;C!==null;){switch(C.tag){case 27:if(Ja(C.type)){rn=C.stateNode,qn=!1;break e}break;case 5:rn=C.stateNode,qn=!1;break e;case 3:case 4:rn=C.stateNode.containerInfo,qn=!0;break e}C=C.return}if(rn===null)throw Error(s(160));A0(f,v,u),rn=null,qn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)C0(n,t),n=n.sibling}var Ci=null;function C0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),Zn(t),o&4&&(ja(3,t,t.return),Ro(3,t),ja(5,t,t.return));break;case 1:Yn(n,t),Zn(t),o&512&&(vn||a===null||Gi(a,a.return)),o&64&&da&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(Yn(n,t),Zn(t),o&512&&(vn||a===null||Gi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Da]||f[hn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[hn]=t,pn(f),o=f;break e;case"link":var v=Cg("link","href",u).get(o+(a.href||""));if(v){for(var C=0;C<v.length;C++)if(f=v[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(C,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=Cg("meta","content",u).get(o+(a.content||""))){for(C=0;C<v.length;C++)if(f=v[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(C,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[hn]=t,pn(f),o=f}t.stateNode=o}else Ng(u,t.type,t.stateNode);else t.stateNode=Rg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Ng(u,t.type,t.stateNode):Rg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&wf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,t),Zn(t),o&512&&(vn||a===null||Gi(a,a.return)),a!==null&&o&4&&wf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,t),Zn(t),o&512&&(vn||a===null||Gi(a,a.return)),t.flags&32){u=t.stateNode;try{ni(u,"")}catch(We){Ht(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,wf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Nf=!0);break;case 6:if(Yn(n,t),Zn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){Ht(t,t.return,We)}}break;case 3:if(dc=null,u=Ci,Ci=uc(n.containerInfo),Yn(n,t),Ci=u,Zn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(We){Ht(t,t.return,We)}Nf&&(Nf=!1,N0(t));break;case 4:o=Ci,Ci=uc(t.stateNode.containerInfo),Yn(n,t),Zn(t),Ci=o;break;case 12:Yn(n,t),Zn(t);break;case 31:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 13:Yn(n,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=st()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ie=da,xe=vn;if(da=ie||u,vn=xe||H,Yn(n,t),vn=xe,da=ie,Zn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||da||vn||Ls(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{C=H.stateNode;var ye=H.memoizedProps.style,le=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(We){Ht(H,H.return,We)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(We){Ht(H,H.return,We)}}}else if(n.tag===18){if(a===null){H=n;try{var ue=H.stateNode;u?_g(ue,!0):_g(H.stateNode,!1)}catch(We){Ht(H,H.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Kl(t,a))));break;case 19:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 30:break;case 21:break;default:Yn(n,t),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(b0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Rf(t);Zl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(ni(v,""),a.flags&=-33);var C=Rf(t);Zl(t,C,v);break;case 3:case 4:var H=a.stateNode.containerInfo,ie=Rf(t);Cf(t,ie,H);break;default:throw Error(s(161))}}catch(xe){Ht(t,t.return,xe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function N0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;N0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function pa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)E0(t,n.alternate,n),n=n.sibling}function Ls(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ja(4,n,n.return),Ls(n);break;case 1:Gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&_0(n,n.return,a),Ls(n);break;case 27:Fo(n.stateNode);case 26:case 5:Gi(n,n.return),Ls(n);break;case 22:n.memoizedState===null&&Ls(n);break;case 30:Ls(n);break;default:Ls(n)}t=t.sibling}}function ma(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ma(u,f,a),Ro(4,f);break;case 1:if(ma(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Ht(o,o.return,ie)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)om(H[u],C)}catch(ie){Ht(o,o.return,ie)}}a&&v&64&&v0(f),Co(f,f.return);break;case 27:S0(f);case 26:case 5:ma(u,f,a),a&&o===null&&v&4&&y0(f),Co(f,f.return);break;case 12:ma(u,f,a);break;case 31:ma(u,f,a),a&&v&4&&w0(u,f);break;case 13:ma(u,f,a),a&&v&4&&R0(u,f);break;case 22:f.memoizedState===null&&ma(u,f,a),Co(f,f.return);break;case 30:break;default:ma(u,f,a)}n=n.sibling}}function Df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&mo(a))}function Uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t))}function Ni(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)D0(t,n,a,o),n=n.sibling}function D0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n,a,o),u&2048&&Ro(9,n);break;case 1:Ni(t,n,a,o);break;case 3:Ni(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t)));break;case 12:if(u&2048){Ni(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,C=f.onPostCommit;typeof C=="function"&&C(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Ht(n,n.return,H)}}else Ni(t,n,a,o);break;case 31:Ni(t,n,a,o);break;case 13:Ni(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ni(t,n,a,o):No(t,n):f._visibility&2?Ni(t,n,a,o):(f._visibility|=2,pr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Df(v,n);break;case 24:Ni(t,n,a,o),u&2048&&Uf(n.alternate,n);break;default:Ni(t,n,a,o)}}function pr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,C=a,H=o,ie=v.flags;switch(v.tag){case 0:case 11:case 15:pr(f,v,C,H,u),Ro(8,v);break;case 23:break;case 22:var xe=v.stateNode;v.memoizedState!==null?xe._visibility&2?pr(f,v,C,H,u):No(f,v):(xe._visibility|=2,pr(f,v,C,H,u)),u&&ie&2048&&Df(v.alternate,v);break;case 24:pr(f,v,C,H,u),u&&ie&2048&&Uf(v.alternate,v);break;default:pr(f,v,C,H,u)}n=n.sibling}}function No(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:No(a,o),u&2048&&Df(o.alternate,o);break;case 24:No(a,o),u&2048&&Uf(o.alternate,o);break;default:No(a,o)}n=n.sibling}}var Do=8192;function mr(t,n,a){if(t.subtreeFlags&Do)for(t=t.child;t!==null;)U0(t,n,a),t=t.sibling}function U0(t,n,a){switch(t.tag){case 26:mr(t,n,a),t.flags&Do&&t.memoizedState!==null&&Xy(a,Ci,t.memoizedState,t.memoizedProps);break;case 5:mr(t,n,a);break;case 3:case 4:var o=Ci;Ci=uc(t.stateNode.containerInfo),mr(t,n,a),Ci=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,mr(t,n,a),Do=o):mr(t,n,a));break;default:mr(t,n,a)}}function L0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,P0(o,t)}L0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)O0(t),t=t.sibling}function O0(t){switch(t.tag){case 0:case 11:case 15:Uo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Uo(t);break;case 12:Uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ql(t)):Uo(t);break;default:Uo(t)}}function Ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,P0(o,t)}L0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}t=t.sibling}}function P0(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else e:for(a=t;Tn!==null;){o=Tn;var u=o.sibling,f=o.return;if(T0(o),o===a){Tn=null;break e}if(u!==null){u.return=f,Tn=u;break e}Tn=f}}}var sy={getCacheForType:function(t){var n=Cn(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(mn).controller.signal}},ry=typeof WeakMap=="function"?WeakMap:Map,Lt=0,qt=null,vt=null,yt=0,Gt=0,oi=null,Wa=!1,gr=!1,Lf=!1,ga=0,cn=0,qa=0,Os=0,Of=0,li=0,xr=0,Lo=null,Kn=null,Pf=!1,Jl=0,I0=0,$l=1/0,ec=null,Ya=null,bn=0,Za=null,vr=null,xa=0,If=0,Bf=null,B0=null,Oo=0,Ff=null;function ci(){return(Lt&2)!==0&&yt!==0?yt&-yt:I.T!==null?Xf():no()}function F0(){if(li===0)if((yt&536870912)===0||Mt){var t=at;at<<=1,(at&3932160)===0&&(at=262144),li=t}else li=536870912;return t=si.current,t!==null&&(t.flags|=32),li}function Qn(t,n,a){(t===qt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(_r(t,0),Ka(t,yt,li,!1)),ke(t,a),((Lt&2)===0||t!==qt)&&(t===qt&&((Lt&2)===0&&(Os|=a),cn===4&&Ka(t,yt,li,!1)),Hi(t))}function z0(t,n,a){if((Lt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ne(t,n),u=o?cy(t,n):Gf(t,n,!0),f=o;do{if(u===0){gr&&!o&&Ka(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!oy(a)){u=Gf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var C=t;u=Lo;var H=C.current.memoizedState.isDehydrated;if(H&&(_r(C,v).flags|=256),v=Gf(C,v,!1),v!==2){if(Lf&&!H){C.errorRecoveryDisabledLanes|=f,Os|=f,u=4;break e}f=Kn,Kn=u,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){_r(t,0),Ka(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ka(o,n,li,!Wa);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Jl+300-st(),10<u)){if(Ka(o,n,li,!Wa),ve(o,0,!0)!==0)break e;xa=n,o.timeoutHandle=gg(G0.bind(null,o,a,Kn,ec,Pf,n,li,Os,xr,Wa,f,"Throttled",-0,0),u);break e}G0(o,a,Kn,ec,Pf,n,li,Os,xr,Wa,f,null,-0,0)}}break}while(!0);Hi(t)}function G0(t,n,a,o,u,f,v,C,H,ie,xe,ye,le,ue){if(t.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},U0(n,f,ye);var We=(f&62914560)===f?Jl-st():(f&4194048)===f?I0-st():0;if(We=jy(ye,We),We!==null){xa=f,t.cancelPendingCommit=We(Y0.bind(null,t,n,f,a,o,u,v,C,H,xe,ye,null,le,ue)),Ka(t,f,v,!ie);return}}Y0(t,n,f,a,o,u,v,C,H)}function oy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ii(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ka(t,n,a,o){n&=~Of,n&=~Os,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-ze(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&It(t,a,n)}function tc(){return(Lt&6)===0?(Po(0),!1):!0}function zf(){if(vt!==null){if(Gt===0)var t=vt.return;else t=vt,ra=Ts=null,ef(t),cr=null,xo=0,t=vt;for(;t!==null;)x0(t.alternate,t),t=t.return;vt=null}}function _r(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,wy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),xa=0,zf(),qt=t,vt=a=aa(t.current,null),yt=n,Gt=0,oi=null,Wa=!1,gr=Ne(t,n),Lf=!1,xr=li=Of=Os=qa=cn=0,Kn=Lo=null,Pf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ze(o),f=1<<u;n|=t[u],o&=~f}return ga=n,Sl(),a}function H0(t,n){ct=null,I.H=To,n===lr||n===Nl?(n=im(),Gt=3):n===Vu?(n=im(),Gt=4):Gt=n===xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,vt===null&&(cn=1,Xl(t,pi(n,t.current)))}function V0(){var t=si.current;return t===null?!0:(yt&4194048)===yt?vi===null:(yt&62914560)===yt||(yt&536870912)!==0?t===vi:!1}function k0(){var t=I.H;return I.H=To,t===null?To:t}function X0(){var t=I.A;return I.A=sy,t}function nc(){cn=4,Wa||(yt&4194048)!==yt&&si.current!==null||(gr=!0),(qa&134217727)===0&&(Os&134217727)===0||qt===null||Ka(qt,yt,li,!1)}function Gf(t,n,a){var o=Lt;Lt|=2;var u=k0(),f=X0();(qt!==t||yt!==n)&&(ec=null,_r(t,n)),n=!1;var v=cn;e:do try{if(Gt!==0&&vt!==null){var C=vt,H=oi;switch(Gt){case 8:zf(),v=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var ie=Gt;if(Gt=0,oi=null,yr(t,C,H,ie),a&&gr){v=0;break e}break;default:ie=Gt,Gt=0,oi=null,yr(t,C,H,ie)}}ly(),v=cn;break}catch(xe){H0(t,xe)}while(!0);return n&&t.shellSuspendCounter++,ra=Ts=null,Lt=o,I.H=u,I.A=f,vt===null&&(qt=null,yt=0,Sl()),v}function ly(){for(;vt!==null;)j0(vt)}function cy(t,n){var a=Lt;Lt|=2;var o=k0(),u=X0();qt!==t||yt!==n?(ec=null,$l=st()+500,_r(t,n)):gr=Ne(t,n);e:do try{if(Gt!==0&&vt!==null){n=vt;var f=oi;t:switch(Gt){case 1:Gt=0,oi=null,yr(t,n,f,1);break;case 2:case 9:if(tm(f)){Gt=0,oi=null,W0(n);break}n=function(){Gt!==2&&Gt!==9||qt!==t||(Gt=7),Hi(t)},f.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:tm(f)?(Gt=0,oi=null,W0(n)):(Gt=0,oi=null,yr(t,n,f,7));break;case 5:var v=null;switch(vt.tag){case 26:v=vt.memoizedState;case 5:case 27:var C=vt;if(v?Dg(v):C.stateNode.complete){Gt=0,oi=null;var H=C.sibling;if(H!==null)vt=H;else{var ie=C.return;ie!==null?(vt=ie,ic(ie)):vt=null}break t}}Gt=0,oi=null,yr(t,n,f,5);break;case 6:Gt=0,oi=null,yr(t,n,f,6);break;case 8:zf(),cn=6;break e;default:throw Error(s(462))}}uy();break}catch(xe){H0(t,xe)}while(!0);return ra=Ts=null,I.H=o,I.A=u,Lt=a,vt!==null?0:(qt=null,yt=0,Sl(),cn)}function uy(){for(;vt!==null&&!Jt();)j0(vt)}function j0(t){var n=m0(t.alternate,t,ga);t.memoizedProps=t.pendingProps,n===null?ic(t):vt=n}function W0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=c0(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=c0(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:ef(n);default:x0(a,n),n=vt=Xp(n,ga),n=m0(a,n,ga)}t.memoizedProps=t.pendingProps,n===null?ic(t):vt=n}function yr(t,n,a,o){ra=Ts=null,ef(n),cr=null,xo=0;var u=n.return;try{if(J_(t,u,n,a,yt)){cn=1,Xl(t,pi(a,t.current)),vt=null;return}}catch(f){if(u!==null)throw vt=u,f;cn=1,Xl(t,pi(a,t.current)),vt=null;return}n.flags&32768?(Mt||o===1?t=!0:gr||(yt&536870912)!==0?t=!1:(Wa=t=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),q0(n,t)):ic(n)}function ic(t){var n=t;do{if((n.flags&32768)!==0){q0(n,Wa);return}t=n.return;var a=ty(n.alternate,n,ga);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);cn===0&&(cn=5)}function q0(t,n){do{var a=ny(t.alternate,t);if(a!==null){a.flags&=32767,vt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){vt=t;return}vt=t=a}while(t!==null);cn=6,vt=null}function Y0(t,n,a,o,u,f,v,C,H){t.cancelPendingCommit=null;do ac();while(bn!==0);if((Lt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=wu,nn(t,a,f,v,C,H),t===qt&&(vt=qt=null,yt=0),vr=n,Za=t,xa=a,If=f,Bf=u,B0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,py(W,function(){return $0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=G.p,G.p=2,v=Lt,Lt|=4;try{iy(t,n,a)}finally{Lt=v,G.p=u,I.T=o}}bn=1,Z0(),K0(),Q0()}}function Z0(){if(bn===1){bn=0;var t=Za,n=vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var u=Lt;Lt|=4;try{C0(n,t);var f=Jf,v=Pp(t.containerInfo),C=f.focusedElem,H=f.selectionRange;if(v!==C&&C&&C.ownerDocument&&Op(C.ownerDocument.documentElement,C)){if(H!==null&&Su(C)){var ie=H.start,xe=H.end;if(xe===void 0&&(xe=ie),"selectionStart"in C)C.selectionStart=ie,C.selectionEnd=Math.min(xe,C.value.length);else{var ye=C.ownerDocument||document,le=ye&&ye.defaultView||window;if(le.getSelection){var ue=le.getSelection(),We=C.textContent.length,tt=Math.min(H.start,We),jt=H.end===void 0?tt:Math.min(H.end,We);!ue.extend&&tt>jt&&(v=jt,jt=tt,tt=v);var Q=Lp(C,tt),k=Lp(C,jt);if(Q&&k&&(ue.rangeCount!==1||ue.anchorNode!==Q.node||ue.anchorOffset!==Q.offset||ue.focusNode!==k.node||ue.focusOffset!==k.offset)){var ne=ye.createRange();ne.setStart(Q.node,Q.offset),ue.removeAllRanges(),tt>jt?(ue.addRange(ne),ue.extend(k.node,k.offset)):(ne.setEnd(k.node,k.offset),ue.addRange(ne))}}}}for(ye=[],ue=C;ue=ue.parentNode;)ue.nodeType===1&&ye.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ye.length;C++){var _e=ye[C];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}gc=!!Qf,Jf=Qf=null}finally{Lt=u,G.p=o,I.T=a}}t.current=n,bn=2}}function K0(){if(bn===2){bn=0;var t=Za,n=vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var u=Lt;Lt|=4;try{E0(t,n.alternate,n)}finally{Lt=u,G.p=o,I.T=a}}bn=3}}function Q0(){if(bn===4||bn===3){bn=0,Y();var t=Za,n=vr,a=xa,o=B0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,vr=Za=null,J0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ya=null),to(a),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=G.p,G.p=2,I.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var C=o[v];f(C.value,{componentStack:C.stack})}}finally{I.T=n,G.p=u}}(xa&3)!==0&&ac(),Hi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Ff?Oo++:(Oo=0,Ff=t):Oo=0,Po(0)}}function J0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,mo(n)))}function ac(){return Z0(),K0(),Q0(),$0()}function $0(){if(bn!==5)return!1;var t=Za,n=If;If=0;var a=to(xa),o=I.T,u=G.p;try{G.p=32>a?32:a,I.T=null,a=Bf,Bf=null;var f=Za,v=xa;if(bn=0,vr=Za=null,xa=0,(Lt&6)!==0)throw Error(s(331));var C=Lt;if(Lt|=4,O0(f.current),D0(f,f.current,v,a),Lt=C,Po(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(pe,f)}catch{}return!0}finally{G.p=u,I.T=o,J0(t,n)}}function eg(t,n,a){n=pi(a,n),n=gf(t.stateNode,n,2),t=Va(t,n,2),t!==null&&(ke(t,2),Hi(t))}function Ht(t,n,a){if(t.tag===3)eg(t,t,a);else for(;n!==null;){if(n.tag===3){eg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ya===null||!Ya.has(o))){t=pi(a,t),a=t0(2),o=Va(n,a,2),o!==null&&(n0(a,o,n,t),ke(o,2),Hi(o));break}}n=n.return}}function Hf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new ry;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Lf=!0,u.add(a),t=fy.bind(null,t,n,a),n.then(t,t))}function fy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qt===t&&(yt&a)===a&&(cn===4||cn===3&&(yt&62914560)===yt&&300>st()-Jl?(Lt&2)===0&&_r(t,0):Of|=a,xr===yt&&(xr=0)),Hi(t)}function tg(t,n){n===0&&(n=Ee()),t=Ss(t,n),t!==null&&(ke(t,n),Hi(t))}function dy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),tg(t,a)}function hy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),tg(t,a)}function py(t,n){return tn(t,n)}var sc=null,br=null,Vf=!1,rc=!1,kf=!1,Qa=0;function Hi(t){t!==br&&t.next===null&&(br===null?sc=br=t:br=br.next=t),rc=!0,Vf||(Vf=!0,gy())}function Po(t,n){if(!kf&&rc){kf=!0;do for(var a=!1,o=sc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-ze(42|t)+1)-1,f&=u&~(v&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,sg(o,f))}else f=yt,f=ve(o,o===qt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ne(o,f)||(a=!0,sg(o,f));o=o.next}while(a);kf=!1}}function my(){ng()}function ng(){rc=Vf=!1;var t=0;Qa!==0&&Ay()&&(t=Qa);for(var n=st(),a=null,o=sc;o!==null;){var u=o.next,f=ig(o,n);f===0?(o.next=null,a===null?sc=u:a.next=u,u===null&&(br=a)):(a=o,(t!==0||(f&3)!==0)&&(rc=!0)),o=u}bn!==0&&bn!==5||Po(t),Qa!==0&&(Qa=0)}function ig(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-ze(f),C=1<<v,H=u[v];H===-1?((C&a)===0||(C&o)!==0)&&(u[v]=Fe(C,n)):H<=n&&(t.expiredLanes|=C),f&=~C}if(n=qt,a=yt,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Pt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ne(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Pt(o),to(a)){case 2:case 8:a=S;break;case 32:a=W;break;case 268435456:a=he;break;default:a=W}return o=ag.bind(null,t),a=tn(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Pt(o),t.callbackPriority=2,t.callbackNode=null,2}function ag(t,n){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ac()&&t.callbackNode!==a)return null;var o=yt;return o=ve(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(z0(t,o,n),ig(t,st()),t.callbackNode!=null&&t.callbackNode===a?ag.bind(null,t):null)}function sg(t,n){if(ac())return null;z0(t,n,!0)}function gy(){Ry(function(){(Lt&6)!==0?tn(N,my):ng()})}function Xf(){if(Qa===0){var t=rr;t===0&&(t=Je,Je<<=1,(Je&261888)===0&&(Je=256)),Qa=t}return Qa}function rg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:vs(""+t)}function og(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function xy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=rg((u[wn]||null).action),v=o.submitter;v&&(n=(n=v[wn]||null)?rg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var C=new vl("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Qa!==0){var H=v?og(u,v):new FormData(u);uf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(C.preventDefault(),H=v?og(u,v):new FormData(u),uf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var jf=0;jf<Au.length;jf++){var Wf=Au[jf],vy=Wf.toLowerCase(),_y=Wf[0].toUpperCase()+Wf.slice(1);Ri(vy,"on"+_y)}Ri(Fp,"onAnimationEnd"),Ri(zp,"onAnimationIteration"),Ri(Gp,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(P_,"onTransitionRun"),Ri(I_,"onTransitionStart"),Ri(B_,"onTransitionCancel"),Ri(Hp,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function lg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var C=o[v],H=C.instance,ie=C.currentTarget;if(C=C.listener,H!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ie;try{f(u)}catch(xe){bl(xe)}u.currentTarget=null,f=H}else for(v=0;v<o.length;v++){if(C=o[v],H=C.instance,ie=C.currentTarget,C=C.listener,H!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ie;try{f(u)}catch(xe){bl(xe)}u.currentTarget=null,f=H}}}}function _t(t,n){var a=n[ms];a===void 0&&(a=n[ms]=new Set);var o=t+"__bubble";a.has(o)||(cg(n,t,2,!1),a.add(o))}function qf(t,n,a){var o=0;n&&(o|=4),cg(a,t,o,n)}var oc="_reactListening"+Math.random().toString(36).slice(2);function Yf(t){if(!t[oc]){t[oc]=!0,pl.forEach(function(a){a!=="selectionchange"&&(yy.has(a)||qf(a,!1,t),qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[oc]||(n[oc]=!0,qf("selectionchange",!1,n))}}function cg(t,n,a,o){switch(Fg(n)){case 2:var u=Yy;break;case 8:u=Zy;break;default:u=cd}a=u.bind(null,n,a,t),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Zf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var C=o.stateNode.containerInfo;if(C===u)break;if(v===4)for(v=o.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;C!==null;){if(v=ea(C),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){o=f=v;continue e}C=C.parentNode}}o=o.return}pp(function(){var ie=f,xe=fu(a),ye=[];e:{var le=Vp.get(t);if(le!==void 0){var ue=vl,We=t;switch(t){case"keypress":if(gl(a)===0)break e;case"keydown":case"keyup":ue=h_;break;case"focusin":We="focus",ue=xu;break;case"focusout":We="blur",ue=xu;break;case"beforeblur":case"afterblur":ue=xu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=t_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=g_;break;case Fp:case zp:case Gp:ue=a_;break;case Hp:ue=v_;break;case"scroll":case"scrollend":ue=$v;break;case"wheel":ue=y_;break;case"copy":case"cut":case"paste":ue=r_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=_p;break;case"toggle":case"beforetoggle":ue=S_}var tt=(n&4)!==0,jt=!tt&&(t==="scroll"||t==="scrollend"),Q=tt?le!==null?le+"Capture":null:le;tt=[];for(var k=ie,ne;k!==null;){var _e=k;if(ne=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ne===null||Q===null||(_e=io(k,Q),_e!=null&&tt.push(Bo(k,_e,ne))),jt)break;k=k.return}0<tt.length&&(le=new ue(le,We,null,a,xe),ye.push({event:le,listeners:tt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",le&&a!==uu&&(We=a.relatedTarget||a.fromElement)&&(ea(We)||We[jn]))break e;if((ue||le)&&(le=xe.window===xe?xe:(le=xe.ownerDocument)?le.defaultView||le.parentWindow:window,ue?(We=a.relatedTarget||a.toElement,ue=ie,We=We?ea(We):null,We!==null&&(jt=c(We),tt=We.tag,We!==jt||tt!==5&&tt!==27&&tt!==6)&&(We=null)):(ue=null,We=ie),ue!==We)){if(tt=xp,_e="onMouseLeave",Q="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=_p,_e="onPointerLeave",Q="onPointerEnter",k="pointer"),jt=ue==null?le:xs(ue),ne=We==null?le:xs(We),le=new tt(_e,k+"leave",ue,a,xe),le.target=jt,le.relatedTarget=ne,_e=null,ea(xe)===ie&&(tt=new tt(Q,k+"enter",We,a,xe),tt.target=ne,tt.relatedTarget=jt,_e=tt),jt=_e,ue&&We)t:{for(tt=by,Q=ue,k=We,ne=0,_e=Q;_e;_e=tt(_e))ne++;_e=0;for(var et=k;et;et=tt(et))_e++;for(;0<ne-_e;)Q=tt(Q),ne--;for(;0<_e-ne;)k=tt(k),_e--;for(;ne--;){if(Q===k||k!==null&&Q===k.alternate){tt=Q;break t}Q=tt(Q),k=tt(k)}tt=null}else tt=null;ue!==null&&ug(ye,le,ue,tt,!1),We!==null&&jt!==null&&ug(ye,jt,We,tt,!0)}}e:{if(le=ie?xs(ie):window,ue=le.nodeName&&le.nodeName.toLowerCase(),ue==="select"||ue==="input"&&le.type==="file")var Dt=wp;else if(Tp(le))if(Rp)Dt=U_;else{Dt=N_;var Ye=C_}else ue=le.nodeName,!ue||ue.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ie&&Ot(ie.elementType)&&(Dt=wp):Dt=D_;if(Dt&&(Dt=Dt(t,ie))){Ap(ye,Dt,a,xe);break e}Ye&&Ye(t,le,ie),t==="focusout"&&ie&&le.type==="number"&&ie.memoizedProps.value!=null&&xt(le,"number",le.value)}switch(Ye=ie?xs(ie):window,t){case"focusin":(Tp(Ye)||Ye.contentEditable==="true")&&(Js=Ye,Mu=ie,fo=null);break;case"focusout":fo=Mu=Js=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,Ip(ye,a,xe);break;case"selectionchange":if(O_)break;case"keydown":case"keyup":Ip(ye,a,xe)}var ht;if(_u)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Qs?Mp(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(yp&&a.locale!=="ko"&&(Qs||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Qs&&(ht=mp()):(Pa=xe,pu="value"in Pa?Pa.value:Pa.textContent,Qs=!0)),Ye=lc(ie,bt),0<Ye.length&&(bt=new vp(bt,t,null,a,xe),ye.push({event:bt,listeners:Ye}),ht?bt.data=ht:(ht=Ep(a),ht!==null&&(bt.data=ht)))),(ht=E_?T_(t,a):A_(t,a))&&(bt=lc(ie,"onBeforeInput"),0<bt.length&&(Ye=new vp("onBeforeInput","beforeinput",null,a,xe),ye.push({event:Ye,listeners:bt}),Ye.data=ht)),xy(ye,t,ie,a,xe)}lg(ye,n)})}function Bo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function lc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=io(t,a),u!=null&&o.unshift(Bo(t,u,f)),u=io(t,n),u!=null&&o.push(Bo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function by(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ug(t,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var C=a,H=C.alternate,ie=C.stateNode;if(C=C.tag,H!==null&&H===o)break;C!==5&&C!==26&&C!==27||ie===null||(H=ie,u?(ie=io(a,f),ie!=null&&v.unshift(Bo(a,ie,H))):u||(ie=io(a,f),ie!=null&&v.push(Bo(a,ie,H)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Sy=/\r\n?/g,My=/\u0000|\uFFFD/g;function fg(t){return(typeof t=="string"?t:""+t).replace(Sy,`
`).replace(My,"")}function dg(t,n){return n=fg(n),fg(t)===n}function Xt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ni(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ni(t,""+o);break;case"className":je(t,"class",o);break;case"tabIndex":je(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":je(t,a,o);break;case"style":wi(t,o,f);break;case"data":if(n!=="object"){je(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=na);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=vs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Le(t,"popover",o);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Le(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bi.get(a)||a,Le(t,a,o))}}function Kf(t,n,a,o,u,f){switch(a){case"style":wi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ni(t,o):(typeof o=="number"||typeof o=="bigint")&&ni(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[wn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Le(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,f,v,a,null)}}u&&Xt(t,n,"srcSet",a.srcSet,a,null),o&&Xt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var C=f=v=u=null,H=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var xe=a[o];if(xe!=null)switch(o){case"name":u=xe;break;case"type":v=xe;break;case"checked":H=xe;break;case"defaultChecked":ie=xe;break;case"value":f=xe;break;case"defaultValue":C=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(s(137,n));break;default:Xt(t,n,o,xe,a,null)}}Pn(t,f,C,H,ie,v,u,!1);return;case"select":_t("invalid",t),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":v=C;break;case"multiple":o=C;default:Xt(t,n,u,C,a,null)}n=f,a=v,t.multiple=!!o,n!=null?yn(t,!!o,n,!1):a!=null&&yn(t,!!o,a,!0);return;case"textarea":_t("invalid",t),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(C=a[v],C!=null))switch(v){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Xt(t,n,v,C,a,null)}Ai(t,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xt(t,n,H,o,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<Io.length;o++)_t(Io[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,ie,o,a,null)}return;default:if(Ot(n)){for(xe in a)a.hasOwnProperty(xe)&&(o=a[xe],o!==void 0&&Kf(t,n,xe,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Xt(t,n,C,o,a,null))}function Ey(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,C=null,H=null,ie=null,xe=null;for(ue in a){var ye=a[ue];if(a.hasOwnProperty(ue)&&ye!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":H=ye;default:o.hasOwnProperty(ue)||Xt(t,n,ue,null,o,ye)}}for(var le in o){var ue=o[le];if(ye=a[le],o.hasOwnProperty(le)&&(ue!=null||ye!=null))switch(le){case"type":f=ue;break;case"name":u=ue;break;case"checked":ie=ue;break;case"defaultChecked":xe=ue;break;case"value":v=ue;break;case"defaultValue":C=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==ye&&Xt(t,n,le,ue,o,ye)}}Ge(t,v,C,H,ie,xe,f,u);return;case"select":ue=v=C=le=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ue=H;default:o.hasOwnProperty(f)||Xt(t,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":le=f;break;case"defaultValue":C=f;break;case"multiple":v=f;default:f!==H&&Xt(t,n,u,f,o,H)}n=C,a=v,o=ue,le!=null?yn(t,!!a,le,!1):!!o!=!!a&&(n!=null?yn(t,!!a,n,!0):yn(t,!!a,a?[]:"",!1));return;case"textarea":ue=le=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Xt(t,n,C,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":le=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xt(t,n,v,u,o,f)}ti(t,le,ue);return;case"option":for(var We in a)if(le=a[We],a.hasOwnProperty(We)&&le!=null&&!o.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Xt(t,n,We,null,o,le)}for(H in o)if(le=o[H],ue=a[H],o.hasOwnProperty(H)&&le!==ue&&(le!=null||ue!=null))switch(H){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Xt(t,n,H,le,o,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)le=a[tt],a.hasOwnProperty(tt)&&le!=null&&!o.hasOwnProperty(tt)&&Xt(t,n,tt,null,o,le);for(ie in o)if(le=o[ie],ue=a[ie],o.hasOwnProperty(ie)&&le!==ue&&(le!=null||ue!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:Xt(t,n,ie,le,o,ue)}return;default:if(Ot(n)){for(var jt in a)le=a[jt],a.hasOwnProperty(jt)&&le!==void 0&&!o.hasOwnProperty(jt)&&Kf(t,n,jt,void 0,o,le);for(xe in o)le=o[xe],ue=a[xe],!o.hasOwnProperty(xe)||le===ue||le===void 0&&ue===void 0||Kf(t,n,xe,le,o,ue);return}}for(var Q in a)le=a[Q],a.hasOwnProperty(Q)&&le!=null&&!o.hasOwnProperty(Q)&&Xt(t,n,Q,null,o,le);for(ye in o)le=o[ye],ue=a[ye],!o.hasOwnProperty(ye)||le===ue||le==null&&ue==null||Xt(t,n,ye,le,o,ue)}function hg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ty(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,C=u.duration;if(f&&C&&hg(v)){for(v=0,C=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ie=H.startTime;if(ie>C)break;var xe=H.transferSize,ye=H.initiatorType;xe&&hg(ye)&&(H=H.responseEnd,v+=xe*(H<C?1:(C-ie)/(H-ie)))}if(--o,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qf=null,Jf=null;function cc(t){return t.nodeType===9?t:t.ownerDocument}function pg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function $f(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ed=null;function Ay(){var t=window.event;return t&&t.type==="popstate"?t===ed?!1:(ed=t,!0):(ed=null,!1)}var gg=typeof setTimeout=="function"?setTimeout:void 0,wy=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,Ry=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(t){return xg.resolve(null).then(t).catch(Cy)}:gg;function Cy(t){setTimeout(function(){throw t})}function Ja(t){return t==="head"}function vg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Tr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Fo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,C=f.nodeName;f[Da]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Fo(t.ownerDocument.body);a=u}while(a);Tr(n)}function _g(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function td(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":td(a),Ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ny(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Da])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function Dy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function yg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function nd(t){return t.data==="$?"||t.data==="$~"}function id(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Uy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ad=null;function bg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return _i(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Sg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Mg(t,n,a){switch(n=cc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Fo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ua(t)}var yi=new Map,Eg=new Set;function uc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var va=G.d;G.d={f:Ly,r:Oy,D:Py,C:Iy,L:By,m:Fy,X:Gy,S:zy,M:Hy};function Ly(){var t=va.f(),n=tc();return t||n}function Oy(t){var n=ta(t);n!==null&&n.tag===5&&n.type==="form"?Hm(n):va.r(t)}var Sr=typeof document>"u"?null:document;function Tg(t,n,a){var o=Sr;if(o&&typeof n=="string"&&n){var u=Ft(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Eg.has(u)||(Eg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),pn(n),o.head.appendChild(n)))}}function Py(t){va.D(t),Tg("dns-prefetch",t,null)}function Iy(t,n){va.C(t,n),Tg("preconnect",t,n)}function By(t,n,a){va.L(t,n,a);var o=Sr;if(o&&t&&n){var u='link[rel="preload"][as="'+Ft(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ft(a.imageSizes)+'"]')):u+='[href="'+Ft(t)+'"]';var f=u;switch(n){case"style":f=Mr(t);break;case"script":f=Er(t)}yi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(zo(f))||n==="script"&&o.querySelector(Go(f))||(n=o.createElement("link"),Dn(n,"link",t),pn(n),o.head.appendChild(n)))}}function Fy(t,n){va.m(t,n);var a=Sr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ft(o)+'"][href="'+Ft(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Er(t)}if(!yi.has(f)&&(t=_({rel:"modulepreload",href:t},n),yi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(f)))return}o=a.createElement("link"),Dn(o,"link",t),pn(o),a.head.appendChild(o)}}}function zy(t,n,a){va.S(t,n,a);var o=Sr;if(o&&t){var u=La(o).hoistableStyles,f=Mr(t);n=n||"default";var v=u.get(f);if(!v){var C={loading:0,preload:null};if(v=o.querySelector(zo(f)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(f))&&sd(t,a);var H=v=o.createElement("link");pn(H),Dn(H,"link",t),H._p=new Promise(function(ie,xe){H.onload=ie,H.onerror=xe}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,fc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:C},u.set(f,v)}}}function Gy(t,n){va.X(t,n);var a=Sr;if(a&&t){var o=La(a).hoistableScripts,u=Er(t),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(t=_({src:t,async:!0},n),(n=yi.get(u))&&rd(t,n),f=a.createElement("script"),pn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Hy(t,n){va.M(t,n);var a=Sr;if(a&&t){var o=La(a).hoistableScripts,u=Er(t),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&rd(t,n),f=a.createElement("script"),pn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Ag(t,n,a,o){var u=(u=te.current)?uc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Mr(a.href),a=La(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Mr(a.href);var f=La(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(zo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),yi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,a),f||Vy(u,t,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=La(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Mr(t){return'href="'+Ft(t)+'"'}function zo(t){return'link[rel="stylesheet"]['+t+"]"}function wg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Vy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),pn(n),t.head.appendChild(n))}function Er(t){return'[src="'+Ft(t)+'"]'}function Go(t){return"script[async]"+t}function Rg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ft(a.href)+'"]');if(o)return n.instance=o,pn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),pn(o),Dn(o,"style",u),fc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Mr(a.href);var f=t.querySelector(zo(u));if(f)return n.state.loading|=4,n.instance=f,pn(f),f;o=wg(a),(u=yi.get(u))&&sd(o,u),f=(t.ownerDocument||t).createElement("link"),pn(f);var v=f;return v._p=new Promise(function(C,H){v.onload=C,v.onerror=H}),Dn(f,"link",o),n.state.loading|=4,fc(f,a.precedence,t),n.instance=f;case"script":return f=Er(a.src),(u=t.querySelector(Go(f)))?(n.instance=u,pn(u),u):(o=a,(u=yi.get(f))&&(o=_({},a),rd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),pn(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fc(o,a.precedence,t));return n.instance}function fc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var C=o[v];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function rd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var dc=null;function Cg(t,n,a){if(dc===null){var o=new Map,u=dc=new Map;u.set(a,o)}else u=dc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Da]||f[hn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var C=o.get(v);C?C.push(f):o.set(v,[f])}}return o}function Ng(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ky(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Dg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Xy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Mr(o.href),f=n.querySelector(zo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,pn(f);return}f=n.ownerDocument||n,o=wg(o),(u=yi.get(u))&&sd(o,u),f=f.createElement("link"),pn(f);var v=f;v._p=new Promise(function(C,H){v.onload=C,v.onerror=H}),Dn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var od=0;function jy(t,n){return t.stylesheets&&t.count===0&&mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&od===0&&(od=62500*Ty());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>od?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pc=null;function mc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pc=new Map,n.forEach(Wy,t),pc=null,hc.call(t))}function Wy(t,n){if(!(n.state.loading&4)){var a=pc.get(t);if(a)var o=a.get(null);else{a=new Map,pc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ho={$$typeof:B,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function qy(t,n,a,o,u,f,v,C,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Ug(t,n,a,o,u,f,v,C,H,ie,xe,ye){return t=new qy(t,n,a,v,H,ie,xe,ye,C),n=1,f===!0&&(n|=24),f=ai(3,null,null,n),t.current=f,f.stateNode=t,n=zu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},ku(f),t}function Lg(t){return t?(t=tr,t):tr}function Og(t,n,a,o,u,f){u=Lg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ha(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Va(t,o,n),a!==null&&(Qn(a,t,n),_o(a,t,n))}function Pg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ld(t,n){Pg(t,n),(t=t.alternate)&&Pg(t,n)}function Ig(t){if(t.tag===13||t.tag===31){var n=Ss(t,67108864);n!==null&&Qn(n,t,67108864),ld(t,67108864)}}function Bg(t){if(t.tag===13||t.tag===31){var n=ci();n=eo(n);var a=Ss(t,n);a!==null&&Qn(a,t,n),ld(t,n)}}var gc=!0;function Yy(t,n,a,o){var u=I.T;I.T=null;var f=G.p;try{G.p=2,cd(t,n,a,o)}finally{G.p=f,I.T=u}}function Zy(t,n,a,o){var u=I.T;I.T=null;var f=G.p;try{G.p=8,cd(t,n,a,o)}finally{G.p=f,I.T=u}}function cd(t,n,a,o){if(gc){var u=ud(o);if(u===null)Zf(t,n,o,xc,a),zg(t,o);else if(Qy(u,t,n,a,o))o.stopPropagation();else if(zg(t,o),n&4&&-1<Ky.indexOf(t)){for(;u!==null;){var f=ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Re(f.pendingLanes);if(v!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;v;){var H=1<<31-ze(v);C.entanglements[1]|=H,v&=~H}Hi(f),(Lt&6)===0&&($l=st()+500,Po(0))}}break;case 31:case 13:C=Ss(f,2),C!==null&&Qn(C,f,2),tc(),ld(f,2)}if(f=ud(o),f===null&&Zf(t,n,o,xc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Zf(t,n,o,null,a)}}function ud(t){return t=fu(t),fd(t)}var xc=null;function fd(t){if(xc=null,t=ea(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return xc=t,null}function Fg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case N:return 2;case S:return 8;case W:case $:return 32;case he:return 268435456;default:return 32}default:return 32}}var dd=!1,$a=null,es=null,ts=null,Vo=new Map,ko=new Map,ns=[],Ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zg(t,n){switch(t){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(n.pointerId)}}function Xo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ta(n),n!==null&&Ig(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Qy(t,n,a,o,u){switch(n){case"focusin":return $a=Xo($a,t,n,a,o,u),!0;case"dragenter":return es=Xo(es,t,n,a,o,u),!0;case"mouseover":return ts=Xo(ts,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Vo.set(f,Xo(Vo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,ko.set(f,Xo(ko.get(f)||null,t,n,a,o,u)),!0}return!1}function Gg(t){var n=ea(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ys(t.priority,function(){Bg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Ys(t.priority,function(){Bg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ud(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);uu=o,a.target.dispatchEvent(o),uu=null}else return n=ta(a),n!==null&&Ig(n),t.blockedOn=a,!1;n.shift()}return!0}function Hg(t,n,a){vc(t)&&a.delete(n)}function Jy(){dd=!1,$a!==null&&vc($a)&&($a=null),es!==null&&vc(es)&&(es=null),ts!==null&&vc(ts)&&(ts=null),Vo.forEach(Hg),ko.forEach(Hg)}function _c(t,n){t.blockedOn===n&&(t.blockedOn=null,dd||(dd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Jy)))}var yc=null;function Vg(t){yc!==t&&(yc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yc===t&&(yc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(fd(o||a)===null)continue;break}var f=ta(a);f!==null&&(t.splice(n,3),n-=3,uf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Tr(t){function n(H){return _c(H,t)}$a!==null&&_c($a,t),es!==null&&_c(es,t),ts!==null&&_c(ts,t),Vo.forEach(n),ko.forEach(n);for(var a=0;a<ns.length;a++){var o=ns[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ns.length&&(a=ns[0],a.blockedOn===null);)Gg(a),a.blockedOn===null&&ns.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[wn]||null;if(typeof f=="function")v||Vg(a);else if(v){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[wn]||null)C=v.formAction;else if(fd(u)!==null)continue}else C=v.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),Vg(a)}}}function kg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function hd(t){this._internalRoot=t}bc.prototype.render=hd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ci();Og(a,o,t,n,null,null)},bc.prototype.unmount=hd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Og(t.current,2,null,t,null,null),tc(),n[jn]=null}};function bc(t){this._internalRoot=t}bc.prototype.unstable_scheduleHydration=function(t){if(t){var n=no();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ns.length&&n!==0&&n<ns[a].priority;a++);ns.splice(a,0,t),a===0&&Gg(t)}};var Xg=e.version;if(Xg!=="19.2.8")throw Error(s(527,Xg,"19.2.8"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var $y={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{pe=Sc.inject($y),me=Sc}catch{}}return Wo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Qm,f=Jm,v=$m;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Ug(t,1,!1,null,null,a,o,null,u,f,v,kg),t[jn]=n.current,Yf(t),new hd(n)},Wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Qm,v=Jm,C=$m,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Ug(t,1,!0,n,a??null,o,u,H,f,v,C,kg),n.context=Lg(null),a=n.current,o=ci(),o=eo(o),u=Ha(o),u.callback=null,Va(a,u,o),a=o,n.current.lanes=a,ke(n,a),Hi(n),t[jn]=n.current,Yf(t),new bc(n)},Wo.version="19.2.8",Wo}var ex;function db(){if(ex)return xd.exports;ex=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xd.exports=fb(),xd.exports}var hb=db();const pb=dv(hb),Ln=[1995,2e3,2005,2010,2015,2020,2026],Qc={1995:{year:1995,title:"Dawn of the World Wide Web",subtitle:"Grey backgrounds, raw HTML, Web Counters & Guestbooks",paradigm:"Document Hyperlinking",aesthetic:"Raw HTML 2.0 / Windows 95 Bevels",keyTech:["HTML 2.0","Netscape Navigator 1.0","Dial-up 28.8k","Perl CGI"],vibeColor:"#c0c0c0",hardware:{deviceName:"Beige CRT Terminal (Trinitron Tube)",displayType:'14" Shadow Mask CRT (Curved Phosphor)',resolution:"640 × 480 @ 60Hz",colorDepth:"256 Colors (8-bit indexed)",chassisMaterial:"Injection-Molded Beige ABS Plastic",secondaryPropName:'3.5" HD Floppy Disk',secondaryPropDesc:"1.44MB 'Internet Setup & Dial-Up Suite v1.1'"}},2e3:{year:2e3,title:"Dot-Com Boom & Flash Golden Age",subtitle:"Animated GIFs, Marquees, Star Cursors & Web Rings",paradigm:"Sensory Multimedia Chaos",aesthetic:"Geocities / Macromedia Flash 4 / Neon Cyber",keyTech:["Macromedia Flash","GeoCities","ICQ","56k Modems","Framesets"],vibeColor:"#ff007f",hardware:{deviceName:"Bondi Translucent All-in-One",displayType:'15" Flat-Face CRT Display',resolution:"1024 × 768 @ 75Hz",colorDepth:"16-Bit High Color",chassisMaterial:"Translucent Bondi-Blue Polycarbonate",secondaryPropName:"AOL 500-Hours CD-ROM",secondaryPropDesc:"Jewel Case CD 'Try America Online for 500 Hours Free!'"}},2005:{year:2005,title:"Web 2.0, MSN & MySpace",subtitle:"Glossy badges, custom CSS profiles, instant chat & Nudges",paradigm:"Social User-Generated Content",aesthetic:"Glossy Gradients, Aqua Glass, MSN Blues",keyTech:["AJAX","MSN Messenger 7","MySpace","Early YouTube","RSS"],vibeColor:"#00a4e4",hardware:{deviceName:"Early Flat Panel LCD Workstation",displayType:'17" CCFL-Backlit TN LCD Panel',resolution:"1280 × 1024 (5:4 Aspect Ratio)",colorDepth:"24-Bit True Color",chassisMaterial:"Silver Lacquered Composite & Dual-Tone Trim",secondaryPropName:"iPod Classic Click-Wheel",secondaryPropDesc:"20GB White Polished Acrylic & Mirror Steel"}},2010:{year:2010,title:"Skeuomorphism & The App Revolution",subtitle:"Stitched leather, wood grain textures, gloss buttons & Slide to Unlock",paradigm:"Mobile-First & Tactile Metaphors",aesthetic:"iOS 4 / Steve Jobs Skeuomorphism / Early Facebook",keyTech:["iOS 4 / Android Froyo","HTML5 & CSS3","jQuery","Responsive Web Design"],vibeColor:"#3b5998",hardware:{deviceName:"Unibody Precision Slate",displayType:'3.5" IPS Retina Glass Display',resolution:"960 × 640 @ 326 PPI",colorDepth:"Full sRGB IPS Color",chassisMaterial:"Aluminosilicate Glass & CNC Stainless Steel Band",secondaryPropName:"Gold Micro-SIM Card",secondaryPropDesc:"3G UMTS Carrier Card with Exposed Gold Contacts"}},2015:{year:2015,title:"Flat Design & Social Supremacy",subtitle:"Material Design, 6-second looping Vines, hashtag culture & infinite scrolls",paradigm:"Bite-Sized Algorithmic Feeds",aesthetic:"Ultra-Flat, Pastel, Material Paper Elevation",keyTech:["Material Design","React.js","Vine & Instagram","SPAs","Flexbox"],vibeColor:"#00b488",hardware:{deviceName:"Slim Unibody Aluminum Laptop",displayType:'13.3" LED Backlit High-DPI IPS',resolution:"2560 × 1600 (16:10 Ratio)",colorDepth:"P3 Wide Color Gamut",chassisMaterial:"Bead-Blasted Anodized Aluminum Slab",secondaryPropName:"Brushed Aluminum USB-C Dongle",secondaryPropDesc:"Multiport Adapter & Lightning Cable"}},2020:{year:2020,title:"Remote Work, Discord & Dark Bento",subtitle:"Lo-Fi study sessions, Zoom grids, Discord servers & Bento cards",paradigm:"Connected Cloud Ecosystems & Dark Mode Default",aesthetic:"OLED Dark (#0d1117), Frosted Glass, Bento Grids",keyTech:["Next.js / Tailwind","WebRTC","Discord bots","TypeScript","Figma"],vibeColor:"#5865F2",hardware:{deviceName:"Micro-Bezel Dark OLED Display",displayType:'27" 4K Nano-OLED Thin-Bezel Matrix',resolution:"3840 × 2160 @ 144Hz",colorDepth:"10-Bit HDR 1000",chassisMaterial:"Space Gray Anodized Alloy & Dark Ceramic Core",secondaryPropName:"Magnetic MagSafe Puck",secondaryPropDesc:"Matte White Silicone & Brushed Aluminum Ring"}},2026:{year:2026,title:"Ambient AI & Spatial Canvas",subtitle:"Generative interfaces, autonomous agents, neural compute & organic fluid glows",paradigm:"Intention-Driven Synthesized UI",aesthetic:"Spatial Aurora Glows, Micro-haptics, Dynamic Agent Blocks",keyTech:["Agentic AI Copilots","Neural Rendering","Spatial Web","Local LLMs"],vibeColor:"#8b5cf6",hardware:{deviceName:"Floating Optic Neural Slab",displayType:"Zero-Bezel Micro-LED Spatial Surface",resolution:"Infinite Dynamic Vector Resolution",colorDepth:"Quantum Dot Spectral Range",chassisMaterial:"Monolithic Sapphire Optic Glass & Titanium Core",secondaryPropName:"Neural Optic Prism",secondaryPropDesc:"Prismatic Silicon Core with Ambient Neural LED"}}};class mb{constructor(){pd(this,"ctx",null);pd(this,"muted",!1)}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted}isMuted(){return this.muted}playPowerOnDegauss(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(300,e),i.frequency.exponentialRampToValueAtTime(40,e+.05),s.gain.setValueAtTime(.4,e),s.gain.exponentialRampToValueAtTime(.01,e+.05),i.connect(s),s.connect(this.ctx.destination),i.start(e),i.stop(e+.05);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sawtooth",l.frequency.setValueAtTime(110,e+.04),l.frequency.exponentialRampToValueAtTime(35,e+.55),c.gain.setValueAtTime(.35,e+.04),c.gain.exponentialRampToValueAtTime(.001,e+.6),l.connect(c),c.connect(this.ctx.destination),l.start(e+.04),l.stop(e+.6)}playDialTick(e=800){if(this.muted||(this.init(),!this.ctx))return;const i=this.ctx.currentTime,s=this.ctx.createOscillator(),l=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(e,i),s.frequency.exponentialRampToValueAtTime(e*.4,i+.02),l.gain.setValueAtTime(.12,i),l.gain.exponentialRampToValueAtTime(.001,i+.02),s.connect(l),l.connect(this.ctx.destination),s.start(i),s.stop(i+.02)}playRetroClick(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(120,this.ctx.currentTime+.04),i.gain.setValueAtTime(.3,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.04),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}playDialUp(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createOscillator(),l=this.ctx.createGain();i.type="sawtooth",s.type="triangle",i.frequency.setValueAtTime(1200,e),i.frequency.linearRampToValueAtTime(2400,e+.2),s.frequency.setValueAtTime(950,e),s.frequency.linearRampToValueAtTime(1800,e+.2),l.gain.setValueAtTime(.15,e),l.gain.exponentialRampToValueAtTime(.001,e+.5),i.connect(l),s.connect(l),l.connect(this.ctx.destination),i.start(e),s.start(e),i.stop(e+.5),s.stop(e+.5)}playMsnNudge(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((s,l)=>{const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(s,e+l*.06),d.gain.setValueAtTime(.2,e+l*.06),d.gain.exponentialRampToValueAtTime(.001,e+l*.06+.12),c.connect(d),d.connect(this.ctx.destination),c.start(e+l*.06),c.stop(e+l*.06+.12)})}playCameraClick(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(1400,e),i.frequency.exponentialRampToValueAtTime(300,e+.08),s.gain.setValueAtTime(.35,e),s.gain.exponentialRampToValueAtTime(.01,e+.08),i.connect(s),s.connect(this.ctx.destination),i.start(e),i.stop(e+.08)}playMaterialPop(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(440,e),i.frequency.exponentialRampToValueAtTime(880,e+.06),s.gain.setValueAtTime(.2,e),s.gain.exponentialRampToValueAtTime(.001,e+.06),i.connect(s),s.connect(this.ctx.destination),i.start(e),i.stop(e+.06)}playSpatialGlow(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;[440,554.37,659.25,830.61,987.77].forEach((s,l)=>{const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(s,e+l*.03),d.gain.setValueAtTime(.08,e+l*.03),d.gain.exponentialRampToValueAtTime(1e-4,e+l*.03+.8),c.connect(d),d.connect(this.ctx.destination),c.start(e+l*.03),c.stop(e+l*.03+.8)})}playRespectChime(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(528,e),s.gain.setValueAtTime(.25,e),s.gain.exponentialRampToValueAtTime(1e-4,e+1.2),i.connect(s),s.connect(this.ctx.destination),i.start(e),i.stop(e+1.2)}playAOLMail(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;[392,523.25,659.25,783.99].forEach((s,l)=>{const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type="triangle",c.frequency.setValueAtTime(s,e+l*.1),d.gain.setValueAtTime(.25,e+l*.1),d.gain.exponentialRampToValueAtTime(.001,e+l*.1+.25),c.connect(d),d.connect(this.ctx.destination),c.start(e+l*.1),c.stop(e+l*.1+.25)})}playICQUhOh(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(587.33,e),s.gain.setValueAtTime(.25,e),s.gain.exponentialRampToValueAtTime(.01,e+.12),i.connect(s),s.connect(this.ctx.destination),i.start(e),i.stop(e+.12);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sawtooth",l.frequency.setValueAtTime(392,e+.14),c.gain.setValueAtTime(.3,e+.14),c.gain.exponentialRampToValueAtTime(.001,e+.35),l.connect(c),c.connect(this.ctx.destination),l.start(e+.14),l.stop(e+.35)}playWin95Sound(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;[261.63,329.63,392,523.25,659.25,783.99,1046.5].forEach((s,l)=>{const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(s,e+l*.12),d.gain.setValueAtTime(.18,e+l*.12),d.gain.exponentialRampToValueAtTime(1e-4,e+l*.12+1.8),c.connect(d),d.connect(this.ctx.destination),c.start(e+l*.12),c.stop(e+l*.12+1.8)})}playWinXPSound(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;[[311.13,466.16],[392,587.33],[466.16,698.46],[622.25,932.33]].forEach((s,l)=>{s.forEach(c=>{const d=this.ctx.createOscillator(),p=this.ctx.createGain();d.type="triangle",d.frequency.setValueAtTime(c,e+l*.22),p.gain.setValueAtTime(.2,e+l*.22),p.gain.exponentialRampToValueAtTime(1e-4,e+l*.22+1.2),d.connect(p),p.connect(this.ctx.destination),d.start(e+l*.22),d.stop(e+l*.22+1.2)})})}playSkypeRing(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;[659.25,783.99,659.25,987.77].forEach((s,l)=>{const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(s,e+l*.09),d.gain.setValueAtTime(.25,e+l*.09),d.gain.exponentialRampToValueAtTime(.001,e+l*.09+.15),c.connect(d),d.connect(this.ctx.destination),c.start(e+l*.09),c.stop(e+l*.09+.15)})}playIpodClick(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(2200,e),i.frequency.exponentialRampToValueAtTime(400,e+.015),s.gain.setValueAtTime(.25,e),s.gain.exponentialRampToValueAtTime(.001,e+.015),i.connect(s),s.connect(this.ctx.destination),i.start(e),i.stop(e+.015)}}const ut=new mb,hv=He.createContext(void 0),gb=({children:r})=>{const[e,i]=He.useState("landing"),[s,l]=He.useState(1995),[c,d]=He.useState(0),[p,m]=He.useState(!1),[h,y]=He.useState(!1),[_,g]=He.useState(!1),[E,w]=He.useState(!1),[U,M]=He.useState(!1),[b,z]=He.useState(!1),[B,A]=He.useState(!1),[F,O]=He.useState(!1),[P,T]=He.useState(!1),[L,X]=He.useState(!1),[V,q]=He.useState(!1),ce=He.useCallback(de=>{const D=Math.max(0,Math.min(Ln.length-1,de));d(D);const K=Math.round(D),Se=Ln[K];Se!==s&&(l(Se),ut.playDialTick(400+K*90))},[s]),fe=He.useCallback(de=>{if(de===s)return;const D=Ln.indexOf(de);D!==-1&&d(D),M(!0),de===1995?ut.playRetroClick():de===2e3?ut.playDialUp():de===2005?ut.playMsnNudge():de===2010?ut.playCameraClick():de===2015?ut.playMaterialPop():(de===2020||de===2026)&&ut.playSpatialGlow(),setTimeout(()=>{l(de),setTimeout(()=>M(!1),300)},p?1200:250)},[s,p]),J=He.useCallback(de=>{const D=de||s;ut.playPowerOnDegauss(),z(!0),setTimeout(()=>{fe(D),i("timeline"),z(!1)},1100)},[s,fe]),I=He.useCallback(()=>{ut.playRetroClick(),i("landing")},[]),G=He.useCallback(()=>{const de=Ln.indexOf(s);de<Ln.length-1&&fe(Ln[de+1])},[s,fe]),ee=He.useCallback(()=>{const de=Ln.indexOf(s);de>0&&fe(Ln[de-1])},[s,fe]);He.useEffect(()=>{const de=D=>{D.target instanceof HTMLInputElement||D.target instanceof HTMLTextAreaElement||(D.key==="ArrowRight"&&G(),D.key==="ArrowLeft"&&ee(),D.key==="Enter"&&e==="landing"&&J())};return window.addEventListener("keydown",de),()=>window.removeEventListener("keydown",de)},[G,ee,e,J]),He.useEffect(()=>{if(!E)return;const de=setInterval(()=>{const K=(Ln.indexOf(s)+1)%Ln.length;fe(Ln[K])},4500);return()=>clearInterval(de)},[E,s,fe]);const ge=()=>{const de=ut.toggleMute();g(de)};return x.jsx(hv.Provider,{value:{viewMode:e,setViewMode:i,currentEra:s,setEra:fe,continuousIndex:c,setContinuousIndex:ce,nextEra:G,prevEra:ee,bootEra:J,returnToLanding:I,isDialUpMode:p,toggleDialUpMode:()=>m(de=>!de),isCRTMode:h,toggleCRTMode:()=>y(de=>!de),isMuted:_,toggleMute:ge,isAutoPlaying:E,toggleAutoPlay:()=>w(de=>!de),isTransitioning:U,isBooting:b,openGraveyard:B,setOpenGraveyard:A,openSurprise:F,setOpenSurprise:O,openDevTools:P,setOpenDevTools:T,openTimeCapsule:L,setOpenTimeCapsule:X,openAudioVault:V,setOpenAudioVault:q},children:r})},Ti=()=>{const r=He.useContext(hv);if(!r)throw new Error("useTimeMachine must be used within TimeMachineProvider");return r};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="185",xb=0,tx=1,vb=2,jc=1,pv=2,$o=3,hs=0,Jn=1,Ta=2,wa=0,kr=1,nx=2,ix=3,ax=4,_b=5,Gs=100,yb=101,bb=102,Sb=103,Mb=104,Eb=200,Tb=201,Ab=202,wb=203,eh=204,th=205,Rb=206,Cb=207,Nb=208,Db=209,Ub=210,Lb=211,Ob=212,Pb=213,Ib=214,nh=0,ih=1,ah=2,qr=3,sh=4,rh=5,oh=6,lh=7,mv=0,Bb=1,Fb=2,Yi=0,gv=1,xv=2,vv=3,qh=4,_v=5,yv=6,bv=7,Sv=300,ks=301,Yr=302,bd=303,Sd=304,ou=306,ch=1e3,Aa=1001,uh=1002,On=1003,zb=1004,Mc=1005,zn=1006,Md=1007,fs=1008,di=1009,Mv=1010,Ev=1011,il=1012,Yh=1013,Qi=1014,Wi=1015,Ca=1016,Zh=1017,Kh=1018,al=1020,Tv=35902,Av=35899,wv=1021,Rv=1022,Pi=1023,Na=1026,Vs=1027,Cv=1028,Qh=1029,Xs=1030,Jh=1031,$h=1033,Wc=33776,qc=33777,Yc=33778,Zc=33779,fh=35840,dh=35841,hh=35842,ph=35843,mh=36196,gh=37492,xh=37496,vh=37488,_h=37489,Jc=37490,yh=37491,bh=37808,Sh=37809,Mh=37810,Eh=37811,Th=37812,Ah=37813,wh=37814,Rh=37815,Ch=37816,Nh=37817,Dh=37818,Uh=37819,Lh=37820,Oh=37821,Ph=36492,Ih=36494,Bh=36495,Fh=36283,zh=36284,$c=36285,Gh=36286,Gb=3200,Hh=0,Hb=1,us="",Si="srgb",eu="srgb-linear",tu="linear",Vt="srgb",Ar=7680,sx=519,Vb=512,kb=513,Xb=514,ep=515,jb=516,Wb=517,tp=518,qb=519,rx=35044,ox="300 es",qi=2e3,sl=2001;function Yb(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function nu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zb(){const r=nu("canvas");return r.style.display="block",r}const lx={};function cx(...r){const e="THREE."+r.shift();console.log(e,...r)}function Nv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function it(...r){r=Nv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Rt(...r){r=Nv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Xr(...r){const e=r.join(" ");e in lx||(lx[e]=!0,it(...r))}function Kb(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Qb={[nh]:ih,[ah]:oh,[sh]:lh,[qr]:rh,[ih]:nh,[oh]:ah,[lh]:sh,[rh]:qr};class Ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ux=1234567;const tl=Math.PI/180,rl=180/Math.PI;function Qr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function St(r,e,i){return Math.max(e,Math.min(i,r))}function np(r,e){return(r%e+e)%e}function Jb(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function $b(r,e,i){return r!==e?(i-r)/(e-r):0}function nl(r,e,i){return(1-i)*r+i*e}function eS(r,e,i,s){return nl(r,e,1-Math.exp(-i*s))}function tS(r,e=1){return e-Math.abs(np(r,e*2)-e)}function nS(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function iS(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function aS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function sS(r,e){return r+Math.random()*(e-r)}function rS(r){return r*(.5-Math.random())}function oS(r){r!==void 0&&(ux=r);let e=ux+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lS(r){return r*tl}function cS(r){return r*rl}function uS(r){return(r&r-1)===0&&r!==0}function fS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function dS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hS(r,e,i,s,l){const c=Math.cos,d=Math.sin,p=c(i/2),m=d(i/2),h=c((e+s)/2),y=d((e+s)/2),_=c((e-s)/2),g=d((e-s)/2),E=c((s-e)/2),w=d((s-e)/2);switch(l){case"XYX":r.set(p*y,m*_,m*g,p*h);break;case"YZY":r.set(m*g,p*y,m*_,p*h);break;case"ZXZ":r.set(m*_,m*g,p*y,p*h);break;case"XZX":r.set(p*y,m*w,m*E,p*h);break;case"YXY":r.set(m*E,p*y,m*w,p*h);break;case"ZYZ":r.set(m*w,m*E,p*y,p*h);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Gr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Un={DEG2RAD:tl,RAD2DEG:rl,generateUUID:Qr,clamp:St,euclideanModulo:np,mapLinear:Jb,inverseLerp:$b,lerp:nl,damp:eS,pingpong:tS,smoothstep:nS,smootherstep:iS,randInt:aS,randFloat:sS,randFloatSpread:rS,seededRandom:oS,degToRad:lS,radToDeg:cS,isPowerOfTwo:uS,ceilPowerOfTwo:fS,floorPowerOfTwo:dS,setQuaternionFromProperEuler:hS,normalize:kn,denormalize:Gr},lp=class lp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lp.prototype.isVector2=!0;let Tt=lp;class Jr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],y=s[l+2],_=s[l+3],g=c[d+0],E=c[d+1],w=c[d+2],U=c[d+3];if(_!==U||m!==g||h!==E||y!==w){let M=m*g+h*E+y*w+_*U;M<0&&(g=-g,E=-E,w=-w,U=-U,M=-M);let b=1-p;if(M<.9995){const z=Math.acos(M),B=Math.sin(z);b=Math.sin(b*z)/B,p=Math.sin(p*z)/B,m=m*b+g*p,h=h*b+E*p,y=y*b+w*p,_=_*b+U*p}else{m=m*b+g*p,h=h*b+E*p,y=y*b+w*p,_=_*b+U*p;const z=1/Math.sqrt(m*m+h*h+y*y+_*_);m*=z,h*=z,y*=z,_*=z}}e[i]=m,e[i+1]=h,e[i+2]=y,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],y=s[l+3],_=c[d],g=c[d+1],E=c[d+2],w=c[d+3];return e[i]=p*w+y*_+m*E-h*g,e[i+1]=m*w+y*g+h*_-p*E,e[i+2]=h*w+y*E+p*g-m*_,e[i+3]=y*w-p*_-m*g-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),y=p(l/2),_=p(c/2),g=m(s/2),E=m(l/2),w=m(c/2);switch(d){case"XYZ":this._x=g*y*_+h*E*w,this._y=h*E*_-g*y*w,this._z=h*y*w+g*E*_,this._w=h*y*_-g*E*w;break;case"YXZ":this._x=g*y*_+h*E*w,this._y=h*E*_-g*y*w,this._z=h*y*w-g*E*_,this._w=h*y*_+g*E*w;break;case"ZXY":this._x=g*y*_-h*E*w,this._y=h*E*_+g*y*w,this._z=h*y*w+g*E*_,this._w=h*y*_-g*E*w;break;case"ZYX":this._x=g*y*_-h*E*w,this._y=h*E*_+g*y*w,this._z=h*y*w-g*E*_,this._w=h*y*_+g*E*w;break;case"YZX":this._x=g*y*_+h*E*w,this._y=h*E*_+g*y*w,this._z=h*y*w-g*E*_,this._w=h*y*_-g*E*w;break;case"XZY":this._x=g*y*_-h*E*w,this._y=h*E*_-g*y*w,this._z=h*y*w+g*E*_,this._w=h*y*_+g*E*w;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],y=i[6],_=i[10],g=s+p+_;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(y-m)*E,this._y=(c-h)*E,this._z=(d-l)*E}else if(s>p&&s>_){const E=2*Math.sqrt(1+s-p-_);this._w=(y-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+h)/E}else if(p>_){const E=2*Math.sqrt(1+p-s-_);this._w=(c-h)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+y)/E}else{const E=2*Math.sqrt(1+_-s-p);this._w=(d-l)/E,this._x=(c+h)/E,this._y=(m+y)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,y=i._w;return this._x=s*y+d*p+l*h-c*m,this._y=l*y+d*m+c*p-s*h,this._z=c*y+d*h+s*m-l*p,this._w=d*y-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),y=Math.sin(h);m=Math.sin(m*h)/y,i=Math.sin(i*h)/y,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const cp=class cp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(fx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(fx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),y=2*(p*i-c*l),_=2*(c*s-d*i);return this.x=i+m*h+d*_-p*y,this.y=s+m*y+p*h-c*_,this.z=l+m*_+c*y-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ed.copy(this).projectOnVector(e),this.sub(Ed)}reflect(e){return this.sub(Ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cp.prototype.isVector3=!0;let re=cp;const Ed=new re,fx=new Jr,up=class up{constructor(e,i,s,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h)}set(e,i,s,l,c,d,p,m,h){const y=this.elements;return y[0]=e,y[1]=l,y[2]=p,y[3]=i,y[4]=c,y[5]=m,y[6]=s,y[7]=d,y[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],y=s[4],_=s[7],g=s[2],E=s[5],w=s[8],U=l[0],M=l[3],b=l[6],z=l[1],B=l[4],A=l[7],F=l[2],O=l[5],P=l[8];return c[0]=d*U+p*z+m*F,c[3]=d*M+p*B+m*O,c[6]=d*b+p*A+m*P,c[1]=h*U+y*z+_*F,c[4]=h*M+y*B+_*O,c[7]=h*b+y*A+_*P,c[2]=g*U+E*z+w*F,c[5]=g*M+E*B+w*O,c[8]=g*b+E*A+w*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],y=e[8];return i*d*y-i*p*h-s*c*y+s*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],y=e[8],_=y*d-p*h,g=p*m-y*c,E=h*c-d*m,w=i*_+s*g+l*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/w;return e[0]=_*U,e[1]=(l*h-y*s)*U,e[2]=(p*s-l*d)*U,e[3]=g*U,e[4]=(y*i-l*m)*U,e[5]=(l*c-p*i)*U,e[6]=E*U,e[7]=(s*m-h*i)*U,e[8]=(d*i-s*c)*U,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return Xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Td.makeScale(e,i)),this}rotate(e){return Xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Td.makeRotation(-e)),this}translate(e,i){return Xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Td.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};up.prototype.isMatrix3=!0;let ot=up;const Td=new ot,dx=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hx=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pS(){const r={enabled:!0,workingColorSpace:eu,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Vt&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=jr(l.r),l.g=jr(l.g),l.b=jr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?tu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[eu]:{primaries:e,whitePoint:s,transfer:tu,toXYZ:dx,fromXYZ:hx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:s,transfer:Vt,toXYZ:dx,fromXYZ:hx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Et=pS();function Ra(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wr;class mS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{wr===void 0&&(wr=nu("canvas")),wr.width=e.width,wr.height=e.height;const l=wr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=wr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=nu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ra(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ra(i[s]/255)*255):i[s]=Ra(i[s]);return{data:i,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gS=0;class ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Qr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Ad(l[d].image)):c.push(Ad(l[d]))}else c=Ad(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Ad(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let xS=0;const wd=new re;class Gn extends Ws{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=Aa,l=Aa,c=zn,d=fs,p=Pi,m=di,h=Gn.DEFAULT_ANISOTROPY,y=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Qr(),this.name="",this.source=new ip(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ch:e.x=e.x-Math.floor(e.x);break;case Aa:e.x=e.x<0?0:1;break;case uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ch:e.y=e.y-Math.floor(e.y);break;case Aa:e.y=e.y<0?0:1;break;case uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Sv;Gn.DEFAULT_ANISOTROPY=1;const fp=class fp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],y=m[4],_=m[8],g=m[1],E=m[5],w=m[9],U=m[2],M=m[6],b=m[10];if(Math.abs(y-g)<.01&&Math.abs(_-U)<.01&&Math.abs(w-M)<.01){if(Math.abs(y+g)<.1&&Math.abs(_+U)<.1&&Math.abs(w+M)<.1&&Math.abs(h+E+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(h+1)/2,A=(E+1)/2,F=(b+1)/2,O=(y+g)/4,P=(_+U)/4,T=(w+M)/4;return B>A&&B>F?B<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(B),l=O/s,c=P/s):A>F?A<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),s=O/l,c=T/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=P/c,l=T/c),this.set(s,l,c,i),this}let z=Math.sqrt((M-w)*(M-w)+(_-U)*(_-U)+(g-y)*(g-y));return Math.abs(z)<.001&&(z=1),this.x=(M-w)/z,this.y=(_-U)/z,this.z=(g-y)/z,this.w=Math.acos((h+E+b-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fp.prototype.isVector4=!0;let on=fp;class vS extends Ws{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Gn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ip(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends vS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Dv extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _S extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ru=class ru{constructor(e,i,s,l,c,d,p,m,h,y,_,g,E,w,U,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h,y,_,g,E,w,U,M)}set(e,i,s,l,c,d,p,m,h,y,_,g,E,w,U,M){const b=this.elements;return b[0]=e,b[4]=i,b[8]=s,b[12]=l,b[1]=c,b[5]=d,b[9]=p,b[13]=m,b[2]=h,b[6]=y,b[10]=_,b[14]=g,b[3]=E,b[7]=w,b[11]=U,b[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ru().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Rr.setFromMatrixColumn(e,0).length(),c=1/Rr.setFromMatrixColumn(e,1).length(),d=1/Rr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),y=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const g=d*y,E=d*_,w=p*y,U=p*_;i[0]=m*y,i[4]=-m*_,i[8]=h,i[1]=E+w*h,i[5]=g-U*h,i[9]=-p*m,i[2]=U-g*h,i[6]=w+E*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*y,E=m*_,w=h*y,U=h*_;i[0]=g+U*p,i[4]=w*p-E,i[8]=d*h,i[1]=d*_,i[5]=d*y,i[9]=-p,i[2]=E*p-w,i[6]=U+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*y,E=m*_,w=h*y,U=h*_;i[0]=g-U*p,i[4]=-d*_,i[8]=w+E*p,i[1]=E+w*p,i[5]=d*y,i[9]=U-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*y,E=d*_,w=p*y,U=p*_;i[0]=m*y,i[4]=w*h-E,i[8]=g*h+U,i[1]=m*_,i[5]=U*h+g,i[9]=E*h-w,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,E=d*h,w=p*m,U=p*h;i[0]=m*y,i[4]=U-g*_,i[8]=w*_+E,i[1]=_,i[5]=d*y,i[9]=-p*y,i[2]=-h*y,i[6]=E*_+w,i[10]=g-U*_}else if(e.order==="XZY"){const g=d*m,E=d*h,w=p*m,U=p*h;i[0]=m*y,i[4]=-_,i[8]=h*y,i[1]=g*_+U,i[5]=d*y,i[9]=E*_-w,i[2]=w*_-E,i[6]=p*y,i[10]=U*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yS,e,bS)}lookAt(e,i,s){const l=this.elements;return ui.subVectors(e,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),as.crossVectors(s,ui),as.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),as.crossVectors(s,ui)),as.normalize(),Ec.crossVectors(ui,as),l[0]=as.x,l[4]=Ec.x,l[8]=ui.x,l[1]=as.y,l[5]=Ec.y,l[9]=ui.y,l[2]=as.z,l[6]=Ec.z,l[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],y=s[1],_=s[5],g=s[9],E=s[13],w=s[2],U=s[6],M=s[10],b=s[14],z=s[3],B=s[7],A=s[11],F=s[15],O=l[0],P=l[4],T=l[8],L=l[12],X=l[1],V=l[5],q=l[9],ce=l[13],fe=l[2],J=l[6],I=l[10],G=l[14],ee=l[3],ge=l[7],de=l[11],D=l[15];return c[0]=d*O+p*X+m*fe+h*ee,c[4]=d*P+p*V+m*J+h*ge,c[8]=d*T+p*q+m*I+h*de,c[12]=d*L+p*ce+m*G+h*D,c[1]=y*O+_*X+g*fe+E*ee,c[5]=y*P+_*V+g*J+E*ge,c[9]=y*T+_*q+g*I+E*de,c[13]=y*L+_*ce+g*G+E*D,c[2]=w*O+U*X+M*fe+b*ee,c[6]=w*P+U*V+M*J+b*ge,c[10]=w*T+U*q+M*I+b*de,c[14]=w*L+U*ce+M*G+b*D,c[3]=z*O+B*X+A*fe+F*ee,c[7]=z*P+B*V+A*J+F*ge,c[11]=z*T+B*q+A*I+F*de,c[15]=z*L+B*ce+A*G+F*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],y=e[2],_=e[6],g=e[10],E=e[14],w=e[3],U=e[7],M=e[11],b=e[15],z=m*E-h*g,B=p*E-h*_,A=p*g-m*_,F=d*E-h*y,O=d*g-m*y,P=d*_-p*y;return i*(U*z-M*B+b*A)-s*(w*z-M*F+b*O)+l*(w*B-U*F+b*P)-c*(w*A-U*O+M*P)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],d=e[5],p=e[9],m=e[2],h=e[6],y=e[10];return i*(d*y-p*h)-s*(c*y-p*m)+l*(c*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],y=e[8],_=e[9],g=e[10],E=e[11],w=e[12],U=e[13],M=e[14],b=e[15],z=i*p-s*d,B=i*m-l*d,A=i*h-c*d,F=s*m-l*p,O=s*h-c*p,P=l*h-c*m,T=y*U-_*w,L=y*M-g*w,X=y*b-E*w,V=_*M-g*U,q=_*b-E*U,ce=g*b-E*M,fe=z*ce-B*q+A*V+F*X-O*L+P*T;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/fe;return e[0]=(p*ce-m*q+h*V)*J,e[1]=(l*q-s*ce-c*V)*J,e[2]=(U*P-M*O+b*F)*J,e[3]=(g*O-_*P-E*F)*J,e[4]=(m*X-d*ce-h*L)*J,e[5]=(i*ce-l*X+c*L)*J,e[6]=(M*A-w*P-b*B)*J,e[7]=(y*P-g*A+E*B)*J,e[8]=(d*q-p*X+h*T)*J,e[9]=(s*X-i*q-c*T)*J,e[10]=(w*O-U*A+b*z)*J,e[11]=(_*A-y*O-E*z)*J,e[12]=(p*L-d*V-m*T)*J,e[13]=(i*V-s*L+l*T)*J,e[14]=(U*B-w*F-M*z)*J,e[15]=(y*F-_*B+g*z)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,p=e.y,m=e.z,h=c*d,y=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,y*p+s,y*m-l*d,0,h*m-l*p,y*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,y=d+d,_=p+p,g=c*h,E=c*y,w=c*_,U=d*y,M=d*_,b=p*_,z=m*h,B=m*y,A=m*_,F=s.x,O=s.y,P=s.z;return l[0]=(1-(U+b))*F,l[1]=(E+A)*F,l[2]=(w-B)*F,l[3]=0,l[4]=(E-A)*O,l[5]=(1-(g+b))*O,l[6]=(M+z)*O,l[7]=0,l[8]=(w+B)*P,l[9]=(M-z)*P,l[10]=(1-(g+U))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Rr.set(l[0],l[1],l[2]).length();const p=Rr.set(l[4],l[5],l[6]).length(),m=Rr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Di.copy(this);const h=1/d,y=1/p,_=1/m;return Di.elements[0]*=h,Di.elements[1]*=h,Di.elements[2]*=h,Di.elements[4]*=y,Di.elements[5]*=y,Di.elements[6]*=y,Di.elements[8]*=_,Di.elements[9]*=_,Di.elements[10]*=_,i.setFromRotationMatrix(Di),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,d,p=qi,m=!1){const h=this.elements,y=2*c/(i-e),_=2*c/(s-l),g=(i+e)/(i-e),E=(s+l)/(s-l);let w,U;if(m)w=c/(d-c),U=d*c/(d-c);else if(p===qi)w=-(d+c)/(d-c),U=-2*d*c/(d-c);else if(p===sl)w=-d/(d-c),U=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=y,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=U,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,p=qi,m=!1){const h=this.elements,y=2/(i-e),_=2/(s-l),g=-(i+e)/(i-e),E=-(s+l)/(s-l);let w,U;if(m)w=1/(d-c),U=d/(d-c);else if(p===qi)w=-2/(d-c),U=-(d+c)/(d-c);else if(p===sl)w=-1/(d-c),U=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=y,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=w,h[14]=U,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};ru.prototype.isMatrix4=!0;let un=ru;const Rr=new re,Di=new un,yS=new re(0,0,0),bS=new re(1,1,1),as=new re,Ec=new re,ui=new re,px=new un,mx=new Jr;class ps{constructor(e=0,i=0,s=0,l=ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],y=l[9],_=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-y,E),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return px.makeRotationFromQuaternion(e),this.setFromRotationMatrix(px,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return mx.setFromEuler(this),this.setFromQuaternion(mx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ps.DEFAULT_ORDER="XYZ";class Uv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SS=0;const gx=new re,Cr=new Jr,_a=new un,Tc=new re,qo=new re,MS=new re,ES=new Jr,xx=new re(1,0,0),vx=new re(0,1,0),_x=new re(0,0,1),yx={type:"added"},TS={type:"removed"},Nr={type:"childadded",child:null},Rd={type:"childremoved",child:null};class Hn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new re,i=new ps,s=new Jr,l=new re(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new ot}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Cr.setFromAxisAngle(e,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,i){return Cr.setFromAxisAngle(e,i),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(xx,e)}rotateY(e){return this.rotateOnAxis(vx,e)}rotateZ(e){return this.rotateOnAxis(_x,e)}translateOnAxis(e,i){return gx.copy(e).applyQuaternion(this.quaternion),this.position.add(gx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(xx,e)}translateY(e){return this.translateOnAxis(vx,e)}translateZ(e){return this.translateOnAxis(_x,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Tc.copy(e):Tc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(qo,Tc,this.up):_a.lookAt(Tc,qo,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(_a),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yx),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(TS),Rd.child=e,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yx),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,MS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,ES,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,y=m.length;h<y;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),y=d(e.images),_=d(e.shapes),g=d(e.skeletons),E=d(e.animations),w=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),y.length>0&&(s.images=y),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),w.length>0&&(s.nodes=w)}return s.object=l,s;function d(p){const m=[];for(const h in p){const y=p[h];delete y.metadata,m.push(y)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new re(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hr extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AS={type:"move"};class Cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const U of e.hand.values()){const M=i.getJointPose(U,s),b=this._getHandJoint(h,U);M!==null&&(b.matrix.fromArray(M.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=M.radius),b.visible=M!==null}const y=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=y.position.distanceTo(_.position),E=.02,w=.005;h.inputState.pinching&&g>E+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=E-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(AS)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Hr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Nd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class wt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Et.workingColorSpace){return this.r=e,this.g=i,this.b=s,Et.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Et.workingColorSpace){if(e=np(e,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Nd(d,c,e+1/3),this.g=Nd(d,c,e),this.b=Nd(d,c,e-1/3)}return Et.colorSpaceToWorking(this,l),this}setStyle(e,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:it("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const s=Lv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Et.workingToColorSpace(Fn.copy(this),e),Math.round(St(Fn.r*255,0,255))*65536+Math.round(St(Fn.g*255,0,255))*256+Math.round(St(Fn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Et.workingColorSpace){Et.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const y=(p+d)/2;if(p===d)m=0,h=0;else{const _=d-p;switch(h=y<=.5?_/(d+p):_/(2-d-p),d){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=y,e}getRGB(e,i=Et.workingColorSpace){return Et.workingToColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Si){Et.workingToColorSpace(Fn.copy(this),e);const i=Fn.r,s=Fn.g,l=Fn.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+i,ss.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ss),e.getHSL(Ac);const s=nl(ss.h,Ac.h,i),l=nl(ss.s,Ac.s,i),c=nl(ss.l,Ac.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new wt;wt.NAMES=Lv;class wS extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ps,this.environmentIntensity=1,this.environmentRotation=new ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new re,ya=new re,Dd=new re,ba=new re,Dr=new re,Ur=new re,bx=new re,Ud=new re,Ld=new re,Od=new re,Pd=new on,Id=new on,Bd=new on;class Oi{constructor(e=new re,i=new re,s=new re){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ui.subVectors(e,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ui.subVectors(l,i),ya.subVectors(s,i),Dd.subVectors(e,i);const d=Ui.dot(Ui),p=Ui.dot(ya),m=Ui.dot(Dd),h=ya.dot(ya),y=ya.dot(Dd),_=d*h-p*p;if(_===0)return c.set(0,0,0),null;const g=1/_,E=(h*m-p*y)*g,w=(d*y-p*m)*g;return c.set(1-E-w,w,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(e,i,s,l,c,d,p,m){return this.getBarycoord(e,i,s,l,ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ba.x),m.addScaledVector(d,ba.y),m.addScaledVector(p,ba.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Pd.setScalar(0),Id.setScalar(0),Bd.setScalar(0),Pd.fromBufferAttribute(e,i),Id.fromBufferAttribute(e,s),Bd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Pd,c.x),d.addScaledVector(Id,c.y),d.addScaledVector(Bd,c.z),d}static isFrontFacing(e,i,s,l){return Ui.subVectors(s,i),ya.subVectors(e,i),Ui.cross(ya).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Ui.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Oi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,p;Dr.subVectors(l,s),Ur.subVectors(c,s),Ud.subVectors(e,s);const m=Dr.dot(Ud),h=Ur.dot(Ud);if(m<=0&&h<=0)return i.copy(s);Ld.subVectors(e,l);const y=Dr.dot(Ld),_=Ur.dot(Ld);if(y>=0&&_<=y)return i.copy(l);const g=m*_-y*h;if(g<=0&&m>=0&&y<=0)return d=m/(m-y),i.copy(s).addScaledVector(Dr,d);Od.subVectors(e,c);const E=Dr.dot(Od),w=Ur.dot(Od);if(w>=0&&E<=w)return i.copy(c);const U=E*h-m*w;if(U<=0&&h>=0&&w<=0)return p=h/(h-w),i.copy(s).addScaledVector(Ur,p);const M=y*w-E*_;if(M<=0&&_-y>=0&&E-w>=0)return bx.subVectors(c,l),p=(_-y)/(_-y+(E-w)),i.copy(l).addScaledVector(bx,p);const b=1/(M+U+g);return d=U*b,p=g*b,i.copy(s).addScaledVector(Dr,d).addScaledVector(Ur,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cl{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Li):Li.fromBufferAttribute(c,d),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),Rc.subVectors(this.max,Yo),Lr.subVectors(e.a,Yo),Or.subVectors(e.b,Yo),Pr.subVectors(e.c,Yo),rs.subVectors(Or,Lr),os.subVectors(Pr,Or),Ps.subVectors(Lr,Pr);let i=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Ps.z,Ps.y,rs.z,0,-rs.x,os.z,0,-os.x,Ps.z,0,-Ps.x,-rs.y,rs.x,0,-os.y,os.x,0,-Ps.y,Ps.x,0];return!Fd(i,Lr,Or,Pr,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Fd(i,Lr,Or,Pr,Rc))?!1:(Cc.crossVectors(rs,os),i=[Cc.x,Cc.y,Cc.z],Fd(i,Lr,Or,Pr,Rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sa=[new re,new re,new re,new re,new re,new re,new re,new re],Li=new re,wc=new cl,Lr=new re,Or=new re,Pr=new re,rs=new re,os=new re,Ps=new re,Yo=new re,Rc=new re,Cc=new re,Is=new re;function Fd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Is.fromArray(r,c);const p=l.x*Math.abs(Is.x)+l.y*Math.abs(Is.y)+l.z*Math.abs(Is.z),m=e.dot(Is),h=i.dot(Is),y=s.dot(Is);if(Math.max(-Math.max(m,h,y),Math.min(m,h,y))>p)return!1}return!0}const _n=new re,Nc=new Tt;let RS=0;class Ki extends Ws{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=rx,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Nc.fromBufferAttribute(this,i),Nc.applyMatrix3(e),this.setXY(i,Nc.x,Nc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Gr(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Gr(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Gr(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Gr(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Gr(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ov extends Ki{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Pv extends Ki{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ei extends Ki{constructor(e,i,s){super(new Float32Array(e),i,s)}}const CS=new cl,Zo=new re,zd=new re;class ap{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):CS.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(zd)),this.expandByPoint(Zo.copy(e.center).sub(zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let NS=0;const bi=new un,Gd=new Hn,Ir=new re,fi=new cl,Ko=new cl,An=new re;class $i extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yb(e)?Pv:Ov)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ot().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,s){return bi.makeTranslation(e,i,s),this.applyMatrix4(bi),this}scale(e,i,s){return bi.makeScale(e,i,s),this.applyMatrix4(bi),this}lookAt(e){return Gd.lookAt(e),Gd.updateMatrix(),this.applyMatrix4(Gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ei(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ap);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Ko.setFromBufferAttribute(p),this.morphTargetsRelative?(An.addVectors(fi.min,Ko.min),fi.expandByPoint(An),An.addVectors(fi.max,Ko.max),fi.expandByPoint(An)):(fi.expandByPoint(Ko.min),fi.expandByPoint(Ko.max))}fi.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)An.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(An));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,y=p.count;h<y;h++)An.fromBufferAttribute(p,h),m&&(Ir.fromBufferAttribute(e,h),An.add(Ir)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Ki(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new re,m[T]=new re;const h=new re,y=new re,_=new re,g=new Tt,E=new Tt,w=new Tt,U=new re,M=new re;function b(T,L,X){h.fromBufferAttribute(s,T),y.fromBufferAttribute(s,L),_.fromBufferAttribute(s,X),g.fromBufferAttribute(c,T),E.fromBufferAttribute(c,L),w.fromBufferAttribute(c,X),y.sub(h),_.sub(h),E.sub(g),w.sub(g);const V=1/(E.x*w.y-w.x*E.y);isFinite(V)&&(U.copy(y).multiplyScalar(w.y).addScaledVector(_,-E.y).multiplyScalar(V),M.copy(_).multiplyScalar(E.x).addScaledVector(y,-w.x).multiplyScalar(V),p[T].add(U),p[L].add(U),p[X].add(U),m[T].add(M),m[L].add(M),m[X].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let T=0,L=z.length;T<L;++T){const X=z[T],V=X.start,q=X.count;for(let ce=V,fe=V+q;ce<fe;ce+=3)b(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const B=new re,A=new re,F=new re,O=new re;function P(T){F.fromBufferAttribute(l,T),O.copy(F);const L=p[T];B.copy(L),B.sub(F.multiplyScalar(F.dot(L))).normalize(),A.crossVectors(O,L);const V=A.dot(m[T])<0?-1:1;d.setXYZW(T,B.x,B.y,B.z,V)}for(let T=0,L=z.length;T<L;++T){const X=z[T],V=X.start,q=X.count;for(let ce=V,fe=V+q;ce<fe;ce+=3)P(e.getX(ce+0)),P(e.getX(ce+1)),P(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ki(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const l=new re,c=new re,d=new re,p=new re,m=new re,h=new re,y=new re,_=new re;if(e)for(let g=0,E=e.count;g<E;g+=3){const w=e.getX(g+0),U=e.getX(g+1),M=e.getX(g+2);l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,U),d.fromBufferAttribute(i,M),y.subVectors(d,c),_.subVectors(l,c),y.cross(_),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,U),h.fromBufferAttribute(s,M),p.add(y),m.add(y),h.add(y),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(U,m.x,m.y,m.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),y.subVectors(d,c),_.subVectors(l,c),y.cross(_),s.setXYZ(g+0,y.x,y.y,y.z),s.setXYZ(g+1,y.x,y.y,y.z),s.setXYZ(g+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(p,m){const h=p.array,y=p.itemSize,_=p.normalized,g=new h.constructor(m.length*y);let E=0,w=0;for(let U=0,M=m.length;U<M;U++){p.isInterleavedBufferAttribute?E=m[U]*p.data.stride+p.offset:E=m[U]*y;for(let b=0;b<y;b++)g[w++]=h[E++]}return new Ki(g,y,_)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $i,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let y=0,_=h.length;y<_;y++){const g=h[y],E=e(g,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],y=[];for(let _=0,g=h.length;_<g;_++){const E=h[_];y.push(E.toJSON(e.data))}y.length>0&&(l[m]=y,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const y=l[h];this.setAttribute(h,y.clone(i))}const c=e.morphAttributes;for(const h in c){const y=[],_=c[h];for(let g=0,E=_.length;g<E;g++)y.push(_[g].clone(i));this.morphAttributes[h]=y}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,y=d.length;h<y;h++){const _=d[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let DS=0;class ul extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=kr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==eh&&(s.blendSrc=this.blendSrc),this.blendDst!==th&&(s.blendDst=this.blendDst),this.blendEquation!==Gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new wt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Tt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ma=new re,Hd=new re,Dc=new re,ls=new re,Vd=new re,Uc=new re,kd=new re;class US{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Hd.copy(e).add(i).multiplyScalar(.5),Dc.copy(i).sub(e).normalize(),ls.copy(this.origin).sub(Hd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Dc),p=ls.dot(this.direction),m=-ls.dot(Dc),h=ls.lengthSq(),y=Math.abs(1-d*d);let _,g,E,w;if(y>0)if(_=d*m-p,g=d*p-m,w=c*y,_>=0)if(g>=-w)if(g<=w){const U=1/y;_*=U,g*=U,E=_*(_+d*g+2*p)+g*(d*_+g+2*m)+h}else g=c,_=Math.max(0,-(d*g+p)),E=-_*_+g*(g+2*m)+h;else g=-c,_=Math.max(0,-(d*g+p)),E=-_*_+g*(g+2*m)+h;else g<=-w?(_=Math.max(0,-(-d*c+p)),g=_>0?-c:Math.min(Math.max(-c,-m),c),E=-_*_+g*(g+2*m)+h):g<=w?(_=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+h):(_=Math.max(0,-(d*c+p)),g=_>0?c:Math.min(Math.max(-c,-m),c),E=-_*_+g*(g+2*m)+h);else g=d>0?-c:c,_=Math.max(0,-(d*g+p)),E=-_*_+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Hd).addScaledVector(Dc,g),E}intersectSphere(e,i){Ma.subVectors(e.center,this.origin);const s=Ma.dot(this.direction),l=Ma.dot(Ma)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,p,m;const h=1/this.direction.x,y=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),y>=0?(c=(e.min.y-g.y)*y,d=(e.max.y-g.y)*y):(c=(e.max.y-g.y)*y,d=(e.min.y-g.y)*y),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),_>=0?(p=(e.min.z-g.z)*_,m=(e.max.z-g.z)*_):(p=(e.max.z-g.z)*_,m=(e.min.z-g.z)*_),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ma)!==null}intersectTriangle(e,i,s,l,c){Vd.subVectors(i,e),Uc.subVectors(s,e),kd.crossVectors(Vd,Uc);let d=this.direction.dot(kd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ls.subVectors(this.origin,e);const m=p*this.direction.dot(Uc.crossVectors(ls,Uc));if(m<0)return null;const h=p*this.direction.dot(Vd.cross(ls));if(h<0||m+h>d)return null;const y=-p*ls.dot(kd);return y<0?null:this.at(y/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sp extends ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sx=new un,Bs=new US,Lc=new ap,Mx=new re,Oc=new re,Pc=new re,Ic=new re,Xd=new re,Bc=new re,Ex=new re,Fc=new re;class Sn extends Hn{constructor(e=new $i,i=new sp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Bc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const y=p[m],_=c[m];y!==0&&(Xd.fromBufferAttribute(_,e),d?Bc.addScaledVector(Xd,y):Bc.addScaledVector(Xd.sub(i),y))}i.add(Bc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(c),Bs.copy(e.ray).recast(e.near),!(Lc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Lc,Mx)===null||Bs.origin.distanceToSquared(Mx)>(e.far-e.near)**2))&&(Sx.copy(c).invert(),Bs.copy(e.ray).applyMatrix4(Sx),!(s.boundingBox!==null&&Bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Bs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,y=c.attributes.uv1,_=c.attributes.normal,g=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(d))for(let w=0,U=g.length;w<U;w++){const M=g[w],b=d[M.materialIndex],z=Math.max(M.start,E.start),B=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let A=z,F=B;A<F;A+=3){const O=p.getX(A),P=p.getX(A+1),T=p.getX(A+2);l=zc(this,b,e,s,h,y,_,O,P,T),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),U=Math.min(p.count,E.start+E.count);for(let M=w,b=U;M<b;M+=3){const z=p.getX(M),B=p.getX(M+1),A=p.getX(M+2);l=zc(this,d,e,s,h,y,_,z,B,A),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let w=0,U=g.length;w<U;w++){const M=g[w],b=d[M.materialIndex],z=Math.max(M.start,E.start),B=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let A=z,F=B;A<F;A+=3){const O=A,P=A+1,T=A+2;l=zc(this,b,e,s,h,y,_,O,P,T),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),U=Math.min(m.count,E.start+E.count);for(let M=w,b=U;M<b;M+=3){const z=M,B=M+1,A=M+2;l=zc(this,d,e,s,h,y,_,z,B,A),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function LS(r,e,i,s,l,c,d,p){let m;if(e.side===Jn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,e.side===hs,p),m===null)return null;Fc.copy(p),Fc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Fc);return h<i.near||h>i.far?null:{distance:h,point:Fc.clone(),object:r}}function zc(r,e,i,s,l,c,d,p,m,h){r.getVertexPosition(p,Oc),r.getVertexPosition(m,Pc),r.getVertexPosition(h,Ic);const y=LS(r,e,i,s,Oc,Pc,Ic,Ex);if(y){const _=new re;Oi.getBarycoord(Ex,Oc,Pc,Ic,_),l&&(y.uv=Oi.getInterpolatedAttribute(l,p,m,h,_,new Tt)),c&&(y.uv1=Oi.getInterpolatedAttribute(c,p,m,h,_,new Tt)),d&&(y.normal=Oi.getInterpolatedAttribute(d,p,m,h,_,new re),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new re,materialIndex:0};Oi.getNormal(Oc,Pc,Ic,g.normal),y.face=g,y.barycoord=_}return y}class OS extends Gn{constructor(e=null,i=1,s=1,l,c,d,p,m,h=On,y=On,_,g){super(null,d,p,m,h,y,l,c,_,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jd=new re,PS=new re,IS=new ot;class zs{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=jd.subVectors(s,i).cross(PS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(jd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||IS.getNormalMatrix(e),l=this.coplanarPoint(jd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new ap,BS=new Tt(.5,.5),Gc=new re;class rp{constructor(e=new zs,i=new zs,s=new zs,l=new zs,c=new zs,d=new zs){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=qi,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],y=c[4],_=c[5],g=c[6],E=c[7],w=c[8],U=c[9],M=c[10],b=c[11],z=c[12],B=c[13],A=c[14],F=c[15];if(l[0].setComponents(h-d,E-y,b-w,F-z).normalize(),l[1].setComponents(h+d,E+y,b+w,F+z).normalize(),l[2].setComponents(h+p,E+_,b+U,F+B).normalize(),l[3].setComponents(h-p,E-_,b-U,F-B).normalize(),s)l[4].setComponents(m,g,M,A).normalize(),l[5].setComponents(h-m,E-g,b-M,F-A).normalize();else if(l[4].setComponents(h-m,E-g,b-M,F-A).normalize(),i===qi)l[5].setComponents(h+m,E+g,b+M,F+A).normalize();else if(i===sl)l[5].setComponents(m,g,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);const i=BS.distanceTo(e.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Gc.x=l.normal.x>0?e.max.x:e.min.x,Gc.y=l.normal.y>0?e.max.y:e.min.y,Gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Iv extends Gn{constructor(e=[],i=ks,s,l,c,d,p,m,h,y){super(e,i,s,l,c,d,p,m,h,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FS extends Gn{constructor(e,i,s,l,c,d,p,m,h){super(e,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zr extends Gn{constructor(e,i,s=Qi,l,c,d,p=On,m=On,h,y=Na,_=1){if(y!==Na&&y!==Vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:_};super(g,l,c,d,p,m,y,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zS extends Zr{constructor(e,i=Qi,s=ks,l,c,d=On,p=On,m,h=Na){const y={width:e,height:e,depth:1},_=[y,y,y,y,y,y];super(e,e,i,s,l,c,d,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bv extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ji extends $i{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],y=[],_=[];let g=0,E=0;w("z","y","x",-1,-1,s,i,e,d,c,0),w("z","y","x",1,-1,s,i,-e,d,c,1),w("x","z","y",1,1,e,s,i,l,d,2),w("x","z","y",1,-1,e,s,-i,l,d,3),w("x","y","z",1,-1,e,i,s,l,c,4),w("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ei(h,3)),this.setAttribute("normal",new Ei(y,3)),this.setAttribute("uv",new Ei(_,2));function w(U,M,b,z,B,A,F,O,P,T,L){const X=A/P,V=F/T,q=A/2,ce=F/2,fe=O/2,J=P+1,I=T+1;let G=0,ee=0;const ge=new re;for(let de=0;de<I;de++){const D=de*V-ce;for(let K=0;K<J;K++){const Se=K*X-q;ge[U]=Se*z,ge[M]=D*B,ge[b]=fe,h.push(ge.x,ge.y,ge.z),ge[U]=0,ge[M]=0,ge[b]=O>0?1:-1,y.push(ge.x,ge.y,ge.z),_.push(K/P),_.push(1-de/T),G+=1}}for(let de=0;de<T;de++)for(let D=0;D<P;D++){const K=g+D+J*de,Se=g+D+J*(de+1),we=g+(D+1)+J*(de+1),De=g+(D+1)+J*de;m.push(K,Se,De),m.push(Se,we,De),ee+=6}p.addGroup(E,ee,L),E+=ee,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vr extends $i{constructor(e=1,i=1,s=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const y=[],_=[],g=[],E=[];let w=0;const U=[],M=s/2;let b=0;z(),d===!1&&(e>0&&B(!0),i>0&&B(!1)),this.setIndex(y),this.setAttribute("position",new Ei(_,3)),this.setAttribute("normal",new Ei(g,3)),this.setAttribute("uv",new Ei(E,2));function z(){const A=new re,F=new re;let O=0;const P=(i-e)/s;for(let T=0;T<=c;T++){const L=[],X=T/c,V=X*(i-e)+e;for(let q=0;q<=l;q++){const ce=q/l,fe=ce*m+p,J=Math.sin(fe),I=Math.cos(fe);F.x=V*J,F.y=-X*s+M,F.z=V*I,_.push(F.x,F.y,F.z),A.set(J,P,I).normalize(),g.push(A.x,A.y,A.z),E.push(ce,1-X),L.push(w++)}U.push(L)}for(let T=0;T<l;T++)for(let L=0;L<c;L++){const X=U[L][T],V=U[L+1][T],q=U[L+1][T+1],ce=U[L][T+1];(e>0||L!==0)&&(y.push(X,V,ce),O+=3),(i>0||L!==c-1)&&(y.push(V,q,ce),O+=3)}h.addGroup(b,O,0),b+=O}function B(A){const F=w,O=new Tt,P=new re;let T=0;const L=A===!0?e:i,X=A===!0?1:-1;for(let q=1;q<=l;q++)_.push(0,M*X,0),g.push(0,X,0),E.push(.5,.5),w++;const V=w;for(let q=0;q<=l;q++){const fe=q/l*m+p,J=Math.cos(fe),I=Math.sin(fe);P.x=L*I,P.y=M*X,P.z=L*J,_.push(P.x,P.y,P.z),g.push(0,X,0),O.x=J*.5+.5,O.y=I*.5*X+.5,E.push(O.x,O.y),w++}for(let q=0;q<l;q++){const ce=F+q,fe=V+q;A===!0?y.push(fe,fe+1,ce):y.push(fe+1,fe,ce),T+=3}h.addGroup(b,T,A===!0?1:2),b+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fl extends $i{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,y=m+1,_=e/p,g=i/m,E=[],w=[],U=[],M=[];for(let b=0;b<y;b++){const z=b*g-d;for(let B=0;B<h;B++){const A=B*_-c;w.push(A,-z,0),U.push(0,0,1),M.push(B/p),M.push(1-b/m)}}for(let b=0;b<m;b++)for(let z=0;z<p;z++){const B=z+h*b,A=z+h*(b+1),F=z+1+h*(b+1),O=z+1+h*b;E.push(B,A,O),E.push(A,F,O)}this.setIndex(E),this.setAttribute("position",new Ei(w,3)),this.setAttribute("normal",new Ei(U,3)),this.setAttribute("uv",new Ei(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Kr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Tx(l))l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Tx(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Xn(r){const e={};for(let i=0;i<r.length;i++){const s=Kr(r[i]);for(const l in s)e[l]=s[l]}return e}function Tx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function GS(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Fv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const HS={clone:Kr,merge:Xn};var VS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VS,this.fragmentShader=kS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=GS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new wt().setHex(l.value);break;case"v2":this.uniforms[s].value=new Tt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new re().fromArray(l.value);break;case"v4":this.uniforms[s].value=new on().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ot().fromArray(l.value);break;case"m4":this.uniforms[s].value=new un().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class XS extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ea extends ul{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jS extends ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WS extends ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zv extends Hn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Wd=new un,Ax=new re,wx=new re;class qS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Ax.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ax),wx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(wx),i.updateMatrixWorld(),Wd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===sl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hc=new re,Vc=new Jr,Vi=new re;class Gv extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hc,Vc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Hc,Vc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cs=new re,Rx=new Tt,Cx=new Tt;class Mi extends Gv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=rl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,i){return this.getViewBounds(e,Rx,Cx),i.subVectors(Cx,Rx)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(tl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class op extends Gv{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=y*this.view.offsetY,m=p-y*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class YS extends qS{constructor(){super(new op(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qd extends zv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.shadow=new YS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class ZS extends zv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Br=-90,Fr=1;class KS extends Hn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(Br,Fr,e,i);l.layers=this.layers,this.add(l);const c=new Mi(Br,Fr,e,i);c.layers=this.layers,this.add(c);const d=new Mi(Br,Fr,e,i);d.layers=this.layers,this.add(d);const p=new Mi(Br,Fr,e,i);p.layers=this.layers,this.add(p);const m=new Mi(Br,Fr,e,i);m.layers=this.layers,this.add(m);const h=new Mi(Br,Fr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===sl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,y]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=U,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,y),e.setRenderTarget(_,g,E),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class QS extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dp=class dp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};dp.prototype.isMatrix2=!0;let Nx=dp;function Dx(r,e,i,s){const l=JS(s);switch(i){case wv:return r*e;case Cv:return r*e/l.components*l.byteLength;case Qh:return r*e/l.components*l.byteLength;case Xs:return r*e*2/l.components*l.byteLength;case Jh:return r*e*2/l.components*l.byteLength;case Rv:return r*e*3/l.components*l.byteLength;case Pi:return r*e*4/l.components*l.byteLength;case $h:return r*e*4/l.components*l.byteLength;case Wc:case qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yc:case Zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dh:case ph:return Math.max(r,16)*Math.max(e,8)/4;case fh:case hh:return Math.max(r,8)*Math.max(e,8)/2;case mh:case gh:case vh:case _h:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xh:case Jc:case yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ph:case Ih:case Bh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Fh:case zh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case $c:case Gh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JS(r){switch(r){case di:case Mv:return{byteLength:1,components:1};case il:case Ev:case Ca:return{byteLength:2,components:1};case Zh:case Kh:return{byteLength:2,components:4};case Qi:case Yh:case Wi:return{byteLength:4,components:1};case Tv:case Av:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hv(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function $S(r){const e=new WeakMap;function i(p,m){const h=p.array,y=p.usage,_=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,y),p.onUploadCallback();let E;if(h instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=r.SHORT;else if(h instanceof Uint32Array)E=r.UNSIGNED_INT;else if(h instanceof Int32Array)E=r.INT;else if(h instanceof Int8Array)E=r.BYTE;else if(h instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,m,h){const y=m.array,_=m.updateRanges;if(r.bindBuffer(h,p),_.length===0)r.bufferSubData(h,0,y);else{_.sort((E,w)=>E.start-w.start);let g=0;for(let E=1;E<_.length;E++){const w=_[g],U=_[E];U.start<=w.start+w.count+1?w.count=Math.max(w.count,U.start+U.count-w.start):(++g,_[g]=U)}_.length=g+1;for(let E=0,w=_.length;E<w;E++){const U=_[E];r.bufferSubData(h,U.start*y.BYTES_PER_ELEMENT,y,U.start,U.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const y=e.get(p);(!y||y.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var eM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,MM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,EM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NM="gl_FragColor = linearToOutputTexel( gl_FragColor );",DM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,WM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$M=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,t1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,i1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,M1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,E1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,N1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,F1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,z1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,V1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_E=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:eM,alphahash_pars_fragment:tM,alphamap_fragment:nM,alphamap_pars_fragment:iM,alphatest_fragment:aM,alphatest_pars_fragment:sM,aomap_fragment:rM,aomap_pars_fragment:oM,batching_pars_vertex:lM,batching_vertex:cM,begin_vertex:uM,beginnormal_vertex:fM,bsdfs:dM,iridescence_fragment:hM,bumpmap_pars_fragment:pM,clipping_planes_fragment:mM,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:xM,clipping_planes_vertex:vM,color_fragment:_M,color_pars_fragment:yM,color_pars_vertex:bM,color_vertex:SM,common:MM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:TM,displacementmap_pars_vertex:AM,displacementmap_vertex:wM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,colorspace_fragment:NM,colorspace_pars_fragment:DM,envmap_fragment:UM,envmap_common_pars_fragment:LM,envmap_pars_fragment:OM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:WM,envmap_vertex:IM,fog_vertex:BM,fog_pars_vertex:FM,fog_fragment:zM,fog_pars_fragment:GM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:VM,lights_lambert_fragment:kM,lights_lambert_pars_fragment:XM,lights_pars_begin:jM,lights_toon_fragment:qM,lights_toon_pars_fragment:YM,lights_phong_fragment:ZM,lights_phong_pars_fragment:KM,lights_physical_fragment:QM,lights_physical_pars_fragment:JM,lights_fragment_begin:$M,lights_fragment_maps:e1,lights_fragment_end:t1,lightprobes_pars_fragment:n1,logdepthbuf_fragment:i1,logdepthbuf_pars_fragment:a1,logdepthbuf_pars_vertex:s1,logdepthbuf_vertex:r1,map_fragment:o1,map_pars_fragment:l1,map_particle_fragment:c1,map_particle_pars_fragment:u1,metalnessmap_fragment:f1,metalnessmap_pars_fragment:d1,morphinstance_vertex:h1,morphcolor_vertex:p1,morphnormal_vertex:m1,morphtarget_pars_vertex:g1,morphtarget_vertex:x1,normal_fragment_begin:v1,normal_fragment_maps:_1,normal_pars_fragment:y1,normal_pars_vertex:b1,normal_vertex:S1,normalmap_pars_fragment:M1,clearcoat_normal_fragment_begin:E1,clearcoat_normal_fragment_maps:T1,clearcoat_pars_fragment:A1,iridescence_pars_fragment:w1,opaque_fragment:R1,packing:C1,premultiplied_alpha_fragment:N1,project_vertex:D1,dithering_fragment:U1,dithering_pars_fragment:L1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:P1,shadowmap_pars_fragment:I1,shadowmap_pars_vertex:B1,shadowmap_vertex:F1,shadowmask_pars_fragment:z1,skinbase_vertex:G1,skinning_pars_vertex:H1,skinning_vertex:V1,skinnormal_vertex:k1,specularmap_fragment:X1,specularmap_pars_fragment:j1,tonemapping_fragment:W1,tonemapping_pars_fragment:q1,transmission_fragment:Y1,transmission_pars_fragment:Z1,uv_pars_fragment:K1,uv_pars_vertex:Q1,uv_vertex:J1,worldpos_vertex:$1,background_vert:eE,background_frag:tE,backgroundCube_vert:nE,backgroundCube_frag:iE,cube_vert:aE,cube_frag:sE,depth_vert:rE,depth_frag:oE,distance_vert:lE,distance_frag:cE,equirect_vert:uE,equirect_frag:fE,linedashed_vert:dE,linedashed_frag:hE,meshbasic_vert:pE,meshbasic_frag:mE,meshlambert_vert:gE,meshlambert_frag:xE,meshmatcap_vert:vE,meshmatcap_frag:_E,meshnormal_vert:yE,meshnormal_frag:bE,meshphong_vert:SE,meshphong_frag:ME,meshphysical_vert:EE,meshphysical_frag:TE,meshtoon_vert:AE,meshtoon_frag:wE,points_vert:RE,points_frag:CE,shadow_vert:NE,shadow_frag:DE,sprite_vert:UE,sprite_frag:LE},Ie={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new re},probesMax:{value:new re},probesResolution:{value:new re}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Xi={basic:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Xn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Xn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Xn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Xn([Ie.points,Ie.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Xn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Xn([Ie.common,Ie.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Xn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Xn([Ie.sprite,Ie.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Xn([Ie.common,Ie.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Xn([Ie.lights,Ie.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Xi.physical={uniforms:Xn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const kc={r:0,b:0,g:0},OE=new un,Vv=new ot;Vv.set(-1,0,0,0,1,0,0,0,1);function PE(r,e,i,s,l,c){const d=new wt(0);let p=l===!0?0:1,m,h,y=null,_=0,g=null;function E(z){let B=z.isScene===!0?z.background:null;if(B&&B.isTexture){const A=z.backgroundBlurriness>0;B=e.get(B,A)}return B}function w(z){let B=!1;const A=E(z);A===null?M(d,p):A&&A.isColor&&(M(A,1),B=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function U(z,B){const A=E(B);A&&(A.isCubeTexture||A.mapping===ou)?(h===void 0&&(h=new Sn(new ji(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Kr(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,O,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(OE.makeRotationFromEuler(B.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Vv),h.material.toneMapped=Et.getTransfer(A.colorSpace)!==Vt,(y!==A||_!==A.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,y=A,_=A.version,g=r.toneMapping),h.layers.enableAll(),z.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new Sn(new fl(2,2),new Ji({name:"BackgroundMaterial",uniforms:Kr(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=Et.getTransfer(A.colorSpace)!==Vt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(y!==A||_!==A.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,y=A,_=A.version,g=r.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null))}function M(z,B){z.getRGB(kc,Fv(r)),i.buffers.color.setClear(kc.r,kc.g,kc.b,B,c)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,B=1){d.set(z),p=B,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,M(d,p)},render:w,addToRenderList:U,dispose:b}}function IE(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(V,q,ce,fe,J){let I=!1;const G=_(V,fe,ce,q);c!==G&&(c=G,h(c.object)),I=E(V,fe,ce,J),I&&w(V,fe,ce,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(I||d)&&(d=!1,A(V,q,ce,fe),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return r.createVertexArray()}function h(V){return r.bindVertexArray(V)}function y(V){return r.deleteVertexArray(V)}function _(V,q,ce,fe){const J=fe.wireframe===!0;let I=s[q.id];I===void 0&&(I={},s[q.id]=I);const G=V.isInstancedMesh===!0?V.id:0;let ee=I[G];ee===void 0&&(ee={},I[G]=ee);let ge=ee[ce.id];ge===void 0&&(ge={},ee[ce.id]=ge);let de=ge[J];return de===void 0&&(de=g(m()),ge[J]=de),de}function g(V){const q=[],ce=[],fe=[];for(let J=0;J<i;J++)q[J]=0,ce[J]=0,fe[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ce,attributeDivisors:fe,object:V,attributes:{},index:null}}function E(V,q,ce,fe){const J=c.attributes,I=q.attributes;let G=0;const ee=ce.getAttributes();for(const ge in ee)if(ee[ge].location>=0){const D=J[ge];let K=I[ge];if(K===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),D===void 0||D.attribute!==K||K&&D.data!==K.data)return!0;G++}return c.attributesNum!==G||c.index!==fe}function w(V,q,ce,fe){const J={},I=q.attributes;let G=0;const ee=ce.getAttributes();for(const ge in ee)if(ee[ge].location>=0){let D=I[ge];D===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(D=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(D=V.instanceColor));const K={};K.attribute=D,D&&D.data&&(K.data=D.data),J[ge]=K,G++}c.attributes=J,c.attributesNum=G,c.index=fe}function U(){const V=c.newAttributes;for(let q=0,ce=V.length;q<ce;q++)V[q]=0}function M(V){b(V,0)}function b(V,q){const ce=c.newAttributes,fe=c.enabledAttributes,J=c.attributeDivisors;ce[V]=1,fe[V]===0&&(r.enableVertexAttribArray(V),fe[V]=1),J[V]!==q&&(r.vertexAttribDivisor(V,q),J[V]=q)}function z(){const V=c.newAttributes,q=c.enabledAttributes;for(let ce=0,fe=q.length;ce<fe;ce++)q[ce]!==V[ce]&&(r.disableVertexAttribArray(ce),q[ce]=0)}function B(V,q,ce,fe,J,I,G){G===!0?r.vertexAttribIPointer(V,q,ce,J,I):r.vertexAttribPointer(V,q,ce,fe,J,I)}function A(V,q,ce,fe){U();const J=fe.attributes,I=ce.getAttributes(),G=q.defaultAttributeValues;for(const ee in I){const ge=I[ee];if(ge.location>=0){let de=J[ee];if(de===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(de=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(de=V.instanceColor)),de!==void 0){const D=de.normalized,K=de.itemSize,Se=e.get(de);if(Se===void 0)continue;const we=Se.buffer,De=Se.type,te=Se.bytesPerElement,be=De===r.INT||De===r.UNSIGNED_INT||de.gpuType===Yh;if(de.isInterleavedBufferAttribute){const Me=de.data,Be=Me.stride,nt=de.offset;if(Me.isInstancedInterleavedBuffer){for(let Ke=0;Ke<ge.locationSize;Ke++)b(ge.location+Ke,Me.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ke=0;Ke<ge.locationSize;Ke++)M(ge.location+Ke);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Ke=0;Ke<ge.locationSize;Ke++)B(ge.location+Ke,K/ge.locationSize,De,D,Be*te,(nt+K/ge.locationSize*Ke)*te,be)}else{if(de.isInstancedBufferAttribute){for(let Me=0;Me<ge.locationSize;Me++)b(ge.location+Me,de.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Me=0;Me<ge.locationSize;Me++)M(ge.location+Me);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Me=0;Me<ge.locationSize;Me++)B(ge.location+Me,K/ge.locationSize,De,D,K*te,K/ge.locationSize*Me*te,be)}}else if(G!==void 0){const D=G[ee];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(ge.location,D);break;case 3:r.vertexAttrib3fv(ge.location,D);break;case 4:r.vertexAttrib4fv(ge.location,D);break;default:r.vertexAttrib1fv(ge.location,D)}}}}z()}function F(){L();for(const V in s){const q=s[V];for(const ce in q){const fe=q[ce];for(const J in fe){const I=fe[J];for(const G in I)y(I[G].object),delete I[G];delete fe[J]}}delete s[V]}}function O(V){if(s[V.id]===void 0)return;const q=s[V.id];for(const ce in q){const fe=q[ce];for(const J in fe){const I=fe[J];for(const G in I)y(I[G].object),delete I[G];delete fe[J]}}delete s[V.id]}function P(V){for(const q in s){const ce=s[q];for(const fe in ce){const J=ce[fe];if(J[V.id]===void 0)continue;const I=J[V.id];for(const G in I)y(I[G].object),delete I[G];delete J[V.id]}}}function T(V){for(const q in s){const ce=s[q],fe=V.isInstancedMesh===!0?V.id:0,J=ce[fe];if(J!==void 0){for(const I in J){const G=J[I];for(const ee in G)y(G[ee].object),delete G[ee];delete J[I]}delete ce[fe],Object.keys(ce).length===0&&delete s[q]}}}function L(){X(),d=!0,c!==l&&(c=l,h(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:X,dispose:F,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:P,initAttributes:U,enableAttribute:M,disableUnusedAttributes:z}}function BE(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,y){y!==0&&(r.drawArraysInstanced(s,m,h,y),i.update(h,s,y))}function p(m,h,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,y);let g=0;for(let E=0;E<y;E++)g+=h[E];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function FE(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Pi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(P){const T=P===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==di&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Wi&&!T)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const y=m(h);y!==h&&(it("WebGLRenderer:",h,"not supported, using",y,"instead."),h=y);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),B=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:w,maxTextureSize:U,maxCubemapSize:M,maxAttributes:b,maxVertexUniforms:z,maxVaryings:B,maxFragmentUniforms:A,maxSamples:F,samples:O}}function zE(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new zs,p=new ot,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const E=_.length!==0||g||s!==0||l;return l=g,s=_.length,E},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=y(_,g,0)},this.setState=function(_,g,E){const w=_.clippingPlanes,U=_.clipIntersection,M=_.clipShadows,b=r.get(_);if(!l||w===null||w.length===0||c&&!M)c?y(null):h();else{const z=c?0:s,B=z*4;let A=b.clippingState||null;m.value=A,A=y(w,g,B,E);for(let F=0;F!==B;++F)A[F]=i[F];b.clippingState=A,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=z}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function y(_,g,E,w){const U=_!==null?_.length:0;let M=null;if(U!==0){if(M=m.value,w!==!0||M===null){const b=E+U*4,z=g.matrixWorldInverse;p.getNormalMatrix(z),(M===null||M.length<b)&&(M=new Float32Array(b));for(let B=0,A=E;B!==U;++B,A+=4)d.copy(_[B]).applyMatrix4(z,p),d.normal.toArray(M,A),M[A+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=U,e.numIntersection=0,M}}const ds=4,Ux=[.125,.215,.35,.446,.526,.582],Hs=20,GE=256,Qo=new op,Lx=new wt;let Yd=null,Zd=0,Kd=0,Qd=!1;const HE=new re;class Ox{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=HE}=c;Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ix(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yd,Zd,Kd),this._renderer.xr.enabled=Qd,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ks||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ca,format:Pi,colorSpace:eu,depthBuffer:!1},l=Px(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Px(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=VE(c)),this._blurMaterial=XE(c,e,i),this._ggxMaterial=kE(c,e,i)}return l}_compileMaterial(e){const i=new Sn(new $i,e);this._renderer.compile(i,Qo)}_sceneToCubeUV(e,i,s,l,c){const m=new Mi(90,1,i,s),h=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,E=_.toneMapping;_.getClearColor(Lx),_.toneMapping=Yi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new ji,new sp({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,M=U.material;let b=!1;const z=e.background;z?z.isColor&&(M.color.copy(z),e.background=null,b=!0):(M.color.copy(Lx),b=!0);for(let B=0;B<6;B++){const A=B%3;A===0?(m.up.set(0,h[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+y[B],c.y,c.z)):A===1?(m.up.set(0,0,h[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+y[B],c.z)):(m.up.set(0,h[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+y[B]));const F=this._cubeSize;zr(l,A*F,B>2?F:0,F,F),_.setRenderTarget(l),b&&_.render(U,m),_.render(e,m)}_.toneMapping=E,_.autoClear=g,e.background=z}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ks||e.mapping===Yr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ix());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;zr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Qo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),y=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-y*y),g=0+h*1.25,E=_*g,{_lodMax:w}=this,U=this._sizeLods[s],M=3*U*(s>w-ds?s-w+ds:0),b=4*(this._cubeSize-U);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=w-i,zr(c,M,b,3*U,2*U),l.setRenderTarget(c),l.render(p,Qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=w-s,zr(e,M,b,3*U,2*U),l.setRenderTarget(e),l.render(p,Qo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const y=3,_=this._lodMeshes[l];_.material=h;const g=h.uniforms,E=this._sizeLods[s]-1,w=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Hs-1),U=c/w,M=isFinite(c)?1+Math.floor(y*U):Hs;M>Hs&&it(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Hs}`);const b=[];let z=0;for(let P=0;P<Hs;++P){const T=P/U,L=Math.exp(-T*T/2);b.push(L),P===0?z+=L:P<M&&(z+=2*L)}for(let P=0;P<b.length;P++)b[P]=b[P]/z;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=b,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:B}=this;g.dTheta.value=w,g.mipInt.value=B-s;const A=this._sizeLods[l],F=3*A*(l>B-ds?l-B+ds:0),O=4*(this._cubeSize-A);zr(i,F,O,3*A,2*A),m.setRenderTarget(i),m.render(_,Qo)}}function VE(r){const e=[],i=[],s=[];let l=r;const c=r-ds+1+Ux.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>r-ds?m=Ux[d-r+ds-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),y=-h,_=1+h,g=[y,y,_,y,_,_,y,y,_,_,y,_],E=6,w=6,U=3,M=2,b=1,z=new Float32Array(U*w*E),B=new Float32Array(M*w*E),A=new Float32Array(b*w*E);for(let O=0;O<E;O++){const P=O%3*2/3-1,T=O>2?0:-1,L=[P,T,0,P+2/3,T,0,P+2/3,T+1,0,P,T,0,P+2/3,T+1,0,P,T+1,0];z.set(L,U*w*O),B.set(g,M*w*O);const X=[O,O,O,O,O,O];A.set(X,b*w*O)}const F=new $i;F.setAttribute("position",new Ki(z,U)),F.setAttribute("uv",new Ki(B,M)),F.setAttribute("faceIndex",new Ki(A,b)),s.push(new Sn(F,null)),l>ds&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Px(r,e,i){const s=new Zi(r,e,i);return s.texture.mapping=ou,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function kE(r,e,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function XE(r,e,i){const s=new Float32Array(Hs),l=new re(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Ix(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Bx(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class kv extends Zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Iv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ji(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:Kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:wa});c.uniforms.tEquirect.value=i;const d=new Sn(l,c),p=i.minFilter;return i.minFilter===fs&&(i.minFilter=zn),new KS(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function jE(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,E=!1){return g==null?null:E?d(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===bd||E===Sd)if(e.has(g)){const w=e.get(g).texture;return p(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const U=new kv(w.height);return U.fromEquirectangularTexture(r,g),e.set(g,U),g.addEventListener("dispose",h),p(U.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const E=g.mapping,w=E===bd||E===Sd,U=E===ks||E===Yr;if(w||U){let M=i.get(g);const b=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==b)return s===null&&(s=new Ox(r)),M=w?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const z=g.image;return w&&z&&z.height>0||U&&z&&m(z)?(s===null&&(s=new Ox(r)),M=w?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",y),M.texture):null}}}return g}function p(g,E){return E===bd?g.mapping=ks:E===Sd&&(g.mapping=Yr),g}function m(g){let E=0;const w=6;for(let U=0;U<w;U++)g[U]!==void 0&&E++;return E===w}function h(g){const E=g.target;E.removeEventListener("dispose",h);const w=e.get(E);w!==void 0&&(e.delete(E),w.dispose())}function y(g){const E=g.target;E.removeEventListener("dispose",y);const w=i.get(E);w!==void 0&&(i.delete(E),w.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function WE(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Xr("WebGLRenderer: "+s+" extension not supported."),l}}}function qE(r,e,i,s){const l={},c=new WeakMap;function d(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",d),delete l[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(_,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const E in g)e.update(g[E],r.ARRAY_BUFFER)}function h(_){const g=[],E=_.index,w=_.attributes.position;let U=0;if(w===void 0)return;if(E!==null){const z=E.array;U=E.version;for(let B=0,A=z.length;B<A;B+=3){const F=z[B+0],O=z[B+1],P=z[B+2];g.push(F,O,O,P,P,F)}}else{const z=w.array;U=w.version;for(let B=0,A=z.length/3-1;B<A;B+=3){const F=B+0,O=B+1,P=B+2;g.push(F,O,O,P,P,F)}}const M=new(w.count>=65535?Pv:Ov)(g,1);M.version=U;const b=c.get(_);b&&e.remove(b),c.set(_,M)}function y(_){const g=c.get(_);if(g){const E=_.index;E!==null&&g.version<E.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:y}}function YE(r,e,i){let s;function l(_){s=_}let c,d;function p(_){c=_.type,d=_.bytesPerElement}function m(_,g){r.drawElements(s,g,c,_*d),i.update(g,s,1)}function h(_,g,E){E!==0&&(r.drawElementsInstanced(s,g,c,_*d,E),i.update(g,s,E))}function y(_,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,_,0,E);let U=0;for(let M=0;M<E;M++)U+=g[M];i.update(U,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=y}function ZE(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Rt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function KE(r,e,i){const s=new WeakMap,l=new on;function c(d,p,m){const h=d.morphTargetInfluences,y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=y!==void 0?y.length:0;let g=s.get(p);if(g===void 0||g.count!==_){let X=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",X)};var E=X;g!==void 0&&g.texture.dispose();const w=p.morphAttributes.position!==void 0,U=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,b=p.morphAttributes.position||[],z=p.morphAttributes.normal||[],B=p.morphAttributes.color||[];let A=0;w===!0&&(A=1),U===!0&&(A=2),M===!0&&(A=3);let F=p.attributes.position.count*A,O=1;F>e.maxTextureSize&&(O=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const P=new Float32Array(F*O*4*_),T=new Dv(P,F,O,_);T.type=Wi,T.needsUpdate=!0;const L=A*4;for(let V=0;V<_;V++){const q=b[V],ce=z[V],fe=B[V],J=F*O*4*V;for(let I=0;I<q.count;I++){const G=I*L;w===!0&&(l.fromBufferAttribute(q,I),P[J+G+0]=l.x,P[J+G+1]=l.y,P[J+G+2]=l.z,P[J+G+3]=0),U===!0&&(l.fromBufferAttribute(ce,I),P[J+G+4]=l.x,P[J+G+5]=l.y,P[J+G+6]=l.z,P[J+G+7]=0),M===!0&&(l.fromBufferAttribute(fe,I),P[J+G+8]=l.x,P[J+G+9]=l.y,P[J+G+10]=l.z,P[J+G+11]=fe.itemSize===4?l.w:1)}}g={count:_,texture:T,size:new Tt(F,O)},s.set(p,g),p.addEventListener("dispose",X)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let w=0;for(let M=0;M<h.length;M++)w+=h[M];const U=p.morphTargetsRelative?1:1-w;m.getUniforms().setValue(r,"morphTargetBaseInfluence",U),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function QE(r,e,i,s,l){let c=new WeakMap;function d(h){const y=l.render.frame,_=h.geometry,g=e.get(h,_);if(c.get(g)!==y&&(e.update(g),c.set(g,y)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==y&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,y))),h.isSkinnedMesh){const E=h.skeleton;c.get(E)!==y&&(E.update(),c.set(E,y))}return g}function p(){c=new WeakMap}function m(h){const y=h.target;y.removeEventListener("dispose",m),s.releaseStatesOfObject(y),i.remove(y.instanceMatrix),y.instanceColor!==null&&i.remove(y.instanceColor)}return{update:d,dispose:p}}const JE={[gv]:"LINEAR_TONE_MAPPING",[xv]:"REINHARD_TONE_MAPPING",[vv]:"CINEON_TONE_MAPPING",[qh]:"ACES_FILMIC_TONE_MAPPING",[yv]:"AGX_TONE_MAPPING",[bv]:"NEUTRAL_TONE_MAPPING",[_v]:"CUSTOM_TONE_MAPPING"};function $E(r,e,i,s,l,c){const d=new Zi(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Zr(e,i):void 0}),p=new Zi(e,i,{type:Ca,depthBuffer:!1,stencilBuffer:!1}),m=new $i;m.setAttribute("position",new Ei([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ei([0,2,0,0,2,0],2));const h=new XS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),y=new Sn(m,h),_=new op(-1,1,1,-1,0,1);let g=null,E=null,w=!1,U,M=null,b=[],z=!1;this.setSize=function(B,A){d.setSize(B,A),p.setSize(B,A);for(let F=0;F<b.length;F++){const O=b[F];O.setSize&&O.setSize(B,A)}},this.setEffects=function(B){b=B,z=b.length>0&&b[0].isRenderPass===!0;const A=d.width,F=d.height;for(let O=0;O<b.length;O++){const P=b[O];P.setSize&&P.setSize(A,F)}},this.begin=function(B,A){if(w||B.toneMapping===Yi&&b.length===0)return!1;if(M=A,A!==null){const F=A.width,O=A.height;(d.width!==F||d.height!==O)&&this.setSize(F,O)}return z===!1&&B.setRenderTarget(d),U=B.toneMapping,B.toneMapping=Yi,!0},this.hasRenderPass=function(){return z},this.end=function(B,A){B.toneMapping=U,w=!0;let F=d,O=p;for(let P=0;P<b.length;P++){const T=b[P];if(T.enabled!==!1&&(T.render(B,O,F,A),T.needsSwap!==!1)){const L=F;F=O,O=L}}if(g!==B.outputColorSpace||E!==B.toneMapping){g=B.outputColorSpace,E=B.toneMapping,h.defines={},Et.getTransfer(g)===Vt&&(h.defines.SRGB_TRANSFER="");const P=JE[E];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=F.texture,B.setRenderTarget(M),B.render(y,_),M=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const Xv=new Gn,Vh=new Zr(1,1),jv=new Dv,Wv=new _S,qv=new Iv,Fx=[],zx=[],Gx=new Float32Array(16),Hx=new Float32Array(9),Vx=new Float32Array(4);function $r(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Fx[l];if(c===void 0&&(c=new Float32Array(l),Fx[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,r[d].toArray(c,p)}return c}function Mn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function En(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function cu(r,e){let i=zx[e];i===void 0&&(i=new Int32Array(e),zx[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function eT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function tT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;r.uniform2fv(this.addr,e),En(i,e)}}function nT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;r.uniform3fv(this.addr,e),En(i,e)}}function iT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;r.uniform4fv(this.addr,e),En(i,e)}}function aT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,s))return;Vx.set(s),r.uniformMatrix2fv(this.addr,!1,Vx),En(i,s)}}function sT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,s))return;Hx.set(s),r.uniformMatrix3fv(this.addr,!1,Hx),En(i,s)}}function rT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,s))return;Gx.set(s),r.uniformMatrix4fv(this.addr,!1,Gx),En(i,s)}}function oT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function lT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;r.uniform2iv(this.addr,e),En(i,e)}}function cT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;r.uniform3iv(this.addr,e),En(i,e)}}function uT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;r.uniform4iv(this.addr,e),En(i,e)}}function fT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function dT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;r.uniform2uiv(this.addr,e),En(i,e)}}function hT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;r.uniform3uiv(this.addr,e),En(i,e)}}function pT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;r.uniform4uiv(this.addr,e),En(i,e)}}function mT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Vh.compareFunction=i.isReversedDepthBuffer()?tp:ep,c=Vh):c=Xv,i.setTexture2D(e||c,l)}function gT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Wv,l)}function xT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||qv,l)}function vT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||jv,l)}function _T(r){switch(r){case 5126:return eT;case 35664:return tT;case 35665:return nT;case 35666:return iT;case 35674:return aT;case 35675:return sT;case 35676:return rT;case 5124:case 35670:return oT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return fT;case 36294:return dT;case 36295:return hT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return vT}}function yT(r,e){r.uniform1fv(this.addr,e)}function bT(r,e){const i=$r(e,this.size,2);r.uniform2fv(this.addr,i)}function ST(r,e){const i=$r(e,this.size,3);r.uniform3fv(this.addr,i)}function MT(r,e){const i=$r(e,this.size,4);r.uniform4fv(this.addr,i)}function ET(r,e){const i=$r(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function TT(r,e){const i=$r(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function AT(r,e){const i=$r(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function wT(r,e){r.uniform1iv(this.addr,e)}function RT(r,e){r.uniform2iv(this.addr,e)}function CT(r,e){r.uniform3iv(this.addr,e)}function NT(r,e){r.uniform4iv(this.addr,e)}function DT(r,e){r.uniform1uiv(this.addr,e)}function UT(r,e){r.uniform2uiv(this.addr,e)}function LT(r,e){r.uniform3uiv(this.addr,e)}function OT(r,e){r.uniform4uiv(this.addr,e)}function PT(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Vh:d=Xv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function IT(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Wv,c[d])}function BT(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||qv,c[d])}function FT(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||jv,c[d])}function zT(r){switch(r){case 5126:return yT;case 35664:return bT;case 35665:return ST;case 35666:return MT;case 35674:return ET;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return wT;case 35667:case 35671:return RT;case 35668:case 35672:return CT;case 35669:case 35673:return NT;case 5125:return DT;case 36294:return UT;case 36295:return LT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return FT}}class GT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=_T(i.type)}}class HT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=zT(i.type)}}class VT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const Jd=/(\w+)(\])?(\[|\.)?/g;function kx(r,e){r.seq.push(e),r.map[e.id]=e}function kT(r,e,i){const s=r.name,l=s.length;for(Jd.lastIndex=0;;){const c=Jd.exec(s),d=Jd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){kx(i,h===void 0?new GT(p,r,e):new HT(p,r,e));break}else{let _=i.map[p];_===void 0&&(_=new VT(p),kx(i,_)),i=_}}}class Kc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);kT(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Xx(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const XT=37297;let jT=0;function WT(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const jx=new ot;function qT(r){Et._getMatrix(jx,Et.workingColorSpace,r);const e=`mat3( ${jx.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(r)){case tu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Wx(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+WT(r.getShaderSource(e),p)}else return c}function YT(r,e){const i=qT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const ZT={[gv]:"Linear",[xv]:"Reinhard",[vv]:"Cineon",[qh]:"ACESFilmic",[yv]:"AgX",[bv]:"Neutral",[_v]:"Custom"};function KT(r,e){const i=ZT[e];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new re;function QT(){Et.getLuminanceCoefficients(Xc);const r=Xc.x.toFixed(4),e=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function $T(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function eA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:p}}return i}function el(r){return r!==""}function qx(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tA=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(r){return r.replace(tA,iA)}const nA=new Map;function iA(r,e){let i=mt[e];if(i===void 0){const s=nA.get(e);if(s!==void 0)i=mt[s],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return kh(i)}const aA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zx(r){return r.replace(aA,sA)}function sA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Kx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rA={[jc]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function oA(r){return rA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lA={[ks]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE",[ou]:"ENVMAP_TYPE_CUBE_UV"};function cA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":lA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const uA={[Yr]:"ENVMAP_MODE_REFRACTION"};function fA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":uA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dA={[mv]:"ENVMAP_BLENDING_MULTIPLY",[Bb]:"ENVMAP_BLENDING_MIX",[Fb]:"ENVMAP_BLENDING_ADD"};function hA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":dA[r.combine]||"ENVMAP_BLENDING_NONE"}function pA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function mA(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=oA(i),h=cA(i),y=fA(i),_=hA(i),g=pA(i),E=JT(i),w=$T(c),U=l.createProgram();let M,b,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(el).join(`
`),M.length>0&&(M+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(el).join(`
`),b.length>0&&(b+=`
`)):(M=[Kx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),b=[Kx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+y:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?mt.tonemapping_pars_fragment:"",i.toneMapping!==Yi?KT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,YT("linearToOutputTexel",i.outputColorSpace),QT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),d=kh(d),d=qx(d,i),d=Yx(d,i),p=kh(p),p=qx(p,i),p=Yx(p,i),d=Zx(d),p=Zx(p),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,b=["#define varying in",i.glslVersion===ox?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ox?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const B=z+M+d,A=z+b+p,F=Xx(l,l.VERTEX_SHADER,B),O=Xx(l,l.FRAGMENT_SHADER,A);l.attachShader(U,F),l.attachShader(U,O),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function P(V){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(U)||"",ce=l.getShaderInfoLog(F)||"",fe=l.getShaderInfoLog(O)||"",J=q.trim(),I=ce.trim(),G=fe.trim();let ee=!0,ge=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,U,F,O);else{const de=Wx(l,F,"vertex"),D=Wx(l,O,"fragment");Rt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+de+`
`+D)}else J!==""?it("WebGLProgram: Program Info Log:",J):(I===""||G==="")&&(ge=!1);ge&&(V.diagnostics={runnable:ee,programLog:J,vertexShader:{log:I,prefix:M},fragmentShader:{log:G,prefix:b}})}l.deleteShader(F),l.deleteShader(O),T=new Kc(l,U),L=eA(l,U)}let T;this.getUniforms=function(){return T===void 0&&P(this),T};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(U,XT)),X},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jT++,this.cacheKey=e,this.usedTimes=1,this.program=U,this.vertexShader=F,this.fragmentShader=O,this}let gA=0;class xA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new vA(e),i.set(e,s)),s}}class vA{constructor(e){this.id=gA++,this.code=e,this.usedTimes=0}}function _A(r){return r===Xs||r===Jc||r===$c}function yA(r,e,i,s,l,c){const d=new Uv,p=new xA,m=new Set,h=[],y=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return m.add(T),T===0?"uv":`uv${T}`}function U(T,L,X,V,q,ce){const fe=V.fog,J=q.geometry,I=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||I,G),ge=ee&&ee.mapping===ou?ee.image.height:null,de=E[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&it("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const D=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,K=D!==void 0?D.length:0;let Se=0;J.morphAttributes.position!==void 0&&(Se=1),J.morphAttributes.normal!==void 0&&(Se=2),J.morphAttributes.color!==void 0&&(Se=3);let we,De,te,be;if(de){const ke=Xi[de];we=ke.vertexShader,De=ke.fragmentShader}else{we=T.vertexShader,De=T.fragmentShader;const ke=p.getVertexShaderStage(T),nn=p.getFragmentShaderStage(T);p.update(T,ke,nn),te=ke.id,be=nn.id}const Me=r.getRenderTarget(),Be=r.state.buffers.depth.getReversed(),nt=q.isInstancedMesh===!0,Ke=q.isBatchedMesh===!0,Ct=!!T.map,ft=!!T.matcap,gt=!!ee,pt=!!T.aoMap,dt=!!T.lightMap,Yt=!!T.bumpMap&&T.wireframe===!1,Kt=!!T.normalMap,Qt=!!T.displacementMap,tn=!!T.emissiveMap,Pt=!!T.metalnessMap,Jt=!!T.roughnessMap,Y=T.anisotropy>0,st=T.clearcoat>0,At=T.dispersion>0,N=T.iridescence>0,S=T.sheen>0,W=T.transmission>0,$=Y&&!!T.anisotropyMap,he=st&&!!T.clearcoatMap,Ae=st&&!!T.clearcoatNormalMap,Te=st&&!!T.clearcoatRoughnessMap,pe=N&&!!T.iridescenceMap,me=N&&!!T.iridescenceThicknessMap,Ce=S&&!!T.sheenColorMap,ze=S&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Ue=!!T.specularColorMap,Qe=!!T.specularIntensityMap,Je=W&&!!T.transmissionMap,at=W&&!!T.thicknessMap,j=!!T.gradientMap,Re=!!T.alphaMap,ve=T.alphaTest>0,Ne=!!T.alphaHash,Fe=!!T.extensions;let Ee=Yi;T.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Ee=r.toneMapping);const qe={shaderID:de,shaderType:T.type,shaderName:T.name,vertexShader:we,fragmentShader:De,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&q._colorsTexture!==null,instancing:nt,instancingColor:nt&&q.instanceColor!==null,instancingMorph:nt&&q.morphTexture!==null,outputColorSpace:Me===null?r.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ct,matcap:ft,envMap:gt,envMapMode:gt&&ee.mapping,envMapCubeUVHeight:ge,aoMap:pt,lightMap:dt,bumpMap:Yt,normalMap:Kt,displacementMap:Qt,emissiveMap:tn,normalMapObjectSpace:Kt&&T.normalMapType===Hb,normalMapTangentSpace:Kt&&T.normalMapType===Hh,packedNormalMap:Kt&&T.normalMapType===Hh&&_A(T.normalMap.format),metalnessMap:Pt,roughnessMap:Jt,anisotropy:Y,anisotropyMap:$,clearcoat:st,clearcoatMap:he,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Te,dispersion:At,iridescence:N,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:S,sheenColorMap:Ce,sheenRoughnessMap:ze,specularMap:Oe,specularColorMap:Ue,specularIntensityMap:Qe,transmission:W,transmissionMap:Je,thicknessMap:at,gradientMap:j,opaque:T.transparent===!1&&T.blending===kr&&T.alphaToCoverage===!1,alphaMap:Re,alphaTest:ve,alphaHash:Ne,combine:T.combine,mapUv:Ct&&w(T.map.channel),aoMapUv:pt&&w(T.aoMap.channel),lightMapUv:dt&&w(T.lightMap.channel),bumpMapUv:Yt&&w(T.bumpMap.channel),normalMapUv:Kt&&w(T.normalMap.channel),displacementMapUv:Qt&&w(T.displacementMap.channel),emissiveMapUv:tn&&w(T.emissiveMap.channel),metalnessMapUv:Pt&&w(T.metalnessMap.channel),roughnessMapUv:Jt&&w(T.roughnessMap.channel),anisotropyMapUv:$&&w(T.anisotropyMap.channel),clearcoatMapUv:he&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:ze&&w(T.sheenRoughnessMap.channel),specularMapUv:Oe&&w(T.specularMap.channel),specularColorMapUv:Ue&&w(T.specularColorMap.channel),specularIntensityMapUv:Qe&&w(T.specularIntensityMap.channel),transmissionMapUv:Je&&w(T.transmissionMap.channel),thicknessMapUv:at&&w(T.thicknessMap.channel),alphaMapUv:Re&&w(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Kt||Y),vertexNormals:!!J.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!J.attributes.uv&&(Ct||Re),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&Kt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Be,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Se,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Ct&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===Vt,decodeVideoTextureEmissive:tn&&T.emissiveMap.isVideoTexture===!0&&Et.getTransfer(T.emissiveMap.colorSpace)===Vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ta,flipSided:T.side===Jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function M(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)L.push(X),L.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(b(L,T),z(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function b(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function z(T,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function B(T){const L=E[T.type];let X;if(L){const V=Xi[L];X=HS.clone(V.uniforms)}else X=T.uniforms;return X}function A(T,L){let X=y.get(L);return X!==void 0?++X.usedTimes:(X=new mA(r,L,T,l),h.push(X),y.set(L,X)),X}function F(T){if(--T.usedTimes===0){const L=h.indexOf(T);h[L]=h[h.length-1],h.pop(),y.delete(T.cacheKey),T.destroy()}}function O(T){p.remove(T)}function P(){p.dispose()}return{getParameters:U,getProgramCacheKey:M,getUniforms:B,acquireProgram:A,releaseProgram:F,releaseShaderCache:O,programs:h,dispose:P}}function bA(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function SA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Qx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jx(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function p(g,E,w,U,M,b){let z=r[e];return z===void 0?(z={id:g.id,object:g,geometry:E,material:w,materialVariant:d(g),groupOrder:U,renderOrder:g.renderOrder,z:M,group:b},r[e]=z):(z.id=g.id,z.object=g,z.geometry=E,z.material=w,z.materialVariant=d(g),z.groupOrder=U,z.renderOrder=g.renderOrder,z.z=M,z.group=b),e++,z}function m(g,E,w,U,M,b){const z=p(g,E,w,U,M,b);w.transmission>0?s.push(z):w.transparent===!0?l.push(z):i.push(z)}function h(g,E,w,U,M,b){const z=p(g,E,w,U,M,b);w.transmission>0?s.unshift(z):w.transparent===!0?l.unshift(z):i.unshift(z)}function y(g,E,w){i.length>1&&i.sort(g||SA),s.length>1&&s.sort(E||Qx),l.length>1&&l.sort(E||Qx),w&&(i.reverse(),s.reverse(),l.reverse())}function _(){for(let g=e,E=r.length;g<E;g++){const w=r[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:_,sort:y}}function MA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new Jx,r.set(s,[d])):l>=c.length?(d=new Jx,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function EA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new wt};break;case"SpotLight":i={position:new re,direction:new re,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new re,halfWidth:new re,halfHeight:new re};break}return r[e.id]=i,i}}}function TA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let AA=0;function wA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function RA(r){const e=new EA,i=TA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new re);const l=new re,c=new un,d=new un;function p(h){let y=0,_=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let E=0,w=0,U=0,M=0,b=0,z=0,B=0,A=0,F=0,O=0,P=0;h.sort(wA);for(let L=0,X=h.length;L<X;L++){const V=h[L],q=V.color,ce=V.intensity,fe=V.distance;let J=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Xs?J=V.shadow.map.texture:J=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)y+=q.r*ce,_+=q.g*ce,g+=q.b*ce;else if(V.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(V.sh.coefficients[I],ce);P++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,s.directionalShadow[E]=ee,s.directionalShadowMap[E]=J,s.directionalShadowMatrix[E]=V.shadow.matrix,z++}s.directional[E]=I,E++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(q).multiplyScalar(ce),I.distance=fe,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,s.spot[U]=I;const G=V.shadow;if(V.map&&(s.spotLightMap[F]=V.map,F++,G.updateMatrices(V),V.castShadow&&O++),s.spotLightMatrix[U]=G.matrix,V.castShadow){const ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,s.spotShadow[U]=ee,s.spotShadowMap[U]=J,A++}U++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(q).multiplyScalar(ce),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=I,M++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const G=V.shadow,ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,s.pointShadow[w]=ee,s.pointShadowMap[w]=J,s.pointShadowMatrix[w]=V.shadow.matrix,B++}s.point[w]=I,w++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(ce),I.groundColor.copy(V.groundColor).multiplyScalar(ce),s.hemi[b]=I,b++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=_,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==E||T.pointLength!==w||T.spotLength!==U||T.rectAreaLength!==M||T.hemiLength!==b||T.numDirectionalShadows!==z||T.numPointShadows!==B||T.numSpotShadows!==A||T.numSpotMaps!==F||T.numLightProbes!==P)&&(s.directional.length=E,s.spot.length=U,s.rectArea.length=M,s.point.length=w,s.hemi.length=b,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=A+F-O,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=P,T.directionalLength=E,T.pointLength=w,T.spotLength=U,T.rectAreaLength=M,T.hemiLength=b,T.numDirectionalShadows=z,T.numPointShadows=B,T.numSpotShadows=A,T.numSpotMaps=F,T.numLightProbes=P,s.version=AA++)}function m(h,y){let _=0,g=0,E=0,w=0,U=0;const M=y.matrixWorldInverse;for(let b=0,z=h.length;b<z;b++){const B=h[b];if(B.isDirectionalLight){const A=s.directional[_];A.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(M),_++}else if(B.isSpotLight){const A=s.spot[E];A.position.setFromMatrixPosition(B.matrixWorld),A.position.applyMatrix4(M),A.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(M),E++}else if(B.isRectAreaLight){const A=s.rectArea[w];A.position.setFromMatrixPosition(B.matrixWorld),A.position.applyMatrix4(M),d.identity(),c.copy(B.matrixWorld),c.premultiply(M),d.extractRotation(c),A.halfWidth.set(B.width*.5,0,0),A.halfHeight.set(0,B.height*.5,0),A.halfWidth.applyMatrix4(d),A.halfHeight.applyMatrix4(d),w++}else if(B.isPointLight){const A=s.point[g];A.position.setFromMatrixPosition(B.matrixWorld),A.position.applyMatrix4(M),g++}else if(B.isHemisphereLight){const A=s.hemi[U];A.direction.setFromMatrixPosition(B.matrixWorld),A.direction.transformDirection(M),U++}}}return{setup:p,setupView:m,state:s}}function $x(r){const e=new RA(r),i=[],s=[],l=[];function c(g){_.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function y(g){e.setupView(i,g)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:y,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function CA(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new $x(r),e.set(l,[p])):c>=d.length?(p=new $x(r),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const NA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,UA=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],LA=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],ev=new un,Jo=new re,$d=new re;function OA(r,e,i){let s=new rp;const l=new Tt,c=new Tt,d=new on,p=new jS,m=new WS,h={},y=i.maxTextureSize,_={[hs]:Jn,[Jn]:hs,[Ta]:Ta},g=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:NA,fragmentShader:DA}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const w=new $i;w.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new Sn(w,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let b=this.type;this.render=function(O,P,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;this.type===pv&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jc);const L=r.getRenderTarget(),X=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),q=r.state;q.setBlending(wa),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ce=b!==this.type;ce&&P.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(J=>J.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,J=O.length;fe<J;fe++){const I=O[fe],G=I.shadow;if(G===void 0){it("WebGLShadowMap:",I,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ee=G.getFrameExtents();l.multiply(ee),c.copy(G.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(c.x=Math.floor(y/ee.x),l.x=c.x*ee.x,G.mapSize.x=c.x),l.y>y&&(c.y=Math.floor(y/ee.y),l.y=c.y*ee.y,G.mapSize.y=c.y));const ge=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ge,G.map===null||ce===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===$o){if(I.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Zi(l.x,l.y,{format:Xs,type:Ca,minFilter:zn,magFilter:zn,generateMipmaps:!1}),G.map.texture.name=I.name+".shadowMap",G.map.depthTexture=new Zr(l.x,l.y,Wi),G.map.depthTexture.name=I.name+".shadowMapDepth",G.map.depthTexture.format=Na,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On}else I.isPointLight?(G.map=new kv(l.x),G.map.depthTexture=new zS(l.x,Qi)):(G.map=new Zi(l.x,l.y),G.map.depthTexture=new Zr(l.x,l.y,Qi)),G.map.depthTexture.name=I.name+".shadowMap",G.map.depthTexture.format=Na,this.type===jc?(G.map.depthTexture.compareFunction=ge?tp:ep,G.map.depthTexture.minFilter=zn,G.map.depthTexture.magFilter=zn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On);G.camera.updateProjectionMatrix()}const de=G.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<de;D++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,D),r.clear();else{D===0&&(r.setRenderTarget(G.map),r.clear());const K=G.getViewport(D);d.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),q.viewport(d)}if(I.isPointLight){const K=G.camera,Se=G.matrix,we=I.distance||K.far;we!==K.far&&(K.far=we,K.updateProjectionMatrix()),Jo.setFromMatrixPosition(I.matrixWorld),K.position.copy(Jo),$d.copy(K.position),$d.add(UA[D]),K.up.copy(LA[D]),K.lookAt($d),K.updateMatrixWorld(),Se.makeTranslation(-Jo.x,-Jo.y,-Jo.z),ev.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ev,K.coordinateSystem,K.reversedDepth)}else G.updateMatrices(I);s=G.getFrustum(),A(P,T,G.camera,I,this.type)}G.isPointLightShadow!==!0&&this.type===$o&&z(G,T),G.needsUpdate=!1}b=this.type,M.needsUpdate=!1,r.setRenderTarget(L,X,V)};function z(O,P){const T=e.update(U);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,E.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Zi(l.x,l.y,{format:Xs,type:Ca})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(P,null,T,g,U,null),E.uniforms.shadow_pass.value=O.mapPass.texture,E.uniforms.resolution.value=O.mapSize,E.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(P,null,T,E,U,null)}function B(O,P,T,L){let X=null;const V=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)X=V;else if(X=T.isPointLight===!0?m:p,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const q=X.uuid,ce=P.uuid;let fe=h[q];fe===void 0&&(fe={},h[q]=fe);let J=fe[ce];J===void 0&&(J=X.clone(),fe[ce]=J,P.addEventListener("dispose",F)),X=J}if(X.visible=P.visible,X.wireframe=P.wireframe,L===$o?X.side=P.shadowSide!==null?P.shadowSide:P.side:X.side=P.shadowSide!==null?P.shadowSide:_[P.side],X.alphaMap=P.alphaMap,X.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,X.map=P.map,X.clipShadows=P.clipShadows,X.clippingPlanes=P.clippingPlanes,X.clipIntersection=P.clipIntersection,X.displacementMap=P.displacementMap,X.displacementScale=P.displacementScale,X.displacementBias=P.displacementBias,X.wireframeLinewidth=P.wireframeLinewidth,X.linewidth=P.linewidth,T.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const q=r.properties.get(X);q.light=T}return X}function A(O,P,T,L,X){if(O.visible===!1)return;if(O.layers.test(P.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&X===$o)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const ce=e.update(O),fe=O.material;if(Array.isArray(fe)){const J=ce.groups;for(let I=0,G=J.length;I<G;I++){const ee=J[I],ge=fe[ee.materialIndex];if(ge&&ge.visible){const de=B(O,ge,L,X);O.onBeforeShadow(r,O,P,T,ce,de,ee),r.renderBufferDirect(T,null,ce,de,O,ee),O.onAfterShadow(r,O,P,T,ce,de,ee)}}}else if(fe.visible){const J=B(O,fe,L,X);O.onBeforeShadow(r,O,P,T,ce,J,null),r.renderBufferDirect(T,null,ce,J,O,null),O.onAfterShadow(r,O,P,T,ce,J,null)}}const q=O.children;for(let ce=0,fe=q.length;ce<fe;ce++)A(q[ce],P,T,L,X)}function F(O){O.target.removeEventListener("dispose",F);for(const T in h){const L=h[T],X=O.target.uuid;X in L&&(L[X].dispose(),delete L[X])}}}function PA(r,e){function i(){let j=!1;const Re=new on;let ve=null;const Ne=new on(0,0,0,0);return{setMask:function(Fe){ve!==Fe&&!j&&(r.colorMask(Fe,Fe,Fe,Fe),ve=Fe)},setLocked:function(Fe){j=Fe},setClear:function(Fe,Ee,qe,ke,nn){nn===!0&&(Fe*=ke,Ee*=ke,qe*=ke),Re.set(Fe,Ee,qe,ke),Ne.equals(Re)===!1&&(r.clearColor(Fe,Ee,qe,ke),Ne.copy(Re))},reset:function(){j=!1,ve=null,Ne.set(-1,0,0,0)}}}function s(){let j=!1,Re=!1,ve=null,Ne=null,Fe=null;return{setReversed:function(Ee){if(Re!==Ee){const qe=e.get("EXT_clip_control");Ee?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Re=Ee;const ke=Fe;Fe=null,this.setClear(ke)}},getReversed:function(){return Re},setTest:function(Ee){Ee?Me(r.DEPTH_TEST):Be(r.DEPTH_TEST)},setMask:function(Ee){ve!==Ee&&!j&&(r.depthMask(Ee),ve=Ee)},setFunc:function(Ee){if(Re&&(Ee=Qb[Ee]),Ne!==Ee){switch(Ee){case nh:r.depthFunc(r.NEVER);break;case ih:r.depthFunc(r.ALWAYS);break;case ah:r.depthFunc(r.LESS);break;case qr:r.depthFunc(r.LEQUAL);break;case sh:r.depthFunc(r.EQUAL);break;case rh:r.depthFunc(r.GEQUAL);break;case oh:r.depthFunc(r.GREATER);break;case lh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ne=Ee}},setLocked:function(Ee){j=Ee},setClear:function(Ee){Fe!==Ee&&(Fe=Ee,Re&&(Ee=1-Ee),r.clearDepth(Ee))},reset:function(){j=!1,ve=null,Ne=null,Fe=null,Re=!1}}}function l(){let j=!1,Re=null,ve=null,Ne=null,Fe=null,Ee=null,qe=null,ke=null,nn=null;return{setTest:function(It){j||(It?Me(r.STENCIL_TEST):Be(r.STENCIL_TEST))},setMask:function(It){Re!==It&&!j&&(r.stencilMask(It),Re=It)},setFunc:function(It,$n,ei){(ve!==It||Ne!==$n||Fe!==ei)&&(r.stencilFunc(It,$n,ei),ve=It,Ne=$n,Fe=ei)},setOp:function(It,$n,ei){(Ee!==It||qe!==$n||ke!==ei)&&(r.stencilOp(It,$n,ei),Ee=It,qe=$n,ke=ei)},setLocked:function(It){j=It},setClear:function(It){nn!==It&&(r.clearStencil(It),nn=It)},reset:function(){j=!1,Re=null,ve=null,Ne=null,Fe=null,Ee=null,qe=null,ke=null,nn=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let y={},_={},g={},E=new WeakMap,w=[],U=null,M=!1,b=null,z=null,B=null,A=null,F=null,O=null,P=null,T=new wt(0,0,0),L=0,X=!1,V=null,q=null,ce=null,fe=null,J=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const ge=r.getParameter(r.VERSION);ge.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ge)[1]),G=ee>=1):ge.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),G=ee>=2);let de=null,D={};const K=r.getParameter(r.SCISSOR_BOX),Se=r.getParameter(r.VIEWPORT),we=new on().fromArray(K),De=new on().fromArray(Se);function te(j,Re,ve,Ne){const Fe=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(j,Ee),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<ve;qe++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,Ne,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(Re+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return Ee}const be={};be[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),be[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),be[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Me(r.DEPTH_TEST),d.setFunc(qr),Yt(!1),Kt(tx),Me(r.CULL_FACE),pt(wa);function Me(j){y[j]!==!0&&(r.enable(j),y[j]=!0)}function Be(j){y[j]!==!1&&(r.disable(j),y[j]=!1)}function nt(j,Re){return g[j]!==Re?(r.bindFramebuffer(j,Re),g[j]=Re,j===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Re),j===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ke(j,Re){let ve=w,Ne=!1;if(j){ve=E.get(Re),ve===void 0&&(ve=[],E.set(Re,ve));const Fe=j.textures;if(ve.length!==Fe.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let Ee=0,qe=Fe.length;Ee<qe;Ee++)ve[Ee]=r.COLOR_ATTACHMENT0+Ee;ve.length=Fe.length,Ne=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,Ne=!0);Ne&&r.drawBuffers(ve)}function Ct(j){return U!==j?(r.useProgram(j),U=j,!0):!1}const ft={[Gs]:r.FUNC_ADD,[yb]:r.FUNC_SUBTRACT,[bb]:r.FUNC_REVERSE_SUBTRACT};ft[Sb]=r.MIN,ft[Mb]=r.MAX;const gt={[Eb]:r.ZERO,[Tb]:r.ONE,[Ab]:r.SRC_COLOR,[eh]:r.SRC_ALPHA,[Ub]:r.SRC_ALPHA_SATURATE,[Nb]:r.DST_COLOR,[Rb]:r.DST_ALPHA,[wb]:r.ONE_MINUS_SRC_COLOR,[th]:r.ONE_MINUS_SRC_ALPHA,[Db]:r.ONE_MINUS_DST_COLOR,[Cb]:r.ONE_MINUS_DST_ALPHA,[Lb]:r.CONSTANT_COLOR,[Ob]:r.ONE_MINUS_CONSTANT_COLOR,[Pb]:r.CONSTANT_ALPHA,[Ib]:r.ONE_MINUS_CONSTANT_ALPHA};function pt(j,Re,ve,Ne,Fe,Ee,qe,ke,nn,It){if(j===wa){M===!0&&(Be(r.BLEND),M=!1);return}if(M===!1&&(Me(r.BLEND),M=!0),j!==_b){if(j!==b||It!==X){if((z!==Gs||F!==Gs)&&(r.blendEquation(r.FUNC_ADD),z=Gs,F=Gs),It)switch(j){case kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nx:r.blendFunc(r.ONE,r.ONE);break;case ix:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ax:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Rt("WebGLState: Invalid blending: ",j);break}else switch(j){case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ix:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ax:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",j);break}B=null,A=null,O=null,P=null,T.set(0,0,0),L=0,b=j,X=It}return}Fe=Fe||Re,Ee=Ee||ve,qe=qe||Ne,(Re!==z||Fe!==F)&&(r.blendEquationSeparate(ft[Re],ft[Fe]),z=Re,F=Fe),(ve!==B||Ne!==A||Ee!==O||qe!==P)&&(r.blendFuncSeparate(gt[ve],gt[Ne],gt[Ee],gt[qe]),B=ve,A=Ne,O=Ee,P=qe),(ke.equals(T)===!1||nn!==L)&&(r.blendColor(ke.r,ke.g,ke.b,nn),T.copy(ke),L=nn),b=j,X=!1}function dt(j,Re){j.side===Ta?Be(r.CULL_FACE):Me(r.CULL_FACE);let ve=j.side===Jn;Re&&(ve=!ve),Yt(ve),j.blending===kr&&j.transparent===!1?pt(wa):pt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const Ne=j.stencilWrite;p.setTest(Ne),Ne&&(p.setMask(j.stencilWriteMask),p.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),p.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),tn(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Me(r.SAMPLE_ALPHA_TO_COVERAGE):Be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(j){V!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),V=j)}function Kt(j){j!==xb?(Me(r.CULL_FACE),j!==q&&(j===tx?r.cullFace(r.BACK):j===vb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Be(r.CULL_FACE),q=j}function Qt(j){j!==ce&&(G&&r.lineWidth(j),ce=j)}function tn(j,Re,ve){j?(Me(r.POLYGON_OFFSET_FILL),(fe!==Re||J!==ve)&&(fe=Re,J=ve,d.getReversed()&&(Re=-Re),r.polygonOffset(Re,ve))):Be(r.POLYGON_OFFSET_FILL)}function Pt(j){j?Me(r.SCISSOR_TEST):Be(r.SCISSOR_TEST)}function Jt(j){j===void 0&&(j=r.TEXTURE0+I-1),de!==j&&(r.activeTexture(j),de=j)}function Y(j,Re,ve){ve===void 0&&(de===null?ve=r.TEXTURE0+I-1:ve=de);let Ne=D[ve];Ne===void 0&&(Ne={type:void 0,texture:void 0},D[ve]=Ne),(Ne.type!==j||Ne.texture!==Re)&&(de!==ve&&(r.activeTexture(ve),de=ve),r.bindTexture(j,Re||be[j]),Ne.type=j,Ne.texture=Re)}function st(){const j=D[de];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function At(){try{r.compressedTexImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function S(){try{r.texSubImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function W(){try{r.texSubImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function he(){try{r.compressedTexSubImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function Ae(){try{r.texStorage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function Te(){try{r.texStorage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function pe(){try{r.texImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function me(){try{r.texImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function Ce(j){return _[j]!==void 0?_[j]:r.getParameter(j)}function ze(j,Re){_[j]!==Re&&(r.pixelStorei(j,Re),_[j]=Re)}function Oe(j){we.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),we.copy(j))}function Ue(j){De.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),De.copy(j))}function Qe(j,Re){let ve=h.get(Re);ve===void 0&&(ve=new WeakMap,h.set(Re,ve));let Ne=ve.get(j);Ne===void 0&&(Ne=r.getUniformBlockIndex(Re,j.name),ve.set(j,Ne))}function Je(j,Re){const Ne=h.get(Re).get(j);m.get(Re)!==Ne&&(r.uniformBlockBinding(Re,Ne,j.__bindingPointIndex),m.set(Re,Ne))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),y={},_={},de=null,D={},g={},E=new WeakMap,w=[],U=null,M=!1,b=null,z=null,B=null,A=null,F=null,O=null,P=null,T=new wt(0,0,0),L=0,X=!1,V=null,q=null,ce=null,fe=null,J=null,we.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Me,disable:Be,bindFramebuffer:nt,drawBuffers:Ke,useProgram:Ct,setBlending:pt,setMaterial:dt,setFlipSided:Yt,setCullFace:Kt,setLineWidth:Qt,setPolygonOffset:tn,setScissorTest:Pt,activeTexture:Jt,bindTexture:Y,unbindTexture:st,compressedTexImage2D:At,compressedTexImage3D:N,texImage2D:pe,texImage3D:me,pixelStorei:ze,getParameter:Ce,updateUBOMapping:Qe,uniformBlockBinding:Je,texStorage2D:Ae,texStorage3D:Te,texSubImage2D:S,texSubImage3D:W,compressedTexSubImage2D:$,compressedTexSubImage3D:he,scissor:Oe,viewport:Ue,reset:at}}function IA(r,e,i,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Tt,y=new WeakMap,_=new Set;let g;const E=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(N,S){return w?new OffscreenCanvas(N,S):nu("canvas")}function M(N,S,W){let $=1;const he=At(N);if((he.width>W||he.height>W)&&($=W/Math.max(he.width,he.height)),$<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Ae=Math.floor($*he.width),Te=Math.floor($*he.height);g===void 0&&(g=U(Ae,Te));const pe=S?U(Ae,Te):g;return pe.width=Ae,pe.height=Te,pe.getContext("2d").drawImage(N,0,0,Ae,Te),it("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ae+"x"+Te+")."),pe}else return"data"in N&&it("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),N;return N}function b(N){return N.generateMipmaps}function z(N){r.generateMipmap(N)}function B(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(N,S,W,$,he,Ae=!1){if(N!==null){if(r[N]!==void 0)return r[N];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Te;$&&(Te=e.get("EXT_texture_norm16"),Te||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=S;if(S===r.RED&&(W===r.FLOAT&&(pe=r.R32F),W===r.HALF_FLOAT&&(pe=r.R16F),W===r.UNSIGNED_BYTE&&(pe=r.R8),W===r.UNSIGNED_SHORT&&Te&&(pe=Te.R16_EXT),W===r.SHORT&&Te&&(pe=Te.R16_SNORM_EXT)),S===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(pe=r.R8UI),W===r.UNSIGNED_SHORT&&(pe=r.R16UI),W===r.UNSIGNED_INT&&(pe=r.R32UI),W===r.BYTE&&(pe=r.R8I),W===r.SHORT&&(pe=r.R16I),W===r.INT&&(pe=r.R32I)),S===r.RG&&(W===r.FLOAT&&(pe=r.RG32F),W===r.HALF_FLOAT&&(pe=r.RG16F),W===r.UNSIGNED_BYTE&&(pe=r.RG8),W===r.UNSIGNED_SHORT&&Te&&(pe=Te.RG16_EXT),W===r.SHORT&&Te&&(pe=Te.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(pe=r.RG8UI),W===r.UNSIGNED_SHORT&&(pe=r.RG16UI),W===r.UNSIGNED_INT&&(pe=r.RG32UI),W===r.BYTE&&(pe=r.RG8I),W===r.SHORT&&(pe=r.RG16I),W===r.INT&&(pe=r.RG32I)),S===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),W===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),W===r.UNSIGNED_INT&&(pe=r.RGB32UI),W===r.BYTE&&(pe=r.RGB8I),W===r.SHORT&&(pe=r.RGB16I),W===r.INT&&(pe=r.RGB32I)),S===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),W===r.UNSIGNED_INT&&(pe=r.RGBA32UI),W===r.BYTE&&(pe=r.RGBA8I),W===r.SHORT&&(pe=r.RGBA16I),W===r.INT&&(pe=r.RGBA32I)),S===r.RGB&&(W===r.UNSIGNED_SHORT&&Te&&(pe=Te.RGB16_EXT),W===r.SHORT&&Te&&(pe=Te.RGB16_SNORM_EXT),W===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(pe=r.R11F_G11F_B10F)),S===r.RGBA){const me=Ae?tu:Et.getTransfer(he);W===r.FLOAT&&(pe=r.RGBA32F),W===r.HALF_FLOAT&&(pe=r.RGBA16F),W===r.UNSIGNED_BYTE&&(pe=me===Vt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT&&Te&&(pe=Te.RGBA16_EXT),W===r.SHORT&&Te&&(pe=Te.RGBA16_SNORM_EXT),W===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function F(N,S){let W;return N?S===null||S===Qi||S===al?W=r.DEPTH24_STENCIL8:S===Wi?W=r.DEPTH32F_STENCIL8:S===il&&(W=r.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qi||S===al?W=r.DEPTH_COMPONENT24:S===Wi?W=r.DEPTH_COMPONENT32F:S===il&&(W=r.DEPTH_COMPONENT16),W}function O(N,S){return b(N)===!0||N.isFramebufferTexture&&N.minFilter!==On&&N.minFilter!==zn?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function P(N){const S=N.target;S.removeEventListener("dispose",P),L(S),S.isVideoTexture&&y.delete(S),S.isHTMLTexture&&_.delete(S)}function T(N){const S=N.target;S.removeEventListener("dispose",T),V(S)}function L(N){const S=s.get(N);if(S.__webglInit===void 0)return;const W=N.source,$=E.get(W);if($){const he=$[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&X(N),Object.keys($).length===0&&E.delete(W)}s.remove(N)}function X(N){const S=s.get(N);r.deleteTexture(S.__webglTexture);const W=N.source,$=E.get(W);delete $[S.__cacheKey],d.memory.textures--}function V(N){const S=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let he=0;he<S.__webglFramebuffer[$].length;he++)r.deleteFramebuffer(S.__webglFramebuffer[$][he]);else r.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)r.deleteFramebuffer(S.__webglFramebuffer[$]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=N.textures;for(let $=0,he=W.length;$<he;$++){const Ae=s.get(W[$]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),d.memory.textures--),s.remove(W[$])}s.remove(N)}let q=0;function ce(){q=0}function fe(){return q}function J(N){q=N}function I(){const N=q;return N>=l.maxTextures&&it("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),q+=1,N}function G(N){const S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function ee(N,S){const W=s.get(N);if(N.isVideoTexture&&Y(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const $=N.image;if($===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(W,N,S);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+S)}function ge(N,S){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){Be(W,N,S);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+S)}function de(N,S){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){Be(W,N,S);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+S)}function D(N,S){const W=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){nt(W,N,S);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+S)}const K={[ch]:r.REPEAT,[Aa]:r.CLAMP_TO_EDGE,[uh]:r.MIRRORED_REPEAT},Se={[On]:r.NEAREST,[zb]:r.NEAREST_MIPMAP_NEAREST,[Mc]:r.NEAREST_MIPMAP_LINEAR,[zn]:r.LINEAR,[Md]:r.LINEAR_MIPMAP_NEAREST,[fs]:r.LINEAR_MIPMAP_LINEAR},we={[Vb]:r.NEVER,[qb]:r.ALWAYS,[kb]:r.LESS,[ep]:r.LEQUAL,[Xb]:r.EQUAL,[tp]:r.GEQUAL,[jb]:r.GREATER,[Wb]:r.NOTEQUAL};function De(N,S){if(S.type===Wi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===zn||S.magFilter===Md||S.magFilter===Mc||S.magFilter===fs||S.minFilter===zn||S.minFilter===Md||S.minFilter===Mc||S.minFilter===fs)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,K[S.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,K[S.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,K[S.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Se[S.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Se[S.minFilter]),S.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,we[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===On||S.minFilter!==Mc&&S.minFilter!==fs||S.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||s.get(S).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,l.getMaxAnisotropy())),s.get(S).__currentAnisotropy=S.anisotropy}}}function te(N,S){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",P));const $=S.source;let he=E.get($);he===void 0&&(he={},E.set($,he));const Ae=G(S);if(Ae!==N.__cacheKey){he[Ae]===void 0&&(he[Ae]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,W=!0),he[Ae].usedTimes++;const Te=he[N.__cacheKey];Te!==void 0&&(he[N.__cacheKey].usedTimes--,Te.usedTimes===0&&X(S)),N.__cacheKey=Ae,N.__webglTexture=he[Ae].texture}return W}function be(N,S,W){return Math.floor(Math.floor(N/W)/S)}function Me(N,S,W,$){const Ae=N.updateRanges;if(Ae.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,W,$,S.data);else{Ae.sort((ze,Oe)=>ze.start-Oe.start);let Te=0;for(let ze=1;ze<Ae.length;ze++){const Oe=Ae[Te],Ue=Ae[ze],Qe=Oe.start+Oe.count,Je=be(Ue.start,S.width,4),at=be(Oe.start,S.width,4);Ue.start<=Qe+1&&Je===at&&be(Ue.start+Ue.count-1,S.width,4)===Je?Oe.count=Math.max(Oe.count,Ue.start+Ue.count-Oe.start):(++Te,Ae[Te]=Ue)}Ae.length=Te+1;const pe=i.getParameter(r.UNPACK_ROW_LENGTH),me=i.getParameter(r.UNPACK_SKIP_PIXELS),Ce=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ze=0,Oe=Ae.length;ze<Oe;ze++){const Ue=Ae[ze],Qe=Math.floor(Ue.start/4),Je=Math.ceil(Ue.count/4),at=Qe%S.width,j=Math.floor(Qe/S.width),Re=Je,ve=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,at),i.pixelStorei(r.UNPACK_SKIP_ROWS,j),i.texSubImage2D(r.TEXTURE_2D,0,at,j,Re,ve,W,$,S.data)}N.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,pe),i.pixelStorei(r.UNPACK_SKIP_PIXELS,me),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ce)}}function Be(N,S,W){let $=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=r.TEXTURE_3D);const he=te(N,S),Ae=S.source;i.bindTexture($,N.__webglTexture,r.TEXTURE0+W);const Te=s.get(Ae);if(Ae.version!==Te.__version||he===!0){if(i.activeTexture(r.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ve=Et.getPrimaries(Et.workingColorSpace),Ne=S.colorSpace===us?null:Et.getPrimaries(S.colorSpace),Fe=S.colorSpace===us||ve===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}i.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let me=M(S.image,!1,l.maxTextureSize);me=st(S,me);const Ce=c.convert(S.format,S.colorSpace),ze=c.convert(S.type);let Oe=A(S.internalFormat,Ce,ze,S.normalized,S.colorSpace,S.isVideoTexture);De($,S);let Ue;const Qe=S.mipmaps,Je=S.isVideoTexture!==!0,at=Te.__version===void 0||he===!0,j=Ae.dataReady,Re=O(S,me);if(S.isDepthTexture)Oe=F(S.format===Vs,S.type),at&&(Je?i.texStorage2D(r.TEXTURE_2D,1,Oe,me.width,me.height):i.texImage2D(r.TEXTURE_2D,0,Oe,me.width,me.height,0,Ce,ze,null));else if(S.isDataTexture)if(Qe.length>0){Je&&at&&i.texStorage2D(r.TEXTURE_2D,Re,Oe,Qe[0].width,Qe[0].height);for(let ve=0,Ne=Qe.length;ve<Ne;ve++)Ue=Qe[ve],Je?j&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Ce,ze,Ue.data):i.texImage2D(r.TEXTURE_2D,ve,Oe,Ue.width,Ue.height,0,Ce,ze,Ue.data);S.generateMipmaps=!1}else Je?(at&&i.texStorage2D(r.TEXTURE_2D,Re,Oe,me.width,me.height),j&&Me(S,me,Ce,ze)):i.texImage2D(r.TEXTURE_2D,0,Oe,me.width,me.height,0,Ce,ze,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Je&&at&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Oe,Qe[0].width,Qe[0].height,me.depth);for(let ve=0,Ne=Qe.length;ve<Ne;ve++)if(Ue=Qe[ve],S.format!==Pi)if(Ce!==null)if(Je){if(j)if(S.layerUpdates.size>0){const Fe=Dx(Ue.width,Ue.height,S.format,S.type);for(const Ee of S.layerUpdates){const qe=Ue.data.subarray(Ee*Fe/Ue.data.BYTES_PER_ELEMENT,(Ee+1)*Fe/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,Ee,Ue.width,Ue.height,1,Ce,qe)}S.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,me.depth,Ce,Ue.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,Oe,Ue.width,Ue.height,me.depth,0,Ue.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?j&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,me.depth,Ce,ze,Ue.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ve,Oe,Ue.width,Ue.height,me.depth,0,Ce,ze,Ue.data)}else{Je&&at&&i.texStorage2D(r.TEXTURE_2D,Re,Oe,Qe[0].width,Qe[0].height);for(let ve=0,Ne=Qe.length;ve<Ne;ve++)Ue=Qe[ve],S.format!==Pi?Ce!==null?Je?j&&i.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Ce,Ue.data):i.compressedTexImage2D(r.TEXTURE_2D,ve,Oe,Ue.width,Ue.height,0,Ue.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?j&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Ce,ze,Ue.data):i.texImage2D(r.TEXTURE_2D,ve,Oe,Ue.width,Ue.height,0,Ce,ze,Ue.data)}else if(S.isDataArrayTexture)if(Je){if(at&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Oe,me.width,me.height,me.depth),j)if(S.layerUpdates.size>0){const ve=Dx(me.width,me.height,S.format,S.type);for(const Ne of S.layerUpdates){const Fe=me.data.subarray(Ne*ve/me.data.BYTES_PER_ELEMENT,(Ne+1)*ve/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ne,me.width,me.height,1,Ce,ze,Fe)}S.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ce,ze,me.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,me.width,me.height,me.depth,0,Ce,ze,me.data);else if(S.isData3DTexture)Je?(at&&i.texStorage3D(r.TEXTURE_3D,Re,Oe,me.width,me.height,me.depth),j&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ce,ze,me.data)):i.texImage3D(r.TEXTURE_3D,0,Oe,me.width,me.height,me.depth,0,Ce,ze,me.data);else if(S.isFramebufferTexture){if(at)if(Je)i.texStorage2D(r.TEXTURE_2D,Re,Oe,me.width,me.height);else{let ve=me.width,Ne=me.height;for(let Fe=0;Fe<Re;Fe++)i.texImage2D(r.TEXTURE_2D,Fe,Oe,ve,Ne,0,Ce,ze,null),ve>>=1,Ne>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){const ve=r.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),me.parentNode!==ve){ve.appendChild(me),_.add(S),ve.onpaint=Ne=>{const Fe=Ne.changedElements;for(const Ee of _)Fe.includes(Ee.image)&&(Ee.needsUpdate=!0)},ve.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,me);else{const Fe=r.RGBA,Ee=r.RGBA,qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Fe,Ee,qe,me)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(Je&&at){const ve=At(Qe[0]);i.texStorage2D(r.TEXTURE_2D,Re,Oe,ve.width,ve.height)}for(let ve=0,Ne=Qe.length;ve<Ne;ve++)Ue=Qe[ve],Je?j&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ce,ze,Ue):i.texImage2D(r.TEXTURE_2D,ve,Oe,Ce,ze,Ue);S.generateMipmaps=!1}else if(Je){if(at){const ve=At(me);i.texStorage2D(r.TEXTURE_2D,Re,Oe,ve.width,ve.height)}j&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,ze,me)}else i.texImage2D(r.TEXTURE_2D,0,Oe,Ce,ze,me);b(S)&&z($),Te.__version=Ae.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function nt(N,S,W){if(S.image.length!==6)return;const $=te(N,S),he=S.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+W);const Ae=s.get(he);if(he.version!==Ae.__version||$===!0){i.activeTexture(r.TEXTURE0+W);const Te=Et.getPrimaries(Et.workingColorSpace),pe=S.colorSpace===us?null:Et.getPrimaries(S.colorSpace),me=S.colorSpace===us||Te===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ce=S.isCompressedTexture||S.image[0].isCompressedTexture,ze=S.image[0]&&S.image[0].isDataTexture,Oe=[];for(let Ee=0;Ee<6;Ee++)!Ce&&!ze?Oe[Ee]=M(S.image[Ee],!0,l.maxCubemapSize):Oe[Ee]=ze?S.image[Ee].image:S.image[Ee],Oe[Ee]=st(S,Oe[Ee]);const Ue=Oe[0],Qe=c.convert(S.format,S.colorSpace),Je=c.convert(S.type),at=A(S.internalFormat,Qe,Je,S.normalized,S.colorSpace),j=S.isVideoTexture!==!0,Re=Ae.__version===void 0||$===!0,ve=he.dataReady;let Ne=O(S,Ue);De(r.TEXTURE_CUBE_MAP,S);let Fe;if(Ce){j&&Re&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,at,Ue.width,Ue.height);for(let Ee=0;Ee<6;Ee++){Fe=Oe[Ee].mipmaps;for(let qe=0;qe<Fe.length;qe++){const ke=Fe[qe];S.format!==Pi?Qe!==null?j?ve&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,0,0,ke.width,ke.height,Qe,ke.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,at,ke.width,ke.height,0,ke.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,0,0,ke.width,ke.height,Qe,Je,ke.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,at,ke.width,ke.height,0,Qe,Je,ke.data)}}}else{if(Fe=S.mipmaps,j&&Re){Fe.length>0&&Ne++;const Ee=At(Oe[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,at,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(ze){j?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Oe[Ee].width,Oe[Ee].height,Qe,Je,Oe[Ee].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,Oe[Ee].width,Oe[Ee].height,0,Qe,Je,Oe[Ee].data);for(let qe=0;qe<Fe.length;qe++){const nn=Fe[qe].image[Ee].image;j?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,0,0,nn.width,nn.height,Qe,Je,nn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,at,nn.width,nn.height,0,Qe,Je,nn.data)}}else{j?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Qe,Je,Oe[Ee]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,Qe,Je,Oe[Ee]);for(let qe=0;qe<Fe.length;qe++){const ke=Fe[qe];j?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,0,0,Qe,Je,ke.image[Ee]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,at,Qe,Je,ke.image[Ee])}}}b(S)&&z(r.TEXTURE_CUBE_MAP),Ae.__version=he.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function Ke(N,S,W,$,he,Ae){const Te=c.convert(W.format,W.colorSpace),pe=c.convert(W.type),me=A(W.internalFormat,Te,pe,W.normalized,W.colorSpace),Ce=s.get(S),ze=s.get(W);if(ze.__renderTarget=S,!Ce.__hasExternalTextures){const Oe=Math.max(1,S.width>>Ae),Ue=Math.max(1,S.height>>Ae);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?i.texImage3D(he,Ae,me,Oe,Ue,S.depth,0,Te,pe,null):i.texImage2D(he,Ae,me,Oe,Ue,0,Te,pe,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),Jt(S)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,he,ze.__webglTexture,0,Pt(S)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,he,ze.__webglTexture,Ae),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(N,S,W){if(r.bindRenderbuffer(r.RENDERBUFFER,N),S.depthBuffer){const $=S.depthTexture,he=$&&$.isDepthTexture?$.type:null,Ae=F(S.stencilBuffer,he),Te=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Jt(S)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pt(S),Ae,S.width,S.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt(S),Ae,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,N)}else{const $=S.textures;for(let he=0;he<$.length;he++){const Ae=$[he],Te=c.convert(Ae.format,Ae.colorSpace),pe=c.convert(Ae.type),me=A(Ae.internalFormat,Te,pe,Ae.normalized,Ae.colorSpace);Jt(S)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pt(S),me,S.width,S.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt(S),me,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,me,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ft(N,S,W){const $=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=s.get(S.depthTexture);if(he.__renderTarget=S,(!he.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(he.__webglInit===void 0&&(he.__webglInit=!0,S.depthTexture.addEventListener("dispose",P)),he.__webglTexture===void 0){he.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),De(r.TEXTURE_CUBE_MAP,S.depthTexture);const Ce=c.convert(S.depthTexture.format),ze=c.convert(S.depthTexture.type);let Oe;S.depthTexture.format===Na?Oe=r.DEPTH_COMPONENT24:S.depthTexture.format===Vs&&(Oe=r.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Oe,S.width,S.height,0,Ce,ze,null)}}else ee(S.depthTexture,0);const Ae=he.__webglTexture,Te=Pt(S),pe=$?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,me=S.depthTexture.format===Vs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===Na)Jt(S)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,pe,Ae,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,me,pe,Ae,0);else if(S.depthTexture.format===Vs)Jt(S)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,pe,Ae,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,me,pe,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(N){const S=s.get(N),W=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){const $=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const he=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",he)};$.addEventListener("dispose",he),S.__depthDisposeCallback=he}S.__boundDepthTexture=$}if(N.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let $=0;$<6;$++)ft(S.__webglFramebuffer[$],N,$);else{const $=N.texture.mipmaps;$&&$.length>0?ft(S.__webglFramebuffer[0],N,0):ft(S.__webglFramebuffer,N,0)}else if(W){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=r.createRenderbuffer(),Ct(S.__webglDepthbuffer[$],N,!1);else{const he=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=S.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ae)}}else{const $=N.texture.mipmaps;if($&&$.length>0?i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ct(S.__webglDepthbuffer,N,!1);else{const he=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ae)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function pt(N,S,W){const $=s.get(N);S!==void 0&&Ke($.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&gt(N)}function dt(N){const S=N.texture,W=s.get(N),$=s.get(S);N.addEventListener("dispose",T);const he=N.textures,Ae=N.isWebGLCubeRenderTarget===!0,Te=he.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=S.version,d.memory.textures++),Ae){W.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[pe]=[];for(let me=0;me<S.mipmaps.length;me++)W.__webglFramebuffer[pe][me]=r.createFramebuffer()}else W.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)W.__webglFramebuffer[pe]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Te)for(let pe=0,me=he.length;pe<me;pe++){const Ce=s.get(he[pe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),d.memory.textures++)}if(N.samples>0&&Jt(N)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const me=he[pe];W.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[pe]);const Ce=c.convert(me.format,me.colorSpace),ze=c.convert(me.type),Oe=A(me.internalFormat,Ce,ze,me.normalized,me.colorSpace,N.isXRRenderTarget===!0),Ue=Pt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,Oe,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,W.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Ct(W.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),De(r.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)Ke(W.__webglFramebuffer[pe][me],N,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else Ke(W.__webglFramebuffer[pe],N,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);b(S)&&z(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Te){for(let pe=0,me=he.length;pe<me;pe++){const Ce=he[pe],ze=s.get(Ce);let Oe=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Oe=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Oe,ze.__webglTexture),De(Oe,Ce),Ke(W.__webglFramebuffer,N,Ce,r.COLOR_ATTACHMENT0+pe,Oe,0),b(Ce)&&z(Oe)}i.unbindTexture()}else{let pe=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(pe=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(pe,$.__webglTexture),De(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)Ke(W.__webglFramebuffer[me],N,S,r.COLOR_ATTACHMENT0,pe,me);else Ke(W.__webglFramebuffer,N,S,r.COLOR_ATTACHMENT0,pe,0);b(S)&&z(pe),i.unbindTexture()}N.depthBuffer&&gt(N)}function Yt(N){const S=N.textures;for(let W=0,$=S.length;W<$;W++){const he=S[W];if(b(he)){const Ae=B(N),Te=s.get(he).__webglTexture;i.bindTexture(Ae,Te),z(Ae),i.unbindTexture()}}}const Kt=[],Qt=[];function tn(N){if(N.samples>0){if(Jt(N)===!1){const S=N.textures,W=N.width,$=N.height;let he=r.COLOR_BUFFER_BIT;const Ae=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=s.get(N),pe=S.length>1;if(pe)for(let Ce=0;Ce<S.length;Ce++)i.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const me=N.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Ce]);const ze=s.get(S[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ze,0)}r.blitFramebuffer(0,0,W,$,0,0,W,$,he,r.NEAREST),m===!0&&(Kt.length=0,Qt.length=0,Kt.push(r.COLOR_ATTACHMENT0+Ce),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Kt.push(Ae),Qt.push(Ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Kt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<S.length;Ce++){i.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Ce]);const ze=s.get(S[Ce]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,ze,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const S=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Pt(N){return Math.min(l.maxSamples,N.samples)}function Jt(N){const S=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Y(N){const S=d.render.frame;y.get(N)!==S&&(y.set(N,S),N.update())}function st(N,S){const W=N.colorSpace,$=N.format,he=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==eu&&W!==us&&(Et.getTransfer(W)===Vt?($!==Pi||he!==di)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",W)),S}function At(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=I,this.resetTextureUnits=ce,this.getTextureUnits=fe,this.setTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=ge,this.setTexture3D=de,this.setTextureCube=D,this.rebindTextures=pt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function BA(r,e){function i(s,l=us){let c;const d=Et.getTransfer(l);if(s===di)return r.UNSIGNED_BYTE;if(s===Zh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Kh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Tv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Av)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Mv)return r.BYTE;if(s===Ev)return r.SHORT;if(s===il)return r.UNSIGNED_SHORT;if(s===Yh)return r.INT;if(s===Qi)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Ca)return r.HALF_FLOAT;if(s===wv)return r.ALPHA;if(s===Rv)return r.RGB;if(s===Pi)return r.RGBA;if(s===Na)return r.DEPTH_COMPONENT;if(s===Vs)return r.DEPTH_STENCIL;if(s===Cv)return r.RED;if(s===Qh)return r.RED_INTEGER;if(s===Xs)return r.RG;if(s===Jh)return r.RG_INTEGER;if(s===$h)return r.RGBA_INTEGER;if(s===Wc||s===qc||s===Yc||s===Zc)if(d===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Wc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Wc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fh||s===dh||s===hh||s===ph)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===fh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ph)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mh||s===gh||s===xh||s===vh||s===_h||s===Jc||s===yh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===mh||s===gh)return d===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===xh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===vh)return c.COMPRESSED_R11_EAC;if(s===_h)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Jc)return c.COMPRESSED_RG11_EAC;if(s===yh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===bh||s===Sh||s===Mh||s===Eh||s===Th||s===Ah||s===wh||s===Rh||s===Ch||s===Nh||s===Dh||s===Uh||s===Lh||s===Oh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===bh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Eh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Th)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ah)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ch)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Uh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Oh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ph||s===Ih||s===Bh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Ph)return d===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ih)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Bh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fh||s===zh||s===$c||s===Gh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Fh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===zh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$c)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===al?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const FA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Bv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ji({vertexShader:FA,fragmentShader:zA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Sn(new fl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HA extends Ws{constructor(e,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,y=null,_=null,g=null,E=null,w=null;const U=typeof XRWebGLBinding<"u",M=new GA,b={},z=i.getContextAttributes();let B=null,A=null;const F=[],O=[],P=new Tt;let T=null;const L=new Mi;L.viewport=new on;const X=new Mi;X.viewport=new on;const V=[L,X],q=new QS;let ce=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let be=F[te];return be===void 0&&(be=new Cd,F[te]=be),be.getTargetRaySpace()},this.getControllerGrip=function(te){let be=F[te];return be===void 0&&(be=new Cd,F[te]=be),be.getGripSpace()},this.getHand=function(te){let be=F[te];return be===void 0&&(be=new Cd,F[te]=be),be.getHandSpace()};function J(te){const be=O.indexOf(te.inputSource);if(be===-1)return;const Me=F[be];Me!==void 0&&(Me.update(te.inputSource,te.frame,h||d),Me.dispatchEvent({type:te.type,data:te.inputSource}))}function I(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",G);for(let te=0;te<F.length;te++){const be=O[te];be!==null&&(O[te]=null,F[te].disconnect(be))}ce=null,fe=null,M.reset();for(const te in b)delete b[te];e.setRenderTarget(B),E=null,g=null,_=null,l=null,A=null,De.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,s.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){p=te,s.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return _===null&&U&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(B=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",I),l.addEventListener("inputsourceschange",G),z.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Be=null,nt=null;z.depth&&(nt=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=z.stencil?Vs:Na,Be=z.stencil?al:Qi);const Ke={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(Ke),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),A=new Zi(g.textureWidth,g.textureHeight,{format:Pi,type:di,depthTexture:new Zr(g.textureWidth,g.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),A=new Zi(E.framebufferWidth,E.framebufferHeight,{format:Pi,type:di,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),De.setContext(l),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(te){for(let be=0;be<te.removed.length;be++){const Me=te.removed[be],Be=O.indexOf(Me);Be>=0&&(O[Be]=null,F[Be].disconnect(Me))}for(let be=0;be<te.added.length;be++){const Me=te.added[be];let Be=O.indexOf(Me);if(Be===-1){for(let Ke=0;Ke<F.length;Ke++)if(Ke>=O.length){O.push(Me),Be=Ke;break}else if(O[Ke]===null){O[Ke]=Me,Be=Ke;break}if(Be===-1)break}const nt=F[Be];nt&&nt.connect(Me)}}const ee=new re,ge=new re;function de(te,be,Me){ee.setFromMatrixPosition(be.matrixWorld),ge.setFromMatrixPosition(Me.matrixWorld);const Be=ee.distanceTo(ge),nt=be.projectionMatrix.elements,Ke=Me.projectionMatrix.elements,Ct=nt[14]/(nt[10]-1),ft=nt[14]/(nt[10]+1),gt=(nt[9]+1)/nt[5],pt=(nt[9]-1)/nt[5],dt=(nt[8]-1)/nt[0],Yt=(Ke[8]+1)/Ke[0],Kt=Ct*dt,Qt=Ct*Yt,tn=Be/(-dt+Yt),Pt=tn*-dt;if(be.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Pt),te.translateZ(tn),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),nt[10]===-1)te.projectionMatrix.copy(be.projectionMatrix),te.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const Jt=Ct+tn,Y=ft+tn,st=Kt-Pt,At=Qt+(Be-Pt),N=gt*ft/Y*Jt,S=pt*ft/Y*Jt;te.projectionMatrix.makePerspective(st,At,N,S,Jt,Y),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function D(te,be){be===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(be.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let be=te.near,Me=te.far;M.texture!==null&&(M.depthNear>0&&(be=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),q.near=X.near=L.near=be,q.far=X.far=L.far=Me,(ce!==q.near||fe!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),ce=q.near,fe=q.far),q.layers.mask=te.layers.mask|6,L.layers.mask=q.layers.mask&-5,X.layers.mask=q.layers.mask&-3;const Be=te.parent,nt=q.cameras;D(q,Be);for(let Ke=0;Ke<nt.length;Ke++)D(nt[Ke],Be);nt.length===2?de(q,L,X):q.projectionMatrix.copy(L.projectionMatrix),K(te,q,Be)};function K(te,be,Me){Me===null?te.matrix.copy(be.matrixWorld):(te.matrix.copy(Me.matrixWorld),te.matrix.invert(),te.matrix.multiply(be.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(be.projectionMatrix),te.projectionMatrixInverse.copy(be.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=rl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(te){m=te,g!==null&&(g.fixedFoveation=te),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(te){return b[te]};let Se=null;function we(te,be){if(y=be.getViewerPose(h||d),w=be,y!==null){const Me=y.views;E!==null&&(e.setRenderTargetFramebuffer(A,E.framebuffer),e.setRenderTarget(A));let Be=!1;Me.length!==q.cameras.length&&(q.cameras.length=0,Be=!0);for(let ft=0;ft<Me.length;ft++){const gt=Me[ft];let pt=null;if(E!==null)pt=E.getViewport(gt);else{const Yt=_.getViewSubImage(g,gt);pt=Yt.viewport,ft===0&&(e.setRenderTargetTextures(A,Yt.colorTexture,Yt.depthStencilTexture),e.setRenderTarget(A))}let dt=V[ft];dt===void 0&&(dt=new Mi,dt.layers.enable(ft),dt.viewport=new on,V[ft]=dt),dt.matrix.fromArray(gt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(gt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(pt.x,pt.y,pt.width,pt.height),ft===0&&(q.matrix.copy(dt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Be===!0&&q.cameras.push(dt)}const nt=l.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){_=s.getBinding();const ft=_.getDepthInformation(Me[0]);ft&&ft.isValid&&ft.texture&&M.init(ft,l.renderState)}if(nt&&nt.includes("camera-access")&&U){e.state.unbindTexture(),_=s.getBinding();for(let ft=0;ft<Me.length;ft++){const gt=Me[ft].camera;if(gt){let pt=b[gt];pt||(pt=new Bv,b[gt]=pt);const dt=_.getCameraImage(gt);pt.sourceTexture=dt}}}}for(let Me=0;Me<F.length;Me++){const Be=O[Me],nt=F[Me];Be!==null&&nt!==void 0&&nt.update(Be,be,h||d)}Se&&Se(te,be),be.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:be}),w=null}const De=new Hv;De.setAnimationLoop(we),this.setAnimationLoop=function(te){Se=te},this.dispose=function(){}}}const VA=new un,Yv=new ot;Yv.set(-1,0,0,0,1,0,0,0,1);function kA(r,e){function i(M,b){M.matrixAutoUpdate===!0&&M.updateMatrix(),b.value.copy(M.matrix)}function s(M,b){b.color.getRGB(M.fogColor.value,Fv(r)),b.isFog?(M.fogNear.value=b.near,M.fogFar.value=b.far):b.isFogExp2&&(M.fogDensity.value=b.density)}function l(M,b,z,B,A){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?c(M,b):b.isMeshLambertMaterial?(c(M,b),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(c(M,b),_(M,b)):b.isMeshPhongMaterial?(c(M,b),y(M,b),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(c(M,b),g(M,b),b.isMeshPhysicalMaterial&&E(M,b,A)):b.isMeshMatcapMaterial?(c(M,b),w(M,b)):b.isMeshDepthMaterial?c(M,b):b.isMeshDistanceMaterial?(c(M,b),U(M,b)):b.isMeshNormalMaterial?c(M,b):b.isLineBasicMaterial?(d(M,b),b.isLineDashedMaterial&&p(M,b)):b.isPointsMaterial?m(M,b,z,B):b.isSpriteMaterial?h(M,b):b.isShadowMaterial?(M.color.value.copy(b.color),M.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function c(M,b){M.opacity.value=b.opacity,b.color&&M.diffuse.value.copy(b.color),b.emissive&&M.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(M.map.value=b.map,i(b.map,M.mapTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.bumpMap&&(M.bumpMap.value=b.bumpMap,i(b.bumpMap,M.bumpMapTransform),M.bumpScale.value=b.bumpScale,b.side===Jn&&(M.bumpScale.value*=-1)),b.normalMap&&(M.normalMap.value=b.normalMap,i(b.normalMap,M.normalMapTransform),M.normalScale.value.copy(b.normalScale),b.side===Jn&&M.normalScale.value.negate()),b.displacementMap&&(M.displacementMap.value=b.displacementMap,i(b.displacementMap,M.displacementMapTransform),M.displacementScale.value=b.displacementScale,M.displacementBias.value=b.displacementBias),b.emissiveMap&&(M.emissiveMap.value=b.emissiveMap,i(b.emissiveMap,M.emissiveMapTransform)),b.specularMap&&(M.specularMap.value=b.specularMap,i(b.specularMap,M.specularMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest);const z=e.get(b),B=z.envMap,A=z.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4(VA.makeRotationFromEuler(A)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Yv),M.reflectivity.value=b.reflectivity,M.ior.value=b.ior,M.refractionRatio.value=b.refractionRatio),b.lightMap&&(M.lightMap.value=b.lightMap,M.lightMapIntensity.value=b.lightMapIntensity,i(b.lightMap,M.lightMapTransform)),b.aoMap&&(M.aoMap.value=b.aoMap,M.aoMapIntensity.value=b.aoMapIntensity,i(b.aoMap,M.aoMapTransform))}function d(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,b.map&&(M.map.value=b.map,i(b.map,M.mapTransform))}function p(M,b){M.dashSize.value=b.dashSize,M.totalSize.value=b.dashSize+b.gapSize,M.scale.value=b.scale}function m(M,b,z,B){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.size.value=b.size*z,M.scale.value=B*.5,b.map&&(M.map.value=b.map,i(b.map,M.uvTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest)}function h(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.rotation.value=b.rotation,b.map&&(M.map.value=b.map,i(b.map,M.mapTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest)}function y(M,b){M.specular.value.copy(b.specular),M.shininess.value=Math.max(b.shininess,1e-4)}function _(M,b){b.gradientMap&&(M.gradientMap.value=b.gradientMap)}function g(M,b){M.metalness.value=b.metalness,b.metalnessMap&&(M.metalnessMap.value=b.metalnessMap,i(b.metalnessMap,M.metalnessMapTransform)),M.roughness.value=b.roughness,b.roughnessMap&&(M.roughnessMap.value=b.roughnessMap,i(b.roughnessMap,M.roughnessMapTransform)),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)}function E(M,b,z){M.ior.value=b.ior,b.sheen>0&&(M.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),M.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(M.sheenColorMap.value=b.sheenColorMap,i(b.sheenColorMap,M.sheenColorMapTransform)),b.sheenRoughnessMap&&(M.sheenRoughnessMap.value=b.sheenRoughnessMap,i(b.sheenRoughnessMap,M.sheenRoughnessMapTransform))),b.clearcoat>0&&(M.clearcoat.value=b.clearcoat,M.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(M.clearcoatMap.value=b.clearcoatMap,i(b.clearcoatMap,M.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,i(b.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(M.clearcoatNormalMap.value=b.clearcoatNormalMap,i(b.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===Jn&&M.clearcoatNormalScale.value.negate())),b.dispersion>0&&(M.dispersion.value=b.dispersion),b.iridescence>0&&(M.iridescence.value=b.iridescence,M.iridescenceIOR.value=b.iridescenceIOR,M.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(M.iridescenceMap.value=b.iridescenceMap,i(b.iridescenceMap,M.iridescenceMapTransform)),b.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=b.iridescenceThicknessMap,i(b.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),b.transmission>0&&(M.transmission.value=b.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),b.transmissionMap&&(M.transmissionMap.value=b.transmissionMap,i(b.transmissionMap,M.transmissionMapTransform)),M.thickness.value=b.thickness,b.thicknessMap&&(M.thicknessMap.value=b.thicknessMap,i(b.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=b.attenuationDistance,M.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(M.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(M.anisotropyMap.value=b.anisotropyMap,i(b.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=b.specularIntensity,M.specularColor.value.copy(b.specularColor),b.specularColorMap&&(M.specularColorMap.value=b.specularColorMap,i(b.specularColorMap,M.specularColorMapTransform)),b.specularIntensityMap&&(M.specularIntensityMap.value=b.specularIntensityMap,i(b.specularIntensityMap,M.specularIntensityMapTransform))}function w(M,b){b.matcap&&(M.matcap.value=b.matcap)}function U(M,b){const z=e.get(b).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function XA(r,e,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,F){const O=F.program;s.uniformBlockBinding(A,O)}function h(A,F){let O=l[A.id];O===void 0&&(M(A),O=y(A),l[A.id]=O,A.addEventListener("dispose",z));const P=F.program;s.updateUBOMapping(A,P);const T=e.render.frame;c[A.id]!==T&&(g(A),c[A.id]=T)}function y(A){const F=_();A.__bindingPointIndex=F;const O=r.createBuffer(),P=A.__size,T=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,O),r.bufferData(r.UNIFORM_BUFFER,P,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,F,O),O}function _(){for(let A=0;A<p;A++)if(d.indexOf(A)===-1)return d.push(A),A;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const F=l[A.id],O=A.uniforms,P=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,F);for(let T=0,L=O.length;T<L;T++){const X=O[T];if(Array.isArray(X))for(let V=0,q=X.length;V<q;V++)E(X[V],T,V,P);else E(X,T,0,P)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(A,F,O,P){if(U(A,F,O,P)===!0){const T=A.__offset,L=A.value;if(Array.isArray(L)){let X=0;for(let V=0;V<L.length;V++){const q=L[V],ce=b(q);w(q,A.__data,X),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(X+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(L,A.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,A.__data)}}function w(A,F,O){typeof A=="number"||typeof A=="boolean"?F[0]=A:A.isMatrix3?(F[0]=A.elements[0],F[1]=A.elements[1],F[2]=A.elements[2],F[3]=0,F[4]=A.elements[3],F[5]=A.elements[4],F[6]=A.elements[5],F[7]=0,F[8]=A.elements[6],F[9]=A.elements[7],F[10]=A.elements[8],F[11]=0):ArrayBuffer.isView(A)?F.set(new A.constructor(A.buffer,A.byteOffset,F.length)):A.toArray(F,O)}function U(A,F,O,P){const T=A.value,L=F+"_"+O;if(P[L]===void 0)return typeof T=="number"||typeof T=="boolean"?P[L]=T:ArrayBuffer.isView(T)?P[L]=T.slice():P[L]=T.clone(),!0;{const X=P[L];if(typeof T=="number"||typeof T=="boolean"){if(X!==T)return P[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(X.equals(T)===!1)return X.copy(T),!0}}return!1}function M(A){const F=A.uniforms;let O=0;const P=16;for(let L=0,X=F.length;L<X;L++){const V=Array.isArray(F[L])?F[L]:[F[L]];for(let q=0,ce=V.length;q<ce;q++){const fe=V[q],J=Array.isArray(fe.value)?fe.value:[fe.value];for(let I=0,G=J.length;I<G;I++){const ee=J[I],ge=b(ee),de=O%P,D=de%ge.boundary,K=de+D;O+=D,K!==0&&P-K<ge.storage&&(O+=P-K),fe.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=O,O+=ge.storage}}}const T=O%P;return T>0&&(O+=P-T),A.__size=O,A.__cache={},this}function b(A){const F={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(F.boundary=4,F.storage=4):A.isVector2?(F.boundary=8,F.storage=8):A.isVector3||A.isColor?(F.boundary=16,F.storage=12):A.isVector4?(F.boundary=16,F.storage=16):A.isMatrix3?(F.boundary=48,F.storage=48):A.isMatrix4?(F.boundary=64,F.storage=64):A.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(F.boundary=16,F.storage=A.byteLength):it("WebGLRenderer: Unsupported uniform value type.",A),F}function z(A){const F=A.target;F.removeEventListener("dispose",z);const O=d.indexOf(F.__bindingPointIndex);d.splice(O,1),r.deleteBuffer(l[F.id]),delete l[F.id],delete c[F.id]}function B(){for(const A in l)r.deleteBuffer(l[A]);d=[],l={},c={}}return{bind:m,update:h,dispose:B}}const jA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function WA(){return ki===null&&(ki=new OS(jA,16,16,Xs,Ca),ki.name="DFG_LUT",ki.minFilter=zn,ki.magFilter=zn,ki.wrapS=Aa,ki.wrapT=Aa,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class qA{constructor(e={}){const{canvas:i=Zb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:E=di}=e;this.isWebGLRenderer=!0;let w;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=s.getContextAttributes().alpha}else w=d;const U=E,M=new Set([$h,Jh,Qh]),b=new Set([di,Qi,il,al,Zh,Kh]),z=new Uint32Array(4),B=new Int32Array(4),A=new re;let F=null,O=null;const P=[],T=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let V=!1,q=null,ce=null,fe=null,J=null;this._outputColorSpace=Si;let I=0,G=0,ee=null,ge=-1,de=null;const D=new on,K=new on;let Se=null;const we=new wt(0);let De=0,te=i.width,be=i.height,Me=1,Be=null,nt=null;const Ke=new on(0,0,te,be),Ct=new on(0,0,te,be);let ft=!1;const gt=new rp;let pt=!1,dt=!1;const Yt=new un,Kt=new re,Qt=new on,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Jt(){return ee===null?Me:1}let Y=s;function st(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:y,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wh}`),i.addEventListener("webglcontextlost",nn,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",$n,!1),Y===null){const Z="webgl2";if(Y=st(Z,R),Y===null)throw st(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Rt("WebGLRenderer: "+R.message),R}let At,N,S,W,$,he,Ae,Te,pe,me,Ce,ze,Oe,Ue,Qe,Je,at,j,Re,ve,Ne,Fe,Ee;function qe(){At=new WE(Y),At.init(),Ne=new BA(Y,At),N=new FE(Y,At,e,Ne),S=new PA(Y,At),N.reversedDepthBuffer&&g&&S.buffers.depth.setReversed(!0),ce=Y.createFramebuffer(),fe=Y.createFramebuffer(),J=Y.createFramebuffer(),W=new ZE(Y),$=new bA,he=new IA(Y,At,S,$,N,Ne,W),Ae=new jE(X),Te=new $S(Y),Fe=new IE(Y,Te),pe=new qE(Y,Te,W,Fe),me=new QE(Y,pe,Te,Fe,W),j=new KE(Y,N,he),Qe=new zE($),Ce=new yA(X,Ae,At,N,Fe,Qe),ze=new kA(X,$),Oe=new MA,Ue=new CA(At),at=new PE(X,Ae,S,me,w,m),Je=new OA(X,me,N),Ee=new XA(Y,W,N,S),Re=new BE(Y,At,W),ve=new YE(Y,At,W),W.programs=Ce.programs,X.capabilities=N,X.extensions=At,X.properties=$,X.renderLists=Oe,X.shadowMap=Je,X.state=S,X.info=W}qe(),U!==di&&(L=new $E(U,i.width,i.height,p,l,c));const ke=new HA(X,Y);this.xr=ke,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const R=At.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=At.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(R){R!==void 0&&(Me=R,this.setSize(te,be,!1))},this.getSize=function(R){return R.set(te,be)},this.setSize=function(R,Z,oe=!0){if(ke.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}te=R,be=Z,i.width=Math.floor(R*Me),i.height=Math.floor(Z*Me),oe===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(te*Me,be*Me).floor()},this.setDrawingBufferSize=function(R,Z,oe){te=R,be=Z,Me=oe,i.width=Math.floor(R*oe),i.height=Math.floor(Z*oe),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(U===di){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Ke)},this.setViewport=function(R,Z,oe,ae){R.isVector4?Ke.set(R.x,R.y,R.z,R.w):Ke.set(R,Z,oe,ae),S.viewport(D.copy(Ke).multiplyScalar(Me).round())},this.getScissor=function(R){return R.copy(Ct)},this.setScissor=function(R,Z,oe,ae){R.isVector4?Ct.set(R.x,R.y,R.z,R.w):Ct.set(R,Z,oe,ae),S.scissor(K.copy(Ct).multiplyScalar(Me).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(R){S.setScissorTest(ft=R)},this.setOpaqueSort=function(R){Be=R},this.setTransparentSort=function(R){nt=R},this.getClearColor=function(R){return R.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,oe=!0){let ae=0;if(R){let se=!1;if(ee!==null){const Pe=ee.texture.format;se=M.has(Pe)}if(se){const Pe=ee.texture.type,Ve=b.has(Pe),Le=at.getClearColor(),je=at.getClearAlpha(),Xe=Le.r,$e=Le.g,lt=Le.b;Ve?(z[0]=Xe,z[1]=$e,z[2]=lt,z[3]=je,Y.clearBufferuiv(Y.COLOR,0,z)):(B[0]=Xe,B[1]=$e,B[2]=lt,B[3]=je,Y.clearBufferiv(Y.COLOR,0,B))}else ae|=Y.COLOR_BUFFER_BIT}Z&&(ae|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ae|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Y.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){i.removeEventListener("webglcontextlost",nn,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",$n,!1),at.dispose(),Oe.dispose(),Ue.dispose(),$.dispose(),Ae.dispose(),me.dispose(),Fe.dispose(),Ee.dispose(),Ce.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",hn),ke.removeEventListener("sessionend",wn),jn.stop()};function nn(R){R.preventDefault(),cx("WebGLRenderer: Context Lost."),V=!0}function It(){cx("WebGLRenderer: Context Restored."),V=!1;const R=W.autoReset,Z=Je.enabled,oe=Je.autoUpdate,ae=Je.needsUpdate,se=Je.type;qe(),W.autoReset=R,Je.enabled=Z,Je.autoUpdate=oe,Je.needsUpdate=ae,Je.type=se}function $n(R){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ei(R){const Z=R.target;Z.removeEventListener("dispose",ei),eo(Z)}function eo(R){to(R),$.remove(R)}function to(R){const Z=$.get(R).programs;Z!==void 0&&(Z.forEach(function(oe){Ce.releaseProgram(oe)}),R.isShaderMaterial&&Ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,oe,ae,se,Pe){Z===null&&(Z=tn);const Ve=se.isMesh&&se.matrixWorld.determinantAffine()<0,Le=La(R,Z,oe,ae,se);S.setMaterial(ae,Ve);let je=oe.index,Xe=1;if(ae.wireframe===!0){if(je=pe.getWireframeAttribute(oe),je===void 0)return;Xe=2}const $e=oe.drawRange,lt=oe.attributes.position;let Ze=$e.start*Xe,Nt=($e.start+$e.count)*Xe;Pe!==null&&(Ze=Math.max(Ze,Pe.start*Xe),Nt=Math.min(Nt,(Pe.start+Pe.count)*Xe)),je!==null?(Ze=Math.max(Ze,0),Nt=Math.min(Nt,je.count)):lt!=null&&(Ze=Math.max(Ze,0),Nt=Math.min(Nt,lt.count));const an=Nt-Ze;if(an<0||an===1/0)return;Fe.setup(se,ae,Le,oe,je);let Wt,Bt=Re;if(je!==null&&(Wt=Te.get(je),Bt=ve,Bt.setIndex(Wt)),se.isMesh)ae.wireframe===!0?(S.setLineWidth(ae.wireframeLinewidth*Jt()),Bt.setMode(Y.LINES)):Bt.setMode(Y.TRIANGLES);else if(se.isLine){let Ft=ae.linewidth;Ft===void 0&&(Ft=1),S.setLineWidth(Ft*Jt()),se.isLineSegments?Bt.setMode(Y.LINES):se.isLineLoop?Bt.setMode(Y.LINE_LOOP):Bt.setMode(Y.LINE_STRIP)}else se.isPoints?Bt.setMode(Y.POINTS):se.isSprite&&Bt.setMode(Y.TRIANGLES);if(se.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Bt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const Ft=se._multiDrawStarts,Ge=se._multiDrawCounts,Pn=se._multiDrawCount,xt=je?Te.get(je).bytesPerElement:1,yn=$.get(ae).currentProgram.getUniforms();for(let ti=0;ti<Pn;ti++)yn.setValue(Y,"_gl_DrawID",ti),Bt.render(Ft[ti]/xt,Ge[ti])}else if(se.isInstancedMesh)Bt.renderInstances(Ze,an,se.count);else if(oe.isInstancedBufferGeometry){const Ft=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ge=Math.min(oe.instanceCount,Ft);Bt.renderInstances(Ze,an,Ge)}else Bt.render(Ze,an)};function no(R,Z,oe){R.transparent===!0&&R.side===Ta&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,Ua(R,Z,oe),R.side=hs,R.needsUpdate=!0,Ua(R,Z,oe),R.side=Ta):Ua(R,Z,oe)}this.compile=function(R,Z,oe=null){oe===null&&(oe=R),O=Ue.get(oe),O.init(Z),T.push(O),oe.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(O.pushLight(se),se.castShadow&&O.pushShadow(se))}),R!==oe&&R.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(O.pushLight(se),se.castShadow&&O.pushShadow(se))}),O.setupLights();const ae=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Pe=se.material;if(Pe)if(Array.isArray(Pe))for(let Ve=0;Ve<Pe.length;Ve++){const Le=Pe[Ve];no(Le,oe,se),ae.add(Le)}else no(Pe,oe,se),ae.add(Pe)}),O=T.pop(),ae},this.compileAsync=function(R,Z,oe=null){const ae=this.compile(R,Z,oe);return new Promise(se=>{function Pe(){if(ae.forEach(function(Ve){$.get(Ve).currentProgram.isReady()&&ae.delete(Ve)}),ae.size===0){se(R);return}setTimeout(Pe,10)}At.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Ys=null;function Ii(R){Ys&&Ys(R)}function hn(){jn.stop()}function wn(){jn.start()}const jn=new Hv;jn.setAnimationLoop(Ii),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(R){Ys=R,ke.setAnimationLoop(R),R===null?jn.stop():jn.start()},ke.addEventListener("sessionstart",hn),ke.addEventListener("sessionend",wn),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;q!==null&&q.renderStart(R,Z);const oe=ke.enabled===!0&&ke.isPresenting===!0,ae=L!==null&&(ee===null||oe)&&L.begin(X,ee);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(Z),Z=ke.getCamera()),R.isScene===!0&&R.onBeforeRender(X,R,Z,ee),O=Ue.get(R,T.length),O.init(Z),O.state.textureUnits=he.getTextureUnits(),T.push(O),Yt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),gt.setFromProjectionMatrix(Yt,qi,Z.reversedDepth),dt=this.localClippingEnabled,pt=Qe.init(this.clippingPlanes,dt),F=Oe.get(R,P.length),F.init(),P.push(F),ke.enabled===!0&&ke.isPresenting===!0){const Ve=X.xr.getDepthSensingMesh();Ve!==null&&ms(Ve,Z,-1/0,X.sortObjects)}ms(R,Z,0,X.sortObjects),F.finish(),X.sortObjects===!0&&F.sort(Be,nt,Z.reversedDepth),Pt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Pt&&at.addToRenderList(F,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&Qe.beginShadows();const se=O.state.shadowsArray;if(Je.render(se,R,Z),pt===!0&&Qe.endShadows(),(ae&&L.hasRenderPass())===!1){const Ve=F.opaque,Le=F.transmissive;if(O.setupLights(),Z.isArrayCamera){const je=Z.cameras;if(Le.length>0)for(let Xe=0,$e=je.length;Xe<$e;Xe++){const lt=je[Xe];hl(Ve,Le,R,lt)}Pt&&at.render(R);for(let Xe=0,$e=je.length;Xe<$e;Xe++){const lt=je[Xe];dl(F,R,lt,lt.viewport)}}else Le.length>0&&hl(Ve,Le,R,Z),Pt&&at.render(R),dl(F,R,Z)}ee!==null&&G===0&&(he.updateMultisampleRenderTarget(ee),he.updateRenderTargetMipmap(ee)),ae&&L.end(X),R.isScene===!0&&R.onAfterRender(X,R,Z),Fe.resetDefaultState(),ge=-1,de=null,T.pop(),T.length>0?(O=T[T.length-1],he.setTextureUnits(O.state.textureUnits),pt===!0&&Qe.setGlobalState(X.clippingPlanes,O.state.camera)):O=null,P.pop(),P.length>0?F=P[P.length-1]:F=null,q!==null&&q.renderEnd()};function ms(R,Z,oe,ae){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLightProbeGrid)O.pushLightProbeGrid(R);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||gt.intersectsSprite(R)){ae&&Qt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Yt);const Ve=me.update(R),Le=R.material;Le.visible&&F.push(R,Ve,Le,oe,Qt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||gt.intersectsObject(R))){const Ve=me.update(R),Le=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qt.copy(R.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Qt.copy(Ve.boundingSphere.center)),Qt.applyMatrix4(R.matrixWorld).applyMatrix4(Yt)),Array.isArray(Le)){const je=Ve.groups;for(let Xe=0,$e=je.length;Xe<$e;Xe++){const lt=je[Xe],Ze=Le[lt.materialIndex];Ze&&Ze.visible&&F.push(R,Ve,Ze,oe,Qt.z,lt)}}else Le.visible&&F.push(R,Ve,Le,oe,Qt.z,null)}}const Pe=R.children;for(let Ve=0,Le=Pe.length;Ve<Le;Ve++)ms(Pe[Ve],Z,oe,ae)}function dl(R,Z,oe,ae){const{opaque:se,transmissive:Pe,transparent:Ve}=R;O.setupLightsView(oe),pt===!0&&Qe.setGlobalState(X.clippingPlanes,oe),ae&&S.viewport(D.copy(ae)),se.length>0&&gs(se,Z,oe),Pe.length>0&&gs(Pe,Z,oe),Ve.length>0&&gs(Ve,Z,oe),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function hl(R,Z,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ae.id]===void 0){const Ze=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ae.id]=new Zi(1,1,{generateMipmaps:!0,type:Ze?Ca:di,minFilter:fs,samples:Math.max(4,N.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Pe=O.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||D;Pe.setSize(Ve.z*X.transmissionResolutionScale,Ve.w*X.transmissionResolutionScale);const Le=X.getRenderTarget(),je=X.getActiveCubeFace(),Xe=X.getActiveMipmapLevel();X.setRenderTarget(Pe),X.getClearColor(we),De=X.getClearAlpha(),De<1&&X.setClearColor(16777215,.5),X.clear(),Pt&&at.render(oe);const $e=X.toneMapping;X.toneMapping=Yi;const lt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),O.setupLightsView(ae),pt===!0&&Qe.setGlobalState(X.clippingPlanes,ae),gs(R,oe,ae),he.updateMultisampleRenderTarget(Pe),he.updateRenderTargetMipmap(Pe),At.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Nt=0,an=Z.length;Nt<an;Nt++){const Wt=Z[Nt],{object:Bt,geometry:Ft,material:Ge,group:Pn}=Wt;if(Ge.side===Ta&&Bt.layers.test(ae.layers)){const xt=Ge.side;Ge.side=Jn,Ge.needsUpdate=!0,Da(Bt,oe,ae,Ft,Ge,Pn),Ge.side=xt,Ge.needsUpdate=!0,Ze=!0}}Ze===!0&&(he.updateMultisampleRenderTarget(Pe),he.updateRenderTargetMipmap(Pe))}X.setRenderTarget(Le,je,Xe),X.setClearColor(we,De),lt!==void 0&&(ae.viewport=lt),X.toneMapping=$e}function gs(R,Z,oe){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let se=0,Pe=R.length;se<Pe;se++){const Ve=R[se],{object:Le,geometry:je,group:Xe}=Ve;let $e=Ve.material;$e.allowOverride===!0&&ae!==null&&($e=ae),Le.layers.test(oe.layers)&&Da(Le,Z,oe,je,$e,Xe)}}function Da(R,Z,oe,ae,se,Pe){R.onBeforeRender(X,Z,oe,ae,se,Pe),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(X,Z,oe,ae,R,Pe),se.transparent===!0&&se.side===Ta&&se.forceSinglePass===!1?(se.side=Jn,se.needsUpdate=!0,X.renderBufferDirect(oe,Z,ae,se,R,Pe),se.side=hs,se.needsUpdate=!0,X.renderBufferDirect(oe,Z,ae,se,R,Pe),se.side=Ta):X.renderBufferDirect(oe,Z,ae,se,R,Pe),R.onAfterRender(X,Z,oe,ae,se,Pe)}function Ua(R,Z,oe){Z.isScene!==!0&&(Z=tn);const ae=$.get(R),se=O.state.lights,Pe=O.state.shadowsArray,Ve=se.state.version,Le=Ce.getParameters(R,se.state,Pe,Z,oe,O.state.lightProbeGridArray),je=Ce.getProgramCacheKey(Le);let Xe=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,ae.fog=Z.fog;const $e=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=Ae.get(R.envMap||ae.environment,$e),ae.envMapRotation=ae.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",ei),Xe=new Map,ae.programs=Xe);let lt=Xe.get(je);if(lt!==void 0){if(ae.currentProgram===lt&&ae.lightsStateVersion===Ve)return ta(R,Le),lt}else Le.uniforms=Ce.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,oe,Le),R.onBeforeCompile(Le,X),lt=Ce.acquireProgram(Le,je),Xe.set(je,lt),ae.uniforms=Le.uniforms;const Ze=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Qe.uniform),ta(R,Le),ae.needsLights=pl(R),ae.lightsStateVersion=Ve,ae.needsLights&&(Ze.ambientLightColor.value=se.state.ambient,Ze.lightProbe.value=se.state.probe,Ze.directionalLights.value=se.state.directional,Ze.directionalLightShadows.value=se.state.directionalShadow,Ze.spotLights.value=se.state.spot,Ze.spotLightShadows.value=se.state.spotShadow,Ze.rectAreaLights.value=se.state.rectArea,Ze.ltc_1.value=se.state.rectAreaLTC1,Ze.ltc_2.value=se.state.rectAreaLTC2,Ze.pointLights.value=se.state.point,Ze.pointLightShadows.value=se.state.pointShadow,Ze.hemisphereLights.value=se.state.hemi,Ze.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ze.spotLightMatrix.value=se.state.spotLightMatrix,Ze.spotLightMap.value=se.state.spotLightMap,Ze.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.lightProbeGrid=O.state.lightProbeGridArray.length>0,ae.currentProgram=lt,ae.uniformsList=null,lt}function ea(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Kc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function ta(R,Z){const oe=$.get(R);oe.outputColorSpace=Z.outputColorSpace,oe.batching=Z.batching,oe.batchingColor=Z.batchingColor,oe.instancing=Z.instancing,oe.instancingColor=Z.instancingColor,oe.instancingMorph=Z.instancingMorph,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function xs(R,Z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;A.setFromMatrixPosition(Z.matrixWorld);for(let oe=0,ae=R.length;oe<ae;oe++){const se=R[oe];if(se.texture!==null&&se.boundingBox.containsPoint(A))return se}return null}function La(R,Z,oe,ae,se){Z.isScene!==!0&&(Z=tn),he.resetTextureUnits();const Pe=Z.fog,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Z.environment:null,Le=ee===null?X.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Et.workingColorSpace,je=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Xe=Ae.get(ae.envMap||Ve,je),$e=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,lt=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ze=!!oe.morphAttributes.position,Nt=!!oe.morphAttributes.normal,an=!!oe.morphAttributes.color;let Wt=Yi;ae.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Wt=X.toneMapping);const Bt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ft=Bt!==void 0?Bt.length:0,Ge=$.get(ae),Pn=O.state.lights;if(pt===!0&&(dt===!0||R!==de)){const Ot=R===de&&ae.id===ge;Qe.setState(ae,R,Ot)}let xt=!1;ae.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Pn.state.version||Ge.outputColorSpace!==Le||se.isBatchedMesh&&Ge.batching===!1||!se.isBatchedMesh&&Ge.batching===!0||se.isBatchedMesh&&Ge.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Ge.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Ge.instancing===!1||!se.isInstancedMesh&&Ge.instancing===!0||se.isSkinnedMesh&&Ge.skinning===!1||!se.isSkinnedMesh&&Ge.skinning===!0||se.isInstancedMesh&&Ge.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ge.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ge.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ge.instancingMorph===!1&&se.morphTexture!==null||Ge.envMap!==Xe||ae.fog===!0&&Ge.fog!==Pe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Qe.numPlanes||Ge.numIntersection!==Qe.numIntersection)||Ge.vertexAlphas!==$e||Ge.vertexTangents!==lt||Ge.morphTargets!==Ze||Ge.morphNormals!==Nt||Ge.morphColors!==an||Ge.toneMapping!==Wt||Ge.morphTargetsCount!==Ft||!!Ge.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Ge.__version=ae.version);let yn=Ge.currentProgram;xt===!0&&(yn=Ua(ae,Z,se),q&&ae.isNodeMaterial&&q.onUpdateProgram(ae,yn,Ge));let ti=!1,Ai=!1,ni=!1;const zt=yn.getUniforms(),sn=Ge.uniforms;if(S.useProgram(yn.program)&&(ti=!0,Ai=!0,ni=!0),ae.id!==ge&&(ge=ae.id,Ai=!0),Ge.needsLights){const Ot=xs(O.state.lightProbeGridArray,se);Ge.lightProbeGrid!==Ot&&(Ge.lightProbeGrid=Ot,Ai=!0)}if(ti||de!==R){S.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),zt.setValue(Y,"projectionMatrix",R.projectionMatrix),zt.setValue(Y,"viewMatrix",R.matrixWorldInverse);const Bi=zt.map.cameraPosition;Bi!==void 0&&Bi.setValue(Y,Kt.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&zt.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&zt.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),de!==R&&(de=R,Ai=!0,ni=!0)}if(Ge.needsLights&&(Pn.state.directionalShadowMap.length>0&&zt.setValue(Y,"directionalShadowMap",Pn.state.directionalShadowMap,he),Pn.state.spotShadowMap.length>0&&zt.setValue(Y,"spotShadowMap",Pn.state.spotShadowMap,he),Pn.state.pointShadowMap.length>0&&zt.setValue(Y,"pointShadowMap",Pn.state.pointShadowMap,he)),se.isSkinnedMesh){zt.setOptional(Y,se,"bindMatrix"),zt.setOptional(Y,se,"bindMatrixInverse");const Ot=se.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),zt.setValue(Y,"boneTexture",Ot.boneTexture,he))}se.isBatchedMesh&&(zt.setOptional(Y,se,"batchingTexture"),zt.setValue(Y,"batchingTexture",se._matricesTexture,he),zt.setOptional(Y,se,"batchingIdTexture"),zt.setValue(Y,"batchingIdTexture",se._indirectTexture,he),zt.setOptional(Y,se,"batchingColorTexture"),se._colorsTexture!==null&&zt.setValue(Y,"batchingColorTexture",se._colorsTexture,he));const wi=oe.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&j.update(se,oe,yn),(Ai||Ge.receiveShadow!==se.receiveShadow)&&(Ge.receiveShadow=se.receiveShadow,zt.setValue(Y,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Z.environment!==null&&(sn.envMapIntensity.value=Z.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=WA()),Ai){if(zt.setValue(Y,"toneMappingExposure",X.toneMappingExposure),Ge.needsLights&&pn(sn,ni),Pe&&ae.fog===!0&&ze.refreshFogUniforms(sn,Pe),ze.refreshMaterialUniforms(sn,ae,Me,be,O.state.transmissionRenderTarget[R.id]),Ge.needsLights&&Ge.lightProbeGrid){const Ot=Ge.lightProbeGrid;sn.probesSH.value=Ot.texture,sn.probesMin.value.copy(Ot.boundingBox.min),sn.probesMax.value.copy(Ot.boundingBox.max),sn.probesResolution.value.copy(Ot.resolution)}Kc.upload(Y,ea(Ge),sn,he)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Kc.upload(Y,ea(Ge),sn,he),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&zt.setValue(Y,"center",se.center),zt.setValue(Y,"modelViewMatrix",se.modelViewMatrix),zt.setValue(Y,"normalMatrix",se.normalMatrix),zt.setValue(Y,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const Ot=ae.uniformsGroups;for(let Bi=0,Oa=Ot.length;Bi<Oa;Bi++){const vs=Ot[Bi];Ee.update(vs,yn),Ee.bind(vs,yn)}}return yn}function pn(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function pl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(R,Z,oe){const ae=$.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),$.get(R.texture).__webglTexture=Z,$.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const oe=$.get(R);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,oe=0){ee=R,I=Z,G=oe;let ae=null,se=!1,Pe=!1;if(R){const Le=$.get(R);if(Le.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(Y.FRAMEBUFFER,Le.__webglFramebuffer),D.copy(R.viewport),K.copy(R.scissor),Se=R.scissorTest,S.viewport(D),S.scissor(K),S.setScissorTest(Se),ge=-1;return}else if(Le.__webglFramebuffer===void 0)he.setupRenderTarget(R);else if(Le.__hasExternalTextures)he.rebindTextures(R,$.get(R.texture).__webglTexture,$.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Le.__boundDepthTexture!==$e){if($e!==null&&$.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(R)}}const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Pe=!0);const Xe=$.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[Z])?ae=Xe[Z][oe]:ae=Xe[Z],se=!0):R.samples>0&&he.useMultisampledRTT(R)===!1?ae=$.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?ae=Xe[oe]:ae=Xe,D.copy(R.viewport),K.copy(R.scissor),Se=R.scissorTest}else D.copy(Ke).multiplyScalar(Me).floor(),K.copy(Ct).multiplyScalar(Me).floor(),Se=ft;if(oe!==0&&(ae=ce),S.bindFramebuffer(Y.FRAMEBUFFER,ae)&&S.drawBuffers(R,ae),S.viewport(D),S.scissor(K),S.setScissorTest(Se),se){const Le=$.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Le.__webglTexture,oe)}else if(Pe){const Le=Z;for(let je=0;je<R.textures.length;je++){const Xe=$.get(R.textures[je]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+je,Xe.__webglTexture,oe,Le)}}else if(R!==null&&oe!==0){const Le=$.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Le.__webglTexture,oe)}ge=-1},this.readRenderTargetPixels=function(R,Z,oe,ae,se,Pe,Ve,Le=0){if(!(R&&R.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=$.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(je=je[Ve]),je){S.bindFramebuffer(Y.FRAMEBUFFER,je);try{const Xe=R.textures[Le],$e=Xe.format,lt=Xe.type;if(R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Le),!N.textureFormatReadable($e)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(lt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ae&&oe>=0&&oe<=R.height-se&&Y.readPixels(Z,oe,ae,se,Ne.convert($e),Ne.convert(lt),Pe)}finally{const Xe=ee!==null?$.get(ee).__webglFramebuffer:null;S.bindFramebuffer(Y.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,Z,oe,ae,se,Pe,Ve,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=$.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(je=je[Ve]),je)if(Z>=0&&Z<=R.width-ae&&oe>=0&&oe<=R.height-se){S.bindFramebuffer(Y.FRAMEBUFFER,je);const Xe=R.textures[Le],$e=Xe.format,lt=Xe.type;if(R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Le),!N.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ze),Y.bufferData(Y.PIXEL_PACK_BUFFER,Pe.byteLength,Y.STREAM_READ),Y.readPixels(Z,oe,ae,se,Ne.convert($e),Ne.convert(lt),0);const Nt=ee!==null?$.get(ee).__webglFramebuffer:null;S.bindFramebuffer(Y.FRAMEBUFFER,Nt);const an=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Kb(Y,an,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ze),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Pe),Y.deleteBuffer(Ze),Y.deleteSync(an),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,oe=0){const ae=Math.pow(2,-oe),se=Math.floor(R.image.width*ae),Pe=Math.floor(R.image.height*ae),Ve=Z!==null?Z.x:0,Le=Z!==null?Z.y:0;he.setTexture2D(R,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,oe,0,0,Ve,Le,se,Pe),S.unbindTexture()},this.copyTextureToTexture=function(R,Z,oe=null,ae=null,se=0,Pe=0){let Ve,Le,je,Xe,$e,lt,Ze,Nt,an;const Wt=R.isCompressedTexture?R.mipmaps[Pe]:R.image;if(oe!==null)Ve=oe.max.x-oe.min.x,Le=oe.max.y-oe.min.y,je=oe.isBox3?oe.max.z-oe.min.z:1,Xe=oe.min.x,$e=oe.min.y,lt=oe.isBox3?oe.min.z:0;else{const sn=Math.pow(2,-se);Ve=Math.floor(Wt.width*sn),Le=Math.floor(Wt.height*sn),R.isDataArrayTexture?je=Wt.depth:R.isData3DTexture?je=Math.floor(Wt.depth*sn):je=1,Xe=0,$e=0,lt=0}ae!==null?(Ze=ae.x,Nt=ae.y,an=ae.z):(Ze=0,Nt=0,an=0);const Bt=Ne.convert(Z.format),Ft=Ne.convert(Z.type);let Ge;Z.isData3DTexture?(he.setTexture3D(Z,0),Ge=Y.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(he.setTexture2DArray(Z,0),Ge=Y.TEXTURE_2D_ARRAY):(he.setTexture2D(Z,0),Ge=Y.TEXTURE_2D),S.activeTexture(Y.TEXTURE0),S.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),S.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),S.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment);const Pn=S.getParameter(Y.UNPACK_ROW_LENGTH),xt=S.getParameter(Y.UNPACK_IMAGE_HEIGHT),yn=S.getParameter(Y.UNPACK_SKIP_PIXELS),ti=S.getParameter(Y.UNPACK_SKIP_ROWS),Ai=S.getParameter(Y.UNPACK_SKIP_IMAGES);S.pixelStorei(Y.UNPACK_ROW_LENGTH,Wt.width),S.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Wt.height),S.pixelStorei(Y.UNPACK_SKIP_PIXELS,Xe),S.pixelStorei(Y.UNPACK_SKIP_ROWS,$e),S.pixelStorei(Y.UNPACK_SKIP_IMAGES,lt);const ni=R.isDataArrayTexture||R.isData3DTexture,zt=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const sn=$.get(R),wi=$.get(Z),Ot=$.get(sn.__renderTarget),Bi=$.get(wi.__renderTarget);S.bindFramebuffer(Y.READ_FRAMEBUFFER,Ot.__webglFramebuffer),S.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Oa=0;Oa<je;Oa++)ni&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$.get(R).__webglTexture,se,lt+Oa),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$.get(Z).__webglTexture,Pe,an+Oa)),Y.blitFramebuffer(Xe,$e,Ve,Le,Ze,Nt,Ve,Le,Y.DEPTH_BUFFER_BIT,Y.NEAREST);S.bindFramebuffer(Y.READ_FRAMEBUFFER,null),S.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||$.has(R)){const sn=$.get(R),wi=$.get(Z);S.bindFramebuffer(Y.READ_FRAMEBUFFER,fe),S.bindFramebuffer(Y.DRAW_FRAMEBUFFER,J);for(let Ot=0;Ot<je;Ot++)ni?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,sn.__webglTexture,se,lt+Ot):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,sn.__webglTexture,se),zt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,wi.__webglTexture,Pe,an+Ot):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,wi.__webglTexture,Pe),se!==0?Y.blitFramebuffer(Xe,$e,Ve,Le,Ze,Nt,Ve,Le,Y.COLOR_BUFFER_BIT,Y.NEAREST):zt?Y.copyTexSubImage3D(Ge,Pe,Ze,Nt,an+Ot,Xe,$e,Ve,Le):Y.copyTexSubImage2D(Ge,Pe,Ze,Nt,Xe,$e,Ve,Le);S.bindFramebuffer(Y.READ_FRAMEBUFFER,null),S.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else zt?R.isDataTexture||R.isData3DTexture?Y.texSubImage3D(Ge,Pe,Ze,Nt,an,Ve,Le,je,Bt,Ft,Wt.data):Z.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ge,Pe,Ze,Nt,an,Ve,Le,je,Bt,Wt.data):Y.texSubImage3D(Ge,Pe,Ze,Nt,an,Ve,Le,je,Bt,Ft,Wt):R.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Pe,Ze,Nt,Ve,Le,Bt,Ft,Wt.data):R.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Pe,Ze,Nt,Wt.width,Wt.height,Bt,Wt.data):Y.texSubImage2D(Y.TEXTURE_2D,Pe,Ze,Nt,Ve,Le,Bt,Ft,Wt);S.pixelStorei(Y.UNPACK_ROW_LENGTH,Pn),S.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,xt),S.pixelStorei(Y.UNPACK_SKIP_PIXELS,yn),S.pixelStorei(Y.UNPACK_SKIP_ROWS,ti),S.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ai),Pe===0&&Z.generateMipmaps&&Y.generateMipmap(Ge),S.unbindTexture()},this.initRenderTarget=function(R){$.get(R).__webglFramebuffer===void 0&&he.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?he.setTextureCube(R,0):R.isData3DTexture?he.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?he.setTexture2DArray(R,0):he.setTexture2D(R,0),S.unbindTexture()},this.resetState=function(){I=0,G=0,ee=null,S.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),i.unpackColorSpace=Et._getUnpackColorSpace()}}const YA=()=>{const r=He.useRef(null),{continuousIndex:e,isBooting:i,bootEra:s}=Ti(),l=He.useRef(e),c=He.useRef(i);return He.useEffect(()=>{l.current=e},[e]),He.useEffect(()=>{c.current=i},[i]),He.useEffect(()=>{if(!r.current)return;const d=r.current,p=new wS;p.background=new wt(789518);const m=window.innerWidth<768,h=m?5.2:4.2,y=new Mi(m?50:45,d.clientWidth/d.clientHeight,.1,100);y.position.set(0,.35,h);const _=new qA({antialias:!0,alpha:!1});_.setSize(d.clientWidth,d.clientHeight),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.shadowMap.enabled=!0,_.shadowMap.type=pv,_.toneMapping=qh,_.toneMappingExposure=1,d.appendChild(_.domElement);const g=new ZS(16777215,.7);p.add(g);const E=new qd(16772829,2.2);E.position.set(3,5,4),E.castShadow=!0,E.shadow.mapSize.width=1024,E.shadow.mapSize.height=1024,p.add(E);const w=new qd(9482495,1.2);w.position.set(-4,2,2),p.add(w);const U=new qd(16777215,1.5);U.position.set(0,4,-4),p.add(U);const M=new Vr(3.5,3.5,.2,64),b=new Ea({color:1447450,roughness:.8,metalness:.1}),z=new Sn(M,b);z.position.y=-1.1,z.receiveShadow=!0,p.add(z);const B=document.createElement("canvas");B.width=512,B.height=384;const A=B.getContext("2d"),F=new FS(B);F.generateMipmaps=!0,F.minFilter=fs;const O=N=>{const S=B.width,W=B.height;if(N<.8){A.fillStyle="#c0c0c0",A.fillRect(0,0,S,W),A.fillStyle="#000080",A.fillRect(10,10,S-20,30),A.fillStyle="#ffffff",A.font="bold 16px serif",A.fillText("Netscape Navigator - [Web 1995]",20,32),A.fillStyle="#0000ff",A.font="bold 24px serif",A.fillText("The World Wide Web Project",30,80),A.fillStyle="#000000",A.font="14px serif",A.fillText("• Raw HTML 2.0 tables & hyperlinks",30,115),A.fillText("• Dial-up 28.8k baud rate connected",30,140),A.fillText("• Hit Counter: [ 0042891 ]",30,170),A.fillStyle="rgba(0,0,0,0.15)";for(let $=0;$<W;$+=4)A.fillRect(0,$,S,2)}else if(N<1.8)A.fillStyle="#000033",A.fillRect(0,0,S,W),A.fillStyle="#ff007f",A.font="bold 28px sans-serif",A.fillText("⚡ FLASH 4.0 PORTAL ⚡",40,70),A.fillStyle="#ffff00",A.font="16px monospace",A.fillText(">>> PETS.COM IPO SOARS! <<<",40,110),A.fillText("ICQ Status: Online (Winamp Playing)",40,140),A.fillStyle="#00ffff",A.fillText("[ Enter Cyber-Zone ]",40,180);else if(N<2.8)A.fillStyle="#e3f2fd",A.fillRect(0,0,S,W),A.fillStyle="#0288d1",A.fillRect(0,0,S,40),A.fillStyle="#ffffff",A.font="bold 18px Tahoma, sans-serif",A.fillText("MSN Messenger 7.5 & MySpace",20,26),A.fillStyle="#0d47a1",A.font="bold 15px Tahoma, sans-serif",A.fillText("xX_Sk8erBoi_Xx: brb mom on phone!",25,80),A.fillStyle="#d32f2f",A.fillText("💥 Nudge received at 4:16 PM",25,115);else if(N<3.8)A.fillStyle="#2c3e50",A.fillRect(0,0,S,W),A.fillStyle="#3b5998",A.fillRect(20,20,S-40,50),A.fillStyle="#ffffff",A.font="bold 18px Helvetica, sans-serif",A.fillText("Facebook for iOS • Retina Display",35,52),A.fillStyle="#ecf0f1",A.font="14px Helvetica, sans-serif",A.fillText("Checked in at Apple Campus (Cupertino)",35,105),A.fillText("👍 Like (42) • Slide to Unlock ➔",35,140);else if(N<4.8)A.fillStyle="#f5f5f5",A.fillRect(0,0,S,W),A.fillStyle="#009688",A.fillRect(0,0,S,50),A.fillStyle="#ffffff",A.font="bold 20px Roboto, sans-serif",A.fillText("Material Feed & 6s Vine Loops",25,33),A.fillStyle="#00b488",A.fillRect(30,75,S-60,90),A.fillStyle="#ffffff",A.font="bold 16px Roboto, sans-serif",A.fillText("🍇 Do it for the Vine! (6.0s)",45,125);else if(N<5.5)A.fillStyle="#0d1117",A.fillRect(0,0,S,W),A.fillStyle="#161b22",A.fillRect(20,20,S-40,60),A.fillStyle="#5865F2",A.font="bold 18px Inter, sans-serif",A.fillText("Discord Server • #study-lounge",35,55),A.fillStyle="#8b949e",A.font="14px Inter, sans-serif",A.fillText("🎧 Lo-Fi Beats Stream • 48k Listening",35,115),A.fillText('Zoom Standup: "You are on mute!"',35,145);else{A.fillStyle="#050508",A.fillRect(0,0,S,W);const $=A.createLinearGradient(0,0,S,0);$.addColorStop(0,"#8b5cf6"),$.addColorStop(1,"#3b82f6"),A.fillStyle=$,A.font="bold 22px system-ui, sans-serif",A.fillText("✨ Ambient Neural Canvas 2026",30,60),A.fillStyle="#a1a1aa",A.font="14px system-ui, sans-serif",A.fillText("Copilot Agent: Dynamic UI Viewport",30,100),A.fillText("Spatial Synapse: 0.2ms Direct Latency",30,130)}F.needsUpdate=!0},P=new Hr;p.add(P);const T=new ji(1.8,1.4,1),L=new Ea({color:14209732,roughness:.8,metalness:.05}),X=new Sn(T,L);X.castShadow=!0,X.receiveShadow=!0,P.add(X);const V=new ji(1.82,1.42,.1),q=new Ea({color:13157044,roughness:.85}),ce=new Sn(V,q);ce.position.z=.46,P.add(ce);const fe=new fl(1.42,1.06),J=new sp({map:F}),I=new Sn(fe,J);I.position.z=.52,P.add(I);const G=new Vr(.3,.45,.25,32),ee=new Ea({color:9473154,roughness:.7}),ge=new Sn(G,ee);ge.position.y=-.82,ge.castShadow=!0,P.add(ge);const de=new Vr(.04,.04,.05,16),D=new Ea({color:3355443}),K=new Sn(de,D);K.rotation.x=Math.PI/2,K.position.set(.65,-.58,.52),P.add(K);const Se=new ji(.35,.03,.04),we=new Ea({color:1118481}),De=new Sn(Se,we);De.position.set(-.45,-.58,.52),P.add(De);const te=new Hr;te.position.set(m?1:1.4,-.9,.4),p.add(te);const be=new ji(.55,.55,.04),Me=new Ea({color:1710628,roughness:.5}),Be=new Sn(be,Me);Be.rotation.x=-Math.PI/2,Be.rotation.z=.2,Be.castShadow=!0,te.add(Be);const nt=new ji(.6,.6,.05),Ke=new Ea({color:35020,roughness:.1,metalness:.8,transparent:!0,opacity:.85}),Ct=new Sn(nt,Ke);Ct.rotation.x=-Math.PI/2,Ct.rotation.z=-.3,Ct.position.y=.02,Ct.visible=!1,te.add(Ct);const ft=new Vr(.25,.25,.03,32),gt=new Ea({color:14737632,metalness:.9,roughness:.2}),pt=new Sn(ft,gt);pt.position.y=.02,pt.visible=!1,te.add(pt);let dt=0,Yt=0,Kt=0,Qt=0;const tn=N=>{const S=d.getBoundingClientRect(),W=(N.clientX-S.left)/S.width-.5,$=(N.clientY-S.top)/S.height-.5;dt=W,Yt=$},Pt=N=>{if(N.touches.length>0){const S=N.touches[0],W=d.getBoundingClientRect(),$=(S.clientX-W.left)/W.width-.5,he=(S.clientY-W.top)/W.height-.5;dt=$*1.4,Yt=he*1.4}};window.addEventListener("mousemove",tn),window.addEventListener("touchmove",Pt,{passive:!0});const Jt=()=>{if(!d)return;const N=window.innerWidth<768;y.fov=N?50:45,y.aspect=d.clientWidth/d.clientHeight,y.updateProjectionMatrix(),_.setSize(d.clientWidth,d.clientHeight)};window.addEventListener("resize",Jt);let Y,st=0;const At=()=>{Y=requestAnimationFrame(At);const N=l.current;st+=(N-st)*.08;const S=Un.lerp(.85,.03,st/6);X.scale.set(1,1,S),X.position.z=(S-1)*.4,ce.position.z=X.position.z+.5*S+.04,I.position.z=ce.position.z+.055;const W=Un.lerp(1,.25,st/6);ge.scale.set(W,W,W),ge.position.y=-.7-(1-W)*.15;const $=Un.clamp(1-st/2.5,.001,1);if(K.scale.set($,$,$),De.scale.set($,$,$),K.position.z=I.position.z+.01,De.position.z=I.position.z+.01,st<1.5){const Te=st/1.5;L.color.setRGB(Un.lerp(.85,0,Te),Un.lerp(.82,.5,Te),Un.lerp(.77,.6,Te)),L.roughness=Un.lerp(.85,.3,Te),q.color.copy(L.color)}else if(st<3.5){const Te=(st-1.5)/2;L.color.setRGB(Un.lerp(0,.88,Te),Un.lerp(.5,.88,Te),Un.lerp(.6,.88,Te)),L.metalness=Un.lerp(.1,.85,Te),L.roughness=Un.lerp(.3,.25,Te),q.color.copy(L.color)}else{const Te=(st-3.5)/2.5;L.color.setRGB(Un.lerp(.88,.05,Te),Un.lerp(.88,.05,Te),Un.lerp(.88,.07,Te)),L.metalness=Un.lerp(.85,.95,Te),L.roughness=Un.lerp(.25,.05,Te),q.color.copy(L.color)}Be.visible=st<1.5,Ct.visible=st>=1.5&&st<3.5,pt.visible=st>=3.5,O(st),Qt=dt*.45,Kt=-Yt*.3,P.rotation.y+=(Qt-P.rotation.y)*.06,P.rotation.x+=(Kt-P.rotation.x)*.06;const Ae=window.innerWidth<768?5.2:4.2;c.current?(y.position.z+=(1.3-y.position.z)*.08,y.position.y+=(.05-y.position.y)*.08):(y.position.z+=(Ae-y.position.z)*.05,y.position.y+=(.35-y.position.y)*.05),_.render(p,y)};return At(),()=>{cancelAnimationFrame(Y),window.removeEventListener("mousemove",tn),window.removeEventListener("touchmove",Pt),window.removeEventListener("resize",Jt),d&&_.domElement&&d.removeChild(_.domElement),_.dispose()}},[]),x.jsx("div",{ref:r,className:"relative w-full h-[48vh] sm:h-[55vh] md:h-[62vh] cursor-grab active:cursor-grabbing touch-none select-none",onClick:()=>{i||s()},title:"Tap or click to boot this internet era"})};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zv=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=He.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},m)=>He.createElement("svg",{ref:m,...KA,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:Zv("lucide",l),...p},[...d.map(([h,y])=>He.createElement(h,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=(r,e)=>{const i=He.forwardRef(({className:s,...l},c)=>He.createElement(QA,{ref:c,iconNode:e,className:Zv(`lucide-${ZA(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Kv=Zt("ArrowRight",JA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],e2=Zt("Bot",$A);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],n2=Zt("Check",t2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],a2=Zt("ChevronLeft",i2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],r2=Zt("ChevronRight",s2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],ol=Zt("CodeXml",o2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],c2=Zt("Copy",l2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],Qv=Zt("Cpu",u2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Wr=Zt("Disc",f2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],h2=Zt("Download",d2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],m2=Zt("Flame",p2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],x2=Zt("Info",g2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Jv=Zt("Menu",v2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],y2=Zt("Monitor",_2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],tv=Zt("Pause",b2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Xh=Zt("Play",S2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],E2=Zt("Power",M2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],ll=Zt("Radio",T2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],w2=Zt("Shuffle",A2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],iu=Zt("Skull",R2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],js=Zt("Sparkles",C2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]],nv=Zt("Tv",N2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],au=Zt("Volume2",D2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],su=Zt("VolumeX",U2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],iv=Zt("Wifi",L2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],qs=Zt("X",O2),P2=()=>{const{currentEra:r,continuousIndex:e,setContinuousIndex:i,bootEra:s,setOpenGraveyard:l,setOpenSurprise:c,setOpenDevTools:d,setOpenTimeCapsule:p,setOpenAudioVault:m,isMuted:h,toggleMute:y,isBooting:_}=Ti(),[g,E]=He.useState(!1),w=Qc[r],U=M=>{i(parseFloat(M.target.value))};return x.jsxs("div",{className:"min-h-screen bg-[#0c0c0e] text-[#e4e4e7] flex flex-col justify-between selection:bg-amber-500 selection:text-black font-bento overflow-x-hidden",children:[x.jsxs("header",{className:"px-4 sm:px-6 py-4 border-b border-white/5 flex items-center justify-between",children:[x.jsxs("div",{children:[x.jsx("div",{className:"text-[9px] sm:text-[11px] font-mono tracking-widest text-amber-400 uppercase",children:"ARCHIVAL HARDWARE RIG • 1995 — 2026"}),x.jsx("h1",{className:"text-lg sm:text-2xl font-black tracking-tight text-white font-raw",children:"The Internet Time Machine"})]}),x.jsxs("div",{className:"hidden md:flex items-center gap-2",children:[x.jsxs("button",{onClick:()=>d(!0),className:"px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition flex items-center gap-1.5",children:[x.jsx(ol,{className:"w-3.5 h-3.5 text-blue-400"}),x.jsx("span",{children:"View Source"})]}),x.jsxs("button",{onClick:()=>p(!0),className:"px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition flex items-center gap-1.5",children:[x.jsx(Wr,{className:"w-3.5 h-3.5 text-amber-400"}),x.jsx("span",{children:"ID Capsule"})]}),x.jsxs("button",{onClick:()=>m(!0),className:"px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition flex items-center gap-1.5",children:[x.jsx(ll,{className:"w-3.5 h-3.5 text-emerald-400"}),x.jsx("span",{children:"Audio Vault"})]}),x.jsxs("button",{onClick:()=>l(!0),className:"px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition flex items-center gap-1.5",children:[x.jsx(iu,{className:"w-3.5 h-3.5 text-purple-400"}),x.jsx("span",{children:"Graveyard"})]}),x.jsxs("button",{onClick:()=>c(!0),className:"px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition flex items-center gap-1.5",children:[x.jsx(js,{className:"w-3.5 h-3.5 text-amber-400"}),x.jsx("span",{children:"Surprise"})]}),x.jsx("button",{onClick:y,className:"p-2 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition",children:h?x.jsx(su,{className:"w-4 h-4 text-red-400"}):x.jsx(au,{className:"w-4 h-4 text-emerald-400"})})]}),x.jsxs("div",{className:"flex md:hidden items-center gap-1.5",children:[x.jsx("button",{onClick:y,className:"p-2 rounded-lg text-xs bg-white/5 border border-white/10",children:h?x.jsx(su,{className:"w-4 h-4 text-red-400"}):x.jsx(au,{className:"w-4 h-4 text-emerald-400"})}),x.jsxs("button",{onClick:()=>E(!g),className:"px-3 py-1.5 rounded-lg text-xs bg-white/5 border border-white/10 flex items-center gap-1",children:[g?x.jsx(qs,{className:"w-4 h-4"}):x.jsx(Jv,{className:"w-4 h-4"}),x.jsx("span",{children:"Tools"})]})]})]}),g&&x.jsxs("div",{className:"md:hidden bg-[#16161a] border-b border-white/10 p-3 grid grid-cols-2 gap-2 text-xs",children:[x.jsxs("button",{onClick:()=>{d(!0),E(!1)},className:"p-2 bg-white/5 rounded-lg text-left flex items-center gap-1.5",children:[x.jsx(ol,{className:"w-3.5 h-3.5 text-blue-400"}),x.jsx("span",{children:"View Source"})]}),x.jsxs("button",{onClick:()=>{p(!0),E(!1)},className:"p-2 bg-white/5 rounded-lg text-left flex items-center gap-1.5",children:[x.jsx(Wr,{className:"w-3.5 h-3.5 text-amber-400"}),x.jsx("span",{children:"ID Capsule"})]}),x.jsxs("button",{onClick:()=>{m(!0),E(!1)},className:"p-2 bg-white/5 rounded-lg text-left flex items-center gap-1.5",children:[x.jsx(ll,{className:"w-3.5 h-3.5 text-emerald-400"}),x.jsx("span",{children:"Audio Vault"})]}),x.jsxs("button",{onClick:()=>{l(!0),E(!1)},className:"p-2 bg-white/5 rounded-lg text-left flex items-center gap-1.5",children:[x.jsx(iu,{className:"w-3.5 h-3.5 text-purple-400"}),x.jsx("span",{children:"Graveyard"})]}),x.jsxs("button",{onClick:()=>{c(!0),E(!1)},className:"col-span-2 p-2 bg-white/5 rounded-lg text-left flex items-center gap-1.5",children:[x.jsx(js,{className:"w-3.5 h-3.5 text-amber-400"}),x.jsx("span",{children:"Surprise Me Roulette"})]})]}),x.jsxs("main",{className:"relative flex-1 flex flex-col items-center justify-center px-3 sm:px-4 py-2",children:[x.jsx(YA,{}),x.jsx("div",{className:"mt-[-10px] sm:mt-[-20px] z-10 text-center",children:x.jsxs("button",{onClick:()=>s(),disabled:_,className:`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-2xl active:scale-95 ${_?"bg-amber-400 text-black animate-pulse":"bg-white text-black hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]"}`,children:[x.jsx(E2,{className:"w-4 h-4"}),x.jsx("span",{children:_?`Booting Year ${r}...`:`Turn On Year ${r}`}),x.jsx(Kv,{className:"w-4 h-4 ml-0.5"})]})}),x.jsxs("div",{className:"max-w-4xl w-full grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mt-4 text-[11px] sm:text-xs font-mono",children:[x.jsxs("div",{className:"p-2.5 sm:p-3 bg-white/[0.02] border border-white/5 rounded-xl",children:[x.jsx("span",{className:"text-gray-500 block text-[9px] sm:text-[10px]",children:"CHASSIS & ARCHITECTURE"}),x.jsx("strong",{className:"text-gray-200 block truncate",children:w.hardware.deviceName}),x.jsx("span",{className:"text-gray-400 text-[10px] sm:text-[11px] block truncate",children:w.hardware.chassisMaterial})]}),x.jsxs("div",{className:"p-2.5 sm:p-3 bg-white/[0.02] border border-white/5 rounded-xl",children:[x.jsx("span",{className:"text-gray-500 block text-[9px] sm:text-[10px]",children:"DISPLAY MATRIX"}),x.jsx("strong",{className:"text-gray-200 block truncate",children:w.hardware.displayType}),x.jsx("span",{className:"text-gray-400 text-[10px] sm:text-[11px] block truncate",children:w.hardware.resolution})]}),x.jsxs("div",{className:"p-2.5 sm:p-3 bg-white/[0.02] border border-white/5 rounded-xl",children:[x.jsx("span",{className:"text-gray-500 block text-[9px] sm:text-[10px]",children:"PARADIGM & TECH"}),x.jsx("strong",{className:"text-gray-200 block truncate",children:w.paradigm}),x.jsx("span",{className:"text-gray-400 text-[10px] sm:text-[11px] block truncate",children:w.keyTech.slice(0,2).join(", ")})]}),x.jsxs("div",{className:"p-2.5 sm:p-3 bg-white/[0.02] border border-white/5 rounded-xl",children:[x.jsx("span",{className:"text-gray-500 block text-[9px] sm:text-[10px]",children:"PHYSICAL MEDIA PROP"}),x.jsxs("strong",{className:"text-amber-300 block truncate flex items-center gap-1",children:[x.jsx(Wr,{className:"w-3 h-3 shrink-0"}),x.jsx("span",{className:"truncate",children:w.hardware.secondaryPropName})]}),x.jsx("span",{className:"text-gray-400 text-[10px] sm:text-[11px] block truncate",children:w.hardware.secondaryPropDesc})]})]})]}),x.jsx("footer",{className:"bg-[#111114] border-t border-white/10 px-4 sm:px-6 py-4 z-20",children:x.jsxs("div",{className:"max-w-5xl mx-auto space-y-2.5",children:[x.jsxs("div",{className:"flex items-center justify-between text-[11px] sm:text-xs font-mono text-gray-400",children:[x.jsxs("span",{className:"flex items-center gap-1 truncate",children:[x.jsx(Qv,{className:"w-3.5 h-3.5 text-amber-400 shrink-0"}),x.jsx("strong",{className:"hidden sm:inline",children:"SCRUB TIMELINE:"}),x.jsx("span",{className:"sm:hidden font-bold",children:"SCRUB:"}),x.jsx("span",{className:"truncate hidden sm:inline",children:"Transform hardware & web"})]}),x.jsxs("span",{className:"text-amber-400 font-bold shrink-0",children:["Year ",r]})]}),x.jsx("div",{className:"relative py-1",children:x.jsx("input",{type:"range",min:"0",max:Ln.length-1,step:"0.01",value:e,onChange:U,className:"w-full h-3 sm:h-2 bg-gray-800 rounded-lg appearance-none cursor-ew-resize accent-amber-400 focus:outline-none touch-pan-x"})}),x.jsx("div",{className:"flex justify-between items-center text-[10px] sm:text-xs font-mono overflow-x-auto pb-1 scrollbar-none",children:Ln.map((M,b)=>{const z=Math.round(e)===b;return x.jsx("button",{onClick:()=>i(b),className:`px-1.5 py-1 rounded transition-all duration-200 ${z?"text-amber-400 font-bold scale-110 underline bg-white/5":"text-gray-500 hover:text-gray-300"}`,children:M},M)})})]})})]})},I2=()=>{const{currentEra:r,returnToLanding:e,isMuted:i,toggleMute:s,isCRTMode:l,toggleCRTMode:c,isDialUpMode:d,toggleDialUpMode:p,isAutoPlaying:m,toggleAutoPlay:h,setOpenGraveyard:y,setOpenSurprise:_,setOpenDevTools:g,setOpenTimeCapsule:E,setOpenAudioVault:w}=Ti(),[U,M]=He.useState(!1),b=Qc[r],z=()=>{switch(r){case 1995:return"bg-[#c0c0c0] text-black border-b-4 border-r-4 border-white border-t-4 border-l-4 border-gray-800 font-raw";case 2e3:return"bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-yellow-300 border-b-4 border-pink-500 font-early2000";case 2005:return"bg-gradient-to-b from-[#e3f2fd] to-[#90caf9] text-[#0d47a1] border-b border-[#1565c0] font-web2";case 2010:return"bg-gradient-to-b from-[#4c669f] via-[#3b5998] to-[#192f6a] text-white border-b border-[#112244] font-skeuo";case 2015:return"bg-[#009688] text-white border-none font-flat";case 2020:return"bg-[#0d1117]/90 text-gray-100 border-b border-gray-800 backdrop-blur-md font-bento";case 2026:return"bg-black/50 text-white border-b border-white/10 backdrop-blur-2xl font-future"}},B=()=>{switch(r){case 1995:return"bg-[#c0c0c0] px-2 py-1 text-xs border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 active:border-t-gray-800 active:border-l-gray-800 text-black font-pixel";case 2e3:return"bg-black text-cyan-300 px-2.5 py-1 text-xs border border-pink-500 hover:bg-pink-600 hover:text-white transition";case 2005:return"bg-gradient-to-b from-white to-[#cfd8dc] text-[#1565c0] border border-[#90a4ae] px-2.5 py-1 text-xs rounded shadow";case 2010:return"bg-gradient-to-b from-[#3a5795] to-[#2b4170] text-white px-2.5 py-1 text-xs rounded-md border border-[#1d2f53] font-bold";case 2015:return"bg-white text-[#009688] px-2.5 py-1 text-xs font-semibold uppercase rounded-sm shadow";case 2020:return"bg-[#21262d] hover:bg-[#30363d] text-gray-200 px-2.5 py-1 text-xs rounded-lg border border-gray-700 transition";case 2026:return"bg-white/10 hover:bg-white/20 text-white px-3 py-1 text-xs rounded-full border border-white/20 backdrop-blur-lg transition"}};return x.jsxs("header",{className:`sticky top-0 z-40 px-3 sm:px-4 py-2.5 transition-colors duration-500 ${z()}`,children:[x.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between gap-2",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsxs("button",{onClick:e,className:`${B()} flex items-center gap-1 font-bold whitespace-nowrap`,children:[x.jsx(y2,{className:"w-3.5 h-3.5"}),x.jsx("span",{className:"text-[11px] sm:text-xs",children:"3D Studio"})]}),x.jsx("div",{className:"hidden sm:block",children:x.jsxs("h1",{className:"text-xs font-black tracking-tight leading-none truncate max-w-[160px] md:max-w-none",children:["YEAR ",r," — ",b.title]})})]}),x.jsxs("div",{className:"hidden lg:flex items-center gap-1.5",children:[x.jsxs("button",{onClick:()=>g(!0),className:B(),children:[x.jsx(ol,{className:"w-3.5 h-3.5 inline mr-1 text-blue-400"}),x.jsx("span",{children:"View Source"})]}),x.jsxs("button",{onClick:()=>E(!0),className:B(),children:[x.jsx(Wr,{className:"w-3.5 h-3.5 inline mr-1 text-amber-400"}),x.jsx("span",{children:"ID Capsule"})]}),x.jsxs("button",{onClick:()=>w(!0),className:B(),children:[x.jsx(ll,{className:"w-3.5 h-3.5 inline mr-1 text-emerald-400"}),x.jsx("span",{children:"Audio Vault"})]}),x.jsxs("button",{onClick:()=>y(!0),className:B(),children:[x.jsx(iu,{className:"w-3.5 h-3.5 inline mr-1"}),x.jsx("span",{children:"Graveyard"})]}),x.jsxs("button",{onClick:()=>_(!0),className:B(),children:[x.jsx(js,{className:"w-3.5 h-3.5 inline mr-1"}),x.jsx("span",{children:"Surprise"})]}),x.jsxs("button",{onClick:p,className:`${B()} ${d?"ring-2 ring-amber-400 font-bold":"opacity-70"}`,children:[x.jsx(iv,{className:"w-3.5 h-3.5 inline mr-1"}),x.jsx("span",{children:"56k"})]}),x.jsxs("button",{onClick:c,className:`${B()} ${l?"ring-2 ring-emerald-400 font-bold":"opacity-70"}`,children:[x.jsx(nv,{className:"w-3.5 h-3.5 inline mr-1"}),x.jsx("span",{children:"CRT"})]}),x.jsxs("button",{onClick:h,className:`${B()} ${m?"bg-amber-600 text-white":""}`,children:[m?x.jsx(tv,{className:"w-3.5 h-3.5 inline mr-1"}):x.jsx(Xh,{className:"w-3.5 h-3.5 inline mr-1"}),x.jsx("span",{children:m?"Pause":"Auto"})]}),x.jsx("button",{onClick:s,className:B(),children:i?x.jsx(su,{className:"w-3.5 h-3.5"}):x.jsx(au,{className:"w-3.5 h-3.5"})})]}),x.jsxs("div",{className:"flex lg:hidden items-center gap-1.5",children:[x.jsx("button",{onClick:s,className:B(),title:"Toggle Sound",children:i?x.jsx(su,{className:"w-3.5 h-3.5"}):x.jsx(au,{className:"w-3.5 h-3.5"})}),x.jsxs("button",{onClick:()=>M(!U),className:`${B()} flex items-center gap-1 font-bold`,children:[U?x.jsx(qs,{className:"w-4 h-4"}):x.jsx(Jv,{className:"w-4 h-4"}),x.jsx("span",{className:"text-[11px]",children:"Menu"})]})]})]}),U&&x.jsxs("div",{className:"lg:hidden mt-2 pt-2 border-t border-black/20 grid grid-cols-2 gap-1.5 animate-fadeIn text-xs",children:[x.jsxs("button",{onClick:()=>{g(!0),M(!1)},className:`${B()} text-left py-2 flex items-center gap-1.5`,children:[x.jsx(ol,{className:"w-3.5 h-3.5 text-blue-400"}),x.jsx("span",{children:"View Source"})]}),x.jsxs("button",{onClick:()=>{E(!0),M(!1)},className:`${B()} text-left py-2 flex items-center gap-1.5`,children:[x.jsx(Wr,{className:"w-3.5 h-3.5 text-amber-400"}),x.jsx("span",{children:"ID Capsule"})]}),x.jsxs("button",{onClick:()=>{w(!0),M(!1)},className:`${B()} text-left py-2 flex items-center gap-1.5`,children:[x.jsx(ll,{className:"w-3.5 h-3.5 text-emerald-400"}),x.jsx("span",{children:"Audio Vault"})]}),x.jsxs("button",{onClick:()=>{y(!0),M(!1)},className:`${B()} text-left py-2 flex items-center gap-1.5`,children:[x.jsx(iu,{className:"w-3.5 h-3.5 text-purple-400"}),x.jsx("span",{children:"Graveyard"})]}),x.jsxs("button",{onClick:()=>{_(!0),M(!1)},className:`${B()} text-left py-2 flex items-center gap-1.5`,children:[x.jsx(js,{className:"w-3.5 h-3.5 text-amber-400"}),x.jsx("span",{children:"Surprise Me"})]}),x.jsxs("button",{onClick:()=>{c(),M(!1)},className:`${B()} text-left py-2 flex items-center gap-1.5 ${l?"ring-2 ring-emerald-400":""}`,children:[x.jsx(nv,{className:"w-3.5 h-3.5"}),x.jsxs("span",{children:["CRT: ",l?"ON":"OFF"]})]}),x.jsxs("button",{onClick:()=>{p(),M(!1)},className:`${B()} text-left py-2 flex items-center gap-1.5 ${d?"ring-2 ring-amber-400":""}`,children:[x.jsx(iv,{className:"w-3.5 h-3.5"}),x.jsx("span",{children:"56k Mode"})]}),x.jsxs("button",{onClick:()=>{h(),M(!1)},className:`${B()} text-left py-2 flex items-center gap-1.5 ${m?"bg-amber-600 text-white":""}`,children:[m?x.jsx(tv,{className:"w-3.5 h-3.5"}):x.jsx(Xh,{className:"w-3.5 h-3.5"}),x.jsx("span",{children:"Auto Evolve"})]})]})]})},B2=()=>{const{isCRTMode:r,isTransitioning:e}=Ti();return!r&&!e?null:x.jsxs("div",{className:"pointer-events-none fixed inset-0 z-50 overflow-hidden",children:[r&&x.jsx("div",{className:"absolute inset-0 opacity-25",style:{backgroundImage:"linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%)",backgroundSize:"100% 4px",boxShadow:"inset 0 0 100px rgba(0,0,0,0.8)"}}),r&&x.jsx("div",{className:"absolute inset-0 border-[8px] md:border-[16px] border-black/80 rounded-3xl"}),e&&x.jsx("div",{className:"absolute inset-0 bg-white/20 backdrop-blur-[2px] animate-pulse flex items-center justify-center",children:x.jsxs("div",{className:"bg-black/90 text-green-400 font-mono px-6 py-3 rounded-lg border border-green-500 shadow-2xl flex items-center gap-3",children:[x.jsx("span",{className:"animate-spin text-xl",children:"⏳"}),x.jsx("span",{className:"tracking-widest uppercase font-bold text-sm",children:"WARPING TIMELINE..."})]})})]})},F2=()=>{const{currentEra:r}=Ti(),[e,i]=He.useState([]);return He.useEffect(()=>{if(r!==2e3){i([]);return}const s=["✨","⭐","💫","✦","★"];let l=0;const c=d=>{if(l++,l%3!==0)return;const p={id:Date.now()+Math.random(),x:d.clientX,y:d.clientY,char:s[Math.floor(Math.random()*s.length)]};i(m=>[...m.slice(-15),p])};return window.addEventListener("mousemove",c),()=>window.removeEventListener("mousemove",c)},[r]),r!==2e3?null:x.jsx("div",{className:"pointer-events-none fixed inset-0 z-50 overflow-hidden",children:e.map(s=>x.jsx("span",{className:"absolute text-xs animate-ping",style:{left:`${s.x}px`,top:`${s.y}px`,transform:"translate(-50%, -50%)"},children:s.char},s.id))})},z2=()=>{const{currentEra:r,setEra:e,prevEra:i,nextEra:s}=Ti(),l=()=>{switch(r){case 1995:return"bg-[#c0c0c0] border-t-2 border-b-2 border-t-white border-b-gray-800 text-black font-raw";case 2e3:return"bg-black text-yellow-300 border-t-2 border-b-2 border-pink-500 font-early2000";case 2005:return"bg-gradient-to-r from-[#e1f5fe] to-[#b3e5fc] text-[#0277bd] border-t border-b border-[#81d4fa] font-web2";case 2010:return"bg-[#2d4373] text-white border-t border-b border-[#1a2846] font-skeuo shadow-inner";case 2015:return"bg-white text-gray-800 border-t border-b border-gray-200 font-flat shadow-sm";case 2020:return"bg-[#161b22] text-gray-200 border-t border-b border-gray-800 font-bento";case 2026:return"bg-black/80 text-white border-t border-b border-white/10 backdrop-blur-xl font-future"}};return x.jsx("div",{className:`py-2.5 sm:py-3 px-3 sm:px-4 transition-all duration-300 ${l()}`,children:x.jsxs("div",{className:"max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4",children:[x.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[x.jsx("button",{onClick:i,disabled:r===Ln[0],className:"p-1 rounded disabled:opacity-30 hover:bg-black/10 active:scale-95 transition",title:"Previous Era (Left Arrow)",children:x.jsx(a2,{className:"w-5 h-5 sm:w-6 sm:h-6"})}),x.jsx("button",{onClick:s,disabled:r===Ln[Ln.length-1],className:"p-1 rounded disabled:opacity-30 hover:bg-black/10 active:scale-95 transition",title:"Next Era (Right Arrow)",children:x.jsx(r2,{className:"w-5 h-5 sm:w-6 sm:h-6"})})]}),x.jsx("div",{className:"flex items-center gap-1.5 sm:gap-3 overflow-x-auto py-1 scrollbar-none",children:Ln.map(c=>{const d=r===c,p=Qc[c];return x.jsx("button",{onClick:()=>e(c),className:`relative px-2.5 sm:px-3 py-1 text-xs md:text-sm font-bold transition-all duration-300 rounded whitespace-nowrap ${d?"scale-105 shadow-md ring-2 ring-indigo-500 font-black":"opacity-60 hover:opacity-100"}`,style:{backgroundColor:d?p.vibeColor:void 0,color:d?c===1995||c===2005?"#000":"#fff":void 0},children:c},c)})}),x.jsxs("div",{className:"hidden md:block text-xs font-mono opacity-80 text-right shrink-0",children:[x.jsx("strong",{children:"Paradigm:"})," ",Qc[r].paradigm]})]})})},av=[{id:"flash",name:"Adobe Flash Player",years:"1996 – 2020",category:"Interactive Engine",icon:"⚡",epitaph:"Powerhouse of early internet games, animations, and newgrounds culture. Slain by Steve Jobs' open letter and HTML5.",causeOfDeath:"Security vulnerabilities and refusal of mobile browsers to support plugins.",initialRespects:14209},{id:"vine",name:"Vine",years:"2013 – 2017",category:"Social Video",icon:"🍇",epitaph:"You had 6 seconds to change the world. You birthed modern internet comedy before TikTok took the throne.",causeOfDeath:"Inability to monetize creators and corporate neglect following Twitter acquisition.",initialRespects:9832},{id:"msn",name:"MSN Messenger / Windows Live",years:"1999 – 2014",category:"Instant Messaging",icon:"💬",epitaph:"Home of *~[aUtO-StAtUs]~*, the iconic 'Nudge' screen shake, and setting your crush's favorite song as your status.",causeOfDeath:"Acquisition and replacement by Skype, mobile transition.",initialRespects:11450},{id:"orkut",name:"Orkut",years:"2004 – 2014",category:"Social Network",icon:"🟣",epitaph:"Google's social pioneer that captivated Brazil and India with community fan pages and 100% Trustworthy / Sexy / Cool ratings.",causeOfDeath:"Google shifted focus to Google+; overtaken by Facebook.",initialRespects:6410},{id:"grooveshark",name:"Grooveshark",years:"2006 – 2015",category:"Music Streaming",icon:"🦈",epitaph:"The pirate king of web-based music streaming before Spotify was mainstream.",causeOfDeath:"Massive copyright infringement lawsuits by major record labels.",initialRespects:5219},{id:"geocities",name:"GeoCities",years:"1994 – 2009",category:"Web Hosting",icon:"🏘️",epitaph:"The neon-colored neighborhood where everyone built their first animated GIF temple.",causeOfDeath:"Yahoo shut down US operations as modern blogging and social networks emerged.",initialRespects:8730},{id:"reader",name:"Google Reader",years:"2005 – 2013",category:"RSS Reader",icon:"📰",epitaph:"The cleanest, most beloved RSS curator. Its demise sparked internet-wide mourning.",causeOfDeath:"Google's spring cleaning to funnel attention into Google+.",initialRespects:7120}],sv=()=>{const{openGraveyard:r,setOpenGraveyard:e}=Ti(),[i,s]=He.useState({});if(He.useEffect(()=>{const c={};av.forEach(d=>{c[d.id]=d.initialRespects}),s(c)},[]),!r)return null;const l=c=>{ut.playRespectChime(),s(d=>({...d,[c]:(d[c]||0)+1}))};return x.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn",children:x.jsxs("div",{className:"relative w-full max-w-4xl max-h-[88vh] bg-gradient-to-b from-gray-900 to-black text-gray-100 border border-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col",children:[x.jsxs("div",{className:"px-6 py-5 border-b border-gray-800 flex items-center justify-between bg-black/40",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("span",{className:"text-3xl",children:"🪦"}),x.jsxs("div",{children:[x.jsx("h2",{className:"text-xl md:text-2xl font-black text-white tracking-tight",children:"The Internet Graveyard"}),x.jsx("p",{className:"text-xs text-gray-400",children:"Honoring the fallen digital giants who shaped how we browse today."})]})]}),x.jsx("button",{onClick:()=>e(!1),className:"p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition",children:x.jsx(qs,{className:"w-5 h-5"})})]}),x.jsx("div",{className:"p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4",children:av.map(c=>x.jsxs("div",{className:"bg-white/[0.03] border border-white/10 hover:border-purple-500/40 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between group",children:[x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center justify-between mb-2",children:[x.jsx("span",{className:"text-3xl",children:c.icon}),x.jsx("span",{className:"text-xs font-mono text-purple-400 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-800",children:c.years})]}),x.jsx("h3",{className:"text-lg font-bold text-white group-hover:text-purple-300 transition",children:c.name}),x.jsxs("p",{className:"text-xs text-gray-300 italic mt-1 mb-2",children:['"',c.epitaph,'"']}),x.jsxs("div",{className:"text-[11px] text-gray-400 bg-black/40 p-2 rounded-lg border border-white/5",children:[x.jsx("strong",{className:"text-red-400",children:"Cause of Demise:"})," ",c.causeOfDeath]})]}),x.jsxs("div",{className:"mt-4 pt-3 border-t border-white/5 flex items-center justify-between",children:[x.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:[i[c.id]||c.initialRespects," candles lit"]}),x.jsxs("button",{onClick:()=>l(c.id),className:"bg-white/10 hover:bg-purple-600/30 text-white px-3 py-1 text-xs rounded-lg font-semibold border border-white/20 hover:border-purple-400 transition-all flex items-center gap-1.5 active:scale-95",children:[x.jsx(m2,{className:"w-3.5 h-3.5 text-amber-400"}),x.jsx("span",{children:"Light Candle (F)"})]})]})]},c.id))})]})})},rv=[{id:"cern-first-web",year:1995,headline:"The First Web Page Ran on a NeXT Computer",story:"Tim Berners-Lee wrote the first web server on Steve Jobs' NeXT computer. The computer had a sticker in red ink: 'This machine is a server. DO NOT POWER IT DOWN!'",quote:"The web is more a social creation than a technical one.",trivia:"The first image uploaded to the web was a comedy band of CERN scientists called 'Les Horribles Cernettes'."},{id:"y2k-panic",year:2e3,headline:"The Billion-Dollar Midnight of Y2K",story:"Governments and corporations spent an estimated $300-$500 billion fixing two-digit date fields in legacy software. When the clock struck 00:00, airplanes stayed in the sky and power plants kept humming.",quote:"The biggest crisis that never happened.",trivia:"A few slot machines in Delaware stopped working, and a video rental store in New York charged a customer a $91,250 late fee."},{id:"myspace-tom",year:2005,headline:"Tom Anderson: Everyone's First Digital Friend",story:"When you signed up for MySpace, you automatically had one friend: co-founder Tom Anderson, smiling in his white t-shirt in front of a whiteboard. He remained everyone's default buddy.",quote:"Thanks for being my friend.",trivia:"MySpace was once offered to buy Facebook for $75 million in 2005, but CEO Chris DeWolfe rejected Mark Zuckerberg's price."},{id:"instagram-13-people",year:2010,headline:"Instagram Launched with Just 13 Employees",story:"When Facebook acquired Instagram in 2012 for $1 billion, Instagram had only 13 employees and zero ad revenue. It had 30 million registered iOS users.",quote:"Filters made bad iPhone 4 cameras look like artsy Polaroid photography.",trivia:"The first photo posted on Instagram was a stray dog sitting near a taco stand in Todos Santos, Mexico, taken by co-founder Kevin Systrom."},{id:"the-dress-2015",year:2015,headline:"White & Gold or Black & Blue?",story:"On February 26, 2015, a washed-out photograph of a lace dress broke the internet, generating 10 million tweets in a single night as neuroscientists debated chromatic human perception.",quote:"I see white and gold. You are all crazy.",trivia:"The original dress was definitively confirmed to be royal blue with black lace."},{id:"zoom-boom-2020",year:2020,headline:"When the Planet Moved to a 3x3 Grid",story:"Within weeks of global lockdowns, Zoom went from 10 million daily participants to over 300 million. 'You're on mute' became the most spoken sentence in human communication.",quote:"Can everyone see my screen?",trivia:"Virtual backgrounds sparked a massive run on green screens and ring lights worldwide."},{id:"agentic-web-2026",year:2026,headline:"Websites That Build Themselves as You Browse",story:"Modern web architecture shifted from static DOM trees to synthetic generative interfaces that adapt layout, copy, and tools dynamically based on human intent and AI agent collaboration.",quote:"The interface is no longer designed; it is negotiated.",trivia:"Over 40% of web queries are now executed by autonomous software agents acting on behalf of humans."}],ov=()=>{const{openSurprise:r,setOpenSurprise:e,setEra:i}=Ti(),[s,l]=He.useState(0);if(!r)return null;const c=rv[s],d=()=>{ut.playSpatialGlow();const m=Math.floor(Math.random()*rv.length);l(m)},p=()=>{i(c.year),e(!1)};return x.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn",children:x.jsxs("div",{className:"relative w-full max-w-xl bg-gradient-to-b from-gray-900 via-indigo-950 to-black text-white border border-indigo-500/30 rounded-3xl shadow-2xl p-6 overflow-hidden",children:[x.jsx("button",{onClick:()=>e(!1),className:"absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition",children:x.jsx(qs,{className:"w-5 h-5"})}),x.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2",children:[x.jsx(js,{className:"w-4 h-4"}),x.jsxs("span",{children:["Internet History Roulette • Year ",c.year]})]}),x.jsx("h3",{className:"text-xl md:text-2xl font-black text-white tracking-tight mb-3",children:c.headline}),x.jsx("p",{className:"text-sm text-gray-300 leading-relaxed mb-4",children:c.story}),x.jsxs("div",{className:"bg-indigo-900/30 border border-indigo-500/20 p-3 rounded-xl text-xs text-indigo-200 mb-4 italic",children:["💡 ",x.jsx("strong",{children:"Nostalgia Trivia:"})," ",c.trivia]}),x.jsxs("div",{className:"flex items-center justify-between pt-2",children:[x.jsxs("button",{onClick:d,className:"bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold border border-white/20 transition flex items-center gap-1.5 active:scale-95",children:[x.jsx(w2,{className:"w-3.5 h-3.5"}),x.jsx("span",{children:"Spin Roulette Again"})]}),x.jsxs("button",{onClick:p,className:"bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-lg active:scale-95",children:["Travel to ",c.year," →"]})]})]})})},G2={1995:{year:1995,title:"Raw HTML 2.0 & Inline Table Layouts",language:"html",code:`<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<HTML>
<HEAD>
  <TITLE>Welcome to CyberZone '95</TITLE>
</HEAD>
<BODY BGCOLOR="#C0C0C0" TEXT="#000000" LINK="#0000FF" VLINK="#800080">
  <CENTER>
    <H1><FONT COLOR="#000080" FACE="Times New Roman">CYBERZONE '95</FONT></H1>
    <MARQUEE BEHAVIOR="SCROLL" DIRECTION="LEFT">*** BEST VIEWED IN NETSCAPE NAVIGATOR AT 800x600 RESOLUTION ***</MARQUEE>
    <HR WIDTH="80%">
  </CENTER>

  <TABLE BORDER="3" CELLPADDING="5" CELLSPACING="2" WIDTH="100%" BGCOLOR="#D4D0C8">
    <TR>
      <!-- Navigation Column -->
      <TD WIDTH="25%" VALIGN="TOP" BGCOLOR="#FFFFFF">
        <B><FONT SIZE="2">EXPLORE:</FONT></B><BR>
        <A HREF="about.html">&#187; About Webmaster</A><BR>
        <A HREF="guestbook.cgi">&#187; Sign Guestbook</A><BR>
        <A HREF="mailto:webmaster@cyberzone.com">&#187; Send Mailto</A>
      </TD>

      <!-- Main Body -->
      <TD WIDTH="75%" VALIGN="TOP">
        <H3>Welcome to the Information Superhighway!</H3>
        <P>You are visitor number <IMG SRC="/cgi-bin/counter.pl?id=95" ALT="Counter"></P>
        <CENTER><IMG SRC="under_construction.gif" ALT="Under Construction"></CENTER>
      </TD>
    </TR>
  </TABLE>
</BODY>
</HTML>`,historicalContext:"Before CSS was supported, all visual layouts were created using nested <table> elements, uppercase tag conventions, and inline <font> wrappers. Stylesheets did not exist yet.",techHighlights:["HTML 2.0","Nested <table> grids","Inline <font> tags","<marquee> element","Perl CGI counters"]},2e3:{year:2e3,title:"Macromedia Flash Embedding & Framesets",language:"html",code:`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<HTML>
<HEAD>
  <TITLE>Mega-Portal 2000 | Flash Golden Age</TITLE>
  <SCRIPT LANGUAGE="JavaScript">
    <!--
    function openPopup(url) {
      window.open(url, 'win', 'width=640,height=480,scrollbars=yes');
    }
    // -->
  <\/SCRIPT>
</HEAD>

<!-- The Classic Frameset Era -->
<FRAMESET ROWS="80,*" FRAMEBORDER="NO" BORDER="0" FRAMESPACING="0">
  <FRAME SRC="top_nav.html" NAME="topFrame" SCROLLING="NO" NORESIZE>
  <FRAME SRC="main_content.html" NAME="mainFrame">
</FRAMESET>

<!-- Main Flash Embed Wrapper -->
<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0"
        WIDTH="550" HEIGHT="400">
  <PARAM NAME="movie" VALUE="intro_animation.swf">
  <PARAM NAME="quality" VALUE="high">
  <PARAM NAME="bgcolor" VALUE="#000033">
  <EMBED SRC="intro_animation.swf" QUALITY="high" BGCOLOR="#000033"
         WIDTH="550" HEIGHT="400" TYPE="application/x-shockwave-flash"
         PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">
  </EMBED>
</OBJECT>
</HTML>`,historicalContext:"The turn of the millennium was dominated by Macromedia Flash movies embedded via dual <object> and <embed> tags to satisfy both Internet Explorer and Netscape. Framesets split the browser into multiple sub-pages.",techHighlights:["Macromedia Flash 4 SWF","Dual <object>/<embed> tags","<frameset> architectures","JavaScript popup windows"]},2005:{year:2005,title:"Web 2.0, CSS Floats & jQuery AJAX",language:"javascript",code:`/* Web 2.0 Clearfix & Glossy Badge Stylesheet */
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.glossy-btn {
  background: url('/img/button_gloss_sprite.png') 0 0 repeat-x;
  border: 1px solid #1565c0;
  color: #ffffff;
  font-family: Tahoma, Verdana, sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  float: left;
  padding: 6px 14px;
}

/* Early jQuery AJAX & MSN Nudge Logic */
$(document).ready(function() {
  $('#send-nudge-btn').click(function(e) {
    e.preventDefault();
    
    // Asynchronous JavaScript and XML (AJAX)
    $.ajax({
      type: 'POST',
      url: '/api/msn/nudge.php',
      data: { user: 'xX_Sk8erBoi_Xx', action: 'nudge' },
      dataType: 'json',
      success: function(response) {
        // Violently shake viewport
        $('#chat-window').effect('shake', { times: 3, distance: 8 }, 400);
        new Audio('/sounds/nudge.wav').play();
      }
    });
  });
});`,historicalContext:"Web 2.0 introduced AJAX (no more full-page reloads!) and CSS float-based layouts. Developers relied on CSS sprite images for gradients and jQuery to smooth over browser quirks.",techHighlights:["AJAX asynchronous requests","jQuery DOM manipulation","PNG sprite backgrounds","CSS float clearfix hacks"]},2010:{year:2010,title:"CSS3 Gradients, Skeuomorphism & Media Queries",language:"css",code:`/* Skeuomorphic Glass & Stitched Leather (iOS 4 / early Facebook) */
.skeuo-card {
  background: -webkit-gradient(linear, left top, left bottom,
              color-stop(0%, #f7f7f7),
              color-stop(100%, #e0e0e0));
  border: 1px solid #b3b3b3;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8),
                      0 4px 12px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8),
              0 4px 12px rgba(0, 0, 0, 0.3);
}

.aqua-button {
  background: -webkit-linear-gradient(top, #4a6984 0%, #354b60 50%, #20303e 100%);
  border: 1px solid #1a252f;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

/* The Dawn of Responsive Web Design */
@media screen and (max-width: 768px) {
  .skeuo-container {
    width: 100% !important;
    padding: 10px;
  }
}`,historicalContext:"Vendor prefixes (-webkit-, -moz-) exploded alongside CSS3 gradients, inset drop shadows, and Ethan Marcotte's seminal concept of Responsive Web Design for the iPhone 4.",techHighlights:["CSS3 vendor prefixes","Skeuomorphic inset shadows","-webkit-linear-gradient","Early Media Queries"]},2015:{year:2015,title:"React Class Components & Flexbox Layouts",language:"javascript",code:`import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrendingVines } from '../actions/vineActions';

// React 0.14 Class Component
class VineFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { isLooping: true, activeIndex: 0 };
    this.handleTap = this.handleTap.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchTrendingVines());
  }

  handleTap() {
    this.setState((prevState) => ({ isLooping: !prevState.isLooping }));
  }

  render() {
    const { vines, loading } = this.props;
    if (loading) return <div className="material-spinner" />;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <header className="material-appbar" style={{ elevation: 4 }}>
          <h1>Vine 6-Second Feed</h1>
        </header>
        {vines.map(vine => (
          <article key={vine.id} className="flat-card" onClick={this.handleTap}>
            <video src={vine.videoUrl} loop={this.state.isLooping} autoPlay />
          </article>
        ))}
      </div>
    );
  }
}

export default connect(state => ({ vines: state.vines.list }))(VineFeed);`,historicalContext:"The SPAs (Single Page Applications) revolution took over. React class components with lifecycle methods (`componentDidMount`), Redux store architectures, and pure Flexbox layouts replaced older jQuery workflows.",techHighlights:["React Class Components","Redux State Store","CSS Flexbox","Material Design Paper Z-Index"]},2020:{year:2020,title:"TypeScript, Tailwind Utility Soup & React Hooks",language:"typescript",code:`import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';

interface DiscordUser {
  id: string;
  username: string;
  status: 'online' | 'idle' | 'dnd';
  listeningTo?: string;
}

export const BentoStudyLounge: NextPage = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [users, setUsers] = useState<DiscordUser[]>([]);

  useEffect(() => {
    const socket = new WebSocket('wss://api.time-machine.io/live');
    socket.onmessage = (event) => setUsers(JSON.parse(event.data));
    return () => socket.close();
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Bento Visualizer Card */}
      <div className="md:col-span-2 bg-[#161b22] border border-gray-800/80 rounded-2xl p-6 backdrop-blur-md shadow-2xl flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-indigo-400">#lofi-beats-24-7</span>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-2 px-4 rounded-xl transition-all active:scale-95"
        >
          {isPlaying ? 'Pause Stream' : 'Play Lo-Fi'}
        </button>
      </div>
    </div>
  );
};`,historicalContext:"The pandemic era popularized pure TypeScript, Tailwind CSS utility classes, Next.js full-stack architectures, and OLED dark-mode bento layouts.",techHighlights:["TypeScript Interfaces","Tailwind CSS Utilities","React Hooks (useState/useEffect)","WebSockets WebRTC"]},2026:{year:2026,title:"Agentic Prompt Graphs & Neural Vector Streaming",language:"typescript",code:`import { createAgentPipeline, type NeuralCanvasIntent } from '@spatial/agent-engine';

// Intention-Driven Dynamic UI Engine
export const synthesizeSpatialView = async (intent: NeuralCanvasIntent) => {
  const agentMesh = await createAgentPipeline({
    localWeights: 'gpt-5-spatial-mini',
    synapseLatencyLimitMs: 0.4,
    runtime: 'edge-neural-wasm',
  });

  // Agent dynamically negotiates schema and renders DOM nodes
  const dynamicStream = await agentMesh.generateComponentTree({
    prompt: intent.userQuery,
    spatialDepth: intent.displayMetrics.depthZ,
    autoHapticFeedback: true,
  });

  return {
    status: 'synthesized_at_runtime',
    neuralMeshNode: dynamicStream.render(),
    telemetry: { inferenceLatency: '0.2ms direct' },
  };
};`,historicalContext:"Websites are no longer static DOM trees written by humans; they are intention-driven interfaces synthesized on-the-fly by local AI agents responding to human context.",techHighlights:["Autonomous Agent Pipelines","Intent-Driven UI Synthesis","Neural Vector Rendering","Spatial Micro-Haptics"]}},lv=()=>{const{openDevTools:r,setOpenDevTools:e,currentEra:i}=Ti(),[s,l]=He.useState(!1);if(!r)return null;const c=G2[i],d=()=>{ut.playRetroClick(),navigator.clipboard.writeText(c.code),l(!0),setTimeout(()=>l(!1),2e3)};return x.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn font-mono",children:x.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] bg-[#1e1e1e] text-[#d4d4d4] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col",children:[x.jsxs("div",{className:"px-4 py-3 bg-[#252526] border-b border-[#333333] flex items-center justify-between",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsxs("div",{className:"flex gap-1.5",children:[x.jsx("span",{className:"w-3 h-3 rounded-full bg-[#ff5f56]"}),x.jsx("span",{className:"w-3 h-3 rounded-full bg-[#ffbd2e]"}),x.jsx("span",{className:"w-3 h-3 rounded-full bg-[#27c93f]"})]}),x.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-gray-300",children:[x.jsx(ol,{className:"w-4 h-4 text-blue-400"}),x.jsxs("span",{children:["devtools_source_",i,".",c.language==="html"?"html":c.language==="css"?"css":"ts"]})]})]}),x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsxs("button",{onClick:d,className:"px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-xs flex items-center gap-1.5 transition active:scale-95",children:[s?x.jsx(n2,{className:"w-3.5 h-3.5 text-green-400"}):x.jsx(c2,{className:"w-3.5 h-3.5"}),x.jsx("span",{children:s?"Copied":"Copy Code"})]}),x.jsx("button",{onClick:()=>e(!1),className:"p-1 text-gray-400 hover:text-white rounded bg-white/5 hover:bg-white/10 transition",children:x.jsx(qs,{className:"w-4 h-4"})})]})]}),x.jsxs("div",{className:"p-4 bg-[#2d2d30] border-b border-[#3e3e42] text-xs flex items-start gap-3",children:[x.jsx(x2,{className:"w-4 h-4 text-amber-400 mt-0.5 shrink-0"}),x.jsxs("div",{children:[x.jsx("strong",{className:"text-white block mb-0.5",children:c.title}),x.jsx("p",{className:"text-gray-400 leading-relaxed",children:c.historicalContext}),x.jsx("div",{className:"flex flex-wrap gap-1.5 mt-2",children:c.techHighlights.map((p,m)=>x.jsx("span",{className:"bg-black/40 text-blue-300 border border-blue-900/50 px-2 py-0.5 rounded text-[10px]",children:p},m))})]})]}),x.jsx("div",{className:"flex-1 p-4 overflow-y-auto bg-[#1e1e1e] text-xs leading-relaxed",children:x.jsx("pre",{className:"text-[#9cdcfe] font-mono whitespace-pre-wrap selection:bg-[#264f78]",children:x.jsx("code",{children:c.code})})})]})})},cv=()=>{const{openTimeCapsule:r,setOpenTimeCapsule:e,currentEra:i}=Ti(),[s,l]=He.useState(i),[c,d]=He.useState("CyberSurfer_99"),[p,m]=He.useState("Surfing the Information Superhighway 🌐"),h=He.useRef(null);if(!r)return null;const y=()=>{ut.playCameraClick();const _=h.current;if(!_)return;const g=_.getContext("2d");if(!g)return;const E=_.width=700,w=_.height=420;if(s===1995)g.fillStyle="#d4d0c8",g.fillRect(0,0,E,w),g.lineWidth=10,g.strokeStyle="#000080",g.strokeRect(10,10,E-20,w-20),g.fillStyle="#000080",g.font='bold 28px "Times New Roman", serif',g.textAlign="center",g.fillText("CERTIFIED WORLD WIDE WEB EXPLORER",E/2,60),g.fillStyle="#333333",g.font='italic 16px "Times New Roman", serif',g.fillText("This document certifies that the cyber-traveler:",E/2,100),g.fillStyle="#000000",g.font='bold 36px "Times New Roman", serif',g.fillText(`[ ${c.toUpperCase()} ]`,E/2,160),g.font='16px "Courier New", monospace',g.fillStyle="#000080",g.fillText(`Status: "${p}"`,E/2,220),g.fillText("Dial-up Speed: 28.8 Kbps • Netscape 1.1 Verified",E/2,260),g.beginPath(),g.arc(E/2,340,45,0,Math.PI*2),g.fillStyle="#d4af37",g.fill(),g.fillStyle="#000",g.font="bold 12px sans-serif",g.fillText("OFFICIAL 1995",E/2,345);else if(s===2005){const b=g.createLinearGradient(0,0,0,w);b.addColorStop(0,"#e3f2fd"),b.addColorStop(1,"#90caf9"),g.fillStyle=b,g.fillRect(0,0,E,w),g.fillStyle="#0288d1",g.fillRect(0,0,E,50),g.fillStyle="#ffffff",g.font="bold 22px Tahoma, sans-serif",g.textAlign="left",g.fillText("💬 MSN Messenger 7.5 — Contact Card",25,33),g.fillStyle="#0d47a1",g.font="bold 32px Tahoma, sans-serif",g.fillText(c,40,110),g.fillStyle="#e65100",g.font="italic 18px Tahoma, sans-serif",g.fillText(`(Offline / "${p}")`,40,150),g.fillStyle="#333333",g.font="16px Tahoma, sans-serif",g.fillText("🎶 Top Song: Linkin Park - In The End (128kbps)",40,200),g.fillText("★ Top 8 MySpace Position: #1 Best Friend",40,235),g.fillText("⚡ Nudges Sent: 420 • Emoticon Pack: MSN Plus! Gold",40,270),g.fillStyle="#1565c0",g.font="bold 14px monospace",g.fillText(">>> OFFICIAL 2005 WEB 2.0 TIME CAPSULE <<<",40,360)}else{g.fillStyle="#09090b",g.fillRect(0,0,E,w);const b=g.createRadialGradient(E/2,w/2,10,E/2,w/2,300);b.addColorStop(0,"rgba(139, 92, 246, 0.3)"),b.addColorStop(1,"rgba(0, 0, 0, 0)"),g.fillStyle=b,g.fillRect(0,0,E,w),g.strokeStyle="rgba(255, 255, 255, 0.15)",g.strokeRect(20,20,E-40,w-40),g.fillStyle="#8b5cf6",g.font="bold 14px monospace",g.textAlign="left",g.fillText("SPATIAL AGENT CITIZEN PASSPORT • 2026",45,60),g.fillStyle="#ffffff",g.font="bold 34px sans-serif",g.fillText(c,45,120),g.fillStyle="#a1a1aa",g.font="16px sans-serif",g.fillText(`Intent: "${p}"`,45,170),g.fillText(`Era Node: Year ${s} Synchronized`,45,210),g.fillText("Neural Stream Latency: 0.2ms Synapse Active",45,245),g.fillStyle="#34d399",g.font="bold 14px monospace",g.fillText("● VERIFIED AUTONOMOUS NODE #8492-X",45,330)}const U=_.toDataURL("image/png"),M=document.createElement("a");M.download=`time_capsule_${s}_${c}.png`,M.href=U,M.click()};return x.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn font-bento",children:x.jsxs("div",{className:"relative w-full max-w-xl bg-[#121214] text-white border border-white/10 rounded-3xl shadow-2xl p-6 overflow-hidden",children:[x.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4 mb-4",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx(js,{className:"w-5 h-5 text-amber-400"}),x.jsx("h3",{className:"text-lg font-bold",children:"Nostalgia Time Capsule Card"})]}),x.jsx("button",{onClick:()=>e(!1),className:"p-1.5 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition",children:x.jsx(qs,{className:"w-4 h-4"})})]}),x.jsxs("div",{className:"space-y-4 text-xs",children:[x.jsxs("div",{children:[x.jsx("label",{className:"block text-gray-400 mb-1 font-mono",children:"1. Select Card Era Style:"}),x.jsx("div",{className:"grid grid-cols-4 gap-2",children:[1995,2005,2015,2026].map(_=>x.jsx("button",{onClick:()=>{ut.playRetroClick(),l(_)},className:`py-1.5 rounded-lg border font-bold transition ${s===_?"bg-amber-400 text-black border-amber-400":"bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"}`,children:_},_))})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-gray-400 mb-1 font-mono",children:"2. Your Cyber Handle / Nickname:"}),x.jsx("input",{type:"text",value:c,onChange:_=>d(_.target.value),className:"w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-amber-400",placeholder:"e.g. Neo_Matrix_2000"})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-gray-400 mb-1 font-mono",children:"3. Custom Status / Bio:"}),x.jsx("input",{type:"text",value:p,onChange:_=>m(_.target.value),className:"w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-amber-400",placeholder:"e.g. Surfing cyberspace @ 56k"})]})]}),x.jsx("canvas",{ref:h,className:"hidden"}),x.jsx("div",{className:"mt-6 pt-4 border-t border-white/10 flex justify-end",children:x.jsxs("button",{onClick:y,className:"bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-black px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg flex items-center gap-2 active:scale-95",children:[x.jsx(h2,{className:"w-4 h-4"}),x.jsx("span",{children:"Generate & Download PNG Card"})]})})]})})},H2=[{id:"aol-mail",name:"AOL 'You've Got Mail!'",year:"1997",category:"Dial-up Era",description:"Voice of Elwood Edwards that gave millions of early web users their daily dopamine rush.",synthKey:"aol"},{id:"icq-uhoh",name:"ICQ 'Uh-Oh!'",year:"1998",category:"Instant Messenger",description:"The playful two-tone horn that signaled your school friend signed on with their 7-digit UIN.",synthKey:"icq"},{id:"win95-start",name:"Windows 95 Startup Chime",year:"1995",category:"Operating System",description:"Composed by ambient music pioneer Brian Eno on a Macintosh computer.",synthKey:"win95"},{id:"winxp-start",name:"Windows XP Bliss Chime",year:"2001",category:"Operating System",description:"The uplifting 4-chord orchestral fanfare of the Luna Blue desktop generation.",synthKey:"winXP"},{id:"msn-nudge",name:"MSN Messenger Nudge & Alert",year:"2005",category:"Instant Messenger",description:"The explosive screen-shaking sound that forced anyone with their speakers turned up to jump.",synthKey:"nudge"},{id:"skype-ring",name:"Classic Skype Incoming Ring",year:"2006",category:"VoIP Call",description:"The bouncy, cheerful marimba ringtone of our first cross-continent video calls.",synthKey:"skype"},{id:"dialup-handshake",name:"56k Dial-Up Modem Screech",year:"1995-2003",category:"Hardware",description:"The high-frequency carrier negotiation screech that connected humanity to cyberspace.",synthKey:"dialup"},{id:"ipod-click",name:"iPod Classic Click-Wheel Rattle",year:"2004",category:"Hardware",description:"The tactile piezo mechanical click generated inside the chassis as you spun the wheel.",synthKey:"ipodClick"}],uv=()=>{const{openAudioVault:r,setOpenAudioVault:e}=Ti(),[i,s]=He.useState(null);if(!r)return null;const l=c=>{switch(s(c.id),c.synthKey){case"aol":ut.playAOLMail();break;case"icq":ut.playICQUhOh();break;case"win95":ut.playWin95Sound();break;case"winXP":ut.playWinXPSound();break;case"skype":ut.playSkypeRing();break;case"ipodClick":ut.playIpodClick();break;case"dialup":ut.playDialUp();break;case"nudge":ut.playMsnNudge();break}setTimeout(()=>s(null),1200)};return x.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn font-bento",children:x.jsxs("div",{className:"relative w-full max-w-2xl bg-gradient-to-b from-[#18181b] to-[#09090b] text-white border border-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]",children:[x.jsxs("div",{className:"px-6 py-5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx(ll,{className:"w-6 h-6 text-amber-400"}),x.jsxs("div",{children:[x.jsx("h3",{className:"text-lg font-black tracking-tight",children:"The Dead Web Audio Vault"}),x.jsx("p",{className:"text-xs text-gray-400",children:"Playable synthesized audio relics from the dial-up and desktop era."})]})]}),x.jsx("button",{onClick:()=>e(!1),className:"p-1.5 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition",children:x.jsx(qs,{className:"w-4 h-4"})})]}),x.jsx("div",{className:"p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-3",children:H2.map(c=>{const d=i===c.id;return x.jsxs("div",{onClick:()=>l(c),className:`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${d?"bg-amber-500/20 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)] scale-102":"bg-white/[0.03] border-white/5 hover:border-amber-400/40 hover:bg-white/[0.06]"}`,children:[x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[x.jsx("span",{className:"text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60",children:c.year}),x.jsx("span",{className:"text-xs font-bold text-gray-200 group-hover:text-amber-300 transition",children:c.name})]}),x.jsx("p",{className:"text-[11px] text-gray-400 leading-tight",children:c.description})]}),x.jsx("button",{className:`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ml-3 transition shadow ${d?"bg-amber-400 text-black animate-pulse":"bg-white/10 text-white group-hover:bg-amber-400 group-hover:text-black"}`,children:d?x.jsx(Wr,{className:"w-4 h-4 animate-spin"}):x.jsx(Xh,{className:"w-4 h-4 ml-0.5"})})]},c.id)})})]})})},fv=()=>{const[r]=He.useState(42891),[e,i]=He.useState(["Dave from Ohio: Cool site! Bookmarked in Netscape 1.1.","WebSurfer_95: Best personal homepage on the World Wide Web! Keep it up!","Sarah: Hi! Testing my 14.4k modem from university lab."]),[s,l]=He.useState(""),[c,d]=He.useState(""),p=m=>{m.preventDefault(),!(!s.trim()||!c.trim())&&(ut.playRetroClick(),i([`${s}: ${c}`,...e]),l(""),d(""))};return x.jsx("div",{className:"bg-[#c0c0c0] text-black font-raw min-h-[70vh] p-3 sm:p-6 md:p-8 overflow-x-hidden",children:x.jsxs("div",{className:"max-w-4xl mx-auto border-4 border-t-white border-l-white border-b-gray-800 border-r-gray-800 p-4 sm:p-6 bg-[#c0c0c0] shadow-md",children:[x.jsxs("div",{className:"text-center py-2 sm:py-3 border-2 border-black mb-4 sm:mb-6 bg-yellow-200",children:[x.jsx("span",{className:"text-lg",children:"⚠️"}),x.jsx("strong",{className:"text-red-700 text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mx-1 sm:mx-2",children:"*** UNDER CONSTRUCTION - BEST VIEWED IN NETSCAPE 800x600 ***"}),x.jsx("span",{className:"text-lg",children:"⚠️"})]}),x.jsxs("div",{className:"text-center mb-4 sm:mb-6",children:[x.jsx("h1",{className:"text-2xl sm:text-4xl md:text-5xl font-bold font-raw text-blue-900 mb-1 sm:mb-2",children:"Welcome to the CyberZone (1995)"}),x.jsx("p",{className:"text-xs sm:text-sm italic",children:'"The Information Superhighway Starts Here!"'}),x.jsx("hr",{className:"my-3 sm:my-4 border-t-2 border-gray-600 border-b-2 border-white"})]}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6",children:[x.jsxs("div",{className:"border-2 border-t-white border-l-white border-b-black border-r-black p-3 bg-[#d4d0c8]",children:[x.jsx("h3",{className:"font-bold text-center border-b border-black pb-1 mb-2 bg-[#000080] text-white text-xs sm:text-sm",children:"NAVIGATION"}),x.jsxs("ul",{className:"list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm text-blue-800 underline font-bold",children:[x.jsx("li",{children:x.jsx("a",{href:"#about",onClick:m=>{m.preventDefault(),ut.playRetroClick()},children:"About Me"})}),x.jsx("li",{children:x.jsx("a",{href:"#links",onClick:m=>{m.preventDefault(),ut.playRetroClick()},children:"Cool Links"})}),x.jsx("li",{children:x.jsx("a",{href:"#guestbook",onClick:m=>{m.preventDefault(),ut.playRetroClick()},children:"Sign Guestbook"})}),x.jsx("li",{children:x.jsx("a",{href:"#email",onClick:m=>{m.preventDefault(),ut.playRetroClick()},children:"Mailto: Webmaster"})})]}),x.jsxs("div",{className:"mt-4 sm:mt-6 text-center border border-black p-2 bg-black text-green-400 font-pixel text-[11px]",children:[x.jsx("p",{children:"VISITOR HIT COUNTER:"}),x.jsxs("div",{className:"text-base sm:text-lg font-bold tracking-widest bg-gray-900 border border-green-700 py-1 mt-1",children:["[ 00",r," ]"]})]})]}),x.jsxs("div",{className:"md:col-span-2 space-y-4 sm:space-y-6",children:[x.jsxs("div",{className:"border-2 border-t-black border-l-black border-b-white border-r-white p-3 sm:p-4 bg-white",children:[x.jsx("h2",{className:"text-lg sm:text-xl font-bold text-blue-900 mb-2",children:"Welcome to My Personal Homepage"}),x.jsxs("p",{className:"text-xs sm:text-sm leading-relaxed mb-2",children:["Hello cyber-traveler! You have reached my node on the global Internet. I am building this site using raw HTML tags like ",x.jsx("code",{children:"<table>"}),", ",x.jsx("code",{children:"<center>"}),", and ",x.jsx("code",{children:'<font color="red">'}),"."]}),x.jsx("p",{className:"text-xs sm:text-sm leading-relaxed",children:"Please do not steal my animated GIFs without asking permission via email first!"})]}),x.jsxs("div",{className:"border-2 border-t-white border-l-white border-b-black border-r-black p-3 sm:p-4 bg-[#d4d0c8]",children:[x.jsx("h3",{className:"font-bold text-xs sm:text-sm bg-[#000080] text-white px-2 py-1 mb-3",children:"📖 SIGN MY GUESTBOOK (Interactive)"}),x.jsx("form",{onSubmit:p,className:"space-y-2 mb-3",children:x.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[x.jsx("input",{type:"text",placeholder:"Cyber Nickname",value:s,onChange:m=>l(m.target.value),className:"border-2 border-t-black border-l-black border-b-white border-r-white px-2 py-1.5 text-xs bg-white font-pixel"}),x.jsx("input",{type:"text",placeholder:"Leave a message...",value:c,onChange:m=>d(m.target.value),className:"border-2 border-t-black border-l-black border-b-white border-r-white px-2 py-1.5 text-xs flex-1 bg-white font-pixel"}),x.jsx("button",{type:"submit",className:"bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black px-3 py-1.5 text-xs font-bold active:border-t-black active:border-l-black whitespace-nowrap",children:"Submit"})]})}),x.jsx("div",{className:"space-y-1.5 max-h-36 overflow-y-auto border border-black p-2 bg-white text-xs",children:e.map((m,h)=>x.jsxs("div",{className:"border-b border-gray-300 pb-1",children:["• ",m]},h))})]})]})]}),x.jsxs("div",{className:"mt-6 border-2 border-black p-2 sm:p-3 text-center text-[11px] sm:text-xs bg-yellow-100",children:[x.jsx("p",{className:"font-bold mb-1",children:"[ Member of the Sci-Fi WebRing ]"}),x.jsxs("div",{className:"flex justify-center gap-3 text-blue-800 underline",children:[x.jsx("a",{href:"#prev",onClick:m=>{m.preventDefault(),ut.playRetroClick()},children:"<< Prev"}),x.jsx("a",{href:"#random",onClick:m=>{m.preventDefault(),ut.playRetroClick()},children:"[ Random ]"}),x.jsx("a",{href:"#next",onClick:m=>{m.preventDefault(),ut.playRetroClick()},children:"Next >>"})]})]})]})})},V2=()=>{const[r,e]=He.useState(0),[i,s]=He.useState(50),[l,c]=He.useState(50),d=()=>{ut.playRetroClick(),e(p=>p+1),s(Math.floor(Math.random()*70)+15),c(Math.floor(Math.random()*60)+20)};return x.jsx("div",{className:"min-h-[75vh] p-3 sm:p-6 md:p-8 font-early2000 text-yellow-300 overflow-x-hidden",style:{backgroundColor:"#000033",backgroundImage:"radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ff00ff 1px, #000022 1px)",backgroundSize:"40px 40px",backgroundPosition:"0 0, 20px 20px"},children:x.jsxs("div",{className:"max-w-5xl mx-auto space-y-4 sm:space-y-6",children:[x.jsx("div",{className:"bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 p-0.5 sm:p-1 border-2 sm:border-4 border-dashed border-cyan-400",children:x.jsx("div",{className:"overflow-hidden whitespace-nowrap bg-black py-1",children:x.jsx("div",{className:"inline-block animate-marquee text-xs sm:text-sm font-bold text-yellow-300 tracking-wider",children:"🔥 WELCOME TO THE YEAR 2000 MILLENNIUM PORTAL! FLASH 4.0 ENABLED! PETS.COM IPO SURGES! Y2K SURVIVORS UNITE! 🔥"})})}),x.jsxs("div",{className:"text-center py-4 sm:py-6 border-2 sm:border-4 border-pink-500 bg-black/80 rounded-2xl shadow-[0_0_25px_rgba(255,0,255,0.6)]",children:[x.jsx("h1",{className:"text-3xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]",children:"⚡ MEGA-PORTAL 2000 ⚡"}),x.jsx("p",{className:"text-cyan-400 text-xs sm:text-sm mt-1 sm:mt-2 font-mono",children:"★ Optimized for Internet Explorer 5.5 @ 1024x768 ★"})]}),x.jsxs("div",{className:"border-2 sm:border-4 border-cyan-400 bg-black/90 p-3 sm:p-4 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.4)]",children:[x.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-cyan-500 pb-2 mb-3 gap-2",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("span",{className:"text-xl sm:text-2xl",children:"🎮"}),x.jsxs("div",{children:[x.jsx("h3",{className:"text-xs sm:text-base font-bold text-pink-400",children:"FLASH MINI-GAME: Pop The Dot-Com IPO!"}),x.jsx("p",{className:"text-[10px] sm:text-xs text-gray-300 font-mono",children:"Tap the soaring bubble before market closes!"})]})]}),x.jsxs("div",{className:"bg-pink-600 text-white font-mono px-2.5 py-1 rounded text-xs font-bold self-start sm:self-auto",children:["Valuation: $",r*100,"M"]})]}),x.jsx("div",{className:"relative h-48 sm:h-64 border-2 border-dashed border-pink-500 bg-gradient-to-b from-blue-950 to-black overflow-hidden rounded cursor-crosshair",children:x.jsx("button",{onClick:d,style:{top:`${l}%`,left:`${i}%`},className:"absolute transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-300 to-pink-500 text-black font-black text-[11px] sm:text-xs px-2.5 py-1.5 rounded-full border border-white animate-bounce shadow-[0_0_15px_#ff00ff] active:scale-125 transition touch-manipulation",children:"💸 PetsOnline.com 🚀"})})]}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4",children:[x.jsxs("div",{className:"border-2 border-yellow-400 p-3 bg-black/70 rounded",children:[x.jsx("h4",{className:"text-cyan-300 font-bold border-b border-yellow-400 pb-1 mb-2 text-xs sm:text-sm",children:"💾 TOP MP3s (Napster)"}),x.jsxs("ul",{className:"text-[11px] sm:text-xs space-y-1 text-gray-200 font-mono",children:[x.jsx("li",{children:"1. Eiffel 65 - Blue (Da Ba Dee)"}),x.jsx("li",{children:"2. Blink-182 - All The Small Things"}),x.jsx("li",{children:"3. Britney Spears - Oops!... I Did It Again"})]})]}),x.jsxs("div",{className:"border-2 border-pink-400 p-3 bg-black/70 rounded",children:[x.jsx("h4",{className:"text-pink-300 font-bold border-b border-pink-400 pb-1 mb-2 text-xs sm:text-sm",children:"📟 ICQ STATUS"}),x.jsxs("div",{className:"text-[11px] sm:text-xs font-mono text-green-400 flex items-center gap-2",children:[x.jsx("span",{className:"w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"}),'UIN: 84920194 (Online - "Winamp Playing")']})]}),x.jsxs("div",{className:"border-2 border-green-400 p-3 bg-black/70 rounded",children:[x.jsx("h4",{className:"text-green-300 font-bold border-b border-green-400 pb-1 mb-2 text-xs sm:text-sm",children:"🌐 WEB RING"}),x.jsx("p",{className:"text-[11px] sm:text-xs text-gray-300",children:"Proud node of the Cyber Millennium Ring (#42)"})]})]})]})})},k2=()=>{const[r,e]=He.useState([{sender:"bot",text:"Hey there! Welcome to MSN Messenger 7.5! Type anything or click Nudge!",time:"4:15 PM"},{sender:"me",text:"Hey! Did you hear the new Green Day album?",time:"4:16 PM"},{sender:"bot",text:"Yeah, Boulevard of Broken Dreams is on repeat on my iPod Mini! 🎧",time:"4:16 PM"}]),[i,s]=He.useState(""),[l,c]=He.useState(!1),d=["haha totally! check out my myspace profile later!","brb mom is yelling to get off the internet for landline :/","lol rawr xD","Did you see that video on that new site called YouTube?","add me on your top 8 or we are not friends haha"],p=h=>{if(h.preventDefault(),!i.trim())return;ut.playRetroClick();const y={sender:"me",text:i,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};e(_=>[..._,y]),s(""),setTimeout(()=>{ut.playMsnNudge();const _={sender:"bot",text:d[Math.floor(Math.random()*d.length)],time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};e(g=>[...g,_])},900)},m=()=>{ut.playMsnNudge(),c(!0),setTimeout(()=>c(!1),600)};return x.jsx("div",{className:`min-h-[75vh] p-3 sm:p-6 md:p-8 font-web2 bg-gradient-to-b from-[#e3f2fd] via-[#bbdefb] to-[#90caf9] text-gray-800 overflow-x-hidden ${l?"animate-nudge":""}`,children:x.jsxs("div",{className:"max-w-5xl mx-auto space-y-4 sm:space-y-6",children:[x.jsxs("div",{className:"text-center bg-white/90 p-3 sm:p-4 rounded-xl border border-blue-300 shadow-md",children:[x.jsx("div",{className:"inline-block bg-gradient-to-b from-orange-400 to-amber-500 text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1 shadow",children:"BETA 2.0"}),x.jsx("h1",{className:"text-2xl sm:text-4xl md:text-5xl font-black bg-gradient-to-b from-[#0288d1] to-[#01579b] bg-clip-text text-transparent",children:"The Social Web (2005)"}),x.jsx("p",{className:"text-[11px] sm:text-xs text-gray-600 mt-1",children:"MSN Messenger 7.5 • MySpace Music • Aqua Glass"})]}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6",children:[x.jsxs("div",{className:"md:col-span-2 bg-gradient-to-b from-[#eaf2fb] to-[#d6e5f7] border-2 border-[#6593cf] rounded-t-lg shadow-xl overflow-hidden flex flex-col h-[380px] sm:h-[440px]",children:[x.jsxs("div",{className:"bg-gradient-to-r from-[#4b7fc4] via-[#5c8ed6] to-[#4b7fc4] px-3 py-1.5 flex items-center justify-between text-white text-xs font-bold border-b border-[#2b5fa4]",children:[x.jsxs("div",{className:"flex items-center gap-1.5 truncate",children:[x.jsx("span",{children:"💬"}),x.jsx("span",{className:"truncate",children:"SmarterBot (Online)"})]}),x.jsx("span",{className:"w-2.5 h-2.5 bg-[#e57373] rounded-sm shrink-0"})]}),x.jsxs("div",{className:"bg-[#f0f6fc] px-2.5 py-1.5 border-b border-[#b9d1ea] flex items-center justify-between text-xs gap-2",children:[x.jsxs("div",{className:"flex items-center gap-2 truncate",children:[x.jsx("span",{className:"text-base",children:"👤"}),x.jsxs("div",{className:"truncate",children:[x.jsx("div",{className:"font-bold text-[#0d47a1] text-[11px] sm:text-xs truncate",children:"xX_Sk8erBoi_2005_Xx"}),x.jsx("div",{className:"text-[9px] sm:text-[10px] text-gray-500 italic truncate",children:"🎶 Listening to: Mr. Brightside"})]})]}),x.jsx("button",{onClick:m,className:"bg-gradient-to-b from-[#ffecb3] to-[#ffd54f] border border-[#ffb300] active:scale-95 text-[#e65100] font-black text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded shadow shrink-0",children:"💥 NUDGE!"})]}),x.jsx("div",{className:"flex-1 p-3 overflow-y-auto bg-white space-y-1.5 text-xs",children:r.map((h,y)=>x.jsxs("div",{className:h.sender==="me"?"text-blue-900":"text-purple-900",children:[x.jsxs("span",{className:"font-bold",children:[h.sender==="me"?"You":"SmarterBot"," (",h.time,"):"," "]}),x.jsx("span",{children:h.text})]},y))}),x.jsxs("form",{onSubmit:p,className:"p-2 bg-[#eaf2fb] border-t border-[#b9d1ea] flex gap-1.5",children:[x.jsx("input",{type:"text",value:i,onChange:h=>s(h.target.value),placeholder:"Type message or :-)",className:"flex-1 border border-[#7ba4d5] rounded px-2.5 py-1.5 text-xs bg-white focus:outline-none"}),x.jsx("button",{type:"submit",className:"bg-gradient-to-b from-[#42a5f5] to-[#1976d2] text-white px-3 py-1 text-xs font-bold rounded shadow active:scale-95",children:"Send"})]})]}),x.jsxs("div",{className:"bg-white border-2 border-[#1565c0] rounded p-3 sm:p-4 shadow-lg text-xs space-y-3",children:[x.jsx("div",{className:"bg-[#003399] text-white p-1.5 text-center font-bold text-xs",children:"★ MySpace Music Player ★"}),x.jsxs("div",{className:"flex items-center gap-2 bg-gray-100 p-2 rounded",children:[x.jsx("div",{className:"w-10 h-10 bg-gray-300 flex items-center justify-center text-lg font-bold shrink-0",children:"🎧"}),x.jsxs("div",{className:"truncate",children:[x.jsx("strong",{className:"text-blue-800 block truncate",children:"Fall Out Boy"}),x.jsx("p",{className:"text-[10px] text-gray-600 truncate",children:"Sugar, We're Goin Down"}),x.jsx("span",{className:"text-[9px] text-green-700 font-bold block mt-0.5",children:"▶ Playing (128kbps)"})]})]}),x.jsxs("div",{children:[x.jsx("h4",{className:"font-bold text-gray-700 border-b pb-1 mb-1.5 text-xs",children:"Tom's Top 8 Friends"}),x.jsx("div",{className:"grid grid-cols-4 gap-1 text-center text-[9px]",children:["Tom","Sarah","Alex","EmoKid","Jess","Gamer","Mia","Cat"].map((h,y)=>x.jsxs("div",{className:"border p-1 bg-gray-50 rounded",children:[x.jsx("div",{className:"w-6 h-6 bg-blue-100 mx-auto rounded flex items-center justify-center font-bold text-blue-700",children:h[0]}),x.jsx("span",{className:"truncate block mt-0.5",children:h})]},y))})]})]})]})]})})},X2=()=>{const[r,e]=He.useState(42),[i,s]=He.useState(!1),[l,c]=He.useState(!1),d=()=>{ut.playCameraClick(),i?(e(m=>m-1),s(!1)):(e(m=>m+1),s(!0))},p=()=>{ut.playCameraClick(),c(!0),setTimeout(()=>c(!1),200)};return x.jsxs("div",{className:"min-h-[75vh] p-4 md:p-8 font-skeuo bg-[#2c3e50] text-gray-100 relative",children:[l&&x.jsx("div",{className:"fixed inset-0 bg-white z-50 pointer-events-none transition-opacity duration-200"}),x.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[x.jsxs("div",{className:"p-6 rounded-2xl border-4 border-[#1a252f] text-center shadow-2xl",style:{background:"linear-gradient(to bottom, #4a6984 0%, #354b60 50%, #20303e 100%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 24px rgba(0,0,0,0.6)"},children:[x.jsx("div",{className:"inline-block bg-[#1f2d3d] border border-[#40566e] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-300 mb-2 shadow-inner",children:"iPhone 4 & iPad 1 Era"}),x.jsx("h1",{className:"text-3xl md:text-5xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",children:"Skeuomorphic Reality (2010)"}),x.jsx("p",{className:"text-xs md:text-sm text-gray-300 mt-1",children:"Beveled glass • Stitched Leather • Realistic Shadows • Glossy Aqua Badges"})]}),x.jsxs("div",{className:"p-6 rounded-xl border border-gray-400 bg-[#f7f7f7] text-gray-900 shadow-xl",style:{boxShadow:"0 4px 15px rgba(0,0,0,0.35)"},children:[x.jsxs("div",{className:"flex items-center gap-3 border-b border-gray-300 pb-3",children:[x.jsx("div",{className:"w-12 h-12 bg-gradient-to-b from-[#5b7ea6] to-[#3b5998] rounded-md border-2 border-white shadow flex items-center justify-center text-white text-xl font-bold",children:"f"}),x.jsxs("div",{children:[x.jsx("h3",{className:"font-bold text-[#3b5998] text-base",children:"Mark W. via iPhone 4"}),x.jsx("p",{className:"text-xs text-gray-500",children:"October 14, 2010 • Cupertino, CA • 📍 Checked In"})]})]}),x.jsx("p",{className:"my-4 text-sm leading-relaxed text-gray-800",children:"Just unboxed the new iPhone with the Retina Display! The pixels are literally invisible. Playing Angry Birds and listening to my iTunes library with Cover Flow. Steve Jobs did it again! 📱✨"}),x.jsxs("div",{className:"border-4 border-white p-2 bg-gradient-to-b from-gray-200 to-gray-400 rounded shadow-md mb-4 flex flex-col items-center",children:[x.jsx("div",{className:"w-full h-44 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded flex items-center justify-center text-white font-bold text-sm",children:"[ 📸 Early HDR Camera Preview ]"}),x.jsx("button",{onClick:p,className:"mt-2 bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-400 text-gray-800 text-xs px-4 py-1 rounded-full font-bold shadow hover:brightness-105 active:scale-95",children:"⚡ Test Camera Shutter Flash"})]}),x.jsxs("div",{className:"flex items-center justify-between border-t border-gray-300 pt-3",children:[x.jsxs("button",{onClick:d,className:`px-4 py-1.5 rounded text-xs font-bold border transition active:scale-95 shadow ${i?"bg-gradient-to-b from-[#5b7ea6] to-[#2c4270] text-white border-[#1c2c4d]":"bg-gradient-to-b from-white to-[#e0e0e0] text-gray-800 border-gray-400 hover:brightness-105"}`,children:["👍 ",i?"Liked!":"Like"," (",r,")"]}),x.jsx("span",{className:"text-xs text-gray-500 font-medium",children:"18 Comments • 4 Shares"})]})]})]})]})},j2=()=>{const[r,e]=He.useState(0),[i,s]=He.useState(!0);return He.useEffect(()=>{if(!i)return;const l=setInterval(()=>{e(c=>c>=100?(ut.playMaterialPop(),0):c+2)},120);return()=>clearInterval(l)},[i]),x.jsx("div",{className:"min-h-[75vh] p-4 md:p-8 font-flat bg-[#f5f5f5] text-gray-800",children:x.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[x.jsxs("div",{className:"bg-[#009688] text-white p-6 rounded-none shadow-md text-center",children:[x.jsx("span",{className:"text-xs font-bold uppercase tracking-widest opacity-90 block mb-1",children:"Material Design & 6-Second Comedy"}),x.jsx("h1",{className:"text-3xl md:text-5xl font-black tracking-tight",children:"The Flat Social Era (2015)"}),x.jsx("p",{className:"text-xs md:text-sm mt-1 opacity-90",children:"Zero Gradients • Pastel Palettes • Vine Loops • Floating Action Buttons"})]}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[x.jsxs("div",{className:"bg-[#00b488] text-white p-4 rounded-none shadow-lg flex flex-col justify-between h-96",children:[x.jsxs("div",{className:"flex items-center justify-between border-b border-white/20 pb-2",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("span",{className:"text-2xl font-black",children:"🍇"}),x.jsx("span",{className:"font-bold tracking-tight text-lg",children:"Vine Player"})]}),x.jsx("span",{className:"text-xs bg-black/20 px-2 py-0.5 rounded font-mono",children:"6.0s Looper"})]}),x.jsxs("div",{className:"bg-black/90 rounded h-56 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden",children:[x.jsx("div",{className:"text-3xl mb-2",children:"🕺💃"}),x.jsx("p",{className:"text-sm font-bold text-emerald-300",children:`"Do it for the Vine! I ain't gonna do it..."`}),x.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Loop count: 2,419,012 loops"}),x.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1.5 bg-black",children:x.jsx("div",{className:"h-full bg-[#00e676] transition-all duration-100",style:{width:`${r}%`}})})]}),x.jsxs("div",{className:"flex items-center justify-between pt-2",children:[x.jsx("button",{onClick:()=>s(!i),className:"bg-white text-[#00b488] px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded shadow hover:bg-gray-100 transition active:scale-95",children:i?"Pause Loop":"Play Loop"}),x.jsx("span",{className:"text-xs font-bold",children:"❤️ 840K Revines"})]})]}),x.jsxs("div",{className:"space-y-4",children:[x.jsxs("div",{className:"bg-white p-5 rounded-none shadow hover:shadow-md transition",children:[x.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[x.jsx("div",{className:"w-10 h-10 bg-[#e91e63] text-white flex items-center justify-center font-bold text-sm",children:"#"}),x.jsxs("div",{children:[x.jsx("h4",{className:"font-bold text-gray-900 text-sm",children:"Trending Hashtags (2015)"}),x.jsx("p",{className:"text-xs text-gray-500",children:"Global trends"})]})]}),x.jsx("div",{className:"flex flex-wrap gap-2 text-xs",children:["#TheDress","#SquadGoals","#IceBucketChallenge","#LoveWins","#TBT"].map(l=>x.jsx("span",{onClick:()=>ut.playMaterialPop(),className:"bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded cursor-pointer transition",children:l},l))})]}),x.jsxs("div",{className:"bg-white p-5 rounded-none shadow hover:shadow-md transition",children:[x.jsx("h4",{className:"font-bold text-gray-900 text-sm mb-1",children:"Design Axiom: Flatness"}),x.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"Physical textures were erased. Drop shadows were replaced with paper z-index elevations. Touch targets grew, and animations became snappy 60fps spring transitions."})]})]})]})]})})},W2=()=>{const[r,e]=He.useState(!0);return x.jsx("div",{className:"min-h-[75vh] p-4 md:p-8 font-bento bg-[#0d1117] text-gray-200",children:x.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[x.jsx("div",{className:"bg-[#161b22] border border-gray-800 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4",children:x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1",children:[x.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-pulse"}),"REMOTE WORK & DISCORD ERA"]}),x.jsx("h1",{className:"text-3xl md:text-5xl font-black text-white",children:"The Connected Grid (2020)"}),x.jsx("p",{className:"text-xs md:text-sm text-gray-400 mt-1",children:"Dark Mode Default • Lo-Fi Study Streams • Zoom Grids • Bento Card Architecture"})]})}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[x.jsxs("div",{className:"md:col-span-2 bg-[#161b22] border border-gray-800 p-5 rounded-2xl flex flex-col justify-between shadow-lg",children:[x.jsxs("div",{className:"flex items-center justify-between mb-4",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("span",{className:"text-2xl",children:"🎧"}),x.jsxs("div",{children:[x.jsx("h3",{className:"font-bold text-white text-sm",children:"lofi hip hop radio - beats to study/relax to"}),x.jsx("p",{className:"text-xs text-gray-400",children:"Lofi Girl Stream Simulator"})]})]}),x.jsx("button",{onClick:()=>{ut.playRetroClick(),e(!r)},className:"bg-[#5865F2] hover:bg-[#4752c4] text-white px-3 py-1 text-xs rounded-lg font-semibold transition",children:r?"Pause Stream":"Play Beats"})]}),x.jsx("div",{className:"h-28 bg-[#0d1117] rounded-xl flex items-end justify-center gap-1.5 p-4 border border-gray-800/80",children:[40,75,55,90,60,30,85,95,70,45,60,80,50,65,90,40].map((i,s)=>x.jsx("div",{className:`w-3 bg-gradient-to-t from-indigo-600 to-purple-400 rounded-t transition-all duration-300 ${r?"animate-pulse":"h-2 opacity-30"}`,style:{height:r?`${i}%`:"8px"}},s))}),x.jsxs("div",{className:"mt-3 flex items-center justify-between text-xs text-gray-400",children:[x.jsx("span",{children:"● 48,912 listening now"}),x.jsx("span",{children:"☕ study session: 2h 45m"})]})]}),x.jsxs("div",{className:"bg-[#161b22] border border-gray-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg",children:[x.jsxs("div",{className:"flex items-center justify-between border-b border-gray-800 pb-2",children:[x.jsxs("h4",{className:"font-bold text-white text-xs flex items-center gap-1.5",children:[x.jsx("span",{className:"w-2 h-2 rounded-full bg-green-500"}),"Daily Standup (Zoom)"]}),x.jsx("span",{className:"text-[10px] text-gray-400",children:"4 in call"})]}),x.jsx("div",{className:"grid grid-cols-2 gap-2 my-3",children:["You (Muted)","Alex (Screen Sharing)","Dev Lead","Product Mgr"].map((i,s)=>x.jsxs("div",{className:"bg-[#0d1117] border border-gray-800 rounded-lg p-2 text-center text-xs flex flex-col items-center justify-center h-16",children:[x.jsx("span",{className:"text-base",children:"👤"}),x.jsx("span",{className:"text-[10px] text-gray-300 truncate w-full",children:i})]},s))}),x.jsx("button",{onClick:()=>ut.playSpatialGlow(),className:"w-full bg-[#238636] hover:bg-[#2ea043] text-white text-xs font-semibold py-1.5 rounded-lg transition",children:`"You're On Mute!"`})]})]})]})})},q2=()=>{const[r,e]=He.useState(""),[i,s]=He.useState(["Agent #1: Synthesized 3D neural mesh viewport for user preferences.","Agent #2: Optimized local transformer weights to 0.4ms latency.","Agent #3: Autonomous context negotiation completed."]),[l,c]=He.useState(!1),d=p=>{p.preventDefault(),r.trim()&&(ut.playSpatialGlow(),c(!0),setTimeout(()=>{s(m=>[`Agent Copilot: Generated dynamic UI block for: "${r}"`,...m]),e(""),c(!1)},800))};return x.jsxs("div",{className:"min-h-[75vh] p-4 md:p-8 font-future bg-black text-white relative overflow-hidden",children:[x.jsx("div",{className:"absolute top-10 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"}),x.jsx("div",{className:"absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none"}),x.jsxs("div",{className:"max-w-5xl mx-auto space-y-6 relative z-10",children:[x.jsxs("div",{className:"p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl text-center shadow-[0_8px_32px_rgba(139,92,246,0.15)]",children:[x.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3",children:[x.jsx(js,{className:"w-3.5 h-3.5"}),"THE AGENTIC WEB (2026)"]}),x.jsx("h1",{className:"text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-indigo-400 bg-clip-text text-transparent",children:"Ambient Neural Canvas"}),x.jsx("p",{className:"text-xs md:text-sm text-gray-400 mt-2 max-w-xl mx-auto",children:"Interfaces synthesize in real-time. No static DOM — pure intent-driven computing and multi-agent collaboration."})]}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[x.jsxs("div",{className:"md:col-span-2 p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between",children:[x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center justify-between mb-4",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx(e2,{className:"w-5 h-5 text-purple-400"}),x.jsx("h3",{className:"font-bold text-white text-base",children:"Copilot Intent Synthesizer"})]}),x.jsx("span",{className:"text-xs text-purple-400 font-mono bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800",children:"Model: GPT-5 / Claude-4 Hybrid"})]}),x.jsxs("div",{className:"bg-black/60 border border-white/10 rounded-2xl p-4 font-mono text-xs text-gray-300 space-y-2 h-44 overflow-y-auto",children:[i.map((p,m)=>x.jsxs("div",{className:"flex items-start gap-2",children:[x.jsx("span",{className:"text-purple-400",children:"⚡"}),x.jsx("span",{children:p})]},m)),l&&x.jsxs("div",{className:"text-cyan-400 animate-pulse flex items-center gap-2",children:[x.jsx("span",{className:"animate-spin",children:"⏳"}),x.jsx("span",{children:"Synthesizing components from neural weights..."})]})]})]}),x.jsxs("form",{onSubmit:d,className:"mt-4 flex gap-2",children:[x.jsx("input",{type:"text",value:r,onChange:p=>e(p.target.value),placeholder:"Ask the 2026 agent to synthesize a feature...",className:"flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-future"}),x.jsxs("button",{type:"submit",disabled:l,className:"bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.5)] flex items-center gap-1.5 active:scale-95 disabled:opacity-50",children:[x.jsx("span",{children:"Synthesize"}),x.jsx(Kv,{className:"w-3.5 h-3.5"})]})]})]}),x.jsxs("div",{className:"p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between",children:[x.jsxs("div",{children:[x.jsxs("h4",{className:"font-bold text-white text-sm flex items-center gap-2 mb-3",children:[x.jsx(Qv,{className:"w-4 h-4 text-cyan-400"}),"Live Agent Telemetry"]}),x.jsxs("div",{className:"space-y-3 text-xs",children:[x.jsxs("div",{className:"bg-white/5 p-3 rounded-xl border border-white/5",children:[x.jsx("div",{className:"text-gray-400",children:"Agent Bandwidth"}),x.jsx("div",{className:"text-white font-mono font-bold text-sm",children:"4.2 TB/s Neural Stream"})]}),x.jsxs("div",{className:"bg-white/5 p-3 rounded-xl border border-white/5",children:[x.jsx("div",{className:"text-gray-400",children:"Spatial Latency"}),x.jsx("div",{className:"text-emerald-400 font-mono font-bold text-sm",children:"0.2 ms Direct Synapse"})]})]})]}),x.jsx("div",{className:"text-center pt-4",children:x.jsx("span",{className:"text-[10px] text-gray-500 font-mono",children:"Decentralized Web Node #8921-X"})})]})]})]})]})},Y2=()=>{const{viewMode:r,currentEra:e}=Ti();if(r==="landing")return x.jsxs(x.Fragment,{children:[x.jsx(P2,{}),x.jsx(sv,{}),x.jsx(ov,{}),x.jsx(lv,{}),x.jsx(cv,{}),x.jsx(uv,{})]});const i=()=>{switch(e){case 1995:return x.jsx(fv,{});case 2e3:return x.jsx(V2,{});case 2005:return x.jsx(k2,{});case 2010:return x.jsx(X2,{});case 2015:return x.jsx(j2,{});case 2020:return x.jsx(W2,{});case 2026:return x.jsx(q2,{});default:return x.jsx(fv,{})}};return x.jsxs("div",{className:"min-h-screen flex flex-col justify-between selection:bg-purple-500 selection:text-white transition-all duration-300",children:[x.jsx(I2,{}),x.jsx("main",{className:"flex-1",children:i()}),x.jsx("footer",{className:"sticky bottom-0 z-30 shadow-2xl",children:x.jsx(z2,{})}),x.jsx(B2,{}),x.jsx(F2,{}),x.jsx(sv,{}),x.jsx(ov,{}),x.jsx(lv,{}),x.jsx(cv,{}),x.jsx(uv,{})]})};function Z2(){return x.jsx(gb,{children:x.jsx(Y2,{})})}pb.createRoot(document.getElementById("root")).render(x.jsx(rb.StrictMode,{children:x.jsx(Z2,{})}));
