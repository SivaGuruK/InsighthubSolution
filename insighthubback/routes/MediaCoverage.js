const express = require("express");
const router = express.Router();
const MediaCoverage = require("../models/MediaCoverage");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("mediaCoverageFile"), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file.filename;

  try {
    const mediaCoverage = new MediaCoverage({ title, description, image });
    await mediaCoverage.save();
    res.status(201).json(mediaCoverage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const mediaCoverages = await MediaCoverage.find();
    res.status(200).json(mediaCoverages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const mediaCoverage = await MediaCoverage.findById(req.params.id);
    if (!mediaCoverage) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(mediaCoverage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;
