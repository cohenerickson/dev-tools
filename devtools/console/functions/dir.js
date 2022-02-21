import log from "../elements/log.js";

export default function () {
  window.consoleFunctions.dir(...arguments);

  let e = new Error();
  if (!e.stack) {
    throw e;
  }
  let stack = e.stack.toString().split(/\r\n|\n/);
  let init = stack[2].split("at ")[1];

  log({message:["console.dir is not currently supported by JS DevTools."], init: init});
};