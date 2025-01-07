const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  reviewId: { type: String, required: true, unique: true },
  pullRequestId: { type: mongoose.Schema.Types.ObjectId, ref: "PullRequest" },
  reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comments: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", ReviewSchema);
