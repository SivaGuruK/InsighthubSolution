const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const nirfRoutes = require("./routes/Nirf");
const incubationRoutes = require("./routes/Incubation");
const startupRoutes = require("./routes/Startup");
const mediaCoverageRoutes = require("./routes/MediaCoverage");
const expertOpinionRoutes = require("./routes/ExpertOpinion");
const rndAnalysisRoutes = require("./routes/rndAnalysis");
const interactionRoutes = require("./routes/interaction");

// Database connection
connection();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/nirf", nirfRoutes);
app.use("/api/incubation", incubationRoutes);
app.use("/api/startup", startupRoutes);
app.use("/api/media-coverage", mediaCoverageRoutes);
app.use("/api/expert-opinion", expertOpinionRoutes);
app.use("/api/rnd-analysis", rndAnalysisRoutes);
app.use("/api/interactions", interactionRoutes);
app.use("/api/upload", uploadRoutes);

// Serve frontend static files from insighthubfront directory
app.use(express.static(path.join(__dirname, "../insighthubfront")));

// Catch all other routes and return the index file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../insighthubfront", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
