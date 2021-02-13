// defineProperty
'use strict';

let obj = {};

Object.defineProperty(obj, Symbol.for('num'), {
  value: 5555,
  configurable: false,
  enumerable: true,
  writable: true,
});

obj[Symbol.for('num')] = 9999;
console.log(obj, Object.keys(obj), obj[Symbol.for('num')]);