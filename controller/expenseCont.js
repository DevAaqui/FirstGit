const Expense = require('../model/expense')
const jwt = require('jsonwebtoken')

exports.postAddExpense = async (req,res,next) => {
    try{
        const money = req.body.moneySpent
        const descrip = req.body.description
        const categ = req.body.category
        const userId = req.user.id

        //console.log(req.body)

        console.log(money, descrip, categ)
    
        const data = await Expense.create({
            spent: money,
            description: descrip,
            category: categ,
            userId : userId
         })

        res.json({data: data , message: 'Expense Created'})

    }
    catch(err){
        res.status(500).json(err)
    }
    
}

exports.getAllExpenses = async (req,res,next) => {
    try{
        console.log('Request>>>>>>>>', req.user.id)
    const allExpense = await Expense.findAll({where : {userId : req.user.id}})
    res.json({allExpense:allExpense, success: true})
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
    
}

exports.deleteExpense = async (req,res,next) => {
    try{
        const deleteId = req.params.id
        const userId = req.user.id

        console.log('Delete wala userId>>>>', userId)

    const deleteExpense = await Expense.findByPk(deleteId)

    deleteExpense.destroy({where : {id : deleteId , userId : userId}})
    res.json({message: 'DELETED', success: true})
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
    

}