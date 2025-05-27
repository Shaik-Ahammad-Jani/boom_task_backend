const User = require("../models/user");
const Video = require("../models/video");
const Gift = require("../models/gift");

exports.giftCreator = async (req, res) => {
  try {
    const fromUser = await User.findById(req.user.id);
    const video = await Video.findById(req.params.videoId);
    const amount = parseInt(req.body.amount);

    if (!video || !amount || amount <= 0)
      return res.status(400).json({ message: "Invalid request" });

    if (fromUser.walletBalance < amount)
      return res.status(400).json({ message: "Insufficient balance" });

    fromUser.walletBalance -= amount;
    await fromUser.save();

    await Gift.create({
      fromUser: fromUser._id,
      toCreator: video.creator,
      video: video._id,
      amount,
    });

    res.json({ message: "Gift sent successfully", newBalance: fromUser.walletBalance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
