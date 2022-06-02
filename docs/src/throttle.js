function throttle(func, wait = 0) {
  let handler = null;
  let lastTime = +(new Date());
  return function(...args) {
    const currentTime = +(new Date());
    const remainTime = wait - (currentTime - lastTime);
    if (handler) {
      clearTimeout(handler);
    }
    if (remainTime <= 0) {
      lastTime = +(new Date());
      func.apply(this, args);
    } else {
      handler = setTimeout(() => {
        lastTime = +(new Date());
        func.apply(this, args);
      }, remainTime);
    }
  };
}

function say() {
  console.log('heiheihei');
}

const ssay = throttle(say, 3000);

const handler = setInterval(ssay, 1000);

setTimeout(() => {
  clearInterval(handler);
}, 10000);