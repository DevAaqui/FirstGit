const User = require('../model/userModel')
const user = require('./userCont')

const forgotpassword = async (req,res)=> {
    try{
        const {email, upPass} = req.body
        console.log(upPass)
        await req.user.update({password: upPass})
        // const user = await User.findAll({where:{email}})
        // user.password = upPass
        // console.log('user password>>>>>>>>>>>',user.password)
        return res.json({message: 'UPDATE', success: true})
    }
    catch(err){
        throw new Error(err)
    }
    
}

module.exports = {
    forgotpassword
}