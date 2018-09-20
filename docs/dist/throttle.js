'use strict';

function throttle(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var last_timer = null;
  var current_timer = null;
  return function () {
    current_timer = +new Date();
    if (!last_timer || last_timer + wait < current_timer) {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      func.apply(this, args);
      last_timer = current_timer;
    }
  };
}

function say() {
  console.log('heiheihei');
}

var ssay = throttle(say, 2000);

var handler = setInterval(ssay, 1000);

setTimeout(function () {
  clearInterval(handler);
  console.log('clear handler');
}, 10000);