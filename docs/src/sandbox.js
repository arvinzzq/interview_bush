// 
function evalute(code, sandbox) {
  sandbox = sandbox || Object.create(null);
  const fn = new Function('sandbox', `with(sandbox){return (${code})}`);
  const proxy = new Proxy(sandbox, {
    has(target, key) {
      // 让动态执行的代码认为属性已存在
      return true;
    }
  });
  return fn(proxy);
}
evalute('1+2') // 3
evalute('console.log(1)') // Cannot read property 'log' of undefined

// nodejs
const vm = require('vm');
const script = new vm.Script('m + n');
const sandbox = {
  m: 1,
  n: 2,
};
const context = new vm.createContext(sandbox);
script.runInContext(context);