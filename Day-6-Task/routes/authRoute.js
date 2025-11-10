import express from "express";
import { authController } from "../controllers/authCotroller.js";

const authRoute = express.Router();

// POST method — body data
//http://localhost:3000/api/auth/avengers
authRoute.post("/avengers", authController);

// GET method with params
// http://localhost:3000/api/auth/powerstone/reality
authRoute.get("/powerstone/:name", (req, res) => {
  const { name } = req.params;
  res.json({
    message: `Powerstone name is ${name}`,
  });
});

//GET method with query
//http://localhost:3000/api/auth/thanos?name=sella&age=21
authRoute.get("/thanos", (req, res) => {
  const { name, planet } = req.query;
  res.json({
    message: `Query received`,
    name,
    planet,
  });
});

// GET method with headers
// http://localhost:3000/api/auth/header
authRoute.get("/header", (req, res) => {
  const name = req.header("name");
  const id = req.header("id");

  res.json({
    message: "Header data received",
    name,
    id,
  });
});

export default authRoute;
