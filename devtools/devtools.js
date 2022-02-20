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
iframe.src = "https://dev-tools.cohenerickson.repl.co/console.html"
iframe.id = "devtools";
iframe.style.zIndex = "2147483647";
iframe.style.display = localStorage.getItem("debugger-view") || "none";
document.body.appendChild(iframe);

// global debugger object
window.debugger = window.debugger || {};
window.debugger.console = {
  functions: console
}

// error handling
document.getElementById("devtools").contentWindow.window.addEventListener("error", errorHandle, true);
window.addEventListener("error", errorHandle, true);

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