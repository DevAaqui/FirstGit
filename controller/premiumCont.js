const User = require('../model/userModel')
const Expense = require('../model/expense')

const leaderboard = async (req,res)=> {
    try{
        let userAndExpenseObject = []
    let users = await User.findAll() // user array
    //console.log('Array wala users in controller>>>>>>>', users)
    for(let i=0; i<users.length; i++)
    {
        let name = users[i].name

        //let userExpensesArray = await Expense.findAll({where:{id: users[i].id}}) 
        let userExpensesArray = await Expense.findAll() 
        //console.log('userExpenseArray>>>>>>>>>>',userExpensesArray)

        let total =0

        for(let j=0; j<userExpensesArray.length; j++)
        {
            if(users[i].id === userExpensesArray[j].userId){
                total = total + parseInt(userExpensesArray[j].spent) 
            }
            
        }
        
        userAndExpenseObject.push({Name:name, TotalExpenses: total})

    }
    let sortedArray = userAndExpenseObject.sort((a,b) => {
        return b.TotalExpenses - a.TotalExpenses
    })
    console.log('user and expense>>>>>>>>>>',userAndExpenseObject)
    return res.json({userAExpenseDetails: sortedArray, success: true})
    }    
    catch(err){
        throw new Error(err)
    }
}
    

module.exports = {
    leaderboard
}