const User = require('../model/userModel')
const Expense = require('../model/expense')
const sequelize = require('../util/database')

const leaderboard = async (req,res)=> {
    try{
        let userAndExpenseObject = []
        let leaderboardofusers = await User.findAll({
        attributes: ['id','name', [sequelize.fn('sum', sequelize.col('expenses.spent')), 'totalExpense']],
        include: [
            {
                model: Expense,
                attributes: []
            }
            
        ],
        group: ['user.id'],
        order: [['totalExpense', 'DESC']]
    }) 

    

    // let sortedArray = userAndExpenseObject.sort((a,b) => {
    //     return b.TotalExpenses - a.TotalExpenses
    // })
    
    
    return res.json({userAExpenseDetails: leaderboardofusers, success: true})
    }  
    //     let expenses = await expenses.findAll({
    //         attributes: ['userId', ],
    //         group: ['userId']
    //     })

    // for(let i=0; i<users.length; i++)
    // {
    //     let name = users[i].name

    //     //let userExpensesArray = await Expense.findAll({where:{id: users[i].id}}) 
    //     let userExpensesArray = await Expense.findAll({
    //         attributes: ['userId', 'spent']
    //     }) 
    //     //console.log('userExpenseArray>>>>>>>>>>',userExpensesArray)

    //     let total =0

    //     for(let j=0; j<userExpensesArray.length; j++)
    //     {
    //         if(users[i].id === userExpensesArray[j].userId){
    //             total = total + parseInt(userExpensesArray[j].spent) 
    //         }
            
    //     }         
      
    catch(err){
        throw new Error(err)
    }
}
    

module.exports = {
    leaderboard
}