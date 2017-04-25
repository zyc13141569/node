var express = require('express');
var router = express.Router();

var dbconn = require('./dbconn');
var connection = dbconn.dbconn();

/* GET home page. */
router.get('', function (req, res) {
  res.render('index.jade', {title: '主页'}) //call index.jade to create page
});
router.get('/index', function (req, res) {
  res.render('index.jade', {title: '主页'}) //call index.jade to create page
});

router.get('/information', function(req, res){
  res.render('information.jade', { title: '信息页面' });// call information.jade to create page
});

router.get('/schoolinfo', function(req, res){
  connection.query('select * from university', function(err, rows, fields){//connect to database
    if(!err){
      res.render('schoolinfo.jade', { title: '学校列表', database: rows}); //call school.jade set title and set database
    }
    else{
      console.log('error3 '+err);
    }
  })
});

router.get('/school/:id', function(req, res){
  var id = req.params.id;
  connection.query('select * from university where name_init = \'' + id + '\'', function(err, rows, field){
    if(!err){
      res.render('school', {title: '学校信息', database: rows});
    } else{
      console.log('error1');
    }
  });
});

router.get('/application', function(req, res){
  connection.query('select * from university', function(err, rows, fields){//connect to database
    if(!err){
      res.render('application.jade', { title: '学校列表', database: rows}); //call school.jade set title and set database
    }
    else{
      console.log('error2');
    }
  })
});

router.get('/question', function(req, res){
  res.render('question.jade', { title: '学校' });
});

router.get('/aaa', function(req, res){
  connection.connect();
  connection.query('select * from university where Name_init = York', function(err, rows, fields){
    if(!err){
      console.log('sol: ', rows);
      res.end(JSON.stringify(rows));
    }
    else{
      console.log('error');
    }
  });
});

module.exports = router;