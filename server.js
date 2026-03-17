require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const Student = require('./models/studentModel')

const app = express()

app.use(express.json())

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
 console.log("MongoDB connected")
})
.catch(err=>{
 console.log(err)
})


// Home
app.get("/",(req,res)=>{
 res.send("Student CRUD API")
})


// CREATE
app.post("/student/api", async(req,res)=>{
 try{

  const student = await Student.create(req.body)

  res.status(201).json({
   message:"Student created",
   data:student
  })

 }catch(err){
  res.status(500).json({error:err.message})
 }
})


// READ ALL
app.get("/students", async(req,res)=>{
 try{

  const students = await Student.find()

  res.json({
   message:"All students",
   data:students
  })

 }catch(err){
  res.status(500).json({error:err.message})
 }
})


//read sort by id
app.get("/students/api/:id",async(req,res)=>{
try{

    const student = await Student.findById(req.params.id);

    res.json({
        message:"Single student",
        data:student
    })

}catch(err){
res.status(500).json({error:err.message})
}
})

app.delete("/student/api/:id", async (req, res) => {
 try {

  const student = await Student.findByIdAndDelete(req.params.id);

  res.status(200).json({
   message: "Student deleted",
   data: student
  });

 } catch (err) {
  res.status(500).json({ error: err.message });
 }
});

//update the data
app.put("/students/api/:id",async(req,res)=>{
try{
const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
);

res.json({
    message:"updated done",
    data:student
})

}catch(err){
res.status(500).json({error:err.message})
}
})


app.listen(4000,()=>{
 console.log("Server running on port 4000")
})