const array = ['mak', 'donals', 'room', 'bed', 'fog', 'many', 'grab', 'things', 'swallow'];

for (const char of array) {
    console.log(char);
}
// join make string from array
const joinArray = array.join(' ');
console.log(joinArray);
// split make array from split
const splitArray = joinArray.split(' ');
console.log(splitArray);
// indexOf return index if find value from ()
const indexOfArray = array.indexOf('bed');
console.log(indexOfArray);
// includes return true if find value from () and false if didnt find
const includesArray = array.includes('fog')
console.log(includesArray);
// push added nev value to the end of array
array.push('jin')
console.log(array);
// pop is delite last value of array
const popArray = array.pop()
console.log(popArray);
// slice make a copy of part of array (you need to add start index and end index)
const sliceArray = array.slice(3, 5);
console.log(sliceArray);
// shift is delite the first element of array
const shiftArray = array.shift();
console.log(shiftArray);
// unshift is add element to array on the firs position
const unshiftArray = array.unshift('shm9k');
console.log(array);