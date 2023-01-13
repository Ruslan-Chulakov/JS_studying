// Напиши функцию getEvenNumbers(start, end) 
// которая возвращает массив всех чётных чисел от start до end. 
// Чётным считается число 
// которое делится на 2 без остатка (10 % 2 === 0).


function getEvenNumbers(start, end) {
    // Change code below this line
    const array = [];
    for (let i = start; i <= end; i += 1) {
        console.log(i)
        if (i % 2 === 0) {
            array.push(i);
        }
    }
 console.log(array);
 return array;
 
     // Change code above this line
   }

   getEvenNumbers(2, 5);
   getEvenNumbers(3, 11);
   getEvenNumbers(6, 12);
   getEvenNumbers(8, 8);
   getEvenNumbers(7, 7);