import error from "../elements/error.js";

export default function (e) {
  let stack = e.error.stack.toString().split(/\r\n|\n/);
  let init = stack[2].split("at ")[1];
  error({message:[e.error.stack], init: init});
}