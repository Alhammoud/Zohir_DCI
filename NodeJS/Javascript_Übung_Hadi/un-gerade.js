module.exports = (n1, n2) => {

    console.log("n1 : ",n1);
    console.log("n2 : ",n2);
    console.log( typeof n1 );
    console.log( typeof n2 );

    console.log("n1 after parseInt() : ",parseInt(n1));
    console.log("n2 after parseInt() : ",parseInt(n2));
    console.log( typeof parseInt(n1) );
    console.log( typeof parseInt(n2) );

    if (n1 > n2 || n1 === n2) {
        return console.log(` Es muss die erste Argumente ${n1} kleiner von die zweite Argumente ${n2}`);
    } else {
        for (let i = n1; i <= n2; i++) {
            if(i%2==0){
                console.log(` ${i} ist gerade ..!`)
            }else{
                console.log(` ${i} ist ungerade ..!`)
            }
        }
    }
};