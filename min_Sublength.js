function minSubLength(arr, sum) {
  let minLength = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;
  while (right < arr.length) {
    currentSum += arr[right];
    while (currentSum >= sum) {
      //update the value of minLenth
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
      }
      currentSum -= arr[left];
      left++;
    }
    right++;
  }
  if (minLength === Infinity) {
    return 0;
  } else {
    return minLength;
  }
}

console.log(minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11));
console.log(minSubLength([0, 0, 0, 0, 0, 0, 0, 0, 0], 11));
console.log(minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60));
