const Expense = require('../model/expense')
const User = require('../model/userModel')
const jwt = require('jsonwebtoken')
//const user = require('./userCont')

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

        
        
        let totalExpense = Number(req.user.totalExpense) +Number(money)
        console.log('totalExpense>>>>>>>>>>>>>>',totalExpense)
        User.update({totalExpense: totalExpense}, {where:{id: req.user.id}})
        .then(()=>{
            res.json({data: data , message: 'Expense Created'})
        })
        .catch(err=>console.log(err))

        

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