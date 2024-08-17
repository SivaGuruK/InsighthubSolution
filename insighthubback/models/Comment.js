const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  itemId: { type: String, required: true },
  userId: { type: String, required: true },
  username: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
