const { json } = require('body-parser')
const User = require('../model/userModel')

exports.postUsers = async (req,res,next) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const users = await User.findAll()  // array
    console.log(users[0])
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

exports.postLogin = async (req,res,next) => {
    

    const email = req.body.email
    const password = req.body.password

    //console.log(JSON.stringify(req))
    
    console.log("email" + email)
    console.log("password" + password)

    let responseObject

    const loginUsers = await User.findAll()
   // const loginUser = await User.findOne({where: {email : email}})

    //console.log(loginUsers.email)
    
    for(let i=0; i<loginUsers.length; i++)
    {

    if(loginUsers[i].email === email && loginUsers[i].password === password)
    {
        console.log('inside if',loginUsers[i].email)
        responseObject = { message: 'credentials matched' } 
        return res.json(responseObject)
    }
    else 
    {
        console.log('inside else',loginUsers[0].email)
        responseObject = { message: 'not matched'}
        return res.json(responseObject)
    }

    }

}

exports.getUser404 = (req,res,next) => {
    let responseObject = { message: 'user not found'}
    res.json(responseObject)
}