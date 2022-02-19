import assert from "./functions/assert.js";
import clear from "./functions/clear.js";
import count from "./functions/count.js";
import countReset from "./functions/countReset.js";
import debug from "./functions/debug.js";
import dir from "./functions/dir.js";
import dirxml from "./functions/dirxml.js";
import error from "./functions/error.js";
import exception from "./functions/exception.js";
import group from "./functions/group.js";
import groupCollapsed from "./functions/groupCollapsed.js";
import groupEnd from "./functions/groupEnd.js";
import info from "./functions/info.js";
import log from "./functions/log.js";
import profile from "./functions/profile.js";
import profileEnd from "./functions/profileEnd.js";
import table from "./functions/table.js";
import time from "./functions/time.js";
import timeEnd from "./functions/timeEnd.js";
import timeLog from "./functions/timeLog.js";
import timeStamp from "./functions/timeStamp.js";
import trace from "./functions/trace.js";
import warn from "./functions/warn.js";

window.consoleFunctions = window.console;

let console = {};

console.assert = assert;
console.clear = clear;
console.count = count;
console.countReset = countReset;
console.debug = debug;
console.dir = dir;
console.dirxml = dirxml;
console.error = error;
console.exception = exception;
console.group = group;
console.groupCollapsed = groupCollapsed;
console.groupEnd = groupEnd;
console.info = info;
console.log = log;
console.profile = profile;
console.profileEnd = profileEnd;
console.table = table;
console.time = time;
console.timeEnd = timeEnd;
console.timeLog = timeLog;
console.timeStamp = timeStamp;
console.trace = trace;
console.warn = warn;

window.console = console;

export default console;