const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const roleRoutes = require("./routes/roleRoutes");

dotenv.config();


const mongoURI = "mongodb://localhost:27017";
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/pull-requests", require("./routes/pullRequestRoutes"));
app.use("/api/pull-requests", require("./routes/commentRoutes"));
app.use("/api/pull-requests", require("./routes/approvalRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
