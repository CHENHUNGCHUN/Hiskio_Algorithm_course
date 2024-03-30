let unsorted = [14, -4, 17, 6, 22, 1, -5];

function selectSort(arr) {
  /*因為最後一次基本上是最大值了,所以也不用再排,所以是arr.length - 2*/
  for (let j = 0; j <= arr.length - 2; j++) {
    //先找最小值
    let min = Infinity;
    let minIndex = 0;
    //因為跑完一次for loop 代表排好一個元素了,所以i的起始值會是目前執行的次數
    for (let i = j; i <= arr.length - 1; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    //目前找到的最小值跟白色的部分的最左邊互換
    let tmp = arr[j];
    arr[j] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  console.log(arr);
  return arr;
}

selectSort(unsorted);
