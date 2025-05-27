const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { buyVideo } = require("../controllers/purchaseController");

router.post("/:videoId", auth, buyVideo);

module.exports = router;