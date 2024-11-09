const http = require("http");
const fs = require("fs");
const path = require("path");


const server = http.createServer((req,res) =>{
//    res.write("<h1>This is Node.js</h1>");
//    console.log(req.url);
if(req.url ==="/"){
    fs.readFile(path.join(__dirname, "views", "index.html"), "utf8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });    //application/json
        res.end(data);
      });
}

if(req.url ==="/about"){
    fs.readFile(path.join(__dirname, "views", "about.html"), "utf8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });    //application/json
        res.end(data);
      });
}

if (req.url === '/home') {
  res.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
  res.end('<h1> Home </h1>');
}


});

// .listen(8080, () => console.log("Server is Running"))

// const logger = require("./utils");
// console.log(logger());

// const { logger, myName} = require("./utils");      //de structring done
// console.log(myName);



const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server running on ${PORT}`));




// utf8 is an encoding standard used to represent text. It stands for "Unicode Transformation Format, 8-bit" and is one of the most widely used text encoding formats on the web.


// res.statusCode = 202;
  // res.statusMessage = "Hi";
  // res.setHeader("Content-Type", "text/plain");

  // shorthand for status (code, message & header)
  // res.writeHead(202, "Hi", { "Content-Type": "text/plain" });