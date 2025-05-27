const Comment = require("../models/comment");

exports.addComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      video: req.params.videoId,
      user: req.user.id,
      text: req.body.text,
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ video: req.params.videoId })
      .sort({ createdAt: -1 })
      .populate("user", "username");
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
