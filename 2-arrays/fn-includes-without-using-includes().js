// Напиши функцию includes(array, value), 
// которая делает тоже самое, 
// что и метод массива массив.includes(значение) - 
// проверяет, есть ли в массиве array значение value, 
// возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() 
// нельзя использовать метод массив.includes(значение).



function includes(array, value) {
    // Change code below this line
    let result = false;
     for (let val of array) {
        // console.log(val)
        if (val === value) {
          result = true;
          console.log(result);
          break;
        } else {
          result = false;
          console.log(result);
          continue;
        }
      }
    return result;
    // Change code above this line
  }
    
  
  
  
  includes([1, 2, 3, 4, 5], 3);
  includes([1, 2, 3, 4, 5], 17);
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
  includes(["apple", "plum", "pear", "orange"], "plum");
  includes(["apple", "plum", "pear", "orange"], "kiwi");