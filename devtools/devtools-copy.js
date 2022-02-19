import console from "./console/console.js";
import errorHandle from "./console/helpers/errors.js";
import message from "./console/elements/message.js";

// create frame
let iframe = document.createElement("iframe");
iframe.style.position = "fixed";
iframe.height = "100%";
iframe.width = 500;
iframe.style.right = "0";
iframe.style.top = "0"
iframe.frameBorder = "0";
iframe.id = "devtools";
iframe.style.zIndex = "2147483647";
iframe.style.display = localStorage.getItem("debugger-view") || "none";
document.body.appendChild(iframe);
document.getElementById("devtools").contentWindow.document.documentElement.innerHTML = '<link rel="stylesheet" href="https://dev-tools.cohenerickson.repl.co/style.css"/><div id="navigation"><span id="btns"><span onclick="window.parent.debugger.mode(\'elements\')" class="select-wrapper"><img src="https://dev-tools.cohenerickson.repl.co/assets/icons/elements.svg" id="elements-mode"></span><span onclick="window.parent.debugger.mode(\'view\')" class="select-wrapper"><img src="https://dev-tools.cohenerickson.repl.co/assets/icons/devices.svg" id="view-mode"></span></span><span class="vertical-line"></span><span id="tabs"><span class="nav-btn active" id="btn-console" onclick="window.parent.debugger.view(\'console\')">Console</span><span class="nav-btn"  id="btn-elements" onclick="window.parent.debugger.view(\'elements\')">Elements</span></span><span class="right"><span id="msg-labels"><span class="label-wrapper" id="label-x"><img src="https://dev-tools.cohenerickson.repl.co/assets/icons/x.svg">0</span><span class="label-wrapper" id="label-!"><img src="https://dev-tools.cohenerickson.repl.co/assets/icons/!.svg">0</span><span class="label-wrapper" id="label-i"><img src="https://dev-tools.cohenerickson.repl.co/assets/icons/i.svg">0</span></span><span class="vertical-line"></span><span id="btns"><span onclick="window.parent.debugger.option(\'settings\')" class="select-wrapper"><img src="https://dev-tools.cohenerickson.repl.co/assets/icons/settings.svg" id="settings-option"></span><span onclick="window.parent.debugger.option(\'more\')" class="select-wrapper"><img style="width: 4px;" src="https://dev-tools.cohenerickson.repl.co/assets/icons/more.svg" id="more-option"></span><span onclick="window.parent.debugger.close()" class="select-wrapper"><img style="width: 9px;" src="https://dev-tools.cohenerickson.repl.co/assets/icons/close.svg" id="debugger-close"></span></span></span></div><div id="sections"><div id="section-console" class="section shown"><div id="console-box"></div><img id="carret" src="https://dev-tools.cohenerickson.repl.co/assets/icons/carret.svg"><textarea id="console-input"></textarea></div><div id="section-elements" class="section">Elements</div></div><script>document.addEventListener("keydown", (e) => {if (e.ctrlKey) {if (e.shiftKey) {if (e.key.toLowerCase() === "i") {e.preventDefault();let w = window.parent.document.getElementById("devtools");if(w.style.display === "none") {w.style.display = "block";localStorage.setItem("debugger-view", "block");document.body.width = window.innerWidth-w.width;} else {w.style.display = "none";localStorage.setItem("debugger-view", "none");document.body.width = window.innerWidth;}}}}if(!e.shiftKey) {if(e.key.toLowerCase() === "enter") {window.parent.debugger.execute();}}});window.parent.window.console.log("Loaded JS DevTools");</script>';
document.getElementById("devtools").contentWindow.document.addEventListener("keydown", (e) => {if (e.ctrlKey) {if (e.shiftKey) {if (e.key.toLowerCase() === "i") {e.preventDefault();let w = window.parent.document.getElementById("devtools");if(w.style.display === "none") {w.style.display = "block";localStorage.setItem("debugger-view", "block");document.body.width = window.innerWidth-w.width;} else {w.style.display = "none";localStorage.setItem("debugger-view", "none");document.body.width = window.innerWidth;}}}}if(!e.shiftKey) {if(e.key.toLowerCase() === "enter") {window.parent.debugger.execute();}}});window.parent.window.console.log("Loaded JS DevTools");

// global debugger object
window.debugger = window.debugger || {};
window.debugger.console = {
  functions: console
}

// error handling
document.getElementById("devtools").contentWindow.window.addEventListener("error", errorHandle, true);
window.addEventListener("error", errorHandle, true);

// debugger tab change
window.debugger.view = (id) => {
  let window = document.getElementById("devtools").contentWindow.document;
  // change active class
  window.querySelectorAll(".nav-btn").forEach((element) => {
    element.classList.remove("active");
  });
  window.getElementById("btn-"+id).classList.add("active");
  // change active content
  window.querySelectorAll(".section").forEach((element) => {
    element.classList.remove("shown");
  });
  window.getElementById("section-"+id).classList.add("shown");
}

// debugger mode
window.debugger.mode = (mode) => {
  let window = document.getElementById("devtools").contentWindow.document;
  window.getElementById(mode+"-mode").classList.toggle("active");
}

// close debugger
window.debugger.close = () => {
  let w = document.getElementById("devtools");
  w.style.display = "none";
  localStorage.setItem("debugger-view", "none");
  document.body.width = window.innerWidth;
}

// debugger execute
window.debugger.execute = () => {
  let window = document.getElementById("devtools").contentWindow.document;
  let script = window.getElementById("console-input").value;
  window.getElementById("console-input").value = "";
  message({message: [script], init:""});
  let element = document.createElement("script");
  element.innerHTML = script;
  document.body.appendChild(element);
}

// toggle debugger
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey) {
    if (e.shiftKey) {
      if (e.key.toLowerCase() === "i") {
        e.preventDefault();
        let w = document.getElementById("devtools");
        if(w.style.display === "none") {
          w.style.display = "block";
          localStorage.setItem("debugger-view", "block");
          document.body.width = window.innerWidth-w.width;
        } else {
          w.style.display = "none";
          localStorage.setItem("debugger-view", "none");
          document.body.width = window.innerWidth;
        }
      }
    }
  }
});