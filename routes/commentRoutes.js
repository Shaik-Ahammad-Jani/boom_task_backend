const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { addComment, getComments } = require("../controllers/commentController");

router.post("/:videoId", auth, addComment);
router.get("/:videoId", auth, getComments);

module.exports = router;