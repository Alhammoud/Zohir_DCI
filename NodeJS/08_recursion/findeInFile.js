const fs = require('fs');


// Aufgabe:
// 
// 1) Erstelle eine Funktion findInFiles mit zwei Parametern
//    path und strSearch. Diese Funktion durchsucht rekursiv
//    das Verzeichnis und alle Unterverzeichnisse nach Dateien
//    und schaut sich jede Datei genau an. Dabei wird untersucht
//    ob in der Datei strSearch zu finden ist. Falls ja, 
//    wird der Pfad der Datei ausgegeben.

// Löusung von Jan ..
const findInFiles = (path, strSearch) => {
    let files = fs.readdirSync(path);
    for (file of files) {
        // file kann sein datei, verzeichnis oder link
        // wir schauen uns die datein an .
        const info = fs.lstatSync(`${path}/${file}`);
        if (info.isFile()) {
            // rekursionsende 1
            // hier gucken wir nach ,ob in der datei ein string zu finden  ist nach muster strSearch
            // wir öffnen die datei und schauen nach. 
            const fileContent = fs.readFileSync(`${path}/${file}`);
            if (new String(fileContent).includes(strSearch)) {

                console.log(` Match : ${path}/${file} `);
            }

        } else if (info.isDirectory()) {
            findInFiles(`${path}/${file}`, strSearch);
        }
    }
}


// 2) Erstelle eine Funktion (basierend auf findInFiles) namens
//    replaceInFiles mit drei Parametern path, strSearch und strReplace.
//    Die Funktionalität von 1) soll erweitert werden dadurch, dass
//    in der Datei mit dem gefundenen String der String mit strReplace
//    erstetzt wird und danach die Datei abgespeichert wird. Optional: speichere eine Kopier der Datei ${filename}.bak, hallo.txt -> hallo.txt.bak

// 3) Erstelle aus 1 und 2 jeweils ein ausführbares Skript namens
//    1) findInFiles.js
//    2) replaceInFiles.js

// 4) Verlinke 3.1) in /usr/local/bin/findInFiles bzw. /usr/local/bin/replaceInFiles


// 1);
// Löusung Zohir
const findInFiles = (path, strSearch) => {

    /*  const info = fs.lstatSync(path);
     if(!info.isDirectory) return null; */

    let files = fs.readdirSync(path);
    for (file of files) {
        if (fs.lstatSync(`${path}/${file}`).isFile()) {

            /* fs.readFile(`${path}/${file}`, function (err, data) {
                if (err) throw err;
                if(data.indexOf(strSearch) >= 0){
                 console.log(data)
                }
              }); */
            fs.readFile(`${path}/${file}`, function (err, data) {
                let stringObj = JSON.parse(fs.lstatSync(`${path}/${file}`));
                console.log(stringObj);

                if (err) throw err;
                if (stringObj.includes(strSearch)) {
                    console.log(data);
                }
            });
        } else if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
            findInFiles(`${path}/${file}`, strSearch);
        }
    }
}

findInFiles("/home/temp/Desktop/Zohir_DCI/NodeJS/07_folderaccess/test", 'Rechnung')