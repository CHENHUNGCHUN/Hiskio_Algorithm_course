//size是指多少個元素當作一個widow; ex:[1,2,3,4,5,6...],size = 3 則window = [1,2,3]、[2,3,4]、[3,4,5].....

function maxSum(arr, size) {
  let max_value = -Infinity;
  //防止array本身就小於size的長度
  if (size > arr.length) {
    return null;
  }
  for (let i = 0; i <= arr.length - size; i++) {
    //let window = []; //檢查用
    let tmp = 0;
    for (let j = i; j < i + size; j++) {
      //window.push(arr[j]); //檢查用
      tmp += arr[j];
    }
    //console.log(window); //檢查用
    if (tmp > max_value) {
      max_value = tmp;
    }
  }
  return max_value;
}

function minSum(arr, size) {
  let min_value = Infinity;
  if (size > arr.length) {
    return null;
  }
  for (let i = 0; i <= arr.length - size; i++) {
    let tmp = 0;
    for (let j = i; j < i + size; j++) {
      tmp += arr[j];
    }
    if (tmp < min_value) {
      min_value = tmp;
    }
  }
  return min_value;
}

maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
