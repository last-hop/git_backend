const PullRequest = require("../models/PullRequest");

// Retrieve all pull requests
const getAllPullRequests = async (req, res) => {
  try {
    const pullRequests = await PullRequest.find().populate("requesterId approvers.approverId");
    res.json(pullRequests);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Retrieve a specific pull request
const getPullRequestById = async (req, res) => {
  try {
    const pullRequest = await PullRequest.findById(req.params.id).populate("requesterId approvers.approverId");
    if (!pullRequest) return res.status(404).json({ message: "Pull request not found" });
    res.json(pullRequest);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new pull request
const createPullRequest = async (req, res) => {
  try {
    const { title, description, requesterId, approvers } = req.body;
    const pullRequest = new PullRequest({
      title,
      description,
      requesterId,
      approvers,
    });
    await pullRequest.save();
    res.status(201).json(pullRequest);
  } catch (err) {
    res.status(400).json({ message: "Error creating pull request" });
  }
};

// Update an existing pull request
const updatePullRequest = async (req, res) => {
  try {
    const pullRequest = await PullRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pullRequest) return res.status(404).json({ message: "Pull request not found" });
    res.json(pullRequest);
  } catch (err) {
    res.status(400).json({ message: "Error updating pull request" });
  }
};

// Delete a pull request
const deletePullRequest = async (req, res) => {
  try {
    const pullRequest = await PullRequest.findByIdAndDelete(req.params.id);
    if (!pullRequest) return res.status(404).json({ message: "Pull request not found" });
    res.json({ message: "Pull request deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


module.exports ={
  getAllPullRequests,
  getPullRequestById,
  createPullRequest,
  updatePullRequest,
  deletePullRequest
}