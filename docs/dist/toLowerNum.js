'use strict';

// // 将数字转换成中文大写的表示，处理到万级别，例如 12345 -> 一万二千三百四十五
// function toLowerNum(){

// }
// console.log(toLowerNum(12345)); // 输出 一万二千三百四十五
// console.log(toLowerNum(10001)); // 输出 一万零一
// console.log(toLowerNum(10011)); // 输出 一万零十一
// console.log(toLowerNum(10000)); // 输出 一万

var unitEnum = ['', '十', '百', '千', '万'];
var numEnum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

var charCheck = function charCheck(char) {
  return function (str) {
    return str.indexOf(char) !== -1;
  };
};
var zeroCheck = charCheck('零');
var unitOptimizing = function unitOptimizing(index, item) {
  return index !== 0 && item[0] === '一';
};

function toLowerNum(number) {
  var numStr = number.toString().split('');
  if (numStr.length > 5) {
    throw new Error('Only support unit of then thousand.');
  }
  var len = numStr.length;
  var num = numStr.map(function (item, index) {
    return numEnum[+item] + unitEnum[len - index - 1];
  });
  var res = '';
  num.forEach(function (item, index) {
    if (index === len - 1) {
      if (item === '零') {
        res += '';
      } else {
        res += item;
      }
    } else {
      switch (true) {
        case zeroCheck(item) && zeroCheck(num[index + 1]):
          if (unitOptimizing(index, item)) {
            res += item[1];
          } else {
            res += '';
          }
          break;
        case zeroCheck(item) && !zeroCheck(num[index + 1]):
          res += '零';
          break;
        default:
          if (unitOptimizing(index, item)) {
            res += item[1];
          } else {
            res += item;
          }
      }
    }
  });
  return res;
}

console.log(toLowerNum(12345)); // 输出 一万二千三百四十五
console.log(toLowerNum(10001)); // 输出 一万零一
console.log(toLowerNum(10011)); // 输出 一万零十一
console.log(toLowerNum(10000)); // 输出 一万