class Node {
  constructor(public data: number, public next: null | any = null) {}
}

class Linkedlist {
  head: null | any;
  constructor() {
    this.head = null;
  }

  nthFromEnd(n: number): void {
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

  insertFirst(data: number): void {
    this.head = new Node(data, this.head);
  }
}

let nodeOneTSS = new Node(88);

let listt = new Linkedlist();
listt.head = nodeOneTSS;

listt.insertFirst(3);
listt.insertFirst(4);
listt.insertFirst(5);
listt.insertFirst(7);
listt.insertFirst(9);

console.log(JSON.stringify(listt));

listt.nthFromEnd(2);
