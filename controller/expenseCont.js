const Expense = require('../model/expense')

exports.postAddExpense = async (req,res,next) => {
    try{
        const money = req.body.moneySpent
        const descrip = req.body.description
        const categ = req.body.category

        //console.log(req.body)

        console.log(money, descrip, categ)
    
        const data = await Expense.create({
            spent: money,
            description: descrip,
            category: categ
         })

        res.json({data: data , message: 'Expense Created'})

    }
    catch(err){
        res.status(500).json(err)
    }
    
}

exports.getAllExpenses = async (req,res,next) => {
    try{
    const allExpense = await Expense.findAll()
    res.json({allExpense:allExpense, success: true})
    }
    catch(err){
        res.status(500).json(err)
    }
    
}

exports.deleteExpense = async (req,res,next) => {
    const deleteId = req.params.id
    const deleteExpense = await Expense.findByPk(deleteId)

    deleteExpense.destroy()
    res.json({message: 'DELETED', success: true})

}