import express from "express";
import { Creatdata, Getdata } from "../controller/authController.js";

const Routeer = express.Router();

Routeer.post("/control", Creatdata);
Routeer.get("/getdata", Getdata);

export default Routeer;

// http://localhost:3000/api/route/control

// http:localhost:3000/api/route/getdata
