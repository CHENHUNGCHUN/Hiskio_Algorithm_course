class HashTable {
  constructor(size) {
    this.size = size;
    this.table = [];
    for (let i = 0; i <= this.size - 1; i++) {
      this.table.push([]);
    }
  }
  //parse string to integer(把文字轉成數字 ; 轉成ASCII code然後再相加)
  parse(str) {
    let result = 0;
    for (let i = 0; i <= str.length - 1; i++) {
      result = str.charCodeAt(i);
    }
    return result % this.size;
  }

  // division method
  hash1(key) {
    return key % this.size;
  }

  // multiplication method
  hash2(key) {
    let parsedkey = 0;
    if (typeof key !== "number") {
      parsedkey = this.parse(key);
    } else {
      parsedkey = key;
    }
    let A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((parsedkey * A) % 1));
  }

  //把值放進去
  set(key, value) {
    let index = this.hash2(key);
    this.table[index].push({ key, value }); //記得這邊放進去array 中的array 是個object
  }

  //把值取出來
  get(key) {
    let index = this.hash2(key);
    for (let i = 0; i <= this.table[index].length - 1; i++) {
      if (this.table[index][i].key === key) {
        return this.table[index][i];
      }
    }
    return null;
  }

  printAll() {
    console.log(this.table);
  }
}

let myHashTable = new HashTable(6);
/*
myHashTable.set(11424, "Mike");
myHashTable.set(6254, "James");
myHashTable.set(4171, "Drake");
myHashTable.set(554, "Kevin");
myHashTable.printAll();

console.log(myHashTable.get(500));
*/

myHashTable.set("white", "#FFFFFF");
myHashTable.set("magenta", "#FF00FF");
myHashTable.set("red", "#FF0000");
myHashTable.printAll();
console.log(myHashTable.get("red"));
console.log(myHashTable.get("red").value);
