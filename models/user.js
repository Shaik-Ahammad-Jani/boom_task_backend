const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  walletBalance: { type: Number, default: 500 },
});
module.exports = mongoose.model("User", UserSchema);