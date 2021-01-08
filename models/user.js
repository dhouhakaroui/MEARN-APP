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
  },
  age:{
    type:Number
  },
  website:{
    type: String
  },
  twitter:{
    type: String
  },
  facebook:{
    type: String
  },
  instagram :{
    type: String
  },
  linkedin:{
    type: String
  },
  github:{
    type:String
  },
  phone:{
    type:Number
  },
  status:{
    type:String
  },
  address:{
    type:String
  },
  company:{
    type:String
  },
  bio:{
    type:String
  }
});  
module.exports= mongoose.model('user',userSchema)