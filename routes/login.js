const express=require('express')
const router=express.Router()
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {body,validationResult}=require('express-validator')
const authMiddleware=require('../middleware/auth')
const user=require('../models/user')
require('dotenv').config()

//load connected user
router.get('/',authMiddleware,(req,res)=>{
    user.findById(req.userId).select('-password -__v')
        .then(user=>{
            if(!user){
                return res.status(404).json({errors:[{msg:'user not found'}]})
            }
            res.status(200).json(user)
        })
        .catch((err)=>{
            console.error(err.message)
            res.status(500).send({errors:[{msg:'server error'}]})
        })
})

//login user
router.post('/',[
    body('email','please enter a valid email').isEmail(),
    body('password','please enter your password').notEmpty()
],(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    user.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
                return res.status(404).json({errors:[{msg:"please register before"}]})
            }
            bcrypt.compare(req.body.password,user.password,(error,isMatch)=>{
                if (error){throw error}
                if(!isMatch){
                    return res.status(400).json({errors:[{msg:'wrong password!'}]})
                }
                else {
                    let payload={ userId : user._id}
                    jwt.sign(payload,process.env.SECRET_KEY,(err,token)=>{
                        if(err)throw err
                        res.send({token})
                    })
                }
            })
        })
})

module.exports=router