function greet(clientName) {
    return `${clientName}, добро пожаловать в «${this.service}».`;
  }
  
  const steam = {
    service: "Steam",
  };
  
  const fnWithContextInIt = greet.bind(steam);
  
  console.log(fnWithContextInIt('Charley'));
  
  
  
  function helloByNymber(telephone) {
    return `hello mr. ${this.name} i find your number ${telephone} in system`;
  };
  
  const client = {
    name: 'Muthafacker',
    secondName: 'Arduinovich'
  }
  
//   const weCanSaveContext = helloByNymber.bind(client);
  
//   console.log(weCanSaveContext(9379992));

  //  if wee need to use function like callback

// function message (callback) {
//     console.log(callback(5578942531));
//   }
  
//   const opt = helloByNymber.bind(client);
//   message(opt);
  
//   message(helloByNymber.bind(client));
  
// ============================================================
function message (callback, telNumber) {
    return callback(telNumber);
  }
    
  console.log(message(helloByNymber.bind(client), 12345678));

// ============================================================

function hello(name) {
  console.log(`Hello dear ${name} from ${this.place}`);
};

const placeHolder = {
  place: 'Hawaii'
};

const message = hello.bind(placeHolder);

message('Andre');
