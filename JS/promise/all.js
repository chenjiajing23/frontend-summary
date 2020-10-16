/*
 * @Description: 手写promise.all
 * @Author: Chenjiajing
 * @Date: 2020-10-17 00:10:17
 * @LastEditors: Chenjiajing
 * @LastEditTime: 2020-10-17 00:10:28
 */

function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('arguments must be an array'));
    }
    let resolvedCounter = 0;
    let promiseNum = promises.length;
    let resolvedValues = new Array(promiseNum);
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(function (value) {
        resolvedCounter++
        resolvedValues[i] = value
        if (resolvedCounter == promiseNum) {
          return resolve(resolvedValues)
        }
      }, function (reason) {
        return reject(reason)
      })

    }
  })
}

const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.reject(3)

// promiseAll(1).then((res => console.log(res))).catch(err => console.log(err))
promiseAll([p1, p2, p3]).then(res => console.log(res)).catch(err => console.log(err))