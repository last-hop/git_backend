const express = require("express");
const { addComment, getComments } = require("../controllers/commentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:id/comments", authMiddleware, addComment);
router.get("/:id/comments", authMiddleware, getComments);

module.exports = router;
