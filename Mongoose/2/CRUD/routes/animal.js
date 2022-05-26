const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Animal = require('../models/index');

// get all
router.get('/', async (req,res) =>{
   try {
    const allAnimals = await Animal.find();
    res.json(allAnimals)
   } catch (errorz) {
    res.status(500).json({ message: err.errorz});
   }
});

// GET '/mongooses/:id' Displays information about one mongoose.
router.get('/:id', (req,res) => {
    res.send(`Id = ${req.params.id}`)
});

// GET '/mongooses/new' Displays a form for making a new mongoose.
router.get('/new', (req,res) => {

});

// POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new'). 
router.post('/new', async (req,res) => {
    const animal = new Animal({
        name : req.body.name,
        age : req.body.age,
    });

    try{
        const newAnimal = await animal.save();
        res.status(201).json(newAnimal);
    } catch (err) {
        res.status(400).json( err.message );
    }
});

// GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
router.patch( 'edit/:id', (req,res) => {

});

// POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
router.post(':id', (req,res) => {

});

// POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
router.post('destroy/:id', (req,res) => {

});

module.exports  = router;