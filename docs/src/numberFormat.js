// function numberFormat(numStr) {
//   const intStrArr = numStr.toString().split('.')[0].split('');
//   let formatIntStrArr = [];
//   for (let i = intStrArr.length - 1; i >= 0; i--) {
//     formatIntStrArr.push(intStrArr[i]);
//     if (i && !(i % 3)) {
//       formatIntStrArr.push(',');
//     }
//   }
//   return formatIntStrArr.join('') + ((numStr.toString().split('.')[1] ? `.${numStr.toString().split('.')[1]}` : ''));
// }

function numberFormat(num) {
  return num.toString().replace(/\d+/, function (n) {
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ",";
    });
  });
}

console.log(numberFormat(1234567));

console.log(numberFormat(1234567.23333));

console.log(numberFormat(1));

console.log(numberFormat(''));