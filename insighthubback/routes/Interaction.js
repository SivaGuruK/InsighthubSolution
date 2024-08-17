const express = require("express");
const router = express.Router();
const Like = require("../models/Interactions");

router.post("/:itemId", async (req, res) => {
  try {
    const { itemId } = req.params;
    const { userId, username } = req.body;
    const existingLike = await Like.findOne({ itemId, userId });
    if (existingLike) {
      res.status(400).send({ message: "You already liked this item" });
    } else {
      const newLike = new Like({ itemId, userId, username });
      await newLike.save();
      res.send({ message: "Like added successfully" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error adding like" });
  }
});

router.delete("/:itemId", async (req, res) => {
  try {
    const { itemId } = req.params;
    const { userId } = req.body;
    const existingLike = await Like.findOneAndDelete({ itemId, userId });
    if (existingLike) {
      res.send({ message: "Like removed successfully" });
    } else {
      res.status(400).send({ message: "Like not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error removing like" });
  }
});

router.get("/:itemId", async (req, res) => {
  try {
    const { itemId } = req.params;
    const likes = await Like.find({ itemId });
    res.send(likes);
  } catch (error) {
    res.status(500).send({ message: "Error getting likes" });
  }
});

module.exports = router;
