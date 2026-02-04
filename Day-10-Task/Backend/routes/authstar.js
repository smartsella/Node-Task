import express from "express";
import {
  addPlanet,
  getPlanets,
  getPlanetById,
  updatePlanet,
  deletePlanet,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/moon", addPlanet);
router.get("/get", getPlanets);
router.get("/edit/:id", getPlanetById);
router.put("/update/:id", updatePlanet);
router.delete("/delete/:id", deletePlanet);

export default router;
