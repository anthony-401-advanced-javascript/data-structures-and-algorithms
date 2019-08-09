"use strict";

const Node = require('./nodes');

class Stack {
  constructor(topside){
    this.topside = null;
  }

  push(value){
    let node = new Node(value);
    node.next = this.topside;
    this.topside = node;
  }
  pop(){
    if(this.topside && this.topside.next){
      let removed = this.topside;
      this.topside = removed.next;
      return removed.value;
    }else if(this.topside.value){
      let removed = this.topside;
      this.topside = null;
      return removed.value;
    }else{
      return 'There is no top node to remove at this time';
    }
  }
  peek(){
    if(this.topside.value){
      return this.topside.value;
    }else{
      return 'The current top value is NULL';
    }
  }
}

module.exports = Stack;