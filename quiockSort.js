function partition(p, r) {
  let x = arr[r]; //Piovt
  let i = p - 1; //index or 計算有多少比Pivot小的值
  for (let j = p; j <= r - 1 /*因為最後一個是Pivot 所以不檢查 ,所以 -1*/; j++) {
    if (arr[j] <= x /*如果element比Pivot小或等於 ,i就+1*/) {
      i++;
      //swap arr[i] and arr[j]
      //因為這時候的i已經+1了 所以他實際上是在小於pivot的連續排列中的外面一項(或是說就是比Pivot大的連續列的第一個)
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
  //swap arr[i+1] and arr[r]  arr[r]就是Povit
  let temp = arr[i + 1];
  arr[i + 1] = arr[r];
  arr[r] = temp;

  return i + 1; //i+1實際上就是一開始的Povit的值
}

function quickSort(p, r) {
  if (p < r) {
    let q = partition(p, r);
    quickSort(p, q - 1);
    quickSort(q + 1, r);
  }
}

let arr = [15, 3, 17, -17, 3.1415, 18, 20, 2, 1, 666];
quickSort(0, arr.length - 1);
console.log(arr);
