var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(path.join(__dirname,"build")));
app.use(bodyParser.json());


app.post('/signin', function (req, res) {
   var user_name=req.body.email;
   var password=req.body.password;
   if(user_name=='admin' && password=='admin'){
      res.send({
         result : 'success',
         name : "Max",
         email : "max@max.ru"
      });
   }
   else{
      res.send('failure');
   }
});

app.use("/*", express.static(path.join(__dirname,"build")));




app.listen(3001,function () {
   console.log("Started listening on port", 3001);
});