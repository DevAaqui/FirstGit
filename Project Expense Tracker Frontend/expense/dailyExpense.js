let btn = document.getElementById('expensebtn')
// btn.style.background = '#097969';

document.body.style.background ='#AFE1AF'

let itemList = document.getElementById('items')

//let form = document.getElementById('spentForm')

//form.addEventListener('submit', onSubmit)

function onSubmit()
{
    //e.preventDefault()

    let money = document.getElementById('moneySpent')
    let descrip = document.getElementById('description')
    let categ = document.getElementById('expensecategory')

    let expenseObject = {
        moneySpent: money.value,
        description: descrip.value,
        category: categ.value
    }

    console.log(expenseObject)
    const token = localStorage.getItem('token') 

    axios.post('http://localhost:3000/expense/addexpense',  expenseObject, { headers: {"Authorization" : token }})
    .then(response => {
        //console.log(response)
        const data = response.data.data
        console.log(data.id)
        addNewLine(data)

        
    })
    .catch(err => console.log(err))


}

window.addEventListener('DOMContentLoaded', (event)=> {
    const token = localStorage.getItem('token')
    axios.get('http://localhost:3000/expense/getexpenses', { headers: {"Authorization" : token }})
        .then(response => {
            let arr = response.data.allExpense

            for(let i=0; i<arr.length; i++){
                addNewLine(arr[i])

            }
            
        })
        .catch(err=> console.log(err))
})

function addNewLine(elem) {
    let li =`<li id = ${elem.id}>${elem.spent}--${elem.description}--${elem.category}
    <button onclick="deleteExpense(${elem.id})">Delete</button>
    </li`
    showOnScreen(li)
}

function showOnScreen(li)
{
    itemList.innerHTML = itemList.innerHTML + li  
}

function deleteExpense(expenseId)
{
    const token = localStorage.getItem('token') 
    removeFromList(expenseId)
    axios.delete(`http://localhost:3000/expense/delete-expense/${expenseId}`, { headers : {"Authorization" : token } })
    .then(response =>{
        console.log(response.data.message)
    })
    .catch(err=>console.log(err))
}

function removeFromList(expenseId)
{
    const parentNode = document.getElementById('items')
    const elem = document.getElementById(expenseId)

    parentNode.removeChild(elem)
}