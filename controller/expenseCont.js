const Expense = require('../model/expense')
const User = require('../model/userModel')
const jwt = require('jsonwebtoken')
//const user = require('./userCont')
const AWS = require('aws-sdk')
const DownloadFiles = require('../model/downloadfile')


//Pagination
exports.getPagination = async (req,res)=> {
    const ITEMS_PER_PAGE = 5
    const page =  +req.query.page || 1 //req.query.page 
    console.log('>>>>>>>>>>>>>>>>>>>',req.query, page )
    let totalItems

    DownloadFiles.count()
    .then((total)=> {
        totalItems=total
        return DownloadFiles.findAll({
            offset: (page - 1)*ITEMS_PER_PAGE,
            limit: 5
        })
    })
    .then((files)=> {
        res.json({
            files:files,
            currentPage: page,
            hasNextPage: ITEMS_PER_PAGE * page <totalItems,
            nextPage: page+1,
            hasPreviousPage: page > 1,
            previousPage: page - 1,
            lastPage: Math.ceil(totalItems/ITEMS_PER_PAGE)
        })
    })
    .catch(err=>console.log(err))
}

exports.downloadexpense = async (req,res)=> {
 try{
   const expenses = await Expense.findAll({where : {userId : req.user.id}})
   console.log('Expense Array>>>>>>>>>>>>>>>>>>>',expenses)

   const stringifiedExpenses = JSON.stringify(expenses)

   const userId = req.user.id
   const filename = `Expenses${userId}/${new Date}.txt`
   const fileURL = await uploadToS3(stringifiedExpenses, filename)

   console.log('FileURL>>>>>', fileURL)
   const createdLink = await DownloadFiles.create({dlink: fileURL, userId: userId})

   const allLinks = await DownloadFiles.findAll()

   return res.status(201).json({fileURL, allLinks: allLinks, success: true})
 }
 catch(err){
    console.log(err)
    res.status(500).json({fileURL: '', success: false})
 }
    

   

}

async function uploadToS3(data, filename)
{
    try{
        const BUCKET_NAME = 'expensetrackerappproject'
        const IAM_USER_KEY = 'AKIAYEM5YODI4QWIWSMA'
        const IAM_USER_SECRET = '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'

        let s3Bucket = new AWS.S3({
            accessKeyId: IAM_USER_KEY,
            secretAccessKey: IAM_USER_SECRET,
            //Bucket: BUCKET_NAME
        })

        
        var params = {
                Bucket: BUCKET_NAME,
                Key: filename,
                Body: data,
                ACL: 'public-read'
        }
        return new Promise((resolve,reject)=> {
            s3Bucket.upload(params, (err, s3response)=> {
                if(err){
                    reject(err)
                }
                else{
                    console.log('Success', s3response)
                    resolve(s3response.Location) 
                }
            })
        })
            
    }
    catch(err){
        throw new Error(err)
    }
    
    



}

exports.postAddExpense = async (req,res,next) => {
    try{
        const money = req.body.moneySpent
        const descrip = req.body.description
        const categ = req.body.category
        const userId = req.user.id

        //console.log(req.body)

        console.log(money, descrip, categ)
    
        const data = await Expense.create({
            spent: money,
            description: descrip,
            category: categ,
            userId : userId
        })

        
        
        let totalExpense = Number(req.user.totalExpense) +Number(money)
        console.log('totalExpense>>>>>>>>>>>>>>',totalExpense)
        User.update({totalExpense: totalExpense}, {where:{id: req.user.id}})
        .then(()=>{
            res.json({data: data , message: 'Expense Created'})
        })
        .catch(err=>console.log(err))

        

    }
    catch(err){
        res.status(500).json(err)
    }
    
}

exports.getAllExpenses = async (req,res,next) => {
    try{
        console.log('Request>>>>>>>>', req.user.id)
    const allExpense = await Expense.findAll({where : {userId : req.user.id}})
    res.json({allExpense:allExpense, success: true})
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
    
}

exports.deleteExpense = async (req,res,next) => {
    try{
        const deleteId = req.params.id
        const userId = req.user.id

        console.log('Delete wala userId>>>>', userId)

    const deleteExpense = await Expense.findByPk(deleteId)

    deleteExpense.destroy({where : {id : deleteId , userId : userId}})
    res.json({message: 'DELETED', success: true})
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
    

}

