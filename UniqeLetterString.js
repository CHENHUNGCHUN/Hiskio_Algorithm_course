function uniqueLetterString(string) {
  let start = 0;
  let end = 0;
  let counter = {};
  let maxLength = -Infinity;
  while (end < string.length) {
    if (counter[string[end]]) {
      //0是false  >0是true ,所以由1減成0是由true變成false
      counter[string[start]]--;
      start++;
    } else {
      counter[string[end]] = 1;
      end++;
      if (end - start > maxLength) {
        //相減不用多加1 原因 是因為在相減之前end已經加1了
        maxLength = end - start;
      }
    }
  }
  if (maxLength === -Infinity) {
    console.log(0);
    return 0;
  } else {
    console.log(maxLength);
    return maxLength;
  }
}

uniqueLetterString("thisishowwedoit");
