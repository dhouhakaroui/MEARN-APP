const express=require('express')
const router=express.Router()
const authMiddleware=require('../middleware/auth')
const post=require('../models/post')

//add new post
router.post('/',authMiddleware,(req,res)=>{
    let newPost =new post({...req.body,owner:req.userId})
    newPost.save()
            .then(post=>res.status(201).send(post))
            .catch((err)=>{
                console.error(err.message)
                res.status(500).send({msg:'server error'})
            })
})

module.exports=router