const http = require('http');
const url = require('url');
const util = require('./util.js');

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
console.log(util.path.pages);
console.log(util.path.index);
const server = http.createServer(util.path.pages);

server.listen(8080, () => {
  console.log(`Server running`);
});
