console.log(`----------------------------------------1---------------------------------------------`)
let numbers=[1,2,3,11,12,13];
var newNumbers = numbers.map(function(number){
    return (number >10);
  })
  console.log(newNumbers);

var newNumbers = numbers.filter(function(number){
  return (number >10);
})
console.log(newNumbers);

console.log(`-----------------------------------------2-------------------------------------------`)
function validN(num1){

    if((typeof num1 == 'number')&&(num1.length==4)&&(num1[num1.length-1] %=2 )){
        console.log(num1 + " is a number.");
        }else{
        console.log(num1 + " is not a number.");
        }
}
validN(1234);

console.log(`---------------------------------------3---------------------------------------------`)
 class DCI{
     constructor(type,teacher,group,NOfStudent){
         this.type=type;
         this.teacher=teacher;
         this.group=group;
         this.NOfStudent=NOfStudent;
     }
     howBigClassroom(){
         console.log(`a classroom ${this.type} is ${this.NOfStudent*22} m²`)
     }
 }
DCI.prototype.details=function(){
    console.log(`This is ${this.type} ${this.group} course taught by ${this.teacher}. There are ${this.NOfStudent} students taking the course.`);
}

 let FWB13a=new DCI("yearLongCourse","Mariam&Fran","webDevelopment",25);
 FWB13a.howBigClassroom();
 FWB13a.details();
 let FWB13a1=new DCI("orientationCourse","Jork","marketing",10);
 FWB13a1.howBigClassroom();
 FWB13a1.details();

console.log(`------------------------------------------4-------------------------------------------`)
let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]

const oldTurnout = events.sort(function (a, b) {
    const last = a.turnout;
    const next = b.turnout;
    if (last > next) {
        return -1;
    } else {
        return 1;
    }
});

console.table(oldTurnout);


console.log(`----------------------------------------5---------------------------------------------`)

let arr = [1, 2, 3, 4];
let ReturnSquaredOdds=function (arr){
const squaresN = arr.map(x => x ** 2);
console.log(squaresN);
let arr1=[...squaresN]

const evenNumber=arr1.filter(a=> (a%2== 0));
 console.log(`evenNumber is ${evenNumber}`)

 const oddNumber=arr1.filter(a=> (a%2!= 0));
 console.log(oddNumber)
}
ReturnSquaredOdds(arr);


console.log(`------------------------------------------6-------------------------------------------`)

/* 
#### 6. 10,000  
Create a (small) game!
* Each player has 6 dice. (Each dice has the possibility to roll from 1-6).
* Each player rolls all 6 dice during each turn and the player's score is added to their individual total. 
* The first player to reach 10,000 wins. 
* Example of expected output: "Player 1: 9984, Player 2: 10,002 - Player 2 wins!"
*/
 let sum=0;
let factorial=function(number){

    if(number<=0){return 1;}
    else {return (number*factorial(number-1))}
 sum=sum+factorial;

};

console.log(factorial(6));
console.log(sum)

console.log(`----------------------------------------7---------------------------------------------`)
var date1, date2;
         date1 = new Date();
         console.log(date1);
         date2 = new Date( "Jul 13 2014" );
         console.log(date2);

         var res = Math.abs(date1 - date2) / 1000;
         var days = Math.floor(res / 86400);
         console.log("Difference: "+days);


console.log(`------------------------------------------8-------------------------------------------`)
const hourTracking = [
      { day: 'Monday', start: 8, end: 17},
      { day: 'Tuesday', start: 9, end: 15},
      { day: 'Wednesday', start: 10, end: 18},
      { day: 'Thursday', start: 7, end: 14},
      { day: 'Friday', start: 6, end: 12},
    ];


    const WorkingHours = hourTracking.reduce((acc, cur) => acc + (cur.end-cur.start), 0);
console.log(`total hourTracking: ${WorkingHours} Hours `);

console.log(`----------------------------------------9---------------------------------------------`)
/* 
function mapping(arr2){
    val=[...arr2]
    const powerOfTwo = mapping(arr2, (val) => Math.pow(val,2) );
    }
    mapping([1, 2, 3, 4, 5])
    //Expected Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]
 */


console.log(`------------------------------------------10-------------------------------------------`)
/* 
Given the 2D Array below, **loop** through the arrays to print the values. 
```javascript
let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
	     [true, false]]
``` */

let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
	     [true, false]]
for (let i=0;i<board.length;i++){

    for (let j=0;j<board[i].length;j++){


console.log(board[i][j]);
}
} 
