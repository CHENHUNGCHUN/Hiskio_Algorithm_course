function maxSum(arr, size) {
  if (size > arr.lenght) {
    return null;
  }

  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  let tmpvalue = maxValue;
  for (let j = size; j < arr.length; j++) {
    tmpvalue = tmpvalue + arr[j] - arr[j - size];
    if (tmpvalue > maxValue) {
      maxValue = tmpvalue;
    }
  }
  console.log(maxValue);
  return maxValue;
}

function minSum(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let minValue = 0;
  for (let i = 0; i < size; i++) {
    minValue += arr[i];
  }
  let temmin = minValue;
  for (let j = size; j <= arr.length - 1; j++) {
    temmin = temmin + arr[j] - arr[j - size];
    if (temmin < minValue) {
      minValue = temmin;
    }
  }
  console.log(minValue);
  return minValue;
}

maxSum([2, 1, 7, 3, 7, 25, 6, 1, -5, 12, -11], 3);
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
