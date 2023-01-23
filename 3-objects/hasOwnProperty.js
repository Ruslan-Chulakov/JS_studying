// Выполни рефакторинг решения предыдущего задания 
// добавив в цикл for...in проверку на собственное свойство.
// задача 11


const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) {
    
  keys.push(key);
  values.push(apartment[key]);
  }

  // Change code above this line
}


// задача 12
// Напиши функцию countProps(object), 
// которая считает и возвращает количество 
// собственных свойств объекта в параметре object. 
// Используй переменную propCount для хранения 
// количества свойств объекта.

function countProps(object) {
    let propCount = 0;
    // Change code below this line
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        propCount += 1;
      }
    }
    // Change code above this line
    return propCount;
  }

// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3