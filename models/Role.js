const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  roleId: { type: String, required: true, unique: true },
  roleName: { type: String, required: true },
});

module.exports = mongoose.model("Role", RoleSchema);
