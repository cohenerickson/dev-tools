import error from "../elements/error.js";

export default function () {
  window.consoleFunctions.assert(...arguments);
  if(!arguments[0]) {
    let message = [...arguments];
    message.shift();
    message = message.join(" ");
    message = "Assertion failed: " + (message || "console.assert");

    let e = new Error();
    if (!e.stack) {
      throw e;
    }
    let stack = e.stack.toString().split(/\r\n|\n/);

    let init = stack[2].split("at ")[1];

    error({message: [message], init: init});
  }
};