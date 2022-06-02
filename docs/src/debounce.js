function debounce(func, wait = 0) {
  let handler = null;
  return function(...args) {
    // 首次调用直接执行
    if (handler === null) {
      func.apply(this, args);
      handler = setTimeout(() => clearTimeout(handler), wait);
    } else {
      if (handler) {
        clearTimeout(handler);
      }
      handler = setTimeout(() => func.apply(this, args), wait);
    }
  }
}

function say() {
  console.log('heiheihei');
}

const ssay = debounce(say, 1000, true);

const handler = setInterval(ssay, 1500);
setTimeout(() => {
  clearInterval(handler);
  console.log('clear handler');
}, 10000);