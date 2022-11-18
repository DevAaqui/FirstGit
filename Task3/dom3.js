//Using GetElementbyClassName

const items = document.getElementsByClassName('list-group-item');
//console.log(items);
items[2].style.backgroundColor = 'green';
for(let i =0; i<items.length; i++)
{
    items[i].style.fontWeight ='bold';
}

//GetElements by TagName

const li = document.getElementsByTagName('li');
//console.log(items);
li[2].style.backgroundColor = 'grey';
for(let i =0; i<li.length; i++)
{
    li[i].style.fontWeight ='bold';
}