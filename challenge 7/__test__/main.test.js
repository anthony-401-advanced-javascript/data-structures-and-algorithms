'use strict';

const Node = require('../lib/node');
const LinkList = require('../lib/linklist');
const linkList = new LinkList();
const linkList2 = new LinkList();

linkList.addNewNodeAtHead(27);
linkList.addNewNodeAtHead(25);
linkList.addNewNodeAtHead(23);
linkList.addNewNodeAtHead(22);
linkList.addNewNodeAtHead(21);
linkList.addNewNodeAtHead(20);
linkList.find(23);
linkList.addNewNodeAtTail(28);
linkList.append(30);
linkList.insertBefore(30, 29);
linkList.insertAfter(30, 31);

describe('Linked List Length check', () => {
  it('passed NaN', () => {
    expect(linkList.kthFromEnd('hello')).toEqual('You must input a number not a string.');
  });
  it('passed a number too large', () => {
    expect(linkList.kthFromEnd(300)).toEqual('__Error__ The linked list is too short for that number!');
  });
  it('passed a number that is not a positive integer', () => {
    expect(linkList.kthFromEnd(-4)).toEqual('__Error__ The number provided is not a positive number!')
  });
  it('passed a valid input', () => {
    let resultOfSearch = linkList.kthFromEnd(3);
    expect(resultOfSearch).toEqual(28);
  });
  it('the link list is length of 1', () => {
    linkList2.addNewNodeAtHead(20);
    let resultOfSearch = linkList2.kthFromEnd(3);
    expect(resultOfSearch).toEqual('__Error__ The linked list has a length of 1, there is no kth from the end to search for.');
  });
});