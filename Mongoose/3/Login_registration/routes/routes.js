const { render } = require("ejs");
const express = require("express");
const router = express.Router();
const User = require("../models/models");

// '/logged/id'  turn into async for id's data
router.get("/:id", getUser, (req, res) => {
   res.status(200).render("login", { DATA: res.userbyid });
});

// POST '/logged/' new user
router.post("/", async (req, res) => {
   const user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      // placeholder until bycript
      birthday: req.body.birthday,
   });

   console.log(user);

   try {
      const newAnimal = await user.save();
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

// bcrypt async
// async function checkUser(username, password) {
//    //... fetch user from a db etc.

//    const match = await bcrypt.compare(password, user.passwordHash);

//    if(match) {
//        //login
//    }

//    //...
// }
