function deepClone(target, map = new Map()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return target;
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = deepClone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
};