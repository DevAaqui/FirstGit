

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


    //console.log('Inside Edit and Submit', Userid)
    
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

    axios.put(`http://localhost:3000/user/edit-user/${Userid}`, expenseObj)
    .then(response => {
        console.log('response is', response.data)
        //addNewLine(response.data.editedUserDetails)

    })
    .catch(err=> console.log(err))

    
}
else
{

    axios.post('http://localhost:3000/user/add-user', expenseObj)
    .then((response)=> {
        console.log(response.data.newUserDetail)
       // addNewLine(response.data.newUserDetail)
        
    })
    .catch((err)=> {
        console.log(err)
    })
   
}
addNewLine(expenseObj);  
expenseAmount.value=''
description.value=''
category.value=''
}

window.addEventListener('DOMContentLoaded', (event) => {
    // Object.keys(localStorage).forEach(key => {
    //     const user = JSON.parse(localStorage.getItem(key))
    //     addNewLineElement(user)
    // })
    axios.get('http://localhost:3000/user/get-users')
    .then((response)=> {
       // console.log(response.data)
        array = response.data.allUsers;// look Out
        //console.log((response.data.allUsers.length))
        for(let i=0; i<response.data.allUsers.length; i++){
            //console.log(response.data.allUsers[i])
            addNewLine(response.data.allUsers[i])
        }
    })
    .catch(err=> console.log(err))
})

function addNewLine (obj){
        //console.log(obj.id)
        let li = `<li id = ${obj.id}> ${obj.amount} -- ${obj.descrip} -- ${obj.categ}
        <button onclick = deleteUser('${obj.id}')>Delete</button>
        <button onclick = editUser(${JSON.stringify(obj.id)})>Edit</button>
        </li>`
        //console.log(headID)   
        showOnScreen(li);
}

function showOnScreen(li){
        itemList.innerHTML = itemList.innerHTML + li
}

function deleteUser(keyID){
   // console.log(obj)
    removeFromList(keyID)  
    axios.delete(`http://localhost:3000/user/delete/${keyID}`)
    .then((response)=> {
        console.log('Deleted')
        //removeFromList(keyID)  
    })     
    
}

function removeFromList(keyID){
    const parentNode = document.getElementById('items')
    const elem = document.getElementById(keyID)
    parentNode.removeChild(elem);
}

function editUser(id){
    
    const index = array.findIndex(x=> x.id == id);
    if(index <= -1) return;

    const obj = array[index];
    //console.log(des)
    document.getElementById('expenseamount').value = obj.amount
    document.getElementById('description').value = obj.descrip
    document.getElementById('category').value = obj.categ
     
    console.log(obj.id)
    Userid =  id //_id has been set to global id variable
    console.log(id);
    isEdited = true;

    

    // axios.put(`https://crudcrud.com/api/a1ada547641745e4b6a8dcf672698197/expenseData/${obj._id}`,{amount:am,description:de,category:cat})
    // .then(response => console.log(response))
    // .catch(err=> console.log(err))
    
    //console.log(des)

    removeFromList(obj.id);
}

