function Intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i <= arr1.length - 1; i++) {
    for (let j = 0; j <= arr2.length - 1; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
}

x = Intersection([1, 2, 3, 7, 9, 19, 25], [19, 5, 16, 10, 16, 92, 25, 9]);
console.log(x);
