function merge(left_arr, right_arr) {
  let result = [];
  while (left_arr.length > 0 && right_arr.length > 0) {
    if (left_arr[0] < right_arr[0]) {
      result.push(left_arr.shift());
    } else {
      result.push(right_arr.shift());
    }
  }
  result = right_arr.length > 0 ? result.concat(right_arr) : result.concat(left_arr);
  return result;
}

function mergesort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left_arr = arr.slice(0, mid);
  let  right_arr = arr.slice(mid, arr.length);
  return merge(mergesort(left_arr), mergesort(right_arr));
}

arr = [45, 8, 9, 6, 42, 48, 0,2,-6, 95, 13, 3,68, -1, 99,-50, 5];
console.log(mergesort(arr));