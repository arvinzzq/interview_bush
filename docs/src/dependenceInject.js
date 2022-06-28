// 实现一个依赖注入
/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
const DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  // Your code goes here
}

// 要注入的依赖
const deps = {
  'dep1': function () { return 'this is dep1'; },
  'dep2': function () { return 'this is dep2'; },
  'dep3': function () { return 'this is dep3'; },
  'dep4': function () { return 'this is dep4'; }
};

// 新建一个“注射器”
const di = new DI(deps);

// 注射
const myFunc = di.inject(function (dep3, dep1, dep2) {
  return [dep1(), dep2(), dep3()].join(' -> ');
});

// 测试
Test.assertEquals(myFunc(), 'this is dep1 -> this is dep2 -> this is dep3');

DI.prototype.inject = function (func) {

  let deps = /^[^(]+\(([^)]+)/.exec(func.toString());

  //  构建参数绑定数组
  deps = deps ? deps[1]
    .split(/\s?,\s?/)
    .map(function (dep) {
      return this.dependency[dep];
    }.bind(this)) : [];

  // 通过apply将依赖参数传入函数
  return function () {
    return func.apply(this, deps);
  };

}