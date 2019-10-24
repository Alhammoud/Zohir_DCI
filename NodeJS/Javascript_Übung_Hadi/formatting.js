// Aufgabe :
/* 

    -  Erstell ein Programm, das Zeichenfolgen formatiert und bereinigt.
Stell sicher, dass die Funktion in einer index.js Datei aufgerufen wird.
Beispiel für Ihr Endergebnis:

```bash
$ node index.js "mIAmi   Vice"
Miami Vice
```
-  Schritte zum Erstellen dein Programms:


Erstell eine Formatierungsfunktion in formatting.js. 

Diese Funktion sollte: 
a) Leerzeichen vom Anfang und Ende des Parameters abschneiden. 
b) Reduzieren von Leerzeichen 
(stell sicher, dass immer nur ein Leerzeichen angezeigt wird, keine doppelten)
Beispielausgabe:
    -   ' sao tome' => 'sao tome'
    -   'kuala lumpur ' => 'kuala lumpur'

- Schreib in `formatting.js` eine neue Funktion mit dem Namen`capitalizeInitial`.

Diese Funktion sollte eine Zeichenfolge als Parameter verwenden und diese
 nur mit dem ersten Großbuchstaben zurückgeben.
Beispielausgabe:
-   'europe' => 'Europe'
    -   'BERLIN' => 'Berlin'
    -   'aSIa' => 'Asia'


**Bonuses**
- Dein Programm sollte in der Lage sein, Symbole zu entfernen.


**Bonuses neu**
- Schreib in messaging.js eine neue Funktion namens showHelp.
Die Funktion sollte ausgelöst werden, wenn der Begriff 
'--help' an einer beliebigen Stelle in der Argumentliste angezeigt wird.

$ node index.js "mIAmi   Vice" --help

How to use this program:
    1. When you input a new string with more than 1 space the program will sanitize it.
    2. If you typed the name of a city without capitalization the program will capitalize it.
    3. If you included a Capitalized letter inside the wrong place of your string the program will sanitize it.
    
Miami Vice


*/


module.exports = (arr) => {

    console.log("arr : ", arr);
    console.log('arrarr[0].length', arr[0].length);

    console.log("arr[0].trimLeft().trimRight():", arr[0].trimLeft().trimRight());
    console.log("arr[0].trimLeft().trimRight():", arr[0].trimLeft().trimRight().length);

    arr[0] = arr[0].trimLeft().trimRight();
    console.log("arr : ", arr);
    console.log('arrarr[0].length', arr[0].length);

    let arr_of_words = arr[0].split(' ');
    console.log('arr_of_words', arr_of_words);

    let arr_of_words_without_space = ["\""];

    for (let i = 0; i < arr_of_words.length; i++) {
        console.log('arr_of_words', arr_of_words[i]);
        if (!(arr_of_words[i] === '')) {
            arr_of_words_without_space.push(capitalizeFirstLetter(arr_of_words[i]));
        }
    }
    arr_of_words_without_space.push("\"");
    console.log('arr_of_words_without_space', arr_of_words_without_space);
    console.log('arr_of_words_without_space', arr_of_words_without_space.join(' '));

    /* The join() method returns the array as a string.

The elements will be separated by a specified separator. The default separator is comma (,).

Note: this method will not change the original array. */


}


/* function capitalizeInitial() {

} */

function capitalizeFirstLetter(string) {

    /* .toLowerCase() is appended to the last method call.

This method will make the first character uppercase and convert rest of the string to lowercase. You won't need the second method. */


   /*  let new_str='';
    for (let i = 0; i < string.length; i++) {
        new_str = string[i].toLowerCase()+string.slice(1);;
        console.log(new_str);
    } */
    /* new_str = new_str.charAt(0).toUpperCase() + new_str.slice(1);
    console.log(new_str);
 */
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}