if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const u=s=>i(s,l),c={module:{uri:l},exports:o,require:u};e[l]=Promise.all(r.map((s=>c[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-f3ddde50"],(function(s){"use strict";s.setCacheNameDetails({prefix:"protezione-civile"}),self.skipWaiting(),s.precacheAndRoute([{url:"/css/555.8770f46a.css",revision:null},{url:"/css/831.8770f46a.css",revision:null},{url:"/css/861.ec8fb37e.css",revision:null},{url:"/css/app.d49e4b10.css",revision:null},{url:"/index.html",revision:"085b20145d8d6b2db6999e9eab22b77f"},{url:"/js/555.1368979d.js",revision:null},{url:"/js/660.16d230b4.js",revision:null},{url:"/js/714.e79495c2.js",revision:null},{url:"/js/831.687bc6a9.js",revision:null},{url:"/js/861.7dc95bd4.js",revision:null},{url:"/js/app.65e094a7.js",revision:null},{url:"/js/chunk-vendors.797a6571.js",revision:null},{url:"/manifest.json",revision:"3dd6e38d9576213b630cf7e2359477d5"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
