(self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[]).push([[183],{1530:function(e,n,r){"use strict";var t=r(8710).charAt;e.exports=function(e,n,r){return n+(r?t(e,n).length:1)}},7007:function(e,n,r){"use strict";r(4916);var t=r(1702),i=r(1320),a=r(2261),o=r(7293),u=r(5112),c=r(8880),s=u("species"),l=RegExp.prototype;e.exports=function(e,n,r,v){var p=u(e),d=!o((function(){var n={};return n[p]=function(){return 7},7!=""[e](n)})),f=d&&!o((function(){var n=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return n=!0,null},r[p](""),!n}));if(!d||!f||r){var g=t(/./[p]),x=n(p,""[e],(function(e,n,r,i,o){var u=t(e),c=n.exec;return c===a||c===l.exec?d&&!o?{done:!0,value:g(n,r,i)}:{done:!0,value:u(r,n,i)}:{done:!1}}));i(String.prototype,e,x[0]),i(l,p,x[1])}v&&c(l[p],"sham",!0)}},647:function(e,n,r){var t=r(1702),i=r(7908),a=Math.floor,o=t("".charAt),u=t("".replace),c=t("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,n,r,t,v,p){var d=r+e.length,f=t.length,g=l;return void 0!==v&&(v=i(v),g=s),u(p,g,(function(i,u){var s;switch(o(u,0)){case"$":return"$";case"&":return e;case"`":return c(n,0,r);case"'":return c(n,d);case"<":s=v[c(u,1,-1)];break;default:var l=+u;if(0===l)return i;if(l>f){var p=a(l/10);return 0===p?i:p<=f?void 0===t[p-1]?o(u,1):t[p-1]+o(u,1):i}s=t[l-1]}return void 0===s?"":s}))}},7651:function(e,n,r){var t=r(7854),i=r(6916),a=r(9670),o=r(614),u=r(4326),c=r(2261),s=t.TypeError;e.exports=function(e,n){var r=e.exec;if(o(r)){var t=i(r,e,n);return null!==t&&a(t),t}if("RegExp"===u(e))return i(c,e,n);throw s("RegExp#exec called on incompatible receiver")}},2261:function(e,n,r){"use strict";var t=r(6916),i=r(1702),a=r(1340),o=r(7066),u=r(2999),c=r(2309),s=r(30),l=r(9909).get,v=r(9441),p=r(7168),d=c("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,g=f,x=i("".charAt),h=i("".indexOf),b=i("".replace),I=i("".slice),m=function(){var e=/a/,n=/b*/g;return t(f,e,"a"),t(f,n,"a"),0!==e.lastIndex||0!==n.lastIndex}(),$=u.BROKEN_CARET,_=void 0!==/()??/.exec("")[1],E=m||_||$||v||p;E&&(g=function(e){var n,r,i,u,c,v,p,E=this,R=l(E),w=a(e),y=R.raw;if(y)return y.lastIndex=E.lastIndex,n=t(g,y,w),E.lastIndex=y.lastIndex,n;var k=R.groups,A=$&&E.sticky,C=t(o,E),z=E.source,S=0,G=w;if(A&&(C=b(C,"y",""),-1===h(C,"g")&&(C+="g"),G=I(w,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==x(w,E.lastIndex-1))&&(z="(?: "+z+")",G=" "+G,S++),r=new RegExp("^(?:"+z+")",C)),_&&(r=new RegExp("^"+z+"$(?!\\s)",C)),m&&(i=E.lastIndex),u=t(f,A?r:E,G),A?u?(u.input=I(u.input,S),u[0]=I(u[0],S),u.index=E.lastIndex,E.lastIndex+=u[0].length):E.lastIndex=0:m&&u&&(E.lastIndex=E.global?u.index+u[0].length:i),_&&u&&u.length>1&&t(d,u[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(u[c]=void 0)})),u&&k)for(u.groups=v=s(null),c=0;c<k.length;c++)p=k[c],v[p[0]]=u[p[1]];return u}),e.exports=g},7066:function(e,n,r){"use strict";var t=r(9670);e.exports=function(){var e=t(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.dotAll&&(n+="s"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n}},2999:function(e,n,r){var t=r(7293),i=r(7854),a=i.RegExp,o=t((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),u=o||t((function(){return!a("a","y").sticky})),c=o||t((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:u,UNSUPPORTED_Y:o}},9441:function(e,n,r){var t=r(7293),i=r(7854),a=i.RegExp;e.exports=t((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:function(e,n,r){var t=r(7293),i=r(7854),a=i.RegExp;e.exports=t((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},4916:function(e,n,r){"use strict";var t=r(2109),i=r(2261);t({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},5306:function(e,n,r){"use strict";var t=r(2104),i=r(6916),a=r(1702),o=r(7007),u=r(7293),c=r(9670),s=r(614),l=r(9303),v=r(7466),p=r(1340),d=r(4488),f=r(1530),g=r(8173),x=r(647),h=r(7651),b=r(5112),I=b("replace"),m=Math.max,$=Math.min,_=a([].concat),E=a([].push),R=a("".indexOf),w=a("".slice),y=function(e){return void 0===e?e:String(e)},k=function(){return"$0"==="a".replace(/./,"$0")}(),A=function(){return!!/./[I]&&""===/./[I]("a","$0")}(),C=!u((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,n,r){var a=A?"$":"$0";return[function(e,r){var t=d(this),a=void 0==e?void 0:g(e,I);return a?i(a,e,t,r):i(n,p(t),e,r)},function(e,i){var o=c(this),u=p(e);if("string"==typeof i&&-1===R(i,a)&&-1===R(i,"$<")){var d=r(n,o,u,i);if(d.done)return d.value}var g=s(i);g||(i=p(i));var b=o.global;if(b){var I=o.unicode;o.lastIndex=0}var k=[];while(1){var A=h(o,u);if(null===A)break;if(E(k,A),!b)break;var C=p(A[0]);""===C&&(o.lastIndex=f(u,v(o.lastIndex),I))}for(var z="",S=0,G=0;G<k.length;G++){A=k[G];for(var N=p(A[0]),O=m($(l(A.index),u.length),0),T=[],D=1;D<A.length;D++)E(T,y(A[D]));var M=A.groups;if(g){var P=_([N],T,O,u);void 0!==M&&E(P,M);var K=p(t(i,void 0,P))}else K=x(N,u,O,T,M,i);O>=S&&(z+=w(u,S,O)+K,S=O+N.length)}return z+w(u,S)}]}),!C||!k||A)},1183:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return b}});var t=r(6252),i=function(e){return(0,t.dD)("data-v-56063de0"),e=e(),(0,t.Cn)(),e},a={id:"login"},o={class:"container"},u=i((function(){return(0,t._)("div",{class:"title"},"Accedi",-1)})),c=i((function(){return(0,t._)("div",{class:"google-icon-wrapper"},[(0,t._)("img",{class:"google-icon-svg",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"})],-1)})),s=i((function(){return(0,t._)("p",{class:"btn-text"},[(0,t._)("b",null,"Accedi con Google")],-1)})),l=[c,s],v=i((function(){return(0,t._)("div",{class:"description"}," Per usare quest'app devi essere loggato (cosí non puoi fare il furbo). Al momento puoi fare il login solo con Google. Non hai Google?! Nessun problema! Puoi usare uno dei piccioni viaggiatori della protezione civile per avvisare la direzione che stai per prendere uno degli asini messi a disposizione per andare a spegnere un incendio nella vigna in piazza ",-1)}));function p(e,n,r,i,c,s){return(0,t.wg)(),(0,t.iD)("div",a,[(0,t._)("div",o,[u,(0,t._)("div",{class:"google-btn",onClick:n[0]||(n[0]=function(){return e.signin&&e.signin.apply(e,arguments)})},l),v])])}var d=r(8534),f=(r(5666),r(4916),r(5306),r(3633)),g=(0,t.aZ)({methods:{signin:function(){var e=this;return(0,d.Z)(regeneratorRuntime.mark((function n(){var r,t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=new f.hJ,t=(0,f.v0)(),n.next=4,(0,f.Fb)(t,f.a$);case 4:return n.next=6,(0,f.rh)(t,r);case 6:n.sent,e.$router.replace({path:e.$route.query.redirect||"/"});case 8:case"end":return n.stop()}}),n)})))()}}}),x=r(3744);const h=(0,x.Z)(g,[["render",p],["__scopeId","data-v-56063de0"]]);var b=h}}]);
//# sourceMappingURL=183-legacy.af572599.js.map