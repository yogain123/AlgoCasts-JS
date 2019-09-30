/**
 * Given a Linked List , Return True If list is Circular or Not
 */

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  sizeOfList() {
    let count = 0;
    let firstNode = this.head;
    while (this.head != null) {
      this.head = this.head.next;
      count++;
    }
    this.head = firstNode;
    return count;
  }

  makeCircular() {
    let firstNode = this.head;
    while (this.head.next != null) {
      this.head = this.head.next;
    }

    this.head.next = firstNode;
  }

  checkIfCircular() {
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

const nodeOne = new Node(89);
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
