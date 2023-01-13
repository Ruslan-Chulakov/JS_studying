// Напиши функцию findLongestWord(string) 
// которая принимает произвольную строку 
// состоящую только из слов разделённых пробелом (параметр string) 
// и возвращает самое длинное слово в этой строке.





function findLongestWord(string) {
    // Change code below this line
// 1 - преобразовываем строку в массив с отдельными словами

    const stringToArray = string.split(' ');
    console.log(stringToArray);
// 2 - прогоняем массив через цикл 
    let longest = 0;
    let word 
    for (let i = 0; i < stringToArray.length; i += 1) {
        // console.log(stringToArray[i].length);
// 3 - определяем длину слова в массиве и если слово на новой итерации длиннее 
// предыдущего, записываем его длину в переменную
// на следующей итерации будем проверять не является ли новое слово длиннее чем то, 
// которое уже записалось в переменную
// 4 - самое длинное слово сразу же записываем в переменную ворд
        if (longest < stringToArray[i].length) {
            longest = stringToArray[i].length;
            word = stringToArray[i];
        }
        

    }
// 5 - выводим результат
console.log(longest);
    console.log(word);
    return word;

 
  
    // Change code above this line
  }

  findLongestWord("The quick brown fox jumped over the lazy dog")

  findLongestWord("Google do a roll")

  findLongestWord("May the force be with you")