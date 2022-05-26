const { render } = require('ejs');
const express = require('express');
const router = express.Router()

// get all
router.get('/', (req,res) =>{
    res.render('index');
});

// GET '/mongooses/:id' Displays information about one mongoose.
router.get('/:id', (req,res) => {

});

// GET '/mongooses/new' Displays a form for making a new mongoose.
router.get('/new', (req,res) => {

});

// POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new'). 
router.post('/new', (req,res) => {

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