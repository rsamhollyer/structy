import Node from './helpers/node.js';

/**
 *
 * @param {Node} head - head of linked list
 * @param {*} target - value to find
 *
 * @returns {boolean} true if target is found, false otherwise
 */
function linkedListFind(head, target) {
  let current = head;
  let isFound = false;

  while (!isFound && current !== null) {
    const { val } = current;
    isFound = val === target;
    current = current.next;
  }

  console.log(isFound);
  return isFound;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, 'd'); // true

const a2 = new Node('a');
const b2 = new Node('b');
const c2 = new Node('c');
const d2 = new Node('d');

a2.next = b2;
b2.next = c2;
c2.next = d2;

// a -> b -> c -> d

linkedListFind(a2, 'q'); // false

const node1 = new Node('jason');
const node2 = new Node('leneli');

node1.next = node2;

// jason -> leneli

linkedListFind(node1, 'jason'); // true

const node12 = new Node(42);

// 42

linkedListFind(node12, 42); // true

const node13 = new Node(42);

// 42

linkedListFind(node13, 100); // false
