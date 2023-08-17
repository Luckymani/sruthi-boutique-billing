const express = require("express");
const router = express.Router();
const userdata = require("../schema/userschema.js");
const jwt = require("jwt-token");

router.post("/", async (req, res) => {
	try {
		const { username, password } = req.body;
		console.log(username, password);
		const userInfo = await userdata.findOne({ username, password });
		console.log(userInfo);
		if (userInfo) {
			res.status(200).send("user deatils matched");
		} else {
			res.status(401).send("un autherised user");
		}
	} catch (err) {
		res.status(500).send("internal server error");
	}
});

module.exports = router;
