
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Adding EventListener on form
form.addEventListener('submit', addItem);
//EventListener to remove the list
itemList.addEventListener('click', removeList);
//Adding EventListener to filter funtion
filter.addEventListener('keyup', filterItem);

function addItem(e){
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    let newSubItem = document.getElementById('itemSub').value;
   
    let itemObj = {
        itm : newItem,
        subItm : newSubItem
    };
    
    localStorage.setItem('productDetails', JSON.stringify(itemObj));
   // localStorage.setItem('details', newSubItem);
    
    //creating a new element to add in lists
    let li = document.createElement('li');
    li.className='list-group-item';

    // creating textNode of NewItem
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newSubItem));

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

//Funtion definition of FilterItem
function filterItem(e){
    let text = e.target.value.toLowerCase();
    let subText = e.target.value.toLowerCase();
    let items =itemList.getElementsByTagName('li');
   // console.log(items);
   Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    let itemSubName = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) !=-1 || itemSubName.toLowerCase().indexOf(subText) !=-1){
       item.style.display = 'block';
    }
    else{
    item.style.display ='none';
    }
   });

    
}