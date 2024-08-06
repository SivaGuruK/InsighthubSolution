const mongoose = require("mongoose");

const incubationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Incubation = mongoose.model("Incubation", incubationSchema);

module.exports = Incubation;
