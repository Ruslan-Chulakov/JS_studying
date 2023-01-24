// Важно помнить, что при сортировке, сравниваемые значения приводятся к строке, чтоб их...
// это приводит к побочным эффектам! Сравнение не всегда является корректным!
// А еще он факапит исходный массив!!!!!!!!

const scores = [61, 19, 74, 35, 92, 56];

const sorted = scores.sort();
console.log(sorted);


// так как изменяется исходный массив, 
// можно не присваивать значения в промежуточные переменные как выше.

// на этом примере видно как работает сортировка по умолчанию, 
// учитывая что значения сравниваемого массива приводятся к строке!!!

const arra = [27, 2, 41, 4, 7, 3, 75];
arra.sort();
console.log(arra);


const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];
students.sort();
console.log(students);

// one more WTF
const letters = ["b", "B", "a", "A", "c", "C"];
letters.sort();
console.log(letters);







// console.log('A'.charCodeAt());


// console.log('a'.charCodeAt());


// console.log('1'.charCodeAt());

// console.log('7'.charCodeAt());



// Крайне рекомендуется перед сортировкой делать копию массива, и работать с копией!

const num = [61, 19, 74, 35, 92, 56];

const copyOfNum = [...num];
console.log(copyOfNum.sort())


// сортировка по возрастанию здорового человека

const ascendingNum = [...num].sort((a,b) => a - b);
console.log(ascendingNum);


const ar = [27, 2, 41, 4, 7, 3, 75];
const ascendingNum2 = [...ar].sort((a,b) => a-b);
console.log(ascendingNum2);

// сортировка по убыванию здорового человека

const discendingScores = [...ar].sort((a,b)=> b-a);
console.log(discendingScores);









// 
const studendos = [
    { name: "Манго", score: 83 },
    { name: "Поли", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Киви", score: 94 },
  ];


//   sorted by numbers
  const sortArraywitObj = [...studendos].sort((a,b) => a.score - b.score);
  console.log(sortArraywitObj);

  const fromBiggerScore = [...studendos].sort((aniken, skyworker) => skyworker.score - aniken.score);
  console.log(fromBiggerScore);


//   sorted by alphabet

const abyz = [...studendos].sort((aaa, xxx) => aaa.name.localeCompare(xxx.name));
console.log(abyz);

const zyba = [...studendos].sort((fff, lll) => lll.name.localeCompare(fff.name));
console.log(zyba); 
