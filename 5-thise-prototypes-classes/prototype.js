
// 1. описываем схему (создаем конструктор (класс))
// 2. в прототип (в свойство prototype) конструктора добавляем по необходимости методы (функции)  
// 3. через new создаем экземпляры у которых есть одинаковый набор свойств но с разными значениями,
// а также доступ к методам которые лежат в прототипе конструктора




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ФУНКЦИИ КОНСТРУКТОРЫ
// функциям конструкторам дают имя которое начинается с большой буквы,
// и которое является существительным, отвечает на вопрос ЧТО?

// для удобства как правило используется принцип ОБЪЕКТ ПАРАМЕТРОВ,
// т.е. вместо оглашения множества параметров, мы ожидаем один,
// который будет являться объектом.

// также для удобства сразу в сигнатуре функции проводим деструктуризацию, 
// которая избавит нас в будущем от переиспользования (this.)

// также для удобства и подстраховки назначаем значение по умолчанию для нашего параметра

const Car = function ({brand, model, price} = {}) {

    // также в случае необходимости можем выполнить деструктуризацию в теле функции
    // const {brand, model, price} = parametrName;
  
    // 2. функция вызывается в контексте созданного объекта,
    // то есть в this записывается ссылка на него.
  
    this.brand = brand;
    this.model = model;
    this.price = price;
    
    // Всё что объявляется в теле класса, будет скопировано в каждый экземпляр
  
    // 4. Ссылка на объект возвращается вместо вызова (new Car) 
    // Например ----const myCar = new Car(...)----
  };
  
  // 1. Если функция вызывается через new, создается новый, пустой объект
  // в который можно что то записывать
  
  const myCar = new Car({
    brand: 'audi',
    model: 'a6',
    price: 8000
  })
  console.log(myCar);
  console.log('before adding function sayHi we see:', Car.prototype)
  
  // Car.prototype можно использовать для создания общих методов,
  // которые при этом не будут копироваться в каждый новый экземпляр
  
  // для примера создадим метод в Car.prototype, 
  // который в дальнейшем будет доступен для каждого экземпляра, 
  // но не будет скопирован в него.
  
  // Car.prototype МОЖНО И НУЖНО ИСПОЛЬЗОВАТЬ КАК ХРАНИЛИЩЕ МЕТОДОВ (и возможно не только).
  
  Car.prototype.sayHi = function () {
    console.log(`i want to see "this" from sayHi`, this)
    console.log('HELLO');
  }
  
  // Можем увидеть что в Car.prototype появилась функция,
  // которая теперь будет доступна для каждого эеземпляра
  console.log('after adding function sayHi', Car.prototype)
  // и мы получаем возможность вызывать функцию в контексте нужного нам экземпляра
  myCar.sayHi()
  
  
  const myCar2 = new Car({brand: 'volcswagen', model: 'passat B7', price: 12000});
  console.log(myCar2);
  myCar2.sayHi()
  
  const myCar3 = new Car({brand: 'volvo', model: 'cx70', price: 9000});
  console.log(myCar3);
  myCar3.sayHi()
  
  // 3. В свойство this.__proto__ записывается ссылка на объект Car.prototype,
  // тоесть Car.prototype это прототип будущего объекта (экземпляра).
  
  
  
  
  
  
  
  
  
  
  // свойство prototype есть только у функций (функций конструкторов)
  // console.log('prototype property in function', Car.prototype);
  // // у объектов свойство __proto__
  // console.log('__proto__ property in object', myCar.__proto__);
  
  // во время вызова (new Car) автоматически происходит привязывание прототипа
  // функции к прототипу объекта через ссылку
  // тоесть после использования (new Car) создается новый, пустой, объект
  // который автоматически привязывается к функции конструктору (КЛАССУ) Car
  
  
  // добавим в наш прототайп функцию (метод) для изменения цены
  // Важно не забыть указать this, так как метод будет использоваться
  // в контексте нужного нам экземпляра
  
  Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
  }
  
  console.log(Car.prototype);
  
  
  
  // we have new price, let change it
  
  console.log(myCar3.price)
  
  myCar3.changePrice(8500);
  
  console.log(myCar3.price);





  // ===========================================================================

  
const Zoo = function ({who, name, cajeNumber} = {}) {
  this.who = who,
  this.name = name,
  this.cajeNumber = cajeNumber
}

console.log(Zoo.prototype);

Zoo.prototype.show = function() {
  console.log(this.who);
  console.log(this.name);
  console.log(this.cajeNumber);
}

console.log(Zoo.prototype);

const animal1 = new Zoo({who: 'slonio', name: 'Bambi', cajeNumber: 16 });

animal1.show();

const animal2 = new Zoo({who: 'snake', name: 'Nagaina', cajeNumber: 11});
animal2.show();

Zoo.prototype.changeCajeNumber = function(newNumber) {
  this.cajeNumber = newNumber;
}

console.log(Zoo.prototype)

animal2.changeCajeNumber(13);
animal2.show()