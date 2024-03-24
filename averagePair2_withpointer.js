averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

//須注意因為這個演算法是會用到大小 , 所以array必須是要從小到大排序過的
function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (right > left) {
    let temp_avg = (arr[right] + arr[left]) / 2;
    if (temp_avg > avg) {
      right--;
    } else if (temp_avg < avg) {
      left++;
    } else if (temp_avg == avg) {
      result.push([arr[right], arr[left]]);
      //如果找到pairs的話,左右各往內縮一格
      right--;
      left++;
    }
  }

  console.log(result);
  return result;
}
