// Паттерн "Объект настроек"

// применяется в случаях, когда у функции 3 и больше аргумента

// const showProfileInfo = function (userProfile) {
//   console.log(userProfile);
// };

const profile = {
    name: "Jack London",
    tag: "JLon",
    location: "Rio",
    avatar: "https://picture.link/smile/fun.jpg",
    stats: {
      followers: 5602,
      views: 1524,
      likes: 870,
    },
  };
  
  // showProfileInfo(profile);
  
  // деструктуризация в подписи функции
  
  // const showProfileInfo = function ({ name, tag, location, avatar, stats }) {
  //   console.log(name, tag, location, avatar, stats);
  // };
  
  // showProfileInfo(profile);
  
  // деструктуризация в теле функции
  
  // const showProfileInfo = function (userProfile) {
  //   const {
  //     name,
  //     tag,
  //     location,
  //     avatar,
  //     stats: { followers, views, likes },
  //   } = userProfile;
  
  //   console.log(name, tag, location, avatar, followers, views, likes);
  // };
  
  // showProfileInfo(profile);
  
  
  // если нам нет необходимости деструктуризировать все элементы объекта,
  // можем собрать оставшиеся без деструктуризации свойства например в переменную рестПропс
  
  
  const showProfileInfo = function (userProfile) {
    const {
      name,
      tag,
      location,
      ...restProps
    } = userProfile;
  
    console.log(name, tag, location);
    console.table(restProps);
  };
  
  showProfileInfo(profile);
  