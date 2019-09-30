class Queue {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.unshift(item);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

let q = new Queue();
q.add(2);
q.add(4);
q.add(7);
console.log(q);
q.remove();
console.log(q);

module.exports = Queue;
