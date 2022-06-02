/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
   if (x < 0 || (!(x % 10) && x !== 0)) {
     return false;
   }
   let pointerLeft = 0;
   const xStr = x.toString();
   let pointerRight = xStr.length - 1;
   while (pointerLeft < pointerRight) {
     if (xStr[pointerLeft++] !== xStr[pointerRight--]) {
       return false;
     }
   }
   return true;
};

console.log(isPalindrome(121));

console.log(isPalindrome(-121));

console.log(isPalindrome(12123333));

console.log(isPalindrome(12123330));