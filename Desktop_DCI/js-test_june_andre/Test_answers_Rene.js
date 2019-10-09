console.clear();

console.log("__________________1___________________");

const numberArray = [1, 6, 11, 99, 2]

let greaterTen = numberArray.filter(item => item > 10);
console.log(greaterTen);

console.log("__________________2___________________");

const pinCombination = 1112

function validatePin(pin) {
    let pinArray = pin.toString(10).split("").map(item => parseInt(item));
    // console.log(pinArray);
    // console.log(Number.isInteger(pin));
    // console.log((pinArray[pinArray.length - 1] % 2) === 0);
    // console.log(atLeastFive(pinArray));



    if ((pinArray.length === 4) && (Number.isInteger(pin)) && ((pinArray[pinArray.length - 1] % 2) === 0) && /* (differentDigits(pinArray)) && */ (atLeastFive(pinArray))) { // one validation missing!
        return `Valid Pin!`
    } else {
        return `Invalid pin!`;
    }

    // function differentDigits(array) {
    //     if(array.)
    // }

    function atLeastFive(array) {

        if (array.reduce((a, b) => a += b) >= 5) {
            return true
        }
    }
}

console.log(validatePin(pinCombination));

console.log("__________________3___________________");

let newClass = function (duration, teacher, curriculum, amountStudents) {
    this.duration = duration;
    this.teacher = teacher;
    this.curriculum = curriculum;
    this.amountStudents = amountStudents;
    this.roomSize = roomSize(amountStudents)

    function roomSize(amount) {
        return amount * 22;
    }


}
newClass.prototype.classDetails = function () {
    return `This is a ${this.duration} ${this.curriculum} course taught by ${this.teacher}. There are ${this.amountStudents} students taking the course.`
}

let FwB13a = new newClass("year long", "Mariam", "web development", 18);
console.log(FwB13a);
console.log(FwB13a.classDetails());

console.log("__________________4___________________");

let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]

let highestToLowest = events.sort((a, b) => {
    let compA = a.turnout;
    let compB = b.turnout;
    if (compA < compB) {
        return 1;
    } else if (compA > compB) {
        return -1;
    } else {
        return 0;
    }
})

console.log(highestToLowest);

console.log("__________________5___________________");

function mappingFilter(array, callback) {
    let mapResult = array.map(i => callback(i));
       let filteredResult = mapResult.filter(item => (item%2)!==0);

    return filteredResult;
}
const powerOfTwoFiltered = mappingFilter([1, 2, 3, 4, 5], (val) => Math.pow(val, 2));
console.log(powerOfTwoFiltered);


console.log("__________________6___________________");

// to less time

console.log("__________________7___________________");

let worldCup = new Date(2014, 6, 14);
let currentDate = new Date();

let daysPassedSince = Math.floor((currentDate - worldCup) / 1000 / 60 / 60 / 24);

console.log(daysPassedSince);

console.log("__________________8___________________");

const hourTracking = [
    { day: 'Monday', start: 8, end: 17 },
    { day: 'Tuesday', start: 9, end: 15 },
    { day: 'Wednesday', start: 10, end: 18 },
    { day: 'Thursday', start: 7, end: 14 },
    { day: 'Friday', start: 6, end: 12 },
];

let hoursWeek = hourTracking.reduce((acc, current) => { 
    let currentTotal = (current.end - current.start);
    console.log(currentTotal);
    (acc + currentTotal); //acc is not storing the values
    console.log(acc);
}, 0)

console.log(hoursWeek);
console.log("__________________9___________________");

function mapping(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {

        let callbackResult = callback(array[i])
        result.push(callbackResult);
        //console.log(result);
    }
    return result;
}

const powerOfTwo = mapping([1, 2, 3, 4, 5], (val) => Math.pow(val, 2));

console.log(powerOfTwo);

console.log("_________________10___________________");

let board = [[1, 2, 3],
["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
[true, false]]

for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        console.log(board[i][j]);
    }
} 
