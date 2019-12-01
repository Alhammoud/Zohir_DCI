const numbers = [1, 2, 3, 4, 5, 6, 7]

const prices1 = [10, 20, 30, 40, 40, 60]

const prices2 = [70, 80, 90, 100]

const colors = ["Red", "Green", "Blue", "Yellow", "Red", "Green Red"];

const names = ["Rene", "Tom", "Claire", "Ralph", "Ben"]



console.log(1 + 1);

//.map()
//array.map(function(currentValue, index, arr), thisValue)


numbers.map((data, index) => {
    console.log(data);
    console.log(index);

    return data * 2;
})

console.log(numbers)


//.forEach()
//array.forEach(function(currentValue, index, arr), thisValue)

let newArray = []
numbers.forEach((data, index) => {
    return newArray[index] = data * 2;
})

console.log(newArray)

//.reduce()
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

let reduceArray = numbers.reduce((data, current) => data + current)
console.log(reduceArray)

//.filter()
//array.filter(function(currentValue, index, arr), thisValue)

const string = "Blau";
console.log(string.indexOf("Blau"));

newColor = [];
newColor = colors.filter(value => {
    if (value !== "Red") {
        return value;
    }
})

console.log(newColor);


newColor2 = [];
newColor2 = colors.filter(value => {
    console.log(value);
    console.log(value.indexOf("Red"))
    return value.indexOf("Red") < 0
});

console.log(newColor2);


//.reverse()
//array.reverse()

let arrayReverse = colors.reverse();
console.log(colors);


//.concat()
//array1.concat(array2, array3, ..., arrayX)

//.join()
//array.join(separator)

//.push()
//array.push(item1, item2, ..., itemX)

//.pop()
//array.pop()

//.slice()
//array.slice(start, end)


// .sort()
// array.sort(compareGunction)


Array.prototype.sortNumbers = function () {
    let sortNumbers = (zahl1, zahle2) => {

    };
    return this.sort(sortNumber)
}
const zahlen = [10, 1, 5];

let sortNumbers = (a, b) => {
    console.log(a);
    console.log(b);
    console.log(a - b);
    return a - b;
}

zahlen.sort(sortNumbers)
console.log(zahlen)



const cars = [{
        name: "Mercedes",
        color: "Grey",
        age: 2,
        price: 90000
    },
    {
        name: "Opel",
        color: "Green",
        age: 1,
        price: 40000
    },
    {
        name: "VW",
        color: "Yellow",
        age: 15,
        price: 30000
    },
    {
        name: "Audi",
        color: "Blue",
        age: 3,
        price: 60000
    },
    {
        name: "Citroen",
        color: "Pink",
        age: 11,
        price: 40000
    },
    {
        name: "Jaguar",
        color: "Orange",
        age: 5,
        price: 80000
    },
    {
        name: "Ferrari",
        color: "Red",
        age: 6,
        price: 500000,
    }
];
//1. 20% Rabatt auf Fahrzeuge älter als 10 Jahre
//2. Sortieren nach Preis
//3. Pinke Fahrzeuge in Rot umlackieren
//4. Gesamtwert des Fuhrparks ermitteln

let newCars = cars.map((data, index) => {
    return {
        ...data,
        discountPrice: data.price * 5
    }
});

console.log(newCars);


