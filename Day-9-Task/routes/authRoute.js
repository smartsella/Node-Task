import express from "express";
import {
  authCreate1,
  authCreate2,
  authCreate3,
  authCreate4,
  authGet1,
  authGet2,
  authFetch1,
  authFetch2,
  authFetch3,
  authFetch4,
  authQuery1,
  authQuery2,
} from "../controllers/authController.js";

const Router = express.Router();

// -------------------- POST METHODS --------------------
Router.post("/create1", authCreate1);
Router.post("/create2", authCreate2);
Router.post("/create3", authCreate3);
Router.post("/create4", authCreate4);

// -------------------- PARAM METHODS (req.params) --------------------
Router.get("/link1/:id", authGet1);
Router.get("/link2/:id", authGet2);

// -------------------- FETCH ALL --------------------
Router.get("/fetch1", authFetch1);
Router.get("/fetch2", authFetch2);
Router.get("/fetch3", authFetch3);
Router.get("/fetch4", authFetch4);

// -------------------- QUERY METHODS --------------------
Router.get("/query1", authQuery1);
Router.get("/query2", authQuery2);

export default Router;

// POST http://localhost:3000/api/route/create1
// POST http://localhost:3000/api/route/create2
// POST http://localhost:3000/api/route/create3
// POST http://localhost:3000/api/route/create4

// GET http://localhost:3000/api/route/link1/67344389717ab30a476ef858
// GET http://localhost:3000/api/route/link2/67344389717ab30a476ef858

// GET http://localhost:3000/api/route/fetch1
// GET http://localhost:3000/api/route/fetch2
// GET http://localhost:3000/api/route/fetch3
// GET http://localhost:3000/api/route/fetch4

// GET http://localhost:3000/api/route/query1?name=selladurai
// GET http://localhost:3000/api/route/query2?email=xxx@gmail.com
