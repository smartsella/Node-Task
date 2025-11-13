import express from "express";
import { authController, getdatas } from "../controllers/authController.js";

const route = express.Router();

route.post("/control", authController);
route.get("/data", getdatas);

export default route;

// http://localhost:3000/api/auth/control

// http://localhost:3000/api/auth/data
