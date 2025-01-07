const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");

// Role Routes
router.get("/", roleController.getRoles);
router.post("/", roleController.createRole);

module.exports = router;
