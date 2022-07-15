const { render } = require("ejs");
const express = require("express");
const router = express.Router();
const User = require("../models/models");
const bcrypt = require("bcrypt");

// '/logged/login' check for user pw and add to session if true
// bcrypt async

// async function checkUser(user_email, password) {
//    const user = User.findOne({ email: user_email });

//    const match = await bcrypt.compare(password, user.password);

//    if (match) {
//       console.log(user);
//    }
//    console.log("fail");
// // }

// function checkUser(user_email, password) {
//    const user = User.find({ email: user_email });
//    console.log(" ----> ", user.id);
//    if (bcrypt.compareSync(password, "13", user.password)) {
//       console.log(user.id);
//    } else {
//       console.log("failed");
//    }
// }

// bcrypt.genSalt(13, function (err, salt) {
//    bcrypt.hash(req.body.password, salt, function (err, hash) {
//       if (err) {
//          throw err;
//       }
//       // console.log(hash);
//    });
// });

// '/logged/id'  turn into async for id's data
router.get("/:id", getUser, (req, res) => {
   res.status(200).render("login", { DATA: res.userbyid });
});

// POST '/logged/' new user
router.post("/", async (req, res) => {
   try {
      const user = new User({
         first_name: req.body.first_name,
         last_name: req.body.last_name,
         email: req.body.email,
         password: bcrypt.hashSync(req.body.password, 10),
         birthday: req.body.birthday,
      });
      console.log(user);
      const newUser = await user.save();
      res.redirect("/logged/" + user.id);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
});

// get by id function
async function getUser(req, res, next) {
   let userbyid;
   try {
      userbyid = await User.findById(req.params.id);
      if (userbyid == null) {
         return res
            .status(404)
            .json({ message: "User could not be found. Does not exsist." });
      }
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }
   res.userbyid = userbyid;
   next();
}

module.exports = router;
