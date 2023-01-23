const arr = [1,2,3,4,5,6,7,8,9];

// old school forEach
// arr.forEach(function (element, index, array) {
//   console.log(`this is element of array "${element}"`);
//   console.log(`this is the index of that element "${index}"`);
//   console.log(`and this is initial array [${array}]`);
// });


// forEach with arrow function
arr.forEach((elem,ind,ar)=>{
  console.log(`this is element of array "${elem}"`);
  console.log(`this is the index of that element "${ind}"`);
  console.log(`and this is initial array [${ar}]`);
})