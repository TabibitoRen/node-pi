const http = require('http');
const url = require('url');
const util = require('./util.js');

var navi = new util.util;
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
console.log(navi.test);
/*
console.log(util.paths.pages);
console.log(util.paths.index);
const server = http.createServer(util.paths.pages);

server.listen(8080, () => {
  console.log(`Server running`);
});
*/
