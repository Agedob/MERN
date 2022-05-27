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
router.get('/:id', getAnimal, (req,res) => {
    res.send(res.somethingelse)
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
    console.log(req.body);
    console.log(animal);

    try{
        const newAnimal = await animal.save();
        res.status(201).json(newAnimal);
    } catch (err) {
        res.status(400).json( { message : err.message });
    }
});

// GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
router.patch( '/edit/:id', getAnimal, async (req,res) => {

    if( req.body.name != null ){
        res.somethingelse.name = req.body.name;
    }
    if( req.body.age != null ){
        res.somethingelse.age = req.body.age;
    }
    console.log(res.somethingelse);
    try {
        const updatedAniaml = await res.somethingelse.save()
        res.status(418).json(updatedAniaml);
    } catch (err) {
        res.status(400).json({message:err.message})
    }
});

// POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
router.post(':id', getAnimal, (req,res) => {

});

// POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
router.delete('/destroy/:id', getAnimal, async (req,res) => {
    try {
        await res.somethingelse.remove()
        res.status(418).json({message: "Deleted animal"})
    } catch (err) {
        res.status(500).json({message:err.message})
    }
});

// "middle-ware" find by id 
async function getAnimal(req, res, next) {
    let animalbyid
    try{
        animalbyid = await Animal.findById(req.params.id);
        if(animalbyid == null) {
            return res.status(404).json({message: "Animal does not exsist"});
        }
    } catch (err) {
        return res.status(500).json({message:err.message});
    }
    console.log(animalbyid);

    // creating your own res.variable 
    res.somethingelse = animalbyid;
    next()
}

module.exports  = router;