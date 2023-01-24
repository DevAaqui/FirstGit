const User = require('../model/userModel')

exports.postUsers = async (req,res,next) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const users = await User.findAll()  // array
    //console.log(users)
    for(let i=0; i<users.length; i++){
        if(users[i].email === email)
        {
            console.log(email)
            let responseObject = { message: 'Email Already Taken' }
            return res.send(responseObject)
        }
    }
    // users.forEach(user => {
        
    //     if(email === user.email)
    //     {
    //         console.log(user.email)
    //         console.log(email)
    //         return res.statusText ='Already this email is taken'
    //     }
    // });

    const data = await User.create({
        name: name,
        email: email,
        password: password
    })
    
    res.json({data: data})
    
}