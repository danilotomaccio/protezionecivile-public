(self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[]).push([[811],{647:function(r,n,e){var t=e(1702),i=e(7908),a=Math.floor,o=t("".charAt),c=t("".replace),u=t("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;r.exports=function(r,n,e,t,v,d){var f=e+r.length,g=t.length,p=l;return void 0!==v&&(v=i(v),p=s),c(d,p,(function(i,c){var s;switch(o(c,0)){case"$":return"$";case"&":return r;case"`":return u(n,0,e);case"'":return u(n,f);case"<":s=v[u(c,1,-1)];break;default:var l=+c;if(0===l)return i;if(l>g){var d=a(l/10);return 0===d?i:d<=g?void 0===t[d-1]?o(c,1):t[d-1]+o(c,1):i}s=t[l-1]}return void 0===s?"":s}))}},5306:function(r,n,e){"use strict";var t=e(2104),i=e(6916),a=e(1702),o=e(7007),c=e(7293),u=e(9670),s=e(614),l=e(9303),v=e(7466),d=e(1340),f=e(4488),g=e(1530),p=e(8173),h=e(647),$=e(7651),_=e(5112),w=_("replace"),b=Math.max,m=Math.min,x=a([].concat),k=a([].push),z=a("".indexOf),C=a("".slice),I=function(r){return void 0===r?r:String(r)},y=function(){return"$0"==="a".replace(/./,"$0")}(),D=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),G=!c((function(){var r=/./;return r.exec=function(){var r=[];return r.groups={a:"7"},r},"7"!=="".replace(r,"$<a>")}));o("replace",(function(r,n,e){var a=D?"$":"$0";return[function(r,e){var t=f(this),a=void 0==r?void 0:p(r,w);return a?i(a,r,t,e):i(n,d(t),r,e)},function(r,i){var o=u(this),c=d(r);if("string"==typeof i&&-1===z(i,a)&&-1===z(i,"$<")){var f=e(n,o,c,i);if(f.done)return f.value}var p=s(i);p||(i=d(i));var _=o.global;if(_){var w=o.unicode;o.lastIndex=0}var y=[];while(1){var D=$(o,c);if(null===D)break;if(k(y,D),!_)break;var G=d(D[0]);""===G&&(o.lastIndex=g(c,v(o.lastIndex),w))}for(var M="",Z=0,L=0;L<y.length;L++){D=y[L];for(var P=d(D[0]),R=b(m(l(D.index),c.length),0),q=[],A=1;A<D.length;A++)k(q,I(D[A]));var F=D.groups;if(p){var J=x([P],q,R,c);void 0!==F&&k(J,F);var O=d(t(i,void 0,J))}else O=h(P,c,R,q,F,i);R>=Z&&(M+=C(c,Z,R)+O,Z=R+P.length)}return M+C(c,Z)}]}),!G||!y||D)},6811:function(r,n,e){"use strict";e.r(n),e.d(n,{default:function(){return b}});var t=e(6252),i=e(3577),a=function(r){return(0,t.dD)("data-v-0d071fb9"),r=r(),(0,t.Cn)(),r},o={id:"login"},c={class:"container"},u={class:"icon"},s=["src"],l={class:"title"},v=a((function(){return(0,t._)("div",{class:"google-icon-wrapper"},[(0,t._)("img",{class:"google-icon-svg",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"})],-1)})),d={class:"btn-text"},f={class:"description"};function g(r,n,e,a,g,p){return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",c,[(0,t._)("div",u,[(0,t._)("img",{src:"".concat(r.publicPath,"img/icons/android-chrome-192x192.png"),alt:"Logo...piu o meno"},null,8,s)]),(0,t._)("div",l,(0,i.zw)(r.$t.loginTitle),1),(0,t._)("div",{class:"google-btn",onClick:n[0]||(n[0]=function(){return r.signin&&r.signin.apply(r,arguments)})},[v,(0,t._)("p",d,[(0,t._)("b",null,(0,i.zw)(r.$t.loginWithGoogle),1)])]),(0,t._)("div",f,(0,i.zw)(r.$t.loginDesc),1)])])}var p=e(8534),h=(e(5666),e(4916),e(5306),e(6690)),$=(0,t.aZ)({data:function(){return{publicPath:"/"}},methods:{signin:function(){var r=this;return(0,p.Z)(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=new h.hJ,t=(0,h.v0)(),n.next=4,(0,h.Fb)(t,h.a$);case 4:return n.next=6,(0,h.rh)(t,e);case 6:n.sent,r.$router.replace({path:r.$route.query.redirect||"/"});case 8:case"end":return n.stop()}}),n)})))()}}}),_=e(3744);const w=(0,_.Z)($,[["render",g],["__scopeId","data-v-0d071fb9"]]);var b=w}}]);
//# sourceMappingURL=811-legacy.50affee8.js.map