console.log('14_execution_context');

let name = 'steffi';

function first() {
    let greeting = 'Hallo ';
    let x = greeting + name;
    second();
    console.log(x);
}


function second(){

    let greeting = 'Hi ';
    let x = greeting + name;
    third();
    console.log(x);

}

function third(){

    let greeting = 'Hey ';
    let x = greeting + name;

    console.log(x);

};

first();