import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectdb from "./config/db.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();
connectdb();
const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/route", authRoute);
const PORT = process.env.PORT || PORT;

app.listen(PORT, () => {
  console.log(`Server Connected only  http://localhost:${PORT}`);
});
