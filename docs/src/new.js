function objectFactory () {
  const constructorTmp = Array.prototype.shift.call(arguments);
  const obj = Object.create(null);
  obj.__proto__ = constructorTmp.prototype;
  const res = constructorTmp.apply(obj, arguments);
  return typeof res === 'object' ? res : obj;
}

function func (name) {
  this.name = name;
  this.age = 233;
}

const obj = objectFactory(func, '嘿嘿嘿');

console.log('obj: ', obj);