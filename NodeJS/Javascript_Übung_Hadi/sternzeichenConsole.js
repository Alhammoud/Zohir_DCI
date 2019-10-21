module.exports = (geb_tag, geb_mon) => {

    const sternzeichenArr = ["Widder", "Stier", "Zwillinge", "Krebs", "Löwe", "Jungfrau", "Waage", "Skorpion", "Schütze", "Steinbock", "Wassermann", "Fische"];

    var sternz = 0;
    if ((geb_mon == 3 && geb_tag >= 21) || (geb_mon == 4 && geb_tag <= 20)) {
        sternz = 1; // "Widder"

    } else if ((geb_mon == 4 && geb_tag >= 21) || (geb_mon == 5 && geb_tag <= 20)) {
        sternz = 2; // "Stier"

    } else if ((geb_mon == 5 && geb_tag >= 21) || (geb_mon == 6 && geb_tag <= 21)) {
        sternz = 3; // "Zwillinge"

    } else if ((geb_mon == 6 && geb_tag >= 22) || (geb_mon == 7 && geb_tag <= 22)) {
        sternz = 4; // "Krebs"

    } else if ((geb_mon == 7 && geb_tag >= 23) || (geb_mon == 8 && geb_tag <= 23)) {
        sternz = 5; //   "Löwe"

    } else if ((geb_mon == 8 && geb_tag >= 24) || (geb_mon == 9 && geb_tag <= 23)) {
        sternz = 6; //  "Jungfrau"

    } else if ((geb_mon == 9 && geb_tag >= 24) || (geb_mon == 10 && geb_tag <= 23)) {
        sternz = 7; // "Waage"

    } else if ((geb_mon == 10 && geb_tag >= 24) || (geb_mon == 11 && geb_tag <= 22)) {
        sternz = 8; // "Skorpion"

    } else if ((geb_mon == 11 && geb_tag >= 23) || (geb_mon == 12 && geb_tag <= 21)) {
        sternz = 9; //  "Schütze"

    } else if ((geb_mon == 12 && geb_tag >= 22) || (geb_mon == 1 && geb_tag <= 21)) {
        sternz = 10; //  "Steinbock"

    } else if ((geb_mon == 1 && geb_tag >= 21) || (geb_mon == 2 && geb_tag <= 19)) {
        sternz = 11; //  "Wassermann"

    } else if ((geb_mon == 2 && geb_tag >= 20) || (geb_mon == 3 && geb_tag <= 20)) {
        sternz = 12; //  "Fische"
    }


    console.log(" Ihr Sternzeichen ist  " + sternzeichenArr[sternz - 1]);


};