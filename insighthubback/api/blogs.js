import express from "express";
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    const filename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

const fields = [
  { name: "nirf", maxCount: 1 },
  { name: "incubation", maxCount: 1 },
  { name: "startup", maxCount: 1 },
  { name: "mediaCoverage", maxCount: 1 },
  { name: "expertOpinion", maxCount: 1 },
  { name: "rndAnalysis", maxCount: 1 },
];

router.post("/upload", upload.fields(fields), (req, res) => {
  try {
    const files = req.files;
    const fields = req.body;

    // Process the uploaded files and form fields here
    console.log(files);
    console.log(fields);

    res.status(200).json({ message: "Files uploaded successfully" });
  } catch (error) {
    console.error(`Error uploading files: ${error.message}`);
    console.error(error.stack);
    res.status(500).json({ message: "Error uploading files" });
  }
});

export default router;
