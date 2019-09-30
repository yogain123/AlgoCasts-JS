class Stack {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.unshift(item);
  }

  remove() {
    return this.data.shift();
  }

  push(item) {
    this.data.unshift(item);
  }

  pop() {
    return this.data.shift();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    if (this.data.length === 0) return true;
    return false;
  }
}

module.exports = Stack;

let s = new Stack();
s.add(2);
s.add(7);
s.add(100);
console.log(s);
s.remove();
console.log(s);
