'use strict';

const Node = require('./node');

class BinarySearchTree{
  constructor(root){
    this.root = root;
  }

  add(nodeToInsert){
    if(!nodeToInsert){
      throw new Error('__ERROR__ Can not insert, nothing is being passed.');
    }

    if(!this.root){
      this.root = nodeToInsert;
      return;
    }

    let curr = this.root;

    while(true){
      if(nodeToInsert.value > curr.value){
        if(!curr.right){
          curr.right = nodeToInsert;
          return;
        }
        curr = curr.right;
      }else{
        if(!curr.left){
          curr.left = nodeToInsert;
          return;
        }
        curr = curr.left;
      }
    }
  }

  contains(val){
    if(!val){
      throw new Error('__ERROR__ Can not insert, nothing is being passed.');
    }

    if(!this.root){
      return 'Tree has nothing to search for. Root of the tree does not exist.';
    }

    if(val === this.root.value){
      return `${val} was found`;
    }
    let found = false;
    let curr = this.root;

    while(!found){
      if(curr === null){
        return 'value not found!';
      } else if(val > curr.value){
        curr = curr.right;
      } else if(val < curr.value){
        curr = curr.left;
      } else if(val === curr.value){
        found = true;
        return `${val} was found`;
      }
    }
  }
}

const BST = new BinarySearchTree();
BST.add(new Node(10));
BST.add(new Node(15));
BST.add(new Node(5));
BST.add(new Node(7));

BST.contains(15);
BST.contains(5);
BST.contains(7);

module.exports = BinarySearchTree;