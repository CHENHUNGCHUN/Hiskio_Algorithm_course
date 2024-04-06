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

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let currentNode = this.head;
      //因為最後一個(length-1)是要pop掉的,所以執行到倒數第二個
      for (let i = 1; i <= this.length - 2; i++) {
        currentNode = currentNode.next;
      }
      let temp = currentNode.next; //倒數第二個的next就是最後一個 ,是要pop掉的
      currentNode.next = null;
      this.length--;
      return temp;
    }
  }

  //pop出第一個值
  shift() {
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
  }

  //從第一個插入數值
  unshift(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      let newNode = new Node(value);
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
  }

  //從特定index插入值(這個index是從 0開始的index)
  insertAt(index, value) {
    if (index > this.length || index < 0) {
      return null;
    } else if (index === 0) {
      this.unshift(value);
      return;
    } else if (index === this.length) {
      this.push(value);
      return;
    }

    let currentNode = this.head;
    let newNode = new Node(value);
    // for loop 一直到index的前一個
    for (let i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return;
  }

  //remove index的值(index是從0開始的)
  removeAt(index) {
    if (index > this.length - 1 || index < 0) {
      return null;
    } else if (index === 0) {
      let result = this.shift();
      return result;
    } else if (index === this.length - 1) {
      let result = this.pop();
      return result;
    }

    let currentNode = this.head;
    // for loop 一直到index的前一個
    for (let i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next;
    }
    let temp = currentNode.next;
    //因為currentNode.next 就是index指定的node, 但因為被指定要被刪除,所以要把index的下一個node接回currentNode.next
    currentNode.next = currentNode.next.next;
    this.length--;
    return temp;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  printAll() {
    if (this.length === 0) {
      console.log("Nothing in this linked list.");
      return;
    }
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

let myLinkedList = new LinkedList();
myLinkedList.push("Mike");
myLinkedList.push("Harry");
myLinkedList.push("James");
myLinkedList.push("Kevin");

console.log(myLinkedList.get(100));

// myLinkedList.printAll();
// console.log(myLinkedList.length);
