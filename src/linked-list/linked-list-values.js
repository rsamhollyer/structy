import Node from './helpers/node.js';

function linkedListValues(head) {
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }

  console.log(values);
  return values;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]

const x = new Node('x');
const y = new Node('y');

x.next = y;

// x -> y

linkedListValues(x); // -> [ 'x', 'y' ]

const q = new Node('q');

// q

linkedListValues(q); // -> [ 'q' ]

linkedListValues(null); // -> [ ]
