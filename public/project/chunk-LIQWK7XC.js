import{a as y}from"./chunk-5TBO732O.js";var q=y(r=>{"use strict";var d=Symbol.for("react.element"),M=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),G=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),Q=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),b=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=b&&e[b]||e["@@iterator"],typeof e=="function"?e:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,P={};function p(e,t,n){this.props=e,this.context=t,this.refs=P,this.updater=n||C}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function T(){}T.prototype=p.prototype;function S(e,t,n){this.props=e,this.context=t,this.refs=P,this.updater=n||C}var E=S.prototype=new T;E.constructor=S;$(E,p.prototype);E.isPureReactComponent=!0;var w=Array.isArray,g=Object.prototype.hasOwnProperty,R={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var u,o={},i=null,f=null;if(t!=null)for(u in t.ref!==void 0&&(f=t.ref),t.key!==void 0&&(i=""+t.key),t)g.call(t,u)&&!j.hasOwnProperty(u)&&(o[u]=t[u]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+2];o.children=c}if(e&&e.defaultProps)for(u in s=e.defaultProps,s)o[u]===void 0&&(o[u]=s[u]);return{$$typeof:d,type:e,key:i,ref:f,props:o,_owner:R.current}}function ee(e,t){return{$$typeof:d,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function k(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function te(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var O=/\/+/g;function v(e,t){return typeof e=="object"&&e!==null&&e.key!=null?te(""+e.key):t.toString(36)}function m(e,t,n,u,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var f=!1;if(e===null)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case d:case M:f=!0}}if(f)return f=e,o=o(f),e=u===""?"."+v(f,0):u,w(o)?(n="",e!=null&&(n=e.replace(O,"$&/")+"/"),m(o,t,n,"",function(a){return a})):o!=null&&(k(o)&&(o=ee(o,n+(!o.key||f&&f.key===o.key?"":(""+o.key).replace(O,"$&/")+"/")+e)),t.push(o)),1;if(f=0,u=u===""?".":u+":",w(e))for(var s=0;s<e.length;s++){i=e[s];var c=u+v(i,s);f+=m(i,t,n,c,o)}else if(c=Z(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=u+v(i,s++),f+=m(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return f}function h(e,t,n){if(e==null)return e;var u=[],o=0;return m(e,u,"","",function(i){return t.call(n,i,o++)}),u}function re(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},_={transition:null},ne={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:_,ReactCurrentOwner:R};function I(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:h,forEach:function(e,t,n){h(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return h(e,function(){t++}),t},toArray:function(e){return h(e,function(t){return t})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};r.Component=p;r.Fragment=B;r.Profiler=z;r.PureComponent=S;r.StrictMode=H;r.Suspense=K;r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne;r.act=I;r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=$({},e.props),o=e.key,i=e.ref,f=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,f=R.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)g.call(t,c)&&!j.hasOwnProperty(c)&&(u[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)u.children=n;else if(1<c){s=Array(c);for(var a=0;a<c;a++)s[a]=arguments[a+2];u.children=s}return{$$typeof:d,type:e.type,key:o,ref:i,props:u,_owner:f}};r.createContext=function(e){return e={$$typeof:G,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Y,_context:e},e.Consumer=e};r.createElement=x;r.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t};r.createRef=function(){return{current:null}};r.forwardRef=function(e){return{$$typeof:J,render:e}};r.isValidElement=k;r.lazy=function(e){return{$$typeof:X,_payload:{_status:-1,_result:e},_init:re}};r.memo=function(e,t){return{$$typeof:Q,type:e,compare:t===void 0?null:t}};r.startTransition=function(e){var t=_.transition;_.transition={};try{e()}finally{_.transition=t}};r.unstable_act=I;r.useCallback=function(e,t){return l.current.useCallback(e,t)};r.useContext=function(e){return l.current.useContext(e)};r.useDebugValue=function(){};r.useDeferredValue=function(e){return l.current.useDeferredValue(e)};r.useEffect=function(e,t){return l.current.useEffect(e,t)};r.useId=function(){return l.current.useId()};r.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)};r.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};r.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};r.useMemo=function(e,t){return l.current.useMemo(e,t)};r.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)};r.useRef=function(e){return l.current.useRef(e)};r.useState=function(e){return l.current.useState(e)};r.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)};r.useTransition=function(){return l.current.useTransition()};r.version="18.3.1"});var oe=y((fe,D)=>{"use strict";D.exports=q()});var V=y((le,N)=>{"use strict";var ue="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";N.exports=ue});var L=y((ae,U)=>{"use strict";var ce=V();function A(){}function F(){}F.resetWarningCache=A;U.exports=function(){function e(u,o,i,f,s,c){if(c!==ce){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:F,resetWarningCache:A};return n.PropTypes=n,n}});var ie=y((de,W)=>{W.exports=L()();var pe,ye});export{oe as a,ie as b};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
