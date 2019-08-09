'use strict';

const Node = require('./nodes');
const Stack = require('./stack');

class PsuedoQueue {
  constructor(topside){
    this.topside = null;
    this.bottomside = null;
  }

  enqueue(value){
    let node = new Node(value);
    if(this.topside === null){
      this.topside = node;
      this.bottomside = node;
      return 'Adding the new Node to the front of the Queue.'
    }else{
      this.bottomside.next = node;
      this.bottomside = node;
      return 'Adding the new Node to the back of the Queue.'
    }
  }
  dequeue(){
    if(this.topside && this.topside.next){
      let continuing = this.topside;
      this.topside = this.topside.next;
      return continuing.value;
    }else if(this.topside){
      let continuing = this.topside;
      this.topside = null;
      return continuing.value;
    }else{
      return 'There is nothing in the Queue at the moment.';
    }
  }
}

module.exports= PsuedoQueue;