const { render } = require("ejs");
const express = require("express");
const router = express.Router();
const User = require("../models/models");

// '/logged/id'  turn into async for id's data
router.get("/:id", (req, res) => {
   res.status(200).render("login", { DATA: "id's data" });
});

// POST '/logged/new'
router.post("/new", async (req, res) => {
   const user = new User({
      first_name: req.body.fast_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      // yes I know this is a no-no
      birthday: req.body.birthday,
   });
   console.log(req.body);
   console.log(user);

   try {
      const newAnimal = await user.save();
      // res.status(201).json(newAnimal);
      res.redirect("/logged/" + user.id);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
});

module.exports = router;
