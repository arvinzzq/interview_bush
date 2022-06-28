// 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
// curry 的这种用途可以理解为：参数复用。本质上是降低通用性，提高适用性。

function add(a, b, c) {
  return a + b + c;
}

// 执行 add 函数，一次传入两个参数即可
add(1, 2) // 3

function curry(func) {
  let args = [];
  function curryInner() {
    args = args.concat([...arguments]);
    if (args.length < func.length) {
      return curryInner;
    }
    return func.apply(this, args);
  }
  return curryInner;
}

// 假设有一个 curry 函数可以做到柯里化
var addCurry = curry(add);
const res = addCurry(1)(2)(6) // 3
console.log('res: ', res);