const http = require('http');
const port = 8080;


/*Put page resolution here
var pages = function (req, res){
  let html = require('./public/index.html');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(html);
  res.end();
}
*/
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
