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
        let firstNode = this.head
        while (this.head.next != null) {
            this.head = this.head.next;
        }
        let result = this.head;
        this.head = firstNode;
        return result;
    }
}

const nodeOne = new Node(5);
let list = new Linkedlist();
list.head = nodeOne;
list.insertFirst(200);
list.insertFirst(200);
list.insertFirst(200);

list.insertLast(456);
list.insertFirst(900);
list.insertLast(76543);

console.log(JSON.stringify(list));
console.log(list.sizeOfList());
console.log(list.getFirst().data);
console.log(list.getLast().data);

console.log(JSON.stringify(list));