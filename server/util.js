exports.navi = function(path){
  let fs = require("fs");
  let url =  require("url");

  function getHeaderFromPathname(pathname){
    let header = pathname.split('.')[1];
    switch(header){
      case "css":
        header = "text/css";
        break;
      default:
        header = "text/html";
        break;
    }
    return header;
  }

  this.paths =  function(){
    return {
      pages:function(req,res){
        let reqUrl = url.parse(req.url,true); //favicon is always requested on top of the url
        //reqUrl.query has key value pairs of the post/get
        try{
          data = (reqUrl.pathname != "/") ? fs.readFileSync(__dirname+path+reqUrl.pathname) :  fs.readFileSync(__dirname+path+"/view/index.html");
          res.setHeader('Content-Type',getHeaderFromPathname(reqUrl.pathname));
          res.statusCode = 200;
          res.write(data);
          res.end();
        }
        catch(err){
          console.log(__dirname+path+"/view/index.html");
          res.statusCode = 404;
          res.write("404 Page Not Found");
          res.end();

        }
      }
    };
  }();

  function isEmpty(value = true){
    if(typeof(value) != "object" || value === null){
      return (value)?false:true;
    }else{
      return (Object.keys(value).length)?false:true;
    }
  }


};
