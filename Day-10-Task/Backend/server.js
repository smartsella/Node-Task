import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authstar from "./routes/authstar.js";
import connectdb from "./config/mongoosedb.js";

dotenv.config();
connectdb();
const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/galaxy", authstar);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Only Conniting..http://localhost:${PORT}`);
});
