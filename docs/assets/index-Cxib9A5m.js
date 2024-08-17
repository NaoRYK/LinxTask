function lS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function tp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S_={exports:{}},ic={},x_={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),uS=Symbol.for("react.portal"),cS=Symbol.for("react.fragment"),dS=Symbol.for("react.strict_mode"),hS=Symbol.for("react.profiler"),fS=Symbol.for("react.provider"),pS=Symbol.for("react.context"),mS=Symbol.for("react.forward_ref"),gS=Symbol.for("react.suspense"),yS=Symbol.for("react.memo"),vS=Symbol.for("react.lazy"),oy=Symbol.iterator;function _S(t){return t===null||typeof t!="object"?null:(t=oy&&t[oy]||t["@@iterator"],typeof t=="function"?t:null)}var C_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k_=Object.assign,P_={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=P_,this.updater=n||C_}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function R_(){}R_.prototype=Vs.prototype;function np(t,e,n){this.props=t,this.context=e,this.refs=P_,this.updater=n||C_}var rp=np.prototype=new R_;rp.constructor=np;k_(rp,Vs.prototype);rp.isPureReactComponent=!0;var ay=Array.isArray,b_=Object.prototype.hasOwnProperty,ip={current:null},N_={key:!0,ref:!0,__self:!0,__source:!0};function D_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)b_.call(e,r)&&!N_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ca,type:t,key:s,ref:o,props:i,_owner:ip.current}}function ES(t,e){return{$$typeof:Ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ca}function wS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ly=/\/+/g;function wd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wS(""+t.key):e.toString(36)}function Fl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ca:case uS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wd(o,0):r,ay(i)?(n="",t!=null&&(n=t.replace(ly,"$&/")+"/"),Fl(i,e,n,"",function(c){return c})):i!=null&&(sp(i)&&(i=ES(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ly,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ay(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+wd(s,l);o+=Fl(s,e,n,u,i)}else if(u=_S(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+wd(s,l++),o+=Fl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(t,e,n){if(t==null)return t;var r=[],i=0;return Fl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function TS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},Ul={transition:null},IS={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:ip};function O_(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:fl,forEach:function(t,e,n){fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!sp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Vs;ie.Fragment=cS;ie.Profiler=hS;ie.PureComponent=np;ie.StrictMode=dS;ie.Suspense=gS;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IS;ie.act=O_;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=k_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ip.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)b_.call(e,u)&&!N_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ca,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:pS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fS,_context:t},t.Consumer=t};ie.createElement=D_;ie.createFactory=function(t){var e=D_.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:mS,render:t}};ie.isValidElement=sp;ie.lazy=function(t){return{$$typeof:vS,_payload:{_status:-1,_result:t},_init:TS}};ie.memo=function(t,e){return{$$typeof:yS,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};ie.unstable_act=O_;ie.useCallback=function(t,e){return Tt.current.useCallback(t,e)};ie.useContext=function(t){return Tt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Tt.current.useEffect(t,e)};ie.useId=function(){return Tt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Tt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};ie.useRef=function(t){return Tt.current.useRef(t)};ie.useState=function(t){return Tt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Tt.current.useTransition()};ie.version="18.3.1";x_.exports=ie;var O=x_.exports;const fe=tp(O),AS=lS({__proto__:null,default:fe},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SS=O,xS=Symbol.for("react.element"),CS=Symbol.for("react.fragment"),kS=Object.prototype.hasOwnProperty,PS=SS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RS={key:!0,ref:!0,__self:!0,__source:!0};function L_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kS.call(e,r)&&!RS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xS,type:t,key:s,ref:o,props:i,_owner:PS.current}}ic.Fragment=CS;ic.jsx=L_;ic.jsxs=L_;S_.exports=ic;var E=S_.exports,M_={exports:{}},Ut={},V_={exports:{}},j_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,q){var X=B.length;B.push(q);e:for(;0<X;){var de=X-1>>>1,re=B[de];if(0<i(re,q))B[de]=q,B[X]=re,X=de;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var q=B[0],X=B.pop();if(X!==q){B[0]=X;e:for(var de=0,re=B.length,ae=re>>>1;de<ae;){var Ne=2*(de+1)-1,Me=B[Ne],qe=Ne+1,mt=B[qe];if(0>i(Me,X))qe<re&&0>i(mt,Me)?(B[de]=mt,B[qe]=X,de=qe):(B[de]=Me,B[Ne]=X,de=Ne);else if(qe<re&&0>i(mt,X))B[de]=mt,B[qe]=X,de=qe;else break e}}return q}function i(B,q){var X=B.sortIndex-q.sortIndex;return X!==0?X:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],h=1,p=null,m=3,I=!1,A=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(B){for(var q=n(c);q!==null;){if(q.callback===null)r(c);else if(q.startTime<=B)r(c),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(c)}}function b(B){if(x=!1,y(B),!A)if(n(u)!==null)A=!0,Wt(M);else{var q=n(c);q!==null&&Z(b,q.startTime-B)}}function M(B,q){A=!1,x&&(x=!1,_(v),v=-1),I=!0;var X=m;try{for(y(q),p=n(u);p!==null&&(!(p.expirationTime>q)||B&&!R());){var de=p.callback;if(typeof de=="function"){p.callback=null,m=p.priorityLevel;var re=de(p.expirationTime<=q);q=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(u)&&r(u),y(q)}else r(u);p=n(u)}if(p!==null)var ae=!0;else{var Ne=n(c);Ne!==null&&Z(b,Ne.startTime-q),ae=!1}return ae}finally{p=null,m=X,I=!1}}var j=!1,S=null,v=-1,T=5,k=-1;function R(){return!(t.unstable_now()-k<T)}function N(){if(S!==null){var B=t.unstable_now();k=B;var q=!0;try{q=S(!0,B)}finally{q?P():(j=!1,S=null)}}else j=!1}var P;if(typeof g=="function")P=function(){g(N)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,rt=Se.port2;Se.port1.onmessage=N,P=function(){rt.postMessage(null)}}else P=function(){C(N,0)};function Wt(B){S=B,j||(j=!0,P())}function Z(B,q){v=C(function(){B(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){A||I||(A=!0,Wt(M))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var q=3;break;default:q=m}var X=m;m=q;try{return B()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=m;m=B;try{return q()}finally{m=X}},t.unstable_scheduleCallback=function(B,q,X){var de=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?de+X:de):X=de,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=X+re,B={id:h++,callback:q,priorityLevel:B,startTime:X,expirationTime:re,sortIndex:-1},X>de?(B.sortIndex=X,e(c,B),n(u)===null&&B===n(c)&&(x?(_(v),v=-1):x=!0,Z(b,X-de))):(B.sortIndex=re,e(u,B),A||I||(A=!0,Wt(M))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var q=m;return function(){var X=m;m=q;try{return B.apply(this,arguments)}finally{m=X}}}})(j_);V_.exports=j_;var bS=V_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NS=O,jt=bS;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F_=new Set,Yo={};function Ri(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(Yo[t]=e,t=0;t<e.length;t++)F_.add(e[t])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ph=Object.prototype.hasOwnProperty,DS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uy={},cy={};function OS(t){return ph.call(cy,t)?!0:ph.call(uy,t)?!1:DS.test(t)?cy[t]=!0:(uy[t]=!0,!1)}function LS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function MS(t,e,n,r){if(e===null||typeof e>"u"||LS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var op=/[\-:]([a-z])/g;function ap(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(op,ap);et[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(op,ap);et[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(op,ap);et[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function lp(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(MS(e,n,i,r)&&(n=null),r||i===null?OS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tr=NS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Hi=Symbol.for("react.portal"),Gi=Symbol.for("react.fragment"),up=Symbol.for("react.strict_mode"),mh=Symbol.for("react.profiler"),U_=Symbol.for("react.provider"),B_=Symbol.for("react.context"),cp=Symbol.for("react.forward_ref"),gh=Symbol.for("react.suspense"),yh=Symbol.for("react.suspense_list"),dp=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),z_=Symbol.for("react.offscreen"),dy=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=dy&&t[dy]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Td;function Eo(t){if(Td===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Td=e&&e[1]||""}return`
`+Td+t}var Id=!1;function Ad(t,e){if(!t||Id)return"";Id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Id=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Eo(t):""}function VS(t){switch(t.tag){case 5:return Eo(t.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return t=Ad(t.type,!1),t;case 11:return t=Ad(t.type.render,!1),t;case 1:return t=Ad(t.type,!0),t;default:return""}}function vh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gi:return"Fragment";case Hi:return"Portal";case mh:return"Profiler";case up:return"StrictMode";case gh:return"Suspense";case yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B_:return(t.displayName||"Context")+".Consumer";case U_:return(t._context.displayName||"Context")+".Provider";case cp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dp:return e=t.displayName||null,e!==null?e:vh(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return vh(t(e))}catch{}}return null}function jS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vh(e);case 8:return e===up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function FS(t){var e=$_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=FS(t))}function W_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _h(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function H_(t,e){e=e.checked,e!=null&&lp(t,"checked",e,!1)}function Eh(t,e){H_(t,e);var n=Mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wh(t,e.type,n):e.hasOwnProperty("defaultValue")&&wh(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wh(t,e,n){(e!=="number"||cu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wo=Array.isArray;function ss(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function py(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(wo(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function G_(t,e){var n=Mr(e.value),r=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function my(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function q_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ih(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?q_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gl,K_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},US=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(t){US.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Do[e]=Do[t]})});function Q_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Do.hasOwnProperty(t)&&Do[t]?(""+e).trim():e+"px"}function Y_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Q_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var BS=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ah(t,e){if(e){if(BS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Sh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xh=null;function hp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ch=null,os=null,as=null;function gy(t){if(t=Ra(t)){if(typeof Ch!="function")throw Error(U(280));var e=t.stateNode;e&&(e=uc(e),Ch(t.stateNode,t.type,e))}}function X_(t){os?as?as.push(t):as=[t]:os=t}function J_(){if(os){var t=os,e=as;if(as=os=null,gy(t),e)for(t=0;t<e.length;t++)gy(e[t])}}function Z_(t,e){return t(e)}function e1(){}var Sd=!1;function t1(t,e,n){if(Sd)return t(e,n);Sd=!0;try{return Z_(t,e,n)}finally{Sd=!1,(os!==null||as!==null)&&(e1(),J_())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var r=uc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var kh=!1;if(Gn)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){kh=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{kh=!1}function zS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Oo=!1,du=null,hu=!1,Ph=null,$S={onError:function(t){Oo=!0,du=t}};function WS(t,e,n,r,i,s,o,l,u){Oo=!1,du=null,zS.apply($S,arguments)}function HS(t,e,n,r,i,s,o,l,u){if(WS.apply(this,arguments),Oo){if(Oo){var c=du;Oo=!1,du=null}else throw Error(U(198));hu||(hu=!0,Ph=c)}}function bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function n1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yy(t){if(bi(t)!==t)throw Error(U(188))}function GS(t){var e=t.alternate;if(!e){if(e=bi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yy(i),t;if(s===r)return yy(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function r1(t){return t=GS(t),t!==null?i1(t):null}function i1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=i1(t);if(e!==null)return e;t=t.sibling}return null}var s1=jt.unstable_scheduleCallback,vy=jt.unstable_cancelCallback,qS=jt.unstable_shouldYield,KS=jt.unstable_requestPaint,De=jt.unstable_now,QS=jt.unstable_getCurrentPriorityLevel,fp=jt.unstable_ImmediatePriority,o1=jt.unstable_UserBlockingPriority,fu=jt.unstable_NormalPriority,YS=jt.unstable_LowPriority,a1=jt.unstable_IdlePriority,sc=null,En=null;function XS(t){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(sc,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:ex,JS=Math.log,ZS=Math.LN2;function ex(t){return t>>>=0,t===0?32:31-(JS(t)/ZS|0)|0}var yl=64,vl=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=To(l):(s&=o,s!==0&&(r=To(s)))}else o=n&~i,o!==0?r=To(o):s!==0&&(r=To(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function tx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-an(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=tx(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function l1(){var t=yl;return yl<<=1,!(yl&4194240)&&(yl=64),t}function xd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function rx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function pp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function u1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var c1,mp,d1,h1,f1,bh=!1,_l=[],Ar=null,Sr=null,xr=null,Zo=new Map,ea=new Map,fr=[],ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _y(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function fo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ra(e),e!==null&&mp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function sx(t,e,n,r,i){switch(e){case"focusin":return Ar=fo(Ar,t,e,n,r,i),!0;case"dragenter":return Sr=fo(Sr,t,e,n,r,i),!0;case"mouseover":return xr=fo(xr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zo.set(s,fo(Zo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ea.set(s,fo(ea.get(s)||null,t,e,n,r,i)),!0}return!1}function p1(t){var e=si(t.target);if(e!==null){var n=bi(e);if(n!==null){if(e=n.tag,e===13){if(e=n1(n),e!==null){t.blockedOn=e,f1(t.priority,function(){d1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xh=r,n.target.dispatchEvent(r),xh=null}else return e=Ra(n),e!==null&&mp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ey(t,e,n){Bl(t)&&n.delete(e)}function ox(){bh=!1,Ar!==null&&Bl(Ar)&&(Ar=null),Sr!==null&&Bl(Sr)&&(Sr=null),xr!==null&&Bl(xr)&&(xr=null),Zo.forEach(Ey),ea.forEach(Ey)}function po(t,e){t.blockedOn===e&&(t.blockedOn=null,bh||(bh=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,ox)))}function ta(t){function e(i){return po(i,t)}if(0<_l.length){po(_l[0],t);for(var n=1;n<_l.length;n++){var r=_l[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&po(Ar,t),Sr!==null&&po(Sr,t),xr!==null&&po(xr,t),Zo.forEach(e),ea.forEach(e),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)p1(n),n.blockedOn===null&&fr.shift()}var ls=tr.ReactCurrentBatchConfig,mu=!0;function ax(t,e,n,r){var i=pe,s=ls.transition;ls.transition=null;try{pe=1,gp(t,e,n,r)}finally{pe=i,ls.transition=s}}function lx(t,e,n,r){var i=pe,s=ls.transition;ls.transition=null;try{pe=4,gp(t,e,n,r)}finally{pe=i,ls.transition=s}}function gp(t,e,n,r){if(mu){var i=Nh(t,e,n,r);if(i===null)Md(t,e,r,gu,n),_y(t,r);else if(sx(i,t,e,n,r))r.stopPropagation();else if(_y(t,r),e&4&&-1<ix.indexOf(t)){for(;i!==null;){var s=Ra(i);if(s!==null&&c1(s),s=Nh(t,e,n,r),s===null&&Md(t,e,r,gu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Md(t,e,r,null,n)}}var gu=null;function Nh(t,e,n,r){if(gu=null,t=hp(r),t=si(t),t!==null)if(e=bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=n1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gu=t,null}function m1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(QS()){case fp:return 1;case o1:return 4;case fu:case YS:return 16;case a1:return 536870912;default:return 16}default:return 16}}var vr=null,yp=null,zl=null;function g1(){if(zl)return zl;var t,e=yp,n=e.length,r,i="value"in vr?vr.value:vr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zl=i.slice(t,1<r?1-r:void 0)}function $l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function wy(){return!1}function Bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?El:wy,this.isPropagationStopped=wy,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vp=Bt(js),Pa=ke({},js,{view:0,detail:0}),ux=Bt(Pa),Cd,kd,mo,oc=ke({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_p,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(Cd=t.screenX-mo.screenX,kd=t.screenY-mo.screenY):kd=Cd=0,mo=t),Cd)},movementY:function(t){return"movementY"in t?t.movementY:kd}}),Ty=Bt(oc),cx=ke({},oc,{dataTransfer:0}),dx=Bt(cx),hx=ke({},Pa,{relatedTarget:0}),Pd=Bt(hx),fx=ke({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),px=Bt(fx),mx=ke({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gx=Bt(mx),yx=ke({},js,{data:0}),Iy=Bt(yx),vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ex[t])?!!e[t]:!1}function _p(){return wx}var Tx=ke({},Pa,{key:function(t){if(t.key){var e=vx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_p,charCode:function(t){return t.type==="keypress"?$l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ix=Bt(Tx),Ax=ke({},oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ay=Bt(Ax),Sx=ke({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_p}),xx=Bt(Sx),Cx=ke({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=Bt(Cx),Px=ke({},oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rx=Bt(Px),bx=[9,13,27,32],Ep=Gn&&"CompositionEvent"in window,Lo=null;Gn&&"documentMode"in document&&(Lo=document.documentMode);var Nx=Gn&&"TextEvent"in window&&!Lo,y1=Gn&&(!Ep||Lo&&8<Lo&&11>=Lo),Sy=" ",xy=!1;function v1(t,e){switch(t){case"keyup":return bx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qi=!1;function Dx(t,e){switch(t){case"compositionend":return _1(e);case"keypress":return e.which!==32?null:(xy=!0,Sy);case"textInput":return t=e.data,t===Sy&&xy?null:t;default:return null}}function Ox(t,e){if(qi)return t==="compositionend"||!Ep&&v1(t,e)?(t=g1(),zl=yp=vr=null,qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y1&&e.locale!=="ko"?null:e.data;default:return null}}var Lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Lx[t.type]:e==="textarea"}function E1(t,e,n,r){X_(r),e=yu(e,"onChange"),0<e.length&&(n=new vp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Mo=null,na=null;function Mx(t){b1(t,0)}function ac(t){var e=Yi(t);if(W_(e))return t}function Vx(t,e){if(t==="change")return e}var w1=!1;if(Gn){var Rd;if(Gn){var bd="oninput"in document;if(!bd){var ky=document.createElement("div");ky.setAttribute("oninput","return;"),bd=typeof ky.oninput=="function"}Rd=bd}else Rd=!1;w1=Rd&&(!document.documentMode||9<document.documentMode)}function Py(){Mo&&(Mo.detachEvent("onpropertychange",T1),na=Mo=null)}function T1(t){if(t.propertyName==="value"&&ac(na)){var e=[];E1(e,na,t,hp(t)),t1(Mx,e)}}function jx(t,e,n){t==="focusin"?(Py(),Mo=e,na=n,Mo.attachEvent("onpropertychange",T1)):t==="focusout"&&Py()}function Fx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(na)}function Ux(t,e){if(t==="click")return ac(e)}function Bx(t,e){if(t==="input"||t==="change")return ac(e)}function zx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dn=typeof Object.is=="function"?Object.is:zx;function ra(t,e){if(dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ph.call(e,i)||!dn(t[i],e[i]))return!1}return!0}function Ry(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function by(t,e){var n=Ry(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ry(n)}}function I1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?I1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function A1(){for(var t=window,e=cu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cu(t.document)}return e}function wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $x(t){var e=A1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&I1(n.ownerDocument.documentElement,n)){if(r!==null&&wp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=by(n,s);var o=by(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wx=Gn&&"documentMode"in document&&11>=document.documentMode,Ki=null,Dh=null,Vo=null,Oh=!1;function Ny(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oh||Ki==null||Ki!==cu(r)||(r=Ki,"selectionStart"in r&&wp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&ra(Vo,r)||(Vo=r,r=yu(Dh,"onSelect"),0<r.length&&(e=new vp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ki)))}function wl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qi={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},Nd={},S1={};Gn&&(S1=document.createElement("div").style,"AnimationEvent"in window||(delete Qi.animationend.animation,delete Qi.animationiteration.animation,delete Qi.animationstart.animation),"TransitionEvent"in window||delete Qi.transitionend.transition);function lc(t){if(Nd[t])return Nd[t];if(!Qi[t])return t;var e=Qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in S1)return Nd[t]=e[n];return t}var x1=lc("animationend"),C1=lc("animationiteration"),k1=lc("animationstart"),P1=lc("transitionend"),R1=new Map,Dy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(t,e){R1.set(t,e),Ri(e,[t])}for(var Dd=0;Dd<Dy.length;Dd++){var Od=Dy[Dd],Hx=Od.toLowerCase(),Gx=Od[0].toUpperCase()+Od.slice(1);Hr(Hx,"on"+Gx)}Hr(x1,"onAnimationEnd");Hr(C1,"onAnimationIteration");Hr(k1,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(P1,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function Oy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,HS(r,e,void 0,t),t.currentTarget=null}function b1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Oy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Oy(i,l,c),s=u}}}if(hu)throw t=Ph,hu=!1,Ph=null,t}function _e(t,e){var n=e[Fh];n===void 0&&(n=e[Fh]=new Set);var r=t+"__bubble";n.has(r)||(N1(e,t,2,!1),n.add(r))}function Ld(t,e,n){var r=0;e&&(r|=4),N1(n,t,r,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[Tl]){t[Tl]=!0,F_.forEach(function(n){n!=="selectionchange"&&(qx.has(n)||Ld(n,!1,t),Ld(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,Ld("selectionchange",!1,e))}}function N1(t,e,n,r){switch(m1(e)){case 1:var i=ax;break;case 4:i=lx;break;default:i=gp}n=i.bind(null,e,n,t),i=void 0,!kh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Md(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=si(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}t1(function(){var c=s,h=hp(n),p=[];e:{var m=R1.get(t);if(m!==void 0){var I=vp,A=t;switch(t){case"keypress":if($l(n)===0)break e;case"keydown":case"keyup":I=Ix;break;case"focusin":A="focus",I=Pd;break;case"focusout":A="blur",I=Pd;break;case"beforeblur":case"afterblur":I=Pd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Ty;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=xx;break;case x1:case C1:case k1:I=px;break;case P1:I=kx;break;case"scroll":I=ux;break;case"wheel":I=Rx;break;case"copy":case"cut":case"paste":I=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Ay}var x=(e&4)!==0,C=!x&&t==="scroll",_=x?m!==null?m+"Capture":null:m;x=[];for(var g=c,y;g!==null;){y=g;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,_!==null&&(b=Jo(g,_),b!=null&&x.push(sa(g,b,y)))),C)break;g=g.return}0<x.length&&(m=new I(m,A,null,n,h),p.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==xh&&(A=n.relatedTarget||n.fromElement)&&(si(A)||A[qn]))break e;if((I||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,I?(A=n.relatedTarget||n.toElement,I=c,A=A?si(A):null,A!==null&&(C=bi(A),A!==C||A.tag!==5&&A.tag!==6)&&(A=null)):(I=null,A=c),I!==A)){if(x=Ty,b="onMouseLeave",_="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Ay,b="onPointerLeave",_="onPointerEnter",g="pointer"),C=I==null?m:Yi(I),y=A==null?m:Yi(A),m=new x(b,g+"leave",I,n,h),m.target=C,m.relatedTarget=y,b=null,si(h)===c&&(x=new x(_,g+"enter",A,n,h),x.target=y,x.relatedTarget=C,b=x),C=b,I&&A)t:{for(x=I,_=A,g=0,y=x;y;y=Bi(y))g++;for(y=0,b=_;b;b=Bi(b))y++;for(;0<g-y;)x=Bi(x),g--;for(;0<y-g;)_=Bi(_),y--;for(;g--;){if(x===_||_!==null&&x===_.alternate)break t;x=Bi(x),_=Bi(_)}x=null}else x=null;I!==null&&Ly(p,m,I,x,!1),A!==null&&C!==null&&Ly(p,C,A,x,!0)}}e:{if(m=c?Yi(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var M=Vx;else if(Cy(m))if(w1)M=Bx;else{M=Fx;var j=jx}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=Ux);if(M&&(M=M(t,c))){E1(p,M,n,h);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&wh(m,"number",m.value)}switch(j=c?Yi(c):window,t){case"focusin":(Cy(j)||j.contentEditable==="true")&&(Ki=j,Dh=c,Vo=null);break;case"focusout":Vo=Dh=Ki=null;break;case"mousedown":Oh=!0;break;case"contextmenu":case"mouseup":case"dragend":Oh=!1,Ny(p,n,h);break;case"selectionchange":if(Wx)break;case"keydown":case"keyup":Ny(p,n,h)}var S;if(Ep)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else qi?v1(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(y1&&n.locale!=="ko"&&(qi||v!=="onCompositionStart"?v==="onCompositionEnd"&&qi&&(S=g1()):(vr=h,yp="value"in vr?vr.value:vr.textContent,qi=!0)),j=yu(c,v),0<j.length&&(v=new Iy(v,t,null,n,h),p.push({event:v,listeners:j}),S?v.data=S:(S=_1(n),S!==null&&(v.data=S)))),(S=Nx?Dx(t,n):Ox(t,n))&&(c=yu(c,"onBeforeInput"),0<c.length&&(h=new Iy("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=S))}b1(p,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Jo(t,n),s!=null&&r.unshift(sa(t,s,i)),s=Jo(t,e),s!=null&&r.push(sa(t,s,i))),t=t.return}return r}function Bi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ly(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Jo(n,s),u!=null&&o.unshift(sa(n,u,l))):i||(u=Jo(n,s),u!=null&&o.push(sa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Kx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function My(t){return(typeof t=="string"?t:""+t).replace(Kx,`
`).replace(Qx,"")}function Il(t,e,n){if(e=My(e),My(t)!==e&&n)throw Error(U(425))}function vu(){}var Lh=null,Mh=null;function Vh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jh=typeof setTimeout=="function"?setTimeout:void 0,Yx=typeof clearTimeout=="function"?clearTimeout:void 0,Vy=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vy<"u"?function(t){return Vy.resolve(null).then(t).catch(Jx)}:jh;function Jx(t){setTimeout(function(){throw t})}function Vd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ta(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ta(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),yn="__reactFiber$"+Fs,oa="__reactProps$"+Fs,qn="__reactContainer$"+Fs,Fh="__reactEvents$"+Fs,Zx="__reactListeners$"+Fs,eC="__reactHandles$"+Fs;function si(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jy(t);t!==null;){if(n=t[yn])return n;t=jy(t)}return e}t=n,n=t.parentNode}return null}function Ra(t){return t=t[yn]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function uc(t){return t[oa]||null}var Uh=[],Xi=-1;function Gr(t){return{current:t}}function we(t){0>Xi||(t.current=Uh[Xi],Uh[Xi]=null,Xi--)}function ye(t,e){Xi++,Uh[Xi]=t.current,t.current=e}var Vr={},pt=Gr(Vr),Ct=Gr(!1),gi=Vr;function vs(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function _u(){we(Ct),we(pt)}function Fy(t,e,n){if(pt.current!==Vr)throw Error(U(168));ye(pt,e),ye(Ct,n)}function D1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,jS(t)||"Unknown",i));return ke({},n,r)}function Eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,gi=pt.current,ye(pt,t),ye(Ct,Ct.current),!0}function Uy(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=D1(t,e,gi),r.__reactInternalMemoizedMergedChildContext=t,we(Ct),we(pt),ye(pt,t)):we(Ct),ye(Ct,n)}var Mn=null,cc=!1,jd=!1;function O1(t){Mn===null?Mn=[t]:Mn.push(t)}function tC(t){cc=!0,O1(t)}function qr(){if(!jd&&Mn!==null){jd=!0;var t=0,e=pe;try{var n=Mn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mn=null,cc=!1}catch(i){throw Mn!==null&&(Mn=Mn.slice(t+1)),s1(fp,qr),i}finally{pe=e,jd=!1}}return null}var Ji=[],Zi=0,wu=null,Tu=0,Ht=[],Gt=0,yi=null,jn=1,Fn="";function ti(t,e){Ji[Zi++]=Tu,Ji[Zi++]=wu,wu=t,Tu=e}function L1(t,e,n){Ht[Gt++]=jn,Ht[Gt++]=Fn,Ht[Gt++]=yi,yi=t;var r=jn;t=Fn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jn=1<<32-an(e)+i|n<<i|r,Fn=s+t}else jn=1<<s|n<<i|r,Fn=t}function Tp(t){t.return!==null&&(ti(t,1),L1(t,1,0))}function Ip(t){for(;t===wu;)wu=Ji[--Zi],Ji[Zi]=null,Tu=Ji[--Zi],Ji[Zi]=null;for(;t===yi;)yi=Ht[--Gt],Ht[Gt]=null,Fn=Ht[--Gt],Ht[Gt]=null,jn=Ht[--Gt],Ht[Gt]=null}var Lt=null,Nt=null,Ie=!1,rn=null;function M1(t,e){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function By(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Nt=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yi!==null?{id:jn,overflow:Fn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Nt=null,!0):!1;default:return!1}}function Bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zh(t){if(Ie){var e=Nt;if(e){var n=e;if(!By(t,e)){if(Bh(t))throw Error(U(418));e=Cr(n.nextSibling);var r=Lt;e&&By(t,e)?M1(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Lt=t)}}else{if(Bh(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ie=!1,Lt=t}}}function zy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function Al(t){if(t!==Lt)return!1;if(!Ie)return zy(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vh(t.type,t.memoizedProps)),e&&(e=Nt)){if(Bh(t))throw V1(),Error(U(418));for(;e;)M1(t,e),e=Cr(e.nextSibling)}if(zy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=Lt?Cr(t.stateNode.nextSibling):null;return!0}function V1(){for(var t=Nt;t;)t=Cr(t.nextSibling)}function _s(){Nt=Lt=null,Ie=!1}function Ap(t){rn===null?rn=[t]:rn.push(t)}var nC=tr.ReactCurrentBatchConfig;function go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Sl(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $y(t){var e=t._init;return e(t._payload)}function j1(t){function e(_,g){if(t){var y=_.deletions;y===null?(_.deletions=[g],_.flags|=16):y.push(g)}}function n(_,g){if(!t)return null;for(;g!==null;)e(_,g),g=g.sibling;return null}function r(_,g){for(_=new Map;g!==null;)g.key!==null?_.set(g.key,g):_.set(g.index,g),g=g.sibling;return _}function i(_,g){return _=br(_,g),_.index=0,_.sibling=null,_}function s(_,g,y){return _.index=y,t?(y=_.alternate,y!==null?(y=y.index,y<g?(_.flags|=2,g):y):(_.flags|=2,g)):(_.flags|=1048576,g)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,g,y,b){return g===null||g.tag!==6?(g=Hd(y,_.mode,b),g.return=_,g):(g=i(g,y),g.return=_,g)}function u(_,g,y,b){var M=y.type;return M===Gi?h(_,g,y.props.children,b,y.key):g!==null&&(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===dr&&$y(M)===g.type)?(b=i(g,y.props),b.ref=go(_,g,y),b.return=_,b):(b=Yl(y.type,y.key,y.props,null,_.mode,b),b.ref=go(_,g,y),b.return=_,b)}function c(_,g,y,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Gd(y,_.mode,b),g.return=_,g):(g=i(g,y.children||[]),g.return=_,g)}function h(_,g,y,b,M){return g===null||g.tag!==7?(g=di(y,_.mode,b,M),g.return=_,g):(g=i(g,y),g.return=_,g)}function p(_,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Hd(""+g,_.mode,y),g.return=_,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pl:return y=Yl(g.type,g.key,g.props,null,_.mode,y),y.ref=go(_,null,g),y.return=_,y;case Hi:return g=Gd(g,_.mode,y),g.return=_,g;case dr:var b=g._init;return p(_,b(g._payload),y)}if(wo(g)||co(g))return g=di(g,_.mode,y,null),g.return=_,g;Sl(_,g)}return null}function m(_,g,y,b){var M=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return M!==null?null:l(_,g,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pl:return y.key===M?u(_,g,y,b):null;case Hi:return y.key===M?c(_,g,y,b):null;case dr:return M=y._init,m(_,g,M(y._payload),b)}if(wo(y)||co(y))return M!==null?null:h(_,g,y,b,null);Sl(_,y)}return null}function I(_,g,y,b,M){if(typeof b=="string"&&b!==""||typeof b=="number")return _=_.get(y)||null,l(g,_,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case pl:return _=_.get(b.key===null?y:b.key)||null,u(g,_,b,M);case Hi:return _=_.get(b.key===null?y:b.key)||null,c(g,_,b,M);case dr:var j=b._init;return I(_,g,y,j(b._payload),M)}if(wo(b)||co(b))return _=_.get(y)||null,h(g,_,b,M,null);Sl(g,b)}return null}function A(_,g,y,b){for(var M=null,j=null,S=g,v=g=0,T=null;S!==null&&v<y.length;v++){S.index>v?(T=S,S=null):T=S.sibling;var k=m(_,S,y[v],b);if(k===null){S===null&&(S=T);break}t&&S&&k.alternate===null&&e(_,S),g=s(k,g,v),j===null?M=k:j.sibling=k,j=k,S=T}if(v===y.length)return n(_,S),Ie&&ti(_,v),M;if(S===null){for(;v<y.length;v++)S=p(_,y[v],b),S!==null&&(g=s(S,g,v),j===null?M=S:j.sibling=S,j=S);return Ie&&ti(_,v),M}for(S=r(_,S);v<y.length;v++)T=I(S,_,v,y[v],b),T!==null&&(t&&T.alternate!==null&&S.delete(T.key===null?v:T.key),g=s(T,g,v),j===null?M=T:j.sibling=T,j=T);return t&&S.forEach(function(R){return e(_,R)}),Ie&&ti(_,v),M}function x(_,g,y,b){var M=co(y);if(typeof M!="function")throw Error(U(150));if(y=M.call(y),y==null)throw Error(U(151));for(var j=M=null,S=g,v=g=0,T=null,k=y.next();S!==null&&!k.done;v++,k=y.next()){S.index>v?(T=S,S=null):T=S.sibling;var R=m(_,S,k.value,b);if(R===null){S===null&&(S=T);break}t&&S&&R.alternate===null&&e(_,S),g=s(R,g,v),j===null?M=R:j.sibling=R,j=R,S=T}if(k.done)return n(_,S),Ie&&ti(_,v),M;if(S===null){for(;!k.done;v++,k=y.next())k=p(_,k.value,b),k!==null&&(g=s(k,g,v),j===null?M=k:j.sibling=k,j=k);return Ie&&ti(_,v),M}for(S=r(_,S);!k.done;v++,k=y.next())k=I(S,_,v,k.value,b),k!==null&&(t&&k.alternate!==null&&S.delete(k.key===null?v:k.key),g=s(k,g,v),j===null?M=k:j.sibling=k,j=k);return t&&S.forEach(function(N){return e(_,N)}),Ie&&ti(_,v),M}function C(_,g,y,b){if(typeof y=="object"&&y!==null&&y.type===Gi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pl:e:{for(var M=y.key,j=g;j!==null;){if(j.key===M){if(M=y.type,M===Gi){if(j.tag===7){n(_,j.sibling),g=i(j,y.props.children),g.return=_,_=g;break e}}else if(j.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===dr&&$y(M)===j.type){n(_,j.sibling),g=i(j,y.props),g.ref=go(_,j,y),g.return=_,_=g;break e}n(_,j);break}else e(_,j);j=j.sibling}y.type===Gi?(g=di(y.props.children,_.mode,b,y.key),g.return=_,_=g):(b=Yl(y.type,y.key,y.props,null,_.mode,b),b.ref=go(_,g,y),b.return=_,_=b)}return o(_);case Hi:e:{for(j=y.key;g!==null;){if(g.key===j)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(_,g.sibling),g=i(g,y.children||[]),g.return=_,_=g;break e}else{n(_,g);break}else e(_,g);g=g.sibling}g=Gd(y,_.mode,b),g.return=_,_=g}return o(_);case dr:return j=y._init,C(_,g,j(y._payload),b)}if(wo(y))return A(_,g,y,b);if(co(y))return x(_,g,y,b);Sl(_,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(_,g.sibling),g=i(g,y),g.return=_,_=g):(n(_,g),g=Hd(y,_.mode,b),g.return=_,_=g),o(_)):n(_,g)}return C}var Es=j1(!0),F1=j1(!1),Iu=Gr(null),Au=null,es=null,Sp=null;function xp(){Sp=es=Au=null}function Cp(t){var e=Iu.current;we(Iu),t._currentValue=e}function $h(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function us(t,e){Au=t,Sp=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(Sp!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(Au===null)throw Error(U(308));es=t,Au.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var oi=null;function kp(t){oi===null?oi=[t]:oi.push(t)}function U1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,kp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kn(t,r)}function Kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function Pp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function B1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kn(t,n)}return i=r.interleaved,i===null?(e.next=e,kp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kn(t,n)}function Wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pp(t,n)}}function Wy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Su(t,e,n,r){var i=t.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,l=s;do{var m=l.lane,I=l.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,x=l;switch(m=e,I=n,x.tag){case 1:if(A=x.payload,typeof A=="function"){p=A.call(I,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=x.payload,m=typeof A=="function"?A.call(I,p,m):A,m==null)break e;p=ke({},p,m);break e;case 2:hr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else I={eventTime:I,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=I,u=p):h=h.next=I,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_i|=o,t.lanes=o,t.memoizedState=p}}function Hy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var ba={},wn=Gr(ba),aa=Gr(ba),la=Gr(ba);function ai(t){if(t===ba)throw Error(U(174));return t}function Rp(t,e){switch(ye(la,e),ye(aa,t),ye(wn,ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ih(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ih(e,t)}we(wn),ye(wn,e)}function ws(){we(wn),we(aa),we(la)}function z1(t){ai(la.current);var e=ai(wn.current),n=Ih(e,t.type);e!==n&&(ye(aa,t),ye(wn,n))}function bp(t){aa.current===t&&(we(wn),we(aa))}var xe=Gr(0);function xu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fd=[];function Np(){for(var t=0;t<Fd.length;t++)Fd[t]._workInProgressVersionPrimary=null;Fd.length=0}var Hl=tr.ReactCurrentDispatcher,Ud=tr.ReactCurrentBatchConfig,vi=0,Ce=null,Be=null,He=null,Cu=!1,jo=!1,ua=0,rC=0;function at(){throw Error(U(321))}function Dp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dn(t[n],e[n]))return!1;return!0}function Op(t,e,n,r,i,s){if(vi=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?aC:lC,t=n(r,i),jo){s=0;do{if(jo=!1,ua=0,25<=s)throw Error(U(301));s+=1,He=Be=null,e.updateQueue=null,Hl.current=uC,t=n(r,i)}while(jo)}if(Hl.current=ku,e=Be!==null&&Be.next!==null,vi=0,He=Be=Ce=null,Cu=!1,e)throw Error(U(300));return t}function Lp(){var t=ua!==0;return ua=0,t}function mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ce.memoizedState=He=t:He=He.next=t,He}function Xt(){if(Be===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=He===null?Ce.memoizedState:He.next;if(e!==null)He=e,Be=t;else{if(t===null)throw Error(U(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},He===null?Ce.memoizedState=He=t:He=He.next=t}return He}function ca(t,e){return typeof e=="function"?e(t):e}function Bd(t){var e=Xt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var h=c.lane;if((vi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ce.lanes|=h,_i|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,dn(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,_i|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zd(t){var e=Xt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dn(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $1(){}function W1(t,e){var n=Ce,r=Xt(),i=e(),s=!dn(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,Mp(q1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,da(9,G1.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(U(349));vi&30||H1(n,e,i)}return i}function H1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G1(t,e,n,r){e.value=n,e.getSnapshot=r,K1(e)&&Q1(t)}function q1(t,e,n){return n(function(){K1(e)&&Q1(t)})}function K1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dn(t,n)}catch{return!0}}function Q1(t){var e=Kn(t,1);e!==null&&ln(e,t,1,-1)}function Gy(t){var e=mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=oC.bind(null,Ce,t),[e.memoizedState,t]}function da(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Y1(){return Xt().memoizedState}function Gl(t,e,n,r){var i=mn();Ce.flags|=t,i.memoizedState=da(1|e,n,void 0,r===void 0?null:r)}function dc(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Be!==null){var o=Be.memoizedState;if(s=o.destroy,r!==null&&Dp(r,o.deps)){i.memoizedState=da(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=da(1|e,n,s,r)}function qy(t,e){return Gl(8390656,8,t,e)}function Mp(t,e){return dc(2048,8,t,e)}function X1(t,e){return dc(4,2,t,e)}function J1(t,e){return dc(4,4,t,e)}function Z1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function eE(t,e,n){return n=n!=null?n.concat([t]):null,dc(4,4,Z1.bind(null,e,t),n)}function Vp(){}function tE(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function nE(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rE(t,e,n){return vi&21?(dn(n,e)||(n=l1(),Ce.lanes|=n,_i|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function iC(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Ud.transition;Ud.transition={};try{t(!1),e()}finally{pe=n,Ud.transition=r}}function iE(){return Xt().memoizedState}function sC(t,e,n){var r=Rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sE(t))oE(e,n);else if(n=U1(t,e,n,r),n!==null){var i=Et();ln(n,t,r,i),aE(n,e,r)}}function oC(t,e,n){var r=Rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sE(t))oE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,dn(l,o)){var u=e.interleaved;u===null?(i.next=i,kp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=U1(t,e,i,r),n!==null&&(i=Et(),ln(n,t,r,i),aE(n,e,r))}}function sE(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function oE(t,e){jo=Cu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function aE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pp(t,n)}}var ku={readContext:Yt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},aC={readContext:Yt,useCallback:function(t,e){return mn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:qy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,Z1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=sC.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=mn();return t={current:t},e.memoizedState=t},useState:Gy,useDebugValue:Vp,useDeferredValue:function(t){return mn().memoizedState=t},useTransition:function(){var t=Gy(!1),e=t[0];return t=iC.bind(null,t[1]),mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=mn();if(Ie){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ge===null)throw Error(U(349));vi&30||H1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,qy(q1.bind(null,r,s,t),[t]),r.flags|=2048,da(9,G1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=mn(),e=Ge.identifierPrefix;if(Ie){var n=Fn,r=jn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lC={readContext:Yt,useCallback:tE,useContext:Yt,useEffect:Mp,useImperativeHandle:eE,useInsertionEffect:X1,useLayoutEffect:J1,useMemo:nE,useReducer:Bd,useRef:Y1,useState:function(){return Bd(ca)},useDebugValue:Vp,useDeferredValue:function(t){var e=Xt();return rE(e,Be.memoizedState,t)},useTransition:function(){var t=Bd(ca)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:$1,useSyncExternalStore:W1,useId:iE,unstable_isNewReconciler:!1},uC={readContext:Yt,useCallback:tE,useContext:Yt,useEffect:Mp,useImperativeHandle:eE,useInsertionEffect:X1,useLayoutEffect:J1,useMemo:nE,useReducer:zd,useRef:Y1,useState:function(){return zd(ca)},useDebugValue:Vp,useDeferredValue:function(t){var e=Xt();return Be===null?e.memoizedState=t:rE(e,Be.memoizedState,t)},useTransition:function(){var t=zd(ca)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:$1,useSyncExternalStore:W1,useId:iE,unstable_isNewReconciler:!1};function tn(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hc={isMounted:function(t){return(t=t._reactInternals)?bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Rr(t),s=$n(r,i);s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(ln(e,t,i,r),Wl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Rr(t),s=$n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(ln(e,t,i,r),Wl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Rr(t),i=$n(n,r);i.tag=2,e!=null&&(i.callback=e),e=kr(t,i,r),e!==null&&(ln(e,t,r,n),Wl(e,t,r))}};function Ky(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,r)||!ra(i,s):!0}function lE(t,e,n){var r=!1,i=Vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=kt(e)?gi:pt.current,r=e.contextTypes,s=(r=r!=null)?vs(t,i):Vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hc.enqueueReplaceState(e,e.state,null)}function Hh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Pp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=kt(e)?gi:pt.current,i.context=vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hc.enqueueReplaceState(i,i.state,null),Su(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",r=e;do n+=VS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cC=typeof WeakMap=="function"?WeakMap:Map;function uE(t,e,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ru||(Ru=!0,nf=r),Gh(t,e)},n}function cE(t,e,n){n=$n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gh(t,e),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new cC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=AC.bind(null,t,e,n),e.then(t,t))}function Xy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$n(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var dC=tr.ReactCurrentOwner,xt=!1;function vt(t,e,n,r){e.child=t===null?F1(e,null,n,r):Es(e,t.child,n,r)}function Zy(t,e,n,r,i){n=n.render;var s=e.ref;return us(e,i),r=Op(t,e,n,r,s,i),n=Lp(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(Ie&&n&&Tp(e),e.flags|=1,vt(t,e,r,i),e.child)}function ev(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Hp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dE(t,e,s,r,i)):(t=Yl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,r)&&t.ref===e.ref)return Qn(t,e,i)}return e.flags|=1,t=br(s,r),t.ref=e.ref,t.return=e,e.child=t}function dE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ra(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,Qn(t,e,i)}return qh(t,e,n,r,i)}function hE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(ns,bt),bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(ns,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(ns,bt),bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(ns,bt),bt|=r;return vt(t,e,i,n),e.child}function fE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qh(t,e,n,r,i){var s=kt(n)?gi:pt.current;return s=vs(e,s),us(e,i),n=Op(t,e,n,r,s,i),r=Lp(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(Ie&&r&&Tp(e),e.flags|=1,vt(t,e,n,i),e.child)}function tv(t,e,n,r,i){if(kt(n)){var s=!0;Eu(e)}else s=!1;if(us(e,i),e.stateNode===null)ql(t,e),lE(e,n,r),Hh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yt(c):(c=kt(n)?gi:pt.current,c=vs(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Qy(e,o,r,c),hr=!1;var m=e.memoizedState;o.state=m,Su(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Ct.current||hr?(typeof h=="function"&&(Wh(e,n,h,r),u=e.memoizedState),(l=hr||Ky(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,B1(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:tn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Yt(u):(u=kt(n)?gi:pt.current,u=vs(e,u));var I=n.getDerivedStateFromProps;(h=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Qy(e,o,r,u),hr=!1,m=e.memoizedState,o.state=m,Su(e,r,o,i);var A=e.memoizedState;l!==p||m!==A||Ct.current||hr?(typeof I=="function"&&(Wh(e,n,I,r),A=e.memoizedState),(c=hr||Ky(e,n,c,r,m,A,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Kh(t,e,n,r,s,i)}function Kh(t,e,n,r,i,s){fE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Uy(e,n,!1),Qn(t,e,s);r=e.stateNode,dC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,l,s)):vt(t,e,l,s),e.memoizedState=r.state,i&&Uy(e,n,!0),e.child}function pE(t){var e=t.stateNode;e.pendingContext?Fy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fy(t,e.context,!1),Rp(t,e.containerInfo)}function nv(t,e,n,r,i){return _s(),Ap(i),e.flags|=256,vt(t,e,n,r),e.child}var Qh={dehydrated:null,treeContext:null,retryLane:0};function Yh(t){return{baseLanes:t,cachePool:null,transitions:null}}function mE(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(xe,i&1),t===null)return zh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mc(o,r,0,null),t=di(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yh(n),e.memoizedState=Qh,t):jp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return hC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=br(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=br(l,s):(s=di(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qh,r}return s=t.child,t=s.sibling,r=br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jp(t,e){return e=mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xl(t,e,n,r){return r!==null&&Ap(r),Es(e,t.child,null,n),t=jp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$d(Error(U(422))),xl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mc({mode:"visible",children:r.children},i,0,null),s=di(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Es(e,t.child,null,o),e.child.memoizedState=Yh(o),e.memoizedState=Qh,s);if(!(e.mode&1))return xl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=$d(s,r,void 0),xl(t,e,o,r)}if(l=(o&t.childLanes)!==0,xt||l){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kn(t,i),ln(r,t,i,-1))}return Wp(),r=$d(Error(U(421))),xl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=SC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Nt=Cr(i.nextSibling),Lt=e,Ie=!0,rn=null,t!==null&&(Ht[Gt++]=jn,Ht[Gt++]=Fn,Ht[Gt++]=yi,jn=t.id,Fn=t.overflow,yi=e),e=jp(e,r.children),e.flags|=4096,e)}function rv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$h(t.return,e,n)}function Wd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rv(t,n,e);else if(t.tag===19)rv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wd(e,!0,n,null,s);break;case"together":Wd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_i|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fC(t,e,n){switch(e.tag){case 3:pE(e),_s();break;case 5:z1(e);break;case 1:kt(e.type)&&Eu(e);break;case 4:Rp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?mE(t,e,n):(ye(xe,xe.current&1),t=Qn(t,e,n),t!==null?t.sibling:null);ye(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,hE(t,e,n)}return Qn(t,e,n)}var yE,Xh,vE,_E;yE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xh=function(){};vE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ai(wn.current);var s=null;switch(n){case"input":i=_h(t,i),r=_h(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=Th(t,i),r=Th(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vu)}Ah(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};_E=function(t,e,n,r){n!==r&&(e.flags|=4)};function yo(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function pC(t,e,n){var r=e.pendingProps;switch(Ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return kt(e.type)&&_u(),lt(e),null;case 3:return r=e.stateNode,ws(),we(Ct),we(pt),Np(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(of(rn),rn=null))),Xh(t,e),lt(e),null;case 5:bp(e);var i=ai(la.current);if(n=e.type,t!==null&&e.stateNode!=null)vE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return lt(e),null}if(t=ai(wn.current),Al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yn]=e,r[oa]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Io.length;i++)_e(Io[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":hy(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":py(r,s),_e("invalid",r)}Ah(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Il(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Il(r.textContent,l,t),i=["children",""+l]):Yo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":ml(r),fy(r,s,!0);break;case"textarea":ml(r),my(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=vu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=q_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[oa]=r,yE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sh(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Io.length;i++)_e(Io[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":hy(t,r),i=_h(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),_e("invalid",t);break;case"textarea":py(t,r),i=Th(t,r),_e("invalid",t);break;default:i=r}Ah(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Y_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&K_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xo(t,u):typeof u=="number"&&Xo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&lp(t,s,u,o))}switch(n){case"input":ml(t),fy(t,r,!1);break;case"textarea":ml(t),my(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ss(t,!!r.multiple,s,!1):r.defaultValue!=null&&ss(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)_E(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ai(la.current),ai(wn.current),Al(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(s=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:Il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Il(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return lt(e),null;case 13:if(we(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Nt!==null&&e.mode&1&&!(e.flags&128))V1(),_s(),e.flags|=98560,s=!1;else if(s=Al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[yn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else rn!==null&&(of(rn),rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?ze===0&&(ze=3):Wp())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return ws(),Xh(t,e),t===null&&ia(e.stateNode.containerInfo),lt(e),null;case 10:return Cp(e.type._context),lt(e),null;case 17:return kt(e.type)&&_u(),lt(e),null;case 19:if(we(xe),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)yo(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xu(t),o!==null){for(e.flags|=128,yo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Is&&(e.flags|=128,r=!0,yo(s,!1),e.lanes=4194304)}else{if(!r)if(t=xu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return lt(e),null}else 2*De()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,r=!0,yo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=xe.current,ye(xe,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return $p(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function mC(t,e){switch(Ip(e),e.tag){case 1:return kt(e.type)&&_u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),we(Ct),we(pt),Np(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bp(e),null;case 13:if(we(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(xe),null;case 4:return ws(),null;case 10:return Cp(e.type._context),null;case 22:case 23:return $p(),null;case 24:return null;default:return null}}var Cl=!1,dt=!1,gC=typeof WeakSet=="function"?WeakSet:Set,$=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Jh(t,e,n){try{n()}catch(r){be(t,e,r)}}var iv=!1;function yC(t,e){if(Lh=mu,t=A1(),wp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,h=0,p=t,m=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++h===r&&(u=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mh={focusedElem:t,selectionRange:n},mu=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var x=A.memoizedProps,C=A.memoizedState,_=e.stateNode,g=_.getSnapshotBeforeUpdate(e.elementType===e.type?x:tn(e.type,x),C);_.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){be(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return A=iv,iv=!1,A}function Fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jh(e,n,s)}i=i.next}while(i!==r)}}function fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function EE(t){var e=t.alternate;e!==null&&(t.alternate=null,EE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[oa],delete e[Fh],delete e[Zx],delete e[eC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wE(t){return t.tag===5||t.tag===3||t.tag===4}function sv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vu));else if(r!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}function tf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}var Qe=null,nn=!1;function lr(t,e,n){for(n=n.child;n!==null;)TE(t,e,n),n=n.sibling}function TE(t,e,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:dt||ts(n,e);case 6:var r=Qe,i=nn;Qe=null,lr(t,e,n),Qe=r,nn=i,Qe!==null&&(nn?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(nn?(t=Qe,n=n.stateNode,t.nodeType===8?Vd(t.parentNode,n):t.nodeType===1&&Vd(t,n),ta(t)):Vd(Qe,n.stateNode));break;case 4:r=Qe,i=nn,Qe=n.stateNode.containerInfo,nn=!0,lr(t,e,n),Qe=r,nn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jh(n,e,o),i=i.next}while(i!==r)}lr(t,e,n);break;case 1:if(!dt&&(ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){be(n,e,l)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,lr(t,e,n),dt=r):lr(t,e,n);break;default:lr(t,e,n)}}function ov(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gC),e.forEach(function(r){var i=xC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,nn=!1;break e;case 3:Qe=l.stateNode.containerInfo,nn=!0;break e;case 4:Qe=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(Qe===null)throw Error(U(160));TE(s,o,i),Qe=null,nn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)IE(e,t),e=e.sibling}function IE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),pn(t),r&4){try{Fo(3,t,t.return),fc(3,t)}catch(x){be(t,t.return,x)}try{Fo(5,t,t.return)}catch(x){be(t,t.return,x)}}break;case 1:en(e,t),pn(t),r&512&&n!==null&&ts(n,n.return);break;case 5:if(en(e,t),pn(t),r&512&&n!==null&&ts(n,n.return),t.flags&32){var i=t.stateNode;try{Xo(i,"")}catch(x){be(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&H_(i,s),Sh(l,o);var c=Sh(l,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?Y_(i,p):h==="dangerouslySetInnerHTML"?K_(i,p):h==="children"?Xo(i,p):lp(i,h,p,c)}switch(l){case"input":Eh(i,s);break;case"textarea":G_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?ss(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?ss(i,!!s.multiple,s.defaultValue,!0):ss(i,!!s.multiple,s.multiple?[]:"",!1))}i[oa]=s}catch(x){be(t,t.return,x)}}break;case 6:if(en(e,t),pn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){be(t,t.return,x)}}break;case 3:if(en(e,t),pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(x){be(t,t.return,x)}break;case 4:en(e,t),pn(t);break;case 13:en(e,t),pn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bp=De())),r&4&&ov(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(c=dt)||h,en(e,t),dt=c):en(e,t),pn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for($=t,h=t.child;h!==null;){for(p=$=h;$!==null;){switch(m=$,I=m.child,m.tag){case 0:case 11:case 14:case 15:Fo(4,m,m.return);break;case 1:ts(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(x){be(r,n,x)}}break;case 5:ts(m,m.return);break;case 22:if(m.memoizedState!==null){lv(p);continue}}I!==null?(I.return=m,$=I):lv(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Q_("display",o))}catch(x){be(t,t.return,x)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){be(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:en(e,t),pn(t),r&4&&ov(t);break;case 21:break;default:en(e,t),pn(t)}}function pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wE(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xo(i,""),r.flags&=-33);var s=sv(t);tf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=sv(t);ef(t,l,o);break;default:throw Error(U(161))}}catch(u){be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vC(t,e,n){$=t,AE(t)}function AE(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Cl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||dt;l=Cl;var c=dt;if(Cl=o,(dt=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?uv(i):u!==null?(u.return=o,$=u):uv(i);for(;s!==null;)$=s,AE(s),s=s.sibling;$=i,Cl=l,dt=c}av(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):av(t)}}function av(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||fc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ta(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}dt||e.flags&512&&Zh(e)}catch(m){be(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function lv(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function uv(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fc(4,e)}catch(u){be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){be(e,i,u)}}var s=e.return;try{Zh(e)}catch(u){be(e,s,u)}break;case 5:var o=e.return;try{Zh(e)}catch(u){be(e,o,u)}}}catch(u){be(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var _C=Math.ceil,Pu=tr.ReactCurrentDispatcher,Fp=tr.ReactCurrentOwner,Kt=tr.ReactCurrentBatchConfig,ue=0,Ge=null,Fe=null,Je=0,bt=0,ns=Gr(0),ze=0,ha=null,_i=0,pc=0,Up=0,Uo=null,At=null,Bp=0,Is=1/0,Ln=null,Ru=!1,nf=null,Pr=null,kl=!1,_r=null,bu=0,Bo=0,rf=null,Kl=-1,Ql=0;function Et(){return ue&6?De():Kl!==-1?Kl:Kl=De()}function Rr(t){return t.mode&1?ue&2&&Je!==0?Je&-Je:nC.transition!==null?(Ql===0&&(Ql=l1()),Ql):(t=pe,t!==0||(t=window.event,t=t===void 0?16:m1(t.type)),t):1}function ln(t,e,n,r){if(50<Bo)throw Bo=0,rf=null,Error(U(185));ka(t,n,r),(!(ue&2)||t!==Ge)&&(t===Ge&&(!(ue&2)&&(pc|=n),ze===4&&pr(t,Je)),Pt(t,r),n===1&&ue===0&&!(e.mode&1)&&(Is=De()+500,cc&&qr()))}function Pt(t,e){var n=t.callbackNode;nx(t,e);var r=pu(t,t===Ge?Je:0);if(r===0)n!==null&&vy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vy(n),e===1)t.tag===0?tC(cv.bind(null,t)):O1(cv.bind(null,t)),Xx(function(){!(ue&6)&&qr()}),n=null;else{switch(u1(r)){case 1:n=fp;break;case 4:n=o1;break;case 16:n=fu;break;case 536870912:n=a1;break;default:n=fu}n=NE(n,SE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function SE(t,e){if(Kl=-1,Ql=0,ue&6)throw Error(U(327));var n=t.callbackNode;if(cs()&&t.callbackNode!==n)return null;var r=pu(t,t===Ge?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nu(t,r);else{e=r;var i=ue;ue|=2;var s=CE();(Ge!==t||Je!==e)&&(Ln=null,Is=De()+500,ci(t,e));do try{TC();break}catch(l){xE(t,l)}while(!0);xp(),Pu.current=s,ue=i,Fe!==null?e=0:(Ge=null,Je=0,e=ze)}if(e!==0){if(e===2&&(i=Rh(t),i!==0&&(r=i,e=sf(t,i))),e===1)throw n=ha,ci(t,0),pr(t,r),Pt(t,De()),n;if(e===6)pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!EC(i)&&(e=Nu(t,r),e===2&&(s=Rh(t),s!==0&&(r=s,e=sf(t,s))),e===1))throw n=ha,ci(t,0),pr(t,r),Pt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:ni(t,At,Ln);break;case 3:if(pr(t,r),(r&130023424)===r&&(e=Bp+500-De(),10<e)){if(pu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jh(ni.bind(null,t,At,Ln),e);break}ni(t,At,Ln);break;case 4:if(pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_C(r/1960))-r,10<r){t.timeoutHandle=jh(ni.bind(null,t,At,Ln),r);break}ni(t,At,Ln);break;case 5:ni(t,At,Ln);break;default:throw Error(U(329))}}}return Pt(t,De()),t.callbackNode===n?SE.bind(null,t):null}function sf(t,e){var n=Uo;return t.current.memoizedState.isDehydrated&&(ci(t,e).flags|=256),t=Nu(t,e),t!==2&&(e=At,At=n,e!==null&&of(e)),t}function of(t){At===null?At=t:At.push.apply(At,t)}function EC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~Up,e&=~pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function cv(t){if(ue&6)throw Error(U(327));cs();var e=pu(t,0);if(!(e&1))return Pt(t,De()),null;var n=Nu(t,e);if(t.tag!==0&&n===2){var r=Rh(t);r!==0&&(e=r,n=sf(t,r))}if(n===1)throw n=ha,ci(t,0),pr(t,e),Pt(t,De()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ni(t,At,Ln),Pt(t,De()),null}function zp(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Is=De()+500,cc&&qr())}}function Ei(t){_r!==null&&_r.tag===0&&!(ue&6)&&cs();var e=ue;ue|=1;var n=Kt.transition,r=pe;try{if(Kt.transition=null,pe=1,t)return t()}finally{pe=r,Kt.transition=n,ue=e,!(ue&6)&&qr()}}function $p(){bt=ns.current,we(ns)}function ci(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Yx(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(Ip(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_u();break;case 3:ws(),we(Ct),we(pt),Np();break;case 5:bp(r);break;case 4:ws();break;case 13:we(xe);break;case 19:we(xe);break;case 10:Cp(r.type._context);break;case 22:case 23:$p()}n=n.return}if(Ge=t,Fe=t=br(t.current,null),Je=bt=e,ze=0,ha=null,Up=pc=_i=0,At=Uo=null,oi!==null){for(e=0;e<oi.length;e++)if(n=oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}oi=null}return t}function xE(t,e){do{var n=Fe;try{if(xp(),Hl.current=ku,Cu){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cu=!1}if(vi=0,He=Be=Ce=null,jo=!1,ua=0,Fp.current=null,n===null||n.return===null){ze=1,ha=e,Fe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var I=Xy(o);if(I!==null){I.flags&=-257,Jy(I,o,l,s,e),I.mode&1&&Yy(s,c,e),e=I,u=c;var A=e.updateQueue;if(A===null){var x=new Set;x.add(u),e.updateQueue=x}else A.add(u);break e}else{if(!(e&1)){Yy(s,c,e),Wp();break e}u=Error(U(426))}}else if(Ie&&l.mode&1){var C=Xy(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Jy(C,o,l,s,e),Ap(Ts(u,l));break e}}s=u=Ts(u,l),ze!==4&&(ze=2),Uo===null?Uo=[s]:Uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=uE(s,u,e);Wy(s,_);break e;case 1:l=u;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Pr===null||!Pr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=cE(s,l,e);Wy(s,b);break e}}s=s.return}while(s!==null)}PE(n)}catch(M){e=M,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function CE(){var t=Pu.current;return Pu.current=ku,t===null?ku:t}function Wp(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||!(_i&268435455)&&!(pc&268435455)||pr(Ge,Je)}function Nu(t,e){var n=ue;ue|=2;var r=CE();(Ge!==t||Je!==e)&&(Ln=null,ci(t,e));do try{wC();break}catch(i){xE(t,i)}while(!0);if(xp(),ue=n,Pu.current=r,Fe!==null)throw Error(U(261));return Ge=null,Je=0,ze}function wC(){for(;Fe!==null;)kE(Fe)}function TC(){for(;Fe!==null&&!qS();)kE(Fe)}function kE(t){var e=bE(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?PE(t):Fe=e,Fp.current=null}function PE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mC(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Fe=null;return}}else if(n=pC(n,e,bt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);ze===0&&(ze=5)}function ni(t,e,n){var r=pe,i=Kt.transition;try{Kt.transition=null,pe=1,IC(t,e,n,r)}finally{Kt.transition=i,pe=r}return null}function IC(t,e,n,r){do cs();while(_r!==null);if(ue&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(rx(t,s),t===Ge&&(Fe=Ge=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kl||(kl=!0,NE(fu,function(){return cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var o=pe;pe=1;var l=ue;ue|=4,Fp.current=null,yC(t,n),IE(n,t),$x(Mh),mu=!!Lh,Mh=Lh=null,t.current=n,vC(n),KS(),ue=l,pe=o,Kt.transition=s}else t.current=n;if(kl&&(kl=!1,_r=t,bu=i),s=t.pendingLanes,s===0&&(Pr=null),XS(n.stateNode),Pt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ru)throw Ru=!1,t=nf,nf=null,t;return bu&1&&t.tag!==0&&cs(),s=t.pendingLanes,s&1?t===rf?Bo++:(Bo=0,rf=t):Bo=0,qr(),null}function cs(){if(_r!==null){var t=u1(bu),e=Kt.transition,n=pe;try{if(Kt.transition=null,pe=16>t?16:t,_r===null)var r=!1;else{if(t=_r,_r=null,bu=0,ue&6)throw Error(U(331));var i=ue;for(ue|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:Fo(8,h,s)}var p=h.child;if(p!==null)p.return=h,$=p;else for(;$!==null;){h=$;var m=h.sibling,I=h.return;if(EE(h),h===c){$=null;break}if(m!==null){m.return=I,$=m;break}$=I}}}var A=s.alternate;if(A!==null){var x=A.child;if(x!==null){A.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fo(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,$=_;break e}$=s.return}}var g=t.current;for($=g;$!==null;){o=$;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,$=y;else e:for(o=g;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fc(9,l)}}catch(M){be(l,l.return,M)}if(l===o){$=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,$=b;break e}$=l.return}}if(ue=i,qr(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(sc,t)}catch{}r=!0}return r}finally{pe=n,Kt.transition=e}}return!1}function dv(t,e,n){e=Ts(n,e),e=uE(t,e,1),t=kr(t,e,1),e=Et(),t!==null&&(ka(t,1,e),Pt(t,e))}function be(t,e,n){if(t.tag===3)dv(t,t,n);else for(;e!==null;){if(e.tag===3){dv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){t=Ts(n,t),t=cE(e,t,1),e=kr(e,t,1),t=Et(),e!==null&&(ka(e,1,t),Pt(e,t));break}}e=e.return}}function AC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(Je&n)===n&&(ze===4||ze===3&&(Je&130023424)===Je&&500>De()-Bp?ci(t,0):Up|=n),Pt(t,e)}function RE(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var n=Et();t=Kn(t,e),t!==null&&(ka(t,e,n),Pt(t,n))}function SC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),RE(t,n)}function xC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),RE(t,n)}var bE;bE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,fC(t,e,n);xt=!!(t.flags&131072)}else xt=!1,Ie&&e.flags&1048576&&L1(e,Tu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ql(t,e),t=e.pendingProps;var i=vs(e,pt.current);us(e,n),i=Op(null,e,r,t,i,n);var s=Lp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,Eu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pp(e),i.updater=hc,e.stateNode=i,i._reactInternals=e,Hh(e,r,t,n),e=Kh(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&Tp(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ql(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kC(r),t=tn(r,t),i){case 0:e=qh(null,e,r,t,n);break e;case 1:e=tv(null,e,r,t,n);break e;case 11:e=Zy(null,e,r,t,n);break e;case 14:e=ev(null,e,r,tn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),qh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),tv(t,e,r,i,n);case 3:e:{if(pE(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,B1(t,e),Su(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ts(Error(U(423)),e),e=nv(t,e,r,n,i);break e}else if(r!==i){i=Ts(Error(U(424)),e),e=nv(t,e,r,n,i);break e}else for(Nt=Cr(e.stateNode.containerInfo.firstChild),Lt=e,Ie=!0,rn=null,n=F1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),r===i){e=Qn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return z1(e),t===null&&zh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vh(r,i)?o=null:s!==null&&Vh(r,s)&&(e.flags|=32),fE(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&zh(e),null;case 13:return mE(t,e,n);case 4:return Rp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Es(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Zy(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Iu,r._currentValue),r._currentValue=o,s!==null)if(dn(s.value,o)){if(s.children===i.children&&!Ct.current){e=Qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=$n(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),$h(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,us(e,n),i=Yt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=tn(r,e.pendingProps),i=tn(r.type,i),ev(t,e,r,i,n);case 15:return dE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),ql(t,e),e.tag=1,kt(r)?(t=!0,Eu(e)):t=!1,us(e,n),lE(e,r,i),Hh(e,r,i,n),Kh(null,e,r,!0,t,n);case 19:return gE(t,e,n);case 22:return hE(t,e,n)}throw Error(U(156,e.tag))};function NE(t,e){return s1(t,e)}function CC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(t,e,n,r){return new CC(t,e,n,r)}function Hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kC(t){if(typeof t=="function")return Hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cp)return 11;if(t===dp)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Hp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gi:return di(n.children,i,s,e);case up:o=8,i|=8;break;case mh:return t=qt(12,n,e,i|2),t.elementType=mh,t.lanes=s,t;case gh:return t=qt(13,n,e,i),t.elementType=gh,t.lanes=s,t;case yh:return t=qt(19,n,e,i),t.elementType=yh,t.lanes=s,t;case z_:return mc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U_:o=10;break e;case B_:o=9;break e;case cp:o=11;break e;case dp:o=14;break e;case dr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function di(t,e,n,r){return t=qt(7,t,r,e),t.lanes=n,t}function mc(t,e,n,r){return t=qt(22,t,r,e),t.elementType=z_,t.lanes=n,t.stateNode={isHidden:!1},t}function Hd(t,e,n){return t=qt(6,t,null,e),t.lanes=n,t}function Gd(t,e,n){return e=qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xd(0),this.expirationTimes=xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gp(t,e,n,r,i,s,o,l,u){return t=new PC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pp(s),t}function RC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function DE(t){if(!t)return Vr;t=t._reactInternals;e:{if(bi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(kt(n))return D1(t,n,e)}return e}function OE(t,e,n,r,i,s,o,l,u){return t=Gp(n,r,!0,t,i,s,o,l,u),t.context=DE(null),n=t.current,r=Et(),i=Rr(n),s=$n(r,i),s.callback=e??null,kr(n,s,i),t.current.lanes=i,ka(t,i,r),Pt(t,r),t}function gc(t,e,n,r){var i=e.current,s=Et(),o=Rr(i);return n=DE(n),e.context===null?e.context=n:e.pendingContext=n,e=$n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(i,e,o),t!==null&&(ln(t,i,o,s),Wl(t,i,o)),o}function Du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qp(t,e){hv(t,e),(t=t.alternate)&&hv(t,e)}function bC(){return null}var LE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kp(t){this._internalRoot=t}yc.prototype.render=Kp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));gc(t,e,null,null)};yc.prototype.unmount=Kp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ei(function(){gc(null,t,null,null)}),e[qn]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=h1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&p1(t)}};function Qp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fv(){}function NC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Du(o);s.call(c)}}var o=OE(e,r,t,0,null,!1,!1,"",fv);return t._reactRootContainer=o,t[qn]=o.current,ia(t.nodeType===8?t.parentNode:t),Ei(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Du(u);l.call(c)}}var u=Gp(t,0,!1,null,null,!1,!1,"",fv);return t._reactRootContainer=u,t[qn]=u.current,ia(t.nodeType===8?t.parentNode:t),Ei(function(){gc(e,u,n,r)}),u}function _c(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Du(o);l.call(u)}}gc(e,o,t,i)}else o=NC(n,e,t,i,r);return Du(o)}c1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(pp(e,n|1),Pt(e,De()),!(ue&6)&&(Is=De()+500,qr()))}break;case 13:Ei(function(){var r=Kn(t,1);if(r!==null){var i=Et();ln(r,t,1,i)}}),qp(t,1)}};mp=function(t){if(t.tag===13){var e=Kn(t,134217728);if(e!==null){var n=Et();ln(e,t,134217728,n)}qp(t,134217728)}};d1=function(t){if(t.tag===13){var e=Rr(t),n=Kn(t,e);if(n!==null){var r=Et();ln(n,t,e,r)}qp(t,e)}};h1=function(){return pe};f1=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Ch=function(t,e,n){switch(e){case"input":if(Eh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uc(r);if(!i)throw Error(U(90));W_(r),Eh(r,i)}}}break;case"textarea":G_(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};Z_=zp;e1=Ei;var DC={usingClientEntryPoint:!1,Events:[Ra,Yi,uc,X_,J_,zp]},vo={findFiberByHostInstance:si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OC={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=r1(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||bC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{sc=Pl.inject(OC),En=Pl}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DC;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qp(e))throw Error(U(200));return RC(t,e,null,n)};Ut.createRoot=function(t,e){if(!Qp(t))throw Error(U(299));var n=!1,r="",i=LE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gp(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,ia(t.nodeType===8?t.parentNode:t),new Kp(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=r1(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return Ei(t)};Ut.hydrate=function(t,e,n){if(!vc(e))throw Error(U(200));return _c(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!Qp(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=LE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=OE(e,null,t,1,n??null,i,!1,s,o),t[qn]=e.current,ia(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yc(e)};Ut.render=function(t,e,n){if(!vc(e))throw Error(U(200));return _c(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!vc(t))throw Error(U(40));return t._reactRootContainer?(Ei(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};Ut.unstable_batchedUpdates=zp;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vc(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return _c(t,e,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function ME(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ME)}catch(t){console.error(t)}}ME(),M_.exports=Ut;var LC=M_.exports,VE,pv=LC;VE=pv.createRoot,pv.hydrateRoot;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fa.apply(this,arguments)}var Er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Er||(Er={}));const mv="popstate";function MC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return af("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ou(i)}return jC(e,n,null,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VC(){return Math.random().toString(36).substr(2,8)}function gv(t,e){return{usr:t.state,key:t.key,idx:e}}function af(t,e,n,r){return n===void 0&&(n=null),fa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Us(e):e,{state:n,key:e&&e.key||r||VC()})}function Ou(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Us(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function jC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Er.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(fa({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){l=Er.Pop;let C=h(),_=C==null?null:C-c;c=C,u&&u({action:l,location:x.location,delta:_})}function m(C,_){l=Er.Push;let g=af(x.location,C,_);c=h()+1;let y=gv(g,c),b=x.createHref(g);try{o.pushState(y,"",b)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(b)}s&&u&&u({action:l,location:x.location,delta:1})}function I(C,_){l=Er.Replace;let g=af(x.location,C,_);c=h();let y=gv(g,c),b=x.createHref(g);o.replaceState(y,"",b),s&&u&&u({action:l,location:x.location,delta:0})}function A(C){let _=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof C=="string"?C:Ou(C);return g=g.replace(/ $/,"%20"),Oe(_,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,_)}let x={get action(){return l},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(mv,p),u=C,()=>{i.removeEventListener(mv,p),u=null}},createHref(C){return e(i,C)},createURL:A,encodeLocation(C){let _=A(C);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:m,replace:I,go(C){return o.go(C)}};return x}var yv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(yv||(yv={}));function FC(t,e,n){return n===void 0&&(n="/"),UC(t,e,n,!1)}function UC(t,e,n,r){let i=typeof e=="string"?Us(e):e,s=Yp(i.pathname||"/",n);if(s==null)return null;let o=FE(t);BC(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=JC(s);l=YC(o[u],c,r)}return l}function FE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Oe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Nr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),FE(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:KC(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of UE(s.path))i(s,o,u)}),e}function UE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=UE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function BC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:QC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zC=/^:[\w-]+$/,$C=3,WC=2,HC=1,GC=10,qC=-2,vv=t=>t==="*";function KC(t,e){let n=t.split("/"),r=n.length;return n.some(vv)&&(r+=qC),e&&(r+=WC),n.filter(i=>!vv(i)).reduce((i,s)=>i+(zC.test(s)?$C:s===""?HC:GC),r)}function QC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function YC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=_v({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=_v({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Nr([s,p.pathname]),pathnameBase:n2(Nr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Nr([s,p.pathnameBase]))}return o}function _v(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=XC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:m,isOptional:I}=h;if(m==="*"){let x=l[p]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const A=l[p];return I&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function XC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),jE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function JC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return jE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Yp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ZC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Us(t):t;return{pathname:n?n.startsWith("/")?n:e2(n,e):e,search:r2(r),hash:i2(i)}}function e2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function t2(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Xp(t,e){let n=t2(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Jp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Us(t):(i=fa({},t),Oe(!i.pathname||!i.pathname.includes("?"),qd("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),qd("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),qd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=ZC(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Nr=t=>t.join("/").replace(/\/\/+/g,"/"),n2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),r2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,i2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function s2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const BE=["post","put","patch","delete"];new Set(BE);const o2=["get",...BE];new Set(o2);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pa.apply(this,arguments)}const Zp=O.createContext(null),a2=O.createContext(null),Kr=O.createContext(null),Ec=O.createContext(null),nr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),zE=O.createContext(null);function l2(t,e){let{relative:n}=e===void 0?{}:e;Bs()||Oe(!1);let{basename:r,navigator:i}=O.useContext(Kr),{hash:s,pathname:o,search:l}=HE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Nr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Bs(){return O.useContext(Ec)!=null}function Na(){return Bs()||Oe(!1),O.useContext(Ec).location}function $E(t){O.useContext(Kr).static||O.useLayoutEffect(t)}function wc(){let{isDataRoute:t}=O.useContext(nr);return t?w2():u2()}function u2(){Bs()||Oe(!1);let t=O.useContext(Zp),{basename:e,future:n,navigator:r}=O.useContext(Kr),{matches:i}=O.useContext(nr),{pathname:s}=Na(),o=JSON.stringify(Xp(i,n.v7_relativeSplatPath)),l=O.useRef(!1);return $E(()=>{l.current=!0}),O.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Jp(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Nr([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,s,t])}function WE(){let{matches:t}=O.useContext(nr),e=t[t.length-1];return e?e.params:{}}function HE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Kr),{matches:i}=O.useContext(nr),{pathname:s}=Na(),o=JSON.stringify(Xp(i,r.v7_relativeSplatPath));return O.useMemo(()=>Jp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function c2(t,e){return d2(t,e)}function d2(t,e,n,r){Bs()||Oe(!1);let{navigator:i}=O.useContext(Kr),{matches:s}=O.useContext(nr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Na(),h;if(e){var p;let C=typeof e=="string"?Us(e):e;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||Oe(!1),h=C}else h=c;let m=h.pathname||"/",I=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");I="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let A=FC(t,{pathname:I}),x=g2(A&&A.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:Nr([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Nr([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&x?O.createElement(Ec.Provider,{value:{location:pa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Er.Pop}},x):x}function h2(){let t=E2(),e=s2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const f2=O.createElement(h2,null);class p2 extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(nr.Provider,{value:this.props.routeContext},O.createElement(zE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function m2(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(Zp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(nr.Provider,{value:e},r)}function g2(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);h>=0||Oe(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:m,errors:I}=n,A=p.route.loader&&m[p.route.id]===void 0&&(!I||I[p.route.id]===void 0);if(p.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,m)=>{let I,A=!1,x=null,C=null;n&&(I=l&&p.route.id?l[p.route.id]:void 0,x=p.route.errorElement||f2,u&&(c<0&&m===0?(A=!0,C=null):c===m&&(A=!0,C=p.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,m+1)),g=()=>{let y;return I?y=x:A?y=C:p.route.Component?y=O.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=h,O.createElement(m2,{match:p,routeContext:{outlet:h,matches:_,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?O.createElement(p2,{location:n.location,revalidation:n.revalidation,component:x,error:I,children:g(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):g()},null)}var GE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(GE||{}),Lu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Lu||{});function y2(t){let e=O.useContext(Zp);return e||Oe(!1),e}function v2(t){let e=O.useContext(a2);return e||Oe(!1),e}function _2(t){let e=O.useContext(nr);return e||Oe(!1),e}function qE(t){let e=_2(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function E2(){var t;let e=O.useContext(zE),n=v2(Lu.UseRouteError),r=qE(Lu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function w2(){let{router:t}=y2(GE.UseNavigateStable),e=qE(Lu.UseNavigateStable),n=O.useRef(!1);return $E(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pa({fromRouteId:e},s)))},[t,e])}function KE(t){let{to:e,replace:n,state:r,relative:i}=t;Bs()||Oe(!1);let{future:s,static:o}=O.useContext(Kr),{matches:l}=O.useContext(nr),{pathname:u}=Na(),c=wc(),h=Jp(e,Xp(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(h);return O.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Ao(t){Oe(!1)}function T2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Er.Pop,navigator:s,static:o=!1,future:l}=t;Bs()&&Oe(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:pa({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Us(r));let{pathname:h="/",search:p="",hash:m="",state:I=null,key:A="default"}=r,x=O.useMemo(()=>{let C=Yp(h,u);return C==null?null:{location:{pathname:C,search:p,hash:m,state:I,key:A},navigationType:i}},[u,h,p,m,I,A,i]);return x==null?null:O.createElement(Kr.Provider,{value:c},O.createElement(Ec.Provider,{children:n,value:x}))}function I2(t){let{children:e,location:n}=t;return c2(lf(e),n)}new Promise(()=>{});function lf(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,lf(r.props.children,s));return}r.type!==Ao&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uf(){return uf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uf.apply(this,arguments)}function A2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function S2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function x2(t,e){return t.button===0&&(!e||e==="_self")&&!S2(t)}const C2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],k2="6";try{window.__reactRouterVersion=k2}catch{}const P2="startTransition",Ev=AS[P2];function R2(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=MC({window:i,v5Compat:!0}));let o=s.current,[l,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=O.useCallback(p=>{c&&Ev?Ev(()=>u(p)):u(p)},[u,c]);return O.useLayoutEffect(()=>o.listen(h),[o,h]),O.createElement(T2,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const b2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",N2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,As=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:h,unstable_viewTransition:p}=e,m=A2(e,C2),{basename:I}=O.useContext(Kr),A,x=!1;if(typeof c=="string"&&N2.test(c)&&(A=c,b2))try{let y=new URL(window.location.href),b=c.startsWith("//")?new URL(y.protocol+c):new URL(c),M=Yp(b.pathname,I);b.origin===y.origin&&M!=null?c=M+b.search+b.hash:x=!0}catch{}let C=l2(c,{relative:i}),_=D2(c,{replace:o,state:l,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:p});function g(y){r&&r(y),y.defaultPrevented||_(y)}return O.createElement("a",uf({},m,{href:A||C,onClick:x||s?r:g,ref:n,target:u}))});var wv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wv||(wv={}));var Tv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Tv||(Tv={}));function D2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=wc(),c=Na(),h=HE(t,{relative:o});return O.useCallback(p=>{if(x2(p,n)){p.preventDefault();let m=r!==void 0?r:Ou(c)===Ou(h);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,h,r,i,n,t,s,o,l])}var Iv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},O2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},YE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(n[h],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(QE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):O2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new L2;const m=s<<2|l>>4;if(r.push(m),c!==64){const I=l<<4&240|c>>2;if(r.push(I),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class L2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const M2=function(t){const e=QE(t);return YE.encodeByteArray(e,!0)},Mu=function(t){return M2(t).replace(/\./g,"")},XE=function(t){try{return YE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2=()=>V2().__FIREBASE_DEFAULTS__,F2=()=>{if(typeof process>"u"||typeof Iv>"u")return;const t=Iv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},U2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&XE(t[1]);return e&&JSON.parse(e)},Tc=()=>{try{return j2()||F2()||U2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},JE=t=>{var e,n;return(n=(e=Tc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ZE=t=>{const e=JE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ew=()=>{var t;return(t=Tc())===null||t===void 0?void 0:t.config},tw=t=>{var e;return(e=Tc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Mu(JSON.stringify(n)),Mu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function z2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function $2(){var t;const e=(t=Tc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function W2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function H2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function G2(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function q2(){return!$2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function K2(){try{return typeof indexedDB=="object"}catch{return!1}}function Q2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Y2,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Da.prototype.create)}}class Da{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?X2(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,l,r)}}function X2(t,e){return t.replace(J2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const J2=/\{\$([^}]+)}/g;function Z2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Av(s)&&Av(o)){if(!Vu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Av(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function So(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ek(t,e){const n=new tk(t,e);return n.subscribe.bind(n)}class tk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kd),i.error===void 0&&(i.error=Kd),i.complete===void 0&&(i.complete=Kd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}class jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new B2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sk(e))try{this.getOrInitializeService({instanceIdentifier:ri})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ri){return this.instances.has(e)}getOptions(e=ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ik(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ri){return this.component?this.component.multipleInstances?e:ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ik(t){return t===ri?void 0:t}function sk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const ak={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},lk=oe.INFO,uk={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},ck=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class em{constructor(e){this.name=e,this._logLevel=lk,this._logHandler=ck,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ak[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const dk=(t,e)=>e.some(n=>t instanceof n);let Sv,xv;function hk(){return Sv||(Sv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fk(){return xv||(xv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rw=new WeakMap,cf=new WeakMap,iw=new WeakMap,Qd=new WeakMap,tm=new WeakMap;function pk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rw.set(n,t)}).catch(()=>{}),tm.set(e,t),e}function mk(t){if(cf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cf.set(t,e)}let df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gk(t){df=t(df)}function yk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yd(this),e,...n);return iw.set(r,e.sort?e.sort():[e]),Dr(r)}:fk().includes(t)?function(...e){return t.apply(Yd(this),e),Dr(rw.get(this))}:function(...e){return Dr(t.apply(Yd(this),e))}}function vk(t){return typeof t=="function"?yk(t):(t instanceof IDBTransaction&&mk(t),dk(t,hk())?new Proxy(t,df):t)}function Dr(t){if(t instanceof IDBRequest)return pk(t);if(Qd.has(t))return Qd.get(t);const e=vk(t);return e!==t&&(Qd.set(t,e),tm.set(e,t)),e}const Yd=t=>tm.get(t);function _k(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Dr(o.result),u.oldVersion,u.newVersion,Dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ek=["get","getKey","getAll","getAllKeys","count"],wk=["put","add","delete","clear"],Xd=new Map;function Cv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xd.get(e))return Xd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ek.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Xd.set(e,s),s}gk(t=>({...t,get:(e,n,r)=>Cv(e,n)||t.get(e,n,r),has:(e,n)=>!!Cv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ik(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ik(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hf="@firebase/app",kv="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new em("@firebase/app"),Ak="@firebase/app-compat",Sk="@firebase/analytics-compat",xk="@firebase/analytics",Ck="@firebase/app-check-compat",kk="@firebase/app-check",Pk="@firebase/auth",Rk="@firebase/auth-compat",bk="@firebase/database",Nk="@firebase/database-compat",Dk="@firebase/functions",Ok="@firebase/functions-compat",Lk="@firebase/installations",Mk="@firebase/installations-compat",Vk="@firebase/messaging",jk="@firebase/messaging-compat",Fk="@firebase/performance",Uk="@firebase/performance-compat",Bk="@firebase/remote-config",zk="@firebase/remote-config-compat",$k="@firebase/storage",Wk="@firebase/storage-compat",Hk="@firebase/firestore",Gk="@firebase/vertexai-preview",qk="@firebase/firestore-compat",Kk="firebase",Qk="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="[DEFAULT]",Yk={[hf]:"fire-core",[Ak]:"fire-core-compat",[xk]:"fire-analytics",[Sk]:"fire-analytics-compat",[kk]:"fire-app-check",[Ck]:"fire-app-check-compat",[Pk]:"fire-auth",[Rk]:"fire-auth-compat",[bk]:"fire-rtdb",[Nk]:"fire-rtdb-compat",[Dk]:"fire-fn",[Ok]:"fire-fn-compat",[Lk]:"fire-iid",[Mk]:"fire-iid-compat",[Vk]:"fire-fcm",[jk]:"fire-fcm-compat",[Fk]:"fire-perf",[Uk]:"fire-perf-compat",[Bk]:"fire-rc",[zk]:"fire-rc-compat",[$k]:"fire-gcs",[Wk]:"fire-gcs-compat",[Hk]:"fire-fst",[qk]:"fire-fst-compat",[Gk]:"fire-vertex","fire-js":"fire-js",[Kk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Map,Xk=new Map,pf=new Map;function Pv(t,e){try{t.container.addComponent(e)}catch(n){wi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ti(t){const e=t.name;if(pf.has(e))return wi.debug(`There were multiple attempts to register component ${e}.`),!1;pf.set(e,t);for(const n of ju.values())Pv(n,t);for(const n of Xk.values())Pv(n,t);return!0}function Ic(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Or=new Da("app","Firebase",Jk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=Qk;function sw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ff,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Or.create("bad-app-name",{appName:String(i)});if(n||(n=ew()),!n)throw Or.create("no-options");const s=ju.get(i);if(s){if(Vu(n,s.options)&&Vu(r,s.config))return s;throw Or.create("duplicate-app",{appName:i})}const o=new ok(i);for(const u of pf.values())o.addComponent(u);const l=new Zk(n,r,o);return ju.set(i,l),l}function nm(t=ff){const e=ju.get(t);if(!e&&t===ff&&ew())return sw();if(!e)throw Or.create("no-app",{appName:t});return e}function Tn(t,e,n){var r;let i=(r=Yk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wi.warn(l.join(" "));return}Ti(new jr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP="firebase-heartbeat-database",tP=1,ma="firebase-heartbeat-store";let Jd=null;function ow(){return Jd||(Jd=_k(eP,tP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ma)}catch(n){console.warn(n)}}}}).catch(t=>{throw Or.create("idb-open",{originalErrorMessage:t.message})})),Jd}async function nP(t){try{const n=(await ow()).transaction(ma),r=await n.objectStore(ma).get(aw(t));return await n.done,r}catch(e){if(e instanceof Rn)wi.warn(e.message);else{const n=Or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wi.warn(n.message)}}}async function Rv(t,e){try{const r=(await ow()).transaction(ma,"readwrite");await r.objectStore(ma).put(e,aw(t)),await r.done}catch(n){if(n instanceof Rn)wi.warn(n.message);else{const r=Or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wi.warn(r.message)}}}function aw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=1024,iP=30*24*60*60*1e3;class sP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=iP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bv(),{heartbeatsToSend:r,unsentEntries:i}=oP(this._heartbeatsCache.heartbeats),s=Mu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function bv(){return new Date().toISOString().substring(0,10)}function oP(t,e=rP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Nv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K2()?Q2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Nv(t){return Mu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t){Ti(new jr("platform-logger",e=>new Tk(e),"PRIVATE")),Ti(new jr("heartbeat",e=>new sP(e),"PRIVATE")),Tn(hf,kv,t),Tn(hf,kv,"esm2017"),Tn("fire-js","")}lP("");var Dv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hi,lw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function T(){}T.prototype=v.prototype,S.D=v.prototype,S.prototype=new T,S.prototype.constructor=S,S.C=function(k,R,N){for(var P=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)P[Se-2]=arguments[Se];return v.prototype[R].apply(k,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,v,T){T||(T=0);var k=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)k[R]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(R=0;16>R;++R)k[R]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=S.g[0],T=S.g[1],R=S.g[2];var N=S.g[3],P=v+(N^T&(R^N))+k[0]+3614090360&4294967295;v=T+(P<<7&4294967295|P>>>25),P=N+(R^v&(T^R))+k[1]+3905402710&4294967295,N=v+(P<<12&4294967295|P>>>20),P=R+(T^N&(v^T))+k[2]+606105819&4294967295,R=N+(P<<17&4294967295|P>>>15),P=T+(v^R&(N^v))+k[3]+3250441966&4294967295,T=R+(P<<22&4294967295|P>>>10),P=v+(N^T&(R^N))+k[4]+4118548399&4294967295,v=T+(P<<7&4294967295|P>>>25),P=N+(R^v&(T^R))+k[5]+1200080426&4294967295,N=v+(P<<12&4294967295|P>>>20),P=R+(T^N&(v^T))+k[6]+2821735955&4294967295,R=N+(P<<17&4294967295|P>>>15),P=T+(v^R&(N^v))+k[7]+4249261313&4294967295,T=R+(P<<22&4294967295|P>>>10),P=v+(N^T&(R^N))+k[8]+1770035416&4294967295,v=T+(P<<7&4294967295|P>>>25),P=N+(R^v&(T^R))+k[9]+2336552879&4294967295,N=v+(P<<12&4294967295|P>>>20),P=R+(T^N&(v^T))+k[10]+4294925233&4294967295,R=N+(P<<17&4294967295|P>>>15),P=T+(v^R&(N^v))+k[11]+2304563134&4294967295,T=R+(P<<22&4294967295|P>>>10),P=v+(N^T&(R^N))+k[12]+1804603682&4294967295,v=T+(P<<7&4294967295|P>>>25),P=N+(R^v&(T^R))+k[13]+4254626195&4294967295,N=v+(P<<12&4294967295|P>>>20),P=R+(T^N&(v^T))+k[14]+2792965006&4294967295,R=N+(P<<17&4294967295|P>>>15),P=T+(v^R&(N^v))+k[15]+1236535329&4294967295,T=R+(P<<22&4294967295|P>>>10),P=v+(R^N&(T^R))+k[1]+4129170786&4294967295,v=T+(P<<5&4294967295|P>>>27),P=N+(T^R&(v^T))+k[6]+3225465664&4294967295,N=v+(P<<9&4294967295|P>>>23),P=R+(v^T&(N^v))+k[11]+643717713&4294967295,R=N+(P<<14&4294967295|P>>>18),P=T+(N^v&(R^N))+k[0]+3921069994&4294967295,T=R+(P<<20&4294967295|P>>>12),P=v+(R^N&(T^R))+k[5]+3593408605&4294967295,v=T+(P<<5&4294967295|P>>>27),P=N+(T^R&(v^T))+k[10]+38016083&4294967295,N=v+(P<<9&4294967295|P>>>23),P=R+(v^T&(N^v))+k[15]+3634488961&4294967295,R=N+(P<<14&4294967295|P>>>18),P=T+(N^v&(R^N))+k[4]+3889429448&4294967295,T=R+(P<<20&4294967295|P>>>12),P=v+(R^N&(T^R))+k[9]+568446438&4294967295,v=T+(P<<5&4294967295|P>>>27),P=N+(T^R&(v^T))+k[14]+3275163606&4294967295,N=v+(P<<9&4294967295|P>>>23),P=R+(v^T&(N^v))+k[3]+4107603335&4294967295,R=N+(P<<14&4294967295|P>>>18),P=T+(N^v&(R^N))+k[8]+1163531501&4294967295,T=R+(P<<20&4294967295|P>>>12),P=v+(R^N&(T^R))+k[13]+2850285829&4294967295,v=T+(P<<5&4294967295|P>>>27),P=N+(T^R&(v^T))+k[2]+4243563512&4294967295,N=v+(P<<9&4294967295|P>>>23),P=R+(v^T&(N^v))+k[7]+1735328473&4294967295,R=N+(P<<14&4294967295|P>>>18),P=T+(N^v&(R^N))+k[12]+2368359562&4294967295,T=R+(P<<20&4294967295|P>>>12),P=v+(T^R^N)+k[5]+4294588738&4294967295,v=T+(P<<4&4294967295|P>>>28),P=N+(v^T^R)+k[8]+2272392833&4294967295,N=v+(P<<11&4294967295|P>>>21),P=R+(N^v^T)+k[11]+1839030562&4294967295,R=N+(P<<16&4294967295|P>>>16),P=T+(R^N^v)+k[14]+4259657740&4294967295,T=R+(P<<23&4294967295|P>>>9),P=v+(T^R^N)+k[1]+2763975236&4294967295,v=T+(P<<4&4294967295|P>>>28),P=N+(v^T^R)+k[4]+1272893353&4294967295,N=v+(P<<11&4294967295|P>>>21),P=R+(N^v^T)+k[7]+4139469664&4294967295,R=N+(P<<16&4294967295|P>>>16),P=T+(R^N^v)+k[10]+3200236656&4294967295,T=R+(P<<23&4294967295|P>>>9),P=v+(T^R^N)+k[13]+681279174&4294967295,v=T+(P<<4&4294967295|P>>>28),P=N+(v^T^R)+k[0]+3936430074&4294967295,N=v+(P<<11&4294967295|P>>>21),P=R+(N^v^T)+k[3]+3572445317&4294967295,R=N+(P<<16&4294967295|P>>>16),P=T+(R^N^v)+k[6]+76029189&4294967295,T=R+(P<<23&4294967295|P>>>9),P=v+(T^R^N)+k[9]+3654602809&4294967295,v=T+(P<<4&4294967295|P>>>28),P=N+(v^T^R)+k[12]+3873151461&4294967295,N=v+(P<<11&4294967295|P>>>21),P=R+(N^v^T)+k[15]+530742520&4294967295,R=N+(P<<16&4294967295|P>>>16),P=T+(R^N^v)+k[2]+3299628645&4294967295,T=R+(P<<23&4294967295|P>>>9),P=v+(R^(T|~N))+k[0]+4096336452&4294967295,v=T+(P<<6&4294967295|P>>>26),P=N+(T^(v|~R))+k[7]+1126891415&4294967295,N=v+(P<<10&4294967295|P>>>22),P=R+(v^(N|~T))+k[14]+2878612391&4294967295,R=N+(P<<15&4294967295|P>>>17),P=T+(N^(R|~v))+k[5]+4237533241&4294967295,T=R+(P<<21&4294967295|P>>>11),P=v+(R^(T|~N))+k[12]+1700485571&4294967295,v=T+(P<<6&4294967295|P>>>26),P=N+(T^(v|~R))+k[3]+2399980690&4294967295,N=v+(P<<10&4294967295|P>>>22),P=R+(v^(N|~T))+k[10]+4293915773&4294967295,R=N+(P<<15&4294967295|P>>>17),P=T+(N^(R|~v))+k[1]+2240044497&4294967295,T=R+(P<<21&4294967295|P>>>11),P=v+(R^(T|~N))+k[8]+1873313359&4294967295,v=T+(P<<6&4294967295|P>>>26),P=N+(T^(v|~R))+k[15]+4264355552&4294967295,N=v+(P<<10&4294967295|P>>>22),P=R+(v^(N|~T))+k[6]+2734768916&4294967295,R=N+(P<<15&4294967295|P>>>17),P=T+(N^(R|~v))+k[13]+1309151649&4294967295,T=R+(P<<21&4294967295|P>>>11),P=v+(R^(T|~N))+k[4]+4149444226&4294967295,v=T+(P<<6&4294967295|P>>>26),P=N+(T^(v|~R))+k[11]+3174756917&4294967295,N=v+(P<<10&4294967295|P>>>22),P=R+(v^(N|~T))+k[2]+718787259&4294967295,R=N+(P<<15&4294967295|P>>>17),P=T+(N^(R|~v))+k[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(R+(P<<21&4294967295|P>>>11))&4294967295,S.g[2]=S.g[2]+R&4294967295,S.g[3]=S.g[3]+N&4294967295}r.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var T=v-this.blockSize,k=this.B,R=this.h,N=0;N<v;){if(R==0)for(;N<=T;)i(this,S,N),N+=this.blockSize;if(typeof S=="string"){for(;N<v;)if(k[R++]=S.charCodeAt(N++),R==this.blockSize){i(this,k),R=0;break}}else for(;N<v;)if(k[R++]=S[N++],R==this.blockSize){i(this,k),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var T=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=T&255,T/=256;for(this.u(S),S=Array(16),v=T=0;4>v;++v)for(var k=0;32>k;k+=8)S[T++]=this.g[v]>>>k&255;return S};function s(S,v){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=v(S)}function o(S,v){this.h=v;for(var T=[],k=!0,R=S.length-1;0<=R;R--){var N=S[R]|0;k&&N==v||(T[R]=N,k=!1)}this.g=T}var l={};function u(S){return-128<=S&&128>S?s(S,function(v){return new o([v|0],0>v?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return p;if(0>S)return C(c(-S));for(var v=[],T=1,k=0;S>=T;k++)v[k]=S/T|0,T*=4294967296;return new o(v,0)}function h(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return C(h(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(v,8)),k=p,R=0;R<S.length;R+=8){var N=Math.min(8,S.length-R),P=parseInt(S.substring(R,R+N),v);8>N?(N=c(Math.pow(v,N)),k=k.j(N).add(c(P))):(k=k.j(T),k=k.add(c(P)))}return k}var p=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-C(this).m();for(var S=0,v=1,T=0;T<this.g.length;T++){var k=this.i(T);S+=(0<=k?k:4294967296+k)*v,v*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(A(this))return"0";if(x(this))return"-"+C(this).toString(S);for(var v=c(Math.pow(S,6)),T=this,k="";;){var R=b(T,v).g;T=_(T,R.j(v));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(S);if(T=R,A(T))return N+k;for(;6>N.length;)N="0"+N;k=N+k}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function A(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function x(S){return S.h==-1}t.l=function(S){return S=_(this,S),x(S)?-1:A(S)?0:1};function C(S){for(var v=S.g.length,T=[],k=0;k<v;k++)T[k]=~S.g[k];return new o(T,~S.h).add(m)}t.abs=function(){return x(this)?C(this):this},t.add=function(S){for(var v=Math.max(this.g.length,S.g.length),T=[],k=0,R=0;R<=v;R++){var N=k+(this.i(R)&65535)+(S.i(R)&65535),P=(N>>>16)+(this.i(R)>>>16)+(S.i(R)>>>16);k=P>>>16,N&=65535,P&=65535,T[R]=P<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function _(S,v){return S.add(C(v))}t.j=function(S){if(A(this)||A(S))return p;if(x(this))return x(S)?C(this).j(C(S)):C(C(this).j(S));if(x(S))return C(this.j(C(S)));if(0>this.l(I)&&0>S.l(I))return c(this.m()*S.m());for(var v=this.g.length+S.g.length,T=[],k=0;k<2*v;k++)T[k]=0;for(k=0;k<this.g.length;k++)for(var R=0;R<S.g.length;R++){var N=this.i(k)>>>16,P=this.i(k)&65535,Se=S.i(R)>>>16,rt=S.i(R)&65535;T[2*k+2*R]+=P*rt,g(T,2*k+2*R),T[2*k+2*R+1]+=N*rt,g(T,2*k+2*R+1),T[2*k+2*R+1]+=P*Se,g(T,2*k+2*R+1),T[2*k+2*R+2]+=N*Se,g(T,2*k+2*R+2)}for(k=0;k<v;k++)T[k]=T[2*k+1]<<16|T[2*k];for(k=v;k<2*v;k++)T[k]=0;return new o(T,0)};function g(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function y(S,v){this.g=S,this.h=v}function b(S,v){if(A(v))throw Error("division by zero");if(A(S))return new y(p,p);if(x(S))return v=b(C(S),v),new y(C(v.g),C(v.h));if(x(v))return v=b(S,C(v)),new y(C(v.g),v.h);if(30<S.g.length){if(x(S)||x(v))throw Error("slowDivide_ only works with positive integers.");for(var T=m,k=v;0>=k.l(S);)T=M(T),k=M(k);var R=j(T,1),N=j(k,1);for(k=j(k,2),T=j(T,2);!A(k);){var P=N.add(k);0>=P.l(S)&&(R=R.add(T),N=P),k=j(k,1),T=j(T,1)}return v=_(S,R.j(v)),new y(R,v)}for(R=p;0<=S.l(v);){for(T=Math.max(1,Math.floor(S.m()/v.m())),k=Math.ceil(Math.log(T)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),N=c(T),P=N.j(v);x(P)||0<P.l(S);)T-=k,N=c(T),P=N.j(v);A(N)&&(N=m),R=R.add(N),S=_(S,P)}return new y(R,S)}t.A=function(S){return b(this,S).h},t.and=function(S){for(var v=Math.max(this.g.length,S.g.length),T=[],k=0;k<v;k++)T[k]=this.i(k)&S.i(k);return new o(T,this.h&S.h)},t.or=function(S){for(var v=Math.max(this.g.length,S.g.length),T=[],k=0;k<v;k++)T[k]=this.i(k)|S.i(k);return new o(T,this.h|S.h)},t.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),T=[],k=0;k<v;k++)T[k]=this.i(k)^S.i(k);return new o(T,this.h^S.h)};function M(S){for(var v=S.g.length+1,T=[],k=0;k<v;k++)T[k]=S.i(k)<<1|S.i(k-1)>>>31;return new o(T,S.h)}function j(S,v){var T=v>>5;v%=32;for(var k=S.g.length-T,R=[],N=0;N<k;N++)R[N]=0<v?S.i(N+T)>>>v|S.i(N+T+1)<<32-v:S.i(N+T);return new o(R,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,hi=o}).apply(typeof Dv<"u"?Dv:typeof self<"u"?self:typeof window<"u"?window:{});var Rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uw,cw,Co,dw,Xl,mf,hw,fw,pw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rl=="object"&&Rl];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var f=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var D=a[w];if(!(D in f))break e;f=f[D]}a=a[a.length-1],w=f[a],d=d(w),d!=w&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var f=0,w=!1,D={next:function(){if(!w&&f<a.length){var L=f++;return{value:d(L,a[L]),done:!1}}return w=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,w),a.apply(d,D)}}return function(){return a.apply(d,arguments)}}function m(a,d,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function I(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var w=f.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function A(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(w,D,L){for(var z=Array(arguments.length-2),me=2;me<arguments.length;me++)z[me-2]=arguments[me];return d.prototype[D].apply(w,z)}}function x(a){const d=a.length;if(0<d){const f=Array(d);for(let w=0;w<d;w++)f[w]=a[w];return f}return[]}function C(a,d){for(let f=1;f<arguments.length;f++){const w=arguments[f];if(u(w)){const D=a.length||0,L=w.length||0;a.length=D+L;for(let z=0;z<L;z++)a[D+z]=w[z]}else a.push(w)}}class _{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function g(a){return/^[\s\xa0]*$/.test(a)}function y(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var M=y().indexOf("Gecko")!=-1&&!(y().toLowerCase().indexOf("webkit")!=-1&&y().indexOf("Edge")==-1)&&!(y().indexOf("Trident")!=-1||y().indexOf("MSIE")!=-1)&&y().indexOf("Edge")==-1;function j(a,d,f){for(const w in a)d.call(f,a[w],w,a)}function S(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function v(a){const d={};for(const f in a)d[f]=a[f];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,d){let f,w;for(let D=1;D<arguments.length;D++){w=arguments[D];for(f in w)a[f]=w[f];for(let L=0;L<T.length;L++)f=T[L],Object.prototype.hasOwnProperty.call(w,f)&&(a[f]=w[f])}}function R(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function P(){var a=q;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Se{constructor(){this.h=this.g=null}add(d,f){const w=rt.get();w.set(d,f),this.h?this.h.next=w:this.g=w,this.h=w}}var rt=new _(()=>new Wt,a=>a.reset());class Wt{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,B=!1,q=new Se,X=()=>{const a=l.Promise.resolve(void 0);Z=()=>{a.then(de)}};var de=()=>{for(var a;a=P();){try{a.h.call(a.g)}catch(f){N(f)}var d=rt;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}B=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Ne=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function Me(a,d){if(ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(M){e:{try{b(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:qe[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Me.aa.h.call(this)}}A(Me,ae);var qe={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var mt="closure_listenable_"+(1e6*Math.random()|0),Xc=0;function NA(a,d,f,w,D){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!w,this.ha=D,this.key=++Xc,this.da=this.fa=!1}function Ya(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Xa(a){this.src=a,this.g={},this.h=0}Xa.prototype.add=function(a,d,f,w,D){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var z=Zc(a,d,w,D);return-1<z?(d=a[z],f||(d.fa=!1)):(d=new NA(d,this.src,L,!!w,D),d.fa=f,a.push(d)),d};function Jc(a,d){var f=d.type;if(f in a.g){var w=a.g[f],D=Array.prototype.indexOf.call(w,d,void 0),L;(L=0<=D)&&Array.prototype.splice.call(w,D,1),L&&(Ya(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Zc(a,d,f,w){for(var D=0;D<a.length;++D){var L=a[D];if(!L.da&&L.listener==d&&L.capture==!!f&&L.ha==w)return D}return-1}var ed="closure_lm_"+(1e6*Math.random()|0),td={};function ag(a,d,f,w,D){if(Array.isArray(d)){for(var L=0;L<d.length;L++)ag(a,d[L],f,w,D);return null}return f=cg(f),a&&a[mt]?a.K(d,f,c(w)?!!w.capture:!!w,D):DA(a,d,f,!1,w,D)}function DA(a,d,f,w,D,L){if(!d)throw Error("Invalid event type");var z=c(D)?!!D.capture:!!D,me=rd(a);if(me||(a[ed]=me=new Xa(a)),f=me.add(d,f,w,z,L),f.proxy)return f;if(w=OA(),f.proxy=w,w.src=a,w.listener=f,a.addEventListener)Ne||(D=z),D===void 0&&(D=!1),a.addEventListener(d.toString(),w,D);else if(a.attachEvent)a.attachEvent(ug(d.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return f}function OA(){function a(f){return d.call(a.src,a.listener,f)}const d=LA;return a}function lg(a,d,f,w,D){if(Array.isArray(d))for(var L=0;L<d.length;L++)lg(a,d[L],f,w,D);else w=c(w)?!!w.capture:!!w,f=cg(f),a&&a[mt]?(a=a.i,d=String(d).toString(),d in a.g&&(L=a.g[d],f=Zc(L,f,w,D),-1<f&&(Ya(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[d],a.h--)))):a&&(a=rd(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Zc(d,f,w,D)),(f=-1<a?d[a]:null)&&nd(f))}function nd(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[mt])Jc(d.i,a);else{var f=a.type,w=a.proxy;d.removeEventListener?d.removeEventListener(f,w,a.capture):d.detachEvent?d.detachEvent(ug(f),w):d.addListener&&d.removeListener&&d.removeListener(w),(f=rd(d))?(Jc(f,a),f.h==0&&(f.src=null,d[ed]=null)):Ya(a)}}}function ug(a){return a in td?td[a]:td[a]="on"+a}function LA(a,d){if(a.da)a=!0;else{d=new Me(d,this);var f=a.listener,w=a.ha||a.src;a.fa&&nd(a),a=f.call(w,d)}return a}function rd(a){return a=a[ed],a instanceof Xa?a:null}var id="__closure_events_fn_"+(1e9*Math.random()>>>0);function cg(a){return typeof a=="function"?a:(a[id]||(a[id]=function(d){return a.handleEvent(d)}),a[id])}function it(){re.call(this),this.i=new Xa(this),this.M=this,this.F=null}A(it,re),it.prototype[mt]=!0,it.prototype.removeEventListener=function(a,d,f,w){lg(this,a,d,f,w)};function gt(a,d){var f,w=a.F;if(w)for(f=[];w;w=w.F)f.push(w);if(a=a.M,w=d.type||d,typeof d=="string")d=new ae(d,a);else if(d instanceof ae)d.target=d.target||a;else{var D=d;d=new ae(w,a),k(d,D)}if(D=!0,f)for(var L=f.length-1;0<=L;L--){var z=d.g=f[L];D=Ja(z,w,!0,d)&&D}if(z=d.g=a,D=Ja(z,w,!0,d)&&D,D=Ja(z,w,!1,d)&&D,f)for(L=0;L<f.length;L++)z=d.g=f[L],D=Ja(z,w,!1,d)&&D}it.prototype.N=function(){if(it.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],w=0;w<f.length;w++)Ya(f[w]);delete a.g[d],a.h--}}this.F=null},it.prototype.K=function(a,d,f,w){return this.i.add(String(a),d,!1,f,w)},it.prototype.L=function(a,d,f,w){return this.i.add(String(a),d,!0,f,w)};function Ja(a,d,f,w){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,L=0;L<d.length;++L){var z=d[L];if(z&&!z.da&&z.capture==f){var me=z.listener,Ke=z.ha||z.src;z.fa&&Jc(a.i,z),D=me.call(Ke,w)!==!1&&D}}return D&&!w.defaultPrevented}function dg(a,d,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function hg(a){a.g=dg(()=>{a.g=null,a.i&&(a.i=!1,hg(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class MA extends re{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:hg(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ys(a){re.call(this),this.h=a,this.g={}}A(Ys,re);var fg=[];function pg(a){j(a.g,function(d,f){this.g.hasOwnProperty(f)&&nd(d)},a),a.g={}}Ys.prototype.N=function(){Ys.aa.N.call(this),pg(this)},Ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sd=l.JSON.stringify,VA=l.JSON.parse,jA=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function od(){}od.prototype.h=null;function mg(a){return a.h||(a.h=a.i())}function gg(){}var Xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ad(){ae.call(this,"d")}A(ad,ae);function ld(){ae.call(this,"c")}A(ld,ae);var Xr={},yg=null;function Za(){return yg=yg||new it}Xr.La="serverreachability";function vg(a){ae.call(this,Xr.La,a)}A(vg,ae);function Js(a){const d=Za();gt(d,new vg(d))}Xr.STAT_EVENT="statevent";function _g(a,d){ae.call(this,Xr.STAT_EVENT,a),this.stat=d}A(_g,ae);function yt(a){const d=Za();gt(d,new _g(d,a))}Xr.Ma="timingevent";function Eg(a,d){ae.call(this,Xr.Ma,a),this.size=d}A(Eg,ae);function Zs(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function eo(){this.g=!0}eo.prototype.xa=function(){this.g=!1};function FA(a,d,f,w,D,L){a.info(function(){if(a.g)if(L)for(var z="",me=L.split("&"),Ke=0;Ke<me.length;Ke++){var ce=me[Ke].split("=");if(1<ce.length){var st=ce[0];ce=ce[1];var ot=st.split("_");z=2<=ot.length&&ot[1]=="type"?z+(st+"="+ce+"&"):z+(st+"=redacted&")}}else z=null;else z=L;return"XMLHTTP REQ ("+w+") [attempt "+D+"]: "+d+`
`+f+`
`+z})}function UA(a,d,f,w,D,L,z){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+D+"]: "+d+`
`+f+`
`+L+" "+z})}function Vi(a,d,f,w){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+zA(a,f)+(w?" "+w:"")})}function BA(a,d){a.info(function(){return"TIMEOUT: "+d})}eo.prototype.info=function(){};function zA(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var w=f[a];if(!(2>w.length)){var D=w[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var z=1;z<D.length;z++)D[z]=""}}}}return sd(f)}catch{return d}}var el={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ud;function tl(){}A(tl,od),tl.prototype.g=function(){return new XMLHttpRequest},tl.prototype.i=function(){return{}},ud=new tl;function sr(a,d,f,w){this.j=a,this.i=d,this.l=f,this.R=w||1,this.U=new Ys(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tg}function Tg(){this.i=null,this.g="",this.h=!1}var Ig={},cd={};function dd(a,d,f){a.L=1,a.v=sl(Dn(d)),a.m=f,a.P=!0,Ag(a,null)}function Ag(a,d){a.F=Date.now(),nl(a),a.A=Dn(a.v);var f=a.A,w=a.R;Array.isArray(w)||(w=[String(w)]),jg(f.i,"t",w),a.C=0,f=a.j.J,a.h=new Tg,a.g=ny(a.j,f?d:null,!a.m),0<a.O&&(a.M=new MA(m(a.Y,a,a.g),a.O)),d=a.U,f=a.g,w=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(fg[0]=D.toString()),D=fg);for(var L=0;L<D.length;L++){var z=ag(f,D[L],w||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Js(),FA(a.i,a.u,a.A,a.l,a.R,a.m)}sr.prototype.ca=function(a){a=a.target;const d=this.M;d&&On(a)==3?d.j():this.Y(a)},sr.prototype.Y=function(a){try{if(a==this.g)e:{const ot=On(this.g);var d=this.g.Ba();const Ui=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Hg(this.g)))){this.J||ot!=4||d==7||(d==8||0>=Ui?Js(3):Js(2)),hd(this);var f=this.g.Z();this.X=f;t:if(Sg(this)){var w=Hg(this.g);a="";var D=w.length,L=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jr(this),to(this);var z="";break t}this.h.i=new l.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,a+=this.h.i.decode(w[d],{stream:!(L&&d==D-1)});w.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,UA(this.i,this.u,this.A,this.l,this.R,ot,f),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Ke=this.g;if((me=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(me)){var ce=me;break t}}ce=null}if(f=ce)Vi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fd(this,f);else{this.o=!1,this.s=3,yt(12),Jr(this),to(this);break e}}if(this.P){f=!0;let Zt;for(;!this.J&&this.C<z.length;)if(Zt=$A(this,z),Zt==cd){ot==4&&(this.s=4,yt(14),f=!1),Vi(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==Ig){this.s=4,yt(15),Vi(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Vi(this.i,this.l,Zt,null),fd(this,Zt);if(Sg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||z.length!=0||this.h.h||(this.s=1,yt(16),f=!1),this.o=this.o&&f,!f)Vi(this.i,this.l,z,"[Invalid Chunked Response]"),Jr(this),to(this);else if(0<z.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),_d(st),st.M=!0,yt(11))}}else Vi(this.i,this.l,z,null),fd(this,z);ot==4&&Jr(this),this.o&&!this.J&&(ot==4?Jg(this.j,this):(this.o=!1,nl(this)))}else oS(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Jr(this),to(this)}}}catch{}finally{}};function Sg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function $A(a,d){var f=a.C,w=d.indexOf(`
`,f);return w==-1?cd:(f=Number(d.substring(f,w)),isNaN(f)?Ig:(w+=1,w+f>d.length?cd:(d=d.slice(w,w+f),a.C=w+f,d)))}sr.prototype.cancel=function(){this.J=!0,Jr(this)};function nl(a){a.S=Date.now()+a.I,xg(a,a.I)}function xg(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Zs(m(a.ba,a),d)}function hd(a){a.B&&(l.clearTimeout(a.B),a.B=null)}sr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(BA(this.i,this.A),this.L!=2&&(Js(),yt(17)),Jr(this),this.s=2,to(this)):xg(this,this.S-a)};function to(a){a.j.G==0||a.J||Jg(a.j,a)}function Jr(a){hd(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,pg(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function fd(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||pd(f.h,a))){if(!a.K&&pd(f.h,a)&&f.G==3){try{var w=f.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var D=w;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)cl(f),ll(f);else break e;vd(f),yt(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=Zs(m(f.Za,f),6e3));if(1>=Pg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ei(f,11)}else if((a.K||f.g==a)&&cl(f),!g(d))for(D=f.Da.g.parse(d),d=0;d<D.length;d++){let ce=D[d];if(f.T=ce[0],ce=ce[1],f.G==2)if(ce[0]=="c"){f.K=ce[1],f.ia=ce[2];const st=ce[3];st!=null&&(f.la=st,f.j.info("VER="+f.la));const ot=ce[4];ot!=null&&(f.Aa=ot,f.j.info("SVER="+f.Aa));const Ui=ce[5];Ui!=null&&typeof Ui=="number"&&0<Ui&&(w=1.5*Ui,f.L=w,f.j.info("backChannelRequestTimeoutMs_="+w)),w=f;const Zt=a.g;if(Zt){const hl=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hl){var L=w.h;L.g||hl.indexOf("spdy")==-1&&hl.indexOf("quic")==-1&&hl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(md(L,L.h),L.h=null))}if(w.D){const Ed=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ed&&(w.ya=Ed,ve(w.I,w.D,Ed))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),w=f;var z=a;if(w.qa=ty(w,w.J?w.ia:null,w.W),z.K){Rg(w.h,z);var me=z,Ke=w.L;Ke&&(me.I=Ke),me.B&&(hd(me),nl(me)),w.g=z}else Yg(w);0<f.i.length&&ul(f)}else ce[0]!="stop"&&ce[0]!="close"||ei(f,7);else f.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?ei(f,7):yd(f):ce[0]!="noop"&&f.l&&f.l.ta(ce),f.v=0)}}Js(4)}catch{}}var WA=class{constructor(a,d){this.g=a,this.map=d}};function Cg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Pg(a){return a.h?1:a.g?a.g.size:0}function pd(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function md(a,d){a.g?a.g.add(d):a.h=d}function Rg(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Cg.prototype.cancel=function(){if(this.i=bg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return x(a.i)}function HA(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],f=a.length,w=0;w<f;w++)d.push(a[w]);return d}d=[],f=0;for(w in a)d[f++]=a[w];return d}function GA(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const w in a)d[f++]=w;return d}}}function Ng(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=GA(a),w=HA(a),D=w.length,L=0;L<D;L++)d.call(void 0,w[L],f&&f[L],a)}var Dg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qA(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var w=a[f].indexOf("="),D=null;if(0<=w){var L=a[f].substring(0,w);D=a[f].substring(w+1)}else L=a[f];d(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Zr){this.h=a.h,rl(this,a.j),this.o=a.o,this.g=a.g,il(this,a.s),this.l=a.l;var d=a.i,f=new io;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),Og(this,f),this.m=a.m}else a&&(d=String(a).match(Dg))?(this.h=!1,rl(this,d[1]||"",!0),this.o=no(d[2]||""),this.g=no(d[3]||"",!0),il(this,d[4]),this.l=no(d[5]||"",!0),Og(this,d[6]||"",!0),this.m=no(d[7]||"")):(this.h=!1,this.i=new io(null,this.h))}Zr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(ro(d,Lg,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(ro(d,Lg,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ro(f,f.charAt(0)=="/"?YA:QA,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ro(f,JA)),a.join("")};function Dn(a){return new Zr(a)}function rl(a,d,f){a.j=f?no(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function il(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Og(a,d,f){d instanceof io?(a.i=d,ZA(a.i,a.h)):(f||(d=ro(d,XA)),a.i=new io(d,a.h))}function ve(a,d,f){a.i.set(d,f)}function sl(a){return ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function no(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ro(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,KA),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function KA(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Lg=/[#\/\?@]/g,QA=/[#\?:]/g,YA=/[#\?]/g,XA=/[#\?@]/g,JA=/#/g;function io(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function or(a){a.g||(a.g=new Map,a.h=0,a.i&&qA(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=io.prototype,t.add=function(a,d){or(this),this.i=null,a=ji(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Mg(a,d){or(a),d=ji(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Vg(a,d){return or(a),d=ji(a,d),a.g.has(d)}t.forEach=function(a,d){or(this),this.g.forEach(function(f,w){f.forEach(function(D){a.call(d,D,w,this)},this)},this)},t.na=function(){or(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let w=0;w<d.length;w++){const D=a[w];for(let L=0;L<D.length;L++)f.push(d[w])}return f},t.V=function(a){or(this);let d=[];if(typeof a=="string")Vg(this,a)&&(d=d.concat(this.g.get(ji(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return or(this),this.i=null,a=ji(this,a),Vg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function jg(a,d,f){Mg(a,d),0<f.length&&(a.i=null,a.g.set(ji(a,d),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var w=d[f];const L=encodeURIComponent(String(w)),z=this.V(w);for(w=0;w<z.length;w++){var D=L;z[w]!==""&&(D+="="+encodeURIComponent(String(z[w]))),a.push(D)}}return this.i=a.join("&")};function ji(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function ZA(a,d){d&&!a.j&&(or(a),a.i=null,a.g.forEach(function(f,w){var D=w.toLowerCase();w!=D&&(Mg(this,w),jg(this,D,f))},a)),a.j=d}function eS(a,d){const f=new eo;if(l.Image){const w=new Image;w.onload=I(ar,f,"TestLoadImage: loaded",!0,d,w),w.onerror=I(ar,f,"TestLoadImage: error",!1,d,w),w.onabort=I(ar,f,"TestLoadImage: abort",!1,d,w),w.ontimeout=I(ar,f,"TestLoadImage: timeout",!1,d,w),l.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else d(!1)}function tS(a,d){const f=new eo,w=new AbortController,D=setTimeout(()=>{w.abort(),ar(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:w.signal}).then(L=>{clearTimeout(D),L.ok?ar(f,"TestPingServer: ok",!0,d):ar(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),ar(f,"TestPingServer: error",!1,d)})}function ar(a,d,f,w,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),w(f)}catch{}}function nS(){this.g=new jA}function rS(a,d,f){const w=f||"";try{Ng(a,function(D,L){let z=D;c(D)&&(z=sd(D)),d.push(w+L+"="+encodeURIComponent(z))})}catch(D){throw d.push(w+"type="+encodeURIComponent("_badmap")),D}}function so(a){this.l=a.Ub||null,this.j=a.eb||!1}A(so,od),so.prototype.g=function(){return new ol(this.l,this.j)},so.prototype.i=function(a){return function(){return a}}({});function ol(a,d){it.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ol,it),t=ol.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,ao(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ao(this)),this.g&&(this.readyState=3,ao(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?oo(this):ao(this),this.readyState==3&&Fg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,oo(this))},t.Qa=function(a){this.g&&(this.response=a,oo(this))},t.ga=function(){this.g&&oo(this)};function oo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ao(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function ao(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ol.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ug(a){let d="";return j(a,function(f,w){d+=w,d+=":",d+=f,d+=`\r
`}),d}function gd(a,d,f){e:{for(w in f){var w=!1;break e}w=!0}w||(f=Ug(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ve(a,d,f))}function Re(a){it.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Re,it);var iS=/^https?$/i,sS=["POST","PUT"];t=Re.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ud.g(),this.v=this.o?mg(this.o):mg(ud),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(L){Bg(this,L);return}if(a=f||"",f=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var D in w)f.set(D,w[D]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const L of w.keys())f.set(L,w.get(L));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(sS,d,void 0))||w||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of f)this.g.setRequestHeader(L,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wg(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Bg(this,L)}};function Bg(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,zg(a),al(a)}function zg(a){a.A||(a.A=!0,gt(a,"complete"),gt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,gt(this,"complete"),gt(this,"abort"),al(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),al(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$g(this):this.bb())},t.bb=function(){$g(this)};function $g(a){if(a.h&&typeof o<"u"&&(!a.v[1]||On(a)!=4||a.Z()!=2)){if(a.u&&On(a)==4)dg(a.Ea,0,a);else if(gt(a,"readystatechange"),On(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var w;if(w=z===0){var D=String(a.D).match(Dg)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),w=!iS.test(D?D.toLowerCase():"")}f=w}if(f)gt(a,"complete"),gt(a,"success");else{a.m=6;try{var L=2<On(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",zg(a)}}finally{al(a)}}}}function al(a,d){if(a.g){Wg(a);const f=a.g,w=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||gt(a,"ready");try{f.onreadystatechange=w}catch{}}}function Wg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function On(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),VA(d)}};function Hg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function oS(a){const d={};a=(a.g&&2<=On(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(g(a[w]))continue;var f=R(a[w]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=d[D]||[];d[D]=L,L.push(f)}S(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function lo(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Gg(a){this.Aa=0,this.i=[],this.j=new eo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=lo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=lo("baseRetryDelayMs",5e3,a),this.cb=lo("retryDelaySeedMs",1e4,a),this.Wa=lo("forwardChannelMaxRetries",2,a),this.wa=lo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Cg(a&&a.concurrentRequestLimit),this.Da=new nS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Gg.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,w){yt(0),this.W=a,this.H=d||{},f&&w!==void 0&&(this.H.OSID=f,this.H.OAID=w),this.F=this.X,this.I=ty(this,null,this.W),ul(this)};function yd(a){if(qg(a),a.G==3){var d=a.U++,f=Dn(a.I);if(ve(f,"SID",a.K),ve(f,"RID",d),ve(f,"TYPE","terminate"),uo(a,f),d=new sr(a,a.j,d),d.L=2,d.v=sl(Dn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=ny(d.j,null),d.g.ea(d.v)),d.F=Date.now(),nl(d)}ey(a)}function ll(a){a.g&&(_d(a),a.g.cancel(),a.g=null)}function qg(a){ll(a),a.u&&(l.clearTimeout(a.u),a.u=null),cl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ul(a){if(!kg(a.h)&&!a.s){a.s=!0;var d=a.Ga;Z||X(),B||(Z(),B=!0),q.add(d,a),a.B=0}}function aS(a,d){return Pg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Zs(m(a.Ga,a,d),Zg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new sr(this,this.j,a);let L=this.o;if(this.S&&(L?(L=v(L),k(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var w=this.i[f];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Qg(this,D,d),f=Dn(this.I),ve(f,"RID",a),ve(f,"CVER",22),this.D&&ve(f,"X-HTTP-Session-Id",this.D),uo(this,f),L&&(this.O?d="headers="+encodeURIComponent(String(Ug(L)))+"&"+d:this.m&&gd(f,this.m,L)),md(this.h,D),this.Ua&&ve(f,"TYPE","init"),this.P?(ve(f,"$req",d),ve(f,"SID","null"),D.T=!0,dd(D,f,null)):dd(D,f,d),this.G=2}}else this.G==3&&(a?Kg(this,a):this.i.length==0||kg(this.h)||Kg(this))};function Kg(a,d){var f;d?f=d.l:f=a.U++;const w=Dn(a.I);ve(w,"SID",a.K),ve(w,"RID",f),ve(w,"AID",a.T),uo(a,w),a.m&&a.o&&gd(w,a.m,a.o),f=new sr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Qg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),md(a.h,f),dd(f,w,d)}function uo(a,d){a.H&&j(a.H,function(f,w){ve(d,w,f)}),a.l&&Ng({},function(f,w){ve(d,w,f)})}function Qg(a,d,f){f=Math.min(a.i.length,f);var w=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let L=-1;for(;;){const z=["count="+f];L==-1?0<f?(L=D[0].g,z.push("ofs="+L)):L=0:z.push("ofs="+L);let me=!0;for(let Ke=0;Ke<f;Ke++){let ce=D[Ke].g;const st=D[Ke].map;if(ce-=L,0>ce)L=Math.max(0,D[Ke].g-100),me=!1;else try{rS(st,z,"req"+ce+"_")}catch{w&&w(st)}}if(me){w=z.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,w}function Yg(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Z||X(),B||(Z(),B=!0),q.add(d,a),a.v=0}}function vd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Zs(m(a.Fa,a),Zg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Xg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Zs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),ll(this),Xg(this))};function _d(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Xg(a){a.g=new sr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Dn(a.qa);ve(d,"RID","rpc"),ve(d,"SID",a.K),ve(d,"AID",a.T),ve(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&ve(d,"TO",a.ja),ve(d,"TYPE","xmlhttp"),uo(a,d),a.m&&a.o&&gd(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=sl(Dn(d)),f.m=null,f.P=!0,Ag(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ll(this),vd(this),yt(19))};function cl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Jg(a,d){var f=null;if(a.g==d){cl(a),_d(a),a.g=null;var w=2}else if(pd(a.h,d))f=d.D,Rg(a.h,d),w=1;else return;if(a.G!=0){if(d.o)if(w==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var D=a.B;w=Za(),gt(w,new Eg(w,f)),ul(a)}else Yg(a);else if(D=d.s,D==3||D==0&&0<d.X||!(w==1&&aS(a,d)||w==2&&vd(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),D){case 1:ei(a,5);break;case 4:ei(a,10);break;case 3:ei(a,6);break;default:ei(a,2)}}}function Zg(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function ei(a,d){if(a.j.info("Error code "+d),d==2){var f=m(a.fb,a),w=a.Xa;const D=!w;w=new Zr(w||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||rl(w,"https"),sl(w),D?eS(w.toString(),f):tS(w.toString(),f)}else yt(2);a.G=0,a.l&&a.l.sa(d),ey(a),qg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function ey(a){if(a.G=0,a.ka=[],a.l){const d=bg(a.h);(d.length!=0||a.i.length!=0)&&(C(a.ka,d),C(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function ty(a,d,f){var w=f instanceof Zr?Dn(f):new Zr(f);if(w.g!="")d&&(w.g=d+"."+w.g),il(w,w.s);else{var D=l.location;w=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var L=new Zr(null);w&&rl(L,w),d&&(L.g=d),D&&il(L,D),f&&(L.l=f),w=L}return f=a.D,d=a.ya,f&&d&&ve(w,f,d),ve(w,"VER",a.la),uo(a,w),w}function ny(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Re(new so({eb:f})):new Re(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ry(){}t=ry.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function dl(){}dl.prototype.g=function(a,d){return new Rt(a,d)};function Rt(a,d){it.call(this),this.g=new Gg(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!g(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!g(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Fi(this)}A(Rt,it),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){yd(this.g)},Rt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=sd(a),a=f);d.i.push(new WA(d.Ya++,a)),d.G==3&&ul(d)},Rt.prototype.N=function(){this.g.l=null,delete this.j,yd(this.g),delete this.g,Rt.aa.N.call(this)};function iy(a){ad.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}A(iy,ad);function sy(){ld.call(this),this.status=1}A(sy,ld);function Fi(a){this.g=a}A(Fi,ry),Fi.prototype.ua=function(){gt(this.g,"a")},Fi.prototype.ta=function(a){gt(this.g,new iy(a))},Fi.prototype.sa=function(a){gt(this.g,new sy)},Fi.prototype.ra=function(){gt(this.g,"b")},dl.prototype.createWebChannel=dl.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,pw=function(){return new dl},fw=function(){return Za()},hw=Xr,mf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},el.NO_ERROR=0,el.TIMEOUT=8,el.HTTP_ERROR=6,Xl=el,wg.COMPLETE="complete",dw=wg,gg.EventType=Xs,Xs.OPEN="a",Xs.CLOSE="b",Xs.ERROR="c",Xs.MESSAGE="d",it.prototype.listen=it.prototype.K,Co=gg,cw=so,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,uw=Re}).apply(typeof Rl<"u"?Rl:typeof self<"u"?self:typeof window<"u"?window:{});const Ov="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new em("@firebase/firestore");function _o(){return Ii.logLevel}function H(t,...e){if(Ii.logLevel<=oe.DEBUG){const n=e.map(rm);Ii.debug(`Firestore (${zs}): ${t}`,...n)}}function Yn(t,...e){if(Ii.logLevel<=oe.ERROR){const n=e.map(rm);Ii.error(`Firestore (${zs}): ${t}`,...n)}}function Ss(t,...e){if(Ii.logLevel<=oe.WARN){const n=e.map(rm);Ii.warn(`Firestore (${zs}): ${t}`,...n)}}function rm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+t;throw Yn(e),new Error(e)}function ge(t,e){t||J()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class cP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dP{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Wn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new mw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new ct(e)}}class hP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new hP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new pP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new $e(0,0))}static max(){return new ee(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ga.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ga?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends ga{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const yP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends ga{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return yP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ee.fromString(e))}static fromName(e){return new K(Ee.fromString(e).popFirst(5))}static empty(){return new K(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ee(e.slice()))}}function vP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new Fr(i,K.empty(),e)}function _P(t){return new Fr(t.readTime,t.key,-1)}class Fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Fr(ee.min(),K.empty(),-1)}static max(){return new Fr(ee.max(),K.empty(),-1)}}function EP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==wP)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++l,l===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function IP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ma(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}im.oe=-1;function Ac(t){return t==null}function Fu(t){return t===0&&1/t==-1/0}function AP(t){return typeof t=="number"&&Number.isInteger(t)&&!Fu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bl(this.root,e,this.comparator,!1)}getReverseIterator(){return new bl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bl(this.root,e,this.comparator,!0)}}class bl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mv(this.data.getIterator())}getIteratorFrom(e){return new Mv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Mv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new Ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vw("Invalid base64 string: "+s):s}}(e);return new nt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const SP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(t){if(ge(!!t),typeof t=="string"){let e=0;const n=SP.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ai(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function om(t){const e=t.mapValue.fields.__previous_value__;return sm(e)?om(e):e}function ya(t){const e=Ur(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class va{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new va("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof va&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Si(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sm(t)?4:CP(t)?9007199254740991:10:J()}function Cn(t,e){if(t===e)return!0;const n=Si(t);if(n!==Si(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ya(t).isEqual(ya(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ur(i.timestampValue),l=Ur(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ai(i.bytesValue).isEqual(Ai(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=je(i.doubleValue),l=je(s.doubleValue);return o===l?Fu(o)===Fu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xs(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Lv(o)!==Lv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Cn(o[u],l[u])))return!1;return!0}(t,e);default:return J()}}function _a(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Cs(t,e){if(t===e)return 0;const n=Si(t),r=Si(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=je(s.integerValue||s.doubleValue),u=je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Vv(t.timestampValue,e.timestampValue);case 4:return Vv(ya(t),ya(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ai(s),u=Ai(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=he(l[c],u[c]);if(h!==0)return h}return he(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(je(s.latitude),je(o.latitude));return l!==0?l:he(je(s.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const h=Cs(l[c],u[c]);if(h)return h}return he(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Nl.mapValue&&o===Nl.mapValue)return 0;if(s===Nl.mapValue)return 1;if(o===Nl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const m=he(u[p],h[p]);if(m!==0)return m;const I=Cs(l[u[p]],c[h[p]]);if(I!==0)return I}return he(u.length,h.length)}(t.mapValue,e.mapValue);default:throw J()}}function Vv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Ur(t),r=Ur(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function ks(t){return gf(t)}function gf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ai(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=gf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${gf(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function jv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yf(t){return!!t&&"integerValue"in t}function am(t){return!!t&&"arrayValue"in t}function Fv(t){return!!t&&"nullValue"in t}function Uv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jl(t){return!!t&&"mapValue"in t}function zo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function CP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Jl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zo(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=zo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Jl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Jl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new St(zo(this.value))}}function _w(t){const e=[];return Di(t.fields,(n,r)=>{const i=new Xe([n]);if(Jl(r)){const s=_w(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ht(e,0,ee.min(),ee.min(),ee.min(),St.empty(),0)}static newFoundDocument(e,n,r,i){return new ht(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new ht(e,2,n,ee.min(),ee.min(),St.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,ee.min(),ee.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this.position=e,this.inclusive=n}}function Bv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Cs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function zv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n="asc"){this.field=e,this.dir=n}}function kP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{}class Ue extends Ew{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RP(e,n,r):n==="array-contains"?new DP(e,r):n==="in"?new OP(e,r):n==="not-in"?new LP(e,r):n==="array-contains-any"?new MP(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bP(e,r):new NP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Cs(n,this.value)):n!==null&&Si(this.value)===Si(n)&&this.matchesComparison(Cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends Ew{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return ww(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ww(t){return t.op==="and"}function Tw(t){return PP(t)&&ww(t)}function PP(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function vf(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+ks(t.value);if(Tw(t))return t.filters.map(e=>vf(e)).join(",");{const e=t.filters.map(n=>vf(n)).join(",");return`${t.op}(${e})`}}function Iw(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&Cn(r.value,i.value)}(t,e):t instanceof hn?function(r,i){return i instanceof hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Iw(o,i.filters[l]),!0):!1}(t,e):void J()}function Aw(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${ks(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(Aw).join(" ,")+"}"}(t):"Filter"}class RP extends Ue{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class bP extends Ue{constructor(e,n){super(e,"in",n),this.keys=Sw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class NP extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=Sw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class DP extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return am(n)&&_a(n.arrayValue,this.value)}}class OP extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_a(this.value.arrayValue,n)}}class LP extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(_a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_a(this.value.arrayValue,n)}}class MP extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!am(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_a(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function $v(t,e=null,n=[],r=[],i=null,s=null,o=null){return new VP(t,e,n,r,i,s,o)}function lm(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ks(r)).join(",")),e.ue=n}return e.ue}function um(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Iw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zv(t.startAt,e.startAt)&&zv(t.endAt,e.endAt)}function _f(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jP(t,e,n,r,i,s,o,l){return new Va(t,e,n,r,i,s,o,l)}function cm(t){return new Va(t)}function Wv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xw(t){return t.collectionGroup!==null}function $o(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Bu(s,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new Bu(Xe.keyField(),r))}return e.ce}function In(t){const e=te(t);return e.le||(e.le=FP(e,$o(t))),e.le}function FP(t,e){if(t.limitType==="F")return $v(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Bu(i.field,s)});const n=t.endAt?new Uu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Uu(t.startAt.position,t.startAt.inclusive):null;return $v(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ef(t,e){const n=t.filters.concat([e]);return new Va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wf(t,e,n){return new Va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sc(t,e){return um(In(t),In(e))&&t.limitType===e.limitType}function Cw(t){return`${lm(In(t))}|lt:${t.limitType}`}function zi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Aw(i)).join(", ")}]`),Ac(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ks(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ks(i)).join(",")),`Target(${r})`}(In(t))}; limitType=${t.limitType})`}function xc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of $o(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Bv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,$o(r),i)||r.endAt&&!function(o,l,u){const c=Bv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,$o(r),i))}(t,e)}function UP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kw(t){return(e,n)=>{let r=!1;for(const i of $o(t)){const s=BP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function BP(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Cs(u,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return yw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=new Pe(K.comparator);function Xn(){return zP}const Pw=new Pe(K.comparator);function ko(...t){let e=Pw;for(const n of t)e=e.insert(n.key,n);return e}function Rw(t){let e=Pw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function li(){return Wo()}function bw(){return Wo()}function Wo(){return new $s(t=>t.toString(),(t,e)=>t.isEqual(e))}const $P=new Pe(K.comparator),WP=new Ze(K.comparator);function se(...t){let e=WP;for(const n of t)e=e.add(n);return e}const HP=new Ze(he);function GP(){return HP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fu(e)?"-0":e}}function Dw(t){return{integerValue:""+t}}function qP(t,e){return AP(e)?Dw(e):Nw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this._=void 0}}function KP(t,e,n){return t instanceof zu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sm(s)&&(s=om(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ea?Lw(t,e):t instanceof wa?Mw(t,e):function(i,s){const o=Ow(i,s),l=Hv(o)+Hv(i.Pe);return yf(o)&&yf(i.Pe)?Dw(l):Nw(i.serializer,l)}(t,e)}function QP(t,e,n){return t instanceof Ea?Lw(t,e):t instanceof wa?Mw(t,e):n}function Ow(t,e){return t instanceof $u?function(r){return yf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class zu extends Cc{}class Ea extends Cc{constructor(e){super(),this.elements=e}}function Lw(t,e){const n=Vw(e);for(const r of t.elements)n.some(i=>Cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class wa extends Cc{constructor(e){super(),this.elements=e}}function Mw(t,e){let n=Vw(e);for(const r of t.elements)n=n.filter(i=>!Cn(i,r));return{arrayValue:{values:n}}}class $u extends Cc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Hv(t){return je(t.integerValue||t.doubleValue)}function Vw(t){return am(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function YP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ea&&i instanceof Ea||r instanceof wa&&i instanceof wa?xs(r.elements,i.elements,Cn):r instanceof $u&&i instanceof $u?Cn(r.Pe,i.Pe):r instanceof zu&&i instanceof zu}(t.transform,e.transform)}class XP{constructor(e,n){this.version=e,this.transformResults=n}}class Qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class kc{}function jw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dm(t.key,Qt.none()):new ja(t.key,t.data,Qt.none());{const n=t.data,r=St.empty();let i=new Ze(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qr(t.key,r,new Dt(i.toArray()),Qt.none())}}function JP(t,e,n){t instanceof ja?function(i,s,o){const l=i.value.clone(),u=qv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Qr?function(i,s,o){if(!Zl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=qv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Fw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ho(t,e,n,r){return t instanceof ja?function(s,o,l,u){if(!Zl(s.precondition,o))return l;const c=s.value.clone(),h=Kv(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qr?function(s,o,l,u){if(!Zl(s.precondition,o))return l;const c=Kv(s.fieldTransforms,u,o),h=o.data;return h.setAll(Fw(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Zl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ZP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Ow(r.transform,i||null);s!=null&&(n===null&&(n=St.empty()),n.set(r.field,s))}return n||null}function Gv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xs(r,i,(s,o)=>YP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ja extends kc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qr extends kc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Fw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qv(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,QP(o,l,n[i]))}return r}function Kv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KP(s,o,e))}return r}class dm extends kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eR extends kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&JP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ho(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ho(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=jw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,(n,r)=>Gv(n,r))&&xs(this.baseMutations,e.baseMutations,(n,r)=>Gv(n,r))}}class hm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length);let i=function(){return $P}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new hm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,le;function iR(t){switch(t){default:return J();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Uw(t){if(t===void 0)return Yn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ve.OK:return V.OK;case Ve.CANCELLED:return V.CANCELLED;case Ve.UNKNOWN:return V.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return V.INTERNAL;case Ve.UNAVAILABLE:return V.UNAVAILABLE;case Ve.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ve.NOT_FOUND:return V.NOT_FOUND;case Ve.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ve.ABORTED:return V.ABORTED;case Ve.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ve.DATA_LOSS:return V.DATA_LOSS;default:return J()}}(le=Ve||(Ve={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=new hi([4294967295,4294967295],0);function Qv(t){const e=sR().encode(t),n=new lw;return n.update(e),new Uint8Array(n.digest())}function Yv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new hi([n,r],0),new hi([i,s],0)]}class fm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Po(`Invalid padding: ${n}`);if(r<0)throw new Po(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Po(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Po(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=hi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(hi.fromNumber(r)));return i.compare(oR)===1&&(i=new hi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Qv(e),[r,i]=Yv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new fm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Qv(e),[r,i]=Yv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pc(ee.min(),i,new Pe(he),Xn(),se())}}class Fa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fa(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Bw{constructor(e,n){this.targetId=e,this.me=n}}class zw{constructor(e,n,r=nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xv{constructor(){this.fe=0,this.ge=Zv(),this.pe=nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new Fa(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Zv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class aR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Xn(),this.qe=Jv(),this.Qe=new Pe(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(_f(s))if(r===0){const o=new K(s.path);this.Ue(n,o,ht.newNoDocument(o,ee.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ai(r).toUint8Array()}catch(u){if(u instanceof vw)return Ss("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new fm(o,i,s)}catch(u){return Ss(u instanceof Po?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&_f(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ht.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=se();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Pc(e,n,this.Qe,this.ke,r);return this.ke=Xn(),this.qe=Jv(),this.Qe=new Pe(he),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Xv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Xv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Jv(){return new Pe(K.comparator)}function Zv(){return new Pe(K.comparator)}const lR={asc:"ASCENDING",desc:"DESCENDING"},uR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cR={and:"AND",or:"OR"};class dR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tf(t,e){return t.useProto3Json||Ac(e)?e:{value:e}}function Wu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $w(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hR(t,e){return Wu(t,e.toTimestamp())}function An(t){return ge(!!t),ee.fromTimestamp(function(n){const r=Ur(n);return new $e(r.seconds,r.nanos)}(t))}function pm(t,e){return If(t,e).canonicalString()}function If(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ww(t){const e=Ee.fromString(t);return ge(Qw(e)),e}function Af(t,e){return pm(t.databaseId,e.path)}function Zd(t,e){const n=Ww(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Gw(n))}function Hw(t,e){return pm(t.databaseId,e)}function fR(t){const e=Ww(t);return e.length===4?Ee.emptyPath():Gw(e)}function Sf(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gw(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function e0(t,e,n){return{name:Af(t,e),fields:n.value.mapValue.fields}}function pR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ge(h===void 0||typeof h=="string"),nt.fromBase64String(h||"")):(ge(h===void 0||h instanceof Buffer||h instanceof Uint8Array),nt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const h=c.code===void 0?V.UNKNOWN:Uw(c.code);return new W(h,c.message||"")}(o);n=new zw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Zd(t,r.document.name),s=An(r.document.updateTime),o=r.document.createTime?An(r.document.createTime):ee.min(),l=new St({mapValue:{fields:r.document.fields}}),u=ht.newFoundDocument(i,s,o,l),c=r.targetIds||[],h=r.removedTargetIds||[];n=new eu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Zd(t,r.document),s=r.readTime?An(r.readTime):ee.min(),o=ht.newNoDocument(i,s),l=r.removedTargetIds||[];n=new eu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Zd(t,r.document),s=r.removedTargetIds||[];n=new eu([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new rR(i,s),l=r.targetId;n=new Bw(l,o)}}return n}function mR(t,e){let n;if(e instanceof ja)n={update:e0(t,e.key,e.value)};else if(e instanceof dm)n={delete:Af(t,e.key)};else if(e instanceof Qr)n={update:e0(t,e.key,e.data),updateMask:AR(e.fieldMask)};else{if(!(e instanceof eR))return J();n={verify:Af(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof zu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ea)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof wa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof $u)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:hR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function gR(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?An(i.updateTime):An(s);return o.isEqual(ee.min())&&(o=An(s)),new XP(o,i.transformResults||[])}(n,e))):[]}function yR(t,e){return{documents:[Hw(t,e.path)]}}function vR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Hw(t,i);const s=function(c){if(c.length!==0)return Kw(hn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:$i(m.field),direction:wR(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Tf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function _R(t){let e=fR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(p){const m=qw(p);return m instanceof hn&&Tw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(A){return new Bu(Wi(A.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Ac(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,I=p.values||[];return new Uu(I,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,I=p.values||[];return new Uu(I,m)}(n.endAt)),jP(e,i,o,s,l,"F",u,c)}function ER(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wi(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Wi(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Wi(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wi(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Wi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>qw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function wR(t){return lR[t]}function TR(t){return uR[t]}function IR(t){return cR[t]}function $i(t){return{fieldPath:t.canonicalString()}}function Wi(t){return Xe.fromServerFormat(t.fieldPath)}function Kw(t){return t instanceof Ue?function(n){if(n.op==="=="){if(Uv(n.value))return{unaryFilter:{field:$i(n.field),op:"IS_NAN"}};if(Fv(n.value))return{unaryFilter:{field:$i(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Uv(n.value))return{unaryFilter:{field:$i(n.field),op:"IS_NOT_NAN"}};if(Fv(n.value))return{unaryFilter:{field:$i(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$i(n.field),op:TR(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(i=>Kw(i));return r.length===1?r[0]:{compositeFilter:{op:IR(n.op),filters:r}}}(t):J()}function AR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=nt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.ct=e}}function xR(t){const e=_R({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.an=new kR}addToCollectionParentIndex(e,n){return this.an.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Fr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Fr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class kR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new Ps(0)}static Bn(){return new Ps(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.changes=new $s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ho(r.mutation,i,Dt.empty(),$e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=li();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ko();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=li();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Xn();const o=Wo(),l=function(){return Wo()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Qr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ho(h.mutation,c,h.mutation.getFieldMask(),$e.now())):o.set(c.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return l.set(c,new RR(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Wo();let i=new Pe((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Dt.empty();h=l.applyToLocalView(c,h),r.set(u,h);const p=(i.get(l.batchId)||se()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,p=bw();h.forEach(m=>{if(!s.has(m)){const I=jw(n.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(li());let l=-1,u=s;return o.next(c=>F.forEach(c,(h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(h=>({batchId:l,changes:Rw(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=ko();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ko();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const c=function(p,m){return new Va(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,ht.newInvalidDocument(h)))});let l=ko();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Ho(h.mutation,c,Dt.empty(),$e.now()),xc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return F.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:An(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:xR(i.bundledQuery),readTime:An(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.overlays=new Pe(K.comparator),this.Pr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=li();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=li(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=li(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=li(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nR(n,r));let s=this.Pr.get(n);s===void 0&&(s=se(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(){this.Ir=new Ze(We.Tr),this.Er=new Ze(We.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new We(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new We(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new K(new Ee([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.Er.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new K(new Ee([])),r=new We(n,e),i=new We(n,e+1);let s=se();return this.Er.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return K.comparator(e.key,n.key)||he(e.yr,n.yr)}static dr(e,n){return he(e.yr,n.yr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new Ze(We.Tr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Sr=this.Sr.add(new We(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const l=this.br(o.yr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(he);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],l=>{r=r.add(l.yr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new We(new K(s),0);let l=new Ze(he);return this.Sr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.yr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return F.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new We(n,0),i=this.Sr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.Fr=e,this.docs=function(){return new Pe(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||EP(_P(h),r)<=0||(i.has(h.key)||xc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Mr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VR(this)}getSize(e){return F.resolve(this.size)}}class VR extends PR{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.persistence=e,this.Or=new $s(n=>lm(n),um),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new mm,this.targetCount=0,this.Br=Ps.Ln()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),F.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Qn(n),F.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Lr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.kr={},this.overlays={},this.qr=new im(0),this.Qr=!1,this.Qr=!0,this.Kr=new OR,this.referenceDelegate=e(this),this.$r=new jR(this),this.indexManager=new CR,this.remoteDocumentCache=function(i){return new MR(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new SR(n),this.Wr=new NR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new LR(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new UR(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,n){return F.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class UR extends TP{constructor(e){super(),this.currentSequenceNumber=e}}class gm{constructor(e){this.persistence=e,this.Hr=new mm,this.Jr=null}static Yr(e){return new gm(e)}get Zr(){if(this.Jr)return this.Jr;throw J()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Zr,r=>{const i=K.fromPath(r);return this.Xr(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return F.or([()=>F.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=i}static Ui(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ym(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return q2()?8:IP(tt())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new BR;return this.Zi(e,n,o).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,n,o,l.size)})}).next(()=>s.result)}Xi(e,n,r,i){return r.documentReadCount<this.zi?(_o()<=oe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",zi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),F.resolve()):(_o()<=oe.DEBUG&&H("QueryEngine","Query:",zi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(_o()<=oe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",zi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):F.resolve())}Ji(e,n){if(Wv(n))return F.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wf(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Hi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.es(n,l);return this.ts(n,c,o,u.readTime)?this.Ji(e,wf(n,null,"F")):this.ns(e,c,n,u)}))})))}Yi(e,n,r,i){return Wv(n)||i.isEqual(ee.min())?F.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const o=this.es(n,s);return this.ts(n,o,r,i)?F.resolve(null):(_o()<=oe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zi(n)),this.ns(e,o,n,vP(i,-1)).next(l=>l))})}es(e,n){let r=new Ze(kw(e));return n.forEach((i,s)=>{xc(e,s)&&(r=r.add(s))}),r}ts(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,n,r){return _o()<=oe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",zi(n)),this.Hi.getDocumentsMatchingQuery(e,n,Fr.min(),r)}ns(e,n,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n,r,i){this.persistence=e,this.rs=n,this.serializer=i,this.ss=new Pe(he),this.os=new $s(s=>lm(s),um),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bR(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function WR(t,e,n,r){return new $R(t,e,n,r)}async function Yw(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=se();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function HR(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.us.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const p=c.batch,m=p.keys();let I=F.resolve();return m.forEach(A=>{I=I.next(()=>h.getEntry(u,A)).next(x=>{const C=c.docVersions.get(A);ge(C!==null),x.version.compareTo(C)<0&&(p.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),h.addEntry(x)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Xw(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function GR(t,e){const n=te(t),r=e.snapshotVersion;let i=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.us.newChangeBuffer({trackRemovals:!0});i=n.ss;const l=[];e.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;l.push(n.$r.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.$r.addMatchingKeys(s,h.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(nt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(h.resumeToken,r)),i=i.insert(p,I),function(x,C,_){return x.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(m,I,h)&&l.push(n.$r.updateTargetData(s,I))});let u=Xn(),c=se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(qR(s,o,e.documentUpdates).next(h=>{u=h.hs,c=h.Ps})),!r.isEqual(ee.min())){const h=n.$r.getLastRemoteSnapshotVersion(s).next(p=>n.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(h)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ss=i,s))}function qR(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{hs:o,Ps:i}})}function KR(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QR(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.$r.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.$r.allocateTargetId(r).next(o=>(i=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function xf(t,e,n){const r=te(t),i=r.ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ma(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function t0(t,e,n){const r=te(t);let i=ee.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const p=te(u),m=p.os.get(h);return m!==void 0?F.resolve(p.ss.get(m)):p.$r.getTargetData(c,h)}(r,o,In(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:se())).next(l=>(YR(r,UP(e),l),{documents:l,Is:s})))}function YR(t,e,n){let r=t._s.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t._s.set(e,r)}class n0{constructor(){this.activeTargetIds=GP()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XR{constructor(){this.io=new n0,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new n0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl=null;function eh(){return Dl===null?Dl=function(){return 268435456+Math.round(2147483648*Math.random())}():Dl++,"0x"+Dl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class tb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(n,r,i,s,o){const l=eh(),u=this.Mo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(c,s,o),this.Oo(n,u,c,i).then(h=>(H("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw Ss("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}No(n,r,i,s,o,l){return this.Fo(n,r,i,s,o)}xo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Mo(n,r){const i=ZR[n];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,i){const s=eh();return new Promise((o,l)=>{const u=new uw;u.setWithCredentials(!0),u.listenOnce(dw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Xl.NO_ERROR:const h=u.getResponseJson();H(ut,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Xl.TIMEOUT:H(ut,`RPC '${e}' ${s} timed out`),l(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Xl.HTTP_ERROR:const p=u.getStatus();if(H(ut,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const A=function(C){const _=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(_)>=0?_:V.UNKNOWN}(I.status);l(new W(A,I.message))}else l(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(V.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{H(ut,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(ut,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Lo(e,n,r){const i=eh(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pw(),l=fw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new cw({})),this.xo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");H(ut,`Creating RPC '${e}' stream ${i}: ${h}`,u);const p=o.createWebChannel(h,u);let m=!1,I=!1;const A=new eb({Po:C=>{I?H(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(H(ut,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(ut,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},Io:()=>p.close()}),x=(C,_,g)=>{C.listen(_,y=>{try{g(y)}catch(b){setTimeout(()=>{throw b},0)}})};return x(p,Co.EventType.OPEN,()=>{I||(H(ut,`RPC '${e}' stream ${i} transport opened.`),A.po())}),x(p,Co.EventType.CLOSE,()=>{I||(I=!0,H(ut,`RPC '${e}' stream ${i} transport closed`),A.wo())}),x(p,Co.EventType.ERROR,C=>{I||(I=!0,Ss(ut,`RPC '${e}' stream ${i} transport errored:`,C),A.wo(new W(V.UNAVAILABLE,"The operation could not be completed")))}),x(p,Co.EventType.MESSAGE,C=>{var _;if(!I){const g=C.data[0];ge(!!g);const y=g,b=y.error||((_=y[0])===null||_===void 0?void 0:_.error);if(b){H(ut,`RPC '${e}' stream ${i} received error:`,b);const M=b.status;let j=function(T){const k=Ve[T];if(k!==void 0)return Uw(k)}(M),S=b.message;j===void 0&&(j=V.INTERNAL,S="Unknown error status: "+M+" with message "+b.message),I=!0,A.wo(new W(j,S)),p.close()}else H(ut,`RPC '${e}' stream ${i} received:`,g),A.So(g)}}),x(l,hw.STAT_EVENT,C=>{C.stat===mf.PROXY?H(ut,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===mf.NOPROXY&&H(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.yo()},0),A}}function th(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t){return new dR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n,r,i,s,o,l,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new Jw(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===n&&this.h_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nb extends Zw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=pR(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?An(o.readTime):ee.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=Sf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=_f(u)?{documents:yR(s,u)}:{query:vR(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=$w(s,o.resumeToken);const c=Tf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=Wu(s,o.snapshotVersion.toTimestamp());const c=Tf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=ER(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=Sf(this.serializer),n.removeTarget=e,this.__(n)}}class rb extends Zw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=gR(e.writeResults,e.commitTime),r=An(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=Sf(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mR(this.serializer,r))};this.__(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,If(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}No(e,n,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.No(e,If(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class sb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(Yn(n),this.b_=!1):H("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{r.enqueueAndForget(async()=>{Oi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=te(u);c.N_.add(4),await Ua(c),c.k_.set("Unknown"),c.N_.delete(4),await bc(c)}(this))})}),this.k_=new sb(r,i)}}async function bc(t){if(Oi(t))for(const e of t.L_)await e(!0)}async function Ua(t){for(const e of t.L_)await e(!1)}function eT(t,e){const n=te(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),wm(n)?Em(n):Ws(n).n_()&&_m(n,e))}function vm(t,e){const n=te(t),r=Ws(n);n.O_.delete(e),r.n_()&&tT(n,e),n.O_.size===0&&(r.n_()?r.s_():Oi(n)&&n.k_.set("Unknown"))}function _m(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ws(t).d_(e)}function tT(t,e){t.q_.xe(e),Ws(t).A_(e)}function Em(t){t.q_=new aR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ws(t).start(),t.k_.D_()}function wm(t){return Oi(t)&&!Ws(t).t_()&&t.O_.size>0}function Oi(t){return te(t).N_.size===0}function nT(t){t.q_=void 0}async function ab(t){t.k_.set("Online")}async function lb(t){t.O_.forEach((e,n)=>{_m(t,e)})}async function ub(t,e){nT(t),wm(t)?(t.k_.F_(e),Em(t)):t.k_.set("Unknown")}async function cb(t,e,n){if(t.k_.set("Online"),e instanceof zw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.O_.delete(l),i.q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hu(t,r)}else if(e instanceof eu?t.q_.Ke(e):e instanceof Bw?t.q_.He(e):t.q_.We(e),!n.isEqual(ee.min()))try{const r=await Xw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.O_.get(c);h&&s.O_.set(c,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const h=s.O_.get(u);if(!h)return;s.O_.set(u,h.withResumeToken(nt.EMPTY_BYTE_STRING,h.snapshotVersion)),tT(s,u);const p=new wr(h.target,u,c,h.sequenceNumber);_m(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Hu(t,r)}}async function Hu(t,e,n){if(!Ma(e))throw e;t.N_.add(1),await Ua(t),t.k_.set("Offline"),n||(n=()=>Xw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await bc(t)})}function rT(t,e){return e().catch(n=>Hu(t,n,e))}async function Nc(t){const e=te(t),n=Br(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;db(e);)try{const i=await KR(e.localStore,r);if(i===null){e.x_.length===0&&n.s_();break}r=i.batchId,hb(e,i)}catch(i){await Hu(e,i)}iT(e)&&sT(e)}function db(t){return Oi(t)&&t.x_.length<10}function hb(t,e){t.x_.push(e);const n=Br(t);n.n_()&&n.R_&&n.V_(e.mutations)}function iT(t){return Oi(t)&&!Br(t).t_()&&t.x_.length>0}function sT(t){Br(t).start()}async function fb(t){Br(t).g_()}async function pb(t){const e=Br(t);for(const n of t.x_)e.V_(n.mutations)}async function mb(t,e,n){const r=t.x_.shift(),i=hm.from(r,e,n);await rT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nc(t)}async function gb(t,e){e&&Br(t).R_&&await async function(r,i){if(function(o){return iR(o)&&o!==V.ABORTED}(i.code)){const s=r.x_.shift();Br(r).i_(),await rT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Nc(r)}}(t,e),iT(t)&&sT(t)}async function i0(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Oi(n);n.N_.add(3),await Ua(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await bc(n)}async function yb(t,e){const n=te(t);e?(n.N_.delete(2),await bc(n)):e||(n.N_.add(2),await Ua(n),n.k_.set("Unknown"))}function Ws(t){return t.Q_||(t.Q_=function(n,r,i){const s=te(n);return s.y_(),new nb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:ab.bind(null,t),Ao:lb.bind(null,t),Vo:ub.bind(null,t),E_:cb.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),wm(t)?Em(t):t.k_.set("Unknown")):(await t.Q_.stop(),nT(t))})),t.Q_}function Br(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.y_(),new rb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:fb.bind(null,t),Vo:gb.bind(null,t),m_:pb.bind(null,t),f_:mb.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await Nc(t)):(await t.K_.stop(),t.x_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Tm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Im(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),Ma(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=ko(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.U_=new Pe(K.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):J():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Rs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Rs(e,n,ds.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class _b{constructor(){this.queries=o0(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=o0(),s.forEach((o,l)=>{for(const u of l.z_)u.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function o0(){return new $s(t=>Cw(t),Sc)}async function oT(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new vb,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await n.onListen(i,!0);break;case 1:s.G_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Im(o,`Initialization of query '${zi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.z_.push(e),e.Y_(n.onlineState),s.G_&&e.Z_(s.G_)&&Am(n)}async function aT(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Eb(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.z_)l.Z_(i)&&(r=!0);o.G_=i}}r&&Am(n)}function wb(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(n);r.queries.delete(e)}function Am(t){t.J_.forEach(e=>{e.next()})}var Cf,a0;(a0=Cf||(Cf={})).X_="default",a0.Cache="cache";class lT{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==Cf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.key=e}}class cT{constructor(e){this.key=e}}class Tb{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=se(),this.mutatedKeys=se(),this.da=kw(e),this.Aa=new ds(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new s0,i=n?n.Aa:this.Aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const m=i.get(h),I=xc(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),x=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let C=!1;m&&I?m.data.isEqual(I.data)?A!==x&&(r.track({type:3,doc:I}),C=!0):this.fa(m,I)||(r.track({type:2,doc:I}),C=!0,(u&&this.da(I,u)>0||c&&this.da(I,c)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),C=!0):m&&!I&&(r.track({type:1,doc:m}),C=!0,(u||c)&&(l=!0)),C&&(I?(o=o.add(I),s=x?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Aa:o,ma:r,ts:l,mutatedKeys:s}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((h,p)=>function(I,A){const x=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return x(I)-x(A)}(h.type,p.type)||this.da(h.doc,p.doc)),this.ga(r),i=i!=null&&i;const l=n&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,c=u!==this.Ta;return this.Ta=u,o.length!==0||c?{snapshot:new Rs(this.query,e.Aa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new s0,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=se(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new cT(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new uT(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=se();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return Rs.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class Ib{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ab{constructor(e){this.key=e,this.Da=!1}}class Sb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new $s(l=>Cw(l),Sc),this.Fa=new Map,this.Ma=new Set,this.xa=new Pe(K.comparator),this.Oa=new Map,this.Na=new mm,this.La={},this.Ba=new Map,this.ka=Ps.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function xb(t,e,n=!0){const r=gT(t);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await dT(r,e,n,!0),i}async function Cb(t,e){const n=gT(t);await dT(n,e,!0,!1)}async function dT(t,e,n,r){const i=await QR(t.localStore,In(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await kb(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&eT(t.remoteStore,i),l}async function kb(t,e,n,r,i){t.Qa=(p,m,I)=>async function(x,C,_,g){let y=C.view.Va(_);y.ts&&(y=await t0(x.localStore,C.query,!1).then(({documents:S})=>C.view.Va(S,y)));const b=g&&g.targetChanges.get(C.targetId),M=g&&g.targetMismatches.get(C.targetId)!=null,j=C.view.applyChanges(y,x.isPrimaryClient,b,M);return u0(x,C.targetId,j.ya),j.snapshot}(t,p,m,I);const s=await t0(t.localStore,e,!0),o=new Tb(e,s.Is),l=o.Va(s.documents),u=Fa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);u0(t,n,c.ya);const h=new Ib(e,n,o);return t.va.set(e,h),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),c.snapshot}async function Pb(t,e,n){const r=te(t),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(o=>!Sc(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&vm(r.remoteStore,i.targetId),kf(r,i.targetId)}).catch(La)):(kf(r,i.targetId),await xf(r.localStore,i.targetId,!0))}async function Rb(t,e){const n=te(t),r=n.va.get(e),i=n.Fa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vm(n.remoteStore,r.targetId))}async function bb(t,e,n){const r=jb(t);try{const i=await function(o,l){const u=te(o),c=$e.now(),h=l.reduce((I,A)=>I.add(A.key),se());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let A=Xn(),x=se();return u.us.getEntries(I,h).next(C=>{A=C,A.forEach((_,g)=>{g.isValidDocument()||(x=x.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,A)).next(C=>{p=C;const _=[];for(const g of l){const y=ZP(g,p.get(g.key).overlayedDocument);y!=null&&_.push(new Qr(g.key,y,_w(y.value.mapValue),Qt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,_,l)}).next(C=>{m=C;const _=C.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(I,C.batchId,_)})}).then(()=>({batchId:m.batchId,changes:Rw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.La[o.currentUser.toKey()];c||(c=new Pe(he)),c=c.insert(l,u),o.La[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ba(r,i.changes),await Nc(r.remoteStore)}catch(i){const s=Im(i,"Failed to persist write");n.reject(s)}}async function hT(t,e){const n=te(t);try{const r=await GR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oa.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?ge(o.Da):i.removedDocuments.size>0&&(ge(o.Da),o.Da=!1))}),await Ba(n,r,e)}catch(r){await La(r)}}function l0(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.va.forEach((s,o)=>{const l=o.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let c=!1;u.queries.forEach((h,p)=>{for(const m of p.z_)m.Y_(l)&&(c=!0)}),c&&Am(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Nb(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oa.get(e),s=i&&i.key;if(s){let o=new Pe(K.comparator);o=o.insert(s,ht.newNoDocument(s,ee.min()));const l=se().add(s),u=new Pc(ee.min(),new Map,new Pe(he),o,l);await hT(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),Sm(r)}else await xf(r.localStore,e,!1).then(()=>kf(r,e,n)).catch(La)}async function Db(t,e){const n=te(t),r=e.batch.batchId;try{const i=await HR(n.localStore,e);pT(n,r,null),fT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ba(n,i)}catch(i){await La(i)}}async function Ob(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ge(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);pT(r,e,n),fT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ba(r,i)}catch(i){await La(i)}}function fT(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function pT(t,e,n){const r=te(t);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function kf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||mT(t,r)})}function mT(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(vm(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),Sm(t))}function u0(t,e,n){for(const r of n)r instanceof uT?(t.Na.addReference(r.key,e),Lb(t,r)):r instanceof cT?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||mT(t,r.key)):J()}function Lb(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Ma.add(r),Sm(t))}function Sm(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new K(Ee.fromString(e)),r=t.ka.next();t.Oa.set(r,new Ab(n)),t.xa=t.xa.insert(n,r),eT(t.remoteStore,new wr(In(cm(n.path)),r,"TargetPurposeLimboResolution",im.oe))}}async function Ba(t,e,n){const r=te(t),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach((l,u)=>{o.push(r.Qa(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=ym.Ui(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.E_(i),await async function(u,c){const h=te(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,m=>F.forEach(m.Ki,I=>h.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>F.forEach(m.$i,I=>h.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!Ma(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const I=h.ss.get(m),A=I.snapshotVersion,x=I.withLastLimboFreeSnapshotVersion(A);h.ss=h.ss.insert(m,x)}}}(r.localStore,s))}async function Mb(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await Yw(n.localStore,e);n.currentUser=e,function(s,o){s.Ba.forEach(l=>{l.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),s.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ba(n,r.ls)}}function Vb(t,e){const n=te(t),r=n.Oa.get(e);if(r&&r.Da)return se().add(r.key);{let i=se();const s=n.Fa.get(e);if(!s)return i;for(const o of s){const l=n.va.get(o);i=i.unionWith(l.view.Ra)}return i}}function gT(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Nb.bind(null,e),e.Ca.E_=Eb.bind(null,e.eventManager),e.Ca.Ka=wb.bind(null,e.eventManager),e}function jb(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Db.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ob.bind(null,e),e}class c0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Rc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return WR(this.persistence,new zR,e.initialUser,this.serializer)}createPersistence(e){return new FR(gm.Yr,this.serializer)}createSharedClientState(e){return new XR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Fb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>l0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mb.bind(null,this.syncEngine),await yb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _b}()}createDatastore(e){const n=Rc(e.databaseInfo.databaseId),r=function(s){return new tb(s)}(e.databaseInfo);return function(s,o,l,u){return new ib(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new ob(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>l0(this.syncEngine,n,0),function(){return r0.D()?new r0:new JR}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,h){const p=new Sb(i,s,o,l,u,c);return h&&(p.qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);H("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Ua(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=gw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Im(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Yw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function d0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zb(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>i0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>i0(e.remoteStore,i)),t._onlineComponents=e}function Bb(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function zb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await nh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Bb(n))throw n;Ss("Error using user provided cache. Falling back to memory cache: "+n),await nh(t,new c0)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await nh(t,new c0);return t._offlineComponents}async function vT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await d0(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await d0(t,new Fb))),t._onlineComponents}function $b(t){return vT(t).then(e=>e.syncEngine)}async function _T(t){const e=await vT(t),n=e.eventManager;return n.onListen=xb.bind(null,e.syncEngine),n.onUnlisten=Pb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Cb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Rb.bind(null,e.syncEngine),n}function Wb(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new yT({next:m=>{o.enqueueAndForget(()=>aT(s,p));const I=m.docs.has(l);!I&&m.fromCache?c.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?c.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new lT(cm(l.path),h,{includeMetadataChanges:!0,oa:!0});return oT(s,p)}(await _T(t),t.asyncQueue,e,n,r)),r.promise}function Hb(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new yT({next:m=>{o.enqueueAndForget(()=>aT(s,p)),m.fromCache&&u.source==="server"?c.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new lT(l,h,{includeMetadataChanges:!0,oa:!0});return oT(s,p)}(await _T(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Gb(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function f0(t){if(!K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function p0(t){if(K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dc(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ET((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new m0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new m0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uP;switch(r.type){case"firstParty":return new fP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=h0.get(n);r&&(H("ComponentProvider","Removing Datastore"),h0.delete(n),r.terminate())}(this),Promise.resolve()}}function qb(t,e,n,r={}){var i;const s=(t=fn(t,Oc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ct.MOCK_USER;else{l=nw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ct(c)}t._authCredentials=new cP(new mw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hs(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class Lr extends Hs{constructor(e,n,r){super(e,n,cm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new K(e))}withConverter(e){return new Lr(this.firestore,e,this._path)}}function Sn(t,e,...n){if(t=Le(t),wT("collection","path",e),t instanceof Oc){const r=Ee.fromString(e,...n);return p0(r),new Lr(t,null,r)}{if(!(t instanceof wt||t instanceof Lr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return p0(r),new Lr(t.firestore,null,r)}}function Ft(t,e,...n){if(t=Le(t),arguments.length===1&&(e=gw.newId()),wT("doc","path",e),t instanceof Oc){const r=Ee.fromString(e,...n);return f0(r),new wt(t,null,new K(r))}{if(!(t instanceof wt||t instanceof Lr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return f0(r),new wt(t.firestore,t instanceof Lr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new Jw(this,"async_queue_retry"),this.Tu=()=>{const n=th();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=th();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=th();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new Wn;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!Ma(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Yn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const i=Tm.createAndSchedule(this,e,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&J()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}class Li extends Oc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Kb}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TT(this),this._firestoreClient.terminate()}}function xm(t,e){const n=typeof t=="object"?t:nm(),r=typeof t=="string"?t:"(default)",i=Ic(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ZE("firestore");s&&qb(i,...s)}return i}function Cm(t){return t._firestoreClient||TT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TT(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,h){return new xP(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ET(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Ub(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(nt.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bs(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=/^__.*__$/;class Yb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ja(e,this.data,n,this.fieldTransforms)}}class IT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function AT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Rm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new Rm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return Gu(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(AT(this.yu)&&Qb.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class Xb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Rc(e)}Ou(e,n,r,i=!1){return new Rm({yu:e,methodName:n,xu:r,path:Xe.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mc(t){const e=t._freezeSettings(),n=Rc(t._databaseId);return new Xb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ST(t,e,n,r,i,s={}){const o=t.Ou(s.merge||s.mergeFields?2:0,e,n,i);bm("Data must be an object, but it was:",o,r);const l=xT(r,o);let u,c;if(s.merge)u=new Dt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const m=Pf(e,p,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);kT(h,m)||h.push(m)}u=new Dt(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new Yb(new St(l),u,c)}class Vc extends km{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vc}}function Jb(t,e,n,r){const i=t.Ou(1,e,n);bm("Data must be an object, but it was:",i,r);const s=[],o=St.empty();Di(r,(u,c)=>{const h=Nm(e,u,n);c=Le(c);const p=i.Cu(h);if(c instanceof Vc)s.push(h);else{const m=za(c,p);m!=null&&(s.push(h),o.set(h,m))}});const l=new Dt(s);return new IT(o,l,i.fieldTransforms)}function Zb(t,e,n,r,i,s){const o=t.Ou(1,e,n),l=[Pf(e,r,n)],u=[i];if(s.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Pf(e,s[m])),u.push(s[m+1]);const c=[],h=St.empty();for(let m=l.length-1;m>=0;--m)if(!kT(c,l[m])){const I=l[m];let A=u[m];A=Le(A);const x=o.Cu(I);if(A instanceof Vc)c.push(I);else{const C=za(A,x);C!=null&&(c.push(I),h.set(I,C))}}const p=new Dt(c);return new IT(h,p,o.fieldTransforms)}function eN(t,e,n,r=!1){return za(n,t.Ou(r?4:3,e))}function za(t,e){if(CT(t=Le(t)))return bm("Unsupported field value:",e,t),xT(t,e);if(t instanceof km)return function(r,i){if(!AT(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=za(l,i.vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$e.fromDate(r);return{timestampValue:Wu(i.serializer,s)}}if(r instanceof $e){const s=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wu(i.serializer,s)}}if(r instanceof Pm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bs)return{bytesValue:$w(i.serializer,r._byteString)};if(r instanceof wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:pm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${Dc(r)}`)}(t,e)}function xT(t,e){const n={};return yw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Di(t,(r,i)=>{const s=za(i,e.Su(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function CT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof Pm||t instanceof bs||t instanceof wt||t instanceof km)}function bm(t,e,n){if(!CT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Dc(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function Pf(t,e,n){if((e=Le(e))instanceof Lc)return e._internalPath;if(typeof e=="string")return Nm(t,e);throw Gu("Field path arguments must be of type string or ",t,!1,void 0,n)}const tN=new RegExp("[~\\*/\\[\\]]");function Nm(t,e,n){if(e.search(tN)>=0)throw Gu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lc(...e.split("."))._internalPath}catch{throw Gu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(V.INVALID_ARGUMENT,l+t+u)}function kT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Dm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nN extends PT{data(){return super.data()}}function Dm(t,e){return typeof e=="string"?Nm(t,e):e instanceof Lc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Om{}class iN extends Om{}function RT(t,e,...n){let r=[];e instanceof Om&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Lm).length,l=s.filter(u=>u instanceof jc).length;if(o>1||o>0&&l>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class jc extends iN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jc(e,n,r)}_apply(e){const n=this._parse(e);return NT(e._query,n),new Hs(e.firestore,e.converter,Ef(e._query,n))}_parse(e){const n=Mc(e.firestore);return function(s,o,l,u,c,h,p){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){y0(p,h);const I=[];for(const A of p)I.push(g0(u,s,A));m={arrayValue:{values:I}}}else m=g0(u,s,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||y0(p,h),m=eN(l,o,p,h==="in"||h==="not-in");return Ue.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function bT(t,e,n){const r=e,i=Dm("where",t);return jc._create(i,r,n)}class Lm extends Om{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)NT(o,u),o=Ef(o,u)}(e._query,n),new Hs(e.firestore,e.converter,Ef(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function g0(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xw(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!K.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jv(t,new K(r))}if(n instanceof wt)return jv(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dc(n)}.`)}function y0(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function NT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sN{convertValue(e,n="none"){switch(Si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Di(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Pm(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=om(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ya(e));default:return null}}convertTimestamp(e){const n=Ur(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);ge(Qw(r));const i=new va(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Yn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class OT extends PT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Dm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class tu extends OT{data(e={}){return super.data(e)}}class oN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ro(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new tu(this._firestore,this._userDataWriter,r.key,r,new Ro(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new tu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ro(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new tu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ro(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:aN(l.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t){t=fn(t,wt);const e=fn(t.firestore,Li);return Wb(Cm(e),t._key).then(n=>lN(e,t,n))}class LT extends sN{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function Gs(t){t=fn(t,Hs);const e=fn(t.firestore,Li),n=Cm(e),r=new LT(e);return rN(t._query),Hb(n,t._query).then(i=>new oN(e,r,t,i))}function MT(t,e,n){t=fn(t,wt);const r=fn(t.firestore,Li),i=DT(t.converter,e);return Fc(r,[ST(Mc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Qt.none())])}function VT(t,e,n,...r){t=fn(t,wt);const i=fn(t.firestore,Li),s=Mc(i);let o;return o=typeof(e=Le(e))=="string"||e instanceof Lc?Zb(s,"updateDoc",t._key,e,n,r):Jb(s,"updateDoc",t._key,e),Fc(i,[o.toMutation(t._key,Qt.exists(!0))])}function jT(t){return Fc(fn(t.firestore,Li),[new dm(t._key,Qt.none())])}function nu(t,e){const n=fn(t.firestore,Li),r=Ft(t),i=DT(t.converter,e);return Fc(n,[ST(Mc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Qt.exists(!1))]).then(()=>r)}function Fc(t,e){return function(r,i){const s=new Wn;return r.asyncQueue.enqueueAndForget(async()=>bb(await $b(r),i,s)),s.promise}(Cm(t),e)}function lN(t,e,n){const r=n.docs.get(e._key),i=new LT(t);return new OT(t,i,e._key,r,new Ro(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){zs=i})(Ni),Ti(new jr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Li(new dP(r.getProvider("auth-internal")),new mP(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new va(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Tn(Ov,"4.6.5",e),Tn(Ov,"4.6.5","esm2017")})();var uN="firebase",cN="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn(uN,cN,"app");function Mm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function FT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dN=FT,UT=new Da("auth","Firebase",FT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new em("@firebase/auth");function hN(t,...e){qu.logLevel<=oe.WARN&&qu.warn(`Auth (${Ni}): ${t}`,...e)}function ru(t,...e){qu.logLevel<=oe.ERROR&&qu.error(`Auth (${Ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw jm(t,...e)}function un(t,...e){return jm(t,...e)}function Vm(t,e,n){const r=Object.assign(Object.assign({},dN()),{[e]:n});return new Da("auth","Firebase",r).create(e,{appName:t.name})}function Hn(t){return Vm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jt(t,"argument-error"),Vm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return UT.create(t,...e)}function Y(t,e,...n){if(!t)throw jm(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ru(e),new Error(e)}function Jn(t,e){t||Un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pN(){return v0()==="http:"||v0()==="https:"}function v0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pN()||W2()||"connection"in navigator)?navigator.onLine:!0}function gN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=z2()||H2()}get(){return mN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=new Wa(3e4,6e4);function rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bn(t,e,n,r,i={}){return zT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Oa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),BT.fetch()($T(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function zT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yN),e);try{const i=new EN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ol(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ol(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ol(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ol(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Vm(t,h,c);Jt(t,h)}}catch(i){if(i instanceof Rn)throw i;Jt(t,"network-request-failed",{message:String(i)})}}async function Ha(t,e,n,r,i={}){const s=await bn(t,e,n,r,i);return"mfaPendingCredential"in s&&Jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $T(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fm(t.config,i):`${t.config.apiScheme}://${i}`}function _N(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),vN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ol(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=un(t,e,r);return i.customData._tokenResponse=n,i}function _0(t){return t!==void 0&&t.enterprise!==void 0}class wN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _N(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function TN(t,e){return bn(t,"GET","/v2/recaptchaConfig",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(t,e){return bn(t,"POST","/v1/accounts:delete",e)}async function WT(t,e){return bn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AN(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=Um(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Go(rh(i.auth_time)),issuedAtTime:Go(rh(i.iat)),expirationTime:Go(rh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rh(t){return Number(t)*1e3}function Um(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ru("JWT malformed, contained fewer than 3 sections"),null;try{const i=XE(n);return i?JSON.parse(i):(ru("Failed to decode base64 JWT payload"),null)}catch(i){return ru("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function E0(t){const e=Um(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&SN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Go(this.lastLoginAt),this.creationTime=Go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ku(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ns(t,WT(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?HT(s.providerUserInfo):[],l=kN(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new bf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function CN(t){const e=Le(t);await Ku(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function HT(t){return t.map(e=>{var{providerId:n}=e,r=Mm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e){const n=await zT(t,{},async()=>{const r=Oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$T(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",BT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RN(t,e){return bn(t,"POST","/v2/accounts:revokeToken",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):E0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=E0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hs;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Mm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ns(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AN(this,e)}reload(){return CN(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ku(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await Ns(this,IN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:b,isAnonymous:M,providerData:j,stsTokenManager:S}=n;Y(y&&S,e,"internal-error");const v=hs.fromJSON(this.name,S);Y(typeof y=="string",e,"internal-error"),ur(p,e.name),ur(m,e.name),Y(typeof b=="boolean",e,"internal-error"),Y(typeof M=="boolean",e,"internal-error"),ur(I,e.name),ur(A,e.name),ur(x,e.name),ur(C,e.name),ur(_,e.name),ur(g,e.name);const T=new Bn({uid:y,auth:e,email:m,emailVerified:b,displayName:p,isAnonymous:M,photoURL:A,phoneNumber:I,tenantId:x,stsTokenManager:v,createdAt:_,lastLoginAt:g});return j&&Array.isArray(j)&&(T.providerData=j.map(k=>Object.assign({},k))),C&&(T._redirectEventId=C),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new hs;i.updateFromServerResponse(n);const s=new Bn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ku(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?HT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new hs;l.updateFromIdToken(r);const u=new Bn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=new Map;function zn(t){Jn(t instanceof Function,"Expected a class definition");let e=w0.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GT.type="NONE";const T0=GT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=iu(this.userKey,i.apiKey,s),this.fullPersistenceKey=iu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(zn(T0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||zn(T0);const o=iu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){const p=Bn._fromJSON(e,h);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new fs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(QT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(XT(e))return"Blackberry";if(JT(e))return"Webos";if(Bm(e))return"Safari";if((e.includes("chrome/")||KT(e))&&!e.includes("edge/"))return"Chrome";if(YT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qT(t=tt()){return/firefox\//i.test(t)}function Bm(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function KT(t=tt()){return/crios\//i.test(t)}function QT(t=tt()){return/iemobile/i.test(t)}function YT(t=tt()){return/android/i.test(t)}function XT(t=tt()){return/blackberry/i.test(t)}function JT(t=tt()){return/webos/i.test(t)}function Uc(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bN(t=tt()){var e;return Uc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NN(){return G2()&&document.documentMode===10}function ZT(t=tt()){return Uc(t)||YT(t)||JT(t)||XT(t)||/windows phone/i.test(t)||QT(t)}function DN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t,e=[]){let n;switch(t){case"Browser":n=I0(tt());break;case"Worker":n=`${I0(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ni}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,e={}){return bn(t,"GET","/v2/passwordPolicy",rr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=6;class VN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new A0(this),this.idTokenSubscription=new A0(this),this.beforeStateQueue=new ON(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=UT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await WT(this,{idToken:e}),r=await Bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ku(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(Hn(this));const n=e?Le(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LN(this),n=new VN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Da("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await RN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yr(t){return Le(t)}class A0{constructor(e){this.auth=e,this.observer=null,this.addObserver=ek(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FN(t){Bc=t}function tI(t){return Bc.loadJS(t)}function UN(){return Bc.recaptchaEnterpriseScript}function BN(){return Bc.gapiScript}function zN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const $N="recaptcha-enterprise",WN="NO_RECAPTCHA";class HN{constructor(e){this.type=$N,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{TN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new wN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;_0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(WN)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&_0(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=UN();u.length!==0&&(u+=l),tI(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function S0(t,e,n,r=!1){const i=new HN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Nf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await S0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await S0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t,e){const n=Ic(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vu(s,e??{}))return i;Jt(i,"already-initialized")}return n.initialize({options:e})}function qN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KN(t,e,n){const r=Yr(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=nI(e),{host:o,port:l}=QN(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),YN()}function nI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QN(t){const e=nI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:x0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:x0(o)}}}function x0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}async function XN(t,e){return bn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t,e){return Ha(t,"POST","/v1/accounts:signInWithPassword",rr(t,e))}async function ZN(t,e){return bn(t,"POST","/v1/accounts:sendOobCode",rr(t,e))}async function eD(t,e){return ZN(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}async function nD(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends zm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ta(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ta(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nf(e,n,"signInWithPassword",JN);case"emailLink":return tD(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nf(e,r,"signUpPassword",XN);case"emailLink":return nD(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e){return Ha(t,"POST","/v1/accounts:signInWithIdp",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD="http://localhost";class xi extends zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Mm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:rD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sD(t){const e=So(xo(t)).link,n=e?So(xo(e)).deep_link_id:null,r=So(xo(t)).deep_link_id;return(r?So(xo(r)).link:null)||r||n||e||t}class $m{constructor(e){var n,r,i,s,o,l;const u=So(xo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=iD((i=u.mode)!==null&&i!==void 0?i:null);Y(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=sD(e);try{return new $m(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.providerId=qs.PROVIDER_ID}static credential(e,n){return Ta._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$m.parseLink(n);return Y(r,"argument-error"),Ta._fromEmailAndCode(e,r.code,r.tenantId)}}qs.PROVIDER_ID="password";qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Wm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Ga{constructor(){super("facebook.com")}static credential(e){return xi._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xi._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Ga{constructor(){super("github.com")}static credential(e){return xi._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ga{constructor(){super("twitter.com")}static credential(e,n){return xi._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oD(t,e){return Ha(t,"POST","/v1/accounts:signUp",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bn._fromIdTokenResponse(e,r,i),o=C0(r);return new Ci({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=C0(r);return new Ci({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function C0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends Rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qu(e,n,r,i)}}function rI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qu._fromErrorAndOperation(t,s,e,r):s})}async function aD(t,e,n=!1){const r=await Ns(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ci._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lD(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(Hn(r));const i="reauthenticate";try{const s=await Ns(t,rI(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Um(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Ci._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e,n=!1){if(sn(t.app))return Promise.reject(Hn(t));const r="signIn",i=await rI(t,r,e),s=await Ci._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function uD(t,e){return iI(Yr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t,e,n){var r;Y(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),Y(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Y(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Y(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dD(t,e,n){if(sn(t.app))return Promise.reject(Hn(t));const r=Yr(t),o=await Nf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oD).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&sI(t),u}),l=await Ci._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function hD(t,e,n){return sn(t.app)?Promise.reject(Hn(t)):uD(Le(t),qs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sI(t),r})}async function fD(t,e){const n=Le(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&cD(n.auth,i,e);const{email:s}=await eD(n.auth,i);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(t,e){return bn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Le(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ns(r,pD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function gD(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function yD(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function vD(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function oI(t){return Le(t).signOut()}const Yu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yu,"1"),this.storage.removeItem(Yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(){const t=tt();return Bm(t)||Uc(t)}const ED=1e3,wD=10;class lI extends aI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_D()&&DN(),this.fallbackToPolling=ZT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ED)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lI.type="LOCAL";const TD=lI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI extends aI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uI.type="SESSION";const cI=uI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await ID(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Hm("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function SD(t){xn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function xD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kD(){return dI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="firebaseLocalStorageDb",PD=1,Xu="firebaseLocalStorage",fI="fbase_key";class qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $c(t,e){return t.transaction([Xu],e?"readwrite":"readonly").objectStore(Xu)}function RD(){const t=indexedDB.deleteDatabase(hI);return new qa(t).toPromise()}function Df(){const t=indexedDB.open(hI,PD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xu,{keyPath:fI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xu)?e(r):(r.close(),await RD(),e(await Df()))})})}async function k0(t,e,n){const r=$c(t,!0).put({[fI]:e,value:n});return new qa(r).toPromise()}async function bD(t,e){const n=$c(t,!1).get(e),r=await new qa(n).toPromise();return r===void 0?null:r.value}function P0(t,e){const n=$c(t,!0).delete(e);return new qa(n).toPromise()}const ND=800,DD=3;class pI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Df(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zc._getInstance(kD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xD(),!this.activeServiceWorker)return;this.sender=new AD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Df();return await k0(e,Yu,"1"),await P0(e,Yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>k0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>P0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$c(i,!1).getAll();return new qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ND)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pI.type="LOCAL";const OD=pI;new Wa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t,e){return e?zn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm extends zm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LD(t){return iI(t.auth,new Gm(t),t.bypassAuthState)}function MD(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),lD(n,new Gm(t),t.bypassAuthState)}async function VD(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),aD(n,new Gm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LD;case"linkViaPopup":case"linkViaRedirect":return VD;case"reauthViaPopup":case"reauthViaRedirect":return MD;default:Jt(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD=new Wa(2e3,1e4);async function FD(t,e,n){if(sn(t.app))return Promise.reject(un(t,"operation-not-supported-in-this-environment"));const r=Yr(t);fN(t,e,Wm);const i=mI(r,n);return new ui(r,"signInViaPopup",e,i).executeNotNull()}class ui extends gI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ui.currentPopupAction&&ui.currentPopupAction.cancel(),ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=Hm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jD.get())};e()}}ui.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="pendingRedirect",su=new Map;class BD extends gI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=su.get(this.auth._key());if(!e){try{const r=await zD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}su.set(this.auth._key(),e)}return this.bypassAuthState||su.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zD(t,e){const n=HD(e),r=WD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $D(t,e){su.set(t._key(),e)}function WD(t){return zn(t._redirectPersistence)}function HD(t){return iu(UD,t.config.apiKey,t.name)}async function GD(t,e,n=!1){if(sn(t.app))return Promise.reject(Hn(t));const r=Yr(t),i=mI(r,e),o=await new BD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=10*60*1e3;class KD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qD&&this.cachedEventUids.clear(),this.cachedEventUids.has(R0(e))}saveEventToCache(e){this.cachedEventUids.add(R0(e)),this.lastProcessedEventTime=Date.now()}}function R0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YD(t,e={}){return bn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JD=/^https?/;async function ZD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YD(t);for(const n of e)try{if(eO(n))return}catch{}Jt(t,"unauthorized-domain")}function eO(t){const e=Rf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!JD.test(n))return!1;if(XD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=new Wa(3e4,6e4);function b0(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nO(t){return new Promise((e,n)=>{var r,i,s;function o(){b0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{b0(),n(un(t,"network-request-failed"))},timeout:tO.get()})}if(!((i=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xn().gapi)===null||s===void 0)&&s.load)o();else{const l=zN("iframefcb");return xn()[l]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},tI(`${BN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ou=null,e})}let ou=null;function rO(t){return ou=ou||nO(t),ou}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=new Wa(5e3,15e3),sO="__/auth/iframe",oO="emulator/auth/iframe",aO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uO(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fm(e,oO):`https://${t.config.authDomain}/${sO}`,r={apiKey:e.apiKey,appName:t.name,v:Ni},i=lO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Oa(r).slice(1)}`}async function cO(t){const e=await rO(t),n=xn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:uO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),l=xn().setTimeout(()=>{s(o)},iO.get());function u(){xn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hO=500,fO=600,pO="_blank",mO="http://localhost";class N0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gO(t,e,n,r=hO,i=fO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},dO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=tt().toLowerCase();n&&(l=KT(c)?pO:n),qT(c)&&(e=e||mO,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[I,A])=>`${m}${I}=${A},`,"");if(bN(c)&&l!=="_self")return yO(e||"",l),new N0(null);const p=window.open(e||"",l,h);Y(p,t,"popup-blocked");try{p.focus()}catch{}return new N0(p)}function yO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO="__/auth/handler",_O="emulator/auth/handler",EO=encodeURIComponent("fac");async function D0(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ni,eventId:i};if(e instanceof Wm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Z2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof Ga){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${EO}=${encodeURIComponent(u)}`:"";return`${wO(t)}?${Oa(l).slice(1)}${c}`}function wO({config:t}){return t.emulator?Fm(t,_O):`https://${t.authDomain}/${vO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="webStorageSupport";class TO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cI,this._completeRedirectFn=GD,this._overrideRedirectResult=$D}async _openPopup(e,n,r,i){var s;Jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await D0(e,n,r,Rf(),i);return gO(e,o,Hm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await D0(e,n,r,Rf(),i);return SD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cO(e),r=new KD(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ih,{type:ih},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ih];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZT()||Bm()||Uc()}}const IO=TO;var O0="@firebase/auth",L0="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xO(t){Ti(new jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eI(t)},c=new jN(r,i,s,u);return qN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ti(new jr("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new AO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(O0,L0,SO(t)),Tn(O0,L0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=5*60,kO=tw("authIdTokenMaxAge")||CO;let M0=null;const PO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kO)return;const i=n==null?void 0:n.token;M0!==i&&(M0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vI(t=nm()){const e=Ic(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GN(t,{popupRedirectResolver:IO,persistence:[OD,TD,cI]}),r=tw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=PO(s.toString());yD(n,o,()=>o(n.currentUser)),gD(n,l=>o(l))}}const i=JE("auth");return i&&KN(n,`http://${i}`),n}function RO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}FN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=un("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",RO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xO("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="firebasestorage.googleapis.com",bO="storageBucket",NO=2*60*1e3,DO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Rn{constructor(e,n,r=0){super(sh(e),`Firebase Storage: ${n} (${sh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Nn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var kn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(kn||(kn={}));function sh(t){return"storage/"+t}function OO(){const t="An unknown error occurred, please check the error payload for server response.";return new Nn(kn.UNKNOWN,t)}function LO(){return new Nn(kn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function MO(){return new Nn(kn.CANCELED,"User canceled the upload/download.")}function VO(t){return new Nn(kn.INVALID_URL,"Invalid URL '"+t+"'.")}function jO(t){return new Nn(kn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function V0(t){return new Nn(kn.INVALID_ARGUMENT,t)}function EI(){return new Nn(kn.APP_DELETED,"The Firebase app was deleted.")}function FO(t){return new Nn(kn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=on.makeFromUrl(e,n)}catch{return new on(e,"")}if(r.path==="")return r;throw jO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const h="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",I=new RegExp(`^https?://${p}/${h}/b/${i}/o${m}`,"i"),A={bucket:1,path:3},x=n===_I?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",_=new RegExp(`^https?://${x}/${i}/${C}`,"i"),y=[{regex:l,indices:u,postModify:s},{regex:I,indices:A,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<y.length;b++){const M=y[b],j=M.regex.exec(e);if(j){const S=j[M.indices.bucket];let v=j[M.indices.path];v||(v=""),r=new on(S,v),M.postModify(r);break}}if(r==null)throw VO(e);return r}}class UO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function h(...C){c||(c=!0,e.apply(null,C))}function p(C){i=setTimeout(()=>{i=null,t(I,u())},C)}function m(){s&&clearTimeout(s)}function I(C,..._){if(c){m();return}if(C){m(),h.call(null,C,..._);return}if(u()||o){m(),h.call(null,C,..._);return}r<64&&(r*=2);let y;l===1?(l=2,y=0):y=(r+Math.random())*1e3,p(y)}let A=!1;function x(C){A||(A=!0,m(),!c&&(i!==null?(C||(l=2),clearTimeout(i),p(0)):C||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,x(!0)},n),x}function zO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t){return t!==void 0}function j0(t,e,n,r){if(r<e)throw V0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw V0(`Invalid value for '${t}'. Expected ${n} or less.`)}function WO(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ju;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ju||(Ju={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n,r,i,s,o,l,u,c,h,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,A)=>{this.resolve_=I,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ll(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Ju.NO_ERROR,u=s.getStatus();if(!l||HO(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Ju.ABORT;r(!1,new Ll(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ll(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());$O(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=OO();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?EI():MO();o(u)}else{const u=LO();o(u)}};this.canceled_?n(!1,new Ll(!1,null,!0)):this.backoffId_=BO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ll{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function qO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function KO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function YO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XO(t,e,n,r,i,s,o=!0){const l=WO(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return QO(c,e),qO(c,n),KO(c,s),YO(c,r),new GO(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ZO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n){this._service=e,n instanceof on?this._location=n:this._location=on.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zu(e,n)}get root(){const e=new on(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ZO(this._location.path)}get storage(){return this._service}get parent(){const e=JO(this._location.path);if(e===null)return null;const n=new on(this._location.bucket,e);return new Zu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw FO(e)}}function F0(t,e){const n=e==null?void 0:e[bO];return n==null?null:on.makeFromBucketSpec(n,t)}function e4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:nw(i,t.app.options.projectId))}class t4{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=_I,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=NO,this._maxUploadRetryTime=DO,this._requests=new Set,i!=null?this._bucket=on.makeFromBucketSpec(i,this._host):this._bucket=F0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=on.makeFromBucketSpec(this._url,e):this._bucket=F0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){j0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){j0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new UO(EI());{const o=XO(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const U0="@firebase/storage",B0="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="storage";function n4(t=nm(),e){t=Le(t);const r=Ic(t,wI).getImmediate({identifier:e}),i=ZE("storage");return i&&r4(r,...i),r}function r4(t,e,n,r={}){e4(t,e,n,r)}function i4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new t4(n,r,i,e,Ni)}function s4(){Ti(new jr(wI,i4,"PUBLIC").setMultipleInstances(!0)),Tn(U0,B0,""),Tn(U0,B0,"esm2017")}s4();const o4={apiKey:"AIzaSyBdKZzQZf69acom5VDEmD-yRDtbJ-gMR6c",authDomain:"linxapp-8be88.firebaseapp.com",projectId:"linxapp-8be88",storageBucket:"linxapp-8be88.appspot.com",messagingSenderId:"642301859785",appId:"1:642301859785:web:0e14f63961a001ee977a18"},Ks=sw(o4),a4=vI(Ks),Mi=xm(Ks);n4(Ks);const TI=async()=>{try{const t=Sn(Mi,"users");return(await Gs(t)).docs.map(r=>({id:r.id,...r.data()}))}catch(t){return console.error("Error al obtener usuarios:",t),[]}},II=async t=>{try{const e=[];for(const n of t){const r=Ft(Mi,"users",n),i=await $a(r);if(i.exists()){const s=i.data();e.push({id:n,name:s.name})}}return e}catch(e){return console.error("Error al obtener los nombres de los usuarios:",e),[]}},l4=async t=>{try{const e=Ft(Mi,"users",t),n=await $a(e);return n.exists()?n.data():(console.error("Usuario no encontrado"),null)}catch(e){return console.error("Error al obtener el usuario:",e),null}},u4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKxSURBVHgB7ZdNbhpBEIVfNeBgZ5E5AjlByAlsn8DJIhLxxtzARLKT7Ix3lkAKPgFkY4iyCDkB+AThBnAEvIjBTJhK1cBYAx7+rEbIkp+EpqeYnv6murqqG3jWExBFGeMnmb2YoQNmdmZ1ZODaLdQqWCdM8nPmjJnyWE6tbbe33y3Vu7CgePgmmcukQiCXHrgV1ckwOTA4Fvekb+M7OTHlYRuGY5Tzr+DKoFDLzeuY/Jqp85DaRHysME7unfM3vp0lsMOETsxFs1+qdbCCzAQMjWKEh7he1LF/cT+Qkzg9VA+1DeEbEZ0ZUJkT1EicfkhjBRlYEDEapB/CaErQn0tw18WcMoivBBSHBSkIM74PitVsYNs6+VghwtEYaN8t/Gwteo8Vz0yDqPRe7dJ0lvWQFZhpkMcCWYGZpxAQFEhXHTYFEwBhlLOcnix/bBJGJd7x04XksM16xhfRgT+gJERsEmbry2FZimAaChJDc9ZzVvLMQhCPswzqylS9dy+qHWwCJgDRttYs8c6frZPDrtzUd9zbT9PVfm3TFAYJS7O1gGV7ie3G9H9rgQlPjQd6e1eoUvCjGL/GKIjTidNMdq0wEzECSE26mqhJfrX3cKltmbbdtcEsAgnkEUfuDJeC0RSuu0BYAJmnpWB6ieQv2Sy1ZxU6GyCqyKVtDE2kbMP8e0jUfem6nSj/2gB5AEMgfdGRNDR1lwJ7r/hD26VB6NmkHGd43LYBopqYprt/LypyOtCP39Oz07yOTFS2CfIABqVK18Dzl11MBosKWg1mjRFpph4LQjC7oyvdTNojFOxfx0/UPU/KvyxHQ/SGPcoS3W8DZp6tZknfIe70j0GaAEOnjGgYlcREXqbiDGuShMP5oHiVD9toXgc5qKUwhAQqp8Ujr2BBZPiGmOr9Yq2JZz1F/Qdax1eH6BA0dAAAAABJRU5ErkJggg==",z0=()=>{};let qm={},AI={},SI=null,xI={mark:z0,measure:z0};try{typeof window<"u"&&(qm=window),typeof document<"u"&&(AI=document),typeof MutationObserver<"u"&&(SI=MutationObserver),typeof performance<"u"&&(xI=performance)}catch{}const{userAgent:$0=""}=qm.navigator||{},zr=qm,Te=AI,W0=SI,Ml=xI;zr.document;const ir=!!Te.documentElement&&!!Te.head&&typeof Te.addEventListener=="function"&&typeof Te.createElement=="function",CI=~$0.indexOf("MSIE")||~$0.indexOf("Trident/");var Ae="classic",kI="duotone",Mt="sharp",Vt="sharp-duotone",c4=[Ae,kI,Mt,Vt],d4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},H0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},h4=["kit"],f4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,p4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,m4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},g4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},y4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},v4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},_4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},E4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},PI={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},w4=["solid","regular","light","thin","duotone","brands"],RI=[1,2,3,4,5,6,7,8,9,10],T4=RI.concat([11,12,13,14,15,16,17,18,19,20]),bo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},I4=[...Object.keys(v4),...w4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",bo.GROUP,bo.SWAP_OPACITY,bo.PRIMARY,bo.SECONDARY].concat(RI.map(t=>"".concat(t,"x"))).concat(T4.map(t=>"w-".concat(t))),A4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},S4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},x4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},G0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Zn="___FONT_AWESOME___",Of=16,bI="fa",NI="svg-inline--fa",ki="data-fa-i2svg",Lf="data-fa-pseudo-element",C4="data-fa-pseudo-element-pending",Km="data-prefix",Qm="data-icon",q0="fontawesome-i2svg",k4="async",P4=["HTML","HEAD","STYLE","SCRIPT"],DI=(()=>{try{return!0}catch{return!1}})(),OI=[Ae,Mt,Vt];function Ka(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ae]}})}const LI={...PI};LI[Ae]={...PI[Ae],...H0.kit,...H0["kit-duotone"]};const fi=Ka(LI),Mf={...E4};Mf[Ae]={...Mf[Ae],...G0.kit,...G0["kit-duotone"]};const Ia=Ka(Mf),Vf={..._4};Vf[Ae]={...Vf[Ae],...x4.kit};const pi=Ka(Vf),jf={...y4};jf[Ae]={...jf[Ae],...S4.kit};const R4=Ka(jf),b4=f4,MI="fa-layers-text",N4=p4,D4={...d4};Ka(D4);const O4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],oh=bo,Ds=new Set;Object.keys(Ia[Ae]).map(Ds.add.bind(Ds));Object.keys(Ia[Mt]).map(Ds.add.bind(Ds));Object.keys(Ia[Vt]).map(Ds.add.bind(Ds));const L4=[...h4,...I4],qo=zr.FontAwesomeConfig||{};function M4(t){var e=Te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function V4(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Te&&typeof Te.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=V4(M4(n));i!=null&&(qo[r]=i)});const VI={styleDefault:"solid",familyDefault:"classic",cssPrefix:bI,replacementClass:NI,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qo.familyPrefix&&(qo.cssPrefix=qo.familyPrefix);const Os={...VI,...qo};Os.autoReplaceSvg||(Os.observeMutations=!1);const G={};Object.keys(VI).forEach(t=>{Object.defineProperty(G,t,{enumerable:!0,set:function(e){Os[t]=e,Ko.forEach(n=>n(G))},get:function(){return Os[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(t){Os.cssPrefix=t,Ko.forEach(e=>e(G))},get:function(){return Os.cssPrefix}});zr.FontAwesomeConfig=G;const Ko=[];function j4(t){return Ko.push(t),()=>{Ko.splice(Ko.indexOf(t),1)}}const cr=Of,vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function F4(t){if(!t||!ir)return;const e=Te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Te.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Te.head.insertBefore(e,r),t}const U4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Aa(){let t=12,e="";for(;t-- >0;)e+=U4[Math.random()*62|0];return e}function Qs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ym(t){return t.classList?Qs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function jI(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function B4(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(jI(t[n]),'" '),"").trim()}function Wc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Xm(t){return t.size!==vn.size||t.x!==vn.x||t.y!==vn.y||t.rotate!==vn.rotate||t.flipX||t.flipY}function z4(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function $4(t){let{transform:e,width:n=Of,height:r=Of,startCentered:i=!1}=t,s="";return i&&CI?s+="translate(".concat(e.x/cr-n/2,"em, ").concat(e.y/cr-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/cr,"em), calc(-50% + ").concat(e.y/cr,"em)) "):s+="translate(".concat(e.x/cr,"em, ").concat(e.y/cr,"em) "),s+="scale(".concat(e.size/cr*(e.flipX?-1:1),", ").concat(e.size/cr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var W4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function FI(){const t=bI,e=NI,n=G.cssPrefix,r=G.replacementClass;let i=W4;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let K0=!1;function ah(){G.autoAddCss&&!K0&&(F4(FI()),K0=!0)}var H4={mixout(){return{dom:{css:FI,insertCss:ah}}},hooks(){return{beforeDOMElementCreation(){ah()},beforeI2svg(){ah()}}}};const er=zr||{};er[Zn]||(er[Zn]={});er[Zn].styles||(er[Zn].styles={});er[Zn].hooks||(er[Zn].hooks={});er[Zn].shims||(er[Zn].shims=[]);var _n=er[Zn];const UI=[],BI=function(){Te.removeEventListener("DOMContentLoaded",BI),ec=1,UI.map(t=>t())};let ec=!1;ir&&(ec=(Te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Te.readyState),ec||Te.addEventListener("DOMContentLoaded",BI));function G4(t){ir&&(ec?setTimeout(t,0):UI.push(t))}function Qa(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?jI(t):"<".concat(e," ").concat(B4(n),">").concat(r.map(Qa).join(""),"</").concat(e,">")}function Q0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var lh=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,u,c,h;for(r===void 0?(u=1,h=e[s[0]]):(u=0,h=r);u<o;u++)c=s[u],h=l(h,e[c],c,e);return h};function q4(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ff(t){const e=q4(t);return e.length===1?e[0].toString(16):null}function K4(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Y0(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Uf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Y0(e);typeof _n.hooks.addPack=="function"&&!r?_n.hooks.addPack(t,Y0(e)):_n.styles[t]={..._n.styles[t]||{},...i},t==="fas"&&Uf("fa",e)}const{styles:ii,shims:Q4}=_n,Y4={[Ae]:Object.values(pi[Ae]),[Mt]:Object.values(pi[Mt]),[Vt]:Object.values(pi[Vt])};let Jm=null,zI={},$I={},WI={},HI={},GI={};const X4={[Ae]:Object.keys(fi[Ae]),[Mt]:Object.keys(fi[Mt]),[Vt]:Object.keys(fi[Vt])};function J4(t){return~L4.indexOf(t)}function Z4(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!J4(i)?i:null}const qI=()=>{const t=r=>lh(ii,(i,s,o)=>(i[o]=lh(s,r,{}),i),{});zI=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),$I=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),GI=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in ii||G.autoFetchSvg,n=lh(Q4,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});WI=n.names,HI=n.unicodes,Jm=Hc(G.styleDefault,{family:G.familyDefault})};j4(t=>{Jm=Hc(t.styleDefault,{family:G.familyDefault})});qI();function Zm(t,e){return(zI[t]||{})[e]}function eL(t,e){return($I[t]||{})[e]}function Tr(t,e){return(GI[t]||{})[e]}function KI(t){return WI[t]||{prefix:null,iconName:null}}function tL(t){const e=HI[t],n=Zm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $r(){return Jm}const eg=()=>({prefix:null,iconName:null,rest:[]});function Hc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ae}=e,r=fi[n][t],i=Ia[n][t]||Ia[n][r],s=t in _n.styles?t:null;return i||s||null}const nL={[Ae]:Object.keys(pi[Ae]),[Mt]:Object.keys(pi[Mt]),[Vt]:Object.keys(pi[Vt])};function Gc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Ae]:"".concat(G.cssPrefix,"-").concat(Ae),[Mt]:"".concat(G.cssPrefix,"-").concat(Mt),[Vt]:"".concat(G.cssPrefix,"-").concat(Vt)};let i=null,s=Ae;const o=c4.filter(u=>u!==kI);o.forEach(u=>{(t.includes(r[u])||t.some(c=>nL[u].includes(c)))&&(s=u)});const l=t.reduce((u,c)=>{const h=Z4(G.cssPrefix,c);if(ii[c]?(c=Y4[s].includes(c)?R4[s][c]:c,i=c,u.prefix=c):X4[s].indexOf(c)>-1?(i=c,u.prefix=Hc(c,{family:s})):h?u.iconName=h:c!==G.replacementClass&&!o.some(p=>c===r[p])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const p=i==="fa"?KI(u.iconName):{},m=Tr(u.prefix,u.iconName);p.prefix&&(i=null),u.iconName=p.iconName||m||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!ii.far&&ii.fas&&!G.autoFetchSvg&&(u.prefix="fas")}return u},eg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Mt&&(ii.fass||G.autoFetchSvg)&&(l.prefix="fass",l.iconName=Tr(l.prefix,l.iconName)||l.iconName),!l.prefix&&s===Vt&&(ii.fasds||G.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Tr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=$r()||"fas"),l}class rL{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},Uf(s,i[s]);const o=pi[Ae][s];o&&Uf(o,i[s]),qI()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],u=l[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=l)}),e[s][o]=l}),e}}let X0=[],rs={};const ms={},iL=Object.keys(ms);function sL(t,e){let{mixoutsTo:n}=e;return X0=t,rs={},Object.keys(ms).forEach(r=>{iL.indexOf(r)===-1&&delete ms[r]}),X0.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{rs[o]||(rs[o]=[]),rs[o].push(s[o])})}r.provides&&r.provides(ms)}),n}function Bf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(rs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Pi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(rs[t]||[]).forEach(s=>{s.apply(null,n)})}function Wr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ms[t]?ms[t].apply(null,e):void 0}function zf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||$r();if(e)return e=Tr(n,e)||e,Q0(QI.definitions,n,e)||Q0(_n.styles,n,e)}const QI=new rL,oL=()=>{G.autoReplaceSvg=!1,G.observeMutations=!1,Pi("noAuto")},aL={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ir?(Pi("beforeI2svg",t),Wr("pseudoElements2svg",t),Wr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,G4(()=>{uL({autoReplaceSvgRoot:e}),Pi("watch",t)})}},lL={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Tr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Hc(t[0]);return{prefix:n,iconName:Tr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(G.cssPrefix,"-"))>-1||t.match(b4))){const e=Gc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||$r(),iconName:Tr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=$r();return{prefix:e,iconName:Tr(e,t)||t}}}},zt={noAuto:oL,config:G,dom:aL,parse:lL,library:QI,findIconDefinition:zf,toHtml:Qa},uL=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Te}=t;(Object.keys(_n.styles).length>0||G.autoFetchSvg)&&ir&&G.autoReplaceSvg&&zt.dom.i2svg({node:e})};function qc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Qa(n))}}),Object.defineProperty(t,"node",{get:function(){if(!ir)return;const n=Te.createElement("div");return n.innerHTML=t.html,n.children}}),t}function cL(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Xm(o)&&n.found&&!r.found){const{width:l,height:u}=n,c={x:l/u/2,y:.5};i.style=Wc({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function dL(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function tg(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:u,titleId:c,extra:h,watchable:p=!1}=t,{width:m,height:I}=n.found?n:e,A=r==="fak",x=[G.replacementClass,i?"".concat(G.cssPrefix,"-").concat(i):""].filter(M=>h.classes.indexOf(M)===-1).filter(M=>M!==""||!!M).concat(h.classes).join(" ");let C={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":i,class:x,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(I)}};const _=A&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/I*16*.0625,"em")}:{};p&&(C.attributes[ki]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||Aa())},children:[l]}),delete C.attributes.title);const g={...C,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:{..._,...h.styles}},{children:y,attributes:b}=n.found&&e.found?Wr("generateAbstractMask",g)||{children:[],attributes:{}}:Wr("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=y,g.attributes=b,o?dL(g):cL(g)}function J0(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,u={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};l&&(u[ki]="");const c={...o.styles};Xm(i)&&(c.transform=$4({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const h=Wc(c);h.length>0&&(u.style=h);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function hL(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Wc(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:uh}=_n;function $f(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(oh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(oh.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(oh.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const fL={found:!1,width:512,height:512};function pL(t,e){!DI&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Wf(t,e){let n=e;return e==="fa"&&G.styleDefault!==null&&(e=$r()),new Promise((r,i)=>{if(n==="fa"){const s=KI(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&uh[e]&&uh[e][t]){const s=uh[e][t];return r($f(s))}pL(t,e),r({...fL,icon:G.showMissingIcons&&t?Wr("missingIconAbstract")||{}:{}})})}const Z0=()=>{},Hf=G.measurePerformance&&Ml&&Ml.mark&&Ml.measure?Ml:{mark:Z0,measure:Z0},No='FA "6.6.0"',mL=t=>(Hf.mark("".concat(No," ").concat(t," begins")),()=>YI(t)),YI=t=>{Hf.mark("".concat(No," ").concat(t," ends")),Hf.measure("".concat(No," ").concat(t),"".concat(No," ").concat(t," begins"),"".concat(No," ").concat(t," ends"))};var ng={begin:mL,end:YI};const au=()=>{};function e_(t){return typeof(t.getAttribute?t.getAttribute(ki):null)=="string"}function gL(t){const e=t.getAttribute?t.getAttribute(Km):null,n=t.getAttribute?t.getAttribute(Qm):null;return e&&n}function yL(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function vL(){return G.autoReplaceSvg===!0?lu.replace:lu[G.autoReplaceSvg]||lu.replace}function _L(t){return Te.createElementNS("http://www.w3.org/2000/svg",t)}function EL(t){return Te.createElement(t)}function XI(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?_L:EL}=e;if(typeof t=="string")return Te.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(XI(s,{ceFn:n}))}),r}function wL(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const lu={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(XI(n),e)}),e.getAttribute(ki)===null&&G.keepOriginalSource){let n=Te.createComment(wL(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ym(e).indexOf(G.replacementClass))return lu.replace(t);const r=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===G.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Qa(s)).join(`
`);e.setAttribute(ki,""),e.innerHTML=i}};function t_(t){t()}function JI(t,e){const n=typeof e=="function"?e:au;if(t.length===0)n();else{let r=t_;G.mutateApproach===k4&&(r=zr.requestAnimationFrame||t_),r(()=>{const i=vL(),s=ng.begin("mutate");t.map(i),s(),n()})}}let rg=!1;function ZI(){rg=!0}function Gf(){rg=!1}let tc=null;function n_(t){if(!W0||!G.observeMutations)return;const{treeCallback:e=au,nodeCallback:n=au,pseudoElementsCallback:r=au,observeMutationsRoot:i=Te}=t;tc=new W0(s=>{if(rg)return;const o=$r();Qs(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!e_(l.addedNodes[0])&&(G.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&G.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&e_(l.target)&&~O4.indexOf(l.attributeName))if(l.attributeName==="class"&&gL(l.target)){const{prefix:u,iconName:c}=Gc(Ym(l.target));l.target.setAttribute(Km,u||o),c&&l.target.setAttribute(Qm,c)}else yL(l.target)&&n(l.target)})}),ir&&tc.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function TL(){tc&&tc.disconnect()}function IL(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function AL(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Gc(Ym(t));return i.prefix||(i.prefix=$r()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=eL(i.prefix,t.innerText)||Zm(i.prefix,Ff(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function SL(t){const e=Qs(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||Aa()):(e["aria-hidden"]="true",e.focusable="false")),e}function xL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function r_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=AL(t),s=SL(t),o=Bf("parseNodeAttributes",{},t);let l=e.styleParser?IL(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s},...o}}const{styles:CL}=_n;function eA(t){const e=G.autoReplaceSvg==="nest"?r_(t,{styleParser:!1}):r_(t);return~e.extra.classes.indexOf(MI)?Wr("generateLayersText",t,e):Wr("generateSvgReplacementMutation",t,e)}let Pn=new Set;OI.map(t=>{Pn.add("fa-".concat(t))});Object.keys(fi[Ae]).map(Pn.add.bind(Pn));Object.keys(fi[Mt]).map(Pn.add.bind(Pn));Object.keys(fi[Vt]).map(Pn.add.bind(Pn));Pn=[...Pn];function i_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ir)return Promise.resolve();const n=Te.documentElement.classList,r=h=>n.add("".concat(q0,"-").concat(h)),i=h=>n.remove("".concat(q0,"-").concat(h)),s=G.autoFetchSvg?Pn:OI.map(h=>"fa-".concat(h)).concat(Object.keys(CL));s.includes("fa")||s.push("fa");const o=[".".concat(MI,":not([").concat(ki,"])")].concat(s.map(h=>".".concat(h,":not([").concat(ki,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Qs(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const u=ng.begin("onTree"),c=l.reduce((h,p)=>{try{const m=eA(p);m&&h.push(m)}catch(m){DI||m.name==="MissingIcon"&&console.error(m)}return h},[]);return new Promise((h,p)=>{Promise.all(c).then(m=>{JI(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),h()})}).catch(m=>{u(),p(m)})})}function kL(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;eA(t).then(n=>{n&&JI([n],e)})}function PL(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:zf(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:zf(i||{})),t(r,{...n,mask:i})}}const RL=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=vn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:u=[],attributes:c={},styles:h={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:I}=t;return qc({type:"icon",...t},()=>(Pi("beforeDOMElementCreation",{iconDefinition:t,params:e}),G.autoA11y&&(o?c["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(l||Aa()):(c["aria-hidden"]="true",c.focusable="false")),tg({icons:{main:$f(I),mask:i?$f(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:{...vn,...n},symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:c,styles:h,classes:u}})))};var bL={mixout(){return{icon:PL(RL)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=i_,t.nodeCallback=kL,t}}},provides(t){t.i2svg=function(e){const{node:n=Te,callback:r=()=>{}}=e;return i_(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:u,mask:c,maskId:h,extra:p}=n;return new Promise((m,I)=>{Promise.all([Wf(r,o),c.iconName?Wf(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[x,C]=A;m([e,tg({icons:{main:x,mask:C},prefix:o,iconName:r,transform:l,symbol:u,maskId:h,title:i,titleId:s,extra:p,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=Wc(o);l.length>0&&(r.style=l);let u;return Xm(s)&&(u=Wr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},NL={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return qc({type:"layer"},()=>{Pi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},DL={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return qc({type:"counter",content:t},()=>(Pi("beforeDOMElementCreation",{content:t,params:e}),hL({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(G.cssPrefix,"-layers-counter"),...r]}})))}}}},OL={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=vn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return qc({type:"text",content:t},()=>(Pi("beforeDOMElementCreation",{content:t,params:e}),J0({content:t,transform:{...vn,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(G.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(CI){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,l=c.height/u}return G.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,J0({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const LL=new RegExp('"',"ug"),s_=[1105920,1112319],o_={FontAwesome:{normal:"fas",400:"fas"},...g4,...m4,...A4},qf=Object.keys(o_).reduce((t,e)=>(t[e.toLowerCase()]=o_[e],t),{}),ML=Object.keys(qf).reduce((t,e)=>{const n=qf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function VL(t){const e=t.replace(LL,""),n=K4(e,0),r=n>=s_[0]&&n<=s_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ff(i?e[0]:e),isSecondary:r||i}}function jL(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(qf[n]||{})[i]||ML[n]}function a_(t,e){const n="".concat(C4).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Qs(t.children).filter(m=>m.getAttribute(Lf)===e)[0],l=zr.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(N4),h=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let I=jL(u,h);const{value:A,isSecondary:x}=VL(m),C=c[0].startsWith("FontAwesome");let _=Zm(I,A),g=_;if(C){const y=tL(A);y.iconName&&y.prefix&&(_=y.iconName,I=y.prefix)}if(_&&!x&&(!o||o.getAttribute(Km)!==I||o.getAttribute(Qm)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);const y=xL(),{extra:b}=y;b.attributes[Lf]=e,Wf(_,I).then(M=>{const j=tg({...y,icons:{main:M,mask:eg()},prefix:I,iconName:g,extra:b,watchable:!0}),S=Te.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=j.map(v=>Qa(v)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function FL(t){return Promise.all([a_(t,"::before"),a_(t,"::after")])}function UL(t){return t.parentNode!==document.head&&!~P4.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Lf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function l_(t){if(ir)return new Promise((e,n)=>{const r=Qs(t.querySelectorAll("*")).filter(UL).map(FL),i=ng.begin("searchPseudoElements");ZI(),Promise.all(r).then(()=>{i(),Gf(),e()}).catch(()=>{i(),Gf(),n()})})}var BL={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=l_,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Te}=e;G.searchPseudoElements&&l_(n)}}};let u_=!1;var zL={mixout(){return{dom:{unwatch(){ZI(),u_=!0}}}},hooks(){return{bootstrap(){n_(Bf("mutationObserverCallbacks",{}))},noAuto(){TL()},watch(t){const{observeMutationsRoot:e}=t;u_?Gf():n_(Bf("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const c_=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var $L={mixout(){return{parse:{transform:t=>c_(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=c_(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:h,path:p};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const ch={x:0,y:0,width:"100%",height:"100%"};function d_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function WL(t){return t.tag==="g"?t.children:[t]}var HL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Gc(n.split(" ").map(i=>i.trim())):eg();return r.prefix||(r.prefix=$r()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:u,icon:c}=i,{width:h,icon:p}=s,m=z4({transform:l,containerWidth:h,iconWidth:u}),I={tag:"rect",attributes:{...ch,fill:"white"}},A=c.children?{children:c.children.map(d_)}:{},x={tag:"g",attributes:{...m.inner},children:[d_({tag:c.tag,attributes:{...c.attributes,...m.path},...A})]},C={tag:"g",attributes:{...m.outer},children:[x]},_="mask-".concat(o||Aa()),g="clip-".concat(o||Aa()),y={tag:"mask",attributes:{...ch,id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[I,C]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:WL(p)},y]};return n.push(b,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(_,")"),...ch}}),{children:n,attributes:r}}}},GL={provides(t){let e=!1;zr.matchMedia&&(e=zr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},qL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},KL=[H4,bL,NL,DL,OL,BL,zL,$L,HL,GL,qL];sL(KL,{mixoutsTo:zt});zt.noAuto;zt.config;zt.library;zt.dom;const Kf=zt.parse;zt.findIconDefinition;zt.toHtml;const QL=zt.icon;zt.layer;zt.text;zt.counter;var tA={exports:{}},YL="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",XL=YL,JL=XL;function nA(){}function rA(){}rA.resetWarningCache=nA;var ZL=function(){function t(r,i,s,o,l,u){if(u!==JL){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:rA,resetWarningCache:nA};return n.PropTypes=n,n};tA.exports=ZL();var eM=tA.exports;const Q=tp(eM);function h_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function gn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?h_(Object(n),!0).forEach(function(r){is(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function nc(t){"@babel/helpers - typeof";return nc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nc(t)}function is(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function nM(t,e){if(t==null)return{};var n=tM(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Qf(t){return rM(t)||iM(t)||sM(t)||oM()}function rM(t){if(Array.isArray(t))return Yf(t)}function iM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function sM(t,e){if(t){if(typeof t=="string")return Yf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yf(t,e)}}function Yf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function oM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aM(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,h=t.spinReverse,p=t.pulse,m=t.fixedWidth,I=t.inverse,A=t.border,x=t.listItem,C=t.flip,_=t.size,g=t.rotation,y=t.pull,b=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":h,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":I,"fa-border":A,"fa-li":x,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},is(e,"fa-".concat(_),typeof _<"u"&&_!==null),is(e,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),is(e,"fa-pull-".concat(y),typeof y<"u"&&y!==null),is(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(b).map(function(M){return b[M]?M:null}).filter(function(M){return M})}function lM(t){return t=t-0,t===t}function iA(t){return lM(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var uM=["style"];function cM(t){return t.charAt(0).toUpperCase()+t.slice(1)}function dM(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=iA(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[cM(i)]=s:e[i]=s,e},{})}function sA(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return sA(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var h=e.attributes[c];switch(c){case"class":u.attrs.className=h,delete e.attributes.class;break;case"style":u.attrs.style=dM(h);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=h:u.attrs[iA(c)]=h}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=nM(n,uM);return i.attrs.style=gn(gn({},i.attrs.style),o),t.apply(void 0,[e.tag,gn(gn({},i.attrs),l)].concat(Qf(r)))}var oA=!1;try{oA=!0}catch{}function hM(){if(!oA&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function f_(t){if(t&&nc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Kf.icon)return Kf.icon(t);if(t===null)return null;if(t&&nc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function dh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?is({},t,e):{}}var p_={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ft=fe.forwardRef(function(t,e){var n=gn(gn({},p_),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,u=n.titleId,c=n.maskId,h=f_(r),p=dh("classes",[].concat(Qf(aM(n)),Qf((o||"").split(" ")))),m=dh("transform",typeof n.transform=="string"?Kf.transform(n.transform):n.transform),I=dh("mask",f_(i)),A=QL(h,gn(gn(gn(gn({},p),m),I),{},{symbol:s,title:l,titleId:u,maskId:c}));if(!A)return hM("Could not find icon",h),null;var x=A.abstract,C={ref:e};return Object.keys(n).forEach(function(_){p_.hasOwnProperty(_)||(C[_]=n[_])}),fM(x[0],C)});ft.displayName="FontAwesomeIcon";ft.propTypes={beat:Q.bool,border:Q.bool,beatFade:Q.bool,bounce:Q.bool,className:Q.string,fade:Q.bool,flash:Q.bool,mask:Q.oneOfType([Q.object,Q.array,Q.string]),maskId:Q.string,fixedWidth:Q.bool,inverse:Q.bool,flip:Q.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Q.oneOfType([Q.object,Q.array,Q.string]),listItem:Q.bool,pull:Q.oneOf(["right","left"]),pulse:Q.bool,rotation:Q.oneOf([0,90,180,270]),shake:Q.bool,size:Q.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Q.bool,spinPulse:Q.bool,spinReverse:Q.bool,symbol:Q.oneOfType([Q.bool,Q.string]),title:Q.string,titleId:Q.string,transform:Q.oneOfType([Q.string,Q.object]),swapOpacity:Q.bool};var fM=sA.bind(null,fe.createElement);const pM={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]},mM=pM,gM={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},yM={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},vM={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},_M={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},EM={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},aA={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},wM={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"]},TM=wM,IM={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},AM=IM,SM={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},xM={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},CM={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},kM=({onCreateProject:t,onClose:e})=>{const[n,r]=O.useState(""),[i,s]=O.useState("#FFD1D1"),[o,l]=O.useState([]),[u,c]=O.useState([]),[h,p]=O.useState([]),[m,I]=O.useState(""),[A,x]=O.useState("");O.useEffect(()=>{(async()=>{try{const y=await TI();l(y),c(y)}catch(y){console.error("Error al obtener usuarios:",y),I("No se pudieron cargar los usuarios.")}})()},[]),O.useEffect(()=>{const g=o.filter(y=>y.name.toLowerCase().includes(A.toLowerCase()));c(g)},[A,o]);const C=g=>{const y=Array.from(g.target.selectedOptions,b=>b.value);p(y)},_=async g=>{if(g.preventDefault(),!n.trim()){I("El nombre del proyecto es obligatorio.");return}try{await t(n,h,i),r(""),p([]),I(""),e()}catch(y){console.error("Error al crear el proyecto:",y),I("Hubo un error al crear el proyecto.")}};return E.jsxs("form",{onSubmit:_,className:" text-white h-[90%] ",autoComplete:"off",children:[m&&E.jsx("p",{className:"text-red-500",children:m}),E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsxs("div",{className:"bg-[#71E4B9] w-[600px]  h-[65px] rounded-[20px] flex shadow-md items-center justify-center gap-2",children:[E.jsx("label",{className:"text-[20px] font-bold text-[#09926C]",htmlFor:"projectName",children:"Nombre del proyecto"}),E.jsx("input",{className:"bg-[#A9F1D2] w-[355px] h-[45px] rounded-[15px] p-2  text-tertiaryGreen focus:outline-textGreen ",id:"projectName",value:n,onChange:g=>r(g.target.value),type:"text",required:!0})]}),E.jsxs("div",{className:"flex items-center gap-2 mr-16 ",children:[E.jsxs("div",{className:"relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#71E4B9] shadow-md",children:[E.jsx("input",{id:"projectColor",value:i,onChange:g=>s(g.target.value),type:"color",className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"}),E.jsx("img",{src:u4,alt:"Selector de color",className:"w-8 h-8 cursor-pointer "})]}),E.jsxs("label",{htmlFor:"projectColor",className:" text-[#09926C] text-[14px] font-bold w-[149px]",children:[E.jsx(ft,{icon:aA})," Escoge el color del proyecto pulsando aquí"]})]})]}),E.jsxs("div",{className:"mt-4 bg-[#71E4B9] w-[560px] h-[277px] rounded-[20px] p-4",children:[E.jsx("label",{htmlFor:"collaborators",className:"block text-[#09926C] text-[20px] font-bold mb-2",children:"Agregar colaboradores al proyecto:"}),E.jsxs("div",{className:"flex flex-col",children:[E.jsx("input",{type:"text",placeholder:"Nombre del colaborador",value:A,onChange:g=>x(g.target.value),className:"mb-2 placeholder:text-textGreen bg-[#A9F1D2] border border-[#09926C] rounded-[15px] p-2 text-[#09926C] focus:outline-none"}),E.jsx("select",{id:"collaborators",multiple:!0,value:h,onChange:C,className:"bg-[#A9F1D2] border border-[#09926C] rounded-[15px] p-2 text-[#09926C] focus:outline-none h-[160px] focus:ring-2 focus:ring-[#71E4B9] focus:border-transparent appearance-none",children:u.map(g=>E.jsx("option",{value:g.id,className:`bg-[#A9F1D2] ${h.includes(g.id)?" text-tertiaryGreen":"hover:bg-[#71E4B9] hover:text-[#09926C]"}`,children:g.name},g.id))})]})]}),E.jsxs("div",{className:"w-full flex justify-end gap",children:["             ",E.jsx("button",{className:"bg-[#17CF97] w-[140px] h-[60px] rounded-[100px] shadow-md text-[#077559] font-semibold mt-4",type:"submit",children:"Crear proyecto"}),E.jsx("button",{className:"bg-[#17CF97] w-[140px] h-[60px] rounded-[100px] shadow-md text-[#077559] font-semibold mt-4 ",onClick:e,children:"Cerrar"})]})]})},PM={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyBdKZzQZf69acom5VDEmD-yRDtbJ-gMR6c",VITE_FIREBASE_APP_ID:"1:642301859785:web:0e14f63961a001ee977a18",VITE_FIREBASE_AUTH_DOMAIN:"linxapp-8be88.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"642301859785",VITE_FIREBASE_PROJECT_ID:"linxapp-8be88",VITE_FIREBASE_STORAGE_BUCKET:"linxapp-8be88.appspot.com"},m_=t=>{let e;const n=new Set,r=(h,p)=>{const m=typeof h=="function"?h(e):h;if(!Object.is(m,e)){const I=e;e=p??(typeof m!="object"||m===null)?m:Object.assign({},e,m),n.forEach(A=>A(e,I))}},i=()=>e,u={setState:r,getState:i,getInitialState:()=>c,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{(PM?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,i,u);return u},RM=t=>t?m_(t):m_;var lA={exports:{}},uA={},cA={exports:{}},dA={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=O;function bM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var NM=typeof Object.is=="function"?Object.is:bM,DM=Ls.useState,OM=Ls.useEffect,LM=Ls.useLayoutEffect,MM=Ls.useDebugValue;function VM(t,e){var n=e(),r=DM({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return LM(function(){i.value=n,i.getSnapshot=e,hh(i)&&s({inst:i})},[t,n,e]),OM(function(){return hh(i)&&s({inst:i}),t(function(){hh(i)&&s({inst:i})})},[t]),MM(n),n}function hh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!NM(t,n)}catch{return!0}}function jM(t,e){return e()}var FM=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?jM:VM;dA.useSyncExternalStore=Ls.useSyncExternalStore!==void 0?Ls.useSyncExternalStore:FM;cA.exports=dA;var UM=cA.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc=O,BM=UM;function zM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $M=typeof Object.is=="function"?Object.is:zM,WM=BM.useSyncExternalStore,HM=Kc.useRef,GM=Kc.useEffect,qM=Kc.useMemo,KM=Kc.useDebugValue;uA.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=HM(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=qM(function(){function u(I){if(!c){if(c=!0,h=I,I=r(I),i!==void 0&&o.hasValue){var A=o.value;if(i(A,I))return p=A}return p=I}if(A=p,$M(h,I))return A;var x=r(I);return i!==void 0&&i(A,x)?A:(h=I,p=x)}var c=!1,h,p,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,r,i]);var l=WM(t,s[0],s[1]);return GM(function(){o.hasValue=!0,o.value=l},[l]),KM(l),l};lA.exports=uA;var QM=lA.exports;const YM=tp(QM),hA={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyBdKZzQZf69acom5VDEmD-yRDtbJ-gMR6c",VITE_FIREBASE_APP_ID:"1:642301859785:web:0e14f63961a001ee977a18",VITE_FIREBASE_AUTH_DOMAIN:"linxapp-8be88.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"642301859785",VITE_FIREBASE_PROJECT_ID:"linxapp-8be88",VITE_FIREBASE_STORAGE_BUCKET:"linxapp-8be88.appspot.com"},{useDebugValue:XM}=fe,{useSyncExternalStoreWithSelector:JM}=YM;let g_=!1;const ZM=t=>t;function e5(t,e=ZM,n){(hA?"production":void 0)!=="production"&&n&&!g_&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),g_=!0);const r=JM(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return XM(r),r}const y_=t=>{(hA?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?RM(t):t,n=(r,i)=>e5(e,r,i);return Object.assign(n,e),n},fA=t=>t?y_(t):y_,$t=fA(t=>({user:null,isAuthenticated:!1,setUser:e=>t({user:e,isAuthenticated:e==null?void 0:e.emailVerified}),clearUser:()=>t({user:null,isAuthenticated:!1})})),t5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHpSURBVHgB7VZBTgJBEKxZ0MTExPVGBGR8gf5AfIH8AJ+gLxBPHpWbN/UF6g/g5k19AXsAwnGJ6AWYsZqVSAgus8TEA1QC9Ew3W92zk1QBywblWqi19s0AZWPgewqBt4Z6QGBBOBHvZvWpBa6m963CRbMZVLAAUvMKdnO6QtJLhiEMbjjxjVKMAZ9dl/xNv9vthc9IiNiJebx62EcDFkHf4KjT+TnaTEbr9TRerIX//oHtMAxCJIAXlyRp8TusTZIKZE3SO4k3N1BGQqTjknxwgccKo1CTdT6rT2Sv94mqTGiAt1HnCv4on9clO8T+wOB+utFpxE48A2U2UtneUFszswbHkuc0hXkPSkr8Z1gRr4hXxCvi/yFOKWxhQSQiVjYSi4Gy11kKBuXyVNYUi1ckRCyx540EH8pE6uOtoyraTDUq8Y+3NAia67t2O3iKOovqXBAriyJ7KmqvxO8qLZY0sifTcvoCC2rNTlAf17O2yGYwubcw8ju6QR22uZwuxtWJRZI61t/CAfPfcQpn8sMJH2j6yr+R0iCcMwxpkS7gADeXuaPP6SgrEvMoa7S3j0OLLm+1JuEht4tCyldz1GoFThfN2VfLe/VkKpJN56QZfs5cSRMRj5HL6ENeyQPITeetT1sa+wSEy4svrqyxhLQuWkUAAAAASUVORK5CYII=",pA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB4SURBVHgB7ZQxDoAwCEU/xgO4GxOv6A08ahPj3htgHVya1oKJoQNvJMDnLQBOA5I0LfPKpfpxhuY8SZdJyUMHWHBbaEze+n83EAXkF2oM+zDwAA+wDRglTfkDk3zRBxsDIkRmTKrXzQilctEgLd9qAxViOmqH84ULxvkkJbmGeg8AAAAASUVORK5CYII=",n5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEfSURBVHgB3ZVNkoIwEIVfZ2Y7wp7gZG7CTcY5icxJRm8wN9Cj+AN7FHeWtkSNUpZgiOjCVwX5aegvL2kK4GWklPLxANExudqsecTEwySZxSYog0+2SZKkU6qKCX3brBEVmRSY+lJ2YxNk8BBtKQxUT694f5UgQdAdXHNinr2VV5jOPJ0MCPSzH5ScpOms9xQnl2rswKjKiavEtck2IaIq0BZE1AU15DRwLOG3uqCUKi6a6DxDUcfzaLlcjPN88f/R8b50W5eDapMz93VfgIpSBRWr/ju8xb/lL94NcKsELSECrrI8eEIDGVe6umy3y8lBkxJ23iJbiPsZWELuAthA7gZcQnhL375//v2+o4mYYmBbCQlDla1yjLNskuFZ2gGZFaJbCLLY5wAAAABJRU5ErkJggg==",r5=({project:t,onUnpinProject:e,onDelete:n})=>{var s,o;const{user:r}=$t(),i=l=>{l.preventDefault(),l.stopPropagation(),window.confirm("¿Estás seguro de que deseas eliminar este proyecto?")&&n(t==null?void 0:t.id)};return E.jsxs(As,{className:"relative",to:`projects/${t==null?void 0:t.id}`,children:[E.jsx("img",{className:"absolute top-[-15px] right-4 ",src:t5,alt:"attach-file-icon"}),E.jsxs("div",{className:"w-[250px] h-[150px] rounded-[10px] p-4 flex flex-col justify-between shadow-md",style:{backgroundColor:t.color},children:[E.jsx("div",{className:"flex justify-between items-center",children:E.jsx("p",{className:"font-semibold",children:t==null?void 0:t.name})}),E.jsxs("div",{className:"flex w-full justify-between",children:[E.jsxs("div",{className:"flex gap-2 text-tertiaryDark",children:[t.creatorId===r.uid&&E.jsx("button",{className:"hover:bg-outlineGrey p-1 rounded-lg transition-all",onClick:i,children:E.jsx("img",{src:pA,className:"w-[19.8px] h-[20.2px]",alt:"trash-icon"})}),E.jsx("button",{className:"hover:bg-outlineGrey p-1 rounded-lg transition-all",onClick:l=>{l.preventDefault(),l.stopPropagation(),e(t)},children:E.jsx("img",{src:n5,className:"w-[19.8px] h-[20.2px]",alt:"keepoff-icon"})})]}),E.jsx("div",{className:"flex",children:((s=t.collaborators)==null?void 0:s.length)>1&&E.jsxs("p",{children:[E.jsx("span",{className:"font-semibold",children:(o=t==null?void 0:t.collaborators)==null?void 0:o.length})," ","colaboradores"]})})]})]})]})},ig=fA(t=>({storeProjects:[],selectedProject:null,setProjects:e=>t(()=>({storeProjects:e})),addProject:e=>t(n=>{const i=n.storeProjects.some(s=>s.id===e.id)?n.storeProjects:[...n.storeProjects,e];return console.log("Adding project:",e),console.log("Updated storeProjects:",i),{storeProjects:i}})})),i5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB8SURBVHgB7ZTdCYAwDIQv4hYGdTSdxK4q6BpGrAil2B8FqdB+TyEJOe4hBxQCkG/ITSeIYFln550KqTlc3Dlx9W0+d1AEchdg7hUCMLfqlYA+LjKdSzTYcwKNuhCafCLOF4+NiQtXXKSPCpPYeDApf5CBQP1oW0gBG37FDheAGr8m4mdDAAAAAElFTkSuQmCC",s5=({project:t,onTogglePin:e,isPinned:n,onDelete:r})=>{var l,u;const i=c=>{c.preventDefault(),c.stopPropagation(),e(t)},s=c=>{c.preventDefault(),c.stopPropagation(),window.confirm("¿Estás seguro de que deseas eliminar este proyecto?")&&r(t==null?void 0:t.id)},{user:o}=$t();return E.jsx(As,{className:"relative ",to:`projects/${t==null?void 0:t.id}`,children:E.jsxs("div",{className:"w-[535px] h-[205px] rounded-[10px] p-4 flex flex-col justify-between shadow-md",style:{backgroundColor:t.color},children:[E.jsxs("div",{className:"flex justify-between items-center",children:[E.jsx("p",{className:"font-semibold",children:t==null?void 0:t.name}),!n&&E.jsx("button",{onClick:i,children:E.jsx(ft,{icon:yM,className:"hover:text-yellow-500"})})]}),E.jsxs("div",{className:"flex w-full justify-between",children:[E.jsxs("div",{className:"flex gap-2 text-tertiaryDark",children:[t.creatorId===o.uid&&E.jsx("button",{onClick:s,className:"hover:bg-outlineGrey p-1 rounded-lg transition-all",children:E.jsx("img",{src:pA,className:"w-[19.8px] h-[20.2px]",alt:"trash-icon"})}),!n&&E.jsx("button",{onClick:i,className:"hover:bg-outlineGrey p-1 rounded-lg transition-all",children:E.jsx("img",{src:i5,className:"w-[19.8px] h-[20.2px] cursor-pointer",alt:"keep-icon"})})]}),E.jsx("div",{className:"flex",children:((l=t.collaborators)==null?void 0:l.length)>1&&E.jsxs("p",{children:[(u=t==null?void 0:t.collaborators)==null?void 0:u.length," colaboradores"]})})]})]})})},v_=({className:t})=>E.jsx("div",{className:`bg-gray-200 ${t} animate-pulse`}),o5="/assets/create-project-Cyr9a50b.png",cn=xm(Ks),a5=async(t,e,n=null,r="#FFD1D1")=>{try{const i=await nu(Sn(cn,"projects"),{name:e,creator:t.displayName,creatorId:t.uid,collaborators:n||[],color:r||"#bd5555",createdAt:new Date});console.log("Proyecto agregado");const s={name:"Bienvenido",description:"Esto es una tarea de ejemplo",assignedTo:[t.uid],dueDate:new Date,status:["pendiente"],prioritary:!0,createdAt:new Date,creatorName:t.displayName,taskColor:"#FFED88"};await nu(Sn(cn,"projects",i.id,"tasks"),s);const o=[{name:"pendiente",color:"#808080"},{name:"completada",color:"#008000"},{name:"atrasada",color:"#FF0000"}];for(const l of o)await nu(Sn(cn,"projects",i.id,"status"),l);return console.log("Estados predeterminados agregados"),{id:i.id,name:e,color:r,creator:t.displayName,creatorId:t.uid,collaborators:n,createdAt:new Date}}catch(i){throw console.error("Error al agregar el proyecto:",i),i}},l5=async t=>{try{await jT(Ft(cn,"projects",t)),console.log("proyecto borrado correctamente")}catch(e){console.error("error al borrar el proyecto:",e)}},u5=async t=>{try{const e=Sn(cn,`projects/${t}/tasks`),n=await Gs(e),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),r}catch(e){return console.error("Error al obtener las tareas del proyecto:",e),[]}},c5=async t=>{try{if(!t)throw new Error("No hay usuario logueado");const e=Sn(cn,"projects"),n=RT(e,bT("collaborators","array-contains",t.uid)),r=await Gs(n),i=[];return r.forEach(s=>{i.push({id:s.id,...s.data()})}),i}catch(e){console.error("Error al obtener los proyectos en los que el usuario es colaborador:",e)}},d5=async t=>{try{if(!t)throw new Error("No hay usuario logueado");const e=RT(Sn(cn,"projects"),bT("creatorId","==",t.uid)),n=await Gs(e),r=[];n.forEach(l=>{r.push({id:l.id,...l.data()})});const i=await c5(t),s=[...r,...i],o=[];for(const l of s){const u=await u5(l.id);o.push({...l,tasks:u})}return console.log("Proyectos del usuario con tareas:",o),ig.getState().setProjects(o),o}catch(e){console.error("Error al obtener todos los proyectos del usuario con tareas:",e)}},__=async t=>{try{if(typeof t!="string"||!t)throw new Error("ID de proyecto inválido.");const e=Ft(cn,"projects",t),n=await $a(e);if(!n.exists())throw new Error("Proyecto no encontrado");const r={id:n.id,...n.data()},i=Sn(cn,`projects/${t}/tasks`),s=await Gs(i),o=[];return s.forEach(l=>{o.push({id:l.id,...l.data()})}),ig.getState().setProjects([{...r,tasks:o}]),{...r,tasks:o}}catch(e){console.error("Error al obtener el proyecto y sus tareas:",e)}},mA=async t=>{try{const e=Ft(cn,"projects",t),n=await $a(e);if(n.exists()){const i=n.data().collaborators||[];return console.log("Colaboradores:",i),i}else return console.log("El proyecto no existe"),[]}catch(e){return console.error("Error al obtener los colaboradores del proyecto:",e),[]}},h5=async(t,e)=>{try{const n=Ft(cn,"projects",t),r=await $a(n);if(r.exists()){const s=r.data().collaborators||[],o=[...new Set([...s,...e])];await VT(n,{collaborators:o}),console.log("Colaboradores añadidos exitosamente")}else console.log("El proyecto no existe")}catch(n){console.error("Error al añadir colaboradores:",n)}},f5=({children:t,onClose:e})=>{const n=r=>{r.target===r.currentTarget&&e()};return E.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm shadow-sm",onClick:n,children:E.jsxs("div",{className:"bg-secondaryGreen w-[1000px] h-[555px] rounded-[20px] p-6",children:[E.jsx("h2",{className:"font-bold text-[40px] text-[#38CF9C]",children:"Crear nuevo proyecto"}),t]})})},p5=()=>{const{user:t}=$t(),{storeProjects:e,setProjects:n,addProject:r}=ig(),[i,s]=O.useState(!0),[o,l]=O.useState([]),[u,c]=O.useState(!1),h=()=>c(!1),p=()=>{c(!0)};O.useEffect(()=>{t&&m()},[t]),O.useEffect(()=>{const _=JSON.parse(localStorage.getItem("pinnedProjects"))||[];l(_)},[e]);const m=async()=>{s(!0);try{const _=await d5(t);n(_)}catch(_){console.error("Error fetching projects:",_)}finally{s(!1)}},I=async(_,g,y)=>{try{const b=await a5(t,_,g,y);r(b)}catch(b){console.error("Error creating project:",b)}},A=async _=>{try{console.log("ID del proyecto para borrar:",_,"Tipo:",typeof _),await l5(_),n(e.filter(y=>y.id!==_));const g=o.filter(y=>y.id!==_);l(g),localStorage.setItem("pinnedProjects",JSON.stringify(g))}catch(g){console.error("Error deleting project:",g)}},x=_=>{const g=o.some(b=>b.id===_.id);let y;g?y=o.filter(b=>b.id!==_.id):y=[...o,_],l(y),localStorage.setItem("pinnedProjects",JSON.stringify(y))},C=_=>{const g=o.filter(y=>y.id!==_.id);l(g),localStorage.setItem("pinnedProjects",JSON.stringify(g))};return E.jsxs("div",{className:"p-[75px] relative min-h-screen top-[80px]",children:[E.jsxs("section",{className:"border-b-2 border-outlineGrey/20",children:[E.jsxs("div",{className:"mb-[22px]",children:[E.jsx("h2",{className:"font-bold text-[40px]",children:"Área de trabajo"}),E.jsx("p",{className:"text-[15px]",children:"Fijados"})]}),E.jsx("div",{className:"flex gap-[22px] mb-[40px] flex-wrap",children:i?Array.from({length:3}).map((_,g)=>E.jsx(v_,{className:"w-[250px] h-[150px] rounded-[10px]"},g)):o.length>0?o.map(_=>E.jsx(r5,{project:_,onUnpinProject:C,onDelete:A},_.id)):E.jsx("p",{className:"text-gray-500",children:"Todavía no hay proyectos fijados."})})]}),E.jsx("section",{className:"mt-[40px]",children:E.jsx("div",{className:"flex gap-[22px] flex-wrap ",children:i?Array.from({length:3}).map((_,g)=>E.jsx(v_,{className:"w-[535px] h-[205px] rounded-[10px]"},g)):e.length>0?[...e].sort((_,g)=>new Date(g.createdAt)-new Date(_.createdAt)).map(_=>E.jsx(s5,{project:_,onTogglePin:x,isPinned:o.some(g=>g.id===_.id),onDelete:A},_.id)):E.jsx("p",{className:"text-gray-500",children:"Todavía no hay proyectos creados."})})}),E.jsx("button",{className:"fixed bottom-4 right-4",onClick:p,children:E.jsx("img",{src:o5,alt:"create-project-icon"})}),u&&E.jsx(f5,{onClose:h,children:E.jsx(kM,{onCreateProject:I,onClose:h})})]})};function gA(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=gA(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Ir(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=gA(t))&&(r&&(r+=" "),r+=e);return r}const Sa=t=>typeof t=="number"&&!isNaN(t),mi=t=>typeof t=="string",Ot=t=>typeof t=="function",uu=t=>mi(t)||Ot(t)?t:null,Xf=t=>O.isValidElement(t)||mi(t)||Ot(t)||Sa(t);function m5(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Qc(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:l,position:u,preventExitTransition:c,done:h,nodeRef:p,isIn:m,playToast:I}=o;const A=r?`${e}--${u}`:e,x=r?`${n}--${u}`:n,C=O.useRef(0);return O.useLayoutEffect(()=>{const _=p.current,g=A.split(" "),y=b=>{b.target===p.current&&(I(),_.removeEventListener("animationend",y),_.removeEventListener("animationcancel",y),C.current===0&&b.type!=="animationcancel"&&_.classList.remove(...g))};_.classList.add(...g),_.addEventListener("animationend",y),_.addEventListener("animationcancel",y)},[]),O.useEffect(()=>{const _=p.current,g=()=>{_.removeEventListener("animationend",g),i?m5(_,h,s):h()};m||(c?g():(C.current=1,_.className+=` ${x}`,_.addEventListener("animationend",g)))},[m]),fe.createElement(fe.Fragment,null,l)}}function E_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const _t=new Map;let xa=[];const Jf=new Set,g5=t=>Jf.forEach(e=>e(t)),yA=()=>_t.size>0;function vA(t,e){var n;if(e)return!((n=_t.get(e))==null||!n.isToastActive(t));let r=!1;return _t.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function _A(t,e){Xf(t)&&(yA()||xa.push({content:t,options:e}),_t.forEach(n=>{n.buildToast(t,e)}))}function w_(t,e){_t.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function y5(t){const{subscribe:e,getSnapshot:n,setProps:r}=O.useRef(function(s){const o=s.containerId||1;return{subscribe(l){const u=function(h,p,m){let I=1,A=0,x=[],C=[],_=[],g=p;const y=new Map,b=new Set,M=()=>{_=Array.from(y.values()),b.forEach(v=>v())},j=v=>{C=v==null?[]:C.filter(T=>T!==v),M()},S=v=>{const{toastId:T,onOpen:k,updateId:R,children:N}=v.props,P=R==null;v.staleId&&y.delete(v.staleId),y.set(T,v),C=[...C,v.props.toastId].filter(Se=>Se!==v.staleId),M(),m(E_(v,P?"added":"updated")),P&&Ot(k)&&k(O.isValidElement(N)&&N.props)};return{id:h,props:g,observe:v=>(b.add(v),()=>b.delete(v)),toggle:(v,T)=>{y.forEach(k=>{T!=null&&T!==k.props.toastId||Ot(k.toggle)&&k.toggle(v)})},removeToast:j,toasts:y,clearQueue:()=>{A-=x.length,x=[]},buildToast:(v,T)=>{if((re=>{let{containerId:ae,toastId:Ne,updateId:Me}=re;const qe=ae?ae!==h:h!==1,mt=y.has(Ne)&&Me==null;return qe||mt})(T))return;const{toastId:k,updateId:R,data:N,staleId:P,delay:Se}=T,rt=()=>{j(k)},Wt=R==null;Wt&&A++;const Z={...g,style:g.toastStyle,key:I++,...Object.fromEntries(Object.entries(T).filter(re=>{let[ae,Ne]=re;return Ne!=null})),toastId:k,updateId:R,data:N,closeToast:rt,isIn:!1,className:uu(T.className||g.toastClassName),bodyClassName:uu(T.bodyClassName||g.bodyClassName),progressClassName:uu(T.progressClassName||g.progressClassName),autoClose:!T.isLoading&&(B=T.autoClose,q=g.autoClose,B===!1||Sa(B)&&B>0?B:q),deleteToast(){const re=y.get(k),{onClose:ae,children:Ne}=re.props;Ot(ae)&&ae(O.isValidElement(Ne)&&Ne.props),m(E_(re,"removed")),y.delete(k),A--,A<0&&(A=0),x.length>0?S(x.shift()):M()}};var B,q;Z.closeButton=g.closeButton,T.closeButton===!1||Xf(T.closeButton)?Z.closeButton=T.closeButton:T.closeButton===!0&&(Z.closeButton=!Xf(g.closeButton)||g.closeButton);let X=v;O.isValidElement(v)&&!mi(v.type)?X=O.cloneElement(v,{closeToast:rt,toastProps:Z,data:N}):Ot(v)&&(X=v({closeToast:rt,toastProps:Z,data:N}));const de={content:X,props:Z,staleId:P};g.limit&&g.limit>0&&A>g.limit&&Wt?x.push(de):Sa(Se)?setTimeout(()=>{S(de)},Se):S(de)},setProps(v){g=v},setToggle:(v,T)=>{y.get(v).toggle=T},isToastActive:v=>C.some(T=>T===v),getSnapshot:()=>g.newestOnTop?_.reverse():_}}(o,s,g5);_t.set(o,u);const c=u.observe(l);return xa.forEach(h=>_A(h.content,h.options)),xa=[],()=>{c(),_t.delete(o)}},setProps(l){var u;(u=_t.get(o))==null||u.setProps(l)},getSnapshot(){var l;return(l=_t.get(o))==null?void 0:l.getSnapshot()}}}(t)).current;r(t);const i=O.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(l=>{const{position:u}=l.props;o.has(u)||o.set(u,[]),o.get(u).push(l)}),Array.from(o,l=>s(l[0],l[1]))},isToastActive:vA,count:i==null?void 0:i.length}}function v5(t){const[e,n]=O.useState(!1),[r,i]=O.useState(!1),s=O.useRef(null),o=O.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:u,closeToast:c,onClick:h,closeOnClick:p}=t;var m,I;function A(){n(!0)}function x(){n(!1)}function C(y){const b=s.current;o.canDrag&&b&&(o.didMove=!0,e&&x(),o.delta=t.draggableDirection==="x"?y.clientX-o.start:y.clientY-o.start,o.start!==y.clientX&&(o.canCloseOnClick=!1),b.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,b.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function _(){document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",_);const y=s.current;if(o.canDrag&&o.didMove&&y){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();y.style.transition="transform 0.2s, opacity 0.2s",y.style.removeProperty("transform"),y.style.removeProperty("opacity")}}(I=_t.get((m={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||I.setToggle(m.id,m.fn),O.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||x(),window.addEventListener("focus",A),window.addEventListener("blur",x),()=>{window.removeEventListener("focus",A),window.removeEventListener("blur",x)}},[t.pauseOnFocusLoss]);const g={onPointerDown:function(y){if(t.draggable===!0||t.draggable===y.pointerType){o.didMove=!1,document.addEventListener("pointermove",C),document.addEventListener("pointerup",_);const b=s.current;o.canCloseOnClick=!0,o.canDrag=!0,b.style.transition="none",t.draggableDirection==="x"?(o.start=y.clientX,o.removalDistance=b.offsetWidth*(t.draggablePercent/100)):(o.start=y.clientY,o.removalDistance=b.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(y){const{top:b,bottom:M,left:j,right:S}=s.current.getBoundingClientRect();y.nativeEvent.type!=="touchend"&&t.pauseOnHover&&y.clientX>=j&&y.clientX<=S&&y.clientY>=b&&y.clientY<=M?x():A()}};return l&&u&&(g.onMouseEnter=x,t.stacked||(g.onMouseLeave=A)),p&&(g.onClick=y=>{h&&h(y),o.canCloseOnClick&&c()}),{playToast:A,pauseToast:x,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:g}}function _5(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:l,controlledProgress:u,progress:c,rtl:h,isIn:p,theme:m}=t;const I=s||u&&c===0,A={...l,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};u&&(A.transform=`scaleX(${c})`);const x=Ir("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":h}),C=Ot(o)?o({rtl:h,type:i,defaultClassName:x}):Ir(x,o),_={[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{p&&r()}};return fe.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":I},fe.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${i}`}),fe.createElement("div",{role:"progressbar","aria-hidden":I?"true":"false","aria-label":"notification timer",className:C,style:A,..._}))}let E5=1;const EA=()=>""+E5++;function w5(t){return t&&(mi(t.toastId)||Sa(t.toastId))?t.toastId:EA()}function Qo(t,e){return _A(t,e),e.toastId}function rc(t,e){return{...e,type:e&&e.type||t,toastId:w5(e)}}function Vl(t){return(e,n)=>Qo(e,rc(t,n))}function ne(t,e){return Qo(t,rc("default",e))}ne.loading=(t,e)=>Qo(t,rc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),ne.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=mi(i)?ne.loading(i,n):ne.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(h,p,m)=>{if(p==null)return void ne.dismiss(r);const I={type:h,...l,...n,data:m},A=mi(p)?{render:p}:p;return r?ne.update(r,{...I,...A}):ne(A.render,{...I,...A}),m},c=Ot(t)?t():t;return c.then(h=>u("success",o,h)).catch(h=>u("error",s,h)),c},ne.success=Vl("success"),ne.info=Vl("info"),ne.error=Vl("error"),ne.warning=Vl("warning"),ne.warn=ne.warning,ne.dark=(t,e)=>Qo(t,rc("default",{theme:"dark",...e})),ne.dismiss=function(t){(function(e){var n;if(yA()){if(e==null||mi(n=e)||Sa(n))_t.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=_t.get(e.containerId);r?r.removeToast(e.id):_t.forEach(i=>{i.removeToast(e.id)})}}else xa=xa.filter(r=>e!=null&&r.options.toastId!==e)})(t)},ne.clearWaitingQueue=function(t){t===void 0&&(t={}),_t.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},ne.isActive=vA,ne.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=_t.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:EA()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Qo(o,s)}},ne.done=t=>{ne.update(t,{progress:1})},ne.onChange=function(t){return Jf.add(t),()=>{Jf.delete(t)}},ne.play=t=>w_(!0,t),ne.pause=t=>w_(!1,t);const T5=typeof window<"u"?O.useLayoutEffect:O.useEffect,jl=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return fe.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},fh={info:function(t){return fe.createElement(jl,{...t},fe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return fe.createElement(jl,{...t},fe.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return fe.createElement(jl,{...t},fe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return fe.createElement(jl,{...t},fe.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return fe.createElement("div",{className:"Toastify__spinner"})}},I5=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=v5(t),{closeButton:o,children:l,autoClose:u,onClick:c,type:h,hideProgressBar:p,closeToast:m,transition:I,position:A,className:x,style:C,bodyClassName:_,bodyStyle:g,progressClassName:y,progressStyle:b,updateId:M,role:j,progress:S,rtl:v,toastId:T,deleteToast:k,isIn:R,isLoading:N,closeOnClick:P,theme:Se}=t,rt=Ir("Toastify__toast",`Toastify__toast-theme--${Se}`,`Toastify__toast--${h}`,{"Toastify__toast--rtl":v},{"Toastify__toast--close-on-click":P}),Wt=Ot(x)?x({rtl:v,position:A,type:h,defaultClassName:rt}):Ir(rt,x),Z=function(de){let{theme:re,type:ae,isLoading:Ne,icon:Me}=de,qe=null;const mt={theme:re,type:ae};return Me===!1||(Ot(Me)?qe=Me({...mt,isLoading:Ne}):O.isValidElement(Me)?qe=O.cloneElement(Me,mt):Ne?qe=fh.spinner():(Xc=>Xc in fh)(ae)&&(qe=fh[ae](mt))),qe}(t),B=!!S||!u,q={closeToast:m,type:h,theme:Se};let X=null;return o===!1||(X=Ot(o)?o(q):O.isValidElement(o)?O.cloneElement(o,q):function(de){let{closeToast:re,theme:ae,ariaLabel:Ne="close"}=de;return fe.createElement("button",{className:`Toastify__close-button Toastify__close-button--${ae}`,type:"button",onClick:Me=>{Me.stopPropagation(),re(Me)},"aria-label":Ne},fe.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},fe.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(q)),fe.createElement(I,{isIn:R,done:k,position:A,preventExitTransition:n,nodeRef:r,playToast:s},fe.createElement("div",{id:T,onClick:c,"data-in":R,className:Wt,...i,style:C,ref:r},fe.createElement("div",{...R&&{role:j},className:Ot(_)?_({type:h}):Ir("Toastify__toast-body",_),style:g},Z!=null&&fe.createElement("div",{className:Ir("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},Z),fe.createElement("div",null,l)),X,fe.createElement(_5,{...M&&!B?{key:`pb-${M}`}:{},rtl:v,theme:Se,delay:u,isRunning:e,isIn:R,closeToast:m,hide:p,type:h,style:b,className:y,controlledProgress:B,progress:S||0})))},Yc=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},A5=Qc(Yc("bounce",!0));Qc(Yc("slide",!0));Qc(Yc("zoom"));Qc(Yc("flip"));const S5={position:"top-right",transition:A5,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function x5(t){let e={...S5,...t};const n=t.stacked,[r,i]=O.useState(!0),s=O.useRef(null),{getToastToRender:o,isToastActive:l,count:u}=y5(e),{className:c,style:h,rtl:p,containerId:m}=e;function I(x){const C=Ir("Toastify__toast-container",`Toastify__toast-container--${x}`,{"Toastify__toast-container--rtl":p});return Ot(c)?c({position:x,rtl:p,defaultClassName:C}):Ir(C,uu(c))}function A(){n&&(i(!0),ne.play())}return T5(()=>{if(n){var x;const C=s.current.querySelectorAll('[data-in="true"]'),_=12,g=(x=e.position)==null?void 0:x.includes("top");let y=0,b=0;Array.from(C).reverse().forEach((M,j)=>{const S=M;S.classList.add("Toastify__toast--stacked"),j>0&&(S.dataset.collapsed=`${r}`),S.dataset.pos||(S.dataset.pos=g?"top":"bot");const v=y*(r?.2:1)+(r?0:_*j);S.style.setProperty("--y",`${g?v:-1*v}px`),S.style.setProperty("--g",`${_}`),S.style.setProperty("--s",""+(1-(r?b:0))),y+=S.offsetHeight,b+=.025})}},[r,u,n]),fe.createElement("div",{ref:s,className:"Toastify",id:m,onMouseEnter:()=>{n&&(i(!1),ne.pause())},onMouseLeave:A},o((x,C)=>{const _=C.length?{...h}:{...h,pointerEvents:"none"};return fe.createElement("div",{className:I(x),style:_,key:`container-${x}`},C.map(g=>{let{content:y,props:b}=g;return fe.createElement(I5,{...b,stacked:n,collapseAll:A,isIn:l(b.toastId,b.containerId),style:b.style,key:`toast-${b.key}`},y)}))}))}const Ms=vI(Ks),wA=xm(Ks),TA="https://firebasestorage.googleapis.com/v0/b/linxapp-8be88.appspot.com/o/profilePictures%2FdefaultProfilePicturepng.png?alt=media&token=8ec0dab6-30bc-4885-b7c9-7c12bcf87491",C5=async(t,e)=>TA,k5=async(t,e,n,r)=>{if(n){const i=ne.loading("Procesando...");try{const o=(await dD(Ms,t,e)).user,l=r?await C5(r,o.uid):TA;await mD(o,{displayName:n,photoURL:l}),await MT(Ft(wA,"users",o.uid),{uid:o.uid,name:n,email:t,photoURL:l});const u={url:window.location.origin+"/login"};return await fD(o,u),Ms.signOut(),ne.update(i,{render:"¡Registro exitoso! Por favor, verifica tu correo electrónico.",type:"success",isLoading:!1,autoClose:3e3}),o}catch(s){throw console.error("Error code:",s.code),console.error("Error message:",s.message),ne.update(i,{render:`Error: ${s.message}`,type:"error",isLoading:!1,autoClose:3e3}),new Error(s.message)}}else ne.error("Debe ingresar un nombre válido")},P5=async t=>{t.preventDefault();const e=new Vn,n=ne.loading("Procesando...");try{const i=(await FD(Ms,e)).user;return await MT(Ft(wA,"users",i.uid),{uid:i.uid,name:i.displayName,email:i.email,photoURL:i.photoURL}),ne.update(n,{render:"¡Inicio de sesión exitoso!",type:"success",isLoading:!1,autoClose:3e3}),$t.getState().setUser(i),i}catch(r){throw console.error("Error code:",r.code),console.error("Error message:",r.message),ne.update(n,{render:`Error: ${r.message}`,type:"error",isLoading:!1,autoClose:3e3}),new Error(r.message)}},R5=async(t,e)=>{const n=ne.loading("Ingresando...");try{console.log("Intentando iniciar sesión con:",t,e);const i=(await hD(Ms,t,e)).user;if(i.emailVerified)$t.getState().setUser(i),ne.update(n,{render:"¡Sesión iniciada!",type:"success",isLoading:!1,autoClose:3e3});else throw await oI(Ms),ne.update(n,{render:"¡Debe verificar el correo electrónico!",type:"warning",isLoading:!1,autoClose:5e3}),new Error("Debe verificar el correo electrónico");console.log(i)}catch(r){let i="Error en el inicio de sesión";throw r.code==="auth/invalid-email"?i="El correo electrónico proporcionado es inválido.":r.code==="auth/user-not-found"?i="El usuario no se encuentra registrado.":r.code==="auth/too-many-requests"?i="Demasiados intentos fallidos. Inténtelo de nuevo más tarde.":r.code==="auth/invalid-credential"?i="Credenciales inválidas.":r.message.includes("Debe verificar el correo electrónico")&&(i="Debe verificar el correo electrónico."),ne.update(n,{render:`Error: ${i}`,type:"error",isLoading:!1,autoClose:3e3}),console.error("Error en el inicio de sesión:",r),new Error(i)}},b5=async()=>{try{await oI(Ms),$t.getState().clearUser(),ne.success("¡Has cerrado sesión con éxito!")}catch(t){console.error("Error code:",t.code),console.error("Error message:",t.message),ne.error(`Error: ${t.message}`)}},sg=({handleSubmit:t,children:e})=>E.jsx("form",{className:"gap-2 flex flex-col",onSubmit:t,autoComplete:"off",children:e});sg.propTypes={handleSubmit:Q.func.isRequired,children:Q.node.isRequired};const gs=({type:t,value:e,onChange:n,placeholder:r,required:i=!0,name:s})=>E.jsx("div",{children:E.jsx("input",{className:"w-[400px] h-[60px] bg-[A9F1D2] placeholder:text-[15px] bg-inputGreen rounded-[30px] placeholder:font-semibold p-4 placeholder:text-primaryDark",type:t,value:e,onChange:n,placeholder:r,required:i,id:s,name:s})});gs.propTypes={type:Q.string.isRequired,value:Q.string.isRequired,onChange:Q.func.isRequired,placeholder:Q.string,required:Q.bool,label:Q.string,name:Q.string.isRequired};const IA=({children:t})=>E.jsx("div",{className:"w-[260px] h-[75] bg-[#D2F9E6] rounded-tr-[15px] rounded-br-[15px] flex items-center justify-center",children:E.jsx("h2",{className:"text-[35px] font-semibold",children:t})}),AA=({children:t})=>E.jsx("div",{className:"w-[750px] h-[350px] rounded-tr-[15px] rounded-br-[15px] flex items-center justify-center p-4 bg-[#D2F9E6]",children:t}),SA=({children:t})=>E.jsx("button",{className:"bg-[#17CF97] rounded-[100px] w-[100px] h-[40px] text-mainGreen text-[14px]",type:"submit",children:E.jsx("p",{children:t})}),N5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU4SURBVHgBxZlrTBxVGIbf2Qu7W2CBFoEWSikIpaFQ1BiVxCiYAgnW/ihatVVsta1GjQ1R0z/GFKOJiYCI1WrqLVqkoqax/rDECsY2TVsUgUKgpEAAoeVSKLDsDfb4nVkuC7vMzAJLH/IyM2e+c+bds2e+OXNWwBJhjAXRJpEUSTKSBNJ1kpn0tyAIo1hJyJBAephUTGpi8jSQPidlwJfQBXSk10n1bPG0k57jHxLLCTW4jdTClo920hNYKtSImvQR8x0fkAKwGKjiOlIt8z2XSOu9NRdFusZWjjZ+TaXm/EkX2MrDvy3NfD8aDx6PkO6HF9gb6zHR1ADHzQEwsxlCoBGq8AhoE7dAc2eC0mZSScWkV10L59zu9AlyaVMBBTDTKMw/lYvi+wuhXhcFw+590Gc9CoVkUXKvdDPInLmpjRQj14Ltrz8wdrQIjoE+KEUVvhZB75dCHRUtF3qNlEQmrWI9lxN5SsyZy77CyJHDXpnjOG70YvS9t2jHIRcaRzo0feDag+1yBs0VJ2D6rASLQRUUAmPRMWg2bFQS3kRKpl50CFPm+HPyrFSNye4uDO3N5cFzTwgCdOmZ0GdvhyZpKwSdjsbkGGw1F2E7VwVrVSXU9PUGvlsMTUwsvCCdDFZPGzxGm4NS0cP7d2CivXdOmTosAgFvvg1t6j0L1jOfqhDPe2mOU0IGD00brKNNykKRrP9n2KryYDoZB8ctP7FMZQyGsfBTaDbGwUe0kMFEFU/MUuacBn+BOtSCgD2t0CaMiGWGZ573pTnOJvIWzOd2D9FBtVTkxDmai9pm71pr/b3wf+28OP7mM2ZhGLVAEUEGYJVOcub1AH+SrJKKgKVrjjmOIWuzR3OcT36340z9BJTw4iN+ePw+jVRINM+DEVIRzNLhXqjfgOXAZGWS5+12u5EblJ7dCmr4iknZnA0VNzgiFSEY3NMDs3ZjOdDIfHatVvsfHwBdklF+NAI0wXSnDM8Ufd99FbnxVujVOrfwzBQ1tkar3MrrOx34bd7YjAxxj5uHiRtslotShebAcf0EBuGPwtEUVFnXwNh1Ho/FuL+opUZTt3iYD9R12tzKYsNk353+UVEyvCVnUlj7LFongnBgKA3V1jAatAJK/v0GXWO9UELPEHO7syOCBTIo2YNN5G1kOuKMVKQQkoFS7UH0TBrApv5GbGN4+c8C9I73S1VF1yDDG2VWt/LdaVrIcIH/mzZ4Si76QPKemX1h6sbvNfVhx68voeDSx2geapsT3zDYgsLaL5F3Nh89ttY553jvpSXIZody57UwM1nlz+NkqRplLadRXPf1jEnek66oBBUMGj3GJyzU5mwOEZgW+ps74TecIx4X7PQjg5IJuoO+XnFeJvYgHfArfQcZnt60HfuTdnk0x3GQKZN9XDQnuKRXJthhWXMSltBv8UK6Q84c553pHdcJK88ZDaR4udqn26twvPEH9Iz3LWjWFR4TrAtE/l37kB39oFzzHaTYqU5ze2naRptKKICPvy+afsTlGw2iUVczYltTpgO1/ngyPofyZjZW64KUNP0UmSufbW8eZLKUNq/AC2r6rqC2vwkDliHYHXZoVVpE+odjy+p4pN6xWRybCikmc/muBZ4M8gFyGc731JWkhpShaD2R3Z6lD++mSFRhPeki8z18yUPZuowHk4GkIuY7jjIP6zGLMbqLORcdl4tWUiaWE+Zcm967RKONpMMkPXwJcy4JHyddUWDqKulD5lx493p6vuTFbLoo/+nhbhJ/feU/RfAMzadwnaRmShvDWAL/Aw7JSYacUc2fAAAAAElFTkSuQmCC",xA=()=>E.jsxs("button",{className:"w-[400px] h-[50px] bg-white text-primaryDark font-semibold rounded-[30px] grid grid-cols-[20%,70%] p-2 items-center shadow-md",onClick:P5,children:[E.jsx("img",{src:N5,alt:"google-icon"})," ",E.jsx("p",{className:"text-[15px]",children:"Iniciar sesion con Google"})]}),og="/assets/app-icon-Q2j74osu.png",CA=({isRegister:t})=>E.jsxs("div",{className:"bg-[#D2F9E6] w-[430px] h-[75px] text-primaryDark text-[15px] flex items-center font-bold justify-around p-4",children:[t?E.jsx("p",{children:"Si no tienes cuenta registrate aquí"}):E.jsx("p",{children:"Si ya tenes cuenta inicia sesión aquí"}),t?E.jsx(As,{className:"bg-[#17CF97] rounded-[100px] text-[14px]  border-2 border-[#09926C] text-white w-[115px] h-[40px] flex items-center justify-center",to:"/register",children:E.jsx("p",{children:"Registrarse"})}):E.jsx(As,{className:"bg-[#17CF97]  rounded-[100px] text-[14px]  border-2 border-[#09926C] text-white w-[115px] h-[40px] flex items-center justify-center",to:"/login",children:E.jsx("p",{children:"Iniciar sesión"})})]}),D5=()=>{const[t,e]=O.useState(""),[n,r]=O.useState(""),[i,s]=O.useState(""),o=wc(),l=async u=>{u.preventDefault();try{await R5(t,n),e(""),r(""),o("/")}catch(c){s(c.message)}};return E.jsxs("div",{className:"mt-[80px] flex items-center h-[90vh] gap-4 w-full",children:[E.jsxs("div",{className:"flex flex-col gap-4",children:[E.jsx(IA,{children:"Iniciar sesion"}),E.jsxs(AA,{children:[E.jsxs("div",{children:[E.jsxs(sg,{handleSubmit:l,children:[E.jsxs("div",{className:"flex flex-col gap-4",children:[E.jsx(gs,{type:"email",value:t,onChange:u=>e(u.target.value),placeholder:"Correo electronico",name:"emailInput"}),E.jsx(gs,{type:"password",value:n,onChange:u=>r(u.target.value),placeholder:"Contraseña",name:"passwordInput"})]}),E.jsx("div",{className:"w-full flex items-end justify-end mb-8",children:E.jsx(SA,{children:"Acceder"})}),i&&E.jsx("p",{children:i})]}),E.jsx(xA,{})]}),E.jsx("div",{children:E.jsx("img",{src:og,alt:"app-icon"})})]}),E.jsx(CA,{isRegister:!0})]}),E.jsxs("div",{className:"text-[48px] font-semibold p-10 ml-14",children:[E.jsxs("h2",{children:["Sencillo pero ",E.jsx("span",{className:"text-loginGreen",children:"potente"}),"."]}),E.jsxs("h2",{children:[E.jsx("span",{className:"text-loginGreen",children:"Proyectos"})," y ",E.jsx("span",{className:"text-loginGreen",children:"tareas"})," al siguiente nivel."]})]})]})},O5=()=>{const[t,e]=O.useState(""),[n,r]=O.useState(""),[i,s]=O.useState(""),[o,l]=O.useState(""),[u,c]=O.useState(""),h=wc(),p=async m=>{m.preventDefault();try{await k5(t,n,i),c("Registration successful!"),e(""),r(""),s(""),h("/login")}catch(I){l(I.message)}};return E.jsx(E.Fragment,{children:E.jsxs("div",{className:"mt-[80px] flex items-center h-[90vh] gap-4 w-full ",children:[E.jsxs("div",{className:"flex flex-col gap-4",children:[E.jsx(IA,{children:"Registrarse"}),E.jsxs(AA,{children:[E.jsxs("div",{children:[E.jsxs(sg,{handleSubmit:p,children:[E.jsxs("div",{className:"flex flex-col gap-4",children:[E.jsx(gs,{type:"text",value:i,onChange:m=>s(m.target.value),placeholder:"Nombre de usuario",name:"nameInput"}),E.jsx(gs,{type:"email",value:t,onChange:m=>e(m.target.value),placeholder:"Correo electronico",name:"emailInput"}),E.jsx(gs,{type:"password",value:n,onChange:m=>r(m.target.value),placeholder:"Contraseña",name:"passwordInput"})]}),E.jsx("div",{className:"w-full flex items-end justify-end mb-8",children:E.jsx(SA,{children:"Acceder"})})]}),E.jsx(xA,{})]}),E.jsx("div",{children:E.jsx("img",{src:og,alt:"app-icon"})})]}),E.jsx(CA,{isRegister:!1})]}),E.jsxs("div",{className:"text-[48px] font-semibold p-10 ml-14",children:[E.jsxs("h2",{children:["Sencillo pero ",E.jsx("span",{className:"text-loginGreen",children:"potente"}),"."]}),E.jsxs("h2",{children:[E.jsx("span",{className:"text-loginGreen",children:"Proyectos"})," y"," ",E.jsx("span",{className:"text-loginGreen",children:"tareas"})," al siguiente nivel."]})]})]})})},L5=({user:t})=>E.jsxs("div",{className:"w-[250px] h-[170px] fixed top-16 right-0 m-4 flex items-center justify-center gap-1 flex-col bg-secondaryGreen rounded-[10px]",children:[E.jsx("img",{className:"rounded-full w-[65px] h-[65px]",src:t.photoURL,alt:t.displayName}),E.jsx("h3",{className:"font-semibold text-[20px]",children:t.displayName}),E.jsx("p",{className:"text-[10px]",children:t.email}),E.jsxs("button",{className:"w-[90px] h-[25px] bg-buttonGreen rounded-[10px]",onClick:()=>{localStorage.removeItem("pinnedProjects"),b5()},children:[E.jsx("p",{className:"text-textGreen text-[10px]",children:"Cerrar sesión"})," "]})]}),M5=()=>{const{user:t}=$t(),[e,n]=O.useState(!1);return E.jsx("nav",{className:" h-[80px] border-b-[2px] fixed z-10 bg-mainGreen border-outlineGrey/50 shadow-md drop-shadow-lg px-[30px] top-0 left-0 w-full ",children:E.jsxs("ul",{className:"flex items-center h-full gap-2 justify-between ",children:[E.jsx("li",{children:E.jsx(As,{to:"/",children:E.jsxs("div",{className:"flex items-center justify-center",children:[E.jsx("img",{className:"w-[50px] h-[50px]",src:og,alt:"logo"}),E.jsx("h1",{className:"font-semibold text-[32px]",children:"Taskinx"})]})})}),t&&E.jsxs("li",{className:"flex items-center justify-center gap-2",children:[" ",E.jsxs("button",{onClick:()=>{n(!e)},children:[e&&E.jsx(L5,{user:t}),E.jsx("img",{className:"h-[50px] w-[50px] rounded-full",src:t.photoURL,alt:t.displayName})]})]})]})})},Zf=({component:t,...e})=>{const{isAuthenticated:n}=$t();return n?E.jsx(t,{...e}):E.jsx(KE,{to:"/login",replace:!0})};Zf.propTypes={component:Q.elementType.isRequired};const ep=({component:t,...e})=>{const{isAuthenticated:n}=$t();return n?E.jsx(KE,{to:"/",replace:!0}):E.jsx(t,{...e})};ep.propTypes={component:Q.elementType.isRequired};const V5=async(t,e)=>{try{const n=Sn(Ft(Mi,"projects",t),"tasks");await nu(n,{...e,createdAt:new Date}),console.log("Tarea agregada exitosamente")}catch(n){console.error("Error al agregar la tarea:",n)}},j5=async(t,e)=>{try{const n=Ft(Ft(Mi,"projects",t),"tasks",e);await jT(n),console.log("Tarea eliminada exitosamente")}catch(n){console.error("Error al eliminar la tarea:",n)}},F5=async(t,e,n)=>{try{const r=Ft(Mi,"projects",t,"tasks",e);await VT(r,n)}catch(r){console.error("Error al actualizar la tarea:",r)}},U5=({onCreateTask:t,refetchProject:e,statuses:n,project:r,darkenedColor:i,darkestColor:s,onClose:o})=>{const[l,u]=O.useState(""),[c,h]=O.useState(""),[p,m]=O.useState(""),[I,A]=O.useState("#ffffff"),[x,C]=O.useState(!1),[_,g]=O.useState([]),[y,b]=O.useState([]),[M,j]=O.useState([]),[S,v]=O.useState(""),[T,k]=O.useState(""),{user:R}=$t(),{projectId:N}=WE(),P=new Date().toISOString().split("T")[0];O.useEffect(()=>{(async()=>{const B=await mA(N),q=await II(B);g(q),b(q)})()},[N]),O.useEffect(()=>{const Z=_.filter(B=>B.name.toLowerCase().includes(S.toLowerCase()));b(Z)},[S,_]);const Se=Z=>{if(Z.preventDefault(),o(),!l||!c||!p){k("Por favor, complete todos los campos obligatorios.");return}k("");const B={creatorId:R.uid,creatorName:R.displayName,projectId:N,name:l,description:c,dueDate:p,status:["pendiente"],priority:x,assignedTo:M,taskColor:I};V5(N,B).then(q=>{t(q),e(),u(""),h(""),m(""),C(!1),j([]),A("#FFED88")}).catch(q=>{console.error("Error al crear la tarea:",q),k("Hubo un error al crear la tarea.")})},rt=Z=>{const B=Array.from(Z.target.selectedOptions,q=>q.value);j(B)},Wt=Z=>{v(Z.target.value)};return E.jsxs("form",{onSubmit:Se,autoComplete:"off",style:{color:s},className:"flex flex-col min-w-[800px] w-full gap-2  text-[20px]",children:[T&&E.jsx("p",{className:"text-red-500",children:T}),E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsxs("div",{style:{backgroundColor:i},className:"w-[600px] h-[65px] rounded-[20px] flex shadow-md items-center p-4 gap-2",children:[E.jsx("label",{className:"text-[20px] font-bold",htmlFor:"taskName",children:"Nombre de la tarea"}),E.jsx("input",{id:"taskName",type:"text",value:l,onChange:Z=>u(Z.target.value),placeholder:"Nombre de la tarea",required:!0,style:{backgroundColor:s,color:i},className:"w-[355px] h-[45px] rounded-[15px] p-2"})]}),E.jsxs("div",{className:"flex items-center gap-2 mr-16 ",children:[E.jsxs("div",{style:{backgroundColor:i},className:"relative flex items-center justify-center w-[60px] h-[60px] rounded-full shadow-md",children:[E.jsx("input",{id:"projectColor",value:I,onChange:Z=>A(Z.target.value),type:"color",className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"}),E.jsx(ft,{icon:vM,className:"w-8 h-8 cursor-pointer "})]}),E.jsxs("label",{htmlFor:"projectColor",style:{color:s},className:"text-[14px] font-bold w-[149px]",children:[E.jsx(ft,{icon:aA})," Escoge el color de la tarea pulsando aquí"]})]})]}),E.jsxs("div",{className:"flex gap-4",children:[E.jsxs("div",{style:{backgroundColor:i},className:"h-[150px] w-[600px] rounded-[20px] p-2",children:[E.jsx("label",{className:"text-[20px] font-bold",htmlFor:"taskDesc",children:"Descripción de la tarea"}),E.jsx("textarea",{id:"taskDesc",value:c,onChange:Z=>h(Z.target.value),placeholder:"Descripción de la tarea",required:!0,style:{backgroundColor:s,color:i},className:"w-[524px] h-[90px] rounded-[15px] p-2 mt-2"})]}),E.jsx("div",{className:"rounded-[20px] p-2 flex items-center ",style:{backgroundColor:i},children:E.jsxs("label",{className:"flex items-center flex-col gap-2 space-x-2",children:[E.jsx("span",{className:"text-[20px] font-bold",children:"Prioritaria"}),E.jsx("span",{className:`flex items-center justify-center w-6 h-6 rounded border-2 border-${s} 
                            ${x?`bg-${i} border-${s}`:"bg-transparent"}`,children:x&&E.jsx(ft,{icon:xM})}),E.jsx("input",{type:"checkbox",checked:x,onChange:Z=>C(Z.target.checked),className:"hidden"})]})})]}),E.jsxs("div",{className:"h-[178px] w-[400px] p-4 rounded-[20px]",style:{backgroundColor:i},children:[E.jsx("p",{className:"text-[20px] font-bold mb-6",children:"Fecha limite"}),E.jsx("div",{className:"flex items-center justify-center",children:E.jsxs("label",{className:"text-center",htmlFor:"taskDate",children:["Introducir fecha y hora"," ",E.jsx(ft,{className:"ml-2",icon:mM})]})}),E.jsx("input",{id:"taskDate",type:"datetime-local",value:p,onChange:Z=>m(Z.target.value),required:!0,min:P,style:{backgroundColor:s,color:i},className:"w-full rounded-[15px] p-2 mt-2"})]}),E.jsxs("div",{style:{backgroundColor:i},className:"p-4 rounded-[20px]",children:[E.jsx("label",{className:"text-[20px] font-bold",htmlFor:"collaborators",children:"Colaboradores"}),E.jsx("input",{type:"text",placeholder:"Buscar colaboradores",value:S,onChange:Wt,className:"w-full rounded-[15px] p-2 mb-2",style:{backgroundColor:s,color:i}}),E.jsx("select",{id:"collaborators",value:M,onChange:rt,multiple:!0,style:{backgroundColor:s,color:i},className:"w-full rounded-[15px] p-2",children:y.map(Z=>E.jsx("option",{value:Z.id,style:{borderRadius:"5px",backgroundColor:M.includes(Z.id)?i:"transparent",color:M.includes(Z.id)?s:"inherit"},children:Z.name},Z.id))})]}),E.jsxs("div",{className:"w-full flex justify-end gap-3",children:[E.jsx("button",{style:{backgroundColor:s,color:i},className:" w-[140px] h-[60px] rounded-[100px] shadow-md text-[#077559] font-semibold mt-4 ",onClick:o,children:"Cerrar"}),E.jsx("button",{style:{backgroundColor:s,color:i},className:" w-[140px] h-[60px] rounded-[100px] shadow-md text-[#077559] font-semibold mt-4",type:"submit",children:"Crear tarea"})]}),E.jsx("style",{children:`
                    input::placeholder,
                    textarea::placeholder {
                        color: ${i};
                    }
                `})]})},B5=({statuses:t,project:e,onCreateTask:n,refetchProject:r,onClose:i})=>{function s(h,p){h=h.replace(/^#/,""),h.length===3&&(h=h.split("").map(x=>x+x).join(""));let m=parseInt(h.substring(0,2),16),I=parseInt(h.substring(2,4),16),A=parseInt(h.substring(4,6),16);return m=Math.max(0,Math.min(255,Math.round(m*(1-p/100)))),I=Math.max(0,Math.min(255,Math.round(I*(1-p/100)))),A=Math.max(0,Math.min(255,Math.round(A*(1-p/100)))),`#${[m,I,A].map(x=>x.toString(16).padStart(2,"0")).join("")}`}const o=e.color,l=s(o,40),u=s(o,20);console.log(u);const c=h=>{h.target===h.currentTarget&&i()};return E.jsx("div",{className:"fixed top-[80px] z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm shadow-sm",onClick:c,children:E.jsxs("div",{style:{backgroundColor:o},className:"w-[957px] h-[840px] rounded-[20px] p-6",children:[E.jsx("h2",{style:{color:u},className:"font-bold text-[40px]",children:"Crear nueva tarea"}),E.jsx(U5,{onCreateTask:n,refetchProject:r,statuses:t,project:e,darkenedColor:u,darkestColor:l,onClose:i})]})})},kA=async t=>{try{const e=Sn(Mi,`projects/${t}/status`),n=await Gs(e),r=[];return n.forEach(i=>{r.push(i.data())}),r}catch(e){throw console.error("Error al obtener los estados:",e),e}},PA=({projectId:t,onClose:e})=>{const[n,r]=O.useState([]),[i,s]=O.useState([]),[o,l]=O.useState([]),[u,c]=O.useState(!0);O.useEffect(()=>{const A=async()=>{try{const C=await TI();r(C)}catch(C){console.error("Error al obtener usuarios:",C)}},x=async()=>{try{const C=await mA(t);l(C)}catch(C){console.error("Error al obtener colaboradores del proyecto:",C)}};A(),x()},[t]);const h=A=>{const x=A.target.value;s(C=>C.includes(x)?C.filter(_=>_!==x):[...C,x])},p=async()=>{try{await h5(t,i),e(),c(!1)}catch(A){console.error("Error al añadir colaboradores:",A)}},m=A=>{A.target.classList.contains("fixed")&&(c(!1),e())},I=n.filter(A=>!o.includes(A.id));return u&&E.jsx("div",{className:`fixed top-0 left-0 w-full h-full flex justify-center items-center ${u?"bg-blue-800/20":""}`,onClick:u?m:null,children:u&&E.jsxs("div",{className:"bg-white rounded shadow-md p-4 w-1/2",children:[E.jsx("h2",{className:"text-lg font-bold mb-4",children:"Añadir Colaboradores"}),E.jsxs("form",{className:"flex flex-wrap justify-center flex-col",children:[E.jsx("div",{className:"overflow-y-auto h-64 flex flex-col",children:I.map(A=>E.jsx("div",{className:"flex items-center mb-2",children:E.jsxs("label",{className:"flex items-center",children:[E.jsx("input",{type:"checkbox",value:A.id,onChange:h,className:"w-4 h-4 mr-2 text-textGreen rounded border-gray-300 focus:ring-textGreen"}),E.jsx("span",{className:"text-gray-700",children:A.name})]})},A.id))}),E.jsx("button",{type:"button",onClick:p,className:"bg-loginGreen mb-2 hover:bg-textGreen text-white font-bold py-2 px-4 rounded",children:"Añadir"}),E.jsx("button",{type:"button",onClick:A=>{A.target===A.currentTarget&&c(!1)},className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",children:"Cerrar"})]})]})})};PA.propTypes={projectId:Q.string.isRequired,onClose:Q.func.isRequired};const RA=({project:t,children:e,createTask:n,handleAddCollaboratorsButton:r})=>{const i=t.color||"#FFD1D1";return E.jsxs("div",{className:"w-[90%] h-[85vh] grid grid-rows-[70px,100px,1fr,10%] flex-col rounded-[10px] overflow-hidden ",style:{backgroundColor:i},children:[E.jsxs("div",{className:"w-full h-[70px] pl-4  overflow-hidden flex justify-between bg-loginGreen text-tertiaryGreen font-bold text-[36px] ",children:[E.jsx("h2",{className:"pt-2",children:t==null?void 0:t.name}),E.jsx("div",{className:"bg-textGreen h-full w-[70px] flex items-center justify-center",children:E.jsx(As,{to:"/",children:E.jsx(ft,{icon:CM})})})]}),E.jsx("div",{className:"w-full flex items-center justify-center",children:E.jsxs("div",{className:"w-[350px] h-[55px] mt-10 mb-8 overflow-hidden flex rounded-[30px] border-outlineGrey/50 border-2 text-[14px] text-[#1D192B]",children:[E.jsx("button",{className:"w-full h-full  ",children:E.jsx("p",{children:"Todas"})}),E.jsx("button",{className:"w-full h-full  border-r-2 border-l-2 border-outlineGrey/50 ",children:E.jsx("p",{children:"Asignadas"})}),E.jsx("button",{className:"w-full h-full  ",children:E.jsx("p",{children:"Propias"})})]})}),e,E.jsxs("div",{className:"flex items-center w-full justify-between pr-9",children:[E.jsx("div",{className:"w-[206px]  h-[38px] ml-4 flex items-center justify-center  bg-loginGreen rounded-[19px]",children:E.jsxs("button",{onClick:r,className:"font-semibold flex items-center justify-center gap-2 text-primaryDark/80 text-[13px]",children:[E.jsxs("p",{children:[t.collaborators.length," colaboradores en total"]}),E.jsx(ft,{icon:SM})," "]})}),E.jsx("div",{className:"relative",children:E.jsxs("button",{onClick:n,className:"bg-loginGreen rounded-[16px] top-[-2rem]  right-1 absolute w-[150px] flex items-center justify-center gap-2 h-[65px] text-tertiaryGreen",children:[E.jsx(ft,{icon:_M}),E.jsx("p",{children:"Nueva tarea"})]})})]})]})};RA.propTypes={project:Q.shape({color:Q.string.isRequired}).isRequired};const z5={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},$5=({task:t,onClose:e})=>{const n=O.useRef(null),[r,i]=O.useState(),[s,o]=O.useState([]),[l,u]=O.useState([]),c=y=>{const b=s.find(M=>M.name===y);return b?b.color:"#6d6262"},h=y=>{n.current&&!n.current.contains(y.target)&&e()};O.useEffect(()=>{const y=async()=>{if(t.creatorId){const j=await l4(t.creatorId);i(j)}},b=async()=>{const j=await kA();o(j)},M=async()=>{if(t.assignedTo&&t.assignedTo.length>0){const j=await II(t.assignedTo);u(j)}};return y(),b(),M(),document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[t.creatorId,t.assignedTo,e]);const p=t.taskColor||"#FFED88",m=T_(p,.4),I=T_(p,.2),A=y=>y&&y.seconds?new Date(y.seconds*1e3):y&&!isNaN(Date.parse(y))?new Date(y):new Date,x=A(t.createdAt),C=isNaN(x)?"Fecha inválida":x.toLocaleDateString("es-ES",{year:"numeric",month:"2-digit",day:"2-digit"}),_=A(t.dueDate),g=isNaN(_)?"Fecha inválida":_.toLocaleDateString("es-ES",{year:"numeric",month:"2-digit",day:"2-digit"});return E.jsx("div",{className:"fixed inset-0  flex  items-center justify-center z-50 cursor-default",style:{backdropFilter:"blur(5px)"},children:E.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-[1000px] grid grid-rows-[60px,100px,1fr,60px] h-[755px] relative",ref:n,style:{backgroundColor:t.taskColor},children:[E.jsx("button",{onClick:y=>{y.stopPropagation(),console.log("Close button clicked"),e()},className:"absolute top-4 right-4 text-primaryDark hover:text-gray-800",children:E.jsx(ft,{icon:AM,size:"lg"})}),E.jsx("h2",{className:"text-[48px] font-bold mb-4",style:{color:m},children:t.name}),E.jsxs("div",{className:"flex items-center justify-between gap-2",children:[E.jsx("div",{className:"flex items-center justify-center gap-x-2",children:r&&E.jsxs(E.Fragment,{children:[E.jsx("img",{className:"rounded-full h-[40px] w-[40px]",src:r.photoURL,alt:r.name}),E.jsxs("div",{className:"font-bold",style:{color:m},children:[E.jsxs("p",{className:"text-[20px]",children:["Por ",r.name]}),E.jsxs("p",{className:"text-[12px]",children:["Creado el ",C]})]})]})}),E.jsxs("div",{className:"flex gap-2 flex-wrap",children:[t.priority&&E.jsx("p",{className:"p-1 rounded-[10px] bg-red-600 w-[110px] text-center h-[30px] text-[15px] font-semibold text-white overflow-hidden text-ellipsis",children:"Prioritaria"}),t.status&&t.status.map((y,b)=>E.jsx("p",{className:"p-1 rounded-[10px] w-[110px] text-center h-[30px] text-[15px] font-semibold text-white overflow-hidden text-ellipsis",style:{backgroundColor:c(y)},children:y.charAt(0).toUpperCase()+y.slice(1)},b))]})]}),E.jsx("div",{className:"rounded-[20px] p-2",style:{backgroundColor:I},children:E.jsx("p",{className:"text-primaryDark/80",children:t.description})}),E.jsxs("div",{className:"font-bold flex items-center justify-between",style:{color:m},children:[E.jsxs("p",{children:["Colaboradores: ",E.jsx("span",{className:"text-primaryDark",children:l.map(y=>y.name).join(", ")})]}),E.jsxs("p",{children:["Fecha limite: ",E.jsxs("span",{className:"text-primaryDark",children:[" ",g]})]})]})]})})},T_=(t,e)=>{let n=parseInt(t.slice(1,3),16),r=parseInt(t.slice(3,5),16),i=parseInt(t.slice(5,7),16);return n=Math.max(0,Math.min(255,n*(1-e))),r=Math.max(0,Math.min(255,r*(1-e))),i=Math.max(0,Math.min(255,i*(1-e))),`#${Math.round(n).toString(16).padStart(2,"0")}${Math.round(r).toString(16).padStart(2,"0")}${Math.round(i).toString(16).padStart(2,"0")}`},bA=({task:t,onClose:e,statuses:n,refetchProject:r})=>{const[i,s]=O.useState(t.name),[o,l]=O.useState(t.description),[u,c]=O.useState(t.dueDate),[h,p]=O.useState(t.taskColor),[m,I]=O.useState(t.priority||!1),[A,x]=O.useState(t.status[0]),C=async y=>{y.preventDefault();try{await F5(t.projectId,t.id,{name:i,description:o,dueDate:u,taskColor:h,priority:m,status:[A]}),r(),e()}catch(b){console.error("Error al actualizar la tarea:",b)}},_=I_(t.taskColor,-.4),g=I_(t.taskColor,.4);return E.jsx("div",{className:"fixed top-[80px] z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm shadow-sm",onClick:y=>y.target===y.currentTarget&&e(),children:E.jsxs("div",{style:{backgroundColor:t.taskColor,color:_,borderColor:g},className:"w-[600px] h-[700px] rounded-[20px] p-6 shadow-lg",children:[E.jsx("h2",{className:"text-[24px] font-bold mb-4",children:"Editar tarea"}),E.jsxs("form",{onSubmit:C,className:"flex flex-col gap-4",children:[E.jsxs("div",{className:"flex flex-col",children:[E.jsx("label",{className:"font-bold mb-2",children:"Nombre de la tarea"}),E.jsx("input",{type:"text",value:i,onChange:y=>s(y.target.value),className:"p-2 border rounded",style:{backgroundColor:g}})]}),E.jsxs("div",{className:"flex flex-col",children:[E.jsx("label",{className:"font-bold mb-2",children:"Descripción"}),E.jsx("textarea",{value:o,onChange:y=>l(y.target.value),className:"p-2 border rounded h-[150px]",style:{backgroundColor:g}})]}),E.jsxs("div",{className:"flex flex-col",children:[E.jsx("label",{className:"font-bold mb-2",children:"Fecha límite"}),E.jsx("input",{type:"datetime-local",value:u,onChange:y=>c(y.target.value),className:"p-2 border rounded",style:{backgroundColor:g}})]}),E.jsxs("div",{className:"flex justify-around items-center",children:[E.jsxs("div",{className:"flex flex-col items-center",children:[E.jsx("label",{className:"font-bold mb-2",children:"Color de la tarea"}),E.jsx("input",{type:"color",value:h,onChange:y=>p(y.target.value),className:"p-2 border rounded",style:{backgroundColor:h}})]}),E.jsxs("div",{className:"flex flex-col items-center",children:[E.jsx("label",{className:"font-bold mb-2",children:"Prioridad"}),E.jsx("div",{className:"flex items-center",children:E.jsx("input",{type:"checkbox",checked:m,onChange:()=>I(!m),className:"w-4 h-4 rounded-sm border-2 border-gray-300 checked:bg-[#34C759] checked:border-[#34C759] focus:ring-0",style:{backgroundColor:m?g:"transparent"}})})]})]}),E.jsxs("div",{className:"flex flex-col",children:[E.jsx("label",{className:"font-bold mb-2",children:"Estado"}),E.jsx("select",{value:A,onChange:y=>x(y.target.value),className:"p-2 border rounded",style:{backgroundColor:g},children:n.map(y=>E.jsx("option",{value:y.name,children:y.name.charAt(0).toUpperCase()+y.name.slice(1)},y.name))})]}),E.jsxs("div",{className:"flex gap-4 justify-between mt-4",children:[E.jsx("button",{type:"button",onClick:e,className:"px-4 py-2 rounded-[10px] ",style:{backgroundColor:_,color:t.taskColor},children:"Cancelar"}),E.jsx("button",{style:{backgroundColor:_,color:t.taskColor},type:"submit",className:"px-4 py-2 rounded-[10px]",children:"Guardar cambios"})]})]})]})})},I_=(t,e)=>{let n=parseInt(t.slice(1,3),16),r=parseInt(t.slice(3,5),16),i=parseInt(t.slice(5,7),16);return n=Math.max(0,Math.min(255,n*(1-e))),r=Math.max(0,Math.min(255,r*(1-e))),i=Math.max(0,Math.min(255,i*(1-e))),`#${Math.round(n).toString(16).padStart(2,"0")}${Math.round(r).toString(16).padStart(2,"0")}${Math.round(i).toString(16).padStart(2,"0")}`},W5=({task:t,onClose:e,statuses:n,refetchProject:r})=>{const i=O.useRef(null),[s,o]=O.useState(!1),l=A=>{A.preventDefault(),A.stopPropagation(),o(!0)},u=()=>{o(!1)},c=(A,x)=>{let C=parseInt(A.slice(1,3),16),_=parseInt(A.slice(3,5),16),g=parseInt(A.slice(5,7),16);return C=Math.min(255,Math.floor(C+(255-C)*x)),_=Math.min(255,Math.floor(_+(255-_)*x)),g=Math.min(255,Math.floor(g+(255-g)*x)),`#${(1<<24|C<<16|_<<8|g).toString(16).slice(1).toUpperCase()}`},h=(A,x)=>{let C=parseInt(A.slice(1,3),16),_=parseInt(A.slice(3,5),16),g=parseInt(A.slice(5,7),16);return C=Math.max(0,Math.floor(C*(1-x))),_=Math.max(0,Math.floor(_*(1-x))),g=Math.max(0,Math.floor(g*(1-x))),`#${(1<<24|C<<16|_<<8|g).toString(16).slice(1).toUpperCase()}`},p=t.taskColor||"#FFFFFF",m=c(p,.2),I=h(p,.4);return O.useEffect(()=>{const A=x=>{i.current&&!i.current.contains(x.target)&&e()};return document.addEventListener("mousedown",A),()=>{document.removeEventListener("mousedown",A)}},[e]),E.jsxs("div",{ref:i,className:"w-[140px] absolute top-56 h-[160px] z-20 p-1 gap-2 text-[14px] rounded-[15px] shadow-md font-bold flex items-center flex-col justify-center",style:{backgroundColor:m},children:[E.jsx("button",{className:"rounded-[15px] shadow-md w-[120px] h-[40px] hover:scale-105 transition-all",style:{backgroundColor:p,color:I},children:"Cambiar prioridad"}),E.jsx("button",{className:"rounded-[15px] shadow-md w-[120px] h-[40px] hover:scale-105 transition-all",style:{backgroundColor:p,color:I},children:"Cambiar estado"}),E.jsx("button",{className:"rounded-[15px] shadow-md w-[120px] h-[40px] hover:scale-105 transition-all",style:{backgroundColor:p,color:I},onClick:l,children:"Editar tarea"}),s&&E.jsx(bA,{task:t,onClose:u,statuses:n,refetchProject:r})]})},H5=({task:t,statuses:e,onDeleteTask:n,refetchProject:r})=>{const i=t.taskColor||"#FFED88",s=A_(i,.2),o=A_(i,.4),[l,u]=O.useState(!1),[c,h]=O.useState(!1),[p,m]=O.useState(!1),{user:I}=$t(),A=T=>{T.target.classList.contains("taskCard")&&u(!0)},x=T=>{T.preventDefault(),T.stopPropagation(),(T.target.closest(".taskCard button")||T.target.classList.contains("taskCard"))&&h(!c)},C=()=>{m(!0)},_=()=>{h(!1)},g=()=>{u(!1)},y=()=>{m(!1)},b=()=>{j5(t.projectId,t.id),n(t.id)},j=(T=>T&&T.seconds?new Date(T.seconds*1e3):T&&!isNaN(Date.parse(T))?new Date(T):new Date)(t.dueDate),S=isNaN(j)?"Fecha inválida":j.toLocaleDateString("es-ES",{year:"numeric",month:"2-digit",day:"2-digit"}),v=T=>{const k=e.find(R=>R.name===T);return k?k.color:"#6d6262"};return E.jsxs("div",{className:"taskCard w-[410px] h-[250px] rounded-[10px] shadow-lg p-6 grid grid-rows-[25px,142px,35px] relative cursor-pointer",style:{backgroundColor:i},onClick:A,children:[t.creatorId===I.uid&&E.jsx("button",{onClick:b,className:"w-[30px] taskCard rounded-full h-[30px] text-[18px] bg-[#BC1919] text-[#761c1c] flex items-center justify-center absolute top-[-.5rem] right-[-.5rem]",children:E.jsx(ft,{icon:EM})}),E.jsxs("div",{className:"flex taskCard items-center gap-3",children:[E.jsx(ft,{style:{color:o},icon:gM}),E.jsx("h3",{className:"text-[24px] taskCard font-semibold",style:{color:o},children:t.name})]}),E.jsx("div",{className:"taskCard",children:E.jsx("p",{className:"text-primaryDark/70 taskCard max-w-[336px] max-h-[142px] overflow-hidden text-ellipsis break-words",children:t.description})}),E.jsxs("div",{className:"grid taskCard items-center grid-cols-[40px,90px,1fr] gap-3",children:[E.jsx("button",{onClick:x,className:"w-[30px] h-[30px] rounded-full flex items-center justify-center",style:{backgroundColor:s},children:E.jsx(ft,{className:"",icon:TM})}),c&&E.jsx(W5,{refetchProject:r,task:t,onClose:_,statuses:e,onOpenEditModal:C}),E.jsxs("div",{className:"flex taskCard items-center gap-1",children:[E.jsx(ft,{icon:z5}),E.jsx("p",{className:"font-semibold text-[10px]",children:S})]}),E.jsxs("div",{className:"flex taskCard justify-end gap-[0.2rem]",children:[t.priority&&E.jsx("p",{className:"p-1 taskCard rounded-[10px] w-[110px] text-center h-[30px] text-[15px] font-semibold text-white overflow-hidden text-ellipsis",style:{backgroundColor:s},children:"Prioritaria"}),t.status.map((T,k)=>E.jsx("p",{className:"p-1 taskCard rounded-[10px] w-[110px] text-center h-[30px] text-[15px] font-semibold text-white overflow-hidden text-ellipsis",style:{backgroundColor:v(T)},children:T.charAt(0).toUpperCase()+T.slice(1)},k))]})]}),l&&E.jsx($5,{task:t,onClose:g}),p&&E.jsx(bA,{task:t,onClose:y,statuses:e,refetchProject:r})]})},A_=(t,e)=>{let n=parseInt(t.slice(1,3),16),r=parseInt(t.slice(3,5),16),i=parseInt(t.slice(5,7),16);return n=Math.max(0,Math.min(255,n*(1-e))),r=Math.max(0,Math.min(255,r*(1-e))),i=Math.max(0,Math.min(255,i*(1-e))),`#${Math.round(n).toString(16).padStart(2,"0")}${Math.round(r).toString(16).padStart(2,"0")}${Math.round(i).toString(16).padStart(2,"0")}`},G5=()=>{const{projectId:t}=WE(),[e,n]=O.useState(null),[r,i]=O.useState([]),[s,o]=O.useState(!1),[l,u]=O.useState(!1),{user:c}=$t();console.log(c);const h=()=>{o(!0)},p=()=>{e.creatorId===c.uid?u(!l):alert("Debe ser administrador o creador del proyecto para añadir participantes")},m=x=>{n(C=>({...C,tasks:[...C.tasks,x]}))},I=x=>{n(C=>({...C,tasks:C.tasks.filter(_=>_.id!==x)}))},A=async()=>{try{const x=await __(t);n(x)}catch(x){console.error("Error al refetch el proyecto:",x)}};return O.useEffect(()=>{A()},[t]),O.useEffect(()=>{t&&(async()=>{try{const C=await kA(t);console.log("Estados obtenidos:",C),i(C)}catch(C){console.error("Error al cargar los estados:",C)}})()},[t]),O.useEffect(()=>{(async()=>{if(!t){console.error("No se ha proporcionado un ID de proyecto válido.");return}try{const C=await __(t);n(C),console.log("proyecto",e)}catch(C){console.error("Error fetching project:",C)}})()},[t]),e?E.jsxs("div",{className:"mt-[80px] p-4 flex items-center justify-center flex-col",children:[s&&E.jsx(B5,{onClose:()=>{o(!1)},statuses:r,project:e,refetchProject:A,onCreateTask:m}),E.jsx(RA,{handleAddCollaboratorsButton:p,project:e,createTask:h,children:E.jsx("div",{className:"p-8 flex flex-wrap gap-4 justify-center overflow-y-auto",children:e.tasks&&e.tasks.length>0?e.tasks.filter(x=>x&&x.assignedTo&&x.creatorId?x.assignedTo.includes(c.uid)||x.creatorId===c.uid:!1).map(x=>x?E.jsx(H5,{refetchProject:A,onDeleteTask:I,statuses:r,task:x},x.id):null):E.jsx("h2",{children:"Todavia no hay ninguna task creada..."})})}),l&&E.jsx(PA,{projectId:t,onClose:()=>u(!1)})]}):E.jsx("p",{children:"Loading..."})};function q5(){const{setUser:t,clearUser:e}=$t();return O.useEffect(()=>{const n=ne.loading("Cargando..."),r=vD(a4,i=>{i?t(i):(e(),localStorage.removeItem("pinnedProjects"))});return ne.update(n,{render:"Cargado",type:"success",isLoading:!1,autoClose:1e3}),()=>{r(),ne.dismiss(n)}},[t,e]),E.jsxs(R2,{children:[E.jsx(M5,{}),E.jsxs(I2,{children:[E.jsx(Ao,{path:"/",element:E.jsx(Zf,{component:p5})}),E.jsx(Ao,{path:"/login",element:E.jsx(ep,{component:D5})}),E.jsx(Ao,{path:"/register",element:E.jsx(ep,{component:O5})}),E.jsx(Ao,{path:"/projects/:projectId",element:E.jsx(Zf,{component:G5})})]}),E.jsx(x5,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,theme:"dark",draggable:!0,pauseOnHover:!0})]})}VE(document.getElementById("root")).render(E.jsx(q5,{}));
