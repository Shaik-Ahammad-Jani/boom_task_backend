const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { giftCreator } = require("../controllers/giftController");

router.post("/:videoId", auth, giftCreator);

module.exports = router;