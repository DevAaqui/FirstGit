const path = require('path')

const userAuthentication = require('../middleware/auth')

const express = require('express')

const expenseController = require('../controller/expenseCont')

const router = express.Router()

router.post('/expense/addexpense', userAuthentication.authenticate ,expenseController.postAddExpense)

router.get('/expense/getexpenses', userAuthentication.authenticate ,expenseController.getAllExpenses)

router.delete('/expense/delete-expense/:id', userAuthentication.authenticate , expenseController.deleteExpense)

module.exports = router