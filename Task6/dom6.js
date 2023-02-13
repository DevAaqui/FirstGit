
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Adding EventListener on form
form.addEventListener('submit', addItem);
//EventListener to remove the list
itemList.addEventListener('click', removeList);

function addItem(e){
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    
    //creating a new element to add in lists
    let li = document.createElement('li');
    li.className='list-group-item';

    // creating textNode of NewItem
    li.appendChild(document.createTextNode(newItem));

    // Add Delete Button
    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);

    let editBtn= document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editBtn);
     
    //Adding to the Itemslist
    itemList.appendChild(li);
}

//Function to removeList
function removeList(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?'))
        {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}