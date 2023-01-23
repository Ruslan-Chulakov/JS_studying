const values = [51, -3, 27, 21, -68, 42, -37];

const positive = values.filter(val => val > 0);
console.log(positive);

const negative = values.filter(val => val < 0);
console.log(negative);




const nums = [1,2,3,4,5,6,7,8,9,0,11,12];

const chetn = nums.filter(val => val %2 === 0);
console.log(chetn);

const neChetn = nums.filter( val => val % 2 !== 0);
console.log(neChetn);









// array with object

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

const liders = students.filter(student => student.score > HIGH_SCORE);
console.table(liders);

const worst = students.filter(student => student.score < LOW_SCORE);
console.table(worst);

// const middle = students.filter(student => HIGH_SCORE > student.score && student.score >= LOW_SCORE);
// console.table(middle);


const middle = students.filter(({score}) => HIGH_SCORE > score && score >= LOW_SCORE);
console.table(middle);