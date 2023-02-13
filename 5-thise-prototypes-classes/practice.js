const mandalorian = {phrase: 'that the pass'};

const showPhrase = function() {
   console.log(this.phrase);
   return this.phrase
}

showPhrase.call(mandalorian)
showPhrase.apply(mandalorian)

const mondoPhrase = showPhrase.bind(mandalorian);
console.log(mondoPhrase());




// var student = {
   //   name: "David Rayy",
   //   sclass: "VI",
   //   rollno: 12,
   // };
   
   // 1. Write a JavaScript program to list the properties of a JavaScript object.
   
   // const objKeys = Object.keys(student);
   // console.log(objKeys.join(', '))
   
   // 2. Write a JavaScript program to delete the rollno property
   // from the following object.
   // Also print the object before or after deleting the property.
   
   // delete(student.rollno);
   // console.log(student)
   // delete(student.name)
   
   // console.log(student)
   
   // 3. Write a JavaScript program to get the length of a JavaScript object.
   
   // const studentLength = Object.keys(student).length;
   // console.log(studentLength);
   
   // 4. Write a JavaScript program to display the reading status
   // (i.e. display book name, author name and reading status)
   // of the following books.
   
   // const library = [
   //   {
   //     author: "Bill Gates",
   //     title: "The Road Ahead",
   //     readingStatus: true,
   //   },
   //   {
   //     author: "Steve Jobs",
   //     title: "Walter Isaacson",
   //     readingStatus: true,
   //   },
   //   {
   //     author: "Suzanne Collins",
   //     title: "Mockingjay: The Final Book of The Hunger Games",
   //     readingStatus: false,
   //   },
   // ];
   
   
   // })
   // library.forEach(book => {
   //   if(book.readingStatus) {
   //     return console.log(`already read this book of ${book.author} named: ${book.title}`)
   //   }
   //   return console.log(`You still need to read this book of ${book.author} named: ${book.title}`)
   // }
   
   // )
   
   // library.forEach(book => {
   // return  book.readingStatus 
   // ? console.log(`already read this book of ${book.author} named: ${book.title}`) 
   // : console.log(`You still need to read this book of ${book.author} named: ${book.title}`);
   // });
   
   
   // 5. Write a JavaScript program 
   // to get the volume of a Cylinder with four decimal places using object classes.
   
   
   // class Shop {
    
   //   publicProperty = 'I am public, look at me';
   
   //   constructor({kind, name, price, shelf} = {}) {
   //     this.kind = kind,
   //     this.name = name,
   //     this.price = price,
   //     this.shelf = shelf
   //   }
   
   //   changePrice(newPrice) {
   //     this.price = newPrice
   //   }
   
   //   updateShelf(newShelf) {
   //     this.shelf = newShelf
   //   }
   
     // Геттеры и сеттеры, это функции которые идут в паре
     // и позволяют получать доступ к свойствам или изменять значение свойства
     // не на прямую а через фн
     // Геттер или сеттер не могут иметь имя, которое совпадает с именем свойства, 
     // к которому они обращаются
   
     // гетер и сетер используются для некого упрощения синтаксиса,
     // чтобы уйти от использования обращения к методам, 
     // и перейти на обращение к свойствам (не используем пузатые скобки"()")
   
   //   get priceOut() {
   //     return this.price
   //   }
   
   //   set priceOut(newPrice) {
   //     this.price = newPrice
   //   }
   // };
   
   // const grapes = new Shop({kind: 'vegitable', name: 'grape', price: 120, shelf: '8F'})
   // console.log(grapes);
   
   // // используем геттер
   
   // console.log(grapes.priceOut)
   
   // // используем сеттер, изменяем цену и потом выводим через геттер в консоль, 
   // // чтоб увидеть изменения
   
   // grapes.priceOut = 142;
   // console.log(grapes.priceOut)
   
   
   
   // class Car {
   //   static #MAX_PRICE = 50000;
   //   // Change code below this line
   //   static checkPrice(price) { return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits";
   //   }
   //   // Change code above this line
   //   constructor({ price }) {
   //     this.price = price;
   //   }
   // }
   
   // const audi = new Car({ price: 36000 });
   // const bmw = new Car({ price: 64000 });
   
   // console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
   // console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
   
   
   
   
   
   
   
   // const mainObject = {
   //   addProp(newProp, value) {
   //     this.newProp = value
   //   }
   // }
   
   
   // mainObject.addProp(name, 'Makar');
   // console.log(mainObject)
   
   // function showThisGlobal() {
   //   console.log(this);
   // }
   
   // showThisGlobal();
   
   
   // const cow = {
   //   name: 'Dorathy',
   //   age: 4,
   //   waight: 260 
   // };
   
   // function showName() {
   //   console.log(this.name)
   // };
   // function changeAge(newAge) {
   //   this.age = newAge;
   // };
   
   // showName.call(cow);
   
   // changeAge.call(cow, 5);
   // console.log(cow)
   
   // changeAge.apply(cow,[7]);
   // console.log(cow);
   
   // const saveNewAge = changeAge.bind(cow, 8);
   // console.log(cow)
   // console.log(s)






   // +=================================================================


   // function inGlobal() {
// //   console.log(this);
// // }
// // inGlobal(); //undefind

// // const obj = {
// //   property1: 'val1',
// //   property2: 'val2',
// //   property3: 'val3',
// //   showThis () {
// //     console.log(this);
// //   }
// // };

// // // obj.showThis(); //{property1: 'val1', property2: 'val2', property3: 'val3', showThis: ƒ}



// // const person = {
// //   firstName: 'Tony',
// //   secondName: 'Stark',
// //   showProp() {
// //     console.log(`Hello ${this.firstName} ${this.secondName}`);
// //     return `Hello ${this.firstName} ${this.secondName}`
// //   }
// // };

// // // console.log(person.showProp());

// // function message(callback) {
// //   callback();
// // };

// // // message(person.showProp); //error cant read undefined.firstName 

// // // message(person.showProp.call(person));


// // console.log(person.showProp.call(person))





// function pockeboll () {
//   console.log(this);
// }

// pockeboll();

// const obja = {
//   name:'incognito', 
//   power: 'uncnown',

//   showThis() {
//     console.log(this);
//   }
// };

// obja.showThis();


// const rocket = {
//   type: 'sky - ground',
//   weight: '850kg',

//   rocketInfo() {
//     console.log(`type of rocket: ${this.type}, and its weight: ${this.weight}`);
//   }
// }

// rocket.rocketInfo();

// const cheetCode = rocket.rocketInfo.bind(rocket);
// function omg(callback) {
//   callback();
// };

// omg(cheetCode);

// // console.log(rocket.__proto__);
// // console.log(rocket.rocketInfo);
// // console.log(omg.prototype);

// const newRocket = Object.create(rocket);
// console.log(newRocket);
// newRocket.speed = '800 km/h';
// console.log(newRocket);
// console.log(newRocket.__proto__);

// // for(const prop in rocket) {
// //   console.log(prop);
// // };

// // for(const prop in newRocket) {
// //   console.log(prop)
// // }

// for(const prop in newRocket) {
//   console.log(newRocket.hasOwnProperty(prop))
//   if(newRocket.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }