const intro = (userInfo) => {
    console.log(' Hallo from introduction.js \n ')
    console.log(`Hi, mein Name  ist ${userInfo.firstname}  ${userInfo.lastname} und meine Email ist ${userInfo.email}. Ich wurde geboren am ${userInfo.birthyear}. \n`);
}

module.exports=intro;
