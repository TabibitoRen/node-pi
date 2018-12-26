exports.navi = function(path){
  let fs = require("fs");
  let url =  require("url");

  function isEmpty(value = true){
    if(typeof(value) != "object" || value === null){
      return (value)?false:true;
    }else{
      return (Object.keys(value).length)?false:true;
    }
  }

  this.paths =  function(){
    /*Maybe caching everything might be overkill
    let public = fs.readdirSync(__dirname+path);
    let publicData = {};
    for(var fileName in public ){
      publicData["/"+public[fileName]] = fs.readFileSync(__dirname+path+"/"+public[fileName]);
    }
    publicData["/"] = fs.readFileSync(__dirname+path+"/index.html");*/
    return {
      pages:function(req,res){
        res.setHeader('Content-Type', 'text/html');
        let reqUrl = url.parse(req.url,true); //favicon is always requested on top of the url
        //reqUrl.query has key value pairs of the post/get
        try{
          data = (reqUrl.pathname != "/") ? fs.readFileSync(__dirname+path+reqUrl.pathname) :  fs.readFileSync(__dirname+path+"/index.html");
          res.statusCode = 200;
          res.write(data);
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
