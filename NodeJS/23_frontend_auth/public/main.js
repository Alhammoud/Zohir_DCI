console.log('Hallo from main.js');


const outputobj = document.getElementById('output');

const showContent = async () => {

    const result = await fetch('http://localhost:3000/content');

    // const data = await result.json();
    const data = await result.text();

    outputobj.innerHTML = data;
}

const showPrivate = async () => {
    
    const result = await fetch('http://localhost:3000/privateProfile');

    //const data = await result.json();
    const data = await result.text();


    outputobj.innerHTML = data;
}

const login = async () => {

    const userobj = document.getElementById('user');
    const passwordobj= document.getElementById('password');

    const result = await fetch(`http://localhost:3000/login?email=${userobj.value}&password=${passwordobj.value}`);

    // const data = await result.json();
    const data = await result.text();

    outputobj.innerHTML = data;
}


const logout = async () => {


    const result = await fetch(`http://localhost:3000/logout`);

    const data = await result.text();

    outputobj.innerHTML = data;
}