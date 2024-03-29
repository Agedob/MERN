const express = require("express");
const app = express();
const env = require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
const PORT = process.env.PORT;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const bcrypt = require("bcrypt");
const User = require("./models/models");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const ROUTER = require("./routes/routes");
const { $where } = require("./models/models");
mongoose.connect(PRIVATE_KEY, { useNewUrlParser: true });

// setting up the cookie
app.set("trust proxy", 1);
app.use(
   session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
         mongoUrl: process.env.PRIVATE_KEY,
      }),
      cookie: { secure: true, maxAge: 12000 },
   })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.use(express.json());
app.set("views", __dirname + "/static/views");
app.set("view engine", "ejs");
app.use("/logged", ROUTER);

// get all user data from server || index page
app.get("/", async (req, res) => {
    try {
      const all = await User.find();
      res.status(201).render("index", { DATA: all });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

// signout destroy session data 
app.get("/signout/:id", async (req, res) => {
   try {
      console.log(req.sessionID);
      res.redirect('/')
   } catch (err) {
      return res.status(500).json({ message: err.message});
   }
})

// catch all
app.get("*", (req, res) => {
   res.redirect("/");
});
app.post("*", async (req, res) => {
   try {
      res.redirect("/");
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

app.listen(PORT || 5000, () => {
   if (PORT) {
      console.log(`Listening on ${PORT}`);
   } else {
      console.log(" Listening on 5000.");
   }
});
