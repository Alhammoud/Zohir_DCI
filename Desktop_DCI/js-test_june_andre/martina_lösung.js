//1 
// filtering array elements larger than 10
let array = [12, 212, 21, 21, 2134243, 54, 54, 6, 5676];
let filter = array.filter(items => items > 10);
console.log(filter);
//2 
class Course {
    constructor(teacher, type, duration, number) {
        this.teacher = teacher;
        this.type = type;
        this.duration = duration;
        this.number = number;
    }
    spaceNeeded() {
        this.size = this.number * 22;
        return `The class should be ${this.size}m2`;
    }
}
Course.prototype.details = function () {
    return `This is a ${this.type} class which is taught by ${this.teacher} for a ${this.duration}. It has ${this.number} students in the class. ${this.spaceNeeded()}`
}
let courseObject = new Course("Martina", "Web Dev", "year", 22);
console.log(courseObject.spaceNeeded());
console.log(courseObject.details());
//3
let events = [{
        weekDay: 'Monday',
        turnout: 20
    },
    {
        weekDay: 'Tuesday',
        turnout: 23
    },
    {
        weekDay: 'Wednesday',
        turnout: 61
    },
    {
        weekDay: 'Thursday',
        turnout: 19
    },
    {
        weekDay: 'Friday',
        turnout: 30
    },
]
let sortedEvents = events.sort(compareFunction);
function compareFunction(a, b) {
    return b.turnout - a.turnout;
};
/*let sortedEvents = events.sort((a, b) => {
    if (b.turnout > a.turnout) {    
        return 1;
    } else {
        return -1;
    }
})*/
console.table(sortedEvents);
//4
let arrayNumbers = [1, 2, 3, 4];
let mapped = arrayNumbers.map(x => Math.pow(x, 2));
console.log(mapped);
let filteredArray = mapped.filter(element => element % 2 !== 0);
console.log(filteredArray);
//5
function daysBetween(dateOne, dateTwo) {
    // 1 day in milliseconds
    const oneDay = 1000*60*60*24;
    //converting both dates into milliseconds
    let dateOneMil = dateOne.getTime();
    let dateTwoMil = dateTwo.getTime();
    //calculating the difference in milliseconds
    const difference = dateTwoMil - dateOneMil;
    //converting to days
    return `${Math.round(difference / oneDay)} days since Germany won the world cup`
}
let today = new Date();
let winDate = new Date(2014, 06, 13);
console.log(daysBetween(winDate, today));
// 6
const hourTracking = [{
        day: 'Monday',
        start: 8,
        end: 17
    },
    {
        day: 'Tuesday',
        start: 9,
        end: 15
    },
    {
        day: 'Wednesday',
        start: 10,
        end: 18
    },
    {
        day: 'Thursday',
        start: 7,
        end: 14
    },
    {
        day: 'Friday',
        start: 6,
        end: 12
    }
];
const hours = hourTracking.reduce((total, hourTracking) => {
    return total += (hourTracking.end - hourTracking.start);
}, 0);
/*function hours(week) {
    let hours = 0;
    week.forEach(day => {
        hours += day.end - day.start;
    });
    return hours;
}*/
console.log(hours);
// 7 Part1
function mapping(array, fn) {
    const mappedArray = array.map(x => fn(x));
    return mappedArray;
}
// declared function
function powerOf(val) {
    return (Math.pow(val, 2));
}
//passing a declared function
const power = mapping([1, 2, 3, 4, 5], powerOf);
console.log(power)
//passing an anonymous function
const powerOfTwo = mapping([1, 2, 3, 4, 5], function (val) {
    return Math.pow(val, 2)
});
console.log(powerOfTwo);
//passing an arrow function
const timesTwo = mapping([1, 2, 3, 4, 5], (val) => val * 2)
console.log(timesTwo);
const squareRoot = mapping([1, 2, 3, 4, 5], (val) => Math.sqrt(val));
console.log(squareRoot);
// 8
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];
for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        console.log(board[i][j]);
    }
}
