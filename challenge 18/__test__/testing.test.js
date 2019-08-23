'use strict';

const Node = require('../lib/node');
const BinaryTree = require('../lib/binaryTree');


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

const tree = new BinaryTree(one);
const treeTwo = new BinaryTree();

one.left = two;
one.right = three;
two.left = four;
two.right = five;
five.left = six;
five.right = seven;
three.right = eight;
eight.left = nine;

describe('Testing BinaryTree', () =>{
  it('Can it return the correct order', () => {
    tree.findMax();
    expect(this.max).toEqual(9);
  });
  it('Does it fail if a hard false is inputted', () => {
    tree.findMax();
    expect(this.max).toEqual(false);
  });
  it('Can it fail when tree is not in parameter', () =>{
    expect(treeTwo.findMax()).toEqual('__Error__ Please enter a root to traverse.');
  });
});