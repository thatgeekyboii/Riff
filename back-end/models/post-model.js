const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    text: {
      type: String,
    },
    media: {
      type: String,
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    public_id: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
