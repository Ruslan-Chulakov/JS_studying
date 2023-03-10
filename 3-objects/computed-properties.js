// Бывают ситуации, когда при объявлении обьекта 
// необходимо добавить свойство с именем, 
// которое мы заранее не знаем, 
// потому что оно хранится как значение переменной 
// или как результат выполнения функции.

// Раньше для этого необходимо было сначала создать объект, 
// а потом добавлять свойства через квадратные скобки, 
// что не совсем удобно.

// const propName = "name";
// const user = {
//   age: 25
// };

// user[propName] = "Генри Сибола";
// console.log(user.name); // "Генри Сибола"


// Синтаксис вычисляемых свойств (computed properties) 
// помогает избежать лишнего кода и в некоторых случаях упростить его.
//  Значением вычисляемого свойства 
//  может быть любое валидное выражение.


//  const propName = "name";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Генри Сибола"
// };

// console.log(user.name); // "Генри Сибола"