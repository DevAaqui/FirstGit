

//button color changing
let butn = document.getElementById('buttonAdd');
butn.style.background ='#837E7E';
butn.style.color ='white';


let form = document.getElementById('exForm');
let itemList = document.getElementById('items');
let array;

var Userid ="";
let isEdited = false;

//Submit button
form.addEventListener('submit', onSubmit);




// Adding List function
function onSubmit(e){
    e.preventDefault();


    console.log('Inside Edit and Submit', Userid)
    
    let expenseAmount = document.getElementById('expenseamount');
    let description = document.getElementById('description');
    let category = document.getElementById('category');

    let expenseObj = {
        'amount': expenseAmount.value,
        'descrip' : description.value,
        'categ' : category.value
    };

if(isEdited=== true)
{ 

    axios.put(`https://crudcrud.com/api/1b0f2a134ae840688e7eb9ca5ad60087/expenseData/${Userid}`, expenseObj)
    .then(response => console.log(response))
    .catch(err=> console.log(err))

    
}
else
{

    axios.post('https://crudcrud.com/api/1b0f2a134ae840688e7eb9ca5ad60087/expenseData', expenseObj)
    .then((response)=> {
        console.log(response)
        
    })
    .catch((err)=> {
        console.log(err)
    })
   
}
addNewLine(expenseObj);  
}

window.addEventListener('DOMContentLoaded', (event) => {
    // Object.keys(localStorage).forEach(key => {
    //     const user = JSON.parse(localStorage.getItem(key))
    //     addNewLineElement(user)
    // })
    axios.get('https://crudcrud.com/api/1b0f2a134ae840688e7eb9ca5ad60087/expenseData')
    .then((response)=> {
        console.log(response.data)
        array = response.data;
        //console.log((response.data._id))
        for(let i=0; i<response.data.length; i++){
            addNewLine(response.data[i])
        }
    })
    .catch(err=> console.log(err))
})

function addNewLine (obj){
   // console.log(obj._id)
        let li = `<li id = ${obj._id}> ${obj.amount} -- ${obj.descrip} -- ${obj.categ}
        <button onclick = deleteUser('${obj._id}')>Delete</button>
        <button onclick = editUser(${JSON.stringify(obj._id)})>Edit</button>
        </li>`
        //console.log(headID)   
        showOnScreen(li);
}

function showOnScreen(li){
        itemList.innerHTML = itemList.innerHTML + li
}

function deleteUser(keyID){
   // console.log(obj)
    axios.delete(`https://crudcrud.com/api/1b0f2a134ae840688e7eb9ca5ad60087/expenseData/${keyID}`)
    .then((response)=> {
        removeFromList(keyID)  
    })     
    
}

function removeFromList(keyID){
    const parentNode = document.getElementById('items')
    const elem = document.getElementById(keyID)
    parentNode.removeChild(elem);
}

function editUser(id){
    
    const index = array.findIndex(x=> x._id == id);
    if(index <= -1) return;

    const obj = array[index];
    //console.log(des)
    const am = document.getElementById('expenseamount').value = obj.amount
    const de = document.getElementById('description').value = obj.descrip
    const cat = document.getElementById('category').value = obj.categ
     
    console.log(obj._id)
    Userid =  id //_id has been set to global id variable
    console.log(id);
    isEdited = true;

    

    // axios.put(`https://crudcrud.com/api/1b0f2a134ae840688e7eb9ca5ad60087/expenseData/${obj._id}`,{amount:am,description:de,category:cat})
    // .then(response => console.log(response))
    // .catch(err=> console.log(err))
    
    //console.log(des)

    removeFromList(obj._id);
}

