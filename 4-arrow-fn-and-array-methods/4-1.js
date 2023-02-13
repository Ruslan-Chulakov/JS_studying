/* # Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach */

/* 
    ## Example 1 - Коллбек функції
    Напишіть наступні функції:
    - `createProduct(obj, callback)` - приймає об'єкт товару без id, а також
      коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у
      властивість `id` та викликає коллбек передаючи йому створений об'єкт.
    - `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в
      консоль
    - `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює загальну 
      вартість товару в консоль
    function createProduct(partialProduct, callback) {
    }
    function logProduct(product) {
    }
    function logTotalPrice(product) {
    }
    createProduct({name: '🍎', price: 30, quantity: 3}, logProduct);
    createProduct({name: '🍋', price: 20, quantity: 5}, logTotalPrice);






    // моё решение =============================================================

    function createProduct(partialProduct, callback) {
    partialProduct.id = 'ind-' + Math.random().toString(36).slice(2);
    
    callback(partialProduct);
}

function logProduct(product) {
 console.log(product)
}


function logTotalPrice(product) {
    console.log(product.price * product.quantity);
}
createProduct({name: '🍎', price: 30, quantity: 3}, logProduct);
createProduct({name: '🍋', price: 20, quantity: 5}, logTotalPrice);

// ============================================================================
*/

/* 
  ## Example 2 - Коллбек функції
  Додайте об'єкт `account` методи `withdraw(amount, onSuccess, onError)` та
  `deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а
  другий та третій - коллбеки.
  Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або
  this.balance, і onSuccess в іншому випадку.
  Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше
  або дорівнює нулю, і onSuccess в іншому випадку.
  const TRANSACTION_LIMIT = 1000;
  const account = {
    username: 'Jacob',
    balance: 400,
    withdraw(amount, onSuccess, onError) {
    },
    deposit(amount, onSuccess, onError) {
    },
  };
  function handleSuccess(message) {
    console.log(`✅ Success! ${message}`);
  }
  function handleError(message) {
    console.log(`❌ Error! ${message}`);
  }
  account.withdraw(2000, handleSuccess, handleError);
  account.withdraw(600, handleSuccess, handleError);
  account.withdraw(300, handleSuccess, handleError);
  account.deposit(1700, handleSuccess, handleError);
  account.deposit(0, handleSuccess, handleError);
  account.deposit(-600, handleSuccess, handleError);
  account.deposit(600, handleSuccess, handleError);

//   ============================================================================
// mine solving


  const TRANSACTION_LIMIT = 1000;
  const account = {
    username: 'Jacob',
    balance: 400,

    withdraw(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT || amount > this.balance) {
           return onError()
        }
        onSuccess()
    },

    deposit(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT || amount <= 0) {
           return onError()
        }
        onSuccess()
    },
  };
  function handleSuccess(message) {
    console.log(`✅ Success! ${message}`);
  }
  function handleError(message) {
    console.log(`❌ Error! ${message}`);
  }
  account.withdraw(2000, handleSuccess, handleError);
  account.withdraw(600, handleSuccess, handleError);
  account.withdraw(300, handleSuccess, handleError);
  account.deposit(1700, handleSuccess, handleError);
  account.deposit(0, handleSuccess, handleError);
  account.deposit(-600, handleSuccess, handleError);
  account.deposit(600, handleSuccess, handleError);



//   =======================================================================
*/

/* 
  ## Example 3 - Коллбек функції
  Напишіть функцію `each(array, callback)`, яка першим параметром очікує
  масив, а другим - функцію, яка застосовується до кожного елемента масиву.
  Функція each повинна повернути новий масив, елементами якого будуть результати
  виклику коллбека.
  function each(array, callback) {}
  console.log(
    each([64, 49, 36, 25, 16], function (value) {
      return value * 2;
    }),
  );
  console.log(
    each([64, 49, 36, 25, 16], function (value) {
      return value - 10;
    }),
  );
  console.log(
    each([64, 49, 36, 25, 16], function (value) {
      return Math.sqrt(value);
    }),
  );
  console.log(
    each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
      return Math.ceil(value);
    }),
  );
  console.log(
    each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
      return Math.floor(value);
    }),
  );


//   ===================================================================================
// my resolution

function each(array, callback) {
     return array.map(element => callback(element));
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  }),
);

// ============================================================================
*/

/* 
  ## Example 4 - Стрілочні функції
  Виконайте рефакторинг коду за допомогою стрілочних функцій приклад з 1-го завдання 

// =================================================================================
// my refactoring

const createProduct = (partialProduct, callback) => {
    partialProduct.id = 'ind-' + Math.random().toString(36).slice(2);
    
    callback(partialProduct);
}

const logProduct = (product) =>
 console.log(product);

const logTotalPrice = (product) =>
    console.log(product.price * product.quantity);

createProduct({name: '🍎', price: 30, quantity: 3}, logProduct);
createProduct({name: '🍋', price: 20, quantity: 5}, logTotalPrice);

// ===================================================================================

*/

/*
  ## Example 5 - Стрілочні функції
  Виконайте рефакторинг коду за допомогою стрілочних функцій приклад з 2-го завдання
*/

/* 
  ## Example 6 - Інлайн стрілочні функції
  Виконайте рефакторинг коду за допомогою стрілочних функцій приклад з 3-го завдання
*/

/* 
  ## Example 7 - Метод forEach
  Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
  function logItems(items) {
    console.log(items);
    for (let i = 0; i < items.length; i += 1) {
        console.log(`${i + 1} - ${items[i]}`);
      }
  }
  logItems(['Mango', 'Poly', 'Ajax']);
  logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

  // ================================================================================
  // my solution

  const logItems = items => {
    console.log(items);
    items.forEach((element, index) => {
       return console.log(`${index + 1} - ${element}`)
    });
  }

  logItems(['Mango', 'Poly', 'Ajax']);
  logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

  // ================================================================================
*/

/*
  ## Example 8 - Метод forEach
  Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
  function printContactsInfo({names, phones}) {
    const nameList = names.split(',');
    const phoneList = phones.split(',');
    for (let i = 0; i < nameList.length; i += 1) {
      console.log(`${nameList[i]}: ${phoneList[i]}`);
    }
  }
  printContactsInfo({
    names: 'Jacob,William,Solomon,Artemis',
    phones: '89001234567,89001112233,890055566377,890055566300',
  });

  // ================================================================================
  // my solution

  const printContactsInfo = ({names, phones}) => {
    const nameList = names.split(',');
    const phoneList = phones.split(',');

    nameList.forEach((elem, ind) => 
        console.log(`${elem}: ${phoneList[ind]}`)
    );
  }
  printContactsInfo({
    names: 'Jacob,William,Solomon,Artemis',
    phones: '89001234567,89001112233,890055566377,890055566300',
  });

  // ================================================================================
*/

/*
  ## Example 9 - Метод forEach
  Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
  function calсulateAverage(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total / args.length;
  }
  console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
  console.log(calсulateAverage(14, 8, 2)); // 8
  console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

  // =================================================================================
  // my solution


  const calсulateAverage = (...args) => {
    let sumOfAllNumbers = 0;
    args.forEach(element => {
        sumOfAllNumbers += element
    })
    return sumOfAllNumbers / args.length
}


console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2


// ==================================================================================
*/