exports.navi = function(path){
  let fs = require("fs");
  let url =  require("url");
  this.paths =  function(){
    let public = fs.readdirSync(__dirname+path);
    let publicData = {};
    for(var fileName in public ){
      publicData[fileName] = fs.readFileSync(__dirname+path"/"+fileName);
    }
    let index = "index.html";
    return {
      pages:function(req,res){
        let reqUrl = url.parse(req.url,true); //favicon is always requested on top of the url
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(publicData['index.html']);
        res.end();
      }
    };
  }();
};
