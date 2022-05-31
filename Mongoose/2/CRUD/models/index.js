const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   age: {
      type: Number,
      required: true,
      min: 0,
      max: 15,
   },
   date: {
      type: Date,
      required: true,
      default: Date.now,
   },
});

module.exports = mongoose.model("Animal", animalSchema);
