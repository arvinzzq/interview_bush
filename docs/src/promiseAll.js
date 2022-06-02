function promiseAll(...arg) {
  return new Promise((resolve, reject) => {
    let len = arr.length;
    let count = 0;
    const result = [];
    for (i = 0; i < len; i++) {
      Promise.resolve(arg[i]).then(res => {
        count++;
        result[i] = res;
        if (count === len) {
          resolve(result);
        }
      }).catch(err => {
        reject({
          index: i,
          err,
        });
      });
    }
  });
}

// // E
// // D
// // A
// // C
// // B
// // F

// // // 1234567 -> 123,456,7



// function numberFormat(str, interval) {
//   let len = str.length;
//   let res = '';
//   for (let i = 0; i < len; i++) {
//     res += str[i];
//     if (!((i + 1) % interval)) {
//       res += ',';
//     }
//   }
//   return res;
// }

// console.log(numberFormat('1234567', 3));

// const [val, setVal] = useState(initVal);

const { useState } = require('react');