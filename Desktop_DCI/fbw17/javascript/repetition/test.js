$_$wp(1);
let arrayOfNumbers = ($_$w(1, 0), [
    3,
    45,
    6,
    56,
    7,
    9
]);
function incrementByOne(arrayOfNumbers) {
    $_$wf(1);
    let newArray = ($_$w(1, 1), []);
    $_$w(1, 2), arrayOfNumbers.forEach(function (curr) {
        $_$wf(1);
        $_$w(1, 3), newArray.push(++curr);
    });
    return $_$w(1, 4), newArray;
}
$_$w(1, 5), $_$tracer.log(incrementByOne([
    3,
    45,
    6,
    56,
    7,
    9
]), 'incrementByOne([\n    3,\n    45,\n    6,\n ...', 1, 5);
function sum(arrayOfNumbers) {
    $_$wf(1);
    let newArr = ($_$w(1, 6), arrayOfNumbers.reduce(function (previousValue, currentValue) {
        $_$wf(1);
        return $_$w(1, 7), previousValue + currentValue;
    }, 0));
    return $_$w(1, 8), newArr;
}
$_$w(1, 9), $_$tracer.log(sum([
    3,
    45,
    6,
    56,
    7,
    9
]), 'sum([\n    3,\n    45,\n    6,\n    56,\n    ...', 1, 9);
$_$w(1, 10), $_$tracer.log(sum([
    1,
    2,
    3,
    4,
    5
]), 'sum([\n    1,\n    2,\n    3,\n    4,\n    5\n...', 1, 10);
$_$w(1, 11), $_$tracer.log(sum([
    6,
    7,
    7
]), 'sum([\n    6,\n    7,\n    7\n])', 1, 11);
const data = ($_$w(1, 12), [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
    'pogostick'
]);
const transportation = ($_$w(1, 13), data.reduce(function (obj, item) {
    $_$wf(1);
    $_$w(1, 14), obj[item]++;
    return $_$w(1, 15), obj;
}, {
    car: 0,
    truck: 0,
    bike: 0,
    walk: 0,
    van: 0,
    pogostick: 0
}));
$_$w(1, 16), $_$tracer.log(transportation, 'transportation', 1, 16);
let newObject = ($_$w(1, 17), { ...data });
$_$w(1, 18), $_$tracer.log(newObject, 'newObject', 1, 18);
let arrayOfObject = ($_$w(1, 19), [newObject]);
$_$w(1, 20), $_$tracer.log(arrayOfObject, 'arrayOfObject', 1, 20);
let newArray = ($_$w(1, 21), Object.entries(newObject));
$_$w(1, 22), $_$tracer.log(newArray, 'newArray', 1, 22);
const inventors = ($_$w(1, 23), [
    {
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Maitem',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
]);
function firstLast(arr) {
    $_$wf(1);
    return $_$w(1, 24), arr.map(item => {
        $_$wf(1);
        return $_$w(1, 25), item.first + ' ' + item.last;
    });
}
;
$_$w(1, 26), $_$tracer.log(firstLast(inventors), 'firstLast(inventors)', 1, 26);
$_$w(1, 27), $_$tracer.log(inventors.reduce((total, item) => {
    $_$wf(1);
    return $_$w(1, 28), total + (item.passed - item.year);
}, 0), 'inventors.reduce((total, item) => total ...', 1, 27);
let array = ($_$w(1, 29), [
    1,
    4,
    9,
    16,
    25,
    36
]);
let squareRoot = ($_$w(1, 30), array.map(number => {
    $_$wf(1);
    return $_$w(1, 31), Math.sqrt(number);
}));
$_$w(1, 32), $_$tracer.log(squareRoot, 'squareRoot', 1, 32);
function instanceOfLetter(str) {
    $_$wf(1);
    let object = ($_$w(1, 33), str.split('').reduce(function (obj, letter) {
        $_$wf(1);
        if ($_$w(1, 34), letter in obj) {
            $_$w(1, 35), obj[letter]++;
        } else {
            $_$w(1, 36), obj[letter] = 1;
        }
        $_$w(1, 37), $_$tracer.log(obj, 'obj', 1, 37);
        return $_$w(1, 38), obj;
    }, {}));
    return $_$w(1, 39), object;
}
$_$w(1, 40), $_$tracer.log(instanceOfLetter('hello world'), 'instanceOfLetter(\'hello world\')', 1, 40);
let friends = ($_$w(1, 41), [
    {
        name: 'Maria',
        films: [
            'Avengers: Infinity War',
            'Avatar'
        ],
        age: 22
    },
    {
        name: 'John',
        films: [
            'Forest Gump',
            'Pulp Fiction',
            'Spider-Man'
        ],
        age: 29
    },
    {
        name: 'Jean',
        films: [
            'Deadpool',
            'Incredibles 2'
        ],
        age: 20
    }
]);
function listOfMovie(arr) {
    $_$wf(1);
    return $_$w(1, 42), arr.reduce((total, current) => {
        $_$wf(1);
        return $_$w(1, 43), total.concat(current.films);
    }, []);
}
;
$_$w(1, 44), $_$tracer.log(listOfMovie(friends), 'listOfMovie(friends)', 1, 44);
let movies = ($_$w(1, 45), friends.map(function (item) {
    $_$wf(1);
    return $_$w(1, 46), `${ item.films }`;
}));
$_$w(1, 47), $_$tracer.log(movies, 'movies', 1, 47);
let listOfMovies = ($_$w(1, 48), []);
for (let i = 0; $_$w(1, 49), i < friends.length; i++) {
    for (let j = 0; $_$w(1, 50), j < friends[i].films.length; j++) {
        $_$w(1, 51), listOfMovies.push(friends[i].films[j]);
    }
}
$_$w(1, 52), $_$tracer.log(listOfMovies, 'listOfMovies', 1, 52);
function filterEvens(arr) {
    $_$wf(1);
    return $_$w(1, 53), arr.filter(num => {
        $_$wf(1);
        return $_$w(1, 54), num % 2 === 0;
    });
}
$_$w(1, 55), $_$tracer.log(filterEvens([
    1,
    2,
    3,
    11,
    12,
    13
]), 'filterEvens([\n    1,\n    2,\n    3,\n    1...', 1, 55);
const friends1 = ($_$w(1, 56), [
    'Rika',
    'Jacob',
    'Alex',
    'Oliver',
    'Marika'
]);
function filterItems(arr, str) {
    $_$wf(1);
    return $_$w(1, 57), arr.filter(name => {
        $_$wf(1);
        return $_$w(1, 58), name.includes(str);
    });
}
$_$w(1, 59), $_$tracer.log(filterItems(friends1, 'ka'), 'filterItems(friends1, \'ka\')', 1, 59);
$_$w(1, 60), $_$tracer.log(filterItems(friends1, 'e'), 'filterItems(friends1, \'e\')', 1, 60);
let originalArray = ($_$w(1, 61), [
    {
        key: 1,
        name: 'John'
    },
    {
        key: 2,
        name: 'Maria'
    },
    {
        key: 3,
        name: 'Oliver'
    },
    {
        key: 4,
        name: 'Jane'
    },
    {
        key: 5,
        name: 'Jack'
    },
    {
        key: 6,
        name: 'Albert'
    },
    {
        key: 7,
        name: 'Harry'
    },
    {
        key: 8,
        name: 'Ron'
    },
    {
        key: 9,
        name: 'Kenneth'
    },
    {
        key: 10,
        name: 'Kyle'
    }
]);
$_$w(1, 62), $_$tracer.log(originalArray.map(x => {
    $_$wf(1);
    let newObj = ($_$w(1, 63), {});
    $_$w(1, 64), newObj[x.key] = x.name;
    return $_$w(1, 65), newObj;
}), 'originalArray.map(x => {\n    let newObj ...', 1, 62);
function reformat(arr) {
    $_$wf(1);
    let newArray = ($_$w(1, 66), {});
    $_$w(1, 67), arr.map(function (object) {
        $_$wf(1);
        $_$w(1, 68), $_$tracer.log(object, 'object', 1, 68);
        $_$w(1, 69), newArray[object.key] = object.name;
    });
    return $_$w(1, 70), newArray;
}
;
$_$w(1, 71), $_$tracer.log(reformat(originalArray), 'reformat(originalArray)', 1, 71);
let newArray2 = ($_$w(1, 72), originalArray.map(keyValuePairs => {
    $_$wf(1);
    let newObj = ($_$w(1, 73), {});
    $_$w(1, 74), newObj[keyValuePairs.key] = keyValuePairs.name;
    return $_$w(1, 75), newObj;
}));
$_$w(1, 76), $_$tracer.log(newArray2, 'newArray2', 1, 76);
let arrayOfIntegers = ($_$w(1, 77), [
    4,
    200,
    90,
    30,
    12,
    75,
    21,
    3
]);
$_$wpe(1);