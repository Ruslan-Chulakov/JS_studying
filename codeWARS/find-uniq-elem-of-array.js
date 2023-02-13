const arra = [1, 1, 2];
const garra = [1, 2, 1];
const mtf = [17, 17, 3, 17, 17, 17, 17];
const random = [-3341,  -3341 , -3341, -8442, -3341, -3341, -3341, -3341, -3341];

// console.log(random.sort((a,b) => a-b).map(elem => console.log(elem > 0)))

// my solution

// function stray(numbers) {
//         let uniq = 0;
//         const sortNumbers = numbers.sort((a,b) => a - b);
//         const lastIndex = sortNumbers.length - 1;
        
//          if(sortNumbers[0] === sortNumbers[1]) {
//                 console.log()
//                  uniq = sortNumbers[lastIndex];
//          } else {
//                  uniq = sortNumbers[0];
//          }
                      
//         return uniq; 
// };



// the same with ternarnik

// function stray(numbers) {
    //     let uniq = 0;
    //            const sortNumbers = numbers.sort((a,b) => a - b);
    //            const lastIndex = sortNumbers.length - 1;
    
    //            sortNumbers[0] === sortNumbers[1] ? uniq = sortNumbers[lastIndex] : uniq = sortNumbers[0];     
    
    //            return uniq;         
    //    }
    



    // solution from codewars

    const stray = nums => nums.reduce((a, b) => a ^ b);

    // codewars
    // function stray(numbers) {
    //     var sort = numbers.sort();
    //     if (sort[0] === sort[1]) {
    //       return sort[sort.length-1]
    //     }  else {
    //       return sort[0]
    //     }
          
    //     }

    // codewars
    // const stray = num => num.sort()[0] == num[1] ? num.pop() : num[0]
    
    
    console.log(stray(arra));
    console.log(stray(garra));
    console.log(stray(mtf));
    console.log(stray(random));