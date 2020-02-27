class Node {
    public value: number;
    public next: any;
    constructor(value: number) {
        this.value = value;
        this.next = null
    }
}


class ReverseALInkedList {

    public head: any;

    createList() {
        const firstNode = new Node(10);
        firstNode.next = new Node(20);
        firstNode.next.next = new Node(30);
        firstNode.next.next.next = new Node(40);
        this.head = firstNode;
        return firstNode;
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

    printList() {
        let current = this.head;
        while (current != null) {
            console.log(current.value);
            current = current.next;
        }
    }

}

export default ReverseALInkedList;

const listClass = new ReverseALInkedList();
listClass.createList();
listClass.reverseList();
listClass.printList();