const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const multer  = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'tmp/' });
const config = require('../config.js');

const connection = mysql.createConnection(config);

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM Personnes;', function (error, results, fields) {
		if (error) throw error;
		console.log(results);
		res.render('index',{hackaton:results});
	});
  
});


/*Ajout dans la BDD*/
router.get('/create', function(req, res, next) {
	res.render('index');
});

// POST /admin/create-product
router.post('/create-personne', function(req, res, next) {
	console.log(req.body)
// Ajouter un produit dans la table 'products'
		connection.query('insert into Personnes values(null, ?, ?, ?, ?, ?, ?);',
				[req.body.hack_name, req.body.hack_firstname, req.body.hack_birthday, req.file.body.hack_city, req.body.hack_code, req.body.hack_mail],
				function (error, results, fields) {
					if (error) throw error;
					res.redirect('/');
					//console.log(results);
		});
});
module.exports = router;
