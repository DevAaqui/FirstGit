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
// itemList.addEventListener('click', removeList);

//Invoking Editing Function
// itemList.addEventListener('click', editList)

//Remove List Function
// function removeList(e){
// if(e.target.classList.contains('delbtn'))
// {
//     if(confirm('Are you sure?')){
//         let li = e.target.parentElement;
//         itemList.removeChild(li);
//     }
    
// }
// }
 
// //Edit list function
// function editList(e){
//     if(e.target.classList.contains('edbtn'))
//     {
//         let li = e.target.parentElement;
//        // console.log(li.firstChild)
//         expenseAmount.value = li.firstChild.textContent;
//         console.log(li)
//         description.value = li.id;// solved
//         localStorage.removeItem(li.id);
//         //removing the edit list
//         itemList.removeChild(li);

//     }

// }

// Adding List function
function onSubmit(e){
    e.preventDefault();

    let expenseObj = {
        amount: expenseAmount.value,
        descrip : description.value,
        categ : category.value
    };
    
    // Using AXIOS to POST OBJects

    axios.post('https://crudcrud.com/api/82c8bd650dd84d7ea3927f995e9b25fb/expenseData', expenseObj)
    .then((response)=> {
        console.log(response)
    })
    .catch((err)=> {
        console.log(err)
    })
    
    addNewLine(expenseObj);
}

window.addEventListener('DOMContentLoaded', (event) => {
    // Object.keys(localStorage).forEach(key => {
    //     const user = JSON.parse(localStorage.getItem(key))
    //     addNewLineElement(user)
    // })
    axios.get('https://crudcrud.com/api/82c8bd650dd84d7ea3927f995e9b25fb/expenseData')
    .then((response)=> {
        console.log(response.data)
        for(let i=0; i<response.data.length; i++){
            addNewLine(response.data[i])
        }
    })
    .catch(err=> console.log(err))
})

function addNewLine (obj){
        let li = `<li id = ${obj.descrip}> ${obj.amount} -- ${obj.descrip} -- ${obj.categ}
        <button onclick = deleteUser('${obj.descrip}')>Delete</button>
        <button onclick = editUser('${obj.amount}', '${obj.descrip}', '${obj.categ}')>Edit</button>
        </li>`
        showOnScreen(li);
}

function showOnScreen(li){
        itemList.innerHTML = itemList.innerHTML + li
}

function deleteUser(keyID){
    //console.log(obj)
    // axios.get('https://crudcrud.com/api/82c8bd650dd84d7ea3927f995e9b25fb/expenseData')
    // .then((response)=> {
    //   console.log(response.data.obj._id);
    // })     
    removeFromList(keyID)
}

function removeFromList(keyID){
    const parentNode = document.getElementById('items')
    const elem = document.getElementById(keyID)
    parentNode.removeChild(elem);
}

function editUser(amnt,des,cat){
    console.log(des)
    document.getElementById('expenseamount').value = amnt
    document.getElementById('description').value = des
    document.getElementById('category').value = cat

    console.log(des)

    deleteUser(des);
}