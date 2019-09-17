const f = x => {
    // rekursionsende
    // bei diesem parameter-wert rufen wir f NICHT nochmal auf
    if(x === 0) {
        console.log('x ist 0, das rekursionsende ist erreicht');
    }
    else {
        console.log('x ist noch nicht 0, das rekursionsende ist noch nicht erreicht.');
        f(x-1);
    }
}

// f(5);

// Aufgabe 1
// die Schleifen-Version
const sumLoop = x => {
    let sum = 0;
    for(let i=x; i>0; i--) {
        sum += i;
    }
    return sum;
}
// console.log(sumLoop(5));

const sum = x => {
    // rekursionsende x = 0
    if(x === 0) {
        console.log('rekursionsende erreicht, x ist 0');
        return 0;
    }
    else {
        console.log('rekursionsende ist nicht erreicht, x ist noch nicht 0');
        return x + sum(x - 1);
    }
}
// console.log(sum(5));

// Aufgabe 2:
const fs = require('fs');
const listFiles = path => {
    let files = fs.readdirSync(path);
    for(file of files) {
        const info = fs.lstatSync(`${path}/${file}`);
        if(info.isFile()) {
            console.log(`${file} ist eine Datei`);
        }
        else if(info.isDirectory()) {
            console.log(`${file} ist ein Verzeichnis`);
        }        
        else if(info.isSymbolicLink()) {
            console.log(`${file} ist ein Link`);
        }
    }
}

listFiles(`/home/janteach/Desktop`);


const f = x => {
    // rekursionsende
    // bei diesem parameter-wert rufen wir f NICHT nochmal auf
    if(x === 0) {
        console.log('x ist 0, das rekursionsende ist erreicht');
    }
    else {
        console.log('x ist noch nicht 0, das rekursionsende ist noch nicht erreicht.');
        f(x-1);
    }
}

// f(5);

// Aufgabe 1
// die Schleifen-Version
const sumLoop = x => {
    let sum = 0;
    for(let i=x; i>0; i--) {
        sum += i;
    }
    return sum;
}
// console.log(sumLoop(5));

const sum = x => {
    // rekursionsende x = 0
    if(x === 0) {
        console.log('rekursionsende erreicht, x ist 0');
        return 0;
    }
    else {
        console.log('rekursionsende ist nicht erreicht, x ist noch nicht 0');
        return x + sum(x - 1);
    }
}
// console.log(sum(5));

// Aufgabe 2:
const fs = require('fs');
const listFiles = path => {
    let files = fs.readdirSync(path);
    for(file of files) {
        const info = fs.lstatSync(`${path}/${file}`);
        if(info.isFile()) {
            console.log(`${file} ist eine Datei`);
        }
        else if(info.isDirectory()) {
            console.log(`${file} ist ein Verzeichnis`);
        }        
        else if(info.isSymbolicLink()) {
            console.log(`${file} ist ein Link`);
        }
    }
}

// listFiles(`/home/janteach/Desktop/test/hallo`);

const listFilesRecursive = path => {
    let files = fs.readdirSync(path);
    // file kann sein datei, verzeichnis oder link
    for(file of files) {
        const info = fs.lstatSync(`${path}/${file}`);
        if(info.isFile()) {
            // rekursionsende 1
            console.log(`${path}/${file} ist eine Datei`);
        }
        else if(info.isDirectory()) {
            console.log(`${path}/${file} ist ein Verzeichnis`);
            listFilesRecursive(`${path}/${file}`);
        }        
        else if(info.isSymbolicLink()) {
            // rekursionsende 2
            console.log(`${path}/${file} ist ein Link`);
        }
    }
}

listFilesRecursive('/home/janteach/Desktop/test');

// Aufgabe:
// 
// Erstelle eine Funktion findFile die zwei Parameter
// path und filename erwartet. Path soll ein Verzeichnis-Pfad sein.
// Falls path kein Verzeichnis ist, dann soll  findFile
// null zurückgeben.
// Ansonsten, soll findFile alle Pfade zurückgeben, in 
// denen die Datei filename zu finden ist.
// filename kann auch ähnlich der zu suchenden Datei sein.
// D.h. falls filename z.B. "all" ist, dann soll
// die Datei "hallo.txt" auch aufgelistet werden, weil "all"
// auch Teilstring von "hallo.txt" ist. Also alle Dateien sollen gefunden
// werden, bei denen filename ein Substring des Dateinamens ist.

const findFile = (path, name) => {
    const info = fs.lstatSync(path);
    if(!info.isDirectory) return null;

    let files = fs.readdirSync(path);
    for(file of files) {
        if(fs.lstatSync(`${path}/${file}`).isFile()) {
            if(file.search(name) !== -1) {
                console.log(`match: ${path}/${file}`);
            }
        }
        else if(fs.lstatSync(`${path}/${file}`).isDirectory()) {
            findFile(`${path}/${file}`, name);
        }
    }
}

findFile('/home/temp/Desktop/Zohir_DCI/NodeJS/07_folderaccess/test', 'beach');

