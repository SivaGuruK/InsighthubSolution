const express = require("express");
const router = express.Router();
const Startup = require("../models/Startup");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

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
router.get("/:id", async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id);
    if (!startup) {
      return res.status(404).json({ message: "Startup not found" });
    }
    res.json(startup);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;
