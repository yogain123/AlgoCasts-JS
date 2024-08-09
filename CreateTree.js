class Nodee{
    constructor(data){
        this.data = data;
        this.childs = [];
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
}


const n1 = new Nodee(1);
const n2 = new Nodee(2);
const n3 = new Nodee(3);
const n4 = new Nodee(4);
const n5 = new Nodee(5);
const n6 = new Nodee(6);
const n7 = new Nodee(7);
n1.childs[0] = n2;
n1.childs[1] = n3;

n2.childs[0] = n4;
n2.childs[1] = n5;

n3.childs[0] = n6;
n3.childs[1] = n7;

const tree = new Tree();
tree.root = n1;

console.log(JSON.stringify(tree));
/**
       1
     /   \
    2     3
   / \   / \
  4   5 6   7


*/
