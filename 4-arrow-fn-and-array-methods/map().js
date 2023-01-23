// if we dont need to make a change in our array, 
// but we need to make a change with every element of array,
// and get a copy with changes and clear original array
// we can use map()

const array = ['sneekers', 'bounty', 'nuts', 'milkiway'];

const arrayToUppercase = array.map(element => element.toUpperCase());
console.log(arrayToUppercase);




const arr = [1,2,3,4,5,6,7,8,9,0];

const newArr = arr.map(elem => elem + 10);
console.log(newArr);




const massive = [
    {property: 'solo', instrument: ['guitar', 'baraban']},
    {property: 'han', instrument: ['fleita', 'tarelka']},
    {property: 'vaayn', instrument: ['bairaktar', 'traktor']}
  ];
  
  const instruments = massive.map(element => element.instrument);
  console.log(instruments);