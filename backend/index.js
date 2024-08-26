import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import router from "./main.route.js";
import mongoose from "mongoose";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS Configuration
const corsOptions = {
  origin: "https://job-portal-frontend-coral.vercel.app/", // Replace with your frontend URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));

// Database Connection
mongoose.connect('mongodb+srv://tusharrajput51220:Esxp2UcwuoGC5fFD@cluster0.cjyuatb.mongodb.net/');

// Main Routes
app.use("/api/v1", router);

// Simple GET API
app.get("/", (req, res) => {
  res.json("Hello");
});

// Server Start
const port = process.env.PORT || 8000;
app.listen(port, () => {
  connectDB();
  console.log(`App is listening on port ${port}`);
});
