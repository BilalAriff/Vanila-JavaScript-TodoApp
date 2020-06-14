
var Data = getFromLocalStorage();
// DUMMY DATA
// var _Data = [
//     {   
//         key: "0",
//         title: "Wash Dishes",
//         description: "you have to wash dishes before mom see's it or your ass will be dead"
//     },
//     {   
//         key: "1",
//         title: "Complete Phy101 Assigment",
//         description: "it is last date of assigment please complete it before deadline"
//     }
// ];

// DATA RETRIVAL FUNCTIONS



// GET FUNCTION

function getFromLocalStorage() {
    var returned_data = localStorage.getItem('Data');

    

    if (returned_data !== null) {
        console.log("Data Was full");
        return JSON.parse(returned_data);
    }

    else {
        console.log("Data was empty")
        var emptyArray = [];
        return emptyArray;
    }
}
// SAVE DATA

function storeInLocalStorage(data) {

    var array = Data;

    var filtered = array.filter(function (el) {
    return el != null;
    
    });

    console.log(filtered);

    console.log("Saving Data");
    localStorage.setItem('Data', JSON.stringify(filtered));
}

// DISPLAY LIST FUNCTION

function displayList(data) {
    for (i = 0; i < data.length; i++) {
        createItem(data);
    }
}

// ADD ITEM FUNCTION

function addItem() {

    const input_title = document.getElementById('input-title').value;
    const input_description = document.getElementById('input-description').value;
    const _key = this.Data.length++;

    const input = {
        key: _key,
        title : input_title,
        description: input_description
    }
    
    for (i = 0 ; i = input.length; i++) {
        createItem(input);
    }
    console.log("Values added into DATA by addItem function");
    console.log(input)
    Data.push(input);
}

// CREATE ITEM FUNCTION

function createItem(data) {

    const list = document.getElementById('_list');
    const td = document.createElement('td');
    td.className = "task-details";
    const td2 = document.createElement('td');
    td2.className = "task-buttons";
    const tr = document.createElement('tr');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    const btnAdd = document.createElement('button');
    btnAdd.className = "btn btn-success btn-circle btn-sm";
    btnAdd.type = 'button';
    btnAdd.id = data[i].key;
    const btnRemove = document.createElement('button');
    btnRemove.type = 'button';
    btnRemove.className = "btn btn-danger btn-circle btn-sm";

    const _add = document.createTextNode('green');
    btnAdd.appendChild(_add);
    btnAdd.addEventListener('click', (e) =>{
        completeTask(e.target.id);
    });
    const _remove = document.createTextNode('red');
    btnRemove.appendChild(_remove);
    btnRemove.id = data[i].key;
    btnRemove.addEventListener('click', (e) => {
        removeItem(e.target.id);
    })
    const title = document.createTextNode(data[i].title);
    const description = document.createTextNode(data[i].description);

    h5.appendChild(title);
    td.appendChild(h5);
    p.appendChild(description);
    td.appendChild(p);
    tr.appendChild(td);
    tr.id = data[i].key;
    list.appendChild(tr);

    td2.appendChild(btnAdd);
    td2.appendChild(btnRemove);
    tr.appendChild(td2);
}
// DELETE TASK

function removeItem(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

// COMPLETE TASK

function completeTask(elementId) {
    const element = document.getElementById(elementId).firstChild;

    if(element.className === "task-details") {
        element.className = "task-details completed";
    }
    else if(element.className === "task-details completed") {
        element.className = "task-details";
    }
}



// function storeInLocalStorage(data){
//     var serializedData = JSON.stringify(data);
//     localStorage.setItem("Data", serializedData);
//     console.log(serializedData);
// }

// function getFromLocalStorage(){
//     var myData = JSON.parse(localStorage.getItem("Data"));
//     console.log(myData)
//     return myData;
// }




// Executing Main Functions

const tbody = document.getElementById('list');
const subBtn = document.getElementById('subBtn');
subBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addItem()
    renderDOM(this.Data);
})

function renderDOM(data) {
    console.log("Data from renderDOM");
    console.log(data);
    storeInLocalStorage(data);
    displayList(data);
}

