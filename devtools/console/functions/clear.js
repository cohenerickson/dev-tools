import log from "../elements/log.js";

export default function () {
  window.consoleFunctions.clear(...arguments);

  let w = document.getElementById("devtools").contentWindow.document;
  w.getElementById("console-box").innerHTML = "";

  let e = new Error();
  if (!e.stack) {
    throw e;
  }
  let stack = e.stack.toString().split(/\r\n|\n/);
  let init = stack[2].split("at ")[1];

  w.getElementById("msg-labels").innerHTML = " <span class='label-wrapper' id='label-x'><img src='./devtools/assets/icons/x.svg'>0</span> <span class='label-wrapper' id='label-!'><img src='./devtools/assets/icons/!.svg'>0</span> <span class='label-wrapper' id='label-i'><img src='https://dev-tools.cohenerickson.repl.co/devtools/assets/icons/i.svg'>0</span> "

  log({message: ["Console was cleared"], init: init})
};