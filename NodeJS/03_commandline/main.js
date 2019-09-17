#!/usr/bin/node

console.log('Hallo world');

// Output: Hallo world


process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });


/* OutPut:
0: /usr/local/bin/node
1: /home/temp/Desktop/Zohir_DCI/NodeJS/03_commandline/main.js
******************************

*/
console.log(`******************************



`);

console.log(`
            
            Mit folgenden Parametern gestartet:
            ${process.argv}



            `);

            // OUtput:
           /*  Mit folgenden Parametern gestartet:
            /usr/local/bin/node,/home/temp/Desktop/Zohir_DCI/NodeJS/03_commandline/main.js
 */
            for (argument of process.argv){
                console.log(`${argument}`);
            }

            /* Output :
            /usr/local/bin/node
            /home/temp/Desktop/Zohir_DCI/NodeJS/03_commandline/main.js */

