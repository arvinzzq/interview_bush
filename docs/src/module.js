// CommonJS
// main.js
var counter = require('./lib').counter;
var incCounter = require('./lib').incCounter;

console.log(counter);  // 3
incCounter();
console.log(counter); // 3

// ES6
// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}
// main.js
import { counter, incCounter } from './lib';
console.log(counter); // 3
incCounter();
console.log(counter); // 4

// umd
(function webpackUniversalModuleDefinition(root, factory) {
  // CommonJS
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require('lodash'));
  // AMD
  else if (typeof define === 'function' && define.amd)
    define(['lodash'], factory);
  // Test Comment
  else if (typeof exports === 'object')
    exports['someLibName'] = factory(require('lodash'));
  // Test Comment
  else root['someLibName'] = factory(root['_']);
})(this, function (__WEBPACK_EXTERNAL_MODULE_1__) {
  // ...
});