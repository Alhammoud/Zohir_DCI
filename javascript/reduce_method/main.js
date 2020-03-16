
var numbers = [175, 50, 25];
console.log(numbers);
let i=0;

function myFunc(previousValue, currentValue, currentIndex, array) {

    i++;
    console.log(i)

    console.log('previousValue =' , previousValue);
    console.log('currentValue =' , currentValue);
    console.log('currentIndex =' ,currentIndex);
    console.log('array =', array);
    
    

  return previousValue - currentValue;
}

/* 

(method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number (+2 overloads)
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

@param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.




reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

reduce( callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number

reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: number[]) => U, initialValue: U): U
If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.


Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

*/

/* 

Syntax
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)



Return Value:	Returns the accumulated result from the last call of the callback function

Parameter Values
Parameter	Description
function(total,currentValue, index,arr)	Required. A function to be run for each element in the array.
Function arguments:
Argument	Description
total	Required. The initialValue, or the previously returned value of the function
currentValue	Required. The value of the current element
currentIndex	Optional. The array index of the current element
arr	Optional. The array object the current element belongs to


*/
const result = numbers.reduce(myFunc);

console.log('result = ', result);
