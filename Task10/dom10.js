let form = document.getElementById('form');
let itemList = document.getElementById('items');
// Adding EventListener
form.addEventListener('submit', onSubmit);

//Functioning delete button
itemList.addEventListener('click', removeList);

//Functioning Edit button
itemList.addEventListener('click', editName);

function onSubmit(e){
    e.preventDefault();
    let userName= document.getElementById('user-name').value;
    let userEmail = document.getElementById('user-email').value;
    

    let myobj = {
        name : userName,
        email: userEmail
    };
    if(localStorage.getItem(myobj.email))
    {
        alert('Enter different Email')
    }
    else{
    localStorage.setItem(myobj.email, JSON.stringify(myobj));
   // let parseMyobj= JSON.parse(localStorage.getItem(myobj.email));
    
   //let myobj_deserialised = JSON.parse(localStorage.getItem('userDetails'));
   //console.log(myobj_deserialised); 
   //Creating an element
    let li = document.createElement('li');
    li.className='list-group-item';
    li.id = myobj.email;
    li.name = myobj.userName;
   // console.log(li);
    //console.log(document.getElementById(myobj.email))
    li.appendChild(document.createTextNode(userName));
    li.appendChild(document.createTextNode(userEmail));
    //Adding Edit Button
    let editBtn= document.createElement('button');
    editBtn.className = 'btn-edit';
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editBtn);

    // Add Delete Button
    let delBtn = document.createElement('button');
    delBtn.className = 'btn';
    delBtn.appendChild(document.createTextNode('X'));
    //delBtn.style.float='center';
    li.appendChild(delBtn);

    

        itemList.appendChild(li);
        //Display the booking confirmation
        let success = document.getElementById('success');
        success.style.color ='green';
        success.textContent = 'Booking has been confirmed ' +myobj.name +" " + myobj.email;
    }
}

// Object.keys(localStorage).forEach((key) => {
// let info = localStorage.getItem(key);

// let parseInfo = JSON.parse(info);

// console.log(parseInfo.email);

// });

// RemoveList Function
function removeList(e)
{ 
//console.log(e.target);
//console.log(e.target.)
    if(e.target.classList.contains('btn'))
    {
        if(confirm('Are you sure?'))
        {
            let li = e.target.parentElement;
            console.log(li.id);
            
            localStorage.removeItem(li.id);
            itemList.removeChild(li);
                  
            
        }
    }
}

//EditName Function
function editName(e)
{
   // e.preventDefault();
   if(e.target.classList.contains('btn-edit')){
     let uName = document.getElementById('user-name').value;
     let uEmail = document.getElementById('user-email').value;

    let li = e.target.parentElement;
            //console.log(li.id);
            
            localStorage.removeItem(li.id);
            itemList.removeChild(li);
            
            //Adding the populated value in LI as well as local storage

            let myobj = {
                name : uName,
                email: uEmail
            };
            if(localStorage.getItem(myobj.email))
            {
                alert('Enter different Email')
            }
            else{
            localStorage.setItem(myobj.email, JSON.stringify(myobj));
           // let parseMyobj= JSON.parse(localStorage.getItem(myobj.email));
            
           //let myobj_deserialised = JSON.parse(localStorage.getItem('userDetails'));
           //console.log(myobj_deserialised); 
           //Creating an element
            let li2 = document.createElement('li');
            li2.className='list-group-item';
            li2.id = myobj.email;
            li2.name = myobj.userName;
           // console.log(li);
            //console.log(document.getElementById(myobj.email))
            li2.appendChild(document.createTextNode(uName));
            li2.appendChild(document.createTextNode(uEmail));
            }


//    //console.log(e.target);
//    let li = e.target.parentElement;
//    console.log(li.name)
//    li.textContent = li.name;
}
    // if(e.target.classList.contains('btn-edit'))
    // {
    //     let li = e.target.parentElement;
    //     li.chi
        
    // }
}
