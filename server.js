const express=require('express')
const app = express();
const mongoose=require('mongoose');
const router = require('./routes/post');
require("dotenv").config();

// init middleware to parse body
app.use(express.json())

// url database local
// const url='mongodb://127.0.0.1:27017/myDB'

//  connect to database
const url=process.env.MONGO_URI
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    if (err) console.log(err);
    else console.log("database connected");
})

app.use('/register',require('./routes/register'))
app.use('/login',require('./routes/login'))
app.use('/post',require('./routes/post'))

const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log('The server is running, ' +' please, open your browser at http://localhost:%s',port)})
    