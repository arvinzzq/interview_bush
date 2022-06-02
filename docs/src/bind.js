Function.prototype.bind2 = function (context, ...arg) {
  const fn = this;
  return function () {
    fn.apply(context, arg.concat(Array.prototype.slice.call(arguments)));
  }
};

function func() {
  this.name = 233;
  console.log('arguments: ', arguments);
  console.log('this:', this);
}

func.bind2({ age: 18, name: '啦啦啦' }, 2, 3, 4)('lalala', 'bababa');
