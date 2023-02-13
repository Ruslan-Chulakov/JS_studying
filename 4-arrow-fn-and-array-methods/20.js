// Дополни код так, чтобы в переменной allGenres 
// был массив всех жанров книг (свойство genres) 
// из массива books, а в переменной uniqueGenres 
// массив уникальных жанров - без повторений.

// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная allGenres
// Значение переменной allGenres это массив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Объявлена переменная uniqueGenres
// Значение переменной uniqueGenres это массив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для вычисления значения переменной allGenders использован метод flatMap()
// Для вычисления значения переменной uniqueGenres использован метод filter()




const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction", "mysticism"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism", "adventure"],
    },
  ];
  // Change code below this line
  const allGenres = books.flatMap(book => book.genres);
  const uniqueGenres = allGenres.filter((genre, index) => allGenres.indexOf(genre) === index);
  

  console.log(allGenres);
  console.log(uniqueGenres);