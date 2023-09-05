import Node from '../helpers/node.js';

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  traverse() {
    while (this.head) {
      console.log(this.head.val);
      this.head = this.head.next;
    }
  }
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);

ll.traverse();
