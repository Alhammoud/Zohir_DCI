// function check() {
//     var check = document.getElementsByTagName('input');
//     for (var i = 0; i < check.length; i++) {
//         if (check[i].type == 'checkbox') {
//             check[i].checked = true;
//         }
//     }
// }

function uncheck() {
    var uncheck = document.getElementsByTagName('input');
    for (var i = 0; i < uncheck.length; i++) {
        if (uncheck[i].type == 'checkbox') {
            if (uncheck[i].checked == false) {
                uncheck[i].checked = true;
            }else{
                uncheck[i].checked = false;
            }
        }
    }
}