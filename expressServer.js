const express = require('express');
const path = require("path");

const app = express();

// Users data
const users = [
    {id:1, name:"raghuveer"},
    {id:2, name:"sai"}
];

// Employees data
const employees = [
    {id:1, name:"Ramesh", position:"Manager"},
    {id:2, name:"Suresh", position:"Developer"},
    {id:3, name:"Mahesh", position:"Designer"}
];

// Students data
const students = [
    {id:1, name:"Arjun", course:"B.Tech"},
    {id:2, name:"Priya", course:"MBA"},
    {id:3, name:"Rahul", course:"B.Sc"}
];

// Sports data
const sports = [
    {id:1, name:"Cricket"},
    {id:2, name:"Football"},
    {id:3, name:"Badminton"}
];

// Products data
const products = [
    {id:1, name:"Laptop", price:50000},
    {id:2, name:"Mobile", price:20000},
    {id:3, name:"Headphones", price:2000}
];

// Books data
const books = [
    {id:1, title:"JavaScript Basics"},
    {id:2, title:"Node.js Guide"},
    {id:3, title:"React Development"}
];

// Home route
app.get("/",(req,res)=>{
   res.end("<h2>Sriram</h2>");
});

// API routes
app.get('/api/users',(req,res)=>{
    res.json(users);
});

app.get('/api/employees',(req,res)=>{
    res.json(employees);
});

app.get('/api/students',(req,res)=>{
    res.json(students);
});

app.get('/api/sports',(req,res)=>{
    res.json(sports);
});

app.get('/api/products',(req,res)=>{
    res.json(products);
});

app.get('/api/books',(req,res)=>{
    res.json(books);
});

// HTML page route
app.get('/indexpage',(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","index2.html"));
});

// Start server
app.listen(8000,()=>{
    console.log("Server started on port 8000");
});