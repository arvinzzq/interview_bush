'use strict';

function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var handler = null;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (handler) {
      clearTimeout(handler);
    }
    handler = setTimeout(function () {
      func.apply(_this, args);
    }, wait);
  };
}

function say() {
  console.log('heiheihei');
}

var ssay = debounce(say, 1000);

var handler = setInterval(ssay, 1500);
setTimeout(function () {
  clearInterval(handler);
  console.log('clear handler');
}, 10000);