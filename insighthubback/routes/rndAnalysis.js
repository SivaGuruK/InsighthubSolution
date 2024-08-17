const express = require("express");
const router = express.Router();
const RndAnalysis = require("../models/RndAnalysis"); // Keep this line
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("rndAnalysisFile"), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file.filename;

  try {
    const rndAnalysis = new RndAnalysis({ title, description, image });
    await rndAnalysis.save();
    res.status(201).json(rndAnalysis);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const rndAnalyses = await RndAnalysis.find();
    res.status(200).json(rndAnalyses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const rndAnalysis = await RndAnalysis.findById(req.params.id);
    if (!rndAnalysis) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(rndAnalysis);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
