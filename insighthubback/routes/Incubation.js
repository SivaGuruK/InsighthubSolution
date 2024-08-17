
const express = require("express");
const router = express.Router();
const Incubation = require("../models/Incubation");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

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
router.get("/:id", async (req, res) => {
  try {
    const incubation = await Incubation.findById(req.params.id);
    if (!incubation) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(incubation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;