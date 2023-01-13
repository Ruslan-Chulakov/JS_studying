// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (let i = 0; i < order.length; i += 1) {
//       total += order[i];
//     }
  
//     // Change code above this line
//     return total;
//   }



function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  
    for (iter of order) {
      total += iter;
    }
  
    // Change code above this line
    return total;
  }





//   ===================================================
// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     for (let i = 0; i < numbers.length; i += 1) {
//       const number = numbers[i];
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Change code above this line
//   }


function filterArray(numbers, value) {
    // Change code below this line
    const filteredNumbers = [];
  
    for (let number of numbers) {
  
      if (number > value) {
        filteredNumbers.push(number);
      }
    }
    console.log(filteredNumbers);
    return filteredNumbers;
    // Change code above this line
  }

  filterArray([1, 2, 3, 4, 5], 3);
  filterArray([1, 2, 3, 4, 5], 4);
  filterArray([1, 2, 3, 4, 5], 5);
  filterArray([12, 24, 8, 41, 76], 38);
  filterArray([12, 24, 8, 41, 76], 20);