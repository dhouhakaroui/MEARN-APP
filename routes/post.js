const express=require('express')
const router=express.Router()
const auth=require('../middleware/auth')
const authAdmin=require('../middleware/authAdmin')
const post=require('../models/post')

//add new post
router.post('/',auth,(req,res)=>{
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
router.delete('/delete/_id',auth,authAdmin,(req,res)=>{
    post.findOneAndDelete({_id:req.params._id,user:req.userId})
    .then(post=>res.status(201).send({msg:'post deleted'}))
    .catch((err)=>{
        console.error(err.message)
        res.status(500).send({msg:'server error'})
    })
})
//delet coment
router.delete('/delete_comment/:id/:comment_id',auth,(req,res)=>{
    const user = user.findById(req.user.id).select("-password");
    const Post = post.findById(req.params.id);
    const comment = Post.comments.find((comment) => comment.id === req.params.comment_id );
    if (!comment)
        return res.status(404).json({ msg: "comment does not exist " });
    if (!user.role) {
        if (comment.user !== req.user.id) {
            return res.status(401).json({ msg: "user not authorized " });
        }
    }
    post.findByIdAndUpdate(req.params.id,{$pull: { comments: { _id: req.params.comment_id } }});
        then(post=>res.status(201).send({msg:'comment deleted'}))
    .catch((err)=>{
        console.error(err.message)
        res.status(500).send({msg:'server error'})
    }) 
})



module.exports=router