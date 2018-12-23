exports.util = function(path){
  let fs = require("fs");
  let url =  require("url");
  let index = "index.html";

  return {
    get index(){
      return index;
    },
    set index(value){
      index = value;
    },
    pages:function(req,res){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write("<html><head><title>Testing</title></head><body>Let's hope this works</body></html>");
      res.end();
    },
  };
}();
