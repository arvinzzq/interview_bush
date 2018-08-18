'use strict';

// 实现一个最简单的模板引擎。

var template = '我是{{name}}，年龄{{age}}，性别{{sex}}';

function render(template, data) {
  var regTpl = /\{\{\s*(?=\w+)\s*\}\}/gi;
  var valArr = template.match(regTpl).map(function (item) {
    return item.replace(/\}\}|\{\{/g, '');
  });
  valArr.forEach(function (val) {
    template = template.replace('{{' + val + '}}', data[val]);
  });
  return template;
}

var res = render(template, {
  name: '钟志强',
  age: 3
});

console.log('res -> ', res);