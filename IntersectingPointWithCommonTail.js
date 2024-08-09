class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }
  print(ll) {
    let tempHead = ll.head;
    let str = "";
    while (tempHead !== null) {
      str += tempHead.data + "->";
      tempHead = tempHead.next;
    }
    console.log(str.slice(0, str.length - 2));
  }

  getLength(ll) {
    let tempHead = ll.head;
    let count = 0;
    while (tempHead !== null) {
      count++;
      tempHead = tempHead.next;
    }
    return count;
  }

  intersectingPoint(ll1, ll2) {
    let tempHead1 = ll1.head;
    let tempHead2 = ll2.head;
    let length1 = this.getLength(ll1);
    console.log({ length1 });
    let length2 = this.getLength(ll2);
    console.log({ length2 });
    let diff = length1 - length2;
    for (let index = 0; index < diff; index++) {
      tempHead1 = tempHead1.next;
    }
    console.log(JSON.stringify(tempHead1));
    console.log(JSON.stringify(tempHead2));
    let count = 0;
    while(tempHead1!==tempHead2){
        tempHead1 = tempHead1.next;
        tempHead2 = tempHead2.next;
        count++;
    }
    console.log("intersecting value is ",tempHead1.data);
    console.log("location from list 1 is ",diff+count);
    console.log("location from list 2 is ",count);
    
  }
}

const d1 = new Node(1);
const d2 = new Node(2);
const d3 = new Node(3);
const d4 = new Node(4);
const ll = new LL();
ll.head = d1;
d1.next = d2;
d2.next = d3;
d3.next = d4;

// common
const d5 = new Node(5);
const d6 = new Node(6);
const d7 = new Node(7);
const d8 = new Node(8);
d5.next = d6;
d6.next = d7;
d7.next = d8;

d4.next = d5;

const ll2 = new LL();
d100 = new Node(100);
d200 = new Node(200);
d300 = new Node(300);
d100.next = d200;
d200.next = d300;
d300.next = d5;
ll2.head = d100;
ll.print(ll);
ll.print(ll2);

ll.intersectingPoint(ll, ll2);
