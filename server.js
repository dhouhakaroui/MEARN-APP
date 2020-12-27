const express=require('express')
const app = express();
require("dotenv").config();

// init middleware to parse body
app.use(express.json())

//connect to database
const connectDB=require('./config/connectDB')

connectDB()

app.use('/register',require('./routes/register'))
app.use('/login',require('./routes/login'))
app.use('/post',require('./routes/post'))
app.use('/users',require('./routes/users'))

const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log('The server is running, ' +' please, open your browser at http://localhost:%s',port)})
    