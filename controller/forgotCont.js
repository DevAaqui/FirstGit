const User = require('../model/userModel')
const user = require('./userCont')
const Sib = require('sib-api-v3-sdk')

const forgotpassword = async (req,res)=> {
    try{
        const {email} = req.body
        const client = Sib.ApiClient.instance

        const apiKey = client.authentications['api-key']
        apiKey.apiKey = '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'
        
        const transEmailApi = new Sib.TransactionalEmailsApi()

        const sender = {
            email: 'aaquibrais12345@gmail.com'
        }

        const receivers = [
            {
                email: 'aaquibrais12345@gmail.com'
            }
        ]
        transEmailApi.sendTransacEmail({
            sender,
            to: receivers,
            subject: 'Confirm Email Address',
            htmlContent: `<button>Update Password</button>`

        })
        .then(console.log)
        .catch(err=>console.log(err))
        
        return res.status(202).json({message: 'UPDATE', success: true})
    }
    catch(err){
        throw new Error(err)
    }
    
}

module.exports = {
    forgotpassword
}