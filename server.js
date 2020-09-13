const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("./config/passport");
const session = require('express-session');
const db = require('./config/key').mongoURI;

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},()=> console.log("Connected to Atlas Database"));

app.use(session({ secret: "study", resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	console.log("req.session", req.session);
	return next();
});

app.use(require('./routes'));

// app.use(express.static("client/build"));

app.listen(PORT, function() {
	console.log(`Server is listening on http://localhost:${PORT}`);
});