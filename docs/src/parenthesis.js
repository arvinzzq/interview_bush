// 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

// 任何左括号 ( 必须有相应的右括号 )。
// 任何右括号 ) 必须有相应的左括号 ( 。
// 左括号 ( 必须在对应的右括号之前 )。
// * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
// 一个空字符串也被视为有效字符串。

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let len = s.length;
  const stack1 = [];
  const stack2 = [];
  for (let i = 0; i < len; i++) {
    if (!['(', ')', '*'].includes(s[i])) {
      return false;
    }
    if (s[i] === '(') {
      stack1.push(i);
    } else if (s[i] === '*') {
      stack2.push(i);
    } else if (s[i] === ')') {
      if (!stack1.length && !stack2.length) {
        return false;
      }
      stack1.length ? stack1.pop() : stack2.pop();
    }
  }
  if (stack1.length > stack2.length) {
    return false;
  }
  while (stack1.length) {
    if (stack1.pop() > stack2.pop()) {
      return false;
    }
  }
  return true;
};

// console.log(checkValidString("(*))"));

// console.log(checkValidString("(*)"));

// console.log(checkValidString("()"));

// console.log(checkValidString("((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"));

// console.log(checkValidString("(((((()*)(*)*))())())(()())())))((**)))))(()())()"));

console.log(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"));