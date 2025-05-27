const mongoose = require("mongoose");
const GiftSchema = new mongoose.Schema({
  fromUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  toCreator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  video: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
  amount: Number,
  giftedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Gift", GiftSchema);