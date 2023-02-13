// my
const x = [9, 3, '7', '3']

function sumMix(x) {
 return x.reduce((acc, element) => {
  if (typeof element === 'string') {
   const toNumber = Number(element);
   return acc + toNumber;  
  } else {
   return acc + element
  }
 }, 0)
};
console.log(sumMix(x));


// not mine

// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
//   }
  
//   const vals = [9, 3, '7', '3']
  
//   console.log(sumMix(vals));