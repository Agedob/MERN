const express = require("express");
const app = express();
const env = require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set('strictQuery', false);

mongoose.connect(PRIVATE_KEY, { useNewUrlParser: true });
app.use(express.static(__dirname + "/static"));
app.use(express.json());
app.set("views", __dirname + "/static/views");
app.set("view engine", "ejs");

app.get("*", (req, res) => {
   res.render("index");
});

app.listen(PORT || 5000, () => {
if (PORT) {
 console.log(`Listening on ${PORT}`);
} else { 
 console.log('listeing on 5000.'); 
}
});
