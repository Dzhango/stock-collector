var createError = require('http-errors');
var express = require('express');
const mongoose = require("mongoose");
var indexRouter = require('./routes/index');
var signupRouter = require('./routes/signUp');
var loginRouter = require('./routes/login');
var postRouter = require("./routes/posts")
const dotenv = require("dotenv");


dotenv.config();
var app = express();

//DB setup
const uri = process.env.DB_CONNECT;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
	console.log("connected to DB");
});

//Middleware
app.use(express.json());
//Routes Middleware
app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/posts', postRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
