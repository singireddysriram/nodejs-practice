const express = require('express')
const mongoose = require('mongoose')
const Student = require('./models/studentModel')
const Teacher = require('./models/teacherModel')

const app = express()

mongoose.connect("mongodb+srv://ssriram8790:Sriram1234@cluster0.d3hujck.mongodb.net/?appName=Cluster0")
.then(()=>{
 console.log("MongoDB connected")
})
.catch(err=>{
 console.log(err)
})

//
app.use(express.json())


//home 
app.get('/',(req,res)=>{
 res.send("hi guys....")
})


//newbee
app.post("/student/api",async(req,res)=>{
try{

    const student = await Student.create(req.body);
     
    res.status(201).json({
        message: "student created is done",
        data: student
    })

}catch(err){
res.status(500).json({
    err: err.message
})
}
})

// teacher API
app.post("/teacher/api", async (req, res) => {
try {

    const teacher = await Teacher.create(req.body);

    res.status(201).json({
        message: "teacher created successfully",
        data: teacher
    });

} catch (err) {

    res.status(500).json({
        err: err.message
    });

}
});   


app.get("/student", async(req, res)=>{
    const student = await Student.find();
    res.json(student)
})

app.get("/teacher", async (req, res) => {
    const teacher = await Teacher.find();
    res.json(teacher);
});

app.listen(4000,()=>{
 console.log("server running...")
})