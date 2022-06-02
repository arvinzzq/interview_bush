function deepClone(obj, map = new Map()) {
  if (typeof obj === 'object') {
    if (map.has(obj)) {
      return map.get(obj);
    }
    map.set(obj, obj);
    if (obj instanceof Array) {
      return new Array(...obj);
    } else {
      const clonedObj = {};
      for (let key in obj) {
        clonedObj[key] = deepClone(obj[key], map);
      }
      return clonedObj;
    }
  } else {
    return obj;
  }
}

const child = [{
  name: 'son',
  age: 1,
}];
child[0].child = child;

const obj = {
  a: 123,
  b: 233,
  type: {
    name: 'balalala',
    age: 3,
    child,
  }
};

obj.target = obj;

const res = deepClone(obj);

console.log('res: ', res);



const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';

const deepTag = [mapTag, setTag, arrayTag, objectTag];

function clone(target, map = new WeakMap()) {

  // 克隆原始类型
  if (!isObject(target)) {
      return target;
  }

  // 初始化
  const type = getType(target);
  let cloneTarget;
  if (deepTag.includes(type)) {
      cloneTarget = getInit(target, type);
  }

  // 防止循环引用
  if (map.get(target)) {
      return target;
  }
  map.set(target, cloneTarget);

  // 克隆set
  if (type === setTag) {
      target.forEach(value => {
          cloneTarget.add(clone(value));
      });
      return cloneTarget;
  }

  // 克隆map
  if (type === mapTag) {
      target.forEach((value, key) => {
          cloneTarget.set(key, clone(value));
      });
      return cloneTarget;
  }

  // 克隆对象和数组
  const keys = type === arrayTag ? undefined : Object.keys(target);
  forEach(keys || target, (value, key) => {
      if (keys) {
          key = value;
      }
      cloneTarget[key] = clone(target[key], map);
  });

  return cloneTarget;
}

function clone(target, map = new WeakMap()) {

  // 克隆原始类型
  if (!isObject(target)) {
      return target;
  }

  // 初始化
  const type = getType(target);
  let cloneTarget;
  if (deepTag.includes(type)) {
      cloneTarget = getInit(target, type);
  }

  // 防止循环引用
  if (map.get(target)) {
      return target;
  }
  map.set(target, cloneTarget);

  // 克隆set
  if (type === setTag) {
      target.forEach(value => {
          cloneTarget.add(clone(value));
      });
      return cloneTarget;
  }

  // 克隆map
  if (type === mapTag) {
      target.forEach((value, key) => {
          cloneTarget.set(key, clone(value));
      });
      return cloneTarget;
  }

  // 克隆对象和数组
  const keys = type === arrayTag ? undefined : Object.keys(target);
  forEach(keys || target, (value, key) => {
      if (keys) {
          key = value;
      }
      cloneTarget[key] = clone(target[key], map);
  });

  return cloneTarget;
}