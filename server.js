const http = require('http')
const fs = require('fs')
const path = require("path")
 
 
const server = http.createServer((req,res)=>{
    let filepath = "";
 
    if(req.url === "/"){
        filepath = "index.html"
    }else if(req.url ==="/about"){
        filepath = "about.html"
    }else{
        filepath = "404.html"
    }
 
    filepath = path.join(__dirname, filepath);
 
    fs.readFile(filepath,(err,data)=>{
        if(err){
            res.writeHead(500,{'content-type':'text/plain'})
            res.end("error internal server ")
        }else{
             res.writeHead(200,{'content-type':'text/html'})
            res.end(data)
        }
    });
       
 
});
 
server.listen(3000,()=>{
    console.log("server started ")
})

