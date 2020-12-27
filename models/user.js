const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  age:{
      type:Number
  },
  gender:{
    type: String
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  role: {
    type: Number,
    default: 0, //0 for user ,1 for admin
  },
  avatar :{
    type: String
  },
  date:{
    type: Date,
    default:Date.now
  }
});  
module.exports= mongoose.model('user',userSchema)