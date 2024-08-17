const express = require("express");
const router = express.Router();
const Nirf = require("../models/Nirf");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

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
router.get("/", async (req, res) => {
  try {
    const nirfs = await Nirf.find();
    res.status(200).json(nirfs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const nirf = await Nirf.findById(id);
    res.status(200).json(nirf);
  } catch (error) {
    res.status(404).json({ message: "Item not found" });
  }
});
module.exports = router;
