const mongoose = require("mongoose");

const expertOpinionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const ExpertOpinion = mongoose.model("ExpertOpinion", expertOpinionSchema);

module.exports = ExpertOpinion;
