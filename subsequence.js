//subsequence 是指string2 刪除某些字元後 會等於string1 (注意順序要一樣)

function subsequence(string1, strin2) {
  let l_count = 0;
  let l = string1.length;
  let r_count = 0;
  let r = strin2.length;
  if (string1.length === 0) {
    return true;
  }
  while (r_count < r) {
    if (string1[l_count] === strin2[r_count]) {
      r_count++;
      l_count++;
      if (l_count >= l) {
        return true;
      }
    } else {
      r_count++;
    }
  }
  return false;
}

string1 = "book";
string2 = "brooklyn";

/*
string1 = "hello";
string2 = "hello Dear";

string1 = "abc";
string2 = "bac";

string1 = "abc";
string2 = "abc";
*/

y = subsequence(string1, string2);
console.log(y);



//testconflict
