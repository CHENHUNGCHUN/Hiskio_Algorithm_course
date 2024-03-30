let unsorted = [14, -4, 17, 6, 22, 1, -5];

function insertSort(arr) {
  //因為是假設arr的第一個index是已經排好的arry 所以for loop是從1開始
  for (let j = 1; j <= arr.length - 1; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i--;
    }
    arr[i + 1] = key;
  }
  console.log(arr);
  return arr;
}

insertSort(unsorted);
