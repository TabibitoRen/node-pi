const http = require('http');
const url = require('url');
const util = require('./util.js');

var navi = new util.navi;
/*
//Put page resolution here
var pages = function (req, res){
  //let html = require('./public/index.html'); I need this to be read as string
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("<html><head><title>Test</title></head><body>body test</body></html>");
  res.end();
}
/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});
*/
const server = http.createServer(navi.paths.pages);

server.listen(8080, () => {
  console.log(`Server running`);
});
*/
