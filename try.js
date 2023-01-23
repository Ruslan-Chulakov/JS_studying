// the same method as map, but it can work with array in array.
// and return one array without arrays in it.

// const arrayWithArray = ['element', ['i was deep', 'i was deep too'], 'hello'];
// const justArray = arrayWithArray.flatMap(elem => elem.toLowerCase);

// console.log(justArray);



const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const pink = colorPickerOptions.find(elem => elem.label === 'pink');
console.log( pink);




