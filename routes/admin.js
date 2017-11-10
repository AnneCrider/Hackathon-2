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
router.get('/admin', function(req, res, next) {
  connection.query('SELECT * FROM Personnes', function (error, results, fields) {
		if (error) throw error;
		console.log(results);
		res.render('admin-index',{hackaton:results});
	});

});

/*Ajout dans la BDD*/
router.get('/admin-create', function(req, res, next) {
	res.render('create-personne');
});

// POST /admin/create-product
router.post('/admin-create', function(req, res, next) {
	console.log(req.body)
// Ajouter un produit dans la table 'products'
		connection.query('insert into Personnes values(null, ?, ?, ?, ?, ?, ?);',
				[req.body.hack_name, req.body.hack_firstname, req.body.hack_birthday, req.body.hack_city, req.body.hack_code, req.body.hack_mail],
				function (error, results, fields) {
					if (error) throw error;
					res.redirect('/');
					//console.log(results);
		});
});

/*Supprimer*/
router.get('/admin-delete', function(req, res, next) {
	// Supprimer le produit en recupérant l'id dans la query
	//delete from products where id=
	connection.query('delete from Personnes where idPersonnes=?',[req.query.id],function (error, results, fields) {
		if (error) throw error;
		res.redirect('/');
		//console.log(results);
	});
});

/*modifier*/
router.get('/admin-modify', function(req, res, next) {
	connection.query('SELECT * FROM Personnes WHERE idPersonnes=?',[req.query.id], function (error, results, fields) {
		if (error) throw error;
		console.log(results);
		res.render('modify-personne', {hackaton:results[0]});
		//console.log(results);
	});
});

router.post('/admin-modify', function(req, res){

	connection.query('UPDATE Personnes SET name = ?, firstname = ?, birthday = ?, city = ?, code = ?, email = ? WHERE idPersonnes = ?',
  [req.body.hack_name, req.body.hack_firstname, req.body.hack_birthday, req.file.body.hack_city, req.body.hack_code, req.body.hack_mail],
	function(error){
		if (error) {
			console.log(error);
		}
	});
	res.redirect('/admin');
});

module.exports = router;
