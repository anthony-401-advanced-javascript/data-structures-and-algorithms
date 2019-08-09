'use strict';

const Node = require('./node');

class BinaryTree {
  constructor(root){
    this.root = root;
    this.arr = [];
  }

  preOrder(root){
    if(root===null){
      return this.arr;
    }
    this.arr.push(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  inOrder(root){
    if(root===null){
      return;
    }
    this.inOrder(root.left);
    this.arr.push(root.value);
    this.inOrder(root.right);
  };

  postOrder(root){
    if(root===null){
      return;
    }
    this.postOrder(root.left);
    this.postOrder(root.right);
    this.arr.push(root.value);
  };

  breadth(root){
    let queue = [root];
    let output = [];
    if(!root){
      return '__Error__ Please enter a root to traverse.';
    }
    while(queue.length){
      let currentNode = queue.shift();
        output.push(currentNode.value);
      if(currentNode.left){
        queue.push(currentNode.left);
      }
      if(currentNode.right){
        queue.push(currentNode.right);
      }
    }
    return output;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);


const tree = new BinaryTree(one);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;

preOrder(tree.root);
inOrder(tree.root);
postOrder(tree.root);
breadth(tree.root);

module.exports = BinaryTree;