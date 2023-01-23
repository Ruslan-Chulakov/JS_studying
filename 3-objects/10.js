// Перебери объект apartment используя цикл for...in 
// и запиши в массив keys все его ключи, 
// а в массив values все значения его свойств.



const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  // Change code below this line
  
  for (const key in apartment) {
    console.log(key);
    console.log(apartment[key]);
    keys.push(key);
    values.push(apartment[key]);
  }

  console.log('keys is: ' + keys);
  console.log('values is: ' + values)