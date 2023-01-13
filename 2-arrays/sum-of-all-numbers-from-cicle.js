function calculateTotal(number) {
    let sum = 0;
    
    for ( let i = 0; i <= number; i += 1) {
        console.log(i);
        sum += i ;
        console.log(sum);
    }
    return sum;
}
  



calculateTotal(18);