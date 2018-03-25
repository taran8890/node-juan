// require the express module
const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require ('cookie-parser')
// express application
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/static', express.static('public'));

// use pug
app.set('view engine', 'pug');





const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');




app.use(mainRoutes);
app.use('/cards', cardRoutes);









app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});
// Listening to server		
app.listen(3006, () => {
	// Message to show on terminal
	console.log('The application is running on localhost:3006');
});
