let input_obj = document.getElementById('task');

let container_obj = document.getElementById('tasksToDo');

let form_obj = document.getElementById('form');

let count = 0;

form_obj.onsubmit = function (e) {
     e.preventDefault();
    if (input_obj.value === '') {
        alert('Task must be filled out');
    } else {
        count++;
        let task_obj = document.createElement('span');

        const closeButton = document.createElement('BUTTON');
        closeButton.classList.add('close');
        closeButton.innerText = 'X'; // innerText="<button class>"

        closeButton.onclick = function () {
            this.parentElement.remove();
            input_obj.value = '';

        }
        // task_obj.classList.add('arrow-down-close');

        task_obj.innerText = count + '. ' + input_obj.value;
        task_obj.append(closeButton);
        container_obj.append(task_obj);
    }
    input_obj.value = '';
}

// location.reload();