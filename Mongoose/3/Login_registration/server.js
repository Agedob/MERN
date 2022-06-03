const express = require("express");
const app = express();
const env = require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const bcrypt = require("bcrypt");

var backend = [];
// mongoose.connect(PRIVATE_KEY, { useNewUrlParser: true });
app.use(express.static(__dirname + "/static"));
app.use(express.json());
app.set("views", __dirname + "/static/views");
app.set("view engine", "ejs");

const ROUTER = require("./routes/routes");

app.use("/login", ROUTER);

app.get("*", (req, res) => {
   res.render("index", { DATA: "hello world" });
});

app.listen(PORT, () => {
   console.log(`Listening on ${PORT}`);
});
