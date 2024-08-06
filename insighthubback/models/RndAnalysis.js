const mongoose = require("mongoose");

const rndAnalysisSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const RndAnalysis = mongoose.model("RndAnalysis", rndAnalysisSchema);

module.exports = RndAnalysis;
