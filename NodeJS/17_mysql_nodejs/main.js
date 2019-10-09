// mysql client bibliothek
const mysql= require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'zohir',
    password:'password',
    database:'online_shop'
});



 const executeQuery1 = () => {

    // query1 : daten lesen

    const query1 = `select * from customers`;

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

 // executeQuery1();

 // Output:
/*
/usr/local/bin/node --inspect-brk=3848 main.js
Debugger listening on ws://127.0.0.1:3848/fb6df031-78c9-4757-929b-adc7755878fd
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
null: Array(52) [RowDataPacket, RowDataPacket, RowDataPacket, RowDataPacket, RowDataPacket, RowDataPacket, RowDataPacket, RowDataPacket, …]
length: 52
__proto__: Array(0) [, …]
0: RowDataPacket {id: 0, firstname: "PETER", lastname: "Friedel", …}
1: RowDataPacket {id: 1, firstname: "JUERGEN", lastname: "Erickson", …}
2: RowDataPacket {id: 2, firstname: "MONIKA", lastname: "Brueckner", …}
3: RowDataPacket {id: 3, firstname: "PAUL", lastname: "Erickson", …}
4: RowDataPacket {id: 4, firstname: "PETER", lastname: "Wolta", …}
5: RowDataPacket {id: 5, firstname: "KATARINA", lastname: "Pechstein", …}
6: RowDataPacket {id: 6, firstname: "FERDINAND", lastname: "Mueller", …}
7: RowDataPacket {id: 7, firstname: "ANNA", lastname: "Oberbaum", …}
8: RowDataPacket {id: 8, firstname: "JUDITH", lastname: "Meier", …}
9: RowDataPacket {id: 9, firstname: "FERDINAND", lastname: "Torres", …}
10: RowDataPacket {id: 10, firstname: "MARKUS", lastname: "Torres", …}
11: RowDataPacket {id: 11, firstname: "ACHIM", lastname: "Schulz", …}
12: RowDataPacket {id: 12, firstname: "JULIA", lastname: "Schmidt", …}
13: RowDataPacket {id: 13, firstname: "ACHIM", lastname: "Rudolf", …}
14: RowDataPacket {id: 14, firstname: "ANNA", lastname: "Wohlgefahrt", …}
15: RowDataPacket {id: 15, firstname: "HANNES", lastname: "Drechsler", …}
16: RowDataPacket {id: 16, firstname: "PAUL", lastname: "Wolta", …}
17: RowDataPacket {id: 17, firstname: "ACHIM", lastname: "Ziegler", …}
18: RowDataPacket {id: 18, firstname: "MARKUS", lastname: "Monser", …}
19: RowDataPacket {id: 19, firstname: "FERDINAND", lastname: "Wohlgefahrt", …}
20: RowDataPacket {id: 20, firstname: "ULRIKE", lastname: "Torres", …}
21: RowDataPacket {id: 21, firstname: "KATARINA", lastname: "Wolta", …}
22: RowDataPacket {id: 22, firstname: "PETER", lastname: "Tischler", …}
23: RowDataPacket {id: 23, firstname: "ANATOL", lastname: "Otto", …}
24: RowDataPacket {id: 24, firstname: "FERDINAND", lastname: "Mueller", …}
25: RowDataPacket {id: 25, firstname: "FERDINAND", lastname: "Mueller", …}
26: RowDataPacket {id: 26, firstname: "HANNES", lastname: "Oberbaum", …}
27: RowDataPacket {id: 27, firstname: "JUDITH", lastname: "Erickson", …}
28: RowDataPacket {id: 28, firstname: "ACHIM", lastname: "Schmidt", …}
29: RowDataPacket {id: 29, firstname: "KEVIN", lastname: "Ziegler", …}
30: RowDataPacket {id: 30, firstname: "BARBARA", lastname: "Pechstein", …}
31: RowDataPacket {id: 31, firstname: "PAUL", lastname: "Tischler", …}
32: RowDataPacket {id: 32, firstname: "ACHIM", lastname: "Wohlgefahrt", …}
33: RowDataPacket {id: 33, firstname: "PAUL", lastname: "Schulz", …}
34: RowDataPacket {id: 34, firstname: "KRISTIN", lastname: "Wolta", …}
35: RowDataPacket {id: 35, firstname: "PETER", lastname: "Torres", …}
36: RowDataPacket {id: 36, firstname: "ACHIM", lastname: "Rudolf", …}
37: RowDataPacket {id: 37, firstname: "ULRIKE", lastname: "Brueckner", …}
38: RowDataPacket {id: 38, firstname: "HANS", lastname: "Tischler", …}
39: RowDataPacket {id: 39, firstname: "ANNA", lastname: "Schulz", …}
40: RowDataPacket {id: 40, firstname: "HANS", lastname: "Drechsler", …}
41: RowDataPacket {id: 41, firstname: "LORENZ", lastname: "Mueller", …}
42: RowDataPacket {id: 42, firstname: "JENS", lastname: "Drechsler", …}
43: RowDataPacket {id: 43, firstname: "JOHNATHAN", lastname: "Monser", …}
44: RowDataPacket {id: 44, firstname: "KEVIN", lastname: "Kleinschmidt", …}
45: RowDataPacket {id: 45, firstname: "JENS", lastname: "Mueller", …}
46: RowDataPacket {id: 46, firstname: "ULRIKE", lastname: "Rudolf", …}
47: RowDataPacket {id: 47, firstname: "JOACHIM", lastname: "Torres", …}
48: RowDataPacket {id: 48, firstname: "PAUL", lastname: "Meier", …}
49: RowDataPacket {id: 49, firstname: "MARKUS", lastname: "Otto", …}
50: RowDataPacket {id: 1000, firstname: "MAX", lastname: "Mustermann", …}
51: RowDataPacket {id: 2000, firstname: "MAXX", lastname: "Mustermann", …}

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

  // Output:
/*

/usr/local/bin/node --inspect-brk=39975 main.js
Debugger listening on ws://127.0.0.1:39975/c8a9a5f0-fe9f-4eaa-8ba8-63b7d58cb983
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
null: OkPacket {fieldCount: 0, affectedRows: 1, insertId: 0, serverStatus: 34, warningCount: 0, …}
affectedRows: 1
changedRows: 1
fieldCount: 0
insertId: 0
message: "(Rows matched: 1  Changed: 1  Warnings: 0"
protocol41: true
serverStatus: 34
warningCount: 0
__proto__: Object {parse: , write: , constructor: }


*/


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

  // Output:
/*

/usr/local/bin/node --inspect-brk=47874 main.js
Debugger listening on ws://127.0.0.1:47874/c6871a68-7abe-4d45-8ef6-4c1ab14ad67b
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
null: OkPacket {fieldCount: 0, affectedRows: 1, insertId: 0, serverStatus: 2, warningCount: 0, …}
affectedRows: 1
changedRows: 0
fieldCount: 0
insertId: 0
message: ""
protocol41: true
serverStatus: 2
warningCount: 0
__proto__: Object {parse: , write: , constructor: }


*/



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

 executeQuery4();

  // Output:
/*

/usr/local/bin/node --inspect-brk=17168 main.js
Debugger listening on ws://127.0.0.1:17168/2a7d8201-b890-47b2-87a9-28358cc06015
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
null: OkPacket {fieldCount: 0, affectedRows: 7, insertId: 0, serverStatus: 34, warningCount: 0, …}
affectedRows: 7
changedRows: 0
fieldCount: 0
insertId: 0
message: ""
protocol41: true
serverStatus: 34
warningCount: 0
__proto__: Object {parse: , write: , constructor: }


*/