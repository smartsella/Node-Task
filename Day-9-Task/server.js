import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectdb from "./config/db.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/route", authRoute);
const PORT = process.env.PORT || 5000;

connectdb();

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
