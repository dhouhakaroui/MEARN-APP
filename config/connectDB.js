const mongoose=require('mongoose');
require("dotenv").config();

// url local database 
// const url='mongodb://127.0.0.1:27017/myDB'

//  connect to database
const url=process.env.MONGO_URI
const connectDB=()=>{
    mongoose.set('useCreateIndex', true)    
    mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true },(err) => {
        if (err) console.log(err);
        else console.log("database connected");
    })
}
module.exports =connectDB