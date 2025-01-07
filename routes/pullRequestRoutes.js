const express = require("express");
const {
  getAllPullRequests,
  getPullRequestById,
  createPullRequest,
  updatePullRequest,
  deletePullRequest,
} = require("../controllers/pullRequestController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getAllPullRequests);
router.get("/:id", authMiddleware, getPullRequestById);
router.post("/", authMiddleware, createPullRequest);
router.put("/:id", authMiddleware, updatePullRequest);
router.delete("/:id", authMiddleware, deletePullRequest);

module.exports = router;
