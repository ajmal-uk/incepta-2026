(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var vd={exports:{}},Bo={};var i_;function zy(){if(i_)return Bo;i_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Bo.Fragment=e,Bo.jsx=i,Bo.jsxs=i,Bo}var a_;function By(){return a_||(a_=1,vd.exports=zy()),vd.exports}var P=By(),xd={exports:{}},rt={};var r_;function Hy(){if(r_)return rt;r_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function v(L,ne,ve){this.props=L,this.context=ne,this.refs=y,this.updater=ve||b}v.prototype.isReactComponent={},v.prototype.setState=function(L,ne){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ne,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function w(){}w.prototype=v.prototype;function N(L,ne,ve){this.props=L,this.context=ne,this.refs=y,this.updater=ve||b}var O=N.prototype=new w;O.constructor=N,T(O,v.prototype),O.isPureReactComponent=!0;var I=Array.isArray;function B(){}var F={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function C(L,ne,ve){var Re=ve.ref;return{$$typeof:s,type:L,key:ne,ref:Re!==void 0?Re:null,props:ve}}function D(L,ne){return C(L.type,ne,L.props)}function X(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function se(L){var ne={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ve){return ne[ve]})}var re=/\/+/g;function me(L,ne){return typeof L=="object"&&L!==null&&L.key!=null?se(""+L.key):ne.toString(36)}function de(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(B,B):(L.status="pending",L.then(function(ne){L.status==="pending"&&(L.status="fulfilled",L.value=ne)},function(ne){L.status==="pending"&&(L.status="rejected",L.reason=ne)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,ne,ve,Re,He){var te=typeof L;(te==="undefined"||te==="boolean")&&(L=null);var fe=!1;if(L===null)fe=!0;else switch(te){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(L.$$typeof){case s:case e:fe=!0;break;case _:return fe=L._init,z(fe(L._payload),ne,ve,Re,He)}}if(fe)return He=He(L),fe=Re===""?"."+me(L,0):Re,I(He)?(ve="",fe!=null&&(ve=fe.replace(re,"$&/")+"/"),z(He,ne,ve,"",function(Ge){return Ge})):He!=null&&(X(He)&&(He=D(He,ve+(He.key==null||L&&L.key===He.key?"":(""+He.key).replace(re,"$&/")+"/")+fe)),ne.push(He)),1;fe=0;var Ne=Re===""?".":Re+":";if(I(L))for(var Xe=0;Xe<L.length;Xe++)Re=L[Xe],te=Ne+me(Re,Xe),fe+=z(Re,ne,ve,te,He);else if(Xe=M(L),typeof Xe=="function")for(L=Xe.call(L),Xe=0;!(Re=L.next()).done;)Re=Re.value,te=Ne+me(Re,Xe++),fe+=z(Re,ne,ve,te,He);else if(te==="object"){if(typeof L.then=="function")return z(de(L),ne,ve,Re,He);throw ne=String(L),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return fe}function G(L,ne,ve){if(L==null)return L;var Re=[],He=0;return z(L,Re,"","",function(te){return ne.call(ve,te,He++)}),Re}function ie(L){if(L._status===-1){var ne=L._result;ne=ne(),ne.then(function(ve){(L._status===0||L._status===-1)&&(L._status=1,L._result=ve)},function(ve){(L._status===0||L._status===-1)&&(L._status=2,L._result=ve)}),L._status===-1&&(L._status=0,L._result=ne)}if(L._status===1)return L._result.default;throw L._result}var Ee=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},ye={map:G,forEach:function(L,ne,ve){G(L,function(){ne.apply(this,arguments)},ve)},count:function(L){var ne=0;return G(L,function(){ne++}),ne},toArray:function(L){return G(L,function(ne){return ne})||[]},only:function(L){if(!X(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return rt.Activity=g,rt.Children=ye,rt.Component=v,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=N,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,rt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},rt.cache=function(L){return function(){return L.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(L,ne,ve){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Re=T({},L.props),He=L.key;if(ne!=null)for(te in ne.key!==void 0&&(He=""+ne.key),ne)!K.call(ne,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ne.ref===void 0||(Re[te]=ne[te]);var te=arguments.length-2;if(te===1)Re.children=ve;else if(1<te){for(var fe=Array(te),Ne=0;Ne<te;Ne++)fe[Ne]=arguments[Ne+2];Re.children=fe}return C(L.type,He,Re)},rt.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},rt.createElement=function(L,ne,ve){var Re,He={},te=null;if(ne!=null)for(Re in ne.key!==void 0&&(te=""+ne.key),ne)K.call(ne,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(He[Re]=ne[Re]);var fe=arguments.length-2;if(fe===1)He.children=ve;else if(1<fe){for(var Ne=Array(fe),Xe=0;Xe<fe;Xe++)Ne[Xe]=arguments[Xe+2];He.children=Ne}if(L&&L.defaultProps)for(Re in fe=L.defaultProps,fe)He[Re]===void 0&&(He[Re]=fe[Re]);return C(L,te,He)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(L){return{$$typeof:h,render:L}},rt.isValidElement=X,rt.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:ie}},rt.memo=function(L,ne){return{$$typeof:p,type:L,compare:ne===void 0?null:ne}},rt.startTransition=function(L){var ne=F.T,ve={};F.T=ve;try{var Re=L(),He=F.S;He!==null&&He(ve,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(B,Ee)}catch(te){Ee(te)}finally{ne!==null&&ve.types!==null&&(ne.types=ve.types),F.T=ne}},rt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},rt.use=function(L){return F.H.use(L)},rt.useActionState=function(L,ne,ve){return F.H.useActionState(L,ne,ve)},rt.useCallback=function(L,ne){return F.H.useCallback(L,ne)},rt.useContext=function(L){return F.H.useContext(L)},rt.useDebugValue=function(){},rt.useDeferredValue=function(L,ne){return F.H.useDeferredValue(L,ne)},rt.useEffect=function(L,ne){return F.H.useEffect(L,ne)},rt.useEffectEvent=function(L){return F.H.useEffectEvent(L)},rt.useId=function(){return F.H.useId()},rt.useImperativeHandle=function(L,ne,ve){return F.H.useImperativeHandle(L,ne,ve)},rt.useInsertionEffect=function(L,ne){return F.H.useInsertionEffect(L,ne)},rt.useLayoutEffect=function(L,ne){return F.H.useLayoutEffect(L,ne)},rt.useMemo=function(L,ne){return F.H.useMemo(L,ne)},rt.useOptimistic=function(L,ne){return F.H.useOptimistic(L,ne)},rt.useReducer=function(L,ne,ve){return F.H.useReducer(L,ne,ve)},rt.useRef=function(L){return F.H.useRef(L)},rt.useState=function(L){return F.H.useState(L)},rt.useSyncExternalStore=function(L,ne,ve){return F.H.useSyncExternalStore(L,ne,ve)},rt.useTransition=function(){return F.H.useTransition()},rt.version="19.2.3",rt}var s_;function ip(){return s_||(s_=1,xd.exports=Hy()),xd.exports}var ce=ip(),Sd={exports:{}},Ho={},yd={exports:{}},Md={};var o_;function Gy(){return o_||(o_=1,(function(s){function e(z,G){var ie=z.length;z.push(G);e:for(;0<ie;){var Ee=ie-1>>>1,ye=z[Ee];if(0<l(ye,G))z[Ee]=G,z[ie]=ye,ie=Ee;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],ie=z.pop();if(ie!==G){z[0]=ie;e:for(var Ee=0,ye=z.length,L=ye>>>1;Ee<L;){var ne=2*(Ee+1)-1,ve=z[ne],Re=ne+1,He=z[Re];if(0>l(ve,ie))Re<ye&&0>l(He,ve)?(z[Ee]=He,z[Re]=ie,Ee=Re):(z[Ee]=ve,z[ne]=ie,Ee=ne);else if(Re<ye&&0>l(He,ie))z[Ee]=He,z[Re]=ie,Ee=Re;else break e}}return G}function l(z,G){var ie=z.sortIndex-G.sortIndex;return ie!==0?ie:z.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,g=null,S=3,M=!1,b=!1,T=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function O(z){for(var G=i(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=z)r(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function I(z){if(T=!1,O(z),!b)if(i(m)!==null)b=!0,B||(B=!0,se());else{var G=i(p);G!==null&&de(I,G.startTime-z)}}var B=!1,F=-1,K=5,C=-1;function D(){return y?!0:!(s.unstable_now()-C<K)}function X(){if(y=!1,B){var z=s.unstable_now();C=z;var G=!0;try{e:{b=!1,T&&(T=!1,w(F),F=-1),M=!0;var ie=S;try{t:{for(O(z),g=i(m);g!==null&&!(g.expirationTime>z&&D());){var Ee=g.callback;if(typeof Ee=="function"){g.callback=null,S=g.priorityLevel;var ye=Ee(g.expirationTime<=z);if(z=s.unstable_now(),typeof ye=="function"){g.callback=ye,O(z),G=!0;break t}g===i(m)&&r(m),O(z)}else r(m);g=i(m)}if(g!==null)G=!0;else{var L=i(p);L!==null&&de(I,L.startTime-z),G=!1}}break e}finally{g=null,S=ie,M=!1}G=void 0}}finally{G?se():B=!1}}}var se;if(typeof N=="function")se=function(){N(X)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,me=re.port2;re.port1.onmessage=X,se=function(){me.postMessage(null)}}else se=function(){v(X,0)};function de(z,G){F=v(function(){z(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(z){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var ie=S;S=G;try{return z()}finally{S=ie}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ie=S;S=z;try{return G()}finally{S=ie}},s.unstable_scheduleCallback=function(z,G,ie){var Ee=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Ee+ie:Ee):ie=Ee,z){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=ie+ye,z={id:_++,callback:G,priorityLevel:z,startTime:ie,expirationTime:ye,sortIndex:-1},ie>Ee?(z.sortIndex=ie,e(p,z),i(m)===null&&z===i(p)&&(T?(w(F),F=-1):T=!0,de(I,ie-Ee))):(z.sortIndex=ye,e(m,z),b||M||(b=!0,B||(B=!0,se()))),z},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(z){var G=S;return function(){var ie=S;S=G;try{return z.apply(this,arguments)}finally{S=ie}}}})(Md)),Md}var l_;function Vy(){return l_||(l_=1,yd.exports=Gy()),yd.exports}var Ed={exports:{}},Un={};var c_;function ky(){if(c_)return Un;c_=1;var s=ip();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Un.flushSync=function(m){var p=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=_,r.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.2.3",Un}var u_;function Xy(){if(u_)return Ed.exports;u_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ed.exports=ky(),Ed.exports}var f_;function Wy(){if(f_)return Ho;f_=1;var s=Vy(),e=ip(),i=Xy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=d;break}if(A===o){x=!0,o=u,a=d;break}A=A.sibling}if(!x){for(A=d.child;A;){if(A===a){x=!0,a=d,o=u;break}if(A===o){x=!0,o=d,a=u;break}A=A.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:me(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return me(t(n))}catch{}}return null}var de=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},Ee=[],ye=-1;function L(t){return{current:t}}function ne(t){0>ye||(t.current=Ee[ye],Ee[ye]=null,ye--)}function ve(t,n){ye++,Ee[ye]=t.current,t.current=n}var Re=L(null),He=L(null),te=L(null),fe=L(null);function Ne(t,n){switch(ve(te,n),ve(He,t),ve(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?A0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=A0(n),t=R0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(Re),ve(Re,t)}function Xe(){ne(Re),ne(He),ne(te)}function Ge(t){t.memoizedState!==null&&ve(fe,t);var n=Re.current,a=R0(n,t.type);n!==a&&(ve(He,t),ve(Re,a))}function ht(t){He.current===t&&(ne(Re),ne(He)),fe.current===t&&(ne(fe),Po._currentValue=ie)}var en,_t;function pt(t){if(en===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);en=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+t+_t}var Ct=!1;function ot(t,n){if(!t||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(le){var ee=le}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(le){ee=le}t.call(_e.prototype)}}else{try{throw Error()}catch(le){ee=le}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(le){if(le&&ee&&typeof le.stack=="string")return[le.stack,ee.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],A=d[1];if(x&&A){var H=x.split(`
`),J=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===J.length)for(o=H.length-1,u=J.length-1;1<=o&&0<=u&&H[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==J[u]){var he=`
`+H[o].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=o&&0<=u);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pt(a):""}function tn(t,n){switch(t.tag){case 26:case 27:case 5:return pt(t.type);case 16:return pt("Lazy");case 13:return t.child!==n&&n!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return pt("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=tn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Zt=Object.prototype.hasOwnProperty,Mt=s.unstable_scheduleCallback,Ut=s.unstable_cancelCallback,Ye=s.unstable_shouldYield,U=s.unstable_requestPaint,E=s.unstable_now,j=s.unstable_getCurrentPriorityLevel,pe=s.unstable_ImmediatePriority,Se=s.unstable_UserBlockingPriority,ue=s.unstable_NormalPriority,Ke=s.unstable_LowPriority,we=s.unstable_IdlePriority,We=s.log,nt=s.unstable_setDisableYieldValue,be=null,Te=null;function ze(t){if(typeof We=="function"&&nt(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(be,t)}catch{}}var Fe=Math.clz32?Math.clz32:W,De=Math.log,ct=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(De(t)/ct|0)|0}var Le=256,Ae=262144,Ie=4194304;function Me(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Me(o):(x&=A,x!==0?u=Me(x):a||(a=A&~t,a!==0&&(u=Me(a))))):(A=o&~d,A!==0?u=Me(A):x!==0?u=Me(x):a||(a=o&~t,a!==0&&(u=Me(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Et(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xi(t,n,a,o,u,d){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,J=t.hiddenUpdates;for(a=x&~a;0<a;){var he=31-Fe(a),_e=1<<he;A[he]=0,H[he]=-1;var ee=J[he];if(ee!==null)for(J[he]=null,he=0;he<ee.length;he++){var le=ee[he];le!==null&&(le.lane&=-536870913)}a&=~_e}o!==0&&dl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function dl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function js(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Hr(t,n){var a=n&-n;return a=(a&42)!==0?1:qs(a),(a&(t.suspendedLanes|n))!==0?0:a}function qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Gr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ys(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:K0(t.type))}function Ui(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var ri=Math.random().toString(36).slice(2),ln="__reactFiber$"+ri,Sn="__reactProps$"+ri,Si="__reactContainer$"+ri,Vr="__reactEvents$"+ri,kr="__reactListeners$"+ri,hl="__reactHandles$"+ri,Zs="__reactResources$"+ri,or="__reactMarker$"+ri;function Ks(t){delete t[ln],delete t[Sn],delete t[Vr],delete t[kr],delete t[hl]}function Aa(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Si]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=O0(t);t!==null;){if(a=t[ln])return a;t=O0(t)}return n}t=a,a=t.parentNode}return null}function Ra(t){if(t=t[ln]||t[Si]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function lr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ca(t){var n=t[Zs];return n||(n=t[Zs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[or]=!0}var q=new Set,oe={};function $(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(oe[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Be={},Oe={};function Ve(t){return Zt.call(Oe,t)?!0:Zt.call(Be,t)?!1:Ue.test(t)?Oe[t]=!0:(Be[t]=!0,!1)}function je(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function $e(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function jt(t){if(!t._valueTracker){var n=wt(t)?"checked":"value";t._valueTracker=Kt(t,n,""+t[n])}}function Lt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=wt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dt=/[\n"\\]/g;function at(t){return t.replace(Dt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(t,n,a,o,u,d,x,A){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Mn(t,x,et(n)):a!=null?Mn(t,x,et(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+et(A):t.removeAttribute("name")}function Wi(t,n,a,o,u,d,x,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){jt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),jt(t)}function Mn(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function si(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function It(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function En(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(de(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),jt(t)}function pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Xr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Tn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Tn(t,d,n[d])}function yi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ox=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Px=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(t){return Px.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var pu=null;function mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wr=null,jr=null;function Tp(t){var n=Ra(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;e:switch(t=n.stateNode,n.type){case"input":if(yn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Sn]||null;if(!u)throw Error(r(90));yn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Lt(o)}break e;case"textarea":It(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&si(t,!!a.multiple,n,!1)}}}var gu=!1;function Ap(t,n,a){if(gu)return t(n,a);gu=!0;try{var o=t(n);return o}finally{if(gu=!1,(Wr!==null||jr!==null)&&(tc(),Wr&&(n=Wr,t=jr,jr=Wr=null,Tp(n),t)))for(n=0;n<t.length;n++)Tp(t[n])}}function Qs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(qi)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{_u=!1}var wa=null,vu=null,ml=null;function Rp(){if(ml)return ml;var t,n=vu,a=n.length,o,u="value"in wa?wa.value:wa.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[d-o];o++);return ml=u.slice(t,1<o?1-o:void 0)}function gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function Cp(){return!1}function Hn(t){function n(a,o,u,d,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?_l:Cp,this.isPropagationStopped=Cp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Hn(cr),$s=g({},cr,{view:0,detail:0}),Fx=Hn($s),xu,Su,eo,xl=g({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(xu=t.screenX-eo.screenX,Su=t.screenY-eo.screenY):Su=xu=0,eo=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),wp=Hn(xl),Ix=g({},xl,{dataTransfer:0}),zx=Hn(Ix),Bx=g({},$s,{relatedTarget:0}),yu=Hn(Bx),Hx=g({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Gx=Hn(Hx),Vx=g({},cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kx=Hn(Vx),Xx=g({},cr,{data:0}),Dp=Hn(Xx),Wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=qx[t])?!!n[t]:!1}function Mu(){return Yx}var Zx=g({},$s,{key:function(t){if(t.key){var n=Wx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kx=Hn(Zx),Qx=g({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=Hn(Qx),Jx=g({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),$x=Hn(Jx),eS=g({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tS=Hn(eS),nS=g({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iS=Hn(nS),aS=g({},cr,{newState:0,oldState:0}),rS=Hn(aS),sS=[9,13,27,32],Eu=qi&&"CompositionEvent"in window,to=null;qi&&"documentMode"in document&&(to=document.documentMode);var oS=qi&&"TextEvent"in window&&!to,Up=qi&&(!Eu||to&&8<to&&11>=to),Lp=" ",Op=!1;function Pp(t,n){switch(t){case"keyup":return sS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function lS(t,n){switch(t){case"compositionend":return Fp(n);case"keypress":return n.which!==32?null:(Op=!0,Lp);case"textInput":return t=n.data,t===Lp&&Op?null:t;default:return null}}function cS(t,n){if(qr)return t==="compositionend"||!Eu&&Pp(t,n)?(t=Rp(),ml=vu=wa=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Up&&n.locale!=="ko"?null:n.data;default:return null}}var uS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!uS[t.type]:n==="textarea"}function zp(t,n,a,o){Wr?jr?jr.push(o):jr=[o]:Wr=o,n=lc(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var no=null,io=null;function fS(t){S0(t,0)}function Sl(t){var n=lr(t);if(Lt(n))return t}function Bp(t,n){if(t==="change")return n}var Hp=!1;if(qi){var bu;if(qi){var Tu="oninput"in document;if(!Tu){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Tu=typeof Gp.oninput=="function"}bu=Tu}else bu=!1;Hp=bu&&(!document.documentMode||9<document.documentMode)}function Vp(){no&&(no.detachEvent("onpropertychange",kp),io=no=null)}function kp(t){if(t.propertyName==="value"&&Sl(io)){var n=[];zp(n,io,t,mu(t)),Ap(fS,n)}}function dS(t,n,a){t==="focusin"?(Vp(),no=n,io=a,no.attachEvent("onpropertychange",kp)):t==="focusout"&&Vp()}function hS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(io)}function pS(t,n){if(t==="click")return Sl(n)}function mS(t,n){if(t==="input"||t==="change")return Sl(n)}function gS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:gS;function ao(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Zt.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function Xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wp(t,n){var a=Xp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xp(a)}}function jp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?jp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function Au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var _S=qi&&"documentMode"in document&&11>=document.documentMode,Yr=null,Ru=null,ro=null,Cu=!1;function Yp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||Yr==null||Yr!==Qe(o)||(o=Yr,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&ao(ro,o)||(ro=o,o=lc(Ru,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Yr)))}function ur(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Zr={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionrun:ur("Transition","TransitionRun"),transitionstart:ur("Transition","TransitionStart"),transitioncancel:ur("Transition","TransitionCancel"),transitionend:ur("Transition","TransitionEnd")},wu={},Zp={};qi&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function fr(t){if(wu[t])return wu[t];if(!Zr[t])return t;var n=Zr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zp)return wu[t]=n[a];return t}var Kp=fr("animationend"),Qp=fr("animationiteration"),Jp=fr("animationstart"),vS=fr("transitionrun"),xS=fr("transitionstart"),SS=fr("transitioncancel"),$p=fr("transitionend"),em=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function Mi(t,n){em.set(t,n),$(n,[t])}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],Kr=0,Nu=0;function Ml(){for(var t=Kr,n=Nu=Kr=0;n<t;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var d=oi[n];if(oi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&tm(a,u,d)}}function El(t,n,a,o){oi[Kr++]=t,oi[Kr++]=n,oi[Kr++]=a,oi[Kr++]=o,Nu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Uu(t,n,a,o){return El(t,n,a,o),bl(t)}function dr(t,n){return El(t,null,null,n),bl(t)}function tm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function bl(t){if(50<Co)throw Co=0,Vf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Qr={};function yS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,o){return new yS(t,n,a,o)}function Lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yi(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function nm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Tl(t,n,a,o,u,d){var x=0;if(o=t,typeof t=="function")Lu(t)&&(x=1);else if(typeof t=="string")x=Ay(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Zn(31,a,n,u),t.elementType=C,t.lanes=d,t;case T:return hr(a.children,u,d,n);case y:x=8,u|=24;break;case v:return t=Zn(12,a,n,u|2),t.elementType=v,t.lanes=d,t;case I:return t=Zn(13,a,n,u),t.elementType=I,t.lanes=d,t;case B:return t=Zn(19,a,n,u),t.elementType=B,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:x=10;break e;case w:x=9;break e;case O:x=11;break e;case F:x=14;break e;case K:x=16,o=null;break e}x=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Zn(x,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function hr(t,n,a,o){return t=Zn(7,t,o,n),t.lanes=a,t}function Ou(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function im(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function Pu(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var am=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=am.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},am.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Jr=[],$r=0,Al=null,so=0,ci=[],ui=0,Da=null,Li=1,Oi="";function Zi(t,n){Jr[$r++]=so,Jr[$r++]=Al,Al=t,so=n}function rm(t,n,a){ci[ui++]=Li,ci[ui++]=Oi,ci[ui++]=Da,Da=t;var o=Li;t=Oi;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var d=32-Fe(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Li=1<<32-Fe(n)+u|a<<u|o,Oi=d+t}else Li=1<<d|a<<u|o,Oi=t}function Fu(t){t.return!==null&&(Zi(t,1),rm(t,1,0))}function Iu(t){for(;t===Al;)Al=Jr[--$r],Jr[$r]=null,so=Jr[--$r],Jr[$r]=null;for(;t===Da;)Da=ci[--ui],ci[ui]=null,Oi=ci[--ui],ci[ui]=null,Li=ci[--ui],ci[ui]=null}function sm(t,n){ci[ui++]=Li,ci[ui++]=Oi,ci[ui++]=Da,Li=n.id,Oi=n.overflow,Da=t}var An=null,qt=null,St=!1,Na=null,fi=!1,zu=Error(r(519));function Ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(li(n,t)),zu}function om(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[Sn]=o,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<Do.length;a++)gt(Do[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Wi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),En(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||b0(n.textContent,a)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Ua(t,!0)}function lm(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:An=An.return}}function es(t){if(t!==An)return!1;if(!St)return lm(t),St=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||id(t.type,t.memoizedProps)),a=!a),a&&qt&&Ua(t),lm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=L0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=L0(t)}else n===27?(n=qt,ja(t.type)?(t=ld,ld=null,qt=t):qt=n):qt=An?hi(t.stateNode.nextSibling):null;return!0}function pr(){qt=An=null,St=!1}function Bu(){var t=Na;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Na=null),t}function oo(t){Na===null?Na=[t]:Na.push(t)}var Hu=L(null),mr=null,Ki=null;function La(t,n,a){ve(Hu,n._currentValue),n._currentValue=a}function Qi(t){t._currentValue=Hu.current,ne(Hu)}function Gu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Vu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Gu(d.return,a,t),o||(x=null);break e}d=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),Gu(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function ts(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var A=u.type;Yn(u.pendingProps.value,x.value)||(t!==null?t.push(A):t=[A])}}else if(u===fe.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Po):t=[Po])}u=u.return}t!==null&&Vu(n,t,a,o),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gr(t){mr=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return cm(mr,t)}function Cl(t,n){return mr===null&&gr(t),cm(t,n)}function cm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(t===null)throw Error(r(308));Ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ki=Ki.next=n;return a}var MS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ES=s.unstable_scheduleCallback,bS=s.unstable_NormalPriority,cn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new MS,data:new Map,refCount:0}}function lo(t){t.refCount--,t.refCount===0&&ES(bS,function(){t.controller.abort()})}var co=null,Xu=0,ns=0,is=null;function TS(t,n){if(co===null){var a=co=[];Xu=0,ns=Yf(),is={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xu++,n.then(um,um),n}function um(){if(--Xu===0&&co!==null){is!==null&&(is.status="fulfilled");var t=co;co=null,ns=0,is=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function AS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var fm=z.S;z.S=function(t,n){Yg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&TS(t,n),fm!==null&&fm(t,n)};var _r=L(null);function Wu(){var t=_r.current;return t!==null?t:Wt.pooledCache}function wl(t,n){n===null?ve(_r,_r.current):ve(_r,n.pool)}function dm(){var t=Wu();return t===null?null:{parent:cn._currentValue,pool:t}}var as=Error(r(460)),ju=Error(r(474)),Dl=Error(r(542)),Nl={then:function(){}};function hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function pm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gm(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gm(t),t}throw xr=n,as}}function vr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xr=a,as):a}}var xr=null;function mm(){if(xr===null)throw Error(r(459));var t=xr;return xr=null,t}function gm(t){if(t===as||t===Dl)throw Error(r(483))}var rs=null,uo=0;function Ul(t){var n=uo;return uo+=1,rs===null&&(rs=[]),pm(rs,t,n)}function fo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function _m(t){function n(Y,k){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[k],Y.flags|=16):Q.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Yi(Y,k),Y.index=0,Y.sibling=null,Y}function d(Y,k,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<k?(Y.flags|=67108866,k):Q):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function x(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,k,Q,ge){return k===null||k.tag!==6?(k=Ou(Q,Y.mode,ge),k.return=Y,k):(k=u(k,Q),k.return=Y,k)}function H(Y,k,Q,ge){var Je=Q.type;return Je===T?he(Y,k,Q.props.children,ge,Q.key):k!==null&&(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&vr(Je)===k.type)?(k=u(k,Q.props),fo(k,Q),k.return=Y,k):(k=Tl(Q.type,Q.key,Q.props,null,Y.mode,ge),fo(k,Q),k.return=Y,k)}function J(Y,k,Q,ge){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=Pu(Q,Y.mode,ge),k.return=Y,k):(k=u(k,Q.children||[]),k.return=Y,k)}function he(Y,k,Q,ge,Je){return k===null||k.tag!==7?(k=hr(Q,Y.mode,ge,Je),k.return=Y,k):(k=u(k,Q),k.return=Y,k)}function _e(Y,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ou(""+k,Y.mode,Q),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return Q=Tl(k.type,k.key,k.props,null,Y.mode,Q),fo(Q,k),Q.return=Y,Q;case b:return k=Pu(k,Y.mode,Q),k.return=Y,k;case K:return k=vr(k),_e(Y,k,Q)}if(de(k)||se(k))return k=hr(k,Y.mode,Q,null),k.return=Y,k;if(typeof k.then=="function")return _e(Y,Ul(k),Q);if(k.$$typeof===N)return _e(Y,Cl(Y,k),Q);Ll(Y,k)}return null}function ee(Y,k,Q,ge){var Je=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Je!==null?null:A(Y,k,""+Q,ge);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Je?H(Y,k,Q,ge):null;case b:return Q.key===Je?J(Y,k,Q,ge):null;case K:return Q=vr(Q),ee(Y,k,Q,ge)}if(de(Q)||se(Q))return Je!==null?null:he(Y,k,Q,ge,null);if(typeof Q.then=="function")return ee(Y,k,Ul(Q),ge);if(Q.$$typeof===N)return ee(Y,k,Cl(Y,Q),ge);Ll(Y,Q)}return null}function le(Y,k,Q,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Y=Y.get(Q)||null,A(k,Y,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return Y=Y.get(ge.key===null?Q:ge.key)||null,H(k,Y,ge,Je);case b:return Y=Y.get(ge.key===null?Q:ge.key)||null,J(k,Y,ge,Je);case K:return ge=vr(ge),le(Y,k,Q,ge,Je)}if(de(ge)||se(ge))return Y=Y.get(Q)||null,he(k,Y,ge,Je,null);if(typeof ge.then=="function")return le(Y,k,Q,Ul(ge),Je);if(ge.$$typeof===N)return le(Y,k,Q,Cl(k,ge),Je);Ll(k,ge)}return null}function ke(Y,k,Q,ge){for(var Je=null,Tt=null,Ze=k,ut=k=0,xt=null;Ze!==null&&ut<Q.length;ut++){Ze.index>ut?(xt=Ze,Ze=null):xt=Ze.sibling;var At=ee(Y,Ze,Q[ut],ge);if(At===null){Ze===null&&(Ze=xt);break}t&&Ze&&At.alternate===null&&n(Y,Ze),k=d(At,k,ut),Tt===null?Je=At:Tt.sibling=At,Tt=At,Ze=xt}if(ut===Q.length)return a(Y,Ze),St&&Zi(Y,ut),Je;if(Ze===null){for(;ut<Q.length;ut++)Ze=_e(Y,Q[ut],ge),Ze!==null&&(k=d(Ze,k,ut),Tt===null?Je=Ze:Tt.sibling=Ze,Tt=Ze);return St&&Zi(Y,ut),Je}for(Ze=o(Ze);ut<Q.length;ut++)xt=le(Ze,Y,ut,Q[ut],ge),xt!==null&&(t&&xt.alternate!==null&&Ze.delete(xt.key===null?ut:xt.key),k=d(xt,k,ut),Tt===null?Je=xt:Tt.sibling=xt,Tt=xt);return t&&Ze.forEach(function(Qa){return n(Y,Qa)}),St&&Zi(Y,ut),Je}function tt(Y,k,Q,ge){if(Q==null)throw Error(r(151));for(var Je=null,Tt=null,Ze=k,ut=k=0,xt=null,At=Q.next();Ze!==null&&!At.done;ut++,At=Q.next()){Ze.index>ut?(xt=Ze,Ze=null):xt=Ze.sibling;var Qa=ee(Y,Ze,At.value,ge);if(Qa===null){Ze===null&&(Ze=xt);break}t&&Ze&&Qa.alternate===null&&n(Y,Ze),k=d(Qa,k,ut),Tt===null?Je=Qa:Tt.sibling=Qa,Tt=Qa,Ze=xt}if(At.done)return a(Y,Ze),St&&Zi(Y,ut),Je;if(Ze===null){for(;!At.done;ut++,At=Q.next())At=_e(Y,At.value,ge),At!==null&&(k=d(At,k,ut),Tt===null?Je=At:Tt.sibling=At,Tt=At);return St&&Zi(Y,ut),Je}for(Ze=o(Ze);!At.done;ut++,At=Q.next())At=le(Ze,Y,ut,At.value,ge),At!==null&&(t&&At.alternate!==null&&Ze.delete(At.key===null?ut:At.key),k=d(At,k,ut),Tt===null?Je=At:Tt.sibling=At,Tt=At);return t&&Ze.forEach(function(Iy){return n(Y,Iy)}),St&&Zi(Y,ut),Je}function Xt(Y,k,Q,ge){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:e:{for(var Je=Q.key;k!==null;){if(k.key===Je){if(Je=Q.type,Je===T){if(k.tag===7){a(Y,k.sibling),ge=u(k,Q.props.children),ge.return=Y,Y=ge;break e}}else if(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&vr(Je)===k.type){a(Y,k.sibling),ge=u(k,Q.props),fo(ge,Q),ge.return=Y,Y=ge;break e}a(Y,k);break}else n(Y,k);k=k.sibling}Q.type===T?(ge=hr(Q.props.children,Y.mode,ge,Q.key),ge.return=Y,Y=ge):(ge=Tl(Q.type,Q.key,Q.props,null,Y.mode,ge),fo(ge,Q),ge.return=Y,Y=ge)}return x(Y);case b:e:{for(Je=Q.key;k!==null;){if(k.key===Je)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(Y,k.sibling),ge=u(k,Q.children||[]),ge.return=Y,Y=ge;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}ge=Pu(Q,Y.mode,ge),ge.return=Y,Y=ge}return x(Y);case K:return Q=vr(Q),Xt(Y,k,Q,ge)}if(de(Q))return ke(Y,k,Q,ge);if(se(Q)){if(Je=se(Q),typeof Je!="function")throw Error(r(150));return Q=Je.call(Q),tt(Y,k,Q,ge)}if(typeof Q.then=="function")return Xt(Y,k,Ul(Q),ge);if(Q.$$typeof===N)return Xt(Y,k,Cl(Y,Q),ge);Ll(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(Y,k.sibling),ge=u(k,Q),ge.return=Y,Y=ge):(a(Y,k),ge=Ou(Q,Y.mode,ge),ge.return=Y,Y=ge),x(Y)):a(Y,k)}return function(Y,k,Q,ge){try{uo=0;var Je=Xt(Y,k,Q,ge);return rs=null,Je}catch(Ze){if(Ze===as||Ze===Dl)throw Ze;var Tt=Zn(29,Ze,null,Y.mode);return Tt.lanes=ge,Tt.return=Y,Tt}}}var Sr=_m(!0),vm=_m(!1),Oa=!1;function qu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=bl(t),tm(t,null,a),n}return El(t,o,n,a),bl(t)}function ho(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,js(t,a)}}function Zu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ku=!1;function po(){if(Ku){var t=is;if(t!==null)throw t}}function mo(t,n,a,o){Ku=!1;var u=t.updateQueue;Oa=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,J=H.next;H.next=null,x===null?d=J:x.next=J,x=H;var he=t.alternate;he!==null&&(he=he.updateQueue,A=he.lastBaseUpdate,A!==x&&(A===null?he.firstBaseUpdate=J:A.next=J,he.lastBaseUpdate=H))}if(d!==null){var _e=u.baseState;x=0,he=J=H=null,A=d;do{var ee=A.lane&-536870913,le=ee!==A.lane;if(le?(vt&ee)===ee:(o&ee)===ee){ee!==0&&ee===ns&&(Ku=!0),he!==null&&(he=he.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ke=t,tt=A;ee=n;var Xt=a;switch(tt.tag){case 1:if(ke=tt.payload,typeof ke=="function"){_e=ke.call(Xt,_e,ee);break e}_e=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=tt.payload,ee=typeof ke=="function"?ke.call(Xt,_e,ee):ke,ee==null)break e;_e=g({},_e,ee);break e;case 2:Oa=!0}}ee=A.callback,ee!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[ee]:le.push(ee))}else le={lane:ee,tag:A.tag,payload:A.payload,callback:A.callback,next:null},he===null?(J=he=le,H=_e):he=he.next=le,x|=ee;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;le=A,A=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);he===null&&(H=_e),u.baseState=H,u.firstBaseUpdate=J,u.lastBaseUpdate=he,d===null&&(u.shared.lanes=0),Ga|=x,t.lanes=x,t.memoizedState=_e}}function xm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Sm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xm(a[t],n)}var ss=L(null),Ol=L(0);function ym(t,n){t=sa,ve(Ol,t),ve(ss,n),sa=t|n.baseLanes}function Qu(){ve(Ol,sa),ve(ss,ss.current)}function Ju(){sa=Ol.current,ne(ss),ne(Ol)}var Kn=L(null),di=null;function Ia(t){var n=t.alternate;ve(sn,sn.current&1),ve(Kn,t),di===null&&(n===null||ss.current!==null||n.memoizedState!==null)&&(di=t)}function $u(t){ve(sn,sn.current),ve(Kn,t),di===null&&(di=t)}function Mm(t){t.tag===22?(ve(sn,sn.current),ve(Kn,t),di===null&&(di=t)):za()}function za(){ve(sn,sn.current),ve(Kn,Kn.current)}function Qn(t){ne(Kn),di===t&&(di=null),ne(sn)}var sn=L(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sd(a)||od(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=0,lt=null,Vt=null,un=null,Fl=!1,os=!1,yr=!1,Il=0,go=0,ls=null,RS=0;function nn(){throw Error(r(321))}function ef(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function tf(t,n,a,o,u,d){return Ji=d,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?rg:_f,yr=!1,d=a(o,u),yr=!1,os&&(d=bm(n,a,o,u)),Em(t),d}function Em(t){z.H=xo;var n=Vt!==null&&Vt.next!==null;if(Ji=0,un=Vt=lt=null,Fl=!1,go=0,ls=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&Rl(t)&&(fn=!0))}function bm(t,n,a,o){lt=t;var u=0;do{if(os&&(ls=null),go=0,os=!1,25<=u)throw Error(r(301));if(u+=1,un=Vt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=sg,d=n(a,o)}while(os);return d}function CS(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?_o(n):n,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(lt.flags|=1024),n}function nf(){var t=Il!==0;return Il=0,t}function af(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function rf(t){if(Fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Fl=!1}Ji=0,un=Vt=lt=null,os=!1,go=Il=0,ls=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?lt.memoizedState=un=t:un=un.next=t,un}function on(){if(Vt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var n=un===null?lt.memoizedState:un.next;if(n!==null)un=n,Vt=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},un===null?lt.memoizedState=un=t:un=un.next=t}return un}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(t){var n=go;return go+=1,ls===null&&(ls=[]),t=pm(ls,t,n),n=lt,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?rg:_f),t}function Bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _o(t);if(t.$$typeof===N)return Rn(t)}throw Error(r(438,String(t)))}function sf(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function $i(t,n){return typeof n=="function"?n(t):n}function Hl(t){var n=on();return of(n,Vt,t)}function of(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var A=x=null,H=null,J=n,he=!1;do{var _e=J.lane&-536870913;if(_e!==J.lane?(vt&_e)===_e:(Ji&_e)===_e){var ee=J.revertLane;if(ee===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_e===ns&&(he=!0);else if((Ji&ee)===ee){J=J.next,ee===ns&&(he=!0);continue}else _e={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},H===null?(A=H=_e,x=d):H=H.next=_e,lt.lanes|=ee,Ga|=ee;_e=J.action,yr&&a(d,_e),d=J.hasEagerState?J.eagerState:a(d,_e)}else ee={lane:_e,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},H===null?(A=H=ee,x=d):H=H.next=ee,lt.lanes|=_e,Ga|=_e;J=J.next}while(J!==null&&J!==n);if(H===null?x=d:H.next=A,!Yn(d,t.memoizedState)&&(fn=!0,he&&(a=is,a!==null)))throw a;t.memoizedState=d,t.baseState=x,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function lf(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);Yn(d,n.memoizedState)||(fn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Tm(t,n,a){var o=lt,u=on(),d=St;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Yn((Vt||u).memoizedState,a);if(x&&(u.memoizedState=a,fn=!0),u=u.queue,ff(Cm.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,cs(9,{destroy:void 0},Rm.bind(null,o,u,a,n),null),Wt===null)throw Error(r(349));d||(Ji&127)!==0||Am(o,n,a)}return a}function Am(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=zl(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Rm(t,n,a,o){n.value=a,n.getSnapshot=o,wm(n)&&Dm(t)}function Cm(t,n,a){return a(function(){wm(n)&&Dm(t)})}function wm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Dm(t){var n=dr(t,2);n!==null&&Wn(n,t,2)}function cf(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),yr){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},n}function Nm(t,n,a,o){return t.baseState=a,of(t,Vt,typeof o=="function"?o:$i)}function wS(t,n,a,o,u){if(kl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Um(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Um(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=z.T,x={};z.T=x;try{var A=a(u,o),H=z.S;H!==null&&H(x,A),Lm(t,n,A)}catch(J){uf(t,n,J)}finally{d!==null&&x.types!==null&&(d.types=x.types),z.T=d}}else try{d=a(u,o),Lm(t,n,d)}catch(J){uf(t,n,J)}}function Lm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Om(t,n,o)},function(o){return uf(t,n,o)}):Om(t,n,a)}function Om(t,n,a){n.status="fulfilled",n.value=a,Pm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Um(t,a)))}function uf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Pm(n),n=n.next;while(n!==o)}t.action=null}function Pm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Fm(t,n){return n}function Im(t,n){if(St){var a=Wt.formState;if(a!==null){e:{var o=lt;if(St){if(qt){t:{for(var u=qt,d=fi;u.nodeType!==8;){if(!d){u=null;break t}if(u=hi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){qt=hi(u.nextSibling),o=u.data==="F!";break e}}Ua(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fm,lastRenderedState:n},a.queue=o,a=ng.bind(null,lt,o),o.dispatch=a,o=cf(!1),d=gf.bind(null,lt,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=wS.bind(null,lt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function zm(t){var n=on();return Bm(n,Vt,t)}function Bm(t,n,a){if(n=of(t,n,Fm)[0],t=Hl($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=_o(n)}catch(x){throw x===as?Dl:x}else o=n;n=on();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,cs(9,{destroy:void 0},DS.bind(null,u,a),null)),[o,d,t]}function DS(t,n){t.action=n}function Hm(t){var n=on(),a=Vt;if(a!==null)return Bm(n,a,t);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function cs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=zl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Gm(){return on().memoizedState}function Gl(t,n,a,o){var u=Fn();lt.flags|=t,u.memoizedState=cs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(t,n,a,o){var u=on();o=o===void 0?null:o;var d=u.memoizedState.inst;Vt!==null&&o!==null&&ef(o,Vt.memoizedState.deps)?u.memoizedState=cs(n,d,a,o):(lt.flags|=t,u.memoizedState=cs(1|n,d,a,o))}function Vm(t,n){Gl(8390656,8,t,n)}function ff(t,n){Vl(2048,8,t,n)}function NS(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=zl(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function km(t){var n=on().memoizedState;return NS({ref:n,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Xm(t,n){return Vl(4,2,t,n)}function Wm(t,n){return Vl(4,4,t,n)}function jm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function qm(t,n,a){a=a!=null?a.concat([t]):null,Vl(4,4,jm.bind(null,n,t),a)}function df(){}function Ym(t,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ef(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Zm(t,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ef(n,o[1]))return o[0];if(o=t(),yr){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o}function hf(t,n,a){return a===void 0||(Ji&1073741824)!==0&&(vt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Kg(),lt.lanes|=t,Ga|=t,a)}function Km(t,n,a,o){return Yn(a,n)?a:ss.current!==null?(t=hf(t,a,o),Yn(t,n)||(fn=!0),t):(Ji&42)===0||(Ji&1073741824)!==0&&(vt&261930)===0?(fn=!0,t.memoizedState=a):(t=Kg(),lt.lanes|=t,Ga|=t,n)}function Qm(t,n,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var x=z.T,A={};z.T=A,gf(t,!1,n,a);try{var H=u(),J=z.S;if(J!==null&&J(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var he=AS(H,o);vo(t,n,he,ei(t))}else vo(t,n,o,ei(t))}catch(_e){vo(t,n,{then:function(){},status:"rejected",reason:_e},ei())}finally{G.p=d,x!==null&&A.types!==null&&(x.types=A.types),z.T=x}}function US(){}function pf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Jm(t).queue;Qm(t,u,n,ie,a===null?US:function(){return $m(t),a(o)})}function Jm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function $m(t){var n=Jm(t);n.next===null&&(n=t.alternate.memoizedState),vo(t,n.next.queue,{},ei())}function mf(){return Rn(Po)}function eg(){return on().memoizedState}function tg(){return on().memoizedState}function LS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Pa(a);var o=Fa(n,t,a);o!==null&&(Wn(o,n,a),ho(o,n,a)),n={cache:ku()},t.payload=n;return}n=n.return}}function OS(t,n,a){var o=ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(t)?ig(n,a):(a=Uu(t,n,a,o),a!==null&&(Wn(a,t,o),ag(a,n,o)))}function ng(t,n,a){var o=ei();vo(t,n,a,o)}function vo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(t))ig(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,A=d(x,a);if(u.hasEagerState=!0,u.eagerState=A,Yn(A,x))return El(t,n,u,0),Wt===null&&Ml(),!1}catch{}if(a=Uu(t,n,u,o),a!==null)return Wn(a,t,o),ag(a,n,o),!0}return!1}function gf(t,n,a,o){if(o={lane:2,revertLane:Yf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(n)throw Error(r(479))}else n=Uu(t,a,o,2),n!==null&&Wn(n,t,2)}function kl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function ig(t,n){os=Fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ag(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,js(t,a)}}var xo={readContext:Rn,use:Bl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};xo.useEffectEvent=nn;var rg={readContext:Rn,use:Bl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Vm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Gl(4194308,4,jm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Gl(4194308,4,t,n)},useInsertionEffect:function(t,n){Gl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var o=t();if(yr){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(yr){ze(!0);try{a(n)}finally{ze(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=OS.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=cf(t);var n=t.queue,a=ng.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:df,useDeferredValue:function(t,n){var a=Fn();return hf(a,t,n)},useTransition:function(){var t=cf(!1);return t=Qm.bind(null,lt,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=Fn();if(St){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Wt===null)throw Error(r(349));(vt&127)!==0||Am(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Vm(Cm.bind(null,o,d,t),[t]),o.flags|=2048,cs(9,{destroy:void 0},Rm.bind(null,o,d,a,n),null),a},useId:function(){var t=Fn(),n=Wt.identifierPrefix;if(St){var a=Oi,o=Li;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Il++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=RS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:mf,useFormState:Im,useActionState:Im,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:sf,useCacheRefresh:function(){return Fn().memoizedState=LS.bind(null,lt)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},_f={readContext:Rn,use:Bl,useCallback:Ym,useContext:Rn,useEffect:ff,useImperativeHandle:qm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:Hl,useRef:Gm,useState:function(){return Hl($i)},useDebugValue:df,useDeferredValue:function(t,n){var a=on();return Km(a,Vt.memoizedState,t,n)},useTransition:function(){var t=Hl($i)[0],n=on().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:Tm,useId:eg,useHostTransitionStatus:mf,useFormState:zm,useActionState:zm,useOptimistic:function(t,n){var a=on();return Nm(a,Vt,t,n)},useMemoCache:sf,useCacheRefresh:tg};_f.useEffectEvent=km;var sg={readContext:Rn,use:Bl,useCallback:Ym,useContext:Rn,useEffect:ff,useImperativeHandle:qm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:lf,useRef:Gm,useState:function(){return lf($i)},useDebugValue:df,useDeferredValue:function(t,n){var a=on();return Vt===null?hf(a,t,n):Km(a,Vt.memoizedState,t,n)},useTransition:function(){var t=lf($i)[0],n=on().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:Tm,useId:eg,useHostTransitionStatus:mf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,n){var a=on();return Vt!==null?Nm(a,Vt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:sf,useCacheRefresh:tg};sg.useEffectEvent=km;function vf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=Fa(t,u,o),n!==null&&(Wn(n,t,o),ho(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Fa(t,u,o),n!==null&&(Wn(n,t,o),ho(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=Fa(t,o,a),n!==null&&(Wn(n,t,a),ho(n,t,a))}};function og(t,n,a,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!ao(a,o)||!ao(u,d):!0}function lg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&xf.enqueueReplaceState(n,n.state,null)}function Mr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function cg(t){yl(t)}function ug(t){console.error(t)}function fg(t){yl(t)}function Xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function dg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(t,n)},a}function hg(t){return t=Pa(t),t.tag=3,t}function pg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){dg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){dg(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function PS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ts(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?nc():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Wf(t,o,u)),!1;case 22:return a.flags|=65536,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Wf(t,o,u)),!1}throw Error(r(435,a.tag))}return Wf(t,o,u),nc(),!1}if(St)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zu&&(t=Error(r(422),{cause:o}),oo(li(t,a)))):(o!==zu&&(n=Error(r(423),{cause:o}),oo(li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=li(o,a),u=Sf(t.stateNode,o,u),Zu(t,u),an!==4&&(an=2)),!1;var d=Error(r(520),{cause:o});if(d=li(d,a),Ro===null?Ro=[d]:Ro.push(d),an!==4&&(an=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Sf(a.stateNode,o,t),Zu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Va===null||!Va.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=hg(u),pg(u,t,a,o),Zu(a,u),!1}a=a.return}while(a!==null);return!1}var yf=Error(r(461)),fn=!1;function Cn(t,n,a,o){n.child=t===null?vm(n,null,a,o):Sr(n,t.child,a,o)}function mg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return gr(n),o=tf(t,n,a,x,d,u),A=nf(),t!==null&&!fn?(af(t,n,u),ea(t,n,u)):(St&&A&&Fu(n),n.flags|=1,Cn(t,n,o,u),n.child)}function gg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Lu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,_g(t,n,d,o,u)):(t=Tl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!wf(t,u)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(x,o)&&t.ref===n.ref)return ea(t,n,u)}return n.flags|=1,t=Yi(d,o),t.ref=n.ref,t.return=n,n.child=t}function _g(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(ao(d,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=d,wf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,ea(t,n,u)}return Mf(t,n,a,o,u)}function vg(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return xg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&wl(n,d!==null?d.cachePool:null),d!==null?ym(n,d):Qu(),Mm(n);else return o=n.lanes=536870912,xg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(wl(n,d.cachePool),ym(n,d),za(),n.memoizedState=null):(t!==null&&wl(n,null),Qu(),za());return Cn(t,n,u,a),n.child}function So(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xg(t,n,a,o,u){var d=Wu();return d=d===null?null:{parent:cn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&wl(n,null),Qu(),Mm(n),t!==null&&ts(t,n,o,!0),n.childLanes=u,null}function Wl(t,n){return n=ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Sg(t,n,a){return Sr(n,t.child,null,a),t=Wl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function FS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(St){if(o.mode==="hidden")return t=Wl(n,o),n.lanes=536870912,So(null,t);if($u(n),(t=qt)?(t=U0(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=im(t),a.return=n,n.child=a,An=n,qt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Wl(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if($u(n),u)if(n.flags&256)n.flags&=-257,n=Sg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||ts(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(o=Wt,o!==null&&(x=Hr(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,dr(t,x),Wn(o,t,x),yf;nc(),n=Sg(t,n,a)}else t=d.treeContext,qt=hi(x.nextSibling),An=n,St=!0,Na=null,fi=!1,t!==null&&sm(n,t),n=Wl(n,o),n.flags|=4096;return n}return t=Yi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function jl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Mf(t,n,a,o,u){return gr(n),a=tf(t,n,a,o,void 0,u),o=nf(),t!==null&&!fn?(af(t,n,u),ea(t,n,u)):(St&&o&&Fu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function yg(t,n,a,o,u,d){return gr(n),n.updateQueue=null,a=bm(n,o,a,u),Em(t),o=nf(),t!==null&&!fn?(af(t,n,d),ea(t,n,d)):(St&&o&&Fu(n),n.flags|=1,Cn(t,n,a,d),n.child)}function Mg(t,n,a,o,u){if(gr(n),n.stateNode===null){var d=Qr,x=a.contextType;typeof x=="object"&&x!==null&&(d=Rn(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},qu(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?Rn(x):Qr,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(vf(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&xf.enqueueReplaceState(d,d.state,null),mo(n,o,d,u),po(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var A=n.memoizedProps,H=Mr(a,A);d.props=H;var J=d.context,he=a.contextType;x=Qr,typeof he=="object"&&he!==null&&(x=Rn(he));var _e=a.getDerivedStateFromProps;he=typeof _e=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,he||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||J!==x)&&lg(n,d,o,x),Oa=!1;var ee=n.memoizedState;d.state=ee,mo(n,o,d,u),po(),J=n.memoizedState,A||ee!==J||Oa?(typeof _e=="function"&&(vf(n,a,_e,o),J=n.memoizedState),(H=Oa||og(n,a,H,o,ee,J,x))?(he||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),d.props=o,d.state=J,d.context=x,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Yu(t,n),x=n.memoizedProps,he=Mr(a,x),d.props=he,_e=n.pendingProps,ee=d.context,J=a.contextType,H=Qr,typeof J=="object"&&J!==null&&(H=Rn(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==_e||ee!==H)&&lg(n,d,o,H),Oa=!1,ee=n.memoizedState,d.state=ee,mo(n,o,d,u),po();var le=n.memoizedState;x!==_e||ee!==le||Oa||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof A=="function"&&(vf(n,a,A,o),le=n.memoizedState),(he=Oa||og(n,a,he,o,ee,le,H)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(J||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,le,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,le,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=H,o=he):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,jl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Sr(n,t.child,null,u),n.child=Sr(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ea(t,n,u),t}function Eg(t,n,a,o){return pr(),n.flags|=256,Cn(t,n,a,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(t){return{baseLanes:t,cachePool:dm()}}function Tf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function bg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(St){if(u?Ia(n):za(),(t=qt)?(t=U0(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=im(t),a.return=n,n.child=a,An=n,qt=null)):t=null,t===null)throw Ua(n);return od(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(za(),u=n.mode,A=ql({mode:"hidden",children:A},u),o=hr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(t,x,a),n.memoizedState=Ef,So(null,o)):(Ia(n),Af(n,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(d)n.flags&256?(Ia(n),n.flags&=-257,n=Rf(t,n,a)):n.memoizedState!==null?(za(),n.child=t.child,n.flags|=128,n=null):(za(),A=o.fallback,u=n.mode,o=ql({mode:"visible",children:o.children},u),A=hr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Sr(n,t.child,null,a),o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(t,x,a),n.memoizedState=Ef,n=So(null,o));else if(Ia(n),od(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var J=x.dgst;x=J,o=Error(r(419)),o.stack="",o.digest=x,oo({value:o,source:null,stack:null}),n=Rf(t,n,a)}else if(fn||ts(t,n,a,!1),x=(a&t.childLanes)!==0,fn||x){if(x=Wt,x!==null&&(o=Hr(x,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,dr(t,o),Wn(x,t,o),yf;sd(A)||nc(),n=Rf(t,n,a)}else sd(A)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,qt=hi(A.nextSibling),An=n,St=!0,Na=null,fi=!1,t!==null&&sm(n,t),n=Af(n,o.children),n.flags|=4096);return n}return u?(za(),A=o.fallback,u=n.mode,H=t.child,J=H.sibling,o=Yi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,J!==null?A=Yi(J,A):(A=hr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,So(null,o),o=n.child,A=t.child.memoizedState,A===null?A=bf(a):(u=A.cachePool,u!==null?(H=cn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=dm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Tf(t,x,a),n.memoizedState=Ef,So(t.child,o)):(Ia(n),a=t.child,t=a.sibling,a=Yi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Af(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function Rf(t,n,a){return Sr(n,t.child,null,a),t=Af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Tg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Gu(t.return,n,a)}function Cf(t,n,a,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=d)}function Ag(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=sn.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,ve(sn,x),Cn(t,n,o,a),o=St?so:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,a,n);else if(t.tag===19)Tg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Cf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Pl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Cf(n,!0,a,null,d,o);break;case"together":Cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ea(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ts(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Yi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Yi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function IS(t,n,a){switch(n.tag){case 3:Ne(n,n.stateNode.containerInfo),La(n,cn,t.memoizedState.cache),pr();break;case 27:case 5:Ge(n);break;case 4:Ne(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$u(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?bg(t,n,a):(Ia(n),t=ea(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ts(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ag(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(sn,sn.current),o)break;return null;case 22:return n.lanes=0,vg(t,n,a,n.pendingProps);case 24:La(n,cn,t.memoizedState.cache)}return ea(t,n,a)}function Rg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!wf(t,a)&&(n.flags&128)===0)return fn=!1,IS(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,St&&(n.flags&1048576)!==0&&rm(n,so,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=vr(n.elementType),n.type=t,typeof t=="function")Lu(t)?(o=Mr(t,o),n.tag=1,n=Mg(null,n,t,o,a)):(n.tag=0,n=Mf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=mg(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=gg(null,n,t,o,a);break e}}throw n=me(t)||t,Error(r(306,n,""))}}return n;case 0:return Mf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Mr(o,n.pendingProps),Mg(t,n,o,u,a);case 3:e:{if(Ne(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Yu(t,n),mo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,La(n,cn,o),o!==d.cache&&Vu(n,[cn],a,!0),po(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Eg(t,n,o,a);break e}else if(o!==u){u=li(Error(r(424)),n),oo(u),n=Eg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qt=hi(t.firstChild),An=n,St=!0,Na=null,fi=!0,a=vm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(pr(),o===u){n=ea(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return jl(t,n),t===null?(a=z0(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,t=n.pendingProps,o=cc(te.current).createElement(a),o[ln]=n,o[Sn]=t,wn(o,a,t),R(o),n.stateNode=o):n.memoizedState=z0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ge(n),t===null&&St&&(o=n.stateNode=P0(n.type,n.pendingProps,te.current),An=n,fi=!0,u=qt,ja(n.type)?(ld=u,qt=hi(o.firstChild)):qt=u),Cn(t,n,n.pendingProps.children,a),jl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&St&&((u=o=qt)&&(o=hy(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,An=n,qt=hi(o.firstChild),fi=!1,u=!0):u=!1),u||Ua(n)),Ge(n),u=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,id(u,d)?o=null:x!==null&&id(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=tf(t,n,CS,null,null,a),Po._currentValue=u),jl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&St&&((t=a=qt)&&(a=py(a,n.pendingProps,fi),a!==null?(n.stateNode=a,An=n,qt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return bg(t,n,a);case 4:return Ne(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Sr(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return mg(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gr(n),u=Rn(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return gg(t,n,n.type,n.pendingProps,a);case 15:return _g(t,n,n.type,n.pendingProps,a);case 19:return Ag(t,n,a);case 31:return FS(t,n,a);case 22:return vg(t,n,a,n.pendingProps);case 24:return gr(n),o=Rn(cn),t===null?(u=Wu(),u===null&&(u=Wt,d=ku(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},qu(n),La(n,cn,u)):((t.lanes&a)!==0&&(Yu(t,n),mo(n,null,null,a),po()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,cn,o)):(o=d.cache,La(n,cn,o),o!==u.cache&&Vu(n,[cn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ta(t){t.flags|=4}function Df(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(e0())t.flags|=8192;else throw xr=Nl,ju}else t.flags&=-16777217}function Cg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!k0(n))if(e0())t.flags|=8192;else throw xr=Nl,ju}function Yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ft():536870912,t.lanes|=n,hs|=n)}function yo(t,n){if(!St)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function zS(t,n,a){var o=n.pendingProps;switch(Iu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Qi(cn),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(es(n)?ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bu())),Yt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ta(n),d!==null?(Yt(n),Cg(n,d)):(Yt(n),Df(n,u,null,o,a))):d?d!==t.memoizedState?(ta(n),Yt(n),Cg(n,d)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ta(n),Yt(n),Df(n,u,t,o,a)),null;case 27:if(ht(n),a=te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=Re.current,es(n)?om(n):(t=P0(u,o,a),n.stateNode=t,ta(n))}return Yt(n),null;case 5:if(ht(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(d=Re.current,es(n))om(n);else{var x=cc(te.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[ln]=n,d[Sn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(wn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ta(n)}}return Yt(n),Df(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,es(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||b0(t.nodeValue,a)),t||Ua(n,!0)}else t=cc(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=es(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ln]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=Bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=es(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ln]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=Bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),Yt(n),null);case 4:return Xe(),t===null&&Jf(n.stateNode.containerInfo),Yt(n),null;case 10:return Qi(n.type),Yt(n),null;case 19:if(ne(sn),o=n.memoizedState,o===null)return Yt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)yo(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Pl(t),d!==null){for(n.flags|=128,yo(o,!1),t=d.updateQueue,n.updateQueue=t,Yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)nm(a,t),a=a.sibling;return ve(sn,sn.current&1|2),St&&Zi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>$l&&(n.flags|=128,u=!0,yo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Pl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Yl(n,t),yo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!St)return Yt(n),null}else 2*E()-o.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,u=!0,yo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=sn.current,ve(sn,u?a&1|2:a&1),St&&Zi(n,o.treeForkCount),t):(Yt(n),null);case 22:case 23:return Qn(n),Ju(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ne(_r),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(cn),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function BS(t,n){switch(Iu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Qi(cn),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(r(340));pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ne(sn),null;case 4:return Xe(),null;case 10:return Qi(n.type),null;case 22:case 23:return Qn(n),Ju(),t!==null&&ne(_r),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Qi(cn),null;case 25:return null;default:return null}}function wg(t,n){switch(Iu(n),n.tag){case 3:Qi(cn),Xe();break;case 26:case 27:case 5:ht(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:ne(sn);break;case 10:Qi(n.type);break;case 22:case 23:Qn(n),Ju(),t!==null&&ne(_r);break;case 24:Qi(cn)}}function Mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){Bt(n,n.return,A)}}function Ba(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var H=a,J=A;try{J()}catch(he){Bt(u,H,he)}}}o=o.next}while(o!==d)}}catch(he){Bt(n,n.return,he)}}function Dg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Sm(n,a)}catch(o){Bt(t,t.return,o)}}}function Ng(t,n,a){a.props=Mr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function Eo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Bt(t,n,u)}}function Pi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(t,n,u)}else a.current=null}function Ug(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Bt(t,t.return,u)}}function Nf(t,n,a){try{var o=t.stateNode;oy(o,t.type,a,n),o[Sn]=n}catch(u){Bt(t,t.return,u)}}function Lg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function Uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&ja(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Lf(t,n,a),t=t.sibling;t!==null;)Lf(t,n,a),t=t.sibling}function Zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ja(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Zl(t,n,a),t=t.sibling;t!==null;)Zl(t,n,a),t=t.sibling}function Og(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[ln]=t,n[Sn]=a}catch(d){Bt(t,t.return,d)}}var na=!1,dn=!1,Of=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function HS(t,n){if(t=t.containerInfo,td=gc,t=qp(t),Au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var x=0,A=-1,H=-1,J=0,he=0,_e=t,ee=null;t:for(;;){for(var le;_e!==a||u!==0&&_e.nodeType!==3||(A=x+u),_e!==d||o!==0&&_e.nodeType!==3||(H=x+o),_e.nodeType===3&&(x+=_e.nodeValue.length),(le=_e.firstChild)!==null;)ee=_e,_e=le;for(;;){if(_e===t)break t;if(ee===a&&++J===u&&(A=x),ee===d&&++he===o&&(H=x),(le=_e.nextSibling)!==null)break;_e=ee,ee=_e.parentNode}_e=le}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(nd={focusedElem:t,selectionRange:a},gc=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ke=Mr(a.type,u);t=o.getSnapshotBeforeUpdate(ke,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Bt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)rd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function Fg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:aa(t,a),o&4&&Mo(5,a);break;case 1:if(aa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Bt(a,a.return,x)}else{var u=Mr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Bt(a,a.return,x)}}o&64&&Dg(a),o&512&&Eo(a,a.return);break;case 3:if(aa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sm(t,n)}catch(x){Bt(a,a.return,x)}}break;case 27:n===null&&o&4&&Og(a);case 26:case 5:aa(t,a),n===null&&o&4&&Ug(a),o&512&&Eo(a,a.return);break;case 12:aa(t,a);break;case 31:aa(t,a),o&4&&Bg(t,a);break;case 13:aa(t,a),o&4&&Hg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ZS.bind(null,a),my(t,a))));break;case 22:if(o=a.memoizedState!==null||na,!o){n=n!==null&&n.memoizedState!==null||dn,u=na;var d=dn;na=o,(dn=n)&&!d?ra(t,a,(a.subtreeFlags&8772)!==0):aa(t,a),na=u,dn=d}break;case 30:break;default:aa(t,a)}}function Ig(t){var n=t.alternate;n!==null&&(t.alternate=null,Ig(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ks(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,Gn=!1;function ia(t,n,a){for(a=a.child;a!==null;)zg(t,n,a),a=a.sibling}function zg(t,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:dn||Pi(a,n),ia(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Pi(a,n);var o=Qt,u=Gn;ja(a.type)&&(Qt=a.stateNode,Gn=!1),ia(t,n,a),Uo(a.stateNode),Qt=o,Gn=u;break;case 5:dn||Pi(a,n);case 6:if(o=Qt,u=Gn,Qt=null,ia(t,n,a),Qt=o,Gn=u,Qt!==null)if(Gn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(d){Bt(a,n,d)}else try{Qt.removeChild(a.stateNode)}catch(d){Bt(a,n,d)}break;case 18:Qt!==null&&(Gn?(t=Qt,D0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ys(t)):D0(Qt,a.stateNode));break;case 4:o=Qt,u=Gn,Qt=a.stateNode.containerInfo,Gn=!0,ia(t,n,a),Qt=o,Gn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),dn||Ba(4,a,n),ia(t,n,a);break;case 1:dn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ng(a,n,o)),ia(t,n,a);break;case 21:ia(t,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,ia(t,n,a),dn=o;break;default:ia(t,n,a)}}function Bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ys(t)}catch(a){Bt(n,n.return,a)}}}function Hg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ys(t)}catch(a){Bt(n,n.return,a)}}function GS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Pg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Pg),n;default:throw Error(r(435,t.tag))}}function Kl(t,n){var a=GS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=KS.bind(null,t,o);o.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,x=n,A=x;e:for(;A!==null;){switch(A.tag){case 27:if(ja(A.type)){Qt=A.stateNode,Gn=!1;break e}break;case 5:Qt=A.stateNode,Gn=!1;break e;case 3:case 4:Qt=A.stateNode.containerInfo,Gn=!0;break e}A=A.return}if(Qt===null)throw Error(r(160));zg(d,x,u),Qt=null,Gn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Gg(n,t),n=n.sibling}var Ei=null;function Gg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(Ba(3,t,t.return),Mo(3,t),Ba(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(dn||a===null||Pi(a,a.return)),o&64&&na&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ei;if(Vn(n,t),kn(t),o&512&&(dn||a===null||Pi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[or]||d[ln]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),wn(d,o,a),d[ln]=t,R(d),o=d;break e;case"link":var x=G0("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(d=x[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;case"meta":if(x=G0("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(d=x[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[ln]=t,R(d),o=d}t.stateNode=o}else V0(u,t.type,t.stateNode);else t.stateNode=H0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?V0(u,t.type,t.stateNode):H0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(dn||a===null||Pi(a,a.return)),a!==null&&o&4&&Nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(dn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{pn(u,"")}catch(ke){Bt(t,t.return,ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Nf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Of=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ke){Bt(t,t.return,ke)}}break;case 3:if(dc=null,u=Ei,Ei=uc(n.containerInfo),Vn(n,t),Ei=u,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ys(n.containerInfo)}catch(ke){Bt(t,t.return,ke)}Of&&(Of=!1,Vg(t));break;case 4:o=Ei,Ei=uc(t.stateNode.containerInfo),Vn(n,t),kn(t),Ei=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,J=na,he=dn;if(na=J||u,dn=he||H,Vn(n,t),dn=he,na=J,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||na||dn||Er(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=H.stateNode;var _e=H.memoizedProps.style,ee=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;A.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(ke){Bt(H,H.return,ke)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(ke){Bt(H,H.return,ke)}}}else if(n.tag===18){if(a===null){H=n;try{var le=H.stateNode;u?N0(le,!0):N0(H.stateNode,!1)}catch(ke){Bt(H,H.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Kl(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Lg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Uf(t);Zl(t,d,u);break;case 5:var x=a.stateNode;a.flags&32&&(pn(x,""),a.flags&=-33);var A=Uf(t);Zl(t,A,x);break;case 3:case 4:var H=a.stateNode.containerInfo,J=Uf(t);Lf(t,J,H);break;default:throw Error(r(161))}}catch(he){Bt(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Vg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function aa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fg(t,n.alternate,n),n=n.sibling}function Er(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Er(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ng(n,n.return,a),Er(n);break;case 27:Uo(n.stateNode);case 26:case 5:Pi(n,n.return),Er(n);break;case 22:n.memoizedState===null&&Er(n);break;case 30:Er(n);break;default:Er(n)}t=t.sibling}}function ra(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:ra(u,d,a),Mo(4,d);break;case 1:if(ra(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Bt(o,o.return,J)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)xm(H[u],A)}catch(J){Bt(o,o.return,J)}}a&&x&64&&Dg(d),Eo(d,d.return);break;case 27:Og(d);case 26:case 5:ra(u,d,a),a&&o===null&&x&4&&Ug(d),Eo(d,d.return);break;case 12:ra(u,d,a);break;case 31:ra(u,d,a),a&&x&4&&Bg(u,d);break;case 13:ra(u,d,a),a&&x&4&&Hg(u,d);break;case 22:d.memoizedState===null&&ra(u,d,a),Eo(d,d.return);break;case 30:break;default:ra(u,d,a)}n=n.sibling}}function Pf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&lo(a))}function Ff(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t))}function bi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)kg(t,n,a,o),n=n.sibling}function kg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,o),u&2048&&Mo(9,n);break;case 1:bi(t,n,a,o);break;case 3:bi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t)));break;case 12:if(u&2048){bi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,A=d.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Bt(n,n.return,H)}}else bi(t,n,a,o);break;case 31:bi(t,n,a,o);break;case 13:bi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?bi(t,n,a,o):bo(t,n):d._visibility&2?bi(t,n,a,o):(d._visibility|=2,us(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Pf(x,n);break;case 24:bi(t,n,a,o),u&2048&&Ff(n.alternate,n);break;default:bi(t,n,a,o)}}function us(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,A=a,H=o,J=x.flags;switch(x.tag){case 0:case 11:case 15:us(d,x,A,H,u),Mo(8,x);break;case 23:break;case 22:var he=x.stateNode;x.memoizedState!==null?he._visibility&2?us(d,x,A,H,u):bo(d,x):(he._visibility|=2,us(d,x,A,H,u)),u&&J&2048&&Pf(x.alternate,x);break;case 24:us(d,x,A,H,u),u&&J&2048&&Ff(x.alternate,x);break;default:us(d,x,A,H,u)}n=n.sibling}}function bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:bo(a,o),u&2048&&Pf(o.alternate,o);break;case 24:bo(a,o),u&2048&&Ff(o.alternate,o);break;default:bo(a,o)}n=n.sibling}}var To=8192;function fs(t,n,a){if(t.subtreeFlags&To)for(t=t.child;t!==null;)Xg(t,n,a),t=t.sibling}function Xg(t,n,a){switch(t.tag){case 26:fs(t,n,a),t.flags&To&&t.memoizedState!==null&&Ry(a,Ei,t.memoizedState,t.memoizedProps);break;case 5:fs(t,n,a);break;case 3:case 4:var o=Ei;Ei=uc(t.stateNode.containerInfo),fs(t,n,a),Ei=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=To,To=16777216,fs(t,n,a),To=o):fs(t,n,a));break;default:fs(t,n,a)}}function Wg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ao(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,qg(o,t)}Wg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jg(t),t=t.sibling}function jg(t){switch(t.tag){case 0:case 11:case 15:Ao(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:Ao(t);break;case 12:Ao(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ql(t)):Ao(t);break;default:Ao(t)}}function Ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,qg(o,t)}Wg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}t=t.sibling}}function qg(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:lo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else e:for(a=t;vn!==null;){o=vn;var u=o.sibling,d=o.return;if(Ig(o),o===a){vn=null;break e}if(u!==null){u.return=d,vn=u;break e}vn=d}}}var VS={getCacheForType:function(t){var n=Rn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(cn).controller.signal}},kS=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Wt=null,mt=null,vt=0,zt=0,Jn=null,Ha=!1,ds=!1,If=!1,sa=0,an=0,Ga=0,br=0,zf=0,$n=0,hs=0,Ro=null,Xn=null,Bf=!1,Jl=0,Yg=0,$l=1/0,ec=null,Va=null,mn=0,ka=null,ps=null,oa=0,Hf=0,Gf=null,Zg=null,Co=0,Vf=null;function ei(){return(Nt&2)!==0&&vt!==0?vt&-vt:z.T!==null?Yf():Ys()}function Kg(){if($n===0)if((vt&536870912)===0||St){var t=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Wn(t,n,a){(t===Wt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(ms(t,0),Xa(t,vt,$n,!1)),Nn(t,a),((Nt&2)===0||t!==Wt)&&(t===Wt&&((Nt&2)===0&&(br|=a),an===4&&Xa(t,vt,$n,!1)),Fi(t))}function Qg(t,n,a){if((Nt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ce(t,n),u=o?jS(t,n):Xf(t,n,!0),d=o;do{if(u===0){ds&&!o&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!XS(a)){u=Xf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var A=t;u=Ro;var H=A.current.memoizedState.isDehydrated;if(H&&(ms(A,x).flags|=256),x=Xf(A,x,!1),x!==2){if(If&&!H){A.errorRecoveryDisabledLanes|=d,br|=d,u=4;break e}d=Xn,Xn=u,d!==null&&(Xn===null?Xn=d:Xn.push.apply(Xn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){ms(t,0),Xa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,$n,!Ha);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Jl+300-E(),10<u)){if(Xa(o,n,$n,!Ha),xe(o,0,!0)!==0)break e;oa=n,o.timeoutHandle=C0(Jg.bind(null,o,a,Xn,ec,Bf,n,$n,br,hs,Ha,d,"Throttled",-0,0),u);break e}Jg(o,a,Xn,ec,Bf,n,$n,br,hs,Ha,d,null,-0,0)}}break}while(!0);Fi(t)}function Jg(t,n,a,o,u,d,x,A,H,J,he,_e,ee,le){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Xg(n,d,_e);var ke=(d&62914560)===d?Jl-E():(d&4194048)===d?Yg-E():0;if(ke=Cy(_e,ke),ke!==null){oa=d,t.cancelPendingCommit=ke(s0.bind(null,t,n,d,a,o,u,x,A,H,he,_e,null,ee,le)),Xa(t,d,x,!J);return}}s0(t,n,d,a,o,u,x,A,H)}function XS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Yn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,o){n&=~zf,n&=~br,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Fe(u),x=1<<d;o[d]=-1,u&=~x}a!==0&&dl(t,a,n)}function tc(){return(Nt&6)===0?(wo(0),!1):!0}function kf(){if(mt!==null){if(zt===0)var t=mt.return;else t=mt,Ki=mr=null,rf(t),rs=null,uo=0,t=mt;for(;t!==null;)wg(t.alternate,t),t=t.return;mt=null}}function ms(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,uy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),oa=0,kf(),Wt=t,mt=a=Yi(t.current,null),vt=n,zt=0,Jn=null,Ha=!1,ds=Ce(t,n),If=!1,hs=$n=zf=br=Ga=an=0,Xn=Ro=null,Bf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),d=1<<u;n|=t[u],o&=~d}return sa=n,Ml(),a}function $g(t,n){lt=null,z.H=xo,n===as||n===Dl?(n=mm(),zt=3):n===ju?(n=mm(),zt=4):zt=n===yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,mt===null&&(an=1,Xl(t,li(n,t.current)))}function e0(){var t=Kn.current;return t===null?!0:(vt&4194048)===vt?di===null:(vt&62914560)===vt||(vt&536870912)!==0?t===di:!1}function t0(){var t=z.H;return z.H=xo,t===null?xo:t}function n0(){var t=z.A;return z.A=VS,t}function nc(){an=4,Ha||(vt&4194048)!==vt&&Kn.current!==null||(ds=!0),(Ga&134217727)===0&&(br&134217727)===0||Wt===null||Xa(Wt,vt,$n,!1)}function Xf(t,n,a){var o=Nt;Nt|=2;var u=t0(),d=n0();(Wt!==t||vt!==n)&&(ec=null,ms(t,n)),n=!1;var x=an;e:do try{if(zt!==0&&mt!==null){var A=mt,H=Jn;switch(zt){case 8:kf(),x=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var J=zt;if(zt=0,Jn=null,gs(t,A,H,J),a&&ds){x=0;break e}break;default:J=zt,zt=0,Jn=null,gs(t,A,H,J)}}WS(),x=an;break}catch(he){$g(t,he)}while(!0);return n&&t.shellSuspendCounter++,Ki=mr=null,Nt=o,z.H=u,z.A=d,mt===null&&(Wt=null,vt=0,Ml()),x}function WS(){for(;mt!==null;)i0(mt)}function jS(t,n){var a=Nt;Nt|=2;var o=t0(),u=n0();Wt!==t||vt!==n?(ec=null,$l=E()+500,ms(t,n)):ds=Ce(t,n);e:do try{if(zt!==0&&mt!==null){n=mt;var d=Jn;t:switch(zt){case 1:zt=0,Jn=null,gs(t,n,d,1);break;case 2:case 9:if(hm(d)){zt=0,Jn=null,a0(n);break}n=function(){zt!==2&&zt!==9||Wt!==t||(zt=7),Fi(t)},d.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:hm(d)?(zt=0,Jn=null,a0(n)):(zt=0,Jn=null,gs(t,n,d,7));break;case 5:var x=null;switch(mt.tag){case 26:x=mt.memoizedState;case 5:case 27:var A=mt;if(x?k0(x):A.stateNode.complete){zt=0,Jn=null;var H=A.sibling;if(H!==null)mt=H;else{var J=A.return;J!==null?(mt=J,ic(J)):mt=null}break t}}zt=0,Jn=null,gs(t,n,d,5);break;case 6:zt=0,Jn=null,gs(t,n,d,6);break;case 8:kf(),an=6;break e;default:throw Error(r(462))}}qS();break}catch(he){$g(t,he)}while(!0);return Ki=mr=null,z.H=o,z.A=u,Nt=a,mt!==null?0:(Wt=null,vt=0,Ml(),an)}function qS(){for(;mt!==null&&!Ye();)i0(mt)}function i0(t){var n=Rg(t.alternate,t,sa);t.memoizedProps=t.pendingProps,n===null?ic(t):mt=n}function a0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=yg(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=yg(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:rf(n);default:wg(a,n),n=mt=nm(n,sa),n=Rg(a,n,sa)}t.memoizedProps=t.pendingProps,n===null?ic(t):mt=n}function gs(t,n,a,o){Ki=mr=null,rf(n),rs=null,uo=0;var u=n.return;try{if(PS(t,u,n,a,vt)){an=1,Xl(t,li(a,t.current)),mt=null;return}}catch(d){if(u!==null)throw mt=u,d;an=1,Xl(t,li(a,t.current)),mt=null;return}n.flags&32768?(St||o===1?t=!0:ds||(vt&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=Kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),r0(n,t)):ic(n)}function ic(t){var n=t;do{if((n.flags&32768)!==0){r0(n,Ha);return}t=n.return;var a=zS(n.alternate,n,sa);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);an===0&&(an=5)}function r0(t,n){do{var a=BS(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);an=6,mt=null}function s0(t,n,a,o,u,d,x,A,H){t.cancelPendingCommit=null;do ac();while(mn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Nu,xi(t,a,d,x,A,H),t===Wt&&(mt=Wt=null,vt=0),ps=n,ka=t,oa=a,Hf=d,Gf=u,Zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,QS(ue,function(){return f0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=G.p,G.p=2,x=Nt,Nt|=4;try{HS(t,n,a)}finally{Nt=x,G.p=u,z.T=o}}mn=1,o0(),l0(),c0()}}function o0(){if(mn===1){mn=0;var t=ka,n=ps,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=G.p;G.p=2;var u=Nt;Nt|=4;try{Gg(n,t);var d=nd,x=qp(t.containerInfo),A=d.focusedElem,H=d.selectionRange;if(x!==A&&A&&A.ownerDocument&&jp(A.ownerDocument.documentElement,A)){if(H!==null&&Au(A)){var J=H.start,he=H.end;if(he===void 0&&(he=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(he,A.value.length);else{var _e=A.ownerDocument||document,ee=_e&&_e.defaultView||window;if(ee.getSelection){var le=ee.getSelection(),ke=A.textContent.length,tt=Math.min(H.start,ke),Xt=H.end===void 0?tt:Math.min(H.end,ke);!le.extend&&tt>Xt&&(x=Xt,Xt=tt,tt=x);var Y=Wp(A,tt),k=Wp(A,Xt);if(Y&&k&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var Q=_e.createRange();Q.setStart(Y.node,Y.offset),le.removeAllRanges(),tt>Xt?(le.addRange(Q),le.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),le.addRange(Q))}}}}for(_e=[],le=A;le=le.parentNode;)le.nodeType===1&&_e.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_e.length;A++){var ge=_e[A];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}gc=!!td,nd=td=null}finally{Nt=u,G.p=o,z.T=a}}t.current=n,mn=2}}function l0(){if(mn===2){mn=0;var t=ka,n=ps,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=G.p;G.p=2;var u=Nt;Nt|=4;try{Fg(t,n.alternate,n)}finally{Nt=u,G.p=o,z.T=a}}mn=3}}function c0(){if(mn===4||mn===3){mn=0,U();var t=ka,n=ps,a=oa,o=Zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,ps=ka=null,u0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Gr(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=G.p,G.p=2,z.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var A=o[x];d(A.value,{componentStack:A.stack})}}finally{z.T=n,G.p=u}}(oa&3)!==0&&ac(),Fi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Vf?Co++:(Co=0,Vf=t):Co=0,wo(0)}}function u0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,lo(n)))}function ac(){return o0(),l0(),c0(),f0()}function f0(){if(mn!==5)return!1;var t=ka,n=Hf;Hf=0;var a=Gr(oa),o=z.T,u=G.p;try{G.p=32>a?32:a,z.T=null,a=Gf,Gf=null;var d=ka,x=oa;if(mn=0,ps=ka=null,oa=0,(Nt&6)!==0)throw Error(r(331));var A=Nt;if(Nt|=4,jg(d.current),kg(d,d.current,x,a),Nt=A,wo(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(be,d)}catch{}return!0}finally{G.p=u,z.T=o,u0(t,n)}}function d0(t,n,a){n=li(a,n),n=Sf(t.stateNode,n,2),t=Fa(t,n,2),t!==null&&(Nn(t,2),Fi(t))}function Bt(t,n,a){if(t.tag===3)d0(t,t,a);else for(;n!==null;){if(n.tag===3){d0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=li(a,t),a=hg(2),o=Fa(n,a,2),o!==null&&(pg(a,o,n,t),Nn(o,2),Fi(o));break}}n=n.return}}function Wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new kS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(If=!0,u.add(a),t=YS.bind(null,t,n,a),n.then(t,t))}function YS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(vt&a)===a&&(an===4||an===3&&(vt&62914560)===vt&&300>E()-Jl?(Nt&2)===0&&ms(t,0):zf|=a,hs===vt&&(hs=0)),Fi(t)}function h0(t,n){n===0&&(n=Ft()),t=dr(t,n),t!==null&&(Nn(t,n),Fi(t))}function ZS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),h0(t,a)}function KS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),h0(t,a)}function QS(t,n){return Mt(t,n)}var rc=null,_s=null,jf=!1,sc=!1,qf=!1,Wa=0;function Fi(t){t!==_s&&t.next===null&&(_s===null?rc=_s=t:_s=_s.next=t),sc=!0,jf||(jf=!0,$S())}function wo(t,n){if(!qf&&sc){qf=!0;do for(var a=!1,o=rc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Fe(42|t)+1)-1,d&=u&~(x&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,_0(o,d))}else d=vt,d=xe(o,o===Wt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ce(o,d)||(a=!0,_0(o,d));o=o.next}while(a);qf=!1}}function JS(){p0()}function p0(){sc=jf=!1;var t=0;Wa!==0&&cy()&&(t=Wa);for(var n=E(),a=null,o=rc;o!==null;){var u=o.next,d=m0(o,n);d===0?(o.next=null,a===null?rc=u:a.next=u,u===null&&(_s=a)):(a=o,(t!==0||(d&3)!==0)&&(sc=!0)),o=u}mn!==0&&mn!==5||wo(t),Wa!==0&&(Wa=0)}function m0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Fe(d),A=1<<x,H=u[x];H===-1?((A&a)===0||(A&o)!==0)&&(u[x]=it(A,n)):H<=n&&(t.expiredLanes|=A),d&=~A}if(n=Wt,a=vt,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ut(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ut(o),Gr(a)){case 2:case 8:a=Se;break;case 32:a=ue;break;case 268435456:a=we;break;default:a=ue}return o=g0.bind(null,t),a=Mt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ut(o),t.callbackPriority=2,t.callbackNode=null,2}function g0(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ac()&&t.callbackNode!==a)return null;var o=vt;return o=xe(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Qg(t,o,n),m0(t,E()),t.callbackNode!=null&&t.callbackNode===a?g0.bind(null,t):null)}function _0(t,n){if(ac())return null;Qg(t,n,!0)}function $S(){fy(function(){(Nt&6)!==0?Mt(pe,JS):p0()})}function Yf(){if(Wa===0){var t=ns;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Wa=t}return Wa}function v0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pl(""+t)}function x0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ey(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=v0((u[Sn]||null).action),x=o.submitter;x&&(n=(n=x[Sn]||null)?v0(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var A=new vl("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var H=x?x0(u,x):new FormData(u);pf(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(A.preventDefault(),H=x?x0(u,x):new FormData(u),pf(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var Zf=0;Zf<Du.length;Zf++){var Kf=Du[Zf],ty=Kf.toLowerCase(),ny=Kf[0].toUpperCase()+Kf.slice(1);Mi(ty,"on"+ny)}Mi(Kp,"onAnimationEnd"),Mi(Qp,"onAnimationIteration"),Mi(Jp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(vS,"onTransitionRun"),Mi(xS,"onTransitionStart"),Mi(SS,"onTransitionCancel"),Mi($p,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function S0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],H=A.instance,J=A.currentTarget;if(A=A.listener,H!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=J;try{d(u)}catch(he){yl(he)}u.currentTarget=null,d=H}else for(x=0;x<o.length;x++){if(A=o[x],H=A.instance,J=A.currentTarget,A=A.listener,H!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=J;try{d(u)}catch(he){yl(he)}u.currentTarget=null,d=H}}}}function gt(t,n){var a=n[Vr];a===void 0&&(a=n[Vr]=new Set);var o=t+"__bubble";a.has(o)||(y0(n,t,2,!1),a.add(o))}function Qf(t,n,a){var o=0;n&&(o|=4),y0(a,t,o,n)}var oc="_reactListening"+Math.random().toString(36).slice(2);function Jf(t){if(!t[oc]){t[oc]=!0,q.forEach(function(a){a!=="selectionchange"&&(iy.has(a)||Qf(a,!1,t),Qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[oc]||(n[oc]=!0,Qf("selectionchange",!1,n))}}function y0(t,n,a,o){switch(K0(n)){case 2:var u=Ny;break;case 8:u=Uy;break;default:u=hd}a=u.bind(null,n,a,t),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function $f(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=Aa(A),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=d=x;continue e}A=A.parentNode}}o=o.return}Ap(function(){var J=d,he=mu(a),_e=[];e:{var ee=em.get(t);if(ee!==void 0){var le=vl,ke=t;switch(t){case"keypress":if(gl(a)===0)break e;case"keydown":case"keyup":le=Kx;break;case"focusin":ke="focus",le=yu;break;case"focusout":ke="blur",le=yu;break;case"beforeblur":case"afterblur":le=yu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=$x;break;case Kp:case Qp:case Jp:le=Gx;break;case $p:le=tS;break;case"scroll":case"scrollend":le=Fx;break;case"wheel":le=iS;break;case"copy":case"cut":case"paste":le=kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Np;break;case"toggle":case"beforetoggle":le=rS}var tt=(n&4)!==0,Xt=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?ee!==null?ee+"Capture":null:ee;tt=[];for(var k=J,Q;k!==null;){var ge=k;if(Q=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||Q===null||Y===null||(ge=Qs(k,Y),ge!=null&&tt.push(No(k,ge,Q))),Xt)break;k=k.return}0<tt.length&&(ee=new le(ee,ke,null,a,he),_e.push({event:ee,listeners:tt}))}}if((n&7)===0){e:{if(ee=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ee&&a!==pu&&(ke=a.relatedTarget||a.fromElement)&&(Aa(ke)||ke[Si]))break e;if((le||ee)&&(ee=he.window===he?he:(ee=he.ownerDocument)?ee.defaultView||ee.parentWindow:window,le?(ke=a.relatedTarget||a.toElement,le=J,ke=ke?Aa(ke):null,ke!==null&&(Xt=c(ke),tt=ke.tag,ke!==Xt||tt!==5&&tt!==27&&tt!==6)&&(ke=null)):(le=null,ke=J),le!==ke)){if(tt=wp,ge="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Np,ge="onPointerLeave",Y="onPointerEnter",k="pointer"),Xt=le==null?ee:lr(le),Q=ke==null?ee:lr(ke),ee=new tt(ge,k+"leave",le,a,he),ee.target=Xt,ee.relatedTarget=Q,ge=null,Aa(he)===J&&(tt=new tt(Y,k+"enter",ke,a,he),tt.target=Q,tt.relatedTarget=Xt,ge=tt),Xt=ge,le&&ke)t:{for(tt=ay,Y=le,k=ke,Q=0,ge=Y;ge;ge=tt(ge))Q++;ge=0;for(var Je=k;Je;Je=tt(Je))ge++;for(;0<Q-ge;)Y=tt(Y),Q--;for(;0<ge-Q;)k=tt(k),ge--;for(;Q--;){if(Y===k||k!==null&&Y===k.alternate){tt=Y;break t}Y=tt(Y),k=tt(k)}tt=null}else tt=null;le!==null&&M0(_e,ee,le,tt,!1),ke!==null&&Xt!==null&&M0(_e,Xt,ke,tt,!0)}}e:{if(ee=J?lr(J):window,le=ee.nodeName&&ee.nodeName.toLowerCase(),le==="select"||le==="input"&&ee.type==="file")var Tt=Bp;else if(Ip(ee))if(Hp)Tt=mS;else{Tt=hS;var Ze=dS}else le=ee.nodeName,!le||le.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?J&&yi(J.elementType)&&(Tt=Bp):Tt=pS;if(Tt&&(Tt=Tt(t,J))){zp(_e,Tt,a,he);break e}Ze&&Ze(t,ee,J),t==="focusout"&&J&&ee.type==="number"&&J.memoizedProps.value!=null&&Mn(ee,"number",ee.value)}switch(Ze=J?lr(J):window,t){case"focusin":(Ip(Ze)||Ze.contentEditable==="true")&&(Yr=Ze,Ru=J,ro=null);break;case"focusout":ro=Ru=Yr=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Yp(_e,a,he);break;case"selectionchange":if(_S)break;case"keydown":case"keyup":Yp(_e,a,he)}var ut;if(Eu)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else qr?Pp(t,a)&&(xt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(Up&&a.locale!=="ko"&&(qr||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&qr&&(ut=Rp()):(wa=he,vu="value"in wa?wa.value:wa.textContent,qr=!0)),Ze=lc(J,xt),0<Ze.length&&(xt=new Dp(xt,t,null,a,he),_e.push({event:xt,listeners:Ze}),ut?xt.data=ut:(ut=Fp(a),ut!==null&&(xt.data=ut)))),(ut=oS?lS(t,a):cS(t,a))&&(xt=lc(J,"onBeforeInput"),0<xt.length&&(Ze=new Dp("onBeforeInput","beforeinput",null,a,he),_e.push({event:Ze,listeners:xt}),Ze.data=ut)),ey(_e,t,J,a,he)}S0(_e,n)})}function No(t,n,a){return{instance:t,listener:n,currentTarget:a}}function lc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Qs(t,a),u!=null&&o.unshift(No(t,u,d)),u=Qs(t,n),u!=null&&o.push(No(t,u,d))),t.tag===3)return o;t=t.return}return[]}function ay(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function M0(t,n,a,o,u){for(var d=n._reactName,x=[];a!==null&&a!==o;){var A=a,H=A.alternate,J=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||J===null||(H=J,u?(J=Qs(a,d),J!=null&&x.unshift(No(a,J,H))):u||(J=Qs(a,d),J!=null&&x.push(No(a,J,H)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var ry=/\r\n?/g,sy=/\u0000|\uFFFD/g;function E0(t){return(typeof t=="string"?t:""+t).replace(ry,`
`).replace(sy,"")}function b0(t,n){return n=E0(n),E0(t)===n}function kt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(t,""+o);break;case"className":$e(t,"class",o);break;case"tabIndex":$e(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,a,o);break;case"style":Xr(t,o,d);break;case"data":if(n!=="object"){$e(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&kt(t,n,"name",u.name,u,null),kt(t,n,"formEncType",u.formEncType,u,null),kt(t,n,"formMethod",u.formMethod,u,null),kt(t,n,"formTarget",u.formTarget,u,null)):(kt(t,n,"encType",u.encType,u,null),kt(t,n,"method",u.method,u,null),kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ji);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=pl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),je(t,"popover",o);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":je(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ox.get(a)||a,je(t,a,o))}}function ed(t,n,a,o,u,d){switch(a){case"style":Xr(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?pn(t,o):(typeof o=="number"||typeof o=="bigint")&&pn(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Sn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):je(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,d,x,a,null)}}u&&kt(t,n,"srcSet",a.srcSet,a,null),o&&kt(t,n,"src",a.src,a,null);return;case"input":gt("invalid",t);var A=d=x=u=null,H=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var he=a[o];if(he!=null)switch(o){case"name":u=he;break;case"type":x=he;break;case"checked":H=he;break;case"defaultChecked":J=he;break;case"value":d=he;break;case"defaultValue":A=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:kt(t,n,o,he,a,null)}}Wi(t,d,A,H,J,x,u,!1);return;case"select":gt("invalid",t),o=x=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:kt(t,n,u,A,a,null)}n=d,a=x,t.multiple=!!o,n!=null?si(t,!!o,n,!1):a!=null&&si(t,!!o,a,!0);return;case"textarea":gt("invalid",t),d=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:kt(t,n,x,A,a,null)}En(t,o,u,d);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":kt(t,n,H,o,a,null));return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<Do.length;o++)gt(Do[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,J,o,a,null)}return;default:if(yi(n)){for(he in a)a.hasOwnProperty(he)&&(o=a[he],o!==void 0&&ed(t,n,he,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&kt(t,n,A,o,a,null))}function oy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,A=null,H=null,J=null,he=null;for(le in a){var _e=a[le];if(a.hasOwnProperty(le)&&_e!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":H=_e;default:o.hasOwnProperty(le)||kt(t,n,le,null,o,_e)}}for(var ee in o){var le=o[ee];if(_e=a[ee],o.hasOwnProperty(ee)&&(le!=null||_e!=null))switch(ee){case"type":d=le;break;case"name":u=le;break;case"checked":J=le;break;case"defaultChecked":he=le;break;case"value":x=le;break;case"defaultValue":A=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==_e&&kt(t,n,ee,le,o,_e)}}yn(t,x,A,H,J,he,d,u);return;case"select":le=x=A=ee=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":le=H;default:o.hasOwnProperty(d)||kt(t,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":ee=d;break;case"defaultValue":A=d;break;case"multiple":x=d;default:d!==H&&kt(t,n,u,d,o,H)}n=A,a=x,o=le,ee!=null?si(t,!!a,ee,!1):!!o!=!!a&&(n!=null?si(t,!!a,n,!0):si(t,!!a,a?[]:"",!1));return;case"textarea":le=ee=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:kt(t,n,A,null,o,u)}for(x in o)if(u=o[x],d=a[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":ee=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&kt(t,n,x,u,o,d)}It(t,ee,le);return;case"option":for(var ke in a)ee=a[ke],a.hasOwnProperty(ke)&&ee!=null&&!o.hasOwnProperty(ke)&&(ke==="selected"?t.selected=!1:kt(t,n,ke,null,o,ee));for(H in o)ee=o[H],le=a[H],o.hasOwnProperty(H)&&ee!==le&&(ee!=null||le!=null)&&(H==="selected"?t.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":kt(t,n,H,ee,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ee=a[tt],a.hasOwnProperty(tt)&&ee!=null&&!o.hasOwnProperty(tt)&&kt(t,n,tt,null,o,ee);for(J in o)if(ee=o[J],le=a[J],o.hasOwnProperty(J)&&ee!==le&&(ee!=null||le!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(r(137,n));break;default:kt(t,n,J,ee,o,le)}return;default:if(yi(n)){for(var Xt in a)ee=a[Xt],a.hasOwnProperty(Xt)&&ee!==void 0&&!o.hasOwnProperty(Xt)&&ed(t,n,Xt,void 0,o,ee);for(he in o)ee=o[he],le=a[he],!o.hasOwnProperty(he)||ee===le||ee===void 0&&le===void 0||ed(t,n,he,ee,o,le);return}}for(var Y in a)ee=a[Y],a.hasOwnProperty(Y)&&ee!=null&&!o.hasOwnProperty(Y)&&kt(t,n,Y,null,o,ee);for(_e in o)ee=o[_e],le=a[_e],!o.hasOwnProperty(_e)||ee===le||ee==null&&le==null||kt(t,n,_e,ee,o,le)}function T0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ly(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,x=u.initiatorType,A=u.duration;if(d&&A&&T0(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],J=H.startTime;if(J>A)break;var he=H.transferSize,_e=H.initiatorType;he&&T0(_e)&&(H=H.responseEnd,x+=he*(H<A?1:(A-J)/(H-J)))}if(--o,n+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var td=null,nd=null;function cc(t){return t.nodeType===9?t:t.ownerDocument}function A0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function id(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ad=null;function cy(){var t=window.event;return t&&t.type==="popstate"?t===ad?!1:(ad=t,!0):(ad=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(t){return w0.resolve(null).then(t).catch(dy)}:C0;function dy(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function D0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),ys(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Uo(a);for(var d=a.firstChild;d;){var x=d.nextSibling,A=d.nodeName;d[or]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&Uo(t.ownerDocument.body);a=u}while(a);ys(n)}function N0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),Ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function hy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[or])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function py(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function U0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hi(t.nextSibling),t===null))return null;return t}function sd(t){return t.data==="$?"||t.data==="$~"}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function my(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ld=null;function L0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return hi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function O0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function P0(t,n,a){switch(n=cc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ks(t)}var pi=new Map,F0=new Set;function uc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=G.d;G.d={f:gy,r:_y,D:vy,C:xy,L:Sy,m:yy,X:Ey,S:My,M:by};function gy(){var t=la.f(),n=tc();return t||n}function _y(t){var n=Ra(t);n!==null&&n.tag===5&&n.type==="form"?$m(n):la.r(t)}var vs=typeof document>"u"?null:document;function I0(t,n,a){var o=vs;if(o&&typeof n=="string"&&n){var u=at(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),F0.has(u)||(F0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),R(n),o.head.appendChild(n)))}}function vy(t){la.D(t),I0("dns-prefetch",t,null)}function xy(t,n){la.C(t,n),I0("preconnect",t,n)}function Sy(t,n,a){la.L(t,n,a);var o=vs;if(o&&t&&n){var u='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+at(a.imageSizes)+'"]')):u+='[href="'+at(t)+'"]';var d=u;switch(n){case"style":d=xs(t);break;case"script":d=Ss(t)}pi.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Lo(d))||n==="script"&&o.querySelector(Oo(d))||(n=o.createElement("link"),wn(n,"link",t),R(n),o.head.appendChild(n)))}}function yy(t,n){la.m(t,n);var a=vs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+at(o)+'"][href="'+at(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ss(t)}if(!pi.has(d)&&(t=g({rel:"modulepreload",href:t},n),pi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oo(d)))return}o=a.createElement("link"),wn(o,"link",t),R(o),a.head.appendChild(o)}}}function My(t,n,a){la.S(t,n,a);var o=vs;if(o&&t){var u=Ca(o).hoistableStyles,d=xs(t);n=n||"default";var x=u.get(d);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Lo(d)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(d))&&cd(t,a);var H=x=o.createElement("link");R(H),wn(H,"link",t),H._p=new Promise(function(J,he){H.onload=J,H.onerror=he}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,fc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(d,x)}}}function Ey(t,n){la.X(t,n);var a=vs;if(a&&t){var o=Ca(a).hoistableScripts,u=Ss(t),d=o.get(u);d||(d=a.querySelector(Oo(u)),d||(t=g({src:t,async:!0},n),(n=pi.get(u))&&ud(t,n),d=a.createElement("script"),R(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function by(t,n){la.M(t,n);var a=vs;if(a&&t){var o=Ca(a).hoistableScripts,u=Ss(t),d=o.get(u);d||(d=a.querySelector(Oo(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=pi.get(u))&&ud(t,n),d=a.createElement("script"),R(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function z0(t,n,a,o){var u=(u=te.current)?uc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xs(a.href),a=Ca(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xs(a.href);var d=Ca(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(Lo(t)))&&!d._p&&(x.instance=d,x.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),d||Ty(u,t,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ss(a),a=Ca(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function xs(t){return'href="'+at(t)+'"'}function Lo(t){return'link[rel="stylesheet"]['+t+"]"}function B0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ty(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),R(n),t.head.appendChild(n))}function Ss(t){return'[src="'+at(t)+'"]'}function Oo(t){return"script[async]"+t}function H0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+at(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),R(o),wn(o,"style",u),fc(o,a.precedence,t),n.instance=o;case"stylesheet":u=xs(a.href);var d=t.querySelector(Lo(u));if(d)return n.state.loading|=4,n.instance=d,R(d),d;o=B0(a),(u=pi.get(u))&&cd(o,u),d=(t.ownerDocument||t).createElement("link"),R(d);var x=d;return x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),wn(d,"link",o),n.state.loading|=4,fc(d,a.precedence,t),n.instance=d;case"script":return d=Ss(a.src),(u=t.querySelector(Oo(d)))?(n.instance=u,R(u),u):(o=a,(u=pi.get(d))&&(o=g({},a),ud(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),R(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fc(o,a.precedence,t));return n.instance}function fc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var dc=null;function G0(t,n,a){if(dc===null){var o=new Map,u=dc=new Map;u.set(a,o)}else u=dc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[or]||d[ln]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var A=o.get(x);A?A.push(d):o.set(x,[d])}}return o}function V0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ay(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function k0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ry(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xs(o.href),d=n.querySelector(Lo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,R(d);return}d=n.ownerDocument||n,o=B0(o),(u=pi.get(u))&&cd(o,u),d=d.createElement("link"),R(d);var x=d;x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),wn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var fd=0;function Cy(t,n){return t.stylesheets&&t.count===0&&mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&fd===0&&(fd=62500*ly());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>fd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pc=null;function mc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pc=new Map,n.forEach(wy,t),pc=null,hc.call(t))}function wy(t,n){if(!(n.state.loading&4)){var a=pc.get(t);if(a)var o=a.get(null);else{a=new Map,pc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,u),a.set(x,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Po={$$typeof:N,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function Dy(t,n,a,o,u,d,x,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function X0(t,n,a,o,u,d,x,A,H,J,he,_e){return t=new Dy(t,n,a,x,H,J,he,_e,A),n=1,d===!0&&(n|=24),d=Zn(3,null,null,n),t.current=d,d.stateNode=t,n=ku(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},qu(d),t}function W0(t){return t?(t=Qr,t):Qr}function j0(t,n,a,o,u,d){u=W0(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Fa(t,o,n),a!==null&&(Wn(a,t,n),ho(a,t,n))}function q0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dd(t,n){q0(t,n),(t=t.alternate)&&q0(t,n)}function Y0(t){if(t.tag===13||t.tag===31){var n=dr(t,67108864);n!==null&&Wn(n,t,67108864),dd(t,67108864)}}function Z0(t){if(t.tag===13||t.tag===31){var n=ei();n=qs(n);var a=dr(t,n);a!==null&&Wn(a,t,n),dd(t,n)}}var gc=!0;function Ny(t,n,a,o){var u=z.T;z.T=null;var d=G.p;try{G.p=2,hd(t,n,a,o)}finally{G.p=d,z.T=u}}function Uy(t,n,a,o){var u=z.T;z.T=null;var d=G.p;try{G.p=8,hd(t,n,a,o)}finally{G.p=d,z.T=u}}function hd(t,n,a,o){if(gc){var u=pd(o);if(u===null)$f(t,n,o,_c,a),Q0(t,o);else if(Oy(u,t,n,a,o))o.stopPropagation();else if(Q0(t,o),n&4&&-1<Ly.indexOf(t)){for(;u!==null;){var d=Ra(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Me(d.pendingLanes);if(x!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var H=1<<31-Fe(x);A.entanglements[1]|=H,x&=~H}Fi(d),(Nt&6)===0&&($l=E()+500,wo(0))}}break;case 31:case 13:A=dr(d,2),A!==null&&Wn(A,d,2),tc(),dd(d,2)}if(d=pd(o),d===null&&$f(t,n,o,_c,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else $f(t,n,o,null,a)}}function pd(t){return t=mu(t),md(t)}var _c=null;function md(t){if(_c=null,t=Aa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return _c=t,null}function K0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case pe:return 2;case Se:return 8;case ue:case Ke:return 32;case we:return 268435456;default:return 32}default:return 32}}var gd=!1,qa=null,Ya=null,Za=null,Fo=new Map,Io=new Map,Ka=[],Ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q0(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(n.pointerId)}}function zo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&Y0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Oy(t,n,a,o,u){switch(n){case"focusin":return qa=zo(qa,t,n,a,o,u),!0;case"dragenter":return Ya=zo(Ya,t,n,a,o,u),!0;case"mouseover":return Za=zo(Za,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Fo.set(d,zo(Fo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Io.set(d,zo(Io.get(d)||null,t,n,a,o,u)),!0}return!1}function J0(t){var n=Aa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Ui(t.priority,function(){Z0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ui(t.priority,function(){Z0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=pd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);pu=o,a.target.dispatchEvent(o),pu=null}else return n=Ra(a),n!==null&&Y0(n),t.blockedOn=a,!1;n.shift()}return!0}function $0(t,n,a){vc(t)&&a.delete(n)}function Py(){gd=!1,qa!==null&&vc(qa)&&(qa=null),Ya!==null&&vc(Ya)&&(Ya=null),Za!==null&&vc(Za)&&(Za=null),Fo.forEach($0),Io.forEach($0)}function xc(t,n){t.blockedOn===n&&(t.blockedOn=null,gd||(gd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Py)))}var Sc=null;function e_(t){Sc!==t&&(Sc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Sc===t&&(Sc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(md(o||a)===null)continue;break}var d=Ra(a);d!==null&&(t.splice(n,3),n-=3,pf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ys(t){function n(H){return xc(H,t)}qa!==null&&xc(qa,t),Ya!==null&&xc(Ya,t),Za!==null&&xc(Za,t),Fo.forEach(n),Io.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)J0(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],x=u[Sn]||null;if(typeof d=="function")x||e_(a);else if(x){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Sn]||null)A=x.formAction;else if(md(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),e_(a)}}}function t_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _d(t){this._internalRoot=t}yc.prototype.render=_d.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ei();j0(a,o,t,n,null,null)},yc.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;j0(t.current,2,null,t,null,null),tc(),n[Si]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ys();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&J0(t)}};var n_=e.version;if(n_!=="19.2.3")throw Error(r(527,n_,"19.2.3"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Fy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{be=Mc.inject(Fy),Te=Mc}catch{}}return Ho.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=cg,d=ug,x=fg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=X0(t,1,!1,null,null,a,o,null,u,d,x,t_),t[Si]=n.current,Jf(t),new _d(n)},Ho.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=cg,x=ug,A=fg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=X0(t,1,!0,n,a??null,o,u,H,d,x,A,t_),n.context=W0(null),a=n.current,o=ei(),o=qs(o),u=Pa(o),u.callback=null,Fa(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Fi(n),t[Si]=n.current,Jf(t),new yc(n)},Ho.version="19.2.3",Ho}var d_;function jy(){if(d_)return Sd.exports;d_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Sd.exports=Wy(),Sd.exports}var qy=jy();var h_="popstate";function Yy(s={}){function e(l,c){let{pathname:f="/",search:h="",hash:m=""}=Ir(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),rh("",{pathname:f,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:Jo(c))}function r(l,c){_i(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Ky(e,i,r,s)}function Jt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function _i(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Zy(){return Math.random().toString(36).substring(2,10)}function p_(s,e){return{usr:s.state,key:s.key,idx:e}}function rh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ir(e):e,state:i,key:e&&e.key||r||Zy()}}function Jo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ir(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function Ky(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=_();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function _(){return(f.state||{idx:null}).idx}function g(){h="POP";let y=_(),v=y==null?null:y-p;p=y,m&&m({action:h,location:T.location,delta:v})}function S(y,v){h="PUSH";let w=rh(T.location,y,v);i&&i(w,y),p=_()+1;let N=p_(w,p),O=T.createHref(w);try{f.pushState(N,"",O)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(O)}c&&m&&m({action:h,location:T.location,delta:1})}function M(y,v){h="REPLACE";let w=rh(T.location,y,v);i&&i(w,y),p=_();let N=p_(w,p),O=T.createHref(w);f.replaceState(N,"",O),c&&m&&m({action:h,location:T.location,delta:0})}function b(y){return Qy(y)}let T={get action(){return h},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(h_,g),m=y,()=>{l.removeEventListener(h_,g),m=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let v=b(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:S,replace:M,go(y){return f.go(y)}};return T}function Qy(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Jo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Sv(s,e,i="/"){return Jy(s,e,i,!1)}function Jy(s,e,i,r){let l=typeof e=="string"?Ir(e):e,c=Sa(l.pathname||"/",i);if(c==null)return null;let f=yv(s);$y(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=uM(c);h=lM(f[m],p,r)}return h}function yv(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let _={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(r)&&m)return;Jt(_.relativePath.startsWith(r),`Absolute route path "${_.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(r.length)}let g=ga([r,_.relativePath]),S=i.concat(_);f.children&&f.children.length>0&&(Jt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),yv(f.children,e,S,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:sM(g,f.index),routesMeta:S})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Mv(f.path))c(f,h,!0,m)}),e}function Mv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Mv(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function $y(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:oM(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var eM=/^:[\w-]+$/,tM=3,nM=2,iM=1,aM=10,rM=-2,m_=s=>s==="*";function sM(s,e){let i=s.split("/"),r=i.length;return i.some(m_)&&(r+=rM),e&&(r+=nM),i.filter(l=>!m_(l)).reduce((l,c)=>l+(eM.test(c)?tM:c===""?iM:aM),r)}function oM(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function lM(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,_=c==="/"?e:e.slice(c.length)||"/",g=nu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_),S=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=nu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:ga([c,g.pathname]),pathnameBase:pM(ga([c,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(c=ga([c,g.pathnameBase]))}return f}function nu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=cM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:_,isOptional:g},S)=>{if(_==="*"){let b=h[S]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const M=h[S];return g&&!M?p[_]=void 0:p[_]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function cM(s,e=!1,i=!0){_i(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function uM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return _i(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Sa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var Ev=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fM=s=>Ev.test(s);function dM(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ir(s):s,c;if(i)if(fM(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),_i(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=g_(i.substring(1),"/"):c=g_(i,e)}else c=e;return{pathname:c,search:mM(r),hash:gM(l)}}function g_(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function bd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function bv(s){let e=hM(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Tv(s,e,i,r=!1){let l;typeof s=="string"?l=Ir(s):(l={...s},Jt(!l.pathname||!l.pathname.includes("?"),bd("?","pathname","search",l)),Jt(!l.pathname||!l.pathname.includes("#"),bd("#","pathname","hash",l)),Jt(!l.search||!l.search.includes("#"),bd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!r&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),g-=1;l.pathname=S.join("/")}h=g>=0?e[g]:"/"}let m=dM(l,h),p=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var ga=s=>s.join("/").replace(/\/\/+/g,"/"),pM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),mM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,gM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,_M=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function vM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function xM(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Av=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Rv(s,e){let i=s;if(typeof i!="string"||!Ev.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(Av)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=Sa(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{_i(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Cv=["POST","PUT","PATCH","DELETE"];new Set(Cv);var SM=["GET",...Cv];new Set(SM);var ks=ce.createContext(null);ks.displayName="DataRouter";var su=ce.createContext(null);su.displayName="DataRouterState";var yM=ce.createContext(!1),wv=ce.createContext({isTransitioning:!1});wv.displayName="ViewTransition";var MM=ce.createContext(new Map);MM.displayName="Fetchers";var EM=ce.createContext(null);EM.displayName="Await";var vi=ce.createContext(null);vi.displayName="Navigation";var al=ce.createContext(null);al.displayName="Location";var Ta=ce.createContext({outlet:null,matches:[],isDataRoute:!1});Ta.displayName="Route";var ap=ce.createContext(null);ap.displayName="RouteError";var Dv="REACT_ROUTER_ERROR",bM="REDIRECT",TM="ROUTE_ERROR_RESPONSE";function AM(s){if(s.startsWith(`${Dv}:${bM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function RM(s){if(s.startsWith(`${Dv}:${TM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new _M(e.status,e.statusText,e.data)}catch{}}function CM(s,{relative:e}={}){Jt(rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ce.useContext(vi),{hash:l,pathname:c,search:f}=sl(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:ga([i,c])),r.createHref({pathname:h,search:f,hash:l})}function rl(){return ce.useContext(al)!=null}function zr(){return Jt(rl(),"useLocation() may be used only in the context of a <Router> component."),ce.useContext(al).location}var Nv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Uv(s){ce.useContext(vi).static||ce.useLayoutEffect(s)}function wM(){let{isDataRoute:s}=ce.useContext(Ta);return s?VM():DM()}function DM(){Jt(rl(),"useNavigate() may be used only in the context of a <Router> component.");let s=ce.useContext(ks),{basename:e,navigator:i}=ce.useContext(vi),{matches:r}=ce.useContext(Ta),{pathname:l}=zr(),c=JSON.stringify(bv(r)),f=ce.useRef(!1);return Uv(()=>{f.current=!0}),ce.useCallback((m,p={})=>{if(_i(f.current,Nv),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=Tv(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:ga([e,_.pathname])),(p.replace?i.replace:i.push)(_,p.state,p)},[e,i,c,l,s])}ce.createContext(null);function sl(s,{relative:e}={}){let{matches:i}=ce.useContext(Ta),{pathname:r}=zr(),l=JSON.stringify(bv(i));return ce.useMemo(()=>Tv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function NM(s,e){return Lv(s,e)}function Lv(s,e,i,r,l){Jt(rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=ce.useContext(vi),{matches:f}=ce.useContext(Ta),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",_=h?h.pathnameBase:"/",g=h&&h.route;{let w=g&&g.path||"";Pv(p,!g||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let S=zr(),M;if(e){let w=typeof e=="string"?Ir(e):e;Jt(_==="/"||w.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${w.pathname}" was given in the \`location\` prop.`),M=w}else M=S;let b=M.pathname||"/",T=b;if(_!=="/"){let w=_.replace(/^\//,"").split("/");T="/"+b.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=Sv(s,{pathname:T});_i(g||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),_i(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=FM(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},m,w.params),pathname:ga([_,c.encodeLocation?c.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?_:ga([_,c.encodeLocation?c.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),f,i,r,l);return e&&v?ce.createElement(al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},v):v}function UM(){let s=GM(),e=vM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=ce.createElement(ce.Fragment,null,ce.createElement("p",null,"💿 Hey developer 👋"),ce.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ce.createElement("code",{style:c},"ErrorBoundary")," or"," ",ce.createElement("code",{style:c},"errorElement")," prop on your route.")),ce.createElement(ce.Fragment,null,ce.createElement("h2",null,"Unexpected Application Error!"),ce.createElement("h3",{style:{fontStyle:"italic"}},e),i?ce.createElement("pre",{style:l},i):null,f)}var LM=ce.createElement(UM,null),Ov=class extends ce.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=RM(s.digest);i&&(s=i)}let e=s!==void 0?ce.createElement(Ta.Provider,{value:this.props.routeContext},ce.createElement(ap.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?ce.createElement(OM,{error:s},e):e}};Ov.contextType=yM;var Td=new WeakMap;function OM({children:s,error:e}){let{basename:i}=ce.useContext(vi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=AM(e.digest);if(r){let l=Td.get(e);if(l)throw l;let c=Rv(r.location,i);if(Av&&!Td.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Td.set(e,f),f}return ce.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function PM({routeContext:s,match:e,children:i}){let r=ce.useContext(ks);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ce.createElement(Ta.Provider,{value:s},i)}function FM(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let _=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Jt(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,_+1))}let h=!1,m=-1;if(i)for(let _=0;_<c.length;_++){let g=c[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=_),g.route.id){let{loaderData:S,errors:M}=i,b=g.route.loader&&!S.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||b){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(_,g)=>{r(_,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:xM(i.matches),errorInfo:g})}:void 0;return c.reduceRight((_,g,S)=>{let M,b=!1,T=null,y=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||LM,h&&(m<0&&S===0?(Pv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):m===S&&(b=!0,y=g.route.hydrateFallbackElement||null)));let v=e.concat(c.slice(0,S+1)),w=()=>{let N;return M?N=T:b?N=y:g.route.Component?N=ce.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=_,ce.createElement(PM,{match:g,routeContext:{outlet:_,matches:v,isDataRoute:i!=null},children:N})};return i&&(g.route.ErrorBoundary||g.route.errorElement||S===0)?ce.createElement(Ov,{location:i.location,revalidation:i.revalidation,component:T,error:M,children:w(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:p}):w()},null)}function rp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function IM(s){let e=ce.useContext(ks);return Jt(e,rp(s)),e}function zM(s){let e=ce.useContext(su);return Jt(e,rp(s)),e}function BM(s){let e=ce.useContext(Ta);return Jt(e,rp(s)),e}function sp(s){let e=BM(s),i=e.matches[e.matches.length-1];return Jt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function HM(){return sp("useRouteId")}function GM(){let s=ce.useContext(ap),e=zM("useRouteError"),i=sp("useRouteError");return s!==void 0?s:e.errors?.[i]}function VM(){let{router:s}=IM("useNavigate"),e=sp("useNavigate"),i=ce.useRef(!1);return Uv(()=>{i.current=!0}),ce.useCallback(async(l,c={})=>{_i(i.current,Nv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var __={};function Pv(s,e,i){!e&&!__[s]&&(__[s]=!0,_i(!1,i))}ce.memo(kM);function kM({routes:s,future:e,state:i,onError:r}){return Lv(s,void 0,i,r,e)}function Zo(s){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function XM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){Jt(!rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=ce.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Ir(i));let{pathname:p="/",search:_="",hash:g="",state:S=null,key:M="default"}=i,b=ce.useMemo(()=>{let T=Sa(p,h);return T==null?null:{location:{pathname:T,search:_,hash:g,state:S,key:M},navigationType:r}},[h,p,_,g,S,M,r]);return _i(b!=null,`<Router basename="${h}"> is not able to match the URL "${p}${_}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:ce.createElement(vi.Provider,{value:m},ce.createElement(al.Provider,{children:e,value:b}))}function WM({children:s,location:e}){return NM(sh(s),e)}function sh(s,e=[]){let i=[];return ce.Children.forEach(s,(r,l)=>{if(!ce.isValidElement(r))return;let c=[...e,l];if(r.type===ce.Fragment){i.push.apply(i,sh(r.props.children,c));return}Jt(r.type===Zo,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=sh(r.props.children,c)),i.push(f)}),i}var Yc="get",Zc="application/x-www-form-urlencoded";function ou(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function jM(s){return ou(s)&&s.tagName.toLowerCase()==="button"}function qM(s){return ou(s)&&s.tagName.toLowerCase()==="form"}function YM(s){return ou(s)&&s.tagName.toLowerCase()==="input"}function ZM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function KM(s,e){return s.button===0&&(!e||e==="_self")&&!ZM(s)}var Ec=null;function QM(){if(Ec===null)try{new FormData(document.createElement("form"),0),Ec=!1}catch{Ec=!0}return Ec}var JM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ad(s){return s!=null&&!JM.has(s)?(_i(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zc}"`),null):s}function $M(s,e){let i,r,l,c,f;if(qM(s)){let h=s.getAttribute("action");r=h?Sa(h,e):null,i=s.getAttribute("method")||Yc,l=Ad(s.getAttribute("enctype"))||Zc,c=new FormData(s)}else if(jM(s)||YM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?Sa(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Yc,l=Ad(s.getAttribute("formenctype"))||Ad(h.getAttribute("enctype"))||Zc,c=new FormData(h,s),!QM()){let{name:p,type:_,value:g}=s;if(_==="image"){let S=p?`${p}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else p&&c.append(p,g)}}else{if(ou(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Yc,r=null,l=Zc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function op(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function eE(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&Sa(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function tE(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function nE(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function iE(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await tE(c,i);return f.links?f.links():[]}return[]}));return oE(r.flat(1).filter(nE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function v_(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function aE(s,e,{includeHydrateFallback:i}={}){return rE(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function rE(s){return[...new Set(s)]}function sE(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function oE(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(sE(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Fv(){let s=ce.useContext(ks);return op(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function lE(){let s=ce.useContext(su);return op(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var lp=ce.createContext(void 0);lp.displayName="FrameworkContext";function Iv(){let s=ce.useContext(lp);return op(s,"You must render this element inside a <HydratedRouter> element"),s}function cE(s,e){let i=ce.useContext(lp),[r,l]=ce.useState(!1),[c,f]=ce.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:g}=e,S=ce.useRef(null);ce.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=v=>{v.forEach(w=>{f(w.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return S.current&&y.observe(S.current),()=>{y.disconnect()}}},[s]),ce.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,S,{}]:[c,S,{onFocus:Go(h,M),onBlur:Go(m,b),onMouseEnter:Go(p,M),onMouseLeave:Go(_,b),onTouchStart:Go(g,M)}]:[!1,S,{}]}function Go(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function uE({page:s,...e}){let{router:i}=Fv(),r=ce.useMemo(()=>Sv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ce.createElement(dE,{page:s,matches:r,...e}):null}function fE(s){let{manifest:e,routeModules:i}=Iv(),[r,l]=ce.useState([]);return ce.useEffect(()=>{let c=!1;return iE(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function dE({page:s,matches:e,...i}){let r=zr(),{manifest:l,routeModules:c}=Iv(),{basename:f}=Fv(),{loaderData:h,matches:m}=lE(),p=ce.useMemo(()=>v_(s,e,m,l,r,"data"),[s,e,m,l,r]),_=ce.useMemo(()=>v_(s,e,m,l,r,"assets"),[s,e,m,l,r]),g=ce.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let b=new Set,T=!1;if(e.forEach(v=>{let w=l.routes[v.route.id];!w||!w.hasLoader||(!p.some(N=>N.route.id===v.route.id)&&v.route.id in h&&c[v.route.id]?.shouldRevalidate||w.hasClientLoader?T=!0:b.add(v.route.id))}),b.size===0)return[];let y=eE(s,f,"data");return T&&b.size>0&&y.searchParams.set("_routes",e.filter(v=>b.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[f,h,r,l,p,e,s,c]),S=ce.useMemo(()=>aE(_,l),[_,l]),M=fE(_);return ce.createElement(ce.Fragment,null,g.map(b=>ce.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),S.map(b=>ce.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),M.map(({key:b,link:T})=>ce.createElement("link",{key:b,nonce:i.nonce,...T})))}function hE(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var pE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{pE&&(window.__reactRouterVersion="7.11.0")}catch{}function mE({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=ce.useRef();l.current==null&&(l.current=Yy({window:r,v5Compat:!0}));let c=l.current,[f,h]=ce.useState({action:c.action,location:c.location}),m=ce.useCallback(p=>{i===!1?h(p):ce.startTransition(()=>h(p))},[i]);return ce.useLayoutEffect(()=>c.listen(m),[c,m]),ce.createElement(XM,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Br=ce.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:S,...M},b){let{basename:T,unstable_useTransitions:y}=ce.useContext(vi),v=typeof p=="string"&&zv.test(p),w=Rv(p,T);p=w.to;let N=CM(p,{relative:l}),[O,I,B]=cE(r,M),F=xE(p,{replace:f,state:h,target:m,preventScrollReset:_,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:S,unstable_useTransitions:y});function K(D){e&&e(D),D.defaultPrevented||F(D)}let C=ce.createElement("a",{...M,...B,href:w.absoluteURL||N,onClick:w.isExternal||c?e:K,ref:hE(b,I),target:m,"data-discover":!v&&i==="render"?"true":void 0});return O&&!v?ce.createElement(ce.Fragment,null,C,ce.createElement(uE,{page:N})):C});Br.displayName="Link";var gE=ce.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},_){let g=sl(f,{relative:p.relative}),S=zr(),M=ce.useContext(su),{navigator:b,basename:T}=ce.useContext(vi),y=M!=null&&bE(g)&&h===!0,v=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,w=S.pathname,N=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(w=w.toLowerCase(),N=N?N.toLowerCase():null,v=v.toLowerCase()),N&&T&&(N=Sa(N,T)||N);const O=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let I=w===v||!l&&w.startsWith(v)&&w.charAt(O)==="/",B=N!=null&&(N===v||!l&&N.startsWith(v)&&N.charAt(v.length)==="/"),F={isActive:I,isPending:B,isTransitioning:y},K=I?e:void 0,C;typeof r=="function"?C=r(F):C=[r,I?"active":null,B?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(F):c;return ce.createElement(Br,{...p,"aria-current":K,className:C,ref:_,style:D,to:f,viewTransition:h},typeof m=="function"?m(F):m)});gE.displayName="NavLink";var _E=ce.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Yc,action:h,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:S,...M},b)=>{let{unstable_useTransitions:T}=ce.useContext(vi),y=ME(),v=EE(h,{relative:p}),w=f.toLowerCase()==="get"?"get":"post",N=typeof h=="string"&&zv.test(h),O=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let B=I.nativeEvent.submitter,F=B?.getAttribute("formmethod")||f,K=()=>y(B||I.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:c,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:S});T&&i!==!1?ce.startTransition(()=>K()):K()};return ce.createElement("form",{ref:b,method:w,action:v,onSubmit:r?m:O,...M,"data-discover":!N&&s==="render"?"true":void 0})});_E.displayName="Form";function vE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bv(s){let e=ce.useContext(ks);return Jt(e,vE(s)),e}function xE(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let p=wM(),_=zr(),g=sl(s,{relative:c});return ce.useCallback(S=>{if(KM(S,e)){S.preventDefault();let M=i!==void 0?i:Jo(_)===Jo(g),b=()=>p(s,{replace:M,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h});m?ce.startTransition(()=>b()):b()}},[_,p,g,i,r,e,s,l,c,f,h,m])}var SE=0,yE=()=>`__${String(++SE)}__`;function ME(){let{router:s}=Bv("useSubmit"),{basename:e}=ce.useContext(vi),i=HM(),r=s.fetch,l=s.navigate;return ce.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:_,body:g}=$M(c,e);if(f.navigate===!1){let S=f.fetcherKey||yE();await r(S,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function EE(s,{relative:e}={}){let{basename:i}=ce.useContext(vi),r=ce.useContext(Ta);Jt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...sl(s||".",{relative:e})},f=zr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(_=>_==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let _=h.toString();c.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ga([i,c.pathname])),Jo(c)}function bE(s,{relative:e}={}){let i=ce.useContext(wv);Jt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Bv("useViewTransitionState"),l=sl(s,{relative:e});if(!i.isTransitioning)return!1;let c=Sa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Sa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return nu(l.pathname,f)!=null||nu(l.pathname,c)!=null}function TE(){const[s,e]=ce.useState(!1);return ce.useEffect(()=>{const i=setTimeout(()=>{e(!0),document.body.classList.add("loaded")},800);return()=>clearTimeout(i)},[]),s?null:P.jsx("div",{id:"loader",children:P.jsxs("div",{className:"loader-content",children:[P.jsx("img",{src:"/logo.png",alt:"INCEPTA LOADER",className:"loader-logo"}),P.jsx("div",{className:"loader-spinner"})]})})}const AE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),RE=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),x_=s=>{const e=RE(s);return e.charAt(0).toUpperCase()+e.slice(1)},Hv=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),CE=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var wE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const DE=ce.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},m)=>ce.createElement("svg",{ref:m,...wE,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:Hv("lucide",l),...!c&&!CE(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,_])=>ce.createElement(p,_)),...Array.isArray(c)?c:[c]]));const Gt=(s,e)=>{const i=ce.forwardRef(({className:r,...l},c)=>ce.createElement(DE,{ref:c,iconNode:e,className:Hv(`lucide-${AE(x_(s))}`,`lucide-${s}`,r),...l}));return i.displayName=x_(s),i};const NE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],lu=Gt("arrow-left",NE);const UE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],cp=Gt("arrow-right",UE);const LE=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],OE=Gt("award",LE);const PE=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Gv=Gt("book-open",PE);const FE=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],up=Gt("calendar",FE);const IE=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],zE=Gt("chart-column",IE);const BE=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],HE=Gt("clock",BE);const GE=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],VE=Gt("code",GE);const kE=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],XE=Gt("facebook",kE);const WE=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],jE=Gt("flag",WE);const qE=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Vv=Gt("graduation-cap",qE);const YE=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],ZE=Gt("house",YE);const KE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],QE=Gt("image",KE);const JE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],$E=Gt("info",JE);const eb=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],kv=Gt("instagram",eb);const tb=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Xv=Gt("layers",tb);const nb=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Wv=Gt("layout-dashboard",nb);const ib=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],jv=Gt("linkedin",ib);const ab=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],qv=Gt("mail",ab);const rb=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],fp=Gt("map-pin",rb);const sb=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],ob=Gt("message-square",sb);const lb=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Yv=Gt("music",lb);const cb=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],ub=Gt("phone",cb);const fb=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],db=Gt("star",fb);const hb=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],pb=Gt("sun",hb);const mb=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],gb=Gt("trophy",mb);const _b=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],vb=Gt("twitter",_b);const xb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],dp=Gt("users",xb);const Sb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yb=Gt("x",Sb),S_=[{id:"about",label:"About",icon:$E},{id:"events",label:"Explore",icon:up},{id:"gallery",label:"Gallery",icon:QE},{id:"stats",label:"Stats",icon:zE},{id:"contact",label:"Contact",icon:qv}];function Mb(){const[s,e]=ce.useState(!1),[i,r]=ce.useState(!1);ce.useEffect(()=>{const c=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),ce.useEffect(()=>{i?document.body.classList.add("sidebar-open"):document.body.classList.remove("sidebar-open")},[i]);const l=c=>{const f=document.getElementById(c);f&&f.scrollIntoView({behavior:"smooth"}),r(!1)};return P.jsxs(P.Fragment,{children:[P.jsxs("header",{className:s?"scrolled":"",children:[P.jsx(Br,{to:"/",className:"logo",children:P.jsx("img",{src:"/logo.png",alt:"INCEPTA 2026",style:{height:"40px",width:"auto",verticalAlign:"middle"}})}),P.jsx("nav",{children:P.jsx("ul",{children:S_.map(c=>P.jsx("li",{children:P.jsx("a",{href:`#${c.id}`,onClick:f=>{f.preventDefault(),l(c.id)},children:c.label})},c.id))})}),P.jsxs("button",{className:`burger-menu ${i?"active":""}`,onClick:()=>r(!i),"aria-label":"Toggle menu","aria-expanded":i,children:[P.jsx("span",{}),P.jsx("span",{}),P.jsx("span",{})]})]}),P.jsxs("div",{className:`sidebar ${i?"active":""}`,role:"navigation","aria-label":"Mobile navigation","aria-hidden":!i,children:[P.jsxs("div",{className:"sidebar-header",children:[P.jsx("div",{className:"sidebar-logo",children:P.jsx("img",{src:"/logo.png",alt:"INCEPTA 2026",style:{height:"40px",width:"auto"}})}),P.jsx("button",{className:"sidebar-close",onClick:()=>r(!1),"aria-label":"Close menu",children:P.jsx(yb,{size:24})})]}),P.jsx("nav",{className:"sidebar-nav",children:S_.map(c=>{const f=c.icon;return P.jsxs("a",{href:`#${c.id}`,onClick:h=>{h.preventDefault(),l(c.id)},children:[P.jsx(f,{size:20}),c.label]},c.id)})}),P.jsxs("div",{className:"sidebar-footer",children:[P.jsx("p",{children:"Follow us on social media"}),P.jsxs("div",{className:"social-links",style:{marginTop:"15px",gap:"10px",justifyContent:"center"},children:[P.jsx("a",{href:"#","aria-label":"Instagram",className:"social-link",children:P.jsx(kv,{size:20})}),P.jsx("a",{href:"#","aria-label":"LinkedIn",className:"social-link",children:P.jsx(jv,{size:20})})]})]})]}),P.jsx("div",{className:`overlay ${i?"active":""}`,onClick:()=>r(!1)})]})}const Eb=[{name:"Instagram",icon:"instagram",href:"#"},{name:"LinkedIn",icon:"linkedin",href:"#"},{name:"Facebook",icon:"facebook",href:"#"},{name:"Twitter",icon:"twitter",href:"#"}],bb={instagram:kv,linkedin:jv,facebook:XE,twitter:vb};function Tb(){return P.jsxs("footer",{children:[P.jsx("div",{className:"footer-logo",children:"INCEPTA 2026"}),P.jsx("div",{className:"social-links",children:Eb.map(s=>{const e=bb[s.icon];return P.jsx("a",{href:s.href,className:"social-link","aria-label":s.name,children:P.jsx(e,{size:22})},s.name)})}),P.jsx("p",{className:"footer-text",children:"© 2026 INCEPTA. Organized by ASCA, College of Engineering Trivandrum."}),P.jsxs("p",{className:"footer-text",style:{marginTop:"12px"},children:["Designed with ",P.jsx("span",{className:"footer-text-highlight",children:"♥"})," by ASCA Tech Team"]})]})}function Ab(){return P.jsxs(P.Fragment,{children:[P.jsx("div",{className:"bg-orb bg-orb-1"}),P.jsx("div",{className:"bg-orb bg-orb-2"}),P.jsx("div",{className:"bg-orb bg-orb-3"})]})}const hp="182",Rb=0,y_=1,Cb=2,Kc=1,wb=2,Ko=3,sr=0,qn=1,pa=2,_a=0,Fs=1,oh=2,M_=3,E_=4,Db=5,Ur=100,Nb=101,Ub=102,Lb=103,Ob=104,Pb=200,Fb=201,Ib=202,zb=203,lh=204,ch=205,Bb=206,Hb=207,Gb=208,Vb=209,kb=210,Xb=211,Wb=212,jb=213,qb=214,uh=0,fh=1,dh=2,zs=3,hh=4,ph=5,mh=6,gh=7,Zv=0,Yb=1,Zb=2,Gi=0,Kv=1,Qv=2,Jv=3,$v=4,ex=5,tx=6,nx=7,ix=300,Fr=301,Bs=302,_h=303,vh=304,cu=306,xh=1e3,ma=1001,Sh=1002,Dn=1003,Kb=1004,bc=1005,Pn=1006,Rd=1007,Or=1008,ai=1009,ax=1010,rx=1011,$o=1012,pp=1013,ki=1014,Bi=1015,ya=1016,mp=1017,gp=1018,el=1020,sx=35902,ox=35899,lx=1021,cx=1022,wi=1023,Ma=1026,Pr=1027,ux=1028,_p=1029,Hs=1030,vp=1031,xp=1033,Qc=33776,Jc=33777,$c=33778,eu=33779,yh=35840,Mh=35841,Eh=35842,bh=35843,Th=36196,Ah=37492,Rh=37496,Ch=37488,wh=37489,Dh=37490,Nh=37491,Uh=37808,Lh=37809,Oh=37810,Ph=37811,Fh=37812,Ih=37813,zh=37814,Bh=37815,Hh=37816,Gh=37817,Vh=37818,kh=37819,Xh=37820,Wh=37821,jh=36492,qh=36494,Yh=36495,Zh=36283,Kh=36284,Qh=36285,Jh=36286,Qb=3200,Jb=0,$b=1,ar="",gi="srgb",Gs="srgb-linear",iu="linear",Ht="srgb",Ms=7680,b_=519,e1=512,t1=513,n1=514,Sp=515,i1=516,a1=517,yp=518,r1=519,T_=35044,A_="300 es",Hi=2e3,au=2001;function fx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ru(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function s1(){const s=ru("canvas");return s.style.display="block",s}const R_={};function C_(...s){const e="THREE."+s.shift();console.log(e,...s)}function st(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Rt(...s){const e="THREE."+s.shift();console.error(e,...s)}function tl(...s){const e=s.join(" ");e in R_||(R_[e]=!0,st(...s))}function o1(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Xs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=Math.PI/180,$h=180/Math.PI;function ol(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function yt(s,e,i){return Math.max(e,Math.min(i,s))}function l1(s,e){return(s%e+e)%e}function wd(s,e,i){return(1-i)*s+i*e}function Vo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,i=0){Pt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ll{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],S=c[f+0],M=c[f+1],b=c[f+2],T=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(h>=1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=T;return}if(g!==T||m!==S||p!==M||_!==b){let y=m*S+p*M+_*b+g*T;y<0&&(S=-S,M=-M,b=-b,T=-T,y=-y);let v=1-h;if(y<.9995){const w=Math.acos(y),N=Math.sin(w);v=Math.sin(v*w)/N,h=Math.sin(h*w)/N,m=m*v+S*h,p=p*v+M*h,_=_*v+b*h,g=g*v+T*h}else{m=m*v+S*h,p=p*v+M*h,_=_*v+b*h,g=g*v+T*h;const w=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=w,p*=w,_*=w,g*=w}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[f],S=c[f+1],M=c[f+2],b=c[f+3];return e[i]=h*b+_*g+m*M-p*S,e[i+1]=m*b+_*S+p*g-h*M,e[i+2]=p*b+_*M+h*S-m*g,e[i+3]=_*b-h*g-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),g=h(c/2),S=m(r/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=S*_*g+p*M*b,this._y=p*M*g-S*_*b,this._z=p*_*b+S*M*g,this._w=p*_*g-S*M*b;break;case"YXZ":this._x=S*_*g+p*M*b,this._y=p*M*g-S*_*b,this._z=p*_*b-S*M*g,this._w=p*_*g+S*M*b;break;case"ZXY":this._x=S*_*g-p*M*b,this._y=p*M*g+S*_*b,this._z=p*_*b+S*M*g,this._w=p*_*g-S*M*b;break;case"ZYX":this._x=S*_*g-p*M*b,this._y=p*M*g+S*_*b,this._z=p*_*b-S*M*g,this._w=p*_*g+S*M*b;break;case"YZX":this._x=S*_*g+p*M*b,this._y=p*M*g+S*_*b,this._z=p*_*b-S*M*g,this._w=p*_*g-S*M*b;break;case"XZY":this._x=S*_*g-p*M*b,this._y=p*M*g-S*_*b,this._z=p*_*b+S*M*g,this._w=p*_*g+S*M*b;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],S=r+h+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-r*p,this._z=c*_+f*p+r*m-l*h,this._w=f*_-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,i=0,r=0){ae.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(w_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(w_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),_=2*(h*i-c*l),g=2*(c*r-f*i);return this.x=i+m*p+f*g-h*_,this.y=r+m*_+h*p-c*g,this.z=l+m*g+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Dd.copy(this).projectOnVector(e),this.sub(Dd)}reflect(e){return this.sub(Dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dd=new ae,w_=new ll;class ft{constructor(e,i,r,l,c,f,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],_=r[4],g=r[7],S=r[2],M=r[5],b=r[8],T=l[0],y=l[3],v=l[6],w=l[1],N=l[4],O=l[7],I=l[2],B=l[5],F=l[8];return c[0]=f*T+h*w+m*I,c[3]=f*y+h*N+m*B,c[6]=f*v+h*O+m*F,c[1]=p*T+_*w+g*I,c[4]=p*y+_*N+g*B,c[7]=p*v+_*O+g*F,c[2]=S*T+M*w+b*I,c[5]=S*y+M*N+b*B,c[8]=S*v+M*O+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*h*p-r*c*_+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=_*f-h*p,S=h*m-_*c,M=p*c-f*m,b=i*g+r*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=g*T,e[1]=(l*p-_*r)*T,e[2]=(h*r-l*f)*T,e[3]=S*T,e[4]=(_*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=M*T,e[7]=(r*m-p*i)*T,e[8]=(f*i-r*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Nd.makeScale(e,i)),this}rotate(e){return this.premultiply(Nd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Nd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nd=new ft,D_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function c1(){const s={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ht&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ar?iu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Gs]:{primaries:e,whitePoint:r,transfer:iu,toXYZ:D_,fromXYZ:N_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:D_,fromXYZ:N_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),s}const bt=c1();function va(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Es;class u1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Es===void 0&&(Es=ru("canvas")),Es.width=e.width,Es.height=e.height;const l=Es.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Es}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ru("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=va(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(va(i[r]/255)*255):i[r]=va(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let f1=0;class Mp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=ol(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Ud(l[f].image)):c.push(Ud(l[f]))}else c=Ud(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Ud(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?u1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let d1=0;const Ld=new ae;class zn extends Xs{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=ma,l=ma,c=Pn,f=Or,h=wi,m=ai,p=zn.DEFAULT_ANISOTROPY,_=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=ol(),this.name="",this.source=new Mp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ld).x}get height(){return this.source.getSize(Ld).y}get depth(){return this.source.getSize(Ld).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xh:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xh:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=ix;zn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],S=m[1],M=m[5],b=m[9],T=m[2],y=m[6],v=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-T)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+T)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,O=(M+1)/2,I=(v+1)/2,B=(_+S)/4,F=(g+T)/4,K=(b+y)/4;return N>O&&N>I?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=B/r,c=F/r):O>I?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=B/l,c=K/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=F/c,l=K/c),this.set(r,l,c,i),this}let w=Math.sqrt((y-b)*(y-b)+(g-T)*(g-T)+(S-_)*(S-_));return Math.abs(w)<.001&&(w=1),this.x=(y-b)/w,this.y=(g-T)/w,this.z=(S-_)/w,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h1 extends Xs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new zn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Mp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends h1{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class dx extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class p1 extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ti):Ti.fromBufferAttribute(c,f),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tc.copy(r.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Ac.subVectors(this.max,ko),bs.subVectors(e.a,ko),Ts.subVectors(e.b,ko),As.subVectors(e.c,ko),Ja.subVectors(Ts,bs),$a.subVectors(As,Ts),Tr.subVectors(bs,As);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Tr.z,Tr.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Tr.z,0,-Tr.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Tr.y,Tr.x,0];return!Od(i,bs,Ts,As,Ac)||(i=[1,0,0,0,1,0,0,0,1],!Od(i,bs,Ts,As,Ac))?!1:(Rc.crossVectors(Ja,$a),i=[Rc.x,Rc.y,Rc.z],Od(i,bs,Ts,As,Ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ca=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Ti=new ae,Tc=new cl,bs=new ae,Ts=new ae,As=new ae,Ja=new ae,$a=new ae,Tr=new ae,ko=new ae,Ac=new ae,Rc=new ae,Ar=new ae;function Od(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Ar.fromArray(s,c);const h=l.x*Math.abs(Ar.x)+l.y*Math.abs(Ar.y)+l.z*Math.abs(Ar.z),m=e.dot(Ar),p=i.dot(Ar),_=r.dot(Ar);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const m1=new cl,Xo=new ae,Pd=new ae;class uu{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):m1.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Xo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Pd)),this.expandByPoint(Xo.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ua=new ae,Fd=new ae,Cc=new ae,er=new ae,Id=new ae,wc=new ae,zd=new ae;class hx{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ua.copy(this.origin).addScaledVector(this.direction,i),ua.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Fd.copy(e).add(i).multiplyScalar(.5),Cc.copy(i).sub(e).normalize(),er.copy(this.origin).sub(Fd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Cc),h=er.dot(this.direction),m=-er.dot(Cc),p=er.lengthSq(),_=Math.abs(1-f*f);let g,S,M,b;if(_>0)if(g=f*m-h,S=f*h-m,b=c*_,g>=0)if(S>=-b)if(S<=b){const T=1/_;g*=T,S*=T,M=g*(g+f*S+2*h)+S*(f*g+S+2*m)+p}else S=c,g=Math.max(0,-(f*S+h)),M=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(f*S+h)),M=-g*g+S*(S+2*m)+p;else S<=-b?(g=Math.max(0,-(-f*c+h)),S=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+S*(S+2*m)+p):S<=b?(g=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(g=Math.max(0,-(f*c+h)),S=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+S*(S+2*m)+p);else S=f>0?-c:c,g=Math.max(0,-(f*S+h)),M=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Fd).addScaledVector(Cc,S),M}intersectSphere(e,i){ua.subVectors(e.center,this.origin);const r=ua.dot(this.direction),l=ua.dot(ua)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),_>=0?(c=(e.min.y-S.y)*_,f=(e.max.y-S.y)*_):(c=(e.max.y-S.y)*_,f=(e.min.y-S.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(h=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ua)!==null}intersectTriangle(e,i,r,l,c){Id.subVectors(i,e),wc.subVectors(r,e),zd.crossVectors(Id,wc);let f=this.direction.dot(zd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;er.subVectors(this.origin,e);const m=h*this.direction.dot(wc.crossVectors(er,wc));if(m<0)return null;const p=h*this.direction.dot(Id.cross(er));if(p<0||m+p>f)return null;const _=-h*er.dot(zd);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,i,r,l,c,f,h,m,p,_,g,S,M,b,T,y){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,_,g,S,M,b,T,y)}set(e,i,r,l,c,f,h,m,p,_,g,S,M,b,T,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=S,v[3]=M,v[7]=b,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Rs.setFromMatrixColumn(e,0).length(),c=1/Rs.setFromMatrixColumn(e,1).length(),f=1/Rs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const S=f*_,M=f*g,b=h*_,T=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=S-T*p,i[9]=-h*m,i[2]=T-S*p,i[6]=b+M*p,i[10]=f*m}else if(e.order==="YXZ"){const S=m*_,M=m*g,b=p*_,T=p*g;i[0]=S+T*h,i[4]=b*h-M,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-h,i[2]=M*h-b,i[6]=T+S*h,i[10]=f*m}else if(e.order==="ZXY"){const S=m*_,M=m*g,b=p*_,T=p*g;i[0]=S-T*h,i[4]=-f*g,i[8]=b+M*h,i[1]=M+b*h,i[5]=f*_,i[9]=T-S*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const S=f*_,M=f*g,b=h*_,T=h*g;i[0]=m*_,i[4]=b*p-M,i[8]=S*p+T,i[1]=m*g,i[5]=T*p+S,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const S=f*m,M=f*p,b=h*m,T=h*p;i[0]=m*_,i[4]=T-S*g,i[8]=b*g+M,i[1]=g,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*g+b,i[10]=S-T*g}else if(e.order==="XZY"){const S=f*m,M=f*p,b=h*m,T=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=S*g+T,i[5]=f*_,i[9]=M*g-b,i[2]=b*g-M,i[6]=h*_,i[10]=T*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g1,e,_1)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),tr.crossVectors(r,ti),tr.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),tr.crossVectors(r,ti)),tr.normalize(),Dc.crossVectors(ti,tr),l[0]=tr.x,l[4]=Dc.x,l[8]=ti.x,l[1]=tr.y,l[5]=Dc.y,l[9]=ti.y,l[2]=tr.z,l[6]=Dc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],_=r[1],g=r[5],S=r[9],M=r[13],b=r[2],T=r[6],y=r[10],v=r[14],w=r[3],N=r[7],O=r[11],I=r[15],B=l[0],F=l[4],K=l[8],C=l[12],D=l[1],X=l[5],se=l[9],re=l[13],me=l[2],de=l[6],z=l[10],G=l[14],ie=l[3],Ee=l[7],ye=l[11],L=l[15];return c[0]=f*B+h*D+m*me+p*ie,c[4]=f*F+h*X+m*de+p*Ee,c[8]=f*K+h*se+m*z+p*ye,c[12]=f*C+h*re+m*G+p*L,c[1]=_*B+g*D+S*me+M*ie,c[5]=_*F+g*X+S*de+M*Ee,c[9]=_*K+g*se+S*z+M*ye,c[13]=_*C+g*re+S*G+M*L,c[2]=b*B+T*D+y*me+v*ie,c[6]=b*F+T*X+y*de+v*Ee,c[10]=b*K+T*se+y*z+v*ye,c[14]=b*C+T*re+y*G+v*L,c[3]=w*B+N*D+O*me+I*ie,c[7]=w*F+N*X+O*de+I*Ee,c[11]=w*K+N*se+O*z+I*ye,c[15]=w*C+N*re+O*G+I*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],g=e[6],S=e[10],M=e[14],b=e[3],T=e[7],y=e[11],v=e[15],w=m*M-p*S,N=h*M-p*g,O=h*S-m*g,I=f*M-p*_,B=f*S-m*_,F=f*g-h*_;return i*(T*w-y*N+v*O)-r*(b*w-y*I+v*B)+l*(b*N-T*I+v*F)-c*(b*O-T*B+y*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=e[9],S=e[10],M=e[11],b=e[12],T=e[13],y=e[14],v=e[15],w=g*y*p-T*S*p+T*m*M-h*y*M-g*m*v+h*S*v,N=b*S*p-_*y*p-b*m*M+f*y*M+_*m*v-f*S*v,O=_*T*p-b*g*p+b*h*M-f*T*M-_*h*v+f*g*v,I=b*g*m-_*T*m-b*h*S+f*T*S+_*h*y-f*g*y,B=i*w+r*N+l*O+c*I;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return e[0]=w*F,e[1]=(T*S*c-g*y*c-T*l*M+r*y*M+g*l*v-r*S*v)*F,e[2]=(h*y*c-T*m*c+T*l*p-r*y*p-h*l*v+r*m*v)*F,e[3]=(g*m*c-h*S*c-g*l*p+r*S*p+h*l*M-r*m*M)*F,e[4]=N*F,e[5]=(_*y*c-b*S*c+b*l*M-i*y*M-_*l*v+i*S*v)*F,e[6]=(b*m*c-f*y*c-b*l*p+i*y*p+f*l*v-i*m*v)*F,e[7]=(f*S*c-_*m*c+_*l*p-i*S*p-f*l*M+i*m*M)*F,e[8]=O*F,e[9]=(b*g*c-_*T*c-b*r*M+i*T*M+_*r*v-i*g*v)*F,e[10]=(f*T*c-b*h*c+b*r*p-i*T*p-f*r*v+i*h*v)*F,e[11]=(_*h*c-f*g*c-_*r*p+i*g*p+f*r*M-i*h*M)*F,e[12]=I*F,e[13]=(_*T*l-b*g*l+b*r*S-i*T*S-_*r*y+i*g*y)*F,e[14]=(b*h*l-f*T*l-b*r*m+i*T*m+f*r*y-i*h*y)*F,e[15]=(f*g*l-_*h*l+_*r*m-i*g*m-f*r*S+i*h*S)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,_=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,g=h+h,S=c*p,M=c*_,b=c*g,T=f*_,y=f*g,v=h*g,w=m*p,N=m*_,O=m*g,I=r.x,B=r.y,F=r.z;return l[0]=(1-(T+v))*I,l[1]=(M+O)*I,l[2]=(b-N)*I,l[3]=0,l[4]=(M-O)*B,l[5]=(1-(S+v))*B,l[6]=(y+w)*B,l[7]=0,l[8]=(b+N)*F,l[9]=(y-w)*F,l[10]=(1-(S+T))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=Rs.set(l[0],l[1],l[2]).length();const f=Rs.set(l[4],l[5],l[6]).length(),h=Rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ai.copy(this);const p=1/c,_=1/f,g=1/h;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,i.setFromRotationMatrix(Ai),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Hi,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let b,T;if(m)b=c/(f-c),T=f*c/(f-c);else if(h===Hi)b=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===au)b=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Hi,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,T;if(m)b=1/(f-c),T=f/(f-c);else if(h===Hi)b=-2/(f-c),T=-(f+c)/(f-c);else if(h===au)b=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Rs=new ae,Ai=new $t,g1=new ae(0,0,0),_1=new ae(1,1,1),tr=new ae,Dc=new ae,ti=new ae,U_=new $t,L_=new ll;class Ea{constructor(e=0,i=0,r=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return U_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(U_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return L_.setFromEuler(this),this.setFromQuaternion(L_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class px{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v1=0;const O_=new ae,Cs=new ll,fa=new $t,Nc=new ae,Wo=new ae,x1=new ae,S1=new ll,P_=new ae(1,0,0),F_=new ae(0,1,0),I_=new ae(0,0,1),z_={type:"added"},y1={type:"removed"},ws={type:"childadded",child:null},Bd={type:"childremoved",child:null};class Bn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new ae,i=new Ea,r=new ll,l=new ae(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $t},normalMatrix:{value:new ft}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new px,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Cs.setFromAxisAngle(e,i),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,i){return Cs.setFromAxisAngle(e,i),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(P_,e)}rotateY(e){return this.rotateOnAxis(F_,e)}rotateZ(e){return this.rotateOnAxis(I_,e)}translateOnAxis(e,i){return O_.copy(e).applyQuaternion(this.quaternion),this.position.add(O_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(P_,e)}translateY(e){return this.translateOnAxis(F_,e)}translateZ(e){return this.translateOnAxis(I_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Nc.copy(e):Nc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Wo,Nc,this.up):fa.lookAt(Nc,Wo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Cs.setFromRotationMatrix(fa),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(z_),ws.child=e,this.dispatchEvent(ws),ws.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(y1),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(z_),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,x1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,S1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),S=f(e.skeletons),M=f(e.animations),b=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new ae(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new ae,da=new ae,Hd=new ae,ha=new ae,Ds=new ae,Ns=new ae,B_=new ae,Gd=new ae,Vd=new ae,kd=new ae,Xd=new rn,Wd=new rn,jd=new rn;class Ci{constructor(e=new ae,i=new ae,r=new ae){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),da.subVectors(r,i),Hd.subVectors(e,i);const f=Ri.dot(Ri),h=Ri.dot(da),m=Ri.dot(Hd),p=da.dot(da),_=da.dot(Hd),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const S=1/g,M=(p*m-h*_)*S,b=(f*_-h*m)*S;return c.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(f,ha.y),m.addScaledVector(h,ha.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Xd.setScalar(0),Wd.setScalar(0),jd.setScalar(0),Xd.fromBufferAttribute(e,i),Wd.fromBufferAttribute(e,r),jd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Xd,c.x),f.addScaledVector(Wd,c.y),f.addScaledVector(jd,c.z),f}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),da.subVectors(e,i),Ri.cross(da).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ri.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ci.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Ds.subVectors(l,r),Ns.subVectors(c,r),Gd.subVectors(e,r);const m=Ds.dot(Gd),p=Ns.dot(Gd);if(m<=0&&p<=0)return i.copy(r);Vd.subVectors(e,l);const _=Ds.dot(Vd),g=Ns.dot(Vd);if(_>=0&&g<=_)return i.copy(l);const S=m*g-_*p;if(S<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(Ds,f);kd.subVectors(e,c);const M=Ds.dot(kd),b=Ns.dot(kd);if(b>=0&&M<=b)return i.copy(c);const T=M*p-m*b;if(T<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(Ns,h);const y=_*b-M*g;if(y<=0&&g-_>=0&&M-b>=0)return B_.subVectors(c,l),h=(g-_)/(g-_+(M-b)),i.copy(l).addScaledVector(B_,h);const v=1/(y+T+S);return f=T*v,h=S*v,i.copy(r).addScaledVector(Ds,f).addScaledVector(Ns,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function qd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ot{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=bt.workingColorSpace){return this.r=e,this.g=i,this.b=r,bt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=bt.workingColorSpace){if(e=l1(e,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=qd(f,c,e+1/3),this.g=qd(f,c,e),this.b=qd(f,c,e-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const r=mx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return bt.workingToColorSpace(On.copy(this),e),Math.round(yt(On.r*255,0,255))*65536+Math.round(yt(On.g*255,0,255))*256+Math.round(yt(On.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=bt.workingColorSpace){bt.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=_<=.5?g/(f+h):g/(2-f-h),f){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=bt.workingColorSpace){return bt.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=gi){bt.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+i,nr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(nr),e.getHSL(Uc);const r=wd(nr.h,Uc.h,i),l=wd(nr.s,Uc.s,i),c=wd(nr.l,Uc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ot;Ot.NAMES=mx;let M1=0;class ul extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Fs,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==lh&&(r.blendSrc=this.blendSrc),this.blendDst!==ch&&(r.blendDst=this.blendDst),this.blendEquation!==Ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gx extends ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new ae,Lc=new Pt;let E1=0;class Di{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=T_,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Lc.fromBufferAttribute(this,i),Lc.applyMatrix3(e),this.setXY(i,Lc.x,Lc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Vo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==T_&&(e.usage=this.usage),e}}class _x extends Di{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class vx extends Di{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class xa extends Di{constructor(e,i,r){super(new Float32Array(e),i,r)}}let b1=0;const mi=new $t,Yd=new Bn,Us=new ae,ni=new cl,jo=new cl,xn=new ae;class Ni extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fx(e)?vx:_x)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,r){return mi.makeTranslation(e,i,r),this.applyMatrix4(mi),this}scale(e,i,r){return mi.makeScale(e,i,r),this.applyMatrix4(mi),this}lookAt(e){return Yd.lookAt(e),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new xa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];jo.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(ni.min,jo.min),ni.expandByPoint(xn),xn.addVectors(ni.max,jo.max),ni.expandByPoint(xn)):(ni.expandByPoint(jo.min),ni.expandByPoint(jo.max))}ni.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)xn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)xn.fromBufferAttribute(h,p),m&&(Us.fromBufferAttribute(e,p),xn.add(Us)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let K=0;K<r.count;K++)h[K]=new ae,m[K]=new ae;const p=new ae,_=new ae,g=new ae,S=new Pt,M=new Pt,b=new Pt,T=new ae,y=new ae;function v(K,C,D){p.fromBufferAttribute(r,K),_.fromBufferAttribute(r,C),g.fromBufferAttribute(r,D),S.fromBufferAttribute(c,K),M.fromBufferAttribute(c,C),b.fromBufferAttribute(c,D),_.sub(p),g.sub(p),M.sub(S),b.sub(S);const X=1/(M.x*b.y-b.x*M.y);isFinite(X)&&(T.copy(_).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(X),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(X),h[K].add(T),h[C].add(T),h[D].add(T),m[K].add(y),m[C].add(y),m[D].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let K=0,C=w.length;K<C;++K){const D=w[K],X=D.start,se=D.count;for(let re=X,me=X+se;re<me;re+=3)v(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const N=new ae,O=new ae,I=new ae,B=new ae;function F(K){I.fromBufferAttribute(l,K),B.copy(I);const C=h[K];N.copy(C),N.sub(I.multiplyScalar(I.dot(C))).normalize(),O.crossVectors(B,C);const X=O.dot(m[K])<0?-1:1;f.setXYZW(K,N.x,N.y,N.z,X)}for(let K=0,C=w.length;K<C;++K){const D=w[K],X=D.start,se=D.count;for(let re=X,me=X+se;re<me;re+=3)F(e.getX(re+0)),F(e.getX(re+1)),F(e.getX(re+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new ae,c=new ae,f=new ae,h=new ae,m=new ae,p=new ae,_=new ae,g=new ae;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),T=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),h.add(_),m.add(_),p.add(_),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),f.fromBufferAttribute(i,S+2),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,g=h.normalized,S=new p.constructor(m.length*_);let M=0,b=0;for(let T=0,y=m.length;T<y;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*_;for(let v=0;v<_;v++)S[b++]=p[M++]}return new Di(S,_,g)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ni,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,g=p.length;_<g;_++){const S=p[_],M=e(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let S=0,M=g.length;S<M;S++)_.push(g[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const H_=new $t,Rr=new hx,Oc=new uu,G_=new ae,Pc=new ae,Fc=new ae,Ic=new ae,Zd=new ae,zc=new ae,V_=new ae,Bc=new ae;class ba extends Bn{constructor(e=new Ni,i=new gx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],g=c[m];_!==0&&(Zd.fromBufferAttribute(g,e),f?zc.addScaledVector(Zd,_):zc.addScaledVector(Zd.sub(i),_))}i.add(zc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Oc.copy(r.boundingSphere),Oc.applyMatrix4(c),Rr.copy(e.ray).recast(e.near),!(Oc.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Oc,G_)===null||Rr.origin.distanceToSquared(G_)>(e.far-e.near)**2))&&(H_.copy(c).invert(),Rr.copy(e.ray).applyMatrix4(H_),!(r.boundingBox!==null&&Rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Rr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,S=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,T=S.length;b<T;b++){const y=S[b],v=f[y.materialIndex],w=Math.max(y.start,M.start),N=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let O=w,I=N;O<I;O+=3){const B=h.getX(O),F=h.getX(O+1),K=h.getX(O+2);l=Hc(this,v,e,r,p,_,g,B,F,K),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const w=h.getX(y),N=h.getX(y+1),O=h.getX(y+2);l=Hc(this,f,e,r,p,_,g,w,N,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=S.length;b<T;b++){const y=S[b],v=f[y.materialIndex],w=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let O=w,I=N;O<I;O+=3){const B=O,F=O+1,K=O+2;l=Hc(this,v,e,r,p,_,g,B,F,K),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const w=y,N=y+1,O=y+2;l=Hc(this,f,e,r,p,_,g,w,N,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function T1(s,e,i,r,l,c,f,h){let m;if(e.side===qn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===sr,h),m===null)return null;Bc.copy(h),Bc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Bc);return p<i.near||p>i.far?null:{distance:p,point:Bc.clone(),object:s}}function Hc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Pc),s.getVertexPosition(m,Fc),s.getVertexPosition(p,Ic);const _=T1(s,e,i,r,Pc,Fc,Ic,V_);if(_){const g=new ae;Ci.getBarycoord(V_,Pc,Fc,Ic,g),l&&(_.uv=Ci.getInterpolatedAttribute(l,h,m,p,g,new Pt)),c&&(_.uv1=Ci.getInterpolatedAttribute(c,h,m,p,g,new Pt)),f&&(_.normal=Ci.getInterpolatedAttribute(f,h,m,p,g,new ae),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ae,materialIndex:0};Ci.getNormal(Pc,Fc,Ic,S.normal),_.face=S,_.barycoord=g}return _}class fl extends Ni{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],g=[];let S=0,M=0;b("z","y","x",-1,-1,r,i,e,f,c,0),b("z","y","x",1,-1,r,i,-e,f,c,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new xa(p,3)),this.setAttribute("normal",new xa(_,3)),this.setAttribute("uv",new xa(g,2));function b(T,y,v,w,N,O,I,B,F,K,C){const D=O/F,X=I/K,se=O/2,re=I/2,me=B/2,de=F+1,z=K+1;let G=0,ie=0;const Ee=new ae;for(let ye=0;ye<z;ye++){const L=ye*X-re;for(let ne=0;ne<de;ne++){const ve=ne*D-se;Ee[T]=ve*w,Ee[y]=L*N,Ee[v]=me,p.push(Ee.x,Ee.y,Ee.z),Ee[T]=0,Ee[y]=0,Ee[v]=B>0?1:-1,_.push(Ee.x,Ee.y,Ee.z),g.push(ne/F),g.push(1-ye/K),G+=1}}for(let ye=0;ye<K;ye++)for(let L=0;L<F;L++){const ne=S+L+de*ye,ve=S+L+de*(ye+1),Re=S+(L+1)+de*(ye+1),He=S+(L+1)+de*ye;m.push(ne,ve,He),m.push(ve,Re,He),ie+=6}h.addGroup(M,ie,C),M+=ie,S+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function In(s){const e={};for(let i=0;i<s.length;i++){const r=Vs(s[i]);for(const l in r)e[l]=r[l]}return e}function A1(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function xx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const R1={clone:Vs,merge:In};var C1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C1,this.fragmentShader=w1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=A1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Sx extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new ae,k_=new Pt,X_=new Pt;class ii extends Sx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=$h*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $h*2*Math.atan(Math.tan(Cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,i){return this.getViewBounds(e,k_,X_),i.subVectors(X_,k_)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Cd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ls=-90,Os=1;class D1 extends Bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(Ls,Os,e,i);l.layers=this.layers,this.add(l);const c=new ii(Ls,Os,e,i);c.layers=this.layers,this.add(c);const f=new ii(Ls,Os,e,i);f.layers=this.layers,this.add(f);const h=new ii(Ls,Os,e,i);h.layers=this.layers,this.add(h);const m=new ii(Ls,Os,e,i);m.layers=this.layers,this.add(m);const p=new ii(Ls,Os,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===au)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,S,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class yx extends zn{constructor(e=[],i=Fr,r,l,c,f,h,m,p,_){super(e,i,r,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mx extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new yx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new fl(5,5,5),c=new Xi({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:_a});c.uniforms.tEquirect.value=i;const f=new ba(l,c),h=i.minFilter;return i.minFilter===Or&&(i.minFilter=Pn),new D1(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Gc extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N1={type:"move"};class Kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const y=i.getJointPose(T,r),v=this._getHandJoint(p,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(N1)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Gc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class U1 extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class L1 extends zn{constructor(e=null,i=1,r=1,l,c,f,h,m,p=Dn,_=Dn,g,S){super(null,f,h,m,p,_,l,c,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qd=new ae,O1=new ae,P1=new ft;class Nr{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Qd.subVectors(r,i).cross(O1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Qd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||P1.getNormalMatrix(e),l=this.coplanarPoint(Qd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new uu,F1=new Pt(.5,.5),Vc=new ae;class Ep{constructor(e=new Nr,i=new Nr,r=new Nr,l=new Nr,c=new Nr,f=new Nr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Hi,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],g=c[5],S=c[6],M=c[7],b=c[8],T=c[9],y=c[10],v=c[11],w=c[12],N=c[13],O=c[14],I=c[15];if(l[0].setComponents(p-f,M-_,v-b,I-w).normalize(),l[1].setComponents(p+f,M+_,v+b,I+w).normalize(),l[2].setComponents(p+h,M+g,v+T,I+N).normalize(),l[3].setComponents(p-h,M-g,v-T,I-N).normalize(),r)l[4].setComponents(m,S,y,O).normalize(),l[5].setComponents(p-m,M-S,v-y,I-O).normalize();else if(l[4].setComponents(p-m,M-S,v-y,I-O).normalize(),i===Hi)l[5].setComponents(p+m,M+S,v+y,I+O).normalize();else if(i===au)l[5].setComponents(m,S,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const i=F1.distanceTo(e.center);return Cr.radius=.7071067811865476+i,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Vc.x=l.normal.x>0?e.max.x:e.min.x,Vc.y=l.normal.y>0?e.max.y:e.min.y,Vc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ex extends ul{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const W_=new $t,ep=new hx,kc=new uu,Xc=new ae;class I1 extends Bn{constructor(e=new Ni,i=new Ex){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kc.copy(r.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,e.ray.intersectsSphere(kc)===!1)return;W_.copy(l).invert(),ep.copy(e.ray).applyMatrix4(W_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const S=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let b=S,T=M;b<T;b++){const y=p.getX(b);Xc.fromBufferAttribute(g,y),j_(Xc,y,m,l,e,i,this)}}else{const S=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let b=S,T=M;b<T;b++)Xc.fromBufferAttribute(g,b),j_(Xc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function j_(s,e,i,r,l,c,f){const h=ep.distanceSqToPoint(s);if(h<i){const m=new ae;ep.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class nl extends zn{constructor(e,i,r=ki,l,c,f,h=Dn,m=Dn,p,_=Ma,g=1){if(_!==Ma&&_!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,c,f,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class z1 extends nl{constructor(e,i=ki,r=Fr,l,c,f=Dn,h=Dn,m,p=Ma){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,r,l,c,f,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bx extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fu extends Ni{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,g=e/h,S=i/m,M=[],b=[],T=[],y=[];for(let v=0;v<_;v++){const w=v*S-f;for(let N=0;N<p;N++){const O=N*g-c;b.push(O,-w,0),T.push(0,0,1),y.push(N/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let w=0;w<h;w++){const N=w+p*v,O=w+p*(v+1),I=w+1+p*(v+1),B=w+1+p*v;M.push(N,O,B),M.push(O,I,B)}this.setIndex(M),this.setAttribute("position",new xa(b,3)),this.setAttribute("normal",new xa(T,3)),this.setAttribute("uv",new xa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.width,e.height,e.widthSegments,e.heightSegments)}}class B1 extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class H1 extends ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G1 extends ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tx extends Bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Jd=new $t,q_=new ae,Y_=new ae;class V1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ep,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;q_.setFromMatrixPosition(e.matrixWorld),i.position.copy(q_),Y_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Y_),i.updateMatrixWorld(),Jd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Jd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class k1 extends V1{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class Z_ extends Tx{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new k1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Ax extends Sx{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class X1 extends Tx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class W1 extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function K_(s,e,i,r){const l=j1(r);switch(i){case lx:return s*e;case ux:return s*e/l.components*l.byteLength;case _p:return s*e/l.components*l.byteLength;case Hs:return s*e*2/l.components*l.byteLength;case vp:return s*e*2/l.components*l.byteLength;case cx:return s*e*3/l.components*l.byteLength;case wi:return s*e*4/l.components*l.byteLength;case xp:return s*e*4/l.components*l.byteLength;case Qc:case Jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $c:case eu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mh:case bh:return Math.max(s,16)*Math.max(e,8)/4;case yh:case Eh:return Math.max(s,8)*Math.max(e,8)/2;case Th:case Ah:case Ch:case wh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rh:case Dh:case Nh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jh:case qh:case Yh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Zh:case Kh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Qh:case Jh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function j1(s){switch(s){case ai:case ax:return{byteLength:1,components:1};case $o:case rx:case ya:return{byteLength:2,components:1};case mp:case gp:return{byteLength:2,components:4};case ki:case pp:case Bi:return{byteLength:4,components:1};case sx:case ox:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hp);function Rx(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function q1(s){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const _=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,_);else{g.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<g.length;M++){const b=g[S],T=g[M];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++S,g[S]=T)}g.length=S+1;for(let M=0,b=g.length;M<b;M++){const T=g[M];s.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z1=`#ifdef USE_ALPHAHASH
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
#endif`,K1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eT=`#ifdef USE_AOMAP
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
#endif`,tT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nT=`#ifdef USE_BATCHING
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
#endif`,iT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oT=`#ifdef USE_IRIDESCENCE
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
#endif`,lT=`#ifdef USE_BUMPMAP
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
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_T=`#define PI 3.141592653589793
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
} // validated`,vT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xT=`vec3 transformedNormal = objectNormal;
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
#endif`,ST=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ET=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bT="gl_FragColor = linearToOutputTexel( gl_FragColor );",TT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AT=`#ifdef USE_ENVMAP
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
#endif`,RT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
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
#endif`,wT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
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
#endif`,NT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PT=`#ifdef USE_GRADIENTMAP
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
}`,FT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BT=`uniform bool receiveShadow;
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
#endif`,HT=`#ifdef USE_ENVMAP
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
#endif`,GT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WT=`PhysicalMaterial material;
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
#endif`,jT=`uniform sampler2D dfgLUT;
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
}`,qT=`
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
#endif`,YT=`#if defined( RE_IndirectDiffuse )
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
#endif`,ZT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$T=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iA=`#if defined( USE_POINTS_UV )
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
#endif`,aA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cA=`#ifdef USE_MORPHTARGETS
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
#endif`,uA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gA=`#ifdef USE_NORMALMAP
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
#endif`,_A=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,EA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UA=`float getShadowMask() {
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
}`,LA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OA=`#ifdef USE_SKINNING
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
#endif`,PA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FA=`#ifdef USE_SKINNING
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
#endif`,IA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GA=`#ifdef USE_TRANSMISSION
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
#endif`,VA=`#ifdef USE_TRANSMISSION
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
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YA=`uniform sampler2D t2D;
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
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,QA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`#include <common>
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
}`,e2=`#if DEPTH_PACKING == 3200
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
}`,t2=`#define DISTANCE
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
}`,n2=`#define DISTANCE
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
}`,i2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r2=`uniform float scale;
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
}`,s2=`uniform vec3 diffuse;
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
}`,o2=`#include <common>
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
}`,l2=`uniform vec3 diffuse;
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
}`,c2=`#define LAMBERT
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
}`,u2=`#define LAMBERT
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
}`,f2=`#define MATCAP
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
}`,d2=`#define MATCAP
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
}`,h2=`#define NORMAL
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
}`,p2=`#define NORMAL
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
}`,m2=`#define PHONG
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
}`,g2=`#define PHONG
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
}`,_2=`#define STANDARD
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
}`,v2=`#define STANDARD
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
}`,x2=`#define TOON
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
}`,S2=`#define TOON
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
}`,y2=`uniform float size;
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
}`,M2=`uniform vec3 diffuse;
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
}`,E2=`#include <common>
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
}`,b2=`uniform vec3 color;
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
}`,T2=`uniform float rotation;
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
}`,A2=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Y1,alphahash_pars_fragment:Z1,alphamap_fragment:K1,alphamap_pars_fragment:Q1,alphatest_fragment:J1,alphatest_pars_fragment:$1,aomap_fragment:eT,aomap_pars_fragment:tT,batching_pars_vertex:nT,batching_vertex:iT,begin_vertex:aT,beginnormal_vertex:rT,bsdfs:sT,iridescence_fragment:oT,bumpmap_pars_fragment:lT,clipping_planes_fragment:cT,clipping_planes_pars_fragment:uT,clipping_planes_pars_vertex:fT,clipping_planes_vertex:dT,color_fragment:hT,color_pars_fragment:pT,color_pars_vertex:mT,color_vertex:gT,common:_T,cube_uv_reflection_fragment:vT,defaultnormal_vertex:xT,displacementmap_pars_vertex:ST,displacementmap_vertex:yT,emissivemap_fragment:MT,emissivemap_pars_fragment:ET,colorspace_fragment:bT,colorspace_pars_fragment:TT,envmap_fragment:AT,envmap_common_pars_fragment:RT,envmap_pars_fragment:CT,envmap_pars_vertex:wT,envmap_physical_pars_fragment:HT,envmap_vertex:DT,fog_vertex:NT,fog_pars_vertex:UT,fog_fragment:LT,fog_pars_fragment:OT,gradientmap_pars_fragment:PT,lightmap_pars_fragment:FT,lights_lambert_fragment:IT,lights_lambert_pars_fragment:zT,lights_pars_begin:BT,lights_toon_fragment:GT,lights_toon_pars_fragment:VT,lights_phong_fragment:kT,lights_phong_pars_fragment:XT,lights_physical_fragment:WT,lights_physical_pars_fragment:jT,lights_fragment_begin:qT,lights_fragment_maps:YT,lights_fragment_end:ZT,logdepthbuf_fragment:KT,logdepthbuf_pars_fragment:QT,logdepthbuf_pars_vertex:JT,logdepthbuf_vertex:$T,map_fragment:eA,map_pars_fragment:tA,map_particle_fragment:nA,map_particle_pars_fragment:iA,metalnessmap_fragment:aA,metalnessmap_pars_fragment:rA,morphinstance_vertex:sA,morphcolor_vertex:oA,morphnormal_vertex:lA,morphtarget_pars_vertex:cA,morphtarget_vertex:uA,normal_fragment_begin:fA,normal_fragment_maps:dA,normal_pars_fragment:hA,normal_pars_vertex:pA,normal_vertex:mA,normalmap_pars_fragment:gA,clearcoat_normal_fragment_begin:_A,clearcoat_normal_fragment_maps:vA,clearcoat_pars_fragment:xA,iridescence_pars_fragment:SA,opaque_fragment:yA,packing:MA,premultiplied_alpha_fragment:EA,project_vertex:bA,dithering_fragment:TA,dithering_pars_fragment:AA,roughnessmap_fragment:RA,roughnessmap_pars_fragment:CA,shadowmap_pars_fragment:wA,shadowmap_pars_vertex:DA,shadowmap_vertex:NA,shadowmask_pars_fragment:UA,skinbase_vertex:LA,skinning_pars_vertex:OA,skinning_vertex:PA,skinnormal_vertex:FA,specularmap_fragment:IA,specularmap_pars_fragment:zA,tonemapping_fragment:BA,tonemapping_pars_fragment:HA,transmission_fragment:GA,transmission_pars_fragment:VA,uv_pars_fragment:kA,uv_pars_vertex:XA,uv_vertex:WA,worldpos_vertex:jA,background_vert:qA,background_frag:YA,backgroundCube_vert:ZA,backgroundCube_frag:KA,cube_vert:QA,cube_frag:JA,depth_vert:$A,depth_frag:e2,distance_vert:t2,distance_frag:n2,equirect_vert:i2,equirect_frag:a2,linedashed_vert:r2,linedashed_frag:s2,meshbasic_vert:o2,meshbasic_frag:l2,meshlambert_vert:c2,meshlambert_frag:u2,meshmatcap_vert:f2,meshmatcap_frag:d2,meshnormal_vert:h2,meshnormal_frag:p2,meshphong_vert:m2,meshphong_frag:g2,meshphysical_vert:_2,meshphysical_frag:v2,meshtoon_vert:x2,meshtoon_frag:S2,points_vert:y2,points_frag:M2,shadow_vert:E2,shadow_frag:b2,sprite_vert:T2,sprite_frag:A2},Pe={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},zi={basic:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:In([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:In([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:In([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:In([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:In([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:In([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:In([Pe.common,Pe.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:In([Pe.lights,Pe.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};zi.physical={uniforms:In([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Wc={r:0,b:0,g:0},wr=new Ea,R2=new $t;function C2(s,e,i,r,l,c,f){const h=new Ot(0);let m=c===!0?0:1,p,_,g=null,S=0,M=null;function b(N){let O=N.isScene===!0?N.background:null;return O&&O.isTexture&&(O=(N.backgroundBlurriness>0?i:e).get(O)),O}function T(N){let O=!1;const I=b(N);I===null?v(h,m):I&&I.isColor&&(v(I,1),O=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,O){const I=b(O);I&&(I.isCubeTexture||I.mapping===cu)?(_===void 0&&(_=new ba(new fl(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Vs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,F,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),wr.copy(O.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(R2.makeRotationFromEuler(wr)),_.material.toneMapped=bt.getTransfer(I.colorSpace)!==Ht,(g!==I||S!==I.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,g=I,S=I.version,M=s.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new ba(new fu(2,2),new Xi({name:"BackgroundMaterial",uniforms:Vs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=bt.getTransfer(I.colorSpace)!==Ht,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||S!==I.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=I,S=I.version,M=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,O){N.getRGB(Wc,xx(s)),r.buffers.color.setClear(Wc.r,Wc.g,Wc.b,O,f)}function w(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,O=1){h.set(N),m=O,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(h,m)},render:T,addToRenderList:y,dispose:w}}function w2(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,f=!1;function h(D,X,se,re,me){let de=!1;const z=g(re,se,X);c!==z&&(c=z,p(c.object)),de=M(D,re,se,me),de&&b(D,re,se,me),me!==null&&e.update(me,s.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,O(D,X,se,re),me!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function _(D){return s.deleteVertexArray(D)}function g(D,X,se){const re=se.wireframe===!0;let me=r[D.id];me===void 0&&(me={},r[D.id]=me);let de=me[X.id];de===void 0&&(de={},me[X.id]=de);let z=de[re];return z===void 0&&(z=S(m()),de[re]=z),z}function S(D){const X=[],se=[],re=[];for(let me=0;me<i;me++)X[me]=0,se[me]=0,re[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:se,attributeDivisors:re,object:D,attributes:{},index:null}}function M(D,X,se,re){const me=c.attributes,de=X.attributes;let z=0;const G=se.getAttributes();for(const ie in G)if(G[ie].location>=0){const ye=me[ie];let L=de[ie];if(L===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(L=D.instanceColor)),ye===void 0||ye.attribute!==L||L&&ye.data!==L.data)return!0;z++}return c.attributesNum!==z||c.index!==re}function b(D,X,se,re){const me={},de=X.attributes;let z=0;const G=se.getAttributes();for(const ie in G)if(G[ie].location>=0){let ye=de[ie];ye===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor));const L={};L.attribute=ye,ye&&ye.data&&(L.data=ye.data),me[ie]=L,z++}c.attributes=me,c.attributesNum=z,c.index=re}function T(){const D=c.newAttributes;for(let X=0,se=D.length;X<se;X++)D[X]=0}function y(D){v(D,0)}function v(D,X){const se=c.newAttributes,re=c.enabledAttributes,me=c.attributeDivisors;se[D]=1,re[D]===0&&(s.enableVertexAttribArray(D),re[D]=1),me[D]!==X&&(s.vertexAttribDivisor(D,X),me[D]=X)}function w(){const D=c.newAttributes,X=c.enabledAttributes;for(let se=0,re=X.length;se<re;se++)X[se]!==D[se]&&(s.disableVertexAttribArray(se),X[se]=0)}function N(D,X,se,re,me,de,z){z===!0?s.vertexAttribIPointer(D,X,se,me,de):s.vertexAttribPointer(D,X,se,re,me,de)}function O(D,X,se,re){T();const me=re.attributes,de=se.getAttributes(),z=X.defaultAttributeValues;for(const G in de){const ie=de[G];if(ie.location>=0){let Ee=me[G];if(Ee===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(Ee=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(Ee=D.instanceColor)),Ee!==void 0){const ye=Ee.normalized,L=Ee.itemSize,ne=e.get(Ee);if(ne===void 0)continue;const ve=ne.buffer,Re=ne.type,He=ne.bytesPerElement,te=Re===s.INT||Re===s.UNSIGNED_INT||Ee.gpuType===pp;if(Ee.isInterleavedBufferAttribute){const fe=Ee.data,Ne=fe.stride,Xe=Ee.offset;if(fe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ie.locationSize;Ge++)v(ie.location+Ge,fe.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ge=0;Ge<ie.locationSize;Ge++)y(ie.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let Ge=0;Ge<ie.locationSize;Ge++)N(ie.location+Ge,L/ie.locationSize,Re,ye,Ne*He,(Xe+L/ie.locationSize*Ge)*He,te)}else{if(Ee.isInstancedBufferAttribute){for(let fe=0;fe<ie.locationSize;fe++)v(ie.location+fe,Ee.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let fe=0;fe<ie.locationSize;fe++)y(ie.location+fe);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let fe=0;fe<ie.locationSize;fe++)N(ie.location+fe,L/ie.locationSize,Re,ye,L*He,L/ie.locationSize*fe*He,te)}}else if(z!==void 0){const ye=z[G];if(ye!==void 0)switch(ye.length){case 2:s.vertexAttrib2fv(ie.location,ye);break;case 3:s.vertexAttrib3fv(ie.location,ye);break;case 4:s.vertexAttrib4fv(ie.location,ye);break;default:s.vertexAttrib1fv(ie.location,ye)}}}}w()}function I(){K();for(const D in r){const X=r[D];for(const se in X){const re=X[se];for(const me in re)_(re[me].object),delete re[me];delete X[se]}delete r[D]}}function B(D){if(r[D.id]===void 0)return;const X=r[D.id];for(const se in X){const re=X[se];for(const me in re)_(re[me].object),delete re[me];delete X[se]}delete r[D.id]}function F(D){for(const X in r){const se=r[X];if(se[D.id]===void 0)continue;const re=se[D.id];for(const me in re)_(re[me].object),delete re[me];delete se[D.id]}}function K(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function D2(s,e,i){let r;function l(p){r=p}function c(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function f(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function h(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let M=0;for(let b=0;b<g;b++)M+=_[b];i.update(M,r,1)}function m(p,_,g,S){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)f(p[b],_[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,g);let b=0;for(let T=0;T<g;T++)b+=_[T]*S[T];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function N2(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==wi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const K=F===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ai&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Bi&&!K)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(st("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),B=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:O,maxSamples:I,samples:B}}function U2(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Nr,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||r!==0||l;return l=S,r=g.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,M){const b=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,v=s.get(g);if(!l||b===null||b.length===0||c&&!y)c?_(null):p();else{const w=c?0:r,N=w*4;let O=v.clippingState||null;m.value=O,O=_(b,S,N,M);for(let I=0;I!==N;++I)O[I]=i[I];v.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,S,M,b){const T=g!==null?g.length:0;let y=null;if(T!==0){if(y=m.value,b!==!0||y===null){const v=M+T*4,w=S.matrixWorldInverse;h.getNormalMatrix(w),(y===null||y.length<v)&&(y=new Float32Array(v));for(let N=0,O=M;N!==T;++N,O+=4)f.copy(g[N]).applyMatrix4(w,h),f.normal.toArray(y,O),y[O+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function L2(s){let e=new WeakMap;function i(f,h){return h===_h?f.mapping=Fr:h===vh&&(f.mapping=Bs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===_h||h===vh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Mx(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const rr=4,Q_=[.125,.215,.35,.446,.526,.582],Lr=20,O2=256,qo=new Ax,J_=new Ot;let $d=null,eh=0,th=0,nh=!1;const P2=new ae;class $_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=P2}=c;$d=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($d,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Fr||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$d=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ya,format:wi,colorSpace:Gs,depthBuffer:!1},l=ev(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ev(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F2(c)),this._blurMaterial=z2(c,e,i),this._ggxMaterial=I2(c,e,i)}return l}_compileMaterial(e){const i=new ba(new Ni,e);this._renderer.compile(i,qo)}_sceneToCubeUV(e,i,r,l,c){const m=new ii(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor(J_),g.toneMapping=Gi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ba(new fl,new gx({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let v=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,v=!0):(y.color.copy(J_),v=!0);for(let N=0;N<6;N++){const O=N%3;O===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):O===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const I=this._cubeSize;Ps(l,O*I,N>2?I:0,I,I),g.setRenderTarget(l),v&&g.render(T,m),g.render(e,m)}g.toneMapping=M,g.autoClear=S,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Fr||e.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ps(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,qo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=0+p*1.25,M=g*S,{_lodMax:b}=this,T=this._sizeLods[r],y=3*T*(r>b-rr?r-b+rr:0),v=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Ps(c,y,v,3*T,2*T),l.setRenderTarget(c),l.render(h,qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Ps(e,y,v,3*T,2*T),l.setRenderTarget(e),l.render(h,qo)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Lr-1),T=c/b,y=isFinite(c)?1+Math.floor(_*T):Lr;y>Lr&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Lr}`);const v=[];let w=0;for(let F=0;F<Lr;++F){const K=F/T,C=Math.exp(-K*K/2);v.push(C),F===0?w+=C:F<y&&(w+=2*C)}for(let F=0;F<v.length;F++)v[F]=v[F]/w;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=f==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-r;const O=this._sizeLods[l],I=3*O*(l>N-rr?l-N+rr:0),B=4*(this._cubeSize-O);Ps(i,I,B,3*O,2*O),m.setRenderTarget(i),m.render(g,qo)}}function F2(s){const e=[],i=[],r=[];let l=s;const c=s-rr+1+Q_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-rr?m=Q_[f-s+rr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,b=6,T=3,y=2,v=1,w=new Float32Array(T*b*M),N=new Float32Array(y*b*M),O=new Float32Array(v*b*M);for(let B=0;B<M;B++){const F=B%3*2/3-1,K=B>2?0:-1,C=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];w.set(C,T*b*B),N.set(S,y*b*B);const D=[B,B,B,B,B,B];O.set(D,v*b*B)}const I=new Ni;I.setAttribute("position",new Di(w,T)),I.setAttribute("uv",new Di(N,y)),I.setAttribute("faceIndex",new Di(O,v)),r.push(new ba(I,null)),l>rr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function ev(s,e,i){const r=new Vi(s,e,i);return r.texture.mapping=cu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ps(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function I2(s,e,i){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function z2(s,e,i){const r=new Float32Array(Lr),l=new ae(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:du(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function tv(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function nv(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function B2(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===_h||m===vh,_=m===Fr||m===Bs;if(p||_){let g=e.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new $_(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new $_(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function H2(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&tl("WebGLRenderer: "+r+" extension not supported."),l}}}function G2(s,e,i,r){const l={},c=new WeakMap;function f(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",f),delete l[S.id];const M=c.get(S);M&&(e.remove(M),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",f),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)e.update(S[M],s.ARRAY_BUFFER)}function p(g){const S=[],M=g.index,b=g.attributes.position;let T=0;if(M!==null){const w=M.array;T=M.version;for(let N=0,O=w.length;N<O;N+=3){const I=w[N+0],B=w[N+1],F=w[N+2];S.push(I,B,B,F,F,I)}}else if(b!==void 0){const w=b.array;T=b.version;for(let N=0,O=w.length/3-1;N<O;N+=3){const I=N+0,B=N+1,F=N+2;S.push(I,B,B,F,F,I)}}else return;const y=new(fx(S)?vx:_x)(S,1);y.version=T;const v=c.get(g);v&&e.remove(v),c.set(g,y)}function _(g){const S=c.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function V2(s,e,i){let r;function l(S){r=S}let c,f;function h(S){c=S.type,f=S.bytesPerElement}function m(S,M){s.drawElements(r,M,c,S*f),i.update(M,r,1)}function p(S,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,S*f,b),i.update(M,r,b))}function _(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,S,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,r,1)}function g(S,M,b,T){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/f,M[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,S,0,T,0,b);let v=0;for(let w=0;w<b;w++)v+=M[w]*T[w];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function k2(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:Rt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function X2(s,e,i){const r=new WeakMap,l=new rn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let D=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var M=D;S!==void 0&&S.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let O=0;b===!0&&(O=1),T===!0&&(O=2),y===!0&&(O=3);let I=h.attributes.position.count*O,B=1;I>e.maxTextureSize&&(B=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*B*4*g),K=new dx(F,I,B,g);K.type=Bi,K.needsUpdate=!0;const C=O*4;for(let X=0;X<g;X++){const se=v[X],re=w[X],me=N[X],de=I*B*4*X;for(let z=0;z<se.count;z++){const G=z*C;b===!0&&(l.fromBufferAttribute(se,z),F[de+G+0]=l.x,F[de+G+1]=l.y,F[de+G+2]=l.z,F[de+G+3]=0),T===!0&&(l.fromBufferAttribute(re,z),F[de+G+4]=l.x,F[de+G+5]=l.y,F[de+G+6]=l.z,F[de+G+7]=0),y===!0&&(l.fromBufferAttribute(me,z),F[de+G+8]=l.x,F[de+G+9]=l.y,F[de+G+10]=l.z,F[de+G+11]=me.itemSize===4?l.w:1)}}S={count:g,texture:K,size:new Pt(I,B)},r.set(h,S),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const T=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:c}}function W2(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const j2={[Kv]:"LINEAR_TONE_MAPPING",[Qv]:"REINHARD_TONE_MAPPING",[Jv]:"CINEON_TONE_MAPPING",[$v]:"ACES_FILMIC_TONE_MAPPING",[tx]:"AGX_TONE_MAPPING",[nx]:"NEUTRAL_TONE_MAPPING",[ex]:"CUSTOM_TONE_MAPPING"};function q2(s,e,i,r,l){const c=new Vi(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Vi(e,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),h=new Ni;h.setAttribute("position",new xa([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xa([0,2,0,0,2,0],2));const m=new B1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ba(h,m),_=new Ax(-1,1,1,-1,0,1);let g=null,S=null,M=!1,b,T=null,y=[],v=!1;this.setSize=function(w,N){c.setSize(w,N),f.setSize(w,N);for(let O=0;O<y.length;O++){const I=y[O];I.setSize&&I.setSize(w,N)}},this.setEffects=function(w){y=w,v=y.length>0&&y[0].isRenderPass===!0;const N=c.width,O=c.height;for(let I=0;I<y.length;I++){const B=y[I];B.setSize&&B.setSize(N,O)}},this.begin=function(w,N){if(M||w.toneMapping===Gi&&y.length===0)return!1;if(T=N,N!==null){const O=N.width,I=N.height;(c.width!==O||c.height!==I)&&this.setSize(O,I)}return v===!1&&w.setRenderTarget(c),b=w.toneMapping,w.toneMapping=Gi,!0},this.hasRenderPass=function(){return v},this.end=function(w,N){w.toneMapping=b,M=!0;let O=c,I=f;for(let B=0;B<y.length;B++){const F=y[B];if(F.enabled!==!1&&(F.render(w,I,O,N),F.needsSwap!==!1)){const K=O;O=I,I=K}}if(g!==w.outputColorSpace||S!==w.toneMapping){g=w.outputColorSpace,S=w.toneMapping,m.defines={},bt.getTransfer(g)===Ht&&(m.defines.SRGB_TRANSFER="");const B=j2[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,w.setRenderTarget(T),w.render(p,_),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const Cx=new zn,tp=new nl(1,1),wx=new dx,Dx=new p1,Nx=new yx,iv=[],av=[],rv=new Float32Array(16),sv=new Float32Array(9),ov=new Float32Array(4);function Ws(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=iv[l];if(c===void 0&&(c=new Float32Array(l),iv[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function gn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function _n(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function hu(s,e){let i=av[e];i===void 0&&(i=new Int32Array(e),av[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function Y2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function Z2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2fv(this.addr,e),_n(i,e)}}function K2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;s.uniform3fv(this.addr,e),_n(i,e)}}function Q2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4fv(this.addr,e),_n(i,e)}}function J2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;ov.set(r),s.uniformMatrix2fv(this.addr,!1,ov),_n(i,r)}}function $2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;sv.set(r),s.uniformMatrix3fv(this.addr,!1,sv),_n(i,r)}}function eR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;rv.set(r),s.uniformMatrix4fv(this.addr,!1,rv),_n(i,r)}}function tR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function nR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2iv(this.addr,e),_n(i,e)}}function iR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3iv(this.addr,e),_n(i,e)}}function aR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4iv(this.addr,e),_n(i,e)}}function rR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function sR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2uiv(this.addr,e),_n(i,e)}}function oR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3uiv(this.addr,e),_n(i,e)}}function lR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4uiv(this.addr,e),_n(i,e)}}function cR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(tp.compareFunction=i.isReversedDepthBuffer()?yp:Sp,c=tp):c=Cx,i.setTexture2D(e||c,l)}function uR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Dx,l)}function fR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Nx,l)}function dR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||wx,l)}function hR(s){switch(s){case 5126:return Y2;case 35664:return Z2;case 35665:return K2;case 35666:return Q2;case 35674:return J2;case 35675:return $2;case 35676:return eR;case 5124:case 35670:return tR;case 35667:case 35671:return nR;case 35668:case 35672:return iR;case 35669:case 35673:return aR;case 5125:return rR;case 36294:return sR;case 36295:return oR;case 36296:return lR;case 35678:case 36198:case 36298:case 36306:case 35682:return cR;case 35679:case 36299:case 36307:return uR;case 35680:case 36300:case 36308:case 36293:return fR;case 36289:case 36303:case 36311:case 36292:return dR}}function pR(s,e){s.uniform1fv(this.addr,e)}function mR(s,e){const i=Ws(e,this.size,2);s.uniform2fv(this.addr,i)}function gR(s,e){const i=Ws(e,this.size,3);s.uniform3fv(this.addr,i)}function _R(s,e){const i=Ws(e,this.size,4);s.uniform4fv(this.addr,i)}function vR(s,e){const i=Ws(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function xR(s,e){const i=Ws(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function SR(s,e){const i=Ws(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function yR(s,e){s.uniform1iv(this.addr,e)}function MR(s,e){s.uniform2iv(this.addr,e)}function ER(s,e){s.uniform3iv(this.addr,e)}function bR(s,e){s.uniform4iv(this.addr,e)}function TR(s,e){s.uniform1uiv(this.addr,e)}function AR(s,e){s.uniform2uiv(this.addr,e)}function RR(s,e){s.uniform3uiv(this.addr,e)}function CR(s,e){s.uniform4uiv(this.addr,e)}function wR(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=tp:f=Cx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function DR(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Dx,c[f])}function NR(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Nx,c[f])}function UR(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||wx,c[f])}function LR(s){switch(s){case 5126:return pR;case 35664:return mR;case 35665:return gR;case 35666:return _R;case 35674:return vR;case 35675:return xR;case 35676:return SR;case 5124:case 35670:return yR;case 35667:case 35671:return MR;case 35668:case 35672:return ER;case 35669:case 35673:return bR;case 5125:return TR;case 36294:return AR;case 36295:return RR;case 36296:return CR;case 35678:case 36198:case 36298:case 36306:case 35682:return wR;case 35679:case 36299:case 36307:return DR;case 35680:case 36300:case 36308:case 36293:return NR;case 36289:case 36303:case 36311:case 36292:return UR}}class OR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=hR(i.type)}}class PR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=LR(i.type)}}class FR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function lv(s,e){s.seq.push(e),s.map[e.id]=e}function IR(s,e,i){const r=s.name,l=r.length;for(ih.lastIndex=0;;){const c=ih.exec(r),f=ih.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){lv(i,p===void 0?new OR(h,s,e):new PR(h,s,e));break}else{let g=i.map[h];g===void 0&&(g=new FR(h),lv(i,g)),i=g}}}class tu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);IR(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function cv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const zR=37297;let BR=0;function HR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const uv=new ft;function GR(s){bt._getMatrix(uv,bt.workingColorSpace,s);const e=`mat3( ${uv.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(s)){case iu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function fv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+HR(s.getShaderSource(e),h)}else return c}function VR(s,e){const i=GR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const kR={[Kv]:"Linear",[Qv]:"Reinhard",[Jv]:"Cineon",[$v]:"ACESFilmic",[tx]:"AgX",[nx]:"Neutral",[ex]:"Custom"};function XR(s,e){const i=kR[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jc=new ae;function WR(){bt.getLuminanceCoefficients(jc);const s=jc.x.toFixed(4),e=jc.y.toFixed(4),i=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function qR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function YR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function Qo(s){return s!==""}function dv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZR=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(s){return s.replace(ZR,QR)}const KR=new Map;function QR(s,e){let i=dt[e];if(i===void 0){const r=KR.get(e);if(r!==void 0)i=dt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return np(i)}const JR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pv(s){return s.replace(JR,$R)}function $R(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function mv(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const eC={[Kc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function tC(s){return eC[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nC={[Fr]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[cu]:"ENVMAP_TYPE_CUBE_UV"};function iC(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":nC[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const aC={[Bs]:"ENVMAP_MODE_REFRACTION"};function rC(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":aC[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sC={[Zv]:"ENVMAP_BLENDING_MULTIPLY",[Yb]:"ENVMAP_BLENDING_MIX",[Zb]:"ENVMAP_BLENDING_ADD"};function oC(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":sC[s.combine]||"ENVMAP_BLENDING_NONE"}function lC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function cC(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=tC(i),p=iC(i),_=rC(i),g=oC(i),S=lC(i),M=jR(i),b=qR(c),T=l.createProgram();let y,v,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Qo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Qo).join(`
`),v.length>0&&(v+=`
`)):(y=[mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),v=[mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Gi?XR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,VR("linearToOutputTexel",i.outputColorSpace),WR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),f=np(f),f=dv(f,i),f=hv(f,i),h=np(h),h=dv(h,i),h=hv(h,i),f=pv(f),h=pv(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===A_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===A_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=w+y+f,O=w+v+h,I=cv(l,l.VERTEX_SHADER,N),B=cv(l,l.FRAGMENT_SHADER,O);l.attachShader(T,I),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(X){if(s.debug.checkShaderErrors){const se=l.getProgramInfoLog(T)||"",re=l.getShaderInfoLog(I)||"",me=l.getShaderInfoLog(B)||"",de=se.trim(),z=re.trim(),G=me.trim();let ie=!0,Ee=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,I,B);else{const ye=fv(l,I,"vertex"),L=fv(l,B,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+de+`
`+ye+`
`+L)}else de!==""?st("WebGLProgram: Program Info Log:",de):(z===""||G==="")&&(Ee=!1);Ee&&(X.diagnostics={runnable:ie,programLog:de,vertexShader:{log:z,prefix:y},fragmentShader:{log:G,prefix:v}})}l.deleteShader(I),l.deleteShader(B),K=new tu(l,T),C=YR(l,T)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,zR)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=BR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=B,this}let uC=0;class fC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new dC(e),i.set(e,r)),r}}class dC{constructor(e){this.id=uC++,this.code=e,this.usedTimes=0}}function hC(s,e,i,r,l,c,f){const h=new px,m=new fC,p=new Set,_=[],g=new Map,S=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,D,X,se,re){const me=se.fog,de=re.geometry,z=C.isMeshStandardMaterial?se.environment:null,G=(C.isMeshStandardMaterial?i:e).get(C.envMap||z),ie=G&&G.mapping===cu?G.image.height:null,Ee=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&st("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const ye=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,L=ye!==void 0?ye.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let ve,Re,He,te;if(Ee){const Et=zi[Ee];ve=Et.vertexShader,Re=Et.fragmentShader}else ve=C.vertexShader,Re=C.fragmentShader,m.update(C),He=m.getVertexShaderID(C),te=m.getFragmentShaderID(C);const fe=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),Xe=re.isInstancedMesh===!0,Ge=re.isBatchedMesh===!0,ht=!!C.map,en=!!C.matcap,_t=!!G,pt=!!C.aoMap,Ct=!!C.lightMap,ot=!!C.bumpMap,tn=!!C.normalMap,V=!!C.displacementMap,Zt=!!C.emissiveMap,Mt=!!C.metalnessMap,Ut=!!C.roughnessMap,Ye=C.anisotropy>0,U=C.clearcoat>0,E=C.dispersion>0,j=C.iridescence>0,pe=C.sheen>0,Se=C.transmission>0,ue=Ye&&!!C.anisotropyMap,Ke=U&&!!C.clearcoatMap,we=U&&!!C.clearcoatNormalMap,We=U&&!!C.clearcoatRoughnessMap,nt=j&&!!C.iridescenceMap,be=j&&!!C.iridescenceThicknessMap,Te=pe&&!!C.sheenColorMap,ze=pe&&!!C.sheenRoughnessMap,Fe=!!C.specularMap,De=!!C.specularColorMap,ct=!!C.specularIntensityMap,W=Se&&!!C.transmissionMap,Le=Se&&!!C.thicknessMap,Ae=!!C.gradientMap,Ie=!!C.alphaMap,Me=C.alphaTest>0,xe=!!C.alphaHash,Ce=!!C.extensions;let it=Gi;C.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(it=s.toneMapping);const Ft={shaderID:Ee,shaderType:C.type,shaderName:C.name,vertexShader:ve,fragmentShader:Re,defines:C.defines,customVertexShaderID:He,customFragmentShaderID:te,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Ge,batchingColor:Ge&&re._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&re.instanceColor!==null,instancingMorph:Xe&&re.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Gs,alphaToCoverage:!!C.alphaToCoverage,map:ht,matcap:en,envMap:_t,envMapMode:_t&&G.mapping,envMapCubeUVHeight:ie,aoMap:pt,lightMap:Ct,bumpMap:ot,normalMap:tn,displacementMap:V,emissiveMap:Zt,normalMapObjectSpace:tn&&C.normalMapType===$b,normalMapTangentSpace:tn&&C.normalMapType===Jb,metalnessMap:Mt,roughnessMap:Ut,anisotropy:Ye,anisotropyMap:ue,clearcoat:U,clearcoatMap:Ke,clearcoatNormalMap:we,clearcoatRoughnessMap:We,dispersion:E,iridescence:j,iridescenceMap:nt,iridescenceThicknessMap:be,sheen:pe,sheenColorMap:Te,sheenRoughnessMap:ze,specularMap:Fe,specularColorMap:De,specularIntensityMap:ct,transmission:Se,transmissionMap:W,thicknessMap:Le,gradientMap:Ae,opaque:C.transparent===!1&&C.blending===Fs&&C.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:xe,combine:C.combine,mapUv:ht&&T(C.map.channel),aoMapUv:pt&&T(C.aoMap.channel),lightMapUv:Ct&&T(C.lightMap.channel),bumpMapUv:ot&&T(C.bumpMap.channel),normalMapUv:tn&&T(C.normalMap.channel),displacementMapUv:V&&T(C.displacementMap.channel),emissiveMapUv:Zt&&T(C.emissiveMap.channel),metalnessMapUv:Mt&&T(C.metalnessMap.channel),roughnessMapUv:Ut&&T(C.roughnessMap.channel),anisotropyMapUv:ue&&T(C.anisotropyMap.channel),clearcoatMapUv:Ke&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:be&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(C.sheenRoughnessMap.channel),specularMapUv:Fe&&T(C.specularMap.channel),specularColorMapUv:De&&T(C.specularColorMap.channel),specularIntensityMapUv:ct&&T(C.specularIntensityMap.channel),transmissionMapUv:W&&T(C.transmissionMap.channel),thicknessMapUv:Le&&T(C.thicknessMap.channel),alphaMapUv:Ie&&T(C.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(tn||Ye),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!de.attributes.uv&&(ht||Ie),fog:!!me,useFog:C.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ne,skinning:re.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ne,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:ht&&C.map.isVideoTexture===!0&&bt.getTransfer(C.map.colorSpace)===Ht,decodeVideoTextureEmissive:Zt&&C.emissiveMap.isVideoTexture===!0&&bt.getTransfer(C.emissiveMap.colorSpace)===Ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===pa,flipSided:C.side===qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ce&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&C.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ft.vertexUv1s=p.has(1),Ft.vertexUv2s=p.has(2),Ft.vertexUv3s=p.has(3),p.clear(),Ft}function v(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const X in C.defines)D.push(X),D.push(C.defines[X]);return C.isRawShaderMaterial===!1&&(w(D,C),N(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function w(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function N(C,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),C.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),C.push(h.mask)}function O(C){const D=b[C.type];let X;if(D){const se=zi[D];X=R1.clone(se.uniforms)}else X=C.uniforms;return X}function I(C,D){let X=g.get(D);return X!==void 0?++X.usedTimes:(X=new cC(s,D,C,c),_.push(X),g.set(D,X)),X}function B(C){if(--C.usedTimes===0){const D=_.indexOf(C);_[D]=_[_.length-1],_.pop(),g.delete(C.cacheKey),C.destroy()}}function F(C){m.remove(C)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:O,acquireProgram:I,releaseProgram:B,releaseShaderCache:F,programs:_,dispose:K}}function pC(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function mC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function gv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _v(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g,S,M,b,T,y){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:S,material:M,groupOrder:b,renderOrder:g.renderOrder,z:T,group:y},s[e]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=M,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=T,v.group=y),e++,v}function h(g,S,M,b,T,y){const v=f(g,S,M,b,T,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,S,M,b,T,y){const v=f(g,S,M,b,T,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||mC),r.length>1&&r.sort(S||gv),l.length>1&&l.sort(S||gv)}function _(){for(let g=e,S=s.length;g<S;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function gC(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new _v,s.set(r,[f])):l>=c.length?(f=new _v,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function _C(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new Ot};break;case"SpotLight":i={position:new ae,direction:new ae,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":i={color:new Ot,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return s[e.id]=i,i}}}function vC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let xC=0;function SC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yC(s){const e=new _C,i=vC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ae);const l=new ae,c=new $t,f=new $t;function h(p){let _=0,g=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,b=0,T=0,y=0,v=0,w=0,N=0,O=0,I=0,B=0,F=0;p.sort(SC);for(let C=0,D=p.length;C<D;C++){const X=p[C],se=X.color,re=X.intensity,me=X.distance;let de=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Hs?de=X.shadow.map.texture:de=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)_+=se.r*re,g+=se.g*re,S+=se.b*re;else if(X.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(X.sh.coefficients[z],re);F++}else if(X.isDirectionalLight){const z=e.get(X);if(z.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const G=X.shadow,ie=i.get(X);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,r.directionalShadow[M]=ie,r.directionalShadowMap[M]=de,r.directionalShadowMatrix[M]=X.shadow.matrix,w++}r.directional[M]=z,M++}else if(X.isSpotLight){const z=e.get(X);z.position.setFromMatrixPosition(X.matrixWorld),z.color.copy(se).multiplyScalar(re),z.distance=me,z.coneCos=Math.cos(X.angle),z.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),z.decay=X.decay,r.spot[T]=z;const G=X.shadow;if(X.map&&(r.spotLightMap[I]=X.map,I++,G.updateMatrices(X),X.castShadow&&B++),r.spotLightMatrix[T]=G.matrix,X.castShadow){const ie=i.get(X);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,r.spotShadow[T]=ie,r.spotShadowMap[T]=de,O++}T++}else if(X.isRectAreaLight){const z=e.get(X);z.color.copy(se).multiplyScalar(re),z.halfWidth.set(X.width*.5,0,0),z.halfHeight.set(0,X.height*.5,0),r.rectArea[y]=z,y++}else if(X.isPointLight){const z=e.get(X);if(z.color.copy(X.color).multiplyScalar(X.intensity),z.distance=X.distance,z.decay=X.decay,X.castShadow){const G=X.shadow,ie=i.get(X);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,ie.shadowCameraNear=G.camera.near,ie.shadowCameraFar=G.camera.far,r.pointShadow[b]=ie,r.pointShadowMap[b]=de,r.pointShadowMatrix[b]=X.shadow.matrix,N++}r.point[b]=z,b++}else if(X.isHemisphereLight){const z=e.get(X);z.skyColor.copy(X.color).multiplyScalar(re),z.groundColor.copy(X.groundColor).multiplyScalar(re),r.hemi[v]=z,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==M||K.pointLength!==b||K.spotLength!==T||K.rectAreaLength!==y||K.hemiLength!==v||K.numDirectionalShadows!==w||K.numPointShadows!==N||K.numSpotShadows!==O||K.numSpotMaps!==I||K.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=O+I-B,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=F,K.directionalLength=M,K.pointLength=b,K.spotLength=T,K.rectAreaLength=y,K.hemiLength=v,K.numDirectionalShadows=w,K.numPointShadows=N,K.numSpotShadows=O,K.numSpotMaps=I,K.numLightProbes=F,r.version=xC++)}function m(p,_){let g=0,S=0,M=0,b=0,T=0;const y=_.matrixWorldInverse;for(let v=0,w=p.length;v<w;v++){const N=p[v];if(N.isDirectionalLight){const O=r.directional[g];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),g++}else if(N.isSpotLight){const O=r.spot[M];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const O=r.rectArea[b];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),f.identity(),c.copy(N.matrixWorld),c.premultiply(y),f.extractRotation(c),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),b++}else if(N.isPointLight){const O=r.point[S];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const O=r.hemi[T];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(y),T++}}}return{setup:h,setupView:m,state:r}}function vv(s){const e=new yC(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function f(_){r.push(_)}function h(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function MC(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new vv(s),e.set(l,[h])):c>=f.length?(h=new vv(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const EC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bC=`uniform sampler2D shadow_pass;
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
}`,TC=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],AC=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],xv=new $t,Yo=new ae,ah=new ae;function RC(s,e,i){let r=new Ep;const l=new Pt,c=new Pt,f=new rn,h=new H1,m=new G1,p={},_=i.maxTextureSize,g={[sr]:qn,[qn]:sr,[pa]:pa},S=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:EC,fragmentShader:bC}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ni;b.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ba(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let v=this.type;this.render=function(B,F,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===wb&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Kc);const C=s.getRenderTarget(),D=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),se=s.state;se.setBlending(_a),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const re=v!==this.type;re&&F.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(de=>de.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,de=B.length;me<de;me++){const z=B[me],G=z.shadow;if(G===void 0){st("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ie=G.getFrameExtents();if(l.multiply(ie),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ie.x),l.x=c.x*ie.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ie.y),l.y=c.y*ie.y,G.mapSize.y=c.y)),G.map===null||re===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ko){if(z.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Vi(l.x,l.y,{format:Hs,type:ya,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new nl(l.x,l.y,Bi),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=Ma,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn}else{z.isPointLight?(G.map=new Mx(l.x),G.map.depthTexture=new z1(l.x,ki)):(G.map=new Vi(l.x,l.y),G.map.depthTexture=new nl(l.x,l.y,ki)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=Ma;const ye=s.state.buffers.depth.getReversed();this.type===Kc?(G.map.depthTexture.compareFunction=ye?yp:Sp,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn)}G.camera.updateProjectionMatrix()}const Ee=G.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<Ee;ye++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,ye),s.clear();else{ye===0&&(s.setRenderTarget(G.map),s.clear());const L=G.getViewport(ye);f.set(c.x*L.x,c.y*L.y,c.x*L.z,c.y*L.w),se.viewport(f)}if(z.isPointLight){const L=G.camera,ne=G.matrix,ve=z.distance||L.far;ve!==L.far&&(L.far=ve,L.updateProjectionMatrix()),Yo.setFromMatrixPosition(z.matrixWorld),L.position.copy(Yo),ah.copy(L.position),ah.add(TC[ye]),L.up.copy(AC[ye]),L.lookAt(ah),L.updateMatrixWorld(),ne.makeTranslation(-Yo.x,-Yo.y,-Yo.z),xv.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),G._frustum.setFromProjectionMatrix(xv,L.coordinateSystem,L.reversedDepth)}else G.updateMatrices(z);r=G.getFrustum(),O(F,K,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===Ko&&w(G,K),G.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(C,D,X)};function w(B,F){const K=e.update(T);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Vi(l.x,l.y,{format:Hs,type:ya})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(F,null,K,S,T,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(F,null,K,M,T,null)}function N(B,F,K,C){let D=null;const X=K.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(X!==void 0)D=X;else if(D=K.isPointLight===!0?m:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const se=D.uuid,re=F.uuid;let me=p[se];me===void 0&&(me={},p[se]=me);let de=me[re];de===void 0&&(de=D.clone(),me[re]=de,F.addEventListener("dispose",I)),D=de}if(D.visible=F.visible,D.wireframe=F.wireframe,C===Ko?D.side=F.shadowSide!==null?F.shadowSide:F.side:D.side=F.shadowSide!==null?F.shadowSide:g[F.side],D.alphaMap=F.alphaMap,D.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,D.map=F.map,D.clipShadows=F.clipShadows,D.clippingPlanes=F.clippingPlanes,D.clipIntersection=F.clipIntersection,D.displacementMap=F.displacementMap,D.displacementScale=F.displacementScale,D.displacementBias=F.displacementBias,D.wireframeLinewidth=F.wireframeLinewidth,D.linewidth=F.linewidth,K.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const se=s.properties.get(D);se.light=K}return D}function O(B,F,K,C,D){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===Ko)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,B.matrixWorld);const re=e.update(B),me=B.material;if(Array.isArray(me)){const de=re.groups;for(let z=0,G=de.length;z<G;z++){const ie=de[z],Ee=me[ie.materialIndex];if(Ee&&Ee.visible){const ye=N(B,Ee,C,D);B.onBeforeShadow(s,B,F,K,re,ye,ie),s.renderBufferDirect(K,null,re,ye,B,ie),B.onAfterShadow(s,B,F,K,re,ye,ie)}}}else if(me.visible){const de=N(B,me,C,D);B.onBeforeShadow(s,B,F,K,re,de,null),s.renderBufferDirect(K,null,re,de,B,null),B.onAfterShadow(s,B,F,K,re,de,null)}}const se=B.children;for(let re=0,me=se.length;re<me;re++)O(se[re],F,K,C,D)}function I(B){B.target.removeEventListener("dispose",I);for(const K in p){const C=p[K],D=B.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const CC={[uh]:fh,[dh]:mh,[hh]:gh,[zs]:ph,[fh]:uh,[mh]:dh,[gh]:hh,[ph]:zs};function wC(s,e){function i(){let W=!1;const Le=new rn;let Ae=null;const Ie=new rn(0,0,0,0);return{setMask:function(Me){Ae!==Me&&!W&&(s.colorMask(Me,Me,Me,Me),Ae=Me)},setLocked:function(Me){W=Me},setClear:function(Me,xe,Ce,it,Ft){Ft===!0&&(Me*=it,xe*=it,Ce*=it),Le.set(Me,xe,Ce,it),Ie.equals(Le)===!1&&(s.clearColor(Me,xe,Ce,it),Ie.copy(Le))},reset:function(){W=!1,Ae=null,Ie.set(-1,0,0,0)}}}function r(){let W=!1,Le=!1,Ae=null,Ie=null,Me=null;return{setReversed:function(xe){if(Le!==xe){const Ce=e.get("EXT_clip_control");xe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Le=xe;const it=Me;Me=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(xe){xe?fe(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(xe){Ae!==xe&&!W&&(s.depthMask(xe),Ae=xe)},setFunc:function(xe){if(Le&&(xe=CC[xe]),Ie!==xe){switch(xe){case uh:s.depthFunc(s.NEVER);break;case fh:s.depthFunc(s.ALWAYS);break;case dh:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case hh:s.depthFunc(s.EQUAL);break;case ph:s.depthFunc(s.GEQUAL);break;case mh:s.depthFunc(s.GREATER);break;case gh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=xe}},setLocked:function(xe){W=xe},setClear:function(xe){Me!==xe&&(Le&&(xe=1-xe),s.clearDepth(xe),Me=xe)},reset:function(){W=!1,Ae=null,Ie=null,Me=null,Le=!1}}}function l(){let W=!1,Le=null,Ae=null,Ie=null,Me=null,xe=null,Ce=null,it=null,Ft=null;return{setTest:function(Et){W||(Et?fe(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Et){Le!==Et&&!W&&(s.stencilMask(Et),Le=Et)},setFunc:function(Et,Nn,xi){(Ae!==Et||Ie!==Nn||Me!==xi)&&(s.stencilFunc(Et,Nn,xi),Ae=Et,Ie=Nn,Me=xi)},setOp:function(Et,Nn,xi){(xe!==Et||Ce!==Nn||it!==xi)&&(s.stencilOp(Et,Nn,xi),xe=Et,Ce=Nn,it=xi)},setLocked:function(Et){W=Et},setClear:function(Et){Ft!==Et&&(s.clearStencil(Et),Ft=Et)},reset:function(){W=!1,Le=null,Ae=null,Ie=null,Me=null,xe=null,Ce=null,it=null,Ft=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,M=[],b=null,T=!1,y=null,v=null,w=null,N=null,O=null,I=null,B=null,F=new Ot(0,0,0),K=0,C=!1,D=null,X=null,se=null,re=null,me=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ie)[1]),z=G>=1):ie.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),z=G>=2);let Ee=null,ye={};const L=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),ve=new rn().fromArray(L),Re=new rn().fromArray(ne);function He(W,Le,Ae,Ie){const Me=new Uint8Array(4),xe=s.createTexture();s.bindTexture(W,xe),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<Ae;Ce++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(Le+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return xe}const te={};te[s.TEXTURE_2D]=He(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=He(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=He(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=He(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),fe(s.DEPTH_TEST),f.setFunc(zs),ot(!1),tn(y_),fe(s.CULL_FACE),pt(_a);function fe(W){_[W]!==!0&&(s.enable(W),_[W]=!0)}function Ne(W){_[W]!==!1&&(s.disable(W),_[W]=!1)}function Xe(W,Le){return g[W]!==Le?(s.bindFramebuffer(W,Le),g[W]=Le,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Le),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ge(W,Le){let Ae=M,Ie=!1;if(W){Ae=S.get(Le),Ae===void 0&&(Ae=[],S.set(Le,Ae));const Me=W.textures;if(Ae.length!==Me.length||Ae[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,Ce=Me.length;xe<Ce;xe++)Ae[xe]=s.COLOR_ATTACHMENT0+xe;Ae.length=Me.length,Ie=!0}}else Ae[0]!==s.BACK&&(Ae[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Ae)}function ht(W){return b!==W?(s.useProgram(W),b=W,!0):!1}const en={[Ur]:s.FUNC_ADD,[Nb]:s.FUNC_SUBTRACT,[Ub]:s.FUNC_REVERSE_SUBTRACT};en[Lb]=s.MIN,en[Ob]=s.MAX;const _t={[Pb]:s.ZERO,[Fb]:s.ONE,[Ib]:s.SRC_COLOR,[lh]:s.SRC_ALPHA,[kb]:s.SRC_ALPHA_SATURATE,[Gb]:s.DST_COLOR,[Bb]:s.DST_ALPHA,[zb]:s.ONE_MINUS_SRC_COLOR,[ch]:s.ONE_MINUS_SRC_ALPHA,[Vb]:s.ONE_MINUS_DST_COLOR,[Hb]:s.ONE_MINUS_DST_ALPHA,[Xb]:s.CONSTANT_COLOR,[Wb]:s.ONE_MINUS_CONSTANT_COLOR,[jb]:s.CONSTANT_ALPHA,[qb]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(W,Le,Ae,Ie,Me,xe,Ce,it,Ft,Et){if(W===_a){T===!0&&(Ne(s.BLEND),T=!1);return}if(T===!1&&(fe(s.BLEND),T=!0),W!==Db){if(W!==y||Et!==C){if((v!==Ur||O!==Ur)&&(s.blendEquation(s.FUNC_ADD),v=Ur,O=Ur),Et)switch(W){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oh:s.blendFunc(s.ONE,s.ONE);break;case M_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case E_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",W);break}else switch(W){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case M_:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E_:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",W);break}w=null,N=null,I=null,B=null,F.set(0,0,0),K=0,y=W,C=Et}return}Me=Me||Le,xe=xe||Ae,Ce=Ce||Ie,(Le!==v||Me!==O)&&(s.blendEquationSeparate(en[Le],en[Me]),v=Le,O=Me),(Ae!==w||Ie!==N||xe!==I||Ce!==B)&&(s.blendFuncSeparate(_t[Ae],_t[Ie],_t[xe],_t[Ce]),w=Ae,N=Ie,I=xe,B=Ce),(it.equals(F)===!1||Ft!==K)&&(s.blendColor(it.r,it.g,it.b,Ft),F.copy(it),K=Ft),y=W,C=!1}function Ct(W,Le){W.side===pa?Ne(s.CULL_FACE):fe(s.CULL_FACE);let Ae=W.side===qn;Le&&(Ae=!Ae),ot(Ae),W.blending===Fs&&W.transparent===!1?pt(_a):pt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ie=W.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Zt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(W){D!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),D=W)}function tn(W){W!==Rb?(fe(s.CULL_FACE),W!==X&&(W===y_?s.cullFace(s.BACK):W===Cb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),X=W}function V(W){W!==se&&(z&&s.lineWidth(W),se=W)}function Zt(W,Le,Ae){W?(fe(s.POLYGON_OFFSET_FILL),(re!==Le||me!==Ae)&&(s.polygonOffset(Le,Ae),re=Le,me=Ae)):Ne(s.POLYGON_OFFSET_FILL)}function Mt(W){W?fe(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function Ut(W){W===void 0&&(W=s.TEXTURE0+de-1),Ee!==W&&(s.activeTexture(W),Ee=W)}function Ye(W,Le,Ae){Ae===void 0&&(Ee===null?Ae=s.TEXTURE0+de-1:Ae=Ee);let Ie=ye[Ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},ye[Ae]=Ie),(Ie.type!==W||Ie.texture!==Le)&&(Ee!==Ae&&(s.activeTexture(Ae),Ee=Ae),s.bindTexture(W,Le||te[W]),Ie.type=W,Ie.texture=Le)}function U(){const W=ye[Ee];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function pe(){try{s.texSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Se(){try{s.texSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function we(){try{s.texStorage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function We(){try{s.texStorage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function nt(){try{s.texImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function be(){try{s.texImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Te(W){ve.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),ve.copy(W))}function ze(W){Re.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Re.copy(W))}function Fe(W,Le){let Ae=p.get(Le);Ae===void 0&&(Ae=new WeakMap,p.set(Le,Ae));let Ie=Ae.get(W);Ie===void 0&&(Ie=s.getUniformBlockIndex(Le,W.name),Ae.set(W,Ie))}function De(W,Le){const Ie=p.get(Le).get(W);m.get(Le)!==Ie&&(s.uniformBlockBinding(Le,Ie,W.__bindingPointIndex),m.set(Le,Ie))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},Ee=null,ye={},g={},S=new WeakMap,M=[],b=null,T=!1,y=null,v=null,w=null,N=null,O=null,I=null,B=null,F=new Ot(0,0,0),K=0,C=!1,D=null,X=null,se=null,re=null,me=null,ve.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:fe,disable:Ne,bindFramebuffer:Xe,drawBuffers:Ge,useProgram:ht,setBlending:pt,setMaterial:Ct,setFlipSided:ot,setCullFace:tn,setLineWidth:V,setPolygonOffset:Zt,setScissorTest:Mt,activeTexture:Ut,bindTexture:Ye,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:nt,texImage3D:be,updateUBOMapping:Fe,uniformBlockBinding:De,texStorage2D:we,texStorage3D:We,texSubImage2D:pe,texSubImage3D:Se,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ke,scissor:Te,viewport:ze,reset:ct}}function DC(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,_=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return M?new OffscreenCanvas(U,E):ru("canvas")}function T(U,E,j){let pe=1;const Se=Ye(U);if((Se.width>j||Se.height>j)&&(pe=j/Math.max(Se.width,Se.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ue=Math.floor(pe*Se.width),Ke=Math.floor(pe*Se.height);g===void 0&&(g=b(ue,Ke));const we=E?b(ue,Ke):g;return we.width=ue,we.height=Ke,we.getContext("2d").drawImage(U,0,0,ue,Ke),st("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ue+"x"+Ke+")."),we}else return"data"in U&&st("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function w(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(U,E,j,pe,Se=!1){if(U!==null){if(s[U]!==void 0)return s[U];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ue=E;if(E===s.RED&&(j===s.FLOAT&&(ue=s.R32F),j===s.HALF_FLOAT&&(ue=s.R16F),j===s.UNSIGNED_BYTE&&(ue=s.R8)),E===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.R8UI),j===s.UNSIGNED_SHORT&&(ue=s.R16UI),j===s.UNSIGNED_INT&&(ue=s.R32UI),j===s.BYTE&&(ue=s.R8I),j===s.SHORT&&(ue=s.R16I),j===s.INT&&(ue=s.R32I)),E===s.RG&&(j===s.FLOAT&&(ue=s.RG32F),j===s.HALF_FLOAT&&(ue=s.RG16F),j===s.UNSIGNED_BYTE&&(ue=s.RG8)),E===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.RG8UI),j===s.UNSIGNED_SHORT&&(ue=s.RG16UI),j===s.UNSIGNED_INT&&(ue=s.RG32UI),j===s.BYTE&&(ue=s.RG8I),j===s.SHORT&&(ue=s.RG16I),j===s.INT&&(ue=s.RG32I)),E===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),j===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),j===s.UNSIGNED_INT&&(ue=s.RGB32UI),j===s.BYTE&&(ue=s.RGB8I),j===s.SHORT&&(ue=s.RGB16I),j===s.INT&&(ue=s.RGB32I)),E===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),j===s.UNSIGNED_INT&&(ue=s.RGBA32UI),j===s.BYTE&&(ue=s.RGBA8I),j===s.SHORT&&(ue=s.RGBA16I),j===s.INT&&(ue=s.RGBA32I)),E===s.RGB&&(j===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),E===s.RGBA){const Ke=Se?iu:bt.getTransfer(pe);j===s.FLOAT&&(ue=s.RGBA32F),j===s.HALF_FLOAT&&(ue=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ue=Ke===Ht?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function O(U,E){let j;return U?E===null||E===ki||E===el?j=s.DEPTH24_STENCIL8:E===Bi?j=s.DEPTH32F_STENCIL8:E===$o&&(j=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ki||E===el?j=s.DEPTH_COMPONENT24:E===Bi?j=s.DEPTH_COMPONENT32F:E===$o&&(j=s.DEPTH_COMPONENT16),j}function I(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Dn&&U.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function B(U){const E=U.target;E.removeEventListener("dispose",B),K(E),E.isVideoTexture&&_.delete(E)}function F(U){const E=U.target;E.removeEventListener("dispose",F),D(E)}function K(U){const E=r.get(U);if(E.__webglInit===void 0)return;const j=U.source,pe=S.get(j);if(pe){const Se=pe[E.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&C(U),Object.keys(pe).length===0&&S.delete(j)}r.remove(U)}function C(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const j=U.source,pe=S.get(j);delete pe[E.__cacheKey],f.memory.textures--}function D(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let Se=0;Se<E.__webglFramebuffer[pe].length;Se++)s.deleteFramebuffer(E.__webglFramebuffer[pe][Se]);else s.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[pe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=U.textures;for(let pe=0,Se=j.length;pe<Se;pe++){const ue=r.get(j[pe]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),f.memory.textures--),r.remove(j[pe])}r.remove(U)}let X=0;function se(){X=0}function re(){const U=X;return U>=l.maxTextures&&st("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),X+=1,U}function me(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function de(U,E){const j=r.get(U);if(U.isVideoTexture&&Mt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&j.__version!==U.version){const pe=U.image;if(pe===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{te(j,U,E);return}}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+E)}function z(U,E){const j=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){te(j,U,E);return}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+E)}function G(U,E){const j=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){te(j,U,E);return}i.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+E)}function ie(U,E){const j=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&j.__version!==U.version){fe(j,U,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+E)}const Ee={[xh]:s.REPEAT,[ma]:s.CLAMP_TO_EDGE,[Sh]:s.MIRRORED_REPEAT},ye={[Dn]:s.NEAREST,[Kb]:s.NEAREST_MIPMAP_NEAREST,[bc]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[Rd]:s.LINEAR_MIPMAP_NEAREST,[Or]:s.LINEAR_MIPMAP_LINEAR},L={[e1]:s.NEVER,[r1]:s.ALWAYS,[t1]:s.LESS,[Sp]:s.LEQUAL,[n1]:s.EQUAL,[yp]:s.GEQUAL,[i1]:s.GREATER,[a1]:s.NOTEQUAL};function ne(U,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===Rd||E.magFilter===bc||E.magFilter===Or||E.minFilter===Pn||E.minFilter===Rd||E.minFilter===bc||E.minFilter===Or)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,Ee[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,Ee[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,Ee[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,ye[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,ye[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==bc&&E.minFilter!==Or||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ve(U,E){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",B));const pe=E.source;let Se=S.get(pe);Se===void 0&&(Se={},S.set(pe,Se));const ue=me(E);if(ue!==U.__cacheKey){Se[ue]===void 0&&(Se[ue]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,j=!0),Se[ue].usedTimes++;const Ke=Se[U.__cacheKey];Ke!==void 0&&(Se[U.__cacheKey].usedTimes--,Ke.usedTimes===0&&C(E)),U.__cacheKey=ue,U.__webglTexture=Se[ue].texture}return j}function Re(U,E,j){return Math.floor(Math.floor(U/j)/E)}function He(U,E,j,pe){const ue=U.updateRanges;if(ue.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,j,pe,E.data);else{ue.sort((be,Te)=>be.start-Te.start);let Ke=0;for(let be=1;be<ue.length;be++){const Te=ue[Ke],ze=ue[be],Fe=Te.start+Te.count,De=Re(ze.start,E.width,4),ct=Re(Te.start,E.width,4);ze.start<=Fe+1&&De===ct&&Re(ze.start+ze.count-1,E.width,4)===De?Te.count=Math.max(Te.count,ze.start+ze.count-Te.start):(++Ke,ue[Ke]=ze)}ue.length=Ke+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),We=s.getParameter(s.UNPACK_SKIP_PIXELS),nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let be=0,Te=ue.length;be<Te;be++){const ze=ue[be],Fe=Math.floor(ze.start/4),De=Math.ceil(ze.count/4),ct=Fe%E.width,W=Math.floor(Fe/E.width),Le=De,Ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,ct,W,Le,Ae,j,pe,E.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,nt)}}function te(U,E,j){let pe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=s.TEXTURE_3D);const Se=ve(U,E),ue=E.source;i.bindTexture(pe,U.__webglTexture,s.TEXTURE0+j);const Ke=r.get(ue);if(ue.version!==Ke.__version||Se===!0){i.activeTexture(s.TEXTURE0+j);const we=bt.getPrimaries(bt.workingColorSpace),We=E.colorSpace===ar?null:bt.getPrimaries(E.colorSpace),nt=E.colorSpace===ar||we===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let be=T(E.image,!1,l.maxTextureSize);be=Ut(E,be);const Te=c.convert(E.format,E.colorSpace),ze=c.convert(E.type);let Fe=N(E.internalFormat,Te,ze,E.colorSpace,E.isVideoTexture);ne(pe,E);let De;const ct=E.mipmaps,W=E.isVideoTexture!==!0,Le=Ke.__version===void 0||Se===!0,Ae=ue.dataReady,Ie=I(E,be);if(E.isDepthTexture)Fe=O(E.format===Pr,E.type),Le&&(W?i.texStorage2D(s.TEXTURE_2D,1,Fe,be.width,be.height):i.texImage2D(s.TEXTURE_2D,0,Fe,be.width,be.height,0,Te,ze,null));else if(E.isDataTexture)if(ct.length>0){W&&Le&&i.texStorage2D(s.TEXTURE_2D,Ie,Fe,ct[0].width,ct[0].height);for(let Me=0,xe=ct.length;Me<xe;Me++)De=ct[Me],W?Ae&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,De.width,De.height,Te,ze,De.data):i.texImage2D(s.TEXTURE_2D,Me,Fe,De.width,De.height,0,Te,ze,De.data);E.generateMipmaps=!1}else W?(Le&&i.texStorage2D(s.TEXTURE_2D,Ie,Fe,be.width,be.height),Ae&&He(E,be,Te,ze)):i.texImage2D(s.TEXTURE_2D,0,Fe,be.width,be.height,0,Te,ze,be.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Fe,ct[0].width,ct[0].height,be.depth);for(let Me=0,xe=ct.length;Me<xe;Me++)if(De=ct[Me],E.format!==wi)if(Te!==null)if(W){if(Ae)if(E.layerUpdates.size>0){const Ce=K_(De.width,De.height,E.format,E.type);for(const it of E.layerUpdates){const Ft=De.data.subarray(it*Ce/De.data.BYTES_PER_ELEMENT,(it+1)*Ce/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,it,De.width,De.height,1,Te,Ft)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,be.depth,Te,De.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,Fe,De.width,De.height,be.depth,0,De.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ae&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,be.depth,Te,ze,De.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Me,Fe,De.width,De.height,be.depth,0,Te,ze,De.data)}else{W&&Le&&i.texStorage2D(s.TEXTURE_2D,Ie,Fe,ct[0].width,ct[0].height);for(let Me=0,xe=ct.length;Me<xe;Me++)De=ct[Me],E.format!==wi?Te!==null?W?Ae&&i.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,De.width,De.height,Te,De.data):i.compressedTexImage2D(s.TEXTURE_2D,Me,Fe,De.width,De.height,0,De.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ae&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,De.width,De.height,Te,ze,De.data):i.texImage2D(s.TEXTURE_2D,Me,Fe,De.width,De.height,0,Te,ze,De.data)}else if(E.isDataArrayTexture)if(W){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Fe,be.width,be.height,be.depth),Ae)if(E.layerUpdates.size>0){const Me=K_(be.width,be.height,E.format,E.type);for(const xe of E.layerUpdates){const Ce=be.data.subarray(xe*Me/be.data.BYTES_PER_ELEMENT,(xe+1)*Me/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,be.width,be.height,1,Te,ze,Ce)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Te,ze,be.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,be.width,be.height,be.depth,0,Te,ze,be.data);else if(E.isData3DTexture)W?(Le&&i.texStorage3D(s.TEXTURE_3D,Ie,Fe,be.width,be.height,be.depth),Ae&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Te,ze,be.data)):i.texImage3D(s.TEXTURE_3D,0,Fe,be.width,be.height,be.depth,0,Te,ze,be.data);else if(E.isFramebufferTexture){if(Le)if(W)i.texStorage2D(s.TEXTURE_2D,Ie,Fe,be.width,be.height);else{let Me=be.width,xe=be.height;for(let Ce=0;Ce<Ie;Ce++)i.texImage2D(s.TEXTURE_2D,Ce,Fe,Me,xe,0,Te,ze,null),Me>>=1,xe>>=1}}else if(ct.length>0){if(W&&Le){const Me=Ye(ct[0]);i.texStorage2D(s.TEXTURE_2D,Ie,Fe,Me.width,Me.height)}for(let Me=0,xe=ct.length;Me<xe;Me++)De=ct[Me],W?Ae&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,Te,ze,De):i.texImage2D(s.TEXTURE_2D,Me,Fe,Te,ze,De);E.generateMipmaps=!1}else if(W){if(Le){const Me=Ye(be);i.texStorage2D(s.TEXTURE_2D,Ie,Fe,Me.width,Me.height)}Ae&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,ze,be)}else i.texImage2D(s.TEXTURE_2D,0,Fe,Te,ze,be);y(E)&&v(pe),Ke.__version=ue.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function fe(U,E,j){if(E.image.length!==6)return;const pe=ve(U,E),Se=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+j);const ue=r.get(Se);if(Se.version!==ue.__version||pe===!0){i.activeTexture(s.TEXTURE0+j);const Ke=bt.getPrimaries(bt.workingColorSpace),we=E.colorSpace===ar?null:bt.getPrimaries(E.colorSpace),We=E.colorSpace===ar||Ke===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const nt=E.isCompressedTexture||E.image[0].isCompressedTexture,be=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let xe=0;xe<6;xe++)!nt&&!be?Te[xe]=T(E.image[xe],!0,l.maxCubemapSize):Te[xe]=be?E.image[xe].image:E.image[xe],Te[xe]=Ut(E,Te[xe]);const ze=Te[0],Fe=c.convert(E.format,E.colorSpace),De=c.convert(E.type),ct=N(E.internalFormat,Fe,De,E.colorSpace),W=E.isVideoTexture!==!0,Le=ue.__version===void 0||pe===!0,Ae=Se.dataReady;let Ie=I(E,ze);ne(s.TEXTURE_CUBE_MAP,E);let Me;if(nt){W&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ct,ze.width,ze.height);for(let xe=0;xe<6;xe++){Me=Te[xe].mipmaps;for(let Ce=0;Ce<Me.length;Ce++){const it=Me[Ce];E.format!==wi?Fe!==null?W?Ae&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,it.width,it.height,Fe,it.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,ct,it.width,it.height,0,it.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,it.width,it.height,Fe,De,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,ct,it.width,it.height,0,Fe,De,it.data)}}}else{if(Me=E.mipmaps,W&&Le){Me.length>0&&Ie++;const xe=Ye(Te[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ct,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(be){W?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Te[xe].width,Te[xe].height,Fe,De,Te[xe].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Te[xe].width,Te[xe].height,0,Fe,De,Te[xe].data);for(let Ce=0;Ce<Me.length;Ce++){const Ft=Me[Ce].image[xe].image;W?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,Ft.width,Ft.height,Fe,De,Ft.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,ct,Ft.width,Ft.height,0,Fe,De,Ft.data)}}else{W?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Fe,De,Te[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Fe,De,Te[xe]);for(let Ce=0;Ce<Me.length;Ce++){const it=Me[Ce];W?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,Fe,De,it.image[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,ct,Fe,De,it.image[xe])}}}y(E)&&v(s.TEXTURE_CUBE_MAP),ue.__version=Se.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Ne(U,E,j,pe,Se,ue){const Ke=c.convert(j.format,j.colorSpace),we=c.convert(j.type),We=N(j.internalFormat,Ke,we,j.colorSpace),nt=r.get(E),be=r.get(j);if(be.__renderTarget=E,!nt.__hasExternalTextures){const Te=Math.max(1,E.width>>ue),ze=Math.max(1,E.height>>ue);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?i.texImage3D(Se,ue,We,Te,ze,E.depth,0,Ke,we,null):i.texImage2D(Se,ue,We,Te,ze,0,Ke,we,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),Zt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,Se,be.__webglTexture,0,V(E)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,Se,be.__webglTexture,ue),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(U,E,j){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const pe=E.depthTexture,Se=pe&&pe.isDepthTexture?pe.type:null,ue=O(E.stencilBuffer,Se),Ke=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Zt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),ue,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ue,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,U)}else{const pe=E.textures;for(let Se=0;Se<pe.length;Se++){const ue=pe[Se],Ke=c.convert(ue.format,ue.colorSpace),we=c.convert(ue.type),We=N(ue.internalFormat,Ke,we,ue.colorSpace);Zt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),We,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),We,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,We,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(U,E,j){const pe=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=r.get(E.depthTexture);if(Se.__renderTarget=E,(!Se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),Se.__webglTexture===void 0){Se.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E.depthTexture);const nt=c.convert(E.depthTexture.format),be=c.convert(E.depthTexture.type);let Te;E.depthTexture.format===Ma?Te=s.DEPTH_COMPONENT24:E.depthTexture.format===Pr&&(Te=s.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Te,E.width,E.height,0,nt,be,null)}}else de(E.depthTexture,0);const ue=Se.__webglTexture,Ke=V(E),we=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,We=E.depthTexture.format===Pr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ma)Zt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,we,ue,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,We,we,ue,0);else if(E.depthTexture.format===Pr)Zt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,we,ue,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,We,we,ue,0);else throw new Error("Unknown depthTexture format")}function ht(U){const E=r.get(U),j=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const pe=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const Se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",Se)};pe.addEventListener("dispose",Se),E.__depthDisposeCallback=Se}E.__boundDepthTexture=pe}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let pe=0;pe<6;pe++)Ge(E.__webglFramebuffer[pe],U,pe);else{const pe=U.texture.mipmaps;pe&&pe.length>0?Ge(E.__webglFramebuffer[0],U,0):Ge(E.__webglFramebuffer,U,0)}else if(j){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=s.createRenderbuffer(),Xe(E.__webglDepthbuffer[pe],U,!1);else{const Se=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,ue)}}else{const pe=U.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Xe(E.__webglDepthbuffer,U,!1);else{const Se=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,ue)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function en(U,E,j){const pe=r.get(U);E!==void 0&&Ne(pe.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&ht(U)}function _t(U){const E=U.texture,j=r.get(U),pe=r.get(E);U.addEventListener("dispose",F);const Se=U.textures,ue=U.isWebGLCubeRenderTarget===!0,Ke=Se.length>1;if(Ke||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=E.version,f.memory.textures++),ue){j.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[we]=[];for(let We=0;We<E.mipmaps.length;We++)j.__webglFramebuffer[we][We]=s.createFramebuffer()}else j.__webglFramebuffer[we]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)j.__webglFramebuffer[we]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let we=0,We=Se.length;we<We;we++){const nt=r.get(Se[we]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),f.memory.textures++)}if(U.samples>0&&Zt(U)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let we=0;we<Se.length;we++){const We=Se[we];j.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[we]);const nt=c.convert(We.format,We.colorSpace),be=c.convert(We.type),Te=N(We.internalFormat,nt,be,We.colorSpace,U.isXRRenderTarget===!0),ze=V(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Te,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,j.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(j.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){i.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)Ne(j.__webglFramebuffer[we][We],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,We);else Ne(j.__webglFramebuffer[we],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let we=0,We=Se.length;we<We;we++){const nt=Se[we],be=r.get(nt);let Te=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Te=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Te,be.__webglTexture),ne(Te,nt),Ne(j.__webglFramebuffer,U,nt,s.COLOR_ATTACHMENT0+we,Te,0),y(nt)&&v(Te)}i.unbindTexture()}else{let we=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(we,pe.__webglTexture),ne(we,E),E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)Ne(j.__webglFramebuffer[We],U,E,s.COLOR_ATTACHMENT0,we,We);else Ne(j.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,we,0);y(E)&&v(we),i.unbindTexture()}U.depthBuffer&&ht(U)}function pt(U){const E=U.textures;for(let j=0,pe=E.length;j<pe;j++){const Se=E[j];if(y(Se)){const ue=w(U),Ke=r.get(Se).__webglTexture;i.bindTexture(ue,Ke),v(ue),i.unbindTexture()}}}const Ct=[],ot=[];function tn(U){if(U.samples>0){if(Zt(U)===!1){const E=U.textures,j=U.width,pe=U.height;let Se=s.COLOR_BUFFER_BIT;const ue=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(U),we=E.length>1;if(we)for(let nt=0;nt<E.length;nt++)i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const We=U.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let nt=0;nt<E.length;nt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const be=r.get(E[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,j,pe,0,0,j,pe,Se,s.NEAREST),m===!0&&(Ct.length=0,ot.length=0,Ct.push(s.COLOR_ATTACHMENT0+nt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ct.push(ue),ot.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ct))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let nt=0;nt<E.length;nt++){i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const be=r.get(E[nt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function V(U){return Math.min(l.maxSamples,U.samples)}function Zt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(U){const E=f.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Ut(U,E){const j=U.colorSpace,pe=U.format,Se=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==Gs&&j!==ar&&(bt.getTransfer(j)===Ht?(pe!==wi||Se!==ai)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",j)),E}function Ye(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=re,this.resetTextureUnits=se,this.setTexture2D=de,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=ie,this.rebindTextures=en,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function NC(s,e){function i(r,l=ar){let c;const f=bt.getTransfer(l);if(r===ai)return s.UNSIGNED_BYTE;if(r===mp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===gp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===sx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ox)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===ax)return s.BYTE;if(r===rx)return s.SHORT;if(r===$o)return s.UNSIGNED_SHORT;if(r===pp)return s.INT;if(r===ki)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===ya)return s.HALF_FLOAT;if(r===lx)return s.ALPHA;if(r===cx)return s.RGB;if(r===wi)return s.RGBA;if(r===Ma)return s.DEPTH_COMPONENT;if(r===Pr)return s.DEPTH_STENCIL;if(r===ux)return s.RED;if(r===_p)return s.RED_INTEGER;if(r===Hs)return s.RG;if(r===vp)return s.RG_INTEGER;if(r===xp)return s.RGBA_INTEGER;if(r===Qc||r===Jc||r===$c||r===eu)if(f===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yh||r===Mh||r===Eh||r===bh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===yh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Eh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Th||r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===Nh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Th||r===Ah)return f===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Rh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ch)return c.COMPRESSED_R11_EAC;if(r===wh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Dh)return c.COMPRESSED_RG11_EAC;if(r===Nh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Uh||r===Lh||r===Oh||r===Ph||r===Fh||r===Ih||r===zh||r===Bh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Uh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Oh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ph)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ih)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jh||r===qh||r===Yh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===jh)return f===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zh||r===Kh||r===Qh||r===Jh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Zh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===el?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const UC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LC=`
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

}`;class OC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new bx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Xi({vertexShader:UC,fragmentShader:LC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ba(new fu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PC extends Xs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,g=null,S=null,M=null,b=null;const T=typeof XRWebGLBinding<"u",y=new OC,v={},w=i.getContextAttributes();let N=null,O=null;const I=[],B=[],F=new Pt;let K=null;const C=new ii;C.viewport=new rn;const D=new ii;D.viewport=new rn;const X=[C,D],se=new W1;let re=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=I[te];return fe===void 0&&(fe=new Kd,I[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=I[te];return fe===void 0&&(fe=new Kd,I[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=I[te];return fe===void 0&&(fe=new Kd,I[te]=fe),fe.getHandSpace()};function de(te){const fe=B.indexOf(te.inputSource);if(fe===-1)return;const Ne=I[fe];Ne!==void 0&&(Ne.update(te.inputSource,te.frame,p||f),Ne.dispatchEvent({type:te.type,data:te.inputSource}))}function z(){l.removeEventListener("select",de),l.removeEventListener("selectstart",de),l.removeEventListener("selectend",de),l.removeEventListener("squeeze",de),l.removeEventListener("squeezestart",de),l.removeEventListener("squeezeend",de),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",G);for(let te=0;te<I.length;te++){const fe=B[te];fe!==null&&(B[te]=null,I[te].disconnect(fe))}re=null,me=null,y.reset();for(const te in v)delete v[te];e.setRenderTarget(N),M=null,S=null,g=null,l=null,O=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(K),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",de),l.addEventListener("selectstart",de),l.addEventListener("selectend",de),l.addEventListener("squeeze",de),l.addEventListener("squeezestart",de),l.addEventListener("squeezeend",de),l.addEventListener("end",z),l.addEventListener("inputsourceschange",G),w.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,Xe=null,Ge=null;w.depth&&(Ge=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ne=w.stencil?Pr:Ma,Xe=w.stencil?el:ki);const ht={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};g=this.getBinding(),S=g.createProjectionLayer(ht),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),O=new Vi(S.textureWidth,S.textureHeight,{format:wi,type:ai,depthTexture:new nl(S.textureWidth,S.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ne={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ne),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Vi(M.framebufferWidth,M.framebufferHeight,{format:wi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),He.setContext(l),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(te){for(let fe=0;fe<te.removed.length;fe++){const Ne=te.removed[fe],Xe=B.indexOf(Ne);Xe>=0&&(B[Xe]=null,I[Xe].disconnect(Ne))}for(let fe=0;fe<te.added.length;fe++){const Ne=te.added[fe];let Xe=B.indexOf(Ne);if(Xe===-1){for(let ht=0;ht<I.length;ht++)if(ht>=B.length){B.push(Ne),Xe=ht;break}else if(B[ht]===null){B[ht]=Ne,Xe=ht;break}if(Xe===-1)break}const Ge=I[Xe];Ge&&Ge.connect(Ne)}}const ie=new ae,Ee=new ae;function ye(te,fe,Ne){ie.setFromMatrixPosition(fe.matrixWorld),Ee.setFromMatrixPosition(Ne.matrixWorld);const Xe=ie.distanceTo(Ee),Ge=fe.projectionMatrix.elements,ht=Ne.projectionMatrix.elements,en=Ge[14]/(Ge[10]-1),_t=Ge[14]/(Ge[10]+1),pt=(Ge[9]+1)/Ge[5],Ct=(Ge[9]-1)/Ge[5],ot=(Ge[8]-1)/Ge[0],tn=(ht[8]+1)/ht[0],V=en*ot,Zt=en*tn,Mt=Xe/(-ot+tn),Ut=Mt*-ot;if(fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ut),te.translateZ(Mt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ge[10]===-1)te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ye=en+Mt,U=_t+Mt,E=V-Ut,j=Zt+(Xe-Ut),pe=pt*_t/U*Ye,Se=Ct*_t/U*Ye;te.projectionMatrix.makePerspective(E,j,pe,Se,Ye,U),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function L(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let fe=te.near,Ne=te.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(Ne=y.depthFar)),se.near=D.near=C.near=fe,se.far=D.far=C.far=Ne,(re!==se.near||me!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),re=se.near,me=se.far),se.layers.mask=te.layers.mask|6,C.layers.mask=se.layers.mask&3,D.layers.mask=se.layers.mask&5;const Xe=te.parent,Ge=se.cameras;L(se,Xe);for(let ht=0;ht<Ge.length;ht++)L(Ge[ht],Xe);Ge.length===2?ye(se,C,D):se.projectionMatrix.copy(C.projectionMatrix),ne(te,se,Xe)};function ne(te,fe,Ne){Ne===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(Ne.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=$h*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(te){m=te,S!==null&&(S.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(se)},this.getCameraTexture=function(te){return v[te]};let ve=null;function Re(te,fe){if(_=fe.getViewerPose(p||f),b=fe,_!==null){const Ne=_.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let Xe=!1;Ne.length!==se.cameras.length&&(se.cameras.length=0,Xe=!0);for(let _t=0;_t<Ne.length;_t++){const pt=Ne[_t];let Ct=null;if(M!==null)Ct=M.getViewport(pt);else{const tn=g.getViewSubImage(S,pt);Ct=tn.viewport,_t===0&&(e.setRenderTargetTextures(O,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(O))}let ot=X[_t];ot===void 0&&(ot=new ii,ot.layers.enable(_t),ot.viewport=new rn,X[_t]=ot),ot.matrix.fromArray(pt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(pt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),_t===0&&(se.matrix.copy(ot.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Xe===!0&&se.cameras.push(ot)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const _t=g.getDepthInformation(Ne[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,l.renderState)}if(Ge&&Ge.includes("camera-access")&&T){e.state.unbindTexture(),g=r.getBinding();for(let _t=0;_t<Ne.length;_t++){const pt=Ne[_t].camera;if(pt){let Ct=v[pt];Ct||(Ct=new bx,v[pt]=Ct);const ot=g.getCameraImage(pt);Ct.sourceTexture=ot}}}}for(let Ne=0;Ne<I.length;Ne++){const Xe=B[Ne],Ge=I[Ne];Xe!==null&&Ge!==void 0&&Ge.update(Xe,fe,p||f)}ve&&ve(te,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),b=null}const He=new Rx;He.setAnimationLoop(Re),this.setAnimationLoop=function(te){ve=te},this.dispose=function(){}}}const Dr=new Ea,FC=new $t;function IC(s,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,xx(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,w,N,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),g(y,v)):v.isMeshPhongMaterial?(c(y,v),_(y,v)):v.isMeshStandardMaterial?(c(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,O)):v.isMeshMatcapMaterial?(c(y,v),b(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),T(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,w,N):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===qn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===qn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const w=e.get(v),N=w.envMap,O=w.envMapRotation;N&&(y.envMap.value=N,Dr.copy(O),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),y.envMapRotation.value.setFromMatrix4(FC.makeRotationFromEuler(Dr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,w,N){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*w,y.scale.value=N*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,w){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===qn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const w=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function zC(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,N){const O=N.program;r.uniformBlockBinding(w,O)}function p(w,N){let O=l[w.id];O===void 0&&(b(w),O=_(w),l[w.id]=O,w.addEventListener("dispose",y));const I=N.program;r.updateUBOMapping(w,I);const B=e.render.frame;c[w.id]!==B&&(S(w),c[w.id]=B)}function _(w){const N=g();w.__bindingPointIndex=N;const O=s.createBuffer(),I=w.__size,B=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,I,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,O),O}function g(){for(let w=0;w<h;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(w){const N=l[w.id],O=w.uniforms,I=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let B=0,F=O.length;B<F;B++){const K=Array.isArray(O[B])?O[B]:[O[B]];for(let C=0,D=K.length;C<D;C++){const X=K[C];if(M(X,B,C,I)===!0){const se=X.__offset,re=Array.isArray(X.value)?X.value:[X.value];let me=0;for(let de=0;de<re.length;de++){const z=re[de],G=T(z);typeof z=="number"||typeof z=="boolean"?(X.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,se+me,X.__data)):z.isMatrix3?(X.__data[0]=z.elements[0],X.__data[1]=z.elements[1],X.__data[2]=z.elements[2],X.__data[3]=0,X.__data[4]=z.elements[3],X.__data[5]=z.elements[4],X.__data[6]=z.elements[5],X.__data[7]=0,X.__data[8]=z.elements[6],X.__data[9]=z.elements[7],X.__data[10]=z.elements[8],X.__data[11]=0):(z.toArray(X.__data,me),me+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,X.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,N,O,I){const B=w.value,F=N+"_"+O;if(I[F]===void 0)return typeof B=="number"||typeof B=="boolean"?I[F]=B:I[F]=B.clone(),!0;{const K=I[F];if(typeof B=="number"||typeof B=="boolean"){if(K!==B)return I[F]=B,!0}else if(K.equals(B)===!1)return K.copy(B),!0}return!1}function b(w){const N=w.uniforms;let O=0;const I=16;for(let F=0,K=N.length;F<K;F++){const C=Array.isArray(N[F])?N[F]:[N[F]];for(let D=0,X=C.length;D<X;D++){const se=C[D],re=Array.isArray(se.value)?se.value:[se.value];for(let me=0,de=re.length;me<de;me++){const z=re[me],G=T(z),ie=O%I,Ee=ie%G.boundary,ye=ie+Ee;O+=Ee,ye!==0&&I-ye<G.storage&&(O+=I-ye),se.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=O,O+=G.storage}}}const B=O%I;return B>0&&(O+=I-B),w.__size=O,w.__cache={},this}function T(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",w),N}function y(w){const N=w.target;N.removeEventListener("dispose",y);const O=f.indexOf(N.__bindingPointIndex);f.splice(O,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const BC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function HC(){return Ii===null&&(Ii=new L1(BC,16,16,Hs,ya),Ii.name="DFG_LUT",Ii.minFilter=Pn,Ii.magFilter=Pn,Ii.wrapS=ma,Ii.wrapT=ma,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class GC{constructor(e={}){const{canvas:i=s1(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:M=ai}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const T=M,y=new Set([xp,vp,_p]),v=new Set([ai,ki,$o,el,mp,gp]),w=new Uint32Array(4),N=new Int32Array(4);let O=null,I=null;const B=[],F=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1;this._outputColorSpace=gi;let X=0,se=0,re=null,me=-1,de=null;const z=new rn,G=new rn;let ie=null;const Ee=new Ot(0);let ye=0,L=i.width,ne=i.height,ve=1,Re=null,He=null;const te=new rn(0,0,L,ne),fe=new rn(0,0,L,ne);let Ne=!1;const Xe=new Ep;let Ge=!1,ht=!1;const en=new $t,_t=new ae,pt=new rn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function tn(){return re===null?ve:1}let V=r;function Zt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${hp}`),i.addEventListener("webglcontextlost",it,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Et,!1),V===null){const q="webgl2";if(V=Zt(q,R),V===null)throw Zt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Rt("WebGLRenderer: "+R.message),R}let Mt,Ut,Ye,U,E,j,pe,Se,ue,Ke,we,We,nt,be,Te,ze,Fe,De,ct,W,Le,Ae,Ie,Me;function xe(){Mt=new H2(V),Mt.init(),Ae=new NC(V,Mt),Ut=new N2(V,Mt,e,Ae),Ye=new wC(V,Mt),Ut.reversedDepthBuffer&&S&&Ye.buffers.depth.setReversed(!0),U=new k2(V),E=new pC,j=new DC(V,Mt,Ye,E,Ut,Ae,U),pe=new L2(C),Se=new B2(C),ue=new q1(V),Ie=new w2(V,ue),Ke=new G2(V,ue,U,Ie),we=new W2(V,Ke,ue,U),ct=new X2(V,Ut,j),ze=new U2(E),We=new hC(C,pe,Se,Mt,Ut,Ie,ze),nt=new IC(C,E),be=new gC,Te=new MC(Mt),De=new C2(C,pe,Se,Ye,we,b,m),Fe=new RC(C,we,Ut),Me=new zC(V,U,Ut,Ye),W=new D2(V,Mt,U),Le=new V2(V,Mt,U),U.programs=We.programs,C.capabilities=Ut,C.extensions=Mt,C.properties=E,C.renderLists=be,C.shadowMap=Fe,C.state=Ye,C.info=U}xe(),T!==ai&&(K=new q2(T,i.width,i.height,l,c));const Ce=new PC(C,V);this.xr=Ce,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(R){R!==void 0&&(ve=R,this.setSize(L,ne,!1))},this.getSize=function(R){return R.set(L,ne)},this.setSize=function(R,q,oe=!0){if(Ce.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,ne=q,i.width=Math.floor(R*ve),i.height=Math.floor(q*ve),oe===!0&&(i.style.width=R+"px",i.style.height=q+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(L*ve,ne*ve).floor()},this.setDrawingBufferSize=function(R,q,oe){L=R,ne=q,ve=oe,i.width=Math.floor(R*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(T===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,q,oe,$){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,q,oe,$),Ye.viewport(z.copy(te).multiplyScalar(ve).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,q,oe,$){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,q,oe,$),Ye.scissor(G.copy(fe).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(R){Ye.setScissorTest(Ne=R)},this.setOpaqueSort=function(R){Re=R},this.setTransparentSort=function(R){He=R},this.getClearColor=function(R){return R.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,oe=!0){let $=0;if(R){let Z=!1;if(re!==null){const Ue=re.texture.format;Z=y.has(Ue)}if(Z){const Ue=re.texture.type,Be=v.has(Ue),Oe=De.getClearColor(),Ve=De.getClearAlpha(),je=Oe.r,$e=Oe.g,qe=Oe.b;Be?(w[0]=je,w[1]=$e,w[2]=qe,w[3]=Ve,V.clearBufferuiv(V.COLOR,0,w)):(N[0]=je,N[1]=$e,N[2]=qe,N[3]=Ve,V.clearBufferiv(V.COLOR,0,N))}else $|=V.COLOR_BUFFER_BIT}q&&($|=V.DEPTH_BUFFER_BIT),oe&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",it,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),De.dispose(),be.dispose(),Te.dispose(),E.dispose(),pe.dispose(),Se.dispose(),we.dispose(),Ie.dispose(),Me.dispose(),We.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Gr),Ce.removeEventListener("sessionend",Ys),Ui.stop()};function it(R){R.preventDefault(),C_("WebGLRenderer: Context Lost."),D=!0}function Ft(){C_("WebGLRenderer: Context Restored."),D=!1;const R=U.autoReset,q=Fe.enabled,oe=Fe.autoUpdate,$=Fe.needsUpdate,Z=Fe.type;xe(),U.autoReset=R,Fe.enabled=q,Fe.autoUpdate=oe,Fe.needsUpdate=$,Fe.type=Z}function Et(R){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Nn(R){const q=R.target;q.removeEventListener("dispose",Nn),xi(q)}function xi(R){dl(R),E.remove(R)}function dl(R){const q=E.get(R).programs;q!==void 0&&(q.forEach(function(oe){We.releaseProgram(oe)}),R.isShaderMaterial&&We.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,oe,$,Z,Ue){q===null&&(q=Ct);const Be=Z.isMesh&&Z.matrixWorld.determinant()<0,Oe=or(R,q,oe,$,Z);Ye.setMaterial($,Be);let Ve=oe.index,je=1;if($.wireframe===!0){if(Ve=Ke.getWireframeAttribute(oe),Ve===void 0)return;je=2}const $e=oe.drawRange,qe=oe.attributes.position;let et=$e.start*je,wt=($e.start+$e.count)*je;Ue!==null&&(et=Math.max(et,Ue.start*je),wt=Math.min(wt,(Ue.start+Ue.count)*je)),Ve!==null?(et=Math.max(et,0),wt=Math.min(wt,Ve.count)):qe!=null&&(et=Math.max(et,0),wt=Math.min(wt,qe.count));const Kt=wt-et;if(Kt<0||Kt===1/0)return;Ie.setup(Z,$,Oe,oe,Ve);let jt,Lt=W;if(Ve!==null&&(jt=ue.get(Ve),Lt=Le,Lt.setIndex(jt)),Z.isMesh)$.wireframe===!0?(Ye.setLineWidth($.wireframeLinewidth*tn()),Lt.setMode(V.LINES)):Lt.setMode(V.TRIANGLES);else if(Z.isLine){let Qe=$.linewidth;Qe===void 0&&(Qe=1),Ye.setLineWidth(Qe*tn()),Z.isLineSegments?Lt.setMode(V.LINES):Z.isLineLoop?Lt.setMode(V.LINE_LOOP):Lt.setMode(V.LINE_STRIP)}else Z.isPoints?Lt.setMode(V.POINTS):Z.isSprite&&Lt.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qe=Z._multiDrawStarts,Dt=Z._multiDrawCounts,at=Z._multiDrawCount,yn=Ve?ue.get(Ve).bytesPerElement:1,Wi=E.get($).currentProgram.getUniforms();for(let Mn=0;Mn<at;Mn++)Wi.setValue(V,"_gl_DrawID",Mn),Lt.render(Qe[Mn]/yn,Dt[Mn])}else if(Z.isInstancedMesh)Lt.renderInstances(et,Kt,Z.count);else if(oe.isInstancedBufferGeometry){const Qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Dt=Math.min(oe.instanceCount,Qe);Lt.renderInstances(et,Kt,Dt)}else Lt.render(et,Kt)};function js(R,q,oe){R.transparent===!0&&R.side===pa&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,kr(R,q,oe),R.side=sr,R.needsUpdate=!0,kr(R,q,oe),R.side=pa):kr(R,q,oe)}this.compile=function(R,q,oe=null){oe===null&&(oe=R),I=Te.get(oe),I.init(q),F.push(I),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),R!==oe&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),I.setupLights();const $=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ue=Z.material;if(Ue)if(Array.isArray(Ue))for(let Be=0;Be<Ue.length;Be++){const Oe=Ue[Be];js(Oe,oe,Z),$.add(Oe)}else js(Ue,oe,Z),$.add(Ue)}),I=F.pop(),$},this.compileAsync=function(R,q,oe=null){const $=this.compile(R,q,oe);return new Promise(Z=>{function Ue(){if($.forEach(function(Be){E.get(Be).currentProgram.isReady()&&$.delete(Be)}),$.size===0){Z(R);return}setTimeout(Ue,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Hr=null;function qs(R){Hr&&Hr(R)}function Gr(){Ui.stop()}function Ys(){Ui.start()}const Ui=new Rx;Ui.setAnimationLoop(qs),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(R){Hr=R,Ce.setAnimationLoop(R),R===null?Ui.stop():Ui.start()},Ce.addEventListener("sessionstart",Gr),Ce.addEventListener("sessionend",Ys),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const oe=Ce.enabled===!0&&Ce.isPresenting===!0,$=K!==null&&(re===null||oe)&&K.begin(C,re);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,re),I=Te.get(R,F.length),I.init(q),F.push(I),en.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Xe.setFromProjectionMatrix(en,Hi,q.reversedDepth),ht=this.localClippingEnabled,Ge=ze.init(this.clippingPlanes,ht),O=be.get(R,B.length),O.init(),B.push(O),Ce.enabled===!0&&Ce.isPresenting===!0){const Be=C.xr.getDepthSensingMesh();Be!==null&&ri(Be,q,-1/0,C.sortObjects)}ri(R,q,0,C.sortObjects),O.finish(),C.sortObjects===!0&&O.sort(Re,He),ot=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ot&&De.addToRenderList(O,R),this.info.render.frame++,Ge===!0&&ze.beginShadows();const Z=I.state.shadowsArray;if(Fe.render(Z,R,q),Ge===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&K.hasRenderPass())===!1){const Be=O.opaque,Oe=O.transmissive;if(I.setupLights(),q.isArrayCamera){const Ve=q.cameras;if(Oe.length>0)for(let je=0,$e=Ve.length;je<$e;je++){const qe=Ve[je];Sn(Be,Oe,R,qe)}ot&&De.render(R);for(let je=0,$e=Ve.length;je<$e;je++){const qe=Ve[je];ln(O,R,qe,qe.viewport)}}else Oe.length>0&&Sn(Be,Oe,R,q),ot&&De.render(R),ln(O,R,q)}re!==null&&se===0&&(j.updateMultisampleRenderTarget(re),j.updateRenderTargetMipmap(re)),$&&K.end(C),R.isScene===!0&&R.onAfterRender(C,R,q),Ie.resetDefaultState(),me=-1,de=null,F.pop(),F.length>0?(I=F[F.length-1],Ge===!0&&ze.setGlobalState(C.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?O=B[B.length-1]:O=null};function ri(R,q,oe,$){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xe.intersectsSprite(R)){$&&pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(en);const Be=we.update(R),Oe=R.material;Oe.visible&&O.push(R,Be,Oe,oe,pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xe.intersectsObject(R))){const Be=we.update(R),Oe=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pt.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),pt.copy(Be.boundingSphere.center)),pt.applyMatrix4(R.matrixWorld).applyMatrix4(en)),Array.isArray(Oe)){const Ve=Be.groups;for(let je=0,$e=Ve.length;je<$e;je++){const qe=Ve[je],et=Oe[qe.materialIndex];et&&et.visible&&O.push(R,Be,et,oe,pt.z,qe)}}else Oe.visible&&O.push(R,Be,Oe,oe,pt.z,null)}}const Ue=R.children;for(let Be=0,Oe=Ue.length;Be<Oe;Be++)ri(Ue[Be],q,oe,$)}function ln(R,q,oe,$){const{opaque:Z,transmissive:Ue,transparent:Be}=R;I.setupLightsView(oe),Ge===!0&&ze.setGlobalState(C.clippingPlanes,oe),$&&Ye.viewport(z.copy($)),Z.length>0&&Si(Z,q,oe),Ue.length>0&&Si(Ue,q,oe),Be.length>0&&Si(Be,q,oe),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Sn(R,q,oe,$){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[$.id]===void 0){const et=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[$.id]=new Vi(1,1,{generateMipmaps:!0,type:et?ya:ai,minFilter:Or,samples:Ut.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Ue=I.state.transmissionRenderTarget[$.id],Be=$.viewport||z;Ue.setSize(Be.z*C.transmissionResolutionScale,Be.w*C.transmissionResolutionScale);const Oe=C.getRenderTarget(),Ve=C.getActiveCubeFace(),je=C.getActiveMipmapLevel();C.setRenderTarget(Ue),C.getClearColor(Ee),ye=C.getClearAlpha(),ye<1&&C.setClearColor(16777215,.5),C.clear(),ot&&De.render(oe);const $e=C.toneMapping;C.toneMapping=Gi;const qe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),I.setupLightsView($),Ge===!0&&ze.setGlobalState(C.clippingPlanes,$),Si(R,oe,$),j.updateMultisampleRenderTarget(Ue),j.updateRenderTargetMipmap(Ue),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let wt=0,Kt=q.length;wt<Kt;wt++){const jt=q[wt],{object:Lt,geometry:Qe,material:Dt,group:at}=jt;if(Dt.side===pa&&Lt.layers.test($.layers)){const yn=Dt.side;Dt.side=qn,Dt.needsUpdate=!0,Vr(Lt,oe,$,Qe,Dt,at),Dt.side=yn,Dt.needsUpdate=!0,et=!0}}et===!0&&(j.updateMultisampleRenderTarget(Ue),j.updateRenderTargetMipmap(Ue))}C.setRenderTarget(Oe,Ve,je),C.setClearColor(Ee,ye),qe!==void 0&&($.viewport=qe),C.toneMapping=$e}function Si(R,q,oe){const $=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Ue=R.length;Z<Ue;Z++){const Be=R[Z],{object:Oe,geometry:Ve,group:je}=Be;let $e=Be.material;$e.allowOverride===!0&&$!==null&&($e=$),Oe.layers.test(oe.layers)&&Vr(Oe,q,oe,Ve,$e,je)}}function Vr(R,q,oe,$,Z,Ue){R.onBeforeRender(C,q,oe,$,Z,Ue),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,q,oe,$,R,Ue),Z.transparent===!0&&Z.side===pa&&Z.forceSinglePass===!1?(Z.side=qn,Z.needsUpdate=!0,C.renderBufferDirect(oe,q,$,Z,R,Ue),Z.side=sr,Z.needsUpdate=!0,C.renderBufferDirect(oe,q,$,Z,R,Ue),Z.side=pa):C.renderBufferDirect(oe,q,$,Z,R,Ue),R.onAfterRender(C,q,oe,$,Z,Ue)}function kr(R,q,oe){q.isScene!==!0&&(q=Ct);const $=E.get(R),Z=I.state.lights,Ue=I.state.shadowsArray,Be=Z.state.version,Oe=We.getParameters(R,Z.state,Ue,q,oe),Ve=We.getProgramCacheKey(Oe);let je=$.programs;$.environment=R.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(R.isMeshStandardMaterial?Se:pe).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",Nn),je=new Map,$.programs=je);let $e=je.get(Ve);if($e!==void 0){if($.currentProgram===$e&&$.lightsStateVersion===Be)return Zs(R,Oe),$e}else Oe.uniforms=We.getUniforms(R),R.onBeforeCompile(Oe,C),$e=We.acquireProgram(Oe,Ve),je.set(Ve,$e),$.uniforms=Oe.uniforms;const qe=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=ze.uniform),Zs(R,Oe),$.needsLights=Aa(R),$.lightsStateVersion=Be,$.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.currentProgram=$e,$.uniformsList=null,$e}function hl(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=tu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Zs(R,q){const oe=E.get(R);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function or(R,q,oe,$,Z){q.isScene!==!0&&(q=Ct),j.resetTextureUnits();const Ue=q.fog,Be=$.isMeshStandardMaterial?q.environment:null,Oe=re===null?C.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Gs,Ve=($.isMeshStandardMaterial?Se:pe).get($.envMap||Be),je=$.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,$e=!!oe.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qe=!!oe.morphAttributes.position,et=!!oe.morphAttributes.normal,wt=!!oe.morphAttributes.color;let Kt=Gi;$.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Kt=C.toneMapping);const jt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Lt=jt!==void 0?jt.length:0,Qe=E.get($),Dt=I.state.lights;if(Ge===!0&&(ht===!0||R!==de)){const bn=R===de&&$.id===me;ze.setState($,R,bn)}let at=!1;$.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Dt.state.version||Qe.outputColorSpace!==Oe||Z.isBatchedMesh&&Qe.batching===!1||!Z.isBatchedMesh&&Qe.batching===!0||Z.isBatchedMesh&&Qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qe.instancing===!1||!Z.isInstancedMesh&&Qe.instancing===!0||Z.isSkinnedMesh&&Qe.skinning===!1||!Z.isSkinnedMesh&&Qe.skinning===!0||Z.isInstancedMesh&&Qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qe.instancingMorph===!1&&Z.morphTexture!==null||Qe.envMap!==Ve||$.fog===!0&&Qe.fog!==Ue||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ze.numPlanes||Qe.numIntersection!==ze.numIntersection)||Qe.vertexAlphas!==je||Qe.vertexTangents!==$e||Qe.morphTargets!==qe||Qe.morphNormals!==et||Qe.morphColors!==wt||Qe.toneMapping!==Kt||Qe.morphTargetsCount!==Lt)&&(at=!0):(at=!0,Qe.__version=$.version);let yn=Qe.currentProgram;at===!0&&(yn=kr($,q,Z));let Wi=!1,Mn=!1,si=!1;const It=yn.getUniforms(),En=Qe.uniforms;if(Ye.useProgram(yn.program)&&(Wi=!0,Mn=!0,si=!0),$.id!==me&&(me=$.id,Mn=!0),Wi||de!==R){Ye.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),It.setValue(V,"projectionMatrix",R.projectionMatrix),It.setValue(V,"viewMatrix",R.matrixWorldInverse);const Tn=It.map.cameraPosition;Tn!==void 0&&Tn.setValue(V,_t.setFromMatrixPosition(R.matrixWorld)),Ut.logarithmicDepthBuffer&&It.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&It.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),de!==R&&(de=R,Mn=!0,si=!0)}if(Qe.needsLights&&(Dt.state.directionalShadowMap.length>0&&It.setValue(V,"directionalShadowMap",Dt.state.directionalShadowMap,j),Dt.state.spotShadowMap.length>0&&It.setValue(V,"spotShadowMap",Dt.state.spotShadowMap,j),Dt.state.pointShadowMap.length>0&&It.setValue(V,"pointShadowMap",Dt.state.pointShadowMap,j)),Z.isSkinnedMesh){It.setOptional(V,Z,"bindMatrix"),It.setOptional(V,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),It.setValue(V,"boneTexture",bn.boneTexture,j))}Z.isBatchedMesh&&(It.setOptional(V,Z,"batchingTexture"),It.setValue(V,"batchingTexture",Z._matricesTexture,j),It.setOptional(V,Z,"batchingIdTexture"),It.setValue(V,"batchingIdTexture",Z._indirectTexture,j),It.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&It.setValue(V,"batchingColorTexture",Z._colorsTexture,j));const pn=oe.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ct.update(Z,oe,yn),(Mn||Qe.receiveShadow!==Z.receiveShadow)&&(Qe.receiveShadow=Z.receiveShadow,It.setValue(V,"receiveShadow",Z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(En.envMap.value=Ve,En.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&q.environment!==null&&(En.envMapIntensity.value=q.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=HC()),Mn&&(It.setValue(V,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&Ks(En,si),Ue&&$.fog===!0&&nt.refreshFogUniforms(En,Ue),nt.refreshMaterialUniforms(En,$,ve,ne,I.state.transmissionRenderTarget[R.id]),tu.upload(V,hl(Qe),En,j)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(tu.upload(V,hl(Qe),En,j),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&It.setValue(V,"center",Z.center),It.setValue(V,"modelViewMatrix",Z.modelViewMatrix),It.setValue(V,"normalMatrix",Z.normalMatrix),It.setValue(V,"modelMatrix",Z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const bn=$.uniformsGroups;for(let Tn=0,Xr=bn.length;Tn<Xr;Tn++){const yi=bn[Tn];Me.update(yi,yn),Me.bind(yi,yn)}}return yn}function Ks(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Aa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(R,q,oe){const $=E.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=q,E.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:oe,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const oe=E.get(R);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const Ra=V.createFramebuffer();this.setRenderTarget=function(R,q=0,oe=0){re=R,X=q,se=oe;let $=null,Z=!1,Ue=!1;if(R){const Oe=E.get(R);if(Oe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(V.FRAMEBUFFER,Oe.__webglFramebuffer),z.copy(R.viewport),G.copy(R.scissor),ie=R.scissorTest,Ye.viewport(z),Ye.scissor(G),Ye.setScissorTest(ie),me=-1;return}else if(Oe.__webglFramebuffer===void 0)j.setupRenderTarget(R);else if(Oe.__hasExternalTextures)j.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&E.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(R)}}const Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ue=!0);const je=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[q])?$=je[q][oe]:$=je[q],Z=!0):R.samples>0&&j.useMultisampledRTT(R)===!1?$=E.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?$=je[oe]:$=je,z.copy(R.viewport),G.copy(R.scissor),ie=R.scissorTest}else z.copy(te).multiplyScalar(ve).floor(),G.copy(fe).multiplyScalar(ve).floor(),ie=Ne;if(oe!==0&&($=Ra),Ye.bindFramebuffer(V.FRAMEBUFFER,$)&&Ye.drawBuffers(R,$),Ye.viewport(z),Ye.scissor(G),Ye.setScissorTest(ie),Z){const Oe=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,oe)}else if(Ue){const Oe=q;for(let Ve=0;Ve<R.textures.length;Ve++){const je=E.get(R.textures[Ve]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ve,je.__webglTexture,oe,Oe)}}else if(R!==null&&oe!==0){const Oe=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Oe.__webglTexture,oe)}me=-1},this.readRenderTargetPixels=function(R,q,oe,$,Z,Ue,Be,Oe=0){if(!(R&&R.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve){Ye.bindFramebuffer(V.FRAMEBUFFER,Ve);try{const je=R.textures[Oe],$e=je.format,qe=je.type;if(!Ut.textureFormatReadable($e)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(qe)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-$&&oe>=0&&oe<=R.height-Z&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Oe),V.readPixels(q,oe,$,Z,Ae.convert($e),Ae.convert(qe),Ue))}finally{const je=re!==null?E.get(re).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(R,q,oe,$,Z,Ue,Be,Oe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve)if(q>=0&&q<=R.width-$&&oe>=0&&oe<=R.height-Z){Ye.bindFramebuffer(V.FRAMEBUFFER,Ve);const je=R.textures[Oe],$e=je.format,qe=je.type;if(!Ut.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.bufferData(V.PIXEL_PACK_BUFFER,Ue.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Oe),V.readPixels(q,oe,$,Z,Ae.convert($e),Ae.convert(qe),0);const wt=re!==null?E.get(re).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,wt);const Kt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await o1(V,Kt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ue),V.deleteBuffer(et),V.deleteSync(Kt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,oe=0){const $=Math.pow(2,-oe),Z=Math.floor(R.image.width*$),Ue=Math.floor(R.image.height*$),Be=q!==null?q.x:0,Oe=q!==null?q.y:0;j.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,oe,0,0,Be,Oe,Z,Ue),Ye.unbindTexture()};const lr=V.createFramebuffer(),Ca=V.createFramebuffer();this.copyTextureToTexture=function(R,q,oe=null,$=null,Z=0,Ue=null){Ue===null&&(Z!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Z,Z=0):Ue=0);let Be,Oe,Ve,je,$e,qe,et,wt,Kt;const jt=R.isCompressedTexture?R.mipmaps[Ue]:R.image;if(oe!==null)Be=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,je=oe.min.x,$e=oe.min.y,qe=oe.isBox3?oe.min.z:0;else{const pn=Math.pow(2,-Z);Be=Math.floor(jt.width*pn),Oe=Math.floor(jt.height*pn),R.isDataArrayTexture?Ve=jt.depth:R.isData3DTexture?Ve=Math.floor(jt.depth*pn):Ve=1,je=0,$e=0,qe=0}$!==null?(et=$.x,wt=$.y,Kt=$.z):(et=0,wt=0,Kt=0);const Lt=Ae.convert(q.format),Qe=Ae.convert(q.type);let Dt;q.isData3DTexture?(j.setTexture3D(q,0),Dt=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(j.setTexture2DArray(q,0),Dt=V.TEXTURE_2D_ARRAY):(j.setTexture2D(q,0),Dt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const at=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Wi=V.getParameter(V.UNPACK_SKIP_PIXELS),Mn=V.getParameter(V.UNPACK_SKIP_ROWS),si=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,jt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,je),V.pixelStorei(V.UNPACK_SKIP_ROWS,$e),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qe);const It=R.isDataArrayTexture||R.isData3DTexture,En=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const pn=E.get(R),bn=E.get(q),Tn=E.get(pn.__renderTarget),Xr=E.get(bn.__renderTarget);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,Xr.__webglFramebuffer);for(let yi=0;yi<Ve;yi++)It&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,Z,qe+yi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Ue,Kt+yi)),V.blitFramebuffer(je,$e,Be,Oe,et,wt,Be,Oe,V.DEPTH_BUFFER_BIT,V.NEAREST);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||E.has(R)){const pn=E.get(R),bn=E.get(q);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,lr),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ca);for(let Tn=0;Tn<Ve;Tn++)It?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,Z,qe+Tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,Z),En?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bn.__webglTexture,Ue,Kt+Tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bn.__webglTexture,Ue),Z!==0?V.blitFramebuffer(je,$e,Be,Oe,et,wt,Be,Oe,V.COLOR_BUFFER_BIT,V.NEAREST):En?V.copyTexSubImage3D(Dt,Ue,et,wt,Kt+Tn,je,$e,Be,Oe):V.copyTexSubImage2D(Dt,Ue,et,wt,je,$e,Be,Oe);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else En?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Dt,Ue,et,wt,Kt,Be,Oe,Ve,Lt,Qe,jt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Dt,Ue,et,wt,Kt,Be,Oe,Ve,Lt,jt.data):V.texSubImage3D(Dt,Ue,et,wt,Kt,Be,Oe,Ve,Lt,Qe,jt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ue,et,wt,Be,Oe,Lt,Qe,jt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ue,et,wt,jt.width,jt.height,Lt,jt.data):V.texSubImage2D(V.TEXTURE_2D,Ue,et,wt,Be,Oe,Lt,Qe,jt);V.pixelStorei(V.UNPACK_ROW_LENGTH,at),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Wi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Mn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,si),Ue===0&&q.generateMipmaps&&V.generateMipmap(Dt),Ye.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&j.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?j.setTextureCube(R,0):R.isData3DTexture?j.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?j.setTexture2DArray(R,0):j.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){X=0,se=0,re=null,Ye.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=bt._getUnpackColorSpace()}}function VC(){const s=ce.useRef(null),e=ce.useRef(null);return ce.useEffect(()=>{if(!s.current)return;const i=new U1,r=new ii(75,window.innerWidth/window.innerHeight,.1,1e3),l=new GC({antialias:!0,alpha:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(window.devicePixelRatio),s.current.appendChild(l.domElement),r.position.z=5;const c=new Ni,f=800,h=new Float32Array(f*3);for(let B=0;B<f*3;B++)h[B]=(Math.random()-.5)*20;c.setAttribute("position",new Di(h,3));const m=new Ex({size:.03,color:11502795,transparent:!0,opacity:.8,blending:oh}),p=new I1(c,m);i.add(p);const _=new X1(16777215,.5);i.add(_);const g=new Z_(11502795,2);g.position.set(5,5,5),i.add(g);const S=new Z_(8936868,1.5);S.position.set(-5,-5,5),i.add(S);let M=0,b=0,T=0,y=0;const v=B=>{M=B.clientX/window.innerWidth*2-1,b=-(B.clientY/window.innerHeight)*2+1};document.addEventListener("mousemove",v);let w=0;const N=()=>{w=window.scrollY};window.addEventListener("scroll",N);function O(){e.current=requestAnimationFrame(O),p.rotation.y+=.001,p.rotation.x+=5e-4;const B=M*.5,F=b*.5;T+=(B-T)*.05,y+=(F-y)*.05,r.position.x=T,r.position.y=y+w*.001,l.render(i,r)}O();const I=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",I),()=>{e.current&&cancelAnimationFrame(e.current),document.removeEventListener("mousemove",v),window.removeEventListener("scroll",N),window.removeEventListener("resize",I),c.dispose(),m.dispose(),l.dispose(),s.current&&l.domElement&&s.current.removeChild(l.domElement)}},[]),P.jsx("div",{ref:s,id:"canvas-container",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,pointerEvents:"none",background:"linear-gradient(135deg, #0a0514 0%, #140A1B 50%, #1a0f24 100%)"}})}function kC(){const[s,e]=ce.useState({days:0,hours:0,minutes:0,seconds:0});ce.useEffect(()=>{const r=new Date("2026-01-29T00:00:00").getTime(),l=()=>{const f=new Date().getTime(),h=r-f;h>0&&e({days:Math.floor(h/(1e3*60*60*24)),hours:Math.floor(h%(1e3*60*60*24)/(1e3*60*60)),minutes:Math.floor(h%(1e3*60*60)/(1e3*60)),seconds:Math.floor(h%(1e3*60)/1e3)})};l();const c=setInterval(l,1e3);return()=>clearInterval(c)},[]);const i=()=>{const r=document.getElementById("events");r&&r.scrollIntoView({behavior:"smooth"})};return P.jsxs("section",{className:"hero",children:[P.jsxs("div",{className:"hero-badge",children:[P.jsx(pb,{size:18}),"January 29-30, 2026"]}),P.jsx("h1",{className:"hero-title",children:"INCEPTA 2026"}),P.jsx("p",{className:"hero-subtitle",children:"A premier technical festival focused on AI Agents & Generative AI at the College of Engineering, Trivandrum."}),P.jsxs("div",{className:"countdown",id:"countdown",children:[P.jsxs("div",{className:"countdown-item",children:[P.jsx("span",{className:"countdown-number",children:s.days.toString().padStart(2,"0")}),P.jsx("span",{className:"countdown-label",children:"Days"})]}),P.jsxs("div",{className:"countdown-item",children:[P.jsx("span",{className:"countdown-number",children:s.hours.toString().padStart(2,"0")}),P.jsx("span",{className:"countdown-label",children:"Hours"})]}),P.jsxs("div",{className:"countdown-item",children:[P.jsx("span",{className:"countdown-number",children:s.minutes.toString().padStart(2,"0")}),P.jsx("span",{className:"countdown-label",children:"Minutes"})]}),P.jsxs("div",{className:"countdown-item",children:[P.jsx("span",{className:"countdown-number",children:s.seconds.toString().padStart(2,"0")}),P.jsx("span",{className:"countdown-label",children:"Seconds"})]})]}),P.jsx("button",{className:"cta-button",onClick:i,children:"Register Now"})]})}const XC=[{id:"cet",title:"About CET",description:"For 85 illustrious years since its foundation in 1939, College of Engineering Trivandrum (CET) has remained a beacon of technical excellence in Kerala. We consistently rank among the foremost institutions in India, fostering innovation and technical brilliance.",icon:"graduationCap"},{id:"asca",title:"About ASCA",description:"The Association of Students of Computer Applications (ASCA) is the official student body of the MCA Department. We foster innovation through technical workshops, hackathons, and cultural initiatives, building a vibrant community of future tech leaders.",icon:"users"},{id:"incepta",title:"About INCEPTA",description:"INCEPTA is our flagship tech fest. The 2026 edition is purely focused on the disruptive fields of AI Agents and Generative AI, bridging the gap between academic theory and industry reality. Join us for two days of innovation, learning, and competition.",icon:"star"}],WC={graduationCap:Vv,users:dp,star:db};function jC(){return P.jsxs("section",{id:"about",className:"section",children:[P.jsx("h2",{className:"section-title",children:"About The Fest"}),P.jsx("p",{className:"section-subtitle",children:"Discover the legacy, community, and vision behind INCEPTA 2026"}),P.jsx("div",{className:"about-grid",children:XC.map(s=>{const e=WC[s.icon];return P.jsxs("div",{className:"about-card",children:[P.jsx("div",{className:"about-card-icon",children:P.jsx(e,{size:24})}),P.jsx("h3",{children:s.title}),P.jsx("p",{children:s.description})]},s.id)})})]})}const qc=["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80","https://images.unsplash.com/photo-1517059224940-d4af9eec41b4?w=500&q=80","https://images.unsplash.com/photo-1504384308090-c54be3852f92?w=500&q=80","https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&q=80","https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80","https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80"];function qC(){const s=ce.useRef(null),e=ce.useRef(null),i=ce.useRef(null);return ce.useEffect(()=>{const r=c=>{if(!c.current)return;c.current.innerHTML="",[...qc,...qc,...qc,...qc].forEach((h,m)=>{const p=document.createElement("img");p.src=h,p.className="gallery-img",p.loading="lazy",p.alt=`INCEPTA Gallery Image ${m+1}`,p.addEventListener("click",()=>{window.open(h,"_blank","noopener,noreferrer")}),c.current.appendChild(p)})};r(s),r(e),r(i),document.querySelectorAll(".gallery-row").forEach(c=>{let f,h,m=!1;const p=T=>{m=!0,f=T.pageX-c.offsetLeft,h=c.scrollLeft},_=()=>{m=!1},g=()=>{m=!1},S=T=>{if(!m)return;T.preventDefault();const v=(T.pageX-c.offsetLeft-f)*2;c.scrollLeft=h-v},M=T=>{f=T.touches[0].pageX-c.offsetLeft,h=c.scrollLeft},b=T=>{const v=(T.touches[0].pageX-c.offsetLeft-f)*2;c.scrollLeft=h-v};c.addEventListener("mousedown",p),c.addEventListener("mouseleave",_),c.addEventListener("mouseup",g),c.addEventListener("mousemove",S),c.addEventListener("touchstart",M,{passive:!0}),c.addEventListener("touchmove",b,{passive:!0})})},[]),P.jsxs("section",{id:"gallery",className:"gallery-section","aria-labelledby":"gallery-title",children:[P.jsx("h2",{className:"section-title",id:"gallery-title",children:"Gallery"}),P.jsx("p",{className:"section-subtitle",children:"Glimpses from previous editions of INCEPTA"}),P.jsx("div",{className:"gallery-wrapper",children:P.jsxs("div",{className:"gallery-container",children:[P.jsx("div",{className:"gallery-row row-1","aria-label":"Gallery row 1",children:P.jsx("div",{className:"gallery-track",ref:s})}),P.jsx("div",{className:"gallery-row row-2","aria-label":"Gallery row 2",children:P.jsx("div",{className:"gallery-track",ref:e})}),P.jsx("div",{className:"gallery-row row-3","aria-label":"Gallery row 3",children:P.jsx("div",{className:"gallery-track",ref:i})})]})})]})}const YC=[{number:"3K+",label:"MCA Students",icon:"users"},{number:"5K+",label:"Campus Footfall",icon:"home"},{number:"32",label:"Colleges",icon:"graduationCap"},{number:"500+",label:"School Outreach",icon:"bookOpen"}],ZC={users:dp,home:ZE,graduationCap:Vv,bookOpen:Gv};function KC(){return P.jsxs("section",{id:"stats",className:"section",children:[P.jsx("h2",{className:"section-title",children:"Our Reach"}),P.jsx("p",{className:"section-subtitle",children:"Connecting thousands of students, colleges, and technology enthusiasts"}),P.jsx("div",{className:"stats-grid",children:YC.map((s,e)=>{const i=ZC[s.icon];return P.jsxs("div",{className:"stat-card",children:[P.jsx("div",{className:"stat-icon",children:P.jsx(i,{size:28})}),P.jsx("span",{className:"stat-number",children:s.number}),P.jsx("span",{className:"stat-label",children:s.label})]},e)})})]})}const QC=[{id:"location",title:"College of Engineering, Trivandrum",subtitle:"Kerala, India - 695016",icon:"mapPin",href:"#"},{id:"email",title:"Email",subtitle:"ascacet@gmail.com",icon:"mail",href:"mailto:ascacet@gmail.com"},{id:"phone",title:"Event Coordinators",subtitle:"Aiswarya: +91 73561 60270",icon:"phone",href:"tel:+917356160270"}],JC={mapPin:fp,mail:qv,phone:ub};function $C(){const[s,e]=ce.useState({name:"",email:"",subject:"",message:""}),i=l=>{l.preventDefault(),alert("Thank you for your message! We will get back to you soon."),e({name:"",email:"",subject:"",message:""})},r=l=>{e(c=>({...c,[l.target.name]:l.target.value}))};return P.jsxs("section",{id:"contact",className:"section",children:[P.jsx("h2",{className:"section-title",children:"Get in Touch"}),P.jsx("p",{className:"section-subtitle",children:"Have questions? We'd love to hear from you"}),P.jsxs("div",{className:"contact-grid",children:[P.jsx("div",{className:"contact-info",children:QC.map(l=>{const c=JC[l.icon];return P.jsxs("a",{href:l.href,className:"contact-item",children:[P.jsx("div",{className:"contact-icon",children:P.jsx(c,{size:24})}),P.jsxs("div",{className:"contact-text",children:[P.jsx("strong",{children:l.title}),P.jsx("span",{children:l.subtitle})]})]},l.id)})}),P.jsx("div",{className:"contact-form",children:P.jsxs("form",{onSubmit:i,children:[P.jsx("div",{className:"form-group",children:P.jsx("input",{type:"text",className:"form-control",placeholder:"Your Name",name:"name",value:s.name,onChange:r,required:!0})}),P.jsx("div",{className:"form-group",children:P.jsx("input",{type:"email",className:"form-control",placeholder:"Your Email",name:"email",value:s.email,onChange:r,required:!0})}),P.jsx("div",{className:"form-group",children:P.jsx("input",{type:"text",className:"form-control",placeholder:"Subject",name:"subject",value:s.subject,onChange:r,required:!0})}),P.jsx("div",{className:"form-group",children:P.jsx("textarea",{className:"form-control",placeholder:"Your Message",name:"message",value:s.message,onChange:r,required:!0})}),P.jsx("button",{type:"submit",className:"cta-button",style:{width:"100%"},children:"Send Message"})]})})]})]})}const e3=[{id:"competitions",title:"Competitions",description:"Test your skills in hackathons, CTF, coding challenges, and more. Compete for glory and prizes!",icon:gb,color:"#c678ff",link:"/competitions"},{id:"events",title:"Workshops & Events",description:"Learn from industry experts with hands-on workshops and fun activities like treasure hunts.",icon:up,color:"#61dafb",link:"/events"},{id:"gala",title:"INCEPTA Gala",description:"Two nights of music, dance, and unforgettable performances. The cultural highlight of the fest!",icon:Yv,color:"#ff6ac1",link:"/gala"}];function t3({category:s}){const e=s.icon;return P.jsxs(Br,{to:s.link,className:"category-card",style:{"--accent-color":s.color},children:[P.jsx("div",{className:"category-icon",style:{background:`linear-gradient(135deg, ${s.color}33 0%, ${s.color}15 100%)`,borderColor:`${s.color}40`},children:P.jsx(e,{size:36,style:{color:s.color}})}),P.jsx("h3",{className:"category-title",children:s.title}),P.jsx("p",{className:"category-description",children:s.description}),P.jsxs("div",{className:"category-cta",style:{color:s.color},children:["Explore ",P.jsx(cp,{size:18})]})]})}function n3(){return P.jsxs(P.Fragment,{children:[P.jsx(kC,{}),P.jsx(jC,{}),P.jsxs("section",{id:"events",className:"section",children:[P.jsx("h2",{className:"section-title",children:"Explore INCEPTA"}),P.jsx("p",{className:"section-subtitle",children:"Choose your adventure - competitions, workshops, or cultural celebrations"}),P.jsx("div",{className:"categories-grid",children:e3.map(s=>P.jsx(t3,{category:s},s.id))})]}),P.jsx(qC,{}),P.jsx(KC,{}),P.jsx($C,{})]})}const bp={competitions:{title:"Competitions",description:"Test your skills and compete for glory",color:"#c678ff",events:["hackathon","ctf","coderush","vibecoding","promptcraft","projectpres"]},workshops:{title:"Workshops & Events",description:"Learn from industry experts",color:"#61dafb",events:["workshops","treasurehunt"]},gala:{color:"#ff6ac1"}},il={hackathon:{title:"AI Agent Hackathon",badge:"Competition",category:"competitions",tagline:"Build the next generation of autonomous AI agents in this 12-hour coding marathon.",details:[{label:"Date",value:"January 30, 2026"},{label:"Time",value:"9:00 AM - 9:00 PM"},{label:"Venue",value:"MCA Department"},{label:"Team Size",value:"4 Members"},{label:"Prize Pool",value:"₹25,000+"},{label:"Registration",value:"Required"}],description:"Join the ultimate AI Agent Hackathon where innovation meets competition. Build autonomous agents that can solve real-world problems.",highlights:["Build agents using LangChain, AutoGPT, or custom frameworks","Industry mentors available throughout the event","Top 3 teams win cash prizes and certificates","Chance to get offers from sponsoring companies","Free meals and refreshments provided"],buttonText:"Register Your Team",icon:"layers"},ctf:{title:"Capture The Flag",badge:"Competition",category:"competitions",tagline:"Test your cybersecurity skills in this Jeopardy-style CTF competition.",details:[{label:"Date",value:"January 29, 2026"},{label:"Time",value:"10:00 AM - 5:00 PM"},{label:"Venue",value:"Software Lab"},{label:"Team Size",value:"1-2 Members"},{label:"Prize Pool",value:"₹15,000+"},{label:"Platform",value:"CTFd"}],description:"Dive into challenges across Web Security, Forensics, Cryptography, and Binary Exploitation. Compete for the top spot on the leaderboard.",highlights:["Categories: Web, Forensic, Crypto, Binary, OSINT","Sponsored by PentesterLab - vouchers for winners","Points based on challenge difficulty","Real-time leaderboard display","No brute forcing or flag sharing allowed"],buttonText:"Join the Hunt",icon:"flag"},coderush:{title:"CodeRush",badge:"Competition",category:"competitions",tagline:"Prove your algorithmic prowess in this intense 2.5-hour coding challenge.",details:[{label:"Date",value:"January 30, 2026"},{label:"Time",value:"2:00 PM - 4:30 PM"},{label:"Venue",value:"Software Lab"},{label:"Format",value:"Individual"},{label:"Problems",value:"20 Questions"},{label:"Platform",value:"HackerRank"}],description:"Tackle 20 coding problems ranging from easy to medium difficulty. Your algorithmic skills and speed will be put to the test.",highlights:["Problems cover data structures and algorithms","Multiple programming languages supported","Ranked by HackerRank scoring system","No AI or external tools allowed","Top 3 coders receive prizes and certificates"],buttonText:"Start Coding",icon:"code"},vibecoding:{title:"Vibe Coding",badge:"Competition",category:"competitions",tagline:"Where creativity meets code. Build something extraordinary.",details:[{label:"Date",value:"January 29, 2026"},{label:"Time",value:"11:00 AM - 2:00 PM"},{label:"Venue",value:"MCA Department"},{label:"Format",value:"Individual/Team"},{label:"Prize Pool",value:"₹6,000+"},{label:"Theme",value:"Announced on spot"}],description:"Express yourself through code. Create visual experiences, generative art, or interactive applications that showcase your creative coding skills.",highlights:["Theme revealed at the start of competition","Use any creative coding framework","Judged on creativity, execution, and aesthetics","Live demo of projects at the end","Best projects featured in fest gallery"],buttonText:"Express Yourself",icon:"music"},promptcraft:{title:"Prompt Crafting",badge:"Competition",category:"competitions",tagline:"Master the art of communicating with AI through effective prompts.",details:[{label:"Date",value:"January 29, 2026"},{label:"Time",value:"3:00 PM - 5:00 PM"},{label:"Venue",value:"Seminar Hall"},{label:"Format",value:"Individual"},{label:"Prize Pool",value:"₹3,000+"},{label:"Focus",value:"GenAI Prompts"}],description:"Craft prompts that produce the best outputs from Large Language Models. Show your understanding of prompt engineering techniques.",highlights:["Multiple rounds with increasing difficulty","Work with GPT, Claude, and other LLMs","Judged on output quality and creativity","Learn advanced prompting techniques","Certificates for all participants"],buttonText:"Craft Your Prompt",icon:"messageSquare"},workshops:{title:"GenAI Workshops",badge:"Workshop",category:"workshops",tagline:"Hands-on learning sessions with industry experts on cutting-edge AI technologies.",details:[{label:"Dates",value:"Jan 29-30, 2026"},{label:"Time",value:"Various Slots"},{label:"Venue",value:"Seminar Hall"},{label:"Format",value:"Hands-on"},{label:"Certificate",value:"Provided"},{label:"Laptop",value:"Required"}],description:"Deep dive into the world of Generative AI with practical, hands-on workshops conducted by industry professionals.",highlights:["Build RAG pipelines from scratch","Create AI agents with no-code tools","Fine-tune open-source LLMs","Industry guest speakers and mentors","Take-home resources and code samples"],buttonText:"Book Your Seat",icon:"layoutDashboard"},projectpres:{title:"Project Presentation",badge:"Competition",category:"competitions",tagline:"Showcase your AI innovations to industry experts and peers.",details:[{label:"Date",value:"January 30, 2026"},{label:"Time",value:"10:00 AM - 1:00 PM"},{label:"Venue",value:"Conference Room"},{label:"Team Size",value:"1-4 Members"},{label:"Duration",value:"10 min + Q&A"},{label:"Focus",value:"AI/ML Projects"}],description:"Present your AI projects to a panel of industry experts. Get valuable feedback and recognition for your innovative work.",highlights:["Projects must involve AI/ML technologies","Live demo encouraged","Expert panel with Q&A session","Best projects receive awards","Networking opportunity with professionals"],buttonText:"Submit Project",icon:"bookOpen"},treasurehunt:{title:"Treasure Hunt",badge:"Fun Event",category:"workshops",tagline:"Embark on a One Piece themed adventure across the campus!",details:[{label:"Date",value:"January 29, 2026"},{label:"Time",value:"10:00 AM - 1:00 PM"},{label:"Venue",value:"CET Campus"},{label:"Team Size",value:"5 Members"},{label:"Format",value:"Location-based"},{label:"Theme",value:"One Piece"}],description:"Form your pirate crew and race across campus solving riddles to find The One Piece treasure chest! A fun-filled adventure for all.",highlights:['Each team gets a volunteer "Marine" guide',"Solve One Piece themed riddles at each checkpoint","Slowest teams eliminated each round","Final treasure chest contains prizes","Dress up as pirates for bonus points!"],buttonText:"Assemble Your Crew",icon:"mapPin"},gala:{title:"INCEPTA GALA",badge:"Cultural Night",category:"gala",tagline:"Two nights of music, dance, and unforgettable performances.",details:[{label:"Day 1",value:"January 29, 2026"},{label:"Day 2",value:"January 30, 2026"},{label:"Time",value:"5:00 PM - 10:00 PM"},{label:"Venue",value:"Gazebo/DJ Hall"},{label:"Entry",value:"With Pass"},{label:"Audience",value:"500+ Expected"}],description:"The grand cultural celebration of INCEPTA'26! Two nights of entertainment, performances, and memories.",highlights:["Day 1: Student performances from all departments","Day 2: Pro Show with professional bands","Food stalls and informal art corners","Interactive crowd games and prizes","Entry via wristbands or QR passes"],buttonText:"Get Your Pass",icon:"award"}},Ux={hackathon:"#register-hackathon",ctf:"#register-ctf",coderush:"#register-coderush",vibecoding:"#register-vibecoding",promptcraft:"#register-promptcraft",workshops:"#register-workshops",projectpres:"#register-projectpres",treasurehunt:"#register-treasurehunt",gala:"#register-gala"};function Lx({eventId:s,event:e,onClose:i}){ce.useEffect(()=>{document.body.classList.add("overlay-open");const l=c=>{c.key==="Escape"&&i()};return document.addEventListener("keydown",l),()=>{document.body.classList.remove("overlay-open"),document.removeEventListener("keydown",l)}},[i]);const r=l=>{l.target.classList.contains("event-overlay")&&i()};return P.jsxs("div",{className:"event-overlay active",onClick:r,children:[P.jsx("button",{className:"overlay-close-btn",onClick:i,children:"×"}),P.jsxs("div",{className:"event-overlay-content",children:[P.jsxs("button",{className:"overlay-back-btn",onClick:i,children:[P.jsx(lu,{size:20}),"Back to Events"]}),P.jsxs("div",{className:"overlay-header",children:[P.jsx("div",{className:"overlay-event-badge",children:e.badge}),P.jsx("h1",{className:"overlay-event-title",children:e.title}),P.jsx("p",{className:"overlay-event-tagline",children:e.tagline})]}),P.jsx("div",{className:"overlay-details-grid",children:e.details.map((l,c)=>P.jsxs("div",{className:"overlay-detail-card",children:[P.jsx("h4",{children:l.label}),P.jsx("p",{children:l.value})]},c))}),P.jsxs("div",{className:"overlay-description",children:[P.jsx("h3",{children:"About This Event"}),P.jsx("p",{children:e.description}),P.jsx("ul",{children:e.highlights.map((l,c)=>P.jsx("li",{children:l},c))})]}),P.jsx("div",{className:"overlay-actions",children:P.jsxs("a",{href:Ux[s],className:"overlay-register-btn",children:[e.buttonText,P.jsx(cp,{size:20})]})})]})]})}const i3={layers:Xv,flag:jE,code:VE,music:Yv,messageSquare:ob,bookOpen:Gv};function a3(){const[s,e]=ce.useState(null),i=bp.competitions,r=i.events.map(l=>({id:l,...il[l]}));return P.jsxs("div",{className:"page-container",children:[P.jsxs("section",{className:"page-hero",style:{"--accent-color":i.color},children:[P.jsxs(Br,{to:"/",className:"back-link",children:[P.jsx(lu,{size:20})," Back to Home"]}),P.jsx("h1",{className:"page-title",children:i.title}),P.jsx("p",{className:"page-subtitle",children:i.description})]}),P.jsx("section",{className:"section",children:P.jsx("div",{className:"events-grid",children:r.map(l=>{const c=i3[l.icon]||Xv;return P.jsxs("div",{className:"event-card",onClick:()=>e(l.id),children:[P.jsx("div",{className:"event-icon",children:P.jsx(c,{size:32})}),P.jsx("h3",{className:"event-title",children:l.title}),P.jsx("p",{className:"event-description",children:l.tagline}),P.jsx("div",{className:"event-badge-small",children:l.badge})]},l.id)})})}),s&&P.jsx(Lx,{eventId:s,event:il[s],onClose:()=>e(null)})]})}const r3={layoutDashboard:Wv,mapPin:fp};function s3(){const[s,e]=ce.useState(null),i=bp.workshops,r=i.events.map(l=>({id:l,...il[l]}));return P.jsxs("div",{className:"page-container",children:[P.jsxs("section",{className:"page-hero",style:{"--accent-color":i.color},children:[P.jsxs(Br,{to:"/",className:"back-link",children:[P.jsx(lu,{size:20})," Back to Home"]}),P.jsx("h1",{className:"page-title",children:i.title}),P.jsx("p",{className:"page-subtitle",children:i.description})]}),P.jsx("section",{className:"section",children:P.jsx("div",{className:"events-grid",children:r.map(l=>{const c=r3[l.icon]||Wv;return P.jsxs("div",{className:"event-card",onClick:()=>e(l.id),children:[P.jsx("div",{className:"event-icon",children:P.jsx(c,{size:32})}),P.jsx("h3",{className:"event-title",children:l.title}),P.jsx("p",{className:"event-description",children:l.tagline}),P.jsx("div",{className:"event-badge-small",children:l.badge})]},l.id)})})}),s&&P.jsx(Lx,{eventId:s,event:il[s],onClose:()=>e(null)})]})}function o3(){const s=bp.gala,e=il.gala;return P.jsxs("div",{className:"page-container gala-page",children:[P.jsxs("section",{className:"page-hero gala-hero",style:{"--accent-color":s.color},children:[P.jsxs(Br,{to:"/",className:"back-link",children:[P.jsx(lu,{size:20})," Back to Home"]}),P.jsxs("div",{className:"gala-badge",children:[P.jsx(OE,{size:20}),"Cultural Celebration"]}),P.jsx("h1",{className:"gala-title",children:e.title}),P.jsx("p",{className:"gala-tagline",children:e.tagline})]}),P.jsxs("section",{className:"section gala-content",children:[P.jsxs("div",{className:"gala-info-grid",children:[P.jsxs("div",{className:"gala-info-card",children:[P.jsx(up,{size:28}),P.jsxs("div",{children:[P.jsx("h4",{children:"Date"}),P.jsx("p",{children:"Jan 29-30, 2026"})]})]}),P.jsxs("div",{className:"gala-info-card",children:[P.jsx(HE,{size:28}),P.jsxs("div",{children:[P.jsx("h4",{children:"Time"}),P.jsx("p",{children:"5:00 PM - 10:00 PM"})]})]}),P.jsxs("div",{className:"gala-info-card",children:[P.jsx(fp,{size:28}),P.jsxs("div",{children:[P.jsx("h4",{children:"Venue"}),P.jsx("p",{children:"Gazebo/DJ Hall"})]})]}),P.jsxs("div",{className:"gala-info-card",children:[P.jsx(dp,{size:28}),P.jsxs("div",{children:[P.jsx("h4",{children:"Audience"}),P.jsx("p",{children:"500+ Expected"})]})]})]}),P.jsxs("div",{className:"gala-description",children:[P.jsx("h2",{children:"About The Gala"}),P.jsx("p",{children:e.description})]}),P.jsxs("div",{className:"gala-highlights",children:[P.jsx("h3",{children:"Highlights"}),P.jsx("div",{className:"highlights-grid",children:e.highlights.map((i,r)=>P.jsxs("div",{className:"highlight-card",children:[P.jsx("span",{className:"highlight-number",children:r+1}),P.jsx("p",{children:i})]},r))})]}),P.jsx("div",{className:"gala-cta",children:P.jsxs("a",{href:Ux.gala,className:"cta-button gala-button",children:[e.buttonText,P.jsx(cp,{size:20})]})})]})]})}function l3(){return P.jsxs(mE,{children:[P.jsx(TE,{}),P.jsx(Ab,{}),P.jsx(VC,{}),P.jsxs("div",{className:"content",children:[P.jsx(Mb,{}),P.jsxs(WM,{children:[P.jsx(Zo,{path:"/",element:P.jsx(n3,{})}),P.jsx(Zo,{path:"/competitions",element:P.jsx(a3,{})}),P.jsx(Zo,{path:"/events",element:P.jsx(s3,{})}),P.jsx(Zo,{path:"/gala",element:P.jsx(o3,{})})]}),P.jsx(Tb,{})]})]})}qy.createRoot(document.getElementById("root")).render(P.jsx(ce.StrictMode,{children:P.jsx(l3,{})}));
