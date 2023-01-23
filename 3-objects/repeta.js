// create object
// const playlist = {
//   name: 'my playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// }

// console.log(playlist); //showing object

// console.log(playlist.name); // showing value of property 'name' from object
// console.log(playlist.tracks); // showing value of property 'tracks' from object

// key of property is always string!!!! ('name', 'rating', .......)
// one more way

// console.log(playlist['trackCount']);
// console.log(playlist['rating']);

// const propertyName = 'tracks';
// console.log(playlist[propertyName]);

// const propertyWay = playlist.tracks;
// console.log(propertyWay)

// =========================================================
// making a short sign

// const username = 'Mango';
// const email = 'mango@gmail.com';

// const signUpData = {
//   username: username,
//   email: email,
// };

// short sign is

// const signUpData = {
//   username,
//   email,
// }

// console.log(signUpData);
// =========================================================

// вычисляемые свойства
// если будем изменять значения
// <input name="color" value="tomato">

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// }

// console.log(colorPickerData);

// ==========================================================

// добавление свойств со значениями в объект

// playlist.isOnSpotify = true;

// console.log(playlist);

// ==========================================================

// сложные объекты не равны друг другу,
// так как объект это ссылка на ячейку в памяти.
// и если сравнить на строгое равенство два внешне одинаковых объекта
// результатом будет фолс, так как буквально это разные ссылки на ячейки памяти,
// равенство можно получить присвоив один и тот же объект разным переменным

// console.log( {} === {} );  //false
// console.log([] === []);    //false

// const a = {};
// const b = a;
// console.log(a === b);      //true

// ==========================================================

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = 'smile';

// console.dir(fn);

// console.dir(fn.hello);

// ===========================================================
// const playlist = {
//   name: 'my playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
//   //функция которая будет изменять имя плэйлиста
//   // используется обращение this вместо playlist
//   //это доступно только внутри функций которые в объекте.
//   changeName(newName) {
//     this.name = newName;
//   },

//   // функция добавления нового трека
//   // который также вносит обновленную информацию о колличестве треков
//   addTrack(track) {
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length;
//   },

//   // функция обновления рейтинга
//   updateRating(value) {
//     this.rating = value;
//   },

//   // вместо того чтоб хранить в объекте информацию о кол-ве треков
//   // мы можем создать функцию, которая при её вызове будет давать нам
//   // фактическое кол-во треков
//   getTrackCount() {
//     return this.tracks.length
//   }
// }

// console.log(playlist);

// playlist.changeName('neeeew playlist name');
// console.log(playlist);

// playlist.changeName('namaName');
// console.log(playlist);

// playlist.addTrack('new-track');
// console.log(playlist.tracks);

// playlist.addTrack('one-more-track');
// console.log(playlist.tracks);

// playlist.updateRating(4);
// console.log(playlist.rating);

// playlist.updateRating(4.5);
// console.log(playlist.rating);

// console.log(playlist.trackCount);

// console.log(playlist.getTrackCount());

// ===============================================

// Перебор объектов

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// // преобразовываем объект в массив ключей
// const keys = Object.keys(feedback);    //получи массив ключей из объекта фидбэк
// console.log(keys);

// // перебираем при помощи привычных фор, фор...оф
// for (let key of keys) {
//   console.log(`name of property (key): ${key}`)
//   // чтоб получить значение ключа (свойства) используем квадратные скобки
//   console.log(`value of property (key): ${feedback[key]}`);

//   // подсчет общего кол-ва отзывов
//   totalFeedback += feedback[key];

// }

// console.log(totalFeedback);

// // можно сразу получить массив значений, которые находятся в объекте
//  const values = Object.values(feedback);
//  console.log(values);

// //  это позволяет найти общее кол-во отзывов используя меньше кода
// let totFeedback = 0;

// for (let val of values) {
//   totFeedback += val;
// }

// console.log(totFeedback);

// ======================================================================

// Работа с массивами объектов

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Poly", online: true },
//   { name: "Kiwi", online: true },
//   { name: "Ajax", online: false },
// ];

// // можно добавить свойство во второй элемент объекта как массиву
// friends[1].newProp = 333;

// console.table(friends);

// // переберём массив
// // при переборе в фор офе мы в значении френд получаем ссылку на элемент массива,
// // а значит мы можем добавить свойство, изменить свойство, обновить свойство.
// for (let friend of friends) {
//   // console.log(friend);

//   // на каждой итерации к каждому перебираемому объекту добавим новое свойство со значением
//   friend.newProp = 777;
// }

// console.table(friends);

// Ищем друга по имени

// const findFriendByName = function (allFriends, name) {

//   for (let friend of allFriends) {
//     console.log(friend);

//     if (friend.name === name) {
//       return 'I find this friend in list!!!';
//     }
//   }
//   return 'Nope, this is not our friend';
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Zack'));

// ==========================================================

// Получаем имена всех друзей
// хотим получить массив с именами
// const names = [];

// const getAllNames = function (allFriends) {

//   for (let friend of allFriends) {
//     // console.log(friend);
//     console.log(friend.name)
//     names.push(friend.name);
//   }
//   console.log(names);
//   return names;
// }

// getAllNames(friends);

// ============================================================

// Получить имена друзей которые находятся онлайн

// const online = [];

// const friendsOnline = function (allFriends) {
//   for (let friend of allFriends) {

//     //if (friend.online === true) рабочая запись,
//     // но т.к. в массиве объектов и так значения тру или фолс,
//     // можно использовать сокращенную запись

//     if (friend.online) {
//       online.push(friend.name);
//     }
//   }
//   console.log(online)
//   return online;
// }

// friendsOnline(friends);

// ============================================================

// получить имена друзей которые находятся офлайн

// const offline = [];

// const friendsOffline = function (allFriends) {
//   for (let friend of allFriends) {

//     if (!friend.online) {
//       offline.push(friend.name);
//     }
//   }
//   console.log(offline)
//   return offline;
// }

// friendsOffline(friends);

// ============================================================

// вернуть объект внутри которого 2 массива, один с онлайн другой с офлайн

// const friendsStatus = {
//   online: [],
//   offline: [],
// };

// const statusIs = function (allFriends) {
//   for (let friend of allFriends) {
//     console.log(friend);

//     if (friend.online) {
//       friendsStatus.online.push(friend);
//       continue;
//     }

//     friendsStatus.offline.push(friend);
//   }

//   console.log(friendsStatus);
//   return friendsStatus
// }

// statusIs(friends);

// ========================================================

//как узнать колличество свойств объекта

// const objectExample = {
//   a: 1,
//   b: 2,
//   c: 30,
//   d: 60,
//   e: 120,
// };

// const objectPropertysQuantityIs = Object.keys(objectExample).length;
// console.log(objectPropertysQuantityIs);

// =========================================================

// Работаем с коллекцией товаров в корзине.
// getItems()
// add(product)
// remove(productName)
// clear()
// countTotalPrice()
// increasQuantity(productName)
// decreaseQuantity(productName)

// {name: 'apple', price: 50,}
// {name: 'grape', price: 70,}
// {name: 'lemon', price: 60,}
// {name: 'strawberry', price: 110,}

// const cart = {
//   items: [],
//   getItems() {},
//   add(product) {},
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increasQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//распыление

// const array = [1, 2, 3].concat([4,5,6], [7,8,9]);
// console.log(array);

// const array = [...[1,2,3], ...[4,5,6,7], ...[8,9]];
// console.log(array)

// =============================================================

// поиск самого большого или самого маленького числа

// const num = [1, 4, 26, 7, 9, 18, 33, 2];
// console.log(Math.max(...num));
// console.log(Math.min(...num));

// важно помнить, что при распылении примитивов, копируются значения
// а при распылении сложных типов данных, копируются ссылки
// что в дальнейшем при изменении такого элемента
// может привести к изменению оринального значения

// const a = [{ x: 10 }, { y: 20 }, { z: 50 }];
// const b = [...a];

// // console.table(a);
// // console.table(b);

// // если изменить значение обращаясь через точку к имени свойства,
// // то ссылка на элемент остается прежней,
// // и измененное значение отобразится в обоих переменных
// a[0].x = 33;
// console.table(a);
// console.table(b);

// console.log(a === b);
// console.log(a[0] === b[0]);
// console.log(a[1] === b[1]);

// // если изменить значение просто по индексу, изменяется ссылка элемента,
// // соответственно теперь в двух переменных эти элементы не будут равны,
// // и отобразятся по разному

// a[0] = 22;

// console.table(a);
// console.table(b);

// console.log(a === b);
// console.log(a[0] === b[0]);
// console.log(a[1] === b[1]);

// ===================================================================

// распыление объектов
//  обращаем внимание на то, что имена свойств должны быть уникальными,
// в противном случае, при встрече повторного имени свойства,
// оно будет перезаписывать уже имеющееся значение,
// и крайним будет то значение, свойство которого встретилось последним
// по ходу выполнения кода

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { ...a, ...b };
// console.table(c);

// const d = { ...a, x: 10, ...b, y: 20 };
// console.table(d);

// ====================================================================

// деструктуризация

// если литерал объекта находится с левой стороны от знака = то это не литерал объекта
// это операция деструктуризации

// const playlist = {
//   name: 'my playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// }

// // если мы захотим обратиться к каждому свойству, то получим следующую запись

// // console.log(playlist.name, playlist.rating, playlist.tracks, playlist.trackCount);
// // чтоб избежать подобной длинной записи, была создана деструктуризация

// // если мы хотим обратиться к свойству РЕЙТИНГ, при помощи деструктуризации создается
// // ЛОКАЛЬНАЯ ПЕРЕМЕННАЯ с именем свойства которое мы укажем в { }
// // const { rating } = playlist;

// // // после такой записи деструктуризации мы можем обратиться к локальной переменной,
// // // с тем же именем как и у свойства
// // console.log(rating);

// // const {name, tracks} = playlist;
// // console.log(name);
// // console.log(tracks);

// // ====
// // если во время деструктуризации мы хотим получить имя свойства, которого нет в объекте
// // то дальнейшее обращение к нему вернет АНДЕФАЙНД (неопределено),
// // во избежание подобной ситуации можно сразу присвоить значение по умолчанию

// // const { name, rating, tracks, trackCount, author = 'anonim'} = playlist;

// // console.log(author);

// // Если нам необходимо, чтоб имя локальной переменной отличалось от имени свойства объекта

// // const {name: nameOfPlaylist, rating, tracks, trackCount} = playlist;
// // console.log(nameOfPlaylist);

// // если нам необходимо не только изменить имя локальной переменной,
// // а еще и присвоить ей значение по умолчанию

// // следует помнить, что значение по умолчанию будет отображено, в случае когда в объекте
// // нет свойства с таким именем.

// const { name: nameOfPlaylist = 'supa-dupa', rating, tracks, trackCount, author = 'anonimous'} = playlist;
// console.log(nameOfPlaylist);
// console.log(author);

// ==========================================================================================

// Глубокая деструктуризация

// const profile = {
//   name: "Jack London",
//   tag: "JLon",
//   location: "Rio",
//   avatar: "https://picture.link/smile/fun.jpg",
//   stats: {
//     followers: 5602,
//     views: 1524,
//     likes: 870,
//   },
// };

// const { name, tag, location, avatar, stats } = profile;

// console.log(name);
// console.log(tag);
// console.log(location);
// console.log(avatar);
// console.log(stats); // we see object here and we can make destructurisation with local variable



// const { followers, views, likes } = stats;

// console.log(followers);
// console.log(views);
// console.log(likes);

// сокращаем запись используя глубокую деструктуризацию

// const {name, tag, location, avatar, stats: { followers, views, likes }} = profile;

// console.log(name);
// console.log(tag);
// console.log(location);
// console.log(avatar);

// console.log(followers);
// console.log(views);
// console.log(likes);

// ================================================================

// деструктуризация массивов
// особенность деструктуризации массивов, в том что массив деструктуризируется по порядку
// и значение присваевается именно своей переменной

// const array = [255, 132, 100];

// const [ a, b, c ] = array;

// console.log(a , b , c)

// если нам нужно отобразить не все элементы, то делаем пропуск в литерале деструктуризации

// const [a, , c] = array;
// console.log(a,c);

// ================================================================

// Найти автора с самым большим рейтингом

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const ratings = Object.values(authors)
// console.table(ratings)


// let hiestRating = ratings[0];
// // console.log(hiestRating);

// for (let rating of ratings) {

//   if (rating > hiestRating) {
//     hiestRating = rating;
//   }
// }
// console.log(hiestRating);






// one more variant
// console.log(Math.max(...ratings));


// oooone more variant with using keys

// const keys = Object.keys(authors);
// // console.table(keys);

// let theBiggestRateAuthor = [0];
// let authorName = ''

// for (const key of keys) {
//   // console.log(key);
//   // console.log(authors[key]);

//   if (authors[key] > theBiggestRateAuthor) {
//     theBiggestRateAuthor = authors[key];
//     authorName = key;
//   }
// }
// console.log(authorName, theBiggestRateAuthor);




// ooooooneeee mooooreeee variant 

// const authRate = Object.entries(authors);
// // console.table(authRate);

// for (const entry of authRate) {
//   // // console.log(entry);
//   // const name = entry[0];
//   // const value = entry[1];
//   // console.log(name, value);

//   // та же запись но с пом деструктуризации.
//   const [name, rating] = entry;
//   console.log(name, rating);
  
// }


// тож самое только еще более декларативно

// const entries = Object.entries(authors);

// for (const [name, rating] of entries) {
//   console.log(name, rating);

// }