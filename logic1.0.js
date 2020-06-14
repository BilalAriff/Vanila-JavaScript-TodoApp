
const Data = getData();

const _Data = [
    {   
        "id": 0,
        "title": "Wash Dishes",
        "description": "you have to wash dishes before mom see's it or your ass will be dead"
    },
    {   
        id: 1,
        title: "Complete Phy101 Assigment",
        description: "it is last date of assigment please complete it before deadline"
    }
];

var count = Date.length;

function getData() {
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

function saveData(data) {

    var array = Data;

    var filtered = array.filter(function (el) {
    return el != null;
    
    });

    console.log(filtered);

    console.log("Saving Data");
    localStorage.setItem('Data', JSON.stringify(filtered));
}

const tbody = document.getElementById('list');
const subBtn = document.getElementById('subBtn');

function createItem(data) {
    
    for ( i = 0; i < data.length; i++ ) {
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
        btnAdd.id = data[i].id;
        btnAdd.addEventListener('click', (e) => {
            removeElement(e.target.id)
        });
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
        btnRemove.id = data[i].id;
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
        tr.id = data[i].id;
        list.appendChild(tr);
    
        td2.appendChild(btnAdd);
        td2.appendChild(btnRemove);
        tr.appendChild(td2);
    }
}

function removeItem(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function completeTask(elementId) {
    const element = document.getElementById(elementId).firstChild;

    if(element.className === "task-details") {
        element.className = "task-details completed";
    }
    else if(element.className === "task-details completed") {
        element.className = "task-details";
    }
}

function displayList(data) {

}

function addItem() {

}

function deleteList() {
    const myNode = document.getElementById("_list");
    myNode.innerHTML = '';
}

// Main Logic

createItem(Data);

subBtn.addEventListener('click', (e) => {
    e.preventDefault();

    var _title = document.querySelector('#input-title').value;
    var _description = document.querySelector('#input-description').value;
    var _id = count++;
    console.log(_id)
    var myValues = {
        id: _id,
        title: _title,
        description: _description,
    }

    Data.push(myValues);
    var myArrayValue = [];
    myArrayValue.push(myValues);
    console.log(Data);
    deleteList();
    createItem(Data);
    saveData();
})