class Greetr{
    constructor(){
        this.greeting='Hallo from greet4.js from constructor ';
    }

    greet(){
        console.log('this.greeting from greet4.js from Methode greet()');
        console.log(this.greeting);
    }
}

module.exports=Greetr;