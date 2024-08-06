const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const Blog = require("../models/Blog");

const fields = [
  { name: "nirfFile", maxCount: 1 },
  { name: "incubationFile", maxCount: 1 },
  { name: "startupFile", maxCount: 1 },
  { name: "mediaCoverageFile", maxCount: 1 },
  { name: "expertOpinionFile", maxCount: 1 },
  { name: "rndAnalysisFile", maxCount: 1 },
];

router.post("/", upload.fields(fields), async (req, res) => {
  try {
    const files = req.files;
    const {
      nirfTitle,
      nirfDescription,
      incubationTitle,
      incubationDescription,
      startupTitle,
      startupDescription,
      mediaCoverageTitle,
      mediaCoverageDescription,
      expertOpinionTitle,
      expertOpinionDescription,
      rndAnalysisTitle,
      rndAnalysisDescription,
    } = req.body;

    // Log the titles and descriptions
    console.log("NIRF Title:", nirfTitle);
    console.log("NIRF Description:", nirfDescription);
    console.log("Incubation Title:", incubationTitle);
    console.log("Incubation Description:", incubationDescription);
    console.log("Startup Title:", startupTitle);
    console.log("Startup Description:", startupDescription);
    console.log("Media Coverage Title:", mediaCoverageTitle);
    console.log("Media Coverage Description:", mediaCoverageDescription);
    console.log("Expert Opinion Title:", expertOpinionTitle);
    console.log("Expert Opinion Description:", expertOpinionDescription);
    console.log("R&D Analysis Title:", rndAnalysisTitle);
    console.log("R&D Analysis Description:", rndAnalysisDescription);

    const blog = new Blog({
      nirf: {
        file: files.nirfFile ? files.nirfFile[0].filename : null,
        title: nirfTitle,
        description: nirfDescription,
      },
      incubation: {
        file: files.incubationFile ? files.incubationFile[0].filename : null,
        title: incubationTitle,
        description: incubationDescription,
      },
      startup: {
        file: files.startupFile ? files.startupFile[0].filename : null,
        title: startupTitle,
        description: startupDescription,
      },
      mediaCoverage: {
        file: files.mediaCoverageFile
          ? files.mediaCoverageFile[0].filename
          : null,
        title: mediaCoverageTitle,
        description: mediaCoverageDescription,
      },
      expertOpinion: {
        file: files.expertOpinionFile
          ? files.expertOpinionFile[0].filename
          : null,
        title: expertOpinionTitle,
        description: expertOpinionDescription,
      },
      rndAnalysis: {
        file: files.rndAnalysisFile ? files.rndAnalysisFile[0].filename : null,
        title: rndAnalysisTitle,
        description: rndAnalysisDescription,
      },
    });

    await blog.save();
    res.status(201).json({ message: "Files uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading files" });
  }
});

module.exports = router;
