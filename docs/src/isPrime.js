function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (!(num % i)) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2));

console.log(isPrime(9));

console.log(isPrime(11));

console.log(isPrime(1));

console.log(isPrime(-1));