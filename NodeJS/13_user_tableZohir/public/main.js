console.log('Hallo world from Frontend...! (main.js)');

// asynchroner
/* (async () =>{

})(); */

/* const containerObj = document.getElementById('container');
 */



// Aufgabe :
// Gib dem User Feddback, dass die Daten noch geladen werden.
// Zeige, solange die Daten geladen werden, einen Lade-Spinner.
// SChaue mal auf https://loading.io

const loadUsers = async () => {
   // showSpinner();
   
   
   const result = await fetch ('http://localhost:3000/users');
   console.log("const result = await fetch ('http://localhost:3000/users'); ");
   console.log(result);


//    const result = await fetch('http://localhost:3000/users_delay');
//    console.log("const result = await fetch('http://localhost:3000/users_delay');");
//    console.log(result);
   
    console.log( 'typeof result');
    console.log( typeof result);

    
    const data = await result.json();

    // const responseStr = JSON.stringify(data);

    // console.log('data from server http://localhost:3000/users');
    // console.log('const data = await result.json();');
    // console.log(data);

    // Aufgabe :
    //
    // Basierend auf diesen Daten.
    // baue die Tabelle auf.

    let table = `
                    <table>
                         <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>e-MAil</th>
                            <th>Description</th>
                            <th>Bild</th>
                         </tr>    
    `;

    for (user of data) {
        table += `
                    <tr>
                        <th>${user.id}</th>
                        <th>${user.name}</th>
                        <th>${user.email}</th>
                        <th>${user.description}</th>
                        <th><img src="${user.profilePic}" class="imgUser" alt="" width="200px" height="200px"></th>

                    </tr>    
        `;
    }

    table += `</table>`;

    const tableObj = document.getElementById('content');

    tableObj.innerHTML = table;
}

showSpinner = () => {
    const showSpinnerObj = document.getElementById('content');
    showSpinnerObj.innerHTML='<img src="willkommen.gif" alt="willkommen.gif">';

}
loadUsers();
console.log('loadUsers(); in main.js');
console.log(loadUsers());

/* 
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);





 */












