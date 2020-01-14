class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF() {
    let arr = [this.root];
    while (arr.length) {
      let node = arr.shift();
      node.data = +node.data + 10;
      arr.push(...node.children);
    }
  }

  traverseDF() {
    let arr = [this.root];
    while (arr.length) {
      let node = arr.shift();
      node.data = +node.data + 10;
      arr.unshift(...node.children);
    }
  }

  // --- Directions
  // Given the root node of a tree, return
  // an array where each element is the width
  // of the tree at each level.
  // --- Example
  // Given:
  //     1
  //   /    \
  // 2       3
  // |
  // 4
  // Answer: [1, 2, 1]

  levelWidth() {
    let counters = [0];
    let arr = [this.root, "s"];
    while (arr.length > 1) {
      let node = arr.shift();
      if (node == "s") {
        counters.push(0);
        arr.push("s");
      } else {
        arr.push(...node.children);
        counters[counters.length - 1]++;
      }
    }
    return counters;
  }
}

let firstNode = new Node(1);
let t = new Tree();
t.root = firstNode;
t.root.add("2");
t.root.add("3");
t.root.children[0].add("4");

// Given:
//     1
//   /    \
// 2       3
// |
// 4

console.log(JSON.stringify(t));

t.traverseBF(); // Adding 10 to each node while doing BF Traversal

console.log(JSON.stringify(t));

t.traverseDF(); // Adding 10 to each node while doing BF Traversal

console.log(JSON.stringify(t));

let levelWidth = t.levelWidth();

console.log({ levelWidth });
