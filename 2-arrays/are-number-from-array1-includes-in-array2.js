// Общими элементами массивов называют те элементы, 
// которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] 
// общими будут числа 3 и 5, 
// т.к. они присутствуют в обоих исходных массивах. 
// А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) 
// которая получает два массива произвольной длины 
// в параметры array1 и array2, 
// и возвращает новый массив, состоящий из тех элементов, 
// которые присутствуют в обоих исходных массивах.



function getCommonElements(array1, array2) {
    // Change code below this line
let coincidence = [];
  for (let i = 0; i < array1.length; i += 1) {
    let number = array1[i];
    console.log(number);
    console.log(array2.includes(number))
    if (array2.includes(number)) {
        coincidence.push(number);
    }
  }
  console.log(coincidence);
  return coincidence;
  
   // Change code above this line
  }

getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
getCommonElements([1, 2, 3], [10, 20, 30]);
