const User = require('../model/user')

exports.getUsers = async (req,res,next) => {
    const users = await User.findAll()
    res.status(200).json({allUsers: users})
}

exports.postUser = async (req,res,next) => {
    const amount = req.body.amount
    const categ = req.body.categ
    const descrip = req.body.descrip

    const data = await User.create({
        amount: amount,
        categ: categ,
        descrip: descrip
    })
    res.status(201).json({newUserDetail: data})
}

exports.postDeleteUser = async (req,res,next) => {
    const userId = req.params.id
    //const user = await User.findByPk(userId)
    await User.destroy({where: {id: userId}})
    res.sendStatus(200)
}

exports.postEditUser =  (req, res, next) => {
    const userId = req.params.id
    const updatedAmount = req.body.amount
    const updatedCateg = req.body.categ
    const updatedDescrip = req.body.descrip
    
    User.finByPk(userId)
    .then(user => {
        user.amount = updatedAmount
        user.categ = updatedCateg
        user.descrip = updatedDescrip

        return user.save()
    })
    .then(()=>{
        console.log('UPDATED')
    })
    .catch(err=> console.log(err))
    
}