const Video = require("../models/Video");

exports.uploadVideo = async (req, res) => {
  try {
    const { title, description, type, url, price } = req.body;
    const fileUrl = type === "short" ? req.file?.path : url;
    const video = new Video({
      title,
      description,
      type,
      fileUrl,
      price,
      creator: req.user.id,
    });
    await video.save();
    res.status(201).json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFeed = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 }).populate("creator", "username");
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};