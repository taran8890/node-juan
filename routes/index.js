const express = require('express');
const router = express.Router();

//home route
router.get('/', (req, res) => {
		const name = req.cookies.username;
		if (name) {
			//render the pug template, no file extension needed.
			res.render('index', { name });
		} else {
			res.redirect('/hello');
		}
			});

//hello route rendered
router.get('/hello', (req, res) => {
	const name = req.cookies.username;
	if (name) {
	  	res.redirect('/');
	} else {
	res.render('hello');
	}
});

router.post('/hello', (req, res) => {
	res.cookie('username', req.body.username);
	res.redirect('/');
});

router.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello');
});

module.exports = router;


