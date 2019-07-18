'use strict';

const Node = require('../lib/node');
const LinkList = require('../lib/linklist');
const linkList = new LinkList();

linkList.addNewNodeAtHead(27);
linkList.addNewNodeAtHead(25);
linkList.addNewNodeAtHead(23);
linkList.addNewNodeAtHead(22);
linkList.addNewNodeAtHead(21);
linkList.addNewNodeAtHead(20);
linkList.addNewNodeAtTail(28);
linkList.append(30);
linkList.insertBefore(30, 29);
linkList.insertAfter(22, 23);

describe('Linked List Insertion', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    expect(linkList.append(31)).toEqual('added 31');
  });
  it('Can successfully add multiple nodes to the end of a linked list',() => {
    expect(linkList.append(32)).toEqual('added 32');
    expect(linkList.append(33)).toEqual('added 33');
    expect(linkList.append(34)).toEqual('added 34');
  });
  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    expect(linkList.insertBefore(25, 24)).toEqual('New node added before 25');
  });
  it('Can successfully insert a node before the first node of a linked list', () => {
    expect(linkList.addNewNodeAtHead(19)).toEqual('Added 19 to head');
  });
  it('Can successfully insert after a node in the middle of the linked list', () => {
    expect(linkList.insertAfter(25, 26)).toEqual('New node added after 25');
  });
  it('Can successfully insert a node after the last node of the linked list', () => {
    expect(linkList.addNewNodeAtTail(36)).toEqual(`Added 36 to tail.`);
  });
  it('Can successfully insert a node after the last node of the linked list', () => {
    expect(linkList.removeNode(36)).toEqual(`Added 36 to tail.`);
  });
});