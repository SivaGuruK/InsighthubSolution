const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const nirfRoutes = require("./routes/Nirf");
const incubationRoutes = require("./routes/Incubation");
const startupRoutes = require("./routes/Startup");
const mediaCoverageRoutes = require("./routes/MediaCoverage");
const expertOpinionRoutes = require("./routes/ExpertOpinion");
const rndAnalysisRoutes = require("./routes/rndAnalysis");
const interactionRoutes = require("./routes/Interaction");
const commentRoutes = require("./routes/Comments"); 
const uploadRoutes = require("./routes/upload");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error(err));
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/nirf", nirfRoutes);
app.use("/api/incubation", incubationRoutes);
app.use("/api/startup", startupRoutes);
app.use("/api/media-coverage", mediaCoverageRoutes);
app.use("/api/expert-opinion", expertOpinionRoutes);
app.use("/api/rnd-analysis", rndAnalysisRoutes);
app.use("/api/interactions", interactionRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/upload", uploadRoutes);
app.use(express.static(path.join(__dirname, "../insighthubfront")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../insighthubfront", "index.html"));
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
