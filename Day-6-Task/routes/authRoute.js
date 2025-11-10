import express from "express";
import {
  authCotroller,
  headercontroller,
  paramscontroller,
  querycontroller,
} from "../controllers/authCotroller.js";

const authRoute = express.Router();

//body mehtod for post   http://localhost:3000/api/auth/bodydatas
authRoute.post("/bodydatas", authCotroller);

//params for get  http://localhost:3000/api/auth/params/:21
authRoute.get("/params/:id", paramscontroller);

//query for get  http://localhost:3000/api/auth/querydatas?name=sella
authRoute.get("/querydatas", querycontroller);

//header for get method   http://localhost:3000/api/auth/headerdatas
authRoute.get("/headerdatas", headercontroller);

export default authRoute;
