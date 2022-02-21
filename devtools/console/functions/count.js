import log from "../elements/log.js";

export default function () {
  window.consoleFunctions.count(...arguments);

  console._counters = console._counters || {};
  let count = console._counters[arguments[0] || "default"] || 0;
  count++;
  console._counters[arguments[0] || "default"] = count;
  
  let e = new Error();
  if (!e.stack) {
    throw e;
  }
  let stack = e.stack.toString().split(/\r\n|\n/);
  let init = stack[2].split("at ")[1];

  log({message: [`${arguments[0] || "default"}: ${count}`], init: init});
};