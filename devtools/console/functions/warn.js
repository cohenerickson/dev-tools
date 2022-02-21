import warn from "../elements/warn.js";

export default function () {
  let output = window.consoleFunctions.warn(...arguments);

  let e = new Error();
  if (!e.stack) {
    throw e;
  }
  let stack = e.stack.toString().split(/\r\n|\n/);
  let init = stack[2].split("at ")[1];

  warn({message:[...arguments], init: init});
};