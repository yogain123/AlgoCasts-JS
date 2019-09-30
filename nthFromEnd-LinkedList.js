class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }

  nthFromEnd(n) {
    let firstNode = this.head;
    let secondNode = this.head;

    for (let i = 0; i < n; i++) {
      secondNode = secondNode.next;
    }

    while (secondNode != null) {
      firstNode = firstNode.next;
      secondNode = secondNode.next;
    }
    console.log(`${n}th node from end is ${firstNode.data}`);
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

let nodeOne = new Node(88);

let list = new Linkedlist();
list.head = nodeOne;

list.insertFirst(3);
list.insertFirst(4);
list.insertFirst(5);
list.insertFirst(7);
list.insertFirst(9);

console.log(JSON.stringify(list));

list.nthFromEnd(2);
