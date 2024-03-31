let arr = [6, 13, 10, 4, 1, 5, 2, 8, 14, 9, 11, 7, 3, 15, 12];

function buildMaxHeap() {
  heapSize = arr.length - 1;
  //Math.floor(heapSize / 2)其實就是parent node,所以其實就是找最後一個parent node開始 一路往前面去整理
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxheapify(i);
  }
}

function maxheapify(i) {
  let largest;
  let l = i * 2 + 1;
  let r = i * 2 + 2;
  if (l <= heapSize && arr[l] > arr[i]) {
    largest = l;
  } else {
    largest = i;
  }
  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r;
  }
  if (i != largest) {
    let tmp = arr[largest];
    arr[largest] = arr[i];
    arr[i] = tmp;
    maxheapify(largest);
  }
}

function heapSort() {
  buildMaxHeap();
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapSize--; //在maxheapify裡面檢查大小(largest)的時候會排除目前換到最後一個(最後一個會是目前循環的最大值)
    maxheapify(0); //再重頭執行
  }
  return arr;
}

heapSort();
console.log(arr);
