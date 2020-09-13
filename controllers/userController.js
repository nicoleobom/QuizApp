const db = require("../models");


module.exports = {
	findAll: (req, res) => {
		db.User
			.find(req.query)
			.limit(10)
			.sort({ 'scores.score': -1 })
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	findById: (req, res) => {
		db.User
			.findById(req.params.id)
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	create: (req, res) => {
		db.User
			.create(req.body)
			.then(data => res.redirect(307, "/api/user/login"))
			.catch(err => res.status(422).json(err));
	},

	updateScore: (req, res) => {
		db.User
			.updateOne({ _id: req.body.id }, { $push: { scores: req.body.scores } }, { upsert: true })
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err));

			
	},

	login: async (req, res) => {
		// db.User.findById(req.params.id);
		if (req.user) res.json(res.user);
		res.send(null);
	}
}					
