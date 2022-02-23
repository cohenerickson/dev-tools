const p=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}};p();function d(e){let n=document.getElementById("devtools").contentWindow.document,t=document.createElement("div");t.classList.add("message"),t.classList.add("error");let s=(e.message.join(" ")||"").split("<").join("&lt;").split(">").join("&gt;");s=g(s);let o=(e.init||"").split("<").join("&lt;").split(">").join("&gt;");o=o.split("/")[o.split("/").length-1],s=s.split(`
`).join("<br>").split(" ").join("&nbsp;"),s=s.split("span&nbsp;class='link'").join("span class='link'"),t.innerHTML=`<span class="right">${o}</span><span><img src="https://dev-tools.cohenerickson.repl.co/devtools/assets/icons/x.svg"/>${s||"undefined"}</span>`,n.getElementById("console-box").appendChild(t);let a=parseInt(n.getElementById("label-x").innerText);n.getElementById("label-x").innerHTML="<img src='https://dev-tools.cohenerickson.repl.co/devtools/assets/icons/x.svg'>"+(a+1)}function g(e){var n=/(https?:\/\/[^\s,\)]+)/g;return e.replace(n,function(t){return"<span class='link'>"+t.split("/")[t.split("/").length-1]+"</span>"})}function m(){if(window.consoleFunctions.assert(...arguments),!arguments[0]){let e=[...arguments];e.shift(),e=e.join(" "),e="Assertion failed: "+(e||"console.assert");let n=new Error;if(!n.stack)throw n;let s=n.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];d({message:[e],init:s})}}function r(e){let n=document.getElementById("devtools").contentWindow.document,t=document.createElement("div");t.classList.add("message");let s=(e.message.join(" ")||"").split("<").join("&lt;").split(">").join("&gt;");s=w(s);let o=(e.init||"").split("<").join("&lt;").split(">").join("&gt;");o=o.split("/")[o.split("/").length-1],s=s.split(`
`).join("<br>").split(" ").join("&nbsp;"),s=s.split("span&nbsp;class='link'").join("span class='link'"),t.innerHTML=`<span class="right">${o}</span><span>${s||"undefined"}</span>`,n.getElementById("console-box").appendChild(t);let a=parseInt(n.getElementById("label-i").innerText);n.getElementById("label-i").innerHTML="<img src='https://dev-tools.cohenerickson.repl.co/devtools/assets/icons/i.svg'>"+(a+1)}function w(e){var n=/(https?:\/\/[^\s,\)]+)/g;return e.replace(n,function(t){return"<span class='link'>"+t.split("/")[t.split("/").length-1]+"</span>"})}function f(){window.consoleFunctions.clear(...arguments);let e=document.getElementById("devtools").contentWindow.document;e.getElementById("console-box").innerHTML="";let n=new Error;if(!n.stack)throw n;let s=n.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];e.getElementById("msg-labels").innerHTML=" <span class='label-wrapper' id='label-x'><img src='./devtools/assets/icons/x.svg'>0</span> <span class='label-wrapper' id='label-!'><img src='./devtools/assets/icons/!.svg'>0</span> <span class='label-wrapper' id='label-i'><img src='https://dev-tools.cohenerickson.repl.co/devtools/assets/icons/i.svg'>0</span> ",r({message:["Console was cleared"],init:s})}function y(){window.consoleFunctions.count(...arguments),console._counters=console._counters||{};let e=console._counters[arguments[0]||"default"]||0;e++,console._counters[arguments[0]||"default"]=e;let n=new Error;if(!n.stack)throw n;let s=n.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];r({message:[`${arguments[0]||"default"}: ${e}`],init:s})}function h(){window.consoleFunctions.countReset(...arguments),console._counters=console._counters||{},delete console._counters[arguments[0]||"default"]}function k(e){let n=document.getElementById("devtools").contentWindow.document,t=document.createElement("div");t.classList.add("message"),t.classList.add("debug");let s=(e.message.join(" ")||"").split("<").join("&lt;").split(">").join("&gt;");s=v(s);let o=(e.init||"").split("<").join("&lt;").split(">").join("&gt;");o=o.split("/")[o.split("/").length-1],s=s.split(`
`).join("<br>").split(" ").join("&nbsp;"),s=s.split("span&nbsp;class='link'").join("span class='link'"),t.innerHTML=`<span class="right">${o}</span><span>${s||"undefined"}</span>`,n.getElementById("console-box").appendChild(t)}function v(e){var n=/(https?:\/\/[^\s,\)]+)/g;return e.replace(n,function(t){return"<span class='link'>"+t.split("/")[t.split("/").length-1]+"</span>"})}function b(){window.consoleFunctions.debug(...arguments);let e=new Error;if(!e.stack)throw e;let t=e.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];k({message:[...arguments],init:t})}function E(){window.consoleFunctions.dir(...arguments);let e=new Error;if(!e.stack)throw e;let t=e.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];r({message:["console.dir is not currently supported by JS DevTools."],init:t})}function I(){window.consoleFunctions.dirxml(...arguments);let e=new Error;if(!e.stack)throw e;let t=e.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];r({message:["console.dirxml is not currently supported by JS DevTools."],init:t})}function j(){window.consoleFunctions.error(...arguments);let e=new Error;if(!e.stack)throw e;let t=e.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];d({message:[...arguments],init:t})}function L(){window.consoleFunctions.group(...arguments);let e=new Error;if(!e.stack)throw e;let t=e.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];r({message:["console.group is not currently supported by JS DevTools."],init:t})}function B(){window.consoleFunctions.groupCollapsed(...arguments);let e=new Error;if(!e.stack)throw e;let t=e.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];r({message:["console.groupCollapsed is not currently supported by JS DevTools."],init:t})}function S(){window.consoleFunctions.groupEnd(...arguments);let e=new Error;if(!e.stack)throw e;let t=e.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];r({message:["console.groupEnd is not currently supported by JS DevTools."],init:t})}function x(){window.consoleFunctions.info(...arguments);let e=new Error;if(!e.stack)throw e;let t=e.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];r({message:[...arguments],init:t})}function F(){window.consoleFunctions.log(...arguments);let e=new Error;if(!e.stack)throw e;let t=e.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];r({message:[...arguments],init:t})}function T(){window.consoleFunctions.profile(...arguments)}function $(){window.consoleFunctions.profileEnd(...arguments)}function W(){window.consoleFunctions.table(...arguments);let e=new Error;if(!e.stack)throw e;let t=e.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];r({message:["console.table is not currently supported by JS DevTools."],init:t})}function C(){window.consoleFunctions.time(...arguments)}function H(){window.consoleFunctions.timeEnd(...arguments)}function M(){window.consoleFunctions.timeLog(...arguments)}function _(){window.consoleFunctions.timeStamp(...arguments)}function D(){window.consoleFunctions.trace(...arguments)}function R(e){let n=document.getElementById("devtools").contentWindow.document,t=document.createElement("div");t.classList.add("message"),t.classList.add("warning");let s=(e.message.join(" ")||"").split("<").join("&lt;").split(">").join("&gt;");s=J(s);let o=(e.init||"").split("<").join("&lt;").split(">").join("&gt;");o=o.split("/")[o.split("/").length-1],s=s.split(`
`).join("<br>").split(" ").join("&nbsp;"),s=s.split("span&nbsp;class='link'").join("span class='link'"),t.innerHTML=`<span class="right">${o}</span><span><img src='https://dev-tools.cohenerickson.repl.co/devtools/assets/icons/!.svg'>${s||"undefined"}</span>`,n.getElementById("console-box").appendChild(t);let a=parseInt(n.getElementById("label-!").innerText);n.getElementById("label-!").innerHTML="<img src='https://dev-tools.cohenerickson.repl.co/devtools/assets/icons/!.svg'>"+(a+1)}function J(e){var n=/(https?:\/\/[^\s,\)]+)/g;return e.replace(n,function(t){return"<span class='link'>"+t.split("/")[t.split("/").length-1]+"</span>"})}function K(){window.consoleFunctions.warn(...arguments);let e=new Error;if(!e.stack)throw e;let t=e.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];R({message:[...arguments],init:t})}window.consoleFunctions=window.console;let i={};i.assert=m;i.clear=f;i.count=y;i.countReset=h;i.debug=b;i.dir=E;i.dirxml=I;i.error=j;i.group=L;i.groupCollapsed=B;i.groupEnd=S;i.info=x;i.log=F;i.profile=T;i.profileEnd=$;i.table=W;i.time=C;i.timeEnd=H;i.timeLog=M;i.timeStamp=_;i.trace=D;i.warn=K;window.console=i;function u(e){let t=e.error.stack.toString().split(/\r\n|\n/)[2].split("at ")[1];d({message:[e.error.stack],init:t})}function A(e){let n=document.getElementById("devtools").contentWindow.document,t=document.createElement("div");t.classList.add("message");let s=(e.message.join(" ")||"").split("<").join("&lt;").split(">").join("&gt;");s=O(s);let o=(e.init||"").split("<").join("&lt;").split(">").join("&gt;");o=o.split("/")[o.split("/").length-1],s=s.split(`
`).join("<br>").split(" ").join("&nbsp;"),s=s.split("span&nbsp;class='link'").join("span class='link'"),t.innerHTML=`<span class="right">${o}</span><span>${s||"undefined"}</span>`,n.getElementById("console-box").appendChild(t)}function O(e){var n=/(https?:\/\/[^\s,\)]+)/g;return e.replace(n,function(t){return"<span class='link'>"+t.split("/")[t.split("/").length-1]+"</span>"})}let c=document.createElement("iframe");c.style.position="fixed";c.height="100%";c.width=500;c.style.right="0";c.style.top="0";c.frameBorder="0";c.id="devtools";c.style.zIndex="2147483647";c.style.display=localStorage.getItem("debugger-view")||"none";document.body.appendChild(c);fetch("devtools/console.html").then(e=>e.text()).then(e=>{document.getElementById("devtools").contentWindow.document.documentElement.innerHTML=e,document.getElementById("devtools").contentWindow.document.addEventListener("keydown",n=>{if(n.ctrlKey&&n.shiftKey&&n.key.toLowerCase()==="i"){n.preventDefault();let t=window.parent.document.getElementById("devtools");t.style.display==="none"?(t.style.display="block",localStorage.setItem("debugger-view","block"),document.body.width=window.innerWidth-t.width):(t.style.display="none",localStorage.setItem("debugger-view","none"),document.body.width=window.innerWidth)}n.shiftKey||n.key.toLowerCase()==="enter"&&window.parent.debugger.execute()}),window.parent.window.console.log("Loaded JS DevTools")});window.debugger=window.debugger||{};window.debugger.console={functions:i};document.getElementById("devtools").contentWindow.window.addEventListener("error",u,!0);window.addEventListener("error",u,!0);window.debugger.execute=()=>{let e=document.getElementById("devtools").contentWindow.document,n=e.getElementById("console-input").value;e.getElementById("console-input").value="",A({message:[n],init:""});let t=document.createElement("script");t.innerHTML=n,document.body.appendChild(t)};window.debugger.view=e=>{let n=document.getElementById("devtools").contentWindow.document;n.querySelectorAll(".nav-btn").forEach(t=>{t.classList.remove("active")}),n.getElementById("btn-"+e).classList.add("active"),n.querySelectorAll(".section").forEach(t=>{t.classList.remove("shown")}),n.getElementById("section-"+e).classList.add("shown")};window.debugger.mode=e=>{document.getElementById("devtools").contentWindow.document.getElementById(e+"-mode").classList.toggle("active")};window.debugger.close=()=>{let e=document.getElementById("devtools");e.style.display="none",localStorage.setItem("debugger-view","none"),document.body.width=window.innerWidth};document.addEventListener("keydown",e=>{if(e.ctrlKey&&e.shiftKey&&e.key.toLowerCase()==="i"){e.preventDefault();let n=document.getElementById("devtools");n.style.display==="none"?(n.style.display="block",localStorage.setItem("debugger-view","block"),document.body.width=window.innerWidth-n.width):(n.style.display="none",localStorage.setItem("debugger-view","none"),document.body.width=window.innerWidth)}});
