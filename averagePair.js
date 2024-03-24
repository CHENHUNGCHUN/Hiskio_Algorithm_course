averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

function averagePair(arr, avg) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) / 2 == avg) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  // O(n^2) => O(n)

  console.log(result);
  return result;
}
