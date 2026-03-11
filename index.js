const http = require('http');
const server = http.createServer((req, res)=>{

    if(req.url === "/"){
        res.end("Home page..content")
    }
    else if(req.url === "/about"){
        res.end("about page....")
    }else{
        res.statusCode = 404;
        res.end("error page not found")
    }
})

server.listen(4000, ()=>{
    console.log("server started");
})