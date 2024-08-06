const express = require("express");
const Interaction = require("../models/Interactions");

const router = express.Router();

// Create or update interaction for a blog post
router.post("/", async (req, res) => {
  const { blogId, type } = req.body;

  try {
    const interaction = await Interaction.findOne({ blogId });

    if (interaction) {
      interaction[type]++;
      await interaction.save();
      res.status(200).json(interaction);
    } else {
      const newInteraction = new Interaction({
        blogId,
        likes: type === "likes" ? 1 : 0,
        comments: type === "comments" ? 1 : 0,
        shares: type === "shares" ? 1 : 0,
        views: type === "views" ? 1 : 0,
      });
      await newInteraction.save();
      res.status(201).json(newInteraction);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get interactions for a blog post
router.get("/:blogId", async (req, res) => {
  const { blogId } = req.params;

  try {
    const interaction = await Interaction.findOne({ blogId });
    if (interaction) {
      res.status(200).json(interaction);
    } else {
      res
        .status(404)
        .json({ message: "No interactions found for this blog post" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
