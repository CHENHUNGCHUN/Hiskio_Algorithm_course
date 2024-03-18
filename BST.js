class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.path = "";
    this.queue = [];
  }

  treeInsert(z) {
    let y = null;
    let x = this.root;
    //while迴圈算是定位x,y的位置
    while (x !== null) {
      y = x;
      if (z.key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    //這邊是賦y給z的值 (root要大於左邊child 且小於右邊child)
    if (y == null) {
      this.root = z;
    } else if (z.key < y.key) {
      y.left = z;
    } else {
      y.right = z;
    }
  }

  searchRecursively(x, key) {
    if (x == null || key == x.key) {
      return x;
    } else if (key < x.key) {
      return this.searchRecursively(x.left, key);
    } else {
      return this.searchRecursively(x.right, key);
    }
  }

  searchIteratively(x, key) {
    while (x != null && key != x.key) {
      if (key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    if (x == null) {
      console.log("Node not fund");
    } else {
      console.log("Node fund.");
    }
    return x;
  }

  preOrder(n) {
    if (n != null) {
      this.path = this.path + n.key + " ";
      this.preOrder(n.left);
      this.preOrder(n.right);
    }
  }

  inOrder(n) {
    if (n != null) {
      this.inOrder(n.left);
      this.path = this.path + n.key + " ";
      this.inOrder(n.right);
    }
  }

  postOrder(n) {
    if (n != null) {
      this.postOrder(n.left);
      this.postOrder(n.right);
      this.path = this.path + n.key + " ";
    }
  }

  bftt(n) {
    if (n != null) {
      this.queue.push(n);
      for (let i = 0; i < this.queue.length; i++) {
        let currentNode = this.queue[i];
        if (currentNode != null) {
          if (currentNode.left != null) {
            this.queue.push(currentNode.left);
          }
          if (currentNode.right != null) {
            this.queue.push(currentNode.right);
          }
        }
      }
    }
  }
}

let bst = new BinarySearchTree();
bst.treeInsert(new Node(15));
bst.treeInsert(new Node(6));
bst.treeInsert(new Node(5));
bst.treeInsert(new Node(1));
bst.treeInsert(new Node(13));
bst.treeInsert(new Node(-7));
bst.treeInsert(new Node(3));

let result = bst.searchRecursively(bst.root, 13);
console.log(result);
let result2 = bst.searchRecursively(bst.root, 6);
console.log(result2);
let result3 = bst.searchRecursively(bst.root, -10);
console.log(result3);

let result4 = bst.searchIteratively(bst.root, 13);
console.log(result4);
