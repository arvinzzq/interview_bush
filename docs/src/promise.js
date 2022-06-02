// 缓存Promise的方法实现异步请求的共用
const p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve('heiheihei');
  }, 2000);
});

p1.then(data => {
  console.log('data => ', data);
});

p1.then(data => {
  console.log('data => ', data);
});

p1.then(data => {
  console.log('data => ', data);
});

console.log('###################');
const p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve();
    console.log(1);
  }, 2000);
});
p2.then(() => {
  console.log(2);
});
console.log(3);

console.log('###################');
const p3 = new Promise(resolve => {
  resolve();
  console.log(1);
});
p3.then(() => {
  console.log(2);
});
console.log(3);

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ test: 1 })
    resolve({ test: 2 })
    reject({ test: 2 })
  }, 1000);
}).then((data) => {
  console.log('result1', data)
}, (data1) => {
  console.log('result2', data1)
}).then((data) => {
  console.log('result3', data)
})
//result1 { test: 1 }
//result3 undefined

// 实现一个Promise