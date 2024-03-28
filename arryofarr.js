let result = [];

function arrOfarr(arr) {
  if (typeof arr === "string") {
    result.push(arr[0]);
    return true;
  }
  for (let i = 0; i < arr.length; i++) {
    arrOfarr(arr[i]);
  }
  return result;
}

//講師解法
function colloector_old(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      colloector_old(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

//講師解法2. (把result放到function裡面)
function colloector(arr1) {
  let result = [];
  helper(arr1);
  return result;
  function helper(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        helper(arr2[i]);
      } else {
        result.push(arr2[i]);
      }
    }
  }
}

/*
arr = [[[[["a"]]]]];
console.log(arr[0][0][0][0][0][0]);
console.log(arr[0][0][0][0][0][0].length);
console.log(typeof arr[0][0][0][0]);
console.log(typeof arr[0][0][0][0][0] === "array");
*/

let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];
x = arrOfarr(arrs);
console.log(x);
