const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection(config);

connection.connect();

router.get('/' ,function(req, res, next){
   res.render('index');
 });

/*formulaire*/
router.get('/formulaire', function(req,res,next){
  res.render('formulaire');
});

router.post('/create-personne', function(req, res, next){
  console.log(req.body);
  connection.query('insert into Personnes values(null, ?, ?, ?, ?, ?, ?, ?);',
  [req.body.hack_name, req.body.hack_firstname, req.body.hack_birthday, req.body.hack_city, req.body.hack_code, req.body.hack_mail, req.body.hack_pass],
  function(error){
		if (error) {
			console.log(error);
		}
	});
	res.redirect('/login');
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
  connection.query('SELECT * FROM Personnes WHERE email = ? AND password = ? ;',[name, pass], function (error, results, fields) {
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
