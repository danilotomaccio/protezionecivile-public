(function(){"use strict";var e={2674:function(e,t,n){n.d(t,{q:function(){return r},u:function(){return i}});var r={apiKey:"AIzaSyC_5sSUzZkMofwuI4f6uF1CdKa5uBBzSU4",authDomain:"pcgltricarico05.firebaseapp.com",databaseURL:"https://pcgltricarico05-default-rtdb.europe-west1.firebasedatabase.app",projectId:"pcgltricarico05",storageBucket:"pcgltricarico05.appspot.com",messagingSenderId:"320152077505",appId:"1:320152077505:web:f4c84686f061134a78c040",measurementId:"G-7ZHL4J15XG"},i="BOZDAwlyoFZqyXvJvmwtGxv3kYLHPRSdXa3V0va9tNN_2fjo5jk3FF6y8Muf2hJFtZlsypbCwmkL2W7NX9L4GkU"},7892:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(1146),i=n(9963),a=n(6252);function o(e,t,n,r,o,s){var u=(0,a.up)("Notification"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i.uT,{name:"notif"},{default:(0,a.w5)((function(){return[e.message?((0,a.wg)(),(0,a.j4)(u,{key:0,message:e.message,onDismiss:t[0]||(t[0]=function(t){return e.message=null})},null,8,["message"])):(0,a.kq)("",!0)]})),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((function(e){var t=e.Component,n=e.route;return[(0,a.Wm)(i.uT,{name:n.meta.transition||"fade",mode:"out-in"},{default:(0,a.w5)((function(){return[((0,a.wg)(),(0,a.j4)((0,a.LL)(t)))]})),_:2},1032,["name"])]})),_:1})],64)}var s=n(8637),u=n(5975),c=n(7627),l=n(26),d=n(9065),f=n(3577),p={id:"notification"},v=["moving"],m={class:"title"},h={class:"body"};function g(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("div",{class:"notification",onTouchmovePassive:t[0]||(t[0]=function(){return e.onTouchMove&&e.onTouchMove.apply(e,arguments)}),onTouchstartPassive:t[1]||(t[1]=function(){return e.onTouchStart&&e.onTouchStart.apply(e,arguments)}),onTouchendPassive:t[2]||(t[2]=function(){return e.onTouchEnd&&e.onTouchEnd.apply(e,arguments)}),style:(0,f.j5)({transform:"translateX(".concat(e.translate,"px)")}),moving:e.moving},[(0,a._)("div",m,(0,f.zw)(e.message.notification.title),1),(0,a._)("div",h,(0,f.zw)(e.message.notification.body),1)],44,v)])}var w=(0,a.aZ)({emits:["dismiss"],props:{message:{type:Object,required:!0}},mounted:function(){var e=this;window&&(this.windowWidth=window.innerWidth,window.addEventListener("resize",(function(t){return e.windowWidth=window.innerWidth})))},data:function(){return{touchStartPoint:[0,0],translate:0,moving:!1,windowWidth:0}},methods:{onTouchMove:function(e){this.translate=e.changedTouches[0].screenX-this.touchStartPoint[0]},onTouchStart:function(e){this.moving=!1,this.touchStartPoint=[e.changedTouches[0].screenX,e.changedTouches[0].screenY]},onTouchEnd:function(e){this.moving=!0;var t=160;this.translate>t?(this.translate=this.windowWidth+1,this.$emit("dismiss")):this.translate<-t?(this.translate=-(this.windowWidth+1),this.$emit("dismiss")):this.translate=0}}}),b=n(3744);const k=(0,b.Z)(w,[["render",g],["__scopeId","data-v-30e8be7d"]]);var y=k,C=(0,a.aZ)({components:{Notification:y},data:function(){var e=null;return{message:e}},created:function(){var e=this;window.addEventListener("beforeinstallprompt",(function(t){e.$store.commit(l.wX,t)}));u.O.getApp();(0,s.oR)(c.J).dispatch(d.LW)},methods:{},watch:{"$store.state.messages.lastMessage":function(e){var t=this;this.message=e,setTimeout((function(){t.message=null}),1e4)}}});const _=(0,b.Z)(C,[["render",o]]);var x=_,T={beforeMount:function(e,t,n){e.clickOutsideEvent=function(n){e===n.target||e.contains(n.target)||t.value(n,e)},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}},A=n(5205);(0,A.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),c.h.commit(l.N4)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n(1539),n(8783),n(3948),n(4916),n(3123);var S=n(2119),Z=function(e){return(0,a.dD)("data-v-92b5dd60"),e=e(),(0,a.Cn)(),e},U={id:"home"},P=Z((function(){return(0,a._)("div",{class:"background"},[(0,a._)("div",{class:"header"})],-1)})),D={class:"foreground"},L={class:"header"},z={key:0,class:"activities placeholder",ref:"cards"},E=["data-index"],N=Z((function(){return(0,a._)("div",{class:"icon"},[(0,a._)("span",{class:"material-icon"},"sentiment_dissatisfied")],-1)}));function j(e,t,n,r,o,s){var u=(0,a.up)("Settings"),c=(0,a.up)("LeaveCarButton"),l=(0,a.up)("UseCarButton"),d=(0,a.up)("AdminButton");return(0,a.wg)(),(0,a.iD)("div",U,[(0,a.Wm)(u),P,(0,a._)("div",D,[(0,a._)("div",L,(0,f.zw)(e.headerString),1),e.user?((0,a.wg)(),(0,a.j4)(i.W3,{key:1,tag:"div",class:"activities",name:"cards",appear:""},{default:(0,a.w5)((function(){return[e.usecar?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[e.usingCar?((0,a.wg)(),(0,a.j4)(c,{key:0,"data-index":"1"})):((0,a.wg)(),(0,a.j4)(l,{key:1,"data-index":"1"}))],64)):(0,a.kq)("",!0),e.hasPermission("admin")?((0,a.wg)(),(0,a.j4)(d,{key:1,"data-index":"2"})):(0,a.kq)("",!0),!e.user||e.hasPermission("admin")||e.usecar?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)(a.HY,{key:2},[N,(0,a.Uk)(" "+(0,f.zw)(e.$t.noPermission),1)],64))]})),_:1})):((0,a.wg)(),(0,a.iD)("div",z,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(4,(function(e){return(0,a._)("div",{class:"placeholder_card",key:e,"data-index":e},null,8,E)})),64))],512))])])}var O=n(2833),I=n(3087),M=n(3806),B=n(1481),$=n(655),q=n(1124),R=function(e){return(0,a.dD)("data-v-79094fd2"),e=e(),(0,a.Cn)(),e},W=R((function(){return(0,a._)("span",{class:"material-icon"},"agriculture",-1)}));function F(e,t,n,r,i,o){var s=(0,a.up)("ActivityButton");return(0,a.wg)(),(0,a.j4)(s,{onClick:e.openUseCarPage},{icon:(0,a.w5)((function(){return[W]})),title:(0,a.w5)((function(){return[(0,a.Uk)((0,f.zw)(e.$t.useCarTitle),1)]})),description:(0,a.w5)((function(){return[(0,a.Uk)((0,f.zw)(e.$t.useCarDesc),1)]})),_:1},8,["onClick"])}var H={class:"icon"},V={class:"text"},X={class:"title"},J={class:"desciption"};function G(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("div",{class:(0,f.C_)({activity_card:!0,animated:e.animated}),onClick:t[0]||(t[0]=function(){return e.expand&&e.expand.apply(e,arguments)})},[(0,a._)("div",H,[(0,a.WI)(e.$slots,"icon",{},void 0,!0)]),(0,a._)("div",V,[(0,a._)("div",X,[(0,a.WI)(e.$slots,"title",{},void 0,!0)]),(0,a._)("div",J,[(0,a.WI)(e.$slots,"description",{},void 0,!0)])])],2)}var K=(0,a.aZ)({data:function(){return{animated:!1}},methods:{expand:function(){this.animated=!0}}});const Y=(0,b.Z)(K,[["render",G],["__scopeId","data-v-6c855a7a"]]);var Q=Y,ee=(0,a.aZ)({components:{ActivityButton:Q},methods:{openUseCarPage:function(){this.$router.push({path:"usecar"})}}});const te=(0,b.Z)(ee,[["render",F],["__scopeId","data-v-79094fd2"]]);var ne=te,re=function(e){return(0,a.dD)("data-v-9242d3aa"),e=e(),(0,a.Cn)(),e},ie=re((function(){return(0,a._)("span",{class:"material-icon"},"agriculture",-1)}));function ae(e,t,n,r,i,o){var s=(0,a.up)("ActivityButton");return(0,a.wg)(),(0,a.j4)(s,{onClick:e.openUseCarPage},{icon:(0,a.w5)((function(){return[ie]})),title:(0,a.w5)((function(){return[(0,a.Uk)((0,f.zw)(e.$t.leaveCarTitle),1)]})),description:(0,a.w5)((function(){return[(0,a.Uk)((0,f.zw)(e.$t.leaveCarDesc),1)]})),_:1},8,["onClick"])}var oe=(0,a.aZ)({components:{ActivityButton:Q},methods:{openUseCarPage:function(){this.$router.push({path:"leavecar"})}}});const se=(0,b.Z)(oe,[["render",ae],["__scopeId","data-v-9242d3aa"]]);var ue=se,ce=function(e){return(0,a.dD)("data-v-a72cec0c"),e=e(),(0,a.Cn)(),e},le=ce((function(){return(0,a._)("span",{class:"material-icon"},"admin_panel_settings",-1)}));function de(e,t,n,r,i,o){var s=(0,a.up)("ActivityButton");return(0,a.wg)(),(0,a.j4)(s,{onClick:e.openUseCarPage},{icon:(0,a.w5)((function(){return[le]})),title:(0,a.w5)((function(){return[(0,a.Uk)((0,f.zw)(e.$t.adminTitle),1)]})),description:(0,a.w5)((function(){return[(0,a.Uk)((0,f.zw)(e.$t.adminDesc),1)]})),_:1},8,["onClick"])}var fe=(0,a.aZ)({components:{ActivityButton:Q},methods:{openUseCarPage:function(){this.$router.push({path:"admin"})}}});const pe=(0,b.Z)(fe,[["render",de],["__scopeId","data-v-a72cec0c"]]);var ve=pe,me=function(e){return(0,a.dD)("data-v-07632983"),e=e(),(0,a.Cn)(),e},he={id:"more_menu"},ge=["badge"],we=me((function(){return(0,a._)("span",{class:"material-icon"},"more_vert",-1)})),be=[we],ke={key:0,id:"menu"},ye={class:"text"},Ce={class:"text"},_e={class:"text"},xe={class:"version"};function Te(e,t,n,r,i,o){var s=(0,a.Q2)("click-outside");return(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",he,[(0,a._)("div",{id:"menu_btn",onClick:t[0]||(t[0]=function(t){return e.showMenu=!e.showMenu}),badge:e.updateAvailable},be,8,ge),e.showMenu?((0,a.wg)(),(0,a.iD)("div",ke,[e.installEv?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"option",onClick:t[1]||(t[1]=function(){return e.installApp&&e.installApp.apply(e,arguments)})},[(0,a._)("div",ye,(0,f.zw)(e.$t.install),1)])):(0,a.kq)("",!0),e.updateAvailable?((0,a.wg)(),(0,a.iD)("div",{key:1,class:"option",onClick:t[2]||(t[2]=function(){return e.updateApp&&e.updateApp.apply(e,arguments)}),badge:"true"},[(0,a._)("div",Ce,(0,f.zw)(e.$t.update),1)])):(0,a.kq)("",!0),(0,a._)("div",{class:"option",onClick:t[3]||(t[3]=function(){return e.logout&&e.logout.apply(e,arguments)})},[(0,a._)("div",_e,(0,f.zw)(e.$t.logout),1)]),(0,a._)("div",xe," v"+(0,f.zw)(e.version),1)])):(0,a.kq)("",!0)])),[[s,e.onClickOutside]])}var Ae=n(6322),Se=(0,a.aZ)({data:function(){var e=!1;return{showMenu:e}},methods:{onClickOutside:function(){this.showMenu=!1},logout:function(){(0,Ae.w7)((0,Ae.v0)()),this.$router.push("login")},installApp:function(){this.installEv&&this.installEv.prompt()},updateApp:function(){this.updateAvailable&&window.location.reload()}},computed:{installEv:function(){return this.$store.state.appState.installEvent},updateAvailable:function(){return this.$store.state.appState.updateAvailable},version:function(){return this.$store.state.appState.version}}});const Ze=(0,b.Z)(Se,[["render",Te],["__scopeId","data-v-07632983"]]);var Ue=Ze,Pe=function(e){(0,M.Z)(n,e);var t=(0,B.Z)(n);function n(){return(0,I.Z)(this,n),t.apply(this,arguments)}return(0,O.Z)(n)}(q.w3);Pe=(0,$.gn)([(0,q.Ei)({components:{UseCarButton:ne,LeaveCarButton:ue,AdminButton:ve,Settings:Ue},mounted:function(){c.h.dispatch(l.VX)},computed:{displayName:function(){var e;return null===(e=(0,s.oR)(c.J).state.firebase.user)||void 0===e?void 0:e.displayName},usingCar:function(){var e;return null===(e=c.h.state.appState.user)||void 0===e?void 0:e.usingCar},usecar:function(){return this.hasPermission("usecar")},headerString:function(){var e=c.h.getters.usedCar;return e?"Come va la ".concat(e.model,"?"):"Ciao".concat(this.displayName?", "+this.displayName:"","!")},user:function(){return c.h.state.appState.user}},methods:{hasPermission:function(e){var t=c.h.state.appState.user;if(t)return null!=t.permissions[e]}}})],Pe);var De=Pe;const Le=(0,b.Z)(De,[["render",j],["__scopeId","data-v-92b5dd60"]]);var ze=Le,Ee=[{path:"/",name:"Home",component:ze,meta:{requireLogin:!0}},{path:"/login",name:"Login",component:function(){return n.e(815).then(n.bind(n,8815))}},{path:"/usecar",name:"Use car",component:function(){return Promise.all([n.e(520),n.e(514)]).then(n.bind(n,205))},meta:{transition:"expand-card",requireLogin:!0}},{path:"/leavecar",name:"Leave car",component:function(){return Promise.all([n.e(520),n.e(655)]).then(n.bind(n,8184))},meta:{transition:"expand-card",requireLogin:!0}},{path:"/admin",name:"Admin",component:function(){return n.e(819).then(n.bind(n,7819))},meta:{transition:"expand-card",requireLogin:!0},children:[{path:"",component:function(){return n.e(189).then(n.bind(n,4189))},meta:{transition:"expand-card",requireLogin:!0}},{path:"notifications",component:function(){return n.e(954).then(n.bind(n,3954))},meta:{transition:"slide",requireLogin:!0}},{path:"notifications/newTopic",component:function(){return n.e(376).then(n.bind(n,376))},meta:{transition:"slide",requireLogin:!0}}]}],Ne=(0,S.p7)({history:(0,S.r5)(),routes:Ee});Ne.beforeEach((function(e,t){if(e.meta.requireLogin&&!c.h.state.firebase.user)return{path:"/login",query:{redirect:e.fullPath}}})),Ne.afterEach((function(e,t){var n=e.path.split("/").length,r=t.path.split("/").length;"slide"===e.meta.transition?e.meta.transition=n<r?"slide-right":"slide-left":n===r||"slide-right"!==t.meta.transition&&"slide-left"!==t.meta.transition||(e.meta.transition=n<r?"slide-right":"slide-left")}));var je=Ne,Oe={useCarTitle:"Utilizza parco auto",useCarDesc:"Registra gli spostamenti dei mezzi dell'associazione",chooseCar:"Scegli mezzo",causal:"Motivo dello spostamento",startOdometer:"Contachilometri alla partenza",useCarBtn:"Prendi",leaveCarTitle:"Lascia macchina",leaveCarDesc:"Chiudi e registra report spostamento",stopOdometer:"Contachilometri finale",declarations:"Qualcosa da dichiarare?",leaveCarBtn:"Lascia",adminTitle:"Pannello di amministrazione",adminDesc:"Gestione riservata al direttivo",csvDownloadDesc:"Non puoi ancora fare granché ma per il momento puoi scaricare il csv dei report",csvDownloadBtn:"Scarica CSV",noPermission:"Sembra che tu non abbia alcun permesso. Chiedi ad uno degli amministratori di configurare il tuo profilo o effettua il logout (menú in alto a destra)",loginDesc:"Per usare quest'app devi essere loggato. Per loggarti devi avere un account Google. Verrano presi dal tuo account solo nome ed indirizzo mail per la gestione dei permessi",loginTitle:"Protezione civile gruppo lucano Tricarico",loginWithGoogle:"Accedi con Google",logout:"Effettua logout",install:"Installa app",update:"Aggiorna app",notificationDesc:"Invia una notifica ad un gruppo di iscritti",goToAdminPush:"Invia notifica",sendNotification:"Invia",sendingNotification:"Inviando...",title:"Titolo",description:"Description",users:"Utenti",topic:"Topic",newTopic:"Crea topic",moreSecureDescription:"Per accedere a questa sezione è necessario un maggiore livello di sicurezza. Usa la tua impronta o la tua fede per accedere",moreSecureButton:"Verifica"},Ie=(0,i.ri)(x).use(c.h,c.J).use(je).directive("click-outside",T),Me=Oe;(0,r.KL)();Ie.config.globalProperties.$t=Me,Ie.config.globalProperties.$store=c.h,Ie.mount("#app"),console.log("v0.3.0"),c.h.commit(l.b0,"0.3.0")},8907:function(e,t,n){n.d(t,{B:function(){return u}});var r=n(8534),i=n(3087),a=n(2833),o=(n(5666),n(7663)),s=n(5975),u=function(){function e(){(0,i.Z)(this,e),this.firebase=s.O.getApp(),this.db=(0,o.N8)()}return(0,a.Z)(e,[{key:"readData",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.U2)((0,o.iU)((0,o.iH)(this.db),t));case 3:if(n=e.sent,!n.exists()){e.next=8;break}return e.abrupt("return",n.val());case 8:return console.log("No data available"),e.abrupt("return",null);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e["catch"](0),console.log(e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,this,[[0,12]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"writeData",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.t8)((0,o.iH)(this.db,t),n);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"listenForChanges",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=(0,o.iH)(this.db,t),(0,o.jM)(r,(function(e){var t=e.val();n(t)}));case 2:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"updateValues",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:(0,o.Vx)((0,o.iH)(this.db),t);case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}()},5975:function(e,t,n){n.d(t,{O:function(){return u}});var r=n(3087),i=n(2833),a=n(2674),o=n(5503),s=n(6690),u=function(){function e(){(0,r.Z)(this,e),this.app=(0,o.ZF)(a.q),(0,s.v0)()}return(0,i.Z)(e,null,[{key:"getInstance",value:function(){return e.instance||(e.instance=new this),e.instance}},{key:"getApp",value:function(){return e.getInstance().app}}]),e}()},7627:function(e,t,n){n.d(t,{J:function(){return s},h:function(){return u}});n(2526),n(1817),n(1539);var r=n(8637),i=n(26),a=n(9065),o=n(8802),s=Symbol(),u=(0,r.MT)({modules:{firebase:a.Uu,appState:i.FH,messages:o.i}})},26:function(e,t,n){n.d(t,{VX:function(){return m},In:function(){return h},Vg:function(){return k},wX:function(){return g},N4:function(){return w},b0:function(){return b},FH:function(){return v}});var r=n(8534),i=n(5082),a=(n(5666),n(2479),n(6699),n(2023),n(7941),n(8309),n(9826),n(1539),n(8907)),o=n(2482),s=n(3087),u=n(2833),c=(n(2222),n(2674)),l=n(1146),d=function(){function e(){(0,s.Z)(this,e),this.db=new a.B}return(0,u.Z)(e,[{key:"saveNoticationToken",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=(0,o.Z)({},"/users/".concat(n,"/notificationTokens/").concat(t),!0),e.prev=1,e.next=4,this.db.updateValues(r);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"getMessagingToken",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,l.KL)(),e.next=4,(0,l.LP)(t,{vapidKey:c.u});case 4:if(n=e.sent,!n){e.next=9;break}return e.abrupt("return",n);case 9:console.log("No registration token available. Request permission to generate one.");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.error("An error occurred while retrieving token. ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"saveUserInfo",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=(0,o.Z)({},"/users/".concat(t,"/info"),n),e.prev=1,e.next=4,this.db.updateValues(r);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}(),f=n(8802),p=new a.B,v={state:{cars:null,user:null,installEvent:null,updateAvailable:!1,version:null,finger:!1},mutations:{updateCars:function(e,t){e.cars=t},updateUser:function(e,t){e.user=(0,i.Z)({},t)},setInstallEvent:function(e,t){e.installEvent=t},setUpdateAvailable:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.updateAvailable=t},setVersion:function(e,t){e.version=t},setFinger:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!e.finger;e.finger=t}},actions:{listenCars:function(e){var t=e.commit;p.listenForChanges("cars",(function(e){return t("updateCars",Object.values(e))}))},listenUser:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(t){var n,r,i,a,o,s,u,c,l,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.commit,a=t.rootState,o=t.dispatch,e.next=3,p.readData("users/".concat(null===(n=a.firebase.user)||void 0===n?void 0:n.uid));case 3:if(s=e.sent,!s){e.next=20;break}return i("updateUser",s),u=new d,e.next=9,u.getMessagingToken();case 9:if(c=e.sent,o(f.u),l=a.firebase.user,!l){e.next=20;break}if(v=l.uid,!c||s.notificationTokens&&Object.keys(s.notificationTokens).includes(c)){e.next=17;break}return e.next=17,u.saveNoticationToken(c,v);case 17:if(!l.displayName||!l.email||s.info&&(s.info.name===l.displayName||s.info.mail===l.email)){e.next=20;break}return e.next=20,u.saveUserInfo(v,{name:l.displayName,mail:l.email});case 20:p.listenForChanges("users/".concat(null===(r=a.firebase.user)||void 0===r?void 0:r.uid),(function(e){return i("updateUser",e)}));case 21:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},getters:{carByPlate:function(e){return function(t){return e.cars?e.cars.find((function(e){return e.plate===t})):null}},usedCar:function(e){return e.cars&&e.user?e.cars.find((function(t){var n;return t.plate===(null===(n=e.user)||void 0===n?void 0:n.car)})):null},permissions:function(e){return e.user?Object.keys(e.user.permissions):[]},notificationTokens:function(e){return e.user&&e.user.notificationTokens?Object.keys(e.user.notificationTokens):[]}}},m="listenCars",h="listenUser",g="setInstallEvent",w="setUpdateAvailable",b="setVersion",k="setFinger"},9065:function(e,t,n){n.d(t,{LW:function(){return c},Uu:function(){return s}});var r=n(6690);n(8862);function i(e,t){var n=t,r=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var a=r[0],o=r[1];n(a,o);var s=JSON.stringify(a[e]);localStorage.setItem(e,s)};return r}function a(e,t){var n=JSON.parse(localStorage.getItem(e));return n||t}var o=n(26),s={state:{app:null,user:a("user",null)},mutations:{setApp:function(e,t){e.app=t},setUser:i("user",(function(e,t){e.user=t}))},actions:{listenUserAuth:function(e){var t=e.commit,n=e.dispatch,i=(0,r.v0)();(0,r.Aj)(i,(function(e){e?(t(u,e),n(o.In)):t(u,null)}))}}},u="setUser",c="listenUserAuth"},8802:function(e,t,n){n.d(t,{i:function(){return a},u:function(){return o}});var r=n(8534),i=(n(5666),n(1146)),a={state:{messages:[],lastMessage:null},mutations:{addMessage:function(e,t){e.messages.push(t)},updateLastMessage:function(e,t){e.lastMessage=t}},actions:{listenMessages:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,(0,i.ps)((0,i.KL)(),(function(e){console.log(e),n("addMessage",e),n("updateLastMessage",e)}));case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},getters:{}},o="listenMessages"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],a=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<o&&(o=a));if(s){e.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{189:"e9d31716",376:"b9b3702c",514:"307c236c",520:"6aed549e",655:"d8188e24",815:"cd13f9e4",819:"d6fedf1a",954:"74e64f44"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{189:"1ff5327c",376:"9905b316",514:"a5d32d39",655:"a5d32d39",815:"ea7b5157",819:"cf7daf5a",954:"c804b26d"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="protezione-civile:";n.l=function(r,i,a,o){if(e[r])e[r].push(i);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[i];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(a){if(i.onerror=i.onload=null,"load"===a.type)n();else{var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=s,i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=a,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){i=o[r],a=i.getAttribute("data-href");if(a===e||a===t)return i}},r=function(r){return new Promise((function(i,a){var o=n.miniCssF(r),s=n.p+o;if(t(o,s))return i();e(r,s,i,a)}))},i={143:0};n.f.miniCss=function(e,t){var n={189:1,376:1,514:1,655:1,815:1,819:1,954:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=r(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=a);var o=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}};n.l(o,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,o=r[0],s=r[1],u=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(u)var l=u(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7892)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.c825db6d.js.map