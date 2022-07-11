const { render } = require("ejs");
const express = require("express");
const router = express.Router();
const Users = require("../models/models");

// logged/id turn into async for id's data
router.get("/:id", (req, res) => {
   res.status(200).render("login", { DATA: "id's data" });
});

// // POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
// router.post("/new", async (req, res) => {
//    const animal = new Animal({
//       name: req.body.name,
//       age: req.body.age,
//    });
//    // console.log(req.body);
//    console.log(animal);

//    try {
//       const newAnimal = await animal.save();
//       // res.status(201).json(newAnimal);
//       res.redirect("/animal");
//    } catch (err) {
//       res.status(400).json({ message: err.message });
//    }
// });

module.exports = router;
