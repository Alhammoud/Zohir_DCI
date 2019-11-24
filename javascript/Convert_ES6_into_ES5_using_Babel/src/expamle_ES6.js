/* class Hello{
    static world(){
        console.log('Hello, World');
    }
}

Hello.world(); */


var myArr = [34,45,67,34,2,67,1,5,90];
var evenArr = [];
var oddArr = [];

myArr.map( x => x%2==0 ? evenArr.push(x) : oddArr.push(x) )

myArr.forEach(x => {
    if (x % 2 === 0) {
        evenArr.push(x);
    } else {
        oddArr.push(x);
    }
});

( x => x%2==0 ? evenArr.push(x) : oddArr.push(x) )

if (true) {
    console.log(1)
} 
else {
    console.log(0)
}


var operator = true ? 1 : 0
console.log(operator)