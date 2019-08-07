
//1. Write a program to compute the sum and product of an array of integers.

console.log(`---------------1 ---------------`);
var array = [10, 20, 30, 40, 50];
var sum = 0;
var mult=1 ;
for(let s = 0; s < array.length; s++){
  sum = sum + array[s];
  mult= mult*array[s];
}
console.log("Sum of array = ",sum);
console.log("Multiply of array = ",mult);

/* 2. Write a program to create the following pattern:
*
* *
* * *
* * * *
* * * * *
*/
console.log(`---------------2---------------`);

var n = 5;
var stars = "";
for(var i=0; i<n; i++){
     stars +=  " *";
     console.log(stars);
  }
  console.log(`---------------2''''---------------`);

for (var i = 5; i >= 1; i--) {
 var ouput = "";
 for (var j = i; j >= 1; j--) {
     ouput += " *"
 }
 console.log(ouput);
}
    /*
    3. Write a program which prints the elements of the following array:
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output:
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1" */
console.log(`---------------3---------------`);
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
var i=0;

for(  i=0;i<arr.length;i++){
  console.log(`row ${i}` );
 for(let j=0;j<arr[i].length;j++){
     console.log(`${arr[i][j] }`  );
  }
}

/*
4. Write a program that will output the following using loops:
>1 1 1 2 2 2 3 3 3 4 4 4
*/
  console.log(`---------------4---------------`);
  let arr1=[];
  for(let i=1;i<=4;i++){
     for(let j=1;j<4;j++){
        arr1.push(i);
        //console.log(`${arr1}` );
     }
  }
  console.log(`${arr1.join(` `)}` );
      
/* 5. Write a program that will output the following using loops:
>0 1 2 3 4 0 1 2 3 4 0 1 2 3 4  */
  console.log(`---------------5---------------`);
  let arr2=[];
  for(let i=0;i<3;i++){
     for(let j=0;j<5;j++){

        arr2.push(j);
     }
  }
  console.log(`${arr2.join(` `)}` );