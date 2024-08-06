const express = require("express");
const router = express.Router();
const MediaCoverage = require("../models/MediaCoverage");
const upload = require("../middleware/upload");

router.post("/", upload.single("mediaCoverageFile"), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file.filename;

  try {
    const mediaCoverage = new MediaCoverage({ title, description, image });
    await mediaCoverage.save();
    res.status(201).json(mediaCoverage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const mediaCoverages = await MediaCoverage.find();
    res.status(200).json(mediaCoverages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
