const Approval = require("../models/Approval");

const addApproval = async (req, res) => {
  try {
    const { status, comments } = req.body;
    const newApproval = new Approval({
      pullRequestId: req.params.id,
      approverId: req.user.id,
      status,
      comments,
    });
    await newApproval.save();
    res.status(201).json(newApproval);
  } catch (err) {
    res.status(400).json({ message: "Error adding approval" });
  }
};

const getApprovals = async (req, res) => {
  try {
    const approvals = await Approval.find({ pullRequestId: req.params.id }).populate("approverId");
    res.json(approvals);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports ={
  getApprovals,
  addApproval
}