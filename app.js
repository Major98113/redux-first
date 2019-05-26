var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");
var session = require('express-session');

var app = express();
app.use(express.static(path.join(__dirname,"build")));
app.use(bodyParser.json());
app.use(session({secret: 'ssshhhhh'}));



app.post('/user',function(req,res){
    console.log(req.session.username, req.session.email);

    if (typeof req.session.username === 'undefined') {
        req.session.username = "";
        req.session.email = "";
        req.session.orders = [];
    }

   if (req.session.username!=='' && req.session.email!==''){
      res.send({
         name: req.session.username,
         email: req.session.email
      });
   }
   else {
      res.send('failure');
   }
});

app.post('/callback',function(req,res){
    if (req.body.name && req.body.email && req.body.text){
        req.session.username = req.body.name;
        req.session.email = req.body.email;
        req.session.orders.push(req.body.text);
        res.send('success');
    }
    else {
        res.send('failure');
    }
});




app.post('/signin', function (req, res) {

    if (typeof req.session.username === 'undefined') {
        req.session.username = "";
        req.session.email = "";
        req.session.orders = [];
    }
   var user_name=req.body.email;
   var password=req.body.password;
   if(user_name=='admin' && password=='admin'){
       req.session.username = "Max";
       req.session.email = "max@max.ru";
       res.send({
         result : 'success',
         name:  req.session.username,
         email: req.session.email
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