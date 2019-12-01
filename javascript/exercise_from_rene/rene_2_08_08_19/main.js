//Finde die gemeinsamen Elemente von arrayA und arrayB

const arrayA = ["a", "b", "c", "d", "e"]
const arrayB = ["f", "g", "c", "i", "e"]


// Array.forEach( function(current_value, index, initial_array) {}, this_context )


// Lösung Zohir

let compare = (arr1, arr2) => {

    const finalArr = [];
    arr1.forEach((e1) => arr2.forEach((e2) => {
            if (e1 === e2) {
                finalArr.push(e1)
            }
        }

    ));

    return finalArr;
};

console.log(compare(arrayA, arrayB));

// Lösung Holger

let comparedItems = [];
const arrayCompare = (ersterArray, zweiterArray) => {
    for (let elem1 of ersterArray) {
        for (let elem2 of zweiterArray) {
            if (elem1 === elem2) {
                comparedItems.push(elem1)
            }
        }
    }
}
arrayCompare(arrayA, arrayB);
console.log(comparedItems)



//Wie alt ist jede einzelne Person?
//Sortiert das Array nach Alter
//Bonus: Wer hat als nächstes Geburtstag


const people = [{
        name: "Rene",
        dateOfBirth: "02/13/1986"
    },
    {
        name: "Hans-Heinrich",
        dateOfBirth: "07/26/1974"
    },
    {
        name: "Holger",
        dateOfBirth: "02/24/1969"
    },
    {
        name: "Patrick",
        dateOfBirth: "02/25/1980"
    },
    {
        name: "Zohir",
        dateOfBirth: "01/01/1989"
    },
    {
        name: "Almas",
        dateOfBirth: "07/17/1954"
    },
    {
        name: "Björn",
        dateOfBirth: "07/03/1982"
    },
]


console.log(new Date().getTime())



//Wie alt ist jede einzelne Person?



// const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);

// console.log(getAge("01/01/1989"));

people.forEach((person) => {

    person.age=Math.floor((new Date() - new Date(person.dateOfBirth).getTime()) / 3.15576e+10);
    console.log(person.age)


    console.log(Math.floor((new Date() - new Date(person.dateOfBirth).getTime()) / 3.15576e+10) + " "+ person.name)
    console.log(person.age + " "+ person.name)
})





//Sortiert das Array nach Alter


// ageArray.sort(function (a, b) {
    //     return a - b;
    // });



// console.log(people.sort( (x, y)=> {
//     return x.age - y.age;
// }))

people.forEach((person) => {

    person.age=Math.floor((new Date() - new Date(person.dateOfBirth).getTime()) / 3.15576e+10);
    console.log(people.sort( (x, y)=> {
        return x.age - y.age;
    }))
})




// display Array of People
console.log(people);

people.forEach((e) => {
    console.log('name : '+e.name + '--' + ' Date Of Birth: '+e.dateOfBirth + '--' + ' Age: '+ e.age );
    
})





/* people.forEach((person) => {

    console.log(new Date().getTime())


    console.log(Math.floor((new Date() - new Date("07/03/1982").getTime()) / 3.15576e+10))

    console.log(person.dateOfBirth)

    
    console.log(Math.floor((new Date() - new Date(person.dateOfBirth).getTime())))
    console.log(Math.floor((new Date() - new Date(person.dateOfBirth).getTime()) / 3.15576e+10) + " "+ person.name)
    console.log(new Date() - new Date(person.dateOfBirth).getTime() / 3.15576e+10)

    // console.log(new Date().getTime() - new Date(dateOfBirth).getTime())
})


people.forEach((person) => {
    console.log(Math.floor((new Date() - new Date(person.dateOfBirth).getTime()) / 3.15576e+10) + " "+ person.name)
    let ageArray=Math.floor((new Date() - new Date(person.dateOfBirth).getTime()) / 3.15576e+10) + " "+ person.name;
    console.log(ageArray)

    
})
 */


 //Bonus: Wer hat als nächstes Geburtstag

