// function elementaryFunction () {console.log('Hello mf')};
// elementaryFunction();
// console.log(elementaryFunction);


// const arra = [1,2,3,4,5,6,7,8,9,0];

// // arra.forEach((element, index, array) => {
// //   console.log(element);
// //   console.log(index);
// //   console.log(array);
// // })

// // arra.forEach(function pss(elem, ind, arr) {
// //   console.log(elem);
// //   console.log(ind);
// //   console.log(arr);
// // })

// for (let i=0; i<arra.length; i++) {
//   console.log(arra[i]);
// }

// for (const elem of arra) {
//   console.log(`for..of ${elem}`);
// }


const arrowFunction = (a,b,c) => {
    console.log(a,b,c)
  }
  arrowFunction(4,7,9);
  
  const arrowFunctionWithOneParam = param => {
    console.log(param);
  }
  
  arrowFunctionWithOneParam('aaaaP4HIIIi... Thx');
  
  
  const arrowFuncWithoutParam = () => {
    console.log('we dont have any params here, we just can see the message');
  }
  arrowFuncWithoutParam();
  
  const arFnWithBack = (word) => {
    console.log(`we just write here incoming arg "${word}". And then we need to use key word return`);
    return console.log(`message from return`);
  }
  
  arFnWithBack('I AM ARGUMENT');
  
  const arFnWithoutBack = (paraMetr) => console.log(paraMetr);
  
  arFnWithoutBack('antibakterial')