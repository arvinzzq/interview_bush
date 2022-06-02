function promsieCache(func) {
  let cacheMap = new Map();
  return function (...args) {
    const cachedKey = JSON.stringify(...args);
    if (!cacheMap.get(cachedKey)) {
      const cachedValue = Promise.resolve(func.apply(this, args)).catch(() => {
        cacheMap.set(cachedKey, null);
      });
      cacheMap.set(cachedKey, cachedValue);
    }
    return cacheMap.get(cachedKey);
  }
}

