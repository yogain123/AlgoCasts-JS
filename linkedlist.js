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
}

const nodeOne = new Node(5);
let list = new Linkedlist();
list.head = nodeOne;
list.insertFirst(200);
list.insertFirst(200);
list.insertFirst(200);

console.log(JSON.stringify(list));