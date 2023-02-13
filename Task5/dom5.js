//Finding ParentNode

const li = document.querySelector('li');
//li.parentNode.parentNode.style.backgroundColor='green'
// console.log(li.parentNode.parentNode.parentNode);

//Finding parent element

// const li = document.querySelector('li');
// console.log(li.parentElement.parentElement);

//Child Nodes
//const items = document.querySelector('#items');
//console.log(items.childNodes);
//console.log(items.children); //This use specially
//items.children[1].style.backgroundColor = 'green';

//First Child
//console.log(items.firstChild);//Useless 
//console.log(items.firstElementChild);//useful
//items.firstElementChild.textContent = 'Child';

//Last Child
//console.log(items.lastChild);//again useless
//console.log(items.lastElementChild);
//items.lastElementChild.style.color = 'red'

//previousSibling
//console.log(items.previousSibling);
//console.log(items.previousElementSibling);

//nextSibling
//console.log(items.nextSibling);
//console.log(items.nextElementSibling);

//Creating an element

//creating Div
const newDiv = document.createElement('div');
newDiv.className = 'demoClassName';// Adding ClassName
newDiv.id = 'demoID';//Adding ID
newDiv.setAttribute('title', 'demoTitle');// Adding attributes
//creating TextNode
const newDivText = document.createTextNode('Hello Demo !');
newDiv.appendChild(newDivText);
newDiv.style.color='black';
newDiv.style.fontWeight='bold'
console.log(newDiv);

//Placing newDiv Before Item Lister//
// let container = document.querySelector('Header .container');
// let h1 = document.querySelector('Header h1');
// container.insertBefore(newDiv, h1);

//Placing newDiv before item1
let divParent = document.querySelector('.container #main ');
let ul = document.querySelector('.list-group');


divParent.insertBefore(newDiv,ul);

