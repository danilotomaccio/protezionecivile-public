(function(){"use strict";var e={2674:function(e,t,n){n.d(t,{q:function(){return i},u:function(){return a}});const i={apiKey:"AIzaSyC_5sSUzZkMofwuI4f6uF1CdKa5uBBzSU4",authDomain:"pcgltricarico05.firebaseapp.com",databaseURL:"https://pcgltricarico05-default-rtdb.europe-west1.firebasedatabase.app",projectId:"pcgltricarico05",storageBucket:"pcgltricarico05.appspot.com",messagingSenderId:"320152077505",appId:"1:320152077505:web:f4c84686f061134a78c040",measurementId:"G-7ZHL4J15XG"},a="BOZDAwlyoFZqyXvJvmwtGxv3kYLHPRSdXa3V0va9tNN_2fjo5jk3FF6y8Muf2hJFtZlsypbCwmkL2W7NX9L4GkU"},4125:function(e,t,n){var i=n(1146),a=n(9963),o=n(6252);function s(e,t,n,i,s,r){const c=(0,o.up)("Notification"),u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a.uT,{name:"notif"},{default:(0,o.w5)((()=>[e.message?((0,o.wg)(),(0,o.j4)(c,{key:0,message:e.message,onDismiss:t[0]||(t[0]=t=>e.message=null)},null,8,["message"])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((({Component:e,route:t})=>[(0,o.Wm)(a.uT,{name:t.meta.transition||"fade",mode:"out-in"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))])),_:2},1032,["name"])])),_:1})],64)}var r=n(8637),c=n(5975),u=n(7627),l=n(6849),d=n(9065),p=n(3577);const f={id:"notification"},m=["moving"],g={class:"title"},v={class:"body"};function h(e,t,n,i,a,s){return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",{class:"notification",onTouchmovePassive:t[0]||(t[0]=(...t)=>e.onTouchMove&&e.onTouchMove(...t)),onTouchstartPassive:t[1]||(t[1]=(...t)=>e.onTouchStart&&e.onTouchStart(...t)),onTouchendPassive:t[2]||(t[2]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t)),style:(0,p.j5)({transform:`translateX(${e.translate}px)`}),moving:e.moving},[(0,o._)("div",g,(0,p.zw)(e.message.notification.title),1),(0,o._)("div",v,(0,p.zw)(e.message.notification.body),1)],44,m)])}var b=(0,o.aZ)({emits:["dismiss"],props:{message:{type:Object,required:!0}},mounted(){window&&(this.windowWidth=window.innerWidth,window.addEventListener("resize",(e=>this.windowWidth=window.innerWidth)))},data(){return{touchStartPoint:[0,0],translate:0,moving:!1,windowWidth:0}},methods:{onTouchMove(e){this.translate=e.changedTouches[0].screenX-this.touchStartPoint[0]},onTouchStart(e){this.moving=!1,this.touchStartPoint=[e.changedTouches[0].screenX,e.changedTouches[0].screenY]},onTouchEnd(e){this.moving=!0;const t=160;this.translate>t?(this.translate=this.windowWidth+1,this.$emit("dismiss")):this.translate<-t?(this.translate=-(this.windowWidth+1),this.$emit("dismiss")):this.translate=0}}}),w=n(3744);const y=(0,w.Z)(b,[["render",h],["__scopeId","data-v-30e8be7d"]]);var k=y,C=(0,o.aZ)({components:{Notification:k},data(){let e=null;return{message:e}},created(){window.addEventListener("beforeinstallprompt",(e=>{this.$store.commit(l.wX,e)}));c.O.getApp();(0,r.oR)(u.J).dispatch(d.LW)},methods:{},watch:{"$store.state.messages.lastMessage"(e){this.message=e,setTimeout((()=>{this.message=null}),1e4)}}});const _=(0,w.Z)(C,[["render",s]]);var T=_;const A={beforeMount(e,t,n){e.clickOutsideEvent=function(n){e===n.target||e.contains(n.target)||t.value(n,e)},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted(e){document.body.removeEventListener("click",e.clickOutsideEvent)}};var N=n(5205);(0,N.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),u.h.commit(l.N4)},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var D=n(2119);const U=e=>((0,o.dD)("data-v-92b5dd60"),e=e(),(0,o.Cn)(),e),S={id:"home"},P=U((()=>(0,o._)("div",{class:"background"},[(0,o._)("div",{class:"header"})],-1))),E={class:"foreground"},L={class:"header"},z={key:0,class:"activities placeholder",ref:"cards"},$=["data-index"],j=U((()=>(0,o._)("div",{class:"icon"},[(0,o._)("span",{class:"material-icon"},"sentiment_dissatisfied")],-1)));function I(e,t,n,i,s,r){const c=(0,o.up)("Settings"),u=(0,o.up)("LeaveCarButton"),l=(0,o.up)("UseCarButton"),d=(0,o.up)("AdminButton");return(0,o.wg)(),(0,o.iD)("div",S,[(0,o.Wm)(c),P,(0,o._)("div",E,[(0,o._)("div",L,(0,p.zw)(e.headerString),1),e.user?((0,o.wg)(),(0,o.j4)(a.W3,{key:1,tag:"div",class:"activities",name:"cards",appear:""},{default:(0,o.w5)((()=>[e.usecar?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[e.usingCar?((0,o.wg)(),(0,o.j4)(u,{key:0,"data-index":"1"})):((0,o.wg)(),(0,o.j4)(l,{key:1,"data-index":"1"}))],64)):(0,o.kq)("",!0),e.hasPermission("admin")?((0,o.wg)(),(0,o.j4)(d,{key:1,"data-index":"2"})):(0,o.kq)("",!0),!e.user||e.hasPermission("admin")||e.usecar?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)(o.HY,{key:2},[j,(0,o.Uk)(" "+(0,p.zw)(e.$t.noPermission),1)],64))])),_:1})):((0,o.wg)(),(0,o.iD)("div",z,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(4,(e=>(0,o._)("div",{class:"placeholder_card",key:e,"data-index":e},null,8,$))),64))],512))])])}var O=n(655),M=n(1124);const q=e=>((0,o.dD)("data-v-79094fd2"),e=e(),(0,o.Cn)(),e),x=q((()=>(0,o._)("span",{class:"material-icon"},"agriculture",-1)));function B(e,t,n,i,a,s){const r=(0,o.up)("ActivityButton");return(0,o.wg)(),(0,o.j4)(r,{onClick:e.openUseCarPage},{icon:(0,o.w5)((()=>[x])),title:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(e.$t.useCarTitle),1)])),description:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(e.$t.useCarDesc),1)])),_:1},8,["onClick"])}const Z={class:"icon"},W={class:"text"},G={class:"title"},F={class:"desciption"};function H(e,t,n,i,a,s){return(0,o.wg)(),(0,o.iD)("div",{class:(0,p.C_)({activity_card:!0,animated:e.animated}),onClick:t[0]||(t[0]=(...t)=>e.expand&&e.expand(...t))},[(0,o._)("div",Z,[(0,o.WI)(e.$slots,"icon",{},void 0,!0)]),(0,o._)("div",W,[(0,o._)("div",G,[(0,o.WI)(e.$slots,"title",{},void 0,!0)]),(0,o._)("div",F,[(0,o.WI)(e.$slots,"description",{},void 0,!0)])])],2)}var V=(0,o.aZ)({data(){return{animated:!1}},methods:{expand(){this.animated=!0}}});const X=(0,w.Z)(V,[["render",H],["__scopeId","data-v-6c855a7a"]]);var J=X,K=(0,o.aZ)({components:{ActivityButton:J},methods:{openUseCarPage(){this.$router.push({path:"usecar"})}}});const R=(0,w.Z)(K,[["render",B],["__scopeId","data-v-79094fd2"]]);var Y=R;const Q=e=>((0,o.dD)("data-v-9242d3aa"),e=e(),(0,o.Cn)(),e),ee=Q((()=>(0,o._)("span",{class:"material-icon"},"agriculture",-1)));function te(e,t,n,i,a,s){const r=(0,o.up)("ActivityButton");return(0,o.wg)(),(0,o.j4)(r,{onClick:e.openUseCarPage},{icon:(0,o.w5)((()=>[ee])),title:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(e.$t.leaveCarTitle),1)])),description:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(e.$t.leaveCarDesc),1)])),_:1},8,["onClick"])}var ne=(0,o.aZ)({components:{ActivityButton:J},methods:{openUseCarPage(){this.$router.push({path:"leavecar"})}}});const ie=(0,w.Z)(ne,[["render",te],["__scopeId","data-v-9242d3aa"]]);var ae=ie;const oe=e=>((0,o.dD)("data-v-a72cec0c"),e=e(),(0,o.Cn)(),e),se=oe((()=>(0,o._)("span",{class:"material-icon"},"admin_panel_settings",-1)));function re(e,t,n,i,a,s){const r=(0,o.up)("ActivityButton");return(0,o.wg)(),(0,o.j4)(r,{onClick:e.openUseCarPage},{icon:(0,o.w5)((()=>[se])),title:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(e.$t.adminTitle),1)])),description:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(e.$t.adminDesc),1)])),_:1},8,["onClick"])}var ce=(0,o.aZ)({components:{ActivityButton:J},methods:{openUseCarPage(){this.$router.push({path:"admin"})}}});const ue=(0,w.Z)(ce,[["render",re],["__scopeId","data-v-a72cec0c"]]);var le=ue;const de=e=>((0,o.dD)("data-v-59b9049c"),e=e(),(0,o.Cn)(),e),pe={id:"more_menu"},fe=["badge"],me=de((()=>(0,o._)("span",{class:"material-icon"},"more_vert",-1))),ge=[me],ve={key:0,id:"menu"},he={class:"text"},be={class:"text"},we={class:"text"},ye={class:"text"},ke={class:"version"};function Ce(e,t,n,i,a,s){const r=(0,o.Q2)("click-outside");return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",pe,[(0,o._)("div",{id:"menu_btn",onClick:t[0]||(t[0]=t=>e.showMenu=!e.showMenu),badge:e.updateAvailable||!e.notificationEn},ge,8,fe),e.showMenu?((0,o.wg)(),(0,o.iD)("div",ve,[e.notificationEn?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",{key:0,class:"option",onClick:t[1]||(t[1]=(...t)=>e.goToGrantNotifications&&e.goToGrantNotifications(...t)),badge:"true"},[(0,o._)("div",he,(0,p.zw)(e.$t.enableNotifications),1)])),e.installEv?((0,o.wg)(),(0,o.iD)("div",{key:1,class:"option",onClick:t[2]||(t[2]=(...t)=>e.installApp&&e.installApp(...t))},[(0,o._)("div",be,(0,p.zw)(e.$t.install),1)])):(0,o.kq)("",!0),e.updateAvailable?((0,o.wg)(),(0,o.iD)("div",{key:2,class:"option",onClick:t[3]||(t[3]=(...t)=>e.updateApp&&e.updateApp(...t)),badge:"true"},[(0,o._)("div",we,(0,p.zw)(e.$t.update),1)])):(0,o.kq)("",!0),(0,o._)("div",{class:"option",onClick:t[4]||(t[4]=(...t)=>e.logout&&e.logout(...t))},[(0,o._)("div",ye,(0,p.zw)(e.$t.logout),1)]),(0,o._)("div",ke,"v"+(0,p.zw)(e.version),1)])):(0,o.kq)("",!0)])),[[r,e.onClickOutside]])}var _e=n(6322),Te=(0,o.aZ)({data(){const e=!1;return{showMenu:e}},methods:{onClickOutside(){this.showMenu=!1},logout(){(0,_e.w7)((0,_e.v0)()),this.$router.push("login")},installApp(){this.installEv&&this.installEv.prompt()},updateApp(){this.updateAvailable&&window.location.reload()},goToGrantNotifications(){this.notificationEn||this.$router.push("/grantNotifications")}},computed:{installEv(){return this.$store.state.settings.installEvent},updateAvailable(){return this.$store.state.settings.updateAvailable},version(){return this.$store.state.settings.version},notificationEn(){return this.$store.state.settings.notificationsGranted}}});const Ae=(0,w.Z)(Te,[["render",Ce],["__scopeId","data-v-59b9049c"]]);var Ne=Ae,De=n(26);let Ue=class extends M.w3{};Ue=(0,O.gn)([(0,M.Ei)({components:{UseCarButton:Y,LeaveCarButton:ae,AdminButton:le,Settings:Ne},mounted(){u.h.dispatch(De.VX)},computed:{displayName(){return(0,r.oR)(u.J).state.firebase.user?.displayName},usingCar:()=>u.h.state.appState.user.usingCar,usecar(){return this.hasPermission("usecar")},headerString(){const e=u.h.getters.usedCar;return e?`Come va la ${e.model}?`:`Ciao${this.displayName?", "+this.displayName:""}!`},user:()=>u.h.state.appState.user},methods:{hasPermission(e){const t=u.h.state.appState.user;if(t)return null!=t.permissions[e]}}})],Ue);var Se=Ue;const Pe=(0,w.Z)(Se,[["render",I],["__scopeId","data-v-92b5dd60"]]);var Ee=Pe;const Le=[{path:"/",name:"Home",component:Ee,meta:{requireLogin:!0}},{path:"/login",name:"Login",component:()=>n.e(815).then(n.bind(n,8815))},{path:"/usecar",name:"Use car",component:()=>Promise.all([n.e(774),n.e(520),n.e(514)]).then(n.bind(n,4664)),meta:{transition:"expand-card",requireLogin:!0}},{path:"/leavecar",name:"Leave car",component:()=>Promise.all([n.e(774),n.e(520),n.e(757)]).then(n.bind(n,5248)),meta:{transition:"expand-card",requireLogin:!0}},{path:"/grantNotifications",name:"Grant notifications",component:()=>n.e(828).then(n.bind(n,1828)),meta:{transition:"slide",requireLogin:!0}},{path:"/admin",name:"Admin",component:()=>Promise.all([n.e(774),n.e(183)]).then(n.bind(n,6183)),meta:{transition:"expand-card",requireLogin:!0},children:[{path:"",component:()=>n.e(189).then(n.bind(n,4189)),meta:{transition:"expand-card",requireLogin:!0}},{path:"notifications",component:()=>n.e(954).then(n.bind(n,3954)),meta:{transition:"slide",requireLogin:!0}},{path:"notifications/newTopic",component:()=>n.e(376).then(n.bind(n,376)),meta:{transition:"slide",requireLogin:!0}}]}],ze=(0,D.p7)({history:(0,D.r5)(),routes:Le});ze.beforeEach(((e,t)=>{if(e.meta.requireLogin&&!u.h.state.firebase.user)return{path:"/login",query:{redirect:e.fullPath}}})),ze.afterEach(((e,t)=>{const n=e.path.split("/").length,i=t.path.split("/").length;"slide"===e.meta.transition?e.meta.transition=n<i?"slide-right":"slide-left":n===i||"slide-right"!==t.meta.transition&&"slide-left"!==t.meta.transition||(e.meta.transition=n<i?"slide-right":"slide-left")}));var $e=ze;const je={useCarTitle:"Utilizza parco auto",useCarDesc:"Registra gli spostamenti dei mezzi dell'associazione",chooseCar:"Scegli mezzo",causal:"Motivo dello spostamento",startOdometer:"Contachilometri alla partenza",useCarBtn:"Prendi",leaveCarTitle:"Lascia macchina",leaveCarDesc:"Chiudi e registra report spostamento",stopOdometer:"Contachilometri finale",declarations:"Qualcosa da dichiarare?",leaveCarBtn:"Lascia",adminTitle:"Pannello di amministrazione",adminDesc:"Gestione riservata al direttivo",csvDownloadDesc:"Non puoi ancora fare granché ma per il momento puoi scaricare il csv dei report",csvDownloadBtn:"Scarica CSV",noPermission:"Sembra che tu non abbia alcun permesso. Chiedi ad uno degli amministratori di configurare il tuo profilo o effettua il logout (menú in alto a destra)",loginDesc:"Per usare quest'app devi essere loggato. Per loggarti devi avere un account Google. Verrano presi dal tuo account solo nome ed indirizzo mail per la gestione dei permessi",loginTitle:"Protezione civile gruppo lucano Tricarico",loginWithGoogle:"Accedi con Google",logout:"Effettua logout",install:"Installa app",update:"Aggiorna app",notificationDesc:"Invia una notifica ad un gruppo di iscritti",goToAdminPush:"Invia notifica",sendNotification:"Invia",sendingNotification:"Inviando...",title:"Titolo",description:"Description",users:"Utenti",topic:"Topic",newTopic:"Crea topic",moreSecureDescription:"Per accedere a questa sezione è necessario un maggiore livello di sicurezza. Usa la tua impronta o la tua fede per accedere",moreSecureButton:"Verifica",checking:"Un secondo...",enableNotifications:"Attiva notifiche",grantedNotificationsDesc:"Le notifiche su quest'app sono attive ",enableNotificationsDesc:"Sembra tu non abbia attivato le notifiche (o potrebbero essere state disattivate in automatico). Quest'app usa le notifiche per avvisarti nel caso siano necessari interventi a cui puoi prendere parte. Apri le impostazioni del sito (probabilmente cliccando sul lucchetto vicino l'url qui in alto) e attiva le notifiche. <div><b>Dopo averlo fatto ricorda di aggiornare la pagina.</b></div> <div class='link'><a href='https://support.google.com/chrome/answer/3220216?hl=it&co=GENIE.Platform%3DAndroid#:~:text=Consentire%20o%20bloccare%20le%20notifiche%20di%20un%20sito%20specifico'>Questo link potrebbe esserti utile</a></div> ",backToHome:"Torna alla home"},Ie=(0,a.ri)(T).use(u.h,u.J).use($e).directive("click-outside",A),Oe=je;(0,i.KL)();Ie.config.globalProperties.$t=Oe,Ie.config.globalProperties.$store=u.h,Ie.mount("#app"),console.log("v0.3.2"),u.h.commit(l.b0,"0.3.2")},8907:function(e,t,n){n.d(t,{B:function(){return o}});var i=n(7663),a=n(5975);class o{constructor(){this.firebase=a.O.getApp(),this.db=(0,i.N8)()}async readData(e){try{const t=await(0,i.U2)((0,i.iU)((0,i.iH)(this.db),e));return t.exists()?t.val():(console.log("No data available"),null)}catch(t){return console.log(t),null}}async writeData(e,t){try{await(0,i.t8)((0,i.iH)(this.db,e),t)}catch(n){console.log(n)}}async listenForChanges(e,t){const n=(0,i.iH)(this.db,e);(0,i.jM)(n,(e=>{const n=e.val();t(n)}))}async updateValues(e){(0,i.Vx)((0,i.iH)(this.db),e)}}},5975:function(e,t,n){n.d(t,{O:function(){return s}});var i=n(2674),a=n(5503),o=n(6690);class s{constructor(){this.app=(0,a.ZF)(i.q),(0,o.v0)()}static getInstance(){return s.instance||(s.instance=new this),s.instance}static getApp(){return s.getInstance().app}}},7627:function(e,t,n){n.d(t,{J:function(){return c},h:function(){return u}});var i=n(8637),a=n(26),o=n(9065),s=n(8802),r=n(6849);const c=Symbol(),u=(0,i.MT)({modules:{firebase:o.Uu,appState:a.FH,messages:s.i,settings:r.aM}})},26:function(e,t,n){n.d(t,{VX:function(){return f},In:function(){return m},Vg:function(){return g},FH:function(){return p}});var i=n(8907),a=n(2674),o=n(1146),s=n(5503),r=n(7627),c=n(6849);class u{constructor(){this.db=new i.B}async saveNoticationToken(e,t){const n={[`/users/${t}/notificationTokens/${e}`]:!0};try{await this.db.updateValues(n)}catch(i){console.error(i)}}async getMessagingToken(){try{const e=(0,o.KL)(),t=await(0,o.LP)(e,{vapidKey:a.u});if(t)return t;console.log("No registration token available. Request permission to generate one.")}catch(e){e instanceof s.ZR?"messaging/permission-blocked"===e.code&&r.h.commit(c.DT):console.error("An error occurred while retrieving token. ",e)}}async saveUserInfo(e,t){const n={[`/users/${e}/info`]:t};try{await this.db.updateValues(n)}catch(i){console.error(i)}}}var l=n(8802);const d=new i.B,p={state:{cars:null,user:null,finger:!1},mutations:{updateCars(e,t){e.cars=t},updateUser(e,t){e.user={...t}},setFinger(e,t=!e.finger){e.finger=t}},actions:{listenCars:({commit:e})=>{d.listenForChanges("cars",(t=>e("updateCars",Object.values(t))))},listenUser:async({commit:e,rootState:t,dispatch:n})=>{n("initUser"),d.listenForChanges(`users/${t.firebase.user?.uid}`,(t=>e("updateUser",t)))},initUser:async({commit:e,rootState:t,dispatch:n})=>{const i=t.firebase.user;if(i){const a=i.uid,o=await d.readData(`users/${t.firebase.user?.uid}`);if(o){e("updateUser",o);const t=new u,s=await t.getMessagingToken();n(l.u),!s||o.notificationTokens&&Object.keys(o.notificationTokens).includes(s)||await t.saveNoticationToken(s,a),i.displayName&&i.email&&(!o.info||o.info.name!==i.displayName&&o.info.mail!==i.email)&&await t.saveUserInfo(a,{name:i.displayName,mail:i.email})}}}},getters:{carByPlate:e=>t=>e.cars?e.cars.find((e=>e.plate===t)):null,usedCar:e=>e.cars&&e.user?e.cars.find((t=>t.plate===e.user?.car)):null,permissions:e=>e.user?Object.keys(e.user.permissions):[],notificationTokens:e=>e.user&&e.user.notificationTokens?Object.keys(e.user.notificationTokens):[]}},f="listenCars",m="listenUser",g="setFinger"},9065:function(e,t,n){n.d(t,{LW:function(){return u},Uu:function(){return r}});var i=n(6690);function a(e,t){const n=t,i=(...[t,i])=>{n(t,i);const a=JSON.stringify(t[e]);localStorage.setItem(e,a)};return i}function o(e,t){const n=JSON.parse(localStorage.getItem(e));return n||t}var s=n(26);const r={state:{app:null,user:o("user",null)},mutations:{setApp(e,t){e.app=t},setUser:a("user",((e,t)=>{e.user=t}))},actions:{listenUserAuth:({commit:e,dispatch:t})=>{const n=(0,i.v0)();(0,i.Aj)(n,(n=>{n?(e(c,n),t(s.In)):e(c,null)}))}}},c="setUser",u="listenUserAuth"},8802:function(e,t,n){n.d(t,{i:function(){return a},u:function(){return o}});var i=n(1146);const a={state:{messages:[],lastMessage:null},mutations:{addMessage(e,t){e.messages.push(t)},updateLastMessage(e,t){e.lastMessage=t}},actions:{listenMessages:async({commit:e})=>{(0,i.ps)((0,i.KL)(),(t=>{console.log(t),e("addMessage",t),e("updateLastMessage",t)}))}},getters:{}},o="listenMessages"},6849:function(e,t,n){n.d(t,{DT:function(){return r},N4:function(){return o},aM:function(){return i},b0:function(){return s},wX:function(){return a}});const i={state:{installEvent:null,updateAvailable:!1,version:null,notificationsGranted:"granted"===Notification.permission},mutations:{setInstallEvent(e,t){e.installEvent=t},setUpdateAvailable(e,t=!0){e.updateAvailable=t},setVersion(e,t){e.version=t},setNotificationsGranted(e,t="granted"===Notification.permission){e.notificationsGranted=t}},actions:{}},a="setInstallEvent",o="setUpdateAvailable",s="setVersion",r="setNotificationsGranted"}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,o){if(!i){var s=1/0;for(l=0;l<e.length;l++){i=e[l][0],a=e[l][1],o=e[l][2];for(var r=!0,c=0;c<i.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(r=!1,o<s&&(s=o));if(r){e.splice(l--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[i,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{183:"86e76fbc",189:"145d1ff7",376:"734fbad0",514:"fbfe4413",520:"e4745604",757:"ea979f0d",774:"d9dedea9",815:"a34b12c9",828:"ec0603cf",954:"6f8b5046"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{183:"98d20519",189:"1ff5327c",376:"9905b316",514:"a5d32d39",757:"a5d32d39",815:"ea7b5157",828:"e2f6fdd4",954:"c804b26d"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="protezione-civile:";n.l=function(i,a,o,s){if(e[i])e[i].push(a);else{var r,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+o){r=d;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+o),r.src=i),e[i]=[a];var p=function(t,n){r.onerror=r.onload=null,clearTimeout(f);var a=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var s=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=r,a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var a=n[i],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){a=s[i],o=a.getAttribute("data-href");if(o===e||o===t)return a}},i=function(i){return new Promise((function(a,o){var s=n.miniCssF(i),r=n.p+s;if(t(s,r))return a();e(i,r,a,o)}))},a={143:0};n.f.miniCss=function(e,t){var n={183:1,189:1,376:1,514:1,757:1,815:1,828:1,954:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=i(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,i){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)i.push(a[2]);else{var o=new Promise((function(n,i){a=e[t]=[n,i]}));i.push(a[2]=o);var s=n.p+n.u(t),r=new Error,c=function(i){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",r.name="ChunkLoadError",r.type=o,r.request=s,a[1](r)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,s=i[0],r=i[1],c=i[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(c)var l=c(n)}for(t&&t(i);u<s.length;u++)o=s[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},i=self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4125)}));i=n.O(i)})();
//# sourceMappingURL=app.41263136.js.map