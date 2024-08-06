const mongoose = require("mongoose");

const mediaCoverageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const MediaCoverage = mongoose.model("MediaCoverage", mediaCoverageSchema);

module.exports = MediaCoverage;
