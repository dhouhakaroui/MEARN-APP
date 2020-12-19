const Users = require("../models/user");

const authAdmin = (req, res, next) => {
    Users.findOne({ _id: req.user.id })
            .then(user=>{
                if(!user){
                    return res.status(404).json({msg:'user not found'})
                }
                if (!user.role )
                return res.status(400).json({ msg: "Access to administration resources is denied" });
            next()
            })
            .catch((err)=>{
                console.error(err.message)
                res.status(500).send({msg:'server error'})
            })    
};

module.exports = authAdmin;