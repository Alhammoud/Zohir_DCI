console.log('hallo world');

// localStorage
//
// .getItem(itemName) liest item aus
// .setItem(itemName, itemWert) setzt neues item
// .removeItem(itemName) löscht item
// .clear() löscht localStorage


// Aufgabe:
//
// Implementiere folgende Funktionalität:
// 1) Wenn der Nutzer auf "Benutzername lokal speichern" klickt, soll der Benutzername aus dem Input-text in der localStorage gespeichert werden.

const input_text_obj = document.getElementById('user');
console.log(input_text_obj);

const button_setUser_obj = document.getElementById('setUsername');
console.log(button_setUser_obj);

const button_deletUser_obj = document.getElementById('deleteUsername');
console.log(button_deletUser_obj);



button_setUser_obj.onclick = function () {
    if (input_text_obj.value === '') {
        alert('Kein Username eingegeben ..!');
    } else {
        localStorage.setItem("Benutzername", input_text_obj.value);
        console.log(localStorage);
    }
}

// 2) Wenn der Nutzer auf Benutzername löschen klickt, soll der Benutzername aus dem localStorage gelöscht werden

button_deletUser_obj.onclick = function () {
    localStorage.removeItem("Benutzername");
    console.log(localStorage);

}
// 3) Wenn der Nutzer die Seite neu lädt, soll eine Begrüßung zu sehen sein: "Hallo " + nutzername. Allerdings nur, falls getItem nicht null zurückliefert, d.h. falls der Nutzername gespeichert ist.

// alert(`Hallo ${localStorage.getItem("Benutzername")}`);