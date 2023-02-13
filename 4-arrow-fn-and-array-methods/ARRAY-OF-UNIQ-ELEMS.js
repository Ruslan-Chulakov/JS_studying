const woop = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
      age: 21
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
      age: 27
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
      age: 38
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
      age: 39
    }
  ]
  
  
  
  
  
  
  
  // const getFriends = (users) => {
    
  //   const allFriends = users.flatMap(user => user.friends);
  //   const allUniqFriends = allFriends.filter((friend, index) => allFriends.indexOf(friend) === index);
  //   return allUniqFriends
  // };
  
  
  const getFriends = (users) => {
    const allFriends = users.flatMap(elem => elem.friends);
    console.log(allFriends);
    // фильтруем список всех друзей. Хотим чтоб в списке небыло повторяющихся имён.
    // Условием фильтра является сравнение текущего индекса итерации,
    // с индексом полученным при помощи метода файндИндекс,
    // который в исходном массиве метода фильтр (array) ищет первое совпадение,
    // по условию => el - (который является значением элемента массива,
    // на определенной итерации во время выполнения метода findIndex для исходного массива из метода filter ) 
    // с element - (который является значением элемента массива на определенной итерации
    // во время выполнения метода filter). Если значения этих элементов строго равны друг другу,
    // то результатом выполнения метода  findIndex вернется индекс Первого совпадения.
    // далее мы возвращаемся к сравнению значения index (который является по сути номером итерации
    // метода filter) с индексом полученным в результате выполнения findIndex.
    // если значения обоих индексов строго равны, то условие вернёт тру
    // и результат (элемент текущей итерации метода filter) запишется в новый массив.
    return allFriends.filter((element, index, array) => index === array.findIndex(el => element === el));
  }
  
  
  
  
  
  // const getFriends = (users) => {
  //   const allFriends = users.flatMap(elem => elem.friends);
  //   // Set возвращает объект с уникальными значениями переданного в него аргумента
  //   const result = new Set(allFriends);
  //   // Array.from(objName) преобразовывает объект в массив
  //   const resultArr = Array.from(result);
   
  //   return resultArr
  // }
  
  console.log(getFriends(woop))
  
  
  
  
  
  
  // Timofey solution
  
  
  // const getFriends = (users) => {
  //   const allTheFriends = users.flatMap(user => user.friends);
  //   return allTheFriends.filter((friend, nowIndex, array) => {
  //     const theIndex = array.findIndex((item) => item === friend);
  //     console.log(theIndex);
  //     return theIndex === nowIndex;
  //   });
  // };
  // console.log(getFriends(woop))
  