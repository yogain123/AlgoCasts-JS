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

  insertLast(data) {
    let firstNode = this.head;
    while (this.head.next != null) {
      this.head = this.head.next;
    }
    this.head.next = new Node(data);
    this.head = firstNode;
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

  getFirst() {
    return this.head;
  }

  getLast() {
    let firstNode = this.head;
    while (this.head.next != null) {
      this.head = this.head.next;
    }
    let result = this.head;
    this.head = firstNode;
    return result;
  }
  
  reverseList() {
        let current = this.head;
        let prev, next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

  getMidPoint() {
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow.data;
  }
}

const nodeOne = new Node(89);
let list = new Linkedlist();
list.head = nodeOne;
list.insertFirst(3);
list.insertFirst(5);
list.insertFirst(6);

list.insertLast(456);
list.insertFirst(900);
list.insertLast(76543);

console.log(JSON.stringify(list));
console.log(list.sizeOfList());
console.log(list.getFirst().data);
console.log(list.getLast().data);

console.log(JSON.stringify(list));

console.log("Mid Point is " + list.getMidPoint());
