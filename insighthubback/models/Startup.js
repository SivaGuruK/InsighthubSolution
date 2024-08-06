const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Startup = mongoose.model("Startup", startupSchema);

module.exports = Startup;
