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
const zahlen=[10,1,5];

let sortNumbers = (a, b) => {
    console.log(a);
    console.log(b);
    console.log(a-b);
    return a-b;
}

zahlen.sort(sortNumbers)
console.log(zahlen)
