const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose
	.connect(process.env.MONGODB_URL)
	.then((res) => {
		console.log("connected to database");
	})
	.catch((err) => {
		console.log(err.message);
	});

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use("/login", require("./routes/Login.js"));

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));
