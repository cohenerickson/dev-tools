import debug from "../elements/debug.js";

export default function () {
  window.consoleFunctions.debug(...arguments);

  let e = new Error();
  if (!e.stack) {
    throw e;
  }
  let stack = e.stack.toString().split(/\r\n|\n/);
  let init = stack[2].split("at ")[1];

  debug({message:[...arguments], init: init});
};