'use strict';

const Node= require('./node');

class LinkList{
  constructor(){
    this.head= null;
  }
  addNewNodeAtHead(value){
    const newNode= new Node(value);
    newNode.next= this.head;
    this.head= newNode;
    console.log(`Node was added to the head, the value of the node is ${value}`);
    return `Added ${value} to head`;
  }
  addNewNodeAtTail(value){
    const newNode= new Node(value);
    let current= this.head;
    if(!current){
      current= newNode;
      return;
    }
    while(current.next){
      current= current.next;
    }
    current.next= newNode;
    console.log(`This one should show the new Node: ${JSON.stringify(current.next)}. Node was added to the tail, the value of the node is ${value}.`);
    return `Added ${value} to tail.`;
  };
  insertBefore(value, newVal){
    let newNode= new Node(newVal);
    let current= this.head;
    if(!this.head){
      throw new Error ('__ERROR__ This list is empty!');
    }
    if(this.head.value === value){
      current= newNode;
      current.next= this.head;
      return 'New node added before.';
    }else{
      while(current.next){
        if(current.next.value === value){
          console.log(`Current before insertBefore: ${JSON.stringify(current)}`);
          newNode.next= current.next;
          current.next= newNode;
          console.log(`Current after insertBefore: ${JSON.stringify(current)}`);
          return `New node added before ${value}`;
        }
        current= current.next;
      }
    }
  }
  insertAfter(value, newVal){
    const newNode= new Node (newVal);
    let current= this.head;
    if(!this.head){
      throw new Error ('__ERROR__ This list is empty!');
    }
    if(this.head.value === value) {
      current.next= newNode;
      return 'New node inserted after.';
    } else{
      while(current.next) {
        if(current.next.value === value){
          current= current.next;
          current.next= newNode;
          return `New node added after ${value}`;
        }
        current= current.next;
      }
    }
  }
  find(value){
    if (!this.head){
      throw new Error('__ERROR__ This list is empty!');
    }
    if(this.head.value === value){
      return `We found ${value} matched this value: ${this.head}!`;
    }
    let current= this.head;
    while(current.next){
      if(current.next.value === value){
        return current.next;
      }
      current= current.next;
      console.log(`Find found your ${value} in the list.`);
    }
    return null;
  }
  append(value){
    const newNode= new Node(value);
    let current= this.head;
    if(this.head === null){
      this.head= newNode;
    }else{
      while(current.next){
        current= current.next;
      }
      current.next= newNode;
      console.log(`Appended node with a value of ${value}`);
      return `added ${value}`;
    }
  }
  mthFromEnd(m){
    if(typeof m === 'number'){
      let acc= 0;
      let curr= this.head;
      while(curr.next){
        acc++;
        curr= curr.next;
      }
      let indexedSearch= acc - m;
      if(indexedSearch >= 0){
        let resultOfSearch= this.head;
        for(let i = 0; i < indexedSearch; i++){
          resultOfSearch= resultOfSearch.next;
        }
        return resultOfSearch.value;
      }else{
        return '__Error__ The linked list is too short for that number!';
      }
    }else{
      return 'You must input a number not a string.';
    }
  }
}
module.exports= LinkList;