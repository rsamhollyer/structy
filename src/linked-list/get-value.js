import Node from './helpers/node-class.js';

// /**
//  *
//  * @param {Node} head
//  * @param {number} index
//  *
//  * @returns {any} value
//  */
// function getNodeValue(head, index) {
//   if (index < 0 || head === null) return null;

//   let current = head;
//   let count = 0;
//   let value = null;

//   while (current !== null) {
//     if (count === index) {
//       value = current.val;
//       break;
//     } else {
//       current = current.next;
//       count++;
//     }
//   }
//   console.log(value);
//   return value;
// }

/**
 *
 * @param {Node} head
 * @param {number} index
 *
 * @returns {any} value
 */
function getNodeValue(head, index) {
  if (typeof index !== 'number' || index < 0) {
    console.log(null);
    return null;
  }

  if (head === null) {
    console.log(null);
    return null;
  }

  if (index === 0) {
    console.log(head.val);
    return head.val;
  }

  return getNodeValue(head.next, index - 1);
}
/* ********************************* */

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 2); // 'c'

const a2 = new Node('a');
const b2 = new Node('b');
const c2 = new Node('c');
const d2 = new Node('d');

a2.next = b2;
b2.next = c2;
c2.next = d2;

// a -> b -> c -> d

getNodeValue(a2, 3); // 'd'

const a3 = new Node('a');
const b3 = new Node('b');
const c3 = new Node('c');
const d3 = new Node('d');

a3.next = b3;
b3.next = c3;
c3.next = d3;

// a -> b -> c -> d

getNodeValue(a3, 7); // null

const node1 = new Node('banana');
const node2 = new Node('mango');

node1.next = node2;

// banana -> mango

getNodeValue(node1, 0); // 'banana'

const node3 = new Node('banana');
const node4 = new Node('mango');

node3.next = node4;

// banana -> mango

getNodeValue(node3, 1); // 'mango'
