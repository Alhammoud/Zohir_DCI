const input_name_obj = document.getElementById('name');
console.log(input_name_obj);

const input_date_obj = document.getElementById('birthday');
console.log(input_date_obj);

const input_file_obj = document.getElementById('pic');
console.log(input_file_obj);

const input_color1_obj = document.getElementById('firstColor');
console.log(input_color1_obj);

const input_color2_obj = document.getElementById('secondColor');
console.log(input_color2_obj);

const input_textarea_obj = document.getElementById('aboutYou');
console.log(input_textarea_obj);

const input_checkbox_objs = document.getElementsByClassName('skils');
console.log(input_checkbox_objs);

const form_obj = document.getElementById('form');
console.log(form_obj);

form_obj.addEventListener('submit', function (ev) {
    ev.preventDefault();

    let section_Obj = document.createElement('section');
    section_Obj.classList.add('cv');
    let h2_obj = document.createElement('h2');
    h2_obj.innerText = input_name_obj.value;
    console.log(h2_obj);
    console.log(h2_obj.innerText)
    console.log(h2_obj.innerHTML);


    section_Obj.append(h2_obj);
    section_Obj.append(input_file_obj.value);
    document.body.append(section_Obj);
});
