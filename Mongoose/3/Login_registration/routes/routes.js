const { render } = require("ejs");
const express = require("express");
const router = express.Router();
const User = require("../models/models");
const bcrypt = require("bcrypt");

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

// POST '/logged/login' Logging in exsisting user
router.post("/login", async (req, res) => {
   try {
      if (await checkUser(req, res)) {
         return res.redirect("/logged/" + res.userID);
      }
      return res.redirect("/");
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }
});

/////////////////////////////////////////////////////////////////////

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

// check user function
async function checkUser(req, res) {
   let testUser;
   try {
      testUser = await User.findOne({ email: req.body.email });
      // console.log(testUser);
      if (testUser) {
         const match = await bcrypt.compare(
            req.body.password,
            testUser.password
         );
         // console.log(match);
         if (!match) {
            return false;
         }
         res.userID = testUser.id;
         return true;
      }
   } catch (err) {
      console.log(err);
      return false;
   }
   // res.testUser = testUser;
}

// find user by email throw err
// test for pw || err
//

module.exports = router;
