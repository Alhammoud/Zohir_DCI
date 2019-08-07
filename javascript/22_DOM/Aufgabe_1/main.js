let btn = document.getElementById('btn');
console.log(btn);

let list = document.getElementById('ul');
console.log(list);

btn.addEventListener('click', function (event) {
    

    if (btn.style.background !== 'aquamarine') {
        btn.style.background="aquamarine"
        btn.innerText = 'Get them out of here!';
        // for (let i = 0; i < list.lengh)
        list.style.display = 'block';
    } else {
        btn.style.background="red";
        btn.innerHTML = 'Show favorite destinations';
        list.style.display = 'none';
    }
});