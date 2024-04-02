function Intersection(list1, list2) {
  let result = [];
  let counter = {};
  let list3 = list1.concat(list2);
  for (let i = 0; i <= list3.length - 1; i++) {
    if (!counter[list3[i]]) {
      counter[list3[i]] = 1;
    } else {
      counter[list3[i]]++;
    }
  }
  for (let property in counter) {
    if (counter[property] > 1) {
      result.push(property);
    }
  }
  return result;
  //return counter;
}
x = Intersection([1, 2, 3, 7, 9, 19, 25], [19, 5, 16, 10, 16, 92, 25, 9]);
console.log(x);
