'use strict';

const Node = require('./node');

class BinaryTree{
  constructor(root){
    this.root = root;
    this.arr = [];
  }

  preOrder(root){
    if(root === null){
      return this.arr;
    }
    this.arr.push(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  inOrder(root){
    if(root === null){
      return;
    }
    this.inOrder(root.left);
    this.arr.push(root.value);
    this.inOrder(root.right);
  }

  postOrder(root){
    if(root === null){
      return;
    }
    this.postOrder(root.left);
    this.postOrder(root.right);
    this.arr.push(root.value);
  }

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

  findMax(tree) {
    let max = 0;

    if (!tree.root) {
      return '__Error__ Please input a tree.';
    }
    let __walk(node){
      if(node.value > max){
        max = node.value;
      }
      if(node.left) __walk(node.left);
      if(node.right) __walk(node.right);
    }
    __walk(tree.root);
    return max;
  }
}

module.exports = BinaryTree;