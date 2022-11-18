//Using QuerySelector

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor= 'green';

// const thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display ='none';

//Using QuerySelectorAll

// const items = document.querySelectorAll('.list-group-item');
// items[1].style.color= 'green';

const odd = document.querySelectorAll('.list-group-item:nth-child(odd)');

for(let i =0; i<odd.length; i++){
    odd[i].style.backgroundColor ='green';
}