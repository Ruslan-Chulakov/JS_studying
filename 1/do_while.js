let password = "";

do {
    password = prompt("enter password from min 5 symbols");
} while (password.length < 5);

console.log(`Your password now: ${password}`);