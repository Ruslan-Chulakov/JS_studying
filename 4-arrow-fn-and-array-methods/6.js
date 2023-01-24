function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line
// решение через форИч
    numbers.forEach(element => {
        if (element > value) {
            filteredNumbers.push(element);
          }
    });

// решение через фильтр
    // const values = numbers.filter(number => number > value);
    // console.log(values);
    // filteredNumbers.push(...values);

// было

    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] > value) {
    //     filteredNumbers.push(numbers[i]);
    //   }
    // }
  
    // Change code above this line
    console.log(filteredNumbers);
    return filteredNumbers;
  }

  filterArray([1, 2, 3, 4, 5], 3);
  filterArray([1, 2, 3, 4, 5], 4);
  filterArray([1, 2, 3, 4, 5], 5);
  filterArray([12, 24, 8, 41, 76], 38);
  filterArray([12, 24, 8, 41, 76], 20);
  filterArray([20,23,8,16,16,18,16,10,24,14,8,10,6,24,19,20,5,10,16,19,14,24,23], 15)