/**
 * 题：密码长度 6-12 位，由数字、小写字符、大写字母组成，但是至少包括两种字符。
 * */

// 解法-1
let PasswordRegex = /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9A-Za-z]{6,12}$/;

// 解法-2
let PasswordRegex2 = /(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9A-Za-z]{6,12}$/;

console.log(PasswordRegex.test("123456d"));
console.log(PasswordRegex2.test("123456d1234"));
