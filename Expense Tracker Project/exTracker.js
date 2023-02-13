let expenseAmount = document.getElementById('expenseamount');
let description = document.getElementById('description');
let category = document.getElementById('category');

// let items = document.querySelectorAll('#items li');
// let tab = [];

// for(let i =0; i<items.length; i++)
// {
//     tab.push(items[i].innerHTML); 
// }

//button color changing
let butn = document.getElementById('buttonAdd');
butn.style.background ='#837E7E';
butn.style.color ='white';


let form = document.getElementById('exForm');
let itemList = document.getElementById('items');

//Submit button
form.addEventListener('submit', onSubmit);

//Deleting button
itemList.addEventListener('click', removeList);

//Invoking Editing Function
itemList.addEventListener('click', editList)

//Remove List Function
function removeList(e){
if(e.target.classList.contains('delbtn'))
{
    if(confirm('Are you sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
    
}
}
 
//Edit list function
function editList(e){
    if(e.target.classList.contains('edbtn'))
    {
        let li = e.target.parentElement;
       // console.log(li.firstChild)
        expenseAmount.value = li.firstChild.textContent;
        console.log(li)
        description.value = li.id;// solved
        localStorage.removeItem(li.id);
        //removing the edit list
        itemList.removeChild(li);

    }

}

// Adding List function
function onSubmit(e){
    e.preventDefault();

    

    let expenseObj = {
        amount: expenseAmount.value,
        descrip : description.value,
        categ : category.value
    };

    //Setting localStorage
    //localStorage.setItem(expenseObj.descrip, JSON.stringify(expenseObj));
    // Using AXIOS to POST OBJects

    axios.post('https://crudcrud.com/api/46e47489c84346a69ba7ac3d64dc9cba/expenseData', expenseObj)
    .then((response)=> {
        console.log(response)
    })
    .catch((err)=> {
        console.log(err)
    })

    let li = document.createElement('li');
    li.id = expenseObj.descrip;
   // li.className= 'list-group';
    li.appendChild(document.createTextNode(expenseObj.amount));
    li.appendChild(document.createTextNode(expenseObj.descrip));
    li.appendChild(document.createTextNode(expenseObj.categ));

    //Adding Delete button and appending to the li
    let deleteBtn = document.createElement('button');
    deleteBtn.style.background ='#837E7E';
    deleteBtn.style.color ='white';
    deleteBtn.className = 'delbtn';

    deleteBtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deleteBtn);

    //Adding Edit Button and appending to the Li
    let editBtn = document.createElement('button');
    editBtn.className ='edbtn';
    editBtn.style.background ='#837E7E';
    editBtn.style.color ='white';

    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);




    itemList.appendChild(li);
    
}
axios.get('https://crudcrud.com/api/46e47489c84346a69ba7ac3d64dc9cba/expenseData')
.then(response => {
    console.log(response)
})
.catch(err=> console.log(err))