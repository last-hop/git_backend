const mongoose = require("mongoose");

const PullRequestSchema = new mongoose.Schema({
  pullRequestId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  requesterId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  approvers: [
    {
      approverId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
      comments: { type: String },
    },
  ],
  status: { type: String, enum: ["Open", "Approved", "Rejected"], default: "Open" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PullRequest", PullRequestSchema);
