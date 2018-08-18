'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var noop = function noop() {};
var operationMap = {
  clockwise: 1,
  anticlockwise: -1
};
/**
 * 定时器，顺时针-逆时针 => 验证码发送
 */

var Timer = function () {
  function Timer(options) {
    _classCallCheck(this, Timer);

    this.options = options;
    this.handler = 0;
    this.count = options.start;
  }

  _createClass(Timer, [{
    key: 'start',
    value: function start() {
      var _this = this;

      var _options = this.options,
          _options$callback = _options.callback,
          callback = _options$callback === undefined ? noop : _options$callback,
          start = _options.start,
          _options$step = _options.step,
          step = _options$step === undefined ? 1 : _options$step,
          cycle = _options.cycle,
          interval = _options.interval,
          _options$mode = _options.mode,
          mode = _options$mode === undefined ? 'clockwise' : _options$mode;

      this.reset();
      callback(this.count);
      this.handler = setInterval(function () {
        _this.count = _this.count + step * operationMap[mode];
        callback(_this.count);
        if (mode === 'clockwise' ? _this.count >= start + cycle : _this.count <= start - cycle) {
          _this.reset();
        }
      }, interval);
    }
  }, {
    key: 'end',
    value: function end() {
      this.reset();
    }
  }, {
    key: 'reset',
    value: function reset() {
      clearInterval(this.handler);
      this.count = this.options.start;
    }
  }]);

  return Timer;
}();

exports.default = Timer;