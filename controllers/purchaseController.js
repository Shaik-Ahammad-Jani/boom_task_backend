const User = require("../models/User");
const Video = require("../models/Video");
const Purchase = require("../models/Purchase");

exports.buyVideo = async (req, res) => {
  try {
    const userId = req.user.id;
    const videoId = req.params.videoId;
    const user = await User.findById(userId);
    const video = await Video.findById(videoId);

    if (!video || video.type !== "long") return res.status(404).json({ message: "Invalid video" });

    const alreadyPurchased = await Purchase.findOne({ user: userId, video: videoId });
    if (alreadyPurchased) return res.status(400).json({ message: "Already purchased" });

    if (user.walletBalance < video.price)
      return res.status(400).json({ message: "Insufficient balance" });

    user.walletBalance -= video.price;
    await user.save();
    await Purchase.create({ user: userId, video: videoId });

    res.json({ message: "Purchase successful", newBalance: user.walletBalance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
