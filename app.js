const path = require('path')

const express =require('express')

const bodyParser = require('body-parser')

var cors = require('cors')

const sequelize = require('./util/database')

const app = express()

app.use(cors())

const userRoutes = require('./routes/user')

app.use(bodyParser.json({ extended: false }))
app.use(express.static(path.join(__dirname,'public')))

app.use(userRoutes)


sequelize.sync()
.then(result => {
    app.listen(3000)
})
.catch(err=> console.log(err))


