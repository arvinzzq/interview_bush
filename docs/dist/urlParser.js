'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 尽可能全面正确的解析一个任意url的所有参数为Object。
/**
结果：
{
   user: 'anonymous',
   id: [123, 456], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
   city: '北京', // 中文
   enabled: true, // 未指定值的 key 约定值为 true
}
*/

var Params = function () {
  function Params() {
    _classCallCheck(this, Params);

    this.params = {};
  }

  _createClass(Params, [{
    key: 'add',
    value: function add(name) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      value = decodeURIComponent(value);
      if (!isNaN(+value)) {
        value = +value;
      }
      if (typeof this.params[name] === 'undefined') {
        this.params[name] = value;
      } else {
        this.params[name] instanceof Array ? this.params[name].push(value) : this.params[name] = [this.params[name], value];
      }
    }
  }]);

  return Params;
}();

function parseParam(url) {
  var query = url.split('?')[1];
  var params = query.split('&');
  var res = new Params();
  params.forEach(function (param) {
    res.add(param.split('=')[0], param.split('=')[1]);
  });
  return res.params;
}

var url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&en' + 'abled';
var params = parseParam(url);
console.log('params -> ', params);

// const regxUrl = /^\?\w.&$/; const matchStrs = url.match(regxUrl);
// console.log('matched strings -> ', matchStrs); 可以思考怎么用正则来解决