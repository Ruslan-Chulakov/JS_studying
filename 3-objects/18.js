
// Напиши функцию getProductPrice(productName) 
// которая принимает один параметр productName - название продукта. 
// Функция ищет объект продукта с таким именем (свойство name) 
// в массиве products и возвращает его цену (свойство price). 
// Если продукт с таким названием не найден, 
// функция должна возвращать null.



const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  let message = null;
 for (const product of products) {

    if (product.name=== productName) {
      message = product.price;
      console.log(message);
      return message
    }
  }
    
console.log(message);

  // Change code above this line
}

getProductPrice("Radar");
getProductPrice("Grip");
getProductPrice("Scanner");
getProductPrice("Droid");
getProductPrice("Engine");