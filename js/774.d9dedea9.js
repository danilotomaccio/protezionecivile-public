(self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[]).push([[774],{9662:function(t,n,r){var e=r(7854),o=r(614),i=r(6330),u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},6077:function(t,n,r){var e=r(7854),o=r(614),i=e.String,u=e.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw u("Can't set "+i(t)+" as a prototype")}},9670:function(t,n,r){var e=r(7854),o=r(111),i=e.String,u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},4326:function(t,n,r){var e=r(1702),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,n,r){var e=r(7854),o=r(1694),i=r(614),u=r(4326),c=r(5112),f=c("toStringTag"),a=e.Object,p="Arguments"==u(function(){return arguments}()),s=function(t,n){try{return t[n]}catch(r){}};t.exports=o?u:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=s(n=a(t),f))?r:p?u(n):"Object"==(e=u(n))&&i(n.callee)?"Arguments":e}},8880:function(t,n,r){var e=r(9781),o=r(3070),i=r(9114);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,r){var e=r(7293);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,r){var e=r(7854),o=r(111),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:function(t,n,r){var e=r(5005);t.exports=e("navigator","userAgent")||""},7392:function(t,n,r){var e,o,i=r(7854),u=r(8113),c=i.process,f=i.Deno,a=c&&c.versions||f&&f.version,p=a&&a.v8;p&&(e=p.split("."),o=e[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(e=u.match(/Edge\/(\d+)/),(!e||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/),e&&(o=+e[1]))),t.exports=o},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},4374:function(t,n,r){var e=r(7293);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,n,r){var e=r(4374),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,n,r){var e=r(9781),o=r(2597),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),f=c&&"something"===function(){}.name,a=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:f,CONFIGURABLE:a}},1702:function(t,n,r){var e=r(4374),o=Function.prototype,i=o.bind,u=o.call,c=e&&i.bind(u,u);t.exports=e?function(t){return t&&c(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},5005:function(t,n,r){var e=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},8173:function(t,n,r){var e=r(9662);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},7854:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(t,n,r){var e=r(1702),o=r(7908),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},6177:function(t,n,r){var e=r(9781),o=r(7293),i=r(317);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},2788:function(t,n,r){var e=r(1702),o=r(614),i=r(5465),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},9909:function(t,n,r){var e,o,i,u=r(8536),c=r(7854),f=r(1702),a=r(111),p=r(8880),s=r(2597),v=r(5465),l=r(6200),y=r(3501),b="Object already initialized",g=c.TypeError,h=c.WeakMap,x=function(t){return i(t)?o(t):e(t,{})},m=function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw g("Incompatible receiver, "+t+" required");return r}};if(u||v.state){var d=v.state||(v.state=new h),S=f(d.get),j=f(d.has),w=f(d.set);e=function(t,n){if(j(d,t))throw new g(b);return n.facade=t,w(d,t,n),n},o=function(t){return S(d,t)||{}},i=function(t){return j(d,t)}}else{var O=l("state");y[O]=!0,e=function(t,n){if(s(t,O))throw new g(b);return n.facade=t,p(t,O,n),n},o=function(t){return s(t,O)?t[O]:{}},i=function(t){return s(t,O)}}t.exports={set:e,get:o,has:i,enforce:x,getterFor:m}},614:function(t){t.exports=function(t){return"function"==typeof t}},111:function(t,n,r){var e=r(614);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},1913:function(t){t.exports=!1},2190:function(t,n,r){var e=r(7854),o=r(5005),i=r(614),u=r(7976),c=r(3307),f=e.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&u(n.prototype,f(t))}},6244:function(t,n,r){var e=r(7466);t.exports=function(t){return e(t.length)}},133:function(t,n,r){var e=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},8536:function(t,n,r){var e=r(7854),o=r(614),i=r(2788),u=e.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},3070:function(t,n,r){var e=r(7854),o=r(9781),i=r(6177),u=r(3353),c=r(9670),f=r(4948),a=e.TypeError,p=Object.defineProperty,s=Object.getOwnPropertyDescriptor,v="enumerable",l="configurable",y="writable";n.f=o?u?function(t,n,r){if(c(t),n=f(n),c(r),"function"===typeof t&&"prototype"===n&&"value"in r&&y in r&&!r[y]){var e=s(t,n);e&&e[y]&&(t[n]=r.value,r={configurable:l in r?r[l]:e[l],enumerable:v in r?r[v]:e[v],writable:!1})}return p(t,n,r)}:p:function(t,n,r){if(c(t),n=f(n),c(r),i)try{return p(t,n,r)}catch(e){}if("get"in r||"set"in r)throw a("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},7976:function(t,n,r){var e=r(1702);t.exports=e({}.isPrototypeOf)},7674:function(t,n,r){var e=r(1702),o=r(9670),i=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{t=e(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(r,[]),n=r instanceof Array}catch(u){}return function(r,e){return o(r),i(e),n?t(r,e):r.__proto__=e,r}}():void 0)},2140:function(t,n,r){var e=r(7854),o=r(6916),i=r(614),u=r(111),c=e.TypeError;t.exports=function(t,n){var r,e;if("string"===n&&i(r=t.toString)&&!u(e=o(r,t)))return e;if(i(r=t.valueOf)&&!u(e=o(r,t)))return e;if("string"!==n&&i(r=t.toString)&&!u(e=o(r,t)))return e;throw c("Can't convert object to primitive value")}},1320:function(t,n,r){var e=r(7854),o=r(614),i=r(2597),u=r(8880),c=r(3505),f=r(2788),a=r(9909),p=r(6530).CONFIGURABLE,s=a.get,v=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,f){var a,s=!!f&&!!f.unsafe,y=!!f&&!!f.enumerable,b=!!f&&!!f.noTargetGet,g=f&&void 0!==f.name?f.name:n;o(r)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||p&&r.name!==g)&&u(r,"name",g),a=v(r),a.source||(a.source=l.join("string"==typeof g?g:""))),t!==e?(s?!b&&t[n]&&(y=!0):delete t[n],y?t[n]=r:u(t,n,r)):y?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return o(this)&&s(this).source||f(this)}))},4488:function(t,n,r){var e=r(7854),o=e.TypeError;t.exports=function(t){if(void 0==t)throw o("Can't call method on "+t);return t}},3505:function(t,n,r){var e=r(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},6200:function(t,n,r){var e=r(2309),o=r(9711),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,r){var e=r(7854),o=r(3505),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},2309:function(t,n,r){var e=r(1913),o=r(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.21.1",mode:e?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},9303:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},7466:function(t,n,r){var e=r(9303),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7908:function(t,n,r){var e=r(7854),o=r(4488),i=e.Object;t.exports=function(t){return i(o(t))}},7593:function(t,n,r){var e=r(7854),o=r(6916),i=r(111),u=r(2190),c=r(8173),f=r(2140),a=r(5112),p=e.TypeError,s=a("toPrimitive");t.exports=function(t,n){if(!i(t)||u(t))return t;var r,e=c(t,s);if(e){if(void 0===n&&(n="default"),r=o(e,t,n),!i(r)||u(r))return r;throw p("Can't convert object to primitive value")}return void 0===n&&(n="number"),f(t,n)}},4948:function(t,n,r){var e=r(7593),o=r(2190);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},1694:function(t,n,r){var e=r(5112),o=e("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},6330:function(t,n,r){var e=r(7854),o=e.String;t.exports=function(t){try{return o(t)}catch(n){return"Object"}}},9711:function(t,n,r){var e=r(1702),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,n,r){var e=r(133);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,n,r){var e=r(9781),o=r(7293);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,n,r){var e=r(7854),o=r(2309),i=r(2597),u=r(9711),c=r(133),f=r(3307),a=o("wks"),p=e.Symbol,s=p&&p["for"],v=f?p:p&&p.withoutSetter||u;t.exports=function(t){if(!i(a,t)||!c&&"string"!=typeof a[t]){var n="Symbol."+t;c&&i(p,t)?a[t]=p[t]:a[t]=f&&s?s(n):v(n)}return a[t]}}}]);
//# sourceMappingURL=774.d9dedea9.js.map