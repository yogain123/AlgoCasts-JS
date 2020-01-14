class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  reverse() {
    let temp = this.head;
    let arr = [];
    while (temp != null) {
      arr.push(temp.data);
      temp = temp.next;
    }
    console.log(arr);
    this.createLLFromArray(arr);
  }

  createLLFromArray(arr) {
    this.head = null;
    for (const item of arr) {
      this.insertFirst(item);
    }
  }
}

let node = new Node(1);
let ll = new LinkedList();
ll.head = node;
ll.insertFirst(2);
ll.insertFirst(3);
ll.insertFirst(4);
ll.insertFirst(5);
console.log(JSON.stringify(ll));
ll.reverse();
console.log(JSON.stringify(ll));
