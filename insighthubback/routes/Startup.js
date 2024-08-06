const express = require("express");
const router = express.Router();
const Startup = require("../models/Startup");
const upload = require("../middleware/upload");

router.post("/", upload.single("startupFile"), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file.filename;

  try {
    const startup = new Startup({ title, description, image });
    await startup.save();
    res.status(201).json(startup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const startups = await Startup.find();
    res.status(200).json(startups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
