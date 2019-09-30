class NodeTSD {
  constructor(public data: number, public next: null | any = null) {}
}

class LinkedlistTSD {
  head: null | any;
  constructor() {
    this.head = null;
  }

  insertFirst(data: number): void {
    this.head = new NodeTSD(data, this.head);
  }

  deletingNode(data: number): void {
    let firstNode = this.head;
    while (firstNode.next.data !== data) {
      firstNode = firstNode.next;
    }
    firstNode.next = firstNode.next.next;
  }
}

let nodeOneTSD = new NodeTSD(88);

let listTSD = new LinkedlistTSD();
listTSD.head = nodeOneTSD;

listTSD.insertFirst(3);
listTSD.insertFirst(4);
listTSD.insertFirst(5);
listTSD.insertFirst(7);
listTSD.insertFirst(9);

console.log("======== Nodes ========");
console.log(JSON.stringify(listTSD));

listTSD.deletingNode(5);

console.log("======== Nodes After Delete ========");
console.log(JSON.stringify(listTSD));
