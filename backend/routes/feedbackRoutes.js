const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const { parseCSV } = require("../utils/fileParser");
const { processText } = require("../services/nlpService");
const { clusterFeedback } = require("../services/clusteringService");
const { calculatePriority } = require("../services/priorityService");

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const feedbacks = await parseCSV(req.file.path);

    const processed = feedbacks.map((f) => processText(f));
    const clusters = clusterFeedback(processed);
    const insights = calculatePriority(clusters);

    res.json({ insights });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
