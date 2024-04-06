class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //指從最後一個加入
  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.length++;
    } else {
      let x = this.head;
      while (x.next != null) {
        x = x.next;
      }
      x.next = newNode;
      this.length++;
    }
  }

  //指pop最後一個
  pop() {
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      let tmpe = this.head;
      this.head = null;
      this.length--;
      return tmpe;
    } else {
      //因為是pop最後一個,所以代表你只需要去倒數第二個的node把next 改成null就可以了
      let currentnode = this.head;
      // i 要從1開始 因是因為current node已經是head了
      for (let i = 1; i <= this.length - 2; i++) {
        currentnode = currentnode.next;
      }
      let temp = currentnode.next;
      currentnode.next = null;
      this.length--;
      return temp;
    }
  }

  shift() {
    if (this.head === null) {
      return null;
    } else if (this.length === 1) {
      let tmpe = this.head;
      this.head = null;
      this.length--;
      return tmpe;
    } else {
      let tmp = this.head;
      //tmp.next = null; // 因為this.head是object 所以放在這裡會有pass by reference的問題
      this.head = this.head.next;
      this.length--;
      tmp.next = null; //可處理可不處理
      return tmp;
    }
  }

  //最前面加入新的值
  unshift(value) {
    let newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      this.length++;
    } else {
      let tmp = this.head;
      newnode.next = tmp;
      this.length++;
      this.head = newnode;
    }
  }

  insertAt(index, value) {
    if (index > this.length || index < 0) {
      console.log("out of range");
      return null; //確保不會往下執行
    } else if (index === 0) {
      this.unshift(value);
      return; //確保不會往下執行
    } else if (index === this.length) {
      this.push(value);
      return; //確保不會往下執行
    } else {
      let newNode = new Node(value);
      let currentNode = this.head;
      let lastnode;
      //要在index 的地方插入,代表要找到原本位置在index的Node
      for (let i = 1; i <= index; i++) {
        lastnode = currentNode;
        currentNode = currentNode.next;
      }
      lastnode.next = newNode; //index的上一個node.next 為插入的node
      newNode.next = currentNode; //插入的noded.next 為本來位置的node
      this.length++;
      return; //確保不會往下執行

      //講師寫法:(直接停在 index之前的位置做操作)
      /*
      let currentNode = this.head;
      let newNode = new Node(value);
      for (let i = 1; i <= index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
      return;
      */
    }
  }

  removeAt(index) {
    if (index > this.length || this.length < 0) {
      return null;
    } else if (index === this.length) {
      this.pop();
      return;
    } else if (index === 0) {
      this.shift();
      return;
    } else {
      let currentNote = this.head;
      let lastNode;
      for (let i = 1; i <= index; i++) {
        lastNode = currentNote;
        currentNote = currentNote.next;
      }
      lastNode.next = currentNote.next;
      this.length--;
      return;
    }
  }

  get(index) {
    if (index === this.length) {
      return this.pop();
    } else if (index > this.length || index < 0) {
      return null;
    } else if (index === 0) {
      return this.head;
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= index; i++) {
        currentNode = currentNode.next;
      }
      this.length--;
      return currentNode;
    }
  }

  printAll() {
    if (this.length === 0) {
      console.log("Nothging in this linked list");
      return;
    } else {
      let x = this.head;
      while (x !== null) {
        console.log(x.value);
        x = x.next;
      }
    }
  }
}

let myLinkedList = new LinkedList();
myLinkedList.push("Mike");
myLinkedList.push("Harry");
myLinkedList.push("Kames");
myLinkedList.push("Keven");
myLinkedList.printAll();
console.log(myLinkedList.length);

let popvalue = myLinkedList.pop();
console.log(popvalue);

console.log(" ");
myLinkedList.push("Marco");
myLinkedList.printAll();
console.log(myLinkedList.length);

console.log(" ");
let firstvalue = myLinkedList.shift();
console.log("shift value", firstvalue);
myLinkedList.printAll();

console.log(" ");
myLinkedList.unshift("Sherry");
myLinkedList.printAll();
console.log(myLinkedList.length);

console.log(" ");
myLinkedList.insertAt(1, "John");
myLinkedList.printAll();
console.log(myLinkedList.length);

console.log(" ");
myLinkedList.removeAt(2);
myLinkedList.printAll();
console.log(myLinkedList.length);

console.log(" ");
console.log(myLinkedList.get(-5));

/*
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();
console.log(myLinkedList.length);
myLinkedList.printAll();
*/
