const Role = require("../models/Role");

// Get all roles
const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new role
const createRole = async (req, res) => {
  try {
    const { roleId, roleName } = req.body;

    const role = new Role({ roleId, roleName });
    const savedRole = await role.save();
    res.status(201).json(savedRole);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


module.exports ={
  getRoles,
  createRole
}