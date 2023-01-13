// switch
let price;
const type = "pro";

switch (type) {
    case "start":
        price = 200;
        break;

    case "pro":
        price = 500;
        break;

    default: console.log("i dint know");
}

console.log(price);