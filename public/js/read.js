if(localStorage == null || localStorage.length >= 0 || localStorage == undefined){
  let dbDesialize = JSON.parse(localStorage.getItem('origin'));
  if(dbDesialize.length > 0){
      console.log("Existe localStorage origin")
  }
  else{
    let db = [];
    let dbSerialize = JSON.stringify(db);
    localStorage.setItem('origin',dbSerialize);
  }
    
}


let tasks = document.getElementById('tasks');
let dbDesialize = JSON.parse(localStorage.getItem('origin'));
for(let i = 0; i < dbDesialize.length; i++){
    tasks.innerHTML += 
    `<tr>
      <th scope="row">${dbDesialize[i].id}</th>
      <td id="nameTask">${dbDesialize[i].task}</td>
      <td>${dbDesialize[i].date}</td>
      <td>
        <button class="btn btn-warning" onclick='edit(${dbDesialize[i].id})'>Edit </button> | 
        <button class="btn btn-danger" onclick='deleteTask(${dbDesialize[i].id})'>Delete</button> 
      </td>
    </tr>
    `;
}

function edit(id){
    window.location.href = 'edit.html?id=' + id;
}

function deleteTask(id){
    window.location.href = 'delete.html?id=' + id;
}

let buttonCreate = document.getElementById('createTask').onclick = function(){
    window.location.href ='create.html'
}
