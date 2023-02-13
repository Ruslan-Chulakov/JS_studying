function greetGuest(greeting) {
    console.log(`${greeting}, ${this.username}.`);
  }
  
  const mango = {
    username: "Манго",
  };
  const poly = {
    username: "Поли",
  };
  
  
  greetGuest.call(mango, 'hello');
  
  greetGuest.call(poly, 'Hello mazafaka')
  

  greetGuest.apply(mango, ['welcom, arhivarius']);
  
  greetGuest.apply(poly, ['welcome to the future']);