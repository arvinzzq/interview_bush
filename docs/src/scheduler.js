/**
 * 题目: JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
 * 条件: 只能修改Sheduler
 **/
class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.cache = [];
    this.wipCount = 0;
  }

  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      promiseCreator.resolve = resolve;
      promiseCreator.reject = reject;
      if (this.wipCount < this.limit) {
        return this.runWork(promiseCreator);
      } else {
        this.cache.push(promiseCreator);
      }
    });
  }

  runWork(promiseCreator) {
    this.wipCount++;
    promiseCreator().then(res => {
      this.wipCount--;
      promiseCreator.resolve(res);
      if (this.wipCount < this.limit && this.cache.length) {
        return this.runWork(this.cache.shift());
      }
    }).catch(err => {
      promiseCreator.reject(err);
    });
  }
}
const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time);
})
const scheduler = new Scheduler(2)
const addTask = (time, order) => {
  const result = scheduler.add(() => timeout(time));
  result.then(() => console.log(order + 'order'));
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4


const addTask1 = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}
