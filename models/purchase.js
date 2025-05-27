const mongoose = require("mongoose");
const PurchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  video: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
  purchasedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Purchase", PurchaseSchema);