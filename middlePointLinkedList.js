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

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  middle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log(`Middle Node is ${slow.data}`);
  }
}

let nodeOne = new Node(88);
let list = new Linkedlist();

list.head = nodeOne;

list.insertFirst(2);
list.insertFirst(3);
list.insertFirst(4);
list.insertFirst(5);
list.insertFirst(6);
list.insertFirst(99);

console.log(JSON.stringify(list));

list.middle();
