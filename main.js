import { LinkedList } from "./LinkedList.js";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("animalLastAppend");

console.log(`test append(): ${list.toString()}`);

list.prepend("animalPrepend");
console.log(`test prepend(): ${list.toString()}`);

console.log(`test getSize(): ${list.getSize()}`);

console.log(`test getHead(): ${list.getHead()}`);

console.log(`test at(2): ${list.at(2)}`);

console.log(`test pop() before: ${list.toString()}`);
list.pop();
console.log(`test pop() after: ${list.toString()}`);

console.log(
  `test contains() "animalLastAppend": ${list.contains("animalLastAppend")}`
);
console.log(`test contains() "cat": ${list.contains("cat")}`);

console.log(`test find() "animalLastAppend": ${list.find("animalLastAppend")}`);
console.log(`test find() "snake": ${list.find("snake")}`);

console.log(`test insertAt(0) "firstValue" before: ${list.toString()}`);
list.insertAt("firstValue", 0);
console.log(`test insertAt(0) "firstValue" after: ${list.toString()}`);

console.log(`test removeAt(1) "1" before: ${list.toString()}`);
list.removeAt(1);
console.log(`test removeAt(1) "1" after: ${list.toString()}`);
