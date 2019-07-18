'use strict';
const Node= require ('./node');
const LinkList= require ('./linklist');

let linkListA= new LinkList();
let linkListB= new LinkList();

const mergeLists = function(a, b){
  if(a.head && b.head === null){
    return '__ERROR__ No link lists were entered';
  }else if(a.head === null){
    return b;
  }else if(b.head === null){
    return a;
  }else{
    let currA = a.head;
    let currB = b.head;

    while(currB !== null){
      let refA = currA.next;
      let refB = currB.next;
      currA.next = currB;
      currA.next.next = refA;
      currB = refB;
      currA = currA.next.next;
      }
      return a;
    }
};

module.exports= mergeLists;