/*頻率問題 (就是兩個string 如果不管順序 ,字是不是一樣的)
ex: 
abba , abab   =>true
abbc , aabc   =>false
*/

function sameFrequency(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  if (arr1.length !== arr2.length) {
    return false; //長度不一樣 代表兩個list就一定是不一樣
  }

  let counter1 = {};
  let counter2 = {};
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (!counter1[arr1[i]]) {
      counter1[arr1[i]] = 1;
    } else {
      counter1[arr1[i]]++;
    }
  }

  for (let i = 0; i <= arr2.length - 1; i++) {
    if (!counter2[arr2[i]]) {
      counter2[arr2[i]] = 1;
    } else {
      counter2[arr2[i]]++;
    }
  }

  //檢查兩個counter裡面的東西
  for (let property in counter1) {
    if (!counter2[property]) {
      return false;
    }
    if (counter2[property] !== counter1[property]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency("abcb", "abbc"));
