const http = require("http");

const server = http.createServer(function(req,res){
    res.write("<h1>this is our first serve</h1>"); 
    res.write("node is the combined server for both javascript and datatbase")

res.write(JSON.stringify({Name:"bindhu"}))
    res.end();
})

server.listen(3008)

