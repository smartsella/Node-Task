import express from "express";
import { authController } from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.post("/data", authController);

export default authRoute;

// http:localhost:3000/api/auth/data
