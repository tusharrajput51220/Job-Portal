import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./utils/db.js";
import router from "./routes/userRoute.js"

const app = express();
dotenv.config();
// console.log(process.env.MONGO_URI)

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const coreOptions = {
  // origin: ['http://example.com', 'http://anotherdomain.com'], for more domains
  // origin: "*", for all
  origin: "http://localhost:5173",
  credentials: true,
};
console.log(router)
app.use(cors(coreOptions));
app.use("/",router)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  connectDB();
  console.log(`App is listening on port ${port}`);
});
