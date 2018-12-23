exports.navi = function(path){
  let fs = require("fs");
  let url =  require("url");

  this.paths =  function(){
    let index = "index.html";
    return {
      get index(){
        return index;
      },
      set index(value){
        index = value;
      },
      pages:function(req,res){
        let reqUrl = url.parse(`http://${req.url}`);
        console.log(reqUrl[0]);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write("<html><head><title>Testing</title></head><body>Let's hope this works: the requested url is </body></html>");
        res.end();
      }
    };
  }();
};
