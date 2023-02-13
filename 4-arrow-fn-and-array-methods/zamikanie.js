function whoIsWorkToday (mechanicName) {
    const make = function (part) {
        console.log(`${mechanicName} will be fix your ${part}`)
    }
    return make
};



const maxim = whoIsWorkToday('Maxim');

maxim('engine');
maxim('generator');


const valentin = whoIsWorkToday('Valentin');

valentin('roof');









const rounder = function (characterAfterDot) {
    const round = function (number) {
        console.log(number.toFixed(characterAfterDot));
    }

    return round;
}

const roundTo2 = rounder(2);

const roundTo3 = rounder(3);


roundTo2(1.27583858873);

roundTo3(5561.6313531354543);