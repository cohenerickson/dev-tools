export default function () {
  window.consoleFunctions.countReset(...arguments);

  console._counters = console._counters || {};
  delete console._counters[arguments[0] || "default"];
};