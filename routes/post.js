const express=require('express')
const router=express.Router()
const authMiddleware=require('../middleware/auth')
const post=require('../models/post')

//add new post
router.post('/',authMiddleware,(req,res)=>{
    let newPost =new post({...req.body,user:req.userId})
    newPost.save()
            .then(post=>res.status(201).send(post))
            .catch((err)=>{
                console.error(err.message)
                res.status(500).send({msg:'server error'})
            })
})
//get all post
router.get('/',(req,res)=>{
    post.find()
    .then(post=>res.status(201).send(post))
    .catch((err)=>{
        console.error(err.message)
        res.status(500).send({msg:'server error'})
    })
})

//delet post 



module.exports=router