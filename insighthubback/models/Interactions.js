const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  itemId: { type: String, required: true },
  userId: { type: String, required: true },
  username: { type: String, required: true },
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
