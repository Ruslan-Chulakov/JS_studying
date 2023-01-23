// uniq elements

const students = [
    { name: "Манго", courses: ["математика", "физика"] },
    { name: "Поли", courses: ["информатика", "математика"] },
    { name: "Киви", courses: ["физика", "биология"] },
  ];
  
  const allCourses = students.flatMap(el => el.courses );
  console.log(allCourses);
  
  const uniqCourses = allCourses.filter((elem, ind, arr) => arr.indexOf(elem) === ind);
  console.log(uniqCourses);