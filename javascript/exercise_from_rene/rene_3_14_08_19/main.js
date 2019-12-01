console.log('a' + +' ' + +'q')
console.log('b' + +'a' + +'a' + 'a')
console.log(('b' + +'a' + +'a' + 'a').toLowerCase());

console.log(('a' + +'a' + 'a' + 's').toLowerCase());



// Pure vs Impure Function
const array1 = [10, 20, 30, 40]
const array2 = [100, 200, 300, 400]


// Impure
const addNumbersImpure = () => {
    let sum = 0
    array1.forEach(number => sum += number)
    return sum
}


console.log(addNumbersImpure())


// Pure
const addNumbersPure = (arrayOfNumbers) => {
    let sum = 0
    arrayOfNumbers.forEach(number => sum += number)
    return sum
}
console.log(addNumbersPure(array1))
console.log(addNumbersPure(array2))



// Shortcut for function()
const addAB = a => a * 2

console.log(addAB(10))


// Callbacks
const callback = (a, b) => {
    console.log(a) // Array
    console.log(b) // Index
}
array1.forEach(callback)


// Calculator function // Add, Subtract, Multiply // function(10, 20, add) =>
const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

const calculator = (a, b, callback) => {
    return callback(a, b)
}

console.log(calculator(10, 20, add))
console.log(calculator(10, 20, sub))
console.log(calculator(10, 20, mul))
console.log(calculator(10, 20, div))



// Define your own forEach(array, callback)

const myForEach = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        console.log(i);
        func(array[i], i);
    }
};


//=====================================?

let sum = 0;

let callback2 = (data, index) => {
    console.log(data);
    console.log(index);
    sum += data
};

myForEach(array1, callback2);
console.log(sum);




let callback3 = (data, index) => {
    data = data + index * 2;
    console.log(data);

}

myForEach(array2, callback3);


let arr = [3, 5, 7, 9]

let callback4 = (data, index) => {
    console.log(data);
    console.log(index)
    data = data + index * 2;
    console.log(data);

}

myForEach(arr, callback4);





const myForEach2 = (firstName, func) => {
    console.log('firstName befor uppercase is ' + firstName);
    console.log(firstName);
    func(firstName);
    console.log(firstName);

};

let callback5 = (text) => {
    // text.toUpperCase();
    console.log(text.toUpperCase());
}

myForEach2('zohir', callback5);


// Beispiel von Michael
const a = {
    num: 0,
    valueOf: function () {
        return this.num += 1
    }
};
let b = 0;
console.log(a.num);
console.log(a.valueOf(),a.valueOf(),b);

const equality = (a == 4 && a == 5 && a == 6 && a=='1');

// console.log(typeof equality);

console.log(equality);


//Prototype array1.myForEach(callback);

Array.prototype.myForEach = () => {
    return 'Hello World'
}

// Array.prototype.myForEach = “Hello World”;
// console.log(Array.prototype.myForEach)

console.log(array1.myForEach())