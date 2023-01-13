const example = 'i want to broke this string and get array widt separated letters and then join them back to string with (*)';
const splitExample = example.split('');
console.log(splitExample);

const joinExample = splitExample.join('*');
console.log(joinExample)


const exampl = 'i want to make the same, but with using ("")';
const splitExampl = exampl.split('');
const joinExampl = splitExampl.join('');
console.log(joinExampl);







// function slugify(title) {
//     // Change code below this line
//     const toLowerCaseTitle = title.toLowerCase();
//     console.log(toLowerCaseTitle);

//     const joinTitle = toLowerCaseTitle.split(' ');
//     console.log(joinTitle)

//     const slug = joinTitle.join('-')
//     console.log(slug);
//     return slug;

     
  
//     // Change code above this line
//   }
//   slugify("Arrays for begginers");