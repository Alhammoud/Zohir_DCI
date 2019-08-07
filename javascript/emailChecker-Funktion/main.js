
/*
Schreibe eine Funktion emailChecker, welche einen Parameter email erwartet.
Die Funktion soll überprüfen, ob eine Email-Anschrift nur ein @-Zeichen enthält, 
sie soll nur Email-Adressen aus Österreich(.at), Deutschland(.de) und Frankreich(.fr) akzeptieren.
Der Teil vor dem @-Zeichen soll mindestens 6 Zeichen haben.
Der Teil nach dem @-Zeichen darf nur ein Punkt-Zeichen haben.
Email-Adressen mit der Domain nervmich.net und nerv.net sollen nicht akzeptiert werden.

Wenn die Email-Adresse gültig ist, soll die Funktion true zurückgeben, ansonsten false.

Für Fortgeschrittenen:
Ändere die Funktion so, dass sie auch EmailAdressen mit den Endungen .co.uk akzeptiert
 */

var count1 = 0;

function emailChecker(){

  var text_input = document.getElementById('email_address').value;
  console.log(text_input);

  /*  var pattern=  /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/; */
  /* \w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+ */

  var pattern = /^(([a-zA-Z])+(([0-9])*([a-zA-Z0-9_.-])*)){6,}@([a-zA-Z0-9_-])+(.fr)|(.de)|(.at)$/;
  console.log(pattern);

  console.log(pattern.test(text_input));

  if (pattern.test(text_input)) {
    alert("true");
  } else {
    alert("false");
    alert("You have entered an invalid email address!");
  }
  // var text2 ='';
  // for (var i = 0; i < text_input.length; i++) {
  //     // console.log(text_input[i]);
  //     if (text_input[i] === '@') {
  //         count1++;
  //         // console.log(count1);
  //     }
  //     if (count1 > 1) {
  //         console.log('count of (@) =' + count1);
  //         console.log('Die Email-Anschrift soll nur ein @-Zeichen enthält ...! ');
  //         return false;
  //     }

  //     //sie soll nur Email-Adressen aus Österreich(.at), Deutschland(.de) und Frankreich(.fr) akzeptieren.
  //     for (var i = text_input.length; i < 0; i--) {
  //         if (text_input[i - 3] === '.') {
  //             text2 = text2 + text_input[i - 3];
  //         }
  //         if (text_input[i - 2] === 'a' || text_input[i - 2] === 'd' || text_input[i - 2] === 'f') {
  //             text2 = text2 + text_input[i - 2];
  //         }
  //         if (text_input[i] === 'r' || text_input[i] === 'e' || text_input[i] === 't') {
  //             text2 = text2 + text_input[i];
  //         }
  //         console.log(text_input);
  //         console.log(text2);
  //     }
  // }
}

var sumbitObj = document.getElementById('submit');
sumbitObj.addEventListener('click', emailChecker);

