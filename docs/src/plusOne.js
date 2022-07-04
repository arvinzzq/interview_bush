function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) {
        digits = [1].concat(digits);
      }
    } else {
      digits[i]++;
      break; 
    }
  }
  return digits;
}

console.log(plusOne([1,2,3]));

console.log(plusOne([4,3,2,1]));

console.log(plusOne([0]));

console.log(plusOne([9]));