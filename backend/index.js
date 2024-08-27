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

// const corsOptions = {
//   origin: "http://localhost:3000", 
//   credentials: true,
// };
app.use(cors(corsOptions));

// Main Routes
app.use("/api/v1", router);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  connectDB();
  console.log(`App is listening on port ${port}`);
});
