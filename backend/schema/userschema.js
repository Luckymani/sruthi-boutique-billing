const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	username: String,
	password: String,
});

const userdata = mongoose.model("userdata", schema);

module.exports = userdata;
