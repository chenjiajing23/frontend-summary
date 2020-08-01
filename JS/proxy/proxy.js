// @ts-nocheck
const obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(target, propKey, receiver, `getting ${String(propKey)}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(target, propKey, value, receiver, `setting ${String(propKey)}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});

obj.count = 1
console.log(obj.count)
