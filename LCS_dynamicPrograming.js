let table1; //紀錄數字用
let table2; //紀錄箭頭用
let result = "";
let x = "ATTTGGCTA";
let y = "TTAGCCAT";

LCS(x, y);
printLCS(x.length, y.length); //因為table的字串都有在最前面被加上空字串,所以不用-1
console.log(result);

function LCS(str1, str2) {
  let m = str1.length; //想成是y軸的長度
  let n = str2.length; //想成是x軸的長度
  table1 = [];
  table2 = [];

  //TABLE1 把y軸跟x軸的 index = 0的位置都會是0
  //這裡講師把str1放在y軸, str2放在x軸
  for (let i = 0; i <= m; i++) {
    table1.push([]);
    table1[i][0] = 0;

    for (let k = 1; k <= n; k++) {
      table1[i].push(null); //將除了index =0 的位置塞滿null
    }
  }
  for (let j = 0; j <= n; j++) {
    table1[0][j] = 0;
  }

  // TABLE2 (除了值全部為null以外 都跟table1一樣)
  for (let i = 0; i <= m; i++) {
    table2.push([]);
    for (let k = 0; k <= n; k++) {
      table2[i].push(null);
    }
  }

  //因為0不用做(都是0)所以從1開始跑, i想成是y軸的移動 ,j想成是x軸的移動
  //如果兩者相同,則 1 + 左上角的值 ,如果兩者不同, 則比較table中該位置的上面跟左邊誰比較大;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      //記得現在實際上在處理 table[i][j]的位置
      //但是因為每個string 前面又被多加了一個空字串,所以 實際上確實是在處理 table[i][j] 但是字串判斷卻是在判斷 i-1 跟 j-1
      if (str1[i - 1] == str2[j - 1]) {
        table1[i][j] = 1 + table1[i - 1][j - 1]; //如果兩個相同,則1+左上角的那個數字
        table2[i][j] = "↖";
        //如果兩個字串不相同的話 直接做table裡面的事情
      } else if (table1[i - 1][j] >= table1[i][j - 1]) {
        table1[i][j] = table1[i - 1][j];
        table2[i][j] = "↑";
      } else {
        table1[i][j] = table1[i][j - 1];
        table2[i][j] = "←";
      }
    }
  }
}

//把LCS的字串寫出來
function printLCS(i, j) {
  if (i == 0 || j == 0) {
    return;
  }
  if (table2[i][j] == "↖") {
    printLCS(i - 1, j - 1);
    result += x[i - 1];
  } else if (table2[i][j] == "↑") {
    printLCS(i - 1, j);
  } else {
    printLCS(i, j - 1);
  }
}
