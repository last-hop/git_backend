const express = require("express");
const { addApproval, getApprovals } = require("../controllers/approvalController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:id/approvals", authMiddleware, addApproval);
router.get("/:id/approvals", authMiddleware, getApprovals);

module.exports = router;
