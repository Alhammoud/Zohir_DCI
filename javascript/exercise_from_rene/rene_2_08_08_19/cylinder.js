const cylinders = [{
        id: 1,
        height: 50,
        radius: 10
    },
    {
        id: 2,
        height: 50,
        radius: 20
    },
    {
        id: 3,
        height: 55,
        radius: 35
    },
    {
        id: 4,
        height: 25,
        radius: 35
    },
    {
        id: 5,
        height: 23,
        radius: 25
    }
];
//Write a function that:
//1. Calculates the cylinder volume
//2. Removes all cylinders who are above 50.000 cm3 in volume
//3. Sort all cylinders by volume

//cyl_height * Math.PI * radius * radius;


//1. Calculates the cylinder volume

cylinders.forEach((cylinder) => {
    // cylinder.volum = cylinder.height * Math.PI * Math.pow(Math.PI, cylinder.radius);
    cylinder.volum = cylinder.height * Math.PI * cylinder.radius * cylinder.radius;
    console.log(cylinder.volum)
})

console.log(cylinders)
console.table(cylinders)



cylinders.sort( (x, y)=> {
    return x.volum - y.volum;
})
console.log(" The Array of cylinders after sorting ::::")
console.table(cylinders)

//2. Removes all cylinders who are above 50.000 cm3 in volume


// cylinders.forEach((cylinder) => {
//     if (cylinder.volum > 50000) {
//         cylinders.splice(cylinder, 1);
//     }

// })


newCylinders = cylinders.filter((value,index) => {
    if(cylinders[index].volum < 50000){return value;}
});
console.log(newCylinders);




//3. Sort all cylinders by volume

newCylinders.sort( (x, y)=> {
    return x.volum - y.volum;
})

console.log(newCylinders)
console.table(newCylinders)
