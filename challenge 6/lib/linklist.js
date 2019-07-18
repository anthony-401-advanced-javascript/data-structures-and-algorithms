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
          newNode.next= current.next;
          current.next= newNode;
          return `New node added before ${value}`;
        }
        current= current.next;
      }
    }
  }
  insertAfter(value, newVal){
    const newNode= new Node (newVal);
    if(!this.head){
      throw new Error ('__ERROR__ This list is empty!');
    }
    let current= this.head;
    if(this.head.value === value) {
      newNode.next= current.next;
      current.next= newNode;
      return 'New node inserted after.';
    } else{
      while(current.next) {
        if(current.next.value === value){
          current= current.next;
          newNode.next= current.next;
          current.next= newNode;
          return `New node added after ${value}`;
        }
        current= current.next;
      }
    }
  }
  removeNode(value){
    if (!this.head){
      throw new Error('__ERROR__ This list is empty!');
    }
    if(this.head.value === value){
      return `We found ${value} matched this value: ${this.head}!`;
    }else{
      let current= this.head;
      while(current.next){
        if (current.value === value) {
          return `Find found your ${value} in the list.`;
        }
        current= current.next;
      }
      return null;
    }
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
      return `added ${value}`;
    }
  }
}
module.exports= LinkList;