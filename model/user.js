const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false     
    },
    categ: {
        type: Sequelize.STRING,
        allowNull:false,
        
    },
    descrip: {
        type: Sequelize.STRING,
        allowNull: false,
        
    }
})

module.exports = User