getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"])


function getExtremeElements(array) {
    const firstInArray = array[0];
    console.log('first symbol in array' + ' ' + firstInArray);


    const lengthOfArray = array.length - 1;
    console.log('length of array is' + ' ' + lengthOfArray);

    const lastOfArray = array[lengthOfArray];
    console.log( 'the last symbol of array is' + ' ' + lastOfArray);


    const sumOfFirstAndLast = [firstInArray, lastOfArray];
    console.log(sumOfFirstAndLast)

    return sumOfFirstAndLast;
}