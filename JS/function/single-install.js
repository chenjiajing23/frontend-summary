// 单例模式 es5

let timeTool = (function() {
  let _instance = null;

  function init() {
    let now = new Date();
    this.name = "处理时间工具库";
    this.getISODate = () => {
      return now.toISOString();
    };
    this.getUtcDate = () => {
      return now.toUTCString();
    };
  }

  return function() {
    if (!_instance) {
      _instance = new init();
    }
    return _instance;
  };
})();

// es6

class SingletonApple {
  constructor(name, creator, products) {
    this.name = name;
    this.creator = creator;
    this.products = products;
  }
  static getInstance(name, creator, products) {
    if (!this.instance) {
      this.instance = new SingletonApple(name, creator, products);
    }
    return this.instance;
  }
}

let appleCompany = SingletonApple.getInstance("苹果公司", "乔布斯", [
  "iPhone",
  "iMac",
  "iPad",
  "iPod"
]);

let copyApple = SingletonApple.getInstance("苹果公司", "阿辉", [
  "iPhone",
  "iMac",
  "iPad",
  "iPod"
]);

console.log(appleCompany === copyApple); //true

class SingletonApple1 {
  constructor(name, creator, products) {
    //首次使用构造器实例
    if (!SingletonApple.instance) {
      this.name = name;
      this.creator = creator;
      this.products = products;
      //将this挂载到SingletonApple这个类的instance属性上
      SingletonApple.instance = this;
    }
    return SingletonApple.instance;
  }
}

let appleCompany1 = new SingletonApple1("苹果公司", "乔布斯", [
  "iPhone",
  "iMac",
  "iPad",
  "iPod"
]);
let copyApple2 = new SingletonApple1("苹果公司", "阿辉", [
  "iPhone",
  "iMac",
  "iPad",
  "iPod"
]);

console.log(appleCompany1 === copyApple2); //true
