const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
let tasks = document.getElementById('card-text');
let dbDesialize = JSON.parse(localStorage.getItem('origin'));

for(let i = 0; i < dbDesialize.length; i++){
    if(dbDesialize[i].id === parseInt(id)){
        tasks.innerHTML +=
        `<p>${dbDesialize[i].task}</p>`;
    }
}

document.getElementById('buttonDelete').onclick = function(){
    for(let i = 0; i < dbDesialize.length; i++){
        if(dbDesialize[i].id === parseInt(id)){
            
            dbDesialize.splice(i, 1);
            let dbSerialize = JSON.stringify(dbDesialize);
            localStorage.setItem('origin',dbSerialize);
            window.location.href = 'index.html';
        }   
    }
}

document.getElementById('buttonCancel').onclick =function(){
    window.location.href = 'index.html';
}

