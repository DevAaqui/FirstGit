const express = require('express')

const path = require('path')

var cors = require('cors')

const User = require('./model/userModel')
const Expense = require('./model/expense')
const Order = require('./model/orderModel')
const ResetPass = require('./model/resetpassModel')
const DownloadFiles = require('./model/downloadfile')

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
const forgotRoutes = require('./route/forgotPassR')



app.use(bodyParser.json({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(userRoutes)
app.use(expenseRoutes)
app.use(orderRoutes)
app.use(premiumRoutes)
app.use(forgotRoutes)

User.hasMany(Expense)
Expense.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

User.hasMany(ResetPass)
ResetPass.belongsTo(User)

User.hasMany(DownloadFiles)
DownloadFiles.belongsTo(User)




sequelize .sync()
//.sync({force: true})
.then(result => {
    app.listen(3000)
})
.catch(err=> console.log(err))

