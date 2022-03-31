"use strict";(self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[]).push([[266],{9714:function(i,o,e){var a=e(1702),n=e(6530).PROPER,t=e(1320),r=e(9670),c=e(7976),l=e(1340),p=e(7293),s=e(7066),m="toString",u=RegExp.prototype,d=u[m],b=a(s),P=p((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),v=n&&d.name!=m;(P||v)&&t(RegExp.prototype,m,(function(){var i=r(this),o=l(i.source),e=i.flags,a=l(void 0===e&&c(u,i)&&!("flags"in u)?b(i):e);return"/"+o+"/"+a}),{unsafe:!0})},9266:function(i,o,e){e.r(o),e.d(o,{default:function(){return y}});var a=e(6252),n=e(3577),t=function(i){return(0,a.dD)("data-v-1e4cb890"),i=i(),(0,a.Cn)(),i},r={key:0,id:"weather_station"},c={class:"material-icon icon"},l={class:"row"},p=t((function(){return(0,a._)("div",null,[(0,a._)("b",null,"Temperatura")],-1)})),s={class:"row"},m=t((function(){return(0,a._)("div",null,[(0,a._)("b",null,"Umidità")],-1)})),u={class:"row"},d=t((function(){return(0,a._)("div",null,[(0,a._)("b",null,"Pressione")],-1)})),b={class:"row"},P=t((function(){return(0,a._)("div",null,[(0,a._)("b",null,"Vento")],-1)})),v={class:"arrow_row"},z={class:"row"},g=t((function(){return(0,a._)("div",null,[(0,a._)("b",null,"Previsioni")],-1)}));function f(i,o,e,t,f,N){return i.weatherData?((0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("span",c,(0,n.zw)(i.icon),1),(0,a._)("div",l,[p,(0,a.Uk)(" "+(0,n.zw)(this.weatherData.temp)+" °C ",1)]),(0,a._)("div",s,[m,(0,a.Uk)(" "+(0,n.zw)(this.weatherData.hum)+"% ",1)]),(0,a._)("div",u,[d,(0,a.Uk)(" "+(0,n.zw)(this.weatherData.bar)+" Pa (in "+(0,n.zw)(this.weatherData.barTrend>0?"aumento":"diminuzione")+") ",1)]),(0,a._)("div",b,[P,(0,a._)("div",v,[(0,a._)("span",{class:"material-icon",style:(0,n.j5)("transform: rotate(".concat(this.weatherData.windDir,"deg); padding: 2px"))},"north",4),(0,a.Uk)(" "+(0,n.zw)(this.weatherData.windSpeed)+" km/h ",1)])]),(0,a._)("div",z,[g,(0,a.Uk)(" "+(0,n.zw)(i.forecast),1)])])):(0,a.kq)("",!0)}var N=e(8534),W=(e(5666),e(1539),e(9714),e(6699),e(2023),e(5446)),w={0:"Per lo più soleggiato e fresco",1:"Per lo più soleggiato con piccoli cambiamenti di temperatura",2:"Per lo più soleggiato per 12 ore con piccoli cambiamenti di temperatura",3:"Per lo più soleggiato dalle 12 alle 24 ore e fresco",4:"Per lo più soleggiato con piccoli cambiamenti di temperatura",5:"Parzialmente nuvoloso e fresco",6:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",7:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",8:"Per lo più soleggiato e caldo",9:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",10:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",11:"Per lo più soleggiato con piccoli cambiamenti di temperatura",12:"Nuvole in aumento e caldo. Possibili precipitazioni tra 24 e 48 ore",13:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",14:"Per lo più soleggiato con piccoli cambiamenti di temperatura",15:"Nuvole in aumento con piccoli cambiamenti di temperatura. Possibili precipitazioni entro 24 ore",16:"Per lo più soleggiato con piccoli cambiamenti di temperatura",17:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",18:"Per lo più soleggiato con piccoli cambiamenti di temperatura",19:"Nuvole in aumento con piccoli cambiamenti di temperatura. Possibili precipitazioni entro 12 ore",20:"Per lo più soleggiato con piccoli cambiamenti di temperatura",21:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",22:"Per lo più soleggiato con piccoli cambiamenti di temperatura",23:"Nuvole in aumento e caldo. Possibili precipitazioni entro 24 ore",24:"Per lo più soleggiato e caldo. Increasing winds",25:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",26:"Per lo più soleggiato con piccoli cambiamenti di temperatura",27:"Nuvole in aumento e caldo. Possibili precipitazioni entro 12 ore. Increasing winds",28:"Per lo più soleggiato e caldo. Increasing winds",29:"Nuvole in aumento e caldo",30:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",31:"Per lo più soleggiato con piccoli cambiamenti di temperatura",32:"Nuvole in aumento e caldo. Possibili precipitazioni entro 12 ore. Increasing winds",33:"Per lo più soleggiato e caldo. Increasing winds",34:"Nuvole in aumento e caldo",35:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",36:"Per lo più soleggiato con piccoli cambiamenti di temperatura",37:"Nuvole in aumento e caldo. Possibili precipitazioni entro 12 ore. Increasing winds",38:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",39:"Per lo più soleggiato con piccoli cambiamenti di temperatura",40:"Per lo più soleggiato e caldo. Possibili precipitazioni entro 48 ore",41:"Per lo più soleggiato e caldo",42:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",43:"Per lo più soleggiato con piccoli cambiamenti di temperatura",44:"Nuvole in aumento con piccoli cambiamenti di temperatura. Possibili precipitazioni tra 24 e 48 ore",45:"Nuvole in aumento con piccoli cambiamenti di temperatura",46:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",47:"Per lo più soleggiato con piccoli cambiamenti di temperatura",48:"Nuvole in aumento e caldo. Possibili precipitazioni tra 12 e 24 ore",49:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",50:"Per lo più soleggiato con piccoli cambiamenti di temperatura",51:"Nuvole in aumento e caldo. Possibili precipitazioni tra 12 e 24 ore. Ventoso",52:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",53:"Per lo più soleggiato con piccoli cambiamenti di temperatura",54:"Nuvole in aumento e caldo. Possibili precipitazioni tra 12 e 24 ore. Ventoso",55:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",56:"Per lo più soleggiato con piccoli cambiamenti di temperatura",57:"Nuvole in aumento e caldo. Possibili precipitazioni tra 6 e 12 ore",58:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",59:"Per lo più soleggiato con piccoli cambiamenti di temperatura",60:"Nuvole in aumento e caldo. Possibili precipitazioni tra 6 e 12 ore. Ventoso",61:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",62:"Per lo più soleggiato con piccoli cambiamenti di temperatura",63:"Nuvole in aumento e caldo. Possibili precipitazioni tra 12 e 24 ore. Ventoso",64:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",65:"Per lo più soleggiato con piccoli cambiamenti di temperatura",66:"Nuvole in aumento e caldo. Possibili precipitazioni entro 12 ore",67:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",68:"Per lo più soleggiato con piccoli cambiamenti di temperatura",69:"Nuvole in aumento e caldo. Precipitation likley",70:"Clearing e fresco. Fine delle precipitazioni entro 6 ore",71:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",72:"Clearing e fresco. Fine delle precipitazioni entro 6 ore",73:"Per lo più soleggiato con piccoli cambiamenti di temperatura",74:"Clearing e fresco. Fine delle precipitazioni entro 6 ore",75:"Parzialmente nuvoloso e fresco",76:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",77:"Per lo più soleggiato e fresco",78:"Clearing e fresco. Fine delle precipitazioni entro 6 ore",79:"Per lo più soleggiato con piccoli cambiamenti di temperatura",80:"Clearing e fresco. Fine delle precipitazioni entro 6 ore",81:"Per lo più soleggiato e fresco",82:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",83:"Per lo più soleggiato con piccoli cambiamenti di temperatura",84:"Nuvole in aumento con piccoli cambiamenti di temperatura. Possibili precipitazioni entro 24 ore",85:"Per lo più nuvoloso e fresco. Precipitazioni continue",86:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",87:"Per lo più soleggiato con piccoli cambiamenti di temperatura",88:"Per lo più nuvoloso e fresco. Precipitation likely",89:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Precipitazioni continue",90:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Precipitation likely",91:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",92:"Per lo più soleggiato con piccoli cambiamenti di temperatura",93:"Nuvole in aumento e fresco. Possibili precipitazioni e windy entro 6 ore",94:"Nuvole in aumento con piccoli cambiamenti di temperatura. Possibili precipitazioni e windy entro 6 ore",95:"Per lo più nuvoloso e fresco. Precipitazioni continue. Increasing winds",96:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",97:"Per lo più soleggiato con piccoli cambiamenti di temperatura",98:"Per lo più nuvoloso e fresco. Precipitation likely. Increasing winds",99:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Precipitazioni continue. Increasing winds",100:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Precipitation likely. Increasing winds",101:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",102:"Per lo più soleggiato con piccoli cambiamenti di temperatura",103:"Nuvole in aumento e fresco. Possibili precipitazioni tra 12 e 24 ore possibile cambio direzione vento a W NW o N",104:"Nuvole in aumento con piccoli cambiamenti di temperatura. Possibili precipitazioni tra 12 e 24 ore possibile cambio direzione vento a W NW o N",105:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",106:"Per lo più soleggiato con piccoli cambiamenti di temperatura",107:"Nuvole in aumento e fresco. Possibili precipitazioni entro 6 ore possibile cambio direzione vento a W NW o N",108:"Nuvole in aumento con piccoli cambiamenti di temperatura. Possibili precipitazioni entro 6 ore possibile cambio direzione vento a W NW o N",109:"Per lo più nuvoloso e fresco. Fine delle precipitazioni entro 12 ore possibile cambio direzione vento a W NW o N",110:"Per lo più nuvoloso e fresco. Possibile cambio direzione vento a W NW o N",111:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Fine delle precipitazioni entro 12 ore possibile cambio direzione vento a W NW o N",112:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Possibile cambio direzione vento a W NW o N",113:"Per lo più nuvoloso e fresco. Fine delle precipitazioni entro 12 ore possibile cambio direzione vento a W NW o N",114:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",115:"Per lo più soleggiato con piccoli cambiamenti di temperatura",116:"Per lo più nuvoloso e fresco. Possibili precipitazioni entro 24 ore possibile cambio direzione vento a W NW o N",117:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Fine delle precipitazioni entro 12 ore possibile cambio direzione vento a W NW o N",118:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Possibili precipitazioni entro 24 ore possibile cambio direzione vento a W NW o N",119:"Clearing fresco e windy. Fine delle precipitazioni entro 6 ore",120:"Clearing fresco e windy",121:"Per lo più nuvoloso e fresco. Fine delle precipitazioni entro 6 ore. Ventoso con possibile cambio direzione vento a W NW o N",122:"Per lo più nuvoloso e fresco. Ventoso con possibile cambio direzione vento a W NW o N",123:"Clearing fresco e windy",124:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",125:"Per lo più soleggiato con piccoli cambiamenti di temperatura",126:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Possibili precipitazioni entro 12 ore. Ventoso",127:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",128:"Per lo più soleggiato con piccoli cambiamenti di temperatura",129:"Nuvole in aumento e fresco. Possibili precipitazioni entro 12 ore forse a tratti pesanti. Ventoso",130:"Per lo più nuvoloso e fresco. Fine delle precipitazioni entro 6 ore. Ventoso",131:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",132:"Per lo più soleggiato con piccoli cambiamenti di temperatura",133:"Per lo più nuvoloso e fresco. Possibili precipitazioni entro 12 ore. Ventoso",134:"Per lo più nuvoloso e fresco. Fine delle precipitazioni tra 12 e 24 ore",135:"Per lo più nuvoloso e fresco",136:"Per lo più nuvoloso e fresco. Precipitazioni continue possible heavy at times. Ventoso",137:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",138:"Per lo più soleggiato con piccoli cambiamenti di temperatura",139:"Per lo più nuvoloso e fresco. Possibili precipitazioni tra 6 e 12 ore. Ventoso",140:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Precipitazioni continue forse a tratti pesanti. Ventoso",141:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",142:"Per lo più soleggiato con piccoli cambiamenti di temperatura",143:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Possibili precipitazioni tra 6 e 12 ore. Ventoso",144:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",145:"Per lo più soleggiato con piccoli cambiamenti di temperatura",146:"Nuvole in aumento con piccoli cambiamenti di temperatura. Possibili precipitazioni entro 12 ore forse a tratti pesanti. Ventoso",147:"Per lo più nuvoloso e fresco. Ventoso",148:"Per lo più nuvoloso e fresco. Precipitazioni continue forse a tratti pesanti. Ventoso",149:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",150:"Per lo più soleggiato con piccoli cambiamenti di temperatura",151:"Per lo più nuvoloso e fresco. Precipitation likely forse a tratti pesanti. Ventoso",152:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Precipitazioni continue forse a tratti pesanti. Ventoso",153:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Precipitation likely forse a tratti pesanti. Ventoso",154:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",155:"Per lo più soleggiato con piccoli cambiamenti di temperatura",156:"Nuvole in aumento e fresco. Possibili precipitazioni entro 6 ore. Ventoso",157:"Nuvole in aumento con piccoli cambiamenti di temperatura. Possibili precipitazioni entro 6 ore. Ventoso",158:"Nuvole in aumento e fresco. Precipitazioni continue. Ventoso con possibile cambio direzione vento a W NW o N",159:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",160:"Per lo più soleggiato con piccoli cambiamenti di temperatura",161:"Per lo più nuvoloso e fresco. Precipitation likely. Ventoso con possibile cambio direzione vento a W NW o N",162:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Precipitazioni continue. Ventoso con possibile cambio direzione vento a W NW o N",163:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Precipitation likely. Ventoso con possibile cambio direzione vento a W NW o N",164:"Nuvole in aumento e fresco. Possibili precipitazioni entro 6 ore. Ventoso con possibile cambio direzione vento a W NW o N",165:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",166:"Per lo più soleggiato con piccoli cambiamenti di temperatura",167:"Nuvole in aumento e fresco. Possibili precipitazioni entro 6 ore possibile cambio direzione vento a W NW o N",168:"Nuvole in aumento con piccoli cambiamenti di temperatura. Possibili precipitazioni entro 6 ore. Ventoso con possibile cambio direzione vento a W NW o N",169:"Nuvole in aumento con piccoli cambiamenti di temperatura. Possibili precipitazioni entro 6 ore possibile cambio direzione vento a W NW o N",170:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",171:"Per lo più soleggiato con piccoli cambiamenti di temperatura",172:"Nuvole in aumento e fresco. Possibili precipitazioni entro 6 ore. Ventoso con possibile cambio direzione vento a W NW o N",173:"Nuvole in aumento con piccoli cambiamenti di temperatura. Possibili precipitazioni entro 6 ore. Ventoso con possibile cambio direzione vento a W NW o N",174:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",175:"Per lo più soleggiato con piccoli cambiamenti di temperatura",176:"Nuvole in aumento e fresco. Possibili precipitazioni tra 12 e 24 ore. Ventoso con possibile cambio direzione vento a W NW o N",177:"Nuvole in aumento con piccoli cambiamenti di temperatura. Possibili precipitazioni tra 12 e 24 ore. Ventoso con possibile cambio direzione vento a W NW o N",178:"Per lo più nuvoloso e fresco. Precipitation forse a tratti pesanti e ending entro 12 ore. Ventoso con possibile cambio direzione vento a W NW o N",179:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",180:"Per lo più soleggiato con piccoli cambiamenti di temperatura",181:"Per lo più nuvoloso e fresco. Possibili precipitazioni tra 6 e 12 ore forse a tratti pesanti. Ventoso con possibile cambio direzione vento a W NW o N",182:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Fine delle precipitazioni entro 12 ore. Ventoso con possibile cambio direzione vento a W NW o N",183:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Possibili precipitazioni tra 6 e 12 ore forse a tratti pesanti. Ventoso con possibile cambio direzione vento a W NW o N",184:"Per lo più nuvoloso e fresco. Precipitazioni continue",185:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",186:"Per lo più soleggiato con piccoli cambiamenti di temperatura",187:"Per lo più nuvoloso e fresco. Precipitation likely. Ventoso con possibile cambio direzione vento a W NW o N",188:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Precipitazioni continue",189:"Per lo più nuvoloso con piccoli cambiamenti di temperatura. Precipitation likely",190:"Parzialmente nuvoloso con piccoli cambiamenti di temperatura",191:"Per lo più soleggiato con piccoli cambiamenti di temperatura",192:"Per lo più nuvoloso e fresco. Possibili precipitazioni entro 12 ore forse a tratti pesanti. Ventoso",193:"Per le previsioni sono necessarie almeno tre ore di dati recenti",194:"Per lo più soleggiato e fresco",195:"Per lo più soleggiato e fresco",196:"Per lo più soleggiato e fresco",200:"Unknown perecast rule"},V=(0,a.aZ)({data:function(){return{weatherData:{}}},mounted:function(){var i=this;return(0,N.Z)(regeneratorRuntime.mark((function o(){var e,a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,fetch("https://unruffled-liskov-633292.netlify.app/.netlify/functions/currentWeather",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return o.next=4,o.sent.json();case 4:e=o.sent,a=e.sensors[0].data[0],console.log(a),i.weatherData=W.H.fromRaw(a);case 8:case"end":return o.stop()}}),o)})))()},computed:{forecast:function(){return w[(this.weatherData.forecastCode||200).toString()]},icon:function(){var i=this.forecast;return i.includes("nuvoloso")?"wb_cloudy":i.includes("soleggiato")?"wb_sunny":i.includes("precipitazioni")?"flood":i.includes("vento")?"wind_power":this.weatherData.temp>22||i.includes("caldo")?"local_fire_department":"wb_sunny"}},methods:{}}),h=e(3744);const _=(0,h.Z)(V,[["render",f],["__scopeId","data-v-1e4cb890"]]);var y=_}}]);
//# sourceMappingURL=266-legacy.21dad70b.js.map