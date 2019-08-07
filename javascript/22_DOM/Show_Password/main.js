

// let password = document.getElementById('psw');
// function togglePass() {
//     if (password.type === "password") {
//         password.type = "text";
//     } else {
//         password.type = "password";
//     }
// }

// function toggle() {
//     let checkBox = document.getElementById('chb');
//     let password = document.getElementById('psw');

//     if (checkBox.checked == true) {
//         password.setAttribute("type", "text");
//     }
//     else {
//         password.setAttribute("type", "password");
//     }
// }

// window.addEventListener("load", function () {
//     var checked = document.getElementById("chb");
//     checked.addEventListener("click", toggle);
// });



/*
https://www.w3schools.com/jsref/prop_checkbox_checked.asp


    function check() {
  document.getElementById("myCheck").checked = true;
}

function uncheck() {
  document.getElementById("myCheck").checked = false;
}
 */
let checkBox = document.getElementById('chb');
let password = document.getElementById('psw');

checkBox.addEventListener('click', function () {
  // if(this.checked )
  // if (checkBox.checked === true)
  if (this.checked) {
    password.setAttribute("type", "text");
  }
  else {
    password.setAttribute("type", "password");
  }

});
////////////////////////////////////////////////

function toggler(e) {
  if( e.innerHTML == 'Show' ) {
      e.innerHTML = 'Hide'
      document.getElementById('password').type="text";
  } else {
      e.innerHTML = 'Show'
      document.getElementById('password').type="password";
  }
}

////////////////////////////////////////////////

var open = 'glyphicon-eye-open';
var close = 'glyphicon-eye-close';
var ele = document.getElementById('password');
var ele2 = document.getElementById('password2');

document.getElementById('toggleBtn').onclick = function () {
  if (this.classList.contains(open)) {
    ele.type = "text";
    this.classList.remove(open);
    this.className += ' ' + close;
  } else {
    ele.type = "password";
    this.classList.remove(close);
    this.className += ' ' + open;
  }
}

document.getElementById('toggleBtn2').onclick = function () {
  if (this.innerHTML == 'Show') {
    this.innerHTML = 'Hide'
    ele2.type = "text";
  } else {
    this.innerHTML = 'Show'
    ele2.type = "password";
  }
}
