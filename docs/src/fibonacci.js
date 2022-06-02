
const fib = function (n) {
  const cacheValueMap = {};
  const fibInner = function(n) {
    if (cacheValueMap[n] !== undefined) {
      return cacheValueMap[n];
    }
    if (n < 2) {
      if (cacheValueMap[n] === undefined) {
        cacheValueMap[n] = n;
      }
      return n;
    }
    const val = fibInner(n - 1) + fibInner(n - 2);
    cacheValueMap[n] = val;
    return val;
  };
  return fibInner(n);
};

const fibNormal = function (n) {
  if (n < 2) {
    return n;
  }
  return fibNormal(n - 1) + fibNormal(n - 2);
}

console.time();
console.log(fib(2));

console.log(fib(3));

console.log(fib(4));

console.log(fib(100));
console.timeEnd();

// console.time();
// console.log(fibNormal(2));

// console.log(fibNormal(3));

// console.log(fibNormal(4));

// console.log(fibNormal(100));
// console.timeEnd();
