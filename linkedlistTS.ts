class NodeTS2 {
  constructor(public data: number, public next: any | null = null) {}
}

class LinkedlistTS {
  head: any | null;
  constructor() {
    this.head = null;
  }

  insertFirst(data: number) {
    this.head = new NodeTS2(data, this.head);
  }

  insertLast(data: number) {
    let firstNode = this.head;
    while (this.head.next != null) {
      this.head = this.head.next;
    }
    this.head.next = new NodeTS2(data);
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

  getMidPoint() {
    let fast = this.head;
    let slow = this.head;
    while (fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow.data;
  }
}

const nodeOneTS = new NodeTS2(89);
let listTS = new LinkedlistTS();
listTS.head = nodeOneTS;
listTS.insertFirst(3);
listTS.insertFirst(5);
listTS.insertFirst(6);

listTS.insertLast(456);
listTS.insertFirst(900);
listTS.insertLast(76543);

console.log(JSON.stringify(listTS));
console.log(listTS.sizeOfList());
console.log(listTS.getFirst().data);
console.log(listTS.getLast().data);

console.log(JSON.stringify(listTS));

console.log("Mid Point is " + listTS.getMidPoint());
