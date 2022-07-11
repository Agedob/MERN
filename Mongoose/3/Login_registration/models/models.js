const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
   first_name: {
      type: String,
      required: true,
   },
   last_name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
   birthday: {
      type: Date,
      required: true,
   },
   date: {
      type: Date,
      required: true,
      default: Date.now,
   },
});

module.exports = mongoose.model("Users", loginSchema);
