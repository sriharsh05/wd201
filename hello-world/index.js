const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=> {
  const server = fs.createReadStream("sample.txt");
  Stream.pipe();
  // fs.readFile("sample.txt",(err,data) =>{
  //        res.end(data);
  // })
});
server.listen(3000);