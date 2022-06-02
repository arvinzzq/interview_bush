function countPrimes(n) {
  const primeFlags = new Array(n).fill(true);
  if (n < 2) {
    return 0;
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (primeFlags[i]) {
      count++
      for (let j = i * i; j < n; j+=i) {
        primeFlags[j] = false;
      }
    }
  }
  return count;
}

console.log(countPrimes(10));

console.log(countPrimes(0));

console.log(countPrimes(1));

console.log(countPrimes(4));