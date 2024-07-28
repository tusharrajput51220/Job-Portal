import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./utils/db.js";
import router from "./main.route..js";

const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const coreOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(coreOptions));
app.use("/api/v1", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  connectDB();
  console.log(`App is listening on port ${port}`);
});
