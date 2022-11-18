// Document Objects

//console.dir(document);
//console.log(document.URL);
//console.log(document.domain);
//document.title = 123;
//console.log(document.title);
//console.log(document.forms[0]);

// Get elements by ID

//console.log(document.getElementById('header-title'));
//const headerTitle = document.getElementById('header-title');
//headerTitle.textContent = 'Hello';
//headerTitle.innerHTML = "Ba-bye"; // It considers styling as well
const mainHeader=document.getElementById('main-header');
mainHeader.style.border ='solid 2px black';

const title = document.getElementsByClassName('title');
title[0].style.fontWeight = 'bold';
title[0].style.color = 'green';