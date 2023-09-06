import Node from './helpers/node-class.js';

// /**
//  *
//  * @param {Node} head A linked list
//  *
//  * @returns {Node} A reversed linked list
//  */
// function reverseList(head) {
//   if (head === null || head.next === null) return head;

//   const reversedList = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return reversedList;
// }

/**
 *
 * @param {Node} head A linked list
 *
 * @returns {Node} A reversed linked list
 */
function reverseList(head) {
  let current = head;
  let revList = null;

  while (current !== null) {
    const { next } = current;
    current.next = revList;
    revList = current;
    current = next;
  }

  console.log(revList);
  return revList;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

reverseList(a); // f -> e -> d -> c -> b -> a

const x = new Node('x');
const y = new Node('y');

x.next = y;

// x -> y

reverseList(x); // y -> x

const p = new Node('p');

// p

reverseList(p); // p
