const express=require('express')
const router=express.Router()
const auth=require('../middleware/auth')
const authAdmin =require('../middleware/authAdmin')
const user=require('../models/user')

//get all users
router.get('/allUsers',auth,authAdmin,(req,res)=>{
    user.findById().select('-password -__v')
    .then(users=>res.status(201).send(users))
    .catch((err)=>{
        console.error(err.message)
        res.status(500).send({msg:'server error'})
    })
})


//delete user
router.delete('/delete/id',authAdmin,(req,res)=>{
    user.findOneAndDelete({ _id: req.params.id })
    .then(user=>res.status(201).send({msg:'user deleted'}))
    .catch((err)=>{
        console.error(err.message)
        res.status(500).send({msg:'server error'})
    })
})



module.exports=router