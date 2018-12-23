exports.navi = function(path){
  let fs = require("fs");
  let url =  require("url");
  this.paths =  function(folder){
    let public = fs.readdirSync(folder);
    let index = "index.html";
    return {
      pages:function(req,res){
        let reqUrl = url.parse(req.url,true); //favicon is always requested on top of the url
        console.log(public);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write("<html><head><title>Testing</title></head><body>Let's hope this works: the requested url is </body></html>");
        res.end();
      }
    };
  }();
};
