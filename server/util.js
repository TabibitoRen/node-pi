exports.navi = function(path){
  let fs = require("fs");
  let url =  require("url");
  this.paths =  function(){
    let public = fs.readdirSync(__dirname+path);
    let publicData = {};
    for(var fileName in public ){
      publicData[public[fileName]] = fs.readFileSync(__dirname+path+"/"+public[fileName]);
    }
    let index = "index.html";
    return {
      pages:function(req,res){
        res.setHeader('Content-Type', 'text/html');
        let reqUrl = url.parse(req.url,true); //favicon is always requested on top of the url
        try{
          res.statusCode = 200;
          res.write(publicData[reqUrl.path.substring(1)]);
          res.end();
        }
        catch(err){
          res.statusCode = 404;
          res.write("404 Page Not Found");
          res.end();

        }
      }
    };
  }();
};
