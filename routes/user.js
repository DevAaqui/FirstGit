const path = require('path')

const express = require('express')

const userController = require('../controller/userCont')

const router = express.Router()

router.get('/user/get-users',userController.getUsers)

router.post('/user/add-user', userController.postUser)

router.post('/user/edit-user/:id', userController.postEditUser)

router.delete('/user/delete/:id', userController.postDeleteUser)



module.exports = router