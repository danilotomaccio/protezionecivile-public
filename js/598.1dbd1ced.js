"use strict";(self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[]).push([[598],{6214:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var n=a(6252);const s=(0,n.Uk)(" Prendi una macchina ");function o(t,e,a,o,i,r){const c=(0,n.up)("Activity");return(0,n.wg)(),(0,n.j4)(c,{sections:t.sections,submitText:`Lascia ${t.carModel?t.carModel:""}`,onOnSubmit:t.onSubmit},{default:(0,n.w5)((()=>[s])),_:1},8,["sections","submitText","onOnSubmit"])}var i=a(7412),r=a(9894),c=a(7627),u=a(1756),d=a(2792),p=(0,n.aZ)({components:{Activity:i.Z},mounted(){c.h.dispatch(u.VX)},data(){c.h.state.appState.cars;const t=[{id:"odometer",question:"Contachilometri finale",type:r.b.OPEN,mandatory:!0},{id:"declarations",question:"Qualcosa da dichiarare?",type:r.b.OPEN,mandatory:!1}];return{sections:t}},methods:{async onSubmit(t){c.h.state.appState.user.usingCar&&this.$router.push("/");const e=new d.Z,a=c.h.state.appState.user.car;a&&(await e.leaveCar(t.odometer,a,t.declarations),this.$router.push("/"))}},computed:{carModel:()=>c.h.getters.usedCar?c.h.getters.usedCar.model:null}}),h=a(3744);const l=(0,h.Z)(p,[["render",o]]);var m=l}}]);
//# sourceMappingURL=598.1dbd1ced.js.map