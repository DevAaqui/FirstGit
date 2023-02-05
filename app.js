const express = require('express')

const path = require('path')

var cors = require('cors')

const User = require('./model/userModel')
const Expense = require('./model/expense')
const Order = require('./model/orderModel')

const bodyParser = require('body-parser')

const sequelize = require('./util/database')

const app = express()
//const dotenv = require('dotenv')

//dotenv.config();

app.use(cors())

const userRoutes = require('./route/user')
const expenseRoutes = require('./route/expenseR')
const orderRoutes = require('./route/purchaseR')
const premiumRoutes = require('./route/premiumR')


app.use(bodyParser.json({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(userRoutes)
app.use(expenseRoutes)
app.use(orderRoutes)
app.use(premiumRoutes)

User.hasMany(Expense)
Expense.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)


sequelize.sync()
//.sync({force: true})
.then(result => {
    app.listen(3000)
})
.catch(err=> console.log(err))

