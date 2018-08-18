"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// // 实现一个 js 的 class ，名字叫做：AnimateToNum，功能是从某个数字递增或者递减到另外一个数字，并且不管数字如何变化，都可以在指定的时间内完成。
// var AnimateToNum = require("animate-num");

// var numAnim = new AnimateToNum({
//   animTime:2000, //每次数字变动持续的时间（ms），
//   initNum:500, //初始化的数字
//   onChange:function(num){
//     console.log(num);
//   }
// });

// numAnim.toNum(100); // 从500变化到100，用2000ms的时间，在onChange回调中会一直从500倒数到100
var noop = function noop() {};

var AnimateToNum = function () {
  function AnimateToNum(props) {
    _classCallCheck(this, AnimateToNum);

    var animTime = props.animTime,
        initNum = props.initNum,
        _props$step = props.step,
        step = _props$step === undefined ? 1 : _props$step,
        _props$onChange = props.onChange,
        onChange = _props$onChange === undefined ? noop : _props$onChange;

    this.animTime = animTime;
    this.initNum = initNum;
    this.onChange = onChange;
    this.step = step;
  }

  _createClass(AnimateToNum, [{
    key: "toNum",
    value: function toNum(endNum) {
      var _this = this;

      var interval = this.animTime * this.step / Math.abs(this.initNum - endNum);
      var operation = this.initNum < endNum ? 1 : -1;
      var pointer = this.initNum;
      var handler = setInterval(function () {
        if (operation > 0 ? pointer > endNum : pointer < endNum) {
          clearInterval(handler);
        } else {
          _this.onChange(pointer);
        }
        pointer = pointer + operation * _this.step;
      }, interval);
    }
  }]);

  return AnimateToNum;
}();

var numAnim = new AnimateToNum({
  animTime: 10000, //每次数字变动持续的时间（ms），
  initNum: 500, //初始化的数字
  step: 10,
  onChange: function onChange(num) {
    console.log(num);
  }
});

numAnim.toNum(1000); // 从500变化到100，用2000ms的时间，在onChange回调中会一直从500倒数到100