/*
 * @Description: new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
 * @Author: Chenjiajing
 * @Date: 2020-10-03 11:33:34
 * @LastEditors: Chenjiajing
 * @LastEditTime: 2020-10-03 12:33:36
 */
function Otaku(name, age) {
  this.name = name;
  this.age = age;
  this.habit = 'Games'
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYouName = function () {
  console.log('I am' + this.name)
}

const person = new Otaku('Kevin', '18');
console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYouName(); // I am Kevin

// 因为 new 是关键字，所以无法像 bind 函数一样直接覆盖，所以我们写一个函数，命名为 objectFactory，来模拟 new 的效果。用的时候是这样的：

function objectFactory() {
  let obj = Object.create(null);
  const Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  const res = Constructor.apply(obj, arguments);
  return typeof res === 'object' ? res || obj : obj;
}