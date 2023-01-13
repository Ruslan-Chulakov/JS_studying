// Дополни код функции createArrayOfNumbers(min, max) так, 
// чтобы она возвращала массив всех целых чисел 
// от значения min до max.
function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
    for (let i = min; i <= max; i += 1) {
        numbers.push(i);
    }
    // Change code above this line
    console.log(numbers);
    return numbers;
  }
  createArrayOfNumbers(1, 3)
  createArrayOfNumbers(14, 17)
  createArrayOfNumbers(29, 34)
  