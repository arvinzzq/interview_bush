function partition(arr, left, right) {
  let i = left;
  let j = right;
  const temp = arr[i];
  while(i < j) {
    while(i < j && arr[j] > temp) {
      j--;
    }
    if (i < j) {
      arr[i] = arr[j];
    }
    while(i < j && arr[i] < temp) {
      i++;
    }
    if (i < j) {
      arr[j] = arr[i];
    }
  }
  arr[i] = temp;
  return i;
}

function quickSort(arr, left, right) {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

quickSort(arr, 0, arr.length -1);

console.log('quick sort result ===> ', arr);