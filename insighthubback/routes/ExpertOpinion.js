const express = require("express");
const router = express.Router();
const ExpertOpinion = require("../models/ExpertOpinion");
const upload = require("../middleware/upload");

router.post("/", upload.single("expertOpinionFile"), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file.filename;

  try {
    const expertOpinion = new ExpertOpinion({ title, description, image });
    await expertOpinion.save();
    res.status(201).json(expertOpinion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const expertOpinions = await ExpertOpinion.find();
    res.status(200).json(expertOpinions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
