const bcrypt = require('bcrypt');

let mypassword = "blablaPassword_";

bcrypt.hash(mypassword, 10, (err, result) => {
    let hash = result;
    console.log(`${mypassword} =  ${hash}`);

    // Output : blablaPassword_ =  $2b$10$e35BNl8N3xxcOzoHQ0jvl.V28A82SX9HDJcPQh4/qRBNWzRQDQsyu

    // hash wurde generiert, jetzt wollen wir testen 


    let passwordLogin = "blablaPassword_";

    bcrypt.compare(passwordLogin, hash, (err, resultCompare) => {
        if(resultCompare){
            console.log('passwords match ..!');
        }else{
            console.log('passwords dont match ..!')
        }
    })
})