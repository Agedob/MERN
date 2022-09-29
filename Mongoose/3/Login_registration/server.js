const express = require("express");
const app = express();
const env = require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const bcrypt = require("bcrypt");
const User = require("./models/models");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const ROUTER = require("./routes/routes");
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
      cookie: { secure: true, maxAge: 120000 },
   })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.use(express.json());
app.set("views", __dirname + "/static/views");
app.set("view engine", "ejs");
app.use("/logged", ROUTER);

// catch all for index page also get all from server
app.get("*", async (req, res) => {
   try {
      const all = await User.find();
      console.log(req.session);
      res.status(201).render("index", { DATA: all });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

app.listen(PORT, () => {
   console.log(`Listening on ${PORT}`);
});
