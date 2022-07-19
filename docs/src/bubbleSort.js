// 冒泡排序

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < (len - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

const res = bubbleSort(arr);

console.log('bubbleSort res ==> ', res);