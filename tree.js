class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(data){
        this.children = this.children.filter(node=>node.data!==data)
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    traverseBF(){
        let arr = [this.root];
        while(arr.length){
            let node = arr.shift();
            node.data = +node.data + 10;
            arr.push(...node.children)
        }
    }

    traverseDF(){
        let arr = [this.root];
        while(arr.length){
            let node = arr.shift();
            node.data = +node.data + 10;
            arr.unshift(...node.children)
        }
    }
}


let firstNode = new Node(1);
let t = new Tree();
t.root = firstNode;
t.root.add('2');
t.root.add('3');
t.root.children[0].add('4');

console.log(JSON.stringify(t));

t.traverseBF();  // Adding 10 to each node while doing BF Traversal

console.log(JSON.stringify(t));

t.traverseDF();  // Adding 10 to each node while doing BF Traversal

console.log(JSON.stringify(t));