'use strict';

// 缓存Promise的方法实现异步请求的共用
var p1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('heiheihei');
  }, 2000);
});

p1.then(function (data) {
  console.log('data => ', data);
});

p1.then(function (data) {
  console.log('data => ', data);
});

p1.then(function (data) {
  console.log('data => ', data);
});

console.log('###################');
var p2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve();
    console.log(1);
  }, 2000);
});
p2.then(function () {
  console.log(2);
});
console.log(3);

console.log('###################');
var p3 = new Promise(function (resolve) {
  resolve();
  console.log(1);
});
p3.then(function () {
  console.log(2);
});
console.log(3);