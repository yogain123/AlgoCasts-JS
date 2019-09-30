class NodeMID {
  constructor(public data: number, public next: null | any = null) {}
}

class LinkedlistMID {
  head: any | null;
  constructor() {
    this.head = null;
  }

  insertFirst(data: number): void {
    this.head = new NodeMID(data, this.head);
  }

  middle(): void {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log(`Middle Node is ${slow.data}`);
  }
}

let nodeOneMID = new NodeMID(88);
let listMID = new LinkedlistMID();

listMID.head = nodeOneMID;

listMID.insertFirst(2);
listMID.insertFirst(3);
listMID.insertFirst(4);
listMID.insertFirst(5);
listMID.insertFirst(6);
listMID.insertFirst(99);

console.log(JSON.stringify(listMID));

listMID.middle();
