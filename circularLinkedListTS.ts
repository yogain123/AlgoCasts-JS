/**
 * Given a Linked List , Return True If list is Circular or Not
 */

class NodeTS {
  constructor(public data: number, public next: any | null = null) {}
}

class CircularLinkedList {
  head: null | any;
  constructor() {
    this.head = null;
  }

  insertFirst(data: number): void {
    this.head = new NodeTS(data, this.head);
  }

  sizeOfList(): number {
    let count = 0;
    let firstNode = this.head;
    while (this.head != null) {
      this.head = this.head.next;
      count++;
    }
    this.head = firstNode;
    return count;
  }

  makeCircular(): void {
    let firstNode = this.head;
    while (this.head.next != null) {
      this.head = this.head.next;
    }

    this.head.next = firstNode;
  }

  checkIfCircular(): boolean {
    let slow = this.head;
    let fast = this.head.next;
    while (slow && fast) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) return true;
    }
    return false;
  }
}

const nodeOne = new NodeTS(89);
let list = new CircularLinkedList();
list.head = nodeOne;
list.insertFirst(3);
list.insertFirst(5);
list.insertFirst(6);
list.insertFirst(3);
list.insertFirst(5);
list.insertFirst(6);
list.insertFirst(3);
list.insertFirst(5);
list.insertFirst(6);
list.insertFirst(3);
list.insertFirst(5);
list.insertFirst(88);

list.makeCircular();

console.log(list.checkIfCircular());
