// Incubation route
const express = require("express");
const router = express.Router();
const Incubation = require("../models/Incubation");
const upload = require("../middleware/upload");

router.post("/", upload.single("incubationFile"), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file.filename;

  try {
    const incubation = new Incubation({ title, description, image });
    await incubation.save();
    res.status(201).json(incubation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const incubations = await Incubation.find();
    res.status(200).json(incubations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;