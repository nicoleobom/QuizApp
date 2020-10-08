const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const authenticate = require("../../config/authenticate");
const passport = require("passport");
const User = require('../../models/user');

router.post("/create", userController.create);

router.post("/login", passport.authenticate("local"), userController.login);

router.get("/authenticate", authenticate);

router.use(authenticate);

router.get("/", userController.findAll);

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/");
});

router.get("/data", (req, res) => {
	res.json(req.session.passport.user);
});

router.get("/:id", userController.findAll);

router.get('/:id', userController.findById)

router.route('/:id').put(function(req, res) {
	User.findById(req.params.id, function(err, user) {
		if (!user.scores) res.status(404).send('data not found');
		else

			user.scores = req.body.scores;

			user.save().then(user => {
				res.json('User updated');
			}).catch(err => {
				res.status(400).send('Update failed.');
			});
	});
});

module.exports = router;