const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection(config);

connection.connect();

router.get('/' ,function(req, res, next){
   res.render('index');
 });

/*login*/
router.get('/login' ,function(req, res, next){
  res.render('login')
});


// /login
router.post('/login', function(req, res, next) {
  console.log(req.body);
  let name = req.body.login;
  let pass = req.body.password;
  console.log(name, pass);
  connection.query('SELECT * FROM Personnes WHERE email = ? AND password = ? ;',function (error, results, fields) {
    if (error) throw error;
    if (results.length === 0) {
      res.redirect('/');
    } else {
      req.session.connected = true;
      req.session.cookie.maxAge = 3600000; // 1 heure
      console.log(req.session);
      res.redirect('/admin');
    }
  });
});

// /logout
router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});
module.exports = router;
