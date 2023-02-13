class Shop {
    // объявление статического св-ва осуществляется как правило перед конструктором,
    // а также с использованием ключевого слова static 
    // и в конце строки ОБЯЗАТЕЛЬНО добавляем точку с запятой.
  
    // СТАТИЧЕСКИЕ свойства хранят в себе данные которые не попадут в экземпляр 
    // также и с методами, которые не нужны в экземпляре, но могут быть использованы
    // для нужд самого класса Н: Object.values, object.keys, Object.getPrototypeOf и др.
    // которые могут быть использованы в теле класса в качестве вспомогательной утилиты
  
      static someProp = 'someValue';
  
    // по такому же принципу осуществляется объявление статических методов.
    // после добавления статического метода, использование точки с запятой не обязательно
      static logInfo (product) {
        console.log(`product.logInfo -> `, product)
      }
  
    // приватные свойства, объявляются вне тела конструктора с использованием символа (#),
    // но не смотря на то что объявление происходит вне конструктора, 
    // эти свойства будут переданы каждому экземпляру, 
    // и будут отображаться в случае обращения к экземпляру,
    // но прочитать его обратившись на прямую или изменить нельзя 
    // (если нет методов предназначенных этой цели)
    // Т.Е. при вызове прототипа, мы сможем увидеть в консоли в перечислении свойств
    // и значений экземпляра наш приватный метод,
    // но обратиться к нему на прямую мы не сможем, также как и попытаться изменить его
  
    #description = 'this is privat property';
  
    //публичные свойства и методы объявляются в теле класса (не в конструкторе)
    // Следует помнить, что оглашение публичного метода, будет буквально копировать
    // этот метод в каждый экземпляр (а это не совсем прям хорошо)
  
    publicProperty = 'I am public, look at me';
  
    constructor({kind, name, price, shelf} = {}) {
      this.kind = kind,
      this.name = name,
      this.price = price,
      this.shelf = shelf
    }
  
    changePrice(newPrice) {
      this.price = newPrice
    }
  
    updateShelf(newShelf) {
      this.shelf = newShelf
    }
  
    // использовать приватные свойства можно через методы
    showPrivat() {
      console.log(this.#description);
    }
  };
  
  const grapes = new Shop({kind: 'vegitable', name: 'grape', price: 120, shelf: '8F'})
  console.log(grapes);
  
  
  // // привязываем прототип grapes к классу
  // console.log(Object.getPrototypeOf(grapes));
  // console.log(Object.getPrototypeOf(grapes) === Shop.prototype);
  
  grapes.changePrice(125);
  console.log(`we can see new price` ,grapes);
  
  console.dir(Shop);
  
  grapes.updateShelf('13U');
  console.log(`we can see new shelf`, grapes)
  
  
  // вызовем статическое свойство
  
  console.log('содержимое статического свойства:', Shop.someProp);
  
  // вызовем статический метод, передав ему в кач аргумента наш объект.
  
  Shop.logInfo(grapes);
  
  // пробуем увидеть наличие приватного свойства внутри эеземпляра
  console.log(grapes);
  
  // пробуем увидеть приватное свойство обратившись к нему на прямую
  
  // console.log(grapes.description); //undefind
  // console.log(grapes.#description); // SyntaxError
  
  // используем метод который отобразит содержимое нашего приватного свойства
  // не забываем указывать контекст
  
  grapes.showPrivat();