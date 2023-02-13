const hotel = {
    username: "Resort hotel",
    scope: 'this is scope for showThis function',
    showThis() {
      const foo = () => {
        // Стрелки запоминают контекст во время объявления,
        // из родительской области видимости
        // То есть фактически мы во время объявления стрелочной функции foo 
        // просто записываем область видимости его родителя, 
        // коим является НЕ СТРЕЛОЧНАЯ функция showThis (она же метод объекта).
        console.log("this in foo: ", this);
      };
  
      foo();
      console.log("this in showThis: ", this);
    },
  };
  
  hotel.showThis();
//   console.log(hotel.showThis());