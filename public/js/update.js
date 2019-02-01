const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
let tasks = document.getElementById('formEdit');
let dbDesialize = JSON.parse(localStorage.getItem('origin'));

for(let i = 0; i < dbDesialize.length; i++){
    if(dbDesialize[i].id === parseInt(id)){
        tasks.innerHTML +=
        `
        <label for="exampleInputEmail1">Task</label>
        <input id="valueTask" type="text" class="form-control" value="${dbDesialize[i].task}" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
        `;
        
    }
}

document.getElementById('buttonSave').onclick = function(){
    for(let i = 0; i < dbDesialize.length; i++){
        let nombreTask = document.getElementById('valueTask').value;
        if(dbDesialize[i].id === parseInt(id)){
            if(dbDesialize[i].task != nombreTask){
                dbDesialize[i].task = nombreTask;

                let dbSerialize = JSON.stringify(dbDesialize);
                localStorage.setItem('origin',dbSerialize);
                window.location.href = 'index.html';
            }
            else{
                window.location.href = 'index.html';
            }
        }   
    }
}
