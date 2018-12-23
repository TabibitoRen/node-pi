exports.navi = function(path){
  let fs = require("fs");
  let url =  require("url");
//  let public = fs.readdirSync();
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
        let reqUrl = url.parse(`http://${req.url}`,true); //favicon is always requested on top of the url
        console.log(reqUrl);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write("<html><head><title>Testing</title></head><body>Let's hope this works: the requested url is </body></html>");
        res.end();
      }
    };
  }();
};
