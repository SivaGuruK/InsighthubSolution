const express = require("express");
const router = express.Router();
const RndAnalysis = require("../models/RndAnalysis");
const upload = require("../middleware/upload");

router.post("/", upload.single("rndAnalysisFile"), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file.filename;

  try {
    const rndAnalysis = new RndAnalysis({ title, description, image });
    await rndAnalysis.save();
    res.status(201).json(rndAnalysis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const rndAnalyses = await RndAnalysis.find();
    res.status(200).json(rndAnalyses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
