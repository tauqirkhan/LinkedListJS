import { Node } from "./Node.js";

function LinkedList() {
  let head = null;
  let _size = 0;

  const append = (value) => {
    const newNode = Node(value);
    if (head === null) head = newNode;
    else {
      let pointer = head;
      while (pointer.nextNode) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
    }
    _size++;
  };

  const prepend = (value) => {
    const newNode = Node(value, head);
    if (!head) head = newNode;
    head = newNode;
    _size++;
  };

  const getSize = () => _size;

  const getHead = () => {
    if (!head) return null;
    return head.value;
  };

  const getTail = () => {
    if (!head) return null;
    let pointer = head;
    while (pointer.nextNode) {
      pointer = pointer.nextNode;
    }
    return pointer.value;
  };

  const at = (index) => {
    if (index < 0 || index > _size) return null;
    let currentIndex = 0;
    let pointer = head;
    while (currentIndex < index && pointer !== null) {
      pointer = pointer.nextNode;
      currentIndex++;
    }
    return pointer.value;
  };

  const pop = () => {
    if (!head) return;
    if (!head.nextNode) head = null;
    else {
      let pointer = head;
      while (pointer.nextNode.nextNode) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = null;
    }
    _size--;
  };

  const contains = (value) => {
    if (!head) return false;

    let pointer = head;
    while (pointer) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    }

    return false;
  };

  const find = (value) => {
    if (!head) return null;
    if (head.value === value) return 0;

    let currentIndex = 1;
    let pointer = head;
    while (pointer) {
      if (pointer.value === value) return currentIndex;
      pointer = pointer.nextNode;
      currentIndex++;
    }
    return null;
  };

  const toString = () => {
    let string = "";

    if (!head) return "null";

    let pointer = head;
    while (pointer.nextNode) {
      string = string.concat(`${pointer.value} -> `);
      pointer = pointer.nextNode;
    }

    let result = string.concat("null");
    return result;
  };

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
  };
}

export { LinkedList };
