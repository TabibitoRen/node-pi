const http = require('http');
const url = require('url');
const util = require('./util.js');

var navi = new util.navi("/public");
const server = http.createServer(navi.paths.pages);

server.listen(8080, () => {
  console.log(`Server running`);
});
