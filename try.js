// ## Example 5 - Toggle
// Напишіть клас `Toggle` який приймає об'єкт налаштувань `{isOpen: boolean}` і
// оголошує одну властивість `on` - стан вкл/викл (true/false). За замовчуванням
// значення властивості `on` повинно бути `false`.


// class Toggle {
//   constructor({isOpen} = {}) {
//     this.on = 
//   }

// }


// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');
// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');



























//3. Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает и возвращает общую стоимость камней
//с именем, ценой и количеством из объекта

// const stones = [
//     { name: "Изумруд", price: 1300, quantity: 4 },
//     { name: "Бриллиант", price: 2700, quantity: 6 },
//     { name: "Сапфир", price: 400, quantity: 7 },
//     { name: "Щебень", price: 150, quantity: 100 },
//   ];


//   // function calcTotalPrice (arr, name) {
//   //   return  arr.reduce((acc, elem) =>{
//   //   if(elem.name === name){
//   //     acc = elem.price * elem.quantity
//   //   }
//   //   return acc
//   //   }, 0)
//   // }

//   function calcTotalPrice (arr, name) {
//       const ourStone = arr.filter(elem => elem.name === name);
//       for (const stone of ourStone) {
//         const total = stone.price * stone.quantity
//         return total
//       }
      
//     }

//   console.log(calcTotalPrice(stones, "Бриллиант"));
//   console.log(calcTotalPrice(stones, "Сапфир"))

  




// const Rumba = function(property = {}) {
  
// }

// обращение к элементам в ХТМЛ

// console.log('showing document', document); // showing all document

// console.log('showing body', document.body);

// console.log('show first element child', document.body.firstElementChild); //ul

// const list = document.body.firstElementChild;
// console.log('whow first element of list', list.firstElementChild);

// console.log(`show last element of list`, list.lastElementChild);

// console.log(`show childrens of element`, list.children);

// console.log(`show sibling of element`, list.nextElementSibling);


// querySelector

// console.log(document.querySelector('.list-item-one'))
// console.log(document.querySelector('.list-item-three'))

// console.log(document.querySelectorAll('.list-item'));

// console.log(document.querySelector('.list'));


// textContent

// const listFirstElementRef = document.querySelector('.list-item-one'); //making reference to object we need
// console.log(listFirstElementRef); //show our reference
// console.log(listFirstElementRef.textContent) //showing text content of our element
// listFirstElementRef.textContent = `new textContent in our li which was changed from JS with using textContent property`;
// console.log(listFirstElementRef.textContent);




// classList

// const listSecondElementRef = document.querySelector('.list-item-two');
// console.log(listSecondElementRef);

//         // classList.contains
//         // show true or false if element has class name from ('')
//         // without dot befor class name!!!!!!
//         console.log(listSecondElementRef.classList.contains('list-item')); //true
//         console.log(listSecondElementRef.classList.contains('shaka')); //false

//         // classList.add()
//         listSecondElementRef.classList.add('newClass-fromJS');
//         console.log(listSecondElementRef);

//         // classList.remove()
//         listSecondElementRef.classList.remove('newClass-fromJS');
//         console.log(listSecondElementRef);

//         // classList.toggle()
//         listSecondElementRef.classList.toggle('toggle-class');
//         console.log(listSecondElementRef);

//         // classList.replace(oldClass, newClass)
//         listSecondElementRef.classList.replace('toggle-class', 'empty');


// style

    // const listThirdElementRef = document.querySelector('.list-item-three');
    // console.log(listThirdElementRef);

    // listThirdElementRef.style.color = 'orange';
    // listThirdElementRef.style.fontSize = '24px';

    // console.log(listThirdElementRef.style) // show all inline style properties for element

    // listThirdElementRef.style.backgroundColor = 'grey';


// // attributes

//     const listForthElementRef = document.querySelector('.image');
//     console.log(listForthElementRef)

//     // we can see all attributes of element
//     console.log(listForthElementRef.attributes);

//     // if we need to know has our element property we need
//     console.log(listForthElementRef.hasAttribute('width')); //true
//     console.log(listForthElementRef.hasAttribute('alt')); //false

//     //if wee need to get value of attribute
//     console.log(listForthElementRef.hasAttribute('src'));
//     console.log(listForthElementRef.getAttribute('src')); // return value of src (link to image);

//     //if we need to create attribute
//     console.log(listForthElementRef.hasAttribute('width')); //false
//     listForthElementRef.setAttribute('width', '240px');
//     console.log(listForthElementRef.hasAttribute('width')); //true

//     //if we need to remove attribute
//     console.log(listForthElementRef.hasAttribute('alt')); //true
//     listForthElementRef.removeAttribute('alt');
//     console.log(listForthElementRef.hasAttribute('alt')); //false

//     // console.log(listForthElementRef.attributes)


// // daraAttributes

//     const listFifthElementRef = document.querySelector('.list-item-five');
//     console.log(listFifthElementRef);

//     listFifthElementRef.setAttribute('data-place', 'five');
//     console.log(listFifthElementRef);

//     console.log(listFifthElementRef.dataset.place); //five (we get the value of our data attribute in element);

   


// Creating elements

        // const title = document.createElement('h2'); //create h2 element in memory
        // console.log(title);

        // title.classList.add('titliche')
        // title.textContent = 'This is title created from JS';
        // console.log(title);

        // const newImg = document.createElement('img');
        // console.log(newImg);
        // newImg.src = './img/sky.jpg';
        // newImg.alt = 'interesting color of the sky';
        // newImg.width = '320';

        // console.log(newImg);


// adding elements to the html

//         // we need to get link on element after or befor which we need to add new elements
//         const ulRef = document.querySelector('.list');
//         console.log(ulRef);

//         ulRef.before(title);
//         title.style.color = 'white';
//         title.style.marginLeft = '25px';

//         ulRef.after(newImg);


// // innerHTML

//         console.log(ulRef.innerHTML); //innerHTML always return valid html code like a string

//         // we can make changes in html with innerHTML
//         const titleRef = document.querySelector('.titliche');
//         console.log(titleRef);
        
//         titleRef.innerHTML = 'this is <b>NEW</b> title from <bold>JS</bold>';
    

const arra = [1, 1, 2];
const garra = [1, 2, 1];
const mtf = [17, 17, 3, 17, 17, 17, 17];
const random = [-3341,  -3341 , -3341, -8442, -3341, -3341, -3341, -3341, -3341];
// console.log(random.sort((a,b) => a-b).map(elem => console.log(elem > 0)))


// function stray(numbers) {
//         let uniq = 0;
//         const sortNumbers = numbers.sort((a,b) => a - b);
//         const lastIndex = sortNumbers.length - 1;
        
//          if(sortNumbers[0] === sortNumbers[1]) {
//                 console.log()
//                  uniq = sortNumbers[lastIndex];
//          } else {
//                  uniq = sortNumbers[0];
//          }
       
               
//         return uniq;
         
//         }


const stray = nums => nums.reduce((a, b) => a ^ b);

        console.log(stray(arra));
        console.log(stray(garra));
        console.log(stray(mtf));
        console.log(stray(random))