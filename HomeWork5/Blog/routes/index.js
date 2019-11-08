var express = require('express');
var router = express.Router();
var data = require("../data.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/list',function(req,res,next){
  var username = data.users[0].username;
  var pwd = data.users[0].password;
  if(req.body.username == username && req.body.pwd == pwd){
    res.render('list', { chapter: data.chapterList});
  }
  else{
    res.end("password or username is wrong!!! try again!!!");
  }
})

module.exports = router;
