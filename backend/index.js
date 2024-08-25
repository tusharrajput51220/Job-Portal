import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import router from "./main.route.js";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS Configuration
const corsOptions = {
  origin: "https://job-portal-omega-five.vercel.app/", // Replace with your frontend URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));

app.use("/api/v1", router);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  connectDB();
  console.log(`App is listening on port ${port}`);
});
