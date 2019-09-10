class Person {
    constructor(
        firstname,
        lastname,
        email,
        birthyear
    ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.birthyear = birthyear;
        console.log(`Hallo from Person.js from constructor ..Ich bin ${this.firstname} ...! \n`);
    }


    // wird dem Prototyp angehängt
    alter_count() {
        
        
        console.log('Hallo from Person.js from alter_count() Methode');

        let year_Aktuell = new Date().getFullYear();

        return console.log(`${this.firstname} ${this.lastname} ist ${year_Aktuell-this.birthyear}  Jahre alt. \n `);
    }

}

module.exports = Person;