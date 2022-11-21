let form = document.getElementById('form');
let itemList = document.getElementById('items');
// Adding EventListener
form.addEventListener('submit', onSubmit);
//let objArray =[];

function onSubmit(e){
    e.preventDefault();
    let userName= document.getElementById('user-name').value;
    let userEmail = document.getElementById('user-email').value;

    let myobj = {
        name : userName,
        email: userEmail
    };
    localStorage.setItem(myobj.email, JSON.stringify(myobj));
   // let parseMyobj= JSON.parse(localStorage.getItem(myobj.email));
    
   //let myobj_deserialised = JSON.parse(localStorage.getItem('userDetails'));
   //console.log(myobj_deserialised); 
   //Creating an element
    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(userName));
    li.appendChild(document.createTextNode(userEmail));

    itemList.appendChild(li);
    //Display the booking confirmation
    let success = document.getElementById('success');
    success.style.color ='green';
    success.textContent = 'Booking has been confirmed ' +myobj.name +" " + myobj.email;

}
Object.keys(localStorage).forEach((key) => {
let info = localStorage.getItem(key);
let parseInfo = JSON.parse(info);
console.log(parseInfo);
//console.log(info.email);
});
