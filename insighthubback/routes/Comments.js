const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");
router.post("/:itemId", async (req, res) => {
  try {
    const { itemId } = req.params;
    const { userId, username, content } = req.body;
    const newComment = new Comment({ itemId, userId, username, content });
    await newComment.save();
    res.send({ message: "Comment added successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error adding comment" });
  }
});

router.get("/:itemId", async (req, res) => {
  try {
    const { itemId } = req.params;
    const comments = await Comment.find({ itemId }).sort({ createdAt: -1 });
    res.send(comments);
  } catch (error) {
    res.status(500).send({ message: "Error getting comments" });
  }
});

module.exports = router;
