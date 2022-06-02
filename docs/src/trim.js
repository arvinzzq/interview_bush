// 实现一个trim方法
String.prototype.trim2 = function () {
  return this.replace(/^\s*/, '').replace(/\s*$/, '');
}

console.log('res1: ', '  sssss   '.trim2());

console.log('res2: ', 'sssss   '.trim2());

console.log('res3: ', ' sssss'.trim2());
