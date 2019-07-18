'use strict';

const Node = require ('../lib/node');
const LinkList = require ('../lib/linklist');
const MergeList = require('../lib/mergelist');
let linkListA = new LinkList();
let linkListB = new LinkList();

describe('Testing functionality of link lists', () => {
  test('Does it return linkList A if linkList B does not exist', () => {
    linkListA.addNewNodeAtHead(7);
    linkListA.addNewNodeAtHead(5);
    linkListA.addNewNodeAtHead(3);
    linkListA.addNewNodeAtHead(1);
    MergeList(linkListA,linkListB);
    expect(linkListA.head.next.value).toEqual(3);
  });
  test('returns linkListA merged with B', () =>{
    linkListB.addNewNodeAtHead(8);
    linkListB.addNewNodeAtHead(6);
    linkListB.addNewNodeAtHead(4);
    linkListB.addNewNodeAtHead(2);
    MergeList(linkListA,linkListB);
    expect(linkListA.head.next.next.next.value).toEqual(4);
  });
  test('return linkListA merged with B, when B is shorter', () => {
    linkListA = new LinkList();
    linkListB = new LinkList();

    linkListA.addNewNodeAtHead(5);
    linkListA.addNewNodeAtHead(3);
    linkListA.addNewNodeAtHead(1);
    linkListB.addNewNodeAtHead(4);
    linkListB.addNewNodeAtHead(2);

    MergeList(linkListA, linkListB);
    expect(linkListA.head.next.next.value).toEqual(3);
  });
});