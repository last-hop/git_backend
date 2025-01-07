const mongoose = require("mongoose");

const ApprovalSchema = new mongoose.Schema({
  approvalId: { type: String, required: true, unique: true },
  pullRequestId: { type: mongoose.Schema.Types.ObjectId, ref: "PullRequest" },
  approverId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Approval", ApprovalSchema);
