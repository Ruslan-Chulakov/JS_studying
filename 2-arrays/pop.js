const array = [1, 2, 3, 20, 100, 500, 8];
console.log(`our array before operations ${array}`);
const deletedElement = array.pop();
console.log(array);
console.log(`element which was deleted from array by using pop() is ${deletedElement}`);
console.log(`pop always delete last element of array and return array length`);
const oneMoreDeletedElement = array.pop();
console.log(array);

const array1 = [];
console.log(`if array is empty, pop return`);
console.log(array1.pop());