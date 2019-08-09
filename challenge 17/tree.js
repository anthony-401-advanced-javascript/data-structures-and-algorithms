'use strict';

const Node = require('./lib/node');

class BinaryTree {
  constructor(root) {
    this.root = root;
  }
}

const preOrder = function(root){
  if(root === null){
    return;
  }
  preOrder(root.left);
  preOrder(root.right);
};

const inOrder = function(root){
  if(root === null){
    return;
  }
  inOrder(root.left);
  inOrder(root.right);
};

const postOrder = function(root){
  if(root === null){
    return;
  }
  postOrder(root.left);
  postOrder(root.right);
};

const one = new Node(10);
const two = new Node(20);
const three = new Node(30);
const four = new Node(40);
const five = new Node(50);
const tree = new BinaryTree(one);

one.left = two;
one.right = three;
three.left = four;
three.right = five;

preOrder(tree.root);
inOrder(tree.root);
postOrder(tree.root);