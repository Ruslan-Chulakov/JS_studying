const message = "Oh you little mother F*cker, get your bunny and go away"
const firstPartMessage = message.slice(0, 20);
// console.log(firstPartMessage);
const secondPartMessage = message.slice(37, 43);
// console.log(secondPartMessage);
console.log(firstPartMessage + secondPartMessage); 

// variant
const secondPartMessageWithoutSpace = message.slice(38, 43);
console.log(`${firstPartMessage} ${secondPartMessageWithoutSpace}`);