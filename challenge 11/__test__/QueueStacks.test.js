'use strict';

const Nodes= require('../lib/nodes');
const Queue = require('../lib/queue');
const Stack= require('../lib/stack');
let stack= new Stack();

describe('Testing the making of a new node', () =>{
  test('Adding a node', ()=>{
    expect(new Nodes(9)).toEqual({ value: 9, next: null });
  })
});
describe('testing the stack', () => {
  test('adding a node to the stack', () => {
    stack.push(13);
    expect(stack.topside.value).toEqual(13);
  });
  test('adding multiple nodes', () => {
    stack.push(4);
    stack.push(7);
    stack.push(23);
    expect(stack.topside.value).toEqual(23);
  });
  test('can pop off', () => {
    stack.pop();
    expect(stack.topside.value).toEqual(7);
  });
  test('can empty list with multiple pops', () => {
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.topside).toEqual(null);
  });
  test('peeking at an empty list return a the value', () => {
    stack.push(17);
    expect(stack.peek()).toEqual(17);
  });
});
describe('test queue', () => {
  let testing = new Queue();
  test('Lets make a queue', () => {
    expect(testing).toEqual({topside: null, bottomside: null});
  });
  test('We can add to the queue', () => {
    testing.enqueue(39);
    expect(testing.topside.value).toEqual(39);
    expect(testing.bottomside.value).toEqual(39);
  });
  test('We can add multiple values to queue', () => {
    testing.enqueue(666);
    testing.enqueue(113);
    expect(testing.topside.value).toEqual(39);
    expect(testing.bottomside.value).toEqual(113);
  });
  test('testing the dequeue function', () => {
    expect(testing.dequeue()).toEqual(39);
    expect(testing.topside.value).toEqual(666);
  });
  test('multiple empties queue', () => {
    expect(testing.dequeue()).toEqual(666);
    expect(testing.dequeue()).toEqual(113);
    expect(testing.dequeue()).toEqual('There is nothing in the Queue at the moment.');
  });
  test('peek works', () => {
    expect(stack.peek()).toEqual(17);
  });
});