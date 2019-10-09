// mysql client bibliothek
const mysql= require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'zohir',
    password:'password',
    database:'usertable_mysql'
});



 const executeQuery1 = () => {

    // query1 : daten lesen

    const query1 = `select * from users`;

    connection.query(
        query1,
        (err,rows) => {
            // falls ein err definiert wurde, dann mal schauen was schiefgelaufen ist
            // evtl. falsche sql syntax
            if(err){
                console.log('Error:'+ err);
                return;
            }
            console.log( rows );
        }
    );
 }

 executeQuery1();

// Output: 

/*

[
  RowDataPacket {
    id: 1,
    name: 'Stefan',
    email: 'stefan@abc.net',
    description: 'Stefan wohnt in Berlin. Stefan mag Fussball.',
    profilePic: 'stefan.jpg'
  },
  RowDataPacket {
    id: 2,
    name: 'Lara',
    email: 'lara@gmx.net',
    description: 'Lara studiert BWL. Lara trifft sich mit Clara.',
    profilePic: 'lara.jpg'
  },
  RowDataPacket {
    id: 3,
    name: 'Julia',
    email: 'julia@gmail.com',
    description: 'Julia mag Töpfern. Sie hat Talent.',
    profilePic: 'julia.jpg'
  },
  RowDataPacket {
    id: 4,
    name: 'Karsten',
    email: 'karsten@foo.net',
    description: 'Karsten tötet gerne Menschen. Karsten mag Bienen als Ausgleich.',
    profilePic: 'karsten.jpg'
  },
  RowDataPacket {
    id: 5,
    name: 'Peter',
    email: 'peter@xing.net',
    description: 'Da ist doch der von RoboCop. Bevor er durchsiebt wurde.',
    profilePic: 'peter.jpg'
  },
  RowDataPacket {
    id: 6,
    name: 'Steffi',
    email: 'steffi@xing.net',
    description: 'Steffi liest gerne Bücher. Sie ist sehr fleißig in der Uni.',
    profilePic: 'steffi.jpg'
  }
]

*/

const executeQuery2 = () => {

    // query2 : daten updaten

     const query2 = `update customers set firstname = ? , lastname = ? where firstname ='Max'`;

    // name = req.query.id;
    // const query2 = `update customers set firstname = ${name} , lastname = ? where firstname ='Max'`;

    connection.query(
        query2,
        [ 'Brend','Mueller'],
        (err,rows) => {
            // falls ein err definiert wurde, dann mal schauen was schiefgelaufen ist
            // evtl. falsche sql syntax
            if(err){
                console.log('Error:'+ err);
                return;
            }
            console.log( rows );
        }
    );
 }

 // executeQuery2();


const executeQuery3 = () => {

    // query3 : daten einfügen

     const query3 = `insert into customers (id, firstname, lastname, registered, birthdate, phone, city, street, postal, email)
     values(?,?,?,now(),?,?,?,?,?,?)`;

    // name = req.query.id;
    // const query2 = `update customers set firstname = ${name} , lastname = ? where firstname ='Max'`;

    connection.query(
        query3,
        [ 
            3000, // falls AI (autoincrement) bei Datenbank enabled ist, dann brauchen wir keine ID
            'Maxxxxxxxx',
            'Mustermannnnn',
            /* now(), */
            '1988-01-10',
            '4921424',
            'Berlin',
            'Main Street 5',
            '14332',
            'max@abc.com'
        ],
        (err,rows) => {
            // falls ein err definiert wurde, dann mal schauen was schiefgelaufen ist
            // evtl. falsche sql syntax
            if(err){
                console.log('Error:'+ err);
                return;
            }
            console.log( rows );
        }
    );
 }

 // executeQuery3();




const executeQuery4 = () => {

    // query4 : daten löschen

     // const query4 = `delete from customers where city = ? `;

     const query4 = `delete from customers where city = 'Dortmund'`;

    connection.query(
        query4,
        /* [ 'Dortmund'], */
        (err,rows) => {
            // falls ein err definiert wurde, dann mal schauen was schiefgelaufen ist
            // evtl. falsche sql syntax
            if(err){
                console.log('Error:'+ err);
                return;
            }
            console.log( rows );
        }
    );
 }

 // executeQuery4();
