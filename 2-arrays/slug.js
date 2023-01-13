// slug
// 1 making string toLowerCase
// 2 making array from string
// 3 making string from array

const string = 'This Is a Message in THE end of link';
// console.log(string);

// const stringNormalized = string.toLowerCase();
// console.log(stringNormalized);

// const stringToArray = stringNormalized.split(' ');
// console.log(stringToArray);

// const slug = stringToArray.join('-');
// console.log(slug);

// ========================================================
// optimized variant

const slug = string.toLowerCase().split(' ').join('-');
console.log(slug);




// ========================================================
// +1 variant
// function slugify(title) {
    // Change code below this line
    //  const toLowerCaseTitle = title.toLowerCase();
    //   console.log(toLowerCaseTitle);
    //   let slug;
    //   slug =  toLowerCaseTitle.replaceAll(' ', '-')
  
    //   console.log(slug);
    //   return slug;

//     title = title.toLowerCase();
//     let slug;
//     slug = title.replaceAll(' ', '-');
//     console.log(slug);
//     console.log(typeof (slug));
//     return slug;
  
  
//     // Change code above this line
//   }
//   slugify("Arrays for begginers")
//   slugify("English for developer")
//   slugify("Ten secrets of JavaScript")
//   slugify("How to become a JUNIOR developer in TWO WEEKS")