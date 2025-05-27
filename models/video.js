const mongoose = require("mongoose");
const VideoSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: { type: String, enum: ["short", "long"] },
  fileUrl: String,
  price: { type: Number, default: 0 },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Video", VideoSchema);