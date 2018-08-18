'use strict';

// 1234.56 => "1,234.56" , 123456789 => "123,456,789"
// parseToMoney(1234.56) -> return "1,234.56"

function parseToMoney(num, interval) {
  var integer = String(num).split('.')[0];
  var float = String(num).split('.')[1];
  var strArr = [];
  while (integer.length) {
    strArr.unshift(integer.slice(-1 * interval));
    integer = integer.slice(0, integer.length - 3);
  }
  return [strArr.join(','), float || ''].join('.');
}

var res = parseToMoney(1234485748574.56, 3);
console.log('res -> ', res);