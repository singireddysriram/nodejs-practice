const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://ssriram8790:Sriram1234@cluster0.d3hujck.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log('mongo db connected...')
})

.catch((err)=>{
    console.log(err)
})
app.get('/',(req,res)=>{
    res.send("hi guys....")
})

 app.listen(4000,()=>{
    console.log("server is running...")
 })