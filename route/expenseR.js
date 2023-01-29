const path = require('path')

const express = require('express')

const expenseController = require('../controller/expenseCont')

const router = express.Router()

router.post('/expense/addexpense',expenseController.postAddExpense)

router.get('/expense/getexpenses',expenseController.getAllExpenses)

router.delete('/expense/delete-expense/:id', expenseController.deleteExpense)

module.exports = router