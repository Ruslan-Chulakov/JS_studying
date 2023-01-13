// Напиши функцию filterArray(numbers, value), 
// которая принимает массив чисел (параметр numbers) 
// и возвращает новый массив, 
// в котором будут только те элементы массива numbers, 
// которые больше чем значение параметра value (число).


function filterArray(numbers, value) {
    // Change code below this line
let newArray = [];
 for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i])
    if (numbers[i] > value) {
    newArray.push(numbers[i]);
    }
 }
 console.log(newArray);
 return newArray;
 
   // Change code above this line
 }

 filterArray([1, 2, 3, 4, 5], 3);
 filterArray([1, 2, 3, 4, 5], 4);
 filterArray([1, 2, 3, 4, 5], 5);
 filterArray([12, 24, 8, 41, 76], 38);
 filterArray([12, 24, 8, 41, 76], 20);