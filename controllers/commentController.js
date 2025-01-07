const Comment = require("../models/Comment");

const addComment = async (req, res) => {
  try {
    const { comment } = req.body;
    const newComment = new Comment({
      pullRequestId: req.params.id,
      commenterId: req.user.id,
      comment,
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: "Error adding comment" });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ pullRequestId: req.params.id }).populate("commenterId");
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


module.exports ={
  addComment,
  getComments
}