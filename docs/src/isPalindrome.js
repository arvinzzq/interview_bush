// /**
//  * @param {number} x
//  * @return {boolean}
//  */
//  var isPalindrome = function(x) {
//    if (x < 0 || (!(x % 10) && x !== 0)) {
//      return false;
//    }
//    let pointerLeft = 0;
//    const xStr = x.toString();
//    let pointerRight = xStr.length - 1;
//    while (pointerLeft < pointerRight) {
//      if (xStr[pointerLeft++] !== xStr[pointerRight--]) {
//        return false;
//      }
//    }
//    return true;
// };

// console.log(isPalindrome(121));

// console.log(isPalindrome(-121));

// console.log(isPalindrome(12123333));

// console.log(isPalindrome(12123330));

var isPalindrome2 = function(s) {
  let pointerLeft = 0;
  let pointerRight = s.length - 1;
  const regex = /\W|_/g;
  while (pointerLeft < pointerRight) {
      while (s[pointerLeft].match(regex) && pointerLeft < pointerRight) {
          pointerLeft++;
      }
      while (s[pointerRight].match(regex) && pointerLeft < pointerRight) {
          pointerRight--;
      }
      if (s[pointerLeft++].toLowerCase() !== s[pointerRight--].toLowerCase()) {
          return false;
      }
  }
  return true;
};

// console.log(isPalindrome2("A man, a plan, a canal: Panama"));

// console.log(isPalindrome2("race a car"));

console.log(isPalindrome2("ab_a"));