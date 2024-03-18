class Node {
  constructor(value, priority) {
    (this.value = value), (this.priority = priority);
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    //check if the priority queue is emty
    if (this.values.length === 0) {
      this.values.push(newNode);
      return true;
    }

    this.values.push(newNode);
    let newIndex = this.values.length - 1;
    let parentIndex = Math.floor((newIndex - 1) / 2);
    while (
      parentIndex >= 0 &&
      this.values[newIndex].priority > this.values[parentIndex].priority
    ) {
      //swap parent and child
      let result = this.values[parentIndex];
      this.values[parentIndex] = this.values[newIndex];
      this.values[newIndex] = result;
      //update index number
      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }
  }

  dequeue() {
    if (this.values.length === 0) {
      return null;
    }
    if (this.values.length === 1) {
      let removeNode = this.values.pop();
      return removeNode;
    }
    //swap first and latest
    let tmp = this.values.pop();
    this.values.push(this.values[0]);
    this.values[0] = tmp;
    let removeNode = this.values.pop();

    this.maxHeapify(0);

    return removeNode;
  }

  maxHeapify(i) {
    let largest;
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    if (
      l <= this.values.length - 1 &&
      this.values[l].priority > this.values[i].priority
    ) {
      largest = l;
    } else {
      largest = i;
    }
    if (
      r <= this.values.length - 1 &&
      this.values[r].priority > this.values[largest].priority
    ) {
      largest = r;
    }
    if (i !== largest) {
      let tmp = this.values[largest];
      this.values[largest] = this.values[i];
      this.values[i] = tmp;
      this.maxHeapify(largest);
    }
  }
}

let pq = new PriorityQueue();
pq.enqueue("Eat Breakfirst", 5);
pq.enqueue("Learn Java", 2);
pq.enqueue("Learn python", 7);
pq.enqueue("USe Restroom", 100);
pq.enqueue("eat dinner", 200);
pq.enqueue("feat dog", 260);
pq.enqueue("go sleep", 210);
pq.enqueue("go scholl", 150);

console.log(pq);

while (pq.values.length > 0) {
  let task = pq.dequeue();
  console.log(task.priority);
}
