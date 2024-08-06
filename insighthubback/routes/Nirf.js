const express = require("express");
const router = express.Router();
const Nirf = require("../models/Nirf");
const upload = require("../middleware/upload");

// POST request to add a new NIRF entry
router.post("/", upload.single("nirfFile"), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file.filename;

  try {
    const nirf = new Nirf({ title, description, image });
    await nirf.save();
    res.status(201).json(nirf);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET request to retrieve all NIRF entries
router.get("/", async (req, res) => {
  try {
    const nirfs = await Nirf.find();
    res.status(200).json(nirfs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
