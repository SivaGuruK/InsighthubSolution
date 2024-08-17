const express = require("express");
const router = express.Router();
const ExpertOpinion = require("../models/ExpertOpinion");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("expertOpinionFile"), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file.filename;

  try {
    const expertOpinion = new ExpertOpinion({ title, description, image });
    await expertOpinion.save();
    res.status(201).json(expertOpinion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const ExpertOpinions = await ExpertOpinion.find();
    res.status(200).json(ExpertOpinions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const expertOpinion = await ExpertOpinion.findById(req.params.id);
    if (!expertOpinion) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(expertOpinion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;
