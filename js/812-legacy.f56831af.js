(self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[]).push([[812],{8457:function(t,e,n){"use strict";var r=n(7854),o=n(9974),a=n(6916),i=n(7908),c=n(3411),u=n(7659),s=n(4411),l=n(6244),d=n(6135),f=n(8554),v=n(1246),p=r.Array;t.exports=function(t){var e=i(t),n=s(this),r=arguments.length,x=r>1?arguments[1]:void 0,h=void 0!==x;h&&(x=o(x,r>2?arguments[2]:void 0));var g,y,m,w,b,I,E=v(e),S=0;if(!E||this==p&&u(E))for(g=l(e),y=n?new this(g):p(g);g>S;S++)I=h?x(e[S],S):e[S],d(y,S,I);else for(w=f(e,E),b=w.next,y=n?new this:[];!(m=a(b,w)).done;S++)I=h?c(w,x,[m.value,S],!0):m.value,d(y,S,I);return y.length=S,y}},3411:function(t,e,n){var r=n(9670),o=n(9212);t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(i){o(t,"throw",i)}}},2261:function(t,e,n){"use strict";var r=n(6916),o=n(1702),a=n(1340),i=n(7066),c=n(2999),u=n(2309),s=n(30),l=n(9909).get,d=n(9441),f=n(7168),v=u("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,x=p,h=o("".charAt),g=o("".indexOf),y=o("".replace),m=o("".slice),w=function(){var t=/a/,e=/b*/g;return r(p,t,"a"),r(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),b=c.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],E=w||I||b||d||f;E&&(x=function(t){var e,n,o,c,u,d,f,E=this,S=l(E),A=a(t),R=S.raw;if(R)return R.lastIndex=E.lastIndex,e=r(x,R,A),E.lastIndex=R.lastIndex,e;var C=S.groups,_=b&&E.sticky,T=r(i,E),k=E.source,O=0,D=A;if(_&&(T=y(T,"y",""),-1===g(T,"g")&&(T+="g"),D=m(A,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==h(A,E.lastIndex-1))&&(k="(?: "+k+")",D=" "+D,O++),n=new RegExp("^(?:"+k+")",T)),I&&(n=new RegExp("^"+k+"$(?!\\s)",T)),w&&(o=E.lastIndex),c=r(p,_?n:E,D),_?c?(c.input=m(c.input,O),c[0]=m(c[0],O),c.index=E.lastIndex,E.lastIndex+=c[0].length):E.lastIndex=0:w&&c&&(E.lastIndex=E.global?c.index+c[0].length:o),I&&c&&c.length>1&&r(v,c[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)})),c&&C)for(c.groups=d=s(null),u=0;u<C.length;u++)f=C[u],d[f[0]]=c[f[1]];return c}),t.exports=x},7066:function(t,e,n){"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:function(t,e,n){var r=n(7293),o=n(7854),a=o.RegExp,i=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),c=i||r((function(){return!a("a","y").sticky})),u=i||r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:u,MISSED_STICKY:c,UNSUPPORTED_Y:i}},9441:function(t,e,n){var r=n(7293),o=n(7854),a=o.RegExp;t.exports=r((function(){var t=a(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},7168:function(t,e,n){var r=n(7293),o=n(7854),a=o.RegExp;t.exports=r((function(){var t=a("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1038:function(t,e,n){var r=n(2109),o=n(8457),a=n(7072),i=!a((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:i},{from:o})},7042:function(t,e,n){"use strict";var r=n(2109),o=n(7854),a=n(3157),i=n(4411),c=n(111),u=n(1400),s=n(6244),l=n(5656),d=n(6135),f=n(5112),v=n(1194),p=n(206),x=v("slice"),h=f("species"),g=o.Array,y=Math.max;r({target:"Array",proto:!0,forced:!x},{slice:function(t,e){var n,r,o,f=l(this),v=s(f),x=u(t,v),m=u(void 0===e?v:e,v);if(a(f)&&(n=f.constructor,i(n)&&(n===g||a(n.prototype))?n=void 0:c(n)&&(n=n[h],null===n&&(n=void 0)),n===g||void 0===n))return p(f,x,m);for(r=new(void 0===n?g:n)(y(m-x,0)),o=0;x<m;x++,o++)x in f&&d(r,o,f[x]);return r.length=o,r}})},8309:function(t,e,n){var r=n(9781),o=n(6530).EXISTS,a=n(1702),i=n(3070).f,c=Function.prototype,u=a(c.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=a(s.exec),d="name";r&&!o&&i(c,d,{configurable:!0,get:function(){try{return l(s,u(this))[1]}catch(t){return""}}})},4916:function(t,e,n){"use strict";var r=n(2109),o=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},7601:function(t,e,n){"use strict";n(4916);var r=n(2109),o=n(7854),a=n(6916),i=n(1702),c=n(614),u=n(111),s=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=o.Error,d=i(/./.test);r({target:"RegExp",proto:!0,forced:!s},{test:function(t){var e=this.exec;if(!c(e))return d(this,t);var n=a(e,this,t);if(null!==n&&!u(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},5812:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r=n(6252),o=n(3577),a={id:"admin"},i={class:"section"},c={class:"description"};function u(t,e,n,u,s,l){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("h2",null,(0,o.zw)(t.$t.adminTitle),1),(0,r._)("div",i,[(0,r._)("div",c,(0,o.zw)(t.$t.csvDownloadDesc),1),(0,r._)("div",{class:"button",onClick:e[0]||(e[0]=function(){return t.downloadCSV&&t.downloadCSV.apply(t,arguments)})},(0,o.zw)(t.$t.csvDownloadBtn),1)])])}var s=n(8439),l=n(8534),d=(n(1539),n(5666),n(8907)),f=(0,r.aZ)({methods:{downloadCSV:function(){var t=this;return(0,l.Z)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new d.B,e.next=3,n.readData("carReports");case 3:r=e.sent,r&&(o=t.reportsToCSV(r),t.downloadFile("report.csv",o));case 5:case"end":return e.stop()}}),e)})))()},reportsToCSV:function(t){var e=["carId","startTime","stopTime","startOdometer","stopOdometer","userId","userName","causal","declarations"],n="id"+e.reduce((function(t,e){return t+",".concat(e)}),"")+"\n";for(var r in t){n+="".concat(r);var o,a=t[r],i=(0,s.Z)(e);try{for(i.s();!(o=i.n()).done;){var c=o.value,u=a[c];n+=",".concat(u||"")}}catch(l){i.e(l)}finally{i.f()}n+="\n"}return n},downloadFile:function(t,e){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),n.setAttribute("download",t),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}}}),v=n(3744);const p=(0,v.Z)(f,[["render",u],["__scopeId","data-v-4e30dfd8"]]);var x=p},8439:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});n(2526),n(1817),n(1539),n(2165),n(8783),n(3948),n(1703),n(7042),n(8309),n(1038),n(4916),n(7601);function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function a(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=o(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,i=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(u)throw i}}}}}}]);
//# sourceMappingURL=812-legacy.f56831af.js.map