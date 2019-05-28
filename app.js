var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");
var session = require('express-session');
var app = express();
var users = require("./users");


app.use(express.static(path.join(__dirname,"build")));
app.use(bodyParser.json());
app.use(session({secret: 'ssshhhhh'}));



app.post('/user',function(req,res){

    if (typeof req.session.username === 'undefined') {
        req.session.username = "";
        req.session.email = "";
        req.session.orders = [];
    }

   if (req.session.username!=='' && req.session.email!==''){
      res.send({
         username: req.session.username,
         email: req.session.email
      });
   }
   else {
      res.send('failure');
   }
});

app.post('/callback',function(req,res){
    if (req.body.username && req.body.email && req.body.text){

        users.map( (user, i) => {
            if (req.body.username === user.username && req.body.email === user.email ){
                users[i].feedbacks.push(req.body.text);
            }
        });


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

   users.map( (user, i) => {
      if (user.username == user_name && user.password == password){
          req.session.username = user.username;
          req.session.email = user.email;
      }
   });

   if (req.session.username !== ""){
       res.send({
           result : 'success',
           username:  req.session.username,
           email: req.session.email
       });
   }
   else{
       res.send('failure');
   }

});

app.post('/signout', function (req, res) {
    delete req.session.username;
    delete req.session.email;
    res.send({
        result : "success"
    })
});


app.post('/profile', function (req, res) {
    users.map( (user) => {
        if (req.body.username === user.username && req.body.email === user.email ){
            res.send({
                result : 'success',
                about : user.about,
                hobbies : user.hobbies,
                skills : user.skills,
                img : user.img,
                followers : user.followers,
                following : user.following,
                snippets : user.snippets,
                rating : user.rating,
                feedbacks : user.feedbacks
            });
        }
    });
});











app.use("/*", express.static(path.join(__dirname,"build")));




app.listen(3001,function () {
   console.log("Started listening on port", 3001);
});
