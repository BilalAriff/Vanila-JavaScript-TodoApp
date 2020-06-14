var Data = getData();

/*
    STEP 1:
        1- Get developers oject from LocalStorage
        2- Render on DOM
*/

//ID
var _Data = [
    {   
        key: "0",
        title: "Wash Dishes",
        description: "you have to wash dishes before mom see's it or your ass will be dead"
    },
    {   
        key: "1",
        title: "Complete Phy101 Assigment",
        description: "it is last date of assigment please complete it before deadline"
    }
];


var count = 0
function myID() {
    count++;
}

// RETRIVE DATA
function getData () {
    var returned_data = localStorage.getItem('Data');

    if (returned_data !== null) {
        console.log(returned_data)
        return JSON.parse(returned_data);
    }

    else {
        var emptyArray = [];
        return emptyArray;
    }
}
// SAVE DATA

function saveData(Data) {
    localStorage.setItem('developers', JSON.stringify(Data));
}

function renderDOM(Data) {
    for (i = 0; i < Data.length; i++) {
        createCard(Data);
    }
}


/* 
    STEP 2: 
        1- Taking Values from Form
        2- Storing them into Developers Object
        3- Adding New Card in Dom
*/



// Getting Form Values and adding them into developer object function

function addCard() {

    const input_title = document.getElementById('input-title').value;
    const input_description = document.getElementById('input-description').value;
    const _key = this.Data.length++;

    var myValues = {
        "key": _key,
        "title": input_title,
        "description": input_description
    }

    Data.push(myValues);
    var myArrayValue = [];
    myArrayValue.push(myValues);

    saveData(Data);

    createCard(myArrayValue);

    
}


function createCard(valuesForCard) {

    for (i = 0; i < valuesForCard.length; i++) {
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
        btnAdd.id = Data[i].key;
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
        btnRemove.id = Data[i].key;
        btnRemove.addEventListener('click', (e) => {
            removeItem(e.target.id);
        })
        const title = document.createTextNode(Data[i].title);
        const description = document.createTextNode(Data[i].description);
    
        h5.appendChild(title);
        td.appendChild(h5);
        p.appendChild(description);
        td.appendChild(p);
        tr.appendChild(td);
        tr.id = Data[i].key;
        list.appendChild(tr);
    
        td2.appendChild(btnAdd);
        td2.appendChild(btnRemove);
        tr.appendChild(td2);
    }
}

// utilitly functions

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


/*
    MAIN LOGIC
*/

window.onload = function() {
        renderDOM(_Data);
  };

const button = document.getElementById("subBtn");

button.addEventListener('click', (e) => {
    e.preventDefault();
    addCard();
})