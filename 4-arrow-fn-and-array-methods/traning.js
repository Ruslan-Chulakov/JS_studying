// // function elementaryFunction () {console.log('Hello mf')};
// // elementaryFunction();
// // console.log(elementaryFunction);


// // const arra = [1,2,3,4,5,6,7,8,9,0];

// // // arra.forEach((element, index, array) => {
// // //   console.log(element);
// // //   console.log(index);
// // //   console.log(array);
// // // })

// // // arra.forEach(function pss(elem, ind, arr) {
// // //   console.log(elem);
// // //   console.log(ind);
// // //   console.log(arr);
// // // })

// // for (let i=0; i<arra.length; i++) {
// //   console.log(arra[i]);
// // }

// // for (const elem of arra) {
// //   console.log(`for..of ${elem}`);
// // }


// const arrowFunction = (a,b,c) => {
//     console.log(a,b,c)
//   }
//   arrowFunction(4,7,9);
  
//   const arrowFunctionWithOneParam = param => {
//     console.log(param);
//   }
  
//   arrowFunctionWithOneParam('aaaaP4HIIIi... Thx');
  
  
//   const arrowFuncWithoutParam = () => {
//     console.log('we dont have any params here, we just can see the message');
//   }
//   arrowFuncWithoutParam();
  
//   const arFnWithBack = (word) => {
//     console.log(`we just write here incoming arg "${word}". And then we need to use key word return`);
//     return console.log(`message from return`);
//   }
  
//   arFnWithBack('I AM ARGUMENT');
  
//   const arFnWithoutBack = (paraMetr) => console.log(paraMetr);
  
//   arFnWithoutBack('antibakterial')





// const parts = [
//     {name: 'collector', price: 350},
//     {name: 'injector', price: 1500},
//     {name: 'karbul9tor', price: 800}
// ]


// const partsName = []
// parts.forEach(element => partsName.push(element.name));

// console.log(partsName);


// console.log(parts.map(element => element['name']));

// console.log(parts.map(element => element.price))


// console.log(parts.find(element => element.name === 'injector'))


// console.log(parts.findIndex(element => element.name === 'karbul9tor'));



// const array = [1,2,3,4,5,6,7,8,9,0];

// console.log(array.every(element => element > 0));
// console.log(array.some(element => element > 0));



// console.log(parts.reduce((lastIterValue, element) => lastIterValue + element.price, 0))



// need sum of all likes of on euser

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const allLikes = tweets.reduce((val, element) => val + element.likes, 0);
// console.log(allLikes);


// we need to make a function to calculate sum of likes of any users

// const likeSum = userInfo => userInfo.reduce((val, element) =>
//   val + element.likes, 0
// );

// console.log(likeSum(tweets));


// need to collect all tags in one array

// const tags = tweets.reduce((val, element) => {
//     val.push(...element.tags);
//     return val
// }, []);
// console.log(tags);




// we need to make a function to collect all tags of any user to array

const allTagsOfUser = userInfo => userInfo.reduce((val, element) => {
  val.push(...element.tags);
  return val;
}, []);

// console.log(allTagsOfUser(tweets));




// we need to count uniq tags of array with all user tags

const tagsOfCurrentUser = allTagsOfUser(tweets);
console.log(tagsOfCurrentUser);

const uniq = tagsOfCurrentUser.reduce((val, element) => {
  // console.log(val.includes(element))
  if (!val.includes(element)) {
      val.push(element);
  }
  return val;
}, []); 
console.log(uniq)

const uniqTagsQuantity = uniq.length;
console.log(uniqTagsQuantity)
