const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const auth = require("../middleware/authMiddleware");
const { uploadVideo, getFeed } = require("../controllers/videoController");

router.post("/upload", auth, upload.single("file"), uploadVideo);
router.get("/feed", auth, getFeed);

module.exports = router;
