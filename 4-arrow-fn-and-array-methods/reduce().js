
const students = [
    { name: "Манго", score: 83 },
    { name: "Поли", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Киви", score: 94 },
    { name: "Хьюстон", score: 64 },
  ];

//   const sum = students.reduce((akum, element) => {
//     return akum + element.score
//   } ,0);
//   console.log(sum);




const sum = students.reduce((everyIterationValue, student) => 
everyIterationValue += student.score,
0);
console.log(sum)






// need to find sum of all likes with reduce

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
  ];

const allLikes = tweets.reduce((sumHere, {likes}) => {
    return sumHere + likes
},0 );
console.log(allLikes);







// need to get all tags in one array

// console.log(tweets.flatMap(element => element.tags))
const allTags = tweets.reduce((arrayWithTags, element) => {
    arrayWithTags.push(...element.tags);
    return arrayWithTags;
} ,[] )

console.log(allTags);