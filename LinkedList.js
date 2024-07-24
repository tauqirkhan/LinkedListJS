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
    if (pointer) return pointer.value;
    return null;
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
    if (!head) return "Head is empty";

    let currentIndex = 0;
    let pointer = head;
    while (pointer) {
      if (pointer.value === value) return currentIndex;
      pointer = pointer.nextNode;
      currentIndex++;
    }
    return "Not found";
  };

  const toString = () => {
    let string = "";

    if (!head) return "null";

    let pointer = head;
    while (pointer) {
      string = string.concat(`${pointer.value} -> `);
      pointer = pointer.nextNode;
    }

    let result = string.concat("null");
    return result;
  };

  const insertAt = (value, index) => {
    let indexValue = at(index);

    if (!head) return null;
    if (index === 0) {
      prepend(value);
      return;
    }

    let cur = head;
    let prev = null;

    while (cur && cur.value !== indexValue) {
      prev = cur;
      cur = cur.nextNode;
    }

    if (cur) {
      prev.nextNode = Node(value, cur);
      _size++;
    } else {
      return null;
    }
  };

  const removeAt = (index) => {
    if (!head) return "head is empty";

    if (index < 0 || index >= _size) return "Index out of bound";

    if (index === 0) {
      let temp = head;
      head = head.nextNode;
      temp.nextNode = null;
      _size--;
      return;
    }

    let currentNode = head;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.nextNode;
    }

    const nodeToRemove = currentNode.nextNode;
    currentNode.nextNode = nodeToRemove.nextNode;
    nodeToRemove.nextNode = null;
    _size--;
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
    insertAt,
    removeAt,
    insertAt,
  };
}

export { LinkedList };
