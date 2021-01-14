const express=require('express')
const router=express.Router()
const auth=require('../middleware/auth')
const authAdmin=require('../middleware/authAdmin')
const post=require('../models/post')
const user = require('../models/user')

//add new post
router.post('/',auth,(req,res)=>{
    if (!req.body.text){return res.status(400).send({msg:"post is empty!"})}
    let newPost =new post({...req.body,user:req.userId})
    newPost.save()
            .then(post=>res.status(201).send(post))
            .catch((err)=>{
                console.error(err.message)
                res.status(500).send({msg:"server error"})
            })
})
//get all post
router.get('/',(req,res)=>{
    post.find()
        .sort({date: -1})
    .then(post=>res.status(201).send(post))
    .catch((err)=>{
        console.error(err.message)
        res.status(500).send({msg:'server error'})
    })
})

//get posts by user_id
router.get('/posts/:user_id',(req,res)=>{
    post.find({user: req.params.user_id}).sort({date: -1})
        .then(post=>{
            if(!post){ return  res.status(404).json({msg: 'not have posts'});}
            res.status(201).send(post)})
        .catch((err)=>{
            console.error(err.message)
            res.status(500).send({msg:'server error'})
    })
})

//get post by id
router.get('/:post_id',(req,res)=>{
    post.findOne({_id: req.params.post_id})
        .then(post=>{
            if(!post){ return  res.status(404).json({msg: 'No Post found'});}
            res.status(201).send(post)})
        .catch((err)=>{
            console.error(err.message)
            res.status(500).send({msg:'server error'})
    })
})

//delet post 
router.delete('/delete/:_id',auth,(req,res)=>{
    const userauth=user.findById({ $or: [{_id:req.userId},{role:1}]})
    if(!userauth){return res.status(404).json({msg:"User not authorised"})}
    post.findOneAndDelete({_id:req.params._id})
    .then(post=>{
        if(!post){res.status(401).send({msg:"User not authorised"})}
        res.status(201).send({msg:'post deleted'})})
    .catch((err)=>{
        console.error(err.message)
        res.status(500).send({msg:'server error'})
    })
})

//UPDATE POST

// update text post
router.put('/:post_id',auth,(req,res)=>{
    post.findByIdAndUpdate({_id:req.params.post_id,user:req.userId}, req.body)
        .then(post=>{
            if(!post){res.status(401).send({msg:"User not authorised"})}
            res.status(201).send(post)})
        .catch((err)=>{
            console.error(err.message)
            res.status(500).send({msg:'server error'})
        })
})

//like post
router.put('/like/:post_id',auth,(req,res)=>{
    post.findOne({_id: req.params.post_id})
            .then(post => {
                if(post.likes.filter(like => like.user.toString() === req.userId).length > 0){
                    return res.status(400).json({msg: 'Already liked the post'})
                }    
                post.likes.unshift({ user : req.userId});
                post.save().then(post => res.json(post))
            }).catch(err => res.status(404).json({msg:'Post Not Found'}));
})

//dislike post
router.put('/dislike/:post_id',auth,(req,res)=>{
    post.findOne({_id: req.params.post_id})
    .then(post => {        
        if(post.likes.filter(like => like.user.toString() === req.userId).length === 0){
            return res.status(400).json({msg: 'You haven\'t liked this post'})
        }    
        var removeIndex = post.likes.map(like => like.user).indexOf(req.userId);
        post.likes.splice(removeIndex,1);
        post.save().then(post => res.json(post));
    }).catch(err => res.status(404).json({msg:'Post Not Found'}));
})

//add comment
router.put('/addcomment/:post_id',auth,(req,res)=>{
    post.findOne({_id: req.params.post_id})
        .then(post => {
            const newComment = {
                user: req.userId,
                text: req.body.text,
                name: req.body.name,
                avatar: req.body.avatar,    
            }
            post.comments.unshift(newComment);
            post.save().then(post => res.json(post)); 
        }).catch(err => res.status(404).json({msg:'No Post found'}));
})

//delet comment
router.put('/delete_comment/:post_id/:comment_id',auth,(req,res)=>{
    const userauth=user.findById({ $or: [{_id:req.userId},{role:1}]})
    if(!userauth){return res.status(404).json({msg:"User not authorised"})}
    post.findOne({_id: req.params.post_id})
        .then(post => {
            if(post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0){
                return res.status(404).json({msg:'Comment Not Found'});
            }
            var removeIndex = post.comments.map(comment => comment._id.toString()).indexOf(req.params.comment_id);
            post.comments.splice(removeIndex,1);
            post.save()
                .then(post=>res.status(201).send({msg:'comment deleted'}))
                .catch(err => res.status(404).json({msg:'No Post found'}));
        })
        .catch((err)=>{
            console.error(err.message)
            res.status(500).send({msg:'server error'})}) 
})

//update comment
router.put('/update_comment/:postId/:commentId',auth,(req,res)=>{
    post.findOne({_id: req.params.postId})
        .then(post => {
            if(post.comments.filter(comment => comment._id.toString() === req.params.commentId).length === 0){
                return res.status(404).json({msg:'Comment Not Found'});
            }
            var removeIndex = post.comments.map(comment => comment._id.toString()).indexOf(req.params.commentId);
            post.comments.splice(removeIndex,1,req.body);
            post.save()
                .then(post=>res.status(201).send({msg:'comment updated'}))
                .catch(err => res.status(404).json({msg:'No Post found'}));
        })
        .catch((err)=>{
            console.error(err.message)
            res.status(500).send({msg:'server error'})}) 
})


module.exports=router