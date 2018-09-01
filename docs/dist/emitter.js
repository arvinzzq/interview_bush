'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 这里有个需要注意的是Math.random()没有给seed是伪随机数。
var uniqueKey = function uniqueKey() {
  return Math.random().toString().slice(2);
};

/**
 * A sample emitter for test
 */

var Emitter = function () {
  function Emitter() {
    _classCallCheck(this, Emitter);

    this.listeners = {};
  }

  _createClass(Emitter, [{
    key: 'on',
    value: function on(type, callback, options) {
      var id = uniqueKey();
      var newItem = _extends({ callback: callback, id: id }, options);
      if (!this.listeners[type]) {
        this.listeners[type] = [newItem];
      } else {
        this.listeners[type].push(newItem);
      }
      return id;
    }
  }, {
    key: 'once',
    value: function once(type, callback) {
      this.on(type, callback, { isOnce: true });
    }
  }, {
    key: 'clear',
    value: function clear(type, ids) {
      if (!this.listeners[type]) {
        throw new Error('Can not clear unknown event.');
      }
      if (ids) {
        var targetIds = ids instanceof Array ? ids : [ids];
        var len = this.listeners[type].length;
        this.listeners[type] = this.listeners[type].filter(function (item) {
          return targetIds.indexOf(item.id) === -1;
        });
        if (this.listeners[type].length === len) {
          throw new Error('No event callback of type ' + type + ' with id ' + targetIds.toString() + ' is found.');
        }
      } else {
        delete this.listeners[type];
      }
    }
  }, {
    key: 'fire',
    value: function fire(type, data) {
      if (!this.listeners[type]) {
        throw new Error('Can not fire unknown event.');
      }
      var items = this.listeners[type].filter(function (item) {
        return !item.isOnce;
      });

      while (this.listeners[type].length) {
        var item = this.listeners[type].shift();
        item.callback(data);
      }
      this.listeners[type] = items;
    }
  }]);

  return Emitter;
}();

var eventBus = new Emitter();

var say = function say(word) {
  return function (data) {
    console.log('------->');
    console.log('data: ', data);
    console.log('word: ', word);
  };
};

var id1 = eventBus.on('hello', say(1));
var id2 = eventBus.on('hello', say(2));
var id3 = eventBus.on('hello', say(3));
eventBus.on('hello', say(4));
eventBus.on('hello', say(5));
eventBus.once('hello', say('once ~'));

console.log('ids -> ', [id1, id2, id3]);

eventBus.clear('hello', [id1, id2, id3]);
console.log('eventbus listeners -> ', eventBus.listeners);

eventBus.fire('hello', '巴拉巴拉');
console.log('##################');
eventBus.fire('hello', '巴拉巴拉');