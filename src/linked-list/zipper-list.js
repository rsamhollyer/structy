import Node from './helpers/node.js';

/**
 *
 * @param {Node} head1
 * @param {Node} head2
 *
 * @returns {Node}
 */
// function zipperLists(head1, head2) {
//   let tail = head1;
//   let current1 = head1.next;
//   let current2 = head2;
//   let counter = 0;

//   while (current1 !== null && current2 !== null) {
//     if (counter % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }

//     tail = tail.next;
//     counter++;
//   }

//   if (current1 !== null) {
//     tail.next = current1;
//   } else if (current2 !== null) {
//     tail.next = current2;
//   }

//   console.log(head1);
//   return head1;
// }

const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) {
    return null;
  }

  if (head1 === null) {
    return head2;
  }

  if (head2 === null) {
    return head1;
  }

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;

  head2.next = zipperLists(next1, next2);

  console.log(head1);
  return head1;
};

/* ******************************************* */

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node('x');
const y = new Node('y');
const z = new Node('z');
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z

const a2 = new Node('a');
const b2 = new Node('b');
const c2 = new Node('c');
const d2 = new Node('d');
const e2 = new Node('e');
const f2 = new Node('f');
a2.next = b2;
b2.next = c2;
c2.next = d2;
d2.next = e2;
e2.next = f2;
// a -> b -> c -> d -> e -> f

const x2 = new Node('x');
const y2 = new Node('y');
const z2 = new Node('z');
x2.next = y2;
y2.next = z2;
// x -> y -> z

zipperLists(a2, x2);
// a -> x -> b -> y -> c -> z -> d -> e -> f

const s = new Node('s');
const t = new Node('t');
s.next = t;
// s -> t

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

zipperLists(s, one);
// s -> 1 -> t -> 2 -> 3 -> 4

const w = new Node('w');

// w

const one1 = new Node(1);
const two2 = new Node(2);
const three3 = new Node(3);
one1.next = two2;
two2.next = three3;
// 1 -> 2 -> 3

zipperLists(w, one1);
// w -> 1 -> 2 -> 3
