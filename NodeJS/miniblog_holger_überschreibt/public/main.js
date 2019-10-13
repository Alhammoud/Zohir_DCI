console.log(`19_miniblog`);

const headlineObj = document.getElementById(`headline`);
const navObj = document.getElementsByClassName(`navlinks`);
let contentObj = document.getElementById(`content`);
const containerObj = document.getElementById(`container`);
const rightHeaderObj = document.getElementsByClassName('rightHeader');

const read = async () => {
    let allcommments = "";
    navObj[0].classList.add(`active`);
    navObj[1].classList.remove(`active`);
    rightHeaderObj[0].style.display = "block";

    containerObj.classList.add('background');
    containerObj.innerHTML = `<div class="content" id="content"></div>`;
    contentObj = document.getElementById(`content`);

    const result = await fetch('http://localhost:3000/blogposts');
    console.log('typeof result');
    console.log(typeof result);

    const data = await result.json();
    console.log('typeof data');
    console.log(typeof data);

    for (comment of data) {
        let cutPosition = null;
        let shortCommentContent = null;

        if (comment.content.length > 50) {
            cutPosition = comment.content.indexOf(` `, 40);
            shortCommentContent = comment.content.substring(0, cutPosition) + "...";
        } else {
            shortCommentContent = comment.content;

        }

        allcommments += `<div class="singlepost">
        <div class="commentHeadline">
        <h4>${comment.id} - ${comment.title}</h4>
        <p>Erstellt: ${comment.created}</p>
        </div>
        <hr></br>
        <span class="shortCommentWithBtn">
        <p>${shortCommentContent}<p>
        <button class="readMoreBtn" onclick="readSingleComment(${comment.id})">Mehr lesen</button>
        </span>
        </div>
        `;
    }

    contentObj.innerHTML = allcommments;
}

const readSingleComment = async (id) => {
    navObj[0].classList.add(`active`);
    navObj[0].classList.remove(`active`);
    rightHeaderObj[0].style.display = "block";

    containerObj.classList.add('background');
    containerObj.innerHTML = `<div class="content" id="content"></div>`;
    contentObj = document.getElementById(`content`);

    const result = await fetch(`http://localhost:3000/singleposts/${id}`);
    const data = await result.json();

    contentObj.innerHTML = `<div class="singlepost" style="margin: 0 auto">
    <div class="commentHeadline">
    <h4>${data[0].id} - ${data[0].title}</h4>
    <p>Erstellt: ${data[0].created}</p>
    </div>
    <hr></br>
    <p>${data[0].content}<p>
    <hr>
    <span class=" btnField">
    <button class="updateBtn" onclick="updateSingleComment(${data[0].id})">Diesen Post ändern</button>
    <button class="deleteBtn" onclick="deleteSingleComment(${data[0].id})">Diesen Post löschen</button>
    <button class="backBtn" onclick="read()">zurück zu allen Posts</button>
    </span>
    </div>
    `;
}

const deleteSingleComment = async (id) => {
    alert("Sind sie sicher, dass dieser Post gelöscht werden soll?")
    const result = await fetch(`http://localhost:3000/delete/${id}`);
    const data = await result.json();
    read();
}

const updateSingleComment = async (id) => {
    const result = await fetch(`http://localhost:3000/singleposts/${id}`);
    const data = await result.json();

    const updateDivObj = document.createElement('div');

    updateDivObj.innerHTML = ` <input type="text" id="titelUpdate" value="${data[0].title}">;
    <textarea id="textUpdate" cols="30" rows="10">${data[0].content}</textarea>
    <button id="updatePost">Artikel ändern</button>`;
    updateDivObj.style.width="90%";
    updateDivObj.style.margin="20px auto";
    contentObj.append(updateDivObj);

    const updatePostObj = document.getElementById('updatePost');
    
    updatePostObj.onclick = async () => {

        const titelUpdateObj = document.getElementById('titelUpdate');
        const textUpdateObj = document.getElementById('textUpdate');

        if (!(titelUpdateObj.value.length > 0 && textUpdateObj.value.length > 0)) {
            alert('Alle Felder müssen ausgefüllt sein.');
            return;
        }

        const body = {
            id :id,
            title: titelUpdateObj.value,
            content: textUpdateObj.value
        }

        try {
            const response = await fetch('http://localhost:3000/update', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(body)
            });

            if (response.ok) {

                responseJson = await response.json();
                read();

            }
        } catch (e) {
            console.log('Error: ' + e);
        }
    }

}



const post = () => {
    navObj[0].classList.remove(`active`);
    navObj[1].classList.add(`active`);
    rightHeaderObj[0].style.display = "block";

    containerObj.innerHTML = `<div class="content" id="content"></div>`;
    contentObj = document.getElementById(`content`);
    contentObj.innerHTML = ` <input type="text" id="titelEingabe" placeholder="Hier Titel eingeben">;
    <textarea id="textEingabe" cols="30" rows="10" placeholder ="Hier Text eingeben"></textarea>
    <button id="addPost">Artikel erstellen</button>`;



    const addPostObj = document.getElementById('addPost');
    addPostObj.onclick = async () => {

        const titelEingabeObj = document.getElementById('titelEingabe');
        const textEingabeObj = document.getElementById('textEingabe');

        if (!(titelEingabeObj.value.length > 0 && textEingabeObj.value.length > 0)) {
            alert('Alle Felder müssen ausgefüllt sein.');
            return;
        }

        const body = {
            title: titelEingabeObj.value,
            content: textEingabeObj.value
        }

        try {
            const response = await fetch('http://localhost:3000/blogposts', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(body)
            });

            if (response.ok) {

                responseJson = await response.json();
                read();

            }
        } catch (e) {
            console.log('Error: ' + e);
        }
    }
}

headlineObj.onclick = () => {
    navObj[0].classList.remove(`active`);
    navObj[1].classList.remove(`active`);
    rightHeaderObj[0].style.display = "none";

    containerObj.classList.remove('background');
    containerObj.innerHTML = `<video autoplay muted loop class="video" width="1200px">
    <source src="/festival-of-lights.mp4" type="video/mp4">
</video>
<div id="content" class="content">
</div>`
}