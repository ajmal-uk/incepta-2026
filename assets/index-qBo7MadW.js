(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Sd={exports:{}},jo={};var lv;function $S(){if(lv)return jo;lv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return jo.Fragment=e,jo.jsx=i,jo.jsxs=i,jo}var cv;function eM(){return cv||(cv=1,Sd.exports=$S()),Sd.exports}var T=eM(),Md={exports:{}},rt={};var uv;function tM(){if(uv)return rt;uv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function _(O,ne,_e){this.props=O,this.context=ne,this.refs=S,this.updater=_e||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=_.prototype;function U(O,ne,_e){this.props=O,this.context=ne,this.refs=S,this.updater=_e||E}var P=U.prototype=new D;P.constructor=U,A(P,_.prototype),P.isPureReactComponent=!0;var I=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function w(O,ne,_e){var Re=_e.ref;return{$$typeof:s,type:O,key:ne,ref:Re!==void 0?Re:null,props:_e}}function N(O,ne){return w(O.type,ne,O.props)}function j(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function oe(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(_e){return ne[_e]})}var se=/\/+/g;function me(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?oe(""+O.key):ne.toString(36)}function de(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(ne){O.status==="pending"&&(O.status="fulfilled",O.value=ne)},function(ne){O.status==="pending"&&(O.status="rejected",O.reason=ne)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,ne,_e,Re,He){var te=typeof O;(te==="undefined"||te==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(te){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case s:case e:fe=!0;break;case v:return fe=O._init,F(fe(O._payload),ne,_e,Re,He)}}if(fe)return He=He(O),fe=Re===""?"."+me(O,0):Re,I(He)?(_e="",fe!=null&&(_e=fe.replace(se,"$&/")+"/"),F(He,ne,_e,"",function(Ge){return Ge})):He!=null&&(j(He)&&(He=N(He,_e+(He.key==null||O&&O.key===He.key?"":(""+He.key).replace(se,"$&/")+"/")+fe)),ne.push(He)),1;fe=0;var Ne=Re===""?".":Re+":";if(I(O))for(var je=0;je<O.length;je++)Re=O[je],te=Ne+me(Re,je),fe+=F(Re,ne,_e,te,He);else if(je=M(O),typeof je=="function")for(O=je.call(O),je=0;!(Re=O.next()).done;)Re=Re.value,te=Ne+me(Re,je++),fe+=F(Re,ne,_e,te,He);else if(te==="object"){if(typeof O.then=="function")return F(de(O),ne,_e,Re,He);throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return fe}function G(O,ne,_e){if(O==null)return O;var Re=[],He=0;return F(O,Re,"","",function(te){return ne.call(_e,te,He++)}),Re}function ie(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(_e){(O._status===0||O._status===-1)&&(O._status=1,O._result=_e)},function(_e){(O._status===0||O._status===-1)&&(O._status=2,O._result=_e)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var be=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Se={map:G,forEach:function(O,ne,_e){G(O,function(){ne.apply(this,arguments)},_e)},count:function(O){var ne=0;return G(O,function(){ne++}),ne},toArray:function(O){return G(O,function(ne){return ne})||[]},only:function(O){if(!j(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return rt.Activity=g,rt.Children=Se,rt.Component=_,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=U,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,rt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},rt.cache=function(O){return function(){return O.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(O,ne,_e){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Re=A({},O.props),He=O.key;if(ne!=null)for(te in ne.key!==void 0&&(He=""+ne.key),ne)!Z.call(ne,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ne.ref===void 0||(Re[te]=ne[te]);var te=arguments.length-2;if(te===1)Re.children=_e;else if(1<te){for(var fe=Array(te),Ne=0;Ne<te;Ne++)fe[Ne]=arguments[Ne+2];Re.children=fe}return w(O.type,He,Re)},rt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},rt.createElement=function(O,ne,_e){var Re,He={},te=null;if(ne!=null)for(Re in ne.key!==void 0&&(te=""+ne.key),ne)Z.call(ne,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(He[Re]=ne[Re]);var fe=arguments.length-2;if(fe===1)He.children=_e;else if(1<fe){for(var Ne=Array(fe),je=0;je<fe;je++)Ne[je]=arguments[je+2];He.children=Ne}if(O&&O.defaultProps)for(Re in fe=O.defaultProps,fe)He[Re]===void 0&&(He[Re]=fe[Re]);return w(O,te,He)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(O){return{$$typeof:h,render:O}},rt.isValidElement=j,rt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ie}},rt.memo=function(O,ne){return{$$typeof:p,type:O,compare:ne===void 0?null:ne}},rt.startTransition=function(O){var ne=z.T,_e={};z.T=_e;try{var Re=O(),He=z.S;He!==null&&He(_e,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(B,be)}catch(te){be(te)}finally{ne!==null&&_e.types!==null&&(ne.types=_e.types),z.T=ne}},rt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},rt.use=function(O){return z.H.use(O)},rt.useActionState=function(O,ne,_e){return z.H.useActionState(O,ne,_e)},rt.useCallback=function(O,ne){return z.H.useCallback(O,ne)},rt.useContext=function(O){return z.H.useContext(O)},rt.useDebugValue=function(){},rt.useDeferredValue=function(O,ne){return z.H.useDeferredValue(O,ne)},rt.useEffect=function(O,ne){return z.H.useEffect(O,ne)},rt.useEffectEvent=function(O){return z.H.useEffectEvent(O)},rt.useId=function(){return z.H.useId()},rt.useImperativeHandle=function(O,ne,_e){return z.H.useImperativeHandle(O,ne,_e)},rt.useInsertionEffect=function(O,ne){return z.H.useInsertionEffect(O,ne)},rt.useLayoutEffect=function(O,ne){return z.H.useLayoutEffect(O,ne)},rt.useMemo=function(O,ne){return z.H.useMemo(O,ne)},rt.useOptimistic=function(O,ne){return z.H.useOptimistic(O,ne)},rt.useReducer=function(O,ne,_e){return z.H.useReducer(O,ne,_e)},rt.useRef=function(O){return z.H.useRef(O)},rt.useState=function(O){return z.H.useState(O)},rt.useSyncExternalStore=function(O,ne,_e){return z.H.useSyncExternalStore(O,ne,_e)},rt.useTransition=function(){return z.H.useTransition()},rt.version="19.2.3",rt}var fv;function sp(){return fv||(fv=1,Md.exports=tM()),Md.exports}var ae=sp(),bd={exports:{}},Xo={},Ed={exports:{}},Td={};var dv;function nM(){return dv||(dv=1,(function(s){function e(F,G){var ie=F.length;F.push(G);e:for(;0<ie;){var be=ie-1>>>1,Se=F[be];if(0<l(Se,G))F[be]=G,F[ie]=Se,ie=be;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var G=F[0],ie=F.pop();if(ie!==G){F[0]=ie;e:for(var be=0,Se=F.length,O=Se>>>1;be<O;){var ne=2*(be+1)-1,_e=F[ne],Re=ne+1,He=F[Re];if(0>l(_e,ie))Re<Se&&0>l(He,_e)?(F[be]=He,F[Re]=ie,be=Re):(F[be]=_e,F[ne]=ie,be=ne);else if(Re<Se&&0>l(He,ie))F[be]=He,F[Re]=ie,be=Re;else break e}}return G}function l(F,G){var ie=F.sortIndex-G.sortIndex;return ie!==0?ie:F.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,g=null,y=3,M=!1,E=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function P(F){for(var G=i(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=F)r(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function I(F){if(A=!1,P(F),!E)if(i(m)!==null)E=!0,B||(B=!0,oe());else{var G=i(p);G!==null&&de(I,G.startTime-F)}}var B=!1,z=-1,Z=5,w=-1;function N(){return S?!0:!(s.unstable_now()-w<Z)}function j(){if(S=!1,B){var F=s.unstable_now();w=F;var G=!0;try{e:{E=!1,A&&(A=!1,D(z),z=-1),M=!0;var ie=y;try{t:{for(P(F),g=i(m);g!==null&&!(g.expirationTime>F&&N());){var be=g.callback;if(typeof be=="function"){g.callback=null,y=g.priorityLevel;var Se=be(g.expirationTime<=F);if(F=s.unstable_now(),typeof Se=="function"){g.callback=Se,P(F),G=!0;break t}g===i(m)&&r(m),P(F)}else r(m);g=i(m)}if(g!==null)G=!0;else{var O=i(p);O!==null&&de(I,O.startTime-F),G=!1}}break e}finally{g=null,y=ie,M=!1}G=void 0}}finally{G?oe():B=!1}}}var oe;if(typeof U=="function")oe=function(){U(j)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,me=se.port2;se.port1.onmessage=j,oe=function(){me.postMessage(null)}}else oe=function(){_(j,0)};function de(F,G){z=_(function(){F(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(F){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var ie=y;y=G;try{return F()}finally{y=ie}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ie=y;y=F;try{return G()}finally{y=ie}},s.unstable_scheduleCallback=function(F,G,ie){var be=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?be+ie:be):ie=be,F){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ie+Se,F={id:v++,callback:G,priorityLevel:F,startTime:ie,expirationTime:Se,sortIndex:-1},ie>be?(F.sortIndex=ie,e(p,F),i(m)===null&&F===i(p)&&(A?(D(z),z=-1):A=!0,de(I,ie-be))):(F.sortIndex=Se,e(m,F),E||M||(E=!0,B||(B=!0,oe()))),F},s.unstable_shouldYield=N,s.unstable_wrapCallback=function(F){var G=y;return function(){var ie=y;y=G;try{return F.apply(this,arguments)}finally{y=ie}}}})(Td)),Td}var hv;function iM(){return hv||(hv=1,Ed.exports=nM()),Ed.exports}var Ad={exports:{}},Un={};var pv;function aM(){if(pv)return Un;pv=1;var s=sp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Un.flushSync=function(m){var p=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=v,r.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.2.3",Un}var mv;function rM(){if(mv)return Ad.exports;mv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ad.exports=aM(),Ad.exports}var gv;function sM(){if(gv)return Xo;gv=1;var s=iM(),e=sp(),i=rM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var x=!1,R=u.child;R;){if(R===a){x=!0,a=u,o=d;break}if(R===o){x=!0,o=u,a=d;break}R=R.sibling}if(!x){for(R=d.child;R;){if(R===a){x=!0,a=d,o=u;break}if(R===o){x=!0,o=d,a=u;break}R=R.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case B:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case U:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:me(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return me(t(n))}catch{}}return null}var de=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},be=[],Se=-1;function O(t){return{current:t}}function ne(t){0>Se||(t.current=be[Se],be[Se]=null,Se--)}function _e(t,n){Se++,be[Se]=t.current,t.current=n}var Re=O(null),He=O(null),te=O(null),fe=O(null);function Ne(t,n){switch(_e(te,n),_e(He,t),_e(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?N0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=N0(n),t=U0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(Re),_e(Re,t)}function je(){ne(Re),ne(He),ne(te)}function Ge(t){t.memoizedState!==null&&_e(fe,t);var n=Re.current,a=U0(n,t.type);n!==a&&(_e(He,t),_e(Re,a))}function pt(t){He.current===t&&(ne(Re),ne(He)),fe.current===t&&(ne(fe),Ho._currentValue=ie)}var en,_t;function mt(t){if(en===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);en=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+t+_t}var wt=!1;function ot(t,n){if(!t||wt)return"";wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ce){var ee=ce}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(ce){ee=ce}t.call(ve.prototype)}}else{try{throw Error()}catch(ce){ee=ce}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ce){if(ce&&ee&&typeof ce.stack=="string")return[ce.stack,ee.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],R=d[1];if(x&&R){var H=x.split(`
`),J=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===J.length)for(o=H.length-1,u=J.length-1;1<=o&&0<=u&&H[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==J[u]){var he=`
`+H[o].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=o&&0<=u);break}}}finally{wt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?mt(a):""}function tn(t,n){switch(t.tag){case 26:case 27:case 5:return mt(t.type);case 16:return mt("Lazy");case 13:return t.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return mt("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=tn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Zt=Object.prototype.hasOwnProperty,bt=s.unstable_scheduleCallback,Lt=s.unstable_cancelCallback,Ye=s.unstable_shouldYield,L=s.unstable_requestPaint,b=s.unstable_now,W=s.unstable_getCurrentPriorityLevel,pe=s.unstable_ImmediatePriority,ye=s.unstable_UserBlockingPriority,ue=s.unstable_NormalPriority,Ke=s.unstable_LowPriority,we=s.unstable_IdlePriority,Xe=s.log,nt=s.unstable_setDisableYieldValue,Ee=null,Te=null;function Fe(t){if(typeof Xe=="function"&&nt(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Ee,t)}catch{}}var Ie=Math.clz32?Math.clz32:X,De=Math.log,ct=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(De(t)/ct|0)|0}var Le=256,Ae=262144,ze=4194304;function Me(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Me(o):(x&=R,x!==0?u=Me(x):a||(a=R&~t,a!==0&&(u=Me(a))))):(R=o&~d,R!==0?u=Me(R):x!==0?u=Me(x):a||(a=o&~t,a!==0&&(u=Me(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(){var t=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),t}function Et(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xi(t,n,a,o,u,d){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,J=t.hiddenUpdates;for(a=x&~a;0<a;){var he=31-Ie(a),ve=1<<he;R[he]=0,H[he]=-1;var ee=J[he];if(ee!==null)for(J[he]=null,he=0;he<ee.length;he++){var ce=ee[he];ce!==null&&(ce.lane&=-536870913)}a&=~ve}o!==0&&ml(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function ml(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ie(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Qs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ie(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function kr(t,n){var a=n&-n;return a=(a&42)!==0?1:Js(a),(a&(t.suspendedLanes|n))!==0?0:a}function Js(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function jr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $s(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:tv(t.type))}function Li(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var ri=Math.random().toString(36).slice(2),ln="__reactFiber$"+ri,yn="__reactProps$"+ri,yi="__reactContainer$"+ri,Xr="__reactEvents$"+ri,Wr="__reactListeners$"+ri,gl="__reactHandles$"+ri,eo="__reactResources$"+ri,ur="__reactMarker$"+ri;function to(t){delete t[ln],delete t[yn],delete t[Xr],delete t[Wr],delete t[gl]}function wa(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=B0(t);t!==null;){if(a=t[ln])return a;t=B0(t)}return n}t=a,a=t.parentNode}return null}function Da(t){if(t=t[ln]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function fr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Na(t){var n=t[eo];return n||(n=t[eo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(t){t[ur]=!0}var q=new Set,le={};function $(t,n){K(t,n),K(t+"Capture",n)}function K(t,n){for(le[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Be={},Oe={};function Ve(t){return Zt.call(Oe,t)?!0:Zt.call(Be,t)?!1:Ue.test(t)?Oe[t]=!0:(Be[t]=!0,!1)}function We(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function $e(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wt(t){if(!t._valueTracker){var n=Dt(t)?"checked":"value";t._valueTracker=Kt(t,n,""+t[n])}}function Ot(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Dt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nt=/[\n"\\]/g;function at(t){return t.replace(Nt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(t,n,a,o,u,d,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Mn(t,x,et(n)):a!=null?Mn(t,x,et(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+et(R):t.removeAttribute("name")}function Yi(t,n,a,o,u,d,x,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Wt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Wt(t)}function Mn(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function si(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ft(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function bn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(de(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Wt(t)}function pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function qr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Tn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Tn(t,d,n[d])}function Si(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(t){return Kx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Zi(){}var vu=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yr=null,Zr=null;function Dp(t){var n=Da(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Sn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[yn]||null;if(!u)throw Error(r(90));Sn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ot(o)}break e;case"textarea":Ft(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&si(t,!!a.multiple,n,!1)}}}var xu=!1;function Np(t,n,a){if(xu)return t(n,a);xu=!0;try{var o=t(n);return o}finally{if(xu=!1,(Yr!==null||Zr!==null)&&(ac(),Yr&&(n=Yr,t=Zr,Zr=Yr=null,Dp(n),t)))for(n=0;n<t.length;n++)Dp(t[n])}}function no(t,n){var a=t.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(Ki)try{var io={};Object.defineProperty(io,"passive",{get:function(){yu=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{yu=!1}var Ua=null,Su=null,_l=null;function Up(){if(_l)return _l;var t,n=Su,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[d-o];o++);return _l=u.slice(t,1<o?1-o:void 0)}function xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function Lp(){return!1}function Hn(t){function n(a,o,u,d,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?yl:Lp,this.isPropagationStopped=Lp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Hn(dr),ao=g({},dr,{view:0,detail:0}),Qx=Hn(ao),Mu,bu,ro,Ml=g({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Mu=t.screenX-ro.screenX,bu=t.screenY-ro.screenY):bu=Mu=0,ro=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),Op=Hn(Ml),Jx=g({},Ml,{dataTransfer:0}),$x=Hn(Jx),ey=g({},ao,{relatedTarget:0}),Eu=Hn(ey),ty=g({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),ny=Hn(ty),iy=g({},dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ay=Hn(iy),ry=g({},dr,{data:0}),Pp=Hn(ry),sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ly[t])?!!n[t]:!1}function Tu(){return cy}var uy=g({},ao,{key:function(t){if(t.key){var n=sy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fy=Hn(uy),dy=g({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=Hn(dy),hy=g({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),py=Hn(hy),my=g({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),gy=Hn(my),vy=g({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_y=Hn(vy),xy=g({},dr,{newState:0,oldState:0}),yy=Hn(xy),Sy=[9,13,27,32],Au=Ki&&"CompositionEvent"in window,so=null;Ki&&"documentMode"in document&&(so=document.documentMode);var My=Ki&&"TextEvent"in window&&!so,zp=Ki&&(!Au||so&&8<so&&11>=so),Fp=" ",Bp=!1;function Hp(t,n){switch(t){case"keyup":return Sy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function by(t,n){switch(t){case"compositionend":return Gp(n);case"keypress":return n.which!==32?null:(Bp=!0,Fp);case"textInput":return t=n.data,t===Fp&&Bp?null:t;default:return null}}function Ey(t,n){if(Kr)return t==="compositionend"||!Au&&Hp(t,n)?(t=Up(),_l=Su=Ua=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zp&&n.locale!=="ko"?null:n.data;default:return null}}var Ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ty[t.type]:n==="textarea"}function kp(t,n,a,o){Yr?Zr?Zr.push(o):Zr=[o]:Yr=o,n=fc(n,"onChange"),0<n.length&&(a=new Sl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var oo=null,lo=null;function Ay(t){T0(t,0)}function bl(t){var n=fr(t);if(Ot(n))return t}function jp(t,n){if(t==="change")return n}var Xp=!1;if(Ki){var Ru;if(Ki){var Cu="oninput"in document;if(!Cu){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Cu=typeof Wp.oninput=="function"}Ru=Cu}else Ru=!1;Xp=Ru&&(!document.documentMode||9<document.documentMode)}function qp(){oo&&(oo.detachEvent("onpropertychange",Yp),lo=oo=null)}function Yp(t){if(t.propertyName==="value"&&bl(lo)){var n=[];kp(n,lo,t,_u(t)),Np(Ay,n)}}function Ry(t,n,a){t==="focusin"?(qp(),oo=n,lo=a,oo.attachEvent("onpropertychange",Yp)):t==="focusout"&&qp()}function Cy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(lo)}function wy(t,n){if(t==="click")return bl(n)}function Dy(t,n){if(t==="input"||t==="change")return bl(n)}function Ny(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Ny;function co(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Zt.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,n){var a=Zp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zp(a)}}function Qp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Qp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Jp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function wu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Uy=Ki&&"documentMode"in document&&11>=document.documentMode,Qr=null,Du=null,uo=null,Nu=!1;function $p(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||Qr==null||Qr!==Qe(o)||(o=Qr,"selectionStart"in o&&wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),uo&&co(uo,o)||(uo=o,o=fc(Du,"onSelect"),0<o.length&&(n=new Sl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Qr)))}function hr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Jr={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},Uu={},em={};Ki&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function pr(t){if(Uu[t])return Uu[t];if(!Jr[t])return t;var n=Jr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in em)return Uu[t]=n[a];return t}var tm=pr("animationend"),nm=pr("animationiteration"),im=pr("animationstart"),Ly=pr("transitionrun"),Oy=pr("transitionstart"),Py=pr("transitioncancel"),am=pr("transitionend"),rm=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Mi(t,n){rm.set(t,n),$(n,[t])}var El=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],$r=0,Ou=0;function Tl(){for(var t=$r,n=Ou=$r=0;n<t;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var d=oi[n];if(oi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&sm(a,u,d)}}function Al(t,n,a,o){oi[$r++]=t,oi[$r++]=n,oi[$r++]=a,oi[$r++]=o,Ou|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Pu(t,n,a,o){return Al(t,n,a,o),Rl(t)}function mr(t,n){return Al(t,null,null,n),Rl(t)}function sm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Ie(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Rl(t){if(50<Lo)throw Lo=0,Xf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var es={};function Iy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,o){return new Iy(t,n,a,o)}function Iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qi(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function om(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Cl(t,n,a,o,u,d){var x=0;if(o=t,typeof t=="function")Iu(t)&&(x=1);else if(typeof t=="string")x=GS(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=Zn(31,a,n,u),t.elementType=w,t.lanes=d,t;case A:return gr(a.children,u,d,n);case S:x=8,u|=24;break;case _:return t=Zn(12,a,n,u|2),t.elementType=_,t.lanes=d,t;case I:return t=Zn(13,a,n,u),t.elementType=I,t.lanes=d,t;case B:return t=Zn(19,a,n,u),t.elementType=B,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:x=10;break e;case D:x=9;break e;case P:x=11;break e;case z:x=14;break e;case Z:x=16,o=null;break e}x=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Zn(x,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function gr(t,n,a,o){return t=Zn(7,t,o,n),t.lanes=a,t}function zu(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function lm(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function Fu(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var cm=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=cm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},cm.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var ts=[],ns=0,wl=null,fo=0,ci=[],ui=0,La=null,Oi=1,Pi="";function Ji(t,n){ts[ns++]=fo,ts[ns++]=wl,wl=t,fo=n}function um(t,n,a){ci[ui++]=Oi,ci[ui++]=Pi,ci[ui++]=La,La=t;var o=Oi;t=Pi;var u=32-Ie(o)-1;o&=~(1<<u),a+=1;var d=32-Ie(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Oi=1<<32-Ie(n)+u|a<<u|o,Pi=d+t}else Oi=1<<d|a<<u|o,Pi=t}function Bu(t){t.return!==null&&(Ji(t,1),um(t,1,0))}function Hu(t){for(;t===wl;)wl=ts[--ns],ts[ns]=null,fo=ts[--ns],ts[ns]=null;for(;t===La;)La=ci[--ui],ci[ui]=null,Pi=ci[--ui],ci[ui]=null,Oi=ci[--ui],ci[ui]=null}function fm(t,n){ci[ui++]=Oi,ci[ui++]=Pi,ci[ui++]=La,Oi=n.id,Pi=n.overflow,La=t}var An=null,qt=null,St=!1,Oa=null,fi=!1,Gu=Error(r(519));function Pa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(li(n,t)),Gu}function dm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[yn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)vt(Po[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Yi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),bn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||w0(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Pa(t,!0)}function hm(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:An=An.return}}function is(t){if(t!==An)return!1;if(!St)return hm(t),St=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||sd(t.type,t.memoizedProps)),a=!a),a&&qt&&Pa(t),hm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=F0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=F0(t)}else n===27?(n=qt,Za(t.type)?(t=fd,fd=null,qt=t):qt=n):qt=An?hi(t.stateNode.nextSibling):null;return!0}function vr(){qt=An=null,St=!1}function Vu(){var t=Oa;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),Oa=null),t}function ho(t){Oa===null?Oa=[t]:Oa.push(t)}var ku=O(null),_r=null,$i=null;function Ia(t,n,a){_e(ku,n._currentValue),n._currentValue=a}function ea(t){t._currentValue=ku.current,ne(ku)}function ju(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Xu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),ju(d.return,a,t),o||(x=null);break e}d=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),ju(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function as(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var R=u.type;Yn(u.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(u===fe.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ho):t=[Ho])}u=u.return}t!==null&&Xu(n,t,a,o),n.flags|=262144}function Dl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xr(t){_r=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return pm(_r,t)}function Nl(t,n){return _r===null&&xr(t),pm(t,n)}function pm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(r(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var zy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Fy=s.unstable_scheduleCallback,By=s.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new zy,data:new Map,refCount:0}}function po(t){t.refCount--,t.refCount===0&&Fy(By,function(){t.controller.abort()})}var mo=null,qu=0,rs=0,ss=null;function Hy(t,n){if(mo===null){var a=mo=[];qu=0,rs=Qf(),ss={status:"pending",value:void 0,then:function(o){a.push(o)}}}return qu++,n.then(mm,mm),n}function mm(){if(--qu===0&&mo!==null){ss!==null&&(ss.status="fulfilled");var t=mo;mo=null,rs=0,ss=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Gy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var gm=F.S;F.S=function(t,n){$g=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Hy(t,n),gm!==null&&gm(t,n)};var yr=O(null);function Yu(){var t=yr.current;return t!==null?t:Xt.pooledCache}function Ul(t,n){n===null?_e(yr,yr.current):_e(yr,n.pool)}function vm(){var t=Yu();return t===null?null:{parent:cn._currentValue,pool:t}}var os=Error(r(460)),Zu=Error(r(474)),Ll=Error(r(542)),Ol={then:function(){}};function _m(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sm(t),t;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sm(t),t}throw Mr=n,os}}function Sr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Mr=a,os):a}}var Mr=null;function ym(){if(Mr===null)throw Error(r(459));var t=Mr;return Mr=null,t}function Sm(t){if(t===os||t===Ll)throw Error(r(483))}var ls=null,go=0;function Pl(t){var n=go;return go+=1,ls===null&&(ls=[]),xm(ls,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Il(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Mm(t){function n(Y,k){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[k],Y.flags|=16):Q.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Qi(Y,k),Y.index=0,Y.sibling=null,Y}function d(Y,k,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<k?(Y.flags|=67108866,k):Q):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function x(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,k,Q,ge){return k===null||k.tag!==6?(k=zu(Q,Y.mode,ge),k.return=Y,k):(k=u(k,Q),k.return=Y,k)}function H(Y,k,Q,ge){var Je=Q.type;return Je===A?he(Y,k,Q.props.children,ge,Q.key):k!==null&&(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&Sr(Je)===k.type)?(k=u(k,Q.props),vo(k,Q),k.return=Y,k):(k=Cl(Q.type,Q.key,Q.props,null,Y.mode,ge),vo(k,Q),k.return=Y,k)}function J(Y,k,Q,ge){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=Fu(Q,Y.mode,ge),k.return=Y,k):(k=u(k,Q.children||[]),k.return=Y,k)}function he(Y,k,Q,ge,Je){return k===null||k.tag!==7?(k=gr(Q,Y.mode,ge,Je),k.return=Y,k):(k=u(k,Q),k.return=Y,k)}function ve(Y,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=zu(""+k,Y.mode,Q),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return Q=Cl(k.type,k.key,k.props,null,Y.mode,Q),vo(Q,k),Q.return=Y,Q;case E:return k=Fu(k,Y.mode,Q),k.return=Y,k;case Z:return k=Sr(k),ve(Y,k,Q)}if(de(k)||oe(k))return k=gr(k,Y.mode,Q,null),k.return=Y,k;if(typeof k.then=="function")return ve(Y,Pl(k),Q);if(k.$$typeof===U)return ve(Y,Nl(Y,k),Q);Il(Y,k)}return null}function ee(Y,k,Q,ge){var Je=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Je!==null?null:R(Y,k,""+Q,ge);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Je?H(Y,k,Q,ge):null;case E:return Q.key===Je?J(Y,k,Q,ge):null;case Z:return Q=Sr(Q),ee(Y,k,Q,ge)}if(de(Q)||oe(Q))return Je!==null?null:he(Y,k,Q,ge,null);if(typeof Q.then=="function")return ee(Y,k,Pl(Q),ge);if(Q.$$typeof===U)return ee(Y,k,Nl(Y,Q),ge);Il(Y,Q)}return null}function ce(Y,k,Q,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Y=Y.get(Q)||null,R(k,Y,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return Y=Y.get(ge.key===null?Q:ge.key)||null,H(k,Y,ge,Je);case E:return Y=Y.get(ge.key===null?Q:ge.key)||null,J(k,Y,ge,Je);case Z:return ge=Sr(ge),ce(Y,k,Q,ge,Je)}if(de(ge)||oe(ge))return Y=Y.get(Q)||null,he(k,Y,ge,Je,null);if(typeof ge.then=="function")return ce(Y,k,Q,Pl(ge),Je);if(ge.$$typeof===U)return ce(Y,k,Q,Nl(k,ge),Je);Il(k,ge)}return null}function ke(Y,k,Q,ge){for(var Je=null,At=null,Ze=k,ut=k=0,yt=null;Ze!==null&&ut<Q.length;ut++){Ze.index>ut?(yt=Ze,Ze=null):yt=Ze.sibling;var Rt=ee(Y,Ze,Q[ut],ge);if(Rt===null){Ze===null&&(Ze=yt);break}t&&Ze&&Rt.alternate===null&&n(Y,Ze),k=d(Rt,k,ut),At===null?Je=Rt:At.sibling=Rt,At=Rt,Ze=yt}if(ut===Q.length)return a(Y,Ze),St&&Ji(Y,ut),Je;if(Ze===null){for(;ut<Q.length;ut++)Ze=ve(Y,Q[ut],ge),Ze!==null&&(k=d(Ze,k,ut),At===null?Je=Ze:At.sibling=Ze,At=Ze);return St&&Ji(Y,ut),Je}for(Ze=o(Ze);ut<Q.length;ut++)yt=ce(Ze,Y,ut,Q[ut],ge),yt!==null&&(t&&yt.alternate!==null&&Ze.delete(yt.key===null?ut:yt.key),k=d(yt,k,ut),At===null?Je=yt:At.sibling=yt,At=yt);return t&&Ze.forEach(function(er){return n(Y,er)}),St&&Ji(Y,ut),Je}function tt(Y,k,Q,ge){if(Q==null)throw Error(r(151));for(var Je=null,At=null,Ze=k,ut=k=0,yt=null,Rt=Q.next();Ze!==null&&!Rt.done;ut++,Rt=Q.next()){Ze.index>ut?(yt=Ze,Ze=null):yt=Ze.sibling;var er=ee(Y,Ze,Rt.value,ge);if(er===null){Ze===null&&(Ze=yt);break}t&&Ze&&er.alternate===null&&n(Y,Ze),k=d(er,k,ut),At===null?Je=er:At.sibling=er,At=er,Ze=yt}if(Rt.done)return a(Y,Ze),St&&Ji(Y,ut),Je;if(Ze===null){for(;!Rt.done;ut++,Rt=Q.next())Rt=ve(Y,Rt.value,ge),Rt!==null&&(k=d(Rt,k,ut),At===null?Je=Rt:At.sibling=Rt,At=Rt);return St&&Ji(Y,ut),Je}for(Ze=o(Ze);!Rt.done;ut++,Rt=Q.next())Rt=ce(Ze,Y,ut,Rt.value,ge),Rt!==null&&(t&&Rt.alternate!==null&&Ze.delete(Rt.key===null?ut:Rt.key),k=d(Rt,k,ut),At===null?Je=Rt:At.sibling=Rt,At=Rt);return t&&Ze.forEach(function(JS){return n(Y,JS)}),St&&Ji(Y,ut),Je}function jt(Y,k,Q,ge){if(typeof Q=="object"&&Q!==null&&Q.type===A&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:e:{for(var Je=Q.key;k!==null;){if(k.key===Je){if(Je=Q.type,Je===A){if(k.tag===7){a(Y,k.sibling),ge=u(k,Q.props.children),ge.return=Y,Y=ge;break e}}else if(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&Sr(Je)===k.type){a(Y,k.sibling),ge=u(k,Q.props),vo(ge,Q),ge.return=Y,Y=ge;break e}a(Y,k);break}else n(Y,k);k=k.sibling}Q.type===A?(ge=gr(Q.props.children,Y.mode,ge,Q.key),ge.return=Y,Y=ge):(ge=Cl(Q.type,Q.key,Q.props,null,Y.mode,ge),vo(ge,Q),ge.return=Y,Y=ge)}return x(Y);case E:e:{for(Je=Q.key;k!==null;){if(k.key===Je)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(Y,k.sibling),ge=u(k,Q.children||[]),ge.return=Y,Y=ge;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}ge=Fu(Q,Y.mode,ge),ge.return=Y,Y=ge}return x(Y);case Z:return Q=Sr(Q),jt(Y,k,Q,ge)}if(de(Q))return ke(Y,k,Q,ge);if(oe(Q)){if(Je=oe(Q),typeof Je!="function")throw Error(r(150));return Q=Je.call(Q),tt(Y,k,Q,ge)}if(typeof Q.then=="function")return jt(Y,k,Pl(Q),ge);if(Q.$$typeof===U)return jt(Y,k,Nl(Y,Q),ge);Il(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(Y,k.sibling),ge=u(k,Q),ge.return=Y,Y=ge):(a(Y,k),ge=zu(Q,Y.mode,ge),ge.return=Y,Y=ge),x(Y)):a(Y,k)}return function(Y,k,Q,ge){try{go=0;var Je=jt(Y,k,Q,ge);return ls=null,Je}catch(Ze){if(Ze===os||Ze===Ll)throw Ze;var At=Zn(29,Ze,null,Y.mode);return At.lanes=ge,At.return=Y,At}}}var br=Mm(!0),bm=Mm(!1),za=!1;function Ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Rl(t),sm(t,null,a),n}return Al(t,o,n,a),Rl(t)}function _o(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qs(t,a)}}function Ju(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var $u=!1;function xo(){if($u){var t=ss;if(t!==null)throw t}}function yo(t,n,a,o){$u=!1;var u=t.updateQueue;za=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,J=H.next;H.next=null,x===null?d=J:x.next=J,x=H;var he=t.alternate;he!==null&&(he=he.updateQueue,R=he.lastBaseUpdate,R!==x&&(R===null?he.firstBaseUpdate=J:R.next=J,he.lastBaseUpdate=H))}if(d!==null){var ve=u.baseState;x=0,he=J=H=null,R=d;do{var ee=R.lane&-536870913,ce=ee!==R.lane;if(ce?(xt&ee)===ee:(o&ee)===ee){ee!==0&&ee===rs&&($u=!0),he!==null&&(he=he.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var ke=t,tt=R;ee=n;var jt=a;switch(tt.tag){case 1:if(ke=tt.payload,typeof ke=="function"){ve=ke.call(jt,ve,ee);break e}ve=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=tt.payload,ee=typeof ke=="function"?ke.call(jt,ve,ee):ke,ee==null)break e;ve=g({},ve,ee);break e;case 2:za=!0}}ee=R.callback,ee!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[ee]:ce.push(ee))}else ce={lane:ee,tag:R.tag,payload:R.payload,callback:R.callback,next:null},he===null?(J=he=ce,H=ve):he=he.next=ce,x|=ee;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);he===null&&(H=ve),u.baseState=H,u.firstBaseUpdate=J,u.lastBaseUpdate=he,d===null&&(u.shared.lanes=0),ja|=x,t.lanes=x,t.memoizedState=ve}}function Em(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Tm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Em(a[t],n)}var cs=O(null),zl=O(0);function Am(t,n){t=ca,_e(zl,t),_e(cs,n),ca=t|n.baseLanes}function ef(){_e(zl,ca),_e(cs,cs.current)}function tf(){ca=zl.current,ne(cs),ne(zl)}var Kn=O(null),di=null;function Ha(t){var n=t.alternate;_e(sn,sn.current&1),_e(Kn,t),di===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(di=t)}function nf(t){_e(sn,sn.current),_e(Kn,t),di===null&&(di=t)}function Rm(t){t.tag===22?(_e(sn,sn.current),_e(Kn,t),di===null&&(di=t)):Ga()}function Ga(){_e(sn,sn.current),_e(Kn,Kn.current)}function Qn(t){ne(Kn),di===t&&(di=null),ne(sn)}var sn=O(0);function Fl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||cd(a)||ud(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,lt=null,Vt=null,un=null,Bl=!1,us=!1,Er=!1,Hl=0,So=0,fs=null,Vy=0;function nn(){throw Error(r(321))}function af(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function rf(t,n,a,o,u,d){return ta=d,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?ug:yf,Er=!1,d=a(o,u),Er=!1,us&&(d=wm(n,a,o,u)),Cm(t),d}function Cm(t){F.H=Eo;var n=Vt!==null&&Vt.next!==null;if(ta=0,un=Vt=lt=null,Bl=!1,So=0,fs=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&Dl(t)&&(fn=!0))}function wm(t,n,a,o){lt=t;var u=0;do{if(us&&(fs=null),So=0,us=!1,25<=u)throw Error(r(301));if(u+=1,un=Vt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=fg,d=n(a,o)}while(us);return d}function ky(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?Mo(n):n,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(lt.flags|=1024),n}function sf(){var t=Hl!==0;return Hl=0,t}function of(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lf(t){if(Bl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Bl=!1}ta=0,un=Vt=lt=null,us=!1,So=Hl=0,fs=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?lt.memoizedState=un=t:un=un.next=t,un}function on(){if(Vt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var n=un===null?lt.memoizedState:un.next;if(n!==null)un=n,Vt=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},un===null?lt.memoizedState=un=t:un=un.next=t}return un}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(t){var n=So;return So+=1,fs===null&&(fs=[]),t=xm(fs,t,n),n=lt,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?ug:yf),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Mo(t);if(t.$$typeof===U)return Rn(t)}throw Error(r(438,String(t)))}function cf(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=N;return n.index++,a}function na(t,n){return typeof n=="function"?n(t):n}function kl(t){var n=on();return uf(n,Vt,t)}function uf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=x=null,H=null,J=n,he=!1;do{var ve=J.lane&-536870913;if(ve!==J.lane?(xt&ve)===ve:(ta&ve)===ve){var ee=J.revertLane;if(ee===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ve===rs&&(he=!0);else if((ta&ee)===ee){J=J.next,ee===rs&&(he=!0);continue}else ve={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},H===null?(R=H=ve,x=d):H=H.next=ve,lt.lanes|=ee,ja|=ee;ve=J.action,Er&&a(d,ve),d=J.hasEagerState?J.eagerState:a(d,ve)}else ee={lane:ve,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},H===null?(R=H=ee,x=d):H=H.next=ee,lt.lanes|=ve,ja|=ve;J=J.next}while(J!==null&&J!==n);if(H===null?x=d:H.next=R,!Yn(d,t.memoizedState)&&(fn=!0,he&&(a=ss,a!==null)))throw a;t.memoizedState=d,t.baseState=x,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ff(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);Yn(d,n.memoizedState)||(fn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Dm(t,n,a){var o=lt,u=on(),d=St;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Yn((Vt||u).memoizedState,a);if(x&&(u.memoizedState=a,fn=!0),u=u.queue,pf(Lm.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ds(9,{destroy:void 0},Um.bind(null,o,u,a,n),null),Xt===null)throw Error(r(349));d||(ta&127)!==0||Nm(o,n,a)}return a}function Nm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Gl(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Um(t,n,a,o){n.value=a,n.getSnapshot=o,Om(n)&&Pm(t)}function Lm(t,n,a){return a(function(){Om(n)&&Pm(t)})}function Om(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Pm(t){var n=mr(t,2);n!==null&&Xn(n,t,2)}function df(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),Er){Fe(!0);try{a()}finally{Fe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},n}function Im(t,n,a,o){return t.baseState=a,uf(t,Vt,typeof o=="function"?o:na)}function jy(t,n,a,o,u){if(Wl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};F.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,zm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function zm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=F.T,x={};F.T=x;try{var R=a(u,o),H=F.S;H!==null&&H(x,R),Fm(t,n,R)}catch(J){hf(t,n,J)}finally{d!==null&&x.types!==null&&(d.types=x.types),F.T=d}}else try{d=a(u,o),Fm(t,n,d)}catch(J){hf(t,n,J)}}function Fm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Bm(t,n,o)},function(o){return hf(t,n,o)}):Bm(t,n,a)}function Bm(t,n,a){n.status="fulfilled",n.value=a,Hm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,zm(t,a)))}function hf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Hm(n),n=n.next;while(n!==o)}t.action=null}function Hm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Gm(t,n){return n}function Vm(t,n){if(St){var a=Xt.formState;if(a!==null){e:{var o=lt;if(St){if(qt){t:{for(var u=qt,d=fi;u.nodeType!==8;){if(!d){u=null;break t}if(u=hi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){qt=hi(u.nextSibling),o=u.data==="F!";break e}}Pa(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gm,lastRenderedState:n},a.queue=o,a=og.bind(null,lt,o),o.dispatch=a,o=df(!1),d=xf.bind(null,lt,!1,o.queue),o=In(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=jy.bind(null,lt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function km(t){var n=on();return jm(n,Vt,t)}function jm(t,n,a){if(n=uf(t,n,Gm)[0],t=kl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(x){throw x===os?Ll:x}else o=n;n=on();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,ds(9,{destroy:void 0},Xy.bind(null,u,a),null)),[o,d,t]}function Xy(t,n){t.action=n}function Xm(t){var n=on(),a=Vt;if(a!==null)return jm(n,a,t);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ds(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Gl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Wm(){return on().memoizedState}function jl(t,n,a,o){var u=In();lt.flags|=t,u.memoizedState=ds(1|n,{destroy:void 0},a,o===void 0?null:o)}function Xl(t,n,a,o){var u=on();o=o===void 0?null:o;var d=u.memoizedState.inst;Vt!==null&&o!==null&&af(o,Vt.memoizedState.deps)?u.memoizedState=ds(n,d,a,o):(lt.flags|=t,u.memoizedState=ds(1|n,d,a,o))}function qm(t,n){jl(8390656,8,t,n)}function pf(t,n){Xl(2048,8,t,n)}function Wy(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Gl(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ym(t){var n=on().memoizedState;return Wy({ref:n,nextImpl:t}),function(){if((Ut&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Zm(t,n){return Xl(4,2,t,n)}function Km(t,n){return Xl(4,4,t,n)}function Qm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Jm(t,n,a){a=a!=null?a.concat([t]):null,Xl(4,4,Qm.bind(null,n,t),a)}function mf(){}function $m(t,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&af(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function eg(t,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&af(n,o[1]))return o[0];if(o=t(),Er){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[o,n],o}function gf(t,n,a){return a===void 0||(ta&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=t0(),lt.lanes|=t,ja|=t,a)}function tg(t,n,a,o){return Yn(a,n)?a:cs.current!==null?(t=gf(t,a,o),Yn(t,n)||(fn=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(xt&261930)===0?(fn=!0,t.memoizedState=a):(t=t0(),lt.lanes|=t,ja|=t,n)}function ng(t,n,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var x=F.T,R={};F.T=R,xf(t,!1,n,a);try{var H=u(),J=F.S;if(J!==null&&J(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var he=Gy(H,o);bo(t,n,he,ei(t))}else bo(t,n,o,ei(t))}catch(ve){bo(t,n,{then:function(){},status:"rejected",reason:ve},ei())}finally{G.p=d,x!==null&&R.types!==null&&(x.types=R.types),F.T=x}}function qy(){}function vf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=ig(t).queue;ng(t,u,n,ie,a===null?qy:function(){return ag(t),a(o)})}function ig(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ag(t){var n=ig(t);n.next===null&&(n=t.alternate.memoizedState),bo(t,n.next.queue,{},ei())}function _f(){return Rn(Ho)}function rg(){return on().memoizedState}function sg(){return on().memoizedState}function Yy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Fa(a);var o=Ba(n,t,a);o!==null&&(Xn(o,n,a),_o(o,n,a)),n={cache:Wu()},t.payload=n;return}n=n.return}}function Zy(t,n,a){var o=ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wl(t)?lg(n,a):(a=Pu(t,n,a,o),a!==null&&(Xn(a,t,o),cg(a,n,o)))}function og(t,n,a){var o=ei();bo(t,n,a,o)}function bo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wl(t))lg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,R=d(x,a);if(u.hasEagerState=!0,u.eagerState=R,Yn(R,x))return Al(t,n,u,0),Xt===null&&Tl(),!1}catch{}if(a=Pu(t,n,u,o),a!==null)return Xn(a,t,o),cg(a,n,o),!0}return!1}function xf(t,n,a,o){if(o={lane:2,revertLane:Qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(t)){if(n)throw Error(r(479))}else n=Pu(t,a,o,2),n!==null&&Xn(n,t,2)}function Wl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function lg(t,n){us=Bl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function cg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qs(t,a)}}var Eo={readContext:Rn,use:Vl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};Eo.useEffectEvent=nn;var ug={readContext:Rn,use:Vl,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:qm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,jl(4194308,4,Qm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return jl(4194308,4,t,n)},useInsertionEffect:function(t,n){jl(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var o=t();if(Er){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=In();if(a!==void 0){var u=a(n);if(Er){Fe(!0);try{a(n)}finally{Fe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Zy.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=df(t);var n=t.queue,a=og.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mf,useDeferredValue:function(t,n){var a=In();return gf(a,t,n)},useTransition:function(){var t=df(!1);return t=ng.bind(null,lt,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=In();if(St){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(xt&127)!==0||Nm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,qm(Lm.bind(null,o,d,t),[t]),o.flags|=2048,ds(9,{destroy:void 0},Um.bind(null,o,d,a,n),null),a},useId:function(){var t=In(),n=Xt.identifierPrefix;if(St){var a=Pi,o=Oi;a=(o&~(1<<32-Ie(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Vy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:_f,useFormState:Vm,useActionState:Vm,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:cf,useCacheRefresh:function(){return In().memoizedState=Yy.bind(null,lt)},useEffectEvent:function(t){var n=In(),a={impl:t};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},yf={readContext:Rn,use:Vl,useCallback:$m,useContext:Rn,useEffect:pf,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:eg,useReducer:kl,useRef:Wm,useState:function(){return kl(na)},useDebugValue:mf,useDeferredValue:function(t,n){var a=on();return tg(a,Vt.memoizedState,t,n)},useTransition:function(){var t=kl(na)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:Dm,useId:rg,useHostTransitionStatus:_f,useFormState:km,useActionState:km,useOptimistic:function(t,n){var a=on();return Im(a,Vt,t,n)},useMemoCache:cf,useCacheRefresh:sg};yf.useEffectEvent=Ym;var fg={readContext:Rn,use:Vl,useCallback:$m,useContext:Rn,useEffect:pf,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:eg,useReducer:ff,useRef:Wm,useState:function(){return ff(na)},useDebugValue:mf,useDeferredValue:function(t,n){var a=on();return Vt===null?gf(a,t,n):tg(a,Vt.memoizedState,t,n)},useTransition:function(){var t=ff(na)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:Dm,useId:rg,useHostTransitionStatus:_f,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var a=on();return Vt!==null?Im(a,Vt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:cf,useCacheRefresh:sg};fg.useEffectEvent=Ym;function Sf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Mf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Fa(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Xn(n,t,o),_o(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Fa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Xn(n,t,o),_o(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(t,o,a),n!==null&&(Xn(n,t,a),_o(n,t,a))}};function dg(t,n,a,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!co(a,o)||!co(u,d):!0}function hg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Mf.enqueueReplaceState(n,n.state,null)}function Tr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function pg(t){El(t)}function mg(t){console.error(t)}function gg(t){El(t)}function ql(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function vg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bf(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(t,n)},a}function _g(t){return t=Fa(t),t.tag=3,t}function xg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){vg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){vg(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Ky(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&as(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?rc():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yf(t,o,u)),!1}throw Error(r(435,a.tag))}return Yf(t,o,u),rc(),!1}if(St)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Gu&&(t=Error(r(422),{cause:o}),ho(li(t,a)))):(o!==Gu&&(n=Error(r(423),{cause:o}),ho(li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=li(o,a),u=bf(t.stateNode,o,u),Ju(t,u),an!==4&&(an=2)),!1;var d=Error(r(520),{cause:o});if(d=li(d,a),Uo===null?Uo=[d]:Uo.push(d),an!==4&&(an=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=bf(a.stateNode,o,t),Ju(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xa===null||!Xa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=_g(u),xg(u,t,a,o),Ju(a,u),!1}a=a.return}while(a!==null);return!1}var Ef=Error(r(461)),fn=!1;function Cn(t,n,a,o){n.child=t===null?bm(n,null,a,o):br(n,t.child,a,o)}function yg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return xr(n),o=rf(t,n,a,x,d,u),R=sf(),t!==null&&!fn?(of(t,n,u),ia(t,n,u)):(St&&R&&Bu(n),n.flags|=1,Cn(t,n,o,u),n.child)}function Sg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Iu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Mg(t,n,d,o,u)):(t=Cl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Uf(t,u)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:co,a(x,o)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=Qi(d,o),t.ref=n.ref,t.return=n,n.child=t}function Mg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(co(d,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=d,Uf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,ia(t,n,u)}return Tf(t,n,a,o,u)}function bg(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Eg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ul(n,d!==null?d.cachePool:null),d!==null?Am(n,d):ef(),Rm(n);else return o=n.lanes=536870912,Eg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ul(n,d.cachePool),Am(n,d),Ga(),n.memoizedState=null):(t!==null&&Ul(n,null),ef(),Ga());return Cn(t,n,u,a),n.child}function To(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Eg(t,n,a,o,u){var d=Yu();return d=d===null?null:{parent:cn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Ul(n,null),ef(),Rm(n),t!==null&&as(t,n,o,!0),n.childLanes=u,null}function Yl(t,n){return n=Kl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Tg(t,n,a){return br(n,t.child,null,a),t=Yl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function Qy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(St){if(o.mode==="hidden")return t=Yl(n,o),n.lanes=536870912,To(null,t);if(nf(n),(t=qt)?(t=z0(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=lm(t),a.return=n,n.child=a,An=n,qt=null)):t=null,t===null)throw Pa(n);return n.lanes=536870912,null}return Yl(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(nf(n),u)if(n.flags&256)n.flags&=-257,n=Tg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||as(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(o=Xt,o!==null&&(x=kr(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,mr(t,x),Xn(o,t,x),Ef;rc(),n=Tg(t,n,a)}else t=d.treeContext,qt=hi(x.nextSibling),An=n,St=!0,Oa=null,fi=!1,t!==null&&fm(n,t),n=Yl(n,o),n.flags|=4096;return n}return t=Qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Tf(t,n,a,o,u){return xr(n),a=rf(t,n,a,o,void 0,u),o=sf(),t!==null&&!fn?(of(t,n,u),ia(t,n,u)):(St&&o&&Bu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function Ag(t,n,a,o,u,d){return xr(n),n.updateQueue=null,a=wm(n,o,a,u),Cm(t),o=sf(),t!==null&&!fn?(of(t,n,d),ia(t,n,d)):(St&&o&&Bu(n),n.flags|=1,Cn(t,n,a,d),n.child)}function Rg(t,n,a,o,u){if(xr(n),n.stateNode===null){var d=es,x=a.contextType;typeof x=="object"&&x!==null&&(d=Rn(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Mf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ku(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?Rn(x):es,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Sf(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Mf.enqueueReplaceState(d,d.state,null),yo(n,o,d,u),xo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,H=Tr(a,R);d.props=H;var J=d.context,he=a.contextType;x=es,typeof he=="object"&&he!==null&&(x=Rn(he));var ve=a.getDerivedStateFromProps;he=typeof ve=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,he||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||J!==x)&&hg(n,d,o,x),za=!1;var ee=n.memoizedState;d.state=ee,yo(n,o,d,u),xo(),J=n.memoizedState,R||ee!==J||za?(typeof ve=="function"&&(Sf(n,a,ve,o),J=n.memoizedState),(H=za||dg(n,a,H,o,ee,J,x))?(he||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),d.props=o,d.state=J,d.context=x,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Qu(t,n),x=n.memoizedProps,he=Tr(a,x),d.props=he,ve=n.pendingProps,ee=d.context,J=a.contextType,H=es,typeof J=="object"&&J!==null&&(H=Rn(J)),R=a.getDerivedStateFromProps,(J=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==ve||ee!==H)&&hg(n,d,o,H),za=!1,ee=n.memoizedState,d.state=ee,yo(n,o,d,u),xo();var ce=n.memoizedState;x!==ve||ee!==ce||za||t!==null&&t.dependencies!==null&&Dl(t.dependencies)?(typeof R=="function"&&(Sf(n,a,R,o),ce=n.memoizedState),(he=za||dg(n,a,he,o,ee,ce,H)||t!==null&&t.dependencies!==null&&Dl(t.dependencies))?(J||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ce,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ce,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),d.props=o,d.state=ce,d.context=H,o=he):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Zl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=br(n,t.child,null,u),n.child=br(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ia(t,n,u),t}function Cg(t,n,a,o){return vr(),n.flags|=256,Cn(t,n,a,o),n.child}var Af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(t){return{baseLanes:t,cachePool:vm()}}function Cf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function wg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(St){if(u?Ha(n):Ga(),(t=qt)?(t=z0(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=lm(t),a.return=n,n.child=a,An=n,qt=null)):t=null,t===null)throw Pa(n);return ud(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ga(),u=n.mode,R=Kl({mode:"hidden",children:R},u),o=gr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Rf(a),o.childLanes=Cf(t,x,a),n.memoizedState=Af,To(null,o)):(Ha(n),wf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(d)n.flags&256?(Ha(n),n.flags&=-257,n=Df(t,n,a)):n.memoizedState!==null?(Ga(),n.child=t.child,n.flags|=128,n=null):(Ga(),R=o.fallback,u=n.mode,o=Kl({mode:"visible",children:o.children},u),R=gr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,br(n,t.child,null,a),o=n.child,o.memoizedState=Rf(a),o.childLanes=Cf(t,x,a),n.memoizedState=Af,n=To(null,o));else if(Ha(n),ud(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var J=x.dgst;x=J,o=Error(r(419)),o.stack="",o.digest=x,ho({value:o,source:null,stack:null}),n=Df(t,n,a)}else if(fn||as(t,n,a,!1),x=(a&t.childLanes)!==0,fn||x){if(x=Xt,x!==null&&(o=kr(x,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,mr(t,o),Xn(x,t,o),Ef;cd(R)||rc(),n=Df(t,n,a)}else cd(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,qt=hi(R.nextSibling),An=n,St=!0,Oa=null,fi=!1,t!==null&&fm(n,t),n=wf(n,o.children),n.flags|=4096);return n}return u?(Ga(),R=o.fallback,u=n.mode,H=t.child,J=H.sibling,o=Qi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,J!==null?R=Qi(J,R):(R=gr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,To(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Rf(a):(u=R.cachePool,u!==null?(H=cn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=vm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Cf(t,x,a),n.memoizedState=Af,To(t.child,o)):(Ha(n),a=t.child,t=a.sibling,a=Qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function wf(t,n){return n=Kl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Kl(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function Df(t,n,a){return br(n,t.child,null,a),t=wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Dg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ju(t.return,n,a)}function Nf(t,n,a,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=d)}function Ng(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=sn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,_e(sn,x),Cn(t,n,o,a),o=St?fo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,a,n);else if(t.tag===19)Dg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Fl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Fl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Nf(n,!0,a,null,d,o);break;case"together":Nf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(as(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Uf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Dl(t)))}function Jy(t,n,a){switch(n.tag){case 3:Ne(n,n.stateNode.containerInfo),Ia(n,cn,t.memoizedState.cache),vr();break;case 27:case 5:Ge(n);break;case 4:Ne(n,n.stateNode.containerInfo);break;case 10:Ia(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,nf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?wg(t,n,a):(Ha(n),t=ia(t,n,a),t!==null?t.sibling:null);Ha(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(as(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ng(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(sn,sn.current),o)break;return null;case 22:return n.lanes=0,bg(t,n,a,n.pendingProps);case 24:Ia(n,cn,t.memoizedState.cache)}return ia(t,n,a)}function Ug(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Uf(t,a)&&(n.flags&128)===0)return fn=!1,Jy(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,St&&(n.flags&1048576)!==0&&um(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Sr(n.elementType),n.type=t,typeof t=="function")Iu(t)?(o=Tr(t,o),n.tag=1,n=Rg(null,n,t,o,a)):(n.tag=0,n=Tf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=yg(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=Sg(null,n,t,o,a);break e}}throw n=me(t)||t,Error(r(306,n,""))}}return n;case 0:return Tf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Tr(o,n.pendingProps),Rg(t,n,o,u,a);case 3:e:{if(Ne(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Qu(t,n),yo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ia(n,cn,o),o!==d.cache&&Xu(n,[cn],a,!0),xo(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Cg(t,n,o,a);break e}else if(o!==u){u=li(Error(r(424)),n),ho(u),n=Cg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qt=hi(t.firstChild),An=n,St=!0,Oa=null,fi=!0,a=bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vr(),o===u){n=ia(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return Zl(t,n),t===null?(a=k0(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,t=n.pendingProps,o=dc(te.current).createElement(a),o[ln]=n,o[yn]=t,wn(o,a,t),C(o),n.stateNode=o):n.memoizedState=k0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ge(n),t===null&&St&&(o=n.stateNode=H0(n.type,n.pendingProps,te.current),An=n,fi=!0,u=qt,Za(n.type)?(fd=u,qt=hi(o.firstChild)):qt=u),Cn(t,n,n.pendingProps.children,a),Zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&St&&((u=o=qt)&&(o=CS(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,An=n,qt=hi(o.firstChild),fi=!1,u=!0):u=!1),u||Pa(n)),Ge(n),u=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,sd(u,d)?o=null:x!==null&&sd(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=rf(t,n,ky,null,null,a),Ho._currentValue=u),Zl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&St&&((t=a=qt)&&(a=wS(a,n.pendingProps,fi),a!==null?(n.stateNode=a,An=n,qt=null,t=!0):t=!1),t||Pa(n)),null;case 13:return wg(t,n,a);case 4:return Ne(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=br(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return yg(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ia(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,xr(n),u=Rn(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return Sg(t,n,n.type,n.pendingProps,a);case 15:return Mg(t,n,n.type,n.pendingProps,a);case 19:return Ng(t,n,a);case 31:return Qy(t,n,a);case 22:return bg(t,n,a,n.pendingProps);case 24:return xr(n),o=Rn(cn),t===null?(u=Yu(),u===null&&(u=Xt,d=Wu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ku(n),Ia(n,cn,u)):((t.lanes&a)!==0&&(Qu(t,n),yo(n,null,null,a),xo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ia(n,cn,o)):(o=d.cache,Ia(n,cn,o),o!==u.cache&&Xu(n,[cn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function aa(t){t.flags|=4}function Lf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(r0())t.flags|=8192;else throw Mr=Ol,Zu}else t.flags&=-16777217}function Lg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Y0(n))if(r0())t.flags|=8192;else throw Mr=Ol,Zu}function Ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?zt():536870912,t.lanes|=n,gs|=n)}function Ao(t,n){if(!St)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function $y(t,n,a){var o=n.pendingProps;switch(Hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(cn),je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(is(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vu())),Yt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(aa(n),d!==null?(Yt(n),Lg(n,d)):(Yt(n),Lf(n,u,null,o,a))):d?d!==t.memoizedState?(aa(n),Yt(n),Lg(n,d)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&aa(n),Yt(n),Lf(n,u,t,o,a)),null;case 27:if(pt(n),a=te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=Re.current,is(n)?dm(n):(t=H0(u,o,a),n.stateNode=t,aa(n))}return Yt(n),null;case 5:if(pt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(d=Re.current,is(n))dm(n);else{var x=dc(te.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[ln]=n,d[yn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(wn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&aa(n)}}return Yt(n),Lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,is(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||w0(t.nodeValue,a)),t||Pa(n,!0)}else t=dc(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=is(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ln]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=is(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ln]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ql(n,n.updateQueue),Yt(n),null);case 4:return je(),t===null&&td(n.stateNode.containerInfo),Yt(n),null;case 10:return ea(n.type),Yt(n),null;case 19:if(ne(sn),o=n.memoizedState,o===null)return Yt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Ao(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Fl(t),d!==null){for(n.flags|=128,Ao(o,!1),t=d.updateQueue,n.updateQueue=t,Ql(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)om(a,t),a=a.sibling;return _e(sn,sn.current&1|2),St&&Ji(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>nc&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304)}else{if(!u)if(t=Fl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ql(n,t),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!St)return Yt(n),null}else 2*b()-o.renderingStartTime>nc&&a!==536870912&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=sn.current,_e(sn,u?a&1|2:a&1),St&&Ji(n,o.treeForkCount),t):(Yt(n),null);case 22:case 23:return Qn(n),tf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Ql(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ne(yr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(cn),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function eS(t,n){switch(Hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ea(cn),je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ne(sn),null;case 4:return je(),null;case 10:return ea(n.type),null;case 22:case 23:return Qn(n),tf(),t!==null&&ne(yr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ea(cn),null;case 25:return null;default:return null}}function Og(t,n){switch(Hu(n),n.tag){case 3:ea(cn),je();break;case 26:case 27:case 5:pt(n);break;case 4:je();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:ne(sn);break;case 10:ea(n.type);break;case 22:case 23:Qn(n),tf(),t!==null&&ne(yr);break;case 24:ea(cn)}}function Ro(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==u)}}catch(R){Ht(n,n.return,R)}}function Va(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var H=a,J=R;try{J()}catch(he){Ht(u,H,he)}}}o=o.next}while(o!==d)}}catch(he){Ht(n,n.return,he)}}function Pg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Tm(n,a)}catch(o){Ht(t,t.return,o)}}}function Ig(t,n,a){a.props=Tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,n,o)}}function Co(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ht(t,n,u)}}function Ii(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function zg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function Of(t,n,a){try{var o=t.stateNode;MS(o,t.type,a,n),o[yn]=n}catch(u){Ht(t,t.return,u)}}function Fg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function Pf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(o!==4&&(o===27&&Za(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(If(t,n,a),t=t.sibling;t!==null;)If(t,n,a),t=t.sibling}function Jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Za(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Jl(t,n,a),t=t.sibling;t!==null;)Jl(t,n,a),t=t.sibling}function Bg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[ln]=t,n[yn]=a}catch(d){Ht(t,t.return,d)}}var ra=!1,dn=!1,zf=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function tS(t,n){if(t=t.containerInfo,ad=xc,t=Jp(t),wu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var x=0,R=-1,H=-1,J=0,he=0,ve=t,ee=null;t:for(;;){for(var ce;ve!==a||u!==0&&ve.nodeType!==3||(R=x+u),ve!==d||o!==0&&ve.nodeType!==3||(H=x+o),ve.nodeType===3&&(x+=ve.nodeValue.length),(ce=ve.firstChild)!==null;)ee=ve,ve=ce;for(;;){if(ve===t)break t;if(ee===a&&++J===u&&(R=x),ee===d&&++he===o&&(H=x),(ce=ve.nextSibling)!==null)break;ve=ee,ee=ve.parentNode}ve=ce}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(rd={focusedElem:t,selectionRange:a},xc=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ke=Tr(a.type,u);t=o.getSnapshotBeforeUpdate(ke,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ht(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ld(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ld(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function Gg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(t,a),o&4&&Ro(5,a);break;case 1:if(oa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Ht(a,a.return,x)}else{var u=Tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Ht(a,a.return,x)}}o&64&&Pg(a),o&512&&Co(a,a.return);break;case 3:if(oa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Tm(t,n)}catch(x){Ht(a,a.return,x)}}break;case 27:n===null&&o&4&&Bg(a);case 26:case 5:oa(t,a),n===null&&o&4&&zg(a),o&512&&Co(a,a.return);break;case 12:oa(t,a);break;case 31:oa(t,a),o&4&&jg(t,a);break;case 13:oa(t,a),o&4&&Xg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=uS.bind(null,a),DS(t,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||dn,u=ra;var d=dn;ra=o,(dn=n)&&!d?la(t,a,(a.subtreeFlags&8772)!==0):oa(t,a),ra=u,dn=d}break;case 30:break;default:oa(t,a)}}function Vg(t){var n=t.alternate;n!==null&&(t.alternate=null,Vg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&to(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,Gn=!1;function sa(t,n,a){for(a=a.child;a!==null;)kg(t,n,a),a=a.sibling}function kg(t,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:dn||Ii(a,n),sa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Ii(a,n);var o=Qt,u=Gn;Za(a.type)&&(Qt=a.stateNode,Gn=!1),sa(t,n,a),zo(a.stateNode),Qt=o,Gn=u;break;case 5:dn||Ii(a,n);case 6:if(o=Qt,u=Gn,Qt=null,sa(t,n,a),Qt=o,Gn=u,Qt!==null)if(Gn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(d){Ht(a,n,d)}else try{Qt.removeChild(a.stateNode)}catch(d){Ht(a,n,d)}break;case 18:Qt!==null&&(Gn?(t=Qt,P0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Es(t)):P0(Qt,a.stateNode));break;case 4:o=Qt,u=Gn,Qt=a.stateNode.containerInfo,Gn=!0,sa(t,n,a),Qt=o,Gn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),dn||Va(4,a,n),sa(t,n,a);break;case 1:dn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ig(a,n,o)),sa(t,n,a);break;case 21:sa(t,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,sa(t,n,a),dn=o;break;default:sa(t,n,a)}}function jg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Es(t)}catch(a){Ht(n,n.return,a)}}}function Xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Es(t)}catch(a){Ht(n,n.return,a)}}function nS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Hg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Hg),n;default:throw Error(r(435,t.tag))}}function $l(t,n){var a=nS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=fS.bind(null,t,o);o.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,x=n,R=x;e:for(;R!==null;){switch(R.tag){case 27:if(Za(R.type)){Qt=R.stateNode,Gn=!1;break e}break;case 5:Qt=R.stateNode,Gn=!1;break e;case 3:case 4:Qt=R.stateNode.containerInfo,Gn=!0;break e}R=R.return}if(Qt===null)throw Error(r(160));kg(d,x,u),Qt=null,Gn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wg(n,t),n=n.sibling}var bi=null;function Wg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(Va(3,t,t.return),Ro(3,t),Va(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(dn||a===null||Ii(a,a.return)),o&64&&ra&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(Vn(n,t),kn(t),o&512&&(dn||a===null||Ii(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ur]||d[ln]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),wn(d,o,a),d[ln]=t,C(d),o=d;break e;case"link":var x=W0("link","href",u).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(d=x[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;case"meta":if(x=W0("meta","content",u).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(d=x[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[ln]=t,C(d),o=d}t.stateNode=o}else q0(u,t.type,t.stateNode);else t.stateNode=X0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?q0(u,t.type,t.stateNode):X0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Of(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(dn||a===null||Ii(a,a.return)),a!==null&&o&4&&Of(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(dn||a===null||Ii(a,a.return)),t.flags&32){u=t.stateNode;try{pn(u,"")}catch(ke){Ht(t,t.return,ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Of(t,u,a!==null?a.memoizedProps:u)),o&1024&&(zf=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ke){Ht(t,t.return,ke)}}break;case 3:if(mc=null,u=bi,bi=hc(n.containerInfo),Vn(n,t),bi=u,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Es(n.containerInfo)}catch(ke){Ht(t,t.return,ke)}zf&&(zf=!1,qg(t));break;case 4:o=bi,bi=hc(t.stateNode.containerInfo),Vn(n,t),kn(t),bi=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,J=ra,he=dn;if(ra=J||u,dn=he||H,Vn(n,t),dn=he,ra=J,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ra||dn||Ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=H.stateNode;var ve=H.memoizedProps.style,ee=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;R.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(ke){Ht(H,H.return,ke)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(ke){Ht(H,H.return,ke)}}}else if(n.tag===18){if(a===null){H=n;try{var ce=H.stateNode;u?I0(ce,!0):I0(H.stateNode,!1)}catch(ke){Ht(H,H.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$l(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Fg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Pf(t);Jl(t,d,u);break;case 5:var x=a.stateNode;a.flags&32&&(pn(x,""),a.flags&=-33);var R=Pf(t);Jl(t,R,x);break;case 3:case 4:var H=a.stateNode.containerInfo,J=Pf(t);If(t,J,H);break;default:throw Error(r(161))}}catch(he){Ht(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function qg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;qg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Gg(t,n.alternate,n),n=n.sibling}function Ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Ar(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ig(n,n.return,a),Ar(n);break;case 27:zo(n.stateNode);case 26:case 5:Ii(n,n.return),Ar(n);break;case 22:n.memoizedState===null&&Ar(n);break;case 30:Ar(n);break;default:Ar(n)}t=t.sibling}}function la(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:la(u,d,a),Ro(4,d);break;case 1:if(la(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Ht(o,o.return,J)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Em(H[u],R)}catch(J){Ht(o,o.return,J)}}a&&x&64&&Pg(d),Co(d,d.return);break;case 27:Bg(d);case 26:case 5:la(u,d,a),a&&o===null&&x&4&&zg(d),Co(d,d.return);break;case 12:la(u,d,a);break;case 31:la(u,d,a),a&&x&4&&jg(u,d);break;case 13:la(u,d,a),a&&x&4&&Xg(u,d);break;case 22:d.memoizedState===null&&la(u,d,a),Co(d,d.return);break;case 30:break;default:la(u,d,a)}n=n.sibling}}function Ff(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&po(a))}function Bf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&po(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yg(t,n,a,o),n=n.sibling}function Yg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),u&2048&&Ro(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&po(t)));break;case 12:if(u&2048){Ei(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,R=d.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Ht(n,n.return,H)}}else Ei(t,n,a,o);break;case 31:Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Ei(t,n,a,o):wo(t,n):d._visibility&2?Ei(t,n,a,o):(d._visibility|=2,hs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ff(x,n);break;case 24:Ei(t,n,a,o),u&2048&&Bf(n.alternate,n);break;default:Ei(t,n,a,o)}}function hs(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,R=a,H=o,J=x.flags;switch(x.tag){case 0:case 11:case 15:hs(d,x,R,H,u),Ro(8,x);break;case 23:break;case 22:var he=x.stateNode;x.memoizedState!==null?he._visibility&2?hs(d,x,R,H,u):wo(d,x):(he._visibility|=2,hs(d,x,R,H,u)),u&&J&2048&&Ff(x.alternate,x);break;case 24:hs(d,x,R,H,u),u&&J&2048&&Bf(x.alternate,x);break;default:hs(d,x,R,H,u)}n=n.sibling}}function wo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:wo(a,o),u&2048&&Ff(o.alternate,o);break;case 24:wo(a,o),u&2048&&Bf(o.alternate,o);break;default:wo(a,o)}n=n.sibling}}var Do=8192;function ps(t,n,a){if(t.subtreeFlags&Do)for(t=t.child;t!==null;)Zg(t,n,a),t=t.sibling}function Zg(t,n,a){switch(t.tag){case 26:ps(t,n,a),t.flags&Do&&t.memoizedState!==null&&VS(a,bi,t.memoizedState,t.memoizedProps);break;case 5:ps(t,n,a);break;case 3:case 4:var o=bi;bi=hc(t.stateNode.containerInfo),ps(t,n,a),bi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,ps(t,n,a),Do=o):ps(t,n,a));break;default:ps(t,n,a)}}function Kg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function No(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Jg(o,t)}Kg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qg(t),t=t.sibling}function Qg(t){switch(t.tag){case 0:case 11:case 15:No(t),t.flags&2048&&Va(9,t,t.return);break;case 3:No(t);break;case 12:No(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ec(t)):No(t);break;default:No(t)}}function ec(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Jg(o,t)}Kg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Va(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}t=t.sibling}}function Jg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else e:for(a=t;_n!==null;){o=_n;var u=o.sibling,d=o.return;if(Vg(o),o===a){_n=null;break e}if(u!==null){u.return=d,_n=u;break e}_n=d}}}var iS={getCacheForType:function(t){var n=Rn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(cn).controller.signal}},aS=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Xt=null,gt=null,xt=0,Bt=0,Jn=null,ka=!1,ms=!1,Hf=!1,ca=0,an=0,ja=0,Rr=0,Gf=0,$n=0,gs=0,Uo=null,jn=null,Vf=!1,tc=0,$g=0,nc=1/0,ic=null,Xa=null,mn=0,Wa=null,vs=null,ua=0,kf=0,jf=null,e0=null,Lo=0,Xf=null;function ei(){return(Ut&2)!==0&&xt!==0?xt&-xt:F.T!==null?Qf():$s()}function t0(){if($n===0)if((xt&536870912)===0||St){var t=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Xn(t,n,a){(t===Xt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(_s(t,0),qa(t,xt,$n,!1)),Nn(t,a),((Ut&2)===0||t!==Xt)&&(t===Xt&&((Ut&2)===0&&(Rr|=a),an===4&&qa(t,xt,$n,!1)),zi(t))}function n0(t,n,a){if((Ut&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ce(t,n),u=o?oS(t,n):qf(t,n,!0),d=o;do{if(u===0){ms&&!o&&qa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!rS(a)){u=qf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=t;u=Uo;var H=R.current.memoizedState.isDehydrated;if(H&&(_s(R,x).flags|=256),x=qf(R,x,!1),x!==2){if(Hf&&!H){R.errorRecoveryDisabledLanes|=d,Rr|=d,u=4;break e}d=jn,jn=u,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){_s(t,0),qa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,$n,!ka);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=tc+300-b(),10<u)){if(qa(o,n,$n,!ka),xe(o,0,!0)!==0)break e;ua=n,o.timeoutHandle=L0(i0.bind(null,o,a,jn,ic,Vf,n,$n,Rr,gs,ka,d,"Throttled",-0,0),u);break e}i0(o,a,jn,ic,Vf,n,$n,Rr,gs,ka,d,null,-0,0)}}break}while(!0);zi(t)}function i0(t,n,a,o,u,d,x,R,H,J,he,ve,ee,ce){if(t.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},Zg(n,d,ve);var ke=(d&62914560)===d?tc-b():(d&4194048)===d?$g-b():0;if(ke=kS(ve,ke),ke!==null){ua=d,t.cancelPendingCommit=ke(f0.bind(null,t,n,d,a,o,u,x,R,H,he,ve,null,ee,ce)),qa(t,d,x,!J);return}}f0(t,n,d,a,o,u,x,R,H)}function rS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Yn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,a,o){n&=~Gf,n&=~Rr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Ie(u),x=1<<d;o[d]=-1,u&=~x}a!==0&&ml(t,a,n)}function ac(){return(Ut&6)===0?(Oo(0),!1):!0}function Wf(){if(gt!==null){if(Bt===0)var t=gt.return;else t=gt,$i=_r=null,lf(t),ls=null,go=0,t=gt;for(;t!==null;)Og(t.alternate,t),t=t.return;gt=null}}function _s(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,TS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ua=0,Wf(),Xt=t,gt=a=Qi(t.current,null),xt=n,Bt=0,Jn=null,ka=!1,ms=Ce(t,n),Hf=!1,gs=$n=Gf=Rr=ja=an=0,jn=Uo=null,Vf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ie(o),d=1<<u;n|=t[u],o&=~d}return ca=n,Tl(),a}function a0(t,n){lt=null,F.H=Eo,n===os||n===Ll?(n=ym(),Bt=3):n===Zu?(n=ym(),Bt=4):Bt=n===Ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,gt===null&&(an=1,ql(t,li(n,t.current)))}function r0(){var t=Kn.current;return t===null?!0:(xt&4194048)===xt?di===null:(xt&62914560)===xt||(xt&536870912)!==0?t===di:!1}function s0(){var t=F.H;return F.H=Eo,t===null?Eo:t}function o0(){var t=F.A;return F.A=iS,t}function rc(){an=4,ka||(xt&4194048)!==xt&&Kn.current!==null||(ms=!0),(ja&134217727)===0&&(Rr&134217727)===0||Xt===null||qa(Xt,xt,$n,!1)}function qf(t,n,a){var o=Ut;Ut|=2;var u=s0(),d=o0();(Xt!==t||xt!==n)&&(ic=null,_s(t,n)),n=!1;var x=an;e:do try{if(Bt!==0&&gt!==null){var R=gt,H=Jn;switch(Bt){case 8:Wf(),x=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var J=Bt;if(Bt=0,Jn=null,xs(t,R,H,J),a&&ms){x=0;break e}break;default:J=Bt,Bt=0,Jn=null,xs(t,R,H,J)}}sS(),x=an;break}catch(he){a0(t,he)}while(!0);return n&&t.shellSuspendCounter++,$i=_r=null,Ut=o,F.H=u,F.A=d,gt===null&&(Xt=null,xt=0,Tl()),x}function sS(){for(;gt!==null;)l0(gt)}function oS(t,n){var a=Ut;Ut|=2;var o=s0(),u=o0();Xt!==t||xt!==n?(ic=null,nc=b()+500,_s(t,n)):ms=Ce(t,n);e:do try{if(Bt!==0&&gt!==null){n=gt;var d=Jn;t:switch(Bt){case 1:Bt=0,Jn=null,xs(t,n,d,1);break;case 2:case 9:if(_m(d)){Bt=0,Jn=null,c0(n);break}n=function(){Bt!==2&&Bt!==9||Xt!==t||(Bt=7),zi(t)},d.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:_m(d)?(Bt=0,Jn=null,c0(n)):(Bt=0,Jn=null,xs(t,n,d,7));break;case 5:var x=null;switch(gt.tag){case 26:x=gt.memoizedState;case 5:case 27:var R=gt;if(x?Y0(x):R.stateNode.complete){Bt=0,Jn=null;var H=R.sibling;if(H!==null)gt=H;else{var J=R.return;J!==null?(gt=J,sc(J)):gt=null}break t}}Bt=0,Jn=null,xs(t,n,d,5);break;case 6:Bt=0,Jn=null,xs(t,n,d,6);break;case 8:Wf(),an=6;break e;default:throw Error(r(462))}}lS();break}catch(he){a0(t,he)}while(!0);return $i=_r=null,F.H=o,F.A=u,Ut=a,gt!==null?0:(Xt=null,xt=0,Tl(),an)}function lS(){for(;gt!==null&&!Ye();)l0(gt)}function l0(t){var n=Ug(t.alternate,t,ca);t.memoizedProps=t.pendingProps,n===null?sc(t):gt=n}function c0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Ag(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=Ag(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:lf(n);default:Og(a,n),n=gt=om(n,ca),n=Ug(a,n,ca)}t.memoizedProps=t.pendingProps,n===null?sc(t):gt=n}function xs(t,n,a,o){$i=_r=null,lf(n),ls=null,go=0;var u=n.return;try{if(Ky(t,u,n,a,xt)){an=1,ql(t,li(a,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;an=1,ql(t,li(a,t.current)),gt=null;return}n.flags&32768?(St||o===1?t=!0:ms||(xt&536870912)!==0?t=!1:(ka=t=!0,(o===2||o===9||o===3||o===6)&&(o=Kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),u0(n,t)):sc(n)}function sc(t){var n=t;do{if((n.flags&32768)!==0){u0(n,ka);return}t=n.return;var a=$y(n.alternate,n,ca);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);an===0&&(an=5)}function u0(t,n){do{var a=eS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);an=6,gt=null}function f0(t,n,a,o,u,d,x,R,H){t.cancelPendingCommit=null;do oc();while(mn!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Ou,xi(t,a,d,x,R,H),t===Xt&&(gt=Xt=null,xt=0),vs=n,Wa=t,ua=a,kf=d,jf=u,e0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,dS(ue,function(){return g0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=G.p,G.p=2,x=Ut,Ut|=4;try{tS(t,n,a)}finally{Ut=x,G.p=u,F.T=o}}mn=1,d0(),h0(),p0()}}function d0(){if(mn===1){mn=0;var t=Wa,n=vs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=Ut;Ut|=4;try{Wg(n,t);var d=rd,x=Jp(t.containerInfo),R=d.focusedElem,H=d.selectionRange;if(x!==R&&R&&R.ownerDocument&&Qp(R.ownerDocument.documentElement,R)){if(H!==null&&wu(R)){var J=H.start,he=H.end;if(he===void 0&&(he=J),"selectionStart"in R)R.selectionStart=J,R.selectionEnd=Math.min(he,R.value.length);else{var ve=R.ownerDocument||document,ee=ve&&ve.defaultView||window;if(ee.getSelection){var ce=ee.getSelection(),ke=R.textContent.length,tt=Math.min(H.start,ke),jt=H.end===void 0?tt:Math.min(H.end,ke);!ce.extend&&tt>jt&&(x=jt,jt=tt,tt=x);var Y=Kp(R,tt),k=Kp(R,jt);if(Y&&k&&(ce.rangeCount!==1||ce.anchorNode!==Y.node||ce.anchorOffset!==Y.offset||ce.focusNode!==k.node||ce.focusOffset!==k.offset)){var Q=ve.createRange();Q.setStart(Y.node,Y.offset),ce.removeAllRanges(),tt>jt?(ce.addRange(Q),ce.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),ce.addRange(Q))}}}}for(ve=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&ve.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ve.length;R++){var ge=ve[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}xc=!!ad,rd=ad=null}finally{Ut=u,G.p=o,F.T=a}}t.current=n,mn=2}}function h0(){if(mn===2){mn=0;var t=Wa,n=vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=Ut;Ut|=4;try{Gg(t,n.alternate,n)}finally{Ut=u,G.p=o,F.T=a}}mn=3}}function p0(){if(mn===4||mn===3){mn=0,L();var t=Wa,n=vs,a=ua,o=e0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,vs=Wa=null,m0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xa=null),jr(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=G.p,G.p=2,F.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var R=o[x];d(R.value,{componentStack:R.stack})}}finally{F.T=n,G.p=u}}(ua&3)!==0&&oc(),zi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Xf?Lo++:(Lo=0,Xf=t):Lo=0,Oo(0)}}function m0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,po(n)))}function oc(){return d0(),h0(),p0(),g0()}function g0(){if(mn!==5)return!1;var t=Wa,n=kf;kf=0;var a=jr(ua),o=F.T,u=G.p;try{G.p=32>a?32:a,F.T=null,a=jf,jf=null;var d=Wa,x=ua;if(mn=0,vs=Wa=null,ua=0,(Ut&6)!==0)throw Error(r(331));var R=Ut;if(Ut|=4,Qg(d.current),Yg(d,d.current,x,a),Ut=R,Oo(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Ee,d)}catch{}return!0}finally{G.p=u,F.T=o,m0(t,n)}}function v0(t,n,a){n=li(a,n),n=bf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(Nn(t,2),zi(t))}function Ht(t,n,a){if(t.tag===3)v0(t,t,a);else for(;n!==null;){if(n.tag===3){v0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){t=li(a,t),a=_g(2),o=Ba(n,a,2),o!==null&&(xg(a,o,n,t),Nn(o,2),zi(o));break}}n=n.return}}function Yf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new aS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Hf=!0,u.add(a),t=cS.bind(null,t,n,a),n.then(t,t))}function cS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(xt&a)===a&&(an===4||an===3&&(xt&62914560)===xt&&300>b()-tc?(Ut&2)===0&&_s(t,0):Gf|=a,gs===xt&&(gs=0)),zi(t)}function _0(t,n){n===0&&(n=zt()),t=mr(t,n),t!==null&&(Nn(t,n),zi(t))}function uS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),_0(t,a)}function fS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),_0(t,a)}function dS(t,n){return bt(t,n)}var lc=null,ys=null,Zf=!1,cc=!1,Kf=!1,Ya=0;function zi(t){t!==ys&&t.next===null&&(ys===null?lc=ys=t:ys=ys.next=t),cc=!0,Zf||(Zf=!0,pS())}function Oo(t,n){if(!Kf&&cc){Kf=!0;do for(var a=!1,o=lc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Ie(42|t)+1)-1,d&=u&~(x&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,M0(o,d))}else d=xt,d=xe(o,o===Xt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ce(o,d)||(a=!0,M0(o,d));o=o.next}while(a);Kf=!1}}function hS(){x0()}function x0(){cc=Zf=!1;var t=0;Ya!==0&&ES()&&(t=Ya);for(var n=b(),a=null,o=lc;o!==null;){var u=o.next,d=y0(o,n);d===0?(o.next=null,a===null?lc=u:a.next=u,u===null&&(ys=a)):(a=o,(t!==0||(d&3)!==0)&&(cc=!0)),o=u}mn!==0&&mn!==5||Oo(t),Ya!==0&&(Ya=0)}function y0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Ie(d),R=1<<x,H=u[x];H===-1?((R&a)===0||(R&o)!==0)&&(u[x]=it(R,n)):H<=n&&(t.expiredLanes|=R),d&=~R}if(n=Xt,a=xt,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Lt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Lt(o),jr(a)){case 2:case 8:a=ye;break;case 32:a=ue;break;case 268435456:a=we;break;default:a=ue}return o=S0.bind(null,t),a=bt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Lt(o),t.callbackPriority=2,t.callbackNode=null,2}function S0(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(oc()&&t.callbackNode!==a)return null;var o=xt;return o=xe(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(n0(t,o,n),y0(t,b()),t.callbackNode!=null&&t.callbackNode===a?S0.bind(null,t):null)}function M0(t,n){if(oc())return null;n0(t,n,!0)}function pS(){AS(function(){(Ut&6)!==0?bt(pe,hS):x0()})}function Qf(){if(Ya===0){var t=rs;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Ya=t}return Ya}function b0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:vl(""+t)}function E0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function mS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=b0((u[yn]||null).action),x=o.submitter;x&&(n=(n=x[yn]||null)?b0(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var R=new Sl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var H=x?E0(u,x):new FormData(u);vf(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(R.preventDefault(),H=x?E0(u,x):new FormData(u),vf(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var Jf=0;Jf<Lu.length;Jf++){var $f=Lu[Jf],gS=$f.toLowerCase(),vS=$f[0].toUpperCase()+$f.slice(1);Mi(gS,"on"+vS)}Mi(tm,"onAnimationEnd"),Mi(nm,"onAnimationIteration"),Mi(im,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Ly,"onTransitionRun"),Mi(Oy,"onTransitionStart"),Mi(Py,"onTransitionCancel"),Mi(am,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function T0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],H=R.instance,J=R.currentTarget;if(R=R.listener,H!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=J;try{d(u)}catch(he){El(he)}u.currentTarget=null,d=H}else for(x=0;x<o.length;x++){if(R=o[x],H=R.instance,J=R.currentTarget,R=R.listener,H!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=J;try{d(u)}catch(he){El(he)}u.currentTarget=null,d=H}}}}function vt(t,n){var a=n[Xr];a===void 0&&(a=n[Xr]=new Set);var o=t+"__bubble";a.has(o)||(A0(n,t,2,!1),a.add(o))}function ed(t,n,a){var o=0;n&&(o|=4),A0(a,t,o,n)}var uc="_reactListening"+Math.random().toString(36).slice(2);function td(t){if(!t[uc]){t[uc]=!0,q.forEach(function(a){a!=="selectionchange"&&(_S.has(a)||ed(a,!1,t),ed(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[uc]||(n[uc]=!0,ed("selectionchange",!1,n))}}function A0(t,n,a,o){switch(tv(n)){case 2:var u=WS;break;case 8:u=qS;break;default:u=gd}a=u.bind(null,n,a,t),u=void 0,!yu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function nd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=wa(R),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=d=x;continue e}R=R.parentNode}}o=o.return}Np(function(){var J=d,he=_u(a),ve=[];e:{var ee=rm.get(t);if(ee!==void 0){var ce=Sl,ke=t;switch(t){case"keypress":if(xl(a)===0)break e;case"keydown":case"keyup":ce=fy;break;case"focusin":ke="focus",ce=Eu;break;case"focusout":ke="blur",ce=Eu;break;case"beforeblur":case"afterblur":ce=Eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=py;break;case tm:case nm:case im:ce=ny;break;case am:ce=gy;break;case"scroll":case"scrollend":ce=Qx;break;case"wheel":ce=_y;break;case"copy":case"cut":case"paste":ce=ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Ip;break;case"toggle":case"beforetoggle":ce=yy}var tt=(n&4)!==0,jt=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?ee!==null?ee+"Capture":null:ee;tt=[];for(var k=J,Q;k!==null;){var ge=k;if(Q=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||Q===null||Y===null||(ge=no(k,Y),ge!=null&&tt.push(Io(k,ge,Q))),jt)break;k=k.return}0<tt.length&&(ee=new ce(ee,ke,null,a,he),ve.push({event:ee,listeners:tt}))}}if((n&7)===0){e:{if(ee=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",ee&&a!==vu&&(ke=a.relatedTarget||a.fromElement)&&(wa(ke)||ke[yi]))break e;if((ce||ee)&&(ee=he.window===he?he:(ee=he.ownerDocument)?ee.defaultView||ee.parentWindow:window,ce?(ke=a.relatedTarget||a.toElement,ce=J,ke=ke?wa(ke):null,ke!==null&&(jt=c(ke),tt=ke.tag,ke!==jt||tt!==5&&tt!==27&&tt!==6)&&(ke=null)):(ce=null,ke=J),ce!==ke)){if(tt=Op,ge="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Ip,ge="onPointerLeave",Y="onPointerEnter",k="pointer"),jt=ce==null?ee:fr(ce),Q=ke==null?ee:fr(ke),ee=new tt(ge,k+"leave",ce,a,he),ee.target=jt,ee.relatedTarget=Q,ge=null,wa(he)===J&&(tt=new tt(Y,k+"enter",ke,a,he),tt.target=Q,tt.relatedTarget=jt,ge=tt),jt=ge,ce&&ke)t:{for(tt=xS,Y=ce,k=ke,Q=0,ge=Y;ge;ge=tt(ge))Q++;ge=0;for(var Je=k;Je;Je=tt(Je))ge++;for(;0<Q-ge;)Y=tt(Y),Q--;for(;0<ge-Q;)k=tt(k),ge--;for(;Q--;){if(Y===k||k!==null&&Y===k.alternate){tt=Y;break t}Y=tt(Y),k=tt(k)}tt=null}else tt=null;ce!==null&&R0(ve,ee,ce,tt,!1),ke!==null&&jt!==null&&R0(ve,jt,ke,tt,!0)}}e:{if(ee=J?fr(J):window,ce=ee.nodeName&&ee.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ee.type==="file")var At=jp;else if(Vp(ee))if(Xp)At=Dy;else{At=Cy;var Ze=Ry}else ce=ee.nodeName,!ce||ce.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?J&&Si(J.elementType)&&(At=jp):At=wy;if(At&&(At=At(t,J))){kp(ve,At,a,he);break e}Ze&&Ze(t,ee,J),t==="focusout"&&J&&ee.type==="number"&&J.memoizedProps.value!=null&&Mn(ee,"number",ee.value)}switch(Ze=J?fr(J):window,t){case"focusin":(Vp(Ze)||Ze.contentEditable==="true")&&(Qr=Ze,Du=J,uo=null);break;case"focusout":uo=Du=Qr=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,$p(ve,a,he);break;case"selectionchange":if(Uy)break;case"keydown":case"keyup":$p(ve,a,he)}var ut;if(Au)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Kr?Hp(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(zp&&a.locale!=="ko"&&(Kr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Kr&&(ut=Up()):(Ua=he,Su="value"in Ua?Ua.value:Ua.textContent,Kr=!0)),Ze=fc(J,yt),0<Ze.length&&(yt=new Pp(yt,t,null,a,he),ve.push({event:yt,listeners:Ze}),ut?yt.data=ut:(ut=Gp(a),ut!==null&&(yt.data=ut)))),(ut=My?by(t,a):Ey(t,a))&&(yt=fc(J,"onBeforeInput"),0<yt.length&&(Ze=new Pp("onBeforeInput","beforeinput",null,a,he),ve.push({event:Ze,listeners:yt}),Ze.data=ut)),mS(ve,t,J,a,he)}T0(ve,n)})}function Io(t,n,a){return{instance:t,listener:n,currentTarget:a}}function fc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=no(t,a),u!=null&&o.unshift(Io(t,u,d)),u=no(t,n),u!=null&&o.push(Io(t,u,d))),t.tag===3)return o;t=t.return}return[]}function xS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function R0(t,n,a,o,u){for(var d=n._reactName,x=[];a!==null&&a!==o;){var R=a,H=R.alternate,J=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||J===null||(H=J,u?(J=no(a,d),J!=null&&x.unshift(Io(a,J,H))):u||(J=no(a,d),J!=null&&x.push(Io(a,J,H)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var yS=/\r\n?/g,SS=/\u0000|\uFFFD/g;function C0(t){return(typeof t=="string"?t:""+t).replace(yS,`
`).replace(SS,"")}function w0(t,n){return n=C0(n),C0(t)===n}function kt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(t,""+o);break;case"className":$e(t,"class",o);break;case"tabIndex":$e(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,a,o);break;case"style":qr(t,o,d);break;case"data":if(n!=="object"){$e(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&kt(t,n,"name",u.name,u,null),kt(t,n,"formEncType",u.formEncType,u,null),kt(t,n,"formMethod",u.formMethod,u,null),kt(t,n,"formTarget",u.formTarget,u,null)):(kt(t,n,"encType",u.encType,u,null),kt(t,n,"method",u.method,u,null),kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Zi);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=vl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),We(t,"popover",o);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":We(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zx.get(a)||a,We(t,a,o))}}function id(t,n,a,o,u,d){switch(a){case"style":qr(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?pn(t,o):(typeof o=="number"||typeof o=="bigint")&&pn(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[yn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):We(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,d,x,a,null)}}u&&kt(t,n,"srcSet",a.srcSet,a,null),o&&kt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var R=d=x=u=null,H=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var he=a[o];if(he!=null)switch(o){case"name":u=he;break;case"type":x=he;break;case"checked":H=he;break;case"defaultChecked":J=he;break;case"value":d=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:kt(t,n,o,he,a,null)}}Yi(t,d,R,H,J,x,u,!1);return;case"select":vt("invalid",t),o=x=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:kt(t,n,u,R,a,null)}n=d,a=x,t.multiple=!!o,n!=null?si(t,!!o,n,!1):a!=null&&si(t,!!o,a,!0);return;case"textarea":vt("invalid",t),d=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:kt(t,n,x,R,a,null)}bn(t,o,u,d);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":kt(t,n,H,o,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Po.length;o++)vt(Po[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,J,o,a,null)}return;default:if(Si(n)){for(he in a)a.hasOwnProperty(he)&&(o=a[he],o!==void 0&&id(t,n,he,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&kt(t,n,R,o,a,null))}function MS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,R=null,H=null,J=null,he=null;for(ce in a){var ve=a[ce];if(a.hasOwnProperty(ce)&&ve!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=ve;default:o.hasOwnProperty(ce)||kt(t,n,ce,null,o,ve)}}for(var ee in o){var ce=o[ee];if(ve=a[ee],o.hasOwnProperty(ee)&&(ce!=null||ve!=null))switch(ee){case"type":d=ce;break;case"name":u=ce;break;case"checked":J=ce;break;case"defaultChecked":he=ce;break;case"value":x=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==ve&&kt(t,n,ee,ce,o,ve)}}Sn(t,x,R,H,J,he,d,u);return;case"select":ce=x=R=ee=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":ce=H;default:o.hasOwnProperty(d)||kt(t,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":ee=d;break;case"defaultValue":R=d;break;case"multiple":x=d;default:d!==H&&kt(t,n,u,d,o,H)}n=R,a=x,o=ce,ee!=null?si(t,!!a,ee,!1):!!o!=!!a&&(n!=null?si(t,!!a,n,!0):si(t,!!a,a?[]:"",!1));return;case"textarea":ce=ee=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:kt(t,n,R,null,o,u)}for(x in o)if(u=o[x],d=a[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":ee=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&kt(t,n,x,u,o,d)}Ft(t,ee,ce);return;case"option":for(var ke in a)ee=a[ke],a.hasOwnProperty(ke)&&ee!=null&&!o.hasOwnProperty(ke)&&(ke==="selected"?t.selected=!1:kt(t,n,ke,null,o,ee));for(H in o)ee=o[H],ce=a[H],o.hasOwnProperty(H)&&ee!==ce&&(ee!=null||ce!=null)&&(H==="selected"?t.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":kt(t,n,H,ee,o,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ee=a[tt],a.hasOwnProperty(tt)&&ee!=null&&!o.hasOwnProperty(tt)&&kt(t,n,tt,null,o,ee);for(J in o)if(ee=o[J],ce=a[J],o.hasOwnProperty(J)&&ee!==ce&&(ee!=null||ce!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(r(137,n));break;default:kt(t,n,J,ee,o,ce)}return;default:if(Si(n)){for(var jt in a)ee=a[jt],a.hasOwnProperty(jt)&&ee!==void 0&&!o.hasOwnProperty(jt)&&id(t,n,jt,void 0,o,ee);for(he in o)ee=o[he],ce=a[he],!o.hasOwnProperty(he)||ee===ce||ee===void 0&&ce===void 0||id(t,n,he,ee,o,ce);return}}for(var Y in a)ee=a[Y],a.hasOwnProperty(Y)&&ee!=null&&!o.hasOwnProperty(Y)&&kt(t,n,Y,null,o,ee);for(ve in o)ee=o[ve],ce=a[ve],!o.hasOwnProperty(ve)||ee===ce||ee==null&&ce==null||kt(t,n,ve,ee,o,ce)}function D0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,x=u.initiatorType,R=u.duration;if(d&&R&&D0(x)){for(x=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],J=H.startTime;if(J>R)break;var he=H.transferSize,ve=H.initiatorType;he&&D0(ve)&&(H=H.responseEnd,x+=he*(H<R?1:(R-J)/(H-J)))}if(--o,n+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ad=null,rd=null;function dc(t){return t.nodeType===9?t:t.ownerDocument}function N0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function sd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var od=null;function ES(){var t=window.event;return t&&t.type==="popstate"?t===od?!1:(od=t,!0):(od=null,!1)}var L0=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,O0=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof O0<"u"?function(t){return O0.resolve(null).then(t).catch(RS)}:L0;function RS(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function P0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Es(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,zo(a);for(var d=a.firstChild;d;){var x=d.nextSibling,R=d.nodeName;d[ur]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&zo(t.ownerDocument.body);a=u}while(a);Es(n)}function I0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ld(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),to(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function CS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ur])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function wS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function z0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hi(t.nextSibling),t===null))return null;return t}function cd(t){return t.data==="$?"||t.data==="$~"}function ud(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function DS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var fd=null;function F0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return hi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function B0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function H0(t,n,a){switch(n=dc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function zo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);to(t)}var pi=new Map,G0=new Set;function hc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fa=G.d;G.d={f:NS,r:US,D:LS,C:OS,L:PS,m:IS,X:FS,S:zS,M:BS};function NS(){var t=fa.f(),n=ac();return t||n}function US(t){var n=Da(t);n!==null&&n.tag===5&&n.type==="form"?ag(n):fa.r(t)}var Ss=typeof document>"u"?null:document;function V0(t,n,a){var o=Ss;if(o&&typeof n=="string"&&n){var u=at(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),G0.has(u)||(G0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),C(n),o.head.appendChild(n)))}}function LS(t){fa.D(t),V0("dns-prefetch",t,null)}function OS(t,n){fa.C(t,n),V0("preconnect",t,n)}function PS(t,n,a){fa.L(t,n,a);var o=Ss;if(o&&t&&n){var u='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+at(a.imageSizes)+'"]')):u+='[href="'+at(t)+'"]';var d=u;switch(n){case"style":d=Ms(t);break;case"script":d=bs(t)}pi.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(d))||n==="script"&&o.querySelector(Bo(d))||(n=o.createElement("link"),wn(n,"link",t),C(n),o.head.appendChild(n)))}}function IS(t,n){fa.m(t,n);var a=Ss;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+at(o)+'"][href="'+at(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=bs(t)}if(!pi.has(d)&&(t=g({rel:"modulepreload",href:t},n),pi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bo(d)))return}o=a.createElement("link"),wn(o,"link",t),C(o),a.head.appendChild(o)}}}function zS(t,n,a){fa.S(t,n,a);var o=Ss;if(o&&t){var u=Na(o).hoistableStyles,d=Ms(t);n=n||"default";var x=u.get(d);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(Fo(d)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(d))&&dd(t,a);var H=x=o.createElement("link");C(H),wn(H,"link",t),H._p=new Promise(function(J,he){H.onload=J,H.onerror=he}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,pc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(d,x)}}}function FS(t,n){fa.X(t,n);var a=Ss;if(a&&t){var o=Na(a).hoistableScripts,u=bs(t),d=o.get(u);d||(d=a.querySelector(Bo(u)),d||(t=g({src:t,async:!0},n),(n=pi.get(u))&&hd(t,n),d=a.createElement("script"),C(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function BS(t,n){fa.M(t,n);var a=Ss;if(a&&t){var o=Na(a).hoistableScripts,u=bs(t),d=o.get(u);d||(d=a.querySelector(Bo(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=pi.get(u))&&hd(t,n),d=a.createElement("script"),C(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function k0(t,n,a,o){var u=(u=te.current)?hc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ms(a.href),a=Na(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ms(a.href);var d=Na(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(Fo(t)))&&!d._p&&(x.instance=d,x.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),d||HS(u,t,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=bs(a),a=Na(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ms(t){return'href="'+at(t)+'"'}function Fo(t){return'link[rel="stylesheet"]['+t+"]"}function j0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function HS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),C(n),t.head.appendChild(n))}function bs(t){return'[src="'+at(t)+'"]'}function Bo(t){return"script[async]"+t}function X0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+at(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),C(o),wn(o,"style",u),pc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ms(a.href);var d=t.querySelector(Fo(u));if(d)return n.state.loading|=4,n.instance=d,C(d),d;o=j0(a),(u=pi.get(u))&&dd(o,u),d=(t.ownerDocument||t).createElement("link"),C(d);var x=d;return x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),wn(d,"link",o),n.state.loading|=4,pc(d,a.precedence,t),n.instance=d;case"script":return d=bs(a.src),(u=t.querySelector(Bo(d)))?(n.instance=u,C(u),u):(o=a,(u=pi.get(d))&&(o=g({},a),hd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),C(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,a.precedence,t));return n.instance}function pc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function hd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var mc=null;function W0(t,n,a){if(mc===null){var o=new Map,u=mc=new Map;u.set(a,o)}else u=mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[ur]||d[ln]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var R=o.get(x);R?R.push(d):o.set(x,[d])}}return o}function q0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function GS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Y0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function VS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ms(o.href),d=n.querySelector(Fo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=gc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,C(d);return}d=n.ownerDocument||n,o=j0(o),(u=pi.get(u))&&dd(o,u),d=d.createElement("link"),C(d);var x=d;x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),wn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=gc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var pd=0;function kS(t,n){return t.stylesheets&&t.count===0&&_c(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&_c(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&pd===0&&(pd=62500*bS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&_c(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>pd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vc=null;function _c(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vc=new Map,n.forEach(jS,t),vc=null,gc.call(t))}function jS(t,n){if(!(n.state.loading&4)){var a=vc.get(t);if(a)var o=a.get(null);else{a=new Map,vc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,u),a.set(x,u),this.count++,o=gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ho={$$typeof:U,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function XS(t,n,a,o,u,d,x,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Z0(t,n,a,o,u,d,x,R,H,J,he,ve){return t=new XS(t,n,a,x,H,J,he,ve,R),n=1,d===!0&&(n|=24),d=Zn(3,null,null,n),t.current=d,d.stateNode=t,n=Wu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ku(d),t}function K0(t){return t?(t=es,t):es}function Q0(t,n,a,o,u,d){u=K0(u),o.context===null?o.context=u:o.pendingContext=u,o=Fa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ba(t,o,n),a!==null&&(Xn(a,t,n),_o(a,t,n))}function J0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function md(t,n){J0(t,n),(t=t.alternate)&&J0(t,n)}function $0(t){if(t.tag===13||t.tag===31){var n=mr(t,67108864);n!==null&&Xn(n,t,67108864),md(t,67108864)}}function ev(t){if(t.tag===13||t.tag===31){var n=ei();n=Js(n);var a=mr(t,n);a!==null&&Xn(a,t,n),md(t,n)}}var xc=!0;function WS(t,n,a,o){var u=F.T;F.T=null;var d=G.p;try{G.p=2,gd(t,n,a,o)}finally{G.p=d,F.T=u}}function qS(t,n,a,o){var u=F.T;F.T=null;var d=G.p;try{G.p=8,gd(t,n,a,o)}finally{G.p=d,F.T=u}}function gd(t,n,a,o){if(xc){var u=vd(o);if(u===null)nd(t,n,o,yc,a),nv(t,o);else if(ZS(u,t,n,a,o))o.stopPropagation();else if(nv(t,o),n&4&&-1<YS.indexOf(t)){for(;u!==null;){var d=Da(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Me(d.pendingLanes);if(x!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var H=1<<31-Ie(x);R.entanglements[1]|=H,x&=~H}zi(d),(Ut&6)===0&&(nc=b()+500,Oo(0))}}break;case 31:case 13:R=mr(d,2),R!==null&&Xn(R,d,2),ac(),md(d,2)}if(d=vd(o),d===null&&nd(t,n,o,yc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else nd(t,n,o,null,a)}}function vd(t){return t=_u(t),_d(t)}var yc=null;function _d(t){if(yc=null,t=wa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return yc=t,null}function tv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case pe:return 2;case ye:return 8;case ue:case Ke:return 32;case we:return 268435456;default:return 32}default:return 32}}var xd=!1,Ka=null,Qa=null,Ja=null,Go=new Map,Vo=new Map,$a=[],YS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nv(t,n){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Da(n),n!==null&&$0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ZS(t,n,a,o,u){switch(n){case"focusin":return Ka=ko(Ka,t,n,a,o,u),!0;case"dragenter":return Qa=ko(Qa,t,n,a,o,u),!0;case"mouseover":return Ja=ko(Ja,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Go.set(d,ko(Go.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Vo.set(d,ko(Vo.get(d)||null,t,n,a,o,u)),!0}return!1}function iv(t){var n=wa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Li(t.priority,function(){ev(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Li(t.priority,function(){ev(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=vd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);vu=o,a.target.dispatchEvent(o),vu=null}else return n=Da(a),n!==null&&$0(n),t.blockedOn=a,!1;n.shift()}return!0}function av(t,n,a){Sc(t)&&a.delete(n)}function KS(){xd=!1,Ka!==null&&Sc(Ka)&&(Ka=null),Qa!==null&&Sc(Qa)&&(Qa=null),Ja!==null&&Sc(Ja)&&(Ja=null),Go.forEach(av),Vo.forEach(av)}function Mc(t,n){t.blockedOn===n&&(t.blockedOn=null,xd||(xd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,KS)))}var bc=null;function rv(t){bc!==t&&(bc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){bc===t&&(bc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(_d(o||a)===null)continue;break}var d=Da(a);d!==null&&(t.splice(n,3),n-=3,vf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Es(t){function n(H){return Mc(H,t)}Ka!==null&&Mc(Ka,t),Qa!==null&&Mc(Qa,t),Ja!==null&&Mc(Ja,t),Go.forEach(n),Vo.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)iv(a),a.blockedOn===null&&$a.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],x=u[yn]||null;if(typeof d=="function")x||rv(a);else if(x){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[yn]||null)R=x.formAction;else if(_d(u)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),rv(a)}}}function sv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function yd(t){this._internalRoot=t}Ec.prototype.render=yd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ei();Q0(a,o,t,n,null,null)},Ec.prototype.unmount=yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Q0(t.current,2,null,t,null,null),ac(),n[yi]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var n=$s();t={blockedOn:null,target:t,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,t),a===0&&iv(t)}};var ov=e.version;if(ov!=="19.2.3")throw Error(r(527,ov,"19.2.3"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var QS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{Ee=Tc.inject(QS),Te=Tc}catch{}}return Xo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=pg,d=mg,x=gg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Z0(t,1,!1,null,null,a,o,null,u,d,x,sv),t[yi]=n.current,td(t),new yd(n)},Xo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=pg,x=mg,R=gg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Z0(t,1,!0,n,a??null,o,u,H,d,x,R,sv),n.context=K0(null),a=n.current,o=ei(),o=Js(o),u=Fa(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,Nn(n,a),zi(n),t[yi]=n.current,td(t),new Ec(n)},Xo.version="19.2.3",Xo}var vv;function oM(){if(vv)return bd.exports;vv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),bd.exports=sM(),bd.exports}var lM=oM();var _v="popstate";function cM(s={}){function e(l,c){let{pathname:f="/",search:h="",hash:m=""}=Vr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),lh("",{pathname:f,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:nl(c))}function r(l,c){vi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return fM(e,i,r,s)}function Jt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function vi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uM(){return Math.random().toString(36).substring(2,10)}function xv(s,e){return{usr:s.state,key:s.key,idx:e}}function lh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Vr(e):e,state:i,key:e&&e.key||r||uM()}}function nl({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Vr(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function fM(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function g(){h="POP";let S=v(),_=S==null?null:S-p;p=S,m&&m({action:h,location:A.location,delta:_})}function y(S,_){h="PUSH";let D=lh(A.location,S,_);i&&i(D,S),p=v()+1;let U=xv(D,p),P=A.createHref(D);try{f.pushState(U,"",P)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(P)}c&&m&&m({action:h,location:A.location,delta:1})}function M(S,_){h="REPLACE";let D=lh(A.location,S,_);i&&i(D,S),p=v();let U=xv(D,p),P=A.createHref(D);f.replaceState(U,"",P),c&&m&&m({action:h,location:A.location,delta:0})}function E(S){return dM(S)}let A={get action(){return h},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(_v,g),m=S,()=>{l.removeEventListener(_v,g),m=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:M,go(S){return f.go(S)}};return A}function dM(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:nl(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function R_(s,e,i="/"){return hM(s,e,i,!1)}function hM(s,e,i,r){let l=typeof e=="string"?Vr(e):e,c=ba(l.pathname||"/",i);if(c==null)return null;let f=C_(s);pM(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=TM(c);h=bM(f[m],p,r)}return h}function C_(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&m)return;Jt(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let g=xa([r,v.relativePath]),y=i.concat(v);f.children&&f.children.length>0&&(Jt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),C_(f.children,e,y,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:SM(g,f.index),routesMeta:y})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of w_(f.path))c(f,h,!0,m)}),e}function w_(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=w_(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function pM(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:MM(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var mM=/^:[\w-]+$/,gM=3,vM=2,_M=1,xM=10,yM=-2,yv=s=>s==="*";function SM(s,e){let i=s.split("/"),r=i.length;return i.some(yv)&&(r+=yM),e&&(r+=vM),i.filter(l=>!yv(l)).reduce((l,c)=>l+(mM.test(c)?gM:c===""?_M:xM),r)}function MM(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function bM(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=au({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),y=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=au({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:xa([c,g.pathname]),pathnameBase:wM(xa([c,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(c=xa([c,g.pathnameBase]))}return f}function au(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=EM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:v,isOptional:g},y)=>{if(v==="*"){let E=h[y]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[y];return g&&!M?p[v]=void 0:p[v]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function EM(s,e=!1,i=!0){vi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function TM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function ba(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var D_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AM=s=>D_.test(s);function RM(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Vr(s):s,c;if(i)if(AM(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),vi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=Sv(i.substring(1),"/"):c=Sv(i,e)}else c=e;return{pathname:c,search:DM(r),hash:NM(l)}}function Sv(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Rd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function CM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function N_(s){let e=CM(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function U_(s,e,i,r=!1){let l;typeof s=="string"?l=Vr(s):(l={...s},Jt(!l.pathname||!l.pathname.includes("?"),Rd("?","pathname","search",l)),Jt(!l.pathname||!l.pathname.includes("#"),Rd("#","pathname","hash",l)),Jt(!l.search||!l.search.includes("#"),Rd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!r&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),g-=1;l.pathname=y.join("/")}h=g>=0?e[g]:"/"}let m=RM(l,h),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var xa=s=>s.join("/").replace(/\/\/+/g,"/"),wM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),DM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,NM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,UM=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function LM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function OM(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var L_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function O_(s,e){let i=s;if(typeof i!="string"||!D_.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(L_)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=ba(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{vi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var P_=["POST","PUT","PATCH","DELETE"];new Set(P_);var PM=["GET",...P_];new Set(PM);var Ys=ae.createContext(null);Ys.displayName="DataRouter";var lu=ae.createContext(null);lu.displayName="DataRouterState";var IM=ae.createContext(!1),I_=ae.createContext({isTransitioning:!1});I_.displayName="ViewTransition";var zM=ae.createContext(new Map);zM.displayName="Fetchers";var FM=ae.createContext(null);FM.displayName="Await";var _i=ae.createContext(null);_i.displayName="Navigation";var ol=ae.createContext(null);ol.displayName="Location";var qi=ae.createContext({outlet:null,matches:[],isDataRoute:!1});qi.displayName="Route";var op=ae.createContext(null);op.displayName="RouteError";var z_="REACT_ROUTER_ERROR",BM="REDIRECT",HM="ROUTE_ERROR_RESPONSE";function GM(s){if(s.startsWith(`${z_}:${BM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function VM(s){if(s.startsWith(`${z_}:${HM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new UM(e.status,e.statusText,e.data)}catch{}}function kM(s,{relative:e}={}){Jt(ll(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ae.useContext(_i),{hash:l,pathname:c,search:f}=cl(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:xa([i,c])),r.createHref({pathname:h,search:f,hash:l})}function ll(){return ae.useContext(ol)!=null}function Ca(){return Jt(ll(),"useLocation() may be used only in the context of a <Router> component."),ae.useContext(ol).location}var F_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function B_(s){ae.useContext(_i).static||ae.useLayoutEffect(s)}function H_(){let{isDataRoute:s}=ae.useContext(qi);return s?nb():jM()}function jM(){Jt(ll(),"useNavigate() may be used only in the context of a <Router> component.");let s=ae.useContext(Ys),{basename:e,navigator:i}=ae.useContext(_i),{matches:r}=ae.useContext(qi),{pathname:l}=Ca(),c=JSON.stringify(N_(r)),f=ae.useRef(!1);return B_(()=>{f.current=!0}),ae.useCallback((m,p={})=>{if(vi(f.current,F_),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=U_(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:xa([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,c,l,s])}ae.createContext(null);function G_(){let{matches:s}=ae.useContext(qi),e=s[s.length-1];return e?e.params:{}}function cl(s,{relative:e}={}){let{matches:i}=ae.useContext(qi),{pathname:r}=Ca(),l=JSON.stringify(N_(i));return ae.useMemo(()=>U_(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function XM(s,e){return V_(s,e)}function V_(s,e,i,r,l){Jt(ll(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=ae.useContext(_i),{matches:f}=ae.useContext(qi),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",v=h?h.pathnameBase:"/",g=h&&h.route;{let D=g&&g.path||"";j_(p,!g||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let y=Ca(),M;if(e){let D=typeof e=="string"?Vr(e):e;Jt(v==="/"||D.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${D.pathname}" was given in the \`location\` prop.`),M=D}else M=y;let E=M.pathname||"/",A=E;if(v!=="/"){let D=v.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let S=R_(s,{pathname:A});vi(g||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),vi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=KM(S&&S.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:xa([v,c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?v:xa([v,c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,i,r,l);return e&&_?ae.createElement(ol.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function WM(){let s=tb(),e=LM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=ae.createElement(ae.Fragment,null,ae.createElement("p",null,"💿 Hey developer 👋"),ae.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ae.createElement("code",{style:c},"ErrorBoundary")," or"," ",ae.createElement("code",{style:c},"errorElement")," prop on your route.")),ae.createElement(ae.Fragment,null,ae.createElement("h2",null,"Unexpected Application Error!"),ae.createElement("h3",{style:{fontStyle:"italic"}},e),i?ae.createElement("pre",{style:l},i):null,f)}var qM=ae.createElement(WM,null),k_=class extends ae.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=VM(s.digest);i&&(s=i)}let e=s!==void 0?ae.createElement(qi.Provider,{value:this.props.routeContext},ae.createElement(op.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?ae.createElement(YM,{error:s},e):e}};k_.contextType=IM;var Cd=new WeakMap;function YM({children:s,error:e}){let{basename:i}=ae.useContext(_i);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=GM(e.digest);if(r){let l=Cd.get(e);if(l)throw l;let c=O_(r.location,i);if(L_&&!Cd.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Cd.set(e,f),f}return ae.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function ZM({routeContext:s,match:e,children:i}){let r=ae.useContext(Ys);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ae.createElement(qi.Provider,{value:s},i)}function KM(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let v=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Jt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,m=-1;if(i)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=v),g.route.id){let{loaderData:y,errors:M}=i,E=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(v,g)=>{r(v,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:OM(i.matches),errorInfo:g})}:void 0;return c.reduceRight((v,g,y)=>{let M,E=!1,A=null,S=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,A=g.route.errorElement||qM,h&&(m<0&&y===0?(j_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):m===y&&(E=!0,S=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,y+1)),D=()=>{let U;return M?U=A:E?U=S:g.route.Component?U=ae.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=v,ae.createElement(ZM,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:i!=null},children:U})};return i&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?ae.createElement(k_,{location:i.location,revalidation:i.revalidation,component:A,error:M,children:D(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):D()},null)}function lp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function QM(s){let e=ae.useContext(Ys);return Jt(e,lp(s)),e}function JM(s){let e=ae.useContext(lu);return Jt(e,lp(s)),e}function $M(s){let e=ae.useContext(qi);return Jt(e,lp(s)),e}function cp(s){let e=$M(s),i=e.matches[e.matches.length-1];return Jt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function eb(){return cp("useRouteId")}function tb(){let s=ae.useContext(op),e=JM("useRouteError"),i=cp("useRouteError");return s!==void 0?s:e.errors?.[i]}function nb(){let{router:s}=QM("useNavigate"),e=cp("useNavigate"),i=ae.useRef(!1);return B_(()=>{i.current=!0}),ae.useCallback(async(l,c={})=>{vi(i.current,F_),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var Mv={};function j_(s,e,i){!e&&!Mv[s]&&(Mv[s]=!0,vi(!1,i))}ae.memo(ib);function ib({routes:s,future:e,state:i,onError:r}){return V_(s,void 0,i,r,e)}function Or(s){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ab({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){Jt(!ll(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=ae.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Vr(i));let{pathname:p="/",search:v="",hash:g="",state:y=null,key:M="default"}=i,E=ae.useMemo(()=>{let A=ba(p,h);return A==null?null:{location:{pathname:A,search:v,hash:g,state:y,key:M},navigationType:r}},[h,p,v,g,y,M,r]);return vi(E!=null,`<Router basename="${h}"> is not able to match the URL "${p}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:ae.createElement(_i.Provider,{value:m},ae.createElement(ol.Provider,{children:e,value:E}))}function rb({children:s,location:e}){return XM(ch(s),e)}function ch(s,e=[]){let i=[];return ae.Children.forEach(s,(r,l)=>{if(!ae.isValidElement(r))return;let c=[...e,l];if(r.type===ae.Fragment){i.push.apply(i,ch(r.props.children,c));return}Jt(r.type===Or,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=ch(r.props.children,c)),i.push(f)}),i}var Kc="get",Qc="application/x-www-form-urlencoded";function cu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function sb(s){return cu(s)&&s.tagName.toLowerCase()==="button"}function ob(s){return cu(s)&&s.tagName.toLowerCase()==="form"}function lb(s){return cu(s)&&s.tagName.toLowerCase()==="input"}function cb(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function ub(s,e){return s.button===0&&(!e||e==="_self")&&!cb(s)}var Ac=null;function fb(){if(Ac===null)try{new FormData(document.createElement("form"),0),Ac=!1}catch{Ac=!0}return Ac}var db=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wd(s){return s!=null&&!db.has(s)?(vi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qc}"`),null):s}function hb(s,e){let i,r,l,c,f;if(ob(s)){let h=s.getAttribute("action");r=h?ba(h,e):null,i=s.getAttribute("method")||Kc,l=wd(s.getAttribute("enctype"))||Qc,c=new FormData(s)}else if(sb(s)||lb(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?ba(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Kc,l=wd(s.getAttribute("formenctype"))||wd(h.getAttribute("enctype"))||Qc,c=new FormData(h,s),!fb()){let{name:p,type:v,value:g}=s;if(v==="image"){let y=p?`${p}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else p&&c.append(p,g)}}else{if(cu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Kc,r=null,l=Qc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function up(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function pb(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&ba(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function mb(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gb(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function vb(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await mb(c,i);return f.links?f.links():[]}return[]}));return Sb(r.flat(1).filter(gb).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function bv(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let v=r.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function _b(s,e,{includeHydrateFallback:i}={}){return xb(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function xb(s){return[...new Set(s)]}function yb(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function Sb(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(yb(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function X_(){let s=ae.useContext(Ys);return up(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Mb(){let s=ae.useContext(lu);return up(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var fp=ae.createContext(void 0);fp.displayName="FrameworkContext";function W_(){let s=ae.useContext(fp);return up(s,"You must render this element inside a <HydratedRouter> element"),s}function bb(s,e){let i=ae.useContext(fp),[r,l]=ae.useState(!1),[c,f]=ae.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=e,y=ae.useRef(null);ae.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=_=>{_.forEach(D=>{f(D.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return y.current&&S.observe(y.current),()=>{S.disconnect()}}},[s]),ae.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,y,{}]:[c,y,{onFocus:Wo(h,M),onBlur:Wo(m,E),onMouseEnter:Wo(p,M),onMouseLeave:Wo(v,E),onTouchStart:Wo(g,M)}]:[!1,y,{}]}function Wo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function Eb({page:s,...e}){let{router:i}=X_(),r=ae.useMemo(()=>R_(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ae.createElement(Ab,{page:s,matches:r,...e}):null}function Tb(s){let{manifest:e,routeModules:i}=W_(),[r,l]=ae.useState([]);return ae.useEffect(()=>{let c=!1;return vb(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function Ab({page:s,matches:e,...i}){let r=Ca(),{manifest:l,routeModules:c}=W_(),{basename:f}=X_(),{loaderData:h,matches:m}=Mb(),p=ae.useMemo(()=>bv(s,e,m,l,r,"data"),[s,e,m,l,r]),v=ae.useMemo(()=>bv(s,e,m,l,r,"assets"),[s,e,m,l,r]),g=ae.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(e.forEach(_=>{let D=l.routes[_.route.id];!D||!D.hasLoader||(!p.some(U=>U.route.id===_.route.id)&&_.route.id in h&&c[_.route.id]?.shouldRevalidate||D.hasClientLoader?A=!0:E.add(_.route.id))}),E.size===0)return[];let S=pb(s,f,"data");return A&&E.size>0&&S.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,h,r,l,p,e,s,c]),y=ae.useMemo(()=>_b(v,l),[v,l]),M=Tb(v);return ae.createElement(ae.Fragment,null,g.map(E=>ae.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),y.map(E=>ae.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:A})=>ae.createElement("link",{key:E,nonce:i.nonce,...A})))}function Rb(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Cb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cb&&(window.__reactRouterVersion="7.11.0")}catch{}function wb({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=ae.useRef();l.current==null&&(l.current=cM({window:r,v5Compat:!0}));let c=l.current,[f,h]=ae.useState({action:c.action,location:c.location}),m=ae.useCallback(p=>{i===!1?h(p):ae.startTransition(()=>h(p))},[i]);return ae.useLayoutEffect(()=>c.listen(m),[c,m]),ae.createElement(ab,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var q_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ji=ae.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:y,...M},E){let{basename:A,unstable_useTransitions:S}=ae.useContext(_i),_=typeof p=="string"&&q_.test(p),D=O_(p,A);p=D.to;let U=kM(p,{relative:l}),[P,I,B]=bb(r,M),z=Lb(p,{replace:f,state:h,target:m,preventScrollReset:v,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:y,unstable_useTransitions:S});function Z(N){e&&e(N),N.defaultPrevented||z(N)}let w=ae.createElement("a",{...M,...B,href:D.absoluteURL||U,onClick:D.isExternal||c?e:Z,ref:Rb(E,I),target:m,"data-discover":!_&&i==="render"?"true":void 0});return P&&!_?ae.createElement(ae.Fragment,null,w,ae.createElement(Eb,{page:U})):w});ji.displayName="Link";var Db=ae.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},v){let g=cl(f,{relative:p.relative}),y=Ca(),M=ae.useContext(lu),{navigator:E,basename:A}=ae.useContext(_i),S=M!=null&&Fb(g)&&h===!0,_=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,D=y.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(D=D.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&A&&(U=ba(U,A)||U);const P=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let I=D===_||!l&&D.startsWith(_)&&D.charAt(P)==="/",B=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),z={isActive:I,isPending:B,isTransitioning:S},Z=I?e:void 0,w;typeof r=="function"?w=r(z):w=[r,I?"active":null,B?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let N=typeof c=="function"?c(z):c;return ae.createElement(ji,{...p,"aria-current":Z,className:w,ref:v,style:N,to:f,viewTransition:h},typeof m=="function"?m(z):m)});Db.displayName="NavLink";var Nb=ae.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Kc,action:h,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:y,...M},E)=>{let{unstable_useTransitions:A}=ae.useContext(_i),S=Ib(),_=zb(h,{relative:p}),D=f.toLowerCase()==="get"?"get":"post",U=typeof h=="string"&&q_.test(h),P=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let B=I.nativeEvent.submitter,z=B?.getAttribute("formmethod")||f,Z=()=>S(B||I.currentTarget,{fetcherKey:e,method:z,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:y});A&&i!==!1?ae.startTransition(()=>Z()):Z()};return ae.createElement("form",{ref:E,method:D,action:_,onSubmit:r?m:P,...M,"data-discover":!U&&s==="render"?"true":void 0})});Nb.displayName="Form";function Ub(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Y_(s){let e=ae.useContext(Ys);return Jt(e,Ub(s)),e}function Lb(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let p=H_(),v=Ca(),g=cl(s,{relative:c});return ae.useCallback(y=>{if(ub(y,e)){y.preventDefault();let M=i!==void 0?i:nl(v)===nl(g),E=()=>p(s,{replace:M,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h});m?ae.startTransition(()=>E()):E()}},[v,p,g,i,r,e,s,l,c,f,h,m])}var Ob=0,Pb=()=>`__${String(++Ob)}__`;function Ib(){let{router:s}=Y_("useSubmit"),{basename:e}=ae.useContext(_i),i=eb(),r=s.fetch,l=s.navigate;return ae.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:v,body:g}=hb(c,e);if(f.navigate===!1){let y=f.fetcherKey||Pb();await r(y,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function zb(s,{relative:e}={}){let{basename:i}=ae.useContext(_i),r=ae.useContext(qi);Jt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...cl(s||".",{relative:e})},f=Ca();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(v=>v==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let v=h.toString();c.search=v?`?${v}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:xa([i,c.pathname])),nl(c)}function Fb(s,{relative:e}={}){let i=ae.useContext(I_);Jt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Y_("useViewTransitionState"),l=cl(s,{relative:e});if(!i.isTransitioning)return!1;let c=ba(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ba(i.nextLocation.pathname,r)||i.nextLocation.pathname;return au(l.pathname,f)!=null||au(l.pathname,c)!=null}function Bb(){const[s,e]=ae.useState(!1);return ae.useEffect(()=>{const i=setTimeout(()=>{e(!0),document.body.classList.add("loaded")},800);return()=>clearTimeout(i)},[]),s?null:T.jsx("div",{id:"loader",children:T.jsxs("div",{className:"loader-content",children:[T.jsx("img",{src:"/incepta-2026/logo.png",alt:"INCEPTA LOADER",className:"loader-logo"}),T.jsx("div",{className:"loader-spinner"})]})})}const Hb=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gb=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),Ev=s=>{const e=Gb(s);return e.charAt(0).toUpperCase()+e.slice(1)},Z_=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),Vb=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var kb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const jb=ae.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},m)=>ae.createElement("svg",{ref:m,...kb,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:Z_("lucide",l),...!c&&!Vb(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,v])=>ae.createElement(p,v)),...Array.isArray(c)?c:[c]]));const ht=(s,e)=>{const i=ae.forwardRef(({className:r,...l},c)=>ae.createElement(jb,{ref:c,iconNode:e,className:Z_(`lucide-${Hb(Ev(s))}`,`lucide-${s}`,r),...l}));return i.displayName=Ev(s),i};const Xb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Hr=ht("arrow-left",Xb);const Wb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],dp=ht("arrow-right",Wb);const qb=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Yb=ht("award",qb);const Zb=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Kb=ht("book-open",Zb);const Qb=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],K_=ht("bot",Qb);const Jb=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],Q_=ht("brain-circuit",Jb);const $b=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],hp=ht("calendar",$b);const eE=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],tE=ht("chart-column",eE);const nE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],iE=ht("chevron-down",nE);const aE=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],rE=ht("chevron-up",aE);const sE=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],oE=ht("circle-check-big",sE);const lE=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],cE=ht("clock",lE);const uE=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],J_=ht("compass",uE);const fE=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],dE=ht("download",fE);const hE=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],pE=ht("facebook",hE);const mE=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],$_=ht("graduation-cap",mE);const gE=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],ex=ht("house",gE);const vE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],pp=ht("image",vE);const _E=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],xE=ht("info",_E);const yE=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],tx=ht("instagram",yE);const SE=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],uu=ht("layout-dashboard",SE);const ME=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],nx=ht("linkedin",ME);const bE=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Tv=ht("loader-circle",bE);const EE=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],mp=ht("mail",EE);const TE=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],fu=ht("map-pin",TE);const AE=[["path",{d:"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",key:"vbtd3f"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],ix=ht("monitor-play",AE);const RE=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],gp=ht("music",RE);const CE=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],ax=ht("palette",CE);const wE=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],DE=ht("phone",wE);const NE=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],rx=ht("presentation",NE);const UE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],sx=ht("shield-check",UE);const LE=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ox=ht("sparkles",LE);const OE=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],PE=ht("star",OE);const IE=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],zE=ht("sun",IE);const FE=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],BE=ht("trophy",FE);const HE=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],GE=ht("twitter",HE);const VE=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],vp=ht("users",VE);const kE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],lx=ht("x",kE);const jE=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],cx=ht("zap",jE),Av=[{id:"hero",label:"Home",icon:ex},{id:"about",label:"About",icon:xE},{id:"events",label:"Explore",icon:hp},{id:"gallery",label:"Gallery",icon:pp},{id:"stats",label:"Stats",icon:tE},{id:"contact",label:"Contact",icon:mp}];function XE(){const[s,e]=ae.useState(!1),[i,r]=ae.useState(!1);ae.useEffect(()=>{const c=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),ae.useEffect(()=>{i?document.body.classList.add("sidebar-open"):document.body.classList.remove("sidebar-open")},[i]);const l=c=>{const f=document.getElementById(c);f&&f.scrollIntoView({behavior:"smooth"}),r(!1)};return T.jsxs(T.Fragment,{children:[T.jsxs("header",{className:s?"scrolled":"",children:[T.jsx(ji,{to:"/",className:"logo",children:T.jsx("img",{src:"/incepta-2026/logo.png",alt:"INCEPTA 2026",style:{height:"40px",width:"auto",verticalAlign:"middle"}})}),T.jsx("nav",{children:T.jsx("ul",{children:Av.map(c=>T.jsx("li",{children:T.jsx("a",{href:`#${c.id}`,onClick:f=>{f.preventDefault(),l(c.id)},children:c.label})},c.id))})}),T.jsxs("button",{className:`burger-menu ${i?"active":""}`,onClick:()=>r(!i),"aria-label":"Toggle menu","aria-expanded":i,children:[T.jsx("span",{}),T.jsx("span",{}),T.jsx("span",{})]})]}),T.jsxs("div",{className:`sidebar ${i?"active":""}`,role:"navigation","aria-label":"Mobile navigation","aria-hidden":!i,children:[T.jsxs("div",{className:"sidebar-header",children:[T.jsx("div",{className:"sidebar-logo",children:T.jsx("img",{src:"/incepta-2026/logo.png",alt:"INCEPTA 2026",style:{height:"40px",width:"auto"}})}),T.jsx("button",{className:"sidebar-close",onClick:()=>r(!1),"aria-label":"Close menu",children:T.jsx(lx,{size:24})})]}),T.jsx("nav",{className:"sidebar-nav",children:Av.map(c=>{const f=c.icon;return T.jsxs("a",{href:`#${c.id}`,onClick:h=>{h.preventDefault(),l(c.id)},children:[T.jsx(f,{size:20}),c.label]},c.id)})}),T.jsxs("div",{className:"sidebar-footer",children:[T.jsx("p",{children:"Follow us on social media"}),T.jsxs("div",{className:"social-links",style:{marginTop:"15px",gap:"10px",justifyContent:"center"},children:[T.jsx("a",{href:"#","aria-label":"Instagram",className:"social-link",children:T.jsx(tx,{size:20})}),T.jsx("a",{href:"#","aria-label":"LinkedIn",className:"social-link",children:T.jsx(nx,{size:20})})]})]})]}),T.jsx("div",{className:`overlay ${i?"active":""}`,onClick:()=>r(!1)})]})}const WE=[{name:"Instagram",icon:"instagram",href:"#"},{name:"LinkedIn",icon:"linkedin",href:"#"},{name:"Facebook",icon:"facebook",href:"#"},{name:"Twitter",icon:"twitter",href:"#"}],qE={instagram:tx,linkedin:nx,facebook:pE,twitter:GE};function YE(){return T.jsxs("footer",{children:[T.jsx("div",{className:"footer-logo",children:"INCEPTA 2026"}),T.jsx("div",{className:"social-links",children:WE.map(s=>{const e=qE[s.icon];return T.jsx("a",{href:s.href,className:"social-link","aria-label":s.name,children:T.jsx(e,{size:22})},s.name)})}),T.jsx("p",{className:"footer-text",children:"© 2026 INCEPTA. Organized by ASCA, College of Engineering Trivandrum."}),T.jsxs("p",{className:"footer-text",style:{marginTop:"12px"},children:["Designed with ",T.jsx("span",{className:"footer-text-highlight",children:"♥"})," by ASCA Tech Team"]})]})}function ZE(){return T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"bg-orb bg-orb-1"}),T.jsx("div",{className:"bg-orb bg-orb-2"}),T.jsx("div",{className:"bg-orb bg-orb-3"})]})}const _p="182",KE=0,Rv=1,QE=2,Jc=1,JE=2,el=3,cr=0,qn=1,va=2,ya=0,Gs=1,uh=2,Cv=3,wv=4,$E=5,Ir=100,e1=101,t1=102,n1=103,i1=104,a1=200,r1=201,s1=202,o1=203,fh=204,dh=205,l1=206,c1=207,u1=208,f1=209,d1=210,h1=211,p1=212,m1=213,g1=214,hh=0,ph=1,mh=2,ks=3,gh=4,vh=5,_h=6,xh=7,ux=0,v1=1,_1=2,Vi=0,fx=1,dx=2,hx=3,px=4,mx=5,gx=6,vx=7,_x=300,Gr=301,js=302,yh=303,Sh=304,du=306,Mh=1e3,_a=1001,bh=1002,Dn=1003,x1=1004,Rc=1005,Pn=1006,Dd=1007,Fr=1008,ai=1009,xx=1010,yx=1011,il=1012,xp=1013,Xi=1014,Hi=1015,Ea=1016,yp=1017,Sp=1018,al=1020,Sx=35902,Mx=35899,bx=1021,Ex=1022,wi=1023,Ta=1026,Br=1027,Tx=1028,Mp=1029,Xs=1030,bp=1031,Ep=1033,$c=33776,eu=33777,tu=33778,nu=33779,Eh=35840,Th=35841,Ah=35842,Rh=35843,Ch=36196,wh=37492,Dh=37496,Nh=37488,Uh=37489,Lh=37490,Oh=37491,Ph=37808,Ih=37809,zh=37810,Fh=37811,Bh=37812,Hh=37813,Gh=37814,Vh=37815,kh=37816,jh=37817,Xh=37818,Wh=37819,qh=37820,Yh=37821,Zh=36492,Kh=36494,Qh=36495,Jh=36283,$h=36284,ep=36285,tp=36286,y1=3200,S1=0,M1=1,or="",gi="srgb",Ws="srgb-linear",ru="linear",Gt="srgb",Ts=7680,Dv=519,b1=512,E1=513,T1=514,Tp=515,A1=516,R1=517,Ap=518,C1=519,Nv=35044,Uv="300 es",Gi=2e3,su=2001;function Ax(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ou(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function w1(){const s=ou("canvas");return s.style.display="block",s}const Lv={};function Ov(...s){const e="THREE."+s.shift();console.log(e,...s)}function st(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ct(...s){const e="THREE."+s.shift();console.error(e,...s)}function rl(...s){const e=s.join(" ");e in Lv||(Lv[e]=!0,st(...s))}function D1(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Zs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nd=Math.PI/180,np=180/Math.PI;function ul(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Mt(s,e,i){return Math.max(e,Math.min(i,s))}function N1(s,e){return(s%e+e)%e}function Ud(s,e,i){return(1-i)*s+i*e}function qo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class It{constructor(e=0,i=0){It.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3],y=c[f+0],M=c[f+1],E=c[f+2],A=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(h>=1){e[i+0]=y,e[i+1]=M,e[i+2]=E,e[i+3]=A;return}if(g!==A||m!==y||p!==M||v!==E){let S=m*y+p*M+v*E+g*A;S<0&&(y=-y,M=-M,E=-E,A=-A,S=-S);let _=1-h;if(S<.9995){const D=Math.acos(S),U=Math.sin(D);_=Math.sin(_*D)/U,h=Math.sin(h*D)/U,m=m*_+y*h,p=p*_+M*h,v=v*_+E*h,g=g*_+A*h}else{m=m*_+y*h,p=p*_+M*h,v=v*_+E*h,g=g*_+A*h;const D=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=D,p*=D,v*=D,g*=D}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=c[f],y=c[f+1],M=c[f+2],E=c[f+3];return e[i]=h*E+v*g+m*M-p*y,e[i+1]=m*E+v*y+p*g-h*M,e[i+2]=p*E+v*M+h*y-m*g,e[i+3]=v*E-h*g-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),g=h(c/2),y=m(r/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=y*v*g+p*M*E,this._y=p*M*g-y*v*E,this._z=p*v*E+y*M*g,this._w=p*v*g-y*M*E;break;case"YXZ":this._x=y*v*g+p*M*E,this._y=p*M*g-y*v*E,this._z=p*v*E-y*M*g,this._w=p*v*g+y*M*E;break;case"ZXY":this._x=y*v*g-p*M*E,this._y=p*M*g+y*v*E,this._z=p*v*E+y*M*g,this._w=p*v*g-y*M*E;break;case"ZYX":this._x=y*v*g-p*M*E,this._y=p*M*g+y*v*E,this._z=p*v*E-y*M*g,this._w=p*v*g+y*M*E;break;case"YZX":this._x=y*v*g+p*M*E,this._y=p*M*g+y*v*E,this._z=p*v*E-y*M*g,this._w=p*v*g-y*M*E;break;case"XZY":this._x=y*v*g-p*M*E,this._y=p*M*g-y*v*E,this._z=p*v*E+y*M*g,this._w=p*v*g+y*M*E;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],y=r+h+g;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+f*h+l*p-c*m,this._y=l*v+f*m+c*h-r*p,this._z=c*v+f*p+r*m-l*h,this._w=f*v-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,i=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Pv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Pv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),v=2*(h*i-c*l),g=2*(c*r-f*i);return this.x=i+m*p+f*g-h*v,this.y=r+m*v+h*p-c*g,this.z=l+m*g+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ld.copy(this).projectOnVector(e),this.sub(Ld)}reflect(e){return this.sub(Ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ld=new re,Pv=new fl;class ft{constructor(e,i,r,l,c,f,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],v=r[4],g=r[7],y=r[2],M=r[5],E=r[8],A=l[0],S=l[3],_=l[6],D=l[1],U=l[4],P=l[7],I=l[2],B=l[5],z=l[8];return c[0]=f*A+h*D+m*I,c[3]=f*S+h*U+m*B,c[6]=f*_+h*P+m*z,c[1]=p*A+v*D+g*I,c[4]=p*S+v*U+g*B,c[7]=p*_+v*P+g*z,c[2]=y*A+M*D+E*I,c[5]=y*S+M*U+E*B,c[8]=y*_+M*P+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*h*p-r*c*v+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=v*f-h*p,y=h*m-v*c,M=p*c-f*m,E=i*g+r*y+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=g*A,e[1]=(l*p-v*r)*A,e[2]=(h*r-l*f)*A,e[3]=y*A,e[4]=(v*i-l*m)*A,e[5]=(l*c-h*i)*A,e[6]=M*A,e[7]=(r*m-p*i)*A,e[8]=(f*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Od.makeScale(e,i)),this}rotate(e){return this.premultiply(Od.makeRotation(-e)),this}translate(e,i){return this.premultiply(Od.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Od=new ft,Iv=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zv=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function U1(){const s={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Gt&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Gt&&(l.r=Vs(l.r),l.g=Vs(l.g),l.b=Vs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===or?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return rl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return rl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ws]:{primaries:e,whitePoint:r,transfer:ru,toXYZ:Iv,fromXYZ:zv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:r,transfer:Gt,toXYZ:Iv,fromXYZ:zv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),s}const Tt=U1();function Sa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class L1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{As===void 0&&(As=ou("canvas")),As.width=e.width,As.height=e.height;const l=As.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=As}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ou("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Sa(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Sa(i[r]/255)*255):i[r]=Sa(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O1=0;class Rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Pd(l[f].image)):c.push(Pd(l[f]))}else c=Pd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Pd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?L1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let P1=0;const Id=new re;class Fn extends Zs{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=_a,l=_a,c=Pn,f=Fr,h=wi,m=ai,p=Fn.DEFAULT_ANISOTROPY,v=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=ul(),this.name="",this.source=new Rp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mh:e.x=e.x-Math.floor(e.x);break;case _a:e.x=e.x<0?0:1;break;case bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mh:e.y=e.y-Math.floor(e.y);break;case _a:e.y=e.y<0?0:1;break;case bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=_x;Fn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],v=m[4],g=m[8],y=m[1],M=m[5],E=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(v-y)<.01&&Math.abs(g-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,P=(M+1)/2,I=(_+1)/2,B=(v+y)/4,z=(g+A)/4,Z=(E+S)/4;return U>P&&U>I?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=B/r,c=z/r):P>I?P<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),r=B/l,c=Z/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=z/c,l=Z/c),this.set(r,l,c,i),this}let D=Math.sqrt((S-E)*(S-E)+(g-A)*(g-A)+(y-v)*(y-v));return Math.abs(D)<.001&&(D=1),this.x=(S-E)/D,this.y=(g-A)/D,this.z=(y-v)/D,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I1 extends Zs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Fn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Rp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends I1{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Rx extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class z1 extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ti):Ti.fromBufferAttribute(c,f),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Cc.copy(r.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),wc.subVectors(this.max,Yo),Rs.subVectors(e.a,Yo),Cs.subVectors(e.b,Yo),ws.subVectors(e.c,Yo),tr.subVectors(Cs,Rs),nr.subVectors(ws,Cs),Cr.subVectors(Rs,ws);let i=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Cr.z,Cr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Cr.z,0,-Cr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Cr.y,Cr.x,0];return!zd(i,Rs,Cs,ws,wc)||(i=[1,0,0,0,1,0,0,0,1],!zd(i,Rs,Cs,ws,wc))?!1:(Dc.crossVectors(tr,nr),i=[Dc.x,Dc.y,Dc.z],zd(i,Rs,Cs,ws,wc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const da=[new re,new re,new re,new re,new re,new re,new re,new re],Ti=new re,Cc=new dl,Rs=new re,Cs=new re,ws=new re,tr=new re,nr=new re,Cr=new re,Yo=new re,wc=new re,Dc=new re,wr=new re;function zd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){wr.fromArray(s,c);const h=l.x*Math.abs(wr.x)+l.y*Math.abs(wr.y)+l.z*Math.abs(wr.z),m=e.dot(wr),p=i.dot(wr),v=r.dot(wr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const F1=new dl,Zo=new re,Fd=new re;class hu{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):F1.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Zo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(Fd)),this.expandByPoint(Zo.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ha=new re,Bd=new re,Nc=new re,ir=new re,Hd=new re,Uc=new re,Gd=new re;class Cx{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Bd.copy(e).add(i).multiplyScalar(.5),Nc.copy(i).sub(e).normalize(),ir.copy(this.origin).sub(Bd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Nc),h=ir.dot(this.direction),m=-ir.dot(Nc),p=ir.lengthSq(),v=Math.abs(1-f*f);let g,y,M,E;if(v>0)if(g=f*m-h,y=f*h-m,E=c*v,g>=0)if(y>=-E)if(y<=E){const A=1/v;g*=A,y*=A,M=g*(g+f*y+2*h)+y*(f*g+y+2*m)+p}else y=c,g=Math.max(0,-(f*y+h)),M=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(f*y+h)),M=-g*g+y*(y+2*m)+p;else y<=-E?(g=Math.max(0,-(-f*c+h)),y=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+y*(y+2*m)+p):y<=E?(g=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+p):(g=Math.max(0,-(f*c+h)),y=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+y*(y+2*m)+p);else y=f>0?-c:c,g=Math.max(0,-(f*y+h)),M=-g*g+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Bd).addScaledVector(Nc,y),M}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const r=ha.dot(this.direction),l=ha.dot(ha)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),v>=0?(c=(e.min.y-y.y)*v,f=(e.max.y-y.y)*v):(c=(e.max.y-y.y)*v,f=(e.min.y-y.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-y.z)*g,m=(e.max.z-y.z)*g):(h=(e.max.z-y.z)*g,m=(e.min.z-y.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,r,l,c){Hd.subVectors(i,e),Uc.subVectors(r,e),Gd.crossVectors(Hd,Uc);let f=this.direction.dot(Gd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;ir.subVectors(this.origin,e);const m=h*this.direction.dot(Uc.crossVectors(ir,Uc));if(m<0)return null;const p=h*this.direction.dot(Hd.cross(ir));if(p<0||m+p>f)return null;const v=-h*ir.dot(Gd);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,i,r,l,c,f,h,m,p,v,g,y,M,E,A,S){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,v,g,y,M,E,A,S)}set(e,i,r,l,c,f,h,m,p,v,g,y,M,E,A,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=y,_[3]=M,_[7]=E,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ds.setFromMatrixColumn(e,0).length(),c=1/Ds.setFromMatrixColumn(e,1).length(),f=1/Ds.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const y=f*v,M=f*g,E=h*v,A=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+E*p,i[5]=y-A*p,i[9]=-h*m,i[2]=A-y*p,i[6]=E+M*p,i[10]=f*m}else if(e.order==="YXZ"){const y=m*v,M=m*g,E=p*v,A=p*g;i[0]=y+A*h,i[4]=E*h-M,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-h,i[2]=M*h-E,i[6]=A+y*h,i[10]=f*m}else if(e.order==="ZXY"){const y=m*v,M=m*g,E=p*v,A=p*g;i[0]=y-A*h,i[4]=-f*g,i[8]=E+M*h,i[1]=M+E*h,i[5]=f*v,i[9]=A-y*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const y=f*v,M=f*g,E=h*v,A=h*g;i[0]=m*v,i[4]=E*p-M,i[8]=y*p+A,i[1]=m*g,i[5]=A*p+y,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const y=f*m,M=f*p,E=h*m,A=h*p;i[0]=m*v,i[4]=A-y*g,i[8]=E*g+M,i[1]=g,i[5]=f*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*g+E,i[10]=y-A*g}else if(e.order==="XZY"){const y=f*m,M=f*p,E=h*m,A=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=y*g+A,i[5]=f*v,i[9]=M*g-E,i[2]=E*g-M,i[6]=h*v,i[10]=A*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B1,e,H1)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),ar.crossVectors(r,ti),ar.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),ar.crossVectors(r,ti)),ar.normalize(),Lc.crossVectors(ti,ar),l[0]=ar.x,l[4]=Lc.x,l[8]=ti.x,l[1]=ar.y,l[5]=Lc.y,l[9]=ti.y,l[2]=ar.z,l[6]=Lc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],v=r[1],g=r[5],y=r[9],M=r[13],E=r[2],A=r[6],S=r[10],_=r[14],D=r[3],U=r[7],P=r[11],I=r[15],B=l[0],z=l[4],Z=l[8],w=l[12],N=l[1],j=l[5],oe=l[9],se=l[13],me=l[2],de=l[6],F=l[10],G=l[14],ie=l[3],be=l[7],Se=l[11],O=l[15];return c[0]=f*B+h*N+m*me+p*ie,c[4]=f*z+h*j+m*de+p*be,c[8]=f*Z+h*oe+m*F+p*Se,c[12]=f*w+h*se+m*G+p*O,c[1]=v*B+g*N+y*me+M*ie,c[5]=v*z+g*j+y*de+M*be,c[9]=v*Z+g*oe+y*F+M*Se,c[13]=v*w+g*se+y*G+M*O,c[2]=E*B+A*N+S*me+_*ie,c[6]=E*z+A*j+S*de+_*be,c[10]=E*Z+A*oe+S*F+_*Se,c[14]=E*w+A*se+S*G+_*O,c[3]=D*B+U*N+P*me+I*ie,c[7]=D*z+U*j+P*de+I*be,c[11]=D*Z+U*oe+P*F+I*Se,c[15]=D*w+U*se+P*G+I*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],v=e[2],g=e[6],y=e[10],M=e[14],E=e[3],A=e[7],S=e[11],_=e[15],D=m*M-p*y,U=h*M-p*g,P=h*y-m*g,I=f*M-p*v,B=f*y-m*v,z=f*g-h*v;return i*(A*D-S*U+_*P)-r*(E*D-S*I+_*B)+l*(E*U-A*I+_*z)-c*(E*P-A*B+S*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=e[9],y=e[10],M=e[11],E=e[12],A=e[13],S=e[14],_=e[15],D=g*S*p-A*y*p+A*m*M-h*S*M-g*m*_+h*y*_,U=E*y*p-v*S*p-E*m*M+f*S*M+v*m*_-f*y*_,P=v*A*p-E*g*p+E*h*M-f*A*M-v*h*_+f*g*_,I=E*g*m-v*A*m-E*h*y+f*A*y+v*h*S-f*g*S,B=i*D+r*U+l*P+c*I;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return e[0]=D*z,e[1]=(A*y*c-g*S*c-A*l*M+r*S*M+g*l*_-r*y*_)*z,e[2]=(h*S*c-A*m*c+A*l*p-r*S*p-h*l*_+r*m*_)*z,e[3]=(g*m*c-h*y*c-g*l*p+r*y*p+h*l*M-r*m*M)*z,e[4]=U*z,e[5]=(v*S*c-E*y*c+E*l*M-i*S*M-v*l*_+i*y*_)*z,e[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*_-i*m*_)*z,e[7]=(f*y*c-v*m*c+v*l*p-i*y*p-f*l*M+i*m*M)*z,e[8]=P*z,e[9]=(E*g*c-v*A*c-E*r*M+i*A*M+v*r*_-i*g*_)*z,e[10]=(f*A*c-E*h*c+E*r*p-i*A*p-f*r*_+i*h*_)*z,e[11]=(v*h*c-f*g*c-v*r*p+i*g*p+f*r*M-i*h*M)*z,e[12]=I*z,e[13]=(v*A*l-E*g*l+E*r*y-i*A*y-v*r*S+i*g*S)*z,e[14]=(E*h*l-f*A*l-E*r*m+i*A*m+f*r*S-i*h*S)*z,e[15]=(f*g*l-v*h*l+v*r*m-i*g*m-f*r*y+i*h*y)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,v=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*f,0,p*m-l*h,v*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,v=f+f,g=h+h,y=c*p,M=c*v,E=c*g,A=f*v,S=f*g,_=h*g,D=m*p,U=m*v,P=m*g,I=r.x,B=r.y,z=r.z;return l[0]=(1-(A+_))*I,l[1]=(M+P)*I,l[2]=(E-U)*I,l[3]=0,l[4]=(M-P)*B,l[5]=(1-(y+_))*B,l[6]=(S+D)*B,l[7]=0,l[8]=(E+U)*z,l[9]=(S-D)*z,l[10]=(1-(y+A))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=Ds.set(l[0],l[1],l[2]).length();const f=Ds.set(l[4],l[5],l[6]).length(),h=Ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ai.copy(this);const p=1/c,v=1/f,g=1/h;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=v,Ai.elements[5]*=v,Ai.elements[6]*=v,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,i.setFromRotationMatrix(Ai),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Gi,m=!1){const p=this.elements,v=2*c/(i-e),g=2*c/(r-l),y=(i+e)/(i-e),M=(r+l)/(r-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(h===Gi)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===su)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Gi,m=!1){const p=this.elements,v=2/(i-e),g=2/(r-l),y=-(i+e)/(i-e),M=-(r+l)/(r-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(h===Gi)E=-2/(f-c),A=-(f+c)/(f-c);else if(h===su)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ds=new re,Ai=new $t,B1=new re(0,0,0),H1=new re(1,1,1),ar=new re,Lc=new re,ti=new re,Fv=new $t,Bv=new fl;class Aa{constructor(e=0,i=0,r=0,l=Aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Fv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Bv.setFromEuler(this),this.setFromQuaternion(Bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Aa.DEFAULT_ORDER="XYZ";class wx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let G1=0;const Hv=new re,Ns=new fl,pa=new $t,Oc=new re,Ko=new re,V1=new re,k1=new fl,Gv=new re(1,0,0),Vv=new re(0,1,0),kv=new re(0,0,1),jv={type:"added"},j1={type:"removed"},Us={type:"childadded",child:null},Vd={type:"childremoved",child:null};class Bn extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new re,i=new Aa,r=new fl,l=new re(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $t},normalMatrix:{value:new ft}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ns.setFromAxisAngle(e,i),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,i){return Ns.setFromAxisAngle(e,i),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Gv,e)}rotateY(e){return this.rotateOnAxis(Vv,e)}rotateZ(e){return this.rotateOnAxis(kv,e)}translateOnAxis(e,i){return Hv.copy(e).applyQuaternion(this.quaternion),this.position.add(Hv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Gv,e)}translateY(e){return this.translateOnAxis(Vv,e)}translateZ(e){return this.translateOnAxis(kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Oc.copy(e):Oc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Ko,Oc,this.up):pa.lookAt(Oc,Ko,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),Ns.setFromRotationMatrix(pa),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jv),Us.child=e,this.dispatchEvent(Us),Us.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(j1),Vd.child=e,this.dispatchEvent(Vd),Vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jv),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,V1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,k1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),y=f(e.skeletons),M=f(e.animations),E=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new re(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new re,ma=new re,kd=new re,ga=new re,Ls=new re,Os=new re,Xv=new re,jd=new re,Xd=new re,Wd=new re,qd=new rn,Yd=new rn,Zd=new rn;class Ci{constructor(e=new re,i=new re,r=new re){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),ma.subVectors(r,i),kd.subVectors(e,i);const f=Ri.dot(Ri),h=Ri.dot(ma),m=Ri.dot(kd),p=ma.dot(ma),v=ma.dot(kd),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const y=1/g,M=(p*m-h*v)*y,E=(f*v-h*m)*y;return c.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(f,ga.y),m.addScaledVector(h,ga.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return qd.setScalar(0),Yd.setScalar(0),Zd.setScalar(0),qd.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,r),Zd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(qd,c.x),f.addScaledVector(Yd,c.y),f.addScaledVector(Zd,c.z),f}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),ma.subVectors(e,i),Ri.cross(ma).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ri.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ci.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Ls.subVectors(l,r),Os.subVectors(c,r),jd.subVectors(e,r);const m=Ls.dot(jd),p=Os.dot(jd);if(m<=0&&p<=0)return i.copy(r);Xd.subVectors(e,l);const v=Ls.dot(Xd),g=Os.dot(Xd);if(v>=0&&g<=v)return i.copy(l);const y=m*g-v*p;if(y<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(r).addScaledVector(Ls,f);Wd.subVectors(e,c);const M=Ls.dot(Wd),E=Os.dot(Wd);if(E>=0&&M<=E)return i.copy(c);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Os,h);const S=v*E-M*g;if(S<=0&&g-v>=0&&M-E>=0)return Xv.subVectors(c,l),h=(g-v)/(g-v+(M-E)),i.copy(l).addScaledVector(Xv,h);const _=1/(S+A+y);return f=A*_,h=y*_,i.copy(r).addScaledVector(Ls,f).addScaledVector(Os,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function Kd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Pt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=N1(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Kd(f,c,e+1/3),this.g=Kd(f,c,e),this.b=Kd(f,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const r=Dx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Tt.workingToColorSpace(On.copy(this),e),Math.round(Mt(On.r*255,0,255))*65536+Math.round(Mt(On.g*255,0,255))*256+Math.round(Mt(On.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=v<=.5?g/(f+h):g/(2-f-h),f){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=gi){Tt.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+i,rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(rr),e.getHSL(Pc);const r=Ud(rr.h,Pc.h,i),l=Ud(rr.s,Pc.s,i),c=Ud(rr.l,Pc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Pt;Pt.NAMES=Dx;let X1=0;class hl extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=Gs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fh&&(r.blendSrc=this.blendSrc),this.blendDst!==dh&&(r.blendDst=this.blendDst),this.blendEquation!==Ir&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nx extends hl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.combine=ux,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new re,Ic=new It;let W1=0;class Ni{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Nv,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ic.fromBufferAttribute(this,i),Ic.applyMatrix3(e),this.setXY(i,Ic.x,Ic.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=qo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=qo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=qo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=qo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=qo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nv&&(e.usage=this.usage),e}}class Ux extends Ni{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Lx extends Ni{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ma extends Ni{constructor(e,i,r){super(new Float32Array(e),i,r)}}let q1=0;const mi=new $t,Qd=new Bn,Ps=new re,ni=new dl,Qo=new dl,xn=new re;class Ui extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ax(e)?Lx:Ux)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,r){return mi.makeTranslation(e,i,r),this.applyMatrix4(mi),this}scale(e,i,r){return mi.makeScale(e,i,r),this.applyMatrix4(mi),this}lookAt(e){return Qd.lookAt(e),Qd.updateMatrix(),this.applyMatrix4(Qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ma(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Qo.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(ni.min,Qo.min),ni.expandByPoint(xn),xn.addVectors(ni.max,Qo.max),ni.expandByPoint(xn)):(ni.expandByPoint(Qo.min),ni.expandByPoint(Qo.max))}ni.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)xn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)xn.fromBufferAttribute(h,p),m&&(Ps.fromBufferAttribute(e,p),xn.add(Ps)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<r.count;Z++)h[Z]=new re,m[Z]=new re;const p=new re,v=new re,g=new re,y=new It,M=new It,E=new It,A=new re,S=new re;function _(Z,w,N){p.fromBufferAttribute(r,Z),v.fromBufferAttribute(r,w),g.fromBufferAttribute(r,N),y.fromBufferAttribute(c,Z),M.fromBufferAttribute(c,w),E.fromBufferAttribute(c,N),v.sub(p),g.sub(p),M.sub(y),E.sub(y);const j=1/(M.x*E.y-E.x*M.y);isFinite(j)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(j),S.copy(g).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(j),h[Z].add(A),h[w].add(A),h[N].add(A),m[Z].add(S),m[w].add(S),m[N].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let Z=0,w=D.length;Z<w;++Z){const N=D[Z],j=N.start,oe=N.count;for(let se=j,me=j+oe;se<me;se+=3)_(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const U=new re,P=new re,I=new re,B=new re;function z(Z){I.fromBufferAttribute(l,Z),B.copy(I);const w=h[Z];U.copy(w),U.sub(I.multiplyScalar(I.dot(w))).normalize(),P.crossVectors(B,w);const j=P.dot(m[Z])<0?-1:1;f.setXYZW(Z,U.x,U.y,U.z,j)}for(let Z=0,w=D.length;Z<w;++Z){const N=D[Z],j=N.start,oe=N.count;for(let se=j,me=j+oe;se<me;se+=3)z(e.getX(se+0)),z(e.getX(se+1)),z(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new re,c=new re,f=new re,h=new re,m=new re,p=new re,v=new re,g=new re;if(e)for(let y=0,M=e.count;y<M;y+=3){const E=e.getX(y+0),A=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),h.add(v),m.add(v),p.add(v),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,g=h.normalized,y=new p.constructor(m.length*v);let M=0,E=0;for(let A=0,S=m.length;A<S;A++){h.isInterleavedBufferAttribute?M=m[A]*h.data.stride+h.offset:M=m[A]*v;for(let _=0;_<v;_++)y[E++]=p[M++]}return new Ni(y,v,g)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ui,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const y=p[v],M=e(y,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,y=p.length;g<y;g++){const M=p[g];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let y=0,M=g.length;y<M;y++)v.push(g[y].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wv=new $t,Dr=new Cx,zc=new hu,qv=new re,Fc=new re,Bc=new re,Hc=new re,Jd=new re,Gc=new re,Yv=new re,Vc=new re;class Ra extends Bn{constructor(e=new Ui,i=new Nx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Gc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(Jd.fromBufferAttribute(g,e),f?Gc.addScaledVector(Jd,v):Gc.addScaledVector(Jd.sub(i),v))}i.add(Gc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(c),Dr.copy(e.ray).recast(e.near),!(zc.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(zc,qv)===null||Dr.origin.distanceToSquared(qv)>(e.far-e.near)**2))&&(Wv.copy(c).invert(),Dr.copy(e.ray).applyMatrix4(Wv),!(r.boundingBox!==null&&Dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Dr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,y=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,A=y.length;E<A;E++){const S=y[E],_=f[S.materialIndex],D=Math.max(S.start,M.start),U=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let P=D,I=U;P<I;P+=3){const B=h.getX(P),z=h.getX(P+1),Z=h.getX(P+2);l=kc(this,_,e,r,p,v,g,B,z,Z),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let S=E,_=A;S<_;S+=3){const D=h.getX(S),U=h.getX(S+1),P=h.getX(S+2);l=kc(this,f,e,r,p,v,g,D,U,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=y.length;E<A;E++){const S=y[E],_=f[S.materialIndex],D=Math.max(S.start,M.start),U=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let P=D,I=U;P<I;P+=3){const B=P,z=P+1,Z=P+2;l=kc(this,_,e,r,p,v,g,B,z,Z),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=E,_=A;S<_;S+=3){const D=S,U=S+1,P=S+2;l=kc(this,f,e,r,p,v,g,D,U,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Y1(s,e,i,r,l,c,f,h){let m;if(e.side===qn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===cr,h),m===null)return null;Vc.copy(h),Vc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Vc);return p<i.near||p>i.far?null:{distance:p,point:Vc.clone(),object:s}}function kc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Fc),s.getVertexPosition(m,Bc),s.getVertexPosition(p,Hc);const v=Y1(s,e,i,r,Fc,Bc,Hc,Yv);if(v){const g=new re;Ci.getBarycoord(Yv,Fc,Bc,Hc,g),l&&(v.uv=Ci.getInterpolatedAttribute(l,h,m,p,g,new It)),c&&(v.uv1=Ci.getInterpolatedAttribute(c,h,m,p,g,new It)),f&&(v.normal=Ci.getInterpolatedAttribute(f,h,m,p,g,new re),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new re,materialIndex:0};Ci.getNormal(Fc,Bc,Hc,y.normal),v.face=y,v.barycoord=g}return v}class pl extends Ui{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let y=0,M=0;E("z","y","x",-1,-1,r,i,e,f,c,0),E("z","y","x",1,-1,r,i,-e,f,c,1),E("x","z","y",1,1,e,r,i,l,f,2),E("x","z","y",1,-1,e,r,-i,l,f,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Ma(p,3)),this.setAttribute("normal",new Ma(v,3)),this.setAttribute("uv",new Ma(g,2));function E(A,S,_,D,U,P,I,B,z,Z,w){const N=P/z,j=I/Z,oe=P/2,se=I/2,me=B/2,de=z+1,F=Z+1;let G=0,ie=0;const be=new re;for(let Se=0;Se<F;Se++){const O=Se*j-se;for(let ne=0;ne<de;ne++){const _e=ne*N-oe;be[A]=_e*D,be[S]=O*U,be[_]=me,p.push(be.x,be.y,be.z),be[A]=0,be[S]=0,be[_]=B>0?1:-1,v.push(be.x,be.y,be.z),g.push(ne/z),g.push(1-Se/Z),G+=1}}for(let Se=0;Se<Z;Se++)for(let O=0;O<z;O++){const ne=y+O+de*Se,_e=y+O+de*(Se+1),Re=y+(O+1)+de*(Se+1),He=y+(O+1)+de*Se;m.push(ne,_e,He),m.push(_e,Re,He),ie+=6}h.addGroup(M,ie,w),M+=ie,y+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function zn(s){const e={};for(let i=0;i<s.length;i++){const r=qs(s[i]);for(const l in r)e[l]=r[l]}return e}function Z1(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Ox(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const K1={clone:qs,merge:zn};var Q1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends hl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q1,this.fragmentShader=J1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=Z1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Px extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new re,Zv=new It,Kv=new It;class ii extends Px{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(Nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,i){return this.getViewBounds(e,Zv,Kv),i.subVectors(Kv,Zv)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Nd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Is=-90,zs=1;class $1 extends Bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(Is,zs,e,i);l.layers=this.layers,this.add(l);const c=new ii(Is,zs,e,i);c.layers=this.layers,this.add(c);const f=new ii(Is,zs,e,i);f.layers=this.layers,this.add(f);const h=new ii(Is,zs,e,i);h.layers=this.layers,this.add(h);const m=new ii(Is,zs,e,i);m.layers=this.layers,this.add(m);const p=new ii(Is,zs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===su)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(g,y,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Ix extends Fn{constructor(e=[],i=Gr,r,l,c,f,h,m,p,v){super(e,i,r,l,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zx extends ki{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Ix(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new pl(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:ya});c.uniforms.tEquirect.value=i;const f=new Ra(l,c),h=i.minFilter;return i.minFilter===Fr&&(i.minFilter=Pn),new $1(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class jc extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eT={type:"move"};class $d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,r),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=v.position.distanceTo(g.position),M=.02,E=.005;p.inputState.pinching&&y>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(eT)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new jc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class tT extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Aa,this.environmentIntensity=1,this.environmentRotation=new Aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class nT extends Fn{constructor(e=null,i=1,r=1,l,c,f,h,m,p=Dn,v=Dn,g,y){super(null,f,h,m,p,v,l,c,g,y),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new re,iT=new re,aT=new ft;class Pr{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=eh.subVectors(r,i).cross(iT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(eh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||aT.getNormalMatrix(e),l=this.coplanarPoint(eh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new hu,rT=new It(.5,.5),Xc=new re;class Cp{constructor(e=new Pr,i=new Pr,r=new Pr,l=new Pr,c=new Pr,f=new Pr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Gi,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],y=c[6],M=c[7],E=c[8],A=c[9],S=c[10],_=c[11],D=c[12],U=c[13],P=c[14],I=c[15];if(l[0].setComponents(p-f,M-v,_-E,I-D).normalize(),l[1].setComponents(p+f,M+v,_+E,I+D).normalize(),l[2].setComponents(p+h,M+g,_+A,I+U).normalize(),l[3].setComponents(p-h,M-g,_-A,I-U).normalize(),r)l[4].setComponents(m,y,S,P).normalize(),l[5].setComponents(p-m,M-y,_-S,I-P).normalize();else if(l[4].setComponents(p-m,M-y,_-S,I-P).normalize(),i===Gi)l[5].setComponents(p+m,M+y,_+S,I+P).normalize();else if(i===su)l[5].setComponents(m,y,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const i=rT.distanceTo(e.center);return Nr.radius=.7071067811865476+i,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Xc.x=l.normal.x>0?e.max.x:e.min.x,Xc.y=l.normal.y>0?e.max.y:e.min.y,Xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fx extends hl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qv=new $t,ip=new Cx,Wc=new hu,qc=new re;class sT extends Bn{constructor(e=new Ui,i=new Fx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Wc.copy(r.boundingSphere),Wc.applyMatrix4(l),Wc.radius+=c,e.ray.intersectsSphere(Wc)===!1)return;Qv.copy(l).invert(),ip.copy(e.ray).applyMatrix4(Qv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const y=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let E=y,A=M;E<A;E++){const S=p.getX(E);qc.fromBufferAttribute(g,S),Jv(qc,S,m,l,e,i,this)}}else{const y=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let E=y,A=M;E<A;E++)qc.fromBufferAttribute(g,E),Jv(qc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Jv(s,e,i,r,l,c,f){const h=ip.distanceSqToPoint(s);if(h<i){const m=new re;ip.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class sl extends Fn{constructor(e,i,r=Xi,l,c,f,h=Dn,m=Dn,p,v=Ta,g=1){if(v!==Ta&&v!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:g};super(y,l,c,f,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class oT extends sl{constructor(e,i=Xi,r=Gr,l,c,f=Dn,h=Dn,m,p=Ta){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,i,r,l,c,f,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bx extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pu extends Ui{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,g=e/h,y=i/m,M=[],E=[],A=[],S=[];for(let _=0;_<v;_++){const D=_*y-f;for(let U=0;U<p;U++){const P=U*g-c;E.push(P,-D,0),A.push(0,0,1),S.push(U/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let D=0;D<h;D++){const U=D+p*_,P=D+p*(_+1),I=D+1+p*(_+1),B=D+1+p*_;M.push(U,P,B),M.push(P,I,B)}this.setIndex(M),this.setAttribute("position",new Ma(E,3)),this.setAttribute("normal",new Ma(A,3)),this.setAttribute("uv",new Ma(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.width,e.height,e.widthSegments,e.heightSegments)}}class lT extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cT extends hl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uT extends hl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hx extends Bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const th=new $t,$v=new re,e_=new re;class fT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cp,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;$v.setFromMatrixPosition(e.matrixWorld),i.position.copy($v),e_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(e_),i.updateMatrixWorld(),th.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dT extends fT{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class t_ extends Hx{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new dT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Gx extends Px{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class hT extends Hx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class pT extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class mT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function n_(s,e,i,r){const l=gT(r);switch(i){case bx:return s*e;case Tx:return s*e/l.components*l.byteLength;case Mp:return s*e/l.components*l.byteLength;case Xs:return s*e*2/l.components*l.byteLength;case bp:return s*e*2/l.components*l.byteLength;case Ex:return s*e*3/l.components*l.byteLength;case wi:return s*e*4/l.components*l.byteLength;case Ep:return s*e*4/l.components*l.byteLength;case $c:case eu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tu:case nu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Th:case Rh:return Math.max(s,16)*Math.max(e,8)/4;case Eh:case Ah:return Math.max(s,8)*Math.max(e,8)/2;case Ch:case wh:case Nh:case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dh:case Lh:case Oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zh:case Kh:case Qh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Jh:case $h:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function gT(s){switch(s){case ai:case xx:return{byteLength:1,components:1};case il:case yx:case Ea:return{byteLength:2,components:1};case yp:case Sp:return{byteLength:2,components:4};case Xi:case xp:case Hi:return{byteLength:4,components:1};case Sx:case Mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);function Vx(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function vT(s){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const v=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,v);else{g.sort((M,E)=>M.start-E.start);let y=0;for(let M=1;M<g.length;M++){const E=g[y],A=g[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++y,g[y]=A)}g.length=y+1;for(let M=0,E=g.length;M<E;M++){const A=g[M];s.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var _T=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xT=`#ifdef USE_ALPHAHASH
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
#endif`,yT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ST=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ET=`#ifdef USE_AOMAP
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
#endif`,TT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AT=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,RT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NT=`#ifdef USE_IRIDESCENCE
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
#endif`,UT=`#ifdef USE_BUMPMAP
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
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,GT=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,VT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kT=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
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
#endif`,$T=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rA=`#ifdef USE_GRADIENTMAP
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
}`,sA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cA=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,uA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,fA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mA=`PhysicalMaterial material;
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
#endif`,gA=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,vA=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_A=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,xA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RA=`#if defined( USE_POINTS_UV )
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
#endif`,CA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LA=`#ifdef USE_MORPHTARGETS
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
#endif`,OA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HA=`#ifdef USE_NORMALMAP
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
#endif`,GA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$A=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,e2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,n2=`float getShadowMask() {
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
}`,i2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a2=`#ifdef USE_SKINNING
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
#endif`,r2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s2=`#ifdef USE_SKINNING
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
#endif`,o2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f2=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d2=`#ifdef USE_TRANSMISSION
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
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_2=`uniform sampler2D t2D;
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
}`,x2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b2=`#include <common>
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
}`,E2=`#if DEPTH_PACKING == 3200
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
}`,T2=`#define DISTANCE
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
}`,A2=`#define DISTANCE
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
void main () {
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
}`,R2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w2=`uniform float scale;
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
}`,D2=`uniform vec3 diffuse;
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
}`,N2=`#include <common>
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
}`,U2=`uniform vec3 diffuse;
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
}`,L2=`#define LAMBERT
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
}`,O2=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,P2=`#define MATCAP
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
}`,I2=`#define MATCAP
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
}`,z2=`#define NORMAL
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
}`,F2=`#define NORMAL
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
}`,B2=`#define PHONG
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
}`,H2=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,G2=`#define STANDARD
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
}`,V2=`#define STANDARD
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
}`,k2=`#define TOON
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
}`,j2=`#define TOON
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
}`,X2=`uniform float size;
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
}`,W2=`uniform vec3 diffuse;
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
}`,q2=`#include <common>
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
}`,Y2=`uniform vec3 color;
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
}`,Z2=`uniform float rotation;
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
}`,K2=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:_T,alphahash_pars_fragment:xT,alphamap_fragment:yT,alphamap_pars_fragment:ST,alphatest_fragment:MT,alphatest_pars_fragment:bT,aomap_fragment:ET,aomap_pars_fragment:TT,batching_pars_vertex:AT,batching_vertex:RT,begin_vertex:CT,beginnormal_vertex:wT,bsdfs:DT,iridescence_fragment:NT,bumpmap_pars_fragment:UT,clipping_planes_fragment:LT,clipping_planes_pars_fragment:OT,clipping_planes_pars_vertex:PT,clipping_planes_vertex:IT,color_fragment:zT,color_pars_fragment:FT,color_pars_vertex:BT,color_vertex:HT,common:GT,cube_uv_reflection_fragment:VT,defaultnormal_vertex:kT,displacementmap_pars_vertex:jT,displacementmap_vertex:XT,emissivemap_fragment:WT,emissivemap_pars_fragment:qT,colorspace_fragment:YT,colorspace_pars_fragment:ZT,envmap_fragment:KT,envmap_common_pars_fragment:QT,envmap_pars_fragment:JT,envmap_pars_vertex:$T,envmap_physical_pars_fragment:uA,envmap_vertex:eA,fog_vertex:tA,fog_pars_vertex:nA,fog_fragment:iA,fog_pars_fragment:aA,gradientmap_pars_fragment:rA,lightmap_pars_fragment:sA,lights_lambert_fragment:oA,lights_lambert_pars_fragment:lA,lights_pars_begin:cA,lights_toon_fragment:fA,lights_toon_pars_fragment:dA,lights_phong_fragment:hA,lights_phong_pars_fragment:pA,lights_physical_fragment:mA,lights_physical_pars_fragment:gA,lights_fragment_begin:vA,lights_fragment_maps:_A,lights_fragment_end:xA,logdepthbuf_fragment:yA,logdepthbuf_pars_fragment:SA,logdepthbuf_pars_vertex:MA,logdepthbuf_vertex:bA,map_fragment:EA,map_pars_fragment:TA,map_particle_fragment:AA,map_particle_pars_fragment:RA,metalnessmap_fragment:CA,metalnessmap_pars_fragment:wA,morphinstance_vertex:DA,morphcolor_vertex:NA,morphnormal_vertex:UA,morphtarget_pars_vertex:LA,morphtarget_vertex:OA,normal_fragment_begin:PA,normal_fragment_maps:IA,normal_pars_fragment:zA,normal_pars_vertex:FA,normal_vertex:BA,normalmap_pars_fragment:HA,clearcoat_normal_fragment_begin:GA,clearcoat_normal_fragment_maps:VA,clearcoat_pars_fragment:kA,iridescence_pars_fragment:jA,opaque_fragment:XA,packing:WA,premultiplied_alpha_fragment:qA,project_vertex:YA,dithering_fragment:ZA,dithering_pars_fragment:KA,roughnessmap_fragment:QA,roughnessmap_pars_fragment:JA,shadowmap_pars_fragment:$A,shadowmap_pars_vertex:e2,shadowmap_vertex:t2,shadowmask_pars_fragment:n2,skinbase_vertex:i2,skinning_pars_vertex:a2,skinning_vertex:r2,skinnormal_vertex:s2,specularmap_fragment:o2,specularmap_pars_fragment:l2,tonemapping_fragment:c2,tonemapping_pars_fragment:u2,transmission_fragment:f2,transmission_pars_fragment:d2,uv_pars_fragment:h2,uv_pars_vertex:p2,uv_vertex:m2,worldpos_vertex:g2,background_vert:v2,background_frag:_2,backgroundCube_vert:x2,backgroundCube_frag:y2,cube_vert:S2,cube_frag:M2,depth_vert:b2,depth_frag:E2,distance_vert:T2,distance_frag:A2,equirect_vert:R2,equirect_frag:C2,linedashed_vert:w2,linedashed_frag:D2,meshbasic_vert:N2,meshbasic_frag:U2,meshlambert_vert:L2,meshlambert_frag:O2,meshmatcap_vert:P2,meshmatcap_frag:I2,meshnormal_vert:z2,meshnormal_frag:F2,meshphong_vert:B2,meshphong_frag:H2,meshphysical_vert:G2,meshphysical_frag:V2,meshtoon_vert:k2,meshtoon_frag:j2,points_vert:X2,points_frag:W2,shadow_vert:q2,shadow_frag:Y2,sprite_vert:Z2,sprite_frag:K2},Pe={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Bi={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Bi.physical={uniforms:zn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Yc={r:0,b:0,g:0},Ur=new Aa,Q2=new $t;function J2(s,e,i,r,l,c,f){const h=new Pt(0);let m=c===!0?0:1,p,v,g=null,y=0,M=null;function E(U){let P=U.isScene===!0?U.background:null;return P&&P.isTexture&&(P=(U.backgroundBlurriness>0?i:e).get(P)),P}function A(U){let P=!1;const I=E(U);I===null?_(h,m):I&&I.isColor&&(_(I,1),P=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(U,P){const I=E(P);I&&(I.isCubeTexture||I.mapping===du)?(v===void 0&&(v=new Ra(new pl(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:qs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ur.copy(P.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Q2.makeRotationFromEuler(Ur)),v.material.toneMapped=Tt.getTransfer(I.colorSpace)!==Gt,(g!==I||y!==I.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,g=I,y=I.version,M=s.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Ra(new pu(2,2),new Wi({name:"BackgroundMaterial",uniforms:qs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(I.colorSpace)!==Gt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||y!==I.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=I,y=I.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,P){U.getRGB(Yc,Ox(s)),r.buffers.color.setClear(Yc.r,Yc.g,Yc.b,P,f)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,P=1){h.set(U),m=P,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:A,addToRenderList:S,dispose:D}}function $2(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,f=!1;function h(N,j,oe,se,me){let de=!1;const F=g(se,oe,j);c!==F&&(c=F,p(c.object)),de=M(N,se,oe,me),de&&E(N,se,oe,me),me!==null&&e.update(me,s.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,P(N,j,oe,se),me!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function m(){return s.createVertexArray()}function p(N){return s.bindVertexArray(N)}function v(N){return s.deleteVertexArray(N)}function g(N,j,oe){const se=oe.wireframe===!0;let me=r[N.id];me===void 0&&(me={},r[N.id]=me);let de=me[j.id];de===void 0&&(de={},me[j.id]=de);let F=de[se];return F===void 0&&(F=y(m()),de[se]=F),F}function y(N){const j=[],oe=[],se=[];for(let me=0;me<i;me++)j[me]=0,oe[me]=0,se[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:oe,attributeDivisors:se,object:N,attributes:{},index:null}}function M(N,j,oe,se){const me=c.attributes,de=j.attributes;let F=0;const G=oe.getAttributes();for(const ie in G)if(G[ie].location>=0){const Se=me[ie];let O=de[ie];if(O===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),Se===void 0||Se.attribute!==O||O&&Se.data!==O.data)return!0;F++}return c.attributesNum!==F||c.index!==se}function E(N,j,oe,se){const me={},de=j.attributes;let F=0;const G=oe.getAttributes();for(const ie in G)if(G[ie].location>=0){let Se=de[ie];Se===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor));const O={};O.attribute=Se,Se&&Se.data&&(O.data=Se.data),me[ie]=O,F++}c.attributes=me,c.attributesNum=F,c.index=se}function A(){const N=c.newAttributes;for(let j=0,oe=N.length;j<oe;j++)N[j]=0}function S(N){_(N,0)}function _(N,j){const oe=c.newAttributes,se=c.enabledAttributes,me=c.attributeDivisors;oe[N]=1,se[N]===0&&(s.enableVertexAttribArray(N),se[N]=1),me[N]!==j&&(s.vertexAttribDivisor(N,j),me[N]=j)}function D(){const N=c.newAttributes,j=c.enabledAttributes;for(let oe=0,se=j.length;oe<se;oe++)j[oe]!==N[oe]&&(s.disableVertexAttribArray(oe),j[oe]=0)}function U(N,j,oe,se,me,de,F){F===!0?s.vertexAttribIPointer(N,j,oe,me,de):s.vertexAttribPointer(N,j,oe,se,me,de)}function P(N,j,oe,se){A();const me=se.attributes,de=oe.getAttributes(),F=j.defaultAttributeValues;for(const G in de){const ie=de[G];if(ie.location>=0){let be=me[G];if(be===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(be=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(be=N.instanceColor)),be!==void 0){const Se=be.normalized,O=be.itemSize,ne=e.get(be);if(ne===void 0)continue;const _e=ne.buffer,Re=ne.type,He=ne.bytesPerElement,te=Re===s.INT||Re===s.UNSIGNED_INT||be.gpuType===xp;if(be.isInterleavedBufferAttribute){const fe=be.data,Ne=fe.stride,je=be.offset;if(fe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ie.locationSize;Ge++)_(ie.location+Ge,fe.meshPerAttribute);N.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ge=0;Ge<ie.locationSize;Ge++)S(ie.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Ge=0;Ge<ie.locationSize;Ge++)U(ie.location+Ge,O/ie.locationSize,Re,Se,Ne*He,(je+O/ie.locationSize*Ge)*He,te)}else{if(be.isInstancedBufferAttribute){for(let fe=0;fe<ie.locationSize;fe++)_(ie.location+fe,be.meshPerAttribute);N.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let fe=0;fe<ie.locationSize;fe++)S(ie.location+fe);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let fe=0;fe<ie.locationSize;fe++)U(ie.location+fe,O/ie.locationSize,Re,Se,O*He,O/ie.locationSize*fe*He,te)}}else if(F!==void 0){const Se=F[G];if(Se!==void 0)switch(Se.length){case 2:s.vertexAttrib2fv(ie.location,Se);break;case 3:s.vertexAttrib3fv(ie.location,Se);break;case 4:s.vertexAttrib4fv(ie.location,Se);break;default:s.vertexAttrib1fv(ie.location,Se)}}}}D()}function I(){Z();for(const N in r){const j=r[N];for(const oe in j){const se=j[oe];for(const me in se)v(se[me].object),delete se[me];delete j[oe]}delete r[N]}}function B(N){if(r[N.id]===void 0)return;const j=r[N.id];for(const oe in j){const se=j[oe];for(const me in se)v(se[me].object),delete se[me];delete j[oe]}delete r[N.id]}function z(N){for(const j in r){const oe=r[j];if(oe[N.id]===void 0)continue;const se=oe[N.id];for(const me in se)v(se[me].object),delete se[me];delete oe[N.id]}}function Z(){w(),f=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:S,disableUnusedAttributes:D}}function eR(s,e,i){let r;function l(p){r=p}function c(p,v){s.drawArrays(r,p,v),i.update(v,r,1)}function f(p,v,g){g!==0&&(s.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function h(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=v[E];i.update(M,r,1)}function m(p,v,g,y){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],v[E],y[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,y,0,g);let E=0;for(let A=0;A<g;A++)E+=v[A]*y[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function tR(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==wi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const Z=z===Ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ai&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Hi&&!Z)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(st("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),B=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:P,maxSamples:I,samples:B}}function nR(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Pr,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const M=g.length!==0||y||r!==0||l;return l=y,r=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=v(g,y,0)},this.setState=function(g,y,M){const E=g.clippingPlanes,A=g.clipIntersection,S=g.clipShadows,_=s.get(g);if(!l||E===null||E.length===0||c&&!S)c?v(null):p();else{const D=c?0:r,U=D*4;let P=_.clippingState||null;m.value=P,P=v(E,y,U,M);for(let I=0;I!==U;++I)P[I]=i[I];_.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,y,M,E){const A=g!==null?g.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const _=M+A*4,D=y.matrixWorldInverse;h.getNormalMatrix(D),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,P=M;U!==A;++U,P+=4)f.copy(g[U]).applyMatrix4(D,h),f.normal.toArray(S,P),S[P+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function iR(s){let e=new WeakMap;function i(f,h){return h===yh?f.mapping=Gr:h===Sh&&(f.mapping=js),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===yh||h===Sh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new zx(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const lr=4,i_=[.125,.215,.35,.446,.526,.582],zr=20,aR=256,Jo=new Gx,a_=new Pt;let nh=null,ih=0,ah=0,rh=!1;const rR=new re;class r_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=rR}=c;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,ah),this._renderer.xr.enabled=rh,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Gr||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Ea,format:wi,colorSpace:Ws,depthBuffer:!1},l=s_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sR(c)),this._blurMaterial=lR(c,e,i),this._ggxMaterial=oR(c,e,i)}return l}_compileMaterial(e){const i=new Ra(new Ui,e);this._renderer.compile(i,Jo)}_sceneToCubeUV(e,i,r,l,c){const m=new ii(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,M=g.toneMapping;g.getClearColor(a_),g.toneMapping=Vi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ra(new pl,new Nx({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let _=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,_=!0):(S.color.copy(a_),_=!0);for(let U=0;U<6;U++){const P=U%3;P===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):P===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const I=this._cubeSize;Fs(l,P*I,U>2?I:0,I,I),g.setRenderTarget(l),_&&g.render(A,m),g.render(e,m)}g.toneMapping=M,g.autoClear=y,e.background=D}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Gr||e.mapping===js;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=l_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Fs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Jo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),y=0+p*1.25,M=g*y,{_lodMax:E}=this,A=this._sizeLods[r],S=3*A*(r>E-lr?r-E+lr:0),_=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Fs(c,S,_,3*A,2*A),l.setRenderTarget(c),l.render(h,Jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Fs(e,S,_,3*A,2*A),l.setRenderTarget(e),l.render(h,Jo)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*zr-1),A=c/E,S=isFinite(c)?1+Math.floor(v*A):zr;S>zr&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${zr}`);const _=[];let D=0;for(let z=0;z<zr;++z){const Z=z/A,w=Math.exp(-Z*Z/2);_.push(w),z===0?D+=w:z<S&&(D+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/D;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:U}=this;y.dTheta.value=E,y.mipInt.value=U-r;const P=this._sizeLods[l],I=3*P*(l>U-lr?l-U+lr:0),B=4*(this._cubeSize-P);Fs(i,I,B,3*P,2*P),m.setRenderTarget(i),m.render(g,Jo)}}function sR(s){const e=[],i=[],r=[];let l=s;const c=s-lr+1+i_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-lr?m=i_[f-s+lr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,y=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,E=6,A=3,S=2,_=1,D=new Float32Array(A*E*M),U=new Float32Array(S*E*M),P=new Float32Array(_*E*M);for(let B=0;B<M;B++){const z=B%3*2/3-1,Z=B>2?0:-1,w=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];D.set(w,A*E*B),U.set(y,S*E*B);const N=[B,B,B,B,B,B];P.set(N,_*E*B)}const I=new Ui;I.setAttribute("position",new Ni(D,A)),I.setAttribute("uv",new Ni(U,S)),I.setAttribute("faceIndex",new Ni(P,_)),r.push(new Ra(I,null)),l>lr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function s_(s,e,i){const r=new ki(s,e,i);return r.texture.mapping=du,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function oR(s,e,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function lR(s,e,i){const r=new Float32Array(zr),l=new re(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:mu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function o_(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function l_(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}function cR(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===yh||m===Sh,v=m===Gr||m===js;if(p||v){let g=e.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new r_(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new r_(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function uR(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&rl("WebGLRenderer: "+r+" extension not supported."),l}}}function fR(s,e,i,r){const l={},c=new WeakMap;function f(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(g,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const M in y)e.update(y[M],s.ARRAY_BUFFER)}function p(g){const y=[],M=g.index,E=g.attributes.position;let A=0;if(M!==null){const D=M.array;A=M.version;for(let U=0,P=D.length;U<P;U+=3){const I=D[U+0],B=D[U+1],z=D[U+2];y.push(I,B,B,z,z,I)}}else if(E!==void 0){const D=E.array;A=E.version;for(let U=0,P=D.length/3-1;U<P;U+=3){const I=U+0,B=U+1,z=U+2;y.push(I,B,B,z,z,I)}}else return;const S=new(Ax(y)?Lx:Ux)(y,1);S.version=A;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function v(g){const y=c.get(g);if(y){const M=g.index;M!==null&&y.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function dR(s,e,i){let r;function l(y){r=y}let c,f;function h(y){c=y.type,f=y.bytesPerElement}function m(y,M){s.drawElements(r,M,c,y*f),i.update(M,r,1)}function p(y,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,y*f,E),i.update(M,r,E))}function v(y,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,E);let S=0;for(let _=0;_<E;_++)S+=M[_];i.update(S,r,1)}function g(y,M,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)p(y[_]/f,M[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,A,0,E);let _=0;for(let D=0;D<E;D++)_+=M[D]*A[D];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function hR(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:Ct("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function pR(s,e,i){const r=new WeakMap,l=new rn;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let y=r.get(h);if(y===void 0||y.count!==g){let N=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var M=N;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let P=0;E===!0&&(P=1),A===!0&&(P=2),S===!0&&(P=3);let I=h.attributes.position.count*P,B=1;I>e.maxTextureSize&&(B=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const z=new Float32Array(I*B*4*g),Z=new Rx(z,I,B,g);Z.type=Hi,Z.needsUpdate=!0;const w=P*4;for(let j=0;j<g;j++){const oe=_[j],se=D[j],me=U[j],de=I*B*4*j;for(let F=0;F<oe.count;F++){const G=F*w;E===!0&&(l.fromBufferAttribute(oe,F),z[de+G+0]=l.x,z[de+G+1]=l.y,z[de+G+2]=l.z,z[de+G+3]=0),A===!0&&(l.fromBufferAttribute(se,F),z[de+G+4]=l.x,z[de+G+5]=l.y,z[de+G+6]=l.z,z[de+G+7]=0),S===!0&&(l.fromBufferAttribute(me,F),z[de+G+8]=l.x,z[de+G+9]=l.y,z[de+G+10]=l.z,z[de+G+11]=me.itemSize===4?l.w:1)}}y={count:g,texture:Z,size:new It(I,B)},r.set(h,y),h.addEventListener("dispose",N)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function mR(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const gR={[fx]:"LINEAR_TONE_MAPPING",[dx]:"REINHARD_TONE_MAPPING",[hx]:"CINEON_TONE_MAPPING",[px]:"ACES_FILMIC_TONE_MAPPING",[gx]:"AGX_TONE_MAPPING",[vx]:"NEUTRAL_TONE_MAPPING",[mx]:"CUSTOM_TONE_MAPPING"};function vR(s,e,i,r,l){const c=new ki(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new ki(e,i,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),h=new Ui;h.setAttribute("position",new Ma([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ma([0,2,0,0,2,0],2));const m=new lT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ra(h,m),v=new Gx(-1,1,1,-1,0,1);let g=null,y=null,M=!1,E,A=null,S=[],_=!1;this.setSize=function(D,U){c.setSize(D,U),f.setSize(D,U);for(let P=0;P<S.length;P++){const I=S[P];I.setSize&&I.setSize(D,U)}},this.setEffects=function(D){S=D,_=S.length>0&&S[0].isRenderPass===!0;const U=c.width,P=c.height;for(let I=0;I<S.length;I++){const B=S[I];B.setSize&&B.setSize(U,P)}},this.begin=function(D,U){if(M||D.toneMapping===Vi&&S.length===0)return!1;if(A=U,U!==null){const P=U.width,I=U.height;(c.width!==P||c.height!==I)&&this.setSize(P,I)}return _===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=Vi,!0},this.hasRenderPass=function(){return _},this.end=function(D,U){D.toneMapping=E,M=!0;let P=c,I=f;for(let B=0;B<S.length;B++){const z=S[B];if(z.enabled!==!1&&(z.render(D,I,P,U),z.needsSwap!==!1)){const Z=P;P=I,I=Z}}if(g!==D.outputColorSpace||y!==D.toneMapping){g=D.outputColorSpace,y=D.toneMapping,m.defines={},Tt.getTransfer(g)===Gt&&(m.defines.SRGB_TRANSFER="");const B=gR[y];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,D.setRenderTarget(A),D.render(p,v),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const kx=new Fn,ap=new sl(1,1),jx=new Rx,Xx=new z1,Wx=new Ix,c_=[],u_=[],f_=new Float32Array(16),d_=new Float32Array(9),h_=new Float32Array(4);function Ks(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=c_[l];if(c===void 0&&(c=new Float32Array(l),c_[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function gn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function vn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function gu(s,e){let i=u_[e];i===void 0&&(i=new Int32Array(e),u_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function _R(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function xR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2fv(this.addr,e),vn(i,e)}}function yR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;s.uniform3fv(this.addr,e),vn(i,e)}}function SR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4fv(this.addr,e),vn(i,e)}}function MR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;h_.set(r),s.uniformMatrix2fv(this.addr,!1,h_),vn(i,r)}}function bR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;d_.set(r),s.uniformMatrix3fv(this.addr,!1,d_),vn(i,r)}}function ER(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;f_.set(r),s.uniformMatrix4fv(this.addr,!1,f_),vn(i,r)}}function TR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function AR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2iv(this.addr,e),vn(i,e)}}function RR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3iv(this.addr,e),vn(i,e)}}function CR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4iv(this.addr,e),vn(i,e)}}function wR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function DR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2uiv(this.addr,e),vn(i,e)}}function NR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3uiv(this.addr,e),vn(i,e)}}function UR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4uiv(this.addr,e),vn(i,e)}}function LR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(ap.compareFunction=i.isReversedDepthBuffer()?Ap:Tp,c=ap):c=kx,i.setTexture2D(e||c,l)}function OR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Xx,l)}function PR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Wx,l)}function IR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||jx,l)}function zR(s){switch(s){case 5126:return _R;case 35664:return xR;case 35665:return yR;case 35666:return SR;case 35674:return MR;case 35675:return bR;case 35676:return ER;case 5124:case 35670:return TR;case 35667:case 35671:return AR;case 35668:case 35672:return RR;case 35669:case 35673:return CR;case 5125:return wR;case 36294:return DR;case 36295:return NR;case 36296:return UR;case 35678:case 36198:case 36298:case 36306:case 35682:return LR;case 35679:case 36299:case 36307:return OR;case 35680:case 36300:case 36308:case 36293:return PR;case 36289:case 36303:case 36311:case 36292:return IR}}function FR(s,e){s.uniform1fv(this.addr,e)}function BR(s,e){const i=Ks(e,this.size,2);s.uniform2fv(this.addr,i)}function HR(s,e){const i=Ks(e,this.size,3);s.uniform3fv(this.addr,i)}function GR(s,e){const i=Ks(e,this.size,4);s.uniform4fv(this.addr,i)}function VR(s,e){const i=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function kR(s,e){const i=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function jR(s,e){const i=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function XR(s,e){s.uniform1iv(this.addr,e)}function WR(s,e){s.uniform2iv(this.addr,e)}function qR(s,e){s.uniform3iv(this.addr,e)}function YR(s,e){s.uniform4iv(this.addr,e)}function ZR(s,e){s.uniform1uiv(this.addr,e)}function KR(s,e){s.uniform2uiv(this.addr,e)}function QR(s,e){s.uniform3uiv(this.addr,e)}function JR(s,e){s.uniform4uiv(this.addr,e)}function $R(s,e,i){const r=this.cache,l=e.length,c=gu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=ap:f=kx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function eC(s,e,i){const r=this.cache,l=e.length,c=gu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Xx,c[f])}function tC(s,e,i){const r=this.cache,l=e.length,c=gu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Wx,c[f])}function nC(s,e,i){const r=this.cache,l=e.length,c=gu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||jx,c[f])}function iC(s){switch(s){case 5126:return FR;case 35664:return BR;case 35665:return HR;case 35666:return GR;case 35674:return VR;case 35675:return kR;case 35676:return jR;case 5124:case 35670:return XR;case 35667:case 35671:return WR;case 35668:case 35672:return qR;case 35669:case 35673:return YR;case 5125:return ZR;case 36294:return KR;case 36295:return QR;case 36296:return JR;case 35678:case 36198:case 36298:case 36306:case 35682:return $R;case 35679:case 36299:case 36307:return eC;case 35680:case 36300:case 36308:case 36293:return tC;case 36289:case 36303:case 36311:case 36292:return nC}}class aC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=zR(i.type)}}class rC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=iC(i.type)}}class sC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function p_(s,e){s.seq.push(e),s.map[e.id]=e}function oC(s,e,i){const r=s.name,l=r.length;for(sh.lastIndex=0;;){const c=sh.exec(r),f=sh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){p_(i,p===void 0?new aC(h,s,e):new rC(h,s,e));break}else{let g=i.map[h];g===void 0&&(g=new sC(h),p_(i,g)),i=g}}}class iu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);oC(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function m_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const lC=37297;let cC=0;function uC(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const g_=new ft;function fC(s){Tt._getMatrix(g_,Tt.workingColorSpace,s);const e=`mat3( ${g_.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(s)){case ru:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function v_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+uC(s.getShaderSource(e),h)}else return c}function dC(s,e){const i=fC(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const hC={[fx]:"Linear",[dx]:"Reinhard",[hx]:"Cineon",[px]:"ACESFilmic",[gx]:"AgX",[vx]:"Neutral",[mx]:"Custom"};function pC(s,e){const i=hC[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zc=new re;function mC(){Tt.getLuminanceCoefficients(Zc);const s=Zc.x.toFixed(4),e=Zc.y.toFixed(4),i=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function vC(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function _C(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function tl(s){return s!==""}function __(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xC=/^[ \t]*#include +<([\w\d./]+)>/gm;function rp(s){return s.replace(xC,SC)}const yC=new Map;function SC(s,e){let i=dt[e];if(i===void 0){const r=yC.get(e);if(r!==void 0)i=dt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rp(i)}const MC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y_(s){return s.replace(MC,bC)}function bC(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function S_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const EC={[Jc]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function TC(s){return EC[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const AC={[Gr]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function RC(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":AC[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const CC={[js]:"ENVMAP_MODE_REFRACTION"};function wC(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":CC[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DC={[ux]:"ENVMAP_BLENDING_MULTIPLY",[v1]:"ENVMAP_BLENDING_MIX",[_1]:"ENVMAP_BLENDING_ADD"};function NC(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":DC[s.combine]||"ENVMAP_BLENDING_NONE"}function UC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function LC(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=TC(i),p=RC(i),v=wC(i),g=NC(i),y=UC(i),M=gC(i),E=vC(c),A=l.createProgram();let S,_,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(tl).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(tl).join(`
`),_.length>0&&(_+=`
`)):(S=[S_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),_=[S_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Vi?pC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,dC("linearToOutputTexel",i.outputColorSpace),mC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(tl).join(`
`)),f=rp(f),f=__(f,i),f=x_(f,i),h=rp(h),h=__(h,i),h=x_(h,i),f=y_(f),h=y_(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=D+S+f,P=D+_+h,I=m_(l,l.VERTEX_SHADER,U),B=m_(l,l.FRAGMENT_SHADER,P);l.attachShader(A,I),l.attachShader(A,B),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(j){if(s.debug.checkShaderErrors){const oe=l.getProgramInfoLog(A)||"",se=l.getShaderInfoLog(I)||"",me=l.getShaderInfoLog(B)||"",de=oe.trim(),F=se.trim(),G=me.trim();let ie=!0,be=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,I,B);else{const Se=v_(l,I,"vertex"),O=v_(l,B,"fragment");Ct("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+de+`
`+Se+`
`+O)}else de!==""?st("WebGLProgram: Program Info Log:",de):(F===""||G==="")&&(be=!1);be&&(j.diagnostics={runnable:ie,programLog:de,vertexShader:{log:F,prefix:S},fragmentShader:{log:G,prefix:_}})}l.deleteShader(I),l.deleteShader(B),Z=new iu(l,A),w=_C(l,A)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(A,lC)),N},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cC++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=B,this}let OC=0;class PC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new IC(e),i.set(e,r)),r}}class IC{constructor(e){this.id=OC++,this.code=e,this.usedTimes=0}}function zC(s,e,i,r,l,c,f){const h=new wx,m=new PC,p=new Set,v=[],g=new Map,y=l.logarithmicDepthBuffer;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,N,j,oe,se){const me=oe.fog,de=se.geometry,F=w.isMeshStandardMaterial?oe.environment:null,G=(w.isMeshStandardMaterial?i:e).get(w.envMap||F),ie=G&&G.mapping===du?G.image.height:null,be=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&st("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Se=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,O=Se!==void 0?Se.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let _e,Re,He,te;if(be){const Et=Bi[be];_e=Et.vertexShader,Re=Et.fragmentShader}else _e=w.vertexShader,Re=w.fragmentShader,m.update(w),He=m.getVertexShaderID(w),te=m.getFragmentShaderID(w);const fe=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),je=se.isInstancedMesh===!0,Ge=se.isBatchedMesh===!0,pt=!!w.map,en=!!w.matcap,_t=!!G,mt=!!w.aoMap,wt=!!w.lightMap,ot=!!w.bumpMap,tn=!!w.normalMap,V=!!w.displacementMap,Zt=!!w.emissiveMap,bt=!!w.metalnessMap,Lt=!!w.roughnessMap,Ye=w.anisotropy>0,L=w.clearcoat>0,b=w.dispersion>0,W=w.iridescence>0,pe=w.sheen>0,ye=w.transmission>0,ue=Ye&&!!w.anisotropyMap,Ke=L&&!!w.clearcoatMap,we=L&&!!w.clearcoatNormalMap,Xe=L&&!!w.clearcoatRoughnessMap,nt=W&&!!w.iridescenceMap,Ee=W&&!!w.iridescenceThicknessMap,Te=pe&&!!w.sheenColorMap,Fe=pe&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,De=!!w.specularColorMap,ct=!!w.specularIntensityMap,X=ye&&!!w.transmissionMap,Le=ye&&!!w.thicknessMap,Ae=!!w.gradientMap,ze=!!w.alphaMap,Me=w.alphaTest>0,xe=!!w.alphaHash,Ce=!!w.extensions;let it=Vi;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(it=s.toneMapping);const zt={shaderID:be,shaderType:w.type,shaderName:w.name,vertexShader:_e,fragmentShader:Re,defines:w.defines,customVertexShaderID:He,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Ge,batchingColor:Ge&&se._colorsTexture!==null,instancing:je,instancingColor:je&&se.instanceColor!==null,instancingMorph:je&&se.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ws,alphaToCoverage:!!w.alphaToCoverage,map:pt,matcap:en,envMap:_t,envMapMode:_t&&G.mapping,envMapCubeUVHeight:ie,aoMap:mt,lightMap:wt,bumpMap:ot,normalMap:tn,displacementMap:V,emissiveMap:Zt,normalMapObjectSpace:tn&&w.normalMapType===M1,normalMapTangentSpace:tn&&w.normalMapType===S1,metalnessMap:bt,roughnessMap:Lt,anisotropy:Ye,anisotropyMap:ue,clearcoat:L,clearcoatMap:Ke,clearcoatNormalMap:we,clearcoatRoughnessMap:Xe,dispersion:b,iridescence:W,iridescenceMap:nt,iridescenceThicknessMap:Ee,sheen:pe,sheenColorMap:Te,sheenRoughnessMap:Fe,specularMap:Ie,specularColorMap:De,specularIntensityMap:ct,transmission:ye,transmissionMap:X,thicknessMap:Le,gradientMap:Ae,opaque:w.transparent===!1&&w.blending===Gs&&w.alphaToCoverage===!1,alphaMap:ze,alphaTest:Me,alphaHash:xe,combine:w.combine,mapUv:pt&&A(w.map.channel),aoMapUv:mt&&A(w.aoMap.channel),lightMapUv:wt&&A(w.lightMap.channel),bumpMapUv:ot&&A(w.bumpMap.channel),normalMapUv:tn&&A(w.normalMap.channel),displacementMapUv:V&&A(w.displacementMap.channel),emissiveMapUv:Zt&&A(w.emissiveMap.channel),metalnessMapUv:bt&&A(w.metalnessMap.channel),roughnessMapUv:Lt&&A(w.roughnessMap.channel),anisotropyMapUv:ue&&A(w.anisotropyMap.channel),clearcoatMapUv:Ke&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:we&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&A(w.sheenRoughnessMap.channel),specularMapUv:Ie&&A(w.specularMap.channel),specularColorMapUv:De&&A(w.specularColorMap.channel),specularIntensityMapUv:ct&&A(w.specularIntensityMap.channel),transmissionMapUv:X&&A(w.transmissionMap.channel),thicknessMapUv:Le&&A(w.thicknessMap.channel),alphaMapUv:ze&&A(w.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(tn||Ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!de.attributes.uv&&(pt||ze),fog:!!me,useFog:w.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ne,skinning:se.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:pt&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===Gt,decodeVideoTextureEmissive:Zt&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===Gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===va,flipSided:w.side===qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ce&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&w.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return zt.vertexUv1s=p.has(1),zt.vertexUv2s=p.has(2),zt.vertexUv3s=p.has(3),p.clear(),zt}function _(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const j in w.defines)N.push(j),N.push(w.defines[j]);return w.isRawShaderMaterial===!1&&(D(N,w),U(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function D(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function U(w,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),w.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),w.push(h.mask)}function P(w){const N=E[w.type];let j;if(N){const oe=Bi[N];j=K1.clone(oe.uniforms)}else j=w.uniforms;return j}function I(w,N){let j=g.get(N);return j!==void 0?++j.usedTimes:(j=new LC(s,N,w,c),v.push(j),g.set(N,j)),j}function B(w){if(--w.usedTimes===0){const N=v.indexOf(w);v[N]=v[v.length-1],v.pop(),g.delete(w.cacheKey),w.destroy()}}function z(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:P,acquireProgram:I,releaseProgram:B,releaseShaderCache:z,programs:v,dispose:Z}}function FC(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function BC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function M_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function b_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g,y,M,E,A,S){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:y,material:M,groupOrder:E,renderOrder:g.renderOrder,z:A,group:S},s[e]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=M,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=A,_.group=S),e++,_}function h(g,y,M,E,A,S){const _=f(g,y,M,E,A,S);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,y,M,E,A,S){const _=f(g,y,M,E,A,S);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,y){i.length>1&&i.sort(g||BC),r.length>1&&r.sort(y||M_),l.length>1&&l.sort(y||M_)}function v(){for(let g=e,y=s.length;g<y;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function HC(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new b_,s.set(r,[f])):l>=c.length?(f=new b_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function GC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new Pt};break;case"SpotLight":i={position:new re,direction:new re,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":i={color:new Pt,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=i,i}}}function VC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let kC=0;function jC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function XC(s){const e=new GC,i=VC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const l=new re,c=new $t,f=new $t;function h(p){let v=0,g=0,y=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,E=0,A=0,S=0,_=0,D=0,U=0,P=0,I=0,B=0,z=0;p.sort(jC);for(let w=0,N=p.length;w<N;w++){const j=p[w],oe=j.color,se=j.intensity,me=j.distance;let de=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===Xs?de=j.shadow.map.texture:de=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)v+=oe.r*se,g+=oe.g*se,y+=oe.b*se;else if(j.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(j.sh.coefficients[F],se);z++}else if(j.isDirectionalLight){const F=e.get(j);if(F.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const G=j.shadow,ie=i.get(j);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,r.directionalShadow[M]=ie,r.directionalShadowMap[M]=de,r.directionalShadowMatrix[M]=j.shadow.matrix,D++}r.directional[M]=F,M++}else if(j.isSpotLight){const F=e.get(j);F.position.setFromMatrixPosition(j.matrixWorld),F.color.copy(oe).multiplyScalar(se),F.distance=me,F.coneCos=Math.cos(j.angle),F.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),F.decay=j.decay,r.spot[A]=F;const G=j.shadow;if(j.map&&(r.spotLightMap[I]=j.map,I++,G.updateMatrices(j),j.castShadow&&B++),r.spotLightMatrix[A]=G.matrix,j.castShadow){const ie=i.get(j);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,r.spotShadow[A]=ie,r.spotShadowMap[A]=de,P++}A++}else if(j.isRectAreaLight){const F=e.get(j);F.color.copy(oe).multiplyScalar(se),F.halfWidth.set(j.width*.5,0,0),F.halfHeight.set(0,j.height*.5,0),r.rectArea[S]=F,S++}else if(j.isPointLight){const F=e.get(j);if(F.color.copy(j.color).multiplyScalar(j.intensity),F.distance=j.distance,F.decay=j.decay,j.castShadow){const G=j.shadow,ie=i.get(j);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,ie.shadowCameraNear=G.camera.near,ie.shadowCameraFar=G.camera.far,r.pointShadow[E]=ie,r.pointShadowMap[E]=de,r.pointShadowMatrix[E]=j.shadow.matrix,U++}r.point[E]=F,E++}else if(j.isHemisphereLight){const F=e.get(j);F.skyColor.copy(j.color).multiplyScalar(se),F.groundColor.copy(j.groundColor).multiplyScalar(se),r.hemi[_]=F,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=y;const Z=r.hash;(Z.directionalLength!==M||Z.pointLength!==E||Z.spotLength!==A||Z.rectAreaLength!==S||Z.hemiLength!==_||Z.numDirectionalShadows!==D||Z.numPointShadows!==U||Z.numSpotShadows!==P||Z.numSpotMaps!==I||Z.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=P+I-B,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=z,Z.directionalLength=M,Z.pointLength=E,Z.spotLength=A,Z.rectAreaLength=S,Z.hemiLength=_,Z.numDirectionalShadows=D,Z.numPointShadows=U,Z.numSpotShadows=P,Z.numSpotMaps=I,Z.numLightProbes=z,r.version=kC++)}function m(p,v){let g=0,y=0,M=0,E=0,A=0;const S=v.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const U=p[_];if(U.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),g++}else if(U.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),M++}else if(U.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(S),f.identity(),c.copy(U.matrixWorld),c.premultiply(S),f.extractRotation(c),P.halfWidth.set(U.width*.5,0,0),P.halfHeight.set(0,U.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(S),y++}else if(U.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(U.matrixWorld),P.direction.transformDirection(S),A++}}}return{setup:h,setupView:m,state:r}}function E_(s){const e=new XC(s),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function f(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function WC(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new E_(s),e.set(l,[h])):c>=f.length?(h=new E_(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const qC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YC=`uniform sampler2D shadow_pass;
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
}`,ZC=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],KC=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],T_=new $t,$o=new re,oh=new re;function QC(s,e,i){let r=new Cp;const l=new It,c=new It,f=new rn,h=new cT,m=new uT,p={},v=i.maxTextureSize,g={[cr]:qn,[qn]:cr,[va]:va},y=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:qC,fragmentShader:YC}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ui;E.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ra(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let _=this.type;this.render=function(B,z,Z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;B.type===JE&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Jc);const w=s.getRenderTarget(),N=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(ya),oe.buffers.depth.getReversed()===!0?oe.buffers.color.setClear(0,0,0,0):oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const se=_!==this.type;se&&z.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(de=>de.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,de=B.length;me<de;me++){const F=B[me],G=F.shadow;if(G===void 0){st("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ie=G.getFrameExtents();if(l.multiply(ie),c.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ie.x),l.x=c.x*ie.x,G.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ie.y),l.y=c.y*ie.y,G.mapSize.y=c.y)),G.map===null||se===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===el){if(F.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ki(l.x,l.y,{format:Xs,type:Ea,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new sl(l.x,l.y,Hi),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Ta,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn}else{F.isPointLight?(G.map=new zx(l.x),G.map.depthTexture=new oT(l.x,Xi)):(G.map=new ki(l.x,l.y),G.map.depthTexture=new sl(l.x,l.y,Xi)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Ta;const Se=s.state.buffers.depth.getReversed();this.type===Jc?(G.map.depthTexture.compareFunction=Se?Ap:Tp,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn)}G.camera.updateProjectionMatrix()}const be=G.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<be;Se++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,Se),s.clear();else{Se===0&&(s.setRenderTarget(G.map),s.clear());const O=G.getViewport(Se);f.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),oe.viewport(f)}if(F.isPointLight){const O=G.camera,ne=G.matrix,_e=F.distance||O.far;_e!==O.far&&(O.far=_e,O.updateProjectionMatrix()),$o.setFromMatrixPosition(F.matrixWorld),O.position.copy($o),oh.copy(O.position),oh.add(ZC[Se]),O.up.copy(KC[Se]),O.lookAt(oh),O.updateMatrixWorld(),ne.makeTranslation(-$o.x,-$o.y,-$o.z),T_.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G._frustum.setFromProjectionMatrix(T_,O.coordinateSystem,O.reversedDepth)}else G.updateMatrices(F);r=G.getFrustum(),P(z,Z,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===el&&D(G,Z),G.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(w,N,j)};function D(B,z){const Z=e.update(A);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ki(l.x,l.y,{format:Xs,type:Ea})),y.uniforms.shadow_pass.value=B.map.depthTexture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(z,null,Z,y,A,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(z,null,Z,M,A,null)}function U(B,z,Z,w){let N=null;const j=Z.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(j!==void 0)N=j;else if(N=Z.isPointLight===!0?m:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const oe=N.uuid,se=z.uuid;let me=p[oe];me===void 0&&(me={},p[oe]=me);let de=me[se];de===void 0&&(de=N.clone(),me[se]=de,z.addEventListener("dispose",I)),N=de}if(N.visible=z.visible,N.wireframe=z.wireframe,w===el?N.side=z.shadowSide!==null?z.shadowSide:z.side:N.side=z.shadowSide!==null?z.shadowSide:g[z.side],N.alphaMap=z.alphaMap,N.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,N.map=z.map,N.clipShadows=z.clipShadows,N.clippingPlanes=z.clippingPlanes,N.clipIntersection=z.clipIntersection,N.displacementMap=z.displacementMap,N.displacementScale=z.displacementScale,N.displacementBias=z.displacementBias,N.wireframeLinewidth=z.wireframeLinewidth,N.linewidth=z.linewidth,Z.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const oe=s.properties.get(N);oe.light=Z}return N}function P(B,z,Z,w,N){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&N===el)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,B.matrixWorld);const se=e.update(B),me=B.material;if(Array.isArray(me)){const de=se.groups;for(let F=0,G=de.length;F<G;F++){const ie=de[F],be=me[ie.materialIndex];if(be&&be.visible){const Se=U(B,be,w,N);B.onBeforeShadow(s,B,z,Z,se,Se,ie),s.renderBufferDirect(Z,null,se,Se,B,ie),B.onAfterShadow(s,B,z,Z,se,Se,ie)}}}else if(me.visible){const de=U(B,me,w,N);B.onBeforeShadow(s,B,z,Z,se,de,null),s.renderBufferDirect(Z,null,se,de,B,null),B.onAfterShadow(s,B,z,Z,se,de,null)}}const oe=B.children;for(let se=0,me=oe.length;se<me;se++)P(oe[se],z,Z,w,N)}function I(B){B.target.removeEventListener("dispose",I);for(const Z in p){const w=p[Z],N=B.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}const JC={[hh]:ph,[mh]:_h,[gh]:xh,[ks]:vh,[ph]:hh,[_h]:mh,[xh]:gh,[vh]:ks};function $C(s,e){function i(){let X=!1;const Le=new rn;let Ae=null;const ze=new rn(0,0,0,0);return{setMask:function(Me){Ae!==Me&&!X&&(s.colorMask(Me,Me,Me,Me),Ae=Me)},setLocked:function(Me){X=Me},setClear:function(Me,xe,Ce,it,zt){zt===!0&&(Me*=it,xe*=it,Ce*=it),Le.set(Me,xe,Ce,it),ze.equals(Le)===!1&&(s.clearColor(Me,xe,Ce,it),ze.copy(Le))},reset:function(){X=!1,Ae=null,ze.set(-1,0,0,0)}}}function r(){let X=!1,Le=!1,Ae=null,ze=null,Me=null;return{setReversed:function(xe){if(Le!==xe){const Ce=e.get("EXT_clip_control");xe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Le=xe;const it=Me;Me=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(xe){xe?fe(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(xe){Ae!==xe&&!X&&(s.depthMask(xe),Ae=xe)},setFunc:function(xe){if(Le&&(xe=JC[xe]),ze!==xe){switch(xe){case hh:s.depthFunc(s.NEVER);break;case ph:s.depthFunc(s.ALWAYS);break;case mh:s.depthFunc(s.LESS);break;case ks:s.depthFunc(s.LEQUAL);break;case gh:s.depthFunc(s.EQUAL);break;case vh:s.depthFunc(s.GEQUAL);break;case _h:s.depthFunc(s.GREATER);break;case xh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=xe}},setLocked:function(xe){X=xe},setClear:function(xe){Me!==xe&&(Le&&(xe=1-xe),s.clearDepth(xe),Me=xe)},reset:function(){X=!1,Ae=null,ze=null,Me=null,Le=!1}}}function l(){let X=!1,Le=null,Ae=null,ze=null,Me=null,xe=null,Ce=null,it=null,zt=null;return{setTest:function(Et){X||(Et?fe(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Et){Le!==Et&&!X&&(s.stencilMask(Et),Le=Et)},setFunc:function(Et,Nn,xi){(Ae!==Et||ze!==Nn||Me!==xi)&&(s.stencilFunc(Et,Nn,xi),Ae=Et,ze=Nn,Me=xi)},setOp:function(Et,Nn,xi){(xe!==Et||Ce!==Nn||it!==xi)&&(s.stencilOp(Et,Nn,xi),xe=Et,Ce=Nn,it=xi)},setLocked:function(Et){X=Et},setClear:function(Et){zt!==Et&&(s.clearStencil(Et),zt=Et)},reset:function(){X=!1,Le=null,Ae=null,ze=null,Me=null,xe=null,Ce=null,it=null,zt=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},y=new WeakMap,M=[],E=null,A=!1,S=null,_=null,D=null,U=null,P=null,I=null,B=null,z=new Pt(0,0,0),Z=0,w=!1,N=null,j=null,oe=null,se=null,me=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ie)[1]),F=G>=1):ie.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),F=G>=2);let be=null,Se={};const O=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),_e=new rn().fromArray(O),Re=new rn().fromArray(ne);function He(X,Le,Ae,ze){const Me=new Uint8Array(4),xe=s.createTexture();s.bindTexture(X,xe),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<Ae;Ce++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(Le+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return xe}const te={};te[s.TEXTURE_2D]=He(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=He(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=He(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=He(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),fe(s.DEPTH_TEST),f.setFunc(ks),ot(!1),tn(Rv),fe(s.CULL_FACE),mt(ya);function fe(X){v[X]!==!0&&(s.enable(X),v[X]=!0)}function Ne(X){v[X]!==!1&&(s.disable(X),v[X]=!1)}function je(X,Le){return g[X]!==Le?(s.bindFramebuffer(X,Le),g[X]=Le,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Le),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ge(X,Le){let Ae=M,ze=!1;if(X){Ae=y.get(Le),Ae===void 0&&(Ae=[],y.set(Le,Ae));const Me=X.textures;if(Ae.length!==Me.length||Ae[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,Ce=Me.length;xe<Ce;xe++)Ae[xe]=s.COLOR_ATTACHMENT0+xe;Ae.length=Me.length,ze=!0}}else Ae[0]!==s.BACK&&(Ae[0]=s.BACK,ze=!0);ze&&s.drawBuffers(Ae)}function pt(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const en={[Ir]:s.FUNC_ADD,[e1]:s.FUNC_SUBTRACT,[t1]:s.FUNC_REVERSE_SUBTRACT};en[n1]=s.MIN,en[i1]=s.MAX;const _t={[a1]:s.ZERO,[r1]:s.ONE,[s1]:s.SRC_COLOR,[fh]:s.SRC_ALPHA,[d1]:s.SRC_ALPHA_SATURATE,[u1]:s.DST_COLOR,[l1]:s.DST_ALPHA,[o1]:s.ONE_MINUS_SRC_COLOR,[dh]:s.ONE_MINUS_SRC_ALPHA,[f1]:s.ONE_MINUS_DST_COLOR,[c1]:s.ONE_MINUS_DST_ALPHA,[h1]:s.CONSTANT_COLOR,[p1]:s.ONE_MINUS_CONSTANT_COLOR,[m1]:s.CONSTANT_ALPHA,[g1]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(X,Le,Ae,ze,Me,xe,Ce,it,zt,Et){if(X===ya){A===!0&&(Ne(s.BLEND),A=!1);return}if(A===!1&&(fe(s.BLEND),A=!0),X!==$E){if(X!==S||Et!==w){if((_!==Ir||P!==Ir)&&(s.blendEquation(s.FUNC_ADD),_=Ir,P=Ir),Et)switch(X){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case uh:s.blendFunc(s.ONE,s.ONE);break;case Cv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",X);break}else switch(X){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case uh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Cv:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wv:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",X);break}D=null,U=null,I=null,B=null,z.set(0,0,0),Z=0,S=X,w=Et}return}Me=Me||Le,xe=xe||Ae,Ce=Ce||ze,(Le!==_||Me!==P)&&(s.blendEquationSeparate(en[Le],en[Me]),_=Le,P=Me),(Ae!==D||ze!==U||xe!==I||Ce!==B)&&(s.blendFuncSeparate(_t[Ae],_t[ze],_t[xe],_t[Ce]),D=Ae,U=ze,I=xe,B=Ce),(it.equals(z)===!1||zt!==Z)&&(s.blendColor(it.r,it.g,it.b,zt),z.copy(it),Z=zt),S=X,w=!1}function wt(X,Le){X.side===va?Ne(s.CULL_FACE):fe(s.CULL_FACE);let Ae=X.side===qn;Le&&(Ae=!Ae),ot(Ae),X.blending===Gs&&X.transparent===!1?mt(ya):mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const ze=X.stencilWrite;h.setTest(ze),ze&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Zt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){N!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),N=X)}function tn(X){X!==KE?(fe(s.CULL_FACE),X!==j&&(X===Rv?s.cullFace(s.BACK):X===QE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),j=X}function V(X){X!==oe&&(F&&s.lineWidth(X),oe=X)}function Zt(X,Le,Ae){X?(fe(s.POLYGON_OFFSET_FILL),(se!==Le||me!==Ae)&&(s.polygonOffset(Le,Ae),se=Le,me=Ae)):Ne(s.POLYGON_OFFSET_FILL)}function bt(X){X?fe(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function Lt(X){X===void 0&&(X=s.TEXTURE0+de-1),be!==X&&(s.activeTexture(X),be=X)}function Ye(X,Le,Ae){Ae===void 0&&(be===null?Ae=s.TEXTURE0+de-1:Ae=be);let ze=Se[Ae];ze===void 0&&(ze={type:void 0,texture:void 0},Se[Ae]=ze),(ze.type!==X||ze.texture!==Le)&&(be!==Ae&&(s.activeTexture(Ae),be=Ae),s.bindTexture(X,Le||te[X]),ze.type=X,ze.texture=Le)}function L(){const X=Se[be];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function pe(){try{s.texSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function ye(){try{s.texSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function we(){try{s.texStorage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Xe(){try{s.texStorage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function nt(){try{s.texImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ee(){try{s.texImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Te(X){_e.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),_e.copy(X))}function Fe(X){Re.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Re.copy(X))}function Ie(X,Le){let Ae=p.get(Le);Ae===void 0&&(Ae=new WeakMap,p.set(Le,Ae));let ze=Ae.get(X);ze===void 0&&(ze=s.getUniformBlockIndex(Le,X.name),Ae.set(X,ze))}function De(X,Le){const ze=p.get(Le).get(X);m.get(Le)!==ze&&(s.uniformBlockBinding(Le,ze,X.__bindingPointIndex),m.set(Le,ze))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},be=null,Se={},g={},y=new WeakMap,M=[],E=null,A=!1,S=null,_=null,D=null,U=null,P=null,I=null,B=null,z=new Pt(0,0,0),Z=0,w=!1,N=null,j=null,oe=null,se=null,me=null,_e.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:fe,disable:Ne,bindFramebuffer:je,drawBuffers:Ge,useProgram:pt,setBlending:mt,setMaterial:wt,setFlipSided:ot,setCullFace:tn,setLineWidth:V,setPolygonOffset:Zt,setScissorTest:bt,activeTexture:Lt,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:nt,texImage3D:Ee,updateUBOMapping:Ie,uniformBlockBinding:De,texStorage2D:we,texStorage3D:Xe,texSubImage2D:pe,texSubImage3D:ye,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ke,scissor:Te,viewport:Fe,reset:ct}}function e3(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new It,v=new WeakMap;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return M?new OffscreenCanvas(L,b):ou("canvas")}function A(L,b,W){let pe=1;const ye=Ye(L);if((ye.width>W||ye.height>W)&&(pe=W/Math.max(ye.width,ye.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ue=Math.floor(pe*ye.width),Ke=Math.floor(pe*ye.height);g===void 0&&(g=E(ue,Ke));const we=b?E(ue,Ke):g;return we.width=ue,we.height=Ke,we.getContext("2d").drawImage(L,0,0,ue,Ke),st("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+ue+"x"+Ke+")."),we}else return"data"in L&&st("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,b,W,pe,ye=!1){if(L!==null){if(s[L]!==void 0)return s[L];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=b;if(b===s.RED&&(W===s.FLOAT&&(ue=s.R32F),W===s.HALF_FLOAT&&(ue=s.R16F),W===s.UNSIGNED_BYTE&&(ue=s.R8)),b===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.R8UI),W===s.UNSIGNED_SHORT&&(ue=s.R16UI),W===s.UNSIGNED_INT&&(ue=s.R32UI),W===s.BYTE&&(ue=s.R8I),W===s.SHORT&&(ue=s.R16I),W===s.INT&&(ue=s.R32I)),b===s.RG&&(W===s.FLOAT&&(ue=s.RG32F),W===s.HALF_FLOAT&&(ue=s.RG16F),W===s.UNSIGNED_BYTE&&(ue=s.RG8)),b===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.RG8UI),W===s.UNSIGNED_SHORT&&(ue=s.RG16UI),W===s.UNSIGNED_INT&&(ue=s.RG32UI),W===s.BYTE&&(ue=s.RG8I),W===s.SHORT&&(ue=s.RG16I),W===s.INT&&(ue=s.RG32I)),b===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),W===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),W===s.UNSIGNED_INT&&(ue=s.RGB32UI),W===s.BYTE&&(ue=s.RGB8I),W===s.SHORT&&(ue=s.RGB16I),W===s.INT&&(ue=s.RGB32I)),b===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),W===s.UNSIGNED_INT&&(ue=s.RGBA32UI),W===s.BYTE&&(ue=s.RGBA8I),W===s.SHORT&&(ue=s.RGBA16I),W===s.INT&&(ue=s.RGBA32I)),b===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),b===s.RGBA){const Ke=ye?ru:Tt.getTransfer(pe);W===s.FLOAT&&(ue=s.RGBA32F),W===s.HALF_FLOAT&&(ue=s.RGBA16F),W===s.UNSIGNED_BYTE&&(ue=Ke===Gt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(L,b){let W;return L?b===null||b===Xi||b===al?W=s.DEPTH24_STENCIL8:b===Hi?W=s.DEPTH32F_STENCIL8:b===il&&(W=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xi||b===al?W=s.DEPTH_COMPONENT24:b===Hi?W=s.DEPTH_COMPONENT32F:b===il&&(W=s.DEPTH_COMPONENT16),W}function I(L,b){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Dn&&L.minFilter!==Pn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function B(L){const b=L.target;b.removeEventListener("dispose",B),Z(b),b.isVideoTexture&&v.delete(b)}function z(L){const b=L.target;b.removeEventListener("dispose",z),N(b)}function Z(L){const b=r.get(L);if(b.__webglInit===void 0)return;const W=L.source,pe=y.get(W);if(pe){const ye=pe[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&w(L),Object.keys(pe).length===0&&y.delete(W)}r.remove(L)}function w(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const W=L.source,pe=y.get(W);delete pe[b.__cacheKey],f.memory.textures--}function N(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let ye=0;ye<b.__webglFramebuffer[pe].length;ye++)s.deleteFramebuffer(b.__webglFramebuffer[pe][ye]);else s.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)s.deleteFramebuffer(b.__webglFramebuffer[pe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=L.textures;for(let pe=0,ye=W.length;pe<ye;pe++){const ue=r.get(W[pe]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),f.memory.textures--),r.remove(W[pe])}r.remove(L)}let j=0;function oe(){j=0}function se(){const L=j;return L>=l.maxTextures&&st("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),j+=1,L}function me(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function de(L,b){const W=r.get(L);if(L.isVideoTexture&&bt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const pe=L.image;if(pe===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{te(W,L,b);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+b)}function F(L,b){const W=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){te(W,L,b);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+b)}function G(L,b){const W=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){te(W,L,b);return}i.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+b)}function ie(L,b){const W=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){fe(W,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+b)}const be={[Mh]:s.REPEAT,[_a]:s.CLAMP_TO_EDGE,[bh]:s.MIRRORED_REPEAT},Se={[Dn]:s.NEAREST,[x1]:s.NEAREST_MIPMAP_NEAREST,[Rc]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[Dd]:s.LINEAR_MIPMAP_NEAREST,[Fr]:s.LINEAR_MIPMAP_LINEAR},O={[b1]:s.NEVER,[C1]:s.ALWAYS,[E1]:s.LESS,[Tp]:s.LEQUAL,[T1]:s.EQUAL,[Ap]:s.GEQUAL,[A1]:s.GREATER,[R1]:s.NOTEQUAL};function ne(L,b){if(b.type===Hi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Pn||b.magFilter===Dd||b.magFilter===Rc||b.magFilter===Fr||b.minFilter===Pn||b.minFilter===Dd||b.minFilter===Rc||b.minFilter===Fr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,be[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,be[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,be[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Se[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dn||b.minFilter!==Rc&&b.minFilter!==Fr||b.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function _e(L,b){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",B));const pe=b.source;let ye=y.get(pe);ye===void 0&&(ye={},y.set(pe,ye));const ue=me(b);if(ue!==L.__cacheKey){ye[ue]===void 0&&(ye[ue]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,W=!0),ye[ue].usedTimes++;const Ke=ye[L.__cacheKey];Ke!==void 0&&(ye[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&w(b)),L.__cacheKey=ue,L.__webglTexture=ye[ue].texture}return W}function Re(L,b,W){return Math.floor(Math.floor(L/W)/b)}function He(L,b,W,pe){const ue=L.updateRanges;if(ue.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,W,pe,b.data);else{ue.sort((Ee,Te)=>Ee.start-Te.start);let Ke=0;for(let Ee=1;Ee<ue.length;Ee++){const Te=ue[Ke],Fe=ue[Ee],Ie=Te.start+Te.count,De=Re(Fe.start,b.width,4),ct=Re(Te.start,b.width,4);Fe.start<=Ie+1&&De===ct&&Re(Fe.start+Fe.count-1,b.width,4)===De?Te.count=Math.max(Te.count,Fe.start+Fe.count-Te.start):(++Ke,ue[Ke]=Fe)}ue.length=Ke+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),Xe=s.getParameter(s.UNPACK_SKIP_PIXELS),nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Ee=0,Te=ue.length;Ee<Te;Ee++){const Fe=ue[Ee],Ie=Math.floor(Fe.start/4),De=Math.ceil(Fe.count/4),ct=Ie%b.width,X=Math.floor(Ie/b.width),Le=De,Ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,ct,X,Le,Ae,W,pe,b.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,nt)}}function te(L,b,W){let pe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=s.TEXTURE_3D);const ye=_e(L,b),ue=b.source;i.bindTexture(pe,L.__webglTexture,s.TEXTURE0+W);const Ke=r.get(ue);if(ue.version!==Ke.__version||ye===!0){i.activeTexture(s.TEXTURE0+W);const we=Tt.getPrimaries(Tt.workingColorSpace),Xe=b.colorSpace===or?null:Tt.getPrimaries(b.colorSpace),nt=b.colorSpace===or||we===Xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ee=A(b.image,!1,l.maxTextureSize);Ee=Lt(b,Ee);const Te=c.convert(b.format,b.colorSpace),Fe=c.convert(b.type);let Ie=U(b.internalFormat,Te,Fe,b.colorSpace,b.isVideoTexture);ne(pe,b);let De;const ct=b.mipmaps,X=b.isVideoTexture!==!0,Le=Ke.__version===void 0||ye===!0,Ae=ue.dataReady,ze=I(b,Ee);if(b.isDepthTexture)Ie=P(b.format===Br,b.type),Le&&(X?i.texStorage2D(s.TEXTURE_2D,1,Ie,Ee.width,Ee.height):i.texImage2D(s.TEXTURE_2D,0,Ie,Ee.width,Ee.height,0,Te,Fe,null));else if(b.isDataTexture)if(ct.length>0){X&&Le&&i.texStorage2D(s.TEXTURE_2D,ze,Ie,ct[0].width,ct[0].height);for(let Me=0,xe=ct.length;Me<xe;Me++)De=ct[Me],X?Ae&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,De.width,De.height,Te,Fe,De.data):i.texImage2D(s.TEXTURE_2D,Me,Ie,De.width,De.height,0,Te,Fe,De.data);b.generateMipmaps=!1}else X?(Le&&i.texStorage2D(s.TEXTURE_2D,ze,Ie,Ee.width,Ee.height),Ae&&He(b,Ee,Te,Fe)):i.texImage2D(s.TEXTURE_2D,0,Ie,Ee.width,Ee.height,0,Te,Fe,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Ie,ct[0].width,ct[0].height,Ee.depth);for(let Me=0,xe=ct.length;Me<xe;Me++)if(De=ct[Me],b.format!==wi)if(Te!==null)if(X){if(Ae)if(b.layerUpdates.size>0){const Ce=n_(De.width,De.height,b.format,b.type);for(const it of b.layerUpdates){const zt=De.data.subarray(it*Ce/De.data.BYTES_PER_ELEMENT,(it+1)*Ce/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,it,De.width,De.height,1,Te,zt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,Ee.depth,Te,De.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,Ie,De.width,De.height,Ee.depth,0,De.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ae&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,Ee.depth,Te,Fe,De.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Me,Ie,De.width,De.height,Ee.depth,0,Te,Fe,De.data)}else{X&&Le&&i.texStorage2D(s.TEXTURE_2D,ze,Ie,ct[0].width,ct[0].height);for(let Me=0,xe=ct.length;Me<xe;Me++)De=ct[Me],b.format!==wi?Te!==null?X?Ae&&i.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,De.width,De.height,Te,De.data):i.compressedTexImage2D(s.TEXTURE_2D,Me,Ie,De.width,De.height,0,De.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ae&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,De.width,De.height,Te,Fe,De.data):i.texImage2D(s.TEXTURE_2D,Me,Ie,De.width,De.height,0,Te,Fe,De.data)}else if(b.isDataArrayTexture)if(X){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Ie,Ee.width,Ee.height,Ee.depth),Ae)if(b.layerUpdates.size>0){const Me=n_(Ee.width,Ee.height,b.format,b.type);for(const xe of b.layerUpdates){const Ce=Ee.data.subarray(xe*Me/Ee.data.BYTES_PER_ELEMENT,(xe+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,Ee.width,Ee.height,1,Te,Fe,Ce)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,Fe,Ee.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,Ee.width,Ee.height,Ee.depth,0,Te,Fe,Ee.data);else if(b.isData3DTexture)X?(Le&&i.texStorage3D(s.TEXTURE_3D,ze,Ie,Ee.width,Ee.height,Ee.depth),Ae&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,Fe,Ee.data)):i.texImage3D(s.TEXTURE_3D,0,Ie,Ee.width,Ee.height,Ee.depth,0,Te,Fe,Ee.data);else if(b.isFramebufferTexture){if(Le)if(X)i.texStorage2D(s.TEXTURE_2D,ze,Ie,Ee.width,Ee.height);else{let Me=Ee.width,xe=Ee.height;for(let Ce=0;Ce<ze;Ce++)i.texImage2D(s.TEXTURE_2D,Ce,Ie,Me,xe,0,Te,Fe,null),Me>>=1,xe>>=1}}else if(ct.length>0){if(X&&Le){const Me=Ye(ct[0]);i.texStorage2D(s.TEXTURE_2D,ze,Ie,Me.width,Me.height)}for(let Me=0,xe=ct.length;Me<xe;Me++)De=ct[Me],X?Ae&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,Te,Fe,De):i.texImage2D(s.TEXTURE_2D,Me,Ie,Te,Fe,De);b.generateMipmaps=!1}else if(X){if(Le){const Me=Ye(Ee);i.texStorage2D(s.TEXTURE_2D,ze,Ie,Me.width,Me.height)}Ae&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,Fe,Ee)}else i.texImage2D(s.TEXTURE_2D,0,Ie,Te,Fe,Ee);S(b)&&_(pe),Ke.__version=ue.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function fe(L,b,W){if(b.image.length!==6)return;const pe=_e(L,b),ye=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+W);const ue=r.get(ye);if(ye.version!==ue.__version||pe===!0){i.activeTexture(s.TEXTURE0+W);const Ke=Tt.getPrimaries(Tt.workingColorSpace),we=b.colorSpace===or?null:Tt.getPrimaries(b.colorSpace),Xe=b.colorSpace===or||Ke===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const nt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let xe=0;xe<6;xe++)!nt&&!Ee?Te[xe]=A(b.image[xe],!0,l.maxCubemapSize):Te[xe]=Ee?b.image[xe].image:b.image[xe],Te[xe]=Lt(b,Te[xe]);const Fe=Te[0],Ie=c.convert(b.format,b.colorSpace),De=c.convert(b.type),ct=U(b.internalFormat,Ie,De,b.colorSpace),X=b.isVideoTexture!==!0,Le=ue.__version===void 0||pe===!0,Ae=ye.dataReady;let ze=I(b,Fe);ne(s.TEXTURE_CUBE_MAP,b);let Me;if(nt){X&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,ct,Fe.width,Fe.height);for(let xe=0;xe<6;xe++){Me=Te[xe].mipmaps;for(let Ce=0;Ce<Me.length;Ce++){const it=Me[Ce];b.format!==wi?Ie!==null?X?Ae&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,it.width,it.height,Ie,it.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,ct,it.width,it.height,0,it.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,it.width,it.height,Ie,De,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,ct,it.width,it.height,0,Ie,De,it.data)}}}else{if(Me=b.mipmaps,X&&Le){Me.length>0&&ze++;const xe=Ye(Te[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,ct,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ee){X?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Te[xe].width,Te[xe].height,Ie,De,Te[xe].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Te[xe].width,Te[xe].height,0,Ie,De,Te[xe].data);for(let Ce=0;Ce<Me.length;Ce++){const zt=Me[Ce].image[xe].image;X?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,zt.width,zt.height,Ie,De,zt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,ct,zt.width,zt.height,0,Ie,De,zt.data)}}else{X?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie,De,Te[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Ie,De,Te[xe]);for(let Ce=0;Ce<Me.length;Ce++){const it=Me[Ce];X?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,Ie,De,it.image[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,ct,Ie,De,it.image[xe])}}}S(b)&&_(s.TEXTURE_CUBE_MAP),ue.__version=ye.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Ne(L,b,W,pe,ye,ue){const Ke=c.convert(W.format,W.colorSpace),we=c.convert(W.type),Xe=U(W.internalFormat,Ke,we,W.colorSpace),nt=r.get(b),Ee=r.get(W);if(Ee.__renderTarget=b,!nt.__hasExternalTextures){const Te=Math.max(1,b.width>>ue),Fe=Math.max(1,b.height>>ue);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?i.texImage3D(ye,ue,Xe,Te,Fe,b.depth,0,Ke,we,null):i.texImage2D(ye,ue,Xe,Te,Fe,0,Ke,we,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Zt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ye,Ee.__webglTexture,0,V(b)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ye,Ee.__webglTexture,ue),i.bindFramebuffer(s.FRAMEBUFFER,null)}function je(L,b,W){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const pe=b.depthTexture,ye=pe&&pe.isDepthTexture?pe.type:null,ue=P(b.stencilBuffer,ye),Ke=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Zt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(b),ue,b.width,b.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(b),ue,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ue,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,L)}else{const pe=b.textures;for(let ye=0;ye<pe.length;ye++){const ue=pe[ye],Ke=c.convert(ue.format,ue.colorSpace),we=c.convert(ue.type),Xe=U(ue.internalFormat,Ke,we,ue.colorSpace);Zt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(b),Xe,b.width,b.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(b),Xe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Xe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(L,b,W){const pe=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(b.depthTexture);if(ye.__renderTarget=b,(!ye.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pe){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),ye.__webglTexture===void 0){ye.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),ne(s.TEXTURE_CUBE_MAP,b.depthTexture);const nt=c.convert(b.depthTexture.format),Ee=c.convert(b.depthTexture.type);let Te;b.depthTexture.format===Ta?Te=s.DEPTH_COMPONENT24:b.depthTexture.format===Br&&(Te=s.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Te,b.width,b.height,0,nt,Ee,null)}}else de(b.depthTexture,0);const ue=ye.__webglTexture,Ke=V(b),we=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,Xe=b.depthTexture.format===Br?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ta)Zt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Xe,we,ue,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,Xe,we,ue,0);else if(b.depthTexture.format===Br)Zt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Xe,we,ue,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,Xe,we,ue,0);else throw new Error("Unknown depthTexture format")}function pt(L){const b=r.get(L),W=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const ye=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",ye)};pe.addEventListener("dispose",ye),b.__depthDisposeCallback=ye}b.__boundDepthTexture=pe}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let pe=0;pe<6;pe++)Ge(b.__webglFramebuffer[pe],L,pe);else{const pe=L.texture.mipmaps;pe&&pe.length>0?Ge(b.__webglFramebuffer[0],L,0):Ge(b.__webglFramebuffer,L,0)}else if(W){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=s.createRenderbuffer(),je(b.__webglDepthbuffer[pe],L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,ue)}}else{const pe=L.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),je(b.__webglDepthbuffer,L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,ue)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function en(L,b,W){const pe=r.get(L);b!==void 0&&Ne(pe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&pt(L)}function _t(L){const b=L.texture,W=r.get(L),pe=r.get(b);L.addEventListener("dispose",z);const ye=L.textures,ue=L.isWebGLCubeRenderTarget===!0,Ke=ye.length>1;if(Ke||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=b.version,f.memory.textures++),ue){W.__webglFramebuffer=[];for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[we]=[];for(let Xe=0;Xe<b.mipmaps.length;Xe++)W.__webglFramebuffer[we][Xe]=s.createFramebuffer()}else W.__webglFramebuffer[we]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)W.__webglFramebuffer[we]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let we=0,Xe=ye.length;we<Xe;we++){const nt=r.get(ye[we]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&Zt(L)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let we=0;we<ye.length;we++){const Xe=ye[we];W.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[we]);const nt=c.convert(Xe.format,Xe.colorSpace),Ee=c.convert(Xe.type),Te=U(Xe.internalFormat,nt,Ee,Xe.colorSpace,L.isXRRenderTarget===!0),Fe=V(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Te,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,W.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),je(W.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){i.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,b);for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)Ne(W.__webglFramebuffer[we][Xe],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe);else Ne(W.__webglFramebuffer[we],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let we=0,Xe=ye.length;we<Xe;we++){const nt=ye[we],Ee=r.get(nt);let Te=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Te,Ee.__webglTexture),ne(Te,nt),Ne(W.__webglFramebuffer,L,nt,s.COLOR_ATTACHMENT0+we,Te,0),S(nt)&&_(Te)}i.unbindTexture()}else{let we=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(we,pe.__webglTexture),ne(we,b),b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)Ne(W.__webglFramebuffer[Xe],L,b,s.COLOR_ATTACHMENT0,we,Xe);else Ne(W.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,we,0);S(b)&&_(we),i.unbindTexture()}L.depthBuffer&&pt(L)}function mt(L){const b=L.textures;for(let W=0,pe=b.length;W<pe;W++){const ye=b[W];if(S(ye)){const ue=D(L),Ke=r.get(ye).__webglTexture;i.bindTexture(ue,Ke),_(ue),i.unbindTexture()}}}const wt=[],ot=[];function tn(L){if(L.samples>0){if(Zt(L)===!1){const b=L.textures,W=L.width,pe=L.height;let ye=s.COLOR_BUFFER_BIT;const ue=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(L),we=b.length>1;if(we)for(let nt=0;nt<b.length;nt++)i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Xe=L.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let nt=0;nt<b.length;nt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Ee=r.get(b[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,W,pe,0,0,W,pe,ye,s.NEAREST),m===!0&&(wt.length=0,ot.length=0,wt.push(s.COLOR_ATTACHMENT0+nt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(wt.push(ue),ot.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,wt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let nt=0;nt<b.length;nt++){i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Ee=r.get(b[nt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,Ee,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function Zt(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function bt(L){const b=f.render.frame;v.get(L)!==b&&(v.set(L,b),L.update())}function Lt(L,b){const W=L.colorSpace,pe=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Ws&&W!==or&&(Tt.getTransfer(W)===Gt?(pe!==wi||ye!==ai)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",W)),b}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=oe,this.setTexture2D=de,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=ie,this.rebindTextures=en,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function t3(s,e){function i(r,l=or){let c;const f=Tt.getTransfer(l);if(r===ai)return s.UNSIGNED_BYTE;if(r===yp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Sp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Sx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Mx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===xx)return s.BYTE;if(r===yx)return s.SHORT;if(r===il)return s.UNSIGNED_SHORT;if(r===xp)return s.INT;if(r===Xi)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===Ea)return s.HALF_FLOAT;if(r===bx)return s.ALPHA;if(r===Ex)return s.RGB;if(r===wi)return s.RGBA;if(r===Ta)return s.DEPTH_COMPONENT;if(r===Br)return s.DEPTH_STENCIL;if(r===Tx)return s.RED;if(r===Mp)return s.RED_INTEGER;if(r===Xs)return s.RG;if(r===bp)return s.RG_INTEGER;if(r===Ep)return s.RGBA_INTEGER;if(r===$c||r===eu||r===tu||r===nu)if(f===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eh||r===Th||r===Ah||r===Rh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Eh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Th)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ah)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ch||r===wh||r===Dh||r===Nh||r===Uh||r===Lh||r===Oh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ch||r===wh)return f===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Dh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Nh)return c.COMPRESSED_R11_EAC;if(r===Uh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Lh)return c.COMPRESSED_RG11_EAC;if(r===Oh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ph||r===Ih||r===zh||r===Fh||r===Bh||r===Hh||r===Gh||r===Vh||r===kh||r===jh||r===Xh||r===Wh||r===qh||r===Yh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ph)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ih)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zh||r===Kh||r===Qh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Zh)return f===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jh||r===$h||r===ep||r===tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Jh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===$h)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ep)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===al?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const n3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i3=`
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

}`;class a3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Bx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Wi({vertexShader:n3,fragmentShader:i3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ra(new pu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r3 extends Zs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,g=null,y=null,M=null,E=null;const A=typeof XRWebGLBinding<"u",S=new a3,_={},D=i.getContextAttributes();let U=null,P=null;const I=[],B=[],z=new It;let Z=null;const w=new ii;w.viewport=new rn;const N=new ii;N.viewport=new rn;const j=[w,N],oe=new pT;let se=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=I[te];return fe===void 0&&(fe=new $d,I[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=I[te];return fe===void 0&&(fe=new $d,I[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=I[te];return fe===void 0&&(fe=new $d,I[te]=fe),fe.getHandSpace()};function de(te){const fe=B.indexOf(te.inputSource);if(fe===-1)return;const Ne=I[fe];Ne!==void 0&&(Ne.update(te.inputSource,te.frame,p||f),Ne.dispatchEvent({type:te.type,data:te.inputSource}))}function F(){l.removeEventListener("select",de),l.removeEventListener("selectstart",de),l.removeEventListener("selectend",de),l.removeEventListener("squeeze",de),l.removeEventListener("squeezestart",de),l.removeEventListener("squeezeend",de),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",G);for(let te=0;te<I.length;te++){const fe=B[te];fe!==null&&(B[te]=null,I[te].disconnect(fe))}se=null,me=null,S.reset();for(const te in _)delete _[te];e.setRenderTarget(U),M=null,y=null,g=null,l=null,P=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",de),l.addEventListener("selectstart",de),l.addEventListener("selectend",de),l.addEventListener("squeeze",de),l.addEventListener("squeezestart",de),l.addEventListener("squeezeend",de),l.addEventListener("end",F),l.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,je=null,Ge=null;D.depth&&(Ge=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ne=D.stencil?Br:Ta,je=D.stencil?al:Xi);const pt={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(pt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new ki(y.textureWidth,y.textureHeight,{format:wi,type:ai,depthTexture:new sl(y.textureWidth,y.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ne={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ne),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new ki(M.framebufferWidth,M.framebufferHeight,{format:wi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),He.setContext(l),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(te){for(let fe=0;fe<te.removed.length;fe++){const Ne=te.removed[fe],je=B.indexOf(Ne);je>=0&&(B[je]=null,I[je].disconnect(Ne))}for(let fe=0;fe<te.added.length;fe++){const Ne=te.added[fe];let je=B.indexOf(Ne);if(je===-1){for(let pt=0;pt<I.length;pt++)if(pt>=B.length){B.push(Ne),je=pt;break}else if(B[pt]===null){B[pt]=Ne,je=pt;break}if(je===-1)break}const Ge=I[je];Ge&&Ge.connect(Ne)}}const ie=new re,be=new re;function Se(te,fe,Ne){ie.setFromMatrixPosition(fe.matrixWorld),be.setFromMatrixPosition(Ne.matrixWorld);const je=ie.distanceTo(be),Ge=fe.projectionMatrix.elements,pt=Ne.projectionMatrix.elements,en=Ge[14]/(Ge[10]-1),_t=Ge[14]/(Ge[10]+1),mt=(Ge[9]+1)/Ge[5],wt=(Ge[9]-1)/Ge[5],ot=(Ge[8]-1)/Ge[0],tn=(pt[8]+1)/pt[0],V=en*ot,Zt=en*tn,bt=je/(-ot+tn),Lt=bt*-ot;if(fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Lt),te.translateZ(bt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ge[10]===-1)te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ye=en+bt,L=_t+bt,b=V-Lt,W=Zt+(je-Lt),pe=mt*_t/L*Ye,ye=wt*_t/L*Ye;te.projectionMatrix.makePerspective(b,W,pe,ye,Ye,L),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function O(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let fe=te.near,Ne=te.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(Ne=S.depthFar)),oe.near=N.near=w.near=fe,oe.far=N.far=w.far=Ne,(se!==oe.near||me!==oe.far)&&(l.updateRenderState({depthNear:oe.near,depthFar:oe.far}),se=oe.near,me=oe.far),oe.layers.mask=te.layers.mask|6,w.layers.mask=oe.layers.mask&3,N.layers.mask=oe.layers.mask&5;const je=te.parent,Ge=oe.cameras;O(oe,je);for(let pt=0;pt<Ge.length;pt++)O(Ge[pt],je);Ge.length===2?Se(oe,w,N):oe.projectionMatrix.copy(w.projectionMatrix),ne(te,oe,je)};function ne(te,fe,Ne){Ne===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(Ne.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=np*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return oe},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(te){m=te,y!==null&&(y.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(oe)},this.getCameraTexture=function(te){return _[te]};let _e=null;function Re(te,fe){if(v=fe.getViewerPose(p||f),E=fe,v!==null){const Ne=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let je=!1;Ne.length!==oe.cameras.length&&(oe.cameras.length=0,je=!0);for(let _t=0;_t<Ne.length;_t++){const mt=Ne[_t];let wt=null;if(M!==null)wt=M.getViewport(mt);else{const tn=g.getViewSubImage(y,mt);wt=tn.viewport,_t===0&&(e.setRenderTargetTextures(P,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(P))}let ot=j[_t];ot===void 0&&(ot=new ii,ot.layers.enable(_t),ot.viewport=new rn,j[_t]=ot),ot.matrix.fromArray(mt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(mt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(wt.x,wt.y,wt.width,wt.height),_t===0&&(oe.matrix.copy(ot.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale)),je===!0&&oe.cameras.push(ot)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const _t=g.getDepthInformation(Ne[0]);_t&&_t.isValid&&_t.texture&&S.init(_t,l.renderState)}if(Ge&&Ge.includes("camera-access")&&A){e.state.unbindTexture(),g=r.getBinding();for(let _t=0;_t<Ne.length;_t++){const mt=Ne[_t].camera;if(mt){let wt=_[mt];wt||(wt=new Bx,_[mt]=wt);const ot=g.getCameraImage(mt);wt.sourceTexture=ot}}}}for(let Ne=0;Ne<I.length;Ne++){const je=B[Ne],Ge=I[Ne];je!==null&&Ge!==void 0&&Ge.update(je,fe,p||f)}_e&&_e(te,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),E=null}const He=new Vx;He.setAnimationLoop(Re),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}}const Lr=new Aa,s3=new $t;function o3(s,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Ox(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,D,U,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,P)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),A(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,D,U):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===qn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===qn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const D=e.get(_),U=D.envMap,P=D.envMapRotation;U&&(S.envMap.value=U,Lr.copy(P),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),S.envMapRotation.value.setFromMatrix4(s3.makeRotationFromEuler(Lr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,D,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*D,S.scale.value=U*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,D){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const D=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function l3(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const P=U.program;r.uniformBlockBinding(D,P)}function p(D,U){let P=l[D.id];P===void 0&&(E(D),P=v(D),l[D.id]=P,D.addEventListener("dispose",S));const I=U.program;r.updateUBOMapping(D,I);const B=e.render.frame;c[D.id]!==B&&(y(D),c[D.id]=B)}function v(D){const U=g();D.__bindingPointIndex=U;const P=s.createBuffer(),I=D.__size,B=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,I,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,P),P}function g(){for(let D=0;D<h;D++)if(f.indexOf(D)===-1)return f.push(D),D;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const U=l[D.id],P=D.uniforms,I=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let B=0,z=P.length;B<z;B++){const Z=Array.isArray(P[B])?P[B]:[P[B]];for(let w=0,N=Z.length;w<N;w++){const j=Z[w];if(M(j,B,w,I)===!0){const oe=j.__offset,se=Array.isArray(j.value)?j.value:[j.value];let me=0;for(let de=0;de<se.length;de++){const F=se[de],G=A(F);typeof F=="number"||typeof F=="boolean"?(j.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,oe+me,j.__data)):F.isMatrix3?(j.__data[0]=F.elements[0],j.__data[1]=F.elements[1],j.__data[2]=F.elements[2],j.__data[3]=0,j.__data[4]=F.elements[3],j.__data[5]=F.elements[4],j.__data[6]=F.elements[5],j.__data[7]=0,j.__data[8]=F.elements[6],j.__data[9]=F.elements[7],j.__data[10]=F.elements[8],j.__data[11]=0):(F.toArray(j.__data,me),me+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,j.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,U,P,I){const B=D.value,z=U+"_"+P;if(I[z]===void 0)return typeof B=="number"||typeof B=="boolean"?I[z]=B:I[z]=B.clone(),!0;{const Z=I[z];if(typeof B=="number"||typeof B=="boolean"){if(Z!==B)return I[z]=B,!0}else if(Z.equals(B)===!1)return Z.copy(B),!0}return!1}function E(D){const U=D.uniforms;let P=0;const I=16;for(let z=0,Z=U.length;z<Z;z++){const w=Array.isArray(U[z])?U[z]:[U[z]];for(let N=0,j=w.length;N<j;N++){const oe=w[N],se=Array.isArray(oe.value)?oe.value:[oe.value];for(let me=0,de=se.length;me<de;me++){const F=se[me],G=A(F),ie=P%I,be=ie%G.boundary,Se=ie+be;P+=be,Se!==0&&I-Se<G.storage&&(P+=I-Se),oe.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=P,P+=G.storage}}}const B=P%I;return B>0&&(P+=I-B),D.__size=P,D.__cache={},this}function A(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",D),U}function S(D){const U=D.target;U.removeEventListener("dispose",S);const P=f.indexOf(U.__bindingPointIndex);f.splice(P,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const D in l)s.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}const c3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function u3(){return Fi===null&&(Fi=new nT(c3,16,16,Xs,Ea),Fi.name="DFG_LUT",Fi.minFilter=Pn,Fi.magFilter=Pn,Fi.wrapS=_a,Fi.wrapT=_a,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class f3{constructor(e={}){const{canvas:i=w1(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1,outputBufferType:M=ai}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const A=M,S=new Set([Ep,bp,Mp]),_=new Set([ai,Xi,il,al,yp,Sp]),D=new Uint32Array(4),U=new Int32Array(4);let P=null,I=null;const B=[],z=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let N=!1;this._outputColorSpace=gi;let j=0,oe=0,se=null,me=-1,de=null;const F=new rn,G=new rn;let ie=null;const be=new Pt(0);let Se=0,O=i.width,ne=i.height,_e=1,Re=null,He=null;const te=new rn(0,0,O,ne),fe=new rn(0,0,O,ne);let Ne=!1;const je=new Cp;let Ge=!1,pt=!1;const en=new $t,_t=new re,mt=new rn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function tn(){return se===null?_e:1}let V=r;function Zt(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${_p}`),i.addEventListener("webglcontextlost",it,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),V===null){const q="webgl2";if(V=Zt(q,C),V===null)throw Zt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ct("WebGLRenderer: "+C.message),C}let bt,Lt,Ye,L,b,W,pe,ye,ue,Ke,we,Xe,nt,Ee,Te,Fe,Ie,De,ct,X,Le,Ae,ze,Me;function xe(){bt=new uR(V),bt.init(),Ae=new t3(V,bt),Lt=new tR(V,bt,e,Ae),Ye=new $C(V,bt),Lt.reversedDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),L=new hR(V),b=new FC,W=new e3(V,bt,Ye,b,Lt,Ae,L),pe=new iR(w),ye=new cR(w),ue=new vT(V),ze=new $2(V,ue),Ke=new fR(V,ue,L,ze),we=new mR(V,Ke,ue,L),ct=new pR(V,Lt,W),Fe=new nR(b),Xe=new zC(w,pe,ye,bt,Lt,ze,Fe),nt=new o3(w,b),Ee=new HC,Te=new WC(bt),De=new J2(w,pe,ye,Ye,we,E,m),Ie=new QC(w,we,Lt),Me=new l3(V,L,Lt,Ye),X=new eR(V,bt,L),Le=new dR(V,bt,L),L.programs=Xe.programs,w.capabilities=Lt,w.extensions=bt,w.properties=b,w.renderLists=Ee,w.shadowMap=Ie,w.state=Ye,w.info=L}xe(),A!==ai&&(Z=new vR(A,i.width,i.height,l,c));const Ce=new r3(w,V);this.xr=Ce,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=bt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=bt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(C){C!==void 0&&(_e=C,this.setSize(O,ne,!1))},this.getSize=function(C){return C.set(O,ne)},this.setSize=function(C,q,le=!0){if(Ce.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,ne=q,i.width=Math.floor(C*_e),i.height=Math.floor(q*_e),le===!0&&(i.style.width=C+"px",i.style.height=q+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(O*_e,ne*_e).floor()},this.setDrawingBufferSize=function(C,q,le){O=C,ne=q,_e=le,i.width=Math.floor(C*le),i.height=Math.floor(q*le),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(A===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(te)},this.setViewport=function(C,q,le,$){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,q,le,$),Ye.viewport(F.copy(te).multiplyScalar(_e).round())},this.getScissor=function(C){return C.copy(fe)},this.setScissor=function(C,q,le,$){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,q,le,$),Ye.scissor(G.copy(fe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(C){Ye.setScissorTest(Ne=C)},this.setOpaqueSort=function(C){Re=C},this.setTransparentSort=function(C){He=C},this.getClearColor=function(C){return C.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,le=!0){let $=0;if(C){let K=!1;if(se!==null){const Ue=se.texture.format;K=S.has(Ue)}if(K){const Ue=se.texture.type,Be=_.has(Ue),Oe=De.getClearColor(),Ve=De.getClearAlpha(),We=Oe.r,$e=Oe.g,qe=Oe.b;Be?(D[0]=We,D[1]=$e,D[2]=qe,D[3]=Ve,V.clearBufferuiv(V.COLOR,0,D)):(U[0]=We,U[1]=$e,U[2]=qe,U[3]=Ve,V.clearBufferiv(V.COLOR,0,U))}else $|=V.COLOR_BUFFER_BIT}q&&($|=V.DEPTH_BUFFER_BIT),le&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",it,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),De.dispose(),Ee.dispose(),Te.dispose(),b.dispose(),pe.dispose(),ye.dispose(),we.dispose(),ze.dispose(),Me.dispose(),Xe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",jr),Ce.removeEventListener("sessionend",$s),Li.stop()};function it(C){C.preventDefault(),Ov("WebGLRenderer: Context Lost."),N=!0}function zt(){Ov("WebGLRenderer: Context Restored."),N=!1;const C=L.autoReset,q=Ie.enabled,le=Ie.autoUpdate,$=Ie.needsUpdate,K=Ie.type;xe(),L.autoReset=C,Ie.enabled=q,Ie.autoUpdate=le,Ie.needsUpdate=$,Ie.type=K}function Et(C){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Nn(C){const q=C.target;q.removeEventListener("dispose",Nn),xi(q)}function xi(C){ml(C),b.remove(C)}function ml(C){const q=b.get(C).programs;q!==void 0&&(q.forEach(function(le){Xe.releaseProgram(le)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,le,$,K,Ue){q===null&&(q=wt);const Be=K.isMesh&&K.matrixWorld.determinant()<0,Oe=ur(C,q,le,$,K);Ye.setMaterial($,Be);let Ve=le.index,We=1;if($.wireframe===!0){if(Ve=Ke.getWireframeAttribute(le),Ve===void 0)return;We=2}const $e=le.drawRange,qe=le.attributes.position;let et=$e.start*We,Dt=($e.start+$e.count)*We;Ue!==null&&(et=Math.max(et,Ue.start*We),Dt=Math.min(Dt,(Ue.start+Ue.count)*We)),Ve!==null?(et=Math.max(et,0),Dt=Math.min(Dt,Ve.count)):qe!=null&&(et=Math.max(et,0),Dt=Math.min(Dt,qe.count));const Kt=Dt-et;if(Kt<0||Kt===1/0)return;ze.setup(K,$,Oe,le,Ve);let Wt,Ot=X;if(Ve!==null&&(Wt=ue.get(Ve),Ot=Le,Ot.setIndex(Wt)),K.isMesh)$.wireframe===!0?(Ye.setLineWidth($.wireframeLinewidth*tn()),Ot.setMode(V.LINES)):Ot.setMode(V.TRIANGLES);else if(K.isLine){let Qe=$.linewidth;Qe===void 0&&(Qe=1),Ye.setLineWidth(Qe*tn()),K.isLineSegments?Ot.setMode(V.LINES):K.isLineLoop?Ot.setMode(V.LINE_LOOP):Ot.setMode(V.LINE_STRIP)}else K.isPoints?Ot.setMode(V.POINTS):K.isSprite&&Ot.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)rl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Qe=K._multiDrawStarts,Nt=K._multiDrawCounts,at=K._multiDrawCount,Sn=Ve?ue.get(Ve).bytesPerElement:1,Yi=b.get($).currentProgram.getUniforms();for(let Mn=0;Mn<at;Mn++)Yi.setValue(V,"_gl_DrawID",Mn),Ot.render(Qe[Mn]/Sn,Nt[Mn])}else if(K.isInstancedMesh)Ot.renderInstances(et,Kt,K.count);else if(le.isInstancedBufferGeometry){const Qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Nt=Math.min(le.instanceCount,Qe);Ot.renderInstances(et,Kt,Nt)}else Ot.render(et,Kt)};function Qs(C,q,le){C.transparent===!0&&C.side===va&&C.forceSinglePass===!1?(C.side=qn,C.needsUpdate=!0,Wr(C,q,le),C.side=cr,C.needsUpdate=!0,Wr(C,q,le),C.side=va):Wr(C,q,le)}this.compile=function(C,q,le=null){le===null&&(le=C),I=Te.get(le),I.init(q),z.push(I),le.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),C!==le&&C.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),I.setupLights();const $=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ue=K.material;if(Ue)if(Array.isArray(Ue))for(let Be=0;Be<Ue.length;Be++){const Oe=Ue[Be];Qs(Oe,le,K),$.add(Oe)}else Qs(Ue,le,K),$.add(Ue)}),I=z.pop(),$},this.compileAsync=function(C,q,le=null){const $=this.compile(C,q,le);return new Promise(K=>{function Ue(){if($.forEach(function(Be){b.get(Be).currentProgram.isReady()&&$.delete(Be)}),$.size===0){K(C);return}setTimeout(Ue,10)}bt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let kr=null;function Js(C){kr&&kr(C)}function jr(){Li.stop()}function $s(){Li.start()}const Li=new Vx;Li.setAnimationLoop(Js),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(C){kr=C,Ce.setAnimationLoop(C),C===null?Li.stop():Li.start()},Ce.addEventListener("sessionstart",jr),Ce.addEventListener("sessionend",$s),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const le=Ce.enabled===!0&&Ce.isPresenting===!0,$=Z!==null&&(se===null||le)&&Z.begin(w,se);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,q,se),I=Te.get(C,z.length),I.init(q),z.push(I),en.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),je.setFromProjectionMatrix(en,Gi,q.reversedDepth),pt=this.localClippingEnabled,Ge=Fe.init(this.clippingPlanes,pt),P=Ee.get(C,B.length),P.init(),B.push(P),Ce.enabled===!0&&Ce.isPresenting===!0){const Be=w.xr.getDepthSensingMesh();Be!==null&&ri(Be,q,-1/0,w.sortObjects)}ri(C,q,0,w.sortObjects),P.finish(),w.sortObjects===!0&&P.sort(Re,He),ot=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ot&&De.addToRenderList(P,C),this.info.render.frame++,Ge===!0&&Fe.beginShadows();const K=I.state.shadowsArray;if(Ie.render(K,C,q),Ge===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&Z.hasRenderPass())===!1){const Be=P.opaque,Oe=P.transmissive;if(I.setupLights(),q.isArrayCamera){const Ve=q.cameras;if(Oe.length>0)for(let We=0,$e=Ve.length;We<$e;We++){const qe=Ve[We];yn(Be,Oe,C,qe)}ot&&De.render(C);for(let We=0,$e=Ve.length;We<$e;We++){const qe=Ve[We];ln(P,C,qe,qe.viewport)}}else Oe.length>0&&yn(Be,Oe,C,q),ot&&De.render(C),ln(P,C,q)}se!==null&&oe===0&&(W.updateMultisampleRenderTarget(se),W.updateRenderTargetMipmap(se)),$&&Z.end(w),C.isScene===!0&&C.onAfterRender(w,C,q),ze.resetDefaultState(),me=-1,de=null,z.pop(),z.length>0?(I=z[z.length-1],Ge===!0&&Fe.setGlobalState(w.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?P=B[B.length-1]:P=null};function ri(C,q,le,$){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||je.intersectsSprite(C)){$&&mt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(en);const Be=we.update(C),Oe=C.material;Oe.visible&&P.push(C,Be,Oe,le,mt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||je.intersectsObject(C))){const Be=we.update(C),Oe=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),mt.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),mt.copy(Be.boundingSphere.center)),mt.applyMatrix4(C.matrixWorld).applyMatrix4(en)),Array.isArray(Oe)){const Ve=Be.groups;for(let We=0,$e=Ve.length;We<$e;We++){const qe=Ve[We],et=Oe[qe.materialIndex];et&&et.visible&&P.push(C,Be,et,le,mt.z,qe)}}else Oe.visible&&P.push(C,Be,Oe,le,mt.z,null)}}const Ue=C.children;for(let Be=0,Oe=Ue.length;Be<Oe;Be++)ri(Ue[Be],q,le,$)}function ln(C,q,le,$){const{opaque:K,transmissive:Ue,transparent:Be}=C;I.setupLightsView(le),Ge===!0&&Fe.setGlobalState(w.clippingPlanes,le),$&&Ye.viewport(F.copy($)),K.length>0&&yi(K,q,le),Ue.length>0&&yi(Ue,q,le),Be.length>0&&yi(Be,q,le),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function yn(C,q,le,$){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[$.id]===void 0){const et=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[$.id]=new ki(1,1,{generateMipmaps:!0,type:et?Ea:ai,minFilter:Fr,samples:Lt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ue=I.state.transmissionRenderTarget[$.id],Be=$.viewport||F;Ue.setSize(Be.z*w.transmissionResolutionScale,Be.w*w.transmissionResolutionScale);const Oe=w.getRenderTarget(),Ve=w.getActiveCubeFace(),We=w.getActiveMipmapLevel();w.setRenderTarget(Ue),w.getClearColor(be),Se=w.getClearAlpha(),Se<1&&w.setClearColor(16777215,.5),w.clear(),ot&&De.render(le);const $e=w.toneMapping;w.toneMapping=Vi;const qe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),I.setupLightsView($),Ge===!0&&Fe.setGlobalState(w.clippingPlanes,$),yi(C,le,$),W.updateMultisampleRenderTarget(Ue),W.updateRenderTargetMipmap(Ue),bt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Dt=0,Kt=q.length;Dt<Kt;Dt++){const Wt=q[Dt],{object:Ot,geometry:Qe,material:Nt,group:at}=Wt;if(Nt.side===va&&Ot.layers.test($.layers)){const Sn=Nt.side;Nt.side=qn,Nt.needsUpdate=!0,Xr(Ot,le,$,Qe,Nt,at),Nt.side=Sn,Nt.needsUpdate=!0,et=!0}}et===!0&&(W.updateMultisampleRenderTarget(Ue),W.updateRenderTargetMipmap(Ue))}w.setRenderTarget(Oe,Ve,We),w.setClearColor(be,Se),qe!==void 0&&($.viewport=qe),w.toneMapping=$e}function yi(C,q,le){const $=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Ue=C.length;K<Ue;K++){const Be=C[K],{object:Oe,geometry:Ve,group:We}=Be;let $e=Be.material;$e.allowOverride===!0&&$!==null&&($e=$),Oe.layers.test(le.layers)&&Xr(Oe,q,le,Ve,$e,We)}}function Xr(C,q,le,$,K,Ue){C.onBeforeRender(w,q,le,$,K,Ue),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(w,q,le,$,C,Ue),K.transparent===!0&&K.side===va&&K.forceSinglePass===!1?(K.side=qn,K.needsUpdate=!0,w.renderBufferDirect(le,q,$,K,C,Ue),K.side=cr,K.needsUpdate=!0,w.renderBufferDirect(le,q,$,K,C,Ue),K.side=va):w.renderBufferDirect(le,q,$,K,C,Ue),C.onAfterRender(w,q,le,$,K,Ue)}function Wr(C,q,le){q.isScene!==!0&&(q=wt);const $=b.get(C),K=I.state.lights,Ue=I.state.shadowsArray,Be=K.state.version,Oe=Xe.getParameters(C,K.state,Ue,q,le),Ve=Xe.getProgramCacheKey(Oe);let We=$.programs;$.environment=C.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(C.isMeshStandardMaterial?ye:pe).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,We===void 0&&(C.addEventListener("dispose",Nn),We=new Map,$.programs=We);let $e=We.get(Ve);if($e!==void 0){if($.currentProgram===$e&&$.lightsStateVersion===Be)return eo(C,Oe),$e}else Oe.uniforms=Xe.getUniforms(C),C.onBeforeCompile(Oe,w),$e=Xe.acquireProgram(Oe,Ve),We.set(Ve,$e),$.uniforms=Oe.uniforms;const qe=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=Fe.uniform),eo(C,Oe),$.needsLights=wa(C),$.lightsStateVersion=Be,$.needsLights&&(qe.ambientLightColor.value=K.state.ambient,qe.lightProbe.value=K.state.probe,qe.directionalLights.value=K.state.directional,qe.directionalLightShadows.value=K.state.directionalShadow,qe.spotLights.value=K.state.spot,qe.spotLightShadows.value=K.state.spotShadow,qe.rectAreaLights.value=K.state.rectArea,qe.ltc_1.value=K.state.rectAreaLTC1,qe.ltc_2.value=K.state.rectAreaLTC2,qe.pointLights.value=K.state.point,qe.pointLightShadows.value=K.state.pointShadow,qe.hemisphereLights.value=K.state.hemi,qe.directionalShadowMap.value=K.state.directionalShadowMap,qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qe.spotShadowMap.value=K.state.spotShadowMap,qe.spotLightMatrix.value=K.state.spotLightMatrix,qe.spotLightMap.value=K.state.spotLightMap,qe.pointShadowMap.value=K.state.pointShadowMap,qe.pointShadowMatrix.value=K.state.pointShadowMatrix),$.currentProgram=$e,$.uniformsList=null,$e}function gl(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=iu.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function eo(C,q){const le=b.get(C);le.outputColorSpace=q.outputColorSpace,le.batching=q.batching,le.batchingColor=q.batchingColor,le.instancing=q.instancing,le.instancingColor=q.instancingColor,le.instancingMorph=q.instancingMorph,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function ur(C,q,le,$,K){q.isScene!==!0&&(q=wt),W.resetTextureUnits();const Ue=q.fog,Be=$.isMeshStandardMaterial?q.environment:null,Oe=se===null?w.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ws,Ve=($.isMeshStandardMaterial?ye:pe).get($.envMap||Be),We=$.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,$e=!!le.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qe=!!le.morphAttributes.position,et=!!le.morphAttributes.normal,Dt=!!le.morphAttributes.color;let Kt=Vi;$.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Kt=w.toneMapping);const Wt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ot=Wt!==void 0?Wt.length:0,Qe=b.get($),Nt=I.state.lights;if(Ge===!0&&(pt===!0||C!==de)){const En=C===de&&$.id===me;Fe.setState($,C,En)}let at=!1;$.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Nt.state.version||Qe.outputColorSpace!==Oe||K.isBatchedMesh&&Qe.batching===!1||!K.isBatchedMesh&&Qe.batching===!0||K.isBatchedMesh&&Qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Qe.instancing===!1||!K.isInstancedMesh&&Qe.instancing===!0||K.isSkinnedMesh&&Qe.skinning===!1||!K.isSkinnedMesh&&Qe.skinning===!0||K.isInstancedMesh&&Qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Qe.instancingMorph===!1&&K.morphTexture!==null||Qe.envMap!==Ve||$.fog===!0&&Qe.fog!==Ue||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Fe.numPlanes||Qe.numIntersection!==Fe.numIntersection)||Qe.vertexAlphas!==We||Qe.vertexTangents!==$e||Qe.morphTargets!==qe||Qe.morphNormals!==et||Qe.morphColors!==Dt||Qe.toneMapping!==Kt||Qe.morphTargetsCount!==Ot)&&(at=!0):(at=!0,Qe.__version=$.version);let Sn=Qe.currentProgram;at===!0&&(Sn=Wr($,q,K));let Yi=!1,Mn=!1,si=!1;const Ft=Sn.getUniforms(),bn=Qe.uniforms;if(Ye.useProgram(Sn.program)&&(Yi=!0,Mn=!0,si=!0),$.id!==me&&(me=$.id,Mn=!0),Yi||de!==C){Ye.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ft.setValue(V,"projectionMatrix",C.projectionMatrix),Ft.setValue(V,"viewMatrix",C.matrixWorldInverse);const Tn=Ft.map.cameraPosition;Tn!==void 0&&Tn.setValue(V,_t.setFromMatrixPosition(C.matrixWorld)),Lt.logarithmicDepthBuffer&&Ft.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ft.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),de!==C&&(de=C,Mn=!0,si=!0)}if(Qe.needsLights&&(Nt.state.directionalShadowMap.length>0&&Ft.setValue(V,"directionalShadowMap",Nt.state.directionalShadowMap,W),Nt.state.spotShadowMap.length>0&&Ft.setValue(V,"spotShadowMap",Nt.state.spotShadowMap,W),Nt.state.pointShadowMap.length>0&&Ft.setValue(V,"pointShadowMap",Nt.state.pointShadowMap,W)),K.isSkinnedMesh){Ft.setOptional(V,K,"bindMatrix"),Ft.setOptional(V,K,"bindMatrixInverse");const En=K.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ft.setValue(V,"boneTexture",En.boneTexture,W))}K.isBatchedMesh&&(Ft.setOptional(V,K,"batchingTexture"),Ft.setValue(V,"batchingTexture",K._matricesTexture,W),Ft.setOptional(V,K,"batchingIdTexture"),Ft.setValue(V,"batchingIdTexture",K._indirectTexture,W),Ft.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Ft.setValue(V,"batchingColorTexture",K._colorsTexture,W));const pn=le.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ct.update(K,le,Sn),(Mn||Qe.receiveShadow!==K.receiveShadow)&&(Qe.receiveShadow=K.receiveShadow,Ft.setValue(V,"receiveShadow",K.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(bn.envMap.value=Ve,bn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&q.environment!==null&&(bn.envMapIntensity.value=q.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=u3()),Mn&&(Ft.setValue(V,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights&&to(bn,si),Ue&&$.fog===!0&&nt.refreshFogUniforms(bn,Ue),nt.refreshMaterialUniforms(bn,$,_e,ne,I.state.transmissionRenderTarget[C.id]),iu.upload(V,gl(Qe),bn,W)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(iu.upload(V,gl(Qe),bn,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ft.setValue(V,"center",K.center),Ft.setValue(V,"modelViewMatrix",K.modelViewMatrix),Ft.setValue(V,"normalMatrix",K.normalMatrix),Ft.setValue(V,"modelMatrix",K.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const En=$.uniformsGroups;for(let Tn=0,qr=En.length;Tn<qr;Tn++){const Si=En[Tn];Me.update(Si,Sn),Me.bind(Si,Sn)}}return Sn}function to(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function wa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(C,q,le){const $=b.get(C);$.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=q,b.get(C.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:le,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const le=b.get(C);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0};const Da=V.createFramebuffer();this.setRenderTarget=function(C,q=0,le=0){se=C,j=q,oe=le;let $=null,K=!1,Ue=!1;if(C){const Oe=b.get(C);if(Oe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(V.FRAMEBUFFER,Oe.__webglFramebuffer),F.copy(C.viewport),G.copy(C.scissor),ie=C.scissorTest,Ye.viewport(F),Ye.scissor(G),Ye.setScissorTest(ie),me=-1;return}else if(Oe.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(Oe.__hasExternalTextures)W.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $e=C.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&b.has($e)&&(C.width!==$e.image.width||C.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ue=!0);const We=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[q])?$=We[q][le]:$=We[q],K=!0):C.samples>0&&W.useMultisampledRTT(C)===!1?$=b.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?$=We[le]:$=We,F.copy(C.viewport),G.copy(C.scissor),ie=C.scissorTest}else F.copy(te).multiplyScalar(_e).floor(),G.copy(fe).multiplyScalar(_e).floor(),ie=Ne;if(le!==0&&($=Da),Ye.bindFramebuffer(V.FRAMEBUFFER,$)&&Ye.drawBuffers(C,$),Ye.viewport(F),Ye.scissor(G),Ye.setScissorTest(ie),K){const Oe=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,le)}else if(Ue){const Oe=q;for(let Ve=0;Ve<C.textures.length;Ve++){const We=b.get(C.textures[Ve]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ve,We.__webglTexture,le,Oe)}}else if(C!==null&&le!==0){const Oe=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Oe.__webglTexture,le)}me=-1},this.readRenderTargetPixels=function(C,q,le,$,K,Ue,Be,Oe=0){if(!(C&&C.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve){Ye.bindFramebuffer(V.FRAMEBUFFER,Ve);try{const We=C.textures[Oe],$e=We.format,qe=We.type;if(!Lt.textureFormatReadable($e)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(qe)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-$&&le>=0&&le<=C.height-K&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Oe),V.readPixels(q,le,$,K,Ae.convert($e),Ae.convert(qe),Ue))}finally{const We=se!==null?b.get(se).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(C,q,le,$,K,Ue,Be,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve)if(q>=0&&q<=C.width-$&&le>=0&&le<=C.height-K){Ye.bindFramebuffer(V.FRAMEBUFFER,Ve);const We=C.textures[Oe],$e=We.format,qe=We.type;if(!Lt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.bufferData(V.PIXEL_PACK_BUFFER,Ue.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Oe),V.readPixels(q,le,$,K,Ae.convert($e),Ae.convert(qe),0);const Dt=se!==null?b.get(se).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,Dt);const Kt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await D1(V,Kt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ue),V.deleteBuffer(et),V.deleteSync(Kt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,le=0){const $=Math.pow(2,-le),K=Math.floor(C.image.width*$),Ue=Math.floor(C.image.height*$),Be=q!==null?q.x:0,Oe=q!==null?q.y:0;W.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,Be,Oe,K,Ue),Ye.unbindTexture()};const fr=V.createFramebuffer(),Na=V.createFramebuffer();this.copyTextureToTexture=function(C,q,le=null,$=null,K=0,Ue=null){Ue===null&&(K!==0?(rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=K,K=0):Ue=0);let Be,Oe,Ve,We,$e,qe,et,Dt,Kt;const Wt=C.isCompressedTexture?C.mipmaps[Ue]:C.image;if(le!==null)Be=le.max.x-le.min.x,Oe=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,We=le.min.x,$e=le.min.y,qe=le.isBox3?le.min.z:0;else{const pn=Math.pow(2,-K);Be=Math.floor(Wt.width*pn),Oe=Math.floor(Wt.height*pn),C.isDataArrayTexture?Ve=Wt.depth:C.isData3DTexture?Ve=Math.floor(Wt.depth*pn):Ve=1,We=0,$e=0,qe=0}$!==null?(et=$.x,Dt=$.y,Kt=$.z):(et=0,Dt=0,Kt=0);const Ot=Ae.convert(q.format),Qe=Ae.convert(q.type);let Nt;q.isData3DTexture?(W.setTexture3D(q,0),Nt=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Nt=V.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Nt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const at=V.getParameter(V.UNPACK_ROW_LENGTH),Sn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Yi=V.getParameter(V.UNPACK_SKIP_PIXELS),Mn=V.getParameter(V.UNPACK_SKIP_ROWS),si=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Wt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Wt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,We),V.pixelStorei(V.UNPACK_SKIP_ROWS,$e),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qe);const Ft=C.isDataArrayTexture||C.isData3DTexture,bn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const pn=b.get(C),En=b.get(q),Tn=b.get(pn.__renderTarget),qr=b.get(En.__renderTarget);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let Si=0;Si<Ve;Si++)Ft&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(C).__webglTexture,K,qe+Si),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Ue,Kt+Si)),V.blitFramebuffer(We,$e,Be,Oe,et,Dt,Be,Oe,V.DEPTH_BUFFER_BIT,V.NEAREST);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||b.has(C)){const pn=b.get(C),En=b.get(q);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,fr),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,Na);for(let Tn=0;Tn<Ve;Tn++)Ft?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,K,qe+Tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,K),bn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,En.__webglTexture,Ue,Kt+Tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,En.__webglTexture,Ue),K!==0?V.blitFramebuffer(We,$e,Be,Oe,et,Dt,Be,Oe,V.COLOR_BUFFER_BIT,V.NEAREST):bn?V.copyTexSubImage3D(Nt,Ue,et,Dt,Kt+Tn,We,$e,Be,Oe):V.copyTexSubImage2D(Nt,Ue,et,Dt,We,$e,Be,Oe);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Nt,Ue,et,Dt,Kt,Be,Oe,Ve,Ot,Qe,Wt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Nt,Ue,et,Dt,Kt,Be,Oe,Ve,Ot,Wt.data):V.texSubImage3D(Nt,Ue,et,Dt,Kt,Be,Oe,Ve,Ot,Qe,Wt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ue,et,Dt,Be,Oe,Ot,Qe,Wt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ue,et,Dt,Wt.width,Wt.height,Ot,Wt.data):V.texSubImage2D(V.TEXTURE_2D,Ue,et,Dt,Be,Oe,Ot,Qe,Wt);V.pixelStorei(V.UNPACK_ROW_LENGTH,at),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Sn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Yi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Mn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,si),Ue===0&&q.generateMipmaps&&V.generateMipmap(Nt),Ye.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){j=0,oe=0,se=null,Ye.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}function d3(){const s=ae.useRef(null),e=ae.useRef(null);return ae.useEffect(()=>{if(!s.current)return;const i=window.innerWidth<768,r=Math.min(window.devicePixelRatio,2),l=new tT,c=new ii(75,window.innerWidth/window.innerHeight,.1,1e3),f=new f3({antialias:!i,alpha:!0,powerPreference:"high-performance"});f.setSize(window.innerWidth,window.innerHeight),f.setPixelRatio(r),s.current.appendChild(f.domElement),c.position.z=5;const h=new Ui,m=i?350:800,p=new Float32Array(m*3);for(let w=0;w<m*3;w++)p[w]=(Math.random()-.5)*20;h.setAttribute("position",new Ni(p,3));const v=new Fx({size:i?.05:.03,color:11502795,transparent:!0,opacity:.8,blending:uh}),g=new sT(h,v);l.add(g);const y=new hT(16777215,.5);l.add(y);const M=new t_(11502795,2);M.position.set(5,5,5),l.add(M);const E=new t_(8936868,1.5);E.position.set(-5,-5,5),l.add(E);let A=0,S=0,_=0,D=0;const U=w=>{i||(A=w.clientX/window.innerWidth*2-1,S=-(w.clientY/window.innerHeight)*2+1)};document.addEventListener("mousemove",U);let P=0;const I=()=>{P=window.scrollY};window.addEventListener("scroll",I,{passive:!0});const B=new mT;function z(){e.current=requestAnimationFrame(z);const w=B.getElapsedTime();g.rotation.y=w*.05,g.rotation.x=w*.02,g.position.y=Math.sin(w*.3)*.2;const N=A*.5,j=S*.5;_+=(N-_)*.05,D+=(j-D)*.05,c.position.x=_,c.position.y=D+P*.001,f.render(l,c)}z();const Z=()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix();const w=Math.min(window.devicePixelRatio,2);f.setPixelRatio(w),f.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Z),()=>{e.current&&cancelAnimationFrame(e.current),document.removeEventListener("mousemove",U),window.removeEventListener("scroll",I),window.removeEventListener("resize",Z),h.dispose(),v.dispose(),f.dispose(),s.current&&f.domElement&&s.current.removeChild(f.domElement)}},[]),T.jsx("div",{ref:s,id:"canvas-container",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,pointerEvents:"none",background:"linear-gradient(135deg, #0a0514 0%, #140A1B 50%, #1a0f24 100%)"}})}function h3(){const[s,e]=ae.useState({days:0,hours:0,minutes:0,seconds:0});ae.useEffect(()=>{const r=new Date("2026-01-29T00:00:00").getTime(),l=()=>{const f=new Date().getTime(),h=r-f;h>0&&e({days:Math.floor(h/(1e3*60*60*24)),hours:Math.floor(h%(1e3*60*60*24)/(1e3*60*60)),minutes:Math.floor(h%(1e3*60*60)/(1e3*60)),seconds:Math.floor(h%(1e3*60)/1e3)})};l();const c=setInterval(l,1e3);return()=>clearInterval(c)},[]);const i=()=>{const r=document.getElementById("events");r&&r.scrollIntoView({behavior:"smooth"})};return T.jsxs("section",{id:"hero",className:"hero",children:[T.jsxs("div",{className:"hero-badge",children:[T.jsx(zE,{size:18}),"January 29-30, 2026"]}),T.jsx("h1",{className:"hero-title",children:"INCEPTA 2026"}),T.jsx("p",{className:"hero-subtitle",children:"A premier technical festival focused on AI Agents & Generative AI at the College of Engineering, Trivandrum."}),T.jsxs("div",{className:"countdown",id:"countdown",children:[T.jsxs("div",{className:"countdown-item",children:[T.jsx("span",{className:"countdown-number",children:s.days.toString().padStart(2,"0")}),T.jsx("span",{className:"countdown-label",children:"Days"})]}),T.jsxs("div",{className:"countdown-item",children:[T.jsx("span",{className:"countdown-number",children:s.hours.toString().padStart(2,"0")}),T.jsx("span",{className:"countdown-label",children:"Hours"})]}),T.jsxs("div",{className:"countdown-item",children:[T.jsx("span",{className:"countdown-number",children:s.minutes.toString().padStart(2,"0")}),T.jsx("span",{className:"countdown-label",children:"Minutes"})]}),T.jsxs("div",{className:"countdown-item",children:[T.jsx("span",{className:"countdown-number",children:s.seconds.toString().padStart(2,"0")}),T.jsx("span",{className:"countdown-label",children:"Seconds"})]})]}),T.jsx("button",{className:"cta-button",onClick:i,children:"Register Now"})]})}const p3=[{id:"cet",title:"About CET",description:"For 85 illustrious years since its foundation in 1939, College of Engineering Trivandrum (CET) has remained a beacon of technical excellence in Kerala. We consistently rank among the foremost institutions in India, fostering innovation and technical brilliance.",icon:"graduationCap"},{id:"asca",title:"About ASCA",description:"The Association of Students of Computer Applications (ASCA) is the official student body of the MCA Department. We foster innovation through technical workshops, hackathons, and cultural initiatives, building a vibrant community of future tech leaders.",icon:"users"},{id:"incepta",title:"About INCEPTA",description:"INCEPTA is our flagship tech fest. The 2026 edition is purely focused on the disruptive fields of AI Agents and Generative AI, bridging the gap between academic theory and industry reality. Join us for two days of innovation, learning, and competition.",icon:"star"}],m3={graduationCap:$_,users:vp,star:PE};function g3(){return T.jsxs("section",{id:"about",className:"section",children:[T.jsx("h2",{className:"section-title",children:"About The Fest"}),T.jsx("p",{className:"section-subtitle",children:"Discover the legacy, community, and vision behind INCEPTA 2026"}),T.jsx("div",{className:"about-grid",children:p3.map(s=>{const e=m3[s.icon];return T.jsxs("div",{className:"about-card",children:[T.jsx("div",{className:"about-card-icon",children:T.jsx(e,{size:24})}),T.jsx("h3",{children:s.title}),T.jsx("p",{children:s.description})]},s.id)})})]})}const Bs=["/gallery/1.png","/gallery/2.png","/gallery/3.png","/gallery/4.png","/gallery/5.png","/gallery/6.png","/gallery/7.png","/gallery/8.png","/gallery/9.png","/gallery/10.png","/gallery/11.png","/gallery/12.png","/gallery/13.png","/gallery/14.png","/gallery/15.png","/gallery/16.png","/gallery/17.png","/gallery/18.png","/gallery/19.png","/gallery/20.png","/gallery/21.png","/gallery/22.png","/gallery/23.png","/gallery/24.png","/gallery/1.png","/gallery/2.png","/gallery/3.png","/gallery/4.png","/gallery/5.png","/gallery/6.png","/gallery/7.png","/gallery/8.png","/gallery/9.png","/gallery/10.png","/gallery/11.png","/gallery/12.png","/gallery/13.png","/gallery/14.png","/gallery/15.png","/gallery/16.png","/gallery/17.png","/gallery/18.png","/gallery/19.png","/gallery/20.png","/gallery/21.png","/gallery/22.png","/gallery/23.png","/gallery/24.png"],Hs=s=>{const e=[...s];for(let i=e.length-1;i>0;i--){const r=Math.floor(Math.random()*(i+1));[e[i],e[r]]=[e[r],e[i]]}return e};function v3(){const[s,e]=ae.useState(null),i=ae.useMemo(()=>[[...Hs(Bs),...Hs(Bs)],[...Hs(Bs),...Hs(Bs)],[...Hs(Bs),...Hs(Bs)]],[]),r=c=>{e(c),document.body.style.overflow="hidden"},l=()=>{e(null),document.body.style.overflow="auto"};return T.jsxs("section",{id:"gallery",className:"gallery-section","aria-labelledby":"gallery-title",children:[T.jsx("h2",{className:"section-title",id:"gallery-title",children:"Gallery"}),T.jsx("p",{className:"section-subtitle",children:"Glimpses from previous editions of INCEPTA"}),T.jsx("div",{className:`gallery-wrapper ${s?"paused":""}`,children:T.jsx("div",{className:"gallery-container",children:i.map((c,f)=>T.jsx("div",{className:`gallery-row row-${f+1}`,"aria-label":`Gallery row ${f+1}`,children:T.jsx("div",{className:"gallery-track",children:c.map((h,m)=>T.jsx("img",{src:h,className:"gallery-img",loading:"lazy",alt:`INCEPTA Gallery ${f+1}-${m+1}`,onClick:()=>r(h)},`${f}-${m}`))})},f))})}),s&&T.jsxs("div",{className:"gallery-modal",onClick:l,children:[T.jsx("button",{className:"gallery-modal-close",onClick:l,children:T.jsx(lx,{size:32})}),T.jsx("div",{className:"gallery-modal-content",onClick:c=>c.stopPropagation(),children:T.jsx("img",{src:s,alt:"Gallery Fullscreen"})})]})]})}const _3=[{number:"3K+",label:"MCA Students",icon:"users"},{number:"5K+",label:"Campus Footfall",icon:"home"},{number:"32",label:"Colleges",icon:"graduationCap"},{number:"500+",label:"School Outreach",icon:"bookOpen"}],x3={users:vp,home:ex,graduationCap:$_,bookOpen:Kb};function y3(){return T.jsxs("section",{id:"stats",className:"section",children:[T.jsx("h2",{className:"section-title",children:"Our Reach"}),T.jsx("p",{className:"section-subtitle",children:"Connecting thousands of students, colleges, and technology enthusiasts"}),T.jsx("div",{className:"stats-grid",children:_3.map((s,e)=>{const i=x3[s.icon];return T.jsxs("div",{className:"stat-card",children:[T.jsx("div",{className:"stat-icon",children:T.jsx(i,{size:28})}),T.jsx("span",{className:"stat-number",children:s.number}),T.jsx("span",{className:"stat-label",children:s.label})]},e)})})]})}const S3=[{id:"location",title:"College of Engineering, Trivandrum",subtitle:"Kerala, India - 695016",icon:"mapPin",href:"#"},{id:"email",title:"Email",subtitle:"ascacet@gmail.com",icon:"mail",href:"mailto:ascacet@gmail.com"},{id:"phone",title:"Event Coordinators",subtitle:"Aiswarya: +91 73561 60270",icon:"phone",href:"tel:+917356160270"}],M3={mapPin:fu,mail:mp,phone:DE};function b3(){const[s,e]=ae.useState({name:"",email:"",subject:"",message:""}),i=l=>{l.preventDefault(),alert("Thank you for your message! We will get back to you soon."),e({name:"",email:"",subject:"",message:""})},r=l=>{e(c=>({...c,[l.target.name]:l.target.value}))};return T.jsxs("section",{id:"contact",className:"section",children:[T.jsx("h2",{className:"section-title",children:"Get in Touch"}),T.jsx("p",{className:"section-subtitle",children:"Have questions? We'd love to hear from you"}),T.jsxs("div",{className:"contact-grid",children:[T.jsx("div",{className:"contact-info",children:S3.map(l=>{const c=M3[l.icon];return T.jsxs("a",{href:l.href,className:"contact-item",children:[T.jsx("div",{className:"contact-icon",children:T.jsx(c,{size:24})}),T.jsxs("div",{className:"contact-text",children:[T.jsx("strong",{children:l.title}),T.jsx("span",{children:l.subtitle})]})]},l.id)})}),T.jsx("div",{className:"contact-form",children:T.jsxs("form",{onSubmit:i,children:[T.jsx("div",{className:"form-group",children:T.jsx("input",{type:"text",className:"form-control",placeholder:"Your Name",name:"name",value:s.name,onChange:r,required:!0})}),T.jsx("div",{className:"form-group",children:T.jsx("input",{type:"email",className:"form-control",placeholder:"Your Email",name:"email",value:s.email,onChange:r,required:!0})}),T.jsx("div",{className:"form-group",children:T.jsx("input",{type:"text",className:"form-control",placeholder:"Subject",name:"subject",value:s.subject,onChange:r,required:!0})}),T.jsx("div",{className:"form-group",children:T.jsx("textarea",{className:"form-control",placeholder:"Your Message",name:"message",value:s.message,onChange:r,required:!0})}),T.jsx("button",{type:"submit",className:"cta-button",style:{width:"100%"},children:"Send Message"})]})})]})]})}const E3=[{id:"competitions",title:"Competitions",description:"Test your skills in hackathons, CTF, coding challenges, and more. Compete for glory and prizes!",icon:BE,color:"#c678ff",link:"/competitions"},{id:"events",title:"Workshops & Events",description:"Learn from industry experts with hands-on workshops and fun activities like treasure hunts.",icon:hp,color:"#61dafb",link:"/events"},{id:"gala",title:"INCEPTA Gala",description:"Two nights of music, dance, and unforgettable performances. The cultural highlight of the fest!",icon:gp,color:"#ff6ac1",link:"/gala"}];function T3({category:s}){const e=s.icon;return T.jsxs(ji,{to:s.link,className:"category-card",style:{"--accent-color":s.color},children:[T.jsx("div",{className:"category-icon",style:{background:`linear-gradient(135deg, ${s.color}33 0%, ${s.color}15 100%)`,borderColor:`${s.color}40`},children:T.jsx(e,{size:36,style:{color:s.color}})}),T.jsx("h3",{className:"category-title",children:s.title}),T.jsx("p",{className:"category-description",children:s.description}),T.jsxs("div",{className:"category-cta",style:{color:s.color},children:["Explore ",T.jsx(dp,{size:18})]})]})}function A3(){return T.jsxs(T.Fragment,{children:[T.jsx(h3,{}),T.jsx(g3,{}),T.jsxs("section",{id:"events",className:"section",children:[T.jsx("h2",{className:"section-title",children:"Explore INCEPTA"}),T.jsx("p",{className:"section-subtitle",children:"Choose your adventure - competitions, workshops, or cultural celebrations"}),T.jsx("div",{className:"categories-grid",children:E3.map(s=>T.jsx(T3,{category:s},s.id))})]}),T.jsx(v3,{}),T.jsx(y3,{}),T.jsx(b3,{})]})}const wp={competitions:{title:"Competitions",description:"Test your skills and compete for glory",color:"#c678ff",events:["hackathon","ctf","coderush","vibecoding","promptcraft","treasurehunt"]},workshops:{title:"Workshops & Events",description:"Learn from industry experts",color:"#61dafb",events:["workshops","workshop1","workshop2"]},gala:{color:"#ff6ac1"}},Di={hackathon:{title:"GNOSIS",badge:"Hackathon",category:"competitions",tagline:"Insight into Innovation",details:[{label:"Date",value:"January 30, 2026"},{label:"Duration",value:"12 Hours"},{label:"Venue",value:"MCA Department"},{label:"Focus",value:"Agentic AI"}],description:"GNOSIS is a 12-hour intensive hackathon focused on analytical thinking and innovative problem-solving, with a strong emphasis on agentic AI. Participants will work in teams to build intelligent, autonomous solutions addressing a real-world problem statement.",highlights:["Build intelligent, autonomous AI solutions","Strong focus on agentic AI concepts","Real-world problem statements","Industry-relevant judging","Certificates and prizes for top teams"],rulesAndGuidelines:{generalGuidelines:["Teams can consist of 1–4 members. Inter-college teams are allowed unless stated otherwise.","Problem statement will be provided on the spot. Solutions must strictly align with the given topic and requirements.","The hackathon will run continuously for 12 hours. All submissions must be completed within the allotted time."],technicalAndSubmission:["Any programming language or framework may be used.","Use of agentic AI concepts is strongly encouraged.","External APIs or libraries are allowed if properly cited.","Each team must submit a working prototype.","A presentation explaining the solution is mandatory.","Supporting documents, diagrams, or demos may be included."],policiesAndEthics:["Evaluation will be based on innovation, feasibility, impact, and presentation.","Judges’ decisions are final and binding.","Participants must maintain professional and respectful conduct.","Sharing solutions with other teams or external parties is prohibited.","Plagiarism, unethical behavior, or violation of rules will lead to disqualification."]},judgingCriteria:["Alignment with Problem Statement","Innovation & Creativity","Application of Agentic AI","Technical Feasibility & Implementation","Impact & Applicability","Presentation & Communication"],judges:["Industry experts from ABC Company"],volunteers:["Jerardh Tom Jasper","Muhammed K B"],contact:{coordinators:[{name:"Jerardh Tom Jasper",phone:"+91 75589 77917"},{name:"Muhammed K B",phone:"+91 96454 97235"}]},buttonText:"Register Your Team",icon:"brainCircuit"},ctf:{title:"INCEPTA Cyber Siege",badge:"CTF Competition",category:"competitions",tagline:"Dive into the digital abyss, crack the codes, and infiltrate the task force.",details:[{label:"Date",value:"January 29, 2026"},{label:"Duration",value:"10:00 AM – 5:00 PM"},{label:"Venue",value:"Software Lab"},{label:"Registration Fee",value:"₹100 / Participant"}],description:"INCEPTA Cyber Siege is a Jeopardy-style Capture The Flag competition featuring challenges across Web Security, Forensics, Cryptography, Binary Exploitation, and more. Teams earn points by solving tasks, with harder challenges awarding higher scores. Winners are determined by total points, with submission time used as a tie-breaker.",highlights:["Jeopardy-style CTF format","Categories include Web, Forensics, Crypto, Binary, and OSINT","Harder challenges yield higher points","Real-time leaderboard","PentesterLab vouchers for top teams"],rulesAndGuidelines:{gameplayRules:["No brute forcing on remote infrastructure.","No flag sharing with other teams or participants.","No flag hoarding; flags must be submitted promptly.","Only one account per participant is allowed. Each participant can play for only one team.","No spamming challenge authors, players, or platform channels.","Use of any LLM or AI tool for solving challenges will lead to disqualification.","Any attempt to attack, disrupt, or tamper with competition infrastructure will result in immediate disqualification."],submissionAndConsequences:["Winning teams must submit a short write-up of solved challenges.","Failure to submit the write-up within the given time frame will result in disqualification.","Teams violating any rules will be disqualified from the competition."]},judgingCriteria:["Top 3 teams on the leaderboard will be declared winners","Winners must submit challenge write-ups to be eligible for prizes","In case of a tie, submission time will be used as the tie-breaker"],judges:["Internal and External Judges (Details to be announced)"],volunteers:["3 volunteers for ticket confirmation and on-spot registration","3 volunteers for monitoring the event"],prizes:["Prize pool worth $400+ USD","PentesterLab vouchers for top 3 teams"],contact:{coordinators:[{name:"Hari Sankar R S",phone:"9946908599",email:"To be announced"}]},buttonText:"Join the Hunt",icon:"shieldCheck"},coderush:{title:"Code Rush",badge:"Coding Competition",category:"competitions",tagline:"Code Rush: Run the code before the clock runs you.",details:[{label:"Date",value:"January 30, 2026"},{label:"Duration",value:"90 Minutes"},{label:"Venue",value:"Software Lab"},{label:"Platform",value:"HackerRank"}],description:"Code Rush is a high-speed competitive programming event designed to test your accuracy under pressure. Participants face a rapid-fire set of 25 easy-level problems where the real challenge is translating logic into fast, bug-free code within a strict time limit.",highlights:["Rapid-fire competitive programming format","Focus on speed and accuracy","25 easy-level problems released at once","Real-time HackerRank leaderboard","Prizes and certificates for top performers"],rulesAndGuidelines:{competitionFormat:["This is an individual (solo) competition. Participants must bring their own laptop.","Open to all skill levels. A registered HackerRank account is mandatory.","25 easy-level coding problems will be released simultaneously.","Total contest duration is exactly 90 minutes.","Most major programming languages are allowed (Python, Java, C++, JavaScript).","Compiler versions will be as per HackerRank platform settings.","Primary scoring metric is the number of test cases passed across all problems."],codeOfConduct:["All code must be written from scratch during the contest window.","Use of AI assistants (ChatGPT, Copilot, etc.) is strictly prohibited.","Use of pre-written personal libraries or external code snippets is not allowed.","Any form of communication between participants is forbidden.","Sharing solutions, using multiple accounts, or attempting bot-based submissions will lead to disqualification."]},judgingCriteria:["Total number of points earned on the HackerRank leaderboard","Number of test cases passed across all 25 problems"],judges:["Internal and External Judges (Details to be announced)"],volunteers:["Subi Suresh – Assistance","Additional volunteers to be announced"],contact:{coordinators:[{name:"Subi Suresh",phone:"8593978871",email:"subisuresh69@gmail.com"}]},buttonText:"Start Coding",icon:"zap"},vibecoding:{title:"CodeLess",badge:"Vibe Coding",category:"competitions",tagline:"Don't write the code, manage the code",details:[{label:"Date",value:"January 29, 2026"},{label:"Duration",value:"3 Hours + Demo"},{label:"Venue",value:"MCA Department"},{label:"Format",value:"AI-assisted Full Stack"}],description:"CodeLess is a high-intensity AI-assisted coding competition where participants demonstrate their full-stack development skills. Teams have 3 hours to build a functional web application from scratch using AI tools, followed by a live demonstration.",highlights:["AI-assisted full-stack development challenge","Build frontend and backend within 3 hours","Live project demonstration","Focus on prompt engineering and system design","Innovation over manual coding"],rulesAndGuidelines:{participationAndFormat:["Teams must consist of 1–2 members. Only one laptop is allowed per team.","Problem statement and minimum functionalities will be provided on the spot.","Round 1: Code Build (3 Hours). Teams must build a full-stack web application (Frontend + Backend).","Round 2: Live Demo (5 mins/team). Explain application features and backend integration."],technicalGuidelines:["Frontend and Backend must be integrated with working UI and functional logic.","AI tools such as ChatGPT, Gemini, Copilot, Claude are allowed.","Use of tools like Cursor and Lovable is strictly prohibited.","Project must run locally at the end of the build phase."],ethicsAndDisqualification:["Using pre-built GitHub projects, code written before the event, or copying full tutorials is prohibited.","Sharing code between teams or receiving external help represents a violation.","Misbehavior or submitting a non-functional project with no attempt to fix it will lead to disqualification."]},judgingCriteria:["Functionality – 30 Marks","Frontend UI/UX – 20 Marks","Backend Logic – 20 Marks","Prompt Engineering – 15 Marks","Innovation – 10 Marks","Presentation – 5 Marks","Total: 100 Marks"],judges:["Internal and External Judges (Total: 3)"],volunteers:["To be announced"],contact:{coordinators:[{name:"Muhammed K B",phone:"+91 96454 97235"},{name:"John William Santhosh",phone:"+91 94962 09122"}]},buttonText:"Build with AI",icon:"sparkles"},promptcraft:{title:"PromptVision",badge:"Prompt Crafting",category:"competitions",tagline:"See the image. Shape the prompt. Recreate the vision.",details:[{label:"Date",value:"January 29, 2026"},{label:"Time",value:"3:00 PM – 5:00 PM"},{label:"Venue",value:"Seminar Hall"},{label:"Prize Pool",value:"₹2000 – ₹3000"}],description:"PromptVision is an AI-powered prompt crafting competition where participants observe a given image and write a precise text prompt to recreate it using an AI image generator. The event tests observation skills, creativity, clarity, and prompt engineering ability.",highlights:["Image-to-prompt recreation challenge","Focus on observation and prompt clarity","Single precise prompt submission","Creativity combined with technical prompt structure","Certificates for all participants"],rulesAndGuidelines:{competitionRules:["Individual participation only. Open to all students. Registration fee of ₹50 is mandatory.","A single reference image will be displayed. Participants must write one detailed prompt in English to recreate it.","Participants may use mobile phones or laptops only for prompt submission via the official Google Form.","Only one submission per participant is allowed."],codeOfConduct:["Prompts must be original and written during the event.","Browsing, AI tools, or external assistance (other than the official generation tool) are strictly prohibited.","Plagiarism, using devices for other purposes, or misbehavior will lead to disqualification."]},judgingCriteria:["Accuracy","Detail & Completeness","Clarity & Structure","Creativity","Tie-breaker: Number of meaningful descriptive lines"],judges:["Internal and External Judges (Details to be announced)"],volunteers:["To be announced"],contact:{coordinators:[{name:"Safa Abdul Hameed",phone:"9061445705",email:"safaabdulhameed2002@gmail.com"},{name:"Aafthab KI",phone:"8129232709"}]},buttonText:"Craft Your Prompt",icon:"image"},workshops:{title:"GenAI Workshops",badge:"Workshop",category:"workshops",tagline:"Hands-on learning sessions with industry experts on cutting-edge AI technologies.",details:[{label:"Dates",value:"Jan 29-30, 2026"},{label:"Time",value:"Various Slots"},{label:"Venue",value:"Seminar Hall"},{label:"Format",value:"Hands-on"},{label:"Certificate",value:"Provided"},{label:"Laptop",value:"Required"}],description:"Deep dive into the world of Generative AI with practical, hands-on workshops conducted by industry professionals.",highlights:["Build RAG pipelines from scratch","Create AI agents with no-code tools","Fine-tune open-source LLMs","Industry guest speakers and mentors","Take-home resources and code samples"],buttonText:"Book Your Seat",icon:"presentation"},workshop1:{title:"AI Agents 101",badge:"Workshop",category:"workshops",tagline:"Build you first AI Agent using LangChain",details:[{label:"Date",value:"Feb 15, 2026"},{label:"Time",value:"10:00 AM - 1:00 PM"},{label:"Venue",value:"Lab 2"},{label:"Instructor",value:"Dr. Alan Grant"}],description:"A comprehensive introduction to building autonomous AI agents. Learn the fundamentals of LangChain and how to create agents that can reason and act.",highlights:["Introduction to Agentic workflows","Hands-on with LangChain","Building a research assistant","Connecting to external tools"],buttonText:"Register Now",icon:"bot"},workshop2:{title:"Generative Art",badge:"Workshop",category:"workshops",tagline:"Mastering Stable Diffusion and Midjourney",details:[{label:"Date",value:"Feb 16, 2026"},{label:"Time",value:"2:00 PM - 5:00 PM"},{label:"Venue",value:"Design Studio"},{label:"Instructor",value:"Sarah Connor"}],description:"Unlock your creativity with Generative Art. This workshop covers the latest tools and techniques for creating stunning visuals using AI.",highlights:["Prompt engineering techniques","Style transfer and control","Ethics of AI art","Showcase of student work"],buttonText:"Register Now",icon:"palette"},projectpres:{title:"Project Presentation",badge:"Competition",category:"competitions",tagline:"Showcase your AI innovations to industry experts and peers.",details:[{label:"Date",value:"January 30, 2026"},{label:"Time",value:"10:00 AM - 1:00 PM"},{label:"Venue",value:"Conference Room"},{label:"Team Size",value:"1-4 Members"},{label:"Duration",value:"10 min + Q&A"},{label:"Focus",value:"AI/ML Projects"}],description:"Present your AI projects to a panel of industry experts. Get valuable feedback and recognition for your innovative work.",highlights:["Projects must involve AI/ML technologies","Live demo encouraged","Expert panel with Q&A session","Best projects receive awards","Networking opportunity with professionals"],buttonText:"Submit Project",icon:"monitorPlay"},treasurehunt:{title:"Treasure Hunt",badge:"Fun Event",category:"competitions",tagline:"Embark on a One Piece themed adventure across the campus!",details:[{label:"Date",value:"January 29, 2026"},{label:"Time",value:"10:00 AM - 1:00 PM"},{label:"Venue",value:"CET Campus"},{label:"Team Size",value:"5 Members"},{label:"Format",value:"Location-based"},{label:"Theme",value:"One Piece"}],description:"Form your pirate crew and race across campus solving riddles to find The One Piece treasure chest! A fun-filled adventure for all.",highlights:['Each team gets a volunteer "Marine" guide',"Solve One Piece themed riddles at each checkpoint","Slowest teams eliminated each round","Final treasure chest contains prizes","Dress up as pirates for bonus points!"],buttonText:"Assemble Your Crew",icon:"compass"},gala:{title:"INCEPTA GALA",badge:"Cultural Night",category:"gala",tagline:"Two nights of music, dance, and unforgettable performances.",details:[{label:"Day 1",value:"January 29, 2026"},{label:"Day 2",value:"January 30, 2026"},{label:"Time",value:"5:00 PM - 10:00 PM"},{label:"Venue",value:"Gazebo/DJ Hall"},{label:"Entry",value:"With Pass"},{label:"Audience",value:"500+ Expected"}],description:"The grand cultural celebration of INCEPTA'26! Two nights of entertainment, performances, and memories.",highlights:["Day 1: Student performances from all departments","Day 2: Pro Show with professional bands","Food stalls and informal art corners","Interactive crowd games and prizes","Entry via wristbands or QR passes"],buttonText:"Get Your Pass",icon:"music"}},qx={hackathon:"#register-hackathon",ctf:"#register-ctf",coderush:"#register-coderush",vibecoding:"#register-vibecoding",promptcraft:"#register-promptcraft",workshops:"#register-workshops",workshop1:"#register-workshop1",workshop2:"#register-workshop2",projectpres:"#register-projectpres",treasurehunt:"#register-treasurehunt",gala:"#register-gala"};function Yx({eventId:s,event:e,onClose:i}){const[r,l]=ae.useState({});ae.useEffect(()=>{document.body.classList.add("overlay-open");const h=m=>{m.key==="Escape"&&i()};return document.addEventListener("keydown",h),()=>{document.body.classList.remove("overlay-open"),document.removeEventListener("keydown",h)}},[i]);const c=h=>{h.target.classList.contains("event-overlay")&&i()},f=h=>{l(m=>({...m,[h]:!m[h]}))};return T.jsxs("div",{className:"event-overlay active",onClick:c,children:[T.jsx("button",{className:"overlay-close-btn",onClick:i,children:"×"}),T.jsx("div",{className:"overlay-scroll-container",children:T.jsxs("div",{className:"event-overlay-content",children:[T.jsxs("button",{className:"overlay-back-btn",onClick:i,children:[T.jsx(Hr,{size:20}),"Back to Events"]}),T.jsxs("div",{className:"overlay-header",children:[T.jsx("div",{className:"overlay-event-badge",children:e.badge}),T.jsx("h1",{className:"overlay-event-title",children:e.title}),T.jsx("p",{className:"overlay-event-tagline",children:e.tagline})]}),T.jsx("div",{className:"overlay-details-grid",children:e.details.map((h,m)=>T.jsxs("div",{className:"overlay-detail-card",children:[T.jsx("h4",{children:h.label}),T.jsx("p",{children:h.value})]},m))}),T.jsxs("div",{className:"overlay-description",children:[T.jsx("h3",{children:"About This Event"}),T.jsx("p",{children:e.description}),T.jsx("ul",{children:e.highlights.map((h,m)=>T.jsx("li",{children:h},m))})]}),e.rulesAndGuidelines&&typeof e.rulesAndGuidelines=="object"&&T.jsxs("div",{className:"overlay-description",children:[T.jsx("h3",{children:"Rules & Guidelines"}),T.jsx("div",{className:"accordion-container",children:Object.entries(e.rulesAndGuidelines).map(([h,m],p)=>T.jsxs("div",{className:`accordion-item ${r[p]?"open":""}`,children:[T.jsxs("button",{className:"accordion-header",onClick:()=>f(p),children:[T.jsx("h4",{children:h.replace(/([A-Z])/g," $1").replace(/^./,v=>v.toUpperCase())}),r[p]?T.jsx(rE,{size:20}):T.jsx(iE,{size:20})]}),T.jsx("div",{className:"accordion-content",children:T.jsx("div",{className:"accordion-inner",children:T.jsx("ul",{children:Array.isArray(m)&&m.map((v,g)=>T.jsx("li",{children:v},g))})})})]},p))})]}),e.contact&&e.contact.coordinators&&T.jsxs("div",{className:"overlay-description",children:[T.jsx("h3",{children:"Contact"}),T.jsx("div",{className:"overlay-details-grid contact-grid",children:e.contact.coordinators.map((h,m)=>T.jsxs("div",{className:"overlay-detail-card",children:[T.jsx("h4",{children:h.name}),T.jsxs("p",{children:["📞 ",h.phone]})]},m))})]})]})}),T.jsx("div",{className:"overlay-actions",children:T.jsxs("a",{href:qx[s],className:"overlay-register-btn",children:[e.buttonText,T.jsx(dp,{size:20})]})})]})}const R3={layoutDashboard:uu,mapPin:fu,brainCircuit:Q_,shieldCheck:sx,zap:cx,sparkles:ox,image:pp,presentation:rx,bot:K_,palette:ax,monitorPlay:ix,compass:J_,music:gp};function C3(){const[s,e]=ae.useState(null),i=wp.competitions;console.log(i,"Comp");const r=i.events.map(l=>({id:l,...Di[l]}));return T.jsxs("div",{className:"page-container",children:[T.jsxs("section",{className:"page-hero",style:{"--accent-color":i.color},children:[T.jsxs(ji,{to:"/",className:"back-link",children:[T.jsx(Hr,{size:20})," Back to Home"]}),T.jsx("h1",{className:"page-title",children:i.title}),T.jsx("p",{className:"page-subtitle",children:i.description})]}),T.jsx("section",{className:"section",children:T.jsx("div",{className:"events-grid",children:r.map(l=>{const c=R3[l.icon]||uu;return T.jsxs("div",{className:"event-card",onClick:()=>e(l.id),children:[T.jsx("div",{className:"event-icon",children:T.jsx(c,{size:32})}),T.jsx("h3",{className:"event-title",children:l.title}),T.jsx("p",{className:"event-description",children:l.tagline}),T.jsx("div",{className:"event-badge-small",children:l.badge})]},l.id)})})}),s&&T.jsx(Yx,{eventId:s,event:Di[s],onClose:()=>e(null)})]})}const w3={layoutDashboard:uu,mapPin:fu,brainCircuit:Q_,shieldCheck:sx,zap:cx,sparkles:ox,image:pp,presentation:rx,bot:K_,palette:ax,monitorPlay:ix,compass:J_,music:gp};function D3(){const[s,e]=ae.useState(null),i=wp.workshops,r=i.events.map(l=>({id:l,...Di[l]}));return T.jsxs("div",{className:"page-container",children:[T.jsxs("section",{className:"page-hero",style:{"--accent-color":i.color},children:[T.jsxs(ji,{to:"/",className:"back-link",children:[T.jsx(Hr,{size:20})," Back to Home"]}),T.jsx("h1",{className:"page-title",children:i.title}),T.jsx("p",{className:"page-subtitle",children:i.description})]}),T.jsx("section",{className:"section",children:T.jsx("div",{className:"events-grid",children:r.map(l=>{const c=w3[l.icon]||uu;return T.jsxs("div",{className:"event-card",onClick:()=>e(l.id),children:[T.jsx("div",{className:"event-icon",children:T.jsx(c,{size:32})}),T.jsx("h3",{className:"event-title",children:l.title}),T.jsx("p",{className:"event-description",children:l.tagline}),T.jsx("div",{className:"event-badge-small",children:l.badge})]},l.id)})})}),s&&T.jsx(Yx,{eventId:s,event:Di[s],onClose:()=>e(null)})]})}function N3(){const s=wp.gala,e=Di.gala;return T.jsxs("div",{className:"page-container gala-page",children:[T.jsxs("section",{className:"page-hero gala-hero",style:{"--accent-color":s.color},children:[T.jsxs(ji,{to:"/",className:"back-link",children:[T.jsx(Hr,{size:20})," Back to Home"]}),T.jsxs("div",{className:"gala-badge",children:[T.jsx(Yb,{size:20}),"Cultural Celebration"]}),T.jsx("h1",{className:"gala-title",children:e.title}),T.jsx("p",{className:"gala-tagline",children:e.tagline})]}),T.jsxs("section",{className:"section gala-content",children:[T.jsxs("div",{className:"gala-info-grid",children:[T.jsxs("div",{className:"gala-info-card",children:[T.jsx(hp,{size:28}),T.jsxs("div",{children:[T.jsx("h4",{children:"Date"}),T.jsx("p",{children:"Jan 29-30, 2026"})]})]}),T.jsxs("div",{className:"gala-info-card",children:[T.jsx(cE,{size:28}),T.jsxs("div",{children:[T.jsx("h4",{children:"Time"}),T.jsx("p",{children:"5:00 PM - 10:00 PM"})]})]}),T.jsxs("div",{className:"gala-info-card",children:[T.jsx(fu,{size:28}),T.jsxs("div",{children:[T.jsx("h4",{children:"Venue"}),T.jsx("p",{children:"Gazebo/DJ Hall"})]})]}),T.jsxs("div",{className:"gala-info-card",children:[T.jsx(vp,{size:28}),T.jsxs("div",{children:[T.jsx("h4",{children:"Audience"}),T.jsx("p",{children:"500+ Expected"})]})]})]}),T.jsxs("div",{className:"gala-description",children:[T.jsx("h2",{children:"About The Gala"}),T.jsx("p",{children:e.description})]}),T.jsxs("div",{className:"gala-highlights",children:[T.jsx("h3",{children:"Highlights"}),T.jsx("div",{className:"highlights-grid",children:e.highlights.map((i,r)=>T.jsxs("div",{className:"highlight-card",children:[T.jsx("span",{className:"highlight-number",children:r+1}),T.jsx("p",{children:i})]},r))})]}),T.jsx("div",{className:"gala-cta",children:T.jsxs("a",{href:qx.gala,className:"cta-button gala-button",children:[e.buttonText,T.jsx(dp,{size:20})]})})]})]})}function U3(){const{pathname:s}=Ca();return ae.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[s]),null}const A_="http://localhost:3000/api";function L3(){const{eventId:s}=G_(),e=H_(),[i,r]=ae.useState(null),[l,c]=ae.useState(!1),[f,h]=ae.useState({name:"",email:"",phone:"",teamMembers:"",additionalInfo:""}),[m,p]=ae.useState({});ae.useEffect(()=>{s&&Di[s]?r(Di[s]):e("/")},[s,e]);const v=E=>{const{name:A,value:S}=E.target;h(_=>({..._,[A]:S})),m[A]&&p(_=>({..._,[A]:""}))},g=()=>{const E={};return f.name.trim()||(E.name="Name is required"),f.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)||(E.email="Invalid email format"):E.email="Email is required",f.phone.trim()?/^[0-9]{10}$/.test(f.phone.replace(/\D/g,""))||(E.phone="Invalid phone number (10 digits required)"):E.phone="Phone is required",p(E),Object.keys(E).length===0},y=()=>new Promise(E=>{if(window.Razorpay){E(!0);return}const A=document.createElement("script");A.src="https://checkout.razorpay.com/v1/checkout.js",A.onload=()=>E(!0),A.onerror=()=>E(!1),document.body.appendChild(A)}),M=async E=>{if(E.preventDefault(),!!g()){c(!0);try{if(!await y())throw new Error("Failed to load Razorpay script");const S=f.teamMembers?f.teamMembers.split(",").map(I=>I.trim()).filter(I=>I):null,_=await fetch(`${A_}/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventId:s,eventName:i.title,name:f.name,email:f.email,phone:f.phone,teamMembers:S,additionalInfo:f.additionalInfo||null})}),D=await _.json();if(!_.ok)throw new Error(D.error||"Registration failed");const U={key:D.key,amount:D.amount,currency:D.currency,name:"INCEPTA 2026",description:`Registration for ${i.title}`,order_id:D.orderId,handler:async function(I){try{const B=await fetch(`${A_}/payment/verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderId:I.razorpay_order_id,paymentId:I.razorpay_payment_id,signature:I.razorpay_signature,eventId:s})}),z=await B.json();if(B.ok&&z.success)e(`/register-success/${s}`,{state:{registration:z.registration,orderId:I.razorpay_order_id}});else throw new Error(z.error||"Payment verification failed")}catch(B){console.error("Payment verification error:",B),alert("Payment verification failed. Please contact support with your order ID: "+D.orderId)}},prefill:{name:f.name,email:f.email,contact:f.phone},theme:{color:"#667eea"},modal:{ondismiss:function(){c(!1)}}};new window.Razorpay(U).open()}catch(A){console.error("Registration error:",A),alert("Registration failed: "+A.message),c(!1)}}};return i?T.jsxs("div",{className:"page-container",children:[T.jsxs("section",{className:"page-hero",style:{"--accent-color":"#667eea"},children:[T.jsxs(ji,{to:"/",className:"back-link",children:[T.jsx(Hr,{size:20})," Back to Home"]}),T.jsxs("h1",{className:"page-title",children:["Register for ",i.title]}),T.jsx("p",{className:"page-subtitle",children:i.tagline})]}),T.jsx("section",{className:"section2",children:T.jsxs("div",{className:"register-container",children:[T.jsx("div",{className:"register-form-wrapper",children:T.jsxs("form",{onSubmit:M,className:"register-form",children:[T.jsxs("div",{className:"form-group",children:[T.jsx("label",{htmlFor:"name",children:"Full Name *"}),T.jsx("input",{type:"text",id:"name",name:"name",value:f.name,onChange:v,className:m.name?"error":"",placeholder:"Enter your full name",required:!0}),m.name&&T.jsx("span",{className:"error-message",children:m.name})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{htmlFor:"email",children:"Email Address *"}),T.jsx("input",{type:"email",id:"email",name:"email",value:f.email,onChange:v,className:m.email?"error":"",placeholder:"your.email@example.com",required:!0}),m.email&&T.jsx("span",{className:"error-message",children:m.email})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{htmlFor:"phone",children:"Phone Number *"}),T.jsx("input",{type:"tel",id:"phone",name:"phone",value:f.phone,onChange:v,className:m.phone?"error":"",placeholder:"10-digit phone number",required:!0}),m.phone&&T.jsx("span",{className:"error-message",children:m.phone})]}),(i.details.find(E=>E.label==="Team Size")||i.details.find(E=>E.label==="Format")?.value?.includes("Team"))&&T.jsxs("div",{className:"form-group",children:[T.jsx("label",{htmlFor:"teamMembers",children:"Team Members (comma-separated)"}),T.jsx("input",{type:"text",id:"teamMembers",name:"teamMembers",value:f.teamMembers,onChange:v,placeholder:"Member 1, Member 2, Member 3..."}),T.jsx("small",{children:"Leave empty if registering individually"})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{htmlFor:"additionalInfo",children:"Additional Information"}),T.jsx("textarea",{id:"additionalInfo",name:"additionalInfo",value:f.additionalInfo,onChange:v,rows:"4",placeholder:"Any additional details or special requirements..."})]}),T.jsx("button",{type:"submit",className:"register-submit-btn",disabled:l,children:l?T.jsxs(T.Fragment,{children:[T.jsx(Tv,{className:"spinner",size:20}),"Processing..."]}):"Proceed to Payment"})]})}),T.jsxs("div",{className:"register-info",children:[T.jsxs("div",{className:"info-card",children:[T.jsx("h3",{children:"Event Details"}),T.jsx("div",{className:"info-details",children:i.details.map((E,A)=>T.jsxs("div",{className:"info-row",children:[T.jsxs("span",{className:"info-label",children:[E.label,":"]}),T.jsx("span",{className:"info-value",children:E.value})]},A))})]}),T.jsxs("div",{className:"info-card",children:[T.jsx("h3",{children:"Payment Information"}),T.jsx("p",{children:"Secure payment powered by Razorpay"}),T.jsx("p",{className:"payment-note",children:"You will be redirected to a secure payment gateway after submitting the form. A confirmation email will be sent to your registered email address."})]})]})]})})]}):T.jsx("div",{className:"page-container",children:T.jsx("div",{className:"loading-container",children:T.jsx(Tv,{className:"spinner",size:48})})})}function O3(){const{eventId:s}=G_(),e=Ca(),[i,r]=ae.useState(null),[l,c]=ae.useState(null);ae.useEffect(()=>{if(e.state?.registration)r(e.state.registration),s&&Di[s]&&c(Di[s]);else{const m=new URLSearchParams(e.search).get("orderId");m&&s&&f(s,m)}},[e,s]);const f=async(h,m)=>{try{const g=await(await fetch(`http://localhost:3000/api/registrations/${h}/${m}`)).json();g.success&&(r(g.registration),h&&Di[h]&&c(Di[h]))}catch(p){console.error("Error fetching registration:",p)}};return i?T.jsxs("div",{className:"page-container",children:[T.jsxs("section",{className:"page-hero",style:{"--accent-color":"#10b981"},children:[T.jsxs(ji,{to:"/",className:"back-link",children:[T.jsx(Hr,{size:20})," Back to Home"]}),T.jsx("div",{className:"success-icon-wrapper",children:T.jsx(oE,{size:64,className:"success-icon"})}),T.jsx("h1",{className:"page-title",children:"Registration Successful!"}),T.jsxs("p",{className:"page-subtitle",children:["Thank you for registering for ",l?.title||i.eventName]})]}),T.jsx("section",{className:"section",children:T.jsxs("div",{className:"success-container",children:[T.jsxs("div",{className:"success-card",children:[T.jsxs("div",{className:"success-header",children:[T.jsx(mp,{size:24}),T.jsx("h2",{children:"Confirmation Email Sent"})]}),T.jsxs("p",{className:"success-message",children:["A confirmation email has been sent to ",T.jsx("strong",{children:i.email})," with all the details. Please check your inbox (and spam folder)."]})]}),T.jsxs("div",{className:"registration-details-card",children:[T.jsx("h3",{children:"Registration Details"}),T.jsxs("div",{className:"details-grid",children:[T.jsxs("div",{className:"detail-item",children:[T.jsx("span",{className:"detail-label",children:"Registration ID"}),T.jsx("span",{className:"detail-value",children:i.orderId})]}),T.jsxs("div",{className:"detail-item",children:[T.jsx("span",{className:"detail-label",children:"Event"}),T.jsx("span",{className:"detail-value",children:l?.title||i.eventName})]}),T.jsxs("div",{className:"detail-item",children:[T.jsx("span",{className:"detail-label",children:"Name"}),T.jsx("span",{className:"detail-value",children:i.name})]}),T.jsxs("div",{className:"detail-item",children:[T.jsx("span",{className:"detail-label",children:"Email"}),T.jsx("span",{className:"detail-value",children:i.email})]}),T.jsxs("div",{className:"detail-item",children:[T.jsx("span",{className:"detail-label",children:"Phone"}),T.jsx("span",{className:"detail-value",children:i.phone})]}),i.teamMembers&&i.teamMembers.length>0&&T.jsxs("div",{className:"detail-item",children:[T.jsx("span",{className:"detail-label",children:"Team Members"}),T.jsx("span",{className:"detail-value",children:i.teamMembers.join(", ")})]}),T.jsxs("div",{className:"detail-item",children:[T.jsx("span",{className:"detail-label",children:"Amount Paid"}),T.jsxs("span",{className:"detail-value",children:["₹",(i.amount/100).toFixed(2)]})]}),T.jsxs("div",{className:"detail-item",children:[T.jsx("span",{className:"detail-label",children:"Payment ID"}),T.jsx("span",{className:"detail-value",children:i.paymentId||"N/A"})]}),T.jsxs("div",{className:"detail-item",children:[T.jsx("span",{className:"detail-label",children:"Status"}),T.jsx("span",{className:"detail-value status-badge completed",children:"Completed"})]})]})]}),l&&T.jsxs("div",{className:"event-reminder-card",children:[T.jsx("h3",{children:"Event Reminder"}),T.jsx("div",{className:"reminder-details",children:l.details.map((h,m)=>T.jsxs("div",{className:"reminder-row",children:[T.jsxs("span",{className:"reminder-label",children:[h.label,":"]}),T.jsx("span",{className:"reminder-value",children:h.value})]},m))})]}),T.jsxs("div",{className:"success-actions",children:[T.jsxs(ji,{to:"/",className:"btn-primary",children:[T.jsx(Hr,{size:20}),"Back to Home"]}),T.jsxs("button",{className:"btn-secondary",onClick:()=>window.print(),children:[T.jsx(dE,{size:20}),"Print Receipt"]})]}),T.jsx("div",{className:"support-info",children:T.jsxs("p",{children:[T.jsx("strong",{children:"Need help?"})," Contact us at"," ",T.jsx("a",{href:"mailto:ascacet@gmail.com",children:"ascacet@gmail.com"})," or call"," ",T.jsx("a",{href:"tel:+917356160270",children:"+91 73561 60270"})]})})]})})]}):T.jsx("div",{className:"page-container",children:T.jsx("section",{className:"section",children:T.jsx("div",{className:"success-container",children:T.jsx("p",{children:"Loading registration details..."})})})})}function P3(){return T.jsxs(wb,{children:[T.jsx(U3,{}),T.jsx(Bb,{}),T.jsx(ZE,{}),T.jsx(d3,{}),T.jsxs("div",{className:"content",children:[T.jsx(XE,{}),T.jsxs(rb,{children:[T.jsx(Or,{path:"/",element:T.jsx(A3,{})}),T.jsx(Or,{path:"/competitions",element:T.jsx(C3,{})}),T.jsx(Or,{path:"/events",element:T.jsx(D3,{})}),T.jsx(Or,{path:"/gala",element:T.jsx(N3,{})}),T.jsx(Or,{path:"/register/:eventId",element:T.jsx(L3,{})}),T.jsx(Or,{path:"/register-success/:eventId",element:T.jsx(O3,{})})]}),T.jsx(YE,{})]})]})}lM.createRoot(document.getElementById("root")).render(T.jsx(ae.StrictMode,{children:T.jsx(P3,{})}));
