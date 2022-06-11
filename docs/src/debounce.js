// 防抖函数

function debounce(func, wait, immediate) {

  let timeout;

  return function () {
      let context = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout); // timeout 不为null
      if (immediate) {
          let callNow = !timeout; // 第一次会立即执行，以后只有事件执行后才会再次触发
          timeout = setTimeout(function () {
              timeout = null;
          }, wait)
          if (callNow) {
              func.apply(context, args)
          }
      }
      else {
          timeout = setTimeout(function () {
              func.apply(context, args)
          }, wait);
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