const express=require('express')
const router=express.Router()
const auth=require('../middleware/auth')
const authAdmin =require('../middleware/authAdmin')
const user=require('../models/user')

//get all users
router.get('/allUsers',(req,res)=>{
    user.find().select('-password -__v')
    .then(users=>res.status(201).send(users))
    .catch((err)=>{
        console.error(err.message)
        res.status(500).send({msg:'server error'})
    })
})
//delete user
router.delete('/delete/:id',auth,(req,res)=>{
    user.findOneAndDelete({ _id: req.params.id })
    .then(user=>res.status(201).send({msg:'user deleted'}))
    .catch((err)=>{
        console.error(err.message)
        res.status(500).send({msg:'server error'})
    })
})
// get user by id
router.get('/:user_id',(req,res)=>{
    user.findById({ _id: req.params.user_id }).select('-password -__v')
    .then(users=>res.status(201).send(users))
    .catch((err)=>{
        console.error(err.message)
        res.status(500).send({msg:'server error'})
    })
})
// update user info
router.put('/update',auth,(req,res)=>{
    user.findByIdAndUpdate(req.userId ,req.body).select('-password -__v')
    .then(users=>res.status(201).send(users))
    .catch((err)=>{
        console.error(err.message)
        res.status(500).send({msg:'server error'})
    })
})

module.exports=router