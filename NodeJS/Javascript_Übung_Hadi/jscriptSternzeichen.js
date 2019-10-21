const sternzeichenArr = ["Widder", "Stier", "Zwillinge", "Krebs", "Löwe", "Jungfrau", "Waage", "Skorpion", "Schütze", "Steinbock", "Wassermann", "Fische"];



function sternzeichen_generieren() {

    var geb_tag = document.getElementById('geb_tag').value;
    var geb_mon = document.getElementById('geb_mon').value;


    if (geb_tag > 0 && geb_mon > 0) {

        var sternz = 0;
        
        if ((geb_mon == 3 && geb_tag >= 21) || (geb_mon == 4 && geb_tag <= 20)) {
            sternz = 1;
        } else if ((geb_mon == 4 && geb_tag >= 21) || (geb_mon == 5 && geb_tag <= 20)) {
            sternz = 2;
        } else if ((geb_mon == 5 && geb_tag >= 21) || (geb_mon == 6 && geb_tag <= 21)) {
            sternz = 3;
        } else if ((geb_mon == 6 && geb_tag >= 22) || (geb_mon == 7 && geb_tag <= 22)) {
            sternz = 4;
        } else if ((geb_mon == 7 && geb_tag >= 23) || (geb_mon == 8 && geb_tag <= 23)) {
            sternz = 5;
        } else if ((geb_mon == 8 && geb_tag >= 24) || (geb_mon == 9 && geb_tag <= 23)) {
            sternz = 6;
        } else if ((geb_mon == 9 && geb_tag >= 24) || (geb_mon == 10 && geb_tag <= 23)) {
            sternz = 7;
        } else if ((geb_mon == 10 && geb_tag >= 24) || (geb_mon == 11 && geb_tag <= 22)) {
            sternz = 8;
        } else if ((geb_mon == 11 && geb_tag >= 23) || (geb_mon == 12 && geb_tag <= 21)) {
            sternz = 9;
        } else if ((geb_mon == 12 && geb_tag >= 22) || (geb_mon == 1 && geb_tag <= 21)) {
            sternz = 10;
        } else if ((geb_mon == 1 && geb_tag >= 21) || (geb_mon == 2 && geb_tag <= 19)) {
            sternz = 11;
        } else if ((geb_mon == 2 && geb_tag >= 20) || (geb_mon == 3 && geb_tag <= 20)) {
            sternz = 12;
        }
        if (sternz > 0) {
            document.getElementById('sternzeichen_span').innerHTML = sternzeichenArr[sternz - 1];
        }
    }
}