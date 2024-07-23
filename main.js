import { LinkedList } from "./LinkedList.js";
// append,
// prepend,
// getSize,
// getHead,
// getTail,
// at,
// pop,
// contains,
// find,
// toString,

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("animalLastAppend");

list.prepend("animalPrepend");

console.log(list.getSize());

console.log(list.getHead());

console.log(list.getTail());

console.log(list.at(2));

console.log(list.toString());

list.pop();

console.log(list.contains("animalLastAppend"));
console.log(list.contains("cat"));

console.log(list.find("animalLastAppend"));
console.log(list.find("snake"));

console.log(list.toString());
