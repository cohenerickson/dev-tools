import error from "../elements/error.js";

export default function () {
  let output = window.consoleFunctions.error(...arguments);

  let e = new Error();
  if (!e.stack) {
    throw e;
  }
  let stack = e.stack.toString().split(/\r\n|\n/);

  let init = stack[2].split("at ")[1];

  error({message:[...arguments], init: init});
};