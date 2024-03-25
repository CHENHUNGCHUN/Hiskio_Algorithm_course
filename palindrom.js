//palindrome 意思是從左邊唸到右邊跟右邊唸到左邊都一樣

function palindrome(stings) {
  left = 0;
  right = stings.length - 1;
  while (left !== right) {
    if (stings[left] === stings[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

x = "amanaplanacanalpanama";
console.log(palindrome(x));
