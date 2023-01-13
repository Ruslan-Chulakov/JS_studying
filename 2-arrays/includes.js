// Функция checkFruit(fruit) принимает строку 
// с названием фрукта (параметр fruit), 
// и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.


function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];
    // console.log(fruits.includes(fruit));
    return fruits.includes(fruit); // Change this line
  }

  checkFruit("plum");
  checkFruit("mandarin");
  checkFruit("pear");