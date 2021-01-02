const express = require('express')
const router= express.Router()
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken')
const {body,validationResult}=require('express-validator')
const user=require('../models/user')
require('dotenv').config()

//register user
router.post('/',[
    body('firstName','first name must contain only alphabetic').isAlpha(),
    body('lastName','last name must contain only alphabetic').isAlpha(),
    body('email','please enter a valid email').isEmail(),
    body('password','minimum length allowed is 8 characters').isLength({min:8})
],(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    user.find({email:req.body.email})
        .then(users=>{
            if(users.length){
                return res.status(400).send({errors:[{msg:"user already exists!"}]})
            }
            let newUser=new user (req.body)
            bcrypt.genSalt(10,(err,salt)=>{
                if(err){throw err}
                bcrypt.hash(req.body.password,salt,(err,hashedPwd)=>{
                    if(err){throw err}
                    newUser.password=hashedPwd
                    newUser.save()
                    let payload={userId:newUser._id}
                    jwt.sign(payload,process.env.SECRET_KEY,(err,token)=>{
                        if(err)throw err
                        res.send({token})
                    })
                })
            })
        })
    })

module.exports = router