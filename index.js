const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const videoRoutes = require("./routes/videoRoutes");
const purchaseRoutes = require("./routes/purchaseRoutes");
const commentRoutes = require("./routes/commentRoutes");
const giftRoutes = require("./routes/giftRoutes");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/purchase", purchaseRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/gifts", giftRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));