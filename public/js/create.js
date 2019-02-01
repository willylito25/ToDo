let db = [];
if(localStorage == null || localStorage.length == 0 || localStorage == undefined){
    let dbSerialize = JSON.stringify(db);
    localStorage.setItem('origin',dbSerialize);
}
let add = document.getElementById('addTask');
let dbDesialize2 = JSON.parse(localStorage.getItem('origin'));
add.onclick = function(){
    if(dbDesialize2.length >= 1){
        debugger;
        // localStorage.clear();
        let tarea = document.getElementById('inputTask').value;
        let dbDesialize = JSON.parse(localStorage.getItem('origin'));
        db = dbDesialize;
        let ultimaPosicion = dbDesialize.length - 1;
        let valorNumerico = dbDesialize[ultimaPosicion].id;

        db.push({
            id: valorNumerico + 1,
            task: tarea,
            date: new Date()
        })
        let dbSerialize = JSON.stringify(db);
        localStorage.setItem('origin',dbSerialize);
        window.location.href = 'index.html';
    }
    else{
        let tarea = document.getElementById('inputTask').value;
        debugger;
        db.push({
            id: 1,
            task: tarea,
            date: new Date()
        })
        let dbSerialize = JSON.stringify(db);
        localStorage.setItem('origin', dbSerialize);
        window.location.href = 'index.html';
    }
    
    
    
    

}

