const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  pullRequestId: { type: mongoose.Schema.Types.ObjectId, ref: "PullRequest", required: true },
  commenterId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", CommentSchema);
