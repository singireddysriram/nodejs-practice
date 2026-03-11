const http = require('http');
const path = require('path');
const fs = require('fs')

const server = http.createServer((req, res)=>{
    let filepath="";
    if(req.url === "/"){
        filepath = "index.html"
    }else if(req.url === "/about"){
        filepath = "about.html"
    }else{
        res.end("error page not found")
    }

    filepath = path.join(__dirname, filepath);

    fs.readFile(filepath, (err, data)=>{
        if(err){
            res.end("error", err);
        }else{
            res.end(data)
        }
    })
})

server.listen(5000,()=>{
    console.log("server started");
})