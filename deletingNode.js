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

  deletingNode(data) {
    let firstNode = this.head;
    while (firstNode.next.data !== data) {
      firstNode = firstNode.next;
    }
    firstNode.next = firstNode.next.next;
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

console.log("======== Nodes ========");
console.log(JSON.stringify(list));

list.deletingNode(5);

console.log("======== Nodes After Delete ========");
console.log(JSON.stringify(list));
