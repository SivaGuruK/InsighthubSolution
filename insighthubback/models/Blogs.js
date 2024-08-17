const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  nirf: {
    file: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  incubation: {
    file: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  startup: {
    file: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  mediaCoverage: {
    file: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  expertOpinion: {
    file: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  rndAnalysis: {
    file: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;