if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let c={};const o=s=>i(s,n),u={module:{uri:n},exports:c,require:o};e[n]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(l(...s),c)))}}define(["./workbox-f3ddde50"],(function(s){"use strict";s.setCacheNameDetails({prefix:"protezione-civile"}),self.skipWaiting(),s.precacheAndRoute([{url:"/css/349.11b2c725.css",revision:null},{url:"/css/550.11b2c725.css",revision:null},{url:"/css/811.ccca0348.css",revision:null},{url:"/css/812.878c221e.css",revision:null},{url:"/css/app.42bc590f.css",revision:null},{url:"/index.html",revision:"e4ba29fcbfc23d53a6f2ed016b8a938e"},{url:"/js/349.5ff569aa.js",revision:null},{url:"/js/550.ba91fc32.js",revision:null},{url:"/js/747.7ed02ddc.js",revision:null},{url:"/js/811.96cb84b9.js",revision:null},{url:"/js/812.9d83d94a.js",revision:null},{url:"/js/app.9c768ab0.js",revision:null},{url:"/js/chunk-vendors.797a6571.js",revision:null},{url:"/manifest.json",revision:"3dd6e38d9576213b630cf7e2359477d5"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
