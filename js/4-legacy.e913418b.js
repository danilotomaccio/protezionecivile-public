"use strict";(self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[]).push([[4],{8184:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});n(2222);var r=n(6252),a=n(3577);function o(t,e,n,o,i,u){var s=(0,r.up)("Activity");return(0,r.wg)(),(0,r.j4)(s,{sections:t.sections,submitText:"".concat(t.$t.leaveCarBtn," ").concat(t.carModel?t.carModel:""),onOnSubmit:t.onSubmit},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(t.$t.leaveCarTitle),1)]})),_:1},8,["sections","submitText","onOnSubmit"])}var i=n(8534),u=(n(5666),n(5883)),s=n(9894),c=n(7627),d=n(26),l=n(2792),p=(0,r.aZ)({components:{Activity:u.Z},mounted:function(){c.h.dispatch(d.VX)},data:function(){c.h.state.appState.cars;var t=[{id:"odometer",question:this.$t.stopOdometer,type:s.b.OPEN,mandatory:!0,inputMode:"numeric"},{id:"declarations",question:this.$t.declarations,type:s.b.OPEN,mandatory:!1}];return{sections:t}},methods:{onSubmit:function(t){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(null!==(r=c.h.state.appState.user)&&void 0!==r&&r.usingCar&&e.$router.push("/"),o=new l.Z,i=null===(a=c.h.state.appState.user)||void 0===a?void 0:a.car,!i){n.next=7;break}return n.next=6,o.leaveCar(t.odometer,i,t.declarations);case 6:e.$router.push("/");case 7:case"end":return n.stop()}}),n)})))()}},computed:{carModel:function(){return c.h.getters.usedCar?c.h.getters.usedCar.model:null}}}),m=n(3744);const h=(0,m.Z)(p,[["render",o]]);var v=h}}]);
//# sourceMappingURL=4-legacy.e913418b.js.map