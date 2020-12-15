const express=require('express')
const app = express();
const mongoose=require('mongoose')
require("dotenv").config();
const port=process.env.PORT||5000;

// init middleware to parse body
app.use(express.json())

//  connect to database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    if (err) console.log(err);
    else console.log("database connected");
})


app.listen(port,()=>{
    console.log('The server is running, ' +' please, open your browser at http://localhost:%s',port)})
    